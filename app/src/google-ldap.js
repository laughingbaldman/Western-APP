/**
 * File: Western Intel/app/src/google-ldap.js
 * Purpose: Core project script/module.
 * What It Does: Implements workflow logic used by Western Intel.
 * Why It Exists: Keeps this behavior isolated and maintainable for technicians.
 * Connected To: fs, ldapts, tls
 * Notes: Auto-added explainability header; update with business-specific details as needed.
 */

const fs = require('fs');
const tls = require('tls');
const { Client } = require('ldapts');

const DEFAULT_TIMEOUT_MS = 10000;

function toBoolean(value, fallback = false) {
  if (typeof value === 'boolean') return value;
  if (value === undefined || value === null) return fallback;
  const normalized = String(value).trim().toLowerCase();
  if (['1', 'true', 'yes', 'on'].includes(normalized)) return true;
  if (['0', 'false', 'no', 'off'].includes(normalized)) return false;
  return fallback;
}

function toInt(value, fallback) {
  const parsed = Number.parseInt(String(value), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function sanitizeUrl(url) {
  const fallback = 'ldaps://ldap.google.com:636';
  let trimmed = String(url || '').trim();
  if (!trimmed) return fallback;
  if (!/^ldaps?:\/\//i.test(trimmed)) {
    trimmed = `ldaps://${trimmed}`;
  }
  try {
    const parsed = new URL(trimmed);
    if (!parsed.port) {
      parsed.port = parsed.protocol === 'ldap:' ? '389' : '636';
    }
    return parsed.toString().replace(/\/$/, '');
  } catch {
    return fallback;
  }
}

function escapeFilterValue(value) {
  return String(value || '')
    .replace(/\\/g, '\\5c')
    .replace(/\*/g, '\\2a')
    .replace(/\(/g, '\\28')
    .replace(/\)/g, '\\29')
    .replace(/\u0000/g, '\\00');
}

function resolveGoogleLdapConfig(overrides = {}) {
  const env = process.env;
  const bindPasswordFromOverride = Object.prototype.hasOwnProperty.call(overrides, 'bindPassword')
    ? overrides.bindPassword
    : undefined;

  const baseDn = String(overrides.baseDn || env.GOOGLE_LDAP_BASE_DN || '').trim();
  const bindDn = String(overrides.bindDn || env.GOOGLE_LDAP_BIND_DN || '').trim();
  const bindPassword = bindPasswordFromOverride !== undefined
    ? String(bindPasswordFromOverride || '')
    : String(env.GOOGLE_LDAP_BIND_PASSWORD || '');
  const userBaseDn = String(overrides.userBaseDn || env.GOOGLE_LDAP_USER_BASE_DN || '').trim();
  const groupBaseDn = String(overrides.groupBaseDn || env.GOOGLE_LDAP_GROUP_BASE_DN || '').trim();
  const requiredGroupEmail = String(overrides.requiredGroupEmail || env.GOOGLE_LDAP_REQUIRED_GROUP_EMAIL || '').trim();
  const caCertPath = String(overrides.caCertPath || env.GOOGLE_LDAP_CA_CERT_PATH || '').trim();
  const clientCertPath = String(overrides.clientCertPath || env.GOOGLE_LDAP_CLIENT_CERT_PATH || '').trim();
  const clientKeyPath = String(overrides.clientKeyPath || env.GOOGLE_LDAP_CLIENT_KEY_PATH || '').trim();
  const clientKeyPassphrase = String(overrides.clientKeyPassphrase || env.GOOGLE_LDAP_CLIENT_KEY_PASSPHRASE || '').trim();

  const enabledSource = overrides.enabled !== undefined ? overrides.enabled : env.GOOGLE_LDAP_ENABLED;
  const enabled = toBoolean(enabledSource, false);

  return {
    enabled,
    url: sanitizeUrl(overrides.url || env.GOOGLE_LDAP_URL || 'ldaps://ldap.google.com:636'),
    baseDn,
    bindDn,
    bindPassword,
    userBaseDn,
    groupBaseDn,
    requiredGroupEmail,
    caCertPath,
    clientCertPath,
    clientKeyPath,
    clientKeyPassphrase,
    rejectUnauthorized: toBoolean(
      overrides.rejectUnauthorized !== undefined ? overrides.rejectUnauthorized : env.GOOGLE_LDAP_REJECT_UNAUTHORIZED,
      true
    ),
    timeoutMs: toInt(overrides.timeoutMs !== undefined ? overrides.timeoutMs : env.GOOGLE_LDAP_TIMEOUT_MS, DEFAULT_TIMEOUT_MS),
    defaultSyncLimit: toInt(overrides.defaultSyncLimit !== undefined ? overrides.defaultSyncLimit : env.GOOGLE_LDAP_SYNC_LIMIT, 500)
  };
}

function sanitizeConfigForRenderer(config) {
  const resolved = resolveGoogleLdapConfig(config);
  return {
    ...resolved,
    bindPassword: '',
    clientKeyPassphrase: '',
    hasClientKeyPassphrase: Boolean(resolved.clientKeyPassphrase),
    hasClientCert: Boolean(resolved.clientCertPath),
    hasClientKey: Boolean(resolved.clientKeyPath),
    hasPassword: Boolean(resolved.bindPassword)
  };
}

class GoogleLdapService {
  constructor(config) {
    this.config = resolveGoogleLdapConfig(config);
  }

  setConfig(config) {
    this.config = resolveGoogleLdapConfig(config);
    return this.getSafeConfig();
  }

  getSafeConfig() {
    return sanitizeConfigForRenderer(this.config);
  }

  validateConfig(requireEnabled = false) {
    if (requireEnabled && !this.config.enabled) {
      throw new Error('Google LDAP is disabled. Enable it in Admin Console first.');
    }
    if (!this.config.baseDn) throw new Error('Google LDAP Base DN is required.');
    if (!this.config.bindDn) throw new Error('Google LDAP Bind DN is required.');
    if (!this.config.bindPassword) throw new Error('Google LDAP Bind Password is required.');
  }

  getTlsOptions() {
    const secureMode = this.config.rejectUnauthorized !== false;
    const tlsOptions = {
      rejectUnauthorized: secureMode,
      minVersion: 'TLSv1.2',
      checkServerIdentity: secureMode ? tls.checkServerIdentity : () => undefined
    };

    if (this.config.caCertPath) {
      if (!fs.existsSync(this.config.caCertPath)) {
        throw new Error(`CA certificate file not found: ${this.config.caCertPath}`);
      }
      tlsOptions.ca = fs.readFileSync(this.config.caCertPath);
    }

    const hasClientCert = Boolean(this.config.clientCertPath);
    const hasClientKey = Boolean(this.config.clientKeyPath);
    if (hasClientCert !== hasClientKey) {
      throw new Error('Both client certificate and client key paths are required for Google LDAP mTLS.');
    }

    if (hasClientCert && hasClientKey) {
      if (!fs.existsSync(this.config.clientCertPath)) {
        throw new Error(`Client certificate file not found: ${this.config.clientCertPath}`);
      }
      if (!fs.existsSync(this.config.clientKeyPath)) {
        throw new Error(`Client key file not found: ${this.config.clientKeyPath}`);
      }

      tlsOptions.cert = fs.readFileSync(this.config.clientCertPath);
      tlsOptions.key = fs.readFileSync(this.config.clientKeyPath);
      if (this.config.clientKeyPassphrase) {
        tlsOptions.passphrase = this.config.clientKeyPassphrase;
      }
    }

    return tlsOptions;
  }

  async withBoundClient(fn) {
    this.validateConfig();
    const client = new Client({
      url: this.config.url,
      timeout: this.config.timeoutMs,
      connectTimeout: this.config.timeoutMs,
      tlsOptions: this.getTlsOptions()
    });

    try {
      await client.bind(this.config.bindDn, this.config.bindPassword);
      return await fn(client);
    } finally {
      try {
        await client.unbind();
      } catch {
        // Ignore client close errors
      }
    }
  }

  async testConnection() {
    this.validateConfig(true);
    return this.withBoundClient(async (client) => {
      const result = await client.search(this.config.baseDn, {
        scope: 'base',
        filter: '(objectClass=*)',
        attributes: ['dn'],
        sizeLimit: 1
      });

      return {
        connected: true,
        resultCount: Array.isArray(result.searchEntries) ? result.searchEntries.length : 0
      };
    });
  }

  async searchUsers(query, limit = 25) {
    const term = String(query || '').trim();
    if (!term) return [];

    const escaped = escapeFilterValue(term);
    const base = this.config.userBaseDn || this.config.baseDn;
    const sizeLimit = Math.min(Math.max(Number(limit) || 25, 1), 200);

    return this.withBoundClient(async (client) => {
      const result = await client.search(base, {
        scope: 'sub',
        filter: `(&(|(objectClass=person)(objectClass=inetOrgPerson))( |(mail=*${escaped}*)(cn=*${escaped}*)(uid=*${escaped}*)(givenName=*${escaped}*)(sn=*${escaped}*) ))`.replace(/\s+/g, ''),
        attributes: ['dn', 'cn', 'displayName', 'givenName', 'sn', 'mail', 'uid'],
        sizeLimit
      });

      return (result.searchEntries || []).map((entry) => ({
        dn: entry.dn,
        name: entry.displayName || entry.cn || '',
        givenName: entry.givenName || '',
        surname: entry.sn || '',
        mail: entry.mail || '',
        uid: entry.uid || ''
      }));
    });
  }

  async searchGroups(query, limit = 25) {
    const term = String(query || '').trim();
    if (!term) return [];

    const escaped = escapeFilterValue(term);
    const base = this.config.groupBaseDn || this.config.baseDn;
    const sizeLimit = Math.min(Math.max(Number(limit) || 25, 1), 200);

    return this.withBoundClient(async (client) => {
      const result = await client.search(base, {
        scope: 'sub',
        filter: `(&(|(objectClass=groupOfNames)(objectClass=groupOfUniqueNames))( |(cn=*${escaped}*)(mail=*${escaped}*) ))`.replace(/\s+/g, ''),
        attributes: ['dn', 'cn', 'mail', 'description', 'member', 'uniqueMember'],
        sizeLimit
      });

      return (result.searchEntries || []).map((entry) => {
        const members = [];
        if (Array.isArray(entry.member)) members.push(...entry.member);
        else if (entry.member) members.push(entry.member);
        if (Array.isArray(entry.uniqueMember)) members.push(...entry.uniqueMember);
        else if (entry.uniqueMember) members.push(entry.uniqueMember);

        return {
          dn: entry.dn,
          cn: entry.cn || '',
          mail: entry.mail || '',
          description: entry.description || '',
          memberCount: members.length
        };
      });
    });
  }

  async authenticateUser({ identifier, password, requiredGroupEmail }) {
    this.validateConfig(true);

    const normalizedIdentifier = String(identifier || '').trim();
    const normalizedPassword = String(password || '');
    if (!normalizedIdentifier) throw new Error('User identifier is required.');
    if (!normalizedPassword) throw new Error('User password is required.');

    const userBase = this.config.userBaseDn || this.config.baseDn;
    const identifierEscaped = escapeFilterValue(normalizedIdentifier);

    const userEntry = await this.withBoundClient(async (serviceClient) => {
      const search = await serviceClient.search(userBase, {
        scope: 'sub',
        filter: `(&(|(objectClass=person)(objectClass=inetOrgPerson))(|(mail=${identifierEscaped})(uid=${identifierEscaped})(cn=${identifierEscaped})))`,
        attributes: ['dn', 'cn', 'displayName', 'mail', 'uid'],
        sizeLimit: 1
      });
      return (search.searchEntries || [])[0] || null;
    });

    if (!userEntry || !userEntry.dn) {
      throw new Error('User not found in Google LDAP directory.');
    }

    const userClient = new Client({
      url: this.config.url,
      timeout: this.config.timeoutMs,
      connectTimeout: this.config.timeoutMs,
      tlsOptions: this.getTlsOptions()
    });

    try {
      await userClient.bind(userEntry.dn, normalizedPassword);
    } catch {
      throw new Error('User authentication failed. Invalid credentials.');
    } finally {
      try {
        await userClient.unbind();
      } catch {
        // Ignore close errors
      }
    }

    const requiredGroup = String(requiredGroupEmail || this.config.requiredGroupEmail || '').trim();
    if (requiredGroup) {
      const groupBase = this.config.groupBaseDn || this.config.baseDn;
      const groupMailEscaped = escapeFilterValue(requiredGroup);
      const userDnEscaped = escapeFilterValue(userEntry.dn);

      const groupMatch = await this.withBoundClient(async (serviceClient) => {
        const search = await serviceClient.search(groupBase, {
          scope: 'sub',
          filter: `(&(|(objectClass=groupOfNames)(objectClass=groupOfUniqueNames))(mail=${groupMailEscaped})(|(member=${userDnEscaped})(uniqueMember=${userDnEscaped})))`,
          attributes: ['dn'],
          sizeLimit: 1
        });
        return (search.searchEntries || []).length > 0;
      });

      if (!groupMatch) {
        throw new Error(`Authenticated, but user is not in required group: ${requiredGroup}`);
      }
    }

    return {
      authenticated: true,
      user: {
        dn: userEntry.dn,
        name: userEntry.displayName || userEntry.cn || '',
        mail: userEntry.mail || normalizedIdentifier,
        uid: userEntry.uid || ''
      }
    };
  }

  async syncDirectory(limit) {
    this.validateConfig(true);
    const sizeLimit = Math.min(Math.max(Number(limit) || this.config.defaultSyncLimit, 1), 5000);

    const usersBase = this.config.userBaseDn || this.config.baseDn;
    const groupsBase = this.config.groupBaseDn || this.config.baseDn;

    return this.withBoundClient(async (client) => {
      const [usersResult, groupsResult] = await Promise.all([
        client.search(usersBase, {
          scope: 'sub',
          filter: '(|(objectClass=person)(objectClass=inetOrgPerson))',
          attributes: ['dn', 'cn', 'displayName', 'givenName', 'sn', 'mail', 'uid'],
          sizeLimit
        }),
        client.search(groupsBase, {
          scope: 'sub',
          filter: '(|(objectClass=groupOfNames)(objectClass=groupOfUniqueNames))',
          attributes: ['dn', 'cn', 'mail', 'description', 'member', 'uniqueMember'],
          sizeLimit
        })
      ]);

      const users = (usersResult.searchEntries || []).map((entry) => ({
        dn: entry.dn,
        name: entry.displayName || entry.cn || '',
        givenName: entry.givenName || '',
        surname: entry.sn || '',
        mail: entry.mail || '',
        uid: entry.uid || ''
      }));

      const groups = (groupsResult.searchEntries || []).map((entry) => {
        const members = [];
        if (Array.isArray(entry.member)) members.push(...entry.member);
        else if (entry.member) members.push(entry.member);
        if (Array.isArray(entry.uniqueMember)) members.push(...entry.uniqueMember);
        else if (entry.uniqueMember) members.push(entry.uniqueMember);

        return {
          dn: entry.dn,
          cn: entry.cn || '',
          mail: entry.mail || '',
          description: entry.description || '',
          members
        };
      });

      return {
        syncedAt: new Date().toISOString(),
        source: this.config.url,
        baseDn: this.config.baseDn,
        users,
        groups,
        totals: {
          users: users.length,
          groups: groups.length
        }
      };
    });
  }
}

module.exports = {
  GoogleLdapService,
  resolveGoogleLdapConfig,
  sanitizeConfigForRenderer
};
