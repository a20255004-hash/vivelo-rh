// Analista de Administración de Personal · Capítulo 9 · «La PLAME» · Semana 2, jueves.
// Hilo de las dos semanas: hoy vence la PLAME del mes anterior, Ángel ya cesó y aparecen las 40 bajas de la campaña pasada que nadie hizo.
// Normas citadas:
// - D.S. 018-2007-TR y modificatorias (Planilla Electrónica: T-Registro y PLAME): la PLAME se presenta cada mes según el cronograma de SUNAT, por el último dígito del RUC.
//   https://www.gob.pe/8214-t-registro · https://charlas.sunat.gob.pe/sites/default/files/2024-09/Planillas%20T%20registro%20-%20Plame%20Web%202024.pdf
// - Baja en T-Registro: a más tardar el día hábil siguiente al cese, con la fecha real; el registro fuera de plazo es posible pero no significa que se cumplió a tiempo.
//   https://misha.pe/?p=61665 · https://tramitesperu.com/sunat/t-registro/
// - Ley 31110: la BETA no tiene naturaleza remunerativa, por lo que no entra en la base de aportes.
// - TUO de la Ley del SPP: el aporte a AFP se paga por AFPnet, aparte de la PLAME.

export const CAP = {
  n: 9, titulo: 'La PLAME', dia: 'Semana 2, jueves', foto: 'assets/esc/planilla.webp',
  lugar: 'Agrícola Valle Verde · Oficina de Planillas, fundo 1',
  inicio: '06:00', fin: '19:30', cierreHora: '19:10',
  apertura: 'Jueves. Según el último dígito del RUC, hoy vence la PLAME. Abres la prevalidación con el café todavía caliente y encuentras a 40 personas que dejaron de trabajar en marzo y siguen «activas».', boton: 'Abrir la prevalidación',
  kusi: 'Hoy la planilla se mira en el espejo de SUNAT. ¡A cuadrar con calma!',
  lead: 'Revisaste la prevalidación, decidiste qué hacer con 40 bajas viejas, aprendiste de quien hace la PLAME hace veinte años, buscaste por qué los números no cuadran, cuidaste la Clave SOL y presentaste antes de que se colgara el portal.',
  reflexion: '¿Qué aprendiste hoy de un error que nadie te obligaba a corregir?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'plame', p: 'PLAME del mes anterior', j: 'Mónica · Don Hugo', d: 1, e: 'Vence hoy' },
  { id: 'bajas', p: '40 bajas de la campaña pasada', j: 'Planillas', d: 240, e: 'Activas sin trabajar' },
  { id: 'baja_angel', p: 'Baja de Ángel en T-Registro', j: 'Planillas', d: 1, e: 'Cesó ayer' },
  { id: 'conc', p: 'Conciliación de la planilla', j: 'Planillas', d: 0, e: 'Diferencia sin explicar' },
  { id: 'afp', p: 'Aportes en AFPnet', j: 'Don Hugo', d: 0, e: 'Con la PLAME' },
];

export const FUTURO = {
  bajas_reales: ['Registraste las 40 bajas con su fecha real y una nota.', 'El balance del capítulo 10 lo reconoce.'],
  bajas_hoy: ['Registraste las 40 bajas con fecha de hoy.', 'El lunes, al revisar las bajas de campaña, la fecha no cuadrará.'],
  bajas_seguiran: ['Las 40 personas siguen activas sin trabajar.', 'Se repetirá con las bajas masivas que vienen.'],
  clave_cuidada: ['La Clave SOL no se compartió por WhatsApp.', 'Mónica lo agradece en el capítulo 10.'],
  clave_compartida: ['La Clave SOL circuló por WhatsApp.', 'Joel lo descubre en el capítulo 10.'],
  plame_a_tiempo: ['La PLAME se presentó a tiempo, con constancia.', 'Capítulo 10.'],
  plame_tarde: ['La PLAME se presentó fuera de plazo.', 'Capítulo 10.'],
  hugo_aliado: ['Don Hugo te enseñó a leer la PLAME y confía en ti.', 'Capítulo 10.'],
  rectificar_setiembre: ['Encontraste que los aportes de septiembre también se calcularon sobre la BETA.', 'Hay que rectificarlo: capítulo 10.'],
  yusbely_vista: ['Viste que Yusbely, cosechadora venezolana, sabe de planillas.', 'Mónica te pedirá su opinión en el capítulo 10.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Valle Verde', sub: 'Mónica, Joel, Wendy y tú', c: '#2F6B3F' },
  monica: { n: 'Mónica Uribe', sub: 'Jefa de Planillas', who: 'monica' },
  raul: { n: 'Ing. Raúl Cárdenas', sub: 'Jefe de fundo', who: 'raul' },
  joel: { n: 'Joel Ramírez', sub: 'Soporte de TI', who: 'joel' },
  yolanda: { n: 'Yolanda Quispe', sub: 'Cosechadora', who: 'yolanda' },
  hugo: { n: 'Don Hugo Arce', sub: 'Contador externo', c: '#57534E' },
  yusbely: { n: 'Yusbely Rangel', sub: 'Cosechadora · cuadrilla 3', c: '#BE185D' },
  fidel: { n: 'Fidel Choque', sub: 'Supervisor · cuadrilla 12', c: '#7A3E9D' },
  teresa: { n: 'Teresa Huamaní', sub: 'Caporala · cuadrilla 7', c: '#B5651D' },
};

export const WSP = [
  { chat: 'grupo', t: '06:05', de: 'Mónica', txt: 'Hoy voy a Ica a dejar la carpeta y el descargo a SUNAFIL. Vuelvo a las 15:00. Don Hugo viene con la PLAME a las 9.' },
  { chat: 'teresa', t: '07:20', de: 'Teresa', txt: 'Señorita, en mi celular salió la boleta de Rosa, y una de las chicas la vio. Ahora se han peleado por lo que gana cada una. Mejor no quiero esto.', si: 'boleta_caporalas' },
  { chat: 'fidel', t: '07:45', de: 'Fidel', txt: 'Primer día solo con la 12. Hoja de salida firmada, nadie toca el Excel 💪', si: 'exonerado_plan' },
  { chat: 'yolanda', t: '10:30', de: 'Yolanda', txt: 'Señorita, una chica de la 3 me dice que usted le hizo caso con lo de su AFP. Es Yusbely. Sabe harto.', si: 'extranjeros_atendidos' },
  { chat: 'yusbely', t: '11:05', de: 'Yusbely', txt: 'Disculpe que le escriba. Revisé mi boleta otra vez: gracias por corregirla. Si necesita ayuda con planillas, yo hacía nómina en Maracaibo.', si: 'extranjeros_atendidos' },
  { chat: 'hugo', t: '14:50', de: 'Don Hugo', txt: 'Señorita, mi señora tuvo una recaída y estoy camino a la clínica. Avíseme cualquier cosa, aunque no sé si pueda contestar.' },
  { chat: 'joel', t: '16:05', de: 'Joel', txt: 'Ojo: SUNAT Operaciones en Línea está lentísimo. Hoy vence para varios dígitos.' },
];

export const CORREOS = [
  { t: '06:20', de: 'SUNAT · Notificaciones', para: 'Agrícola Valle Verde S.A.C.', asunto: 'Recordatorio de obligaciones del mes', html: '<p>Le recordamos que sus obligaciones mensuales, incluida la Planilla Electrónica (PLAME), vencen según el cronograma de acuerdo con el último dígito de su RUC.</p>' },
  { t: '09:00', de: 'Don Hugo Arce', para: 'Planillas Valle Verde', asunto: 'PLAME', html: '<p>Señorita: le mando el archivo de prevalidación. Hago esto hace 20 años. Lo de los 40 lo dejo a usted y a Mónica, yo siempre los declaro en cero.</p><p>H. Arce</p>' },
  { t: '15:20', de: 'Ángel Paucar', para: 'Planillas Valle Verde', asunto: 'Gracias', html: '<p>Saqué mi CTS de la Caja. Mañana llevo a mi mamá a su control. Dígale a Fidel que anote todo.</p>', si: 'pago_sin_retener' },
  { t: '15:20', de: 'Ángel Paucar', para: 'Planillas Valle Verde', asunto: 'Mi liquidación', html: '<p>Señorita, revisé mi liquidación y hay algo que no me cuadra. ¿Me la puede explicar otra vez? Ya estoy en Palpa.</p>', si: 'liquidacion_error' },
];

export const QUIZ = [
  { q: '¿Cuándo se presenta la PLAME?', ops: ['El último día de cada mes', 'Cada mes, según el cronograma de SUNAT por el último dígito del RUC', 'Cada quincena', 'Una vez al año'], ok: 1, por: 'Es una obligación mensual con cronograma de vencimiento según el último dígito del RUC.' },
  { q: '¿Cuándo se da de baja en T-Registro a quien cesó?', ops: ['Cuando se presenta la PLAME', 'A más tardar el día hábil siguiente al cese, con la fecha real', 'Al terminar la campaña', 'Nunca, se archiva'], ok: 1, por: 'La baja refleja la fecha real del cese, en el plazo inmediato. Registrarla tarde es posible, pero no significa que se cumplió a tiempo.' },
  { q: 'La BETA en el régimen agrario, ¿entra en la base de los aportes?', ops: ['Sí, siempre', 'No: no tiene naturaleza remunerativa', 'Solo para AFP', 'Solo para EsSalud'], ok: 1, por: 'La Ley 31110 señala que la BETA no tiene naturaleza remunerativa.' },
  { q: 'Una persona dejó de trabajar en marzo y nadie la dio de baja. ¿Qué haces hoy?', ops: ['Sigo declarándola en cero', 'Registro la baja con la fecha real y dejo nota', 'Le pongo la fecha de hoy', 'La borro del Excel'], ok: 1, por: 'La fecha real es la que protege a la persona y a la empresa, aunque el registro sea tardío.' },
  { q: 'Tu colega no está y te pide compartir la Clave SOL por WhatsApp. ¿Qué haces?', ops: ['La pasas al grupo para no perder tiempo', 'Usas una vía segura: quien tiene la clave ingresa o se autoriza un usuario secundario', 'La anotas en un pósit', 'La pides a SUNAT por teléfono'], ok: 1, por: 'La Clave SOL identifica a la empresa frente a SUNAT. No se comparte por chat.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '06:40', ch: 'documento', who: null, titulo: 'La prevalidación', banner: 'assets/foto/revisa.webp', lugar: 'Contenedor de Planillas', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: () => `<p>Afuera todavía hace frío. El archivo de prevalidación de la PLAME tiene una página con observaciones, en letra chiquita.</p><p>Don Hugo llega a las 9, pero <mark class="clave">quieres ver antes qué dice</mark>. Lo imprimes y agarras el resaltador. Ya es casi un reflejo.</p>`,
    type: 'flag', prompt: 'Marca lo que no debe presentarse así.',
    doc: { t: 'Prevalidación de la PLAME · mes anterior', sub: 'Agrícola Valle Verde S.A.C. · Trabajadores declarados: 338' },
    lines: [
      { id: 'bajas', t: '40 trabajadores activos en T-Registro con cero días y cero remuneración, los mismos desde marzo.', bad: LEY, why: 'Cesaron en marzo. Debieron darse de baja con su fecha real al terminar. Declararlos en cero no lo arregla.' },
      { id: 'beta', t: 'Aportes calculados sobre la remuneración más la BETA.', bad: LEY, why: 'La BETA no tiene naturaleza remunerativa (Ley 31110): no entra en la base de aportes.' },
      { id: 'tres', t: 'Tres trabajadores de la planilla de octubre sin registro en T-Registro.', bad: LEY, why: 'Si trabajaron, debían tener alta con su fecha real. Hay que registrarlos y entender por qué no estaban.' },
      { id: 'agr', t: 'Trabajadores de cosecha y packing declarados en el régimen de salud agrario.' },
      { id: 'jornada', t: 'Días laborados y horas ordinarias traídos del sistema de planillas.' },
      { id: 'afp', t: 'Aporte a AFP: se paga por AFPnet, por separado.' },
      { id: 'dm', t: 'Dos descansos médicos largos marcados como «días subsidiados» desde el día 21.', duda: 'Es correcto si EsSalud los reconoce: los primeros 20 días los paga el empleador. Verifica los certificados.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Dejas la hoja a un lado: don Hugo sabrá. Pero si él declara «como siempre», los errores de siempre se repiten.' : `Marcas ${hitsLey} observaciones. Una te hace sonreír sin ganas: el primer lunes viste esas «40 bajas» en tu bandeja, y hoy están otra vez aquí.`,
      cartera: { plame: missLey ? 'Prevalidación sin revisar' : 'Tres observaciones para don Hugo' },
      pro: { ok: 'La prevalidación es la última oportunidad de ver los errores antes de que lleguen a SUNAT.', risk: 'Una base de aportes mal calculada se repite cada mes hasta que alguien la mire.', info: 'Compara siempre con el mes anterior: las diferencias grandes son la primera pista.' },
      kusi: missLey ? ['preocupado', '«Como siempre» no siempre está bien…'] : ['curioso', '¿Las 40 de marzo, otra vez? ¡Ahí está el hilo!'],
    }),
    rules: [[LEY, 'Ley 31110: la BETA no tiene naturaleza remunerativa.'], [LEY, 'La PLAME se declara a partir de lo registrado en el T-Registro: lo que está mal ahí, sale mal aquí.']],
    mirada: {
      ve: 'La PLAME es el espejo de todo el mes: si el alta se hizo tarde, si la baja no se hizo, si un concepto está mal configurado, aquí aparece. Nada nuevo se equivoca en la PLAME: solo se ve lo que ya estaba mal.',
      visual: { tipo: 'flujo', titulo: 'De dónde sale la PLAME', pasos: ['T-Registro', 'Asistencia', 'Planilla', 'Conceptos y bases', 'PLAME'], aqui: 4 },
    },
  },
  {
    id: 'j2', t: '09:10', ch: 'presencial', who: null, titulo: 'Don Hugo y sus veinte años', banner: 'assets/foto/mentora.webp', lugar: 'Sala de reuniones', show: ['calidad', 'confianza', 'personas'],
    body: () => `<p>Don Hugo Arce: 68 años, tirantes, un maletín de cuero gastado y una calculadora con cinta de papel. Lleva dos décadas con la contabilidad de Valle Verde y mira tu hoja resaltada con una ceja levantada.</p><p>«Yo declaro lo que me pasan, señorita.» Pero se sienta y te ofrece un caramelo. <mark class="clave">Tienes tiempo para dos preguntas</mark> antes de que abra su laptop.</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas. ¿Qué le preguntas?',
    opts: [
      { id: 'cuarenta', label: '¿Por qué siguen esos 40 en cero?', info: '«Porque nadie me mandó la lista de ceses en marzo. Y si no me la mandan, yo no invento. Declararlos en cero no le cuesta a nadie… hasta que alguien pregunta.»' },
      { id: 'tarde', label: '¿Qué pasa si no presentamos hoy?', info: '«Hay multa, y a nadie le conviene. Pero peor es presentar mal por apurarse: una rectificatoria toma el doble. Si algo no está claro, que lo sepa la jefa antes de las 4.»' },
      { id: 'leer', label: '¿Cómo aprendió a leer una PLAME?', info: '«Equivocándome, señorita. En 2011 declaré mal a 200 personas por un código. Desde entonces, primero miro el total del mes pasado y después la gente. Se lo regalo.»' },
      { id: 'beta', label: '¿Desde cuándo se suma la BETA a los aportes?', info: 'Don Hugo se quita los lentes. «¿Quién configuró eso?» Revisa su laptop. «Eso entró en septiembre, con la actualización. Tiene usted razón. Hay que corregir septiembre también.»' },
    ],
    res: picks => ({
      q: null,
      fx: { calidad: picks.includes('beta') ? 5 : 2, confianza: picks.includes('leer') ? 4 : 2, cumplimiento: picks.includes('cuarenta') ? 2 : 0 },
      flags: ['hugo_aliado', ...(picks.includes('beta') ? ['rectificar_setiembre'] : [])],
      cartera: { plame: picks.includes('beta') ? 'Base corregida · septiembre por rectificar' : 'Revisión con don Hugo' },
      out: picks.includes('beta') ? 'Don Hugo saca otro caramelo y te lo pone delante. «A usted no le gusta el “como siempre”. Bien.» Hay que avisarle a Mónica de la rectificatoria.' : 'Don Hugo abre su laptop. Cuando te vas, te dice sin mirarte: «Pregunte siempre. A mí nadie me pregunta nada».',
      kusi: ['curioso', picks.includes('beta') ? '¡Le encontraste algo a don Hugo! Con respeto.' : 'Veinte años caben en dos preguntas.'],
    }),
    rules: [[BP, 'Antes de decir «está mal», pregunta por qué se hace así: casi siempre hay una historia.']],
    mirada: {
      ve: 'Don Hugo no es un obstáculo: sabe cosas que no están en ningún manual, y también arrastra errores que nadie revisó. Una profesional joven respeta la experiencia sin dejar de preguntar. Y el «yo declaro lo que me pasan» dice dónde estaba el vacío: nadie le pasaba los ceses.',
      visual: { tipo: 'balanza', a: { t: 'Lo que sabe don Hugo', items: ['Veinte años de cronogramas', 'Primero el total, luego la gente'] }, b: { t: 'Lo que le faltó', items: ['La lista de ceses de marzo', 'Revisar la configuración de la BETA'] } },
    },
  },
  {
    id: 'j3', t: '11:20', ch: 'sistema', who: 'monica', titulo: 'Los 40 de marzo', banner: 'assets/foto2/tension.webp', lugar: 'T-Registro · por teléfono con Mónica', show: ['etica', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Mónica te llama desde la cola de SUNAFIL. «Don Hugo me contó. Tú decide cómo los corregimos y me avisas: estoy con la inspectora en un rato.» ${F.has('verdad_altas') ? 'Le dijiste la verdad a la inspectora el martes. ' : ''}${F.has('fecha_maquillada') ? 'Otra vez una fecha. Otra vez la misma pregunta que te hizo Ricardo la semana pasada. ' : ''}</p><p>Son 40 personas, cesaron en marzo. La fecha real ya está vencida: <mark class="clave">registrar hoy es tarde, y se va a ver</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Registrar las 40 bajas con la fecha real de marzo, con sustento de las liquidaciones, y dejar una nota con la causa: nadie pasaba los ceses a contabilidad.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, tiempo: -3 }, rel: { monica: 1 }, flags: ['bajas_reales'], cartera: { bajas: '40 bajas con fecha real · nota de causa', baja_angel: 'Registrada con fecha real' },
          out: 'A las 13:00 terminas: el sistema te avisa que son extemporáneas y las acepta. Con ellas registras la de Ángel, hoy, en plazo. Mónica responde: «Y mañana hacemos una regla: cese que se paga, cese que se da de baja el mismo día».',
          pro: { ok: 'La fecha real es lo único que cuadra con las liquidaciones de marzo, y esas personas pueden necesitarla para otro empleo o para su pensión.', risk: 'Queda a la vista que se hizo tarde. Mejor que se vea tarde a que se vea falso.', info: 'Haz un cruce mensual: ceses pagados contra bajas registradas.' },
          kusi: ['celebra', 'Ocho meses tarde, pero con la verdad. ¡Bien!'] } },
      { id: 'b', label: 'Registrar las bajas con fecha de hoy: en marzo igual declararon cero, nadie perdió nada y evitas 40 registros extemporáneos justo con una inspección abierta.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -4, tiempo: 2 }, flags: ['bajas_hoy'], cartera: { bajas: '40 bajas con fecha de hoy' },
          out: 'El sistema acepta sin avisos. En los papeles, esas 40 personas trabajaron hasta hoy. Una de ellas, en una campaña de Chincha, tendrá un problema con su nuevo empleador.',
          pro: { ok: 'Sin avisos de extemporaneidad.', risk: 'Una fecha falsa que contradice las liquidaciones de marzo. Y le complicas la vida a alguien que ya trabaja en otro sitio.' },
          kusi: ['preocupado', 'Otra fecha que no es la real…'] } },
      { id: 'c', label: 'No tocarlas hoy: se sigue declarando en cero, como don Hugo, y se corrige con calma después de la campaña, cuando pase la inspección.',
        res: { q: 'aceptable', fx: { cumplimiento: -2, tiempo: 3, calidad: -1 }, flags: ['bajas_seguiran'], cartera: { bajas: 'Sin cambios · después de la campaña', baja_angel: 'Registrada con fecha real' },
          out: 'Hoy presentas sin sobresaltos. Las 40 seguirán «activas» otro mes. Cuando lleguen las bajas masivas de la campaña, será una bola más grande.',
          pro: { ok: 'No agregas ruido en una semana difícil, y registras bien a Ángel.', risk: 'Un problema que esperó ocho meses sigue esperando. Y la inspectora puede pedir el padrón.' },
          kusi: ['pensando', '¿Después de la campaña hay tiempo de verdad?'] } },
    ],
    rules: [[LEY, 'La baja en T-Registro se registra con la fecha real del cese, a más tardar el día hábil siguiente.'], [BP, 'Cruza cada mes los ceses pagados con las bajas registradas.']],
    mirada: {
      ve: 'El dilema se repite: la fecha real o la conveniente. Registrar tarde tiene un costo que se ve; registrar falso tiene uno que no se ve, y que cae sobre otra persona, que ya trabaja en otro lado y necesita que su historia laboral sea correcta.',
      visual: { tipo: 'linea', titulo: 'Los 40 de marzo', hitos: [['Marzo', 'Cesan y cobran su liquidación'], ['Abril a octubre', 'Siguen «activos» en cero'], ['Semana 1', 'Aparecen en tu bandeja'], ['Hoy', 'Baja con fecha real']] },
      normas: [{ ley: 'Normas del T-Registro (SUNAT)', dice: 'La baja se registra con la fecha real, a más tardar el día hábil siguiente al cese.', practica: 'El sistema acepta el registro extemporáneo, pero eso no significa que se cumplió a tiempo.' }],
    },
  },
  {
    id: 'j4', t: '13:30', ch: 'documento', who: null, titulo: 'S/ 4,318 que no cuadran', banner: 'assets/esc/lupa.webp', lugar: 'Oficina de Planillas', show: ['calidad', 'tiempo'],
    body: () => `<p>Almuerzas una causa de la señora del carrito con el Excel abierto, en la pestaña «Hoja3 (2) final FINAL». El total del sistema de planillas y el total de la PLAME difieren en <mark class="clave">S/ 4,318</mark>.</p><p>Don Hugo dice que una diferencia sin explicar no se presenta. Te da tiempo de revisar dos pistas antes de las 15:00.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos pistas que vas a seguir.', boton: 'Seguir estas pistas', resumen: 'Seguiste',
    cols: ['Pista', 'Por qué podría ser'],
    rows: [
      { id: 'tres', cells: ['Los tres trabajadores sin T-Registro', 'Están en la planilla, pero la PLAME no los trae'] },
      { id: 'beta', cells: ['La BETA dentro y fuera de la base', 'El sistema y el archivo la tratan distinto'] },
      { id: 'liq', cells: ['Liquidaciones de octubre pagadas en noviembre', 'Fecha de pago distinta al mes declarado'] },
      { id: 'cent', cells: ['Redondeos de S/ 0.01', 'Son céntimos'] },
      { id: 'color', cells: ['Los colores de la pestaña final', 'Se ven raros'] },
    ],
    score: { tres: 3, beta: 2, liq: 2, cent: -1, color: -2 },
    res: (picks, sc) => {
      const q = sc >= 5 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: picks.includes('color') || picks.includes('cent') ? -3 : 1 },
        cartera: { conc: q === 'buena' ? 'Diferencia explicada' : 'Diferencia parcialmente explicada' },
        out: picks.includes('tres') ? 'Los tres trabajadores eran vigilantes de un fundo: S/ 3,690. El resto era la BETA. La diferencia se explica línea por línea, y anotas la causa en la hoja de conciliación.' : 'Encuentras parte de la diferencia, no toda. Don Hugo mira el reloj: «Aún le falta».',
        pro: { ok: 'Una conciliación explica cada sol de diferencia. Y deja escrito por qué, para el próximo mes.', risk: 'Los céntimos no explican miles de soles.', info: 'Renombra las pestañas de tu Excel. Hazlo hoy: mañana no sabrás cuál es la final.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cada sol en su sitio!' : '¿Cuál pista pesaba más?'],
      };
    },
    rules: [[BP, 'No se presenta una diferencia sin explicar: se concilia y se documenta.']],
    mirada: {
      ve: 'El trabajo fino de planillas se parece a esto: una tarde siguiendo S/ 4,318 entre tres archivos, mientras una causa se calienta en el táper. Los errores grandes casi siempre están en las personas o los conceptos, no en los céntimos.',
      visual: { tipo: 'embudo', titulo: 'Los S/ 4,318', niveles: [['Diferencia inicial', 4318], ['Después de los tres vigilantes', 628], ['Después de la BETA', 0]] },
    },
  },
  {
    id: 'j5', t: '15:10', ch: 'whatsapp', who: null, titulo: 'La Clave SOL', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'etica', 'tiempo'],
    body: () => `<p>Don Hugo se fue a la clínica: su señora tuvo una recaída. Él presentaba con la Clave SOL. Mónica sigue en Ica, y SUNAFIL la tiene una hora más. El archivo está listo y el portal se pone lento a partir de las cuatro.</p><p>Wendy pregunta en voz alta: «¿Y si don Hugo nos manda <mark class="clave">la clave por el grupo</mark>?».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Dejar todo listo, llamar a Mónica para que ingrese ella con su acceso apenas salga, y avisarle a qué hora vence y a qué hora se pone lento el portal.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, tiempo: -1 }, rel: { monica: 1 }, flags: ['clave_cuidada'], cartera: { plame: 'Lista para presentar · Mónica ingresa a las 16:30' },
          out: 'Mónica sale a las 16:10, se estaciona en una esquina de la Av. Grau, abre su laptop en el carro y te llama: «Dime los pasos».',
          pro: { ok: 'Respetas quién puede usar la clave y resuelves con una salida segura.', risk: 'Dependes de que Mónica salga a tiempo.', info: 'Propón un usuario secundario de SUNAT para Planillas, con los permisos justos.' },
          kusi: ['feliz', 'La clave no viaja por WhatsApp. ¡Bien!'] } },
      { id: 'b', label: 'Pedirle a don Hugo que mande la clave por el grupo: son las 15:10, es una emergencia y confías en tu equipo.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, tiempo: 3, etica: -2 }, flags: ['clave_compartida'], cartera: { plame: 'Lista para presentar · clave en el grupo' },
          out: 'Don Hugo la manda desde la sala de espera. Ya puedes entrar al portal, y la clave queda en cinco celulares y en el grupo de WhatsApp. Nadie la cambia.',
          pro: { ok: 'Ganas tiempo.', risk: 'Con esa clave se puede declarar y tramitar en nombre de la empresa. En un chat grupal, deja de ser secreta.' },
          kusi: ['sorpresa', '¿Esa clave en el grupo? Uy…'] } },
    ],
    rules: [[BP, 'La Clave SOL es de la empresa: no se comparte por chat. Crea usuarios secundarios con permisos específicos.']],
    mirada: {
      ve: 'La prisa de fin de plazo es la mayor enemiga de la seguridad. Una clave compartida una vez, «por emergencia», se queda en los celulares para siempre. Prever quién presenta cuando el titular no está es parte del calendario de cierre.',
      visual: { tipo: 'cambio', titulo: 'Quién presenta si falta el contador', pares: [['Clave por WhatsApp', 'Usuario secundario de SUNAT'], ['Una sola persona con acceso', 'Titular y suplente definidos']] },
    },
  },
  {
    id: 'j6', t: '16:45', ch: 'sistema', who: null, titulo: 'Presentar y pagar', banner: 'assets/3d/scenes/oficina.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>${F.has('clave_compartida') ? 'Entras tú al portal, con la clave del grupo, mientras la pantalla piensa.' : 'Por teléfono, Mónica te va pidiendo los pasos mientras el portal piensa.'} Wendy mira el reloj con la mano en la boca.</p><p>Toca seguir el orden, y <mark class="clave">anotarlo para la próxima vez</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena cómo se presenta la PLAME.', boton: 'Seguir estos pasos',
    items: [
      { id: 'tr', t: 'Actualizar el T-Registro con altas y bajas del mes', por: 'La PLAME parte de ahí.' },
      { id: 'dat', t: 'Cargar días, horas, ingresos, descuentos y aportes', por: 'Con la base corregida.' },
      { id: 'conc', t: 'Conciliar el total contra la planilla y el mes anterior', por: 'Sin diferencias sin explicar.' },
      { id: 'arch', t: 'Generar la declaración y presentarla con la Clave SOL', por: 'Antes del corte de hoy.' },
      { id: 'pago', t: 'Pagar los tributos y aportes que corresponden, y los de AFP por AFPnet', por: 'Presentar no es pagar.' },
      { id: 'cons', t: 'Guardar la constancia de presentación y archivarla', por: 'Con ella se responde cualquier duda.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, cumplimiento: q === 'riesgosa' ? -3 : 4, tiempo: q === 'riesgosa' ? -3 : 1 },
        flags: [q === 'riesgosa' ? 'plame_tarde' : 'plame_a_tiempo'],
        cartera: { plame: q === 'riesgosa' ? 'Presentada fuera de plazo' : 'Presentada con constancia', afp: q === 'riesgosa' ? 'Pendiente' : 'Pagada por AFPnet' },
        out: q === 'riesgosa' ? 'Se pierde media hora rehaciendo el archivo y el portal se cae. La declaración entra a la mañana siguiente, fuera de plazo.' : 'A las 16:58, aparece la constancia. Mónica manda un solo mensaje: «Listo». Luego otro: «Gracias».',
        pro: { ok: 'Presentar es la parte visible. El orden es lo que hace que no tengas que rectificar.', risk: 'Confundir presentar con pagar deja una deuda en el camino.', info: 'Anota este flujo al lado del calendario de cierre, con el nombre de quien hace cada paso.' },
        kusi: [q === 'riesgosa' ? 'triste' : 'celebra', q === 'riesgosa' ? 'Se fue el plazo… hay que contárselo a Mónica.' : '¡Constancia en mano! ¡Qué bacán!'],
      };
    },
    rules: [[LEY, 'La PLAME se presenta mensualmente según el cronograma de SUNAT.'], [LEY, 'Los aportes a AFP se pagan por AFPnet, aparte de la PLAME.']],
    mirada: {
      ve: 'La PLAME no se hace en la última hora: se hace todos los días, en cada alta, cada baja y cada incidencia del mes. Hoy solo se aprieta el botón.',
      visual: { tipo: 'flujo', titulo: 'De la planilla a la constancia', pasos: ['T-Registro', 'Datos', 'Conciliación', 'Presentación', 'Pago y AFPnet', 'Constancia'] },
    },
  },
  {
    id: 'j7', t: '18:20', ch: 'whatsapp', who: null, titulo: 'Lo que aprendimos hoy', banner: 'assets/foto/cafe.webp', show: ['confianza', 'calidad', 'personas'],
    body: (n, F) => `<p>El contenedor se queda en silencio y el ventilador apagado. Le escribes a Mónica lo que debería cambiar en el proceso, antes de que se te olvide por el cansancio.${F.has('yusbely_vista') || F.has('extranjeros_atendidos') ? ' Y una idea que te da vueltas: Yusbely, la cosechadora que sabe de nómina.' : ''}</p><p>Mañana es viernes: <mark class="clave">Mónica quiere hablar de las dos semanas</mark>.</p>`,
    type: 'compose', enviaA: 'monica', para: 'Para: Mónica Uribe · Jefa de Planillas', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Lo de hoy', ops: [
        { id: 'h1', t: 'Mónica: PLAME presentada con constancia, diferencia conciliada y bajas revisadas.', ok: true, por: 'Claro y con evidencia.' },
        { id: 'h2', t: 'Mónica: fue un día agotador, pero se logró.', ok: null, por: 'Cierto, pero no dice qué se logró.' },
      ] },
      { id: 'causa', t: 'Lo que hay que cambiar', ops: [
        { id: 'c1', t: 'Propongo un cruce mensual de ceses pagados y bajas registradas, y que los ceses le lleguen a don Hugo el mismo día.', ok: true, por: 'Ataca la causa de los 40.' },
        { id: 'c2', t: 'Don Hugo debería actualizarse.', ok: false, por: 'Don Hugo no recibía los ceses, y se fue a la clínica sin dejar nada a medias.' },
      ] },
      { id: 'suplente', t: 'El respaldo', ops: [
        { id: 's1', t: 'También necesitamos un suplente para la PLAME: hoy dependimos de que tú salieras a tiempo.', ok: true, por: 'Un riesgo real, dicho sin culpar.' },
        { id: 's2', t: 'Ya salió, así que no hace falta cambiar nada.', ok: false, por: 'Salió por suerte: el problema sigue ahí.' },
      ] },
      { id: 'yus', t: 'Una idea', ops: [
        { id: 'y1', t: 'Y hay una cosechadora, Yusbely Rangel, que hacía nómina en Venezuela. ¿La podemos conocer para apoyar en las bajas de fin de campaña?', ok: true, por: 'Miras lo que la gente sabe, no solo su puesto.' },
        { id: 'y2', t: 'Y necesitamos contratar a alguien con mucha experiencia, de afuera.', ok: null, por: 'Válido, pero tal vez ya está adentro.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'c1', 's1', 'y1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0, personas: sel.yus === 'y1' ? 3 : 0 },
        rel: { monica: q === 'buena' ? 1 : 0 },
        flags: sel.yus === 'y1' ? ['yusbely_vista'] : [],
        out: q === 'buena' ? 'Mónica responde: «Mañana me traes eso anotado. Y conoceremos a Yusbely. Descansa». Sales al último bus con el cielo morado sobre las dunas de Ica.' : 'Mónica responde: «Ok, mañana lo vemos». Sales con la sensación de que algo se te quedó en el tintero.',
        pro: { ok: 'Lo mejor de un día difícil es lo que cambia después.', risk: 'Culpar a la persona deja la causa intacta.', info: 'Anota hoy lo que aprendiste. Mañana ya te parecerá normal.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Con esto, el mes que viene es otro!' : '¿Qué cambiarías para que no se repita?'],
      };
    },
    rules: [[BP, 'Después de un cierre, escribe qué cambiar mientras lo tienes fresco.']],
    mirada: {
      ve: 'Las planillas son repetición: cada mes vuelve a pasar lo mismo. Quien mejora el proceso después de cada cierre, en vez de solo sobrevivirlo, se vuelve valiosa rápido.',
      visual: { tipo: 'mensaje', titulo: 'Un cierre con mejora', txt: 'Mónica: PLAME presentada con constancia y diferencia conciliada. Propongo un cruce mensual de ceses y bajas, que los ceses lleguen a don Hugo el mismo día, y un suplente para la PLAME. Y hay una cosechadora, Yusbely, que hacía nómina en Venezuela: ¿la conocemos?' },
    },
  },
];
