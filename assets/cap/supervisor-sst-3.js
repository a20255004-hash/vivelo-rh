// Supervisor/a de SST · Capítulo 3 · «El comité» · Semana 1, miércoles.
// Hilo de las dos semanas: una planta de pota y conservas en Paita, un año después del accidente de Hugo en la cortadora.
// Normas citadas (texto oficial en docs/normas/txt, publicado en El Peruano):
// - D.S. 005-2012-TR: art. 38 (funcionamiento efectivo del comité); art. 42 (funciones: conocer documentos, investigar,
//   vigilar, reunirse mensualmente); art. 43 (entre 4 y 12 miembros); art. 49 (los trabajadores eligen titulares y suplentes);
//   art. 56 (presidente, secretario —responsable del servicio de SST o miembro elegido— y miembros); art. 67 (reuniones dentro
//   de la jornada, en lugar adecuado); art. 68 (sesión ordinaria mensual); art. 69 (quórum: mitad más uno; si no lo hay, nueva
//   reunión dentro de los 8 días siguientes con los asistentes que hubiere); art. 70 (acuerdos por consenso o mayoría simple);
//   art. 71 (acta en el libro de actas; copia a cada integrante y a la máxima instancia de gerencia); art. 73 (protección de
//   los miembros trabajadores); art. 98 (reuniones fuera de jornada se remuneran); art. 105 (acto de hostilidad: obstaculizar
//   las funciones del comité sin causa objetiva).

export const CAP = {
  n: 3, titulo: 'El comité', dia: 'Semana 1, miércoles', foto: 'assets/3d/scenes/reunion.webp',
  lugar: 'Productos Mar de Piura · Planta de Paita',
  inicio: '07:20', fin: '18:30', cierreHora: '18:10',
  apertura: 'Miércoles. El comité de SST no se reúne desde junio. Hoy, a las 15:00, vuelve a sesionar. Si llega a sesionar.', boton: 'Buscar a Flor',
  kusi: 'Un comité que funciona es la mitad de tu trabajo hecho por muchas manos. ¡Hoy se despierta!',
  lead: 'Escuchaste a Flor, revisaste el libro de actas, defendiste que la reunión sea en horario de trabajo, armaste la agenda, peleaste el quórum y cerraste acuerdos con responsable y fecha.',
  reflexion: '¿Qué hace que un comité deje de ser «para la foto»?',
  siguiente: { n: 4, titulo: 'La cámara de frío', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'comite', p: 'Sesión del comité de SST', j: 'Ing. Julio Zapata · Presidente', d: 0, e: 'Hoy 15:00 · sala de capacitación' },
  { id: 'vacantes', p: 'Dos asientos vacíos de trabajadores', j: 'Flor Chunga', d: 0, e: 'Desde agosto' },
  { id: 'acta', p: 'Libro de actas', j: 'Secretaría del comité (tú)', d: 0, e: 'Última acta: junio' },
  { id: 'camara', p: 'Cámara 3 y ropa térmica', j: 'Wilson · Frío', d: 0, e: 'Recorrido mañana 05:30' },
];

export const FUTURO = {
  flor_confia: ['Flor te contó por qué dejó de creer en el comité.', 'Será tu aliada en la investigación del capítulo 7.'],
  comite_en_jornada: ['Defendiste que el comité se reúna en horario de trabajo y Carlos tuvo que soltar a su gente.', 'Carlos lo recordará cuando le pidas parar la línea. Capítulo 5.'],
  comite_fuera_jornada: ['Aceptaste mover el comité fuera de la jornada sin pago.', 'Flor lo anotó. Y la inspectora lo preguntará. Capítulo 9.'],
  comite_reunido: ['El comité sesionó con quórum por primera vez desde junio.', 'Sus acuerdos se vigilan desde el capítulo 4.'],
  comite_reconvocado: ['No hubo quórum: quedó en acta y se citó a nueva reunión.', 'La nueva sesión será en la semana 2. Capítulo 7.'],
  acta_con_responsables: ['El acta tiene acuerdos con responsable y fecha, y una copia fue a la gerencia.', 'La inspectora la pedirá. Capítulo 9.'],
  teresa_en_comite: ['Teresa Panta, suplente de eviscerado, entró al comité.', 'Aparece de nuevo en el capítulo 6.'],
};

export const CHATS = {
  julio: { n: 'Ing. Julio Zapata', sub: 'Gerente de Operaciones · Presidente del comité', who: 'julio-sst' },
  carlos: { n: 'Carlos Ruiz', sub: 'Jefe de producción', who: 'produccion' },
  flor: { n: 'Flor Chunga', sub: 'Representante en el comité', who: 'delegada' },
  yesenia: { n: 'Yesenia Távara', sub: 'Asistente de SST', c: '#2E7D6B' },
  comite: { n: 'Comité SST Mar de Piura', sub: '8 integrantes', c: '#F2A900' },
};

export const WSP = [
  { chat: 'comite', t: '06:45', de: 'Yesenia', txt: 'Recordatorio: sesión ordinaria del comité HOY 15:00, sala de capacitación. Agenda en camino 📋' },
  { chat: 'flor', t: '07:05', de: 'Flor', txt: 'Ya estoy en planta, inge. La espero en el comedor antes de que entre el turno ☕' },
  { chat: 'carlos', t: '10:10', de: 'Carlos', txt: 'A las 3 entra la pota de Talara. No puedo soltar a Segundo ni a Lucía. Que el comité sea a las 6:30.' },
  { chat: 'julio', t: '14:50', de: 'Julio', txt: 'Estoy en llamada con Lima. Empiecen, llego en 10.' },
  { chat: 'comite', t: '17:30', de: 'Flor', txt: 'Gracias a todos. Hace mucho no salía de una reunión con tareas 🙏', si: 'comite_reunido' },
];

export const CORREOS = [
  { t: '07:00', de: 'Yesenia Távara', para: 'Supervisor/a de SST', asunto: 'Integrantes del comité (según la última acta)', html: '<p>Inge, según el acta de junio el comité tiene 8 integrantes:</p><p><strong>Por la empresa:</strong> Ing. Julio Zapata (presidente), Carlos Ruiz, Ing. Marta Chero (calidad) y el responsable de SST (secretario/a: ahora usted).</p><p><strong>Por los trabajadores:</strong> Flor Chunga, Lucía Ramos y Segundo Sosa. El cuarto asiento quedó vacío cuando Marco Correa renunció en agosto. Suplentes elegidas: Teresa Panta (eviscerado).</p>' },
];

export const QUIZ = [
  { q: 'El comité tiene 8 integrantes. ¿Cuál es el quórum mínimo para sesionar?', ops: ['3', '4', '5', '8'], ok: 2, por: 'El art. 69 del D.S. 005-2012-TR fija la mitad más uno de sus integrantes: 5 de 8.' },
  { q: 'Si no hay quórum, ¿qué dice el reglamento?', ops: ['Se sesiona igual', 'Se cancela hasta el próximo mes', 'Dentro de los 8 días siguientes se cita a nueva reunión, que se realiza con los asistentes que hubiere', 'Decide el gerente'], ok: 2, por: 'Art. 69: el presidente cita a nueva reunión dentro de los ocho días; se levanta acta en cada caso.' },
  { q: 'Producción pide que el comité se reúna después del turno. Según el reglamento…', ops: ['Está bien si es voluntario', 'Las reuniones son dentro de la jornada; si son fuera, se remuneran', 'Las reuniones son siempre los sábados', 'No hay regla'], ok: 1, por: 'Arts. 67 y 98 del D.S. 005-2012-TR.' },
  { q: '¿A quién se entrega copia del acta de cada sesión?', ops: ['A nadie', 'A cada integrante y a la máxima instancia de gerencia', 'Solo a SUNAFIL', 'Solo al presidente'], ok: 1, por: 'Art. 71 del reglamento.' },
  { q: 'Un acuerdo del comité está bien escrito cuando…', ops: ['Dice «se verá»', 'Tiene qué se hará, quién lo hará y para cuándo', 'Lo firma solo el presidente', 'Es largo'], ok: 1, por: 'Sin responsable ni fecha, el comité no puede vigilar si se cumplió.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '07:30', ch: 'presencial', who: 'delegada', titulo: 'Flor', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Comedor de la planta', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Flor Chunga tiene 44 años, es fileteadora desde los 19 y viene de Colán en la combi de las 5:40. Te espera con dos tazas de café de olla y un cuaderno de tapa dura.${F.has('tablero_honesto') ? ' «Vi la pizarra. 34. Rosa lloró cuando la vio, inge. De alivio.»' : ''}</p><p>«Antes de que entremos a esa sala, pregúnteme lo que quiera.» <mark class="clave">Tienes tiempo para dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Flor.',
    opts: [
      { id: 'porque', label: '¿Por qué el comité dejó de reunirse?', info: '«Porque el presidente es el ingeniero Julio y nunca convocaba. Y cuando nos reuníamos era a las seis y media, después del turno, sin pago. La gente se cansó. Yo me quedaba porque si no, ¿quién?»' },
      { id: 'marco', label: '¿Por qué renunció Marco?', info: '«Marco reclamó en una reunión por la cortadora, antes de lo de Hugo. Después le cambiaron de turno tres veces en un mes. Renunció. Nadie le dijo nada directamente, pero todos entendimos.» Baja la voz. «Por eso a las chicas les da miedo entrar.»' },
      { id: 'quiere', label: '¿Qué tendría que pasar hoy para que valga la pena?', info: '«Que salgamos con tareas con nombre y fecha. Y que la próxima vez se revise si se hicieron. Eso nunca pasó.»' },
      { id: 'suplente', label: '¿Quién podría ocupar el asiento vacío?', info: '«Teresa Panta, de eviscerado. Salió elegida suplente. Es callada, pero sabe todo lo que pasa en esas mesas. Tiene tres hijos y miedo de perder el trabajo, como todas.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 4, confianza: 3 }, rel: { delegada: 1 }, flags: ['flor_confia'],
      cartera: { vacantes: picks.includes('suplente') ? 'Teresa Panta, suplente elegida, puede ocupar el asiento' : 'Asiento vacío desde que Marco renunció', comite: picks.includes('porque') ? 'Problema de fondo: presidente que no convoca y reuniones fuera de turno' : 'Sesión hoy 15:00' },
      out: picks.includes('marco') ? 'Anotas «Marco: cambios de turno tras reclamar». Flor ve que lo anotas y no te detiene. «Si eso se repite, inge, nadie va a hablar en esa sala.»' : 'Flor cierra su cuaderno. «Ya sabe lo que yo sé. Ahora vamos a ver si la sala cambia.»',
      kusi: ['pensando', 'El miedo también está en la agenda, aunque nadie lo escriba.'],
    }),
    rules: [[LEY, 'D.S. 005-2012-TR, art. 105: obstaculizar sin causa objetiva las funciones de los miembros del comité es acto de hostilidad.'], [LEY, 'Art. 73: los miembros trabajadores tienen protección contra el despido incausado durante su función y hasta seis meses después.']],
    mirada: {
      ve: 'La representante de los trabajadores en el comité carga con una doble presión: la de sus compañeras, que esperan resultados, y la de la empresa, que a veces la ve como un estorbo. Escucharla antes de la reunión te dice qué está en juego de verdad.',
      visual: { tipo: 'linea', titulo: 'Cómo se apagó el comité', hitos: [['Antes del accidente', 'Marco reclama por la cortadora'], ['Accidente de Hugo', 'Reunión «para la foto»'], ['Agosto', 'Marco renuncia tras cambios de turno'], ['Junio a hoy', 'Ninguna sesión']] },
    },
  },
  {
    id: 'c2', t: '09:00', ch: 'documento', who: null, titulo: 'El libro de actas', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de SST', show: ['cumplimiento', 'calidad'],
    body: () => `<p>El libro de actas es un cuaderno legalizado de tapa negra, con el lomo despegado. Las últimas hojas escritas son de junio, con la letra apurada del secretario anterior.</p><p><mark class="clave">Revisa qué dice y qué falta</mark>, porque desde hoy el libro está a tu cargo.</p>`,
    type: 'flag', prompt: 'Marca lo que incumple el reglamento o conviene corregir.',
    doc: { t: 'Libro de actas del comité de SST · acta de junio', sub: 'Productos Mar de Piura S.A.C.' },
    lines: [
      { id: 'hora', t: 'Hora de inicio: 18:40 (fuera del turno). Lugar: comedor, después de la limpieza.', bad: LEY, why: 'Las reuniones se hacen dentro de la jornada, en un lugar adecuado que da el empleador (art. 67). Si son fuera de jornada, se remuneran (art. 98).' },
      { id: 'asist', t: 'Asistentes: 5 de 8. Quórum: sí.' },
      { id: 'acuerdo', t: 'Acuerdo 1: «Se verá el tema de los candados». Responsable: —. Plazo: —.', bad: BP, why: 'Sin responsable ni plazo, nadie puede controlar el cumplimiento del acuerdo, que es función del comité (art. 42 s).' },
      { id: 'copia', t: 'Copia del acta entregada a: (en blanco).', bad: LEY, why: 'El art. 71 pide entregar copia a cada integrante y a la máxima instancia de gerencia.' },
      { id: 'mensual', t: 'Próxima sesión: «por coordinar».', bad: LEY, why: 'El comité se reúne en forma ordinaria una vez por mes, en día previamente fijado (art. 68).' },
      { id: 'firma', t: 'Firmas: presidente, secretario y tres miembros.' },
      { id: 'vacante', t: 'Nota al margen, en lápiz: «Marco renunció. Ver quién entra».', duda: 'Existe una suplente elegida. ¿Por qué nadie la incorporó en cuatro meses?' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Ves que el acta está incompleta, pero se te escapan cosas que el reglamento exige.' : `Encontraste ${hitsLey} incumplimientos. El acta de junio cuenta, sin quererlo, por qué el comité se apagó: reuniones a deshora, acuerdos sin dueño y nadie que vea las copias.`,
      cartera: { acta: missLey ? 'Acta de junio revisada' : 'Desde hoy: reunión en jornada, acuerdos con dueño y copia a gerencia' },
      pro: { ok: 'Leer el acta anterior te dice qué corregir en la próxima.', info: 'El comité puede tener entre 4 y 12 integrantes según acuerdo (art. 43). Lo importante no es el número, sino que funcione.' },
      kusi: missLey ? ['pensando', 'Hay reglas del comité que no conocías…'] : ['curioso', '¡El acta explica por qué murió el comité!'],
    }),
    rules: [[LEY, 'D.S. 005-2012-TR, arts. 67, 68 y 71: en jornada, mensual en día fijado y con acta entregada a integrantes y gerencia.']],
    mirada: {
      ve: 'Un libro de actas no es solo un requisito: es la memoria de lo que el comité prometió. Cuando los acuerdos no tienen dueño, el comité se convierte en un lugar donde se habla y no pasa nada.',
      visual: { tipo: 'cambio', titulo: 'El acta de junio y la de hoy', pares: [['18:40, después del turno', '15:00, dentro de la jornada'], ['«Se verá»', 'Qué, quién y cuándo'], ['Copia a: —', 'Copia a cada integrante y a gerencia'], ['«Por coordinar»', 'Fecha fija cada mes']] },
      normas: [{ ley: 'D.S. 005-2012-TR, art. 69', dice: 'El quórum mínimo es la mitad más uno de los integrantes. Si no se alcanza, dentro de los ocho días siguientes el presidente cita a nueva reunión, que se realiza con los asistentes que hubiere, y se levanta acta en cada caso.', practica: 'Con 8 integrantes, se necesitan 5 presentes.' }],
    },
  },
  {
    id: 'c3', t: '10:20', ch: 'presencial', who: 'produccion', titulo: 'Las 15:00', banner: 'assets/3d/scenes/planta.webp', lugar: 'Línea de recepción', show: ['cumplimiento', 'personas', 'tiempo', 'confianza'],
    body: (n, F) => `<p>Carlos está en recepción, con el celular en una mano y la tablilla de pesos en la otra. Entra un camión de Talara con doce toneladas de pota.${F.has('limpieza_parada') ? ' Todavía tiene en la cara lo del lunes.' : ''}</p><p>«A las tres no te puedo soltar a Segundo ni a Lucía. Es la hora pico. Que el comité sea a las seis y media, como siempre. <mark class="clave">Total, es voluntario</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mantener las 15:00: el comité es en horario de trabajo. Ofrecerle ayuda para cubrirlos: Yesenia pide a dos operarios del área de empaque, que hoy tiene poca carga.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 3, confianza: 1, tiempo: -1 }, rel: { produccion: -1, delegada: 1 }, flags: ['comite_en_jornada'], cartera: { comite: 'Hoy 15:00 · Segundo y Lucía cubiertos por empaque' },
          out: 'Carlos te mira largo. «¿Y si se me atrasa la pota?» Le dices que el comité dura una hora y que empaque está libre. Acepta a regañadientes: «Una hora. Ni un minuto más».',
          pro: { ok: 'Defiendes la regla y resuelves el problema de Producción en lugar de solo decir «no».', risk: 'Carlos acumula una segunda derrota contigo en tres días.', info: 'Las reuniones en jornada no son un favor: son la condición para que los trabajadores participen sin pagar con su tiempo.' },
          kusi: ['animo', '¡En horario de trabajo y con reemplazo!'] } },
      { id: 'b', label: 'Moverlo a las 18:30 y pedirle a Julio que se paguen como horas extra.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, personas: 0, tiempo: 1 }, rel: { produccion: 1 }, cartera: { comite: 'Hoy 18:30 · pago de horas extra por confirmar' },
          out: 'Carlos sonríe. Julio responde por WhatsApp: «Ok, pero solo esta vez». Flor te escribe: «¿A las 6:30 otra vez? Lucía tiene que recoger a su hijo». Al final mueves todo de vuelta a las 15:00, con media mañana perdida.',
          pro: { ok: 'Si es fuera de jornada, al menos se paga, como manda el reglamento.', risk: 'La hora sigue siendo un obstáculo para quienes cuidan a alguien en casa.' },
          kusi: ['pensando', 'Pagado sí, pero ¿a qué hora llegan las mamás?'] } },
      { id: 'c', label: 'Aceptar las 18:30, sin pago, como siempre: no vale la pena pelear por una hora.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, personas: -3, tiempo: 2 }, rel: { produccion: 1, delegada: -1 }, flags: ['comite_fuera_jornada'], cartera: { comite: 'Hoy 18:30 · sin pago' },
          out: 'Flor lee tu mensaje y responde con un solo «ok». A las 18:30 solo llegan tres personas. Ya lo había anticipado ella.',
          pro: { ok: 'Evitas otro choque con Carlos.', risk: 'Repetiste la condición que apagó al comité, y el reglamento dice que las reuniones fuera de jornada se pagan.' },
          kusi: ['triste', 'Como siempre… y por eso estaba muerto.'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR, art. 67: las reuniones del comité se hacen dentro de la jornada de trabajo.'], [LEY, 'Art. 98: las reuniones del comité fuera de jornada se remuneran.']],
    mirada: {
      ve: 'La hora de una reunión parece logística, pero decide quién participa. Una reunión después del turno, sin pago, deja fuera justo a quienes más necesitan ser escuchados: madres, padres y quienes viven lejos.',
      visual: { tipo: 'balanza', a: { t: '18:30, sin pago', items: ['No para la línea', 'Carlos contento'] }, b: { t: '15:00, con reemplazo', items: ['Cumple el reglamento', 'Llegan todos', 'Producción cubierta'] } },
    },
  },
  {
    id: 'c4', t: '12:10', ch: 'documento', who: null, titulo: 'La agenda', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de SST', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>Almuerzas en el escritorio un seco de cabrito de la cocina de la planta, frío. Tienes media hora para armar una agenda que quepa en una hora.${F.has('registro_corregido') ? ' El registro corregido de ayer está impreso, con los tres casos nuevos.' : ''}</p><p><mark class="clave">Una hora, ocho personas, cuatro meses de pendientes</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la agenda.', boton: 'Mandar la agenda al grupo',
    bloques: [
      { id: 'primero', t: 'Primer punto', n: 1, ops: [
        { id: 'p1', t: 'Incorporar a la suplente al asiento vacío de los trabajadores.', ok: true, por: 'Recompone el comité antes de decidir.' },
        { id: 'p2', t: 'Presentación institucional de la nueva supervisión de SST (20 minutos).', ok: false, por: 'Tu currículum no es un tema del comité.' },
      ] },
      { id: 'temas', t: 'Temas de fondo', n: 2, ops: [
        { id: 't1', t: 'Registro de accidentes corregido: Rosa, la fuga de amoníaco y la contrata.', ok: true, por: 'El comité conoce y analiza las estadísticas (art. 42).' },
        { id: 't2', t: 'Peligros críticos: bloqueo de la cortadora y cámara 3.', ok: true, por: 'Lo que puede matar o mutilar.' },
        { id: 't3', t: 'Elegir el color de los nuevos chalecos.', ok: false, por: 'Puede esperar.' },
      ] },
      { id: 'cierre', t: 'Cómo se cierra', n: 1, ops: [
        { id: 'c1', t: 'Acuerdos con responsable y fecha, y fecha fija de la próxima sesión.', ok: true, por: 'Sin esto, la reunión no deja nada.' },
        { id: 'c2', t: 'Foto grupal para el periódico mural.', ok: false, por: 'La foto ya la tienen de junio.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 2 : 0 }, rel: { delegada: q === 'buena' ? 1 : 0 },
        cartera: { comite: q === 'buena' ? 'Agenda: suplente, registro, peligros críticos, acuerdos con fecha' : 'Agenda larga y difusa' },
        out: q === 'buena' ? 'Flor responde en el grupo: «Por fin una agenda que se entiende». Marta, de calidad, pregunta si puede llevar los datos de cortes del tópico.' : 'La agenda llega al grupo. Nadie responde.',
        pro: { ok: 'Una agenda corta, con los temas graves y un cierre con acuerdos, hace que una hora rinda.', info: 'El comité debe aprobar el programa anual y el plan de capacitación (art. 42): llévalos a una próxima sesión.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Agenda clara!' : 'Menos protocolo, más acuerdos.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 42: el comité conoce los registros, analiza las estadísticas y vigila el cumplimiento de sus acuerdos.']],
    mirada: {
      ve: 'Una reunión del comité se gana o se pierde en la agenda. Si empieza con protocolo, termina sin tiempo para lo grave.',
      visual: { tipo: 'flujo', titulo: 'Una hora de comité', pasos: ['Recomponer el comité', 'Registro corregido', 'Peligros críticos', 'Acuerdos con dueño', 'Próxima fecha'] },
    },
  },
  {
    id: 'c5', t: '15:05', ch: 'llamada', who: null, titulo: 'Cuatro de ocho', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Sala de capacitación', show: ['cumplimiento', 'confianza', 'personas'],
    body: (n, F) => `<p>Sala de capacitación, 15:05. El ventilador de techo hace un ruido de motor viejo. Presentes: tú, Flor, Marta y Lucía.${F.has('comite_en_jornada') ? ' Segundo llega corriendo, con las botas mojadas: «Me soltaron, inge». Son cinco… pero Julio sigue en su llamada y Carlos no aparece.' : ' Segundo y Carlos no llegan. Julio sigue en su llamada con Lima.'}</p><p>El reglamento pide la mitad más uno: <mark class="clave">cinco de ocho</mark>. Haces tres llamadas rápidas.</p>`,
    type: 'calls',
    calls: [['Ing. Julio Zapata · presidente', 'Contesta en voz baja, en otra llamada', '«Empiecen sin mí, yo firmo después.» Le recuerdas que sin él no hay quórum seguro. Suspira: «Ya, ya. Cinco minutos».'], ['Carlos Ruiz · jefe de producción', 'No contesta', 'Te manda un audio: «Estoy con el camión de Talara. Lo que decidan, me avisan».'], ['Teresa Panta · suplente elegida', 'Contesta desde las mesas de eviscerado', '«¿Yo? ¿Ahora?» Silencio. «Si Flor dice que vaya, voy. Pero que alguien me cubra la mesa, que me descuentan.»']],
    prompt: '¿Cómo sigues?',
    choices: [
      { id: 'a', label: 'Esperar a Julio, incorporar a Teresa como titular en el asiento vacío —con un reemplazo para su mesa— y abrir la sesión cuando haya quórum.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 4, tiempo: -1 }, rel: { delegada: 1, 'julio-sst': 0 }, flags: ['comite_reunido', 'teresa_en_comite'], cartera: { vacantes: 'Teresa Panta incorporada como titular', comite: 'Sesión con quórum: 6 de 8' },
          out: 'A las 15:18 entra Julio con el celular en la mano y Teresa con el mandil todavía mojado. Seis de ocho. Julio, que nunca había presidido, te pide: «Lleva tú el orden, yo cierro».',
          pro: { ok: 'Esperaste el quórum en vez de simularlo y recompusiste el comité con la suplente elegida.', info: 'Que Julio presida en persona es un mensaje para toda la planta.' },
          kusi: ['celebra', '¡Quórum de verdad y un asiento ocupado!'] } },
      { id: 'b', label: 'Empezar con los cuatro presentes y que los demás firmen el acta después.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, confianza: -2 }, rel: { delegada: -1 }, cartera: { comite: 'Sesión sin quórum, firmas posteriores' },
          out: 'Conversan una hora. Al día siguiente, Julio firma sin leer y Carlos se niega a firmar acuerdos «que nadie le consultó». El acta no vale lo que parece.',
          pro: { ok: 'Avanzan con los temas.', risk: 'Un acta sin quórum, firmada después, es justo lo que una inspección observa.' },
          kusi: ['preocupado', 'Firmar después no es estar presente…'] } },
      { id: 'c', label: 'Dejar constancia en el acta de que no hubo quórum y citar a nueva reunión dentro de los ocho días, como dice el reglamento.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, tiempo: -2, personas: -1 }, flags: ['comite_reconvocado'], cartera: { comite: 'Sin quórum: nueva cita dentro de 8 días' },
          out: 'Haces lo correcto en el papel. Flor guarda su cuaderno despacio: «Otra vez será». Julio entra a las 15:20 y encuentra la sala vacía.',
          pro: { ok: 'Respetas el art. 69 al pie de la letra.', risk: 'Una llamada más y un reemplazo para Teresa habrían salvado la sesión.' },
          kusi: ['pensando', 'Legal… pero se te fue la oportunidad.'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR, art. 69: quórum de la mitad más uno; si no se alcanza, nueva reunión dentro de los 8 días.'], [LEY, 'Art. 49: los trabajadores eligen a sus representantes titulares y suplentes.']],
    mirada: {
      ve: 'El quórum no es un trámite: garantiza que las decisiones las tome un comité y no un grupo de amigos. Conseguirlo a veces exige paciencia y pequeñas soluciones, como cubrir la mesa de quien tiene miedo de que le descuenten.',
      visual: { tipo: 'embudo', titulo: 'El quórum de hoy', niveles: [['Integrantes', 8], ['Quórum necesario', 5], ['Presentes a las 15:05', 4]] },
    },
  },
  {
    id: 'c6', t: '16:20', ch: 'documento', who: null, titulo: 'Los acuerdos', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de capacitación', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>${F.has('comite_reunido') ? 'La sesión avanzó mejor de lo que esperabas. Teresa habló una sola vez, para contar que en su mesa el drenaje se tapa con tinta todas las tardes. Todos se quedaron callados.' : 'Con los que quedaron, armas una propuesta de acuerdos para la próxima sesión.'}</p><p>Quedan quince minutos y hay seis propuestas en la pizarra. <mark class="clave">Solo tres pueden salir hoy con responsable y fecha</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres acuerdos que saldrán hoy.', boton: 'Pasar al acta', resumen: 'Acordaron',
    cols: ['Propuesta', 'Responsable y fecha posibles'],
    rows: [
      { id: 'candados', cells: ['Sistema de candados personales y etiquetas para la cortadora', 'Mantenimiento · viernes'] },
      { id: 'puerta', cells: ['Reparar la apertura interior de la cámara 3', 'Wilson · jueves (repuesto de Lima o solución local)'] },
      { id: 'drenaje', cells: ['Rejillas y alfombras antideslizantes en eviscerado', 'Producción · dos semanas'] },
      { id: 'mural', cells: ['Renovar el periódico mural de SST', 'Yesenia · fin de mes'] },
      { id: 'polos', cells: ['Polos con el logo «Cero accidentes»', 'Recursos Humanos · sin fecha'] },
      { id: 'charla', cells: ['Charla de motivación con un expositor de Lima', 'Gerencia · por definir'] },
    ],
    score: { candados: 3, puerta: 3, drenaje: 3, mural: 1, polos: 0, charla: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 3 : 0 }, rel: { delegada: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['acta_con_responsables'] : [],
        cartera: { acta: q === 'buena' ? 'Acta con 3 acuerdos con dueño y fecha; próxima sesión fijada' : 'Acuerdos poco ligados a los peligros' },
        out: q === 'buena' ? 'Julio lee los tres acuerdos en voz alta y firma. «El drenaje en dos semanas, Carlos. Yo le aviso.» Flor fotografía el acta con su celular.' : 'Salen acuerdos, pero los peligros graves quedan para «la próxima».',
        pro: { ok: 'Los acuerdos del comité deben atacar lo grave y tener responsable y fecha, para que se puedan controlar.', info: 'El drenaje de eviscerado lo pidió Teresa. Si no se cumple, ella dejará de hablar.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Acuerdos con dueño!' : '¿Polos o candados?'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 42 s): el comité lleva en el libro de actas el control del cumplimiento de los acuerdos.']],
    mirada: {
      ve: 'Un comité se mide por lo que cambia en la planta, no por lo que conversa. Tres acuerdos cumplidos valen más que diez anotados.',
      visual: { tipo: 'matriz', x: 'Facilidad', y: 'Impacto en seguridad', cuadrantes: ['Ahora', 'Planifica', 'Si sobra tiempo', 'Descarta'], items: [['Candados', .7, .95], ['Puerta cámara 3', .6, .95], ['Drenaje eviscerado', .4, .8], ['Periódico mural', .9, .2], ['Polos', .8, .05], ['Charla de Lima', .5, .1]] },
    },
  },
  {
    id: 'c7', t: '17:45', ch: 'whatsapp', who: null, titulo: 'La copia del acta', banner: 'assets/esc/meta.webp', lugar: 'Oficina de SST', show: ['cumplimiento', 'confianza'],
    body: (n, F) => `<p>Escaneas el acta en la impresora multifunción, que solo funciona si le das un golpecito al costado. Yesenia te enseñó el truco.</p><p>El reglamento pide que una copia llegue a la máxima instancia de gerencia. <mark class="clave">Le escribes a Julio con el PDF adjunto</mark>.</p>`,
    type: 'compose', enviaA: 'julio', para: 'Para: Ing. Julio Zapata · Gerente de Operaciones y presidente del comité', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'adj', t: 'Qué le mandas', ops: [
        { id: 'a1', t: 'Ingeniero, le envío el acta de hoy. Copia también para cada integrante y para la gerencia general.', ok: true, por: 'Cumples el art. 71.' },
        { id: 'a2', t: 'Ingeniero, el acta queda en mi oficina por si la necesita.', ok: false, por: 'El acta no es para guardar: es para que se cumpla.' },
      ] },
      { id: 'resalta', t: 'Qué resaltas', ops: [
        { id: 'r1', t: 'El acuerdo más urgente es la puerta de la cámara 3, mañana con Wilson.', ok: true, por: 'Lo mortal, primero.' },
        { id: 'r2', t: 'Fue una sesión muy bonita.', ok: false, por: 'Julio necesita saber qué decidir, no cómo te sentiste.' },
      ] },
      { id: 'pide', t: 'Qué le pides', ops: [
        { id: 'p1', t: '¿Puede recordarle a Carlos lo del drenaje? Viene de usted como presidente.', ok: true, por: 'El presidente facilita la aplicación de los acuerdos (art. 57).' },
        { id: 'p2', t: 'Yo me encargo de todo, no se preocupe.', ok: false, por: 'Si el presidente no se involucra, el comité vuelve a apagarse.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'r1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 4 : 0 }, rel: { 'julio-sst': q === 'buena' ? 1 : 0 },
        cartera: { acta: q === 'buena' ? 'Acta enviada a integrantes y gerencia' : 'Acta en la oficina' },
        out: q === 'buena' ? 'Julio responde: «Recibido. Le escribo a Carlos ahora». Diez minutos después, Carlos te manda un mensaje seco: «Ya, el drenaje. Pero el viernes tenemos el contenedor de Busan y no hay tiempo para nada».' : 'Julio responde con un pulgar.',
        pro: { ok: 'El presidente del comité es quien facilita que los acuerdos se apliquen. Involucrarlo es parte de tu trabajo.', info: 'Carlos acaba de mencionar el contenedor del viernes. Anótalo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡El presidente presidió!' : 'Que el acta no se quede en un cajón.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 71: copia del acta a cada integrante y a la máxima instancia de gerencia.'], [LEY, 'Art. 57: el presidente facilita la aplicación y vigencia de los acuerdos.']],
    mirada: { ve: 'El acta llega a la gerencia para que los acuerdos tengan respaldo. Un/a buen/a secretario/a del comité no solo escribe: hace que lo escrito se mueva.' },
  },
];
