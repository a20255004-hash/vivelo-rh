// Analista de Relaciones Laborales · Capítulo 5 · «El descargo» · Semana 2, jueves.
// Hilo del mes: el caso de Marcos Huamán llega a su descargo y destapa las horas de la campaña de caballa.
// Normas citadas:
// - TUO del D. Leg. 728 (D.S. 003-97-TR), art. 31: el descargo es el derecho de defensa del trabajador frente a la
//   imputación (caps. 2 y 3). https://lpderecho.pe/jurisprudencia-articulo-31-tuo-decreto-legislativo-728-procedimiento-despido/
// - Constitución, art. 25, y TUO de la Ley de Jornada de Trabajo, Horario y Trabajo en Sobretiempo (D.S. 007-2002-TR):
//   jornada ordinaria máxima de ocho horas diarias o cuarenta y ocho semanales; el sobretiempo es voluntario y se paga
//   con una sobretasa mínima de 25 % las dos primeras horas y 35 % las siguientes, o se compensa con descanso si se acuerda.
//   https://www.geovictoria.com/es-pe/blog/jornada-laboral-sobretiempo-banco-de-horas-peru/
//   https://www.buk.pe/blog/ley-jornada-trabajo-horario-sobretiempo
//   Reglamento (D.S. 008-2002-TR): https://lpderecho.pe/reglamento-ley-jornada-trabajo-horario-trabajo-sobretiempo-decreto-supremo-008-2002-tr/
// - Ley 29783, Ley de Seguridad y Salud en el Trabajo: principio de prevención (el empleador garantiza condiciones que
//   protejan la vida y la salud de los trabajadores).
// - TUO de la LRCT (D.S. 010-2003-TR): libertad sindical (cap. 1).
// La proporcionalidad de la sanción se presenta como criterio de buena práctica, sin citar casaciones.

export const CAP = {
  n: 5, titulo: 'El descargo', dia: 'Semana 2, jueves', foto: 'assets/3d/scenes/balanza.webp',
  lugar: 'Conservas del Pacífico · Oficina de Relaciones Laborales',
  inicio: '07:45', fin: '19:00', cierreHora: '18:50',
  apertura: 'Jueves. Hoy vence el plazo de Marcos. A las 8:00 llega con un sobre manila y una frase que cambia el caso: «Trabajé tres turnos seguidos porque faltó gente».', boton: 'Recibir el descargo',
  kusi: 'Hoy toca escuchar la otra versión… y comprobarla. ¡Evidencia, no corazonadas!',
  lead: 'Recibiste el descargo como corresponde, comprobaste cada afirmación, corregiste una propuesta de sanción injusta, escribiste un informe con hechos y descubriste que el problema era más grande que Marcos.',
  reflexion: '¿En qué momento dejaste de ver a Marcos como «el que se durmió»?',
  siguiente: { n: 6, titulo: 'Horas extra', dia: 'Semana 3, martes' },
};

export const CARTERA = [
  { id: 'descargo', p: 'Descargo de Marcos Huamán', j: 'Marcos · Sindicato', d: 0, e: 'Vence hoy' },
  { id: 'verifica', p: 'Verificación del descargo', j: 'Relaciones Laborales', d: 0, e: 'Sin empezar' },
  { id: 'propuesta', p: 'Propuesta de sanción de planta', j: 'Gladys · Planta', d: 0, e: 'En camino' },
  { id: 'informe', p: 'Informe de investigación', j: 'Arturo · Valeria', d: 0, e: 'Por redactar' },
  { id: 'horas', p: 'Horas de la campaña de caballa', j: 'Milagros · Planillas', d: 0, e: 'Sin revisar' },
];

export const FUTURO = {
  descargo_con_cargo: ['Recibiste el descargo con cargo y anexos listados.', 'Nadie podrá decir que llegó tarde o incompleto. Capítulo 7.'],
  verificacion_completa: ['Comprobaste lo decisivo del descargo: el pedido del supervisor y el relevo negado.', 'Tu informe se sostiene. Capítulo 7.'],
  horas_escaladas: ['Llevaste las horas de la campaña a tu jefe como un problema aparte.', 'La revisión de horas empieza el martes. Capítulo 6.'],
  horas_calladas: ['Dejaste las horas de la campaña para «si alguien reclama».', 'Alguien reclamará: el sindicato, ante SUNAFIL. Capítulos 6 y 7.'],
  registros_ajustados: ['Pediste «corregir» marcaciones del reloj.', 'Milagros se negó y lo dejó por escrito. Capítulo 6.'],
  propuesta_corregida: ['Corregiste la propuesta de sanción de Gladys.', 'Gladys aprendió a escribir un informe de planta. Capítulo 8.'],
  informe_solido: ['Tu informe separa hechos, descargo, conclusión y medidas.', 'Valeria lo usará ante la inspección. Capítulo 7.'],
  caso_archivado: ['El caso de Marcos se archivó sin sanción y con medidas para la organización.', 'Marcos vuelve a la línea; la base lo nota. Capítulo 8.'],
  amonestacion_marcos: ['Marcos recibió una amonestación escrita, con atenuantes reconocidos.', 'Lucho la discutirá, pero no la llevará a la calle. Capítulo 8.'],
  despido_marcos: ['Se decidió despedir a Marcos pese a los atenuantes.', 'El sindicato lo incluirá en su denuncia y en la mesa. Capítulos 7 y 8.'],
  supervision_corregida: ['Se dejó constancia de la responsabilidad de la supervisión.', 'Renzo no volverá a pedir tres turnos. Capítulo 6.'],
  revision_horas_pedida: ['Pediste a Milagros comparar reloj y planilla de toda la línea 2.', 'El martes tendrás el cuadro. Capítulo 6.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Arturo, Valeria y tú', c: '#0F2A3D' },
  arturo: { n: 'Dr. Arturo Benavides', sub: 'Jefe de Relaciones Laborales', who: 'arturo' },
  lucho: { n: 'Lucho Paredes', sub: 'Secretario general del sindicato', who: 'lucho' },
  gladys: { n: 'Gladys Ruiz', sub: 'Jefa de planta', who: 'gladys' },
  valeria: { n: 'Valeria Castro', sub: 'Abogada laboralista', who: 'valeria' },
  marcos: { n: 'Marcos Huamán', sub: 'Operario · línea 2', c: '#5B4636' },
  milagros: { n: 'Milagros Chero', sub: 'Asistente de RR.HH. · asistencia y planillas', c: '#2F6B3F' },
  renzo: { n: 'Renzo Távara', sub: 'Supervisor del turno noche', c: '#7A4A2E' },
};

export const WSP = [
  { chat: 'gladys', t: '07:30', de: 'Gladys', txt: 'Hoy te mando mi propuesta para lo de Marcos. Ya tengo el rol de turnos, lo hablamos.', si: 'gladys_entiende' },
  { chat: 'gladys', t: '07:30', de: 'Gladys', txt: 'Hoy vence lo de Marcos. Espero que esta vez se decida algo.', no: 'gladys_entiende' },
  { chat: 'grupo', t: '09:50', de: 'Arturo', txt: 'Segunda sesión a las 10: convenio anterior, uniformes y movilidad. Ven a tomar el acta y regresas a lo tuyo.', si: 'metodo_acordado' },
  { chat: 'renzo', t: '11:40', de: 'Renzo', txt: 'Señorita, no me vaya a hundir. Yo solo quería sacar la producción. Todos doblamos esa semana.' },
  { chat: 'lucho', t: '13:05', de: 'Lucho', txt: 'En la mesa de hoy hablaron de uniformes. Bien. Pero la base pregunta por las horas de la caballa. Eso lo vamos a pedir.' },
  { chat: 'marcos', t: '17:20', de: 'Marcos', txt: 'Gracias por escucharme, señorita. Mi mamá le manda saludos desde Caraz.', si: 'caso_archivado' },
  { chat: 'marcos', t: '17:20', de: 'Marcos', txt: 'Recibí la amonestación. No estoy de acuerdo, pero gracias por revisar las horas.', si: 'amonestacion_marcos' },
  { chat: 'lucho', t: '17:30', de: 'Lucho', txt: 'Con esto no hay mesa que aguante. Nos vemos donde corresponda.', si: 'despido_marcos' },
  { chat: 'milagros', t: '18:35', de: 'Milagros', txt: 'Listo, el lunes en la noche le tengo el cuadro: reloj contra planilla, toda la línea 2. No lo comparto con nadie más.', si: 'revision_horas_pedida' },
];

export const CORREOS = [
  { t: '07:40', de: 'Valeria Castro · Abogada laboralista', para: 'Analista de Relaciones Laborales', asunto: 'Hoy: descargo', html: '<p>Hoy vence el plazo. Recibe el descargo con cargo y no decidas nada en caliente. Un descargo no se «contesta»: se verifica. Y si lo que dice es cierto, hay que tenerlo en cuenta aunque no le guste a planta.</p><p>Valeria</p>' },
  { t: '16:50', de: 'Dr. Arturo Benavides', para: 'Gladys Ruiz; Analista de Relaciones Laborales', asunto: 'Decisión caso Huamán', html: '<p>Confirmo la decisión tomada esta tarde. La comunicación a Marcos sale por escrito mañana, con copia al expediente. Las medidas para la organización del trabajo empiezan el lunes.</p><p>A. B.</p>' },
];

export const QUIZ = [
  { q: 'Recibido el descargo, la empresa debe…', ops: ['Archivarlo si llega a última hora', 'Evaluarlo y verificar lo que afirma antes de decidir', 'Contestarlo con otra carta', 'Enviarlo al sindicato'], ok: 1, por: 'El descargo es el derecho de defensa del trabajador: si no se evalúa, el procedimiento pierde sentido.' },
  { q: 'La jornada ordinaria máxima en el Perú es de…', ops: ['Diez horas diarias', 'Ocho horas diarias o cuarenta y ocho semanales', 'Doce horas en campaña', 'Lo que se pacte'], ok: 1, por: 'Lo establecen el art. 25 de la Constitución y el D.S. 007-2002-TR.' },
  { q: 'El trabajo en sobretiempo…', ops: ['Es obligatorio en campaña', 'Es voluntario y se paga con sobretasa, o se compensa con descanso si se acuerda', 'Se paga como hora simple', 'Solo se paga si el trabajador lo reclama'], ok: 1, por: 'El D.S. 007-2002-TR fija una sobretasa mínima de 25 % las dos primeras horas y 35 % las siguientes.' },
  { q: 'Un operario se duerme tras 21 horas continuas, a pedido de su supervisor, y después de pedir relevo. Lo más justo es…', ops: ['Despedirlo para dar el ejemplo', 'Graduar la respuesta según el hecho y sus circunstancias, y corregir la organización que lo causó', 'Ignorar el hecho', 'Sancionar al testigo'], ok: 1, por: 'La sanción debe ser proporcional al hecho y a sus circunstancias; la fatiga impuesta es una responsabilidad de la organización.' },
  { q: 'Según el principio de prevención de la Ley 29783…', ops: ['El trabajador es el único responsable de su cansancio', 'El empleador garantiza condiciones que protejan la vida y la salud de los trabajadores', 'La prevención solo aplica a accidentes', 'SUNAFIL organiza los turnos'], ok: 1, por: 'La Ley 29783 pone en el empleador el deber de garantizar condiciones seguras, incluida una organización del trabajo que no agote a las personas.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '08:05', ch: 'presencial', who: 'lucho', titulo: 'El sobre manila', banner: 'assets/foto2/caminan.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'confianza', 'calidad'],
    body: (n, F) => `<p>Marcos llega afeitado y con camisa planchada. Lo acompaña Lucho, que esta vez no trae a nadie más. ${F.has('carta_postergada') ? 'La carta le llegó ayer, pero Marcos no quiso esperar seis días más: «Ya no duermo pensando en esto».' : 'Es el último día del plazo.'} ${F.has('acta_forzada') ? 'En el sobre también hay una hoja: «Desconozco el acta que firmé el miércoles sin asesoría».' : ''}</p><p>Te extiende el sobre: cinco hojas escritas a mano y tres anexos. <mark class="clave">Lo primero es recibirlo bien</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Recibirlo, sellar su copia con fecha y hora, y anotar en el cargo los anexos que trae.',
        res: { q: null, fx: { cumplimiento: 3, confianza: 2 }, rel: { lucho: 1 }, flags: ['descargo_con_cargo'], cartera: { descargo: 'Recibido 08:07, con 3 anexos' },
          out: 'Lucho revisa el sello como el primer lunes. Los anexos: una foto del rol de turnos, una nota de Quispe y un audio de WhatsApp de Renzo, transcrito. «Que conste», dice.', kusi: ['feliz', 'Recibir bien es el primer paso de escuchar bien.'] } },
      { id: 'b', label: 'Pedirle a Marcos que te lo cuente de palabra mientras lo hojeas, para avanzar más rápido.',
        res: { q: null, fx: { cumplimiento: -1, tiempo: 1 }, cartera: { descargo: 'Recibido, sin anexos anotados' },
          out: 'Lucho levanta la mano: «Para eso lo escribió, señorita. Léalo con calma». Marcos se queda callado. Al final, nadie anotó cuántos anexos venían.', kusi: ['pensando', 'Lo escrito es lo que vale.'] } },
    ],
    rules: [[LEY, 'El descargo es la respuesta del trabajador a la imputación, dentro del plazo de la carta (art. 31 del TUO del D. Leg. 728).'], [BP, 'Sella la copia del trabajador con fecha y hora, y anota los anexos en el cargo.']],
    mirada: { ve: 'El descargo merece el mismo cuidado formal que la carta de preaviso. Recibirlo con cargo y con sus anexos listados es decirle al trabajador que su versión cuenta tanto como la de la empresa.' },
  },
  {
    id: 'j2', t: '08:40', ch: 'documento', who: null, titulo: 'Lo que dice Marcos', banner: 'assets/esc/dudas.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'etica', 'tiempo'],
    body: () => `<p>Letra apretada, en un cuaderno de su hija. Marcos es del turno tarde: el lunes en la noche Renzo lo llamó para que entrara el martes a las siete «porque faltan dos». Hizo la mañana, su tarde y se quedó la noche. <mark class="clave">Tres turnos seguidos</mark>.</p><p>A las diez tienes que tomar el acta de la segunda sesión. Antes, decide qué comprobar primero.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos afirmaciones del descargo que vas a verificar primero.', boton: 'Verificar estas dos', resumen: 'Vas a verificar',
    cols: ['Lo que afirma Marcos', 'Cómo se comprueba'],
    rows: [
      { id: 'pedido', cells: ['«Renzo me pidió entrar a las 7 y quedarme hasta el miércoles.»', 'Reloj de marcación y versión de Renzo'] },
      { id: 'relevo', cells: ['«A las 3:30 pedí relevo por radio porque no aguantaba. Me dijeron que aguante media hora.»', 'Testimonio de Quispe y de Renzo'] },
      { id: 'pago', cells: ['«Esas horas no figuran como extras en mi registro.»', 'Planilla contra reloj'] },
      { id: 'cólera', cells: ['«Renzo me tiene cólera porque soy afiliado.»', 'Difícil: necesitaría hechos concretos'] },
      { id: 'otros', cells: ['«Otros compañeros también se duermen en la noche.»', 'Habría que vigilar a otros'] },
      { id: 'familia', cells: ['«Tengo dos hijos y mi esposa está embarazada.»', 'No cambia el hecho'] },
    ],
    score: { pedido: 3, relevo: 3, pago: 2, 'cólera': 1, otros: -2, familia: 0 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, etica: picks.includes('otros') ? -3 : 1 },
        flags: q === 'buena' ? ['verificacion_completa'] : [],
        cartera: { verifica: q === 'buena' ? 'Pedido del supervisor y relevo negado' : 'Verificación parcial' },
        out: q === 'buena' ? 'Subrayas dos frases. Si las dos son ciertas, el caso ya no es «un operario que se durmió»: es una cadena de decisiones de la que Marcos fue el último eslabón.' : picks.includes('otros') ? 'Anotas «revisar a otros». Valeria te escribe: «No abras diez casos nuevos para defender uno. Verifica lo que importa para este».' : 'Avanzas, pero lo decisivo, quién le pidió quedarse y si pidió relevo, queda sin comprobar.',
        pro: { ok: 'Se verifica primero lo que cambia la gravedad del hecho o la responsabilidad.', risk: 'Usar el descargo para abrir sospechas sobre otros convierte la defensa de uno en la persecución de todos.', info: 'Lo de las horas no pagadas no cambia la falta, pero puede ser el problema más grande de la empresa.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Ahí está el corazón del caso!' : '¿Qué cambia la gravedad?'],
      };
    },
    rules: [[BP, 'Un descargo no se contesta: se verifica. Empieza por lo que cambia la gravedad del hecho o quién es responsable.']],
    mirada: {
      ve: 'Leer un descargo es separar lo que se puede comprobar de lo que solo conmueve. La empatía sirve para escuchar; la evidencia, para decidir.',
      visual: { tipo: 'matriz', x: '¿Se puede comprobar?', y: '¿Cambia el caso?', cuadrantes: ['Cambia, difícil de probar', 'Cambia y se prueba', 'No cambia, no se prueba', 'No cambia, se prueba'], items: [['Pedido del supervisor', .85, .9], ['Relevo negado', .7, .85], ['Horas no pagadas', .8, .55], ['Cólera por ser afiliado', .2, .6], ['Otros se duermen', .3, .15], ['Su familia', .6, .1]] },
    },
  },
  {
    id: 'j3', t: '09:15', ch: 'llamada', who: null, titulo: 'Comprobar', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Cuarenta y cinco minutos antes de la mesa. ${F.has('marcaciones_linea') ? 'Milagros ya tiene el reporte de la línea desde el miércoles.' : 'Milagros todavía no ha sacado el reporte de la línea.'} Pones el celular en altavoz y abres un cuaderno nuevo.</p><p><mark class="clave">Tres llamadas, y lo que escuches no será solo sobre Marcos</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Jesús Quispe · operario, testigo', 'Contesta desde su casa, con un bebé llorando', '«Sí, señorita. A las tres y media Marcos pidió relevo por la radio. Renzo le dijo que aguante, que a las cuatro y media mandaba a alguien. No mandó a nadie. Yo me quedé mirando la temperatura de las dos autoclaves.»'],
      ['Renzo Távara · supervisor del turno noche', 'Contesta a la defensiva', '«Sí, le dije que aguante. ¿Y de dónde sacaba gente? Esa semana todos doblamos, yo también. Mire, si quiere, el reloj se colgó varias veces; Milagros puede corregir las marcaciones raras y ya.»'],
      ['Milagros Chero · asistencia y planillas', 'Contesta en voz baja, tapando el teléfono', '«Señorita, crucé el reloj con la planilla: en la semana de la caballa hay treinta y ocho personas de la línea 2 con jornadas de más de doce horas. En planilla, las horas extra pagadas son casi cero. Y no, el reloj no se colgó tanto.»'],
    ],
    prompt: 'Lo de Marcos se confirmó. ¿Y lo otro?',
    choices: [
      { id: 'a', label: 'Dejar el caso de Marcos en su carril y, aparte, informar hoy mismo al Dr. Benavides y a Valeria del hallazgo de las horas, con los datos de Milagros, como un riesgo de la empresa.',
        res: { q: 'buena', fx: { cumplimiento: 6, etica: 4, confianza: 2 }, rel: { arturo: 1 }, flags: ['horas_escaladas'], cartera: { verifica: 'Confirmado por Quispe y Renzo', horas: '38 personas, jornadas > 12 h, casi sin horas extra pagadas' },
          out: 'El doctor lee tu mensaje en la puerta de la sala de la mesa. Se queda quieto. «Esto no sale de nosotros hasta el martes. Pero el martes lo vemos todo.»',
          pro: { ok: 'Separas el caso individual del problema de la empresa y lo llevas a quien puede corregirlo antes de que lo descubra otro.', risk: 'La gerencia puede preferir no saberlo en plena negociación.', info: 'Es la empresa la que incumplió: revisar el propio cumplimiento es parte de tu trabajo.' },
          kusi: ['celebra', 'Mirar hacia adentro también es Relaciones Laborales.'] } },
      { id: 'b', label: 'Concentrarte en el caso de Marcos: lo de las horas es de Planillas, y abrirlo ahora en plena negociación le da al sindicato un arma. Si alguien reclama, se verá.',
        res: { q: 'aceptable', fx: { calidad: 2, cumplimiento: -4, etica: -2 }, flags: ['horas_calladas'], cartera: { verifica: 'Confirmado por Quispe y Renzo', horas: 'Detectado, sin reportar' },
          out: 'Cierras el cuaderno. Lucho te escribió hace una hora: «la base pregunta por las horas de la caballa». Alguien va a reclamar, y no será a Planillas.',
          pro: { ok: 'No mezclas temas en un día difícil.', risk: 'Un incumplimiento conocido y callado es peor que uno desconocido: cuando aparezca, nadie creerá que no lo sabían.' },
          kusi: ['preocupado', 'Lo viste… y lo guardaste.'] } },
      { id: 'c', label: 'Aceptar la idea de Renzo: si el reloj se colgó, pedirle a Milagros que corrija las marcaciones dudosas antes de que el sindicato las use.',
        res: { q: 'riesgosa', fx: { etica: -8, cumplimiento: -6 }, rel: { arturo: -1 }, flags: ['registros_ajustados'], cartera: { horas: 'Se pidió «corregir» el reloj' },
          out: 'Milagros se queda callada. Después escribe un correo, con copia al doctor: «No voy a modificar registros de asistencia. Dejo constancia».',
          pro: { ok: 'Ninguno.', risk: 'Alterar registros de asistencia para ocultar horas trabajadas es un incumplimiento grave y puede convertir un problema de pago en uno de fraude.' },
          kusi: ['indignado', '¡Eso no se corrige: se paga!'] } },
    ],
    rules: [[LEY, 'Constitución, art. 25, y D.S. 007-2002-TR: la jornada ordinaria máxima es de ocho horas diarias o cuarenta y ocho semanales; el sobretiempo es voluntario y se paga con sobretasa.'], [BP, 'Los registros de asistencia no se «corrigen» para que cuadren: se explican o se pagan.']],
    mirada: {
      ve: 'Investigar un caso individual a veces destapa un incumplimiento de la empresa. Una buena analista de Relaciones Laborales no lo esconde para ganar la negociación: lo lleva adentro antes de que se lo pongan sobre la mesa.',
      visual: { tipo: 'embudo', titulo: 'Del caso al problema', niveles: [['Personas de la línea 2', 100], ['Con jornadas de más de 12 h', 38], ['Con horas extra pagadas', 2]] },
      normas: [{ ley: 'TUO de la Ley de Jornada de Trabajo, Horario y Trabajo en Sobretiempo (D.S. 007-2002-TR)', dice: 'La jornada ordinaria máxima es de ocho horas diarias o cuarenta y ocho semanales. El trabajo en sobretiempo es voluntario y se paga con una sobretasa mínima de 25 % por las dos primeras horas y 35 % por las siguientes, salvo que se acuerde compensarlo con descanso.', practica: 'Treinta y ocho personas con jornadas larguísimas y casi nada pagado: eso no es un caso, es una deuda.' }],
    },
  },
  {
    id: 'j4', t: '12:30', ch: 'documento', who: 'gladys', titulo: 'La propuesta de Gladys', banner: 'assets/esc/piensa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['etica', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>Vuelves de la mesa con el acta firmada y la garganta seca: uniformes, tallas y fechas. ${F.has('gladys_entiende') ? 'Gladys te dejó su propuesta impresa, con el rol de turnos grapado detrás.' : 'Gladys te mandó su propuesta por correo, con copia al gerente.'}</p><p>Se nota que la escribió rápido. <mark class="clave">Antes de que llegue a la reunión de las cuatro, revísala</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debería sostener una decisión disciplinaria.',
    doc: { t: 'Propuesta de medida disciplinaria · Caso autoclave 3', sub: 'Jefatura de planta · Conservas del Pacífico S.A.C.' },
    lines: [
      { id: 'hecho', t: 'El miércoles, a las 04:10, el trabajador fue encontrado dormido junto a la autoclave 3, en ciclo de esterilización.' },
      { id: 'quispe', t: 'El operario Quispe controló la temperatura y no hubo daño al lote.' },
      { id: 'descargo', t: 'El descargo no aporta nada nuevo, por lo que no es necesario analizarlo.', bad: LEY, why: 'El plazo de descargo existe para que la empresa considere la defensa (art. 31). Y este descargo sí aporta: el pedido del supervisor y el relevo negado se confirmaron.' },
      { id: 'voluntario', t: 'Las horas adicionales fueron aceptadas por el trabajador, por lo que no atenúan la falta.', bad: BP, why: 'Aceptar un pedido del supervisor no libera a la empresa de respetar la jornada máxima ni de prevenir la fatiga (D.S. 007-2002-TR y Ley 29783).' },
      { id: 'sindicato', t: 'Se considera agravante que el trabajador haya acudido al sindicato para su defensa.', bad: LEY, why: 'Buscar apoyo sindical es ejercer la libertad sindical; usarlo como agravante es un acto antisindical (D.S. 010-2003-TR).' },
      { id: 'tardanza', t: 'Antecedente: amonestación por tardanza en marzo de 2023.', duda: 'Puede mencionarse como antecedente, pero es leve y antigua: no convierte este hecho en reincidencia.' },
      { id: 'antiguedad', t: 'El trabajador tiene seis años en la empresa y no registra otras sanciones.' },
      { id: 'ejemplo', t: 'Se propone el despido para dar un ejemplo a la línea.', bad: BP, why: 'La sanción se gradúa por la gravedad del hecho y sus circunstancias, no para escarmentar a otros.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => {
      const q = !missLey && hitsBp >= 2 ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { etica: missLey ? -3 : 4, cumplimiento: missLey ? -4 : 4, calidad: q === 'buena' ? 3 : 0 }, rel: { gladys: q === 'buena' ? 0 : 1 },
        flags: missLey ? ['propuesta_gladys'] : ['propuesta_corregida'],
        cartera: { propuesta: missLey ? 'Propuesta de despido tal cual' : `Devuelta con ${hitsLey + hitsBp} observaciones` },
        out: missLey ? 'La propuesta pasa a la reunión de las cuatro como llegó. El gerente leerá «agravante: acudió al sindicato» y no lo verá como un problema.' : 'Llamas a Gladys y le lees tus observaciones. Al llegar a «agravante: acudió al sindicato», se queda callada. «Eso lo saqué de un formato viejo. Bórralo.»',
        pro: { ok: 'Una propuesta de sanción se apoya en hechos probados y en el descargo evaluado, no en el escarmiento.', risk: 'Una frase contra el sindicato en un documento disciplinario basta para que todo el caso parezca represalia.', info: 'Gladys no es mala jefa: está bajo presión de producción. Ayúdala a escribir mejor, no la expongas.' },
        kusi: missLey ? ['preocupado', 'Esa propuesta llegaba sesgada…'] : ['animo', '¡Corregiste sin humillar!'],
      };
    },
    rules: [[LEY, 'Ley 29783 (principio de prevención): el empleador garantiza condiciones que protejan la vida y la salud de los trabajadores.'], [BP, 'La sanción es proporcional al hecho y a sus circunstancias, incluidas las que dependen de la empresa.']],
    mirada: {
      ve: 'Las jefaturas suelen proponer sanciones desde el enojo y con formatos heredados. Revisarlas no es desautorizarlas: es evitar que la empresa firme algo que no podrá defender.',
      visual: { tipo: 'balanza', a: { t: 'Lo que pesa en contra', items: ['Equipo en ciclo sin vigilancia directa', 'Riesgo real de seguridad'] }, b: { t: 'Lo que atenúa', items: ['Tres turnos a pedido del supervisor', 'Pidió relevo y no llegó', 'Seis años sin sanciones', 'Quispe controló la temperatura'] } },
    },
  },
  {
    id: 'j5', t: '14:10', ch: 'documento', who: 'valeria', titulo: 'El informe de investigación', banner: 'assets/foto/plano-equipo.webp', lugar: 'Videollamada con Valeria', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Almorzaste un sudado de cachema del comedor, con el celular en la otra mano. Valeria se conecta desde Trujillo: «A las cuatro deciden con tu informe en la mesa. Que no tenga ni un adjetivo».</p><p><mark class="clave">Hechos, descargo, conclusión y medidas</mark>: en ese orden.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del informe.', boton: 'Enviar el informe al Dr. Benavides',
    bloques: [
      { id: 'hechos', t: 'Hechos probados', n: 2, ops: [
        { id: 'h1', t: 'El miércoles a las 04:10, Marcos Huamán fue encontrado dormido junto a la autoclave 3 en ciclo; Jesús Quispe controló la temperatura y no hubo daño.', ok: true, por: 'El hecho imputado, con su consecuencia real.' },
        { id: 'h2', t: 'Llevaba 21 horas continuas en planta: entró el martes a las 07:02, a pedido del supervisor, para cubrir dos turnos además del suyo.', ok: true, por: 'El contexto probado con el reloj y con el propio supervisor.' },
        { id: 'h3', t: 'El trabajador tiene una actitud conflictiva y cercana al sindicato.', ok: false, por: 'Opinión, y además alude a la afiliación.' },
      ] },
      { id: 'descargo', t: 'El descargo', n: 1, ops: [
        { id: 'd1', t: 'Su versión sobre el pedido del supervisor y el relevo solicitado a las 03:30 fue confirmada por Quispe y por el propio supervisor.', ok: true, por: 'El descargo se evaluó y se verificó.' },
        { id: 'd2', t: 'El descargo responde a una estrategia del sindicato y no se toma en cuenta.', ok: false, por: 'Descartarlo por quién lo asesoró vacía el derecho de defensa.' },
      ] },
      { id: 'conclusion', t: 'Conclusión', n: 1, ops: [
        { id: 'c1', t: 'Hubo un incumplimiento, con atenuantes graves que dependen de la organización del trabajo: tres turnos seguidos y un relevo pedido que no llegó.', ok: true, por: 'Reconoce el hecho y pone cada responsabilidad en su lugar.' },
        { id: 'c2', t: 'La falta grave está probada y amerita el despido.', ok: false, por: 'Ignora todo lo que se verificó.' },
        { id: 'c3', t: 'No hubo falta alguna.', ok: false, por: 'Sí hubo un hecho; lo que cambia es su gravedad y quién responde por él.' },
      ] },
      { id: 'medidas', t: 'Medidas para la organización', n: 2, ops: [
        { id: 'm1', t: 'Prohibir que se encadenen turnos y hacer obligatorio el relevo cuando un operario de autoclave lo pida.', ok: true, por: 'Ataca la causa del riesgo.' },
        { id: 'm2', t: 'Revisar las horas trabajadas por la línea 2 durante la campaña y regularizar su pago.', ok: true, por: 'El problema que el caso destapó.' },
        { id: 'm3', t: 'Capacitar a Marcos en compromiso y puntualidad.', ok: false, por: 'Marcos no falló por falta de compromiso: estuvo tres turnos.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -3 : 4 }, rel: { valeria: q === 'buena' ? 1 : 0, arturo: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['informe_solido'],
        cartera: { informe: q === 'riesgosa' ? 'Informe con conclusiones sin sustento' : 'Informe enviado: hecho, atenuantes y medidas' },
        out: q === 'buena' ? 'Valeria lo lee en silencio y solo dice: «Esto lo firmaría yo». El doctor lo imprime tres veces: una para él, una para Gladys y una para el gerente.' : q === 'aceptable' ? 'Valeria corrige una pieza: «Bien, pero cada palabra que sobra es una que Lucho o el gerente van a usar».' : 'Valeria se toma la cabeza: «Si llevas esto a las cuatro, cualquiera de los dos lados te lo desarma».',
        pro: { ok: 'Un informe que separa hechos, descargo, conclusión y medidas permite decidir con justicia y defender la decisión.', risk: 'Si las medidas solo apuntan a Marcos, el problema que lo causó se repetirá con otro operario.', info: 'Las medidas para la organización son tan importantes como la decisión sobre Marcos.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un informe sin un adjetivo!' : 'Revisa qué bloque cojea.'],
      };
    },
    rules: [[BP, 'El informe de investigación separa los hechos probados, la evaluación del descargo, la conclusión y las medidas para la organización.']],
    mirada: {
      ve: 'El informe es la bisagra entre investigar y decidir. Cuando está bien hecho, la decisión casi se escribe sola; y deja a la vista lo que la empresa también tiene que corregir.',
      visual: { tipo: 'flujo', titulo: 'El informe', pasos: ['Hechos probados', 'Descargo verificado', 'Conclusión', 'Medidas'], aqui: 2 },
    },
  },
  {
    id: 'j6', t: '16:00', ch: 'presencial', who: 'arturo', titulo: 'La decisión', banner: 'assets/esc/decide.webp', lugar: 'Oficina del Dr. Benavides', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>El doctor, Gladys y tú, con tu informe sobre la mesa. ${F.has('propuesta_corregida') ? 'Gladys trae su propuesta corregida, con una línea tachada a mano.' : 'Gladys trae su propuesta original, subrayada en rojo.'} Por la ventana, la línea 2 trabaja con dos personas menos.</p><p>Gladys habla primero: «Si no hay sanción, mañana nadie vigila las autoclaves». El doctor te mira: «<mark class="clave">Tú investigaste. ¿Qué recomiendas?</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Archivar el caso sin sanción, dejando constancia de que la causa principal fue la jornada impuesta y el relevo negado; aplicar desde el lunes las medidas del informe y una llamada de atención escrita a la supervisión.',
        res: { q: 'buena', fx: { etica: 5, personas: 4, confianza: 2 }, rel: { gladys: -1, arturo: 1 }, flags: ['caso_archivado', 'supervision_corregida'], cartera: { propuesta: 'Caso archivado; medidas desde el lunes' },
          out: 'Gladys aprieta los labios: «Entonces Renzo paga los platos». El doctor la corrige: «Paga la organización. Renzo, tú y yo». Firma. Gladys sale, pero antes pregunta: «¿Lo del relevo obligatorio empieza el lunes?».',
          pro: { ok: 'La respuesta es proporcional: reconoces el hecho, pero no sancionas a quien pidió relevo después de tres turnos.', risk: 'Gladys puede sentir que la seguridad quedó sin consecuencia. Las medidas tienen que cumplirse, o tendrá razón.', info: 'La constancia en el legajo debe explicar por qué se archivó: así nadie leerá «archivado» como «perdonado».' },
          kusi: ['animo', 'Justicia no es castigo: es poner cada cosa en su lugar.'] } },
      { id: 'b', label: 'Una amonestación escrita: hubo un hecho real con un equipo peligroso, y la sanción más leve reconoce los atenuantes y le dice a la línea que la seguridad importa. Sumar las medidas para la organización.',
        res: { q: 'aceptable', fx: { etica: 1, personas: -1, confianza: 3 }, rel: { gladys: 1 }, flags: ['amonestacion_marcos'], cartera: { propuesta: 'Amonestación escrita + medidas' },
          out: 'Gladys asiente, aliviada. El doctor firma. Cuando Marcos la reciba mañana, leerá «amonestación» y, más abajo, «se reconoce que el trabajador solicitó relevo». No sabrá si dar las gracias o reclamar.',
          pro: { ok: 'Es una sanción proporcional y defendible, y mantiene la autoridad de la jefatura.', risk: 'Sancionar, aunque sea con lo mínimo, a quien pidió relevo después de tres turnos manda un mensaje: «aguanta y calla».' },
          kusi: ['pensando', 'Defendible… pero ¿a quién le enseña qué?'] } },
      { id: 'c', label: 'Apoyar el despido: una autoclave sin vigilancia puede matar a alguien, y si la empresa no es firme ahora, la próxima vez el accidente será real.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -5, cumplimiento: -4 }, rel: { gladys: 1, arturo: -1 }, flags: ['despido_marcos'], cartera: { propuesta: 'Despido propuesto' },
          out: 'El doctor deja el lapicero: «¿Con tu propio informe en la mesa?». Firma igual, con cara de quien sabe que firmará más papeles. Lucho se enterará antes de que salga la carta.',
          pro: { ok: 'Priorizas la seguridad y la autoridad de planta.', risk: 'Despedir a quien se durmió después de tres turnos impuestos y de pedir relevo es una sanción desproporcionada: el riesgo lo creó la organización.' },
          kusi: ['triste', 'El que pidió ayuda paga por todos…'] } },
    ],
    rules: [[LEY, 'Ley 29783: el empleador debe prevenir los riesgos, incluidos los que nacen de la organización del trabajo.'], [BP, 'La medida disciplinaria se gradúa según el hecho, las circunstancias y la responsabilidad de cada parte.']],
    mirada: {
      ve: 'La decisión disciplinaria no es solo sobre el trabajador: es un mensaje para toda la planta. Puede decir «la seguridad importa» o «el último eslabón paga por todos». Ser justo exige mirar la cadena completa.',
      visual: { tipo: 'cambio', titulo: 'Quién responde por qué', pares: [['Marcos se durmió', 'Marcos estuvo tres turnos y pidió relevo'], ['Sanción para dar ejemplo', 'Medidas para que no se repita'], ['Solo responde el operario', 'Responde también la organización']] },
    },
  },
  {
    id: 'j7', t: '17:50', ch: 'whatsapp', who: null, titulo: 'El encargo a Milagros', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>${F.has('horas_escaladas') ? 'El doctor te dio luz verde: «El martes quiero los números».' : F.has('registros_ajustados') ? 'Después del correo de Milagros, el doctor te dijo: «Ahora hay que hacerlo bien».' : 'Aunque nadie te lo pidió, sabes que las horas de la caballa no van a desaparecer.'} Milagros ya está guardando sus cosas.</p><p><mark class="clave">Un encargo claro antes del fin de semana</mark>.</p>`,
    type: 'compose', enviaA: 'milagros', para: 'Para: Milagros Chero · Asistencia y planillas', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu encargo eligiendo una frase de cada parte.',
    slots: [
      { id: 'alcance', t: 'Alcance', ops: [
        { id: 'a1', t: 'Milagros, necesito comparar reloj y planilla de toda la línea 2, desde el inicio de la campaña de caballa.', ok: true, por: 'Todo el periodo y todo el grupo afectado.' },
        { id: 'a2', t: 'Milagros, revisa solo las horas de Marcos, para cerrar su caso.', ok: false, por: 'El problema ya no es de Marcos.' },
      ] },
      { id: 'formato', t: 'Formato', ops: [
        { id: 'f1', t: 'Por persona: horas marcadas, horas pagadas y diferencia, sin tocar ningún registro.', ok: true, por: 'Lo que hay, tal como está.' },
        { id: 'f2', t: 'Solo los casos más graves, para no alarmar.', ok: false, por: 'Filtrar de entrada esconde el tamaño real.' },
      ] },
      { id: 'reserva', t: 'Reserva', ops: [
        { id: 'r1', t: 'Mándamelo solo a mí y a Valeria; el martes lo vemos con el doctor.', ok: true, por: 'Información sensible, en el circuito correcto.' },
        { id: 'r2', t: 'Compártelo en el grupo de supervisores para que cada uno explique lo suyo.', ok: false, por: 'Pones a los supervisores a «arreglar» su parte antes de que se analice.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'f1', 'r1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 0, calidad: q === 'buena' ? 3 : -1, etica: sel.reserva === 'r2' ? -3 : 2 },
        flags: q === 'riesgosa' ? [] : ['revision_horas_pedida'],
        cartera: { horas: q === 'buena' ? 'Cuadro reloj vs. planilla, línea 2, para el martes' : 'Revisión parcial pedida' },
        out: q === 'buena' ? 'Milagros responde con un audio, cansada pero firme: «Listo. Sin tocar nada. El lunes en la noche lo tiene». Sales a esperar el bus; ya no hay garúa.' : q === 'aceptable' ? 'Milagros responde «ok», con una pregunta: «¿Y si sale peor de lo que creemos?».' : 'Milagros responde con un emoji de duda. Ese cuadro no va a mostrar lo que necesitas ver.',
        pro: { ok: 'Un encargo con alcance, formato y reserva claros evita que la revisión se convierta en maquillaje.', risk: 'Si la revisión es parcial o pasa por los supervisores primero, cuando llegue la inspección los números no coincidirán.', info: 'El martes empieza otra historia: la de la empresa que tiene que pagar lo que debe.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡A mirar los números de frente!' : 'Ese encargo deja huecos…'],
      };
    },
    rules: [[LEY, 'D.S. 007-2002-TR: el trabajo en sobretiempo se paga con sobretasa o se compensa con descanso si se acuerda.'], [BP, 'Para revisar el propio cumplimiento, pide los datos completos, sin filtros y sin tocar los registros.']],
    mirada: {
      ve: 'El caso de Marcos terminó, pero abrió otro: la empresa trabajó una campaña entera con jornadas que no pagó. Revisar el propio cumplimiento antes de que lo haga otro es de lo más difícil, y de lo más valioso, de este puesto.',
      visual: { tipo: 'mensaje', titulo: 'Un encargo claro', txt: 'Milagros, necesito comparar reloj y planilla de toda la línea 2, desde el inicio de la campaña de caballa. Por persona: horas marcadas, horas pagadas y diferencia, sin tocar ningún registro. Mándamelo solo a mí y a Valeria; el martes lo vemos con el doctor.' },
    },
  },
];
