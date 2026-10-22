// 10 · Piso corporativo en Lima: muros de vidrio, skyline exterior, espacio abierto.
import * as L from "./lib.js";
const { C } = L;

function skyline(seed) {
  return (c, W, H) => {
    L.reseed(seed);
    // mar al fondo
    c.fillStyle = "#B9C7CF"; c.fillRect(0, H * 0.62, W, H * 0.06);
    let x = 0;
    while (x < W) {
      const w = 14 + L.rnd() * 26, h = H * (0.12 + L.rnd() * 0.42);
      c.fillStyle = L.rnd() > 0.5 ? "#A9B6BF" : "#C3CCD1";
      c.fillRect(x, H * 0.72 - h, w, h + H * 0.3);
      c.fillStyle = "rgba(251,248,243,0.35)";
      for (let yy = H * 0.72 - h + 6; yy < H * 0.95; yy += 9) c.fillRect(x + 3, yy, w - 6, 2);
      x += w + 2 + L.rnd() * 6;
    }
  };
}

export default {
  az: 42, el: 30,
  build(root) {
    L.reseed(101);
    const W = 10, D = 6.6, H = 3.3;
    const y = L.base(root, W, D, { floor: "tile" });
    const ob = { wall: "back", a: -4.6, b: 4.8, y0: 0.15, y1: 3.05 }, ol = { wall: "left", a: -3.0, b: 3.2, y0: 0.15, y1: 3.05 };
    L.walls(root, W, D, H, { openings: [ob, ol], color: C.marfil, skirt: false });
    L.windowPane(root, "back", W, D, ob, { mull: 6, frame: C.grafito, sky0: "#C7D3DA", sky1: "#EEF0EC", drawSky: skyline(5) });
    L.windowPane(root, "left", W, D, ol, { mull: 4, frame: C.grafito, sky0: "#C7D3DA", sky1: "#EEF0EC", drawSky: skyline(9) });
    // columnas
    for (const [x, z] of [[-1.2, -0.6], [2.4, -0.6]]) L.box(0.4, H, 0.4, C.marfil, { p: root, x, y, z, r: 0.05 });
    // bancada de escritorios (2 filas)
    const benches = [[-0.2, 0.6], [2.9, 0.6]];
    benches.forEach(([bx, bz], b) => {
      L.desk(root, { x: bx, y, z: bz, w: 2.6, d: 1.5, top: C.marfil, leg: C.grafito });
      L.box(2.5, 0.35, 0.04, C.salvia, { p: root, x: bx, y: y + 0.74, z: bz, r: 0.015 });
      for (const side of [-1, 1]) for (const k of [-0.65, 0.65]) {
        const x = bx + k, z = bz + side * 0.42;
        L.monitor(root, { x, y: y + 0.74, z: z - side * 0.2, ry: side < 0 ? Math.PI : 0, w: 0.62, h: 0.38, screen: (k + side + b) % 2 ? L.chartTex() : L.docTex() });
        const occ = !(b === 1 && side < 0 && k > 0);
        L.chair(root, { x, y, z: z + side * 0.55, ry: side < 0 ? 0 : Math.PI, color: C.grafito });
        if (occ) L.figure(root, { ...L.randomPerson(), x, y, z: z + side * 0.48, ry: side < 0 ? 0 : Math.PI, seated: true, arms: "front" });
      }
      L.mug(root, { x: bx + 1.1, y: y + 0.74, z: bz + 0.2, color: b ? C.marfil : C.carmin });
    });
    // sala lounge (izquierda)
    L.box(2.6, 0.025, 2.0, C.piedra, { p: root, x: -3.3, y, z: -1.6, r: 0.012 });
    L.sofa(root, { x: -3.3, y, z: -2.35, w: 2.2, color: C.pizarra });
    L.box(1.0, 0.32, 0.6, C.maderaClara, { p: root, x: -3.3, y, z: -1.3, r: 0.05 });
    L.plant(root, { x: -3.55, y: y + 0.32, z: -1.3, s: 0.35 });
    L.laptop(root, { x: -3.0, y: y + 0.32, z: -1.3, ry: -0.3, color: C.grafito, screen: L.chartTex() });
    L.figure(root, { ...L.randomPerson({ shirt: C.vino }), x: -3.8, y: y + 0.06, z: -2.15, seated: true, seatH: 0.4 });
    L.figure(root, { ...L.randomPerson({ shirt: C.marfil }), x: -2.0, y, z: -0.2, ry: -2.4, arms: "one" });
    // conversación de pie
    L.figure(root, { ...L.randomPerson({ shirt: C.ciruela }), x: 1.3, y, z: 2.6, ry: -2.4 });
    L.figure(root, { ...L.randomPerson({ shirt: C.pizarra }), x: 0.8, y, z: 2.1, ry: 0.8, clip: true, arms: "one" });
    // mesa alta / cocina
    L.box(1.8, 1.0, 0.6, C.grafito, { p: root, x: 3.6, y, z: -2.7, r: 0.05 });
    L.box(1.9, 0.05, 0.7, C.marfil, { p: root, x: 3.6, y: y + 1.0, z: -2.7, r: 0.02 });
    L.cyl(0.12, 0.12, 0.3, C.piedra, { p: root, x: 3.2, y: y + 1.05, z: -2.75, m: { metal: 0.5, rough: 0.3 } });
    L.plant(root, { x: 4.4, y, z: 2.8, s: 1.3, kind: "tall", pot: C.grafito });
    L.plant(root, { x: -4.4, y, z: 2.7, s: 1.1, pot: C.marfil });
    L.plant(root, { x: 1.1, y, z: -2.8, s: 0.9, kind: "snake", pot: C.vino });
    return { footprint: [W, D] };
  },
};
