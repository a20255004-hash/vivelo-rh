// Analista de Relaciones Laborales · Capítulo 9 · «El acta» · Semana 2, jueves.
// Hilo de las dos semanas: última sesión de trato directo de la semana; bono, movilidad, uniformes y el plan de horas.
// Normas citadas:
// - TUO de la Ley de Relaciones Colectivas de Trabajo (D.S. 010-2003-TR): art. 41 (el convenio colectivo es el acuerdo
//   que regula remuneraciones y condiciones de trabajo), art. 43 (carácter automático sobre los contratos individuales,
//   prevalencia de lo más favorable y vigencia que acuerden las partes), art. 54 (buena fe) y la conciliación como etapa
//   posterior al trato directo (cap. 1).
//   https://lpderecho.pe/caracteristicas-convenio-colectivo-incluyen-superioridad-comvenio-colectivo-contrato-trabajo-siempre-beneficio-trabajador-aplicacion-retroactiva-exp-008-2005-pi-tc/
//   https://modelo.pe/convenio-colectivo-de-trabajo/
//   https://www.elperuano.pe/noticia/207375-corte-suprema-de-justicia-garantiza-vigencia-de-los-convenios-colectivos
// - Constitución, art. 26 (irrenunciabilidad) y Ley 28806 (derecho a acudir a la inspección), caps. 6 a 8.
// No se citan plazos mínimos de vigencia ni número de ejemplares porque no se verificaron en esta búsqueda.

export const CAP = {
  n: 9, titulo: 'El acta', dia: 'Semana 2, jueves', foto: 'assets/foto/acuerdo.webp',
  lugar: 'Conservas del Pacífico · Sala de reuniones de la planta',
  inicio: '07:30', fin: '20:00', cierreHora: '19:50',
  apertura: 'Jueves. Hoy se discuten los puntos económicos y se presenta el plan de pago de las horas. Si hay acuerdo, cada palabra del acta va a regir un año en la planta.', boton: 'Abrir el borrador del acta',
  kusi: 'Un acta es una promesa por escrito. ¡Que diga exactamente lo que se acordó!',
  lead: 'Limpiaste un borrador ambiguo, llegaste con un mandato claro, redactaste un bono que nadie podrá interpretar a su favor, buscaste salida al impasse sin ofrecer lo que no tenías y defendiste lo firmado frente a un cambio de último minuto.',
  reflexion: '¿Qué palabra del acta te costó más que quedara como quedó?',
  siguiente: { n: 10, titulo: 'Lo que queda', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'borrador', p: 'Borrador del acta final', j: 'Jhon Rivas · Arturo', d: 0, e: 'Escrito anoche' },
  { id: 'mandato', p: 'Mandato de la gerencia', j: 'Ing. Olaechea', d: 0, e: 'Por confirmar' },
  { id: 'bono', p: 'Cláusula del bono de producción', j: 'Ambas comisiones', d: 0, e: 'Sin redactar' },
  { id: 'horas', p: 'Plan de pago de las horas', j: 'Relaciones Laborales', d: 0, e: 'Se presenta hoy' },
  { id: 'firma', p: 'Firma del acta', j: 'Ambas comisiones', d: 0, e: 'Si hay acuerdo' },
];

export const FUTURO = {
  borrador_limpio: ['El borrador del acta quedó sin ambigüedades ni renuncias.', 'Nadie discutirá su sentido en la planta. Capítulo 10.'],
  borrador_ambiguo: ['El acta quedó con frases que cada uno puede leer a su favor.', 'La primera discusión llegará pronto. Capítulo 10.'],
  mandato_claro: ['Presentaste la oferta dentro del mandato, con sus costos.', 'Lucho supo con qué se negociaba. Capítulo 10.'],
  oferta_baja: ['Abriste con una oferta muy por debajo del mandato.', 'La base lo tomó como una provocación. Capítulo 10.'],
  oferta_alta: ['Ofreciste más de lo que permitía el mandato.', 'El gerente lo sabrá mañana. Capítulo 10.'],
  bono_claro: ['La cláusula del bono dice monto, a quién, cuándo y cómo se paga.', 'La primera boleta con bono no tendrá sorpresas. Capítulo 10.'],
  paquete_propuesto: ['Destrabaste el impasse con un paquete consultado a la gerencia.', 'Hay acuerdo completo. Capítulo 10.'],
  acuerdo_sin_mandato: ['Cerraste el bono por encima del mandato sin consultar.', 'El gerente lo descubrirá al revisar el acta. Capítulo 10.'],
  conciliacion_propuesta: ['El bono quedó para conciliación; se firmó un acta parcial.', 'La Semana 3 empieza con una conciliación. Capítulo 10.'],
  temores_escuchados: ['Escuchaste qué teme la base antes de firmar.', 'Sabes qué cuidar en la lectura del acta. Capítulo 10.'],
  acta_firmada: ['Las comisiones firmaron el acta.', 'Mañana se lee en el comedor y se ejecuta. Capítulo 10.'],
  firma_postergada: ['La firma se postergó por un cambio de último minuto de la gerencia.', 'Mañana empieza con el acta sin firmar. Capítulo 10.'],
  clausula_denuncia: ['Intentaste meter en el acta el retiro de la denuncia.', 'Lucho se levantó de la mesa. Capítulo 10.'],
  lectura_conjunta: ['El acta se leyó en el comedor a dos voces: Lucho y tú.', 'La base escuchó una sola versión. Capítulo 10.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Arturo, Valeria y tú', c: '#0F2A3D' },
  arturo: { n: 'Dr. Arturo Benavides', sub: 'Jefe de Relaciones Laborales', who: 'arturo' },
  lucho: { n: 'Lucho Paredes', sub: 'Secretario general del sindicato', who: 'lucho' },
  gladys: { n: 'Gladys Ruiz', sub: 'Jefa de planta', who: 'gladys' },
  valeria: { n: 'Valeria Castro', sub: 'Abogada laboralista', who: 'valeria' },
  patricia: { n: 'Patricia Salcedo', sub: 'Jefa de Finanzas', c: '#6B4E9B' },
  gerente: { n: 'Ing. Fernando Olaechea', sub: 'Gerente general', c: '#3B3B3B' },
};

export const WSP = [
  { chat: 'gerente', t: '07:20', de: 'Ing. Olaechea', txt: 'Mandato para hoy: bono hasta S/ 600 por trabajador, movilidad de madrugada sí, uniformes adelantados sí. Nada más sin llamarme.' },
  { chat: 'lucho', t: '07:40', de: 'Lucho', txt: 'Anoche tuvimos asamblea. La base leyó el resumen de las horas. Hoy venimos a cerrar, si se puede.', si: 'plan_a_lucho' },
  { chat: 'lucho', t: '07:40', de: 'Lucho', txt: 'Anoche tuvimos asamblea. La base está caliente. Hoy veremos.', no: 'plan_a_lucho' },
  { chat: 'gladys', t: '12:15', de: 'Gladys', txt: 'La línea pregunta si hoy se firma. Les dije que trabajen tranquilos, que tú estás ahí.' },
  { chat: 'valeria', t: '17:55', de: 'Valeria', txt: 'Hiciste bien. Esa cláusula no se puede pedir: el derecho a denunciar no se negocia. Yo hablo con el gerente.', si: 'acta_firmada' },
  { chat: 'arturo', t: '19:40', de: 'Arturo', txt: 'Hoy hiciste en una tarde lo que a mí me costó años aprender. Mañana a las 8, la comparecencia. Duerme.' },
];

export const CORREOS = [
  { t: '07:10', de: 'Jhon Rivas · Secretario de actas del sindicato', para: 'Comisión de la empresa', asunto: 'Borrador de acta final', html: '<p>Buenos días. Les adjunto el borrador que trabajamos anoche con el Dr. Benavides después de la asamblea. Faltan los montos.</p><p>Jhon Rivas</p>' },
  { t: '17:20', de: 'Ing. Fernando Olaechea · Gerente general', para: 'Dr. Arturo Benavides; Analista de Relaciones Laborales', asunto: 'Antes de firmar', html: '<p>Antes de firmar, agreguen una cláusula: el sindicato se desiste de la denuncia ante SUNAFIL. Si no, no firmen.</p>' },
];

export const QUIZ = [
  { q: 'Un convenio colectivo…', ops: ['Es una recomendación', 'Es el acuerdo que regula remuneraciones y condiciones de trabajo, y modifica automáticamente los contratos en lo que favorece', 'Solo obliga al sindicato', 'Necesita la firma de cada trabajador'], ok: 1, por: 'Arts. 41 y 43 del TUO de la LRCT: el convenio regula condiciones de trabajo y tiene carácter automático sobre los contratos.' },
  { q: 'Una cláusula que dice «bono de hasta S/ 600» sin más…', ops: ['Es clara', 'Es ambigua: hay que fijar monto, beneficiarios, condiciones y fecha de pago', 'Obliga a pagar S/ 600 a todos', 'No tiene valor'], ok: 1, por: 'Lo que el acta no define, cada parte lo interpretará a su favor.' },
  { q: 'Pedir que el sindicato se desista de una denuncia ante SUNAFIL a cambio de firmar…', ops: ['Es una práctica normal', 'Condiciona el ejercicio de un derecho y contradice la buena fe', 'Lo exige la ley', 'Reduce la multa'], ok: 1, por: 'Acudir a la inspección es un derecho; condicionar la firma a su retiro se lee como presión (art. 54 del TUO de la LRCT).' },
  { q: 'Si en el trato directo no hay acuerdo sobre el bono…', ops: ['Se impone la propuesta de la empresa', 'Se puede firmar un acta parcial con lo acordado y llevar el punto pendiente a conciliación', 'Se declara huelga automáticamente', 'Se anula todo lo negociado'], ok: 1, por: 'La conciliación es la etapa que sigue al trato directo cuando no hay acuerdo.' },
  { q: 'Ofrecer en la mesa más de lo que autorizó la gerencia…', ops: ['Muestra liderazgo', 'Compromete a la empresa sin mandato y rompe la confianza interna', 'Es obligatorio si hay impasse', 'No importa si se firma'], ok: 1, por: 'Quien negocia representa un mandato: superarlo sin consultar compromete a la empresa y al negociador.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'q1', t: '07:45', ch: 'documento', who: null, titulo: 'El borrador de anoche', banner: 'assets/foto/revisa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Jhon y el doctor trabajaron el borrador hasta las once de la noche, con la asamblea todavía en los oídos. Huele a café recalentado y a tinta de impresora.</p><p>Valeria siempre dice que un acta no se lee: <mark class="clave">se lee buscando cómo la interpretaría alguien enojado</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no debería quedar así en el acta.',
    doc: { t: 'Acta de trato directo · Pliego 2026-2027', sub: 'Borrador · Conservas del Pacífico S.A.C. y Sindicato de Trabajadores' },
    lines: [
      { id: 'partes', t: 'Reunidas las comisiones negociadoras de la empresa y del sindicato, designadas conforme al pliego, acuerdan lo siguiente.' },
      { id: 'uniformes', t: 'Uniformes: dos juegos al año por trabajador, en su talla, entregados en marzo y setiembre.' },
      { id: 'movilidad', t: 'Movilidad de madrugada: la empresa la brindará cuando sea posible.', bad: BP, why: '«Cuando sea posible» es lo que permitió cortarla en el convenio anterior. Hay que decir horarios, rutas y desde cuándo.' },
      { id: 'bono', t: 'Bono de producción: hasta S/ ___ por trabajador.', bad: BP, why: '«Hasta» deja el monto abierto. El bono debe decir cuánto, a quién, con qué condición y cuándo se paga.' },
      { id: 'denuncia', t: 'El sindicato se compromete a no presentar denuncias ante la Autoridad durante la vigencia del convenio.', bad: LEY, why: 'Acudir a la inspección es un derecho. Pactar que no se ejercerá contradice la buena fe y la libertad sindical.' },
      { id: 'horas', t: 'Se deja constancia de que la empresa pagará el sobretiempo de la campaña según el plan entregado hoy.', duda: 'Correcto si solo deja constancia: el pago de las horas es una deuda, no una concesión del convenio.' },
      { id: 'turnos', t: 'La empresa podrá modificar los turnos sin aviso previo según las necesidades de la producción.', bad: BP, why: 'Una facultad tan amplia en un acta firmada con el sindicato reabre el conflicto que empezó el lunes de la primera semana.' },
      { id: 'vigencia', t: 'Vigencia: del 1 de noviembre de 2026 al 31 de octubre de 2027.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => {
      const q = !missLey && hitsBp >= 2 ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: missLey ? -4 : 4 }, rel: { valeria: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['borrador_limpio'] : ['borrador_ambiguo'],
        cartera: { borrador: q === 'buena' ? `Limpio: ${hitsLey + hitsBp} cambios` : 'Con frases ambiguas' },
        out: missLey ? 'Le pasas el borrador al doctor. Valeria lo ve a las 9 y subraya una línea con tanta fuerza que rompe el papel: «¿No presentar denuncias? Esto no se firma».' : q === 'buena' ? 'Jhon recibe tus marcas con una sonrisa cansada: «Lo de “cuando sea posible” lo puse yo. Me lo dictó la costumbre». Lo corrige él mismo.' : 'Corregiste lo legal. Valeria agrega: «Y lo de la movilidad, ¿cuándo? “Cuando sea posible” fue lo que nos llevó hasta aquí».',
        pro: { ok: 'Un acta sin ambigüedades evita la siguiente pelea.', risk: 'Una cláusula que limita un derecho invalida la buena fe de todo el documento.', info: 'Pregúntate en cada línea: ¿cómo la leería alguien que quiere pelear?' },
        kusi: missLey ? ['preocupado', 'Esa línea no podía estar…'] : ['celebra', '¡Ni una frase para malinterpretar!'],
      };
    },
    rules: [[LEY, 'TUO de la LRCT, art. 54: buena fe en la negociación.'], [BP, 'En un acta, cada beneficio dice cuánto, a quién, cuándo y cómo.']],
    mirada: {
      ve: 'Las peleas de mañana se escriben hoy en las actas. «Cuando sea posible», «hasta» y «según necesidad» son las palabras que más conflictos han causado en las plantas.',
      visual: { tipo: 'cambio', titulo: 'De la frase ambigua a la cláusula clara', pares: [['«Cuando sea posible»', '«Desde el 1 de diciembre, salidas de 03:00 y 04:00»'], ['«Hasta S/ ___»', '«S/ … a cada trabajador, pagado en …»'], ['«No presentarán denuncias»', '(no va)']] },
    },
  },
  {
    id: 'q2', t: '09:10', ch: 'llamada', who: null, titulo: 'El mandato', banner: 'assets/foto2/callcenter.webp', lugar: 'Pasillo de la sala de reuniones', show: ['confianza', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Cincuenta minutos antes de la sesión. ${F.has('oferta_sin_mandato') ? 'El gerente no olvidó que el jueves pasado ofreciste uniformes sin permiso: hoy quiere que todo pase por él.' : 'El doctor te pide que presentes tú la propuesta económica.'}</p><p>Tres llamadas para saber <mark class="clave">con qué entras a la mesa</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Ing. Fernando Olaechea · gerente general', 'Contesta desde el carro', '«Hasta seiscientos por trabajador, ni un sol más. Movilidad sí, uniformes adelantados sí. Si piden más, me llamas antes de decir nada.»'],
      ['Patricia Salcedo · Finanzas', 'Contesta con la calculadora', '«Seiscientos por 450 trabajadores son 270 mil soles. Con movilidad y uniformes, el paquete pasa los 400 mil. Es lo que la empresa puede, con la campaña que tuvimos.»'],
      ['Doña Teodora Lázaro · comisión del sindicato', 'Contesta bajito, desde el comedor', '«Hijita, le digo algo, pero no diga que fui yo: la base pidió novecientos, pero con setecientos y la movilidad segura, firman. La movilidad pesa más de lo que creen.»'],
    ],
    prompt: 'Entras a la sala. ¿Con qué abres la propuesta económica?',
    choices: [
      { id: 'a', label: 'Con la propuesta real: S/ 600 de bono, movilidad de madrugada garantizada y uniformes adelantados, explicando lo que cuesta cada punto con los números de Patricia.',
        res: { q: 'buena', fx: { confianza: 5, etica: 3, calidad: 2 }, rel: { lucho: 1 }, flags: ['mandato_claro'], cartera: { mandato: 'S/ 600 + movilidad + uniformes, con costos' },
          out: 'Lucho escucha con los brazos cruzados. Cuando terminas, mira a doña Teodora. «Seiscientos es poco», dice. «Pero la movilidad, escrita así, la vamos a pensar.» Hay una grieta: es un comienzo.',
          pro: { ok: 'Abres con la verdad y con números: el sindicato sabe que no le estás escondiendo margen.', risk: 'Te queda poco margen para moverte.', info: 'Lo que dijo doña Teodora es una pista, no algo que puedas usar en la mesa.' },
          kusi: ['animo', 'Números claros, cartas sobre la mesa.'] } },
      { id: 'b', label: 'Con S/ 300, para dejar espacio a subir: así se negocia siempre, y el sindicato también pidió de más.',
        res: { q: 'aceptable', fx: { confianza: -4, tiempo: -2 }, rel: { lucho: -1 }, flags: ['oferta_baja'], cartera: { mandato: 'Apertura en S/ 300' },
          out: 'Jhon deja de escribir. Lucho se ríe: «¿Trescientos? ¿Después de las horas que nos debían?». La mañana se va en subir de cincuenta en cincuenta.',
          pro: { ok: 'Es una táctica común y te deja margen.', risk: 'Después de dos semanas construyendo confianza, una oferta muy baja se lee como que la empresa sigue jugando.' },
          kusi: ['pensando', 'Táctica clásica… en el peor momento.'] } },
      { id: 'c', label: 'Con S/ 700 y la movilidad: es lo que la base aceptaría según doña Teodora, y cerrar hoy vale más que cien soles por persona.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4, confianza: 2 }, rel: { lucho: 1, arturo: -1 }, flags: ['oferta_alta'], cartera: { mandato: 'Oferta de S/ 700, sobre el mandato' },
          out: 'Lucho levanta las cejas. El doctor te pisa el pie bajo la mesa. Ofreciste cien soles más de lo autorizado y usaste algo que te dijeron en confianza.',
          pro: { ok: 'Podrías cerrar rápido.', risk: 'Superas el mandato sin consultar y usas una confidencia de la otra parte.' },
          kusi: ['preocupado', 'Eso no era tuyo para ofrecer…'] } },
    ],
    rules: [[POL, 'En Conservas del Pacífico, la comisión negocia dentro del mandato de la gerencia; cualquier cambio se consulta antes de ofrecerse.'], [LEY, 'TUO de la LRCT, art. 54: buena fe en la negociación.']],
    mirada: {
      ve: 'Negociar con un mandato es saber hasta dónde puedes llegar y no fingir que no lo sabes. Abrir con la verdad, explicando los costos, construye más que cualquier táctica de regateo.',
      visual: { tipo: 'rango', titulo: 'El bono en la mesa (S/ por trabajador)', min: 0, max: 1000, banda: [600, 700], marcas: [['Apertura táctica', 300], ['Mandato', 600], ['Lo que aceptaría la base', 700], ['Pliego', 900]] },
    },
  },
  {
    id: 'q3', t: '11:20', ch: 'documento', who: 'valeria', titulo: 'La cláusula del bono', banner: 'assets/foto/cv-mano.webp', lugar: 'Sala de reuniones · cuarto intermedio', show: ['calidad', 'cumplimiento', 'confianza'],
    body: () => `<p>Cuarto intermedio. Mientras el sindicato consulta, Valeria y tú redactan la cláusula del bono en la laptop, con el proyector apagado.</p><p>«Escríbela como si la fuera a leer un juez dentro de un año», dice Valeria. <mark class="clave">Cuatro piezas</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la cláusula.', boton: 'Guardar la cláusula',
    bloques: [
      { id: 'monto', t: 'Monto', n: 1, ops: [
        { id: 'm1', t: 'Un bono de producción de S/ 600 por trabajador.', ok: true, por: 'Un monto, sin «hasta».' },
        { id: 'm2', t: 'Un bono de producción de hasta S/ 600, según evaluación de la empresa.', ok: false, por: 'Abre la puerta a pagar menos sin explicar por qué.' },
      ] },
      { id: 'quienes', t: 'A quiénes', n: 1, ops: [
        { id: 'q1', t: 'A los trabajadores comprendidos en el convenio que estén en planilla a la fecha de pago.', ok: true, por: 'Un criterio objetivo y verificable.' },
        { id: 'q2', t: 'A los trabajadores que la jefatura considere comprometidos.', ok: false, por: 'Subjetivo: invita a la discriminación.' },
      ] },
      { id: 'cuando', t: 'Cuándo', n: 1, ops: [
        { id: 'c1', t: 'En la planilla de diciembre, junto con la remuneración del mes.', ok: true, por: 'Fecha cierta.' },
        { id: 'c2', t: 'Cuando la situación de la empresa lo permita.', ok: false, por: 'Es la misma trampa del «cuando sea posible».' },
      ] },
      { id: 'proporcion', t: 'Casos especiales', n: 1, ops: [
        { id: 'p1', t: 'Quienes hayan ingresado durante la campaña lo reciben en proporción a los meses trabajados.', ok: true, por: 'Resuelve de antemano la pregunta que alguien hará en diciembre.' },
        { id: 'p2', t: 'Los casos especiales se verán en su momento.', ok: false, por: 'En diciembre, «su momento» será una pelea.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 2 : 0 }, rel: { valeria: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['bono_claro'],
        cartera: { bono: q === 'riesgosa' ? 'Cláusula abierta a interpretaciones' : 'Monto, beneficiarios, fecha y casos especiales' },
        out: q === 'buena' ? 'Jhon lee la cláusula proyectada y no encuentra nada que preguntar. «Esto hasta mi papá lo entiende», dice. Es el mejor elogio que vas a recibir en el día.' : q === 'aceptable' ? 'Jhon pregunta: «¿Y los que entraron en la campaña?». Agregas una línea a mano.' : 'Lucho lee «según evaluación de la empresa» y cierra la laptop: «Así no».',
        pro: { ok: 'Una cláusula de bono clara se paga sin discusión.', risk: '«Hasta», «según evaluación» o «cuando se pueda» son la próxima denuncia.', info: 'Si la cláusula se entiende sin abogado, está bien escrita.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una cláusula a prueba de peleas!' : '¿Qué queda abierto?'],
      };
    },
    rules: [[LEY, 'TUO de la LRCT, art. 43: el convenio modifica automáticamente los contratos en lo que favorece al trabajador.'], [BP, 'Monto, beneficiarios, fecha y casos especiales: las cuatro preguntas de toda cláusula económica.']],
    mirada: {
      ve: 'Una cláusula económica mal escrita convierte un acuerdo en una deuda discutida. Escribir con precisión es la forma más concreta de cumplir lo que se negoció.',
      visual: { tipo: 'flujo', titulo: 'Una cláusula completa', pasos: ['Cuánto', 'A quién', 'Cuándo', 'Casos especiales'] },
    },
  },
  {
    id: 'q4', t: '13:10', ch: 'presencial', who: 'lucho', titulo: 'Setecientos o nada', banner: 'assets/foto2/tension.webp', lugar: 'Sala de reuniones de la planta', show: ['confianza', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Vuelve el sindicato. Lucho no se sienta: «Setecientos y la movilidad, o no firmamos». ${F.has('oferta_alta') ? 'Ya sabe que tú hablaste de setecientos: no va a bajar.' : 'Doña Teodora mira la mesa.'} El almuerzo, un arroz con mariscos frío en táper, espera en una silla.</p><p>El doctor te susurra: «<mark class="clave">Tienes cinco minutos para destrabar esto</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedir un cuarto intermedio, llamar al gerente y proponerle un paquete: S/ 600 de bono, movilidad garantizada por escrito y un adelanto de uniformes para diciembre. Volver a la mesa solo con lo que él apruebe.',
        res: { q: 'buena', fx: { confianza: 4, cumplimiento: 4, etica: 3 }, rel: { lucho: 1, arturo: 1 }, flags: ['paquete_propuesto'], cartera: { bono: 'Paquete aprobado: 600 + movilidad + uniformes en diciembre' },
          out: 'El gerente gruñe por teléfono, pero aprueba el adelanto de uniformes. En la mesa, Lucho consulta a su comisión en voz baja durante diez minutos larguísimos. Vuelve: «Firmamos. Por la movilidad».',
          pro: { ok: 'Mueves lo que puedes mover dentro del mandato y le das a la otra parte algo que de verdad le importa.', risk: 'El sindicato se queda debajo de su cifra, y Lucho tendrá que explicarlo a la base.', info: 'A veces lo que destraba no es el monto, sino lo que pesa en la vida de la gente.' },
          kusi: ['celebra', '¡Destrabado sin romper el mandato!'] } },
      { id: 'b', label: 'Partir la diferencia y cerrar en S/ 650: son cincuenta soles, la gerencia no va a romper un acuerdo por eso y se firma hoy.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -3, confianza: 3 }, rel: { lucho: 1, arturo: -1 }, flags: ['acuerdo_sin_mandato'], cartera: { bono: 'S/ 650 sin aprobación' },
          out: 'Lucho acepta en el acto. El doctor se queda mirando el techo: son 22 mil soles que nadie aprobó. El gerente lo leerá en el acta.',
          pro: { ok: 'Cierras rápido.', risk: 'Superar el mandato sin consultar, aunque sea poco, compromete a la empresa y tu credibilidad interna.' },
          kusi: ['preocupado', 'Cincuenta soles… sin permiso.'] } },
      { id: 'c', label: 'Proponer firmar hoy un acta parcial con todo lo acordado (uniformes, movilidad y constancia del plan de horas) y llevar el bono a conciliación ante la Autoridad de Trabajo.',
        res: { q: 'aceptable', fx: { cumplimiento: 4, confianza: 0, tiempo: -2 }, rel: { lucho: 0 }, flags: ['conciliacion_propuesta'], cartera: { bono: 'Pendiente: conciliación' },
          out: 'Lucho lo piensa. «Por lo menos lo demás queda firmado.» Acepta, sin alegría. La base no tendrá bono en diciembre, todavía.',
          pro: { ok: 'Aseguras lo acordado y usas la etapa que la ley prevé para lo que falta.', risk: 'El conflicto por el bono sigue abierto y la base puede impacientarse.' },
          kusi: ['pensando', 'Medio acuerdo… y una puerta abierta.'] } },
    ],
    rules: [[LEY, 'TUO de la LRCT: si el trato directo no logra acuerdo, se puede pasar a la conciliación.'], [POL, 'Cualquier cambio sobre el mandato se consulta a la gerencia antes de ofrecerse.']],
    mirada: {
      ve: 'Los impasses se destraban moviendo variables, no solo montos: un plazo, una garantía, un beneficio que pesa en la vida diaria. Y si no hay acuerdo, la ley tiene un siguiente paso.',
      visual: { tipo: 'balanza', a: { t: 'Partir la diferencia', items: ['Firma inmediata', 'Sin mandato', 'Problema con la gerencia'] }, b: { t: 'Paquete consultado', items: ['600 dentro del mandato', 'Movilidad garantizada', 'Uniformes adelantados'] } },
    },
  },
  {
    id: 'q5', t: '15:40', ch: 'presencial', who: 'lucho', titulo: 'Lo que teme la base', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Pasillo, junto a la máquina de café', show: ['personas', 'confianza', 'calidad'],
    body: (n, F) => `<p>Mientras Valeria imprime el acta${F.has('conciliacion_propuesta') ? ' parcial' : ''}, Lucho y doña Teodora toman café de máquina contigo en el pasillo. Lucho se ve cansado: estas dos semanas también fueron largas para él.</p><p>Antes de firmar, <mark class="clave">tienes dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Lucho y doña Teodora.',
    opts: [
      { id: 'miedo', label: '¿Qué es lo que más miedo le da a la base de este acuerdo?', info: 'Doña Teodora: «Que sea como la otra vez: que se firme bonito y en marzo nadie se acuerde». Lucho asiente.' },
      { id: 'lectura', label: '¿Cómo quieren que se le comunique a la base?', info: 'Lucho: «Leído en el comedor, por los dos. Que no haya un papel de la empresa diciendo una cosa y nosotros otra».' },
      { id: 'seguimiento', label: '¿Qué les ayudaría a confiar en que se cumplirá?', info: 'Jhon, que se acerca: «Una reunión cada tres meses para revisar qué se cumplió. Con acta».' },
      { id: 'lucho', label: 'Y a usted, ¿qué le preocupa?', info: 'Lucho se queda callado. «Que digan que me vendí. Siempre dicen eso del que firma.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, confianza: 3 }, rel: { lucho: picks.includes('lucho') ? 1 : 0 },
      flags: ['temores_escuchados'],
      cartera: { firma: picks.includes('seguimiento') ? 'Propuesta: revisión trimestral con acta' : 'Lista para firmar' },
      out: picks.includes('seguimiento') ? 'Le propones a Valeria agregar una línea: revisión trimestral del cumplimiento, con acta. Ella la escribe a mano antes de imprimir.' : 'Anotas lo que te dicen. No cambia el acta, pero cambia cómo la vas a leer en el comedor.',
      kusi: ['curioso', picks.includes('lucho') ? 'Detrás del dirigente, una persona.' : 'Escuchar antes de firmar.'],
    }),
    rules: [[BP, 'Antes de firmar, pregunta qué teme la otra parte: es lo que tendrás que cuidar al cumplir.']],
    mirada: {
      ve: 'La firma no es el final de una negociación: es el comienzo del cumplimiento. Saber qué teme la base te dice dónde tienes que ser más cuidadosa los próximos meses.',
      visual: { tipo: 'mensaje', titulo: 'Lo que anotaste', txt: 'Miedo: que se firme bonito y en marzo nadie se acuerde. Comunicarlo leído en el comedor, a dos voces. Revisión trimestral con acta. Lucho: «Que digan que me vendí».' },
    },
  },
  {
    id: 'q6', t: '17:25', ch: 'presencial', who: 'arturo', titulo: 'El correo de las 17:20', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Sala de reuniones, con el acta impresa', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>El acta${F.has('conciliacion_propuesta') ? ' parcial' : ''} está impresa, las dos comisiones sentadas, los lapiceros abiertos. Y entra el correo del gerente: «agreguen que el sindicato se desiste de la denuncia ante SUNAFIL. Si no, no firmen».</p><p>El doctor lee y te pasa el celular. Lucho todavía no sabe nada. <mark class="clave">Todos esperan para firmar</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle al doctor que esa cláusula no se puede pedir: el derecho a denunciar no se negocia, y las horas ya se están pagando por otra vía. Firmar lo acordado y que Valeria hable con el gerente.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 4, confianza: 3 }, rel: { arturo: 1, lucho: 1 }, flags: ['acta_firmada'], cartera: { firma: 'Firmada 17:40 por ambas comisiones' },
          out: 'El doctor respira hondo, guarda el celular y toma el lapicero. Firman las dos comisiones a las 17:40. Valeria sale al pasillo a llamar al gerente. Tú no oyes lo que dice, pero oyes que no grita.',
          pro: { ok: 'Proteges la buena fe de la firma y el derecho de los trabajadores a acudir a la autoridad.', risk: 'El gerente puede sentirse desobedecido.', info: 'Una orden ilegal no se cumple: se explica por qué no y se lleva a quien puede corregirla.' },
          kusi: ['celebra', '¡Firmado limpio!'] } },
      { id: 'b', label: 'Pedir al sindicato una hora de cuarto intermedio para aclarar «un tema interno» con la gerencia, y firmar mañana temprano.',
        res: { q: 'aceptable', fx: { confianza: -3, tiempo: -3, cumplimiento: 1 }, rel: { lucho: -1 }, flags: ['firma_postergada'], cartera: { firma: 'Postergada a mañana' },
          out: 'Lucho entrecierra los ojos: «¿Un tema interno, a esta hora?». Se van. Nadie sabe qué pasó, y eso en una planta es peor que saberlo.',
          pro: { ok: 'No firmas contra la instrucción del gerente sin hablarlo.', risk: 'Postergar en el último minuto, sin explicación, siembra la sospecha de que la empresa se echa atrás.' },
          kusi: ['preocupado', 'Tan cerca…'] } },
      { id: 'c', label: 'Proponerle a Lucho la cláusula del gerente: «es una formalidad, las horas ya se pagan igual».',
        res: { q: 'riesgosa', fx: { etica: -7, confianza: -6 }, rel: { lucho: -1, arturo: -1 }, flags: ['clausula_denuncia'], cartera: { firma: 'Sin firma: el sindicato se levantó' },
          out: 'Lucho lee la frase en voz alta para su comisión. Se levanta despacio. «Dos semanas para esto.» Salen los tres. Doña Teodora no te mira.',
          pro: { ok: 'Cumples la orden del gerente.', risk: 'Condicionar la firma al retiro de una denuncia es presionar contra un derecho; destruye en un minuto la confianza de dos semanas.' },
          kusi: ['triste', 'Dos semanas, en una frase…'] } },
    ],
    rules: [[LEY, 'TUO de la LRCT, art. 54: las partes negocian de buena fe y se abstienen de acciones lesivas a la contraria.'], [LEY, 'Ley 28806: acudir a la inspección del trabajo es un derecho de los trabajadores.']],
    mirada: {
      ve: 'El último minuto es cuando más se pone a prueba un negociador: el cansancio y la presión empujan a ceder en lo que no se debe. Saber decir «esto no» es tan importante como saber decir «sí».',
      visual: { tipo: 'balanza', a: { t: 'Meter la cláusula', items: ['Contento el gerente', 'Derecho condicionado', 'El sindicato se levanta'] }, b: { t: 'Firmar lo acordado', items: ['Buena fe intacta', 'La denuncia sigue su curso', 'Las horas se pagan igual'] } },
    },
  },
  {
    id: 'q7', t: '18:30', ch: 'presencial', who: null, titulo: 'El comedor', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Comedor de la planta, cambio de turno', show: ['personas', 'confianza'],
    body: (n, F) => `<p>${F.has('acta_firmada') ? 'Con el acta firmada, el comedor está lleno: los que salen y los que entran.' : F.has('clausula_denuncia') ? 'No hay acta firmada. El comedor está lleno igual: todos quieren saber qué pasó.' : 'El acta no se firmó hoy, pero el comedor está lleno: todos quieren saber.'} Huele a café y a pan con camote.</p><p>${F.has('temores_escuchados') ? 'Lucho dijo que lo quería leído a dos voces.' : 'Alguien tiene que hablar.'} <mark class="clave">¿Cómo se comunica?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Leerlo a dos voces con Lucho: él lee los puntos y tú, los plazos y lo que falta.',
        res: { q: null, fx: { personas: 4, confianza: 4 }, rel: { lucho: 1 }, flags: ['lectura_conjunta'],
          out: 'Lucho lee «movilidad garantizada desde el 1 de diciembre» y alguien aplaude al fondo. Tú lees las fechas. Nadie grita. Al final, doña Teodora te ofrece un pan con camote.',
          kusi: ['feliz', 'Una sola versión, dos voces.'] } },
      { id: 'b', label: 'Que lo comunique el doctor, con un aviso escrito en el grupo de la empresa.',
        res: { q: null, fx: { personas: -1, confianza: -1 },
          out: 'El aviso sale a las 19:00. A las 19:10, el sindicato manda el suyo. Dicen casi lo mismo, pero no igual, y en una planta eso basta para una semana de rumores.',
          kusi: ['pensando', 'Dos papeles, dos versiones.'] } },
    ],
    rules: [[BP, 'Comunica el resultado de la negociación junto con la contraparte: una sola versión vale más que dos comunicados.']],
    mirada: { ve: 'Lo que pasa en la mesa solo existe para la planta cuando se cuenta. Contarlo juntos, con las mismas palabras del acta, es la primera forma de cumplirla.' },
  },
];
