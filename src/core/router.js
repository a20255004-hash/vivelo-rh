/* Enrutador por hash: #seccion o #seccion.parametro (compatible con los enlaces de la versión original).
   Cada vista devuelve { title, html, mount(root), docTitle, section, wide }. */
import { $, reducedMotion } from "./util.js";
import { emit } from "./bus.js";

const routes = {};
let lastKey = "";
let beforeRender = null;

export const register = (name, fn) => { routes[name] = fn; };
export const onBeforeRender = fn => { beforeRender = fn; };

export function parse(){
  const h = decodeURIComponent((location.hash || "#inicio").slice(1));
  const i = h.indexOf(".");
  return i < 0 ? { name: h || "inicio", param: "" } : { name: h.slice(0, i), param: h.slice(i + 1) };
}

export function go(h){ if (location.hash === h) render(true); else location.hash = h; }

export function render(keepScroll){
  const r = parse();
  const fn = routes[r.name] || routes.inicio;
  let v;
  try { v = fn(r.param) || {}; }
  catch (e) {
    console.error(e);
    v = { title: "Algo no cargó", html: `<div class="empty"><b>Esta sección no pudo cargarse.</b><span>Vuelve al <a href="#inicio">inicio</a>. Tu progreso sigue guardado.</span></div>` };
  }
  const paint = () => {
    if (beforeRender) beforeRender(r, v);
    const view = $("#view");
    view.innerHTML = v.html || "";
    view.dataset.section = v.section || r.name;
    if (v.mount) { try { v.mount(view); } catch (e) { console.error(e); } }
    const key = r.name + "." + r.param;
    if (key !== lastKey && !keepScroll) window.scrollTo(0, 0);
    if (key !== lastKey && !keepScroll) { const h = view.querySelector("h1"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); } }
    lastKey = key;
    document.title = (v.docTitle ? v.docTitle + " · " : "") + "VÍVELO RH";
    emit("route", { name: r.name, param: r.param, view: v });
  };
  if (!keepScroll && document.startViewTransition && !reducedMotion()) document.startViewTransition(paint);
  else paint();
}

export function start(){
  window.addEventListener("hashchange", () => render());
  render();
}
