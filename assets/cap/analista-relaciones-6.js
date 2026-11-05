// Analista de Relaciones Laborales · Capítulo 6 · «Horas extra» · Semana 2, lunes.
// Hilo de las dos semanas: el caso de Marcos destapó jornadas sin pagar en toda la línea 2; mañana hay mesa.
// Normas citadas:
// - Constitución, art. 25 (jornada máxima de ocho horas diarias o cuarenta y ocho semanales) y art. 26 (carácter
//   irrenunciable de los derechos reconocidos por la Constitución y la ley).
// - TUO de la Ley de Jornada de Trabajo, Horario y Trabajo en Sobretiempo (D.S. 007-2002-TR): el sobretiempo es voluntario
//   y se paga con una sobretasa mínima de 25 % las dos primeras horas y 35 % las siguientes, o se compensa con descanso si
//   se acuerda; si se acredita que se trabajó en sobretiempo, aunque no hubiera orden expresa, se entiende prestado;
//   art. 7: el refrigerio no puede ser menor de 45 minutos.
//   https://lpderecho.pe/jornada-trabajo-horario-horas-extras-sobretiempo/
//   https://www.buk.pe/blog/ley-jornada-trabajo-horario-sobretiempo
//   https://www.geovictoria.com/es-pe/blog/horario-refrigerio/
// - D.S. 004-2006-TR: registro de control de asistencia y de salida en el régimen laboral privado.
//   https://lpderecho.pe/hay-obligacion-de-marcar-la-hora-de-inicio-y-termino-del-refrigerio-en-el-control-de-asistencia-resolucion-484-2022-sunafil-tfl/
// - TUO de la LRCT (D.S. 010-2003-TR): libertad sindical y buena fe en la negociación (caps. 1 y 4).

export const CAP = {
  n: 6, titulo: 'Horas extra', dia: 'Semana 2, lunes', foto: 'assets/3d/scenes/boleta.webp',
  lugar: 'Conservas del Pacífico · Oficina de Relaciones Laborales',
  inicio: '07:30', fin: '19:15', cierreHora: '19:05',
  apertura: 'Lunes de la semana 2. En tu bandeja hay un Excel con tres pestañas mal nombradas y una cifra que nadie quiere leer en voz alta: lo que la empresa debe por las horas de la caballa.', boton: 'Abrir el Excel',
  kusi: 'Hoy toca mirar hacia adentro. ¡Cuesta, pero es lo más honesto del puesto!',
  lead: 'Corregiste el cuadro de horas, calculaste bien la sobretasa, defendiste que una deuda no se disfraza de bono, escuchaste a una trabajadora con miedo y pusiste reglas claras a la supervisión.',
  reflexion: '¿Qué sentiste al descubrir que la empresa, y no el trabajador, era la que había fallado?',
  siguiente: { n: 7, titulo: 'La inspección', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'cuadro', p: 'Cuadro reloj contra planilla · línea 2', j: 'Milagros · Planillas', d: 0, e: 'Borrador del fin de semana' },
  { id: 'calculo', p: 'Cálculo de la sobretasa', j: 'Relaciones Laborales', d: 0, e: 'Por validar' },
  { id: 'pago', p: 'Cómo se paga lo que se debe', j: 'Gerencia · Finanzas', d: 0, e: 'Sin decidir' },
  { id: 'service', p: 'Operarios de la empresa de servicios', j: 'Contratista Nor Pacífico', d: 0, e: 'Fuera del cuadro' },
  { id: 'reglas', p: 'Reglas para la supervisión', j: 'Gladys · Supervisores', d: 0, e: 'Por comunicar' },
  { id: 'mesa', p: 'Sesión de trato directo de mañana', j: 'Lucho · Comisión', d: 0, e: 'Martes 10:00' },
];

export const FUTURO = {
  cuadro_corregido: ['El cuadro de horas incluye sobretasa, refrigerio real y a los operarios de la empresa de servicios.', 'La inspectora lo pedirá y cuadrará. Capítulo 7.'],
  cuadro_errado: ['El cuadro de horas salió con errores de cálculo o de alcance.', 'La inspectora encontrará la diferencia. Capítulo 7.'],
  calculo_ok: ['Calculaste bien la sobretasa: 25 % las dos primeras horas y 35 % las siguientes.', 'Patricia usará tu fórmula para el plan. Capítulo 8.'],
  pago_separado: ['Se decidió pagar las horas como deuda, aparte del bono.', 'Mañana lo anuncias en la mesa. Capítulo 7.'],
  pago_silencioso: ['Se decidió pagar las horas sin anunciarlo en la mesa.', 'El sindicato se enterará por otro lado. Capítulo 7.'],
  horas_en_bono: ['La gerencia quiere meter las horas dentro del bono de cierre.', 'Valeria y la inspectora no lo aceptarán. Capítulos 7 y 8.'],
  yenny_escuchada: ['Yenny te contó lo que pasa con los operarios de la empresa de servicios.', 'La inspectora preguntará por ellos. Capítulo 7.'],
  hojas_en_blanco: ['Sabes que se hicieron firmar hojas de «sobretiempo voluntario» en blanco.', 'Aparecerán en la inspección. Capítulo 7.'],
  pago_en_sobre: ['Sabes que algunos recibieron pagos en sobre, sin boleta.', 'Habrá que regularizarlos con boleta. Capítulo 8.'],
  lucho_informado: ['Le dijiste a Lucho que la empresa está revisando las horas y traerá un plan.', 'Llega a la mesa sin gritar. Capítulo 7.'],
  denuncia_canje: ['Le pediste a Lucho retirar la denuncia a cambio del pago.', 'Lucho lo contará a la inspectora. Capítulo 7.'],
  reglas_supervisores: ['La supervisión recibió reglas claras: sin turnos encadenados, sin hojas en blanco y con relevo.', 'Gladys las hará cumplir. Capítulo 8.'],
  carpeta_completa: ['Preparaste para una posible inspección todos los documentos, incluido el cuadro de horas.', 'La inspectora verá a una empresa que ya empezó a corregir. Capítulo 7.'],
  carpeta_minima: ['Preparaste solo planillas y boletas, sin el cuadro de horas.', 'La inspectora lo pedirá igual. Capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'Relaciones Laborales', sub: 'Arturo, Valeria y tú', c: '#0F2A3D' },
  arturo: { n: 'Dr. Arturo Benavides', sub: 'Jefe de Relaciones Laborales', who: 'arturo' },
  lucho: { n: 'Lucho Paredes', sub: 'Secretario general del sindicato', who: 'lucho' },
  gladys: { n: 'Gladys Ruiz', sub: 'Jefa de planta', who: 'gladys' },
  valeria: { n: 'Valeria Castro', sub: 'Abogada laboralista', who: 'valeria' },
  milagros: { n: 'Milagros Chero', sub: 'Asistente de RR.HH. · asistencia y planillas', c: '#2F6B3F' },
  patricia: { n: 'Patricia Salcedo', sub: 'Jefa de Finanzas', c: '#6B4E9B' },
  supervisores: { n: 'Supervisores Planta', sub: 'Gladys, Renzo y 9 supervisores', c: '#8A5A2B' },
};

export const WSP = [
  { chat: 'milagros', t: '07:05', de: 'Milagros', txt: 'Buenos días. Le dejé el Excel en la carpeta compartida. La pestaña buena es «copia reloj», no «Hoja1». Perdón por los nombres 😅', si: 'revision_horas_pedida' },
  { chat: 'milagros', t: '07:05', de: 'Milagros', txt: 'Buenos días. El sábado armé un cuadro por si acaso, nadie me lo pidió. Está en la carpeta compartida.', no: 'revision_horas_pedida' },
  { chat: 'patricia', t: '08:20', de: 'Patricia', txt: 'Los estados financieros ya están listos para entregar mañana en la mesa, como quedó en el acta.', si: 'info_comprometida' },
  { chat: 'gladys', t: '09:40', de: 'Gladys', txt: 'Marcos volvió hoy a la línea. Lo pusieron en etiquetado de día mientras tanto. Nadie le dice nada, pero todos lo miran.', no: 'despido_marcos' },
  { chat: 'grupo', t: '11:50', de: 'Valeria', txt: 'Me llegó por un colega de Trujillo: el viernes entró una denuncia ante SUNAFIL contra una conservera de Chimbote. No sé si es la nuestra.' },
  { chat: 'lucho', t: '15:10', de: 'Lucho', txt: 'Entendido. Mañana lo escuchamos en la mesa. Pero que conste: la denuncia no la retiramos.', si: 'lucho_informado' },
  { chat: 'gladys', t: '17:15', de: 'Gladys', txt: 'Leí tu mensaje en el grupo de supervisores. Renzo protestó, pero yo lo firmo. Ya era hora.', si: 'reglas_supervisores' },
  { chat: 'arturo', t: '19:00', de: 'Arturo', txt: 'Vigilancia dice que mañana a las 8 viene «alguien del Ministerio». Llega temprano.' },
];

export const CORREOS = [
  { t: '07:15', de: 'Dr. Arturo Benavides', para: 'Analista de Relaciones Laborales', asunto: 'Horas de la caballa', html: '<p>Antes de las 10:30 necesito saber cuánto es, a cuántas personas y desde cuándo. El gerente viene a mi oficina a esa hora.</p><p>A. B.</p>' },
  { t: '13:30', de: 'Servicios Generales Nor Pacífico S.A.C.', para: 'Relaciones Laborales', asunto: 'Re: horas del personal destacado', html: '<p>Estimados: nuestra empresa liquida las horas según el reporte que nos envía su supervisión. Si el reporte vino en cero, pagamos cero. Quedamos atentos.</p>' },
];

export const QUIZ = [
  { q: 'El trabajo en sobretiempo se paga con una sobretasa mínima de…', ops: ['10 % siempre', '25 % las dos primeras horas y 35 % las siguientes', '50 % desde la primera hora', 'No se paga si fue voluntario'], ok: 1, por: 'Lo establece el D.S. 007-2002-TR, salvo que trabajador y empleador acuerden compensarlo con descanso.' },
  { q: 'Una operaria gana S/ 1,500 al mes y trabajó 4 horas de sobretiempo un día. Le corresponde…', ops: ['S/ 25.00', 'S/ 31.25', 'S/ 32.50', 'S/ 40.00'], ok: 2, por: 'Valor hora: 1,500 ÷ 30 ÷ 8 = S/ 6.25. Dos horas al 25 % (S/ 15.63) y dos al 35 % (S/ 16.88): S/ 32.50.' },
  { q: 'Las horas extra que la empresa no pagó pueden incluirse en un bono de cierre del convenio…', ops: ['Sí, si el sindicato acepta', 'No: son una deuda, y los derechos reconocidos por la ley son irrenunciables', 'Sí, si el bono es mayor', 'Solo si son menos de diez horas'], ok: 1, por: 'La Constitución (art. 26) consagra el carácter irrenunciable de los derechos. Lo que se debe se paga como lo que es.' },
  { q: 'Compensar sobretiempo con salidas temprano es válido si…', ops: ['El supervisor lo decide', 'Trabajador y empleador lo acuerdan', 'Se hace de palabra', 'Nunca'], ok: 1, por: 'El D.S. 007-2002-TR permite compensar con descanso cuando hay acuerdo, no por decisión de una sola parte.' },
  { q: 'Hacer firmar hojas de «sobretiempo voluntario» en blanco el primer día…', ops: ['Prueba que el sobretiempo fue voluntario', 'No prueba voluntariedad y expone a la empresa', 'Es obligatorio por ley', 'Reemplaza el registro de asistencia'], ok: 1, por: 'La voluntariedad se da en cada caso concreto; una firma en blanco no prueba nada y el registro de asistencia (D.S. 004-2006-TR) sigue siendo la referencia.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'k1', t: '07:40', ch: 'documento', who: null, titulo: 'El Excel de Milagros', banner: 'assets/3d/scenes/oficina.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Lunes nublado, café de máquina y el archivo «HORAS L2 campaña (3) FINAL.xlsx», con las pestañas «Hoja1», «copia reloj» y «NO TOCAR». ${F.has('registros_ajustados') ? 'Arriba, en rojo, Milagros escribió: «Registros originales, sin modificar. M. C.».' : 'Milagros lo armó sobre el reporte del reloj, sin tocar nada.'}</p><p>Antes de llevarle una cifra al doctor, <mark class="clave">revisa cómo se calculó</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que está mal calculado o mal planteado en el cuadro.',
    doc: { t: 'Cuadro de sobretiempo · Línea 2 · Campaña de caballa', sub: 'Borrador de Milagros Chero · pestaña «copia reloj»' },
    lines: [
      { id: 'fuente', t: 'Fuente: reporte del reloj biométrico de la línea 2, desde el inicio de la campaña hasta el viernes.' },
      { id: 'valor', t: 'Valor hora = remuneración mensual ÷ 30 ÷ 8.' },
      { id: 'simple', t: 'Las horas que pasan de la jornada se valorizan como hora simple, sin sobretasa.', bad: LEY, why: 'El sobretiempo se paga con una sobretasa mínima de 25 % las dos primeras horas y 35 % las siguientes (D.S. 007-2002-TR).' },
      { id: 'refri', t: 'Se descuentan 45 minutos de refrigerio por día, aunque el reloj muestre que se trabajó de corrido.', bad: LEY, why: 'El refrigerio no puede ser menor de 45 minutos y hay que otorgarlo (D.S. 007-2002-TR, art. 7). Si no se tomó, descontarlo esconde horas trabajadas y otro incumplimiento.' },
      { id: 'service', t: 'No se incluye a los 9 operarios de la empresa de servicios: no son planilla propia.', bad: BP, why: 'Trabajaron las mismas jornadas en tu línea. Les paga su empleador, pero la empresa usuaria debe verificar que se les pague: inclúyelos en el cuadro y pide la información a la contratista.' },
      { id: 'compensa', t: 'Las horas de tres supervisores se dan por compensadas con salidas temprano, acordadas «de palabra» por Renzo.', bad: LEY, why: 'Compensar sobretiempo con descanso exige un acuerdo entre trabajador y empleador, no la decisión de un supervisor (D.S. 007-2002-TR).' },
      { id: 'confianza', t: 'Se incluye a los jefes de turno, aunque son personal de confianza, porque su jornada está controlada por el reloj.', duda: 'Correcto: ser de confianza no excluye por sí solo del sobretiempo si su jornada está sujeta a control.' },
      { id: 'total', t: 'Resultado preliminar: 38 trabajadores propios con sobretiempo sin pagar en tres semanas de campaña.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => {
      const q = !missLey && hitsBp >= 1 ? 'buena' : !missLey ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: missLey ? -4 : 5 },
        flags: missLey ? ['cuadro_errado'] : ['cuadro_corregido'],
        cartera: { cuadro: missLey ? 'Cuadro con errores de cálculo' : q === 'buena' ? 'Corregido: sobretasa, refrigerio real y personal de la contratista' : 'Corregido en lo legal; falta la contratista' },
        out: missLey ? 'Mandas el cuadro como está. La cifra sale más baja de lo que es: alguien, algún día, va a encontrar la diferencia.' : `Le marcas a Milagros ${hitsLey + hitsBp} observaciones. Ella rehace las fórmulas en una hora. La cifra sube y nadie sonríe, pero ahora es la verdadera.`,
        pro: { ok: 'Un cuadro de regularización vale si calcula lo que dice la norma, con los datos reales del reloj.', risk: 'Una cifra baja hoy es una diferencia que encontrará la inspección mañana.', info: 'Las cuentas de la contratista no son tuyas, pero las horas se trabajaron en tu planta.' },
        kusi: missLey ? ['preocupado', 'Esa cifra está maquillada…'] : ['celebra', '¡La cifra verdadera, aunque duela!'],
      };
    },
    rules: [[LEY, 'D.S. 007-2002-TR: sobretasa mínima de 25 % las dos primeras horas y 35 % las siguientes; compensación con descanso solo por acuerdo; refrigerio no menor de 45 minutos.'], [LEY, 'D.S. 004-2006-TR: el registro de control de asistencia es la referencia del tiempo trabajado.']],
    mirada: {
      ve: 'Revisar el propio cumplimiento empieza por un Excel incómodo. Cada fórmula mal puesta es una forma de no ver: la hora simple, el refrigerio que no se tomó, la gente de la contratista que «no es nuestra».',
      visual: { tipo: 'cambio', titulo: 'Del borrador a la cifra real', pares: [['Hora simple', 'Sobretasa 25 % y 35 %'], ['Refrigerio descontado siempre', 'Refrigerio según el reloj'], ['Solo planilla propia', 'También los 9 de la contratista'], ['Compensado «de palabra»', 'Compensado solo con acuerdo']] },
    },
  },
  {
    id: 'k2', t: '09:10', ch: 'documento', who: null, titulo: 'La boleta de Rosa', banner: 'assets/esc/cerebro.webp', lugar: 'Oficina de Relaciones Laborales', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Para que el doctor entienda la cifra, buscas un caso concreto. Rosa Ipanaqué, la de la constancia de la semana pasada: operaria de envasado, gana S/ 1,500 al mes. El jueves de la caballa trabajó doce horas, con su refrigerio de 45 minutos: <mark class="clave">cuatro horas más que su jornada</mark>.</p><p>Haces la cuenta en una servilleta antes de pasarla al Excel.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'S/ 32.50: valor hora de S/ 6.25; dos horas con 25 % y dos con 35 %.',
        res: { q: 'buena', fx: { calidad: 4, cumplimiento: 3 }, flags: ['calculo_ok'], cartera: { calculo: 'Validado: S/ 32.50 por 4 horas de Rosa' },
          out: 'S/ 15.63 más S/ 16.88. Treinta y dos soles con cincuenta, por un solo día. Rosa trabajó así nueve días. Multiplicas y te quedas mirando la servilleta.',
          pro: { ok: 'Calculas por tramos, como dice la norma.', info: 'Muéstrale al doctor un caso con nombre: las cifras grandes se discuten; los casos concretos, no.' },
          kusi: ['celebra', '¡Cuenta exacta!'] } },
      { id: 'b', label: 'S/ 25.00: cuatro horas a S/ 6.25.',
        res: { q: 'riesgosa', fx: { calidad: -3, cumplimiento: -3 }, cartera: { calculo: 'Calculado como hora simple' },
          out: 'Te sale redondo. Demasiado redondo: es hora simple, como el error que acabas de marcar en el Excel de Milagros.',
          pro: { ok: 'El valor hora está bien.', risk: 'Sin sobretasa, la empresa paga menos de lo que debe.' },
          kusi: ['pensando', '¿Y la sobretasa?'] } },
      { id: 'c', label: 'S/ 31.25: las cuatro horas con 25 %.',
        res: { q: 'aceptable', fx: { calidad: 1, cumplimiento: -1 }, cartera: { calculo: 'Sobretasa mal aplicada' },
          out: 'Te faltan un sol con veinticinco por día. Multiplicado por nueve días y 38 personas, deja de ser poco.',
          pro: { ok: 'Aplicaste sobretasa.', risk: 'Desde la tercera hora, la sobretasa mínima es 35 %.' },
          kusi: ['pensando', 'Casi: la tercera hora cuesta más.'] } },
    ],
    rules: [[LEY, 'D.S. 007-2002-TR: 25 % por las dos primeras horas de sobretiempo y 35 % por las siguientes, como mínimo.']],
    mirada: {
      ve: 'Las normas de jornada se vuelven aritmética. Hacer la cuenta con un caso real ayuda a no equivocarse y a explicar a la gerencia qué significa la cifra.',
      visual: { tipo: 'flujo', titulo: 'La cuenta de Rosa', pasos: ['S/ 1,500 ÷ 30 ÷ 8 = S/ 6.25', '2 h × 6.25 × 1.25 = S/ 15.63', '2 h × 6.25 × 1.35 = S/ 16.88', 'Total del día: S/ 32.50'] },
    },
  },
  {
    id: 'k3', t: '10:30', ch: 'presencial', who: 'arturo', titulo: 'La idea del gerente', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Oficina del Dr. Benavides', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>El gerente general, el ingeniero Fernando Olaechea, 61 años, treinta en la pesca, ocupa la silla del doctor. Patricia, de Finanzas, trae la cifra impresa. ${F.has('horas_calladas') ? 'El doctor se enteró de las horas el sábado, por Milagros, y todavía te mira serio.' : F.has('gerencia_informada') ? 'El gerente ya leyó tu resumen del jueves.' : 'Para el gerente, la cifra es nueva.'}</p><p>«Hagamos una cosa», dice. «${F.has('bono_cierre_sugerido') ? 'Como tú misma sugeriste, un bono de cierre.' : 'Un bono de cierre grande.'} <mark class="clave">Metemos las horas adentro del bono</mark>: el sindicato se lleva un número bonito y cerramos todo de una vez.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicar que las horas son una deuda: se pagan aparte, con boleta y sobretasa, en una planilla de regularización. El bono se negocia por su lado. Y proponer contárselo mañana a la mesa con un plan.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 6, confianza: 1 }, rel: { arturo: 1 }, flags: ['pago_separado'], cartera: { pago: 'Planilla de regularización aparte del bono', mesa: 'Mañana: se anuncia el plan de pago' },
          out: 'El gerente se cruza de brazos. «¿Entonces pago dos veces?» Patricia responde por ti: «No, ingeniero. Pagamos una vez lo que debemos y negociamos lo demás». Silencio largo. «Ya. Pero quiero el plan para el miércoles.»',
          pro: { ok: 'Separas la deuda de la negociación: lo que se debe no se canjea.', risk: 'El gerente siente que la negociación se encarece.', info: 'Si las horas van dentro del bono, en la boleta no aparecen como horas: el problema sigue ahí.' },
          kusi: ['animo', 'Lo que se debe, se paga. ¡Firme!'] } },
      { id: 'b', label: 'Aceptar pagarlas aparte, pero sin decir nada en la mesa hasta que el pago esté hecho: anunciar una deuda sin plata asegurada solo enciende a la base.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, confianza: -1, etica: 0 }, rel: { arturo: 1 }, flags: ['pago_silencioso'], cartera: { pago: 'Se pagará, sin anunciarlo todavía' },
          out: 'El gerente acepta, aliviado. Mañana te sentarás en la mesa sabiendo algo que Lucho ya sospecha. Si él lo pregunta primero, parecerá que lo escondías.',
          pro: { ok: 'Aseguras el pago antes de anunciarlo.', risk: 'En plena negociación, callar algo que la otra parte ya sospecha se lee como mala fe.' },
          kusi: ['pensando', 'Prudente… o escondido. Depende de quién lo cuente primero.'] } },
      { id: 'c', label: 'Apoyar la idea: un bono grande cierra la negociación, el sindicato queda contento y la empresa evita reconocer una deuda por escrito en plena campaña.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -6 }, rel: { arturo: -1 }, flags: ['horas_en_bono'], cartera: { pago: 'Horas dentro del bono de cierre' },
          out: 'El gerente sonríe. El doctor no. Valeria, por teléfono, es más clara: «Eso es pedirle a la gente que renuncie a sus horas por un bono. No se puede».',
          pro: { ok: 'Simplificas la negociación.', risk: 'Los derechos reconocidos por la ley son irrenunciables: ni un convenio ni un bono pueden reemplazar el pago del sobretiempo trabajado.' },
          kusi: ['indignado', '¡Las horas no se canjean!'] } },
    ],
    rules: [[LEY, 'Constitución, art. 26: los derechos reconocidos por la Constitución y la ley son irrenunciables.'], [LEY, 'TUO de la LRCT, art. 54: negociar de buena fe.']],
    mirada: {
      ve: 'Una deuda laboral no es una ficha de negociación. Mezclarla con el bono parece eficiente, pero convierte un incumplimiento en una concesión y deja el problema intacto en las boletas.',
      visual: { tipo: 'balanza', a: { t: 'Horas dentro del bono', items: ['Un solo número', 'Cierra rápido', 'La deuda no aparece'] }, b: { t: 'Horas como deuda aparte', items: ['Boleta con sobretasa', 'Deuda reconocida y pagada', 'El bono se negocia limpio'] } },
    },
  },
  {
    id: 'k4', t: '12:20', ch: 'presencial', who: null, titulo: 'Yenny, sin cita', banner: 'assets/foto/cafe.webp', lugar: 'Puerta de la oficina, a la hora del almuerzo', show: ['personas', 'etica', 'calidad'],
    body: () => `<p>Ibas a almorzar un chicharrón de pota en la carretilla de la esquina cuando alguien toca la puerta. Yenny Ríos, 23 años, de Pucallpa, con la malla del cabello todavía puesta. Trabaja en la línea 2, pero su credencial dice «Servicios Generales Nor Pacífico».</p><p>Habla bajito: «Señorita, me dijeron que usted escucha. Pero si la service se entera, no me renuevan». <mark class="clave">Tienes tiempo para dos preguntas</mark> antes de que termine su refrigerio.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Yenny.',
    opts: [
      { id: 'horas', label: '¿Cuántas horas trabajó en la campaña y quién se lo pidió?', info: '«Doce, a veces catorce, dos semanas seguidas. Lo pedía el supervisor de la service, y a veces el señor Renzo directamente.»' },
      { id: 'papel', label: '¿Firmó algún papel sobre esas horas?', info: '«El primer día nos dieron una hoja que decía «sobretiempo voluntario», en blanco, sin fecha. Todos firmamos. Si no, no entrábamos.»' },
      { id: 'pago', label: '¿Le pagaron algo por esas horas?', info: '«Cincuenta soles, en un sobre, sin boleta. A mi compañera le dieron treinta.»' },
      { id: 'sindicato', label: '¿Por qué vino conmigo y no al sindicato?', info: '«No estoy afiliada. En la service dicen que el que se afilia no renueva. Mi hijo está en Pucallpa con mi mamá; no puedo perder este trabajo.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, calidad: 3, etica: 1 },
      flags: ['yenny_escuchada', ...(picks.includes('papel') ? ['hojas_en_blanco'] : []), ...(picks.includes('pago') ? ['pago_en_sobre'] : [])],
      cartera: { service: picks.includes('papel') ? 'Hojas de «sobretiempo voluntario» firmadas en blanco' : picks.includes('pago') ? 'Pagos en sobre, sin boleta' : 'Jornadas de 12 a 14 horas' },
      out: 'Le prometes que su nombre no aparecerá en ningún papel. Yenny se va corriendo; quedan seis minutos de refrigerio. El chicharrón de pota se enfrió en su bolsita.',
      kusi: ['curioso', picks.includes('sindicato') ? 'Eso último también es libertad sindical…' : 'Lo que no estaba en el Excel…'],
    }),
    rules: [[LEY, 'TUO de la LRCT (D.S. 010-2003-TR): protege a los trabajadores frente a actos que condicionen su empleo a no afiliarse.'], [BP, 'Lo que te cuenta un trabajador con miedo se protege: se investiga el hecho, no a quien lo contó.']],
    mirada: {
      ve: 'Los trabajadores de una contratista suelen ser los más expuestos y los menos escuchados: no están en tu planilla ni en el sindicato. Lo que les pasa en tu planta también es tu problema.',
      visual: { tipo: 'mensaje', titulo: 'Lo que anotaste, sin nombre', txt: 'Personal de la contratista: jornadas de 12 a 14 horas por dos semanas. Hojas de «sobretiempo voluntario» firmadas en blanco. Pagos en sobre, sin boleta. Temor a no ser renovados si se afilian.' },
    },
  },
  {
    id: 'k5', t: '14:30', ch: 'llamada', who: 'lucho', titulo: 'Tres llamadas y una pregunta', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de Relaciones Laborales', show: ['confianza', 'etica', 'cumplimiento'],
    body: () => `<p>Después del almuerzo que no fue, el celular no para. La última llamada es la que esperabas desde el viernes.</p><p><mark class="clave">Mañana hay mesa</mark>, y todos quieren saber qué vas a decir.</p>`,
    type: 'calls',
    calls: [
      ['Administradora de Servicios Generales Nor Pacífico', 'Contesta con música de espera de fondo', '«Nosotros pagamos lo que su supervisión reporta. ¿Hojas en blanco? Eso lo verá mi supervisor. Mándenos el detalle y lo revisamos.»'],
      ['Renzo Távara · supervisor del turno noche', 'Contesta cansado', '«Lo de las hojas lo puso la service, señorita. Yo solo pedía gente. Ya sé, ya sé: también tenía que pedir que les paguen.»'],
      ['Lucho Paredes · sindicato', 'Contesta en la línea, con ruido de latas', '«Le aviso de frente: el viernes pusimos la denuncia ante SUNAFIL por las horas. Mañana en la mesa queremos una respuesta. ¿Qué nos va a decir?»'],
    ],
    prompt: 'Lucho espera tu respuesta. ¿Qué le dices?',
    choices: [
      { id: 'a', label: 'Que la empresa está revisando las horas de toda la línea y mañana traerá a la mesa un plan para pagarlas; que la denuncia es su derecho y no cambia lo que la empresa debe hacer.',
        res: { q: 'buena', fx: { confianza: 5, etica: 3, cumplimiento: 2 }, rel: { lucho: 1 }, flags: ['lucho_informado'], cartera: { mesa: 'Mañana: plan de pago de horas' },
          out: 'Lucho se queda callado unos segundos. «¿Un plan con fechas?» Le dices que sí. «Entonces mañana lo escuchamos. La denuncia sigue, pero lo escuchamos.»',
          pro: { ok: 'Reconoces la denuncia como un derecho y respondes con hechos, no con amenazas.', risk: 'Te comprometes a llevar un plan mañana: tiene que existir.', info: 'Cumple con la gerencia lo que acabas de anunciar.' },
          kusi: ['celebra', '¡Respuesta honesta, sin pelear!'] } },
      { id: 'b', label: 'Que no puedes adelantar nada por teléfono: mañana, en la mesa, la comisión dará su posición.',
        res: { q: 'aceptable', fx: { confianza: -1, cumplimiento: 1 },
          out: '«Siempre lo mismo», dice Lucho. «Mañana llevamos a la base, entonces.» Cuelga.',
          pro: { ok: 'Respetas que la posición la da la comisión.', risk: 'En la víspera de una inspección, el silencio se lee como que la empresa esconde algo.' },
          kusi: ['pensando', 'Formal… y frío.'] } },
      { id: 'c', label: 'Ofrecerle que, si retiran la denuncia, la empresa paga las horas esta misma semana.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -4, confianza: -3 }, rel: { lucho: -1 }, flags: ['denuncia_canje'],
          out: 'Lucho se ríe sin ganas. «¿O sea que si no retiramos la denuncia no pagan? Eso se lo voy a contar al inspector, palabra por palabra.»',
          pro: { ok: 'Buscas cerrar el conflicto rápido.', risk: 'Condicionar el pago de una deuda al retiro de una denuncia es presionar contra el ejercicio de un derecho.' },
          kusi: ['indignado', '¡El pago no se condiciona!'] } },
    ],
    rules: [[LEY, 'TUO de la LRCT, art. 54: las partes deben abstenerse de acciones que puedan resultar lesivas a la contraria.'], [BP, 'Una denuncia ante la autoridad es un derecho del trabajador: no se negocia ni se castiga.']],
    mirada: {
      ve: 'Cuando el sindicato denuncia, la tentación es responder a la defensiva o negociar el retiro. Lo que más protege a la empresa es lo más simple: reconocer el problema y mostrar que ya se está corrigiendo.',
      visual: { tipo: 'cambio', titulo: 'Responder a una denuncia', pares: [['«Retiren la denuncia y pagamos»', '«Pagaremos con un plan, haya o no denuncia»'], ['«No puedo decir nada»', '«Mañana traemos fechas»']] },
    },
  },
  {
    id: 'k6', t: '16:20', ch: 'whatsapp', who: null, titulo: 'Reglas para la supervisión', banner: 'assets/foto/supervisa.webp', lugar: 'Oficina de Relaciones Laborales', show: ['cumplimiento', 'personas', 'confianza'],
    body: (n, F) => `<p>${F.has('supervision_corregida') ? 'El viernes quedó escrito que la supervisión tuvo responsabilidad en el caso de Marcos.' : 'Nadie le ha dicho todavía a la supervisión que algo tiene que cambiar.'} Gladys te pidió que lo escribas tú en el grupo «Supervisores Planta»: once personas, incluido Renzo.</p><p><mark class="clave">Reglas claras, sin buscar culpables en público</mark>.</p>`,
    type: 'compose', enviaA: 'supervisores', para: 'Para: Supervisores Planta (11 miembros)', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'turnos', t: 'Turnos', ops: [
        { id: 't1', t: 'Desde hoy, nadie encadena turnos. Si falta personal, se avisa a la jefa de planta para cubrirlo de otra forma.', ok: true, por: 'Corta la causa del caso de Marcos.' },
        { id: 't2', t: 'Desde hoy, solo se puede doblar turno una vez por semana.', ok: false, por: 'Sigue permitiendo jornadas de 16 horas.' },
      ] },
      { id: 'sobretiempo', t: 'Sobretiempo', ops: [
        { id: 's1', t: 'El sobretiempo se pide a cada persona, el mismo día, y se registra en el reloj. No se firman hojas en blanco.', ok: true, por: 'Voluntario y registrado: como dice la norma.' },
        { id: 's2', t: 'Recojan las hojas de «sobretiempo voluntario» firmadas y guárdenlas por si acaso.', ok: false, por: 'Guardar hojas en blanco es guardar un problema.' },
      ] },
      { id: 'relevo', t: 'Relevo', ops: [
        { id: 'r1', t: 'Si un operario de autoclave pide relevo, se le da de inmediato. Sin excepciones.', ok: true, por: 'La medida del informe, ahora en práctica.' },
        { id: 'r2', t: 'Si un operario pide relevo, que espere a que haya alguien libre.', ok: false, por: 'Es exactamente lo que pasó con Marcos.' },
      ] },
      { id: 'tono', t: 'Cierre', ops: [
        { id: 'c1', t: 'Sé que la campaña fue durísima para todos. Esto es para que no vuelva a pasar, no para buscar culpables.', ok: true, por: 'Reconoce el esfuerzo y baja la defensa.' },
        { id: 'c2', t: 'Ya sabemos quién pidió los tres turnos. Que no se repita.', ok: false, por: 'Expone a Renzo frente a todos.' },
      ] },
    ],
    res: sel => {
      const buenas = ['t1', 's1', 'r1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 4 ? 'buena' : buenas >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, personas: sel.tono === 'c2' ? -4 : 2, confianza: q === 'buena' ? 3 : 0 }, rel: { gladys: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['reglas_supervisores'],
        cartera: { reglas: q === 'riesgosa' ? 'Mensaje confuso' : 'Reglas enviadas: sin turnos encadenados, sin hojas en blanco, relevo inmediato' },
        out: q === 'buena' ? 'Seis supervisores responden con un pulgar. Renzo escribe, después de un rato: «Entendido». Gladys reenvía tu mensaje al tablero de la planta.' : q === 'aceptable' ? 'Hay pulgares y una pregunta: «¿Y si de verdad no hay gente?». Gladys responde por ti.' : 'Nadie responde. Renzo sale del grupo y vuelve a entrar diez minutos después.',
        pro: { ok: 'Las reglas atacan las causas: turnos encadenados, firmas en blanco y relevos negados.', risk: 'Una regla a medias permite seguir igual; un mensaje que expone a alguien cierra la colaboración.', info: 'Las reglas valen si Gladys las hace cumplir el primer día que falte gente.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Reglas claras y sin humillar!' : 'Ese mensaje deja huecos…'],
      };
    },
    rules: [[LEY, 'D.S. 007-2002-TR: el sobretiempo es voluntario; D.S. 004-2006-TR: el tiempo trabajado se registra en el control de asistencia.']],
    mirada: {
      ve: 'Corregir el cumplimiento no termina en pagar: termina cuando cambian las prácticas que causaron la deuda. Esas prácticas viven en la supervisión, y ahí hay que hablar claro y sin humillar.',
      visual: { tipo: 'mensaje', titulo: 'Reglas para la supervisión', txt: 'Desde hoy, nadie encadena turnos. El sobretiempo se pide a cada persona, el mismo día, y se registra en el reloj; no se firman hojas en blanco. Si un operario de autoclave pide relevo, se le da de inmediato. Esto es para que no vuelva a pasar, no para buscar culpables.' },
    },
  },
  {
    id: 'k7', t: '18:10', ch: 'correo', who: null, titulo: '«Por si viene SUNAFIL»', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'calidad', 'etica'],
    mail: { from: 'Valeria Castro · Abogada laboralista', to: 'Analista de Relaciones Laborales', asunto: 'Por si viene SUNAFIL' },
    body: () => `<p>Confirmé que la denuncia es contra nosotros. Pueden venir en cualquier momento, sin aviso. <mark class="clave">¿Qué tienes listo para mostrar?</mark></p><p>Valeria</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Una carpeta completa: lo que suelen pedir y lo que ya estamos corrigiendo.',
        res: { q: 'buena', fx: { cumplimiento: 5, calidad: 3, etica: 2 }, rel: { valeria: 1 }, flags: ['carpeta_completa'], cartera: { cuadro: 'En la carpeta para una posible inspección' },
          responde: 'Valeria: tengo listos planillas y boletas de la campaña, el reporte del reloj sin modificar, contratos, el contrato con Nor Pacífico, el cuadro de horas corregido, el expediente de Marcos y el mensaje con las reglas nuevas para la supervisión. Si vienen, mostramos lo que pasó y lo que ya estamos haciendo.',
          out: 'Valeria responde a las 18:30: «Así. Una empresa que ya empezó a corregir se ve muy distinta de una que esconde».', kusi: ['celebra', '¡Carpeta lista y honesta!'] } },
      { id: 'b', label: 'Lo que suelen pedir: planillas y boletas. El cuadro de horas es un documento interno de trabajo.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, etica: -1 }, flags: ['carpeta_minima'],
          responde: 'Valeria: tengo listas las planillas y boletas de la campaña. El cuadro de horas lo dejé aparte, como documento interno, hasta que tengamos el plan aprobado.',
          out: 'Valeria responde: «Si piden el registro de asistencia, la diferencia aparece sola. Y ahí parecerá que la escondimos».', kusi: ['pensando', '¿Interno… o escondido?'] } },
    ],
    mirada: { ve: 'Una inspección no se prepara escondiendo papeles: se prepara ordenando la verdad. Mostrar lo que pasó junto con lo que ya se está corrigiendo cambia la conversación con la autoridad.' },
  },
];
