# Playbooks

Playbooks ejecutables para aplicar el rol.

## 1. Diagnostico De Proyecto GenAI En 30 Minutos

### Objetivo

Determinar si un proyecto esta suficientemente formulado para invertir, medir o presentarlo.

### Inputs

- Descripcion del proyecto.
- Usuarios afectados.
- Proceso actual.
- Objetivo declarado.
- Datos disponibles.
- Coste, volumen, tiempo o dolor actual.

### Pasos

1. Escribir el caso en una frase: "Para [usuario], queremos [cambio] porque hoy [problema], medido por [metrica]".
2. Identificar el workflow real y el momento de uso.
3. Pedir baseline minimo: volumen, coste, tiempo, errores, conversion, satisfaccion o riesgo.
4. Mapear alternativa no GenAI.
5. Evaluar si GenAI aporta algo diferencial.
6. Listar tres supuestos criticos.
7. Definir un experimento minimo para validar el supuesto mas riesgoso.
8. Recomendar seguir, medir, replantear o parar.

### Output

- Diagnostico ejecutivo de 1 pagina.
- Decision recomendada.
- Datos necesarios para la siguiente reunion.

### Senales de error

- El objetivo es "usar IA" y no cambiar un proceso.
- Nadie sabe quien usara el sistema.
- No hay baseline.
- La demo gusta, pero no hay criterio de exito.
- Se confunde ahorro teorico con ahorro capturable.

## 2. Preparacion De Comite Directivo

### Objetivo

Convertir un analisis GenAI en narrativa para aprobar decision, presupuesto o siguiente fase.

### Inputs

- Proyecto y estado actual.
- Evidencia disponible.
- Decision que se pide al comite.
- Riesgos y controles.
- Coste y recursos.

### Pasos

1. Definir la pregunta del comite: aprobar, priorizar, pausar, financiar, escalar o pedir datos.
2. Redactar el titular principal con la estructura "decision + razon + condicion".
3. Separar slides en cuatro mensajes: problema, evidencia, opcion recomendada, control de riesgo.
4. Convertir tecnicismos en implicaciones: latencia -> experiencia, eval -> confianza, grounding -> reduccion de error, coste por token -> coste por tarea.
5. Incluir un slide de supuestos y umbrales de continuidad.
6. Preparar respuestas a Finanzas, Tecnologia, Legal, Operaciones y Negocio.

### Output

- 5 a 8 titulares de slide.
- Mensaje de apertura de 30 segundos.
- Decision requerida.

### Senales de error

- El comite recibe arquitectura antes que problema de negocio.
- Las frases podrian aplicarse a cualquier proyecto.
- No hay peticion concreta.
- Se ocultan riesgos para que la iniciativa parezca mas madura.

## 3. Priorizacion De Cartera GenAI

### Objetivo

Comparar varios proyectos y decidir cuales merecen foco.

### Inputs

- Lista de proyectos.
- Estimacion de valor.
- Datos y dependencias.
- Riesgo.
- Capacidad del equipo.

### Pasos

1. Normalizar cada proyecto en el mismo formato: problema, usuario, workflow, metrica, evidencia, riesgo.
2. Puntuar valor potencial, evidencia, encaje GenAI, viabilidad de datos, adopcion, operacion, riesgo y narrativa.
3. Separar quick wins, apuestas estrategicas, experimentos de aprendizaje y proyectos a parar.
4. Detectar dependencias comunes: datos, integraciones, seguridad, legal, formacion, owners.
5. Recomendar secuencia trimestral.

### Output

- Mapa de cartera.
- Top 3 recomendado.
- Motivos para no priorizar el resto.

### Senales de error

- Gana el proyecto mas vistoso, no el mas medible.
- Se suman beneficios sin considerar capacidad de captura.
- Nadie asume ownership post-piloto.

## 4. Traduccion A Frases Ejecutivas

### Objetivo

Generar frases para PowerPoint que sean claras, sobrias y defendibles.

### Inputs

- Conclusion del analisis.
- Audiencia.
- Decision requerida.
- Datos y supuestos.

### Pasos

1. Escribir primero la conclusion sin adjetivos.
2. Anadir metrica o criterio observable.
3. Incluir condicion si aun es hipotesis.
4. Reducir jerga tecnica.
5. Preparar version corta, version didactica y version para decision.

### Output

- 3 a 10 frases ejecutivas.
- Versiones alternativas por tono: prudente, ambiciosa, financiera, operativa.

### Senales de error

- La frase suena bien pero no dice nada verificable.
- Usa "transformar" sin explicar que cambia.
- Promete impacto antes de medir adopcion.
