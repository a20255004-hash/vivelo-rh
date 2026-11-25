// Coordinador/a de Gestión Humana · Capítulo 6 · «Tu asistente» · Semana 2, lunes.
// Hilo de las dos semanas: Lácteos del Altiplano (ficticia), plantas de Juliaca y Ayaviri, 350 trabajadores.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733, art. 2 num. 5 (la información de salud es dato sensible), art. 7 (proporcionalidad) y art. 17
//   (confidencialidad de quienes intervienen en el tratamiento). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - Constitución Política del Perú, art. 2 inc. 2: nadie debe ser discriminado por motivo de origen, idioma, condición
//   económica o de cualquier otra índole. https://www.congreso.gob.pe/constitucion/

export const CAP = {
  n: 6, titulo: 'Tu asistente', dia: 'Semana 2, lunes', foto: 'assets/foto/mentora.webp',
  lugar: 'Lácteos del Altiplano · Oficina de Gestión Humana, Juliaca',
  inicio: '07:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Lunes. Empieza la segunda semana. A las 7:41, mientras subes las escaleras, vibra el celular: en el grupo de supervisores, Nely acaba de publicar la foto de un certificado médico. Con el diagnóstico a la vista.', boton: 'Abrir el grupo',
  kusi: 'Es la tercera vez. Hoy no se trata de corregir un archivo: se trata de ayudar a Nely a entender por qué.',
  lead: 'Contuviste el daño sin exponer a Nely, preparaste una conversación difícil, la tuviste con respeto y claridad, encontraste por qué se repetía el error y lo convertiste en un procedimiento y un plan.',
  reflexion: 'Cuando alguien comete el mismo error tres veces, ¿cuánto de ese error es suyo y cuánto es del sistema que lo rodea?',
  siguiente: { n: 7, titulo: 'Los indicadores', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'nely', p: 'Retroalimentación a Nely', j: 'Tú', d: 5, e: 'Hoy' },
  { id: 'salud', p: 'Procedimiento de descansos médicos', j: 'Tú · Nely', d: 5, e: 'No existe' },
  { id: 'turnos', p: 'Acta de turnos', j: 'Teodoro · Lidia', d: 5, e: 'Primer día del traslape' },
  { id: 'ayaviri', p: 'Salida de Freddy', j: 'Edwin · Yesenia', d: 5, e: 'Entrega de cargo el jueves' },
  { id: 'indicadores', p: 'Indicadores para el directorio', j: 'Gerencia General', d: 5, e: 'Llega mañana' },
];

export const FUTURO = {
  foto_contenida: ['Sacaste la foto del grupo sin exponer a Nely.', 'Ella sabrá que la cuidaste.'],
  nely_expuesta: ['Corregiste a Nely delante de nueve supervisores.', 'Nely llegará mañana con los ojos hinchados.'],
  feedback_claro: ['Le diste a Nely una retroalimentación clara y respetuosa.', 'Sabe qué hizo, qué causó y qué se espera.'],
  feedback_suave: ['Tu retroalimentación fue tan suave que Nely no entendió que era grave.', 'Puede haber una cuarta vez.'],
  feedback_duro: ['Le hablaste a Nely de memorándum y sanciones.', 'Nely tiene miedo de equivocarse… y de preguntarte.'],
  procedimiento_salud: ['Hay un procedimiento escrito para los descansos médicos.', 'Lo usarás mañana con los indicadores.'],
  apaza_limite: ['Le dijiste al Ing. Apaza que los diagnósticos no salen de Gestión Humana.', 'No le gustó, pero lo entendió.'],
  apaza_cede: ['Aceptaste mandar los diagnósticos al Ing. Apaza.', 'El problema que viniste a corregir, ahora lo haces tú.'],
  nely_plan: ['Nely tiene un plan con acuerdos tuyos y suyos.', 'Lo revisarán el viernes.'],
};

export const CHATS = {
  equipo: { n: 'Gestión Humana LDA', sub: 'Nely, Yesenia y tú', c: '#2F6B3F' },
  mariela: { n: 'Mariela Quispe', sub: 'Gerenta de Administración', who: 'mariela' },
  nely: { n: 'Nely Mamani', sub: 'Asistente de RR.HH. · Juliaca', who: 'asistente' },
  yesenia: { n: 'Yesenia Condori', sub: 'Asistente de RR.HH. · Ayaviri', c: '#8A4B2A' },
  supervisores: { n: 'Supervisores Juliaca', sub: '9 participantes · Nely es administradora', c: '#1F5E8C' },
  rolando: { n: 'Ing. Rolando Apaza', sub: 'Jefe de Producción · Juliaca', c: '#4A5A6A' },
  linea: { n: 'Línea de yogurt · supervisión', sub: 'Teodoro, Lidia, Ing. Rolando y tú', c: '#1F5E8C' },
};

export const WSP = [
  { chat: 'linea', t: '06:20', de: 'Teodoro', txt: 'Primer traslape. Línea limpia y firmada. A ver cuánto dura 🙂', si: 'acta_turnos' },
  { chat: 'supervisores', t: '07:41', de: 'Nely', txt: '📷 Certificado de incapacidad de Rómulo Ticona. Justifica sus faltas del jueves y viernes. Ing. Apaza, ahí está la prueba que pidió.' },
  { chat: 'supervisores', t: '07:44', de: 'Sup. Lidia Pari', txt: '😬' },
  { chat: 'rolando', t: '07:58', de: 'Rolando', txt: 'Bien que la chica mande pruebas. Así se acaban los descansos truchos.' },
  { chat: 'yesenia', t: '10:05', de: 'Yesenia', txt: 'Aquí Edwin ya firma las órdenes de acopio con el inge al lado. Los ganaderos preguntan por usted para el jueves.' },
  { chat: 'nely', t: '12:15', de: 'Nely', txt: 'Ya escribí el paso a paso. ¿Lo revisamos a las 3? Quiero que quede bien esta vez.', si: 'feedback_claro' },
  { chat: 'mariela', t: '16:40', de: 'Mariela', txt: 'Apaza vino a quejarse de que «Gestión Humana esconde información». Le dije que hablara contigo. ¿Todo bien?' },
];

export const CORREOS = [
  { t: '08:00', de: 'Alfonso Pacheco · Gerencia General', para: 'Administración; Gestión Humana', asunto: 'Indicadores para el directorio', html: '<p>El directorio se reúne el jueves. Quiero mañana a primera hora rotación, ausentismo y horas extra de las dos plantas. Y una lista de los trabajadores con más faltas.</p><p>A. Pacheco</p>' },
];

export const QUIZ = [
  { q: '¿Qué tiene una buena retroalimentación sobre un error?', ops: ['Un sándwich de elogios', 'La situación, lo que hizo, el impacto y lo que se espera, con espacio para escuchar', 'Una advertencia de sanción', 'Una lista de todos sus errores'], ok: 1, por: 'Concreta, sobre la conducta y no la persona, y abierta a entender qué pasó.' },
  { q: 'Un error se repite tres veces. Antes de sancionar conviene…', ops: ['Sancionar de inmediato', 'Revisar si la persona sabe por qué es un error y si el sistema la empuja a cometerlo', 'Quitarle la tarea', 'Hablar con sus compañeros'], ok: 1, por: 'Si el procedimiento no existe o la presión viene de un jefe, el error volverá con cualquier persona.' },
  { q: 'Un jefe de producción pide ver los diagnósticos para «detectar descansos falsos». ¿Qué corresponde?', ops: ['Mandárselos, es jefe', 'Explicar que la salud es dato sensible y que Gestión Humana valida la justificación', 'Mandarle solo los de su área', 'Ignorarlo'], ok: 1, por: 'La información de salud es dato sensible (Ley 29733, art. 2 num. 5) y quien la trata debe guardar confidencialidad (art. 17).' },
  { q: 'Tu asistente publica un dato sensible en un grupo de WhatsApp. ¿Qué haces primero?', ops: ['La corriges en el grupo para que todos aprendan', 'Le pides en privado que lo retire y cuidas que el grupo no lo reenvíe', 'Esperas a la reunión de la tarde', 'Sales del grupo'], ok: 1, por: 'Primero contener el daño; después, conversar en privado.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '07:45', ch: 'whatsapp', who: null, titulo: 'La foto en el grupo', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'personas', 'etica'],
    body: (n, F) => `<p>Amplías la foto en la escalera. Es el certificado de Rómulo Ticona, operario de 47 años: nombre, DNI y el diagnóstico completo. Lo han visto nueve supervisores. ${F.has('salud_detectada') ? 'Hace una semana viste la columna de diagnósticos; el jueves Nely mandó otro certificado por correo a Lidia. Esta es la tercera vez.' : 'Mariela te cuenta después que no es la primera vez: ya pasó con el Excel y con un correo a Lidia.'}</p><p>Tienes que actuar <mark class="clave">antes de que alguien la reenvíe</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Escribir a Nely en privado para que la borre para todos ahora, y luego poner en el grupo: «Se retiró una imagen con datos personales. Las justificaciones las valida Gestión Humana».',
        res: { q: 'buena', fx: { cumplimiento: 4, personas: 4, etica: 3 }, flags: ['foto_contenida'], cartera: { salud: 'Foto retirada a las 7:49' },
          out: 'A las 7:49 la foto desaparece. Nely te escribe: «Perdón, perdón, perdón». Le respondes: «A las 10:30 conversamos. Tranquila».',
          pro: { ok: 'Contienes el daño rápido y sin exponer a nadie.', info: 'Pide también a los supervisores que borren la imagen si la descargaron.' },
          kusi: ['pensando', 'Primero el daño, después la conversación.'] } },
      { id: 'b', label: 'Escribir en el grupo: «Nely, eso no se publica. Bórralo ya, por favor».',
        res: { q: 'riesgosa', fx: { cumplimiento: 3, personas: -5 }, rel: { asistente: -1 }, flags: ['nely_expuesta'], cartera: { salud: 'Foto retirada; Nely expuesta' },
          out: 'Nely la borra en un minuto. Luego, nada. El Ing. Apaza responde con un emoji de risa. Nely no baja a desayunar.',
          pro: { ok: 'La foto sale rápido.', risk: 'Corregir en público a tu asistente delante de nueve jefes le quita autoridad y le enseña a esconder errores.' },
          kusi: ['triste', 'Rápido sí… pero delante de todos.'] } },
      { id: 'c', label: 'No decir nada por ahora: a las 10:30 ya tienes reunión con ella.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, etica: -2 },
          out: 'A las 10 la foto sigue ahí. Un supervisor ya la reenvió a otro grupo «para que vean que Rómulo sí estaba enfermo».',
          pro: { ok: 'Evitas una reacción en caliente.', risk: 'Cada minuto que la foto sigue publicada, el dato de salud de Rómulo llega a más gente.' },
          kusi: ['indignado', '¡Ya la reenviaron!'] } },
    ],
    rules: [[LEY, 'La información de salud es dato sensible (Ley 29733, art. 2 num. 5).'], [LEY, 'Quienes intervienen en el tratamiento deben guardar confidencialidad (Ley 29733, art. 17).']],
    mirada: {
      ve: 'Ante un error con datos sensibles, el orden importa: primero contener, después conversar. Y contener no requiere exponer a quien se equivocó. La forma en que corriges hoy define si Nely te contará el próximo error o lo esconderá.',
      visual: { tipo: 'flujo', titulo: 'Ante un dato sensible publicado', pasos: ['Retirarlo ya', 'Pedir que no se reenvíe', 'Aviso neutro al grupo', 'Conversación en privado'], aqui: 0 },
    },
  },
  {
    id: 'f2', t: '08:40', ch: 'documento', who: null, titulo: 'Preparar la conversación', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'personas'],
    body: () => `<p>Te encierras veinte minutos en la sala pequeña con un cuaderno. Nunca le has dado una retroalimentación difícil a alguien tan tímido.</p><p>La escribes antes de decirla. <mark class="clave">Hechos, no adjetivos.</mark></p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de tu guion.', boton: 'Guardar el guion',
    bloques: [
      { id: 'sit', t: 'Situación y conducta', n: 2, ops: [
        { id: 's1', t: 'Hoy a las 7:41 publicaste en el grupo de supervisores el certificado de Rómulo con su diagnóstico.', ok: true },
        { id: 's2', t: 'Es la tercera vez que un diagnóstico sale de Gestión Humana: el Excel, el correo a Lidia y hoy.', ok: true, por: 'El patrón es lo que hace necesaria la conversación.' },
        { id: 's3', t: 'Siempre eres un poco descuidada con la información.', ok: false, por: '«Siempre» y «descuidada» hablan de la persona, no de lo que hizo.' },
      ] },
      { id: 'imp', t: 'Impacto', n: 2, ops: [
        { id: 'i1', t: 'Nueve personas conocen la salud de Rómulo sin necesitarlo, y él no lo autorizó.', ok: true },
        { id: 'i2', t: 'La empresa puede ser sancionada y Rómulo puede perder la confianza en el área.', ok: true },
        { id: 'i3', t: 'Me hiciste quedar mal con la gerencia.', ok: false, por: 'Centra la conversación en ti, no en Rómulo ni en el aprendizaje.' },
      ] },
      { id: 'ped', t: 'Pedido y escucha', n: 2, ops: [
        { id: 'p1', t: 'Quiero entender qué pasó esta mañana: ¿qué te llevó a publicarlo?', ok: true, por: 'Preguntar antes de concluir.' },
        { id: 'p2', t: 'Lo que espero: que la justificación de una falta salga de Gestión Humana como «justificada», sin el certificado.', ok: true },
        { id: 'p3', t: 'Que no vuelva a pasar o tendré que tomar medidas.', ok: false, por: 'La amenaza cierra la conversación justo cuando necesitas que se abra.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, personas: q === 'buena' ? 2 : 0 },
        cartera: { nely: q === 'buena' ? 'Guion: hechos, impacto, pregunta y pedido' : 'Guion con juicios' },
        out: q === 'buena' ? 'Tu guion cabe en media página. Lo lees dos veces en voz baja. Ya no suena a regaño: suena a conversación.' : 'El guion tiene hechos, pero también frases que Nely va a escuchar como un juicio sobre ella.',
        pro: { ok: 'Situación, conducta, impacto, una pregunta y un pedido claro.', risk: 'Los adjetivos («descuidada») y las amenazas hacen que la persona se defienda en vez de aprender.', info: 'Escribir antes evita que los nervios hablen por ti.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Hechos, no adjetivos!' : 'Hay frases que van a doler sin enseñar.'],
      };
    },
    rules: [[BP, 'Retroalimenta la conducta, no a la persona: situación, conducta, impacto y pedido.']],
    mirada: {
      ve: 'Una retroalimentación difícil no se improvisa. Prepararla te obliga a separar lo que pasó de lo que sientes, y a pensar qué quieres que la otra persona haga distinto mañana. Lo demás es desahogo.',
      visual: { tipo: 'flujo', titulo: 'La estructura de tu conversación', pasos: ['Situación', 'Conducta', 'Impacto', 'Pregunta', 'Pedido'] },
    },
  },
  {
    id: 'f3', t: '10:30', ch: 'presencial', who: 'asistente', titulo: 'La conversación', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Sala pequeña de Gestión Humana', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Nely entra con su libreta apretada contra el pecho. ${F.has('nely_expuesta') ? 'Tiene los ojos rojos desde la mañana.' : 'Se sienta en el borde de la silla.'} Afuera se escucha el compresor de la cámara de frío.</p><p>Antes de que digas nada, ella dice: «<mark class="clave">Ya sé. Me va a botar.</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no, que estás para que aprenda; contarle lo que pasó y su impacto, sin adjetivos, y preguntarle qué la llevó a publicarlo.',
        res: { q: 'buena', fx: { personas: 5, confianza: 4, calidad: 2 }, rel: { asistente: 1 }, flags: ['feedback_claro'], cartera: { nely: 'Conversación hecha: ella entendió el porqué' },
          out: 'Nely llora un poco y después habla: el Ing. Apaza le dijo el viernes que, sin prueba, marcaría a Rómulo con falta injustificada. Ella creyó que «justificar» era mostrar el certificado.',
          pro: { ok: 'Claridad sobre el error y seguridad sobre su lugar: las dos cosas a la vez.', info: 'Lo que Nely contó cambia el problema: hay alguien presionándola.' },
          kusi: ['feliz', 'Claro y humano. Así se aprende.'] } },
      { id: 'b', label: 'Tranquilizarla primero con todo lo que hace bien y mencionar lo de hoy casi al final, sin darle mucho peso.',
        res: { q: 'aceptable', fx: { personas: 2, calidad: -2 }, flags: ['feedback_suave'], cartera: { nely: 'Conversación suave: el mensaje no llegó' },
          out: 'Nely sale aliviada. Cuando una compañera le pregunta qué pasó, dice: «Nada, me felicitó». El error de hoy quedó enterrado entre elogios.',
          pro: { ok: 'Nely no se siente atacada.', risk: 'Si el mensaje importante se diluye, la persona no entiende que fue grave. Habrá cuarta vez.' },
          kusi: ['pensando', '¿Entendió que era importante?'] } },
      { id: 'c', label: 'Decirle que es la tercera vez y que, si se repite, tendrás que pasar un memorándum.',
        res: { q: 'riesgosa', fx: { personas: -5, cumplimiento: 1 }, rel: { asistente: -1 }, flags: ['feedback_duro'], cartera: { nely: 'Advertencia de memorándum' },
          out: 'Nely asiente sin levantar la mirada. No te cuenta lo del Ing. Apaza. Esa tarde no te pregunta nada, aunque tiene tres dudas.',
          pro: { ok: 'Queda clara la gravedad.', risk: 'Con miedo, la gente deja de preguntar y empieza a esconder. Te perdiste por qué lo hizo.' },
          kusi: ['triste', 'Ahora tiene miedo… y no te contó lo importante.'] } },
    ],
    rules: [[BP, 'Una retroalimentación difícil es clara sobre el error y segura sobre la persona.']],
    mirada: {
      ve: 'Las personas tímidas suelen escuchar una crítica como una sentencia. Por eso la primera frase importa tanto: «no te voy a botar, estoy aquí para que aprendas» no suaviza el error, le da espacio para que se entienda.',
      visual: { tipo: 'balanza', a: { t: 'Lo que Nely teme', items: ['Que la boten', 'Que piensen que es torpe', 'Defraudarte'] }, b: { t: 'Lo que necesita', items: ['Saber por qué es grave', 'Saber qué hacer distinto', 'Poder preguntar sin miedo'] } },
    },
  },
  {
    id: 'f4', t: '11:40', ch: 'documento', who: null, titulo: '¿Por qué se repite?', banner: 'assets/esc/piensa.webp', show: ['calidad', 'personas'],
    body: (n, F) => `<p>Vuelves a tu escritorio con una pregunta: si fuera otra persona en el lugar de Nely, ¿habría pasado lo mismo? ${F.has('feedback_claro') ? 'Lo que te contó sobre el Ing. Apaza no se te va de la cabeza.' : 'No sabes bien qué la llevó a hacerlo.'}</p><p>Eliges <mark class="clave">tres causas</mark> para trabajar.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres causas que vas a atender.', boton: 'Atender estas', resumen: 'Elegiste',
    cols: ['Causa', 'Lo que sabes'],
    rows: [
      { id: 'proc', cells: ['No hay procedimiento escrito de descansos médicos', 'Cada uno hace lo que cree'] },
      { id: 'presion', cells: ['Un jefe le exige «pruebas» a la asistente', 'El Ing. Apaza amenazó con marcar falta injustificada'] },
      { id: 'porque', cells: ['Nadie le explicó el porqué de la regla', 'Solo le dijeron «borra la columna»'] },
      { id: 'despistada', cells: ['Nely es despistada', 'Lo dijo un supervisor'] },
      { id: 'joven', cells: ['Es muy joven para el puesto', 'Tiene 24 años'] },
      { id: 'grupo', cells: ['Nely administra un grupo de WhatsApp con jefes', 'Es el canal donde todo se pide'] },
    ],
    score: { proc: 3, presion: 3, porque: 2, grupo: 2, despistada: -3, joven: -3 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, etica: picks.includes('joven') || picks.includes('despistada') ? -3 : 1 },
        out: q === 'buena' ? 'Te das cuenta de algo incómodo: con este sistema, cualquiera habría cometido el error. Y tú le encargaste el Excel sin escribir el procedimiento.' : picks.includes('joven') ? 'Concluyes que es un tema de edad. Es una conclusión fácil y también es injusta.' : 'Eliges causas reales, pero dejas fuera la presión que la empujó esta mañana.',
        pro: { ok: 'Mirar el sistema antes que a la persona evita que el error se repita con la siguiente.', risk: 'Atribuirlo a la edad o al carácter es una etiqueta, no una causa que puedas cambiar.', info: 'Revisa también tu parte: el encargo del martes no incluía un procedimiento.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Mirar el sistema, no solo a Nely!' : 'Esa causa no la puedes cambiar…'],
      };
    },
    rules: [[LEY, 'Nadie debe ser discriminado por motivo de origen, idioma, condición económica o de cualquier otra índole (Constitución, art. 2 inc. 2).'], [BP, 'Si un error se repite, revisa el procedimiento y las presiones, no solo a la persona.']],
    mirada: {
      ve: 'La tercera vez de un error es una invitación a mirar más allá de la persona: ¿estaba escrito cómo hacerlo?, ¿alguien la presionaba?, ¿le explicaron por qué? Cuando la coordinación encuentra su propia parte, la retroalimentación deja de ser un juicio y se vuelve un trabajo de dos.',
      visual: { tipo: 'matriz', x: 'Depende de la persona', y: 'Peso en el error', cuadrantes: ['Del sistema: cámbialo', 'De los dos: acuérdalo', 'Menor', 'Etiqueta: descártala'], items: [['Sin procedimiento', .1, .9], ['Presión del jefe', .15, .85], ['Sin el porqué', .3, .7], ['Grupo de WhatsApp', .25, .55], ['«Despistada»', .8, .1], ['«Muy joven»', .85, .05]] },
    },
  },
  {
    id: 'f5', t: '14:00', ch: 'documento', who: null, titulo: 'El procedimiento', banner: 'assets/esc/idea.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Lo escribes con Nely, en su computadora y con sus palabras. Lo van a usar ella, Yesenia y los nueve supervisores.</p><p>Una página. <mark class="clave">El orden es lo que protege a la gente.</mark></p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para tramitar un descanso médico. Usa las flechas.', boton: 'Guardar el procedimiento',
    items: [
      { id: 'rec', t: 'El trabajador entrega el certificado a Gestión Humana, no al supervisor', por: 'El dato sensible entra por una sola puerta.' },
      { id: 'ver', t: 'Gestión Humana verifica que el documento sea válido', por: 'Si hay dudas, se revisan con quien lo emitió, no se exponen.' },
      { id: 'leg', t: 'El certificado se archiva en el legajo, con acceso restringido', por: 'El diagnóstico se queda ahí.' },
      { id: 'sup', t: 'Al supervisor se le informa solo: «falta justificada del día X al día Y»', por: 'Lo que necesita para organizar el turno.' },
      { id: 'est', t: 'Se envía al estudio lo necesario para la planilla, por la carpeta segura', por: 'Solo los datos que el cálculo necesita.' },
      { id: 'reg', t: 'Se registra en el archivo de asistencia como «justificada», sin el motivo', por: 'Así nadie vuelve a crear la columna.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 4 : 0 },
        flags: q !== 'riesgosa' ? ['procedimiento_salud'] : [], cartera: { salud: q === 'riesgosa' ? 'Procedimiento desordenado' : 'Procedimiento de descansos médicos escrito' },
        out: q === 'buena' ? 'Nely lo imprime y lo firma como autora, junto contigo. «Ahora sí sé qué responder si me piden la foto.»' : 'El procedimiento tiene los pasos, pero el certificado pasa por el supervisor antes de llegar a Gestión Humana.',
        pro: { ok: 'Una sola puerta de entrada y una salida que solo dice «justificada».', risk: 'Si el certificado pasa primero por el supervisor, el procedimiento protege poco.', info: 'Que Nely lo firme como autora le da autoridad frente a los supervisores.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Escrito por ella, con sus palabras!' : 'Casi: ¿por dónde entra el certificado?'],
      };
    },
    rules: [[LEY, 'El tratamiento de datos debe ser adecuado, relevante y no excesivo a su finalidad (Ley 29733, art. 7).']],
    mirada: {
      ve: 'Un procedimiento escrito no es burocracia: es lo que permite que una asistente de 24 años le diga que no a un jefe de producción sin sentir que es su opinión contra la de él. Ahora es el procedimiento del área.',
      visual: { tipo: 'flujo', titulo: 'Un descanso médico, paso a paso', pasos: ['Entrega a GH', 'Verificación', 'Legajo restringido', 'Supervisor: «justificada»', 'Estudio: lo necesario', 'Registro sin motivo'] },
      normas: [{ ley: 'Ley 29733, art. 7 (proporcionalidad)', dice: 'Todo tratamiento de datos personales debe ser adecuado, relevante y no excesivo a la finalidad para la que estos hubiesen sido recopilados.', practica: 'El supervisor organiza turnos: le basta saber que la falta está justificada.' }],
    },
  },
  {
    id: 'f6', t: '15:30', ch: 'llamada', who: null, titulo: 'El Ing. Apaza', banner: 'assets/foto/frente-a-frente.webp', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Llamas al Ing. Rolando Apaza antes de que vuelva a hablar con Mariela. Contesta desde la línea, con ruido de envasadora.</p><p>«Mire, aquí hay gente que se saca descansos truchos. Si no veo el diagnóstico, ¿cómo sé quién me engaña? <mark class="clave">Mándenme los certificados a mí y yo veo.</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que la salud es dato sensible, que Gestión Humana verifica la validez de cada certificado y que él recibirá siempre «justificada» o «injustificada»; y ofrecerle revisar juntos los casos que le preocupan.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 2 }, flags: ['apaza_limite'],
          out: '«O sea que confíe en ustedes», dice, molesto. «Sí, y si tiene dudas de un caso, lo vemos juntos.» Cuelga sin despedirse, pero en la tarde le dice a Mariela que «ya conversó con Gestión Humana».',
          pro: { ok: 'Pones el límite y le das una salida a su preocupación real.', info: 'La desconfianza en los descansos es un tema real: atiéndelo con verificación, no con exposición.' },
          kusi: ['celebra', 'Límite claro, puerta abierta.'] } },
      { id: 'b', label: 'Aceptar mandarle los certificados de su área: es el jefe y quiere controlar.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -5 }, flags: ['apaza_cede'],
          out: 'El Ing. Apaza queda contento. Nely te mira desde su escritorio: lo que le corregiste en la mañana, tú lo estás haciendo en la tarde.',
          pro: { ok: 'Evitas el conflicto.', risk: 'Desarmas el procedimiento el mismo día que lo escribiste, y le enseñas a Nely que la regla cede ante el más fuerte.' },
          kusi: ['indignado', '¿No era eso lo que le corregiste a Nely?'] } },
      { id: 'c', label: 'Decirle que no es su problema y que cada uno haga su trabajo.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -3 },
          out: 'El Ing. Apaza cuelga y llama a Mariela otra vez: «Gestión Humana no colabora».',
          pro: { ok: 'Mantienes la regla.', risk: 'Sin explicar ni ofrecer nada, el jefe seguirá presionando a Nely por debajo.' },
          kusi: ['pensando', 'Tienes razón… pero así no te va a ayudar.'] } },
    ],
    rules: [[LEY, 'La información de salud es dato sensible (Ley 29733, art. 2 num. 5).'], [LEY, 'Quienes intervienen en el tratamiento deben guardar confidencialidad (Ley 29733, art. 17).']],
    mirada: {
      ve: 'Detrás del error de Nely había un jefe presionando. Si la coordinación solo corrige a la asistente y no pone el límite arriba, el error volverá. Proteger a tu equipo también es tener esta conversación tú, y no dejársela a ella.',
      visual: { tipo: 'mensaje', titulo: 'Lo que recibe el supervisor', txt: 'Rómulo Ticona: falta justificada del jueves al viernes. Si tienes dudas sobre la validez de un descanso, lo revisamos juntos en Gestión Humana.' },
    },
  },
  {
    id: 'f7', t: '17:30', ch: 'whatsapp', who: null, titulo: 'El plan de Nely', banner: 'assets/foto/capacitacion.webp', show: ['personas', 'calidad'],
    body: () => `<p>Antes de que Nely se vaya, le escribes lo que acordaron. No es un memorándum: es <mark class="clave">un acuerdo de dos</mark>, con lo que ella hará y lo que harás tú.</p>`,
    type: 'compose', enviaA: 'nely', para: 'Para: Nely Mamani', boton: 'Enviar el plan',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'ella', t: 'Lo que hará Nely', ops: [
        { id: 'e1', t: 'Tú: aplicas el procedimiento de descansos y, si alguien te pide un certificado, respondes con el procedimiento y me avisas.', ok: true, por: 'Concreto y le da una respuesta lista.' },
        { id: 'e2', t: 'Tú: tienes más cuidado de ahora en adelante.', ok: false, por: '«Más cuidado» no dice qué hacer distinto.' },
      ] },
      { id: 'tu', t: 'Lo que harás tú', ops: [
        { id: 't1', t: 'Yo: hablo con los supervisores para que los pedidos de justificación vengan a mí, no a ti.', ok: true, por: 'Le quitas la presión de encima.' },
        { id: 't2', t: 'Yo: reviso todo lo que mandes antes de que salga.', ok: false, por: 'Es control, no apoyo. Y te devuelve el trabajo que delegaste.' },
      ] },
      { id: 'rev', t: 'Cuándo lo revisan', ops: [
        { id: 'r1', t: 'El viernes, diez minutos, vemos cómo te fue.', ok: true, por: 'Fecha y tono de acompañamiento.' },
        { id: 'r2', t: 'Ya veremos cómo vas.', ok: null, por: 'Correcto, pero sin fecha queda en el aire.' },
      ] },
    ],
    res: sel => {
      const buenas = ['e1', 't1', 'r1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : 0 }, rel: { asistente: q === 'buena' ? 1 : 0 },
        flags: q !== 'riesgosa' ? ['nely_plan'] : [], cartera: { nely: q === 'buena' ? 'Plan acordado: revisión el viernes' : 'Plan vago' },
        out: q === 'buena' ? 'Nely responde: «Gracias. De verdad». Al rato, en el grupo de supervisores aparece el procedimiento, firmado por ella y por ti.' : 'Nely responde «ok». No queda claro qué va a cambiar.',
        pro: { ok: 'Un plan de mejora con compromisos de las dos partes y una fecha.', risk: 'Si todo el compromiso es de ella, el mensaje implícito es «el problema eres tú».', info: 'Cumple tu parte antes del viernes: habla con los supervisores.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Un acuerdo de dos. ¡Qué divino!' : 'Falta algo concreto.'],
      };
    },
    mirada: { ve: 'Un plan de mejora que solo exige a la asistente refuerza la idea de que el problema es ella. Cuando la coordinación también se compromete, el mensaje cambia: «vamos a arreglar esto juntas».' },
  },
  {
    id: 'f8', t: '18:35', ch: 'whatsapp', who: 'asistente', titulo: '«¿Todavía confía en mí?»', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la avenida Circunvalación', show: ['personas', 'confianza'],
    body: () => `<p>Esperas la combi con las manos en los bolsillos. Ya es de noche y el frío corta. Te escribe Nely: «Perdón por todo lo de hoy. <mark class="clave">¿Todavía confía en mí para el tareo?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Responderle que sí, que el tareo sigue siendo suyo, y que hoy aprendió algo que muchos jefes no saben.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, rel: { asistente: 1 },
          envia: [['nely', 'Sí, Nely. El tareo sigue siendo tuyo. Hoy aprendiste algo que muchos jefes todavía no saben: el diagnóstico no sale de Gestión Humana. Mañana te necesito para los indicadores.']],
          out: 'Nely manda un sticker de una llama con lentes. Te ríes solo/a en el paradero.',
          pro: { ok: 'Separas el error de su valor como persona y le devuelves la confianza.', info: 'Mañana la vas a necesitar: los indicadores salen de su Excel.' },
          kusi: ['feliz', '¡La llama con lentes! Ya está mejor.'] } },
      { id: 'b', label: 'Decirle que lo hablan mañana, que ahora estás cansada/o.',
        res: { q: 'aceptable', fx: { personas: -1 },
          out: 'Es verdad que estás agotada/o. Nely no duerme bien esa noche.',
          pro: { ok: 'Cuidas tu descanso.', risk: 'Una respuesta corta y cálida no te costaba nada y a ella le cambiaba la noche.' },
          kusi: ['pensando', 'Dos líneas bastaban…'] } },
    ],
    mirada: { ve: 'Después de una retroalimentación difícil, la persona necesita saber que el error no cambió su lugar en el equipo. Ese mensaje corto, esa noche, es parte de la retroalimentación.' },
  },
];
