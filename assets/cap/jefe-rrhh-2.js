// Jefe/a de RR.HH. · Capítulo 2 · «Las jornadas» · Semana 1, martes.
// Hilo de las dos semanas: crear desde cero el área de RR.HH. de una empresa familiar de transporte interprovincial.
// Normas citadas:
// - D.S. 017-2009-MTC (Reglamento Nacional de Administración de Transporte), art. 30: en el transporte de personas
//   de ámbito nacional y regional, la conducción continua no debe superar 5 horas en servicio diurno ni 4 horas en
//   servicio nocturno; además fija un tope diario acumulado (no citamos la cifra porque fue modificada y suspendida
//   varias veces).
//   https://www.sutran.gob.pe/wp-content/uploads/2020/08/Reglamento-Nacional-de-Administraci%C3%B3n-de-Transporte-%E2%80%93-DS-N%C2%BA-017-2009-MTC_modificado.pdf
//   https://www.mtc.gob.pe/cnsv/documentos/normas-legales/DECRETO%20SUPREMO%20N%C2%BA%20017-2009-MTC%20(actualizado%2004.01.2017).pdf
// - D.S. 004-2006-TR (registro de control de asistencia), ya citado en el capítulo 1.
// - TUO del D.Leg. 728: despido por represalia, ya citado en el capítulo 1.

export const CAP = {
  n: 2, titulo: 'Las jornadas', dia: 'Semana 1, martes', foto: 'assets/esc/reloj.webp',
  lugar: 'Transportes Mantaro · Terminal de Huancayo',
  inicio: '06:45', fin: '19:30', cierreHora: '19:10',
  apertura: 'Martes, 6:45 de la mañana. Hace frío en Huancayo y el patio huele a petróleo y a emoliente. El bus de las 7 a Lima calienta motores mientras Patty te espera con una caja de hojas de ruta.', boton: 'Abrir la caja',
  kusi: 'Hoy toca mirar los números que nadie quiere mirar. ¡Con calma y con datos!',
  lead: 'Reconstruiste las horas reales de manejo, escuchaste a los conductores, enfrentaste el costo de cambiar los turnos y le contaste a Don Alberto lo que encontraste.',
  reflexion: '¿Qué haces cuando descubres que un riesgo grave lleva años siendo «normal» para todos?',
  siguiente: { n: 3, titulo: 'Los hijos', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'horas', p: 'Horas reales de manejo', j: 'Patty · RR.HH.', d: 0, e: 'Sin registro' },
  { id: 'turnos', p: 'Roles de conductores', j: 'Gonzalo · Operaciones', d: 0, e: 'Doble turno frecuente' },
  { id: 'nestor', p: 'Caso Néstor Poma', j: 'Tú', d: 0, e: 'Pendiente de conversar' },
  { id: 'registro', p: 'Registro de asistencia', j: 'Patty · RR.HH.', d: 0, e: 'No existe' },
  { id: 'gerencia', p: 'Informe a Don Alberto', j: 'Don Alberto · Gerencia', d: 0, e: 'Te espera hoy' },
];

export const FUTURO = {
  horas_reales: ['Tienes las horas reales de manejo de la última semana.', 'Las necesitarás en la inspección del capítulo 5.'],
  turnos_seguros: ['Las rutas largas nocturnas ya salen con dos conductores y se prohibió el doble turno.', 'Lo que pase en carretera el jueves se verá distinto.'],
  turnos_igual: ['Los roles siguen igual mientras se contrata.', 'Algún conductor seguirá manejando de más esta semana.'],
  freddy_descansa: ['Le negaste a Freddy el viaje extra y le diste una salida para su urgencia.', 'Freddy lo recordará.'],
  freddy_doble: ['Freddy hará un viaje extra tras su turno.', 'El capítulo 4 empieza en la carretera.'],
  nestor_aliado: ['Néstor te contó cómo se maneja de verdad.', 'Los conductores empiezan a hablarte.'],
};

export const CHATS = {
  grupo: { n: 'Jefaturas Mantaro', sub: 'Don Alberto, Gonzalo y tú', c: '#1F6F9E' },
  'don-alberto': { n: 'Don Alberto Rojas', sub: 'Fundador y gerente general', who: 'don-alberto' },
  gonzalo: { n: 'Gonzalo Rojas', sub: 'Gerente de Operaciones', who: 'gonzalo' },
  patty: { n: 'Patty Ñaupari', sub: 'Asistente de RR.HH.', who: 'patty' },
  nestor: { n: 'Néstor Poma', sub: 'Conductor', who: 'nestor' },
  freddy: { n: 'Freddy Quispe', sub: 'Conductor · ruta Satipo · 26 años', c: '#B5561E' },
  yolanda: { n: 'Yolanda Cóndor', sub: 'Despachadora · terminal de Lima', c: '#6B4FA0' },
};

export const WSP = [
  { chat: 'patty', t: '06:40', de: 'Patty', txt: 'Jefa, ya estoy en la oficina. Saqué las hojas de ruta de la semana pasada, son 3 cajas 📦' },
  { chat: 'grupo', t: '08:15', de: 'Gonzalo', txt: 'El bus 14 sale con 20 minutos de retraso porque RR.HH. está «revisando papeles» con los choferes. Ojo.' },
  { chat: 'nestor', t: '09:00', de: 'Néstor', txt: 'Señora, llego de Lima a las 9 y media. Si quiere conversamos, pero que no sea delante del ingeniero.', si: 'nestor_protegido' },
  { chat: 'yolanda', t: '12:30', de: 'Yolanda', txt: 'Le mando foto del cuaderno de llegadas de Yerbateros. Aquí nadie lo había pedido nunca 📒' },
  { chat: 'don-alberto', t: '18:30', de: 'Don Alberto', txt: 'Leí su mensaje dos veces. Mañana a las 8 hablamos. Voy a citar también a mis hijos.', si: 'horas_reales' },
  { chat: 'gonzalo', t: '18:50', de: 'Gonzalo', txt: 'Si mañana cancelamos salidas por tus turnos nuevos, se lo explicas tú a los pasajeros.', si: 'turnos_seguros' },
];

export const CORREOS = [
  { t: '06:50', de: 'Don Alberto Rojas', para: 'Jefa de RR.HH.', asunto: 'Su plan', html: '<p>Vi su plan de 90 días. Me gustó que empiece por las horas de manejo. Es lo que no me deja dormir.</p><p>Gonzalo dice que «los choferes exageran». Yo quiero números, no opiniones. ¿Me los puede traer hoy?</p><p>Alberto</p>' },
  { t: '16:10', de: 'Mesa de Partes · Transportes Mantaro', para: 'Jefa de RR.HH.', asunto: 'Reclamo de pasajera', html: '<p>Se adjunta el reclamo de una pasajera del servicio Huancayo–Lima del sábado: «El chofer cabeceaba en la bajada de Ticlio y el terramoza tuvo que hablarle todo el rato para que no se duerma».</p><p>Se derivó a Operaciones y en copia a RR.HH.</p>' },
];

export const QUIZ = [
  { q: 'Según el art. 30 del D.S. 017-2009-MTC, ¿cuánto puede conducir de forma continua un conductor de transporte de personas en servicio nocturno?', ops: ['8 horas', 'No más de 4 horas', 'No hay límite', '6 horas'], ok: 1, por: 'El reglamento fija 5 horas continuas en servicio diurno y 4 en servicio nocturno.' },
  { q: 'Un conductor hace un viaje extra después de su turno porque necesita el dinero. ¿Qué debe hacer RR.HH.?', ops: ['Permitirlo si él lo pide', 'Impedirlo y buscar otra salida para su necesidad', 'Pagarle doble', 'No es tema de RR.HH.'], ok: 1, por: 'El límite de conducción protege su vida y la de los pasajeros: no se negocia, pero sí se puede buscar ayuda para la urgencia.' },
  { q: '¿Para qué sirve reconstruir las horas reales de manejo con hojas de ruta y cuadernos de llegada?', ops: ['Para culpar a los conductores', 'Para tener datos y no opiniones sobre la fatiga', 'Para la publicidad', 'No sirve de nada'], ok: 1, por: 'Con datos, la conversación con Operaciones y con el dueño cambia.' },
  { q: 'Gonzalo dice que para cumplir los límites necesita más conductores. Eso significa que…', ops: ['El límite no aplica', 'El problema es real y hay que planificar, sin seguir incumpliendo mientras tanto', 'Hay que esperar un año', 'RR.HH. debe manejar'], ok: 1, por: 'La falta de personal explica el problema, pero no lo justifica.' },
  { q: 'Todo empleador debe llevar un registro de control de asistencia según…', ops: ['El D.S. 004-2006-TR', 'La Ley de Tránsito', 'El RIT', 'Ninguna norma'], ok: 0, por: 'El D.S. 004-2006-TR obliga a registrar el ingreso y la salida.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'k1', t: '07:00', ch: 'documento', who: null, titulo: 'Tres cajas de hojas de ruta', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Patty y tú vacían las cajas sobre la mesa. Las hojas de ruta tienen la hora de salida y la firma del conductor, pero nadie anotó cuándo llegaron. Cruzas con el cuaderno de llegadas del terminal.</p><p>En una hora tienes una semana reconstruida. <mark class="clave">Marca lo que no puede seguir así</mark>.</p>`,
    type: 'flag', prompt: 'Marca los roles que incumplen la ley o son un riesgo.',
    doc: { t: 'Roles reales · semana pasada', sub: 'Reconstruidos con hojas de ruta y cuaderno de llegadas' },
    lines: [
      { id: 'lima', t: 'Huancayo–Lima nocturno (22:00 a 05:30): un solo conductor, sin relevo.', bad: LEY, why: 'En servicio nocturno la conducción continua no debe superar 4 horas (D.S. 017-2009-MTC, art. 30). Un viaje de siete horas y media necesita relevo.' },
      { id: 'doble', t: 'Freddy Quispe: llega de Satipo a las 14:00 y sale a La Merced a las 16:00, cuatro días de siete.', bad: LEY, why: 'Supera de lejos los tiempos de conducción y descanso del reglamento. Es fatiga acumulada.' },
      { id: 'catorce', t: 'Tres conductores suman 13 y 14 horas al volante en un mismo día.', bad: LEY, why: 'Supera cualquier tope diario de conducción del reglamento de transporte.' },
      { id: 'jauja', t: 'Huancayo–Jauja–Tarma (diurno): dos horas y media, con descanso de una hora antes del retorno.' },
      { id: 'firma', t: 'Las hojas de ruta no registran la hora de llegada ni los descansos.', bad: LEY, why: 'Sin registro de horas, la empresa no puede probar que cumple (D.S. 004-2006-TR) y no puede controlar la fatiga.' },
      { id: 'terra', t: 'Los terramozas no tienen pausa de almuerzo en las rutas de ocho horas.', bad: BP, why: 'También trabajan muchas horas seguidas. Hay que revisarlo, aunque hoy el riesgo mayor está al volante.' },
      { id: 'brevete', t: 'Los 90 conductores tienen licencia vigente de la categoría que corresponde.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Tu cuadro deja fuera algunos roles peligrosos. Gonzalo los usará para decir que «no es para tanto».' : `Tu cuadro tiene ${hitsLey} problemas graves. Patty lo mira en silencio: «Jefa, Freddy tiene una bebita de dos meses. Hace doble turno por la plata».`,
      flags: missLey ? [] : ['horas_reales'], cartera: { horas: missLey ? 'Cuadro incompleto' : 'Horas reales de una semana' },
      pro: { ok: 'Con datos de la propia empresa, nadie puede decir que exageras.', risk: 'Un cuadro incompleto se discute; uno completo se corrige.', info: 'Guarda copia de las hojas originales: son evidencia.' },
      kusi: missLey ? ['pensando', 'Faltan algunos roles…'] : ['sorpresa', '¡Catorce horas! Ya no es una queja, es un dato.'],
    }),
    rules: [[LEY, 'Conducción continua: máximo 5 horas en servicio diurno y 4 en nocturno (D.S. 017-2009-MTC, art. 30).']],
    mirada: {
      ve: 'Las hojas de ruta anotan cuándo sale el bus porque eso le importa al negocio. Nadie anotó cuándo descansa el conductor porque eso no le importaba a nadie. Reconstruir las horas es la primera forma de cuidar.',
      visual: { tipo: 'rango', titulo: 'Horas al volante en un día', min: 0, max: 16, banda: [0, 5], marcas: [['Jauja–Tarma', 5], ['Lima nocturno', 7.5], ['Freddy', 13], ['Peor caso', 14]] },
      normas: [{ ley: 'D.S. 017-2009-MTC, art. 30', dice: 'Fija tiempos máximos de conducción continua y descansos para el transporte de personas.', practica: 'Un viaje nocturno largo necesita un segundo conductor.' }],
    },
  },
  {
    id: 'k2', t: '09:40', ch: 'presencial', who: 'nestor', titulo: 'Néstor baja del bus', banner: 'assets/foto/cafe.webp', lugar: 'Cafetería frente al terminal', show: ['personas', 'confianza'],
    body: (n, F) => `<p>${F.has('nestor_fuera') ? 'Néstor sabe que lo quieren despedir. Aceptó hablar contigo solo porque Patty se lo pidió. Pide un emoliente y no te mira.' : 'Néstor llega con los ojos rojos después de manejar toda la noche desde Lima. Pide un emoliente caliente y una empanada.'}</p><p>«¿Qué quiere saber, señora? <mark class="clave">Pregunte nomás, que ya no tengo nada que perder</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Néstor.',
    opts: [
      { id: 'sueno', label: '¿Cómo hacen para no dormirse en la ruta?', info: '«Coca, café, la ventana abierta en Ticlio aunque haga un frío de muerte. Y el terramoza que nos conversa. Hay compañeros que toman pastillas. Yo no.»' },
      { id: 'porque', label: '¿Por qué aceptan doble turno?', info: '«Porque se paga por vuelta. Si no hago la segunda, no llego al mes. Y porque el ingeniero se acuerda de quién dijo que no.»' },
      { id: 'idea', label: 'Si usted decidiera, ¿qué cambiaría primero?', info: '«Dos choferes en el nocturno a Lima. Uno maneja hasta La Oroya, el otro hasta Lima. Eso salva vidas, señora. Lo demás es papel.»' },
      { id: 'miedo', label: '¿Qué le da miedo de hablar conmigo?', info: '«Que mañana esto le llegue al ingeniero con mi nombre. Ya pasó una vez con otro compañero.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, confianza: 2, tiempo: -1 }, rel: { nestor: 1 }, flags: ['nestor_aliado'], cartera: { nestor: 'Conversación hecha' },
      out: picks.includes('idea') ? 'Néstor dibuja en una servilleta la ruta a Lima con una cruz en La Oroya: «Aquí se cambia el chofer». Te la quedas.' : 'Néstor termina el emoliente: «Usted pregunta raro, señora. Como si le importara». Se ríe por primera vez.',
      kusi: ['curioso', 'Quien maneja sabe lo que el Excel no dice.'],
    }),
    mirada: {
      ve: 'El pago por vuelta convierte el cansancio en una decisión «voluntaria». Pero cuando la persona necesita el dinero y teme a su jefe, no es del todo libre. RR.HH. tiene que mirar el sistema que empuja a manejar de más, no solo al conductor.',
      visual: { tipo: 'balanza', a: { t: 'Lo que empuja a manejar de más', items: ['Pago por vuelta', 'Miedo al jefe', 'Falta de conductores'] }, b: { t: 'Lo que lo frena', items: ['Relevo en ruta', 'Registro de horas', 'Ingreso que no dependa del doble turno'] } },
    },
  },
  {
    id: 'k3', t: '11:30', ch: 'llamada', who: null, titulo: 'Tres llamadas antes del almuerzo', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio', show: ['calidad', 'personas'],
    body: () => `<p>Quieres confirmar lo que dicen las hojas de ruta con quienes las viven. Afuera empieza a nublarse: a las tres lloverá, como todas las tardes de noviembre en el valle.</p><p><mark class="clave">Cada llamada te da una pieza distinta</mark>.</p>`,
    type: 'calls',
    calls: [['Yolanda Cóndor · despachadora en Yerbateros', 'Contesta entre bocinas', '«Los buses de Mantaro llegan a Lima y a veces salen de regreso con el mismo chofer a las dos horas. Yo le digo al ingeniero, pero él dice que no hay gente. Le mando foto del cuaderno.»'], ['Wilber Ccanto · conductor, ruta Lima nocturna', 'Contesta con voz de recién despertado', '«Yo prefiero manejar con otro, señora, pero entonces la vuelta se paga a medias. Nadie quiere ganar la mitad.»'], ['Freddy Quispe · conductor, ruta Satipo', 'Contesta desde un grifo en La Merced', '«Estoy bien, jefa, joven todavía. Mi hija nació en setiembre y la leche está cara. Si me quitan el doble, ¿de qué vivo?»']],
    prompt: 'Terminaste las llamadas. ¿Qué haces con lo que oíste?',
    choices: [
      { id: 'a', label: 'Anotar que el pago por vuelta es parte del problema: cualquier cambio de turnos debe venir con una propuesta de pago que no castigue manejar con relevo.',
        res: { q: 'buena', fx: { calidad: 4, personas: 3 }, cartera: { turnos: 'Problema de fondo: pago por vuelta' },
          out: 'Escribes en tu cuaderno: «Si el relevo cuesta la mitad del sueldo, nadie lo va a querer». Es la pieza que te faltaba para hablar con Gonzalo.',
          pro: { ok: 'Entiendes por qué los conductores aceptan lo que los pone en riesgo.', info: 'Pide a Contabilidad cuánto cuesta pagar la vuelta completa a dos conductores en el nocturno.' },
          kusi: ['feliz', '¡Encontraste la raíz, no solo el síntoma!'] } },
      { id: 'b', label: 'Concluir que los conductores eligen el doble turno y que el foco debe ser sancionar a quien maneje de más.',
        res: { q: 'riesgosa', fx: { personas: -4, etica: -3, calidad: -1 }, rel: { nestor: -1 }, cartera: { turnos: 'Foco en sancionar' },
          out: 'Redactas un borrador de sanción. Si llega a los conductores, el próximo que maneje 14 horas lo esconderá mejor.',
          pro: { ok: 'Marcas un límite.', risk: 'Sancionas al último eslabón y dejas intacto lo que lo empuja.' },
          kusi: ['preocupado', 'Así solo esconderán el cansancio…'] } },
    ],
    mirada: { ve: 'La despachadora, el veterano y el joven te cuentan lo mismo desde tres lugares: el sistema de pago premia el cansancio. Cambiar turnos sin cambiar el pago es pedirle a la gente que pierda dinero por cumplir.' },
  },
  {
    id: 'k4', t: '13:45', ch: 'presencial', who: 'gonzalo', titulo: '«No hay choferes»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Operaciones', show: ['cumplimiento', 'confianza', 'etica'],
    body: (n, F) => `<p>Gonzalo almuerza un caldo en su escritorio mientras mira la pizarra de salidas. ${F.has('horas_reales') ? 'Le dejas tu cuadro encima. Lo lee sin soltar la cuchara.' : 'Le cuentas lo que encontraste. Te escucha sin dejar de comer.'}</p><p>«¿Dos choferes en cada nocturno? Necesito 15 conductores más y no hay en todo el valle. <mark class="clave">Si hago lo que dices, mañana cancelo dos salidas a Lima</mark>.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer desde esta noche: segundo conductor en los nocturnos a Lima, sin doble turno, aunque se cancelen dos salidas mientras se contrata. Y pago de vuelta completa a ambos.',
        res: { q: 'buena', fx: { cumplimiento: 6, etica: 4, confianza: -2, tiempo: -2 }, rel: { gonzalo: -1, nestor: 1 }, flags: ['turnos_seguros'], cartera: { turnos: 'Relevo nocturno desde hoy' },
          out: 'Gonzalo golpea la mesa: «¿Y quién paga las salidas canceladas?». Le respondes que mucho menos que un bus en el abismo. Acepta, a regañadientes, porque sabe que su papá lo apoyará.',
          pro: { ok: 'Dejas de incumplir hoy, no en 60 días.', risk: 'Operaciones pierde ingresos esta semana y Gonzalo lo sentirá como una derrota.', info: 'Publica la convocatoria de conductores hoy mismo: el costo se acorta si contratas rápido.' },
          kusi: ['animo', 'Vidas primero. ¡Firme!'] } },
      { id: 'b', label: 'Acordar un plan gradual: contratar en 60 días y, mientras tanto, mantener los roles actuales para no cancelar salidas.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, etica: -3, confianza: 3 }, rel: { gonzalo: 1 }, flags: ['turnos_igual'], cartera: { turnos: 'Plan a 60 días, roles igual' },
          out: 'Gonzalo te da la mano: «Así sí se puede trabajar». Esta noche, el bus de las 22:00 a Lima saldrá otra vez con un solo conductor.',
          pro: { ok: 'Cuidas la relación con Operaciones.', risk: 'Durante 60 días la empresa sigue incumpliendo y sabiendo que incumple.' },
          kusi: ['preocupado', 'Sesenta días son muchas noches en Ticlio…'] } },
      { id: 'c', label: 'Pedirle que decida él y dejar constancia por correo de que RR.HH. advirtió el riesgo.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, confianza: -1, etica: -1 }, rel: { gonzalo: -1 }, flags: ['turnos_igual'], cartera: { turnos: 'Advertencia por correo' },
          out: 'Mandas el correo con copia a Don Alberto. Quedas cubierta, pero los roles no cambian.',
          pro: { ok: 'Dejas constancia escrita.', risk: 'Cubrirse no es lo mismo que resolver.' },
          kusi: ['pensando', 'El correo te protege a ti… ¿y a los pasajeros?'] } },
    ],
    rules: [[LEY, 'La falta de conductores no autoriza a superar los tiempos máximos de conducción.'], [BP, 'Un cambio de turnos que baja el ingreso del trabajador necesita una propuesta de pago.']],
    mirada: {
      ve: 'Gonzalo no es un villano: tiene una pizarra de salidas, pasajeros que reclaman y pocos conductores. Pero «no hay gente» es la frase con la que se justifican los accidentes. El costo de cancelar dos salidas es visible; el de un bus en la curva, no, hasta que pasa.',
      visual: { tipo: 'balanza', a: { t: 'Cancelar dos salidas', items: ['Ingreso perdido esta semana', 'Gonzalo molesto'] }, b: { t: 'Seguir igual 60 días', items: ['Conductores con 14 horas', 'Riesgo de accidente', 'Incumplimiento conocido'] } },
    },
  },
  {
    id: 'k5', t: '15:30', ch: 'documento', who: 'patty', titulo: 'El registro que no existe', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de RR.HH.', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>Llueve fuerte sobre el techo de calamina. ${F.has('patty_lidera') ? 'Patty ya tiene un borrador de formato, como acordaron ayer.' : 'Patty te mira esperando instrucciones.'}</p><p>Necesitan un registro de horas que funcione en un terminal con buses que salen a toda hora. <mark class="clave">Ordena los pasos para ponerlo en marcha</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para implementar el registro de horas. Usa las flechas.', boton: 'Guardar el plan',
    items: [
      { id: 'def', t: 'Definir qué se registra: inicio y fin de conducción, relevos y descansos', por: 'Primero se sabe qué medir.' },
      { id: 'form', t: 'Diseñar un formato simple en la hoja de ruta, con hora de llegada y firma', por: 'Lo que ya usan, mejorado.' },
      { id: 'desp', t: 'Explicar a despachadores y conductores para qué sirve', por: 'Si creen que es para sancionarlos, lo llenarán mal.' },
      { id: 'piloto', t: 'Probarlo una semana en la ruta a Lima', por: 'La ruta de mayor riesgo primero.' },
      { id: 'rev', t: 'Revisar cada lunes las horas y alertar a Operaciones', por: 'Un registro que nadie mira no protege a nadie.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 2, cumplimiento: q === 'riesgosa' ? 0 : 3 }, rel: { patty: q === 'buena' ? 1 : 0 },
        cartera: { registro: q === 'riesgosa' ? 'Plan desordenado' : 'Piloto en ruta Lima listo' },
        out: q === 'buena' ? 'Patty imprime el formato nuevo en la impresora que atasca cada tres hojas. Mañana lo estrena el bus de las 7.' : 'Patty mueve dos pasos: «Jefa, si no les explicamos antes, van a pensar que es para descontarles».',
        pro: { ok: 'Un registro sencillo, explicado y revisado es mejor que un sistema caro.', info: 'Más adelante puede ser digital; hoy lo urgente es que exista.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Un registro que sí se puede usar!' : 'Casi: el orden importa.'],
      };
    },
    rules: [[LEY, 'Todo empleador debe llevar un registro de control de asistencia (D.S. 004-2006-TR).']],
    mirada: {
      ve: 'En una empresa sin cultura de registro, el formato es lo fácil. Lo difícil es que la gente confíe en que se usa para cuidarla. Por eso explicar va antes de exigir.',
      visual: { tipo: 'flujo', titulo: 'Del papel al cuidado', pasos: ['Definir', 'Formato', 'Explicar', 'Piloto', 'Revisar'] },
    },
  },
  {
    id: 'k6', t: '17:40', ch: 'whatsapp', who: 'don-alberto', titulo: 'Los números para Don Alberto', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Tu escritorio', show: ['confianza', 'calidad'],
    body: (n, F) => `<p>Don Alberto pidió números, no opiniones. ${F.has('turnos_seguros') ? 'Gonzalo ya le habrá contado lo de las salidas canceladas, a su manera.' : 'Sabes que Gonzalo le dirá que «todo está bajo control».'}</p><p>Le escribes antes de que se vaya a su casa en El Tambo. <mark class="clave">Corto y con datos</mark>.</p>`,
    type: 'compose', enviaA: 'don-alberto', para: 'Para: Don Alberto Rojas · Gerente general', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'dato', t: 'El dato', ops: [
        { id: 'd1', t: 'Don Alberto, reconstruimos la semana pasada: tres conductores pasaron de 13 horas al volante y el nocturno a Lima va sin relevo.', ok: true, por: 'Un dato concreto y verificable.' },
        { id: 'd2', t: 'Don Alberto, la situación de los conductores es gravísima, como usted temía.', ok: false, por: 'Alarma sin datos: suena a opinión.' },
      ] },
      { id: 'causa', t: 'La causa', ops: [
        { id: 'c1', t: 'No es descuido de ellos: el pago por vuelta empuja al doble turno y faltan unos 15 conductores.', ok: true, por: 'Explicas el sistema sin culpar a nadie.' },
        { id: 'c2', t: 'Gonzalo arma los roles así desde hace años.', ok: false, por: 'Señalar al hijo frente al padre por WhatsApp cierra la conversación.' },
      ] },
      { id: 'paso', t: 'El siguiente paso', ops: [
        { id: 'p1', t: 'Le propongo verlo mañana con números de costo: relevo, contratación y pago.', ok: true, por: 'Le das una decisión concreta.' },
        { id: 'p2', t: 'Usted dirá qué hacemos.', ok: null, por: 'Respetuoso, pero le devuelves el problema sin propuesta.' },
      ] },
    ],
    res: sel => {
      const mal = sel.dato === 'd2' || sel.causa === 'c2', buenas = ['d1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : mal ? -2 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { 'don-alberto': q === 'buena' ? 1 : 0, gonzalo: sel.causa === 'c2' ? -1 : 0 },
        cartera: { gerencia: q === 'buena' ? 'Informe enviado con datos' : 'Informe enviado' },
        out: q === 'buena' ? 'Los dos check se ponen azules. Don Alberto escribe, borra y vuelve a escribir durante cinco minutos.' : mal ? 'Don Alberto responde solo: «Mañana hablamos». Suena a hombre que se puso a la defensiva.' : 'Don Alberto responde: «Gracias. Lo pensaré».',
        pro: { ok: 'Dato, causa y propuesta: así se informa a un dueño.', risk: 'Alarmar o señalar a un hijo hace que el dueño defienda a la familia, no a los conductores.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Datos que mueven a un dueño!' : 'Algo del mensaje no ayudó.'],
      };
    },
    mirada: {
      ve: 'En una empresa familiar, cada mensaje al padre también lo lee, de alguna forma, el hijo. Informar bien es contar el problema como un problema de la empresa, no como una falla de una persona.',
      visual: { tipo: 'mensaje', titulo: 'Dato, causa y propuesta', txt: 'Tres conductores pasaron de 13 horas al volante y el nocturno a Lima va sin relevo. El pago por vuelta empuja al doble turno. Le propongo verlo mañana con números de costo.' },
    },
  },
  {
    id: 'k7', t: '19:00', ch: 'whatsapp', who: null, titulo: '«Solo esta vez, jefa»', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la avenida Ferrocarril', show: ['personas', 'etica'],
    body: (n, F) => `<p>Esperas la combi a El Tambo con la casaca empapada. Te escribe Freddy: «Jefa, mañana Huamán está enfermo. El ingeniero me ofrece su vuelta a Satipo después de la mía. ${F.has('turnos_seguros') ? 'Sé que dijo que no más doble turno, pero' : 'Usted dijo que iba a revisar, pero'} <mark class="clave">es solo esta vez, la bebita necesita</mark>».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que no puede hacer las dos vueltas, que hablarás con Gonzalo para cubrir a Huamán y que mañana ven juntos un adelanto o apoyo para su urgencia.',
        res: { q: 'buena', fx: { personas: 3, etica: 4, tiempo: -2 }, rel: { gonzalo: -1 }, flags: ['freddy_descansa'],
          envia: ['freddy', 'Freddy, la segunda vuelta no. Me preocupa usted y los pasajeros. Ya le escribo al ingeniero para cubrir a Huamán. Mañana a las 10 vemos juntos cómo ayudarlo con lo de la bebita.'],
          out: 'Freddy responde con un «ya, jefa» seco. Diez minutos después: «Gracias por lo de mañana». Gonzalo te contesta con un audio de tres minutos que escuchas en la combi.',
          pro: { ok: 'El límite se mantiene y la urgencia tiene una respuesta.', info: 'Revisa si la empresa puede dar adelantos de sueldo con una política clara.' },
          kusi: ['animo', 'No a la vuelta, sí a la persona.'] } },
      { id: 'b', label: 'Dejarlo pasar por esta vez: él lo pide, es joven y ya está acordado con Operaciones.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3 }, flags: ['freddy_doble'],
          out: 'Le respondes «cuídese mucho, Freddy». Mañana hará dieciséis horas entre ida y vuelta por la selva central.',
          pro: { ok: 'Freddy gana su vuelta.', risk: 'La fatiga no se cura con juventud ni con necesidad.' },
          kusi: ['preocupado', '«Solo esta vez» es como empiezan las tragedias…'] } },
    ],
    mirada: { ve: 'Las excepciones llegan siempre con una buena razón. Por eso un límite de seguridad se sostiene solo si viene con otra salida para la necesidad real de la persona.' },
  },
];
