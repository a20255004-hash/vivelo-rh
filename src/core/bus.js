/* Bus de eventos mínimo: permite que la guía (Kusi) reaccione a lo que pasa sin acoplarse a las vistas. */
const handlers = {};
export function on(evt, fn){ (handlers[evt] = handlers[evt] || []).push(fn); return () => off(evt, fn); }
export function off(evt, fn){ handlers[evt] = (handlers[evt] || []).filter(f => f !== fn); }
export function emit(evt, data){ (handlers[evt] || []).slice().forEach(f => { try { f(data); } catch (e) { console.error(e); } }); (handlers["*"] || []).forEach(f => { try { f(evt, data); } catch (e) {} }); }
