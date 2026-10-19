/* Registro de contenidos. Para añadir una simulación: crea src/content/sims/<id>.js con el mismo
   esquema y agrégala a SIMS. Para añadir un concepto, un cargo o un reto, edita su archivo:
   la interfaz se arma sola a partir de los datos. */
import { traits, tasks, clusters, contexts, areas, subsistemas } from "./areas.js";
import { roles } from "./roles.js";
import { concepts } from "./concepts.js";
import { sectors } from "./sectors.js";
import { sources } from "./sources.js";
import { tools } from "./tools.js";
import { challenges } from "./challenges.js";
import { journey } from "./journey.js";
import { holidays } from "./holidays.js";
import { media } from "./media.js";
import practicante from "./sims/practicante.js";
import seleccion from "./sims/seleccion.js";
import planillas from "./sims/planillas.js";
import municipal from "./sims/municipal.js";
import relaciones from "./sims/relaciones.js";
import capacitacion from "./sims/capacitacion.js";
import semana from "./sims/semana.js";
import feriados from "./sims/feriados.js";
import hrbp from "./sims/hrbp.js";
import discriminacion from "./sims/discriminacion.js";
import campana from "./sims/campana.js";
import concursocas from "./sims/concursocas.js";
import { enrich } from "./enrich.js";

export const SIMS = [practicante, seleccion, planillas, feriados, hrbp, campana, discriminacion, relaciones, capacitacion, semana, municipal, concursocas];
SIMS.forEach(enrich);

export const C = { traits, tasks, clusters, contexts, areas, subsistemas, roles, concepts, sectors, sources, tools, sims: SIMS, challenges, journey, holidays, media };

const by = (arr, id) => arr.find(x => x.id === id);
export const area = id => by(areas, id);
export const cluster = id => by(clusters, id);
export const sim = id => by(SIMS, id);
export const role = id => by(roles, id);
export const concept = id => by(concepts, id);
export const tool = id => by(tools, id);
export const task = id => by(tasks, id) || { id, n: id };
export const trait = id => by(traits, id);
export const challenge = id => challenges.levels.flatMap(l => l.sets).find(s => s.id === id);

export const KIND = {
  micro: { n: "Primera experiencia", d: "Una mañana corta para empezar" },
  dia: { n: "Una jornada", d: "Un día completo en el puesto" },
  semana: { n: "Una semana", d: "Cinco días con problemas que no se resuelven en uno" },
  urgente: { n: "Caso urgente", d: "Algo que no puede esperar" }
};
export const VERIFIED = "19 de octubre de 2026";
