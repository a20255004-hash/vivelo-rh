// Asistente de Capacitación · Capítulo 3 · «El facilitador» · Semana 1, miércoles.
// Hilo de las dos semanas: la «escuela de cajeros» de Boticas del Norte, 120 personas nuevas en seis grupos, en Trujillo.
// Normas citadas:
// - Reglamento de Establecimientos Farmacéuticos (D.S. 014-2011-SA): las boticas funcionan bajo la dirección técnica de un
//   químico farmacéutico, que permanece durante el horario de funcionamiento (art. 41); la dispensación incluye la validación
//   de la receta (art. 56); el personal técnico en farmacia no realiza actos de dispensación de productos de venta bajo receta
//   ni ofrece alternativas al medicamento (art. 43, modificado por el D.S. 015-2025-SA).
//   https://cdn.www.gob.pe/uploads/document/file/5300941/4754645-comunicado-n-03-para-directores-tecnicos.pdf
//   https://busquedas.elperuano.pe/dispositivo/NL/2429720-3
//   Se cita como principio: si el técnico no puede, menos aún el cajero; las consultas de salud se derivan al químico farmacéutico.
// - TUO de la Ley de Jornada de Trabajo (D.S. 007-2002-TR), art. 9: el trabajo en sobretiempo es voluntario.
//   https://lpderecho.pe/tuo-ley-jornada-trabajo-horario-trabajo-sobretiempo-decreto-supremo-007-2002-tr
// - Reglamento de la Ley 29783, art. 27-A y 28 (capítulo 1).
// Empresa, personas y contenidos son ficticios.

export const CAP = {
  n: 3, titulo: 'El facilitador', dia: 'Semana 1, miércoles', foto: 'assets/foto/taller.webp',
  lugar: 'Boticas del Norte · Aula de respaldo, Av. Húsares de Junín',
  inicio: '07:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Miércoles. Los grupos 1 y 2 hacen hoy su día virtual; los grupos 3 y 4 empiezan con Jorge. A las 7:30 Jorge llega con su mandil blanco impecable, un USB nuevo y una sonrisa que te pone nerviosa.', boton: 'Saludar a Jorge',
  kusi: 'Un experto apasionado es un tesoro… si va en la misma dirección que la escuela.',
  lead: 'Revisaste las diapositivas nuevas de Jorge, rehiciste la agenda con él, cuidaste la jornada de 40 personas, entendiste sus razones y dejaste los acuerdos por escrito.',
  reflexion: '¿Cuándo un experto que «enseña de más» ayuda, y cuándo pone en riesgo lo que la gente necesita aprender?',
  siguiente: { n: 4, titulo: 'La asistencia', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'agenda', p: 'Agenda del día 1 (grupos 3 y 4)', j: 'Jorge y tú', d: 0, e: 'Cambiada sin aviso' },
  { id: 'virtual', p: 'Día virtual de los grupos 1 y 2', j: 'Fiorella · Sistemas', d: 0, e: 'En curso' },
  { id: 'asistencia', p: 'Asistencia de los grupos 3 y 4', j: 'Tú', d: 0, e: 'Por registrar' },
  { id: 'materiales', p: 'Manuales impresos', j: 'Logística', d: 0, e: 'Llegan hoy' },
  { id: 'facilitador', p: 'Acuerdos con el facilitador', j: 'Karen · Capacitación', d: 0, e: 'De palabra' },
];

export const FUTURO = {
  jorge_acuerdo: ['Rehiciste la agenda con Jorge antes de empezar.', 'Jorge te verá como colega, no como controladora.'],
  jorge_libre: ['Jorge dictó a su manera sin que nadie revisara antes.', 'El examen del viernes lo va a notar.'],
  slides_corregidas: ['Sacaste de las diapositivas que el cajero recomiende medicamentos.', 'Lo verás funcionar en el local, en el capítulo 8.'],
  recomendar_quedo: ['En las diapositivas quedó que el cajero puede sugerir medicamentos.', 'En el capítulo 8 verás a una cajera haciéndolo.'],
  caja_recortada: ['El módulo de caja perdió hora y media frente a la farmacología.', 'El examen de caja del viernes lo sentirá.'],
  sin_sobretiempo: ['Cortaste a las 4:30 y moviste lo pendiente al día 3.', 'Nadie perdió su combi ni su guardería.'],
  sobretiempo_forzado: ['Los grupos 3 y 4 se quedaron hasta las 6 sin que nadie lo autorizara.', 'Alguien lo mencionará en la encuesta del capítulo 6.'],
  acuerdo_escrito: ['Los acuerdos con Jorge están por escrito.', 'Te servirán cuando Karen pregunte por qué cambió el examen.'],
};

export const CHATS = {
  area: { n: 'Capacitación · Boticas del Norte', sub: 'Karen, Fiorella y tú', c: '#C05621' },
  karen: { n: 'Karen Vásquez', sub: 'Analista de Capacitación', who: 'karen' },
  jorge: { n: 'Q. F. Jorge Lázaro', sub: 'Facilitador', who: 'facilitador' },
  grupo1: { n: 'Escuela de cajeros · Grupos 1 y 2', sub: '40 participantes', c: '#2F6B3F' },
  grupo3: { n: 'Escuela de cajeros · Grupos 3 y 4', sub: '40 participantes', c: '#2C7A7B' },
  yanet: { n: 'Yanet Chávez', sub: 'Participante · Grupo 1', c: '#B83280' },
};

export const WSP = [
  { chat: 'area', t: '07:40', de: 'Fiorella', txt: 'Módulo virtual abierto para grupos 1 y 2. Si alguien no entra, que me escriba con nombre y local, nada más 👍', si: 'guia_clara' },
  { chat: 'area', t: '07:40', de: 'Karen', txt: 'Ojo: alguien mandó la foto de su DNI al grupo por la guía. Pidan que la borren y corrijamos la guía hoy 🙏', si: 'datos_grupo' },
  { chat: 'grupo1', t: '09:20', de: 'Kevin', txt: 'Con la transcripción entiendo todo. Gracias 🙌 Ya voy en el módulo 3.', si: 'ajuste_kevin' },
  { chat: 'grupo1', t: '10:05', de: 'Daniela', txt: '¡Entré! Ya voy en boletas electrónicas. En Venezuela era otro sistema, esto me gusta 😄', si: 'ce_resuelto' },
  { chat: 'grupo3', t: '16:35', de: 'Maritza', txt: 'Señorita, ¿hoy salimos 4:30? Tengo que recoger a mi hijo del nido a las 5 😬' },
  { chat: 'yanet', t: '17:20', de: 'Yanet', txt: 'Terminé los 5 módulos 💪 La parte del arqueo no la entendí del todo, ¿el viernes lo repasan?' },
  { chat: 'jorge', t: '18:30', de: 'Jorge', txt: 'Recibido, colega. Tienes razón en lo de recomendar. Pero los cuentos de mis 25 años no me los quitas 😄', si: 'acuerdo_escrito' },
];

export const CORREOS = [
  { t: '07:20', de: 'Karen Vásquez', para: 'Asistente de Capacitación', asunto: 'Jorge', html: '<p>Hoy no llego hasta las 2: comité de Operaciones. Jorge es el mejor químico farmacéutico que tenemos y los participantes lo adoran. Pero a veces se entusiasma. El examen del viernes sale del temario que le aprobamos, así que cuídame la agenda.</p><p>Karen</p>' },
  { t: '12:15', de: 'Logística · Boticas del Norte', para: 'Capacitación', asunto: 'Manuales impresos', html: '<p>Llegaron 120 manuales del cajero. Se recogen en el almacén. La página 14 salió borrosa en 30 ejemplares.</p>' },
];

export const QUIZ = [
  { q: 'Un cliente le pide al cajero «algo para la tos». ¿Qué debe hacer el cajero?', ops: ['Recomendar el jarabe más vendido', 'Derivarlo al químico farmacéutico', 'Venderle lo que pida', 'Buscar en internet'], ok: 1, por: 'En una botica, la dispensación y la orientación sobre medicamentos están a cargo del químico farmacéutico (Reglamento de Establecimientos Farmacéuticos, D.S. 014-2011-SA).' },
  { q: 'El facilitador quiere extender la clase hasta las 6 p. m. para «terminar el tema». ¿Qué dice la norma?', ops: ['Que todos deben quedarse', 'Que el sobretiempo es voluntario', 'Que se puede si es capacitación', 'Que se descuenta'], ok: 1, por: 'El TUO de la Ley de Jornada (D.S. 007-2002-TR), art. 9: el trabajo en sobretiempo es voluntario.' },
  { q: 'El facilitador cambió el contenido sin avisar. ¿Qué es lo más útil?', ops: ['Cancelar la clase', 'Revisar juntos la agenda antes de empezar y acordar qué entra y qué no', 'Dejarlo: él es el experto', 'Quejarse con gerencia'], ok: 1, por: 'Se respeta su saber y se protege lo que el examen y el puesto necesitan.' },
  { q: '¿Por qué conviene dejar por escrito los acuerdos con un facilitador?', ops: ['Para castigarlo', 'Para que todos sepan qué se dicta y por qué cambió algo', 'No conviene', 'Por costumbre'], ok: 1, por: 'Un acuerdo escrito evita malentendidos cuando se revisan los resultados.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '07:35', ch: 'presencial', who: 'facilitador', titulo: 'El USB nuevo', banner: 'assets/foto/mentora.webp', show: ['confianza', 'calidad', 'tiempo'],
    body: () => `<p>Jorge conecta su USB al proyector. La primera diapositiva dice «Farmacología práctica para cajeros» y tiene la foto de un antigripal. «Anoche no dormí armando esto, colega. <mark class="clave">El cajero es la primera cara de la botica</mark>: tiene que saber qué se vende para qué.»</p><p>Los grupos 3 y 4 empiezan en 55 minutos. En la agenda aprobada había hora y media de caja que ya no ves.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedirle diez minutos para mirar juntos la agenda aprobada y ver qué de lo nuevo entra sin sacar caja.',
        res: { q: 'buena', fx: { confianza: 2, calidad: 3, tiempo: -1 }, rel: { facilitador: 1 }, flags: ['jorge_acuerdo'], cartera: { agenda: 'Revisada con Jorge antes de empezar' },
          out: 'Jorge mira la agenda, se rasca la cabeza. «Tienes razón: la caja la había pasado al final y no iba a llegar.» Se sienta contigo con su café de máquina.',
          pro: { ok: 'Lo tratas como experto y cuidas el temario.', info: 'Pregúntale qué le preocupa del contenido aprobado: algo lo motivó a cambiarlo.' },
          kusi: ['feliz', 'Diez minutos que salvan el día.'] } },
      { id: 'b', label: 'Dejarlo empezar: es el experto, y al mediodía le comentas lo de caja.',
        res: { q: 'aceptable', fx: { tiempo: 1, calidad: -2 }, flags: ['jorge_libre'], cartera: { agenda: 'Jorge dicta su versión' },
          out: 'Jorge arranca con pasión. A las 12, la caja todavía no aparece y él va por los antibióticos.',
          pro: { ok: 'No lo incomodas.', risk: 'Lo que no se revisa a tiempo ya no se puede corregir a mitad del día.' },
          kusi: ['pensando', 'Al mediodía ya será tarde…'] } },
      { id: 'c', label: 'Llamar a Karen al comité para que ella le diga que no puede cambiar nada.',
        res: { q: 'riesgosa', fx: { confianza: -3, tiempo: -1 }, rel: { facilitador: -1, karen: -1 },
          out: 'Karen sale del comité molesta y le pide a Jorge «volver a lo aprobado». Jorge dicta el día entero con cara larga y sin una sola historia.',
          pro: { ok: 'Se aplica el temario.', risk: 'Escalar sin intentar conversar te quita autoridad con el facilitador y saca a tu jefa de una reunión clave.' },
          kusi: ['preocupado', '¿No había una conversación antes de eso?'] } },
    ],
    rules: [[BP, 'Revisa la agenda con el facilitador antes de empezar, no a mitad del día.']],
    mirada: {
      ve: 'Jorge no cambió el contenido por capricho: vio algo que le preocupa. Coordinar con expertos es tomar en serio su saber y, a la vez, recordar para qué es la capacitación: que el cajero cobre bien y sepa a quién derivar.',
      visual: { tipo: 'balanza', a: { t: 'Lo que Jorge quiere enseñar', items: ['Farmacología práctica', 'Sus 25 años de experiencia'] }, b: { t: 'Lo que el cajero necesita', items: ['Caja y arqueo', 'Boletas', 'Derivar al químico farmacéutico'] } },
    },
  },
  {
    id: 'f2', t: '07:50', ch: 'documento', who: null, titulo: 'Las diapositivas nuevas', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>${F.has('jorge_libre') ? 'Mientras Jorge dicta, abres sus diapositivas en tu laptop.' : 'Jorge te pasa la laptop: «Revisa con ojo crítico, para eso estás».'} Hay ocho puntos clave. <mark class="clave">Algunos podrían meter en problemas a un cajero en su primer día</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que incumple la norma o lo que no debería ir en la capacitación de un cajero.',
    doc: { t: 'Farmacología práctica para cajeros', sub: 'Q. F. Jorge Lázaro · versión del martes en la noche' },
    lines: [
      { id: 'tos', t: 'Si el cliente pide «algo para la tos», el cajero puede sugerir el jarabe más vendido.', bad: LEY, why: 'Orientar sobre medicamentos es parte de la dispensación, a cargo del químico farmacéutico. El cajero deriva.' },
      { id: 'receta', t: 'Si el Q. F. está ocupado, el cajero puede cobrar un antibiótico con receta para no hacer esperar.', bad: LEY, why: 'La validación de la receta es parte de la dispensación. Ni siquiera el personal técnico puede dispensar productos de venta bajo receta.' },
      { id: 'derivar', t: 'Ante cualquier consulta de salud: «Permítame, el químico farmacéutico lo atiende».' },
      { id: 'arqueo', t: 'Caja y arqueo: se verán en el día virtual.', bad: BP, why: 'El arqueo no está en el módulo virtual: se queda sin enseñar. Y es lo que más falla en los locales nuevos.' },
      { id: 'cadena', t: 'Productos que requieren cadena de frío: el cajero no los deja sobre el mostrador.' },
      { id: 'historias', t: 'Historias de mis 25 años en boticas (45 minutos).', duda: 'Pueden enganchar al grupo. El tema es cuánto tiempo le quitan a caja.' },
      { id: 'meta', t: 'Venta sugerida: ofrecer vitaminas a cada cliente para llegar a la meta del día.', bad: BP, why: 'Ofrecer productos de salud por meta, sin criterio del químico farmacéutico, confunde el rol del cajero.' },
      { id: 'trato', t: 'Saludar, mirar a los ojos y entregar el vuelto contado en la mano.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Corriges el arqueo, pero algo sobre medicamentos se queda en las diapositivas. Treinta y nueve personas lo anotan en su cuaderno.' : `Marcas ${hitsLey} puntos que la norma no permite. Jorge los lee dos veces: «Uy. Lo escribí pensando en un técnico… y ni a él le toca. Tienes razón».`,
      flags: missLey ? ['recomendar_quedo', 'caja_recortada'] : ['slides_corregidas'], rel: { facilitador: missLey ? 0 : 1 },
      cartera: { agenda: missLey ? 'Diapositivas con riesgo' : 'Diapositivas corregidas: el cajero deriva' },
      pro: { ok: 'Saber qué puede y qué no puede hacer cada puesto en una botica protege al cajero, al cliente y a la empresa.', risk: 'Un cajero que recomienda o cobra recetas sin el químico farmacéutico pone en riesgo a un paciente.', info: 'Pídele a Jorge que convierta su experiencia en ejemplos de cuándo derivar.' },
      kusi: missLey ? ['preocupado', 'Eso sobre medicamentos era serio…'] : ['celebra', '¡Ojo de químico y de RR.HH. a la vez!'],
    }),
    rules: [[LEY, 'La dispensación, incluida la validación de la receta, está a cargo del químico farmacéutico (D.S. 014-2011-SA).'], [LEY, 'El personal técnico no dispensa productos de venta bajo receta ni ofrece alternativas al medicamento (D.S. 014-2011-SA, art. 43, modificado por el D.S. 015-2025-SA).']],
    mirada: {
      ve: 'En una botica cada puesto tiene un límite que protege al paciente. Un curso para cajeros que les enseña a recomendar medicamentos, aunque venga de un experto, les enseña a cruzar ese límite. Lo correcto es enseñarles a derivar bien.',
      normas: [{ ley: 'Reglamento de Establecimientos Farmacéuticos (D.S. 014-2011-SA)', dice: 'La botica funciona bajo la dirección técnica de un químico farmacéutico; la dispensación incluye validar la receta, y el personal técnico no dispensa productos de venta bajo receta.', practica: 'El cajero cobra, orienta dónde ir y deriva toda consulta de salud al químico farmacéutico.' }],
      visual: { tipo: 'flujo', titulo: 'Quién hace qué en el mostrador', pasos: ['Cliente consulta', 'Cajero deriva', 'Químico farmacéutico orienta y dispensa', 'Cajero cobra y entrega boleta'], aqui: 1 },
    },
  },
  {
    id: 'f3', t: '08:10', ch: 'documento', who: null, titulo: 'La agenda rehecha', banner: 'assets/foto/plano-equipo.webp', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>Quedan veinte minutos. Con Jorge, o sin él, hay que <mark class="clave">rehacer el orden del día 1</mark> para que entre lo que importa.</p>`,
    type: 'secuencia', prompt: 'Ordena los bloques del día 1. Usa las flechas.', boton: 'Guardar la agenda',
    items: [
      { id: 'sst', t: 'Inducción de seguridad y salud (presencial)', por: 'Va primero: nadie toca una caja sin ella.' },
      { id: 'rol', t: 'El rol del cajero en la botica: qué hace y qué deriva', por: 'Marca el límite antes de las técnicas.' },
      { id: 'caja', t: 'Caja: apertura, cobro y vuelto', por: 'Lo central del puesto.' },
      { id: 'boleta', t: 'Boleta electrónica y medios de pago', por: 'Sigue al cobro.' },
      { id: 'historia', t: 'Casos de Jorge: «cuándo derivé y por qué»', por: 'Su experiencia, al servicio del límite.' },
      { id: 'arqueo', t: 'Arqueo de cierre en caja de práctica', por: 'Cierra el día con la práctica más difícil.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: q === 'riesgosa' ? -2 : 2 },
        flags: q === 'riesgosa' ? ['caja_recortada'] : [], cartera: { agenda: q === 'riesgosa' ? 'Agenda desordenada' : 'Agenda rehecha: SST, rol, caja, boleta, casos y arqueo' },
        out: q === 'buena' ? 'Jorge copia la agenda en la pizarra con plumón azul. «Mis historias al final de la mañana, como premio», dice, y le gusta la idea.' : 'La agenda sale, pero el arqueo vuelve a quedar en riesgo.',
        pro: { ok: 'Primero lo obligatorio, luego el límite del puesto, luego la técnica.', risk: 'Si el arqueo queda al final de un día que se alarga, se cae.', info: 'Pon la hora junto a cada bloque.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Agenda con sentido!' : 'Revisa qué va primero.'],
      };
    },
    mirada: {
      ve: 'El orden de una agenda también enseña: lo que va primero se entiende como lo más importante. Poner la seguridad y el límite del rol antes de la técnica es decirle al cajero qué no debe olvidar nunca.',
      visual: { tipo: 'linea', titulo: 'El día 1 rehecho', hitos: [['8:30', 'Seguridad'], ['10:00', 'Rol del cajero'], ['10:30', 'Caja'], ['11:45', 'Casos de Jorge'], ['14:00', 'Boleta'], ['15:15', 'Arqueo']] },
    },
  },
  {
    id: 'f4', t: '15:50', ch: 'presencial', who: 'facilitador', titulo: '«Media horita más»', banner: 'assets/foto2/tension.webp', show: ['personas', 'cumplimiento', 'confianza'],
    body: () => `<p>A las 3:50 Jorge va recién por la boleta electrónica. Las preguntas no paran. «Colega, <mark class="clave">quedémonos hasta las seis</mark> y terminamos el arqueo. Mira cómo están de motivados.»</p><p>En la tercera fila, Maritza mira el reloj de su celular cada dos minutos.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Cortar a las 4:30 y mover el arqueo al inicio del día 3, en la caja de práctica.',
        res: { q: 'buena', fx: { personas: 4, cumplimiento: 4, confianza: -1 }, rel: { facilitador: -1 }, flags: ['sin_sobretiempo'], cartera: { agenda: 'Arqueo movido al día 3' },
          out: 'Jorge suspira, pero acepta: «El arqueo se aprende mejor con la caja delante». Maritza sale corriendo y llega al nido a las 4:58.',
          pro: { ok: 'Respetas la jornada y no pierdes el contenido.', risk: 'El día 3 queda más cargado.', info: 'Avísale hoy a Karen del cambio.' },
          kusi: ['animo', 'La jornada también se cuida en el aula.'] } },
      { id: 'b', label: 'Preguntar al grupo quién puede quedarse voluntariamente, avisar que es sobretiempo y pedir la autorización a Karen.',
        res: { q: 'aceptable', fx: { personas: 1, cumplimiento: 2, tiempo: -2 }, cartera: { agenda: 'Arqueo para 12 voluntarios' },
          out: 'Karen autoriza por WhatsApp. Se quedan doce. Los otros 28 verán el arqueo recién el viernes, con desventaja.',
          pro: { ok: 'Es voluntario y está autorizado.', risk: 'La mitad del grupo aprende el arqueo y la otra mitad no, antes del mismo examen.' },
          kusi: ['pensando', 'Voluntario, sí. ¿Parejo para todos?'] } },
      { id: 'c', label: 'Quedarse hasta las seis: están motivados y es por su bien.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -5 }, flags: ['sobretiempo_forzado'],
          out: 'Nadie se atreve a irse en su tercer día de trabajo. Maritza llama a su vecina para que recoja a su hijo. A las seis, la mitad ya no escucha.',
          pro: { ok: 'Terminas el tema.', risk: 'El sobretiempo es voluntario; un «quedémonos» del jefe en el tercer día no lo es.' },
          kusi: ['triste', '«Por su bien» no lo decide uno solo.'] } },
    ],
    rules: [[LEY, 'El trabajo en sobretiempo es voluntario, en su otorgamiento y en su prestación (D.S. 007-2002-TR, art. 9).'], [LEY, 'La capacitación se realiza dentro de la jornada (Reglamento de la Ley 29783, art. 28).']],
    mirada: {
      ve: 'En su tercer día de trabajo, nadie dice «no» a quedarse. Por eso «voluntario» hay que cuidarlo más con la gente nueva. Mover un tema a otro día suele ser mejor pedagogía que alargar uno que ya nadie escucha.',
      visual: { tipo: 'balanza', a: { t: 'Hasta las seis', items: ['Tema terminado', 'Gente cansada', 'Un nido sin recoger'] }, b: { t: 'Arqueo al día 3', items: ['Jornada respetada', 'Práctica con caja', 'Todos parejos'] } },
    },
  },
  {
    id: 'f5', t: '16:45', ch: 'presencial', who: 'facilitador', titulo: 'Un café con Jorge', banner: 'assets/foto/cafe.webp', lugar: 'Cafetería de la esquina', show: ['confianza', 'personas'],
    body: () => `<p>Jorge te invita un café pasado y un alfajor de King Kong partido en dos. Está cansado y un poco herido. «Colega, yo sé que me paso. Pero tú no has visto lo que yo he visto.» <mark class="clave">Es un buen momento para entenderlo</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Jorge.',
    opts: [
      { id: 'visto', label: '¿Qué has visto que te preocupa tanto?', info: '«Una cajera nueva, en el local de El Porvenir, le vendió a una señora un antiinflamatorio que no debía tomar con su pastilla de la presión. La señora terminó en emergencia. La cajera solo quería ayudar. Por eso quiero que sepan.»' },
      { id: 'horas', label: '¿Por qué te molesta cuando te recortan horas?', info: '«Porque siempre me recortan a mí. A la parte de caja nadie le quita minutos, pero a la de salud sí. Y luego se quejan de las cajeras que recomiendan.»' },
      { id: 'idea', label: '¿Cómo enseñarías a derivar, en vez de a recomendar?', info: '«Con casos. "Una señora pide algo para el dolor de cabeza y está embarazada: ¿qué haces?". Que practiquen la frase para llamarme. Eso sí lo puedo armar para el viernes.»' },
      { id: 'pago', label: '¿Cuánto te pagan por dictar?', info: 'Jorge se ríe, incómodo. «Lo mismo que si estuviera en mi local. No lo hago por eso.» La conversación se enfría un poco.' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('pago') ? -2 : 3, personas: picks.includes('visto') ? 2 : 0 }, rel: { facilitador: picks.includes('pago') ? -1 : 1 },
      flags: picks.includes('idea') ? ['casos_derivar'] : [],
      out: picks.includes('idea') ? 'Quedan en que Jorge armará cinco casos de «cuándo derivar» para el día 3. Se despide con un apretón de manos largo.' : 'Entiendes mejor a Jorge. Se va caminando hacia la Plaza de Armas con el mandil doblado bajo el brazo.',
      kusi: ['curioso', 'Detrás del entusiasmo había una historia.'],
    }),
    mirada: {
      ve: 'Muchos expertos «se pasan» porque vieron un error real. Entender esa razón permite convertir su preocupación en contenido útil: en lugar de enseñar a recomendar, enseñar a reconocer cuándo derivar.',
      visual: { tipo: 'cambio', titulo: 'De la preocupación al contenido', pares: [['«Que sepan qué vender»', '«Que sepan cuándo llamarme»'], ['Farmacología', 'Casos de derivación'], ['Más horas para salud', 'Casos dentro del día 3']] },
    },
  },
  {
    id: 'f6', t: '18:10', ch: 'whatsapp', who: null, titulo: 'Los acuerdos por escrito', banner: 'assets/foto2/acuerdo-manos.webp', show: ['calidad', 'confianza', 'cumplimiento'],
    body: () => `<p>Ya en la combi, con la radio a todo volumen tocando cumbia norteña, le escribes a Jorge para que lo conversado <mark class="clave">no dependa de la memoria de nadie</mark>.</p>`,
    type: 'compose', enviaA: 'jorge', para: 'Para: Q. F. Jorge Lázaro · Facilitador', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'grac', t: 'Apertura', ops: [
        { id: 'g1', t: 'Jorge, gracias por hoy: los grupos 3 y 4 salieron contentos y con la seguridad bien aprendida.', ok: true, por: 'Reconoces lo que salió bien.' },
        { id: 'g2', t: 'Jorge, te escribo porque hoy hubo varios problemas con tu clase.', ok: false, por: 'Empieza por el reproche.' },
      ] },
      { id: 'acu', t: 'Lo acordado', ops: [
        { id: 'a1', t: 'Te confirmo lo acordado: el cajero no recomienda medicamentos, deriva; el arqueo va al inicio del día 3; tus casos de derivación entran en el día 3.', ok: true, por: 'Tres acuerdos claros.' },
        { id: 'a2', t: 'Ya sabes lo que hablamos, ¿no? 😉', ok: false, por: 'Nadie sabrá qué se acordó.' },
      ] },
      { id: 'cop', t: 'A quién informas', ops: [
        { id: 'c1', t: 'Le paso este resumen a Karen para que el examen del viernes vaya en la misma línea.', ok: true, por: 'Transparente: Jorge sabe que Karen se enterará.' },
        { id: 'c2', t: 'Esto queda entre nosotros, no hace falta que Karen lo sepa.', ok: false, por: 'El examen depende de lo que se dictó. Karen debe saberlo.' },
      ] },
    ],
    res: sel => {
      const mal = sel.acu === 'a2' || sel.cop === 'c2', buenas = ['g1', 'a1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : mal ? -2 : 1 }, rel: { facilitador: q === 'buena' ? 1 : 0, karen: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['acuerdo_escrito'] : [], cartera: { facilitador: q === 'buena' ? 'Acuerdos con Jorge por escrito, con copia a Karen' : 'Acuerdos de palabra' },
        out: q === 'buena' ? 'Jorge responde con un audio de dos minutos que termina en risa. Karen te escribe: «Gracias por cuidarme a Jorge y la agenda».' : mal ? 'El viernes nadie recordará igual lo que se habló.' : 'Jorge lo lee. Queda claro, aunque empezó con mal pie.',
        pro: { ok: 'Reconocer, confirmar y transparentar: tres frases que evitan malentendidos.', risk: 'Lo que no está escrito se recuerda distinto cuando salen las notas.', info: 'Guarda el acuerdo en la carpeta del grupo.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Acuerdo con cariño y por escrito!' : 'Le faltó claridad.'],
      };
    },
    mirada: {
      ve: 'Con un facilitador externo o de otra área, el acuerdo escrito protege a los dos: él sabe qué se espera, tú puedes explicar por qué cambió algo si las notas salen raras.',
      visual: { tipo: 'mensaje', titulo: 'Tres acuerdos con Jorge', txt: 'El cajero no recomienda medicamentos: deriva. El arqueo va al inicio del día 3. Tus casos de derivación entran en el día 3.' },
    },
  },
];
