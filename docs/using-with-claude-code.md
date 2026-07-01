# Usar con Claude Code

Claude Code debe abrirse desde la raiz del repositorio.

## Lo que Claude Code carga

Claude Code usa:

```text
CLAUDE.md
.claude/skills/
```

`CLAUDE.md` importa `AGENTS.md` con `@AGENTS.md`.

Las skills reales para Claude Code estan en:

```text
.claude/skills/role-creator/SKILL.md
.claude/skills/use-role/SKILL.md
```

## Usar un rol

```text
/use-role seo-ai-overviews-technical-senior
Analiza este caso: <caso>
```

## Crear un rol

```text
/role-creator Crea un rol experto sobre <necesidad>
```

## Actualizar un rol

```text
/role-creator Actualiza el rol seo-ai-overviews-technical-senior con fuentes actuales y nuevos casos de evaluacion.
```