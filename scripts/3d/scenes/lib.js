// VÍVELO RH · Kit de dioramas 3D "clay" (three.js). Primitivas, materiales y figuras.
import * as THREE from "three";
import { RoundedBoxGeometry } from "./vendor/RoundedBoxGeometry.js";

export { THREE };

export const C = {
  lino: 0xF5F0E8, marfil: 0xFBF8F3, arena: 0xECE5DA, piedra: 0xCFC5B6, grafito: 0x4A443D, tinta: 0x14110F,
  carmin: 0x8E1B2C, laton: 0xC9A46A, pizarra: 0x3E5C76, salvia: 0x4F6B58, vino: 0x8E4A5A, ciruela: 0x4B3F6B,
  latonOsc: 0x85683D,
  // derivados suaves (mezclas de la paleta)
  arenaOsc: 0xDDD3C4, piedraOsc: 0xB9AD9B, salviaClara: 0x7E9682, pizarraClara: 0x8FA3B5, vidrio: 0xD9E2E6,
  madera: 0xB89A72, maderaClara: 0xD6C3A3,
};
export const SKIN = [0xF3D3B6, 0xD6A177, 0x9F6941, 0x7A4E2E];
export const HAIR = [0x2A211C, 0x4A3426, 0x14110F, 0x6B4A33];

const matCache = new Map();
export function M(color, o = {}) {
  const key = color + JSON.stringify(o);
  if (matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshStandardMaterial({
    color, roughness: o.rough ?? 0.82, metalness: o.metal ?? 0,
    emissive: o.emissive ?? 0x000000, emissiveIntensity: o.ei ?? 1,
    transparent: !!o.opacity && o.opacity < 1, opacity: o.opacity ?? 1, map: o.map ?? null,
    side: o.side ?? THREE.FrontSide,
  });
  if (o.map) m.color.set(0xffffff);
  matCache.set(key, m);
  return m;
}
export const metal = (c, rough = 0.38) => M(c, { rough, metal: 0.55 });

const geoCache = new Map();
function rgeo(w, h, d, r, seg = 3) {
  r = Math.max(0.001, Math.min(r, Math.min(w, h, d) / 2 - 0.0005));
  const k = [w, h, d, r, seg].map(v => +v.toFixed(4)).join("|");
  if (!geoCache.has(k)) geoCache.set(k, new RoundedBoxGeometry(w, h, d, seg, r));
  return geoCache.get(k);
}

function place(mesh, o) {
  mesh.position.set(o.x ?? 0, o.y ?? 0, o.z ?? 0);
  if (o.rx) mesh.rotation.x = o.rx;
  if (o.ry) mesh.rotation.y = o.ry;
  if (o.rz) mesh.rotation.z = o.rz;
  mesh.castShadow = o.cast ?? true;
  mesh.receiveShadow = o.recv ?? true;
  (o.p ?? o.parent)?.add(mesh);
  return mesh;
}

/** Caja redondeada; y = base (apoyo), x/z = centro. */
export function box(w, h, d, color, o = {}) {
  const mat = color instanceof THREE.Material ? color : M(color, o.m);
  const mesh = new THREE.Mesh(rgeo(w, h, d, o.r ?? Math.min(0.06, Math.min(w, h, d) * 0.22), o.seg ?? 3), mat);
  const g = o.center ? mesh : null;
  place(mesh, { ...o, y: (o.y ?? 0) + (o.center ? 0 : h / 2) });
  return mesh;
}
export function cyl(rt, rb, h, color, o = {}) {
  const mat = color instanceof THREE.Material ? color : M(color, o.m);
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, o.seg ?? 40, 1, o.open ?? false), mat);
  return place(mesh, { ...o, y: (o.y ?? 0) + (o.center ? 0 : h / 2) });
}
export function sphere(r, color, o = {}) {
  const mat = color instanceof THREE.Material ? color : M(color, o.m);
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, o.seg ?? 40, Math.round((o.seg ?? 40) * 0.7), 0, Math.PI * 2, 0, o.theta ?? Math.PI), mat);
  if (o.sy) mesh.scale.y = o.sy;
  if (o.sx) mesh.scale.x = o.sx;
  if (o.sz) mesh.scale.z = o.sz;
  return place(mesh, o);
}
export function capsule(r, len, color, o = {}) {
  const mat = color instanceof THREE.Material ? color : M(color, o.m);
  const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 10, 28), mat);
  return place(mesh, o);
}
export function torus(R, r, color, o = {}) {
  const mat = color instanceof THREE.Material ? color : M(color, o.m);
  const mesh = new THREE.Mesh(new THREE.TorusGeometry(R, r, 20, 64, o.arc ?? Math.PI * 2), mat);
  return place(mesh, o);
}
export function group(o = {}) {
  const g = new THREE.Group();
  g.position.set(o.x ?? 0, o.y ?? 0, o.z ?? 0);
  if (o.ry) g.rotation.y = o.ry;
  if (o.rx) g.rotation.x = o.rx;
  if (o.rz) g.rotation.z = o.rz;
  if (o.s) g.scale.setScalar(o.s);
  (o.p ?? o.parent)?.add(g);
  return g;
}
/** Panel plano con textura (pantallas, pizarras, papeles). Cara mirando a +z local. */
export function panel(w, h, tex, o = {}) {
  const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: o.rough ?? 0.7, emissive: o.glow ? 0xffffff : 0x000000, emissiveMap: o.glow ? tex : null, emissiveIntensity: o.glow ?? 0 });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  return place(mesh, { cast: false, ...o });
}

/** Textura de canvas 2D. draw(ctx, w, h) */
export function tex(w, h, draw) {
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const ctx = c.getContext("2d");
  draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
export const css = n => "#" + n.toString(16).padStart(6, "0");
export function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}
export const FONT = "Helvetica, Arial, sans-serif";

/* ------------------------------------------------------------------ */
/* Base flotante                                                       */
/* ------------------------------------------------------------------ */
export function base(root, w, d, o = {}) {
  const top = o.top ?? C.arena, side = o.side ?? C.piedra;
  box(w, 0.55, d, side, { p: root, y: -0.55, r: 0.26, seg: 5 });
  box(w - 0.08, 0.14, d - 0.08, top, { p: root, y: -0.06, r: 0.07, seg: 4 });
  return 0.08; // altura del piso
}

/** Muros de recorte (izquierda = -x, fondo = -z). openings: [{wall:'back'|'left', a, b, y0, y1}] */
export function walls(root, w, d, h, o = {}) {
  const t = o.t ?? 0.22, col = o.color ?? C.marfil, y = o.y ?? 0.08;
  const out = [];
  const mk = (which, a0, a1, y0, y1) => {
    const len = a1 - a0; if (len <= 0.001 || y1 - y0 <= 0.001) return;
    const mid = (a0 + a1) / 2;
    if (which === "back") out.push(box(len, y1 - y0, t, col, { p: root, x: mid, y: y + y0, z: -d / 2 + t / 2, r: 0.04 }));
    else out.push(box(t, y1 - y0, len, col, { p: root, x: -w / 2 + t / 2, y: y + y0, z: mid, r: 0.04 }));
  };
  for (const which of ["back", "left"]) {
    if (o.only && o.only !== which) continue;
    const L = which === "back" ? w : d;
    const a0 = which === "back" ? -w / 2 : -d / 2 + t;
    const ops = (o.openings ?? []).filter(q => q.wall === which).sort((p, q) => p.a - q.a);
    if (!ops.length) { mk(which, a0, a0 + L - (which === "back" ? 0 : t), 0, h); continue; }
    let cur = a0;
    for (const q of ops) {
      mk(which, cur, q.a, 0, h);
      mk(which, q.a, q.b, 0, q.y0);
      mk(which, q.a, q.b, q.y1, h);
      cur = q.b;
    }
    mk(which, cur, which === "back" ? w / 2 : d / 2, 0, h);
  }
  // zócalo
  if (o.skirt !== false) {
    if (o.only !== "left") box(w - t, 0.12, 0.05, o.skirtColor ?? C.piedra, { p: root, x: t / 2, y, z: -d / 2 + t + 0.025, r: 0.02 });
    if (o.only !== "back") box(0.05, 0.12, d - t, o.skirtColor ?? C.piedra, { p: root, x: -w / 2 + t + 0.025, y, z: t / 2, r: 0.02 });
  }
  return out;
}

/** Ventana dentro de un vano (marco + vidrio + cielo). */
export function windowPane(root, which, w, d, q, o = {}) {
  const t = o.t ?? 0.22, y = o.y ?? 0.08;
  const len = q.b - q.a, hh = q.y1 - q.y0, mid = (q.a + q.b) / 2;
  const g = group({ p: root });
  const sky = tex(256, 256, (c, W, H) => {
    const gr = c.createLinearGradient(0, 0, 0, H);
    gr.addColorStop(0, o.sky0 ?? "#C9D6DD"); gr.addColorStop(1, o.sky1 ?? "#F1EEE7");
    c.fillStyle = gr; c.fillRect(0, 0, W, H);
    if (o.drawSky) o.drawSky(c, W, H);
  });
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(len, hh), new THREE.MeshStandardMaterial({ map: sky, emissive: 0xffffff, emissiveMap: sky, emissiveIntensity: 0.55, roughness: 0.3 }));
  glass.receiveShadow = false;
  const fr = o.frame ?? C.grafito;
  if (which === "back") {
    glass.position.set(mid, y + q.y0 + hh / 2, -d / 2 + t * 0.35); g.add(glass);
    box(len, 0.05, 0.05, fr, { p: g, x: mid, y: y + q.y0 + hh / 2 - 0.025, z: -d / 2 + t * 0.4, r: 0.015 });
    for (let i = 1; i < (o.mull ?? 2); i++) box(0.05, hh, 0.05, fr, { p: g, x: q.a + len * i / (o.mull ?? 2), y: y + q.y0, z: -d / 2 + t * 0.4, r: 0.015 });
    box(len + 0.08, 0.06, t + 0.12, C.marfil, { p: g, x: mid, y: y + q.y0 - 0.03, z: -d / 2 + t / 2 + 0.06, r: 0.02 });
  } else {
    glass.rotation.y = Math.PI / 2;
    glass.position.set(-w / 2 + t * 0.35, y + q.y0 + hh / 2, mid); g.add(glass);
    box(0.05, 0.05, len, fr, { p: g, x: -w / 2 + t * 0.4, y: y + q.y0 + hh / 2 - 0.025, z: mid, r: 0.015 });
    for (let i = 1; i < (o.mull ?? 2); i++) box(0.05, hh, 0.05, fr, { p: g, x: -w / 2 + t * 0.4, y: y + q.y0, z: q.a + len * i / (o.mull ?? 2), r: 0.015 });
    box(t + 0.12, 0.06, len + 0.08, C.marfil, { p: g, x: -w / 2 + t / 2 + 0.06, y: y + q.y0 - 0.03, z: mid, r: 0.02 });
  }
  return g;
}

/* ------------------------------------------------------------------ */
/* Figuras                                                             */
/* ------------------------------------------------------------------ */
let seed = 7;
export function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }
export function reseed(s) { seed = s; }
export const pick = a => a[Math.floor(rnd() * a.length)];

/**
 * Figurilla sin rostro. o: {skin, shirt, pants, hair, hat:'helmet'|'cofia'|'sun'|'cap'|null, vest, coat, seated, s, ry, arms:'down'|'up'|'front', long}
 * Mira hacia +z local.
 */
export function figure(p, o = {}) {
  const g = group({ p, x: o.x, y: o.y, z: o.z, ry: o.ry, s: o.s ?? 1 });
  const skin = o.skin ?? SKIN[0], shirt = o.shirt ?? C.pizarra, pants = o.pants ?? C.grafito;
  const seated = !!o.seated;
  const hipY = seated ? (o.seatH ?? 0.46) : 0.6;
  // piernas
  if (seated) {
    capsule(0.085, 0.28, pants, { p: g, x: -0.09, y: hipY + 0.05, z: 0.16, rx: Math.PI / 2 });
    capsule(0.085, 0.28, pants, { p: g, x: 0.09, y: hipY + 0.05, z: 0.16, rx: Math.PI / 2 });
    capsule(0.08, hipY - 0.12, pants, { p: g, x: -0.09, y: (hipY + 0.05) / 2, z: 0.36 });
    capsule(0.08, hipY - 0.12, pants, { p: g, x: 0.09, y: (hipY + 0.05) / 2, z: 0.36 });
  } else {
    capsule(0.088, 0.42, pants, { p: g, x: -0.095, y: 0.3, z: 0 });
    capsule(0.088, 0.42, pants, { p: g, x: 0.095, y: 0.3, z: 0 });
  }
  // torso
  const torsoCol = o.coat ?? shirt;
  const tl = o.coat ? 0.36 : 0.3;
  const torso = capsule(0.2, tl, torsoCol, { p: g, y: hipY + 0.25 + (o.coat ? -0.03 : 0) });
  torso.scale.set(1, 1, 0.78);
  if (o.coat && !seated) { // faldón de bata
    const sk = cyl(0.2, 0.235, 0.32, o.coat, { p: g, y: hipY - 0.22, seg: 32 }); sk.scale.z = 0.8;
    box(0.09, 0.3, 0.02, shirt, { p: g, y: hipY + 0.24, z: 0.155, r: 0.01, cast: false });
  }
  if (o.vest) {
    const v = cyl(0.215, 0.215, 0.36, o.vest, { p: g, y: hipY + 0.06, seg: 32 }); v.scale.z = 0.8;
    const s1 = cyl(0.218, 0.218, 0.04, C.marfil, { p: g, y: hipY + 0.14, seg: 32, cast: false }); s1.scale.z = 0.8;
    const s2 = cyl(0.218, 0.218, 0.04, C.marfil, { p: g, y: hipY + 0.28, seg: 32, cast: false }); s2.scale.z = 0.8;
  }
  // brazos
  const ay = hipY + 0.42;
  const arms = o.arms ?? "down";
  for (const sx of [-1, 1]) {
    const a = arms === "front" || (arms === "one" && sx > 0) ? capsule(0.06, 0.3, torsoCol, { p: g, x: sx * 0.2, y: ay - 0.08, z: 0.14, rx: Math.PI / 2.6 })
      : arms === "up" && sx > 0 ? capsule(0.06, 0.3, torsoCol, { p: g, x: sx * 0.26, y: ay + 0.18, z: 0.02, rz: -0.3 * sx })
        : capsule(0.06, 0.32, torsoCol, { p: g, x: sx * 0.235, y: ay - 0.2, z: 0, rz: 0.12 * sx });
    // mano
    const hp = a.position.clone();
    if (arms === "front" || (arms === "one" && sx > 0)) sphere(0.058, skin, { p: g, x: hp.x, y: hp.y - 0.06, z: hp.z + 0.17 });
    else if (arms === "up" && sx > 0) sphere(0.058, skin, { p: g, x: hp.x + 0.07, y: hp.y + 0.2, z: hp.z });
    else sphere(0.058, skin, { p: g, x: hp.x + 0.03 * sx, y: hp.y - 0.22, z: hp.z });
  }
  // cuello + cabeza
  cyl(0.065, 0.07, 0.1, skin, { p: g, y: hipY + 0.6 });
  const headY = hipY + 0.82;
  sphere(0.165, skin, { p: g, y: headY });
  const hat = o.hat;
  if (hat !== "helmet" && hat !== "cofia" && o.hair !== false) {
    const hc = o.hair ?? HAIR[0];
    sphere(0.175, hc, { p: g, y: headY + 0.015, z: -0.012, theta: Math.PI * 0.52 });
    if (o.long) { const b = capsule(0.13, 0.12, hc, { p: g, y: headY - 0.1, z: -0.07 }); b.scale.z = 0.7; }
    if (o.bun) sphere(0.08, hc, { p: g, y: headY + 0.12, z: -0.14 });
  }
  if (hat === "helmet") {
    sphere(0.19, o.helmetColor ?? C.laton, { p: g, y: headY + 0.03, theta: Math.PI / 2, m: { rough: 0.45 } });
    cyl(0.235, 0.235, 0.03, o.helmetColor ?? C.laton, { p: g, y: headY + 0.02, z: 0.03, m: { rough: 0.45 } });
    box(0.05, 0.05, 0.36, o.helmetColor ?? C.laton, { p: g, y: headY + 0.19, r: 0.02, m: { rough: 0.45 } });
  } else if (hat === "cofia") {
    sphere(0.195, C.marfil, { p: g, y: headY + 0.02, theta: Math.PI * 0.55, sy: 0.95 });
    cyl(0.2, 0.2, 0.04, C.marfil, { p: g, y: headY - 0.02 });
  } else if (hat === "sun") {
    cyl(0.33, 0.33, 0.025, o.hatColor ?? C.maderaClara, { p: g, y: headY + 0.08 });
    cyl(0.15, 0.18, 0.14, o.hatColor ?? C.maderaClara, { p: g, y: headY + 0.09 });
    cyl(0.182, 0.182, 0.035, o.bandColor ?? C.vino, { p: g, y: headY + 0.1 });
  } else if (hat === "cap") {
    sphere(0.18, o.hatColor ?? C.pizarra, { p: g, y: headY + 0.03, theta: Math.PI / 2 });
    box(0.22, 0.025, 0.16, o.hatColor ?? C.pizarra, { p: g, y: headY + 0.02, z: 0.15, r: 0.01 });
  }
  if (o.carry) box(0.36, 0.26, 0.3, C.madera, { p: g, y: ay - 0.12, z: 0.27 });
  if (o.clip) { box(0.2, 0.26, 0.02, C.grafito, { p: g, x: 0.08, y: ay - 0.08, z: 0.27, rx: -0.5 }); }
  return g;
}

export function randomPerson(o = {}) {
  return {
    skin: pick(SKIN), hair: pick(HAIR),
    shirt: pick([C.pizarra, C.salvia, C.vino, C.ciruela, C.marfil, C.piedra, C.latonOsc, C.pizarraClara, C.salviaClara]),
    pants: pick([C.grafito, C.tinta, C.pizarra, C.latonOsc, C.piedraOsc]),
    long: rnd() < 0.4, ...o,
  };
}

/* ------------------------------------------------------------------ */
/* Mobiliario y props genéricos                                        */
/* ------------------------------------------------------------------ */
export function plant(p, o = {}) {
  const g = group({ p, x: o.x, y: o.y, z: o.z, s: o.s ?? 1 });
  const potC = o.pot ?? C.marfil;
  cyl(0.24, 0.19, 0.42, potC, { p: g, seg: 36 });
  cyl(0.215, 0.215, 0.02, 0x5C4A3A, { p: g, y: 0.41, cast: false });
  const leaf = o.leaf ?? C.salvia;
  const kind = o.kind ?? "bush";
  if (kind === "bush") {
    const pts = [[0, 0.78, 0, 0.27], [0.15, 0.64, 0.08, 0.2], [-0.14, 0.66, -0.05, 0.21], [0.03, 0.98, -0.04, 0.19], [-0.05, 0.62, 0.15, 0.17]];
    pts.forEach(([x, y, z, r], i) => sphere(r, i % 2 ? leaf : (o.leaf2 ?? C.salviaClara), { p: g, x, y, z, seg: 18 }));
  } else if (kind === "tall") {
    cyl(0.02, 0.025, 0.9, C.latonOsc, { p: g, y: 0.4 });
    for (let i = 0; i < 7; i++) {
      const a = i * 2.4, h = 0.75 + i * 0.12;
      const l = sphere(0.15, i % 2 ? leaf : C.salviaClara, { p: g, x: Math.cos(a) * 0.17, y: h, z: Math.sin(a) * 0.17, seg: 16, sy: 0.45, sx: 1.3 });
      l.rotation.set(0.3, a, 0.4);
    }
  } else if (kind === "snake") {
    for (let i = 0; i < 6; i++) {
      const a = i * 1.05;
      const l = box(0.1, 0.55 + (i % 3) * 0.15, 0.035, i % 2 ? leaf : C.salviaClara, { p: g, x: Math.cos(a) * 0.08, y: 0.38, z: Math.sin(a) * 0.08, r: 0.017, ry: a });
      l.rotation.z = Math.cos(a) * 0.15; l.rotation.x = Math.sin(a) * 0.15;
    }
  }
  return g;
}

export function desk(p, o = {}) {
  const w = o.w ?? 2.2, d = o.d ?? 1.0, h = o.h ?? 0.74;
  const g = group({ p, x: o.x, y: o.y, z: o.z, ry: o.ry });
  box(w, 0.07, d, o.top ?? C.maderaClara, { p: g, y: h - 0.07, r: 0.03 });
  const leg = o.leg ?? C.grafito;
  for (const sx of [-1, 1]) {
    box(0.06, h - 0.07, d - 0.12, leg, { p: g, x: sx * (w / 2 - 0.1), r: 0.02 });
  }
  if (o.drawers) box(0.5, h - 0.2, d - 0.16, o.drawers, { p: g, x: w / 2 - 0.42, y: 0.04, r: 0.03 });
  return g;
}

export function chair(p, o = {}) {
  const g = group({ p, x: o.x, y: o.y, z: o.z, ry: o.ry });
  const col = o.color ?? C.grafito;
  cyl(0.03, 0.03, 0.3, C.grafito, { p: g, y: 0.05 });
  cyl(0.22, 0.22, 0.04, C.grafito, { p: g, y: 0.02, seg: 5 });
  box(0.48, 0.09, 0.46, col, { p: g, y: 0.36, r: 0.04 });
  box(0.46, 0.5, 0.08, col, { p: g, y: 0.48, z: -0.22, r: 0.04, rx: -0.08 });
  return g;
}

export function monitor(p, o = {}) {
  const g = group({ p, x: o.x, y: o.y, z: o.z, ry: o.ry });
  const w = o.w ?? 0.9, h = o.h ?? 0.55;
  box(0.28, 0.03, 0.18, C.grafito, { p: g, r: 0.012 });
  box(0.05, 0.28, 0.04, C.grafito, { p: g, y: 0.02, z: -0.04, r: 0.015 });
  box(w, h, 0.05, C.tinta, { p: g, y: 0.2, z: -0.02, r: 0.025 });
  if (o.screen) panel(w - 0.06, h - 0.06, o.screen, { p: g, y: 0.2 + h / 2, z: 0.006, glow: 0.35 });
  return g;
}

export function laptop(p, o = {}) {
  const g = group({ p, x: o.x, y: o.y, z: o.z, ry: o.ry });
  const w = o.w ?? 0.5, d = o.d ?? 0.34;
  box(w, 0.025, d, o.color ?? C.piedra, { p: g, r: 0.012, m: { rough: 0.5 } });
  const lid = group({ p: g, y: 0.02, z: -d / 2 });
  lid.rotation.x = -0.32;
  box(w, d * 0.95, 0.02, o.color ?? C.piedra, { p: lid, y: 0, z: 0, r: 0.01, m: { rough: 0.5 } });
  if (o.screen) panel(w - 0.05, d * 0.95 - 0.05, o.screen, { p: lid, y: d * 0.95 / 2, z: 0.012, glow: 0.3 });
  return g;
}

export function mug(p, o = {}) {
  const g = group({ p, x: o.x, y: o.y, z: o.z, ry: o.ry });
  cyl(0.065, 0.06, 0.14, o.color ?? C.carmin, { p: g });
  torus(0.04, 0.012, o.color ?? C.carmin, { p: g, x: 0.07, y: 0.07, rz: 0 });
  cyl(0.056, 0.056, 0.01, 0x3B2A20, { p: g, y: 0.125, cast: false });
  return g;
}

export function folder(p, o = {}) {
  const t = o.t ?? 0.06;
  return box(o.w ?? 0.34, t, o.d ?? 0.46, o.color ?? C.pizarra, { p, x: o.x, y: o.y, z: o.z, ry: o.ry, r: 0.012 });
}
export function binder(p, o = {}) {
  const g = group({ p, x: o.x, y: o.y, z: o.z, ry: o.ry });
  box(o.t ?? 0.09, o.h ?? 0.4, o.d ?? 0.3, o.color ?? C.pizarra, { p: g, r: 0.012 });
  box((o.t ?? 0.09) + 0.004, 0.08, 0.004 + 0.02, C.marfil, { p: g, y: (o.h ?? 0.4) * 0.6, z: (o.d ?? 0.3) / 2 - 0.005, r: 0.004, cast: false });
  return g;
}
export function paper(p, o = {}) {
  return box(o.w ?? 0.26, 0.008, o.d ?? 0.34, o.color ?? C.marfil, { p, x: o.x, y: o.y, z: o.z, ry: o.ry, r: 0.003, seg: 1 });
}

export function shelf(p, o = {}) {
  const g = group({ p, x: o.x, y: o.y, z: o.z, ry: o.ry });
  const w = o.w ?? 2, d = o.d ?? 0.6, h = o.h ?? 2.2, n = o.levels ?? 4, col = o.color ?? C.grafito;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) box(0.07, h, 0.07, col, { p: g, x: sx * (w / 2 - 0.035), z: sz * (d / 2 - 0.035), r: 0.015 });
  const lv = [];
  for (let i = 0; i < n; i++) {
    const y = 0.12 + i * (h - 0.2) / (n - 1);
    box(w - 0.04, 0.05, d - 0.02, o.board ?? C.latonOsc, { p: g, y, r: 0.015 });
    lv.push(y + 0.05);
  }
  g.userData.levels = lv;
  return g;
}

export function crate(p, o = {}) {
  const g = group({ p, x: o.x, y: o.y, z: o.z, ry: o.ry });
  const w = o.w ?? 0.5, h = o.h ?? 0.4, d = o.d ?? 0.4, col = o.color ?? C.madera;
  box(w, h, d, col, { p: g, r: 0.03 });
  if (o.tape !== false) box(w + 0.004, 0.012, 0.08, o.tape ?? C.maderaClara, { p: g, y: h - 0.006, r: 0.004, cast: false });
  return g;
}

export function pallet(p, o = {}) {
  const g = group({ p, x: o.x, y: o.y, z: o.z, ry: o.ry });
  const w = o.w ?? 1.2, d = o.d ?? 1.0;
  for (const sx of [-1, 0, 1]) box(0.12, 0.1, d, C.madera, { p: g, x: sx * (w / 2 - 0.06), r: 0.015 });
  for (let i = 0; i < 5; i++) box(w, 0.035, 0.16, C.maderaClara, { p: g, y: 0.1, z: -d / 2 + 0.08 + i * (d - 0.16) / 4, r: 0.01 });
  return g;
}

export function tree(p, o = {}) {
  const g = group({ p, x: o.x, y: o.y, z: o.z, s: o.s ?? 1 });
  cyl(0.06, 0.08, 0.7, C.latonOsc, { p: g });
  const c = o.color ?? C.salvia;
  sphere(0.5, c, { p: g, y: 0.95, seg: 22 });
  sphere(0.38, o.color2 ?? C.salviaClara, { p: g, x: 0.22, y: 1.2, z: 0.1, seg: 22 });
  sphere(0.34, c, { p: g, x: -0.2, y: 1.25, z: -0.1, seg: 22 });
  return g;
}

/* ------------------------------------------------------------------ */
/* Texturas reutilizables                                              */
/* ------------------------------------------------------------------ */
export function chartTex(o = {}) {
  return tex(512, 320, (c, W, H) => {
    c.fillStyle = o.bg ?? "#FBF8F3"; c.fillRect(0, 0, W, H);
    c.fillStyle = "#ECE5DA"; rrect(c, 22, 22, 150, 16, 8); c.fill();
    c.fillStyle = "#CFC5B6"; rrect(c, 22, 48, 90, 10, 5); c.fill();
    const bars = o.bars ?? [0.35, 0.5, 0.42, 0.66, 0.58, 0.8, 0.72];
    const bw = 36, gap = 22, x0 = 34, base = H - 36;
    bars.forEach((v, i) => {
      c.fillStyle = i === bars.length - 2 ? "#8E1B2C" : (i % 2 ? "#3E5C76" : "#8FA3B5");
      rrect(c, x0 + i * (bw + gap), base - v * 190, bw, v * 190, 6); c.fill();
    });
    c.strokeStyle = "#C9A46A"; c.lineWidth = 5; c.lineJoin = "round"; c.beginPath();
    bars.forEach((v, i) => { const x = x0 + i * (bw + gap) + bw / 2, y = base - v * 190 - 26; i ? c.lineTo(x, y) : c.moveTo(x, y); });
    c.stroke();
    c.fillStyle = "#ECE5DA"; rrect(c, W - 120, 24, 96, 96, 14); c.fill();
    c.fillStyle = "#4F6B58"; c.beginPath(); c.moveTo(W - 72, 72); c.arc(W - 72, 72, 34, -Math.PI / 2, Math.PI * 0.9); c.closePath(); c.fill();
  });
}
export function docTex(o = {}) {
  return tex(256, 340, (c, W, H) => {
    c.fillStyle = "#FBF8F3"; c.fillRect(0, 0, W, H);
    c.fillStyle = o.accent ?? "#8E1B2C"; c.fillRect(24, 26, 60, 10);
    c.fillStyle = "#CFC5B6";
    for (let i = 0; i < (o.lines ?? 9); i++) c.fillRect(24, 60 + i * 26, i % 3 === 2 ? 130 : 205, 8);
  });
}
