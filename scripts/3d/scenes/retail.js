// 8 · Tienda por campaña navideña: percheros, mesas de ropa doblada, árbol, cajera y personal de temporada.
import * as L from "./lib.js";
const { C } = L;

export default {
  az: 42, el: 30,
  build(root) {
    L.reseed(88);
    const W = 9.2, D = 6.2, H = 3.3;
    const y = L.base(root, W, D, { floor: "wood" });
    const win = { wall: "left", a: 0.2, b: 2.6, y0: 0.5, y1: 2.8 };
    L.walls(root, W, D, H, { openings: [win], color: C.marfil });
    L.windowPane(root, "left", W, D, win, { mull: 2, sky0: "#D9DFE0", sky1: "#F5F0E8" });
    const bz = -D / 2 + 0.22;
    // guirnalda
    for (let i = 0; i < 26; i++) { const x = -4.2 + i * 0.33; L.sphere(0.07, i % 3 === 0 ? C.carmin : C.salvia, { p: root, x, y: y + 2.95 - Math.sin((i % 6) / 5 * Math.PI) * 0.18, z: bz + 0.08, seg: 12 }); }
    // repisas en muro de fondo con ropa doblada
    for (let r = 0; r < 2; r++) {
      L.box(3.6, 0.05, 0.4, C.maderaClara, { p: root, x: -1.6, y: y + 1.1 + r * 0.6, z: bz + 0.2, r: 0.02 });
      for (let i = 0; i < 6; i++) for (let k = 0; k < 3; k++) L.box(0.42, 0.07, 0.32, [C.pizarra, C.vino, C.marfil, C.salvia, C.ciruela, C.piedra][(i + r) % 6], { p: root, x: -3.1 + i * 0.6, y: y + 1.15 + r * 0.6 + k * 0.075, z: bz + 0.22, r: 0.025 });
    }
    // percheros
    L.hanger(root, { x: -1.6, y, z: -1.3, w: 2.2, n: 11 });
    L.hanger(root, { x: -3.6, y, z: -0.2, ry: Math.PI / 2, w: 1.8, n: 9, colors: [C.vino, C.carmin, C.marfil, C.pizarra] });
    // mesas de exhibición
    for (const [x, z] of [[-1.5, 0.9], [0.6, 1.9]]) {
      L.box(1.5, 0.75, 0.9, C.maderaClara, { p: root, x, y, z, r: 0.05 });
      for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) for (let k = 0; k < 3; k++) L.box(0.4, 0.07, 0.34, [C.pizarra, C.salvia, C.vino, C.marfil, C.ciruela][(i + j * 2) % 5], { p: root, x: x - 0.48 + i * 0.48, y: y + 0.75 + k * 0.075, z: z - 0.2 + j * 0.4, r: 0.025 });
    }
    // maniquí
    const mq = L.group({ p: root, x: -3.7, y, z: 1.9 });
    L.cyl(0.2, 0.22, 0.04, C.grafito, { p: mq });
    L.cyl(0.02, 0.02, 0.8, C.grafito, { p: mq });
    const tor = L.capsule(0.2, 0.35, C.carmin, { p: mq, y: 1.15 }); tor.scale.z = 0.75;
    L.sphere(0.14, C.piedra, { p: mq, y: 1.62 });
    // árbol navideño
    L.xmasTree(root, { x: 3.6, y, z: -2.2, s: 1.15 });
    for (const [x, z, c] of [[3.1, -1.6, C.carmin], [3.9, -1.5, C.laton], [3.4, -1.3, C.pizarra]]) { L.box(0.3, 0.24, 0.3, c, { p: root, x, y, z, r: 0.03 }); L.box(0.32, 0.04, 0.06, C.marfil, { p: root, x, y: y + 0.12, z, r: 0.01, cast: false }); }
    // caja registradora
    const cx = 2.2, cz = -0.4;
    L.box(1.9, 0.95, 0.6, C.marfil, { p: root, x: cx, y, z: cz, r: 0.05 });
    L.box(2.0, 0.05, 0.7, C.grafito, { p: root, x: cx, y: y + 0.95, z: cz, r: 0.02 });
    L.box(0.4, 0.12, 0.3, C.grafito, { p: root, x: cx - 0.3, y: y + 1.0, z: cz, r: 0.03 });
    L.monitor(root, { x: cx - 0.3, y: y + 1.0, z: cz - 0.05, w: 0.38, h: 0.26, ry: Math.PI, screen: L.docTex() });
    // bolsas de compra
    for (const [x, z, c] of [[cx + 0.55, cz, C.vino], [cx + 0.8, cz + 0.05, C.maderaClara]]) { L.box(0.3, 0.36, 0.14, c, { p: root, x, y: y + 1.0, z, r: 0.02 }); L.torus(0.07, 0.01, C.tinta, { p: root, x, y: y + 1.36, z }); }
    // cajera (gorro navideño) y personal de temporada
    const santa = { hat: "cap", hatColor: C.carmin };
    L.figure(root, { x: cx - 0.2, y, z: cz - 0.65, ry: 0, skin: L.SKIN[1], shirt: C.salvia, pants: C.grafito, hair: L.HAIR[0], long: true, ...santa, arms: "front" });
    L.figure(root, { x: -0.3, y, z: -0.25, ry: 0.9, skin: L.SKIN[2], shirt: C.salvia, pants: C.grafito, ...santa, arms: "one" });
    L.figure(root, { x: 1.6, y, z: 1.45, ry: -2.2, skin: L.SKIN[0], shirt: C.salvia, pants: C.grafito, hair: L.HAIR[3], long: true, ...santa, carry: true, arms: "front" });
    // clientes
    L.figure(root, { ...L.randomPerson({ shirt: C.pizarra }), x: 2.6, y, z: 0.45, ry: Math.PI });
    L.figure(root, { ...L.randomPerson({ shirt: C.ciruela }), x: -1.2, y, z: -0.5, ry: Math.PI - 0.3 });
    L.figure(root, { ...L.randomPerson({ shirt: C.latonOsc }), x: -0.2, y, z: 1.2, ry: -0.6, s: 0.95 });
    return { footprint: [W, D] };
  },
};
