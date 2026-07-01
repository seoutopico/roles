import fs from "node:fs";
import path from "node:path";

export function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

export function writeText(filePath, text) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, text, "utf8");
}

export function exists(filePath) {
  return fs.existsSync(filePath);
}

export function walkDirs(root) {
  if (!exists(root)) return [];
  const out = [];
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    const full = path.join(root, entry.name);
    if (entry.isDirectory()) {
      out.push(full, ...walkDirs(full));
    }
  }
  return out;
}

export function findRoleDirs(root = "roles") {
  return walkDirs(root).filter((dir) => exists(path.join(dir, "role.yaml")));
}

export function parseSimpleYaml(text) {
  const result = {};
  const lines = text.replace(/\r\n/g, "\n").split("\n");
  let currentKey = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line.trim() || line.trim().startsWith("#")) continue;

    const listMatch = line.match(/^\s*-\s+(.*)$/);
    if (listMatch && currentKey) {
      if (!Array.isArray(result[currentKey])) result[currentKey] = [];
      result[currentKey].push(unquote(listMatch[1].trim()));
      continue;
    }

    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (keyMatch) {
      currentKey = keyMatch[1];
      const value = keyMatch[2].trim();
      result[currentKey] = value === "" ? [] : unquote(value);
    }
  }

  return result;
}

function unquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

export function parseFrontmatter(text) {
  const normalized = text.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) return { data: {}, body: normalized };
  const end = normalized.indexOf("\n---\n", 4);
  if (end === -1) return { data: {}, body: normalized };
  const fm = normalized.slice(4, end);
  const body = normalized.slice(end + 5);
  return { data: parseSimpleYaml(fm), body };
}

export function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/--+/g, "-");
}

export function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function replaceAllTokens(text, replacements) {
  let out = text;
  for (const [key, value] of Object.entries(replacements)) {
    out = out.split(key).join(value);
  }
  return out;
}

export function copyTemplateDir(src, dst, replacements) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const dstPath = path.join(dst, entry.name);
    if (entry.isDirectory()) {
      copyTemplateDir(srcPath, dstPath, replacements);
    } else {
      writeText(dstPath, replaceAllTokens(readText(srcPath), replacements));
    }
  }
}

