# Arquitectura

Este repositorio es agnostico para agentes y LLMs. Usa un contrato universal de paquetes de rol y, cuando estan disponibles, superficies especificas para agentes compatibles.

## Superficies

```text
AGENTS.md
.agents/skills/
.codex/agents/
roles/
scripts/
templates/
schemas/
docs/
```

## Responsabilidades

`AGENTS.md` es el router principal para cualquier LLM o agente que entre al repositorio. Debe contener suficiente pipeline para trabajar sin depender de una superficie concreta.

`.agents/skills/` contiene workflows invocables para entornos compatibles con skills:

- `$role-creator`: crear, investigar, actualizar y validar roles.
- `$use-role`: aplicar roles existentes.

`.codex/agents/` contiene workers opcionales para entornos que soporten subagentes:

- `role-researcher`: worker de research profundo.

`roles/` contiene los productos finales versionados.

`scripts/` contiene operaciones deterministas: crear paquete, resolver rol, validar, indexar y exportar.

## Paquete de rol

Cada rol vive en:

```text
roles/<categoria>/<subcategoria>/<role-id>/
```

Debe contener:

```text
role.yaml
SKILL.md
PROMPT.md
references/sources.md
references/frameworks.md
references/bibliography.md
references/glossary.md
references/playbooks.md
evals/cases.md
evals/rubric.md
CHANGELOG.md
```

## Regla de arquitectura

No crear capas intermedias para workflows. Si un agente compatible debe invocarlo como skill, vive en `.agents/skills`. Si debe lanzarse como worker o subagente, vive en `.codex/agents`. Si es resultado final, vive en `roles/`.
