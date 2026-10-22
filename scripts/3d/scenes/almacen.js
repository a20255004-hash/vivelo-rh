// 3 · Almacén: racks con cajas, parihuela, montacargas, operario con chaleco y casco.
import * as L from "./lib.js";
const { C } = L;

function forklift(p, o) {
  const g = L.group({ p, ...o });
  const body = C.laton;
  L.box(1.1, 0.5, 0.95, body, { p: g, y: 0.2, r: 0.1 });
  L.box(0.55, 0.45, 0.9, C.grafito, { p: g, x: -0.4, y: 0.55, r: 0.08 }); // contrapeso
  L.box(0.7, 0.1, 0.7, C.grafito, { p: g, x: 0.15, y: 0.7, r: 0.04 }); // asiento base
  L.box(0.35, 0.12, 0.4, C.tinta, { p: g, x: 0.0, y: 0.8, r: 0.05 });
  L.box(0.1, 0.35, 0.4, C.tinta, { p: g, x: -0.16, y: 0.88, r: 0.04 });
  // techo protector
  for (const [x, z] of [[0.45, 0.4], [0.45, -0.4], [-0.35, 0.4], [-0.35, -0.4]]) L.box(0.05, 1.35, 0.05, C.grafito, { p: g, x, y: 0.7, z, r: 0.02 });
  L.box(0.9, 0.05, 0.9, C.grafito, { p: g, x: 0.05, y: 2.05, r: 0.02 });
  L.cyl(0.06, 0.06, 0.04, C.carmin, { p: g, x: -0.25, y: 2.1, m: { emissive: 0x8E1B2C, ei: 0.6 } });
  // volante
  L.torus(0.12, 0.02, C.tinta, { p: g, x: 0.4, y: 1.05, rx: -1.0, ry: Math.PI / 2 });
  // mástil y horquillas
  for (const z of [0.3, -0.3]) L.box(0.08, 2.2, 0.08, C.grafito, { p: g, x: 0.65, y: 0.1, z, r: 0.02 });
  L.box(0.06, 0.5, 0.75, C.grafito, { p: g, x: 0.72, y: 0.25, r: 0.02 });
  for (const z of [0.22, -0.22]) L.box(0.9, 0.05, 0.12, C.grafito, { p: g, x: 1.15, y: 0.25, z, r: 0.015 });
  for (const [x, z, r] of [[0.35, 0.47, 0.22], [0.35, -0.47, 0.22], [-0.45, 0.47, 0.2], [-0.45, -0.47, 0.2]])
    L.cyl(r, r, 0.18, C.tinta, { p: g, x, y: r, z, rx: Math.PI / 2, center: true, seg: 24 });
  return g;
}

export default {
  az: 42, el: 31,
  build(root) {
    L.reseed(33);
    const W = 9, D = 6.4, H = 3.8;
    const y = L.base(root, W, D, { floor: "concrete" });
    L.walls(root, W, D, H, { color: C.arena, skirtColor: C.grafito });
    // franja superior y ventanas altas
    const t = 0.22;
    L.box(W - t, 0.12, 0.04, C.pizarra, { p: root, x: t / 2, y: y + 2.9, z: -D / 2 + t + 0.02, r: 0.01, cast: false });
    L.box(0.04, 0.12, D - t, C.pizarra, { p: root, x: -W / 2 + t + 0.02, y: y + 2.9, z: t / 2, r: 0.01, cast: false });
    // líneas de piso (latón)
    L.box(0.08, 0.012, D - 1.2, C.laton, { p: root, x: -0.2, y, z: 0.4, r: 0.004, cast: false });
    L.box(W - 2.2, 0.012, 0.08, C.laton, { p: root, x: 0.9, y, z: -1.1, r: 0.004, cast: false });

    // racks de fondo
    const boxCols = [C.madera, C.maderaClara, C.madera, C.latonOsc, C.maderaClara];
    const rack = (x, z, ry, w) => {
      const sh = L.shelf(root, { x, y, z, ry, w, d: 0.9, h: 3.1, levels: 4, color: C.pizarra, board: C.latonOsc });
      const lv = sh.userData.levels;
      for (let l = 0; l < 4; l++) {
        let a = -w / 2 + 0.15;
        while (a < w / 2 - 0.5) {
          const bw = 0.45 + L.rnd() * 0.3, bh = 0.3 + L.rnd() * 0.35;
          if (L.rnd() > 0.2) {
            const lx = a + bw / 2;
            const px = ry ? x : x + lx, pz = ry ? z - lx : z;
            L.crate(root, { x: px, y: y + lv[l], z: pz, ry, w: bw, h: Math.min(bh, l === 3 ? 0.5 : 0.62), d: 0.7, color: L.pick(boxCols) });
          }
          a += bw + 0.06;
        }
      }
    };
    rack(-0.9, -D / 2 + 0.7, 0, 4.2);
    rack(3.0, -D / 2 + 0.7, 0, 2.4);
    rack(-W / 2 + 0.72, 0.6, Math.PI / 2, 3.6);

    // parihuela con cajas envueltas
    L.pallet(root, { x: 1.4, y, z: 0.1 });
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) L.crate(root, { x: 1.15 + i * 0.52, y: y + 0.135, z: -0.12 + j * 0.46, w: 0.5, h: 0.4, d: 0.44, color: C.maderaClara });
    L.crate(root, { x: 1.4, y: y + 0.535, z: 0.1, w: 0.7, h: 0.38, d: 0.6, color: C.madera });
    // segunda parihuela vacía
    L.pallet(root, { x: -2.6, y, z: 2.3, ry: 0.2 });
    L.pallet(root, { x: -2.6, y: y + 0.135, z: 2.3, ry: 0.25 });

    forklift(root, { x: -1.2, y, z: 0.35, ry: 0.2 });
    // operario sentado en montacargas
    L.figure(root, { x: -1.2, y: y + 0.38, z: 0.35, ry: Math.PI / 2 + 0.2, seated: true, seatH: 0.46, skin: L.SKIN[2], shirt: C.pizarra, pants: C.tinta, vest: C.carmin, hat: "helmet", arms: "front" });
    // operaria con tablilla
    L.figure(root, { x: 2.7, y, z: 1.4, ry: -0.9, skin: L.SKIN[1], shirt: C.salvia, pants: C.grafito, vest: C.carmin, hat: "helmet", hair: L.HAIR[0], long: true, arms: "one", clip: true });
    // operario cargando caja
    L.figure(root, { x: 0.4, y, z: 2.2, ry: 0.6, skin: L.SKIN[3], shirt: C.marfil, pants: C.pizarra, vest: C.carmin, hat: "helmet", arms: "front", carry: true });
    // conos y extintor
    for (const [x, z] of [[3.7, 2.6], [3.0, 2.75]]) { L.cone(0.16, 0.42, C.carmin, { p: root, x, y: y + 0.03, z }); L.box(0.36, 0.03, 0.36, C.carmin, { p: root, x, y, z, r: 0.01 }); L.cyl(0.11, 0.12, 0.06, C.marfil, { p: root, x, y: y + 0.18, z, cast: false }); }
    L.cyl(0.1, 0.1, 0.45, C.carmin, { p: root, x: -W / 2 + 0.38, y: y + 0.5, z: 2.7 });
    L.box(0.34, 0.5, 0.04, C.marfil, { p: root, x: -W / 2 + 0.25, y: y + 1.1, z: 2.7, ry: Math.PI / 2, r: 0.02 });
    return { footprint: [W, D] };
  },
};
