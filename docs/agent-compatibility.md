# Compatibilidad con agentes

## Codex

Codex lee `AGENTS.md` y descubre skills repo-scoped en `.agents/skills/`.

Skills disponibles:

```text
$role-creator
$use-role
```

Ver `docs/using-with-codex.md`.

## Claude Code

Claude Code lee `CLAUDE.md` y descubre skills de proyecto en `.claude/skills/`.

Skills disponibles:

```text
/role-creator
/use-role
```

Ver `docs/using-with-claude-code.md`.

## Cualquier LLM

Usar `PROMPT.md` dentro de cada rol.

## Agent Skills

Cada rol incluye su propio `SKILL.md` para mantener un formato de workflow compatible con el estandar de skills, pero las skills que activan el sistema desde Codex/Claude son las de `.agents/skills/` y `.claude/skills/`.

## MCP futuro

El formato `role.yaml` + `PROMPT.md` + `references/` permite exponer roles como recursos/prompts en un servidor MCP futuro.