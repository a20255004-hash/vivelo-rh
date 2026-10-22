// 4 · Municipalidad: fachada de estilo colonial con arcos, balcones de madera, asta sin escudo y fila de ciudadanos.
import * as L from "./lib.js";
const { C } = L;

export default {
  az: 38, el: 27,
  build(root) {
    L.reseed(44);
    const W = 10.4, D = 7.0;
    const y = L.base(root, W, D, { floor: "tile" });
    const BW = 8.8, bz = -D / 2 + 1.25, fz = bz + 0.8; // centro y frente del edificio
    const fac = C.marfil, trim = C.piedra;
    // volumen trasero (interior del portal)
    L.box(BW, 3.6, 0.5, C.arena, { p: root, x: 0, y, z: bz - 0.55, r: 0.04 });
    // ventanillas dentro del portal
    for (let i = 0; i < 5; i++) {
      const x = -BW / 2 + 0.88 + i * 1.76;
      if (i === 2) { L.box(1.0, 1.65, 0.06, C.latonOsc, { p: root, x, y, z: bz - 0.28, r: 0.03 }); continue; }
      L.box(1.1, 0.95, 0.18, C.maderaClara, { p: root, x, y, z: bz - 0.18, r: 0.03 });
      L.box(1.0, 0.75, 0.04, C.pizarraClara, { p: root, x, y: y + 1.0, z: bz - 0.26, r: 0.01, m: { rough: 0.25 } });
      L.figure(root, { x, y: y + 0.0, z: bz - 0.55 + 0.25 + 0.05, s: 0.85, skin: L.pick(L.SKIN), shirt: L.pick([C.pizarra, C.salvia, C.vino]), hair: L.pick(L.HAIR) });
    }
    // fachada de arcos (planta baja)
    const holes = [];
    for (let i = 0; i < 5; i++) holes.push({ x: -BW / 2 + 0.33 + i * 1.76, y: 0.06, w: 1.1, h: 1.85, arch: true });
    L.holedWall(BW, 2.3, 0.32, holes, fac, { p: root, y: y - 0.06, z: fz });
    // piso del portal
    L.box(BW - 0.2, 0.05, 1.0, C.piedra, { p: root, y, z: bz - 0.0, r: 0.02 });
    // primer piso
    const up = [];
    for (let i = 0; i < 5; i++) up.push({ x: -BW / 2 + 0.53 + i * 1.76, y: 0.35, w: 0.7, h: 1.05, arch: false });
    L.holedWall(BW, 1.5, 0.32, up, fac, { p: root, y: y + 2.24, z: fz - 0.0 });
    L.box(BW, 1.5, 1.5, C.arena, { p: root, y: y + 2.24, z: bz - 0.45, r: 0.04 });
    // vidrios del primer piso
    for (let i = 0; i < 5; i++) L.box(0.7, 1.05, 0.04, C.pizarraClara, { p: root, x: -BW / 2 + 0.88 + i * 1.76, y: y + 2.24 + 0.35, z: fz - 0.12, r: 0.01, m: { rough: 0.25 } });
    // cornisas
    L.box(BW + 0.3, 0.14, 0.62, trim, { p: root, y: y + 2.2, z: fz - 0.12, r: 0.04 });
    L.box(BW + 0.35, 0.18, 0.7, trim, { p: root, y: y + 3.72, z: fz - 0.12, r: 0.05 });
    for (let i = 0; i < 9; i++) L.box(0.32, 0.3, 0.32, fac, { p: root, x: -BW / 2 + 0.3 + i * (BW - 0.6) / 8, y: y + 3.9, z: fz - 0.0, r: 0.04 });
    L.box(BW + 0.2, 0.08, 0.38, trim, { p: root, y: y + 4.2, z: fz - 0.0, r: 0.03 });
    // frontón central con reloj
    L.box(2.0, 1.0, 0.4, fac, { p: root, y: y + 3.9, z: fz - 0.05, r: 0.05 });
    L.extrude([[-1.2, 0], [1.2, 0], [0, 0.7]], 0.42, trim, { p: root, y: y + 4.88, z: fz - 0.05 });
    L.cyl(0.32, 0.32, 0.06, C.marfil, { p: root, y: y + 4.4, z: fz + 0.17, rx: Math.PI / 2, center: true });
    L.torus(0.32, 0.035, C.latonOsc, { p: root, y: y + 4.4, z: fz + 0.2 });
    L.box(0.03, 0.22, 0.01, C.tinta, { p: root, y: y + 4.4, z: fz + 0.21, r: 0.005 });
    L.box(0.16, 0.03, 0.01, C.tinta, { p: root, x: 0.07, y: y + 4.39, z: fz + 0.21, r: 0.005 });
    // balcones de madera
    for (const i of [1, 3]) {
      const x = -BW / 2 + 0.88 + i * 1.76;
      const bg = L.group({ p: root, x, y: y + 2.38, z: fz + 0.35 });
      L.box(1.25, 0.18, 0.55, C.latonOsc, { p: bg, r: 0.04 });
      L.box(1.2, 0.55, 0.5, C.latonOsc, { p: bg, y: 0.15, r: 0.03 });
      for (let k = 0; k < 4; k++) L.box(0.24, 0.4, 0.02, C.madera, { p: bg, x: -0.45 + k * 0.3, y: 0.22, z: 0.255, r: 0.01, cast: false });
      L.box(1.2, 0.5, 0.48, C.madera, { p: bg, y: 0.7, r: 0.02, m: { rough: 0.9 } });
      for (let k = 0; k < 6; k++) L.box(0.03, 0.48, 0.03, C.latonOsc, { p: bg, x: -0.5 + k * 0.2, y: 0.71, z: 0.24, r: 0.01, cast: false });
      L.box(1.32, 0.1, 0.62, C.latonOsc, { p: bg, y: 1.2, r: 0.03 });
    }
    // letrero
    const st = L.signTex("ATENCIÓN AL CIUDADANO", { w: 1024, h: 110, size: 54, bg: "#4A443D", letterSpacing: "4px" });
    L.panel(1.75, 0.19, st, { p: root, x: 0, y: y + 2.04, z: fz + 0.19 });
    // escalón
    L.box(BW - 0.4, 0.08, 0.5, trim, { p: root, y, z: fz + 0.4, r: 0.03 });

    // plaza: asta con bandera bicolor (sin escudo)
    const ax = -4.1, az = 1.9;
    L.cyl(0.32, 0.36, 0.2, C.piedra, { p: root, x: ax, y, z: az });
    L.cyl(0.035, 0.045, 4.2, C.grafito, { p: root, x: ax, y: y + 0.2, z: az, m: { rough: 0.4, metal: 0.5 } });
    L.sphere(0.07, C.laton, { p: root, x: ax, y: y + 4.42, z: az, m: { rough: 0.3, metal: 0.6 } });
    const flag = L.tex(300, 200, (c) => { c.fillStyle = "#8E1B2C"; c.fillRect(0, 0, 100, 200); c.fillStyle = "#FBF8F3"; c.fillRect(100, 0, 100, 200); c.fillStyle = "#8E1B2C"; c.fillRect(200, 0, 100, 200); });
    const fg = new L.THREE.PlaneGeometry(1.2, 0.8, 20, 1);
    const fp = fg.attributes.position;
    for (let i = 0; i < fp.count; i++) { const x = fp.getX(i) + 0.6; fp.setZ(i, Math.sin(x * 4.5) * 0.06 * x); }
    fg.computeVertexNormals();
    const fm = new L.THREE.Mesh(fg, new L.THREE.MeshStandardMaterial({ map: flag, roughness: 0.85, side: L.THREE.DoubleSide }));
    fm.position.set(ax + 0.64, y + 3.85, az); fm.castShadow = true; root.add(fm);
    // árboles, bancas, faroles
    L.tree(root, { x: 3.9, y, z: 2.1, s: 1.15 });
    L.cyl(0.55, 0.6, 0.25, C.piedra, { p: root, x: 3.9, y, z: 2.1 });
    L.tree(root, { x: -2.0, y, z: 2.6, s: 0.95, color: C.salvia });
    L.cyl(0.5, 0.55, 0.25, C.piedra, { p: root, x: -2.0, y, z: 2.6 });
    L.bench(root, { x: 2.3, y, z: 2.85, ry: Math.PI });
    L.lampPost(root, { x: 4.6, y, z: 0.3 });
    L.lampPost(root, { x: -4.6, y, z: 0.0 });
    // fila de ciudadanos
    const q = [[-1.75, -0.95], [-1.45, -0.35], [-1.1, 0.25], [-0.75, 0.85], [-0.35, 1.45]];
    q.forEach(([x, z], i) => L.figure(root, { ...L.randomPerson(), x: x + 0.0, y, z, ry: Math.PI + 0.55, arms: i === 2 ? "one" : "down", clip: i === 2 }));
    L.figure(root, { ...L.randomPerson(), x: 1.6, y, z: 0.8, ry: -2.6, s: 0.68 }); // niño
    L.figure(root, { ...L.randomPerson(), x: 2.1, y, z: 0.55, ry: -2.3 });
    return { footprint: [W, D] };
  },
};
