const fs = require('fs');
const path = require('path');

const { buildWorkflowIndex, searchIndex } = require('./indexer');

const CONTRACTOR_MARKER = 'Contractor Preferences';
const CONTRACTOR_SECTION_HEADINGS = [
  'Panels',
  'Trim',
  'Framing',
  'Foundation',
  'Accessories',
  'Doors/Windows',
  'Misc. Notes'
];

function slugifyContractorId(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .trim();
}

function extractTitle(markdown, fallbackPath = '') {
  const headingMatch = String(markdown || '').match(/^#\s+(.+)$/m);
  if (headingMatch && headingMatch[1]) {
    return headingMatch[1].trim();
  }

  if (fallbackPath) {
    return path.basename(fallbackPath, path.extname(fallbackPath));
  }

  return 'Unknown Contractor';
}

function normalizeMarkdownBody(markdown) {
  return String(markdown || '')
    .replace(/\r/g, '\n')
    .replace(/\n{3,}/g, '\n\n');
}

function cleanLine(line) {
  return String(line || '').replace(/\s+/g, ' ').trim();
}

function extractContractorSections(markdown) {
  const lines = normalizeMarkdownBody(markdown).split('\n');
  const sections = {};
  let activeHeading = null;

  for (const rawLine of lines) {
    const line = cleanLine(rawLine);
    if (!line) continue;

    const matchedHeading = CONTRACTOR_SECTION_HEADINGS.find((heading) => heading.toLowerCase() === line.toLowerCase());
    if (matchedHeading) {
      activeHeading = matchedHeading;
      sections[matchedHeading] = [];
      continue;
    }

    if (!activeHeading) continue;
    if (/^https?:\/\//i.test(line)) continue;

    sections[activeHeading].push(line);
  }

  return sections;
}

function summarizeContractorSections(sections) {
  const parts = [];

  for (const heading of CONTRACTOR_SECTION_HEADINGS) {
    const lines = Array.isArray(sections[heading]) ? sections[heading] : [];
    const meaningfulLines = lines.filter((line) => line && !/^\d{1,2}\/\d{1,2}\/\d{2,4}/.test(line));
    if (meaningfulLines.length === 0) continue;

    parts.push(`${heading}: ${meaningfulLines.slice(0, 2).join('; ')}`);
    if (parts.length >= 3) {
      break;
    }
  }

  return parts.join(' | ');
}

function readManualFormsEntries(manualFormsIndexPath, manualFormsDocsPath) {
  const indexedEntries = [];

  if (manualFormsIndexPath && fs.existsSync(manualFormsIndexPath)) {
    try {
      const raw = fs.readFileSync(manualFormsIndexPath, 'utf8');
      const parsed = JSON.parse(raw);
      const entries = Array.isArray(parsed?.sections?.manual_forms) ? parsed.sections.manual_forms : [];

      for (const entry of entries) {
        if (!entry?.path || path.extname(entry.path).toLowerCase() !== '.md') continue;
        indexedEntries.push({
          title: String(entry.title || '').trim(),
          path: path.resolve(entry.path)
        });
      }
    } catch {
      // Fall back to the markdown directory below.
    }
  }

  if (indexedEntries.length > 0) {
    return indexedEntries;
  }

  const formsDirectory = manualFormsDocsPath ? path.join(manualFormsDocsPath, 'forms') : '';
  if (!formsDirectory || !fs.existsSync(formsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(formsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.md'))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((entry) => ({
      title: '',
      path: path.resolve(formsDirectory, entry.name)
    }));
}

function loadRosterEntries(rosterPath) {
  if (!rosterPath || !fs.existsSync(rosterPath)) {
    return [];
  }

  try {
    const raw = fs.readFileSync(rosterPath, 'utf8');
    const parsed = JSON.parse(raw);
    const entries = Array.isArray(parsed?.entries) ? parsed.entries : [];

    return entries
      .map((entry) => ({
        id: slugifyContractorId(entry?.id || entry?.name),
        name: String(entry?.name || '').trim(),
        summary: String(entry?.summary || '').trim(),
        section: String(entry?.section || '').trim(),
        headings: Array.isArray(entry?.headings) ? entry.headings.map((heading) => String(heading || '').trim()).filter(Boolean) : [],
        sheetName: String(entry?.sheetName || '').trim()
      }))
      .filter((entry) => entry.id && entry.name);
  } catch {
    return [];
  }
}

function buildContractorCatalog({ manualFormsIndexPath, manualFormsDocsPath, contractorRosterPath }) {
  const catalog = [];
  const seenIds = new Set();
  const entries = readManualFormsEntries(manualFormsIndexPath, manualFormsDocsPath);

  for (const entry of entries) {
    if (!entry?.path || !fs.existsSync(entry.path)) continue;

    let markdown = '';
    try {
      markdown = fs.readFileSync(entry.path, 'utf8');
    } catch {
      continue;
    }

    if (!markdown.includes(CONTRACTOR_MARKER)) continue;

    const name = entry.title || extractTitle(markdown, entry.path);
    const id = slugifyContractorId(name);
    if (!id || seenIds.has(id)) continue;

    const sections = extractContractorSections(markdown);
    catalog.push({
      id,
      name,
      path: path.resolve(entry.path),
      source: 'manual-forms',
      summary: summarizeContractorSections(sections),
      headings: CONTRACTOR_SECTION_HEADINGS.filter((heading) => Array.isArray(sections[heading]) && sections[heading].length > 0),
      section: markdown,
      sheetName: ''
    });
    seenIds.add(id);
  }

  const rosterEntries = loadRosterEntries(contractorRosterPath);
  for (const rosterEntry of rosterEntries) {
    const existingIndex = catalog.findIndex((entry) => entry.id === rosterEntry.id);
    if (existingIndex >= 0) {
      if (!catalog[existingIndex].summary && rosterEntry.summary) {
        catalog[existingIndex].summary = rosterEntry.summary;
      }
      continue;
    }

    catalog.push({
      id: rosterEntry.id,
      name: rosterEntry.name,
      path: `sheet:${rosterEntry.id}`,
      source: 'contractor-sheet',
      summary: rosterEntry.summary,
      headings: rosterEntry.headings,
      section: rosterEntry.section,
      sheetName: rosterEntry.sheetName
    });
    seenIds.add(rosterEntry.id);
  }

  return catalog;
}

function buildContractorKnowledge({ manualFormsIndexPath, manualFormsDocsPath, contractorRosterPath }) {
  const catalog = buildContractorCatalog({ manualFormsIndexPath, manualFormsDocsPath, contractorRosterPath });
  const files = catalog
    .filter((entry) => entry.source === 'manual-forms')
    .map((entry) => entry.path)
    .filter(Boolean);

  const rosterSections = catalog
    .filter((entry) => entry.source === 'contractor-sheet' && entry.section)
    .map((entry) => ({
      title: entry.name,
      section: entry.section,
      links: [],
      sourcePath: entry.path
    }));

  if (files.length === 0) {
    return {
      catalog,
      index: { sections: rosterSections },
      byId: new Map(catalog.map((entry) => [entry.id, entry]))
    };
  }

  const [firstFile, ...remainingFiles] = files;
  const fileIndex = buildWorkflowIndex(firstFile, {
    extraMarkdownFiles: remainingFiles
  });

  const index = {
    ...fileIndex,
    sections: [...(Array.isArray(fileIndex.sections) ? fileIndex.sections : []), ...rosterSections]
  };

  return {
    catalog,
    index,
    byId: new Map(catalog.map((entry) => [entry.id, entry]))
  };
}

function searchContractorKnowledge(knowledge, query, options = {}) {
  const baseSections = Array.isArray(knowledge?.index?.sections) ? knowledge.index.sections : [];
  const contractorId = String(options.contractorId || '').trim();
  const limit = Math.max(1, Number(options.limit || 3));
  const allowFallback = options.allowFallback !== false;

  let sections = baseSections;
  if (contractorId) {
    const contractor = knowledge?.byId?.get(contractorId);
    if (!contractor) {
      return [];
    }
    sections = baseSections.filter((section) => section.sourcePath === contractor.path);
  }

  return searchIndex({ sections }, query, limit, { allowFallback });
}

function findMentionedContractors(catalog, query) {
  const normalizedQuery = String(query || '').toLowerCase();
  if (!normalizedQuery) return [];

  return (Array.isArray(catalog) ? catalog : []).filter((contractor) => {
    const name = String(contractor?.name || '').toLowerCase();
    return !!name && normalizedQuery.includes(name);
  });
}

module.exports = {
  buildContractorCatalog,
  buildContractorKnowledge,
  searchContractorKnowledge,
  findMentionedContractors,
  slugifyContractorId,
  extractContractorSections,
  summarizeContractorSections
};