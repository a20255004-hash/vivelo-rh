// Los 15 puestos de VÍVELO RH. Cada uno vive su mes.
// free: mes completo gratis. Los demás: el capítulo 1 es gratis y el resto va con el pase anual.

export const ORDEN = [
  'practicante', 'analista-seleccion', 'asistente-personal', 'analista-capacitacion', 'analista-relaciones',
  'asistente-rrhh', 'reclutador-masivo', 'asistente-sst', 'asistente-bienestar', 'analista-compensaciones',
  'generalista', 'especialista-orh', 'generalista-campo', 'hrbp', 'jefe-rrhh',
];
export const GRATIS = ['practicante', 'analista-seleccion', 'asistente-personal', 'analista-capacitacion', 'analista-relaciones'];

const reg = (id, archivo) => ({
  mod: archivo, clave: `vivelo-p-${id}`, cap: n => `./assets/cap/${id}-${n}.js`,
});
export const PUESTOS = {
  'analista-seleccion': { mod: './assets/seleccion.js', clave: 'vivelo-sel', cap: n => `./assets/seleccion-cap${n}.js` },
};
['practicante', 'asistente-personal', 'analista-capacitacion', 'analista-relaciones', 'asistente-rrhh', 'reclutador-masivo', 'asistente-sst']
  .forEach(id => (PUESTOS[id] = reg(id, './assets/puestos/grupo-a.js')));
['asistente-bienestar', 'analista-compensaciones', 'generalista', 'especialista-orh', 'generalista-campo', 'hrbp', 'jefe-rrhh']
  .forEach(id => (PUESTOS[id] = reg(id, './assets/puestos/grupo-b.js')));

// Carga los datos de un puesto: { PUESTO, PERSONAS }
export async function cargarPuesto(id) {
  const r = PUESTOS[id] || PUESTOS['analista-seleccion'];
  const m = await import(r.mod.replace('./assets/', './'));
  return m.DATOS ? m.DATOS[id] : m;
}
