#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const query = process.argv.slice(2).join(" ").trim().toLowerCase();

if (!query) {
  console.error("Usage: node scripts/resolve-role.mjs <role-id-or-text>");
  process.exit(1);
}

const indexPath = path.join("indexes", "roles.json");
if (!fs.existsSync(indexPath)) {
  console.error("Missing indexes/roles.json. Run: npm run index");
  process.exit(1);
}

const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
const roles = index.roles || [];
const normalized = normalize(query);

const exact = roles.find((role) => normalize(role.id) === normalized || normalize(role.path) === normalized);
const partial = roles.find((role) => normalize(role.id).includes(normalized) || normalize(role.name).includes(normalized) || normalize(role.path).includes(normalized));
const role = exact || partial;

if (!role) {
  console.error(`Role not found: ${query}`);
  console.error("Available roles:");
  for (const item of roles) console.error(`- ${item.id}: ${item.path}`);
  process.exit(1);
}

const rolePath = role.path;
const required = [
  "role.yaml",
  "SKILL.md",
  "PROMPT.md"
].map((file) => path.join(rolePath, file).replace(/\\/g, "/"));

const optional = [
  "references/sources.md",
  "references/frameworks.md",
  "references/playbooks.md",
  "references/glossary.md",
  "evals/cases.md",
  "evals/rubric.md",
  "CHANGELOG.md"
].map((file) => path.join(rolePath, file).replace(/\\/g, "/"));

console.log(`ROLE_ID=${role.id}`);
console.log(`ROLE_NAME=${role.name}`);
console.log(`ROLE_PATH=${role.path}`);
console.log("");
console.log("READ_ALWAYS:");
for (const file of required) console.log(`- ${file}`);
console.log("");
console.log("READ_AS_NEEDED:");
for (const file of optional) console.log(`- ${file}`);

function normalize(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\\/g, "/")
    .trim();
}