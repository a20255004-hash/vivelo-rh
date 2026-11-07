// Asistente de Capacitación · Capítulo 5 · «La evaluación» · Semana 1, viernes.
// Hilo de las dos semanas: la «escuela de cajeros» de Boticas del Norte, 120 personas nuevas en seis grupos, en Trujillo.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Reglamento de Establecimientos Farmacéuticos (D.S. 014-2011-SA): la dispensación y la orientación sobre medicamentos
//   están a cargo del químico farmacéutico (capítulo 3).
//   https://cdn.www.gob.pe/uploads/document/file/5300941/4754645-comunicado-n-03-para-directores-tecnicos.pdf
// - Ley 29733, Ley de Protección de Datos Personales: las notas de cada persona no se publican en un grupo.
// - Ley 29973, art. 50: ajustes razonables (capítulo 2).
//   https://cdn.www.gob.pe/uploads/document/file/5843154/5182571-rd-129-2024-munoz-loayza-henry-otorgamiento-y-aplicacion-de-ajustes-razonables.pdf
// Los niveles de evaluación (reacción, aprendizaje, aplicación, resultados) se presentan como buena práctica.
// Las notas, la nota mínima y las metas de Operaciones son ficticias.

export const CAP = {
  n: 5, titulo: 'La evaluación', dia: 'Semana 1, viernes', foto: 'assets/foto/revisa.webp',
  lugar: 'Boticas del Norte · Sede de capacitación, Av. España',
  inicio: '07:45', fin: '19:00', cierreHora: '18:45',
  apertura: 'Viernes. Los grupos 1 y 2 vuelven para su día 3: caja simulada y examen. Las dos cajas de práctica pitan con cada código de barras y alguien ya puso un billete de cien de juguete pegado con cinta en la pared.', boton: 'Imprimir el examen',
  kusi: 'Hoy se ve si aprendieron… o si enseñamos bien. ¡Que no es lo mismo!',
  lead: 'Revisaste el examen antes de aplicarlo, ordenaste el arqueo, buscaste por qué desaprobó la mitad, defendiste un reexamen honesto y diste las notas sin exponer a nadie.',
  reflexion: 'Si la mitad desaprueba, ¿qué dice eso de los participantes y qué dice de la capacitación?',
  siguiente: { n: 6, titulo: 'La encuesta', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'examen', p: 'Examen de caja (grupos 1 y 2)', j: 'Karen y Jorge', d: 0, e: 'Por aplicar' },
  { id: 'notas', p: 'Notas y análisis', j: 'Tú', d: 0, e: 'Pendiente' },
  { id: 'reexamen', p: 'Plan para quienes desaprueben', j: 'Karen · Capacitación', d: 0, e: 'No existe' },
  { id: 'grupo5', p: 'Convocatoria del grupo 5 (lunes)', j: 'Tú', d: 0, e: 'Con Brenda y Josué' },
  { id: 'informe', p: 'Informe de la semana para Operaciones', j: 'Karen', d: 0, e: 'Hoy, 6 p. m.' },
];

export const FUTURO = {
  examen_revisado: ['Sacaste del examen las preguntas tramposas y la que pedía recomendar medicamentos.', 'Las notas dirán lo que de verdad aprendieron.'],
  examen_tal_cual: ['El examen se aplicó con preguntas mal hechas.', 'Las notas mezclan lo que no saben con lo que no se entendió.'],
  arqueo_claro: ['La práctica de arqueo quedó en el orden correcto.', 'La usarás con los grupos 3 a 6.'],
  causa_examen: ['Viste que los desaprobados fallaron en arqueo, justo lo que no se enseñó bien.', 'La encuesta del lunes te dirá más.'],
  reexamen: ['Habrá refuerzo de arqueo y reexamen el jueves para los que desaprobaron.', 'Lo organizarás en el capítulo 9.'],
  nota_bajada: ['Bajaron la nota mínima para llegar a la meta.', 'En el capítulo 8 verás un faltante de caja.'],
  pase_directo: ['Los desaprobados empezaron en caja «con repaso en el local».', 'Nadie hará ese repaso. Capítulo 8.'],
  informe_eval: ['Tu informe separa lo que se aprendió de lo que faltó enseñar.', 'Karen lo usará para defender la escuela.'],
  notas_privadas: ['Cada persona recibió su nota en privado.', 'Nadie se sintió expuesto.'],
  notas_publicas: ['Las notas salieron en el grupo de WhatsApp.', 'Dos personas no volverán al reexamen.'],
};

export const CHATS = {
  area: { n: 'Capacitación · Boticas del Norte', sub: 'Karen, Fiorella y tú', c: '#C05621' },
  karen: { n: 'Karen Vásquez', sub: 'Analista de Capacitación', who: 'karen' },
  jorge: { n: 'Q. F. Jorge Lázaro', sub: 'Facilitador', who: 'facilitador' },
  grupo1: { n: 'Escuela de cajeros · Grupos 1 y 2', sub: '40 participantes', c: '#2F6B3F' },
  yanet: { n: 'Yanet Chávez', sub: 'Participante · Grupo 1', c: '#B83280' },
  kevin: { n: 'Kevin Rodríguez', sub: 'Participante · Grupo 2', c: '#6B46C1' },
};

export const WSP = [
  { chat: 'area', t: '07:50', de: 'Karen', txt: 'Te dejé el examen en la carpeta. Lo hice anoche a las 11 😅 Revísalo antes de imprimir, porfa.' },
  { chat: 'jorge', t: '08:30', de: 'Jorge', txt: 'Hoy traigo los casos de derivar. ¡La señora embarazada con dolor de cabeza va primero! 🤰', si: 'casos_derivar' },
  { chat: 'kevin', t: '13:15', de: 'Kevin', txt: 'Saqué 17 🎉 Lo de boletas lo estudié con la transcripción.', si: 'ajuste_kevin' },
  { chat: 'kevin', t: '13:15', de: 'Kevin', txt: 'Saqué 12. Las preguntas de boletas no las vi, como me exoneraron 😕', si: 'kevin_exonerado' },
  { chat: 'yanet', t: '15:40', de: 'Yanet', txt: 'Señorita, desaprobé con 12. ¿Me van a botar? Le juro que estudié en la noche con la bebé dormida 😢' },
  { chat: 'grupo1', t: '17:30', de: 'Daniela', txt: 'Gracias por mandarnos la nota por privado. Me sentí respetada 🙏', si: 'notas_privadas' },
  { chat: 'grupo1', t: '17:30', de: 'Jhonatan', txt: 'Oe, ¿por qué pusieron las notas de todos? Qué roche 😤', si: 'notas_publicas' },
];

export const CORREOS = [
  { t: '12:50', de: 'Gerencia de Operaciones', para: 'Karen Vásquez; Capacitación', asunto: 'Meta de la escuela', html: '<p>Recordamos que la meta de la escuela es 90 % de aprobados. Necesitamos a los 120 en caja antes del 15 de diciembre. Esperamos el informe hoy.</p><p>Ing. Raúl Benites · Gerente de Operaciones</p>' },
];

export const QUIZ = [
  { q: 'Desaprueba la mitad. ¿Qué miras primero?', ops: ['Quiénes son los desaprobados', 'En qué preguntas fallaron y si ese tema se enseñó bien', 'La edad de los participantes', 'El local de cada uno'], ok: 1, por: 'Un examen también evalúa la capacitación: si todos fallan en lo mismo, algo se enseñó mal.' },
  { q: 'Para cumplir la meta, alguien propone bajar la nota mínima. El riesgo es…', ops: ['Ninguno', 'Que gente que no sabe cuadrar una caja empiece a atender', 'Que se aburran', 'Que se pierda papel'], ok: 1, por: 'Bajar la nota cambia el número, no lo que la persona sabe.' },
  { q: '¿Cómo se comunican las notas de un examen?', ops: ['En el grupo de WhatsApp, para transparencia', 'A cada persona, en privado, con lo que debe reforzar', 'Solo a los jefes', 'No se comunican'], ok: 1, por: 'Son datos personales (Ley 29733) y exponerlas avergüenza sin enseñar.' },
  { q: 'Una pregunta del examen pide «recomiende un antigripal». ¿Qué tiene de malo?', ops: ['Nada', 'Evalúa algo que el cajero no debe hacer: eso le toca al químico farmacéutico', 'Es muy fácil', 'Es muy larga'], ok: 1, por: 'La orientación sobre medicamentos es parte de la dispensación (D.S. 014-2011-SA).' },
  { q: 'Que alguien apruebe el examen de caja mide…', ops: ['La reacción', 'El aprendizaje', 'Los resultados del local', 'La satisfacción'], ok: 1, por: 'El examen mide aprendizaje; lo que pase en caja en diciembre es aplicación y resultados.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'v1', t: '07:55', ch: 'documento', who: null, titulo: 'El examen de las once de la noche', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Karen hizo el examen anoche, cansada. Son veinte preguntas y se imprime a las 8:20. <mark class="clave">Un examen mal hecho no mide lo que saben: mide cuánto adivinan</mark>.</p>`,
    type: 'flag', prompt: 'Marca las preguntas que incumplen la norma o que conviene cambiar.',
    doc: { t: 'Examen de caja · Escuela de cajeros', sub: 'Grupos 1 y 2 · 20 preguntas · nota mínima 14' },
    lines: [
      { id: 'vuelto', t: '3. Un cliente paga S/ 50 por una compra de S/ 37.80. ¿Cuánto le das de vuelto?' },
      { id: 'anti', t: '7. Un cliente tiene gripe y fiebre. ¿Qué antigripal le recomendarías?', bad: LEY, why: 'Evalúa algo que el cajero no debe hacer. La orientación sobre medicamentos le toca al químico farmacéutico. Cámbiala por «¿qué haces?».' },
      { id: 'doble', t: '9. ¿Cuál NO es incorrecto no hacer al cerrar caja?', bad: BP, why: 'La doble negación confunde: mide comprensión lectora, no caja.' },
      { id: 'boleta', t: '11. ¿Qué datos pides al cliente si solicita factura en vez de boleta?' },
      { id: 'nunca', t: '14. Explique el procedimiento de devolución con tarjeta de crédito internacional.', bad: BP, why: 'No se enseñó en ningún día de la escuela.' },
      { id: 'arq', t: '16. Al hacer el arqueo, faltan S/ 10. ¿Qué haces primero?' },
      { id: 'deriv', t: '18. Una señora embarazada pide algo para el dolor de cabeza. ¿Qué haces?' },
      { id: 'tiempo', t: 'Tiempo: 15 minutos para las 20 preguntas.', bad: BP, why: 'Menos de un minuto por pregunta con cálculos de vuelto: mide velocidad y nervios.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'Corriges algunas, pero la pregunta del antigripal se imprime. Media aula recomienda un jarabe por marca.' : `Le mandas a Karen los cambios: ${hitsLey + hitsBp} preguntas corregidas y 30 minutos de tiempo. Responde: «Gracias, a las 11 de la noche no se piensa bien».`,
      flags: [missLey ? 'examen_tal_cual' : 'examen_revisado'], rel: { karen: missLey ? 0 : 1 },
      cartera: { examen: missLey ? 'Aplicado sin revisar del todo' : 'Revisado: sin trampas, sin antigripal, 30 minutos' },
      pro: { ok: 'Un examen bien hecho evalúa lo que se enseñó y lo que el puesto exige.', risk: 'Preguntas tramposas o sobre temas no enseñados hacen desaprobar a quien sí aprendió.', info: 'Pide que Jorge revise las preguntas de derivación.' },
      kusi: missLey ? ['preocupado', 'Esa pregunta del antigripal…'] : ['celebra', '¡Examen limpio!'],
    }),
    rules: [[LEY, 'La orientación sobre medicamentos es parte de la dispensación, a cargo del químico farmacéutico (D.S. 014-2011-SA).'], [BP, 'Se evalúa solo lo que se enseñó, con preguntas claras y tiempo suficiente.']],
    mirada: {
      ve: 'Revisar un examen antes de aplicarlo es tan importante como armar el aula. Si una pregunta premia lo que el cajero no debe hacer, la escuela enseña lo contrario de lo que quiere.',
      visual: { tipo: 'cambio', titulo: 'Preguntas que miden bien', pares: [['¿Qué antigripal recomiendas?', '¿Qué haces ante una consulta de salud?'], ['¿Cuál NO es incorrecto no hacer?', '¿Qué haces primero al cerrar caja?'], ['15 minutos', '30 minutos']] },
    },
  },
  {
    id: 'v2', t: '10:20', ch: 'presencial', who: 'facilitador', titulo: 'El arqueo en la caja de práctica', banner: 'assets/foto/taller.webp', show: ['calidad', 'personas', 'tiempo'],
    body: () => `<p>Antes del examen, Jorge hace una ronda de práctica. En la caja 1, Yanet cuenta billetes con los dedos temblorosos; en la caja 2, Daniela lo hace rapidísimo, como en Maracaibo. Jorge te pide que <mark class="clave">escribas en la pizarra el orden del arqueo</mark> para que nadie se pierda.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del arqueo de cierre. Usa las flechas.', boton: 'Escribir en la pizarra',
    items: [
      { id: 'fondo', t: 'Separar el fondo fijo de caja', por: 'Lo que no es venta del día va aparte.' },
      { id: 'contar', t: 'Contar el efectivo por denominación', por: 'Billetes y monedas, de mayor a menor.' },
      { id: 'vouch', t: 'Sumar los vouchers de tarjeta y pagos con billetera digital', por: 'El otro medio de pago del día.' },
      { id: 'sist', t: 'Comparar con el reporte de cierre del sistema', por: 'Aquí aparece la diferencia.' },
      { id: 'dif', t: 'Anotar cualquier diferencia, sin «cuadrarla» con plata propia', por: 'Un faltante se reporta; no se tapa.' },
      { id: 'firma', t: 'Firmar el acta de arqueo con el jefe de local', por: 'Los dos responden por lo contado.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, personas: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['arqueo_claro'] : [], cartera: { examen: q === 'buena' ? 'Práctica de arqueo en la pizarra' : 'Práctica de arqueo confusa' },
        out: q === 'buena' ? 'Yanet copia la pizarra en su cuaderno con letra de colegio. En la segunda vuelta, su caja cuadra al céntimo y suelta un «¡sí!» que hace reír a todos.' : 'Jorge corrige dos pasos en voz alta. Algunos ya los copiaron mal.',
        pro: { ok: 'Un orden claro baja los nervios y evita errores.', risk: 'Si la diferencia se «cuadra» con plata propia, el problema se esconde y se repite.', info: 'Deja la secuencia impresa junto a cada caja de práctica.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cuadró al céntimo!' : 'El orden importa.'],
      };
    },
    rules: [[POL, 'En Boticas del Norte, toda diferencia de caja se anota en el acta de arqueo y se firma con el jefe de local.']],
    mirada: {
      ve: 'La práctica justo antes del examen no es «dar las respuestas»: es la última oportunidad de aprender haciendo. Y enseñar que un faltante se reporta, no se tapa, vale más que cualquier pregunta del examen.',
      visual: { tipo: 'flujo', titulo: 'El arqueo de cierre', pasos: ['Fondo fijo aparte', 'Contar efectivo', 'Sumar vouchers', 'Comparar con sistema', 'Anotar diferencia', 'Firmar acta'] },
    },
  },
  {
    id: 'v3', t: '13:00', ch: 'sistema', who: null, titulo: '19 aprobados de 40', banner: 'assets/esc/lupa.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: (n, F) => `<p>Calificas en el Excel mientras comes un sánguche de chicharrón. ${F.has('examen_tal_cual') ? 'Con el examen sin revisar, aprueban 15 de 40.' : 'Aprueban 19 de 40.'} <mark class="clave">La mitad desaprueba</mark>. Antes de que Karen te pregunte por qué, revisas los datos.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos cruces que más te ayudan a explicar el resultado.', boton: 'Cruzar estos datos', resumen: 'Cruzaste',
    cols: ['Cruce', 'Lo que podría decir'],
    rows: [
      { id: 'preg', cells: ['Errores por pregunta', 'Si todos fallan en lo mismo'] },
      { id: 'tema', cells: ['Errores por tema, contra las horas dictadas de cada tema', 'Si lo que falla es lo que menos se enseñó'] },
      { id: 'local', cells: ['Notas por local', 'Qué locales mandan «mejor» gente'] },
      { id: 'edad', cells: ['Notas por edad', 'Si a los mayores les cuesta más'] },
    ],
    score: { preg: 3, tema: 3, local: 0, edad: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, confianza: q === 'buena' ? 2 : 0, etica: picks.includes('edad') ? -2 : 0 },
        flags: q === 'buena' ? ['causa_examen'] : [], cartera: { notas: q === 'buena' ? 'El 80 % de los errores: arqueo y vuelto' : 'Notas sin análisis claro' },
        out: q === 'buena' ? 'Lo ves claro: el 80 % de los errores están en arqueo y cálculo de vuelto. El martes, ese bloque tuvo 25 minutos porque la inducción se extendió. Desaprobaron en lo que menos se enseñó.' : picks.includes('edad') ? 'La edad no explica nada: el que más sacó tiene 46 años. Perdiste tiempo en un prejuicio.' : 'Encuentras pistas, pero no el patrón.',
        pro: { ok: 'Cruzar errores con horas dictadas convierte una mala nota en una lección sobre la capacitación.', risk: 'Buscar la causa en la persona (edad, local) desvía de lo que se puede corregir.', info: 'Lleva este cruce a Karen antes de que hable con Operaciones.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡No fallaron ellos: faltó tiempo!' : 'El patrón está en otro lado.'],
      };
    },
    mirada: {
      ve: 'Un examen evalúa a dos a la vez: a quien lo rinde y a quien enseñó. Cuando la mitad falla en el mismo tema, el problema casi siempre está en cómo se enseñó ese tema.',
      visual: { tipo: 'rango', titulo: 'Errores por tema (de 100)', min: 0, max: 100, banda: [60, 100], marcas: [['Arqueo y vuelto', 80], ['Boletas', 12], ['Derivar', 5], ['Trato', 3]] },
    },
  },
  {
    id: 'v4', t: '14:10', ch: 'presencial', who: 'karen', titulo: '«¿Y si bajamos la nota?»', banner: 'assets/foto/reunion-jefa.webp', show: ['etica', 'calidad', 'confianza'],
    body: () => `<p>Karen lee el correo de Operaciones en su celular, de pie, con el táper de arroz con pato a medio comer. «Noventa por ciento. Tenemos 47. Si bajamos la nota mínima a 11, <mark class="clave">llegamos al 85 y nadie pregunta</mark>.» Te mira. «¿Tú qué harías?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer un refuerzo de arqueo y vuelto con Jorge, y un reexamen el jueves para quienes desaprobaron, explicando la causa a Operaciones.',
        res: { q: 'buena', fx: { etica: 4, calidad: 4, tiempo: -2, confianza: 2 }, rel: { karen: 1 }, flags: ['reexamen'], cartera: { reexamen: 'Refuerzo y reexamen el jueves' },
          out: 'Karen se queda pensando. «Benites me va a reñir… pero tienes razón: no quiero 21 cajas que no cuadran en diciembre.» Llama a Jorge en ese momento.',
          pro: { ok: 'Atiendes la causa y cuidas a los clientes y a los cajeros.', risk: 'El jueves será un día pesado y Operaciones puede presionar.', info: 'El reexamen debe tener preguntas nuevas, no las mismas.' },
          kusi: ['animo', 'Honestidad con plan. ¡Así se defiende una escuela!'] } },
      { id: 'b', label: 'Bajar la nota a 11: el examen tuvo problemas y es justo darles una mano.',
        res: { q: 'riesgosa', fx: { etica: -3, calidad: -4 }, flags: ['nota_bajada'], cartera: { reexamen: 'Nota mínima bajada a 11' },
          out: 'Operaciones queda contenta con el 85 %. Veintiún cajeros que no dominan el arqueo empiezan el lunes en caja.',
          pro: { ok: 'Se llega casi a la meta.', risk: 'Cambia el número, no lo que saben. El faltante de caja llegará igual.' },
          kusi: ['preocupado', 'La nota baja, el riesgo no.'] } },
      { id: 'c', label: 'Dejarlos empezar en caja y que su jefe de local los refuerce en el trabajo.',
        res: { q: 'aceptable', fx: { tiempo: 2, calidad: -2 }, flags: ['pase_directo'], cartera: { reexamen: 'Refuerzo «en el local»' },
          out: 'Karen acepta, aliviada. Nadie le explica a los jefes qué tienen que reforzar ni cómo.',
          pro: { ok: 'No frenas la operación.', risk: 'Un refuerzo sin plan, en plena campaña, no ocurre.' },
          kusi: ['pensando', '¿Quién va a reforzar, y cuándo?'] } },
    ],
    rules: [[BP, 'Si la causa de la nota está en la capacitación, se corrige la capacitación, no la nota.']],
    mirada: {
      ve: 'Karen no es tramposa: está bajo presión y la escuela es su apuesta. Tu trabajo es darle una salida que pueda defender. Una meta de aprobados que se cumple bajando la vara no protege a la empresa: le traslada el problema a diciembre.',
      visual: { tipo: 'balanza', a: { t: 'Bajar la nota', items: ['85 % en el informe', '21 cajas en riesgo', 'Faltantes en diciembre'] }, b: { t: 'Refuerzo y reexamen', items: ['Causa atendida', 'Un día más de trabajo', 'Cajeros que cuadran'] } },
    },
  },
  {
    id: 'v5', t: '16:00', ch: 'documento', who: null, titulo: 'El informe de evaluación', banner: 'assets/esc/meta.webp', show: ['calidad', 'confianza', 'cumplimiento'],
    body: () => `<p>Karen presenta a las seis. Te pide el informe de evaluación de los grupos 1 y 2, <mark class="clave">en una página</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del informe.', boton: 'Mandar el informe',
    bloques: [
      { id: 'res', t: 'Resultados', n: 2, ops: [
        { id: 'r1', t: 'Aprobaron 19 de 40; nota mínima 14.', ok: true },
        { id: 'r2', t: 'El 80 % de los errores está en arqueo y vuelto, el bloque con menos horas dictadas.', ok: true, por: 'La causa, con dato.' },
        { id: 'r3', t: 'Lista con nombre y nota de cada desaprobado.', ok: false, por: 'Operaciones necesita el patrón, no los nombres.' },
      ] },
      { id: 'causa', t: 'Lectura', n: 2, ops: [
        { id: 'c1', t: 'El examen mide aprendizaje; lo que pase en caja se verá en los locales.', ok: true, por: 'Separa los niveles de evaluación.' },
        { id: 'c2', t: 'Ajuste: el arqueo pasa al día 3, con caja de práctica, desde el grupo 3.', ok: true },
        { id: 'c3', t: 'Los participantes de este grupo tienen bajo nivel.', ok: false, por: 'Es una opinión sin dato y culpa a quien menos responsabilidad tiene.' },
      ] },
      { id: 'sig', t: 'Siguientes pasos', n: 1, ops: [
        { id: 's1', t: 'Refuerzo y reexamen para los 21, antes de que empiecen en caja.', ok: true },
        { id: 's2', t: 'Repetir el mismo examen el lunes, sin cambios.', ok: false, por: 'Sin refuerzo, el resultado será el mismo.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0 }, rel: { karen: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['informe_eval'] : [], cartera: { informe: q === 'buena' ? 'Informe de evaluación: resultado, causa y ajuste' : 'Informe con huecos' },
        out: q === 'buena' ? 'Karen lo lee en el taxi a Operaciones. A las 6:40 te escribe: «Benites dijo: "Por fin alguien me explica por qué". Aprobó el reexamen».' : 'El informe sale, pero mezcla datos con opiniones. Karen tiene que defenderlo a pulso.',
        pro: { ok: 'Un informe que separa resultado, causa y ajuste convierte una mala noticia en un plan.', risk: 'Nombres y opiniones sobre «el nivel» de las personas no ayudan y exponen.', info: 'Guarda el cruce de errores por tema: lo usarás con los otros grupos.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Una página que convence!' : 'Le sobran cosas…'],
      };
    },
    mirada: {
      ve: 'En capacitación se suele confundir «aprobaron» con «funcionó». El examen mide si aprendieron; si cambia la caja en diciembre es otra pregunta. Decirlo en el informe protege a la escuela de prometer lo que aún no se ha medido.',
      visual: { tipo: 'embudo', titulo: 'Niveles de evaluación', niveles: [['Reacción: ¿les gustó?', 4], ['Aprendizaje: ¿aprobaron?', 3], ['Aplicación: ¿lo hacen en caja?', 2], ['Resultados: ¿menos faltantes?', 1]] },
    },
  },
  {
    id: 'v6', t: '17:10', ch: 'whatsapp', who: null, titulo: 'Las notas', banner: 'assets/foto2/tablet-equipo.webp', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>Cuarenta personas esperan su nota. Yanet ya te escribió que tiene miedo de que la boten. <mark class="clave">Cómo das una nota dice tanto como la nota</mark>.</p>`,
    type: 'compose', enviaA: 'grupo1', para: 'Para: Escuela de cajeros · Grupos 1 y 2', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje para el grupo eligiendo una frase de cada parte.',
    slots: [
      { id: 'como', t: 'Cómo das las notas', ops: [
        { id: 'c1', t: 'En los próximos minutos les llega su nota por privado, con lo que tienen que reforzar.', ok: true, por: 'Cada uno recibe lo suyo.' },
        { id: 'c2', t: 'Aquí les dejo la lista de notas de todos 📋', ok: false, por: 'Las notas son datos personales y exponerlas avergüenza.' },
      ] },
      { id: 'des', t: 'Para quienes desaprobaron', ops: [
        { id: 'd1', t: 'Quien no llegó a 14 tiene refuerzo y reexamen el jueves, dentro de su jornada. Nadie pierde su trabajo por esta nota.', ok: true, por: 'Responde al miedo de verdad.' },
        { id: 'd2', t: 'Quien desaprobó, su jefe decidirá qué pasa.', ok: false, por: 'Siembra miedo y no es lo que se acordó.' },
      ] },
      { id: 'cie', t: 'Cierre', ops: [
        { id: 'e1', t: 'El examen tuvo poco tiempo de práctica de arqueo: eso es responsabilidad nuestra y lo vamos a mejorar.', ok: true, por: 'Asumes la parte de la escuela.' },
        { id: 'e2', t: '¡A estudiar más el fin de semana! 💪', ok: null, por: 'Bienintencionado, pero carga todo en ellos.' },
      ] },
    ],
    res: sel => {
      const mal = sel.como === 'c2' || sel.des === 'd2', buenas = ['c1', 'd1', 'e1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : mal ? -4 : 1, etica: sel.como === 'c2' ? -4 : 2, cumplimiento: sel.como === 'c2' ? -3 : 1 },
        flags: [sel.como === 'c2' ? 'notas_publicas' : 'notas_privadas'],
        envia: q === 'buena' ? [['yanet', 'Yanet, sacaste 12. Te falta el arqueo, que fue justo lo que menos practicamos. El jueves hay refuerzo y reexamen en tu jornada. Nadie te va a botar por esto. Hoy en la práctica cuadraste al céntimo, ¿te acuerdas?']] : [],
        out: q === 'buena' ? 'Yanet responde con un audio: se le quiebra la voz, pero dice «gracias, el jueves le gano al arqueo».' : mal ? 'El grupo se llena de mensajes molestos. Dos desaprobados salen del grupo.' : 'Las notas llegan. El grupo queda tranquilo, aunque nadie sabe bien qué reforzar.',
        pro: { ok: 'Nota en privado, plan para los desaprobados y la parte que le toca a la escuela.', risk: 'Publicar notas en un grupo expone datos personales y aleja justo a quien necesita volver.', info: 'Manda los privados en orden alfabético para no olvidar a nadie.' },
        kusi: [q === 'buena' ? 'feliz' : mal ? 'indignado' : 'pensando', q === 'buena' ? '¡Nota con cuidado y con plan!' : mal ? '¡Las notas no van al grupo!' : 'Le faltó algo.'],
      };
    },
    rules: [[LEY, 'Las notas de cada persona son datos personales: se comunican en privado (Ley 29733).']],
    mirada: {
      ve: 'Para alguien en su primer empleo, un 12 puede sonar a despido. Dar la nota en privado, con un plan y reconociendo la parte de la escuela, convierte un mal momento en una razón para volver el jueves.',
      visual: { tipo: 'mensaje', titulo: 'Cómo dar una nota baja', txt: 'Sacaste 12. Te falta el arqueo, que fue lo que menos practicamos. El jueves hay refuerzo y reexamen en tu jornada. Nadie te va a botar por esto.' },
    },
  },
];
