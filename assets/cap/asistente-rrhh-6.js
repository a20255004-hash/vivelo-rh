// Asistente de RR.HH. · Capítulo 6 · «La queja» · Semana 2, lunes.
// Hilo de las dos semanas: la apertura de la tienda 13 de Supermercados Norte con 45 ingresos.
// Normas citadas:
// - D.S. 003-97-TR (TUO del D. Leg. 728), art. 30 g): son actos de hostilidad los que afectan la dignidad del trabajador.
//   https://lpderecho.pe/jurisprudencia-articulo-30-tuo-decreto-legislativo-728-despido-hostilidad
//   https://img.lpderecho.pe/wp-content/uploads/2021/02/Res.-223-2021-sunafil-incapacidad-temporal-LP.pdf (SUNAFIL cita el inciso g)
// - Ley 29733 (datos personales), ya citada: el registro del caso se guarda con acceso restringido.
// - Alta en el T-Registro dentro del día de ingreso (SUNAT), ya citada en el capítulo 1.
// - Ley 29783, art. 27-A del Reglamento: capacitación presencial al momento de la contratación, ya citada en el capítulo 5.

export const CAP = {
  n: 6, titulo: 'La queja', dia: 'Semana 2, lunes', foto: 'assets/foto2/grito.webp',
  lugar: 'Tienda 13 · Castilla, Piura',
  inicio: '07:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lunes. Faltan dos días para abrir. La tienda 13 ya huele a pan y a cartón nuevo, las cajas registradoras pitan con las prácticas y Wilmer camina por los pasillos con dos celulares a la vez.', boton: 'Entrar a la tienda',
  kusi: 'Hoy alguien te va a contar algo difícil. Lo más importante es lo primero que respondas.',
  lead: 'Escuchaste a Karina sin juzgarla, registraste su caso con cuidado, lo derivaste a Betty y pusiste un límite a Wilmer sin exponer a nadie.',
  reflexion: '¿Qué hace que una persona nueva se anime a contar que algo anda mal… o que se quede callada?',
  siguiente: { n: 7, titulo: 'Ensayo general', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'ingresos', p: '45 ingresos de la tienda 13', j: 'Betty · RR.HH.', d: 0, e: 'Faltan 2 días' },
  { id: 'examenes', p: 'Exámenes médicos de ingreso', j: 'Clínica San Miguel', d: 0, e: 'Grupo 4 hoy' },
  { id: 'contratos', p: 'Contratos', j: 'Betty · Legal', d: 0, e: 'Rosa y 3 rezagados hoy' },
  { id: 'uniformes', p: 'Uniformes y credenciales', j: 'Logística', d: 0, e: 'Polos pendientes llegan mañana' },
  { id: 'casos', p: 'Atención de casos', j: 'Betty · RR.HH.', d: 0, e: 'Sin casos abiertos' },
];

export const FUTURO = {
  karina_escuchada: ['Karina sintió que la escuchaste sin juzgarla.', 'Volverá a buscarte si algo se repite.'],
  karina_dudada: ['Le preguntaste a Karina si exageraba.', 'No volverá a contarte nada… al menos por ahora.'],
  registro_caso: ['Tienes un registro del caso con hechos, testigos y pedidos.', 'Betty lo usará para investigar después de la apertura.'],
  queja_protegida: ['Karina tiene una supervisora de cajas a su lado mientras se investiga.', 'Wilmer sabe que hay un límite, aunque no sabe quién habló.'],
  queja_expuesta: ['Betty habló con Wilmer y mencionó a Karina.', 'Wilmer la mirará distinto en la apertura.'],
  queja_postergada: ['El caso quedó para después de la apertura.', 'Karina tendrá que pasar dos días más junto a Wilmer.'],
  wilmer_limite: ['Le dijiste a Wilmer que apurar está bien y gritar no.', 'Te lo recordará cuando quiera algo en la apertura.'],
  ingresos_lunes: ['Rosa y los rezagados entraron con alta y capacitación el mismo día.', 'César no tendrá altas tardías.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Supermercados Norte', sub: 'Betty, César y tú', c: '#2F6B3F' },
  betty: { n: 'Betty Seminario', sub: 'Jefa de RR.HH.', who: 'betty' },
  cesar: { n: 'César Chunga', sub: 'Analista de Planillas', who: 'cesar' },
  wilmer: { n: 'Wilmer Sosa', sub: 'Jefe de la tienda 13', who: 'wilmer' },
  karina: { n: 'Karina Zapata', sub: 'Cajera nueva', who: 'karina' },
  nuevos: { n: 'Tienda 13 · Nuevos ingresos', sub: '45 participantes', c: '#C05621' },
};

export const WSP = [
  { chat: 'grupo', t: '06:45', de: 'Betty', txt: 'Semana de apertura 💪 Hoy estoy en la oficina central hasta las 4. Cualquier cosa grave, me llamas, no me escribas.' },
  { chat: 'grupo', t: '06:58', de: 'César', txt: 'Recordatorio: Rosa y los que firman hoy ingresan hoy. Alta hoy. No mañana. Hoy 🙏' },
  { chat: 'nuevos', t: '07:05', de: 'Jhonatan', txt: '¿Ya hay horario? Mi mamá me pregunta si almuerzo en la casa 😅' },
  { chat: 'nuevos', t: '07:06', de: 'Yorgelis', txt: 'Buenos días. Lo mismo, por favor, para organizar con quién dejo a los niños.', no: 'cierre_claro' },
  { chat: 'karina', t: '07:20', de: 'Karina', txt: 'Señorita, ¿está en la tienda? ¿Puedo hablar con usted un ratito? Pero que nadie sepa, porfa.' },
  { chat: 'wilmer', t: '09:50', de: 'Wilmer', txt: 'Brayan ya está en caja y no se equivoca. No como otras 🙄', si: 'sobrino_dentro' },
  { chat: 'wilmer', t: '11:35', de: 'Wilmer', txt: 'Oe, ¿qué tanto hacía la Zapata contigo detrás del almacén? Si se va a quejar de que la apuro, que se acostumbre. Esto es retail.' },
  { chat: 'cesar', t: '16:40', de: 'César', txt: 'Altas de hoy listas en el T-Registro. Gracias por avisar a tiempo, en serio.', si: 'ingresos_lunes' },
];

export const CORREOS = [
  { t: '07:30', de: 'Clínica San Miguel · Salud Ocupacional', para: 'RR.HH. Supermercados Norte', asunto: 'Grupo 4 · confirmados', html: '<p>Confirmamos 10 evaluaciones para hoy, incluida Rosa Chiroque. El resultado de aptitud del grupo 3 ya está en la carpeta acordada.</p>' },
  { t: '17:20', de: 'Betty Seminario', para: 'Asistente de RR.HH.', asunto: 'Contrato de Milagros Peña', html: '<p>Milagros vino a la oficina y me enseñó una foto de su contrato tomada antes de firmar. Dice que la hoja que tiene ahora no es la misma. ¿Tú sabes algo? Necesito que hablemos mañana a primera hora.</p><p>Betty</p>', si: 'firma_en_blanco' },
];

export const QUIZ = [
  { q: 'Una trabajadora te cuenta que su jefe le grita. Lo primero que haces es…', ops: ['Preguntarle si no estará exagerando', 'Escucharla, preguntar qué pasó y qué necesita, sin juzgar', 'Llamar al jefe en ese momento', 'Decirle que es normal en retail'], ok: 1, por: 'Escuchar sin juzgar es la primera condición para que la persona confíe y cuente lo que pasó.' },
  { q: 'Karina te pide que no le digas nada a nadie. ¿Qué le respondes?', ops: ['Que no se lo dirás a nadie, pase lo que pase', 'Que lo compartirás solo con quien debe decidir, con cuidado, y le explicarás cada paso', 'Que se lo contarás a Wilmer para que lo arregle', 'Que si no puedes contarlo, no puedes ayudarla'], ok: 1, por: 'No se puede prometer secreto total si el caso necesita una decisión, pero sí reserva y que nada se haga a sus espaldas.' },
  { q: 'Los actos que afectan la dignidad del trabajador, según el art. 30 del D.S. 003-97-TR, son…', ops: ['Parte normal del trabajo', 'Actos de hostilidad', 'Faltas del trabajador', 'Temas personales'], ok: 1, por: 'El inciso g) del art. 30 incluye entre los actos de hostilidad los que afectan la dignidad del trabajador.' },
  { q: '¿Qué NO va en el registro de un caso?', ops: ['Fecha, hora y lugar', 'Las palabras que la persona recuerda', 'Tu opinión sobre el carácter del jefe', 'Los testigos que menciona'], ok: 2, por: 'El registro recoge hechos, no opiniones de quien atiende.' },
  { q: 'Rosa firma su contrato hoy lunes y empieza hoy. ¿Cuándo debe estar su alta en el T-Registro?', ops: ['Hoy, dentro del día de ingreso', 'A fin de mes', 'Cuando cobre', 'El día de la apertura'], ok: 0, por: 'El alta se registra dentro del día de ingreso (SUNAT).' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'q1', t: '07:40', ch: 'presencial', who: 'karina', titulo: 'Detrás del almacén', banner: 'assets/foto2/tension.webp', lugar: 'Patio de descarga de la tienda 13', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Karina te espera junto a las jabas de gaseosa vacías, donde no llegan las cámaras. Tiene los ojos hinchados y aprieta su credencial con las dos manos. ${F.has('canal_jefe') ? '«La tarjeta decía que primero hable con el jefe de tienda… pero es que es él.»' : '«Usted dijo en la inducción que le podíamos escribir…»'}</p><p>«Desde el viernes, en la práctica de caja, el señor Wilmer me grita delante de todas. <mark class="clave">Hoy me tiró el rollo de papel y me dijo bruta</mark>.» Tienes unos minutos antes de que la busquen.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le vas a hacer.',
    opts: [
      { id: 'que', label: '«¿Qué pasó exactamente? Cuéntamelo con tus palabras.»', info: '«El viernes en la tarde me dijo "lenta" tres veces. Hoy a las siete me equivoqué en un vuelto de práctica, me tiró el rollo de papel en la caja y me dijo "bruta, así no vas a durar". Todas se quedaron calladas.»' },
      { id: 'test', label: '«¿Alguien más lo vio o le pasó algo parecido?»', info: '«Yorgelis estaba en la caja de al lado. Y a otras chicas también les grita, pero nadie dice nada porque recién entramos.»' },
      { id: 'quiere', label: '«¿Qué te gustaría que pase ahora?»', info: '«Que pare, nada más. No quiero que lo boten ni hacer problema. Es mi primer trabajo con planilla, señorita. Mi mamá está feliz.»' },
      { id: 'seguro', label: '«¿No será que él es así con todos y lo estás tomando muy a pecho?»', info: 'Karina se calla y mira el piso. «Ya, señorita… será que soy muy sensible.» Se seca la cara con la manga del polo y se va a su caja.' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('seguro') ? -5 : 4, confianza: picks.includes('seguro') ? -3 : 2, tiempo: -1 }, rel: { karina: picks.includes('seguro') ? -1 : 1 },
      flags: [picks.includes('seguro') ? 'karina_dudada' : 'karina_escuchada'],
      out: picks.includes('seguro') ? 'Karina se va sin terminar de contarte. Te quedas con la mitad de la historia y con la sensación de haber cerrado una puerta.' : 'Le dices que hizo bien en contártelo y que no la vas a dejar sola con esto. Karina asiente y vuelve a su caja un poco más derecha.',
      kusi: picks.includes('seguro') ? ['triste', 'Esa pregunta le cerró la boca.'] : ['animo', 'La escuchaste. Eso ya es mucho.'],
    }),
    rules: [[BP, 'Escucha primero. Pregunta qué pasó y qué necesita la persona antes de dar tu opinión.']],
    mirada: {
      ve: 'Las personas nuevas casi nunca se quejan: tienen miedo de perder el trabajo. Cuando una lo hace, la primera respuesta decide si confía o si se calla para siempre. Escuchar no es darle la razón: es dejar que cuente lo que pasó.',
      visual: { tipo: 'balanza', a: { t: 'Preguntar si exagera', items: ['Se calla', 'El caso no existe', 'El problema sigue'] }, b: { t: 'Preguntar qué pasó y qué necesita', items: ['Hechos concretos', 'Testigos', 'Lo que ella pide: que pare'] } },
    },
  },
  {
    id: 'q2', t: '08:30', ch: 'documento', who: null, titulo: 'El registro del caso', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina provisional de la tienda 13', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Te encierras en la oficina provisional, con la puerta de triplay que no cierra bien. Antes de llamar a Betty, escribes lo que Karina te contó mientras lo tienes fresco.</p><p>Es el primer caso de tu registro de atención. <mark class="clave">Elige qué entra y qué no</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del registro.', boton: 'Guardar el registro',
    bloques: [
      { id: 'hechos', t: 'Hechos', n: 2, ops: [
        { id: 'h1', t: 'Fecha, hora y lugar de cada hecho, con las palabras que Karina recuerda.', ok: true, por: 'Los hechos concretos son lo que se puede investigar.' },
        { id: 'h2', t: 'Testigos que mencionó: Yorgelis, en la caja de al lado.', ok: true },
        { id: 'h3', t: 'Tu opinión: «Wilmer es gritón y todos lo saben».', ok: false, por: 'El registro recoge hechos, no opiniones. Tu opinión le quita fuerza al caso.' },
      ] },
      { id: 'cuidado', t: 'Cuidado de la información', n: 2, ops: [
        { id: 'c1', t: 'Guardarlo en la carpeta restringida de RR.HH., no en el Excel de ingresos.', ok: true, por: 'Pocas personas deben poder leerlo.' },
        { id: 'c2', t: 'Anotar lo que Karina pidió: que pare, sin perder su trabajo.', ok: true },
        { id: 'c3', t: 'Mandarle a Betty una foto del registro por WhatsApp para que lo vea rápido.', ok: false, por: 'Un caso así no viaja en una foto por WhatsApp.' },
      ] },
      { id: 'pasos', t: 'Siguientes pasos', n: 2, ops: [
        { id: 'p1', t: 'Informar hoy a Betty, que es quien decide cómo se investiga.', ok: true },
        { id: 'p2', t: 'Proponer que, mientras se aclara, una supervisora de cajas acompañe la práctica de Karina.', ok: true, por: 'Una medida para que no quede sola con el jefe mientras se investiga.' },
        { id: 'p3', t: 'Pedirle a Karina que firme que no lo comentará con nadie.', ok: false, por: 'La reserva es tu obligación, no un compromiso que ella deba firmar.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : -1, etica: q === 'riesgosa' ? -2 : 2 },
        flags: q === 'riesgosa' ? [] : ['registro_caso'], cartera: { casos: q === 'riesgosa' ? 'Caso de Karina sin registro claro' : 'Caso de Karina registrado' },
        out: q === 'buena' ? 'Tu registro ocupa una página: hechos, testigo, lo que Karina pidió y dos pasos concretos. Lo guardas con contraseña.' : 'Tienes un registro, aunque mezcla hechos con cosas que no deberían estar ahí.',
        pro: { ok: 'Un buen registro permite que otra persona entienda el caso sin depender de tu memoria.', risk: 'Las opiniones y los canales informales debilitan un caso y exponen a quien se quejó.', info: 'Escribe el registro el mismo día: los detalles se pierden rápido.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Hechos, no opiniones. ¡Así!' : 'Algunas piezas no ayudan al caso.'],
      };
    },
    rules: [[LEY, 'Los datos de un caso son datos personales: se guardan con acceso restringido (Ley 29733).'], [BP, 'El registro recoge hechos, testigos y lo que la persona pide. No opiniones.']],
    mirada: {
      ve: 'Tu trabajo no es juzgar a Wilmer: es que lo que Karina contó llegue completo y bien cuidado a quien debe decidir. Un registro claro es la diferencia entre «un chisme del almacén» y un caso que se puede investigar.',
      visual: { tipo: 'flujo', titulo: 'Tu primer registro de caso', pasos: ['Hechos con fecha y lugar', 'Testigos', 'Lo que pide la persona', 'Medida mientras se investiga', 'Derivar a Betty'], aqui: 0 },
    },
  },
  {
    id: 'q3', t: '10:15', ch: 'llamada', who: 'betty', titulo: 'Dos días antes de abrir', banner: 'assets/foto/reunion-jefa.webp', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>Llamas a Betty, como pidió. Te escucha sin interrumpir y suspira largo.</p><p>«Hiciste bien en llamarme. Pero piensa conmigo: Wilmer es el jefe de tienda y abrimos pasado mañana. <mark class="clave">Si lo saco ahora, la tienda no abre</mark>. ¿Qué propones?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Que Miriam, supervisora de cajas de la tienda 4, acompañe las prácticas desde hoy; que Betty hable hoy con Wilmer sobre el trato al equipo, sin nombrar a Karina; y que la investigación formal empiece apenas pase la apertura.',
        res: { q: 'buena', fx: { etica: 4, personas: 4, confianza: 2 }, rel: { betty: 1 }, flags: ['queja_protegida'], cartera: { casos: 'Caso de Karina: medida de protección y conversación con Wilmer' },
          out: 'Betty acepta: «Miriam llega a las 12». Antes de colgar te pide que le expliques a Karina qué va a pasar, para que nada la tome por sorpresa.',
          pro: { ok: 'Proteges a Karina ya, sin parar la apertura ni exponerla.', risk: 'Wilmer puede sospechar quién habló.', info: 'Cuéntale a Karina cada paso antes de que ocurra.' },
          kusi: ['animo', 'Proteger sin incendiar. ¡Bien pensado!'] } },
      { id: 'b', label: 'Que Betty llame a Wilmer ahora, le diga que Karina se quejó y le pida que se disculpe con ella delante del grupo.',
        res: { q: 'riesgosa', fx: { etica: -2, personas: -5 }, rel: { karina: -1, wilmer: -1 }, flags: ['queja_expuesta'], cartera: { casos: 'Caso de Karina: Wilmer sabe que fue ella' },
          out: 'Wilmer se disculpa de mala gana frente a las cajeras. Luego no le dirige la palabra a Karina en toda la tarde. Ella te escribe: «¿Por qué le dijo que fui yo?».',
          pro: { ok: 'Se actúa rápido.', risk: 'Revelar quién se quejó sin su permiso la deja expuesta a represalias y nadie más se animará a hablar.' },
          kusi: ['preocupado', 'Ella pidió que pare, no que la expongan.'] } },
      { id: 'c', label: 'Dejar todo para después de la apertura: son solo dos días y ahora cualquier cambio desordena la tienda.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -3, etica: -1 }, flags: ['queja_postergada'], cartera: { casos: 'Caso de Karina: en espera hasta después de la apertura' },
          out: 'La tienda sigue su ritmo. Karina pasa la tarde en la caja 3, a dos metros de Wilmer, y no levanta la vista de la pantalla.',
          pro: { ok: 'No desordenas la apertura.', risk: 'Esperar sin ninguna medida deja a Karina sola dos días más con la persona de la que se quejó.' },
          kusi: ['pensando', '¿Y mientras tanto, ella?'] } },
    ],
    rules: [[LEY, 'Los actos que afectan la dignidad del trabajador son actos de hostilidad (D.S. 003-97-TR, art. 30 g).'], [BP, 'Mientras se investiga, toma una medida que proteja a quien se quejó sin castigar a nadie por adelantado.']],
    mirada: {
      ve: 'Betty tiene razón en algo: la apertura importa. Y Karina también: no puede pasar dos días más sola. Derivar bien no es pasar el problema: es proponer una salida que proteja a la persona sin incendiar la operación.',
      visual: { tipo: 'matriz', x: 'Riesgo para la apertura', y: 'Protección para Karina', cuadrantes: ['Protege y no rompe', 'Protege, pero rompe', 'Ni protege ni rompe', 'Rompe y no protege'], items: [['Supervisora + conversación', .25, .85], ['Disculpa pública', .6, .2], ['Esperar', .1, .15]] },
      normas: [{ ley: 'D.S. 003-97-TR (Ley de Productividad y Competitividad Laboral), art. 30 g)', dice: 'Entre los actos de hostilidad están los que afectan la dignidad del trabajador.', practica: 'Insultar a una cajera frente a sus compañeras no es «el estilo» de un jefe: es un riesgo que la empresa debe atender.' }],
    },
  },
  {
    id: 'q4', t: '11:40', ch: 'whatsapp', who: 'wilmer', titulo: 'La pregunta de Wilmer', banner: 'assets/foto/frente-a-frente.webp', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>Wilmer vio a Karina salir del patio de descarga detrás de ti. Te escribe:</p><p>«Oe, ¿qué tanto hacía la Zapata contigo detrás del almacén? Si se va a quejar de que la apuro, que se acostumbre. <mark class="clave">Esto es retail</mark>.»</p>`,
    type: 'compose', enviaA: 'wilmer', para: 'Para: Wilmer Sosa · Jefe de la tienda 13', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'res', t: 'Sobre lo que conversaste', ops: [
        { id: 'r1', t: 'Wilmer, lo que cada persona conversa con RR.HH. es reservado, contigo y con cualquiera.', ok: true, por: 'No confirmas ni niegas, y la regla vale para todos.' },
        { id: 'r2', t: 'Nada, me preguntó por su boleta 😊', ok: false, por: 'Mentir te quita credibilidad cuando el caso avance.' },
      ] },
      { id: 'trato', t: 'Sobre el trato', ops: [
        { id: 't1', t: 'Apurar está bien; gritar o insultar, no. Betty quiere conversar contigo hoy sobre el trato en las prácticas.', ok: true, por: 'Pones el límite sin acusar a nadie.' },
        { id: 't2', t: 'Igual trata de bajar un poquito el tono, ¿ya? 😅', ok: null, por: 'Amable, pero no deja claro que hay un límite.' },
      ] },
      { id: 'ayuda', t: 'Lo que le ofreces', ops: [
        { id: 'a1', t: 'Para que llegues bien al miércoles, Miriam acompaña las prácticas de caja desde hoy.', ok: true, por: 'Le das apoyo real para su urgencia.' },
        { id: 'a2', t: 'Si alguien se queja de ti, te aviso primero.', ok: false, por: 'Eso es ponerte de su lado contra quien se queje.' },
      ] },
    ],
    res: sel => {
      const mal = sel.res === 'r2' || sel.ayuda === 'a2', buenas = ['r1', 't1', 'a1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { etica: mal ? -5 : 3, confianza: q === 'buena' ? 2 : 0, cumplimiento: mal ? -2 : 2 }, rel: { wilmer: mal ? 1 : -1 },
        flags: q === 'buena' ? ['wilmer_limite'] : [],
        out: q === 'buena' ? 'Wilmer tarda diez minutos en responder: «Ya. Pero que la tal Miriam no me mueva las cajas». En la tarde, nadie lo escucha gritar.' : mal ? 'Wilmer responde con un pulgar. Te quedas con un compromiso que no debiste hacer.' : 'Wilmer contesta «ya, ya». No queda claro si entendió que hay un límite.',
        pro: { ok: 'Reserva, límite y apoyo en un solo mensaje.', risk: 'Mentir o prometer avisos al jefe convierte a RR.HH. en su aliado contra el equipo.', info: 'Cuando el jefe pregunte quién se quejó, la respuesta siempre es la misma: es reservado.' },
        kusi: [q === 'buena' ? 'animo' : mal ? 'indignado' : 'pensando', q === 'buena' ? 'Firme, sin pelear. ¡Así!' : mal ? '¡Eso no te toca prometer!' : 'Le faltó el límite.'],
      };
    },
    rules: [[BP, 'Lo que una persona conversa con RR.HH. es reservado: no se confirma ni se niega frente a terceros.']],
    mirada: {
      ve: 'Wilmer está bajo presión y su forma de mandar viene de años en tiendas donde gritar «funcionaba». Ponerle un límite no es declararle la guerra: es decirle qué no se puede y ofrecerle una ayuda que sí le sirve.',
      visual: { tipo: 'mensaje', titulo: 'Reserva, límite y apoyo', txt: 'Lo que cada persona conversa con RR.HH. es reservado. Apurar está bien; gritar o insultar, no. Para que llegues bien al miércoles, Miriam acompaña las prácticas de caja.' },
    },
  },
  {
    id: 'q5', t: '13:20', ch: 'documento', who: null, titulo: 'La tarde que no alcanza', banner: 'assets/esc/reloj.webp', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: () => `<p>Almuerzas un tamalito parada, mientras el celular vibra sin parar. Rosa acaba de llegar de la clínica para firmar y empezar hoy, junto con tres rezagados.</p><p>Tienes la tarde para <mark class="clave">tres frentes</mark>. El resto tendrá que esperar.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres frentes que atiendes esta tarde.', boton: 'Ir por estos', resumen: 'Atendiste',
    cols: ['Frente', 'Lo que sabes'],
    rows: [
      { id: 'alta', cells: ['Avisar a César que Rosa y tres más ingresan hoy', 'El alta en el T-Registro va dentro del día de ingreso'] },
      { id: 'sst', cells: ['Coordinar la capacitación presencial de SST de los cuatro', 'Faltaron a la inducción del viernes y no pueden empezar sin ella'] },
      { id: 'horario', cells: ['Mandar los horarios prometidos el viernes', '45 personas preguntan en el grupo'] },
      { id: 'beca', cells: ['La constancia de trabajo que Jhonatan pide «para ayer» para su beca', 'Lleva tres días trabajando'] },
      { id: 'fotos', cells: ['Elegir las fotos de la inducción para el Facebook de la empresa', 'Marketing las pidió hoy'] },
      { id: 'yorgelis', cells: ['Preguntarle a Yorgelis en el pasillo qué vio el viernes', 'Es la testigo de Karina'] },
    ],
    score: { alta: 3, sst: 3, horario: 2, beca: 1, fotos: -1, yorgelis: -3 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: picks.includes('alta') && picks.includes('sst') ? 5 : -3, tiempo: q === 'buena' ? 2 : 0, etica: picks.includes('yorgelis') ? -4 : 1 },
        flags: picks.includes('alta') && picks.includes('sst') ? ['ingresos_lunes'] : [], cartera: { contratos: picks.includes('alta') ? 'Rosa y 3 rezagados: firmados y con alta' : 'Rezagados firmados, alta sin avisar' },
        out: q === 'buena' ? 'A las 4, Rosa tiene contrato, alta, capacitación de seguridad y zapatos de su talla. Los horarios salen a las 5:40 y el grupo se calma.' : picks.includes('yorgelis') ? 'Yorgelis se pone nerviosa en el pasillo: «¿Me van a meter en problemas?». Dos reponedores escuchan. La investigación no te tocaba a ti.' : 'Avanzas, pero algo con fecha de hoy se queda sin hacer.',
        pro: { ok: 'Lo que la ley pide para hoy va primero; lo demás, después.', risk: 'Investigar por tu cuenta, en un pasillo, expone a la testigo y contamina el caso.', info: 'La constancia de Jhonatan puede salir mañana: dile a qué hora la recoge.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Alta, seguridad y horarios. ¡Tarde salvada!' : 'Revisa qué tenía fecha de hoy.'],
      };
    },
    rules: [[LEY, 'El alta en el T-Registro se registra dentro del día de ingreso (SUNAT).'], [LEY, 'La capacitación de SST al momento de la contratación es presencial (Reglamento de la Ley 29783, art. 27-A).']],
    mirada: {
      ve: 'Un caso delicado no detiene el resto del trabajo: Rosa ingresa hoy igual. La asistente de RR.HH. sostiene las dos cosas a la vez, y sabe que investigar no es su tarea: su tarea es cuidar que el caso llegue intacto.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Fecha límite', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'Mañana', 'No es tuyo'], items: [['Alta de hoy', .2, .95], ['SST de los cuatro', .5, .9], ['Horarios', .45, .6], ['Constancia', .2, .35], ['Fotos', .3, .15], ['Preguntar a la testigo', .3, .05]] },
    },
  },
  {
    id: 'q6', t: '15:30', ch: 'presencial', who: 'betty', titulo: 'La ruta del caso', banner: 'assets/foto/mentora.webp', lugar: 'Oficina central · sala de Betty', show: ['calidad', 'cumplimiento', 'confianza'],
    body: () => `<p>Vas a la oficina central en un colectivo que se demora media hora en el puente. Betty ya conversó con Wilmer y te recibe con la puerta cerrada.</p><p>«Quiero que esto quede como procedimiento para todas las tiendas. Ayúdame a <mark class="clave">ordenar la ruta de un caso</mark>, desde que alguien te cuenta algo hasta que se cierra.»</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la atención de un caso. Usa las flechas.', boton: 'Guardar la ruta',
    items: [
      { id: 'esc', t: 'Escuchar sin juzgar y registrar los hechos el mismo día', por: 'Así empieza todo.' },
      { id: 'der', t: 'Informar a la jefatura de RR.HH. ese mismo día', por: 'Quien decide cómo se investiga.' },
      { id: 'prot', t: 'Tomar una medida de protección mientras se investiga', por: 'Que la persona no quede sola con quien la afectó.' },
      { id: 'inv', t: 'Escuchar a testigos y al jefe, a cargo de alguien que no dependa de él', por: 'Una investigación imparcial.' },
      { id: 'dec', t: 'Decidir y comunicar el resultado a ambas partes', por: 'Nadie se queda sin respuesta.' },
      { id: 'seg', t: 'Hacer seguimiento con la persona a la semana', por: 'Para saber si de verdad paró.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 3 : 0 }, rel: { betty: q === 'buena' ? 1 : 0 },
        cartera: { casos: q === 'riesgosa' ? 'Ruta del caso sin ordenar' : 'Ruta de atención de casos lista' },
        out: q === 'buena' ? 'Betty imprime la ruta y la pega junto a su escritorio. «Esto lo presento a gerencia. Y el jueves empezamos con el caso de Karina.»' : 'Betty mueve un par de pasos: «Ojo: primero se protege, luego se investiga».',
        pro: { ok: 'Una ruta clara evita que cada caso dependa del humor de quien lo recibe.', risk: 'Investigar sin proteger, o decidir sin escuchar a las dos partes, termina mal para todos.', info: 'Pregunta si la empresa tiene un canal de denuncias por escrito además del presencial.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Un procedimiento para toda la cadena!' : 'Casi: el orden protege.'],
      };
    },
    rules: [[BP, 'Primero se protege, luego se investiga, y siempre se escucha a ambas partes.']],
    mirada: {
      ve: 'Lo que pasó con Karina puede pasar en cualquier tienda. Convertir un caso en un procedimiento es una de las cosas más valiosas que hace RR.HH.: la próxima cajera no dependerá de la suerte de encontrar a alguien que la escuche.',
      visual: { tipo: 'flujo', titulo: 'La ruta de un caso', pasos: ['Escuchar y registrar', 'Informar', 'Proteger', 'Investigar', 'Decidir', 'Seguimiento'] },
    },
  },
  {
    id: 'q7', t: '18:20', ch: 'whatsapp', who: 'karina', titulo: '«¿Me van a botar?»', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la avenida Grau', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Esperas la combi en el paradero, con el sol bajando detrás de los cerros. ${F.has('firma_en_blanco') ? 'Acabas de leer el correo de Betty sobre el contrato de Milagros y tienes el estómago apretado.' : 'Ha sido un día largo.'}</p><p>Te escribe Karina: «Señorita, ¿ya sabe algo? <mark class="clave">¿Me van a botar por lo que le conté?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que nadie puede despedirla por contar lo que pasó, qué se hizo hoy y qué viene, sin prometerle un resultado.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3 }, rel: { karina: 1 },
          envia: [['karina', 'Karina, no te van a botar por contar lo que pasó. Hoy lo vio Betty, y desde mañana Miriam acompaña las prácticas de caja. Después de la apertura, Betty va a revisar el caso con calma y te vamos a contar cada paso. Si algo se repite, escríbeme.']],
          out: 'Karina responde con un «gracias» y un corazón verde. Por la ventana de la combi ves la tienda 13 iluminada, con sus letreros recién puestos.',
          pro: { ok: 'Le dices la verdad: lo que sabes, lo que se hizo y lo que falta.', info: 'No prometas un resultado que no depende de ti.' },
          kusi: ['feliz', 'Verdad y calma. Justo lo que necesitaba.'] } },
      { id: 'b', label: 'Decirle que se quede tranquila, que Wilmer ya cambió y que no va a volver a pasar.',
        res: { q: 'aceptable', fx: { personas: 1, confianza: -2 },
          envia: [['karina', 'Tranquila, Karina. Wilmer ya cambió, no va a volver a pasar 😊']],
          out: 'Karina se queda tranquila esta noche. Pero si Wilmer vuelve a gritar, tu promesa será lo primero que recuerde.',
          pro: { ok: 'La calmas.', risk: 'Prometer algo que no controlas te quita credibilidad si falla.' },
          kusi: ['pensando', '¿Y si vuelve a pasar?'] } },
      { id: 'c', label: 'Esperar a tener novedades concretas para responderle: no quieres decirle algo a medias.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -2 }, rel: { karina: -1 },
          out: 'Karina ve el doble check azul y ninguna respuesta. Esa noche casi no duerme.',
          pro: { ok: 'No dices nada que no sepas.', risk: 'El silencio, para alguien que tiene miedo, se lee como la peor noticia.' },
          kusi: ['triste', 'El silencio también responde.'] } },
    ],
    rules: [[BP, 'A quien se quejó, cuéntale qué se hizo y qué viene. No prometas resultados que no dependen de ti.']],
    mirada: {
      ve: 'El miedo a perder el trabajo es lo que hace que la mayoría no se queje. Un mensaje honesto, a tiempo, le confirma a Karina que hablar no fue un error. Y eso, más que cualquier procedimiento, es lo que hará que otras se animen.',
      visual: { tipo: 'cambio', titulo: 'Del miedo a la confianza', pares: [['«¿Me van a botar?»', 'Nadie te despide por contar'], ['Silencio', 'Lo que se hizo hoy'], ['Promesas', 'Lo que viene y cuándo']] },
    },
  },
];
