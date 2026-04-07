/**
 * File: Western Intel/app/src/preload.js
 * Purpose: Core project script/module.
 * What It Does: Implements workflow logic used by Western Intel.
 * Why It Exists: Keeps this behavior isolated and maintainable for technicians.
 * Connected To: electron
 * Notes: Auto-added explainability header; update with business-specific details as needed.
 */

const { contextBridge, ipcRenderer } = require('electron');

const invoke = (channel, payload) => ipcRenderer.invoke(channel, payload);

contextBridge.exposeInMainWorld('electronAPI', {
  ragQuery: (query) => invoke('rag-query', query),
  getContractorCatalog: () => invoke('get-contractor-catalog'),
  syncContractorSheet: (payload) => invoke('sync-contractor-sheet', payload),
  getAppInfo: () => invoke('get-app-info'),
  getIndexedDataStats: () => invoke('get-indexed-data-stats'),
  checkLMStudio: () => invoke('check-lm-studio'),
  getLMStudioUrl: () => invoke('get-lm-studio-url'),
  setLMStudioUrl: (url) => invoke('set-lm-studio-url', url),
  getChatServerUrl: () => invoke('get-chat-server-url'),
  setChatServerUrl: (url) => invoke('set-chat-server-url', url),
  getParadigmLauncherPaths: () => invoke('get-paradigm-launcher-paths'),
  setParadigmLauncherPaths: (payload) => invoke('set-paradigm-launcher-paths', payload),
  selectParadigmExecutable: (payload) => invoke('select-paradigm-executable', payload),
  getLocalIp: () => invoke('get-local-ip'),
  getChatServerEnabled: () => invoke('get-chat-server-enabled'),
  setChatServerEnabled: (enabled) => invoke('set-chat-server-enabled', enabled),
  getAutoLaunch: () => invoke('get-auto-launch'),
  setAutoLaunch: (enabled) => invoke('set-auto-launch', enabled),
  runNetworkDiagnostics: () => invoke('run-network-diagnostics'),
  launchErpClient: () => invoke('erp-launch-client'),
  checkForAppUpdates: () => invoke('app-check-for-updates'),
  openDevTools: () => invoke('open-dev-tools'),
  loginAppUser: (payload) => invoke('authenticate-app-user', payload),
  getAppAuthSession: () => invoke('get-app-auth-session'),
  logoutAppUser: () => invoke('logout-app-user'),
  getGoogleLdapConfig: () => invoke('get-google-ldap-config'),
  setGoogleLdapConfig: (config) => invoke('set-google-ldap-config', config),
  testGoogleLdap: () => invoke('test-google-ldap'),
  authenticateGoogleLdapUser: (payload) => invoke('google-ldap-authenticate-user', payload),
  searchGoogleLdapDirectory: (payload) => invoke('google-ldap-search-directory', payload),
  syncGoogleLdapDirectory: (payload) => invoke('google-ldap-sync-directory', payload),
  clearChatHistory: () => invoke('clear-chat-history'),
  openKnowledgeBase: () => invoke('open-knowledge-base'),
  selectIngestFile: () => invoke('select-ingest-file'),
  selectLdapClientCertFile: () => invoke('select-ldap-client-cert-file'),
  selectLdapClientKeyFile: () => invoke('select-ldap-client-key-file'),
  selectLdapCaCertFile: () => invoke('select-ldap-ca-cert-file'),
  selectSmartBuildFolder: () => invoke('select-smartbuild-folder'),
  importSmartBuildFolder: (payload) => invoke('import-smartbuild-folder', payload),
  ingestSource: (payload) => invoke('ingest-source', payload),
  approveIngestion: (payload) => invoke('approve-ingestion', payload),
  listIngestions: () => invoke('list-ingestions'),
  deleteIngestion: (payload) => invoke('delete-ingestion', payload),
  editIngestion: (payload) => invoke('edit-ingestion', payload),
  undoLastIngestion: () => invoke('undo-last-ingestion'),
  onKnowledgeBaseOpen: (callback) => ipcRenderer.on('open-knowledge-base', callback)
});
