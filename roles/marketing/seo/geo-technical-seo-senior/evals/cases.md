# Casos de evaluacion

## Caso 1: Ranking alto, sin citaciones en ChatGPT Search

### Input

Tenemos una pagina de comparativa B2B que esta top 2 en Google para "mejor software de facturacion para autonomos" en Espana, pero ChatGPT Search no la cita nunca. Queremos optimizarla para GEO y nos han propuesto crear un archivo llms.txt y meter mas keywords. Que harias?

### Respuesta esperada

Debe:

- Rechazar promesas y no presentar llms.txt como requisito universal.
- Pedir logs de OAI-SearchBot/ChatGPT-User, robots.txt, WAF/CDN, HTML renderizado, canonicals, snippets, Search Console, snapshots y competidores citados.
- Separar ranking organico, retrieval, seleccion como fuente y citacion visible.
- Revisar si OAI-SearchBot esta permitido y si el contenido principal es accesible sin JS problematico.
- Comparar claridad, evidencia, tablas, fuentes, freshness, autoria, entidad y menciones externas frente a paginas citadas.
- Proponer experimento controlado con baseline y medicion repetida.

### Errores criticos

- Prometer citaciones.
- Recomendar keyword stuffing.
- Ignorar crawlers y logs.
- No distinguir GPTBot de OAI-SearchBot.

## Caso 2: Publisher pierde CTR tras AI Overviews

### Input

Un medio editorial ha perdido 28% de CTR en queries informacionales evergreen desde abril. Las posiciones medias no caen, pero aparecen AI Overviews con enlaces a otros medios. El editor quiere bloquear Google AI sin perder Google Search.

### Respuesta esperada

Debe:

- Explicar que, segun Google, AI features se gestionan dentro de Search y que Googlebot/controles de snippets son relevantes para lo mostrado.
- No recomendar bloquear Googlebot si quiere mantener Search.
- Pedir GSC por query/URL/pais/dispositivo/fecha, SERP snapshots, logs, features, datos de Discover si aplica, analytics y cambios editoriales/tecnicos.
- Separar perdida por CTR, demanda, cambios de SERP, snippets, AI Overviews y competidores.
- Evaluar noindex/nosnippet/max-snippet/data-nosnippet solo explicando tradeoffs.
- Proponer mejoras de citabilidad, autoria, evidencia, freshness, enlaces internos y experimentos en grupos de URLs.

### Errores criticos

- Prometer recuperar CTR.
- Decir que existe un schema especial para AI Overviews.
- Ignorar que Search Console reporta AI features dentro de Web.

## Caso 3: Ecommerce con problemas de frescura en Copilot/Bing

### Input

Un ecommerce actualiza precios y stock cada dia. Bing/Copilot muestra informacion antigua y no cita las paginas correctas. Usamos sitemaps, pero lastmod se actualiza con cada generacion del sitemap aunque la pagina no cambie.

### Respuesta esperada

Debe:

- Revisar sitemaps XML, lastmod real, IndexNow, Bing Webmaster Tools, logs de Bingbot, canonicals, Merchant/Product data, structured data y cache/CDN.
- Explicar que lastmod debe reflejar cambios reales de contenido, no la hora de generacion del sitemap.
- Proponer un flujo de notificacion de cambios reales, validacion de schema Product/Offer visible y monitorizacion de paginas citadas.
- Priorizar URLs con impacto comercial y volatilidad de datos.

### Errores criticos

- Recomendar cambiar todo el contenido sin revisar senales de frescura.
- Ignorar IndexNow y Bing Webmaster Tools.
- Sugerir lastmod falso como solucion.

## Caso 4: Marca recomendada incorrectamente por LLMs

### Input

Una marca SaaS aparece en respuestas de Perplexity y ChatGPT como si fuera una herramienta gratuita, pero es enterprise. Tambien confunden el producto con un competidor de nombre parecido.

### Respuesta esperada

Debe:

- Tratarlo como problema de entidad, desambiguacion, owned media y earned media, no solo SEO on-page.
- Pedir queries/prompts, capturas, fuentes citadas, paginas propias, perfiles externos, reviews, prensa, schema Organization/Product, datos de Knowledge Graph si existen y menciones contradictorias.
- Proponer pagina de entidad clara, comparativas honestas, actualizacion de perfiles, PR correctivo, third-party validation y monitorizacion.
- Declarar que no puede forzar reentrenamiento ni correccion inmediata en modelos cerrados.

### Errores criticos

- Prometer limpiar LLMs en una semana.
- Recomendar spam de menciones.
- Ignorar fuentes externas que causan la confusion.
