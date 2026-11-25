// Jefe/a de Relaciones Laborales · Capítulo 9 · «El acuerdo» · Semana 2, jueves.
// Hilo: tercer día de huelga. La fórmula de la reunión extraproceso existe; falta convencer a la gerencia de firmarla
// tal cual, revisar el texto con la junta del sindicato y planificar un retorno seguro.
// Normas citadas:
// - Constitución, art. 28: la convención colectiva tiene fuerza vinculante en el ámbito de lo concertado; el Estado
//   garantiza la libertad sindical (docs/normas/txt).
// - D.S. 019-2006-TR, arts. 25.10 y 25.12: actos contra la libertad sindical y discriminación por actividad sindical
//   (docs/normas/txt).
// - Ley 29783, Ley de Seguridad y Salud en el Trabajo: el empleador garantiza la prevención y promueve la participación
//   de los trabajadores en la seguridad (docs/normas/txt), como base del comité paritario de monitoreo.
// - TUO de la LRCT (D.S. 010-2003-TR): durante la huelga se suspenden los contratos de quienes la acatan y esos días no
//   se pagan (principio, sin artículo).
//   https://elperuano.pe/noticia/286407-servicios-minimos-efectos-de-incumplir-la-normativa
// Las cifras y el acta son ficticias.

export const CAP = {
  n: 9, titulo: 'El acuerdo', dia: 'Semana 2, jueves', foto: 'assets/foto/acuerdo.webp',
  lugar: 'Fundición del Sur · Gerencia y sala de capacitación',
  inicio: '07:20', fin: '19:40', cierreHora: '19:30',
  apertura: 'Jueves, tercer día de huelga. En la garita la olla común huele a sopa de quinua. En tu escritorio, la fórmula de Moquegua y un mensaje del gerente a las 6:02: «Antes de firmar, tenemos que hablar».', boton: 'Preparar la conversación',
  kusi: 'El último tramo es el más frágil. ¡Cabeza fría y palabra firme!',
  lead: 'Llevaste argumentos que la gerencia podía escuchar, defendiste lo que hacía aceptable el acuerdo, limpiaste el texto del acta, resististe la presión de último minuto y dejaste listo un retorno seguro.',
  reflexion: '¿Qué tuviste que sostener hoy que, hace dos semanas, quizás habrías cedido?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'gerente', p: 'Convencer al gerente', j: 'Ing. Ricardo Paredes', d: 0, e: '08:00' },
  { id: 'acta', p: 'Texto del acta de acuerdo', j: 'Silvia · abogado del sindicato', d: 0, e: 'Borrador de anoche' },
  { id: 'firma', p: 'Firma con la junta del sindicato', j: 'Teodoro Cutipa', d: 0, e: '10:00, se alarga' },
  { id: 'retorno', p: 'Plan de retorno', j: 'Ing. Wilber Chambi', d: 0, e: 'Sin armar' },
  { id: 'asamblea', p: 'Asamblea de ratificación', j: 'Sindicato mayoritario', d: 0, e: 'Por fijar' },
];

export const FUTURO = {
  gerente_convencido: ['El gerente firmó convencido, con argumentos de costo, seguridad y riesgo legal.', 'Defenderá el acuerdo ante Lima. Capítulo 10.'],
  comite_paritario: ['El monitoreo de gases quedó con comité paritario y el bono para todos los comprendidos.', 'Es lo que Cutipa podrá mostrar en la asamblea. Capítulo 10.'],
  bono_selectivo: ['El bono quedó solo para quienes regresen primero.', 'La junta lo descubrirá; la asamblea lo leerá como castigo. Capítulo 10.'],
  comite_empresa: ['El monitoreo de gases quedó solo en manos de la empresa.', 'La base duda de que esta vez sea en serio. Capítulo 10.'],
  acta_limpia: ['El acta final quedó clara, legal y sin trampas.', 'La asamblea votará sobre un texto limpio. Capítulo 10.'],
  acta_trampa: ['El acta final quedó con una cláusula que la debilita.', 'El abogado del sindicato la impugnará antes de la asamblea. Capítulo 10.'],
  presion_resistida: ['No cediste el pago de los días de huelga a último minuto, pero ofreciste explicarlo en la asamblea.', 'Te invitarán a la asamblea del lunes. Capítulo 10.'],
  dias_pagados: ['Cediste el pago de la mitad de los días de huelga a último minuto.', 'Lima lo cuestionará y mantenimiento lo pedirá. Capítulo 10.'],
  firma_rota: ['Dijiste «lo toman o lo dejan» y la junta se levantó de la mesa.', 'El acuerdo quedó en el aire. Capítulo 10.'],
  retorno_seguro: ['El plan de retorno tiene charla de seguridad, inspección y carga gradual del horno.', 'El lunes el horno vuelve sin accidentes. Capítulo 10.'],
  comunicado_acuerdo: ['Comunicaste el preacuerdo como «sujeto a ratificación», sin cantar victoria.', 'La base llega a la asamblea informada. Capítulo 10.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Silvia, Jhon y tú', c: '#0F2A3D' },
  gerencia: { n: 'Ing. Ricardo Paredes', sub: 'Gerente general', who: 'gerencia' },
  sindicato: { n: 'Teodoro Cutipa', sub: 'Secretario general · sindicato mayoritario', who: 'sindicato' },
  abogado: { n: 'Dra. Silvia Medina', sub: 'Abogada laboralista', who: 'abogado' },
  wilber: { n: 'Ing. Wilber Chambi', sub: 'Superintendente de Fundición', c: '#8A3B12' },
  marleny: { n: 'Marleny Quispe', sub: 'Secretaria general · sindicato de mantenimiento', c: '#5B3E8C' },
  personal: { n: 'Comunicado a todo el personal', sub: 'Murales, correo y supervisores', c: '#7A1F2B' },
};

export const WSP = [
  { chat: 'gerencia', t: '06:02', de: 'Ing. Paredes', txt: 'Antes de firmar, tenemos que hablar.' },
  { chat: 'grupo', t: '06:40', de: 'Jhon', txt: 'Jefa, anoche Lima volvió a pedir la fórmula. Tres días de pérdidas los asustaron. Silvia dice que hoy se puede firmar.', si: 'formula_rechazada' },
  { chat: 'sindicato', t: '07:15', de: 'Teodoro Cutipa', txt: 'A las 10 con la junta y el abogado. Kevin, del turno C, viene con preguntas. Prepárese.', si: 'cutipa_confirmado' },
  { chat: 'sindicato', t: '07:15', de: 'Teodoro Cutipa', txt: 'A las 10. La base está nerviosa. Si algo no está claro, no firmo.', no: 'cutipa_confirmado' },
  { chat: 'marleny', t: '13:00', de: 'Marleny', txt: 'Me enteré del acuerdo. En enero nos sentamos, ¿no? No se olvide de la ropa térmica.', si: 'marleny_respeto' },
  { chat: 'wilber', t: '18:20', de: 'Wilber', txt: 'El plan de retorno está bien. El horno vuelve a carga completa en 48 horas, no antes. Que nadie apure.', si: 'retorno_seguro' },
];

export const CORREOS = [
  { t: '06:30', de: 'Óscar Valdivia · Finanzas', para: 'Jefatura de Relaciones Laborales', asunto: 'Para tu reunión de las 8', html: '<p>Tres días de huelga: unos S/ 12.6 millones de margen perdido. El acuerdo de Moquegua, con bono incluido, cuesta menos que eso en todo su primer año.</p><p>Úsalo si te sirve. Óscar</p>' },
];

export const QUIZ = [
  { q: 'Un bono por cierre de pliego solo para quienes regresen primero al trabajo…', ops: ['Es un incentivo válido', 'Castiga a quienes ejercieron la huelga: es discriminación sindical', 'Es obligatorio', 'Es lo usual'], ok: 1, por: 'Tratar distinto según la participación en la huelga vulnera la libertad sindical (D.S. 019-2006-TR, art. 25.12).' },
  { q: 'Un comité paritario para el monitoreo de gases…', ops: ['Es una concesión inútil', 'Da credibilidad al compromiso de seguridad y promueve la participación de los trabajadores', 'Está prohibido', 'Reemplaza al comité de SST'], ok: 1, por: 'La participación de los trabajadores en la seguridad es un principio de la Ley 29783 y hace creíble el compromiso.' },
  { q: 'Lo acordado en un convenio colectivo…', ops: ['Es solo una referencia', 'Tiene fuerza vinculante en el ámbito de lo concertado', 'Puede ignorarse si cambia el gerente', 'Vence al mes'], ok: 1, por: 'Constitución, art. 28.' },
  { q: 'A último minuto, un dirigente exige el pago de los días de huelga. Lo más prudente es…', ops: ['Ceder para cerrar', 'Sostener lo acordado y ofrecer explicar las razones a la base', 'Amenazar con retirar todo', 'Levantarse de la mesa'], ok: 1, por: 'Ceder a última hora reabre todo; amenazar rompe la mesa. Sostener y explicar protege el acuerdo.' },
  { q: 'Después de una huelga en una fundición, el retorno debe ser…', ops: ['Inmediato y a plena carga', 'Gradual, con charla de seguridad e inspección de equipos', 'Solo con los que no pararon', 'Con cartas de compromiso individuales'], ok: 1, por: 'Volver a plena carga de golpe es el momento de más riesgo para las personas y los equipos.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '07:30', ch: 'documento', who: null, titulo: 'Argumentos para el gerente', banner: 'assets/esc/piensa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'confianza', 'etica'],
    body: (n, F) => `<p>${F.has('formula_rechazada') ? 'Ayer la empresa rechazó la fórmula. Anoche, Lima pidió retomarla. El gerente no quiere quedar como el que cedió.' : 'Lima aprobó la fórmula como base. Pero el gerente tiene dudas propias.'} Tienes media hora antes de verlo.</p><p><mark class="clave">Elige tres argumentos</mark> que él pueda escuchar.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres argumentos que llevarás.', boton: 'Llevar estos', resumen: 'Llevas',
    cols: ['Argumento', 'Qué muestra'],
    rows: [
      { id: 'costo', cells: ['El costo de tres días de huelga contra el costo del acuerdo en un año', 'Que firmar es más barato que esperar'] },
      { id: 'german', cells: ['La historia de Germán Huanca, sacado en ambulancia de convertidores', 'Por qué la seguridad pesa más que la plata'] },
      { id: 'legal', cells: ['Lo que la empresa arriesga si el conflicto llega a una inspección', 'Que alargar tiene costos legales'] },
      { id: 'renuncia', cells: ['Que renuncias si no firma', 'Presión personal'] },
      { id: 'votos', cells: ['Una lista de quiénes votarían a favor en la asamblea', 'Que el acuerdo pasará'] },
    ],
    score: { costo: 3, german: 3, legal: 2, renuncia: -3, votos: -4 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, etica: picks.includes('votos') ? -4 : 1, confianza: picks.includes('renuncia') ? -2 : 1 },
        cartera: { gerente: q === 'buena' ? 'Costo, seguridad y riesgo legal' : 'Argumentos débiles o riesgosos' },
        out: picks.includes('german') ? 'Llamas a Germán Huanca para pedirle permiso de contar su historia. Te dice: «Cuéntela. Para eso sirve».' : 'Vas con números y leyes. Te falta lo que al gerente no le han contado.',
        pro: { ok: 'Un gerente se convence con su propio idioma: costo, riesgo y una historia con nombre.', risk: 'Una lista de cómo votará cada trabajador es vigilancia sindical; una amenaza de renuncia gasta tu credibilidad.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Argumentos que llegan!' : 'Ojo con esos argumentos…'],
      };
    },
    mirada: {
      ve: 'Convencer hacia arriba es tan difícil como negociar con el sindicato. El gerente no necesita que le digan que es justo: necesita entender por qué le conviene y qué historia no le habían contado.',
      visual: { tipo: 'matriz', x: 'Fuerza para el gerente', y: 'Riesgo para ti', cuadrantes: ['Úsalo con cuidado', 'Evítalo', 'Úsalo', 'Complemento'], items: [['Costo comparado', .85, .15], ['Historia de Germán', .8, .2], ['Riesgo legal', .65, .2], ['Amenaza de renuncia', .5, .85], ['Lista de votos', .4, .95]] },
    },
  },
  {
    id: 'i2', t: '08:10', ch: 'presencial', who: 'gerencia', titulo: 'Las dudas del gerente', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Gerencia General', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>El gerente escucha tus argumentos con las manos juntas. ${F.has('gases_historia') || F.has('conciliadora_escuchada') ? 'Cuando le cuentas lo de Germán Huanca, se queda callado un rato. «Yo era superintendente cuando eso pasó.»' : 'Asiente con los números, pero sigue tenso.'}</p><p>«Firmo. Pero con dos cambios: <mark class="clave">el bono, solo para los que vuelvan el primer día, y el monitoreo lo manejamos nosotros, sin comité</mark>. No quiero al sindicato metido en mis convertidores.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que el bono selectivo castiga la huelga y que el comité paritario es lo que hace creíble la seguridad. Le propones que el comité lo presida Wilber.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 3 }, rel: { gerencia: 1 }, flags: ['gerente_convencido', 'comite_paritario'], cartera: { gerente: 'Convencido: bono para todos, comité presidido por Wilber' },
          out: 'El gerente se frota los ojos. «¿Wilber preside?» Asientes. «Entonces sí. Pero el informe del comité me llega a mí primero.» Es justo. Lo anotas.',
          pro: { ok: 'Defiendes lo que hace aceptable el acuerdo y le das al gerente el control que necesita.', info: 'Que Wilber presida da garantía técnica a ambos lados.' },
          kusi: ['celebra', '¡Convenciste sin ceder lo esencial!'] } },
      { id: 'b', label: 'Aceptar el monitoreo sin comité, pero mantener el bono para todos.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: 1 }, rel: { gerencia: 1 }, flags: ['gerente_convencido', 'comite_empresa'], cartera: { gerente: 'Firma; monitoreo solo de la empresa' },
          out: 'El gerente firma. En la mesa, Cutipa leerá «monitoreo a cargo de la empresa» y recordará que eso mismo se prometió el año pasado.',
          pro: { ok: 'Salvas el bono para todos.', risk: 'Sin participación del sindicato, la promesa de seguridad suena a la anterior, la que no se cumplió.' },
          kusi: ['pensando', 'La promesa de siempre, con otra fecha…'] } },
      { id: 'c', label: 'Aceptar los dos cambios: lo importante es que firme hoy.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -5 }, rel: { gerencia: 1, sindicato: -1 }, flags: ['bono_selectivo', 'comite_empresa'], cartera: { gerente: 'Firma con bono selectivo y sin comité' },
          out: 'El gerente firma su parte, aliviado. A las diez, el abogado del sindicato leerá la cláusula del bono en voz alta, dos veces.',
          pro: { ok: 'Consigues la firma del gerente.', risk: 'Un bono solo para quienes regresen primero castiga a quienes hicieron huelga (D.S. 019-2006-TR, art. 25.12).' },
          kusi: ['indignado', '¡Esa cláusula castiga la huelga!'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, art. 25.12: discriminación por actividad sindical.'], [LEY, 'Ley 29783: participación de los trabajadores en la seguridad y salud en el trabajo.']],
    mirada: {
      ve: 'El último «sí, pero» de la gerencia suele traer los cambios que rompen el acuerdo. La clave es distinguir qué control necesita el gerente de verdad y dárselo sin quitarle al acuerdo lo que lo hace aceptable.',
      visual: { tipo: 'cambio', titulo: 'Del «sí, pero» al «sí»', pares: [['Bono solo para los que vuelvan primero', 'Bono para todos los comprendidos'], ['Monitoreo sin sindicato', 'Comité paritario presidido por Wilber'], ['«No los quiero en mis convertidores»', '«El informe me llega primero»']] },
    },
  },
  {
    id: 'i3', t: '10:20', ch: 'documento', who: null, titulo: 'El texto del acta', banner: 'assets/foto2/revisan.webp', lugar: 'Sala de capacitación', show: ['cumplimiento', 'calidad', 'confianza'],
    body: () => `<p>La junta del sindicato llega completa, con su abogado, un joven de Tacna con lentes gruesos. Silvia proyecta el borrador del acta. Cada uno lee en silencio.</p><p>Antes de que alguien lo encuentre por ti, <mark class="clave">marca lo que hay que corregir</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que hay que corregir en el acta.',
    doc: { t: 'Acta de acuerdo de solución del pliego de reclamos', sub: 'Borrador · Fundición del Sur y Sindicato de Trabajadores' },
    lines: [
      { id: 'partes', t: 'Comparecen las comisiones de la empresa y del sindicato, con las firmas de sus miembros.' },
      { id: 'aumento', t: 'Aumento de S/ 5 diarios desde la firma y S/ 1 adicional a los doce meses.' },
      { id: 'gases', t: 'Monitoreo de gases en convertidores desde el 1 de diciembre, con un comité paritario.' },
      { id: 'ilegal', t: 'El sindicato reconoce que la medida de fuerza ocasionó graves perjuicios a la empresa.', bad: BP, why: 'Una frase de culpa que nadie necesita y que el sindicato no podrá defender en su asamblea. Saca al acuerdo de lo concreto.' },
      { id: 'reserva', t: 'La empresa se reserva el derecho de dejar sin efecto la cláusula de no represalias si se repiten medidas de fuerza.', bad: LEY, why: 'Convierte la protección en una amenaza futura contra el ejercicio de la huelga, un derecho constitucional (Constitución, art. 28; D.S. 019-2006-TR, art. 25.10).' },
      { id: 'dias', t: 'Los días de huelga no se pagan; el descuento se fracciona en tres meses.' },
      { id: 'fecha', t: 'El acuerdo entra en vigencia con su firma, sin necesidad de ratificación.', bad: BP, why: 'El sindicato decide según su estatuto. Si el acta ignora la asamblea, la base sentirá que firmaron por ella.' },
      { id: 'vigencia', t: 'Vigencia del convenio: un año.' },
    ],
    res: ({ missLey, hitsBp }) => {
      const q = !missLey && hitsBp >= 2 ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: missLey ? -5 : 5, calidad: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 3 : 0 },
        flags: missLey ? ['acta_trampa'] : ['acta_limpia'],
        cartera: { acta: missLey ? 'Con una reserva que amenaza la huelga' : 'Limpia y sujeta a ratificación' },
        out: missLey ? 'El abogado del sindicato encuentra la reserva en el segundo párrafo. Se quita los lentes. «Esto no lo firmamos.» Pierdes una hora.' : 'Tú misma propones tachar tres frases antes de que el abogado del sindicato abra la boca. Él te mira por encima de los lentes: «Iba a pedir lo mismo».',
        pro: { ok: 'Corregir tu propio texto antes de que lo haga la otra parte es construir confianza.', risk: 'Una cláusula escondida, si se descubre, hace dudar de todo el acta.' },
        kusi: missLey ? ['preocupado', 'Esa reserva casi lo rompe todo…'] : ['celebra', '¡Te adelantaste a corregir!'],
      };
    },
    rules: [[LEY, 'Constitución, art. 28: reconoce la huelga y da fuerza vinculante a lo concertado.']],
    mirada: {
      ve: 'Un acta de fin de huelga se lee con desconfianza. Las frases de culpa, las reservas y los atajos sobre la ratificación son las que más rápido rompen un acuerdo ya hecho.',
      visual: { tipo: 'cambio', titulo: 'Del borrador al acta', pares: [['«Reconoce los graves perjuicios»', '(se elimina)'], ['Reserva sobre la no represalia', 'No represalia sin condiciones'], ['«Sin necesidad de ratificación»', '«Sujeto a ratificación de la asamblea»']] },
    },
  },
  {
    id: 'i4', t: '12:40', ch: 'presencial', who: 'sindicato', titulo: 'Kevin, del turno C', banner: 'assets/foto2/tension.webp', lugar: 'Sala de capacitación', show: ['confianza', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Cuando todo parece listo, Kevin Mamani, 26 años, del turno C, se pone de pie. ${F.has('cutipa_expuesto') ? 'Desde el audio, el turno C no le cree a nadie.' : ''} «Tres días sin sueldo. Mi hija tiene que pagar la matrícula. <mark class="clave">Si no nos pagan los días, el turno C no vota a favor</mark>.»</p><p>Cutipa te mira. La junta te mira. El gerente, por WhatsApp, también.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reconocer el esfuerzo, sostener que los días no se pagan, recordar el descuento fraccionado y ofrecer ir a la asamblea a explicar con números por qué el acuerdo es lo mejor posible.',
        res: { q: 'buena', fx: { confianza: 4, cumplimiento: 3, etica: 2 }, rel: { sindicato: 1 }, flags: ['presion_resistida'], cartera: { firma: 'Firmada a las 14:10', asamblea: 'Lunes; te invitan a explicar' },
          out: 'Kevin se sienta, sin convencerse. Cutipa dice: «Si usted va a la asamblea y da la cara, firmamos». A las 14:10 se firma. Hay aplausos cortos y nadie sonríe del todo.',
          pro: { ok: 'Sostienes lo acordado sin cerrar la conversación.', risk: 'Ir a la asamblea te expone: tendrás que responder lo que pregunten.', info: 'Prepara números simples: cuánto gana cada uno en un año con el aumento.' },
          kusi: ['celebra', '¡Firme y con la cara al frente!'] } },
      { id: 'b', label: 'Ceder el pago de la mitad de los días para cerrar hoy.',
        res: { q: 'aceptable', fx: { confianza: 3, calidad: -3 }, rel: { sindicato: 1, gerencia: -1 }, flags: ['dias_pagados'], cartera: { firma: 'Firmada con pago parcial de días', asamblea: 'Lunes' },
          out: 'Kevin sonríe. Se firma a las 13:30. El gerente te escribe una sola palabra: «¿Autorizado?». Y Marleny, a las tres: «Eso también nos toca, ¿no?».',
          pro: { ok: 'Cierras rápido y calmas al turno C.', risk: 'Ceder a última hora, fuera del mandato, enseña que la presión final funciona y abre un precedente.' },
          kusi: ['pensando', 'Cerraste… y abriste otra puerta.'] } },
      { id: 'c', label: 'Decir que el acuerdo se toma o se deja: la empresa ya cedió demasiado.',
        res: { q: 'riesgosa', fx: { confianza: -5, personas: -3 }, rel: { sindicato: -1 }, flags: ['firma_rota'], cartera: { firma: 'Sin firma: la junta se levantó' },
          out: 'Kevin sale dando un portazo. Dos miembros de la junta lo siguen. Cutipa recoge sus papeles despacio. «Así no, jefa.»',
          pro: { ok: 'Marcas un límite.', risk: 'Un ultimátum frente a la junta deja al dirigente sin forma de defender el acuerdo.' },
          kusi: ['triste', 'Tan cerca…'] } },
    ],
    rules: [[BP, 'Sostén lo acordado sin humillar: el que pregunta a último minuto representa a una parte de la base.']],
    mirada: {
      ve: 'Casi todos los acuerdos tienen un «último minuto». No es mala fe: es la base que necesita sentir que se peleó hasta el final. Lo que se responde ahí decide si el acuerdo sobrevive a la asamblea.',
      visual: { tipo: 'balanza', a: { t: 'Ceder o romper', items: ['Pago de días fuera de mandato', 'Precedente', 'O la junta se levanta'] }, b: { t: 'Sostener y explicar', items: ['Descuento fraccionado', 'Dar la cara en la asamblea', 'Acuerdo intacto'] } },
    },
  },
  {
    id: 'i5', t: '15:30', ch: 'llamada', who: null, titulo: 'El retorno', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de Relaciones Laborales', show: ['personas', 'calidad', 'cumplimiento'],
    body: () => `<p>El sindicato suspende el piquete hasta la asamblea del lunes, y la gente empezará a volver mañana. Pero un horno en espera no vuelve a plena carga en una hora.</p><p><mark class="clave">Tres llamadas antes de decidir cómo se vuelve</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Ing. Wilber Chambi · Fundición', 'Contesta desde la sala de control', '«El horno necesita 48 horas para volver a carga completa. Si meto a todos el mismo turno, voy a tener gente cansada, apurada y oxidada. Así pasan los accidentes.»'],
      ['Germán Huanca · operador de convertidores', 'Contesta desde su casa', '«Me dijeron que contó lo mío. Gracias. Solo le pido una cosa: que el primer día no nos apuren.»'],
      ['Ing. Ricardo Paredes · Gerencia', 'Contesta con prisa', '«Quiero a todos adentro mañana a las seis, y que cada uno firme una carta de compromiso de no volver a parar.»'],
    ],
    prompt: '¿Cómo será el retorno?',
    choices: [
      { id: 'a', label: 'Retorno por turnos, con charla de seguridad e inspección de equipos antes de cargar el horno, y sin cartas de compromiso: nadie firma que renuncia a un derecho.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 5, calidad: 3 }, rel: { gerencia: 0 }, flags: ['retorno_seguro'], cartera: { retorno: 'Por turnos, con charla e inspección; sin cartas' },
          out: 'El gerente protesta por las cartas. Silvia zanja: «Una carta así no vale y además la va a leer la asamblea». Wilber arma los turnos en media hora.',
          pro: { ok: 'Proteges a las personas en el momento de más riesgo y evitas un papel que nadie puede firmar.', info: 'La primera charla de seguridad puede darla el comité paritario recién creado.' },
          kusi: ['feliz', '¡Volver sin apuros y sin papeles indebidos!'] } },
      { id: 'b', label: 'Retorno de todos a las seis, sin cartas, para recuperar producción lo antes posible.',
        res: { q: 'aceptable', fx: { personas: -2, calidad: -2, tiempo: 3 }, rel: { gerencia: 1 }, cartera: { retorno: 'Todos a las seis' },
          out: 'Wilber acepta de mala gana. Mañana a las seis habrá doscientas personas en la garita y un horno que no está listo para recibirlas.',
          pro: { ok: 'Recuperas producción más rápido.', risk: 'El retorno masivo a un horno que vuelve de la espera es el momento de mayor riesgo de accidente.' },
          kusi: ['preocupado', 'Apurar el retorno es apurar el riesgo…'] } },
      { id: 'c', label: 'Retorno por turnos, pero con la carta de compromiso que pide el gerente.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -4, personas: 1 }, rel: { gerencia: 1, sindicato: -1 }, flags: ['retorno_seguro'], cartera: { retorno: 'Por turnos, con cartas de compromiso' },
          out: 'Las cartas se imprimen. La primera la lee Kevin en la garita, en voz alta. El lunes, en la asamblea, será el tema principal.',
          pro: { ok: 'El retorno es seguro.', risk: 'Pedir que alguien firme que no volverá a hacer huelga es presionar contra un derecho constitucional.' },
          kusi: ['indignado', '¡Ese papel no se puede pedir!'] } },
    ],
    rules: [[LEY, 'Ley 29783: el empleador garantiza la prevención de riesgos en el trabajo.'], [LEY, 'Constitución, art. 28: la huelga es un derecho; nadie puede renunciar a él por una carta.']],
    mirada: {
      ve: 'El final de una huelga es un momento de riesgo físico y emocional: equipos que vuelven a operar, gente cansada y una gerencia que quiere recuperar lo perdido. Un retorno ordenado es parte del acuerdo.',
      visual: { tipo: 'cambio', titulo: 'Cómo se vuelve', pares: [['Todos a las seis', 'Por turnos'], ['Horno a plena carga de golpe', 'Carga gradual en 48 horas'], ['Carta de no volver a parar', 'Charla de seguridad']] },
    },
  },
  {
    id: 'i6', t: '17:20', ch: 'whatsapp', who: null, titulo: 'Contarlo bien', banner: 'assets/foto2/presentacion.webp', lugar: 'Oficina de Relaciones Laborales', show: ['confianza', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('firma_rota') ? 'No hubo firma. Igual tienes que decirle algo a 1,300 personas antes de que lo digan los audios.' : 'Hay acta firmada, sujeta a la asamblea del lunes.'} El gerente quiere un comunicado con el título «Fin de la huelga».</p><p><mark class="clave">Escríbelo sin cantar victoria</mark>.</p>`,
    type: 'compose', enviaA: 'personal', para: 'Para: Todo el personal · murales, correo y supervisores', boton: 'Publicar',
    prompt: 'Arma el comunicado eligiendo una frase de cada parte.',
    slots: [
      { id: 'titulo', t: 'Título', ops: [
        { id: 't1', t: 'Empresa y sindicato firman un acta de acuerdo, sujeta a ratificación de la asamblea.', ok: true, por: 'Exacto: falta la asamblea.' },
        { id: 't2', t: 'Fin de la huelga.', ok: false, por: 'Le quita a la asamblea una decisión que es suya.' },
      ] },
      { id: 'contenido', t: 'Qué incluye', ops: [
        { id: 'c1', t: 'El acta incluye aumento escalonado, monitoreo de gases, movilidad de madrugada, bono por cierre y no represalias.', ok: true, por: 'Hechos, para que nadie dependa de un audio.' },
        { id: 'c2', t: 'La empresa hizo un gran esfuerzo económico.', ok: false, por: 'Autoelogio que la base leerá con ironía.' },
      ] },
      { id: 'retorno', t: 'El retorno', ops: [
        { id: 'r1', t: 'El retorno será por turnos, con charla de seguridad. Tu supervisor te indicará tu horario.', ok: true, por: 'Lo práctico que todos preguntarán.' },
        { id: 'r2', t: 'Todos deben presentarse mañana a primera hora.', ok: null, por: 'Contradice el plan de Wilber.' },
      ] },
      { id: 'gracias', t: 'Cierre', ops: [
        { id: 'g1', t: 'Gracias a quienes sostuvieron los servicios mínimos y a ambas comisiones por su trabajo.', ok: true, por: 'Reconoce sin dividir.' },
        { id: 'g2', t: 'Gracias a quienes siguieron trabajando.', ok: false, por: 'Divide entre «leales» y huelguistas justo antes de la asamblea.' },
      ] },
    ],
    res: sel => {
      const malo = sel.titulo === 't2' || sel.gracias === 'g2';
      const buenas = ['t1', 'c1', 'r1', 'g1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malo ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : -2, personas: malo ? -3 : 3, cumplimiento: 2 },
        flags: q === 'buena' ? ['comunicado_acuerdo'] : [],
        cartera: { asamblea: q === 'buena' ? 'Base informada antes de la asamblea' : 'Comunicado con riesgos' },
        out: q === 'buena' ? 'Cutipa reenvía tu comunicado al grupo del sindicato con una línea: «Esto es lo que vamos a votar el lunes».' : malo ? 'Kevin fotografía el comunicado y escribe encima: «¿Fin? Eso lo decidimos nosotros».' : 'El comunicado informa, pero deja dudas sobre el retorno.',
        pro: { ok: 'Comunicar el acuerdo como «sujeto a ratificación» respeta a la asamblea y protege el resultado.', risk: 'Cantar victoria antes de tiempo le regala argumentos a quien quiere votar en contra.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Sin cantar victoria, bien hecho!' : 'Esa palabra puede costar votos…'],
      };
    },
    rules: [[BP, 'Un preacuerdo se comunica como lo que es: sujeto a ratificación.']],
    mirada: {
      ve: 'Entre la firma y la asamblea, el acuerdo es frágil. Un comunicado triunfalista convierte la votación en una pelea por el orgullo; uno sobrio la deja en lo que importa: el contenido.',
      visual: { tipo: 'mensaje', titulo: 'Sujeto a ratificación', txt: 'Empresa y sindicato firman un acta de acuerdo, sujeta a ratificación de la asamblea. Incluye aumento escalonado, monitoreo de gases, movilidad de madrugada, bono por cierre y no represalias. El retorno será por turnos, con charla de seguridad. Gracias a quienes sostuvieron los servicios mínimos y a ambas comisiones.' },
    },
  },
  {
    id: 'i7', t: '18:30', ch: 'documento', who: null, titulo: 'La primera charla', banner: 'assets/3d/scenes/planta.webp', lugar: 'Sala de control de la fundición', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>Wilber te pide ayuda con la charla de seguridad de mañana a las seis, la primera después de la huelga. Va a hablar frente a gente que estuvo tres días en el piquete.</p><p><mark class="clave">Ordena la charla</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los momentos de la charla de retorno. Usa las flechas.', boton: 'Entregar a Wilber',
    items: [
      { id: 'bienvenida', t: 'Bienvenida sin reproches: «Volvemos todos al mismo horno»', por: 'Nada de lo que pasó se discute en la charla de seguridad.' },
      { id: 'estado', t: 'Estado de los equipos después de tres días en espera', por: 'Saber qué encuentran es lo primero.' },
      { id: 'riesgos', t: 'Riesgos del arranque y lo que cambia en las primeras 48 horas', por: 'El arranque es el momento más peligroso.' },
      { id: 'comite', t: 'Presentación del comité paritario de monitoreo de gases', por: 'El primer acuerdo que se ve en la práctica.' },
      { id: 'preguntas', t: 'Preguntas y derecho a detener una tarea si no es segura', por: 'Cierra dando la palabra a quienes trabajan.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 3 : 1 },
        out: q === 'buena' ? 'Wilber copia el orden en una cartulina. «Nunca había empezado una charla dando la bienvenida.» Te vas a las 19:20, con el sol ya en el mar y la garita casi vacía.' : 'Wilber reordena: «Primero la bienvenida, si no, nadie escucha lo demás».',
        pro: { ok: 'El retorno empieza con una charla que cuida a las personas y muestra el acuerdo funcionando.', info: 'Lo que pase la primera semana dirá si el acuerdo se cumple.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Un arranque seguro!' : 'Primero, bienvenida.'],
      };
    },
    rules: [[LEY, 'Ley 29783: prevención de riesgos y participación de los trabajadores en la seguridad.']],
    mirada: {
      ve: 'La forma en que se vuelve de una huelga queda en la memoria tanto como la huelga. Una charla de seguridad sin reproches convierte el acuerdo en algo que se ve el primer día.',
      visual: { tipo: 'flujo', titulo: 'Charla de retorno', pasos: ['Bienvenida', 'Estado de equipos', 'Riesgos del arranque', 'Comité paritario', 'Preguntas'] },
    },
  },
];
