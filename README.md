# Roles

Banco de roles expertos vivos para agentes de IA, preparado para Codex y Claude Code.

Este repositorio no es una app ni una coleccion de prompts sueltos. Es un sistema para crear, versionar, validar, mantener y usar paquetes de roles expertos.

## Uso rapido con Codex

Abrir Codex en la raiz del repositorio.

Codex usa:

```text
AGENTS.md
.agents/skills/role-creator/SKILL.md
.agents/skills/use-role/SKILL.md
```

Usar un rol:

```text
$use-role seo-ai-overviews-technical-senior
Analiza este caso: <caso>
```

Crear un rol:

```text
$role-creator Crea un rol experto sobre <necesidad>
```

Actualizar un rol:

```text
$role-creator Actualiza el rol seo-ai-overviews-technical-senior con fuentes actuales y mejora sus evals si hace falta.
```

## Uso rapido con Claude Code

Abrir Claude Code en la raiz del repositorio.

Claude usa:

```text
CLAUDE.md
.claude/skills/role-creator/SKILL.md
.claude/skills/use-role/SKILL.md
```

Usar un rol:

```text
/use-role seo-ai-overviews-technical-senior
Analiza este caso: <caso>
```

Crear un rol:

```text
/role-creator Crea un rol experto sobre <necesidad>
```

## Estructura

```text
AGENTS.md                         # Instrucciones persistentes para Codex
CLAUDE.md                         # Instrucciones persistentes para Claude Code
.agents/skills/                   # Skills reales para Codex
.claude/skills/                   # Skills reales para Claude Code
creator/role-creator/             # Material compartido del creador de roles
roles/                            # Banco de roles
schemas/                          # Contratos JSON
scripts/                          # Utilidades deterministas
docs/                             # Documentacion
```

Un rol vive en:

```text
roles/<categoria>/<subcategoria>/<role-id>/
  role.yaml
  SKILL.md
  PROMPT.md
  references/
  evals/
  CHANGELOG.md
```

## Comandos

Resolver un rol:

```bash
npm run resolve -- seo-ai-overviews-technical-senior
```

Validar:

```bash
npm run validate
```

Regenerar indice:

```bash
npm run index
```

Crear paquete base:

```bash
node scripts/create-role.mjs --category marketing/seo --slug seo-ai-overviews-technical-senior --name "Experto senior en SEO tecnico para AI Overviews"
```

Exportar prompt standalone:

```bash
node scripts/export-role.mjs roles/marketing/seo/seo-ai-overviews-technical-senior
```

## Rol inicial

```text
seo-ai-overviews-technical-senior
roles/marketing/seo/seo-ai-overviews-technical-senior
```

## GitHub

Remoto configurado:

```text
https://github.com/seoutopico/roles.git
```

Subir:

```bash
git push -u origin main
```