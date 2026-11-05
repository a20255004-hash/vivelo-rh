// Analista de Administración de Personal · Capítulo 7 · «SUNAFIL toca la puerta» · Semana 2, martes.
// Hilo de las dos semanas: llega una inspectora de SUNAFIL y pide boletas, registros de asistencia y altas. Todo lo que hiciste desde el lunes pasado está en una carpeta.
// Normas citadas:
// - Ley 28806, Ley General de Inspección del Trabajo, y su reglamento, D.S. 019-2006-TR: la inspección puede ingresar a los centros de trabajo
//   sin aviso previo; la negativa de ingreso solo se justifica por un riesgo inminente o actual (precedente de Sala Plena 001-2022-SUNAFIL/TFL);
//   las actuaciones se realizan en presencia del sujeto inspeccionado si es posible (art. 13.2 del reglamento).
//   https://lpderecho.pe/precedente-vinculante-facultades-inspector-resolucion-de-sala-plena-001-2022-sunafil-tfl/
//   https://lpderecho.pe/ley-28806-ley-general-de-inspeccion-del-trabajo-actualizada/
//   https://lpderecho.pe/reglamento-ley-general-inspeccion-trabajo-decreto-supremo-19-2006-tr-actualizado/
// - D.S. 018-2007-TR (T-Registro), D.S. 004-2006-TR (registro de asistencia), D.S. 001-98-TR (boletas), Ley 27337 (trabajo adolescente).

export const CAP = {
  n: 7, titulo: 'SUNAFIL toca la puerta', dia: 'Semana 2, martes', foto: 'assets/foto2/pasillo.webp',
  lugar: 'Agrícola Valle Verde · Fundo 1 y fundo 3',
  inicio: '06:30', fin: '19:30', cierreHora: '19:05',
  apertura: 'Martes, 8:30. Una camioneta blanca se estaciona frente al contenedor de Planillas. Baja una mujer con chaleco, un maletín y una credencial colgada al cuello.', boton: 'Salir a recibirla',
  kusi: 'Respira. Todo lo que hiciste bien desde el lunes pasado hoy tiene nombre: sustento.',
  lead: 'Recibiste a una inspectora sin esconderte, elegiste qué documentos mostrar primero, respondiste sobre las altas, juntaste pruebas en el almuerzo, armaste la carpeta de la inspección y le contaste a gerencia lo que viene.',
  reflexion: '¿Qué decisión de la semana pasada te alegró tener por escrito hoy?',
  siguiente: { n: 8, titulo: 'Las boletas', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'inspeccion', p: 'Inspección de SUNAFIL', j: 'Mónica · Planillas / Legal', d: 0, e: 'Inspectora en planta' },
  { id: 'carpeta', p: 'Carpeta para la inspección', j: 'Planillas', d: 0, e: 'Por armar' },
  { id: 'boletas', p: 'Constancias de entrega de boletas', j: 'Planillas', d: 4, e: '640 de 900 firmadas' },
  { id: 'liq', p: 'Liquidación de Ángel', j: 'Mónica · Planillas', d: 1, e: 'Cese mañana' },
  { id: 'asistencia', p: 'Registro de asistencia del fundo 3', j: 'Joel · TI', d: 7, e: 'Hueco del martes pasado' },
];

export const FUTURO = {
  inspeccion_abierta: ['Recibiste a la inspectora, verificaste su credencial y la acompañaste con Mónica.', 'Capítulo 8.'],
  inspeccion_demorada: ['Intentaste que la inspectora volviera otro día.', 'Ella lo anotó en el acta del capítulo 8.'],
  verdad_altas: ['Le dijiste a la inspectora la verdad sobre las altas, incluidas las que se regularizaron tarde.', 'Capítulo 9, en la PLAME y el T-Registro.'],
  oculto_altas: ['Mostraste el T-Registro sin mencionar las fechas cambiadas.', 'Las entrevistas en el campo dirán otra cosa en el capítulo 8.'],
  registro_honesto: ['Entregaste el registro de asistencia con su hueco y el reporte de incidencias con sustento.', 'Capítulo 10.'],
  registro_corregido: ['Entregaste el Excel «corregido» del supervisor como si fuera el registro.', 'Capítulo 8.'],
  carpeta_lista: ['La carpeta para la inspección quedó completa y ordenada.', 'Capítulo 9: SUNAFIL dará su plazo.'],
  requerimiento_boletas: ['La inspectora pidió las constancias de entrega de boletas de la quincena.', 'Mañana, capítulo 8, lanzas la boleta digital.'],
  gerencia_informada: ['Ricardo recibió un resumen claro de la inspección y de lo que falta.', 'Capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Valle Verde', sub: 'Mónica, Joel, Wendy y tú', c: '#2F6B3F' },
  monica: { n: 'Mónica Uribe', sub: 'Jefa de Planillas', who: 'monica' },
  raul: { n: 'Ing. Raúl Cárdenas', sub: 'Jefe de fundo', who: 'raul' },
  joel: { n: 'Joel Ramírez', sub: 'Soporte de TI', who: 'joel' },
  yolanda: { n: 'Yolanda Quispe', sub: 'Cosechadora', who: 'yolanda' },
  ricardo: { n: 'Ricardo Benavides', sub: 'Gerente de Operaciones', c: '#334155' },
  fidel: { n: 'Fidel Choque', sub: 'Delegado · cuadrilla 12', c: '#7A3E9D' },
  lucia: { n: 'Lucía Ñaupari', sub: 'Jefa de Packing', c: '#C2410C' },
  salcedo: { n: 'Dra. Patricia Salcedo', sub: 'Legal · Lima', c: '#0E7490' },
};

export const WSP = [
  { chat: 'grupo', t: '06:35', de: 'Mónica', txt: 'Hoy estoy en Ica hasta las 9, en el banco. Cualquier cosa me llaman.' },
  { chat: 'fidel', t: '06:50', de: 'Fidel', txt: 'Señorita, hoy es mi segundo día con el ingeniero Ángel en la 12. Me está enseñando el tareo y la hoja de salida 💪', si: 'exonerado_plan' },
  { chat: 'fidel', t: '06:50', de: 'Fidel', txt: 'Señorita, le aviso: la cuadrilla presentó la denuncia en SUNAFIL el viernes. Por lo del martes pasado.', si: 'he_tareo' },
  { chat: 'grupo', t: '08:32', de: 'Wendy', txt: '¡¡Llegó SUNAFIL!! Una inspectora está en la puerta 😱' },
  { chat: 'monica', t: '08:40', de: 'Mónica', txt: 'Voy saliendo. Recíbela tú, verifica su credencial y no la dejes sola. Llego a las 9:30.' },
  { chat: 'joel', t: '12:25', de: 'Joel', txt: 'Te mando el archivo original del reloj, sin tocar, con el registro del corte de luz. Y la hoja de salida firmada desde el jueves.', si: 'reloj_respaldo' },
  { chat: 'joel', t: '12:25', de: 'Joel', txt: 'Tengo el archivo original del reloj. El Excel que mandó Ángel no coincide. Te mando los dos.', si: 'supervisor_mano' },
  { chat: 'yolanda', t: '13:10', de: 'Yolanda', txt: 'Señorita, la de SUNAFIL me preguntó por las tijeras. Le dije la verdad: que se devolvió a todas.', si: 'reintegro_todos' },
  { chat: 'ricardo', t: '16:30', de: 'Ricardo', txt: '¿Qué pasó con SUNAFIL? Me entero por Raúl. Quiero un resumen hoy.' },
];

export const CORREOS = [
  { t: '07:00', de: 'Dra. Patricia Salcedo · Legal', para: 'Planillas Valle Verde', asunto: 'Recordatorio: operativos en Ica', html: '<p>Me informan que SUNAFIL está haciendo operativos en agroexportadoras del valle esta semana. Tengan a mano altas, asistencia, boletas y contratos.</p><p>Si llegan, cooperen, ordenen y no entreguen nada que no exista.</p>' },
  { t: '11:50', de: 'Carmen Salas · Inspectora auxiliar, SUNAFIL Ica', para: 'Agrícola Valle Verde S.A.C.', asunto: 'Requerimiento de información', html: '<p>Se requiere exhibir, en esta diligencia o en el plazo que se indica en el acta: registro de asistencia de la última quincena (fundo 3), constancias de entrega de boletas de la última quincena, altas en T-Registro de los ingresos de campaña y contratos de trabajo de campaña.</p>' },
];

export const QUIZ = [
  { q: 'Una inspectora de SUNAFIL llega sin cita. ¿Puede entrar?', ops: ['Solo con cita previa', 'Sí: la inspección puede ingresar sin aviso previo; negarse solo se justifica por un riesgo inminente', 'Solo si está el gerente', 'Solo con orden judicial'], ok: 1, por: 'La Ley 28806 permite ingresar sin aviso. El Tribunal de SUNAFIL ha precisado que la negativa solo se justifica por un riesgo inminente o actual.' },
  { q: 'Lo primero que haces cuando llega una inspectora es…', ops: ['Pedirle que vuelva mañana', 'Verificar su credencial, avisar a tu jefa y acompañarla', 'Llamar al gerente para que la atienda él', 'Esconder los documentos incompletos'], ok: 1, por: 'Verificas su identidad, avisas a quien corresponde y no la dejas sola: las actuaciones se hacen, en lo posible, en presencia de la empresa.' },
  { q: 'La inspectora pide el registro de asistencia de un día en que el reloj falló. ¿Qué entregas?', ops: ['Un Excel corregido que se vea completo', 'El registro original, con su hueco, y el reporte de incidencias con el sustento de la corrección', 'Nada', 'El tareo del supervisor'], ok: 1, por: 'Se entrega lo que existe. Un hueco explicado y sustentado se defiende; un documento arreglado, no.' },
  { q: 'Un trabajador regularizado tarde aparece en T-Registro con su fecha real. ¿Cómo lo presentas?', ops: ['No lo mencionas', 'Lo explicas: qué pasó, cuándo se regularizó y qué cambiaste para que no se repita', 'Cambias la fecha antes de que la vea', 'Culpas al caporal'], ok: 1, por: 'Una regularización con fecha real y explicación muestra buena fe. Una fecha falsa convierte un error en algo mucho más grave.' },
  { q: 'Al final de la visita, la inspectora entrega un requerimiento con un plazo. ¿Qué haces?', ops: ['Lo guardas para cuando haya tiempo', 'Anotas cada punto, asignas un responsable y una fecha, e informas a gerencia', 'Le respondes por WhatsApp', 'Esperas la multa'], ok: 1, por: 'Un requerimiento es una lista de tareas con plazo. Organizarlo bien es la mejor defensa.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '08:35', ch: 'presencial', who: null, titulo: 'La inspectora en la puerta', banner: 'assets/foto2/pasillo.webp', lugar: 'Puerta del contenedor de Planillas', show: ['cumplimiento', 'confianza', 'calidad'],
    body: (n, F) => `<p>Carmen Salas, inspectora auxiliar de SUNAFIL Ica: cincuentona, lentes de sol en la cabeza, zapatillas llenas de polvo. ${F.has('he_tareo') ? '«Vengo por una denuncia de trabajadores de la cuadrilla 12.»' : '«Estamos en un operativo en agroexportadoras del valle.»'}</p><p>Mónica está en Ica, Ricardo en una reunión, Legal en Lima. Wendy te mira desde el escritorio con los ojos muy abiertos. <mark class="clave">Tú eres la empresa en este momento</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Pedirle su credencial, anotar su nombre y la orden de inspección, avisar a Mónica, ofrecerle la sala de reuniones y acompañarla en todo.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 3 }, rel: { monica: 1 }, flags: ['inspeccion_abierta'], cartera: { inspeccion: 'Recibida · Mónica en camino' },
          out: 'La inspectora te muestra su credencial y sonríe apenas: «Usted es la primera del valle que me la pide». Wendy le sirve un vaso de agua. Mónica llega a las 9:25, sin aliento.',
          pro: { ok: 'Verificas, avisas y acompañas. No escondes nada ni te paralizas.', info: 'Anota la hora de llegada, el nombre y lo que pide: será tu bitácora de la diligencia.' },
          kusi: ['animo', 'Credencial, agua y calma. ¡Así se recibe!'] } },
      { id: 'b', label: 'Pedirle que vuelva mañana, cuando estén la jefa de Planillas y Legal, porque tú eres nueva y no quieres equivocarte.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, confianza: -3 }, flags: ['inspeccion_demorada'], cartera: { inspeccion: 'Inspectora anotó la negativa' },
          out: 'La inspectora saca un cuaderno y escribe algo. «La inspección puede ingresar sin aviso, señorita. Lo dejo constancia.» Y entra igual.',
          pro: { ok: 'Tu miedo es entendible.', risk: 'La inspección puede ingresar sin aviso, y negarse o demorarla sin un riesgo inminente se registra en contra de la empresa.' },
          kusi: ['sorpresa', 'Huy… eso quedó anotado.'] } },
      { id: 'c', label: 'Dejarla pasar al fundo 3 con Wendy, mientras tú buscas los documentos en la oficina.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, calidad: -2 }, cartera: { inspeccion: 'Inspectora en el fundo con la practicante' },
          out: 'La inspectora se va con Wendy al fundo. Entrevista a seis trabajadores. Tú no sabes qué preguntó ni qué le dijeron.',
          pro: { ok: 'No obstaculizas la inspección.', risk: 'Las actuaciones se hacen, en lo posible, en presencia de la empresa. Mandar sola a una practicante es no estar.' },
          kusi: ['pensando', '¿Y quién escucha lo que pregunta?'] } },
    ],
    rules: [[LEY, 'Ley 28806: la inspección puede ingresar a los centros de trabajo sin aviso previo.'], [LEY, 'D.S. 019-2006-TR, art. 13.2: las visitas se realizan, en lo posible, en presencia del sujeto inspeccionado.']],
    mirada: {
      ve: 'La primera impresión de una inspección se juega en la puerta. Una empresa que verifica la credencial, avisa a quien corresponde y acompaña muestra que no tiene miedo. Pedir que vuelva otro día muestra justo lo contrario.',
      visual: { tipo: 'flujo', titulo: 'Los primeros cinco minutos', pasos: ['Verificar la credencial', 'Anotar nombre y motivo', 'Avisar a la jefa y a Legal', 'Ofrecer un espacio', 'Acompañar siempre'], aqui: 0 },
      normas: [{ ley: 'Ley 28806 y precedente 001-2022-SUNAFIL/TFL', dice: 'Los inspectores pueden ingresar sin aviso previo; la negativa solo se justifica por un riesgo inminente o actual.', practica: '«Vuelva mañana» no es una opción.' }],
    },
  },
  {
    id: 'h2', t: '09:40', ch: 'documento', who: 'monica', titulo: 'Lo primero que se muestra', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Sala de reuniones', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Mónica llega y se sienta junto a la inspectora. Te dice en voz baja: «Trae lo que pidió primero. Ordenado. Nada de cajas sueltas».</p><p>Puedes traer <mark class="clave">cuatro carpetas</mark> en el primer viaje; el resto, después del almuerzo.</p>`,
    type: 'pick', n: 4, prompt: 'Elige las cuatro carpetas del primer viaje.', boton: 'Traer estas cuatro', resumen: 'Trajiste',
    cols: ['Carpeta', 'Qué contiene'],
    rows: [
      { id: 'alta', cells: ['Constancias de alta en T-Registro de la campaña', 'Las 900 altas, con fecha de ingreso'] },
      { id: 'asis', cells: ['Registro de asistencia y reporte de incidencias', 'El hueco del fundo 3 y su sustento'] },
      { id: 'bol', cells: ['Boletas de la última quincena y constancias de entrega', '640 firmadas de 900'] },
      { id: 'cont', cells: ['Contratos de campaña firmados', 'Con la remuneración corregida'] },
      { id: 'org', cells: ['Organigrama y misión de la empresa', 'Muy bonito, plastificado'] },
      { id: 'fotos', cells: ['Fotos del almuerzo de fin de campaña pasada', 'Se ve buen clima laboral'] },
    ],
    score: { alta: 3, asis: 3, bol: 3, cont: 2, org: -1, fotos: -2 },
    res: (picks, sc) => {
      const q = sc >= 10 ? 'buena' : sc >= 6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, cumplimiento: q === 'riesgosa' ? -3 : 3 },
        flags: picks.includes('bol') ? ['requerimiento_boletas'] : [],
        cartera: { carpeta: q === 'buena' ? 'Primer viaje con lo que pidió' : 'Primer viaje incompleto' },
        out: picks.includes('bol') ? 'La inspectora hojea las boletas y se detiene en las constancias: «¿Y las otras 260?». Mónica responde: «Mañana lanzamos la boleta digital». La inspectora lo anota.' : 'La inspectora mira el organigrama un segundo y lo deja a un lado: «Necesito las boletas, señorita».',
        pro: { ok: 'Llevas exactamente lo que pidió, en orden: eso transmite control.', risk: 'Lo decorativo hace perder tiempo y sugiere que se quiere distraer.', info: 'Ten un índice impreso de la carpeta: la inspectora lo agradecerá.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Las cuatro que importaban!' : 'Las fotos del almuerzo pueden esperar…'],
      };
    },
    rules: [[LEY, 'El empleador exhibe los documentos que la inspección requiera, dentro de la diligencia o en el plazo que se fije.'], [LEY, 'D.S. 001-98-TR: el empleador debe acreditar la entrega de la boleta de pago.']],
    mirada: {
      ve: 'En una inspección, el orden es credibilidad. Llevar lo que se pidió, completo y con índice, le dice a la inspectora que la empresa sabe qué tiene. Llevar cosas bonitas que nadie pidió le dice lo contrario.',
      visual: { tipo: 'matriz', x: 'Lo pidió la inspectora', y: 'Prueba un derecho', cuadrantes: ['Primer viaje', 'Segundo viaje', 'Si lo pide', 'No llevar'], items: [['Altas', .9, .9], ['Asistencia', .85, .85], ['Boletas', .9, .8], ['Contratos', .7, .7], ['Organigrama', .2, .1], ['Fotos', .1, .05]] },
    },
  },
  {
    id: 'h3', t: '11:00', ch: 'presencial', who: null, titulo: 'La pregunta sobre las altas', banner: 'assets/3d/scenes/agro.webp', lugar: 'Fundo 3 · entre los parrones', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>La inspectora pide ir al campo. Entre los parrones, conversa con cosechadoras a la sombra de una malla, anota nombres y DNI. ${F.has('menor_pasado') ? 'Se detiene un rato largo con Kevin, el sobrino de Teresa. ' : ''}${F.has('sin_alta') ? 'Una de las 60 que entraron sin pasar por la mesa le dice que el primer día nadie le hizo firmar nada. ' : ''}</p><p>Luego se voltea hacia ti: «Señorita, <mark class="clave">¿todos los que están aquí tienen alta desde su primer día?</mark>».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder con la verdad: mostrar el T-Registro con las fechas reales, explicar qué altas se regularizaron tarde, cuándo y qué se cambió (la mesa de registro) para que no se repita.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 4, confianza: 3 }, rel: { monica: 1 }, flags: ['verdad_altas'],
          out: 'La inspectora anota. «Hay una infracción en las altas tardías, eso no se lo voy a negar. Pero la fecha es la real y ya corrigieron el proceso. Eso también lo pongo.» Mónica te aprieta el brazo, despacio.',
          pro: { ok: 'Reconoces lo que pasó y muestras la corrección. La fecha real, ahora, juega a tu favor.', risk: 'Habrá consecuencias por las altas tardías.', info: 'Prepara una nota breve con la línea de tiempo: qué pasó, qué día se regularizó y qué cambió.' },
          kusi: ['animo', 'La verdad con sustento pesa más que el miedo.'] } },
      { id: 'b', label: 'Mostrar el T-Registro tal como está, sin mencionar las fechas que se cambiaron: las fechas del sistema son las oficiales.', si: 'fecha_maquillada',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -6, confianza: -2 }, flags: ['oculto_altas'],
          out: 'La inspectora mira el T-Registro, luego su cuaderno con las entrevistas, y otra vez el T-Registro. «Tres personas me dijeron que empezaron un día antes de lo que dice aquí.» No dices nada. Ella tampoco. Anota.',
          pro: { ok: 'Evitas admitir algo hoy.', risk: 'Las entrevistas, el reloj y los testigos contradicen el sistema. Lo que era un alta tardía ahora parece un registro falseado.' },
          kusi: ['triste', 'El reloj y la gente sí recordaban…'] } },
      { id: 'c', label: 'Decirle que eso debe responderlo Legal, que está en Lima, y que le enviarán una respuesta por escrito.',
        res: { q: 'aceptable', fx: { cumplimiento: 0, confianza: -3 },
          out: 'La inspectora asiente sin entusiasmo: «Lo pongo en el requerimiento». La pregunta era simple y la respuesta la tenías tú.',
          pro: { ok: 'No respondes algo que no sabes con certeza.', risk: 'Derivar a Legal lo que puedes responder con el sistema delante transmite que hay algo que esconder.' },
          kusi: ['pensando', 'La respuesta estaba en tu pantalla…'] } },
    ],
    rules: [[LEY, 'El T-Registro debe reflejar la fecha real de ingreso.'], [BP, 'En una inspección, reconoce lo que pasó y muestra lo que corregiste.']],
    mirada: {
      ve: 'La inspectora no solo revisa papeles: conversa con la gente. Lo que dice el sistema y lo que dice el surco tienen que coincidir. Una empresa que reconoce un error y muestra su corrección está en una posición muy distinta a una que lo esconde.',
      visual: { tipo: 'balanza', a: { t: 'Esconder', items: ['Nada que admitir hoy', 'Contradice las entrevistas'] }, b: { t: 'Reconocer y mostrar', items: ['Una infracción reconocida', 'Fecha real y proceso corregido', 'Credibilidad para todo lo demás'] } },
    },
  },
  {
    id: 'h4', t: '12:20', ch: 'llamada', who: null, titulo: 'El almuerzo de las pruebas', banner: 'assets/foto/llamada.webp', lugar: 'Contenedor de Planillas', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>La inspectora sale a almorzar a Los Aquijes y vuelve a las 13:30. Pidió el registro de asistencia del martes pasado en el fundo 3, el día del corte de luz.</p><p>Tienes una hora, un pan con chicharrón a medio comer y <mark class="clave">cuatro llamadas</mark>.</p>`,
    type: 'calls',
    calls: [['Joel Ramírez · TI', 'Contesta desde la caseta', 'El archivo original del reloj está intacto, con el hueco de 14:52 a 19:10. Te lo exporto tal cual, con la fecha de generación.'], ['Dra. Patricia Salcedo · Legal', 'Contesta en el aeropuerto de Lima', 'Entreguen lo que existe, con su explicación. Lo que no exista, no lo fabriquen. Un hueco explicado se defiende; un documento arreglado, no.'], ['Lucía Ñaupari · Packing', 'Contesta entre cajas', 'La comunicación del turno noche se la mandé a Planillas el lunes por escrito, después de que me lo pediste. Te la reenvío.'], ['Ing. Raúl Cárdenas', 'Contesta por radio, con ruido', '¿El Excel de Ángel? Mándele ese, se ve completo. Para qué complicarnos.']],
    prompt: 'Tienes el registro original con su hueco, el reporte de incidencias y el Excel «completo» del supervisor. ¿Qué entregas?',
    choices: [
      { id: 'a', label: 'El registro original con su hueco, el reporte de incidencias con jabas y GPS, y la explicación de cómo se pagó.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4, calidad: 3 }, flags: ['registro_honesto'], cartera: { asistencia: 'Original + incidencias con sustento' },
          out: 'La inspectora lee el reporte de incidencias en silencio. «¿Quién hizo esto?» Mónica te señala. «Está bien sustentado. El reloj falló; lo que importa es cómo lo resolvieron.»',
          pro: { ok: 'Entregas lo que existe y cómo lo corregiste. Tu reporte del miércoles pasado es hoy tu mejor defensa.', info: 'Si el pago fue con la presunción de sobretiempo o con evidencia, explícalo con la misma claridad.' },
          kusi: ['celebra', '¡Tu reporte de incidencias salvó la tarde!'] } },
      { id: 'b', label: 'El Excel del supervisor, que se ve completo, como dice Raúl: el original con el hueco solo generará preguntas.',
        res: { q: 'riesgosa', fx: { cumplimiento: -7, etica: -6 }, flags: ['registro_corregido'], cartera: { asistencia: 'Excel corregido entregado como registro' },
          out: 'La inspectora compara el Excel con lo que le contaron en el campo: salidas a las 15:00 de gente que estuvo hasta el anochecer. Pide el archivo original del reloj. Joel lo tiene, con fecha de generación.',
          pro: { ok: 'Parece más ordenado.', risk: 'Un documento arreglado contradice el original, las jabas y el GPS. Lo que era una falla técnica se vuelve una alteración del registro.' },
          kusi: ['indignado', '¡El original existe y Joel lo tiene!'] } },
    ],
    rules: [[LEY, 'D.S. 004-2006-TR: el registro de control de asistencia refleja ingreso y salida; sus fallas se corrigen con sustento.'], [BP, 'En una inspección, entrega lo que existe y explica cómo se corrigió.']],
    mirada: {
      ve: 'La tentación en una inspección es mostrar documentos que se vean perfectos. Pero las inspectoras saben que los relojes fallan. Lo que no perdonan es que se fabrique la perfección.',
      visual: { tipo: 'cambio', titulo: 'Lo que se entrega', pares: [['Excel «completo» del supervisor', 'Archivo original del reloj'], ['Salidas a las 15:00', 'Hueco de 14:52 a 19:10 explicado'], ['Sin sustento', 'Jabas, GPS y reporte de incidencias']] },
    },
  },
  {
    id: 'h5', t: '14:40', ch: 'documento', who: null, titulo: 'La carpeta de la inspección', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>La inspectora deja un requerimiento: lo que falte, se presenta en el plazo del acta. Mónica te encarga la carpeta definitiva, la que se quedará en el archivo para cualquier inspección futura.</p><p>Cada bloque tiene piezas que <mark class="clave">prueban algo</mark> y piezas que solo abultan.</p>`,
    type: 'builder', prompt: 'Arma la carpeta eligiendo las piezas de cada bloque.', boton: 'Cerrar la carpeta',
    bloques: [
      { id: 'altas', t: 'Altas y contratos', n: 2, ops: [
        { id: 'a1', t: 'Constancias de alta en T-Registro con fecha real y nota de regularización de las tardías.', ok: true },
        { id: 'a2', t: 'Contratos de campaña firmados con la remuneración vigente.', ok: true },
        { id: 'a3', t: 'Carta de la gerencia diciendo que «siempre se cumple la ley».', ok: false, por: 'Una declaración no prueba nada.' },
      ] },
      { id: 'asis', t: 'Asistencia y horas', n: 2, ops: [
        { id: 's1', t: 'Archivo original del reloj y hojas de salida firmadas.', ok: true },
        { id: 's2', t: 'Reporte de incidencias con su sustento y el criterio de pago de horas extra.', ok: true },
        { id: 's3', t: 'El tareo de los supervisores como registro de asistencia.', ok: false, por: 'El tareo no reemplaza al registro.' },
      ] },
      { id: 'pago', t: 'Pagos', n: 2, ops: [
        { id: 'p1', t: 'Boletas de la quincena y constancias de entrega.', ok: true },
        { id: 'p2', t: 'Reintegros con su aviso a los trabajadores (vacaciones de marzo y herramientas).', ok: true, por: 'Muestra que los errores se corrigen.' },
        { id: 'p3', t: 'Resumen de planilla sin boletas individuales.', ok: false, por: 'La inspectora pidió las boletas, no un resumen.' },
      ] },
      { id: 'indice', t: 'Presentación', n: 1, ops: [
        { id: 'i1', t: 'Índice con cada punto del requerimiento, el documento que lo responde y su folio.', ok: true },
        { id: 'i2', t: 'Una caja con todo, para que la inspectora busque lo que necesite.', ok: false, por: 'Desordenado parece escondido.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .99 ? 'buena' : k >= .7 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : 1, cumplimiento: q === 'riesgosa' ? -3 : 4, tiempo: -1 },
        flags: q === 'buena' ? ['carpeta_lista'] : [],
        cartera: { carpeta: q === 'buena' ? 'Carpeta con índice y folios' : 'Carpeta con piezas sueltas' },
        out: q === 'buena' ? 'La inspectora hojea el índice, firma el cargo de recepción y dice: «Ojalá todas las empresas del valle tuvieran esto». Es tu entregable más importante de las dos semanas.' : 'La inspectora recibe la carpeta, pero tiene que preguntar dos veces dónde está cada cosa.',
        pro: { ok: 'Una carpeta con índice responde punto por punto al requerimiento. La inspectora no tiene que adivinar nada.', risk: 'Lo que no prueba algo abulta y distrae.', info: 'Deja una copia escaneada de todo lo entregado, con el cargo de recepción.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Carpeta de campeonato! ¡Qué bacán!' : 'Casi. Un índice ayuda mucho.'],
      };
    },
    rules: [[BP, 'Responde un requerimiento punto por punto, con índice y cargo de recepción.']],
    mirada: {
      ve: 'La carpeta de la inspección es el resumen honesto de lo que hiciste: altas con fecha real, asistencia con su hueco explicado, pagos con sus reintegros. Cada decisión de la semana pasada está ahí, para bien o para mal.',
      visual: { tipo: 'embudo', titulo: 'Del requerimiento a la carpeta', niveles: [['Puntos del requerimiento', 4], ['Documentos que los responden', 8], ['Con folio en el índice', 8]] },
    },
  },
  {
    id: 'h6', t: '16:10', ch: 'presencial', who: 'monica', titulo: 'Lo que viene después', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de Mónica', show: ['calidad', 'cumplimiento'],
    body: () => `<p>La camioneta blanca se va levantando polvo. Mónica cierra la puerta, se quita los zapatos debajo del escritorio y suspira. «No termina hoy. Ahora empieza otra cosa.»</p><p>Te pide que le expliques a Wendy, que nunca vio una inspección, <mark class="clave">qué pasa desde hoy</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena cómo sigue una inspección.', boton: 'Explicárselo a Wendy',
    items: [
      { id: 'orden', t: 'Orden de inspección: SUNAFIL decide inspeccionar, por denuncia u operativo', por: 'Es lo que traía la inspectora en su maletín.' },
      { id: 'visita', t: 'Actuaciones: visita, entrevistas y revisión de documentos', por: 'Lo de hoy.' },
      { id: 'req', t: 'Requerimientos: exhibir documentos o comparecer en un plazo', por: 'Lo que dejó por escrito antes de irse.' },
      { id: 'medida', t: 'Medida de requerimiento para corregir los incumplimientos encontrados', por: 'La oportunidad de subsanar.' },
      { id: 'cierre', t: 'Informe o acta de infracción, según si se corrigió o no', por: 'Si queda acta, puede iniciarse el procedimiento sancionador.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, cumplimiento: q === 'riesgosa' ? -2 : 3 },
        out: q === 'buena' ? 'Wendy lo anota en su cuaderno con colores. Mónica asiente: «Lo más importante es la medida de requerimiento: ahí corregimos lo que falte».' : 'Mónica corrige el orden: «Primero te piden, luego te dan la oportunidad de corregir, y recién después viene el acta».',
        pro: { ok: 'Saber qué viene permite planificar: plazos, responsables y lo que se puede corregir antes de que haya sanción.', info: 'Pon cada plazo del requerimiento en el calendario de cierre, en rojo.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Ya sabes qué viene!' : 'Primero piden, luego corriges.'],
      };
    },
    rules: [[LEY, 'Ley 28806: la inspección puede concluir con medidas de requerimiento para corregir incumplimientos y, si no se corrigen, con acta de infracción.']],
    mirada: {
      ve: 'Una inspección es un proceso, no un susto de un día. Entenderlo cambia la actitud: de esconder a corregir. Lo que se subsana a tiempo, con evidencia, cambia el final de la historia.',
      visual: { tipo: 'flujo', titulo: 'Cómo sigue una inspección', pasos: ['Orden', 'Actuaciones', 'Requerimientos', 'Medida de requerimiento', 'Informe o acta'], aqui: 2 },
    },
  },
  {
    id: 'h7', t: '17:40', ch: 'whatsapp', who: null, titulo: 'El resumen para Ricardo', banner: 'assets/esc/escritorio.webp', show: ['confianza', 'calidad', 'cumplimiento'],
    body: () => `<p>Ricardo te escribe: «¿Qué pasó con SUNAFIL? Me entero por Raúl. Quiero un resumen hoy». Mónica está en una llamada con Legal y te pide que le respondas tú, con copia a ella.</p><p>Ricardo leerá esto en su camioneta, entre dos reuniones: <mark class="clave">corto y sin adornos</mark>.</p>`,
    type: 'compose', enviaA: 'ricardo', para: 'Para: Ricardo Benavides · CC: Mónica Uribe', boton: 'Enviar el resumen',
    prompt: 'Arma el resumen eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué pasó', ops: [
        { id: 'q1', t: 'Ricardo: hoy vino una inspectora de SUNAFIL Ica. Revisó altas, asistencia y boletas, y entrevistó gente en el fundo 3.', ok: true, por: 'Hechos, en una línea.' },
        { id: 'q2', t: 'Ricardo: tuvimos un día muy difícil por la visita de SUNAFIL.', ok: false, por: 'Habla de cómo te sentiste, no de qué pasó.' },
      ] },
      { id: 'riesgo', t: 'Riesgo', ops: [
        { id: 'r1', t: 'Lo más delicado: las altas que se regularizaron tarde. Están con fecha real y con el proceso corregido.', ok: true, por: 'Le dices lo peor primero, con su contexto.' },
        { id: 'r2', t: 'Todo salió perfecto, no hay de qué preocuparse.', ok: false, por: 'Si después llega un acta, perderás su confianza.' },
      ] },
      { id: 'falta', t: 'Lo que falta', ops: [
        { id: 'f1', t: 'Dejó un requerimiento: faltan 260 constancias de entrega de boletas. Mañana lanzamos la boleta digital para cerrarlo.', ok: true, por: 'Pendiente, responsable y fecha.' },
        { id: 'f2', t: 'Dejó unos papeles que estamos revisando.', ok: null, por: 'Vago: Ricardo no sabe qué decidir.' },
      ] },
      { id: 'pedido', t: 'Lo que necesito', ops: [
        { id: 'p1', t: 'Necesito que los jefes de fundo apoyen mañana la entrega de boletas en el campo.', ok: true, por: 'Un pedido concreto que solo él puede dar.' },
        { id: 'p2', t: 'Cualquier cosa, me avisas.', ok: false, por: 'La pelota queda en su cancha sin dirección.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'r1', 'f1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : sel.riesgo === 'r2' ? -4 : 1, calidad: q === 'buena' ? 3 : 0 },
        rel: { monica: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['gerencia_informada'] : [],
        out: q === 'buena' ? 'Ricardo responde en tres minutos: «Ok. Mañana les digo a los jefes de fundo. Gracias por la claridad». Es la primera vez que te agradece algo.' : sel.riesgo === 'r2' ? 'Ricardo responde con un pulgar. Si llega un acta, recordará este «todo salió perfecto».' : 'Ricardo pregunta: «¿Y qué necesitan de mí?». Toca escribirle otra vez.',
        pro: { ok: 'Un resumen para gerencia dice qué pasó, cuál es el riesgo, qué falta y qué se necesita de ella.', risk: 'Suavizar un riesgo para no preocupar al gerente lo deja sin tiempo para actuar.', info: 'Copia siempre a tu jefa: el resumen también es suyo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Ricardo agradeció! Eso no pasa todos los días.' : '¿Qué necesitaba saber Ricardo para decidir?'],
      };
    },
    rules: [[BP, 'Informa a gerencia lo malo primero, con contexto, lo que falta y lo que necesitas.']],
    mirada: {
      ve: 'Después de una inspección, la gerencia necesita saber tres cosas: qué tan grave es, qué falta y qué tiene que hacer ella. Un resumen honesto hoy evita una sorpresa cuando llegue el acta.',
      visual: { tipo: 'mensaje', titulo: 'Un resumen para leer en la camioneta', txt: 'Ricardo: hoy vino SUNAFIL Ica. Revisó altas, asistencia y boletas. Lo más delicado: las altas regularizadas tarde, con fecha real y proceso corregido. Falta: 260 constancias de boletas; mañana lanzamos la boleta digital. Necesito que los jefes de fundo apoyen la entrega en el campo.' },
    },
  },
];
