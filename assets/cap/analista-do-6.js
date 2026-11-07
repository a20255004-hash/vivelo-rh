// Analista de Desarrollo Organizacional · Capítulo 6 · «La resistencia» · Semana 2, lunes.
// Hilo de las dos semanas: la fusión de la Cooperativa Misti y la Cooperativa Characato en la Cooperativa del Sur (Arequipa).
// Normas citadas:
// - D.S. 007-2002-TR (TUO de la Ley de jornada de trabajo, horario y trabajo en sobretiempo), art. 9: el trabajo en
//   sobretiempo es voluntario, en su otorgamiento y en su prestación; art. 10: se paga con recargo (no se citan porcentajes).
//   https://img.lpderecho.pe/wp-content/uploads/2021/05/Casacion-Laboral-12439-2017-La-Libertad-LP.pdf
//   https://lpderecho.pe/no-firmar-formato-de-autorizacion-de-horas-extra-no-impide-reconocer-autorizacion-tacita-resolucion-613-2020-sunafil/
// Empresas y personas son ficticias.

export const CAP = {
  n: 6, titulo: 'La resistencia', dia: 'Semana 2, lunes', foto: 'assets/foto2/tablet-equipo.webp',
  lugar: 'Cooperativa del Sur · Sede de Cayma, Arequipa',
  inicio: '07:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lunes de la segunda semana. La encuesta de clima salió a las ocho. Y Luz, de Sistemas, trae una noticia: el equipo de créditos de Characato registró en el sistema nuevo solo 12 de cada 100 operaciones. El resto sigue en papel y en un Excel paralelo.', boton: 'Abrir el sistema',
  kusi: 'Cuando un equipo entero dice «no», casi siempre hay una razón que nadie preguntó.',
  lead: 'Buscaste la causa en los datos, escuchaste al equipo, frenaste el castigo, armaste un plan de acompañamiento, encontraste padrinos y le diste a Rocío un papel en la transición.',
  reflexion: '¿Cuándo fue la última vez que te resististe a un cambio en tu trabajo? ¿Qué te hubiera ayudado?',
  siguiente: { n: 7, titulo: 'La conversación', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'sistema', p: 'Adopción del sistema nuevo en créditos', j: 'Luz · Sistemas', d: 0, e: '12 % de operaciones en el sistema' },
  { id: 'duplicados', p: 'Análisis de puestos duplicados', j: 'Ernesto · Gerencia', d: 0, e: 'Créditos se decide hoy' },
  { id: 'comunicacion', p: 'Plan de comunicación del cambio', j: 'Ernesto', d: 0, e: 'Jefes informados el viernes' },
  { id: 'encuesta', p: 'Encuesta de clima', j: 'Gestión Humana', d: 0, e: 'Abierta desde las 8' },
  { id: 'consejo', p: 'Organigrama para el consejo', j: 'Gerencia general', d: 0, e: 'Este jueves' },
];

export const FUTURO = {
  causa_encontrada: ['Encontraste que el reglamento de créditos de Characato sigue exigiendo tres firmas en papel.', 'La resistencia tenía una causa: dos reglas a la vez.'],
  sobretiempo_visto: ['Viste que los analistas de Characato hacen sobretiempo por el doble registro.', 'Ernesto revisará su registro y su pago.'],
  transicion_pactada: ['Propusiste una transición con fecha, reglamento único y acompañamiento.', 'El equipo de Characato tendrá tres semanas y apoyo.'],
  apagado_forzado: ['El Excel paralelo se apagará mañana, con memorandos para quien no use el sistema.', 'El equipo de Characato lo vivirá como un castigo.'],
  excel_tolerado: ['El Excel paralelo sigue sin fecha de cierre.', 'Habrá dos verdades sobre la mora durante semanas.'],
  acompanamiento: ['Hay un plan de acompañamiento en horario de trabajo.', 'Kevin dejará de quedarse hasta las nueve.'],
  padrinos: ['Valeria y Wilber serán padrinos del sistema entre las dos cooperativas.', 'Los verás juntos en el taller del miércoles.'],
  rocio_lidera: ['Le propusiste a Rocío liderar el paso de la cartera agrícola al sistema.', 'Rocío lo pensó toda la noche.'],
};

export const CHATS = {
  gh: { n: 'Gestión Humana · Coop. del Sur', sub: 'Ernesto, Luz y tú', c: '#2F6B3F' },
  ernesto: { n: 'Ernesto Valdivia', sub: 'Jefe de Gestión Humana', who: 'ernesto' },
  rocio: { n: 'Rocío Bedoya', sub: 'Jefa de créditos · ex Characato', who: 'jefa' },
  kevin: { n: 'Kevin Apaza', sub: 'Analista de créditos · ex Characato', who: 'analista' },
  gabriel: { n: 'Gabriel Cornejo', sub: 'Jefe de créditos · ex Misti', c: '#C05621' },
  valeria: { n: 'Valeria Talavera', sub: 'Asesora · Agencia Cayma', c: '#2B6CB0' },
};

export const WSP = [
  { chat: 'gh', t: '07:35', de: 'Luz', txt: 'Datos de la semana: Characato registró 12 de 100 créditos en el sistema. Misti, 100 de 100. Gabriel ya está diciendo que «no quieren trabajar» 🙄' },
  { chat: 'gh', t: '07:50', de: 'Ernesto', txt: 'Las reuniones de los jefes salieron bien. Hilda leyó tu guion en voz alta en la agencia, con socias y todo 😄', si: 'jefes_informados' },
  { chat: 'gh', t: '07:52', de: 'Ernesto', txt: 'La frase de «los que no se adapten» sigue dando vueltas. Hoy nos va a costar.', si: 'comunicado_promesa' },
  { chat: 'kevin', t: '08:20', de: 'Kevin', txt: 'Otra vez hasta las nueve el viernes. Papel para la señora Rocío, sistema para el señor Gabriel. Ya no doy.' },
  { chat: 'gabriel', t: '10:15', de: 'Gabriel', txt: 'Mi propuesta: desde mañana apagamos el Excel y el que no use el sistema, memorando. Así se aprende 💪' },
  { chat: 'valeria', t: '16:00', de: 'Valeria', txt: '¡Claro que sí! Me encanta la idea de ser madrina del sistema. Y quiero aprender cómo evalúan créditos agrícolas 🌽', si: 'padrinos' },
  { chat: 'rocio', t: '18:40', de: 'Rocío', txt: 'Lo voy a pensar. Nadie me había pedido que liderara algo en esta fusión.', si: 'rocio_lidera' },
];

export const CORREOS = [
  { t: '07:40', de: 'Luz Ccama · Sistemas', para: 'Ernesto Valdivia; Analista de DO', asunto: 'Adopción del sistema en créditos', html: '<p>Adjunto el reporte de adopción por agencia y el registro de capacitaciones. Les adelanto: la capacitación del sistema a Characato fue una sesión virtual de dos horas, un jueves a las seis de la tarde.</p><p>Luz</p>' },
  { t: '12:00', de: 'Fernando Linares · Gerencia General', para: 'Ernesto Valdivia', asunto: 'Créditos', html: '<p>Ernesto: acepto evaluar la estructura con una jefatura y dos coordinaciones por segmento. Mañana definimos a las personas.</p><p>F. Linares</p>', si: 'estructura_primero' },
];

export const QUIZ = [
  { q: 'Un equipo no usa el sistema nuevo. Antes de concluir que «se resiste», revisas…', ops: ['La edad del equipo', 'Si las reglas, la capacitación y las herramientas les permiten usarlo', 'Quién es el líder informal para sancionarlo', 'Nada: hay que exigir'], ok: 1, por: 'La resistencia suele tener causas concretas: reglas contradictorias, poca capacitación o un sistema que no sirve para su trabajo.' },
  { q: 'Según el D.S. 007-2002-TR, el trabajo en sobretiempo…', ops: ['Es obligatorio si el jefe lo pide', 'Es voluntario y se paga con recargo', 'No se paga en cooperativas', 'Solo existe los sábados'], ok: 1, por: 'El art. 9 dice que el sobretiempo es voluntario; el art. 10 dispone que se paga con recargo.' },
  { q: 'El jefe de Misti propone memorandos a quien no use el sistema desde mañana. ¿Qué riesgo tiene?', ops: ['Ninguno', 'Castigar una conducta causada por reglas contradictorias y poca capacitación', 'Que sea muy suave', 'Que el sistema se caiga'], ok: 1, por: 'Sancionar antes de resolver las causas convierte el cambio en un castigo.' },
  { q: 'Para que un equipo adopte una herramienta, lo que más ayuda es…', ops: ['Un video largo', 'Práctica en horario de trabajo, con compañeros que ya la usan y una fecha clara', 'Un concurso de memes', 'Quitarle el papel sin aviso'], ok: 1, por: 'Acompañamiento cercano, tiempo pagado y una fecha clara funcionan mejor que la imposición.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 's1', t: '07:50', ch: 'sistema', who: null, titulo: '12 de cada 100', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio, con el reporte de Luz', show: ['calidad', 'tiempo'],
    body: () => `<p>El reporte de Luz tiene seis pestañas. Gabriel ya decidió que el problema es que en Characato «no quieren». Antes de opinar, eliges <mark class="clave">tres datos</mark> para entender qué pasa.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres datos que vas a revisar primero.', boton: 'Revisar estos datos', resumen: 'Revisaste',
    cols: ['Dato', 'Qué te podría decir'],
    rows: [
      { id: 'regl', cells: ['Reglamento de créditos vigente en cada agencia', 'Qué regla aplica hoy cada analista'] },
      { id: 'capac', cells: ['Registro de capacitación del sistema', 'Cómo, cuándo y cuánto se les enseñó'] },
      { id: 'horas', cells: ['Registro de ingreso y salida del equipo de Characato', 'Si están haciendo el trabajo dos veces'] },
      { id: 'tickets', cells: ['Tickets de soporte del sistema por agencia', 'Qué errores reportan'] },
      { id: 'edad', cells: ['Edad promedio del equipo', '«Porque los mayores no saben de tecnología», dice Gabriel'] },
      { id: 'quien', cells: ['Quién del equipo ha hablado mal del sistema', 'Para identificar «a los líderes de la resistencia»'] },
    ],
    score: { regl: 3, capac: 3, horas: 3, tickets: 2, edad: -3, quien: -4 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      const fl = [];
      if (picks.includes('regl')) fl.push('causa_encontrada');
      if (picks.includes('horas')) fl.push('sobretiempo_visto');
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: picks.includes('quien') || picks.includes('edad') ? -4 : 2 },
        flags: fl, cartera: { sistema: picks.includes('regl') ? 'Causa: dos reglamentos de créditos a la vez' : 'Adopción baja, causa sin clara' },
        out: picks.includes('regl') ? 'Lo encuentras en la pestaña 3: el reglamento de créditos de Characato sigue vigente y exige tres firmas en papel para todo crédito agrícola. Nadie lo derogó. El equipo no se resiste: cumple la única regla que tiene por escrito.' : q === 'riesgosa' ? 'Tienes una lista de sospechosos, pero ninguna causa.' : 'Ves que la capacitación fue corta y en mal horario. Te falta una pieza.',
        pro: { ok: 'Buscas causas en las reglas, la capacitación y la carga de trabajo.', risk: 'La edad o una lista de «críticos» no explican la conducta: la etiquetan.', info: 'Revisa también si el sistema tiene campos para garantías agrícolas.' },
        kusi: [picks.includes('regl') ? 'sorpresa' : 'pensando', picks.includes('regl') ? '¡No era resistencia: eran dos reglas!' : 'La causa sigue escondida.'],
      };
    },
    rules: [[BP, 'Antes de hablar de resistencia, revisa reglas, capacitación y carga de trabajo.']],
    mirada: {
      ve: 'La palabra «resistencia» es cómoda: pone el problema en las personas. Muchas veces, el equipo que «se resiste» está atrapado entre dos reglas, con una capacitación de dos horas un jueves a las seis. DO mira primero el sistema, no a la gente.',
      visual: { tipo: 'embudo', titulo: 'Créditos de Characato esta semana', niveles: [['Créditos evaluados', 100], ['Registrados en papel', 100], ['Registrados también en el sistema', 12]] },
    },
  },
  {
    id: 's2', t: '09:10', ch: 'presencial', who: 'jefa', titulo: 'El equipo de Rocío', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Oficina de créditos, segundo piso', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Rocío te deja usar su oficina con su equipo: seis analistas, termos y un rimero de expedientes con ligas. ${F.has('rocio_tranquila') || F.has('rocio_respuesta_clara') ? 'Te saluda con un gesto: no sonríe, pero tampoco te mira con desconfianza.' : 'Rocío se queda de pie en la puerta, con los brazos cruzados.'}</p><p>Tienes media hora. <mark class="clave">Elige dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para el equipo.',
    opts: [
      { id: 'falla', label: '¿Qué les impide registrar un crédito agrícola en el sistema?', info: 'Una analista: «No tiene dónde poner la garantía de alpacas ni la cosecha. Y si no firman los tres, el reglamento dice que el crédito no vale. ¿Quién responde si sale mal?».' },
      { id: 'capac', label: '¿Cómo los capacitaron?', info: '«Una videollamada de dos horas, un jueves a las seis. Se cortó dos veces. Nadie nos preguntó si entendimos.» Kevin agrega: «Y desde entonces hacemos todo dos veces».' },
      { id: 'quieren', label: '¿Qué les gustaría del sistema, si funcionara?', info: '«Que la aprobación no tarde una semana. Los socios se van a otras cajas porque somos lentos.» Rocío, desde la puerta: «Eso es verdad».' },
      { id: 'hora', label: '¿Hasta qué hora se están quedando?', info: 'Silencio. Kevin: «Hasta las nueve, varios días. Nadie nos pidió que nos quedemos… pero si no, el trabajo no sale». Nadie lo ha registrado como sobretiempo.' },
    ],
    res: picks => ({
      q: null, fx: { personas: 4, confianza: 2, cumplimiento: picks.includes('hora') ? 2 : 0 }, rel: { jefa: 1, analista: picks.includes('hora') || picks.includes('capac') ? 1 : 0 },
      flags: picks.includes('hora') ? ['sobretiempo_visto'] : [],
      out: picks.includes('quieren') ? 'Al final, el equipo no habla del sistema como un enemigo: habla de lo que podría ahorrarles. Rocío se sienta por primera vez.' : 'Sales con dos problemas concretos anotados. El equipo te mira distinto: nadie les había preguntado.',
      kusi: ['curioso', 'Preguntaste lo que nadie había preguntado.'],
    }),
    rules: [[LEY, 'El sobretiempo es voluntario y se paga con recargo (D.S. 007-2002-TR, arts. 9 y 10).'], [BP, 'Pregunta qué impide el cambio y qué ganarían con él.']],
    mirada: {
      ve: 'El equipo de Characato no está contra la tecnología: quiere aprobar créditos más rápido. Lo que no quiere es responder por un crédito que el reglamento vigente considera inválido, ni seguir trabajando gratis hasta las nueve.',
      visual: { tipo: 'balanza', a: { t: 'Lo que frena', items: ['Reglamento de tres firmas', 'Sin campo para garantías agrícolas', 'Dos horas de capacitación', 'Doble registro'] }, b: { t: 'Lo que quieren', items: ['Aprobar más rápido', 'No perder socios', 'Volver a casa a tiempo'] } },
    },
  },
  {
    id: 's3', t: '10:40', ch: 'presencial', who: 'ernesto', titulo: '«Desde mañana, memorando»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala 2', show: ['etica', 'personas', 'cumplimiento'],
    body: () => `<p>Gabriel le ha mandado a Ernesto su propuesta: apagar el Excel mañana y memorando a quien no use el sistema. Linares la ve con buenos ojos. Ernesto te mira:</p><p>«Gabriel tiene un punto: no podemos tener dos sistemas para siempre. <mark class="clave">¿Qué le respondo?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Que sí haya fecha de cierre del Excel, pero en tres semanas: antes, un reglamento de créditos único, el campo de garantías agrícolas en el sistema y acompañamiento en horario de trabajo.',
        res: { q: 'buena', fx: { etica: 3, personas: 4, calidad: 3 }, rel: { ernesto: 1 }, flags: ['transicion_pactada'], cartera: { sistema: 'Transición en tres semanas con reglamento único' },
          out: 'Ernesto llama a Legal para el reglamento único y a Luz para el campo de garantías. Gabriel acepta a regañadientes: «Tres semanas. Ni un día más».',
          pro: { ok: 'Mantienes la exigencia del cambio y quitas los obstáculos reales.', risk: 'Tres semanas de convivencia de dos sistemas tienen un costo.', info: 'Publica la fecha: un plazo conocido ordena a todos.' },
          kusi: ['animo', 'Firme en el qué, flexible en el cómo. ¡Así!'] } },
      { id: 'b', label: 'Apoyar a Gabriel: un cambio que no se exige no ocurre, y si dejas el Excel vivo nunca lo van a soltar.',
        res: { q: 'riesgosa', fx: { etica: -3, personas: -5, cumplimiento: -2 }, flags: ['apagado_forzado'],
          out: 'El memorando sale a las 4. El equipo de Characato lo lee como la confirmación de que la fusión es contra ellos. Y el reglamento de tres firmas sigue vigente.',
          pro: { ok: 'Es rápido y claro.', risk: 'Sancionas a un equipo por cumplir una regla que nadie derogó. El problema de fondo sigue ahí.' },
          kusi: ['preocupado', '¿Memorando por cumplir el reglamento?'] } },
      { id: 'c', label: 'Dejar que cada equipo siga como prefiera hasta que pase la fusión: no es momento de más presión.',
        res: { q: 'aceptable', fx: { personas: 2, calidad: -3 }, flags: ['excel_tolerado'],
          out: 'Characato respira. Pero Finanzas tendrá dos cifras de mora distintas al cierre del mes, y Kevin sigue haciendo todo dos veces.',
          pro: { ok: 'Bajas la presión hoy.', risk: 'Sin fecha ni reglas comunes, la doble carga se vuelve permanente.' },
          kusi: ['pensando', '¿Y Kevin hasta las nueve?'] } },
    ],
    rules: [[BP, 'Exige el cambio con fecha, pero primero quita los obstáculos que lo impiden.']],
    mirada: {
      ve: 'Gabriel y Characato tienen razón a la vez: no se pueden tener dos sistemas, y no se puede castigar a quien cumple una regla vigente. El trabajo de DO es encontrar la secuencia que hace posible el cambio, no elegir un bando.',
      visual: { tipo: 'matriz', x: 'Presión para cambiar', y: 'Apoyo para cambiar', cuadrantes: ['Cambio sostenido', 'Comodidad', 'Abandono', 'Castigo'], items: [['Transición en tres semanas', .7, .85], ['Memorando mañana', .9, .1], ['Cada uno como quiera', .1, .4]] },
    },
  },
  {
    id: 's4', t: '12:30', ch: 'documento', who: null, titulo: 'El plan de acompañamiento', banner: 'assets/foto/capacitacion.webp', lugar: 'Tu escritorio', show: ['calidad', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>Almuerzas un pan con palta mientras escribes. ${F.has('transicion_pactada') ? 'Hay tres semanas para cerrar el Excel.' : 'Pase lo que pase con el Excel, el equipo necesita aprender a usar el sistema.'} <mark class="clave">Elige las piezas del plan</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del plan.', boton: 'Guardar el plan',
    bloques: [
      { id: 'como', t: 'Cómo se aprende', n: 2, ops: [
        { id: 'c1', t: 'Práctica presencial, en grupos de tres, con casos reales de crédito agrícola.', ok: true, por: 'Se aprende haciendo el propio trabajo.' },
        { id: 'c2', t: 'Un padrino o madrina de Misti que se siente con ellos la primera semana.', ok: true, por: 'Aprender de un par baja la vergüenza.' },
        { id: 'c3', t: 'Un video de dos horas para ver en casa.', ok: false, por: 'Ya lo intentaron y no funcionó.' },
      ] },
      { id: 'cuando', t: 'Cuándo', n: 1, ops: [
        { id: 'w1', t: 'Dentro de la jornada, con la meta de créditos ajustada esas semanas.', ok: true, por: 'Si se aprende fuera de horario, es sobretiempo.' },
        { id: 'w2', t: 'Los sábados en la mañana, para no afectar la atención.', ok: false, por: 'El sobretiempo es voluntario y se paga. No se puede convertir en obligatorio.' },
      ] },
      { id: 'carga', t: 'La carga de hoy', n: 2, ops: [
        { id: 'k1', t: 'Que Ernesto revise los registros de salida y se reconozcan las horas de más trabajadas.', ok: true, por: 'Si hubo sobretiempo, se reconoce.' },
        { id: 'k2', t: 'Un solo formato de reporte para las dos jefaturas desde hoy.', ok: true, por: 'Acaba con el doble trabajo de inmediato.' },
        { id: 'k3', t: 'Pedirles que no registren la hora de salida para no generar pasivos.', ok: false, por: 'Ocultar el sobretiempo no lo hace desaparecer y es un riesgo legal.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -4 : 3, personas: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['acompanamiento'], cartera: { sistema: q === 'riesgosa' ? 'Plan con riesgos' : 'Plan de acompañamiento en horario de trabajo' },
        out: q === 'buena' ? 'El plan es corto y concreto. Kevin lo lee en la impresora y te escribe solo un emoji: 🙏.' : 'El plan tiene buenas ideas, pero alguna pieza vuelve a cargar a la gente fuera de horario o esconde el problema.',
        pro: { ok: 'Aprender en horario, de un par, con la carga ajustada.', risk: 'Capacitar fuera de la jornada o esconder las horas de salida es un riesgo legal y de confianza.', info: 'Mide la adopción cada viernes y compártela con el equipo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Se acabaron las nueve de la noche!' : 'Revisa el horario y la carga.'],
      };
    },
    rules: [[LEY, 'El sobretiempo es voluntario y se paga con recargo (D.S. 007-2002-TR, arts. 9 y 10).'], [BP, 'Se aprende mejor en horario, con práctica real y con un compañero al lado.']],
    mirada: {
      ve: 'Acompañar un cambio no es dar un curso: es hacer que el nuevo hábito sea posible en el día a día. Eso incluye tiempo dentro de la jornada, metas ajustadas mientras se aprende y que alguien reconozca las horas que ya se trabajaron de más.',
      visual: { tipo: 'cambio', titulo: 'Del video al acompañamiento', pares: [['Videollamada de 2 horas', 'Práctica con casos reales'], ['Jueves a las 6 p. m.', 'Dentro de la jornada'], ['Solos', 'Con un padrino de Misti'], ['Dos reportes', 'Un solo formato']] },
      normas: [{ ley: 'D.S. 007-2002-TR (TUO de la Ley de jornada de trabajo), arts. 9 y 10', dice: 'El trabajo en sobretiempo es voluntario, tanto en su otorgamiento como en su prestación, y se paga con un recargo.', practica: 'Quedarse hasta las nueve para hacer el trabajo dos veces es sobretiempo, aunque nadie lo haya pedido en voz alta.' }],
    },
  },
  {
    id: 's5', t: '15:10', ch: 'llamada', who: null, titulo: 'Buscando padrinos', banner: 'assets/foto/llamada.webp', show: ['personas', 'confianza', 'tiempo'],
    body: () => `<p>El plan necesita padrinos: personas que dominen el sistema y tengan paciencia. Llamas a cuatro candidatos de Misti y de Characato.</p>`,
    type: 'calls',
    calls: [['Valeria Talavera · Cayma (Misti)', 'Contesta entusiasmada', '¡Sí! Pero con una condición: que me enseñen cómo evalúan créditos agrícolas. Yo no tengo idea de alpacas.'], ['Wilber Huamaní · Chivay (Characato)', 'Contesta', 'Yo aprendí solito el sistema con YouTube. Puedo enseñar, pero en quechua me explico mejor con los de la campiña.'], ['Asesor de Cerro Colorado (Misti)', 'Contesta apurado', 'Uy, no tengo tiempo. Tengo que llegar a 25 créditos este mes.'], ['Kevin Apaza · Sede (Characato)', 'Contesta', '¿Yo? Si yo soy el que no sabe… Bueno, aprendo rápido. Si me enseñan, ayudo.']],
    prompt: '¿A quiénes eliges como padrinos?',
    choices: [
      { id: 'a', label: 'A Valeria y a Wilber, en pareja: ella enseña el sistema y aprende de crédito agrícola; él traduce a la realidad de la campiña. Y a Kevin, como primer aprendiz que luego enseñe.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3 }, rel: { analista: 1 }, flags: ['padrinos'],
          out: 'Por primera vez, el plan junta a una persona de cada cooperativa enseñándose algo mutuamente. Ernesto lo llama «la primera pareja de la fusión».',
          pro: { ok: 'El aprendizaje va en las dos direcciones.', info: 'Libera a los padrinos de parte de su meta mientras enseñan.' },
          kusi: ['celebra', '¡Misti enseña sistema y Characato enseña campo!'] } },
      { id: 'b', label: 'A Valeria sola: es la que mejor domina el sistema y la más entusiasta.',
        res: { q: 'aceptable', fx: { personas: 2, calidad: 1 },
          out: 'Valeria enseña con energía. Pero en la campiña la ven como «la chica de Misti que viene a enseñarnos».',
          pro: { ok: 'Eliges a quien más sabe.', risk: 'Si solo enseña una cooperativa, el mensaje es que solo una tiene algo que enseñar.' },
          kusi: ['pensando', '¿Y lo que sabe Characato?'] } },
    ],
    rules: [[BP, 'En una fusión, el aprendizaje debe ir en las dos direcciones.']],
    mirada: {
      ve: 'Los padrinos son de los recursos más poderosos de un cambio: la gente aprende mejor de un compañero que de un consultor. Y en una fusión, que haya padrinos de las dos culturas es una forma de decir que las dos tienen algo que enseñar.',
      visual: { tipo: 'flujo', titulo: 'La primera pareja de la fusión', pasos: ['Valeria enseña el sistema', 'Wilber enseña la campiña', 'Kevin aprende', 'Kevin enseña'] },
    },
  },
  {
    id: 's6', t: '17:40', ch: 'whatsapp', who: 'jefa', titulo: 'Una propuesta para Rocío', banner: 'assets/esc/escalera.webp', lugar: 'Sede de Cayma', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>${F.has('estructura_primero') ? 'Mañana se definen las personas para la jefatura y las dos coordinaciones de créditos.' : 'Mañana se define quién ocupa la jefatura de créditos.'} Hoy viste que nadie en la cooperativa conoce la cartera agrícola como Rocío.</p><p>Le escribes para proponerle que <mark class="clave">lidere el paso de la cartera agrícola al sistema</mark>, pase lo que pase mañana.</p>`,
    type: 'compose', enviaA: 'rocio', para: 'Para: Rocío Bedoya · Jefa de créditos', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'La propuesta', ops: [
        { id: 'q1', t: 'Rocío, hoy vimos que la cartera agrícola necesita a alguien que la conozca a fondo para pasar al sistema sin perder calidad. Queremos proponerte que lideres esa transición.', ok: true, por: 'Le reconoces un saber concreto.' },
        { id: 'q2', t: 'Rocío, para que no te quedes sin nada, te queremos dar el proyecto del sistema.', ok: false, por: 'Suena a premio de consuelo y adelanta un resultado.' },
      ] },
      { id: 'limite', t: 'Lo que no es', ops: [
        { id: 'l1', t: 'No reemplaza ni adelanta la decisión de mañana sobre la jefatura: es un encargo distinto, que vale en cualquier escenario.', ok: true, por: 'Separas las dos cosas con honestidad.' },
        { id: 'l2', t: 'Así quedas bien parada con el gerente para mañana 😉', ok: false, por: 'Mezcla el encargo con la selección.' },
      ] },
      { id: 'tiempo', t: 'Lo que le pides', ops: [
        { id: 't1', t: 'Piénsalo con calma. Mañana lo conversamos con Ernesto.', ok: true, por: 'Le das tiempo y un siguiente paso.' },
        { id: 't2', t: 'Necesito tu respuesta en una hora.', ok: false, por: 'Presiona una decisión importante.' },
      ] },
    ],
    res: sel => {
      const mal = sel.que === 'q2' || sel.limite === 'l2' || sel.tiempo === 't2', buenas = ['q1', 'l1', 't1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, etica: mal ? -3 : 2, confianza: q === 'buena' ? 3 : 0 }, rel: { jefa: q === 'buena' ? 1 : mal ? -1 : 0 },
        flags: q === 'buena' ? ['rocio_lidera'] : [],
        out: q === 'buena' ? 'Rocío no responde enseguida. Esa noche, en el colectivo, ves que está escribiendo y borrando varias veces.' : mal ? 'Rocío responde seco: «Entiendo. Ya sé lo que eso significa».' : 'Rocío responde «ok, mañana vemos».',
        pro: { ok: 'Reconoces su saber y separas el encargo de la decisión de mañana.', risk: 'Un encargo presentado como consuelo humilla más que ayuda.', info: 'Mañana, Ernesto debe confirmar este encargo por escrito.' },
        kusi: [q === 'buena' ? 'feliz' : mal ? 'triste' : 'pensando', q === 'buena' ? 'Reconocer lo que sabe. ¡Qué divino!' : mal ? 'Sonó a premio consuelo…' : 'Faltó algo.'],
      };
    },
    rules: [[BP, 'Reconoce el saber de las personas con encargos reales, no como consuelo.']],
    mirada: {
      ve: 'En una fusión, las personas de la organización «chica» sienten que su experiencia ya no vale. Encargarle a Rocío lo que mejor sabe hacer no es una estrategia para calmarla: es lo que la cooperativa necesita para no perder la cartera agrícola.',
      visual: { tipo: 'mensaje', titulo: 'Un encargo, no un consuelo', txt: 'La cartera agrícola necesita a alguien que la conozca a fondo para pasar al sistema. Queremos proponerte que lideres esa transición. No adelanta la decisión de mañana: vale en cualquier escenario.' },
    },
  },
];
