#!/usr/bin/env node
const text = process.argv.slice(2).join(" ").trim();

if (!text) {
  console.error("Usage: node creator/role-creator/scripts/score-specificity.mjs \"role idea\"");
  process.exit(1);
}

const signals = [
  /\bsenior\b|\blead\b|\bprincipal\b|\bexperto\b/i,
  /\bpara\b/i,
  /\ben\b/i,
  /\bcon\b/i,
  /\bB2B\b|\bSaaS\b|\benterprise\b|\bpublisher/i,
  /\btecnico\b|\btechnical\b|\bestrateg/i,
  /\bAI Overviews\b|\bLLM\b|\bMCP\b|\bRAG\b|\bLinkedIn Ads\b/i
];

const score = signals.reduce((sum, pattern) => sum + (pattern.test(text) ? 1 : 0), 0);
const verdict = score >= 5 ? "specific" : score >= 3 ? "borderline" : "generic";

console.log(JSON.stringify({ score, max: signals.length, verdict, text }, null, 2));
