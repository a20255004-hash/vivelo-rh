// Acceso a los capítulos de VÍVELO RH.
// - El día 1 de cada puesto es gratis.
// - El resto se desbloquea comprando el puesto (S/ 20, de por vida) o con el pase de 30 días (S/ 49, todos los puestos).
// Mientras COBRO_ACTIVO sea false, todo queda abierto (modo revisión).
// Cuando se active el cobro, los accesos vendrán de Supabase (tabla `accesos`, escrita solo por el servidor
// al confirmar el pago de Mercado Pago), nunca solo del navegador.
export const COBRO_ACTIVO = false;
export const PRECIOS = { puesto: 20, pase: 49, dias: 30 };

let ACC = { puestos: [], paseHasta: 0 };
export function fijarAccesos(a) { ACC = { puestos: a?.puestos || [], paseHasta: +a?.paseHasta || 0 }; }

export const tienePase = () => ACC.paseHasta > Date.now();
export const tieneAcceso = (pid, n) => n <= 1 || !COBRO_ACTIVO || ACC.puestos.includes(pid) || tienePase();
export const linkPrecios = pid => `precios.html${pid ? '#' + pid : ''}`;
export const TXT_BLOQUEO = `El día 1 es gratis. Desbloquea este puesto por S/ ${PRECIOS.puesto} para siempre, o todos los puestos por S/ ${PRECIOS.pase} durante ${PRECIOS.dias} días.`;
