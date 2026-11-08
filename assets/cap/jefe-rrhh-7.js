// Jefe/a de RR.HH. · Capítulo 7 · «El reglamento» · Semana 2, martes.
// Hilo de las dos semanas: crear desde cero el área de RR.HH. de una empresa familiar de transporte interprovincial.
// Normas citadas:
// - D.S. 039-91-TR (Reglamento Interno de Trabajo): art. 3: obligatorio con más de 100 trabajadores; art. 2: el RIT regula,
//   entre otras materias, la admisión, las jornadas y horarios, el control de asistencia y las medidas disciplinarias;
//   art. 4: se presenta a la Autoridad Administrativa de Trabajo, su aprobación es automática con la presentación,
//   y se entrega a los trabajadores (no citamos el plazo de entrega).
//   https://misha.pe/tag/rit/
//   https://juris.pe/?p=41350
//   https://revistas.pucp.edu.pe/index.php/iusetveritas/article/download/16537/16883
// - Ley 27942 y su reglamento (procedimiento de hostigamiento sexual), citada en el capítulo 1.
// - D.S. 017-2009-MTC, art. 30 (tiempos de conducción), citado en el capítulo 2.
// - TUO del D.Leg. 728: las faltas graves y el despido solo proceden por las causas de la ley (capítulo 1).

export const CAP = {
  n: 7, titulo: 'El reglamento', dia: 'Semana 2, martes', foto: 'assets/esc/escritorio.webp',
  lugar: 'Transportes Mantaro · Oficina de RR.HH.',
  inicio: '07:30', fin: '19:30', cierreHora: '19:10',
  apertura: 'Martes. Sobre tu escritorio hay un anillado de 60 páginas con una nota de Mariela: «Lo bajé de internet. Es de una minera. Cámbiale el nombre y listo».', boton: 'Abrir el anillado',
  kusi: 'Un reglamento no es para asustar: es para que todos sepan a qué atenerse. ¡Dale!',
  lead: 'Limpiaste un reglamento copiado, escuchaste a quienes lo van a vivir, armaste sus capítulos clave, defendiste la consulta frente al apuro y trazaste la ruta para ponerlo en vigencia.',
  reflexion: '¿Para quién se escribe un reglamento interno: para la empresa, para los trabajadores o para el inspector?',
  siguiente: { n: 8, titulo: 'El directorio familiar', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'rit', p: 'Reglamento Interno de Trabajo', j: 'Tú', d: 0, e: 'Borrador copiado' },
  { id: 'consulta', p: 'Opinión de los trabajadores', j: 'Tú', d: 0, e: 'Sin consultar' },
  { id: 'directorio', p: 'Directorio familiar', j: 'Don Alberto', d: 0, e: 'Mañana' },
  { id: 'equipo', p: 'Patty', j: 'Tú', d: 0, e: 'Volviendo a la normalidad' },
  { id: 'comite', p: 'Elección del comité de SST', j: 'Tú', d: 0, e: 'Jueves' },
];

export const FUTURO = {
  rit_limpio: ['Sacaste del borrador las cláusulas ilegales y las que no eran de transporte.', 'Mariela lo verá mañana.'],
  rit_participativo: ['Decidiste consultar el reglamento con los trabajadores antes de presentarlo.', 'Los conductores lo sabrán.'],
  rit_rapido: ['El reglamento se presentará sin consulta, para mostrarlo pronto.', 'En el patio lo sentirán impuesto.'],
  rit_completo: ['El reglamento tiene capítulos de jornadas, asistencia, disciplina y hostigamiento.', 'Lo presentarás mañana.'],
  rit_ruta: ['Tienes la ruta para que el reglamento entre en vigencia.', 'La pedirá Don Alberto.'],
};

export const CHATS = {
  grupo: { n: 'Jefaturas Mantaro', sub: 'Don Alberto, Gonzalo y tú', c: '#1F6F9E' },
  familia: { n: 'Directorio Rojas', sub: 'Don Alberto, Gonzalo, Mariela, Rubén y tú', c: '#8A5A2B' },
  conductores: { n: 'Conductores Mantaro', sub: '90 conductores, despacho y tú', c: '#2F6B3F' },
  'don-alberto': { n: 'Don Alberto Rojas', sub: 'Fundador y gerente general', who: 'don-alberto' },
  gonzalo: { n: 'Gonzalo Rojas', sub: 'Gerente de Operaciones', who: 'gonzalo' },
  patty: { n: 'Patty Ñaupari', sub: 'Asistente de RR.HH.', who: 'patty' },
  nestor: { n: 'Néstor Poma', sub: 'Conductor', who: 'nestor' },
  mariela: { n: 'Mariela Rojas', sub: 'Gerente de Administración y Finanzas · hija', c: '#2E7D6B' },
  lucia: { n: 'Lucía Ramos', sub: 'Terramoza · de vuelta del descanso médico', c: '#A0336B' },
};

export const WSP = [
  { chat: 'mariela', t: '07:35', de: 'Mariela', txt: '¿Viste el reglamento? Para el jueves lo presentamos y le mandamos copia a la inspectora. Ganamos puntos 😉' },
  { chat: 'patty', t: '08:10', de: 'Patty', txt: 'Jefa, ya llegué. Traje pan de Sapallanga para la oficina 🥖', si: 'patty_respaldada' },
  { chat: 'lucia', t: '10:30', de: 'Lucía', txt: 'Gracias por llamarme, jefa. Nadie nos había preguntado a las terramozas nada de nada.' },
  { chat: 'conductores', t: '18:30', de: 'Wilber', txt: '¿O sea que el reglamento lo vamos a poder leer antes? Eso nunca había pasado.', si: 'rit_participativo' },
  { chat: 'gonzalo', t: '17:00', de: 'Gonzalo', txt: 'Ponle que el relevo es obligatorio en nocturnos. Si va a ser regla, que sea para todos, también para mí.', si: 'gonzalo_limite' },
];

export const CORREOS = [
  { t: '09:00', de: 'Freddy Quispe', para: 'Jefa de RR.HH.', asunto: 'Gracias', html: '<p>Jefa, ya estoy en mi casa con el brazo enyesado. La investigación sigue, pero ya revisaron la llanta y mis horas de las últimas 48. Gracias por no dejar que me culparan sin saber.</p><p>Freddy</p>', si: 'investigacion_justa' },
  { t: '15:00', de: 'Estudio Laboral Huancayo', para: 'Jefa de RR.HH.', asunto: 'Revisión del borrador de RIT', html: '<p>Recibimos su borrador. Podemos devolverle observaciones el jueves. Le recomendamos no presentarlo antes de esa revisión.</p>' },
];

export const QUIZ = [
  { q: '¿Qué empleadores están obligados a tener Reglamento Interno de Trabajo?', ops: ['Todos', 'Los que tienen más de 100 trabajadores', 'Solo los del Estado', 'Los que tienen sindicato'], ok: 1, por: 'El D.S. 039-91-TR lo exige a quienes tienen más de 100 trabajadores.' },
  { q: 'Según el D.S. 039-91-TR, ¿qué materias regula el RIT?', ops: ['Solo los sueldos', 'Admisión, jornadas, horarios, control de asistencia y medidas disciplinarias, entre otras', 'El precio de los pasajes', 'Las vacaciones del dueño'], ok: 1, por: 'El art. 2 enumera esas materias, entre otras.' },
  { q: '¿Cómo se aprueba el RIT?', ops: ['Lo firma el sindicato', 'Se presenta a la Autoridad Administrativa de Trabajo y la aprobación es automática con la presentación', 'Lo aprueba SUNAFIL en una inspección', 'No necesita nada'], ok: 1, por: 'El art. 4 del D.S. 039-91-TR regula la presentación; luego debe entregarse a los trabajadores.' },
  { q: 'Una cláusula dice «tres tardanzas en el mes son causa de despido automático». Es…', ops: ['Válida si está en el RIT', 'Riesgosa: el RIT no puede crear causas de despido distintas a las de la ley', 'Obligatoria', 'Una buena práctica'], ok: 1, por: 'Las causas de despido están en la ley; el RIT puede graduar sanciones, no inventar despidos.' },
  { q: 'Copiar el reglamento de otra empresa…', ops: ['Ahorra tiempo y funciona igual', 'Trae reglas que no corresponden al negocio y a veces cláusulas ilegales', 'Es obligatorio', 'Está prohibido por ley'], ok: 1, por: 'Un RIT se escribe para el trabajo real de la empresa.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'r1', t: '07:45', ch: 'documento', who: null, titulo: 'El reglamento de una minera', banner: 'assets/3d/scenes/mineria.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'calidad'],
    body: () => `<p>El anillado dice «Compañía Minera» en cada página, con el nombre tachado a lapicero. Habla de socavones, de campamentos y de guardias de 14 por 7. Nada de buses.</p><p>Lo lees con un café pasado. <mark class="clave">Marca lo que no puede quedar</mark>.</p>`,
    type: 'flag', prompt: 'Marca las cláusulas ilegales o que no sirven para Transportes Mantaro.',
    doc: { t: 'Borrador de Reglamento Interno de Trabajo', sub: 'Copiado de otra empresa · 60 páginas' },
    lines: [
      { id: 'tard', t: 'Tres tardanzas en el mes son causa de despido automático.', bad: LEY, why: 'El RIT no puede crear causas de despido: están en la ley. Puede graduar sanciones.' },
      { id: 'renuncia', t: 'El trabajador renuncia a reclamar cualquier beneficio que no esté en este reglamento.', bad: LEY, why: 'Los derechos laborales son irrenunciables. Esa cláusula no vale.' },
      { id: 'guardia', t: 'Régimen de guardias de 14 días de trabajo por 7 de descanso en campamento.', bad: BP, why: 'Es un régimen minero. Los conductores tienen sus propias reglas de conducción y descanso.' },
      { id: 'asist', t: 'El control de asistencia se registra al ingreso y a la salida de cada jornada.' },
      { id: 'celular', t: 'El trabajador debe tener su celular personal encendido las 24 horas para emergencias.', bad: BP, why: 'Obliga a estar disponible sin límite y fuera de la jornada. No es razonable.' },
      { id: 'pareja', t: 'Se prohíben las relaciones de pareja entre trabajadores.', bad: BP, why: 'Invade la vida privada. Lo que sí se puede regular son los conflictos de interés y el hostigamiento.' },
      { id: 'hostig', t: 'Procedimiento para prevenir y sancionar el hostigamiento sexual, con canal de denuncia.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'Quedan cláusulas ilegales en el borrador. Un abogado de un conductor las encontraría primero.' : `Tachas ${hitsLey + hitsBp} cláusulas. Del anillado de 60 páginas quedan unas 15 que sirven. Le escribes a Mariela: «Hay que escribirlo de nuevo».`,
      flags: missLey ? [] : ['rit_limpio'], cartera: { rit: missLey ? 'Borrador con cláusulas ilegales' : 'Borrador limpio, por reescribir' },
      pro: { ok: 'Un reglamento sin cláusulas ilegales es un reglamento que se puede aplicar.', risk: 'Una cláusula ilegal no se puede usar y desacredita todo el documento.', info: 'Usa lo que sirve como estructura, pero escribe pensando en un terminal de buses.' },
      kusi: missLey ? ['pensando', 'Algo ilegal se quedó…'] : ['celebra', '¡Adiós, socavones!'],
    }),
    rules: [[LEY, 'El RIT es obligatorio con más de 100 trabajadores (D.S. 039-91-TR, art. 3) y regula admisión, jornadas, asistencia y disciplina (art. 2).'], [LEY, 'Los derechos laborales son irrenunciables y las causas de despido las fija la ley.']],
    mirada: {
      ve: 'Copiar un reglamento parece eficiente, pero trae reglas de otro mundo y, a veces, ilegalidades que nadie revisó. En una empresa que nunca tuvo reglas escritas, el primer reglamento enseña qué tipo de empresa quiere ser.',
      visual: { tipo: 'cambio', titulo: 'Del reglamento copiado al propio', pares: [['Despido por tres tardanzas', 'Sanciones graduales'], ['Guardias de minería', 'Jornadas y relevos de conducción'], ['Celular 24 horas', 'Contacto solo en la jornada'], ['Prohibir parejas', 'Conflictos de interés y hostigamiento']] },
      normas: [{ ley: 'D.S. 039-91-TR, art. 2', dice: 'El RIT regula admisión, jornadas, horarios, control de asistencia, medidas disciplinarias, entre otras materias.', practica: 'Se escribe para el trabajo real de la empresa, no para el de otra.' }],
    },
  },
  {
    id: 'r2', t: '09:45', ch: 'llamada', who: null, titulo: 'Quienes van a vivir el reglamento', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio', show: ['personas', 'calidad'],
    body: () => `<p>Antes de escribir, quieres saber qué necesita cada grupo. Llamas a tres personas que nunca han leído un reglamento, pero lo van a vivir todos los días.</p><p><mark class="clave">Cada llamada te da una regla que faltaba</mark>.</p>`,
    type: 'calls',
    calls: [['Lucía Ramos · terramoza', 'Contesta desde su casa, con la venda todavía', '«Jefa, nosotras no tenemos dónde descansar en Lima. Esperamos el bus de regreso sentadas en la sala de pasajeros. Y a veces los pasajeros borrachos nos tocan. ¿Eso va a estar?»'], ['Don Teófilo Huaringa · jefe de taller', 'Contesta con un motor de fondo', '«Que diga quién decide que un bus no sale. Hoy el chofer me dice que la llanta está mala y el ingeniero dice que salga igual. Eso tiene que estar escrito.»'], ['Néstor Poma · conductor', 'Contesta en el paradero de Jauja', '«Que diga cuántas horas se maneja y que nadie te castigue por decir que estás cansado. Lo demás, señora, ya lo sabemos.»']],
    prompt: 'Terminaste las llamadas. ¿Qué haces con lo que oíste?',
    choices: [
      { id: 'a', label: 'Incluir tres reglas nuevas: espacio de descanso para tripulación en terminales, derecho del conductor y del taller a frenar un bus inseguro sin sanción, y canal contra el acoso de pasajeros.',
        res: { q: 'buena', fx: { personas: 5, calidad: 4 }, rel: { nestor: 1 }, cartera: { consulta: 'Tres reglas que vienen del terminal' },
          out: 'Escribes las tres reglas en tu cuaderno. Son las primeras del reglamento que no salieron de ningún modelo de internet.',
          pro: { ok: 'Un reglamento que responde a riesgos reales se cumple con más ganas.', info: 'El acoso de pasajeros a terramozas también es un riesgo laboral: regúlalo junto al hostigamiento.' },
          kusi: ['feliz', '¡Reglas con olor a terminal!'] } },
      { id: 'b', label: 'Anotarlas como sugerencias para una segunda versión: primero hay que tener algo presentable.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -1 }, cartera: { consulta: 'Sugerencias para después' },
          out: 'Las guardas en una carpeta. El reglamento avanzará más rápido, pero sin lo que más les importa a quienes llamaste.',
          pro: { ok: 'Avanzas rápido.', risk: 'La primera versión es la que la gente recuerda.' },
          kusi: ['pensando', '¿Y lo de Lucía en Lima?'] } },
    ],
    mirada: { ve: 'La terramoza, el mecánico y el conductor ven riesgos que en la oficina no se ven. Un reglamento que incluye el derecho a decir «este bus no sale» es un reglamento de seguridad, no solo de disciplina.' },
  },
  {
    id: 'r3', t: '11:30', ch: 'documento', who: null, titulo: 'Los capítulos que importan', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('patty_renuncia') ? 'Estás sola en la oficina; los pendientes de Patty se apilan en su escritorio vacío.' : F.has('patty_sola') ? 'Patty sigue con descanso médico. Trabajas sola, con su post-it todavía pegado en el monitor.' : 'Patty lee contigo, con un lápiz detrás de la oreja.'} Escribes el reglamento desde cero.</p><p><mark class="clave">Elige el contenido de cada capítulo</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada capítulo del reglamento.', boton: 'Guardar el borrador',
    bloques: [
      { id: 'jornada', t: 'Jornadas y conducción', n: 2, ops: [
        { id: 'j1', t: 'Tiempos máximos de conducción continua y relevos según el reglamento de transporte, con relevo obligatorio en rutas nocturnas largas.', ok: true, por: 'El riesgo central del negocio, por escrito.' },
        { id: 'j2', t: 'Derecho del conductor a avisar que está cansado antes de salir, sin sanción.', ok: true },
        { id: 'j3', t: 'Las horas extra se coordinan verbalmente con Operaciones.', ok: false, por: 'Lo verbal es justo lo que permitió las 14 horas.' },
      ] },
      { id: 'asist', t: 'Asistencia y registro', n: 1, ops: [
        { id: 'a1', t: 'Registro de inicio y fin de conducción en la hoja de ruta, revisado cada semana por RR.HH.', ok: true },
        { id: 'a2', t: 'Cada conductor anota sus horas cuando pueda.', ok: false, por: 'Sin momento ni revisión, el registro no sirve.' },
      ] },
      { id: 'disc', t: 'Medidas disciplinarias', n: 2, ops: [
        { id: 'd1', t: 'Escala gradual: llamada de atención verbal, escrita, suspensión, y despido solo por las causas de la ley.', ok: true, por: 'Proporcionalidad.' },
        { id: 'd2', t: 'Derecho del trabajador a dar sus descargos antes de cualquier sanción.', ok: true },
        { id: 'd3', t: 'El gerente de cada área sanciona según su criterio.', ok: false, por: 'Sin criterios, la sanción depende del humor del jefe.' },
      ] },
      { id: 'host', t: 'Hostigamiento y acoso', n: 1, ops: [
        { id: 'h1', t: 'Procedimiento de hostigamiento sexual y protocolo para el acoso de pasajeros a la tripulación.', ok: true },
        { id: 'h2', t: 'Cada caso se conversa entre las partes para no hacerlo grande.', ok: false, por: 'Juntar a la víctima con quien la hostigó no es un procedimiento.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : 0 },
        flags: q === 'riesgosa' ? [] : ['rit_completo'], cartera: { rit: q === 'riesgosa' ? 'Borrador débil' : 'Borrador propio de 18 páginas' },
        out: q === 'buena' ? 'A las dos tienes 18 páginas propias. En la primera, en negrita: «Ningún conductor será sancionado por avisar que está cansado».' : q === 'aceptable' ? 'El borrador avanza, pero tiene piezas que reabren lo que querías cerrar.' : 'El borrador repite las reglas informales de siempre, ahora por escrito.',
        pro: { ok: 'Un reglamento corto, propio y claro se lee y se usa.', info: 'Pide al estudio laboral que lo revise antes de presentarlo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un reglamento hecho para buses!' : 'Algunas piezas no ayudan.'],
      };
    },
    rules: [[LEY, 'El despido solo procede por las causas que fija la ley (TUO del D.Leg. 728).'], [LEY, 'Procedimiento contra el hostigamiento sexual (Ley 27942 y su reglamento).']],
    mirada: {
      ve: 'El primer reglamento de una empresa familiar convierte la palabra del dueño en reglas que valen para todos, incluso para sus hijos. Por eso sus capítulos más importantes no son los de castigo, sino los que protegen al que avisa.',
      visual: { tipo: 'flujo', titulo: 'El reglamento de Mantaro', pasos: ['Jornadas y relevos', 'Registro de horas', 'Disciplina gradual', 'Hostigamiento y acoso'] },
    },
  },
  {
    id: 'r4', t: '14:15', ch: 'presencial', who: null, titulo: '«Para el jueves»', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Finanzas', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Mariela tiene tres pantallas con el flujo de caja. ${F.has('mariela_aliada') ? '«Tú y yo vamos a ordenar esta empresa», te dice al verte.' : 'Te saluda sin dejar de teclear.'}</p><p>«Presentémoslo el jueves a la Autoridad de Trabajo y mandemos copia a SUNAFIL. <mark class="clave">Si esperamos a que lo lean los choferes, nos dan las fiestas</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer dos semanas: revisión del estudio laboral, una semana de consulta con representantes de conductores, terramozas y taller, y presentarlo después. A la inspectora se le informa el cronograma.',
        res: { q: 'buena', fx: { personas: 4, calidad: 3, confianza: 1, tiempo: -2 }, flags: ['rit_participativo'], cartera: { rit: 'Revisión y consulta en dos semanas' },
          out: 'Mariela resopla: «Dos semanas es mucho». Le muestras que el plan de 90 días ya decía «este trimestre» y que la inspectora no lo pidió para el jueves. Acepta, con condición: «Ni un día más».',
          pro: { ok: 'Un reglamento consultado se cumple mejor y es más difícil de impugnar.', risk: 'Te queda poco margen con Mariela.', info: 'La ley no exige consulta, pero tampoco la prohíbe: es una buena práctica.' },
          kusi: ['animo', '¡Rápido, pero no a escondidas!'] } },
      { id: 'b', label: 'Aceptar: es mejor tener un reglamento presentado pronto, aunque no lo conozcan; lo explicarán después.',
        res: { q: 'aceptable', fx: { tiempo: 3, cumplimiento: 2, personas: -3 }, flags: ['rit_rapido'], cartera: { rit: 'Se presenta el jueves' },
          out: 'Mariela sonríe: «Así me gusta». En el patio, el jueves, se enterarán de que hay reglas nuevas por un papel pegado en la pared.',
          pro: { ok: 'Cumples rápido una obligación pendiente.', risk: 'Un reglamento impuesto en una empresa con miedo se lee como castigo.' },
          kusi: ['pensando', '¿Y lo que te dijeron Lucía y Néstor?'] } },
    ],
    rules: [[LEY, 'El RIT se presenta a la Autoridad Administrativa de Trabajo, su aprobación es automática y se entrega a los trabajadores (D.S. 039-91-TR, art. 4).'], [BP, 'Consultar un reglamento antes de presentarlo aumenta su legitimidad.']],
    mirada: {
      ve: 'Mariela tiene razón en algo: la empresa lleva años incumpliendo y hay que cerrar pendientes. Pero un reglamento no es un trámite. Si los conductores lo sienten como una imposición justo después de un accidente y una inspección, lo leerán como una forma de buscar culpables.',
      visual: { tipo: 'balanza', a: { t: 'Presentarlo el jueves', items: ['Cumplimiento rápido', 'Mariela contenta', 'Reglas impuestas'] }, b: { t: 'Dos semanas con consulta', items: ['Revisión legal', 'Voces del terminal', 'Reglas legítimas'] } },
    },
  },
  {
    id: 'r5', t: '16:00', ch: 'documento', who: null, titulo: 'La ruta del reglamento', banner: 'assets/esc/escalera.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Don Alberto te pide, para mañana, «cómo se hace esto». Nunca nadie le explicó cómo entra en vigencia un reglamento.</p><p><mark class="clave">Ordena los pasos, de la redacción a la entrega</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena la ruta del reglamento. Usa las flechas.', boton: 'Guardar la ruta',
    items: [
      { id: 'red', t: 'Redactar el borrador propio con lo que dijo el terminal', por: 'La base.' },
      { id: 'abog', t: 'Revisión legal por el estudio laboral', por: 'Antes de mostrarlo a nadie fuera de RR.HH.' },
      { id: 'cons', t: 'Consulta con representantes de conductores, terramozas y taller', por: 'Ajustar con quienes lo van a vivir.' },
      { id: 'ger', t: 'Aprobación de la gerencia general', por: 'La empresa lo hace suyo.' },
      { id: 'aat', t: 'Presentación a la Autoridad Administrativa de Trabajo', por: 'La aprobación es automática con la presentación.' },
      { id: 'ent', t: 'Entrega a cada trabajador, con cargo, y charlas en el terminal', por: 'Un reglamento que nadie recibió no se puede exigir.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 2, calidad: q === 'buena' ? 3 : 0 }, rel: { 'don-alberto': q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['rit_ruta'], cartera: { rit: q === 'riesgosa' ? 'Ruta confusa' : 'Ruta de vigencia lista' },
        out: q === 'buena' ? 'La ruta cabe en una hoja. Le pones fechas a lápiz. Mañana se la mostrarás al directorio.' : 'La ruta tiene pasos cambiados: entregar antes de presentar, o consultar después de aprobar.',
        pro: { ok: 'Saber cómo entra en vigencia evita que se quede en un cajón.', info: 'Guarda los cargos de entrega: son la prueba de que cada trabajador lo recibió.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Del borrador al terminal!' : 'Casi: el orden protege.'],
      };
    },
    rules: [[LEY, 'Presentación del RIT a la Autoridad Administrativa de Trabajo y entrega a los trabajadores (D.S. 039-91-TR, art. 4).']],
    mirada: {
      ve: 'Un reglamento no existe porque se escribió: existe cuando se presentó y cada trabajador lo recibió. En muchas empresas peruanas hay reglamentos guardados que nadie conoce y que, por eso, no sirven cuando se necesitan.',
      visual: { tipo: 'flujo', titulo: 'De la idea a la vigencia', pasos: ['Redactar', 'Revisión legal', 'Consulta', 'Gerencia', 'Autoridad de Trabajo', 'Entrega'] },
    },
  },
  {
    id: 'r6', t: '18:10', ch: 'whatsapp', who: null, titulo: 'Un mensaje al patio', banner: 'assets/foto2/caminan.webp', lugar: 'Patio de buses, al atardecer', show: ['personas', 'confianza'],
    body: (n, F) => `<p>El sol se esconde detrás de los cerros de Huancayo y el patio se llena de buses que vuelven. ${F.has('rit_participativo') ? 'Quieres que los conductores sepan que el reglamento pasará por sus manos.' : 'El jueves habrá reglas nuevas en la pared. Quieres que no se enteren de golpe.'}</p><p>Escribes al grupo de conductores. <mark class="clave">Que no suene a amenaza</mark>.</p>`,
    type: 'compose', enviaA: 'conductores', para: 'Para: Conductores Mantaro (90)', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué es', ops: [
        { id: 'q1', t: 'Compañeros: estamos escribiendo el primer Reglamento Interno de Mantaro. Es la lista de reglas que valen para todos, también para los jefes.', ok: true, por: 'Simple y con una idea clave: vale para todos.' },
        { id: 'q2', t: 'Compañeros: se viene un reglamento para poner orden y disciplina.', ok: false, por: 'Suena a castigo justo después del accidente.' },
      ] },
      { id: 'dentro', t: 'Qué trae', ops: [
        { id: 'd1', t: 'Lo primero que dice: nadie será sancionado por avisar que está cansado, y el relevo nocturno es obligatorio.', ok: true, por: 'Empiezas por lo que los protege.' },
        { id: 'd2', t: 'Trae una escala de sanciones para tardanzas y faltas.', ok: false, por: 'Cierto, pero es lo último que deberías destacar hoy.' },
      ] },
      { id: 'como', t: 'Cómo participar', ops: [
        { id: 'c1', t: 'El jueves, en la elección del comité de SST, elijan también a quienes lo revisarán con nosotros.', ok: true, por: 'Una vía concreta y cercana.' },
        { id: 'c2', t: 'Cualquier duda, escríbanme.', ok: null, por: 'Abierto, pero vago.' },
      ] },
    ],
    res: sel => {
      const mal = sel.que === 'q2' || sel.dentro === 'd2', buenas = ['q1', 'd1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : mal ? -3 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { nestor: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Llegan pulgares, un «por fin» y un audio de Wilber leyendo en voz alta «también para los jefes» entre risas.' : mal ? 'Alguien responde: «¿Ahora nos van a castigar por el accidente?». Nadie más escribe.' : 'El grupo recibe el mensaje con calma, sin mucho entusiasmo.',
        pro: { ok: 'Empezar por lo que protege cambia cómo se recibe una regla.', risk: 'Un reglamento anunciado como castigo nace con desconfianza.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '«También para los jefes». ¡Qué bacán!' : 'Sonó a castigo…'],
      };
    },
    mirada: {
      ve: 'La forma en que se anuncia un reglamento decide cómo se lee. En una empresa donde reclamar costaba el trabajo, empezar por el derecho a decir «estoy cansado» es un mensaje que vale más que cualquier capítulo.',
      visual: { tipo: 'mensaje', titulo: 'Reglas que protegen', txt: 'Es la lista de reglas que valen para todos, también para los jefes. Lo primero que dice: nadie será sancionado por avisar que está cansado.' },
    },
  },
];
