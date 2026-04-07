/**
 * File: Western Intel/app/src/main.js
 * Purpose: Core project script/module.
 * What It Does: Implements workflow logic used by Western Intel.
 * Why It Exists: Keeps this behavior isolated and maintainable for technicians.
 * Connected To: ./chat-server, ./google-ldap, ./indexer, ./vector-store, axios, cheerio, child_process, crypto, csv-parse/sync, electron
 * Notes: Auto-added explainability header; update with business-specific details as needed.
 */

const { app, BrowserWindow, Menu, ipcMain, shell, dialog } = require('electron');
const os = require('os');
const path = require('path');
const axios = require('axios');
const fs = require('fs');
const net = require('net');
const cheerio = require('cheerio');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const { parse: parseCsv } = require('csv-parse/sync');
const { execSync, spawn, spawnSync } = require('child_process');
const crypto = require('crypto');
const { buildWorkflowIndex, searchIndex } = require('./indexer');
const {
  buildContractorKnowledge,
  searchContractorKnowledge,
  findMentionedContractors,
  slugifyContractorId
} = require('./contractor-support');
const { startChatServer, stopChatServer, clearChatHistory } = require('./chat-server');
const { createVectorStore } = require('./vector-store');
const { GoogleLdapService, resolveGoogleLdapConfig, sanitizeConfigForRenderer } = require('./google-ldap');
const logger = require('./logger');
const { runHealthChecks } = require('./health-check');
const { resolveParadigmVendorRoot } = require('./config-paths');

const IS_DEVELOPMENT = process.argv.includes('--development') || !app.isPackaged;
const RUNTIME_GIT_AUTOCOMMIT = String(process.env.RUNTIME_GIT_AUTOCOMMIT || 'false').toLowerCase() === 'true';
const APP_UPDATE_REMOTE_URL = String(process.env.APP_UPDATE_REMOTE_URL || 'https://github.com/bhilty-wyo/westernintel.git').trim();
const APP_UPDATE_REMOTE_BRANCH = String(process.env.APP_UPDATE_REMOTE_BRANCH || 'main').trim() || 'main';

// LM Studio API endpoint (default local)
let LM_STUDIO_API = process.env.LM_STUDIO_API || 'http://127.0.0.1:1234/v1';
const LM_STUDIO_MODEL = process.env.LM_STUDIO_MODEL || 'openai/gpt-oss-20b';

const RESPONSE_DEFAULT_MAX_TOKENS = 1100;
const RESPONSE_LARGE_MAX_TOKENS = 2200;
const CONTEXT_DEFAULT_CHARS = 900;
const CONTEXT_LARGE_CHARS = 1400;
const LM_REQUEST_TIMEOUT_MS = 120000;

// Chat server URL (default local)
let CHAT_SERVER_URL = 'http://localhost:3000';

// Chat server enabled on this PC
let CHAT_SERVER_ENABLED = true;

// Auto-launch on login
let AUTO_LAUNCH = false;

let GOOGLE_LDAP_CONFIG = resolveGoogleLdapConfig();
const googleLdapService = new GoogleLdapService(GOOGLE_LDAP_CONFIG);
let AUTH_SESSION = null;

const AUTH_RATE_LIMIT_WINDOW_MS = Number(process.env.AUTH_RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000);
const AUTH_RATE_LIMIT_MAX_FAILURES = Number(process.env.AUTH_RATE_LIMIT_MAX_FAILURES || 5);
const AUTH_RATE_LIMIT_LOCKOUT_MS = Number(process.env.AUTH_RATE_LIMIT_LOCKOUT_MS || 10 * 60 * 1000);
const AUTH_ATTEMPT_TRACKER = new Map();
const AUTH_AUDIT_LOG_PATH = path.join(app.getPath('userData'), 'logs', 'auth-audit.log');

const LOCAL_ADMIN_USERNAME = String(process.env.LOCAL_ADMIN_USERNAME || 'admin').trim();
const LOCAL_ADMIN_PASSWORD = String(process.env.LOCAL_ADMIN_PASSWORD || 'Admin@123').trim();

const PARADIGM_VENDOR_ROOT_WINDOWS = resolveParadigmVendorRoot();
const PARADIGM_CLIENT_RELATIVE_PATH = path.join('Paradigm_Client', 'ParadigmClient.exe');
const PARADIGM_UPDATE_RELATIVE_PATH = path.join('Paradigm_Client', 'Update', 'Paradigm_Update.exe');
const PARADIGM_RUNTIME_ROOT = path.join(app.getPath('userData'), 'paradigm-runtime');
const PARADIGM_STAGED_ROOT = path.join(PARADIGM_RUNTIME_ROOT, 'Paradigm Accounting');
const PARADIGM_STAGE_METADATA_PATH = path.join(PARADIGM_RUNTIME_ROOT, 'stage-metadata.json');
const PARADIGM_WINE_PREFIX = path.join(PARADIGM_RUNTIME_ROOT, 'wine-prefix');
const PARADIGM_BUNDLED_DIR_NAME = 'paradigm';
const PARADIGM_BUNDLED_ROOT_NAME = 'Paradigm Accounting';
let PARADIGM_LAUNCHER_PATHS = {
  clientPath: '',
  updaterPath: ''
};

async function extractPdfText(buffer) {
  const parseFn =
    (typeof pdfParse === 'function' && pdfParse) ||
    (pdfParse && typeof pdfParse.default === 'function' && pdfParse.default) ||
    (pdfParse && typeof pdfParse.pdfParse === 'function' && pdfParse.pdfParse);

  if (parseFn) {
    const result = await parseFn(buffer);
    if (typeof result === 'string') return result;
    return String((result && result.text) || '');
  }

  const PDFParseCtor =
    (pdfParse && typeof pdfParse.PDFParse === 'function' && pdfParse.PDFParse) ||
    (pdfParse && pdfParse.default && typeof pdfParse.default.PDFParse === 'function' && pdfParse.default.PDFParse);

  if (PDFParseCtor) {
    const parser = new PDFParseCtor({ data: buffer });
    try {
      const result = await parser.getText();
      if (typeof result === 'string') return result;
      return String((result && result.text) || '');
    } finally {
      if (parser && typeof parser.destroy === 'function') {
        try {
          await parser.destroy();
        } catch {
          // ignore cleanup errors
        }
      }
    }
  }

  throw new Error('Unsupported pdf-parse module shape');
}

function isLdapAuthRequired() {
  return !!(GOOGLE_LDAP_CONFIG && GOOGLE_LDAP_CONFIG.enabled);
}

function buildOpenAccessSession() {
  return {
    authenticated: true,
    role: 'admin',
    source: 'open-access',
    user: {
      name: 'Open Access',
      mail: 'open-access@local',
      uid: 'open-access'
    },
    loggedInAt: new Date().toISOString()
  };
}

// Persisted settings
const settingsPath = path.join(app.getPath('userData'), 'settings.json');
const ingestJournalPath = path.join(app.getPath('userData'), 'ingest-journal.json');
const vectorStorePath = path.join(app.getPath('userData'), 'ingest-vectors.json');
const vectorStore = createVectorStore(vectorStorePath);

const DEFAULT_KB_FILENAME = 'Western Building Supply knowledgebase.md';
let KNOWLEDGE_BASE_PATH = null;
const PARADIGM_ARTICLE_COUNT = 478;
const CONTRACTOR_RESULT_LIMIT = 3;
const DEFAULT_CONTRACTOR_SHEET_URL = process.env.CONTRACTOR_SHEET_URL || 'https://docs.google.com/spreadsheets/d/1RzkmU86Z4uDjBdDwHfRUKh2E-AK2gXaWlot7n9G8Fxc/edit?usp=sharing';

const INGEST_CATEGORIES = [
  { id: 'company-info', label: 'Company Information' },
  { id: 'csdirector', label: 'CSDirector' },
  { id: 'smartbuild', label: 'SmartBuild' },
  { id: 'western', label: 'Western Building Supply' },
  { id: 'paradigm', label: 'Paradigm' }
];

const SUPPORTED_INGEST_EXTENSIONS = new Set(['.txt', '.md', '.pdf', '.docx', '.html', '.htm', '.csv']);

function normalizeContentForHash(text) {
  return String(text || '').replace(/\s+/g, ' ').trim().toLowerCase();
}

function hashContent(text) {
  return crypto.createHash('sha256').update(normalizeContentForHash(text)).digest('hex');
}

function escapeRegex(text) {
  return String(text || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function generateIngestId() {
  return `ingest_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
}

function loadIngestJournal() {
  try {
    if (!fs.existsSync(ingestJournalPath)) return [];
    const raw = fs.readFileSync(ingestJournalPath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveIngestJournal(entries) {
  fs.writeFileSync(ingestJournalPath, JSON.stringify(entries, null, 2), 'utf8');
}

function getSortedIngestEntries() {
  return loadIngestJournal().sort((a, b) => String(b.addedAt).localeCompare(String(a.addedAt)));
}

function removeEntryFromKnowledgeBase(kbPath, id) {
  const current = fs.readFileSync(kbPath, 'utf8');
  const pattern = new RegExp(`\\n?<!-- INGEST-ENTRY:${escapeRegex(id)}:START -->[\\s\\S]*?<!-- INGEST-ENTRY:${escapeRegex(id)}:END -->\\n?`, 'g');
  const updated = current.replace(pattern, '\n');
  if (updated === current) return false;
  fs.writeFileSync(kbPath, updated, 'utf8');
  return true;
}

function replaceEntryInKnowledgeBase(kbPath, id, replacementEntryText) {
  const current = fs.readFileSync(kbPath, 'utf8');
  const pattern = new RegExp(`<!-- INGEST-ENTRY:${escapeRegex(id)}:START -->[\\s\\S]*?<!-- INGEST-ENTRY:${escapeRegex(id)}:END -->`, 'g');
  const updated = current.replace(pattern, replacementEntryText.trim());
  if (updated === current) return false;
  fs.writeFileSync(kbPath, updated, 'utf8');
  return true;
}

function attemptGitCommitAndPush(kbPath, message) {
  if (!RUNTIME_GIT_AUTOCOMMIT) {
    return { committed: false, pushed: false, error: 'Runtime git auto-commit is disabled.' };
  }

  try {
    const repoRoot = execSync(`git -C "${path.dirname(kbPath)}" rev-parse --show-toplevel`, { encoding: 'utf8' }).trim();
    execSync(`git -C "${repoRoot}" add "${kbPath}"`, { stdio: 'pipe' });

    let committed = false;
    try {
      execSync(`git -C "${repoRoot}" commit -m "${message.replace(/"/g, '\\"')}"`, { stdio: 'pipe' });
      committed = true;
    } catch {
      return { committed: false, pushed: false, error: 'No new git changes to commit.' };
    }

    let pushed = false;
    let pushError = null;
    try {
      const branch = execSync(`git -C "${repoRoot}" rev-parse --abbrev-ref HEAD`, { encoding: 'utf8' }).trim();
      execSync(`git -C "${repoRoot}" push origin ${branch}`, { stdio: 'pipe' });
      pushed = true;
    } catch (error) {
      pushError = error.message;
    }

    return { committed, pushed, error: pushError };
  } catch (error) {
    return { committed: false, pushed: false, error: error.message };
  }
}

function findDuplicateCandidate(content, currentId) {
  const normalizedHash = hashContent(content);
  const entries = loadIngestJournal();
  const exactMatch = entries.find((entry) => entry.id !== currentId && entry.contentHash === normalizedHash);
  if (exactMatch) {
    return {
      type: 'exact',
      id: exactMatch.id,
      title: exactMatch.title,
      similarity: 1
    };
  }

  const embedding = vectorStore.computeEmbedding(content);
  const vectorMatch = vectorStore.findMostSimilar(embedding, currentId);
  if (vectorMatch && vectorMatch.similarity >= 0.95) {
    return {
      type: 'near',
      id: vectorMatch.id,
      title: vectorMatch.title,
      similarity: vectorMatch.similarity
    };
  }

  return null;
}

function loadSettings() {
  try {
    if (fs.existsSync(settingsPath)) {
      const data = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));
      if (data && data.lmStudioUrl) {
        LM_STUDIO_API = normalizeLmStudioUrl(data.lmStudioUrl);
      }
      if (data && data.chatServerUrl) {
        CHAT_SERVER_URL = normalizeChatServerUrl(data.chatServerUrl);
      }
      if (data && typeof data.chatServerEnabled === 'boolean') {
        CHAT_SERVER_ENABLED = data.chatServerEnabled;
      }
      if (data && typeof data.autoLaunch === 'boolean') {
        AUTO_LAUNCH = data.autoLaunch;
      }
      if (data && data.googleLdap && typeof data.googleLdap === 'object') {
        GOOGLE_LDAP_CONFIG = resolveGoogleLdapConfig(data.googleLdap);
        googleLdapService.setConfig(GOOGLE_LDAP_CONFIG);
      }
      if (data && data.paradigmLauncherPaths && typeof data.paradigmLauncherPaths === 'object') {
        PARADIGM_LAUNCHER_PATHS = {
          clientPath: String(data.paradigmLauncherPaths.clientPath || '').trim(),
          updaterPath: String(data.paradigmLauncherPaths.updaterPath || '').trim()
        };
      }
    } else if (app.isPackaged) {
      const installerPreference = readInstallerAutoLaunchPreference();
      AUTO_LAUNCH = installerPreference !== null ? installerPreference : true;
      saveSettings({ autoLaunch: AUTO_LAUNCH });
      clearInstallerAutoLaunchPreference();
    }
  } catch (error) {
    console.error('[Settings] Failed to load settings:', error.message);
  }
}

function readInstallerAutoLaunchPreference() {
  if (process.platform !== 'win32') return null;
  try {
    const output = execSync(
      'reg query "HKLM\\Software\\Western Intelligence" /v AutoLaunch',
      { encoding: 'utf8' }
    );
    const match = output.match(/AutoLaunch\s+REG_DWORD\s+0x([0-9a-f]+)/i);
    if (!match) return null;
    return parseInt(match[1], 16) === 1;
  } catch {
    return null;
  }
}

function clearInstallerAutoLaunchPreference() {
  if (process.platform !== 'win32') return;
  try {
    execSync('reg delete "HKLM\\Software\\Western Intelligence" /v AutoLaunch /f', {
      stdio: 'ignore'
    });
  } catch {
    // Ignore cleanup errors
  }
}

function saveSettings(partial) {
  try {
    let current = {};
    if (fs.existsSync(settingsPath)) {
      current = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));
    }
    const next = { ...current, ...partial };
    fs.writeFileSync(settingsPath, JSON.stringify(next, null, 2));
  } catch (error) {
    console.error('[Settings] Failed to save settings:', error.message);
  }
}

function getParadigmLauncherPaths() {
  return {
    clientPath: String(PARADIGM_LAUNCHER_PATHS.clientPath || '').trim(),
    updaterPath: String(PARADIGM_LAUNCHER_PATHS.updaterPath || '').trim()
  };
}

function normalizeLmStudioUrl(url) {
  let trimmed = String(url || '').trim().replace(/\/+$/, '');
  if (!trimmed) return 'http://127.0.0.1:1234/v1';
  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = `http://${trimmed}`;
  }
  try {
    const parsed = new URL(trimmed);
    if (!parsed.port && (parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1')) {
      parsed.port = '1234';
    }
    trimmed = parsed.toString().replace(/\/+$/, '');
  } catch {
    // Keep original trimmed value if URL parsing fails
  }
  return trimmed.endsWith('/v1') ? trimmed : `${trimmed}/v1`;
}

function normalizeChatServerUrl(url) {
  let trimmed = String(url || '').trim().replace(/\/+$/, '');
  if (!trimmed) return 'http://localhost:3000';
  if (!/^https?:\/\//i.test(trimmed)) {
    trimmed = `http://${trimmed}`;
  }
  return trimmed;
}

function normalizeAuthIdentifier(identifier) {
  return String(identifier || '').trim().toLowerCase();
}

function hashAuthIdentifier(identifier) {
  const normalized = normalizeAuthIdentifier(identifier);
  if (!normalized) return 'unknown';
  return crypto.createHash('sha256').update(normalized).digest('hex').substring(0, 16);
}

function pruneAuthAttemptTracker() {
  const now = Date.now();
  for (const [key, state] of AUTH_ATTEMPT_TRACKER.entries()) {
    if (!state) {
      AUTH_ATTEMPT_TRACKER.delete(key);
      continue;
    }

    const lockExpired = !state.lockedUntil || now > state.lockedUntil;
    const quietForWindow = !state.lastFailureAt || (now - state.lastFailureAt) > AUTH_RATE_LIMIT_WINDOW_MS;
    if (lockExpired && quietForWindow) {
      AUTH_ATTEMPT_TRACKER.delete(key);
    }
  }
}

function getAuthThrottleState(identifier) {
  const key = normalizeAuthIdentifier(identifier);
  if (!key) return { blocked: false, attemptsRemaining: AUTH_RATE_LIMIT_MAX_FAILURES };

  pruneAuthAttemptTracker();
  const now = Date.now();
  const state = AUTH_ATTEMPT_TRACKER.get(key);

  if (!state) {
    return { blocked: false, attemptsRemaining: AUTH_RATE_LIMIT_MAX_FAILURES };
  }

  if (state.lockedUntil && now < state.lockedUntil) {
    return {
      blocked: true,
      retryAfterSeconds: Math.max(1, Math.ceil((state.lockedUntil - now) / 1000)),
      attemptsRemaining: 0
    };
  }

  if (state.lastFailureAt && (now - state.lastFailureAt) > AUTH_RATE_LIMIT_WINDOW_MS) {
    AUTH_ATTEMPT_TRACKER.delete(key);
    return { blocked: false, attemptsRemaining: AUTH_RATE_LIMIT_MAX_FAILURES };
  }

  const attemptsRemaining = Math.max(0, AUTH_RATE_LIMIT_MAX_FAILURES - Number(state.failures || 0));
  return { blocked: false, attemptsRemaining };
}

function recordAuthFailure(identifier) {
  const key = normalizeAuthIdentifier(identifier);
  if (!key) return getAuthThrottleState(identifier);

  const now = Date.now();
  const existing = AUTH_ATTEMPT_TRACKER.get(key);

  const withinWindow = existing && existing.lastFailureAt && (now - existing.lastFailureAt) <= AUTH_RATE_LIMIT_WINDOW_MS;
  const failures = withinWindow ? Number(existing.failures || 0) + 1 : 1;

  const next = {
    failures,
    lastFailureAt: now,
    lockedUntil: failures >= AUTH_RATE_LIMIT_MAX_FAILURES ? now + AUTH_RATE_LIMIT_LOCKOUT_MS : 0
  };

  AUTH_ATTEMPT_TRACKER.set(key, next);
  return getAuthThrottleState(identifier);
}

function clearAuthFailureState(identifier) {
  const key = normalizeAuthIdentifier(identifier);
  if (!key) return;
  AUTH_ATTEMPT_TRACKER.delete(key);
}

function appendAuthAuditEvent(eventType, identifier, details = {}) {
  const event = {
    timestamp: new Date().toISOString(),
    eventType: String(eventType || 'unknown'),
    identifierHash: hashAuthIdentifier(identifier),
    ...details
  };

  logger.info('Auth audit event', event);

  try {
    ensureDirectory(path.dirname(AUTH_AUDIT_LOG_PATH));
    fs.appendFileSync(AUTH_AUDIT_LOG_PATH, `${JSON.stringify(event)}\n`, 'utf8');
  } catch (error) {
    logger.warn('Failed to write auth audit log', { error: error.message });
  }
}

function validateConfiguredExecutablePath(inputPath, target) {
  const trimmed = String(inputPath || '').trim();
  if (!trimmed) {
    return { valid: true, warnings: [], exists: false };
  }

  const warnings = [];
  const resolved = path.resolve(trimmed);

  try {
    if (!fs.existsSync(resolved)) {
      warnings.push(`${target} path does not exist yet: ${resolved}`);
      return { valid: false, warnings, exists: false, resolvedPath: resolved };
    }

    const stats = fs.statSync(resolved);
    if (!stats.isFile()) {
      warnings.push(`${target} path is not a file: ${resolved}`);
      return { valid: false, warnings, exists: true, resolvedPath: resolved };
    }

    if (process.platform === 'win32') {
      const ext = path.extname(resolved).toLowerCase();
      const allowed = new Set(['.exe', '.bat', '.cmd', '.lnk']);
      if (ext && !allowed.has(ext)) {
        warnings.push(`${target} path extension is unusual for Windows launcher: ${ext}`);
      }
    }
  } catch (error) {
    warnings.push(`${target} path validation failed: ${error.message}`);
    return { valid: false, warnings, exists: false, resolvedPath: resolved };
  }

  return { valid: true, warnings, exists: true, resolvedPath: resolved };
}

function getChatServerPort(url) {
  const normalized = normalizeChatServerUrl(url);
  try {
    const parsed = new URL(normalized);
    const port = Number(parsed.port || '3000');
    return Number.isFinite(port) && port > 0 ? port : 3000;
  } catch {
    return 3000;
  }
}

function parseEndpoint(url, defaultPort) {
  const normalized = String(url || '').trim();
  const parsed = new URL(normalized);
  const port = Number(parsed.port || String(defaultPort));
  return {
    baseUrl: `${parsed.protocol}//${parsed.host}`,
    host: parsed.hostname,
    port,
    protocol: parsed.protocol
  };
}

function probeTcp(host, port, timeoutMs = 4000) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let completed = false;

    const finish = (result) => {
      if (completed) return;
      completed = true;
      try {
        socket.destroy();
      } catch {
        // ignore socket cleanup issues
      }
      resolve(result);
    };

    socket.setTimeout(timeoutMs);
    socket.once('connect', () => finish({ ok: true }));
    socket.once('timeout', () => finish({ ok: false, error: `Timeout after ${timeoutMs}ms` }));
    socket.once('error', (error) => finish({ ok: false, error: error.code || error.message }));

    try {
      socket.connect(port, host);
    } catch (error) {
      finish({ ok: false, error: error.code || error.message });
    }
  });
}

async function probeHttp(url, timeoutMs = 5000) {
  try {
    const response = await axios.get(url, {
      timeout: timeoutMs,
      validateStatus: () => true
    });
    return {
      ok: response.status >= 200 && response.status < 500,
      status: response.status
    };
  } catch (error) {
    return {
      ok: false,
      error: error.code || error.message
    };
  }
}

async function runNetworkDiagnostics() {
  const lmBase = LM_STUDIO_API.replace(/\/v1$/, '');
  const chatBase = CHAT_SERVER_URL;
  const lmEndpoint = parseEndpoint(lmBase, 1234);
  const chatEndpoint = parseEndpoint(chatBase, 3000);

  const [lmTcp, lmHttp, chatTcp, chatHttp] = await Promise.all([
    probeTcp(lmEndpoint.host, lmEndpoint.port),
    probeHttp(`${lmBase}/models`),
    probeTcp(chatEndpoint.host, chatEndpoint.port),
    probeHttp(chatBase)
  ]);

  let recommendation = '';
  if (!lmTcp.ok || !chatTcp.ok) {
    recommendation = 'Check VPN client-to-client routing and firewall rules for configured ports.';
  } else if (!lmHttp.ok || !chatHttp.ok) {
    recommendation = 'TCP is reachable but HTTP failed; verify endpoint URL/protocol and service health.';
  } else {
    recommendation = 'VPN connectivity looks healthy for LM Studio and Chat endpoints.';
  }

  return {
    success: true,
    lmStudio: {
      baseUrl: lmBase,
      tcp: lmTcp,
      http: lmHttp
    },
    chatServer: {
      baseUrl: chatBase,
      tcp: chatTcp,
      http: chatHttp
    },
    recommendation
  };
}

function getLocalIp() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return '127.0.0.1';
}

function applyAutoLaunchSetting(enabled) {
  try {
    const settings = {
      openAtLogin: enabled,
      openAsHidden: false
    };

    if (process.platform === 'win32') {
      settings.path = process.execPath;
      if (!app.isPackaged) {
        settings.args = [`"${app.getAppPath()}"`];
      }
    }

    app.setLoginItemSettings(settings);
  } catch (error) {
    console.error('[Settings] Failed to set auto-launch:', error.message);
  }
}

function resolveFirstExistingPath(candidates, { mustBeDirectory = false } = {}) {
  for (const candidate of candidates) {
    if (!candidate) continue;
    try {
      if (!fs.existsSync(candidate)) continue;
      if (mustBeDirectory && !fs.statSync(candidate).isDirectory()) continue;
      return path.resolve(candidate);
    } catch {
      // Ignore invalid candidate paths
    }
  }
  return null;
}

function ensureDirectory(directoryPath) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

function resolveParadigmSourceRoot() {
  const bundledCandidates = [
    path.join(process.resourcesPath || '', PARADIGM_BUNDLED_DIR_NAME, PARADIGM_BUNDLED_ROOT_NAME),
    path.join(app.getAppPath ? app.getAppPath() : process.cwd(), 'build', 'paradigm-accounting', PARADIGM_BUNDLED_ROOT_NAME),
    path.join(process.cwd(), 'build', 'paradigm-accounting', PARADIGM_BUNDLED_ROOT_NAME)
  ];

  const bundledRoot = resolveFirstExistingPath(bundledCandidates, { mustBeDirectory: true });

  if (process.platform === 'win32') {
    return resolveFirstExistingPath([
      process.env.PARADIGM_SOURCE_ROOT,
      bundledRoot,
      PARADIGM_VENDOR_ROOT_WINDOWS
    ], { mustBeDirectory: true });
  }

  return resolveFirstExistingPath([
    process.env.PARADIGM_SOURCE_ROOT,
    bundledRoot,
    path.join(app.getPath('home'), 'Paragon Computing Solutions', 'Paradigm Accounting'),
    path.join(app.getPath('home'), 'paradigm-source', 'Paradigm Accounting')
  ], { mustBeDirectory: true });
}

function getParadigmExecutablePaths(rootDirectory) {
  const root = path.resolve(rootDirectory);
  return {
    root,
    clientPath: path.join(root, PARADIGM_CLIENT_RELATIVE_PATH),
    updaterPath: path.join(root, PARADIGM_UPDATE_RELATIVE_PATH)
  };
}

function validateParadigmTree(rootDirectory) {
  const paths = getParadigmExecutablePaths(rootDirectory);
  const missing = [];

  if (!fs.existsSync(paths.clientPath)) {
    missing.push(paths.clientPath);
  }

  if (!fs.existsSync(paths.updaterPath)) {
    missing.push(paths.updaterPath);
  }

  return {
    valid: missing.length === 0,
    ...paths,
    missing
  };
}

function buildParadigmSourceSignature(rootDirectory) {
  const sourceRoot = path.resolve(rootDirectory);
  const paths = getParadigmExecutablePaths(sourceRoot);
  const trackedFiles = [paths.clientPath, paths.updaterPath];
  const signatures = trackedFiles.map((filePath) => {
    try {
      const stats = fs.statSync(filePath);
      return {
        filePath,
        size: stats.size,
        mtimeMs: Math.trunc(stats.mtimeMs)
      };
    } catch {
      return {
        filePath,
        missing: true
      };
    }
  });

  return crypto
    .createHash('sha256')
    .update(JSON.stringify({ sourceRoot, signatures }))
    .digest('hex');
}

function loadParadigmStageMetadata() {
  try {
    if (!fs.existsSync(PARADIGM_STAGE_METADATA_PATH)) {
      return null;
    }

    const raw = fs.readFileSync(PARADIGM_STAGE_METADATA_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function saveParadigmStageMetadata(metadata) {
  try {
    fs.writeFileSync(PARADIGM_STAGE_METADATA_PATH, JSON.stringify(metadata, null, 2), 'utf8');
  } catch {
    // Ignore metadata persistence errors; launch path fallback remains valid.
  }
}

function stageParadigmTree() {
  const sourceRoot = resolveParadigmSourceRoot();
  if (!sourceRoot) {
    throw new Error('Paradigm source folder not found. Set PARADIGM_SOURCE_ROOT or install Paradigm in the expected location.');
  }

  ensureDirectory(PARADIGM_RUNTIME_ROOT);
  const normalizedSourceRoot = path.resolve(sourceRoot);
  const sourceSignature = buildParadigmSourceSignature(normalizedSourceRoot);
  const currentMetadata = loadParadigmStageMetadata();
  const stagedValidation = validateParadigmTree(PARADIGM_STAGED_ROOT);

  const mustRestage = !stagedValidation.valid
    || !currentMetadata
    || String(currentMetadata.sourceRoot || '') !== normalizedSourceRoot
    || String(currentMetadata.sourceSignature || '') !== sourceSignature;

  if (mustRestage) {
    fs.cpSync(normalizedSourceRoot, PARADIGM_STAGED_ROOT, {
      recursive: true,
      force: true,
      errorOnExist: false
    });
  }

  const validation = validateParadigmTree(PARADIGM_STAGED_ROOT);
  if (!validation.valid) {
    throw new Error(`Staged Paradigm files are incomplete. Missing: ${validation.missing.join(', ')}`);
  }

  saveParadigmStageMetadata({
    sourceRoot: normalizedSourceRoot,
    sourceSignature,
    stagedRoot: validation.root,
    stagedAt: new Date().toISOString()
  });

  return {
    sourceRoot: normalizedSourceRoot,
    restaged: mustRestage,
    ...validation
  };
}

function resolveWineCommand() {
  const commands = ['wine64', 'wine'];
  for (const cmd of commands) {
    const probe = spawnSync(cmd, ['--version'], { stdio: 'ignore' });
    if (!probe.error && probe.status === 0) {
      return cmd;
    }
  }
  return null;
}

function launchDetached(command, args, options) {
  const child = spawn(command, args, {
    detached: true,
    stdio: 'ignore',
    ...options
  });
  child.unref();
  return child.pid;
}

function launchParadigmExecutable(mode) {
  const isUpdate = mode === 'update';
  const configured = getParadigmLauncherPaths();
  const configuredTarget = isUpdate ? configured.updaterPath : configured.clientPath;
  const configuredPath = resolveFirstExistingPath([configuredTarget]);

  if (configuredPath) {
    if (process.platform === 'win32') {
      const pid = launchDetached(configuredPath, [], {
        cwd: path.dirname(configuredPath),
        windowsHide: false
      });

      return {
        success: true,
        mode: 'windows-configured',
        launchedPath: configuredPath,
        pid
      };
    }

    ensureDirectory(PARADIGM_WINE_PREFIX);
    const isExe = path.extname(configuredPath).toLowerCase() === '.exe';

    if (isExe) {
      const wineCommand = resolveWineCommand();
      if (!wineCommand) {
        throw new Error('Configured ERP path is a Windows executable, but Wine was not found. Install wine64/wine and try again.');
      }

      const pid = launchDetached(wineCommand, [configuredPath], {
        cwd: path.dirname(configuredPath),
        env: {
          ...process.env,
          WINEPREFIX: PARADIGM_WINE_PREFIX
        }
      });

      return {
        success: true,
        mode: 'linux-configured-wine',
        launchedPath: configuredPath,
        pid
      };
    }

    const pid = launchDetached(configuredPath, [], {
      cwd: path.dirname(configuredPath),
      env: {
        ...process.env,
        WINEPREFIX: PARADIGM_WINE_PREFIX
      }
    });

    return {
      success: true,
      mode: 'linux-configured-native',
      launchedPath: configuredPath,
      pid
    };
  }

  if (process.platform === 'win32') {
    const sourceRoot = resolveParadigmSourceRoot();
    const shouldUseStaged = !!sourceRoot && path.resolve(sourceRoot) !== path.resolve(PARADIGM_VENDOR_ROOT_WINDOWS);

    if (shouldUseStaged) {
      const staged = stageParadigmTree();
      const target = isUpdate ? staged.updaterPath : staged.clientPath;
      const pid = launchDetached(target, [], {
        cwd: path.dirname(target),
        windowsHide: false
      });

      return {
        success: true,
        mode: 'windows-staged-bundled',
        stagedRoot: staged.root,
        restaged: staged.restaged,
        launchedPath: target,
        pid
      };
    }

    const directValidation = validateParadigmTree(PARADIGM_VENDOR_ROOT_WINDOWS);
    if (!directValidation.valid) {
      throw new Error(`Official Paradigm install is incomplete and no bundled payload was found. Missing: ${directValidation.missing.join(', ')}`);
    }

    const target = isUpdate ? directValidation.updaterPath : directValidation.clientPath;
    const pid = launchDetached(target, [], {
      cwd: path.dirname(target),
      windowsHide: false
    });

    return {
      success: true,
      mode: 'windows-official',
      launchedPath: target,
      pid
    };
  }

  const staged = stageParadigmTree();
  const wineCommand = resolveWineCommand();
  if (!wineCommand) {
    throw new Error('Wine is required on Linux but was not found. Install wine64/wine and try again.');
  }

  const target = isUpdate ? staged.updaterPath : staged.clientPath;
  ensureDirectory(PARADIGM_WINE_PREFIX);

  const pid = launchDetached(wineCommand, [target], {
    cwd: path.dirname(target),
    env: {
      ...process.env,
      WINEPREFIX: PARADIGM_WINE_PREFIX
    }
  });

  return {
    success: true,
    mode: 'linux-wine-staged',
    stagedRoot: staged.root,
    restaged: staged.restaged,
    launchedPath: target,
    pid
  };
}

function resolveKnowledgeBasePath() {
  const candidates = [];
  const envPath = process.env.KB_PATH || process.env.KNOWLEDGE_BASE_PATH;
  if (envPath) {
    candidates.push(envPath);
  }

  const appPath = app.getAppPath ? app.getAppPath() : path.join(__dirname, '..');
  candidates.push(path.join(appPath, DEFAULT_KB_FILENAME));
  candidates.push(path.join(appPath, '..', DEFAULT_KB_FILENAME));
  candidates.push(path.join(process.cwd(), DEFAULT_KB_FILENAME));

  return resolveFirstExistingPath(candidates);
}

function resolveSmartBuildIndexPath() {
  const candidates = [];
  const envPath = process.env.SMARTBUILD_INDEX_PATH;
  if (envPath) {
    candidates.push(envPath);
  }

  const appPath = app.getAppPath ? app.getAppPath() : path.join(__dirname, '..');
  candidates.push(path.join(appPath, '..', 'data', 'smartbuild_docs', 'index.json'));
  candidates.push(path.join(appPath, 'data', 'smartbuild_docs', 'index.json'));
  candidates.push(path.join(process.cwd(), 'data', 'smartbuild_docs', 'index.json'));

  return resolveFirstExistingPath(candidates);
}

function resolveSmartBuildDocsPath() {
  const candidates = [];
  const appPath = app.getAppPath ? app.getAppPath() : path.join(__dirname, '..');

  candidates.push(path.join(appPath, '..', 'data', 'smartbuild_docs'));
  candidates.push(path.join(appPath, 'data', 'smartbuild_docs'));
  candidates.push(path.join(process.cwd(), 'data', 'smartbuild_docs'));
  candidates.push(path.join(__dirname, '..', '..', 'data', 'smartbuild_docs'));
  candidates.push(path.join(__dirname, '..', '..', '..', 'data', 'smartbuild_docs'));

  return resolveFirstExistingPath(candidates, { mustBeDirectory: true });
}

function resolveManualFormsIndexPath() {
  const candidates = [];
  const envPath = process.env.MANUAL_FORMS_INDEX_PATH;
  if (envPath) {
    candidates.push(envPath);
  }

  const appPath = app.getAppPath ? app.getAppPath() : path.join(__dirname, '..');
  candidates.push(path.join(appPath, '..', 'data', 'manual_forms_docs', 'index.json'));
  candidates.push(path.join(appPath, 'data', 'manual_forms_docs', 'index.json'));
  candidates.push(path.join(process.cwd(), 'data', 'manual_forms_docs', 'index.json'));

  return resolveFirstExistingPath(candidates);
}

function resolveManualFormsDocsPath() {
  const candidates = [];
  const envPath = process.env.MANUAL_FORMS_DOCS_PATH;
  if (envPath) {
    candidates.push(envPath);
  }

  const appPath = app.getAppPath ? app.getAppPath() : path.join(__dirname, '..');
  candidates.push(path.join(appPath, '..', 'data', 'manual_forms_docs'));
  candidates.push(path.join(appPath, 'data', 'manual_forms_docs'));
  candidates.push(path.join(process.cwd(), 'data', 'manual_forms_docs'));
  candidates.push(path.join(__dirname, '..', '..', 'data', 'manual_forms_docs'));
  candidates.push(path.join(__dirname, '..', '..', '..', 'data', 'manual_forms_docs'));

  return resolveFirstExistingPath(candidates, { mustBeDirectory: true });
}

function resolveContractorRosterPath() {
  const candidates = [];
  const envPath = process.env.CONTRACTOR_ROSTER_PATH;
  if (envPath) {
    candidates.push(envPath);
  }

  const appPath = app.getAppPath ? app.getAppPath() : path.join(__dirname, '..');
  candidates.push(path.join(app.getPath('userData'), 'contractor-roster.json'));
  candidates.push(path.join(appPath, '..', 'data', 'manual_forms_docs', 'contractor-roster.json'));
  candidates.push(path.join(appPath, 'data', 'manual_forms_docs', 'contractor-roster.json'));
  candidates.push(path.join(process.cwd(), 'data', 'manual_forms_docs', 'contractor-roster.json'));

  for (const candidate of candidates) {
    if (!candidate) continue;
    return path.resolve(candidate);
  }

  return path.join(app.getPath('userData'), 'contractor-roster.json');
}

function resolveContractorSheetTabsPath() {
  const candidates = [];
  const envPath = process.env.CONTRACTOR_SHEET_TABS_PATH;
  if (envPath) {
    candidates.push(envPath);
  }

  const appPath = app.getAppPath ? app.getAppPath() : path.join(__dirname, '..');
  candidates.push(path.join(appPath, '..', 'data', 'manual_forms_docs', 'contractor-sheet-tabs.json'));
  candidates.push(path.join(appPath, 'data', 'manual_forms_docs', 'contractor-sheet-tabs.json'));
  candidates.push(path.join(process.cwd(), 'data', 'manual_forms_docs', 'contractor-sheet-tabs.json'));

  return resolveFirstExistingPath(candidates);
}

function loadContractorSheetTabs() {
  const configPath = resolveContractorSheetTabsPath();
  if (!configPath || !fs.existsSync(configPath)) {
    return {
      sheetUrl: DEFAULT_CONTRACTOR_SHEET_URL,
      tabs: []
    };
  }

  try {
    const raw = fs.readFileSync(configPath, 'utf8');
    const parsed = JSON.parse(raw);
    const tabs = Array.isArray(parsed?.tabs)
      ? parsed.tabs.map((tab) => String(tab || '').trim()).filter(Boolean)
      : [];

    return {
      sheetUrl: String(parsed?.sheetUrl || DEFAULT_CONTRACTOR_SHEET_URL).trim() || DEFAULT_CONTRACTOR_SHEET_URL,
      tabs
    };
  } catch {
    return {
      sheetUrl: DEFAULT_CONTRACTOR_SHEET_URL,
      tabs: []
    };
  }
}

function parseGoogleSheetId(sheetUrl) {
  const value = String(sheetUrl || '').trim();
  if (!value) return '';

  const byPath = value.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (byPath && byPath[1]) return byPath[1];

  if (/^[a-zA-Z0-9-_]{20,}$/.test(value)) {
    return value;
  }

  return '';
}

function buildContractorSheetCsvUrl(sheetUrl) {
  const sheetId = parseGoogleSheetId(sheetUrl);
  if (!sheetId) return '';
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;
}

function buildContractorTabCsvUrl(sheetUrl, sheetName) {
  const sheetId = parseGoogleSheetId(sheetUrl);
  if (!sheetId || !sheetName) return '';
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
}

function findContractorNameCell(row) {
  const keys = Object.keys(row || {});
  for (const key of keys) {
    const normalized = key.toLowerCase();
    if (normalized.includes('contractor') || normalized.includes('company') || normalized.includes('name')) {
      const value = String(row[key] || '').trim();
      if (value) return value;
    }
  }

  for (const key of keys) {
    const value = String(row[key] || '').trim();
    if (value) return value;
  }

  return '';
}

function buildRosterSummary(row, contractorName) {
  const pieces = [];
  const skip = new Set(['contractor', 'contractor name', 'name', 'company', 'company name']);

  for (const [key, value] of Object.entries(row || {})) {
    const label = String(key || '').trim();
    const normalized = label.toLowerCase();
    if (!label || skip.has(normalized)) continue;

    const text = String(value || '').trim();
    if (!text || text === contractorName) continue;
    pieces.push(`${label}: ${text}`);
    if (pieces.length >= 3) {
      break;
    }
  }

  return pieces.join(' | ');
}

function normalizeSheetCell(cell) {
  return String(cell || '').replace(/\s+/g, ' ').trim();
}

function renderContractorSheetMarkdown(contractorName, sheetName, rows, sheetUrl) {
  const output = [
    `# ${contractorName}`,
    '',
    `Source: ${sheetUrl}`,
    `Sheet: ${sheetName}`,
    `Synced: ${new Date().toISOString()}`,
    '',
    '---',
    '',
    'Contractor Preferences',
    ''
  ];

  const headings = [];
  const summaryBits = [];
  let activeHeading = '';

  for (const row of rows) {
    const cells = row.map(normalizeSheetCell).filter(Boolean);
    if (cells.length === 0) {
      continue;
    }

    const firstCell = cells[0];
    const matchedHeading = ['Panels', 'Trim', 'Framing', 'Foundation', 'Accessories', 'Doors/Windows', 'Misc. Notes']
      .find((heading) => heading.toLowerCase() === firstCell.toLowerCase());

    if (matchedHeading) {
      activeHeading = matchedHeading;
      headings.push(matchedHeading);
      output.push(matchedHeading, '');

      if (cells.length > 1) {
        const detail = cells.slice(1).join(' | ');
        output.push(`- ${detail}`, '');
        if (summaryBits.length < 3) {
          summaryBits.push(`${matchedHeading}: ${detail}`);
        }
      }
      continue;
    }

    const rowText = cells.length === 1
      ? cells[0]
      : `${cells[0]}: ${cells.slice(1).join(' | ')}`;

    output.push(`- ${rowText}`);
    if (summaryBits.length < 3) {
      summaryBits.push(activeHeading ? `${activeHeading}: ${rowText}` : rowText);
    }
  }

  return {
    markdown: output.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n',
    headings: Array.from(new Set(headings)),
    summary: summaryBits.join(' | ')
  };
}

function removeGeneratedContractorMarkdownFiles(formsDirectory) {
  if (!formsDirectory || !fs.existsSync(formsDirectory)) {
    return;
  }

  try {
    const entries = fs.readdirSync(formsDirectory, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      if (!entry.name.toLowerCase().startsWith('gsheet-contractor-')) continue;
      if (!entry.name.toLowerCase().endsWith('.md')) continue;
      fs.unlinkSync(path.join(formsDirectory, entry.name));
    }
  } catch {
    // Ignore cleanup failures.
  }
}

async function syncContractorRosterFromSheet(sheetUrl = DEFAULT_CONTRACTOR_SHEET_URL) {
  const config = loadContractorSheetTabs();
  const effectiveSheetUrl = String(sheetUrl || config.sheetUrl || DEFAULT_CONTRACTOR_SHEET_URL).trim();
  const tabs = Array.isArray(config.tabs) ? config.tabs : [];
  if (!effectiveSheetUrl || tabs.length === 0) {
    return { success: false, error: 'Invalid contractor sheet URL.' };
  }

  try {
    const entries = [];
    const seen = new Set();
    const failures = [];
    const manualFormsDocsPath = resolveManualFormsDocsPath();
    const formsDirectory = manualFormsDocsPath ? path.join(manualFormsDocsPath, 'forms') : '';
    if (formsDirectory) {
      fs.mkdirSync(formsDirectory, { recursive: true });
      removeGeneratedContractorMarkdownFiles(formsDirectory);
    }

    for (const tabName of tabs) {
      const contractorName = String(tabName || '').trim();
      if (!contractorName) continue;

      const id = slugifyContractorId(contractorName);
      if (!id || seen.has(id)) continue;

      const csvUrl = buildContractorTabCsvUrl(effectiveSheetUrl, contractorName);
      if (!csvUrl) {
        failures.push({ contractorName, error: 'Invalid sheet/tab URL.' });
        continue;
      }

      try {
        const response = await axios.get(csvUrl, {
          timeout: 20000,
          responseType: 'text'
        });

        const rows = parseCsv(String(response.data || ''), {
          columns: false,
          skip_empty_lines: true,
          relax_column_count: true,
          trim: true
        });

        const rendered = renderContractorSheetMarkdown(contractorName, contractorName, rows, effectiveSheetUrl);
        const markdownFileName = `gsheet-contractor-${id}.md`;
        const markdownPath = formsDirectory ? path.join(formsDirectory, markdownFileName) : '';
        if (markdownPath) {
          fs.writeFileSync(markdownPath, rendered.markdown, 'utf8');
        }

        entries.push({
          id,
          name: contractorName,
          sheetName: contractorName,
          summary: rendered.summary,
          headings: rendered.headings,
          section: rendered.markdown,
          markdownPath,
          csvUrl
        });
        seen.add(id);
      } catch (error) {
        failures.push({ contractorName, error: error.message || 'Failed to fetch sheet tab.' });
      }
    }

    const rosterPath = resolveContractorRosterPath();
    fs.mkdirSync(path.dirname(rosterPath), { recursive: true });
    fs.writeFileSync(rosterPath, JSON.stringify({
      sourceUrl: effectiveSheetUrl,
      syncedAt: new Date().toISOString(),
      count: entries.length,
      failures,
      entries
    }, null, 2), 'utf8');

    contractorKnowledge = buildActiveContractorKnowledge();

    return {
      success: entries.length > 0,
      count: entries.length,
      rosterPath,
      syncedAt: new Date().toISOString(),
      failures
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Failed to sync contractor sheet.'
    };
  }
}

function resolveTrimDrawFeatureDocPath() {
  const candidates = [];
  const envPath = process.env.TRIM_DRAW_FEATURE_DOC_PATH;
  if (envPath) {
    candidates.push(envPath);
  }

  const appPath = app.getAppPath ? app.getAppPath() : path.join(__dirname, '..');
  candidates.push(path.join(appPath, '..', 'data', 'paradigm_docs', 'trim-draw-feature-advanced-config.md'));
  candidates.push(path.join(appPath, 'data', 'paradigm_docs', 'trim-draw-feature-advanced-config.md'));
  candidates.push(path.join(process.cwd(), 'data', 'paradigm_docs', 'trim-draw-feature-advanced-config.md'));
  candidates.push(path.join(__dirname, '..', '..', 'data', 'paradigm_docs', 'trim-draw-feature-advanced-config.md'));
  candidates.push(path.join(__dirname, '..', '..', '..', 'data', 'paradigm_docs', 'trim-draw-feature-advanced-config.md'));

  return resolveFirstExistingPath(candidates);
}

function collectMarkdownFilesRecursive(rootDirectory) {
  const results = [];
  if (!rootDirectory || !fs.existsSync(rootDirectory)) return results;

  const stack = [rootDirectory];
  while (stack.length > 0) {
    const current = stack.pop();
    let entries = [];

    try {
      entries = fs.readdirSync(current, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
        results.push(path.resolve(fullPath));
      }
    }
  }

  return results;
}

function getSupplementalKnowledgeFiles() {
  const smartBuildDocsPath = resolveSmartBuildDocsPath();
  const manualFormsDocsPath = resolveManualFormsDocsPath();

  const supplemental = [];

  if (smartBuildDocsPath) {
    const articleFiles = collectMarkdownFilesRecursive(path.join(smartBuildDocsPath, 'articles'));
    const videoFiles = collectMarkdownFilesRecursive(path.join(smartBuildDocsPath, 'videos'));
    supplemental.push(...articleFiles, ...videoFiles);
  }

  if (manualFormsDocsPath) {
    const manualFormFiles = collectMarkdownFilesRecursive(path.join(manualFormsDocsPath, 'forms'));
    supplemental.push(...manualFormFiles);
  }

  const trimDrawFeatureDoc = resolveTrimDrawFeatureDocPath();
  if (trimDrawFeatureDoc) {
    supplemental.push(trimDrawFeatureDoc);
  }

  const deduped = [];
  const seen = new Set();
  for (const filePath of supplemental) {
    const key = String(filePath || '').toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    deduped.push(filePath);
  }
  return deduped;
}

function buildActiveWorkflowIndex(kbPath) {
  const resolvedKbPath = kbPath || resolveKnowledgeBasePath();
  const supplementalFiles = getSupplementalKnowledgeFiles();

  const index = buildWorkflowIndex(resolvedKbPath, {
    extraMarkdownFiles: supplementalFiles
  });

  console.log(
    `[Knowledge Base] Indexed ${index.sections.length} sections from KB + ${supplementalFiles.length} supplemental markdown files.`
  );

  return index;
}

function buildActiveContractorKnowledge() {
  return buildContractorKnowledge({
    manualFormsIndexPath: resolveManualFormsIndexPath(),
    manualFormsDocsPath: resolveManualFormsDocsPath(),
    contractorRosterPath: resolveContractorRosterPath()
  });
}

function rebuildKnowledgeState(kbPath) {
  workflowIndex = buildActiveWorkflowIndex(kbPath);
  contractorKnowledge = buildActiveContractorKnowledge();
}

function toNonNegativeInt(value, fallback = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  if (parsed < 0) return fallback;
  return Math.floor(parsed);
}

function countMarkdownFiles(directoryPath) {
  try {
    if (!directoryPath || !fs.existsSync(directoryPath)) return 0;
    const entries = fs.readdirSync(directoryPath, { withFileTypes: true });
    return entries.filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.md')).length;
  } catch {
    return 0;
  }
}

function getIndexedDataStats() {
  const smartBuildCounts = {
    supportArticles: 0,
    youtubeVideos: 0,
    total: 0
  };

  const manualFormsCounts = {
    forms: 0,
    contractors: 0,
    total: 0
  };

  let smartBuildIndexPath = null;
  let smartBuildDocsPath = null;
  let manualFormsIndexPath = null;
  let manualFormsDocsPath = null;

  try {
    smartBuildIndexPath = resolveSmartBuildIndexPath();
    if (smartBuildIndexPath) {
      const raw = fs.readFileSync(smartBuildIndexPath, 'utf8');
      const parsed = JSON.parse(raw);
      const counts = parsed?.counts || {};
      smartBuildCounts.supportArticles = toNonNegativeInt(counts.support_articles, 0);
      smartBuildCounts.youtubeVideos = toNonNegativeInt(counts.youtube_videos, 0);
      const inferredTotal = smartBuildCounts.supportArticles + smartBuildCounts.youtubeVideos;
      smartBuildCounts.total = toNonNegativeInt(counts.total, inferredTotal);
    }
  } catch (error) {
    console.warn('[SmartBuild] Failed to read index.json:', error.message);
  }

  try {
    smartBuildDocsPath = resolveSmartBuildDocsPath();
    if (smartBuildDocsPath) {
      const supportFromFiles = countMarkdownFiles(path.join(smartBuildDocsPath, 'articles'));
      const videosFromFiles = countMarkdownFiles(path.join(smartBuildDocsPath, 'videos'));
      const totalFromFiles = supportFromFiles + videosFromFiles;

      smartBuildCounts.supportArticles = Math.max(smartBuildCounts.supportArticles, supportFromFiles);
      smartBuildCounts.youtubeVideos = Math.max(smartBuildCounts.youtubeVideos, videosFromFiles);
      smartBuildCounts.total = Math.max(smartBuildCounts.total, totalFromFiles, smartBuildCounts.supportArticles + smartBuildCounts.youtubeVideos);
    }
  } catch (error) {
    console.warn('[SmartBuild] Failed to derive counts from smartbuild_docs folders:', error.message);
  }

  try {
    manualFormsIndexPath = resolveManualFormsIndexPath();
    if (manualFormsIndexPath) {
      const raw = fs.readFileSync(manualFormsIndexPath, 'utf8');
      const parsed = JSON.parse(raw);
      const counts = parsed?.counts || {};
      const formsCount = toNonNegativeInt(counts.forms, toNonNegativeInt(counts.total, 0));
      manualFormsCounts.forms = formsCount;
      manualFormsCounts.total = formsCount;
    }
  } catch (error) {
    console.warn('[ManualForms] Failed to read index.json:', error.message);
  }

  try {
    manualFormsDocsPath = resolveManualFormsDocsPath();
    if (manualFormsDocsPath) {
      const formsFromFiles = countMarkdownFiles(path.join(manualFormsDocsPath, 'forms'));
      manualFormsCounts.forms = Math.max(manualFormsCounts.forms, formsFromFiles);
      manualFormsCounts.total = Math.max(manualFormsCounts.total, manualFormsCounts.forms);
      manualFormsCounts.contractors = buildActiveContractorKnowledge().catalog.length;
    }
  } catch (error) {
    console.warn('[ManualForms] Failed to derive counts from manual_forms_docs folders:', error.message);
  }

  return {
    paradigmArticles: PARADIGM_ARTICLE_COUNT,
    smartBuild: smartBuildCounts,
    manualForms: manualFormsCounts,
    totalIndexed: PARADIGM_ARTICLE_COUNT + smartBuildCounts.total + manualFormsCounts.total,
    smartBuildIndexPath,
    smartBuildDocsPath,
    manualFormsIndexPath,
    manualFormsDocsPath
  };
}

function normalizeCategory(category) {
  const normalized = String(category || '').trim().toLowerCase();
  return INGEST_CATEGORIES.find(c => c.id === normalized || c.label.toLowerCase() === normalized) || null;
}

function sanitizeHeading(text) {
  return String(text || '')
    .replace(/[#\r\n]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 120);
}

function truncateText(text, maxChars) {
  const cleaned = String(text || '').replace(/\s+/g, ' ').trim();
  if (cleaned.length <= maxChars) return cleaned;
  return `${cleaned.substring(0, maxChars)}...`;
}

function buildIngestSection({ id, categoryLabel, title, sourceLabel, content }) {
  const safeTitle = sanitizeHeading(title || 'Untitled');
  const safeSource = sanitizeHeading(sourceLabel || 'Unknown source');
  const safeCategory = sanitizeHeading(categoryLabel || 'Uncategorized');
  const added = new Date().toISOString().split('T')[0];
  const safeId = sanitizeHeading(id || generateIngestId());

  return `\n\n<!-- INGEST-ENTRY:${safeId}:START -->\n` +
    `### ${safeCategory} - ${safeTitle}\n\n` +
    `**Entry ID**: ${safeId}\n\n` +
    `**Category**: ${safeCategory}\n\n` +
    `**Source**: ${safeSource}\n\n` +
    `**Added**: ${added}\n\n` +
    `${String(content || '').trim()}\n` +
    `<!-- INGEST-ENTRY:${safeId}:END -->\n`;
}

async function extractTextFromFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const buffer = fs.readFileSync(filePath);

  if (ext === '.pdf') {
    return await extractPdfText(buffer);
  }

  if (ext === '.docx') {
    const result = await mammoth.extractRawText({ buffer });
    return result.value || '';
  }

  if (ext === '.csv') {
    const text = buffer.toString('utf8');
    const records = parseCsv(text, { columns: true, skip_empty_lines: true });
    const lines = records.map((row) => {
      const parts = Object.entries(row).map(([key, value]) => `${key}: ${value}`);
      return parts.join(' | ');
    });
    return lines.join('\n');
  }

  const text = buffer.toString('utf8');
  if (ext === '.html' || ext === '.htm') {
    const $ = cheerio.load(text);
    return $('body').text();
  }

  return text;
}

async function extractTextFromUrl(url) {
  const response = await axios.get(url, {
    timeout: 30000,
    responseType: 'arraybuffer',
    headers: {
      'User-Agent': 'Western-Intelligence-Indexer/1.0'
    }
  });

  const contentType = String(response.headers['content-type'] || '').toLowerCase();
  const buffer = Buffer.from(response.data);

  if (contentType.includes('application/pdf')) {
    return await extractPdfText(buffer);
  }

  if (contentType.includes('application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
    const result = await mammoth.extractRawText({ buffer });
    return result.value || '';
  }

  const text = buffer.toString('utf8');
  if (contentType.includes('text/html')) {
    const $ = cheerio.load(text);
    return $('body').text();
  }

  if (contentType.includes('text/csv')) {
    const records = parseCsv(text, { columns: true, skip_empty_lines: true });
    const lines = records.map((row) => {
      const parts = Object.entries(row).map(([key, value]) => `${key}: ${value}`);
      return parts.join(' | ');
    });
    return lines.join('\n');
  }

  return text;
}

function collectSupportedFiles(directoryPath) {
  const files = [];
  const stack = [directoryPath];

  while (stack.length > 0) {
    const currentPath = stack.pop();
    let stat;
    try {
      stat = fs.statSync(currentPath);
    } catch {
      continue;
    }

    if (stat.isDirectory()) {
      let children = [];
      try {
        children = fs.readdirSync(currentPath);
      } catch {
        children = [];
      }

      children.forEach((child) => {
        stack.push(path.join(currentPath, child));
      });
      continue;
    }

    if (!stat.isFile()) continue;
    const ext = path.extname(currentPath).toLowerCase();
    if (SUPPORTED_INGEST_EXTENSIONS.has(ext)) {
      files.push(currentPath);
    }
  }

  return files.sort((a, b) => a.localeCompare(b));
}

function readJsonFileSafe(filePath) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function resolveIndexedRecordPath(folderPath, recordPath) {
  if (!recordPath) return null;

  const asString = String(recordPath).trim();
  if (!asString) return null;

  const normalized = asString.replace(/\\/g, path.sep);
  const candidates = [];

  if (path.isAbsolute(normalized)) {
    candidates.push(normalized);
  }

  candidates.push(path.resolve(folderPath, normalized));
  candidates.push(path.resolve(folderPath, path.basename(normalized)));

  const parent = path.dirname(folderPath);
  candidates.push(path.resolve(parent, normalized));
  candidates.push(path.resolve(parent, path.basename(normalized)));

  const isVideo = /[\\/]videos[\\/]/i.test(normalized);
  const isArticle = /[\\/]articles[\\/]/i.test(normalized);
  if (isVideo) {
    candidates.push(path.resolve(folderPath, 'videos', path.basename(normalized)));
  }
  if (isArticle) {
    candidates.push(path.resolve(folderPath, 'articles', path.basename(normalized)));
  }

  for (const candidate of candidates) {
    try {
      if (candidate && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        return candidate;
      }
    } catch {
      // Keep trying candidates
    }
  }

  return null;
}

function collectSmartBuildFiles(folderPath) {
  const indexPath = path.join(folderPath, 'index.json');
  if (!fs.existsSync(indexPath)) {
    return {
      files: collectSupportedFiles(folderPath),
      usedIndex: false,
      indexPath: null,
      unresolved: []
    };
  }

  const payload = readJsonFileSafe(indexPath);
  const sections = payload?.sections || {};
  const indexedRecords = [
    ...(Array.isArray(sections.support_articles) ? sections.support_articles : []),
    ...(Array.isArray(sections.youtube_videos) ? sections.youtube_videos : [])
  ];

  const resolvedFiles = new Set();
  const unresolved = [];

  indexedRecords.forEach((record) => {
    const filePath = resolveIndexedRecordPath(folderPath, record?.path);
    if (!filePath) {
      unresolved.push({
        title: String(record?.title || '').trim(),
        path: String(record?.path || '').trim()
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    if (SUPPORTED_INGEST_EXTENSIONS.has(ext)) {
      resolvedFiles.add(filePath);
    }
  });

  const files = Array.from(resolvedFiles).sort((a, b) => a.localeCompare(b));

  if (files.length > 0) {
    return {
      files,
      usedIndex: true,
      indexPath,
      unresolved
    };
  }

  return {
    files: collectSupportedFiles(folderPath),
    usedIndex: false,
    indexPath,
    unresolved
  };
}

// Build workflow index on startup (cached in memory)
let workflowIndex = null;
let contractorKnowledge = { catalog: [], index: null, byId: new Map() };

const responseCache = new Map();
const RESPONSE_CACHE_TTL_MS = 30 * 60 * 1000;
const RESPONSE_CACHE_MAX_ENTRIES = 50;
const AI_CONVERSATION_LOG_PATH = path.join(app.getPath('userData'), 'ai-conversations.json');
const AI_CONVERSATION_MAX_THREADS = 100;
const AI_CONVERSATION_MAX_MESSAGES_PER_THREAD = 300;
const AI_PROMPT_HISTORY_MESSAGE_LIMIT = 8;

let aiConversationStore = loadAiConversationStore();

function loadAiConversationStore() {
  try {
    if (!fs.existsSync(AI_CONVERSATION_LOG_PATH)) {
      return { conversations: {} };
    }
    const raw = fs.readFileSync(AI_CONVERSATION_LOG_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || typeof parsed.conversations !== 'object') {
      return { conversations: {} };
    }
    return parsed;
  } catch (error) {
    logger.warn('Failed to load AI conversation store', { error: error.message });
    return { conversations: {} };
  }
}

function saveAiConversationStore() {
  try {
    fs.writeFileSync(AI_CONVERSATION_LOG_PATH, JSON.stringify(aiConversationStore, null, 2), 'utf8');
  } catch (error) {
    logger.warn('Failed to save AI conversation store', { error: error.message });
  }
}

function normalizeAssistantMode(mode) {
  const normalized = String(mode || '').trim().toLowerCase();
  if (normalized === 'assistant' || normalized === 'wbs' || normalized === 'hybrid') {
    return normalized;
  }
  return 'hybrid';
}

function normalizeRagRequest(request) {
  if (typeof request === 'string') {
    return {
      query: request,
      mode: 'hybrid',
      conversationId: '',
      contractorId: ''
    };
  }

  return {
    query: String(request?.query || ''),
    mode: normalizeAssistantMode(request?.mode),
    conversationId: String(request?.conversationId || '').trim(),
    contractorId: String(request?.contractorId || '').trim()
  };
}

function ensureConversationThread(conversationId) {
  let id = String(conversationId || '').trim();
  if (!id) {
    id = `conv_${Date.now()}_${crypto.randomBytes(3).toString('hex')}`;
  }

  if (!aiConversationStore.conversations || typeof aiConversationStore.conversations !== 'object') {
    aiConversationStore.conversations = {};
  }

  if (!aiConversationStore.conversations[id]) {
    aiConversationStore.conversations[id] = {
      id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      messages: []
    };
  }

  return id;
}

function appendConversationMessage(conversationId, role, content, mode, extra = {}) {
  const id = ensureConversationThread(conversationId);
  const thread = aiConversationStore.conversations[id];
  thread.messages.push({
    role,
    mode: normalizeAssistantMode(mode),
    content: String(content || '').slice(0, 6000),
    timestamp: new Date().toISOString(),
    ...extra
  });

  if (thread.messages.length > AI_CONVERSATION_MAX_MESSAGES_PER_THREAD) {
    thread.messages = thread.messages.slice(-AI_CONVERSATION_MAX_MESSAGES_PER_THREAD);
  }

  thread.updatedAt = new Date().toISOString();
  pruneConversationThreads();
  saveAiConversationStore();
  return id;
}

function pruneConversationThreads() {
  const entries = Object.entries(aiConversationStore.conversations || {});
  if (entries.length <= AI_CONVERSATION_MAX_THREADS) return;

  entries
    .sort((a, b) => {
      const aTime = new Date(a[1]?.updatedAt || 0).getTime();
      const bTime = new Date(b[1]?.updatedAt || 0).getTime();
      return bTime - aTime;
    })
    .slice(AI_CONVERSATION_MAX_THREADS)
    .forEach(([id]) => {
      delete aiConversationStore.conversations[id];
    });
}

function getConversationPromptMessages(conversationId, limit = AI_PROMPT_HISTORY_MESSAGE_LIMIT) {
  const id = String(conversationId || '').trim();
  if (!id) return [];
  const messages = aiConversationStore.conversations?.[id]?.messages;
  if (!Array.isArray(messages) || messages.length === 0) return [];

  return messages
    .filter((message) => message.role === 'user' || message.role === 'assistant')
    .slice(-Math.max(0, limit))
    .map((message) => ({ role: message.role, content: String(message.content || '') }));
}

function mergeSearchResults(primaryResults, secondaryResults, limit) {
  const merged = [];
  const seen = new Set();

  for (const result of [...primaryResults, ...secondaryResults]) {
    if (!result) continue;
    const key = `${String(result.title || '')}::${String(result.sourcePath || '')}`;
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(result);
    if (merged.length >= limit) {
      break;
    }
  }

  return merged;
}

function getSelectedContractor(contractorId) {
  if (!contractorId) return null;
  return contractorKnowledge?.byId?.get(contractorId) || null;
}

function shouldSearchContractorKnowledge(queryText, contractorId) {
  if (contractorId) {
    return true;
  }

  const mentions = findMentionedContractors(contractorKnowledge?.catalog || [], queryText);
  if (mentions.length > 0) {
    return true;
  }

  return /\bcontractor\b|\bbuilders\b|\broofing\b|\bpole barn\b/i.test(String(queryText || ''));
}

function buildContractorPromptContext(contractor) {
  if (!contractor) return '';

  const headings = Array.isArray(contractor.headings) && contractor.headings.length > 0
    ? contractor.headings.join(', ')
    : 'No parsed headings available';

  return `Selected contractor: ${contractor.name}\nFocus areas: ${headings}${contractor.summary ? `\nSummary: ${contractor.summary}` : ''}`;
}

let mainWindow;

// Create application window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1200,
    minHeight: 700,
    icon: path.join(__dirname, '../assets/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      sandbox: true,
      webSecurity: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile(path.join(__dirname, '../public/index.html'));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// App event listeners
app.on('ready', async () => {
  logger.info('Application starting', { version: app.getVersion(), platform: process.platform });

  loadSettings();
  applyAutoLaunchSetting(AUTO_LAUNCH);

  // Run health checks before proceeding
  KNOWLEDGE_BASE_PATH = resolveKnowledgeBasePath();
  const healthCheckResults = await runHealthChecks({
    knowledgeBasePath: KNOWLEDGE_BASE_PATH,
    vectorStorePath,
    ingestJournalPath,
    settingsPath,
    lmStudioApi: LM_STUDIO_API,
    lmStudioTimeout: 5000,
    chatServerPort: getChatServerPort(CHAT_SERVER_URL),
    chatServerEnabled: CHAT_SERVER_ENABLED,
    googleLdapConfig: GOOGLE_LDAP_CONFIG
  });

  if (!healthCheckResults.healthy) {
    logger.error('Health checks failed', {
      failures: healthCheckResults.failures,
      warnings: healthCheckResults.warnings
    });
  } else {
    logger.info('Health checks passed', {
      duration: healthCheckResults.duration,
      warnings: healthCheckResults.warnings.length
    });
  }

  // Build index on startup for instant lookup
  try {
    const syncResult = await syncContractorRosterFromSheet();
    if (!syncResult.success) {
      logger.warn('Contractor sheet sync skipped', { error: syncResult.error });
    }

    KNOWLEDGE_BASE_PATH = resolveKnowledgeBasePath();
    rebuildKnowledgeState(KNOWLEDGE_BASE_PATH);
    logger.info('Knowledge base indexed', {
      sections: workflowIndex?.sections?.length || 0,
      contractors: contractorKnowledge?.catalog?.length || 0
    });
  } catch (error) {
    logger.error('Knowledge base indexing failed', {
      error: error.message,
      stack: error.stack
    });
    workflowIndex = {};
    contractorKnowledge = { catalog: [], index: null, byId: new Map() };
  }
  
  // Start team chat server
  if (CHAT_SERVER_ENABLED) {
    try {
      const chatServer = await startChatServer(getChatServerPort(CHAT_SERVER_URL));
      logger.info('Chat server started', { port: chatServer.port });
    } catch (error) {
      logger.error('Chat server failed to start', { error: error.message });
    }
  }
  
  createWindow();
  logger.info('Main window created');
});

app.on('window-all-closed', () => {
  logger.info('All windows closed, shutting down');
  stopChatServer();
  logger.close();
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

function sanitizeRagErrorMessage(rawMessage, errorCode) {
  const message = String(rawMessage || '').trim();
  if (!message) {
    return 'Failed to query RAG system';
  }

  // Normalize internal runtime leakage so users get actionable guidance.
  if (/\bclearmarks\s+is\s+not\s+a\s+function\b/i.test(message)) {
    return 'A response-formatting error occurred. Please retry your request.';
  }

  if (errorCode === 'ECONNREFUSED' || /ECONNREFUSED/i.test(message)) {
    return 'AI endpoint is unreachable.';
  }

  return message;
}

// IPC Handlers for RAG queries
ipcMain.handle('rag-query', async (event, request) => {
  const startTime = Date.now();
  const normalizedRequest = normalizeRagRequest(request);
  const queryText = String(normalizedRequest.query || '').trim();
  const assistantMode = normalizeAssistantMode(normalizedRequest.mode);
  const conversationId = ensureConversationThread(normalizedRequest.conversationId);
  const selectedContractor = getSelectedContractor(normalizedRequest.contractorId);

  try {
    logger.debug('RAG query received', {
      query: queryText.substring(0, 100),
      mode: assistantMode,
      conversationId,
      contractorId: selectedContractor?.id || ''
    });

    if (!queryText) {
      return {
        success: false,
        error: 'Please enter a question or request.',
        conversationId,
        mode: assistantMode
      };
    }

    if (isLdapAuthRequired() && (!AUTH_SESSION || !AUTH_SESSION.authenticated)) {
      logger.warn('RAG query rejected - authentication required');
      return {
        success: false,
        error: 'You must sign in before using Western Intelligence.',
        conversationId,
        mode: assistantMode
      };
    }

    const knowledgeAvailable = !!(workflowIndex && Array.isArray(workflowIndex.sections) && workflowIndex.sections.length > 0);
    if (assistantMode === 'wbs' && !knowledgeAvailable) {
      return {
        success: false,
        error: 'Knowledge base not loaded',
        suggestion: `Set KB_PATH or place ${DEFAULT_KB_FILENAME} in the app folder.`,
        conversationId,
        mode: assistantMode
      };
    }

    const cacheKey = `${assistantMode}::${selectedContractor?.id || 'all'}::${conversationId}::${queryText.toLowerCase()}`;
    if (cacheKey) {
      const cached = responseCache.get(cacheKey);
      if (cached && (Date.now() - cached.timestamp) < RESPONSE_CACHE_TTL_MS) {
        appendConversationMessage(conversationId, 'user', queryText, assistantMode, { cached: true });
        appendConversationMessage(conversationId, 'assistant', cached.payload.answer, assistantMode, {
          cached: true,
          sources: cached.payload.sources
        });
        return {
          ...cached.payload,
          conversationId,
          mode: assistantMode
        };
      }
    }

    const responseProfile = getResponseProfile(queryText);
    const historyMessages = getConversationPromptMessages(conversationId);

    const buildRequestFromProfile = async (profile) => {
      const useKnowledge = knowledgeAvailable && (assistantMode !== 'assistant' || !!selectedContractor);
      const generalResults = useKnowledge
        ? searchIndex(workflowIndex, queryText, profile.resultLimit, { allowFallback: false })
        : [];
      const contractorResults = useKnowledge && shouldSearchContractorKnowledge(queryText, selectedContractor?.id)
        ? searchContractorKnowledge(contractorKnowledge, queryText, {
            contractorId: selectedContractor?.id || '',
            limit: CONTRACTOR_RESULT_LIMIT,
            allowFallback: !!selectedContractor
          })
        : [];
      const results = mergeSearchResults(contractorResults, generalResults, profile.resultLimit);

      const contextSections = results
        .map((result, i) => {
          const section = String(result.section || '').substring(0, profile.contextChars);
          return `## Result ${i + 1}: ${result.title}\n${section}`;
        })
        .join('\n\n---\n\n');

      const allLinks = [];
      const primaryResult = results[0];
      if (primaryResult && primaryResult.links && primaryResult.links.length > 0) {
        primaryResult.links.forEach(link => {
          if (!allLinks.find(l => l.url === link.url) && allLinks.length < 5) {
            allLinks.push(link);
          }
        });
      }

      const systemPrompt = buildSystemPrompt({
        assistantMode,
        contextSections,
        includesKnowledge: useKnowledge && results.length > 0,
        contractorContext: buildContractorPromptContext(selectedContractor)
      });

      const messages = [
        {
          role: 'system',
          content: systemPrompt
        },
        ...historyMessages,
        {
          role: 'user',
          content: queryText
        }
      ];

      const response = await axios.post(`${LM_STUDIO_API}/chat/completions`, {
        model: LM_STUDIO_MODEL,
        messages,
        temperature: profile.temperature,
        max_tokens: profile.maxTokens,
        stream: false
      }, {
        timeout: profile.timeoutMs
      });

      return { response, results, allLinks };
    };

    let requestResult;
    let responseMode = 'standard';
    try {
      requestResult = await buildRequestFromProfile(responseProfile);
    } catch (error) {
      if (!isLmTimeoutError(error)) {
        throw error;
      }

      const fallbackProfile = {
        maxTokens: Math.max(220, Math.min(400, Math.floor(responseProfile.maxTokens * 0.55))),
        contextChars: Math.max(320, Math.min(520, Math.floor(responseProfile.contextChars * 0.5))),
        temperature: 0.4,
        resultLimit: 2,
        timeoutMs: Math.max(30000, Math.floor(LM_REQUEST_TIMEOUT_MS * 0.6))
      };

      console.warn('[RAG] Timeout on standard profile; retrying with reduced context profile');
      requestResult = await buildRequestFromProfile(fallbackProfile);
      responseMode = 'reduced-context-fallback';
    }

    const { response, results, allLinks } = requestResult;
    const answerText = response.data?.choices?.[0]?.message?.content || 'No response generated.';

    appendConversationMessage(conversationId, 'user', queryText, assistantMode);
    appendConversationMessage(conversationId, 'assistant', answerText, assistantMode, {
      sources: results.map((r) => r.title)
    });

    const payload = {
      success: true,
      answer: answerText,
      sources: results.map(r => r.title),
      resources: allLinks,
      responseMode,
      conversationId,
      mode: assistantMode
    };

    if (cacheKey) {
      responseCache.set(cacheKey, { timestamp: Date.now(), payload });
      if (responseCache.size > RESPONSE_CACHE_MAX_ENTRIES) {
        const oldestKey = responseCache.keys().next().value;
        responseCache.delete(oldestKey);
      }
    }

    const duration = Date.now() - startTime;
    logger.info('RAG query succeeded', {
      duration,
      responseMode,
      assistantMode,
      contractorId: selectedContractor?.id || '',
      cacheHit: false,
      sources: payload.sources.length
    });

    return payload;

  } catch (error) {
    const duration = Date.now() - startTime;
    const safeErrorMessage = sanitizeRagErrorMessage(error?.message, error?.code);
    appendConversationMessage(conversationId, 'user', queryText, assistantMode, {
      failed: true,
      error: safeErrorMessage
    });
    logger.error('RAG query failed', {
      error: error.message,
      code: error.code,
      duration,
      query: queryText.substring(0, 100),
      mode: assistantMode,
      conversationId,
      contractorId: selectedContractor?.id || ''
    });
    return {
      success: false,
      error: safeErrorMessage,
      suggestion: error.code === 'ECONNREFUSED' 
        ? 'AI endpoint is unreachable. Configure a reachable LM Studio URL (local or network) in Admin Settings.'
        : 'Check LM Studio endpoint connectivity: ' + LM_STUDIO_API,
      conversationId,
      mode: assistantMode
    };
  }
});

// Status check IPC handler
ipcMain.handle('check-lm-studio', async () => {
  const baseUrl = LM_STUDIO_API.replace(/\/v1$/, '');
  try {
    const response = await axios.get(`${LM_STUDIO_API}/models`, { timeout: 5000 });
    const models = response && response.data && Array.isArray(response.data.data)
      ? response.data.data
      : null;
    if (!models) {
      return {
        connected: false,
        error: 'Unexpected response from LM Studio',
        url: baseUrl
      };
    }
    return {
      connected: true,
      models
    };
  } catch (error) {
    return {
      connected: false,
      error: error.code || error.message || 'Cannot connect to LM Studio',
      url: baseUrl
    };
  }
});

ipcMain.handle('get-indexed-data-stats', async () => {
  try {
    const stats = getIndexedDataStats();
    return { success: true, ...stats };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      paradigmArticles: PARADIGM_ARTICLE_COUNT,
      smartBuild: { supportArticles: 0, youtubeVideos: 0, total: 0 },
      manualForms: { forms: 0, contractors: 0, total: 0 },
      totalIndexed: PARADIGM_ARTICLE_COUNT
    };
  }
});

ipcMain.handle('get-contractor-catalog', async () => {
  try {
    if (!contractorKnowledge || !Array.isArray(contractorKnowledge.catalog)) {
      contractorKnowledge = buildActiveContractorKnowledge();
    }

    return {
      success: true,
      contractors: contractorKnowledge.catalog
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      contractors: []
    };
  }
});

ipcMain.handle('sync-contractor-sheet', async (event, payload) => {
  const sheetUrl = String(payload?.sheetUrl || DEFAULT_CONTRACTOR_SHEET_URL).trim();
  const result = await syncContractorRosterFromSheet(sheetUrl);
  if (result.success) {
    responseCache.clear();
  }
  return result;
});

ipcMain.handle('get-app-info', async () => {
  return {
    success: true,
    version: app.getVersion(),
    platform: process.platform,
    isPackaged: app.isPackaged,
    electronVersion: process.versions.electron,
    nodeVersion: process.versions.node,
    chromeVersion: process.versions.chrome
  };
});

ipcMain.handle('get-lm-studio-url', async () => {
  return { url: LM_STUDIO_API.replace(/\/v1$/, '') };
});

ipcMain.handle('set-lm-studio-url', async (event, url) => {
  const normalized = normalizeLmStudioUrl(url);
  LM_STUDIO_API = normalized;
  saveSettings({ lmStudioUrl: normalized.replace(/\/v1$/, '') });
  return { url: LM_STUDIO_API.replace(/\/v1$/, '') };
});

ipcMain.handle('get-chat-server-url', async () => {
  return { url: CHAT_SERVER_URL };
});

ipcMain.handle('set-chat-server-url', async (event, url) => {
  const normalized = normalizeChatServerUrl(url);
  CHAT_SERVER_URL = normalized;
  saveSettings({ chatServerUrl: normalized });

  if (CHAT_SERVER_ENABLED) {
    await stopChatServer();
    await startChatServer(getChatServerPort(CHAT_SERVER_URL));
  }

  return { url: CHAT_SERVER_URL };
});

ipcMain.handle('get-local-ip', async () => {
  return { ip: getLocalIp() };
});

ipcMain.handle('get-chat-server-enabled', async () => {
  return { enabled: CHAT_SERVER_ENABLED };
});

ipcMain.handle('set-chat-server-enabled', async (event, enabled) => {
  CHAT_SERVER_ENABLED = !!enabled;
  saveSettings({ chatServerEnabled: CHAT_SERVER_ENABLED });
  if (CHAT_SERVER_ENABLED) {
    await startChatServer(getChatServerPort(CHAT_SERVER_URL));
  } else {
    await stopChatServer();
  }
  return { enabled: CHAT_SERVER_ENABLED };
});

ipcMain.handle('get-paradigm-launcher-paths', async () => {
  return getParadigmLauncherPaths();
});

ipcMain.handle('set-paradigm-launcher-paths', async (event, payload) => {
  const next = {
    clientPath: String(payload?.clientPath || '').trim(),
    updaterPath: String(payload?.updaterPath || '').trim()
  };

  const clientValidation = validateConfiguredExecutablePath(next.clientPath, 'client');
  const updaterValidation = validateConfiguredExecutablePath(next.updaterPath, 'updater');
  const warnings = [...clientValidation.warnings, ...updaterValidation.warnings];

  PARADIGM_LAUNCHER_PATHS = next;
  saveSettings({ paradigmLauncherPaths: next });

  if (warnings.length > 0) {
    logger.warn('Paradigm launcher path validation warnings', {
      warnings,
      clientPath: next.clientPath,
      updaterPath: next.updaterPath
    });
  }

  return {
    success: true,
    warnings,
    validation: {
      clientPath: clientValidation,
      updaterPath: updaterValidation
    },
    ...next
  };
});

ipcMain.handle('select-paradigm-executable', async (event, payload) => {
  const target = payload?.target === 'updater' ? 'updater' : 'client';
  const title = target === 'updater' ? 'Select Paradigm Updater executable' : 'Select Paradigm Client executable';
  const windowsExtensions = target === 'updater'
    ? ['exe', 'bat', 'cmd', 'lnk', 'ink']
    : ['exe', 'bat', 'cmd'];

  const result = await dialog.showOpenDialog({
    title,
    properties: ['openFile'],
    filters: [
      { name: 'Executables', extensions: process.platform === 'win32' ? windowsExtensions : ['*'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  });

  if (result.canceled || !result.filePaths || !result.filePaths.length) {
    return { canceled: true };
  }

  return {
    canceled: false,
    filePath: result.filePaths[0],
    target
  };
});

ipcMain.handle('get-auto-launch', async () => {
  if (app.isPackaged) {
    try {
      const current = app.getLoginItemSettings();
      if (current && typeof current.openAtLogin === 'boolean') {
        AUTO_LAUNCH = current.openAtLogin;
      }
    } catch (error) {
      console.error('[Settings] Failed to read auto-launch:', error.message);
    }
  }
  return { enabled: AUTO_LAUNCH };
});

ipcMain.handle('set-auto-launch', async (event, enabled) => {
  AUTO_LAUNCH = !!enabled;
  saveSettings({ autoLaunch: AUTO_LAUNCH });
  applyAutoLaunchSetting(AUTO_LAUNCH);
  return { enabled: AUTO_LAUNCH };
});

ipcMain.handle('run-network-diagnostics', async () => {
  try {
    return await runNetworkDiagnostics();
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('erp-launch-client', async () => {
  try {
    return launchParadigmExecutable('client');
  } catch (error) {
    return { success: false, error: error.message };
  }
});

function findRepoRoot() {
  // Walk up from the main process source directory looking for a .git folder
  let dir = app.isPackaged ? path.dirname(process.execPath) : __dirname;
  for (let i = 0; i < 6; i++) {
    if (fs.existsSync(path.join(dir, '.git'))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

ipcMain.handle('app-check-for-updates', async () => {
  const repoRoot = findRepoRoot();
  if (!repoRoot) {
    return { success: false, error: 'Repository root not found. Is this a git checkout?' };
  }
  try {
    // Fetch latest refs from the canonical application repository.
    execSync(`git -C "${repoRoot}" fetch --prune "${APP_UPDATE_REMOTE_URL}" ${APP_UPDATE_REMOTE_BRANCH}`, {
      stdio: 'pipe',
      timeout: 20000
    });

    const local = execSync(`git -C "${repoRoot}" rev-parse HEAD`, { encoding: 'utf8' }).trim();
    const remote = execSync(`git -C "${repoRoot}" rev-parse FETCH_HEAD`, { encoding: 'utf8' }).trim();

    if (local === remote) {
      return { success: true, upToDate: true, message: 'Already up to date.' };
    }

    // Count incoming commits
    const log = execSync(`git -C "${repoRoot}" log HEAD..FETCH_HEAD --oneline`, { encoding: 'utf8' }).trim();
    const changeCount = log ? log.split('\n').length : 0;

    execSync(`git -C "${repoRoot}" pull --ff-only "${APP_UPDATE_REMOTE_URL}" ${APP_UPDATE_REMOTE_BRANCH}`, {
      stdio: 'pipe',
      timeout: 30000
    });

    return { success: true, upToDate: false, updated: true, changeCount, message: `Updated — ${changeCount} change(s) applied. Restart to use the latest version.` };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('open-dev-tools', async () => {
  if (!mainWindow || mainWindow.isDestroyed()) {
    return { success: false, error: 'Main window is not available.' };
  }

  if (!mainWindow.webContents.isDevToolsOpened()) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
  }

  mainWindow.webContents.focus();
  return { success: true };
});

ipcMain.handle('authenticate-app-user', async (event, payload) => {
  try {
    const identifier = String(payload?.identifier || '').trim();
    const password = String(payload?.password || '');
    const identifierHash = hashAuthIdentifier(identifier);

    logger.info('Authentication attempt', { identifierHash, source: 'unknown' });
    appendAuthAuditEvent('attempt', identifier, { source: 'unknown' });

    if (!identifier || !password) {
      logger.warn('Authentication failed - missing credentials');
      appendAuthAuditEvent('failed_missing_credentials', identifier, { source: 'unknown' });
      return {
        success: false,
        error: 'Username/email and password are required.'
      };
    }

    const throttleState = getAuthThrottleState(identifier);
    if (throttleState.blocked) {
      logger.warn('Authentication blocked due to rate limit', {
        identifierHash,
        retryAfterSeconds: throttleState.retryAfterSeconds
      });
      appendAuthAuditEvent('blocked_rate_limit', identifier, {
        retryAfterSeconds: throttleState.retryAfterSeconds
      });
      return {
        success: false,
        authenticated: false,
        error: `Too many failed sign-in attempts. Try again in ${throttleState.retryAfterSeconds} seconds.`
      };
    }

    const normalizedIdentifier = identifier.toLowerCase();
    const localAdminUser = LOCAL_ADMIN_USERNAME.toLowerCase();

    if ((normalizedIdentifier === localAdminUser || normalizedIdentifier === `${localAdminUser}@local`) && password === LOCAL_ADMIN_PASSWORD) {
      AUTH_SESSION = {
        authenticated: true,
        role: 'admin',
        source: 'local-admin',
        user: {
          name: 'Generic Admin',
          mail: `${LOCAL_ADMIN_USERNAME}@local`,
          uid: LOCAL_ADMIN_USERNAME
        },
        loggedInAt: new Date().toISOString()
      };

      clearAuthFailureState(identifier);

      logger.info('Authentication succeeded', { source: 'local-admin', role: 'admin' });
      appendAuthAuditEvent('success', identifier, { source: 'local-admin', role: 'admin' });

      return {
        success: true,
        authenticated: true,
        role: AUTH_SESSION.role,
        source: AUTH_SESSION.source,
        user: AUTH_SESSION.user
      };
    }

    const ldapResult = await googleLdapService.authenticateUser({
      identifier,
      password,
      requiredGroupEmail: payload?.requiredGroupEmail
    });

    AUTH_SESSION = {
      authenticated: true,
      role: 'user',
      source: 'google-ldap',
      user: ldapResult.user,
      loggedInAt: new Date().toISOString()
    };

    clearAuthFailureState(identifier);

    logger.info('Authentication succeeded', {
      source: 'google-ldap',
      role: 'user',
      user: ldapResult.user.mail,
      identifierHash
    });
    appendAuthAuditEvent('success', identifier, {
      source: 'google-ldap',
      role: 'user'
    });

    return {
      success: true,
      authenticated: true,
      role: AUTH_SESSION.role,
      source: AUTH_SESSION.source,
      user: AUTH_SESSION.user
    };
  } catch (error) {
    const throttleState = recordAuthFailure(payload?.identifier);
    logger.error('Authentication failed', {
      error: error.message,
      identifierHash: hashAuthIdentifier(payload?.identifier),
      blocked: throttleState.blocked,
      attemptsRemaining: throttleState.attemptsRemaining
    });
    appendAuthAuditEvent('failed', payload?.identifier, {
      reason: error.message,
      blocked: throttleState.blocked,
      attemptsRemaining: throttleState.attemptsRemaining
    });

    const lockoutMessage = throttleState.blocked && throttleState.retryAfterSeconds
      ? ` Too many failed attempts. Try again in ${throttleState.retryAfterSeconds} seconds.`
      : '';

    return {
      success: false,
      authenticated: false,
      error: (error.message || 'Authentication failed.') + lockoutMessage
    };
  }
});

ipcMain.handle('get-app-auth-session', async () => {
  if (!isLdapAuthRequired()) {
    const openSession = buildOpenAccessSession();
    AUTH_SESSION = openSession;
    return openSession;
  }

  if (!AUTH_SESSION || !AUTH_SESSION.authenticated) {
    return { authenticated: false };
  }

  return {
    authenticated: true,
    role: AUTH_SESSION.role,
    source: AUTH_SESSION.source,
    user: AUTH_SESSION.user,
    loggedInAt: AUTH_SESSION.loggedInAt
  };
});

ipcMain.handle('logout-app-user', async () => {
  const wasAuthenticated = AUTH_SESSION?.authenticated || false;
  if (!isLdapAuthRequired()) {
    const openSession = buildOpenAccessSession();
    AUTH_SESSION = openSession;
    logger.info('Logout completed (open access mode)');
    return { success: true, ...openSession };
  }

  AUTH_SESSION = null;
  logger.info('Logout completed', { wasAuthenticated });
  return { success: true, authenticated: false };
});

ipcMain.handle('get-google-ldap-config', async () => {
  return { success: true, config: sanitizeConfigForRenderer(GOOGLE_LDAP_CONFIG) };
});

ipcMain.handle('set-google-ldap-config', async (event, payload) => {
  const current = { ...GOOGLE_LDAP_CONFIG };
  const nextPayload = { ...(payload || {}) };

  if (!Object.prototype.hasOwnProperty.call(nextPayload, 'bindPassword')) {
    nextPayload.bindPassword = current.bindPassword;
  }
  if (!Object.prototype.hasOwnProperty.call(nextPayload, 'clientKeyPassphrase')) {
    nextPayload.clientKeyPassphrase = current.clientKeyPassphrase;
  }

  const merged = resolveGoogleLdapConfig({
    ...current,
    ...nextPayload
  });

  GOOGLE_LDAP_CONFIG = merged;
  googleLdapService.setConfig(merged);
  saveSettings({ googleLdap: merged });

  return {
    success: true,
    config: sanitizeConfigForRenderer(merged)
  };
});

ipcMain.handle('test-google-ldap', async () => {
  try {
    const status = await googleLdapService.testConnection();
    return { success: true, ...status };
  } catch (error) {
    return {
      success: false,
      connected: false,
      error: error.message || 'Google LDAP test failed.'
    };
  }
});

ipcMain.handle('google-ldap-authenticate-user', async (event, payload) => {
  try {
    const result = await googleLdapService.authenticateUser({
      identifier: payload?.identifier,
      password: payload?.password,
      requiredGroupEmail: payload?.requiredGroupEmail
    });
    return { success: true, ...result };
  } catch (error) {
    return {
      success: false,
      authenticated: false,
      error: error.message || 'Google LDAP authentication failed.'
    };
  }
});

ipcMain.handle('google-ldap-search-directory', async (event, payload) => {
  try {
    const query = String(payload?.query || '').trim();
    const limit = Number(payload?.limit) || 25;
    if (!query) {
      return { success: false, error: 'Search query is required.' };
    }

    const [users, groups] = await Promise.all([
      googleLdapService.searchUsers(query, limit),
      googleLdapService.searchGroups(query, limit)
    ]);

    return {
      success: true,
      users,
      groups,
      totals: {
        users: users.length,
        groups: groups.length
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Google LDAP directory search failed.',
      users: [],
      groups: []
    };
  }
});

ipcMain.handle('google-ldap-sync-directory', async (event, payload) => {
  try {
    const limit = Number(payload?.limit) || undefined;
    const outputPath = String(payload?.outputPath || '').trim()
      || path.join(app.getPath('userData'), 'google-ldap-sync.json');

    const snapshot = await googleLdapService.syncDirectory(limit);
    fs.writeFileSync(outputPath, JSON.stringify(snapshot, null, 2), 'utf8');

    return {
      success: true,
      outputPath,
      totals: snapshot.totals,
      syncedAt: snapshot.syncedAt
    };
  } catch (error) {
    return {
      success: false,
      error: error.message || 'Google LDAP sync failed.'
    };
  }
});

ipcMain.handle('clear-chat-history', async () => {
  clearChatHistory();
  logger.info('Chat history cleared');
  return { cleared: true };
});

ipcMain.handle('run-health-checks', async () => {
  try {
    logger.info('Health checks requested via IPC');
    const results = await runHealthChecks({
      knowledgeBasePath: KNOWLEDGE_BASE_PATH || resolveKnowledgeBasePath(),
      vectorStorePath,
      ingestJournalPath,
      settingsPath,
      lmStudioApi: LM_STUDIO_API,
      lmStudioTimeout: 5000,
      chatServerPort: getChatServerPort(CHAT_SERVER_URL),
      chatServerEnabled: CHAT_SERVER_ENABLED,
      googleLdapConfig: GOOGLE_LDAP_CONFIG
    });

    logger.info('Health checks completed', {
      healthy: results.healthy,
      duration: results.duration,
      failed: results.summary?.failed || 0
    });

    return { success: true, ...results };
  } catch (error) {
    logger.error('Health checks failed via IPC', { error: error.message });
    return { success: false, error: error.message || 'Health check execution failed.' };
  }
});

ipcMain.handle('open-knowledge-base', async () => {
  const kbPath = KNOWLEDGE_BASE_PATH || resolveKnowledgeBasePath();
  if (!kbPath || !fs.existsSync(kbPath)) {
    return false;
  }
  await shell.openPath(kbPath);
  return true;
});

ipcMain.handle('select-ingest-file', async () => {
  const result = await dialog.showOpenDialog({
    title: 'Select a file to add to the knowledge base',
    properties: ['openFile'],
    filters: [
      { name: 'Supported', extensions: Array.from(SUPPORTED_INGEST_EXTENSIONS).map((ext) => ext.replace('.', '')) },
      { name: 'All Files', extensions: ['*'] }
    ]
  });

  if (result.canceled || !result.filePaths || result.filePaths.length === 0) {
    return { canceled: true };
  }

  return { canceled: false, filePath: result.filePaths[0] };
});

ipcMain.handle('select-ldap-client-cert-file', async () => {
  const result = await dialog.showOpenDialog({
    title: 'Select Google LDAP client certificate (.crt/.pem)',
    properties: ['openFile'],
    filters: [
      { name: 'Certificate Files', extensions: ['crt', 'pem', 'cer'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  });

  if (result.canceled || !result.filePaths || result.filePaths.length === 0) {
    return { canceled: true };
  }

  return { canceled: false, filePath: result.filePaths[0] };
});

ipcMain.handle('select-ldap-client-key-file', async () => {
  const result = await dialog.showOpenDialog({
    title: 'Select Google LDAP client private key (.key/.pem)',
    properties: ['openFile'],
    filters: [
      { name: 'Private Key Files', extensions: ['key', 'pem'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  });

  if (result.canceled || !result.filePaths || result.filePaths.length === 0) {
    return { canceled: true };
  }

  return { canceled: false, filePath: result.filePaths[0] };
});

ipcMain.handle('select-ldap-ca-cert-file', async () => {
  const result = await dialog.showOpenDialog({
    title: 'Select LDAP CA certificate (.crt/.pem)',
    properties: ['openFile'],
    filters: [
      { name: 'Certificate Files', extensions: ['crt', 'pem', 'cer'] },
      { name: 'All Files', extensions: ['*'] }
    ]
  });

  if (result.canceled || !result.filePaths || result.filePaths.length === 0) {
    return { canceled: true };
  }

  return { canceled: false, filePath: result.filePaths[0] };
});

ipcMain.handle('select-smartbuild-folder', async () => {
  const result = await dialog.showOpenDialog({
    title: 'Select SmartBuild source folder',
    properties: ['openDirectory']
  });

  if (result.canceled || !result.filePaths || result.filePaths.length === 0) {
    return { canceled: true };
  }

  return { canceled: false, folderPath: result.filePaths[0] };
});

ipcMain.handle('import-smartbuild-folder', async (event, payload) => {
  try {
    const folderPath = String(payload?.folderPath || '').trim();
    if (!folderPath || !fs.existsSync(folderPath)) {
      return { success: false, error: 'SmartBuild folder not found.' };
    }

    const category = normalizeCategory('smartbuild');
    if (!category) {
      return { success: false, error: 'SmartBuild category is not configured.' };
    }

    const kbPath = KNOWLEDGE_BASE_PATH || resolveKnowledgeBasePath();
    if (!kbPath) {
      return { success: false, error: 'Knowledge base path not found.' };
    }

    const fileCollection = collectSmartBuildFiles(folderPath);
    const files = fileCollection.files;
    if (files.length === 0) {
      return { success: false, error: 'No supported files found in the selected folder.' };
    }

    const existingEntries = loadIngestJournal();
    const knownHashes = new Set(existingEntries.map((entry) => entry.contentHash).filter(Boolean));

    const appendBlocks = [];
    const records = [];
    const vectorItems = [];
    const skipped = [];

    for (const filePath of files) {
      try {
        const rawContent = await extractTextFromFile(filePath);
        const content = String(rawContent || '').trim();
        if (!content) {
          skipped.push({ filePath, reason: 'No text extracted' });
          continue;
        }

        const contentHash = hashContent(content);
        if (knownHashes.has(contentHash)) {
          skipped.push({ filePath, reason: 'Exact duplicate content' });
          continue;
        }

        const duplicate = findDuplicateCandidate(content);
        if (duplicate) {
          skipped.push({ filePath, reason: `Duplicate ${duplicate.type} with ${duplicate.id}` });
          continue;
        }

        const id = generateIngestId();
        const title = sanitizeHeading(path.basename(filePath, path.extname(filePath)) || path.basename(filePath));
        const sourceLabel = filePath;

        appendBlocks.push(buildIngestSection({
          id,
          categoryLabel: category.label,
          title,
          sourceLabel,
          content
        }));

        records.push({
          id,
          title,
          categoryId: category.id,
          categoryLabel: category.label,
          sourceLabel,
          content,
          contentHash,
          addedAt: new Date().toISOString()
        });

        vectorItems.push({ id, title, content });
        knownHashes.add(contentHash);
      } catch (error) {
        skipped.push({ filePath, reason: error.message || 'Import failed' });
      }
    }

    if (records.length === 0) {
      return {
        success: false,
        error: 'No new SmartBuild entries were imported.',
        addedCount: 0,
        skippedCount: skipped.length,
        skipped
      };
    }

    fs.appendFileSync(kbPath, appendBlocks.join(''), 'utf8');

    const journal = loadIngestJournal();
    journal.push(...records);
    saveIngestJournal(journal);

    vectorItems.forEach((item) => {
      vectorStore.upsert(item);
    });

    rebuildKnowledgeState(kbPath);
    responseCache.clear();

    const git = attemptGitCommitAndPush(kbPath, `SmartBuild import: ${records.length} entries`);

    return {
      success: true,
      addedCount: records.length,
      skippedCount: skipped.length,
      importedFrom: folderPath,
      importMode: fileCollection.usedIndex ? 'index.json' : 'recursive-scan',
      indexPath: fileCollection.indexPath,
      unresolvedIndexedFiles: fileCollection.unresolved,
      git,
      skipped
    };
  } catch (error) {
    return { success: false, error: error.message || 'Failed to import SmartBuild folder.' };
  }
});

ipcMain.handle('ingest-source', async (event, payload) => {
  try {
    const sourceType = String(payload?.sourceType || '').toLowerCase();
    const category = normalizeCategory(payload?.category);
    const title = String(payload?.title || '').trim();

    if (!category) {
      return { success: false, error: 'Invalid category selected.' };
    }

    let content = '';
    let sourceLabel = '';

    if (sourceType === 'file') {
      const filePath = String(payload?.filePath || '').trim();
      if (!filePath || !fs.existsSync(filePath)) {
        return { success: false, error: 'Selected file could not be found.' };
      }
      content = await extractTextFromFile(filePath);
      sourceLabel = filePath;
    } else if (sourceType === 'url') {
      const url = String(payload?.url || '').trim();
      if (!url) {
        return { success: false, error: 'Please enter a valid URL.' };
      }
      content = await extractTextFromUrl(url);
      sourceLabel = url;
    } else {
      return { success: false, error: 'Unsupported source type.' };
    }

    const trimmed = String(content || '').trim();
    if (!trimmed) {
      return { success: false, error: 'No text could be extracted from this source.' };
    }

    const preview = truncateText(trimmed, 4000);
    const autoTitle = title || sanitizeHeading(sourceLabel.split(/[\\/]/).pop() || sourceLabel);

    return {
      success: true,
      category: category.label,
      title: autoTitle,
      sourceLabel: sourceLabel,
      preview: preview,
      content: trimmed
    };
  } catch (error) {
    console.error('[Ingest] Failed to extract source:', error.message);
    return { success: false, error: error.message || 'Failed to ingest source.' };
  }
});

ipcMain.handle('approve-ingestion', async (event, payload) => {
  try {
    const category = normalizeCategory(payload?.category);
    if (!category) {
      logger.warn('Ingestion rejected - invalid category', { category: payload?.category });
      return { success: false, error: 'Invalid category selected.' };
    }

    const content = String(payload?.content || '').trim();
    if (!content) {
      logger.warn('Ingestion rejected - empty content');
      return { success: false, error: 'Content is required for ingestion.' };
    }

    const title = String(payload?.title || '').trim();
    const sourceLabel = String(payload?.sourceLabel || '').trim();

    const kbPath = KNOWLEDGE_BASE_PATH || resolveKnowledgeBasePath();
    if (!kbPath) {
      logger.error('Ingestion failed - knowledge base not found');
      return { success: false, error: 'Knowledge base path not found' };
    }

    const duplicate = findDuplicateCandidate(content);
    if (duplicate) {
      logger.warn('Ingestion rejected - duplicate content', {
        duplicateType: duplicate.type,
        duplicateId: duplicate.id,
        similarity: duplicate.similarity
      });
      return {
        success: false,
        error: `This content is ${duplicate.type === 'exact' ? 'identical' : 'very similar'} to existing entry: ${duplicate.title}`,
        duplicate: duplicate
      };
    }

    const id = generateIngestId();
    const contentHash = hashContent(content);

    const ingestBlock = buildIngestSection({
      id,
      categoryLabel: category.label,
      title,
      sourceLabel,
      content
    });

    fs.appendFileSync(kbPath, ingestBlock, 'utf8');

    const journal = loadIngestJournal();
    journal.push({
      id,
      title,
      categoryId: category.id,
      categoryLabel: category.label,
      sourceLabel,
      content,
      contentHash,
      addedAt: new Date().toISOString()
    });
    saveIngestJournal(journal);

    vectorStore.upsert({ id, title, content });

    rebuildKnowledgeState(kbPath);
    responseCache.clear();

    const git = attemptGitCommitAndPush(kbPath, `Add ingestion: ${title}`);

    logger.info('Ingestion approved and saved', {
      id,
      title,
      category: category.label,
      gitCommitted: git.committed,
      gitPushed: git.pushed
    });

    return {
      success: true,
      id,
      title,
      category: category.label,
      git
    };
  } catch (error) {
    logger.error('Ingestion failed', {
      error: error.message,
      title: payload?.title
    });
    return { success: false, error: error.message || 'Failed to save ingestion.' };
  }
});
ipcMain.handle('list-ingestions', async () => {
  try {
    const entries = getSortedIngestEntries().map((entry) => ({
      id: entry.id,
      title: entry.title,
      categoryId: entry.categoryId,
      categoryLabel: entry.categoryLabel,
      sourceLabel: entry.sourceLabel,
      content: entry.content,
      addedAt: entry.addedAt
    }));
    return { success: true, entries };
  } catch (error) {
    return { success: false, error: error.message || 'Failed to read ingest history.', entries: [] };
  }
});

ipcMain.handle('delete-ingestion', async (event, payload) => {
  try {
    const id = String(payload?.id || '').trim();
    if (!id) return { success: false, error: 'Entry ID is required.' };

    const kbPath = KNOWLEDGE_BASE_PATH || resolveKnowledgeBasePath();
    if (!kbPath) return { success: false, error: 'Knowledge base path not found.' };

    const removedFromKb = removeEntryFromKnowledgeBase(kbPath, id);
    if (!removedFromKb) {
      return { success: false, error: `Entry ${id} not found in knowledge base markers.` };
    }

    const journal = loadIngestJournal();
    const next = journal.filter((entry) => entry.id !== id);
    saveIngestJournal(next);
    vectorStore.remove(id);

    rebuildKnowledgeState(kbPath);
    responseCache.clear();

    const git = attemptGitCommitAndPush(kbPath, `Ingest delete: ${id}`);
    return { success: true, git };
  } catch (error) {
    return { success: false, error: error.message || 'Failed to delete ingest entry.' };
  }
});

ipcMain.handle('undo-last-ingestion', async () => {
  try {
    const entries = getSortedIngestEntries();
    if (entries.length === 0) return { success: false, error: 'No ingested entries available to undo.' };
    const last = entries[0];
    const kbPath = KNOWLEDGE_BASE_PATH || resolveKnowledgeBasePath();
    if (!kbPath) return { success: false, error: 'Knowledge base path not found.' };

    const removedFromKb = removeEntryFromKnowledgeBase(kbPath, last.id);
    if (!removedFromKb) {
      return { success: false, error: `Entry ${last.id} not found in knowledge base markers.` };
    }

    const journal = loadIngestJournal().filter((entry) => entry.id !== last.id);
    saveIngestJournal(journal);
    vectorStore.remove(last.id);

    rebuildKnowledgeState(kbPath);
    responseCache.clear();

    const git = attemptGitCommitAndPush(kbPath, `Ingest undo: ${last.id}`);
    return { success: true, removed: last, git };
  } catch (error) {
    return { success: false, error: error.message || 'Failed to undo latest ingest entry.' };
  }
});

ipcMain.handle('edit-ingestion', async (event, payload) => {
  try {
    const id = String(payload?.id || '').trim();
    if (!id) return { success: false, error: 'Entry ID is required.' };

    const category = normalizeCategory(payload?.category);
    if (!category) return { success: false, error: 'Invalid category selected.' };

    const title = String(payload?.title || '').trim() || 'Untitled';
    const sourceLabel = String(payload?.sourceLabel || '').trim() || 'User submission';
    const content = String(payload?.content || '').trim();
    if (!content) return { success: false, error: 'Content is required for edit.' };

    const duplicate = findDuplicateCandidate(content, id);
    if (duplicate) {
      return {
        success: false,
        error: `Duplicate detected (${duplicate.type}) with entry ${duplicate.id} (${duplicate.title}).`,
        duplicate
      };
    }

    const kbPath = KNOWLEDGE_BASE_PATH || resolveKnowledgeBasePath();
    if (!kbPath) return { success: false, error: 'Knowledge base path not found.' };

    const replacement = buildIngestSection({
      id,
      categoryLabel: category.label,
      title,
      sourceLabel,
      content
    });

    const replaced = replaceEntryInKnowledgeBase(kbPath, id, replacement);
    if (!replaced) return { success: false, error: `Entry ${id} not found in knowledge base markers.` };

    const journal = loadIngestJournal();
    const entryIndex = journal.findIndex((entry) => entry.id === id);
    if (entryIndex >= 0) {
      journal[entryIndex] = {
        ...journal[entryIndex],
        title,
        categoryId: category.id,
        categoryLabel: category.label,
        sourceLabel,
        content,
        contentHash: hashContent(content),
        updatedAt: new Date().toISOString()
      };
      saveIngestJournal(journal);
    }

    vectorStore.upsert({
      id,
      title,
      content
    });

    rebuildKnowledgeState(kbPath);
    responseCache.clear();

    const git = attemptGitCommitAndPush(kbPath, `Ingest edit: ${id}`);
    return { success: true, git };
  } catch (error) {
    return { success: false, error: error.message || 'Failed to edit ingest entry.' };
  }
});

function getResponseProfile(query) {
  const text = String(query || '').toLowerCase();
  const largeTriggers = [
    'detailed', 'detail', 'step by step', 'step-by-step', 'full', 'complete',
    'comprehensive', 'all steps', 'entire', 'everything', 'walkthrough',
    'in depth', 'in-depth', 'explain in detail', 'long answer',
    'tell me about', 'overview'
  ];

  const wantsLarge = largeTriggers.some(trigger => text.includes(trigger));

  return {
    maxTokens: wantsLarge ? RESPONSE_LARGE_MAX_TOKENS : RESPONSE_DEFAULT_MAX_TOKENS,
    contextChars: wantsLarge ? CONTEXT_LARGE_CHARS : CONTEXT_DEFAULT_CHARS,
    temperature: 0.7,
    resultLimit: wantsLarge ? 4 : 3,
    timeoutMs: LM_REQUEST_TIMEOUT_MS
  };
}

function buildSystemPrompt({ assistantMode, contextSections, includesKnowledge, contractorContext }) {
  const sharedValues = `Western Building Supply values (ELITE):
- Excellence is a habit – We are what we repeatedly do. Therefore, excellence is not an act but a habit.
- Lead every day – The best leaders lead every day.
- Into the storm – We face challenges directly and never shy away from difficult situations.
- Transform through simplicity – Simple scales, complex fails. We transform complexity into simplicity to drive results.
- Empowering impactful solutions – We provide solutions that make a difference for our customers, not just short-term fixes.`;

  const contractorDirective = contractorContext
    ? `\nACTIVE CONTRACTOR CONTEXT:\n${contractorContext}\nWhen contractor-specific and general Western guidance conflict, prefer the selected contractor's documented preferences.`
    : '';

  if (assistantMode === 'assistant') {
    return `You are Western Intelligence, an AI assistant for Western Building Supply.

Primary rules:
1. Complete the user's explicit request first.
2. Keep responses practical, direct, and helpful.
3. Do not inject operational workflows unless the user asks for them.
4. Use conversation history to keep continuity and context.

Tone:
- Professional and clear
- Friendly without being verbose

${sharedValues}${contractorDirective}`;
  }

  if (assistantMode === 'wbs') {
    return `You are the Western Intelligence Support Agent focused on Western Building Supply and Paradigm ERP workflows.

Primary rules:
1. Use the provided indexed knowledge base context as your source of truth.
2. If context is insufficient, clearly say what is missing.
3. Avoid unrelated guidance and avoid speculative details.
4. Keep output aligned to the user's request while staying grounded.

${sharedValues}${contractorDirective}

INDEXED KNOWLEDGE BASE SECTIONS (Most Relevant):
${includesKnowledge ? contextSections : 'No high-confidence matches were found for this query.'}`;
  }

  return `You are the Western Intelligence Support Agent for Western Building Supply.

Primary rules:
1. Complete the user's explicit task first.
2. When helpful, add Western/Paradigm context only if it is relevant.
3. If no relevant context exists, do not force it.
4. Use conversation history to maintain continuity.

${sharedValues}${contractorDirective}

INDEXED KNOWLEDGE BASE SECTIONS (Most Relevant):
${includesKnowledge ? contextSections : 'No high-confidence matches were found for this query.'}`;
}

function isLmTimeoutError(error) {
  if (!error) return false;
  const code = String(error.code || '').toUpperCase();
  const message = String(error.message || '').toLowerCase();
  return code === 'ECONNABORTED' || message.includes('timeout');
}

// Create application menu
const menu = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Exit',
        accelerator: 'CmdOrCtrl+Q',
        click: () => app.quit()
      }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About Western Intelligence',
        click: () => {
          // Open about dialog
        }
      },
      {
        label: 'Knowledge Base',
        click: () => {
          mainWindow.webContents.send('open-knowledge-base');
        }
      }
    ]
  }
];

Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
