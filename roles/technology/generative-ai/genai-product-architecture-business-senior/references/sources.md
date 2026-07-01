# Fuentes

Fuentes consultadas para crear el rol. Fecha de consulta: 2026-07-01.

## Fuentes primarias y normativas

- Titulo: Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile, NIST AI 600-1
  URL: https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
  Autor/organizacion: National Institute of Standards and Technology
  Fecha de publicacion: 2024-07
  Fecha de consulta: 2026-07-01
  Uso en el rol: Riesgos de IA generativa, gobierno, medicion, gestion de incertidumbre, pre-deployment testing, incident disclosure y controles por ciclo de vida.

- Titulo: OWASP Top 10 for Large Language Model Applications / OWASP GenAI Security Project
  URL: https://owasp.org/www-project-top-10-for-large-language-model-applications/
  Autor/organizacion: OWASP Foundation
  Fecha de publicacion: Version 2025 y materiales vigentes del proyecto
  Fecha de consulta: 2026-07-01
  Uso en el rol: Amenazas especificas de aplicaciones LLM; prompt injection, manejo inseguro de salidas, disclosure, supply chain, excessive agency, overreliance y model theft.

- Titulo: Production best practices
  URL: https://developers.openai.com/api/docs/guides/production-best-practices
  Autor/organizacion: OpenAI
  Fecha de publicacion: Documentacion viva
  Fecha de consulta: 2026-07-01
  Uso en el rol: Practicas de produccion para APIs de modelos, seguridad operacional, control de costes, rate limits, despliegue y preparacion para escala.

- Titulo: Evaluation best practices
  URL: https://developers.openai.com/api/docs/guides/evaluation-best-practices
  Autor/organizacion: OpenAI
  Fecha de publicacion: Documentacion viva
  Fecha de consulta: 2026-07-01
  Uso en el rol: Enfoque de evals, medicion iterativa, datasets de prueba, criterios de calidad y decision basada en evidencia.

- Titulo: Guardrails and human review
  URL: https://developers.openai.com/api/docs/guides/agents/guardrails-approvals
  Autor/organizacion: OpenAI
  Fecha de publicacion: Documentacion viva
  Fecha de consulta: 2026-07-01
  Uso en el rol: Diseno de guardrails, aprobaciones humanas, control de acciones y supervision en sistemas agenticos.

- Titulo: ISO/IEC 42001:2023 Artificial intelligence management system
  URL: https://www.iso.org/standard/42001
  Autor/organizacion: International Organization for Standardization / International Electrotechnical Commission
  Fecha de publicacion: 2023
  Fecha de consulta: 2026-07-01
  Uso en el rol: Sistema de gestion de IA, responsabilidades, mejora continua, gestion de riesgos y controles organizativos.

- Titulo: AI Act
  URL: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
  Autor/organizacion: European Commission
  Fecha de publicacion: Pagina actualizada el 2026-05-11
  Fecha de consulta: 2026-07-01
  Uso en el rol: Enfoque basado en riesgo, obligaciones para alto riesgo, transparencia, GPAI, supervision humana, documentacion, cronograma y cumplimiento en contexto europeo.

- Titulo: Principles and approach
  URL: https://www.microsoft.com/en-us/ai/principles-and-approach
  Autor/organizacion: Microsoft
  Fecha de publicacion: Documentacion viva
  Fecha de consulta: 2026-07-01
  Uso en el rol: Principios de IA responsable; fairness, reliability and safety, privacy and security, inclusiveness, transparency y accountability.

## Datos que siempre deben pedirse al usuario

- Objetivo de negocio y metrica primaria.
- Usuario final y flujo operativo actual.
- Volumen mensual, tiempo por tarea, coste actual, errores, retrabajo y riesgo.
- Datos disponibles, permisos, sensibilidad, calidad, origen y frecuencia de cambio.
- Restricciones de latencia, privacidad, residencia de datos, auditoria, presupuesto y proveedor.
- Consecuencia de un error y nivel requerido de supervision humana.
- Baseline actual y umbral minimo para escalar o parar.
