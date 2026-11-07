// Analista de Clima y Cultura · Capítulo 4 · «El focus group» · Semana 1, jueves.
// Hilo de las dos semanas: la encuesta de clima de AseguraPlus y el área de Siniestros, que saca 42 % de favorabilidad.
// Normas citadas:
// - Ley 29733, Ley de Protección de Datos Personales: art. 5 (principio de consentimiento) y arts. 6 y 7 (finalidad y
//   proporcionalidad), ya citada en el capítulo 1. La voz grabada de una persona es un dato personal.
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23
//   https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf

export const CAP = {
  n: 4, titulo: 'El focus group', dia: 'Semana 1, jueves', foto: 'assets/foto2/mesa-mujeres.webp',
  lugar: 'AseguraPlus · Sala de capacitación, piso 7',
  inicio: '08:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Jueves. Pediste la sala de capacitación del piso 7 porque no tiene paredes de vidrio. Renzo compró galletas de soda y un termo de agua caliente. A las diez llegan siete personas de Siniestros… o eso esperas.', boton: 'Preparar la sala',
  kusi: 'Hoy no vas a hablar casi nada. Escuchar en grupo es más difícil de lo que parece.',
  lead: 'Armaste una guía que invita a hablar, sacaste con tacto a un supervisor que llegó sin invitación, escuchaste al grupo cuando por fin habló y cuidaste que tus notas no delataran a nadie.',
  reflexion: '¿Qué cambia en una sala cuando entra alguien con poder?',
  siguiente: { n: 5, titulo: 'Lo que nadie dijo', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'focus', p: 'Focus group de Siniestros', j: 'Cultura', d: 0, e: 'Hoy, 10 a. m.' },
  { id: 'informe', p: 'Informe de resultados de clima', j: 'Sofía · Cultura', d: 0, e: 'Presentado a Gonzalo' },
  { id: 'supervisores', p: 'Conversación con supervisores', j: 'Cultura', d: 0, e: 'Por agendar' },
  { id: 'alerta', p: 'Comentario sobre posible hostigamiento', j: 'Sofía · Cultura', d: 0, e: 'En otro carril' },
];

export const FUTURO = {
  guia_abierta: ['Tu guía del focus group usa preguntas abiertas y reglas claras de confidencialidad.', 'La podrás reutilizar con los supervisores.'],
  hernan_sale: ['Hernán salió de la sala con amabilidad y con una fecha para su propia conversación.', 'Está incómodo, pero no humillado.'],
  hernan_se_queda: ['Hernán se quedó los primeros veinte minutos del focus group.', 'Lo que se dijo antes de que saliera vale poco.'],
  notas_limpias: ['Tus notas del focus group no tienen nombres ni quién dijo qué.', 'El resumen podrá circular sin miedo.'],
  notas_sucias: ['Tus notas tienen nombres, gestos y un audio sin permiso.', 'Si se filtran, el grupo no vuelve a hablar.'],
  hernan_respondido: ['A Hernán le explicaste que no se le contará quién dijo qué, pero sí los temas.', 'Te escuchó, aunque no le gustó.'],
  lucia_cita: ['Quedaste con Lucía mañana, en un lugar privado, y le explicaste antes los límites de la confidencialidad.', 'Te va a contar algo grave.'],
  lucia_cita_sin_limites: ['Quedaste con Lucía mañana y le prometiste que nada de lo que diga saldrá de ahí.', 'Mañana esa promesa te va a pesar.'],
};

export const CHATS = {
  equipo: { n: 'Cultura AseguraPlus', sub: 'Sofía, Renzo y tú', c: '#2F6B3F' },
  sofia: { n: 'Sofía Ledesma', sub: 'Jefa de Cultura', who: 'sofia' },
  gonzalo: { n: 'Gonzalo Ferreyra', sub: 'Gerente de Siniestros', who: 'gerente' },
  lucia: { n: 'Lucía Ramos', sub: 'Analista de Siniestros', who: 'colaboradora' },
  hernan: { n: 'Hernán Díaz', sub: 'Supervisor de Siniestros', who: 'supervisor' },
  renzo: { n: 'Renzo Quispe', sub: 'Practicante de Psicología', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'equipo', t: '08:35', de: 'Sofía', txt: 'Hoy tú conduces y Renzo toma notas. Yo no entro: soy muy conocida en el piso 6.' },
  { chat: 'renzo', t: '09:20', de: 'Renzo', txt: 'Ya están las galletas, el agua y los post-its. ¿Grabo con mi celular para no perder nada?' },
  { chat: 'lucia', t: '09:40', de: 'Lucía', txt: 'Ya voy subiendo. Si veo a Hernán en la puerta, me regreso. En serio.', si: 'grupo_voluntario' },
  { chat: 'gonzalo', t: '12:10', de: 'Gonzalo', txt: 'Hernán me dice que lo sacaron de la sala. Espero que haya una buena razón.', si: 'hernan_sale' },
  { chat: 'renzo', t: '13:00', de: 'Renzo', txt: 'Borré el audio. Tienes razón, no les pregunté 😓', si: 'notas_limpias' },
  { chat: 'sofia', t: '17:40', de: 'Sofía', txt: 'Me contó Renzo cómo manejaste lo de Hernán en la puerta. Bien. Mañana temprano vemos el resumen.', si: 'hernan_sale' },
];

export const CORREOS = [
  { t: '08:45', de: 'Hernán Díaz', para: 'Sofía Ledesma', asunto: 'Focus group de mi equipo', html: '<p>Sofía, me enteré de que hoy hacen un focus group con mi equipo y que no estoy invitado. Quiero dejar constancia de que tengo toda la disposición de escuchar. Me parece extraño que se hable de mi gente sin mí.</p><p>Hernán</p>' },
  { t: '12:30', de: 'Sofía Ledesma', para: 'Analista de Clima y Cultura', asunto: 'RE: Focus group de mi equipo', html: '<p>Te reenvío lo de Hernán. Ya le respondí que tendrá su propia conversación el lunes. Tú encárgate del resumen del grupo. Sin nombres, sin quién dijo qué.</p>' },
];

export const QUIZ = [
  { q: '¿Qué pregunta abre mejor un focus group de clima?', ops: ['¿Por qué su supervisor los trata mal?', '¿Qué es lo mejor y lo más difícil de trabajar en Siniestros?', '¿Están de acuerdo con el 42 %?', '¿Quién escribió los comentarios?'], ok: 1, por: 'Una pregunta abierta y equilibrada invita a hablar sin acusar a nadie.' },
  { q: 'Un supervisor llega a la sala «solo a saludar». Lo mejor es…', ops: ['Dejarlo quedarse', 'Agradecerle, explicarle por qué el grupo es sin jefaturas y darle su propio espacio', 'Pedirle que se vaya delante de todos', 'Cancelar el focus group'], ok: 1, por: 'Lo sacas con respeto y sin exponerlo, y le das un lugar en el proceso.' },
  { q: '¿Se puede grabar el audio de un focus group?', ops: ['Sí, siempre', 'Solo con el consentimiento informado de todos y para la finalidad explicada', 'Sí, si el celular es personal', 'Nunca'], ok: 1, por: 'La voz es un dato personal; se necesita consentimiento y una finalidad clara (Ley 29733).' },
  { q: 'En las notas del focus group se escribe…', ops: ['Quién dijo cada cosa', 'Los temas y frases sin nombres', 'Quién lloró', 'El nombre del supervisor que más mencionaron'], ok: 1, por: 'Las notas sirven para el análisis, no para identificar a nadie.' },
  { q: 'Alguien del grupo menciona a un jefe por su nombre. Tú…', ops: ['Anotas el nombre', 'Le pides que describa la situación sin nombres, y recuerdas la regla al grupo', 'Cortas la sesión', 'Le preguntas qué más hizo esa persona'], ok: 1, por: 'Se escucha la situación, se protege a todos y se mantiene el foco en las conductas.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:45', ch: 'documento', who: null, titulo: 'La guía', banner: 'assets/foto/taller.webp', lugar: 'Sala de capacitación, piso 7', show: ['calidad', 'personas'],
    body: (n, F) => `<p>Pegas post-its de colores en la pared y repasas la guía. ${F.has('gonzalo_escucha') ? 'Gonzalo aprobó el grupo sin más condiciones.' : 'Gonzalo aprobó el grupo de mala gana.'} Tienes una hora. En una hora no se arregla nada, pero se puede escuchar mucho… <mark class="clave">si haces las preguntas correctas</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada parte de la guía.', boton: 'Imprimir la guía',
    bloques: [
      { id: 'reglas', t: 'Reglas al empezar', n: 2, ops: [
        { id: 'r1', t: 'Lo que se diga aquí se resume por temas, sin nombres ni quién dijo qué.', ok: true, por: 'Es la regla que hace posible hablar.' },
        { id: 'r2', t: 'Participar es voluntario: quien quiera puede irse o no responder.', ok: true },
        { id: 'r3', t: 'Todo será reportado a su gerente para que tome medidas con cada uno.', ok: false, por: 'Justo lo contrario de lo que necesitan oír.' },
      ] },
      { id: 'preg', t: 'Preguntas centrales', n: 3, ops: [
        { id: 'p1', t: '¿Qué es lo mejor de trabajar en Siniestros?', ok: true, por: 'Empieza por lo que funciona.' },
        { id: 'p2', t: 'Cuando algo sale mal en un caso, ¿qué pasa después?', ok: true, por: 'Explora el trato sin nombrarlo.' },
        { id: 'p3', t: 'Si mañana pudieran cambiar una sola cosa, ¿cuál sería?', ok: true, por: 'Lleva a propuestas, no solo a quejas.' },
        { id: 'p4', t: '¿Es cierto que el supervisor grita en las reuniones?', ok: false, por: 'Es una pregunta cerrada, que señala a una persona.' },
        { id: 'p5', t: '¿Ustedes respondieron la encuesta con sinceridad?', ok: false, por: 'Suena a sospecha.' },
      ] },
      { id: 'cierre', t: 'Cierre', n: 1, ops: [
        { id: 'c1', t: 'Contarles qué pasa ahora y cuándo recibirán una devolución.', ok: true, por: 'Que sepan que no queda en nada.' },
        { id: 'c2', t: 'Agradecerles y prometer que todo va a cambiar.', ok: false, por: 'No puedes prometer eso.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['guia_abierta'] : [], cartera: { focus: q === 'buena' ? 'Guía con preguntas abiertas' : 'Guía con preguntas que señalan' },
        out: q === 'buena' ? 'La guía cabe en una hoja. Renzo la lee: «Ninguna pregunta acusa a nadie, pero todas llegan al tema».' : 'La guía tiene preguntas que ya traen la respuesta adentro.',
        pro: { ok: 'Preguntas abiertas, que empiezan por lo positivo y terminan en propuestas, abren la conversación.', risk: 'Una pregunta que nombra a alguien convierte el grupo en un juicio.', info: 'Ten una pregunta de reserva por si el grupo se queda callado.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una guía que invita!' : 'Pregunta para abrir, no para confirmar.'],
      };
    },
    rules: [[BP, 'En un focus group se pregunta por situaciones, no por personas.']],
    mirada: {
      ve: 'La guía de un focus group se parece más a un mapa que a un guion: preguntas abiertas que llevan del «qué funciona» al «qué cambiarías», con reglas de confidencialidad dichas en voz alta al inicio.',
      visual: { tipo: 'flujo', titulo: 'La guía en una hora', pasos: ['Reglas', 'Lo mejor', 'Cuando algo sale mal', 'Una sola cosa', 'Qué pasa ahora'] },
    },
  },
  {
    id: 'f2', t: '09:58', ch: 'presencial', who: 'supervisor', titulo: '«Solo vengo a saludar»', banner: 'assets/foto2/pasillo.webp', lugar: 'Puerta de la sala, piso 7', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>Siete personas ya están sentadas, con sus galletas sin abrir. Entonces aparece Hernán Díaz en la puerta: camisa celeste, sonrisa amplia, una palmada en el hombro de Wálter. ${F.has('hernan_invitado') ? '«Gonzalo me dijo que podía estar. Aquí me siento, calladito.»' : '«Solo vengo a saludar a mi gente. Me quedo un ratito, ¿no?»'}</p><p>Nadie dice nada. Lucía mira su celular. <mark class="clave">La sala entera espera lo que tú hagas</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Salir con él al pasillo, agradecerle, explicarle que el grupo es solo entre analistas y confirmarle su propia conversación el lunes con Sofía.',
        res: { q: 'buena', fx: { etica: 4, personas: 4, confianza: 1 }, rel: { supervisor: 0, colaboradora: 1 }, flags: ['hernan_sale'],
          out: 'En el pasillo, Hernán deja de sonreír. «O sea que soy el malo.» Le dices que no, que es igual para todos los supervisores. Se va. Cuando vuelves a entrar, Milagros ya abrió las galletas.',
          pro: { ok: 'Lo sacas sin exponerlo delante de su equipo y le das un lugar en el proceso.', risk: 'Hernán se siente señalado y puede contarlo a su manera.', info: 'Hablar fuera de la sala evita que el equipo vea a su jefe incómodo… y que él culpe al equipo.' },
          kusi: ['animo', 'Firme, en privado y con respeto.'] } },
      { id: 'b', label: 'Dejarlo quedarse unos minutos para no generar tensión, y pedirle con una mirada que se vaya cuando empiece lo importante.',
        res: { q: 'riesgosa', fx: { personas: -4, calidad: -3 }, rel: { colaboradora: -1 }, flags: ['hernan_se_queda'],
          out: 'Hernán se queda veinte minutos. En ese tiempo, todos dicen que «el ambiente es bueno, como en toda empresa». Cuando por fin sale, queda media hora.',
          pro: { ok: 'Evitas un momento incómodo.', risk: 'Lo que se dice frente al jefe no es lo que se piensa. Perdiste la mitad del grupo.' },
          kusi: ['preocupado', 'Veinte minutos de silencio educado…'] } },
      { id: 'c', label: 'Decirle delante de todos que no puede estar, porque el grupo es para hablar de los supervisores.',
        res: { q: 'aceptable', fx: { etica: 1, personas: -2, confianza: -3 }, rel: { supervisor: -1 }, flags: ['hernan_sale'],
          out: 'Hernán se va rojo. El grupo se queda helado: ahora todos saben que «el tema» es él, y temen lo que pase al bajar al piso 6.',
          pro: { ok: 'Sale de la sala.', risk: 'Lo expones frente a su equipo, y es el equipo el que paga después.' },
          kusi: ['pensando', 'Salió, pero ¿a qué costo?'] } },
    ],
    rules: [[BP, 'Los límites a una jefatura se ponen en privado y con una alternativa.']],
    mirada: {
      ve: 'Un jefe en la sala, aunque calle, cambia lo que el grupo dice. Sacarlo con respeto y en privado protege al equipo y a él mismo: nadie tiene que ver a su supervisor humillado ni sentirse culpable por ello.',
      visual: { tipo: 'cambio', titulo: 'La sala antes y después', pares: [['«El ambiente es bueno»', '«Cuando un caso se atrasa, nos gritan»'], ['Galletas sin abrir', 'Galletas abiertas'], ['Miradas al celular', 'Miradas entre ellos']] },
    },
  },
  {
    id: 'f3', t: '10:20', ch: 'presencial', who: null, titulo: 'Cuando por fin hablan', banner: 'assets/foto/plano-equipo.webp', lugar: 'Sala de capacitación, piso 7', show: ['personas', 'calidad'],
    body: (n, F) => `<p>${F.has('hernan_se_queda') ? 'Ya son las 10:40 y Hernán acaba de salir.' : 'La puerta está cerrada.'} Repites la regla: temas, sin nombres. Hay un silencio largo, de esos que pesan. Lo aguantas. Al final, Milagros dice: «Bueno, yo empiezo».</p><p>Te alcanza el tiempo para <mark class="clave">dos preguntas a fondo</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que harás al grupo.',
    opts: [
      { id: 'mejor', label: '¿Qué es lo mejor de trabajar en Siniestros?', info: 'Milagros: «Nosotras. Si alguien se atrasa, otro le ayuda a cerrar. Eso no lo pone ningún sistema». Varios asienten.' },
      { id: 'mal', label: 'Cuando un caso sale mal, ¿qué pasa después?', info: 'Wálter, en voz baja: «Te exponen en la reunión del lunes. Delante de todos. Con tu nombre en la pantalla». Lucía no levanta la mirada.' },
      { id: 'cambio', label: 'Si mañana pudieran cambiar una sola cosa, ¿cuál sería?', info: 'Joel: «Que los errores se hablen en privado». Pamela: «Que el sistema nuevo no nos haga cerrar a las nueve». Alguien: «Que no haya represalias por esto».' },
      { id: 'sistema', label: '¿Cómo les ha ido con el sistema nuevo?', info: '«Lento. Se cuelga a las cinco, justo cuando hay más casos.» Es real, pero todos vuelven a hablar de las reuniones del lunes.' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('mal') ? 3 : 1, calidad: picks.includes('cambio') ? 3 : 1 }, rel: { colaboradora: picks.includes('mal') ? 1 : 0 },
      cartera: { focus: 'Realizado: 7 participantes, 1 hora' },
      out: 'A las 11:05 cierras. Les cuentas que el viernes de la próxima semana habrá una devolución al área. Se van de a dos, no en grupo. Lucía es la última en salir y te mira como si quisiera decir algo más.',
      kusi: ['curioso', 'El silencio también era información.'],
    }),
    mirada: {
      ve: 'En un focus group, el primer silencio es la prueba: si quien conduce lo llena, el grupo aprende que no tiene que hablar. Las preguntas sobre «qué pasa cuando algo sale mal» suelen revelar más del trato que cualquier ítem de la encuesta.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo el grupo', txt: 'Compañerismo real · exposición pública de errores en la reunión de los lunes · un sistema que se cuelga a las cinco · miedo a represalias.' },
    },
  },
  {
    id: 'f4', t: '12:20', ch: 'documento', who: null, titulo: 'Las notas de Renzo', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Renzo te pasa sus notas, orgulloso: «Anoté todo, todito». Antes de usarlas para el resumen, revísalas. <mark class="clave">Lo que se queda en estas notas puede terminar en cualquier escritorio</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que incumple la ley o lo que no debe quedar en las notas.',
    doc: { t: 'Notas del focus group · Siniestros', sub: 'Tomadas por Renzo Quispe · jueves, 10:20' },
    lines: [
      { id: 'tema', t: 'Tema 1: exposición pública de errores en la reunión semanal de los lunes.' },
      { id: 'quien', t: 'Wálter C. dijo que «te exponen con tu nombre en la pantalla».', bad: BP, why: 'Las notas registran qué se dijo, no quién lo dijo.' },
      { id: 'llanto', t: 'Lucía se quedó callada todo el rato, parecía a punto de llorar.', bad: BP, why: 'Describir reacciones de una persona con nombre la expone sin que haya dicho nada.' },
      { id: 'audio', t: 'Audio completo grabado en mi celular (no les pregunté porque era para no perder nada).', bad: LEY, why: 'La voz es un dato personal. Grabar sin consentimiento informado va contra el principio de consentimiento (Ley 29733, art. 5).' },
      { id: 'positivo', t: 'Tema 2: compañerismo entre analistas; se ayudan a cerrar casos.' },
      { id: 'propuesta', t: 'Propuestas: hablar los errores en privado; revisar el horario de cierre con el sistema nuevo.' },
      { id: 'drive', t: 'Subí estas notas a mi Drive personal para pasarlas en limpio desde mi casa.', bad: LEY, why: 'Sacar información del grupo a una cuenta personal escapa del control de la empresa y de la finalidad (Ley 29733, arts. 6 y 7).' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Corriges los nombres, pero el audio y la copia en el Drive personal se quedan. Hay voces del grupo fuera de la empresa.' : `Marcas ${hitsLey} problemas legales y le explicas a Renzo por qué. Él borra el audio delante de ti y saca el archivo de su Drive. «En la universidad nos enseñaron a grabar todo», dice bajito.`,
      flags: [missLey ? 'notas_sucias' : 'notas_limpias'],
      cartera: { focus: missLey ? 'Notas con nombres y audio sin permiso' : 'Notas limpias: temas y propuestas' },
      pro: { ok: 'Las notas de un focus group deben poder caer en cualquier mano sin dañar a nadie.', risk: 'Un audio sin consentimiento o un archivo en una cuenta personal son una filtración esperando ocurrir.', info: 'Si de verdad necesitas grabar, pide consentimiento al inicio, explica para qué y cuándo se borra.' },
      kusi: missLey ? ['preocupado', 'Las voces del grupo siguen en un celular…'] : ['celebra', '¡Notas que protegen!'],
    }),
    rules: [[LEY, 'Ley 29733, art. 5: el tratamiento de datos personales requiere consentimiento.'], [LEY, 'Ley 29733, arts. 6 y 7: finalidad y proporcionalidad.'], [BP, 'Las notas registran temas y frases, nunca quién dijo qué.']],
    mirada: {
      ve: 'Las notas de un focus group son el punto más frágil de todo el proceso: ahí la confidencialidad deja de ser una promesa y se vuelve papel. Lo que no está escrito no se puede filtrar.',
      visual: { tipo: 'cambio', titulo: 'De las notas de Renzo al resumen', pares: [['«Wálter dijo…»', '«Se mencionó que…»'], ['Audio sin permiso', 'Sin audio'], ['Drive personal', 'Carpeta de Cultura']] },
      normas: [{ ley: 'Ley 29733, Ley de Protección de Datos Personales', dice: 'El tratamiento de datos personales requiere el consentimiento de su titular y debe limitarse a la finalidad para la que se recopilaron.', practica: 'Grabar a un grupo «para no perder nada», sin preguntar, no cumple ninguna de las dos cosas.' }],
    },
  },
  {
    id: 'f5', t: '15:10', ch: 'whatsapp', who: 'supervisor', titulo: 'Hernán quiere saber', banner: 'assets/foto2/tablet-equipo.webp', show: ['confianza', 'etica'],
    body: () => `<p>Hernán te escribe por WhatsApp, con un tono amable que suena ensayado: «Oye, sin roche. Solo quiero mejorar como jefe. <mark class="clave">¿Qué dijeron de mí? Aunque sea a grandes rasgos</mark>. Te invito un café».</p>`,
    type: 'compose', enviaA: 'hernan', para: 'Para: Hernán Díaz · Supervisor de Siniestros', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'reconoce', t: 'Cómo empiezas', ops: [
        { id: 'r1', t: 'Hernán, gracias por escribir. Que quieras mejorar es muy valioso.', ok: true, por: 'Tomas en serio su intención, sea cual sea.' },
        { id: 'r2', t: 'Hernán, la verdad es que salió bastante sobre ti.', ok: false, por: 'Le confirmas que se habló de él y lo pones en guardia.' },
      ] },
      { id: 'limite', t: 'El límite', ops: [
        { id: 'l1', t: 'No puedo contarte lo que dijo el grupo por separado: lo vamos a devolver por temas a toda el área, sin nombres.', ok: true, por: 'Claro y sin excepciones.' },
        { id: 'l2', t: 'Te cuento lo general en el café, pero que quede entre nosotros.', ok: false, por: 'Un «entre nosotros» con un supervisor rompe la confidencialidad del grupo.' },
      ] },
      { id: 'cierre', t: 'Qué le ofreces', ops: [
        { id: 'c1', t: 'El lunes tienes tu propia conversación con Sofía; ahí podemos hablar de cómo te ven y cómo quieres liderar.', ok: true, por: 'Le das un espacio real.' },
        { id: 'c2', t: 'Mejor pregúntale a Gonzalo.', ok: false, por: 'Lo mandas a otra persona sin darle nada.' },
      ] },
    ],
    res: sel => {
      const rompe = sel.limite === 'l2', buenas = ['r1', 'l1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = rompe ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { etica: rompe ? -5 : 3, confianza: q === 'buena' ? 3 : 0 }, rel: { supervisor: q === 'buena' ? 1 : 0 },
        flags: rompe ? [] : ['hernan_respondido'],
        out: q === 'buena' ? 'Hernán responde con un «ok, entendido» y un emoji de pulgar. Una hora después le pregunta a Joel, en el ascensor, «cómo estuvo la reunión».' : rompe ? 'Hernán responde enseguida: «Perfecto, a las 5 en el Starbucks de la esquina». Ahora tienes una cita que no deberías tener.' : 'Hernán responde: «Ya». No sabes si entendió el límite.',
        pro: { ok: 'Un «no» que viene con un espacio propio es más fácil de aceptar.', risk: 'Lo que le cuentes «en general» a un supervisor, él lo cruzará con lo que ya sabe de su equipo.', info: 'Cuando alguien insiste en saber qué dijeron de él, es útil recordar que la devolución será para todos.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Límite claro, puerta abierta.' : 'Ese café no era buena idea…'],
      };
    },
    rules: [[BP, 'Nadie recibe por separado lo que dijo el grupo: la devolución es por temas y para todos.']],
    mirada: {
      ve: 'Las jefaturas mencionadas en un estudio de clima suelen buscar información por canales informales: un café, un ascensor, un «sin roche». Mantener el límite con amabilidad es tan importante como el análisis mismo.',
      visual: { tipo: 'balanza', a: { t: 'El café con Hernán', items: ['Él se calma hoy', 'Tú quedas bien'] }, b: { t: 'La devolución para todos', items: ['Nadie del grupo expuesto', 'Hernán recibe lo mismo que su equipo', 'El proceso sigue limpio'] } },
    },
  },
  {
    id: 'f6', t: '18:10', ch: 'llamada', who: 'colaboradora', titulo: 'Lucía llama', banner: 'assets/foto/llamada.webp', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Ya estás guardando tus cosas cuando suena tu anexo. Es Lucía, desde la calle; se oyen bocinas de la Vía Expresa. ${F.has('lucia_dudosa') ? '«Usted me dijo que era cien por ciento anónimo…»' : '«Usted me explicó bien lo de la encuesta el lunes.»'}</p><p>«Hay algo que no dije hoy. No lo puedo decir delante de nadie. <mark class="clave">¿Podemos hablar mañana, solas?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que sí, en una sala privada a primera hora, y explicarle desde ya que guardarás su nombre, pero que si te cuenta algo grave contra alguien, tendrás que llevarlo al canal de la empresa, cuidándola.',
        res: { q: 'buena', fx: { etica: 5, personas: 3 }, rel: { colaboradora: 1 }, flags: ['lucia_cita'],
          out: 'Lucía se queda callada. «O sea que puede que no quede solo entre las dos.» Le dices que sí, y que nunca harías nada sin hablarlo antes con ella. «Ya. Mañana a las 8:30. Igual voy.»',
          pro: { ok: 'Le dices la verdad antes de que te confíe algo: así decide con información.', risk: 'Puede que, sabiendo eso, cuente menos.', info: 'Explicar los límites de la confidencialidad antes de escuchar es lo que separa a un profesional de una amiga.' },
          kusi: ['animo', 'La honestidad primero, aunque cueste.'] } },
      { id: 'b', label: 'Decirle que sí y prometerle que nada de lo que diga saldrá de esa sala.',
        res: { q: 'riesgosa', fx: { etica: -3, personas: 2 }, rel: { colaboradora: 1 }, flags: ['lucia_cita_sin_limites'],
          out: '«Gracias. Necesitaba que alguien me dijera eso.» Cuelga más tranquila. Tú no tanto.',
          pro: { ok: 'Lucía se siente segura.', risk: 'Si lo que cuenta es grave, tu promesa te pone entre traicionarla o callar algo que la empresa debe atender.' },
          kusi: ['preocupado', '¿Y si lo que te cuenta no se puede callar?'] } },
      { id: 'c', label: 'Pedirle que mejor lo escriba en el canal de denuncias de la empresa, que es anónimo.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, personas: -3 }, rel: { colaboradora: -1 },
          out: '«Ah. Ya.» Lucía cuelga. Esa noche no escribe en ningún canal.',
          pro: { ok: 'Le indicas un canal formal.', risk: 'Quien llama pidiendo hablar con una persona no siempre está lista para escribir en un formulario.' },
          kusi: ['triste', 'Te buscó a ti, no a un formulario.'] } },
    ],
    rules: [[BP, 'Antes de escuchar algo en confianza, explica qué puedes guardar y qué no.']],
    mirada: {
      ve: 'La confidencialidad en RR.HH. tiene límites: si alguien cuenta un hecho grave que afecta a otras personas, la empresa tiene que actuar. Decirlo antes de escuchar es lo que permite cuidar a la persona sin mentirle.',
      visual: { tipo: 'flujo', titulo: 'Antes de escuchar en privado', pasos: ['Lugar privado', 'Explicar los límites', 'Escuchar', 'Acordar los siguientes pasos'], aqui: 1 },
    },
  },
];
