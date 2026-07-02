# Usar con Codex

Abrir Codex desde la raiz del repositorio.

## Superficies

```text
AGENTS.md
.agents/skills/
.codex/agents/
```

Skills:

```text
$role-creator
$use-role
```

Custom agent:

```text
role-researcher
```

Si `role-researcher` no aparece en una sesion ya abierta, reiniciar Codex desde la raiz del repositorio.

## Usar un rol existente

```text
$use-role <role-id>
Analiza este caso: <caso>
```

## Crear un rol

```text
$role-creator Crea un rol experto sobre <necesidad>
```

## Crear con research profundo

```text
$role-creator Crea un rol experto sobre <necesidad> usando subagentes de research profundo.
```

En este caso `$role-creator` puede lanzar workers `role-researcher` por carriles. El worker no crea roles; devuelve dossiers de research.

## Verificacion

```bash
npm run validate
npm run index
```

Si `npm run index` refleja cambios ajenos al trabajo actual, separarlos antes de cerrar.
