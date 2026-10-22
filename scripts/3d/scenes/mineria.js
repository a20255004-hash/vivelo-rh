// 12 · Campamento minero: módulos, cerros andinos, camión y trabajadores con EPP (enfoque en seguridad).
import * as L from "./lib.js";
const { C } = L;

function module(p, o) {
  const g = L.group({ p, ...o });
  const w = o.w ?? 2.6;
  L.box(w, 0.95, 1.0, o.color ?? C.marfil, { p: g, y: 0.12, r: 0.05 });
  L.box(w + 0.08, 0.08, 1.08, C.grafito, { p: g, y: 1.07, r: 0.02 });
  for (const sx of [-1, 1]) L.box(0.12, 0.12, 0.9, C.grafito, { p: g, x: sx * (w / 2 - 0.2), r: 0.02 });
  const n = Math.round(w / 0.85);
  for (let i = 0; i < n; i++) {
    const x = -w / 2 + 0.45 + i * (w - 0.9) / Math.max(1, n - 1);
    if (i === o.door) { L.box(0.38, 0.75, 0.03, C.pizarra, { p: g, x, y: 0.14, z: 0.5, r: 0.01 }); continue; }
    L.box(0.42, 0.32, 0.03, C.pizarraClara, { p: g, x, y: 0.55, z: 0.5, r: 0.01, m: { rough: 0.2 } });
  }
  L.box(w, 0.06, 0.03, o.stripe ?? C.salvia, { p: g, y: 0.92, z: 0.5, r: 0.01, cast: false });
  return g;
}

export default {
  az: 40, el: 29,
  build(root) {
    L.reseed(121);
    const W = 11, D = 7.4;
    const y = L.base(root, W, D, { top: 0xDCD1BE, side: C.piedra });
    // cerros andinos
    L.mountain(root, { x: -2.8, y, z: -3.0, r: 1.6, h: 2.6, color: C.piedraOsc, seg: 9, snow: 0.3 });
    L.mountain(root, { x: 0.2, y, z: -3.1, r: 1.9, h: 3.3, color: 0xA89C8A, seg: 10, snow: 0.33 });
    L.mountain(root, { x: 3.4, y, z: -3.0, r: 1.5, h: 2.3, color: C.piedraOsc, seg: 9, snow: 0.28 });
    L.mountain(root, { x: -4.6, y, z: -2.9, r: 0.9, h: 1.3, color: C.piedra, seg: 8 });
    L.mountain(root, { x: 4.5, y, z: -2.9, r: 0.9, h: 1.3, color: C.piedra, seg: 8 });
    // camino de ripio
    L.box(W - 0.6, 0.02, 1.3, 0xC4B8A4, { p: root, x: 0, y, z: 0.55, r: 0.01, cast: false });
    for (let i = 0; i < 9; i++) L.box(0.5, 0.022, 0.07, C.marfil, { p: root, x: -4.6 + i * 1.15, y, z: 0.55, r: 0.01, cast: false });
    // módulos del campamento (dos niveles)
    module(root, { x: -3.2, y, z: -1.25, w: 3.0, door: 1 });
    module(root, { x: -3.2, y: y + 1.11, z: -1.25, w: 3.0, color: C.arena, stripe: C.pizarra });
    L.box(3.0, 0.05, 0.4, C.grafito, { p: root, x: -3.2, y: y + 1.11, z: -0.55, r: 0.01 });
    for (let i = 0; i < 12; i++) L.box(0.03, 0.35, 0.03, C.grafito, { p: root, x: -4.65 + i * 0.26, y: y + 1.16, z: -0.37, r: 0.01, cast: false });
    L.box(3.0, 0.04, 0.04, C.grafito, { p: root, x: -3.2, y: y + 1.5, z: -0.37, r: 0.01 });
    // escalera
    for (let i = 0; i < 6; i++) L.box(0.55, 0.05, 0.25, C.grafito, { p: root, x: -1.45 + i * 0.0, y: y + 0.1 + i * 0.18, z: 0.35 - i * 0.16, r: 0.01 });
    L.box(0.04, 1.4, 0.04, C.grafito, { p: root, x: -1.15, y, z: 0.3, r: 0.01 });
    module(root, { x: 0.6, y, z: -1.25, w: 2.4, color: C.marfil, door: 0, stripe: C.carmin });
    L.cyl(0.55, 0.55, 1.3, C.pizarra, { p: root, x: 2.6, y: y + 0.4, z: -1.4, m: { rough: 0.5 } });
    for (const sx of [-1, 1]) L.box(0.08, 0.4, 0.08, C.grafito, { p: root, x: 2.6 + sx * 0.35, y, z: -1.4, r: 0.02 });
    // camión
    L.truck(root, { x: 2.0, y, z: 0.55, ry: 0.25, s: 0.95 });
    // conos y letrero de seguridad
    for (const [x, z] of [[0.2, 1.55], [-0.6, 1.55], [-1.4, 1.55]]) { L.cone(0.15, 0.4, C.carmin, { p: root, x, y: y + 0.03, z }); L.box(0.34, 0.03, 0.34, C.carmin, { p: root, x, y, z, r: 0.01 }); L.cyl(0.1, 0.11, 0.06, C.marfil, { p: root, x, y: y + 0.17, z, cast: false }); }
    const sg = L.group({ p: root, x: -4.2, y, z: 1.9, ry: 0.5 });
    for (const sx of [-1, 1]) L.box(0.06, 1.2, 0.06, C.grafito, { p: sg, x: sx * 0.55, r: 0.02 });
    L.box(1.3, 0.7, 0.05, C.salvia, { p: sg, y: 0.9, r: 0.02 });
    L.panel(1.2, 0.3, L.signTex("SEGURIDAD PRIMERO", { w: 800, h: 200, size: 58, bg: "#4F6B58" }), { p: sg, y: 1.35, z: 0.03 });
    L.box(0.16, 0.05, 0.02, C.marfil, { p: sg, x: -0.35, y: 1.07, z: 0.03, r: 0.01, cast: false });
    L.box(0.05, 0.16, 0.02, C.marfil, { p: sg, x: -0.35, y: 1.02, z: 0.03, r: 0.01, cast: false });
    // trabajadores con casco y chaleco
    const crew = [[-0.5, 2.6, -2.6], [0.2, 2.3, -3.2], [-0.9, 2.1, 2.6], [4.2, 2.3, -2.2], [-2.3, 0.6, 1.5]];
    crew.forEach(([x, z, ry], i) => L.figure(root, { ...L.randomPerson(), x, y, z, ry, vest: C.carmin, hat: "helmet", helmetColor: i === 0 ? C.marfil : C.laton, arms: i === 0 ? "one" : i === 3 ? "front" : "down", clip: i === 0 }));
    // pequeño stock de cajas
    L.pallet(root, { x: 4.4, y, z: 3.0 });
    for (let i = 0; i < 2; i++) L.crate(root, { x: 4.15 + i * 0.52, y: y + 0.135, z: 3.0, w: 0.5, h: 0.4, d: 0.8, color: C.maderaClara });
    return { footprint: [W, D] };
  },
};
