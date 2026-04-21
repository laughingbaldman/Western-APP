# Western Intelligence Handoff Book

## Audience
This handoff is for internal IT, future maintainers, and deployment technicians.

## Handoff Scope
This clean package is a rebuild-focused runtime handoff, not a full historical repository mirror.

## Design Intent
- Preserve all app behavior currently in use
- Preserve all core knowledge domains used by production workflows
- Remove accumulated non-runtime clutter
- Keep deployment and troubleshooting practical for technicians

## Included Components
- `Start-Western-Intelligence.bat`
- `Start-Western-Intelligence.py`
- `app` runtime folder (source, UI, package manifests, patches)
- `Western Building Supply knowledgebase.md`
- `data\smartbuild_docs`
- `data\manual_forms_docs`
- `data\paradigm_docs`

## Excluded Components
- Archived/recovery snapshots
- Legacy app copies
- Historical docs and ad-hoc handoff files outside runtime needs
- Chat logs and unrelated artifacts
- Preinstalled dependencies like `node_modules`

## Deployment Procedure
1. Place folder on target machine.
2. Install Node.js LTS.
3. Run in `app`: `npm install`.
4. Launch from root using `Start-Western-Intelligence.bat`.
5. Validate app startup and search responses across all three knowledge domains.

## Validation Checklist
- App launches without crash.
- LM endpoint connectivity confirmed.
- Contractor/manual forms questions return expected context.
- SmartBuild questions return expected context.
- Paradigm questions return expected context.
- LDAP login flow validated if enabled.

## Troubleshooting Ownership
- Tier 1: Endpoint/runtime checks and startup validation
- Tier 2: Config and environment variable corrections
- Tier 3: Source-level debugging and dependency remediation

## Security and Operations
- Keep LDAP secrets and credential files outside source-controlled runtime folders.
- Do not hardcode credentials in scripts.
- Use least privilege for deployment and operations.
- Maintain a controlled release cadence for dependency updates.

## Maintenance Tasks
- Periodic npm dependency refresh with regression checks.
- Periodic knowledge data refresh from authoritative sources.
- Validate startup scripts after OS or endpoint changes.

## Change Log Seed
Start maintaining a local deployment log from this baseline:
- Date
- Owner
- Change summary
- Validation results
- Rollback notes

## Acceptance Statement
This package is accepted as the clean operational baseline for Western Intelligence rebuilds, preserving critical functionality while removing non-essential repository clutter.
