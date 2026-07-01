#!/usr/bin/env node
import path from "node:path";
import { findRoleDirs, parseSimpleYaml, readText, writeText } from "./lib.mjs";

const roles = findRoleDirs().map((dir) => {
  const metadata = parseSimpleYaml(readText(path.join(dir, "role.yaml")));
  return {
    id: metadata.id,
    name: metadata.name,
    category: metadata.category,
    version: metadata.version,
    status: metadata.status,
    specificity_level: metadata.specificity_level,
    last_reviewed: metadata.last_reviewed,
    path: dir.replace(/\\/g, "/"),
    prompt: path.join(dir, "PROMPT.md").replace(/\\/g, "/"),
    skill: path.join(dir, "SKILL.md").replace(/\\/g, "/")
  };
}).sort((a, b) => a.id.localeCompare(b.id));

writeText("indexes/roles.json", `${JSON.stringify({ roles }, null, 2)}\n`);

const markdown = [
  "# Roles Index",
  "",
  "| Role | Category | Status | Version | Path |",
  "| --- | --- | --- | --- | --- |",
  ...roles.map((role) => `| ${role.name} | ${role.category} | ${role.status} | ${role.version} | \`${role.path}\` |`),
  ""
].join("\n");

writeText("indexes/roles.md", markdown);
console.log(`Indexed ${roles.length} role(s).`);

