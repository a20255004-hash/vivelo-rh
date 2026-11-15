// Analista de Gestión del Desempeño · Capítulo 6 · «La retroalimentación» · Semana 2, lunes.
// Hilo de las dos semanas: el cierre del ciclo anual de evaluación de Alimentos Lima S.A. (Ate), con el 80 % «sobresaliente».
// Normas citadas (textos oficiales en docs/normas/txt; SPIJ: https://spij.minjus.gob.pe):
// - Constitución, art. 26 inc. 1: igualdad sin discriminación (ya citada).
// - Ley 29733: datos de salud como datos sensibles (ya citada en el capítulo 5).
// La retroalimentación es buena práctica de gestión, no una obligación legal: se trata como tal.

export const CAP = {
  n: 6, titulo: 'La retroalimentación', dia: 'Semana 2, lunes', foto: 'assets/foto/taller.webp',
  lugar: 'Alimentos Lima S.A. · Auditorio del primer piso',
  inicio: '08:00', fin: '19:00', cierreHora: '18:40',
  apertura: 'Lunes de la segunda semana. Esta semana 112 jefes tendrán que mirar a su gente a los ojos y explicarle su nota. Muchos nunca lo han hecho. Hoy los entrenas.', boton: 'Preparar el auditorio',
  kusi: 'Una nota sin conversación es solo un número. Hoy enseñas a convertirla en algo útil.',
  lead: 'Diseñaste un taller práctico, enseñaste la estructura de una buena conversación, corregiste un guion lleno de trampas y preparaste a Alberto para la conversación más difícil de su semana.',
  reflexion: '¿Qué conversación de retroalimentación recuerdas tú, y por qué se te quedó?',
  siguiente: { n: 7, titulo: 'El reclamo', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'taller', p: 'Taller para jefes', j: 'Talento', d: 0, e: 'Hoy 10:00' },
  { id: 'guia', p: 'Guía de retroalimentación', j: 'Talento', d: 0, e: 'Sin escribir' },
  { id: 'reuniones', p: 'Reuniones de retroalimentación', j: '112 jefes', d: 0, e: 'Hasta el viernes' },
  { id: 'andres', p: 'Retroalimentación de Andrés', j: 'Alberto Sáenz', d: 0, e: 'Sin fecha' },
  { id: 'bonos', p: 'Simulación de bonos', j: 'Mónica · Finanzas', d: 0, e: 'Miércoles' },
];

export const FUTURO = {
  taller_practico: ['Tu taller fue de práctica, no de diapositivas.', 'Los jefes saldrán con su primera conversación preparada.'],
  taller_charla: ['Tu taller fue una charla larga.', 'Varios jefes darán la nota por correo.'],
  guion_limpio: ['Corregiste el guion de Carla antes de su reunión.', 'Su analista entenderá su nota.'],
  guion_trampa: ['El guion de Carla salió con frases que dañan.', 'Esa conversación saldrá mal.'],
  alberto_preparado: ['Preparaste a Alberto para la conversación con Andrés y estarás como observadora.', 'La reunión será el miércoles.'],
  alberto_solo: ['Alberto dará la retroalimentación a Andrés sin preparación.', 'Puede salir cualquier cosa.'],
  tu_das_nota: ['Aceptaste dar tú la nota a Andrés en lugar de su jefe.', 'Alberto se lavó las manos.'],
  carla_apoyada: ['Ayudaste a Carla a reparar una conversación que salió mal.', 'Carla volverá a buscarte.'],
};

export const CHATS = {
  talento: { n: 'Talento · Alimentos Lima', sub: 'Paola, Wendy, Mónica y tú', c: '#2F6B3F' },
  paola: { n: 'Paola Ríos', sub: 'Jefa de Talento', who: 'paola' },
  alberto: { n: 'Alberto Sáenz', sub: 'Gerente de Ventas', who: 'gerente' },
  andres: { n: 'Andrés Huerta', sub: 'Supervisor de ventas', who: 'evaluado' },
  carla: { n: 'Carla Bustos', sub: 'Jefa de Marketing', c: '#B83280' },
  rafael: { n: 'Rafael Tapia', sub: 'Jefe de Producción · Planta', c: '#6B4F2F' },
};

export const WSP = [
  { chat: 'talento', t: '07:55', de: 'Paola', txt: 'Hoy el taller es tuyo. Yo llego a las 11, después de la reunión con Gerencia General 🙏' },
  { chat: 'rafael', t: '08:20', de: 'Rafael', txt: 'Joven, ¿el taller es con computadora? Si es con papel, voy con todo mi turno de supervisores.', si: 'rafael_sesion' },
  { chat: 'rafael', t: '08:20', de: 'Rafael', txt: 'Me dicen que mis 90 salieron «cumple» todos. ¿Qué les digo, si yo no los evalué así?', si: 'rafael_relleno' },
  { chat: 'alberto', t: '09:10', de: 'Alberto', txt: 'Me enteré de que Huerta ya sabe su nota. Bonito el proceso, ¿no?', si: 'andres_filtrado' },
  { chat: 'carla', t: '16:45', de: 'Carla', txt: 'Necesito ayuda urgente 😣 La conversación con Lucía salió fatal.' },
  { chat: 'andres', t: '18:10', de: 'Andrés', txt: 'Me llegó la invitación del señor Sáenz para el miércoles. Ahí estaré.', si: 'alberto_preparado' },
];

export const CORREOS = [
  { t: '08:05', de: 'Paola Ríos', para: 'Analista de Gestión del Desempeño', asunto: 'Gerencia General aprobó', html: '<p>Gerencia General aprobó la distribución calibrada. Las reuniones de retroalimentación van de hoy al viernes. Ningún jefe da la nota por correo: cara a cara o por videollamada. Paola</p>' },
  { t: '12:30', de: 'Sistema de Desempeño', para: 'Talento', asunto: 'Inscritos al taller', html: '<p>Taller «Conversaciones de desempeño»: 64 jefes asistieron, de 112 convocados.</p>' },
];

export const QUIZ = [
  { q: 'En una conversación de retroalimentación, lo primero después de saludar es…', ops: ['Decir la nota de golpe', 'Explicar para qué es la reunión y cómo será', 'Hablar del bono', 'Pedirle su opinión del jefe'], ok: 1, por: 'Encuadrar la conversación baja la ansiedad y permite escuchar lo que viene.' },
  { q: '¿Cuál es una buena forma de dar retroalimentación sobre un comportamiento?', ops: ['«Eres desordenado»', '«En el cierre de octubre, el reporte llegó dos días tarde y Finanzas tuvo que rehacer el presupuesto»', '«Siempre llegas tarde»', '«Todos piensan que…»'], ok: 1, por: 'Situación, comportamiento e impacto: hechos que la persona puede cambiar.' },
  { q: 'Un gerente no quiere dar una nota que subió en la calibración y te pide que la des tú. ¿Qué haces?', ops: ['La das tú', 'Lo preparas para darla él y ofreces acompañar como observadora', 'Mandas la nota por correo', 'La pospones hasta el próximo año'], ok: 1, por: 'La relación es entre jefe y colaborador. Talento prepara y acompaña; no reemplaza.' },
  { q: '¿Qué frase NO debe ir en una conversación de desempeño?', ops: ['«Lo que observé fue…»', '«Desde que tuviste a tu bebé no eres la misma»', '«¿Qué necesitas de mí para lograrlo?»', '«Volvemos a conversar en un mes»'], ok: 1, por: 'Mezclar la maternidad con el desempeño es discriminatorio y destruye la confianza.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:15', ch: 'documento', who: null, titulo: 'Dos horas para 112 jefes', banner: 'assets/foto/capacitacion.webp', lugar: 'Auditorio del primer piso', show: ['calidad', 'tiempo'],
    body: () => `<p>El auditorio huele a cera de piso. Wendy acomoda sillas mientras tú decides cómo usar las dos horas del taller. La última capacitación de jefes fue un PowerPoint de 80 láminas; <mark class="clave">nadie recuerda ni una</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del taller.', boton: 'Cerrar el diseño',
    bloques: [
      { id: 'abre', t: 'Apertura (15 min)', n: 1, ops: [
        { id: 'a1', t: 'Que cada jefe recuerde una retroalimentación que le sirvió y una que lo hirió.', ok: true, por: 'Parte de su propia experiencia.' },
        { id: 'a2', t: 'Presentación sobre la historia de la gestión del desempeño.', ok: false, por: 'Interesante, pero no les sirve para el miércoles.' },
      ] },
      { id: 'centro', t: 'Núcleo (75 min)', n: 2, ops: [
        { id: 'c1', t: 'La estructura de la conversación, con un ejemplo real anonimizado.', ok: true },
        { id: 'c2', t: 'Práctica en parejas: cada jefe ensaya su conversación más difícil.', ok: true, por: 'Lo que se practica, se hace.' },
        { id: 'c3', t: 'Lista de los colaboradores con nota baja de cada jefe, proyectada.', ok: false, por: 'Expone a personas frente a 60 jefes.' },
      ] },
      { id: 'cierre', t: 'Cierre (30 min)', n: 2, ops: [
        { id: 'x1', t: 'Cada jefe sale con fecha y hora de sus reuniones agendadas.', ok: true },
        { id: 'x2', t: 'Una guía de una página para tener a la mano.', ok: true },
        { id: 'x3', t: 'Encuesta de satisfacción del taller.', ok: null, por: 'Útil, pero no cambia lo que harán el miércoles.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, tiempo: -1 },
        flags: [q === 'riesgosa' ? 'taller_charla' : 'taller_practico'], cartera: { taller: q === 'riesgosa' ? 'Taller de diapositivas' : 'Taller práctico listo', guia: 'Guía de una página' },
        out: q === 'buena' ? 'Wendy pega en la pared un papelógrafo con una sola frase: «Hoy practicamos, no escuchamos».' : 'El taller tiene buena información, pero poca práctica.',
        pro: { ok: 'Los jefes aprenden a conversar conversando.', risk: 'Una charla larga da tranquilidad a quien la dicta, no a quien tiene que conversar el miércoles.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Taller con manos en la masa!' : 'Más práctica, menos láminas.'],
      };
    },
    mirada: {
      ve: 'Muchos jefes temen la conversación de desempeño porque nunca la ensayaron. Un taller útil les da una estructura y un ensayo seguro antes de la conversación real.',
      visual: { tipo: 'flujo', titulo: 'El taller', pasos: ['Su propia experiencia', 'La estructura', 'Práctica en parejas', 'Reuniones agendadas'] },
    },
  },
  {
    id: 'f2', t: '10:20', ch: 'presencial', who: null, titulo: 'La estructura de la conversación', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Auditorio del primer piso', show: ['calidad', 'personas'],
    body: (n, F) => `<p>Sesenta y cuatro jefes. Rafael en primera fila con su cuaderno; Carla, de Marketing, con dos celulares. ${F.has('ventas_calibrada') ? 'Varios jefes de Ventas preguntan cómo explicar que la nota bajó.' : 'Los jefes de Ventas no vinieron: «total, nadie bajó».'}</p><p>Para que lo recuerden, armas con ellos <mark class="clave">el orden de una buena conversación</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la conversación. Usa las flechas.', boton: 'Guardar la estructura',
    items: [
      { id: 'prep', t: 'Preparar: revisar metas, ejemplos y la nota calibrada', por: 'Nadie improvisa una conversación importante.' },
      { id: 'enc', t: 'Encuadrar: para qué es la reunión y cuánto dura', por: 'Baja la ansiedad.' },
      { id: 'auto', t: 'Preguntar cómo ve su propio año', por: 'Escuchar antes de calificar.' },
      { id: 'nota', t: 'Compartir la nota con hechos: situación, comportamiento e impacto', por: 'La nota con sus razones.' },
      { id: 'esc', t: 'Escuchar su reacción sin defenderse', por: 'Las emociones también son información.' },
      { id: 'acu', t: 'Acordar uno o dos focos para el próximo año y una fecha de seguimiento', por: 'Que la conversación sirva hacia adelante.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, personas: q === 'buena' ? 3 : 0 },
        out: q === 'buena' ? 'Rafael levanta la mano: «Entonces primero le pregunto cómo le fue, y después le digo. Eso nunca lo he hecho en 34 años». Se ríen todos, él también.' : 'Un jefe pregunta: «¿Y si digo la nota primero y después pregunto?». Reordenan juntos.',
        pro: { ok: 'Una estructura simple, repetida, se vuelve costumbre.', risk: 'Empezar por la nota hace que la persona deje de escuchar el resto.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Rafael aprendió algo nuevo a los 61!' : 'Casi: el orden cambia la conversación.'],
      };
    },
    mirada: {
      ve: 'Cuando la nota llega primero, la persona deja de escuchar: solo piensa en el bono. Preguntar antes cómo ve su año abre la conversación y muchas veces la persona misma nombra lo que hay que mejorar.',
      visual: { tipo: 'flujo', titulo: 'Una conversación de desempeño', pasos: ['Preparar', 'Encuadrar', 'Preguntar', 'Nota con hechos', 'Escuchar', 'Acordar'] },
    },
  },
  {
    id: 'f3', t: '11:40', ch: 'documento', who: null, titulo: 'El guion de Carla', banner: 'assets/foto/revisa.webp', lugar: 'Pasillo del auditorio', show: ['etica', 'calidad', 'personas'],
    body: () => `<p>En el receso, Carla te muestra su celular. Tiene escrito el guion para su reunión de esta tarde con Lucía, una analista que volvió hace seis meses de su licencia de maternidad y quedó en «cumple».</p><p>«¿Me lo revisas? <mark class="clave">No quiero que llore</mark>.»</p>`,
    type: 'flag', prompt: 'Marca las frases que dañan la conversación o que no deben decirse.',
    doc: { t: 'Guion para la reunión con Lucía', sub: 'Carla Bustos · Jefa de Marketing' },
    lines: [
      { id: 'enc', t: 'Lucía, hoy conversamos sobre tu año: unos 40 minutos, con calma.' },
      { id: 'bebe', t: 'Entiendo que desde que nació tu bebé tienes la cabeza en otro lado.', bad: LEY, why: 'Atribuir el desempeño a la maternidad es discriminatorio (Constitución, art. 26; Ley 30709) y cierra la conversación.' },
      { id: 'hecho', t: 'En la campaña de agosto, el plan de medios llegó con una semana de retraso y perdimos la pauta en radio.' },
      { id: 'otros', t: 'Los demás del equipo también piensan que bajaste.', bad: BP, why: 'Habla por otros sin evidencia y la pone contra su equipo.' },
      { id: 'yo', t: 'Yo te habría puesto sobresaliente, pero el comité no me dejó.', bad: BP, why: 'Le quita valor a la calibración y la deja sin a quién reclamar.' },
      { id: 'foco', t: '¿Qué necesitas de mí para que el próximo año la campaña salga a tiempo?' },
      { id: 'ultimo', t: 'Lo bueno es que el bono del 70 % no está mal.', duda: 'Puede ser verdad, pero minimiza lo que ella siente.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Corriges dos frases. La del bebé se queda. Carla te da las gracias y se va a almorzar.' : `Marcas ${hitsLey} frase con riesgo legal y otras que dañan. Carla se tapa la cara: «Lo del bebé lo iba a decir con cariño». Lo reescriben juntas.`,
      flags: [missLey ? 'guion_trampa' : 'guion_limpio'],
      pro: { ok: 'Un guion limpio tiene hechos, preguntas y un compromiso del jefe.', risk: 'Una frase «con cariño» sobre la maternidad puede terminar en un reclamo por discriminación.', info: '«El comité no me dejó» es la frase más común… y la más dañina para el proceso.' },
      kusi: missLey ? ['preocupado', 'La frase del bebé era la más peligrosa…'] : ['celebra', '¡Guion rescatado!'],
    }),
    rules: [[LEY, 'Constitución, art. 26 y Ley 30709: la maternidad no es un criterio de desempeño.'], [BP, 'La nota calibrada se asume como del jefe: «el comité no me dejó» rompe el proceso.']],
    mirada: {
      ve: 'Muchas frases que dañan se dicen con buena intención. Revisar un guion no es corregir la ortografía: es imaginar cómo lo escuchará la otra persona.',
      visual: { tipo: 'cambio', titulo: 'Del guion original al guion limpio', pares: [['«Desde que nació tu bebé…»', '«En la campaña de agosto…»'], ['«Los demás piensan…»', '«Lo que yo observé…»'], ['«El comité no me dejó»', '«Esta es tu nota y sus razones»']] },
    },
  },
  {
    id: 'f4', t: '13:40', ch: 'presencial', who: 'gerente', titulo: '«Dásela tú»', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Oficina de Alberto, tercer piso', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>Alberto no vino al taller. Lo encuentras en su oficina, con la camisa arremangada y una hamburguesa a medio comer. ${F.has('andres_recalificado') ? '«No voy a sentarme a decirle “sobresaliente” a alguien que no lo es.»' : F.has('andres_cumple') ? '«Ya le subieron a “cumple”. ¿Qué más quieren que le diga?»' : '«Su nota no cambió. ¿Para qué una reunión?»'}</p><p>«<mark class="clave">Dásela tú</mark>. Para eso está Talento, ¿no?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que la conversación le toca a él como jefe, ofrecerle prepararla juntos y estar presente como observadora.',
        res: { q: 'buena', fx: { etica: 4, personas: 3, tiempo: -2 }, rel: { gerente: 0, evaluado: 1 }, flags: ['alberto_preparado'], cartera: { andres: 'Reunión el miércoles, con Talento presente' },
          out: 'Alberto refunfuña, pero agenda la reunión para el miércoles. «Si vas a estar, que sea calladita.» Sonríes: el rol de observadora es ese.',
          pro: { ok: 'No reemplazas al jefe: lo preparas y cuidas que la conversación sea justa.', risk: 'Será una reunión tensa.', info: 'Prepárale tres frases y lo que no debe decir.' },
          kusi: ['animo', 'El jefe conversa; tú cuidas.'] } },
      { id: 'b', label: 'Aceptar: si Alberto la da de mala gana, la conversación hará más daño que bien.',
        res: { q: 'aceptable', fx: { personas: 2, etica: -1 }, rel: { gerente: 1 }, flags: ['tu_das_nota'],
          out: 'Te toca a ti. Andrés escuchará su nota de alguien que no es su jefe, y la relación con Alberto seguirá igual de rota.',
          pro: { ok: 'Proteges a Andrés de una conversación agresiva.', risk: 'Alberto se lava las manos y aprende que puede delegar lo incómodo.' },
          kusi: ['pensando', '¿Y quién lo va a dirigir mañana?'] } },
      { id: 'c', label: 'Decirle que es su obligación y dejarlo que lo haga como quiera.',
        res: { q: 'riesgosa', fx: { personas: -3, etica: 1 }, flags: ['alberto_solo'],
          out: 'Alberto agenda «cinco minutos» con Andrés para el miércoles a las 7:30 de la mañana, antes de la reunión de ventas.',
          pro: { ok: 'Le recuerdas su responsabilidad.', risk: 'Sin preparación, la conversación más delicada de la empresa queda en manos de un jefe molesto.' },
          kusi: ['preocupado', 'Cinco minutos a las 7:30… mal augurio.'] } },
    ],
    rules: [[POL, 'La retroalimentación la da el jefe directo. Talento prepara y puede acompañar como observador.']],
    mirada: {
      ve: 'Cuando un jefe delega la conversación difícil en Talento, el mensaje que recibe el colaborador es «a tu jefe no le importas». Acompañar sin reemplazar protege a las dos personas.',
      visual: { tipo: 'balanza', a: { t: 'Talento da la nota', items: ['Conversación tranquila', 'Alberto aliviado'] }, b: { t: 'Alberto la da, preparado', items: ['El jefe asume la nota', 'Talento cuida la forma', 'La relación puede repararse'] } },
    },
  },
  {
    id: 'f5', t: '15:20', ch: 'whatsapp', who: null, titulo: 'Tres frases para Alberto', banner: 'assets/esc/idea.webp', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>${F.has('alberto_preparado') ? 'Le prometiste a Alberto mandarle una guía corta para el miércoles.' : 'Igual decides mandarle a Alberto una guía corta, por si la usa.'} Sabes que no leerá más de tres líneas.</p><p>Tiene que servirle <mark class="clave">aunque llegue molesto</mark>.</p>`,
    type: 'compose', enviaA: 'alberto', para: 'Para: Alberto Sáenz · Gerente de Ventas', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Para abrir', ops: [
        { id: 'a1', t: 'Alberto, para el miércoles: empieza preguntándole cómo ve su año.', ok: true },
        { id: 'a2', t: 'Alberto, ya sabes que esta nota no la decidiste tú, así que tranquilo.', ok: false, por: 'Le da permiso para desentenderse de la nota.' },
      ] },
      { id: 'nota', t: 'La nota', ops: [
        { id: 'n1', t: 'Dile la nota con sus razones: superó su meta y es referente en su zona.', ok: true },
        { id: 'n2', t: 'Dile la nota y pasa rápido a otra cosa.', ok: false, por: 'Andrés notará que no la cree.' },
      ] },
      { id: 'futuro', t: 'Hacia adelante', ops: [
        { id: 'f1', t: 'Si quieres mencionar las reuniones, usa un ejemplo con fecha y pregúntale cómo lo ve él.', ok: true, por: 'Le permite decir lo que le molesta, de forma útil.' },
        { id: 'f2', t: 'Evita hablar de cualquier cosa negativa.', ok: null, por: 'Prudente, pero deja sin hablar lo que de verdad los separa.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'n1', 'f1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 2 : 0 }, rel: { gerente: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Alberto responde con un «ok» y, diez minutos después: «Lo de las reuniones sí se lo quiero decir. Lo haré así».' : 'Alberto deja el mensaje en visto.',
        pro: { ok: 'Tres frases útiles valen más que una guía de diez páginas que nadie lee.', risk: 'Darle permiso para desentenderse de la nota arruina la conversación.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Hasta Alberto tiene un plan!' : 'Esa guía no lo ayuda mucho.'],
      };
    },
    mirada: { ve: 'Preparar a un jefe molesto no es convencerlo de que está equivocado: es darle una forma de decir lo que piensa sin dañar a nadie. Muchas veces, lo que le molesta también merece conversarse.' },
  },
  {
    id: 'f6', t: '16:50', ch: 'llamada', who: null, titulo: 'Carla, después de la reunión', banner: 'assets/foto2/grito.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Carla te llama con la voz quebrada. ${F.has('guion_trampa') ? '«Le dije lo del bebé. Lucía se paró y se fue. Dice que va a reclamar.»' : '«Usé tu guion, pero cuando dije “cumple”, Lucía se puso a llorar y no pude seguir.»'}</p><p>«<mark class="clave">¿Qué hago ahora?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Calmarla y proponerle retomar la conversación en dos días, empezando por reconocer cómo terminó la primera.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, flags: ['carla_apoyada'],
          out: 'Carla respira. «Le voy a escribir para pedirle otra reunión. Y le voy a pedir disculpas por cómo lo dije.» Anotas el nombre de Lucía: puede llegar un reclamo.',
          pro: { ok: 'Una conversación que salió mal se puede reparar si se reconoce.', info: 'Si Lucía reclama, el proceso de revisión debe ser imparcial: no defiendas a Carla de antemano.' },
          kusi: ['feliz', 'Las conversaciones también se reparan.'] } },
      { id: 'b', label: 'Decirle que no se preocupe: es normal que la gente llore, ya se le pasará.',
        res: { q: 'riesgosa', fx: { personas: -3 },
          out: 'Carla cuelga más tranquila. Lucía, no. Esa noche escribe un correo largo a Talento.',
          pro: { ok: 'Calmas a Carla.', risk: 'Minimizar la reacción de Lucía deja la herida abierta.' },
          kusi: ['triste', 'Llorar no siempre «se pasa».'] } },
    ],
    rules: [[BP, 'Si una conversación sale mal, se retoma reconociendo cómo terminó.']],
    mirada: { ve: 'No todas las conversaciones salen bien, aunque haya guion. Lo que distingue a un buen jefe es volver a la conversación, no fingir que no pasó.' },
  },
];
