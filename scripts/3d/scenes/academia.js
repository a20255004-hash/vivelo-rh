// 11 · Aula de capacitación con proyector.
import * as L from "./lib.js";
const { C } = L;

function slide() {
  return L.tex(640, 360, (c, W, H) => {
    c.fillStyle = "#FBF8F3"; c.fillRect(0, 0, W, H);
    c.fillStyle = "#14110F"; L.rrect(c, 40, 40, 260, 26, 13); c.fill();
    c.fillStyle = "#CFC5B6"; for (let i = 0; i < 4; i++) { L.rrect(c, 40, 100 + i * 40, 220 - i * 25, 14, 7); c.fill(); }
    c.fillStyle = "#8E1B2C"; c.beginPath(); c.arc(470, 190, 100, -Math.PI / 2, Math.PI * 0.35); c.lineTo(470, 190); c.fill();
    c.fillStyle = "#3E5C76"; c.beginPath(); c.arc(470, 190, 100, Math.PI * 0.35, Math.PI * 1.1); c.lineTo(470, 190); c.fill();
    c.fillStyle = "#C9A46A"; c.beginPath(); c.arc(470, 190, 100, Math.PI * 1.1, Math.PI * 1.5); c.lineTo(470, 190); c.fill();
    c.fillStyle = "#FBF8F3"; c.beginPath(); c.arc(470, 190, 48, 0, Math.PI * 2); c.fill();
  });
}

export default {
  az: 42, el: 31,
  build(root) {
    L.reseed(111);
    const W = 9, D = 6.4, H = 3.4;
    const y = L.base(root, W, D, { floor: "wood" });
    const win = { wall: "left", a: -1.8, b: 2.4, y0: 1.0, y1: 2.9 };
    L.walls(root, W, D, H, { openings: [win], color: C.marfil });
    L.windowPane(root, "left", W, D, win, { mull: 3 });
    const bz = -D / 2 + 0.22;
    // pantalla de proyección + haz
    L.box(3.4, 0.12, 0.16, C.grafito, { p: root, x: 0.9, y: y + 2.95, z: bz + 0.1, r: 0.05 });
    L.panel(3.2, 1.8, slide(), { p: root, x: 0.9, y: y + 2.0, z: bz + 0.06, glow: 0.45 });
    L.box(3.2, 0.05, 0.05, C.grafito, { p: root, x: 0.9, y: y + 1.05, z: bz + 0.07, r: 0.02 });
    // proyector en carrito
    const px = 1.0, pz = 1.2;
    L.box(0.7, 0.7, 0.5, C.grafito, { p: root, x: px, y, z: pz, r: 0.04 });
    L.box(0.42, 0.14, 0.36, C.marfil, { p: root, x: px, y: y + 0.7, z: pz, r: 0.04 });
    L.cyl(0.06, 0.06, 0.06, C.tinta, { p: root, x: px, y: y + 0.77, z: pz - 0.2, rx: Math.PI / 2, center: true });
    const beam = new L.THREE.Mesh(new L.THREE.ConeGeometry(1.6, 4.0, 4, 1, true), new L.THREE.MeshBasicMaterial({ color: 0xFFF6E0, transparent: true, opacity: 0.09, depthWrite: false, side: L.THREE.DoubleSide }));
    beam.rotation.x = -Math.PI / 2; beam.rotation.y = Math.PI / 4; beam.position.set(0.95, y + 1.4, pz - 2.2); beam.scale.set(1, 1, 0.55);
    root.add(beam);
    // capacitador
    L.figure(root, { x: -1.3, y, z: -2.2, ry: 0.5, skin: L.SKIN[2], shirt: C.pizarra, pants: C.grafito, hair: L.HAIR[0], arms: "one" });
    // pizarra lateral (izq.) — atril
    const fl = L.group({ p: root, x: 3.6, y, z: -2.2, ry: -0.6 });
    for (const sx of [-1, 1]) L.box(0.05, 1.7, 0.05, C.latonOsc, { p: fl, x: sx * 0.4, r: 0.02, rx: -0.08 });
    L.box(0.85, 1.0, 0.04, C.marfil, { p: fl, y: 0.8, r: 0.02 });
    L.box(0.5, 0.05, 0.01, C.carmin, { p: fl, y: 1.6, z: 0.025, r: 0.005, cast: false });
    for (let i = 0; i < 3; i++) L.box(0.6, 0.03, 0.01, C.grafito, { p: fl, y: 1.4 - i * 0.15, z: 0.025, r: 0.005, cast: false });
    // carpetas con participantes
    let r = 0;
    for (const dz of [-0.7, 1.4]) for (const cx of [-1.7, 3.0]) for (const k of [-0.55, 0.55]) {
      const dx = cx + k, i = r++;
      L.desk(root, { x: dx, y, z: dz, w: 1.0, d: 0.6, top: C.maderaClara });
      L.chair(root, { x: dx, y, z: dz + 0.55, ry: Math.PI, color: [C.pizarra, C.vino, C.salvia, C.ciruela][i % 4] });
      if (i !== 5) L.figure(root, { ...L.randomPerson(), x: dx, y, z: dz + 0.48, ry: Math.PI, seated: true, arms: "front" });
      L.paper(root, { x: dx - 0.15, y: y + 0.74, z: dz + 0.05, ry: 0.1 });
      if (i % 3 === 0) L.laptop(root, { x: dx + 0.2, y: y + 0.74, z: dz - 0.02, ry: 0, color: C.piedra, screen: L.docTex() });
    }
    L.plant(root, { x: -3.9, y, z: -2.6, s: 1.2, kind: "tall" });
    L.plant(root, { x: 4.0, y, z: 2.8, s: 1.0, pot: C.grafito });
    // estante de materiales
    L.box(0.5, 0.9, 2.0, C.maderaClara, { p: root, x: -4.15, y, z: 1.6, r: 0.04 });
    for (let i = 0; i < 5; i++) L.binder(root, { x: -4.15, y: y + 0.9, z: 0.9 + i * 0.12, ry: Math.PI / 2, t: 0.1, h: 0.34, d: 0.36, color: [C.pizarra, C.salvia, C.vino, C.laton, C.ciruela][i] });
    return { footprint: [W, D] };
  },
};
