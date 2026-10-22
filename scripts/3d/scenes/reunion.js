// 2 · Sala de reuniones: mesa con 5 figurillas, pizarra, laptop.
import * as L from "./lib.js";
const { C } = L;

function boardTex() {
  return L.tex(640, 360, (c, W, H) => {
    c.fillStyle = "#FBF8F3"; c.fillRect(0, 0, W, H);
    c.strokeStyle = "#4A443D"; c.lineWidth = 5; c.lineCap = "round";
    // diagrama de flujo simple
    const nodes = [[90, 120], [250, 120], [410, 120], [250, 260]];
    c.fillStyle = "#ECE5DA";
    nodes.forEach(([x, y], i) => { c.fillStyle = i === 2 ? "#8E1B2C" : "#ECE5DA"; L.rrect(c, x - 60, y - 34, 120, 68, 14); c.fill(); });
    c.beginPath(); c.moveTo(150, 120); c.lineTo(190, 120); c.moveTo(310, 120); c.lineTo(350, 120); c.moveTo(250, 154); c.lineTo(250, 226); c.stroke();
    c.strokeStyle = "#3E5C76"; c.lineWidth = 4;
    for (let i = 0; i < 4; i++) { c.beginPath(); c.moveTo(500, 70 + i * 34); c.lineTo(600 - (i % 2) * 30, 70 + i * 34); c.stroke(); }
    const notes = ["#C9A46A", "#7E9682", "#8FA3B5"];
    notes.forEach((n, i) => { c.fillStyle = n; c.fillRect(470 + i * 52, 230, 44, 44); });
  });
}

export default {
  az: 40, el: 30,
  build(root) {
    L.reseed(21);
    const W = 8, D = 5.8, H = 3.2;
    const y = L.base(root, W, D, { floor: "wood" });
    const win = { wall: "left", a: -1.9, b: 1.6, y0: 0.9, y1: 2.85 };
    L.walls(root, W, D, H, { openings: [win], color: C.marfil });
    L.windowPane(root, "left", W, D, win, { mull: 3 });
    // pizarra en el fondo
    const bz = -D / 2 + 0.22;
    L.box(3.0, 1.6, 0.06, C.piedra, { p: root, x: 0.6, y: y + 1.0, z: bz + 0.03, r: 0.03 });
    L.panel(2.88, 1.48, boardTex(), { p: root, x: 0.6, y: y + 1.8, z: bz + 0.065 });
    L.box(2.6, 0.04, 0.1, C.piedra, { p: root, x: 0.6, y: y + 0.98, z: bz + 0.1, r: 0.015 });
    [C.carmin, C.pizarra, C.tinta].forEach((c, i) => L.cyl(0.018, 0.018, 0.14, c, { p: root, x: 0.1 + i * 0.12, y: y + 1.04, z: bz + 0.1, rz: Math.PI / 2, center: true }));
    // pantalla lateral
    L.plant(root, { x: 3.45, y, z: -2.35, s: 0.9, kind: "snake", pot: C.vino });

    // tapete + mesa
    L.box(4.6, 0.025, 2.9, C.piedra, { p: root, x: 0.4, y, z: 0.2, r: 0.012 });
    const tg = L.group({ p: root, x: 0.4, y, z: 0.2 });
    L.box(3.4, 0.08, 1.35, C.maderaClara, { p: tg, y: 0.68, r: 0.04 });
    for (const sx of [-1, 1]) { L.box(0.14, 0.62, 0.7, C.grafito, { p: tg, x: sx * 1.2, y: 0.06, r: 0.04 }); L.box(0.4, 0.06, 0.9, C.grafito, { p: tg, x: sx * 1.2, r: 0.03 }); }
    const top = y + 0.76;
    // sillas + personas
    const seats = [
      { x: -0.75, z: 1.15, ry: Math.PI }, { x: 0.55, z: 1.15, ry: Math.PI },
      { x: -0.75, z: -0.75, ry: 0 }, { x: 0.55, z: -0.75, ry: 0 },
    ];
    const ppl = [
      { skin: L.SKIN[2], shirt: C.pizarra, hair: L.HAIR[2], long: false },
      { skin: L.SKIN[0], shirt: C.vino, hair: L.HAIR[1], long: true, bun: true },
      { skin: L.SKIN[1], shirt: C.salvia, hair: L.HAIR[0], long: true },
      { skin: L.SKIN[3], shirt: C.marfil, hair: L.HAIR[2], long: false },
    ];
    seats.forEach((s, i) => {
      const fz = s.z + (s.ry ? 0.1 : -0.1);
      L.chair(root, { x: 0.4 + s.x, y, z: s.z + (s.ry ? 0.1 : -0.1), ry: s.ry, color: i % 2 ? C.grafito : C.piedraOsc });
      L.figure(root, { ...ppl[i], pants: C.grafito, x: 0.4 + s.x, y, z: s.z + (s.ry ? 0 : 0), ry: s.ry, seated: true, arms: i === 1 ? "front" : "down" });
    });
    // presentadora de pie junto a la pizarra
    L.figure(root, { x: 2.35, y, z: -1.95, ry: -0.7, skin: L.SKIN[1], shirt: C.ciruela, pants: C.tinta, hair: L.HAIR[3], long: true, arms: "one" });
    // objetos sobre la mesa
    L.laptop(root, { x: 0.4 - 0.75, y: top, z: 0.2 + 0.4, ry: Math.PI, screen: L.chartTex({ bars: [0.4, 0.6, 0.5, 0.75, 0.62] }) });
    L.laptop(root, { x: 0.4 + 0.55, y: top, z: 0.2 - 0.25, ry: 0, color: C.grafito, screen: L.docTex() });
    L.paper(root, { x: 0.4 - 0.75, y: top, z: -0.15, ry: 0.15 });
    L.paper(root, { x: 0.4 + 0.5, y: top, z: 0.6, ry: -0.2 });
    L.mug(root, { x: 0.4 + 1.25, y: top, z: 0.45, color: C.marfil });
    L.mug(root, { x: 0.4 - 1.3, y: top, z: 0.0, color: C.carmin });
    L.cyl(0.08, 0.08, 0.26, C.pizarraClara, { p: root, x: 0.4 + 0.05, y: top, z: 0.2, m: { rough: 0.2, opacity: 0.7 } });
    // credenza + plantas
    L.box(2.0, 0.7, 0.5, C.maderaClara, { p: root, x: -3.5 + 0.3, y, z: -2.35 + 0.0, r: 0.04 });
    L.box(1.98, 0.04, 0.02, C.latonOsc, { p: root, x: -3.2, y: y + 0.35, z: -2.09, r: 0.01, cast: false });
    L.plant(root, { x: -3.75, y: y + 0.7, z: -2.35, s: 0.55, kind: "snake" });
    L.box(0.42, 0.3, 0.06, C.grafito, { p: root, x: -2.9, y: y + 0.7, z: -2.5, r: 0.02 });
    L.plant(root, { x: 3.4, y, z: 2.4, s: 1.2, kind: "tall", pot: C.grafito });
    L.plant(root, { x: -3.4, y, z: 2.3, s: 1.0, pot: C.arena });
    return { footprint: [W, D] };
  },
};
