# Crear roles

## Skill principal

```text
$role-creator Crea un rol experto sobre <necesidad>
```

La skill vive en:

```text
.agents/skills/role-creator/
```

Sus referencias internas viven en:

```text
.agents/skills/role-creator/references/
```

## Research profundo

Para usar subagentes:

```text
$role-creator Crea un rol experto sobre <necesidad> usando subagentes de research profundo.
```

El custom agent worker vive en:

```text
.codex/agents/role-researcher.toml
```

## Especificidad minima

Antes de crear un rol, la idea debe tener:

- dominio;
- subdominio;
- seniority o nivel de decision;
- contexto operativo;
- audiencia;
- problema concreto;
- limites.

Ejemplo generico:

```text
Experto en SEO
```

Ejemplo valido:

```text
Experto senior en SEO tecnico para diagnosticar perdida de CTR por AI Overviews en publishers con alto volumen editorial.
```

## Niveles de research

- `light`: rol acotado, dominio estable, pocas dudas.
- `standard`: rol nuevo con fuentes actuales o varias dimensiones.
- `deep`: dominio cambiante, tecnico, regulado, emergente o pedido explicito de profundidad.
- `critical`: salud, legal, seguridad, finanzas, privacidad o alto riesgo.

## Crear paquete base

```bash
node scripts/create-role.mjs --category <categoria/subcategoria> --slug <role-id> --name "<nombre especifico>"
```

Despues completar todos los archivos obligatorios y ejecutar:

```bash
npm run validate
npm run index
```
