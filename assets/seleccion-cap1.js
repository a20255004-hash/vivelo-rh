// Capítulo 1 · «Primer día» · Semana 1, lunes.
// Medidores: confianza, calidad, tiempo, cumplimiento, personas, etica.

export const CAP = {
  n: 1, titulo: 'Primer día', dia: 'Semana 1, lunes', foto: 'assets/d-lunes.webp',
  lugar: 'Distribuidora Pacífico Sur · Parque Industrial de Tacna',
  inicio: '07:30', fin: '21:30', cierreHora: '21:15',
  apertura: 'Distribuidora Pacífico Sur, Parque Industrial de Tacna. Rocío te espera en la oficina de RR.HH.', boton: 'Entrar a la oficina',
  lead: 'Sobreviviste al lunes de una analista de selección: siete procesos, un jefe apurado, un gerente con favores y un WhatsApp a deshora.',
  siguiente: { n: 2, titulo: 'El perfil', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'supervisor', p: 'Supervisor de almacén', j: 'Walter · Operaciones', d: 22, e: 'Perfil desactualizado' },
  { id: 'operarios', p: 'Operarios de almacén (4)', j: 'Walter · Operaciones', d: 9, e: '31 postulantes sin revisar' },
  { id: 'vendedores', p: 'Vendedores de campo (3)', j: 'Fernando · Comercial', d: 15, e: 'Terna enviada hace 11 días, sin respuesta' },
  { id: 'contable', p: 'Asistente contable', j: 'Gina · Contabilidad', d: 40, e: '¿En pausa? Nadie lo sabe' },
  { id: 'chofer', p: 'Chofer de reparto', j: 'Distribución', d: 5, e: 'Aviso publicado, 2 postulantes' },
  { id: 'practicante', p: 'Practicante de marketing', j: 'Comercial', d: 3, e: 'Recién pedido' },
  { id: 'despacho', p: 'Auxiliar de despacho', j: 'Walter · Operaciones', d: 60, e: 'Aceptó la oferta y no llegó' },
];

export const FUTURO = {
  promesa: ['Le dijiste a Walter que el viernes tendría supervisor.', 'Él lo anotó. Volverá en el capítulo 7.'],
  walter_rocio: ['Walter le escribió a Rocío preguntando si lees los correos.', 'Rocío lo tendrá presente en el capítulo 2.'],
  visita_almacen: ['El miércoles a las 8:00 vas al almacén con Walter.', 'Capítulo 2.'],
  favor_fernando: ['Fernando cree que Kevin pasa directo a la entrevista final.', 'Te lo recordará en el capítulo 2.'],
  kevin_proceso: ['Kevin entrará al filtro como cualquier postulante.', 'Fernando estará atento. Capítulo 2.'],
  fernando_tenso: ['Fernando se fue pensando que el proceso es «muy estricto».', 'Capítulo 2.'],
  clave_milagros: ['Milagros, que ya no trabaja aquí, todavía puede entrar al portal.', 'Capítulo 3.'],
  clave_rocio: ['Lo que publicaste hoy figura a nombre de Rocío.', 'Capítulo 3.'],
  cuenta_area: ['Mañana tendrás la cuenta del portal a nombre del área.', 'Capítulo 3.'],
  checklist_kelly: ['Kelly te pasó su lista de documentos de ingreso.', 'Te servirá en el capítulo 8.'],
  elmer_tarde: ['Elmer no sabe la dirección exacta: llegará tarde a su entrevista.', 'Capítulo 2.'],
  operarios_descartados: ['Dejaste fuera a dos postulantes que no contestaron.', 'Capítulo 4.'],
};

// Chats del celular. Los mensajes aparecen cuando el reloj pasa su hora (y según tus decisiones).
export const CHATS = {
  grupo: { n: 'RR.HH. Pacífico Sur', sub: 'Rocío, Kelly y tú', c: '#2F6B3F' },
  rocio: { n: 'Rocío Mamani', sub: 'Jefa de RR.HH.', who: 'rocio' },
  milagros: { n: 'Milagros Barrios', sub: 'Exanalista de Selección', c: '#B5838D' },
  fernando: { n: 'Fernando Salas', sub: 'Gerente Comercial', who: 'fernando' },
  yesenia: { n: 'Yesenia Apaza', sub: 'Postulante a operaria', c: '#7CC6EA' },
  elmer: { n: 'Elmer Choque', sub: 'Postulante a operario', c: '#F2A900' },
  jhon: { n: 'Jhon Quispe', sub: 'Postulante a operario', c: '#8A6D3B' },
};

export const CORREOS = [
  { t: '07:45', de: 'Rocío Mamani', para: 'Analista de Selección', asunto: 'Bienvenida a Pacífico Sur', html: '<p>¡Bienvenida! Hoy te paso los procesos de Selección. Cualquier duda, me escribes por aquí o por WhatsApp.</p><p>Tus accesos: correo listo; portal de empleo y carpeta compartida, en trámite con TI.</p><p>Rocío</p>' },
  { t: '11:50', de: 'Mesa de ayuda de TI', para: 'Analista de Selección', asunto: 'Ticket 2291 · Cuenta del portal de empleo', html: '<p>Recibimos tu solicitud. La cuenta del área estará lista mañana a las 12:00. Se dará de baja el usuario mbarrios.</p>', si: 'cuenta_area' },
  { t: '18:05', de: 'Rocío Mamani', para: 'Analista de Selección', asunto: 'Tu primer día', html: '<p>Gracias por hoy. Mañana revisamos juntas cómo va tu cartera. Descansa.</p>' },
];

export const WSP = [
  { chat: 'grupo', t: '07:40', de: 'Rocío', txt: 'Buen día. Hoy se incorpora la nueva analista de Selección 🙌' },
  { chat: 'grupo', t: '07:42', de: 'Kelly', txt: '¡Por fin refuerzo en Selección! 🎉' },
  { chat: 'milagros', t: '08:52', de: 'Milagros', txt: 'Hola! Usuario: mbarrios · clave: Tacna2024* 😅 suerte!!', si: 'clave_milagros' },
  { chat: 'milagros', t: '12:10', de: 'Milagros', txt: 'Hola, Rocío me contó que entraste a mi puesto. Cualquier duda del Excel me escribes 🙂', no: 'clave_milagros' },
  { chat: 'rocio', t: '10:31', de: 'Rocío', txt: 'Vi tu correo a Walter. Bien ahí 👍', si: 'visita_almacen' },
  { chat: 'rocio', t: '11:41', de: 'Rocío', txt: 'Te reenvié un correo de Walter. Respóndele antes de mediodía, porfa.', si: 'walter_rocio' },
  { chat: 'grupo', t: '13:50', de: 'Kelly', txt: 'Te paso mi lista: DNI, CUSPP o elección de sistema de pensiones, cuenta de sueldo, antecedentes, dirección. ✅', si: 'checklist_kelly' },
  { chat: 'yesenia', t: '16:20', de: 'Yesenia', txt: 'Sí me interesa señorita, ¿puede ser el miércoles? Hoy estoy en turno', si: 'wsp_operarios' },
  { chat: 'fernando', t: '18:30', de: 'Fernando', txt: 'Gracias colega 💪 Kevin ya está avisado', si: 'favor_fernando' },
  { chat: 'fernando', t: '18:30', de: 'Fernando', txt: 'Ok. Avísame cómo le va a Kevin', si: 'kevin_proceso' },
  { chat: 'elmer', t: '21:06', de: 'Elmer', txt: 'Buenas noches señorita, disculpe la hora 🙏' },
  { chat: 'elmer', t: '21:06', de: 'Elmer', txt: 'mañana a q hora era la entrevista? y q documentos llevo? gracias' },
];

export const QUIZ = [
  { q: '¿Qué es una terna?', ops: ['Los tres finalistas que se presentan al jefe', 'La lista completa de postulantes', 'Una entrevista grupal con tres evaluadores del área', 'El contrato de prueba'], ok: 0, por: 'La terna son los tres finalistas. El jefe que pidió la vacante elige entre ellos.' },
  { q: '¿Cuándo debe hacerse el alta en T-Registro?', ops: ['Al terminar el periodo de prueba', 'Dentro del día en que la persona empieza a trabajar', 'Cuando Planillas tenga tiempo', 'Hasta cinco días hábiles después de firmar el contrato'], ok: 1, por: 'El alta se registra dentro del día de ingreso. Por eso Kelly pide los datos con anticipación.' },
  { q: '¿Cuál de estos requisitos sí puede ir en un aviso?', ops: ['«Buena presencia»', '«Varón de 25 a 35 años»', '«Soltero de preferencia, con disponibilidad total»', '«3 años supervisando un almacén»'], ok: 3, por: 'La experiencia describe lo que el puesto exige. El sexo, la edad y el estado civil no, y la «buena presencia» es ambigua.' },
  { q: 'Un postulante no contesta tu llamada. ¿Qué haces?', ops: ['Lo descartas', 'Le escribes por WhatsApp con un horario y cómo confirmar', 'Lo llamas diez veces seguidas para que vea que es urgente', 'Esperas a que él te llame'], ok: 1, por: 'No contestar no es falta de interés. Un mensaje claro suele funcionar mejor que insistir.' },
  { q: 'En una empresa privada, el sobrino de un gerente postula. ¿Qué corresponde?', ops: ['Rechazarlo: es ilegal', 'Que pase el mismo filtro', 'Pasarlo directo a la final si el gerente lo autoriza por escrito', 'Pedir permiso a SUNAFIL'], ok: 1, por: 'En el sector privado no es ilegal contratar familiares, pero un referido entra al mismo filtro que todos.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 's1', t: '07:52', ch: 'presencial', who: 'rocio', titulo: 'Rocío te recibe', banner: 'assets/esc/mesa.webp', show: ['confianza', 'calidad', 'tiempo'],
    body: (n) => `<p>La oficina de RR.HH. está al fondo del almacén, detrás de las cajas de la última importación. Huele a café y a cartón.</p><p>«Qué bueno que llegaste${n ? ', ' + n : ''}. Te cuento rápido porque a las nueve tengo comité. Pregúntame lo que más necesites saber hoy.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. No hay respuestas buenas ni malas: decide qué información te sirve más hoy.',
    opts: [
      { id: 'urgente', label: '¿Qué proceso es el más urgente?', info: '«El supervisor de almacén, sin duda. Walter lleva tres semanas cubriendo el puesto él mismo y el inventario empieza el 28. Lo demás te lo dejó Milagros en un Excel… más o menos ordenado.»' },
      { id: 'como', label: '¿Cómo se trabaja aquí?', info: '«Publicamos en un portal pagado y en la bolsa del Ministerio de Trabajo; para operarios tenemos convenio con dos institutos. Una regla de la casa: a todo postulante entrevistado se le responde, aunque sea un no.»' },
      { id: 'eval', label: '¿Cómo sabré si lo estoy haciendo bien en este primer mes?', info: '«A fin de mes conversamos. Me fijo en tres cosas: que los jefes confíen en ti, que lo que contrates se quede y que no me traigas problemas legales.»' },
      { id: 'gente', label: '¿Con quién me tengo que llevar bien?', info: '«Con Walter, aunque al inicio te ladre. Con Kelly, de Planillas: sin ella nadie entra. Y con Fernando… con Fernando, paciencia.»' },
    ],
    res: picks => ({
      q: null,
      out: 'Rocío se va al comité. Te quedas con una laptop, la clave de tu correo y un post-it: «Excel de Milagros → carpeta compartida».',
      fx: { confianza: picks.includes('eval') ? 2 : 0, tiempo: -2 },
      rel: { rocio: picks.includes('eval') ? 1 : 0 },
      kusi: ['curioso', 'Comité, Excel heredado y un jefe apurado antes de las nueve. Esto es Selección.'],
    }),
    mirada: {
      ve: 'Las preguntas del primer día dicen mucho de ti. Quien pregunta cómo la van a evaluar y quiénes son las personas clave entiende algo que no sale en los manuales: en Selección, la mitad del trabajo es técnica y la otra mitad es saber con quién cuentas.',
      visual: { tipo: 'flujo', titulo: 'El proceso de selección en esta empresa', pasos: ['Requerimiento', 'Perfil', 'Aviso y búsqueda', 'Filtro', 'Evaluación', 'Terna', 'Oferta', 'Ingreso'] },
    },
  },
  {
    id: 's2', t: '08:40', ch: 'sistema', who: null, titulo: 'Tus accesos', banner: 'assets/esc/piensa.webp', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: () => `<p>Tu correo funciona. El portal de empleo te pide usuario y clave: la cuenta está a nombre de <mark class="clave">Milagros</mark>, la analista que se fue hace dos semanas.</p><p>El Excel de seguimiento está en su OneDrive personal. El enlace que te reenvió Rocío dice <mark class="clave">«Acceso denegado»</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedir a TI una cuenta del área y avanzar con lo que sí tienes.',
        res: { q: 'buena', fx: { tiempo: -6, cumplimiento: 6, calidad: 2 }, flags: ['cuenta_area'],
          out: 'TI responde que mañana a mediodía. Pierdes la mañana del portal, pero desde ahora la cuenta es del área y no de una persona. Rocío te consigue una copia del Excel por correo.',
          pro: { ok: 'Separas la urgencia de hoy de cómo debe funcionar el área: pides la solución de fondo y avanzas con lo que no depende del portal.', risk: 'Perder media mañana. Compénsalo con tareas que no necesitan el portal.', info: 'Pregunta quién más tiene hoy acceso a la cuenta y a los CV.' },
          kusi: ['animo', 'Más lento hoy, más ordenado siempre.'] } },
      { id: 'b', label: 'Escribirle a Milagros por WhatsApp, explicarle que es tu primer día y pedirle que te pase su clave solo por hoy, mientras TI te crea la tuya.',
        res: { q: 'riesgosa', fx: { tiempo: 4, cumplimiento: -8 }, flags: ['clave_milagros'], envia: ['milagros', 'Hola, Milagros 😊 Soy la nueva analista. ¿Me podrías pasar tu clave del portal solo por hoy? TI todavía no me crea la mía.'],
          out: 'Milagros responde en diez minutos con su clave y un «suerte!!». Funciona. Pero ahora una persona que ya no trabaja aquí sigue teniendo acceso a cientos de CV de postulantes.',
          pro: { ok: 'Resuelves el problema de hoy en diez minutos.', risk: 'Todo lo que hagas quedará a nombre de Milagros, y su acceso sigue abierto.', info: 'Si usaste su clave por urgencia, lo mínimo es pedir a TI que la cambien hoy mismo.' },
          kusi: ['preocupado', 'Funciona… pero esa puerta quedó abierta.'] } },
      { id: 'c', label: 'Usar la clave de Rocío, que te la ofrece.',
        res: { q: 'aceptable', fx: { tiempo: 3, cumplimiento: -3 }, rel: { rocio: 1 }, flags: ['clave_rocio'],
          out: 'Avanzas rápido. Todo lo que publiques hoy quedará registrado como si lo hubiera hecho Rocío.',
          pro: { ok: 'Tu jefa lo autoriza y el acceso queda dentro del área.', risk: 'Las claves son personales: si algo sale mal, no se sabrá quién lo hizo.', info: 'Úsala solo hoy y pide tu propia cuenta de inmediato.' },
          kusi: ['pensando', 'Rápido, pero con la firma de otra persona.'] } },
    ],
    rules: [[LEY, 'La empresa debe proteger los datos personales de los postulantes (Ley 29733).'], [POL, 'Lo habitual es que las cuentas de portales sean del área, no de una persona.'], [BP, 'No compartas claves personales ni pidas las de otros.']],
    mirada: {
      ve: 'El problema no es tu clave: es que los datos de cientos de postulantes dependen de una cuenta personal de alguien que ya se fue. Una profesional ve aquí un riesgo para la empresa y para esas personas, no solo un obstáculo para su mañana.',
      visual: { tipo: 'balanza', a: { t: 'Rapidez hoy', items: ['Entras en 10 minutos', 'Publicas sin esperar a TI'] }, b: { t: 'Control siempre', items: ['Sabes quién hizo qué', 'Ninguna exempleada con acceso', 'Los CV quedan protegidos'] } },
      normas: [{ ley: 'Ley 29733, de Protección de Datos Personales', dice: 'Quien guarda datos personales, en este caso la empresa con los CV, debe tomar medidas para evitar su pérdida, su mal uso o accesos no autorizados.', practica: 'Que una exempleada siga entrando al portal es un acceso que la empresa ya no controla.' }],
    },
  },
  {
    id: 's3', t: '09:10', ch: 'documento', who: null, titulo: 'El Excel de Milagros', banner: 'assets/esc/reloj.webp', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>Abres el Excel. Siete procesos, cada uno en una etapa distinta, con notas como «ver con Fernando» o «¿sigue?». Hoy, entre llamadas y reuniones, <mark class="clave">solo te alcanza para avanzar de verdad con tres</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres procesos en los que te vas a enfocar hoy.',
    score: { supervisor: 3, vendedores: 2, contable: 1, operarios: 1, despacho: 1, chofer: 0, practicante: -1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: picks.includes('vendedores') ? 3 : 0, confianza: picks.includes('supervisor') ? 2 : -3 },
        flags: picks.map(id => 'foco_' + id),
        out: picks.includes('supervisor') ? 'Pones el supervisor arriba de todo y armas tu día alrededor de él.' : 'Dejas el supervisor para otro día. Walter no lo sabe todavía.',
        pro: { ok: 'Los vendedores solo necesitan que alguien persiga a Fernando: cinco minutos que destraban un proceso de quince días.', risk: 'El practicante de marketing es lo más fácil y lo más tentador, pero hoy no mueve nada importante.', info: 'Pregunta a Gina si el asistente contable sigue vigente.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Buen ojo: lo urgente, lo importante y lo que se destraba rápido.' : 'Siete procesos y un día. Elegir también es trabajo.'],
      };
    },
    rules: [[BP, 'Prioriza con tres preguntas: ¿qué impacto tiene?, ¿qué plazo vence?, ¿cuánto esfuerzo lo destraba?']],
    mirada: {
      ve: 'Una analista con experiencia no ordena por antigüedad del proceso, sino por lo que cuesta no moverlo hoy. Y busca lo que se destraba con poco esfuerzo: un proceso parado por falta de respuesta de un jefe se mueve con un correo, mientras que uno sin perfil necesita horas.',
      visual: { tipo: 'matriz', x: 'Esfuerzo para moverlo hoy', y: 'Impacto en la empresa', cuadrantes: ['Hazlo hoy', 'Empieza hoy y planifica', 'Si te sobra tiempo', 'Para después'], items: [['Supervisor', .78, .92], ['Vendedores', .18, .72], ['Operarios', .62, .62], ['Asistente contable', .22, .42], ['Aux. de despacho', .48, .48], ['Chofer', .4, .3], ['Practicante', .28, .12]] },
    },
  },
  {
    id: 's4', t: '10:05', ch: 'correo', who: 'walter', titulo: '¿Y el supervisor?', banner: 'assets/esc/alarma.webp', show: ['confianza', 'calidad', 'etica'],
    mail: { from: 'Ing. Walter Quispe · Jefe de Operaciones', to: 'Analista de Selección', cc: 'Rocío Mamani' },
    body: () => `<p>Buenos días. Me dicen que hoy entra la nueva analista. Van TRES semanas desde que renunció Pacheco y sigo cubriendo el almacén yo mismo. El inventario empieza el 28.</p><p><b>Necesito saber hoy cuándo tengo al nuevo supervisor.</b> Si RR.HH. no puede, me consigo uno por mi cuenta.</p><p>W. Quispe</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responderle hoy con fecha para la terna y una visita al almacén el miércoles.',
        res: { q: 'buena', fx: { confianza: 6, calidad: 4, tiempo: -2 }, rel: { walter: 1 }, flags: ['visita_almacen'], responde: 'Ingeniero, buenos días. Hoy retomo el proceso. Le propongo enviarle la terna en la semana 3 y vernos el miércoles a las 8:00 en el almacén para afinar el perfil. ¿Le parece?',
          out: 'Walter contesta a los veinte minutos: «Miércoles 8 a. m. en el almacén. Sea puntual.» Seco, pero ya no le está escribiendo a Gerencia.',
          pro: { ok: 'Comprometes lo que controlas (la terna) y lo involucras (la visita).', risk: 'Fijar la fecha de la terna sin conocer todavía el proceso. Déjate margen.', info: 'Pregúntale qué significa «antes del inventario»: ¿el supervisor debe estar el 28 o basta con que llegue a mitad?' },
          kusi: ['animo', 'Un jefe molesto con una fecha clara es un jefe menos molesto.'] } },
      { id: 'b', label: 'Tranquilizarlo con algo concreto: «Ingeniero, quédese tranquilo: el viernes ya tiene a su supervisor trabajando en el almacén».',
        res: { q: 'riesgosa', fx: { confianza: 4, calidad: -4, etica: -2 }, rel: { walter: 1 }, flags: ['promesa'], responde: 'Ingeniero, quédese tranquilo: el viernes ya tiene a su supervisor trabajando en el almacén.',
          out: 'Walter responde: «OK. Lo anoto.» Hoy está tranquilo. Pero un supervisor el viernes significa perfil, aviso, entrevistas, oferta y documentos en cuatro días.',
          pro: { ok: 'Bajas la tensión de inmediato.', risk: 'Prometes un ingreso que depende de otros: candidatos, preavisos y aprobaciones.', info: 'Si ya lo prometiste, corrígelo pronto y por escrito.' },
          kusi: ['preocupado', 'Cuatro días para todo un proceso… uy.'] } },
      { id: 'c', label: 'Esperar a revisar el proceso y responderle después.',
        res: { q: 'aceptable', fx: { confianza: -6, tiempo: 2 }, rel: { walter: -1 }, flags: ['walter_rocio'],
          out: 'A las 11:40 Walter le escribe a Rocío: «¿La nueva analista lee los correos?». Rocío te lo reenvía sin comentarios.',
          pro: { ok: 'Querer responder con datos está bien.', risk: 'Un silencio de horas con un cliente interno molesto se lee como desinterés.', info: 'Un acuse corto bastaba: «Lo reviso y le escribo antes de las 12».' },
          kusi: ['sorpresa', 'Ese reenvío sin comentarios dice mucho.'] } },
    ],
    rules: [[BP, 'Compromete hitos que controlas, no resultados que dependen de otros.'], [POL, 'En esta empresa la terna se envía al jefe por correo, con copia a Rocío.']],
    mirada: {
      ve: 'Walter no está pidiendo un supervisor: está pidiendo que alguien se haga cargo. Lleva tres semanas haciendo dos trabajos. Lo que baja la tensión no es una promesa, es un plan que él pueda ver. Y hay un dato que un jefe casi nunca considera: aunque encuentres al candidato perfecto la próxima semana, puede que tenga que avisar a su empleador actual antes de irse.',
      visual: { tipo: 'linea', titulo: 'Un plan realista para el supervisor', hitos: [['Hoy', 'Retomas el proceso'], ['Miércoles', 'Perfil con Walter, en el almacén'], ['Viernes', 'Aviso publicado'], ['Semana 2', 'Filtro y entrevistas'], ['Semana 3', 'Terna y oferta'], ['Semana 4', 'Ingreso, si el preaviso lo permite']] },
      normas: [{ ley: 'D.S. 003-97-TR (Ley de Productividad y Competitividad Laboral), art. 18', dice: 'En el régimen general, quien renuncia debe avisar con 30 días de anticipación; el empleador puede exonerarlo de ese plazo.', practica: 'El mejor candidato podría necesitar hasta un mes para llegar. Prometer «el viernes» ignora ese plazo.' }],
    },
  },
  {
    id: 's5', t: '11:30', ch: 'documento', who: null, titulo: 'El perfil de 2023', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>En la carpeta compartida encuentras el perfil del puesto que se usó en 2023. Walter quiere que lo publiques <mark class="clave">«igualito, que funcionó»</mark>.</p>`,
    type: 'flag', prompt: 'Toca cada línea que no se puede o no se debe pedir. Si dudas de alguna, márcala también: luego verás por qué.',
    lines: [
      { id: 'cargo', t: 'Puesto: Supervisor de almacén' },
      { id: 'sexo', t: 'Sexo: masculino', bad: LEY, why: 'Pedir un sexo sin una razón objetiva del puesto es discriminatorio.' },
      { id: 'edad', t: 'Edad: entre 25 y 35 años', bad: LEY, why: 'La edad no mide la capacidad de supervisar un almacén.' },
      { id: 'civil', t: 'Estado civil: soltero, de preferencia', bad: LEY, why: 'El estado civil es un motivo de discriminación prohibido.' },
      { id: 'exp', t: 'Experiencia mínima de 3 años supervisando un almacén' },
      { id: 'presencia', t: 'Buena presencia', bad: BP, why: 'Es ambiguo y suele esconder sesgos por apariencia. Mejor describir lo que el puesto exige.' },
      { id: 'wms', t: 'Excel intermedio y manejo de un sistema de almacén (WMS)' },
      { id: 'turnos', t: 'Disponibilidad para turnos rotativos' },
      { id: 'montacargas', t: 'Licencia para operar montacargas', duda: 'No es ilegal, pero ¿el supervisor maneja el montacargas o solo supervisa? Si no lo usa, recorta candidatos sin razón. Pregúntaselo a Walter.' },
      { id: 'foto', t: 'Adjuntar foto tamaño carné', bad: BP, why: 'No sirve para evaluar y abre la puerta a sesgos.' },
    ],
    rules: [[LEY, 'Las ofertas de empleo no pueden tener requisitos discriminatorios por sexo, edad o estado civil, entre otros (Ley 26772).'], [BP, 'Describe lo que el puesto exige hacer, no cómo debe ser la persona.']],
    mirada: {
      ve: 'El perfil de 2023 «funcionó» porque nadie revisó a quién dejó fuera. Una profesional se pregunta cuántas supervisoras capaces ni siquiera postularon, y convierte cada requisito sobre la persona en un requisito sobre el trabajo.',
      visual: { tipo: 'cambio', titulo: 'De cómo es la persona a qué hace el puesto', pares: [['Sexo: masculino', 'Capacidad para dirigir un equipo de operarios'], ['Edad: 25 a 35 años', '3 años supervisando un almacén'], ['Buena presencia', 'Trato cordial y firme con transportistas'], ['Soltero de preferencia', 'Disponibilidad para turnos rotativos']] },
      normas: [{ ley: 'Ley 26772 (modificada por la Ley 27270)', dice: 'Las ofertas de empleo no pueden contener requisitos que anulen o alteren la igualdad de oportunidades o de trato, por motivos como sexo, edad o estado civil.', practica: 'Publicar ese aviso expone a la empresa a una inspección de trabajo y deja fuera a personas capaces.' }],
    },
  },
  {
    id: 's6', t: '13:15', ch: 'presencial', who: 'kelly', titulo: 'Almuerzo con Kelly', banner: 'assets/esc/planilla.webp', show: ['calidad', 'tiempo', 'personas'],
    body: () => `<p>En el comedor, una chica de Planillas se sienta a tu lado con su táper.</p><p>«¿Tú eres quien entró a Selección? Soy Kelly. Un favorcito desde ya: cuando tengas un ingreso, pásame los datos con <mark class="clave">48 horas de anticipación</mark>. El alta en T-Registro se hace el mismo día que entra la persona, y si me avisan esa misma mañana, la que corre soy yo.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Proponerle armar una lista compartida de lo que necesita en cada ingreso.',
        res: { q: 'buena', fx: { calidad: 2, tiempo: -1 }, rel: { kelly: 1 }, flags: ['checklist_kelly'], out: 'Kelly se ríe: «Me caíste bien». Al rato te pasa por WhatsApp su lista de documentos de ingreso.', kusi: ['feliz', 'Una aliada en Planillas vale oro.'] } },
      { id: 'b', label: 'Decirle que sí.',
        res: { q: null, fx: {}, out: 'Kelly asiente y sigue con su almuerzo.', kusi: ['neutral', 'Anotado… en tu cabeza, al menos.'] } },
    ],
    rules: [[LEY, 'El alta en T-Registro se hace dentro del día en que la persona empieza a trabajar (SUNAT).'], [POL, 'Las 48 horas de anticipación son un acuerdo interno con Planillas, no una ley.']],
    mirada: {
      ve: 'Kelly te acaba de mostrar el lado que Selección suele olvidar: un proceso no termina en la oferta. Si los datos llegan tarde a Planillas, quien incumple un plazo legal es la empresa, aunque el error haya sido tuyo.',
      visual: { tipo: 'linea', titulo: 'Lo que pasa alrededor de un ingreso', hitos: [['2 días antes', 'Datos completos a Planillas'], ['1 día antes', 'Contrato listo para firmar'], ['Día 1', 'Alta en T-Registro e inducción'], ['Meses 1 a 3', 'Periodo de prueba']] },
      normas: [{ ley: 'D.S. 018-2007-TR y orientación de SUNAT sobre T-Registro', dice: 'El alta del trabajador se registra dentro del día en que empieza a prestar servicios, sin importar su modalidad de contrato.', practica: 'Un ingreso avisado tarde pone a Planillas, y a la empresa, fuera de plazo.' }],
    },
  },
  {
    id: 's7', t: '15:00', ch: 'llamada', who: null, titulo: 'Llamadas de filtro', banner: 'assets/esc/dudas.webp', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>Retomas el proceso de operarios. Revisaste los 31 CV y te quedaste con cinco personas para una llamada de filtro: confirmar interés, disponibilidad y cuándo pueden venir.</p>`,
    type: 'calls',
    calls: [['Jhon Quispe', 'No contesta'], ['Ruth Condori', 'Contesta: «Ya conseguí trabajo, gracias igual»', 'Ah, ya conseguí trabajo, señorita. Gracias igual.'], ['Elmer Choque', 'Contesta, le interesa. Entrevista mañana a las 9:00', 'Sí, sí me interesa. Mañana a las nueve puedo, señorita.'], ['Brayan Mamani', 'El número no existe'], ['Yesenia Apaza', 'No contesta']],
    prompt: 'Jhon y Yesenia no contestaron. ¿Qué haces con ellos?',
    choices: [
      { id: 'a', label: 'Escribirles por WhatsApp.',
        res: { q: 'buena', fx: { personas: 4, tiempo: -2, calidad: 2 }, flags: ['wsp_operarios'], cartera: { operarios: '1 entrevista mañana · 2 por confirmar' }, envia: [['yesenia', 'Hola, Yesenia. Te escribe la analista de Selección de Distribuidora Pacífico Sur. Te llamé por tu postulación a operaria de almacén. ¿Podrías venir a una entrevista esta semana? Respóndeme por aquí, por favor.'], ['jhon', 'Hola, Jhon. Te escribe la analista de Selección de Distribuidora Pacífico Sur. Te llamé por tu postulación a operario de almacén. ¿Podrías venir a una entrevista esta semana? Respóndeme por aquí, por favor.']],
          out: 'Les escribes con quién eres, la empresa, el puesto, un horario y cómo confirmar. A las 16:20 Yesenia responde. Jhon deja el mensaje en visto.',
          pro: { ok: 'Un mensaje claro suele funcionar mejor que insistir con llamadas.', info: 'Guarda ese mensaje como plantilla: lo vas a usar cientos de veces.' },
          kusi: ['feliz', 'Visto también es una respuesta… pero Yesenia sí vino.'] } },
      { id: 'b', label: 'Volver a llamarlos mañana.',
        res: { q: 'aceptable', fx: { personas: -1, tiempo: 1 }, cartera: { operarios: '1 entrevista mañana · 2 por llamar' },
          out: 'Lo anotas para mañana. Una tarea más en una semana que recién empieza.',
          pro: { ok: 'No los descartas.', risk: 'Si tampoco contestan mañana, perdiste un día.', info: 'Combina canales: llamada y luego un mensaje.' },
          kusi: ['pensando', 'Mañana tendrás también lo de mañana.'] } },
      { id: 'c', label: 'Descartarlos y pasar al siguiente: si no contestan en horario de oficina, probablemente el puesto no les interesa tanto.',
        res: { q: 'riesgosa', fx: { personas: -5, calidad: -3, tiempo: 2 }, flags: ['operarios_descartados'], cartera: { operarios: '1 entrevista mañana' },
          out: 'Tu lista se reduce a una persona. Walter necesita cuatro operarios.',
          pro: { ok: 'Ahorras tiempo hoy.', risk: 'Descartar por no contestar deja fuera a buenos candidatos y te obliga a empezar de nuevo.' },
          kusi: ['preocupado', 'Cuatro vacantes y una persona en la lista…'] } },
    ],
    rules: [[BP, 'Usa varios canales antes de descartar a alguien.'], [LEY, 'Usa el número del postulante solo para su proceso de selección (Ley 29733).']],
    mirada: {
      ve: 'Que alguien no conteste no dice nada de su interés. Muchas personas que buscan un puesto operativo están trabajando en otro turno, no tienen saldo o no contestan números desconocidos. Una profesional mide su embudo y sabe que en cada etapa se pierde gente: por eso no puede darse el lujo de descartar a quien no contestó.',
      visual: { tipo: 'embudo', titulo: 'Tu embudo de hoy', niveles: [['Postulaciones', 31], ['Preseleccionados', 5], ['Contestaron', 2], ['Entrevista agendada', 1]] },
      normas: [{ ley: 'Ley 29733, de Protección de Datos Personales', dice: 'Los datos personales solo pueden usarse para la finalidad para la que se entregaron.', practica: 'El teléfono del CV sirve para su proceso de selección; no para otras ofertas ni para compartirlo.' }],
    },
  },
  {
    id: 's8', t: '17:40', ch: 'presencial', who: 'fernando', titulo: 'Un «favorcito»', banner: 'assets/esc/decide.webp', show: ['etica', 'confianza', 'personas'],
    body: () => `<p>Estás por cerrar la laptop cuando entra Fernando Salas, Gerente Comercial, sin tocar la puerta.</p><p>«¡Qué gusto conocerte! Mira, te dejo el CV de Kevin, mi sobrino. Es un crack vendiendo. <mark class="clave">Pásalo directo a la entrevista final</mark> de vendedores, que yo ya lo conozco. Tú dale nomás.»</p><p>Deja el CV impreso sobre tu teclado.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Recibir el CV y decirle que Kevin pasará el mismo filtro que todos.',
        res: { q: 'buena', fx: { etica: 6, confianza: 2 }, flags: ['kevin_proceso'],
          out: 'Fernando sonríe a medias: «Ya, ya, tú dale». No se fue molesto, pero tampoco convencido.',
          pro: { ok: 'Recibes al referido sin cerrarle la puerta y proteges el proceso.', risk: 'Fernando puede insistir hablando directo con Rocío. Cuéntale tú antes.', info: 'Pregunta a Rocío si la empresa tiene una política de referidos o de familiares.' },
          kusi: ['animo', 'Firme y amable a la vez. No es fácil.'] } },
      { id: 'b', label: 'Decirle «ok, lo veo» y quedarte con el CV, para no empezar con mal pie con un gerente el primer día.',
        res: { q: 'riesgosa', fx: { etica: -6, confianza: 2 }, rel: { fernando: 1 }, flags: ['favor_fernando'],
          out: 'Fernando te da una palmada en el hombro: «Sabía que nos íbamos a entender». Mañana preguntará cuándo es la entrevista final de Kevin.',
          pro: { ok: 'Evitas un conflicto el primer día.', risk: 'Para Fernando, «lo veo» significa «sí».' },
          kusi: ['sorpresa', 'Ese «lo veo» acaba de convertirse en una promesa.'] } },
      { id: 'c', label: 'Decirle que no se puede.',
        res: { q: 'aceptable', fx: { etica: 4, confianza: -3 }, rel: { fernando: -1 }, flags: ['fernando_tenso'],
          out: '«Uy, qué estricto el proceso», dice, y se va. Tienes razón en el fondo; la forma te va a costar.',
          pro: { ok: 'Proteges el proceso.', risk: 'Un «no» sin explicación ni alternativa convierte a un gerente en adversario el primer día.', info: 'La alternativa estaba ahí: recibir el CV con las mismas reglas que los demás.' },
          kusi: ['pensando', 'El qué está bien. El cómo, mejorable.'] } },
    ],
    rules: [[LEY, 'En el sector público la ley prohíbe el nepotismo (Ley 26771). En una empresa privada como esta, depende de la política interna.'], [POL, 'Esta empresa no tiene una política escrita de referidos ni de familiares.'], [BP, 'Un referido entra al mismo filtro y con los mismos criterios que los demás.']],
    mirada: {
      ve: 'El riesgo no es Kevin, que puede ser un buen vendedor. El riesgo es que el proceso tenga dos puertas: una para todos y otra para los conocidos. Si el equipo o los demás candidatos lo notan, pierdes algo que cuesta mucho recuperar: tu credibilidad.',
      visual: { tipo: 'balanza', a: { t: 'Si lo pasas directo', items: ['Fernando contento hoy', 'Kevin quizás es bueno'] }, b: { t: 'Si pasa el filtro', items: ['Justo con los demás', 'Proceso defendible', 'Tu credibilidad intacta'] } },
      normas: [{ ley: 'Ley 26771 (sector público)', dice: 'En el Estado, los funcionarios no pueden contratar ni influir en la contratación de parientes hasta el cuarto grado de consanguinidad, el segundo de afinidad o por matrimonio.', practica: 'No aplica a una empresa privada. Por eso conviene una política interna de referidos: ordena estos pedidos sin depender de tu valentía.' }],
    },
  },
  {
    id: 's9', t: '21:06', ch: 'whatsapp', who: null, titulo: 'Elmer Choque', banner: 'assets/esc/pendulo.webp', show: ['personas', 'tiempo', 'confianza'],
    body: () => `<p>Tu celular vibra mientras cenas. Es Elmer Choque, el postulante a operario que agendaste para mañana a las 9:00.</p>`,
    chat: ['Buenas noches señorita, disculpe la hora 🙏', 'mañana a q hora era la entrevista? y q documentos llevo? gracias'],
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder ahora, breve.',
        res: { q: 'buena', fx: { personas: 5, tiempo: -2 }, envia: ['elmer', 'Hola, Elmer. Tu entrevista es mañana martes a las 9:00 a. m. en el Parque Industrial de Tacna, portón azul de Distribuidora Pacífico Sur. Pregunta por RR.HH. y trae tu DNI. ¡Éxitos!'], out: 'Le escribes hora, dirección exacta, a quién preguntar y que lleve su DNI. Elmer responde con un pulgar. Mañana llegará a tiempo.',
          pro: { ok: 'La entrevista es mañana temprano: la información le hace falta ahora.', risk: 'Si respondes siempre a esta hora, lo volverás costumbre.' },
          kusi: ['feliz', 'Un pulgar a las 21:10. Misión cumplida.'] } },
      { id: 'b', label: 'Responder mañana a las 8:00, al entrar a trabajar, porque tu horario terminó y los mensajes laborales se contestan en horario laboral.',
        res: { q: 'aceptable', fx: { personas: -2, tiempo: 2 }, flags: ['elmer_tarde'], out: 'Elmer recibe la dirección a las 8:00. Llegará tarde buscando la entrada del parque industrial.',
          pro: { ok: 'Cuidas tu horario.', risk: 'A una hora de la entrevista ya no le da tiempo de organizarse.', info: 'Un mensaje programado era un buen punto medio.' },
          kusi: ['pensando', 'Tu descanso importa. Su entrevista también.'] } },
      { id: 'c', label: 'Programar un mensaje para las 7:00.',
        res: { q: 'buena', fx: { personas: 3, tiempo: -1 }, envia: ['elmer', '(Programado para las 7:00) Hola, Elmer. Tu entrevista es hoy a las 9:00 a. m. en el Parque Industrial de Tacna, portón azul. Pregunta por RR.HH. y trae tu DNI.'], out: 'A las 7:00 Elmer recibe todos los datos. Le da tiempo, justo.',
          pro: { ok: 'Cuidas tu descanso y el candidato recibe la información a tiempo.', risk: 'Si algo cambia en la noche, no se entera.' },
          kusi: ['animo', 'Buen punto medio.'] } },
    ],
    rules: [[BP, 'Al agendar, envía de una vez hora, dirección, a quién preguntar y documentos.'], [POL, 'Muchas empresas no esperan que respondas fuera de tu horario. Tu descanso también cuenta.']],
    mirada: {
      ve: 'La pregunta de Elmer revela un error de las 15:00: le diste la cita por teléfono, pero no se la confirmaste por escrito. La mejor respuesta de las 21:06 es la que evita que vuelva a pasar.',
      visual: { tipo: 'mensaje', titulo: 'Plantilla de confirmación que una profesional enviaría al agendar', txt: 'Hola, Elmer. Soy de Selección de Distribuidora Pacífico Sur. Te confirmo tu entrevista: mañana martes a las 9:00 a. m., Parque Industrial de Tacna, portón azul. Pregunta por RR.HH. y trae tu DNI. ¿Me confirmas, por favor?' },
    },
  },
];
