// Asistente de Capacitación · Capítulo 6 · «La encuesta» · Semana 2, lunes.
// Hilo de las dos semanas: la «escuela de cajeros» de Boticas del Norte, 120 personas nuevas en seis grupos, en Trujillo.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 29733, Ley de Protección de Datos Personales: solo se recogen los datos necesarios para la finalidad; los datos de
//   salud son sensibles.
// - Ley 29973, art. 50: ajustes razonables en el lugar de trabajo (capítulo 2).
//   https://cdn.www.gob.pe/uploads/document/file/5843154/5182571-rd-129-2024-munoz-loayza-henry-otorgamiento-y-aplicacion-de-ajustes-razonables.pdf
// - TUO de la Ley de Jornada (D.S. 007-2002-TR), art. 9: el sobretiempo es voluntario (capítulo 3).
//   https://lpderecho.pe/tuo-ley-jornada-trabajo-horario-trabajo-sobretiempo-decreto-supremo-007-2002-tr
// Los niveles de evaluación (reacción, aprendizaje, aplicación, resultados) se presentan como buena práctica.
// Encuestas, puntajes y comentarios son ficticios.

export const CAP = {
  n: 6, titulo: 'La encuesta', dia: 'Semana 2, lunes', foto: 'assets/foto2/collage.webp',
  lugar: 'Boticas del Norte · Sede de capacitación, Av. España',
  inicio: '07:45', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lunes de la segunda semana. El grupo 5 empieza hoy, con los rezagados y la gente de La Esperanza. En tu bandeja hay 71 encuestas de los grupos 1 a 4: promedio 4.8 de 5. «Muy bonito», dice casi todo el mundo. Y sin embargo, la mitad desaprobó.', boton: 'Abrir las encuestas',
  kusi: '«Muy bonito» es lindo de leer… pero no te dice si aprendieron.',
  lead: 'Entendiste para qué quiere Karen la encuesta, desarmaste la que había, armaste una nueva, escuchaste a cinco participantes, protegiste el anonimato y le llevaste a Karen lo que de verdad importa.',
  reflexion: '¿Qué pregunta te harías a ti misma para saber si una capacitación cambió algo?',
  siguiente: { n: 7, titulo: 'La constancia', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'encuestas', p: 'Encuestas de los grupos 1 a 4', j: 'Tú', d: 0, e: '71 respuestas, 4.8 de 5' },
  { id: 'grupo5', p: 'Grupo 5 (día 1)', j: 'Jorge y tú', d: 0, e: 'Hoy' },
  { id: 'nueva', p: 'Encuesta nueva para los grupos 5 y 6', j: 'Karen · Capacitación', d: 0, e: 'Por diseñar' },
  { id: 'reexamen', p: 'Refuerzo y reexamen', j: 'Jorge y tú', d: 0, e: 'Jueves' },
  { id: 'constancias', p: 'Constancias de los grupos 1 a 4', j: 'Fiorella · Sistemas', d: 0, e: 'Las piden mañana' },
];

export const FUTURO = {
  encuesta_util: ['Sabes que Karen quiere la encuesta para mejorar, no para premiar.', 'Te dará libertad para cambiarla.'],
  encuesta_limpia: ['Sacaste de la encuesta el nombre obligatorio y la pregunta de salud.', 'La gente se animará a escribir lo que piensa.'],
  encuesta_sucia: ['La encuesta sigue pidiendo nombre y datos de salud.', 'Las respuestas seguirán siendo «muy bonito».'],
  encuesta_nueva: ['La encuesta nueva pregunta qué aprendieron, qué les costó y qué les impidió aprender.', 'Los grupos 5 y 6 te dirán cosas nuevas.'],
  voces_escuchadas: ['Escuchaste a cinco participantes en persona.', 'Sabes lo que la encuesta no decía: horarios, nervios y el arqueo.'],
  anonimato_jorge: ['Protegiste el anonimato frente a Jorge y le diste el patrón.', 'Jorge cambiará algo en el reexamen del jueves.'],
  nombres_jorge: ['Le diste a Jorge los nombres de quienes lo criticaron.', 'Nadie volverá a escribir con sinceridad.'],
  hallazgos_ok: ['Karen recibió tres hallazgos que sirven para decidir.', 'Los usará en el balance del capítulo 10.'],
};

export const CHATS = {
  area: { n: 'Capacitación · Boticas del Norte', sub: 'Karen, Fiorella y tú', c: '#C05621' },
  karen: { n: 'Karen Vásquez', sub: 'Analista de Capacitación', who: 'karen' },
  jorge: { n: 'Q. F. Jorge Lázaro', sub: 'Facilitador', who: 'facilitador' },
  mario: { n: 'Mario Infante', sub: 'Jefe del local de La Esperanza', who: 'local' },
  grupo5: { n: 'Escuela de cajeros · Grupo 5', sub: '22 participantes', c: '#975A16' },
  kevin: { n: 'Kevin Rodríguez', sub: 'Participante · Grupo 2', c: '#6B46C1' },
};

export const WSP = [
  { chat: 'grupo5', t: '07:50', de: 'Brenda', txt: 'Buenos días, ya estamos en la puerta con Josué. El volante llegó a las 8 al local 😅', si: 'mario_negociado' },
  { chat: 'grupo5', t: '07:50', de: 'Brenda', txt: 'Buenos días. El señor Mario nos mandó, pero dice que a las 2 tenemos que volver al local 😬', si: 'mario_escalado' },
  { chat: 'mario', t: '08:10', de: 'Mario', txt: 'Señorita, mis cuatro siguen en caja. Ya aprendieron mirando, ¿para qué los mando? 🤷', si: 'mario_tolerado' },
  { chat: 'area', t: '08:40', de: 'Fiorella', txt: 'Ojo: mañana me van a pedir las constancias y AulaNorte no las emite. Solo tiene «certificado de módulo» 🙃' },
  { chat: 'kevin', t: '12:40', de: 'Kevin', txt: 'Si quiere le cuento lo de la encuesta. En el formulario no había dónde poner lo de los videos.' },
  { chat: 'jorge', t: '17:50', de: 'Jorge', txt: 'Leí el resumen. Me dolió lo de «se extiende», pero es verdad. El jueves llego con cronómetro ⏱️', si: 'anonimato_jorge' },
];

export const CORREOS = [
  { t: '07:55', de: 'Karen Vásquez', para: 'Asistente de Capacitación', asunto: 'Encuestas', html: '<p>Benites vio el 4.8 y me felicitó. Yo no estoy tranquila: si les gustó tanto, ¿por qué desaprobó la mitad? Quiero entender qué está pasando antes del balance del viernes.</p><p>Karen</p>' },
  { t: '10:20', de: 'AulaNorte · Notificaciones', para: 'capacitacion@boticasnorte.pe', asunto: 'Formulario de satisfacción · resumen', html: '<p>Respuestas: 71. Promedio general: 4.8. Comentarios: «muy bonito» (23), «todo bien» (17), «gracias» (11), sin comentario (20).</p>' },
];

export const QUIZ = [
  { q: 'Una encuesta de satisfacción con 4.8 de 5 te dice…', ops: ['Que aprendieron', 'Cómo vivieron el curso: es el nivel de reacción', 'Que bajaron los faltantes', 'Que el facilitador es el mejor'], ok: 1, por: 'La satisfacción es el primer nivel; no prueba aprendizaje ni aplicación.' },
  { q: 'Si la encuesta pide nombre y la ve el jefe de local, es probable que…', ops: ['Respondan con más sinceridad', 'Respondan lo que creen que conviene', 'No cambie nada', 'No la respondan'], ok: 1, por: 'Sin anonimato, la gente nueva suele elegir la respuesta segura.' },
  { q: '¿Por qué no preguntar «¿tienes alguna enfermedad?» en una encuesta de capacitación?', ops: ['Porque es muy largo', 'Porque es un dato sensible que no se necesita para esa finalidad', 'Porque nadie responde', 'Sí se puede'], ok: 1, por: 'Solo se recogen datos necesarios para la finalidad; los de salud son sensibles (Ley 29733).' },
  { q: 'El facilitador pide saber quién escribió una crítica. ¿Qué haces?', ops: ['Le das los nombres', 'Le das el patrón de los comentarios, sin nombres', 'Borras la crítica', 'Le dices que no hubo críticas'], ok: 1, por: 'El anonimato prometido se cumple; el facilitador recibe lo que necesita para mejorar.' },
  { q: 'Para saber si una capacitación sirvió de verdad, lo mejor es…', ops: ['Más preguntas de satisfacción', 'Combinar encuesta, examen y observación en el puesto', 'Preguntarle al gerente', 'Contar asistentes'], ok: 1, por: 'Cada fuente mira un nivel distinto: reacción, aprendizaje y aplicación.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 's1', t: '08:15', ch: 'presencial', who: 'karen', titulo: 'Un 4.8 que no tranquiliza', banner: 'assets/foto2/revisan.webp', show: ['confianza', 'calidad'],
    body: () => `<p>Karen llega con dos cafés y un pan con camote del mercado Mayorista. Deja el celular boca abajo. «Todos me felicitan por el 4.8. <mark class="clave">Y yo siento que me están aplaudiendo un curso que no funcionó</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Karen.',
    opts: [
      { id: 'para', label: '¿Para qué quieres la encuesta: para mostrar o para mejorar?', info: '«Para mejorar. Lo de mostrar ya lo hace Benites con el número. Yo quiero saber qué cambiar el jueves y el próximo año.»' },
      { id: 'quien', label: '¿Quién ve las respuestas hoy?', info: '«AulaNorte las manda a todos los jefes de local con el nombre del participante. Así lo configuró el proveedor el año pasado.»' },
      { id: 'cambiar', label: '¿Puedo cambiar las preguntas para los grupos 5 y 6?', info: '«Sí. Pero que no sea larguísima: tienen cinco minutos antes de irse y el celular con poca batería.»' },
      { id: 'jorge', label: '¿Jorge lee las encuestas?', info: '«Todas. Y se las toma muy a pecho. Si ve una crítica, me pregunta quién fue.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 2, calidad: picks.includes('para') ? 2 : 0 }, rel: { karen: 1 },
      flags: picks.includes('para') || picks.includes('cambiar') ? ['encuesta_util'] : [],
      out: picks.includes('quien') ? 'Te quedas pensando: si el jefe ve tu nombre al lado de tu respuesta, ¿quién escribiría algo distinto de «muy bonito»?' : 'Karen te pasa el formulario actual. «Desármalo sin miedo.»',
      kusi: ['curioso', 'Ya sabes para qué sirve la encuesta.'],
    }),
    mirada: {
      ve: 'Un número alto de satisfacción puede ser una buena noticia o una señal de que la gente no se anima a decir lo que piensa. Saber para qué se usa la encuesta define qué preguntar.',
      visual: { tipo: 'embudo', titulo: 'Lo que dicen los 71', niveles: [['Respuestas', 71], ['«Muy bonito», «todo bien» o «gracias»', 51], ['Con algo concreto', 0]] },
    },
  },
  {
    id: 's2', t: '09:30', ch: 'documento', who: null, titulo: 'La encuesta de siempre', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Abres el formulario que el proveedor dejó el año pasado. Son ocho preguntas. <mark class="clave">Algunas explican por qué todos responden «muy bonito»</mark>.</p>`,
    type: 'flag', prompt: 'Marca las preguntas que incumplen la norma o que impiden saber la verdad.',
    doc: { t: 'Encuesta de satisfacción · AulaNorte', sub: 'Formulario del proveedor · se envía a jefes de local' },
    lines: [
      { id: 'nombre', t: '1. Nombre completo y local (obligatorio).', bad: BP, why: 'Con nombre, y vista por el jefe, la gente nueva responde lo que conviene.' },
      { id: 'excelente', t: '2. ¿Qué tan excelente le pareció el facilitador? (1 a 5)', bad: BP, why: 'La pregunta ya sugiere la respuesta.' },
      { id: 'salud', t: '3. ¿Tiene alguna enfermedad o condición que debamos conocer?', bad: LEY, why: 'Es un dato sensible que no se necesita para evaluar un curso (Ley 29733). Si alguien necesita un ajuste, se pide por otra vía, en privado.' },
      { id: 'aula', t: '4. ¿El aula y los materiales estuvieron en buen estado?' },
      { id: 'util', t: '5. ¿Qué tema le será más útil en caja?' },
      { id: 'recom', t: '6. ¿Recomendaría Boticas del Norte a un familiar como lugar de trabajo?', duda: 'Puede ser interesante, pero no es sobre la capacitación.' },
      { id: 'envio', t: 'Las respuestas se envían a cada jefe de local con el nombre del participante.', bad: BP, why: 'El jefe no necesita ver qué opinó cada uno: necesita saber cómo le fue a su gente.' },
      { id: 'coment', t: '8. Comentario libre (opcional).' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'Corriges el nombre y la pregunta sesgada, pero la de salud sigue ahí. Nadie la responde, y la que responde lo hace porque cree que debe.' : `Marcas ${hitsLey + hitsBp} problemas. Karen lee la pregunta de salud y se tapa la cara: «¿Eso lo preguntábamos?».`,
      flags: [missLey ? 'encuesta_sucia' : 'encuesta_limpia'], rel: { karen: missLey ? 0 : 1 },
      cartera: { encuestas: missLey ? 'Encuesta corregida a medias' : 'Encuesta vieja desarmada: sin nombre, sin salud, sin envío a jefes' },
      pro: { ok: 'Una encuesta anónima y sin datos de más es la única que dice la verdad.', risk: 'Pedir datos de salud sin necesidad incumple la ley y asusta.', info: 'Si alguien necesita un ajuste, que lo diga por un canal privado con Capacitación.' },
      kusi: missLey ? ['preocupado', 'Esa pregunta de salud…'] : ['celebra', '¡Ahora sí pueden hablar!'],
    }),
    rules: [[LEY, 'Solo se recogen los datos necesarios para la finalidad; los datos de salud son sensibles (Ley 29733).'], [BP, 'Una encuesta de capacitación es anónima y no la ve el jefe con nombres.']],
    mirada: {
      ve: 'El 4.8 no era mentira: era miedo y cortesía. Cuando una encuesta pide tu nombre y se la manda a tu jefe, en tu primera semana de trabajo, la respuesta segura es «muy bonito».',
      visual: { tipo: 'cambio', titulo: 'De la encuesta de siempre a una honesta', pares: [['Nombre obligatorio', 'Anónima'], ['¿Qué tan excelente…?', '¿Qué te costó entender?'], ['¿Tienes alguna enfermedad?', 'Ajustes, por canal privado'], ['Al jefe con nombres', 'Resumen por grupo']] },
    },
  },
  {
    id: 's3', t: '11:00', ch: 'documento', who: null, titulo: 'La encuesta nueva', banner: 'assets/esc/idea.webp', show: ['calidad', 'personas', 'tiempo'],
    body: () => `<p>Cinco minutos y poca batería: esa es la realidad. Armas la encuesta para los grupos 5 y 6 con <mark class="clave">pocas preguntas que digan mucho</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la encuesta.', boton: 'Guardar la encuesta',
    bloques: [
      { id: 'aprend', t: 'Lo que aprendieron', n: 2, ops: [
        { id: 'a1', t: '¿Qué podrías hacer mañana en caja que antes no sabías?', ok: true, por: 'Obliga a nombrar algo concreto.' },
        { id: 'a2', t: '¿Qué tema te costó más entender?', ok: true, por: 'Señala dónde reforzar.' },
        { id: 'a3', t: '¿Te gustó el curso? (sí / no)', ok: false, por: 'Ya sabemos la respuesta: sí.' },
      ] },
      { id: 'barr', t: 'Lo que les impidió aprender', n: 2, ops: [
        { id: 'b1', t: '¿Hubo algo del horario, el lugar o la plataforma que te dificultó?', ok: true, por: 'Aquí aparecen la combi, la guardería y el wifi.' },
        { id: 'b2', t: '¿Necesitaste algún apoyo que no tuviste? (puedes escribirle en privado a Capacitación)', ok: true, por: 'Abre la puerta a un ajuste sin exponer a nadie.' },
        { id: 'b3', t: '¿Algún compañero te distrajo? Escribe su nombre.', ok: false, por: 'Convierte la encuesta en una lista de acusados.' },
      ] },
      { id: 'forma', t: 'Cómo se aplica', n: 1, ops: [
        { id: 'f1', t: 'Anónima, en papel o en el celular, antes del examen del día 3.', ok: true, por: 'Antes de la nota, para que la nota no la contamine.' },
        { id: 'f2', t: 'Después de entregar las notas, para que opinen con todo.', ok: false, por: 'Quien desaprobó responderá con rabia; quien aprobó, con alivio.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['encuesta_nueva'] : [], cartera: { nueva: q === 'buena' ? 'Encuesta nueva: 5 preguntas, anónima, antes del examen' : 'Encuesta nueva con fallas' },
        out: q === 'buena' ? 'Cinco preguntas en media hoja. La pruebas con el señor Tito, que la responde en tres minutos y escribe: «Me costó entender el lector de código de barras».' : 'La encuesta queda, pero alguna pregunta va a traer más problemas que respuestas.',
        pro: { ok: 'Preguntar qué aprendieron y qué les impidió aprender dice más que veinte preguntas de satisfacción.', risk: 'Pedir nombres de compañeros o aplicarla después de la nota contamina todo.', info: 'Lee los comentarios el mismo día: lo que se lee tarde ya no se corrige.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cinco preguntas que valen oro!' : 'Algo de eso no ayuda.'],
      };
    },
    mirada: {
      ve: 'La encuesta es el nivel de reacción, pero bien hecha también te dice qué costó aprender y qué lo impidió. Esas dos respuestas son las que te permiten cambiar algo el jueves.',
      visual: { tipo: 'flujo', titulo: 'La encuesta nueva', pasos: ['Qué puedo hacer mañana', 'Qué me costó', 'Qué me lo impidió', 'Qué apoyo me faltó', 'Anónima, antes del examen'] },
    },
  },
  {
    id: 's4', t: '13:30', ch: 'llamada', who: null, titulo: 'Cinco voces', banner: 'assets/foto/llamada.webp', lugar: 'Pasillo del aula, en el almuerzo', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>Mientras el grupo 5 almuerza, llamas a cinco personas de los grupos 1 a 4. Les dices que no es para evaluarlas y que <mark class="clave">lo que digan no llevará su nombre</mark>.</p>`,
    type: 'calls',
    calls: [['Kevin Rodríguez', 'Contesta por mensaje', 'En la encuesta no había dónde decir lo de los videos sin subtítulos. Y no iba a poner «tengo una discapacidad» con mi nombre y que lo lea mi jefa.'], ['Maritza Vera', 'Contesta', 'Puse «muy bonito» porque ¿qué iba a poner? ¿Que me preocupaba salir tarde con mi hijo en el nido?'], ['Daniela Rondón', 'Contesta', 'El arqueo fue rapidito, con la clase ya terminando. Yo lo sabía de Venezuela, pero mis compañeros no.'], ['Jhonatan Luján', 'No contesta'], ['Rosa Gamboa', 'Contesta desde el local', 'Me dio vergüenza decir que no entendí la boleta electrónica. Todos ponían que todo bien.']],
    prompt: 'Escuchaste lo que la encuesta no decía. ¿Qué haces con eso?',
    choices: [
      { id: 'a', label: 'Anotar los temas sin nombres (horario, accesibilidad, arqueo, vergüenza de preguntar) y llevarlos al resumen para Karen y Jorge.',
        res: { q: 'buena', fx: { calidad: 4, personas: 4, etica: 2 }, flags: ['voces_escuchadas'], cartera: { encuestas: 'Cuatro temas que la encuesta no mostraba' },
          out: 'En una hoja escribes cuatro palabras: horario, accesibilidad, arqueo, vergüenza. Es lo que el 4.8 escondía.',
          pro: { ok: 'Combinas fuentes: la encuesta dice cuánto les gustó; las conversaciones, por qué no aprendieron.', info: 'Repite estas cinco llamadas con los grupos 5 y 6.' },
          kusi: ['feliz', '¡Ahora sí sabes lo que pasó!'] } },
      { id: 'b', label: 'Pedirles que vuelvan a llenar la encuesta poniendo lo que te dijeron.',
        res: { q: 'aceptable', fx: { calidad: 1, personas: -1 },
          out: 'Dos lo hacen. Los otros te dejan en visto: ya dijeron lo que tenían que decir.',
          pro: { ok: 'Quieres que quede registrado.', risk: 'Les pides repetir por escrito, con nombre, lo que te contaron en confianza.' },
          kusi: ['pensando', '¿Para qué repetirlo, si ya lo sabes?'] } },
    ],
    rules: [[BP, 'Cuando prometes que algo no llevará nombre, lo cumples.']],
    mirada: {
      ve: 'Cinco conversaciones de tres minutos dijeron más que 71 encuestas. No porque la gente mintiera en la encuesta, sino porque nadie le preguntó lo que de verdad le pasaba, en un espacio seguro.',
      visual: { tipo: 'balanza', a: { t: 'Lo que decía la encuesta', items: ['Muy bonito', 'Todo bien', 'Gracias'] }, b: { t: 'Lo que dijeron por teléfono', items: ['Salir tarde con un hijo en el nido', 'Videos sin subtítulos', 'Arqueo apurado', 'Vergüenza de preguntar'] } },
    },
  },
  {
    id: 's5', t: '15:40', ch: 'presencial', who: 'facilitador', titulo: '«¿Quién escribió esto?»', banner: 'assets/foto2/tension.webp', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>Jorge, entre grupo y grupo, lee los pocos comentarios libres en tu laptop. Uno dice: «${F.has('sobretiempo_forzado') ? 'El facilitador sabe mucho, pero nos hizo quedar hasta las 6 y nadie se atrevió a decir que no' : 'El facilitador sabe mucho, pero se extiende en sus historias y luego el arqueo va corriendo'}».</p><p>Se le endurece la cara. «<mark class="clave">¿Quién lo escribió?</mark> Quiero hablar con esa persona, para explicarle.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no puedes darle nombres, y mostrarle que tres comentarios y dos llamadas dicen lo mismo: que el arqueo queda corto.',
        res: { q: 'buena', fx: { etica: 4, confianza: 2, calidad: 3 }, rel: { facilitador: 0 }, flags: ['anonimato_jorge'],
          out: 'Jorge se queda en silencio. Luego dice: «No es una persona, es un patrón. Ya entendí». Y te pide quince minutos más de práctica de arqueo el jueves, a cambio de recortar una historia.',
          pro: { ok: 'Cumples el anonimato y le das algo útil para mejorar.', risk: 'Jorge puede sentirse herido un rato.', info: 'Dale primero lo que hace bien: los comentarios positivos también existen.' },
          kusi: ['animo', 'Anonimato cumplido, mensaje entregado.'] } },
      { id: 'b', label: 'Darle el nombre: es un adulto, sabrá conversar con respeto.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -4 }, rel: { facilitador: 1 }, flags: ['nombres_jorge'],
          out: 'Jorge busca a la persona en el grupo 4 y le explica, amable, por qué sus historias son importantes. Ella asiente roja de vergüenza. En el grupo de WhatsApp se corre la voz.',
          pro: { ok: 'Jorge queda tranquilo.', risk: 'Si rompes el anonimato una vez, nadie vuelve a escribir con sinceridad.' },
          kusi: ['triste', 'Se prometió que era anónima…'] } },
      { id: 'c', label: 'Borrar ese comentario del resumen para no herir a Jorge antes del jueves.',
        res: { q: 'aceptable', fx: { confianza: 1, calidad: -3 },
          out: 'Jorge no se entera. El jueves, el arqueo vuelve a quedar corto.',
          pro: { ok: 'Cuidas el ánimo del facilitador.', risk: 'Ocultar la crítica impide que mejore justo lo que falla.' },
          kusi: ['pensando', '¿Y el arqueo?'] } },
    ],
    rules: [[BP, 'Una encuesta anónima se mantiene anónima, también frente al facilitador.']],
    mirada: {
      ve: 'Jorge no quiere vengarse: quiere explicarse. Pero el anonimato no es tuyo para regalarlo. Lo que sí puedes darle es el patrón: no una persona molesta, sino varias voces diciendo lo mismo.',
      visual: { tipo: 'matriz', x: 'Lo que aprende Jorge', y: 'Confianza de los participantes', cuadrantes: ['Aprende y confían', 'Confían, no aprende', 'Ni una ni otra', 'Aprende, pero nadie confía'], items: [['Patrón sin nombres', .85, .9], ['Borrar el comentario', .1, .6], ['Dar el nombre', .6, .05]] },
    },
  },
  {
    id: 's6', t: '17:30', ch: 'documento', who: null, titulo: 'Tres hallazgos para Karen', banner: 'assets/esc/meta.webp', show: ['calidad', 'confianza'],
    body: () => `<p>El grupo 5 se va. Karen te pide «los tres hallazgos de la encuesta que debería contar el viernes». <mark class="clave">Tres, no diez</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres hallazgos que le das a Karen.', boton: 'Mandar los tres', resumen: 'Mandaste',
    cols: ['Hallazgo', 'De dónde sale'],
    rows: [
      { id: 'anon', cells: ['Sin anonimato, la encuesta solo dice «muy bonito»', 'Formulario y llamadas'] },
      { id: 'arq', cells: ['El arqueo se enseña al final y apurado', 'Comentarios, llamadas y notas del viernes'] },
      { id: 'barr', cells: ['Horarios y accesibilidad pesan en el aprendizaje', 'Llamadas a Maritza y Kevin'] },
      { id: '48', cells: ['La satisfacción es de 4.8 de 5', 'Promedio de AulaNorte'] },
      { id: 'refri', cells: ['Piden chicha morada en vez de chicha de jora', 'Dos comentarios'] },
    ],
    score: { anon: 3, arq: 3, barr: 3, '48': 0, refri: -1 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { karen: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['hallazgos_ok'] : [], cartera: { encuestas: q === 'buena' ? 'Tres hallazgos para el balance' : 'Resumen de encuestas' },
        out: q === 'buena' ? 'Karen responde con un audio: «Esto es lo que Benites tiene que escuchar. El 4.8 lo pongo en una esquina, chiquito».' : 'Karen agradece. El resumen dice cosas ciertas, pero no del todo útiles para decidir.',
        pro: { ok: 'Un hallazgo útil dice qué pasa, de dónde sale y qué se puede cambiar.', risk: 'El 4.8 tranquiliza, pero no dice qué mejorar.', info: 'Junta en el balance encuesta, notas y lo que veas en el local el miércoles.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tres hallazgos de verdad!' : 'Hay hallazgos más útiles.'],
      };
    },
    mirada: {
      ve: 'De una encuesta no sale «la nota del curso»: salen pistas para mejorar. Elegir tres hallazgos con fuente es lo que permite que alguien decida algo con ellos.',
      visual: { tipo: 'flujo', titulo: 'De la encuesta a la decisión', pasos: ['Encuesta anónima', 'Conversaciones', 'Notas del examen', 'Tres hallazgos', 'Un cambio el jueves'] },
    },
  },
];
