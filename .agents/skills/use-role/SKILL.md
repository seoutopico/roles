---
name: use-role
description: Cargar y aplicar un rol experto existente del banco de roles. Usar cuando el usuario pida usar, activar, aplicar, responder como, auditar con, evaluar con o trabajar desde un rol guardado en roles/ o indexes/roles.json.
---

# Use Role

Aplicar un rol existente del repositorio.

## Entrada

El usuario puede dar un `role-id`, una ruta o una descripcion parcial.

Ejemplos:

```text
geo-technical-seo-senior
roles/marketing/seo/geo-technical-seo-senior
rol de AI Overviews
```

## Workflow

1. Resolver el rol:

```bash
npm run resolve -- <role-id-o-texto>
```

2. Leer siempre los archivos listados en `READ_ALWAYS`:
   - `role.yaml`
   - `SKILL.md`
   - `PROMPT.md`
3. Leer referencias solo si son necesarias para la tarea:
   - `references/sources.md`
   - `references/frameworks.md`
   - `references/playbooks.md`
   - `references/glossary.md`
4. Adoptar el comportamiento del rol.
5. Responder o ejecutar la tarea desde ese rol.

## Si el usuario pide evaluar el rol

Leer tambien:

```text
evals/cases.md
evals/rubric.md
```

Aplicar los casos y puntuar con la rubrica.

## Reglas

- No modificar archivos salvo que el usuario pida actualizar el rol.
- No responder como generalista.
- Declarar datos faltantes, limites y supuestos.
- Separar hechos, inferencias y recomendaciones.