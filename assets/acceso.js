// Acceso a los capítulos de VÍVELO RH.
// - El día 1 de cada puesto es gratis.
// - El resto se desbloquea comprando el puesto (S/ 20, de por vida) o con el pase de 30 días (S/ 49, todos los puestos).
// El interruptor del cobro y los precios viven en Supabase (tabla `config`) y los cambia la administradora desde admin.html.
// Las compras viven en la tabla `accesos`; solo la administradora (o, más adelante, el servidor al confirmar el pago) puede escribirlas.
export let COBRO_ACTIVO = false;
export const PRECIOS = { puesto: 20, pase: 49, dias: 30 };

let ACC = { puestos: [], paseHasta: 0 };
export function fijarAccesos(a) { ACC = { puestos: a?.puestos || [], paseHasta: +a?.paseHasta || 0 }; }

let cargado = null;
export function cargarAccesos() {
  if (cargado) return cargado;
  cargado = (async () => {
    try {
      const { db, sesionActual } = await import('./cuenta.js');
      const c = await db(); if (!c) return;
      const { data: cfg } = await c.from('config').select('clave, valor');
      for (const { clave, valor } of cfg || []) {
        if (clave === 'cobro_activo') COBRO_ACTIVO = valor === true;
        if (clave === 'precios' && valor) Object.assign(PRECIOS, valor);
      }
      const s = await sesionActual(); if (!s) return;
      const { data } = await c.from('accesos').select('tipo, puesto, vence').eq('user_id', s.user.id).eq('activo', true);
      const puestos = [], ahora = Date.now(); let paseHasta = 0;
      for (const a of data || []) {
        if (a.tipo === 'puesto' && a.puesto) puestos.push(a.puesto);
        if (a.tipo === 'pase' && a.vence) paseHasta = Math.max(paseHasta, Date.parse(a.vence));
      }
      fijarAccesos({ puestos, paseHasta: paseHasta > ahora ? paseHasta : 0 });
    } catch {}
  })();
  return cargado;
}

export const tienePase = () => ACC.paseHasta > Date.now();
export const tieneAcceso = (pid, n) => n <= 1 || !COBRO_ACTIVO || ACC.puestos.includes(pid) || tienePase();
export const linkPrecios = pid => `precios.html${pid ? '#' + pid : ''}`;
export const textoBloqueo = () => `El día 1 es gratis. Desbloquea este puesto por S/ ${PRECIOS.puesto} para siempre, o todos los puestos por S/ ${PRECIOS.pase} durante ${PRECIOS.dias} días.`;
