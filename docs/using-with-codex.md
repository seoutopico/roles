# Usar con Codex

Codex debe abrirse desde la raiz del repositorio.

## Lo que Codex carga

Codex usa dos superficies:

```text
AGENTS.md
.agents/skills/
```

`AGENTS.md` da las reglas persistentes del repositorio. Las skills reales estan en:

```text
.agents/skills/role-creator/SKILL.md
.agents/skills/use-role/SKILL.md
```

## Usar un rol existente

Prompt recomendado:

```text
$use-role seo-ai-overviews-technical-senior
Analiza este caso: <caso>
```

El flujo esperado es:

1. Ejecutar `npm run resolve -- seo-ai-overviews-technical-senior`.
2. Leer `role.yaml`, `SKILL.md` y `PROMPT.md` del rol.
3. Leer referencias si hacen falta.
4. Responder como el rol.

## Crear un rol

Prompt recomendado:

```text
$role-creator Crea un rol experto sobre <necesidad>
```

El flujo esperado es:

1. Concretar la necesidad.
2. Investigar si el dominio cambia.
3. Crear paquete con `scripts/create-role.mjs`.
4. Completar todos los archivos.
5. Ejecutar `npm run validate` y `npm run index`.

## Actualizar un rol

Prompt recomendado:

```text
$role-creator Actualiza el rol seo-ai-overviews-technical-senior con fuentes actuales y nuevos casos de evaluacion.
```

## Probar que Codex tiene una ruta clara

```bash
npm run resolve -- seo-ai-overviews-technical-senior
npm run validate
npm run index
```