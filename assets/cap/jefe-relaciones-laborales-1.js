// Jefe/a de Relaciones Laborales · Capítulo 1 · «El anuncio» · Semana 1, lunes.
// Hilo de las dos semanas: el sindicato mayoritario de Fundición del Sur (Ilo) comunica una huelga indefinida
// desde el martes de la semana 2 si no hay acuerdo en la negociación colectiva. Tú diriges la estrategia laboral.
// Normas citadas:
// - Constitución Política del Perú, art. 28: reconoce los derechos de sindicación, negociación colectiva y huelga;
//   garantiza la libertad sindical, fomenta la solución pacífica de los conflictos y regula la huelga (docs/normas/txt).
// - D.S. 019-2006-TR, Reglamento de la Ley General de Inspección del Trabajo, art. 25 (infracciones muy graves):
//   25.8 negativa a recibir el pliego, 25.9 sustitución de trabajadores en huelga, 25.10 actos que afecten la libertad
//   sindical, 25.12 discriminación por actividad sindical (docs/normas/txt).
// - D.S. 003-97-TR, TUO de la LPCL, art. 29: es nulo el despido por afiliación o participación en actividades sindicales.
// - TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR): la huelga debe comunicarse previamente al
//   empleador y a la Autoridad de Trabajo con el acta de votación (se explica el principio, sin cifra de plazo).
//   https://elperuano.pe/noticia/286407-servicios-minimos-efectos-de-incumplir-la-normativa

export const CAP = {
  n: 1, titulo: 'El anuncio', dia: 'Semana 1, lunes', foto: 'assets/3d/scenes/planta.webp',
  lugar: 'Fundición del Sur · Ilo, Moquegua',
  inicio: '07:00', fin: '19:30', cierreHora: '19:20',
  apertura: 'Ilo, siete de la mañana. El mar está quieto y la chimenea de la fundición ya echa su penacho blanco. En la puerta de la planta hay un cartel nuevo: «Huelga indefinida si no hay respuesta».', boton: 'Bajar de la movilidad',
  kusi: 'Hoy no se negocia nada: hoy se lee el conflicto. ¡Ojos abiertos y cabeza fría!',
  lead: 'Recibiste la comunicación de huelga como corresponde, frenaste una respuesta que habría encendido la planta, entendiste quién es quién y abriste una puerta con el sindicato sin regalar nada.',
  reflexion: '¿Qué sentiste cuando el gerente dijo «mano dura» y todos voltearon a mirarte?',
  siguiente: { n: 2, titulo: 'La estrategia', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'aviso', p: 'Comunicación de huelga del sindicato mayoritario', j: 'Teodoro Cutipa · Sindicato', d: 0, e: 'Llega hoy' },
  { id: 'respuesta', p: 'Respuesta de la empresa', j: 'Gerencia · Relaciones Laborales', d: 0, e: 'Borrador del gerente' },
  { id: 'mapa', p: 'Mapa de actores del conflicto', j: 'Relaciones Laborales', d: 0, e: 'Sin empezar' },
  { id: 'hornos', p: 'Qué no puede pararse en la fundición', j: 'Ing. Wilber Chambi · Operaciones', d: 0, e: 'Por conversar' },
  { id: 'mesa', p: 'Retomar el trato directo', j: 'Comisión de la empresa', d: 0, e: 'Seis reuniones sin acuerdo' },
];

export const FUTURO = {
  aviso_cargo: ['Recibiste la comunicación de huelga con sello, fecha y hora, sin discutir en la puerta.', 'Silvia la usará para revisar si cumple los requisitos. Capítulo 2.'],
  aviso_discutido: ['Discutiste la huelga en la puerta frente a la base.', 'Cutipa lo contará en la asamblea. Capítulo 4.'],
  respuesta_corregida: ['Sacaste de la respuesta las amenazas de despido y el reemplazo con contratistas.', 'El gerente te lo recordará cuando hable de «mano dura». Capítulo 2.'],
  respuesta_dura: ['La respuesta salió con frases que amenazan a quienes hagan huelga.', 'El sindicato la llevará a la Autoridad de Trabajo. Capítulo 8.'],
  contrata_frenada: ['Frenaste la idea de traer una contratista para reemplazar a los huelguistas.', 'El gerente volverá a intentarlo el primer día de huelga. Capítulo 7.'],
  lista_frenada: ['Te negaste a armar una lista de «quiénes van a parar».', 'Los supervisores lo saben. Capítulo 7.'],
  lista_armada: ['Pediste a los supervisores identificar a quienes van a parar.', 'Esa lista circulará por WhatsApp. Capítulo 6.'],
  wilber_aliado: ['Escuchaste primero a Operaciones sobre lo que no puede pararse.', 'Wilber te ayudará con los servicios mínimos. Capítulo 5.'],
  cutipa_puerta: ['Le propusiste a Cutipa retomar el trato directo con una fecha y sin condiciones previas.', 'Llega a la mesa con algo menos de guardia. Capítulo 4.'],
  cutipa_condicion: ['Le pediste a Cutipa retirar la huelga antes de volver a sentarse.', 'La base lo leerá como chantaje. Capítulo 4.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Silvia, Jhon y tú', c: '#0F2A3D' },
  gerencia: { n: 'Ing. Ricardo Paredes', sub: 'Gerente general', who: 'gerencia' },
  sindicato: { n: 'Teodoro Cutipa', sub: 'Secretario general · sindicato mayoritario', who: 'sindicato' },
  abogado: { n: 'Dra. Silvia Medina', sub: 'Abogada laboralista', who: 'abogado' },
  wilber: { n: 'Ing. Wilber Chambi', sub: 'Superintendente de Fundición', c: '#8A3B12' },
  marleny: { n: 'Marleny Quispe', sub: 'Secretaria general · sindicato de mantenimiento', c: '#5B3E8C' },
};

export const WSP = [
  { chat: 'grupo', t: '06:40', de: 'Jhon', txt: 'Jefa, buenos días. Ya pegaron el cartel en la garita. Dicen que a las 7:30 traen un documento.' },
  { chat: 'gerencia', t: '07:05', de: 'Ing. Paredes', txt: 'Vi la foto del cartel. Te espero a las 9 en mi oficina. Esto se corta de raíz.' },
  { chat: 'wilber', t: '10:50', de: 'Wilber', txt: 'Si paran los de convertidores, el horno no se apaga con un botón. Hay que hablar hoy.' },
  { chat: 'marleny', t: '13:20', de: 'Marleny', txt: 'Buenas tardes. Nosotros no hemos votado huelga. Pero lo que le den a ellos lo vamos a pedir también, que conste.' },
  { chat: 'sindicato', t: '16:30', de: 'Teodoro Cutipa', txt: 'Recibido. La junta lo verá esta noche. Que quede claro que la huelga sigue en pie.', si: 'cutipa_puerta' },
  { chat: 'sindicato', t: '16:30', de: 'Teodoro Cutipa', txt: 'No vamos a retirar nada para que nos reciban. Nos vemos donde corresponda.', si: 'cutipa_condicion' },
  { chat: 'abogado', t: '18:10', de: 'Dra. Medina', txt: 'Mañana a primera hora reviso el acta de votación. Duerme, que esta semana va a ser larga.' },
];

export const CORREOS = [
  { t: '06:58', de: 'Ing. Ricardo Paredes · Gerencia General', para: 'Jefatura de Relaciones Laborales', asunto: 'Cartel en la garita', html: '<p>Llevas tres semanas en el puesto y ya te toca el incendio. El directorio en Lima me pidió una sola cosa: que la fundición no pare.</p><p>Quiero hoy mismo una respuesta firme al sindicato. Te mando mi borrador a las 9.</p><p>R. Paredes</p>' },
  { t: '11:15', de: 'Dra. Silvia Medina · Asesoría Legal', para: 'Jefatura de Relaciones Laborales', asunto: 'Antes de responder nada', html: '<p>Recuerda: la Constitución (art. 28) reconoce la huelga y la ley la regula. Que el sindicato la comunique no la vuelve ilegal; lo que toca es revisar si cumple los requisitos de la ley (votación, comunicación previa, acta) y prepararnos.</p><p>Y por favor: nada de reemplazos ni listas. Sustituir a trabajadores en huelga es infracción muy grave (D.S. 019-2006-TR, art. 25.9).</p><p>Silvia</p>' },
];

export const QUIZ = [
  { q: '¿Qué norma de mayor jerarquía reconoce el derecho de huelga en el Perú?', ops: ['La Constitución, art. 28', 'El reglamento interno', 'La Ley 29783', 'El convenio anterior'], ok: 0, por: 'El art. 28 de la Constitución reconoce la sindicación, la negociación colectiva y la huelga, y manda regularla.' },
  { q: 'El gerente quiere traer una contratista para cubrir a quienes hagan huelga. Eso es…', ops: ['Una medida operativa normal', 'Una infracción muy grave según el D.S. 019-2006-TR', 'Obligatorio para no parar', 'Válido si se paga más'], ok: 1, por: 'El art. 25.9 del D.S. 019-2006-TR tipifica como infracción muy grave la sustitución de trabajadores en huelga.' },
  { q: 'Un despido motivado por la participación en actividades sindicales es…', ops: ['Justificado si hay huelga', 'Nulo, según el art. 29 del D.S. 003-97-TR', 'Válido con preaviso', 'Una falta leve'], ok: 1, por: 'El art. 29 de la LPCL declara nulo el despido por afiliación o actividades sindicales.' },
  { q: 'Recibir la comunicación de huelga significa…', ops: ['Aceptar la huelga', 'Dejar constancia de que llegó y desde cuándo', 'Renunciar a cuestionarla', 'Pagar los días de huelga'], ok: 1, por: 'Recibir no es aceptar: deja constancia de fecha y hora. La empresa conserva su derecho a revisar los requisitos.' },
  { q: 'Pedir a los supervisores una lista de «quiénes van a parar» puede…', ops: ['Ayudar a premiar a los leales', 'Leerse como un acto contra la libertad sindical', 'Ser exigido por SUNAFIL', 'Reemplazar los servicios mínimos'], ok: 1, por: 'Identificar a quienes ejercen un derecho colectivo para tratarlos distinto puede afectar la libertad sindical (art. 25.10 y 25.12 del D.S. 019-2006-TR).' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '07:30', ch: 'presencial', who: 'sindicato', titulo: 'La garita', banner: 'assets/foto2/grito.webp', lugar: 'Garita principal de la fundición', show: ['cumplimiento', 'confianza', 'personas'],
    body: () => `<p>Cuarenta trabajadores con casco y overol naranja rodean la garita. Teodoro Cutipa, 52 años, 26 en los convertidores, se adelanta con un folder azul. Detrás, alguien graba con el celular.</p><p>«Jefa, aquí está el acta de la asamblea y nuestra comunicación. <mark class="clave">Huelga indefinida desde el martes de la próxima semana</mark>, si la empresa no se mueve. ¿Lo recibe o lo dejamos por la Autoridad de Trabajo?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Recibirlo, sellar el cargo con fecha y hora, y decirle que la empresa lo revisará y responderá por escrito.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 3 }, rel: { sindicato: 1 }, flags: ['aviso_cargo'], cartera: { aviso: 'Recibida lunes 07:33, con acta de votación' },
          out: 'Cutipa revisa el sello y guarda su copia en el folder. «Por lo menos aquí no nos cierran la puerta.» El celular deja de grabar.',
          pro: { ok: 'Recibir con cargo deja constancia y no te compromete a nada.', risk: 'Desde ahora, todo lo que haga la empresa será mirado con lupa.', info: 'Pide copia del acta de votación: Silvia la necesita para revisar los requisitos.' },
          kusi: ['celebra', 'Formal y sin drama. ¡Así se empieza!'] } },
      { id: 'b', label: 'Recibirlo y, ya que hay público, explicarle a la base que una huelga ahora les va a costar el sueldo y quizás la planta.',
        res: { q: 'riesgosa', fx: { confianza: -4, personas: -3, cumplimiento: 1 }, rel: { sindicato: -1 }, flags: ['aviso_cargo', 'aviso_discutido'], cartera: { aviso: 'Recibida lunes 07:33; discusión en la garita' },
          out: 'Un silbido largo. «¿Nos está amenazando, jefa?», grita alguien. El video ya está en tres grupos de WhatsApp antes de que llegues a tu oficina.',
          pro: { ok: 'Lo que dices es en parte cierto: la huelga suspende el pago.', risk: 'En la puerta y frente a una cámara, una advertencia suena a amenaza.' },
          kusi: ['preocupado', 'No era el lugar ni el momento…'] } },
      { id: 'c', label: 'Decirle que no puedes recibir nada sin autorización del gerente general.',
        res: { q: 'aceptable', fx: { cumplimiento: -2, confianza: -3 }, rel: { sindicato: -1 },
          out: '«Como siempre», dice Cutipa. A las 11:00 llega la misma comunicación por mesa de partes, con copia a la Autoridad de Trabajo.',
          pro: { ok: 'No actúas sin tu gerente.', risk: 'Recibir un documento no es aceptarlo. Negarte a recibir un pliego incluso es infracción (D.S. 019-2006-TR, art. 25.8).' },
          kusi: ['pensando', 'Recibir no es ceder…'] } },
    ],
    rules: [[LEY, 'Constitución, art. 28: el Estado reconoce la huelga y regula su ejercicio.'], [BP, 'Todo documento del sindicato se recibe con cargo: fecha, hora y firma.']],
    mirada: {
      ve: 'Una huelga anunciada todavía no es una huelga: es una presión para negociar. El primer gesto de la empresa le dice a la base si del otro lado hay alguien con quien conversar.',
      visual: { tipo: 'balanza', a: { t: 'Discutir en la garita', items: ['Te desahogas', 'Video viral', 'La base se cierra'] }, b: { t: 'Recibir con cargo', items: ['Constancia de fecha y hora', 'Tiempo para revisar requisitos', 'La conversación sigue abierta'] } },
      normas: [{ ley: 'Constitución Política del Perú, art. 28', dice: 'Reconoce los derechos de sindicación, negociación colectiva y huelga; garantiza la libertad sindical y regula la huelga para que se ejerza en armonía con el interés social.', practica: 'La huelga no se discute en la garita: se revisa con la ley en la mano.' }],
    },
  },
  {
    id: 'a2', t: '09:10', ch: 'documento', who: 'gerencia', titulo: 'El borrador del gerente', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Gerencia General', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>El Ing. Paredes, 59 años, arequipeño, treinta años en minería y fundición, te pasa una hoja impresa. ${F.has('aviso_discutido') ? '«Ya vi el video de la garita. Al menos tú sí les hablaste claro.»' : '«Bien que lo recibiste sin show. Ahora toca responder.»'}</p><p>«Es mi respuesta. Corta y clara. <mark class="clave">Que sepan que aquí manda la empresa</mark>. Revísala y la firmamos a las once.»</p>`,
    type: 'flag', prompt: 'Marca las frases que no pueden ir en la respuesta.',
    doc: { t: 'Carta al Sindicato de Trabajadores de Fundición del Sur', sub: 'Borrador del Ing. Ricardo Paredes · Gerencia General' },
    lines: [
      { id: 'recibo', t: 'Acusamos recibo de su comunicación de huelga entregada el día de hoy, con el acta de asamblea adjunta.' },
      { id: 'revisa', t: 'La empresa revisará si la medida cumple los requisitos de ley y se reserva el derecho de acudir a la Autoridad de Trabajo.' },
      { id: 'despido', t: 'Advertimos que los trabajadores que se adhieran a la medida serán considerados en abandono de trabajo y despedidos.', bad: LEY, why: 'Despedir por participar en actividades sindicales es nulo (D.S. 003-97-TR, art. 29). Una huelga que cumple la ley no es abandono de trabajo.' },
      { id: 'contrata', t: 'Para garantizar la producción, la empresa contratará una empresa de servicios que cubra los puestos de quienes paralicen.', bad: LEY, why: 'Sustituir a trabajadores en huelga, de forma directa o con una contratista, es infracción muy grave (D.S. 019-2006-TR, art. 25.9).' },
      { id: 'mesa', t: 'Reiteramos nuestra disposición a continuar el trato directo y proponemos una nueva reunión esta semana.' },
      { id: 'dirigentes', t: 'Los dirigentes serán responsables personalmente de cualquier pérdida que sufra la empresa.', bad: BP, why: 'Es una amenaza vaga que endurece a la base y no tiene sustento claro. En plena negociación, personalizar la culpa en los dirigentes se lee como hostilidad sindical.' },
      { id: 'minimos', t: 'Solicitamos coordinar desde ya el personal necesario para las labores que no pueden interrumpirse en la fundición.' },
    ],
    res: ({ missLey, hitsBp }) => {
      const q = !missLey && hitsBp ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: missLey ? -6 : 6, etica: missLey ? -3 : 3, calidad: q === 'buena' ? 4 : 1 }, rel: { gerencia: missLey ? 1 : 0 },
        flags: missLey ? ['respuesta_dura'] : ['respuesta_corregida', 'contrata_frenada'],
        cartera: { respuesta: missLey ? 'Firmada con amenazas de despido o reemplazo' : 'Corregida: acuse, revisión legal, mesa y servicios mínimos' },
        out: missLey ? 'La carta sale a las 11:00. A las 15:00, Cutipa la lee en voz alta en el comedor. Silvia te escribe: «¿Quién revisó esto?».' : 'El gerente lee tus tachones con el ceño fruncido. «¿Y entonces cómo produzco?» Silvia, al teléfono, responde por ti: «Con servicios mínimos, ingeniero. No con reemplazos». Firma la versión corta.',
        pro: { ok: 'Una respuesta firme puede ser legal: acusa recibo, revisa requisitos, ofrece mesa y pide servicios mínimos.', risk: 'Una sola frase ilegal convierte tu carta en la prueba del sindicato.', info: 'Lo que no está en la carta también cuenta: el gerente no ha renunciado a la idea de la contratista.' },
        kusi: missLey ? ['indignado', 'Esa carta es un regalo para el sindicato…'] : ['feliz', 'Firme no es lo mismo que ilegal. ¡Bien!'],
      };
    },
    rules: [[LEY, 'D.S. 019-2006-TR, art. 25.9: la sustitución de trabajadores en huelga es infracción muy grave.'], [LEY, 'D.S. 003-97-TR, art. 29: es nulo el despido por participar en actividades sindicales.']],
    mirada: {
      ve: 'La «mano dura» suele escribirse con frases que la ley prohíbe. Tu trabajo no es ablandar al gerente: es darle una firmeza que no se le vuelva en contra.',
      visual: { tipo: 'cambio', titulo: 'De la amenaza a la firmeza legal', pares: [['«Serán despedidos»', '«Revisaremos los requisitos de ley»'], ['«Contrataremos una service»', '«Coordinemos el personal para lo que no puede parar»'], ['«Los dirigentes responderán»', '«Proponemos una reunión esta semana»']] },
      normas: [{ ley: 'D.S. 019-2006-TR, art. 25.9', dice: 'Es infracción muy grave impedir el libre ejercicio del derecho de huelga, como la sustitución de trabajadores en huelga por contratación directa o indirecta.', practica: 'Traer una contratista a cubrir los puestos de los huelguistas expone a la empresa a una sanción muy grave.' }],
    },
  },
  {
    id: 'a3', t: '10:40', ch: 'documento', who: null, titulo: 'Quién es quién', banner: 'assets/foto/plano-equipo.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'tiempo', 'personas'],
    body: () => `<p>En la pizarra de tu oficina, Jhon, tu analista de 27 años, ya dibujó dos círculos: «Sindicato mayoritario (unos 700)» y «Sindicato de mantenimiento (unos 180)». Al costado escribió «¿y los demás?».</p><p>Tienes la tarde para <mark class="clave">tres conversaciones</mark> antes de que el conflicto te arrastre.</p>`,
    type: 'pick', n: 3, prompt: 'Elige con quién hablas primero.', boton: 'Agendar estas tres', resumen: 'Hablarás con',
    cols: ['Con quién', 'Qué te puede dar'],
    rows: [
      { id: 'wilber', cells: ['Ing. Wilber Chambi, superintendente de Fundición', 'Qué no puede pararse: hornos, convertidores, planta de ácido'] },
      { id: 'silvia', cells: ['Dra. Silvia Medina, abogada', 'Si la huelga cumple los requisitos y qué riesgos tiene la empresa'] },
      { id: 'historial', cells: ['Jhon, con las actas de las seis reuniones de trato directo', 'Dónde se trabó la negociación y qué ya se ofreció'] },
      { id: 'marleny', cells: ['Marleny Quispe, del sindicato de mantenimiento', 'Qué hará el segundo sindicato'] },
      { id: 'soplon', cells: ['Un supervisor «de confianza» que conoce a la base', 'Quiénes son los más radicales'] },
    ],
    score: { wilber: 3, silvia: 3, historial: 3, marleny: 1, soplon: -4 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, personas: picks.includes('soplon') ? -4 : 2, etica: picks.includes('soplon') ? -3 : 1 },
        flags: picks.includes('wilber') ? ['wilber_aliado'] : [],
        cartera: { mapa: q === 'buena' ? 'Operaciones, legal e historial: el mapa tiene base' : 'Mapa a medias' },
        out: picks.includes('historial') ? 'En el acta de la cuarta reunión, Jhon subraya algo: la empresa prometió revisar la exposición a gases en convertidores y nunca volvió a tocar el tema. No todo es plata.' : 'Avanzas, pero no sabes por qué la mesa se trabó.',
        pro: { ok: 'Un mapa de actores parte de lo que puede parar, lo que dice la ley y lo que ya se negoció.', risk: 'Buscar «a los radicales» con un informante te pone a vigilar al sindicato.', info: 'A Marleny conviene escucharla pronto: lo que hagas con uno, el otro lo va a pedir.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Mapa con cimientos!' : 'Te falta una pieza clave…'],
      };
    },
    rules: [[BP, 'Antes de diseñar una estrategia, entiende qué se puede parar, qué dice la ley y qué historia arrastra la mesa.']],
    mirada: {
      ve: 'En un conflicto colectivo hay más de dos lados: la base y sus dirigentes, el otro sindicato, Operaciones, la gerencia en Ilo y el directorio en Lima. Leer el conflicto es entender qué quiere y qué teme cada uno.',
      visual: { tipo: 'matriz', x: 'Influencia en el conflicto', y: 'Urgencia hoy', cuadrantes: ['Hablar hoy', 'Mantener cerca', 'Informar', 'Observar'], items: [['Sindicato mayoritario', .9, .9], ['Gerencia', .85, .8], ['Operaciones', .6, .85], ['Sindicato de mantenimiento', .5, .45], ['Directorio en Lima', .8, .3], ['Contratistas', .3, .35]] },
    },
  },
  {
    id: 'a4', t: '12:30', ch: 'llamada', who: null, titulo: 'Tres llamadas antes del almuerzo', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Tu menú de chupe de mariscos espera en el táper. El celular, no. Tres llamadas, y la última es la del gerente, que quiere algo más.</p><p><mark class="clave">Escucha antes de decidir</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Ing. Wilber Chambi · Fundición', 'Contesta con ruido de ventiladores', '«Jefa, el horno flash y los convertidores no se apagan de un día para otro. Si los dejamos sin gente, se solidifica el material y perdemos semanas. Necesito gente mínima en cada turno, aunque haya huelga.»'],
      ['Dra. Silvia Medina · Legal', 'Contesta caminando, desde Moquegua', '«El acta tiene firmas y número de votantes. Mañana reviso si alcanzan lo que exigen la ley y sus estatutos. Ojo: si la huelga cumple, tenemos que garantizar los servicios mínimos con ellos, no contra ellos.»'],
      ['Ing. Ricardo Paredes · Gerencia', 'Contesta molesto', '«Quiero que los supervisores me pasen hoy una lista de quiénes van a parar. Con nombres. Para saber con quién cuento y con quién no.»'],
    ],
    prompt: 'El gerente espera tu respuesta. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Que no: una lista de quiénes van a parar es una lista de quiénes ejercen un derecho. Para saber con quién cuenta, lo que necesitamos es el plan de servicios mínimos con Wilber.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, confianza: -1 }, rel: { gerencia: -1 }, flags: ['lista_frenada'], cartera: { hornos: 'Plan de servicios mínimos por armar con Wilber' },
          out: 'Silencio en la línea. «Me vas a dejar sin información.» Le explicas que tendrá la información correcta: puestos y turnos, no nombres. «Mañana me lo explicas en persona.»',
          pro: { ok: 'Cambias la pregunta del gerente por una que sí puedes responder sin vulnerar derechos.', risk: 'El gerente siente que le pones trabas.', info: 'Los servicios mínimos se definen por puestos y actividades, no por la lealtad de nadie.' },
          kusi: ['animo', 'Le diste otra herramienta, no un «no» a secas.'] } },
      { id: 'b', label: 'Aceptar, pero pedir que la lista sea «solo informativa» y que no salga de gerencia.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -5 }, rel: { gerencia: 1 }, flags: ['lista_armada'],
          out: 'A las 17:00 tres supervisores preguntan por WhatsApp a sus operarios: «¿Vas a parar o no?». Una captura llega al sindicato en diez minutos.',
          pro: { ok: 'El gerente queda tranquilo hoy.', risk: 'Preguntar uno por uno si van a hacer huelga presiona a la gente y deja evidencia de hostilidad sindical (D.S. 019-2006-TR, arts. 25.10 y 25.12).' },
          kusi: ['indignado', '«Solo informativa» nunca es solo informativa…'] } },
      { id: 'c', label: 'Decirle que lo verás con la abogada y le respondes mañana.',
        res: { q: 'aceptable', fx: { tiempo: -2, cumplimiento: 1 },
          out: 'El gerente cuelga sin despedirse. A la mañana siguiente, uno de sus supervisores ya habrá empezado a preguntar por su cuenta.',
          pro: { ok: 'Consultar es prudente.', risk: 'Si sabes que algo es riesgoso, decirlo a tiempo es tu trabajo: el silencio deja la puerta abierta.' },
          kusi: ['pensando', 'Ya sabías la respuesta…'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, arts. 25.10 y 25.12: actos que afecten la libertad sindical y discriminación por actividad sindical son infracciones muy graves.']],
    mirada: {
      ve: 'La gerencia necesita saber con quién cuenta. Hay una forma legal de darle esa tranquilidad: identificar puestos indispensables. La otra forma, la lista de nombres, convierte la planificación en vigilancia.',
      visual: { tipo: 'cambio', titulo: 'Planificar sin vigilar', pares: [['Lista de quiénes van a parar', 'Lista de puestos que no pueden parar'], ['Nombres y lealtades', 'Turnos y actividades'], ['Preguntar uno por uno', 'Coordinar con el sindicato']] },
    },
  },
  {
    id: 'a5', t: '15:40', ch: 'whatsapp', who: null, titulo: 'Un mensaje a Cutipa', banner: 'assets/foto2/acuerdo-manos.webp', lugar: 'Oficina de Relaciones Laborales', show: ['confianza', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('respuesta_dura') ? 'La carta del gerente ya circula en el comedor. Hay que bajar la temperatura con algo propio.' : 'La carta salió firme pero sin amenazas. Ahora hay que darle a Cutipa una razón para volver a la mesa.'} Tienes su número desde la mañana.</p><p>Un mensaje corto, de jefatura a dirigente. <mark class="clave">Que abra la puerta sin regalar nada</mark>.</p>`,
    type: 'compose', enviaA: 'sindicato', para: 'Para: Teodoro Cutipa · Sindicato mayoritario', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'saludo', t: 'Saludo', ops: [
        { id: 's1', t: 'Buenas tardes, señor Cutipa. Le escribe la jefatura de Relaciones Laborales.', ok: true, por: 'Respetuoso y formal: es una comunicación entre partes.' },
        { id: 's2', t: 'Don Teo, ¿cómo va? Entre nos…', ok: false, por: 'El «entre nos» con un dirigente en conflicto siempre termina en asamblea.' },
      ] },
      { id: 'propuesta', t: 'La propuesta', ops: [
        { id: 'p1', t: 'Le proponemos retomar el trato directo el jueves a las 10:00 en la sala de capacitación de la planta.', ok: true, por: 'Fecha, hora y lugar concretos antes de la huelga anunciada.' },
        { id: 'p2', t: 'Si retiran la huelga, nos sentamos a conversar.', ok: false, por: 'Condicionar la mesa al retiro de un derecho se lee como chantaje.' },
        { id: 'p3', t: 'Cuando la gerencia tenga una nueva propuesta, le avisamos.', ok: false, por: 'Sin fecha: el reloj de la huelga sigue corriendo y nadie se mueve.' },
      ] },
      { id: 'agenda', t: 'Qué se verá', ops: [
        { id: 'a1', t: 'Llevaremos una propuesta revisada y queremos retomar el punto de seguridad en convertidores, que quedó pendiente.', ok: true, por: 'Retomar lo que la empresa dejó colgado muestra que leíste las actas.' },
        { id: 'a2', t: 'Ya le adelanto que el aumento que piden es imposible.', ok: false, por: 'Cierras un punto por WhatsApp antes de abrir la mesa.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Quedo atenta a la confirmación de su junta directiva.', ok: true, por: 'Le das espacio para consultar a su gente.' },
        { id: 'c2', t: 'Necesito su respuesta en una hora.', ok: null, por: 'Presionar a un dirigente que debe consultar a su base juega en contra.' },
      ] },
    ],
    res: sel => {
      const malo = sel.propuesta !== 'p1' || sel.agenda === 'a2';
      const buenas = ['s1', 'p1', 'a1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : -2, personas: malo ? -3 : 2, cumplimiento: sel.propuesta === 'p1' ? 2 : -2 }, rel: { sindicato: q === 'buena' ? 1 : malo ? -1 : 0 },
        flags: sel.propuesta === 'p2' ? ['cutipa_condicion'] : q !== 'riesgosa' ? ['cutipa_puerta'] : [],
        cartera: { mesa: sel.propuesta === 'p1' ? 'Reunión propuesta: jueves 10:00' : 'Sin fecha de reunión' },
        out: q === 'buena' ? 'Doble check azul. Media hora después: «Recibido. La junta lo verá esta noche». No es un sí, pero tampoco un portazo.' : malo ? 'Cutipa reenvía tu mensaje al grupo del sindicato con un solo comentario: «Así nos tratan».' : 'Cutipa responde con un «ok». Frío, pero responde.',
        pro: { ok: 'Fecha, agenda honesta y espacio para consultar: así se reabre una mesa trabada.', risk: 'Lo que escribes por WhatsApp a un dirigente es un documento público.', info: 'Prometiste una propuesta revisada para el jueves: tiene que existir.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Puerta abierta, sin regalar nada!' : 'Ese mensaje cerró puertas…'],
      };
    },
    rules: [[LEY, 'Constitución, art. 28: el Estado fomenta la negociación colectiva y la solución pacífica de los conflictos laborales.'], [BP, 'Nunca condiciones la mesa a que la otra parte renuncie a un derecho.']],
    mirada: {
      ve: 'Una huelga anunciada deja días para negociar. El error más común es esperar a que el otro ceda primero. Proponer una fecha concreta y retomar un pendiente propio es moverse sin ceder.',
      visual: { tipo: 'mensaje', titulo: 'Un mensaje que reabre la mesa', txt: 'Buenas tardes, señor Cutipa. Le proponemos retomar el trato directo el jueves a las 10:00 en la sala de capacitación de la planta. Llevaremos una propuesta revisada y queremos retomar el punto de seguridad en convertidores, que quedó pendiente. Quedo atenta a la confirmación de su junta directiva.' },
    },
  },
  {
    id: 'a6', t: '17:20', ch: 'presencial', who: 'gerencia', titulo: '«Mano dura»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Gerencia General', show: ['etica', 'confianza', 'calidad'],
    body: (n, F) => `<p>El sol de la tarde entra de lado por la ventana y el viento de Ilo golpea la persiana. El gerente acaba de hablar con Lima. ${F.has('lista_frenada') ? '«Me dijiste que no a la lista. Bien. Entonces dime tú qué hacemos.»' : '«Lima quiere saber qué vamos a hacer.»'}</p><p>Se inclina sobre el escritorio: «Si cedo ahora, el próximo año piden el doble. <mark class="clave">¿Estás conmigo o con ellos?</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que estás con la empresa, y que por eso le propones medir antes de pelear: mañana le traes cuánto cuesta cada escenario, el de acuerdo y el de huelga.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3, etica: 2 }, rel: { gerencia: 1 },
          out: 'El gerente se recuesta. «Números. Eso Lima lo entiende.» Te da hasta mañana a las cinco. Te vas pensando en dónde conseguir esos números en un día.',
          pro: { ok: 'Respondes a la pregunta de lealtad con trabajo, no con una pose.', risk: 'Te comprometes a un análisis exigente para mañana.', info: 'Pide a Finanzas el costo diario de una parada y el costo anual de cada punto del pliego.' },
          kusi: ['feliz', 'Con la empresa… y con los pies en la tierra.'] } },
      { id: 'b', label: 'Decirle que estás con él: si la empresa no marca límites ahora, la negociación del próximo año será peor.',
        res: { q: 'aceptable', fx: { confianza: 3, etica: -1, calidad: -1 }, rel: { gerencia: 1 },
          out: '«Eso quería oír.» El gerente sonríe por primera vez en el día. Mañana te pedirá que lo demuestres, y «marcar límites» puede significar muchas cosas.',
          pro: { ok: 'Le das seguridad a tu gerente.', risk: 'Sin números, «mano dura» es solo un estado de ánimo.' },
          kusi: ['pensando', 'Límites, sí. ¿Pero cuáles?'] } },
      { id: 'c', label: 'Decirle que tu papel es ser neutral entre la empresa y el sindicato.',
        res: { q: 'riesgosa', fx: { confianza: -5 }, rel: { gerencia: -1 },
          out: 'El gerente te mira largo. «Neutral es la Autoridad de Trabajo. Tú trabajas aquí.» Te vas con la sensación de que mañana tendrás menos espacio.',
          pro: { ok: 'Quieres mostrar que no estás en guerra con el sindicato.', risk: 'La jefatura de Relaciones Laborales representa a la empresa. Ser justo no es ser neutral.' },
          kusi: ['triste', 'Justo, sí. Neutral… no es tu silla.'] } },
    ],
    rules: [[BP, 'Representas a la empresa: tu lealtad se demuestra con estrategia, no con dureza.']],
    mirada: {
      ve: 'La jefatura de Relaciones Laborales vive entre dos desconfianzas: la gerencia sospecha que eres blanda; el sindicato, que eres la cara amable de la mano dura. Los números te sacan de esa trampa.',
      visual: { tipo: 'balanza', a: { t: 'Mano dura sin números', items: ['Tranquiliza hoy', 'Huelga más probable', 'Nadie sabe cuánto cuesta'] }, b: { t: 'Firmeza con números', items: ['Costo de la huelga', 'Costo de cada punto', 'Margen real para negociar'] } },
    },
  },
  {
    id: 'a7', t: '19:00', ch: 'correo', who: null, titulo: 'El resumen para Lima', banner: 'assets/3d/scenes/corporativo.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Ing. Ricardo Paredes', to: 'Jefatura de Relaciones Laborales', asunto: 'Para el directorio' },
    body: () => `<p>El directorio quiere cinco líneas antes de las ocho. <mark class="clave">Solo lo que tiene que saber</mark>.</p><p>R. P.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Hechos, fecha, riesgos y siguiente paso.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3 }, rel: { gerencia: 1 }, responde: 'Ingeniero: 1) Hoy 07:33 el sindicato mayoritario comunicó huelga indefinida desde el martes de la próxima semana, con acta de asamblea. 2) Legal revisa mañana los requisitos. 3) Riesgo operativo: horno y convertidores requieren personal mínimo; lo coordinamos con Operaciones. 4) Riesgo legal: cualquier reemplazo de huelguistas es infracción muy grave. 5) Propusimos retomar el trato directo el jueves.',
          out: 'El gerente lo reenvía a Lima con una línea: «Estamos en esto». Son las 19:12. La movilidad del último turno ya salió; te toca taxi por la costanera.', kusi: ['feliz', 'Cinco líneas que permiten decidir.'] } },
      { id: 'b', label: 'Un resumen tranquilizador: «Conflicto bajo control, la huelga probablemente no se concrete».',
        res: { q: 'riesgosa', fx: { confianza: -2, calidad: -3 }, responde: 'Ingeniero: el conflicto está bajo control. Es probable que la huelga no se concrete. Seguimos trabajando.',
          out: 'Lima respira. Si la huelga empieza el martes, la primera pregunta del directorio será por qué dijiste que no pasaría.', kusi: ['preocupado', 'Prometiste algo que no controlas…'] } },
    ],
    mirada: { ve: 'Al directorio no se le tranquiliza: se le informa. Una buena nota de crisis dice qué pasó, qué riesgos hay y qué se está haciendo, sin promesas que no dependen de ti.' },
  },
];
