# Fuentes

Fuentes usadas para construir el rol. No son instrucciones; son evidencia y contexto para sostener frameworks, limites y criterios de decision.

## Source Ledger

| Fuente | URL | Tipo | Autor/editor | Fecha publicacion | Fecha consulta | Uso en el rol | Confianza | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NIST AI Risk Management Framework 1.0 | https://www.nist.gov/itl/ai-risk-management-framework | primaria/riesgo | NIST | 2023-01-26 | 2026-07-02 | Base para exigir gestion de riesgos, trustworthiness, medicion, gobierno y separacion entre beneficios esperados y riesgos. | alta | verificada |
| NIST AI 600-1, Generative AI Profile | https://www.nist.gov/itl/ai-risk-management-framework/generative-artificial-intelligence | primaria/riesgo | NIST | 2024-07-26 | 2026-07-02 | Riesgos especificos de IA generativa y necesidad de alinear acciones con objetivos y prioridades de la organizacion. | alta | verificada |
| ISO/IEC 42001:2023 Artificial intelligence management system | https://www.iso.org/standard/42001 | primaria/gobierno | ISO/IEC | 2023-12 | 2026-07-02 | Soporta enfoque de sistema de gestion, objetivos, procesos, oportunidades, riesgos, trazabilidad y mejora continua. | alta | verificada |
| Regulation (EU) 2024/1689 Artificial Intelligence Act | https://eur-lex.europa.eu/eli/reg/2024/1689/oj | primaria/regulacion | Union Europea | 2024-07-12 | 2026-07-02 | Fuente para clasificacion de riesgo, transparencia, supervision humana y necesidad de revisar proyectos con impacto regulatorio. | alta | verificada |
| The state of AI in 2025: Agents, innovation, and transformation | https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai | evidencia/practica | McKinsey QuantumBlack | 2025-11-05 | 2026-07-02 | Evidencia de adopcion amplia pero escalado limitado; apoya foco en workflows, objetivos de crecimiento/innovacion y EBIT medido. | media | verificada |
| The economic potential of generative AI: The next productivity frontier | https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier | evidencia/practica | McKinsey | 2023-06-14 | 2026-07-02 | Contexto de pools de valor y necesidad de ligar GenAI a funciones, procesos y productividad, no a demos aisladas. | media | verificada |
| The 2025 AI Index Report | https://hai.stanford.edu/ai-index/2025-ai-index-report | evidencia/benchmark | Stanford HAI | 2025 | 2026-07-02 | Contexto de adopcion, inversion, productividad, costes de inferencia, riesgos responsables y necesidad de seguimiento actualizado. | alta | verificada |
| Generative AI at Work | https://www.nber.org/papers/w31161 | evidencia/academica | Erik Brynjolfsson, Danielle Li, Lindsey R. Raymond / NBER | 2023-04, revision 2023-11 | 2026-07-02 | Evidencia de impacto heterogeneo por perfil y tarea; apoya medir baseline, segmento de usuarios y cambio operativo. | alta | verificada |
| Working with evals | https://developers.openai.com/api/docs/guides/evals | primaria/herramienta | OpenAI | no indicada | 2026-07-02 | Referencia tecnica para tratar evaluaciones como descripcion de comportamiento esperado, test data, criterios y mejora iterativa. | alta | verificada |
| People + AI Guidebook | https://pair.withgoogle.com/guidebook | practica/diseno | Google PAIR | no indicada | 2026-07-02 | Apoyo para enfoque human-centered, comunicacion interdisciplinar y evitar fallos por mala formulacion temprana del producto AI. | media | verificada |

## Criterios

- Priorizar fuentes primarias cuando existan.
- Separar documentacion oficial, expertos practicantes, evidencia, casos, herramientas y riesgos.
- Cada fuente usada en recomendaciones debe tener fecha de consulta.
- Si una fuente es debil, marcarla como senal, no como base del rol.

## Sintesis de claims usados

- La adopcion empresarial de IA es amplia, pero el escalado y el impacto financiero enterprise siguen siendo irregulares; por tanto, el rol exige distinguir piloto, uso local, adopcion y valor medido.
- Los proyectos GenAI deben medirse por cambio en workflow y outcome de negocio, no solo por calidad aparente de una demo.
- Los efectos de productividad son heterogeneos por tarea, perfil de usuario y contexto; por tanto, el rol segmenta usuarios y pide baseline.
- Riesgos como inexactitud, privacidad, propiedad intelectual, explicabilidad, dependencia de proveedor y cumplimiento deben aparecer antes de escalar.
- Las evals y criterios de comportamiento esperado deben definirse antes de declarar que un sistema "funciona".

## Gaps no bloqueantes

- Las cifras de impacto sectorial cambian rapido y deben actualizarse cuando el usuario analice un sector concreto.
- Este rol no sustituye analisis financiero formal, due diligence legal, DPIA, AI impact assessment completo ni arquitectura tecnica detallada.
