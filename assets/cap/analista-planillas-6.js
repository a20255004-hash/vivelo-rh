// Analista de Planillas · Capítulo 6 · «La fiscalización» · Semana 2, lunes.
// Hilo de las dos semanas: Andes Logística cambia de sistema de planillas y paga con el sistema nuevo el viernes de la Semana 2.
// Normas citadas:
// - Ley 28806, Ley General de Inspección del Trabajo, art. 5: los inspectores pueden examinar en el centro de trabajo la
//   documentación y los libros de la empresa con relevancia sociolaboral (planillas, boletas, registros, sistemas informáticos)
//   y requerir su exhibición. Reglamento: D.S. 019-2006-TR.
//   https://lpderecho.pe/facultades-inspector-laboral-sunafil/
//   https://lpderecho.pe/reglamento-ley-general-inspeccion-trabajo-decreto-supremo-19-2006-tr-actualizado/
// - D.S. 001-97-TR (CTS), ya citado en el capítulo 4.
// No se citan plazos legales de la inspección: la fecha de comparecencia la fija el inspector en la historia.

export const CAP = {
  n: 6, titulo: 'La fiscalización', dia: 'Semana 2, lunes', foto: 'assets/3d/scenes/balanza.webp',
  lugar: 'Andes Logística · Centro de distribución, Callao',
  inicio: '07:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Lunes de la semana del pago. A las ocho en punto, el vigilante de la puerta 2 llama a Compensaciones: «Hay un señor de SUNAFIL con una orden. Pregunta por el área de planillas». Patricia está atracada en la Gambetta por un choque.', boton: 'Bajar a portería',
  kusi: 'Un inspector no es un enemigo: es alguien que necesita documentos y coherencia. ¡Respira!',
  lead: 'Recibiste al inspector, armaste el expediente, decidiste qué contarle, salvaste el historial del sistema viejo y cuidaste a quien temía represalias.',
  reflexion: 'Si un inspector revisara hoy tu trabajo de la semana pasada, ¿qué documento te faltaría?',
  siguiente: { n: 7, titulo: 'Tesorería', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'sunafil', p: 'Inspección de SUNAFIL · CTS y gratificaciones', j: 'Inspector Raúl Cuba', d: 0, e: 'Orden recibida hoy' },
  { id: 'expediente', p: 'Expediente para SUNAFIL', j: 'Tú · Legal', d: 0, e: 'Por armar' },
  { id: 'bono', p: 'Reintegro del bono de productividad', j: 'Finanzas', d: 0, e: 'Tesorería propone mañana' },
  { id: 'historico', p: 'Historial del sistema viejo', j: 'Diego · Sistemas', d: 0, e: 'La licencia vence a fin de mes' },
  { id: 'cierre', p: 'Cierre de planilla de noviembre', j: 'Tú · Mili', d: 0, e: 'Miércoles' },
];

export const FUTURO = {
  inspector_bien_recibido: ['Recibiste al inspector con orden, sin esconder ni improvisar.', 'El inspector anotará que la empresa colaboró.'],
  expediente_ordenado: ['Tu expediente tiene índice, folios y cargo de entrega.', 'La comparecencia del lunes será más corta.'],
  expediente_flojo: ['El expediente tiene huecos.', 'El inspector pedirá más documentos.'],
  inspector_transparente: ['Le contaste al inspector el hallazgo y el acuerdo de regularización.', 'Lo tendrá en cuenta, pero exigirá ver el pago.'],
  inspector_minimo: ['Solo exhibiste lo que te pidieron, sin mencionar el hallazgo.', 'Si el inspector lo encuentra solo, verá una contradicción.'],
  documentos_rehechos: ['Entregaste reportes recalculados en Nómina360 como si fueran los de la época.', 'Son documentos que no reflejan lo que se pagó.'],
  historico_salvado: ['Pediste exportar tres años del sistema viejo antes de que venza la licencia.', 'Nadie perderá la prueba de lo que se pagó.'],
  historico_riesgo: ['El historial del sistema viejo sigue sin exportar.', 'La licencia vence a fin de mes.'],
  sin_represalias: ['Le aseguraste a Wálter que nadie lo castigará por la denuncia.', 'Se lo contará a sus compañeros.'],
};

export const CHATS = {
  equipo: { n: 'Compensaciones Andes Log', sub: 'Patricia, Mili y tú', c: '#2F6B3F' },
  patricia: { n: 'Patricia Gómez', sub: 'Jefa de Compensaciones', who: 'patricia-g' },
  diego: { n: 'Diego Arana', sub: 'Consultor · Nómina360', who: 'consultor' },
  legal: { n: 'Legal · Andes Logística', sub: 'Abogada Carmen Ñahui', c: '#4A5568' },
  teodoro: { n: 'Teodoro Quispe', sub: 'Secretario general del sindicato', c: '#975A16' },
};

export const WSP = [
  { chat: 'patricia', t: '08:04', de: 'Patricia', txt: 'Estoy atracada en la Gambetta, un tráiler volteado 😩 Recíbelo tú. Sé amable, no firmes nada que no entiendas y llama a Legal.' },
  { chat: 'legal', t: '08:20', de: 'Carmen', txt: 'Voy para allá, llego en 40 min. Mientras tanto: atiéndelo, toma nota de todo y no le niegues el acceso.' },
  { chat: 'teodoro', t: '11:00', de: 'Teodoro', txt: 'Señorita, ya sabemos que vino el inspector. Nosotros no queremos pelea, queremos lo justo.' },
  { chat: 'diego', t: '16:05', de: 'Diego', txt: 'Ok, exporto los tres años del viejo a PDF y a base de datos. Me toma dos noches, pero mejor ahora que después 🙏', si: 'historico_salvado' },
  { chat: 'equipo', t: '18:30', de: 'Patricia', txt: 'Gracias por sostener el día sola. Mañana, Tesorería a las 9. Y el miércoles, cierre.' },
];

export const CORREOS = [
  { t: '09:45', de: 'Inspector Raúl Cuba · SUNAFIL', para: 'Andes Logística S.A.', asunto: 'Requerimiento de información', html: '<p>En el marco de la orden de inspección sobre compensación por tiempo de servicios y gratificaciones, se requiere exhibir: planillas y boletas de pago de los últimos tres años de los trabajadores operarios; liquidaciones y constancias de depósito de CTS; política o documento que regula el bono de productividad; y relación de trabajadores cesados en el período. Comparecencia: lunes de la próxima semana, 9:00 a. m.</p>' },
];

export const QUIZ = [
  { q: 'Un inspector de SUNAFIL llega sin aviso. ¿Qué haces primero?', ops: ['Le pides que vuelva otro día', 'Verificas su credencial y la orden, lo atiendes y avisas a Legal y a tu jefatura', 'Llamas a tu abogado y no le dejas entrar hasta que llegue', 'Le das todo lo que tengas sin leer qué pide'], ok: 1, por: 'La inspección no se impide ni se demora. Se atiende con orden y se informa a quien corresponde.' },
  { q: 'Según la Ley 28806, el inspector puede…', ops: ['Solo mirar las instalaciones', 'Examinar planillas, boletas, registros y sistemas, y requerir su exhibición', 'Despedir a trabajadores', 'Cambiar sueldos'], ok: 1, por: 'El art. 5 de la Ley 28806 le da esas facultades.' },
  { q: '¿Se pueden entregar al inspector boletas recalculadas en el sistema nuevo como si fueran las de la época?', ops: ['Sí, porque ahora están bien', 'No: los documentos deben reflejar lo que se pagó; el error y su corrección se explican aparte', 'Sí, si las firma la jefa', 'Solo si el inspector no pregunta'], ok: 1, por: 'Presentar documentos que no reflejan lo pagado es mucho más grave que el error original.' },
  { q: '¿Quién hizo la denuncia que originó la inspección?', ops: ['Hay que averiguarlo', 'No importa para tu trabajo, y el inspector no está obligado a decirlo', 'El sindicato, siempre', 'Un competidor'], ok: 1, por: 'Lo que importa es atender lo que se fiscaliza. Buscar al denunciante abre la puerta a represalias.' },
  { q: 'La licencia del sistema viejo vence a fin de mes. ¿Qué se hace con su historial?', ops: ['Nada, ya está en Nómina360', 'Exportarlo completo antes de que venza, porque es la prueba de lo que se pagó', 'Imprimir solo el último mes', 'Borrarlo'], ok: 1, por: 'Las planillas y boletas antiguas son tu prueba ante cualquier inspección o reclamo.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:10', ch: 'presencial', who: 'inspector', titulo: 'El señor de la puerta 2', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Portería de la puerta 2', show: ['cumplimiento', 'confianza'],
    body: () => `<p>El inspector Raúl Cuba espera de pie, con un maletín gastado y la credencial de SUNAFIL colgada del cuello. Tiene unos cincuenta años, voz baja y una manera de mirar que no deja adivinar nada.</p><p>«Buenos días. Orden de inspección sobre CTS y gratificaciones. ¿Usted es del área de planillas?» <mark class="clave">Tienes dos preguntas antes de subir.</mark></p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces.',
    opts: [
      { id: 'orden', label: '¿Me permite ver la orden y su credencial?', info: 'Te muestra ambas sin problema. La orden indica la materia: CTS y gratificaciones de operarios. Anotas el número.' },
      { id: 'pide', label: '¿Qué documentos necesita y para cuándo?', info: '«Hoy recorro el almacén y converso con algunos trabajadores. Le dejo un requerimiento por escrito, con fecha de comparecencia.»' },
      { id: 'quien', label: '¿Quién hizo la denuncia?', info: 'El inspector te mira sin pestañear: «Eso no es materia de esta diligencia». La pregunta queda flotando, incómoda.' },
      { id: 'esperar', label: '¿Puede esperar a que llegue nuestra abogada?', info: '«Puede llegar cuando guste. La diligencia empieza ahora.» Tiene razón: la inspección no se suspende por eso.' },
    ],
    res: picks => {
      const q = picks.includes('orden') && picks.includes('pide') ? 'buena' : picks.includes('quien') ? 'riesgosa' : 'aceptable';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 0, confianza: picks.includes('quien') ? -3 : 1 }, rel: { inspector: picks.includes('quien') ? -1 : picks.includes('orden') ? 1 : 0 },
        flags: q === 'buena' ? ['inspector_bien_recibido'] : [], cartera: { sunafil: 'Orden verificada: CTS y gratificaciones de operarios' },
        out: picks.includes('quien') ? 'Subes con el inspector en silencio. Esa pregunta le dijo más de lo que querías.' : 'Lo acompañas a la sala de vidrio, le ofreces agua y avisas a Legal y a Patricia por WhatsApp.',
        pro: { ok: 'Verificas identidad y alcance, y entiendes qué pide.', risk: 'Preguntar quién denunció sugiere que buscas al responsable.', info: 'Anota todo: hora, nombre, número de orden y lo que se pide.' },
        kusi: [q === 'buena' ? 'animo' : 'preocupado', q === 'buena' ? 'Orden, calma y nota. ¡Bien!' : 'Esa pregunta sobraba…'],
      };
    },
    rules: [[LEY, 'El inspector puede examinar documentos y libros en el centro de trabajo y requerir su exhibición (Ley 28806, art. 5).']],
    mirada: {
      ve: 'La primera impresión de una inspección se juega en portería. Verificar la orden, entender qué se pide y avisar a quien corresponde es lo correcto. Ni hostilidad ni sumisión: colaboración ordenada.',
      visual: { tipo: 'flujo', titulo: 'Recibir una inspección', pasos: ['Verificar orden', 'Atender', 'Avisar a Legal', 'Tomar nota', 'Recibir requerimiento'], aqui: 0 },
    },
  },
  {
    id: 'f2', t: '10:00', ch: 'documento', who: null, titulo: 'El expediente', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Sala de vidrio, con Carmen de Legal', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Carmen Ñahui, la abogada de la empresa, llega con el pelo mojado de la garúa y una caja de archivadores vacíos. Es de Abancay, directa y metódica. «Armemos el expediente <mark class="clave">como si lo fuera a leer un juez</mark>.»</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada parte del expediente.', boton: 'Guardar el expediente',
    bloques: [
      { id: 'doc', t: 'Documentos', n: 3, ops: [
        { id: 'd1', t: 'Planillas y boletas de los operarios, tres años, tal como se pagaron.', ok: true },
        { id: 'd2', t: 'Liquidaciones y constancias de depósito de CTS.', ok: true },
        { id: 'd3', t: 'Documento que creó el bono de productividad en 2024 y relación de cesados.', ok: true },
        { id: 'd4', t: 'Correos internos sobre el sindicato.', ok: false, por: 'No es lo que se pidió y no tiene relación con la materia.' },
      ] },
      { id: 'forma', t: 'Forma', n: 2, ops: [
        { id: 'f1', t: 'Índice, folios numerados y cargo de recepción.', ok: true, por: 'Para probar qué entregaste y cuándo.' },
        { id: 'f2', t: 'Copia del expediente para la empresa, idéntica a la entregada.', ok: true },
        { id: 'f3', t: 'Entregar todo en una caja, sin orden, para que se canse.', ok: false, por: 'Desordenar a propósito es obstruir.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : -1 },
        flags: [q === 'buena' ? 'expediente_ordenado' : 'expediente_flojo'], cartera: { expediente: q === 'buena' ? 'Índice listo: 5 rubros, foliado' : 'Expediente desordenado' },
        out: q === 'buena' ? 'Carmen arma el índice en una hoja y lo pega en la tapa del primer archivador: «Así se entrega».' : 'Carmen saca dos cosas del expediente y agrega otra: «Esto no lo pidió; esto sí».',
        pro: { ok: 'Entregas lo pedido, ordenado y con prueba de entrega.', risk: 'Agregar lo que no se pidió o desordenar a propósito trae más problemas que soluciones.', info: 'Guarda siempre una copia idéntica de lo que entregas.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Expediente de juez!' : 'Lo pedido, ni más ni menos.'],
      };
    },
    mirada: {
      ve: 'Un expediente para SUNAFIL no es un archivo: es una prueba. Ordenarlo con índice y folios dice tanto como su contenido: muestra a una empresa que sabe lo que tiene y no esconde nada.',
      visual: { tipo: 'flujo', titulo: 'El expediente', pasos: ['Requerimiento', 'Índice', 'Documentos', 'Folios', 'Copia', 'Cargo'] },
      normas: [{ ley: 'Ley 28806, art. 5', dice: 'Los inspectores pueden examinar en el centro de trabajo la documentación y los libros de la empresa con relevancia sociolaboral, y requerir su exhibición.', practica: 'Planillas, boletas, constancias de CTS y sistemas informáticos pueden ser pedidos.' }],
    },
  },
  {
    id: 'f3', t: '11:40', ch: 'presencial', who: 'inspector', titulo: '¿Qué le cuentas?', banner: 'assets/foto2/tension.webp', lugar: 'Sala de vidrio', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>El inspector vuelve de recorrer el almacén. Conversó con cuatro operarios. Pregunta, sin cambiar el tono: «¿El bono de productividad se considera en la CTS?».</p><p>${F.has('reintegro_todos') ? 'El viernes la gerencia aprobó regularizar a las 412 personas.' : F.has('error_tapado') ? 'Tú sabes la respuesta desde el jueves. Y decidiste no reportar el pasado.' : 'Tú sabes la respuesta desde el jueves.'} Diego, por WhatsApp, sugiere: «Muéstrale los reportes de Nómina360, que ya calculan bien». <mark class="clave">Carmen te deja responder a ti.</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle la verdad: no se consideraba, lo detectaron la semana pasada, ya está corregido hacia adelante y hay una regularización en curso. Ofrecer el informe y el acuerdo.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 4, confianza: 3 }, rel: { inspector: 1 }, flags: ['inspector_transparente'], cartera: { sunafil: 'Hallazgo informado; regularización en curso' },
          out: 'El inspector anota en silencio. «Tomo conocimiento. En la comparecencia quiero ver el cálculo persona por persona y la constancia del pago.» Carmen asiente: es lo mejor que podía pasar.',
          pro: { ok: 'Eres coherente: lo que dices calza con lo que muestran los documentos.', risk: 'El inspector exigirá ver el pago hecho, no solo prometido.', info: 'Regularizar no borra la inspección, pero muestra una empresa que corrige.' },
          kusi: ['animo', 'La verdad, con plan. Eso se respeta.'] } },
      { id: 'b', label: 'Responder solo lo que pregunta: «El documento del bono y las liquidaciones están en el expediente». Sin contar el hallazgo.',
        res: { q: 'aceptable', fx: { etica: -1, cumplimiento: 1 }, flags: ['inspector_minimo'], cartera: { sunafil: 'Documentos exhibidos, sin comentarios' },
          out: 'El inspector asiente. Leerá las liquidaciones y verá «no computable» en cada una. En la comparecencia, la pregunta será otra: «¿Desde cuándo lo sabían?».',
          pro: { ok: 'No dices nada que no te pidan.', risk: 'Si sabías y no lo dijiste, la falta de transparencia pesa en contra.' },
          kusi: ['pensando', 'Lo va a encontrar igual…'] } },
      { id: 'c', label: 'Seguir el consejo de Diego: mostrar los reportes de Nómina360 con el bono ya incluido.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -6 }, rel: { inspector: -1 }, flags: ['documentos_rehechos'], cartera: { sunafil: 'Reportes recalculados entregados como si fueran de la época' },
          out: 'El inspector compara los reportes con las boletas firmadas que ya recogió de dos operarios. No coinciden. Te mira por primera vez con algo parecido a una expresión.',
          pro: { ok: 'Ninguno.', risk: 'Mostrar documentos que no reflejan lo que se pagó convierte un error de cálculo en un problema mucho más grave.' },
          kusi: ['indignado', 'Eso no se hace. Nunca.'] } },
    ],
    rules: [[BP, 'Ante una inspección: documentos reales, explicación coherente y, si hay error, el plan para corregirlo.']],
    mirada: {
      ve: 'Lo que más preocupa a un inspector son las contradicciones. Un error explicado, con fecha de detección y plan de pago, es un error. Un error escondido detrás de documentos rehechos es otra cosa.',
      visual: { tipo: 'balanza', a: { t: 'Callar o maquillar', items: ['Menos preguntas hoy', 'Contradicción mañana'] }, b: { t: 'Verdad con plan', items: ['Coherencia con los documentos', 'Empresa que corrige', 'Comparecencia con pagos que mostrar'] } },
    },
  },
  {
    id: 'f4', t: '13:30', ch: 'documento', who: null, titulo: 'La tarde que se parte en tres', banner: 'assets/esc/reloj.webp', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: () => `<p>El inspector se fue a las 12:50. Almuerzas un lomo saltado frío en tu escritorio. El cierre de planilla es pasado mañana y tienes la tarde para <mark class="clave">tres frentes</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres frentes de esta tarde.', boton: 'Ir por estos', resumen: 'Atendiste',
    cols: ['Frente', 'Lo que sabes'],
    rows: [
      { id: 'hist', cells: ['Pedir la exportación de tres años del sistema viejo', 'La licencia vence a fin de mes'] },
      { id: 'calc', cells: ['Avanzar el cálculo persona por persona del reintegro', 'El inspector lo quiere ver en la comparecencia'] },
      { id: 'he', cells: ['Revisar las horas extras del turno noche para el cierre', 'Yesenia mandó los formatos diarios'] },
      { id: 'ces', cells: ['Pedir a Mili datos de contacto de los 61 cesados', 'Para pagarles hay que ubicarlos'] },
      { id: 'quien', cells: ['Averiguar qué operarios conversaron con el inspector', 'Un supervisor ofrece los nombres'] },
      { id: 'rep', cells: ['Rehacer el diseño de las boletas de Nómina360', 'Diego quiere que se vean «más modernas»'] },
    ],
    score: { hist: 3, calc: 3, he: 2, ces: 2, quien: -4, rep: -1 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: picks.includes('hist') ? 4 : -2, calidad: q === 'buena' ? 3 : 0, etica: picks.includes('quien') ? -5 : 1 },
        flags: [picks.includes('hist') ? 'historico_salvado' : 'historico_riesgo'], cartera: { historico: picks.includes('hist') ? 'Exportación de 3 años pedida a Diego' : 'Sin exportar' },
        out: picks.includes('quien') ? 'El supervisor te dicta cuatro nombres. Carmen te los quita de la mano: «Esto no lo hacemos. Nadie aquí va a buscar a quien habló con el inspector».' : picks.includes('hist') ? 'Diego acepta exportar el historial completo. Si no lo pedías hoy, el 1 de diciembre la prueba de tres años de pagos habría quedado atrapada en una licencia vencida.' : 'Avanzas, pero el historial del sistema viejo sigue en riesgo.',
        pro: { ok: 'Proteges la prueba, avanzas lo que pide el inspector y no descuidas el cierre.', risk: 'Buscar a quienes hablaron con el inspector puede verse como represalia.', info: 'La exportación debe incluir boletas en PDF y la base de datos, no solo reportes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Historial salvado!' : '¿Y el sistema viejo?'],
      };
    },
    mirada: {
      ve: 'Una migración y una inspección al mismo tiempo crean un riesgo silencioso: que la prueba de lo pagado quede atrapada en el sistema que se apaga. Exportar el historial es aburrido y vital.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Riesgo si no se hace', cuadrantes: ['Ya', 'Hoy', 'Esta semana', 'No'], items: [['Exportar historial', .4, .95], ['Cálculo reintegro', .8, .8], ['Horas extras', .5, .7], ['Contacto cesados', .3, .6], ['Buscar a quien habló', .2, .02], ['Boletas «modernas»', .6, .1]] },
    },
  },
  {
    id: 'f5', t: '15:40', ch: 'whatsapp', who: 'consultor', titulo: 'Lo que el sistema viejo sabe', banner: 'assets/3d/scenes/oficina.webp', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>${F.has('historico_salvado') ? 'Le escribes a Diego para precisar qué necesitas exportar.' : 'Aunque no lo priorizaste, la idea te ronda: le escribes a Diego.'} Él está saturado con el cierre. <mark class="clave">Tu mensaje tiene que ser claro a la primera.</mark></p>`,
    type: 'compose', enviaA: 'diego', para: 'Para: Diego Arana · Consultor', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué necesitas', ops: [
        { id: 'q1', t: 'Diego, antes de que venza la licencia necesito exportar del sistema viejo tres años de planillas, boletas, liquidaciones y depósitos de CTS.', ok: true, por: 'Alcance concreto.' },
        { id: 'q2', t: 'Diego, ¿puedes sacar un backup de lo que se pueda?', ok: false, por: '«Lo que se pueda» puede no incluir lo que necesitas.' },
      ] },
      { id: 'formato', t: 'En qué formato', ops: [
        { id: 'f1', t: 'Boletas en PDF por trabajador y la base de datos completa, para poder consultar después.', ok: true, por: 'PDF para mostrar, base para calcular.' },
        { id: 'f2', t: 'Un Excel resumen por mes.', ok: false, por: 'Un resumen no sirve como prueba de cada pago.' },
      ] },
      { id: 'por', t: 'Por qué', ops: [
        { id: 'p1', t: 'Es la prueba de lo que se pagó para SUNAFIL y para el reintegro.', ok: true },
        { id: 'p2', t: 'Patricia lo pidió.', ok: null, por: 'Cierto quizás, pero no le explicas la urgencia.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'f1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, cumplimiento: q === 'buena' ? 3 : -1 }, rel: { consultor: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? ['historico_riesgo'] : ['historico_salvado'], cartera: { historico: q === 'buena' ? 'Exportación completa: PDF + base de datos' : q === 'aceptable' ? 'Exportación parcial' : 'Exportación sin definir' },
        out: q === 'buena' ? 'Diego responde: «Clarísimo. Lo corro dos noches y te lo dejo en el servidor con un índice».' : 'Diego exporta algo. No está claro si sirve como prueba.',
        pro: { ok: 'Alcance, formato y motivo en tres líneas.', risk: 'Una exportación mal definida se descubre incompleta cuando ya no hay sistema que consultar.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Claro a la primera.' : '¿Eso servirá como prueba?'],
      };
    },
    mirada: { ve: 'Al apagar un sistema de planillas se apaga también la memoria de la empresa. Exportar bien el historial —por trabajador, en formato que se pueda mostrar y consultar— es lo que permite defender cada pago años después.' },
  },
  {
    id: 'f6', t: '17:50', ch: 'presencial', who: null, titulo: '«¿Me van a botar?»', banner: 'assets/foto/supervisa.webp', lugar: 'Pasillo del almacén, cambio de turno', show: ['personas', 'etica', 'confianza'],
    body: () => `<p>Al bajar, te cruzas con Wálter Ccahuana. Tiene el chaleco en la mano y los ojos cansados. «Señorita, yo fui uno de los que habló con el inspector. Mi supervisor me miró feo. <mark class="clave">¿Me van a botar?</mark> Tengo a mi bebita de siete meses.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que nadie puede castigarlo por hablar con el inspector, que su reintegro está en cálculo y que, si alguien lo trata distinto, te avise a ti o a Legal.',
        res: { q: 'buena', fx: { personas: 5, etica: 3, confianza: 2 }, flags: ['sin_represalias'],
          out: 'Wálter respira. «Gracias. Mi esposa no dormía.» Esa noche, Carmen le escribe al supervisor: cualquier trato distinto a quienes hablaron con el inspector será investigado.',
          pro: { ok: 'Lo tranquilizas con la verdad y le das un canal si algo pasa.', info: 'Avísale a Legal lo del supervisor: prevenir es más fácil que reparar.' },
          kusi: ['feliz', 'Nadie pierde su trabajo por decir la verdad.'] } },
      { id: 'b', label: 'Decirle que no se preocupe y que no hable de eso con nadie más.',
        res: { q: 'riesgosa', fx: { personas: -2, etica: -3 },
          out: 'Wálter asiente, pero «no hable con nadie» le suena a amenaza. Se va más preocupado que antes.',
          pro: { ok: 'Quieres calmarlo.', risk: 'Pedir silencio a quien habló con un inspector puede leerse como presión.' },
          kusi: ['preocupado', 'Eso sonó a otra cosa…'] } },
    ],
    rules: [[BP, 'Nadie debe recibir un trato distinto por colaborar con una inspección.']],
    mirada: { ve: 'Una inspección también remueve miedos. Las personas que hablaron con el inspector temen represalias. Una respuesta clara de RR.HH., y un aviso a quien supervisa, protege a la persona y a la empresa.' },
  },
];
