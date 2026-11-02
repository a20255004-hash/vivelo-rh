// Practicante de RR.HH. · Capítulo 6 · «Rosa quiere irse» · Semana 2, lunes.
// Hilo de la quincena: el pedido de Hamburgo obliga a contratar e inducir a 40 operarias.
// Normas citadas:
// - D.S. 007-2002-TR, TUO de la Ley de Jornada de Trabajo: el horario nocturno va de 22:00 a 06:00 y quien trabaja de noche
//   no puede percibir menos que la remuneración mínima vital más una sobretasa de 35% (art. 8).
//   https://modelo.pe/demanda-de-pago-de-sobretasa-por-trabajo-en-horario-nocturno-nlpt/
//   https://lpderecho.pe/cas-lab-14239-2015-lima-sobretasa-trabajo-nocturno-aplica-perciban-remuneracion-minima-vital
// - D.S. 003-97-TR, TUO del D.Leg. 728, art. 18: en la renuncia, aviso escrito con 30 días de anticipación; el empleador puede exonerar el plazo
//   por iniciativa propia o a pedido del trabajador; si no rechaza por escrito el pedido dentro del tercer día, se entiende aceptado.
//   https://lpderecho.pe/jurisprudencia-articulo-18-tuo-decreto-legislativo-728-renuncia-retiro-voluntario/
//   https://lpderecho.pe/empleador-debe-indicar-escrito-no-exonerara-plazo-preaviso-renuncia-trabajador-cas-lab-14019-2018-lambayeque/
// - RMV: S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR), según la guía del proyecto.

export const CAP = {
  n: 6, titulo: 'Rosa quiere irse', dia: 'Semana 2, lunes', foto: 'assets/foto/frente-a-frente.webp',
  lugar: 'Hilandería Andina · Oficina de RR.HH.',
  inicio: '06:45', fin: '20:00', cierreHora: '19:15',
  apertura: 'Lunes, 6:40 de la mañana. Rosa acaba de salir del turno de noche y te escribe un mensaje que no esperabas.', boton: 'Leer el mensaje',
  kusi: 'Hoy toca escuchar más que hablar. Y no prometer lo que no depende de ti.',
  lead: 'Escuchaste a Rosa sin apurarla, le explicaste sus derechos sin empujarla, buscaste opciones reales con Producción y propusiste una regla para que los cambios de turno sean justos para todas.',
  reflexion: '¿Qué te costó más hoy: escuchar sin interrumpir o no prometer nada?',
  siguiente: { n: 7, titulo: 'La auditoría', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'rosa', p: 'El caso de Rosa', j: 'Carla · Don Teófilo', d: 0, e: 'Quiere renunciar' },
  { id: 'turnos', p: 'Cambios de turno', j: 'Don Teófilo · Producción', d: 0, e: 'Sin regla escrita' },
  { id: 'induccion', p: 'Inducción del grupo 2', j: 'Carla · RR.HH.', d: 0, e: 'Hoy, 15 operarias' },
  { id: 'auditoria', p: 'Auditoría de Hamburgo', j: 'Carla · Gerencia', d: 0, e: 'Mañana' },
  { id: 'asistencia', p: 'Reporte de asistencia', j: 'Carla · RR.HH.', d: 0, e: 'Con doble control' },
];

export const FUTURO = {
  rosa_escuchada: ['Escuchaste a Rosa con preguntas abiertas y sin juzgarla.', 'Rosa contará su experiencia en la auditoría del capítulo 7.'],
  rosa_presionada: ['Le pediste a Rosa que aguantara «por el pedido».', 'Rosa no volverá a confiar en RR.HH. Capítulo 7.'],
  rosa_informada_renuncia: ['Rosa conoce sus derechos si renuncia: el preaviso y la exoneración.', 'Decidirá informada. Capítulos 9 y 10.'],
  opciones_rosa: ['Llevaste a Carla y a Don Teófilo opciones reales para Rosa.', 'Rosa probará un turno fijo de día. Capítulo 8.'],
  teofilo_aliado: ['Don Teófilo aceptó un cambio de turno voluntario con una regla clara.', 'Será clave en tu propuesta del capítulo 8.'],
  teofilo_bloqueo: ['Don Teófilo se negó al cambio de turno.', 'Rosa sigue en el turno de noche. Capítulo 8.'],
  regla_turnos: ['Propusiste una regla justa y escrita para los cambios de turno.', 'La auditoría del capítulo 7 la verá como buena práctica.'],
  rosa_se_queda: ['Rosa decidió quedarse a probar el turno de día.', 'Capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Hilandería', sub: 'Carla, Diego y tú', c: '#2F6B3F' },
  carla: { n: 'Carla Zegarra', sub: 'Jefa de RR.HH.', who: 'carla' },
  diego: { n: 'Diego Paredes', sub: 'Practicante de Contabilidad', who: 'diego' },
  teofilo: { n: 'Don Teófilo', sub: 'Jefe de producción', who: 'teofilo' },
  rosa: { n: 'Rosa Huamaní', sub: 'Operaria · tejido', who: 'rosa' },
  edith: { n: 'Edith Coaquira', sub: 'Operaria · tejido', c: '#B5563C' },
  justina: { n: 'Sra. Justina Mamani', sub: 'Supervisora de urdido · turno día', c: '#9C6B30' },
};

export const WSP = [
  { chat: 'rosa', t: '06:40', de: 'Rosa', txt: 'Señorita, disculpe la hora. ¿Puedo hablar con usted hoy? Creo que voy a renunciar 😔', no: 'rosa_expuesta' },
  { chat: 'justina', t: '06:40', de: 'Justina', txt: 'Hijita, la Rosa quiere renunciar. A ti no se atreve a decirte. Está en la puerta, llorando.', si: 'rosa_expuesta' },
  { chat: 'grupo', t: '07:30', de: 'Carla', txt: 'Hoy entra el grupo 2. Y mañana llega la auditoría de Hamburgo. Semana movida 🦙' },
  { chat: 'edith', t: '12:30', de: 'Edith', txt: 'Señorita, a mí la noche no me molesta. Mis hijos ya son grandes y me sirve la sobretasa. Si la Rosa necesita, yo cambio.', si: 'opciones_rosa' },
  { chat: 'teofilo', t: '16:20', de: 'Don Teófilo', txt: 'Ya. Que cambien la Huamaní y la Coaquira. Pero con su regla escrita, para que no me vengan todas.', si: 'teofilo_aliado' },
  { chat: 'diego', t: '19:20', de: 'Diego', txt: 'Me contaron lo de Rosa. Qué bueno que la escuchaste. A mí nadie me preguntó nada cuando quise irme el año pasado.' },
];

export const CORREOS = [
  { t: '07:15', de: 'Carla Zegarra', para: 'Practicante de RR.HH.', asunto: 'Grupo 2 · inducción a las 15:00', html: '<p>Hoy das la inducción al grupo 2 con el guion mejorado. Yo entro a pensiones. Y mañana llega la auditoría de la tienda de Hamburgo: en la tarde te explico.</p><p>Carla</p>' },
  { t: '17:40', de: 'Carla Zegarra', para: 'Practicante de RR.HH.', asunto: 'Re: Regla de cambios de turno', html: '<p>Tu regla es buena. La paso a Gerencia para que sea política de la planta.</p><p>Carla</p>', si: 'regla_turnos' },
];

export const QUIZ = [
  { q: '¿Entre qué horas se considera trabajo nocturno en el Perú?', ops: ['De 18:00 a 02:00', 'De 22:00 a 06:00', 'De 20:00 a 04:00', 'Solo de 00:00 a 05:00'], ok: 1, por: 'El D.S. 007-2002-TR define el horario nocturno entre las 22:00 y las 06:00.' },
  { q: 'Quien trabaja de noche no puede ganar menos que…', ops: ['La RMV', 'La RMV más una sobretasa de 35%', 'El doble de la RMV', 'Lo mismo que el turno de día'], ok: 1, por: 'La remuneración por trabajo nocturno no puede ser menor a la RMV más 35%.' },
  { q: 'Si una trabajadora renuncia, ¿con cuánta anticipación debe avisar?', ops: ['No tiene que avisar', 'Con 30 días, salvo que el empleador la exonere', 'Con 90 días', 'Con una semana'], ok: 1, por: 'El aviso es de 30 días. El empleador puede exonerarla del plazo, por iniciativa propia o a pedido de ella.' },
  { q: 'Rosa te dice que quiere renunciar. ¿Qué haces primero?', ops: ['La convences de quedarse', 'Escuchas con preguntas abiertas para entender qué pasa', 'Le das el formato de renuncia', 'Le dices que lo piense en su casa'], ok: 1, por: 'Antes de proponer nada, hay que entender el problema real.' },
  { q: 'Don Teófilo teme que «si le cambia el turno a una, todas querrán». ¿Qué propones?', ops: ['No cambiar a nadie', 'Una regla escrita y justa para pedir cambios de turno', 'Cambiar solo a las que caen bien', 'Que cada una se arregle por su cuenta'], ok: 1, por: 'Una regla clara permite atender casos reales sin favoritismos.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '06:50', ch: 'whatsapp', who: null, titulo: 'Un mensaje a las 6:40', banner: 'assets/esc/alarma.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Todavía estás en tu casa, con el pan con palta a medio comer. Afuera hace frío de madrugada arequipeña.</p>${F.has('rosa_expuesta') ? '<p>La señora Justina te escribe: Rosa quiere renunciar y no se atreve a decírtelo. Desde la charla, casi no te mira.</p>' : '<p>Rosa te escribe al salir del turno de noche: cree que va a renunciar.</p>'}<p>Le respondes desde la combi. <mark class="clave">Lo que digas ahora decide si viene a hablar</mark>.</p>`,
    type: 'compose', enviaA: 'rosa', para: 'Para: Rosa Huamaní · Operaria de tejido', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo empiezas', ops: [
        { id: 'a1', t: 'Rosa, gracias por avisarme. Me gustaría escucharte.', ok: true, por: 'Le agradeces que hable: eso le da confianza.' },
        { id: 'a2', t: 'Rosa, ¿cómo que renunciar? Si recién entraste.', ok: false, por: 'Suena a reproche antes de saber qué le pasa.' },
      ] },
      { id: 'cuando', t: 'Cuándo y dónde', ops: [
        { id: 'c1', t: 'Llego a la planta a las 7:45. ¿Puedes esperarme en la oficina de RR.HH.? Te invito un mate.', ok: true, por: 'Un lugar tranquilo y una hora concreta, antes de que se vaya a dormir.' },
        { id: 'c2', t: 'Ven el jueves en la tarde y lo vemos.', ok: false, por: 'En dos días la decisión ya estará tomada.' },
      ] },
      { id: 'cierra', t: 'Cómo cierras', ops: [
        { id: 'p1', t: 'No tienes que decidir nada hoy. Solo conversamos.', ok: true, por: 'Le quitas la presión de la decisión.' },
        { id: 'p2', t: 'Trae tu carta de renuncia, por si acaso.', ok: false, por: 'Das por hecho que se va.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, confianza: q === 'buena' ? 2 : 0 }, rel: { rosa: q === 'buena' ? 1 : 0 },
        cartera: { rosa: q === 'riesgosa' ? 'Rosa no responde' : 'Conversación a las 7:45' },
        out: q === 'buena' ? 'Rosa responde: «Ya, señorita. La espero». Cuando llegas, está sentada en la oficina con la casaca del turno todavía puesta.' : q === 'aceptable' ? 'Rosa responde con un «ya». Llega a las 7:50, dudando en la puerta.' : 'Rosa deja el mensaje en visto. La señora Justina la convence de esperarte en la puerta.',
        pro: { ok: 'El primer mensaje no resuelve nada: solo abre la puerta. Y eso es mucho.', risk: 'Un reproche o un plazo largo cierran la conversación antes de empezar.', info: 'Después de un turno de noche, una persona está agotada: que la conversación sea corta y temprano.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Abriste la puerta. ¡Bien!' : 'El tono cuenta mucho a esta hora.'],
      };
    },
    rules: [[BP, 'Ante una posible renuncia, primero abre la conversación, sin reproches ni plazos largos.']],
    mirada: {
      ve: 'Muchas renuncias se deciden de madrugada, al salir de un turno difícil. La primera respuesta de RR.HH. puede convertir una decisión impulsiva en una conversación. No se trata de retener: se trata de que la persona sienta que puede hablar.',
      visual: { tipo: 'mensaje', titulo: 'Abrir la puerta', txt: 'Rosa, gracias por avisarme. Me gustaría escucharte. Llego a la planta a las 7:45: ¿puedes esperarme en la oficina? Te invito un mate. No tienes que decidir nada hoy.' },
    },
  },
  {
    id: 'f2', t: '07:50', ch: 'presencial', who: 'rosa', titulo: 'Escuchar a Rosa', banner: 'assets/foto/mentora.webp', lugar: 'Oficina de RR.HH.', show: ['personas', 'etica', 'confianza'],
    body: () => `<p>Rosa sostiene el mate con las dos manos. Tiene ojeras y las uñas con pelusa de alpaca. Habla bajito, mirando la taza.</p><p>«Es que… no puedo, señorita.» Se calla. <mark class="clave">Tienes que preguntar bien</mark>, sin apurarla.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Decide qué necesitas entender antes de proponer nada.',
    opts: [
      { id: 'que', label: '¿Qué está pasando, Rosa?', info: '«La vecina que cuidaba a mi Joaquín se fue a Chivay. Tiene cuatro años. La semana de noche lo dejo con mi prima, pero ella trabaja de madrugada en el mercado. Ayer se quedó solo dos horas. Dormido, pero solo.» Se le quiebra la voz.' },
      { id: 'gusta', label: '¿Cómo te sientes con el trabajo en la línea?', info: '«Me gusta, señorita. Ya remallo mejor. La señora Justina dice que tengo buena mano.» Por primera vez, sonríe un poco.' },
      { id: 'cambio', label: '¿Qué tendría que cambiar para que te puedas quedar?', info: '«Si fuera solo de día… pero don Teófilo dice que todas rotamos. Yo pensé que la noche era una semana al mes, no una sí y una no.»' },
      { id: 'seguro', label: '¿Estás segura de que quieres renunciar?', info: '«Sí… no sé.» Baja la mirada. La pregunta la puso a la defensiva y no te dijo nada nuevo.' },
    ],
    res: picks => {
      const abiertas = ['que', 'gusta', 'cambio'].filter(x => picks.includes(x)).length;
      return {
        q: null, fx: { personas: abiertas === 2 ? 4 : 0, confianza: abiertas === 2 ? 2 : -1 }, rel: { rosa: abiertas === 2 ? 1 : 0 },
        flags: abiertas === 2 ? ['rosa_escuchada'] : [],
        out: abiertas === 2 ? 'Rosa se seca los ojos con la manga. «Nadie me había preguntado», dice. Ahora sabes lo que pasa y lo que la haría quedarse.' : 'Rosa responde, pero se cierra. Sabes algo, aunque no todo lo que necesitas.',
        kusi: [abiertas === 2 ? 'curioso' : 'pensando', abiertas === 2 ? 'Preguntas abiertas, respuestas de verdad.' : 'Una pregunta cerrada la puso a la defensiva…'],
      };
    },
    rules: [[BP, 'Usa preguntas abiertas: qué pasa, cómo te sientes, qué necesitarías.']],
    mirada: {
      ve: 'Escuchar es una competencia, no un gesto amable. Las preguntas abiertas permiten que la persona cuente su historia; las cerradas, como «¿estás segura?», la ponen a la defensiva. En la historia de Rosa están el problema y también la solución.',
      visual: { tipo: 'balanza', a: { t: 'Preguntas cerradas', items: ['¿Estás segura?', 'Respuestas de sí o no', 'La persona se defiende'] }, b: { t: 'Preguntas abiertas', items: ['¿Qué está pasando?', '¿Qué tendría que cambiar?', 'Aparece la solución'] } },
    },
  },
  {
    id: 'f3', t: '08:20', ch: 'presencial', who: 'rosa', titulo: '«¿Y si renuncio?»', banner: 'assets/esc/decide.webp', lugar: 'Oficina de RR.HH.', show: ['etica', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>Rosa te mira por fin. «Señorita, ¿y si renuncio, qué pasa? ¿Tengo que pagar algo? ¿Me botan hoy mismo?»</p><p>${F.has('aviso_corregido') ? 'El aviso decía turnos rotativos, pero nadie le explicó cada cuánto. ' : ''}Afuera suena la sirena del cambio de turno. <mark class="clave">Lo que le digas ahora pesa</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle sus derechos si renuncia, decirle que antes buscarás opciones con Carla y Producción, y no prometerle nada que no dependa de ti.',
        res: { q: 'buena', fx: { etica: 5, personas: 4, cumplimiento: 3 }, rel: { rosa: 1 }, flags: ['rosa_informada_renuncia'],
          out: 'Le explicas que la renuncia se avisa por escrito con 30 días, que puede pedir que la exoneren de ese plazo y que no tiene que pagar nada. «Y antes de eso, déjame ver qué se puede hacer. No te prometo nada, pero lo voy a intentar.» Rosa asiente: «Ya. Hasta el jueves espero».',
          pro: { ok: 'Le das información para decidir, y una opción sin crearle falsas expectativas.', risk: 'Si no consigues nada, ella tiene que saberlo pronto y por ti.', info: 'Ponle una fecha a tu respuesta: así ella no espera indefinidamente.' },
          kusi: ['celebra', 'Información clara y sin promesas vacías. ¡Bacán!'] } },
      { id: 'b', label: 'Pedirle que aguante hasta que se despache el pedido de Hamburgo, porque la planta la necesita y después se puede ver lo del turno.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -5, cumplimiento: 1 }, rel: { rosa: -1 }, flags: ['rosa_presionada'],
          out: 'Rosa dice «ya, señorita» y se va. Esa noche, Joaquín vuelve a quedarse solo dos horas.',
          pro: { ok: 'Piensas en la meta de la planta.', risk: 'Le pides que ponga en riesgo a su hijo por una meta que no es suya. Y no le dices qué derechos tiene.' },
          kusi: ['triste', 'Joaquín tiene cuatro años…'] } },
      { id: 'c', label: 'Darle el formato de renuncia y explicarle cómo llenarlo: es su decisión.',
        res: { q: 'aceptable', fx: { etica: 1, personas: -1 }, flags: ['rosa_informada_renuncia'],
          out: 'Rosa toma el formato y lo mira un rato. «¿Y no hay otra forma?», pregunta. No sabes qué responderle.',
          pro: { ok: 'Respetas su decisión.', risk: 'Darle el formato sin explorar opciones es tratar una renuncia evitable como un trámite.', info: 'Ella misma te dijo qué la haría quedarse: el turno de día.' },
          kusi: ['pensando', 'Respetar está bien… ¿y si había otra salida?'] } },
    ],
    rules: [[LEY, 'La renuncia se avisa por escrito con 30 días; el empleador puede exonerar ese plazo (D.S. 003-97-TR, art. 18).'], [BP, 'No prometas lo que no depende de ti. Ponle fecha a tu respuesta.']],
    mirada: {
      ve: 'En RR.HH., retener a alguien a cualquier costo no es un logro. Lo profesional es que la persona decida informada: conocer sus derechos si se va y saber si existe una alternativa real para quedarse. Prometer sin poder cumplir rompe la confianza dos veces.',
      visual: { tipo: 'linea', titulo: 'Si Rosa renuncia', hitos: [['Carta de renuncia', 'Por escrito'], ['Plazo de aviso', '30 días'], ['Exoneración', 'Puede pedirla; si no se la rechazan por escrito dentro del tercer día, se entiende aceptada'], ['Al salir', 'Recibe sus beneficios sociales']] },
      normas: [{ ley: 'D.S. 003-97-TR, TUO del D.Leg. 728, artículo 18', dice: 'En caso de renuncia, el trabajador da aviso escrito con 30 días de anticipación. El empleador puede exonerarlo del plazo, por iniciativa propia o a pedido del trabajador.', practica: 'Si la empresa no rechaza por escrito el pedido de exoneración dentro del tercer día, se entiende aceptado.' }],
    },
  },
  {
    id: 'f4', t: '10:30', ch: 'documento', who: null, titulo: 'Opciones para Rosa', banner: 'assets/esc/piensa.webp', show: ['calidad', 'personas', 'cumplimiento'],
    body: () => `<p>Carla te da quince minutos a las 11:00: «Tráeme opciones, no solo el problema». Abres una hoja en blanco y piensas en lo que Rosa dijo.</p><p>Solo puedes llevar <mark class="clave">dos opciones</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos opciones que llevarás a Carla.', boton: 'Llevar estas opciones', resumen: 'Llevaste',
    cols: ['Opción', 'Qué implica'],
    rows: [
      { id: 'cambio', cells: ['Cambio voluntario de turno con una compañera que prefiera la noche', 'Nadie pierde: alguien gana sobretasa nocturna y Rosa trabaja de día'] },
      { id: 'fijo', cells: ['Turno fijo de día por tres meses, revisable', 'Rosa ordena el cuidado de Joaquín con tiempo'] },
      { id: 'adelanto', cells: ['Un adelanto de sueldo para pagar una niñera', 'Rosa se endeuda y el problema del turno sigue'] },
      { id: 'sinGoce', cells: ['Una semana de licencia sin goce', 'Le da aire, pero cobra menos y el problema vuelve'] },
      { id: 'mama', cells: ['Sugerirle que traiga a su mamá de Chivay', 'No es una decisión de RR.HH.'] },
    ],
    score: { cambio: 3, fijo: 3, sinGoce: 1, adelanto: 0, mama: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, personas: q === 'buena' ? 3 : -1 },
        flags: q === 'buena' ? ['opciones_rosa'] : [], cartera: { rosa: q === 'buena' ? '2 opciones para Carla' : 'Opciones débiles' },
        out: q === 'buena' ? 'Carla lee tus dos opciones y dice: «La primera no le cuesta nada a la planta. Vamos a ver a Don Teófilo».' : 'Carla te escucha y pregunta: «¿Y esto resuelve lo del turno?». Tienes que pensar de nuevo.',
        pro: { ok: 'Llevas opciones que atacan la causa: el turno de noche.', risk: 'Las opciones que pasan el problema a Rosa o a su familia no son soluciones de la empresa.', info: 'Pregunta en la línea quién prefiere la noche: a veces la solución está en otra persona.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Opciones que resuelven de verdad!' : '¿Eso cambia el turno de Rosa?'],
      };
    },
    rules: [[BP, 'Lleva a tu jefa opciones que ataquen la causa, no solo el síntoma.']],
    mirada: {
      ve: 'Una buena opción resuelve la causa sin crear un problema nuevo. Rosa no necesita dinero prestado ni consejos sobre su familia: necesita un turno compatible con su hijo. Muchas veces la solución existe en el mismo equipo, en alguien con necesidades distintas.',
      visual: { tipo: 'matriz', x: 'Costo para la planta', y: 'Resuelve la causa', cuadrantes: ['Proponer con cuidado', 'Proponer ya', 'Descartar', 'Solo como apoyo'], items: [['Cambio con compañera', .15, .9], ['Turno fijo de día', .45, .85], ['Licencia sin goce', .3, .3], ['Adelanto de sueldo', .4, .15], ['Traer a su mamá', .1, .05]] },
    },
  },
  {
    id: 'f5', t: '11:45', ch: 'presencial', who: 'teofilo', titulo: '«Si le doy a una…»', banner: 'assets/foto/supervisa.webp', lugar: 'Línea de tejido', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Don Teófilo escucha con los brazos cruzados, entre el ruido de las rectilíneas.${F.has('criterios_objetivos') || F.has('preseleccion_diversa') ? ' Desde lo de la prueba práctica, te escucha un poco más.' : F.has('teofilo_choque') ? ' Todavía recuerda lo de «ilegal».' : ''}</p><p>«Señorita, entiendo lo de la wawa. Pero <mark class="clave">si le cambio el turno a una, mañana tengo diez en la puerta</mark>. Y yo tengo que cubrir la noche.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle el cambio voluntario con Edith y una regla escrita para todas: quién puede pedirlo, por cuánto tiempo y con qué condición.',
        res: { q: 'buena', fx: { personas: 4, confianza: 4, calidad: 2 }, rel: { teofilo: 1 }, flags: ['teofilo_aliado', 'rosa_se_queda'],
          out: 'Don Teófilo se rasca la barba. «¿La Coaquira quiere la noche? Ya. Pero me escribe esa regla, y si me falta gente de noche, se acaba.» Te da hasta las cuatro.',
          pro: { ok: 'Respondes su miedo real: quedarse sin cubrir la noche y los favoritismos.', risk: 'Si la regla no se escribe hoy, el acuerdo se cae.', info: 'Pídele a Edith que lo confirme por escrito: el cambio tiene que ser voluntario para las dos.' },
          kusi: ['celebra', 'Don Teófilo dijo que sí… ¡con condiciones!'] } },
      { id: 'b', label: 'Decirle que si no acepta, Carla lo llevará a Gerencia.',
        res: { q: 'aceptable', fx: { personas: -2, confianza: -2 }, rel: { teofilo: -1 }, flags: ['teofilo_bloqueo'],
          out: '«Que lleve lo que quiera», dice Don Teófilo, y se da la vuelta. Gerencia aprobará el cambio el jueves, pero Rosa tendrá tres noches más.',
          pro: { ok: 'Quieres que Rosa tenga una salida.', risk: 'Amenazar a un jefe con su gerencia gana una batalla y pierde un aliado.' },
          kusi: ['pensando', 'Funcionó a medias, y con un costo.'] } },
      { id: 'c', label: 'Aceptar su no: él responde por la producción y la noche no se puede quedar sin gente.',
        res: { q: 'riesgosa', fx: { personas: -4, etica: -2 }, flags: ['teofilo_bloqueo'],
          out: 'Vuelves a la oficina sin nada. Tienes que decirle a Rosa que no se pudo. Edith, que sí quería la noche, nunca se entera de que podía ayudar.',
          pro: { ok: 'Respetas la autoridad de Producción.', risk: 'Su preocupación tenía respuesta: un cambio voluntario no deja la noche sin gente.' },
          kusi: ['triste', 'Había una salida y no la mostraste…'] } },
    ],
    rules: [[BP, 'Responde al miedo del jefe con una regla, no con una amenaza.']],
    mirada: {
      ve: 'Don Teófilo no es insensible: teme perder el control de su línea y que una excepción se vuelva un desorden. Una profesional de RR.HH. no le pide que haga un favor, le ofrece un mecanismo justo que resuelve el caso de Rosa y los que vendrán.',
      visual: { tipo: 'balanza', a: { t: 'El miedo de Don Teófilo', items: ['Diez pedidos en la puerta', 'Quedarse sin gente de noche'] }, b: { t: 'Lo que propones', items: ['Cambio solo si alguien acepta la noche', 'Regla escrita para todas', 'Plazo revisable'] } },
    },
  },
  {
    id: 'f6', t: '14:00', ch: 'documento', who: null, titulo: 'Una regla para todas', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Almorzaste un sándwich de chicharrón frente a la computadora. A las 15:00 tienes la inducción del grupo 2, y antes debes dejarle a Don Teófilo la regla de cambios de turno.</p><p>Tiene que ser <mark class="clave">justa, corta y aplicable</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la regla de cambios de turno.', boton: 'Enviar la regla',
    bloques: [
      { id: 'quien', t: 'Quién puede pedirlo', n: 2, ops: [
        { id: 'q1', t: 'Cualquier trabajadora o trabajador con una razón de cuidado familiar, salud o estudios.', ok: true, por: 'La regla vale para todos, no solo para Rosa.' },
        { id: 'q2', t: 'La solicitud se hace por escrito a RR.HH., con copia a la supervisión.', ok: true, por: 'Queda registro y nadie depende del humor de un jefe.' },
        { id: 'q3', t: 'Solo quienes tengan más de un año en la planta.', ok: false, por: 'Dejaría fuera justo a las nuevas, que son las que más se van.' },
      ] },
      { id: 'como', t: 'Cómo se decide', n: 3, ops: [
        { id: 'c1', t: 'El cambio procede si otra persona acepta voluntariamente el turno, también por escrito.', ok: true, por: 'Así la noche no queda sin cubrir.' },
        { id: 'c2', t: 'Dura hasta tres meses y se revisa.', ok: true, por: 'Una excepción con plazo no se vuelve permanente sin conversarlo.' },
        { id: 'c3', t: 'RR.HH. responde en un plazo máximo de cinco días.', ok: true, por: 'La persona sabe cuándo tendrá una respuesta.' },
        { id: 'c4', t: 'Decide el jefe de producción según su criterio.', ok: false, por: 'Sin criterios escritos, vuelve el riesgo de favoritismo.' },
      ] },
      { id: 'pago', t: 'Lo que no cambia', n: 1, ops: [
        { id: 'p1', t: 'Quien pasa a la noche recibe la sobretasa nocturna que corresponde por ley.', ok: true, por: 'El trabajo nocturno tiene una remuneración mínima mayor.' },
        { id: 'p2', t: 'Quien pide el cambio renuncia a su bono de puntualidad.', ok: false, por: 'Castigar a quien pide un cambio de turno desalienta a pedirlo.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : -1, etica: q === 'buena' ? 2 : -1 },
        flags: q === 'buena' ? ['regla_turnos'] : [], cartera: { turnos: q === 'buena' ? 'Regla escrita, enviada a Carla' : 'Regla con criterios dudosos' },
        out: q === 'buena' ? 'Le mandas la regla a Carla y a Don Teófilo. Media página, cinco puntos. Carla responde: «La paso a Gerencia».' : 'La regla sale, pero tiene puntos que dejan fuera a las nuevas o castigan a quien la usa.',
        pro: { ok: 'Una regla justa convierte un favor en un derecho que todas pueden usar.', risk: 'Una regla que castiga a quien la usa no se usa.', info: 'Revisa la regla dentro de tres meses con datos: cuántas la pidieron y cuántas se quedaron.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una regla para todas! Qué divino.' : 'Algún punto de la regla no es justo…'],
      };
    },
    rules: [[LEY, 'Quien trabaja entre las 22:00 y las 06:00 no puede ganar menos que la RMV más 35% (D.S. 007-2002-TR, art. 8).'], [BP, 'Una buena regla dice quién, cómo, cuánto tiempo y quién responde.']],
    mirada: {
      ve: 'El caso de Rosa no es único: en una planta con 40 ingresos, habrá más madres, estudiantes y personas enfermas. Una regla escrita evita que cada caso dependa de la suerte o del humor de un jefe. Así un problema individual se vuelve una mejora para todas.',
      visual: { tipo: 'flujo', titulo: 'La regla de cambio de turno', pasos: ['Solicitud escrita', 'Otra persona acepta, por escrito', 'RR.HH. responde en 5 días', 'Cambio hasta por 3 meses', 'Revisión'] },
      normas: [{ ley: 'D.S. 007-2002-TR, artículo 8', dice: 'El horario nocturno va de 22:00 a 06:00. Quien trabaja de noche no puede percibir menos que la remuneración mínima vital más una sobretasa de 35%.', practica: 'Para Edith, pasar a la noche no es un sacrificio: es un ingreso mayor que ella elige.' }],
    },
  },
  {
    id: 'f7', t: '18:10', ch: 'presencial', who: 'rosa', titulo: 'La decisión de Rosa', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Puerta de la planta', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Terminó la inducción del grupo 2. Rosa te espera en la puerta, ya descansada, con una bolsita de maíz tostado y queso.</p>${F.has('teofilo_aliado') ? '<p>«Me dijo la señora Justina que desde el miércoles puedo estar de día, si la Edith cambia conmigo. Me quedo, señorita. A probar.»</p>' : F.has('rosa_presionada') ? '<p>«Voy a aguantar, señorita, como usted dijo.» Lo dice sin mirarte.</p>' : '<p>«Gracias por intentarlo, señorita. Voy a pensarlo hasta el jueves. Ya sé lo de los 30 días.»</p>'}<p>Te extiende la bolsita: <mark class="clave">«Es de mi mamá, de Chivay»</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Aceptarla, agradecerle y compartirla con Diego y Carla.',
        res: { q: null, fx: { personas: 2 }, rel: { rosa: 1 }, flags: [], out: 'Rosa sonríe. En la oficina, Carla prueba un puñado de cancha y dice: «Esto vale más que cualquier encuesta de clima».', kusi: ['feliz', 'Un regalo pequeño, un gracias grande.'] } },
      { id: 'b', label: 'Agradecerle, pero decirle que no puedes recibir regalos.',
        res: { q: null, fx: { personas: -1, etica: 1 }, out: 'Rosa guarda la bolsita, un poco avergonzada. «Ah, ya, disculpe.» Te quedas pensando si un poco de maíz era un problema.', kusi: ['pensando', 'A veces la regla es más rígida que la situación.'] } },
    ],
    mirada: { ve: 'Un regalo pequeño, hecho en casa, es una forma de agradecer en muchas familias andinas. No es lo mismo que un obsequio caro de un proveedor. Una profesional distingue entre ambos y, si duda, comparte el gesto con el equipo.' },
  },
];
