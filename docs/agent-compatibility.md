# Compatibilidad Codex

## Skills

Codex descubre workflows repo-scoped en:

```text
.agents/skills/
```

Skills disponibles:

```text
$role-creator
$use-role
```

## Custom agents

Codex descubre custom agents de proyecto en:

```text
.codex/agents/
```

Custom agent disponible:

```text
role-researcher
```

`role-researcher` es un worker de investigacion. No crea roles finales y no edita archivos salvo instruccion explicita. Produce dossiers para que `$role-creator` sintetice evidencia, frameworks, playbooks, gaps y evals.

## Roles

Cada rol incluye su propio `SKILL.md` como workflow operativo del rol. Las skills que activan el sistema del repositorio son solo las de `.agents/skills/`.

## MCP futuro

El formato `role.yaml` + `PROMPT.md` + `references/` permite exponer roles como recursos/prompts en un servidor MCP futuro.
