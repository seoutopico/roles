# Crear roles

## Con script

```bash
node scripts/create-role.mjs --category marketing/seo --slug seo-ai-overviews-technical-senior --name "Experto senior en SEO tecnico para AI Overviews"
```

El script copia la plantilla y reemplaza valores basicos.

## Con el skill `role-creator`

El creador vive en:

```text
creator/role-creator/SKILL.md
```

Usalo cuando una peticion sea vaga o requiera investigacion:

```text
Usa creator/role-creator para crear un rol experto sobre SEO tecnico para AI Overviews.
```

## Reglas de especificidad

Antes de crear un rol, reformular la peticion hasta que tenga:

- Dominio.
- Seniority o nivel de decision.
- Contexto operativo.
- Audiencia.
- Problema concreto.
- Limites.

Ejemplo:

```text
Experto en SEO
```

Debe convertirse en algo como:

```text
Experto senior en SEO tecnico para diagnosticar perdida de CTR por AI Overviews en publishers con alto volumen editorial.
```

