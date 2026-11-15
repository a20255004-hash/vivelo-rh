// Analista de People Analytics · Capítulo 9 · «La acción» · Semana 2, jueves.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733: art. 6 (finalidad), art. 7 (proporcionalidad), art. 17 (confidencialidad). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - D.S. 016-2024-JUS (El Peruano, 30/11/2024): art. 6 (consentimiento informado: finalidad y carácter facultativo de las respuestas).
// - D.S. 007-2002-TR, art. 1 (jornada máxima). El diseño del piloto (línea base, oleadas, comparación) es buena práctica, no norma.

export const CAP = {
  n: 9, titulo: 'La acción', dia: 'Semana 2, jueves', foto: 'assets/foto2/tablet-equipo.webp',
  lugar: 'HogarPlus · Oficina central de Surquillo',
  inicio: '08:20', fin: '19:00', cierreHora: '18:45',
  apertura: 'Jueves. El comité aprobó actuar. Hoy, a las 3, presentas con Mónica el plan con presupuesto. La pregunta ya no es «¿por qué se van?», sino «¿qué hacemos y cómo sabremos si funcionó?».', boton: 'Abrir el plan',
  kusi: 'Un hallazgo sin acción es un adorno. ¡Hoy se decide!',
  lead: 'Elegiste dónde invertir, diseñaste cómo medir sin dejar a nadie fuera, limpiaste el comunicado de etiquetas e invitaste a Renzo a ser parte de la solución.',
  reflexion: '¿Cómo sabrás, en tres meses, si tu trabajo cambió algo para alguien?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'plan', p: 'Plan de acción', j: 'Tú y Mónica', d: 8, e: 'Hoy 3 p. m.' },
  { id: 'piloto', p: 'Diseño de medición', j: 'Tú', d: 8, e: 'Por definir' },
  { id: 'comunicado', p: 'Comunicado a supervisores', j: 'Lucía · HRBP', d: 8, e: 'Borrador' },
  { id: 'proveedor', p: 'Reunión con TalentScope', j: 'Arturo · Gerencia General', d: 8, e: 'Lunes 9:00' },
];

export const FUTURO = {
  acciones_causa: ['Invertiste en acciones que atacan las causas que encontraste.', 'Los indicadores podrán moverse.'],
  acciones_vitrina: ['Gastaste parte del presupuesto en acciones que se ven pero no atacan la causa.', 'En tres meses, los números seguirán igual.'],
  medicion_ok: ['El plan tiene línea base, comparación y fecha de revisión.', 'En marzo sabrás si funcionó.'],
  medicion_floja: ['El plan no dice cómo se medirá.', 'Cualquier resultado podrá leerse como éxito.'],
  oleadas: ['Todos recibirán el programa, en dos oleadas que permiten comparar.', 'Nadie queda fuera y sí se puede medir.'],
  control_sin_programa: ['Dejaste tiendas sin programa para compararlas.', 'Lucía y los supervisores de esas tiendas lo cuestionarán.'],
  comunicado_limpio: ['El comunicado no etiqueta a nadie ni promete vigilancia.', 'Los supervisores lo recibirán como apoyo.'],
  renzo_invitado: ['Invitaste a Renzo a la primera cohorte y a contar su experiencia.', 'Será tu aliado en tienda.'],
};

export const CHATS = {
  equipo: { n: 'People Analytics', sub: 'Diego y tú', c: '#1F5F8B' },
  diego: { n: 'Diego Paz', sub: 'Jefe de Analítica de Personas', who: 'diego-pa' },
  monica: { n: 'Mónica Larrea', sub: 'Gerenta de Tiendas', who: 'gerente' },
  lucia: { n: 'Lucía Ccori', sub: 'HRBP de tiendas Lima Este', c: '#6B3FA0' },
  renzo: { n: 'Renzo Villanueva', sub: 'Supervisor de ventas · Santa Anita', c: '#B5651D' },
};

export const WSP = [
  { chat: 'monica', t: '08:15', de: 'Mónica', txt: 'Arturo quiere el plan en una hoja. Una. Si ve dos, no lee ninguna 😅' },
  { chat: 'lucia', t: '09:00', de: 'Lucía', txt: 'Brayan decidió hablar conmigo el sábado, afuera de la tienda. Gracias por cómo lo trataste.', si: 'brayan_cuidado' },
  { chat: 'lucia', t: '09:00', de: 'Lucía', txt: 'Brayan presentó su renuncia esta mañana. No quiso decir por qué.', si: 'brayan_expuesto' },
  { chat: 'renzo', t: '17:40', de: 'Renzo', txt: '¿En serio quieren que cuente lo que me pasó? Ya. Si sirve para que al siguiente no le pase, cuenten conmigo.', si: 'renzo_invitado' },
  { chat: 'equipo', t: '18:40', de: 'Diego', txt: 'Mañana es viernes de cierre. Y el lunes, TalentScope. Prepárate el café doble ☕☕' },
];

export const CORREOS = [
  { t: '08:25', de: 'Finanzas · Control de Gestión', para: 'Analista de People Analytics; Mónica Larrea', asunto: 'Presupuesto para el plan de rotación', html: '<p>La Gerencia General autorizó un presupuesto acotado para este semestre: alcanza para tres acciones de las que propongan. Por favor, indiquen para cada una qué indicador debería mover.</p>' },
  { t: '16:10', de: 'Arturo Benavides · Gerente General', para: 'Mónica Larrea; Analista de People Analytics', asunto: 'RE: Plan de acción rotación', html: '<p>Aprobado. Me gusta que diga cómo lo vamos a medir. Revisamos resultados en marzo.</p><p>Arturo</p>', si: 'medicion_ok' },
];

export const QUIZ = [
  { q: 'Para saber si un programa redujo la rotación, necesitas como mínimo…', ops: ['Que a la gente le guste', 'Una línea base y un grupo con el que comparar', 'Muchas horas de capacitación', 'Una encuesta de satisfacción'], ok: 1, por: 'Sin el «antes» y sin comparación, cualquier cambio podría deberse a otra cosa.' },
  { q: 'Aplicar el programa en dos oleadas sirve para…', ops: ['Ahorrar dinero', 'Que todos lo reciban y, mientras tanto, la segunda oleada sirva de comparación', 'Castigar a la segunda oleada', 'Nada'], ok: 1, por: 'Así se mide sin dejar a nadie fuera para siempre.' },
  { q: 'Un comunicado que dice «programa para supervisores con bajo desempeño»…', ops: ['Motiva', 'Etiqueta a quienes participan y hace que lo vivan como castigo', 'Es más honesto', 'No tiene efecto'], ok: 1, por: 'El nombre del programa define cómo se recibe.' },
  { q: 'Las entrevistas de permanencia deben…', ops: ['Hacerlas el supervisor y guardarlas en su carpeta', 'Explicar para qué son, que son voluntarias y cómo se usarán las respuestas', 'Ser obligatorias', 'Grabarse sin avisar'], ok: 1, por: 'Al recoger datos se informa la finalidad y si responder es facultativo (D.S. 016-2024-JUS, art. 6).' },
  { q: 'Elegir acciones con presupuesto limitado implica…', ops: ['Elegir las más visibles', 'Elegir las que atacan las causas encontradas y se pueden medir', 'Repartir un poco para cada área', 'Elegir las más baratas'], ok: 1, por: 'Lo que no ataca una causa no moverá el indicador.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '08:40', ch: 'documento', who: null, titulo: 'Tres acciones', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>El presupuesto alcanza para <mark class="clave">tres acciones</mark>. Sobre tu escritorio, la lista larga que se juntó en dos semanas: ideas de Mónica, de Lucía, de Renzo y tuyas.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres acciones del plan.', boton: 'Elegir estas', resumen: 'Elegiste',
    cols: ['Acción', 'Qué causa ataca'],
    rows: [
      { id: 'form', cells: ['Programa para supervisores nuevos: manejo de equipos y feedback, con un mentor', 'Ascensos sin formación'] },
      { id: 'ind', cells: ['Inducción de una semana con un «padrino» en el pasillo, en vez del video de una hora', 'El pico de los primeros 90 días'] },
      { id: 'hor', cells: ['Horarios publicados con una semana de anticipación y revisados por RR.HH.', 'Cambios de turno de noche, descansos y refrigerios'] },
      { id: 'com', cells: ['Subir comisiones en las 34 tiendas', 'El sueldo, que pesa poco en la mayoría de tiendas'] },
      { id: 'fiesta', cells: ['Fiesta de fin de año para todos los vendedores', 'Ninguna en particular'] },
      { id: 'app', cells: ['App de reconocimiento con puntos y medallas', 'No aparece en los datos'] },
    ],
    score: { form: 3, ind: 3, hor: 3, com: 0, fiesta: -2, app: -2 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3 },
        flags: [q === 'buena' ? 'acciones_causa' : 'acciones_vitrina'], cartera: { plan: q === 'buena' ? 'Formación, inducción y horarios' : 'Plan con acciones de vitrina' },
        out: q === 'buena' ? 'Tres acciones, cada una frente a una causa que encontraste. Cabe en una hoja, como pidió Arturo.' : picks.includes('com') ? 'Subir comisiones en todas las tiendas se come casi todo el presupuesto, y los datos dicen que pesa poco. El piloto en Ate y Santa Clara ya cubría esa duda.' : 'Algunas acciones se ven bien, pero no atacan lo que encontraste.',
        pro: { ok: 'Cada acción responde a una causa con evidencia.', risk: 'Las acciones de vitrina gastan presupuesto y credibilidad.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cada sol, contra una causa!' : '¿Esa acción ataca qué?'],
      };
    },
    mirada: {
      ve: 'Con poco presupuesto, la tentación es elegir lo que se ve: una fiesta, una app, un aumento general. El análisis sirve justo para lo contrario: concentrar el dinero donde está la causa.',
      visual: { tipo: 'matriz', x: 'Costo', y: 'Ataca una causa', cuadrantes: ['Hazlo', 'Vale la pena', 'Barato pero inútil', 'Evítalo'], items: [['Horarios anticipados', .15, .85], ['Inducción con padrino', .4, .9], ['Formación de supervisores', .6, .95], ['Comisiones en 34 tiendas', .95, .3], ['Fiesta', .5, .1], ['App de medallas', .45, .15]] },
    },
  },
  {
    id: 'i2', t: '10:00', ch: 'documento', who: null, titulo: '¿Cómo sabremos si funcionó?', banner: 'assets/esc/meta.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Diego te deja un post-it: «Si en marzo la rotación baja, ¿cómo sabrás que fue el plan y no el verano?». Diseñas <mark class="clave">la medición</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la medición.', boton: 'Guardar el diseño',
    bloques: [
      { id: 'base', t: 'Punto de partida', n: 1, ops: [
        { id: 'b1', t: 'Línea base: los tres indicadores de los últimos 12 meses, por tienda.', ok: true },
        { id: 'b2', t: 'Empezar a medir desde el primer día del programa.', ok: false, por: 'Sin el «antes», no hay con qué comparar.' },
      ] },
      { id: 'comp', t: 'Comparación', n: 1, ops: [
        { id: 'c1', t: 'Comparar las tiendas de la primera oleada con las de la segunda mientras esperan su turno.', ok: true },
        { id: 'c2', t: 'Comparar con el mismo mes del año pasado y listo.', ok: false, por: 'Cambiaron muchas cosas en un año: no aísla el efecto.' },
      ] },
      { id: 'datos', t: 'Datos de las entrevistas de permanencia', n: 2, ops: [
        { id: 'd1', t: 'Las hace RR.HH., no el supervisor, y se informa para qué son y que son voluntarias.', ok: true, por: 'Finalidad y carácter facultativo, como pide el reglamento.' },
        { id: 'd2', t: 'Solo se reportan resultados agregados por equipo de 5 o más.', ok: true },
        { id: 'd3', t: 'Las respuestas individuales se comparten con el supervisor para que mejore.', ok: false, por: 'Quien responde algo de su jefe no lo hará si sabe que él lo leerá.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 3 : 0 },
        flags: [q === 'buena' ? 'medicion_ok' : 'medicion_floja'], cartera: { piloto: q === 'buena' ? 'Línea base, comparación y revisión en marzo' : 'Medición incompleta' },
        out: q === 'buena' ? 'Diego quita su post-it y pega otro: «Ahora sí podremos decir qué funcionó».' : 'Tu diseño mide algo, pero en marzo cualquier resultado podrá leerse como éxito.',
        pro: { ok: 'Antes, comparación y datos cuidados.', risk: 'Un plan sin medición se evalúa por cómo se ve, no por lo que logra.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡En marzo sabremos la verdad!' : '¿Y si baja por el verano?'],
      };
    },
    rules: [[LEY, 'Al recoger datos se informa la finalidad y si responder es facultativo (D.S. 016-2024-JUS, art. 6).'], [BP, 'Sin línea base ni comparación no se puede atribuir un cambio al programa.']],
    mirada: {
      ve: 'La rotación sube y baja por muchas razones: campañas, estaciones, aperturas de la competencia. Medir bien significa poder decir «esto cambió por lo que hicimos». Y las entrevistas de permanencia solo darán datos útiles si quien responde confía en que su jefe no las leerá.',
      visual: { tipo: 'linea', titulo: 'El piloto en el tiempo', hitos: [['Noviembre', 'Línea base'], ['Diciembre', 'Oleada 1: 17 tiendas'], ['Marzo', 'Comparar oleada 1 vs. 2'], ['Abril', 'Oleada 2: 17 tiendas']] },
    },
  },
  {
    id: 'i3', t: '11:30', ch: 'presencial', who: 'diego-pa', titulo: '¿Todos ya, o por oleadas?', banner: 'assets/foto/mentora.webp', lugar: 'Sala pequeña del piso 3', show: ['etica', 'calidad', 'personas'],
    body: () => `<p>Mónica llamó a Diego: quiere el programa de supervisores <mark class="clave">en las 34 tiendas desde diciembre</mark>. «Si funciona, ¿por qué esperar?»</p><p>Diego te pasa la pregunta: tiene razón y también no.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer dos oleadas: 17 tiendas en diciembre y 17 en abril. Todas lo reciben y, mientras tanto, se puede comparar.',
        res: { q: 'buena', fx: { calidad: 4, etica: 3, personas: 2 }, rel: { 'diego-pa': 1 }, flags: ['oleadas'],
          out: 'Mónica lo piensa: «¿Y cuáles van primero?». Propones empezar por las de más riesgo. Acepta.',
          pro: { ok: 'Nadie queda fuera y sí podrás medir.', risk: 'Las tiendas de la segunda oleada esperarán cuatro meses.', info: 'Empezar por las de más riesgo complica la comparación: anótalo como límite.' },
          kusi: ['celebra', 'Todos lo reciben y se puede medir. ¡Bacán!'] } },
      { id: 'b', label: 'Darle la razón: las 34 desde diciembre. Si hay gente sufriendo, no se espera.',
        res: { q: 'aceptable', fx: { personas: 3, calidad: -3 },
          out: 'El programa arranca en todas. En marzo, la rotación baja. Nadie sabrá si fue el programa, el verano o el cierre de la tienda de la competencia en Ate.',
          pro: { ok: 'Nadie espera.', risk: 'Pierdes la posibilidad de saber si funcionó, y de defenderlo cuando haya que renovar el presupuesto.' },
          kusi: ['pensando', 'Rápido… y a ciegas.'] } },
      { id: 'c', label: 'Dejar 10 tiendas sin programa durante todo el año, para tener un grupo de control limpio.',
        res: { q: 'riesgosa', fx: { calidad: 3, etica: -4, personas: -3 }, flags: ['control_sin_programa'],
          out: 'Tu diseño es impecable en el papel. Pero diez supervisores nuevos, y sus equipos, pasarán un año sin la ayuda que ya sabes que necesitan.',
          pro: { ok: 'Medición más limpia.', risk: 'Negar un apoyo que ya sabes útil, solo para medir mejor, es difícil de justificar ante las personas.' },
          kusi: ['triste', '¿Un año sin ayuda para medir mejor?'] } },
    ],
    rules: [[BP, 'Cuando un programa probablemente ayuda, la comparación se hace por oleadas, no dejando a nadie fuera para siempre.']],
    mirada: {
      ve: 'En People Analytics, medir bien tiene un límite: las personas. Las oleadas son un punto medio que muchas empresas usan, porque permiten aprender sin negarle a nadie un apoyo que probablemente necesita.',
      visual: { tipo: 'balanza', a: { t: 'Todos ya', items: ['Nadie espera', 'No sabremos si funcionó'] }, b: { t: 'Dos oleadas', items: ['Todos lo reciben', 'Se puede comparar', 'Cuatro meses de espera para la mitad'] } },
    },
  },
  {
    id: 'i4', t: '13:30', ch: 'documento', who: null, titulo: 'El comunicado', banner: 'assets/esc/lupa.webp', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>Gino redactó el comunicado para los supervisores. Lucía te lo reenvía con un solo comentario: «Léelo como si fueras Renzo». <mark class="clave">¿Qué cambiarías?</mark></p>`,
    type: 'flag', prompt: 'Marca lo que hay que cambiar en el comunicado.',
    doc: { t: 'Comunicado a supervisores de ventas', sub: 'Borrador de la Gerencia de Tiendas' },
    lines: [
      { id: 'bajo', t: '«Programa obligatorio para supervisores con bajo desempeño en retención».', bad: BP, why: 'Etiqueta a quienes participan: lo vivirán como castigo.' },
      { id: 'vig', t: '«Se monitorearán los mensajes del grupo de WhatsApp de cada tienda para medir el clima».', bad: LEY, why: 'Leer los mensajes del grupo para «medir el clima» es una finalidad distinta a la de coordinar el trabajo, y es excesivo.' },
      { id: 'sab', t: '«Las sesiones serán los domingos de 8 a 12, después del cierre semanal».', bad: BP, why: 'Un supervisor nuevo ya trabaja de más. Programarlo en su descanso es mala señal, y la jornada tiene un máximo.' },
      { id: 'ment', t: '«Cada supervisor nuevo tendrá un mentor: un supervisor con más de dos años en el puesto».' },
      { id: 'res', t: '«Los resultados individuales de las entrevistas de permanencia de su equipo serán compartidos con usted».', bad: LEY, why: 'Rompe la confidencialidad que se promete a quien responde.' },
      { id: 'hor', t: '«Desde enero, los horarios se publican con una semana de anticipación».' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Corriges el tono, pero algo grave sobre los datos de los equipos se queda en el comunicado.' : `Marcas ${hitsLey} problemas legales y cambias el nombre del programa. Lucía lo rebautiza: «Programa Primer Equipo». Suena distinto.`,
      flags: missLey ? [] : ['comunicado_limpio'],
      fx: { personas: missLey ? 0 : 4, cumplimiento: missLey ? -3 : 4 },
      cartera: { comunicado: missLey ? 'Borrador con riesgos' : '«Programa Primer Equipo», listo para enviar' },
      pro: { ok: 'Un programa de apoyo tiene que sonar y funcionar como apoyo.', risk: 'Vigilar chats o compartir respuestas individuales destruye la confianza que el programa necesita.' },
      kusi: missLey ? ['preocupado', 'Hay datos en riesgo ahí.'] : ['celebra', '«Primer Equipo». ¡Qué divino!'],
    }),
    rules: [[LEY, 'Los datos no se usan para una finalidad distinta ni de forma excesiva (Ley 29733, arts. 6 y 7).'], [LEY, 'Quien trata datos debe guardar confidencialidad (Ley 29733, art. 17).'], [LEY, 'La jornada ordinaria tiene un máximo de 8 horas diarias o 48 semanales (D.S. 007-2002-TR, art. 1).']],
    mirada: {
      ve: 'El mismo programa puede ser vivido como ayuda o como castigo según cómo se anuncie. Y un plan de retención que vigila chats o expone respuestas termina provocando lo que quería evitar.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al comunicado', pares: [['Supervisores con bajo desempeño', 'Programa Primer Equipo'], ['Monitorear el WhatsApp', 'Entrevistas voluntarias con RR.HH.'], ['Domingos de 8 a 12', 'Dentro del horario'], ['Respuestas individuales al jefe', 'Resultados por equipo']] },
    },
  },
  {
    id: 'i5', t: '15:00', ch: 'presencial', who: 'gerente', titulo: 'La hoja para Arturo', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de la Gerencia de Tiendas', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Mónica revisa tu hoja con un lapicero rojo en la mano. ${F.has('objecion_bien') ? 'Desde el comité, te trata distinto: te pregunta antes de tachar.' : 'Tacha rápido.'}</p><p>«Arturo va a preguntar una sola cosa: <mark class="clave">cuánto va a bajar la rotación</mark>. ¿Qué le pongo?»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Poner la meta como un rango honesto para los equipos de la primera oleada, y decir que en marzo se ajusta con datos reales.',
        res: { q: 'buena', fx: { confianza: 3, calidad: 3 }, rel: { gerente: 1 },
          out: 'Mónica escribe: «Meta: bajar las renuncias de los primeros 90 días en la oleada 1. Revisión en marzo». «Así no me comprometo a un número que no sé si llego.»',
          pro: { ok: 'Una meta que se puede revisar con evidencia.', risk: 'A Arturo puede parecerle poco ambiciosa. Explica por qué.' },
          kusi: ['feliz', 'Ambición con honestidad.'] } },
      { id: 'b', label: 'Poner «bajar la rotación de 58 % a 30 % en seis meses»: es lo que Arturo quiere leer.',
        res: { q: 'riesgosa', fx: { confianza: 2, calidad: -4, etica: -2 },
          out: 'Mónica lo escribe. En marzo, si bajó a 45 %, el plan será un «fracaso», aunque haya funcionado.',
          pro: { ok: 'Suena bien hoy.', risk: 'Una meta inventada convierte un buen resultado en un fracaso y quita credibilidad a todo el análisis.' },
          kusi: ['preocupado', '¿De dónde sale ese 30 %?'] } },
    ],
    mirada: { ve: 'Las gerencias quieren un número y los analistas quieren certeza. Una meta en forma de rango, con fecha de revisión, respeta las dos cosas: compromete a la acción sin inventar un resultado que nadie puede garantizar.' },
  },
  {
    id: 'i6', t: '17:20', ch: 'whatsapp', who: null, titulo: 'Invitar a Renzo', banner: 'assets/esc/dedos.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>${F.has('nombre_dado') ? 'Desde el comité, Renzo sabe que su nombre circuló. Le debes al menos esto.' : 'Renzo no sabe todavía que el plan nació, en parte, de sus correos.'} Lucía sugiere invitarlo a la primera cohorte del programa.</p><p>Le escribes. <mark class="clave">Que no suene a castigo</mark>.</p>`,
    type: 'compose', enviaA: 'renzo', para: 'Para: Renzo Villanueva', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué le cuentas', ops: [
        { id: 'q1', t: 'Renzo, se aprobó un programa para supervisores nuevos, con mentor y sesiones en horario de trabajo. Tus correos pidiendo capacitación ayudaron a que exista.', ok: true, por: 'Reconoces su aporte.' },
        { id: 'q2', t: 'Renzo, te van a mandar a un curso por lo de la rotación de tu tienda.', ok: false, por: 'Suena a sanción.' },
      ] },
      { id: 'inv', t: 'La invitación', ops: [
        { id: 'i1', t: '¿Te gustaría estar en la primera cohorte y, si quieres, contar en una sesión lo que viviste al empezar?', ok: true, por: 'Lo invitas a ser parte, no solo a recibir.' },
        { id: 'i2', t: 'Tienes que estar en la primera cohorte.', ok: false, por: 'Una orden, cuando podía ser una invitación.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Lucía te va a llamar para coordinar. Gracias por la apertura del martes.', ok: true },
        { id: 'c2', t: 'Cualquier cosa me avisas.', ok: null, por: 'Correcto, pero frío.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'i1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : sel.que === 'q2' ? 'riesgosa' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'riesgosa' ? -3 : 1, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['renzo_invitado'],
        out: q === 'buena' ? 'Renzo tarda en responder. Cuando lo hace, es un mensaje largo.' : q === 'riesgosa' ? 'Renzo responde: «Ok». Nada más.' : 'Renzo acepta, aunque sin mucho entusiasmo.',
        pro: { ok: 'Convertir a la persona señalada por los datos en parte de la solución.', risk: 'Si el programa suena a castigo, quien más lo necesita lo vivirá como humillación.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'De «caso» a protagonista.' : 'Las palabras pesan.'],
      };
    },
    mirada: {
      ve: 'Renzo pasó de ser «el 150 %» a ser alguien que pidió ayuda y no la tuvo. Invitarlo a contar su experiencia no lo absuelve de los gritos: le da la oportunidad de cambiar y a otros de no repetir su historia.',
      visual: { tipo: 'mensaje', titulo: 'Tu invitación', txt: 'Se aprobó un programa para supervisores nuevos. Tus correos ayudaron a que exista. ¿Te gustaría estar en la primera cohorte y contar lo que viviste al empezar?' },
    },
  },
];
