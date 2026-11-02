// Generalista de RR.HH. · Capítulo 3 · «La cocina» · Semana 1, viernes.
// Hilo del mes: preparar el Hotel Inti Wasi (Cusco) para la temporada alta, siendo la única persona de RR.HH.
// Normas citadas (TUO del D.Leg. 728, D.S. 003-97-TR):
//   https://lpderecho.pe/jurisprudencia-articulo-30-tuo-decreto-legislativo-728-despido-hostilidad
//   https://img.lpderecho.pe/wp-content/uploads/2022/08/Resolucion-676-2022-Sunafil-TFL-Primera-Sala-LPDerecho.pdf
//   https://elperuano.pe/noticia/291489-insultos-o-agresion-en-tu-oficina-enterate-de-las-consecuencias-legales-inmediatas
// - Art. 30 g): son actos de hostilidad los actos contra la moral y los que afecten la dignidad del trabajador
//   (la SUNAFIL y la jurisprudencia lo aplican a conductas reiteradas de jefes).
// - Art. 25: la injuria y el faltamiento de palabra en agravio de otros trabajadores son faltas graves; su sanción
//   exige un procedimiento con derecho de defensa (se explica el principio, sin plazos).

export const CAP = {
  n: 3, titulo: 'La cocina', dia: 'Semana 1, viernes', foto: 'assets/foto2/tension.webp',
  lugar: 'Cocina del Hotel Inti Wasi, Cusco',
  inicio: '07:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Cusco, viernes. Anoche, a las once, alguien escribió en el grupo de cocina: «Ya no voy a recibir órdenes a gritos». Era Marleny. El chef respondió con un solo mensaje: «El que no aguanta, que se vaya».', boton: 'Bajar a la cocina',
  kusi: 'En una cocina caliente, las palabras queman más que el aceite. Hoy escuchas primero.',
  lead: 'Escuchaste a los testigos, contuviste al chef, separaste los hechos de las opiniones, preparaste y condujiste una mediación, y dejaste por escrito lo que se acordó.',
  reflexion: '¿Qué parte de un conflicto se puede conversar y qué parte necesita una sanción?',
  siguiente: { n: 4, titulo: 'Los turnos', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'cocina', p: 'Conflicto entre el chef y Marleny', j: 'Cocina', d: 0, e: 'Antes de la temporada' },
  { id: 'acta', p: 'Acta de mediación', j: 'Verónica · Gerencia', d: 0, e: 'Hoy' },
  { id: 'contratos', p: 'Firma de los contratos de temporada', j: 'Verónica · Gerencia', d: 0, e: 'Hoy, 9:00' },
];

export const FUTURO = {
  testigo_kevin: ['Kevin te contó lo que vio el martes.', 'Confiará en ti cuando algo le pase.'],
  chef_escuchado: ['Escuchaste al chef antes de juzgarlo.', 'Lo recordará cuando haya que mover turnos en el capítulo 4.'],
  chef_a_la_defensiva: ['El chef sintió que llegaste a acusarlo.', 'Te costará que colabore con los turnos del capítulo 4.'],
  marleny_movida: ['Le ofreciste al chef sacar a Marleny de la cocina principal.', 'Marleny lo vivió como un castigo.'],
  hechos_separados: ['Separaste los hechos de las opiniones y viste que el insulto no se resuelve solo conversando.', 'Tu acta será sólida.'],
  insulto_minimizado: ['Trataste el insulto como un roce más.', 'Volverá a pasar.'],
  mediacion_acuerdo: ['El chef y Marleny firmaron acuerdos concretos para la cocina.', 'Se revisan el martes.'],
  insulto_registrado: ['El insulto se trató aparte y por escrito, con Verónica.', 'El chef sabe que hay un límite.'],
  tregua_falsa: ['Cerraste el conflicto con un apretón de manos.', 'En la temporada, la tensión volverá a la cocina.'],
  chef_despido_pedido: ['Pediste el despido del chef el mismo día.', 'Verónica lo frenó, y el chef lo sabe.'],
  gerencia_informada: ['Le contaste a Verónica el insulto reiterado y le propusiste una llamada de atención escrita.', 'Se verá el lunes a las 8:00.'],
  insulto_oculto: ['No le contaste a Verónica el insulto reiterado del chef.', 'Se enterará por otro lado.'],
};

export const CHATS = {
  grupo: { n: 'Cocina Inti Wasi 🍳', sub: 'El chef, Marleny, Kevin, Joel y el equipo', c: '#C2410C' },
  veronica: { n: 'Verónica Quispe', sub: 'Gerenta general', who: 'veronica' },
  chef: { n: 'Chef Rolando Huamán', sub: 'Jefe de cocina', who: 'chef' },
  wendy: { n: 'Wendy Condori', sub: 'Recepcionista bilingüe', who: 'wendy' },
  marleny: { n: 'Marleny Ccahuana', sub: 'Cocinera de línea · 16 años en el hotel', c: '#8A5A2B' },
  joel: { n: 'Joel Pumacahua', sub: 'Steward · se comunica por escrito y en lengua de señas', c: '#2E7D6B' },
};

export const WSP = [
  { chat: 'veronica', t: '07:05', de: 'Verónica', txt: '¿Viste el grupo de cocina? Arréglalo antes de que lleguen los franceses del lunes. No quiero perder ni al chef ni a Marleny.' },
  { chat: 'joel', t: '09:50', de: 'Joel', txt: 'Gracias por escribirme a mí también. Casi nadie me pregunta 🙌' },
  { chat: 'marleny', t: '17:20', de: 'Marleny', txt: 'Hija, gracias. Dieciséis años aquí y es la primera vez que alguien me escucha en una sala con la puerta cerrada.', si: 'mediacion_acuerdo' },
  { chat: 'chef', t: '17:40', de: 'Chef Rolando', txt: 'Me pasé. Ya sé. Pero que conste que las recetas las decido yo.', si: 'insulto_registrado' },
  { chat: 'marleny', t: '18:10', de: 'Marleny', txt: 'Ya, nos dimos la mano. Pero él sigue igual, ¿no ve?', si: 'tregua_falsa' },
];

export const CORREOS = [
  { t: '08:00', de: 'TripAdvisor · notificación', para: 'Gerencia Inti Wasi', asunto: 'Nueva reseña: ★★☆☆☆ «Lovely staff, but lunch took forever»', html: '<p>«The view is amazing and the receptionist Wendy was wonderful, but we waited 50 minutes for lunch and the rocoto relleno was not what we expected.»</p>' },
  { t: '12:15', de: 'Verónica Quispe', para: 'Generalista de RR.HH.', asunto: 'Contratos firmados', html: '<p>Firmé los contratos de los tres que empiezan el lunes. Lo de la cocina me preocupa más que cualquier contrato. Avísame cómo sale.</p><p>V.</p>' },
];

export const QUIZ = [
  { q: 'Antes de reunir a dos personas en conflicto, ¿qué conviene hacer?', ops: ['Juntarlas de inmediato', 'Escuchar a cada una por separado', 'Decidir quién tiene la razón', 'Esperar a que se calme solo'], ok: 1, por: 'Hablar primero por separado te da los hechos, baja la tensión y te deja ver si la mediación es posible.' },
  { q: '«El chef es así, todos los chefs gritan.» ¿Qué es esta frase?', ops: ['Un hecho', 'Una opinión que normaliza la conducta', 'Un acuerdo', 'Una norma'], ok: 1, por: 'Es una interpretación. En un acta solo van hechos: qué pasó, cuándo y delante de quién.' },
  { q: 'Un jefe le dice reiteradamente «vieja, ya no sirves» a una trabajadora delante de otros. ¿Qué puede configurar?', ops: ['Nada: es la cultura de la cocina', 'Un acto que afecta su dignidad', 'Una broma', 'Un problema de ella'], ok: 1, por: 'El D.S. 003-97-TR, art. 30 g), considera hostilidad los actos que afecten la dignidad del trabajador.' },
  { q: '¿Qué parte de este conflicto se puede mediar?', ops: ['El insulto', 'Cómo se comunican los cambios de recetas y las órdenes', 'Ninguna', 'Todo, con un apretón de manos'], ok: 1, por: 'Lo operativo se acuerda. El insulto a la dignidad se trata aparte, formalmente.' },
  { q: '¿Qué debe tener un buen acta de mediación?', ops: ['Opiniones de ambas partes', 'Hechos, acuerdos concretos y una fecha de revisión', 'Solo las firmas', 'La versión de la gerencia'], ok: 1, por: 'Sin acuerdos concretos ni seguimiento, el acta es solo un papel.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'k1', t: '07:10', ch: 'presencial', who: null, titulo: 'Lo que vieron los demás', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Cocina, durante el desayuno', show: ['personas', 'tiempo'],
    body: (n, F) => `<p>La cocina huele a pan chuta recién horneado y a café pasado. El chef y Marleny trabajan a dos metros de distancia sin mirarse. ${F.has('chef_informal') ? 'Kevin, que todavía no ha firmado contrato, lava ollas con la cabeza gacha.' : 'Kevin, con su credencial nueva, lava ollas con la cabeza gacha.'}</p><p>Antes de hablar con los protagonistas, <mark class="clave">tienes tiempo para preguntarle a dos personas</mark> qué pasó.</p>`,
    type: 'ask', max: 2, prompt: 'Elige a dos personas para preguntarles. Cada una vio algo distinto.',
    opts: [
      { id: 'kevin', label: 'Kevin, el ayudante nuevo', info: '«El martes, en pleno almuerzo, el chef le gritó a la señora Marleny delante de todos: "vieja, ya no sirves para esto". Ella se fue al baño. Desde ahí no se hablan: él me pasa a mí las órdenes para ella. Por favor, no diga que fui yo.»' },
      { id: 'joel', label: 'Joel, el steward', info: 'Joel es sordo. Te escribe en el celular: «Marleny cambió el ají del rocoto relleno sin avisar. Un huésped se quejó. El chef explotó. Pero ella lo hizo porque el ají de siempre no llegó del mercado».' },
      { id: 'julian', label: 'Don Julián, el maître', info: '«Al chef le pesan las reseñas: Verónica le mostró una de dos estrellas por la demora del almuerzo. Y Marleny lleva 16 años aquí; le enseñó a cocinar a medio personal, incluido a él, cuando entró.»' },
      { id: 'wendy', label: 'Wendy, en recepción', info: '«Marleny me dijo que está pensando renunciar. Pero no puede: cuida a su nieto desde que su hija se fue a trabajar a Arequipa.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 2, tiempo: -1 }, flags: picks.includes('kevin') ? ['testigo_kevin'] : [],
      out: picks.includes('kevin') ? 'Ya sabes lo que se dijo, palabra por palabra. Y sabes que Kevin tiene miedo de haberlo contado.' : 'Tienes contexto, pero nadie te ha dicho todavía qué pasó exactamente el martes.',
      kusi: ['curioso', 'Cada uno vio un pedazo. Nadie vio todo.'],
    }),
    mirada: {
      ve: 'En un conflicto entre dos personas, los testigos ven pedazos distintos. Escucharlos antes de reunirte con los protagonistas te da hechos y te evita llegar con una sola versión.',
      visual: { tipo: 'flujo', titulo: 'Antes de mediar', pasos: ['Escuchar a testigos', 'Escuchar a cada parte', 'Separar hechos de opiniones', 'Decidir qué se media'], aqui: 0 },
    },
  },
  {
    id: 'k2', t: '08:40', ch: 'presencial', who: 'chef', titulo: '«O ella o yo»', banner: 'assets/foto2/grito.webp', lugar: 'Despensa de la cocina', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>El chef te lleva a la despensa, entre sacos de papa nativa y cajas de quinua. Habla bajo, pero aprieta la mandíbula.</p><p>«Me cambió la receta sin avisar y el huésped se quejó con Verónica. Me desautoriza delante de los chicos.${F.has('chef_formal') ? ' Usted me resolvió rápido lo de Kevin; resuélvame esto también.' : ''} <mark class="clave">O ella o yo</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Escucharlo, reconocerle la presión de la reseña y proponerle una conversación con Marleny a las tres, con reglas claras.',
        res: { q: 'buena', fx: { personas: 3, confianza: 2 }, rel: { chef: 1 }, flags: ['chef_escuchado'], cartera: { cocina: 'Conversación con reglas a las 15:00' },
          out: 'El chef resopla: «¿Conversar? Yo no soy de conversar». Pero cuando le dices que la reseña también te preocupa a ti, afloja los hombros. «Ya. A las tres. Pero que no me sermoneen.»',
          pro: { ok: 'Reconocer su presión no es darle la razón: es abrir la puerta para que acepte sentarse.', risk: 'El chef puede leer tu escucha como apoyo. Deja claro que todavía no has hablado con Marleny.', info: 'Ante un «o ella o yo», no elijas: cambia la pregunta a «cómo trabajan los dos en temporada».' },
          kusi: ['animo', 'Escuchar no es estar de acuerdo. ¡Bien!'] } },
      { id: 'b', label: 'Ofrecerle mover a Marleny al comedor del personal durante la temporada, para que no se crucen.',
        res: { q: 'riesgosa', fx: { personas: -4, etica: -3, tiempo: 2 }, rel: { chef: 1 }, flags: ['marleny_movida'], cartera: { cocina: 'Marleny, al comedor del personal' },
          out: 'El chef asiente satisfecho. Al mediodía, Marleny se entera por Kevin de que «la van a mandar a cocinar para el personal». Se le cae el cucharón.',
          pro: { ok: 'Separas a las dos personas de inmediato.', risk: 'Mover a quien recibió el insulto se parece mucho a castigarla. Y quitarle su puesto sin motivo puede ser un acto de hostilidad.' },
          kusi: ['triste', '¿A ella la mueves? Si fue a ella a quien le gritaron…'] } },
      { id: 'c', label: 'Decirle que lo que hizo es grave y que vas a hablar con Verónica sobre él.',
        res: { q: 'aceptable', fx: { etica: 2, personas: -1, confianza: -2 }, rel: { chef: -1 }, flags: ['chef_a_la_defensiva'], cartera: { cocina: 'El chef, a la defensiva' },
          out: 'El chef te mira fijo: «Ya me juzgó sin escucharme». Sale de la despensa golpeando la puerta. Puede que tengas razón en el fondo, pero perdiste a tu interlocutor.',
          pro: { ok: 'No minimizas la gravedad de lo que pasó.', risk: 'Juzgar antes de escuchar a las dos partes cierra la puerta a cualquier acuerdo.' },
          kusi: ['pensando', 'Razón en el fondo… y mala forma.'] } },
    ],
    rules: [[BP, 'Ante un ultimátum, no elijas entre personas: lleva la conversación a cómo trabajarán juntas.']],
    mirada: {
      ve: 'El chef no es solo «el malo»: tiene presión real de la gerencia y siente que lo desautorizan. Entender eso no excusa el insulto, pero te permite sentarlo a conversar.',
      visual: { tipo: 'balanza', a: { t: 'Lo que el chef dice', items: ['«Me cambió la receta»', '«Me desautoriza»', '«O ella o yo»'] }, b: { t: 'Lo que le preocupa', items: ['La reseña de dos estrellas', 'Su autoridad en temporada', 'Que lo critiquen'] } },
    },
  },
  {
    id: 'k3', t: '10:15', ch: 'documento', who: null, titulo: 'Tus notas de la mañana', banner: 'assets/esc/lupa.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'etica', 'cumplimiento'],
    body: () => `<p>Hablaste también con Marleny, a solas, en el patio de servicio. Lloró un poco y te pidió que no le contaras a nadie.</p><p>Repasas tu libreta antes de preparar la reunión. <mark class="clave">No todo lo que anotaste es un hecho, y no todo se arregla conversando</mark>.</p>`,
    type: 'flag', prompt: 'Marca las notas que son opiniones o rumores, y las que no se resuelven solo con una mediación.',
    doc: { t: 'Libreta · conflicto en cocina', sub: 'Viernes, notas de la generalista' },
    lines: [
      { id: 'grito', t: 'Martes, 12:40: el chef le dijo a Marleny, delante de Kevin y Joel, «vieja, ya no sirves para esto». Marleny dice que no es la primera vez.', bad: LEY, why: 'Es un hecho y va al acta. Pero un jefe que insulta reiteradamente a una trabajadora por su edad puede afectar su dignidad: eso no se negocia en una mediación, se trata formalmente.' },
      { id: 'receta', t: 'Martes: Marleny cambió el ají del rocoto relleno sin avisar; no llegó el de siempre. Un huésped se quejó.' },
      { id: 'resentida', t: 'Marleny está resentida porque el chef es más joven y gana más.', bad: BP, why: 'Es tu interpretación. Si no lo dijo ella, no va como un hecho.' },
      { id: 'ordenes', t: 'Desde el martes, el chef le pasa las órdenes a Marleny a través de Kevin.' },
      { id: 'caracter', t: 'El chef es así: explosivo. En todas las cocinas se grita.', bad: BP, why: 'Normalizar el grito es la forma más rápida de que se repita.' },
      { id: 'resena', t: 'Viernes pasado: reseña de dos estrellas por la demora del almuerzo.' },
      { id: 'renuncia', t: 'Marleny va a renunciar (me lo dijo Wendy).', bad: BP, why: 'Es un rumor de un tercero. Si importa, pregúntaselo a Marleny.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? 'Preparas la reunión como si todo fuera un malentendido de recetas. El insulto queda como un detalle más en la libreta.' : `Pasas en limpio solo los hechos y separas el insulto en una hoja aparte, para Verónica.${hitsBp ? ' Las opiniones quedan fuera.' : ''}`,
      flags: missLey ? ['insulto_minimizado'] : ['hechos_separados'], cartera: { acta: missLey ? 'Notas mezcladas' : 'Hechos limpios; insulto, aparte' },
      pro: { ok: 'Separar hechos de opiniones protege a las dos partes y a ti.', risk: 'Si el insulto entra a la mediación como un tema más, se negocia como si fuera una diferencia de estilo.', info: 'Escribe los hechos con hora, lugar y testigos. Sin adjetivos.' },
      kusi: missLey ? ['preocupado', 'Eso no fue un problema de recetas…'] : ['celebra', 'Hechos aquí, juicios fuera. ¡Así!'],
    }),
    rules: [[LEY, 'Son actos de hostilidad los que afectan la dignidad del trabajador (D.S. 003-97-TR, art. 30 g).'], [BP, 'En una mediación se acuerda cómo trabajar; las faltas a la dignidad se tratan por la vía disciplinaria.']],
    mirada: {
      ve: 'Mediar no es poner todo en la misma mesa. Los desacuerdos de trabajo se conversan; una falta de respeto grave, sobre todo de un jefe, se trata con un procedimiento formal. Mezclarlos le dice a la víctima que su dignidad es negociable.',
      visual: { tipo: 'matriz', x: 'Gravedad', y: 'Se resuelve conversando', cuadrantes: ['Mediar', 'Mediar con cuidado', 'Ignorar', 'Vía formal'], items: [['Cambio de receta', .25, .85], ['Órdenes por Kevin', .4, .75], ['Reseña', .3, .6], ['«Vieja, ya no sirves»', .9, .15]] },
    },
  },
  {
    id: 'k4', t: '12:30', ch: 'documento', who: null, titulo: 'Preparar la reunión', banner: 'assets/esc/mesa.webp', show: ['calidad', 'personas'],
    body: (n, F) => `<p>Almuerzas el rocoto relleno del menú del personal. ${F.has('marleny_movida') ? 'Esta vez lo hizo Marleny, sola, en el comedor del personal.' : 'Esta vez lo hizo Marleny, con el ají de siempre.'} Está buenísimo.</p><p>Tienes hasta las tres para preparar la conversación. <mark class="clave">Una mediación mal preparada termina peor que si no la hubieras hecho</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena cómo vas a preparar y conducir la reunión. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'pregunta', t: 'Preguntarle a Marleny, a solas, si quiere esta conversación', por: 'Una mediación sin voluntad de una de las partes no es mediación.' },
      { id: 'lugar', t: 'Elegir un lugar neutral y una hora sin servicio: la sala de reuniones, a las 15:00', por: 'Ni la cocina del chef ni el patio de Marleny.' },
      { id: 'reglas', t: 'Abrir con reglas: cada uno habla sin interrupciones, sin gritos, y lo dicho queda en la sala', por: 'Las reglas protegen a quien tiene menos poder.' },
      { id: 'cuentan', t: 'Que cada uno cuente qué pasó y cómo le afectó', por: 'Primero escucharse; después, buscar soluciones.' },
      { id: 'interes', t: 'Buscar lo que ambos quieren: una cocina que funcione en temporada', por: 'El interés común es el puente.' },
      { id: 'acuerdos', t: 'Cerrar con acuerdos concretos, por escrito, y una fecha para revisarlos', por: 'Sin seguimiento, el acuerdo se evapora.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, personas: q === 'riesgosa' ? -2 : 2 },
        out: q === 'buena' ? 'Marleny acepta: «Si usted está, sí». Reservas la sala y pones una jarra de agua y tres vasos.' : 'Tienes un plan, aunque algún paso podría hacer que la reunión arranque con el pie izquierdo.',
        pro: { ok: 'Preparar el lugar, las reglas y el orden es la mitad de una mediación.', risk: 'Si empiezas por las soluciones, nadie se siente escuchado y ninguna solución dura.', info: 'Siéntate de modo que no quedes al lado de ninguno de los dos.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Agua, reglas y paciencia!' : 'El orden importa más de lo que parece.'],
      };
    },
    rules: [[BP, 'Una mediación necesita voluntad de las partes, un lugar neutral, reglas y acuerdos con seguimiento.']],
    mirada: {
      ve: 'En empresas pequeñas, la generalista es a la vez mediadora, RR.HH. y a veces testigo. Por eso el método importa: es lo que hace que ambas partes confíen en el proceso aunque no confíen la una en la otra.',
      visual: { tipo: 'linea', titulo: 'La reunión de las tres', hitos: [['15:00', 'Reglas'], ['15:10', 'Cada uno cuenta'], ['15:35', 'Interés común'], ['15:50', 'Acuerdos por escrito']] },
    },
  },
  {
    id: 'k5', t: '15:00', ch: 'presencial', who: 'chef', titulo: 'La sala con la puerta cerrada', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala de reuniones', show: ['personas', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('chef_a_la_defensiva') ? 'El chef llega tarde y con los brazos cruzados.' : 'El chef llega puntual, con el mandil todavía puesto.'} Marleny se sienta derecha, con las manos sobre su cartera.</p><p>Después de un rato, el chef dice: «Ya, perdón, me pasé. Pero ella también me desautoriza». Marleny responde sin mirarlo: «<mark class="clave">No es la primera vez que me dice vieja. Hace un mes me dijo que me jubile</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Seguir con lo de la cocina, y avisarles que el insulto se verá aparte, por escrito, con Verónica.',
        res: { q: 'buena', fx: { personas: 4, etica: 4, cumplimiento: 3 }, rel: { chef: 0 }, flags: ['mediacion_acuerdo', 'insulto_registrado'], cartera: { cocina: 'Acuerdos operativos; insulto, por la vía formal' },
          out: 'El chef se pone rojo: «¿Me va a sancionar?». Le explicas que eso lo verá la gerencia con un procedimiento, y que él podrá dar su versión. Luego, para sorpresa de los dos, acuerdan cómo avisar los cambios de receta en diez minutos.',
          pro: { ok: 'Proteges a Marleny sin destruir la posibilidad de que trabajen juntos.', risk: 'El chef saldrá molesto. Pero sabe dónde está el límite.', info: 'La sanción, si corresponde, sigue un procedimiento con derecho de defensa: no la decides tú en la sala.' },
          kusi: ['celebra', 'Lo que se conversa, se conversa. Lo que no, no.'] } },
      { id: 'b', label: 'Aprovechar que el chef se disculpó: que se den la mano y cerrar el tema. A tres días de la temporada, la cocina necesita paz más que papeles.',
        res: { q: 'riesgosa', fx: { personas: -2, etica: -4, tiempo: 2 }, rel: { chef: 1 }, flags: ['tregua_falsa'], cartera: { cocina: 'Apretón de manos, sin acuerdos' },
          out: 'Se dan la mano. Marleny sale primero, sin decir nada. El chef te da una palmada en el hombro: «Ve, era fácil».',
          pro: { ok: 'La cocina recupera una calma aparente.', risk: 'Un insulto que se repite y se cierra con un apretón de manos le enseña a todos que no pasa nada.' },
          kusi: ['triste', 'Ella dijo «no es la primera vez»…'] } },
      { id: 'c', label: 'Cortar la reunión y pedirle a Verónica que despida hoy al chef por falta grave.',
        res: { q: 'riesgosa', fx: { etica: 1, personas: -2, confianza: -3, cumplimiento: -2 }, rel: { chef: -1, veronica: -1 }, flags: ['chef_despido_pedido'], cartera: { cocina: 'Despido pedido sin procedimiento' },
          out: 'Verónica te frena por teléfono: «¿Hoy? ¿Sin escucharlo y a tres días de la temporada?». El chef se entera en una hora. Marleny, en vez de aliviada, está asustada: «Ahora me van a culpar a mí».',
          pro: { ok: 'Tomas en serio la gravedad.', risk: 'Una falta grave se sanciona con un procedimiento y derecho de defensa. Saltártelo pone en riesgo al hotel y no protege a Marleny.' },
          kusi: ['sorpresa', '¡Del cero al cien en un minuto!'] } },
    ],
    rules: [[LEY, 'La injuria y el faltamiento de palabra a otros trabajadores son faltas graves (D.S. 003-97-TR, art. 25), y su sanción exige un procedimiento con derecho de defensa.']],
    mirada: {
      ve: 'El momento más difícil de una mediación es cuando aparece algo que no se puede mediar. Seguir como si nada, o explotarlo todo, son las dos salidas fáciles. La difícil es separar los temas sin soltar a ninguno.',
      visual: { tipo: 'balanza', a: { t: 'Se acuerda en la sala', items: ['Cómo se avisan los cambios de receta', 'Órdenes directas, sin intermediarios', 'Revisión el martes'] }, b: { t: 'Se trata aparte', items: ['El insulto reiterado', 'Con la gerencia y por escrito', 'Con derecho de defensa'] } },
      normas: [{ ley: 'D.S. 003-97-TR, arts. 25 y 30 g)', dice: 'La injuria y el faltamiento de palabra verbal o escrita en agravio de otros trabajadores son faltas graves. Y son actos de hostilidad los actos que afecten la dignidad del trabajador.', practica: 'Cuando quien insulta es un jefe, el hotel responde por lo que hace en su nombre: no basta con que «se disculpe».' }],
    },
  },
  {
    id: 'k6', t: '16:30', ch: 'documento', who: null, titulo: 'El acta', banner: 'assets/foto2/acuerdo-manos.webp', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('tregua_falsa') ? 'No hubo acuerdos, pero Verónica pidió un acta de todos modos.' : F.has('chef_despido_pedido') ? 'La reunión terminó mal, pero alguien tiene que dejar constancia de lo que pasó.' : 'Los dos ya volvieron a la cocina. Tú te quedas con la hoja en blanco.'}</p><p>El acta es lo que queda cuando se olvide la reunión. <mark class="clave">Que diga lo justo, ni más ni menos</mark>.</p>`,
    type: 'builder', prompt: 'Arma el acta eligiendo lo que va en cada bloque.', boton: 'Imprimir el acta',
    bloques: [
      { id: 'hechos', t: 'Hechos', n: 1, ops: [
        { id: 'h1', t: 'El martes, durante el almuerzo, hubo un desacuerdo por un cambio de receta y una expresión del jefe de cocina hacia la cocinera, que se trata por separado.', ok: true, por: 'Neutral, sin adjetivos, y deja constancia de que el insulto sigue otra vía.' },
        { id: 'h2', t: 'El chef, de carácter explosivo, maltrató a Marleny, que está resentida.', ok: false, por: 'Adjetivos y juicios: el acta pierde valor para las dos partes.' },
      ] },
      { id: 'acuerdos', t: 'Acuerdos', n: 2, ops: [
        { id: 'a1', t: 'Si falta un insumo y hay que cambiar una receta, Marleny avisa al chef antes de servir.', ok: true, por: 'Concreto y responde a lo que pasó.' },
        { id: 'a2', t: 'El chef da sus órdenes directamente a Marleny, sin intermediarios, y sin gritos.', ok: true, por: 'Saca a Kevin del medio.' },
        { id: 'a3', t: 'Ambos se comprometen a llevarse bien.', ok: false, por: 'Es un deseo, no un acuerdo que se pueda verificar.' },
      ] },
      { id: 'seguimiento', t: 'Seguimiento', n: 1, ops: [
        { id: 's1', t: 'Revisión el martes a las 15:00, con la generalista. Firman ambos.', ok: true, por: 'Fecha, hora y responsables.' },
        { id: 's2', t: 'Si hay problemas, que avisen.', ok: false, por: 'Nadie va a avisar.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 2 : 0 },
        cartera: { acta: q === 'riesgosa' ? 'Acta con juicios y sin seguimiento' : 'Acta con hechos, dos acuerdos y fecha de revisión' },
        out: q === 'buena' ? 'El acta ocupa una carilla. La impresora, milagrosamente, no se atasca.' : q === 'aceptable' ? 'El acta sirve, aunque una parte quedó en el aire.' : 'El acta tiene más adjetivos que acuerdos. Si alguien la lee en un mes, no sabrá qué se pactó.',
        pro: { ok: 'Un acta neutral es útil para las dos partes y para la gerencia.', risk: 'Un acta con juicios puede usarse en contra de cualquiera, incluso de ti.', info: 'Dale una copia a cada uno y guarda la original en el legajo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Una carilla y lista!' : '¿Qué se acordó, exactamente?'],
      };
    },
    rules: [[BP, 'El acta de mediación registra hechos, acuerdos verificables y una fecha de revisión.']],
    mirada: {
      ve: 'El acta de mediación es uno de los entregables del mes. No sirve para decidir quién ganó: sirve para que, el martes, todos sepan qué se prometió.',
      visual: { tipo: 'cambio', titulo: 'De la queja al acuerdo', pares: [['«Me cambió la receta»', 'Avisa antes de servir'], ['«Me grita»', 'Órdenes directas y sin gritos'], ['«Ya veremos»', 'Revisión el martes, 15:00']] },
    },
  },
  {
    id: 'k7', t: '18:30', ch: 'whatsapp', who: 'veronica', titulo: 'Para Verónica', banner: 'assets/esc/meta.webp', show: ['confianza', 'etica'],
    body: () => `<p>Verónica te escribe desde una cena con la agencia francesa.</p>`,
    chat: ['¿Y? ¿Sigo teniendo chef y cocinera? 😬'],
    type: 'compose', enviaA: 'veronica', para: 'Para: Verónica Quispe · Gerenta general', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'estado', t: 'Cómo quedó', ops: [
        { id: 'e1', t: 'Sí, siguen los dos. Hay dos acuerdos para la cocina firmados y revisión el martes.', ok: true, por: 'Responde su pregunta con hechos.' },
        { id: 'e2', t: 'Todo arreglado, ya se dieron la mano 🙌', ok: null, por: 'Tranquiliza, pero no es toda la verdad.' },
      ] },
      { id: 'pendiente', t: 'Lo que ella tiene que saber', ops: [
        { id: 'p1', t: 'Pero hay algo que no se resuelve conversando: el chef le dijo «vieja» a Marleny más de una vez, delante del equipo.', ok: true, por: 'La gerencia tiene que saberlo: es responsabilidad del hotel.' },
        { id: 'p2', t: 'Lo demás fueron cosas de cocina, nada grave.', ok: false, por: 'Ocultarle a la gerencia un insulto reiterado de un jefe la deja expuesta.' },
      ] },
      { id: 'pide', t: 'Lo que le pides', ops: [
        { id: 'r1', t: '¿Lo vemos el lunes temprano? Le propongo una llamada de atención por escrito, escuchándolo antes.', ok: true, por: 'Una propuesta concreta, proporcional y con derecho de defensa.' },
        { id: 'r2', t: 'Cualquier cosa le aviso.', ok: null, por: 'No le pides ninguna decisión.' },
      ] },
    ],
    res: sel => {
      const mal = sel.pendiente === 'p2', buenas = ['e1', 'p1', 'r1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -2 : 1, etica: mal ? -4 : 2 }, rel: { veronica: q === 'buena' ? 1 : 0 },
        flags: mal ? ['insulto_oculto'] : ['gerencia_informada'],
        out: q === 'buena' ? 'Verónica responde: «Uf. Gracias por decírmelo así. Lunes 8:00, los tres». Sales del hotel y en la esquina compras un choclo con queso para el camino.' : mal ? 'Verónica responde con un pulgar. Lo que pasó en la cocina se queda entre tú, Marleny y el chef.' : 'Verónica responde: «Ok, ¿pero entonces qué hago?». Te toca escribirle otra vez.',
        pro: { ok: 'Informas a la gerencia lo que es su responsabilidad y le propones un camino.', risk: 'Si la gerencia se entera tarde de un insulto reiterado de un jefe, la confianza en RR.HH. se rompe.', info: 'Una llamada de atención escrita es proporcional para una primera falta formal, y deja registro si se repite.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'indignado' : 'pensando', q === 'buena' ? '¡Clarito y valiente!' : mal ? '¡Eso sí era grave!' : 'Le faltó saber qué decidir.'],
      };
    },
    rules: [[BP, 'Informa a la gerencia lo que compromete al empleador, con una propuesta proporcional.']],
    mirada: { ve: 'Una generalista no es la abogada del chef ni de Marleny: es quien cuida que el hotel trate bien a su gente. Eso incluye contarle a la gerencia lo incómodo, con una salida en la mano.' },
  },
];
