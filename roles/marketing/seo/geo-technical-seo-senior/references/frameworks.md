# Frameworks

## 1. Diagnostico por capas SEO-GEO

Cuando usarlo: ante perdida de trafico, ausencia de citaciones, baja presencia en AI Overviews/AI Mode/ChatGPT/Copilot/Perplexity o discrepancias entre ranking organico y visibilidad generativa.

Pasos:

1. Demanda: comprobar si cambio el volumen o la intencion de query.
2. SERP clasica: ranking, CTR, features, ads, videos, noticias, local pack y featured snippets.
3. Crawling: robots.txt, WAF, CDN, bloqueos por user-agent, logs, status codes, crawl budget, sitemaps e IndexNow.
4. Indexacion: noindex, canonicals, duplicados, soft 404, paginacion, hreflang y cobertura.
5. Renderizado: HTML inicial, JavaScript, contenido textual visible para bots, hydration y lazy loading.
6. Elegibilidad de snippet: nosnippet, data-nosnippet, max-snippet, paywalls, previews y contenido extractable.
7. Retrieval: cobertura lexica/semantica de query original, variantes, entidades, idioma, localizacion y freshness.
8. Seleccion/citacion: claridad, estructura, evidencia, fuentes, autoria, tablas, respuestas extractables y comparabilidad con competidores.
9. Entidad: coherencia de marca, perfiles, Knowledge Graph, menciones externas, reviews, PR y fuentes de terceros.
10. Medicion: Search Console, Bing AI Performance, logs, analytics, screenshots, tracking repetido y conversion.

Limites: no permite observar todos los sistemas internos de los motores. Las citaciones generativas son variables, personalizadas y no siempre reportadas.

## 2. Matriz de evidencia

Cuando usarlo: al justificar recomendaciones GEO o resolver debates internos.

Niveles:

- Oficial: documentacion de Google, OpenAI, Bing/Microsoft u otro motor.
- Primaria tecnica: logs, crawls, Search Console, Bing Webmaster Tools, analytics, snapshots propios.
- Empirica externa: papers, benchmarks, estudios de herramientas, experimentos reproducibles.
- Practica experta: Natzir, DEJAN/Dan Petrovic y otros practicantes con evidencia publica.
- Hipotesis: inferencia plausible aun no validada para el sitio.

Regla: ninguna recomendacion de alto coste se aprueba solo con practica experta o hipotesis. Debe pasar por datos propios o experimento.

## 3. Auditoria de citabilidad

Cuando usarlo: para mejorar probabilidad de que una pagina sea usada como fuente, mencion o cita en respuestas generativas.

Pasos:

1. Definir pregunta o tarea que el motor debe responder.
2. Identificar entidades, atributos, fechas, cifras, comparaciones y condiciones.
3. Revisar si la pagina ofrece una respuesta directa, verificable y facil de extraer.
4. Comprobar que las afirmaciones importantes tienen evidencia, fuente, autor, fecha y contexto.
5. Mejorar estructura macro: titulo, resumen, secciones, FAQ solo si aporta, tablas y comparativas.
6. Mejorar estructura meso: chunks autosuficientes, headings descriptivos, listas y definiciones.
7. Mejorar estructura micro: frases precisas, unidades, nombres completos, sinonimos naturales, datos consistentes.
8. Comparar contra fuentes citadas por competidores y detectar huecos reales.

Limites: hacer la pagina mas citable no garantiza que el motor la seleccione. La autoridad externa y el ranking de recuperacion pueden pesar mas.

## 4. Query fan-out defensivo

Cuando usarlo: para planificar contenido robusto sin fingir que se puede replicar el fan-out interno de Google u otros motores.

Pasos:

1. Partir de una query o tarea principal.
2. Generar variantes razonables: equivalencia, generalizacion, especificacion, follow-up, canonicalizacion, traduccion, implicacion y clarificacion.
3. Mapear cada variante a contenido existente o hueco de cobertura.
4. Evitar crear paginas finas para cada variante; preferir arquitectura, hubs y secciones con cobertura semantica real.
5. Verificar con SERP, GSC, Bing grounding queries, logs y pruebas de AI search.

Limites: no simula sistemas propietarios, personalization ni feedback interno. Es una herramienta editorial y tecnica, no una copia del motor.

## 5. Decision de controles de crawler y snippet

Cuando usarlo: si el sitio quiere equilibrar visibilidad, proteccion de contenido, training opt-out, paywalls y citaciones.

Pasos:

1. Distinguir objetivo: aparecer en Search, aparecer en AI search, impedir training, proteger previews o bloquear crawling.
2. Separar bots: Googlebot, Google-Extended, OAI-SearchBot, GPTBot, ChatGPT-User, Bingbot y otros.
3. Revisar robots.txt, meta robots, X-Robots-Tag, data-nosnippet, max-snippet, paywall markup y WAF.
4. Probar con logs, URL inspection, Bing Webmaster Tools y fetch/render.
5. Documentar tradeoffs: bloquear puede proteger contenido pero reducir recuperabilidad o citacion.

Limites: robots.txt depende de cumplimiento del crawler; algunos user agents iniciados por usuario pueden no obedecer las mismas reglas.

## 6. Experimento GEO controlado

Cuando usarlo: cuando una recomendacion requiere prueba antes de rollout.

Pasos:

1. Elegir grupo de URLs y queries comparables.
2. Establecer baseline: ranking, citaciones, menciones, clicks, CTR, conversion, logs y snapshots.
3. Aplicar cambios acotados: estructura, evidencia, accesibilidad tecnica, entidad, freshness o snippet controls.
4. Mantener grupo de control sin cambios.
5. Medir en ventanas definidas y repetir prompts/queries para reducir varianza.
6. Clasificar resultado: mejora, neutral, dano, inconcluso.

Limites: cambios de algoritmo, personalizacion y baja frecuencia de citaciones pueden impedir atribucion limpia.
