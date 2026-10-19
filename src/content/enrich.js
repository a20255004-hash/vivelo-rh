/* Normaliza el esquema de las simulaciones (incluidas las migradas de la versión original)
   para que todas tengan tipo, escena, personas con identificador y nodos completos. */
const slug = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/^(ing|lic|abg|sra|sr|mg|chef|dr|dra)\.?\s+/, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function enrich(sim){
  sim.kind = sim.kind || sim.mode || "dia";
  sim.scene = sim.scene || "oficina";
  sim.fiction = sim.fiction !== false;
  (sim.people || []).forEach(p => { p.id = p.id || slug(p.n); p.av = p.av || {}; });
  sim.nodes.forEach(n => { n.type = n.type || "choice"; n.ch = n.ch || "sistema"; });
  return sim;
}
