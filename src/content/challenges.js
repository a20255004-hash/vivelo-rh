/* Retos y cuestionarios. Complementan (no reemplazan) las simulaciones.
   Tipos: mcq (opción múltiple), myth (¿mito o realidad?), match (asociar), order (ordenar),
   doc (interpretar un documento), calc (calcular). Cada pregunta trae su explicación. */
export const challenges = {
  levels: [
    { id: "n1", n: "Nivel 1 · Fundamentos", d: "El mapa del oficio: quién hace qué en RR.HH.", c: "var(--c-atraer)", sets: [
      { id: "r-areas", n: "¿Qué área se encarga?", mins: 4, items: [
        { t: "match", q: "Asocia cada tarea con el área que normalmente la lidera.", pairs: [
          ["Calcular la boleta y declarar la PLAME", "Planillas y remuneraciones"],
          ["Diseñar el plan anual de cursos", "Capacitación y desarrollo"],
          ["Investigar una queja contra un supervisor", "Relaciones laborales"],
          ["Definir bandas salariales", "Compensaciones y beneficios"],
          ["Medir la rotación y presentar un tablero", "People analytics"]],
          why: "Las áreas se tocan, pero cada una tiene su núcleo. En una pyme, una sola persona puede hacerlo todo." },
        { t: "myth", q: "«Recursos Humanos es sobre todo organizar fiestas y cumpleaños.»", a: false, why: "Mito. El clima importa, pero el día a día incluye planillas, contratos, selección, investigaciones, normativa y datos. Las actividades de integración son una parte pequeña." },
        { t: "mcq", q: "En una entidad pública, ¿cómo se ingresa normalmente a un puesto CAS?", o: ["Por recomendación del jefe del área", "Por concurso público de méritos", "Por contratación directa del alcalde", "Por sorteo"], a: 1, why: "El acceso al régimen CAS es por concurso público de méritos, salvo los cargos de confianza." },
        { t: "order", q: "Ordena el ciclo de vida de una persona en la organización.", items: ["Planificar la necesidad", "Atraer y seleccionar", "Incorporar (onboarding)", "Administrar y pagar", "Desarrollar", "Desvincular"], why: "Cada etapa depende de la anterior: es la columna vertebral del mapa de especialidades." }
      ]},
      { id: "r-entrevista", n: "Preguntas que sí y que no", mins: 4, items: [
        { t: "mcq", q: "¿Cuál es una pregunta conductual?", o: ["¿Te consideras responsable?", "¿Qué harías si tu jefe te grita?", "Cuéntame de una vez en que tuviste que cumplir un plazo muy corto: ¿qué hiciste y qué pasó?", "¿Dónde te ves en cinco años?"], a: 2, why: "Pide un hecho pasado con acción y resultado (método STAR)." },
        { t: "myth", q: "«Preguntar en la entrevista si la candidata piensa tener hijos ayuda a planificar el área.»", a: false, why: "Mito, y riesgoso: es una pregunta discriminatoria. Las decisiones de empleo no pueden basarse en la maternidad." },
        { t: "match", q: "Asocia cada letra del método STAR.", pairs: [["S", "Situación"], ["T", "Tarea"], ["A", "Acción"], ["R", "Resultado"]], why: "STAR guía la repregunta hasta obtener evidencia concreta." }
      ]}
    ]},
    { id: "n2", n: "Nivel 2 · Normativa peruana", d: "Las reglas de juego que RR.HH. aplica todos los días.", c: "var(--c-admin)", sets: [
      { id: "r-planilla", n: "Boleta y beneficios", mins: 6, items: [
        { t: "calc", q: "RMV desde el 1 de octubre de 2026: S/ 1,230. ¿Cuánto es la asignación familiar?", v: 123, tol: .01, why: "10% de la RMV: 1,230 × 10% = 123 (Ley 25129)." },
        { t: "calc", q: "Básico S/ 1,500 con asignación familiar. ¿Cuál es el valor hora (remuneración ordinaria ÷ 30 ÷ 8)? Usa dos decimales.", v: 6.76, tol: .01, why: "(1,500 + 123) ÷ 30 ÷ 8 = 6.7625 ≈ 6.76. La asignación familiar forma parte de la base." },
        { t: "mcq", q: "Un trabajador hizo 3 horas extra en un día. ¿Qué sobretasas se aplican?", o: ["25% a las tres", "35% a las tres", "25% a las dos primeras y 35% a la tercera", "100% a las tres"], a: 2, why: "D.S. 007-2002-TR: 25% en las dos primeras horas diarias y 35% en las siguientes." },
        { t: "myth", q: "«El aporte a EsSalud (9%) se descuenta de la boleta del trabajador.»", a: false, why: "Mito: lo paga el empleador. Al trabajador se le descuenta su sistema pensionario (ONP o AFP)." },
        { t: "doc", q: "Lee la boleta. ¿Qué está mal?", doc: "<table><tr><th>Concepto</th><th class='num'>S/</th></tr><tr><td>Remuneración básica</td><td class='num'>1,500.00</td></tr><tr><td>Asignación familiar</td><td class='num'>113.00</td></tr><tr><td>Total ingresos</td><td class='num'>1,613.00</td></tr><tr><td>ONP (13%)</td><td class='num'>209.69</td></tr><tr><td>EsSalud (9%)</td><td class='num'>145.17</td></tr><tr><td>Neto a pagar</td><td class='num'>1,258.14</td></tr></table><p class='small'>Periodo: noviembre 2026</p>", o: ["Nada, está correcta", "La asignación familiar no se actualizó a S/ 123 y se descontó EsSalud al trabajador", "La ONP debería ser 10%", "La asignación familiar no corresponde si gana más que la RMV"], a: 1, why: "En noviembre de 2026 la asignación familiar ya es S/ 123, y el 9% de EsSalud es aporte del empleador: no se descuenta al trabajador." }
      ]},
      { id: "r-feriados", n: "Feriados 2026", mins: 4, items: [
        { t: "mcq", q: "El 1 de noviembre de 2026 cayó domingo. Una trabajadora cuyo descanso semanal es el domingo no trabajó. ¿Recibe un pago adicional?", o: ["Sí, doble", "Sí, triple", "No: el feriado ya está pagado en su remuneración mensual", "Solo si lo pide"], a: 2, why: "El feriado no trabajado se paga como un día normal, ya incluido en el sueldo mensual." },
        { t: "mcq", q: "Un operario trabaja el 8 de diciembre sin descanso sustitutorio. ¿Qué le corresponde?", o: ["Nada adicional", "El día trabajado más una sobretasa de 100%", "Medio día adicional", "Solo un día libre en enero, sin fecha"], a: 1, why: "D.Leg. 713, art. 9: remuneración por el día trabajado más sobretasa de 100% (el llamado «pago triple», contando el día ya incluido en el sueldo)." },
        { t: "match", q: "Asocia cada fecha de 2026 con su feriado.", pairs: [["7 de junio", "Batalla de Arica y Día de la Bandera"], ["23 de julio", "Día de la Fuerza Aérea del Perú"], ["6 de agosto", "Batalla de Junín"], ["9 de diciembre", "Batalla de Ayacucho"]], why: "Son feriados nacionales recientes que suelen olvidarse al programar turnos." }
      ]},
      { id: "r-publico", n: "Sector público", mins: 5, items: [
        { t: "order", q: "Ordena las etapas de un concurso CAS.", items: ["Requerimiento con perfil", "Certificación presupuestal", "Aprobación de bases", "Convocatoria pública", "Evaluación curricular", "Entrevista", "Resultados", "Contrato"], why: "Sin presupuesto certificado no se convoca; sin publicidad no hay concurso válido." },
        { t: "calc", q: "Una postulante con discapacidad acreditada obtuvo 70 puntos finales. ¿Cuál es su puntaje con la bonificación de 15%?", v: 80.5, tol: .01, why: "70 × 1.15 = 80.5 (Ley 29973, según las bases)." },
        { t: "mcq", q: "¿Quién es el ente rector del sistema de gestión de recursos humanos del Estado?", o: ["SUNAFIL", "SERVIR", "MTPE", "Contraloría"], a: 1, why: "SERVIR (D.Leg. 1023)." },
        { t: "myth", q: "«Si el gerente municipal lo ordena, contratar a su sobrino sin concurso es válido.»", a: false, why: "Mito: además del concurso, rige la prohibición de nepotismo (Ley 26771, ampliada por la Ley 31299). Quien firma el informe también responde." }
      ]}
    ]},
    { id: "n3", n: "Nivel 3 · Casos y criterio", d: "Escenarios donde no hay una respuesta perfecta.", c: "var(--c-cuidar)", sets: [
      { id: "r-casos", n: "Decisiones difíciles", mins: 6, items: [
        { t: "mcq", q: "Recibes una queja de hostigamiento sexual contra un jefe. ¿Qué haces primero?", o: ["Hablar con el jefe para que se calme", "Mover a la víctima de oficina", "Dictar medidas de protección dentro de los 3 días hábiles y derivar al órgano que investiga", "Pedir pruebas notariales"], a: 2, why: "Ley 27942 y D.S. 014-2019-MIMP: medidas de protección en un máximo de 3 días hábiles; la víctima solo se rota si lo pide." },
        { t: "mcq", q: "Un gerente quiere despedir a un vendedor por «bajo rendimiento». No hay evaluaciones y sus pares en rutas similares tampoco llegan a la cuota. ¿Qué es lo más defendible?", o: ["Despedirlo: el gerente conoce a su equipo", "Revisar las cuotas, documentar y, si persiste frente a pares, otorgar el plazo de 30 días antes de cualquier decisión", "Bajarle el sueldo", "Moverlo a otra ciudad sin aviso"], a: 1, why: "TUO D.Leg. 728, arts. 23 b) y 31: comparación con el promedio en condiciones similares y plazo de 30 días naturales." },
        { t: "mcq", q: "Un jefe de tienda pide «solo chicas jóvenes para caja». ¿Cómo respondes?", o: ["Le haces caso en silencio", "Te niegas sin explicar", "Explicas que no se filtra por edad, sexo ni apariencia y propones una prueba objetiva de caja", "Lo denuncias de inmediato a SUNAFIL"], a: 2, why: "Traducir una necesidad legítima (rapidez, buena atención) a criterios válidos es el trabajo de RR.HH. (Ley 26772)." },
        { t: "myth", q: "«Si un error es tuyo, es mejor no contarlo para que no pierdan confianza en ti.»", a: false, why: "Mito. Lo que destruye la confianza es enterarse por otro lado. Reconocer, corregir el impacto y mejorar el proceso es lo profesional." },
        { t: "doc", q: "Lee el aviso. ¿Cuál es el problema principal?", doc: "<p><b>Se busca cocinero</b> · Varón de 25 a 35 años, de buena presencia, natural de Tacna. Experiencia mínima de 2 años. Carné de sanidad vigente.</p>", o: ["Pide demasiada experiencia", "Incluye requisitos discriminatorios: sexo, edad, apariencia y lugar de origen", "No dice el sueldo", "Pide carné de sanidad"], a: 1, why: "Ley 26772: las ofertas de empleo no pueden contener requisitos discriminatorios. Experiencia y carné de sanidad sí son requisitos del puesto." }
      ]}
    ]}
  ]
};
