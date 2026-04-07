/**
 * File: Western Intel/app/src/health-check.js
 * Purpose: System health validation on application startup
 * What It Does: Validates dependencies, services, and critical file existence before app runs
 * Why It Exists: Prevent runtime failures by detecting issues early with actionable diagnostics
 * Connected To: fs, path, axios, net
 * 
 * Health Checks Performed:
 * - Knowledge base file exists and is readable
 * - LM Studio endpoint is reachable (with timeout)
 * - Vector store file exists or can be created
 * - Ingest journal file exists or can be created
 * - Settings directory is writable
 * - Chat server port is available (if enabled)
 * - Google LDAP config is valid (if enabled)
 * 
 * Usage:
 *   const { runHealthChecks } = require('./health-check');
 *   const results = await runHealthChecks(config);
 *   if (!results.healthy) {
 *     console.error('Health check failed:', results.failures);
 *   }
 */

const fs = require('fs');
const path = require('path');
const net = require('net');
const axios = require('axios');

/**
 * Run all health checks and return aggregated results
 * @param {Object} config - Application configuration
 * @returns {Promise<Object>} Health check results
 */
async function runHealthChecks(config = {}) {
  const startTime = Date.now();
  const checks = [];

  // Run all checks in parallel
  const results = await Promise.allSettled([
    checkKnowledgeBase(config.knowledgeBasePath),
    checkVectorStore(config.vectorStorePath),
    checkIngestJournal(config.ingestJournalPath),
    checkSettingsDirectory(config.settingsPath),
    checkLmStudioEndpoint(config.lmStudioApi, config.lmStudioTimeout || 5000),
    checkChatServerPort(config.chatServerPort, config.chatServerEnabled),
    checkGoogleLdapConfig(config.googleLdapConfig)
  ]);

  // Process results
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      checks.push(result.value);
    } else {
      checks.push({
        name: `Check ${index + 1}`,
        status: 'FAIL',
        message: result.reason?.message || 'Unknown error',
        critical: true
      });
    }
  });

  // Determine overall health
  const failures = checks.filter(check => check.status === 'FAIL');
  const criticalFailures = failures.filter(check => check.critical);
  const warnings = checks.filter(check => check.status === 'WARN');

  const healthy = criticalFailures.length === 0;
  const duration = Date.now() - startTime;

  return {
    healthy,
    timestamp: new Date().toISOString(),
    duration,
    summary: {
      total: checks.length,
      passed: checks.filter(c => c.status === 'PASS').length,
      warnings: warnings.length,
      failed: failures.length,
      critical: criticalFailures.length
    },
    checks,
    failures: failures.map(f => ({ name: f.name, message: f.message, critical: f.critical })),
    warnings: warnings.map(w => ({ name: w.name, message: w.message }))
  };
}

/**
 * Check if knowledge base file exists and is readable
 */
async function checkKnowledgeBase(kbPath) {
  const name = 'Knowledge Base File';

  if (!kbPath) {
    return {
      name,
      status: 'WARN',
      message: 'Knowledge base path not configured. Set KB_PATH or place knowledgebase.md in app folder.',
      critical: false
    };
  }

  try {
    if (!fs.existsSync(kbPath)) {
      return {
        name,
        status: 'FAIL',
        message: `Knowledge base file not found: ${kbPath}`,
        critical: true,
        suggestion: 'Configure KB_PATH environment variable or place Western Building Supply knowledgebase.md in the app directory.'
      };
    }

    const stats = fs.statSync(kbPath);
    if (!stats.isFile()) {
      return {
        name,
        status: 'FAIL',
        message: `Knowledge base path is not a file: ${kbPath}`,
        critical: true
      };
    }

    // Try to read first 100 bytes to verify readability
    const fd = fs.openSync(kbPath, 'r');
    const buffer = Buffer.alloc(100);
    fs.readSync(fd, buffer, 0, 100, 0);
    fs.closeSync(fd);

    return {
      name,
      status: 'PASS',
      message: `Knowledge base loaded: ${path.basename(kbPath)} (${(stats.size / 1024).toFixed(1)} KB)`,
      details: { path: kbPath, size: stats.size }
    };

  } catch (error) {
    return {
      name,
      status: 'FAIL',
      message: `Knowledge base read error: ${error.message}`,
      critical: true,
      suggestion: 'Check file permissions and ensure the file is not corrupted.'
    };
  }
}

/**
 * Check if vector store exists or can be created
 */
async function checkVectorStore(vectorStorePath) {
  const name = 'Vector Store';

  if (!vectorStorePath) {
    return {
      name,
      status: 'WARN',
      message: 'Vector store path not configured.',
      critical: false
    };
  }

  try {
    if (fs.existsSync(vectorStorePath)) {
      const stats = fs.statSync(vectorStorePath);
      const data = JSON.parse(fs.readFileSync(vectorStorePath, 'utf8'));
      const count = Array.isArray(data) ? data.length : 0;

      return {
        name,
        status: 'PASS',
        message: `Vector store loaded: ${count} embeddings`,
        details: { path: vectorStorePath, entries: count, size: stats.size }
      };
    } else {
      // Try to create empty vector store
      const dir = path.dirname(vectorStorePath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(vectorStorePath, '[]', 'utf8');

      return {
        name,
        status: 'PASS',
        message: 'Vector store created (empty)',
        details: { path: vectorStorePath, entries: 0 }
      };
    }
  } catch (error) {
    return {
      name,
      status: 'FAIL',
      message: `Vector store error: ${error.message}`,
      critical: false,
      suggestion: 'Check directory permissions. Duplicate detection will be disabled.'
    };
  }
}

/**
 * Check if ingest journal exists or can be created
 */
async function checkIngestJournal(journalPath) {
  const name = 'Ingest Journal';

  if (!journalPath) {
    return {
      name,
      status: 'WARN',
      message: 'Ingest journal path not configured.',
      critical: false
    };
  }

  try {
    if (fs.existsSync(journalPath)) {
      const data = JSON.parse(fs.readFileSync(journalPath, 'utf8'));
      const count = Array.isArray(data) ? data.length : 0;

      return {
        name,
        status: 'PASS',
        message: `Ingest journal loaded: ${count} entries`,
        details: { path: journalPath, entries: count }
      };
    } else {
      // Try to create empty journal
      const dir = path.dirname(journalPath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(journalPath, '[]', 'utf8');

      return {
        name,
        status: 'PASS',
        message: 'Ingest journal created (empty)',
        details: { path: journalPath, entries: 0 }
      };
    }
  } catch (error) {
    return {
      name,
      status: 'FAIL',
      message: `Ingest journal error: ${error.message}`,
      critical: false,
      suggestion: 'Check directory permissions. Ingestion history will not be available.'
    };
  }
}

/**
 * Check if settings directory is writable
 */
async function checkSettingsDirectory(settingsPath) {
  const name = 'Settings Directory';

  if (!settingsPath) {
    return {
      name,
      status: 'WARN',
      message: 'Settings path not configured.',
      critical: false
    };
  }

  try {
    const dir = path.dirname(settingsPath);
    fs.mkdirSync(dir, { recursive: true });

    // Try to write a test file
    const testFile = path.join(dir, '.write-test');
    fs.writeFileSync(testFile, 'test', 'utf8');
    fs.unlinkSync(testFile);

    return {
      name,
      status: 'PASS',
      message: 'Settings directory is writable',
      details: { path: dir }
    };

  } catch (error) {
    return {
      name,
      status: 'FAIL',
      message: `Settings directory not writable: ${error.message}`,
      critical: true,
      suggestion: 'Check directory permissions. Application settings cannot be saved.'
    };
  }
}

/**
 * Check if LM Studio endpoint is reachable
 */
async function checkLmStudioEndpoint(apiUrl, timeout) {
  const name = 'LM Studio Endpoint';

  if (!apiUrl) {
    return {
      name,
      status: 'WARN',
      message: 'LM Studio API URL not configured.',
      critical: false
    };
  }

  try {
    const modelsUrl = apiUrl.replace(/\/v1$/, '') + '/v1/models';
    const response = await axios.get(modelsUrl, {
      timeout,
      validateStatus: () => true
    });

    if (response.status >= 200 && response.status < 300) {
      const models = response.data?.data || [];
      const modelCount = Array.isArray(models) ? models.length : 0;

      return {
        name,
        status: 'PASS',
        message: `LM Studio connected: ${modelCount} model(s) loaded`,
        details: { url: apiUrl, status: response.status, models: modelCount }
      };
    } else {
      return {
        name,
        status: 'WARN',
        message: `LM Studio returned status ${response.status}`,
        critical: false,
        suggestion: 'Check if LM Studio is running and has models loaded.'
      };
    }

  } catch (error) {
    const isTimeout = error.code === 'ECONNABORTED';
    const isRefused = error.code === 'ECONNREFUSED';

    if (isRefused || isTimeout) {
      return {
        name,
        status: 'WARN',
        message: isTimeout 
          ? `LM Studio timeout after ${timeout}ms` 
          : 'LM Studio not reachable',
        critical: false,
        suggestion: 'Start LM Studio and load a model. RAG queries will fail until connected.'
      };
    }

    return {
      name,
      status: 'WARN',
      message: `LM Studio health check failed: ${error.message}`,
      critical: false
    };
  }
}

/**
 * Check if chat server port is available
 */
async function checkChatServerPort(port, enabled) {
  const name = 'Chat Server Port';

  if (!enabled) {
    return {
      name,
      status: 'PASS',
      message: 'Chat server disabled (skipped)',
      details: { enabled: false }
    };
  }

  if (!port) {
    return {
      name,
      status: 'WARN',
      message: 'Chat server port not configured.',
      critical: false
    };
  }

  return new Promise((resolve) => {
    const server = net.createServer();

    server.once('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        resolve({
          name,
          status: 'WARN',
          message: `Chat server port ${port} is already in use`,
          critical: false,
          suggestion: 'Another instance may be running. Chat features may conflict.'
        });
      } else {
        resolve({
          name,
          status: 'WARN',
          message: `Chat server port check failed: ${error.message}`,
          critical: false
        });
      }
    });

    server.once('listening', () => {
      server.close(() => {
        resolve({
          name,
          status: 'PASS',
          message: `Chat server port ${port} is available`,
          details: { port, enabled }
        });
      });
    });

    server.listen(port);
  });
}

/**
 * Check if Google LDAP configuration is valid
 */
async function checkGoogleLdapConfig(ldapConfig) {
  const name = 'Google LDAP Config';

  if (!ldapConfig || !ldapConfig.enabled) {
    return {
      name,
      status: 'PASS',
      message: 'Google LDAP disabled (open access mode)',
      details: { enabled: false }
    };
  }

  const errors = [];

  if (!ldapConfig.url) errors.push('URL missing');
  if (!ldapConfig.baseDn) errors.push('Base DN missing');
  if (!ldapConfig.bindDn) errors.push('Bind DN missing');
  if (!ldapConfig.bindPassword) errors.push('Bind password missing');

  if (errors.length > 0) {
    return {
      name,
      status: 'FAIL',
      message: `Google LDAP config incomplete: ${errors.join(', ')}`,
      critical: true,
      suggestion: 'Configure Google LDAP settings in Admin panel or use local admin account.'
    };
  }

  return {
    name,
    status: 'PASS',
    message: 'Google LDAP config valid',
    details: { 
      enabled: true, 
      url: ldapConfig.url,
      baseDn: ldapConfig.baseDn 
    }
  };
}

module.exports = {
  runHealthChecks,
  checkKnowledgeBase,
  checkVectorStore,
  checkIngestJournal,
  checkSettingsDirectory,
  checkLmStudioEndpoint,
  checkChatServerPort,
  checkGoogleLdapConfig
};
