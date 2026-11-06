// Jefe/a de RR.HH. · Capítulo 8 · «El directorio familiar» · Semana 2, miércoles.
// Hilo de las dos semanas: crear desde cero el área de RR.HH. de una empresa familiar de transporte interprovincial.
// Normas citadas (ya verificadas en capítulos anteriores):
// - D.S. 017-2009-MTC, art. 30 (tiempos de conducción), capítulo 2.
//   https://www.sutran.gob.pe/wp-content/uploads/2020/08/Reglamento-Nacional-de-Administraci%C3%B3n-de-Transporte-%E2%80%93-DS-N%C2%BA-017-2009-MTC_modificado.pdf
// - Ley 28806, art. 14 (medida de requerimiento), capítulo 5.
// - D.S. 039-91-TR (RIT), capítulo 7. Ley 29783 (comité de SST), capítulo 1.
// - TUO del D.Leg. 728: la edad no es causa de despido (capítulo 3).
// No se citan montos: los costos se presentan como comparaciones, sin cifras inventadas.

export const CAP = {
  n: 8, titulo: 'El directorio familiar', dia: 'Semana 2, miércoles', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Transportes Mantaro · Sala del directorio',
  inicio: '07:00', fin: '19:30', cierreHora: '19:15',
  apertura: 'Miércoles. Don Alberto mandó limpiar la sala del segundo piso, la que solo se usa para los aniversarios. Hay una jarra de chicha morada, un retrato del primer bus y cinco sillas. Una es la tuya.', boton: 'Preparar la presentación',
  kusi: 'Hoy no vienes a pedir permiso: vienes a proponer un rumbo. ¡Con datos y con calma!',
  lead: 'Armaste una presentación con lo hecho y lo pendiente, escuchaste lo que cada hijo necesitaba, defendiste el pago del relevo, no te dejaste usar en la sucesión y conseguiste un plan aprobado.',
  reflexion: '¿Hasta dónde llega el papel de RR.HH. cuando los dueños discuten el futuro de su propia familia?',
  siguiente: { n: 9, titulo: 'La elección', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'presentacion', p: 'Presentación al directorio', j: 'Tú', d: 0, e: 'A las 9' },
  { id: 'relevo', p: 'Pago del relevo nocturno', j: 'Mariela · Finanzas', d: 0, e: 'En discusión' },
  { id: 'plan', p: 'Plan de 90 días', j: 'Directorio', d: 0, e: 'Por aprobar' },
  { id: 'sucesion', p: 'La pregunta de Don Alberto', j: 'Don Alberto', d: 0, e: 'Sin aviso' },
  { id: 'comite', p: 'Elección del comité de SST', j: 'Tú', d: 0, e: 'Mañana' },
];

export const FUTURO = {
  presentacion_solida: ['Tu presentación mostró lo hecho, lo pendiente y lo que cuesta.', 'El directorio confía en tus números.'],
  pago_relevo: ['El relevo nocturno se paga sin castigar al conductor.', 'Los conductores lo notarán en su próxima boleta.'],
  media_vuelta: ['El relevo se paga a media vuelta.', 'Algunos conductores volverán a pedir manejar solos.'],
  sucesion_proceso: ['Propusiste un proceso de sucesión con criterios y sin tomar partido.', 'Volverá a la mesa en la semana 3.'],
  sucesion_opinion: ['Le diste a Don Alberto tu opinión sobre cuál de sus hijos debe sucederlo.', 'Algún hermano lo sabrá.'],
  plan_aprobado: ['El directorio aprobó tu plan con presupuesto.', 'El lunes empieza la ejecución.'],
  gonzalo_confia: ['Gonzalo te contó algo que no le ha dicho a su padre.', 'Será un aliado en la semana 3.'],
};

export const CHATS = {
  familia: { n: 'Directorio Rojas', sub: 'Don Alberto, Gonzalo, Mariela, Rubén y tú', c: '#8A5A2B' },
  'don-alberto': { n: 'Don Alberto Rojas', sub: 'Fundador y gerente general', who: 'don-alberto' },
  gonzalo: { n: 'Gonzalo Rojas', sub: 'Gerente de Operaciones', who: 'gonzalo' },
  patty: { n: 'Patty Ñaupari', sub: 'Asistente de RR.HH.', who: 'patty' },
  nestor: { n: 'Néstor Poma', sub: 'Conductor', who: 'nestor' },
  mariela: { n: 'Mariela Rojas', sub: 'Gerente de Administración y Finanzas · hija', c: '#2E7D6B' },
  ruben: { n: 'Rubén Rojas', sub: 'Jefe Comercial · hijo menor', c: '#C0392B' },
};

export const WSP = [
  { chat: 'ruben', t: '07:10', de: 'Rubén', txt: 'Consejo: no uses más de 5 diapositivas. Papá se duerme en la sexta 😅' },
  { chat: 'mariela', t: '08:30', de: 'Mariela', txt: 'Te aviso para que no te sorprenda: voy a cuestionar el costo del relevo. Nada personal.' },
  { chat: 'mariela', t: '08:32', de: 'Mariela', txt: 'Y voy a volver a traer lo de los mayores de 55. Cuento contigo.', si: 'veteranos_fuera' },
  { chat: 'patty', t: '13:00', de: 'Patty', txt: 'Jefa, ¿cómo le fue? Aquí ya tengo las ánforas para mañana listas 🗳️', si: 'patty_respaldada' },
  { chat: 'nestor', t: '17:20', de: 'Néstor', txt: 'Me propusieron para el comité. No sé si aceptar, señora. Dicen que es para que me boten después.' },
];

export const CORREOS = [
  { t: '07:00', de: 'Don Alberto Rojas', para: 'Jefa de RR.HH.', asunto: 'Hoy', html: '<p>Hoy les pido a mis hijos que la escuchen como me escuchan a mí. Usted hable como si yo no estuviera.</p><p>Alberto</p>' },
  { t: '16:00', de: 'Mariela Rojas', para: 'Directorio Rojas; Jefa de RR.HH.', asunto: 'Presupuesto aprobado', html: '<p>Adjunto el presupuesto de RR.HH. aprobado hoy para los próximos 90 días. Revisión trimestral de ejecución.</p><p>Mariela</p>', si: 'plan_aprobado' },
];

export const QUIZ = [
  { q: 'Al presentar un plan a una familia dueña, conviene…', ops: ['Mostrar solo lo bueno', 'Mostrar lo hecho, lo pendiente y lo que cuesta, con pocas láminas', 'Leer 40 diapositivas', 'Culpar a un área'], ok: 1, por: 'Claridad y honestidad generan confianza.' },
  { q: 'El dueño te pregunta en privado cuál de sus hijos debería sucederlo. Lo más profesional es…', ops: ['Dar tu opinión con nombre', 'No elegir, y proponer un proceso de sucesión con criterios claros', 'Decir que te da igual', 'Contárselo a los hijos'], ok: 1, por: 'Elegir te convierte en parte de la pelea familiar. Un proceso con criterios protege a la empresa.' },
  { q: 'Finanzas propone pagar el relevo nocturno a media vuelta. El riesgo es…', ops: ['Ninguno', 'Que los conductores prefieran manejar solos para cobrar completo', 'Que suban los pasajes', 'Que llueva'], ok: 1, por: 'Si cumplir cuesta la mitad del ingreso, el sistema empuja a incumplir.' },
  { q: 'Un buen plan de 90 días aprobado por el directorio debe tener…', ops: ['Solo buenas intenciones', 'Prioridades, responsables, presupuesto y fecha de revisión', 'Todos los proyectos posibles', 'Ningún costo'], ok: 1, por: 'Sin responsables ni revisión, un plan es un deseo.' },
];

const BP = 'bp', LEY = 'ley';

export const ESCENAS = [
  {
    id: 'd1', t: '07:15', ch: 'documento', who: null, titulo: 'Cinco láminas', banner: 'assets/esc/idea.webp', lugar: 'Tu escritorio', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Rubén tiene razón: Don Alberto se duerme en la sexta lámina. ${F.has('error_oculto') ? 'Y tú sabes que en el expediente de SUNAFIL todavía está el Excel equivocado.' : ''}</p><p>Armas la presentación. <mark class="clave">Elige las piezas de cada parte</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada parte de la presentación.', boton: 'Imprimir la presentación',
    bloques: [
      { id: 'hecho', t: 'Lo que se hizo', n: 2, ops: [
        { id: 'h1', t: 'Relevo nocturno, registro de horas y comparecencia ante SUNAFIL, con fechas.', ok: true },
        { id: 'h2', t: 'Lo que aprendimos del accidente del bus 22 y cómo cambió la empresa.', ok: true, por: 'Convierte la crisis en aprendizaje, no en culpa.' },
        { id: 'h3', t: 'Una foto de la jefa de RR.HH. con los conductores.', ok: false, por: 'Habla de ti, no de la empresa.' },
      ] },
      { id: 'pend', t: 'Lo pendiente', n: 2, ops: [
        { id: 'p1', t: 'Los incumplimientos que todavía existen y la medida de requerimiento con su plazo.', ok: true, por: 'Sin esconder lo que falta.' },
        { id: 'p2', t: 'Reglamento Interno y comité de SST, con fecha.', ok: true },
        { id: 'p3', t: 'Solo los logros: los pendientes se ven después.', ok: false, por: 'Si lo descubren luego, pierdes credibilidad.' },
      ] },
      { id: 'pide', t: 'Lo que pides', n: 1, ops: [
        { id: 'r1', t: 'Tres decisiones: pago del relevo, presupuesto de contratación y respaldo al reglamento.', ok: true, por: 'Pocas decisiones claras.' },
        { id: 'r2', t: 'Que confíen en ti.', ok: false, por: 'Es un deseo, no una decisión.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['presentacion_solida'] : [], cartera: { presentacion: q === 'buena' ? 'Cinco láminas claras' : 'Presentación con huecos' },
        out: q === 'buena' ? 'Cinco láminas. La última tiene solo tres líneas, cada una con un casillero para marcar «sí» o «no».' : 'La presentación está lista, aunque cuenta más de lo que pide.',
        pro: { ok: 'Lo hecho, lo pendiente y tres decisiones: así se presenta a un directorio.', info: 'Lleva copia impresa para cada uno: en esta familia, el papel todavía manda.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cinco láminas y tres decisiones!' : 'Le falta algo para decidir.'],
      };
    },
    mirada: {
      ve: 'Un directorio no necesita que le cuentes todo lo que trabajaste: necesita saber qué cambió, qué falta y qué tiene que decidir hoy. Mostrar lo pendiente sin miedo es lo que hace creíble lo logrado.',
      visual: { tipo: 'flujo', titulo: 'La presentación', pasos: ['Lo hecho', 'Lo aprendido', 'Lo pendiente', 'Tres decisiones'] },
    },
  },
  {
    id: 'd2', t: '09:05', ch: 'presencial', who: 'don-alberto', titulo: 'Cinco sillas', banner: 'assets/3d/scenes/reunion.webp', lugar: 'Sala del directorio', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Don Alberto abre: «Hace diez días esta empresa no sabía cuántas horas manejaban sus choferes. Escuchen». ${F.has('familia_escucha') ? 'Los tres hermanos te miran con atención; la semana pasada no tomaste partido.' : 'Mariela te mira como a una aliada; Gonzalo, como a una rival.'}</p><p>Antes de empezar, <mark class="clave">puedes hacer dos preguntas a la mesa</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para el directorio.',
    opts: [
      { id: 'mariela', label: 'Mariela, ¿qué necesitarías ver para aprobar un presupuesto?', info: '«Un número de costo y otro de lo que evitamos. Y que se revise cada tres meses. No firmo cheques en blanco.»' },
      { id: 'gonzalo', label: 'Gonzalo, ¿qué es lo que más te frena hoy en Operaciones?', info: '«Me faltan conductores. Ya llegaron cinco candidatos de RR.HH.; si me consigues diez más, dejo de cancelar salidas.»' },
      { id: 'ruben', label: 'Rubén, ¿qué te dicen los pasajeros después del accidente?', info: '«Que tienen miedo. Bajaron las ventas de pasajes nocturnos. Si les decimos que vamos con dos choferes, eso vende. Es seguridad, pero también es marketing.»' },
      { id: 'alberto', label: 'Don Alberto, ¿qué decisión no quiere tomar solo?', info: '«Muchas. Pero hoy, el pago de los choferes. Siempre se pagó por vuelta. Cambiarlo es cambiar 30 años.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3, personas: 2 }, rel: { 'don-alberto': 1 },
      out: picks.includes('ruben') ? 'Rubén te da el argumento que faltaba: la seguridad también recupera ventas. Mariela anota.' : 'Cada respuesta te muestra qué necesita cada uno para decir que sí.',
      kusi: ['curioso', '¡Cada hijo tiene su llave!'],
    }),
    mirada: {
      ve: 'En una familia, cada hijo escucha desde su área y desde su lugar en la herencia. Preguntar qué necesita cada uno antes de presentar te permite hablarle a cada quien en su idioma, sin cambiar el fondo.',
      visual: { tipo: 'matriz', x: 'Poder en la empresa', y: 'Apoyo a tu plan', cuadrantes: ['Aliados clave', 'Por ganar', 'Apoyo leal', 'Neutral'], items: [['Don Alberto', .9, .8], ['Mariela', .7, .45], ['Gonzalo', .75, .3], ['Rubén', .35, .7]] },
    },
  },
  {
    id: 'd3', t: '10:00', ch: 'presencial', who: null, titulo: 'El costo del relevo', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Sala del directorio', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>Mariela proyecta su hoja de cálculo. «Pagar la vuelta completa a dos choferes en cada nocturno duplica el costo de conducción de esa ruta. Propongo pagar a cada uno <mark class="clave">media vuelta</mark>: manejan la mitad, cobran la mitad.»</p><p>Suena lógico. Todos te miran.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Aceptar la media vuelta: es proporcional a lo que maneja cada uno y el directorio necesita cuidar la caja después del accidente.',
        res: { q: 'riesgosa', fx: { confianza: 2, etica: -3, cumplimiento: -3 }, rel: { gonzalo: 0 }, flags: ['media_vuelta'], cartera: { relevo: 'Media vuelta' },
          out: 'Mariela asiente satisfecha. En el patio, esa tarde, Wilber dirá lo que te dijo por teléfono: «nadie quiere ganar la mitad». Y alguno volverá a pedir manejar solo.',
          pro: { ok: 'Cuidas la caja.', risk: 'Si cumplir cuesta la mitad del ingreso, el sistema vuelve a empujar a incumplir.' },
          kusi: ['preocupado', '¿Y lo que dijo Wilber?'] } },
      { id: 'b', label: 'Proponer pagar por hora de conducción y descanso en ruta, con un bono por viaje sin incidentes: el conductor no pierde por ir con relevo, y Rubén vende «dos choferes» como seguridad.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 4, confianza: 2, calidad: 2 }, rel: { 'don-alberto': 1 }, flags: ['pago_relevo'], cartera: { relevo: 'Pago por hora y bono de seguridad' },
          out: 'Mariela frunce el ceño, recalcula y dice: «Cuesta más que la media vuelta, pero menos que la vuelta completa». Rubén ya está pensando el afiche. Don Alberto marca «sí» en tu lámina.',
          pro: { ok: 'El pago deja de premiar el cansancio y la seguridad se convierte en valor comercial.', risk: 'Cambiar 30 años de pago por vuelta generará dudas; habrá que explicarlo bien.', info: 'Simula con Mariela tres boletas reales antes de aplicarlo.' },
          kusi: ['celebra', '¡Un pago que no castiga cumplir!'] } },
      { id: 'c', label: 'Defender la vuelta completa para ambos conductores: la vida no tiene precio y el accidente lo demostró.',
        res: { q: 'aceptable', fx: { etica: 3, confianza: -3 }, rel: { 'don-alberto': 0 }, cartera: { relevo: 'Vuelta completa, sin acuerdo' },
          out: 'Mariela responde: «Con frases no se paga la planilla». La discusión se estanca. Don Alberto pide dejarlo para el próximo directorio.',
          pro: { ok: 'Tu postura es firme y protege a los conductores.', risk: 'Sin una alternativa viable, la decisión se posterga y sigue la incertidumbre.' },
          kusi: ['pensando', 'Firme… pero sin acuerdo.'] } },
    ],
    rules: [[BP, 'Un sistema de pago que castiga cumplir las normas de seguridad termina empujando a incumplirlas.']],
    mirada: {
      ve: 'Mariela no quiere poner en riesgo a nadie: quiere que la empresa sobreviva al golpe del accidente. La respuesta no es elegir entre la caja y la vida, sino diseñar un pago donde cumplir no cueste. Ahí RR.HH. aporta algo que Finanzas sola no ve.',
      visual: { tipo: 'balanza', a: { t: 'Media vuelta', items: ['Menor costo', 'Conductor pierde por ir con relevo', 'Presión para manejar solo'] }, b: { t: 'Pago por hora y bono', items: ['Costo intermedio', 'Cumplir no castiga', 'Argumento comercial'] } },
    },
  },
  {
    id: 'd4', t: '12:15', ch: 'presencial', who: 'don-alberto', titulo: '«¿Cuál de mis hijos?»', banner: 'assets/foto/mentora.webp', lugar: 'Oficina de la gerencia, a solas', show: ['etica', 'confianza'],
    body: () => `<p>En el receso, Don Alberto te lleva a su oficina y cierra la puerta. Mira la foto del primer bus. «Tengo 71 años. Usted ya los conoce a los tres.»</p><p>Baja la voz: «<mark class="clave">¿Cuál de mis hijos debería quedarse con la gerencia?</mark> Dígamelo sin rodeos».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que no te corresponde elegir, pero que puedes ayudarlo a armar un proceso: criterios claros, evaluación de cada candidato y, si quiere, un asesor externo en empresas familiares.',
        res: { q: 'buena', fx: { etica: 5, confianza: 2 }, rel: { 'don-alberto': 1 }, flags: ['sucesion_proceso'], cartera: { sucesion: 'Proceso con criterios, sin nombres' },
          out: 'Don Alberto se ríe bajito: «Sabía que diría eso. Por eso la contraté». Te pide que en la semana 3 le traigas una propuesta de proceso.',
          pro: { ok: 'Ayudas sin volverte parte de la pelea.', info: 'Un proceso de sucesión mira competencias, no afectos: también puede concluir que nadie está listo aún.' },
          kusi: ['animo', 'Ayudar sin elegir. ¡Qué fino!'] } },
      { id: 'b', label: 'Darle tu opinión honesta: Mariela tiene la formación para gerenciar, aunque le falta entender la operación.',
        res: { q: 'riesgosa', fx: { etica: -2, confianza: 1 }, rel: { gonzalo: -1 }, flags: ['sucesion_opinion'], cartera: { sucesion: 'Diste un nombre' },
          out: 'Don Alberto asiente despacio. Esa noche se lo comentará a su esposa. El domingo, en el almuerzo familiar, alguien lo repetirá.',
          pro: { ok: 'Eres honesta con el dueño.', risk: 'Tu opinión ya no es de RR.HH.: es un voto en una herencia.' },
          kusi: ['preocupado', 'Eso va a llegar a la mesa del domingo…'] } },
      { id: 'c', label: 'Darle tu opinión: Gonzalo conoce la operación como nadie y los conductores lo respetan, aunque le teman.',
        res: { q: 'riesgosa', fx: { etica: -2, confianza: 1 }, rel: { gonzalo: 1 }, flags: ['sucesion_opinion'], cartera: { sucesion: 'Diste un nombre' },
          out: 'Don Alberto se queda callado. Mariela, que pasaba por el pasillo, escucha el nombre de su hermano.',
          pro: { ok: 'Eres honesta.', risk: 'Te conviertes en parte de la sucesión y pierdes tu independencia.' },
          kusi: ['preocupado', 'Un nombre que pesa mucho…'] } },
    ],
    rules: [[BP, 'En una empresa familiar, RR.HH. puede diseñar el proceso de sucesión, pero no elegir al sucesor.']],
    mirada: {
      ve: 'Que el dueño te pregunte esto es una muestra de confianza enorme. Y por eso mismo es una trampa: tu respuesta valdría como un voto en la herencia. Lo que sí puede aportar RR.HH. es un proceso justo que la familia pueda aceptar.',
      visual: { tipo: 'cambio', titulo: 'De la opinión al proceso', pares: [['¿Cuál de mis hijos?', '¿Qué necesita la gerencia?'], ['Afecto y costumbre', 'Criterios y evaluación'], ['Decisión en privado', 'Proceso que la familia conoce']] },
    },
  },
  {
    id: 'd5', t: '14:00', ch: 'documento', who: null, titulo: 'Lo que aprueba el directorio', banner: 'assets/esc/meta.webp', lugar: 'Sala del directorio', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Vuelven a la sala. ${F.has('veteranos_fuera') ? 'Mariela vuelve a poner sobre la mesa el plan de los mayores de 55. ' : ''}Mariela dice que el presupuesto alcanza para <mark class="clave">tres frentes</mark> en los próximos 90 días.</p><p>Elige cuáles propones.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres frentes del presupuesto.', boton: 'Proponer estos tres', resumen: 'Propusiste',
    cols: ['Frente', 'Qué resuelve'],
    rows: [
      { id: 'contratar', cells: ['Contratar 15 conductores con evaluación de aptitud', 'Relevo sin cancelar salidas'] },
      { id: 'pago', cells: ['Implementar el nuevo esquema de pago de conducción', 'Que cumplir no cueste'] },
      { id: 'sst', cells: ['Sistema de SST: comité, capacitaciones y exámenes médicos para los 90', 'La medida de requerimiento'] },
      { id: 'renovar', cells: ['Programa de salida de conductores mayores de 55', 'Ahorro en antigüedad'] },
      { id: 'software', cells: ['Software de planillas de última generación', 'Comodidad del área'] },
    ],
    score: { contratar: 3, pago: 3, sst: 3, renovar: -4, software: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 4 : q === 'riesgosa' ? -3 : 1, etica: picks.includes('renovar') ? -4 : 1 },
        flags: q === 'riesgosa' ? [] : ['plan_aprobado'], cartera: { plan: q === 'buena' ? 'Aprobado: conductores, pago y SST' : q === 'aceptable' ? 'Aprobado a medias' : 'Plan con un frente riesgoso' },
        out: picks.includes('renovar') ? 'El plan incluye la salida de los mayores de 55. Gonzalo, sorprendentemente, se opone: «Sin Néstor y los viejos no hay quien enseñe las rutas».' : 'Don Alberto pide votar a mano alzada. Cuatro manos arriba. Gonzalo levanta la suya al final, despacio.',
        pro: { ok: 'Tres frentes que atacan la causa del accidente y cumplen con la inspección.', risk: 'Un programa por edad abre un riesgo legal y quita experiencia.', info: 'Pide que la revisión trimestral sea con datos de horas, rotación e incidentes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Plan aprobado, con presupuesto!' : '¿Ese frente era necesario?'],
      };
    },
    rules: [[LEY, 'La edad, por sí sola, no es causa de despido (TUO del D.Leg. 728).']],
    mirada: {
      ve: 'Con presupuesto limitado, priorizar es decir qué no se hará. Las tres cosas que más protegen a esta empresa son las que atacan la causa del accidente: falta de conductores, un pago que premia el cansancio y un sistema de seguridad que no existía.',
      visual: { tipo: 'linea', titulo: 'Los próximos 90 días', hitos: [['Mes 1', 'Contratación y nuevo pago'], ['Mes 2', 'Exámenes y capacitaciones'], ['Mes 3', 'Reglamento vigente'], ['Día 90', 'Revisión con el directorio']] },
    },
  },
  {
    id: 'd6', t: '16:30', ch: 'llamada', who: null, titulo: 'Después del directorio', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio', show: ['personas', 'confianza'],
    body: () => `<p>La reunión terminó. La jarra de chicha morada está vacía. En la tarde te llaman, uno tras otro.</p><p><mark class="clave">Cada llamada te dice cómo lo vivió cada uno</mark>.</p>`,
    type: 'calls',
    calls: [['Rubén Rojas · Comercial', 'Contesta caminando por el paradero', '«Primera reunión de familia en años en la que nadie gritó. Ya hice el afiche: "Dos choferes, cero sustos". ¿Lo puedo publicar?»'], ['Mariela Rojas · Finanzas', 'Contesta con la calculadora de fondo', '«Aprobé, pero quiero el informe de ejecución cada mes, no cada tres. Si los números no salen, lo corto. Y otra cosa: me enteré de que los choferes están juntando firmas para algo. ¿Tú sabías?»'], ['Patty Ñaupari · RR.HH.', 'Contesta desde la oficina', '«Jefa, ya están las ánforas, las cédulas y el padrón para la elección de mañana. Néstor vino a preguntar si puede ser candidato.»']],
    prompt: 'Terminaste las llamadas. ¿Qué haces con lo que oíste?',
    choices: [
      { id: 'a', label: 'Aceptar el informe mensual de Mariela, pedirle a Rubén que el afiche diga solo lo que ya se cumple, y anotar lo de las firmas para averiguarlo con respeto, sin investigar a nadie.',
        res: { q: 'buena', fx: { confianza: 3, etica: 3, calidad: 2 }, rel: { nestor: 0 }, cartera: { plan: 'Informe mensual acordado' },
          out: 'Rubén cambia el afiche: «Nocturnos a Lima con dos choferes». Mariela dice «bien». Lo de las firmas lo apuntas con un signo de interrogación.',
          pro: { ok: 'Cuidas que la comunicación no prometa de más y no tratas la organización de los trabajadores como una amenaza.', info: 'Si los trabajadores se organizan, es su derecho. RR.HH. no lo investiga ni lo frena.' },
          kusi: ['feliz', 'Promesas que se cumplen y respeto por las firmas.'] } },
      { id: 'b', label: 'Pedirle a Patty que averigüe discretamente quiénes están juntando firmas.',
        res: { q: 'riesgosa', fx: { etica: -5, confianza: -2 }, rel: { patty: -1 }, cartera: { plan: 'Indagando firmas' },
          out: 'Patty se queda callada al teléfono. «¿Eso es parte de mi trabajo, jefa?» No sabes qué responderle.',
          pro: { ok: 'Quieres estar informada.', risk: 'Indagar sobre quién se organiza puede verse como una amenaza a la libertad sindical.' },
          kusi: ['indignado', '¡Eso no es de RR.HH.!'] } },
    ],
    mirada: { ve: 'Después de una buena reunión llegan los detalles que no se dijeron en la mesa: un control mensual, un afiche que promete de más y un rumor de firmas. Cómo respondes a lo último dirá mucho de la empresa que estás construyendo.' },
  },
  {
    id: 'd7', t: '19:00', ch: 'whatsapp', who: 'gonzalo', titulo: '«¿Un caldo?»', banner: 'assets/esc/camino.webp', lugar: 'Saliendo del terminal', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Llueve fino sobre la avenida Ferrocarril. Te escribe Gonzalo: «¿Un caldo de cabeza en el mercado? Invito yo. ${F.has('gonzalo_limite') ? 'Te debo una por lo del lunes.' : 'Quiero hablar de algo.'}»</p><p>Estás cansada y mañana es la elección. <mark class="clave">Pero es la primera vez que te invita</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Aceptar media hora, escucharlo y no hablar de su familia más de lo que él quiera.',
        res: { q: 'buena', fx: { confianza: 4, tiempo: -2 }, rel: { gonzalo: 1 }, flags: ['gonzalo_confia'],
          out: 'En el mercado, entre el vapor de las ollas, Gonzalo te confiesa que le aterra no estar a la altura de su papá. «Los choferes me tienen miedo porque yo les tengo miedo a ellos.» Te vas a casa pensando que es la conversación más honesta de las dos semanas.',
          pro: { ok: 'Construyes una relación con quien más te resistía.', info: 'Lo que te contó es confidencial: no es información para el directorio.' },
          kusi: ['sorpresa', '¡Gonzalo tiene corazón… y caldo!'] } },
      { id: 'b', label: 'Agradecerle y pedirle dejarlo para la próxima semana: hoy necesitas descansar.',
        res: { q: 'aceptable', fx: { tiempo: 2 },
          out: 'Gonzalo responde «ya, otro día». No vuelve a invitarte esa semana.',
          pro: { ok: 'Cuidas tu descanso antes de un día largo.', risk: 'Las puertas de alguien como Gonzalo no se abren seguido.' },
          kusi: ['pensando', 'Había algo detrás de esa invitación…'] } },
    ],
    mirada: { ve: 'Las relaciones que sostienen un área nueva no se construyen solo en reuniones. A veces una conversación informal con quien más te resistía vale más que diez correos. Y escuchar sin usar lo que te cuentan es lo que te hace confiable.' },
  },
];
