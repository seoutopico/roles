---
name: role-creator
description: Crear, investigar, actualizar y validar paquetes de roles expertos en este repo agnostico para agentes. Usar cuando el usuario pida crear un rol, especializar una necesidad vaga, actualizar fuentes, mejorar evals o hacer research profundo con subagentes.
---

# Role Creator

Orquestador para crear o actualizar paquetes de roles expertos en `roles/<categoria>/<subcategoria>/<role-id>/`.

## Principio central

No escribas un rol desde intuicion generalista. Primero concreta el rol, despues investiga cuando haga falta, sintetiza evidencia y solo al final escribe archivos.

## Entradas vagas

Convertir peticiones genericas en roles con:

- dominio;
- subdominio;
- audiencia;
- problema operativo;
- contexto de uso;
- seniority o nivel de decision;
- limites explicitos.

Mal:

```text
Experto en SEO
```

Bien:

```text
Experto senior en SEO tecnico para diagnosticar perdida de CTR por Google AI Overviews en publishers editoriales.
```

## Archivos de apoyo de esta skill

Leer segun necesidad:

- `references/specificity-checklist.md`: cuando el rol aun suene generico.
- `references/research-protocol.md`: obligatorio si hay research, fuentes actuales, subagentes o dominio cambiante.
- `references/output-contract.md`: obligatorio antes de terminar.

## Research profundo con subagentes compatibles

El worker de research vive fuera de la skill. En esta implementacion esta disponible como custom agent:

```text
.codex/agents/role-researcher.toml
```

Usarlo como subagente solo si el entorno lo soporta y el usuario pide subagentes, paralelismo o delegacion explicita.

Si no hay permiso explicito para subagentes, ejecutar el protocolo en el hilo principal.

El worker no crea roles ni edita archivos. Devuelve dossiers por carril. Tu trabajo es sintetizar, decidir y escribir.

## Workflow

1. Construir un `Role Brief` con scope, audiencia, problema, contexto, limites y riesgo de generalismo.
2. Si el brief no pasa especificidad, leer `references/specificity-checklist.md` y concretar antes de crear archivos.
3. Decidir nivel de research: light, standard, deep o critical.
4. Si hay research, leer `references/research-protocol.md` y seguir sus fases.
5. Si el usuario pidio subagentes, lanzar `role-researcher` por carriles no solapados; si no, investigar localmente.
6. Sintetizar outputs en: domain map, source matrix, claim ledger, riesgos, frameworks, playbooks, evals, anti-generic scope y gaps.
7. Pasar el quality gate antes de crear o actualizar el paquete.
8. Crear paquete base si es rol nuevo:

```bash
node scripts/create-role.mjs --category <categoria/subcategoria> --slug <role-id> --name "<nombre especifico>"
```

9. Completar todos los archivos obligatorios:
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
10. Leer `references/output-contract.md` y corregir placeholders, fuentes flojas, gaps ocultos o evals genericas.
11. Ejecutar:

```bash
npm run validate
npm run index
```

12. Responder con ruta del rol, id, resumen de fuentes/gaps, validaciones ejecutadas y si se usaron subagentes.

## Reglas

- No dejar placeholders.
- No inventar fuentes.
- No crear roles genericos.
- No prometer resultados deterministas.
- No escribir el rol final antes de sintetizar research cuando el dominio lo requiera.
- No usar subagentes salvo que el usuario lo pida explicitamente.
- Mantener `PROMPT.md` portable.
- Mantener `SKILL.md` como workflow operativo del rol.
- Mantener `role.yaml` como contrato estructurado.
- Mantener `evals/` capaces de detectar respuestas genericas.
- Si no se cumple el quality gate, seguir investigando o marcar `needs-review` con gaps explicitos.
