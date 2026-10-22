// 1 · Oficina de RR. HH.: escritorio, monitor con gráfico, archivos, planta, taza, notas adhesivas, ventana.
import * as L from "./lib.js";
const { C } = L;

export default {
  az: 42, el: 30,
  build(root) {
    L.reseed(11);
    const W = 8.4, D = 5.5, H = 3.3;
    const y = L.base(root, W, D, { floor: "wood" });
    const win = { wall: "back", a: 0.9, b: 3.7, y0: 1.0, y1: 3.0 };
    L.walls(root, W, D, H, { openings: [win] });
    L.windowPane(root, "back", W, D, win, { mull: 3 });
    // tapete
    L.box(4.4, 0.025, 3.2, C.vino, { p: root, x: 0.6, y, z: -0.25, r: 0.012 });
    L.box(4.1, 0.03, 2.9, C.arena, { p: root, x: 0.6, y, z: -0.25, r: 0.012 });

    // escritorio
    const dk = L.desk(root, { x: 0.6, y, z: -1.05, w: 3.0, d: 1.3, drawers: C.arena });
    const top = y + 0.74;
    L.monitor(root, { x: 0.35, y: top, z: -1.35, w: 1.15, h: 0.68, screen: L.chartTex() });
    L.box(0.6, 0.02, 0.2, C.marfil, { p: root, x: 0.35, y: top, z: -0.8, r: 0.01 }); // teclado
    L.box(0.08, 0.025, 0.12, C.marfil, { p: root, x: 0.85, y: top, z: -0.8, r: 0.012 }); // mouse
    L.mug(root, { x: -0.55, y: top, z: -0.8 });
    // pila de folders
    const fcol = [C.pizarra, C.salvia, C.laton, C.vino];
    fcol.forEach((c, i) => L.folder(root, { x: 1.6, y: top + i * 0.055, z: -0.95, ry: (i - 1.5) * 0.12, color: c, t: 0.05 }));
    L.paper(root, { x: 1.55, y: top + 0.22, z: -0.9, ry: 0.2 });
    L.plant(root, { x: -0.6, y: top, z: -1.45, s: 0.55, kind: "snake" });
    // lámpara de escritorio
    const lg = L.group({ p: root, x: 1.85, y: top, z: -1.5 });
    L.cyl(0.13, 0.15, 0.04, C.grafito, { p: lg });
    L.cyl(0.018, 0.018, 0.55, C.grafito, { p: lg, y: 0.03, rz: 0.25 });
    L.cyl(0.07, 0.15, 0.16, C.carmin, { p: lg, x: -0.18, y: 0.5, rz: 0.9 });

    // persona trabajando (de espaldas parcialmente)
    L.chair(root, { x: 0.45, y, z: -0.1, ry: Math.PI, color: C.pizarra });
    L.figure(root, { x: 0.45, y, z: -0.2, ry: Math.PI, seated: true, skin: L.SKIN[1], shirt: C.salvia, pants: C.grafito, hair: L.HAIR[1], long: true, arms: "front" });

    // estante en muro izquierdo con archivadores
    const sh = L.shelf(root, { x: -3.62, y, z: -0.6, ry: Math.PI / 2, w: 2.6, d: 0.7, h: 2.5, levels: 4, color: C.grafito, board: C.maderaClara });
    const lv = sh.userData.levels;
    const bc = [C.pizarra, C.salvia, C.vino, C.ciruela, C.laton, C.pizarraClara, C.piedra];
    for (let l = 0; l < 3; l++) {
      let z = -1.75;
      const n = 6 + l;
      for (let i = 0; i < n && z < 0.45; i++) {
        const t = 0.1 + L.rnd() * 0.05;
        if (l === 1 && i === 3) { z += 0.5; continue; }
        L.binder(root, { x: -3.62, y: y + lv[l], z: z + t / 2, ry: Math.PI / 2, t, h: 0.38 + L.rnd() * 0.1, d: 0.45, color: L.pick(bc) });
        z += t + 0.015;
      }
    }
    L.plant(root, { x: -3.62, y: y + lv[3], z: -1.4, s: 0.45 });
    L.box(0.4, 0.3, 0.4, C.marfil, { p: root, x: -3.62, y: y + lv[3], z: 0.1, r: 0.04 });

    // tablero de corcho con notas adhesivas (muro de fondo, izquierda)
    const bx = -2.1, bz = -D / 2 + 0.23;
    L.box(2.2, 1.3, 0.06, C.maderaClara, { p: root, x: bx, y: y + 1.55, z: bz, r: 0.03 });
    L.box(2.05, 1.15, 0.03, C.madera, { p: root, x: bx, y: y + 1.625, z: bz + 0.035, r: 0.012 });
    const notes = [C.laton, C.salviaClara, C.marfil, C.carmin, C.pizarraClara, C.laton, C.marfil, C.salviaClara];
    notes.forEach((c, i) => {
      const nx = bx - 0.75 + (i % 4) * 0.5, ny = y + 2.25 - Math.floor(i / 4) * 0.48;
      L.box(0.32, 0.32, 0.015, c, { p: root, x: nx, y: ny - 0.16, z: bz + 0.06, r: 0.004, rz: (L.rnd() - 0.5) * 0.25 });
    });
    // reloj
    L.cyl(0.26, 0.26, 0.05, C.marfil, { p: root, x: -2.1, y: y + 2.75, z: bz + 0.02, rx: Math.PI / 2, center: true });
    L.torus(0.26, 0.025, C.grafito, { p: root, x: -2.1, y: y + 2.75, z: bz + 0.05 });
    L.box(0.02, 0.17, 0.01, C.tinta, { p: root, x: -2.1, y: y + 2.75, z: bz + 0.06, r: 0.004, rz: 0.4 });

    // archivador metálico bajo la ventana
    L.box(1.2, 0.85, 0.6, C.piedra, { p: root, x: 2.3, y, z: -2.23, r: 0.05 });
    for (let i = 0; i < 2; i++) L.box(0.4, 0.04, 0.03, C.grafito, { p: root, x: 2.3, y: y + 0.25 + i * 0.36, z: -1.92, r: 0.01 });
    L.plant(root, { x: 3.55, y, z: -2.1, s: 1.25, kind: "tall", pot: C.arena });
    L.box(0.45, 0.2, 0.32, C.grafito, { p: root, x: 2.15, y: y + 0.85, z: -2.23, r: 0.04 }); // impresora
    L.paper(root, { x: 2.15, y: y + 1.05, z: -2.18 });

    // silla de visita + mesita
    L.chair(root, { x: 2.0, y, z: 0.75, ry: -2.3, color: C.vino });
    L.plant(root, { x: -3.35, y, z: 1.95, s: 1.1, pot: C.grafito });
    L.cyl(0.35, 0.35, 0.05, C.maderaClara, { p: root, x: 2.95, y: y + 0.5, z: 1.35 });
    L.cyl(0.04, 0.04, 0.5, C.grafito, { p: root, x: 2.95, y, z: 1.35 });
    L.cyl(0.2, 0.22, 0.03, C.grafito, { p: root, x: 2.95, y, z: 1.35 });
    return { footprint: [W, D] };
  },
};
