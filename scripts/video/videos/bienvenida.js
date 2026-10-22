/* Bienvenida a VÍVELO RH: Kusi presenta la plataforma. */
import { areas } from "../../../src/content/areas.js";

export default {
  id: "bienvenida", title: "Bienvenida a VÍVELO RH", duration: 40, poster: 6.8,
  scenes: [
    { t0: 0, t1: 5, layout: "title", brand: true, eyebrow: "Laboratorio interactivo de Recursos Humanos", title: "Vive el trabajo|<em>antes de elegirlo.</em>", mood: "feliz",
      sub: "VÍVELO RH: un laboratorio interactivo de Recursos Humanos." },
    { t0: 5, t1: 11, layout: "kusi", eyebrow: "Tu guía", mood: "feliz", say: "¡Hola! Soy Kusi, una alpaca bebé.", mood2: "curioso", say2: "«Kusi» quiere decir «alegre» en quechua. Te acompaño en este viaje.",
      sub: "¡Hola! Soy Kusi, una alpaca bebé. «Kusi» quiere decir «alegre» en quechua. Te acompaño en este viaje." },
    { t0: 11, t1: 17.5, layout: "scene", scene: "oficina", eyebrow: "Jornadas", title: "Vive el día a día|de un puesto", mood: "curioso",
      bubbles: [{ who: "Ing. Walter Quispe", at: "08:05", t: "¿Y el supervisor? Necesito saber hoy." }, { who: "WhatsApp", at: "09:30", t: "Pásame los CV que tengas, porfa." }, { who: "Mesa de partes", at: "10:10", t: "Queja recibida: plazo de 3 días hábiles." }],
      sub: "Vive jornadas de trabajo: correos, chats, llamadas y urgencias del día a día." },
    { t0: 17.5, t1: 24, layout: "grid", eyebrow: "Después de cada decisión", title: "Cómo lo razona|una profesional", cols: 4,
      cards: [{ k: "01", t: "Buena práctica", d: "Lo que haría alguien con experiencia.", color: "var(--ok)" }, { k: "02", t: "Riesgo", d: "Qué puede salir mal y a quién afecta.", color: "var(--bad)" }, { k: "03", t: "Norma", d: "La regla peruana que aplica.", color: "var(--brand)" }, { k: "04", t: "Falta información", d: "Lo que conviene preguntar antes.", color: "var(--warn)" }],
      sub: "Después de cada decisión, mira cómo lo piensa y razona una profesional." },
    { t0: 24, t1: 30, layout: "big", eyebrow: "Mapa · Taller · Retos · Brújula", value: areas.length, unit: "especialidades por descubrir", caption: "Y una brújula que registra lo que te entusiasma, no solo tus aciertos.", mood: "animo",
      sub: `Explora ${areas.length} especialidades, practica en el taller y ponte a prueba en los retos.` },
    { t0: 30, t1: 35.5, layout: "scene", scene: "sectores", eyebrow: "Hecho para el Perú", title: "Privado y público,|pymes y grandes empresas", people: ["Ana", "Walter", "Rocío", "Félix"],
      sub: "Hecho para el Perú: sector privado y público, normativa verificada y feriados 2026." },
    { t0: 35.5, t1: 40, layout: "close", note: true, mood: "feliz",
      sub: "Vive el trabajo antes de elegirlo. Todo caso es una simulación." }
  ]
};
