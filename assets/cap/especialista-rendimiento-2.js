// Analista de Gestión del Desempeño · Capítulo 2 · «Los rezagados» · Semana 1, martes.
// Hilo de las dos semanas: el cierre del ciclo anual de evaluación de Alimentos Lima S.A. (Ate), con el 80 % «sobresaliente».
// Normas: este capítulo no cita artículos nuevos. La jornada de una practicante se explica como principio
// (la fija su convenio de prácticas), sin cifras. Ya citadas: Ley 29733, art. 19 (https://spij.minjus.gob.pe).

export const CAP = {
  n: 2, titulo: 'Los rezagados', dia: 'Semana 1, martes', foto: 'assets/3d/scenes/planta.webp',
  lugar: 'Alimentos Lima S.A. · Talento y planta de Ate',
  inicio: '08:00', fin: '19:00', cierreHora: '18:40',
  apertura: 'Martes. Faltan 300 evaluaciones y quedan cuatro días. El sistema amaneció lento, el café de la máquina sabe a cartón y en la planta suena la línea de fideos desde las seis.', boton: 'Abrir el tablero',
  kusi: 'Perseguir evaluadores también es un arte. ¡Que nadie se te escape… ni se te queme!',
  lead: 'Llamaste a los evaluadores más atrasados, armaste un tablero que se entiende de un vistazo, bajaste a la planta a evaluar con Rafael y cuidaste que el cierre no te coma al equipo.',
  reflexion: '¿Por qué tantos jefes dejan la evaluación de su gente para el último día?',
  siguiente: { n: 3, titulo: 'Las reglas del comité', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'pendientes', p: '300 evaluaciones pendientes', j: 'Evaluadores', d: 0, e: '214 en planta' },
  { id: 'tablero', p: 'Tablero de avance', j: 'Talento', d: 0, e: 'Sin armar' },
  { id: 'planta', p: 'Evaluaciones de planta', j: 'Rafael Tapia', d: 0, e: '90 operarios sin evaluar' },
  { id: 'distribucion', p: 'Informe de distribución', j: 'Paola · Talento', d: 0, e: 'En revisión' },
  { id: 'calibracion', p: 'Comité de calibración', j: 'Gerentes', d: 0, e: 'Viernes 9:00' },
];

export const FUTURO = {
  llamadas_utiles: ['Con cada evaluador acordaste una fecha y una forma de ayudarlo.', 'Recuperarás 120 evaluaciones antes del jueves.'],
  llamadas_presion: ['Llamaste solo para presionar.', 'Varios evaluadores cerrarán rápido y sin comentarios.'],
  tablero_ok: ['Tu tablero muestra avance por gerencia y calidad, no solo cantidad.', 'Paola lo proyectará en el comité.'],
  rafael_sesion: ['Evaluaste con Rafael en papel y lo digitaron juntos.', 'Rafael será tu aliado en la planta.'],
  rafael_relleno: ['Llenaste tú las evaluaciones de los operarios de Rafael.', 'Esas notas no las escribió quien conoce a la gente.'],
  rafael_prorroga: ['Le diste a Rafael una semana más.', 'Planta llegará al comité sin notas.'],
  wendy_cuidada: ['Mandaste a Wendy a su casa a su hora.', 'Wendy te tiene confianza.'],
  wendy_noche: ['Wendy se quedó hasta la noche llamando.', 'Mañana llegará cansada.'],
  recordatorio_claro: ['Tu recordatorio decía qué falta, para cuándo y cómo pedir ayuda.', 'Menos «¿cómo era?» en tu bandeja.'],
};

export const CHATS = {
  talento: { n: 'Talento · Alimentos Lima', sub: 'Paola, Wendy, Mónica y tú', c: '#2F6B3F' },
  paola: { n: 'Paola Ríos', sub: 'Jefa de Talento', who: 'paola' },
  alberto: { n: 'Alberto Sáenz', sub: 'Gerente de Ventas', who: 'gerente' },
  andres: { n: 'Andrés Huerta', sub: 'Supervisor de ventas', who: 'evaluado' },
  wendy: { n: 'Wendy Rangel', sub: 'Practicante de Talento', c: '#C05621' },
  evaluadores: { n: 'Evaluadores 2026', sub: '112 jefes y jefas', c: '#1F5C99' },
  rafael: { n: 'Rafael Tapia', sub: 'Jefe de Producción · Planta', c: '#6B4F2F' },
};

export const WSP = [
  { chat: 'talento', t: '08:02', de: 'Paola', txt: 'Lo de la licencia ya lo hablé con Legal. Hoy foco total en los rezagados 🏃‍♀️', si: 'formato_leido' },
  { chat: 'talento', t: '08:02', de: 'Paola', txt: 'Hoy foco total en los rezagados 🏃‍♀️ Mañana vemos tu informe.', no: 'formato_leido' },
  { chat: 'talento', t: '08:15', de: 'Wendy', txt: 'Ya bajé el reporte. El sistema demoró 11 minutos en exportar, récord 🙃' },
  { chat: 'alberto', t: '09:30', de: 'Alberto', txt: 'En Ventas ya cerramos todo 💪 Eso es compromiso.' },
  { chat: 'andres', t: '10:05', de: 'Andrés', txt: 'Gracias por explicarme ayer. Espero el viernes con calma.', si: 'andres_respetado' },
  { chat: 'andres', t: '10:05', de: 'Andrés', txt: 'No he dormido pensando en esa nota. ¿Se puede cambiar?', si: 'andres_filtrado' },
  { chat: 'rafael', t: '16:50', de: 'Rafael', txt: 'Ya van 60 de 90. Mañana a las 6 termino con el turno de noche. Gracias, joven.', si: 'rafael_sesion' },
  { chat: 'evaluadores', t: '17:20', de: 'Carla (Marketing)', txt: 'Gracias por el recordatorio, clarito. Mañana cierro las mías.', si: 'recordatorio_claro' },
];

export const CORREOS = [
  { t: '08:05', de: 'Sistema de Desempeño', para: 'Talento', asunto: 'Avance del ciclo · martes', html: '<p>Cerradas: 1,200. Pendientes: 300 (Operaciones 214, Administración 41, Marketing 28, Logística 17). El sistema estará en mantenimiento de 13:00 a 14:00.</p>' },
  { t: '12:40', de: 'Paola Ríos', para: 'Analista de Gestión del Desempeño', asunto: 'Plazo', html: '<p>Gerencia General no quiere mover el plazo del viernes. Si algún gerente te pide prórroga, me lo derivas a mí. Gracias. Paola</p>' },
];

export const QUIZ = [
  { q: 'Un jefe de planta no usa el sistema y tiene 90 evaluaciones pendientes. Lo más útil es…', ops: ['Llenarlas tú con la nota «cumple»', 'Sentarte con él, evaluar en papel y digitar juntos', 'Darle un mes más', 'Reportarlo a gerencia y nada más'], ok: 1, por: 'La nota la escribe quien conoce a la persona. Tú le quitas las barreras, no la responsabilidad.' },
  { q: '¿Qué debe mostrar un buen tablero de avance?', ops: ['Solo el número de evaluaciones cerradas', 'Avance por gerencia y si las evaluaciones tienen comentarios', 'El ranking de jefes más lentos con foto', 'Las notas de cada persona'], ok: 1, por: 'Cantidad y calidad: cerrar rápido sin comentarios no sirve para calibrar.' },
  { q: 'Para un recordatorio a evaluadores, lo más importante es…', ops: ['Que sea largo y formal', 'Qué falta, para cuándo y cómo pedir ayuda', 'Amenazar con el bono', 'Mandarlo a las 11 de la noche'], ok: 1, por: 'Un recordatorio útil quita excusas: dice qué, cuándo y cómo.' },
  { q: 'Tu practicante se ofrece a quedarse hasta la noche para avanzar. ¿Qué haces?', ops: ['Aceptas: es voluntario', 'La mandas a su hora: su jornada la fija su convenio y está para aprender', 'Le pagas un taxi y que siga', 'Le das la tarea para hacerla en casa'], ok: 1, por: 'Una practicante no es mano de obra extra: su jornada formativa está pactada en su convenio.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '08:30', ch: 'llamada', who: null, titulo: 'Los cinco más atrasados', banner: 'assets/foto2/callcenter.webp', lugar: 'Tu escritorio', show: ['tiempo', 'personas', 'calidad'],
    body: () => `<p>Con el reporte en la mano, llamas a los cinco evaluadores con más pendientes. Ninguno contesta a la primera, y el que contesta está en la línea de producción, con tapones en los oídos.</p>`,
    type: 'calls',
    calls: [['Rafael Tapia · Producción', 'Contesta a gritos desde la planta', '¡Joven, yo no sé usar ese sistema! ¡90 personas tengo! ¡Venga usted!'], ['Carla Bustos · Marketing', 'Contesta: le faltan 6', 'Las tengo a medias, es que el sistema me bota a cada rato.'], ['Hugo Lazo · Logística', 'No contesta'], ['Patricia Inga · Administración', 'Contesta: está de vacaciones', 'Regreso el lunes. ¿No pueden esperarme?'], ['Diego Ramos · Mantenimiento', 'Contesta: no sabía que tenía que evaluar', '¿Yo evalúo? Pensé que eso lo hacía RR.HH.']],
    prompt: 'Cinco evaluadores, cinco problemas distintos. ¿Cómo sigues?',
    choices: [
      { id: 'a', label: 'Acordar con cada uno una fecha antes del viernes y una ayuda concreta: visita, guía o que Patricia delegue en su segunda.',
        res: { q: 'buena', fx: { tiempo: -1, personas: 3, calidad: 3 }, flags: ['llamadas_utiles'], cartera: { pendientes: '5 evaluadores con fecha y ayuda' },
          out: 'Carla recibe una guía de dos pasos para que el sistema no la bote. Patricia deja a su asistente con acceso. A Rafael le prometes ir a la planta antes del almuerzo.',
          pro: { ok: 'Cada rezagado tiene un motivo distinto. Resolver el motivo cierra más evaluaciones que presionar.', info: 'Diego no sabía que evaluaba: hay un problema de inducción para jefes nuevos.' },
          kusi: ['feliz', '¡Cinco llamadas, cinco caminos!'] } },
      { id: 'b', label: 'Recordarles a todos que el plazo vence el viernes y que sin evaluación su equipo no cobra bono.',
        res: { q: 'riesgosa', fx: { tiempo: 2, personas: -3, calidad: -3 }, flags: ['llamadas_presion'],
          out: 'Funciona a medias: Carla cierra sus seis en diez minutos, todas «sobresaliente» y sin un comentario.',
          pro: { ok: 'Transmites urgencia.', risk: 'La presión sin ayuda produce evaluaciones rápidas y vacías, justo lo que infla la curva.' },
          kusi: ['preocupado', 'Rápido no siempre es bien.'] } },
    ],
    rules: [[BP, 'Antes de presionar, pregunta por qué no han evaluado.']],
    mirada: {
      ve: 'Detrás de cada evaluación pendiente hay una razón: un sistema que se cuelga, un jefe que no sabe que evalúa, alguien de vacaciones. El seguimiento que funciona es el que resuelve esas razones.',
      visual: { tipo: 'matriz', x: 'Pendientes', y: 'Facilidad para cerrar', cuadrantes: ['Ayuda rápida', 'Visita', 'Recordatorio', 'Escalar'], items: [['Carla', .15, .9], ['Rafael', .95, .3], ['Patricia', .3, .6], ['Diego', .25, .7], ['Hugo', .2, .2]] },
    },
  },
  {
    id: 'b2', t: '09:45', ch: 'documento', who: null, titulo: 'El tablero de avance', banner: 'assets/foto2/celebra-laptop.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Paola quiere ver el avance todos los días a las 5 y proyectarlo en el comité. Wendy te pasa su versión: una tabla de 300 filas en letra 8. Decides armar <mark class="clave">un tablero que se entienda en un minuto</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del tablero.', boton: 'Publicar el tablero',
    bloques: [
      { id: 'avance', t: 'Avance', n: 2, ops: [
        { id: 'a1', t: 'Porcentaje cerrado por gerencia, con semáforo.', ok: true },
        { id: 'a2', t: 'Días que faltan para el viernes.', ok: true },
        { id: 'a3', t: 'Lista de las 300 personas sin evaluar, con su DNI.', ok: false, por: 'Expone datos personales sin necesidad: basta con contar por evaluador.' },
      ] },
      { id: 'calidad', t: 'Calidad', n: 2, ops: [
        { id: 'c1', t: 'Porcentaje de evaluaciones cerradas sin comentarios.', ok: true, por: 'Cerrar rápido sin comentarios no sirve para calibrar.' },
        { id: 'c2', t: 'Evaluadores que pusieron la misma nota a todo su equipo.', ok: true },
        { id: 'c3', t: 'Promedio de notas de cada persona evaluada.', ok: false, por: 'Notas individuales sin calibrar no van en un tablero abierto.' },
      ] },
      { id: 'accion', t: 'Acción', n: 1, ops: [
        { id: 'x1', t: 'Para cada gerencia en rojo, quién la está ayudando y cuándo.', ok: true },
        { id: 'x2', t: 'Ranking de los jefes más lentos para enviarlo a toda la empresa.', ok: false, por: 'Exponer a jefes no los ayuda a evaluar mejor.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['tablero_ok'] : [], cartera: { tablero: q === 'buena' ? 'Tablero de avance y calidad publicado' : 'Tablero con datos de más' },
        out: q === 'buena' ? 'Paola lo abre en el celular entre dos reuniones: «Esto lo proyecto el viernes. Me encanta lo de “sin comentarios”».' : 'El tablero está, pero muestra lo que no debe o no ayuda a nadie a moverse.',
        pro: { ok: 'Medir calidad además de cantidad cambia lo que los evaluadores hacen.', risk: 'Un tablero con DNI o notas individuales es un riesgo de datos personales.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un minuto y se entiende todo!' : 'Algo sobra en ese tablero.'],
      };
    },
    rules: [[LEY, 'Ley 29733: se tratan solo los datos personales necesarios para la finalidad.']],
    mirada: {
      ve: 'Lo que se mide se mueve. Si el tablero solo cuenta evaluaciones cerradas, los jefes cierran rápido. Si también muestra cuántas tienen comentarios, empiezan a escribir.',
      visual: { tipo: 'embudo', titulo: 'Avance por gerencia (%)', niveles: [['Ventas', 100], ['Logística', 88], ['Marketing', 78], ['Administración', 70], ['Operaciones', 41]] },
    },
  },
  {
    id: 'b3', t: '11:20', ch: 'presencial', who: null, titulo: 'Rafael y sus 90', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Oficina de producción, junto a la línea de fideos', show: ['etica', 'personas', 'calidad'],
    body: () => `<p>Te pones casco, guardapolvo y tapones. Rafael Tapia, 61 años, de Huancayo, 34 en la empresa, te recibe en una oficina de vidrio que vibra con las máquinas. Tiene las fichas de sus operarios en un fólder de cartón.</p><p>«Mire, joven, yo a mi gente la conozco de memoria. Pero esa computadora me odia. <mark class="clave">Póngales “cumple” a todos usted y ya está</mark>, yo firmo.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle evaluar en papel ahora mismo, operario por operario, y que Wendy digite lo que él diga.',
        res: { q: 'buena', fx: { etica: 4, calidad: 4, tiempo: -3 }, flags: ['rafael_sesion'], cartera: { planta: '60 de 90 evaluados con Rafael' },
          out: 'Rafael se pone los lentes. «A ver, Huamán… este muchacho arregló la envasadora un domingo.» En dos horas tienen 60 evaluaciones con comentarios que nadie más podría escribir.',
          pro: { ok: 'Le quitas la barrera tecnológica, no la responsabilidad de evaluar.', risk: 'Te cuesta la mañana.', info: 'Si Rafael no puede con el sistema, otros jefes de planta tampoco.' },
          kusi: ['celebra', '¡Ninguna computadora sabe lo que sabe Rafael!'] } },
      { id: 'b', label: 'Hacerlo: pones «cumple» a los 90, él firma y la planta llega al viernes con el 100 %.',
        res: { q: 'riesgosa', fx: { etica: -5, calidad: -4, tiempo: 3 }, flags: ['rafael_relleno'], cartera: { planta: '90 «cumple» iguales' },
          out: 'El tablero de Operaciones se pone verde. Pero 90 personas tienen una nota que no escribió quien las conoce, y nadie sabrá quién arregló la envasadora un domingo.',
          pro: { ok: 'Planta cierra a tiempo.', risk: 'Una nota que no refleja nada es peor que una nota pendiente: no sirve ni para premiar ni para mejorar.' },
          kusi: ['triste', 'Noventa notas iguales no dicen nada.'] } },
      { id: 'c', label: 'Darle una semana más: Planta es distinta y no se le puede exigir lo mismo.',
        res: { q: 'aceptable', fx: { etica: 1, tiempo: 1, cumplimiento: -3 }, flags: ['rafael_prorroga'], cartera: { planta: 'Prórroga sin aprobar' },
          out: 'Rafael respira aliviado. A las 12:40 llega el correo de Paola: Gerencia General no mueve el plazo. Tendrás que volver a la planta.',
          pro: { ok: 'Reconoces que la planta tiene otra realidad.', risk: 'Prometiste una prórroga que no te tocaba dar.' },
          kusi: ['pensando', '¿Esa prórroga era tuya?'] } },
    ],
    rules: [[POL, 'La evaluación la hace el jefe directo. Talento facilita, no evalúa.'], [POL, 'Las prórrogas las aprueba la Jefatura de Talento.']],
    mirada: {
      ve: 'Rafael no es flojo: es un jefe con oficio al que nadie le enseñó el sistema. En planta, la evaluación digital puede ser una barrera. Adaptar el medio sin cambiar quién evalúa es lo que hace justa la nota.',
      visual: { tipo: 'balanza', a: { t: 'Rellenar por él', items: ['Planta al 100 %', 'Mañana libre'] }, b: { t: 'Evaluar con él', items: ['Notas con comentarios reales', 'Un jefe que aprende', 'Operarios evaluados por quien los conoce'] } },
    },
  },
  {
    id: 'b4', t: '14:10', ch: 'documento', who: null, titulo: 'Plan para los últimos tres días', banner: 'assets/esc/reloj.webp', lugar: 'Comedor de la planta', show: ['tiempo', 'cumplimiento'],
    body: () => `<p>Almuerzas un ají de gallina en el comedor de planta, con el celular en una mano. El sistema volvió del mantenimiento y Paola te pide <mark class="clave">un plan de escalamiento</mark> para que el viernes no falte nadie.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del plan, del primero al último. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'rec', t: 'Martes: recordatorio a todos los evaluadores con lo que falta y cómo pedir ayuda', por: 'Primero, informar.' },
      { id: 'ayu', t: 'Miércoles: ayuda directa a quienes tienen problemas con el sistema', por: 'Quitar barreras.' },
      { id: 'lla', t: 'Jueves en la mañana: llamada personal a cada jefe con pendientes', por: 'El contacto uno a uno.' },
      { id: 'ger', t: 'Jueves en la tarde: aviso al gerente del área con los nombres de sus jefes atrasados', por: 'Escalar con datos.' },
      { id: 'pao', t: 'Viernes a las 8:00: Paola informa a Gerencia General lo que sigue pendiente', por: 'Último recurso, con transparencia.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 3 : 0, cumplimiento: q === 'buena' ? 3 : -1 }, rel: { paola: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Paola aprueba el plan sin cambios: «Primero ayudamos, después escalamos. Así me gusta».' : 'Paola reordena: «Si escalas antes de ayudar, los gerentes se van a sentir emboscados».',
        pro: { ok: 'Escalar de menos a más protege la relación con los jefes.', risk: 'Llegar a Gerencia General el martes quema el último recurso.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? 'Un plan con escalones. ¡Dale!' : 'El orden importa.'],
      };
    },
    mirada: {
      ve: 'Un plan de seguimiento escala de lo amable a lo formal. Si empiezas por la presión, no te queda dónde subir.',
      visual: { tipo: 'linea', titulo: 'Escalamiento', hitos: [['Martes', 'Recordatorio'], ['Miércoles', 'Ayuda'], ['Jueves', 'Llamada y gerente'], ['Viernes', 'Gerencia General']] },
    },
  },
  {
    id: 'b5', t: '15:30', ch: 'whatsapp', who: null, titulo: 'El recordatorio', banner: 'assets/esc/alarma.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Toca el primer escalón: el recordatorio al grupo de evaluadores. El último que mandó Talento decía solo «Recordar evaluar 🙏» y tiene 112 vistos y ninguna respuesta.</p><p>Esta vez quieres que <mark class="clave">nadie tenga excusa</mark>.</p>`,
    type: 'compose', enviaA: 'evaluadores', para: 'Para: Evaluadores 2026 · 112 jefes y jefas', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué falta', ops: [
        { id: 'q1', t: 'Buenas tardes. Quedan 300 evaluaciones pendientes y el plazo vence este viernes a las 18:00.', ok: true },
        { id: 'q2', t: 'Buenas tardes. Hay jefes MUY atrasados y ya saben quiénes son 👀', ok: false, por: 'Expone y no informa.' },
      ] },
      { id: 'como', t: 'Qué piden', ops: [
        { id: 'c1', t: 'Cada evaluación necesita al menos un comentario por factor: el viernes calibramos con eso.', ok: true, por: 'Pides calidad, no solo cierre.' },
        { id: 'c2', t: 'Lo importante es cerrar, aunque sea rápido.', ok: false, por: 'Invita a cerrar sin comentarios.' },
      ] },
      { id: 'ayuda', t: 'Cómo pedir ayuda', ops: [
        { id: 'a1', t: 'Si el sistema les falla o prefieren papel, escríbanme y vamos a su área.', ok: true },
        { id: 'a2', t: 'Cualquier problema, revisen el manual del sistema.', ok: null, por: 'Correcto, pero nadie lee el manual.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'c1', 'a1'].filter(x => Object.values(sel).includes(x)).length, malo = sel.que === 'q2';
      const q = malo ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: malo ? -3 : 2 }, flags: q === 'buena' ? ['recordatorio_claro'] : [],
        out: q === 'buena' ? 'En media hora, ocho jefes te escriben para pedir ayuda. Es más trabajo, pero es trabajo que avanza.' : malo ? 'Dos jefes salen del grupo. Uno te escribe al privado: «¿Era necesario?».' : 'El mensaje se lee. Algunos responden, otros no.',
        pro: { ok: 'Qué falta, qué se pide y cómo pedir ayuda: un recordatorio que trabaja por ti.', risk: 'Exponer a jefes en un grupo genera rechazo, no evaluaciones.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Ocho pedidos de ayuda! Eso es avance.' : 'Se puede decir mejor.'],
      };
    },
    mirada: { ve: 'Un recordatorio genérico se ignora. Uno que dice exactamente qué falta, qué calidad se espera y cómo pedir ayuda convierte el silencio en conversaciones.' },
  },
  {
    id: 'b6', t: '18:20', ch: 'presencial', who: null, titulo: 'Wendy quiere quedarse', banner: 'assets/foto2/pasillo.webp', lugar: 'Oficina de Talento', show: ['personas', 'etica', 'tiempo'],
    body: (n, F) => `<p>La oficina se vacía. Wendy, la practicante, llegó de Maracaibo hace cuatro años y estudia Psicología de noche. ${F.has('rafael_sesion') ? 'Digitó 60 evaluaciones de planta hoy.' : 'Pasó la tarde peleando con el sistema.'}</p><p>«Si quieres me quedo hasta las diez llamando a los de turno noche. <mark class="clave">Total, mi clase de hoy la puedo faltar</mark>.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Agradecerle y mandarla a su clase: los de turno noche los cubres con Rafael mañana a las 6.',
        res: { q: 'buena', fx: { personas: 4, etica: 2, tiempo: -1 }, flags: ['wendy_cuidada'],
          out: 'Wendy duda, pero se va. Desde la combi te manda un audio: «Gracias, de verdad. Nadie me había dicho que no».',
          pro: { ok: 'Una practicante está para aprender, con la jornada que fija su convenio.', info: 'Un cierre bien planificado no depende de que alguien se quede de noche.' },
          kusi: ['feliz', 'Cuidar al equipo también es cerrar bien.'] } },
      { id: 'b', label: 'Aceptar: se ofreció ella, y el cierre lo necesita.',
        res: { q: 'riesgosa', fx: { personas: -3, etica: -3, tiempo: 2 }, flags: ['wendy_noche'],
          out: 'Wendy llama hasta las diez y consigue doce cierres. Pierde su clase y toma dos buses para llegar a Comas pasada la medianoche.',
          pro: { ok: 'Avanzas doce evaluaciones.', risk: 'Una practicante haciendo horas extra de noche sale de lo que permite su convenio.' },
          kusi: ['preocupado', '¿Doce cierres valían su clase?'] } },
    ],
    rules: [[BP, 'La jornada de una practicante la fija su convenio. No es mano de obra para el cierre.']],
    mirada: { ve: 'Los cierres de ciclo empujan a todos a quedarse tarde. Quien cuida el proceso también cuida que el proceso no se coma a la gente, empezando por la más joven del equipo.' },
  },
];
