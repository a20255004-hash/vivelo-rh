// 6 · Agroexportación en Ica: viñedo en espaldera, espárragos, jabas, cosechadores con sombrero, dunas.
import * as L from "./lib.js";
const { C } = L;

export default {
  az: 40, el: 29,
  build(root) {
    L.reseed(66);
    const W = 11, D = 7.4;
    const y = L.base(root, W, D, { top: 0xE6D7BC, side: C.piedra });
    // dunas y cerros al fondo (dentro de la base)
    const dunes = [[-3.4, 1.6, 1.35, 0.5, 0.6, 0xE2CDA6], [0.6, 1.9, 1.25, 0.62, 0.5, 0xD9C29A], [4.1, 1.3, 1.05, 0.55, 0.62, 0xE2CDA6]];
    dunes.forEach(([x, r, sx, sy, sz, c]) => L.sphere(r, c, { p: root, x, y, z: -2.75, theta: Math.PI / 2, sx, sy, sz, seg: 48, m: { rough: 0.95 } }));
    L.sphere(1.5, 0xCFB78E, { p: root, x: -1.3, y, z: -3.15, theta: Math.PI / 2, sx: 1.2, sy: 0.75, sz: 0.4, seg: 48, m: { rough: 0.95 } });
    L.sphere(1.3, 0xCFB78E, { p: root, x: 2.6, y, z: -3.2, theta: Math.PI / 2, sx: 1.3, sy: 0.8, sz: 0.38, seg: 48, m: { rough: 0.95 } });
    // reservorio de riego
    L.box(2.3, 0.16, 1.3, C.piedra, { p: root, x: -3.4, y, z: 2.55, r: 0.08 });
    L.box(2.0, 0.04, 1.0, C.pizarra, { p: root, x: -3.4, y: y + 0.13, z: 2.55, r: 0.02, m: { rough: 0.2 } });
    // viñedo: 4 hileras en espaldera
    for (let r = 0; r < 4; r++) {
      const z = -1.7 + r * 1.05, x0 = -5.0, x1 = -0.6;
      for (let x = x0; x <= x1 + 0.01; x += 1.1) L.box(0.07, 1.25, 0.07, C.latonOsc, { p: root, x, y, z, r: 0.02 });
      L.cyl(0.008, 0.008, x1 - x0, C.grafito, { p: root, x: (x0 + x1) / 2, y: y + 1.15, z, rz: Math.PI / 2, center: true, cast: false });
      L.box(x1 - x0 + 0.3, 0.42, 0.62, C.salvia, { p: root, x: (x0 + x1) / 2, y: y + 0.88, z, r: 0.2, seg: 4 });
      for (let x = x0; x < x1; x += 0.55) L.sphere(0.2 + L.rnd() * 0.05, C.salviaClara, { p: root, x: x + L.rnd() * 0.2, y: y + 1.27, z: z + (L.rnd() - 0.5) * 0.15, sy: 0.55, seg: 16 });
      for (let x = x0 + 0.2; x < x1; x += 0.42) {
        if (L.rnd() > 0.3) {
          const gc = L.rnd() > 0.5 ? C.vino : C.ciruela;
          for (let k = 0; k < 7; k++) L.sphere(0.042, gc, { p: root, x: x + (k % 3 - 1) * 0.05 * (1 - k / 8), y: y + 0.84 - Math.floor(k / 3) * 0.06 - (k === 6 ? 0.04 : 0), z: z + 0.3, seg: 10 });
        }
      }
    }
    // espárragos: camellones
    for (let r = 0; r < 5; r++) {
      const z = -1.2 + r * 0.75;
      L.box(4.3, 0.18, 0.42, 0xCDB894, { p: root, x: 2.75, y, z, r: 0.08 });
      for (let x = 0.8; x < 4.7; x += 0.32) {
        if (r % 2) { L.cone(0.17, 0.55, L.rnd() > 0.5 ? C.salvia : C.salviaClara, { p: root, x: x + L.rnd() * 0.1, y: y + 0.2, z, seg: 7 }); L.cyl(0.015, 0.02, 0.3, C.salvia, { p: root, x, y: y + 0.15, z }); }
        else for (let k = 0; k < 2; k++) L.cyl(0.022, 0.026, 0.2 + L.rnd() * 0.15, C.salviaClara, { p: root, x: x + k * 0.1, y: y + 0.15, z: z + (k - 0.5) * 0.1 });
      }
    }
    // camino de tierra
    L.box(0.8, 0.02, D - 1.2, 0xD8C6A5, { p: root, x: -0.05, y, z: 0.4, r: 0.01, cast: false });
    // jabas con uva
    const crates = [[-0.1, 2.6], [0.45, 2.6], [0.17, 2.6, 1], [-0.25, 1.95]];
    crates.forEach(([x, z, up]) => {
      const yy = y + (up ? 0.32 : 0);
      L.box(0.5, 0.3, 0.36, C.salvia, { p: root, x, y: yy, z, r: 0.03 });
      for (let k = 0; k < 5; k++) L.sphere(0.07, k % 2 ? C.vino : C.ciruela, { p: root, x: x - 0.15 + k * 0.075, y: yy + 0.3, z: z + (k % 2 ? 0.06 : -0.06), seg: 12 });
    });
    // toldo de acopio
    const tx = 3.9, tz = 2.55;
    for (const [dx, dz] of [[-1, -0.6], [1, -0.6], [-1, 0.6], [1, 0.6]]) L.box(0.06, 1.9, 0.06, C.grafito, { p: root, x: tx + dx, y, z: tz + dz, r: 0.02 });
    L.box(2.3, 0.08, 1.5, C.marfil, { p: root, x: tx, y: y + 1.9, z: tz, r: 0.03 });
    L.box(2.3, 0.18, 0.04, C.carmin, { p: root, x: tx, y: y + 1.75, z: tz + 0.75, r: 0.01 });
    L.desk(root, { x: tx, y, z: tz, w: 1.6, d: 0.7, h: 0.8, top: C.maderaClara });
    for (let i = 0; i < 3; i++) L.box(0.4, 0.22, 0.3, C.salvia, { p: root, x: tx - 0.5 + i * 0.5, y: y + 0.8, z: tz, r: 0.02 });
    L.figure(root, { x: tx - 0.2, y, z: tz - 0.6, ry: 0, skin: L.SKIN[1], shirt: C.marfil, coat: C.marfil, pants: C.pizarra, hat: "cofia", arms: "front" });
    // huarango
    L.tree(root, { x: -4.85, y, z: -2.75, s: 1.2, color: C.salvia, color2: 0x6E8770 });
    // cosechadores
    const pick = [[-2.8, -1.2, 0], [-1.5, 0.95, Math.PI], [-3.6, 0.95, Math.PI], [1.8, 0.4, 0.4], [0.2, 1.4, -0.4]];
    pick.forEach(([x, z, ry], i) => L.figure(root, { x, y, z, ry, skin: L.pick(L.SKIN), shirt: [C.pizarra, C.vino, C.salvia, C.ciruela, C.marfil][i], pants: C.grafito, hat: "sun", hatColor: i % 2 ? C.maderaClara : C.marfil, arms: i === 4 ? "front" : "one", carry: i === 4 }));
    return { footprint: [W, D] };
  },
};
