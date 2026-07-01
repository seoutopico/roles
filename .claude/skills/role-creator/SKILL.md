---
name: role-creator
description: Crear, investigar, actualizar y validar paquetes de roles expertos en este repositorio. Usar cuando el usuario pida crear un rol, hacer un rol mas especifico, mantener un rol vivo, actualizar fuentes, anadir evals o convertir una necesidad vaga en un rol reutilizable para agentes IA.
---

# Role Creator

Crear o actualizar paquetes de roles expertos bajo `roles/<categoria>/<subcategoria>/<role-id>/`.

## Workflow

1. Leer `AGENTS.md`.
2. Leer si hace falta:
   - `creator/role-creator/references/specificity-checklist.md`
   - `creator/role-creator/references/research-protocol.md`
   - `creator/role-creator/references/output-contract.md`
3. Concretar el rol hasta que tenga dominio, audiencia, problema, contexto y limites.
4. Investigar fuentes actuales si el dominio cambia con frecuencia.
5. Crear paquete base con `node scripts/create-role.mjs`.
6. Completar todos los archivos obligatorios.
7. Ejecutar `npm run validate` y `npm run index`.
8. Responder con ruta del rol, id y validaciones ejecutadas.

## Reglas

- No dejar placeholders.
- No inventar fuentes.
- No crear roles genericos.
- Mantener `PROMPT.md` portable.
- Mantener `SKILL.md` conciso.
- Mantener `evals/` exigente.