// Capítulo 4 · «El filtro» · Semana 1, jueves.
// Recibe las decisiones de los capítulos 1 a 3 a través de F.has(flag).
//
// Normas citadas y fuentes consultadas:
// - Ley 29733, de Protección de Datos Personales: consentimiento, finalidad y seguridad de los datos.
//   https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf
// - Ley 29973, Ley General de la Persona con Discapacidad: art. 49 (cuota no inferior al 3 % en empleadores privados con más
//   de 50 trabajadores) y art. 50 (ajustes razonables en el proceso de selección). Reglamento modificado por D.S. 013-2019-MIMP.
//   https://www.elperuano.pe/noticia/259228-personas-con-discapacidad-obligaciones-de-empleadores-para-fomentar-la-inclusion-laboral
//   https://busquedas.elperuano.pe/dispositivo/NL/2290518-1
// - Ley 26772 y D.S. 002-98-TR: requisitos no discriminatorios. https://faolex.fao.org/docs/pdf/per201903.pdf

export const CAP = {
  n: 4, titulo: 'El filtro', dia: 'Semana 1, jueves', foto: 'assets/foto/cv-mano.webp',
  lugar: 'Oficina de RR.HH. · Distribuidora Pacífico Sur',
  inicio: '07:30', fin: '20:00', cierreHora: '19:45',
  apertura: 'El aviso cerró a las 7:00. En dieciséis horas llegaron 140 postulaciones; en tu escritorio, un café que se enfría solo.', boton: 'Abrir las postulaciones',
  kusi: 'Hoy toca decir muchos «no». Que cada uno tenga una razón. ¡Dale!',
  lead: 'Convertiste 140 postulaciones en cinco entrevistas con criterios que puedes explicar, y le dijiste a un sobrino lo mismo que a todos.',
  reflexion: '¿A quién descartaste hoy que te costó descartar? ¿Por qué?',
  siguiente: { n: 5, titulo: 'Las entrevistas', dia: 'Semana 1, viernes' },
};

const BASE = [
  { id: 'supervisor', p: 'Supervisor de almacén', j: 'Walter · Operaciones', d: 25, e: 'Hoy: filtro de 140 postulaciones' },
  { id: 'operarios', p: 'Operarios de almacén (4)', j: 'Walter · Operaciones', d: 12, e: '2 aprobados, faltan 2' },
  { id: 'vendedores', p: 'Vendedores de campo (3)', j: 'Fernando · Comercial', d: 18, e: 'Hoy: llamadas de filtro' },
  { id: 'contable', p: 'Asistente contable', j: 'Gina · Contabilidad', d: 43, e: 'Aviso nuevo publicado' },
  { id: 'chofer', p: 'Chofer de reparto', j: 'Distribución', d: 8, e: 'Entrevistas el viernes' },
  { id: 'practicante', p: 'Practicante de marketing', j: 'Comercial', d: 6, e: 'Convenio con universidad en trámite' },
  { id: 'despacho', p: 'Auxiliar de despacho', j: 'Walter · Operaciones', d: 63, e: 'Proceso reabierto' },
];
export const CARTERA = (F, prev) => BASE.map(c => {
  const antes = prev?.cartera?.find(x => x.id === c.id);
  return antes && !['supervisor', 'vendedores'].includes(c.id) && antes.e !== c.e ? { ...c, e: antes.e } : c;
});

export const FUTURO = {
  matriz_solida: ['Tu matriz de preselección mide lo que el puesto exige.', 'Las entrevistas del capítulo 5 tendrán foco.'],
  matriz_floja: ['Tu matriz mezcla requisitos que no ayudan a decidir.', 'Llegarás a las entrevistas con dudas. Capítulo 5.'],
  rescate_lucia: ['Rocío rescató del descarte a una jefa de turno de retail.', 'La conocerás en el capítulo 5.'],
  rescate_patricia: ['Rocío rescató del descarte a una supervisora de Ica.', 'La conocerás en el capítulo 5.'],
  rescate_marco: ['Rocío rescató del descarte al recomendado de Walter.', 'Capítulo 5.'],
  ajuste_hugo: ['Hugo Cárdenas, postulante con discapacidad auditiva, tendrá su entrevista con ajustes.', 'Capítulo 5.'],
  hugo_fuera: ['Dejaste fuera a Hugo sin ofrecerle ajustes razonables.', 'Rocío lo revisará en el capítulo 6.'],
  kevin_igual: ['Le dijiste a Kevin que sigue el mismo proceso que los demás.', 'Fernando lo sabrá en el capítulo 6.'],
  kevin_final: ['Kevin pasa a la final de vendedores sin cumplir uno de los criterios de su tío.', 'Los otros vendedores lo notarán. Capítulo 6.'],
  cv_carpeta: ['Walter revisa los CV en una carpeta con acceso controlado.', 'Capítulo 5.'],
  cv_whatsapp: ['Los 140 CV están ahora en el celular de Walter.', 'Capítulo 6.'],
  julio_evaluado: ['Don Julio será entrevistado como los demás.', 'Capítulo 5.'],
  julio_descartado: ['Don Julio quedó fuera por no tener la secundaria completa.', 'El equipo del almacén lo comentará. Capítulo 6.'],
  ramiro_libre: ['Ramiro, del turno noche, podrá postular sin pedir permiso a Walter.', 'Capítulo 5.'],
  agenda_walter: ['Walter bloqueó su jueves para las entrevistas.', 'Capítulo 5.'],
  hector_respuesta: ['Le explicaste a Héctor por qué no pasó.', 'Puede volver para otra vacante.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Pacífico Sur', sub: 'Rocío, Kelly y tú', c: '#2F6B3F' },
  rocio: { n: 'Rocío Mamani', sub: 'Jefa de RR.HH.', who: 'rocio' },
  walter: { n: 'Walter Quispe', sub: 'Jefe de Operaciones', who: 'walter' },
  fernando: { n: 'Fernando Salas', sub: 'Gerente Comercial', who: 'fernando' },
  kevin: { n: 'Kevin Paredes', sub: 'Postulante a vendedor', c: '#6C8EBF' },
  hector: { n: 'Héctor Linares', sub: 'Postulante a supervisor', c: '#9C6644' },
  kelly: { n: 'Kelly Ramos', sub: 'Planillas', who: 'kelly' },
};

export const CORREOS = [
  { t: '08:10', de: 'Rocío Mamani', para: 'Analista de Selección', asunto: 'Tu tabla de procesos', html: '<p>Zegarra reenvió tu tabla a todos los gerentes y pidió que en el comité del lunes todas las áreas reporten así. Bien ahí.</p>', si: 'gerencia_informada' },
  { t: '08:10', de: 'Rocío Mamani', para: 'Analista de Selección', asunto: 'Lo de Zegarra', html: '<p>Gina le respondió a Zegarra, con copia a todos, que su asistente lleva 43 días sin novedades. Zegarra preguntó por qué le dijimos que todo iba según lo previsto. Hablemos.</p>', si: 'gerencia_optimista' },
  { t: '09:40', de: 'Luis Pari', para: 'seleccion@pacificosur.pe', asunto: '¿De dónde sacaron mi número?', html: '<p>Señores: ayer me llamaron por una vacante a la que no postulé. Mi CV lo envié en 2022 para otro puesto. Pido que retiren mis datos de su base.</p><p>Luis Pari</p>', si: 'base_sin_permiso' },
  { t: '09:40', de: 'Portal de empleo', para: 'seleccion@pacificosur.pe', asunto: '9 candidatos de tu base aceptaron ser considerados', html: '<p>Nueve personas de tu base respondieron «Sí, quiero participar» para Supervisor/a de almacén.</p>', si: 'base_consentimiento' },
];

export const WSP = [
  { chat: 'grupo', t: '07:44', de: 'Kelly', txt: 'Ánimo con las 140 😅 Yo estoy con la PLAME, ni me hablen hasta las 11' },
  { chat: 'walter', t: '08:20', de: 'Walter', txt: 'Ya pues. ¿Y los nombres de los candidatos avanzados?', si: 'mentira_walter' },
  { chat: 'walter', t: '08:35', de: 'Walter', txt: 'Los dos operarios que entrevistó están bien. Elmer y Yesenia. Que entren el miércoles de la próxima semana.', no: 'operarios_descartados' },
  { chat: 'walter', t: '08:35', de: 'Walter', txt: 'Elmer está bien. Pero me faltan tres operarios. ¿Y los otros?', si: 'operarios_descartados' },
  { chat: 'rocio', t: '10:02', de: 'Rocío', txt: 'Antes de filtrar: revisa que no estemos dejando fuera a nadie por ser mujer. Lo del «varón» no se repite.', si: 'filtro_sexo' },
  { chat: 'rocio', t: '10:02', de: 'Rocío', txt: 'Ojo que el comité aprobó solo S/ 450 por vacante. Lo que pasó del presupuesto lo cubro, pero que sea la última vez.', si: 'sobre_presupuesto' },
  { chat: 'kevin', t: '10:58', de: 'Kevin', txt: 'Gracias señorita, igual me esfuerzo 💪', si: 'kevin_igual' },
  { chat: 'kevin', t: '10:58', de: 'Kevin', txt: 'Ya le avisé a mi tío 🙌', si: 'kevin_final' },
  { chat: 'fernando', t: '11:20', de: 'Fernando', txt: 'Colega, Kevin me dice que no tiene moto y que eso cuenta… pero ese criterio lo puse para los otros, no para él 😅', si: 'kevin_igual' },
  { chat: 'walter', t: '17:40', de: 'Walter', txt: 'Mañana 9 a 1 bloqueado. Entrevistamos juntos.', si: 'agenda_walter' },
  { chat: 'hector', t: '19:18', de: 'Héctor', txt: 'Buenas noches señorita. Tengo 10 años de supervisor y no me llamaron. ¿Se puede saber por qué?' },
];

export const QUIZ = [
  { q: '¿Qué es una matriz de preselección?', ops: ['Una lista de los CV ordenados por fecha de llegada', 'Una tabla con criterios del perfil para comparar postulantes de la misma forma', 'El informe final de la terna', 'Un test psicológico'], ok: 1, por: 'La matriz aplica los mismos criterios, sacados del perfil, a todos los postulantes.' },
  { q: 'Un postulante con discapacidad auditiva pide hacer la entrevista por escrito o con intérprete. ¿Qué corresponde?', ops: ['Negarlo: la entrevista es igual para todos', 'Coordinar el ajuste razonable antes de la entrevista', 'Descartarlo porque el puesto usa radio', 'Pedirle un certificado médico antes de responder'], ok: 1, por: 'La Ley 29973 reconoce el derecho a ajustes razonables en el proceso de selección.' },
  { q: 'El jefe pide que le reenvíes los 140 CV a su WhatsApp. ¿Qué es lo más prudente?', ops: ['Mandarlos en un .zip', 'Compartirle solo los preseleccionados, en una carpeta con acceso controlado', 'Negarte a mostrarle cualquier CV hasta la terna', 'Imprimirlos y dejarlos en su escritorio'], ok: 1, por: 'El jefe necesita ver a los finalistas, no los datos de 140 personas en su celular.' },
  { q: 'Un criterio del jefe («moto propia») deja fuera a su propio familiar. ¿Qué haces?', ops: ['Haces una excepción por ser familiar', 'Aplicas el criterio igual a todos y se lo explicas al jefe', 'Eliminas el criterio sin decírselo a nadie', 'Le pides al familiar que mienta'], ok: 1, por: 'Un criterio vale para todos o para nadie. Si el jefe quiere cambiarlo, se cambia para todos.' },
  { q: 'Un postulante descartado te pregunta por qué no pasó. ¿Qué haces?', ops: ['No le respondes', 'Le explicas con respeto el criterio que no cumplió', 'Le dices que «lo tendremos en cuenta»', 'Le reenvías la matriz completa con los datos de los demás'], ok: 1, por: 'Una razón clara y respetuosa cuida la imagen de la empresa y ayuda a la persona.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '07:50', ch: 'sistema', who: null, titulo: 'La matriz de preselección', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: (n, F) => `<p>El portal marca <mark class="clave">140 postulaciones</mark>: ${F.has('canal_referidos') ? '11 llegaron por referidos del equipo, ' : ''}${F.has('canal_linkedin') ? '19 por LinkedIn, ' : ''}el resto por el portal${F.has('fb_sesgo') ? ', y 12 desde el WhatsApp de Jhonatan, todas de varones' : ''}. ${F.has('aviso_confuso') ? 'Hay de todo: cajeros, vendedores, hasta un chef.' : 'La mayoría tiene experiencia en almacén.'}</p><p>Antes de abrir un solo CV, armas la matriz. ${F.has('perfil_flojo') ? 'Tu perfil del martes no ayuda mucho: tendrás que decidir aquí qué pesa.' : 'Tu perfil del martes te da casi todo.'}</p>`,
    type: 'builder', prompt: 'Arma tu matriz: tres criterios que descartan y dos que suman puntos.', boton: 'Guardar la matriz',
    bloques: [
      { id: 'excluye', t: 'Criterios excluyentes (si no lo cumple, no sigue)', n: 3, ops: [
        { id: 'e1', t: 'Al menos 3 años supervisando un almacén o equipo operativo comparable.', ok: true, por: 'Sale del perfil y se verifica en el CV.' },
        { id: 'e2', t: 'Disponibilidad para turnos rotativos.', ok: true, por: 'Condición real del puesto.' },
        { id: 'e3', t: 'Pretensión salarial compatible con la banda.', ok: true, por: 'Evita entrevistas que no llegarán a una oferta.' },
        { id: 'e4', t: 'Título universitario.', ok: false, por: 'Tu perfil no lo pedía. Agregarlo ahora deja fuera a gente con experiencia real.' },
        { id: 'e5', t: 'Vivir a menos de 20 minutos del parque industrial.', ok: false, por: 'No mide la capacidad de hacer el trabajo y puede castigar a quien vive en distritos alejados.' },
      ] },
      { id: 'suma', t: 'Criterios que suman puntos', n: 2, ops: [
        { id: 's1', t: 'Manejo de un sistema de almacén (WMS).', ok: true, por: 'Lo que don Julio dijo que falta en este almacén.' },
        { id: 's2', t: 'Experiencia en inventarios generales o conciliaciones.', ok: true, por: 'El inventario empieza el 28.' },
        { id: 's3', t: 'CV bien diseñado y con foto profesional.', ok: false, por: 'Mide habilidades de diseño, no de supervisión, y la foto abre la puerta a sesgos.' },
        { id: 's4', t: 'Haber trabajado en una empresa conocida.', ok: false, por: 'El nombre de la empresa no dice qué hizo la persona.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .99 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: Math.round((k - .5) * 16), cumplimiento: k >= .6 ? 2 : -3, tiempo: -2 },
        flags: [q === 'riesgosa' ? 'matriz_floja' : 'matriz_solida'],
        out: q === 'buena' ? 'Tu matriz cabe en media hoja y cada criterio sale del perfil. Con ella, 140 postulaciones se vuelven 38 en dos horas.' : q === 'aceptable' ? 'La matriz funciona, aunque algún criterio no mide el trabajo. Te quedan 52 postulantes para revisar a mano.' : 'La matriz deja pasar a gente sin experiencia y descarta a otros por razones que no podrías defender.',
        pro: { ok: 'Decidir los criterios antes de leer los CV te protege de enamorarte de un CV bonito.', risk: 'Un criterio que no sale del perfil es una preferencia personal disfrazada.', info: 'Guarda la matriz con la fecha: si alguien pregunta por qué alguien no pasó, ahí está la respuesta.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Criterios primero, CV después! Así se filtra.' : 'Revisa qué criterio no está en el perfil.'],
      };
    },
    rules: [[BP, 'Define los criterios de preselección antes de leer los CV y aplícalos a todos.'], [LEY, 'Ningún criterio puede ser discriminatorio (Ley 26772).']],
    mirada: {
      ve: 'Con 140 CV, el cansancio decide por ti si no tienes criterios. A las once de la mañana todo CV se parece. Una profesional fija las reglas cuando está fresca y las aplica igual al primero que al último.',
      visual: { tipo: 'embudo', titulo: 'El filtro del supervisor', niveles: [['Postulaciones', 140], ['Cumplen los excluyentes', 38], ['Con más puntos', 12], ['Para entrevistar', 5]] },
    },
  },
  {
    id: 'd2', t: '09:30', ch: 'documento', who: null, titulo: 'Doce que suman', banner: 'assets/foto/entrevista-cv.webp', show: ['calidad', 'etica', 'personas'],
    body: (n, F) => `<p>Para que nada te distraiga, el portal tapa nombres y fotos: cada postulante es un código. Te quedan los que más suman. Walter tiene <mark class="clave">tiempo para cinco entrevistas</mark> mañana viernes.</p>${F.has('referido_walter') ? '<p>Uno de los CV es el del supervisor que te recomendó Walter. El portal no te dice cuál.</p>' : ''}`,
    type: 'pick', n: 5, prompt: 'Elige a las cinco personas que pasan a entrevista.', boton: 'Cerrar la preselección', resumen: 'Pasan a entrevista',
    cols: ['Código', 'Experiencia', 'Lo que suma', 'Lo que preocupa'],
    rows: [
      { id: 'p017', cells: ['P-017', 'Jefa de turno en un supermercado de Tacna, 5 años, equipo de 15', 'Liderazgo; inventarios cíclicos de tienda', 'No ha trabajado en un almacén ni con WMS'] },
      { id: 'p052', cells: ['P-052', 'Supervisor de almacén en un operador logístico minero de Moquegua, 6 años', 'SAP WM; inventarios generales', 'Hoy gana más que la banda'] },
      { id: 'p088a', no: 'solo_tacna', cells: ['P-088', 'Supervisora de almacén en una agroexportadora de Ica, 8 años', 'Indicadores de exactitud; WMS', 'Tendría que mudarse a Tacna'] },
      { id: 'p088b', si: 'solo_tacna', cells: ['P-088', 'Supervisora de almacén en una agroexportadora de Ica, 8 años', 'Indicadores de exactitud; WMS', 'Vive en Ica: tu aviso pedía residir en Tacna'] },
      { id: 'p120', cells: ['P-120', 'Jefe de almacén en una ferretería mayorista, 4 años', 'WMS; inventarios generales', 'Pidió una entrevista con ajustes por discapacidad auditiva'] },
      { id: 'pjulio', si: 'julio_postula', cells: ['Interno', 'Operario en este almacén, 20 años', 'Conoce el WMS y al equipo; cubrió turnos', 'Nunca supervisó formalmente; secundaria incompleta'] },
      { id: 'p064', cells: ['P-064', 'Almacenero, 4 años', 'Coordina una cuadrilla en campaña', 'No ha supervisado formalmente'] },
      { id: 'p101', cells: ['P-101', 'Supervisor de almacén, 10 años', 'Mucha experiencia', 'Pide S/ 5,500: muy por encima de la banda'] },
      { id: 'p031', cells: ['P-031', 'Supervisor de ventas en retail, 3 años', 'Lidera equipos', 'Nunca trabajó en almacén'] },
      { id: 'p003', cells: ['P-003', 'Ingeniero industrial, egresado hace 1 año', 'Título; Excel avanzado', 'Sin experiencia supervisando'] },
    ],
    score: { p017: 2, p052: 3, p088a: 3, p088b: 3, p120: 2, pjulio: 2, p064: 1, p101: -1, p031: 0, p003: -1 },
    res: (picks, sc) => {
      const q = sc >= 11 ? 'buena' : sc >= 8 ? 'aceptable' : 'riesgosa';
      const tiene = id => picks.includes(id), pat = tiene('p088a') || tiene('p088b');
      const rescates = [!tiene('p017') && 'rescate_lucia', !pat && 'rescate_patricia', !tiene('p052') && 'rescate_marco'].filter(Boolean);
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: tiene('p120') ? 2 : 0, personas: tiene('pjulio') ? 2 : 0 },
        flags: [...picks.map(p => 'pre_' + p), ...rescates, ...(tiene('pjulio') ? ['julio_evaluado'] : [])],
        cartera: { supervisor: '5 preseleccionados · entrevistas mañana' },
        out: rescates.length ? `Rocío revisa tu lista y agrega ${rescates.length === 1 ? 'un código que dejaste fuera' : 'códigos que dejaste fuera'}: «${!tiene('p017') ? 'La P-017 tiene el liderazgo que Walter pidió. ' : ''}${!pat ? 'La P-088 tiene ocho años y datos; la mudanza la decide ella. ' : ''}${!tiene('p052') ? 'El P-052 cumple todo, aunque gane más hoy. ' : ''}Que entren a las entrevistas de mañana».` : 'Rocío revisa tu lista y no le cambia nada: «Cinco perfiles distintos. Walter va a tener de dónde elegir».',
        pro: { ok: 'Una buena preselección no son cinco copias del mismo perfil: combina experiencia, liderazgo y potencial.', risk: 'Descartar por lo que «preocupa» sin preguntarlo es decidir por la persona: quizás quiere mudarse, quizás acepta la banda.', info: 'Lo que preocupa se convierte en una pregunta para la entrevista, no en un descarte automático.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Cinco perfiles, cinco historias. ¡Bacán!' : 'Ojo: una duda se pregunta, no se adivina.'],
      };
    },
    rules: [[BP, 'Lo que preocupa de un CV se pregunta en la entrevista; no se adivina en el filtro.'], [LEY, 'Las empresas privadas con más de 50 trabajadores deben tener al menos un 3 % de personas con discapacidad (Ley 29973, art. 49).']],
    mirada: {
      ve: 'Tapar nombres y fotos no es un capricho: obliga a mirar lo que la persona hizo, no quién es. Y cada «lo que preocupa» es en realidad una pregunta: ¿se mudaría?, ¿aceptaría la banda?, ¿qué ajustes necesita? Una profesional no responde esas preguntas por el candidato.',
      visual: { tipo: 'matriz', x: 'Experiencia en almacén', y: 'Liderazgo demostrado', cuadrantes: ['Finalistas naturales', 'Potencial por desarrollar', 'Expertos a confirmar', 'No pasan'], items: [['P-052', .82, .75], ['P-088', .88, .7], ['P-017', .25, .85], ['P-120', .62, .55], ['Interno', .9, .4], ['P-064', .55, .3], ['P-101', .95, .65], ['P-031', .1, .6], ['P-003', .05, .1]] },
      normas: [{ ley: 'Ley 29973, Ley General de la Persona con Discapacidad, art. 49', dice: 'Los empleadores privados con más de cincuenta trabajadores deben contratar personas con discapacidad en una proporción no inferior al 3 % de su personal.', practica: 'Pacífico Sur tiene 180 trabajadores. Un postulante calificado con discapacidad no es un favor: también es una obligación que la empresa debe cumplir.' }],
    },
  },
  {
    id: 'd3', t: '10:40', ch: 'llamada', who: null, titulo: 'Las llamadas de vendedores', banner: 'assets/esc/dudas.webp', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>Entre CV y CV, retomas a los vendedores. ${F.has('fernando_criterios') ? 'Fernando dejó tres criterios por escrito: experiencia con bodegas, moto propia y facilidad de palabra.' : 'Fernando nunca mandó criterios; usas los que dedujiste de su terna rechazada: bodegas, moto propia y facilidad de palabra.'}</p><p>En tu lista de llamadas está Kevin Paredes, <mark class="clave">el sobrino de Fernando</mark>. ${F.has('kevin_terna') ? 'Fernando ya lo da por finalista.' : 'Entró por el portal, como los demás.'}</p>`,
    type: 'calls',
    calls: [['Rosa Ccama', 'Contesta, le interesa. Tres años con bodegas y moto propia', 'Sí señorita, tengo mi moto y conozco todas las bodegas de Gregorio Albarracín.'], ['Diego Arce', 'No contesta'], ['Kevin Paredes', 'Contesta: «Mi tío ya me dijo que paso a la final, ¿no?». No tiene moto propia', 'Hola, sí. Mi tío ya me dijo que paso a la final, ¿no? Moto no tengo, pero me presta mi primo.'], ['Nilda Mamani', 'Contesta: «Estoy atendiendo en el mercado, ¿me llama a las seis?»', 'Estoy atendiendo en el mercado, señorita, ¿me llama a las seis?'], ['Franco Vizcarra', 'El número no existe']],
    prompt: 'Kevin espera tu respuesta en la línea. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Decirle, con amabilidad, que todos siguen el mismo proceso y que la moto propia es uno de los criterios de su área.',
        res: { q: 'buena', fx: { etica: 6, personas: 2, confianza: -1 }, flags: ['kevin_igual'], envia: ['kevin', 'Hola, Kevin. Gracias por atender. Como te comenté, todos siguen el mismo proceso. El área pide moto propia; si la consigues, avísame y lo revisamos con los mismos criterios que a los demás.'],
          out: 'Kevin se queda callado un segundo. «Ah… ya, entiendo. Gracias por decirme claro.» Una hora después, Fernando te escribe con un emoji nervioso.',
          pro: { ok: 'Le hablas a Kevin como a cualquier postulante y aplicas un criterio que puso el propio Fernando.', risk: 'Fernando puede querer cambiar el criterio. Si lo cambia, que sea para todos.', info: 'Kevin no tiene la culpa de lo que le prometió su tío: trátalo con respeto.' },
          kusi: ['animo', 'Claro con Kevin, justo con Rosa. Eso es.'] } },
      { id: 'b', label: 'Decirle que sí pasa a la final para no contradecir a su tío, y resolver lo de la moto después.',
        res: { q: 'riesgosa', fx: { etica: -7, confianza: 2 }, rel: { fernando: 1 }, flags: ['kevin_final'], envia: ['kevin', 'Hola, Kevin. Sí, pasas a la final. Lo de la moto lo vemos después.'],
          out: 'Kevin se alegra. Rosa Ccama, que tiene moto y tres años con bodegas, compite ahora con alguien que no cumple un criterio que ella sí cumple.',
          pro: { ok: 'Evitas una conversación incómoda con Fernando.', risk: 'Acabas de tener dos reglas: una para todos y otra para el sobrino.' },
          kusi: ['triste', 'Rosa no sabe que la cancha está inclinada.'] } },
      { id: 'c', label: 'Decirle que no puedes darle información por teléfono y que espere el correo.',
        res: { q: 'aceptable', fx: { etica: 1, personas: -3 }, flags: ['kevin_espera'],
          out: 'Kevin cuelga confundido. En diez minutos Fernando te llama: «¿Qué pasó con Kevin?». Tendrás la conversación igual, pero sin haberla preparado.',
          pro: { ok: 'Evitas improvisar una respuesta.', risk: 'Esconderte detrás de un correo solo mueve la conversación difícil a otro momento.' },
          kusi: ['pensando', 'La conversación te va a alcanzar igual.'] } },
    ],
    rules: [[BP, 'Un criterio vale para todos los postulantes o para ninguno.'], [POL, 'Esta empresa no tiene una política escrita sobre familiares; el proceso es la única protección.']],
    mirada: {
      ve: 'Kevin no pidió un trato especial: se lo prometieron. Una profesional no lo castiga por eso ni lo premia; le explica las reglas igual que a Rosa. Y nota algo que Fernando no vio: su propio criterio deja fuera a su sobrino. Ahí se ve si el criterio era del puesto o era para los demás.',
      visual: { tipo: 'balanza', a: { t: 'Kevin a la final', items: ['Fernando contento', 'Sin conversación difícil hoy'] }, b: { t: 'Mismo criterio para todos', items: ['Rosa compite en igualdad', 'El proceso se puede defender', 'Fernando decide si cambia el criterio para todos'] } },
    },
  },
  {
    id: 'd4', t: '12:10', ch: 'presencial', who: 'walter', titulo: '«Mándemelos todos»', banner: 'assets/foto/frente-a-frente.webp', show: ['cumplimiento', 'confianza', 'etica'],
    body: (n, F) => `<p>Walter aparece en la puerta de RR.HH. con el casco bajo el brazo. ${F.has('mentira_walter') ? 'Viene por los «candidatos avanzados» que le prometiste ayer. ' : ''}${F.has('fb_corregido') ? 'Detrás, Jhonatan evita mirarte. ' : ''}</p><p>«Mándeme los 140 CV por WhatsApp. <mark class="clave">Yo los veo en la noche</mark> y le digo quiénes.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mostrarle tu matriz y compartirle los cinco preseleccionados en una carpeta del área, solo de lectura.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 4, calidad: 2 }, rel: { walter: 1 }, flags: ['cv_carpeta'],
          out: 'Walter revisa la matriz en silencio. «¿Y si se le pasó alguno bueno?» Le enseñas los tres criterios excluyentes. «Ya. Mándeme el enlace.» Se va sin el .zip, pero con lo que necesita.',
          pro: { ok: 'Walter ve a los finalistas y entiende cómo llegaste a ellos; los datos de 140 personas no salen de la empresa.', risk: 'Puede sentir que le escondes algo. Por eso le muestras la matriz.', info: 'Ofrécele ver cualquier CV descartado que le genere duda, aquí, en tu laptop.' },
          kusi: ['feliz', 'Transparencia con el método, cuidado con los datos.'] } },
      { id: 'b', label: 'Mandarle los 140 en un .zip: es el jefe que pidió la vacante y tiene derecho a verlos.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, tiempo: 2 }, rel: { walter: 1 }, flags: ['cv_whatsapp'],
          out: 'Walter recibe el .zip a las 12:14. Ahora 140 CV, con DNI, teléfonos y direcciones, viven en un celular que también usa su hijo para jugar.',
          pro: { ok: 'Walter queda contento y se involucra.', risk: 'Los datos de los postulantes salen del control de la empresa, y con ellos tu matriz pierde sentido.' },
          kusi: ['preocupado', '140 CV en un celular… uy.'] } },
      { id: 'c', label: 'Decirle que los CV son confidenciales y que verá a los finalistas en la terna.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, confianza: -4 }, rel: { walter: -1 },
          out: '«¿Confidenciales para mí, que pedí la vacante?» Walter se va molesto. No viste que podía revisar a los preseleccionados sin llevarse los datos de todos.',
          pro: { ok: 'Cuidas los datos.', risk: 'El jefe que pidió la vacante sí debe ver a los candidatos que va a entrevistar.' },
          kusi: ['pensando', 'Cuidaste los datos, pero cerraste la puerta.'] } },
    ],
    rules: [[LEY, 'Los datos personales deben protegerse con medidas que eviten su pérdida o un acceso no autorizado (Ley 29733).'], [BP, 'Comparte con el jefe lo que necesita para decidir, por un canal que la empresa controle.']],
    mirada: {
      ve: 'Walter no quiere los datos: quiere confiar en el filtro. Una profesional le da confianza en el método, no un .zip. Cuando el jefe entiende por qué alguien quedó fuera, deja de necesitar revisar a los 140.',
      visual: { tipo: 'flujo', titulo: 'Qué ve cada quién', pasos: ['RR.HH.: los 140', 'Matriz: criterios', 'Walter: los 5', 'Terna: los 3', 'Archivo: solo lo necesario'] },
      normas: [{ ley: 'Ley 29733, de Protección de Datos Personales', dice: 'Quien trata datos personales debe adoptar medidas técnicas, organizativas y legales que garanticen su seguridad y eviten su alteración, pérdida o acceso no autorizado.', practica: 'Un .zip de CV en un celular personal es exactamente el tipo de acceso que la empresa ya no controla.' }],
    },
  },
  {
    id: 'd5', t: '13:20', ch: 'correo', who: null, titulo: 'Hugo pregunta', banner: 'assets/foto2/revisan.webp', show: ['etica', 'cumplimiento', 'personas'],
    mail: { from: 'Hugo Cárdenas · Postulante P-120', to: 'seleccion@pacificosur.pe', asunto: 'Postulación P-120 · consulta sobre la entrevista' },
    body: (n, F) => `<p>Buenos días. Postulé a supervisor de almacén. Tengo discapacidad auditiva y me comunico bien por escrito y leyendo los labios. Si me llaman para una entrevista, <mark class="clave">¿podría ser por videollamada con subtítulos o con un intérprete de lengua de señas?</mark></p><p>Gracias. Hugo Cárdenas</p><p><small>${F.has('pre_p120') ? 'Hugo está entre tus cinco preseleccionados.' : 'Hugo no quedó entre tus cinco, pero su consulta llegó antes de que cerraras la lista.'} Al leerlo, Walter comenta desde la puerta: «¿Y cómo va a hablar por radio con los operarios?».</small></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Confirmarle la entrevista con el ajuste, preguntarle qué le funciona mejor y dejar para después la conversación sobre la radio.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, personas: 4, tiempo: -3 }, flags: ['ajuste_hugo'],
          responde: 'Hugo, gracias por escribir. Te confirmamos la entrevista mañana viernes. ¿Qué te funciona mejor: videollamada con subtítulos, intérprete de lengua de señas o las preguntas por escrito? Lo coordinamos contigo.',
          out: 'Hugo responde en diez minutos: «Videollamada con subtítulos y el chat abierto. Gracias por preguntar». A Walter le explicas que la radio se conversa en la entrevista: hay radios con pantalla y equipos que usan mensajes.',
          pro: { ok: 'Das el ajuste antes de la entrevista y le preguntas a él, que sabe lo que necesita.', risk: 'Walter puede llegar mañana con el prejuicio armado. Prepáralo.', info: 'Separa dos cosas: evaluar si puede hacer el trabajo y suponer que no puede.' },
          kusi: ['celebra', '¡Qué divino! Preguntar es el primer ajuste.'] } },
      { id: 'b', label: 'Responderle que la entrevista es presencial e igual para todos, para no darle ventaja sobre los demás.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -6 }, flags: ['hugo_fuera'],
          responde: 'Hugo, la entrevista es presencial e igual para todos los postulantes. Saludos.',
          out: 'Hugo no responde. Tampoco se presenta al día siguiente. La empresa acaba de negar un ajuste que la ley reconoce.',
          pro: { ok: 'Quieres ser justa con todos.', risk: 'Tratar igual a quien necesita un ajuste no es justicia: es dejarlo fuera.' },
          kusi: ['indignado', '¡Igual para todos no siempre es justo!'] } },
      { id: 'c', label: 'Esperar a que Walter confirme si el puesto puede hacerse sin radio antes de responderle.',
        res: { q: 'aceptable', fx: { etica: 1, personas: -2, tiempo: 1 }, flags: ['hugo_espera'],
          out: 'Walter dice que «lo va a pensar». Pasan los días y Hugo sigue sin respuesta. El ajuste en la entrevista no dependía de la radio.',
          pro: { ok: 'Quieres entender las exigencias del puesto.', risk: 'Mezclas dos momentos: el ajuste para entrevistar y la evaluación del puesto.' },
          kusi: ['pensando', 'La radio es otra conversación. La entrevista es ahora.'] } },
    ],
    rules: [[LEY, 'Las personas con discapacidad tienen derecho a ajustes razonables en el proceso de selección (Ley 29973, art. 50).'], [BP, 'Pregunta a la persona qué ajuste necesita; no lo supongas.']],
    mirada: {
      ve: 'La pregunta de Walter sobre la radio es legítima, pero llega en el momento equivocado. Primero va la entrevista con ajustes; después, con información real, se evalúa si el puesto requiere algún ajuste más. Una profesional no deja que una suposición cierre una puerta que la ley manda abrir.',
      visual: { tipo: 'linea', titulo: 'Los ajustes razonables en el proceso', hitos: [['Al postular', 'La persona avisa qué necesita'], ['Antes de evaluar', 'RR.HH. coordina el ajuste'], ['Entrevista', 'Se evalúa con el ajuste'], ['Si queda', 'Se revisan ajustes en el puesto']] },
      normas: [{ ley: 'Ley 29973, art. 50, y su reglamento (modificado por D.S. 013-2019-MIMP)', dice: 'La persona con discapacidad tiene derecho a ajustes razonables en el proceso de selección: adaptar metodologías, procedimientos, instrumentos de evaluación y métodos de entrevista.', practica: 'Una videollamada con subtítulos es un ajuste simple, que cuesta poco y deja evaluar a Hugo por lo que sabe hacer.' }],
    },
  },
  {
    id: 'd6a', t: '15:10', ch: 'presencial', who: 'julio', titulo: 'La secundaria de don Julio', banner: 'assets/foto/cafe.webp', si: 'julio_postula', show: ['personas', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Revisando las postulaciones internas, notas una línea en las bases que Rocío reutilizó de un proceso de 2021: <mark class="clave">«Secundaria completa (indispensable)»</mark>. Tu perfil no la pedía; la plantilla sí.</p><p>Don Julio llega a preguntar si su papel «llegó bien». ${F.has('encargo_julio') ? 'Desde ayer está encargado del turno y, según Walter, «no se ha caído nada».' : 'Trae su ficha llenada a mano, con letra cuidadosa.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedirle a Rocío que retire ese requisito de las bases, que no estaba en el perfil, y entrevistar a don Julio como a los demás.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, cumplimiento: 2, tiempo: -2 }, rel: { julio: 1, rocio: 1 }, flags: ['julio_evaluado'],
          out: 'Rocío revisa el perfil: «Tienes razón, eso venía de la plantilla». Corrige las bases para todos. Don Julio será entrevistado mañana. «Gracias, hija. Pase lo que pase.»',
          pro: { ok: 'Corriges un requisito que nadie decidió para este puesto, y lo haces para todos, no solo para él.', risk: 'Entrevistarlo no es prometerle el puesto. Cuida sus expectativas.', info: 'Si no queda, piensa qué podría ofrecerle la empresa para crecer: terminar la secundaria, un plan de formación.' },
          kusi: ['feliz', 'Un requisito heredado casi deja fuera veinte años de oficio.'] } },
      { id: 'b', label: 'Aplicar las bases tal como están publicadas: cambiarlas a mitad del proceso sería injusto con quienes no postularon por ese requisito.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: -5 }, rel: { julio: -1 }, flags: ['julio_descartado'],
          out: 'Tu razonamiento es serio: alguien pudo no postular por esa línea. Pero don Julio vuelve al almacén callado, y el equipo lo nota.',
          pro: { ok: 'Respetas las reglas publicadas.', risk: 'El requisito no salía del perfil. Corregirlo, y ampliar el plazo para todos, también era una salida justa.', info: 'Cuando unas bases tienen un error, se corrigen y se comunican a todos.' },
          kusi: ['triste', 'Reglas claras… aunque esta no la eligió nadie.'] } },
      { id: 'c', label: 'Pasarlo directo a la terna por sus veinte años: se lo ha ganado.',
        res: { q: 'riesgosa', fx: { personas: 3, etica: -3, calidad: -3 }, rel: { julio: 1 }, flags: ['julio_terna_directa'],
          out: 'Don Julio se emociona. Pero ahora entra a la terna sin haber sido evaluado, y si no queda, la decepción será mayor.',
          pro: { ok: 'Reconoces su trayectoria.', risk: 'La antigüedad no es una evaluación. Lo justo es que compita con los mismos criterios.' },
          kusi: ['pensando', 'Cariño no es lo mismo que justicia.'] } },
    ],
    rules: [[BP, 'Revisa que las bases digan lo mismo que el perfil. Las plantillas viejas traen requisitos que nadie decidió.'], [POL, 'Si unas bases se corrigen, se corrigen para todos y se comunica el cambio.']],
    mirada: {
      ve: 'Muchos requisitos formales sobreviven porque nadie se pregunta de dónde vienen. Una profesional pregunta qué mide cada uno. La secundaria completa no dice si alguien sabe conciliar el WMS con el físico; veinte años en ese almacén, quizá sí.',
      visual: { tipo: 'balanza', a: { t: 'Aplicar la plantilla', items: ['Reglas iguales a las publicadas', 'Nadie puede reclamar un cambio'] }, b: { t: 'Corregir para todos', items: ['El requisito vuelve a salir del perfil', 'Don Julio compite con los demás', 'El equipo ve que adentro también se crece'] } },
    },
  },
  {
    id: 'd6b', t: '15:10', ch: 'presencial', who: 'walter', titulo: '«A Ramiro no me lo mueva»', banner: 'assets/foto/supervisa.webp', no: 'julio_postula', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>${F.has('conv_interna') ? 'La convocatoria interna trajo un nombre: Ramiro Chambilla, operario del turno noche, siete años en la empresa.' : 'Ramiro Chambilla, operario del turno noche, te busca: escuchó que hay vacante de supervisor y quiere postular.'}</p><p>Walter se entera y viene a verte: «A Ramiro no me lo mueva. Es el único que sabe cerrar la noche. <mark class="clave">Si sube, me deja un hueco</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle a Walter que Ramiro tiene derecho a postular y proponerle preparar desde ya a alguien que cierre la noche.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, confianza: 1 }, rel: { walter: 0 }, flags: ['ramiro_libre'],
          out: 'Walter refunfuña, pero acepta que Ramiro postule. Al final dice: «Si sube, Yesenia podría aprender el cierre». Ya está pensando en sucesión.',
          pro: { ok: 'Proteges la movilidad interna y conviertes el miedo de Walter en un plan.', risk: 'Si Ramiro no queda, cuida que no lo castiguen por haber postulado.' },
          kusi: ['celebra', 'Un jefe que piensa en sucesión. ¡Bacán!'] } },
      { id: 'b', label: 'Pedirle a Ramiro que espere al siguiente proceso, para no dejar a Walter sin cierre de noche justo antes del inventario.',
        res: { q: 'riesgosa', fx: { personas: -5, etica: -3, confianza: 2 }, rel: { walter: 1 }, flags: ['ramiro_bloqueado'],
          out: 'Ramiro dice «ya, entiendo». En el almacén corre la voz: el que es bueno no sube, porque hace falta abajo.',
          pro: { ok: 'Cuidas la operación del inventario.', risk: 'Bloquear a alguien por ser bueno en su puesto es la forma más rápida de perderlo.' },
          kusi: ['triste', 'Castigado por ser bueno… así se van los mejores.'] } },
    ],
    rules: [[BP, 'Un jefe no debería poder impedir que alguien de su equipo postule a un proceso interno.']],
    mirada: {
      ve: 'El miedo de Walter es real: Ramiro sostiene la noche. Pero si la empresa bloquea a sus mejores operarios, ellos aprenden que para crecer hay que irse. Una profesional ve en esa conversación una oportunidad para hablar de sucesión.',
      visual: { tipo: 'cambio', titulo: 'Del miedo al plan', pares: [['Si sube, me deja un hueco', '¿Quién puede aprender a cerrar la noche?'], ['Que espere al próximo proceso', 'Que postule y lo evaluamos como a todos']] },
    },
  },
  {
    id: 'd7', t: '17:15', ch: 'whatsapp', who: 'walter', titulo: 'La agenda de mañana', banner: 'assets/foto/revisa.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: (n, F) => `<p>Cierras la preselección. Antes de irte, le escribes a Walter para asegurar mañana: sin él en las entrevistas, la terna sería solo tuya.</p><p>${F.has('cv_whatsapp') ? 'Walter ya tiene los 140 CV en su celular y anda diciendo que «le gustan dos».' : 'Walter tiene el enlace a la carpeta con los cinco.'} Tienes que lograr <mark class="clave">cuatro horas de su viernes</mark>.</p>`,
    type: 'compose', enviaA: 'walter', para: 'Para: Walter Quispe', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'dato', t: 'El resultado', ops: [
        { id: 'd1', t: 'Ingeniero, de 140 postulaciones quedaron cinco para entrevistar, con los criterios de la matriz que vio.', ok: true, por: 'Le muestras el trabajo hecho y le recuerdas que el filtro tiene método.' },
        { id: 'd2', t: 'Ingeniero, ya filtré todo.', ok: false, por: 'No dice cuántos ni cómo.' },
        { id: 'd3', t: 'Ingeniero, le mando los cinco que más me gustaron.', ok: false, por: '«Me gustaron» convierte un filtro con criterios en una opinión.' },
      ] },
      { id: 'pide', t: 'El pedido', ops: [
        { id: 'p1', t: '¿Me reserva mañana viernes de 9:00 a 13:00 para entrevistarlos juntos?', ok: true, por: 'Día, hora y propósito.' },
        { id: 'p2', t: '¿Cuándo tiene un tiempito esta semana?', ok: null, por: 'Amable, pero le deja la decisión a un jefe sin tiempo.' },
        { id: 'p3', t: 'Si no puede, los entrevisto yo y le paso el resultado.', ok: false, por: 'El jefe que elige debe conocer a los candidatos.' },
      ] },
      { id: 'referido', t: 'Sobre su recomendado', ops: [
        { id: 'r1', t: 'Su recomendado está entre los cinco por sus propios méritos, como los demás.', ok: true, por: 'Transparente y sin favores.' },
        { id: 'r2', t: 'A su recomendado ya lo puse primero en la lista.', ok: false, por: 'Le confirmas que un recomendado tiene ventaja.' },
        { id: 'r3', t: 'De su recomendado mejor no le digo nada.', ok: null, por: 'Evitas el tema, pero él igual va a preguntar.' },
      ] },
      { id: 'prepara', t: 'Para preparar', ops: [
        { id: 'x1', t: 'Esta noche le paso la guía de preguntas, para que todos tengan las mismas.', ok: true, por: 'Mismas preguntas para todos: comparables y más justas.' },
        { id: 'x2', t: 'Usted pregunte lo que quiera, que es su gente.', ok: false, por: 'Sin guía, las preguntas se vuelven personales, y a veces ilegales.' },
        { id: 'x3', t: 'Cualquier cosa me avisa.', ok: null, por: 'Cordial, pero no prepara nada.' },
      ] },
    ],
    res: sel => {
      const buenas = ['d1', 'p1', 'r1', 'x1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.pide === 'p3' || sel.prepara === 'x2' ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, confianza: sel.dato === 'd1' ? 3 : 0, etica: sel.referido === 'r2' ? -4 : 1 },
        flags: [...(sel.pide === 'p1' ? ['agenda_walter'] : []), ...(sel.prepara === 'x1' ? ['guia_prometida'] : ['sin_guia']), ...(sel.referido === 'r2' ? ['referido_primero'] : [])],
        out: sel.pide === 'p1' ? 'A las 17:40 Walter responde: «Mañana 9 a 1 bloqueado. Entrevistamos juntos». Primera vez que bloquea su agenda por RR.HH.' : 'Walter responde con un «ok». No sabes si mañana estará o no.',
        pro: { ok: 'Coordinar con el jefe no es pedir permiso: es asegurar que decida con información.', risk: 'Si el jefe pregunta lo que quiere, sin guía, las entrevistas no serán comparables.', info: 'La guía de entrevista es tu próximo entregable. Hazla hoy mismo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Agenda asegurada y reglas claras.' : 'Mira qué parte deja mañana en el aire.'],
      };
    },
    rules: [[BP, 'Usa la misma guía de preguntas con todos los candidatos.'], [BP, 'El jefe que elige debe conocer a los finalistas.']],
    mirada: {
      ve: 'Las entrevistas del jueves se juegan hoy. Si Walter llega sin guía, preguntará lo que se le ocurra, y algunas cosas no se pueden preguntar. Una profesional asegura la agenda, la transparencia y el método en un solo mensaje.',
      visual: { tipo: 'flujo', titulo: 'Del filtro a la entrevista', pasos: ['Matriz', 'Preselección', 'Agenda con el jefe', 'Guía de preguntas', 'Entrevistas'], aqui: 2 },
    },
  },
  {
    id: 'd8', t: '19:25', ch: 'whatsapp', who: null, titulo: 'Héctor pregunta por qué', banner: 'assets/esc/pendulo.webp', show: ['personas', 'confianza', 'tiempo'],
    body: () => `<p>Ya en la combi de regreso, con el celular al 12 %, te escribe Héctor Linares, el postulante P-101: diez años de supervisor, pretensión de S/ 5,500.</p>`,
    chat: ['Buenas noches señorita. Tengo 10 años de supervisor y no me llamaron. ¿Se puede saber por qué?'],
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Explicarle con respeto que su pretensión está muy por encima de la banda del puesto.',
        res: { q: 'buena', fx: { personas: 4, confianza: 1 }, flags: ['hector_respuesta'], envia: ['hector', 'Buenas noches, Héctor. Gracias por preguntar. Tu experiencia es muy buena; no avanzaste porque tu pretensión salarial está bastante por encima de la banda de este puesto. Si más adelante abrimos una posición acorde, te escribiré.'],
          out: 'Héctor responde: «Gracias por la sinceridad. Pocos responden». Es probable que hable bien de la empresa, aunque no haya quedado.', kusi: ['feliz', 'Un «no» con razón también es buen trato.'] } },
      { id: 'b', label: 'Responderle que «lo tendremos en cuenta para futuras oportunidades».',
        res: { q: 'aceptable', fx: { personas: 0 }, envia: ['hector', 'Hola, Héctor. Lo tendremos en cuenta para futuras oportunidades. Saludos.'],
          out: 'Héctor deja el mensaje en visto. Sabe que esa frase no significa nada.', kusi: ['pensando', 'La frase de siempre… y él lo sabe.'] } },
      { id: 'c', label: 'Dejarlo para mañana: estás fuera de horario y con poca batería.',
        res: { q: null, fx: { tiempo: 1 }, out: 'Guardas el celular. Mañana tendrás que acordarte de responderle.', kusi: ['animo', 'Tu batería y tu descanso también cuentan.'] } },
    ],
    rules: [[BP, 'Si un postulante pregunta por qué no avanzó, dale el criterio que no cumplió, sin datos de los demás.']],
    mirada: {
      ve: 'De 140 postulantes, 135 recibirán un no. Una profesional sabe que esos 135 hablan de la empresa con su familia, con sus colegas, en los grupos de Facebook. Un no explicado con respeto es parte del trabajo de atraer talento.',
      visual: { tipo: 'embudo', titulo: 'Tu jueves en números', niveles: [['Postulaciones', 140], ['Pasaron los excluyentes', 38], ['Entrevistas de mañana', 5], ['Recibirán un no', 135]] },
    },
  },
];
