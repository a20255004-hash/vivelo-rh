// Asistente de Selección · Capítulo 9 · «Los papeles del ingreso» · Semana 2, jueves · Clínica del Misti, Arequipa.
// Normas citadas:
// - Ley 29783 (Seguridad y Salud en el Trabajo), art. 49 d), y su Reglamento (D.S. 005-2012-TR), art. 101: exámenes médicos
//   ocupacionales a cargo del empleador; su costo nunca lo asume el trabajador.
//   https://cdn.www.gob.pe/uploads/document/file/5683091/5047145-informe-tecnico-0023-2020-servir-gpgsc.pdf
//   https://lpderecho.pe/ley-modifica-seguridad-salud-empleadores-vigilancia-epidemiologica-trabajadores/
//   (Ojo: hay una modificación reciente de los arts. 49 y 60 en trámite/aprobada por insistencia; no se citan sus detalles.)
// - D.S. 003-97-TR (TUO del D. Leg. 728), art. 18: quien renuncia debe dar aviso escrito con 30 días de anticipación;
//   el empleador puede exonerar ese plazo.
// - Ley 29733 (datos personales), ya citada en el capítulo 1.

export const CAP = {
  n: 9, titulo: 'Los papeles del ingreso', dia: 'Semana 2, jueves', foto: 'assets/foto2/revisan.webp', lugar: 'Clínica del Misti · Arequipa',
  inicio: '07:20', fin: '18:50', cierreHora: '18:35',
  apertura: 'Jueves. Linares tiene la lista final sobre su escritorio y tú tienes 58 nombres que todavía no son trabajadores. Faltan exámenes médicos, ofertas por escrito y una renuncia que nadie previó. El lunes entra el primer grupo.', boton: 'Abrir el checklist',
  kusi: 'Elegir a alguien es la mitad. Que llegue bien el lunes es la otra. ¡Dale!',
  lead: 'Armaste el checklist de ingreso, priorizaste los exámenes médicos con criterio, hiciste una oferta clara, respetaste el preaviso de quien venía de otra clínica y cubriste las bajas desde la reserva.',
  reflexion: '¿Qué tiene que saber una persona antes de decir «acepto»?',
  siguiente: { n: 10, titulo: 'Diez días', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'tecnicas', p: '60 técnicas de enfermería', j: 'Milena · Selección', d: 0, e: '58 confirmadas, faltan 2' },
  { id: 'check', p: 'Checklist de ingreso', j: 'Tú', d: 0, e: 'Por armar' },
  { id: 'emo', p: 'Exámenes médicos de ingreso', j: 'Salud Ocupacional', d: 0, e: '58 por programar' },
  { id: 'ofertas', p: 'Ofertas por escrito', j: 'Tú', d: 0, e: 'Por enviar' },
  { id: 'reserva', p: 'Banco de reserva', j: 'Tú', d: 0, e: '46 en espera' },
];

export const FUTURO = {
  checklist_ok: ['El checklist de ingreso tiene examen médico, contrato, inducción y datos de planilla.', 'Lo usarán el lunes.'],
  checklist_flojo: ['Al checklist le faltan piezas.', 'El lunes alguien llegará sin algo.'],
  emo_priorizado: ['Los exámenes médicos del primer grupo están programados.', 'Dos quedan para el martes.'],
  oferta_clara: ['Ángel recibió una oferta con turno, fecha y condiciones por escrito.', 'Sabe a qué dice que sí.'],
  oferta_vaga: ['La oferta de Ángel fue un «ya estás, felicitaciones».', 'Tendrá dudas el lunes.'],
  preaviso_respetado: ['Ruth ingresará cuando termine su preaviso.', 'Su anterior empleador no tendrá queja.'],
  reserva_llamada: ['Llamaste a la reserva con criterio para cubrir las bajas.', 'La lista llega a 60.'],
};

export const CHATS = {
  milena: { n: 'Milena Cáceres', sub: 'Analista de Selección', who: 'milena' },
  sor: { n: 'Sor Elena Paz', sub: 'Jefa de Enfermería', who: 'sor' },
  angel: { n: 'Ángel Mamani', sub: 'Seleccionado', who: 'angel' },
  ruth: { n: 'Ruth Calderón', sub: 'Seleccionada', who: 'ruth' },
  so: { n: 'Mabel Zúñiga', sub: 'Salud Ocupacional', c: '#4A7FB5' },
};

export const WSP = [
  { chat: 'milena', t: '07:20', de: 'Milena', txt: 'Hoy: checklist, exámenes, ofertas. Y ojo, dos de las 58 no contestan desde ayer 😬' },
  { chat: 'so', t: '08:50', de: 'Mabel', txt: 'Tengo 40 cupos para exámenes hasta el sábado. No me alcanzan para 58, mi reina.' },
  { chat: 'sor', t: '10:10', de: 'Sor Elena', txt: 'Que el muchacho Mamani entre en el primer grupo. Lo quiero al lado de una técnica antigua.', si: 'angel_pregunta' },
  { chat: 'angel', t: '12:30', de: 'Ángel', txt: '¡Acepto! Ya le conté a mi mamá. Lloró 😭 Gracias por todo, señorita.', si: 'oferta_clara' },
  { chat: 'angel', t: '12:30', de: 'Ángel', txt: '¡Gracias! Una pregunta: ¿cuánto es el sueldo? ¿Y qué turno me toca? Disculpe 😅', si: 'oferta_vaga' },
  { chat: 'ruth', t: '15:20', de: 'Ruth', txt: 'Gracias por entender lo del preaviso. Quiero irme bien de donde estoy.', si: 'preaviso_respetado' },
];

export const CORREOS = [
  { t: '07:30', de: 'Dr. Fernando Linares', para: 'Selección', asunto: 'Lista final', html: '<p>Recibida. 58 no son 60. Para el viernes quiero 60 nombres con examen médico. El lunes entra el primer grupo de 25.</p><p>F. Linares</p>' },
  { t: '09:40', de: 'Ruth Calderón', para: 'Selección', asunto: 'Mi fecha de ingreso', html: '<p>Buenos días. Hoy presenté mi renuncia en la clínica donde trabajo ahora. Allí me piden los 30 días de preaviso. ¿Puedo empezar después? No quiero irme mal.</p><p>Ruth</p>', si: 'ruth_escuchada' },
];

export const QUIZ = [
  { q: '¿Quién paga el examen médico ocupacional de ingreso?', ops: ['El trabajador', 'El empleador', 'Mitad y mitad', 'EsSalud'], ok: 1, por: 'Ley 29783, art. 49 d) y Reglamento, art. 101: el costo es del empleador; nunca del trabajador.' },
  { q: 'Una seleccionada debe dar 30 días de preaviso en su trabajo actual. ¿Qué haces?', ops: ['Le pides que renuncie sin avisar', 'Coordinas una fecha de ingreso posterior o espera a que su empleador la exonere', 'La descartas', 'Le dices que no importa'], ok: 1, por: 'D.S. 003-97-TR, art. 18: preaviso de 30 días, que el empleador puede exonerar.' },
  { q: '¿Qué debe decir una oferta de trabajo por escrito?', ops: ['Solo «felicitaciones»', 'Puesto, fecha de inicio, turno, remuneración y tipo de contrato', 'Las notas de la entrevista', 'Nada, se dice por teléfono'], ok: 1, por: 'La persona tiene que saber a qué dice que sí.' },
  { q: 'Hay 40 cupos de examen y 58 personas. Priorizas…', ops: ['Por orden alfabético', 'A quienes ingresan primero', 'A las más jóvenes', 'Al azar'], ok: 1, por: 'Sin examen no se empieza: primero quienes ingresan el lunes.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '07:40', ch: 'documento', who: null, titulo: 'El checklist', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de Selección', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Milena te pide el checklist de ingreso: lo que cada persona necesita antes de su primer turno. El del año pasado era una hoja con tres casillas y una mancha de café.</p><p><mark class="clave">Arma el checklist por bloques</mark>.</p>`,
    type: 'builder', prompt: 'Elige qué va en cada bloque del checklist.', boton: 'Guardar el checklist',
    bloques: [
      { id: 'salud', t: 'Antes del primer día', n: 2, ops: [
        { id: 's1', t: 'Examen médico ocupacional de ingreso, pagado por la clínica.', ok: true, por: 'Sin examen no se empieza, y el costo es del empleador.' },
        { id: 's2', t: 'Oferta firmada con puesto, turno, fecha y remuneración.', ok: true },
        { id: 's3', t: 'Prueba de embarazo para las mujeres.', ok: false, por: 'Discriminatorio. No se exige como condición de ingreso.' },
      ] },
      { id: 'dia1', t: 'El primer día', n: 2, ops: [
        { id: 'd1', t: 'Firma de contrato y entrega de copia.', ok: true },
        { id: 'd2', t: 'Inducción de seguridad y salud en el trabajo antes de entrar al piso.', ok: true, por: 'En un piso de hospitalización hay riesgos biológicos desde el primer turno.' },
        { id: 'd3', t: 'Que firmen una carta de renuncia sin fecha, «por si acaso».', ok: false, por: 'Ilegal y abusivo. Ni se te ocurra.' },
      ] },
      { id: 'datos', t: 'Datos para planilla', n: 1, ops: [
        { id: 'p1', t: 'DNI, cuenta sueldo, sistema de pensiones y derechohabientes, en el formulario de RR.HH.', ok: true, por: 'Lo que Planillas necesita para el alta.' },
        { id: 'p2', t: 'Todo eso por foto al WhatsApp de Selección.', ok: false, por: 'Datos de planilla por WhatsApp: no.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -5 : 3 },
        flags: [q === 'riesgosa' ? 'checklist_flojo' : 'checklist_ok'], cartera: { check: q === 'riesgosa' ? 'Checklist con huecos' : 'Checklist de ingreso listo' },
        out: q === 'buena' ? 'Tu checklist ocupa una página con casillas. Milena lo manda a RR.HH. y a Salud Ocupacional: «Esto se queda para siempre».' : 'El checklist sirve, pero tiene piezas que van a fallar el lunes.',
        pro: { ok: 'Lo legal y lo práctico, antes de que alguien entre al piso.', risk: 'Un ingreso desordenado se nota en la primera guardia.', info: 'Pon un responsable por cada casilla.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Nadie entra sin lo suyo!' : 'Faltan piezas.'],
      };
    },
    rules: [[LEY, 'Ley 29783, art. 49 d): los exámenes médicos ocupacionales los asume el empleador.']],
    mirada: { ve: 'Las seleccionadas todavía no son trabajadoras: les falta el examen, la oferta y el contrato. El checklist es la diferencia entre un primer día ordenado y uno donde alguien entra al piso sin inducción.', visual: { tipo: 'flujo', titulo: 'Del «sí» al primer turno', pasos: ['Oferta escrita', 'Examen médico', 'Contrato', 'Inducción SST', 'Alta en planilla', 'Primer turno'] } },
  },
  {
    id: 'i2', t: '09:00', ch: 'llamada', who: null, titulo: 'Cuarenta cupos', banner: 'assets/3d/scenes/hospital.webp', lugar: 'Salud Ocupacional', show: ['tiempo', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Mabel, de Salud Ocupacional, tiene <mark class="clave">40 cupos hasta el sábado</mark>. Son 58. El lunes entran 25, el miércoles 20 y el lunes siguiente el resto.</p><p>${F.has('checklist_ok') ? 'Tu checklist ya dice que sin examen no se empieza.' : ''} Escuchas lo que te dice cada persona.</p>`,
    type: 'calls',
    calls: [
      ['Mabel Zúñiga · Salud Ocupacional', 'Habla rápido, entre pacientes', '«40 cupos hasta el sábado. Puedo abrir 10 más el martes temprano. ¿A quién pongo primero?»'],
      ['Dr. Linares', 'Llama en altavoz desde su auto', '«Que les hagan el examen después. Que entren el lunes y en la semana se lo toman.»'],
      ['Marleny Ccama · Camaná', 'Contesta desde el bus', '«¿El examen es el sábado? Llego a las 9 si salgo a las 4 de la mañana.»'],
    ],
    prompt: '¿Cómo organizas los exámenes?',
    choices: [
      { id: 'a', label: 'Primero los 25 del lunes y los 15 primeros del miércoles; los 18 restantes, el martes y la semana siguiente. A Linares le explicas que sin examen no se entra. A Marleny le das el último turno del sábado.',
        res: { q: 'buena', fx: { cumplimiento: 5, tiempo: 2, personas: 3 }, flags: ['emo_priorizado'], cartera: { emo: '40 programados; 18 para el martes y la semana siguiente' },
          out: 'Mabel respira: «Así sí». Linares gruñe, pero acepta: «Que no se atrase nadie». Marleny tendrá su examen a las 11 del sábado.',
          pro: { ok: 'Priorizas por fecha de ingreso y no cedes en lo que protege a la persona y a los pacientes.', info: 'Confirma a cada persona su cita por escrito.' },
          kusi: ['celebra', '¡Cupos con criterio!'] } },
      { id: 'b', label: 'Hacerle caso a Linares: que entren el lunes y se lo tomen en la semana.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, tiempo: 3 },
          out: 'El lunes, 25 personas entrarán a un piso con pacientes sin examen de ingreso. Si algo pasa, la pregunta será quién lo permitió.',
          pro: { ok: 'Nadie se atrasa.', risk: 'Saltarse el examen de ingreso en salud pone en riesgo a trabajadoras y pacientes.' },
          kusi: ['indignado', '¡Sin examen, no!'] } },
      { id: 'c', label: 'Por orden alfabético: es lo más justo.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, tiempo: -3 },
          out: 'El orden alfabético deja a seis personas del lunes sin examen. Hay que mover todo otra vez.',
          pro: { ok: 'Parece justo.', risk: 'Justo es priorizar por la fecha de ingreso, no por la letra.' },
          kusi: ['pensando', 'Justo no es lo mismo que alfabético.'] } },
    ],
    rules: [[LEY, 'Ley 29783, art. 49 d), y Reglamento, art. 101: exámenes a cargo del empleador; nunca los paga el trabajador.']],
    mirada: { ve: 'Linares tiene un problema real: abrir el piso a tiempo. Pero el examen de ingreso protege a la trabajadora y a los pacientes. La salida no es saltárselo: es ordenar los cupos según quién entra primero.', visual: { tipo: 'linea', titulo: 'Exámenes e ingresos', hitos: [['Viernes y sábado', '40 exámenes'], ['Lunes', 'Entran 25'], ['Martes', '10 exámenes más'], ['Miércoles', 'Entran 20'], ['Semana 3', 'El resto']] } },
  },
  {
    id: 'i3', t: '11:30', ch: 'whatsapp', who: 'angel', titulo: 'La oferta de Ángel', banner: 'assets/foto2/celebra-tablet.webp', show: ['personas', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>${F.has('angel_pregunta') ? 'Sor Elena lo quiere en el primer grupo.' : 'Enfermería decidió darle una oportunidad en el tercer grupo, junto a una técnica antigua.'} Te toca comunicarle la oferta a Ángel, que no ha soltado el celular desde ayer.</p><p><mark class="clave">Arma el mensaje</mark>. El correo formal sale después, con el documento.</p>`,
    type: 'compose', enviaA: 'angel', para: 'Para: Ángel Mamani', boton: 'Enviar',
    prompt: 'Arma la oferta eligiendo una frase de cada parte.',
    slots: [
      { id: 'noticia', t: 'La noticia', ops: [
        { id: 'n1', t: 'Ángel, Enfermería te eligió para el piso nuevo de hospitalización. ¡Felicitaciones!', ok: true, por: 'Claro y cálido.' },
        { id: 'n2', t: 'Ya estás, felicitaciones 🎉🎉🎉', ok: null, por: 'Alegre, pero sin decir a qué.' },
      ] },
      { id: 'cond', t: 'Las condiciones', ops: [
        { id: 'c1', t: 'Te llega hoy por correo la oferta con turno rotativo de 12 horas, fecha de ingreso, remuneración y tipo de contrato. Léela con calma antes de aceptar.', ok: true, por: 'Sabrá a qué dice que sí.' },
        { id: 'c2', t: 'Los detalles te los dicen el primer día.', ok: false, por: 'Nadie debería aceptar sin saber las condiciones.' },
      ] },
      { id: 'paso', t: 'El siguiente paso', ops: [
        { id: 'p1', t: 'Tu examen médico de ingreso es el sábado a las 8 en Salud Ocupacional, sin costo para ti. Lleva tu DNI.', ok: true, por: 'Fecha, lugar, qué llevar y sin costo.' },
        { id: 'p2', t: 'Tienes que sacar tu examen médico en una clínica particular y traer la boleta.', ok: false, por: 'El costo del examen es del empleador.' },
      ] },
    ],
    res: sel => {
      const mal = sel.cond === 'c2' || sel.paso === 'p2', buenas = ['n1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, cumplimiento: sel.paso === 'p2' ? -6 : 3 }, rel: { angel: 1 }, flags: [mal ? 'oferta_vaga' : 'oferta_clara'],
        cartera: { ofertas: mal ? 'Oferta de Ángel incompleta' : 'Oferta de Ángel clara y por escrito' },
        out: q === 'buena' ? 'Ángel manda un audio de un minuto que no se entiende porque se ríe y llora a la vez. Al final dice «acepto».' : mal ? 'Ángel acepta feliz, sin saber turno ni sueldo. A las 12:30 empiezan sus preguntas.' : 'Ángel acepta. El correo con las condiciones tendrá que hacer el resto.',
        pro: { ok: 'Noticia, condiciones por escrito y siguiente paso claro.', risk: 'Una oferta sin condiciones genera desconfianza en la primera boleta.', info: 'Pide que confirme por escrito que leyó la oferta.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'preocupado' : 'animo', q === 'buena' ? '¡Un sí informado!' : mal ? 'Sin condiciones no hay buen sí.' : 'Casi completo.'],
      };
    },
    rules: [[LEY, 'Ley 29783, art. 49 d): el examen médico ocupacional lo paga el empleador.'], [BP, 'Una oferta dice puesto, turno, fecha, remuneración y tipo de contrato.']],
    mirada: { ve: 'La alegría de Ángel es real, y por eso mismo merece saber exactamente a qué dice que sí. Una oferta clara es el primer acto de respeto del empleador.' },
  },
  {
    id: 'i4', t: '13:30', ch: 'presencial', who: 'ruth', titulo: 'Treinta días', banner: 'assets/foto/acuerdo.webp', lugar: 'Sala pequeña de Selección', show: ['cumplimiento', 'personas', 'tiempo'],
    body: (n, F) => `<p>${F.has('ruth_descartada') ? 'Sor Elena revisó las referencias con Milena y devolvió a Ruth a la lista: «Una frase sin hechos no decide». Ruth viene a hablar de su fecha de ingreso.' : 'Ruth vino a hablar de su fecha de ingreso.'} Presentó su renuncia hoy en la clínica donde trabaja ahora y le piden los 30 días de preaviso.</p><p>Linares quiere 60 el lunes. <mark class="clave">¿Qué le dices?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Que cumpla su preaviso o pida a su empleador que lo exonere; la clínica coordina su ingreso en el último grupo y lo pone por escrito en su oferta.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 4, tiempo: -1 }, rel: { ruth: 1 }, flags: ['preaviso_respetado'],
          out: 'Ruth respira. «Le voy a pedir a mi jefa que me exonere de una parte. Si no, entro en un mes.» Anotas su fecha condicional en el checklist.',
          pro: { ok: 'Respetas la ley y a la persona, y ajustas la planificación.', risk: 'Por un tiempo serán 59 en el piso.', info: 'Un buen ingreso empieza con una buena salida del trabajo anterior.' },
          kusi: ['animo', 'Irse bien también importa.'] } },
      { id: 'b', label: 'Que renuncie sin cumplir el preaviso: la necesitan el lunes y «nadie hace eso».',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, personas: -2 }, rel: { ruth: -1 },
          out: 'Ruth te mira como el martes, con los brazos cruzados. «Ya me fui mal de un lugar una vez. No quiero repetirlo.»',
          pro: { ok: 'Llega antes.', risk: 'Le pides incumplir una obligación legal y la pones en un problema con su empleador actual.' },
          kusi: ['preocupado', 'No se le pide eso a nadie.'] } },
    ],
    rules: [[LEY, 'D.S. 003-97-TR, art. 18: la renuncia se avisa por escrito con 30 días de anticipación; el empleador puede exonerar el plazo.']],
    mirada: { ve: 'Pedirle a alguien que se vaya mal de su trabajo para llegar antes al tuyo dice mucho de cómo la tratarás después. Esperarla es una forma de contratar bien.', visual: { tipo: 'balanza', a: { t: 'Que se vaya ya', items: ['Llega el lunes', 'Incumple su preaviso', 'Empieza con un conflicto'] }, b: { t: 'Respetar el preaviso', items: ['Llega después', 'Se va en regla', 'Empieza tranquila'] } } },
  },
  {
    id: 'i5', t: '16:00', ch: 'sistema', who: null, titulo: 'Las dos que faltan', banner: 'assets/esc/planilla.webp', lugar: 'Banco de reserva', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: (n, F) => `<p>Las dos que no contestaban escribieron: una aceptó otra oferta y la otra se queda en Juliaca por su mamá. ${F.has('preaviso_respetado') ? 'Con Ruth entrando después,' : 'Así,'} necesitas <mark class="clave">tres personas de la reserva</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige a las tres personas de la reserva que vas a llamar.', boton: 'Llamar', resumen: 'Llamaste a',
    cols: ['Persona', 'Lo que sabes'],
    rows: [
      { id: 'mar', cells: ['Marleny Ccama', 'Siguiente en puntaje; su jefa dice «nunca deja solo a un paciente»'] },
      { id: 'yes', cells: ['Yesenia Apaza', 'Práctica de signos vitales destacada; recomendada en entrevista'] },
      { id: 'ofe', cells: ['Ofelia Quispe', 'Caso clínico impecable; 20 años de experiencia'] },
      { id: 'kev', cells: ['Kevin Arce', 'Faltó a la prueba sin aviso'] },
      { id: 'sin', cells: ['Postulante sin consentimiento para el banco', 'Su CV debía eliminarse'] },
      { id: 'prima', cells: ['La prima de la Lic. Rosario', 'Puntaje bajo; Rosario pregunta por ella'] },
    ],
    score: { mar: 3, yes: 3, ofe: 3, kev: -3, sin: -4, prima: -3 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, cumplimiento: picks.includes('sin') ? -5 : 2, etica: picks.includes('prima') ? -4 : 1 }, flags: q === 'buena' ? ['reserva_llamada'] : [],
        cartera: { reserva: q === 'buena' ? 'Tres de la reserva aceptan' : 'Reserva usada sin criterio', tecnicas: q === 'buena' ? '60 nombres' : 'Lista incompleta o discutible' },
        out: q === 'buena' ? 'Las tres aceptan antes de las 5. Ofelia dice: «Pensé que ya no me llamaban». A las 5:30, la lista tiene 60 nombres.' : 'La lista se completa, pero alguien entró por razones que no resisten una pregunta.',
        pro: { ok: 'La reserva se usa en el orden de su mérito, sin favores.', risk: 'Un favor a una supervisora lo terminan pagando las demás postulantes.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Sesenta!' : 'Ese nombre no debía estar.'],
      };
    },
    mirada: { ve: 'La reserva existe para esto. Y se usa igual que la selección: por mérito, con datos que se pueden usar y sin favores. Las tres que entran hoy son, curiosamente, las que alguien quiso dejar fuera en algún momento.' },
  },
  {
    id: 'i6', t: '18:10', ch: 'correo', who: null, titulo: 'Antes del viernes', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Milena Cáceres', to: 'Asistente de Selección', asunto: 'Mañana es viernes' },
    body: (n, F) => `<p>${F.has('reserva_llamada') ? 'Llegamos a 60. No sé cómo, pero llegamos.' : 'Casi llegamos.'} Mañana armamos el informe de las dos semanas para Linares y Sor Elena.</p><p><mark class="clave">¿Qué crees que tiene que ir en el informe?</mark></p><p>Milena</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Números, qué funcionó, qué no, y lo que falta para el lunes.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { milena: 1 },
          responde: 'Números (postulaciones, filtros, entrevistas, seleccionadas), lo que funcionó (aviso honesto, ajustes, notas con hechos), lo que no (exámenes con cupos justos) y lo que falta para el lunes.',
          out: 'Milena: «Perfecto. Y prepárate: Linares quiere presentarlo a la junta».', kusi: ['feliz', 'Mañana, el balance.'] } },
      { id: 'b', label: 'Solo que llegamos a 60.',
        res: { q: 'aceptable', fx: { confianza: 1 }, responde: 'Que llegamos a 60 💪', out: 'Milena: «Eso lo va a querer leer Linares. Sor Elena va a querer saber cómo».', kusi: ['pensando', 'El cómo también importa.'] } },
    ],
    mirada: { ve: 'Un informe que solo dice «llegamos» no enseña nada. Uno que dice cómo, y qué falló, hace que la próxima convocatoria empiece mejor.' },
  },
];
