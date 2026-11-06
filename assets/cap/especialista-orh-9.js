// Especialista en RR.HH. de entidad pública · Capítulo 9 · «La publicación» · Semana 2, jueves.
// Hilo de las dos semanas: el concurso CAS de 12 plazas de una municipalidad provincial de Cajamarca, hasta su publicación.
// Normas citadas:
// - D.S. 003-2018-TR (modificado por el D.S. 083-2019-PCM): las convocatorias de las entidades públicas se registran en el
//   portal Talento Perú y se difunden, como mínimo y simultáneamente con el portal institucional, durante diez días hábiles.
//   SERVIR precisa que la difusión empieza el día hábil siguiente al registro.
//   https://cdn.www.gob.pe/uploads/document/file/11675/2018-03-20_003-2018-TR__6367.pdf
//   https://cdn.www.gob.pe/uploads/document/file/4667598/Preguntas%20frecuentes%20sobre%20Talento%20Per%C3%BA.pdf
//   https://www.gob.pe/institucion/servir/campa%C3%B1as/4782-talento-peru
// - Ley 26772, modificada por la Ley 27270 (requisitos no discriminatorios), ya citada en el capítulo 2.
// - Ley 29973 y Ley 29248 (bonificaciones), ya citadas en los capítulos 1 y 8.

export const CAP = {
  n: 9, titulo: 'La publicación', dia: 'Semana 2, jueves', foto: 'assets/foto2/celebra-laptop.webp',
  lugar: 'Municipalidad Provincial · Cajamarca',
  inicio: '07:45', fin: '18:00', cierreHora: '17:45',
  apertura: 'Jueves. Hoy sale el concurso. Despejado y frío; desde la ventana de la ORH se ve el cerro Santa Apolonia con sus escalinatas. Don Segundo trajo pan de Baños del Inca «para la buena suerte».', boton: 'Entrar a Talento Perú',
  kusi: 'Publicar es soltar el concurso al mundo. A partir de hoy, lo que escribiste se cumple al pie de la letra.',
  lead: 'Registraste la convocatoria en Talento Perú, sostuviste la fecha frente a la presión política, corregiste el aviso antes de que saliera, respondiste a las primeras dudas y explicaste el concurso a la ciudad.',
  reflexion: '¿Qué cambia en ti cuando algo que hiciste se vuelve público y cualquiera lo puede revisar?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'concurso', p: 'CAS 005-2026: publicación', j: 'Marisol · ORH', d: 0, e: 'Hoy' },
  { id: 'legal', p: 'Informe de Asesoría Legal', j: 'Dr. Ronald Chilón', d: 0, e: 'Llega hoy' },
  { id: 'consultas', p: 'Consultas de postulantes', j: 'ORH', d: 0, e: 'Empiezan hoy' },
  { id: 'bonif', p: 'Bonificación del CAS 004', j: 'Asesoría Legal', d: 0, e: 'En evaluación' },
];

export const FUTURO = {
  publicado_hoy: ['Publicaste el CAS 005-2026 en la fecha del cronograma.', 'El lunes empieza la recepción de expedientes de la Semana 3.'],
  publicacion_corrida: ['Aceptaste correr la publicación para que el alcalde la anuncie.', 'El cronograma entero se mueve una semana en la Semana 3.'],
  aviso_limpio: ['El aviso salió con un plazo de postulación que respeta los diez días hábiles de difusión.', 'No habrá reclamos por el plazo en la Semana 3.'],
  aviso_corto: ['El aviso salió con un plazo de postulación corto.', 'SERVIR o un postulante lo observará en la Semana 3.'],
  comunicado_claro: ['Publicaste un comunicado claro sobre cómo postular, sin «plazas separadas».', 'Las consultas del lunes serán más ordenadas.'],
  primer_expediente: ['Recibiste el primer expediente del concurso.', 'Habrá muchos más el lunes.'],
};

export const CHATS = {
  grupo: { n: 'ORH Municipalidad', sub: 'Marisol y el equipo', c: '#2F6B3F' },
  marisol: { n: 'Marisol Chávez', sub: 'Jefa de la ORH', who: 'marisol' },
  prensa: { n: 'Imagen Institucional', sub: 'Redes de la municipalidad', c: '#C2410C' },
  regidor: { n: 'Regidor Manuel Tello', sub: 'Regidor municipal', who: 'regidor' },
  eder: { n: 'Eder Rojas', sub: 'Postulante', who: 'eder' },
};

export const WSP = [
  { chat: 'marisol', t: '08:00', de: 'Marisol', txt: 'Llegó el informe de Legal. Míralo antes de registrar en Talento Perú.' },
  { chat: 'regidor', t: '09:15', de: 'Regidor Tello', txt: 'En la sesión de hoy voy a pedir que se suspenda su concurso hasta que se aclare lo de Contraloría. Para que sepa.', si: 'lista_rechazada' },
  { chat: 'regidor', t: '09:15', de: 'Regidor Tello', txt: 'Señorita, ¿hoy sale? Avíseme primero, por favor, para avisar a los chicos.', si: 'lista_guardada' },
  { chat: 'eder', t: '12:05', de: 'Eder', txt: 'Ya vi la convocatoria. Ahora sí dice clarito lo de las fechas en las constancias. Voy a postular a asistente administrativo.', si: 'respuesta_fundada' },
  { chat: 'grupo', t: '16:40', de: 'Don Segundo', txt: '¡Llegó el primer expediente! Una señora de Jesús, para fiscalizadora. Vino en combi con su bebé.' },
];

export const CORREOS = [
  { t: '07:55', de: 'Asesoría Legal', para: 'ORH', asunto: 'Informe legal: bases del CAS 005-2026', html: '<p>Se revisaron las bases. Se valora el retiro de requisitos de edad, sexo y apariencia, y la incorporación del procedimiento de verificación de bonificaciones. Se recomienda que el plazo de postulación respete la difusión mínima en Talento Perú.</p><p>Dr. Ronald Chilón</p>', si: 'bases_limpias' },
  { t: '07:55', de: 'Asesoría Legal', para: 'ORH', asunto: 'Informe legal: bases del CAS 005-2026 (observación)', html: '<p>Se revisaron las bases. Se observa un requisito que podría considerarse discriminatorio y debe retirarse antes de la publicación. Se recomienda que el plazo de postulación respete la difusión mínima en Talento Perú.</p><p>Dr. Ronald Chilón</p>', si: 'bases_a_medias' },
  { t: '08:20', de: 'Asesoría Legal', para: 'ORH', asunto: 'Consulta: postulante pariente de un gerente', html: '<p>Sobre la consulta del lunes: la abstención del gerente en la evaluación es correcta. Si su pariente resultara ganador, la ORH deberá remitir el caso a esta oficina antes de la firma del contrato, para evaluar la injerencia conforme a la Ley 26771.</p>', si: 'consulta_legal' },
  { t: '13:40', de: 'Ing. Brayan Terrones Paredes', para: 'ORH', asunto: 'Reclamo: se me dijo que no podía postular', html: '<p>En la sesión del comité se dijo que yo no debía postular por ser sobrino de un gerente. Solicito que se me confirme por escrito si existe algún impedimento legal para postular.</p>', si: 'sobrino_excluido' },
];

export const QUIZ = [
  { q: '¿Cuánto tiempo, como mínimo, debe difundirse una convocatoria en Talento Perú?', ops: ['Un día', 'Diez días hábiles, simultáneamente con el portal institucional', 'Un mes', 'Hasta que se llenen las plazas'], ok: 1, por: 'El D.S. 003-2018-TR dispone la difusión mínima de diez días hábiles en Talento Perú y en el portal de la entidad.' },
  { q: '¿Desde cuándo se cuenta la difusión en Talento Perú?', ops: ['Desde que se aprueba la bases', 'Desde el día hábil siguiente al registro', 'Desde el lunes siguiente', 'Desde la conferencia del alcalde'], ok: 1, por: 'SERVIR precisa que la publicación empieza el día hábil siguiente al ingreso de la información.' },
  { q: 'El aviso dice «consultas al WhatsApp de la ORH». ¿Qué problema tiene?', ops: ['Ninguno', 'Las respuestas no quedan públicas ni iguales para todos', 'Es muy moderno', 'Gasta datos'], ok: 1, por: 'Un correo de consultas con respuestas publicadas iguala la información.' },
  { q: 'Un regidor pide suspender el concurso en el concejo. ¿Qué hace la ORH?', ops: ['Lo suspende de inmediato', 'Informa a su jefatura y sigue el cronograma aprobado, salvo que la autoridad competente disponga otra cosa por escrito', 'Lo publica en secreto', 'Llama al regidor'], ok: 1, por: 'La ORH actúa según los actos formales de la entidad, no según anuncios.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '08:30', ch: 'sistema', who: null, titulo: 'Talento Perú', banner: 'assets/foto2/celebra-laptop.webp', lugar: 'Tu computadora, con el pan de Baños del Inca', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: (n, F) => `<p>Entras al aplicativo de Talento Perú con el usuario de la ORH. La conexión se cae dos veces; la red de la municipalidad no aguanta cuando Rentas imprime. ${F.has('bases_a_medias') ? 'Antes de registrar, tienes que retirar el requisito que observó Asesoría Legal.' : 'Las bases ya tienen el visto bueno de Asesoría Legal.'}</p><p><mark class="clave">Ordena los pasos del registro</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para publicar la convocatoria.', boton: 'Registrar',
    items: [
      { id: 'aprob', t: 'Verificar que las bases tienen el documento de aprobación firmado', por: 'Sin aprobación no se publica.' },
      { id: 'reg', t: 'Registrar cada puesto en Talento Perú con su perfil, remuneración y plazas', por: 'Doce registros, uno por puesto.' },
      { id: 'portal', t: 'Publicar el mismo día las bases en el portal institucional', por: 'La difusión debe ser simultánea.' },
      { id: 'captura', t: 'Guardar capturas con fecha de ambas publicaciones', por: 'Es la constancia que pidió la Contraloría para los concursos anteriores.' },
      { id: 'contar', t: 'Contar diez días hábiles desde el día siguiente y revisar la fecha de cierre', por: 'Si el cierre cae antes, el plazo no se cumple.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, tiempo: q === 'buena' ? 2 : -1 },
        cartera: { concurso: q === 'buena' ? 'Registro listo para publicar' : 'Registro con pasos por revisar' },
        out: q === 'buena' ? 'Doce registros, doce capturas. Al contar los días en el calendario, ves que la fecha de cierre del borrador del aviso no llega a diez días hábiles.' : 'Registras, aunque te saltas un paso. Al final, cuentas los días y algo no cuadra con la fecha de cierre.',
        pro: { ok: 'La aprobación primero; la constancia de la difusión al final.', info: 'El 8 de diciembre es feriado: no cuenta como día hábil.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Doce de doce!' : 'Revisa la cuenta de los días.'],
      };
    },
    rules: [[LEY, 'D.S. 003-2018-TR: registro en Talento Perú y difusión mínima de diez días hábiles, simultánea con el portal institucional.']],
    mirada: {
      ve: 'Talento Perú es la ventana por la que cualquier persona del país puede ver una plaza del Estado. Publicar ahí no es un trámite: es lo que convierte un puesto municipal en una oportunidad para todos.',
      visual: { tipo: 'flujo', titulo: 'Publicar un concurso', pasos: ['Bases aprobadas', 'Talento Perú', 'Portal institucional', 'Capturas', 'Contar diez días hábiles'], aqui: 1 },
      normas: [{ ley: 'D.S. 003-2018-TR, modificado por el D.S. 083-2019-PCM', dice: 'Las convocatorias de las entidades públicas se registran en Talento Perú y se difunden, como mínimo y simultáneamente, durante diez días hábiles.', practica: 'Según SERVIR, la difusión empieza el día hábil siguiente al registro.' }],
    },
  },
  {
    id: 'i2', t: '09:30', ch: 'documento', who: null, titulo: 'El aviso de convocatoria', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Imagen Institucional te manda el aviso que saldrá en el portal y en las redes. Lo armó un practicante con buena voluntad y mucha prisa.</p><p><mark class="clave">Marca lo que no puede salir así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas del aviso que incumplen la norma o que no se pueden sostener.',
    doc: { t: 'Aviso: Concurso CAS 005-2026', sub: 'Municipalidad Provincial · 12 plazas' },
    lines: [
      { id: 'plazas', t: '12 plazas: asistentes administrativos, ingeniero civil, fiscalizadores y serenos.' },
      { id: 'plazo', t: 'Postulación: del viernes 4 al miércoles 9 de diciembre.', bad: LEY, why: 'La difusión en Talento Perú debe durar al menos diez días hábiles. Cerrar la postulación a los pocos días acorta ese plazo.' },
      { id: 'ws', t: 'Consultas: al WhatsApp personal del especialista de la ORH.', bad: BP, why: 'Las consultas van al correo del concurso y las respuestas se publican para todos.' },
      { id: 'bonif', t: 'Bonificaciones de ley: 15 % por discapacidad y 10 % para licenciados de las FF.AA., previa verificación del documento.' },
      { id: 'res', t: 'Los resultados se comunicarán por teléfono a los ganadores.', bad: BP, why: 'Los resultados de cada etapa se publican, para que todos puedan revisarlos.' },
      { id: 'pref', t: 'Se dará preferencia a jóvenes del distrito.', bad: LEY, why: 'Preferir por edad o por lugar de residencia altera la igualdad de oportunidades (Ley 26772).' },
      { id: 'zona', t: 'En la entrevista de fiscalizadores y serenos se evaluará el conocimiento de la ciudad.', duda: 'Es válido si la pregunta y los criterios están escritos en las bases y son iguales para todos.' },
      { id: 'mesa', t: 'Expedientes por mesa de partes, de 8:00 a. m. a 4:30 p. m., o por correo.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? 'El aviso sale con un error que alguien va a notar antes del lunes. Probablemente Eder.' : `Le devuelves el aviso al practicante con las correcciones: cierre de postulación el viernes 18, consultas al correo del concurso${hitsBp ? ', resultados publicados' : ''} y sin «preferencias». Él responde: «Gracias, no sabía nada de esto».`,
      flags: [missLey ? 'aviso_corto' : 'aviso_limpio'],
      cartera: { concurso: missLey ? 'Aviso con un error' : 'Aviso corregido: cierre el viernes 18' },
      pro: { ok: 'El aviso es lo que la gente lee. Tiene que decir lo mismo que las bases.', risk: 'Un aviso que contradice las bases genera reclamos y puede afectar el concurso.', info: 'Pide ver siempre la versión final antes de que Imagen la publique.' },
      kusi: missLey ? ['preocupado', 'Eso va a salir en todas las redes…'] : ['celebra', '¡Aviso a prueba de lupa!'],
    }),
    rules: [[LEY, 'D.S. 003-2018-TR: difusión mínima de diez días hábiles.'], [LEY, 'Ley 26772: sin requisitos ni preferencias que discriminen.']],
    mirada: {
      ve: 'Las bases pueden ser perfectas y el aviso, un desastre. La mayoría de postulantes solo lee el aviso. Por eso la ORH revisa lo que publica Imagen Institucional como si fueran las bases.',
      visual: { tipo: 'linea', titulo: 'Diez días hábiles de difusión', hitos: [['Jueves 3 (registro)', 'Se ingresa en Talento Perú'], ['Viernes 5', 'Día hábil 1'], ['8 de diciembre', 'Feriado: no cuenta'], ['Viernes 18', 'Día hábil 10: cierre']] },
    },
  },
  {
    id: 'i3', t: '11:00', ch: 'presencial', who: 'marisol', titulo: 'Que lo anuncie el alcalde', banner: 'assets/foto2/presentacion.webp', lugar: 'Oficina de Marisol', show: ['cumplimiento', 'etica', 'confianza'],
    body: (n, F) => `<p>Marisol cuelga el teléfono. «Era el gerente. El alcalde quiere anunciar el concurso él mismo, en conferencia de prensa, el lunes. Pide que no publiquemos hasta entonces.» ${F.has('lista_rechazada') ? 'Y en la sesión de concejo de esta mañana, el regidor Tello pidió suspender el concurso «hasta que se aclare lo de Contraloría». No se votó nada.' : ''}</p><p>Tienes los doce registros listos para enviar. <mark class="clave">¿Qué recomiendas?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Publicar hoy, como dice el cronograma aprobado. El alcalde puede anunciarlo el lunes igual: ya estará en Talento Perú.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, confianza: -1 }, rel: { marisol: 1 }, flags: ['publicado_hoy'], cartera: { concurso: 'Publicado hoy en Talento Perú y en el portal' },
          out: 'Marisol llama al gerente y le explica. Hay un silencio largo al otro lado. «Bueno, que el alcalde lo anuncie como "ya está publicado".» A las 12:04 haces clic en «Publicar».',
          pro: { ok: 'Cumples el cronograma aprobado y le das al alcalde un anuncio igual de valioso.', risk: 'El despacho del alcalde puede sentir que la ORH no le hace caso.', info: 'Un pedido del regidor en el concejo, sin acuerdo, no suspende nada. Pero infórmalo por escrito.' },
          kusi: ['celebra', '¡Publicado! Y en la fecha que dijiste.'] } },
      { id: 'b', label: 'Esperar al lunes. Todavía no se publicó, así que mover la fecha es legal, y no conviene pelear con el alcalde.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, tiempo: -4, confianza: 2 }, flags: ['publicacion_corrida'], cartera: { concurso: 'Publicación corrida al lunes' },
          out: 'El gerente agradece. Rehaces el cronograma: todo se mueve una semana y el cierre cae en plena Feria de Fin de Año. Los tres serenos que esperaba el gerente llegarán más tarde todavía.',
          pro: { ok: 'Antes de publicar, el cronograma todavía se puede ajustar.', risk: 'Cada semana de retraso es una semana más sin personal en las áreas, y abre la puerta a nuevas presiones.' },
          kusi: ['pensando', 'Legal… pero ¿a quién le sirve?'] } },
      { id: 'c', label: 'Publicar hoy solo en el portal institucional y el lunes en Talento Perú, después de la conferencia.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -2 }, flags: ['publicacion_corrida'], cartera: { concurso: 'Publicado solo en el portal; Talento Perú el lunes' },
          out: 'Parece un punto medio, pero la difusión debe ser simultánea en ambos portales. Durante cuatro días, solo quien revisa la web de la municipalidad sabrá del concurso. Casualmente, los más cercanos.',
          pro: { ok: 'Quieres complacer a todos.', risk: 'La difusión en Talento Perú y en el portal debe ser simultánea; publicar en uno solo da ventaja a quienes están cerca.' },
          kusi: ['indignado', '¡Así solo se enteran los de siempre!'] } },
    ],
    rules: [[LEY, 'D.S. 003-2018-TR: difusión simultánea en Talento Perú y en el portal institucional.']],
    mirada: {
      ve: 'El alcalde quiere el crédito político del concurso, y es legítimo que lo anuncie. Lo que no puede pasar es que el anuncio mande sobre el cronograma. Una buena salida le da a cada quien lo suyo: al alcalde, su anuncio; a la ciudad, su plazo.',
      visual: { tipo: 'matriz', x: 'Riesgo para el concurso', y: 'Lo que gana el alcalde', cuadrantes: ['Anuncio sin riesgo', 'Anuncio con riesgo', 'Ni uno ni otro', 'Riesgo sin anuncio'], items: [['Publicar hoy', .1, .65], ['Esperar al lunes', .4, .85], ['Solo en el portal', .85, .7]] },
    },
  },
  {
    id: 'i4', t: '13:20', ch: 'llamada', who: null, titulo: 'Las primeras llamadas', banner: 'assets/foto2/callcenter.webp', lugar: 'Teléfono fijo de la ORH', show: ['personas', 'tiempo', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('publicado_hoy') ? 'El concurso ya está en Talento Perú.' : 'El concurso todavía no está publicado, pero ya corrió la voz.'} El teléfono no para. Contestas tres llamadas seguidas mientras almuerzas un tamal frío.</p><p><mark class="clave">Cada una te pide algo distinto</mark>.</p>`,
    type: 'calls',
    calls: [['Señora Elmira Cáceres · Encañada', 'Llama desde una cabina', '«Señorita, yo hablo quechua y castellano, pero no sé usar la computadora. ¿Puedo postular a fiscalizadora llevando mis papeles en físico?»'], ['Ing. Brayan Terrones · postulante', 'Llama con voz nerviosa', '«Me dijeron que hubo un tema con mi tío en el comité. Yo quiero postular como cualquiera. ¿Puedo o no?»'], ['Cmdte. Cabanillas · Serenazgo', 'Llama desde la camioneta', '«Ya me preguntaron tres chicas si pueden postular a sereno. Les dije que sí, que la prueba es igual para todos. ¿Bien dicho?»']],
    prompt: 'Terminaste las llamadas. ¿Qué haces con ellas?',
    choices: [
      { id: 'a', label: 'Responder a todas lo que dicen las bases y agregar las tres preguntas, sin nombres, al documento público de consultas.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 3 }, cartera: { consultas: 'Tres consultas respondidas y publicadas' },
          out: 'El documento de consultas tiene tres respuestas nuevas: postulación en físico por mesa de partes, sin impedimento para postular por parentesco (la abstención es del evaluador) y prueba física igual para todas las personas.',
          pro: { ok: 'Lo que pregunta uno, probablemente lo duda otro. Publicarlo iguala la información.', info: 'Que la señora Elmira sepa que puede pedir ayuda en mesa de partes para llenar los formatos.' },
          kusi: ['feliz', '¡Una respuesta para uno, para todos!'] } },
      { id: 'b', label: 'Responder a cada uno por teléfono y seguir con lo urgente.',
        res: { q: 'aceptable', fx: { personas: 3, tiempo: 1 }, cartera: { consultas: 'Respondidas por teléfono' },
          out: 'Los tres quedan bien atendidos. Las mismas preguntas te las harán otras veinte personas antes del lunes.',
          pro: { ok: 'Atiendes con calidez.', risk: 'Lo que respondes por teléfono no queda escrito ni llega a los demás.' },
          kusi: ['pensando', '¿Y los otros veinte que preguntarán lo mismo?'] } },
    ],
    mirada: { ve: 'Las primeras llamadas muestran quiénes postulan de verdad: una señora quechuahablante de la Encañada, un ingeniero con un apellido incómodo, tres mujeres que quieren ser serenas. El concurso empieza a tener caras.' },
  },
  {
    id: 'i5', t: '15:10', ch: 'whatsapp', who: null, titulo: 'El comunicado', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Tu escritorio', show: ['confianza', 'calidad', 'etica'],
    body: () => `<p>En Facebook, debajo de la publicación de la municipalidad, ya hay 140 comentarios. «Ya están separadas las plazas.» «¿Hay que tener vara?» «¿Y los que no somos del distrito?» Imagen Institucional te pide un texto corto para fijar arriba.</p><p><mark class="clave">Claro, para todos y sin defenderse</mark>.</p>`,
    type: 'compose', enviaA: 'prensa', para: 'Para: Imagen Institucional · Redes de la municipalidad', boton: 'Enviar el texto',
    prompt: 'Arma el comunicado eligiendo una frase de cada parte.',
    slots: [
      { id: 'quien', t: 'Quién puede postular', ops: [
        { id: 'q1', t: 'Cualquier persona que cumpla los requisitos de las bases puede postular, viva donde viva.', ok: true, por: 'Responde a la duda más repetida.' },
        { id: 'q2', t: 'Se prioriza a los vecinos del distrito, como prometió el alcalde.', ok: false, por: 'No es cierto y sería discriminatorio.' },
      ] },
      { id: 'como', t: 'Cómo se elige', ops: [
        { id: 'c1', t: 'Las plazas se ganan por puntaje, en etapas cuyos resultados se publican.', ok: true, por: 'Contesta al «ya están separadas» con hechos.' },
        { id: 'c2', t: 'Es falso que haya plazas separadas, y quien lo diga será denunciado.', ok: false, por: 'Amenazar no genera confianza.' },
      ] },
      { id: 'donde', t: 'Dónde informarse', ops: [
        { id: 'd1', t: 'Bases, cronograma y respuestas a consultas: en Talento Perú y en el portal institucional.', ok: true, por: 'Lleva a la fuente oficial.' },
        { id: 'd2', t: 'Más información por mensaje privado a esta página.', ok: null, por: 'Las respuestas privadas no llegan a todos.' },
      ] },
    ],
    res: sel => {
      const mal = sel.quien === 'q2' || sel.como === 'c2', buenas = ['q1', 'c1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -3 : 1, calidad: q === 'buena' ? 3 : 0, etica: sel.quien === 'q2' ? -4 : 1 },
        flags: q === 'buena' ? ['comunicado_claro'] : [],
        out: q === 'buena' ? 'Imagen fija el comunicado. En una hora, los comentarios cambian: «¿Y dónde veo el cronograma?». Es otra conversación.' : mal ? 'El comunicado sale y los comentarios se multiplican. Ahora la discusión es sobre lo que dijo la municipalidad.' : 'El comunicado sale. Algunas dudas siguen llegando por mensaje privado.',
        pro: { ok: 'Un comunicado breve y verificable apaga más rumores que una defensa.', risk: 'Prometer preferencias o amenazar alimenta el rumor.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Rumor desactivado!' : 'Eso va a encender más comentarios.'],
      };
    },
    mirada: {
      ve: 'En una ciudad donde «todo está arreglado» es casi un refrán, cada concurso empieza con la sospecha en contra. Un comunicado claro no la elimina, pero la convierte en preguntas que sí se pueden responder.',
      visual: { tipo: 'mensaje', titulo: 'El comunicado fijado', txt: 'Cualquier persona que cumpla los requisitos puede postular, viva donde viva. Las plazas se ganan por puntaje y los resultados se publican. Bases y consultas: en Talento Perú y en el portal institucional.' },
    },
  },
  {
    id: 'i6', t: '16:50', ch: 'presencial', who: null, titulo: 'El primer expediente', banner: 'assets/foto/cv-mano.webp', lugar: 'Mesa de partes', show: ['personas', 'cumplimiento', 'tiempo'],
    body: () => `<p>La señora de Jesús espera en mesa de partes con su bebé en la manta y un fólder de plástico. Viajó una hora en combi. Su expediente tiene todo, menos una copia de su DNI.</p><p>Faltan diez minutos para que cierre mesa de partes. <mark class="clave">¿Qué haces?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Recibirle el expediente con cargo y explicarle que tiene hasta el cierre de la postulación para completar la copia, como dicen las bases para todos.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 2 }, flags: ['primer_expediente'],
          out: 'La señora sonríe y guarda el cargo en el fólder como si fuera un tesoro. «Gracias, señorita. Vuelvo el lunes con la copia.» Don Segundo le regala un pan de Baños del Inca para el camino.',
          pro: { ok: 'Aplicas la regla que vale para todos, con amabilidad.', info: 'Verifica que las bases digan claro hasta cuándo se puede completar un expediente.' },
          kusi: ['celebra', '¡El primer expediente! Con cargo y todo.'] } },
      { id: 'b', label: 'Sacarle tú la copia del DNI en la fotocopiadora de la ORH para que no tenga que volver.',
        res: { q: 'aceptable', fx: { personas: 5, cumplimiento: -1 }, flags: ['primer_expediente'],
          out: 'La señora se va feliz. Es un gesto pequeño, pero si mañana otra persona pide lo mismo y no estás tú, el trato no será igual.',
          pro: { ok: 'Le ahorras un viaje largo.', risk: 'Lo que haces por una persona en un concurso debería poder hacerse por todas.', info: 'Si se ofrece, que sea un servicio de mesa de partes para cualquiera, no un favor tuyo.' },
          kusi: ['pensando', 'Lindo gesto… ¿para todos igual?'] } },
    ],
    mirada: { ve: 'El concurso ya no es un expediente en tu escritorio: es una señora con su bebé que viajó una hora. La regla igual para todos también puede aplicarse con calidez.' },
  },
];
