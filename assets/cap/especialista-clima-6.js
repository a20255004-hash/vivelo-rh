// Analista de Clima y Cultura · Capítulo 6 · «El canal» · Semana 2, lunes.
// Hilo de las dos semanas: la encuesta de clima de AseguraPlus y el área de Siniestros, que saca 42 % de favorabilidad.
// Normas citadas:
// - Ley 27942, Ley de Prevención y Sanción del Hostigamiento Sexual, y su Reglamento (D.S. 014-2019-MIMP): RR.HH. dicta
//   medidas de protección en un plazo no mayor de tres días hábiles (entre ellas, la rotación o suspensión temporal del
//   presunto hostigador); confidencialidad de la identidad de la presunta víctima; no revictimización. Ya citadas en el
//   capítulo 5.
//   https://andina.pe/AGENCIA/noticia-acoso-sexual-laboral-rotaran-o-suspenderan-su-puestos-a-hostigadores-770524.aspx
//   https://elperuano.pe/noticia/302759-hostigamiento-sexual-que-deben-hacer-las-empresas-para-prevenir-y-atender-estos-casos-en-el-trabajo
// - Ley 29733 (datos personales), arts. 6 y 7, ya citada en el capítulo 1.
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23

export const CAP = {
  n: 6, titulo: 'El canal', dia: 'Semana 2, lunes', foto: 'assets/foto2/reunion-circulos.webp',
  lugar: 'AseguraPlus · Gerencia de Gestión Humana, piso 10',
  inicio: '07:55', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lunes de la segunda semana. Dormiste mal. A las ocho en punto tocas la puerta de la Dra. Carmen Villavicencio, abogada laboralista, quince años en RR.HH., una foto de sus nietos en el escritorio y un expediente en blanco que ya tiene un número.', boton: 'Entrar',
  kusi: 'Hoy hay dos carriles: el caso y el clima. Tu trabajo es que no se crucen.',
  lead: 'Ayudaste a pensar medidas que protegen sin castigar a la víctima, sacaste del informe de clima todo rastro del caso, sostuviste la reunión con los supervisores con Hernán en la mesa y respondiste a un gerente que quería saber quién había hablado.',
  reflexion: '¿Qué se siente guardar algo que sabes, frente a alguien que te pregunta directo?',
  siguiente: { n: 7, titulo: 'El plan', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'caso', p: 'Caso reservado (canal de hostigamiento)', j: 'Dra. Villavicencio', d: 0, e: 'Medidas por definir' },
  { id: 'focus', p: 'Resumen del focus group', j: 'Cultura', d: 0, e: 'Por revisar' },
  { id: 'supervisores', p: 'Conversación con supervisores', j: 'Sofía · Cultura', d: 0, e: 'Hoy, 11 a. m.' },
  { id: 'plan', p: 'Plan de acción de Siniestros', j: 'Sofía · Gonzalo', d: 0, e: 'Para el jueves' },
];

export const FUTURO = {
  medidas_buenas: ['Las medidas de protección cuidan a Daniela sin cambiarle la vida a ella.', 'Hernán deja de supervisar a las practicantes mientras se investiga.'],
  medidas_revictiman: ['La medida principal fue trasladar a Daniela a otra sede.', 'Ella siente que la castigaron por hablar.'],
  informe_limpio: ['El resumen de clima no tiene ningún rastro del caso.', 'Gonzalo no podrá cruzar una cosa con la otra.'],
  informe_cruzado: ['El resumen de clima menciona «conductas inapropiadas con practicantes».', 'Gonzalo ya sabe por dónde buscar.'],
  supervisores_escuchados: ['Los supervisores tuvieron su espacio y Hernán no recibió ningún dato.', 'Dos supervisores se ofrecieron a cambiar la reunión de los lunes.'],
  hernan_expuesto: ['En la reunión de supervisores se insinuó que «hay algo más» con Hernán.', 'Ahora todos especulan.'],
  gonzalo_sin_nombres: ['Le dijiste a Gonzalo que no puedes hablar del caso y que el clima va por otro carril.', 'Está furioso, pero no tiene ni un nombre.'],
  gonzalo_pista: ['A Gonzalo se le escapó una pista: que alguien del focus group habló.', 'Lucía corre riesgo.'],
};

export const CHATS = {
  equipo: { n: 'Cultura AseguraPlus', sub: 'Sofía, Renzo y tú', c: '#2F6B3F' },
  sofia: { n: 'Sofía Ledesma', sub: 'Jefa de Cultura', who: 'sofia' },
  gonzalo: { n: 'Gonzalo Ferreyra', sub: 'Gerente de Siniestros', who: 'gerente' },
  lucia: { n: 'Lucía Ramos', sub: 'Analista de Siniestros', who: 'colaboradora' },
  hernan: { n: 'Hernán Díaz', sub: 'Supervisor de Siniestros', who: 'supervisor' },
  carmen: { n: 'Carmen Villavicencio', sub: 'Responsable del canal de hostigamiento', c: '#8A3B2E' },
  renzo: { n: 'Renzo Quispe', sub: 'Practicante de Psicología', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'equipo', t: '08:05', de: 'Sofía', txt: 'Hoy: supervisores a las 11, resumen del focus a Gonzalo por la tarde. Lo otro, ni una palabra en este grupo.' },
  { chat: 'lucia', t: '09:15', de: 'Lucía', txt: 'Buenos días. ¿Hay novedades? Hernán llegó de buen humor, como si nada.', si: 'limites_claros' },
  { chat: 'lucia', t: '09:15', de: 'Lucía', txt: '¿Usted no dijo nada, verdad? Lo pensé todo el fin de semana.', si: 'silencio_prometido' },
  { chat: 'carmen', t: '12:40', de: 'Carmen', txt: 'Ya conversé con la practicante, con su consentimiento y con una psicóloga presente. Desde hoy rige la medida. Gracias por el cuidado del viernes.', si: 'caso_en_canal' },
  { chat: 'hernan', t: '15:20', de: 'Hernán', txt: 'Me acaban de comunicar algo que no entiendo. ¿Tú sabías de esto?' },
  { chat: 'sofia', t: '17:30', de: 'Sofía', txt: 'Gonzalo me llamó gritando. Me dijo que tú no le soltaste nada. Gracias. Mañana empezamos el plan.', si: 'gonzalo_sin_nombres' },
];

export const CORREOS = [
  { t: '07:50', de: 'Carmen Villavicencio', para: 'Sofía Ledesma; Analista de Clima y Cultura', asunto: 'Reserva · expediente HS-2026-07', html: '<p>Les recuerdo que todo lo relacionado con este expediente es reservado. Solo lo conocemos las tres y, cuando corresponda, las personas que intervengan en la investigación. No se menciona en informes de clima, reuniones de área ni chats.</p><p>Carmen</p>' },
  { t: '14:10', de: 'Gerencia de Gestión Humana', para: 'Gonzalo Ferreyra', asunto: 'Comunicación reservada · medida temporal', html: '<p>Se le comunica que, a partir de hoy y de manera temporal, el Sr. Hernán Díaz no tendrá a su cargo la supervisión de practicantes del área. La medida no implica juicio alguno y responde a un procedimiento reservado en curso.</p>' },
];

export const QUIZ = [
  { q: '¿Cuál de estas es una buena medida de protección en un caso de hostigamiento sexual?', ops: ['Trasladar a la víctima a otra sede sin preguntarle', 'Que el presunto hostigador deje de supervisarla mientras se investiga', 'Suspender las prácticas de la víctima', 'Anunciar el caso en el área'], ok: 1, por: 'La medida protege a la víctima sin cambiarle la vida a ella; el Reglamento de la Ley 27942 prevé, entre otras, la rotación o suspensión temporal del presunto hostigador.' },
  { q: 'El informe de clima menciona «conductas inapropiadas con practicantes». ¿Qué problema hay?', ops: ['Ninguno', 'Cruza el caso reservado con el informe de clima y da pistas', 'Que debería tener nombres', 'Que es muy corto'], ok: 1, por: 'Lo que está en el canal no se menciona en informes de clima: los dos carriles se mantienen separados.' },
  { q: 'Un gerente pregunta «¿quién denunció?». Lo correcto es…', ops: ['Decirle que fue alguien del focus group', 'Explicarle que el procedimiento es reservado y que no puedes hablar de él', 'Negar que exista un caso', 'Darle el nombre en privado'], ok: 1, por: 'La identidad de quien informa y de la presunta víctima es reservada.' },
  { q: 'En la reunión con supervisores, el supervisor investigado pregunta si «hay algo contra él». Tú…', ops: ['Le cuentas lo que sabes', 'Redirigir a la agenda del clima: esta reunión es para escuchar a los supervisores', 'Le dices que sí delante de todos', 'Cancelas la reunión'], ok: 1, por: 'No es el espacio ni tu rol: el procedimiento le comunicará lo que corresponda, con sus garantías.' },
  { q: 'Hablar con la víctima, ¿quién lo hace?', ops: ['La analista de clima, que la conoce', 'La responsable del canal, con su consentimiento y cuidado', 'Su supervisor', 'El gerente del área'], ok: 1, por: 'El canal se acerca con cuidado, evitando que la víctima repita su relato una y otra vez.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'n1', t: '08:10', ch: 'presencial', who: null, titulo: 'Las medidas', banner: 'assets/foto/acuerdo.webp', lugar: 'Oficina de la Dra. Villavicencio, piso 10', show: ['cumplimiento', 'personas', 'etica'],
    body: (n, F) => `<p>La Dra. Villavicencio lee tu hoja de hechos con un lápiz en la mano. ${F.has('caso_en_canal') ? '«Llegó el viernes; el plazo corre desde entonces. Hoy tiene que quedar la medida.»' : '«Llegó tarde. Hoy no se nos puede pasar.»'} ${F.has('hernan_sospecha') ? '«Y si Hernán ya preguntó por Lucía, hay que pensar también en ella.»' : ''}</p><p>«Ayúdame a pensar. <mark class="clave">¿Qué protege a Daniela sin castigarla a ella?</mark>»</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de medidas.', boton: 'Proponer las medidas',
    bloques: [
      { id: 'dani', t: 'Para Daniela', n: 2, ops: [
        { id: 'd1', t: 'Que Hernán deje de supervisar a las practicantes mientras se investiga.', ok: true, por: 'El cambio recae en el presunto hostigador, no en la víctima.' },
        { id: 'd2', t: 'Ofrecerle acompañamiento psicológico, si ella lo quiere.', ok: true },
        { id: 'd3', t: 'Trasladarla a la sede de Surquillo «para que esté tranquila».', ok: false, por: 'Cambiarle la vida a la víctima se vive como castigo y desalienta a otras a hablar.' },
        { id: 'd4', t: 'Suspender sus prácticas hasta que termine el caso.', ok: false, por: 'Le quita la constancia que justamente teme perder.' },
      ] },
      { id: 'lucia', t: 'Para quien informó', n: 1, ops: [
        { id: 'l1', t: 'Que la asignación de casos de todo el equipo pase temporalmente por el coordinador de la otra sede.', ok: true, por: 'Protege a Lucía sin señalarla: aplica a todos.' },
        { id: 'l2', t: 'Una medida solo para Lucía, para que nadie la moleste.', ok: false, por: 'Una medida individual la identifica como quien habló.' },
      ] },
      { id: 'reserva', t: 'Cómo se comunica', n: 2, ops: [
        { id: 'r1', t: 'A Gonzalo: solo la medida, sin nombres ni hechos.', ok: true, por: 'Necesita saberla para organizar el área, no el porqué.' },
        { id: 'r2', t: 'A Hernán: la medida y que hay un procedimiento, con sus garantías para defenderse.', ok: true, por: 'El denunciado también tiene derechos en el procedimiento.' },
        { id: 'r3', t: 'Al equipo: un correo explicando por qué Hernán ya no supervisa practicantes.', ok: false, por: 'Expone a todos y convierte el caso en chisme.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 4 : -2, etica: q === 'buena' ? 3 : 0 },
        flags: [q === 'riesgosa' ? 'medidas_revictiman' : 'medidas_buenas'], cartera: { caso: q === 'riesgosa' ? 'Medidas que recaen en la víctima' : 'Medidas propuestas: protegen sin señalar' },
        out: q === 'buena' ? 'La doctora asiente: «Esto es lo que voy a firmar. Lo de la asignación de casos para todo el equipo es buena idea: nadie puede decir que es por Lucía».' : 'La doctora tacha un par de líneas: «Si la mandamos a Surquillo, el mensaje para el resto es: “si hablas, te mudan”».',
        pro: { ok: 'Una buena medida de protección cambia la situación del presunto hostigador, no la de la víctima, y no identifica a quien informó.', risk: 'Las medidas que recaen en la víctima la revictimizan y enseñan al resto a callar.', info: 'Las medidas son temporales y no son una sanción: protegen mientras se investiga.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Protege a ella, no la castiga.' : '¿A quién le cambia la vida esa medida?'],
      };
    },
    rules: [[LEY, 'Reglamento de la Ley 27942: medidas de protección en un plazo no mayor de tres días hábiles; entre ellas, la rotación o suspensión temporal del presunto hostigador.'], [LEY, 'Principio de no revictimización.']],
    mirada: {
      ve: 'Las medidas de protección son la parte más visible de un caso reservado: todos notan que algo cambió. Por eso se diseñan para que protejan sin contar la historia, y para que el cambio recaiga en quien está siendo investigado.',
      visual: { tipo: 'balanza', a: { t: 'Medidas sobre la víctima', items: ['Mudarla de sede', 'Suspender sus prácticas'] }, b: { t: 'Medidas sobre la situación', items: ['Hernán sin practicantes a cargo', 'Asignación de casos neutral', 'Acompañamiento si ella quiere'] } },
      normas: [{ ley: 'Ley 27942 y su Reglamento (D.S. 014-2019-MIMP)', dice: 'Recibida la queja, RR.HH. dicta medidas de protección en un plazo no mayor de tres días hábiles, como la rotación o suspensión temporal del presunto hostigador.', practica: 'La medida no es una sanción: protege mientras se investiga.' }],
    },
  },
  {
    id: 'n2', t: '09:40', ch: 'documento', who: null, titulo: 'El resumen para Gonzalo', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Renzo te dejó el resumen del focus group impreso, con un post-it: «¿Le falta algo?». Esta tarde lo verá Gonzalo. Lo lees con otros ojos: <mark class="clave">ahora sabes cosas que Renzo no sabe</mark>, y nada de eso puede asomar aquí.</p>`,
    type: 'flag', prompt: 'Marca lo que no puede ir en el resumen de clima.',
    doc: { t: 'Resumen del focus group · Siniestros', sub: 'Para la Gerencia de Siniestros · versión 2' },
    lines: [
      { id: 't1', t: 'Tema 1: los errores se exponen en la reunión semanal de los lunes, con el nombre del analista en pantalla.' },
      { id: 't2', t: 'Tema 2: carga de cierre desde el sistema nuevo; se cuelga a las 5 p. m.' },
      { id: 'pract', t: 'Tema 3: preocupación por conductas inapropiadas de un supervisor con practicantes.', bad: LEY, why: 'Eso no salió en el focus group: es el caso reservado. Mencionarlo en un informe de clima cruza los carriles y expone a la víctima.' },
      { id: 'nro', t: 'Participaron 7 analistas de las dos sedes; ningún supervisor.' },
      { id: 'ausente', t: 'Una participante no habló durante toda la sesión.', bad: BP, why: 'En un grupo de siete, describir a quien calló es casi señalarla.' },
      { id: 'pos', t: 'Lo que funciona: compañerismo entre analistas.' },
      { id: 'prop', t: 'Propuestas del grupo: hablar los errores en privado; revisar el horario de cierre.' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'El resumen sale con el «tema 3». Gonzalo lo leerá esta tarde, justo después de recibir el comunicado de la medida.' : 'Sacas el tema 3 y la línea de la participante callada. Renzo pregunta por qué lo del tema 3. «Porque no salió en el grupo», le dices. Es verdad, y es suficiente.',
      flags: [missLey ? 'informe_cruzado' : 'informe_limpio'],
      cartera: { focus: missLey ? 'Resumen con una pista del caso' : 'Resumen limpio, listo para Gonzalo' },
      pro: { ok: 'El informe de clima dice solo lo que salió en el proceso de clima.', risk: 'Una línea que cruza el caso con el clima le da al gerente, el mismo día de la medida, la pista exacta.', info: 'Si alguien del equipo pregunta por qué quitas algo, no necesitas explicar más de lo que puedes.' },
      kusi: missLey ? ['preocupado', 'Los carriles se cruzaron…'] : ['celebra', 'Un informe que no delata a nadie.'],
    }),
    rules: [[LEY, 'Ley 29733, art. 6: cada información se usa para su finalidad.'], [LEY, 'Ley 27942 y su Reglamento: confidencialidad de los hechos y de la identidad de la presunta víctima.']],
    mirada: {
      ve: 'Saber más que tu equipo es parte del trabajo en RR.HH. La disciplina consiste en que lo que sabes por un carril no contamine lo que escribes en el otro, aunque nadie más note la diferencia.',
      visual: { tipo: 'cambio', titulo: 'Lo que se queda y lo que sale', pares: [['Tema 3: «conductas con practicantes»', 'Fuera: va por el canal'], ['«Una participante no habló»', 'Fuera: la identifica'], ['Errores expuestos los lunes', 'Se queda: lo dijo el grupo']] },
    },
  },
  {
    id: 'n3', t: '11:05', ch: 'presencial', who: 'supervisor', titulo: 'Los supervisores', banner: 'assets/foto2/tension.webp', lugar: 'Sala de reuniones del piso 6', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Son cuatro supervisores: Hernán, Rosa Mamani, que viene de Puno y lleva veinte años en la empresa, y dos más jóvenes de la sede de Surquillo. Sofía conduce; tú tomas notas. Todo va bien hasta que Hernán, con la sonrisa de siempre, dice:</p><p>«${F.has('hernan_sale') ? 'A mí me sacaron del focus group.' : 'Yo estuve en el focus un rato y la gente estaba tranquila.'} Y hoy me llegan comentarios raros. <mark class="clave">¿Hay algo contra mí que deba saber?</mark>» Los otros tres miran la mesa.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder que esta reunión es para escuchar cómo viven ellos el clima del área, que lo de cada persona se conversa por otros canales, y volver a la pregunta sobre la reunión de los lunes.',
        res: { q: 'buena', fx: { etica: 5, personas: 3 }, rel: { supervisor: 0 }, flags: ['supervisores_escuchados'], cartera: { supervisores: 'Hecha: propuestas sobre la reunión de los lunes' },
          out: 'Hernán se cruza de brazos. Rosa aprovecha: «La reunión de los lunes la odiamos también nosotros. Gonzalo nos pide los nombres de los atrasados». Al final, dos supervisores proponen revisar los errores en privado.',
          pro: { ok: 'No confirmas ni niegas nada, y devuelves la reunión a su propósito.', risk: 'Hernán se va con la duda, y quizá con más rabia.', info: 'Lo que Rosa dijo es oro para el plan: el problema de los lunes viene de más arriba.' },
          kusi: ['animo', 'Reencauzaste sin mentir.'] } },
      { id: 'b', label: 'Decirle que no puedes hablar de eso ahí, pero que «es mejor que hable con la Dra. Villavicencio».',
        res: { q: 'riesgosa', fx: { etica: -3, personas: -2 }, flags: ['hernan_expuesto'],
          out: 'Los otros tres supervisores se miran. Todos saben qué ve la Dra. Villavicencio. En la tarde, el rumor ya llegó al piso 5.',
          pro: { ok: 'No das detalles.', risk: 'Nombrar a la responsable del canal delante de otros revela que hay un caso, y contra quién.' },
          kusi: ['indignado', 'Con un nombre bastó para que todos entiendan.'] } },
      { id: 'c', label: 'Pedirles a los otros tres supervisores que salgan un momento para hablar con Hernán a solas.',
        res: { q: 'aceptable', fx: { etica: 0, personas: -2 }, flags: ['hernan_expuesto'],
          out: 'Los tres salen, incómodos. A solas, Hernán te pregunta lo mismo y tú no puedes decirle nada. Afuera, ya se preguntan qué pasó.',
          pro: { ok: 'No hablas del tema delante de otros.', risk: 'Sacar a los demás hace evidente que algo pasa con él.' },
          kusi: ['pensando', 'A veces el gesto dice más que las palabras.'] } },
    ],
    rules: [[BP, 'Cada espacio tiene su propósito: el de clima no es el del procedimiento.']],
    mirada: {
      ve: 'Las conversaciones con supervisores suelen revelar que el problema no empieza en ellos: Rosa contó que la exposición de errores la pide la gerencia. Mantener el foco en el clima también protege a Hernán de un juicio público que no le corresponde a nadie en esa mesa.',
      visual: { tipo: 'flujo', titulo: 'De dónde viene la reunión de los lunes', pasos: ['Gerencia pide nombres de atrasados', 'Supervisores los muestran en pantalla', 'Analistas sienten miedo', 'Ítem «hablar sin temor»: 28 %'] },
    },
  },
  {
    id: 'n4', t: '14:40', ch: 'presencial', who: 'gerente', titulo: '«¿Esto salió de tu encuesta?»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Tu escritorio, piso 9', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Gonzalo sube al piso 9 con el comunicado impreso en la mano. No se sienta. ${F.has('informe_cruzado') ? '«Y en el resumen de tu focus dice “conductas con practicantes”. Ya entendí todo.»' : ''}</p><p>«Me sacan a un supervisor de las practicantes, sin decirme por qué. <mark class="clave">¿Esto salió de tu encuesta? ¿Quién habló?</mark> Soy el gerente. Tengo derecho a saber qué pasa en mi área.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle, con calma, que no puedes hablar de ese procedimiento ni confirmar de dónde viene, que el clima va por otro carril, y que lo que sí puedes es mostrarle hoy el resumen del focus group.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: -2 }, rel: { gerente: -1 }, flags: ['gonzalo_sin_nombres'],
          out: '«O sea que tú sabes y yo no.» Golpea el comunicado contra el escritorio y se va. Diez minutos después, Sofía te escribe: «Lo manejo yo. Bien hecho».',
          pro: { ok: 'No confirmas, no niegas y no mezclas: proteges el caso y el proceso de clima.', risk: 'La relación con Gonzalo se tensa justo antes del plan de acción.', info: 'El gerente tiene derecho a conocer la medida para organizar su área; no a conocer los hechos ni a quienes informaron.' },
          kusi: ['animo', 'Aguantaste. No es poca cosa.'] } },
      { id: 'b', label: 'Decirle que no es de la encuesta, que viene de algo que alguien contó en privado, pero que no sabes más.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3 }, rel: { gerente: 1 }, flags: ['gonzalo_pista'],
          out: '«¿En privado? ¿Después del focus?» Gonzalo hace la cuenta en voz alta. Siete personas, una semana. Le diste el hilo para tirar.',
          pro: { ok: 'Gonzalo se calma un poco.', risk: 'Cada pedazo de información achica el círculo de quién pudo hablar.' },
          kusi: ['preocupado', 'Una pista es medio nombre.'] } },
      { id: 'c', label: 'Decirle que no sabes nada del tema.',
        res: { q: 'aceptable', fx: { etica: -1, confianza: -1 },
          out: 'Gonzalo te mira largo. No te cree. Y cuando se entere de que sí sabías, tampoco te creerá lo demás.',
          pro: { ok: 'No das información.', risk: 'Mentir te quita credibilidad a futuro. «No puedo hablar de eso» es verdad y protege igual.' },
          kusi: ['pensando', '«No puedo» es mejor que «no sé».'] } },
    ],
    rules: [[LEY, 'Ley 27942 y su Reglamento: la identidad de la presunta víctima y los hechos son reservados.'], [BP, 'Decir «no puedo hablar de eso» es más sostenible que mentir.']],
    mirada: {
      ve: 'Frente a una jefatura que exige saber, la tentación es dar «un poquito» para calmarla. En un caso reservado, cada poquito achica el círculo de sospechosos. La única respuesta sostenible es la misma para todos: hay un procedimiento y no puedo hablar de él.',
      visual: { tipo: 'mensaje', titulo: 'La respuesta que se sostiene', txt: '«Hay un procedimiento reservado y no puedo hablar de él. Lo que sí puedo mostrarte es el resumen del clima.»' },
    },
  },
  {
    id: 'n5', t: '16:30', ch: 'whatsapp', who: 'colaboradora', titulo: '¿Fue por mí?', banner: 'assets/foto2/tablet-equipo.webp', show: ['personas', 'etica'],
    body: (n, F) => `<p>Lucía te escribe: «Hernán ya no ve a las practicantes. Y ahora los casos los asigna el coordinador de Surquillo, a todos. ${F.has('silencio_prometido') ? 'Usted me dijo que no iba a decir nada…' : 'Gracias.'} <mark class="clave">¿Fue por lo que le conté? ¿Daniela sabe?</mark>»</p>`,
    type: 'compose', enviaA: 'lucia', para: 'Para: Lucía Ramos · Siniestros', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'ab', t: 'Cómo empiezas', ops: [
        { id: 'a1', t: 'Lucía, gracias por escribirme. Entiendo que tengas dudas.', ok: true },
        { id: 'a2', t: 'Sí, fue por lo que me contaste. Ya está todo en marcha.', ok: false, por: 'Detalles del procedimiento por chat, y confirmas algo que el canal maneja.' },
      ] },
      { id: 'lim', t: 'Qué le dices del caso', ops: [
        { id: 'l1', t: 'Del procedimiento no puedo contarte detalles por aquí; si la responsable del canal necesita hablar contigo, te buscará ella, en reserva.', ok: true, por: 'Le dices qué puede esperar sin revelar nada.' },
        { id: 'l2', t: 'Daniela ya habló y está todo bien.', ok: false, por: 'No te corresponde contar eso, y quizá no sea cierto.' },
      ] },
      { id: 'cuidado', t: 'Cómo cierras', ops: [
        { id: 'c1', t: 'Si alguien te pregunta o sientes cualquier represalia, avísame o avísale a ella.', ok: true, por: 'Le das una herramienta concreta.' },
        { id: 'c2', t: 'Borra este chat, por si acaso.', ok: null, por: 'Se entiende la intención, pero mejor no tener detalles que borrar.' },
      ] },
    ],
    res: sel => {
      const fuga = sel.ab === 'a2' || sel.lim === 'l2', buenas = ['a1', 'l1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = fuga ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, etica: fuga ? -4 : 2 }, rel: { colaboradora: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Lucía responde: «Entendido. Hoy por primera vez en meses Hernán no me gritó en la reunión». Una buena noticia que no tiene que ver con el caso, y quizá sí.' : fuga ? 'Lucía se queda con datos que no debería tener. Y en el chat queda escrito lo que nadie debía escribir.' : 'Lucía responde «ok». No le diste un camino si algo pasa.',
        pro: { ok: 'Acompañar a quien informó es decirle qué puede esperar, sin contarle el procedimiento.', risk: 'Contar «cómo va el caso» a un testigo puede afectar la investigación y la reserva.', info: 'Si Lucía sufre represalias, eso también se informa al canal.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Cuidaste a Lucía y al caso a la vez.' : 'Cuidado con lo que se escribe.'],
      };
    },
    rules: [[BP, 'A quien informó se le acompaña con información útil, no con detalles del procedimiento.']],
    mirada: {
      ve: 'Quien informa un caso queda en una posición frágil: no es parte del procedimiento, pero lo vive de cerca. Un buen acompañamiento le dice qué puede esperar y a quién acudir, sin convertirla en confidente del expediente.',
      visual: { tipo: 'cambio', titulo: 'Acompañar sin contar', pares: [['«Sí, fue por ti»', '«No puedo darte detalles por aquí»'], ['«Daniela ya habló»', '«Si te necesitan, te buscará ella»'], ['«Borra el chat»', '«Si sientes represalias, avísame»']] },
    },
  },
  {
    id: 'n6', t: '18:20', ch: 'correo', who: null, titulo: 'El plan para el jueves', banner: 'assets/esc/reloj.webp', show: ['tiempo', 'confianza', 'calidad'],
    mail: { from: 'Sofía Ledesma', to: 'Analista de Clima y Cultura', asunto: 'Plan de acción de Siniestros' },
    body: () => `<p>Gerencia General quiere el plan de acción de Siniestros para el jueves, porque el viernes se presenta en comité. Con todo lo de hoy, ¿llegamos? <mark class="clave">Dime qué necesitas</mark>.</p><p>Sofía</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Que llegamos si mañana nos sentamos con lo que dijeron analistas y supervisores, y si Gonzalo se compromete a una sola reunión de trabajo el miércoles.',
        res: { q: 'buena', fx: { confianza: 4, tiempo: 1 }, rel: { sofia: 1 },
          responde: 'Sofía: llegamos. Mañana armo un borrador con lo del focus group y lo de los supervisores (la reunión de los lunes y la carga del sistema). Necesito que Gonzalo nos dé una hora el miércoles para trabajarlo con él, no para presentárselo. Si el plan no es suyo, no va a pasar nada.',
          out: 'Sofía responde a los cinco minutos: «De acuerdo. Le pido la hora a Gonzalo, aunque hoy no me quiera ver. Descansa».', kusi: ['celebra', 'Un plan que nace con el dueño adentro.'] } },
      { id: 'b', label: 'Que sí, que mañana lo tienes listo tú sola.',
        res: { q: 'aceptable', fx: { confianza: 1, tiempo: -3 },
          responde: 'Sofía: sí, mañana te lo tengo listo.',
          out: 'Sofía responde: «Ok, pero ojo: si lo escribes sola, Gonzalo lo va a leer como algo que le imponen».', kusi: ['pensando', '¿Un plan sin su dueño?'] } },
    ],
    mirada: { ve: 'Un plan de acción escrito solo por Cultura es un documento; uno trabajado con el gerente es un compromiso. La diferencia no está en el contenido, sino en quién lo siente propio.' },
  },
];
