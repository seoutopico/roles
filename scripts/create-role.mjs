#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { copyTemplateDir, slugify, todayIso } from "./lib.mjs";

const args = parseArgs(process.argv.slice(2));

if (!args.category || !args.name) {
  fail("Usage: node scripts/create-role.mjs --category marketing/seo --slug role-slug --name \"Role name\"");
}

const slug = args.slug ? slugify(args.slug) : slugify(args.name);
if (!slug) fail("Could not derive a valid slug.");

const category = args.category.replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
if (!/^[a-z0-9-]+(\/[a-z0-9-]+)*$/.test(category)) {
  fail("Category must use lowercase kebab-case path segments, e.g. marketing/seo.");
}

const target = path.join("roles", ...category.split("/"), slug);
if (fs.existsSync(target)) fail(`Role already exists: ${target}`);

copyTemplateDir("templates/role-package", target, {
  "__ROLE_SLUG__": slug,
  "__ROLE_NAME__": args.name,
  "__CATEGORY__": category,
  "__TODAY__": todayIso(),
  "__TARGET_USER__": args.targetUser || "Usuarios que necesitan este rol experto"
});

console.log(`Created role package: ${target}`);

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) continue;
    const key = arg.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    out[key] = argv[i + 1];
    i += 1;
  }
  return out;
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

