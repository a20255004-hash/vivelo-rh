/* Imágenes 3D originales (dioramas en estilo arcilla) y retratos 3D de Kusi.
   art(nombre) devuelve el render 3D si existe para esa escena; si no, la ilustración SVG de
   siempre (scenes.js). Así cada vista gana imagen sin depender de que exista cada render.
   Todas las imágenes son ilustraciones originales del proyecto: no son fotos ni lugares reales. */
import { scene } from "./scenes.js";
import { MOODS } from "./coco.js";

/* escena SVG → render 3D más cercano */
export const ART3D = {
  oficina: "oficina", almacen: "almacen", municipalidad: "municipalidad", planta: "planta",
  cooperativa: "cooperativa", corporativo: "corporativo", retail: "retail", agro: "agro",
  reunion: "reunion", academia: "academia", hospital: "hospital", mineria: "mineria",
  taller: "boleta", brujula: "brujula", sectores: "municipalidad", retos: "balanza", hotel: "reunion",
  boleta: "boleta", balanza: "balanza"
};
/* los que ya están renderizados (se completa al generar nuevos con scripts/3d/scenes) */
export const READY = new Set(["oficina", "almacen", "municipalidad", "planta", "cooperativa", "retail", "agro", "reunion", "hospital", "corporativo", "academia", "mineria", "brujula", "balanza", "boleta"]);

export const ALT = {
  oficina: "Ilustración 3D de una oficina de RR.HH. con escritorio, archivadores y una ventana",
  almacen: "Ilustración 3D de un almacén con estanterías, cajas, un montacargas y personal con chaleco",
  municipalidad: "Ilustración 3D de la fachada de una municipalidad con arcos y vecinos haciendo fila",
  planta: "Ilustración 3D de una planta de alimentos con línea de envasado y operarias con cofia",
  cooperativa: "Ilustración 3D de una cooperativa de ahorro y crédito con ventanillas y una capacitación",
  corporativo: "Ilustración 3D de un piso corporativo en Lima con ventanales",
  retail: "Ilustración 3D de una tienda por departamentos en campaña navideña",
  agro: "Ilustración 3D de un fundo agroexportador en Ica con cultivos y trabajadores",
  reunion: "Ilustración 3D de una sala de reuniones con un equipo alrededor de la mesa",
  academia: "Ilustración 3D de un aula de capacitación con proyector",
  hospital: "Ilustración 3D del área administrativa de un hospital público",
  mineria: "Ilustración 3D de un campamento minero con cascos y camión",
  boleta: "Ilustración 3D de una boleta de pago con monedas y calculadora",
  brujula: "Ilustración 3D de una brújula de latón sobre documentos",
  balanza: "Ilustración 3D de una balanza que equilibra un documento y un corazón"
};

export const has3d = name => READY.has(ART3D[name]);
export const artSrc = (name, sq = false) => has3d(name) ? `assets/3d/scenes/${ART3D[name]}${sq ? "-sq" : ""}.webp` : null;

/* imagen principal de un héroe o una tarjeta */
export function art(name, opts = {}){
  const key = ART3D[name];
  if (!READY.has(key)) return scene(name);
  const src = `assets/3d/scenes/${key}${opts.sq ? "-sq" : ""}.webp`;
  return `<img class="scene art3d ${opts.cls || ""}" src="${src}" alt="${opts.decorative ? "" : ALT[key]}" ${opts.decorative ? 'aria-hidden="true"' : ""} loading="${opts.eager ? "eager" : "lazy"}" decoding="async" width="${opts.sq ? 800 : 1600}" height="${opts.sq ? 800 : 1000}">`;
}

/* Kusi en 3D (render estático; ver kusi3d.js para la versión interactiva) */
export function kusi3dImg(mood = "feliz", opts = {}){
  const m = MOODS[mood] ? mood : "feliz";
  const size = opts.size || 160;
  return `<img class="kusi3d ${opts.cls || ""}" src="assets/3d/kusi/kusi-${opts.hero ? "hero" : m}.webp" width="${size}" height="${size}" alt="${opts.decorative ? "" : `Kusi, la alpaca guía, en 3D: ${MOODS[m].n.toLowerCase()}`}" ${opts.decorative ? 'aria-hidden="true"' : ""} loading="${opts.eager ? "eager" : "lazy"}" decoding="async">`;
}
