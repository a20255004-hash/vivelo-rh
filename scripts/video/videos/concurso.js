/* Un concurso CAS, paso a paso (redacción alineada con concepts.js, municipal.js y concursocas.js). */
export default {
  id: "concurso", title: "Un concurso CAS, paso a paso", duration: 41, poster: 21.5,
  scenes: [
    { t0: 0, t1: 5, layout: "title", eyebrow: "Sector público · mérito e igualdad", title: "Un concurso CAS,|<em>paso a paso</em>", lead: "En el Estado se ingresa por concurso: reglas públicas, puntajes y actas.", mood: "curioso",
      sub: "Un concurso CAS, paso a paso. En el Estado se ingresa por concurso público de méritos." },
    { t0: 5, t1: 13, layout: "steps", eyebrow: "Antes de convocar", title: "Sin estas piezas|no hay concurso", scene: "municipalidad",
      steps: [{ k: "01", t: "Requerimiento", d: "El área usuaria presenta el perfil del puesto." }, { k: "02", t: "Presupuesto", d: "Certificación presupuestal y plaza registrada en el AIRHSP." }, { k: "03", t: "Bases y cronograma", d: "Requisitos, puntajes, fechas y bonificaciones de ley." }],
      sub: "Antes de convocar: el área usuaria presenta el perfil, se certifica el presupuesto y se aprueban bases y cronograma." },
    { t0: 13, t1: 22, layout: "steps", eyebrow: "Las etapas", title: "Cada etapa deja|un acta", scene: "municipalidad",
      steps: [{ k: "04", t: "Convocatoria pública", d: "Difusión en Talento Perú y en el portal institucional." }, { k: "05", t: "Evaluación curricular", d: "Filtra el cumplimiento de requisitos del perfil." }, { k: "06", t: "Entrevista personal", d: "Con criterios y puntajes definidos en las bases." }, { k: "07", t: "Resultados y contrato", d: "Cuadro de méritos publicado y suscripción del contrato." }],
      sub: "Luego vienen la convocatoria pública, la evaluación curricular, la entrevista y la publicación de resultados." },
    { t0: 22, t1: 30.5, layout: "compare", eyebrow: "Bonificaciones de ley · sobre el puntaje final", title: "Se aplican a quienes|aprueban todas las etapas",
      a: { h: "Persona con discapacidad", law: "Ley 29973 · 15%", formula: "70.00 × 1.15 = 80.50", tone: "brand" },
      b: { h: "Licenciado de las FF.AA.", law: "Ley 29248 · 10%", formula: "69.00 × 1.10 = 75.90", tone: "brand" },
      subs: [[22, 26.2, "Según las bases, las bonificaciones se aplican sobre el puntaje final, a quienes aprueban todas las etapas."], [26.2, 30.5, "15% para personas con discapacidad (Ley 29973) y 10% para licenciados de las Fuerzas Armadas (Ley 29248)."]] },
    { t0: 30.5, t1: 36.5, layout: "kusi", eyebrow: "Para recordar", mood: "pensando", say: "Lo que no está en un acta, no ocurrió.", mood2: "animo", say2: "El régimen CAS cambió en 2026 (Ley 32563): revisa siempre la norma vigente.",
      sub: "Todo queda en actas y se publica. El régimen CAS cambió en 2026 con la Ley 32563: revisa siempre la norma vigente." },
    { t0: 36.5, t1: 41, layout: "close", note: true, mood: "feliz",
      sub: "Vive la jornada del concurso CAS. Todo caso es una simulación." }
  ]
};
