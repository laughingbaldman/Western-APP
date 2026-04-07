/**
 * File: Western Intel/app/public/app.js
 * Purpose: Core project script/module.
 * What It Does: Implements workflow logic used by Western Intel.
 * Why It Exists: Keeps this behavior isolated and maintainable for technicians.
 * Connected To: None detected
 * Notes: Auto-added explainability header; update with business-specific details as needed.
 */

// Western Intelligence - Frontend Application
if (!window.electronAPI) {
    console.error('[Frontend] CRITICAL: electronAPI not exposed by preload!');
} else {
    console.log('[Frontend] electronAPI initialized');
}

// DOM Elements
const queryInput = document.getElementById('query-input');
const sendBtn = document.getElementById('send-btn');
const messagesContainer = document.getElementById('messages');
const welcomeMessage = document.getElementById('welcome');
const lmStatus = document.getElementById('lm-status');
const lmText = document.getElementById('lm-text');
const assistantModeLabel = document.getElementById('assistant-mode-label');
const assistantModeSwitch = document.getElementById('assistant-mode-switch');
const contractorSelect = document.getElementById('contractor-select');
const contractorSelectionStatus = document.getElementById('contractor-selection-status');
const contractorWelcomeNote = document.getElementById('contractor-welcome-note');
const queryHintText = document.getElementById('query-hint-text');
const contractorFavoriteBtn = document.getElementById('contractor-favorite-btn');
const contractorSyncBtn = document.getElementById('contractor-sync-btn');
const contractorSyncStatus = document.getElementById('contractor-sync-status');
const quickTabParadigm = document.getElementById('quick-tab-paradigm');
const quickTabSmartBuild = document.getElementById('quick-tab-smartbuild');
const quickLinksParadigm = document.getElementById('quick-links-paradigm');
const quickLinksSmartBuild = document.getElementById('quick-links-smartbuild');
const welcomeIndexedSummary = document.getElementById('welcome-indexed-summary');

const kbParadigmCount = document.getElementById('kb-paradigm-count');
const kbSmartBuildSupportCount = document.getElementById('kb-smartbuild-support-count');
const kbSmartBuildVideosCount = document.getElementById('kb-smartbuild-videos-count');
const kbSmartBuildTotalCount = document.getElementById('kb-smartbuild-total-count');
const kbManualFormsTotalCount = document.getElementById('kb-manual-forms-total-count');
const kbTotalIndexedCount = document.getElementById('kb-total-indexed-count');

const aboutParadigmCount = document.getElementById('about-paradigm-count');
const aboutSmartBuildTotalCount = document.getElementById('about-smartbuild-total-count');
const aboutManualFormsTotalCount = document.getElementById('about-manual-forms-total-count');
const aboutVersion = document.getElementById('about-version');
const aboutPlatform = document.getElementById('about-platform');
const aboutRuntime = document.getElementById('about-runtime');
const aboutAuth = document.getElementById('about-auth');
const aboutAssistantMode = document.getElementById('about-assistant-mode');
const aboutLmStatus = document.getElementById('about-lm-status');
const aboutLastRefresh = document.getElementById('about-last-refresh');
const loginOverlay = document.getElementById('login-overlay');
const loginIdentifier = document.getElementById('login-identifier');
const loginPassword = document.getElementById('login-password');
const loginSubmit = document.getElementById('login-submit');
const loginStatus = document.getElementById('login-status');
const logoutBtn = document.getElementById('logout-btn');
const authUserLabel = document.getElementById('auth-user-label');
const launchErpBtn = document.getElementById('launch-erp-btn');
const updateAppBtn = document.getElementById('update-app-btn');
const erpLauncherStatus = document.getElementById('erp-launcher-status');

// Modals
const kbModal = document.getElementById('kb-modal');
const aboutModal = document.getElementById('about-modal');
const contactModal = document.getElementById('contact-modal');
const comingSoonModal = document.getElementById('coming-soon-modal');
const adminModal = document.getElementById('admin-modal');
const ingestModal = document.getElementById('ingest-modal');
const lmReconnectModal = document.getElementById('lm-reconnect-modal');
const lmReconnectUrl = document.getElementById('lm-reconnect-url');
const lmReconnectSave = document.getElementById('lm-reconnect-save');
const lmReconnectSkip = document.getElementById('lm-reconnect-skip');
const lmReconnectStatus = document.getElementById('lm-reconnect-status');
const closeButtons = document.querySelectorAll('.close');

// Admin Console Elements
const adminLmUrl = document.getElementById('admin-lm-url');
const adminLmSave = document.getElementById('admin-lm-save');
const adminLmTest = document.getElementById('admin-lm-test');
const adminLmStatus = document.getElementById('admin-lm-status');
const adminChatUrl = document.getElementById('admin-chat-url');
const adminChatSave = document.getElementById('admin-chat-save');
const adminChatSetup = document.getElementById('admin-chat-setup');
const adminChatEnabled = document.getElementById('admin-chat-enabled');
const adminChatStatus = document.getElementById('admin-chat-status');
const adminErpClientPath = document.getElementById('admin-erp-client-path');
const adminErpUpdaterPath = document.getElementById('admin-erp-updater-path');
const adminErpClientBrowse = document.getElementById('admin-erp-client-browse');
const adminErpUpdaterBrowse = document.getElementById('admin-erp-updater-browse');
const adminErpSave = document.getElementById('admin-erp-save');
const adminErpStatus = document.getElementById('admin-erp-status');
const adminAutoLaunch = document.getElementById('admin-auto-launch');
const adminOpenDevTools = document.getElementById('admin-open-dev-tools');
const adminVpnDiagnostics = document.getElementById('admin-vpn-diagnostics');
const adminToolsStatus = document.getElementById('admin-tools-status');
const adminClearChat = document.getElementById('admin-clear-chat');
const adminLdapEnabled = document.getElementById('admin-ldap-enabled');
const adminLdapSecureMode = document.getElementById('admin-ldap-secure-mode');
const adminLdapModeBadge = document.getElementById('admin-ldap-mode-badge');
const adminLdapUrl = document.getElementById('admin-ldap-url');
const adminLdapBaseDn = document.getElementById('admin-ldap-base-dn');
const adminLdapBindDn = document.getElementById('admin-ldap-bind-dn');
const adminLdapBindPassword = document.getElementById('admin-ldap-bind-password');
const adminLdapUserBaseDn = document.getElementById('admin-ldap-user-base-dn');
const adminLdapGroupBaseDn = document.getElementById('admin-ldap-group-base-dn');
const adminLdapRequiredGroup = document.getElementById('admin-ldap-required-group');
const adminLdapCaCertPath = document.getElementById('admin-ldap-ca-cert-path');
const adminLdapClientCertPath = document.getElementById('admin-ldap-client-cert-path');
const adminLdapClientKeyPath = document.getElementById('admin-ldap-client-key-path');
const adminLdapClientKeyPassphrase = document.getElementById('admin-ldap-client-key-passphrase');
const adminLdapBrowseCaCert = document.getElementById('admin-ldap-browse-ca-cert');
const adminLdapBrowseClientCert = document.getElementById('admin-ldap-browse-client-cert');
const adminLdapBrowseClientKey = document.getElementById('admin-ldap-browse-client-key');
const adminLdapSave = document.getElementById('admin-ldap-save');
const adminLdapTest = document.getElementById('admin-ldap-test');
const adminLdapStatus = document.getElementById('admin-ldap-status');
const adminLdapSearch = document.getElementById('admin-ldap-search');
const adminLdapSearchBtn = document.getElementById('admin-ldap-search-btn');
const adminLdapSyncBtn = document.getElementById('admin-ldap-sync-btn');
const adminLdapAuthUser = document.getElementById('admin-ldap-auth-user');
const adminLdapAuthPassword = document.getElementById('admin-ldap-auth-password');
const adminLdapAuthBtn = document.getElementById('admin-ldap-auth-btn');
const adminLdapResults = document.getElementById('admin-ldap-results');

// Team Chat Elements
const teamChatBubble = document.getElementById('team-chat-bubble');
const teamChatWindow = document.getElementById('team-chat-window');
const minimizeChatBtn = document.getElementById('minimize-chat-btn');
const usernameInput = document.getElementById('username-input');
const registerBtn = document.getElementById('register-btn');
const registrationForm = document.getElementById('registration-form');
const chatInterface = document.getElementById('chat-interface');
const teamMessages = document.getElementById('team-messages');
const teamMessageInput = document.getElementById('team-message-input');
const teamSendBtn = document.getElementById('team-send-btn');
const lunchToggleBtn = document.getElementById('lunch-toggle-btn');
const lunchStatusBar = document.getElementById('lunch-status-bar');
const lunchList = document.getElementById('lunch-list');
const changeNameBtn = document.getElementById('change-name-btn');
const currentUserDisplay = document.getElementById('current-user-display');
const loadHistoryBtn = document.getElementById('load-history-btn');

// Ingest Elements
const ingestLink = document.getElementById('ingest-link');
const ingestFileBtn = document.getElementById('ingest-file-btn');
const ingestFileName = document.getElementById('ingest-file-name');
const ingestSmartBuildFolderBtn = document.getElementById('ingest-smartbuild-folder-btn');
const ingestSmartBuildFolderLabel = document.getElementById('ingest-smartbuild-folder');
const ingestUrlInput = document.getElementById('ingest-url');
const ingestCategory = document.getElementById('ingest-category');
const ingestTitle = document.getElementById('ingest-title');
const ingestPreviewBtn = document.getElementById('ingest-preview-btn');
const ingestStatus = document.getElementById('ingest-status');
const ingestPreview = document.getElementById('ingest-preview');
const ingestApproveCheck = document.getElementById('ingest-approve-check');
const ingestApproveBtn = document.getElementById('ingest-approve-btn');
const ingestResetBtn = document.getElementById('ingest-reset-btn');
const ingestExistingSelect = document.getElementById('ingest-existing-select');
const ingestRefreshBtn = document.getElementById('ingest-refresh-btn');
const ingestLoadBtn = document.getElementById('ingest-load-btn');
const ingestSaveEditBtn = document.getElementById('ingest-save-edit-btn');
const ingestDeleteBtn = document.getElementById('ingest-delete-btn');
const ingestUndoBtn = document.getElementById('ingest-undo-btn');

// State
let isLoading = false;
let socket = null;
let currentUsername = null;
let isOnLunch = false;
let userLunchStatus = new Map();
let conversationId = null;
let assistantMode = 'hybrid';
let selectedContractorId = '';
let contractorCatalog = [];
let contractorFavorites = new Set();
let ingestDraft = null;
let ingestFilePath = null;
let smartBuildFolderPath = null;
let ingestEntries = [];
let editingIngestId = null;
let isAuthenticated = false;
let authenticatedUser = null;
let authenticatedRole = 'user';
let teamChatInitialized = false;
let lmMonitorStarted = false;
let lmConnectionCheckTimer = null;
let lmReconnectPromptOpen = false;
let lastLmStatusSummary = 'Checking...';
let appInfoLoaded = false;
let lastKnownIndexedStats = {
    paradigmArticles: 478,
    smartBuild: {
        supportArticles: 0,
        youtubeVideos: 0,
        total: 0
    },
    manualForms: {
        forms: 0,
        total: 0
    },
    totalIndexed: 478
};

const ASSISTANT_MODE_STORAGE_KEY = 'western-intel.assistant-mode';
const CONTRACTOR_SELECTION_STORAGE_KEY = 'western-intel.contractor-selection';
const CONTRACTOR_FAVORITES_STORAGE_KEY = 'western-intel.contractor-favorites';
const ASSISTANT_MODES = {
    assistant: { label: 'AI Assistant' },
    hybrid: { label: 'Auto Hybrid' },
    wbs: { label: 'WBS Grounded' }
};

// ============================================================================
// INITIALIZATION
// ============================================================================

const initApp = () => {
    initializeEventListeners();
    loadAssistantModePreference();
    loadContractorFavorites();
    loadContractorCatalog();
    loadAboutAppInfo();
    initializeAuthState();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

function bindEnterToAction(inputElement, action) {
    if (!inputElement) return;
    inputElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            action();
        }
    });
}

function normalizeLmReconnectInput(value) {
    let normalized = String(value || '').trim();
    if (!normalized) return '';

    if (!/^https?:\/\//i.test(normalized)) {
        normalized = `http://${normalized}`;
    }

    try {
        const parsed = new URL(normalized);
        if (!parsed.port) {
            parsed.port = '1234';
        }
        return parsed.toString().replace(/\/+$/, '');
    } catch {
        return '';
    }
}

function showLmReconnectModal(status) {
    if (!lmReconnectModal || !lmReconnectUrl) return;
    if (lmReconnectPromptOpen) return;

    const suggestedUrl = String(status?.url || '').trim();
    if (suggestedUrl && !lmReconnectUrl.value.trim()) {
        lmReconnectUrl.value = suggestedUrl;
    }

    if (lmReconnectStatus) {
        const detail = status?.error ? ` (${status.error})` : '';
        lmReconnectStatus.textContent = `AI endpoint is unreachable${detail}`;
    }

    lmReconnectModal.classList.add('show');
    lmReconnectPromptOpen = true;
    setTimeout(() => {
        lmReconnectUrl.focus();
        lmReconnectUrl.select();
    }, 0);
}

function hideLmReconnectModal() {
    if (!lmReconnectModal) return;
    lmReconnectModal.classList.remove('show');
    lmReconnectPromptOpen = false;
}

async function saveLmReconnectTarget() {
    if (!window.electronAPI || !lmReconnectUrl) return;

    const normalized = normalizeLmReconnectInput(lmReconnectUrl.value);
    if (!normalized) {
        if (lmReconnectStatus) {
            lmReconnectStatus.textContent = 'Enter a valid IP or URL (example: 192.168.1.50 or http://192.168.1.50:1234).';
        }
        return;
    }

    if (lmReconnectStatus) {
        lmReconnectStatus.textContent = 'Saving endpoint and testing connection...';
    }

    try {
        const saved = await window.electronAPI.setLMStudioUrl(normalized);
        if (saved?.url) {
            lmReconnectUrl.value = saved.url;
            if (adminLmUrl) adminLmUrl.value = saved.url;
        }

        const status = await checkLMStudioConnection({ showReconnectPrompt: false });
        if (status?.connected) {
            if (lmReconnectStatus) {
                lmReconnectStatus.textContent = 'Connected successfully.';
            }
            hideLmReconnectModal();
            return;
        }

        if (lmReconnectStatus) {
            lmReconnectStatus.textContent = `Connection failed: ${status?.error || 'Unknown error'}`;
        }
    } catch (error) {
        if (lmReconnectStatus) {
            lmReconnectStatus.textContent = `Connection failed: ${error?.message || 'Unknown error'}`;
        }
    }
}

function setAdminLmStatusFromConnection(status) {
    adminLmStatus.textContent = status.connected
        ? 'Connected successfully.'
        : `Connection failed: ${status.error || 'Unknown error'}`;
}

function formatPlatformName(platform) {
    const normalized = String(platform || '').toLowerCase();
    if (normalized === 'win32') return 'Windows';
    if (normalized === 'darwin') return 'macOS';
    if (normalized === 'linux') return 'Linux';
    return platform || 'Unknown';
}

function refreshAboutSnapshot() {
    if (aboutAssistantMode) {
        aboutAssistantMode.textContent = ASSISTANT_MODES[assistantMode]?.label || 'Auto Hybrid';
    }

    if (aboutLmStatus) {
        aboutLmStatus.textContent = lastLmStatusSummary;
    }

    if (aboutAuth) {
        if (isAuthenticated) {
            const name = authenticatedUser?.name || authenticatedUser?.mail || 'Signed in user';
            aboutAuth.textContent = `${name} (${authenticatedRole})`;
        } else {
            aboutAuth.textContent = 'Not signed in';
        }
    }

    if (aboutLastRefresh) {
        aboutLastRefresh.textContent = new Date().toLocaleString();
    }
}

async function loadAboutAppInfo() {
    if (appInfoLoaded) return;

    try {
        if (!window.electronAPI || typeof window.electronAPI.getAppInfo !== 'function') return;
        const info = await window.electronAPI.getAppInfo();
        if (!info?.success) return;

        if (aboutVersion && info.version) {
            aboutVersion.textContent = info.version;
        }

        if (aboutPlatform && info.platform) {
            aboutPlatform.textContent = formatPlatformName(info.platform);
        }

        if (aboutRuntime) {
            const runtimeBits = [];
            if (info.electronVersion) runtimeBits.push(`Electron ${info.electronVersion}`);
            if (info.nodeVersion) runtimeBits.push(`Node ${info.nodeVersion}`);
            aboutRuntime.textContent = runtimeBits.length > 0 ? runtimeBits.join(' | ') : 'Electron';
        }

        appInfoLoaded = true;
    } catch (error) {
        console.warn('[Frontend] Unable to load app info for About modal:', error.message);
    }
}

function setErpLauncherStatus(text, isError = false) {
    if (!erpLauncherStatus) return;
    erpLauncherStatus.textContent = text;
    erpLauncherStatus.title = text;
    erpLauncherStatus.style.color = isError ? 'var(--steel-red-light)' : 'var(--accent-silver)';
}

function buildErpLaunchSummary(result, targetLabel) {
    const details = [];
    if (result?.mode) details.push(result.mode);
    if (result?.launchedPath) details.push(result.launchedPath);
    if (details.length === 0) {
        return `ERP ${targetLabel} started.`;
    }
    return `ERP ${targetLabel} started | ${details.join(' | ')}`;
}

async function handleErpLauncherAction() {
    if (!window.electronAPI) {
        setErpLauncherStatus('ERP launcher bridge unavailable.', true);
        return;
    }

    if (launchErpBtn) launchErpBtn.disabled = true;
    setErpLauncherStatus('Starting ERP client...');

    try {
        const result = await window.electronAPI.launchErpClient();

        if (result?.success) {
            setErpLauncherStatus(buildErpLaunchSummary(result, 'client'));
            return;
        }

        setErpLauncherStatus(result?.error || 'ERP launch failed.', true);
    } catch (error) {
        setErpLauncherStatus(error?.message || 'ERP launch failed.', true);
    } finally {
        if (launchErpBtn) launchErpBtn.disabled = !isAuthenticated;
    }
}

async function handleUpdateApp() {
    if (!window.electronAPI) {
        setErpLauncherStatus('Update bridge unavailable.', true);
        return;
    }
    if (updateAppBtn) updateAppBtn.disabled = true;
    if (launchErpBtn) launchErpBtn.disabled = true;
    setErpLauncherStatus('Checking for updates...');
    try {
        const result = await window.electronAPI.checkForAppUpdates();
        if (result?.success) {
            setErpLauncherStatus(result.message, false);
        } else {
            setErpLauncherStatus(result?.error || 'Update check failed.', true);
        }
    } catch (error) {
        setErpLauncherStatus(error?.message || 'Update check failed.', true);
    } finally {
        if (updateAppBtn) updateAppBtn.disabled = !isAuthenticated;
        if (launchErpBtn) launchErpBtn.disabled = !isAuthenticated;
    }
}

function bindModalLink(linkId, modalElement) {
    const trigger = document.getElementById(linkId);
    if (!trigger || !modalElement) return;
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modalElement.classList.add('show');
    });
}

function normalizeAssistantMode(mode) {
    const normalized = String(mode || '').trim().toLowerCase();
    return ASSISTANT_MODES[normalized] ? normalized : 'hybrid';
}

function renderAssistantMode(mode) {
    const normalized = normalizeAssistantMode(mode);
    assistantMode = normalized;

    if (assistantModeLabel) {
        assistantModeLabel.textContent = `Mode: ${ASSISTANT_MODES[normalized].label}`;
    }

    if (assistantModeSwitch) {
        assistantModeSwitch.querySelectorAll('.mode-node').forEach((node) => {
            const isActive = node.dataset.assistantMode === normalized;
            node.classList.toggle('active', isActive);
            node.setAttribute('aria-checked', isActive ? 'true' : 'false');
        });
    }

    refreshAboutSnapshot();
}

function loadAssistantModePreference() {
    let storedMode = 'hybrid';
    try {
        storedMode = localStorage.getItem(ASSISTANT_MODE_STORAGE_KEY) || 'hybrid';
    } catch {
        storedMode = 'hybrid';
    }
    renderAssistantMode(storedMode);
}

function setAssistantMode(mode) {
    const normalized = normalizeAssistantMode(mode);
    if (assistantMode === normalized) return;

    renderAssistantMode(normalized);
    conversationId = null;

    try {
        localStorage.setItem(ASSISTANT_MODE_STORAGE_KEY, normalized);
    } catch {
        // Ignore localStorage failures and continue.
    }
}

function getContractorById(contractorId) {
    return contractorCatalog.find((contractor) => contractor.id === contractorId) || null;
}

function loadContractorFavorites() {
    try {
        const raw = localStorage.getItem(CONTRACTOR_FAVORITES_STORAGE_KEY);
        const parsed = JSON.parse(raw || '[]');
        contractorFavorites = new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
        contractorFavorites = new Set();
    }
}

function saveContractorFavorites() {
    try {
        localStorage.setItem(CONTRACTOR_FAVORITES_STORAGE_KEY, JSON.stringify(Array.from(contractorFavorites)));
    } catch {
        // Ignore localStorage failures and continue.
    }
}

function renderContractorOptions() {
    if (!contractorSelect) return;

    const sorted = [...contractorCatalog].sort((a, b) => {
        const aFav = contractorFavorites.has(a.id) ? 1 : 0;
        const bFav = contractorFavorites.has(b.id) ? 1 : 0;
        if (aFav !== bFav) return bFav - aFav;
        return String(a.name || '').localeCompare(String(b.name || ''));
    });

    contractorSelect.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = `All Contractors (${contractorCatalog.length})`;
    contractorSelect.appendChild(defaultOption);

    sorted.forEach((contractor) => {
        const option = document.createElement('option');
        option.value = contractor.id;
        option.textContent = contractorFavorites.has(contractor.id)
            ? `★ ${contractor.name}`
            : contractor.name;
        contractorSelect.appendChild(option);
    });

    if (selectedContractorId && getContractorById(selectedContractorId)) {
        contractorSelect.value = selectedContractorId;
    }
}

function updateContractorUi() {
    const selectedContractor = getContractorById(selectedContractorId);

    if (contractorSelectionStatus) {
        contractorSelectionStatus.textContent = selectedContractor
            ? `${selectedContractor.name} selected. Contractor questions will prioritize this profile.`
            : 'No contractor selected. Contractor questions search the full contractor library.';
    }

    if (contractorWelcomeNote) {
        contractorWelcomeNote.textContent = selectedContractor
            ? `Contractor subsystem focused on ${selectedContractor.name}.`
            : 'Contractor subsystem ready. Select a contractor on the left to prioritize their preferences.';
    }

    if (queryInput) {
        queryInput.placeholder = selectedContractor
            ? `Ask about ${selectedContractor.name}, their preferences, or related workflows...`
            : 'Ask about Paradigm ERP, workflows, or Western procedures...';
    }

    if (queryHintText) {
        queryHintText.textContent = selectedContractor
            ? `💡 Examples: "What does ${selectedContractor.name} prefer for trim?", "What framing notes should I remember for ${selectedContractor.name}?"`
            : '💡 Examples: "How do I create a customer order?", "What is the job costing workflow?", "What does AB Buildings prefer for trim?"';
    }

    if (contractorFavoriteBtn) {
        const isFavorite = !!(selectedContractor && contractorFavorites.has(selectedContractor.id));
        contractorFavoriteBtn.textContent = selectedContractor
            ? (isFavorite ? '★ Favorited On This PC' : '☆ Favorite On This PC')
            : '☆ Favorite On This PC';
        contractorFavoriteBtn.disabled = !selectedContractor;
    }
}

function setContractorSelection(contractorId, options = {}) {
    const normalized = getContractorById(contractorId) ? contractorId : '';
    selectedContractorId = normalized;
    conversationId = null;

    if (contractorSelect && contractorSelect.value !== normalized) {
        contractorSelect.value = normalized;
    }

    if (options.persist !== false) {
        try {
            localStorage.setItem(CONTRACTOR_SELECTION_STORAGE_KEY, normalized);
        } catch {
            // Ignore localStorage failures and continue.
        }
    }

    updateContractorUi();
}

async function loadContractorCatalog() {
    if (!window.electronAPI || typeof window.electronAPI.getContractorCatalog !== 'function' || !contractorSelect) {
        updateContractorUi();
        return;
    }

    try {
        if (window.electronAPI && typeof window.electronAPI.syncContractorSheet === 'function') {
            const syncResult = await window.electronAPI.syncContractorSheet({});
            if (contractorSyncStatus) {
                contractorSyncStatus.textContent = syncResult?.success
                    ? `Synced ${Number(syncResult.count || 0)} contractor rows from sheet.`
                    : `Sheet sync unavailable: ${syncResult?.error || 'Unknown error'}`;
            }
        }

        const response = await window.electronAPI.getContractorCatalog();
        if (!response?.success) {
            updateContractorUi();
            return;
        }

        contractorCatalog = Array.isArray(response.contractors) ? response.contractors : [];
        renderContractorOptions();

        let storedSelection = '';
        try {
            storedSelection = localStorage.getItem(CONTRACTOR_SELECTION_STORAGE_KEY) || '';
        } catch {
            storedSelection = '';
        }

        setContractorSelection(storedSelection, { persist: false });
    } catch (error) {
        console.warn('[Frontend] Failed to load contractor catalog:', error.message);
        updateContractorUi();
    }
}

function initializeEventListeners() {
    initializeQuickLinkTabs();

    if (contractorSelect) {
        contractorSelect.addEventListener('change', (event) => {
            setContractorSelection(event.target.value);
        });
    }

    if (contractorFavoriteBtn) {
        contractorFavoriteBtn.addEventListener('click', () => {
            const selectedContractor = getContractorById(selectedContractorId);
            if (!selectedContractor) return;

            if (contractorFavorites.has(selectedContractor.id)) {
                contractorFavorites.delete(selectedContractor.id);
            } else {
                contractorFavorites.add(selectedContractor.id);
            }

            saveContractorFavorites();
            renderContractorOptions();
            updateContractorUi();
        });
    }

    if (contractorSyncBtn) {
        contractorSyncBtn.addEventListener('click', async () => {
            if (!window.electronAPI || typeof window.electronAPI.syncContractorSheet !== 'function') return;

            contractorSyncBtn.disabled = true;
            if (contractorSyncStatus) {
                contractorSyncStatus.textContent = 'Syncing contractor sheet...';
            }

            try {
                const syncResult = await window.electronAPI.syncContractorSheet({});
                if (contractorSyncStatus) {
                    contractorSyncStatus.textContent = syncResult?.success
                        ? `Synced ${Number(syncResult.count || 0)} contractor rows from sheet.`
                        : `Sheet sync failed: ${syncResult?.error || 'Unknown error'}`;
                }
                await loadContractorCatalog();
            } catch (error) {
                if (contractorSyncStatus) {
                    contractorSyncStatus.textContent = `Sheet sync failed: ${error.message || 'Unknown error'}`;
                }
            } finally {
                contractorSyncBtn.disabled = false;
            }
        });
    }

    if (assistantModeSwitch) {
        assistantModeSwitch.querySelectorAll('.mode-node').forEach((node) => {
            node.addEventListener('click', () => {
                setAssistantMode(node.dataset.assistantMode);
            });
        });
    }

    if (launchErpBtn) {
        launchErpBtn.addEventListener('click', () => {
            handleErpLauncherAction();
        });
    }

    if (updateAppBtn) {
        updateAppBtn.addEventListener('click', () => {
            handleUpdateApp();
        });
    }

    if (loginSubmit) {
        loginSubmit.addEventListener('click', () => {
            handleLogin();
        });
    }

    bindEnterToAction(loginIdentifier, handleLogin);
    bindEnterToAction(loginPassword, handleLogin);

    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            const result = await window.electronAPI.logoutAppUser();
            if (result?.authenticated) {
                applyAuthSession(result);
                return;
            }
            applyAuthSession(null);
        });
    }

    // Send button and input
    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        sendQuery();
    });
    queryInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !isLoading) {
            e.preventDefault();
            sendQuery();
        }
    });

    // Sidebar links
    document.querySelectorAll('[data-paradigm-topic]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const topic = e.currentTarget.dataset.paradigmTopic;
            const query = `Tell Me About ${topic}`;
            queryInput.value = query;
            sendQuery();
        });
    });

    document.querySelectorAll('[data-smartbuild-topic]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const topic = e.currentTarget.dataset.smartbuildTopic;
            queryInput.value = `Tell me about SmartBuild ${topic}`;
            sendQuery();
        });
    });

    // Common tasks
    document.querySelectorAll('.task-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            queryInput.value = e.target.textContent;
            sendQuery();
        });
    });

    // Modal triggers
    document.getElementById('kb-link').addEventListener('click', (e) => {
        e.preventDefault();
        kbModal.classList.add('show');
    });

    ingestLink.addEventListener('click', (e) => {
        e.preventDefault();
        ingestCategory.value = 'western';
        ingestStatus.textContent = '';
        ingestModal.classList.add('show');
        refreshIngestionEntries();
    });

    const aboutLink = document.getElementById('about-link');
    if (aboutLink && aboutModal) {
        aboutLink.addEventListener('click', async (e) => {
            e.preventDefault();
            await loadAboutAppInfo();
            refreshAboutSnapshot();
            aboutModal.classList.add('show');
        });
    }

    document.getElementById('admin-link').addEventListener('click', async (e) => {
        e.preventDefault();

        if (!isAuthenticated || authenticatedRole !== 'admin') {
            alert('Admin Console requires an admin login.');
            return;
        }

        adminModal.classList.add('show');

        try {
            const lm = await window.electronAPI.getLMStudioUrl();
            adminLmUrl.value = lm.url || '';
        } catch (error) {
            adminLmUrl.value = '';
        }

        try {
            const chat = await window.electronAPI.getChatServerUrl();
            adminChatUrl.value = chat.url || '';
        } catch (error) {
            adminChatUrl.value = '';
        }

        try {
            const chatEnabled = await window.electronAPI.getChatServerEnabled();
            adminChatEnabled.checked = !!chatEnabled.enabled;
        } catch (error) {
            adminChatEnabled.checked = false;
        }

        try {
            const erpPaths = await window.electronAPI.getParadigmLauncherPaths();
            if (adminErpClientPath) adminErpClientPath.value = erpPaths?.clientPath || '';
            if (adminErpUpdaterPath) adminErpUpdaterPath.value = erpPaths?.updaterPath || '';
        } catch (error) {
            if (adminErpClientPath) adminErpClientPath.value = '';
            if (adminErpUpdaterPath) adminErpUpdaterPath.value = '';
        }

        try {
            const autoLaunch = await window.electronAPI.getAutoLaunch();
            adminAutoLaunch.checked = !!autoLaunch.enabled;
        } catch (error) {
            adminAutoLaunch.checked = false;
        }

        try {
            const ldapResponse = await window.electronAPI.getGoogleLdapConfig();
            if (ldapResponse?.success && ldapResponse.config) {
                populateLdapConfigForm(ldapResponse.config);
            }
        } catch (error) {
            adminLdapStatus.textContent = `Unable to load LDAP config: ${error.message || 'Unknown error'}`;
        }

        adminLmStatus.textContent = '';
        adminChatStatus.textContent = '';
        if (adminErpStatus) adminErpStatus.textContent = '';
        adminLdapStatus.textContent = '';
    });

    bindModalLink('contact-link', contactModal);
    bindModalLink('coming-soon-link', comingSoonModal);

    // Modal close buttons
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.remove('show');
        });
    });

    // Open knowledge base
    document.getElementById('open-kb-btn').addEventListener('click', () => {
        window.electronAPI.openKnowledgeBase();
    });

    if (window.electronAPI && typeof window.electronAPI.onKnowledgeBaseOpen === 'function') {
        window.electronAPI.onKnowledgeBaseOpen(() => {
            kbModal.classList.add('show');
        });
    }

    // Ingest: select file
    ingestFileBtn.addEventListener('click', async () => {
        ingestStatus.textContent = '';
        const result = await window.electronAPI.selectIngestFile();
        if (result && !result.canceled && result.filePath) {
            ingestFilePath = result.filePath;
            ingestFileName.textContent = result.filePath.split(/[\\/]/).pop();
            ingestUrlInput.value = '';
        }
    });

    // Ingest: bulk import SmartBuild folder
    ingestSmartBuildFolderBtn.addEventListener('click', async () => {
        ingestStatus.textContent = '';

        const selection = await window.electronAPI.selectSmartBuildFolder();
        if (!selection || selection.canceled || !selection.folderPath) {
            return;
        }

        smartBuildFolderPath = selection.folderPath;
        ingestSmartBuildFolderLabel.textContent = selection.folderPath;
        ingestCategory.value = 'smartbuild';

        const confirmed = confirm(
            `Import all supported files from this SmartBuild folder into RAG?\n\n${selection.folderPath}`
        );
        if (!confirmed) {
            ingestStatus.textContent = 'SmartBuild folder selected. Import canceled.';
            return;
        }

        ingestStatus.textContent = 'Importing SmartBuild folder...';
        const result = await window.electronAPI.importSmartBuildFolder({
            folderPath: selection.folderPath
        });

        if (result?.success) {
            const pushedText = result.git?.pushed ? 'committed and pushed' : (result.git?.committed ? 'committed (push failed)' : 'saved (no git commit)');
            ingestStatus.textContent = `SmartBuild import complete: ${result.addedCount} added, ${result.skippedCount} skipped, ${pushedText}.`;
            await refreshIngestionEntries();
            await loadIndexedDataStats();
        } else {
            ingestStatus.textContent = result?.error || 'SmartBuild import failed.';
        }
    });

    // Ingest: preview
    ingestPreviewBtn.addEventListener('click', async () => {
        ingestStatus.textContent = 'Extracting content...';
        ingestPreview.value = '';
        ingestDraft = null;
        ingestApproveCheck.checked = false;
        ingestApproveBtn.disabled = true;

        const url = ingestUrlInput.value.trim();
        const category = ingestCategory.value;
        const title = ingestTitle.value.trim();
        const sourceType = url ? 'url' : 'file';
        if (!url && !ingestFilePath) {
            ingestStatus.textContent = 'Select a file or enter a link first.';
            return;
        }
        const payload = {
            sourceType: sourceType,
            category: category,
            title: title
        };

        if (sourceType === 'url') {
            payload.url = url;
        } else {
            payload.filePath = ingestFilePath;
        }

        const response = await window.electronAPI.ingestSource(payload);
        if (!response || !response.success) {
            ingestStatus.textContent = response?.error || 'Failed to extract content.';
            return;
        }

        ingestDraft = response;
        ingestTitle.value = response.title || ingestTitle.value;
        ingestPreview.value = response.preview || '';
        ingestStatus.textContent = 'Preview ready. Review and approve to add.';
    });

    // Ingest: approve checkbox
    ingestApproveCheck.addEventListener('change', () => {
        ingestApproveBtn.disabled = !ingestApproveCheck.checked || !ingestDraft;
    });

    // Ingest: approve
    ingestApproveBtn.addEventListener('click', async () => {
        if (!ingestDraft || !ingestApproveCheck.checked) return;
        ingestStatus.textContent = 'Saving to knowledge base...';
        const result = await window.electronAPI.approveIngestion({
            category: ingestCategory.value,
            title: ingestTitle.value.trim() || ingestDraft.title,
            sourceLabel: ingestDraft.sourceLabel,
            content: ingestPreview.value.trim() || ingestDraft.content
        });
        if (result && result.success) {
            const pushedText = result.git?.pushed ? 'committed and pushed' : (result.git?.committed ? 'committed (push failed)' : 'saved (no git commit)');
            ingestStatus.textContent = `Added to knowledge base, indexed, and ${pushedText}.`;
            refreshIngestionEntries();
            resetIngestForm();
        } else {
            ingestStatus.textContent = result?.error || 'Failed to save content.';
        }
    });

    // Ingest: reset
    ingestResetBtn.addEventListener('click', () => {
        resetIngestForm();
    });

    ingestRefreshBtn.addEventListener('click', async () => {
        await refreshIngestionEntries();
    });

    ingestLoadBtn.addEventListener('click', () => {
        const selectedId = ingestExistingSelect.value;
        const selected = ingestEntries.find((entry) => entry.id === selectedId);
        if (!selected) {
            ingestStatus.textContent = 'Select an entry to load.';
            return;
        }

        editingIngestId = selected.id;
        ingestCategory.value = selected.categoryId || 'western';
        ingestTitle.value = selected.title || '';
        ingestPreview.value = selected.content || '';
        ingestDraft = {
            content: selected.content || '',
            sourceLabel: selected.sourceLabel || 'User submission',
            title: selected.title || ''
        };
        ingestApproveCheck.checked = false;
        ingestApproveBtn.disabled = true;
        ingestSaveEditBtn.disabled = false;
        ingestStatus.textContent = `Loaded entry ${selected.id} for editing.`;
    });

    ingestSaveEditBtn.addEventListener('click', async () => {
        if (!editingIngestId) {
            ingestStatus.textContent = 'Load an entry before saving edits.';
            return;
        }

        ingestStatus.textContent = 'Saving edit...';
        const result = await window.electronAPI.editIngestion({
            id: editingIngestId,
            category: ingestCategory.value,
            title: ingestTitle.value.trim(),
            sourceLabel: ingestDraft?.sourceLabel || 'User submission',
            content: ingestPreview.value.trim()
        });

        if (result?.success) {
            const pushedText = result.git?.pushed ? 'committed and pushed' : (result.git?.committed ? 'committed (push failed)' : 'saved (no git commit)');
            ingestStatus.textContent = `Entry updated, indexed, and ${pushedText}.`;
            await refreshIngestionEntries();
            resetIngestForm();
        } else {
            ingestStatus.textContent = result?.error || 'Failed to save edit.';
        }
    });

    ingestDeleteBtn.addEventListener('click', async () => {
        const selectedId = ingestExistingSelect.value;
        if (!selectedId) {
            ingestStatus.textContent = 'Select an entry to delete.';
            return;
        }

        const confirmDelete = confirm(`Delete entry ${selectedId}? This cannot be undone except by git history.`);
        if (!confirmDelete) return;

        ingestStatus.textContent = 'Deleting entry...';
        const result = await window.electronAPI.deleteIngestion({ id: selectedId });
        if (result?.success) {
            const pushedText = result.git?.pushed ? 'committed and pushed' : (result.git?.committed ? 'committed (push failed)' : 'saved (no git commit)');
            ingestStatus.textContent = `Entry deleted, index rebuilt, and ${pushedText}.`;
            await refreshIngestionEntries();
            resetIngestForm();
        } else {
            ingestStatus.textContent = result?.error || 'Failed to delete entry.';
        }
    });

    ingestUndoBtn.addEventListener('click', async () => {
        const confirmUndo = confirm('Undo the most recent ingested entry?');
        if (!confirmUndo) return;

        ingestStatus.textContent = 'Undoing last ingest...';
        const result = await window.electronAPI.undoLastIngestion();
        if (result?.success) {
            const pushedText = result.git?.pushed ? 'committed and pushed' : (result.git?.committed ? 'committed (push failed)' : 'saved (no git commit)');
            ingestStatus.textContent = `Removed ${result.removed?.id || 'last entry'}, rebuilt index, and ${pushedText}.`;
            await refreshIngestionEntries();
            resetIngestForm();
        } else {
            ingestStatus.textContent = result?.error || 'Failed to undo last ingest.';
        }
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });


    // Admin LM Save
    adminLmSave.addEventListener('click', async () => {
        const url = adminLmUrl.value.trim();
        if (!url) {
            adminLmStatus.textContent = 'Please enter a valid URL.';
            return;
        }
        const result = await window.electronAPI.setLMStudioUrl(url);
        adminLmUrl.value = result.url || url;
        adminLmStatus.textContent = 'Saved. Rechecking connection...';
        const status = await checkLMStudioConnection();
        setAdminLmStatusFromConnection(status);
    });

    // Admin LM Test
    adminLmTest.addEventListener('click', async () => {
        adminLmStatus.textContent = 'Testing connection...';
        const status = await checkLMStudioConnection();
        setAdminLmStatusFromConnection(status);
    });

    if (lmReconnectSave) {
        lmReconnectSave.addEventListener('click', async () => {
            await saveLmReconnectTarget();
        });
    }

    if (lmReconnectSkip) {
        lmReconnectSkip.addEventListener('click', () => {
            if (lmReconnectStatus) {
                lmReconnectStatus.textContent = 'Running in offline mode. Reopen Admin Console to change endpoint later.';
            }
            hideLmReconnectModal();
        });
    }

    bindEnterToAction(lmReconnectUrl, saveLmReconnectTarget);

    // Admin Chat Save
    adminChatSave.addEventListener('click', async () => {
        const url = adminChatUrl.value.trim();
        if (!url) {
            adminChatStatus.textContent = 'Please enter a valid URL.';
            return;
        }
        const result = await window.electronAPI.setChatServerUrl(url);
        adminChatUrl.value = result.url || url;
        adminChatStatus.textContent = 'Saved. Reopen chat to connect.';
    });

    // Admin Chat Setup
    adminChatSetup.addEventListener('click', async () => {
        const result = await window.electronAPI.getLocalIp();
        const serverUrl = `http://${result.ip}:3000`;
        await window.electronAPI.setChatServerUrl(serverUrl);
        await window.electronAPI.setChatServerEnabled(true);
        adminChatUrl.value = serverUrl;
        adminChatEnabled.checked = true;
        adminChatStatus.textContent = `This PC is the server. Use ${serverUrl} on other computers.`;
    });

    // Admin Chat Enabled Toggle
    adminChatEnabled.addEventListener('change', async () => {
        const enabled = adminChatEnabled.checked;
        const result = await window.electronAPI.setChatServerEnabled(enabled);
        adminChatStatus.textContent = result.enabled
            ? 'Chat server enabled on this PC.'
            : 'Chat server disabled on this PC.';
    });

    if (adminErpClientBrowse) {
        adminErpClientBrowse.addEventListener('click', async () => {
            const result = await window.electronAPI.selectParadigmExecutable({ target: 'client' });
            if (result && !result.canceled && result.filePath && adminErpClientPath) {
                adminErpClientPath.value = result.filePath;
            }
        });
    }

    if (adminErpUpdaterBrowse) {
        adminErpUpdaterBrowse.addEventListener('click', async () => {
            const result = await window.electronAPI.selectParadigmExecutable({ target: 'updater' });
            if (result && !result.canceled && result.filePath && adminErpUpdaterPath) {
                adminErpUpdaterPath.value = result.filePath;
            }
        });
    }

    if (adminErpSave) {
        adminErpSave.addEventListener('click', async () => {
            if (adminErpStatus) {
                adminErpStatus.textContent = 'Saving ERP launcher paths...';
            }

            const payload = {
                clientPath: (adminErpClientPath?.value || '').trim(),
                updaterPath: (adminErpUpdaterPath?.value || '').trim()
            };

            const result = await window.electronAPI.setParadigmLauncherPaths(payload);
            if (!adminErpStatus) return;

            if (!result?.success) {
                adminErpStatus.textContent = result?.error || 'Failed to save ERP paths.';
                return;
            }

            if (adminErpClientPath) adminErpClientPath.value = result.clientPath || '';
            if (adminErpUpdaterPath) adminErpUpdaterPath.value = result.updaterPath || '';
            adminErpStatus.textContent = 'ERP launcher paths saved.';
        });
    }

    // Admin Auto Launch Toggle
    adminAutoLaunch.addEventListener('change', async () => {
        const enabled = adminAutoLaunch.checked;
        await window.electronAPI.setAutoLaunch(enabled);
    });

    // Admin Clear Chat History
    adminClearChat.addEventListener('click', async () => {
        const confirmClear = confirm('Clear chat history for all users?');
        if (!confirmClear) return;
        await window.electronAPI.clearChatHistory();
        adminChatStatus.textContent = 'Chat history cleared.';
    });

    if (adminOpenDevTools) {
        adminOpenDevTools.addEventListener('click', async () => {
            if (adminToolsStatus) {
                adminToolsStatus.textContent = 'Opening developer tools...';
            }

            const result = await window.electronAPI.openDevTools();

            if (adminToolsStatus) {
                adminToolsStatus.textContent = result?.success
                    ? 'Developer tools opened.'
                    : `Failed to open developer tools: ${result?.error || 'Unknown error'}`;
            }
        });
    }

    if (adminVpnDiagnostics) {
        adminVpnDiagnostics.addEventListener('click', async () => {
            if (adminToolsStatus) {
                adminToolsStatus.textContent = 'Running VPN diagnostics...';
            }

            const result = await window.electronAPI.runNetworkDiagnostics();
            if (!adminToolsStatus) return;

            if (!result?.success) {
                adminToolsStatus.textContent = `Diagnostics failed: ${result?.error || 'Unknown error'}`;
                return;
            }

            const lmSummary = result.lmStudio?.http?.ok
                ? `LM OK (${result.lmStudio?.baseUrl})`
                : `LM FAIL (${result.lmStudio?.baseUrl})`;
            const chatSummary = result.chatServer?.http?.ok
                ? `Chat OK (${result.chatServer?.baseUrl})`
                : `Chat FAIL (${result.chatServer?.baseUrl})`;
            const hint = result.recommendation ? ` | ${result.recommendation}` : '';

            adminToolsStatus.textContent = `${lmSummary} | ${chatSummary}${hint}`;
            adminToolsStatus.title = JSON.stringify(result, null, 2);
        });
    }

    if (adminLdapSave) {
        adminLdapSave.addEventListener('click', async () => {
            const payload = buildLdapConfigPayload();
            adminLdapStatus.textContent = 'Saving LDAP settings...';

            const result = await window.electronAPI.setGoogleLdapConfig(payload);
            if (result?.success) {
                populateLdapConfigForm(result.config || payload);
                adminLdapBindPassword.value = '';
                if (adminLdapClientKeyPassphrase) {
                    adminLdapClientKeyPassphrase.value = '';
                }
                adminLdapStatus.textContent = 'Google LDAP settings saved.';
            } else {
                adminLdapStatus.textContent = result?.error || 'Failed to save LDAP settings.';
            }
        });
    }

    if (adminLdapBrowseCaCert) {
        adminLdapBrowseCaCert.addEventListener('click', async () => {
            const result = await window.electronAPI.selectLdapCaCertFile();
            if (result && !result.canceled && result.filePath && adminLdapCaCertPath) {
                adminLdapCaCertPath.value = result.filePath;
            }
        });
    }

    if (adminLdapBrowseClientCert) {
        adminLdapBrowseClientCert.addEventListener('click', async () => {
            const result = await window.electronAPI.selectLdapClientCertFile();
            if (result && !result.canceled && result.filePath && adminLdapClientCertPath) {
                adminLdapClientCertPath.value = result.filePath;
            }
        });
    }

    if (adminLdapBrowseClientKey) {
        adminLdapBrowseClientKey.addEventListener('click', async () => {
            const result = await window.electronAPI.selectLdapClientKeyFile();
            if (result && !result.canceled && result.filePath && adminLdapClientKeyPath) {
                adminLdapClientKeyPath.value = result.filePath;
            }
        });
    }

    if (adminLdapEnabled) {
        adminLdapEnabled.addEventListener('change', () => {
            updateLdapModeBadge();
        });
    }

    if (adminLdapSecureMode) {
        adminLdapSecureMode.addEventListener('change', () => {
            updateLdapModeBadge();
        });
    }

    if (adminLdapTest) {
        adminLdapTest.addEventListener('click', async () => {
            adminLdapStatus.textContent = 'Testing Google LDAP connection...';
            const result = await window.electronAPI.testGoogleLdap();
            adminLdapStatus.textContent = result?.success
                ? 'Google LDAP connection successful.'
                : (result?.error || 'Google LDAP connection failed.');
        });
    }

    if (adminLdapSearchBtn) {
        adminLdapSearchBtn.addEventListener('click', async () => {
            const query = (adminLdapSearch?.value || '').trim();
            if (!query) {
                adminLdapStatus.textContent = 'Enter a search term first.';
                return;
            }

            adminLdapStatus.textContent = `Searching LDAP for "${query}"...`;
            const result = await window.electronAPI.searchGoogleLdapDirectory({ query, limit: 25 });

            if (!result?.success) {
                adminLdapStatus.textContent = result?.error || 'LDAP search failed.';
                return;
            }

            adminLdapStatus.textContent = `Found ${result.totals?.users || 0} users and ${result.totals?.groups || 0} groups.`;
            if (adminLdapResults) {
                adminLdapResults.value = JSON.stringify({
                    query,
                    users: result.users,
                    groups: result.groups
                }, null, 2);
            }
        });
    }

    if (adminLdapSyncBtn) {
        adminLdapSyncBtn.addEventListener('click', async () => {
            adminLdapStatus.textContent = 'Syncing LDAP snapshot...';
            const result = await window.electronAPI.syncGoogleLdapDirectory({});

            if (!result?.success) {
                adminLdapStatus.textContent = result?.error || 'LDAP sync failed.';
                return;
            }

            adminLdapStatus.textContent = `LDAP sync complete (${result.totals?.users || 0} users, ${result.totals?.groups || 0} groups).`;
            if (adminLdapResults) {
                adminLdapResults.value = JSON.stringify({
                    syncedAt: result.syncedAt,
                    outputPath: result.outputPath,
                    totals: result.totals
                }, null, 2);
            }
        });
    }

    if (adminLdapAuthBtn) {
        adminLdapAuthBtn.addEventListener('click', async () => {
            const identifier = (adminLdapAuthUser?.value || '').trim();
            const password = adminLdapAuthPassword?.value || '';
            if (!identifier || !password) {
                adminLdapStatus.textContent = 'Enter user identifier and password.';
                return;
            }

            adminLdapStatus.textContent = 'Validating LDAP user credentials...';
            const result = await window.electronAPI.authenticateGoogleLdapUser({
                identifier,
                password,
                requiredGroupEmail: (adminLdapRequiredGroup?.value || '').trim()
            });

            adminLdapAuthPassword.value = '';
            if (!result?.success) {
                adminLdapStatus.textContent = result?.error || 'LDAP user authentication failed.';
                return;
            }

            adminLdapStatus.textContent = `Authenticated: ${result?.user?.mail || identifier}`;
            if (adminLdapResults) {
                adminLdapResults.value = JSON.stringify({ user: result.user }, null, 2);
            }
        });
    }

}

function populateLdapConfigForm(config) {
    if (!config) return;
    if (adminLdapEnabled) adminLdapEnabled.checked = !!config.enabled;
    if (adminLdapSecureMode) adminLdapSecureMode.checked = config.rejectUnauthorized !== false;
    if (adminLdapUrl) adminLdapUrl.value = config.url || '';
    if (adminLdapBaseDn) adminLdapBaseDn.value = config.baseDn || '';
    if (adminLdapBindDn) adminLdapBindDn.value = config.bindDn || '';
    if (adminLdapUserBaseDn) adminLdapUserBaseDn.value = config.userBaseDn || '';
    if (adminLdapGroupBaseDn) adminLdapGroupBaseDn.value = config.groupBaseDn || '';
    if (adminLdapRequiredGroup) adminLdapRequiredGroup.value = config.requiredGroupEmail || '';
    if (adminLdapCaCertPath) adminLdapCaCertPath.value = config.caCertPath || '';
    if (adminLdapClientCertPath) adminLdapClientCertPath.value = config.clientCertPath || '';
    if (adminLdapClientKeyPath) adminLdapClientKeyPath.value = config.clientKeyPath || '';
    updateLdapModeBadge();
}

function updateLdapModeBadge() {
    if (!adminLdapModeBadge) return;

    const enabled = !!adminLdapEnabled?.checked;
    const secureMode = !!adminLdapSecureMode?.checked;

    adminLdapModeBadge.classList.remove('mode-badge-secure', 'mode-badge-open', 'mode-badge-disabled');

    if (!enabled) {
        adminLdapModeBadge.textContent = 'Disabled';
        adminLdapModeBadge.classList.add('mode-badge-disabled');
        return;
    }

    if (secureMode) {
        adminLdapModeBadge.textContent = 'Secure';
        adminLdapModeBadge.classList.add('mode-badge-secure');
        return;
    }

    adminLdapModeBadge.textContent = 'Open';
    adminLdapModeBadge.classList.add('mode-badge-open');
}

function buildLdapConfigPayload() {
    const payload = {
        enabled: !!adminLdapEnabled?.checked,
        rejectUnauthorized: adminLdapSecureMode ? !!adminLdapSecureMode.checked : true,
        url: (adminLdapUrl?.value || '').trim(),
        baseDn: (adminLdapBaseDn?.value || '').trim(),
        bindDn: (adminLdapBindDn?.value || '').trim(),
        userBaseDn: (adminLdapUserBaseDn?.value || '').trim(),
        groupBaseDn: (adminLdapGroupBaseDn?.value || '').trim(),
        requiredGroupEmail: (adminLdapRequiredGroup?.value || '').trim(),
        caCertPath: (adminLdapCaCertPath?.value || '').trim(),
        clientCertPath: (adminLdapClientCertPath?.value || '').trim(),
        clientKeyPath: (adminLdapClientKeyPath?.value || '').trim()
    };

    const bindPassword = adminLdapBindPassword?.value || '';
    if (bindPassword) {
        payload.bindPassword = bindPassword;
    }

    const clientKeyPassphrase = adminLdapClientKeyPassphrase?.value || '';
    if (clientKeyPassphrase) {
        payload.clientKeyPassphrase = clientKeyPassphrase;
    }

    return payload;
}

function initializeQuickLinkTabs() {
    if (!quickTabParadigm || !quickTabSmartBuild || !quickLinksParadigm || !quickLinksSmartBuild) {
        return;
    }

    const setActiveTab = (tabName) => {
        const paradigmActive = tabName === 'paradigm';
        const smartbuildActive = tabName === 'smartbuild';

        quickTabParadigm.classList.toggle('active', paradigmActive);
        quickTabSmartBuild.classList.toggle('active', smartbuildActive);

        quickTabParadigm.setAttribute('aria-selected', paradigmActive ? 'true' : 'false');
        quickTabSmartBuild.setAttribute('aria-selected', smartbuildActive ? 'true' : 'false');

        quickLinksParadigm.classList.toggle('quick-links-hidden', !paradigmActive);
        quickLinksSmartBuild.classList.toggle('quick-links-hidden', !smartbuildActive);

        quickLinksParadigm.setAttribute('aria-hidden', paradigmActive ? 'false' : 'true');
        quickLinksSmartBuild.setAttribute('aria-hidden', smartbuildActive ? 'false' : 'true');
    };

    quickTabParadigm.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveTab('paradigm');
    });

    quickTabSmartBuild.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveTab('smartbuild');
    });

    setActiveTab('paradigm');
}

function resetIngestForm() {
    ingestDraft = null;
    ingestFilePath = null;
    smartBuildFolderPath = null;
    editingIngestId = null;
    ingestFileName.textContent = 'No file selected';
    ingestSmartBuildFolderLabel.textContent = 'No SmartBuild folder selected';
    ingestUrlInput.value = '';
    ingestTitle.value = '';
    ingestPreview.value = '';
    ingestStatus.textContent = '';
    ingestApproveCheck.checked = false;
    ingestApproveBtn.disabled = true;
    ingestSaveEditBtn.disabled = true;
}

async function refreshIngestionEntries() {
    const response = await window.electronAPI.listIngestions();
    if (!response?.success) {
        ingestStatus.textContent = response?.error || 'Failed to load ingest history.';
        return;
    }

    ingestEntries = response.entries || [];
    ingestExistingSelect.innerHTML = '';

    if (ingestEntries.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'No entries yet';
        ingestExistingSelect.appendChild(option);
        return;
    }

    ingestEntries.forEach((entry) => {
        const option = document.createElement('option');
        option.value = entry.id;
        const shortDate = entry.addedAt ? new Date(entry.addedAt).toLocaleString() : '';
        option.textContent = `${entry.id} | ${entry.title || 'Untitled'} | ${shortDate}`;
        ingestExistingSelect.appendChild(option);
    });
}

// ============================================================================
// LM STUDIO CONNECTION CHECK
// ============================================================================

async function checkLMStudioConnection(options = {}) {
    const showReconnectPrompt = options.showReconnectPrompt !== false;
    let result;
    try {
        result = await window.electronAPI.checkLMStudio();
        if (result.connected) {
            lmStatus.classList.remove('disconnected');
            lmStatus.classList.add('connected');
            lmText.textContent = `Connected (${result.models.length} models)`;
            lastLmStatusSummary = lmText.textContent;
            hideLmReconnectModal();
        } else {
            lmStatus.classList.remove('connected');
            lmStatus.classList.add('disconnected');
            const errorText = result.error ? ` (${result.error})` : '';
            lmText.textContent = `LM Studio Not Connected${errorText}`;
            lastLmStatusSummary = lmText.textContent;
            if (isAuthenticated && showReconnectPrompt) {
                showLmReconnectModal(result);
            }
        }
    } catch (error) {
        lmStatus.classList.add('disconnected');
        const errorText = error && error.message ? ` (${error.message})` : '';
        lmText.textContent = `Connection Error${errorText}`;
        result = { connected: false, error: error.message || 'Connection Error' };
        lastLmStatusSummary = lmText.textContent;
        if (isAuthenticated && showReconnectPrompt) {
            showLmReconnectModal(result);
        }
    }

    refreshAboutSnapshot();

    // Check again every 30 seconds without stacking timers.
    if (lmConnectionCheckTimer) {
        clearTimeout(lmConnectionCheckTimer);
    }
    lmConnectionCheckTimer = setTimeout(() => {
        checkLMStudioConnection();
    }, 30000);
    return result;
}

async function loadIndexedDataStats() {
    let stats = lastKnownIndexedStats;

    try {
        if (window.electronAPI && typeof window.electronAPI.getIndexedDataStats === 'function') {
            const response = await window.electronAPI.getIndexedDataStats();
            if (response?.success) {
                const paradigmArticles = Number(response.paradigmArticles || 478);
                const supportArticles = Number(response.smartBuild?.supportArticles || 0);
                const youtubeVideos = Number(response.smartBuild?.youtubeVideos || 0);
                const smartBuildTotal = Number(response.smartBuild?.total || (supportArticles + youtubeVideos));
                const manualFormsTotal = Number(response.manualForms?.total || response.manualForms?.forms || 0);
                const contractorCount = Number(response.manualForms?.contractors || 0);
                const totalIndexed = Number(response.totalIndexed || (paradigmArticles + smartBuildTotal + manualFormsTotal));

                stats = {
                    paradigmArticles,
                    smartBuild: {
                        supportArticles,
                        youtubeVideos,
                        total: smartBuildTotal
                    },
                    manualForms: {
                        contractors: contractorCount,
                        forms: manualFormsTotal,
                        total: manualFormsTotal
                    },
                    totalIndexed
                };

                lastKnownIndexedStats = stats;
            }
        }
    } catch (error) {
        console.warn('[Frontend] Failed to load indexed data stats:', error.message);
    }

    if (welcomeIndexedSummary) {
        const manualCount = Number(stats.manualForms?.total || 0);
        const contractorCount = Number(stats.manualForms?.contractors || 0);
        welcomeIndexedSummary.textContent = `${stats.paradigmArticles} Paradigm articles + ${stats.smartBuild.total} SmartBuild items + ${manualCount} Manual Forms indexed (${contractorCount} contractor profiles)`;
    }

    if (kbParadigmCount) kbParadigmCount.textContent = String(stats.paradigmArticles);
    if (kbSmartBuildSupportCount) kbSmartBuildSupportCount.textContent = String(stats.smartBuild.supportArticles);
    if (kbSmartBuildVideosCount) kbSmartBuildVideosCount.textContent = String(stats.smartBuild.youtubeVideos);
    if (kbSmartBuildTotalCount) kbSmartBuildTotalCount.textContent = String(stats.smartBuild.total);
    if (kbManualFormsTotalCount) kbManualFormsTotalCount.textContent = String(stats.manualForms?.total || 0);
    if (kbTotalIndexedCount) kbTotalIndexedCount.textContent = String(stats.totalIndexed);

    if (aboutParadigmCount) aboutParadigmCount.textContent = String(stats.paradigmArticles);
    if (aboutSmartBuildTotalCount) aboutSmartBuildTotalCount.textContent = String(stats.smartBuild.total);
    if (aboutManualFormsTotalCount) aboutManualFormsTotalCount.textContent = String(stats.manualForms?.total || 0);

    refreshAboutSnapshot();
}

// ============================================================================
// SEND QUERY & RAG
// ============================================================================

async function sendQuery() {
    if (!isAuthenticated) {
        if (loginStatus) {
            loginStatus.textContent = 'Sign in before sending queries.';
        }
        return;
    }

    const query = queryInput.value.trim();

    if (!query || isLoading) return;

    if (!window.electronAPI || typeof window.electronAPI.ragQuery !== 'function') {
        console.error('[Frontend] electronAPI not available');
        addMessage('App bridge not available. Please restart the app.', 'assistant');
        return;
    }

    // Hide welcome message on first query
    if (welcomeMessage.style.display !== 'none') {
        welcomeMessage.style.display = 'none';
        messagesContainer.classList.add('active');
    }

    // Add user message
    addMessage(query, 'user');
    queryInput.value = '';
    queryInput.focus();

    // Show loading indicator
    isLoading = true;
    sendBtn.disabled = true;
    const loadingId = addLoadingIndicator();
    const requestContractorId = selectedContractorId;
    const requestContractor = getContractorById(requestContractorId);

    try {
        // Call RAG system
        const response = await window.electronAPI.ragQuery({
            query,
            mode: assistantMode,
            conversationId,
            contractorId: requestContractorId
        });

        if (response && response.conversationId) {
            conversationId = response.conversationId;
        }

        // Remove loading indicator
        document.getElementById(loadingId).remove();

        if (response.success) {
            // Add assistant response with sources and resources
            addMessage(response.answer, 'assistant', response.sources, response.resources, {
                contractorName: requestContractor?.name || ''
            });
        } else {
            // Add error message
            const errorMsg = response.suggestion 
                ? `${response.error}\n\n💡 ${response.suggestion}`
                : response.error;
            addMessage(errorMsg, 'assistant');
        }
    } catch (error) {
        document.getElementById(loadingId).remove();
        addMessage(
            `Error: ${error.message || 'Failed to get response'}\n\nCheck LM Studio URL and network connectivity in Admin Settings.`,
            'assistant'
        );
    } finally {
        isLoading = false;
        sendBtn.disabled = false;
        queryInput.focus();
    }
}

async function initializeAuthState() {
    try {
        const session = await window.electronAPI.getAppAuthSession();
        if (session?.authenticated) {
            applyAuthSession(session);
            return;
        }
    } catch (error) {
        console.warn('[Frontend] Failed to read auth session:', error.message);
    }

    applyAuthSession(null);
}

function applyAuthSession(session) {
    isAuthenticated = !!session?.authenticated;
    authenticatedUser = session?.user || null;
    authenticatedRole = session?.role || 'user';

    if (isAuthenticated) {
        conversationId = null;
        if (launchErpBtn) launchErpBtn.disabled = false;
        if (updateAppBtn) updateAppBtn.disabled = false;
        setErpLauncherStatus('ERP launcher ready');
        if (loginOverlay) loginOverlay.classList.add('hidden');
        if (authUserLabel) {
            const name = authenticatedUser?.name || authenticatedUser?.mail || 'Signed in user';
            authUserLabel.textContent = `${name} (${authenticatedRole})`;
        }
        if (logoutBtn) {
            logoutBtn.style.display = session?.source === 'open-access' ? 'none' : 'inline-block';
        }
        if (teamChatBubble) teamChatBubble.style.display = 'flex';
        if (teamChatWindow) teamChatWindow.style.display = 'none';

        if (!teamChatInitialized) {
            initializeTeamChat();
            teamChatInitialized = true;
        }
        loadIndexedDataStats();
        if (!lmMonitorStarted) {
            lmMonitorStarted = true;
            checkLMStudioConnection();
        }
        if (loginStatus) loginStatus.textContent = '';
        if (loginPassword) loginPassword.value = '';
    } else {
        conversationId = null;
        if (launchErpBtn) launchErpBtn.disabled = true;
        if (updateAppBtn) updateAppBtn.disabled = true;
        setErpLauncherStatus('Sign in to launch ERP', true);
        if (loginOverlay) loginOverlay.classList.remove('hidden');
        if (authUserLabel) authUserLabel.textContent = 'Not signed in';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (teamChatWindow) teamChatWindow.style.display = 'none';
        if (teamChatBubble) teamChatBubble.style.display = 'none';
        if (socket && socket.connected) {
            socket.disconnect();
            socket = null;
        }
        if (loginIdentifier) loginIdentifier.focus();
    }

    refreshAboutSnapshot();
}

async function handleLogin() {
    const identifier = String(loginIdentifier?.value || '').trim();
    const password = String(loginPassword?.value || '');

    if (!identifier || !password) {
        if (loginStatus) {
            loginStatus.textContent = 'Enter your username/email and password.';
        }
        return;
    }

    if (loginSubmit) loginSubmit.disabled = true;
    if (loginStatus) loginStatus.textContent = 'Signing in...';

    try {
        const result = await window.electronAPI.loginAppUser({ identifier, password });
        if (!result?.success || !result?.authenticated) {
            if (loginStatus) {
                loginStatus.textContent = result?.error || 'Login failed.';
            }
            return;
        }

        applyAuthSession(result);
    } catch (error) {
        if (loginStatus) {
            loginStatus.textContent = error?.message || 'Login failed.';
        }
    } finally {
        if (loginSubmit) loginSubmit.disabled = false;
    }
}

// ============================================================================
// MESSAGE DISPLAY
// ============================================================================

function addMessage(content, role, sources = [], resources = [], options = {}) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;

    const messageStack = document.createElement('div');
    messageStack.className = 'message-stack';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    // Format content with markdown support
    try {
        contentDiv.innerHTML = formatContent(content);
    } catch (error) {
        console.warn('[Frontend] Message formatting failed:', error?.message || error);
        contentDiv.textContent = String(content ?? '');
    }

    if (role === 'assistant' && options.contractorName) {
        const contractorBadge = document.createElement('div');
        contractorBadge.className = 'message-contractor-badge';
        contractorBadge.textContent = `Contractor Focus: ${options.contractorName}`;
        messageStack.appendChild(contractorBadge);
    }
    messageStack.appendChild(contentDiv);

    // Add sources if available
    if (sources && sources.length > 0) {
        const sourcesDiv = document.createElement('div');
        sourcesDiv.className = 'message-sources';
        sourcesDiv.innerHTML = '<strong>Sources:</strong> ' + sources
            .map(s => `<span class="source-badge">${escapeHtml(s)}</span>`)
            .join('');
        messageStack.appendChild(sourcesDiv);
    }

    // Add resources/links if available
    if (resources && resources.length > 0) {
        const resourcesDiv = document.createElement('div');
        resourcesDiv.className = 'message-resources';

        const resourcesHeader = document.createElement('strong');
        resourcesHeader.textContent = '📚 Resource Links for Image-Guided Walkthroughs:';
        resourcesDiv.appendChild(resourcesHeader);

        const resourcesList = document.createElement('div');
        resourcesList.className = 'resources-list';

        resources.forEach(resource => {
            const resourceLink = document.createElement('a');
            resourceLink.href = resource.url;
            resourceLink.target = '_blank';
            resourceLink.rel = 'noopener noreferrer';
            resourceLink.className = 'resource-link';
            resourceLink.textContent = resource.title || resource.url;
            resourcesList.appendChild(resourceLink);
        });

        resourcesDiv.appendChild(resourcesList);
        messageStack.appendChild(resourcesDiv);
    }

    messageDiv.appendChild(messageStack);

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function addLoadingIndicator() {
    const id = 'loading-' + Date.now();
    const loadingDiv = document.createElement('div');
    loadingDiv.id = id;
    loadingDiv.className = 'loading-indicator';
    loadingDiv.innerHTML = `
        <span>Thinking</span>
        <span class="loading-dot"></span>
        <span class="loading-dot"></span>
        <span class="loading-dot"></span>
    `;
    messagesContainer.appendChild(loadingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    return id;
}

// ============================================================================
// UTILITIES
// ============================================================================

function formatContent(text) {
    text = sanitizeAssistantOutputText(text);

    // Remove LM Studio model markers
    text = text.replace(/<\|begin_of_box\|>/g, '');
    text = text.replace(/<\|end_of_box\|>/g, '');
    text = text.replace(/<\|begin_of_sentence\|>/g, '');
    text = text.replace(/<\|end_of_sentence\|>/g, '');
    
    // Escape HTML first for XSS safety, then format markdown-ish content
    const safeText = escapeHtml(text).replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    return renderMarkdownTablesAndText(safeText);
}

function sanitizeAssistantOutputText(value) {
    const text = String(value ?? '');
    if (!text.trim()) return '';

    // Remove leaked renderer/runtime errors from user-visible responses.
    const noisyRuntimeLinePattern = /^(?:typeerror:\s*)?(?:\w+\.)?clearmarks\s+is\s+not\s+a\s+function\s*$/i;
    const filteredLines = text
        .split(/\r?\n/)
        .filter((line) => !noisyRuntimeLinePattern.test(line.trim()));

    const cleaned = filteredLines.join('\n').trim();
    return cleaned || 'I hit an internal formatting issue while preparing the response. Please try again.';
}

function renderMarkdownTablesAndText(safeText) {
    const blocks = safeText.split(/\n\s*\n/);

    return blocks.map((block) => {
        const lines = block.split('\n').filter(line => line.trim().length > 0);
        if (isMarkdownTable(lines)) {
            return renderMarkdownTable(lines);
        }

        return renderMarkdownTextBlock(block);
    }).join('<br><br>');
}

function renderMarkdownTextBlock(block) {
    let formatted = formatInlineMarkdown(String(block || ''));

    formatted = formatted.replace(/^(#{1,6})\s+(.+)$/gm, (_match, hashes, content) => {
        const level = Math.max(1, Math.min(6, String(hashes).length));
        return `<h${level} class="message-md-heading message-md-h${level}">${content.trim()}</h${level}>`;
    });

    formatted = formatted.replace(/^-{3,}$/gm, '<hr class="message-md-hr">');

    return formatted.replace(/\n/g, '<br>');
}

function isMarkdownTable(lines) {
    if (!Array.isArray(lines) || lines.length < 2) return false;

    const header = lines[0].trim();
    const separator = lines[1].trim();

    if (!header.includes('|') || !separator.includes('|')) return false;

    const separatorCore = separator.replace(/^\|/, '').replace(/\|$/, '').trim();
    if (!separatorCore) return false;

    const separatorCells = separatorCore.split('|').map(cell => cell.trim());
    return separatorCells.length > 0 && separatorCells.every(cell => /^:?-{3,}:?$/.test(cell));
}

function parseMarkdownTableRow(line) {
    const core = String(line || '').trim().replace(/^\|/, '').replace(/\|$/, '');
    return core.split('|').map(cell => formatInlineMarkdown(cell.trim()));
}

function renderMarkdownTable(lines) {
    const headerCells = parseMarkdownTableRow(lines[0]);
    const bodyLines = lines.slice(2).filter(line => line.includes('|'));
    const bodyRows = bodyLines.map(parseMarkdownTableRow);

    const headerHtml = `<tr>${headerCells.map(cell => `<th>${cell}</th>`).join('')}</tr>`;
    const bodyHtml = bodyRows
        .map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`)
        .join('');

    return `
        <div class="message-table-wrap">
            <table class="message-table">
                <thead>${headerHtml}</thead>
                <tbody>${bodyHtml}</tbody>
            </table>
        </div>
    `;
}

function formatInlineMarkdown(text) {
    let formatted = String(text || '');

    // Convert URLs to links
    formatted = formatted.replace(
        /(https?:\/\/[^\s<]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Bold text
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    return formatted;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
}

// ============================================================================
// KEYBOARD SHORTCUTS
// ============================================================================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus input
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        queryInput.focus();
    }
});

// ============================================================================
// TEAM CHAT FUNCTIONALITY
// ============================================================================

function initializeTeamChat() {
    // Team chat bubble trigger
    teamChatBubble.addEventListener('click', (e) => {
        e.preventDefault();
        if (teamChatWindow.style.display === 'none' || teamChatWindow.style.display === '') {
            teamChatWindow.style.display = 'flex';
            teamChatBubble.style.display = 'none';
            if (!socket || !socket.connected) {
                connectToTeamChat();
            }
        }
    });

    // Minimize button
    minimizeChatBtn.addEventListener('click', (e) => {
        e.preventDefault();
        teamChatWindow.style.display = 'none';
        teamChatBubble.style.display = 'flex';
    });

    // Register button
    registerBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username) {
            registerUser(username);
        }
    });

    // Username input enter key
    usernameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const username = usernameInput.value.trim();
            if (username) {
                registerUser(username);
            }
        }
    });

    // Team message send button
    teamSendBtn.addEventListener('click', sendTeamMessage);

    // Team message input enter key
    teamMessageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendTeamMessage();
        }
    });

    // Lunch toggle button
    lunchToggleBtn.addEventListener('click', () => {
        if (socket && socket.connected) {
            socket.emit('toggle-lunch');
        }
    });

    // Change name button
    changeNameBtn.addEventListener('click', () => {
        const newName = prompt('Enter your new name:');
        if (newName && newName.trim()) {
            if (socket && socket.connected) {
                socket.emit('change-name', newName.trim());
            }
        }
    });

    // Load history button
    loadHistoryBtn.addEventListener('click', () => {
        if (socket && socket.connected) {
            socket.emit('request-history');
        }
    });
}

async function connectToTeamChat() {
    // Connect to configured chat server URL
    let serverUrl = 'http://localhost:3000';
    try {
        const result = await window.electronAPI.getChatServerUrl();
        serverUrl = result.url || serverUrl;
    } catch (error) {
        serverUrl = 'http://localhost:3000';
    }

    socket = io(serverUrl, {
        transports: ['websocket', 'polling'],
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1500,
        timeout: 10000
    });

    socket.on('connect', () => {
        console.log('[Team Chat] Connected to server');
    });

    socket.on('registered', (data) => {
        currentUsername = data.username;
        currentUserDisplay.textContent = currentUsername;
        registrationForm.style.display = 'none';
        chatInterface.style.display = 'block';
        addTeamSystemMessage(`Welcome ${currentUsername}! You're now connected to team chat.`);
    });

    socket.on('name-changed', (data) => {
        currentUsername = data.username;
        currentUserDisplay.textContent = currentUsername;
        addTeamSystemMessage(`Your name has been changed to ${currentUsername}`);
    });

    socket.on('chat-message', (data) => {
        addTeamChatMessage(data.username, data.message, data.timestamp);
    });

    socket.on('chat-history', (history) => {
        teamMessages.innerHTML = ''; // Clear current messages
        addTeamSystemMessage(`Loading ${history.length} messages from history...`);
        
        history.forEach(msg => {
            addTeamChatMessage(msg.username, msg.message, msg.timestamp);
        });
        
        addTeamSystemMessage('✓ Full chat history loaded');
    });

    socket.on('system-message', (message) => {
        addTeamSystemMessage(message);
    });

    socket.on('user-list', (users) => {
        updateLunchList(users);
    });

    socket.on('error', (message) => {
        alert(`Team Chat Error: ${message}`);
    });

    socket.on('disconnect', () => {
        console.log('[Team Chat] Disconnected from server');
        addTeamSystemMessage('Disconnected from team chat. Please refresh or rejoin.');
    });

    socket.on('connect_error', (error) => {
        const message = error?.message || 'Unknown connection error';
        console.error('[Team Chat] Connect error:', message);
        addTeamSystemMessage(`Chat connection failed (${serverUrl}): ${message}`);
    });
}

function registerUser(username) {
    if (socket && socket.connected) {
        socket.emit('register', username);
    } else {
        alert('Not connected to chat server. Please try again.');
    }
}

function sendTeamMessage() {
    const message = teamMessageInput.value.trim();
    if (!message || !socket || !socket.connected) return;

    socket.emit('chat-message', message);
    teamMessageInput.value = '';
    teamMessageInput.focus();
}

function addTeamChatMessage(username, message, timestamp) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'team-chat-message';
    
    const isOwnMessage = username === currentUsername;
    if (isOwnMessage) {
        messageDiv.classList.add('own-message');
    }

    const time = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const isUserOnLunch = userLunchStatus.get(username) === true;

    messageDiv.innerHTML = `
        <div class="team-message-header">
            <div class="team-message-user">
                <strong class="team-message-username" data-username="${escapeHtml(username)}">${escapeHtml(username)}</strong>
                <span class="lunch-indicator ${isUserOnLunch ? 'show' : ''}" title="On lunch" aria-label="On lunch">🥪</span>
            </div>
            <span class="team-message-time">${time}</span>
        </div>
        <div class="team-message-content">${escapeHtml(message)}</div>
    `;

    teamMessages.appendChild(messageDiv);
    teamMessages.scrollTop = teamMessages.scrollHeight;
}

function addTeamSystemMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'team-system-message';
    messageDiv.textContent = message;

    teamMessages.appendChild(messageDiv);
    teamMessages.scrollTop = teamMessages.scrollHeight;
}

function updateLunchList(users) {
    userLunchStatus = new Map(users.map(u => [u.username, u.onLunch]));
    const onLunchUsers = users.filter(u => u.onLunch);
    
    if (onLunchUsers.length === 0) {
        lunchList.textContent = 'Nobody is on lunch';
    } else {
        lunchList.textContent = onLunchUsers.map(u => u.username).join(', ');
    }

    // Update own lunch button
    const currentUser = users.find(u => u.username === currentUsername);
    if (currentUser) {
        isOnLunch = currentUser.onLunch;
        lunchToggleBtn.textContent = isOnLunch ? 'Back from Lunch' : 'Go to Lunch';
        lunchToggleBtn.classList.toggle('on-lunch', isOnLunch);
    }

    updateChatLunchIndicators();
}

function updateChatLunchIndicators() {
    const headers = teamMessages.querySelectorAll('.team-message-header');

    headers.forEach(header => {
        const usernameEl = header.querySelector('.team-message-username');
        const indicatorEl = header.querySelector('.lunch-indicator');
        if (!usernameEl || !indicatorEl) return;

        const username = usernameEl.getAttribute('data-username');
        const onLunch = userLunchStatus.get(username) === true;
        indicatorEl.classList.toggle('show', onLunch);
    });
}
