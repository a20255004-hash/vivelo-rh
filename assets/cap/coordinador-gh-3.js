// Coordinador/a de Gestión Humana · Capítulo 3 · «El estudio externo» · Semana 1, miércoles.
// Hilo de las dos semanas: Lácteos del Altiplano (ficticia), plantas de Juliaca y Ayaviri, 350 trabajadores.
// Normas citadas (texto oficial en docs/normas/txt):
// - D.S. 007-2002-TR (TUO de la Ley de jornada), art. 8: quien labora en horario nocturno no puede percibir menos que la
//   RMV vigente a la fecha de pago con una sobretasa del 35 %; jornada nocturna de 10 p. m. a 6 a. m.
//   https://www.gob.pe/institucion/mtpe/normas-legales/
// - D.S. 015-2026-TR (El Peruano, 28/09/2026): RMV de S/ 1,130 a S/ 1,230 desde el 1 de octubre de 2026.
//   https://www.gob.pe/mtpe  → mínimo nocturno: 1,230 × 1.35 = S/ 1,660.50 (antes: 1,130 × 1.35 = S/ 1,525.50).
// - Ley 29733, art. 2 num. 5 (ingresos económicos: dato sensible), art. 2 num. 7 (encargado de tratamiento) y art. 17
//   (confidencialidad del titular y del encargado). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - Ley 27735, art. 5: la gratificación de diciembre se paga en la primera quincena de diciembre.

export const CAP = {
  n: 3, titulo: 'El estudio externo', dia: 'Semana 1, miércoles', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'Lácteos del Altiplano · Oficina de Gestión Humana, Juliaca',
  inicio: '07:50', fin: '19:10', cierreHora: '19:00',
  apertura: 'Miércoles. La planilla preliminar de noviembre tenía que llegar ayer. Llega hoy a las 7:58, en un Excel sin clave, al correo personal de Mariela. Ella te lo reenvía con un solo signo: «?».', boton: 'Abrir el Excel',
  kusi: 'Que el estudio calcule no significa que nadie revise. Hoy revisas tú. ¡Ojo de lince!',
  lead: 'Encontraste el error del turno noche, conversaste con el estudio sin romper la relación, le pusiste reglas al servicio, perseguiste el tareo de Ayaviri y escuchaste a Freddy.',
  reflexion: '¿Cuánto tiempo llevaba ese error del turno noche sin que nadie lo viera, y por qué?',
  siguiente: { n: 4, titulo: 'La renuncia', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'planilla', p: 'Planilla de noviembre', j: 'Estudio Huanca & Asociados', d: 2, e: 'Preliminar con errores' },
  { id: 'proveedor', p: 'Control del estudio externo', j: 'Tú · CPC Rubén Huanca', d: 2, e: 'Sin reglas escritas' },
  { id: 'tareo', p: 'Tareo de Ayaviri', j: 'Yesenia', d: 2, e: 'No llegó' },
  { id: 'ayaviri', p: 'Planta de Ayaviri', j: 'Ing. Freddy Choque', d: 2, e: 'Conversación hoy 4 p. m.' },
  { id: 'grati', p: 'Gratificación de diciembre', j: 'Estudio Huanca', d: 2, e: 'Primera quincena de diciembre' },
];

export const FUTURO = {
  nocturna_corregida: ['El turno noche cobrará el mínimo nocturno correcto, con el reintegro de octubre.', 'Teodoro lo sabrá el viernes, antes de que se lo cuentes.'],
  nocturna_pendiente: ['El turno noche seguirá cobrando por debajo del mínimo nocturno.', 'Lo descubrirán ellos. El viernes.'],
  estudio_acuerdo: ['El estudio tiene un acuerdo escrito: fechas, canal seguro y revisión.', 'La planilla de diciembre saldrá con tiempo.'],
  estudio_amenazado: ['Amenazaste al estudio con cambiarlo.', 'Rubén cumplirá… a regañadientes.'],
  tareo_ayaviri: ['El tareo de Ayaviri llegó gracias a Edwin y Yesenia.', 'Conociste a Edwin Calsín, jefe de producción de Ayaviri.'],
  freddy_confia: ['Freddy te contó que tiene una oferta y le pediste permiso para alertar a Mariela.', 'Mañana sabrás si llegaste a tiempo.'],
  freddy_expuesto: ['Le contaste a Mariela lo que Freddy te dijo en confianza.', 'Freddy lo sabrá.'],
  freddy_callado: ['Guardaste el secreto de Freddy sin hacer nada más.', 'Mañana te enterarás junto con todos.'],
};

export const CHATS = {
  equipo: { n: 'Gestión Humana LDA', sub: 'Nely, Yesenia y tú', c: '#2F6B3F' },
  mariela: { n: 'Mariela Quispe', sub: 'Gerenta de Administración', who: 'mariela' },
  nely: { n: 'Nely Mamani', sub: 'Asistente de RR.HH. · Juliaca', who: 'asistente' },
  yesenia: { n: 'Yesenia Condori', sub: 'Asistente de RR.HH. · Ayaviri', c: '#8A4B2A' },
  freddy: { n: 'Ing. Freddy Choque', sub: 'Jefe de la planta de Ayaviri', who: 'jefe' },
  ruben: { n: 'CPC Rubén Huanca', sub: 'Estudio Huanca & Asociados', c: '#5B4A8C' },
};

export const WSP = [
  { chat: 'mariela', t: '07:59', de: 'Mariela', txt: '?' },
  { chat: 'nely', t: '08:20', de: 'Nely', txt: 'El tareo de Juliaca lo mandé el lunes a las 5. Tengo el correo 📎', si: 'nely_tareo' },
  { chat: 'nely', t: '08:20', de: 'Nely', txt: 'El tareo de Juliaca… creo que lo mandé incompleto. Perdón 😟', no: 'nely_tareo' },
  { chat: 'ruben', t: '10:05', de: 'Rubén', txt: 'Le paso el cálculo corregido del nocturno a las 3. Gracias por la observación, se nos pasó con el cambio de la RMV.', si: 'nocturna_corregida' },
  { chat: 'yesenia', t: '13:10', de: 'Yesenia', txt: 'Ya mandé el tareo. Edwin me ayudó con las horas extra de quesería. Mañana le cuento algo del inge, ahorita no puedo.' },
  { chat: 'freddy', t: '17:45', de: 'Freddy', txt: 'Gracias por no contarlo sin preguntarme. Mañana a primera hora le escribo a Mariela.', si: 'freddy_confia' },
  { chat: 'freddy', t: '17:45', de: 'Freddy', txt: 'Mariela ya me llamó. Le dije que lo conversamos mañana.', si: 'freddy_expuesto' },
];

export const CORREOS = [
  { t: '07:58', de: 'Estudio Huanca & Asociados', para: 'mariela.quispe@gmail.com', asunto: 'Planilla preliminar nov (adjunto)', html: '<p>Estimada Mariela: adjunto la planilla preliminar de noviembre. Falta Ayaviri porque no llegó el tareo. Quedamos atentos.</p><p>CPC Rubén Huanca</p>' },
  { t: '15:20', de: 'CPC Rubén Huanca', para: 'Gestión Humana LDA', asunto: 'Propuesta de cronograma de cierre', html: '<p>Según lo conversado, propongo: tareo de ambas plantas el día 20; preliminar el 23; observaciones el 24; versión final el 26. Para diciembre, la gratificación irá en la primera quincena, como corresponde. Enviaremos todo a la carpeta compartida con clave.</p>', si: 'estudio_acuerdo' },
];

export const QUIZ = [
  { q: 'Con la RMV de S/ 1,230, ¿cuánto es lo mínimo que puede ganar al mes quien trabaja en jornada nocturna?', ops: ['S/ 1,230', 'S/ 1,525.50', 'S/ 1,660.50', 'S/ 1,845'], ok: 2, por: 'El art. 8 del D.S. 007-2002-TR exige la RMV vigente con una sobretasa del 35 %: 1,230 × 1.35 = 1,660.50.' },
  { q: 'Si el estudio externo calcula mal la planilla, ¿quién responde ante el trabajador?', ops: ['El estudio', 'El trabajador, por no reclamar', 'El empleador', 'Nadie, si fue un error'], ok: 2, por: 'El empleador es quien paga y quien responde. Luego podrá reclamar al proveedor según su contrato.' },
  { q: 'El estudio manda la planilla a un correo personal, sin clave. ¿Qué problema hay?', ops: ['Ninguno, si es la gerenta', 'Los ingresos son datos sensibles y deben viajar por canales controlados', 'Solo que puede llegar a spam', 'Que el archivo pesa mucho'], ok: 1, por: 'Los ingresos económicos son datos sensibles (Ley 29733, art. 2 num. 5) y el encargado también debe guardar confidencialidad (art. 17).' },
  { q: '¿Cuándo se paga la gratificación de diciembre?', ops: ['Con la planilla de diciembre', 'En la primera quincena de diciembre', 'Antes del 31 de enero', 'Cuando la empresa pueda'], ok: 1, por: 'La Ley 27735, art. 5, dice que se paga en la primera quincena de julio y de diciembre.' },
  { q: 'Un jefe te cuenta en confianza que tiene otra oferta. ¿Qué haces?', ops: ['Se lo cuentas a tu jefa enseguida', 'No haces nada', 'Le pides permiso para alertar a quien decide, sin dar más detalles de los necesarios', 'Le ofreces un aumento'], ok: 2, por: 'Cuidas la confianza y, a la vez, que la empresa pueda reaccionar a tiempo.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:05', ch: 'documento', who: null, titulo: 'La planilla preliminar', banner: 'assets/esc/planilla.webp', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Imprimes el resumen y lo revisas con resaltador, fila por fila. Nadie lo había hecho antes: el estudio calculaba y Mariela firmaba.</p><p>Te acuerdas de algo que leíste en el Excel de Nely: catorce personas en turno noche desde 2019. <mark class="clave">¿Cuánto les están pagando?</mark></p>`,
    type: 'flag', prompt: 'Marca lo que tiene un problema legal o de calidad.',
    doc: { t: 'PLLA_NOV_PRELIM_LDA.xlsx', sub: 'Planilla preliminar de noviembre · Juliaca · 220 trabajadores' },
    lines: [
      { id: 'noct', t: 'Turno noche, línea de yogurt (14 operarios): remuneración mensual S/ 1,525.50.', bad: 'ley', why: 'Es el mínimo nocturno con la RMV antigua. Desde el 1 de octubre, con RMV de S/ 1,230, el mínimo nocturno es S/ 1,660.50. Faltan S/ 135 por persona, en octubre y en noviembre.' },
      { id: 'ces', t: 'Tres trabajadores cesados en octubre figuran con remuneración completa en noviembre.', bad: 'bp', why: 'Se les pagaría un mes que no trabajaron. Recuperar ese dinero después es difícil y desagradable para todos.' },
      { id: 'correo', t: 'El archivo llegó sin clave al correo personal de Mariela.', bad: 'ley', why: 'Los ingresos son datos sensibles. El estudio, como encargado de tratamiento, también debe guardar confidencialidad y usar canales seguros.' },
      { id: 'ayav', t: 'Ayaviri: «pendiente, no llegó el tareo».', bad: 'bp', why: 'Media planilla sin calcular a pocos días del pago.' },
      { id: 'asig', t: 'Asignación familiar: 41 trabajadores.', duda: 'Puede estar bien. Vale la pena comprobar que cada caso tenga su sustento.' },
      { id: 'essalud', t: 'Aporte a EsSalud calculado sobre la remuneración de cada trabajador.' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'Marcas los cesados y el tareo de Ayaviri. Pero el turno noche o el canal del archivo se te pasan.' : 'Haces la cuenta en una servilleta: 14 personas × S/ 135 × 2 meses. S/ 3,780 que el turno noche no ha cobrado. Y nadie lo sabe todavía.',
      flags: missLey ? [] : ['noct_visto'],
      cartera: { planilla: missLey ? 'Revisada a medias' : 'Errores: nocturno, cesados, canal y Ayaviri' },
      pro: { ok: 'Revisar con criterio lo que calcula un tercero es parte de tu trabajo.', risk: 'Pagar por debajo del mínimo nocturno es una infracción, y el turno noche ya está molesto.', info: 'Cada vez que cambia la RMV, revisa todo lo que se calcula a partir de ella.' },
      kusi: missLey ? ['preocupado', 'Algo importante se quedó sin marcar…'] : ['sorpresa', '¡Tres mil setecientos ochenta soles!'],
    }),
    rules: [[LEY, 'Quien labora en horario nocturno no puede percibir menos que la RMV vigente con una sobretasa del 35 % (D.S. 007-2002-TR, art. 8).'], [LEY, 'RMV de S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR).'], [LEY, 'Los ingresos son datos sensibles (Ley 29733, art. 2 num. 5).']],
    mirada: {
      ve: 'Cuando sube la RMV, no solo cambia el sueldo mínimo: cambian todos los cálculos que dependen de ella, como el mínimo nocturno. Un estudio con muchos clientes puede olvidarlo. Por eso la empresa necesita a alguien que revise.',
      visual: { tipo: 'rango', titulo: 'El turno noche frente al mínimo nocturno', min: 1400, max: 1800, banda: [1660.5, 1800], marcas: [['Lo que cobran', 1525.5], ['Mínimo nocturno', 1660.5]] },
      normas: [{ ley: 'D.S. 007-2002-TR, art. 8', dice: 'El trabajador que labora en horario nocturno no podrá percibir una remuneración inferior a la remuneración mínima mensual vigente a la fecha de pago con una sobretasa del 35 %.', practica: 'Con la RMV de S/ 1,230, ese mínimo es S/ 1,660.50 desde octubre. Hay que pagar el reintegro.' }],
    },
  },
  {
    id: 'c2', t: '09:30', ch: 'llamada', who: null, titulo: 'El CPC Huanca', banner: 'assets/foto/llamada.webp', show: ['confianza', 'cumplimiento', 'tiempo'],
    body: () => `<p>Llamas al estudio. El CPC Rubén Huanca atiende entre otras dos llamadas: lleva la planilla de doce empresas de Juliaca y Puno.</p><p>«El nocturno lo actualizamos en diciembre, como hacemos siempre. Y con todo respeto: <mark class="clave">si el tareo llegara a tiempo, la planilla también llegaría a tiempo</mark>.» Tiene parte de razón: el de Ayaviri nunca llegó.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reconocer lo del tareo, pedir por escrito el mínimo nocturno corregido con el reintegro de octubre en esta planilla, y proponer fechas para los dos lados.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 3, tiempo: -1 }, flags: ['nocturna_corregida'], cartera: { planilla: 'Nocturno corregido con reintegro de octubre' },
          out: 'Rubén baja el tono: «Tiene razón, con el cambio de RMV se nos pasó. Lo corrijo hoy. Y sí, ordenemos las fechas».',
          pro: { ok: 'Asumes tu parte y exiges la suya, sin romper la relación.', info: 'La deuda es con los trabajadores: se paga ya, y lo demás se conversa con el estudio.' },
          kusi: ['celebra', 'Firme con el problema, amable con la persona.'] } },
      { id: 'b', label: 'Decirle que si no lo corrige hoy y paga el reintegro de su bolsillo, cambian de estudio.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, confianza: -2 }, flags: ['nocturna_corregida', 'estudio_amenazado'], cartera: { planilla: 'Nocturno corregido, relación tensa' },
          out: 'Rubén corrige el cálculo en dos horas, sin una palabra de más. Lo del bolsillo, dice, «lo verá con la gerencia». La planilla sale; la confianza, no tanto.',
          pro: { ok: 'Consigues la corrección.', risk: 'El reintegro lo debe la empresa al trabajador. Discutir quién lo asume no puede retrasar el pago.' },
          kusi: ['pensando', 'Ganaste la corrección. ¿Y la relación?'] } },
      { id: 'c', label: 'Aceptar que lo corrija en diciembre: mover la planilla ahora retrasaría el pago de todos.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, personas: -3, tiempo: 2 }, flags: ['nocturna_pendiente'], cartera: { planilla: 'Nocturno sin corregir' },
          out: 'La planilla sigue su curso. Catorce personas cobrarán otra vez menos de lo que la ley les garantiza. Y son las mismas que firmaron la carta.',
          pro: { ok: 'No retrasas el pago.', risk: 'Pagar por debajo del mínimo nocturno es una infracción y una injusticia con nombre propio.' },
          kusi: ['indignado', '¿Otro mes más por debajo del mínimo?'] } },
    ],
    rules: [[LEY, 'El mínimo nocturno se calcula con la RMV vigente a la fecha de pago (D.S. 007-2002-TR, art. 8).'], [BP, 'Ante el proveedor: asume tu parte, exige la suya y deja todo por escrito.']],
    mirada: {
      ve: 'Supervisar a un proveedor no es pelearse con él. El estudio tiene parte de razón: la empresa entrega el tareo tarde. Una buena coordinación reconoce lo propio, corrige lo urgente y convierte el problema en reglas para los dos.',
      visual: { tipo: 'balanza', a: { t: 'Lo que falla en el estudio', items: ['Nocturno con la RMV antigua', 'Cesados en planilla', 'Correo personal sin clave'] }, b: { t: 'Lo que falla en la empresa', items: ['Tareo de Ayaviri que no llega', 'Nadie revisaba', 'Sin fechas acordadas'] } },
    },
  },
  {
    id: 'c3', t: '11:00', ch: 'documento', who: null, titulo: 'Las reglas del servicio', banner: 'assets/esc/mesa.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Buscas el contrato con el estudio. Es de 2019, tiene dos páginas y dice «servicio de planillas». Nada de fechas, ni de canales, ni de qué pasa si hay errores.</p><p>Armas un acuerdo de servicio corto para firmar con Rubén. <mark class="clave">Lo que no está escrito, no se puede exigir</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del acuerdo.', boton: 'Guardar el acuerdo',
    bloques: [
      { id: 'fechas', t: 'Fechas', n: 2, ops: [
        { id: 'f1', t: 'Tareo de ambas plantas al estudio en una fecha fija de cada mes.', ok: true },
        { id: 'f2', t: 'Preliminar, observaciones y versión final con fechas fijas antes del pago.', ok: true },
        { id: 'f3', t: '«Lo antes posible», según la carga del estudio.', ok: false, por: 'No se puede medir ni exigir.' },
      ] },
      { id: 'canal', t: 'Datos y canal', n: 2, ops: [
        { id: 'c1', t: 'Todo por la carpeta compartida de la empresa, con acceso restringido.', ok: true, por: 'Los ingresos son datos sensibles.' },
        { id: 'c2', t: 'Confidencialidad y devolución de la información al terminar el servicio.', ok: true, por: 'El estudio es encargado de tratamiento: trata los datos por encargo de la empresa.' },
        { id: 'c3', t: 'Por WhatsApp, que es más rápido.', ok: false, por: 'Saca los sueldos de 350 personas del control de la empresa.' },
      ] },
      { id: 'control', t: 'Control', n: 2, ops: [
        { id: 'k1', t: 'Lista de verificación: cambios de RMV, ingresos, ceses, nocturnos y horas extra.', ok: true },
        { id: 'k2', t: 'Reunión corta de cierre cada mes para revisar errores y mejoras.', ok: true },
        { id: 'k3', t: 'Penalidad automática por cualquier error, sin conversación.', ok: false, por: 'Castiga, pero no mejora. Y la empresa también falla.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : 0 },
        flags: q === 'buena' ? ['estudio_acuerdo'] : [], cartera: { proveedor: q === 'buena' ? 'Acuerdo de servicio listo para firmar' : 'Acuerdo con huecos' },
        out: q === 'buena' ? 'El acuerdo cabe en una página. Se lo mandas a Rubén; a las 3:20 responde con una propuesta de cronograma. Hasta parece aliviado.' : 'El acuerdo tiene buenas intenciones, pero deja abiertas justo las cosas que hoy fallaron.',
        pro: { ok: 'Fechas, canal seguro y control: lo mínimo para supervisar a un proveedor.', risk: 'Sin canal seguro, los sueldos de 350 personas viajan por donde a cada quien le acomode.', info: 'Incluye el cambio de RMV en la lista de verificación: ya viste lo que pasa si se olvida.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una página que ordena todo!' : 'Faltan reglas en lo que hoy falló.'],
      };
    },
    rules: [[LEY, 'El encargado de tratamiento trata los datos por encargo del titular, dentro de lo que su relación delimita (Ley 29733, art. 2 num. 7).'], [LEY, 'El titular y el encargado deben guardar confidencialidad (Ley 29733, art. 17).']],
    mirada: {
      ve: 'Tercerizar la planilla no es tercerizar la responsabilidad. El acuerdo de servicio convierte la buena voluntad en compromisos medibles, y le da a la coordinación algo concreto que revisar cada mes.',
      visual: { tipo: 'flujo', titulo: 'El ciclo de la planilla con reglas', pasos: ['Tareo en fecha', 'Preliminar', 'Revisión con lista', 'Versión final', 'Pago', 'Reunión de cierre'], aqui: 2 },
    },
  },
  {
    id: 'c4', t: '12:20', ch: 'llamada', who: null, titulo: 'Persiguiendo el tareo de Ayaviri', banner: 'assets/3d/scenes/agro.webp', show: ['tiempo', 'personas', 'calidad'],
    body: () => `<p>Sin el tareo de Ayaviri, 130 personas no tienen planilla. Empiezas a llamar con el almuerzo frío al lado.</p>`,
    type: 'calls',
    calls: [['Yesenia Condori', 'Contesta: tiene las faltas, pero no las horas extra', 'Las faltas y permisos los tengo en mi cuaderno, completitos. Las horas extra las anota el inge, y el inge no está.'], ['Ing. Freddy Choque', 'No contesta: «en reunión»'], ['Edwin Calsín, jefe de producción de Ayaviri', 'Contesta: tiene las horas extra en su pizarra', 'Buenas tardes. Las horas extra de quesería las tengo en la pizarra, firmadas por cada uno. El inge anda en otras cosas estos días… Le saco foto y se la paso a la señora Yesenia.'], ['Porfirio, vigilancia de Ayaviri', 'Contesta: el reloj marcador falla desde el lunes', 'El reloj se malogró el lunes con el corte de luz. Desde ahí marcan en el cuaderno de la garita.']],
    prompt: 'Ya sabes dónde está cada pedazo del tareo. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Pedir a Yesenia que consolide su cuaderno, la pizarra de Edwin y el cuaderno de garita, y que lo envíe ella hoy a la 1.',
        res: { q: 'buena', fx: { tiempo: 3, personas: 3, calidad: 2 }, flags: ['tareo_ayaviri'], cartera: { tareo: 'Yesenia lo envió a la 1:10' },
          out: 'A la 1:10 el tareo llega al estudio, firmado por Yesenia. Edwin te manda un mensaje corto: «Para lo que necesite». Anotas su nombre.',
          pro: { ok: 'Cada pieza tiene dueño y una sola persona consolida.', info: 'Edwin dijo algo raro: «el inge anda en otras cosas». Guárdalo.' },
          kusi: ['feliz', 'Tres fuentes, una dueña, tareo a tiempo.'] } },
      { id: 'b', label: 'Pedir las fotos a todos y armar tú el tareo de Ayaviri para ganar tiempo.',
        res: { q: 'aceptable', fx: { tiempo: -3, calidad: 1 }, flags: ['tareo_ayaviri'], cartera: { tareo: 'Lo armaste tú' },
          out: 'Lo armas tú en dos horas. Llega a tiempo, pero ayer dijiste que el tareo de Ayaviri era de Yesenia.',
          pro: { ok: 'El tareo llega.', risk: 'Hacer tú lo que delegaste ayer confunde a todos sobre quién es dueño de qué.' },
          kusi: ['pensando', '¿No era de Yesenia?'] } },
    ],
    rules: [[BP, 'Si el reloj marcador falla, el registro alternativo debe quedar firmado por cada trabajador.']],
    mirada: {
      ve: 'En una planta lejana, la información vive repartida: un cuaderno, una pizarra, una garita. Coordinar es saber dónde está cada pedazo y quién puede juntarlo. Y de paso, a veces, aparece alguien como Edwin.',
      visual: { tipo: 'embudo', titulo: 'Las piezas del tareo de Ayaviri', niveles: [['Fuentes', 3], ['Con dueño claro', 3], ['Consolidado por Yesenia', 1]] },
    },
  },
  {
    id: 'c5', t: '14:30', ch: 'presencial', who: 'mariela', titulo: '«Cambiemos de estudio»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Mariela', show: ['confianza', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Le cuentas a Mariela lo del turno noche. Se pone pálida. ${F.has('nocturna_pendiente') ? '«¿Y lo vamos a dejar para diciembre?»' : '«¿Desde octubre? ¿Y nadie se dio cuenta?»'}</p><p>Luego golpea la mesa con el lapicero: «<mark class="clave">Cambiemos de estudio. Ya.</mark> Hay uno en Puno que me recomendaron».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer cerrar noviembre y diciembre con el estudio actual bajo el acuerdo nuevo, medir y decidir en enero.',
        res: { q: 'buena', fx: { confianza: 4, cumplimiento: 3 }, rel: { mariela: 1 }, cartera: { proveedor: 'Evaluación del estudio en enero' },
          out: 'Mariela respira. «Tienes razón: cambiar en pleno cierre y con la gratificación encima es buscarse otro problema. En enero lo vemos con números.»',
          pro: { ok: 'No cambias de caballo a mitad del río: corriges, mides y decides con datos.', info: 'La gratificación de diciembre se paga en la primera quincena: un estudio nuevo no llegaría.' },
          kusi: ['celebra', 'Calma con datos. ¡Así!'] } },
      { id: 'b', label: 'Apoyarla: si el estudio falló con el mínimo nocturno, no merece seguir.',
        res: { q: 'riesgosa', fx: { cumplimiento: -3, tiempo: -4 }, rel: { mariela: 0 },
          out: 'Mariela llama al estudio de Puno. Le dicen que necesitan un mes para «levantar la información». La gratificación es en dos semanas.',
          pro: { ok: 'Respondes al enojo de tu jefa.', risk: 'Cambiar de proveedor en pleno cierre, sin transición, pone en riesgo la planilla y la gratificación.' },
          kusi: ['preocupado', '¿Y quién paga la gratificación?'] } },
      { id: 'c', label: 'Proponer que Nely y tú hagan la planilla dentro del área desde diciembre.',
        res: { q: 'aceptable', fx: { tiempo: -3, calidad: -1 },
          out: 'Mariela lo piensa. «¿Con qué sistema? ¿Con qué horas?» Tiene razón: Nely apenas está aprendiendo el tareo.',
          pro: { ok: 'A largo plazo puede ser una opción.', risk: 'Internalizar la planilla sin sistema ni personas formadas es cambiar un riesgo por otro mayor.' },
          kusi: ['pensando', 'Buena idea… para otro momento.'] } },
    ],
    rules: [[LEY, 'La gratificación de diciembre se paga en la primera quincena de diciembre (Ley 27735, art. 5).'], [BP, 'No cambies de proveedor crítico en pleno cierre: corrige, mide y decide con datos.']],
    mirada: {
      ve: 'Ante un error grave, la tentación es cortar por lo sano. Pero un proveedor de planillas tiene la memoria de la empresa: historiales, cálculos, declaraciones. Cambiarlo es un proyecto, no una reacción.',
      visual: { tipo: 'linea', titulo: 'El calendario que manda', hitos: [['Esta semana', 'Planilla de noviembre'], ['1.ª quincena de diciembre', 'Gratificación'], ['Fin de diciembre', 'Planilla de diciembre'], ['Enero', 'Decidir sobre el estudio']] },
    },
  },
  {
    id: 'c6', t: '16:00', ch: 'llamada', who: 'jefe', titulo: 'Lo que Freddy no decía', banner: 'assets/foto/frente-a-frente.webp', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>${F.has('freddy_postergado') ? 'El lunes le dijiste a Freddy que su sueldo no era tema tuyo. Igual te llama, más seco.' : 'Es la hora que acordaron con Freddy. Llama puntual.'}</p><p>«Le voy a ser franco. Una láctea de Arequipa me ofreció la jefatura de planta. Paga mejor y mis hijos estudian allá. <mark class="clave">Todavía no he dicho que sí. Y no quiero que nadie lo sepa todavía.</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle la confianza, pedirle permiso para decirle a Mariela que hay un riesgo real de perderlo y que su pedido es urgente, sin más detalles.',
        res: { q: 'buena', fx: { etica: 4, confianza: 3, personas: 3 }, rel: { jefe: 1 }, flags: ['freddy_confia'], cartera: { ayaviri: 'Freddy: oferta en Arequipa, Mariela alertada con permiso' },
          out: 'Freddy duda y luego acepta. Le dices a Mariela solo eso. Ella promete hablar con el gerente general mañana temprano. No sabes si llegará a tiempo.',
          pro: { ok: 'Cuidas su confianza y le das a la empresa la oportunidad de reaccionar.', info: 'Pedir permiso antes de compartir es lo que te hace confiable para la próxima persona.' },
          kusi: ['pensando', 'Confianza cuidada… y el reloj corre.'] } },
      { id: 'b', label: 'Contarle todo a Mariela apenas cuelgues: es un riesgo para la empresa y ella debe saberlo.',
        res: { q: 'riesgosa', fx: { etica: -3, confianza: -1 }, rel: { jefe: -1 }, flags: ['freddy_expuesto'],
          out: 'Mariela llama a Freddy a los diez minutos: «¿Así que te vas a Arequipa?». Freddy entiende de dónde salió.',
          pro: { ok: 'La empresa se entera rápido.', risk: 'Romper una confidencia, aunque sea por una buena razón, cierra puertas que no se vuelven a abrir.' },
          kusi: ['triste', 'Se enteró en diez minutos… y él sabe por quién.'] } },
      { id: 'c', label: 'Guardar el secreto sin decir nada a nadie: es su decisión y su vida.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -1 }, flags: ['freddy_callado'],
          out: 'Freddy te lo agradece. Mariela no sabe nada. Mañana, quizás, ya sea tarde para cualquier propuesta.',
          pro: { ok: 'Respetas su confidencia.', risk: 'La empresa pierde la oportunidad de responder a tiempo.' },
          kusi: ['pensando', 'Respetaste. ¿Y ahora quién decide?'] } },
    ],
    rules: [[BP, 'Lo que te cuentan en confianza se comparte solo con permiso y solo lo necesario.']],
    mirada: {
      ve: 'Gestión Humana vive entre dos lealtades: la persona que confía y la empresa que paga. La salida casi nunca es elegir una. Es preguntar: «¿puedo contar esto, y cuánto?». Así se conserva la confianza de los dos lados.',
      visual: { tipo: 'mensaje', titulo: 'Lo que le dices a Mariela', txt: 'Hay un riesgo real de perder a Freddy en los próximos días. Su pedido de revisión de sueldo es urgente. Él te lo contará en detalle si se lo pides.' },
    },
  },
  {
    id: 'c7', t: '17:40', ch: 'documento', who: null, titulo: 'El calendario del cierre', banner: 'assets/esc/reloj.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Con la propuesta de Rubén en pantalla, armas el calendario de cierre que vas a pegar en la pared. Nely lo va a mirar todos los días.</p><p>Lo que importa es <mark class="clave">quién entrega qué, antes de quién</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del cierre de planilla. Usa las flechas.', boton: 'Guardar el calendario',
    items: [
      { id: 'tareo', t: 'Cerrar el tareo de cada planta (faltas, permisos, horas extra, nocturnos)', por: 'Sin tareo no hay planilla.' },
      { id: 'cons', t: 'Nely y Yesenia envían el tareo al estudio por la carpeta segura', por: 'Una dueña por planta.' },
      { id: 'pre', t: 'El estudio entrega la planilla preliminar', por: 'El primer cálculo.' },
      { id: 'rev', t: 'Revisión con la lista de verificación y observaciones', por: 'Aquí se encuentran errores como el nocturno.' },
      { id: 'apr', t: 'Versión final y aprobación de Mariela', por: 'Quien autoriza el pago.' },
      { id: 'pago', t: 'Pago y entrega de boletas a cada trabajador', por: 'La boleta es parte de la obligación.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, tiempo: q === 'buena' ? 2 : -1 },
        cartera: { planilla: q === 'riesgosa' ? 'Calendario de cierre desordenado' : 'Calendario de cierre en la pared' },
        out: q === 'buena' ? 'Pegas el calendario junto a la matriz. Nely le toma foto y se la manda a Yesenia. Yesenia responde con un pulgar.' : 'El calendario tiene todo, pero en un orden en que la revisión llega después de aprobar.',
        pro: { ok: 'La revisión va antes de la aprobación, y la boleta cierra el ciclo.', risk: 'Revisar después de pagar es descubrir errores cuando ya cuestan.', info: 'No entregar boletas es una infracción laboral (D.S. 019-2006-TR, art. 23.4).' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Cierre con orden!' : 'Casi: revisa antes de aprobar.'],
      };
    },
    rules: [[LEY, 'El incumplimiento de las obligaciones sobre boletas de pago es infracción (D.S. 019-2006-TR, art. 23.4).']],
    mirada: {
      ve: 'Un cierre de planilla es una cadena: si un eslabón se atrasa, todos los demás corren. El calendario no solo ordena fechas; hace visible quién depende de quién.',
      visual: { tipo: 'flujo', titulo: 'El cierre de planilla', pasos: ['Tareo', 'Envío', 'Preliminar', 'Revisión', 'Aprobación', 'Pago y boletas'], aqui: 3 },
    },
  },
];
