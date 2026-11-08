// Los 30 puestos de VÍVELO RH. Cada uno vive su mes.
// Lista investigada en avisos reales del Perú (Computrabajo, Bumeran, LinkedIn y convocatorias del Estado).
// GRATIS: mes completo gratis. Los demás: el capítulo 1 es gratis y el resto va con el pase anual.

export const ORDEN = [
  // Entrada
  'practicante', 'practicante-estado', 'asistente-rrhh', 'asistente-seleccion', 'asistente-planillas',
  'asistente-capacitacion', 'asistente-bienestar', 'asistente-sst', 'reclutador-masivo',
  // Intermedio
  'analista-seleccion', 'asistente-personal', 'analista-planillas', 'analista-capacitacion', 'analista-relaciones',
  'analista-compensaciones', 'generalista', 'especialista-orh', 'talent-acquisition', 'especialista-clima',
  'analista-do', 'especialista-rendimiento', 'analista-analytics', 'especialista-employer-branding',
  // Senior
  'supervisor-sst', 'generalista-campo', 'hrbp', 'coordinador-gh', 'jefe-rrhh', 'jefe-relaciones-laborales', 'gerente-gestion-humana',
];
export const GRATIS = []; // ya no hay puestos completos gratis: el día 1 de cada puesto es gratis (ver assets/acceso.js)

const reg = (id, archivo) => ({ mod: archivo, clave: `vivelo-p-${id}`, cap: n => `./assets/cap/${id}-${n}.js` });
export const PUESTOS = {
  'analista-seleccion': { mod: './assets/seleccion.js', clave: 'vivelo-sel', cap: n => `./assets/seleccion-cap${n}.js` },
};
['practicante', 'asistente-personal', 'analista-capacitacion', 'analista-relaciones', 'asistente-rrhh', 'reclutador-masivo', 'asistente-sst']
  .forEach(id => (PUESTOS[id] = reg(id, './assets/puestos/grupo-a.js')));
['asistente-bienestar', 'analista-compensaciones', 'generalista', 'especialista-orh', 'generalista-campo', 'hrbp', 'jefe-rrhh']
  .forEach(id => (PUESTOS[id] = reg(id, './assets/puestos/grupo-b.js')));
['asistente-seleccion', 'asistente-planillas', 'analista-planillas', 'asistente-capacitacion', 'practicante-estado', 'talent-acquisition', 'especialista-clima']
  .forEach(id => (PUESTOS[id] = reg(id, './assets/puestos/grupo-c.js')));
['analista-do', 'especialista-rendimiento', 'analista-analytics', 'supervisor-sst', 'especialista-employer-branding', 'coordinador-gh', 'gerente-gestion-humana', 'jefe-relaciones-laborales']
  .forEach(id => (PUESTOS[id] = reg(id, './assets/puestos/grupo-d.js')));

// Carga los datos de un puesto: { PUESTO, PERSONAS }
export async function cargarPuesto(id) {
  const r = PUESTOS[id] || PUESTOS['analista-seleccion'];
  const m = await import(r.mod.replace('./assets/', './'));
  return m.DATOS ? m.DATOS[id] : m;
}

// ---------- Brújula: a qué gran área pertenece cada puesto ----------
export const CLUSTERS = [
  { id: 'atraer', n: 'Atraer e incorporar', d: 'Que entren las personas correctas y empiecen bien.', c: '#F2A900' },
  { id: 'admin', n: 'Administrar y cumplir', d: 'Que cada vínculo sea legal, se pague bien y quede documentado.', c: '#7CC6EA' },
  { id: 'desarrollar', n: 'Desarrollar', d: 'Que las personas y la organización crezcan.', c: '#2F6B3F' },
  { id: 'cuidar', n: 'Cuidar y proteger', d: 'Que trabajar aquí sea justo, sano y seguro.', c: '#E4572E' },
  { id: 'estrategia', n: 'Estrategia y datos', d: 'Que las decisiones sobre personas sirvan a los objetivos.', c: '#6B5BA8' },
];
export const AREA = {
  practicante: 'atraer', 'asistente-seleccion': 'atraer', 'reclutador-masivo': 'atraer', 'analista-seleccion': 'atraer', 'talent-acquisition': 'atraer', 'especialista-employer-branding': 'atraer',
  'asistente-rrhh': 'admin', 'asistente-planillas': 'admin', 'asistente-personal': 'admin', 'analista-planillas': 'admin', 'analista-compensaciones': 'admin', 'practicante-estado': 'admin', 'especialista-orh': 'admin',
  'asistente-capacitacion': 'desarrollar', 'analista-capacitacion': 'desarrollar', 'analista-do': 'desarrollar', 'especialista-rendimiento': 'desarrollar', 'especialista-clima': 'desarrollar',
  'asistente-bienestar': 'cuidar', 'asistente-sst': 'cuidar', 'supervisor-sst': 'cuidar', 'analista-relaciones': 'cuidar', 'jefe-relaciones-laborales': 'cuidar',
  hrbp: 'estrategia', 'analista-analytics': 'estrategia', 'coordinador-gh': 'estrategia', 'jefe-rrhh': 'estrategia', 'gerente-gestion-humana': 'estrategia', generalista: 'estrategia', 'generalista-campo': 'estrategia',
};
export const TAREAS = {
  atraer: ['Entrevistar personas', 'Coordinar agendas', 'Filtrar CV', 'Decir «no» con respeto', 'Negociar con jefes'],
  admin: ['Calcular remuneraciones', 'Ordenar documentos', 'Interpretar normas', 'Atender consultas', 'Cumplir plazos'],
  desarrollar: ['Diseñar programas', 'Enseñar o facilitar', 'Medir resultados', 'Acompañar cambios', 'Escuchar en grupo'],
  cuidar: ['Escuchar casos difíciles', 'Mediar conflictos', 'Investigar quejas', 'Prevenir riesgos', 'Negociar con sindicatos'],
  estrategia: ['Analizar datos', 'Presentar a gerencia', 'Decidir con presupuesto', 'Liderar personas', 'Conectar áreas'],
};
