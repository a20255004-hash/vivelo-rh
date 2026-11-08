// Jefe/a de RR.HH. · Capítulo 5 · «La inspección» · Semana 1, viernes.
// Hilo de las dos semanas: crear desde cero el área de RR.HH. de una empresa familiar de transporte interprovincial.
// Normas citadas:
// - Ley 28806, Ley General de Inspección del Trabajo, art. 9: deber de colaboración con los inspectores del trabajo;
//   art. 14: medidas inspectivas de recomendación, advertencia y requerimiento.
//   https://lpderecho.pe/ley-28806-ley-general-de-inspeccion-del-trabajo-actualizada/
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=47
// - D.S. 019-2006-TR (Reglamento de la Ley 28806): tipifica infracciones a la labor inspectiva, como incumplir el deber
//   de colaboración del art. 9 de la Ley o perturbar la labor del inspector (art. 45.1 y 45.2) y negarse a facilitarle
//   la información y documentación necesarias (art. 46.3). No citamos montos de multa.
// - D.S. 017-2009-MTC, art. 30; Ley 29783 y D.S. 005-2012-TR; D.S. 004-2006-TR: citados en capítulos anteriores.

export const CAP = {
  n: 5, titulo: 'La inspección', dia: 'Semana 1, viernes', foto: 'assets/foto/supervisa.webp',
  lugar: 'Transportes Mantaro · Terminal de Huancayo',
  inicio: '07:30', fin: '19:30', cierreHora: '19:15',
  apertura: 'Viernes, 7:40. Una camioneta blanca se estaciona frente al terminal. Baja una mujer con un fólder azul y una credencial de SUNAFIL. Gonzalo te mira desde la ventana de Operaciones.', boton: 'Salir a recibirla',
  kusi: 'La inspección no es tu enemiga: es un espejo. ¡Muestra la casa como está!',
  lead: 'Recibiste a la inspectora, entendiste qué buscaba, presentaste lo que existía sin maquillar, protegiste a los conductores que declararon y te comprometiste con un plan realista.',
  reflexion: '¿Qué protege más a una empresa frente a un inspector: tener todo perfecto o decir la verdad sobre lo que falta?',
  siguiente: { n: 6, titulo: 'Tu equipo', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'inspeccion', p: 'Inspección de SUNAFIL', j: 'Inspectora Villanueva', d: 0, e: 'Hoy' },
  { id: 'horas', p: 'Horas de manejo', j: 'Patty · RR.HH.', d: 0, e: 'Una semana reconstruida' },
  { id: 'sst', p: 'Sistema de SST', j: 'Tú', d: 0, e: 'Casi no existe' },
  { id: 'declarantes', p: 'Conductores que declaran', j: 'Tú', d: 0, e: 'Con miedo' },
  { id: 'equipo', p: 'Reunión de los viernes con Patty', j: 'Tú', d: 0, e: 'Pendiente' },
];

export const FUTURO = {
  inspeccion_abierta: ['Recibiste a la inspectora y colaboraste desde el primer minuto.', 'Ella lo recordará en la comparecencia.'],
  inspeccion_demora: ['La empresa demoró a la inspectora.', 'Quedó anotado en el acta.'],
  expediente_honesto: ['Presentaste lo que existe y reconociste lo que falta, con un plan.', 'El lunes la inspectora revisará el plan.'],
  expediente_maquillado: ['El expediente tiene documentos hechos a última hora.', 'Puede volverse en contra en la comparecencia.'],
  declarantes_protegidos: ['Dijiste a los conductores que hablen con libertad, sin represalias.', 'Néstor confiará más en ti.'],
  patty_reunion: ['Tuviste tu reunión de los viernes con Patty y le dijiste que el fin de semana descanse.', 'El lunes contará lo que pasó.'],
};

export const CHATS = {
  grupo: { n: 'Jefaturas Mantaro', sub: 'Don Alberto, Gonzalo y tú', c: '#1F6F9E' },
  familia: { n: 'Directorio Rojas', sub: 'Don Alberto, Gonzalo, Mariela, Rubén y tú', c: '#8A5A2B' },
  'don-alberto': { n: 'Don Alberto Rojas', sub: 'Fundador y gerente general', who: 'don-alberto' },
  gonzalo: { n: 'Gonzalo Rojas', sub: 'Gerente de Operaciones', who: 'gonzalo' },
  patty: { n: 'Patty Ñaupari', sub: 'Asistente de RR.HH.', who: 'patty' },
  nestor: { n: 'Néstor Poma', sub: 'Conductor', who: 'nestor' },
  rosa: { n: 'Rosa Huamán', sub: 'Esposa de Freddy Quispe', c: '#B5561E' },
};

export const WSP = [
  { chat: 'gonzalo', t: '07:42', de: 'Gonzalo', txt: 'Dile que no estás. Que vuelva el lunes. Necesitamos el fin de semana.' },
  { chat: 'rosa', t: '09:15', de: 'Rosa', txt: 'Don Alberto vino a ver a Freddy. Le trajo fruta y le dijo que no se preocupe por nada. Gracias 🙏', si: 'apoyo_sin_condiciones' },
  { chat: 'rosa', t: '09:15', de: 'Rosa', txt: 'Vino un señor de la empresa con un papel para que Freddy firme. No firmó. ¿Qué es esto, señorita?', si: 'apoyo_condicionado' },
  { chat: 'nestor', t: '12:50', de: 'Néstor', txt: 'Le dije la verdad a la doctora. Que pase lo que tenga que pasar.', si: 'declarantes_protegidos' },
  { chat: 'patty', t: '19:00', de: 'Patty', txt: 'Jefa, el ingeniero dice que el sábado pasa por la oficina a "ordenar el Excel de horas". ¿Le abro?', si: 'patty_alerta' },
];

export const CORREOS = [
  { t: '16:50', de: 'SUNAFIL · Intendencia Regional de Junín', para: 'Transportes Mantaro S.A.C.', asunto: 'Medida de requerimiento y citación', html: '<p>Se notifica la medida de requerimiento emitida en la actuación inspectiva de hoy, referida a jornadas y tiempos de conducción, registro de control de asistencia y sistema de gestión de SST.</p><p>Se cita a la empresa a comparecer el lunes a las 9:00 con la documentación indicada en el anexo.</p>' },
];

export const QUIZ = [
  { q: 'Cuando llega un inspector de SUNAFIL, la empresa debe…', ops: ['Pedirle que vuelva otro día', 'Colaborar y facilitar su labor, como manda la Ley 28806', 'Llamar a un abogado y no decir nada', 'Esconder los documentos'], ok: 1, por: 'La Ley 28806 establece el deber de colaborar con los inspectores. Negarse o demorar puede ser una infracción.' },
  { q: '¿Qué es una medida de requerimiento?', ops: ['Una multa', 'Una orden del inspector para que la empresa corrija un incumplimiento en un plazo', 'Un premio', 'Una denuncia penal'], ok: 1, por: 'El art. 14 de la Ley 28806 regula las medidas de recomendación, advertencia y requerimiento.' },
  { q: 'Falta un registro que nunca se llevó. ¿Qué es lo correcto?', ops: ['Fabricarlo esta noche con fecha antigua', 'Reconocer que no existía, mostrar lo que sí hay y presentar un plan con fechas', 'Decir que se perdió', 'Culpar a la asistente'], ok: 1, por: 'Entregar documentos falsos es más grave que reconocer un incumplimiento.' },
  { q: 'Un conductor te pregunta si puede contarle al inspector lo de las 14 horas. Le dices…', ops: ['Que mejor no', 'Que hable con libertad y que no habrá represalias', 'Que primero te cuente a ti qué va a decir', 'Que diga que no recuerda'], ok: 1, por: 'Los trabajadores declaran libremente; presionarlos es grave.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '07:45', ch: 'presencial', who: null, titulo: 'La inspectora en la puerta', banner: 'assets/foto2/caminan.webp', lugar: 'Puerta del terminal', show: ['cumplimiento', 'confianza', 'etica'],
    body: () => `<p>La inspectora se presenta: Carmen Villanueva, de la Intendencia Regional de Junín. Viene por el accidente del bus 22. Quiere ver jornadas, descansos y capacitaciones.</p><p>Te vibra el celular. Es Gonzalo: «Dile que no estás. Que vuelva el lunes». <mark class="clave">La inspectora te está mirando</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Recibirla, ofrecerle una sala y un café, presentarte como responsable de RR.HH. y decirle que colaborarás con todo lo que pida.',
        res: { q: 'buena', fx: { cumplimiento: 6, confianza: 2, etica: 3 }, rel: { gonzalo: -1 }, flags: ['inspeccion_abierta'], cartera: { inspeccion: 'En curso, con colaboración' },
          out: 'La inspectora acepta el café y anota la hora de ingreso. «Gracias. No siempre nos abren la puerta tan rápido.» Gonzalo cierra la persiana de su oficina.',
          pro: { ok: 'Cumples el deber de colaboración y empiezas con buen pie.', risk: 'Gonzalo siente que lo desobedeciste delante de todos.', info: 'Anota todo lo que pide y lo que le entregas, con hora.' },
          kusi: ['animo', '¡Puertas abiertas!'] } },
      { id: 'b', label: 'Pedirle amablemente que espere a que llegue el gerente general, para ganar una o dos horas de orden.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, confianza: -2 }, rel: { gonzalo: 1 }, flags: ['inspeccion_demora'], cartera: { inspeccion: 'Inspectora esperando' },
          out: 'La inspectora mira su reloj y escribe algo. Espera 50 minutos en la sala de pasajeros, entre encomiendas. Cuando por fin entra, ya no sonríe.',
          pro: { ok: 'Ganas tiempo.', risk: 'Demorar al inspector puede considerarse obstrucción y queda en el acta.' },
          kusi: ['preocupado', 'Cincuenta minutos que pesan…'] } },
    ],
    rules: [[LEY, 'Deber de colaboración con los inspectores del trabajo (Ley 28806, art. 9).']],
    mirada: {
      ve: 'Una inspección después de un accidente no es una visita de cortesía. Lo primero que el inspector evalúa, aunque no lo diga, es si la empresa colabora o se esconde. Ese primer minuto pesa en todo lo que viene.',
      normas: [{ ley: 'Ley 28806, art. 9', dice: 'Los empleadores deben colaborar con los inspectores del trabajo.', practica: 'Se recibe al inspector, se le facilita el acceso y se le entrega lo que pide.' }],
    },
  },
  {
    id: 'i2', t: '08:40', ch: 'presencial', who: null, titulo: 'Qué busca la inspectora', banner: 'assets/foto/entrevista.webp', lugar: 'Sala de reuniones', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>La inspectora abre su fólder. ${F.has('inspeccion_demora') ? 'Todavía tiene el ceño fruncido por la espera.' : 'Es directa pero cordial.'} Te dice que puedes preguntarle lo que necesites para entender la actuación.</p><p>Tienes tiempo para <mark class="clave">dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para la inspectora.',
    opts: [
      { id: 'foco', label: '¿Qué va a revisar primero?', info: '«Las horas de manejo del conductor accidentado y de toda la flota. Luego, el registro de asistencia y el sistema de SST: comité, capacitaciones, registros.»' },
      { id: 'falta', label: '¿Qué pasa si algo no existe?', info: '«Lo anoto como incumplimiento y emito una medida de requerimiento con plazo. Lo que más complica a una empresa no es lo que falta: es lo que se inventa.»' },
      { id: 'declara', label: '¿Va a entrevistar a los conductores?', info: '«Sí, a solas. Le pido que nadie de la empresa esté presente ni les pregunte después qué dijeron.»' },
      { id: 'multa', label: '¿Cuánto podría ser la multa?', info: '«Eso depende de lo que encuentre y del tamaño de la empresa. Hoy no le puedo decir un número.»' },
    ],
    res: picks => ({
      q: null, fx: { calidad: 2, confianza: 1 }, cartera: { inspeccion: 'Sabes qué revisará' },
      out: picks.includes('falta') ? 'Te quedas con una frase de la inspectora: «lo que más complica es lo que se inventa». La anotas en grande.' : 'Ya sabes por dónde empezará. Le pides a Patty las tres carpetas de anoche.',
      kusi: ['curioso', 'Saber qué busca ayuda a mostrarlo bien.'],
    }),
    mirada: {
      ve: 'Preguntar al inspector qué revisará no es pedirle favores: es entender el proceso. Una jefa de RR.HH. que conoce la actuación puede organizar la información sin perder tiempo ni inventar nada.',
      visual: { tipo: 'flujo', titulo: 'La actuación inspectiva', pasos: ['Visita', 'Requerimiento de información', 'Entrevistas', 'Medida de requerimiento', 'Comparecencia'], aqui: 1 },
    },
  },
  {
    id: 'i3', t: '10:15', ch: 'documento', who: 'patty', titulo: 'El expediente', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de RR.HH.', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>${F.has('patty_descansa') ? 'Patty llegó a las 7 con las tres carpetas listas y cara de haber dormido.' : 'Patty tiene los ojos hinchados: durmió cuatro horas.'} Gonzalo entra sin tocar: «Hagan un registro de horas de todo el mes con fecha de cada día. Patty tiene buena letra».</p><p>Armas lo que entregarás. <mark class="clave">Elige las piezas de cada bloque</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del expediente.', boton: 'Entregar el expediente',
    bloques: [
      { id: 'horas', t: 'Horas de manejo', n: 2, ops: [
        { id: 'h1', t: 'El cuadro de horas reconstruido con hojas de ruta y cuaderno de llegadas, indicando que se armó esta semana.', ok: true, por: 'Es real y dices cómo se hizo.' },
        { id: 'h2', t: 'El formato nuevo de registro que se estrenó el miércoles en la ruta a Lima.', ok: true, por: 'Muestra que ya empezaste a corregir.' },
        { id: 'h3', t: 'Un registro del mes completo escrito hoy por Patty con fechas antiguas.', ok: false, por: 'Es un documento falso. Es mucho más grave que no tener registro.' },
      ] },
      { id: 'sst', t: 'Seguridad y salud', n: 2, ops: [
        { id: 's1', t: 'El informe preliminar del accidente y el registro de accidentes abierto ayer.', ok: true },
        { id: 's2', t: 'Una nota que reconoce que no hay comité de SST y propone fecha para elegirlo.', ok: true, por: 'Reconocer y planificar es mejor que esconder.' },
        { id: 's3', t: 'Listas de capacitación firmadas por conductores que nunca asistieron.', ok: false, por: 'Firmas de algo que no ocurrió: otra vez, documentos falsos.' },
      ] },
      { id: 'plan', t: 'Lo que viene', n: 1, ops: [
        { id: 'p1', t: 'El plan de 90 días con fechas: relevo nocturno, contratación, comité y reglamento.', ok: true },
        { id: 'p2', t: 'Una carta de Don Alberto explicando los 30 años de historia de la empresa.', ok: false, por: 'Emotiva, pero no responde a lo que se inspecciona.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -5, etica: q === 'riesgosa' ? -5 : 3, calidad: q === 'buena' ? 3 : 0 }, rel: { gonzalo: q === 'buena' ? -1 : 0, patty: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? ['expediente_maquillado'] : ['expediente_honesto'], cartera: { horas: q === 'riesgosa' ? 'Registro hecho hoy' : 'Cuadro real entregado' },
        out: q === 'buena' ? 'Le dices a Gonzalo que no: se entrega lo que existe. La inspectora revisa el cuadro de horas y levanta la vista: «¿Esto lo armaron ustedes? Es honesto». Anota las 14 horas.' : q === 'aceptable' ? 'Tu expediente es casi todo real, pero una pieza no aporta. La inspectora la deja de lado.' : 'Patty llena páginas con su buena letra. La inspectora compara una firma con la de la hoja de ruta y frunce el ceño.',
        pro: { ok: 'Lo verdadero, aunque incómodo, se defiende. Lo falso no.', risk: 'Un documento inventado convierte un incumplimiento en una falta de buena fe ante la autoridad.', info: 'Guarda copia y cargo de todo lo entregado.' },
        kusi: [q === 'buena' ? 'celebra' : q === 'riesgosa' ? 'indignado' : 'pensando', q === 'buena' ? '¡La verdad, ordenada!' : q === 'riesgosa' ? '¡Eso no se fabrica!' : 'Casi todo real.'],
      };
    },
    rules: [[LEY, 'Negarse a facilitar al inspector la información necesaria, o perturbar su labor, es infracción a la labor inspectiva (D.S. 019-2006-TR, arts. 45.2 y 46.3).'], [BP, 'Se presenta lo que existe, con un plan para lo que falta.']],
    mirada: {
      ve: 'La tentación de «arreglar» papeles la noche anterior es enorme, y casi siempre la pide alguien con poder a alguien sin poder. RR.HH. protege a su equipo cuando dice que no: Patty no tiene por qué firmar con su letra una mentira de la empresa.',
      visual: { tipo: 'balanza', a: { t: 'Expediente maquillado', items: ['Parece completo', 'Firmas que no cuadran', 'Falta de buena fe'] }, b: { t: 'Expediente honesto', items: ['Incumplimientos reconocidos', 'Plan con fechas', 'Credibilidad'] } },
    },
  },
  {
    id: 'i4', t: '12:10', ch: 'presencial', who: 'nestor', titulo: '«¿Le digo la verdad?»', banner: 'assets/foto/cafe.webp', lugar: 'Patio de buses', show: ['etica', 'personas'],
    body: (n, F) => `<p>La inspectora llamó a cuatro conductores. Néstor es el segundo. Antes de entrar, te para junto al bus 9. ${F.has('veteranos_fuera') ? 'Escuchó lo del plan de sacar a los mayores de 55.' : 'Tiene la gorra en las manos.'}</p><p>«Señora, ¿le digo lo de las 14 horas? <mark class="clave">¿O me van a botar como querían?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que hable con libertad, que la empresa no puede tomar represalias por lo que declare y que tú no le preguntarás qué dijo.',
        res: { q: 'buena', fx: { etica: 5, personas: 3 }, rel: { nestor: 1 }, flags: ['declarantes_protegidos'], cartera: { declarantes: 'Declaran libres' },
          out: 'Néstor asiente y entra. Sale media hora después, se pone la gorra y se va a su bus sin mirar atrás.',
          pro: { ok: 'Proteges la libertad de declarar.', info: 'No preguntes después qué dijo: ni tú ni nadie.' },
          kusi: ['feliz', 'Libre para decir la verdad.'] } },
      { id: 'b', label: 'Pedirle que diga la verdad, pero que también cuente lo que la empresa ya está corrigiendo.',
        res: { q: 'aceptable', fx: { etica: 0, cumplimiento: 1 },
          out: 'Néstor te mira raro: «¿Me está diciendo qué decir, señora?». Entra serio.',
          pro: { ok: 'Lo dices con buena intención.', risk: 'Cualquier indicación sobre qué declarar suena a presión.' },
          kusi: ['pensando', 'Mejor no le digas qué decir…'] } },
    ],
    mirada: { ve: 'Para un conductor con 18 años en la empresa, declarar ante el inspector es arriesgar su trabajo. La única respuesta que lo protege es la que no le dice qué decir: hable libre, nadie le va a preguntar.' },
  },
  {
    id: 'i5', t: '15:00', ch: 'documento', who: null, titulo: 'Lo que se puede cumplir', banner: 'assets/esc/meta.webp', lugar: 'Sala de reuniones', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: () => `<p>La inspectora te lee la medida de requerimiento: jornadas de conducción, registro de asistencia y sistema de SST. El lunes hay comparecencia. Llueve otra vez sobre el patio.</p><p>No todo se puede resolver en un fin de semana. Elige <mark class="clave">los tres compromisos</mark> que presentarás el lunes con fecha real.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres compromisos para el lunes.', boton: 'Comprometer estos tres', resumen: 'Te comprometiste a',
    cols: ['Compromiso', 'Por qué'],
    rows: [
      { id: 'relevo', cells: ['Relevo obligatorio en todas las rutas nocturnas largas', 'Es el riesgo más grave y ya empezó'] },
      { id: 'registro', cells: ['Registro de horas en toda la flota desde el lunes', 'Lo que permite probar que se cumple'] },
      { id: 'comite', cells: ['Convocar la elección de representantes al comité de SST esta semana', 'Lo exige la Ley 29783'] },
      { id: 'rit', cells: ['Tener el Reglamento Interno aprobado el lunes', 'Suena bien, pero no es posible en dos días'] },
      { id: 'uniformes', cells: ['Nuevos uniformes reflectivos', 'No responde a la medida'] },
    ],
    score: { relevo: 3, registro: 3, comite: 2, rit: -1, uniformes: -1 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0, tiempo: -1 },
        cartera: { sst: picks.includes('comite') ? 'Elección del comité esta semana' : 'Comité sin fecha' },
        out: picks.includes('rit') ? 'Prometes un reglamento en dos días. La inspectora levanta una ceja: «¿Seguro?».' : 'Tres compromisos con fecha. La inspectora los copia en su cuaderno: «El lunes los vemos».',
        pro: { ok: 'Prometer lo que puedes cumplir es lo que da credibilidad.', risk: 'Un compromiso imposible se convierte en un nuevo incumplimiento.', info: 'Para cada compromiso, define quién lo hace y qué documento lo prueba.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Compromisos que se pueden cumplir!' : '¿Todo esto se puede cumplir?'],
      };
    },
    rules: [[LEY, 'La medida de requerimiento ordena corregir incumplimientos en un plazo (Ley 28806, art. 14).']],
    mirada: {
      ve: 'Ante una medida de requerimiento, el impulso es prometerlo todo. Pero un inspector valora más tres compromisos cumplidos que diez anunciados. Priorizar también es una forma de honestidad.',
      visual: { tipo: 'linea', titulo: 'Lo que viene', hitos: [['Lunes', 'Comparecencia con evidencia'], ['Esta semana', 'Registro en toda la flota'], ['Jueves', 'Elección del comité de SST'], ['Este trimestre', 'Reglamento Interno']] },
    },
  },
  {
    id: 'i6', t: '17:30', ch: 'presencial', who: 'patty', titulo: 'La reunión de los viernes', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Oficina de RR.HH.', show: ['personas', 'tiempo'],
    body: (n, F) => `<p>La inspectora se fue. Quedan veinte papeles sobre la mesa y la cartera de Patty en la silla. ${F.has('patty_lidera') ? 'El lunes quedaron en revisar cada viernes las tres prioridades.' : 'Nunca se han sentado a conversar con calma.'}</p><p>Patty empieza a ordenar en silencio. Está agotada, y tú también. <mark class="clave">Te quedan cuarenta minutos de energía</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sentarte con ella veinte minutos: cómo está, qué aprendió esta semana y una regla para el fin de semana: nadie trabaja ni toca un registro sin hablar contigo.',
        res: { q: 'buena', fx: { personas: 5, tiempo: -2 }, rel: { patty: 1 }, flags: ['patty_reunion'], cartera: { equipo: 'Reunión hecha' },
          out: 'Patty se suelta: «Jefa, tengo miedo de que todo lo malo sea por mi culpa». Le dices que no. Antes de irse, te dice que Gonzalo le pidió su usuario del correo de RR.HH. «para mandar unas cosas». Se lo anotas para el lunes.',
          pro: { ok: 'Una conversación a tiempo previene errores de cansancio.', info: 'Las claves del correo de RR.HH. no se comparten: ni con un dueño.' },
          kusi: ['feliz', 'Veinte minutos que valen oro.'] } },
      { id: 'b', label: 'Dejar la reunión para la próxima semana: hoy ya no da más.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -2 },
          out: 'Patty dice «claro, jefa» y se va con la cartera apretada. No te cuenta lo que le pidió Gonzalo.',
          pro: { ok: 'Respetas tu propio cansancio.', risk: 'Lo que Patty no te dice hoy puede volver el lunes.' },
          kusi: ['pensando', 'Patty quería decirte algo…'] } },
    ],
    mirada: { ve: 'En las semanas más duras, la reunión con tu equipo es lo primero que se cae. Y es justo cuando más falta hace: la gente cansada y presionada guarda secretos, y los secretos se vuelven errores.' },
  },
  {
    id: 'i7', t: '18:40', ch: 'whatsapp', who: 'don-alberto', titulo: 'El informe a la familia', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Tu escritorio', show: ['confianza', 'calidad'],
    body: () => `<p>En el grupo «Directorio Rojas», Rubén pregunta: «¿Cuánto nos van a multar?». Mariela: «Necesito un número para el flujo de caja». Gonzalo no escribe.</p><p>Don Alberto te pide que expliques. <mark class="clave">Claro, sin alarmar y sin minimizar</mark>.</p>`,
    type: 'compose', enviaA: 'familia', para: 'Para: Directorio Rojas', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué pasó', ops: [
        { id: 'q1', t: 'Hoy SUNAFIL inspeccionó jornadas, registro de asistencia y SST, y emitió una medida de requerimiento. El lunes a las 9 comparecemos.', ok: true, por: 'Hechos, sin dramatizar.' },
        { id: 'q2', t: 'Fue un desastre, nos encontraron todo.', ok: false, por: 'Alarma y no ayuda a decidir.' },
      ] },
      { id: 'multa', t: 'Sobre la multa', ops: [
        { id: 'm1', t: 'Todavía no hay multa ni monto. Lo que más nos ayuda es cumplir lo requerido y no presentar nada que no sea real.', ok: true, por: 'Honesto y orientado a la acción.' },
        { id: 'm2', t: 'Calculo que serán unos cien mil soles.', ok: false, por: 'Es un número inventado: puede asustar o tranquilizar sin base.' },
      ] },
      { id: 'pide', t: 'Lo que necesitas', ops: [
        { id: 'p1', t: 'Necesito que Operaciones mantenga el relevo nocturno este fin de semana y que nadie toque los registros.', ok: true, por: 'Pedido concreto que protege la comparecencia.' },
        { id: 'p2', t: 'Les aviso cualquier novedad.', ok: null, por: 'Correcto, pero no pide nada a nadie.' },
      ] },
    ],
    res: sel => {
      const mal = sel.que === 'q2' || sel.multa === 'm2', buenas = ['q1', 'm1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -3 : 1, calidad: q === 'buena' ? 2 : 0 }, rel: { 'don-alberto': q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Don Alberto responde: «Ya escucharon. Nadie toca nada». Gonzalo, por fin, escribe: «Ok».' : mal ? 'Mariela responde con tres signos de interrogación. Rubén manda un audio de pánico.' : 'Todos leen. Mariela insiste en un número.',
        pro: { ok: 'Informas sin inventar y pides lo que necesitas.', risk: 'Un monto inventado se vuelve «la cifra» en la familia.' },
        kusi: [q === 'buena' ? 'animo' : 'preocupado', q === 'buena' ? '«Nadie toca nada». ¡Bien!' : 'Eso no calmó a nadie.'],
      };
    },
    mirada: {
      ve: 'Los dueños quieren un número porque el número les da control. Pero un número inventado es peor que ninguno. Lo que RR.HH. puede darles es claridad sobre el proceso y sobre lo que depende de ellos.',
      visual: { tipo: 'mensaje', titulo: 'Sin alarmar, sin minimizar', txt: 'Hoy SUNAFIL emitió una medida de requerimiento. Todavía no hay multa ni monto. Necesito que se mantenga el relevo nocturno y que nadie toque los registros.' },
    },
  },
];
