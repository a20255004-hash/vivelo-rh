// Jefe/a de RR.HH. · Capítulo 4 · «El accidente» · Semana 1, jueves.
// Hilo de las dos semanas: crear desde cero el área de RR.HH. de una empresa familiar de transporte interprovincial.
// Normas citadas:
// - Ley 29783, art. 82: el empleador informa al MTPE los accidentes de trabajo mortales y los incidentes peligrosos.
//   D.S. 005-2012-TR, art. 110 (modificado por D.S. 012-2014-TR): esa notificación se hace dentro de las 24 horas.
//   Los accidentes no mortales los notifica el centro médico que atiende al trabajador (no citamos su plazo).
//   https://busquedas.elperuano.pe/dispositivo/NL/1157929-1
//   https://www.isem.org.pe/portal/files/recurso/legislacion/ds_modifica_110.pdf
// - D.S. 005-2012-TR: el registro de accidentes de trabajo es uno de los registros obligatorios del sistema de gestión
//   de SST, y el empleador debe investigar las causas de los accidentes (Ley 29783).
// - D.S. 017-2009-MTC, art. 30 (tiempos de conducción), citado en el capítulo 2.

export const CAP = {
  n: 4, titulo: 'El accidente', dia: 'Semana 1, jueves', foto: 'assets/esc/alarma.webp',
  lugar: 'Transportes Mantaro · Terminal de Huancayo y La Merced',
  inicio: '05:50', fin: '20:00', cierreHora: '19:45',
  apertura: 'Jueves, 5:50 de la mañana. Todavía está oscuro en El Tambo. Suena tu celular. Es Gonzalo, y nunca te ha llamado a esta hora.', boton: 'Contestar',
  kusi: 'Respira. En una crisis, primero las personas. Luego, todo lo demás.',
  lead: 'Ordenaste las primeras horas, llamaste a los heridos y a sus familias, defendiste una investigación justa, comunicaste con claridad y cuidaste a tu equipo al final del día.',
  reflexion: '¿Qué dice de una empresa cómo trata a su gente el día en que algo sale mal?',
  siguiente: { n: 5, titulo: 'La inspección', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'heridos', p: 'Heridos del bus 22', j: 'Tú · RR.HH.', d: 0, e: '8 en el hospital' },
  { id: 'familias', p: 'Familias de Freddy y Lucía', j: 'Tú', d: 0, e: 'Sin noticias' },
  { id: 'investigacion', p: 'Investigación del accidente', j: 'Gonzalo · Operaciones', d: 0, e: 'Sin empezar' },
  { id: 'registro', p: 'Registro de accidentes', j: 'Patty · RR.HH.', d: 0, e: 'No existe' },
  { id: 'comunicacion', p: 'Comunicado a los trabajadores', j: 'Tú', d: 0, e: 'Rumores en el patio' },
];

export const FUTURO = {
  crisis_personas: ['En las primeras horas pusiste a las personas primero.', 'Los conductores lo recordarán.'],
  investigacion_justa: ['Defendiste una investigación de causas antes de buscar culpables.', 'El inspector la pedirá mañana.'],
  culpa_freddy: ['La empresa culpó a Freddy antes de investigar.', 'El inspector preguntará por las horas de manejo.'],
  comunicado_claro: ['Los trabajadores supieron por ti lo que pasó.', 'Bajó el rumor en el patio.'],
  informe_hechos: ['Tienes un informe preliminar con hechos, horas y testigos.', 'Será tu base en la inspección.'],
  apoyo_sin_condiciones: ['La empresa apoyó a los heridos sin pedirles nada a cambio.', 'Volverá en el capítulo 8.'],
  apoyo_condicionado: ['La empresa ofreció ayuda a cambio de que no denuncien.', 'El inspector se enterará.'],
  patty_descansa: ['Mandaste a Patty a descansar y te quedaste con lo urgente.', 'Llegará mejor a la inspección.'],
};

export const CHATS = {
  grupo: { n: 'Jefaturas Mantaro', sub: 'Don Alberto, Gonzalo y tú', c: '#1F6F9E' },
  familia: { n: 'Directorio Rojas', sub: 'Don Alberto, Gonzalo, Mariela, Rubén y tú', c: '#8A5A2B' },
  conductores: { n: 'Conductores Mantaro', sub: '90 conductores, despacho y tú', c: '#2F6B3F' },
  'don-alberto': { n: 'Don Alberto Rojas', sub: 'Fundador y gerente general', who: 'don-alberto' },
  gonzalo: { n: 'Gonzalo Rojas', sub: 'Gerente de Operaciones', who: 'gonzalo' },
  patty: { n: 'Patty Ñaupari', sub: 'Asistente de RR.HH.', who: 'patty' },
  nestor: { n: 'Néstor Poma', sub: 'Conductor', who: 'nestor' },
  rosa: { n: 'Rosa Huamán', sub: 'Esposa de Freddy Quispe', c: '#B5561E' },
  mariela: { n: 'Mariela Rojas', sub: 'Gerente de Administración y Finanzas · hija', c: '#2E7D6B' },
};

export const WSP = [
  { chat: 'grupo', t: '05:52', de: 'Gonzalo', txt: 'El 22 se salió en la curva antes de San Ramón. Hay heridos. Voy para allá.' },
  { chat: 'conductores', t: '06:20', de: 'Despacho', txt: '¿Es cierto lo del 22? ¿Quién manejaba?' },
  { chat: 'conductores', t: '06:22', de: 'Wilber', txt: 'Dicen que Freddy. Que venía cansado.', si: 'freddy_doble' },
  { chat: 'conductores', t: '06:22', de: 'Wilber', txt: 'Dicen que Freddy. Que reventó la llanta delantera.', si: 'freddy_descansa' },
  { chat: 'rosa', t: '08:05', de: 'Rosa', txt: 'Señorita, soy la esposa de Freddy. Nadie me dice nada. ¿Está vivo? 🙏' },
  { chat: 'nestor', t: '12:10', de: 'Néstor', txt: 'Señora, esto es lo que yo dije el sábado. No quería tener razón.', si: 'nestor_protegido' },
  { chat: 'mariela', t: '19:20', de: 'Mariela', txt: 'Me escribió un conocido de la Intendencia: mañana viene SUNAFIL. Prepárate.' },
];

export const CORREOS = [
  { t: '10:40', de: 'Radio Huancayo · Prensa', para: 'Transportes Mantaro', asunto: 'Pedido de declaración', html: '<p>Buenos días. Estamos informando sobre el accidente de un bus de su empresa en la vía La Merced–San Ramón. ¿Podrían confirmar el número de heridos y si el conductor cumplía con sus horas de descanso?</p><p>Mesa de noticias</p>' },
  { t: '15:30', de: 'Don Alberto Rojas', para: 'Jefa de RR.HH.', asunto: 'Gracias', html: '<p>Gracias por estar hoy. Mi hijo no sabe pedir ayuda, pero la necesitó.</p><p>Alberto</p>', si: 'crisis_personas' },
];

export const QUIZ = [
  { q: 'Según la Ley 29783 y su reglamento, ¿qué debe notificar el empleador al MTPE dentro de las 24 horas?', ops: ['Todo accidente, incluso leve', 'Los accidentes de trabajo mortales y los incidentes peligrosos', 'Nada', 'Solo los accidentes de pasajeros'], ok: 1, por: 'El art. 82 de la Ley 29783 y el art. 110 de su reglamento fijan 24 horas para los mortales y los incidentes peligrosos.' },
  { q: 'Si el accidente de un trabajador no es mortal, ¿quién lo notifica?', ops: ['Nadie', 'El centro médico que atiende al trabajador', 'El propio trabajador', 'La radio'], ok: 1, por: 'Lo notifica el centro médico asistencial. La empresa igual debe registrarlo e investigarlo.' },
  { q: 'En las primeras horas de un accidente, lo primero es…', ops: ['Buscar al culpable', 'Atender a las personas e informar a las familias', 'Responder a la prensa', 'Revisar el seguro del bus'], ok: 1, por: 'Primero las personas. Lo demás puede esperar unas horas.' },
  { q: 'Un buen informe preliminar de accidente contiene…', ops: ['La opinión del gerente', 'Hechos, horas, testigos y lo que falta saber', 'El nombre del culpable', 'Fotos de los heridos para redes'], ok: 1, por: 'Hechos verificables, no conclusiones apresuradas.' },
  { q: 'Ofrecer dinero a un herido a cambio de que no denuncie es…', ops: ['Una buena práctica', 'Una forma de presionarlo que puede volverse contra la empresa', 'Obligatorio', 'Lo que manda la ley'], ok: 1, por: 'El apoyo a los heridos no debe tener condiciones.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '06:00', ch: 'llamada', who: 'gonzalo', titulo: 'La llamada de las seis', banner: 'assets/esc/alarma.webp', lugar: 'Tu cuarto, en El Tambo', show: ['personas', 'tiempo'],
    body: (n, F) => `<p>Gonzalo habla rápido, con el ruido del viento de fondo: «El 22 se salió en una curva antes de San Ramón. Freddy manejaba. Hay siete pasajeros heridos, la terramoza Lucía y él. Nadie murió. Los llevaron al hospital de La Merced».</p><p>${F.has('freddy_doble') ? 'Te acuerdas del WhatsApp de ayer: Freddy hizo dos vueltas.' : 'Te acuerdas de que ayer Freddy durmió ocho horas.'} Te vistes mientras piensas. <mark class="clave">Ordena lo que harás en las primeras horas</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena las primeras acciones. Usa las flechas.', boton: 'Empezar',
    items: [
      { id: 'salud', t: 'Confirmar que todos los heridos están atendidos y quién los acompaña', por: 'Primero la vida y la salud.' },
      { id: 'fam', t: 'Avisar a las familias de Freddy y Lucía antes de que se enteren por redes', por: 'Nadie debería saberlo por Facebook.' },
      { id: 'notif', t: 'Revisar con Gonzalo qué hay que notificar y a quién', por: 'Si hubiera un fallecido o un incidente peligroso, el plazo es de 24 horas.' },
      { id: 'evid', t: 'Guardar las hojas de ruta y el registro de horas del bus 22', por: 'La evidencia se pierde en las primeras horas.' },
      { id: 'com', t: 'Informar a los trabajadores con hechos', por: 'Antes de que el rumor ocupe el lugar de la verdad.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 2, calidad: q === 'buena' ? 3 : 0, tiempo: -1 },
        flags: q === 'riesgosa' ? [] : ['crisis_personas'], cartera: { heridos: q === 'riesgosa' ? 'Sin orden claro' : 'Heridos atendidos y acompañados' },
        out: q === 'buena' ? 'A las 6:40 tienes una lista en el celular, la mochila puesta y a Patty buscando las hojas de ruta del 22. Tomas un taxi al terminal.' : 'Empiezas a moverte, pero el orden se te escapa: a las 7 todavía no sabes quién acompaña a los heridos.',
        pro: { ok: 'En una crisis, un orden sencillo evita olvidar lo esencial.', info: 'Ten este orden escrito para la próxima vez: será tu primer protocolo de crisis.' },
        kusi: [q === 'buena' ? 'animo' : 'preocupado', q === 'buena' ? 'Personas, familias, evidencia. ¡Bien!' : 'Primero, las personas…'],
      };
    },
    rules: [[LEY, 'Accidentes mortales e incidentes peligrosos: notificación al MTPE dentro de las 24 horas (Ley 29783, art. 82; D.S. 005-2012-TR, art. 110).']],
    mirada: {
      ve: 'Las primeras horas de una crisis definen cómo la recordarán todos. Una jefa de RR.HH. no maneja la ambulancia ni la grúa: se asegura de que nadie quede solo, de que las familias sepan y de que la verdad no se pierda.',
      visual: { tipo: 'flujo', titulo: 'Las primeras horas', pasos: ['Salud', 'Familias', 'Notificar si toca', 'Evidencia', 'Comunicar'] },
      normas: [{ ley: 'Ley 29783, art. 82 · D.S. 005-2012-TR, art. 110', dice: 'El empleador notifica al MTPE los accidentes mortales y los incidentes peligrosos dentro de 24 horas.', practica: 'Los accidentes no mortales los notifica el centro médico; la empresa igual los registra e investiga.' }],
    },
  },
  {
    id: 'a2', t: '08:10', ch: 'llamada', who: null, titulo: 'Las llamadas más difíciles', banner: 'assets/foto/llamada.webp', lugar: 'Camioneta rumbo a La Merced', show: ['personas', 'confianza'],
    body: () => `<p>Vas en la camioneta de la empresa por la carretera a Tarma, con las curvas y la neblina de la puna. La señal va y viene.</p><p><mark class="clave">Llamas a quienes más lo necesitan</mark>.</p>`,
    type: 'calls',
    calls: [['Rosa Huamán · esposa de Freddy', 'Contesta llorando, con la bebita de fondo', '«¿Está vivo? Nadie me dice nada. No tengo cómo ir a La Merced, señorita, estoy sola con la bebé.»'], ['Doctora de emergencia · hospital de La Merced', 'Contesta entre ambulancias', '«El conductor tiene fractura de brazo y está consciente. La terramoza, golpe en la cabeza: la observamos 24 horas. Los pasajeros, contusiones; dos se quedan.»'], ['Lucía Ramos · terramoza', 'Contesta desde la camilla', '«Estoy bien, jefa. Me duele la cabeza. ¿Me van a descontar los días? Y Freddy… él no tuvo la culpa, fue todo muy rápido.»']],
    prompt: 'Terminaste las llamadas. ¿Qué haces ahora?',
    choices: [
      { id: 'a', label: 'Pedir que una movilidad de la empresa lleve a Rosa con su bebé a La Merced, y decirle a Lucía que sus días de descanso médico no se descuentan como falta.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3, tiempo: -2 }, cartera: { familias: 'Rosa en camino; Lucía tranquila' },
          envia: ['rosa', 'Rosa, Freddy está vivo y consciente, con el brazo fracturado. A las 10 pasa por usted una movilidad de la empresa para llevarla con la bebé a La Merced. Yo estaré allá.'],
          out: 'Rosa responde con un audio que no puedes escuchar entero. Lucía te dice «gracias, jefa» y se duerme.',
          pro: { ok: 'Respondes a la necesidad concreta de cada persona.', info: 'Un descanso médico por accidente de trabajo no es una falta: verifica cómo se registra en la planilla.' },
          kusi: ['feliz', 'Así se acompaña.'] } },
      { id: 'b', label: 'Decirles que estén tranquilas, que la empresa se pondrá en contacto cuando se sepa más.',
        res: { q: 'aceptable', fx: { personas: -1, tiempo: 2 }, cartera: { familias: 'En espera' },
          out: 'Rosa cuelga. A las 9 publica en Facebook: «Mi esposo accidentado y su empresa ni un pasaje».',
          pro: { ok: 'No prometes lo que aún no sabes.', risk: 'La familia queda sola en el peor momento.' },
          kusi: ['triste', 'Rosa necesitaba algo hoy…'] } },
    ],
    mirada: { ve: 'Después de un accidente, la familia no necesita un comunicado: necesita saber si su persona está viva, cómo llegar y quién la va a acompañar. Esas respuestas concretas son el corazón de la gestión de crisis.' },
  },
  {
    id: 'a3', t: '10:00', ch: 'presencial', who: 'gonzalo', titulo: '«Se durmió y punto»', banner: 'assets/foto2/tension.webp', lugar: 'Pasillo del hospital de La Merced', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Gonzalo está pálido, con la casaca llena de barro. ${F.has('freddy_doble') ? 'Sabe que Freddy venía de hacer dos vueltas. Lo sabe porque él se las dio.' : 'El mecánico de la grúa le dijo que la llanta delantera se reventó, pero él no lo menciona.'}</p><p>«Para la policía y para la prensa: el chofer se durmió. Es su responsabilidad. <mark class="clave">Que no se diga más</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que nadie sabe todavía la causa, que hay que investigar las horas, el bus y la vía antes de culpar, y que la empresa no declarará culpables hoy.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 4, confianza: -1 }, rel: { gonzalo: -1 }, flags: ['investigacion_justa'], cartera: { investigacion: 'Causas por investigar' },
          out: 'Gonzalo te mira fijo: «¿Y si sale que fue por los turnos?». Le dices que entonces lo arreglarán, juntos. Se sienta en la banca y se tapa la cara con las manos.',
          pro: { ok: 'Proteges a Freddy de un juicio apresurado y a la empresa de una mentira.', risk: 'Gonzalo teme lo que la investigación encuentre.', info: 'Una investigación busca causas: personas, equipos, organización. No un culpable.' },
          kusi: ['animo', 'Primero los hechos, después las conclusiones.'] } },
      { id: 'b', label: 'Aceptar la versión de Gonzalo: Freddy manejaba y la responsabilidad de mantenerse despierto es del conductor.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5 }, rel: { gonzalo: 1, nestor: -1 }, flags: ['culpa_freddy'], cartera: { investigacion: 'Culpable antes de investigar' },
          out: 'Gonzalo llama a la policía y repite su versión. Freddy, con el brazo enyesado, escucha desde la camilla que la empresa dice que se durmió.',
          pro: { ok: 'Una versión simple y rápida.', risk: 'Si el inspector encuentra las horas o la llanta, la empresa habrá mentido.' },
          kusi: ['indignado', '¿Y los turnos? ¿Y la llanta?'] } },
    ],
    rules: [[LEY, 'El empleador debe investigar las causas de los accidentes de trabajo (Ley 29783).'], [BP, 'Una investigación busca causas en personas, equipos y organización, no un culpable.']],
    mirada: {
      ve: 'Culpar al conductor es la salida más cómoda: cierra el caso y deja intactos los turnos, el mantenimiento y el pago por vuelta. Pero si la causa está en la organización, el próximo accidente ya está en camino.',
      visual: { tipo: 'embudo', titulo: 'Las causas posibles', niveles: [['Lo que vemos: el bus en la cuneta', 1], ['Lo inmediato: sueño, llanta, curva', 3], ['Lo de fondo: turnos, pago, mantenimiento', 3]] },
    },
  },
  {
    id: 'a4', t: '12:30', ch: 'whatsapp', who: null, titulo: 'Lo que dice el patio', banner: 'assets/foto2/pasillo.webp', lugar: 'Cafetería del hospital', show: ['confianza', 'personas'],
    body: () => `<p>En el grupo de conductores hay 63 mensajes nuevos: audios, fotos del bus volteado, un «dicen que hay un muerto». La radio ya preguntó si Freddy cumplía sus horas.</p><p>Comes un tamal frío mientras escribes. <mark class="clave">Hechos, sin culpables, con lo que viene</mark>.</p>`,
    type: 'compose', enviaA: 'conductores', para: 'Para: Conductores Mantaro (90)', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hech', t: 'Lo que pasó', ops: [
        { id: 'h1', t: 'Compañeros: el bus 22 se salió de la vía hoy a las 5:40 antes de San Ramón. No hay fallecidos. Freddy, Lucía y siete pasajeros están atendidos en La Merced.', ok: true, por: 'Hechos que desmienten el rumor.' },
        { id: 'h2', t: 'Compañeros: tranquilos, no ha pasado nada grave.', ok: false, por: 'Minimizar lo que todos vieron en fotos destruye tu credibilidad.' },
      ] },
      { id: 'causa', t: 'Sobre la causa', ops: [
        { id: 'c1', t: 'Todavía no sabemos la causa. La vamos a investigar y les contaremos lo que encontremos.', ok: true, por: 'Honesto y sin culpables.' },
        { id: 'c2', t: 'Les recordamos que cada conductor es responsable de llegar descansado.', ok: false, por: 'Hoy suena a culpar a Freddy.' },
      ] },
      { id: 'pide', t: 'Lo que pides', ops: [
        { id: 'p1', t: 'Si alguien se siente cansado antes de salir, avise a despacho o a mí: no habrá sanción por decirlo.', ok: true, por: 'Abres una puerta segura para hablar de fatiga.' },
        { id: 'p2', t: 'Por favor no reenvíen fotos ni audios.', ok: null, por: 'Razonable, pero no ayuda a prevenir.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hech === 'h2' || sel.causa === 'c2', buenas = ['h1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -3 : 1, personas: q === 'buena' ? 3 : 0 }, rel: { nestor: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['comunicado_claro'] : [], cartera: { comunicacion: q === 'buena' ? 'Comunicado con hechos' : 'Comunicado enviado' },
        out: q === 'buena' ? 'El grupo se calla diez minutos. Luego, Wilber: «Gracias por avisar, jefa». Dos conductores escriben a despacho que hoy salen cansados. Por primera vez, alguien lo dice.' : mal ? 'Llegan dos audios molestos: «¿Ahora la culpa es de Freddy?». El rumor crece.' : 'El grupo baja el tono, pero nadie cuenta si está cansado.',
        pro: { ok: 'Hechos, honestidad sobre lo que no se sabe y una puerta abierta.', risk: 'Minimizar o culpar en un grupo de 90 se multiplica en minutos.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Alguien se animó a decir que está cansado!' : 'El patio escuchó otra cosa…'],
      };
    },
    mirada: {
      ve: 'En una crisis, el silencio de la empresa lo llena el grupo de WhatsApp. Un mensaje con hechos y con humildad sobre lo que no se sabe es más creíble que cualquier comunicado de prensa.',
      visual: { tipo: 'mensaje', titulo: 'Hechos, sin culpables', txt: 'El bus 22 se salió de la vía a las 5:40. No hay fallecidos. Todavía no sabemos la causa: la vamos a investigar. Si alguien se siente cansado antes de salir, avise: no habrá sanción.' },
    },
  },
  {
    id: 'a5', t: '14:30', ch: 'documento', who: null, titulo: 'El informe preliminar', banner: 'assets/foto/revisa.webp', lugar: 'Oficina de la agencia de La Merced', show: ['calidad', 'cumplimiento'],
    body: () => `<p>En la agencia de La Merced hace calor y huele a fruta madura. El administrador te pasa el borrador de informe que escribió Gonzalo en la mañana.</p><p>Será el primer registro del accidente. <mark class="clave">Marca lo que no debe quedar así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que deben corregirse.',
    doc: { t: 'Informe preliminar · bus 22', sub: 'Vía La Merced–San Ramón · jueves 5:40' },
    lines: [
      { id: 'hora', t: 'Hora y lugar: 5:40, curva del km de ingreso a San Ramón, lluvia ligera.' },
      { id: 'culpa', t: 'Causa: el conductor se quedó dormido por irresponsabilidad.', bad: BP, why: 'Es una conclusión sin investigación. El informe preliminar registra hechos, no culpables.' },
      { id: 'horas', t: 'Horas de manejo del conductor en las últimas 48 horas: no se consignan.', bad: LEY, why: 'Es el dato más importante para investigar la fatiga y la empresa tiene la obligación de registrar e investigar el accidente.' },
      { id: 'testigos', t: 'Testigos: terramoza Lucía Ramos y dos pasajeros, con teléfono.' },
      { id: 'llanta', t: 'Estado del bus: «bueno», sin revisar la llanta delantera que encontró la grúa.', bad: BP, why: 'Hay un indicio mecánico que nadie revisó. Descartarlo es sesgar la investigación.' },
      { id: 'fotos', t: 'Se adjuntan fotos de los heridos tomadas por el personal para «tener pruebas».', bad: LEY, why: 'Son datos de salud de personas identificadas. No se recogen ni circulan sin necesidad ni consentimiento.' },
      { id: 'atencion', t: 'Atención: heridos trasladados al hospital de La Merced a las 6:30.' },
    ],
    res: ({ missLey, hitsLey, falsos }) => ({
      out: missLey ? 'El informe queda con huecos que un inspector notará primero: faltan las horas de manejo.' : `Corriges ${hitsLey} puntos legales y quitas la conclusión apresurada. El informe ahora dice qué pasó, qué falta saber y quién lo vio.`,
      flags: missLey ? [] : ['informe_hechos'], cartera: { registro: missLey ? 'Informe con huecos' : 'Informe preliminar con hechos' },
      pro: { ok: 'Hechos, horas y testigos: la base de una investigación seria.', risk: 'Un informe que ya trae culpable no investiga nada.', info: 'Abre hoy el registro de accidentes de trabajo de la empresa: no existía.' },
      kusi: missLey ? ['pensando', '¿Y las horas de Freddy?'] : ['celebra', '¡Un informe que se puede defender!'],
    }),
    rules: [[LEY, 'El registro de accidentes de trabajo es obligatorio en el sistema de gestión de SST (D.S. 005-2012-TR).']],
    mirada: {
      ve: 'El primer documento de un accidente marca todo lo que viene después: la investigación, la inspección y lo que creerá la familia. Escribir «se durmió por irresponsable» en la primera línea es decidir el final antes de empezar.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al informe', pares: [['Se durmió por irresponsable', 'Causa en investigación'], ['Horas: no se consignan', 'Horas de las últimas 48 horas'], ['Bus en buen estado', 'Revisar la llanta delantera'], ['Fotos de heridos', 'Sin fotos de personas']] },
    },
  },
  {
    id: 'a6', t: '17:30', ch: 'presencial', who: 'don-alberto', titulo: '«Que no nos denuncien»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de la gerencia, de vuelta en Huancayo', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>Don Alberto te espera con la luz apagada. Parece diez años más viejo que el lunes. «En 30 años nunca tuvimos heridos.»</p><p>Saca una chequera. «Quiero darle algo a cada herido. Pero que firmen que <mark class="clave">no van a denunciar a la empresa</mark>. Mariela dice que así se hace.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle apoyar sin condiciones: gastos médicos, traslados y visitas a los heridos; y que cualquier acuerdo económico se trate después, con abogado y sin presión.',
        res: { q: 'buena', fx: { etica: 6, personas: 4, confianza: 2 }, rel: { 'don-alberto': 1 }, flags: ['apoyo_sin_condiciones'],
          out: 'Don Alberto guarda la chequera. «Mi papá decía que la palabra vale más que la firma.» Mañana irá él mismo a La Merced a ver a los heridos.',
          pro: { ok: 'El apoyo sin condiciones cuida a las personas y a la reputación de la empresa.', risk: 'Mariela dirá que es un riesgo financiero.', info: 'Los pasajeros heridos tienen la cobertura del SOAT del bus; revisa con Mariela cómo se activa.' },
          kusi: ['celebra', 'La palabra de Don Alberto, intacta.'] } },
      { id: 'b', label: 'Ayudarlo a redactar el documento: es una forma rápida de cerrar el tema y ayudar a los heridos.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -3, personas: -2 }, flags: ['apoyo_condicionado'],
          out: 'Redactas una hoja con la palabra «desistimiento». Mañana alguien la llevará a pasajeros con suero en el brazo.',
          pro: { ok: 'Los heridos reciben dinero rápido.', risk: 'Firmar bajo dolor y presión no es un acuerdo libre, y el inspector lo verá así.' },
          kusi: ['indignado', '¿Una firma desde la camilla?'] } },
    ],
    rules: [[BP, 'El apoyo a los heridos de un accidente no se condiciona a que renuncien a sus derechos.']],
    mirada: {
      ve: 'Don Alberto no quiere comprar silencio: quiere salvar lo que construyó, y tiene miedo. RR.HH. le muestra que la mejor protección de la empresa es que los heridos sientan que la empresa estuvo, sin pedirles nada.',
      visual: { tipo: 'balanza', a: { t: 'Ayuda con firma', items: ['Cierra el tema rápido', 'Parece compra de silencio', 'Riesgo ante el inspector'] }, b: { t: 'Ayuda sin condiciones', items: ['Confianza de las familias', 'Reputación', 'Acuerdos después, con calma'] } },
    },
  },
  {
    id: 'a7', t: '19:20', ch: 'whatsapp', who: 'patty', titulo: '«Me quedo toda la noche»', banner: 'assets/esc/reloj.webp', lugar: 'Oficina de RR.HH.', show: ['personas', 'tiempo'],
    body: (n, F) => `<p>Mariela acaba de escribir: mañana viene SUNAFIL. Patty sigue en la oficina, rodeada de archivadores. ${F.has('patty_sola') ? 'Tiene ojeras y le tiemblan las manos.' : 'Se ve cansada, pero ordenada.'}</p><p>«Jefa, me quedo toda la noche. Ordeno contratos, boletas, todo. <mark class="clave">No quiero que nos agarren desprevenidas</mark>.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Mandarla a su casa: preparar solo tres carpetas clave hasta las 8 y mañana llegar a las 7 descansada. Tú te quedas una hora más.',
        res: { q: 'buena', fx: { personas: 4, tiempo: -2 }, rel: { patty: 1 }, flags: ['patty_descansa'],
          envia: ['patty', 'Patty, a las 8 te vas. Solo tres carpetas: horas de los conductores, contratos y el informe del accidente. Mañana te quiero a las 7 descansada. Lo demás lo vemos juntas.'],
          out: 'Patty protesta un poco y luego obedece. A las 8:05 te manda una foto: tres carpetas con etiquetas de colores y un «chau, jefa».',
          pro: { ok: 'Cuidas a tu equipo y enfocas el esfuerzo.', info: 'Ante una inspección, se presenta lo que existe; no se fabrica en una noche.' },
          kusi: ['feliz', 'Descansada rinde el doble.'] } },
      { id: 'b', label: 'Agradecerle y quedarse juntas hasta que esté todo.',
        res: { q: 'aceptable', fx: { personas: -2, calidad: 2 },
          out: 'Terminan a las 2 de la mañana con un emoliente de la esquina. Patty se duerme en el taxi.',
          pro: { ok: 'Mucho avance en una noche.', risk: 'Llegarán agotadas a la inspección, y el cansancio produce errores.' },
          kusi: ['pensando', '¿Y mañana con qué energía?'] } },
    ],
    mirada: { ve: 'Una jefa también enseña a su equipo cómo se vive una crisis. Si la respuesta es siempre «toda la noche», el área termina rota. Y en la víspera de una inspección, lo que importa es la verdad ordenada, no la cantidad de papel.' },
  },
];
