// Concepto · Boleta de pago con monedas (soles) y calculadora.
import * as L from "./lib.js";
const { C } = L;

function payslip() {
  return L.tex(700, 960, (c, W, H) => {
    c.fillStyle = "#FBF8F3"; c.fillRect(0, 0, W, H);
    c.fillStyle = "#14110F"; c.font = `700 46px ${L.FONT}`; c.fillText("BOLETA DE PAGO", 56, 100);
    c.fillStyle = "#8E1B2C"; c.fillRect(56, 124, 120, 8);
    c.fillStyle = "#CFC5B6"; L.rrect(c, 56, 160, 260, 16, 8); c.fill(); L.rrect(c, 56, 192, 180, 16, 8); c.fill();
    c.strokeStyle = "#ECE5DA"; c.lineWidth = 3;
    const rows = [["Remuneración básica", "2 300.00"], ["Asignación familiar", "102.50"], ["Horas extra", "180.00"], ["ONP / AFP", "-335.70"], ["EsSalud (empleador)", "232.65"]];
    c.font = `500 30px ${L.FONT}`;
    rows.forEach(([a, b], i) => {
      const yy = 290 + i * 78;
      c.beginPath(); c.moveTo(56, yy + 28); c.lineTo(W - 56, yy + 28); c.stroke();
      c.fillStyle = "#4A443D"; c.textAlign = "left"; c.fillText(a, 56, yy);
      c.fillStyle = b.startsWith("-") ? "#8E1B2C" : "#14110F"; c.textAlign = "right"; c.fillText(b, W - 56, yy);
    });
    c.fillStyle = "#ECE5DA"; L.rrect(c, 56, 720, W - 112, 120, 18); c.fill();
    c.fillStyle = "#4A443D"; c.textAlign = "left"; c.font = `600 30px ${L.FONT}`; c.fillText("Neto a pagar", 86, 790);
    c.fillStyle = "#14110F"; c.textAlign = "right"; c.font = `700 40px ${L.FONT}`; c.fillText("S/ 2 246.80", W - 86, 794);
  });
}

function coin(p, x, y, z, k) {
  const brass = L.metal(k % 3 === 0 ? C.latonOsc : C.laton, 0.3);
  L.cyl(0.34, 0.34, 0.07, brass, { p, x, y, z, seg: 48 });
  L.torus(0.3, 0.012, L.metal(C.latonOsc, 0.4), { p, x, y: y + 0.072, z, rx: Math.PI / 2 });
}

export default {
  az: 36, el: 42, pad: 1.08, padSq: 1.06, keyDir: [-0.6, 1.4, 0.7],
  build(root) {
    L.reseed(401);
    const y0 = L.pedestal(root, 2.85);
    // boleta
    const sg = L.group({ p: root, x: -0.45, y: y0, z: 0.1, ry: 0.22 });
    L.box(2.1, 0.03, 2.88, C.marfil, { p: sg, r: 0.01, seg: 2 });
    L.panel(2.06, 2.84, payslip(), { p: sg, y: 0.032, rx: -Math.PI / 2 });
    L.box(2.1, 0.03, 2.88, C.lino, { p: root, x: -0.3, y: y0 - 0.0, z: -0.05, ry: 0.1, r: 0.01, seg: 2 });
    // monedas apiladas
    const stacks = [[1.55, -0.6, 7], [2.15, -0.05, 4], [1.6, 0.55, 2]];
    stacks.forEach(([x, z, n], s) => { for (let i = 0; i < n; i++) coin(root, x + (L.rnd() - 0.5) * 0.04, y0 + i * 0.075, z + (L.rnd() - 0.5) * 0.04, i + s); });
    // monedas sueltas
    coin(root, 0.95, y0 + 0.06, 1.35, 1);
    const tilted = L.group({ p: root, x: 2.25, y: y0 + 0.12, z: 1.0, rz: 0.5 }); coin(tilted, 0, 0, 0, 2);
    // calculadora
    const cg = L.group({ p: root, x: 1.0, y: y0, z: -1.95, ry: -0.35 });
    L.box(1.1, 0.14, 1.55, C.grafito, { p: cg, r: 0.07 });
    L.box(0.88, 0.02, 0.36, 0xA8B4A4, { p: cg, y: 0.14, z: -0.5, r: 0.02, m: { rough: 0.3 } });
    for (let r = 0; r < 5; r++) for (let k = 0; k < 4; k++) {
      const col = r === 4 && k === 3 ? C.carmin : k === 3 ? C.piedra : C.marfil;
      L.box(0.18, 0.06, 0.15, col, { p: cg, x: -0.35 + k * 0.233, y: 0.13, z: -0.12 + r * 0.2, r: 0.03 });
    }
    // lapicero
    const pg = L.group({ p: root, x: -1.6, y: y0 + 0.08, z: 1.5, ry: 0.7 });
    L.cyl(0.075, 0.075, 1.3, C.tinta, { p: pg, rz: Math.PI / 2, center: true, seg: 24, m: { rough: 0.35 } });
    L.cyl(0.078, 0.078, 0.2, C.laton, { p: pg, x: -0.55, rz: Math.PI / 2, center: true, seg: 24, m: { rough: 0.3, metal: 0.6 } });
    return { footprint: [5.7, 5.7] };
  },
};
