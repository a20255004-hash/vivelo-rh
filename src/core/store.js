/* Estado persistente de la persona.
   - Hoy se guarda en este navegador (localStorage) mediante un "adaptador".
   - Para sincronizar entre dispositivos en el futuro basta con implementar otro adaptador
     con la misma interfaz { name, load(): object|null, save(state): void } (por ejemplo,
     uno que llame a una API con cuentas de usuario) y registrarlo con useAdapter().
   - El esquema está versionado; migrate() convierte respaldos antiguos (Legajo Vivo v1). */
import { emit } from "./bus.js";

export const KEY = "vivelo-rh:v2";
export const LEGACY_KEY = "legajo-vivo:v1";
export const VERSION = 2;

export const blank = () => ({
  v: VERSION, at: 0, createdAt: 0,
  profile: { name: "", createdAt: 0, guide: "activo", tourDone: false, voiceRate: 1 },
  journey: { started: false, step: 0, done: [], family: null, role: null, at: 0 },
  declared: {}, runs: {}, active: {}, refl: [], tools: {}, concepts: {}, dil: {}, challenges: {},
  saved: [], seen: {},
  prefs: { lens: "simple", ctx: "med" },
  debrief: null
});

export const localAdapter = {
  name: "local",
  load(){ try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null; } catch (e) { return null; } },
  loadLegacy(){ try { const r = localStorage.getItem(LEGACY_KEY); return r ? JSON.parse(r) : null; } catch (e) { return null; } },
  save(state){ try { localStorage.setItem(KEY, JSON.stringify(state)); return true; } catch (e) { return false; } },
  available(){ try { const k = "__vv"; localStorage.setItem(k, "1"); localStorage.removeItem(k); return true; } catch (e) { return false; } }
};

/* Memoria temporal si el navegador bloquea el almacenamiento (modo privado estricto). */
const memoryAdapter = { name: "memory", _s: null, load(){ return this._s; }, loadLegacy(){ return null; }, save(s){ this._s = JSON.parse(JSON.stringify(s)); return true; }, available(){ return true; } };

let adapter = localAdapter;
export const S = { state: blank(), persistent: true, migratedFrom: null };

function deepMerge(base, obj){
  const out = Array.isArray(base) ? base.slice() : Object.assign({}, base);
  Object.entries(obj || {}).forEach(([k, v]) => {
    if (v && typeof v === "object" && !Array.isArray(v) && base[k] && typeof base[k] === "object" && !Array.isArray(base[k])) out[k] = deepMerge(base[k], v);
    else out[k] = v;
  });
  return out;
}

export function migrate(obj){
  if (!obj || typeof obj !== "object") return null;
  if (obj.v === VERSION) return deepMerge(blank(), obj);
  if (obj.v === 1) {
    // Legajo Vivo v1: mismas colecciones de progreso; se agrega perfil y viaje.
    const s = deepMerge(blank(), {
      at: obj.at || Date.now(), createdAt: obj.at || Date.now(),
      declared: obj.declared || {}, runs: obj.runs || {}, active: obj.active || {}, refl: obj.refl || [],
      tools: obj.tools || {}, concepts: obj.concepts || {}, dil: obj.dil || {},
      prefs: Object.assign({ lens: "simple", ctx: "med" }, obj.prefs || {})
    });
    return s;
  }
  return null;
}

export function init(){
  if (!localAdapter.available()) { adapter = memoryAdapter; S.persistent = false; }
  let raw = adapter.load();
  let st = raw ? migrate(raw) : null;
  if (!st) {
    const legacy = adapter.loadLegacy();
    const m = legacy ? migrate(legacy) : null;
    if (m) { st = m; S.migratedFrom = "Legajo Vivo"; }
  }
  S.state = st || blank();
  if (st && S.migratedFrom) save();
  return S.state;
}

export const useAdapter = a => { adapter = a; };
export const adapterName = () => adapter.name;

export function save(){
  S.state.at = Date.now();
  if (!S.state.createdAt) S.state.createdAt = S.state.at;
  adapter.save(S.state);
  emit("store:save", S.state);
}

export function replace(obj){
  const m = migrate(obj);
  if (!m) throw new Error("respaldo inválido");
  S.state = m; save(); return m;
}

export function exportJSON(){
  return JSON.stringify(Object.assign({ app: "VÍVELO RH", exportedAt: new Date().toISOString() }, S.state), null, 1);
}

export function validateBackup(o){
  return !!(o && (o.v === 1 || o.v === VERSION) && typeof o.runs === "object");
}

/* Reinicios parciales: nunca borran más de lo pedido. */
export const reset = {
  sim(id){ delete S.state.active[id]; delete S.state.runs[id]; S.state.refl = S.state.refl.filter(r => !(r.kind === "sim" && r.ref === id)); if (S.state.debrief === id) S.state.debrief = null; save(); },
  tool(id){ delete S.state.tools[id]; S.state.refl = S.state.refl.filter(r => !(r.kind === "tool" && r.ref === id)); save(); },
  challenge(id){ delete S.state.challenges[id]; save(); },
  journey(){ S.state.journey = blank().journey; save(); },
  declared(){ S.state.declared = {}; save(); },
  tour(){ S.state.profile.tourDone = false; save(); },
  all(){ const name = S.state.profile.name; S.state = blank(); S.state.profile.name = name; S.state.profile.createdAt = Date.now(); save(); },
  everything(){ S.state = blank(); save(); }
};

export const hasProgress = () => {
  const s = S.state;
  return Object.keys(s.runs).length + Object.keys(s.active).length + Object.keys(s.tools).length + Object.keys(s.challenges).length + s.journey.done.length + Object.keys(s.concepts).length > 0;
};
