/* Guion del video de bienvenida (también genera los subtítulos .vtt). */
export const DURATION = 38;
export const SCENES = [
  { t0: 0, t1: 5.5, id: "logo", sub: "VÍVELO RH · Laboratorio interactivo de Recursos Humanos" },
  { t0: 5.5, t1: 11, id: "coco", mood: "feliz", sub: "¡Hola! Soy Coco, un ronsoco explorador. Te acompaño en este viaje." },
  { t0: 11, t1: 17.5, id: "jornada", mood: "curioso", sub: "Vive jornadas de trabajo: correos, chats, llamadas y urgencias reales del día a día." },
  { t0: 17.5, t1: 24, id: "mente", mood: "pensando", sub: "Después de cada decisión, mira cómo lo piensa y razona una profesional." },
  { t0: 24, t1: 30, id: "mapa", mood: "animo", sub: "Explora 26 especialidades, practica en el taller y ponte a prueba en los retos." },
  { t0: 30, t1: 35, id: "peru", mood: "celebra", sub: "Hecho para el Perú: sector privado y público, normativa verificada y feriados 2026." },
  { t0: 35, t1: 38, id: "fin", mood: "feliz", sub: "Vive el trabajo antes de elegirlo. Todo caso es una simulación." }
];
const ts = s => { const m = Math.floor(s / 60), r = (s % 60).toFixed(3).padStart(6, "0"); return `00:${String(m).padStart(2, "0")}:${r}`; };
export const vtt = () => "WEBVTT\n\n" + SCENES.map((s, i) => `${i + 1}\n${ts(s.t0 + .2)} --> ${ts(s.t1 - .1)}\n${s.sub}\n`).join("\n");
