// Escenario común: renderer, luces, encuadre automático ortográfico y sombra de contacto.
import { THREE, tex } from "./lib.js";

export async function renderScene(name, W, H) {
  const mod = await import(`./${name}.js`);
  const def = mod.default;
  const scene = new THREE.Scene();
  const root = new THREE.Group();
  scene.add(root);
  const info = (await def.build(root)) || {};

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1);
  renderer.setSize(W, H, false);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = def.exposure ?? 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;
  document.body.appendChild(renderer.domElement);

  // Caja de la escena
  root.updateMatrixWorld(true);
  const bb = new THREE.Box3().setFromObject(root);
  const ctr = bb.getCenter(new THREE.Vector3());
  const size = bb.getSize(new THREE.Vector3());
  const R = size.length() / 2;

  // Luces
  const hemi = new THREE.HemisphereLight(0xFFFDF8, 0xD9CFC0, def.hemi ?? 1.55);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xFFF6EA, def.key ?? 2.3);
  const kd = new THREE.Vector3(...(def.keyDir ?? [0.55, 1.25, 0.85])).normalize();
  key.position.copy(ctr).addScaledVector(kd, R * 3);
  key.target.position.copy(ctr);
  key.castShadow = true;
  key.shadow.mapSize.set(4096, 4096);
  const sc = key.shadow.camera;
  sc.left = sc.bottom = -R * 1.05; sc.right = sc.top = R * 1.05; sc.near = R * 0.5; sc.far = R * 6;
  key.shadow.radius = def.shadowRadius ?? 7;
  key.shadow.blurSamples = 20;
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.01;
  scene.add(key, key.target);
  const fill = new THREE.DirectionalLight(0xE8EEF5, def.fill ?? 0.55);
  fill.position.copy(ctr).add(new THREE.Vector3(-1, 0.6, 0.9).multiplyScalar(R * 3));
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xFFFFFF, 0.35);
  rim.position.copy(ctr).add(new THREE.Vector3(-0.6, 0.8, -1).multiplyScalar(R * 3));
  scene.add(rim);

  // Sombra de contacto (blob suave bajo la base flotante)
  const blobT = tex(256, 256, (c, w, h) => {
    const g = c.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    g.addColorStop(0, "rgba(20,17,15,0.55)"); g.addColorStop(0.45, "rgba(20,17,15,0.28)"); g.addColorStop(1, "rgba(20,17,15,0)");
    c.fillStyle = g; c.fillRect(0, 0, w, h);
  });
  const fb = info.footprint ?? [size.x, size.z];
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(fb[0] * 1.25, fb[1] * 1.25), new THREE.MeshBasicMaterial({ map: blobT, transparent: true, depthWrite: false, opacity: def.blob ?? 0.55 }));
  blob.rotation.x = -Math.PI / 2;
  blob.position.set(info.blobX ?? ctr.x, (info.groundY ?? bb.min.y - (def.float ?? 0.9)), info.blobZ ?? ctr.z);
  blob.renderOrder = -1;
  scene.add(blob);

  // Cámara ortográfica con encuadre automático
  const az = (def.az ?? 45) * Math.PI / 180, el = (def.el ?? 30) * Math.PI / 180;
  const dir = new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), Math.cos(az) * Math.cos(el));
  const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, R * 20);
  cam.position.copy(ctr).addScaledVector(dir, R * 6);
  cam.lookAt(ctr);
  cam.updateMatrixWorld(true);
  const inv = cam.matrixWorldInverse;
  const pts = [];
  // contenido + blob
  root.traverse(o => { if (o.isMesh) { o.geometry.computeBoundingBox(); const b = o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld); for (let i = 0; i < 8; i++) pts.push(new THREE.Vector3(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z)); } });
  let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
  for (const p of pts) { p.applyMatrix4(inv); minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.y); maxY = Math.max(maxY, p.y); }
  const blobDrop = (bb.min.y - blob.position.y) * Math.cos(el) * 0.6; // deja aire para la sombra
  minY -= blobDrop;
  const aspect = W / H;
  let cw = maxX - minX, ch = maxY - minY;
  const pad = def.pad ?? 1.12;
  const sq = aspect < 1.2;
  const padF = sq ? (def.padSq ?? pad) : pad;
  if (cw / ch > aspect) ch = cw / aspect; else cw = ch * aspect;
  cw *= padF; ch *= padF;
  const cx = (minX + maxX) / 2 + (sq ? (def.offSq?.[0] ?? 0) : (def.off?.[0] ?? 0)) * cw;
  const cy = (minY + maxY) / 2 + (sq ? (def.offSq?.[1] ?? 0) : (def.off?.[1] ?? 0)) * ch;
  cam.left = cx - cw / 2; cam.right = cx + cw / 2; cam.top = cy + ch / 2; cam.bottom = cy - ch / 2;
  const zoom = sq ? (def.zoomSq ?? 1) : (def.zoom ?? 1);
  cam.zoom = zoom;
  cam.updateProjectionMatrix();

  renderer.render(scene, cam);
  return renderer.domElement.toDataURL("image/png");
}
