/* Las cinco familias de Recursos Humanos (datos de src/content/areas.js). */
import { clusters, areas } from "../../../src/content/areas.js";

const SCN = { atraer: "reunion", admin: "oficina", desarrollar: "academia", cuidar: "cooperativa", estrategia: "corporativo" };
const ex = c => areas.filter(a => a.c === c.id).map(a => a.n);

const fam = clusters.map((c, i) => {
  const names = ex(c), t0 = 11 + i * 6;
  return { t0, t1: t0 + 6, layout: "feature", num: String(i + 1).padStart(2, "0"), color: c.color, scene: SCN[c.id], eyebrow: `Familia ${i + 1} de ${clusters.length} · ${names.length} especialidades`,
    title: c.n, lead: c.d, tags: names,
    subs: [[t0, t0 + 3, `${c.n}: ${c.d.charAt(0).toLowerCase() + c.d.slice(1)}`], [t0 + 3, t0 + 6, `Por ejemplo: ${names.slice(0, 3).join(" · ")}.`]] };
});

export default {
  id: "familias", title: "Las cinco familias de Recursos Humanos", duration: 45.5, poster: 16.5,
  scenes: [
    { t0: 0, t1: 5.5, layout: "title", eyebrow: "Mapa de especialidades", title: "Las cinco familias|de <em>Recursos Humanos</em>", lead: `${areas.length} especialidades agrupadas según lo que buscan lograr.`, mood: "curioso",
      sub: `Recursos Humanos no es un solo trabajo: son ${areas.length} especialidades agrupadas en cinco familias.` },
    { t0: 5.5, t1: 11, layout: "grid", eyebrow: "Cinco propósitos", title: "Cada familia responde|a una pregunta distinta", cols: 5,
      cards: clusters.map((c, i) => ({ k: String(i + 1).padStart(2, "0"), t: c.n, d: c.d, color: c.color })),
      sub: "Atraer, administrar, desarrollar, cuidar y decidir con datos: cada familia cumple un propósito distinto." },
    ...fam,
    { t0: 41, t1: 45.5, layout: "close", mood: "animo", line: "Explora el mapa y descubre qué familia te entusiasma.",
      sub: "Explora el mapa y descubre qué familia te entusiasma. Vive el trabajo antes de elegirlo." }
  ]
};
