// 9 · Cooperativa de ahorro y crédito: ventanillas de atención y un pequeño grupo en capacitación.
import * as L from "./lib.js";
const { C } = L;

function slideTex() {
  return L.tex(480, 300, (c, W, H) => {
    c.fillStyle = "#FBF8F3"; c.fillRect(0, 0, W, H);
    c.fillStyle = "#4F6B58"; c.fillRect(0, 0, W, 54);
    c.fillStyle = "#FBF8F3"; L.rrect(c, 24, 18, 160, 18, 9); c.fill();
    // monedas apiladas como ícono
    [[90, 220, 4], [160, 220, 6], [230, 220, 8]].forEach(([x, yb, n]) => { for (let i = 0; i < n; i++) { c.fillStyle = i % 2 ? "#C9A46A" : "#85683D"; c.beginPath(); c.ellipse(x, yb - i * 14, 28, 9, 0, 0, Math.PI * 2); c.fill(); } });
    c.strokeStyle = "#8E1B2C"; c.lineWidth = 6; c.beginPath(); c.moveTo(300, 230); c.lineTo(350, 180); c.lineTo(390, 200); c.lineTo(440, 120); c.stroke();
  });
}

export default {
  az: 40, el: 30,
  build(root) {
    L.reseed(99);
    const W = 9.6, D = 6.4, H = 3.3;
    const y = L.base(root, W, D, { floor: "tile" });
    const win = { wall: "left", a: 0.6, b: 2.7, y0: 0.9, y1: 2.7 };
    L.walls(root, W, D, H, { openings: [win], color: C.marfil });
    L.windowPane(root, "left", W, D, win, { mull: 2 });
    const bz = -D / 2 + 0.22;
    // muro de marca genérica: franja salvia + ícono
    L.box(4.6, 0.7, 0.04, C.salvia, { p: root, x: 1.8, y: y + 2.35, z: bz + 0.02, r: 0.02 });
    L.panel(2.6, 0.35, L.signTex("AHORRO · CRÉDITO", { w: 900, h: 120, size: 64, bg: "#4F6B58", letterSpacing: "6px" }), { p: root, x: 2.2, y: y + 2.7, z: bz + 0.045 });
    L.cyl(0.24, 0.24, 0.05, C.laton, { p: root, x: 0.15, y: y + 2.7, z: bz + 0.05, rx: Math.PI / 2, center: true, m: { rough: 0.3, metal: 0.6 } });
    L.cyl(0.16, 0.16, 0.06, C.latonOsc, { p: root, x: 0.15, y: y + 2.7, z: bz + 0.06, rx: Math.PI / 2, center: true, m: { rough: 0.3, metal: 0.6 } });
    // ventanillas (fondo derecha)
    const n = 3, x0 = 0.3;
    L.box(4.8, 1.0, 0.7, C.maderaClara, { p: root, x: x0 + 1.5, y, z: -1.9, r: 0.05 });
    L.box(4.9, 0.06, 0.8, C.marfil, { p: root, x: x0 + 1.5, y: y + 1.0, z: -1.9, r: 0.03 });
    for (let i = 0; i <= n; i++) L.box(0.05, 0.7, 0.04, C.pizarraClara, { p: root, x: x0 - 0.9 + i * 1.6, y: y + 1.06, z: -1.6, r: 0.01, m: { rough: 0.2, opacity: 0.8 } });
    L.box(4.8, 0.7, 0.03, C.pizarraClara, { p: root, x: x0 + 1.5, y: y + 1.06, z: -1.55, r: 0.01, m: { rough: 0.15, opacity: 0.35 } });
    for (let i = 0; i < n; i++) {
      const x = x0 - 0.1 + i * 1.6;
      L.monitor(root, { x: x - 0.25, y: y + 1.06, z: -2.1, w: 0.5, h: 0.32, screen: L.docTex({ accent: "#4F6B58" }) });
      L.chair(root, { x, y, z: -2.75, color: C.grafito });
      L.figure(root, { x, y, z: -2.65, seated: true, skin: L.SKIN[(i + 1) % 4], shirt: C.salvia, pants: C.grafito, hair: L.HAIR[i % 4], long: i === 1 });
      // cliente frente a ventanilla
      if (i !== 1) L.figure(root, { ...L.randomPerson(), x, y, z: -0.9, ry: Math.PI });
    }
    // fila pequeña con poste separador
    for (const [x, z] of [[2.5, 0.2], [4.0, 0.2]]) { L.cyl(0.14, 0.16, 0.04, C.grafito, { p: root, x, y, z }); L.cyl(0.03, 0.03, 0.9, C.latonOsc, { p: root, x, y, z, m: { rough: 0.3, metal: 0.6 } }); }
    L.box(1.5, 0.05, 0.03, C.carmin, { p: root, x: 3.25, y: y + 0.82, z: 0.2, r: 0.01 });
    L.figure(root, { ...L.randomPerson(), x: 3.3, y, z: -0.2, ry: Math.PI + 0.2 });

    // área de capacitación (izquierda-frente)
    const tx = -2.5, tz = 1.0;
    L.box(3.6, 0.025, 2.8, C.arenaOsc, { p: root, x: tx, y, z: tz, r: 0.012 });
    // pantalla en atril
    const sg = L.group({ p: root, x: tx - 0.4, y, z: tz - 1.3, ry: 0.15 });
    for (const sx of [-1, 1]) L.box(0.05, 1.5, 0.05, C.grafito, { p: sg, x: sx * 0.6, r: 0.02 });
    L.box(1.4, 0.88, 0.05, C.grafito, { p: sg, y: 0.75, r: 0.02 });
    L.panel(1.32, 0.8, slideTex(), { p: sg, y: 1.19, z: 0.03, glow: 0.25 });
    // capacitadora
    L.figure(root, { x: tx + 0.75, y, z: tz - 1.0, ry: -0.5, skin: L.SKIN[1], shirt: C.carmin, pants: C.grafito, hair: L.HAIR[0], long: true, bun: true, arms: "one" });
    // participantes en sillas con paleta
    [[-1.0, 0.2], [0.0, 0.3], [-1.1, 1.2], [0.1, 1.3]].forEach(([dx, dz], i) => {
      L.chair(root, { x: tx + dx, y, z: tz + dz + 0.1, ry: Math.PI - 0.15, color: [C.pizarra, C.vino, C.ciruela, C.salvia][i] });
      L.figure(root, { ...L.randomPerson(), x: tx + dx, y, z: tz + dz, ry: Math.PI - 0.15, seated: true, arms: i === 2 ? "front" : "down" });
    });
    L.plant(root, { x: -4.2, y, z: -2.5, s: 1.1, kind: "tall" });
    L.plant(root, { x: 4.3, y, z: 2.6, s: 1.0, pot: C.grafito });
    return { footprint: [W, D] };
  },
};
