# Western Intelligence Runtime Book

## Purpose
This runbook is for end users and technicians who need to run, support, and troubleshoot Western Intelligence in production.

## What Is Included In This Clean Build
- App runtime code and UI under app
- Core knowledge base file
- SmartBuild knowledge set
- Manual Forms and contractor knowledge set
- Paradigm knowledge set
- Startup launcher

## Standard Startup
1. Open `Start-Western-Intelligence.bat` from the clean build root.
2. The launcher attempts to start LM Studio if installed at `C:\Program Files\LM Studio\LM Studio.exe`.
3. The app then starts through `app\run.bat`.

## First-Time Setup
1. Install Node.js LTS.
2. Open a terminal in `app`.
3. Run `npm install`.
4. Start with `npm run start:system-ca`.

## Runtime Dependencies
- Node.js and npm
- LM Studio (local or remote endpoint)
- Network access to configured services
- Optional: LDAP connectivity for enterprise auth mode

## Core Runtime Paths
- App entry: `app\src\main.js`
- Renderer page: `app\public\index.html`
- Launcher: `Start-Western-Intelligence.bat`
- App runner: `app\run.bat`
- Primary knowledge base: `Western Building Supply knowledgebase.md`
- SmartBuild docs: `data\smartbuild_docs`
- Manual forms docs: `data\manual_forms_docs`
- Paradigm docs: `data\paradigm_docs`

## Authentication Modes
### LDAP Enabled
When LDAP is enabled, login is validated against configured LDAP settings.

### Local/Open Access Fallback
If LDAP is disabled, local/open access behavior applies per runtime settings.

## LM Studio Connectivity
- Default API endpoint: `http://127.0.0.1:1234/v1`
- Local model host should expose the OpenAI-compatible API.
- App can be pointed to remote endpoint settings as needed.

## Common Environment Variables
- `LM_STUDIO_API`
- `LM_STUDIO_MODEL`
- `KB_PATH`
- `KNOWLEDGE_BASE_PATH`
- `GOOGLE_LDAP_URL`
- `PARADIGM_VENDOR_ROOT`

## Troubleshooting
### App Does Not Start
1. Verify Node.js: `node --version`
2. Verify dependencies: `npm install` in `app`
3. Launch directly: `npm run start:system-ca`

### LM Studio Not Reachable
1. Confirm LM Studio is running.
2. Verify endpoint responds at configured URL.
3. Check firewall and local port 1234 access.

### Knowledge Results Missing
1. Confirm `Western Building Supply knowledgebase.md` exists.
2. Confirm `data\smartbuild_docs`, `data\manual_forms_docs`, and `data\paradigm_docs` exist.
3. Confirm paths are not overridden incorrectly with env vars.

### LDAP Login Issues
1. Verify LDAP host URL and credentials.
2. Verify certificate path settings if TLS cert files are used.
3. Test network path to LDAP endpoint from host machine.

## Operational Notes
- This clean build intentionally excludes historical logs, archives, and recovery snapshots.
- Runtime-generated app settings and logs are stored under user profile paths, not this repository root.

## Support Escalation Bundle
When escalating, capture:
- Startup command used
- Exact error text and timestamp
- OS version
- Node.js version
- LM endpoint configuration
- LDAP mode and endpoint details (without passwords)
