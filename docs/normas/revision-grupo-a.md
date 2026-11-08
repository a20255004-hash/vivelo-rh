# Revisión de citas normativas · Grupo A

Puestos: analista-seleccion, practicante, asistente-personal, analista-capacitacion, analista-relaciones, asistente-rrhh, reclutador-masivo, asistente-sst (80 capítulos).
Fuente de verdad: `docs/normas/txt/*.txt`. Cada archivo corregido pasó `node scripts/validar-capitulo.mjs` con OK.

## Correcciones

| Archivo | Cita original | Corrección | Norma / artículo |
|---|---|---|---|
| seleccion-cap10.js (mirada) | «adecuados, pertinentes y no excesivos» | «adecuados, relevantes y no excesivos» | Ley 29733, art. 7 (principio de proporcionalidad) |
| seleccion-cap9.js (rules) | «adecuados, pertinentes y no excesivos» | «adecuados, relevantes y no excesivos» | Ley 29733, art. 7 |
| analista-capacitacion-2.js (mirada) | «gestiones de cobranza con personas ajenas a la deuda y las llamadas o visitas entre las 20:00 y las 07:00» | «comunicar o llamar a terceros ajenos a la deuda para informarles de la morosidad, y las llamadas o visitas entre las 20:00 y las 07:00 o los sábados, domingos y feriados» | Ley 29571, art. 62, lit. b) y f) |
| analista-capacitacion-2.js (QUIZ `por`) | «prohíbe las llamadas y visitas … entre las 20:00 y las 07:00» | se añade «y también los sábados, domingos y feriados» (el distractor «Solo los domingos» sigue siendo incorrecto por el «solo») | Ley 29571, art. 62, lit. b) |
| analista-capacitacion-4.js (mirada) | «gestionar la cobranza con personas ajenas a la deuda, llamar o visitar entre las 20:00 y las 07:00» | «comunicar o llamar a terceros ajenos a la deuda para informarles de la morosidad, llamar o visitar entre las 20:00 y las 07:00 o los sábados, domingos y feriados» | Ley 29571, art. 62, lit. a), b) y f) |
| reclutador-masivo-4.js (mirada) | «las gestiones con personas ajenas a la deuda y las visitas o llamadas entre las 20:00 y las 07:00» | «las comunicaciones o llamadas a terceros ajenos a la deuda para informarles de la morosidad, y las visitas o llamadas entre las 20:00 y las 07:00 o los sábados, domingos y feriados» | Ley 29571, art. 62, lit. b) y f) |
| analista-capacitacion-7.js (rules) | «El Tribunal de Fiscalización Laboral ha tratado como infracción grave no acreditar las capacitaciones de SST (D.S. 019-2006-TR, art. 27)» | «No cumplir con la formación e información a los trabajadores sobre los riesgos del puesto es infracción grave (D.S. 019-2006-TR, art. 27.8)» | D.S. 019-2006-TR, art. 27.8 (el criterio del Tribunal no está en la norma) |
| analista-capacitacion-7.js (QUIZ) | «El Tribunal … ha tratado no acreditar las capacitaciones de SST como…» / «Sus resoluciones han tipificado…» | «Según el reglamento de inspección, no cumplir con la formación en SST de los trabajadores es…» / «El art. 27.8 del D.S. 019-2006-TR lo tipifica como infracción grave» | D.S. 019-2006-TR, art. 27.8 |
| analista-capacitacion-7.js (cabecera) | «art. 27 … Se cita sin numeral» | «art. 27.8: no cumplir las obligaciones de formación e información … es infracción grave» | D.S. 019-2006-TR, art. 27.8 |
| asistente-rrhh-2.js (cabecera) | «art. 101 d): en ningún caso el costo del examen médico lo asume el trabajador» | «art. 101: …» (en el texto oficial disponible es el literal e); se quita el literal porque el texto no incluye la modificación del D.S. 001-2021-TR) | D.S. 005-2012-TR, art. 101 |
| asistente-sst-9.js (mirada) | «Incidente peligroso … pudiera causar lesiones a las personas» | «… pudiera causar lesiones o enfermedades a las personas» | D.S. 005-2012-TR, glosario |

## Verificadas sin cambios (coinciden con el texto oficial)

- **Ley 29733**: arts. 5 (consentimiento), 6 (finalidad), 7 (proporcionalidad), 8 (calidad, conservación), 9 (seguridad), 19 (acceso); salud como dato sensible (art. 2.5). Todas las menciones generales son coherentes.
- **D.S. 007-2002-TR**: art. 7 (refrigerio no menor de 45 minutos), art. 8 (nocturno 22:00–06:00, RMV + 35 %), art. 9 (sobretiempo voluntario, excepción por caso fortuito o fuerza mayor), art. 10 (25 % dos primeras horas, 35 % las siguientes; compensación con descanso por acuerdo).
- **D.S. 015-2026-TR**: RMV S/ 1,230 desde el 1 de octubre de 2026. Cálculos derivados correctos (S/ 1,660.50 nocturno; S/ 41.00 y S/ 51.82 diarios agrarios).
- **D.S. 003-97-TR**: arts. 6, 10, 18, 25 a), 30 g), 31, 32, 57, 72, 73.
- **D.S. 005-2012-TR**: arts. 28, 33, 42 l), 68, 69, 70, 71, 75, 97, 98, 102, 110 (contenido del 110 coincide con la versión disponible, D.S. 012-2014-TR).
- **D.S. 019-2006-TR**: arts. 6 y 13.2.
- **Ley 29571**: arts. 61 y 62 (las reglas breves «gestiones con personas ajenas a la deuda» se dejaron: resumen fiel del lit. f).
- **Norma G.050**: punto 20.1 (1.80 m, fuera de servicio, descarte tras una caída, registro, almacenamiento) y punto 4.8; inspección visual previa del EPI.
- **Constitución**: arts. 2.7, 25 y 26.
- **Ley 30709**: arts. 1, 2, 3 y política salarial. **Ley 26790**: subsidio desde el día 21. **Ley 27735**: gratificación proporcional. **D.S. 039-91-TR**: entrega del RIT. **D.S. 001-98-TR, art. 18** (vía D.S. 003-2010-TR).

## Sin texto oficial disponible (se dejaron como estaban)

- **Ley 29783** (escaneado; la cita más frecuente: arts. 21, 27, 29, 35, 49, 57, 58, 60, 62, 63, 71, 72).
- **D.S. 005-2012-TR, art. 27-A y modificaciones de los D.S. 001-2021-TR y 006-2022-TR** (el .txt solo llega a 2014).
- **Ley 28806** (solo están los artículos que modificó la Ley 29981; no los arts. 5 y 10 citados).
- **D.S. 001-98-TR, art. 19** y **D.S. 009-2011-TR** (boleta).
- **Ley 26772 y D.S. 002-98-TR**, **Ley 27270**, **Ley 29973** (escaneado) y **D.S. 013-2019-MIMP**, **Ley 27942** (escaneado) y **D.S. 014-2019-MIMP**, **Ley 28518** (escaneado), **D.S. 018-2007-TR** (escaneado), **D.S. 004-2006-TR**, **D.S. 010-2003-TR** (TUO LRCT), **D.S. 002-2018-TR**, **Ley 31110 y D.S. 005-2021-MIDAGRI**, **Ley 30334**, **D.S. 001-97-TR**, **D.Leg. 713**, **Ley 25129**, **D.Leg. 1310**, **Ley 29896 y D.S. 023-2021-MIMP**, **Ley 28991**, **Ley 26771**, **Ley 27337**, **Ley 30036**, **D.S. 001-96-TR**, **D.S. 009-97-SA**, **R.M. 050-2013-TR**, **precedente 001-2022-SUNAFIL/TFL**.
