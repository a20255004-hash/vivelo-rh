// Capítulo 3 · «Salir a buscar» · Semana 1, viernes.
// Recibe las decisiones de los capítulos 1 y 2 a través de F.has(flag).
//
// Normas citadas y fuentes consultadas:
// - Ley 26772 (modificada por la Ley 27270) y su reglamento, D.S. 002-98-TR: ofertas de empleo sin requisitos discriminatorios
//   por raza, sexo, religión, opinión, origen social, condición económica, estado civil, edad o de cualquier otra índole.
//   https://faolex.fao.org/docs/pdf/per201903.pdf
// - Ley 29733, de Protección de Datos Personales: consentimiento (art. 5) y finalidad (art. 6). Nuevo reglamento: D.S. 016-2024-JUS.
//   https://www.minsa.gob.pe/Recursos/OGTI/SINADEF/Ley-29733.pdf
// - Empleos Perú, bolsa de trabajo gratuita del Ministerio de Trabajo y Promoción del Empleo: https://www.empleosperu.gob.pe
//   (descrita en https://gestion.pe/economia/management-empleo/link-de-la-bolsa-de-empleo-del-ministerio-de-trabajo-para-buscar-oportunidades-laborales-peru-nnda-nnlt-noticia/)

export const CAP = {
  n: 3, titulo: 'Salir a buscar', dia: 'Semana 1, viernes', foto: 'assets/foto/oficina-abierta.webp',
  lugar: 'Oficina de RR.HH. · Distribuidora Pacífico Sur',
  inicio: '07:30', fin: '19:40', cierreHora: '19:20',
  apertura: 'Viernes en Tacna: sol fuerte, viento frío y un aviso que todavía no existe.', boton: 'Abrir la laptop',
  kusi: 'Hoy salimos a buscar. Ojo: buscar no es publicar en todas partes. ¡Dale!',
  lead: 'Publicaste un aviso que dice lo que el puesto exige, repartiste un presupuesto corto y abriste la puerta a la gente de adentro. Ahora el mercado responde.',
  reflexion: 'Si mañana postularas tú a este puesto, ¿por qué canal te habrías enterado?',
  siguiente: { n: 4, titulo: 'El filtro', dia: 'Semana 2, martes' },
};

const BASE = [
  { id: 'supervisor', p: 'Supervisor de almacén', j: 'Walter · Operaciones', d: 26, e: 'Hoy: aviso y canales' },
  { id: 'operarios', p: 'Operarios de almacén (4)', j: 'Walter · Operaciones', d: 13, e: '2 entrevistas hechas, Walter no da su opinión' },
  { id: 'vendedores', p: 'Vendedores de campo (3)', j: 'Fernando · Comercial', d: 19, e: 'Esperando criterios de Fernando' },
  { id: 'contable', p: 'Asistente contable', j: 'Gina · Contabilidad', d: 44, e: '¿En pausa? Nadie lo sabe' },
  { id: 'chofer', p: 'Chofer de reparto', j: 'Distribución', d: 9, e: 'Aviso publicado, 6 postulantes' },
  { id: 'practicante', p: 'Practicante de marketing', j: 'Comercial', d: 7, e: 'Recién pedido' },
  { id: 'despacho', p: 'Auxiliar de despacho', j: 'Walter · Operaciones', d: 64, e: 'Aceptó la oferta y no llegó' },
];
export const CARTERA = (F, prev) => BASE.map(c => {
  const antes = prev?.cartera?.find(x => x.id === c.id);
  return antes && c.id !== 'supervisor' && antes.e !== c.e ? { ...c, e: antes.e } : c;
});

export const FUTURO = {
  fb_corregido: ['Hiciste bajar la publicación de Facebook con requisitos ilegales.', 'Jhonatan, el asistente de Walter, no lo olvidará. Capítulo 4.'],
  fb_sesgo: ['La publicación de Facebook siguió circulando con requisitos que no se pueden pedir.', 'Llegarán CV filtrados por ella. Capítulo 4.'],
  base_consentimiento: ['Escribiste a postulantes antiguos para pedirles permiso antes de considerarlos.', 'Algunos responderán en el capítulo 4.'],
  base_sin_permiso: ['Llamaste a postulantes de 2022 sin preguntarles si querían seguir en tu base.', 'Uno de ellos reclamará. Capítulo 4.'],
  encargo_julio: ['Don Julio queda como encargado del turno mientras dure el proceso.', 'Walter lo verá trabajar. Capítulo 6.'],
  terna_apurada: ['Le prometiste a Walter la terna en una semana, sin verificar referencias.', 'Esa prisa pesará en el capítulo 6.'],
  mentira_walter: ['Le dijiste a Walter que ya había candidatos avanzados. No los había.', 'Se dará cuenta en el capítulo 4.'],
  promesa_corregida: ['Corregiste a tiempo la promesa del lunes.', 'Walter confía un poco más en tus fechas. Capítulo 7.'],
  referido_walter: ['Walter te pasó el CV de un supervisor que le recomendaron.', 'Entra al filtro como todos. Capítulo 4.'],
  sobre_presupuesto: ['Gastaste más de lo que tenías para el supervisor.', 'Rocío tendrá que explicarlo en comité. Capítulo 4.'],
  conv_interna: ['Abriste una convocatoria interna antes del aviso externo.', 'Llegarán postulaciones de adentro. Capítulo 4.'],
  julio_postula: ['Don Julio dejó su nombre en la convocatoria interna.', 'Tendrás que evaluarlo en el capítulo 4.'],
  aviso_claro: ['Tu aviso describe el trabajo y cuenta para qué usarás los datos.', 'Llegarán CV más afines. Capítulo 4.'],
  aviso_confuso: ['Tu aviso tiene frases que no ayudan a elegir.', 'Lo notarás en el filtro del capítulo 4.'],
  solo_tacna: ['Tu aviso pide residir en Tacna.', 'Alguien de otra región casi no postula. Capítulo 5.'],
  gerencia_informada: ['El gerente general recibió un estado claro de tus siete procesos.', 'Lo comentará en el comité del capítulo 4.'],
  gerencia_optimista: ['Le dijiste a gerencia que todo va según lo previsto.', 'Gina y Fernando podrían contradecirte. Capítulo 4.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Pacífico Sur', sub: 'Rocío, Kelly y tú', c: '#2F6B3F' },
  kelly: { n: 'Kelly Ramos', sub: 'Planillas', who: 'kelly' },
  rocio: { n: 'Rocío Mamani', sub: 'Jefa de RR.HH.', who: 'rocio' },
  walter: { n: 'Walter Quispe', sub: 'Jefe de Operaciones', who: 'walter' },
  jhonatan: { n: 'Jhonatan Mendoza', sub: 'Asistente de Operaciones', c: '#C2703D' },
  todos: { n: 'Pacífico Sur · Comunicados', sub: '176 participantes', c: '#0F5F8C' },
  fernando: { n: 'Fernando Salas', sub: 'Gerente Comercial', who: 'fernando' },
};

export const CORREOS = [
  { t: '09:05', de: 'Mesa de ayuda de TI', para: 'Analista de Selección', cc: 'Rocío Mamani', asunto: 'Alerta · Usuario mbarrios del portal de empleo', html: '<p>El usuario mbarrios inició sesión el jueves a las 23:12 desde un equipo no registrado y descargó 41 CV. Bloqueamos la cuenta esta mañana.</p><p>Por favor, confirmen si alguien del área usó ese acceso.</p>', si: 'clave_milagros' },
  { t: '09:05', de: 'Mesa de ayuda de TI', para: 'Analista de Selección', asunto: 'Ticket 2291 · Cerrado', html: '<p>La cuenta seleccion@pacificosur.pe del portal de empleo está activa. El usuario mbarrios fue dado de baja.</p>', si: 'cuenta_area' },
];

export const WSP = [
  { chat: 'kelly', t: '07:38', de: 'Kelly', txt: '¿Esto es de nosotros? 😳 Lo pasaron en el grupo «Chamba Tacna»' },
  { chat: 'kelly', t: '07:38', de: 'Kelly', txt: '📷 Captura: «URGENTE se necesita SUPERVISOR DE ALMACÉN…»' },
  { chat: 'grupo', t: '08:02', de: 'Rocío', txt: 'Buen día. Hoy sale el aviso del supervisor 💪 A las 8:30 me cuentas cómo vas.' },
  { chat: 'rocio', t: '08:05', de: 'Rocío', txt: 'Lo del perfil ya está corregido con Walter. Gracias por avisarme a tiempo 🙏', si: 'correccion_rocio' },
  { chat: 'walter', t: '10:12', de: 'Walter', txt: 'HOY ES VIERNES.', si: 'promesa' },
  { chat: 'walter', t: '10:12', de: 'Walter', txt: '¿Puede hablar? Es sobre el inventario.', no: 'promesa' },
  { chat: 'walter', t: '10:48', de: 'Walter', txt: 'Le paso el CV del supervisor que me recomendaron. Revíselo.' },
  { chat: 'jhonatan', t: '11:05', de: 'Jhonatan', txt: 'Ya borré la publicación. El ingeniero me dijo que lo hiciera rápido nomás, no sabía 😕', si: 'fb_corregido' },
  { chat: 'grupo', t: '13:05', de: 'Kelly', txt: 'Hoy toca picante de guatita en el comedor. Bajen antes que se acabe 🍲' },
  { chat: 'todos', t: '14:40', de: 'Rocío', txt: '📢 Convocatoria interna: Supervisor/a de almacén. Requisitos y bases en el mural del comedor. Postulaciones hasta el miércoles en RR.HH.', si: 'conv_interna' },
  { chat: 'todos', t: '14:52', de: 'Don Julio', txt: '👍', si: 'conv_interna' },
  { chat: 'fernando', t: '17:30', de: 'Fernando', txt: 'Colega, ¿y la terna nueva? Dijiste esta semana 😅', si: 'terna_nueva' },
  { chat: 'fernando', t: '17:30', de: 'Fernando', txt: 'Te mandé lo que les faltó a los tres. Kevin igual va, ah 😄', si: 'fernando_criterios', no: 'terna_nueva' },
  { chat: 'grupo', t: '19:12', de: 'Kelly', txt: 'Ya me voy, la combi a la Bolognesi se llena a esta hora 🚌 ¡Buen finde!' },
];

export const QUIZ = [
  { q: '¿Cuál es la forma más barata y a menudo más efectiva de encontrar un supervisor de almacén?', ops: ['Un spot en la radio', 'La convocatoria interna y los referidos del equipo', 'Una consultora de headhunting', 'Publicar en todos los grupos de Facebook'], ok: 1, por: 'Quien ya trabaja en la empresa conoce el puesto, y el equipo suele conocer a buenos supervisores del rubro.' },
  { q: 'En la base del portal hay CV de procesos de 2022. ¿Qué es lo más prudente antes de usarlos para la vacante de hoy?', ops: ['Llamarlos directamente: ya postularon una vez', 'Preguntarles si quieren ser considerados para este nuevo proceso', 'Borrar todos los CV sin revisarlos', 'Pasárselos a Walter para que elija'], ok: 1, por: 'Los datos se entregaron para un proceso concreto. Pedir su conformidad para uno nuevo respeta la finalidad y suele generar buena impresión.' },
  { q: '¿Qué frase sí debería ir en el aviso?', ops: ['«Enviar CV con foto al WhatsApp de Jhonatan»', '«Varones de preferencia»', '«Usaremos tus datos solo para este proceso de selección»', '«Gozar de buena salud»'], ok: 2, por: 'Contar para qué usarás los datos genera confianza y cumple el deber de informar al postulante.' },
  { q: 'El jefe pide «alguien ya» y el proceso tomará semanas. ¿Qué alternativa real puedes ofrecer?', ops: ['Prometer el ingreso en tres días', 'Un encargo temporal a alguien del equipo mientras dura el proceso', 'Que el jefe contrate por su cuenta', 'Saltarte la verificación de referencias'], ok: 1, por: 'Un encargo temporal cubre la urgencia sin sacrificar la calidad de la selección.' },
  { q: 'El gerente general pide el estado de tus procesos. ¿Qué le envías?', ops: ['«Todo va bien»', 'Una tabla breve: proceso, etapa, fecha estimada y riesgo', 'Solo el proceso más urgente', 'El Excel completo de Milagros'], ok: 1, por: 'Gerencia necesita ver en un minuto dónde está cada proceso y qué podría atrasarse.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '07:40', ch: 'whatsapp', who: 'kelly', titulo: 'Un aviso que nadie pidió', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>Todavía no te sacas la casaca cuando Kelly te manda una captura. Alguien publicó anoche, en el grupo de Facebook «Chamba Tacna», un aviso de supervisor de almacén con el nombre de la empresa.</p><p>Lo firmó Jhonatan Mendoza, el asistente de Walter. ${F.has('walter_choque') ? 'Walter te advirtió que «se conseguía uno por su cuenta».' : 'Seguro quiso ayudar.'} Ya tiene <mark class="clave">37 comentarios y doce CV por interno</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no puede seguir publicado así. Si alguna línea te hace dudar, márcala también.',
    doc: { t: 'Publicación en «Chamba Tacna» · Facebook', sub: 'Jhonatan Mendoza · hace 11 h · 37 comentarios' },
    lines: [
      { id: 'tit', t: 'URGENTE!!! Se necesita SUPERVISOR DE ALMACÉN para distribuidora del Parque Industrial' },
      { id: 'varon', t: 'Varones de preferencia, de 28 a 40 años', bad: LEY, why: 'Sexo y edad no miden la capacidad de supervisar. Es un requisito discriminatorio en una oferta de empleo.' },
      { id: 'exp', t: 'Experiencia mínima de 3 años en almacén' },
      { id: 'salud', t: 'Gozar de buena salud', bad: BP, why: 'Es vago y puede dejar fuera a personas por su salud o una discapacidad. Si el puesto exige algo físico, descríbelo: «apoyo ocasional en carga».' },
      { id: 'sueldo', t: 'Sueldo: S/ 4,000 + bonos', bad: BP, why: 'No es la banda aprobada. Cada candidato que llegue con esa cifra en la cabeza será una negociación perdida.' },
      { id: 'wsp', t: 'Enviar CV con foto y DNI escaneado al WhatsApp 952 418 377 (Jhonatan)', bad: LEY, why: 'Los datos de los postulantes terminan en un celular personal, sin control de la empresa ni aviso de para qué se usarán.' },
      { id: 'inmediata', t: 'Disponibilidad inmediata', duda: 'No es ilegal, pero deja fuera a quien hoy trabaja y debe dar un preaviso. Justo los supervisores con experiencia.' },
      { id: 'turnos', t: 'Turnos rotativos' },
    ],
    res: v => ({
      flags: v.missLey ? ['fb_sesgo'] : ['fb_corregido'],
      out: v.missLey ? 'Le pides a Jhonatan que corrija «algunas cositas». La publicación sigue circulando y los CV siguen llegando a su celular.' : 'Le escribes a Walter y a Jhonatan: la publicación se baja hoy y los CV que llegaron a su celular se reenvían a RR.HH. y se borran del teléfono. A las 11:05 Jhonatan confirma.',
      pro: { ok: 'Atajas un problema que nació fuera de tu área antes de que crezca.', risk: 'Un aviso informal con el nombre de la empresa también compromete a la empresa.', info: 'Aprovecha para acordar con Walter que todo aviso sale por RR.HH., con el mismo texto en todos los canales.' },
      kusi: v.missLey ? ['indignado', '¡Ese aviso sigue juntando CV en un celular personal!'] : ['animo', 'Apagaste el incendio antes del primer café.'],
    }),
    rules: [[LEY, 'Las ofertas de empleo no pueden tener requisitos discriminatorios (Ley 26772 y D.S. 002-98-TR).'], [LEY, 'Los datos de los postulantes deben tratarse para una finalidad clara y con medidas de seguridad (Ley 29733).'], [POL, 'En esta empresa los avisos los publica RR.HH.']],
    mirada: {
      ve: 'Jhonatan no quiso hacer daño: quiso ayudar a su jefe. Pero un aviso informal deja huella. Los CV quedan en un celular personal y los requisitos ilegales llevan el nombre de la empresa. Una profesional corrige sin humillar y convierte el error en una regla: un solo aviso, un solo canal de entrada de datos.',
      visual: { tipo: 'cambio', titulo: 'Del aviso de Facebook al aviso de RR.HH.', pares: [['Varones de 28 a 40 años', 'Liderazgo de equipos operativos'], ['Gozar de buena salud', 'Apoyo ocasional en carga'], ['Sueldo S/ 4,000 + bonos', 'La banda aprobada por la empresa'], ['CV al WhatsApp de Jhonatan', 'Postulación en el portal, con aviso de privacidad']] },
      normas: [{ ley: 'Ley 26772 y su reglamento (D.S. 002-98-TR)', dice: 'Las ofertas de empleo no pueden contener requisitos que alteren la igualdad de oportunidades por raza, sexo, religión, opinión, origen social, condición económica, estado civil, edad o de cualquier otra índole. La obligación alcanza a empleadores e intermediarios.', practica: 'No importa que lo haya publicado un asistente en su Facebook: el aviso habla por la empresa.' }],
    },
  },
  {
    id: 'c2', t: '08:30', ch: 'presencial', who: 'rocio', titulo: 'Café de viernes con Rocío', banner: 'assets/foto/reunion-jefa.webp', show: ['confianza', 'calidad', 'tiempo'],
    body: (n, F) => `<p>Rocío trae dos cafés de la máquina del pasillo; el tuyo ya está tibio. ${F.has('correccion_rocio') ? '«Ayer lo arreglamos bien con Walter. Que no se repita, ¿ya?»' : F.has('filtro_sexo') ? '«Walter sigue diciendo que acordaron buscar varón. Eso hoy queda corregido, ¿estamos?»' : '«Walter anda más tranquilo. Algo hiciste bien.»'}</p><p>Tiene <mark class="clave">quince minutos antes de su reunión con Gerencia</mark>. Pregúntale lo que más te sirva para salir a buscar.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'plata', label: '¿Cuánto presupuesto tengo para publicar?', info: '«Novecientos soles para todo el mes y para las siete vacantes. Para el supervisor, usa como máximo cuatrocientos cincuenta. Lo demás déjalo para operarios y choferes, que rotan más.»' },
      { id: 'interna', label: '¿Se puede abrir primero una convocatoria interna?', info: '«Se debe. Es política de la casa: tres días hábiles adentro y en paralelo puedes publicar afuera. Lo que no se vale es abrirla de adorno, si ya decidiste que viene alguien de fuera.»' },
      { id: 'base', label: '¿Puedo usar la base de CV antiguos del portal?', info: F => F.has('clave_milagros') ? '«Primero lo primero: TI me escribió. Alguien entró anoche con la cuenta de Milagros y bajó 41 CV. Ya la bloquearon. Sobre la base: tiene CV desde 2022. Úsala con cuidado, esas personas postularon a otra cosa.»' : '«Hay CV desde 2022. Úsala con cuidado: esas personas postularon a otra cosa, hace tiempo.»' },
      { id: 'walter', label: '¿Qué hago si Walter me vuelve a apurar?', info: '«Dale opciones, no excusas. Walter no necesita un supervisor perfecto el lunes: necesita no estar solo en el inventario.»' },
    ],
    res: picks => ({
      q: null,
      fx: { calidad: picks.includes('plata') ? 3 : 0, confianza: picks.includes('walter') ? 2 : 1, tiempo: -1 },
      rel: { rocio: 1 },
      flags: picks.map(p => 'sabe_' + p),
      out: picks.includes('plata') ? 'Anotas en tu cuaderno: «S/ 450 para el supervisor». Rocío deja la mitad de su café y se va.' : 'Rocío se va a su reunión. Recién a las 11 te enteras, por Kelly, de que el presupuesto es corto.',
      kusi: ['curioso', 'Quince minutos bien usados valen más que una hora de reunión.'],
    }),
    mirada: {
      ve: 'Antes de salir a buscar, una profesional sabe tres cosas: cuánto puede gastar, qué reglas tiene la casa y qué es lo que de verdad le preocupa al jefe. Con eso, el plan de reclutamiento casi se arma solo.',
      visual: { tipo: 'flujo', titulo: 'El plan de reclutamiento', pasos: ['Perfil aprobado', 'Presupuesto', 'Canales', 'Aviso', 'Convocatoria interna', 'Cierre de postulaciones'], aqui: 1 },
    },
  },
  {
    id: 'c3', t: '09:15', ch: 'sistema', who: null, titulo: 'La base de 2022', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'personas', 'tiempo'],
    body: (n, F) => `<p>${F.has('cuenta_area') ? 'Entras al portal con la cuenta nueva del área. Funciona al primer intento.' : F.has('clave_milagros') ? 'TI bloqueó la cuenta de Milagros después de que alguien la usara anoche. Te dan una cuenta del área a las 9:10, con cara de pocos amigos.' : 'Entras al portal con una cuenta del área que TI activó hoy.'}</p><p>En la pestaña «Talento guardado» hay <mark class="clave">2,814 CV de procesos desde 2022</mark>. Filtras por «supervisor» y «almacén»: salen 46. Walter te escribió ayer: «Búsquelos ahí primero, es gratis».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Escribir a los 46 contándoles de la nueva vacante y preguntarles si quieren ser considerados.',
        res: { q: 'buena', fx: { cumplimiento: 5, personas: 3, tiempo: -3 }, flags: ['base_consentimiento'],
          out: 'Preparas un mensaje corto desde el portal. Para la tarde, nueve responden que sí; dos te agradecen que les hayas preguntado.',
          pro: { ok: 'Aprovechas una base valiosa sin usar los datos para algo que esas personas no autorizaron.', risk: 'Te toma más tiempo y muchos no contestarán.', info: 'Aprovecha para preguntar si quieren seguir en la base. A quien diga que no, retíralo.' },
          kusi: ['feliz', 'Preguntar primero también es buen trato.'] } },
      { id: 'b', label: 'Llamar directamente a los 46: postularon a esta empresa, así que su interés ya está demostrado.',
        res: { q: 'riesgosa', fx: { tiempo: 3, cumplimiento: -5, personas: -1 }, flags: ['base_sin_permiso'],
          out: 'Llamas a once antes del almuerzo. Tres se interesan. Uno te pregunta, molesto: «¿Y de dónde tiene mi número? Postulé hace dos años a otra cosa».',
          pro: { ok: 'Avanzas rápido con gente que conoce la empresa.', risk: 'Usas los datos para una finalidad distinta a la que la persona aceptó, y lo notan.', info: 'Revisa qué aceptaron los postulantes en los términos del portal antes de usar la base.' },
          kusi: ['preocupado', 'Rápido, pero esa pregunta te dejó sin respuesta.'] } },
      { id: 'c', label: 'Dejar la base de lado y concentrarte en postulantes nuevos.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, calidad: -2 }, flags: ['base_ignorada'],
          out: 'Evitas el riesgo, pero dejas pasar a 46 personas del rubro que ya se interesaron alguna vez en la empresa.',
          pro: { ok: 'No usas datos sin estar segura de poder hacerlo.', risk: 'Desperdicias una fuente gratuita y valiosa.', info: 'Había un camino intermedio: preguntarles primero.' },
          kusi: ['pensando', 'Prudente… pero 46 personas es mucha gente.'] } },
    ],
    rules: [[LEY, 'Los datos personales se recogen para una finalidad determinada y no deben usarse para otra distinta sin el consentimiento de su titular (Ley 29733, arts. 5 y 6).'], [BP, 'Una base de talento se mantiene viva preguntando, no llamando por sorpresa.']],
    mirada: {
      ve: 'Una base de CV es un tesoro y una responsabilidad. Esas 46 personas confiaron sus datos a la empresa para un proceso de hace dos años. Una profesional los ve como relaciones que se pueden retomar, no como un listado que se puede usar.',
      visual: { tipo: 'balanza', a: { t: 'Llamar directo', items: ['Ganas medio día', 'Contactas a más gente'] }, b: { t: 'Preguntar primero', items: ['Respetas para qué dieron sus datos', 'Quien responde sí está interesado', 'La empresa queda bien parada'] } },
      normas: [{ ley: 'Ley 29733, de Protección de Datos Personales, arts. 5 y 6', dice: 'El tratamiento de datos personales requiere el consentimiento de su titular, y los datos deben recopilarse para una finalidad determinada, explícita y lícita, sin usarse para fines distintos.', practica: 'Un CV enviado para «asistente de almacén 2022» no autoriza, por sí solo, a llamar a esa persona por cualquier vacante futura.' }],
    },
  },
  {
    id: 'c4', t: '10:15', ch: 'llamada', who: 'walter', titulo: 'Walter y el inventario', banner: 'assets/foto/llamada.webp', show: ['confianza', 'calidad', 'etica'],
    body: (n, F) => `<p>Walter te llama desde el almacén. Se oyen los pitidos de un montacargas en retroceso.</p>${F.has('promesa') ? '<p>«Hoy es viernes. El lunes usted me dijo que hoy tenía supervisor. ¿Dónde está?»</p>' : '<p>«Mire, el inventario empieza el 28 y yo no puedo estar en la oficina y en el almacén a la vez.»</p>'}<p>«Necesito <mark class="clave">a alguien ya</mark>. Y otra cosa: un amigo me recomendó a un supervisor. Le paso el CV.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Reconocer que el lunes prometiste algo que no dependía de ti y proponerle que alguien del equipo quede encargado del turno mientras dura el proceso.', si: 'promesa',
        res: { q: 'buena', fx: { confianza: 5, calidad: 3, personas: 2, etica: 3 }, rel: { walter: 1, julio: 1 }, flags: ['encargo_julio', 'referido_walter', 'promesa_corregida'],
          out: '«Ingeniero, el lunes le prometí algo que no dependía de mí. Me equivoqué.» Walter resopla. Le propones que don Julio sea encargado del turno hasta que llegue el supervisor, con el reconocimiento que defina Rocío. Walter se queda callado. «Julio conoce todo… Ya. Hable usted con Rocío.» Su recomendado entra al filtro como cualquiera.',
          pro: { ok: 'Cubres la urgencia de hoy sin apurar la decisión de los próximos años.', risk: 'Un encargo sin fecha de término ni reconocimiento puede sentirse como abuso.', info: 'Define por escrito cuánto dura el encargo y qué recibe don Julio a cambio.' },
          kusi: ['celebra', '¡Qué bacán! Le diste a Walter una salida, no una excusa.'] } },
      { id: 'a2', label: 'Proponerle que alguien del equipo quede encargado del turno mientras dura el proceso, y mantener el cronograma real.', no: 'promesa',
        res: { q: 'buena', fx: { confianza: 5, calidad: 3, personas: 2 }, rel: { walter: 1, julio: 1 }, flags: ['encargo_julio', 'referido_walter'],
          out: 'Le propones que don Julio sea encargado del turno hasta que llegue el supervisor, con el reconocimiento que defina Rocío. Walter se queda callado. «Julio conoce todo… Ya. Hable usted con Rocío.» Su recomendado entra al filtro como cualquiera.',
          pro: { ok: 'Cubres la urgencia de hoy sin apurar la decisión de los próximos años.', risk: 'Un encargo sin fecha de término ni reconocimiento puede sentirse como abuso.', info: 'Define por escrito cuánto dura el encargo y qué recibe don Julio a cambio.' },
          kusi: ['celebra', '¡Qué bacán! Le diste a Walter una salida, no una excusa.'] } },
      { id: 'b', label: 'Ofrecerle la terna en una semana: publicas hoy, filtras el fin de semana y te saltas la verificación de referencias para ganar días.',
        res: { q: 'riesgosa', fx: { confianza: 3, calidad: -5, tiempo: -4 }, rel: { walter: 1 }, flags: ['terna_apurada', 'referido_walter'],
          out: 'Walter dice «eso quería oír». Acabas de regalar tu fin de semana y el paso que evita contratar a la persona equivocada.',
          pro: { ok: 'Walter siente que lo escuchas.', risk: 'Las referencias son la última barrera antes de una mala contratación.', info: 'Si necesitas velocidad, recorta tiempos de espera, no controles.' },
          kusi: ['preocupado', '¿Una semana sin referencias? Uy.'] } },
      { id: 'c', label: 'Decirle que ya tienes candidatos muy avanzados, aunque todavía no publicas, para que se calme.', si: 'promesa',
        res: { q: 'riesgosa', fx: { confianza: 2, etica: -6 }, flags: ['mentira_walter', 'referido_walter'],
          out: 'Walter baja la voz: «Ah, ya. Mándeme los nombres el lunes». No hay nombres. Ahora tienes dos promesas que no puedes cumplir.',
          pro: { ok: 'Ganas un fin de semana de calma.', risk: 'Una mentira para tapar una promesa se descubre en días.' },
          kusi: ['triste', 'Dos promesas y ningún candidato…'] } },
      { id: 'd', label: 'Explicarle que el proceso toma tres semanas y que no hay atajos.', no: 'promesa',
        res: { q: 'aceptable', fx: { confianza: -3, cumplimiento: 2 }, rel: { walter: -1 }, flags: ['referido_walter'],
          out: '«Ya sé que no hay atajos. Le estoy pidiendo una solución.» Cuelga. El CV de su recomendado llega igual a las 10:48.',
          pro: { ok: 'Eres honesta con los plazos.', risk: 'Walter no pedía un atajo: pedía no estar solo en el inventario.', info: 'Una solución temporal habría cambiado la llamada.' },
          kusi: ['pensando', 'Verdad sin alternativa suena a portazo.'] } },
    ],
    rules: [[BP, 'Ante una urgencia, separa cubrir el puesto hoy de elegir bien a quien lo ocupará.'], [BP, 'Un referido del jefe pasa el mismo filtro que los demás.'], [POL, 'Un encargo temporal debe tener fecha de término y aprobación de RR.HH.']],
    mirada: {
      ve: 'Walter mezcla dos problemas: el inventario de este mes y el supervisor de los próximos años. Una profesional los separa. El primero se resuelve con un encargo temporal; el segundo, con un buen proceso. Si los mezclas, terminas contratando rápido a quien esté disponible.',
      visual: { tipo: 'balanza', a: { t: 'Apurar la contratación', items: ['Walter tranquilo hoy', 'Terna en una semana'] }, b: { t: 'Encargo temporal y buen proceso', items: ['El inventario tiene responsable', 'La selección conserva sus controles', 'Don Julio demuestra lo que sabe'] } },
    },
  },
  {
    id: 'c5', t: '11:30', ch: 'documento', who: null, titulo: 'Cuatrocientos cincuenta soles', banner: 'assets/esc/meta.webp', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('sabe_plata') ? 'Tienes S/ 450 para el supervisor, como te dijo Rocío.' : 'Kelly te cuenta, de pasada, que Rocío solo tiene S/ 900 para el mes y que el supervisor no debería pasar de S/ 450.'} Milagros dejó en el Excel una pestaña llamada «cotiz FINAL final» con lo que cuesta cada canal.</p><p>Te alcanza para tres. <mark class="clave">¿Dónde está la gente que buscas?</mark></p>`,
    type: 'pick', n: 3, prompt: 'Elige tres canales para el supervisor.', boton: 'Armar el plan de canales', resumen: 'Tus canales',
    cols: ['Canal', 'Costo', 'Qué se sabe'],
    rows: [
      { id: 'portal', cells: ['Aviso destacado en el portal pagado (30 días)', 'S/ 380', 'Lo ven supervisores de todo el sur'] },
      { id: 'empleos', cells: ['Bolsa Empleos Perú, del Ministerio de Trabajo', 'S/ 0', 'Gratis; llega sobre todo a perfiles operativos'] },
      { id: 'linkedin', cells: ['Publicación en LinkedIn de la empresa y de tu perfil', 'S/ 0', 'Llega a supervisores que hoy trabajan y no buscan'] },
      { id: 'referidos', cells: ['Convocatoria interna y referidos del equipo', 'S/ 0', 'Pacheco entró así hace seis años'] },
      { id: 'facebook', cells: ['Anuncio pagado en Facebook, segmentado a Tacna', 'S/ 150', 'Mucho volumen, poco filtro'] },
      { id: 'radio', cells: ['Spot en una radio local, cinco días', 'S/ 420', 'Llega a todo Tacna, de cualquier perfil'] },
      { id: 'consultora', cells: ['Consultora de headhunting', 'Un sueldo del puesto', 'Rápida, pero fuera de presupuesto'] },
    ],
    score: { referidos: 3, linkedin: 2, portal: 2, empleos: 1, facebook: 0, radio: -2, consultora: -3 },
    res: (picks, sc) => {
      const costo = { portal: 380, facebook: 150, radio: 420, consultora: 3600 };
      const gasto = picks.reduce((a, p) => a + (costo[p] || 0), 0), pasa = gasto > 450;
      const q = pasa ? 'riesgosa' : sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: pasa ? -4 : 2, tiempo: picks.includes('referidos') ? 2 : 0 },
        flags: [...picks.map(p => 'canal_' + p), ...(pasa ? ['sobre_presupuesto'] : [])],
        out: pasa ? `Tu plan cuesta S/ ${gasto.toLocaleString('es-PE')}. Rocío tendrá que pedir más presupuesto o recortar operarios y choferes.` : `Tu plan cuesta S/ ${gasto}. ${picks.includes('referidos') ? 'Y empieza por la gente de adentro, que no cuesta nada.' : 'Te queda saldo, aunque dejaste fuera el canal más barato: el equipo.'}`,
        pro: { ok: 'Para un supervisor con experiencia, los mejores canales suelen ser los referidos y los lugares donde están quienes hoy trabajan.', risk: 'La radio y Facebook traen volumen, no perfil: más CV no es mejor filtro.', info: 'Anota de dónde viene cada postulante. En el capítulo del filtro sabrás qué canal funcionó.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Poca plata, buen ojo.' : 'Mira dónde trabaja hoy la persona que buscas.'],
      };
    },
    rules: [[POL, 'El presupuesto de avisos se reparte entre todas las vacantes del mes.'], [BP, 'Elige canales según dónde está el perfil, no según cuánta gente llega.']],
    mirada: {
      ve: 'Un supervisor de almacén con experiencia casi nunca está buscando trabajo: está trabajando. Por eso una profesional elige canales que lleguen a quien no busca, como los referidos o LinkedIn, y usa el dinero solo donde aporta algo que lo gratuito no da.',
      visual: { tipo: 'matriz', x: 'Costo', y: 'Llega al perfil buscado', cuadrantes: ['Úsalo primero', 'Vale si alcanza', 'Complemento gratis', 'Evítalo'], items: [['Referidos', .08, .9], ['LinkedIn', .12, .7], ['Portal pagado', .7, .75], ['Empleos Perú', .1, .35], ['Facebook', .4, .25], ['Radio', .8, .15], ['Consultora', .95, .8]] },
    },
  },
  {
    id: 'c6', t: '13:40', ch: 'presencial', who: 'julio', titulo: 'La convocatoria interna', banner: 'assets/foto/supervisa.webp', lugar: 'Comedor · Distribuidora Pacífico Sur', show: ['personas', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Bajas tarde al comedor; el picante de guatita ya se acabó y te toca arroz con huevo. Don Julio se sienta frente a ti con su termo de mate de coca.</p>${F.has('encargo_julio') ? '<p>«El ingeniero me dijo que voy a estar encargado del turno. ¿Es en serio, hija?»</p>' : ''}<p>«${F.has('julio_interno') ? 'Me quedé pensando en lo que me preguntó el miércoles. ¿De verdad uno de adentro puede postular?' : 'Dicen que van a buscar supervisor afuera. ¿Los de adentro no podemos?'}» Rocío te pidió dejar lista hoy <mark class="clave">la convocatoria interna</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de una convocatoria interna justa.', boton: 'Explicarle el proceso a don Julio',
    items: [
      { id: 'perfil', t: 'Usar el mismo perfil y la misma banda que el aviso externo', por: 'Si los requisitos cambian según de dónde venga la persona, no es justo.' },
      { id: 'publica', t: 'Publicar la convocatoria en el mural y en el grupo de comunicados', por: 'Todos se enteran a la vez, no solo los cercanos al jefe.' },
      { id: 'plazo', t: 'Dar tres días hábiles para postular en RR.HH.', por: 'Es la política de la casa. Sin plazo claro, siempre falta alguien.' },
      { id: 'evalua', t: 'Evaluar a quienes postulen con los mismos criterios que a los de fuera', por: 'Ni ventaja ni castigo por ser de adentro.' },
      { id: 'responde', t: 'Responder en persona a cada interno, quede o no', por: 'Un «no» bien explicado a alguien de adentro cuida al equipo.' },
    ],
    res: (bien, total, F) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      const jp = F?.has('julio_interno');
      return {
        q, fx: { personas: q === 'buena' ? 4 : 1, cumplimiento: 2, etica: 2 }, rel: { julio: 1 },
        flags: ['conv_interna', ...(jp ? ['julio_postula'] : [])],
        out: jp ? 'Don Julio escucha todo sin interrumpir. Al final dice: «Entonces me anoto. Si no quedo, por lo menos lo intenté». A las 14:40 Rocío publica la convocatoria.' : 'Don Julio asiente: «Así sí. Le voy a avisar a Ramiro, del turno noche». A las 14:40 Rocío publica la convocatoria.',
        pro: { ok: 'Una convocatoria interna bien hecha le dice al equipo que en esta empresa se puede crecer.', risk: 'Si ya decidiste traer a alguien de fuera, abrirla «de adorno» desgasta más que no abrirla.', info: 'Avisa al jefe directo de cada interno que postule, para que no se entere por pasillo.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Qué divino! La puerta de adentro también está abierta.' : 'Casi. Lo justo empieza por usar el mismo perfil.'],
      };
    },
    rules: [[POL, 'En esta empresa la convocatoria interna dura tres días hábiles y puede correr en paralelo con el aviso externo.'], [BP, 'Internos y externos se evalúan con los mismos criterios.']],
    mirada: {
      ve: 'Para don Julio, la convocatoria no es un trámite: es saber si veinte años en el almacén cuentan para algo. Una profesional cuida que la puerta interna sea real, aunque al final quede alguien de fuera. Lo que el equipo recuerda es si tuvo una oportunidad justa.',
      visual: { tipo: 'flujo', titulo: 'La convocatoria interna', pasos: ['Mismo perfil', 'Publicación', 'Plazo', 'Mismos criterios', 'Respuesta en persona'] },
    },
  },
  {
    id: 'c7', t: '15:20', ch: 'documento', who: null, titulo: 'El aviso', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Con el perfil ${F.has('perfil_solido') ? 'que Walter ya aprobó' : 'que todavía tiene piezas flojas'} abierto en otra ventana, escribes el aviso que irá al portal${F.has('canal_linkedin') ? ' y a LinkedIn' : ''}. ${F.has('banda_publica') ? 'Llevará el rango de S/ 3,200 a S/ 3,900.' : F.has('banda_tope') ? 'Llevará los S/ 3,900 que decidiste el miércoles.' : 'Dirá «sueldo a tratar», como decidiste el miércoles.'}</p><p>Quien lo lea tiene que saber en <mark class="clave">treinta segundos</mark> si el puesto es para él o para ella.</p>`,
    type: 'compose', para: 'Vista previa del aviso · Supervisor/a de almacén', boton: 'Publicar el aviso',
    prompt: 'Arma el aviso eligiendo una frase de cada parte.',
    slots: [
      { id: 'titulo', t: 'Título', ops: [
        { id: 't1', t: 'Supervisor/a de almacén · Tacna · Turnos rotativos.', ok: true, por: 'Puesto, lugar y condición clave. Y en masculino y femenino: le dice a todas que pueden postular.' },
        { id: 't2', t: '¡¡Gran oportunidad!! Únete a la familia Pacífico Sur.', ok: false, por: 'No dice qué puesto es. Lo pasarán de largo.' },
        { id: 't3', t: 'Supervisor de almacén.', ok: null, por: 'Claro, aunque sin el femenino algunas candidatas sentirán que no es para ellas.' },
      ] },
      { id: 'mision', t: 'Para qué es el puesto', ops: [
        { id: 'm1', t: 'Liderarás a los operarios de cada turno para que el almacén reciba, guarde y despache a tiempo y sin pérdidas.', ok: true, por: 'Es la misión del perfil, dicha en segunda persona.' },
        { id: 'm2', t: 'Buscamos una persona proactiva, dinámica y con ganas de crecer.', ok: false, por: 'Cabe en cualquier aviso y no dice nada del trabajo.' },
        { id: 'm3', t: 'Serás el brazo derecho del jefe de Operaciones, con disponibilidad total.', ok: false, por: '«Disponibilidad total» asusta a los buenos y no describe el trabajo.' },
      ] },
      { id: 'req', t: 'Requisitos', ops: [
        { id: 'r1', t: 'Pedimos 3 años supervisando un almacén, manejo de un WMS y Excel intermedio.', ok: true, por: 'Verificables y vinculados al puesto.' },
        { id: 'r2', t: 'Pedimos 3 años supervisando un almacén y residir en Tacna.', ok: null, por: 'Residir en Tacna no es ilegal, pero deja fuera a quien está dispuesto a mudarse. ¿Lo necesitas o basta con vivir aquí al ingresar?' },
        { id: 'r3', t: 'Pedimos experiencia, buena salud y excelente presencia.', ok: false, por: 'Vago y con riesgo de sesgo por salud o apariencia.' },
      ] },
      { id: 'ofrece', t: 'Lo que ofrecemos', ops: [
        { id: 'o1', t: 'Ofrecemos planilla desde el primer día con todos los beneficios de ley y un equipo con mucha experiencia.', ok: true, por: 'Concreto y cierto. «Un equipo con experiencia» es un atractivo real.' },
        { id: 'o2', t: 'Ofrecemos línea de carrera y excelente clima laboral.', ok: null, por: 'Todos los avisos lo dicen. Si no puedes mostrarlo, no suma.' },
        { id: 'o3', t: 'Ofrecemos el mejor sueldo del mercado.', ok: false, por: 'No es cierto con esta banda, y lo descubrirán en la entrevista.' },
      ] },
      { id: 'postula', t: 'Cómo postular', ops: [
        { id: 'p1', t: 'Postula por el portal hasta el jueves. Usaremos tus datos solo para este proceso de selección.', ok: true, por: 'Un solo canal de entrada, fecha de cierre y aviso de para qué se usan los datos.' },
        { id: 'p2', t: 'Envía tu CV con foto al correo seleccion@pacificosur.pe.', ok: null, por: 'El correo es del área, bien. Pero la foto no sirve para evaluar y faltó decir para qué usarás los datos.' },
        { id: 'p3', t: 'Escríbenos al WhatsApp del área con tu CV y DNI.', ok: false, por: 'El DNI no hace falta en esta etapa y el WhatsApp no es un buen archivo de datos personales.' },
      ] },
    ],
    res: sel => {
      const buenas = ['t1', 'm1', 'r1', 'o1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const malas = ['t2', 'm2', 'm3', 'r3', 'o3', 'p3'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas >= 2 ? 'riesgosa' : buenas >= 4 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: sel.postula === 'p1' ? 3 : -1, etica: sel.req === 'r3' ? -3 : 1 },
        flags: [q === 'riesgosa' ? 'aviso_confuso' : 'aviso_claro', ...(sel.req === 'r2' ? ['solo_tacna'] : []), ...(sel.titulo === 't1' ? ['aviso_inclusivo'] : [])],
        cartera: { supervisor: 'Aviso publicado · cierra el jueves' },
        out: q === 'buena' ? 'Publicas a las 15:48. A las 17:00 ya hay 23 postulaciones, y la mayoría tiene experiencia en almacén.' : q === 'aceptable' ? 'Publicas a las 15:48. Llegan postulaciones; varias no tienen nada que ver con el puesto.' : 'Publicas a las 15:48. Llueven CV: vendedores, cajeros, un chef. El filtro del martes será largo.',
        pro: { ok: 'Un aviso claro filtra antes que tú: quien no encaja no postula.', risk: 'Las frases bonitas y genéricas traen volumen, no candidatos.', info: 'Pídele a alguien del almacén que lo lea. Si entiende el puesto en treinta segundos, está listo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Aviso de lujo! Se entiende al toque.' : 'Se publicó… ahora toca leer lo que llegue.'],
      };
    },
    rules: [[LEY, 'El aviso no puede tener requisitos discriminatorios (Ley 26772).'], [LEY, 'Informa al postulante para qué usarás sus datos (Ley 29733).'], [BP, 'El aviso dice qué hará la persona, qué necesita y qué recibe.']],
    mirada: {
      ve: 'El aviso es la primera conversación con la persona que vas a contratar. Una profesional escribe para quien lo lee en el celular, en la combi, entre dos turnos: qué puesto es, para qué sirve, qué pide, qué da y cómo postular. Todo lo demás es ruido.',
      visual: { tipo: 'mensaje', titulo: 'Un aviso que se entiende en treinta segundos', txt: 'Supervisor/a de almacén · Tacna · Turnos rotativos. Liderarás a los operarios de cada turno para que el almacén reciba, guarde y despache a tiempo y sin pérdidas. Pedimos 3 años supervisando un almacén, manejo de un WMS y Excel intermedio. Ofrecemos planilla desde el primer día con todos los beneficios de ley. Postula por el portal hasta el jueves. Usaremos tus datos solo para este proceso.' },
      normas: [{ ley: 'Ley 29733, de Protección de Datos Personales', dice: 'Quien recoge datos personales debe informar a su titular para qué se usarán.', practica: 'Una línea en el aviso («usaremos tus datos solo para este proceso») cumple ese deber y genera confianza.' }],
    },
  },
  {
    id: 'c8', t: '17:05', ch: 'correo', who: null, titulo: 'El gerente general pregunta', banner: 'assets/foto2/presentacion.webp', show: ['confianza', 'calidad', 'etica'],
    mail: { from: 'Ing. Ricardo Zegarra · Gerente General', to: 'Analista de Selección', cc: 'Rocío Mamani', asunto: 'Estado de procesos para el comité del lunes' },
    body: (n, F) => `<p>Buenas tardes. Para el comité del lunes necesito saber en qué está cada proceso abierto y qué riesgos ven. Breve, por favor.</p><p>R. Zegarra</p><p><small>${F.has('gina_espera') ? 'Rocío te reenvía, sin comentarios, un correo de Gina a Gerencia: «Mi asistente sigue sin novedades».' : F.has('terna_nueva') ? 'Fernando ya le dijo al gerente que «esta semana tiene terna nueva de vendedores».' : 'Es la primera vez que el gerente general te escribe.'}</small></p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Enviarle una tabla corta: cada proceso con su etapa, la próxima fecha y un riesgo, incluso los que van atrasados.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 4, tiempo: -2 }, rel: { rocio: 1 }, flags: ['gerencia_informada'],
          responde: 'Ing. Zegarra, buenas tardes. Le comparto el estado: Supervisor de almacén: aviso publicado hoy, terna en la semana 3; riesgo: preaviso del elegido. Operarios: entrevistas hechas, falta la opinión de Operaciones. Vendedores: esperando criterios de Comercial. Asistente contable: perfil actualizado, aviso la próxima semana. Chofer: 6 postulantes. Practicante: por iniciar. Auxiliar de despacho: proceso por reabrir. Saludos.',
          out: 'Rocío te escribe: «Así se le responde a Zegarra». El gerente contesta con un escueto «Gracias. Claro». Nadie se sorprenderá el lunes.',
          pro: { ok: 'Gerencia ve todo en un minuto, incluidos los riesgos. Nadie se sorprenderá en el comité.', risk: 'Mostrar atrasos expone a algunos jefes. Hazlo con datos, no con culpas.', info: 'Guarda esta tabla: la actualizarás cada viernes.' },
          kusi: ['feliz', 'Breve, claro y sin maquillaje.'] } },
      { id: 'b', label: 'Responderle solo sobre el supervisor, que es lo que más le importa a la empresa.',
        res: { q: 'aceptable', fx: { confianza: 1, calidad: -1 },
          responde: 'Ing. Zegarra, el aviso del supervisor de almacén salió hoy. Esperamos tener terna en la semana 3. Saludos.',
          out: 'El gerente contesta: «¿Y los demás?». Le terminas mandando todo el lunes a las 7:30, apurada.',
          pro: { ok: 'Priorizas lo urgente.', risk: 'Te pidió todos los procesos. Responder a medias genera otra pregunta.' },
          kusi: ['pensando', 'Te preguntó por siete, contestaste por uno.'] } },
      { id: 'c', label: 'Decirle que todos los procesos avanzan según lo previsto y que el lunes presentas el detalle en el comité.',
        res: { q: 'riesgosa', fx: { confianza: 2, etica: -4, calidad: -2 }, flags: ['gerencia_optimista'],
          responde: 'Ing. Zegarra, todos los procesos avanzan según lo previsto. El lunes presento el detalle en el comité. Saludos.',
          out: 'Suena bien hoy. Pero Gina ya escribió a Gerencia diciendo lo contrario, y el lunes alguien lo va a mencionar.',
          pro: { ok: 'Transmites calma.', risk: 'Un «todo bien» que otro jefe contradice te quita credibilidad frente a Gerencia.' },
          kusi: ['preocupado', '¿Según lo previsto? Gina no opina igual…'] } },
    ],
    rules: [[BP, 'Reporta a gerencia con etapa, fecha y riesgo; muestra también lo que va atrasado.'], [POL, 'En esta empresa el estado de procesos se presenta en el comité de los lunes.']],
    mirada: {
      ve: 'Un gerente general no necesita saber cuántos CV llegaron: necesita saber qué puede salir mal y cuándo. Una profesional reporta los atrasos antes de que otro los cuente por ella. Así, cuando Gina o Fernando se quejen, Gerencia ya tendrá la versión completa.',
      visual: { tipo: 'embudo', titulo: 'Tu viernes en números', niveles: [['CV en la base de 2022', 46], ['Postulaciones al aviso, primera hora', 23], ['Canales activos', 3], ['Procesos reportados a Gerencia', 7]] },
    },
  },
];
