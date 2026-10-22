// 5 · Planta de consumo masivo: línea de envasado, productos sin marca, operarias con cofia.
import * as L from "./lib.js";
const { C } = L;

export default {
  az: 42, el: 30,
  build(root) {
    L.reseed(55);
    const W = 10, D = 6.4, H = 3.6;
    const y = L.base(root, W, D, { floor: "tile" });
    const hw = [{ wall: "back", a: -3.6, b: -0.4, y0: 2.0, y1: 3.0 }, { wall: "back", a: 0.4, b: 3.6, y0: 2.0, y1: 3.0 }];
    L.walls(root, W, D, H, { openings: hw, color: C.marfil });
    hw.forEach(q => L.windowPane(root, "back", W, D, q, { mull: 4 }));
    // franja sanitaria en los muros
    L.box(W - 0.22, 1.2, 0.03, C.pizarraClara, { p: root, x: 0.11, y, z: -D / 2 + 0.235, r: 0.01, cast: false });
    L.box(0.03, 1.2, D - 0.22, C.pizarraClara, { p: root, x: -W / 2 + 0.235, y, z: 0.11, r: 0.01, cast: false });
    // carril de seguridad
    L.box(8.4, 0.012, 2.0, C.salviaClara, { p: root, x: 0.4, y, z: 0.0, r: 0.005, cast: false });
    L.box(8.4, 0.014, 0.06, C.laton, { p: root, x: 0.4, y, z: 1.0, r: 0.005, cast: false });
    L.box(8.4, 0.014, 0.06, C.laton, { p: root, x: 0.4, y, z: -1.0, r: 0.005, cast: false });

    // máquina llenadora
    const mx = -3.3;
    L.box(1.6, 1.7, 1.4, C.piedra, { p: root, x: mx, y, z: 0, r: 0.08, m: { rough: 0.5, metal: 0.25 } });
    L.box(1.2, 0.7, 0.04, C.pizarraClara, { p: root, x: mx, y: y + 0.75, z: 0.71, r: 0.02, m: { rough: 0.2 } });
    L.cyl(0.35, 0.25, 0.6, C.piedra, { p: root, x: mx, y: y + 1.7, z: 0, m: { rough: 0.4, metal: 0.4 } });
    L.box(0.5, 0.4, 0.12, C.grafito, { p: root, x: mx + 0.6, y: y + 1.05, z: 0.75, r: 0.03 });
    L.panel(0.42, 0.3, L.chartTex(), { p: root, x: mx + 0.6, y: y + 1.25, z: 0.815, glow: 0.3 });
    L.cyl(0.05, 0.05, 0.06, C.carmin, { p: root, x: mx + 0.8, y: y + 0.85, z: 0.82, rx: Math.PI / 2, center: true, m: { emissive: 0x8E1B2C, ei: 0.5 } });
    // faja transportadora
    const cx0 = -2.5, cx1 = 2.6, len = cx1 - cx0, cxm = (cx0 + cx1) / 2, bh = 0.85;
    L.box(len, 0.08, 0.72, C.tinta, { p: root, x: cxm, y: y + bh - 0.04, z: 0, r: 0.035 });
    for (const z of [0.4, -0.4]) L.box(len + 0.1, 0.16, 0.06, C.piedra, { p: root, x: cxm, y: y + bh - 0.1, z, r: 0.025, m: { rough: 0.4, metal: 0.4 } });
    for (let i = 0; i < 5; i++) for (const z of [0.36, -0.36]) L.box(0.07, bh - 0.1, 0.07, C.grafito, { p: root, x: cx0 + 0.2 + i * (len - 0.4) / 4, y, z, r: 0.02 });
    // productos: frascos y cajitas
    for (let i = 0; i < 12; i++) {
      const x = cx0 + 0.3 + i * 0.42;
      if (i < 7) { L.cyl(0.11, 0.11, 0.26, C.marfil, { p: root, x, y: y + bh, z: 0, m: { rough: 0.3 } }); L.cyl(0.1, 0.1, 0.06, C.vino, { p: root, x, y: y + bh + 0.26, z: 0 }); L.cyl(0.112, 0.112, 0.1, C.salvia, { p: root, x, y: y + bh + 0.08, z: 0, cast: false }); }
      else L.box(0.3, 0.22, 0.26, C.maderaClara, { p: root, x, y: y + bh, z: 0, r: 0.02 });
    }
    // mesa de empaque + pallet con cajas
    L.desk(root, { x: 3.4, y, z: -1.6, w: 1.6, d: 0.8, h: 0.85, top: C.piedra });
    for (let i = 0; i < 3; i++) L.box(0.4, 0.3, 0.35, C.maderaClara, { p: root, x: 2.95 + i * 0.45, y: y + 0.85, z: -1.6, r: 0.02 });
    L.pallet(root, { x: 3.7, y, z: 1.6 });
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) for (let k = 0; k < 2; k++) L.crate(root, { x: 3.42 + i * 0.56, y: y + 0.135 + k * 0.4, z: 1.37 + j * 0.46, w: 0.54, h: 0.4, d: 0.44, color: C.maderaClara, tape: C.salvia });
    // tanques
    for (const [x, z] of [[-4.3, -2.3], [-3.4, -2.5]]) {
      L.cyl(0.42, 0.42, 1.9, C.piedra, { p: root, x, y: y + 0.3, z, m: { rough: 0.35, metal: 0.5 } });
      L.sphere(0.42, C.piedra, { p: root, x, y: y + 2.2, z, theta: Math.PI / 2, m: { rough: 0.35, metal: 0.5 } });
      for (const sx of [-1, 1]) L.box(0.06, 0.3, 0.06, C.grafito, { p: root, x: x + sx * 0.3, y, z, r: 0.02 });
    }
    L.cyl(0.06, 0.06, 4.8, C.piedraOsc, { p: root, x: -1.5, y: y + 2.75, z: -D / 2 + 0.35, rz: Math.PI / 2, center: true, m: { metal: 0.4, rough: 0.4 } });
    // lavamanos
    L.box(0.5, 0.85, 0.7, C.piedra, { p: root, x: -W / 2 + 0.5, y, z: 1.6, r: 0.04, m: { metal: 0.3, rough: 0.4 } });
    // operarias con cofia y mandil
    const ops = [[-1.6, -0.65, 0], [0.2, -0.65, 0], [1.9, 0.68, Math.PI], [3.4, -1.0, Math.PI]];
    ops.forEach(([x, z, ry], i) => L.figure(root, { x, y, z, ry, skin: L.SKIN[(i + 1) % 4], shirt: C.marfil, coat: C.marfil, pants: C.pizarra, hat: "cofia", arms: "front" }));
    // supervisor con chaleco
    L.figure(root, { x: -1.0, y, z: 1.9, ry: 2.4, skin: L.SKIN[2], shirt: C.pizarra, pants: C.grafito, vest: C.carmin, hat: "helmet", helmetColor: C.marfil, arms: "one", clip: true });
    return { footprint: [W, D] };
  },
};
