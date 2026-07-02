# Roles

Banco agnostico de roles expertos vivos para agentes de IA.

No es una app ni una coleccion de prompts sueltos. Es un sistema para crear, versionar, validar, mantener y usar paquetes de roles expertos.

## Superficies

```text
AGENTS.md
.agents/skills/role-creator/SKILL.md
.agents/skills/use-role/SKILL.md
.codex/agents/role-researcher.toml
```

## Uso rapido

Usar un rol:

```text
$use-role <role-id>
Analiza este caso: <caso>
```

Crear un rol:

```text
$role-creator Crea un rol experto sobre <necesidad>
```

Crear con research profundo:

```text
$role-creator Crea un rol experto sobre <necesidad> usando subagentes de research profundo.
```

## Estructura

```text
AGENTS.md                         # Router principal para cualquier LLM o agente
.agents/skills/                   # Skills invocables si el entorno las soporta
.codex/agents/                    # Workers opcionales para subagentes compatibles
roles/                            # Paquetes de roles
scripts/                          # Utilidades deterministas
templates/                        # Plantillas de paquetes
schemas/                          # Contratos estructurados
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

```bash
npm run resolve -- <role-id-o-texto>
npm run validate
npm run index
node scripts/create-role.mjs --category marketing/seo --slug geo-technical-seo-senior --name "Consultor senior en SEO tecnico y GEO para visibilidad en buscadores generativos"
node scripts/export-role.mjs roles/<categoria>/<subcategoria>/<role-id>
```
