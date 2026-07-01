---
name: role-creator
description: Creates, updates, and validates highly specific expert role packages for AI agents. Use when the user wants a new role, a living role update, role research, role specialization, role packaging, or conversion of vague expertise into a concrete reusable role.
---

# Role Creator

Crear paquetes de roles expertos bajo `roles/<categoria>/<role-slug>/` usando el estandar de este repositorio.

## Flujo

1. Reformular la necesidad hasta convertirla en un rol concreto.
2. Rechazar roles genericos o pedir mas contexto si no se puede concretar.
3. Investigar fuentes actuales y separar fuentes primarias, expertos, frameworks, libros, papers y casos practicos.
4. Generar o actualizar el paquete completo: `role.yaml`, `SKILL.md`, `PROMPT.md`, `references/`, `evals/`, `CHANGELOG.md`.
5. Ejecutar `npm run validate` y `npm run index`.
6. Explicar que se creo, que fuentes faltan y que debe revisarse.

## Reglas de especificidad

Un rol valido debe tener dominio, contexto operativo, audiencia, problema concreto y limites. Si la peticion dice "experto en X", convertirla a un rol como:

```text
Experto senior en <subdominio> para <problema concreto> en <tipo de organizacion/caso> con <restricciones relevantes>.
```

Usar `references/specificity-checklist.md` para evaluar si el rol esta listo.

## Investigacion

Usar `references/research-protocol.md` para buscar y sintetizar informacion. No inventar fuentes. Si no hay navegacion disponible, dejar marcadores claros en `references/sources.md` con `PENDIENTE_VERIFICAR`.

## Generacion

Para crear el paquete base, ejecutar:

```bash
node scripts/create-role.mjs --category <categoria> --slug <slug> --name "<nombre>"
```

Despues editar todos los archivos generados. No dejar placeholders.

## Validacion

Antes de finalizar:

```bash
npm run validate
npm run index
```

Si un rol no supera la validacion, corregir el paquete antes de responder.
