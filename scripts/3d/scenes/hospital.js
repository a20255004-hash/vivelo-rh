// 7 · Hospital público: admisión con mostrador, sala de espera, médica con bata, pasillo con puertas.
import * as L from "./lib.js";
const { C } = L;

function waitingRow(p, o) {
  const g = L.group({ p, ...o });
  const n = o.n ?? 4;
  L.box(n * 0.56 + 0.1, 0.05, 0.5, C.grafito, { p: g, y: 0.3, r: 0.02 });
  for (const sx of [-1, 1]) L.box(0.05, 0.3, 0.4, C.grafito, { p: g, x: sx * (n * 0.28 - 0.05), r: 0.02 });
  for (let i = 0; i < n; i++) {
    const x = -n * 0.28 + 0.28 + i * 0.56;
    L.box(0.5, 0.08, 0.46, o.color ?? C.pizarra, { p: g, x, y: 0.34, r: 0.035 });
    L.box(0.5, 0.42, 0.07, o.color ?? C.pizarra, { p: g, x, y: 0.44, z: -0.22, r: 0.035, rx: -0.1 });
  }
  return g;
}

export default {
  az: 42, el: 30,
  build(root) {
    L.reseed(77);
    const W = 9.4, D = 6.2, H = 3.3;
    const y = L.base(root, W, D, { floor: "checker" });
    const win = { wall: "left", a: -0.6, b: 1.9, y0: 1.0, y1: 2.8 };
    L.walls(root, W, D, H, { openings: [win], color: C.marfil });
    L.windowPane(root, "left", W, D, win, { mull: 2 });
    const bz = -D / 2 + 0.22;
    // franja de color en muro
    L.box(W - 0.22, 0.9, 0.03, C.salviaClara, { p: root, x: 0.11, y, z: bz + 0.015, r: 0.01, cast: false });
    L.box(0.03, 0.9, D - 0.22, C.salviaClara, { p: root, x: -W / 2 + 0.235, y, z: 0.11, r: 0.01, cast: false });
    L.box(W - 0.22, 0.06, 0.05, C.marfil, { p: root, x: 0.11, y: y + 0.9, z: bz + 0.03, r: 0.02 });
    L.box(0.05, 0.06, D - 0.22, C.marfil, { p: root, x: -W / 2 + 0.25, y: y + 0.9, z: 0.11, r: 0.02 });
    // puertas del pasillo
    for (const x of [1.2, 2.9]) {
      L.box(1.05, 2.25, 0.08, C.piedra, { p: root, x, y, z: bz + 0.04, r: 0.03 });
      L.box(0.9, 2.15, 0.06, C.pizarraClara, { p: root, x, y, z: bz + 0.08, r: 0.02 });
      L.box(0.3, 0.4, 0.02, C.pizarra, { p: root, x: x - 0.15, y: y + 1.4, z: bz + 0.11, r: 0.01, m: { rough: 0.2 } });
      L.box(0.04, 0.2, 0.05, C.grafito, { p: root, x: x + 0.33, y: y + 1.0, z: bz + 0.13, r: 0.02 });
    }
    // señal con cruz
    const sx = 2.05, sy = y + 2.65;
    L.box(0.7, 0.36, 0.06, C.marfil, { p: root, x: sx, y: sy, z: bz + 0.04, r: 0.03 });
    L.box(0.22, 0.07, 0.03, C.carmin, { p: root, x: sx - 0.18, y: sy + 0.145, z: bz + 0.08, r: 0.01 });
    L.box(0.07, 0.22, 0.03, C.carmin, { p: root, x: sx - 0.18, y: sy + 0.07, z: bz + 0.08, r: 0.01 });
    for (let i = 0; i < 2; i++) L.box(0.26, 0.04, 0.02, C.grafito, { p: root, x: sx + 0.12, y: sy + 0.12 + i * 0.08, z: bz + 0.08, r: 0.01 });
    // mostrador de admisión (izquierda-fondo)
    const dx = -2.4, dz = -1.6;
    L.box(3.0, 1.05, 0.5, C.marfil, { p: root, x: dx, y, z: dz + 0.55, r: 0.06 });
    L.box(3.1, 0.06, 0.62, C.maderaClara, { p: root, x: dx, y: y + 1.05, z: dz + 0.55, r: 0.03 });
    L.box(2.96, 0.14, 0.03, C.salvia, { p: root, x: dx, y: y + 0.6, z: dz + 0.81, r: 0.01, cast: false });
    L.box(0.5, 1.05, 1.5, C.marfil, { p: root, x: dx - 1.5, y, z: dz - 0.2, r: 0.06 });
    L.box(2.9, 0.06, 0.6, C.piedra, { p: root, x: dx + 0.05, y: y + 0.74, z: dz - 0.0, r: 0.02 });
    L.monitor(root, { x: dx - 0.5, y: y + 0.8, z: dz - 0.05, w: 0.6, h: 0.38, screen: L.docTex({ accent: "#4F6B58" }) });
    L.monitor(root, { x: dx + 0.7, y: y + 0.8, z: dz - 0.05, w: 0.6, h: 0.38, screen: L.chartTex() });
    L.figure(root, { x: dx - 0.5, y, z: dz - 0.45, seated: true, skin: L.SKIN[1], shirt: C.salvia, pants: C.salvia, hair: L.HAIR[0], long: true, bun: true });
    L.figure(root, { x: dx + 0.7, y, z: dz - 0.45, seated: true, skin: L.SKIN[3], shirt: C.pizarraClara, pants: C.pizarra, hair: L.HAIR[2] });
    L.plant(root, { x: dx + 1.25, y: y + 1.11, z: dz + 0.55, s: 0.38, kind: "snake" });
    // médica con bata y tablilla
    L.figure(root, { x: 0.6, y, z: -0.6, ry: 0.5, skin: L.SKIN[2], shirt: C.pizarra, coat: C.marfil, pants: C.grafito, hair: L.HAIR[1], long: true, arms: "one", clip: true });
    L.torus(0.09, 0.012, C.grafito, { p: root, x: 0.6 + 0.05, y: y + 1.32, z: -0.6 + 0.13, rx: 1.2, arc: Math.PI });
    // paciente de pie en mostrador
    L.figure(root, { ...L.randomPerson({ shirt: C.vino }), x: -2.0, y, z: -0.45, ry: Math.PI });
    // sala de espera
    waitingRow(root, { x: 1.6, y, z: 1.25, n: 5, ry: Math.PI, color: C.pizarra });
    waitingRow(root, { x: 1.6, y, z: 2.35, n: 5, ry: Math.PI, color: C.pizarra });
    [[0, 1.25], [3, 1.25], [1, 2.35], [4, 2.35]].forEach(([i, z], k) =>
      L.figure(root, { ...L.randomPerson(), x: 1.6 + 1.12 - i * 0.56, y, z: z - 0.05, ry: Math.PI, seated: true, seatH: 0.4, arms: k === 2 ? "front" : "down" }));
    // silla de ruedas
    const wc = L.group({ p: root, x: -3.6, y, z: 1.6, ry: 0.8 });
    for (const sxw of [-1, 1]) { L.torus(0.3, 0.025, C.grafito, { p: wc, x: sxw * 0.28, y: 0.32, ry: Math.PI / 2 }); L.cyl(0.07, 0.07, 0.04, C.grafito, { p: wc, x: sxw * 0.22, y: 0.07, z: 0.35, rz: Math.PI / 2, center: true }); }
    L.box(0.5, 0.06, 0.45, C.pizarra, { p: wc, y: 0.42, r: 0.02 });
    L.box(0.5, 0.45, 0.05, C.pizarra, { p: wc, y: 0.45, z: -0.22, r: 0.02 });
    L.plant(root, { x: -3.9, y, z: 0.4, s: 1.1, kind: "tall", pot: C.marfil });
    L.plant(root, { x: 4.2, y, z: -2.5, s: 1.0, pot: C.arena });
    // dispensador
    L.box(0.5, 1.1, 0.4, C.marfil, { p: root, x: 4.1, y, z: -1.4, r: 0.05 });
    L.cyl(0.15, 0.15, 0.45, C.pizarraClara, { p: root, x: 4.1, y: y + 1.1, z: -1.4, m: { rough: 0.2, opacity: 0.85 } });
    return { footprint: [W, D] };
  },
};
