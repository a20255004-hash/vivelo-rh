// Jefe/a de RR.HH. · Capítulo 3 · «Los hijos» · Semana 1, miércoles.
// Hilo de las dos semanas: crear desde cero el área de RR.HH. de una empresa familiar de transporte interprovincial.
// Normas citadas (todas ya verificadas en capítulos anteriores):
// - D.S. 017-2009-MTC, art. 30 (tiempos máximos de conducción), citado en el capítulo 2.
//   https://www.sutran.gob.pe/wp-content/uploads/2020/08/Reglamento-Nacional-de-Administraci%C3%B3n-de-Transporte-%E2%80%93-DS-N%C2%BA-017-2009-MTC_modificado.pdf
// - TUO del D.Leg. 728 (D.S. 003-97-TR): el despido requiere una causa justa prevista en la ley, relacionada con la
//   capacidad o la conducta del trabajador; la edad, por sí sola, no lo es. Citado en el capítulo 1.
// No se citan cifras nuevas.

export const CAP = {
  n: 3, titulo: 'Los hijos', dia: 'Semana 1, miércoles', foto: 'assets/foto2/reunion-circulos.webp',
  lugar: 'Transportes Mantaro · Oficina de la gerencia',
  inicio: '07:30', fin: '19:30', cierreHora: '19:10',
  apertura: 'Miércoles. Don Alberto citó a sus tres hijos a las 8 en punto. Es la primera vez en años que se sientan juntos a hablar de algo que no sea plata. Y tú estás en medio de la mesa.', boton: 'Entrar a la reunión',
  kusi: 'Hoy no hay un solo jefe: hay una familia. ¡Escucha a cada uno!',
  lead: 'Presentaste tus datos ante la familia, entendiste qué quiere cada hijo, frenaste un plan para sacar a los conductores mayores y buscaste un punto en común con Gonzalo.',
  reflexion: '¿Cómo se mantiene la independencia de RR.HH. cuando los dueños no se ponen de acuerdo entre ellos?',
  siguiente: { n: 4, titulo: 'El accidente', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'familia', p: 'Reunión con la familia Rojas', j: 'Don Alberto · Gerencia', d: 0, e: 'Hoy a las 8' },
  { id: 'turnos', p: 'Roles de conductores', j: 'Gonzalo · Operaciones', d: 0, e: 'En discusión' },
  { id: 'veteranos', p: 'Propuesta de Mariela sobre conductores mayores', j: 'Mariela · Finanzas', d: 0, e: 'Llega por correo' },
  { id: 'adelantos', p: 'Apoyo a Freddy', j: 'Tú', d: 0, e: 'Pendiente' },
  { id: 'contratacion', p: 'Convocatoria de conductores', j: 'Patty · RR.HH.', d: 0, e: 'Sin publicar' },
];

export const FUTURO = {
  familia_escucha: ['La familia Rojas te vio como alguien que no toma partido.', 'Te servirá en el directorio del capítulo 8.'],
  mariela_aliada: ['Mariela te ve como su aliada contra Gonzalo.', 'Te pedirá favores en el capítulo 8.'],
  veteranos_protegidos: ['Frenaste el plan de sacar a los conductores mayores.', 'Néstor y los veteranos lo sabrán.'],
  veteranos_fuera: ['Aceptaste estudiar la salida de los conductores mayores.', 'Volverá en el capítulo 8.'],
  adelantos_politica: ['Hay una política simple de adelantos de sueldo.', 'Freddy y otros la usarán.'],
  gonzalo_puente: ['Gonzalo y tú tienen un primer acuerdo: RR.HH. le consigue conductores.', 'Lo recordará en la crisis de mañana.'],
  patty_alerta: ['Patty sabe que debe avisarte si alguien pide cambiar un registro.', 'Será clave en el capítulo 6.'],
};

export const CHATS = {
  grupo: { n: 'Jefaturas Mantaro', sub: 'Don Alberto, Gonzalo y tú', c: '#1F6F9E' },
  familia: { n: 'Directorio Rojas', sub: 'Don Alberto, Gonzalo, Mariela, Rubén y tú', c: '#8A5A2B' },
  'don-alberto': { n: 'Don Alberto Rojas', sub: 'Fundador y gerente general', who: 'don-alberto' },
  gonzalo: { n: 'Gonzalo Rojas', sub: 'Gerente de Operaciones', who: 'gonzalo' },
  patty: { n: 'Patty Ñaupari', sub: 'Asistente de RR.HH.', who: 'patty' },
  nestor: { n: 'Néstor Poma', sub: 'Conductor', who: 'nestor' },
  mariela: { n: 'Mariela Rojas', sub: 'Gerente de Administración y Finanzas · hija', c: '#2E7D6B' },
  ruben: { n: 'Rubén Rojas', sub: 'Jefe Comercial · hijo menor', c: '#C0392B' },
  freddy: { n: 'Freddy Quispe', sub: 'Conductor · ruta Satipo', c: '#B5561E' },
};

export const WSP = [
  { chat: 'familia', t: '07:40', de: 'Rubén', txt: 'Llego 8:05, estoy dejando encomiendas en el paradero de Chupaca 🙏' },
  { chat: 'familia', t: '07:42', de: 'Mariela', txt: 'Puntual, Rubén. Papá ya está sentado.' },
  { chat: 'freddy', t: '06:30', de: 'Freddy', txt: 'Jefa, al final no hice la segunda vuelta. Dormí 8 horas por primera vez en semanas 😅', si: 'freddy_descansa' },
  { chat: 'freddy', t: '05:50', de: 'Freddy', txt: 'Jefa, ya salí a Satipo con la vuelta de Huamán. Llego a la noche, tranquila 👍', si: 'freddy_doble' },
  { chat: 'nestor', t: '12:40', de: 'Néstor', txt: 'Señora, en el patio dicen que la señorita Mariela quiere sacar a los viejos. ¿Es cierto?' },
  { chat: 'gonzalo', t: '17:10', de: 'Gonzalo', txt: 'Mándame el perfil de conductor que quieres publicar. Si me traes cinco buenos esta semana, hablamos de lo demás.', si: 'gonzalo_puente' },
];

export const CORREOS = [
  { t: '07:30', de: 'Don Alberto Rojas', para: 'Jefa de RR.HH.', asunto: 'Su diagnóstico', html: '<p>Leí anoche su diagnóstico completo. No dormí. Hay cosas que sabía y cosas que no quería saber.</p><p>Hoy se lo presenta a mis hijos tal cual. Si alguno se molesta, que se moleste.</p><p>Alberto</p>', si: 'diagnostico_completo' },
  { t: '07:30', de: 'Don Alberto Rojas', para: 'Jefa de RR.HH.', asunto: 'Reunión con mis hijos', html: '<p>Hoy a las 8 se reúne con mis hijos. Tráigales lo que encontró. Ellos tienen que escucharla de usted, no de mí.</p><p>Alberto</p>', no: 'diagnostico_completo' },
];

export const QUIZ = [
  { q: 'En una empresa familiar, la independencia de RR.HH. significa…', ops: ['Obedecer al hijo que más manda', 'Decidir con criterios claros que valgan para todos, sin tomar partido en la familia', 'No hablar con la familia', 'Aliarse con quien paga'], ok: 1, por: 'RR.HH. sirve a la empresa, no a un bando familiar.' },
  { q: 'Mariela propone retirar a los conductores mayores de 55 años «por seguridad». ¿Qué responde RR.HH.?', ops: ['Que es buena idea', 'Que la edad sola no es causa de despido; lo que se evalúa es la aptitud de cada conductor', 'Que se haga en secreto', 'Que se les baje el sueldo'], ok: 1, por: 'El despido requiere una causa justa ligada a la capacidad o conducta. La aptitud se prueba con evaluaciones, no con la fecha de nacimiento.' },
  { q: 'Gonzalo dice que no quiere «burocracia de RR.HH.». Una buena respuesta es…', ops: ['Ignorarlo', 'Mostrarle cómo RR.HH. resuelve un problema suyo, como conseguir conductores', 'Acusarlo con su papá', 'Renunciar'], ok: 1, por: 'La influencia se gana resolviendo problemas reales del otro.' },
  { q: 'Una política de adelantos de sueldo debe tener…', ops: ['Montos según la simpatía del jefe', 'Reglas claras, un tope y una forma de descuento acordada por escrito', 'Ninguna regla', 'Solo para jefes'], ok: 1, por: 'Lo claro evita favoritismos y deudas que ahogan.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'm1', t: '07:45', ch: 'documento', who: null, titulo: 'Qué poner sobre la mesa', banner: 'assets/esc/decide.webp', lugar: 'Tu escritorio', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Tienes quince minutos. ${F.has('horas_reales') ? 'Llevas el cuadro de horas de ayer y el diagnóstico.' : 'Llevas el diagnóstico y lo que te contaron los conductores.'} Sabes que en la reunión habrá tres hijos con tres miradas distintas.</p><p>Solo te darán tiempo para <mark class="clave">dos cosas</mark>. Elige qué mostrar primero.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos cosas que mostrarás en la reunión.', boton: 'Llevar estas dos', resumen: 'Mostrarás',
    cols: ['Qué muestras', 'A quién le habla'],
    rows: [
      { id: 'horas', cells: ['Las horas reales de manejo de la semana pasada', 'A todos: es un riesgo de vida'] },
      { id: 'costo', cells: ['El costo de un relevo frente al costo de un accidente', 'A Mariela, que cuida las cuentas'] },
      { id: 'lista', cells: ['La lista completa de 27 tareas que hace Patty', 'A nadie en particular'] },
      { id: 'culpa', cells: ['Quién armó los roles de 14 horas', 'Contra Gonzalo'] },
      { id: 'contratar', cells: ['Un plan para conseguir 15 conductores', 'A Gonzalo, que no tiene gente'] },
    ],
    score: { horas: 3, costo: 2, contratar: 2, lista: 0, culpa: -3 },
    res: (picks, sc) => {
      const q = sc >= 5 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, confianza: q === 'riesgosa' ? -3 : 2 }, rel: { gonzalo: picks.includes('culpa') ? -1 : 0 },
        cartera: { familia: q === 'buena' ? 'Llevas datos y soluciones' : 'Llevas datos' },
        out: picks.includes('culpa') ? 'Imprimes una hoja con el nombre de Gonzalo en rojo. Vas a entrar a la reunión con una acusación.' : 'Imprimes dos hojas. Una dice qué pasa; la otra, qué se puede hacer y cuánto cuesta.',
        pro: { ok: 'Un problema con su solución y su costo se discute; una acusación se defiende.', info: 'En una familia, cada hijo escucha mejor lo que toca su propio problema.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Problema y salida en la misma mesa!' : '¿Esto une o divide a la mesa?'],
      };
    },
    mirada: {
      ve: 'Presentar a una familia dueña no es como presentar a un gerente. Cada hijo tiene su área, su orgullo y su lugar en la herencia. El dato que señala a uno cierra a los demás; el dato que muestra un riesgo común los sienta juntos.',
      visual: { tipo: 'matriz', x: 'Divide a la familia', y: 'Ayuda a decidir', cuadrantes: ['Mostrar', 'Con cuidado', 'Guardar', 'Evitar'], items: [['Horas reales', .2, .9], ['Costo del relevo', .3, .75], ['Plan de contratación', .15, .7], ['Culpable de los roles', .9, .3], ['Tareas de Patty', .1, .2]] },
    },
  },
  {
    id: 'm2', t: '08:20', ch: 'presencial', who: 'gonzalo', titulo: '«Burocracia de RR.HH.»', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de la gerencia', show: ['confianza', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Don Alberto escucha con los brazos cruzados. Rubén mira el celular. Mariela toma notas en una tablet. ${F.has('turnos_seguros') ? 'Gonzalo llega de mal humor: anoche se cancelaron dos salidas por tu relevo.' : 'Gonzalo llega con su pizarra de salidas en el celular.'}</p><p>Gonzalo interrumpe: «Papá, yo no necesito <mark class="clave">burocracia de RR.HH.</mark> Necesito choferes». Mariela sonríe: «Yo sí creo que necesitamos orden. Empezando por Operaciones».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No tomar partido: decir que los dos tienen razón en algo, que el orden sirve si consigue choferes y que RR.HH. trabajará con cada área con las mismas reglas.',
        res: { q: 'buena', fx: { confianza: 4, etica: 3, tiempo: -1 }, rel: { 'don-alberto': 1, gonzalo: 1 }, flags: ['familia_escucha'], cartera: { familia: 'Reunión sin bandos' },
          out: 'Hay un silencio. Rubén levanta la vista del celular por primera vez. Don Alberto asiente despacio: «Eso es lo que quería escuchar». Mariela deja de tomar notas.',
          pro: { ok: 'Te muestras como alguien de la empresa, no de un hermano.', risk: 'Mariela esperaba una aliada y no la consiguió.', info: 'Repite esta postura cada vez: la independencia se construye con consistencia.' },
          kusi: ['celebra', '¡Ni de uno ni de otro: de la empresa!'] } },
      { id: 'b', label: 'Apoyar a Mariela: el problema está en Operaciones y alguien tenía que decirlo frente a Don Alberto.',
        res: { q: 'riesgosa', fx: { confianza: -2, etica: -1, cumplimiento: 2 }, rel: { gonzalo: -1, 'don-alberto': -1 }, flags: ['mariela_aliada'], cartera: { familia: 'Alianza con Mariela' },
          out: 'Mariela te guiña un ojo. Gonzalo se levanta y sale. Don Alberto suspira: «No la contraté para que pelee con mis hijos».',
          pro: { ok: 'Ganas una aliada con poder en Finanzas.', risk: 'Te conviertes en una ficha de la pelea entre hermanos.' },
          kusi: ['preocupado', 'Te pusiste la camiseta de un hermano…'] } },
      { id: 'c', label: 'Ceder ante Gonzalo: bajar el tono, dejar el tema de las jornadas para otra reunión y hablar solo de contratar.',
        res: { q: 'aceptable', fx: { confianza: 1, cumplimiento: -3 }, rel: { gonzalo: 1 }, cartera: { familia: 'Jornadas para otra reunión' },
          out: 'La reunión se calma. Se habla de avisos en Facebook y en la radio de Huancayo. Nadie vuelve a mencionar las 14 horas.',
          pro: { ok: 'Evitas el choque.', risk: 'El riesgo más grave salió de la mesa sin decisión.' },
          kusi: ['pensando', 'Paz hoy… ¿y las 14 horas?'] } },
    ],
    rules: [[BP, 'En una empresa familiar, RR.HH. aplica las mismas reglas a todas las áreas, sin importar qué hijo las dirige.']],
    mirada: {
      ve: 'En muchas empresas familiares del Perú, la sucesión se discute sin decirse: cada hijo defiende su área como si fuera su herencia. Cuando RR.HH. entra, cada uno busca ganarla para su lado. Tu valor depende de no ser de nadie.',
      visual: { tipo: 'balanza', a: { t: 'Tomar partido', items: ['Una aliada fuerte hoy', 'Un enemigo para siempre'] }, b: { t: 'Ser de la empresa', items: ['Confianza del fundador', 'Respeto de ambos', 'Nadie te debe un favor'] } },
    },
  },
  {
    id: 'm3', t: '11:15', ch: 'correo', who: null, titulo: 'La propuesta de Mariela', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Llega un correo de Mariela con copia a nadie más: «Seamos prácticas. Tenemos 22 conductores de más de 55 años. Cobran más por antigüedad y son los que más reclaman. Propongo un plan de renovación: <mark class="clave">reemplazarlos por conductores jóvenes este año</mark>. ¿Me ayudas a armarlo?».</p><p>En la lista está Néstor.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder que la edad no es causa de despido, que la seguridad se cuida evaluando la aptitud de todos los conductores y que le propones un examen médico y psicotécnico para los 90.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: -1 }, flags: ['veteranos_protegidos'], cartera: { veteranos: 'Frenada: evaluación de aptitud para todos' },
          responde: 'Mariela, gracias por la confianza. La edad, por sí sola, no es una causa de despido y un plan así sería discriminatorio y muy riesgoso. Si lo que nos preocupa es la seguridad, propongo evaluar la aptitud de los 90 conductores por igual, con examen médico y psicotécnico. Los veteranos, además, son quienes mejor conocen las rutas.',
          out: 'Mariela responde en dos minutos: «Ok. Pero los números no cierran igual». No está contenta, pero no insiste.',
          pro: { ok: 'Conviertes una idea discriminatoria en una medida de seguridad para todos.', risk: 'Mariela queda con su problema de costos sin resolver.', info: 'Prepárale un análisis de costos de la antigüedad: el problema financiero es real.' },
          kusi: ['animo', 'Seguridad sí, edad no. ¡Así!'] } },
      { id: 'b', label: 'Aceptar estudiar el plan con cuidado: hay que ver los números antes de opinar.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4 }, rel: { nestor: -1 }, flags: ['veteranos_fuera'], cartera: { veteranos: 'En estudio' },
          responde: 'Mariela, entiendo el punto de costos. Déjame revisar los números y te propongo algo la próxima semana.',
          out: 'Mariela responde con un pulgar. En el patio ya corre el rumor y nadie sabe de dónde salió.',
          pro: { ok: 'Mantienes buena relación con Finanzas.', risk: 'Abres la puerta a despidos por edad, que no tienen causa justa.' },
          kusi: ['indignado', '¡Néstor está en esa lista!'] } },
    ],
    rules: [[LEY, 'El despido requiere una causa justa ligada a la capacidad o conducta del trabajador; la edad no lo es (TUO del D.Leg. 728).'], [BP, 'La seguridad se protege evaluando la aptitud de todos por igual.']],
    mirada: {
      ve: 'Mariela no es cruel: ve una planilla cara y un riesgo que cree que se resuelve con gente joven. Pero el accidente que teme no depende de la edad sino de la fatiga y la aptitud. RR.HH. traduce un prejuicio en una medida justa.',
      visual: { tipo: 'cambio', titulo: 'De la idea a la medida', pares: [['Sacar a los mayores de 55', 'Evaluar la aptitud de los 90'], ['Ahorrar en antigüedad', 'Revisar la estructura de pagos'], ['Conductores jóvenes', 'Conductores descansados']] },
    },
  },
  {
    id: 'm4', t: '13:30', ch: 'presencial', who: null, titulo: 'Una política para Freddy y para todos', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Oficina de RR.HH.', show: ['personas', 'calidad', 'etica'],
    body: (n, F) => `<p>${F.has('freddy_descansa') ? 'Freddy llegó puntual a las 10, con la credencial colgando y la foto de su bebita en el celular.' : 'Freddy pasó en la mañana antes de salir a Satipo. Se veía cansado.'} Necesita un adelanto. Patty te dice que otros cuatro conductores han pedido lo mismo este año y que «a unos se les dio y a otros no».</p><p>Mientras almuerzas un pan con queso, armas <mark class="clave">una regla para todos</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la política de adelantos.', boton: 'Guardar la política',
    bloques: [
      { id: 'quien', t: 'Quién puede pedirlo', n: 2, ops: [
        { id: 'q1', t: 'Cualquier trabajador en planilla, con una solicitud simple a RR.HH.', ok: true, por: 'La misma regla para todos.' },
        { id: 'q2', t: 'Se atiende en orden de llegada y se responde en dos días hábiles.', ok: true, por: 'Un plazo claro evita el favoritismo.' },
        { id: 'q3', t: 'Lo aprueba el jefe directo según cómo trabaja la persona.', ok: false, por: 'Así vuelve a depender de la simpatía del jefe.' },
      ] },
      { id: 'cuanto', t: 'Cuánto y cómo se devuelve', n: 2, ops: [
        { id: 'c1', t: 'Un tope fijo por persona, que no supere lo que ya ganó en el mes.', ok: true, por: 'Evita deudas que ahogan.' },
        { id: 'c2', t: 'El descuento se acuerda por escrito y en cuotas.', ok: true, por: 'Sin sorpresas en la boleta.' },
        { id: 'c3', t: 'Se compensa haciendo vueltas extra.', ok: false, por: 'Justo lo que empuja a la fatiga.' },
      ] },
      { id: 'cuidado', t: 'Cuidado', n: 1, ops: [
        { id: 'k1', t: 'La razón del pedido es reservada y no se comenta en el patio.', ok: true },
        { id: 'k2', t: 'Se publica la lista de quién pidió para que haya transparencia.', ok: false, por: 'Exponer la necesidad de alguien no es transparencia.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 4 : 1, etica: q === 'riesgosa' ? -2 : 2 },
        flags: q === 'riesgosa' ? [] : ['adelantos_politica'], cartera: { adelantos: q === 'riesgosa' ? 'Política confusa' : 'Política de adelantos lista' },
        out: q === 'buena' ? 'Una página, cinco reglas. Freddy firma la primera solicitud. Mariela, al leerla, responde: «Esto sí me gusta. Tiene tope».' : 'La política existe, pero tiene una pieza que vuelve a meter el problema por la ventana.',
        pro: { ok: 'Una regla clara reemplaza los favores.', info: 'Revisa en tres meses cuántos piden y por qué: te dirá si los sueldos alcanzan.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡De un favor a un derecho con reglas!' : 'Una pieza no encaja.'],
      };
    },
    rules: [[BP, 'Un adelanto nunca debe pagarse con más horas de conducción.']],
    mirada: {
      ve: 'Las empresas familiares funcionan con favores: «a Juan le dimos porque es de confianza». Convertir un favor en una regla es una de las formas más visibles de profesionalizar. Y en transporte, cuidar el bolsillo del conductor también es cuidar su descanso.',
      visual: { tipo: 'flujo', titulo: 'Un adelanto con reglas', pasos: ['Solicitud', 'Respuesta en dos días', 'Tope fijo', 'Descuento acordado', 'Reserva'] },
    },
  },
  {
    id: 'm5', t: '15:40', ch: 'presencial', who: 'gonzalo', titulo: 'En el taller', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Taller de mantenimiento', show: ['confianza', 'tiempo'],
    body: (n, F) => `<p>Encuentras a Gonzalo en el taller, con las manos negras de grasa, ayudando a cambiar una llanta del bus 22. ${F.has('familia_escucha') ? 'Te mira distinto que en la mañana.' : 'Apenas te saluda.'}</p><p>«Mi papá cree que esto es fácil. Tengo buses de quince años, mecánicos que se van a la minería y choferes que se van a la competencia por cien soles más. <mark class="clave">¿Tú qué me vas a resolver?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Ofrecerle algo concreto: esta semana RR.HH. publica la convocatoria de conductores, filtra y le presenta candidatos; a cambio, los nuevos entran con el registro de horas.',
        res: { q: 'buena', fx: { confianza: 4, tiempo: -2 }, rel: { gonzalo: 1 }, flags: ['gonzalo_puente'], cartera: { contratacion: 'Convocatoria esta semana' },
          out: 'Gonzalo se limpia las manos en un trapo: «Si me traes cinco buenos esta semana, hablamos de lo demás». Es lo más parecido a un acuerdo que has tenido con él.',
          pro: { ok: 'Le resuelves su dolor y metes tu regla en el mismo paquete.', info: 'Cumple el plazo: tu credibilidad con él depende de esta primera entrega.' },
          kusi: ['feliz', '¡Un puente con grasa de motor!'] } },
      { id: 'b', label: 'Decirle que contratar es su tarea y que RR.HH. se ocupa de lo legal.',
        res: { q: 'riesgosa', fx: { confianza: -3 }, rel: { gonzalo: -1 }, cartera: { contratacion: 'Sin responsable' },
          out: 'Gonzalo vuelve a la llanta: «Ahí está. Burocracia». Pierdes la oportunidad de ser útil para quien más te resiste.',
          pro: { ok: 'Marcas límites de funciones.', risk: 'Confirmas lo que Gonzalo pensaba de RR.HH.' },
          kusi: ['triste', 'Justo ahí podías ayudarlo…'] } },
    ],
    mirada: { ve: 'Detrás del «así funcionó siempre» de Gonzalo hay una operación que se sostiene con alambre. Cuando RR.HH. resuelve un problema que él siente, deja de ser burocracia y se vuelve un aliado incómodo pero útil.' },
  },
  {
    id: 'm6', t: '17:30', ch: 'whatsapp', who: null, titulo: 'Los acuerdos del día', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Tu escritorio', show: ['confianza', 'calidad'],
    body: () => `<p>Rubén te escribe por interno: «Tip: si no lo pones en el grupo, en esta familia nadie se acuerda de lo que se acordó 😂». Tiene razón.</p><p>Escribes al grupo «Directorio Rojas». <mark class="clave">Claro, neutral y con responsables</mark>.</p>`,
    type: 'compose', enviaA: 'familia', para: 'Para: Directorio Rojas', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'acu', t: 'Lo acordado', ops: [
        { id: 'a1', t: 'Buenas tardes. Resumo lo de hoy: 1) conseguir conductores es prioridad de todos; 2) se registrarán las horas de manejo desde esta semana.', ok: true, por: 'Acuerdos concretos y compartidos.' },
        { id: 'a2', t: 'Buenas tardes. Como quedó claro, Operaciones tiene que cambiar su forma de trabajar.', ok: false, por: 'Señala a un hermano en el grupo de la familia.' },
      ] },
      { id: 'resp', t: 'Responsables', ops: [
        { id: 'r1', t: 'RR.HH. publica la convocatoria el viernes; Operaciones define rutas prioritarias; Finanzas estima el costo del relevo.', ok: true, por: 'Cada hijo tiene una tarea, y nadie queda como culpable.' },
        { id: 'r2', t: 'Yo me encargo de todo y les aviso.', ok: false, por: 'Te quedas con todo y ellos sin compromiso.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Lo revisamos el miércoles de la próxima semana con Don Alberto.', ok: true, por: 'Una fecha que obliga.' },
        { id: 'c2', t: '¡Gracias a todos! 🙌', ok: null, por: 'Amable, pero sin fecha nada se revisa.' },
      ] },
    ],
    res: sel => {
      const mal = sel.acu === 'a2' || sel.resp === 'r2', buenas = ['a1', 'r1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 3 : mal ? -2 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { gonzalo: sel.acu === 'a2' ? -1 : 0, 'don-alberto': q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Don Alberto responde con un «Así es». Mariela pone un pulgar. Gonzalo, nada; pero lo leyó. Rubén manda un sticker de un bus.' : mal ? 'Gonzalo sale del grupo. Rubén lo vuelve a agregar con un «ya, ya, tranquilos».' : 'Todos leen. Nadie responde.',
        pro: { ok: 'Un acuerdo escrito, con responsables y fecha, ordena a una familia.', risk: 'Un mensaje con culpables reabre la pelea.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Acta familiar en tres líneas!' : 'Algo del mensaje no ayudó.'],
      };
    },
    mirada: {
      ve: 'En una familia, lo que no se escribe se reinterpreta en la cena del domingo. Un resumen neutral, con tareas para cada hijo, es una pequeña forma de gobierno corporativo.',
      visual: { tipo: 'mensaje', titulo: 'Acuerdos con responsables', txt: 'Conseguir conductores es prioridad de todos. RR.HH. publica la convocatoria el viernes; Operaciones define rutas; Finanzas estima el costo del relevo. Lo revisamos el miércoles.' },
    },
  },
  {
    id: 'm7', t: '18:45', ch: 'whatsapp', who: 'patty', titulo: 'Una pregunta de Patty', banner: 'assets/esc/camino.webp', lugar: 'Saliendo del terminal', show: ['personas', 'etica'],
    body: (n, F) => `<p>Ya tienes la mochila al hombro cuando escribe Patty: «Jefa, el ingeniero Gonzalo me pidió el formato de horas de los conductores para "revisarlo y corregir lo que esté mal". ${F.has('patty_lidera') ? '¿Se lo doy?' : 'Ya se lo di, ¿hice mal?'} <mark class="clave">No sé qué hacer cuando me piden cosas los dueños</mark>».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que puede mostrárselo, pero que un registro no se corrige nunca después: si algo está mal, se anota una observación con fecha y firma, y siempre te avisa primero.',
        res: { q: 'buena', fx: { personas: 3, cumplimiento: 3 }, rel: { patty: 1 }, flags: ['patty_alerta'],
          envia: ['patty', 'Patty, puedes mostrárselo. Pero un registro no se borra ni se corrige después: si algo está mal, se pone una observación con fecha y firma. Y cuando alguien te pida cambiar un documento, sea quien sea, me avisas primero. No estás sola.'],
          out: 'Patty responde: «Gracias, jefa. Me lo voy a escribir en un post-it». Lo pega en su monitor al día siguiente.',
          pro: { ok: 'Le das una regla clara para cuando la presionen.', info: 'Las asistentes son las primeras a quienes se les pide «arreglar» papeles.' },
          kusi: ['animo', '¡Una regla para los días difíciles!'] } },
      { id: 'b', label: 'Responderle que sí, que el ingeniero es dueño y sabe lo que hace.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, personas: -1 },
          envia: ['patty', 'Sí, Patty, dáselo nomás. Es el dueño.'],
          out: 'Patty manda un «ok». Esa noche aprende que, si un dueño pide algo, se hace.',
          pro: { ok: 'Evitas un choque hoy.', risk: 'Le enseñas a tu equipo que los documentos se ajustan según quién pregunte.' },
          kusi: ['preocupado', 'Eso puede volver muy pronto…'] } },
    ],
    mirada: { ve: 'Tu equipo aprende tus reglas de lo que respondes en un WhatsApp a las siete de la noche. Si no le das un criterio para la presión de los dueños, la próxima vez decidirá sola y con miedo.' },
  },
];
