// Analista de Comunicación Interna y Employer Branding · Capítulo 4 · «La campaña» · Semana 1, jueves.
// Hilo de las dos semanas: lo que dices afuera debe ser verdad adentro. Hoy Marketing quiere modelos y un lema que todavía no es cierto.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 26772, art. 2, modificado por la Ley 30709 (Segunda Disposición Complementaria Modificatoria): es discriminación el trato
//   diferenciado en los requerimientos de personal por motivos como sexo, edad, origen social o estado civil. Archivo: LEY-30709.txt
// - Ley 29571 (Código de Protección y Defensa del Consumidor), art. 13: la protección frente a la publicidad engañosa o falsa.
//   Archivo: 1244218-ley-29571_spij.txt
// - Constitución, art. 2 inc. 7 (voz e imagen propias); Ley 29733, art. 5 (consentimiento).
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf

export const CAP = {
  n: 4, titulo: 'La campaña', dia: 'Semana 1, jueves', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Banco Andino · Sede central de San Isidro, pisos 9 y 11',
  inicio: '08:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Jueves. Marco ya tiene un moodboard: gente sonriente con dientes perfectos, una oficina con plantas que no existe en ninguna agencia y el lema «Aquí sales a tu hora». A las 10 es el brief.', boton: 'Subir al piso 11',
  kusi: 'Contar sin exagerar es lo más difícil de la publicidad. ¡Tú puedes!',
  lead: 'Armaste un brief que promete solo lo verdadero, discutiste con Marco sin pelearte, limpiaste un aviso lleno de promesas y de un requisito discriminatorio, e invitaste a colaboradores reales a contar su historia, si quieren.',
  reflexion: '¿Qué promesa de una empresa te convenció alguna vez… y cuál descubriste que era humo?',
  siguiente: { n: 5, titulo: 'El comunicado', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'campana', p: 'Campaña de marca empleadora', j: 'Marco · Marketing', d: 3, e: 'Brief hoy a las 10' },
  { id: 'diagnostico', p: 'Diagnóstico de reputación', j: 'Fiorella', d: 3, e: 'Mañana' },
  { id: 'cuadre', p: 'Sobretiempo en agencias', j: 'Renzo · Relaciones Laborales', d: 3, e: 'En revisión con Operaciones' },
  { id: 'voluntarios', p: 'Colaboradores para la campaña', j: 'Tú · Kiara', d: 3, e: 'Sin convocar' },
];

export const FUTURO = {
  campana_real: ['La campaña tendrá colaboradores reales, que participan porque quieren.', 'Serán la base del programa de embajadores. Capítulo 7.'],
  campana_modelos: ['La campaña usará modelos.', 'Alguien de agencia lo notará apenas salga.'],
  aviso_limpio: ['El aviso ya no promete lo que no es verdad ni pide edad.', 'Lo usarás en la feria. Capítulo 8.'],
  aviso_sucio: ['El aviso salió con promesas que no se cumplen.', 'Las reseñas lo van a citar. Capítulo 9.'],
  voluntarios_libres: ['Convocaste voluntarios sin presión de sus jefes.', 'Los que dijeron sí lo dijeron de verdad.'],
  voluntarios_presion: ['Los supervisores eligieron quién sale en la campaña.', 'Alguien dirá que lo obligaron.'],
  jhoselyn_invitada: ['Invitaste a Jhoselyn a contar su historia, con libertad para decir que no.', 'Te responderá la próxima semana.'],
};

export const CHATS = {
  equipo: { n: 'Experiencia del Colaborador', sub: 'Fiorella, Kiara y tú', c: '#B7791F' },
  fiorella: { n: 'Fiorella Chávez', sub: 'Jefa de Experiencia del Colaborador', who: 'fiorella' },
  marco: { n: 'Marco Delgado', sub: 'Gerente de Marketing', who: 'gerente' },
  jhoselyn: { n: 'Jhoselyn Ccori', sub: 'Cajera · agencia Comas', who: 'cajera' },
  renzo: { n: 'Renzo Salas', sub: 'Relaciones Laborales', c: '#4A5568' },
};

export const WSP = [
  { chat: 'renzo', t: '08:40', de: 'Renzo', txt: 'Buen mapa el del cuadre. Operaciones dice que la vacante de Comas «está en proceso» hace tres meses 🙄 Lo escalo hoy.', si: 'sobretiempo_derivado' },
  { chat: 'marco', t: '09:05', de: 'Marco', txt: 'Ya tengo la agencia de modelos lista para el sábado. Solo falta tu ok 😎' },
  { chat: 'marco', t: '09:06', de: 'Marco', txt: 'Ah, y no me vengas con lo de las reseñas otra vez, ¿ya? 😅', si: 'resenas_sin_incentivo' },
  { chat: 'equipo', t: '12:30', de: 'Kiara', txt: 'Tengo el formato de autorización de imagen listo. Una hoja, letra grande, sin letra chiquita 😉' },
  { chat: 'jhoselyn', t: '17:50', de: 'Jhoselyn', txt: 'Lo voy a pensar, señorita. Déjeme conversarlo con mi mamá.', si: 'jhoselyn_invitada' },
];

export const CORREOS = [
  { t: '08:35', de: 'Fiorella Chávez', para: 'Analista de Comunicación Interna y Employer Branding', asunto: 'Para el brief', html: '<p>Marco viene con todo. Él tiene presupuesto y el apoyo de Gerencia Comercial. Nosotras tenemos la verdad y tus datos. No pelees: negocia. Y si hay que decir que no a algo, di qué propones en su lugar.</p><p>Fiorella</p>' },
  { t: '16:00', de: 'Renzo Salas · Relaciones Laborales', para: 'Fiorella Chávez; Analista de Comunicación Interna y Employer Branding', asunto: 'Agencias: horarios', html: '<p>Operaciones aprobó reponer la ventanilla de Comas y revisar el registro del tiempo de cuadre en las 31 agencias. No hay fecha todavía. Mientras tanto, les pido no comunicar nada sobre horarios.</p>', si: 'sobretiempo_derivado' },
];

export const QUIZ = [
  { q: 'Un aviso de empleo que pide «hasta 30 años» y «buena presencia»…', ops: ['Es normal en bancos', 'Puede ser discriminatorio: la ley prohíbe el trato diferenciado por edad en los requerimientos de personal', 'Es legal si el puesto es de cara al público', 'Solo es un problema si alguien reclama'], ok: 1, por: 'El art. 2 de la Ley 26772, modificado por la Ley 30709, considera discriminación el trato diferenciado por edad, entre otros motivos, en los requerimientos de personal.' },
  { q: 'Marketing quiere el lema «Aquí sales a tu hora» y tu diagnóstico dice que en 31 agencias no es así. ¿Qué haces?', ops: ['Usarlo: es aspiracional', 'Proponer otro mensaje verdadero hoy y guardar ese para cuando sea cierto', 'Usarlo solo en redes', 'Dejar que Marketing decida'], ok: 1, por: 'Una promesa falsa en la marca empleadora se desmiente en la primera reseña.' },
  { q: 'Para que un colaborador salga en la campaña, hace falta…', ops: ['Que su jefe lo elija', 'Su consentimiento libre e informado, por escrito', 'Que firme su contrato', 'Nada: trabaja en el banco'], ok: 1, por: 'Su imagen es suya (Constitución, art. 2 inc. 7) y su uso requiere consentimiento (Ley 29733, art. 5).' },
  { q: 'Si el mismo aviso con promesas falsas se usa también para atraer clientes, además se arriesga…', ops: ['Nada', 'A infringir las normas de protección al consumidor frente a la publicidad engañosa (Ley 29571)', 'Solo a perder likes', 'Una multa de tránsito'], ok: 1, por: 'La Ley 29571 protege a los consumidores de la publicidad engañosa o falsa (art. 13).' },
  { q: 'Al decirle que no a Marco, lo más útil es…', ops: ['Decir solo que no', 'Decir que no y proponer qué hacer en su lugar', 'Escalar a Gerencia General', 'Aceptar para no pelear'], ok: 1, por: 'Un «no» sin alternativa bloquea; un «no» con propuesta negocia.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '09:00', ch: 'documento', who: null, titulo: 'El brief en una hoja', banner: 'assets/esc/idea.webp', show: ['calidad', 'etica'],
    body: (n, F) => `<p>Tienes una hora antes de la reunión. Fiorella te pidió llegar con un brief propio, en una hoja. ${F.has('sobretiempo_derivado') ? 'Renzo te pidió no hablar de horarios hasta que haya una fecha.' : 'El lema de Marco te da vueltas en la cabeza.'}</p><p><mark class="clave">Arma el brief por piezas</mark>: mensaje, protagonistas y pruebas.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del brief.', boton: 'Imprimir el brief',
    bloques: [
      { id: 'msg', t: 'Mensaje central', n: 2, ops: [
        { id: 'm1', t: '«Tu primer trabajo con planilla, en un banco que te forma»: lo que hoy es verdad para miles.', ok: true, por: 'Jhoselyn lo dijo con sus palabras.' },
        { id: 'm2', t: '«Queremos ser un gran lugar para trabajar, y estamos cambiando»: honesto y con compromiso.', ok: true },
        { id: 'm3', t: '«Aquí sales a tu hora».', ok: false, por: 'Hoy no es verdad en 31 agencias. La primera reseña lo desmiente.' },
      ] },
      { id: 'prot', t: 'Protagonistas', n: 2, ops: [
        { id: 'p1', t: 'Colaboradores reales de agencias y sede, que participan porque quieren.', ok: true, por: 'Se reconocen y los reconocen.' },
        { id: 'p2', t: 'Diversidad real: edades, orígenes, la asesora que atiende en quechua en Huancayo.', ok: true },
        { id: 'p3', t: 'Modelos de agencia, «porque se ven mejor en cámara».', ok: false, por: 'Nadie en una agencia se reconoce en ellos.' },
      ] },
      { id: 'prueba', t: 'Pruebas', n: 2, ops: [
        { id: 'r1', t: 'Datos verificables: cuántas personas se formaron, cuántos ascensos internos hubo este año.', ok: true },
        { id: 'r2', t: 'Testimonios con nombre, autorizados y leídos por cada persona antes de publicarse.', ok: true },
        { id: 'r3', t: 'Las reseñas de cinco estrellas de esta semana como prueba de satisfacción.', ok: false, por: 'Si fueron pedidas o premiadas, no prueban nada.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: q === 'riesgosa' ? -3 : 3 },
        cartera: { campana: q === 'riesgosa' ? 'Brief con promesas sin sustento' : 'Brief propio: verdad, gente real, pruebas' },
        out: q === 'buena' ? 'Tu brief cabe en una hoja y cada línea se puede comprobar. Fiorella lo lee en el ascensor y solo cambia una coma.' : 'El brief tiene buenas ideas, pero alguna pieza no aguanta una pregunta difícil.',
        pro: { ok: 'Cada promesa del brief tiene una prueba detrás.', risk: 'Una sola promesa falsa contamina todo lo demás.', info: 'Pide a Analítica el número de ascensos internos: es tu mejor dato.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una hoja que se puede defender!' : 'Esa pieza no aguanta una pregunta.'],
      };
    },
    rules: [[BP, 'Una marca empleadora promete lo que hoy es verdad y nombra lo que está cambiando.']],
    mirada: {
      ve: 'La propuesta de valor al empleado no se inventa en una sala de creativos: se descubre en lo que la gente valora de verdad. Jhoselyn te la dio ayer, en el refrigerio: primer empleo formal, seguro, clientes que la quieren. Eso es verdad hoy. El horario, todavía no.',
      visual: { tipo: 'cambio', titulo: 'Del moodboard al brief', pares: [['«Aquí sales a tu hora»', '«Tu primer trabajo con planilla»'], ['Modelos sonrientes', 'Cajeras, asesores y analistas reales'], ['Reseñas de cinco estrellas', 'Ascensos internos con números']] },
    },
  },
  {
    id: 'c2', t: '10:00', ch: 'presencial', who: 'gerente', titulo: 'Modelos o gente real', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala de reuniones de Marketing, piso 11', show: ['etica', 'confianza', 'calidad'],
    body: () => `<p>Marco proyecta su moodboard. Tiene argumentos: «Con modelos, en un día tengo todo. Con colaboradores, tengo nervios, permisos, gente que se arrepiente y fotos con ojeras. <mark class="clave">Esto es publicidad, no un documental</mark>».</p><p>Fiorella te mira: te toca.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer gente real, voluntaria y con permiso, y darle a Marco lo que le preocupa: un fotógrafo profesional, maquillaje sencillo y dos jornadas en lugar de una.',
        res: { q: 'buena', fx: { etica: 4, calidad: 3, confianza: 2 }, rel: { gerente: 1, fiorella: 1 }, flags: ['campana_real'], cartera: { campana: 'Campaña con colaboradores reales, dos jornadas' },
          out: 'Marco hace cuentas en voz alta. «Dos jornadas… vale. Pero si el sábado no tengo diez voluntarios, vamos con modelos.» Le das la mano.',
          pro: { ok: 'Resuelves su miedo real (calidad y tiempo) sin ceder en lo que importa.', risk: 'Ahora dependes de que la gente quiera participar.', info: 'Diez voluntarios en dos días: empieza a llamar hoy.' },
          kusi: ['celebra', '¡Negociaste, no peleaste!'] } },
      { id: 'b', label: 'Aceptar modelos, pero con una nota pequeña en cada pieza: «Personajes interpretados por actores».',
        res: { q: 'aceptable', fx: { etica: 0, tiempo: 2 }, rel: { gerente: 1 }, flags: ['campana_modelos'], cartera: { campana: 'Campaña con modelos y nota de actores' },
          out: 'Marco sonríe. La nota queda en letra de seis puntos, abajo a la derecha. En la sede casi nadie la verá; en Comas, sí.',
          pro: { ok: 'No engañas del todo.', risk: 'Una marca empleadora con actores le dice a tu propia gente que no es suficientemente buena para salir en la foto.' },
          kusi: ['pensando', '¿Y quién se reconoce en un actor?'] } },
      { id: 'c', label: 'Aceptar modelos presentados como colaboradores: a nadie le importa, y Marco tiene el presupuesto.',
        res: { q: 'riesgosa', fx: { etica: -5, confianza: -2 }, rel: { gerente: 1, fiorella: -1 }, flags: ['campana_modelos'],
          out: 'Fiorella no dice nada en la reunión. Al salir, en el ascensor: «Si alguien descubre que la "cajera" de la foto es modelo, la campaña muere y nosotras con ella».',
          pro: { ok: 'Sale rápido y bonito.', risk: 'Presentar actores como empleados es mentir en la cara de 2,000 personas que saben quién trabaja ahí.' },
          kusi: ['indignado', '¡La gente de agencia sabe quién es quién!'] } },
    ],
    rules: [[BP, 'Si dices que no, di qué propones en su lugar.']],
    mirada: {
      ve: 'Marco tiene razón en algo: hacer una campaña con colaboradores es más lento y más incierto. Tú tienes razón en otra: una marca empleadora que no muestra a su gente se desmiente sola. La salida no es ganarle a Marco, sino resolver su miedo.',
      visual: { tipo: 'matriz', x: 'Control de Marketing', y: 'Credibilidad interna', cuadrantes: ['Real y con calidad', 'Real pero improvisado', 'Actores con nota', 'Actores disfrazados'], items: [['Gente real + fotógrafo', .7, .85], ['Modelos con nota', .85, .35], ['Modelos como empleados', .9, .05]] },
    },
  },
  {
    id: 'c3', t: '11:40', ch: 'documento', who: null, titulo: 'El aviso de convocatoria', banner: 'assets/foto/revisa.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>La campaña cierra con un aviso para atraer cajeros y asesores. Lo escribió un practicante de Marketing con ganas, pero sin mirar el diagnóstico.</p><p>Lo revisas con tu lapicero rojo. <mark class="clave">Hay promesas y requisitos que no pasan</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que son un riesgo legal o una mala práctica.',
    doc: { t: 'Únete al Banco Andino', sub: 'Aviso para LinkedIn, Instagram y portales de empleo' },
    lines: [
      { id: 'edad', t: '«Buscamos jóvenes de 18 a 30 años, de buena presencia».', bad: LEY, why: 'Trato diferenciado por edad en un requerimiento de personal: es discriminación (Ley 26772, art. 2, modificado por la Ley 30709). «Buena presencia» abre la puerta a más discriminación.' },
      { id: 'hora', t: '«Sal a tu hora todos los días».', bad: BP, why: 'Hoy no es verdad en 31 agencias. Es la promesa que más rápido se va a desmentir.' },
      { id: 'mejor', t: '«El mejor banco para trabajar del Perú».', bad: BP, why: 'No hay ningún ranking ni dato que lo respalde. Si el aviso se usa también con clientes, es publicidad sin sustento.' },
      { id: 'planilla', t: '«Contrato en planilla desde el primer día, con seguro y beneficios de ley».' },
      { id: 'forma', t: '«Programa de formación de seis semanas para cajeros nuevos».' },
      { id: 'soltera', t: '«Preferentemente solteras y sin hijos, por disponibilidad de horario».', bad: LEY, why: 'Trato diferenciado por estado civil y, de hecho, por sexo: es discriminación en los requerimientos de personal (Ley 26772, art. 2).' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Se te pasa una línea discriminatoria. El aviso llega a Legal y vuelve con un correo en mayúsculas.' : `Marcas ${hitsLey} requisitos discriminatorios y dos promesas sin sustento. El aviso queda más corto y más cierto: planilla desde el día uno, seguro y formación de seis semanas.`,
      flags: missLey ? ['aviso_sucio'] : ['aviso_limpio'],
      fx: { cumplimiento: missLey ? -4 : 5, etica: missLey ? -2 : 3 },
      cartera: { campana: missLey ? 'Aviso con requisitos discriminatorios' : 'Aviso limpio: solo lo verdadero' },
      pro: { ok: 'Lo que queda en el aviso es verdad y se puede cumplir.', risk: 'Un requisito discriminatorio en un aviso público es una prueba escrita.' },
      kusi: missLey ? ['preocupado', '¿«Solteras y sin hijos»? Eso no puede salir.'] : ['indignado', '¡«Solteras y sin hijos»! Menos mal que lo viste.'],
    }),
    rules: [[LEY, 'Es discriminación el trato diferenciado en los requerimientos de personal por motivos como edad, sexo o estado civil (Ley 26772, art. 2, modificado por la Ley 30709).'], [LEY, 'La Ley 29571 protege a los consumidores de la publicidad engañosa o falsa (art. 13).']],
    mirada: {
      ve: 'Un aviso de empleo es la primera promesa de la marca empleadora. Lo que pide dice a quién quieres y a quién no; lo que promete, qué vas a tener que cumplir. Las dos cosas quedan por escrito, y en internet.',
      visual: { tipo: 'cambio', titulo: 'El aviso, antes y después', pares: [['«18 a 30 años, buena presencia»', 'Sin límite de edad ni de apariencia'], ['«Sal a tu hora todos los días»', 'Planilla y seguro desde el día uno'], ['«Solteras y sin hijos»', 'Formación de seis semanas']] },
      normas: [{ ley: 'Ley 26772, art. 2 (modificado por la Ley 30709)', dice: 'Se entiende por discriminación la anulación o alteración de la igualdad de oportunidades o de trato en los requerimientos de personal, basada en motivos como raza, sexo, religión, opinión, origen social, condición económica, estado civil o edad.', practica: '«De 18 a 30 años» y «solteras y sin hijos» son dos ejemplos de manual.' }],
    },
  },
  {
    id: 'c4', t: '14:00', ch: 'llamada', who: null, titulo: 'Buscando voluntarios', banner: 'assets/foto/llamada.webp', show: ['personas', 'etica', 'tiempo'],
    body: (n, F) => `<p>${F.has('campana_real') ? 'Necesitas diez voluntarios para el sábado o Marco vuelve a sus modelos.' : 'Aunque la campaña irá con modelos, Fiorella quiere probar con algunos testimonios reales para el boletín.'} Llamas a personas que te recomendaron las supervisoras.</p><p>Les explicas que es <mark class="clave">voluntario</mark> y que pueden decir que no.</p>`,
    type: 'calls',
    calls: [['Wilson Quispe · Asesor, agencia Ate', 'Contesta', 'Ya, sí participo. Pero mi supervisora ya me dijo que «tengo» que ir… ¿es obligatorio o no?'], ['Rosa Mamani · Asesora, agencia Huancayo', 'Contesta', 'Con gusto, señorita. Pero ¿el sábado me lo pagan? Porque tendría que viajar a Lima.'], ['Carlos Tello · Analista, sede', 'Contesta', 'No, gracias. No me gusta salir en fotos. ¿Eso me afecta en algo?'], ['Agencia Comas', 'Don Abel contesta', 'La Ccori no va a querer, seguro. Pero pregúntele usted, no yo.']],
    prompt: 'Wilson recibió presión, Rosa pregunta por el pago y Carlos dijo que no. ¿Cómo sigues?',
    choices: [
      { id: 'a', label: 'Pedir a las supervisoras que no elijan a nadie, decirle a Carlos que no le afecta en nada y confirmar a Rosa que el viaje y la jornada del sábado los cubre el banco.',
        res: { q: 'buena', fx: { etica: 4, personas: 4, tiempo: -2 }, flags: ['voluntarios_libres'], cartera: { voluntarios: 'Voluntarios libres; viaje y jornada cubiertos' },
          out: 'Wilson respira: «Entonces sí voy, pero porque quiero». Al final del día tienes ocho voluntarios de verdad. Marco gruñe por los dos que faltan, pero acepta.',
          pro: { ok: 'Voluntario de verdad: nadie elegido, nadie penalizado y el tiempo extra reconocido.', info: 'Deja por escrito que decir que no no tiene ninguna consecuencia.' },
          kusi: ['feliz', 'Ocho que dijeron sí porque quisieron. ¡Vale oro!'] } },
      { id: 'b', label: 'Dejar que las supervisoras completen la lista: conocen a su gente y así llegas a diez rápido.',
        res: { q: 'riesgosa', fx: { tiempo: 3, etica: -4, personas: -3 }, flags: ['voluntarios_presion'], cartera: { voluntarios: 'Lista armada por supervisoras' },
          out: 'Llegas a doce. Tres de ellos se enteran por su supervisora de que «fueron elegidos» para el sábado.',
          pro: { ok: 'Completas la lista.', risk: 'Un testimonio que se da por orden del jefe no es un testimonio.' },
          kusi: ['preocupado', '«Elegido» no es «voluntario».'] } },
      { id: 'c', label: 'Seguir llamando tú, pero sin tocar el tema del pago del sábado: eso lo ve Marketing.',
        res: { q: 'aceptable', fx: { personas: 1, tiempo: -1 }, cartera: { voluntarios: 'Voluntarios sin claridad sobre el sábado' },
          out: 'Consigues seis voluntarios. Rosa, de Huancayo, se baja: nadie le respondió si el viaje se pagaba.',
          pro: { ok: 'Respetas la voluntad de cada persona.', risk: 'Dejar sin respuesta lo práctico (tiempo, viaje, pago) también desanima.' },
          kusi: ['pensando', 'Rosa preguntó algo justo.'] } },
    ],
    rules: [[LEY, 'Usar la imagen de una persona requiere su consentimiento libre (Constitución, art. 2 inc. 7; Ley 29733, art. 5).'], [BP, 'Voluntario significa que decir que no no tiene consecuencias. Y que el tiempo extra se reconoce.']],
    mirada: {
      ve: 'En una empresa jerárquica, cuando el jefe «invita», muchos entienden que es una orden. Por eso la voluntariedad se cuida con hechos: nadie elige por otro, quien dice no queda tranquilo y lo práctico se resuelve.',
      visual: { tipo: 'embudo', titulo: 'Tus llamadas de hoy', niveles: [['Llamadas', 14], ['Interesados', 11], ['Voluntarios de verdad', 8]] },
    },
  },
  {
    id: 'c5', t: '16:30', ch: 'whatsapp', who: 'cajera', titulo: 'La invitación a Jhoselyn', banner: 'assets/foto2/collage.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Don Abel tenía razón: la Ccori no va a querer… si se lo pide la sede. ${F.has('jhoselyn_confia') ? 'Pero ayer te contó su historia sin miedo.' : 'Y ayer no terminaron muy bien.'}</p><p>Su historia es la que mejor cuenta la verdad del banco. <mark class="clave">Le escribes tú, sin presión</mark>.</p>`,
    type: 'compose', enviaA: 'jhoselyn', para: 'Para: Jhoselyn Ccori · Cajera, agencia Comas', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu invitación eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué le propones', ops: [
        { id: 'q1', t: 'Jhoselyn, estamos armando una campaña con gente real del banco. Me encantaría contar tu historia: primer trabajo con planilla, tus clientes, tu hijo.', ok: true, por: 'Concreto y con lo que ella valoró.' },
        { id: 'q2', t: 'Jhoselyn, ¿te animas a salir en una foto para la campaña? Tienes linda sonrisa 😊', ok: false, por: 'Reduce su historia a su apariencia.' },
      ] },
      { id: 'verdad', t: 'Lo que no vas a decir', ops: [
        { id: 'v1', t: 'No vamos a decir que todo es perfecto: lo del horario no lo vamos a tapar.', ok: true, por: 'Le confirmas que no la usarás para mentir.' },
        { id: 'v2', t: 'Solo vamos a mostrar lo bonito, tranquila.', ok: false, por: 'Ella sabe que lo bonito no es toda la historia.' },
      ] },
      { id: 'libre', t: 'Su libertad', ops: [
        { id: 'l1', t: 'Puedes decir que no y no pasa nada. Si dices que sí, lees todo antes de que salga y puedes retirarte cuando quieras.', ok: true, por: 'Consentimiento libre e informado, y revocable.' },
        { id: 'l2', t: 'Ya le avisé a don Abel para que te dé permiso el sábado.', ok: false, por: 'Ahora parece una orden de su jefe.' },
      ] },
    ],
    res: sel => {
      const mal = ['q2', 'v2', 'l2'].some(x => Object.values(sel).includes(x)), buenas = ['q1', 'v1', 'l1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.libre === 'l2' ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : mal ? -2 : 1, etica: q === 'riesgosa' ? -3 : 2 }, rel: { cajera: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? [] : ['jhoselyn_invitada'],
        out: q === 'buena' ? 'Dos horas después: «Lo voy a pensar, señorita. Déjeme conversarlo con mi mamá». No es un sí. Tampoco es un no.' : q === 'riesgosa' ? 'Don Abel te llama: «¿Por qué me mete en esto? Ella va a pensar que yo la mandé».' : 'Jhoselyn responde con un «ya, veo». Algo de tu mensaje no terminó de convencerla.',
        pro: { ok: 'Le pides su historia, no su cara, y le das el control.', risk: 'Si el jefe se entera antes que ella, ya no es una invitación.' },
        kusi: [q === 'buena' ? 'animo' : 'pensando', q === 'buena' ? 'Un «lo voy a pensar» honesto vale mucho.' : 'Ese mensaje no la dejó libre del todo.'],
      };
    },
    rules: [[LEY, 'El consentimiento para usar datos personales, como la imagen y la historia de alguien, debe ser libre e informado (Ley 29733, art. 5).']],
    mirada: {
      ve: 'Una historia como la de Jhoselyn convence porque es verdadera, con lo bueno y lo que pesa. Pedírsela es un acto de confianza: ella tiene que saber que no la vas a usar para tapar lo que le pasa.',
      visual: { tipo: 'mensaje', titulo: 'Tu invitación', txt: 'Me encantaría contar tu historia. No vamos a decir que todo es perfecto. Puedes decir que no y no pasa nada; si dices que sí, lees todo antes y puedes retirarte cuando quieras.' },
    },
  },
  {
    id: 'c6', t: '18:10', ch: 'correo', who: null, titulo: 'El acuerdo por escrito', banner: 'assets/esc/escritorio.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Marco Delgado', to: 'Analista de Comunicación Interna y Employer Branding', asunto: 'Campaña · ¿cerramos?' },
    body: (n, F) => `<p>${F.has('campana_real') ? 'Ok con lo de gente real. Pero sin «Aquí sales a tu hora» la campaña no tiene gancho. ¿Qué me das a cambio?' : 'Listo con los modelos. Ahora el lema: ¿«Aquí sales a tu hora» o qué?'}</p><p>Marco</p><p>Es tarde y el piso 11 ya apagó las luces. <mark class="clave">Lo que respondas queda por escrito</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Darle un gancho verdadero hoy y uno para el futuro: «Tu primer gran trabajo» ahora, y «Aquí sales a tu hora» el día que Operaciones lo cumpla, con datos.',
        res: { q: 'buena', fx: { confianza: 3, etica: 3, calidad: 2 }, rel: { gerente: 1 },
          responde: 'Marco: te propongo «Tu primer gran trabajo» como lema de esta campaña. Es verdad para miles de cajeros y asesores, y tenemos cómo probarlo. «Aquí sales a tu hora» lo guardamos para el día que Operaciones lo cumpla: Relaciones Laborales ya está en eso. Ese día será tu mejor campaña, porque nadie la va a poder desmentir.',
          out: 'Marco contesta a las 10 de la noche: «Me compraste con lo de "mi mejor campaña". Vamos».',
          kusi: ['celebra', '¡Hoy lo verdadero y mañana lo que se gane!'] } },
      { id: 'b', label: 'Aceptar «Aquí sales a tu hora» con un asterisco: «*En la mayoría de nuestras sedes».',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -1 }, rel: { gerente: 1 },
          responde: 'Marco: ok con el lema, pero con asterisco: «*En la mayoría de nuestras sedes».',
          out: 'El asterisco no salva nada: «la mayoría» es exactamente lo contrario de lo que dicen tus datos de agencias.',
          kusi: ['indignado', '¡Un asterisco no vuelve verdad una mentira!'] } },
    ],
    rules: [[BP, 'Una promesa solo se publica cuando se puede probar.']],
    mirada: {
      ve: 'A veces el mejor argumento con un gerente de Marketing no es ético sino de su propio oficio: una campaña que se puede desmentir es una mala campaña. Guardar la promesa del horario para cuando sea verdad la convierte, además, en una meta compartida.',
      visual: { tipo: 'linea', titulo: 'Las dos campañas', hitos: [['Hoy', '«Tu primer gran trabajo»'], ['Cuando Operaciones lo cumpla', 'Medir salidas reales'], ['Con datos', '«Aquí sales a tu hora»']] },
    },
  },
];
