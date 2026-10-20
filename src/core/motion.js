/* Micro-interacciones de la capa «Galería del Trabajo».
   Todo es progresivo: si no hay JavaScript o la persona pidió reducir el movimiento, el
   contenido aparece completo y estático. Nada bloquea la lectura ni el teclado.
   - Revelado al hacer scroll (.rv, .rv-img) y títulos que suben por líneas (.split).
   - Barra de navegación que se oculta al bajar y vuelve al subir; marfil sobre héroes oscuros.
   - Botones magnéticos (solo con puntero fino), luz que sigue al cursor en el héroe.
   - Cifras que cuentan hasta su valor y un filete de progreso de lectura. */
import { reducedMotion } from "./util.js";

const fine = () => matchMedia("(hover: hover) and (pointer: fine)").matches;
let io = null, darkIO = null, lastY = 0;

export function initMotion(){
  const root = document.documentElement;
  if (!reducedMotion()) root.classList.add("motion");
  const bar = document.createElement("div");
  bar.className = "read-progress"; bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  let ticking = false;
  addEventListener("scroll", () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
      root.classList.toggle("scrolled", y > 24);
      const menuOpen = document.querySelector("[data-sheet]:not([hidden])");
      root.classList.toggle("nav-hide", y > 320 && y > lastY + 4 && !menuOpen && !document.activeElement?.closest?.(".topnav"));
      if (y < lastY - 4 || y < 320) root.classList.remove("nav-hide");
      lastY = y;
      bar.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : 0);
      ticking = false;
    });
  }, { passive: true });
  document.addEventListener("focusin", e => { if (e.target.closest && e.target.closest(".topnav")) root.classList.remove("nav-hide"); });
}

/* Divide un título en palabras envueltas para el revelado por líneas, sin perder accesibilidad:
   el texto completo queda en aria-label y las piezas se ocultan a lectores de pantalla. */
function split(el){
  if (el.dataset.splitDone) return;
  el.dataset.splitDone = "1";
  const label = el.textContent.replace(/\s+/g, " ").trim();
  let i = 0;
  const walk = node => {
    [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          const w = document.createElement("span"); w.className = "w";
          const s = document.createElement("span"); s.textContent = part; s.style.setProperty("--i", i++);
          w.appendChild(s); frag.appendChild(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== "BR") walk(n);
    });
  };
  walk(el);
  el.setAttribute("aria-label", label);
  [...el.querySelectorAll(".w")].forEach(w => w.setAttribute("aria-hidden", "true"));
}

function count(el){
  const to = +el.dataset.count, dur = 1600, t0 = performance.now();
  const step = t => {
    const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
    el.textContent = Math.round(to * e).toLocaleString("es-PE");
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function magnet(el){
  if (el.dataset.mag) return; el.dataset.mag = "1";
  el.addEventListener("pointermove", e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / r.width, y = (e.clientY - r.top - r.height / 2) / r.height;
    el.style.transform = `translate(${(x * 8).toFixed(2)}px, ${(y * 6).toFixed(2)}px)`;
  });
  el.addEventListener("pointerleave", () => { el.style.transform = ""; });
}

/* Se llama después de cada render de vista. */
export function scan(view){
  const root = document.documentElement;
  const motion = root.classList.contains("motion");
  // Revelado automático de los bloques de primer nivel, además de los marcados a mano.
  [...view.children].forEach((el, k) => { if (k > 0 && !el.classList.contains("lux-hero")) el.classList.add("rv"); });
  view.querySelectorAll("[data-split]").forEach(split);
  const targets = view.querySelectorAll(".rv, .rv-img, .split, [data-count]");
  if (io) io.disconnect();
  if (!motion || !("IntersectionObserver" in window)) {
    targets.forEach(t => { t.classList.add("in"); if (t.dataset.count) t.textContent = (+t.dataset.count).toLocaleString("es-PE"); });
  } else {
    io = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      if (en.target.dataset.count) count(en.target);
      io.unobserve(en.target);
    }), { rootMargin: "0px 0px -8% 0px", threshold: .08 });
    targets.forEach(t => io.observe(t));
    // Lo que ya está en pantalla aparece de inmediato (sin esperar al primer scroll).
    requestAnimationFrame(() => targets.forEach(t => { const r = t.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) { t.classList.add("in"); if (t.dataset.count && !t.dataset.counted) { t.dataset.counted = "1"; count(t); } io.unobserve(t); } }));
  }
  // Barra marfil mientras un héroe oscuro esté debajo de ella.
  if (darkIO) darkIO.disconnect();
  root.classList.remove("on-dark");
  const dark = view.querySelector(".lux-hero");
  if (dark && "IntersectionObserver" in window) {
    darkIO = new IntersectionObserver(([en]) => root.classList.toggle("on-dark", en.isIntersecting), { rootMargin: "0px 0px -92% 0px" });
    darkIO.observe(dark);
  } else if (dark) root.classList.add("on-dark");
  if (motion && fine()) {
    view.querySelectorAll(".btn.lg, [data-magnetic]").forEach(magnet);
    if (dark) dark.addEventListener("pointermove", e => {
      const r = dark.getBoundingClientRect();
      dark.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
      dark.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    });
  }
}
