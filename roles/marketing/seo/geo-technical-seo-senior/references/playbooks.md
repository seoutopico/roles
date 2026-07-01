# Playbooks

## 1. Auditoria inicial SEO tecnico + GEO

Objetivo: identificar por que un sitio no aparece, no es citado o pierde trafico en busqueda clasica y generativa.

Inputs necesarios:

- Dominio, URLs y templates prioritarios.
- Queries o tareas objetivo, pais, idioma, dispositivo y periodo.
- Search Console, Bing Webmaster Tools, analytics y logs.
- Crawl completo, renderizado JS, robots.txt, headers, sitemaps, canonicals y datos estructurados.
- Snapshots de SERP, AI Overviews, AI Mode, ChatGPT Search, Copilot o Perplexity.

Pasos:

1. Mapear URLs a queries, intenciones y motores.
2. Revisar indexacion, canonicidad, robots, snippets, WAF/CDN y renderizado.
3. Comprobar si bots relevantes acceden: Googlebot, Bingbot, OAI-SearchBot, GPTBot si aplica, y otros user agents declarados.
4. Comparar contenido visible por usuario, crawler y HTML renderizado.
5. Evaluar estructura de respuesta, evidencia, autoria, freshness, datos y entidades.
6. Comparar contra paginas citadas o competidores visibles.
7. Separar hallazgos en bloqueantes, mejoras de recuperacion, mejoras de citabilidad y mejoras de entidad.
8. Priorizar backlog por impacto, esfuerzo, riesgo y medicion.

Output esperado: diagnostico por capas, bloqueos tecnicos, oportunidades editoriales/de entidad, plan 30/60/90 y experimentos.

Senales de error: recomendar reescritura sin revisar logs, WAF, robots o renderizado; prometer aparicion; confundir trafico con citacion.

## 2. Investigacion de citaciones y grounding queries

Objetivo: entender que paginas, queries y entidades participan en respuestas generativas.

Inputs necesarios: Bing AI Performance si existe, Search Console, SERP tracker, prompt/query set documentado, capturas fechadas y lista de competidores citados.

Pasos:

1. Definir un set estable de queries/tareas por intencion.
2. Ejecutar pruebas repetidas y registrar variacion.
3. Extraer paginas citadas, menciones sin enlace, competidores, pasajes y razones aparentes.
4. Cruzar con rankings organicos, grounding queries, logs y paginas indexadas.
5. Clasificar fallos: no recuperada, recuperada pero no seleccionada, seleccionada no citada, citada sin click, citada con baja conversion.
6. Disenar cambios especificos por fallo: acceso, estructura, evidencia, entidad, PR, frescura o consolidacion.

Output esperado: mapa query/tarea -> URL -> citacion -> competidor -> fallo probable, hipotesis y experimentos.

Senales de error: medir con una sola ejecucion de prompt, mezclar paises/idiomas/sesiones o tratar herramientas de AI visibility como unica verdad.

## 3. Reparacion de accesibilidad para AI search

Objetivo: asegurar que motores y crawlers puedan acceder a contenido util y representativo.

Inputs necesarios: logs por user-agent e IP, robots.txt, reglas WAF/CDN, headers, HTML server-side, renderizado y herramientas de inspeccion.

Pasos:

1. Revisar bloqueos por robots.txt y por WAF/CDN.
2. Comprobar status codes, redirects, canonicals, hreflang y noindex.
3. Comparar HTML inicial vs DOM renderizado.
4. Confirmar que el contenido principal no depende solo de interacciones o JS no ejecutado.
5. Revisar snippets: nosnippet, data-nosnippet, max-snippet y X-Robots-Tag.
6. Ajustar reglas con minimo privilegio y documentar tradeoffs.
7. Solicitar recrawl o notificar cambios mediante mecanismos disponibles.

Output esperado: matriz crawler -> permitido/bloqueado -> evidencia -> decision, cambios tecnicos y verificacion post-deploy.

## 4. Mejora de contenido citable

Objetivo: aumentar claridad, extractabilidad y evidencia sin degradar utilidad para humanos.

Inputs necesarios: pagina objetivo, query/tarea, competidores citados, fuentes primarias y datos internos.

Pasos:

1. Escribir una respuesta corta y precisa para la tarea principal, sin relleno.
2. Anadir secciones que cubran variantes de query relevantes, no keywords sueltas.
3. Usar tablas, listas o pasos solo cuando mejoren comparacion o extraccion.
4. Anadir fechas, autores, metodologia, cifras y fuentes cuando sostengan afirmaciones.
5. Consolidar paginas finas que compiten por la misma intencion.
6. Reforzar enlaces internos desde hubs, glosarios y paginas de entidad.
7. Mantener datos estructurados coherentes con el contenido visible.
8. Medir cambios con grupo de control o baseline temporal.

Output esperado: brief editorial tecnico, cambios por bloque de pagina e hipotesis de medicion.

## 5. Estrategia de entidad y earned media para GEO

Objetivo: mejorar la probabilidad de que motores identifiquen y recomienden correctamente una marca, producto, persona o sitio.

Inputs necesarios: nombre de entidad, variantes, perfiles oficiales, schema si aplica, menciones externas, PR, reviews, Wikidata/Knowledge Graph cuando existan y paginas de competidores.

Pasos:

1. Auditar consistencia de nombre, descripcion, categoria, ubicacion, producto, founders, fechas y enlaces.
2. Crear o mejorar paginas de entidad propias con datos verificables.
3. Alinear perfiles externos: redes, directorios, medios, marketplaces, bases de datos sectoriales y reviews.
4. Identificar huecos de third-party validation: comparativas, listados, reviews, prensa, estudios, partners.
5. Priorizar menciones por autoridad, relevancia, independencia y probabilidad de ser recuperadas.
6. Medir con queries de entidad, prompts comparativos y menciones/citaciones.

Output esperado: mapa de entidad, contradicciones, plan de owned/earned media y riesgos reputacionales.
