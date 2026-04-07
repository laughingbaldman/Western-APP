const path = require('path');

const DEFAULT_PARADIGM_VENDOR_SUBPATH = path.join('Paragon Computing Solutions', 'Paradigm Accounting');

function resolveParadigmVendorRoot(env = process.env, platform = process.platform) {
  const explicit = String(env.PARADIGM_VENDOR_ROOT || '').trim();
  if (explicit) return explicit;

  if (platform === 'win32') {
    const programData = String(env.ProgramData || 'C:\\ProgramData').trim() || 'C:\\ProgramData';
    return path.join(programData, DEFAULT_PARADIGM_VENDOR_SUBPATH);
  }

  const home = String(env.HOME || env.USERPROFILE || '').trim();
  if (home) {
    return path.join(home, DEFAULT_PARADIGM_VENDOR_SUBPATH);
  }

  return path.join(path.sep, 'opt', 'paradigm', 'Paradigm Accounting');
}

function buildWindowsSignToolCandidates(env = process.env) {
  const explicit = String(env.SIGNTOOL_PATH || '').trim();
  const candidates = [];
  if (explicit) {
    candidates.push(explicit);
  }

  const kitsRoot = String(env.WindowsSdkDir || '').trim();
  if (kitsRoot) {
    candidates.push(path.join(kitsRoot, 'bin', 'x64', 'signtool.exe'));
  }

  const pf86 = String(env['ProgramFiles(x86)'] || 'C:\\Program Files (x86)').trim() || 'C:\\Program Files (x86)';
  const windowsKits = path.join(pf86, 'Windows Kits', '10');
  candidates.push(path.join(windowsKits, 'bin', 'x64', 'signtool.exe'));
  candidates.push(path.join(windowsKits, 'bin', '10.0.22621.0', 'x64', 'signtool.exe'));
  candidates.push(path.join(windowsKits, 'bin', '10.0.22000.0', 'x64', 'signtool.exe'));
  candidates.push(path.join(windowsKits, 'bin', '10.0.19041.0', 'x64', 'signtool.exe'));
  candidates.push(path.join(windowsKits, 'App Certification Kit', 'signtool.exe'));
  return candidates;
}

module.exports = {
  resolveParadigmVendorRoot,
  buildWindowsSignToolCandidates
};
