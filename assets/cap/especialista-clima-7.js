// Analista de Clima y Cultura · Capítulo 7 · «El plan» · Semana 2, martes.
// Hilo de las dos semanas: la encuesta de clima de AseguraPlus y el área de Siniestros, que saca 42 % de favorabilidad.
// Normas citadas:
// - Ley 27942 y su Reglamento (D.S. 014-2019-MIMP), ya citados en los capítulos 5 y 6: el caso reservado no forma parte
//   del plan de clima.
//   https://elperuano.pe/noticia/302759-hostigamiento-sexual-que-deben-hacer-las-empresas-para-prevenir-y-atender-estos-casos-en-el-trabajo
// - Ley 29733 (datos personales), arts. 6 y 7, ya citada: la encuesta de pulso mantiene el mismo umbral de anonimato.
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23
// - El diseño del plan de acción trabaja con buenas prácticas, no con normas.

export const CAP = {
  n: 7, titulo: 'El plan', dia: 'Semana 2, martes', foto: 'assets/foto2/collage.webp',
  lugar: 'AseguraPlus · Oficina central, San Isidro',
  inicio: '08:15', fin: '19:15', cierreHora: '19:00',
  apertura: 'Martes. Sofía cubrió la pizarra con post-its de tres colores: verde para lo que dijeron los analistas, amarillo para lo de los supervisores, rosado para lo que dicen los números. El jueves el plan va a Gerencia General.', boton: 'Mirar la pizarra',
  kusi: 'Medir era la parte fácil. Hoy toca lo difícil: decidir qué cambia, quién lo cambia y cómo sabremos si cambió.',
  lead: 'Elegiste las causas que el plan sí puede mover, escribiste acciones con dueño, fecha e indicador, encontraste por qué el sistema se cuelga a las cinco y preparaste una reunión para trabajar con Gonzalo, no para enfrentarlo.',
  reflexion: '¿Cuál es la diferencia entre una acción y una buena intención?',
  siguiente: { n: 8, titulo: 'El desayuno', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'plan', p: 'Plan de acción de Siniestros', j: 'Sofía · Gonzalo', d: 0, e: 'Borrador hoy, comité el viernes' },
  { id: 'lunes', p: 'Reunión de los lunes', j: 'Gonzalo · supervisores', d: 0, e: 'Errores expuestos con nombre' },
  { id: 'sistema', p: 'Sistema de siniestros', j: 'TI', d: 0, e: 'Se cuelga a las 5 p. m.' },
  { id: 'caso', p: 'Caso reservado', j: 'Dra. Villavicencio', d: 0, e: 'Investigación en curso' },
];

export const FUTURO = {
  causas_bien: ['El plan ataca la reunión de los lunes y la carga del sistema.', 'Son dos cosas que Gonzalo sí puede cambiar.'],
  causas_dispersas: ['El plan intenta resolver demasiadas cosas a la vez.', 'Gonzalo dirá que es imposible.'],
  acciones_smart: ['Cada acción tiene responsable, fecha e indicador.', 'El viernes en comité nadie podrá decir que es «un saludo a la bandera».'],
  acciones_vagas: ['Las acciones del plan dicen «mejorar», «fortalecer», «promover».', 'Gonzalo propondrá un desayuno para llenar el vacío.'],
  ti_cierre: ['Descubriste que un proceso masivo de TI corre a las 5 p. m.', 'TI puede moverlo a las 8 p. m.'],
  pulso: ['El plan incluye una encuesta de pulso de cuatro preguntas en ocho semanas.', 'Con el mismo umbral de anonimato.'],
  agenda_trabajo: ['Le propusiste a Gonzalo una reunión para trabajar el plan juntos.', 'Llegará con su propia idea.'],
};

export const CHATS = {
  equipo: { n: 'Cultura AseguraPlus', sub: 'Sofía, Renzo y tú', c: '#2F6B3F' },
  sofia: { n: 'Sofía Ledesma', sub: 'Jefa de Cultura', who: 'sofia' },
  gonzalo: { n: 'Gonzalo Ferreyra', sub: 'Gerente de Siniestros', who: 'gerente' },
  lucia: { n: 'Lucía Ramos', sub: 'Analista de Siniestros', who: 'colaboradora' },
  renzo: { n: 'Renzo Quispe', sub: 'Practicante de Psicología', c: '#7A4E9C' },
  carmen: { n: 'Carmen Villavicencio', sub: 'Responsable del canal de hostigamiento', c: '#8A3B2E' },
};

export const WSP = [
  { chat: 'equipo', t: '08:20', de: 'Sofía', txt: 'Regla de hoy: si una acción no tiene dueño, no es acción. Es deseo.' },
  { chat: 'gonzalo', t: '09:00', de: 'Gonzalo', txt: 'Sofía me pidió una hora mañana. La tienen. A las 10. Y yo también llevo propuestas.', si: 'gonzalo_sin_nombres' },
  { chat: 'gonzalo', t: '09:00', de: 'Gonzalo', txt: 'Mañana a las 10. Espero que el plan no sea otro juicio contra mi área.', no: 'gonzalo_sin_nombres' },
  { chat: 'lucia', t: '12:15', de: 'Lucía', txt: 'Hoy la reunión fue sin pantalla. Raro. Nadie sabe por qué, pero se respiraba distinto.', si: 'supervisores_escuchados' },
  { chat: 'carmen', t: '16:45', de: 'Carmen', txt: 'Para tu tranquilidad: el procedimiento avanza en plazo. No necesito nada más de ti por ahora. Sigue con el clima.', si: 'caso_en_canal' },
  { chat: 'renzo', t: '18:30', de: 'Renzo', txt: 'Nunca había visto un plan con indicadores de verdad. Lo guardo para mi tesis (sin datos, tranquila 😅).', si: 'acciones_smart' },
];

export const CORREOS = [
  { t: '08:30', de: 'Sofía Ledesma', para: 'Analista de Clima y Cultura', asunto: 'Formato del comité', html: '<p>Gerencia General pide planes de máximo una página: tres acciones, cada una con responsable, fecha, recursos e indicador. El año pasado Siniestros presentó «Fortalecer la comunicación» y un desayuno. Este año no.</p><p>Sofía</p>' },
  { t: '12:50', de: 'Mesa de Ayuda TI', para: 'Analista de Clima y Cultura', asunto: 'RE: Lentitud del sistema de siniestros', html: '<p>Confirmamos que a las 17:00 se ejecuta diariamente el proceso masivo de conciliación con reaseguradoras, que consume gran parte de la capacidad del servidor. Podría reprogramarse a las 20:00 con la aprobación del gerente usuario.</p>', si: 'ti_cierre' },
];

export const QUIZ = [
  { q: '¿Qué hace que una acción de un plan de clima sea una acción de verdad?', ops: ['Que suene bien', 'Que tenga responsable, fecha e indicador', 'Que la apruebe RR.HH.', 'Que sea barata'], ok: 1, por: 'Sin dueño, plazo ni forma de medirla, es solo una intención.' },
  { q: 'El plan de clima de un área debe enfocarse en…', ops: ['Todos los ítems bajos a la vez', 'Pocas causas que el área puede mover y que más pesan', 'Lo que es más fácil de hacer', 'Lo que pidió el gerente'], ok: 1, por: 'Tres acciones bien hechas cambian más que diez a medias.' },
  { q: '¿Va el caso de hostigamiento en el plan de clima del área?', ops: ['Sí, como acción 1', 'No: tiene su propio procedimiento reservado', 'Sí, sin nombres', 'Solo si lo pide el gerente'], ok: 1, por: 'El plan de clima no menciona el procedimiento: los carriles siguen separados.' },
  { q: '¿Cómo se sabe si el plan funcionó?', ops: ['Esperando la encuesta del próximo año', 'Con un pulso breve a las pocas semanas, sobre los mismos temas', 'Preguntándole al gerente', 'Contando cuántas acciones se hicieron'], ok: 1, por: 'Un pulso corto y temprano muestra si algo se mueve antes de que pase otro año.' },
  { q: 'Un indicador como «mejorar el clima» es…', ops: ['Suficiente', 'Demasiado vago: no se puede medir', 'El mejor indicador posible', 'Obligatorio'], ok: 1, por: 'Un indicador dice qué número debe cambiar y para cuándo.' },
];

const BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '08:40', ch: 'documento', who: null, titulo: 'La pizarra de colores', banner: 'assets/esc/idea.webp', lugar: 'La oficina de Sofía', show: ['calidad', 'tiempo'],
    body: (n, F) => `<p>Hay más de treinta post-its en la pizarra. ${F.has('supervisores_escuchados') ? 'Uno amarillo, con letra de Sofía, dice: «La pantalla de los lunes la pide Gonzalo (Rosa)».' : 'Faltan voces de los supervisores: la reunión de ayer se cortó.'} El comité acepta tres acciones. <mark class="clave">Tienes que elegir qué causas atacar</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres causas en las que se enfocará el plan.', boton: 'Enfocar el plan', resumen: 'El plan atacará',
    cols: ['Causa', 'Lo que sabes'],
    rows: [
      { id: 'lunes', cells: ['La reunión de los lunes con errores en pantalla y nombre', 'Explica el miedo a hablar (28 %); viene de una práctica de la gerencia'] },
      { id: 'sistema', cells: ['El sistema que se cuelga a las 5 p. m.', 'Explica gran parte de la carga y los cierres hasta las 9'] },
      { id: 'reconoc', cells: ['Nadie reconoce cuando un caso difícil sale bien', 'Apareció en el focus group y en 30 comentarios'] },
      { id: 'hernan', cells: ['La conducta de un supervisor en particular', 'Está en un procedimiento reservado'] },
      { id: 'fiesta', cells: ['No hubo fiesta de fin de año', 'Seis comentarios'] },
      { id: 'sueldo', cells: ['Sueldos del área', 'El ítem está igual al promedio de la empresa'] },
    ],
    score: { lunes: 3, sistema: 3, reconoc: 2, fiesta: -1, sueldo: -1, hernan: -4 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: picks.includes('hernan') ? -4 : 1 },
        flags: [q === 'buena' ? 'causas_bien' : 'causas_dispersas'], cartera: { plan: q === 'buena' ? 'Tres causas: lunes, sistema, reconocimiento' : 'Causas dispersas' },
        out: q === 'buena' ? 'Sofía despega los post-its que no elegiste y los pega en una esquina: «No se tiran. Pero no son para este plan». Quedan tres columnas limpias.' : picks.includes('hernan') ? 'Sofía quita el post-it de la conducta del supervisor: «Eso no va aquí. Si lo ponemos, el plan se vuelve un juicio y el caso se contamina».' : 'Quedan causas que pesan poco o que el área no puede mover.',
        pro: { ok: 'Un buen plan ataca pocas causas, con peso real, que el área puede cambiar.', risk: 'Incluir un caso reservado en el plan expone a todos y lo convierte en chisme de comité.', info: 'La reunión de los lunes es la causa con más palanca: depende de una sola decisión del gerente.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Tres causas con palanca. ¡Bacán!' : 'Elige lo que el área sí puede mover.'],
      };
    },
    mirada: {
      ve: 'El error más común en un plan de clima es querer arreglarlo todo. La pregunta útil es: ¿qué causa, si cambia, mueve más ítems a la vez? En Siniestros, la reunión de los lunes toca el miedo, el respeto y el reconocimiento al mismo tiempo.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Impacto en el clima', cuadrantes: ['Hazlo ya', 'Planifícalo', 'Si sobra tiempo', 'No va en este plan'], items: [['Reunión de los lunes', .2, .95], ['Sistema de las 5', .5, .8], ['Reconocimiento', .35, .6], ['Fiesta', .3, .15], ['Sueldos', .9, .2], ['Caso reservado', .5, .05]] },
    },
  },
  {
    id: 'p2', t: '10:00', ch: 'documento', who: null, titulo: 'Tres acciones en una página', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Abres la plantilla del comité: una tabla de una página. El plan del año pasado sigue en la carpeta: «Fortalecer la comunicación. Responsable: todos. Fecha: permanente». <mark class="clave">Este año cada casilla tiene que decir algo</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada acción del plan.', boton: 'Guardar el borrador',
    bloques: [
      { id: 'a1', t: 'Acción 1 · La reunión de los lunes', n: 2, ops: [
        { id: 'a1a', t: 'Desde la próxima semana, los errores se conversan en privado; la reunión muestra indicadores del equipo, sin nombres. Responsable: gerente de Siniestros.', ok: true, por: 'Concreta, con dueño y fecha.' },
        { id: 'a1b', t: 'Indicador: ítem «puedo hablar sin temor» en el pulso de 8 semanas, de 28 % a 45 %.', ok: true, por: 'Un número, un plazo.' },
        { id: 'a1c', t: 'Promover una cultura de respeto en las reuniones.', ok: false, por: 'Suena bien y no dice qué cambia.' },
      ] },
      { id: 'a2', t: 'Acción 2 · La carga del sistema', n: 2, ops: [
        { id: 'a2a', t: 'Pedir a TI revisar por qué el sistema se cuelga a las 5 p. m. y proponer una solución en dos semanas. Responsable: gerente de Siniestros con TI.', ok: true },
        { id: 'a2b', t: 'Indicador: casos cerrados después de las 7 p. m., medidos cada semana.', ok: true, por: 'Un dato que ya existe en el sistema.' },
        { id: 'a2c', t: 'Pedir al equipo paciencia con el sistema nuevo.', ok: false, por: 'No es una acción: es pedir que aguanten.' },
      ] },
      { id: 'a3', t: 'Acción 3 · Reconocimiento y seguimiento', n: 2, ops: [
        { id: 'a3a', t: 'Cada supervisor reconoce en la reunión semanal un caso difícil bien resuelto. Responsable: supervisores.', ok: true, por: 'Usa la misma reunión para lo contrario de exponer.' },
        { id: 'a3b', t: 'Encuesta de pulso de cuatro preguntas en ocho semanas, con el mismo umbral de anonimato. Responsable: Cultura.', ok: true, por: 'Así se sabe si algo se movió.' },
        { id: 'a3c', t: 'Premio al «empleado del mes» con foto en el Facebook interno.', ok: false, por: 'Premia a una persona y deja al resto igual; no ataca la causa.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 2 : 0 },
        flags: [q === 'riesgosa' ? 'acciones_vagas' : 'acciones_smart', ...(q === 'riesgosa' ? [] : ['pulso'])], cartera: { plan: q === 'buena' ? 'Borrador: 3 acciones con dueño, fecha e indicador' : 'Borrador con acciones vagas' },
        out: q === 'buena' ? 'Sofía lee la página dos veces. «Esto Gonzalo lo va a pelear. Pero no va a poder decir que es vago.»' : 'El borrador tiene palabras que el comité ya conoce de memoria: promover, fortalecer, sensibilizar.',
        pro: { ok: 'Una acción con dueño, fecha e indicador se puede exigir y se puede medir.', risk: 'Las acciones vagas dejan espacio para que cualquier cosa, un desayuno incluido, «cuente» como avance.', info: 'Usa indicadores que ya existen, como los cierres después de las 7: no necesitas inventar mediciones.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cada casilla dice algo!' : '¿Quién hace qué, para cuándo?'],
      };
    },
    rules: [[BP, 'Cada acción: qué cambia, quién lo hace, para cuándo y cómo se mide.'], [BP, 'El pulso de seguimiento mantiene el umbral de anonimato de la encuesta.']],
    mirada: {
      ve: 'La diferencia entre un plan de clima que funciona y uno decorativo cabe en tres columnas: responsable, fecha, indicador. Cuando esas columnas están vacías, el plan se llena de desayunos.',
      visual: { tipo: 'cambio', titulo: 'Del plan del año pasado al de este año', pares: [['«Fortalecer la comunicación»', '«Errores en privado desde la próxima semana»'], ['Responsable: todos', 'Responsable: gerente de Siniestros'], ['Fecha: permanente', 'Pulso a las 8 semanas: de 28 % a 45 %']] },
    },
  },
  {
    id: 'p3', t: '11:45', ch: 'llamada', who: null, titulo: '¿Por qué a las cinco?', banner: 'assets/foto2/callcenter.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Si el sistema se cuelga todos los días a la misma hora, no es mala suerte. Antes de escribir la acción 2 como «pedir a TI que revise», haces tres llamadas.</p>`,
    type: 'calls',
    calls: [['Mesa de Ayuda TI', 'Contesta: hay un proceso a las 5', 'A las cinco corre la conciliación con reaseguradoras. Se podría mover a las ocho, pero lo tiene que pedir el gerente.'], ['Rosa Mamani, supervisora', 'Contesta: confirma el efecto', 'Desde que está el sistema nuevo, de cinco a siete no se puede ni abrir un expediente. Y los clientes llaman justo a esa hora.'], ['Pulso Consultores', 'Contesta: el pulso es posible', 'Un pulso de cuatro preguntas para un área sale en una semana. Aplicamos el mismo umbral de cinco respuestas.']],
    prompt: 'Ya sabes por qué se cuelga el sistema y que hay solución. ¿Qué haces con eso?',
    choices: [
      { id: 'a', label: 'Reescribir la acción 2: el gerente pide a TI mover la conciliación a las 8 p. m. esta semana, y se mide el cambio en los cierres tardíos.',
        res: { q: 'buena', fx: { calidad: 5, tiempo: 2 }, flags: ['ti_cierre'], cartera: { sistema: 'Causa encontrada: conciliación a las 5 p. m.' },
          out: 'La acción 2 deja de ser «revisar» y se vuelve «mover un proceso de hora». Es la acción más barata del plan y quizá la que más alivio dé.',
          pro: { ok: 'Encontrar la causa concreta convierte una queja en una solución.', info: 'Una acción que se nota en una semana le da credibilidad a todo el plan.' },
          kusi: ['celebra', '¡Detective de servidores!'] } },
      { id: 'b', label: 'Dejar la acción como estaba: «pedir a TI que revise». Que ellos vean los detalles.',
        res: { q: 'aceptable', fx: { calidad: 1 },
          out: 'La acción queda bien escrita, pero genérica. TI la pondrá en su cola de pedidos, detrás de otros cuarenta.',
          pro: { ok: 'La acción tiene dueño.', risk: 'Sabiendo la solución, dejarla genérica retrasa el alivio semanas.' },
          kusi: ['pensando', 'Ya tenías la respuesta…'] } },
    ],
    rules: [[BP, 'Antes de escribir una acción, busca la causa concreta.']],
    mirada: {
      ve: 'Muchos problemas de clima tienen raíces operativas: un sistema lento, un horario mal pensado, un proceso que choca con otro. Quien analiza clima no necesita ser experta en sistemas, pero sí preguntar «¿por qué a esa hora?».',
      visual: { tipo: 'flujo', titulo: 'De la queja a la causa', pasos: ['«Cerramos a las 9»', 'El sistema se cuelga a las 5', 'Conciliación masiva a las 5', 'Moverla a las 8 p. m.'] },
    },
  },
  {
    id: 'p4', t: '14:20', ch: 'documento', who: null, titulo: 'Después del comité', banner: 'assets/esc/escalera.webp', lugar: 'Tu escritorio', show: ['calidad', 'confianza'],
    body: () => `<p>Renzo pregunta, con la boca llena de galleta: «¿Y qué pasa después del viernes? El año pasado el plan se aprobó y ya». Es la pregunta correcta. <mark class="clave">Un plan sin seguimiento es un PowerPoint</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena lo que pasa con el plan, desde mañana. Usa las flechas.', boton: 'Guardar la ruta',
    items: [
      { id: 'trab', t: 'Trabajar el borrador con Gonzalo y ajustarlo con él', por: 'Que el plan sea suyo.' },
      { id: 'comite', t: 'Presentarlo en el comité de Gerencia General', por: 'Con el gerente como quien lo presenta.' },
      { id: 'devol', t: 'Devolver al equipo lo que dijo y qué se hará', por: 'Antes de implementar, para que vean que se les escuchó.' },
      { id: 'impl', t: 'Implementar las tres acciones con sus fechas', por: 'La reunión de los lunes cambia primero.' },
      { id: 'pulso', t: 'Aplicar el pulso de cuatro preguntas a las ocho semanas', por: 'Para saber si algo se movió.' },
      { id: 'ajus', t: 'Revisar resultados con el equipo y ajustar', por: 'El plan se corrige con datos.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 2 : 0 },
        out: q === 'buena' ? 'Renzo copia la ruta en su cuaderno. «O sea que la devolución va antes de implementar. Nunca lo había pensado.»' : 'La ruta tiene saltos: implementar antes de devolver, o medir antes de cambiar algo.',
        pro: { ok: 'Devolver antes de implementar y medir temprano es lo que distingue un proceso de clima de una encuesta anual.', risk: 'Si el equipo ve cambios sin saber de dónde vienen, no los conecta con lo que dijo.', info: 'Pon la fecha del pulso en el calendario de Gonzalo desde ya.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Un plan con vida después del comité.' : 'El orden también cuenta la historia.'],
      };
    },
    mirada: {
      ve: 'La encuesta anual es una foto; el pulso es una película corta. Medir a las ocho semanas permite saber si la reunión de los lunes cambió de verdad, antes de que pase otro año y la gente vuelva a escribir «¿para qué respondemos?».',
      visual: { tipo: 'linea', titulo: 'El plan después del viernes', hitos: [['Miércoles', 'Trabajo con Gonzalo'], ['Viernes', 'Comité'], ['Próxima semana', 'Devolución y cambios'], ['Semana 8', 'Pulso'], ['Semana 9', 'Ajuste']] },
    },
  },
  {
    id: 'p5', t: '16:00', ch: 'whatsapp', who: 'gerente', titulo: 'La agenda para Gonzalo', banner: 'assets/foto/oficina-abierta.webp', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Mañana a las 10 es la reunión con Gonzalo. ${F.has('gonzalo_sin_nombres') ? 'Ayer salió furioso de tu escritorio, pero dio la hora.' : 'Dio la hora, con pocas ganas.'} Antes, le mandas la agenda por WhatsApp, como él prefiere. <mark class="clave">Que entienda que va a trabajar, no a recibir un juicio</mark>.</p>`,
    type: 'compose', enviaA: 'gonzalo', para: 'Para: Gonzalo Ferreyra · Gerente de Siniestros', boton: 'Enviar el WhatsApp',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'prop', t: 'Para qué es la reunión', ops: [
        { id: 'p1', t: 'Gonzalo, mañana la idea es construir con usted el plan que presentará el viernes. Llevamos un borrador para cambiarlo juntos.', ok: true, por: 'El plan es suyo; Cultura acompaña.' },
        { id: 'p2', t: 'Gonzalo, mañana le presentamos el plan que irá al comité.', ok: false, por: 'Suena a plan impuesto.' },
      ] },
      { id: 'dato', t: 'Qué le adelantas', ops: [
        { id: 'd1', t: 'Una buena noticia: encontramos por qué el sistema se cuelga a las 5 y se arregla con una aprobación suya.', ok: true, por: 'Empieza con algo que él puede ganar.' },
        { id: 'd2', t: 'El punto más delicado es su reunión de los lunes.', ok: false, por: 'Lo pone en guardia desde la noche anterior.' },
      ] },
      { id: 'pide', t: 'Qué le pides', ops: [
        { id: 'k1', t: 'Si tiene propuestas, tráigalas: las revisamos con los mismos criterios.', ok: true, por: 'Invita y, a la vez, pone una regla.' },
        { id: 'k2', t: 'Le pedimos que no traiga otras propuestas para no perder tiempo.', ok: false, por: 'Cierra la puerta a que sienta el plan suyo.' },
      ] },
    ],
    res: sel => {
      const buenas = ['p1', 'd1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, personas: q === 'buena' ? 2 : 0 }, rel: { gerente: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: ['agenda_trabajo'],
        out: q === 'buena' ? 'Gonzalo responde: «Lo del sistema me interesa. Y sí, llevo una propuesta: algo para levantar la moral del equipo».' : q === 'aceptable' ? 'Gonzalo responde: «Ok». Y luego: «Llevo una idea para la moral del equipo».' : 'Gonzalo responde: «Ya veo que todo está decidido». Llegará con una idea propia, para no sentirse arrinconado.',
        pro: { ok: 'Una agenda que invita a construir y empieza con algo positivo baja la defensa del gerente.', risk: 'Si siente que el plan se lo imponen, buscará una alternativa propia, aunque sea débil.', info: '«Los mismos criterios» te dará una regla clara para evaluar lo que él traiga.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Lo invitaste a construir. ¡Dale!' : 'Mañana llega con su propia idea…'],
      };
    },
    rules: [[BP, 'El plan de acción es del líder del área; Cultura diseña y acompaña.']],
    mirada: {
      ve: 'El gerente es quien sostendrá el plan cuando Cultura no esté mirando. Por eso la reunión previa no se presenta: se trabaja. Y empezar con algo que él puede ganar, como el arreglo del sistema, le permite entrar sin sentirse acusado.',
      visual: { tipo: 'balanza', a: { t: 'Presentarle el plan', items: ['Más rápido', 'Plan «perfecto»'] }, b: { t: 'Trabajar el plan con él', items: ['Lo siente suyo', 'Lo defiende en el comité', 'Lo sostiene después'] } },
    },
  },
  {
    id: 'p6', t: '18:40', ch: 'presencial', who: 'sofia', titulo: '«Algo para la moral»', banner: 'assets/foto/cafe.webp', lugar: 'La oficina de Sofía', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Le enseñas a Sofía la respuesta de Gonzalo: «algo para levantar la moral». Ella se ríe sin ganas y se sirve el último café del termo, ya tibio. ${F.has('acciones_vagas') ? '«Con un borrador tan general, cualquier idea entra.»' : '«Con tu borrador, al menos tenemos con qué comparar.»'}</p><p>«Apuesto a que es un desayuno. <mark class="clave">¿Cómo lo recibimos mañana?</mark>»</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: '«Sin burlarnos. Le preguntamos qué problema resuelve y cómo sabremos si funcionó, con los mismos criterios que las otras acciones.»',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { sofia: 1 },
          out: 'Sofía asiente despacio. «Eso. Que lo descubra él.» Apagan la luz a las siete. En el ascensor huele a perfume de la gente de Comercial que sale de su after office.',
          kusi: ['celebra', 'Preguntas, no burlas. ¡Así!'] } },
      { id: 'b', label: '«Le decimos de frente que un desayuno no sirve para nada.»',
        res: { q: 'aceptable', fx: { confianza: 0 },
          out: 'Sofía hace una mueca: «Puede que tengas razón. Pero si se lo decimos así, lo defiende hasta la muerte».',
          kusi: ['pensando', 'La razón sin tacto se pierde.'] } },
    ],
    mirada: { ve: 'Cuando alguien propone una acción decorativa, el rechazo directo suele atrincherarlo. Aplicarle las mismas preguntas que al resto (¿qué causa ataca?, ¿cómo se mide?) le permite ver por sí mismo si es acción o adorno.' },
  },
];
