# Roles

Banco agnostico de roles expertos para agentes de IA.

Este repositorio no es una coleccion de prompts sueltos. Es un sistema para crear, versionar, validar y consumir paquetes de roles especializados por cualquier agente o LLM: Codex, Claude Code, ChatGPT, Gemini, Aider, agentes propios o futuros clientes compatibles con Agent Skills/MCP.

## Principios

- Roles especificos, no genericos.
- Cada rol tiene prompt, skill, metadatos, fuentes, frameworks y evaluaciones.
- Cada rol es vivo: se revisa, versiona y actualiza con nuevas fuentes.
- El formato canonico es independiente del proveedor.
- La compatibilidad con Agent Skills se mantiene mediante `SKILL.md`.
- La portabilidad universal se mantiene mediante `PROMPT.md`.

## Estructura

```text
roles/
  <categoria>/<role-slug>/
    role.yaml
    SKILL.md
    PROMPT.md
    references/
      sources.md
      frameworks.md
      bibliography.md
      glossary.md
      playbooks.md
    evals/
      cases.md
      rubric.md
    CHANGELOG.md

creator/
  role-creator/
    SKILL.md
    references/
    scripts/

schemas/
  role.schema.json

templates/
  role-package/

scripts/
  validate-roles.mjs
  create-role.mjs
  build-index.mjs
  export-role.mjs

docs/
```

## Uso rapido

Validar todos los roles:

```bash
npm run validate
```

Reconstruir el indice:

```bash
npm run index
```

Crear un rol desde plantilla:

```bash
node scripts/create-role.mjs --category marketing/seo --slug seo-ai-overviews-technical-senior --name "Experto senior en SEO tecnico para AI Overviews"
```

Exportar un rol a un prompt standalone:

```bash
node scripts/export-role.mjs roles/marketing/seo-ai-overviews-technical-senior
```

## Que es un rol valido

Un rol valido debe incluir:

- `role.yaml` con metadatos estructurados.
- `SKILL.md` compatible con Agent Skills.
- `PROMPT.md` copiable en cualquier LLM.
- Fuentes, frameworks, bibliografia, glosario y playbooks.
- Casos de evaluacion y rubrica.
- `CHANGELOG.md` con historial de cambios.

## Preparado para GitHub

Repositorio remoto previsto:

```text
https://github.com/seoutopico/roles.git
```

Antes de subir:

```bash
npm run validate
npm run index
git add .
git commit -m "Initial roles system"
git push -u origin main
```

