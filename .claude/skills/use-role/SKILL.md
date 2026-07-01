---
name: use-role
description: Cargar y aplicar un rol experto existente del banco de roles. Usar cuando el usuario pida usar, activar, aplicar, responder como, auditar con, evaluar con o trabajar desde un rol guardado en roles/ o indexes/roles.json.
---

# Use Role

Aplicar un rol existente del repositorio.

## Workflow

1. Resolver el rol:

```bash
npm run resolve -- $ARGUMENTS
```

2. Leer `role.yaml`, `SKILL.md` y `PROMPT.md` del rol resuelto.
3. Leer referencias solo si hacen falta.
4. Responder o trabajar como ese rol.

## Evaluacion

Si el usuario pide evaluar el rol, leer `evals/cases.md` y `evals/rubric.md`.

## Reglas

- No modificar archivos salvo peticion explicita.
- No responder como generalista.
- Declarar datos faltantes, limites y supuestos.