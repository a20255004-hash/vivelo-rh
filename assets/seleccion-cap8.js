// Capítulo 8 · «El ingreso» · Semana 4, martes.
// La persona que ingresa como supervisora depende del capítulo 6 (elegido_marco por defecto, elegido_lucia o elegido_patricia).
//
// Normas citadas y fuentes consultadas:
// - D.S. 018-2007-TR y orientación de SUNAT sobre T-Registro: el alta se registra dentro del día en que el trabajador
//   empieza a prestar servicios (verificado en el capítulo 1). https://www.gob.pe/institucion/sunat
// - Ley 29783, de Seguridad y Salud en el Trabajo, art. 27, y su reglamento (D.S. 005-2012-TR, modificado por D.S. 006-2014-TR):
//   capacitación en SST al momento de la contratación, dentro de la jornada de trabajo.
//   https://lacamara.pe/salud-y-seguridad-en-el-trabajo-conozca-las-obligaciones-de-los-empleadores/
//   https://www.congreso.gob.pe/Docs/DGP/DIDP/files/ds_006-2014-tr_.pdf
// - Ley 28991 y D.S. 009-2008-TR: el empleador entrega el Boletín Informativo sobre sistemas de pensiones a quien ingresa sin
//   estar afiliado; el trabajador tiene diez días calendario para elegir y diez más para ratificar o cambiar.
//   https://andina.pe/ingles/noticia-empleadores-deben-informar-a-trabajadores-para-libre-eleccion-afp-u-onp-769189.aspx
//   https://cdn.www.gob.pe/uploads/document/file/6136076/55791-formato-eleccion-sistema-de-pensiones.docx
// - Ley 29733, de Protección de Datos Personales (datos que se comparten al presentar a alguien).
//   https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf
// - Constitución Política del Perú, art. 26: irrenunciabilidad de derechos laborales.

export const CAP = {
  n: 8, titulo: 'El ingreso', dia: 'Semana 4, martes', foto: 'assets/3d/scenes/almacen.webp',
  lugar: 'Portón 3 y almacén central · Distribuidora Pacífico Sur',
  inicio: '06:30', fin: '20:00', cierreHora: '19:30',
  apertura: 'Son las 6:30 y el parque industrial todavía está a oscuras. Hoy entran ocho personas. Una no va a llegar.', boton: 'Ir al portón',
  kusi: 'Hoy se juega todo lo que hiciste en el mes: que la gente entre bien y que se quiera quedar. ¡Dale!',
  lead: 'Recibiste a siete personas con contrato, alta, inducción y nombre propio, y respondiste con calma a la que no llegó.',
  reflexion: '¿Qué te gustaría que alguien hubiera hecho por ti en tu primer día de trabajo?',
  siguiente: { n: 9, titulo: 'Fin de mes', dia: 'Semana 4, viernes' },
};

const E = F => F?.has('elegido_lucia')
  ? { n: 'Lucía', full: 'Lucía Flores', ella: true, viene: 'cinco años liderando equipos en retail', fuerte: 'su manera de hablar con la gente', reto: 'aprender el WMS antes del inventario' }
  : F?.has('elegido_patricia')
    ? { n: 'Patricia', full: 'Patricia Huanca', ella: true, viene: 'ocho años supervisando almacenes en una agroexportadora de Ica', fuerte: 'sus indicadores de exactitud', reto: 'conocer al equipo en cuatro días' }
    : { n: 'Marco', full: 'Marco Ticona', ella: false, viene: 'seis años supervisando un almacén minero en Moquegua', fuerte: 'su manejo de SAP', reto: 'ganarse al turno noche' };

const BASE = [
  { id: 'supervisor', p: 'Supervisor de almacén', j: 'Walter · Operaciones', d: 44, e: 'Hoy: ingreso' },
  { id: 'operarios', p: 'Operarios de almacén (4)', j: 'Walter · Operaciones', d: 31, e: 'Hoy: ingreso de 4' },
  { id: 'vendedores', p: 'Vendedores de campo (3)', j: 'Fernando · Comercial', d: 37, e: 'Hoy: ingreso de 3' },
  { id: 'contable', p: 'Asistente contable', j: 'Gina · Contabilidad', d: 62, e: 'Gina eligió; oferta el jueves' },
  { id: 'chofer', p: 'Chofer de reparto', j: 'Distribución', d: 27, e: 'Cerrado · ingresó' },
  { id: 'practicante', p: 'Practicante de marketing', j: 'Comercial', d: 25, e: 'Entrevistas el jueves' },
  { id: 'despacho', p: 'Auxiliar de despacho', j: 'Walter · Operaciones', d: 82, e: 'Terna lista' },
];
export const CARTERA = (F, prev) => BASE.map(c => {
  const antes = prev?.cartera?.find(x => x.id === c.id);
  return antes && ['practicante', 'despacho'].includes(c.id) && antes.e !== c.e ? { ...c, e: antes.e } : c;
});

export const FUTURO = {
  dia1_ordenado: ['El primer día siguió un orden claro: contrato, alta, seguridad y equipo.', 'Capítulo 9.'],
  checklist_solido: ['Tu checklist de ingreso cubre lo legal y lo humano.', 'Rocío lo hará política. Capítulo 9.'],
  checklist_flojo: ['Tu checklist deja huecos en lo legal.', 'Capítulo 9.'],
  wilber_reprograma: ['Wilber podrá entrar el lunes si confirma el jueves; Jhon queda como respaldo.', 'Capítulo 9.'],
  wilber_reemplazo: ['Reemplazaste a Wilber con el siguiente de la lista.', 'Capítulo 9.'],
  wilber_vetado: ['Marcaste a Wilber como «no recontratable» sin saber qué le pasó.', 'Capítulo 9.'],
  induccion_mixta: ['La inducción combinó seguridad, sistema y acompañamiento de don Julio.', 'El inventario lo pondrá a prueba. Capítulo 9.'],
  induccion_saltada: ['La persona nueva entró al turno sin inducción de seguridad.', 'Capítulo 9.'],
  induccion_larga: ['La inducción completa dura toda la semana, aunque el inventario empieza el 28.', 'Capítulo 9.'],
  bienvenida_cuidada: ['La bienvenida al equipo presentó a la persona por lo que sabe hacer.', 'Capítulo 9.'],
  bienvenida_expuesta: ['La bienvenida contó datos personales de la persona nueva.', 'Capítulo 9.'],
  altas_a_tiempo: ['Las siete altas se registraron el mismo día del ingreso.', 'Capítulo 9.'],
  alta_atrasada: ['Un alta se registró al día siguiente con fecha anterior.', 'Puede aparecer en una inspección. Capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Pacífico Sur', sub: 'Rocío, Kelly y tú', c: '#2F6B3F' },
  rocio: { n: 'Rocío Mamani', sub: 'Jefa de RR.HH.', who: 'rocio' },
  kelly: { n: 'Kelly Ramos', sub: 'Planillas', who: 'kelly' },
  walter: { n: 'Walter Quispe', sub: 'Jefe de Operaciones', who: 'walter' },
  todos: { n: 'Pacífico Sur · Comunicados', sub: '184 participantes', c: '#0F5F8C' },
  wilber: { n: 'Wilber Mamani', sub: 'Operario nuevo', c: '#B5838D' },
  jhon: { n: 'Jhon Quispe', sub: 'Postulante a operario', c: '#8A6D3B' },
  nuevo: { n: 'Supervisión de almacén', sub: 'La persona que hoy ingresa', c: '#C2703D' },
};

export const CORREOS = [
  { t: '06:40', de: 'Kelly Ramos', para: 'Analista de Selección', asunto: 'Contratos de hoy', html: '<p>Ya están impresos los ocho contratos, gracias a que me pasaste todo el viernes. Te debo el café. 🙏</p>', si: 'kelly_viernes' },
  { t: '06:40', de: 'Kelly Ramos', para: 'Analista de Selección', asunto: 'Contratos de hoy', html: '<p>Me quedé hasta las 22:00 ayer con los contratos. Falta la cuenta de sueldo de dos vendedores. Hoy va a ser largo.</p>', si: 'kelly_lunes' },
  { t: '07:15', de: 'Kelly Ramos', para: 'Analista de Selección', asunto: 'Ojo con la cláusula de horas extra', html: '<p>La plantilla de carta oferta decía que renuncia a horas extra. En el contrato no la puse: no vale. Avisa a Milagros… ah, no, ya no está. 😅 La borramos de la plantilla, ¿ya?</p>', si: 'carta_errores' },
  { t: '15:10', de: 'Rosa Ccama', para: 'seleccion@pacificosur.pe', asunto: 'Gracias', html: '<p>Hoy empecé como vendedora. Gracias por llamarme cuando dije que tenía moto. Mi mamá está feliz.</p>', si: 'kevin_igual' },
];

export const WSP = [
  { chat: 'grupo', t: '06:35', de: 'Kelly', txt: 'Ya llegué. Traje pan con chicharrón para todos 🥪 hoy no hay tiempo de nada' },
  { chat: 'walter', t: '07:05', de: 'Walter', txt: 'Ya está aquí la nueva supervisión. Llegó 6:40. Bien.' },
  { chat: 'jhon', t: '10:10', de: 'Jhon', txt: 'Buenos días señorita. Sí, todavía me interesa. ¿Cuándo puedo ir?', si: ['wilber_llamado'] },
  { chat: 'wilber', t: '12:58', de: 'Wilber', txt: 'Señorita disculpe 🙏 mi mamá se puso mal en Candarave y viajé de madrugada. Allá no hay señal. Recién bajo a Tacna. ¿Todavía tengo el trabajo?' },
  { chat: 'todos', t: '11:45', de: 'RR.HH.', txt: '👋 Bienvenidos a quienes hoy se suman a Pacífico Sur: nueva supervisión de almacén, cuatro operarios y tres vendedores.' },
  { chat: 'todos', t: '11:52', de: 'Don Julio', txt: 'Bienvenidos muchachos 👍' },
  { chat: 'rocio', t: '19:05', de: 'Rocío', txt: 'Siete de ocho en un día. Y el octavo con plan. Nada mal 👏', si: 'altas_a_tiempo' },
];

export const QUIZ = [
  { q: '¿Cuándo se registra el alta del trabajador en el T-Registro?', ops: ['Al terminar el periodo de prueba', 'Dentro del día en que empieza a trabajar', 'Cuando se paga la primera boleta', 'Hasta una semana después'], ok: 1, por: 'El alta se registra dentro del día de ingreso, aunque el sistema esté lento.' },
  { q: 'Según la Ley 29783, ¿cuándo debe darse la capacitación en seguridad y salud?', ops: ['Al año de trabajo', 'Al momento de la contratación, dentro de la jornada', 'Solo si el trabajador la pide', 'Cuando ocurra un accidente'], ok: 1, por: 'La capacitación en SST va al ingreso, cuando cambian las funciones y durante el trabajo, en horario laboral.' },
  { q: 'Un trabajador nuevo nunca estuvo afiliado a un sistema de pensiones. ¿Qué entrega el empleador?', ops: ['Nada: lo afilia a la AFP que prefiera la empresa', 'El Boletín Informativo, para que elija en el plazo que da la ley', 'Un formulario de la ONP ya firmado', 'Una carta de renuncia a pensiones'], ok: 1, por: 'La Ley 28991 obliga a informar para que la persona elija libremente entre el SNP y el SPP.' },
  { q: 'Un ingreso no llega el primer día y no contesta. ¿Qué haces primero?', ops: ['Lo marcas como no recontratable', 'Intentas contactarlo por varios medios y activas un respaldo sin cerrarle la puerta', 'Le das de alta igual', 'Esperas una semana'], ok: 1, por: 'Puede haber una razón seria. Protege la operación con un respaldo y averigua qué pasó.' },
  { q: 'Al presentar al nuevo supervisor al equipo, ¿qué conviene contar?', ops: ['Su sueldo', 'Su estado civil y dónde vive', 'Su experiencia y qué va a hacer', 'Por qué no eligieron a los otros finalistas'], ok: 2, por: 'Se presenta a la persona por su rol y su experiencia; sus datos personales son suyos.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '06:45', ch: 'presencial', who: 'kelly', titulo: 'El orden del primer día', banner: 'assets/foto2/caminan.webp', lugar: 'Portón 3', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: (n, F) => { const e = E(F); return `<p>Hace frío y el cielo de Tacna todavía está gris. ${e.n} llegó antes que nadie y espera en el portón con su mochila. Detrás vienen los operarios, frotándose las manos.</p><p>Kelly te alcanza un pan con chicharrón y una lista. ${F.has('kelly_viernes') ? '«Contratos listos. Ahora, el orden.»' : '«Me faltan dos cuentas de sueldo, pero vamos.»'} <mark class="clave">Ocho personas, un solo día.</mark></p>`; },
    type: 'secuencia', prompt: 'Ordena el primer día de quienes ingresan.', boton: 'Pegar el orden en la puerta de RR.HH.',
    items: [
      { id: 'recibe', t: 'Recibirlos en el portón con una credencial provisional y su nombre escrito', por: 'Que nadie espere en la puerta sin saber a quién buscar.' },
      { id: 'contrato', t: 'Firmar el contrato y entregar una copia a cada persona', por: 'Nadie empieza a trabajar sin saber en qué condiciones.' },
      { id: 'pension', t: 'Entregar el Boletín Informativo de pensiones y recoger los datos que falten', por: 'Quien nunca estuvo afiliado elige con información, en el plazo de ley.' },
      { id: 'sst', t: 'Charla de seguridad y entrega de casco, chaleco y zapatos', por: 'Antes de pisar el almacén, no después.' },
      { id: 'alta', t: 'Confirmar el alta en T-Registro de cada persona que efectivamente ingresó', por: 'Dentro del día, y solo de quien empezó a trabajar.' },
      { id: 'equipo', t: 'Recorrido por el almacén y presentación a su equipo', por: 'Conocer a las personas es la mitad de la inducción.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: 2 }, rel: { kelly: q === 'buena' ? 1 : 0 },
        flags: [q === 'riesgosa' ? 'dia1_desordenado' : 'dia1_ordenado'],
        out: q === 'buena' ? 'Kelly pega tu hoja en la puerta: «Así, en orden, salimos vivas». A las 7:00 ya están firmando.' : 'Kelly mueve un paso: «La charla de seguridad va antes de entrar al almacén, no al final».',
        pro: { ok: 'Un primer día ordenado protege a la empresa y le dice a la persona que la estaban esperando.', risk: 'Si la seguridad va al final, alguien ya caminó entre montacargas sin casco.', info: 'Deja a cada persona con un nombre de contacto para su primera semana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Primer día con mapa!' : 'Seguridad antes de pisar el almacén.'],
      };
    },
    rules: [[LEY, 'El alta en T-Registro se registra dentro del día del ingreso (D.S. 018-2007-TR).'], [LEY, 'La capacitación en SST se da al momento de la contratación (Ley 29783, art. 27).']],
    mirada: {
      ve: 'El primer día dice más de la empresa que cualquier aviso. Una profesional lo diseña para que cada persona sepa dónde ir, con quién hablar y qué firmó. Y para que la seguridad llegue antes que el primer montacargas.',
      visual: { tipo: 'flujo', titulo: 'El primer día', pasos: ['Portón', 'Contrato', 'Pensiones', 'Seguridad', 'Alta', 'Equipo'] },
    },
  },
  {
    id: 'h2', t: '07:30', ch: 'llamada', who: null, titulo: 'Pasar lista', banner: 'assets/foto/llamada.webp', show: ['personas', 'tiempo', 'calidad'],
    body: (n, F) => `<p>A las 7:30 faltan dos operarios. Kelly no ha registrado ninguna alta todavía: <mark class="clave">primero, confirmar quién llegó</mark>.</p><p>Llamas a los que no están.</p>`,
    type: 'calls',
    calls: [['Yesenia Apaza', 'Contesta: «La combi se malogró en la Collpa, llego en quince minutos»', 'Señorita, la combi se malogró en la Collpa. Llego en quince minutos, de verdad.'], ['Wilber Mamani', 'No contesta'], ['Wilber Mamani · segundo intento', 'No contesta'], ['Familiar de Wilber (contacto de emergencia)', 'El número no existe']],
    prompt: 'Yesenia llegará. Wilber no contesta. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Escribirle a Wilber por WhatsApp, pedirle a Kelly que no registre su alta todavía y llamar a Jhon, el siguiente de la lista, solo para saber si sigue disponible.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 4, tiempo: -2 }, flags: ['wilber_llamado'], envia: [['wilber', 'Hola, Wilber. Te esperamos hoy a las 7:00 para tu ingreso. ¿Estás bien? Escríbeme apenas puedas, por favor.'], ['jhon', 'Hola, Jhon. Te escribe la analista de Selección de Pacífico Sur. ¿Sigues interesado en el puesto de operario? Respóndeme cuando puedas.']],
          out: 'Kelly anota: «Alta de Wilber, en espera». Yesenia llega a las 7:48, agitada. A las 10:10 Jhon responde que sigue interesado.',
          pro: { ok: 'No registras a quien no empezó, no le cierras la puerta y proteges a Walter con un respaldo.', risk: 'Si Jhon se ilusiona y Wilber vuelve, alguien se decepciona. Sé clara con Jhon.', info: 'Revisa por qué el número de emergencia no existe: el formulario de ingreso debería validarlo.' },
          kusi: ['animo', 'Calma, respaldo y la puerta abierta.'] } },
      { id: 'b', label: 'Registrar igual las cinco altas de operarios: Wilber seguro llega tarde y así Kelly no se atrasa.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, tiempo: 2 }, rel: { kelly: -1 }, flags: ['alta_fantasma'],
          out: 'Kelly duda, pero lo hace. A mediodía Wilber sigue sin aparecer y ahora hay un alta de alguien que no trabajó. Toca corregirla.',
          pro: { ok: 'Kelly avanza.', risk: 'El alta es de quien empezó a trabajar. Registrar a quien no vino obliga a corregir y deja un registro falso.' },
          kusi: ['preocupado', 'Un alta de alguien que no está…'] } },
    ],
    rules: [[LEY, 'El alta corresponde a quien empieza a prestar servicios ese día (T-Registro, SUNAT).'], [BP, 'Antes de dar por perdido un ingreso, usa varios canales y activa un respaldo.']],
    mirada: {
      ve: 'Que alguien no llegue el primer día es más común de lo que parece. A veces consiguió otra cosa; a veces le pasó algo serio. Una profesional protege la operación sin condenar a la persona y no registra nada que no haya ocurrido.',
      visual: { tipo: 'embudo', titulo: 'Los ingresos de hoy', niveles: [['Ofertas aceptadas', 8], ['Llegaron a las 7:00', 6], ['Llegaron antes de las 8:00', 7], ['Wilber', 0]] },
    },
  },
  {
    id: 'h3', t: '08:30', ch: 'documento', who: null, titulo: 'El checklist de ingreso', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'calidad', 'personas'],
    body: (n, F) => `<p>Mientras los nuevos están en la charla de seguridad, armas con Kelly el checklist que usarán desde ahora en cada ingreso. ${F.has('checklist_kelly') ? 'La lista que Kelly te pasó el primer día es la base.' : 'Lo armas desde cero: nadie lo tenía por escrito.'}</p><p>Rocío quiere que sea <mark class="clave">una sola hoja</mark>.</p>`,
    type: 'builder', prompt: 'Elige qué va en cada parte del checklist.', boton: 'Guardar el checklist',
    bloques: [
      { id: 'antes', t: 'Antes del ingreso', n: 2, ops: [
        { id: 'a1', t: 'Datos completos a Planillas con 48 horas de anticipación.', ok: true, por: 'El acuerdo con Kelly que hace posible el alta a tiempo.' },
        { id: 'a2', t: 'Contrato revisado y listo para firmar.', ok: true },
        { id: 'a3', t: 'Firma de una carta de renuncia sin fecha, «por si acaso».', ok: false, por: 'Es una práctica abusiva: anula derechos que son irrenunciables.' },
      ] },
      { id: 'dia1', t: 'El primer día', n: 3, ops: [
        { id: 'd1', t: 'Copia del contrato para la persona.', ok: true },
        { id: 'd2', t: 'Capacitación en seguridad y equipos de protección antes de entrar al almacén.', ok: true, por: 'Ley 29783: al momento de la contratación.' },
        { id: 'd3', t: 'Alta en T-Registro dentro del día.', ok: true },
        { id: 'd4', t: 'Retener el DNI de la persona hasta que pase el periodo de prueba.', ok: false, por: 'El DNI es de la persona. Retenerlo no tiene ninguna base y genera desconfianza.' },
        { id: 'd5', t: 'Dar el alta recién cuando termine el periodo de prueba.', ok: false, por: 'El periodo de prueba ya es trabajo. El alta va el primer día.' },
      ] },
      { id: 'semana', t: 'Las primeras semanas', n: 2, ops: [
        { id: 's1', t: 'Plan de inducción con objetivos a 30, 60 y 90 días.', ok: true, por: 'Le dice a la persona qué se espera de ella y cuándo.' },
        { id: 's2', t: 'Reunión de seguimiento con RR.HH. al terminar el primer mes.', ok: true, por: 'Lo que no se pregunta al mes, se descubre en la renuncia.' },
        { id: 's3', t: 'Esperar a que la persona pregunte lo que no entienda.', ok: false, por: 'La persona nueva casi nunca pregunta: no quiere parecer que no sabe.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .99 ? 'buena' : k >= .7 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: Math.round((k - .5) * 14), calidad: 3 }, rel: { kelly: 1 },
        flags: [q === 'riesgosa' ? 'checklist_flojo' : 'checklist_solido'],
        out: q === 'buena' ? 'Una hoja, siete casillas, nada de más. Kelly la plastifica y la pega al lado de la impresora: «Esta sí la voy a usar».' : q === 'aceptable' ? 'El checklist sirve, aunque deja algún hueco que Kelly tendrá que cubrir de memoria.' : 'El checklist tiene prácticas que no se pueden hacer. Kelly te mira: «Esto no lo voy a pegar».',
        pro: { ok: 'Un checklist convierte lo que hoy sabes en algo que la empresa sabe, aunque tú no estés.', risk: 'Las prácticas abusivas suelen sobrevivir en las costumbres, no en los papeles. Escribirlas como prohibidas también ayuda.', info: 'Agrega una casilla para revisar el contacto de emergencia: hoy falló.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una hoja que se queda aunque tú te vayas!' : 'Mira qué casilla no tiene base legal.'],
      };
    },
    rules: [[LEY, 'Los derechos laborales son irrenunciables (Constitución, art. 26).'], [LEY, 'La capacitación en SST va al momento de la contratación (Ley 29783).'], [BP, 'Planifica la inducción con objetivos a 30, 60 y 90 días.']],
    mirada: {
      ve: 'El primer mes decide si alguien se queda. Una profesional no confía en la buena voluntad del día: deja una hoja que obliga a la empresa a hacer lo correcto con cada persona que entra, sea supervisora o practicante.',
      visual: { tipo: 'linea', titulo: 'Lo que pasa alrededor de un ingreso', hitos: [['2 días antes', 'Datos a Planillas'], ['Día 1', 'Contrato, seguridad, alta, equipo'], ['Día 30', 'Seguimiento con RR.HH.'], ['Día 90', 'Fin del periodo de prueba']] },
    },
  },
  {
    id: 'h4', t: '09:45', ch: 'presencial', who: 'walter', titulo: '«La inducción es pérdida de tiempo»', banner: 'assets/foto/supervisa.webp', lugar: 'Almacén central', show: ['cumplimiento', 'confianza', 'calidad'],
    body: (n, F) => { const e = E(F); return `<p>Walter interrumpe el recorrido. «El inventario es el 28. ${e.n} tiene que estar hoy mismo en el turno, no sentado viendo diapositivas. <mark class="clave">La inducción es pérdida de tiempo.</mark>»</p><p>${F.has('julio_plan') || F.has('encargo_julio') ? 'Don Julio, a su lado, mira el suelo.' : ''} ${e.n} no dice nada. Su reto, lo sabe todo el almacén: ${e.reto}.</p>`; },
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer una inducción mixta: seguridad y WMS esta mañana, y desde la tarde al turno acompañado por don Julio.',
        res: { q: 'buena', fx: { cumplimiento: 5, calidad: 4, confianza: 3 }, rel: { walter: 1, julio: 1 }, flags: ['induccion_mixta'],
          out: 'Walter mira a don Julio. «¿Tú le enseñas?» Don Julio asiente. A las 14:00 la nueva supervisión está en el turno, con casco, clave del WMS y alguien al lado que conoce cada rack.',
          pro: { ok: 'Cumples lo obligatorio, respetas la urgencia de Walter y le das a don Julio un rol que reconoce su experiencia.', risk: 'Acompañar no es supervisar en lugar del nuevo. Define bien qué hace cada uno.', info: 'Agenda para el viernes una conversación corta con los dos: cómo va el acompañamiento.' },
          kusi: ['celebra', '¡Qué divino! Don Julio, de encargado a mentor.'] } },
      { id: 'b', label: 'Hacerle caso a Walter: que entre directo al turno y la inducción se hace después del inventario.',
        res: { q: 'riesgosa', fx: { cumplimiento: -7, tiempo: 3 }, rel: { walter: 1 }, flags: ['induccion_saltada'],
          out: 'La nueva supervisión entra al turno sin la charla de seguridad completa ni la clave del WMS. Si hoy pasa algo con un montacargas, la empresa no podrá decir que capacitó.',
          pro: { ok: 'Walter tiene a alguien en el turno hoy.', risk: 'La capacitación en seguridad al ingreso es obligatoria, y un supervisor sin inducción supervisa a ciegas.' },
          kusi: ['preocupado', '¿Sin charla de seguridad? Uy.'] } },
      { id: 'c', label: 'Mantener la inducción completa de cinco días, como dice el procedimiento.',
        res: { q: 'aceptable', fx: { cumplimiento: 4, confianza: -4 }, rel: { walter: -1 }, flags: ['induccion_larga'],
          out: '«¿Cinco días? El inventario empieza el 28.» Walter se va molesto. Tienes razón en lo legal; pero el procedimiento no pensó en un inventario.',
          pro: { ok: 'Cumples todo lo previsto.', risk: 'Un procedimiento que no se adapta al negocio termina saltándose.', info: 'Lo obligatorio no se negocia; el resto se puede ordenar distinto.' },
          kusi: ['pensando', 'Lo legal, sí. Lo práctico, todavía no.'] } },
    ],
    rules: [[LEY, 'El empleador debe capacitar en SST al momento de la contratación, dentro de la jornada (Ley 29783, art. 27).'], [BP, 'Separa lo obligatorio de lo que se puede adaptar a la urgencia del negocio.']],
    mirada: {
      ve: 'Walter tiene razón en algo: una inducción de diapositivas no prepara a nadie para un inventario. Pero la seguridad no es una diapositiva. Una profesional separa lo que no se negocia de lo que se puede hacer de otra forma, y aprovecha a quien mejor conoce el almacén.',
      visual: { tipo: 'balanza', a: { t: 'Directo al turno', items: ['Walter tranquilo hoy', 'Más manos para el inventario'] }, b: { t: 'Inducción mixta', items: ['Seguridad antes del almacén', 'WMS desde el primer día', 'Don Julio como mentor'] } },
      normas: [{ ley: 'Ley 29783, de Seguridad y Salud en el Trabajo, art. 27, y su reglamento', dice: 'El empleador capacita a sus trabajadores en seguridad y salud al momento de la contratación, durante el trabajo y cuando cambian sus funciones o la tecnología, dentro de la jornada de trabajo.', practica: 'La charla de seguridad del primer día no es opcional ni se pospone por el inventario.' }],
    },
  },
  {
    id: 'h5', t: '11:15', ch: 'whatsapp', who: null, titulo: 'La bienvenida al equipo', banner: 'assets/foto2/aplausos-verde.webp', show: ['personas', 'cumplimiento', 'confianza'],
    body: (n, F) => { const e = E(F); return `<p>Rocío te pide escribir la bienvenida en el grupo de comunicados: 184 personas, desde Gerencia hasta los choferes.</p><p>Hoy entran ${e.full}, cuatro operarios y tres vendedores. Lo que escribas será <mark class="clave">lo primero que el almacén sepa</mark> de su nueva supervisión.</p>`; },
    type: 'compose', enviaA: 'todos', para: 'Para: Pacífico Sur · Comunicados', boton: 'Publicar la bienvenida',
    prompt: 'Arma la bienvenida eligiendo una frase de cada parte.',
    slots: [
      { id: 'quien', t: 'Quién llega', ops: [
        { id: 'q1', t: 'Hoy se suma nuestra nueva supervisión de almacén, junto con cuatro operarios y tres vendedores.', ok: true, por: 'Todos los ingresos, sin jerarquías: los operarios también cuentan.' },
        { id: 'q2', t: 'Por fin tenemos supervisor después de un mes.', ok: false, por: 'Suena a reproche al proceso y a quien cubrió el puesto.' },
      ] },
      { id: 'trae', t: 'Qué trae', ops: [
        { id: 't1', t: 'Llega con experiencia supervisando equipos y almacenes, y estará a cargo de los turnos y del inventario.', ok: true, por: 'Presenta a la persona por su experiencia y su rol.' },
        { id: 't2', t: 'Viene de otra ciudad con su familia y ganará más que los demás supervisores.', ok: false, por: 'Datos personales y sueldo: no son del grupo.' },
        { id: 't3', t: 'Le ganó a otros dos finalistas muy buenos.', ok: false, por: 'Expone a quienes no quedaron, y no aporta nada.' },
      ] },
      { id: 'julio', t: 'Un reconocimiento', ops: [
        { id: 'j1', t: 'Gracias a don Julio Cutipa, que cubrió el turno estas semanas y acompañará la llegada al almacén.', ok: true, por: 'Reconoces en público lo que hizo alguien que no quedó.' },
        { id: 'j2', t: 'Gracias a todos por su paciencia.', ok: null, por: 'Amable, pero no nombra a quien sostuvo el turno.' },
      ] },
      { id: 'pide', t: 'Lo que pides', ops: [
        { id: 'p1', t: 'Si se cruzan con ellos, preséntense: el primer día se recuerda siempre.', ok: true, por: 'Invita al equipo a recibir.' },
        { id: 'p2', t: 'Cualquier queja, a RR.HH.', ok: false, por: 'Una bienvenida no es el lugar para quejas.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 't1', 'j1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const expone = sel.trae === 't2' || sel.trae === 't3';
      const q = expone ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, cumplimiento: expone ? -5 : 2 }, rel: { julio: sel.julio === 'j1' ? 1 : 0 },
        flags: [expone ? 'bienvenida_expuesta' : 'bienvenida_cuidada'],
        out: expone ? 'El mensaje corre por todo el almacén en minutos. En el comedor, alguien comenta el sueldo. La persona nueva lo escucha en su primera hora de almuerzo.' : 'A los cinco minutos llueven saludos. Don Julio responde con un pulgar. Alguien del turno noche escribe: «Bienvenidos, aquí estamos».',
        pro: { ok: 'Presentar a alguien por su rol y su experiencia lo protege y lo legitima frente al equipo.', risk: 'Lo que se publica en un grupo de 184 personas ya no se puede borrar.', info: 'El reconocimiento público a don Julio vale más que cualquier bono.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Bienvenida cálida y cuidadosa.' : 'Ojo con lo que es de la persona, no del grupo.'],
      };
    },
    rules: [[LEY, 'Los datos personales de un trabajador no se difunden sin su consentimiento (Ley 29733).'], [BP, 'Presenta a cada persona por su rol y su experiencia.']],
    mirada: {
      ve: 'Una bienvenida en el grupo de la empresa no es un trámite: es la primera vez que 184 personas escuchan hablar de alguien que todavía no conocen. Una profesional cuida que lo primero que sepan sea por qué está ahí, no cuánto gana ni con quién vive.',
      visual: { tipo: 'mensaje', titulo: 'Una bienvenida que cuida', txt: 'Hoy se suma nuestra nueva supervisión de almacén, junto con cuatro operarios y tres vendedores. Llega con experiencia supervisando equipos y almacenes, y estará a cargo de los turnos y del inventario. Gracias a don Julio Cutipa, que cubrió el turno estas semanas. Si se cruzan con ellos, preséntense: el primer día se recuerda siempre.' },
    },
  },
  {
    id: 'h6', t: '13:05', ch: 'whatsapp', who: null, titulo: 'Wilber aparece', banner: 'assets/esc/pendulo.webp', show: ['personas', 'etica', 'tiempo'],
    body: (n, F) => `<p>Estás a medio almuerzo cuando vibra el celular. Es Wilber.</p>${F.has('alta_fantasma') ? '<p>Kelly ya tuvo que corregir el alta que registraron esta mañana a su nombre.</p>' : ''}`,
    chat: ['Señorita disculpe 🙏 mi mamá se puso mal en Candarave y viajé de madrugada. Allá no hay señal. Recién bajo a Tacna. ¿Todavía tengo el trabajo?'],
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Preguntarle cómo está su mamá, ofrecerle entrar el lunes si lo confirma el jueves y avisarle a Jhon que es respaldo, sin prometerle nada.',
        res: { q: 'buena', fx: { personas: 6, etica: 3, tiempo: -2 }, flags: ['wilber_reprograma'], envia: [['wilber', 'Wilber, qué pena lo de tu mamá. ¿Cómo está? Podemos mover tu ingreso al lunes a las 7:00. Confírmame el jueves, por favor, para avisar a Planillas.'], ['jhon', 'Jhon, gracias por responder. Por ahora el puesto tiene a alguien; te tengo como primera opción si se libera esta semana. Te escribo el jueves, sea cual sea la respuesta.']],
          out: 'Wilber responde: «Gracias señorita, de verdad. Está mejor, la llevamos al centro de salud». Walter refunfuña un poco por el operario de menos, pero entiende.',
          pro: { ok: 'Respondes como persona primero, proteges la operación con un respaldo y eres honesta con Jhon.', risk: 'Si Wilber no confirma el jueves, cumple con Jhon.', info: 'Revisa el contacto de emergencia de Wilber: hoy no sirvió.' },
          kusi: ['feliz', 'Primero la persona. Después la planilla.'] } },
      { id: 'b', label: 'Agradecerle el aviso y explicarle que el puesto pasará al siguiente de la lista: el inventario no espera.',
        res: { q: 'aceptable', fx: { personas: -2, tiempo: 3 }, flags: ['wilber_reemplazo'], envia: [['wilber', 'Wilber, lamento lo de tu mamá. Por el inventario, el puesto pasará al siguiente de la lista. Si se abre otra vacante, te escribo.']],
          out: 'Wilber responde: «Entiendo». Jhon entra el jueves. Es una decisión defendible, aunque Wilber no tuvo la culpa de lo que pasó.',
          pro: { ok: 'Proteges el inventario con claridad.', risk: 'Una emergencia familiar real merece al menos una opción.', info: 'Un respaldo no obliga a cerrar la puerta a quien tuvo una emergencia.' },
          kusi: ['pensando', 'Defendible… pero frío.'] } },
      { id: 'c', label: 'No responderle y anotarlo en el Excel como «no recontratable».',
        res: { q: 'riesgosa', fx: { personas: -6, etica: -4 }, flags: ['wilber_vetado'],
          out: 'Wilber espera respuesta toda la tarde. En el Excel de seguimiento queda una etiqueta que lo acompañará en cualquier proceso futuro, por una emergencia de su mamá.',
          pro: { ok: 'Ninguno.', risk: 'Etiquetar a alguien sin saber qué pasó es injusto y deja un registro difícil de justificar.' },
          kusi: ['indignado', '¡Por una emergencia de su mamá!'] } },
    ],
    rules: [[BP, 'Antes de decidir sobre un ingreso que no llegó, averigua qué pasó.'], [LEY, 'Los datos de un postulante, incluidas las etiquetas que le pones, deben ser exactos y tener una finalidad (Ley 29733).']],
    mirada: {
      ve: 'Wilber no faltó por desinterés: le pasó lo que a cualquiera le puede pasar en una familia con alguien enfermo en la sierra, sin señal. Una profesional distingue entre quien no se presenta y quien no pudo hacerlo, y no confunde proteger la operación con castigar.',
      visual: { tipo: 'balanza', a: { t: 'Cerrarle la puerta', items: ['El inventario tiene a Jhon', 'Una tarea menos'] }, b: { t: 'Reprogramar con respaldo', items: ['Wilber entra el lunes si confirma', 'Jhon sabe en qué está', 'La empresa trata bien a su gente desde el día uno'] } },
    },
  },
  {
    id: 'h7', t: '17:45', ch: 'sistema', who: 'kelly', titulo: 'El T-Registro se cuelga', banner: 'assets/esc/reloj.webp', show: ['cumplimiento', 'tiempo', 'confianza'],
    body: (n, F) => `<p>A las 17:45 Kelly te llama a su escritorio. La Clave SOL entra, pero el T-Registro <mark class="clave">se queda cargando</mark> en la última pantalla. Quedan dos altas: un vendedor y Yesenia.</p><p>${F.has('kelly_lunes') ? 'Kelly tiene los ojos rojos: anoche se fue a las diez.' : 'Kelly suspira: «Menos mal que lo demás lo avancé desde el viernes».'} Tu bus sale a las 18:30.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Quedarte con Kelly: tú le dictas los datos verificados mientras ella reintenta, hasta que entren las dos altas hoy.',
        res: { q: 'buena', fx: { cumplimiento: 6, tiempo: -4 }, rel: { kelly: 1 }, flags: ['altas_a_tiempo'],
          out: 'A las 19:10 entra la última alta. Kelly guarda las constancias en PDF. Pierdes el bus de las 18:30 y tomas una combi a la avenida Bolognesi. Llegas cansada, pero sin pendientes.',
          pro: { ok: 'Cumples el plazo legal y no dejas sola a Kelly con un problema que también es tuyo.', risk: 'Hoy salió. Si el sistema sigue caído hasta medianoche, guarden pantallazos y fecha de cada intento.' },
          kusi: ['celebra', '¡Siete altas, siete constancias!'] } },
      { id: 'b', label: 'Proponerle a Kelly registrar las dos altas mañana a primera hora, con la fecha de hoy.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, tiempo: 3 }, rel: { kelly: -1 }, flags: ['alta_atrasada'],
          out: 'Kelly duda: «El sistema guarda la fecha en que la registré». Mañana lo hará, pero el registro mostrará que fue fuera de plazo.',
          pro: { ok: 'Llegas a tu bus.', risk: 'El alta va dentro del día del ingreso. Registrarla después deja constancia de un incumplimiento.' },
          kusi: ['preocupado', 'El sistema recuerda la hora real.'] } },
      { id: 'c', label: 'Irte a tu bus: el alta es tarea de Planillas y Kelly sabe hacerlo.',
        res: { q: 'aceptable', fx: { tiempo: 2, confianza: -2 }, rel: { kelly: -1 }, flags: ['altas_a_tiempo'],
          out: 'Kelly se queda sola hasta las 19:40. Las altas entran. Al día siguiente te saluda con un «hola» más corto que de costumbre.',
          pro: { ok: 'Respetas que es su función.', risk: 'Hoy fueron ocho ingresos que tú coordinaste. Un equipo pequeño se sostiene ayudándose.' },
          kusi: ['pensando', 'Era su tarea… pero era su noche también.'] } },
    ],
    rules: [[LEY, 'El alta en T-Registro se registra dentro del día de ingreso (D.S. 018-2007-TR).'], [BP, 'Si el sistema falla, guarda evidencia de cada intento.']],
    mirada: {
      ve: 'El plazo del alta no sabe que la web de SUNAT está lenta ni que tu bus sale a las 18:30. Una profesional sabe que el proceso de selección termina cuando la persona está en planilla, y que Planillas también es su equipo.',
      visual: { tipo: 'linea', titulo: 'El martes de las altas', hitos: [['07:00', 'Contratos'], ['08:00', 'Seguridad'], ['13:00', 'Wilber aparece'], ['17:45', 'El sistema se cuelga'], ['19:10', 'Última alta']] },
    },
  },
  {
    id: 'h8', t: '19:20', ch: 'whatsapp', who: null, titulo: 'El primer día, contado', banner: 'assets/foto2/celebra-tablet.webp', show: ['personas', 'confianza', 'calidad'],
    body: (n, F) => { const e = E(F); return `<p>${e.n} te escribe desde el paradero, de regreso a casa. Fue su primer día de supervisión en Pacífico Sur.</p><p>«Gracias por todo hoy. <mark class="clave">¿Le puedo preguntar algo?</mark>»</p>`; },
    type: 'ask', max: 2, prompt: 'Antes de que te pregunte, tú también quieres saber algo. Elige dos preguntas.',
    opts: [
      { id: 'como', label: '¿Cómo te sentiste hoy?', info: F => F?.has('induccion_saltada') ? `«${E(F).ella ? 'Perdida' : 'Perdido'}, la verdad. Me metieron al turno sin clave del WMS y sin saber dónde estaba cada cosa. Pero ya mañana será otro día.»` : `«Bien ${E(F).ella ? 'recibida' : 'recibido'}. Nunca me había pasado que alguien me esperara en el portón con mi nombre escrito.»` },
      { id: 'julio', label: '¿Cómo te fue con don Julio?', info: F => F?.has('induccion_mixta') ? '«Ese señor sabe todo. Me enseñó dónde se esconden los faltantes y quién del turno noche es el que de verdad manda. Voy a aprender mucho de él.»' : '«Lo vi poco. Dicen que cubrió el puesto estas semanas. Me gustaría conversar con él.»' },
      { id: 'falta', label: '¿Qué te faltó hoy?', info: F => F?.has('bienvenida_expuesta') ? '«Que no se supiera lo que gano. En el almuerzo ya lo comentaban. No sé cómo se enteraron.»' : '«Saber qué se espera de mí en el inventario. Walter dice «que cuadre», pero me gustaría ver los números del año pasado.»' },
      { id: 'pregunta', label: '¿Qué me querías preguntar?', info: '«Si es normal que el primer día sea tan intenso. Y si la reunión de fin de mes es también conmigo, para ir preparando mis primeros números.»' },
    ],
    res: picks => ({
      q: null,
      fx: { personas: 3, calidad: picks.includes('falta') ? 3 : 1 },
      flags: picks.map(p => 'dia1_' + p),
      out: picks.includes('falta') ? 'Anotas en tu cuaderno: «Mandar números del inventario anterior». Mañana se los pides a Walter.' : 'Le respondes con un «nos vemos mañana» y guardas el celular. El primer día salió.',
      kusi: ['feliz', 'Escuchar al nuevo el primer día es la mejor inducción.'],
    }),
    mirada: {
      ve: 'La persona nueva casi nunca dice qué le faltó, salvo que alguien le pregunte el primer día. Una profesional pregunta, porque lo que hoy es una incomodidad pequeña puede ser, en tres meses, el motivo de una renuncia.',
      visual: { tipo: 'embudo', titulo: 'Tu martes en números', niveles: [['Ingresos previstos', 8], ['Ingresaron hoy', 7], ['Altas registradas', 7], ['Con un plan para el lunes', 1]] },
    },
  },
];
