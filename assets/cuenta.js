// Cuentas y progreso en la nube (Supabase).
// Sin cuenta, todo sigue funcionando en el navegador. Con cuenta, el progreso se sincroniza entre dispositivos.
// La clave publicable es pública por diseño: la seguridad la dan las políticas RLS de la base de datos.

const SUPABASE_URL = 'https://klrwjnrrmyeflhtmxule.supabase.co';
const SUPABASE_KEY = 'sb_publishable_luxgr3u7n4XXjtNBRz14jA_YDbgljQc';
const SOLO_LOCAL = ['vivelo-tema', 'vivelo-sonido', 'vivelo-sesion'];
const esNube = k => k.startsWith('vivelo-') && !SOLO_LOCAL.includes(k);

// Dentro de la vista previa de claude.ai no se puede conectar con servicios externos.
export const DISPONIBLE = !/claude\.ai|claudeusercontent|claude\.site/.test(location.hostname);

let sb = null;
async function cliente() {
  if (!DISPONIBLE) return null;
  if (sb) return sb;
  try {
    const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/+esm');
    sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: true, detectSessionInUrl: true, flowType: 'pkce' } });
    return sb;
  } catch { return null; }
}
const volverA = () => location.origin + location.pathname;

export async function sesionActual() {
  const c = await cliente(); if (!c) return null;
  try { const { data } = await c.auth.getSession(); return data.session || null; } catch { return null; }
}
export async function entrarGoogle() {
  const c = await cliente(); if (!c) throw new Error('sin-conexion');
  const { error } = await c.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: volverA() } });
  if (error) throw error;
}
export async function entrarCorreo(email) {
  const c = await cliente(); if (!c) throw new Error('sin-conexion');
  const { error } = await c.auth.signInWithOtp({ email, options: { emailRedirectTo: volverA(), shouldCreateUser: true } });
  if (error) throw error;
}
export async function salir() {
  const c = await cliente(); if (!c) return;
  await subir();
  await c.auth.signOut();
  try { localStorage.setItem('vivelo-sesion', 'invitado'); sessionStorage.removeItem('vivelo-nube'); } catch {}
}

// ---------- Nombre ----------
export async function nombreDeCuenta(session) {
  const c = await cliente(); if (!c || !session) return '';
  try {
    const { data } = await c.from('perfiles').select('nombre').eq('id', session.user.id).maybeSingle();
    if (data?.nombre) return data.nombre;
  } catch {}
  const md = session.user.user_metadata || {};
  return md.full_name || md.name || '';
}
export async function guardarNombre(nombre) {
  const c = await cliente(); const s = await sesionActual(); if (!c || !s) return;
  try { await c.from('perfiles').upsert({ id: s.user.id, nombre }); } catch {}
}

// ---------- Progreso ----------
const hechoDe = raw => { try { return +(JSON.parse(raw)?.hecho || 0); } catch { return 0; } };
export async function subir() {
  const c = await cliente(); const s = await sesionActual(); if (!c || !s) return;
  const filas = [];
  try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (esNube(k)) filas.push({ user_id: s.user.id, clave: k, datos: { v: localStorage.getItem(k) }, actualizado: new Date().toISOString() }); } } catch {}
  if (filas.length) { try { await c.from('progreso').upsert(filas); } catch {} }
}
export async function bajar() {
  const c = await cliente(); const s = await sesionActual(); if (!c || !s) return false;
  try {
    const { data, error } = await c.from('progreso').select('clave, datos');
    if (error || !data) return false;
    for (const { clave, datos } of data) {
      if (!esNube(clave) || typeof datos?.v !== 'string') continue;
      const local = localStorage.getItem(clave);
      // En el progreso de una temporada gana la versión que llegó más lejos.
      if (local && hechoDe(local) > hechoDe(datos.v)) continue;
      localStorage.setItem(clave, datos.v);
    }
    return true;
  } catch { return false; }
}

// ---------- Sincronización automática ----------
let t = null;
const programar = () => { clearTimeout(t); t = setTimeout(subir, 2500); };
export async function iniciar({ alEntrar } = {}) {
  const s = await sesionActual(); if (!s) return null;
  try { localStorage.setItem('vivelo-sesion', 'cuenta'); } catch {}
  let primera = false; try { primera = !sessionStorage.getItem('vivelo-nube'); } catch {}
  if (primera) { await bajar(); await subir(); try { sessionStorage.setItem('vivelo-nube', '1'); } catch {} }
  const nombre = await nombreDeCuenta(s);
  if (nombre) { try { localStorage.setItem('vivelo-nombre', nombre); } catch {} }
  // Cada vez que la página guarda algo de VÍVELO RH, lo subimos (con una pequeña espera).
  const original = Storage.prototype.setItem;
  if (!Storage.prototype._vivelo) {
    Storage.prototype.setItem = function (k, v) { original.call(this, k, v); if (this === localStorage && esNube(String(k))) programar(); };
    Storage.prototype._vivelo = true;
  }
  addEventListener('pagehide', () => subir());
  alEntrar?.({ session: s, nombre, primera });
  return s;
}
