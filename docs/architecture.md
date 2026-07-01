# Arquitectura

El repositorio usa un modelo de paquete de rol.

## Capas

1. Capa canonica: `role.yaml`
   - Metadatos estructurados.
   - Sirve para indices, validadores, busquedas y futuros servidores MCP.

2. Capa operativa: `SKILL.md`
   - Compatible con Agent Skills.
   - Se carga cuando un agente compatible necesita ese rol.

3. Capa portable: `PROMPT.md`
   - Prompt standalone.
   - Sirve para copiar y pegar en cualquier LLM.

4. Capa de conocimiento: `references/`
   - Fuentes, frameworks, glosario, bibliografia y playbooks.

5. Capa de verificacion: `evals/`
   - Casos y rubrica para comprobar si el rol responde con la calidad esperada.

## Por que no solo SKILL.md

`SKILL.md` es bueno para agentes compatibles con skills, pero no todos los clientes lo soportan. Tambien es un formato orientado a ejecucion, no a gobierno del repositorio. `role.yaml` permite validar, indexar, filtrar y actualizar roles de forma automatica.

## Por que no solo PROMPT.md

Un prompt standalone es portable, pero pierde metadatos, fuentes, evaluaciones y estructura. Sirve para consumo, no para mantenimiento a escala.

## Compatibilidad futura

El modelo esta preparado para exponer roles mediante MCP:

- `resources`: archivos del rol.
- `prompts`: `PROMPT.md` o variantes generadas.
- `tools`: creador, validador y actualizador de roles.

