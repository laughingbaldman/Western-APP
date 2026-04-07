/**
 * File: Western Intel/app/src/indexer.js
 * Purpose: Core project script/module.
 * What It Does: Implements workflow logic used by Western Intel.
 * Why It Exists: Keeps this behavior isolated and maintainable for technicians.
 * Connected To: fs
 * Notes: Auto-added explainability header; update with business-specific details as needed.
 */

const fs = require('fs');

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'can', 'do', 'for', 'from',
  'how', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'me', 'my', 'not', 'of', 'on', 'or',
  'our', 'so', 'that', 'the', 'their', 'them', 'there', 'these', 'this', 'to', 'up', 'use',
  'using', 'we', 'what', 'when', 'where', 'which', 'who', 'why', 'with', 'you', 'your'
]);

function normalizeText(value) {
  return String(value || '')
    .replace(/\r/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function extractLinks(sectionText) {
  const links = [];
  const regex = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/gi;
  let match;
  while ((match = regex.exec(sectionText)) !== null) {
    links.push({
      text: (match[1] || '').trim(),
      url: (match[2] || '').trim()
    });
  }
  return links;
}

function buildSections(markdown) {
  const text = normalizeText(markdown);
  if (!text) return [];

  const lines = text.split('\n');
  const sections = [];
  let currentTitle = 'General';
  let currentLines = [];

  const flush = () => {
    const body = normalizeText(currentLines.join('\n'));
    if (!body) return;
    sections.push({
      title: currentTitle,
      section: body,
      links: extractLinks(body)
    });
  };

  for (const line of lines) {
    const heading = line.match(/^\s{0,3}#{1,6}\s+(.+)$/);
    if (heading) {
      flush();
      currentTitle = heading[1].trim();
      currentLines = [];
      continue;
    }
    currentLines.push(line);
  }

  flush();
  return sections;
}

function mergeSections(markdown, sourcePath, targetSections) {
  const sections = buildSections(markdown);
  const sourceLabel = sourcePath ? String(sourcePath) : '';
  sections.forEach((section) => {
    targetSections.push({
      ...section,
      sourcePath: sourceLabel
    });
  });
}

function tokenize(value) {
  return String(value || '')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length >= 3 && !STOP_WORDS.has(token));
}

function countOccurrences(text, token) {
  if (!text || !token) return 0;
  let count = 0;
  let index = 0;
  while (index >= 0) {
    index = text.indexOf(token, index);
    if (index < 0) break;
    count += 1;
    index += token.length;
  }
  return count;
}

function scoreSection(section, queryTokens) {
  const title = String(section.title || '').toLowerCase();
  const body = String(section.section || '').toLowerCase();
  let score = 0;

  for (const token of queryTokens) {
    if (!token) continue;
    const titleMatches = Math.min(3, countOccurrences(title, token));
    const bodyMatches = Math.min(10, countOccurrences(body, token));
    if (titleMatches > 0) score += titleMatches * 5;
    if (bodyMatches > 0) score += bodyMatches;
  }

  return score;
}

function buildWorkflowIndex(filePath, options = {}) {
  if (!filePath || !fs.existsSync(filePath)) {
    throw new Error('Knowledge base file not found');
  }

  const markdown = fs.readFileSync(filePath, 'utf8');
  const sections = [];

  mergeSections(markdown, filePath, sections);

  const extraMarkdownFiles = Array.isArray(options.extraMarkdownFiles)
    ? options.extraMarkdownFiles
    : [];

  for (const extraFile of extraMarkdownFiles) {
    if (!extraFile || extraFile === filePath) continue;
    if (!fs.existsSync(extraFile)) continue;

    try {
      const extraMarkdown = fs.readFileSync(extraFile, 'utf8');
      mergeSections(extraMarkdown, extraFile, sections);
    } catch {
      // Ignore unreadable supplemental files and continue indexing.
    }
  }

  return {
    filePath,
    sections,
    supplementalFiles: extraMarkdownFiles.length,
    builtAt: new Date().toISOString()
  };
}

function searchIndex(index, query, limit = 5, options = {}) {
  const sections = Array.isArray(index?.sections) ? index.sections : [];
  const queryTokens = tokenize(query);
  const allowFallback = options.allowFallback !== false;

  if (sections.length === 0) return [];
  if (queryTokens.length === 0) {
    return sections.slice(0, Math.max(1, limit));
  }

  const scored = sections
    .map(section => ({ section, score: scoreSection(section, queryTokens) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.max(1, limit))
    .map(item => item.section);

  if (scored.length > 0) return scored;
  if (allowFallback) {
    return sections.slice(0, Math.max(1, limit));
  }
  return [];
}

module.exports = {
  buildWorkflowIndex,
  searchIndex
};
