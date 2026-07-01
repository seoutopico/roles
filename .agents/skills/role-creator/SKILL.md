---
name: role-creator
description: Crear, investigar, actualizar y validar paquetes de roles expertos en este repositorio. Usar cuando el usuario pida crear un rol, hacer un rol mas especifico, mantener un rol vivo, actualizar fuentes, anadir evals o convertir una necesidad vaga en un rol reutilizable para agentes IA.
---

# Role Creator

Crear o actualizar paquetes de roles expertos bajo `roles/<categoria>/<subcategoria>/<role-id>/`.

## Entrada

La peticion del usuario puede ser vaga. Convertirla en un rol especifico antes de crear archivos.

Mal:

```text
Experto en SEO
```

Bien:

```text
Experto senior en SEO tecnico para diagnosticar perdida de CTR por Google AI Overviews en publishers editoriales.
```

## Workflow

1. Leer `AGENTS.md`.
2. Si se necesita detalle, leer:
   - `creator/role-creator/references/specificity-checklist.md`
   - `creator/role-creator/references/research-protocol.md`
   - `creator/role-creator/references/output-contract.md`
3. Reformular el rol hasta que tenga dominio, audiencia, problema, contexto y limites.
4. Si el dominio cambia con frecuencia, buscar fuentes actuales y registrarlas con fecha de consulta.
5. Crear paquete base:

```bash
node scripts/create-role.mjs --category <categoria/subcategoria> --slug <role-id> --name "<nombre especifico>"
```

6. Completar:
   - `role.yaml`
   - `SKILL.md`
   - `PROMPT.md`
   - `references/sources.md`
   - `references/frameworks.md`
   - `references/bibliography.md`
   - `references/glossary.md`
   - `references/playbooks.md`
   - `evals/cases.md`
   - `evals/rubric.md`
   - `CHANGELOG.md`
7. Ejecutar:

```bash
npm run validate
npm run index
```

8. Responder con ruta del rol, id, comandos de uso y validaciones ejecutadas.

## Reglas

- No dejar placeholders.
- No inventar fuentes.
- No crear roles genericos.
- No prometer resultados deterministas.
- Mantener `PROMPT.md` copiable fuera del repo.
- Mantener `SKILL.md` conciso y orientado a workflow.
- Mantener `evals/` capaces de detectar respuestas genericas.