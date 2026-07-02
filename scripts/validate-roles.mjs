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

const forbiddenRoleContent = [
  { pattern: /__ROLE_|__PLACEHOLDER__/i, label: "template placeholder token" },
  { pattern: /https:\/\/example\.com/i, label: "example.com source URL" },
  { pattern: /Describir aqui/i, label: "generic evaluation placeholder" },
  { pattern: /Titulo de la fuente/i, label: "generic source placeholder" },
  { pattern: /Nombre del playbook/i, label: "generic playbook placeholder" },
  { pattern: /Usuarios que necesitan este rol experto/i, label: "generic target user placeholder" }
];

const validStatuses = new Set(["draft", "active", "needs-review", "deprecated"]);
const validSpecificity = new Set(["medium", "high", "very-high"]);
const errors = [];
const warnings = [];
const roleMetadata = [];

const roleDirs = findRoleDirs().sort((a, b) => normalizePath(a).localeCompare(normalizePath(b)));
if (roleDirs.length === 0) {
  errors.push("No roles found under roles/.");
}

for (const dir of roleDirs) {
  const metadata = validateRole(dir);
  if (metadata) roleMetadata.push({ dir, metadata });
}

validateIndex(roleMetadata);

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
      errors.push(`${normalizePath(dir)}: missing ${file}`);
    }
  }

  validateNoTemplateContent(dir);

  if (!exists(path.join(dir, "role.yaml"))) return null;
  const metadata = parseSimpleYaml(readText(path.join(dir, "role.yaml")));

  for (const key of requiredYaml) {
    if (metadata[key] === undefined || metadata[key] === "" || emptyArray(metadata[key])) {
      errors.push(`${normalizePath(dir)}/role.yaml: missing ${key}`);
    }
  }

  if (metadata.id && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(metadata.id)) {
    errors.push(`${normalizePath(dir)}/role.yaml: id must be kebab-case`);
  }

  if (metadata.id && path.basename(dir) !== metadata.id) {
    errors.push(`${normalizePath(dir)}/role.yaml: id must match directory name`);
  }

  if (metadata.category) {
    const expectedCategory = normalizePath(path.relative("roles", path.dirname(dir)));
    if (metadata.category !== expectedCategory) {
      errors.push(`${normalizePath(dir)}/role.yaml: category '${metadata.category}' must match '${expectedCategory}'`);
    }
  }

  if (metadata.version && !/^[0-9]+\.[0-9]+\.[0-9]+$/.test(metadata.version)) {
    errors.push(`${normalizePath(dir)}/role.yaml: version must be semver, e.g. 0.1.0`);
  }

  if (metadata.status && !validStatuses.has(metadata.status)) {
    errors.push(`${normalizePath(dir)}/role.yaml: invalid status '${metadata.status}'`);
  }

  if (metadata.specificity_level && !validSpecificity.has(metadata.specificity_level)) {
    errors.push(`${normalizePath(dir)}/role.yaml: invalid specificity_level '${metadata.specificity_level}'`);
  }

  if (metadata.last_reviewed && !/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(metadata.last_reviewed)) {
    errors.push(`${normalizePath(dir)}/role.yaml: last_reviewed must be YYYY-MM-DD`);
  }

  for (const listKey of ["target_users", "core_capabilities", "anti_generic_scope", "sources_required"]) {
    if (metadata[listKey] && !Array.isArray(metadata[listKey])) {
      errors.push(`${normalizePath(dir)}/role.yaml: ${listKey} must be a YAML list`);
    }
  }

  validateSkill(dir, metadata);
  validatePrompt(dir);
  validateReferences(dir);
  validateEvaluations(dir);
  return metadata;
}

function validateNoTemplateContent(dir) {
  for (const file of requiredFiles) {
    const fullPath = path.join(dir, file);
    if (!exists(fullPath)) continue;
    const text = readText(fullPath);
    for (const item of forbiddenRoleContent) {
      if (item.pattern.test(text)) {
        errors.push(`${normalizePath(fullPath)}: contains ${item.label}`);
      }
    }
  }
}

function validateSkill(dir, metadata) {
  const skillPath = path.join(dir, "SKILL.md");
  if (!exists(skillPath)) return;
  const { data, body } = parseFrontmatter(readText(skillPath));
  if (!data.name) errors.push(`${normalizePath(skillPath)}: missing frontmatter name`);
  if (!data.description) errors.push(`${normalizePath(skillPath)}: missing frontmatter description`);
  if (data.name && data.name !== metadata.id) {
    errors.push(`${normalizePath(skillPath)}: frontmatter name must match role id`);
  }
  if (data.description && data.description.length < 80) {
    warnings.push(`${normalizePath(skillPath)}: description is short; include what it does and when to use it`);
  }
  if (body.length > 20000) {
    warnings.push(`${normalizePath(skillPath)}: body is long; move detail to references/`);
  }
}

function validatePrompt(dir) {
  const promptPath = path.join(dir, "PROMPT.md");
  if (!exists(promptPath)) return;
  const text = readText(promptPath);
  if (!/Actua como|Act as/i.test(text)) {
    warnings.push(`${normalizePath(promptPath)}: should define the role behavior explicitly`);
  }
}

function validateReferences(dir) {
  const sourcesPath = path.join(dir, "references/sources.md");
  const frameworksPath = path.join(dir, "references/frameworks.md");
  const playbooksPath = path.join(dir, "references/playbooks.md");

  if (exists(sourcesPath)) {
    const text = readText(sourcesPath);
    if (!/https?:\/\//i.test(text)) {
      warnings.push(`${normalizePath(sourcesPath)}: should include source URLs, not only source names`);
    }
    if (!/Fecha de consulta|consultad[oa]|accessed|retrieved/i.test(text)) {
      warnings.push(`${normalizePath(sourcesPath)}: should include consultation dates for used sources`);
    }
  }

  if (exists(frameworksPath)) {
    const text = readText(frameworksPath);
    if (!/Cuando usarlo|Cuándo usarlo|When to use|Limites|Límites|Pasos|Steps/i.test(text)) {
      warnings.push(`${normalizePath(frameworksPath)}: frameworks should explain when to use them, steps, and limits`);
    }
  }

  if (exists(playbooksPath)) {
    const text = readText(playbooksPath);
    if (!/Inputs necesarios|Pasos|Output esperado|Senales de error|Señales de error|Steps/i.test(text)) {
      warnings.push(`${normalizePath(playbooksPath)}: playbooks should include inputs, steps, output, and failure signals`);
    }
  }
}

function validateEvaluations(dir) {
  const casesPath = path.join(dir, "evals/cases.md");
  const rubricPath = path.join(dir, "evals/rubric.md");
  if (exists(casesPath) && !readText(casesPath).includes("## Caso")) {
    errors.push(`${normalizePath(casesPath)}: must contain at least one '## Caso' section`);
  }
  if (exists(casesPath)) {
    const caseCount = (readText(casesPath).match(/^## Caso/gm) || []).length;
    if (caseCount < 2) warnings.push(`${normalizePath(casesPath)}: should include at least 2 cases, including one edge case`);
  }
  if (exists(rubricPath) && !readText(rubricPath).match(/\b0\b|\b5\b/)) {
    warnings.push(`${normalizePath(rubricPath)}: should include a 0-5 scoring scale`);
  }
}

function validateIndex(roles) {
  const indexPath = path.join("indexes", "roles.json");
  if (!exists(indexPath)) {
    warnings.push("indexes/roles.json is missing; run npm run index");
    return;
  }

  let index;
  try {
    index = JSON.parse(readText(indexPath));
  } catch (error) {
    errors.push(`indexes/roles.json: invalid JSON (${error.message})`);
    return;
  }

  const indexedRoles = Array.isArray(index.roles) ? index.roles : null;
  if (!indexedRoles) {
    errors.push("indexes/roles.json: missing roles array");
    return;
  }

  const actualByPath = new Map(roles.map((role) => [normalizePath(role.dir), role]));
  const actualById = new Map(roles.map((role) => [role.metadata.id, role]));
  const indexedPaths = new Set();
  const indexedIds = new Set();

  for (const role of indexedRoles) {
    const rolePath = normalizePath(role.path || "");
    indexedPaths.add(rolePath);
    indexedIds.add(role.id);

    if (!role.id || !role.path) {
      errors.push("indexes/roles.json: each role must include id and path");
      continue;
    }

    if (!exists(path.join(rolePath, "role.yaml"))) {
      errors.push(`indexes/roles.json: indexed role path does not exist: ${rolePath}`);
    }

    const actual = actualByPath.get(rolePath);
    if (!actual) {
      errors.push(`indexes/roles.json: stale or unexpected role path: ${rolePath}`);
      continue;
    }

    if (role.id !== actual.metadata.id) {
      errors.push(`indexes/roles.json: id '${role.id}' does not match ${rolePath}/role.yaml id '${actual.metadata.id}'`);
    }
  }

  for (const role of roles) {
    const rolePath = normalizePath(role.dir);
    if (!indexedPaths.has(rolePath)) {
      errors.push(`indexes/roles.json: missing role path: ${rolePath}`);
    }
    if (!indexedIds.has(role.metadata.id)) {
      errors.push(`indexes/roles.json: missing role id: ${role.metadata.id}`);
    }
  }
}

function normalizePath(value) {
  return String(value).replace(/\\/g, "/");
}

function emptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}