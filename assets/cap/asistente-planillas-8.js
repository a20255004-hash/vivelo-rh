// Asistente de Planillas · Capítulo 8 · «La PLAME» · Semana 2, miércoles.
// Hilo de las dos semanas: la gratificación de diciembre de 700 trabajadores de Sabor del Perú, el cierre de un local y la PLAME.
// Normas citadas:
// - Planilla Electrónica (PLAME): se declara mensualmente ante SUNAT a trabajadores, pensionistas, prestadores de servicios
//   y personal de terceros, según el cronograma de obligaciones mensuales que fija SUNAT por el último dígito del RUC.
//   No se cita una fecha exacta.
//   https://orientacion.sunat.gob.pe/9-pdt-601-planilla-electronica
//   https://orientacion.sunat.gob.pe/pdt-plame-0
//   https://tramitesperu.com/sunat/cronograma-sunat/
// - T-Registro: el alta del trabajador se registra dentro del día de ingreso (SUNAT), ya citado en otras temporadas.
// Empresas, personas y montos son ficticios.

export const CAP = {
  n: 8, titulo: 'La PLAME', dia: 'Semana 2, miércoles', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'Sabor del Perú · Oficina central, Lince',
  inicio: '08:00', fin: '19:30', cierreHora: '19:15',
  apertura: 'Miércoles. Hoy vence la PLAME de noviembre, según el cronograma de SUNAT para el último dígito del RUC de Sabor del Perú. Y mañana se paga la gratificación. Al llegar, ves en la sala a una señora de lentes que ordena papeles en filas perfectas.', boton: 'Entrar a la sala',
  kusi: 'Hoy dos áreas tienen que contar lo mismo. ¡Que los números se den la mano!',
  lead: 'Conociste a la contadora, conciliaste la planilla con Contabilidad, decidiste qué hacer con una diferencia a horas del vencimiento, armaste el informe y presentaste la PLAME.',
  reflexion: '¿Por qué crees que Planillas y Contabilidad casi nunca cuadran a la primera?',
  siguiente: { n: 9, titulo: 'El pago', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'plame', p: 'PLAME de noviembre', j: 'Hugo · Inés Quiroz', d: 0, e: 'Vence hoy' },
  { id: 'conc', p: 'Conciliación con Contabilidad', j: 'Inés Quiroz', d: 0, e: 'Sin empezar' },
  { id: 'banco', p: 'Archivo de la gratificación para el banco', j: 'Tesorería', d: 0, e: 'Se envía hoy, 17:00' },
  { id: 'treg', p: 'Altas y bajas en T-Registro', j: 'Tú', d: 0, e: 'Por revisar' },
];

export const FUTURO = {
  ines_conocida: ['Inés sabe que preguntas antes de suponer.', 'Te pedirá ayuda en el cierre de diciembre.'],
  conc_ok: ['Encontraste las diferencias reales entre Planillas y Contabilidad.', 'La PLAME salió conciliada.'],
  conc_floja: ['La conciliación quedó con diferencias sin explicar.', 'Inés las anotará para la auditoría.'],
  plame_conciliada: ['Declaraste la PLAME con lo conciliado y documentaste la diferencia pendiente.', 'Se regulariza en el periodo que corresponda.'],
  plame_forzada: ['Ajustaste la planilla para que cuadrara con Contabilidad.', 'La boleta y la declaración ya no dicen lo mismo.'],
  plame_tarde: ['Esperaste a cuadrar todo y la PLAME casi se vence.', 'Hugo la presentó a las 11:40 p. m.'],
  informe_ok: ['Tu informe de conciliación explica cada diferencia.', 'Inés lo usará de modelo.'],
  plame_presentada: ['La PLAME de noviembre está presentada, con constancia archivada.', 'Una cosa menos en el calendario.'],
  caja_asumida: ['Explicaste a Inés el pago fuera de planilla y cómo regularizarlo.', 'Inés confía en ti.'],
  caja_culpa: ['Dijiste que el pago fuera de planilla era cosa del local.', 'Inés lo comprobará por su cuenta.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Sabor del Perú', sub: 'Hugo y tú', c: '#2F6B3F' },
  hugo: { n: 'Hugo Salazar', sub: 'Analista de Planillas', who: 'hugo' },
  ines: { n: 'Inés Quiroz', sub: 'Contadora general', who: 'contadora' },
  gaby: { n: 'Gaby Ríos', sub: 'Administradora · local San Miguel', who: 'gaby' },
  wilder: { n: 'Wilder Pinto', sub: 'Cocinero · local Barranco', who: 'wilder' },
  admins: { n: 'Administradores Sabor del Perú', sub: '14 locales', c: '#C05621' },
};

export const WSP = [
  { chat: 'grupo', t: '07:55', de: 'Hugo', txt: 'Hoy conoces a Inés. Es seria, pero es la mejor contadora que he tenido. Si te pregunta algo, no adivines.' },
  { chat: 'admins', t: '09:20', de: 'Ítalo (Surco)', txt: 'Mañana es la grati, ¿no? ¿A qué hora llega? Mis chicos quieren ir a Gamarra en la tarde 😂' },
  { chat: 'wilder', t: '10:30', de: 'Wilder', txt: 'Mi hija salió en la actuación del colegio. Mañana con la grati le compramos sus zapatos 😊', si: 'wilder_explicado' },
  { chat: 'admins', t: '12:10', de: 'Fiorella (Miraflores)', txt: 'Dos chicos de Miraflores dicen que van a ir a SUNAFIL porque su liquidación sigue sin llegar completa 😟', si: 'liq_mitad' },
  { chat: 'admins', t: '12:10', de: 'Fiorella (Miraflores)', txt: 'Mi gente sigue esperando su liquidación. Uno ya fue a SUNAFIL a preguntar 😟', si: 'liq_jueves' },
  { chat: 'ines', t: '18:50', de: 'Inés', txt: 'Constancia de la PLAME recibida y archivada. Buen trabajo. Hugo tenía razón contigo.', si: 'plame_presentada' },
];

export const CORREOS = [
  { t: '08:05', de: 'CPC Inés Quiroz', para: 'Planillas', asunto: 'Conciliación de noviembre', html: '<p>Buenos días. Antes de presentar la PLAME de noviembre necesito conciliar el total de remuneraciones de Planillas con el gasto de personal registrado en Contabilidad. Hay una diferencia de S/ 7,070 que no logro explicar. Los espero a las 8:15.</p><p>Inés Quiroz · Contadora general</p>' },
  { t: '16:10', de: 'Tesorería', para: 'Planillas', asunto: 'Archivo de gratificación', html: '<p>Recordamos que el archivo del banco para el abono de mañana debe llegar hoy hasta las 17:00. Después de esa hora, el banco no garantiza el abono del día siguiente.</p>' },
];

export const QUIZ = [
  { q: '¿Qué se declara en la PLAME?', ops: ['Solo los sueldos de gerencia', 'Trabajadores, pensionistas, prestadores de servicios y personal de terceros, cada mes', 'Las ventas de la empresa', 'Solo la gratificación'], ok: 1, por: 'SUNAT indica que la Planilla Electrónica (PLAME) declara mensualmente a trabajadores, pensionistas, prestadores de servicios y personal de terceros.' },
  { q: '¿Cómo se sabe cuándo vence la PLAME de un mes?', ops: ['Siempre el día 15', 'Por el cronograma mensual de SUNAT según el último dígito del RUC', 'Lo decide la contadora', 'Al final del año'], ok: 1, por: 'SUNAT publica un cronograma de obligaciones mensuales por último dígito del RUC.' },
  { q: 'Planillas y Contabilidad no cuadran a horas del vencimiento. ¿Qué es lo menos recomendable?', ops: ['Declarar lo conciliado y documentar lo pendiente', 'Ajustar la planilla para que cuadre con Contabilidad sin saber por qué', 'Explicar la diferencia por escrito', 'Revisar los pagos fuera de planilla'], ok: 1, por: 'Forzar un número hace que la declaración no coincida con las boletas reales.' },
  { q: 'Un pago a trabajadores por su trabajo, hecho desde la caja chica de un local, debería…', ops: ['Quedarse en caja chica', 'Ir por planilla y aparecer en la boleta', 'Pagarse en efectivo siempre', 'No registrarse'], ok: 1, por: 'Lo que se paga al trabajador por su trabajo va por planilla, con su concepto en la boleta.' },
  { q: 'Las horas extra del 21 al 30 de noviembre que se pagan en diciembre generan una diferencia…', ops: ['De fraude', 'De oportunidad entre lo registrado y lo pagado, que se explica en la conciliación', 'Que no importa', 'Que obliga a no declarar'], ok: 1, por: 'Es una diferencia de oportunidad: se documenta y se explica, no se esconde.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '08:15', ch: 'presencial', who: 'contadora', titulo: 'La contadora', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Sala de reuniones', show: ['confianza', 'calidad'],
    body: (n) => `<p>La CPC Inés Quiroz tiene cincuenta y tantos años, lentes de marco verde y un lapicero rojo en cada mano. Trabajó doce años en un estudio contable de Jesús María antes de entrar a Sabor del Perú.</p><p>«Así que tú eres la nueva${n ? ', ' + n : ''}. Tenemos S/ 7,070 de diferencia y la PLAME vence hoy. <mark class="clave">Pregunta lo que necesites, pero no adivines</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Inés.',
    opts: [
      { id: 'donde', label: '¿De dónde sale su número de gasto de personal?', info: '«De lo que se registró en noviembre: planilla, provisiones y lo que pagaron las cajas chicas de los locales como "personal". Ahí suelen esconderse las sorpresas.»' },
      { id: 'prov', label: '¿Provisionó algo que Planillas todavía no pagó?', info: '«Sí: las horas extra del 21 al 30 de noviembre. Las registré en noviembre porque se trabajaron ese mes, aunque ustedes las paguen en diciembre.»' },
      { id: 'miedo', label: '¿Qué es lo que más le preocupa?', info: '«Que la declaración diga una cosa y las boletas otra. Eso, en una fiscalización, es lo peor. Prefiero una diferencia explicada a un número maquillado.»' },
      { id: 'antes', label: '¿Cómo lo hacían antes?', info: '«Antes Planillas me mandaba el total a las 6 de la tarde del día del vencimiento y yo rezaba. Por eso hoy empezamos a las 8.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('miedo') ? 3 : 1, calidad: picks.includes('prov') ? 2 : 0 }, rel: { contadora: 1 },
      flags: ['ines_conocida'], cartera: { conc: picks.includes('prov') ? 'Pista: provisión de horas extra' : 'Conciliación en curso' },
      out: 'Inés te pasa un Excel con dos columnas: «Planillas» y «Contabilidad». Una sola pestaña, bien nombrada. Te cae bien de inmediato.',
      kusi: ['curioso', 'Una contadora que prefiere la verdad al maquillaje. ¡Bacán!'],
    }),
    mirada: {
      ve: 'Planillas y Contabilidad miran lo mismo desde dos lugares: una paga personas, la otra registra gastos. Sus números casi nunca coinciden a la primera, y eso no es malo: la conciliación existe para explicar por qué.',
    },
  },
  {
    id: 'h2', t: '09:30', ch: 'documento', who: null, titulo: 'Los S/ 7,070', banner: 'assets/esc/lupa.webp', lugar: 'Sala de reuniones', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Inés y tú revisan línea por línea. El café de la sala está tibio y el aire acondicionado ruge. <mark class="clave">Marca lo que es un problema</mark>, no lo que solo es una diferencia que se explica.</p>`,
    type: 'flag', prompt: 'Marca lo que es un problema real en la conciliación de noviembre.',
    doc: { t: 'Conciliación de noviembre · Planillas vs. Contabilidad', sub: 'Diferencia total: S/ 7,070' },
    lines: [
      { id: 'prov', t: 'Provisión de horas extra del 21 al 30 de noviembre, pagadas en diciembre: S/ 6,320.', duda: 'Es una diferencia de oportunidad: se trabajó en noviembre y se paga en diciembre. Se explica en la conciliación.' },
      { id: 'callao', t: 'Caja chica de Callao: S/ 350 como «propinas a ayudantes de cocina» por trabajar el feriado.', bad: BP, why: 'Si se paga por trabajar, va por planilla y en la boleta. En caja chica no se declara ni aparece en ningún beneficio.' },
      { id: 'jhoan', t: 'Jhoan Rivas registrado con DNI en la planilla; en el T-Registro, con carné de extranjería.', bad: BP, why: 'El tipo y número de documento deben coincidir en todos los registros o la declaración se observa.' },
      { id: 'olivos', t: 'Dos ayudantes de Los Olivos en planilla desde el 15 de noviembre, sin alta en el T-Registro.', bad: LEY, why: 'El alta en el T-Registro se registra dentro del día de ingreso.' },
      { id: 'menu', t: 'Descuento «menú del personal» en Barranco: S/ 60 a nueve trabajadores, sin autorizaciones.', bad: BP, why: 'Es un descuento sin sustento. Lo encontraste ayer con Wilder: no es solo él.' },
      { id: 'total', t: 'Remuneraciones de los otros 690 trabajadores: Planillas y Contabilidad coinciden.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : 'buena',
      fx: { calidad: missLey ? -3 : 5, cumplimiento: missLey ? -3 : 4 }, rel: { contadora: missLey ? 0 : 1 },
      flags: [missLey ? 'conc_floja' : 'conc_ok'], cartera: { conc: missLey ? 'Diferencias sin explicar' : `Explicada: provisión S/ 6,320 + ${hitsLey} problemas`, treg: missLey ? 'Altas sin revisar' : 'Dos altas pendientes · documento de Jhoan' },
      out: missLey ? 'Inés anota con lapicero rojo: «Pendiente». Quedan cosas sin explicar y la hora avanza.' : 'S/ 6,320 son de oportunidad; S/ 350 de Callao, fuera de planilla; lo demás, de registro. Inés levanta los lentes: «Ahora sí sé qué estoy firmando».',
      pro: { ok: 'Separar la diferencia de oportunidad de los problemas reales es el corazón de una conciliación.', risk: 'Tratar todo como «diferencia» esconde pagos fuera de planilla y altas faltantes.', info: 'Las dos altas de Los Olivos hay que regularizarlas hoy mismo.' },
      kusi: missLey ? ['preocupado', 'El rojo de Inés no perdona…'] : ['celebra', '¡Siete mil soles explicados!'],
    }),
    rules: [[LEY, 'El alta en el T-Registro se registra dentro del día de ingreso (SUNAT).'], [BP, 'Todo pago al trabajador por su trabajo va por planilla y en la boleta.']],
    mirada: {
      ve: 'Una conciliación no busca que todo cuadre: busca que todo se explique. Una diferencia de oportunidad bien explicada es sana; un pago desde caja chica, aunque sea pequeño, es una señal de que algo se está haciendo por fuera.',
      visual: { tipo: 'embudo', titulo: 'La diferencia de S/ 7,070', niveles: [['Diferencia total', 7070], ['Explicada por oportunidad', 6320], ['Pagos fuera de planilla', 350]] },
    },
  },
  {
    id: 'h3', t: '11:30', ch: 'sistema', who: null, titulo: 'Lo que falta a las 11:30', banner: 'assets/esc/alarma.webp', lugar: 'PDT PLAME · Validación', show: ['cumplimiento', 'etica', 'tiempo'],
    body: () => `<p>Cargan el archivo en la PLAME. Valida, pero queda una diferencia de S/ 400 con Contabilidad que nadie logra rastrear. Hugo está en otra reunión. Ronald, de Sistemas, se asoma: «Ajusta un concepto en la planilla y que cuadre. <mark class="clave">Nadie va a revisar 400 soles</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Declarar con lo que sí está conciliado y dejar la diferencia de S/ 400 documentada, con responsable y fecha para resolverla.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4 }, rel: { contadora: 1 }, flags: ['plame_conciliada'], cartera: { plame: 'Lista para presentar · S/ 400 documentados' },
          out: 'Inés escribe en el Excel: «S/ 400 · por rastrear · responsable: Planillas · plazo: cierre de diciembre». «Así se hace. La verdad incompleta se completa; la mentira, no.»',
          pro: { ok: 'Lo que declaras coincide con las boletas reales, y lo pendiente queda a la vista.', risk: 'Tendrás que encontrar esos 400 en diciembre.', info: 'Revisa los adelantos y pagos de caja de los locales: ahí suelen estar.' },
          kusi: ['celebra', 'Una verdad incompleta vale más que un número bonito.'] } },
      { id: 'b', label: 'Ajustar un concepto de la planilla para que cuadre y presentar: son 400 soles en 700 personas.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -5, tiempo: 2 }, rel: { contadora: -1 }, flags: ['plame_forzada'], cartera: { plame: 'Cuadrada a la fuerza' },
          out: 'Cuadra. Inés lo nota en el reporte por concepto: «¿Quién movió esto?». Ahora alguien tiene en su boleta un monto que no recibió.',
          pro: { ok: 'Cuadra a tiempo.', risk: 'Un número forzado hace que la declaración y las boletas digan cosas distintas.' },
          kusi: ['indignado', '¡Eso no es cuadrar, es maquillar!'] } },
      { id: 'c', label: 'No presentar hasta encontrar los S/ 400, aunque sea a última hora.',
        res: { q: 'aceptable', fx: { cumplimiento: -1, tiempo: -4, calidad: 1 }, flags: ['plame_tarde'], cartera: { plame: 'Sin presentar · buscando S/ 400' },
          out: 'Pasan cuatro horas buscando. No los encuentras. Hugo presenta la PLAME a las 11:40 p. m. desde su casa, con el corazón en la boca.',
          pro: { ok: 'Quieres que todo esté perfecto.', risk: 'Arriesgar el vencimiento por una diferencia pequeña y documentable es un mal cálculo.' },
          kusi: ['pensando', 'Perfecto y a tiempo no siempre van juntos.'] } },
    ],
    rules: [[BP, 'Una diferencia que no se puede resolver a tiempo se documenta con responsable y plazo; no se fuerza un número.']],
    mirada: {
      ve: 'A horas de un vencimiento, la tentación es hacer que cuadre. Pero la PLAME es una declaración: tiene que decir lo que pasó. Una diferencia documentada se puede explicar en una fiscalización; un número forzado, no.',
      visual: { tipo: 'balanza', a: { t: 'Forzar que cuadre', items: ['Cuadra hoy', 'Boleta y declaración distintas', 'Difícil de explicar'] }, b: { t: 'Documentar lo pendiente', items: ['Cuadra lo que se sabe', 'Pendiente visible', 'Se corrige con sustento'] } },
    },
  },
  {
    id: 'h4', t: '13:30', ch: 'documento', who: null, titulo: 'El informe de conciliación', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio, con un sánguche de pavo', show: ['calidad', 'confianza'],
    body: () => `<p>Inés te pide que dejes escrito lo que encontraron: «Si en un año alguien pregunta por noviembre, este papel tiene que contestar por nosotros». <mark class="clave">Arma el informe</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del informe.', boton: 'Guardar el informe',
    bloques: [
      { id: 'dif', t: 'Diferencias explicadas', n: 2, ops: [
        { id: 'd1', t: 'S/ 6,320: horas extra del 21 al 30 de noviembre, provisionadas en noviembre y pagadas en diciembre.', ok: true },
        { id: 'd2', t: 'S/ 350: pagos desde la caja chica de Callao a ayudantes, que deben pasar por planilla.', ok: true },
        { id: 'd3', t: 'El resto: «diferencias menores del sistema».', ok: false, por: 'Una frase que no explica nada.' },
      ] },
      { id: 'acc', t: 'Acciones', n: 2, ops: [
        { id: 'a1', t: 'Alta hoy en el T-Registro de los dos ayudantes de Los Olivos y corrección del documento de Jhoan.', ok: true, por: 'Responsable y plazo.' },
        { id: 'a2', t: 'Suspender los descuentos de menú de Barranco sin autorización y reintegrarlos.', ok: true },
        { id: 'a3', t: 'Pedir a los locales que no usen la caja chica «tanto».', ok: false, por: '«Tanto» no es una regla.' },
      ] },
      { id: 'pend', t: 'Pendientes', n: 1, ops: [
        { id: 'p1', t: 'S/ 400 por rastrear: responsable Planillas, plazo cierre de diciembre.', ok: true },
        { id: 'p2', t: 'Ninguno.', ok: false, por: 'Hay un pendiente y debe quedar escrito.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, confianza: q === 'buena' ? 3 : 0 }, rel: { contadora: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['informe_ok'] : [], cartera: { conc: q === 'buena' ? 'Informe firmado por Inés y Hugo' : 'Informe con vacíos' },
        out: q === 'buena' ? 'Inés firma con su lapicero azul (el rojo es solo para corregir) y le pide a Hugo que firme también.' : 'Inés tacha dos líneas: «"Menores" no es una cifra. "Tanto" no es una regla».',
        pro: { ok: 'Un informe con cifras, acciones y pendientes protege a quien lo firma.', risk: 'Las frases vagas no sirven en una fiscalización ni en una auditoría.', info: 'Archiva el informe con la constancia de la PLAME.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un papel que contesta solo!' : 'Cifras, no adjetivos.'],
      };
    },
    mirada: {
      ve: 'El informe de conciliación es la memoria de Planillas. Dentro de un año nadie recordará por qué noviembre no cuadraba, pero el informe sí. Escribirlo bien hoy es un favor a quien venga después… quizás tú misma.',
    },
  },
  {
    id: 'h5', t: '15:40', ch: 'sistema', who: null, titulo: 'Presentar la PLAME', banner: 'assets/3d/scenes/corporativo.webp', lugar: 'SUNAT Operaciones en Línea', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>${F.has('plame_tarde') ? 'Sigues buscando los 400 soles. Hugo te pide que al menos dejes todo listo para que él lo presente.' : 'Todo listo. Hugo vuelve de su reunión y te deja presentar a ti, mirando sobre tu hombro.'} <mark class="clave">Ordena los pasos</mark> para presentar sin sorpresas.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para presentar la PLAME. Usa las flechas.', boton: 'Guardar el orden',
    items: [
      { id: 'treg', t: 'Regularizar altas y datos en el T-Registro', por: 'La PLAME toma los datos del T-Registro.' },
      { id: 'export', t: 'Exportar la planilla de noviembre desde PlanMax', por: 'Con los ajustes ya aplicados.' },
      { id: 'validar', t: 'Importar y validar el archivo en la PLAME', por: 'La validación detecta errores de formato.' },
      { id: 'conc', t: 'Comparar los totales con la conciliación firmada', por: 'Lo que se declara es lo que se concilió.' },
      { id: 'presentar', t: 'Presentar la declaración', por: 'Dentro del vencimiento.' },
      { id: 'const', t: 'Descargar y archivar la constancia', por: 'Es la prueba de que se presentó.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['plame_presentada'], cartera: { plame: q === 'riesgosa' ? 'Presentada con observaciones' : 'Presentada · constancia archivada', treg: 'Altas regularizadas' },
        out: q === 'buena' ? 'A las 4:30, la constancia está en la carpeta «PLAME 2026-11». Hugo te da una palmada en el hombro: «Primera PLAME. Ya eres de la casa».' : 'La PLAME se presenta, pero la validación observa a Jhoan: el T-Registro tenía que ir primero.',
        pro: { ok: 'Primero los datos, luego la validación, luego la declaración, y siempre la constancia.', risk: 'Presentar con datos del T-Registro sin corregir genera observaciones.', info: 'Pon en el calendario de diciembre la siguiente PLAME, con su fecha del cronograma.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡PLAME presentada, constancia guardada!' : 'Primero el T-Registro.'],
      };
    },
    mirada: {
      ve: 'Presentar la PLAME es apretar un botón. Prepararla es todo lo demás: datos correctos, conciliación firmada y una constancia guardada donde cualquiera la encuentre.',
      visual: { tipo: 'flujo', titulo: 'Presentar la PLAME', pasos: ['T-Registro', 'Exportar', 'Validar', 'Comparar', 'Presentar', 'Constancia'] },
    },
  },
  {
    id: 'h6', t: '16:45', ch: 'presencial', who: 'contadora', titulo: 'La pregunta de Inés', banner: 'assets/foto/revisa.webp', lugar: 'Sala de reuniones', show: ['etica', 'confianza'],
    body: (n, F) => `<p>Antes de que mandes el archivo al banco, Inés te detiene. ${F.has('lactancia_caja') ? '«En la caja chica de la oficina hay un egreso de S/ 227.50 para "Yesenia Huamán, planillas". ¿Tú sabes algo?»' : F.has('adelanto_informal') ? '«En la caja de San Miguel faltan S/ 400 desde hace dos semanas, con una nota: "Kevin, Planillas sabe". ¿Tú sabes algo?»' : '«En la caja de Callao hay S/ 350 pagados a ayudantes "por indicación de Planillas". ¿Tú sabes algo?»'}</p><p>Te mira por encima de los lentes. <mark class="clave">Espera tu respuesta</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Contarle lo que sabes, incluido lo que te tocó decidir, y proponer cómo regularizarlo por planilla.',
        res: { q: 'buena', fx: { etica: 5, confianza: 3 }, rel: { contadora: 1 }, flags: ['caja_asumida'],
          out: 'Inés anota y asiente. «Gracias por no esconderlo. Esto se regulariza en la planilla de diciembre. Y de paso ya sé dónde buscar mis S/ 400.»',
          pro: { ok: 'Asumir lo que hiciste, con una propuesta, te da credibilidad.', info: 'Los pagos de caja a trabajadores siempre terminan en una conciliación.' },
          kusi: ['celebra', 'La verdad, con propuesta. ¡Así!'] } },
      { id: 'b', label: 'Decirle que eso lo manejó el local, que Planillas no tiene nada que ver.',
        res: { q: 'riesgosa', fx: { etica: -4, confianza: -3 }, rel: { contadora: -1 }, flags: ['caja_culpa'],
          out: 'Inés no dice nada. Al día siguiente, Hugo te cuenta que Inés llamó al local y le leyeron tu WhatsApp.',
          pro: { ok: 'Te salvas hoy.', risk: 'En una empresa donde todo se cruza, lo que niegas hoy aparece mañana con tu nombre.' },
          kusi: ['triste', 'Inés iba a encontrarlo igual…'] } },
    ],
    rules: [[BP, 'Lo que se pagó por fuera se regulariza por planilla; no se esconde.']],
    mirada: {
      ve: 'La contadora no te pregunta para culparte: te pregunta porque su firma está en juego. En Planillas, la confianza se construye exactamente en estos momentos, cuando decir «fui yo» cuesta un poco.',
    },
  },
];
