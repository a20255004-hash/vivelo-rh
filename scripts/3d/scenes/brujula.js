// Concepto · Brújula de latón sobre papeles (orientación / propósito).
import * as L from "./lib.js";
const { C } = L;

export default {
  az: 38, el: 40, pad: 1.08, padSq: 1.06, keyDir: [-0.6, 1.4, 0.7],
  build(root) {
    L.reseed(201);
    const y0 = L.pedestal(root, 2.35);
    let y = L.paperStack(root, { y: y0, n: 5, w: 2.3, d: 3.0, ry: 0.25 });
    // hoja superior con líneas
    const tg = L.group({ p: root, y: y + 0.003, ry: 0.25 });
    L.panel(2.1, 2.8, L.docTex({ lines: 10, accent: "#3E5C76" }), { p: tg, rx: -Math.PI / 2 });
    // folder debajo, asomando
    L.box(2.5, 0.05, 3.1, C.pizarra, { p: root, x: 0.35, y: y0 - 0.0, z: 0.25, ry: -0.18, r: 0.02 });
    // brújula
    const g = L.group({ p: root, x: 0.1, y: y + 0.01, z: 0.1, ry: 0.4 });
    const brass = L.metal(C.laton, 0.32), brassD = L.metal(C.latonOsc, 0.4);
    L.cyl(1.05, 1.1, 0.22, brass, { p: g, seg: 96 });
    L.torus(1.0, 0.07, brass, { p: g, y: 0.24, rx: Math.PI / 2 });
    L.cyl(0.95, 0.95, 0.02, C.marfil, { p: g, y: 0.2, seg: 96, m: { rough: 0.6 } });
    const face = L.tex(512, 512, (c, W, H) => {
      c.fillStyle = "#FBF8F3"; c.fillRect(0, 0, W, H);
      c.translate(W / 2, H / 2);
      c.strokeStyle = "#4A443D";
      for (let i = 0; i < 72; i++) { c.save(); c.rotate(i * Math.PI / 36); c.lineWidth = i % 9 === 0 ? 5 : 2; c.beginPath(); c.moveTo(0, -238); c.lineTo(0, i % 9 === 0 ? -200 : -222); c.stroke(); c.restore(); }
      c.fillStyle = "#14110F"; c.font = `600 54px ${L.FONT}`; c.textAlign = "center"; c.textBaseline = "middle";
      [["N", 0], ["E", 1], ["S", 2], ["O", 3]].forEach(([t, k]) => { c.save(); c.rotate(k * Math.PI / 2); c.fillText(t, 0, -165); c.restore(); });
      c.strokeStyle = "#CFC5B6"; c.lineWidth = 2; c.beginPath(); c.arc(0, 0, 120, 0, Math.PI * 2); c.stroke();
    });
    L.panel(1.86, 1.86, face, { p: g, y: 0.225, rx: -Math.PI / 2 });
    // aguja
    const nd = L.group({ p: g, y: 0.25, ry: -0.55 });
    L.extrude([[0, 0.85], [0.12, 0], [-0.12, 0]], 0.03, C.carmin, { p: nd, rx: -Math.PI / 2, bs: 0.01 });
    L.extrude([[0, -0.85], [0.12, 0], [-0.12, 0]], 0.03, C.grafito, { p: nd, rx: -Math.PI / 2, bs: 0.01 });
    L.cyl(0.08, 0.08, 0.06, brassD, { p: g, y: 0.24 });
    // vidrio
    L.cyl(0.96, 0.96, 0.02, new L.THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, transparent: true, opacity: 0.12 }), { p: g, y: 0.29, cast: false, seg: 96 });
    // argolla
    L.cyl(0.14, 0.14, 0.2, brass, { p: g, z: -1.15, y: 0.06, rx: 0 });
    L.torus(0.2, 0.045, brass, { p: g, z: -1.38, y: 0.18, rx: -Math.PI / 2 + 0.0 });
    // lápiz
    const pg = L.group({ p: root, x: 1.0, y: y + 0.06, z: 1.25, ry: -0.9 });
    L.cyl(0.055, 0.055, 1.5, C.carmin, { p: pg, rz: Math.PI / 2, center: true, seg: 6 });
    const tip = L.cone(0.055, 0.22, C.maderaClara, { p: pg, seg: 6 }); tip.position.set(0.86, 0, 0); tip.rotation.z = -Math.PI / 2;
    L.cyl(0.058, 0.058, 0.1, C.laton, { p: pg, x: -0.78, rz: Math.PI / 2, center: true, seg: 6 });
    return { footprint: [4.7, 4.7] };
  },
};
