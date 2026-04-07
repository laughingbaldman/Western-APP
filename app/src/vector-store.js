/**
 * File: Western Intel/app/src/vector-store.js
 * Purpose: Core project script/module.
 * What It Does: Implements workflow logic used by Western Intel.
 * Why It Exists: Keeps this behavior isolated and maintainable for technicians.
 * Connected To: fs
 * Notes: Auto-added explainability header; update with business-specific details as needed.
 */

const fs = require('fs');

const DIMENSIONS = 256;

function tokenize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length > 2);
}

function hashToken(token) {
  let hash = 0;
  for (let index = 0; index < token.length; index += 1) {
    hash = ((hash << 5) - hash) + token.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function normalize(vector) {
  const magnitude = Math.sqrt(vector.reduce((sum, value) => sum + (value * value), 0));
  if (magnitude === 0) return vector;
  return vector.map((value) => value / magnitude);
}

function cosineSimilarity(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) return 0;
  let dot = 0;
  for (let index = 0; index < a.length; index += 1) {
    dot += (a[index] * b[index]);
  }
  return dot;
}

function readJson(filePath) {
  try {
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2), 'utf8');
}

function createVectorStore(filePath) {
  function computeEmbedding(text) {
    const tokens = tokenize(text);
    const vector = new Array(DIMENSIONS).fill(0);

    tokens.forEach((token) => {
      const index = hashToken(token) % DIMENSIONS;
      vector[index] += 1;
    });

    return normalize(vector);
  }

  function upsert({ id, title, content }) {
    const vectors = readJson(filePath);
    const embedding = computeEmbedding(content);
    const next = vectors.filter((entry) => entry.id !== id);
    next.push({ id, title: String(title || ''), embedding });
    writeJson(filePath, next);
    return embedding;
  }

  function remove(id) {
    const vectors = readJson(filePath);
    const next = vectors.filter((entry) => entry.id !== id);
    writeJson(filePath, next);
  }

  function findMostSimilar(embedding, currentId) {
    const vectors = readJson(filePath);
    let best = null;

    vectors.forEach((entry) => {
      if (entry.id === currentId) return;
      const similarity = cosineSimilarity(embedding, entry.embedding);
      if (!best || similarity > best.similarity) {
        best = {
          id: entry.id,
          title: entry.title,
          similarity
        };
      }
    });

    return best;
  }

  return {
    computeEmbedding,
    upsert,
    remove,
    findMostSimilar
  };
}

module.exports = {
  createVectorStore
};
