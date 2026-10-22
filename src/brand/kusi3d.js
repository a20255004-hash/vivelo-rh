// Kusi 3D en vivo · monta la alpaca guía en un contenedor.
//   import { mountKusi3D } from "./src/brand/kusi3d.js";
//   const k = await mountKusi3D(el, { mood: "feliz", fallbackSrc: "assets/3d/kusi/kusi-feliz.png" });
//   k.setMood("indignado"); k.destroy();
// Carga three.js de forma diferida; si no hay WebGL o falla la importación,
// muestra <img src=fallbackSrc>. Respeta prefers-reduced-motion.

const ALT = "Kusi, la alpaca guía de VÍVELO RH";
const LABELS = {
  neutral: "tranquila", feliz: "feliz", curioso: "curiosa", sorpresa: "sorprendida", preocupado: "preocupada",
  triste: "triste", indignado: "indignada", pensando: "pensando", animo: "dando ánimo", celebra: "celebrando",
};
const label = (m) => `${ALT} (${LABELS[m] || "tranquila"})`;

function hasWebGL() {
  try { const c = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl"))); } catch { return false; }
}

function fallback(container, src, mood) {
  container.replaceChildren();
  if (!src) return { setMood() {}, destroy() { container.replaceChildren(); }, fallback: true };
  const img = document.createElement("img");
  img.src = src; img.alt = ALT; img.decoding = "async"; img.loading = "lazy";
  img.style.cssText = "width:100%;height:100%;object-fit:contain;display:block";
  container.appendChild(img);
  return {
    fallback: true,
    setMood(m) { if (/kusi-[a-z]+\.(png|webp)$/.test(img.src)) img.src = img.src.replace(/kusi-[a-z]+\.(png|webp)$/, `kusi-${m}.$1`); },
    destroy() { img.remove(); },
  };
}

export async function mountKusi3D(container, { mood = "feliz", interactive = true, fallbackSrc } = {}) {
  if (!container) throw new Error("mountKusi3D: falta el contenedor");
  if (!hasWebGL()) return fallback(container, fallbackSrc, mood);
  let THREE, model;
  try {
    [THREE, model] = await Promise.all([
      import(new URL("../../assets/vendor/three.module.min.js", import.meta.url).href),
      import(new URL("./kusi-model.js", import.meta.url).href),
    ]);
  } catch (e) {
    return fallback(container, fallbackSrc, mood);
  }

  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  } catch { return fallback(container, fallbackSrc, mood); }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const canvas = renderer.domElement;
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", label(mood));
  canvas.style.cssText = "width:100%;height:100%;display:block;touch-action:pan-y";
  container.replaceChildren(canvas);

  const scene = new THREE.Scene();
  model.addKusiStudio(THREE, scene, renderer, { shadows: true, shadowMapSize: 1024 });
  const camera = new THREE.PerspectiveCamera(24, 1, 0.1, 50);
  camera.position.set(0, 1.55, 6.4); camera.lookAt(0, 1.06, 0);
  const kusi = model.buildKusi(THREE, { mood });
  scene.add(kusi);

  const resize = () => {
    const w = Math.max(1, container.clientWidth), h = Math.max(1, container.clientHeight || w);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    // encuadre: que Kusi entre siempre completo
    camera.fov = w >= h ? 24 : 24 * (h / w) ** 0.9;
    camera.updateProjectionMatrix();
  };
  resize();

  // estado de animación
  const look = { x: 0, y: 0 }, target = { x: 0, y: 0 };
  let blink = 0, nextBlink = 1.5 + Math.random() * 2, blinkT = -1;
  let visible = true, raf = 0, last = performance.now(), t = 0, destroyed = false;

  const frame = (now) => {
    raf = 0;
    if (destroyed) return;
    const dt = Math.min(0.05, (now - last) / 1000); last = now; t += dt;
    if (t > nextBlink && blinkT < 0) { blinkT = 0; }
    if (blinkT >= 0) { blinkT += dt; blink = Math.sin(Math.min(1, blinkT / 0.16) * Math.PI); if (blinkT > 0.16) { blinkT = -1; blink = 0; nextBlink = t + 2.2 + Math.random() * 3; } }
    look.x += (target.x - look.x) * Math.min(1, dt * 4); look.y += (target.y - look.y) * Math.min(1, dt * 4);
    kusi.userData.update(t, { blink, look });
    renderer.render(scene, camera);
    schedule();
  };
  const schedule = () => { if (!reduce && visible && !document.hidden && !raf && !destroyed) { last = performance.now(); raf = requestAnimationFrame(frame); } };
  const still = () => { kusi.userData.update(0, { animate: false }); renderer.render(scene, camera); };

  const onPointer = (e) => {
    const r = canvas.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height * 0.35;
    target.x = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2)));
    target.y = Math.max(-1, Math.min(1, -(e.clientY - cy) / (window.innerHeight / 2)));
  };
  const onLeave = () => { target.x = 0; target.y = 0; };
  if (interactive && !reduce) { window.addEventListener("pointermove", onPointer, { passive: true }); document.addEventListener("pointerleave", onLeave); }

  const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => { visible = es.some((e) => e.isIntersecting); schedule(); }) : null;
  io?.observe(container);
  const onVis = () => schedule();
  document.addEventListener("visibilitychange", onVis);
  const ro = "ResizeObserver" in window ? new ResizeObserver(() => { resize(); if (reduce || !raf) still(); }) : null;
  ro?.observe(container);
  const onLost = (e) => { e.preventDefault(); destroy(); const fb = fallback(container, fallbackSrc, kusi.userData.mood()); handle.setMood = fb.setMood; };
  canvas.addEventListener("webglcontextlost", onLost);

  if (reduce) still(); else { still(); schedule(); }

  function destroy() {
    if (destroyed) return; destroyed = true;
    if (raf) cancelAnimationFrame(raf);
    io?.disconnect(); ro?.disconnect();
    window.removeEventListener("pointermove", onPointer); document.removeEventListener("pointerleave", onLeave);
    document.removeEventListener("visibilitychange", onVis);
    canvas.removeEventListener("webglcontextlost", onLost);
    kusi.userData.dispose();
    scene.traverse((o) => { const m = o.material; if (m) (Array.isArray(m) ? m : [m]).forEach((x) => { x.map?.dispose(); x.dispose(); }); });
    scene.environment?.dispose();
    renderer.dispose();
    canvas.remove();
  }

  const handle = {
    setMood(m) {
      kusi.userData.setMood(m);
      canvas.setAttribute("aria-label", label(kusi.userData.mood()));
      if (reduce || !visible || document.hidden) still();
    },
    destroy,
  };
  return handle;
}
