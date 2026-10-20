// Kusi · la alpaca guía de VÍVELO RH (modelo 3D procedimental).
// Un solo modelo compartido por el runtime (src/brand/kusi3d.js) y por los
// renders estáticos (scripts/3d/render.html). Sin dependencias: recibe THREE.
//
//   const kusi = buildKusi(THREE, { mood: "feliz" });
//   scene.add(kusi);
//   kusi.userData.setMood("curioso");
//   kusi.userData.update(tSeconds, { blink: true, look: { x, y } });

export const KUSI_MOODS = ["neutral", "feliz", "curioso", "sorpresa", "preocupado", "triste", "indignado", "pensando", "animo", "celebra"];

export const KUSI_COLORS = {
  wool: 0xf7eee2, woolShadow: 0xe9dccb, face: 0xfff8ef, nose: 0x6b4a3e, eye: 0x2b2320,
  earInner: 0xf3bfb3, blush: 0xf6a9a0, carmin: 0x8e1b2c, laton: 0xc9a46a, ivory: 0xfbf8f3,
  hoof: 0x8a6e5a, lino: 0xf5f0e8, piedra: 0xcfc5b6, tinta: 0x14110f,
};

// Parámetros de cada estado de ánimo.
const MOODS = {
  neutral:    { eyes: "open",  brows: "none",    mouth: "smile",   ears: [0.16, 0.16], earBack: 0,    tilt: 0,     pitch: 0,     look: [0, 0] },
  feliz:      { eyes: "happy", brows: "none",    mouth: "grin",    ears: [0.22, 0.22], earBack: 0,    tilt: 0.06,  pitch: -0.03, look: [0, 0] },
  curioso:    { eyes: "open",  brows: "raise1",  mouth: "small",   ears: [0.12, 0.85], earBack: 0,    tilt: 0.2,   pitch: 0,     look: [0.25, 0.05] },
  sorpresa:   { eyes: "wide",  brows: "raised",  mouth: "o",       ears: [0.05, 0.05], earBack: -0.1, tilt: 0,     pitch: -0.05, look: [0, 0] },
  preocupado: { eyes: "open",  brows: "worried", mouth: "wavy",    ears: [0.5, 0.5],   earBack: 0.25, tilt: -0.07, pitch: 0.05,  look: [0, -0.05] },
  triste:     { eyes: "sad",   brows: "worried", mouth: "frown",   ears: [1.05, 1.05], earBack: 0.35, tilt: 0.05,  pitch: 0.12,  look: [0, -0.2], tear: true },
  indignado:  { eyes: "open",  brows: "angry",   mouth: "frown",   ears: [0.7, 0.7],   earBack: 0.85, tilt: 0,     pitch: 0.04,  look: [0, 0] },
  pensando:   { eyes: "up",    brows: "raise1",  mouth: "side",    ears: [0.2, 0.42],  earBack: 0,    tilt: -0.16, pitch: -0.06, look: [-0.3, 0.45] },
  animo:      { eyes: "open",  brows: "soft",    mouth: "grin",    ears: [0.12, 0.12], earBack: -0.05, tilt: 0.1,  pitch: -0.02, look: [0, 0.05], sparkle: true },
  celebra:    { eyes: "happy", brows: "none",    mouth: "open",    ears: [0.3, 0.3],   earBack: -0.1, tilt: -0.05, pitch: -0.1,  look: [0, 0], hop: 0.14, confetti: true },
};

function rng(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

let feltTex = null;
function feltTexture(THREE) {
  if (feltTex || typeof document === "undefined") return feltTex;
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d"); const img = g.createImageData(256, 256); const r = rng(7);
  for (let i = 0; i < 256 * 256; i++) { const v = 150 + r() * 105; img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255; }
  g.putImageData(img, 0, 0); g.filter = "blur(1px)"; g.drawImage(c, 0, 0);
  feltTex = new THREE.CanvasTexture(c); feltTex.wrapS = feltTex.wrapT = THREE.RepeatWrapping; feltTex.repeat.set(3, 3);
  return feltTex;
}

function scarfTexture(THREE) {
  if (typeof document === "undefined") return null;
  // u = a lo largo de la chalina, v = alrededor del tubo.
  const c = document.createElement("canvas"); c.width = 512; c.height = 128;
  const g = c.getContext("2d");
  g.fillStyle = "#8E1B2C"; g.fillRect(0, 0, 512, 128);
  g.fillStyle = "#C9A46A";
  for (const y of [14, 50, 74, 110]) g.fillRect(0, y, 512, 4);
  // rombos andinos en la franja central
  g.fillStyle = "#E7CFA0";
  for (let x = 8; x < 512; x += 32) { g.beginPath(); g.moveTo(x, 62); g.lineTo(x + 8, 56); g.lineTo(x + 16, 62); g.lineTo(x + 8, 68); g.closePath(); g.fill(); }
  g.fillStyle = "#6E1422";
  for (let x = 24; x < 512; x += 32) g.fillRect(x, 60, 4, 4);
  // trama tejida
  g.globalAlpha = 0.12; g.fillStyle = "#000";
  for (let y = 0; y < 128; y += 3) g.fillRect(0, y, 512, 1);
  g.globalAlpha = 1;
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
  return t;
}

function makeMaterials(THREE) {
  const felt = feltTexture(THREE);
  const wool = (color, extra = {}) => new THREE.MeshPhysicalMaterial({
    color, roughness: 0.92, sheen: 1, sheenRoughness: 0.45, sheenColor: new THREE.Color(0xfff6ea),
    bumpMap: felt, bumpScale: 0.6, ...extra,
  });
  const scarfTex = scarfTexture(THREE);
  return {
    wool: wool(0xffffff), // color por instancia
    woolSolid: wool(KUSI_COLORS.wool),
    face: wool(KUSI_COLORS.face, { sheen: 0.6, roughness: 0.8, bumpScale: 0.25 }),
    earInner: new THREE.MeshPhysicalMaterial({ color: KUSI_COLORS.earInner, roughness: 0.75, sheen: 0.5, sheenColor: new THREE.Color(0xffe3dc) }),
    eye: new THREE.MeshPhysicalMaterial({ color: KUSI_COLORS.eye, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.04, metalness: 0 }),
    iris: new THREE.MeshPhysicalMaterial({ color: 0x5b3f35, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.05 }),
    shine: new THREE.MeshBasicMaterial({ color: 0xffffff }),
    line: new THREE.MeshStandardMaterial({ color: 0x3e2c27, roughness: 0.6 }),
    nose: new THREE.MeshPhysicalMaterial({ color: KUSI_COLORS.nose, roughness: 0.45, clearcoat: 0.6, clearcoatRoughness: 0.3 }),
    mouthIn: new THREE.MeshStandardMaterial({ color: 0x5a2a2a, roughness: 0.7 }),
    tongue: new THREE.MeshStandardMaterial({ color: 0xe98a86, roughness: 0.6 }),
    blush: new THREE.MeshBasicMaterial({ color: KUSI_COLORS.blush, transparent: true, opacity: 0.55, depthWrite: false }),
    hoof: new THREE.MeshPhysicalMaterial({ color: KUSI_COLORS.hoof, roughness: 0.5, clearcoat: 0.4, clearcoatRoughness: 0.4 }),
    scarf: new THREE.MeshPhysicalMaterial({ color: 0xffffff, map: scarfTex, roughness: 0.85, sheen: 0.8, sheenRoughness: 0.5, sheenColor: new THREE.Color(0xd9a0a0), bumpMap: felt, bumpScale: 0.8 }),
    carmin: new THREE.MeshPhysicalMaterial({ color: KUSI_COLORS.carmin, roughness: 0.75, sheen: 0.7, sheenColor: new THREE.Color(0xd9a0a0) }),
    laton: new THREE.MeshPhysicalMaterial({ color: KUSI_COLORS.laton, roughness: 0.55, metalness: 0.25, sheen: 0.4, sheenColor: new THREE.Color(0xfff0c8) }),
    brass: new THREE.MeshStandardMaterial({ color: KUSI_COLORS.laton, roughness: 0.3, metalness: 0.85 }),
    ivory: new THREE.MeshPhysicalMaterial({ color: KUSI_COLORS.ivory, roughness: 0.4, clearcoat: 0.5, clearcoatRoughness: 0.2 }),
    piedra: new THREE.MeshStandardMaterial({ color: KUSI_COLORS.piedra, roughness: 0.7 }),
    tear: new THREE.MeshPhysicalMaterial({ color: 0xbfe3f2, roughness: 0.05, transmission: 0, clearcoat: 1, transparent: true, opacity: 0.85 }),
  };
}

// ---------- geometría compartida ----------
function geoms(THREE) {
  return {
    sphere: new THREE.SphereGeometry(1, 40, 28),
    sphereLo: new THREE.SphereGeometry(1, 22, 16),
  };
}

// Distribuye "motas" de lana sobre un elipsoide (Fibonacci + jitter).
function woolCluster(THREE, G, M, { center, radii, count, size, seed, filter, push = 0.92, colors }) {
  const r = rng(seed);
  const pts = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const th = golden * i + r() * 0.4;
    const d = new THREE.Vector3(Math.cos(th) * rad, y, Math.sin(th) * rad);
    if (filter && !filter(d)) continue;
    pts.push(d);
  }
  const mesh = new THREE.InstancedMesh(G.sphereLo, M.wool, pts.length);
  const m = new THREE.Matrix4(); const q = new THREE.Quaternion(); const s = new THREE.Vector3(); const p = new THREE.Vector3();
  const pal = (colors || [0xf9f2e8, 0xf7eee2, 0xf3e8da, 0xfbf6ee]).map((c) => new THREE.Color(c));
  pts.forEach((d, i) => {
    const sz = size * (0.82 + r() * 0.36);
    p.set(center[0] + d.x * radii[0] * push, center[1] + d.y * radii[1] * push, center[2] + d.z * radii[2] * push);
    q.setFromEuler(new THREE.Euler(r() * 3, r() * 3, r() * 3));
    s.set(sz, sz * (0.9 + r() * 0.2), sz);
    m.compose(p, q, s); mesh.setMatrixAt(i, m);
    mesh.setColorAt(i, pal[Math.floor(r() * pal.length)]);
  });
  mesh.castShadow = true; mesh.receiveShadow = true;
  return mesh;
}

function ellipsoid(THREE, G, mat, pos, sc, rot) {
  const o = new THREE.Mesh(G.sphere, mat);
  o.position.set(...pos); o.scale.set(...sc); if (rot) o.rotation.set(...rot);
  o.castShadow = true; o.receiveShadow = true;
  return o;
}

function tube(THREE, mat, pts, radius, closed = false) {
  const curve = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(...p)), closed);
  const g = new THREE.TubeGeometry(curve, Math.max(24, pts.length * 12), radius, 10, closed);
  const o = new THREE.Mesh(g, mat);
  // tapas redondeadas
  if (!closed) {
    for (const p of [pts[0], pts[pts.length - 1]]) { const c = new THREE.Mesh(new THREE.SphereGeometry(radius, 10, 8), mat); c.position.set(...p); o.add(c); }
  }
  o.castShadow = true;
  return o;
}

// Oreja tipo "banana": elipsoide alargado y curvado.
function earGeometry(THREE, w, h, d, bend) {
  const g = new THREE.SphereGeometry(1, 32, 24);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const t = (y + 1) / 2; // 0 base, 1 punta
    const taper = 1 - 0.35 * t * t; // la punta un poco más fina
    x *= w * taper; z *= d * (1 - 0.2 * t); y *= h;
    z += bend * t * t; // curva hacia adelante
    x += -0.25 * bend * t * t;
    pos.setXYZ(i, x, y + h, z);
  }
  g.computeVertexNormals();
  return g;
}

// ---------- cabeza ----------
const HEAD = { R: 0.5, sx: 1.08, sy: 0.96, sz: 0.98 };
const MUZ = { c: [0, -0.18, 0.36], r: [0.25, 0.17, 0.16] };

function headSurface(THREE, x, y, out = 0) {
  const R = HEAD.R; const a = HEAD.sx * R, b = HEAD.sy * R, c = HEAD.sz * R;
  const k = 1 - (x / a) ** 2 - (y / b) ** 2;
  const z = c * Math.sqrt(Math.max(k, 0.0001));
  const n = new THREE.Vector3(x / (a * a), y / (b * b), z / (c * c)).normalize();
  return { p: new THREE.Vector3(x, y, z).addScaledVector(n, out), n };
}
function muzzleSurface(THREE, x, y, out = 0) {
  const [cx, cy, cz] = MUZ.c; const [a, b, c] = MUZ.r;
  const k = 1 - ((x - cx) / a) ** 2 - ((y - cy) / b) ** 2;
  const z = cz + c * Math.sqrt(Math.max(k, 0.0001));
  const n = new THREE.Vector3((x - cx) / (a * a), (y - cy) / (b * b), (z - cz) / (c * c)).normalize();
  return { p: new THREE.Vector3(x, y, z).addScaledVector(n, out), n };
}
function placeOn(obj, s) { obj.position.copy(s.p); obj.lookAt(s.p.clone().add(s.n)); return obj; }

function buildFace(THREE, G, M, mood) {
  const P = MOODS[mood] || MOODS.neutral;
  const face = new THREE.Group(); face.name = "face";
  const eyes = [];
  const EX = 0.215, EY = 0.0;
  const look = P.look;
  for (const side of [-1, 1]) {
    const x = side * EX;
    const eyeG = new THREE.Group();
    if (P.eyes === "happy") {
      // ojos cerrados en arco ^ ^
      const s = headSurface(THREE, x, EY, 0.006);
      const pts = [];
      for (let i = 0; i <= 12; i++) { const a = Math.PI * (i / 12); const ex = x + Math.cos(a) * 0.075; const ey = EY - 0.02 + Math.sin(a) * 0.055; const q = headSurface(THREE, ex, ey, 0.008).p; pts.push([q.x, q.y, q.z]); }
      eyeG.add(tube(THREE, M.line, pts, 0.017));
      void s;
    } else {
      const big = P.eyes === "wide" ? 1.12 : 1;
      const s = headSurface(THREE, x, EY, -0.012);
      const eye = new THREE.Group(); placeOn(eye, s);
      const ball = new THREE.Mesh(G.sphere, M.eye); ball.scale.set(0.085 * big, 0.098 * big, 0.045); ball.castShadow = true;
      eye.add(ball);
      // brillo inferior cálido (profundidad del iris)
      const iris = new THREE.Mesh(G.sphereLo, M.iris); iris.scale.set(0.05 * big, 0.04 * big, 0.02); iris.position.set(look[0] * 0.02, -0.042 * big + look[1] * 0.02, 0.03);
      eye.add(iris);
      // dos brillos blancos
      const lx = look[0] * 0.025, ly = look[1] * 0.03;
      const h1 = new THREE.Mesh(G.sphereLo, M.shine); h1.scale.set(0.026 * big, 0.03 * big, 0.01); h1.position.set(0.03 * big + lx, 0.038 * big + ly, 0.042);
      const h2 = new THREE.Mesh(G.sphereLo, M.shine); h2.scale.set(0.012 * big, 0.012 * big, 0.006); h2.position.set(-0.03 * big + lx, -0.035 * big + ly, 0.04);
      eye.add(h1, h2);
      // pestañas en el borde exterior
      for (let k = 0; k < 2; k++) {
        const lash = new THREE.Mesh(new THREE.CapsuleGeometry(0.0085, 0.03, 4, 8), M.line);
        const a = 0.55 + k * 0.38;
        lash.position.set(side * Math.cos(a) * 0.09, Math.sin(a) * 0.1, 0.012);
        lash.rotation.z = side * (a - Math.PI / 2) * 1.0 + side * 0.25;
        eye.add(lash);
      }
      if (P.eyes === "sad") {
        // párpado superior caído (lana) en diagonal
        const lid = new THREE.Mesh(G.sphereLo, M.woolSolid); lid.scale.set(0.105, 0.05, 0.055); lid.position.set(0, 0.085, 0.012); lid.rotation.z = -side * 0.35;
        eye.add(lid);
      }
      eye.userData.baseScaleY = 1;
      eyeG.add(eye);
      eyes.push(eye);
    }
    face.add(eyeG);

    // cejas
    if (P.brows !== "none" && !(P.brows === "raise1" && side === -1)) {
      let y = 0.155, rot = 0, len = 0.07;
      if (P.brows === "worried") { rot = side * -0.4; y = 0.16; }
      if (P.brows === "angry") { rot = side * 0.5; y = 0.135; len = 0.08; }
      if (P.brows === "raised") { y = 0.19; rot = side * -0.12; }
      if (P.brows === "raise1") { y = 0.185; rot = side * -0.18; }
      if (P.brows === "soft") { y = 0.17; rot = side * -0.08; len = 0.06; }
      const s = headSurface(THREE, x + side * 0.005, y, 0.004);
      const bg = new THREE.Group(); placeOn(bg, s);
      const brow = new THREE.Mesh(new THREE.CapsuleGeometry(0.014, len, 4, 10), M.line);
      brow.rotation.z = Math.PI / 2 + rot; brow.scale.z = 0.6;
      bg.add(brow); face.add(bg);
    }

    // mejillas
    const cs = headSurface(THREE, side * 0.33, -0.12, -0.004);
    const blush = new THREE.Mesh(G.sphereLo, M.blush); placeOn(blush, cs); blush.scale.set(0.075, 0.05, 0.015);
    face.add(blush);
  }

  // hocico
  const muzzle = ellipsoid(THREE, G, M.face, MUZ.c, MUZ.r);
  face.add(muzzle);

  // nariz: dos fosas suaves + línea en "Y"
  const NY = -0.08;
  for (const side of [-1, 1]) {
    const s = muzzleSurface(THREE, side * 0.042, NY, -0.004);
    const n = new THREE.Mesh(G.sphereLo, M.nose); placeOn(n, s); n.scale.set(0.03, 0.019, 0.014); n.rotateZ(side * -0.5);
    face.add(n);
  }
  const q = (x, y, o = 0.004) => { const p = muzzleSurface(THREE, x, y, o).p; return [p.x, p.y, p.z]; };
  face.add(tube(THREE, M.nose, [q(0, NY - 0.012), q(0, NY - 0.04), q(0, NY - 0.062)], 0.0075));

  // boca
  const MY = NY - 0.065;
  const mouthT = 0.0085;
  switch (P.mouth) {
    case "smile":
      face.add(tube(THREE, M.nose, [q(-0.075, MY + 0.012), q(-0.04, MY - 0.012), q(0, MY + 0.002), q(0.04, MY - 0.012), q(0.075, MY + 0.012)], mouthT)); break;
    case "small":
      face.add(tube(THREE, M.nose, [q(-0.05, MY + 0.006), q(-0.025, MY - 0.01), q(0, MY + 0.002), q(0.025, MY - 0.01), q(0.05, MY + 0.006)], mouthT)); break;
    case "grin": {
      // sonrisa abierta en forma de D con lengüita
      const pts = []; for (let i = 0; i <= 16; i++) { const a = Math.PI * (i / 16); pts.push(new THREE.Vector2(Math.cos(a) * 0.065, -Math.sin(a) * 0.05)); }
      face.add(openMouth(THREE, M, pts, MY + 0.002, q)); break;
    }
    case "open": {
      const pts = []; for (let i = 0; i <= 20; i++) { const a = Math.PI * (i / 20); pts.push(new THREE.Vector2(Math.cos(a) * 0.075, -Math.sin(a) * 0.065)); }
      face.add(openMouth(THREE, M, pts, MY + 0.004, q)); break;
    }
    case "o": {
      const pts = []; for (let i = 0; i <= 24; i++) { const a = Math.PI * 2 * (i / 24); pts.push(new THREE.Vector2(Math.cos(a) * 0.028, Math.sin(a) * 0.036 - 0.03)); }
      face.add(openMouth(THREE, M, pts, MY, q, true)); break;
    }
    case "wavy":
      face.add(tube(THREE, M.nose, [q(-0.06, MY - 0.012), q(-0.03, MY - 0.002), q(0, MY - 0.012), q(0.03, MY - 0.002), q(0.06, MY - 0.012)], mouthT)); break;
    case "frown":
      face.add(tube(THREE, M.nose, [q(-0.06, MY - 0.024), q(-0.03, MY - 0.008), q(0, MY - 0.004), q(0.03, MY - 0.008), q(0.06, MY - 0.024)], mouthT)); break;
    case "side":
      face.add(tube(THREE, M.nose, [q(-0.035, MY - 0.004), q(0, MY - 0.006), q(0.04, MY + 0.002), q(0.065, MY + 0.016)], mouthT)); break;
  }

  if (P.tear) {
    const s = headSurface(THREE, 0.235, -0.11, 0.012);
    const t = new THREE.Mesh(G.sphereLo, M.tear); placeOn(t, s); t.scale.set(0.022, 0.032, 0.016); face.add(t);
  }
  if (P.sparkle) {
    // destellito de latón junto a la cabeza
    face.add(sparkle(THREE, M, [0.62, 0.3, 0.2], 0.07), sparkle(THREE, M, [0.72, 0.12, 0.1], 0.04));
  }
  face.userData.eyes = eyes;
  return face;
}

function openMouth(THREE, M, pts2, y0, q, closed = false) {
  const g = new THREE.Group();
  // forma de boca proyectada sobre el hocico (disco plano)
  const shape = new THREE.Shape(pts2);
  const geo = new THREE.ShapeGeometry(shape, 16);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) { const p = q(pos.getX(i), y0 + pos.getY(i), 0.002); pos.setXYZ(i, p[0], p[1], p[2]); }
  geo.computeVertexNormals();
  const inner = new THREE.Mesh(geo, M.mouthIn); g.add(inner);
  // lengua
  let minY = 0; pts2.forEach((p) => { if (p.y < minY) minY = p.y; });
  if (!closed) {
    const tp = q(0, y0 + minY * 0.62, 0.003);
    const tongue = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), M.tongue);
    tongue.position.set(...tp); tongue.scale.set(Math.abs(pts2[0].x) * 0.55, Math.abs(minY) * 0.36, 0.008);
    g.add(tongue);
  }
  // contorno
  const outline = closed ? pts2.slice(0, -1) : pts2;
  g.add(tube(THREE, M.nose, outline.map((p) => q(p.x, y0 + p.y, 0.004)), 0.0075, closed));
  if (!closed) g.add(tube(THREE, M.nose, [q(pts2[0].x, y0, 0.004), q(0, y0 + 0.004, 0.004), q(pts2[pts2.length - 1].x, y0, 0.004)], 0.0075));
  return g;
}

function sparkle(THREE, M, pos, s) {
  const shape = new THREE.Shape();
  const n = 4; for (let i = 0; i < n * 2; i++) { const r = i % 2 ? 0.28 : 1; const a = (i / (n * 2)) * Math.PI * 2 + Math.PI / 2; const x = Math.cos(a) * r, y = Math.sin(a) * r; i ? shape.lineTo(x, y) : shape.moveTo(x, y); }
  const g = new THREE.ExtrudeGeometry(shape, { depth: 0.2, bevelEnabled: true, bevelSize: 0.08, bevelThickness: 0.08, bevelSegments: 2 });
  g.center();
  const m = new THREE.Mesh(g, M.brass); m.position.set(...pos); m.scale.setScalar(s);
  return m;
}

// ---------- fotocheck ----------
function roundedRect(THREE, w, h, r) {
  const s = new THREE.Shape(); const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h); s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}
function badge(THREE, M) {
  const g = new THREE.Group();
  const W = 0.2, H = 0.25;
  const card = new THREE.Mesh(new THREE.ExtrudeGeometry(roundedRect(THREE, W, H, 0.03), { depth: 0.012, bevelEnabled: true, bevelSize: 0.006, bevelThickness: 0.006, bevelSegments: 3, curveSegments: 8 }), M.ivory);
  card.castShadow = true; card.receiveShadow = true; g.add(card);
  // banda carmín superior
  const bandShape = new THREE.Shape(); const r = 0.03;
  bandShape.moveTo(-W / 2, H / 2 - 0.065); bandShape.lineTo(W / 2, H / 2 - 0.065); bandShape.lineTo(W / 2, H / 2 - r); bandShape.quadraticCurveTo(W / 2, H / 2, W / 2 - r, H / 2);
  bandShape.lineTo(-W / 2 + r, H / 2); bandShape.quadraticCurveTo(-W / 2, H / 2, -W / 2, H / 2 - r); bandShape.closePath();
  const band = new THREE.Mesh(new THREE.ShapeGeometry(bandShape, 8), M.carmin); band.position.z = 0.0185; g.add(band);
  // ranura del clip
  const slot = new THREE.Mesh(new THREE.ExtrudeGeometry(roundedRect(THREE, 0.06, 0.014, 0.007), { depth: 0.002, bevelEnabled: false }), M.ivory); slot.position.set(0, H / 2 - 0.03, 0.0186); g.add(slot);
  // foto (silueta) y líneas de texto
  const photo = new THREE.Mesh(new THREE.ShapeGeometry(roundedRect(THREE, 0.06, 0.07, 0.012), 6), M.piedra); photo.position.set(-0.045, -0.025, 0.0186); g.add(photo);
  for (const [y, w] of [[0.0, 0.07], [-0.03, 0.055], [-0.06, 0.065]]) {
    const l = new THREE.Mesh(new THREE.ShapeGeometry(roundedRect(THREE, w, 0.012, 0.006), 4), y === 0 ? M.carmin : M.piedra);
    l.position.set(0.012 + w / 2, y, 0.0186); g.add(l);
  }
  // clip de latón
  const clip = new THREE.Mesh(new THREE.CapsuleGeometry(0.012, 0.03, 4, 10), M.brass); clip.rotation.z = Math.PI / 2; clip.position.set(0, H / 2 + 0.01, 0.01); g.add(clip);
  return g;
}

// ---------- confeti ----------
function confetti(THREE, M) {
  const g = new THREE.Group(); g.name = "confetti";
  const r = rng(42);
  const mats = [M.carmin, M.brass, M.ivory, M.laton];
  const box = new THREE.BoxGeometry(1, 1, 1);
  for (let i = 0; i < 46; i++) {
    const a = r() * Math.PI * 2; const rad = 0.75 + r() * 0.55;
    const y = 0.5 + r() * 1.9;
    if (Math.abs(Math.cos(a)) < 0.45 && y > 0.4 && y < 2.1 && Math.sin(a) > 0) continue; // no tapar la cara/pecho
    const m = new THREE.Mesh(r() < 0.75 ? box : new THREE.SphereGeometry(1, 10, 8), mats[i % mats.length]);
    m.position.set(Math.cos(a) * rad, y, Math.sin(a) * rad * 0.6 - 0.1);
    if (m.geometry === box) m.scale.set(0.05 + r() * 0.03, 0.012, 0.09 + r() * 0.04); else m.scale.setScalar(0.022 + r() * 0.012);
    m.rotation.set(r() * 6, r() * 6, r() * 6);
    m.castShadow = true;
    m.userData.spin = (r() - 0.5) * 4; m.userData.fall = 0.15 + r() * 0.2; m.userData.y0 = y;
    g.add(m);
  }
  return g;
}

// ---------- ensamblaje ----------
export function buildKusi(THREE, { mood = "feliz" } = {}) {
  const G = geoms(THREE);
  const M = makeMaterials(THREE);
  const root = new THREE.Group(); root.name = "Kusi";
  const rig = new THREE.Group(); root.add(rig); // se mueve con los saltos

  // patas
  const legs = new THREE.Group(); rig.add(legs);
  for (const [x, z] of [[-0.19, 0.17], [0.19, 0.17], [-0.2, -0.24], [0.2, -0.24]]) {
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.088, 0.2, 8, 20), M.woolSolid);
    leg.position.set(x, 0.2, z); leg.castShadow = true; leg.receiveShadow = true; legs.add(leg);
    const hoof = ellipsoid(THREE, G, M.hoof, [x, 0.045, z + 0.012], [0.092, 0.05, 0.1]); legs.add(hoof);
    // pequeña hendidura de la pezuña
    const split = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.05, 0.03), M.line); split.position.set(x, 0.05, z + 0.105); legs.add(split);
    legs.add(woolCluster(THREE, G, M, { center: [x, 0.3, z], radii: [0.1, 0.07, 0.1], count: 14, size: 0.06, seed: 11 + Math.round(x * 100 + z * 10), push: 1 }));
  }

  // cuerpo
  const body = new THREE.Group(); body.name = "body"; rig.add(body);
  const BC = [0, 0.6, -0.04], BR = [0.4, 0.34, 0.47];
  body.add(ellipsoid(THREE, G, M.woolSolid, BC, BR.map((v) => v * 0.97)));
  body.add(woolCluster(THREE, G, M, { center: BC, radii: BR, count: 120, size: 0.12, seed: 3 }));
  // pecho esponjoso
  body.add(woolCluster(THREE, G, M, { center: [0, 0.68, 0.24], radii: [0.29, 0.25, 0.22], count: 46, size: 0.11, seed: 5, filter: (d) => d.z > -0.2, colors: [0xfbf6ee, 0xf9f2e8, 0xf7eee2] }));
  // colita
  body.add(woolCluster(THREE, G, M, { center: [0, 0.72, -0.52], radii: [0.08, 0.09, 0.07], count: 12, size: 0.07, seed: 9, push: 1 }));

  // cuello
  const neck = ellipsoid(THREE, G, M.woolSolid, [0, 0.92, 0.04], [0.2, 0.18, 0.2]); body.add(neck);

  // chalina
  const scarf = new THREE.Group(); scarf.name = "chalina"; body.add(scarf);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.255, 0.075, 24, 72), M.scarf);
  ring.rotation.x = Math.PI / 2 - 0.22; ring.position.set(0, 0.92, 0.05); ring.scale.set(1, 1.02, 1.0);
  ring.material.map && (ring.material.map.repeat.set(3, 1));
  ring.castShadow = true; ring.receiveShadow = true; scarf.add(ring);
  // nudo + caída lateral
  const knot = ellipsoid(THREE, G, M.carmin, [0.17, 0.86, 0.27], [0.07, 0.065, 0.055]); scarf.add(knot);
  const tailShape = new THREE.CatmullRomCurve3([new THREE.Vector3(0.17, 0.84, 0.29), new THREE.Vector3(0.2, 0.72, 0.36), new THREE.Vector3(0.23, 0.6, 0.38)]);
  const tailGeo = new THREE.TubeGeometry(tailShape, 24, 0.055, 16, false);
  const tailMesh = new THREE.Mesh(tailGeo, M.scarf); tailMesh.scale.set(1, 1, 1); tailMesh.castShadow = true; scarf.add(tailMesh);
  // aplanar la caída
  tailMesh.geometry.translate(0, 0, 0);
  const tailEnd = ellipsoid(THREE, G, M.carmin, [0.23, 0.6, 0.38], [0.056, 0.02, 0.056]); scarf.add(tailEnd);
  // dos borlas
  for (const dx of [-0.025, 0.028]) {
    const tas = new THREE.Group(); tas.position.set(0.23 + dx, 0.58, 0.385);
    const knotB = new THREE.Mesh(G.sphereLo, M.laton); knotB.scale.setScalar(0.018); tas.add(knotB);
    const fr = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.07, 14), M.carmin); fr.position.y = -0.045; fr.rotation.x = Math.PI; tas.add(fr);
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.012, 0.004, 6, 16), M.laton); band.rotation.x = Math.PI / 2; band.position.y = -0.02; tas.add(band);
    tas.rotation.z = dx * 3; scarf.add(tas);
  }

  // cordón (lanyard) + fotocheck
  const BADGE_POS = [-0.02, 0.6, 0.47];
  for (const side of [-1, 1]) {
    scarf.add(tube(THREE, M.carmin, [[side * 0.11, 0.84, 0.3], [side * 0.075, 0.76, 0.42], [side * 0.012 - 0.02, 0.71, 0.462]], 0.011));
  }
  const bd = badge(THREE, M); bd.position.set(...BADGE_POS); bd.rotation.set(-0.18, 0, 0.06); bd.scale.setScalar(0.95); body.add(bd);

  // cabeza (pivote en el cuello)
  const headPivot = new THREE.Group(); headPivot.name = "headPivot"; headPivot.position.set(0, 0.95, 0.03); rig.add(headPivot);
  const head = new THREE.Group(); head.name = "head"; head.position.set(0, 0.44, 0.04); headPivot.add(head);
  head.add(ellipsoid(THREE, G, M.woolSolid, [0, 0, 0], [HEAD.R * HEAD.sx, HEAD.R * HEAD.sy, HEAD.R * HEAD.sz]));
  // melena: lana alrededor de la cara (atrás, lados y arriba)
  head.add(woolCluster(THREE, G, M, { center: [0, 0.02, -0.02], radii: [HEAD.R * HEAD.sx, HEAD.R * HEAD.sy, HEAD.R * HEAD.sz], count: 150, size: 0.1, seed: 21, push: 0.95, filter: (d) => d.z < 0.42 - Math.max(0, d.y) * 0.25 && d.y > -0.75 }));
  // copete: 7 motas grandes
  const topk = new THREE.Group(); topk.name = "copete"; head.add(topk);
  const tr = rng(77);
  const tops = [[0, 0.5, 0.1, 0.15], [-0.14, 0.45, 0.12, 0.12], [0.14, 0.46, 0.11, 0.125], [-0.07, 0.56, 0.0, 0.13], [0.08, 0.57, -0.01, 0.13], [0, 0.6, -0.12, 0.12], [-0.03, 0.42, 0.24, 0.11]];
  for (const [x, y, z, s] of tops) {
    const p = ellipsoid(THREE, G, M.woolSolid, [x, y, z], [s, s * 0.92, s]); topk.add(p);
    // rizo: mini motas encima de cada mota del copete
    for (let k = 0; k < 4; k++) { const a = tr() * Math.PI * 2; const mini = ellipsoid(THREE, G, M.woolSolid, [x + Math.cos(a) * s * 0.6, y + s * 0.45 + tr() * 0.03, z + Math.sin(a) * s * 0.6], [s * 0.45, s * 0.42, s * 0.45]); topk.add(mini); }
  }

  // orejas
  const ears = [];
  for (const side of [-1, 1]) {
    const pivot = new THREE.Group(); pivot.position.set(side * 0.27, 0.34, -0.06); head.add(pivot);
    const geo = earGeometry(THREE, 0.085, 0.2, 0.06, 0.07);
    const outer = new THREE.Mesh(geo, M.woolSolid); outer.castShadow = true; outer.receiveShadow = true; outer.scale.x = side;
    const inner = new THREE.Mesh(earGeometry(THREE, 0.05, 0.16, 0.03, 0.07), M.earInner); inner.position.set(0, 0.04, 0.04); inner.scale.x = side;
    pivot.add(outer, inner);
    pivot.userData.side = side;
    ears.push(pivot);
  }

  const shadowBlob = contactShadow(THREE); root.add(shadowBlob);

  // estado
  const state = { mood: null, face: null, confetti: null, P: MOODS.feliz, earsBase: [0, 0] };
  function setMood(m) {
    if (!MOODS[m]) m = "neutral";
    if (state.mood === m) return;
    state.mood = m; state.P = MOODS[m];
    if (state.face) { head.remove(state.face); disposeTree(state.face); }
    state.face = buildFace(THREE, G, M, m); head.add(state.face);
    if (state.confetti) { root.remove(state.confetti); disposeTree(state.confetti); state.confetti = null; }
    if (state.P.confetti) { state.confetti = confetti(THREE, M); root.add(state.confetti); }
    pose(0, {});
  }

  function pose(t, o) {
    const P = state.P;
    const anim = o.animate !== false && t !== 0;
    const breathe = anim ? Math.sin(t * 2.1) : 0;
    body.scale.set(1 + breathe * 0.006, 1 + breathe * 0.012, 1 + breathe * 0.006);
    const hop = (o.hop ?? (P.hop || 0));
    rig.position.y = hop;
    shadowBlob.scale.setScalar(1 - hop * 1.6);
    shadowBlob.material.opacity = 0.55 * (1 - hop * 2.2);
    legs.position.y = 0; legs.scale.y = 1;
    const look = o.look || { x: 0, y: 0 };
    headPivot.rotation.z = -P.tilt + (o.tilt || 0) + (anim ? Math.sin(t * 0.7) * 0.025 : 0) - look.x * 0.06;
    headPivot.rotation.x = P.pitch - look.y * 0.18 + (anim ? breathe * 0.01 : 0);
    headPivot.rotation.y = look.x * 0.35;
    ears.forEach((e, i) => {
      const side = e.userData.side;
      const wig = anim ? (Math.sin(t * 3.1 + i * 1.7) * 0.03 + (o.earWiggle || 0) * Math.sin(t * 18 + i) ) : 0;
      e.rotation.z = -side * (P.ears[i === 0 ? 0 : 1] + wig);
      e.rotation.x = -P.earBack;
    });
    const eyesArr = state.face ? state.face.userData.eyes : [];
    const bl = o.blink ?? 0;
    eyesArr.forEach((e) => { e.scale.y = Math.max(0.08, 1 - bl); });
    if (state.confetti) state.confetti.children.forEach((c) => {
      if (!anim) return; c.rotation.x += 0; c.rotation.y = c.userData.spin * t; c.position.y = c.userData.y0 - ((t * c.userData.fall) % 0.6);
    });
  }

  setMood(mood);
  root.userData = {
    setMood, mood: () => state.mood, head, headPivot, ears, rig,
    update: (t, o = {}) => pose(t, o),
    dispose: () => disposeTree(root),
  };
  return root;
}

function contactShadow(THREE) {
  let tex = null;
  if (typeof document !== "undefined") {
    const c = document.createElement("canvas"); c.width = c.height = 256; const g = c.getContext("2d");
    const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
    gr.addColorStop(0, "rgba(40,28,20,0.85)"); gr.addColorStop(0.35, "rgba(40,28,20,0.45)"); gr.addColorStop(0.7, "rgba(40,28,20,0.12)"); gr.addColorStop(1, "rgba(40,28,20,0)");
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    tex = new THREE.CanvasTexture(c);
  }
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1.25, 1.35), new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.55, depthWrite: false, color: 0xffffff }));
  m.rotation.x = -Math.PI / 2; m.position.set(0, 0.002, -0.04); m.renderOrder = -1; m.name = "contactShadow";
  return m;
}

export function disposeTree(o) {
  o.traverse((n) => { if (n.geometry) n.geometry.dispose(); });
}

// Iluminación de estudio compartida (key + fill + rim + hemisférica + entorno suave).
export function addKusiStudio(THREE, scene, renderer, { shadows = true, shadowMapSize = 2048 } = {}) {
  const lights = new THREE.Group(); lights.name = "studio";
  const hemi = new THREE.HemisphereLight(0xfff8ef, 0xcfc5b6, 0.9); lights.add(hemi);
  const key = new THREE.DirectionalLight(0xfff1e0, 2.3); key.position.set(2.2, 4.2, 3.4); key.target.position.set(0, 0.9, 0);
  if (shadows) {
    key.castShadow = true; key.shadow.mapSize.set(shadowMapSize, shadowMapSize); key.shadow.radius = 6; key.shadow.blurSamples = 16; key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02;
    const c = key.shadow.camera; c.left = -1.6; c.right = 1.6; c.top = 2.6; c.bottom = -0.6; c.near = 0.5; c.far = 12;
  }
  lights.add(key, key.target);
  const fill = new THREE.DirectionalLight(0xf0f0ff, 0.75); fill.position.set(-3, 1.8, 2.5); lights.add(fill);
  const rim = new THREE.DirectionalLight(0xffffff, 1.6); rim.position.set(-1.5, 2.6, -3.5); lights.add(rim);
  const rim2 = new THREE.DirectionalLight(0xffe7d0, 0.9); rim2.position.set(2.5, 1.5, -3); lights.add(rim2);
  scene.add(lights);
  // entorno suave para brillos (ojos, latón, clearcoat)
  if (renderer) {
    const env = new THREE.Scene();
    const box = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshBasicMaterial({ color: 0x3a3430, side: THREE.BackSide })); env.add(box);
    const panel = (c, w, h, pos, rot) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide })); m.position.set(...pos); m.lookAt(0, 0, 0); if (rot) m.rotation.z = rot; env.add(m); };
    panel(new THREE.Color(6, 5.7, 5.2), 3, 2.2, [2.5, 3.5, 3.5]);
    panel(new THREE.Color(2.2, 2.2, 2.6), 3, 3, [-4, 1, 2]);
    panel(new THREE.Color(3, 3, 3), 4, 1, [0, 2, -4.5]);
    panel(new THREE.Color(1.2, 1.1, 1.0), 8, 8, [0, -4.8, 0]);
    const pm = new THREE.PMREMGenerator(renderer);
    const rt = pm.fromScene(env, 0.03);
    scene.environment = rt.texture;
    scene.environmentIntensity = 0.45;
    pm.dispose();
  }
  if (shadows) {
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.ShadowMaterial({ opacity: 0.16, color: 0x3a2a20 }));
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; ground.name = "ground"; scene.add(ground);
  }
  return lights;
}
