// Analista de Administración de Personal · Capítulo 5 · «El descuento» · Semana 2, jueves.
// Hilo del mes: día de pago de la primera quincena. Yolanda trae su boleta con un descuento que no entiende. Y tiene razón.
// Normas citadas:
// - Ley 29783, Ley de Seguridad y Salud en el Trabajo, art. 60: el empleador proporciona a sus trabajadores equipos de protección personal adecuados.
//   https://www.elperuano.pe/noticia/222013-sancion-por-proporcionar-equipos-de-proteccion-personal-inadecuados-requiere-sustentacion-tecnica
// - Principio general: los descuentos a la remuneración requieren base legal o autorización del trabajador (se explica el principio, sin citar un artículo).
// - Ley 26790 y D.S. 009-97-SA (seguridad social en salud): los primeros 20 días de incapacidad temporal del año los paga el empleador; desde el día 21, EsSalud.
// - D.S. 001-98-TR (boletas de pago). Ley 31110 y D.S. 005-2021-MIDAGRI (régimen agrario: remuneración diaria y BETA). D.S. 015-2026-TR (RMV S/ 1,230).

export const CAP = {
  n: 5, titulo: 'El descuento', dia: 'Semana 2, jueves', foto: 'assets/3d/scenes/boleta.webp',
  lugar: 'Agrícola Valle Verde · Ventanilla de Planillas, fundo 1',
  inicio: '06:15', fin: '18:45', cierreHora: '18:20',
  apertura: 'Jueves de pago. Hoy 900 personas miran su boleta por primera vez en la campaña. Yolanda llega antes que nadie, con la boleta doblada en cuatro, como siempre.', boton: 'Abrir la ventanilla',
  kusi: 'Día de pago: el día en que la planilla se vuelve real. ¡Oídos abiertos!',
  lead: 'Leíste una boleta con los ojos de quien la cobra, atendiste la fila del día de pago, verificaste si el error era de uno o de muchos, le dijiste que no a un descuento que «siempre se hizo» y corregiste con transparencia, sin buscar culpables.',
  reflexion: '¿Qué te costó más hoy: reconocer el error o explicarlo?',
  siguiente: { n: 6, titulo: 'La liquidación', dia: 'Semana 3, martes' },
};

export const CARTERA = [
  { id: 'descuento', p: 'Descuento de herramientas', j: 'Raúl · Fundo 2', d: 0, e: '87 personas de la cuadrilla 5 y 6' },
  { id: 'reintegro', p: 'Reintegros de la quincena', j: 'Mónica · Planillas', d: 0, e: 'Por definir' },
  { id: 'fila', p: 'Ventanilla del día de pago', j: 'Planillas', d: 0, e: 'Fila desde las 6:30' },
  { id: 'reclamos', p: 'Vacaciones truncas de marzo', j: 'Mónica · Planillas', d: 13, e: 'Pagadas en esta quincena' },
  { id: 'control', p: 'Control de descuentos', j: 'Mónica · Planillas', d: 0, e: 'No existe' },
];

export const FUTURO = {
  reintegro_todos: ['Devolviste el descuento de herramientas a las 87 personas, reclamaran o no.', 'Raúl lo recordará en el capítulo 6.'],
  reintegro_parcial: ['Devolviste el descuento solo a quien probó que no perdió su tijera.', 'Capítulo 7: la inspectora revisará los descuentos.'],
  descuento_firmado: ['Aceptaste que, desde ahora, se descuenten las herramientas con una autorización firmada.', 'Capítulo 7.'],
  regla_descuentos: ['Planillas ya no carga descuentos sin sustento y aprobación.', 'Capítulo 8.'],
  wendy_protegida: ['Explicaste el error como una falla de proceso y Wendy siguió aprendiendo contigo.', 'Wendy será clave en el capítulo 8.'],
  wendy_senalada: ['Señalaste a Wendy como responsable del error frente a Mónica.', 'Capítulo 8.'],
  yolanda_confia: ['Yolanda confía en Planillas y lo dice en su cuadrilla.', 'Capítulo 8, cuando lleguen las boletas digitales.'],
  yolanda_dolida: ['Yolanda siente que tuvo que pelear sola, otra vez.', 'Capítulo 8.'],
  descanso_corregido: ['Corregiste la falta de Yolanda: era un descanso médico con certificado.', 'Capítulo 6.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Valle Verde', sub: 'Mónica, Joel, Wendy y tú', c: '#2F6B3F' },
  monica: { n: 'Mónica Uribe', sub: 'Jefa de Planillas', who: 'monica' },
  raul: { n: 'Ing. Raúl Cárdenas', sub: 'Jefe de fundo', who: 'raul' },
  joel: { n: 'Joel Ramírez', sub: 'Soporte de TI', who: 'joel' },
  yolanda: { n: 'Yolanda Quispe', sub: 'Cosechadora', who: 'yolanda' },
  wendy: { n: 'Wendy Paredes', sub: 'Practicante de Planillas', c: '#5B6FB5' },
  teresa: { n: 'Teresa Huamaní', sub: 'Caporala · cuadrilla 7', c: '#B5651D' },
  cuadrilla5: { n: 'Cuadrilla 5 · avisos', sub: 'Grupo de la cuadrilla de Yolanda', c: '#0F766E' },
};

export const WSP = [
  { chat: 'grupo', t: '06:20', de: 'Mónica', txt: 'El banco confirmó los abonos de las 6:00 ✅ Hoy atendemos ventanilla hasta las 3. Paciencia, que es la primera boleta de muchos.', si: 'banco_a_tiempo' },
  { chat: 'grupo', t: '06:20', de: 'Mónica', txt: 'Ojo: hoy NO hay abono, es mañana. Va a venir gente preguntando. Que nadie diga «no sé» 🙏', si: 'banco_tarde' },
  { chat: 'grupo', t: '06:20', de: 'Mónica', txt: 'Abonos confirmados. Ricardo todavía me pregunta quién aprobó el martes. Ya hablaremos.', si: 'banco_sin_aprob' },
  { chat: 'yolanda', t: '06:35', de: 'Yolanda', txt: 'Señorita, ya cobré lo de mis vacaciones de marzo. Gracias. Pero hay otra cosa en mi boleta. Voy a su ventanilla.', si: 'yolanda_verdad' },
  { chat: 'yolanda', t: '06:35', de: 'Yolanda', txt: 'Señorita, otra semana pasó. Y ahora encima me descuentan algo. Voy a su ventanilla.', si: 'yolanda_espera' },
  { chat: 'wendy', t: '09:50', de: 'Wendy', txt: 'Creo que el descuento lo cargué yo 😟 Raúl mandó un Excel el lunes y lo subí. Perdón.' },
  { chat: 'raul', t: '11:05', de: 'Ing. Raúl', txt: 'Me dicen que está devolviendo lo de las tijeras. Voy para allá.' },
  { chat: 'teresa', t: '13:20', de: 'Teresa', txt: 'Señorita, en el bus dicen que en la 5 descontaron tijeras. ¿A mi cuadrilla también? 😟' },
  { chat: 'cuadrilla5', t: '17:45', de: 'Yolanda', txt: 'Compañeras, la señorita de Planillas dice que lo de la tijera se devuelve a todas. Yo pregunté y era verdad. Pregunten nomás.', si: 'yolanda_confia' },
];

export const CORREOS = [
  { t: '07:30', de: 'Banco del Valle · Empresas', para: 'Planillas Valle Verde', asunto: 'Abonos de haberes · 1.ª quincena', html: '<p>Se abonaron <b>887 cuentas</b>. 13 abonos quedaron pendientes por cuentas recién abiertas. Pueden cobrarse por ventanilla con DNI desde las 10:00.</p>' },
  { t: '12:10', de: 'Mónica Uribe', para: 'Analista de Administración de Personal', asunto: 'Descuento de herramientas', html: '<p>Ya vi lo de las tijeras. Antes de decidir nada, dime <b>a cuántas personas</b> les pasó y <b>quién lo pidió</b>. Y que nadie se vaya de la ventanilla sin una respuesta con fecha.</p><p>Mónica</p>' },
];

export const QUIZ = [
  { q: 'El fundo pide descontar en planilla las tijeras de cosecha y los guantes «perdidos». ¿Qué principio aplica?', ops: ['Se puede descontar todo lo que la empresa entregó', 'Los equipos de protección personal los proporciona el empleador (Ley 29783, art. 60) y un descuento necesita base legal o autorización del trabajador', 'Solo se descuenta si el jefe de fundo firma', 'Se descuenta la mitad'], ok: 1, por: 'La empresa proporciona los EPP. Y como regla, un descuento a la remuneración necesita base legal o autorización; aun con firma, no puede trasladar al trabajador un costo que la ley pone a cargo del empleador.' },
  { q: 'Yolanda tuvo un día de descanso médico con certificado. En la boleta figura como falta. ¿Qué corresponde?', ops: ['Dejarlo así: no trabajó', 'Corregirlo: los primeros 20 días de incapacidad del año los paga el empleador', 'Que EsSalud lo pague desde el primer día', 'Descontárselo de sus vacaciones'], ok: 1, por: 'Según la Ley 26790 y su reglamento, los primeros 20 días de incapacidad temporal en el año los paga el empleador; desde el día 21, EsSalud otorga el subsidio.' },
  { q: 'Descubres que el descuento de Yolanda se aplicó a 87 personas. ¿A quién se lo devuelves?', ops: ['Solo a Yolanda, que reclamó', 'A las 87, reclamen o no', 'A quienes vengan a la ventanilla', 'A nadie, para no crear precedente'], ok: 1, por: 'Un error masivo se corrige para todos los afectados. Esperar a que reclamen premia a quien tiene tiempo y voz.' },
  { q: 'El error lo cargó una practicante siguiendo un Excel del fundo. ¿Cómo lo reportas?', ops: ['Con su nombre, para que no se repita', 'Como una falla de proceso: faltaba un control para validar descuentos antes de cargarlos', 'No lo reportas', 'Culpando al jefe de fundo'], ok: 1, por: 'Buscar culpables esconde la causa. Lo que faltaba era un control: ningún descuento entra a planilla sin sustento y aprobación.' },
  { q: 'Una boleta de pago debe…', ops: ['Mostrar solo el neto', 'Detallar los ingresos, descuentos y aportes, para que la persona entienda qué cobra', 'Entregarse solo si la piden', 'Firmarla solo el empleador'], ok: 1, por: 'El D.S. 001-98-TR regula el contenido de la boleta: ingresos, descuentos y aportes detallados.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '06:40', ch: 'presencial', who: 'yolanda', titulo: 'La boleta de Yolanda', banner: 'assets/3d/scenes/boleta.webp', lugar: 'Ventanilla de Planillas', show: ['personas', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>Todavía no abres la ventanilla y ya hay doce personas en fila. Yolanda es la primera. ${F.has('yolanda_verdad') ? 'Te agradece lo de marzo con una sonrisa corta' : F.has('yolanda_espera') ? 'No sonríe: la semana extra que le pediste todavía le pesa' : 'Viene seria'}, y despliega su boleta sobre el mostrador.</p><p>«Aquí dice <mark class="clave">“Desc. tijera y guantes: S/ 38.00”</mark>. Yo no perdí nada, señorita. Y este miércoles que dice falta, yo traje mi certificado de la posta.»</p>`,
    type: 'flag', prompt: 'Lee la boleta con Yolanda y marca lo que está mal.',
    doc: { t: 'Boleta de pago · 1.ª quincena · Yolanda Quispe Huamán', sub: 'Agrícola Valle Verde S.A.C. · Régimen agrario · Cuadrilla 5' },
    lines: [
      { id: 'rd', t: 'Remuneración diaria: S/ 51.82 (incluye CTS y gratificaciones) × 12 días.' },
      { id: 'falta', t: 'Miércoles: falta injustificada, descontada. (Certificado de descanso médico de la posta de Los Aquijes en su legajo.)', bad: LEY, why: 'Con certificado, ese día es incapacidad temporal: los primeros 20 días del año los paga el empleador (Ley 26790). No es falta.' },
      { id: 'beta', t: 'BETA: 30 % de la RMV, proporcional a los días.' },
      { id: 'vac', t: 'Vacaciones truncas campaña anterior (marzo).' },
      { id: 'herr', t: 'Desc. tijera de cosecha y guantes: S/ 38.00 (según Excel del fundo 2).', bad: LEY, why: 'La empresa proporciona los equipos de protección (Ley 29783, art. 60). Y no hay autorización de Yolanda ni prueba de pérdida: el descuento no tiene sustento.' },
      { id: 'afp', t: 'Aporte obligatorio a su AFP: 10 % de la remuneración.' },
      { id: 'cred', t: 'Desc. reposición de credencial: S/ 10.00.', bad: BP, why: 'Su primera credencial salió con el apellido mal escrito: el error fue de la empresa. No se cobra.' },
    ],
    res: ({ missLey, hitsLey }, F) => ({
      out: missLey ? 'Le dices a Yolanda que lo revisarás. Ella dobla la boleta y se va a la fila de afuera, donde otras de la cuadrilla 5 la esperan con sus propias boletas.' : `Le marcas a Yolanda ${hitsLey + 1} errores con el resaltador. Ella te mira: «¿Entonces yo tenía razón?». Sí. ${F && F.has('contrato_viejo') && !F.has('contrato_corregido') ? 'Y mientras miras, ves algo peor en otras boletas: remuneraciones diarias de S/ 49.' : 'Detrás de ella, tres mujeres de su cuadrilla levantan sus boletas al mismo tiempo.'}`,
      flags: missLey ? [] : ['descanso_corregido'],
      cartera: { descuento: missLey ? 'En revisión, sin fecha' : 'Confirmado: sin sustento' },
      pro: { ok: 'Lees la boleta como la lee quien la cobra: línea por línea y con la pregunta «¿esto es justo?».', risk: 'Un descuento sin sustento en una sola boleta casi nunca está en una sola boleta.', info: 'Antes de despedir a Yolanda, pregúntale si sus compañeras tienen el mismo descuento.' },
      kusi: missLey ? ['preocupado', 'Ella trajo su certificado…'] : ['indignado', '¡Tenía razón! Y no era la única.'],
    }),
    rules: [[LEY, 'Ley 29783, art. 60: el empleador proporciona los equipos de protección personal.'], [LEY, 'Ley 26790: los primeros 20 días de incapacidad temporal en el año los paga el empleador.']],
    mirada: {
      ve: 'Una boleta es el único documento de la planilla que el trabajador lee. Cada línea responde a una pregunta: ¿por qué me pagan esto? ¿por qué me quitan esto? Si la analista no sabe responder cada línea, la boleta está mal.',
      visual: { tipo: 'cambio', titulo: 'La boleta de Yolanda, corregida', pares: [['Falta injustificada', 'Descanso médico pagado'], ['Desc. tijera y guantes S/ 38', 'Sin descuento'], ['Desc. credencial S/ 10', 'Sin descuento: el error fue de la empresa']] },
      normas: [{ ley: 'Ley 29783, art. 60', dice: 'El empleador proporciona a sus trabajadores equipos de protección personal adecuados.', practica: 'La tijera, los guantes y el sombrero de cosecha no se cobran en la boleta.' }],
    },
  },
  {
    id: 'f2', t: '08:30', ch: 'presencial', who: null, titulo: 'La fila del día de pago', banner: 'assets/foto2/caminan.webp', lugar: 'Afuera de la ventanilla', show: ['personas', 'tiempo'],
    body: (n, F) => `<p>La fila llega hasta el comedor. Hace sol desde las ocho y no hay sombra. ${F.has('banco_tarde') ? 'Muchos vienen a preguntar por qué no hay abono: el pago se corrió a mañana.' : 'Muchos vienen a preguntar por su primera boleta.'}</p><p>Wendy reparte números. Tú puedes atender a fondo <mark class="clave">a tres personas</mark> antes del refrigerio; el resto se lo lleva Wendy con respuestas cortas.</p>`,
    type: 'pick', n: 3, prompt: 'Elige a las tres personas que atiendes tú.', boton: 'Atender a estas tres', resumen: 'Atendiste a',
    cols: ['Quién', 'Qué trae'],
    rows: [
      { id: 'cuad5', cells: ['Cuatro mujeres de la cuadrilla 5', 'El mismo descuento de tijera que Yolanda'] },
      { id: 'marce', cells: ['Marcelino Ayvar, ya no trabaja aquí', 'Vino desde Chincha a cobrar sus vacaciones truncas'] },
      { id: 'fidel', cells: ['Fidel Choque, delegado de la 12', 'Sus horas del jueves no salen en la boleta'], si: 'he_tareo' },
      { id: 'embal', cells: ['Rocío, embaladora del turno noche', 'Ganó menos que el mínimo nocturno'], si: 'nocturno_pendiente' },
      { id: 'rosa', cells: ['Rosa Ccahuana, cuadrilla 7', 'Le descuentan ONP y ella había elegido AFP'], si: 'pension_defecto' },
      { id: 'cuenta', cells: ['Joven que pregunta su clave de la tarjeta', 'Lo resuelve el banco'] },
      { id: 'cumple', cells: ['Señor que quiere saber si hay bono por su cumpleaños', 'No hay'] },
    ],
    score: { cuad5: 3, marce: 2, fidel: 3, embal: 3, rosa: 2, cuenta: -1, cumple: -2 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: picks.includes('cuenta') || picks.includes('cumple') ? -2 : 1 },
        cartera: { fila: picks.includes('cuad5') ? 'Cuadrilla 5: patrón confirmado' : 'Fila atendida por orden de llegada' },
        out: picks.includes('cuad5') ? 'Las cuatro de la cuadrilla 5 tienen el mismo descuento, el mismo monto y la misma glosa: «según Excel del fundo 2». Ya no es el caso de Yolanda: es un patrón.' : 'Atiendes bien a tres personas, pero el patrón de la cuadrilla 5 se te escapa hasta la tarde.',
        pro: { ok: 'Atiendes primero lo que puede ser un error masivo o un derecho mínimo.', risk: 'Lo que el banco resuelve no necesita a Planillas; derívalo con cariño y una dirección clara.', info: 'Pídele a Wendy que anote en una hoja cada consulta repetida: es tu mapa de errores.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Encontraste el patrón!' : '¿Quién podía tener el mismo problema que Yolanda?'],
      };
    },
    rules: [[BP, 'En la fila del día de pago, prioriza los casos que pueden repetirse en muchas boletas.']],
    mirada: {
      ve: 'El día de pago, la ventanilla es un tablero de control: cada consulta repetida es una alerta. Quien atiende la fila con un cuaderno al lado descubre en una mañana lo que el sistema no avisó en una semana.',
      visual: { tipo: 'embudo', titulo: 'La fila de hoy', niveles: [['Personas en fila', 64], ['Consultas sobre la boleta', 41], ['Con el mismo descuento', 9], ['Atendidas por ti a fondo', 3]] },
    },
  },
  {
    id: 'f3', t: '10:05', ch: 'llamada', who: null, titulo: '¿Cuántas son?', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de Planillas', show: ['calidad', 'personas', 'tiempo'],
    body: () => `<p>Filtras la planilla por el concepto «Desc. herramientas»: <mark class="clave">87 personas</mark>, de las cuadrillas 5 y 6. Mónica quiere saber cuántas son y quién lo pidió antes de decidir. Llamas para verificar.</p>`,
    type: 'calls',
    calls: [['Asistente del fundo 2 · Milagros', 'Contesta rápido', 'Sí, señorita, el ingeniero me pidió armar la lista de los que «no devolvieron» la tijera el sábado. Es que el sábado nadie recogió nada.'], ['Almacén de herramientas · don Pío', 'Contesta con ruido de la camioneta', '¿Tijeras perdidas? Señorita, yo tengo 140 en una caja. Nadie vino a devolverlas porque nadie las recogió.'], ['Wendy · en su escritorio', 'Contesta por WhatsApp: prefiere escribir', 'Lo cargué el lunes. El Excel decía «aprobado ing. Cárdenas». No sabía que había que preguntar algo más.'], ['Cosechadora de la cuadrilla 6 · Nely', 'No contesta: está en el surco']],
    prompt: 'La lista salió de un sábado en que nadie recogió las tijeras, y el almacén tiene 140 guardadas. ¿Qué le reportas a Mónica?',
    choices: [
      { id: 'a', label: 'Que son 87 personas, que el descuento salió de una lista sin verificación, que el almacén tiene las tijeras y que propones devolverlo a todas mañana.',
        res: { q: 'buena', fx: { calidad: 5, confianza: 4 }, rel: { monica: 1 }, cartera: { descuento: '87 personas · sin sustento · origen: lista del sábado' },
          out: 'Mónica contesta en dos minutos: «Gracias. Con esto voy donde Raúl y Ricardo». Le dices que Raúl ya viene en camino.',
          pro: { ok: 'Le das a tu jefa números, origen y una propuesta. Eso se decide en un minuto.', info: 'Guarda la conversación con don Pío por escrito: es tu sustento.' },
          kusi: ['celebra', '¡Ciento cuarenta tijeras guardadas! Caso resuelto.'] } },
      { id: 'b', label: 'Que son 87 personas y que Wendy cargó el descuento sin preguntar.',
        res: { q: 'aceptable', fx: { calidad: 2, confianza: -1 }, cartera: { descuento: '87 personas · cargado por Wendy' },
          out: 'Mónica responde: «¿Y de dónde salió la lista?». Tienes los datos, pero el reporte apunta a la persona equivocada.',
          pro: { ok: 'El número es correcto.', risk: 'Wendy cargó lo que le mandaron con «aprobado». El problema es que nadie verificó la lista ni existía un control.' },
          kusi: ['pensando', 'Wendy no inventó la lista…'] } },
    ],
    rules: [[BP, 'Antes de decidir una corrección, verifica cuántas personas afecta y de dónde salió el dato.']],
    mirada: {
      ve: 'Casi ningún error de planilla nace en Planillas: nace en un Excel de otra área, en un sábado sin control, en un «aprobado» escrito a mano. Rastrear el origen no es buscar culpables: es encontrar dónde poner el control.',
      visual: { tipo: 'flujo', titulo: 'Cómo nació el descuento', pasos: ['Sábado sin recojo de tijeras', 'Lista de «no devueltas»', 'Excel con «aprobado»', 'Carga sin validar', '87 boletas con descuento'], aqui: 3 },
    },
  },
  {
    id: 'f4', t: '11:20', ch: 'presencial', who: 'raul', titulo: '«Siempre se ha hecho así»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de Planillas', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Raúl entra sin tocar. ${F.has('he_presuncion') || F.has('reloj_respaldo') ? 'Esta semana ya te respeta un poco más, pero hoy viene molesto.' : 'Viene molesto.'} «Cada campaña se pierden doscientas tijeras. A 15 soles cada una. Si no descuento, nadie cuida nada. <mark class="clave">Siempre se ha hecho así</mark>, señorita.»</p><p>Sobre tu escritorio, la nota de don Pío: 140 tijeras guardadas en el almacén.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Devolver el descuento a las 87 personas en una planilla de reintegro, y proponerle a Raúl entrega y devolución de tijeras con cargo diario en la caseta, sin descuentos.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, personas: 4, confianza: -1 }, rel: { raul: 0, yolanda: 1 }, flags: ['reintegro_todos', 'regla_descuentos'], cartera: { reintegro: '87 reintegros mañana', descuento: 'Eliminado · entrega con cargo diario' },
          out: 'Raúl se queda callado frente a la nota de don Pío. «Lo de la caseta puede funcionar», admite. «Pero si se pierden igual, vengo a buscarla.» Le dices que vengan juntos a contarlas al final de la campaña.',
          pro: { ok: 'Corriges para todas, sin esperar reclamos, y le resuelves a Raúl su problema real: el control de herramientas.', risk: 'Raúl perdió su herramienta de «disciplina». Si no ve resultados, volverá a pedir descuentos.', info: 'Un control físico (cargo diario) funciona mejor que un castigo en la boleta.' },
          kusi: ['celebra', '¡Ochenta y siete devoluciones! ¡Qué divino!'] } },
      { id: 'b', label: 'Devolver el descuento solo a quienes puedan demostrar que devolvieron su tijera: así no se premia a quien de verdad la perdió.',
        res: { q: 'aceptable', fx: { etica: 0, cumplimiento: 1, personas: -2 }, rel: { raul: 1 }, flags: ['reintegro_parcial'], cartera: { reintegro: 'Solo con prueba de devolución', descuento: 'Revisión caso por caso' },
          out: 'Raúl asiente. Pero nadie puede probar nada: el sábado no hubo recojo. Al final de la tarde, solo 11 personas consiguieron que su caporal firmara una constancia.',
          pro: { ok: 'Suena justo: no todos devolvieron su tijera.', risk: 'Pides una prueba que la empresa nunca dio la oportunidad de tener. Y el problema de fondo sigue: no hay base para descontar EPP.' },
          kusi: ['pensando', '¿Cómo prueban algo que nadie recogió?'] } },
      { id: 'c', label: 'Devolver lo de esta quincena y, desde mañana, hacer firmar a cada trabajador una autorización de descuento por herramientas perdidas: con firma, ya es legal.',
        res: { q: 'riesgosa', fx: { etica: -3, cumplimiento: -4, personas: -2 }, rel: { raul: 1 }, flags: ['descuento_firmado', 'reintegro_todos'], cartera: { reintegro: '87 reintegros mañana', descuento: 'Autorización firmada desde mañana' },
          out: 'Raúl sonríe: «Eso es lo que necesitaba». Mañana 900 personas firmarán un formato en la mesa de registro, sin leerlo, a las 6 de la mañana.',
          pro: { ok: 'Devuelves lo cobrado sin sustento.', risk: 'Una firma no convierte en costo del trabajador lo que la ley pone a cargo del empleador. Y una autorización firmada en fila, sin opción real, vale poco.' },
          kusi: ['preocupado', 'Una firma a las seis de la mañana no es una decisión libre…'] } },
    ],
    rules: [[LEY, 'Ley 29783, art. 60: los equipos de protección personal los proporciona el empleador.'], [BP, 'Un descuento a la remuneración necesita base legal o autorización real; ninguna firma traslada al trabajador un costo que la ley pone a cargo de la empresa.']],
    mirada: {
      ve: 'Raúl tiene un problema real: las tijeras se pierden y cuestan. Pero la boleta no es una herramienta de disciplina. Una profesional de planillas separa dos cosas: el control de herramientas (que es de Raúl) y lo que se puede descontar (que es de la ley).',
      visual: { tipo: 'balanza', a: { t: 'Descuento en la boleta', items: ['«Siempre se ha hecho así»', 'Raúl siente que controla'] }, b: { t: 'Control con cargo diario', items: ['Las tijeras se cuentan cada tarde', 'Nadie paga lo que no perdió', 'Sin riesgo de descuentos indebidos'] } },
      normas: [{ ley: 'Ley 29783, art. 60', dice: 'El empleador proporciona a sus trabajadores equipos de protección personal adecuados.', practica: 'Si la empresa los proporciona, no los cobra en la planilla porque «se perdieron».' }],
    },
  },
  {
    id: 'f5', t: '14:00', ch: 'documento', who: null, titulo: 'El aviso de corrección', banner: 'assets/esc/escritorio.webp', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>Mónica aprobó el reintegro. Ahora hay que explicarlo: un aviso para los grupos de WhatsApp de las cuadrillas 5 y 6, que las caporalas leerán en voz alta en el bus.</p><p>Tiene que ser corto, claro y <mark class="clave">decir la verdad sin esconder que el error fue de la empresa</mark>.</p>`,
    type: 'builder', prompt: 'Arma el aviso eligiendo las piezas de cada bloque.', boton: 'Guardar el aviso',
    bloques: [
      { id: 'que', t: 'Qué pasó', n: 1, ops: [
        { id: 'q1', t: 'En la boleta de esta quincena se les descontó «tijera y guantes» por error. No debió pasar.', ok: true, por: 'Dice qué pasó y reconoce el error.' },
        { id: 'q2', t: 'Debido a una inconsistencia en el proceso de carga de datos de un área usuaria…', ok: false, por: 'Nadie en el bus entiende eso, y suena a excusa.' },
      ] },
      { id: 'como', t: 'Cómo se corrige', n: 2, ops: [
        { id: 'c1', t: 'Se les devuelve completo mañana viernes, por depósito en su cuenta sueldo.', ok: true },
        { id: 'c2', t: 'Verán el reintegro en una boleta aparte, con el nombre «Devolución descuento herramientas».', ok: true },
        { id: 'c3', t: 'Quien quiera la devolución debe presentar una solicitud en mesa de partes.', ok: false, por: 'Pones a la gente a pedir lo que le quitaste por error.' },
      ] },
      { id: 'futuro', t: 'Lo que cambia', n: 1, ops: [
        { id: 'f1', t: 'Desde ahora, la tijera se entrega y se devuelve en la caseta cada día. No se descuenta en la boleta.', ok: true },
        { id: 'f2', t: 'Les pedimos cuidar mejor las herramientas de la empresa.', ok: false, por: 'Les pides a ellas lo que la empresa no hizo.' },
      ] },
      { id: 'contacto', t: 'A quién preguntar', n: 1, ops: [
        { id: 'k1', t: 'Si tienen dudas, pregunten en la ventanilla de Planillas o escríbanme a este número. Respondemos el mismo día.', ok: true },
        { id: 'k2', t: 'Para mayor información, comunicarse con el área correspondiente.', ok: false, por: '¿Cuál área? ¿Con quién?' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .99 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 4 : 0, calidad: q === 'riesgosa' ? -2 : 2 },
        cartera: { reintegro: q === 'buena' ? 'Aviso claro enviado a las cuadrillas 5 y 6' : 'Aviso con dudas' },
        out: q === 'buena' ? 'Teresa lee el aviso y te escribe: «Así se entiende, señorita. Lo leo en el bus en castellano y en quechua».' : 'El aviso sale. A la mañana siguiente, igual llegan doce personas a preguntar qué significa.',
        pro: { ok: 'Un aviso que reconoce el error, dice cuándo y cómo se corrige y a quién preguntar evita una fila de reclamos.', risk: 'El lenguaje de oficina, en un aviso para el bus, se lee como «no te vamos a devolver nada».', info: 'Escribe pensando en quien lo leerá en voz alta en un bus con ruido.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Corto, claro y verdadero!' : '¿Se entendería en el bus?'],
      };
    },
    rules: [[BP, 'Corregir con transparencia: qué pasó, cómo se corrige, cuándo y a quién preguntar.']],
    mirada: {
      ve: 'Corregir un error en la planilla es la mitad del trabajo; la otra mitad es contarlo. Un aviso que reconoce el error de la empresa genera más confianza que cien avisos perfectos.',
      visual: { tipo: 'mensaje', titulo: 'El aviso para el bus', txt: 'En la boleta de esta quincena se les descontó «tijera y guantes» por error. No debió pasar. Se les devuelve completo mañana viernes en su cuenta sueldo, con una boleta aparte. Desde ahora, la tijera se entrega y se devuelve en la caseta: no se descuenta. Dudas: ventanilla de Planillas o este número.' },
    },
  },
  {
    id: 'f6', t: '15:40', ch: 'presencial', who: 'monica', titulo: 'Quién lo hizo', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Mónica', show: ['confianza', 'etica', 'calidad'],
    body: () => `<p>Mónica cierra la puerta. Afuera, Wendy hace como que ordena fichas; no ha levantado la vista en toda la tarde.</p><p>«Ricardo me pide un informe de lo que pasó con las tijeras. <mark class="clave">Quiere un nombre</mark>. ¿Qué le pongo?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarlo como una falla de proceso: la lista salió sin verificación, nadie validaba descuentos antes de cargarlos, y proponer la regla «ningún descuento sin sustento y aprobación de Planillas».',
        res: { q: 'buena', fx: { confianza: 4, etica: 4, calidad: 3 }, rel: { monica: 1 }, flags: ['wendy_protegida', 'regla_descuentos'],
          out: 'Mónica escribe el informe con tu propuesta. «Ricardo va a insistir con el nombre», dice. «Y le voy a decir que el nombre es el proceso.» Cuando sales, Wendy te mira por primera vez en la tarde.',
          pro: { ok: 'Atacas la causa y proteges a quien aprende. Wendy cargó lo que le llegó con «aprobado»; el control no existía.', risk: 'Ricardo puede leerlo como que nadie se hace responsable. Por eso la regla nueva tiene que tener dueño.', info: 'Habla con Wendy después: lo que aprendió hoy también se dice, en privado.' },
          kusi: ['feliz', 'El problema era el proceso, no Wendy.'] } },
      { id: 'b', label: 'Poner el nombre de Wendy: fue ella quien cargó el descuento, y Ricardo necesita saber que no se repetirá.',
        res: { q: 'riesgosa', fx: { confianza: -2, etica: -3, personas: -3 }, rel: { monica: 0 }, flags: ['wendy_senalada'],
          out: 'El informe sale con el nombre de Wendy. Ricardo queda conforme. Wendy se entera al día siguiente por el pasillo y, desde entonces, pregunta tres veces antes de cargar cualquier cosa. O no carga nada.',
          pro: { ok: 'Ricardo tiene su nombre.', risk: 'Un nombre tranquiliza a la gerencia, pero no evita el siguiente error. Y una practicante con miedo esconde los errores en lugar de avisarlos.' },
          kusi: ['triste', 'Wendy fue la única que avisó del error…'] } },
      { id: 'c', label: 'Poner el nombre de Raúl: él pidió el descuento y la lista salió de su fundo.',
        res: { q: 'aceptable', fx: { confianza: -1, cumplimiento: 2 }, rel: { raul: -1 }, flags: ['regla_descuentos'],
          out: 'Mónica duda. «Es cierto, pero Raúl lo pidió creyendo que podía. Si lo pongo así, mañana no nos manda ni un dato.» El informe sale con tu frase suavizada.',
          pro: { ok: 'Señalas el origen real del dato.', risk: 'Culpar al jefe de fundo por escrito puede cortar la colaboración que necesitas toda la campaña.' },
          kusi: ['pensando', 'Cierto… pero ¿te sirve un enemigo en el fundo?'] } },
    ],
    rules: [[BP, 'Ante un error, busca la causa en el proceso antes que un nombre.'], [POL, 'En Valle Verde, los descuentos de otras áreas se cargan solo con sustento y visto bueno de Planillas (desde hoy).']],
    mirada: {
      ve: 'Las gerencias piden nombres porque un nombre parece una solución. Pero si el control no existe, el error se repetirá con otro nombre. Una buena analista cuida a su equipo diciendo la verdad completa: qué falló, por qué y qué cambia.',
      visual: { tipo: 'matriz', x: 'Qué tanto evita que se repita', y: 'Qué tanto tranquiliza a la gerencia hoy', cuadrantes: ['Ideal', 'Solo calma', 'Solo arregla', 'Ninguno'], items: [['Falla de proceso + regla', .85, .6], ['Nombre de Wendy', .15, .85], ['Nombre de Raúl', .35, .55]] },
    },
  },
  {
    id: 'f7', t: '17:30', ch: 'whatsapp', who: null, titulo: 'Lo que le dices a Yolanda', banner: 'assets/foto2/mesa-mujeres.webp', show: ['personas', 'etica', 'confianza'],
    body: (n, F) => `<p>Yolanda te escribió a las 17:10: «Señorita, ¿entonces sí me devuelven? Mis compañeras dicen que yo armé todo este lío».</p><p>${F.has('yolanda_espera') ? 'Le debes una respuesta clara desde el viernes pasado. ' : ''}Es la segunda vez en la campaña que ella tenía razón y <mark class="clave">tuvo que reclamar para que alguien lo viera</mark>.</p>`,
    type: 'compose', enviaA: 'yolanda', para: 'Para: Yolanda Quispe · Cuadrilla 5', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'razon', t: 'Darle la razón', ops: [
        { id: 'r1', t: 'Yolanda, usted tenía razón: el descuento fue un error de la empresa, y también lo de su descanso médico.', ok: true, por: 'Le dices lo que necesita escuchar, sin rodeos.' },
        { id: 'r2', t: 'Yolanda, ya se está viendo su caso.', ok: false, por: 'Ya se vio. Decir menos de lo que sabes otra vez es repetir lo del viernes.' },
      ] },
      { id: 'cuando', t: 'Cuándo', ops: [
        { id: 'c1', t: 'Mañana viernes se le deposita la devolución completa, y lo verá en una boleta aparte.', ok: true, por: 'Fecha y forma de verificarlo.' },
        { id: 'c2', t: 'Pronto se le devuelve.', ok: false, por: '«Pronto» ya se lo dijeron muchas veces.' },
      ] },
      { id: 'lio', t: 'Lo del «lío»', ops: [
        { id: 'l1', t: 'Y usted no armó ningún lío: gracias a que preguntó, se les devuelve a 87 personas. Eso se lo diré yo a su cuadrilla si quiere.', ok: true, por: 'Proteges su reputación frente a sus compañeras.' },
        { id: 'l2', t: 'No haga caso a lo que dicen.', ok: null, por: 'Bien intencionado, pero la deja sola con el comentario.' },
      ] },
      { id: 'disculpa', t: 'Disculpa', ops: [
        { id: 'd1', t: 'Le pido disculpas por haber tenido que venir otra vez. Desde hoy revisamos los descuentos antes de que lleguen a su boleta.', ok: true, por: 'Disculpa con un cambio concreto.' },
        { id: 'd2', t: 'Disculpe las molestias ocasionadas.', ok: null, por: 'Fórmula de oficina: no dice qué cambia.' },
      ] },
    ],
    res: sel => {
      const buenas = ['r1', 'c1', 'l1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 6 : 1, etica: q === 'buena' ? 3 : 0, confianza: q === 'riesgosa' ? -3 : 3 },
        rel: { yolanda: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'buena' ? ['yolanda_confia'] : q === 'riesgosa' ? ['yolanda_dolida'] : [],
        out: q === 'buena' ? 'Yolanda responde con un audio: «Ya, señorita. Mañana les digo en el bus que pregunten sin miedo». Escuchas, de fondo, a su hija riéndose.' : q === 'aceptable' ? 'Yolanda responde «gracias». Mañana cobrará. No sabes si mañana volverá a preguntar o se quedará callada.' : 'Yolanda deja el mensaje en visto. En su cuadrilla, el comentario de que «armó un lío» sigue corriendo.',
        pro: { ok: 'Corregir con transparencia es darle la razón a quien la tuvo, con fecha, y cuidar que reclamar no le cueste nada.', risk: 'Si quien reclama queda como «la que armó el lío», la próxima persona no reclamará: se quedará con el descuento.', info: 'Lo que dijiste hoy de los descuentos es una promesa: te la recordará.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Reclamar le salió bien. ¡Así se cuida la confianza!' : '¿Qué necesitaba escuchar Yolanda?'],
      };
    },
    rules: [[LEY, 'Tomar represalias contra quien reclama sus derechos laborales es ilegal.'], [BP, 'Quien reclamó y tenía razón merece que se le diga, con todas las letras.']],
    mirada: {
      ve: 'Yolanda no solo pedía su dinero: pedía que reclamar no la convierta en «la conflictiva». En campañas agrícolas, donde la recontratación depende de la reputación, proteger a quien reclama es proteger el sistema de alertas de la empresa.',
      visual: { tipo: 'linea', titulo: 'El caso de Yolanda en la campaña', hitos: [['Semana 1, lunes', 'Reclama sus vacaciones de marzo'], ['Semana 1, viernes', 'Se confirma el error de 14 personas'], ['Semana 2, jueves', 'Descubre el descuento de 87 personas'], ['Semana 2, viernes', 'Devolución para todas']] },
    },
  },
];
