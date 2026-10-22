/* Ante una queja de hostigamiento sexual. Solo pautas verificadas en concepts.js y sims/municipal.js. */
export default {
  id: "hostigamiento", title: "Ante una queja de hostigamiento sexual", duration: 41, poster: 21,
  scenes: [
    { t0: 0, t1: 5, layout: "title", eyebrow: "Qué hace RR.HH. · Ley 27942", title: "Ante una queja de|<em>hostigamiento sexual</em>", lead: "Proteger primero. Investigar con reserva.",
      sub: "Ante una queja de hostigamiento sexual, RR.HH. protege primero e investiga con reserva." },
    { t0: 5, t1: 11, layout: "kusi", eyebrow: "Lo primero", mood: "indignado", say: "El hostigamiento sexual no se «media» entre las partes.", mood2: "animo", say2: "Hay un procedimiento, y RR.HH. debe activarlo de inmediato.",
      sub: "El hostigamiento sexual no se «media» entre las partes. Hay un procedimiento, y RR.HH. debe activarlo de inmediato." },
    { t0: 11, t1: 22, layout: "steps", eyebrow: "La ruta", title: "Cuatro pasos,|plazos breves", scene: "municipalidad",
      steps: [{ k: "01", t: "Escuchar", d: "Recibir la queja sin juzgar e informar derechos. Sin formalidades excesivas." }, { k: "02", t: "Proteger", d: "Medidas de protección en un máximo de 3 días hábiles: alejar al presunto hostigador, impedir la comunicación." }, { k: "03", t: "Derivar", d: "Privado: Comité de intervención o delegado. Público: Secretaría Técnica del PAD." }, { k: "04", t: "Investigar y decidir", d: "Descargos, pruebas e informe del órgano competente; decisión motivada." }],
      subs: [[11, 16.4, "Primero, escuchar sin juzgar e informar derechos. Luego, dictar medidas de protección en un máximo de 3 días hábiles."], [16.4, 22, "Después, derivar al Comité de intervención (privado) o a la Secretaría Técnica del PAD (público), que investiga y decide."]] },
    { t0: 22, t1: 30, layout: "compare", eyebrow: "Sin revictimizar", title: "Lo que nunca|y lo que siempre",
      a: { h: "Nunca", items: ["Mediar entre las partes", "Mover a la víctima sin que lo pida", "Exigir pruebas para recibir la queja", "Romper la reserva"], tone: "bad" },
      b: { h: "Siempre", items: ["Restringir al presunto hostigador", "Rotar a la víctima solo si lo solicita", "Expediente reservado", "Plazos cumplidos y documentados"], tone: "ok" },
      subs: [[22, 26, "Nunca: mediar, mover a la víctima sin su pedido, exigir pruebas para recibir la queja ni romper la reserva."], [26, 30, "Siempre: medidas que restringen al presunto hostigador, expediente reservado y plazos cumplidos."]] },
    { t0: 30, t1: 36.5, layout: "feature", num: "§", color: "var(--brand)", scene: "municipalidad", eyebrow: "Marco normativo", title: "Ley 27942|y <span style='white-space:nowrap'>D.S. 014-2019-MIMP</span>", lead: "Alcanza a los sectores público y privado y a las modalidades formativas, también fuera del horario y en eventos de trabajo.", tags: ["Medidas de protección", "Confidencialidad", "No revictimización", "Prevención y capacitación"],
      sub: "La Ley 27942 y su reglamento alcanzan a los sectores público y privado y a las modalidades formativas, también fuera del horario." },
    { t0: 36.5, t1: 41, layout: "close", note: true, mood: "animo",
      sub: "Practica esta decisión en la jornada municipal. Todo caso es una simulación." }
  ]
};
