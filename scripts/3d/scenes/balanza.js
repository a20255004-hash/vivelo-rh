// Concepto · Balanza equilibrando un documento y un corazón (relaciones laborales / equidad).
import * as L from "./lib.js";
const { C } = L;

function heart(color) {
  const s = new L.THREE.Shape();
  s.moveTo(0, -0.45);
  s.bezierCurveTo(-0.1, -0.33, -0.55, -0.08, -0.5, 0.18);
  s.bezierCurveTo(-0.46, 0.42, -0.12, 0.48, 0, 0.24);
  s.bezierCurveTo(0.12, 0.48, 0.46, 0.42, 0.5, 0.18);
  s.bezierCurveTo(0.55, -0.08, 0.1, -0.33, 0, -0.45);
  const g = new L.THREE.ExtrudeGeometry(s, { depth: 0.2, bevelEnabled: true, bevelSize: 0.09, bevelThickness: 0.1, bevelSegments: 8, curveSegments: 32 });
  g.center();
  const m = new L.THREE.Mesh(g, L.M(color, { rough: 0.55 }));
  m.castShadow = m.receiveShadow = true;
  return m;
}

export default {
  az: 14, el: 16, pad: 1.1, padSq: 1.08, keyDir: [-0.6, 1.4, 0.8],
  build(root) {
    L.reseed(301);
    const y = L.pedestal(root, 2.6);
    const brass = L.metal(C.laton, 0.3), dark = L.metal(C.latonOsc, 0.4);
    // base escalonada
    L.cyl(0.95, 1.05, 0.18, C.grafito, { p: root, y, seg: 64, m: { rough: 0.5 } });
    L.cyl(0.6, 0.75, 0.16, brass, { p: root, y: y + 0.18, seg: 64 });
    L.cyl(0.08, 0.11, 2.9, brass, { p: root, y: y + 0.34, seg: 32 });
    L.sphere(0.17, brass, { p: root, y: y + 3.3 });
    L.cone(0.09, 0.3, brass, { p: root, y: y + 3.42 });
    // brazo
    const ay = y + 3.15;
    L.cyl(0.05, 0.05, 3.6, brass, { p: root, y: ay, rz: Math.PI / 2, center: true, seg: 24 });
    for (const sx of [-1, 1]) {
      const x = sx * 1.8;
      L.sphere(0.08, dark, { p: root, x, y: ay });
      // cadenas
      const py = ay - 1.75;
      for (const [dx, dz] of [[0.55, 0], [-0.28, 0.48], [-0.28, -0.48]]) {
        const top = new L.THREE.Vector3(x, ay - 0.05, 0), bot = new L.THREE.Vector3(x + dx, py + 0.05, dz);
        const len = top.distanceTo(bot);
        const c = new L.THREE.Mesh(new L.THREE.CylinderGeometry(0.012, 0.012, len, 8), dark);
        c.position.copy(top).add(bot).multiplyScalar(0.5);
        c.quaternion.setFromUnitVectors(new L.THREE.Vector3(0, 1, 0), bot.clone().sub(top).normalize());
        c.castShadow = true; root.add(c);
      }
      // platillo
      L.sphere(0.66, brass, { p: root, x, y: py + 0.12, theta: Math.PI, sy: 0.22, seg: 64 });
      L.torus(0.63, 0.03, dark, { p: root, x, y: py + 0.08, rx: Math.PI / 2 });
    }
    const py = ay - 1.75;
    // documento a la izquierda
    const dg = L.group({ p: root, x: -1.8, y: py + 0.1, ry: 0.35 });
    L.paperStack(dg, { n: 4, w: 0.62, d: 0.82 });
    L.panel(0.58, 0.78, L.docTex({ accent: "#3E5C76" }), { p: dg, y: 0.17, rx: -Math.PI / 2 });
    L.cyl(0.07, 0.07, 0.02, C.carmin, { p: dg, x: 0.18, y: 0.165, z: 0.28 });
    // corazón a la derecha
    const h = heart(C.carmin);
    h.position.set(1.8, py + 0.5, 0); h.rotation.set(0, -0.5, 0); h.scale.setScalar(0.85);
    root.add(h);
    return { footprint: [5.2, 5.2] };
  },
};
