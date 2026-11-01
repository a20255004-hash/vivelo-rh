// Analista de Administración de Personal · Capítulo 3 · «Las marcaciones» · Semana 1, viernes.
// Hilo del mes: el reloj del fundo 3 no registró la salida de una cuadrilla entera. Y es viernes: le prometiste una respuesta a Yolanda.
// Normas citadas:
// - D.S. 004-2006-TR (registro de control de asistencia), modificado por D.S. 011-2006-TR: el registro consigna ingreso y salida;
//   art. 7: si el trabajador permanece en el centro de trabajo fuera de su jornada, se presume sobretiempo, salvo prueba en contrario objetiva y razonable.
//   https://lpderecho.pe/disposiciones-registro-control-asistencia-salida-regimen-laboral-privada-decreto-supremo-004-2006-tr/
//   https://lpderecho.pe/jornada-trabajo-horario-horas-extras-sobretiempo/
// - SUNAFIL (criterio difundido): el tareo no reemplaza al registro de control de asistencia. https://misha.pe/?p=55269
// - D.S. 007-2002-TR (TUO de jornada, horario y sobretiempo): el sobretiempo es voluntario; refrigerio no menor de 45 minutos.
// - Ley 31110 (régimen laboral agrario): descanso vacacional de 30 días calendario, como en el régimen general.

export const CAP = {
  n: 3, titulo: 'Las marcaciones', dia: 'Semana 1, viernes', foto: 'assets/esc/reloj.webp',
  lugar: 'Agrícola Valle Verde · Fundo 3, Valle de Ica',
  inicio: '05:30', fin: '19:00', cierreHora: '18:40',
  apertura: 'Viernes. El reloj del fundo 3 no registró la salida de la cuadrilla 12: treinta y dos personas que, según el sistema, nunca se fueron. Y hoy vence tu promesa a Yolanda.', boton: 'Abrir la exportación del reloj',
  kusi: 'Hoy toca ser detective de horas. ¡Lupa y café!',
  lead: 'Reconstruiste una salida que el reloj no vio, decidiste cuántas horas extra se pagan, le diste a Yolanda una respuesta verdadera y dejaste un reporte de incidencias que cambia el proceso.',
  reflexion: 'Cuando un registro falla, ¿a quién le toca probar lo que pasó?',
  siguiente: { n: 4, titulo: 'El cierre', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'marcacion', p: 'Salida de la cuadrilla 12', j: 'Joel · TI / Raúl · Fundo', d: 1, e: '32 personas sin marcación' },
  { id: 'he', p: 'Horas extra del jueves', j: 'Mónica · Planillas', d: 0, e: 'Por definir' },
  { id: 'reclamos', p: 'Reclamos de la campaña pasada', j: 'Mónica · Planillas', d: 4, e: 'Respuesta a Yolanda: hoy' },
  { id: 'altas', p: 'Altas de campaña', j: 'Mónica · Planillas', d: 4, e: '520 de 900' },
  { id: 'cierre', p: 'Cierre de quincena', j: 'Mónica · Planillas', d: 0, e: 'Martes: corte de incidencias' },
];

export const FUTURO = {
  he_presuncion: ['Pagaste el sobretiempo de la cuadrilla 12 hasta que salió el bus.', 'Raúl lo discutirá en el cierre del capítulo 4.'],
  he_evidencia: ['Pagaste el sobretiempo hasta la última jaba, con sustento escrito.', 'Lo verás en el cierre del capítulo 4.'],
  he_tareo: ['Aceptaste el tareo del supervisor: la cuadrilla 12 no cobra horas extra.', 'La cuadrilla reclamará en el capítulo 5.'],
  vacaciones_masivo: ['Descubriste que las 14 liquidaciones de marzo omitieron las vacaciones truncas.', 'Se recalculan para el capítulo 5.'],
  yolanda_verdad: ['Le dijiste a Yolanda qué falló, que se le debe y cuándo se le paga.', 'Capítulo 5.'],
  yolanda_espera: ['Le pediste a Yolanda una semana más sin decirle qué encontraste.', 'Capítulo 5.'],
  reloj_respaldo: ['Joel y Raúl aceptaron poner batería de respaldo y un registro de salida en papel firmado.', 'Capítulo 7, cuando la inspectora pida el registro de asistencia.'],
  supervisor_mano: ['Los supervisores siguen corrigiendo marcaciones a mano en el Excel.', 'Capítulo 7.'],
  eusebio_atendido: ['Atendiste a don Eusebio y su constancia salió el mismo día.', 'Él lo contará en el comedor.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Valle Verde', sub: 'Mónica, Joel, Wendy y tú', c: '#2F6B3F' },
  monica: { n: 'Mónica Uribe', sub: 'Jefa de Planillas', who: 'monica' },
  raul: { n: 'Ing. Raúl Cárdenas', sub: 'Jefe de fundo', who: 'raul' },
  joel: { n: 'Joel Ramírez', sub: 'Soporte de TI', who: 'joel' },
  yolanda: { n: 'Yolanda Quispe', sub: 'Cosechadora', who: 'yolanda' },
  teresa: { n: 'Teresa Huamaní', sub: 'Caporala · cuadrilla 7', c: '#B5651D' },
  fidel: { n: 'Fidel Choque', sub: 'Delegado · cuadrilla 12', c: '#7A3E9D' },
};

export const WSP = [
  { chat: 'joel', t: '05:30', de: 'Joel', txt: 'Llegó la exportación automática. Fundo 3: corte de luz de 14:52 a 19:10. El reloj tiene batería para nada 🪫', si: 'joel_aliado' },
  { chat: 'joel', t: '08:50', de: 'Joel', txt: 'Recién bajé los datos del fundo 3 a mano. Hay un hueco feo desde las 14:52. Te paso el archivo.', no: 'joel_aliado' },
  { chat: 'grupo', t: '06:05', de: 'Mónica', txt: 'Hoy vence la respuesta de los reclamos de la campaña pasada. Yo reviso contigo a las 11:00.' },
  { chat: 'fidel', t: '06:40', de: 'Fidel', txt: 'Buenos días señorita. Ayer la cuadrilla 12 se quedó cargando hasta tarde. El supervisor dice que salimos a las 3. Eso no es así.' },
  { chat: 'teresa', t: '07:15', de: 'Teresa', txt: 'Señorita, yo vi a la 12 cargando jabas cuando ya oscurecía. Mi bus pasó a las 6 y todavía estaban.', si: 'teresa_aliada' },
  { chat: 'raul', t: '09:00', de: 'Ing. Raúl', txt: 'Su mesa de ayer funcionó. Ahora le pido lo mismo con las horas: datos, no cuentos.', si: 'mesa_rapida' },
  { chat: 'raul', t: '09:00', de: 'Ing. Raúl', txt: 'Voy a su oficina con Ángel, el supervisor de la 12. Tiene su tareo.', no: 'mesa_rapida' },
  { chat: 'yolanda', t: '11:30', de: 'Yolanda', txt: 'Señorita, hoy es viernes 🙏', si: 'yolanda_escuchada' },
  { chat: 'yolanda', t: '11:30', de: 'Yolanda', txt: 'Señorita, ¿a qué hora me depositan? Mi esposo ya fue al cajero dos veces.', si: 'yolanda_promesa' },
  { chat: 'raul', t: '17:05', de: 'Ing. Raúl', txt: 'Ok con la batería y la hoja de salida. Que Ángel no toque más el Excel. Lo hablo yo con él.', si: 'reloj_respaldo' },
];

export const CORREOS = [
  { t: '05:40', de: 'Sistema de asistencia · Fundo 3', para: 'Planillas Valle Verde', asunto: '[Alerta] 32 marcaciones de salida faltantes · Cuadrilla 12', html: '<p>Se detectaron <b>32 registros sin marcación de salida</b> el jueves. Acción por defecto configurada: <b>asignar salida 15:00 (fin de jornada)</b>.</p><p>Si no se modifica antes del corte, la acción se aplicará automáticamente.</p>' },
  { t: '08:10', de: 'Packing Valle Verde · Control de recepción', para: 'Planillas Valle Verde', asunto: 'RE: Recepción de jabas cuadrilla 12 · jueves', html: '<p>Según el registro de recepción, la cuadrilla 12 entregó su <b>última jaba a las 18:10</b>. Total del día: 1,140 jabas.</p>' },
  { t: '08:25', de: 'Transportes Señor de Luren', para: 'Logística Valle Verde; Planillas', asunto: 'Reporte GPS · bus 4 · jueves', html: '<p>El bus 4 llegó al fundo 3 a las 18:31 por una llanta baja en la Panamericana y salió a las <b>18:45</b> con 32 pasajeros.</p>' },
];

export const QUIZ = [
  { q: 'El reloj no registró la salida de una cuadrilla. ¿Qué dice el D.S. 004-2006-TR si el trabajador permaneció en el centro de trabajo fuera de su jornada?', ops: ['Que se le cuenta como falta', 'Que se presume que trabajó en sobretiempo, salvo prueba en contrario objetiva y razonable', 'Que la empresa decide', 'Que no se paga nada sin marcación'], ok: 1, por: 'El art. 7 del D.S. 004-2006-TR presume sobretiempo por todo el tiempo de permanencia, salvo prueba objetiva en contrario.' },
  { q: 'El supervisor tiene un tareo que dice que la cuadrilla salió a las 3. ¿Reemplaza al registro de asistencia?', ops: ['Sí, si lo firma el supervisor', 'No: el tareo es un control de producción, no el registro de control de asistencia', 'Sí, en el régimen agrario', 'Solo si el reloj falla'], ok: 1, por: 'SUNAFIL ha sancionado a empresas por usar el tareo en lugar del registro de asistencia.' },
  { q: 'Las horas extra, ¿pueden imponerse?', ops: ['Sí, en campaña', 'No: el trabajo en sobretiempo es voluntario, salvo casos excepcionales previstos en la norma', 'Sí, si se pagan', 'Solo los sábados'], ok: 1, por: 'El TUO de jornada (D.S. 007-2002-TR) establece que el sobretiempo es voluntario, con excepciones puntuales.' },
  { q: 'Con la Ley 31110, ¿cuántos días de vacaciones tiene un trabajador agrario por año completo de servicios?', ops: ['15 días, como antes', '30 días calendario', '7 días', 'No tiene vacaciones'], ok: 1, por: 'La Ley 31110 llevó el descanso vacacional agrario a 30 días, como el régimen general. Por eso una plantilla vieja calcula mal las vacaciones truncas.' },
  { q: 'Descubres que un error de liquidación afecta a 14 personas, no solo a quien reclamó. ¿Qué haces?', ops: ['Pagas solo a quien reclamó', 'Corriges los 14 casos y avisas a cada persona', 'Esperas a que reclamen los demás', 'Lo dejas para la próxima campaña'], ok: 1, por: 'Un error sistemático se corrige para todos, reclamen o no.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '05:50', ch: 'presencial', who: 'joel', titulo: 'El hueco de las 14:52', banner: 'assets/esc/reloj.webp', lugar: 'Caseta de TI · fundo 3', show: ['calidad', 'tiempo', 'confianza'],
    body: (n, F) => `<p>La caseta de TI huele a café de máquina y a cable quemado. Joel, con una casaca del fundo encima de la camisa, gira la pantalla hacia ti.</p><p>${F.has('joel_aliado') ? '«La exportación llegó sola a las 5:30, como quedamos. Por eso lo vimos antes del corte.»' : '«Si no venías, esto lo veíamos el martes, en pleno cierre.»'} En la gráfica, las marcaciones del jueves se cortan en seco a las 14:52. <mark class="clave">Treinta y dos salidas que no existen</mark>. Tienes tiempo para dos preguntas antes de que Joel salga al fundo 1.</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas. ¿Qué le preguntas a Joel?',
    opts: [
      { id: 'luz', label: '¿Qué pasó a las 14:52?', info: '«Corte de luz en todo el fundo 3 hasta las 19:10. El reloj tiene una batería de respaldo que está muerta desde la campaña pasada. Nadie la pidió.»' },
      { id: 'otros', label: '¿Hay otro registro que diga a qué hora salieron?', info: '«El packing registra la hora de cada jaba por cuadrilla. Y los buses tienen GPS: Logística te lo puede pedir.»' },
      { id: 'mano', label: '¿Alguien puede modificar las marcaciones?', info: '«En el sistema, no. Pero los supervisores tienen el Excel de exportación y algunos lo «arreglan» antes de mandarlo. Ángel, el de la 12, es uno.»' },
      { id: 'cambiar', label: '¿Se puede cambiar el reloj por uno nuevo?', info: '«Sí, en abril, cuando haya presupuesto. Hoy no te sirve.»' },
    ],
    res: picks => ({
      q: null,
      fx: { calidad: picks.includes('otros') ? 4 : 1, cumplimiento: picks.includes('mano') ? 3 : 0, confianza: picks.includes('luz') ? 2 : 0 },
      rel: { joel: 1 },
      out: picks.includes('otros') ? 'Le escribes a Packing y a Logística antes de las 6:30. A las 8:25 tendrás dos pruebas que no dependen del reloj.' : 'Sabes por qué falló el reloj, pero todavía no sabes a qué hora se fue la gente.',
      kusi: ['curioso', picks.includes('otros') ? 'Las jabas y el bus también marcan la hora.' : 'El reloj falló… ¿quién más vio la salida?'],
    }),
    rules: [[LEY, 'D.S. 004-2006-TR: el registro de control de asistencia consigna la hora de ingreso y de salida de cada trabajador.']],
    mirada: {
      ve: 'Cuando el registro oficial falla, una analista no rellena el hueco con el horario «normal»: busca otras huellas del día real. Las jabas, el bus, las fotos, los testigos. La pregunta correcta vale más que el reloj nuevo.',
      visual: { tipo: 'linea', titulo: 'El jueves de la cuadrilla 12', hitos: [['06:00', 'Ingreso marcado'], ['14:52', 'Corte de luz: el reloj se apaga'], ['15:00', 'Fin de jornada según el horario'], ['18:10', 'Última jaba en packing'], ['18:45', 'Sale el bus 4']] },
    },
  },
  {
    id: 'd2', t: '07:30', ch: 'documento', who: null, titulo: 'El borrador automático', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Oficina de Planillas', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>El sistema generó solo el reporte de incidencias del jueves. Si nadie lo toca antes del martes, <mark class="clave">entra así al cierre de quincena</mark>.</p>${F.has('fecha_maquillada') ? '<p>Al revisarlo, ves algo más: el reloj tiene marcaciones del lunes de personas que, en el T-Registro, «ingresaron» el miércoles. Las fechas que pusiste no cuadran con la máquina.</p>' : '<p>Wendy lo imprimió y le puso pósits amarillos donde algo le sonó raro.</p>'}`,
    type: 'flag', prompt: 'Marca las incidencias que no pueden cerrarse como están.',
    doc: { t: 'Reporte de incidencias de marcación · jueves', sub: 'Generado por el sistema · fundo 3 · 214 trabajadores' },
    lines: [
      { id: 'auto', t: 'Cuadrilla 12 (32 personas): sin marcación de salida → salida asignada a las 15:00, fin de jornada.', bad: LEY, why: 'El registro debe reflejar la salida real. Si permanecieron en el fundo, se presume sobretiempo salvo prueba objetiva en contrario (D.S. 004-2006-TR, art. 7). Inventar las 15:00 no es una prueba.' },
      { id: 'tarde', t: 'Cuadrilla 9: 41 tardanzas de 6 minutos por llegada del bus 2 → descuento de la fracción.', bad: BP, why: 'El bus es de la empresa. Descontar a la gente por el retraso del transporte que contrató la empresa es injusto y genera reclamos.' },
      { id: 'excel', t: 'Cuadrilla 12: el supervisor Ángel envió un Excel con salidas corregidas «a las 15:00» y nota: «según mi tareo».', bad: LEY, why: 'El tareo mide producción; no reemplaza al registro de control de asistencia. Una corrección manual sin sustento no vale como registro.' },
      { id: 'refri', t: 'Refrigerio de 45 minutos marcado por todos entre 11:30 y 12:15.' },
      { id: 'falta', t: 'Cuadrilla 12: sin salida marcada = falta injustificada en el jueves.', bad: LEY, why: 'Tienen ingreso marcado y 1,140 jabas entregadas. No es una falta: es un registro incompleto que debe corregirse.' },
      { id: 'dm', t: 'Dos descansos médicos presentados con certificado de la posta de Los Aquijes.' },
      { id: 'luz', t: 'Nota de TI: corte de luz de 14:52 a 19:10; batería de respaldo inoperativa.', duda: 'No es un error: es la explicación. Pero dice algo importante: la empresa sabía que la batería no servía.' },
    ],
    res: ({ missLey, hitsLey }, F) => ({
      out: missLey ? 'El reporte queda casi como lo hizo el sistema. El martes, 32 personas cobrarán un jueves de 15:00 que no vivieron.' : `Marcas ${hitsLey} incidencias para corregir con sustento. ${F && F.has('fecha_maquillada') ? 'Y anotas aparte, con un nudo en el estómago, las fechas de ingreso que no cuadran con el reloj.' : 'Wendy sonríe: sus pósits estaban en el lugar correcto.'}`,
      flags: missLey ? ['supervisor_mano'] : [],
      cartera: { marcacion: missLey ? 'Salida automática 15:00 aceptada' : 'Salida en revisión con jabas y GPS' },
      pro: { ok: 'Un reporte automático es un borrador: la analista decide qué incidencias son reales.', risk: 'Una «acción por defecto» del sistema se vuelve, sin que nadie lo decida, una política de pago.', info: 'Revisa cómo está configurada la acción por defecto del sistema de asistencia: hoy decide por ti.' },
      kusi: missLey ? ['preocupado', 'Las 15:00 las puso una máquina, no la realidad.'] : ['celebra', '¡Las incidencias ahora cuentan lo que pasó!'],
    }),
    rules: [[LEY, 'D.S. 004-2006-TR, art. 7: la permanencia fuera de jornada se presume sobretiempo, salvo prueba en contrario objetiva y razonable.'], [LEY, 'El tareo no sustituye al registro de control de asistencia (criterio de SUNAFIL).']],
    mirada: {
      ve: 'Los sistemas de asistencia vienen con «acciones por defecto» que alguien configuró hace años. En campaña, una regla automática puede quitarle horas a cientos de personas sin que nadie lo decida. Revisar el borrador es decidir.',
      visual: { tipo: 'cambio', titulo: 'Del borrador del sistema a incidencias reales', pares: [['Salida automática: 15:00', 'Salida con jabas y GPS'], ['Tardanza por el bus de la empresa', 'Sin descuento'], ['Excel corregido «según tareo»', 'Registro con sustento'], ['Falta injustificada', 'Registro incompleto por corte de luz']] },
      normas: [{ ley: 'D.S. 004-2006-TR, registro de control de asistencia', dice: 'Consigna ingreso y salida. Si el trabajador permanece en el centro de trabajo antes o después de su jornada, se presume que trabajó en sobretiempo, salvo prueba en contrario objetiva y razonable.', practica: 'Cuando el reloj falla, la carga de reconstruir la salida es de la empresa, no del trabajador.' }],
    },
  },
  {
    id: 'd3', t: '09:15', ch: 'presencial', who: 'raul', titulo: 'Las tres horas de la cuadrilla 12', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Planillas', show: ['cumplimiento', 'personas', 'confianza'],
    body: (n, F) => `<p>Raúl entra con Ángel, el supervisor de la 12: cuarentón, de Nasca, con el cuaderno de tareo bajo el brazo. Afuera espera Fidel Choque, el delegado de la cuadrilla, con la gorra en la mano.</p><p>Sobre tu mesa: el packing dice última jaba a las 18:10; el GPS, bus saliendo a las 18:45${F.has('teresa_aliada') ? '; y Teresa te escribió que los vio cargando cuando ya oscurecía' : ''}. Raúl cruza los brazos: «Mi presupuesto es por hectárea. <mark class="clave">Esperar el bus no es trabajar</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pagar sobretiempo hasta las 18:45: estuvieron en el fundo, la ley presume que trabajaron y la empresa no tiene una prueba que diga lo contrario; el bus tardío fue de la empresa.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 4, confianza: -1 }, rel: { raul: -1 }, flags: ['he_presuncion'], cartera: { he: '32 × 3 h 45 min con sustento' },
          out: 'Raúl resopla: «Entonces que Logística pague la llanta». Ángel guarda su cuaderno sin decir nada. Fidel, afuera, se pone la gorra: ya escuchó.',
          pro: { ok: 'Aplicas la presunción como la norma la plantea: sin prueba objetiva en contra, el tiempo de permanencia es sobretiempo.', risk: 'Raúl siente que pagas «por esperar». Explícale que el bus lo contrató la empresa.', info: 'Pide a Logística el reporte del bus: el costo de esos 35 minutos es de quien falló.' },
          kusi: ['animo', 'La duda se resolvió a favor de quien no tenía cómo probar.'] } },
      { id: 'b', label: 'Pagar sobretiempo hasta las 18:10, la última jaba, y dejar por escrito que de 18:10 a 18:45 esperaron el bus sin labores, con el reporte de GPS como sustento.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, personas: 2, confianza: 3 }, rel: { raul: 1 }, flags: ['he_evidencia'], cartera: { he: '32 × 3 h 10 min con sustento' },
          out: 'Raúl asiente: «Eso es justo». Fidel pregunta desde la puerta quién los obligó a esperar 35 minutos en el campo, de noche. Nadie le contesta.',
          pro: { ok: 'Pagas lo que el registro de jabas prueba y documentas por qué no pagas lo demás.', risk: 'Esperar el transporte de la empresa, en el fundo, de noche y sin poder irse, es una zona gris: la presunción de la norma podría jugar en contra.', info: 'Si eliges este criterio, aplícalo igual en todas las cuadrillas.' },
          kusi: ['pensando', 'Defendible… pero esos 35 minutos tampoco eran libres.'] } },
      { id: 'c', label: 'Cerrar con el tareo de Ángel: él estuvo en el campo y conoce a su cuadrilla; el reloj se apagó, y no puedes pagar horas que nadie autorizó.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, personas: -5, etica: -2 }, rel: { raul: 1 }, flags: ['he_tareo'], cartera: { he: 'Sin horas extra para la cuadrilla 12' },
          out: 'Ángel sonríe. Fidel se va sin despedirse. En el bus de la tarde, la cuadrilla 12 ya habla de ir a SUNAFIL.',
          pro: { ok: 'Respetas la autoridad del supervisor.', risk: 'Tienes dos pruebas objetivas (jabas y GPS) que contradicen el tareo. Ignorarlas es elegir la versión que cuesta menos.' },
          kusi: ['indignado', '¡Las jabas no se cargaron solas!'] } },
    ],
    rules: [[LEY, 'D.S. 004-2006-TR, art. 7: presunción de sobretiempo por permanencia, salvo prueba objetiva y razonable.'], [LEY, 'D.S. 007-2002-TR: el sobretiempo es voluntario y se paga con sobretasa.']],
    mirada: {
      ve: 'Raúl no miente: su presupuesto es por hectárea y nadie le avisó de la llanta. Fidel tampoco: su gente estaba en el campo, de noche, sin poder irse. La decisión de Planillas no es a quién creerle, sino qué prueba la empresa y qué presume la ley.',
      visual: { tipo: 'rango', titulo: 'Horas extra por persona según cada criterio', min: 0, max: 4, banda: [3.1, 3.8], marcas: [['Tareo de Ángel', 0], ['Hasta la última jaba', 3.2], ['Hasta la salida del bus', 3.75]] },
      normas: [{ ley: 'D.S. 004-2006-TR, art. 7', dice: 'Si el trabajador se encuentra en el centro de trabajo antes de la hora de ingreso o después de la de salida, se presume que el empleador dispuso labores en sobretiempo por todo ese tiempo, salvo prueba en contrario objetiva y razonable.', practica: 'La empresa tiene que probar que no trabajaron; la cuadrilla no tiene que probar que sí.' }],
    },
  },
  {
    id: 'd4', t: '11:40', ch: 'llamada', who: null, titulo: 'Las llamadas del viernes', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de Planillas, con la puerta cerrada', show: ['personas', 'etica', 'calidad'],
    body: (n, F) => `<p>A las 11:00 revisaste con Mónica las 14 liquidaciones de marzo. El error no era de Yolanda: <mark class="clave">ninguna incluyó vacaciones truncas</mark>. El sistema usó la plantilla anterior a la Ley 31110 y la fórmula quedó en cero.</p><p>${F.has('yolanda_promesa') ? 'Yolanda cree que hoy le depositan, porque se lo prometiste. ' : ''}Mónica aprobó recalcular los 14 casos y pagarlos con la quincena. Llamas a los primeros cuatro.</p>`,
    type: 'calls',
    calls: [['Yolanda Quispe · cuadrilla 5', 'Contesta en el refrigerio', 'Aló, señorita… ¿ya revisó? Estoy con mi hija al lado, se lo pongo en altavoz.'], ['Marcelino Ayvar · campaña pasada', 'Contesta desde una obra en Chincha: ya no trabaja aquí', '¿Planillas de Valle Verde? ¿Me llaman a mí? Pensé que nadie se acordaba.'], ['Rosmery Tipián · cuadrilla 9', 'Contesta, desconfiada', '¿Y por qué me llaman si yo no reclamé nada? ¿Me van a descontar algo?'], ['Edwin Navarro · campaña pasada', 'Número fuera de servicio']],
    prompt: 'Ya sabes qué falló y que se pagará con la quincena. ¿Qué les dices?',
    choices: [
      { id: 'a', label: 'Decirle a cada persona lo que falló, que se le debe, cuándo se le paga y cómo verá el monto en su boleta. A Edwin, buscarlo por su DNI en la carpeta de ceses.',
        res: { q: 'buena', fx: { personas: 6, etica: 4, tiempo: -2 }, rel: { yolanda: 1, monica: 1 }, flags: ['vacaciones_masivo', 'yolanda_verdad'], cartera: { reclamos: '14 liquidaciones en recálculo · pago con la quincena' },
          envia: ['yolanda', 'Yolanda, como quedamos: revisé su liquidación de marzo. No se le pagaron las vacaciones truncas, y no fue solo a usted: fueron 14 personas. Se le paga con la quincena del martes y lo verá en su boleta como «vacaciones truncas campaña anterior». Gracias por reclamar: gracias a usted se corrige para todos.'],
          out: 'Yolanda tarda en responder. Luego manda un audio corto: «Ya, señorita. Eso era lo que quería: que me crean». Rosmery pregunta dos veces si es verdad. Marcelino dice que irá a cobrar aunque tenga que pedir permiso en la obra.',
          pro: { ok: 'Corriges el error para todos, no solo para quien se atrevió a reclamar, y le das a cada persona una fecha y una forma de verificarlo.', risk: 'Si la quincena del martes se atrasa, la promesa ahora es de 14 personas.', info: 'A quienes ya no trabajan en la empresa, ofréceles transferencia: no todos pueden volver al fundo a cobrar.' },
          kusi: ['celebra', '¡Uno reclamó y catorce cobran! ¡Qué divino!'] } },
      { id: 'b', label: 'Pedirles una semana más sin entrar en detalles: es mejor no hablar de un error de la empresa hasta tener los 14 montos exactos y aprobados.',
        res: { q: 'aceptable', fx: { personas: -3, etica: -1, calidad: 2 }, rel: { yolanda: -1 }, flags: ['vacaciones_masivo', 'yolanda_espera'], cartera: { reclamos: '14 liquidaciones en recálculo · sin aviso' },
          envia: ['yolanda', 'Yolanda, estamos revisando su caso. Necesito una semana más. Le aviso.'],
          out: 'Yolanda contesta: «Otra semana más». Rosmery cuelga convencida de que le van a descontar algo. Tienes los montos, pero perdiste el viernes.',
          pro: { ok: 'No das montos que todavía no están aprobados.', risk: 'Ya sabías qué falló y cuándo se paga. Callarlo después de prometer una respuesta el viernes se siente, para Yolanda, como la cuarta vez.' },
          kusi: ['triste', 'Ella pidió una respuesta, no un monto.'] } },
    ],
    rules: [[LEY, 'Ley 31110: el descanso vacacional agrario es de 30 días calendario por año; al cese se pagan las vacaciones truncas en proporción al tiempo trabajado.'], [BP, 'Un error sistemático se corrige para todos los afectados, reclamen o no.']],
    mirada: {
      ve: 'El reclamo de una persona suele ser la punta de un error masivo. Lo que hace grande a una analista no es pagarle a quien insistió, sino buscar a los que no se atrevieron a reclamar.',
      visual: { tipo: 'embudo', titulo: 'De un reclamo a una corrección', niveles: [['Reclamó', 1], ['Liquidaciones revisadas', 14], ['Con vacaciones truncas en cero', 14], ['Contactados hoy', 3]] },
    },
  },
  {
    id: 'd5', t: '14:20', ch: 'presencial', who: null, titulo: 'Una constancia «para hoy»', banner: 'assets/esc/dudas.webp', lugar: 'Ventanilla de Planillas', show: ['personas', 'tiempo'],
    body: () => `<p>La impresora de la oficina se atasca por tercera vez. Wendy la abre con un clip mientras, en la ventanilla, espera don Eusebio Cahuana: 63 años, sombrero de paja, once campañas en Valle Verde.</p><p>«Señorita, necesito una constancia de trabajo <mark class="clave">para hoy</mark>. La Caja me da el préstamo para el techo de mi casa si la llevo antes de las cinco.» Tú tienes el reporte de incidencias a medias.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Hacer la constancia en diez minutos con la plantilla, imprimirla en la impresora de Gerencia y pedirle a Mónica que la firme.',
        res: { q: 'buena', fx: { personas: 4, tiempo: -2 }, rel: { monica: 0 }, flags: ['eusebio_atendido'],
          out: 'A las 14:45 don Eusebio dobla la constancia dentro de una bolsa plástica, para que no se ensucie. Te da la mano con las dos suyas.',
          pro: { ok: 'Diez minutos tuyos son un techo para don Eusebio.', risk: 'Si cada urgencia interrumpe el cierre, el cierre no llega.', info: 'Deja una plantilla de constancia lista para que Wendy la haga sola la próxima vez.' },
          kusi: ['feliz', '¡Diez minutos, un techo!'] } },
      { id: 'b', label: 'Explicarle que hoy estás con el cierre y que la tendrá el lunes a primera hora.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -2 },
          out: 'Don Eusebio asiente despacio. «El lunes ya no hay tasa, señorita, pero gracias.» Se va caminando hacia el paradero.',
          pro: { ok: 'Proteges tu tiempo de cierre.', risk: 'Una constancia es un trámite pequeño para ti, pero puede ser grande para quien la pide.', info: 'Pregunta siempre para qué la necesita: la urgencia a veces es real.' },
          kusi: ['pensando', 'A veces lo pequeño no puede esperar.'] } },
    ],
    rules: [[BP, 'Ten plantillas listas para los trámites frecuentes: constancias, certificados y copias de boletas.']],
    mirada: {
      ve: 'En campaña, la ventanilla de Planillas recibe lo urgente de la vida de la gente: préstamos, colegios, citas médicas. No todo puede esperar al cierre, y no todo es urgencia. Preguntar «¿para qué la necesita?» ayuda a decidir.',
      visual: { tipo: 'balanza', a: { t: 'Atender ahora', items: ['El préstamo sale hoy', '10 minutos menos de cierre'] }, b: { t: 'El lunes', items: ['Cierre sin interrupciones', 'Don Eusebio pierde la tasa'] } },
    },
  },
  {
    id: 'd6', t: '16:10', ch: 'whatsapp', who: null, titulo: 'Para que no vuelva a pasar', banner: 'assets/foto/supervisa.webp', show: ['calidad', 'confianza', 'cumplimiento'],
    body: () => `<p>Corregir el jueves no basta: el martes hay cierre y el reloj del fundo 3 sigue sin batería. Le escribes a Raúl, que es quien manda en el fundo, para proponer <mark class="clave">un cambio que dependa de él</mark>.</p>`,
    type: 'compose', enviaA: 'raul', para: 'Para: Ing. Raúl Cárdenas · Jefe de fundo', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'El hecho', ops: [
        { id: 'h1', t: 'Ingeniero, el jueves se fue la luz en el fundo 3 y el reloj no registró la salida de la 12.', ok: true, por: 'Hechos, sin culpables.' },
        { id: 'h2', t: 'Ingeniero, Ángel está arreglando las marcaciones a su gusto.', ok: false, por: 'Acusas a su supervisor por WhatsApp: Raúl lo va a defender.' },
      ] },
      { id: 'costo', t: 'Lo que le cuesta a él', ops: [
        { id: 'k1', t: 'Sin registro de salida, la empresa tiene que pagar lo que la ley presume. Con registro, pagamos lo que realmente pasó.', ok: true, por: 'Le hablas de su presupuesto: el registro también lo protege a él.' },
        { id: 'k2', t: 'Esto nos puede traer una multa.', ok: null, por: 'Cierto, pero genérico.' },
      ] },
      { id: 'pedido', t: 'El pedido', ops: [
        { id: 'p1', t: 'Propongo: Joel cambia la batería de respaldo el lunes y, mientras tanto, una hoja de salida firmada por cada trabajador y el supervisor. Y que nadie modifique el Excel del reloj.', ok: true, por: 'Tres acciones concretas: técnica, de respaldo y de control.' },
        { id: 'p2', t: 'Por favor que sus supervisores tengan más cuidado.', ok: false, por: '«Más cuidado» no cambia nada el lunes.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: '¿Lo vemos 10 minutos mañana a las 6:30 en el fundo 3?', ok: true, por: 'Vas tú a su terreno, a su hora.' },
        { id: 'c2', t: 'Quedo atenta.', ok: null, por: 'Cortés, pero la pelota queda en su cancha.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'k1', 'p1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: sel.hecho === 'h2' ? -4 : 3, cumplimiento: sel.pedido === 'p1' ? 4 : 0 },
        rel: { raul: q === 'buena' ? 1 : sel.hecho === 'h2' ? -1 : 0, joel: sel.pedido === 'p1' ? 1 : 0 },
        flags: q === 'buena' ? ['reloj_respaldo'] : ['supervisor_mano'],
        cartera: { marcacion: q === 'buena' ? 'Batería el lunes · hoja de salida firmada' : 'Sin cambios en el fundo 3' },
        out: q === 'buena' ? 'Raúl responde a la hora: «Ok. Mañana 6:30». Es la primera vez que te contesta sin signos de exclamación.' : sel.hecho === 'h2' ? 'Raúl responde: «Ángel tiene 15 años en el fundo. Cuidado con lo que dice». El Excel seguirá llegando «arreglado».' : 'Raúl responde con un audio de cuatro segundos: «Ya, veremos».',
        pro: { ok: 'Propones un cambio concreto y le muestras al jefe de fundo que el registro también protege su presupuesto.', risk: 'Acusar a una persona por escrito cierra la conversación sobre el proceso.', info: 'Los controles en campo funcionan cuando el supervisor también firma: así no es solo el trabajador quien responde.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Raúl dijo que sí! Anótalo en el calendario.' : '¿Qué gana Raúl con el cambio?'],
      };
    },
    rules: [[LEY, 'El empleador es responsable de mantener un registro de control de asistencia que funcione.'], [BP, 'Propón cambios de proceso al dueño del proceso, mostrando qué gana él.']],
    mirada: {
      ve: 'Un error de marcación corregido una vez se repite la próxima quincena. Lo profesional es arreglar la causa con quien tiene el poder en el lugar donde nace el dato: el jefe de fundo, no TI ni Planillas.',
      visual: { tipo: 'flujo', titulo: 'Cómo se cierra un hueco de marcación', pasos: ['Detectar el hueco', 'Buscar otras pruebas', 'Corregir con sustento', 'Arreglar la causa', 'Respaldo mientras tanto'], aqui: 3 },
    },
  },
  {
    id: 'd7', t: '18:05', ch: 'documento', who: null, titulo: 'El reporte de incidencias', banner: 'assets/esc/lupa.webp', show: ['calidad', 'cumplimiento', 'confianza'],
    body: () => `<p>Último esfuerzo del viernes. El reporte de incidencias de la semana va a Mónica y, el martes, al cierre. <mark class="clave">Lo que no quede escrito aquí, no existe para la quincena</mark>.</p><p>Afuera, el último bus enciende las luces. Wendy te deja un vaso de chicha morada que sobró del refrigerio.</p>`,
    type: 'builder', prompt: 'Arma el reporte eligiendo las piezas de cada bloque.', boton: 'Enviar el reporte',
    bloques: [
      { id: 'hecho', t: 'Qué pasó', n: 2, ops: [
        { id: 'h1', t: 'Corte de luz de 14:52 a 19:10 en el fundo 3; reloj sin batería de respaldo.', ok: true },
        { id: 'h2', t: 'Cuadrilla 12: 32 personas sin salida marcada; última jaba 18:10, bus 18:45.', ok: true },
        { id: 'h3', t: 'La cuadrilla 12 es conflictiva.', ok: false, por: 'Opinión sin hecho. Y es la cuadrilla que tenía razón.' },
      ] },
      { id: 'sust', t: 'Sustento', n: 2, ops: [
        { id: 's1', t: 'Registro de recepción de jabas de Packing.', ok: true },
        { id: 's2', t: 'Reporte GPS del bus 4.', ok: true },
        { id: 's3', t: 'El tareo de Ángel.', ok: false, por: 'Es un control de producción, y lo contradicen las otras dos pruebas.' },
      ] },
      { id: 'decision', t: 'Decisión y acciones', n: 2, ops: [
        { id: 'd1', t: 'Horas extra de la cuadrilla 12 según el criterio aprobado, con sustento adjunto.', ok: true },
        { id: 'd2', t: 'Sin descuento por las tardanzas del bus 2.', ok: true },
        { id: 'd3', t: 'Que el sistema mantenga la salida automática a las 15:00 para no frenar el cierre.', ok: false, por: 'Es justo la regla que causó el problema.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .99 ? 'buena' : k >= .66 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'riesgosa' ? -3 : 3, confianza: q === 'buena' ? 3 : 0 },
        rel: { monica: q === 'buena' ? 1 : 0 },
        cartera: { cierre: q === 'buena' ? 'Incidencias de la semana 1 con sustento' : 'Incidencias con huecos para el martes' },
        out: q === 'buena' ? 'Mónica responde a las 19:20: «Este reporte lo guardo para la carpeta de inspección. Y cambia la acción por defecto del sistema el lunes». Es tu primer entregable del mes.' : 'Mónica te pide completarlo el lunes. El cierre del martes empezará con pendientes.',
        pro: { ok: 'Un reporte de incidencias con hechos, sustento y decisión es lo que te defiende en un reclamo o en una inspección.', risk: 'Sin sustento, la decisión parece un favor o un capricho.', info: 'Archívalo con los adjuntos: en una inspección te pedirán el registro y cómo corregiste sus fallas.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Semana uno cerrada con lupa! ¡Qué bacán!' : 'Casi. Faltó sustento.'],
      };
    },
    rules: [[BP, 'Toda corrección de asistencia se documenta: qué pasó, con qué se prueba y qué se decidió.']],
    mirada: {
      ve: 'El reporte de incidencias es la memoria de la planilla. Dentro de un mes, nadie recordará la llanta del bus 4, pero el reporte sí. Y si llega un reclamo o una inspectora, será lo primero que te pidan.',
      visual: { tipo: 'mensaje', titulo: 'Reporte de incidencias · semana 1', txt: 'Corte de luz en el fundo 3 (14:52-19:10). Cuadrilla 12: 32 personas sin salida marcada. Sustento: jabas (18:10) y GPS (18:45). Decisión: horas extra según criterio aprobado; sin descuento por el bus 2. Acción: batería de respaldo y hoja de salida firmada.' },
    },
  },
];

