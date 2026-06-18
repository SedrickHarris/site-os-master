#!/usr/bin/env node
// Site OS - cluster-keywords.mjs
// Reads docs/seo/normalized-keywords.json and groups keywords into topic clusters by
// service, location, audience, problem, comparison, cost, and emergency patterns.
// Writes docs/seo/keyword-clusters.json. Zero dependencies. Run from the client repo root.
// No fake data: metrics summaries only aggregate values that were actually supplied in the CSV.

import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const INPUT_FILE = path.join(ROOT, "docs", "seo", "normalized-keywords.json");
const OUTPUT_DIR = path.join(ROOT, "docs", "seo");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "keyword-clusters.json");

const warnings = [];

const MODIFIERS = {
  cost: ["how much", "cost", "costs", "price", "prices", "pricing", "cheap", "affordable", "quote", "estimate", "rates", "fee", "fees"],
  emergency: ["emergency", "24 hour", "24/7", "same day", "urgent", "immediate", "tonight"],
  comparison: ["vs", "versus", "best", "top", "compare", "comparison", "alternative", "alternatives", "reviews", "review"],
  audience: ["residential", "commercial", "business", "businesses", "home", "homeowner", "homeowners", "family", "office"],
  problem: ["how to", "how do", "why", "fix", "repair", "problem", "problems", "issue", "issues", "broken", "leak", "clogged"],
  location: ["near me", "nearby", "near you"],
};

const STOPWORDS = new Set([
  "a", "an", "the", "and", "or", "of", "for", "to", "in", "on", "at", "with",
  "my", "your", "is", "are", "do", "does", "i", "me", "you", "it", "that", "this",
  "near", "me", "best", "top", "vs", "versus", "how", "much", "what", "why",
]);

function rel(p) {
  return path.relative(ROOT, p).split(path.sep).join("/");
}

function titleCase(text) {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function detectModifiers(keywordLower) {
  const matched = [];
  const categories = new Set();
  for (const [category, phrases] of Object.entries(MODIFIERS)) {
    for (const phrase of phrases) {
      const re = new RegExp(`(^|\\b)${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(\\b|$)`);
      if (re.test(keywordLower)) {
        matched.push(phrase);
        categories.add(category);
      }
    }
  }
  // "in <place>" is a soft local signal without inventing the place name.
  if (/\bin\s+[a-z]/.test(keywordLower)) categories.add("location");
  return { matched, categories };
}

function baseTokens(keywordLower) {
  const modifierWords = new Set();
  for (const phrases of Object.values(MODIFIERS)) {
    for (const phrase of phrases) {
      for (const w of phrase.split(/\s+/)) modifierWords.add(w);
    }
  }
  return keywordLower
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .filter((t) => !STOPWORDS.has(t))
    .filter((t) => !modifierWords.has(t))
    .filter((t) => !/^\d+$/.test(t));
}

function intentHintsFromCategories(categories) {
  const hints = [];
  if (categories.has("cost")) hints.push("transactional");
  if (categories.has("emergency")) hints.push("urgent");
  if (categories.has("comparison")) hints.push("commercial-comparison");
  if (categories.has("audience")) hints.push("audience-specific");
  if (categories.has("problem")) hints.push("informational");
  if (categories.has("location")) hints.push("local");
  if (!hints.length) hints.push("general");
  return Array.from(new Set(hints));
}

function pickPrimary(members) {
  const withVolume = members.filter((m) => m.avgMonthlySearches !== null);
  if (withVolume.length) {
    return withVolume.sort((a, b) => b.avgMonthlySearches - a.avgMonthlySearches)[0].keyword;
  }
  return members
    .slice()
    .sort((a, b) => a.keyword.split(/\s+/).length - b.keyword.split(/\s+/).length || a.keyword.length - b.keyword.length)[0].keyword;
}

function buildMetricsSummary(members) {
  const volumes = members.map((m) => m.avgMonthlySearches).filter((v) => v !== null);
  const dataAvailable = volumes.length > 0;
  return {
    dataAvailable,
    keywordCount: members.length,
    keywordsWithVolume: volumes.length,
    totalAvgMonthlySearches: dataAvailable ? volumes.reduce((a, b) => a + b, 0) : null,
    maxAvgMonthlySearches: dataAvailable ? Math.max(...volumes) : null,
    note: dataAvailable
      ? "Aggregated only from supplied Keyword Planner volumes."
      : "No numeric volume supplied. Volume is not estimated or invented.",
  };
}

async function main() {
  let parsed;
  try {
    const raw = await fs.readFile(INPUT_FILE, "utf8");
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(
      `Could not read ${rel(INPUT_FILE)} (${err.code || err.message}). ` +
        "Run parse-keyword-csv.mjs first."
    );
  }

  const keywords = Array.isArray(parsed.keywords) ? parsed.keywords : [];
  if (!keywords.length) {
    warnings.push("normalized-keywords.json contains no keywords. Writing an empty cluster set.");
  }

  const groups = new Map();
  for (const kw of keywords) {
    const original = typeof kw.keyword === "string" ? kw.keyword : "";
    if (!original) continue;
    const lower = original.toLowerCase();
    const tokens = baseTokens(lower);
    const key = tokens.slice().sort().join(" ") || "general";
    if (!groups.has(key)) groups.set(key, { tokens, members: [] });
    groups.get(key).members.push({
      keyword: original,
      avgMonthlySearches: typeof kw.avgMonthlySearches === "number" ? kw.avgMonthlySearches : null,
      lower,
    });
  }

  const clusters = [];
  let index = 0;
  for (const [key, group] of groups.entries()) {
    index++;
    const members = group.members;
    const modifierSet = new Set();
    const categorySet = new Set();
    for (const m of members) {
      const { matched, categories } = detectModifiers(m.lower);
      matched.forEach((x) => modifierSet.add(x));
      categories.forEach((c) => categorySet.add(c));
    }
    const primaryKeyword = pickPrimary(members);
    const clusterName = key === "general" ? titleCase(primaryKeyword) : titleCase(group.tokens.join(" "));
    clusters.push({
      clusterId: `c-${String(index).padStart(3, "0")}`,
      clusterName,
      primaryKeyword,
      keywords: members.map((m) => m.keyword),
      modifiers: Array.from(modifierSet),
      intentHints: intentHintsFromCategories(categorySet),
      metricsSummary: buildMetricsSummary(members),
      notes:
        `Grouped on shared base tokens: ${group.tokens.join(", ") || "none"}. ` +
        "Clustering is a deterministic heuristic, not a semantic model.",
      _categories: Array.from(categorySet),
    });
  }

  clusters.sort((a, b) => {
    const av = a.metricsSummary.totalAvgMonthlySearches || 0;
    const bv = b.metricsSummary.totalAvgMonthlySearches || 0;
    if (bv !== av) return bv - av;
    return b.metricsSummary.keywordCount - a.metricsSummary.keywordCount;
  });

  // _categories is internal scoring context for score-opportunities.mjs; keep it on the record.
  const output = {
    generatedAt: new Date().toISOString(),
    clusterCount: clusters.length,
    clusters,
    warnings,
  };

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(output, null, 2) + "\n", "utf8");

  console.log(`OK: built ${clusters.length} cluster(s) into ${rel(OUTPUT_FILE)}.`);
  if (warnings.length) {
    console.warn(`WARN: ${warnings.length} warning(s):`);
    for (const w of warnings) console.warn(`  - ${w}`);
  }
}

main().catch((err) => {
  console.error(`ERROR: cluster-keywords failed: ${err && err.message ? err.message : err}`);
  process.exitCode = 1;
});
