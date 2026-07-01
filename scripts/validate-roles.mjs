#!/usr/bin/env node
import path from "node:path";
import {
  exists,
  findRoleDirs,
  parseFrontmatter,
  parseSimpleYaml,
  readText
} from "./lib.mjs";

const requiredFiles = [
  "role.yaml",
  "SKILL.md",
  "PROMPT.md",
  "references/sources.md",
  "references/frameworks.md",
  "references/bibliography.md",
  "references/glossary.md",
  "references/playbooks.md",
  "evals/cases.md",
  "evals/rubric.md",
  "CHANGELOG.md"
];

const requiredYaml = [
  "id",
  "name",
  "category",
  "version",
  "status",
  "specificity_level",
  "last_reviewed",
  "freshness_policy",
  "target_users",
  "core_capabilities",
  "anti_generic_scope",
  "sources_required"
];

const validStatuses = new Set(["draft", "active", "needs-review", "deprecated"]);
const validSpecificity = new Set(["medium", "high", "very-high"]);
const errors = [];
const warnings = [];

const roleDirs = findRoleDirs();
if (roleDirs.length === 0) {
  errors.push("No roles found under roles/.");
}

for (const dir of roleDirs) {
  validateRole(dir);
}

if (warnings.length) {
  console.warn("Warnings:");
  for (const warning of warnings) console.warn(`- ${warning}`);
}

if (errors.length) {
  console.error("Validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validation passed: ${roleDirs.length} role(s).`);

function validateRole(dir) {
  for (const file of requiredFiles) {
    if (!exists(path.join(dir, file))) {
      errors.push(`${dir}: missing ${file}`);
    }
  }

  if (!exists(path.join(dir, "role.yaml"))) return;
  const metadata = parseSimpleYaml(readText(path.join(dir, "role.yaml")));

  for (const key of requiredYaml) {
    if (metadata[key] === undefined || metadata[key] === "" || emptyArray(metadata[key])) {
      errors.push(`${dir}/role.yaml: missing ${key}`);
    }
  }

  if (metadata.id && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(metadata.id)) {
    errors.push(`${dir}/role.yaml: id must be kebab-case`);
  }

  if (metadata.id && path.basename(dir) !== metadata.id) {
    errors.push(`${dir}/role.yaml: id must match directory name`);
  }

  if (metadata.category) {
    const expectedCategory = path
      .relative("roles", path.dirname(dir))
      .replace(/\\/g, "/");
    if (metadata.category !== expectedCategory) {
      errors.push(`${dir}/role.yaml: category '${metadata.category}' must match '${expectedCategory}'`);
    }
  }

  if (metadata.version && !/^[0-9]+\.[0-9]+\.[0-9]+$/.test(metadata.version)) {
    errors.push(`${dir}/role.yaml: version must be semver, e.g. 0.1.0`);
  }

  if (metadata.status && !validStatuses.has(metadata.status)) {
    errors.push(`${dir}/role.yaml: invalid status '${metadata.status}'`);
  }

  if (metadata.specificity_level && !validSpecificity.has(metadata.specificity_level)) {
    errors.push(`${dir}/role.yaml: invalid specificity_level '${metadata.specificity_level}'`);
  }

  if (metadata.last_reviewed && !/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(metadata.last_reviewed)) {
    errors.push(`${dir}/role.yaml: last_reviewed must be YYYY-MM-DD`);
  }

  for (const listKey of ["target_users", "core_capabilities", "anti_generic_scope", "sources_required"]) {
    if (metadata[listKey] && !Array.isArray(metadata[listKey])) {
      errors.push(`${dir}/role.yaml: ${listKey} must be a YAML list`);
    }
  }

  validateSkill(dir, metadata);
  validatePrompt(dir);
  validateEvaluations(dir);
}

function validateSkill(dir, metadata) {
  const skillPath = path.join(dir, "SKILL.md");
  if (!exists(skillPath)) return;
  const { data, body } = parseFrontmatter(readText(skillPath));
  if (!data.name) errors.push(`${skillPath}: missing frontmatter name`);
  if (!data.description) errors.push(`${skillPath}: missing frontmatter description`);
  if (data.name && data.name !== metadata.id) {
    errors.push(`${skillPath}: frontmatter name must match role id`);
  }
  if (data.description && data.description.length < 80) {
    warnings.push(`${skillPath}: description is short; include what it does and when to use it`);
  }
  if (body.length > 20000) {
    warnings.push(`${skillPath}: body is long; move detail to references/`);
  }
}

function validatePrompt(dir) {
  const promptPath = path.join(dir, "PROMPT.md");
  if (!exists(promptPath)) return;
  const text = readText(promptPath);
  if (!/Actua como|Act as/i.test(text)) {
    warnings.push(`${promptPath}: should define the role behavior explicitly`);
  }
}

function validateEvaluations(dir) {
  const casesPath = path.join(dir, "evals/cases.md");
  const rubricPath = path.join(dir, "evals/rubric.md");
  if (exists(casesPath) && !readText(casesPath).includes("## Caso")) {
    errors.push(`${casesPath}: must contain at least one '## Caso' section`);
  }
  if (exists(rubricPath) && !readText(rubricPath).match(/\b0\b|\b5\b/)) {
    warnings.push(`${rubricPath}: should include a 0-5 scoring scale`);
  }
}

function emptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}

