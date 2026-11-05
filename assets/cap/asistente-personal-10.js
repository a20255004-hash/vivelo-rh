// Analista de Administración de Personal · Capítulo 10 · «Dos semanas» · Semana 2, viernes.
// Hilo de las dos semanas: balance con Mónica, una lista que nadie debía ver, «¿te ves en este puesto?» y una noticia que cambia el lunes. El final queda abierto.
// Normas citadas:
// - Ley 31110 y D.S. 005-2021-MIDAGRI: derecho preferente de recontratación de quienes fueron contratados en temporada;
//   el empleador convoca antes del inicio de la temporada, en los plazos del reglamento.
//   https://leyes.congreso.gob.pe/Documentos/2016_2021/ADLP/Texto_Consolidado/31110-TXM.pdf
//   https://lpderecho.pe/reglamento-ley-regimen-laboral-agrario-ley-31110-decreto-supremo-005-2021-midagri
//   https://lacamara.pe/detalles-del-regimen-laboral-y-tributario-del-sector-agrario/?print=pdf
// - Ley 28806, Ley General de Inspección del Trabajo: medidas de requerimiento para corregir incumplimientos.
//   https://lpderecho.pe/ley-28806-ley-general-de-inspeccion-del-trabajo-actualizada/

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto2/collage.webp',
  lugar: 'Agrícola Valle Verde · Valle de Ica',
  inicio: '06:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Viernes de la segunda semana. La campaña llega a 1,200 personas y Mónica te cita a las 11:00 para hablar de estas dos semanas. Antes, tienes una mañana entera.', boton: 'Empezar el viernes',
  kusi: 'Dos semanas, una campaña entera en el cuerpo. ¡Vamos a mirarlas de frente!',
  lead: 'Cerraste pendientes, encontraste una lista que nadie debía tener, hiciste tu balance con Mónica, conociste a alguien que puede cambiar el equipo y respondiste una pregunta difícil. Y el lunes empieza otra historia.',
  reflexion: '¿Qué persona de estas dos semanas vas a recordar dentro de un año, y por qué?',
  siguiente: { n: 11, titulo: 'Trescientos contratos', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'carpeta', p: 'Requerimiento de SUNAFIL', j: 'Mónica · Legal', d: 3, e: 'Medida llega el lunes' },
  { id: 'rectif', p: 'Rectificatoria de aportes', j: 'Don Hugo', d: 1, e: 'Septiembre y octubre' },
  { id: 'quincena2', p: 'Segunda quincena', j: 'Planillas', d: 0, e: 'Corte en 10 días' },
  { id: 'lista', p: 'Lista de recontratación', j: 'Raúl · Fundos', d: 0, e: 'Por revisar' },
  { id: 'cese300', p: 'Fin de contratos', j: 'Ricardo · Operaciones', d: 0, e: 'Sin noticias' },
];

export const FUTURO = {
  lista_escalada: ['Sacaste a la luz la lista «No llamar» y la revisaste con Mónica y Raúl.', 'Se discutirá en la Semana 3, cuando toque decidir quién se queda.'],
  lista_callada: ['Borraste a Yolanda de la lista sin decir nada.', 'La lista sigue viva y Raúl la usará en la Semana 3.'],
  lista_ignorada: ['Viste la lista y no hiciste nada.', 'Yolanda no aparece en la convocatoria de la Semana 3.'],
  te_ves_si: ['Le dijiste a Mónica que te ves en este puesto.', 'La Semana 3 te pondrá a prueba con 300 contratos.'],
  te_ves_duda: ['Le dijiste a Mónica que todavía no lo sabes.', 'La Semana 3 te ayudará a decidir.'],
  te_ves_no: ['Le dijiste a Mónica que este puesto no es para ti, y por qué.', 'Mónica te propone terminar la campaña y conversar.'],
  yusbely_apoyo: ['Yusbely empieza a apoyar a Planillas el lunes.', 'Semana 3.'],
  noticia_guardada: ['Guardaste la noticia de los 300 contratos hasta tener datos.', 'Semana 3.'],
  noticia_filtrada: ['Se filtró la noticia antes de tiempo.', 'El lunes, la ventanilla estará llena.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Valle Verde', sub: 'Mónica, Joel, Wendy y tú', c: '#2F6B3F' },
  monica: { n: 'Mónica Uribe', sub: 'Jefa de Planillas', who: 'monica' },
  raul: { n: 'Ing. Raúl Cárdenas', sub: 'Jefe de fundo', who: 'raul' },
  joel: { n: 'Joel Ramírez', sub: 'Soporte de TI', who: 'joel' },
  yolanda: { n: 'Yolanda Quispe', sub: 'Cosechadora', who: 'yolanda' },
  ricardo: { n: 'Ricardo Benavides', sub: 'Gerente de Operaciones', c: '#334155' },
  wendy: { n: 'Wendy Paredes', sub: 'Practicante de Planillas', c: '#5B6FB5' },
  hugo: { n: 'Don Hugo Arce', sub: 'Contador externo', c: '#57534E' },
  yusbely: { n: 'Yusbely Rangel', sub: 'Cosechadora · cuadrilla 3', c: '#BE185D' },
  angel: { n: 'Ángel Paucar', sub: 'Exsupervisor · ya en Palpa', c: '#92400E' },
  fidel: { n: 'Fidel Choque', sub: 'Supervisor · cuadrilla 12', c: '#7A3E9D' },
  teresa: { n: 'Teresa Huamaní', sub: 'Caporala · cuadrilla 7', c: '#B5651D' },
};

export const WSP = [
  { chat: 'grupo', t: '06:35', de: 'Mónica', txt: 'Hoy pasamos los 1,200 🍇 Fin de la primera parte. A las 11:00 te espero con café, que quiero hablar de estas dos semanas.' },
  { chat: 'grupo', t: '06:40', de: 'Joel', txt: 'El reloj del fundo 3 lleva 9 días sin caerse. Le voy a poner nombre 🙃', si: 'reloj_respaldo' },
  { chat: 'grupo', t: '06:40', de: 'Joel', txt: 'Ojo: encontré la Clave SOL en un grupo de WhatsApp. Hay que cambiarla hoy, por favor.', si: 'clave_compartida' },
  { chat: 'angel', t: '08:20', de: 'Ángel', txt: 'Le escribo desde Nasca. Mi mamá salió bien de su control. Gracias, señorita.', si: 'pago_sin_retener' },
  { chat: 'hugo', t: '09:10', de: 'Don Hugo', txt: 'Mi señora está mejor. El lunes le traigo la rectificatoria, y otro caramelo.', si: 'hugo_aliado' },
  { chat: 'wendy', t: '09:30', de: 'Wendy', txt: 'Oye. Buscando la lista de convocatoria encontré algo raro en el Excel del fundo. Pestaña «NO LLAMAR». ¿Lo ves?' },
  { chat: 'fidel', t: '12:50', de: 'Fidel', txt: 'Mi primera semana de supervisor y la 12 no ha tenido un solo reclamo. Dígale a la señora Mónica.', si: 'exonerado_plan' },
  { chat: 'yolanda', t: '14:10', de: 'Yolanda', txt: '¿Es verdad lo que me dijo, señorita? ¿Que me tienen que llamar el próximo año? Se lo voy a contar a las otras 🙏', si: 'lista_escalada' },
  { chat: 'teresa', t: '18:30', de: 'Teresa', txt: 'Señorita, en el bus dicen que van a botar a 300. ¿Es cierto? Ya me preguntaron cinco.', si: 'noticia_filtrada' },
];

export const CORREOS = [
  { t: '07:15', de: 'Carmen Salas · Inspectora auxiliar, SUNAFIL Ica', para: 'Agrícola Valle Verde S.A.C.', asunto: 'Recepción de carpeta', html: '<p>Se recibió la documentación presentada. La <b>medida de requerimiento</b> correspondiente se notificará la próxima semana, con el plazo para corregir lo observado.</p>' },
  { t: '12:00', de: 'Mónica Uribe', para: 'Analista de Administración de Personal', asunto: 'Gracias por estas dos semanas', html: '<p>Hace dos semanas te dije que aquí un error no es un número: es el sueldo de una familia. Creo que ya no hace falta que te lo repita.</p><p>Disfruta tu domingo. El lunes te cuento qué viene.<br>Mónica</p>' },
  { t: '17:50', de: 'Ricardo Benavides · Gerente de Operaciones', para: 'Mónica Uribe; Planillas', asunto: 'URGENTE · Cliente de Rotterdam', html: '<p>El cliente de Rotterdam canceló dos contenedores por un problema de calibre. Vamos a parar el fundo 4 antes de tiempo. <b>Estimo unos 300 contratos que terminan antes de lo previsto.</b></p><p>Lunes 7:00, en mi oficina. Traigan la lista de contratos del fundo 4.<br>R. Benavides</p>' },
];

export const QUIZ = [
  { q: 'Según la Ley 31110, una cosechadora contratada dos veces en temporada…', ops: ['No tiene ningún derecho sobre la siguiente campaña', 'Tiene derecho preferente a ser recontratada, y la empresa debe convocarla', 'Pasa a ser indefinida el primer día', 'Depende solo de su jefe de fundo'], ok: 1, por: 'La Ley 31110 y su reglamento dan derecho preferente a quienes trabajaron en temporada: la empresa las convoca antes del inicio de la nueva temporada.' },
  { q: 'Encuentras una lista de «no llamar» con personas que reclamaron sus derechos. ¿Cuál es el problema?', ops: ['Ninguno, cada jefe elige a su gente', 'Castigar a quien reclama es una represalia y contradice el derecho preferente', 'Que está en Excel', 'Que no tiene colores'], ok: 1, por: 'Excluir a alguien por reclamar es una represalia. Además, quien tiene derecho preferente debe ser convocada.' },
  { q: 'En el ciclo de planilla, ¿qué paso de estas dos semanas alimenta a todos los demás?', ops: ['La PLAME', 'La boleta', 'El alta en el T-Registro con la fecha real', 'El pago'], ok: 2, por: 'Todo empieza con un alta bien hecha: de ahí salen asistencia, cálculo, pago, boleta y PLAME.' },
  { q: '¿Cuál es la señal más clara de que una analista de planillas hace bien su trabajo?', ops: ['Nadie la conoce', 'Los errores se detectan temprano, se corrigen con transparencia y no se repiten', 'Nunca dice que algo salió mal', 'Trabaja hasta muy tarde'], ok: 1, por: 'Los errores existen. Lo que distingue es cómo se detectan, se cuentan y se corrigen.' },
  { q: 'Te enteras de una noticia que afectará a 300 personas, pero todavía no hay datos ni decisión. ¿Qué haces?', ops: ['La cuentas en el grupo del fundo', 'La guardas, preparas los datos y ayudas a definir cómo y cuándo se comunica', 'La niegas si te preguntan', 'Le avisas solo a tus amigas'], ok: 1, por: 'Comunicar sin datos genera pánico; ocultar para siempre genera desconfianza. Se prepara y se comunica bien, y pronto.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

// Lo que pesa en la carpeta de cada persona: el balance se arma con sus propias decisiones.
const PESA = [
  ['contrato_viejo', 'el contrato con S/ 49 que dejaste pasar el primer día'],
  ['sin_alta', 'los 60 que entraron sin alta'],
  ['fecha_maquillada', 'la fecha de ingreso que cambiaste'],
  ['he_tareo', 'las horas de la cuadrilla 12 que no se pagaron'],
  ['he_bono', 'las horas extra pagadas como bono'],
  ['oculto_altas', 'lo que no le dijiste a la inspectora'],
  ['registro_corregido', 'el Excel que entregaste como registro'],
  ['pago_retenido', 'la liquidación de Ángel que retuviste'],
  ['constancias_falsas', 'las constancias que firmaron los caporales'],
  ['bajas_hoy', 'las bajas con fecha de hoy'],
  ['clave_compartida', 'la Clave SOL en el grupo'],
];
const pesa = F => PESA.filter(([f]) => F.has(f)).map(([, t]) => t);

export const ESCENAS = [
  {
    id: 'k1', t: '07:30', ch: 'llamada', who: null, titulo: 'Los pendientes del viernes', banner: 'assets/foto/llamada.webp', lugar: 'Contenedor de Planillas', show: ['personas', 'calidad', 'tiempo'],
    body: (n, F) => `<p>${F.has('constancias_reales') ? 'A las 7:15 ya firmaron las últimas constancias; faltaban 31, y la nota salió ayer. ' : ''}El aire de Ica todavía está fresco, y en dos horas ya no. Hoy pasan los 1,200.</p><p>Antes de la reunión de las 11:00 quieres cerrar <mark class="clave">cuatro llamadas que no pueden pasar al lunes</mark>.</p>`,
    type: 'calls',
    calls: [['Banco del Valle · Empresas', 'Contesta rápido', 'Los 13 abonos pendientes de la quincena ya salieron. Para la segunda, mándenos las cuentas nuevas 72 horas antes.'], ['Doña Celestina · cuadrilla 2', 'Contesta su nieta', 'Mi abuelita dice que ya tiene su boleta en una bolsita, señorita. Pregunta si le va a seguir llegando en papel.'], ['Kevin Huamaní, sobrino de Teresa', 'Contesta con mucho ruido, en una moto', '¿Autorización? Mi tía me dijo que usted me explicaba. Yo quiero trabajar, pero también terminar el colegio.'], ['Don Hugo Arce', 'Contesta en voz baja, desde la clínica', 'Ya revisé: la rectificatoria se hace el lunes. Déjeme la base corregida en el correo, y gracias por no llamarme ayer.']],
    prompt: 'Hay cuentas nuevas para la segunda quincena, un adolescente que pregunta qué hacer y una rectificatoria el lunes. ¿Con qué te quedas tú hoy?',
    choices: [
      { id: 'a', label: 'Anotar cada cosa en el calendario de cierre con su responsable, y dedicarle diez minutos a Kevin: qué autorización necesita, dónde se pide y por qué conviene no dejar el colegio.',
        res: { q: 'buena', fx: { personas: 4, calidad: 3, tiempo: -1 }, cartera: { rectif: 'Lunes con don Hugo · base enviada', quincena2: 'Cuentas nuevas en calendario' },
          out: 'Kevin dice «ya» varias veces y al final pregunta: «¿Y usted terminó el colegio?». Le dices que sí, y que estudiaste de noche. Se queda callado un momento. «Ya, señorita.»',
          pro: { ok: 'Los pendientes pasan del cuaderno al calendario, y Kevin recibe una respuesta de verdad, no solo un «no».', info: 'Un «no» a un adolescente que quiere trabajar se acompaña de una ruta.' },
          kusi: ['feliz', 'Diez minutos para Kevin. Bien invertidos.'] } },
      { id: 'b', label: 'Resolver lo del banco y lo de don Hugo; lo de Kevin le toca a su familia: sin autorización, no es asunto de Planillas.',
        res: { q: 'aceptable', fx: { tiempo: 2, calidad: 2, personas: -1 }, cartera: { rectif: 'Lunes con don Hugo · base enviada', quincena2: 'Cuentas nuevas en calendario' },
          out: 'Avanzas rápido. Kevin no vuelve a llamar. Teresa, en el almuerzo, mira su plato sin decir mucho.',
          pro: { ok: 'Es cierto: la autorización no la tramita Planillas.', risk: 'Una llamada que dura diez minutos a veces es todo lo que alguien necesitaba.' },
          kusi: ['pensando', 'No era tu trámite… ¿pero era tu trabajo?'] } },
    ],
    rules: [[BP, 'Cierra la semana pasando cada pendiente al calendario, con nombre y fecha.']],
    mirada: {
      ve: 'Un viernes de campaña no se cierra: se pasa en limpio. Lo que no queda con nombre y fecha el viernes reaparece el lunes como una emergencia.',
      visual: { tipo: 'linea', titulo: 'Lo que pasa al calendario', hitos: [['Lunes', 'Rectificatoria con don Hugo'], ['Martes', 'Medida de requerimiento'], ['Miércoles', 'Cuentas nuevas al banco'], ['En 10 días', 'Corte de la segunda quincena']] },
    },
  },
  {
    id: 'k2', t: '09:40', ch: 'documento', who: 'raul', titulo: 'La pestaña «NO LLAMAR»', banner: 'assets/foto2/tension.webp', lugar: 'Excel del fundo · luego, en la caseta de Raúl', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>Wendy te muestra la pantalla sin decir nada. En el Excel de convocatoria hay una pestaña escondida, «NO LLAMAR»: 37 nombres. Algunos con notas: «faltó 12 días», «robó jabas». Otros: «reclamón», «fue a SUNAFIL». Y uno que conoces: <mark class="clave">«Quispe Yolanda: conflictiva»</mark>.</p><p>Raúl, cuando le preguntas, no se inmuta: «Yo elijo con quién trabajo. ${F.has('he_tareo') ? 'Y la cuadrilla 12 ya me denunció.' : 'Usted no sabe lo que es perder una cosecha por gente que falta.'}». Yolanda va por su tercera campaña.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Llevar la lista a Mónica y Legal esta mañana: separar a quien tiene causas reales y documentadas, sacar a quienes están por reclamar, y recordar el derecho preferente de quien ya fue contratada en temporada.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: -2 }, rel: { raul: -1, yolanda: 1, monica: 1 }, flags: ['lista_escalada'], cartera: { lista: 'En revisión con Mónica y Legal' },
          envia: ['yolanda', 'Yolanda, le cuento algo que quizá no sabía: por haber trabajado en temporadas anteriores, usted tiene derecho preferente a que la convoquen en la próxima. Reclamar no se lo quita. Si no la llaman, me busca.'],
          out: 'Raúl te mira un rato largo. «Doce de esa lista sí me hicieron perder fruta.» Le dices que esos se revisan con sus faltas documentadas. «¿Y los otros?» Los otros, no. Se queda callado y se va en la camioneta, sin portazo.',
          pro: { ok: 'Separas lo legítimo (faltas documentadas) de lo ilegal (castigar a quien reclamó). No le quitas a Raúl su criterio: le quitas el arbitrio.', risk: 'Raúl es jefe de fundo y te lo va a cobrar en algún cierre.', info: 'Propón criterios escritos de recontratación: evitan listas escondidas.' },
          kusi: ['celebra', '¿Te acuerdas de lo que te preguntó Yolanda el primer día? Ya tiene respuesta.'] } },
      { id: 'b', label: 'Borrar el nombre de Yolanda sin decir nada: ella merece volver, y no quieres otra pelea con Raúl justo antes del fin de semana.',
        res: { q: 'aceptable', fx: { etica: 0, personas: 2, confianza: 1 }, flags: ['lista_callada'], cartera: { lista: 'Yolanda fuera de la lista · la pestaña sigue' },
          out: 'Un clic y Yolanda ya no está. Los otros 36 siguen. Entre ellos, Rosmery, que el miércoles pasado te preguntó si la iban a descontar por contestar una llamada.',
          pro: { ok: 'Yolanda queda protegida, sin conflicto.', risk: 'Salvas a la que conoces. La lista, que es el problema, sigue viva. Y modificarla a escondidas tampoco es transparente.' },
          kusi: ['pensando', 'Una menos… ¿y las otras 36?'] } },
      { id: 'c', label: 'No hacer nada: la convocatoria la decide Producción, no Planillas, y no te han pedido opinión.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -4, cumplimiento: -3 }, rel: { yolanda: -1 }, flags: ['lista_ignorada'], cartera: { lista: 'Sin cambios' },
          out: 'Cierras el archivo. Wendy te mira, y luego mira a su pantalla. Hace dos semanas le dijiste a Yolanda que reclamar no le iba a costar nada.',
          pro: { ok: 'Evitas un conflicto que no te corresponde formalmente.', risk: 'Es una represalia contra personas con derecho preferente. Y tú ya la viste.' },
          kusi: ['triste', 'Ya lo viste. Ahora también es tuyo.'] } },
    ],
    rules: [[LEY, 'Ley 31110: quien trabajó en temporada tiene derecho preferente a ser recontratada, y la empresa la convoca antes de la nueva temporada.'], [LEY, 'Tomar represalias contra quien reclama sus derechos laborales es ilegal.']],
    mirada: {
      ve: 'El miedo de Yolanda, el primer lunes, no era exagerado: la lista existe. Raúl no es un villano: perdió fruta por gente que faltó, y tiene derecho a evaluar. Lo que no se puede es mezclar faltas con reclamos. Una profesional de personal es quien pone esa línea, aunque le cueste.',
      visual: { tipo: 'cambio', titulo: 'De una lista escondida a criterios escritos', pares: [['«Conflictiva»', 'Faltas documentadas'], ['«Fue a SUNAFIL»', 'No es causa: es un derecho'], ['Decide cada jefe', 'Criterios escritos y revisables'], ['Nadie avisa', 'Convocatoria según el derecho preferente']] },
      normas: [{ ley: 'Ley 31110 y D.S. 005-2021-MIDAGRI', dice: 'Dan derecho preferente de recontratación a quienes trabajaron en temporada, con convocatoria previa de la empresa, según los plazos del reglamento.', practica: 'La pregunta de Yolanda del primer día tenía respuesta en la ley.' }],
    },
  },
  {
    id: 'k3', t: '11:05', ch: 'presencial', who: 'monica', titulo: 'El balance con Mónica', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Mónica', show: ['confianza', 'calidad', 'etica'],
    body: (n, F) => {
      const p = pesa(F);
      return `<p>Mónica cierra la puerta, sirve dos cafés y saca el calendario de la campaña, lleno de marcas de plumón rojo. «Dos semanas. ¿Con qué te quedas?»</p><p>${p.length ? `Ella no te lo va a decir, pero tú lo sabes: en tu carpeta también están ${p.slice(0, 3).join(', ')}. ` : 'Sabes que no todo salió perfecto, pero lo que salió mal lo dijiste a tiempo. '}<mark class="clave">Elige las dos decisiones que más te enorgullecen</mark>.</p>`;
    },
    type: 'pick', n: 2, prompt: 'Elige dos decisiones de estas dos semanas.', boton: 'Contárselo a Mónica', resumen: 'Elegiste',
    cols: ['Tu decisión', 'Por qué importó'],
    rows: [
      { id: 'contrato', cells: ['Revisar el contrato antes de imprimir 900 copias', 'Una cláusula menos multiplicada por 900'], si: 'contrato_corregido' },
      { id: 'mesa', cells: ['Poner una mesa de registro en pleno campo', 'Altas el mismo día'], si: 'alta_dia_uno' },
      { id: 'fecha', cells: ['Registrar la fecha real, aunque te lo pidieran distinto', 'Aportes y cobertura completos'], si: 'fecha_real' },
      { id: 'yolanda', cells: ['Decirle a Yolanda qué falló y que fueron 14', 'Uno reclamó y catorce cobraron'], si: 'yolanda_verdad' },
      { id: 'tijeras', cells: ['Devolver las tijeras a las 87', 'Nadie tuvo que pelearlo solo'], si: 'reintegro_todos' },
      { id: 'registro', cells: ['Entregarle a la inspectora el hueco del reloj, con su explicación', 'La verdad con sustento'], si: 'registro_honesto' },
      { id: 'constancias', cells: ['Decir la verdad sobre las 31 constancias', '869 reales valen más que 900 falsas'], si: 'constancias_reales' },
      { id: 'bajas', cells: ['Corregir los 40 de marzo con fecha real', 'Ocho meses tarde, pero bien'], si: 'bajas_reales' },
      { id: 'preguntar', cells: ['Preguntar antes de calcular', 'Las vacaciones de Ángel, el corte del reloj, la BETA'] },
      { id: 'ventanilla', cells: ['Atender la ventanilla con un cuaderno al lado', 'Los errores masivos se ven ahí primero'] },
      { id: 'aliados', cells: ['Hacer aliados: Joel, Teresa, don Hugo', 'Sin ellos no hay datos'] },
    ],
    score: { contrato: 2, mesa: 2, fecha: 3, yolanda: 3, tijeras: 3, registro: 3, constancias: 3, bajas: 2, preguntar: 2, ventanilla: 2, aliados: 2 },
    res: (picks) => ({
      q: null,
      fx: { confianza: 4 },
      rel: { monica: 1 },
      out: `Mónica escucha y anota. Luego te dice lo suyo: «${picks.includes('fecha') || picks.includes('constancias') || picks.includes('registro') ? 'Eso es lo más difícil de enseñar: decir la verdad cuando duele' : 'Eso no sale en ningún curso'}. Lo otro, las fórmulas, se aprende. Y lo que hiciste mal, también se dice aquí, para que no se repita». Y te dice una cosa concreta que debes mejorar: «Avísame antes. Siempre antes».`,
      pro: { ok: 'Un balance honesto dice qué funcionó, qué no y qué cambia. Y se conversa, no se recibe.', info: 'Guarda tu propia lista: los aprendizajes de una campaña te sirven para la siguiente.' },
      kusi: ['animo', 'Dos semanas. Mira todo lo que cabe en dos semanas.'],
    }),
    rules: [[BP, 'Revisa las decisiones, no solo los resultados.']],
    mirada: {
      ve: 'A estas alturas ya viste el trabajo entero: el alta, la asistencia, el cálculo, el pago, la boleta, la liquidación, la inspección y la PLAME. Cada eslabón tenía una persona detrás. Un balance no reparte notas: decide qué haces distinto en la siguiente quincena.',
      visual: { tipo: 'flujo', titulo: 'Las dos semanas', pasos: ['Altas', 'Marcaciones', 'Cierre', 'Descuento', 'Liquidación', 'SUNAFIL', 'Boletas', 'PLAME'], aqui: 7 },
    },
  },
  {
    id: 'k4', t: '13:10', ch: 'presencial', who: null, titulo: 'Yusbely', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Comedor del fundo 1', show: ['personas', 'calidad', 'confianza'],
    body: (n, F) => `<p>${F.has('yusbely_vista') ? 'Mónica cumplió: se sienta contigo en el comedor frente a Yusbely Rangel.' : 'Yolanda te presenta en el comedor a Yusbely Rangel: «Ella sabe, señorita. Pregúntele».'} Tiene 36 años, es de Maracaibo y llegó a Ica hace dos años con su hijo. Cosecha en la cuadrilla 3. Se ha quitado el sombrero y tiene marcas de sol en la frente.</p><p>«Yo fui analista de nómina doce años. Aquí nadie me lo preguntó.» <mark class="clave">Te alcanza el refrigerio para dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas. ¿Qué le preguntas a Yusbely?',
    opts: [
      { id: 'hacia', label: '¿Qué hacía exactamente en Venezuela?', info: '«Nómina de una empresa de 800 personas. Cierre, aportes, liquidaciones. Aquí las leyes son distintas, claro, pero un cierre es un cierre.»' },
      { id: 'quiere', label: '¿Qué quiere usted?', info: '«Trabajar en lo mío, si se puede. Y que mi hijo me vea en una oficina, aunque sea un mes. Pero tampoco quiero que nadie piense que me regalaron nada.»' },
      { id: 'papeles', label: '¿Tiene sus documentos en regla para otro puesto?', info: '«Sí, mi carné está vigente. Mis títulos no están apostillados, eso sí: hace falta plata y un viaje que no puedo hacer. Por eso cosecho.»' },
      { id: 'falta', label: '¿Qué ve usted de nuestra planilla que nosotros no vemos?', info: '«Que nadie les explica nada a mis compañeras. Ven la boleta como un papel de la empresa, no como su plata. Si me dan media hora en el comedor, se las explico en un cuadrito.»' },
    ],
    res: picks => ({
      q: null,
      fx: { personas: picks.includes('quiere') ? 4 : 2, calidad: picks.includes('falta') ? 4 : 1, confianza: 2 },
      flags: ['yusbely_apoyo'],
      cartera: { quincena2: 'Yusbely apoya con la mesa desde el lunes' },
      out: picks.includes('papeles') ? 'Anotas lo de la apostilla: no bastará con buena voluntad. Mónica le ofrece, por lo pronto, apoyar en las mesas de boletas el lunes, y conversar con calma sobre un puesto de verdad.' : 'Mónica le ofrece apoyar las mesas de boletas desde el lunes, con la remuneración que corresponda, y conversar con calma de lo que venga. Yusbely se pone el sombrero, respira y vuelve al surco.',
      kusi: ['feliz', 'Doce años de nómina en un surco. ¡Qué bueno que preguntaste!'],
    }),
    rules: [[BP, 'Busca el talento también dentro: las personas saben más de lo que dice su puesto.']],
    mirada: {
      ve: 'En Ica, como en muchas ciudades del Perú, hay profesionales migrantes cosechando porque su título no está reconocido o porque nadie les preguntó. Una buena área de personal no solo paga a la gente: la conoce.',
      visual: { tipo: 'balanza', a: { t: 'Lo que dice su ficha', items: ['Cosechadora', 'Cuadrilla 3', 'Carné vigente'] }, b: { t: 'Lo que sabe', items: ['Doce años de nómina', 'Cierres y liquidaciones', 'Explicar una boleta'] } },
    },
  },
  {
    id: 'k5', t: '15:30', ch: 'whatsapp', who: null, titulo: 'Lo que se le dice al equipo', banner: 'assets/foto2/aplausos-verde.webp', show: ['confianza', 'personas'],
    body: () => `<p>Se termina la quincena y el equipo está reventado. Wendy se quedó dos noches. Joel cambió una batería y un portal. Don Hugo atendió desde una clínica.</p><p>Mónica te pide que escribas tú el mensaje en el grupo: <mark class="clave">«Yo siempre digo lo mismo. Di tú lo que viste»</mark>.</p>`,
    type: 'compose', enviaA: 'grupo', para: 'Para: Planillas Valle Verde', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'dato', t: 'El dato', ops: [
        { id: 'd1', t: 'Equipo: en dos semanas pasamos a 1,200 personas, cerramos una quincena y presentamos la PLAME.', ok: true, por: 'Concreto: lo que hicieron juntos.' },
        { id: 'd2', t: 'Equipo: gracias por todo su esfuerzo.', ok: null, por: 'Amable, pero se parece a todos los mensajes.' },
      ] },
      { id: 'quien', t: 'A quién agradecer', ops: [
        { id: 'q1', t: 'Wendy armó la mesa de huellas sin que nadie se lo pidiera. Joel corrigió el portal una noche entera. Don Hugo revisó la base desde una clínica.', ok: true, por: 'Nombres y hechos: eso se recuerda.' },
        { id: 'q2', t: 'Todos estuvieron increíbles, sin excepción.', ok: null, por: 'Nadie se siente visto.' },
      ] },
      { id: 'mal', t: 'Lo que salió mal', ops: [
        { id: 'm1', t: 'También nos equivocamos, y yo primero. Lo bueno es que hoy sabemos dónde mirar.', ok: true, por: 'Humildad con sentido.' },
        { id: 'm2', t: 'No todo fue perfecto por culpa de algunas áreas.', ok: false, por: 'En un mensaje de cierre, no se señala.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: 'Descansen el domingo. El lunes seguimos 🍇', ok: true, por: 'Sencillo y humano.' },
        { id: 'c2', t: 'El lunes a las 5:30 los quiero a todos con la misma energía.', ok: false, por: 'El equipo acaba de terminar dos semanas: el mensaje no es para exigir.' },
      ] },
    ],
    res: sel => {
      const buenas = ['d1', 'q1', 'm1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : 1, personas: q === 'buena' ? 4 : 0 },
        rel: { joel: q === 'buena' ? 1 : 0, monica: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Wendy responde con tres audios seguidos que no sabías que podía grabar. Joel pone un corazón, algo que nunca había hecho. Don Hugo escribe: «Muy bien, señorita».' : 'Llegan pulgares. Es un mensaje correcto.',
        pro: { ok: 'Reconocer con nombres y hechos construye el equipo que necesitarás el lunes.', risk: 'Un agradecimiento general, o con un reproche al final, se olvida rápido.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Qué divino ese grupo hoy!' : '¿A quién le habrías agradecido por su nombre?'],
      };
    },
    rules: [[BP, 'Agradece con nombres y hechos concretos.']],
    mirada: {
      ve: 'Planillas es un trabajo invisible: cuando sale bien, nadie se entera. Por eso importa quién lo dice en voz alta dentro del equipo.',
      visual: { tipo: 'mensaje', titulo: 'Un agradecimiento con nombres', txt: 'Equipo: en dos semanas pasamos a 1,200 personas, cerramos una quincena y presentamos la PLAME. Wendy armó la mesa de huellas. Joel corrigió el portal. Don Hugo revisó la base desde una clínica. También nos equivocamos, y yo primero. Descansen el domingo. El lunes seguimos 🍇' },
    },
  },
  {
    id: 'k6', t: '16:50', ch: 'presencial', who: 'monica', titulo: '¿Te ves en este puesto?', banner: 'assets/esc/camino.webp', lugar: 'Afuera del contenedor, con el viento de la tarde', show: ['confianza'],
    body: (n, F) => `<p>Salen las dos a tomar aire. El viento de la tarde levanta polvo y, a lo lejos, los buses esperan a la gente. El sol se va poniendo detrás de los parrones.</p><p>Mónica no te mira, mira el campo. «Hace 16 años que hago esto. Es repetitivo. Es invisible. Se paga regular. Y un día alguien te da la mano con las dos suyas porque salió su préstamo${F.has('eusebio_atendido') ? ', como don Eusebio' : ''}.» Se voltea: <mark class="clave">«¿Te ves en este puesto?»</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Sí. Me gusta que cada cifra sea alguien, y que un cierre bien hecho se note en una casa.',
        res: { q: null, fx: { confianza: 3 }, rel: { monica: 1 }, flags: ['te_ves_si'],
          out: '«Bien», dice Mónica. «Entonces el lunes te vas a querer ir. Eso también es parte.» Y se ríe por primera vez en dos semanas.',
          pro: { info: 'Si te ves aquí, busca formación en planillas y SST, aprende a leer la PLAME sin ayuda y conversa con gente del puesto en otros sectores: minería, retail, Estado.' },
          kusi: ['celebra', '¡Qué bacán! Ya tienes el mapa para seguir.'] } },
      { id: 'b', label: 'Todavía no lo sé. Me gusta la gente y me pesa la repetición. Quiero ver cómo termina una campaña.',
        res: { q: null, fx: { confianza: 2 }, rel: { monica: 1 }, flags: ['te_ves_duda'],
          out: '«Esa es la respuesta más honesta que he oído», dice Mónica. «Nadie sabe esto en dos semanas. Yo tardé tres campañas.»',
          pro: { info: 'Fíjate qué partes te dieron energía: las fórmulas, la ventanilla, la inspección. Otros puestos de RR.HH. tienen más de una y menos de otra.' },
          kusi: ['curioso', 'No saber también es una respuesta. ¿Qué te dio energía?'] } },
      { id: 'c', label: 'No. Lo que más disfruté fueron las personas, no los cierres. Creo que lo mío está en otra parte de RR.HH.',
        res: { q: null, fx: { confianza: 2 }, rel: { monica: 1 }, flags: ['te_ves_no'],
          out: '«Me alegra que lo sepas tan pronto», dice Mónica sin ofenderse. «Termina la campaña conmigo. Te llevas lo que casi nadie sabe en bienestar o en relaciones laborales: de dónde sale el sueldo.»',
          pro: { info: 'Saber que algo no es para ti también es información valiosa. Mira los puestos de Bienestar, Relaciones Laborales o HRBP: en esta plataforma también puedes vivirlos.' },
          kusi: ['animo', 'Ahora sabes más de ti que hace dos semanas. ¡Eso vale!'] } },
    ],
    rules: [[BP, 'Elegir un puesto es elegir su rutina, no solo su título.']],
    mirada: {
      ve: 'Analista de Administración de Personal: cierres, plazos, normas que cambian y un día a día invisible. A cambio, sabes exactamente de qué vive la empresa y qué le pasa a cada persona cuando algo sale mal. No hay respuesta correcta, solo la tuya.',
      visual: { tipo: 'balanza', a: { t: 'Lo que pesa', items: ['Repetición y plazos sin descanso', 'Trabajo invisible', 'Madrugadas en campaña'] }, b: { t: 'Lo que vale', items: ['Cada cifra es una familia', 'Se aprende muy rápido', 'Rol que toda empresa necesita'] } },
    },
  },
  {
    id: 'k7', t: '18:05', ch: 'correo', who: null, titulo: 'Rotterdam', banner: 'assets/esc/alarma.webp', show: ['etica', 'personas', 'confianza'],
    mail: { from: 'Ricardo Benavides · Gerente de Operaciones', to: 'Mónica Uribe; Planillas', asunto: 'URGENTE · Cliente de Rotterdam' },
    body: () => `<p>El cliente de Rotterdam canceló dos contenedores por un problema de calibre. Vamos a parar el fundo 4 antes de tiempo. <mark class="clave">Estimo unos 300 contratos que terminan antes de lo previsto.</mark></p><p>Lunes 7:00, en mi oficina. Traigan la lista de contratos del fundo 4.</p><p>R. Benavides</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'No decir nada todavía en el campo. Avisarle a Mónica, y dedicar una hora a bajar la lista del fundo 4: contrato, fecha de fin y quién tiene derecho preferente.',
        res: { q: 'buena', fx: { confianza: 4, cumplimiento: 3, tiempo: -2 }, rel: { monica: 1 }, flags: ['noticia_guardada'], cartera: { cese300: 'Lista del fundo 4 lista para el lunes' },
          responde: 'Ricardo, Mónica: el lunes a las 7:00 llevo la lista del fundo 4, con tipo de contrato, fecha de fin y derecho preferente. Sugiero definir antes qué y cuándo se les comunica, para que nadie se entere por el bus.',
          out: 'A las 19:00 apagas la computadora con la lista lista. En el fundo 4 trabajan Josué, Doña Celestina y la cuadrilla de Teresa. Subes al último bus. Nadie sabe. Tú sí.',
          pro: { ok: 'Preparas los datos y pides una comunicación ordenada, sin esconder ni filtrar.', risk: 'El fin de semana va a ser largo: guardar una noticia así pesa.', info: 'Revisa qué dice cada contrato sobre su término y qué corresponde pagar a cada persona.' },
          kusi: ['pensando', 'El lunes empieza otra historia…'] } },
      { id: 'b', label: 'Avisarle a Teresa: ella tiene a su cuadrilla en el fundo 4, y merece saberlo para que no se endeuden este fin de semana.',
        res: { q: 'aceptable', fx: { personas: 2, confianza: -3 }, rel: { monica: -1 }, flags: ['noticia_filtrada'], cartera: { cese300: 'Rumor en los buses' },
          envia: ['teresa', 'Teresa, esto es entre nosotras: puede que paren el fundo 4 antes de tiempo. Todavía no hay nada decidido.'],
          out: 'Lo hiciste por cuidarla. A las 18:30, la noticia ya está en tres buses, con números distintos en cada uno. El lunes la ventanilla estará llena, y tú todavía no tendrás respuestas.',
          pro: { ok: 'Te mueve una razón buena: la gente tiene compras y deudas.', risk: 'Un rumor sin datos genera más daño que la noticia. Y compromete a Teresa, que tampoco podrá responder nada.' },
          kusi: ['preocupado', 'Con buena intención… pero sin datos.'] } },
    ],
    rules: [[BP, 'Una noticia que afecta a muchas personas se prepara y se comunica con datos, pronto y por los canales correctos.']],
    mirada: {
      ve: 'Y así termina la segunda semana: con todo por hacer. Dar altas en masa ya lo viviste. Terminar 300 contratos antes de tiempo, con liquidaciones, derecho preferente y personas que contaban con esa plata, es lo que viene. Continuará.',
      visual: { tipo: 'embudo', titulo: 'Lo que llega el lunes', niveles: [['Planilla de campaña', 1200], ['Trabajan en el fundo 4', 420], ['Contratos que terminarían antes', 300]] },
    },
  },
];
