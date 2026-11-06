// Asistente de Bienestar Social · Capítulo 1 · «La lista de casos» · Semana 1, lunes.
// Hilo del mes: 23 casos abiertos en una agroindustria azucarera de Lambayeque.
// Normas citadas: Ley 26790 (los primeros 20 días de incapacidad los paga el empleador; desde el día 21, subsidio
// de EsSalud); Ley 27240 y modificatorias (una hora diaria de lactancia hasta el primer año); Ley 29896 (lactario
// en centros con 20 o más mujeres en edad fértil); Ley 29733 (datos de salud como datos sensibles).

export const CAP = {
  n: 1, titulo: 'La lista de casos', dia: 'Semana 1, lunes', foto: 'assets/foto/mentora.webp',
  lugar: 'Agroindustrial Sipán · Lambayeque',
  inicio: '07:30', fin: '18:30', cierreHora: '18:20',
  apertura: 'Lambayeque. El olor a caña quemada llega hasta la oficina. Hoy empiezas como asistente de Bienestar Social.', boton: 'Entrar a Bienestar',
  kusi: 'Detrás de cada carpeta hay una familia. ¡Con cariño y con orden!',
  lead: 'Priorizaste los casos que no podían esperar, cuidaste información de salud, le explicaste a Don Héctor qué pasa con su subsidio y defendiste el tiempo de lactancia de Maribel.',
  reflexion: '¿Qué caso de hoy te costó dejar en la oficina al irte?',
  siguiente: { n: 2, titulo: 'El subsidio', dia: 'Semana 1, martes' },
};

export const CARTERA = [
  { id: 'casos', p: '23 casos sociales abiertos', j: 'Nelly · Bienestar', d: 0, e: 'Algunos con meses' },
  { id: 'hector', p: 'Subsidio de Don Héctor', j: 'Nelly · EsSalud', d: 0, e: '40 días de descanso' },
  { id: 'lactario', p: 'Lactario de la planta', j: 'Augusto · Campo', d: 0, e: 'No existe' },
  { id: 'visita', p: 'Visita domiciliaria pendiente', j: 'Nelly · Bienestar', d: 0, e: 'Hace un mes' },
];

export const FUTURO = {
  urgentes_primero: ['Atendiste primero a Don Héctor y la visita pendiente.', 'El subsidio será tu tema del capítulo 2.'],
  registro_cuidado: ['Sacaste los diagnósticos del Excel que veían 40 supervisores.', 'Te servirá cuando alguien pregunte por un caso en el capítulo 6.'],
  registro_expuesto: ['El Excel con diagnósticos sigue abierto para 40 supervisores.', 'Alguien lo reenviará en el capítulo 6.'],
  hector_claro: ['Don Héctor entendió quién paga qué y cuándo.', 'Te esperará mañana con sus papeles.'],
  maribel_hora: ['Maribel tendrá su hora de lactancia en el horario que necesita.', 'Te contará cómo le va en el capítulo 4.'],
  maribel_fin: ['Aceptaste que Maribel tome su hora solo al final del día.', 'Volverá a buscarte en el capítulo 4.'],
  lactario_pedido: ['Le planteaste a Augusto que la planta necesita un lactario.', 'Él responderá en el capítulo 5.'],
};

export const CHATS = {
  grupo: { n: 'Bienestar Sipán', sub: 'Nelly y tú', c: '#E4572E' },
  nelly: { n: 'Nelly Ramírez', sub: 'Jefa de Bienestar', who: 'nelly' },
  hector: { n: 'Don Héctor Llontop', sub: 'Operario de molienda', who: 'hector' },
  maribel: { n: 'Maribel Chapoñán', sub: 'Analista de laboratorio', who: 'maribel' },
  augusto: { n: 'Augusto Bravo', sub: 'Gerente de campo', who: 'augusto' },
};

export const WSP = [
  { chat: 'grupo', t: '07:32', de: 'Nelly', txt: 'Bienvenida 💛 Te dejé las 23 carpetas en tu escritorio. No te asustes, vamos de a pocos.' },
  { chat: 'hector', t: '10:05', de: 'Don Héctor', txt: 'Señorita buenos días, soy Héctor Llontop. Me dijeron que usted ve lo del subsidio. Estoy en la puerta.' },
  { chat: 'maribel', t: '13:40', de: 'Maribel', txt: 'Hola, ¿podemos conversar 10 minutos? Es sobre mi horario de lactancia 🙏' },
  { chat: 'hector', t: '12:30', de: 'Don Héctor', txt: 'Gracias señorita por explicarme. Mi señora ya está más tranquila 🙏', si: 'hector_claro' },
  { chat: 'augusto', t: '17:10', de: 'Augusto', txt: 'Recibido. Lo vemos con Administración. Pero la planta no es guardería, ojo.', si: 'lactario_pedido' },
];

export const CORREOS = [
  { t: '07:35', de: 'Nelly Ramírez', para: 'Asistente de Bienestar Social', asunto: 'Bienvenida a Bienestar', html: '<p>Bienvenida. Somos dos para 1,500 personas, así que aprenderás rápido a priorizar.</p><p>Una regla de oro: lo que nos cuentan es confidencial. Un diagnóstico, una deuda o un problema familiar no se comenta en el comedor ni se pone en un grupo de WhatsApp.</p><p>Nelly</p>' },
];

export const QUIZ = [
  { q: 'Un trabajador tiene descanso médico de 40 días. ¿Quién paga los primeros 20?', ops: ['EsSalud', 'El empleador', 'Nadie', 'El trabajador'], ok: 1, por: 'Según la Ley 26790, los primeros 20 días de incapacidad los paga el empleador; desde el día 21, EsSalud otorga el subsidio.' },
  { q: '¿Cuánto dura el permiso de lactancia?', ops: ['Una hora diaria hasta que el hijo cumpla un año', 'Media hora por seis meses', 'No existe', 'Lo decide el jefe'], ok: 0, por: 'La madre trabajadora tiene derecho a una hora diaria de permiso por lactancia hasta que su hijo cumpla un año.' },
  { q: '¿Qué centros de trabajo deben implementar un lactario?', ops: ['Todos', 'Los que tienen 20 o más mujeres en edad fértil', 'Solo los del Estado', 'Ninguno'], ok: 1, por: 'La Ley 29896 lo exige en centros con 20 o más mujeres en edad fértil.' },
  { q: 'Un diagnóstico médico de un trabajador es…', ops: ['Un dato público', 'Un dato sensible que requiere protección reforzada', 'Información para todos los supervisores', 'Un dato sin importancia'], ok: 1, por: 'Los datos de salud son datos sensibles según la Ley 29733.' },
  { q: 'Con 23 casos abiertos, ¿por cuáles empiezas?', ops: ['Por orden alfabético', 'Por los que afectan ingresos, salud o seguridad de la familia', 'Por los más fáciles', 'Por los de los jefes'], ok: 1, por: 'Prioriza lo que tiene urgencia económica o riesgo para la persona.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'w1', t: '07:45', ch: 'documento', who: null, titulo: 'Veintitrés carpetas', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de Bienestar', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>Las carpetas tienen post-its de colores: rojo, amarillo, verde. Algunos se han despegado. Nelly está en una reunión toda la mañana.</p><p>Hoy solo te alcanza para atender <mark class="clave">dos casos a fondo</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos casos con los que empiezas.', boton: 'Empezar por estos', resumen: 'Empezaste por',
    cols: ['Caso', 'Qué está en juego'],
    rows: [
      { id: 'hector', cells: ['Don Héctor: 40 días de descanso médico y su subsidio no llega', 'El ingreso de su familia'] },
      { id: 'visita', cells: ['Visita pendiente: operario con su hijo hospitalizado en Chiclayo', 'Apoyo y posible préstamo de emergencia'] },
      { id: 'beca', cells: ['Solicitud de beca escolar para el próximo año', 'Plazo en febrero'] },
      { id: 'campeonato', cells: ['Inscripciones al campeonato de fulbito del aniversario', 'Integración'] },
      { id: 'cumple', cells: ['Lista de cumpleaños del mes', 'Detalle simbólico'] },
    ],
    score: { hector: 3, visita: 3, beca: 1, campeonato: -1, cumple: -1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, tiempo: q === 'buena' ? 2 : -1 },
        flags: q === 'buena' ? ['urgentes_primero'] : [], cartera: { casos: q === 'buena' ? '2 casos urgentes en curso' : 'Casos en orden de llegada' },
        out: picks.includes('visita') ? 'Coordinas la visita para el jueves y averiguas cómo funciona el préstamo de emergencia. El operario no sabía que existía.' : 'Avanzas, pero hay una familia esperando en un hospital desde hace un mes.',
        pro: { ok: 'En bienestar, lo urgente es lo que afecta ingresos, salud o seguridad.', risk: 'Lo festivo se ve y se agradece, pero no puede pasar delante de una emergencia.', info: 'Pídele a Nelly un criterio de colores: rojo, amarillo y verde deben significar lo mismo para todos.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Primero las familias en apuros.' : '¿Qué caso no podía esperar?'],
      };
    },
    rules: [[BP, 'Prioriza los casos por urgencia y riesgo para la persona y su familia.']],
    mirada: {
      ve: 'Bienestar Social no es organizar fiestas: es acompañar a personas en momentos difíciles. Con pocos recursos, priorizar bien es la forma más concreta de cuidar.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Urgencia para la familia', cuadrantes: ['Hoy', 'Hoy y planifica', 'Esta semana', 'Cuando haya tiempo'], items: [['Subsidio de Héctor', .45, .9], ['Hijo hospitalizado', .6, .85], ['Beca escolar', .4, .4], ['Campeonato', .5, .1], ['Cumpleaños', .2, .08]] },
    },
  },
  {
    id: 'w2', t: '09:10', ch: 'documento', who: null, titulo: 'El Excel de casos', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'etica', 'personas'],
    body: () => `<p>Abres el «Registro de casos sociales». Ves que está compartido con <mark class="clave">los 40 supervisores de la empresa</mark>, «para que estén al tanto».</p>`,
    type: 'flag', prompt: 'Marca lo que no debería estar así en el registro.',
    doc: { t: 'Registro de casos sociales', sub: 'Excel compartido · Agroindustrial Sipán' },
    lines: [
      { id: 'compartido', t: 'Acceso: los 40 supervisores, con permiso de edición.', bad: LEY, why: 'La información de los casos solo debe verla quien la necesita para atenderlos (Ley 29733).' },
      { id: 'diag', t: 'Columna «Diagnóstico»: VIH, depresión, alcoholismo, cáncer…', bad: LEY, why: 'Los datos de salud son datos sensibles: no deben estar visibles para supervisores.' },
      { id: 'coment', t: 'Comentario en el caso de Don Héctor: «se hace el enfermo, dice su supervisor».', bad: BP, why: 'Es una opinión de un tercero, sin sustento, en un registro oficial. Daña a la persona.' },
      { id: 'fecha', t: 'Fecha de inicio y fin del descanso médico.' },
      { id: 'contacto', t: 'Teléfono de contacto de emergencia.' },
      { id: 'deuda', t: 'Columna «Deudas»: montos y entidades con las que cada trabajador está endeudado.', bad: BP, why: 'Es información delicada que no debe estar a la vista de supervisores; solo en el expediente de Bienestar.' },
      { id: 'estado', t: 'Estado del caso: abierto, en seguimiento o cerrado.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Dejas el registro como está. Mañana, cualquiera de 40 supervisores podrá leer quién tiene VIH en la planta.' : `Le escribes a Nelly y a TI. Esa misma mañana se quitan los permisos y la información de salud pasa a un archivo solo de Bienestar.`,
      flags: [missLey ? 'registro_expuesto' : 'registro_cuidado'], rel: { nelly: missLey ? 0 : 1 },
      pro: { ok: 'Proteger la información de salud protege a las personas y a la empresa.', risk: 'Un registro compartido «para que estén al tanto» es una filtración esperando su turno.', info: 'A los supervisores les basta saber que alguien está de descanso, no por qué.' },
      kusi: missLey ? ['indignado', 'Esa información no era para todos…'] : ['celebra', 'Cuidaste lo más delicado.'],
    }),
    rules: [[LEY, 'Los datos de salud son datos sensibles y exigen medidas de seguridad reforzadas (Ley 29733).'], [POL, 'En Sipán, los supervisores solo reciben fechas de inicio y fin de descanso, sin diagnóstico.']],
    mirada: {
      ve: 'En bienestar, la confianza es todo: si la gente cree que lo que cuenta se va a saber, deja de contarlo, y entonces ya no puedes ayudar. Proteger la información es la base del trabajo.',
      visual: { tipo: 'embudo', titulo: 'Quién necesita saber qué', niveles: [['Supervisores: fechas del descanso', 40], ['Planillas: días y montos', 3], ['Bienestar: el caso completo', 2]] },
      normas: [{ ley: 'Ley 29733, de Protección de Datos Personales', dice: 'Los datos relativos a la salud son datos sensibles y su tratamiento requiere protección reforzada.', practica: 'Un diagnóstico en un Excel compartido con 40 personas incumple esa protección.' }],
    },
  },
  {
    id: 'w3', t: '10:10', ch: 'presencial', who: 'hector', titulo: 'Don Héctor', banner: 'assets/esc/dudas.webp', lugar: 'Puerta de Bienestar', show: ['personas', 'cumplimiento', 'confianza'],
    body: () => `<p>Don Héctor lleva 22 años en molienda. Entra despacio, apoyado en un bastón después de una operación de rodilla. Trae una bolsa con papeles.</p><p>«Señorita, ya van 40 días. El primer mes me pagaron normal, pero <mark class="clave">este mes no me ha llegado nada</mark>. Mi señora está preocupada. ¿Me han botado?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que los primeros 20 días los pagó la empresa y desde el día 21 corresponde el subsidio de EsSalud, y revisar con él si su trámite se presentó.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 4, tiempo: -2 }, rel: { hector: 1 }, flags: ['hector_claro'], cartera: { hector: 'Revisando si se presentó la solicitud de subsidio' },
          out: 'Revisas su carpeta: su certificado de incapacidad está, pero nadie presentó la solicitud de subsidio. Don Héctor no está despedido: el trámite se atascó. Le dices que mañana lo verás con Planillas.',
          pro: { ok: 'Explicas con claridad, sin culpar a nadie, y encuentras dónde se trabó el trámite.', risk: 'Ahora tienes que hacer que el trámite avance.', info: 'En muchas empresas la solicitud de subsidio la gestiona el empleador: si nadie la presenta, el trabajador queda en el aire.' },
          kusi: ['celebra', 'No lo habían botado: se trabó un papel.'] } },
      { id: 'b', label: 'Decirle que eso es un tema de EsSalud y que tiene que ir él a sus oficinas a reclamar.',
        res: { q: 'riesgosa', fx: { personas: -5, cumplimiento: -2 },
          out: 'Don Héctor se va con su bastón a tomar una combi a Chiclayo. En EsSalud le dirán que la empresa no presentó nada.',
          pro: { ok: 'Le indicas una institución.', risk: 'Lo mandaste lejos, operado, por un trámite que quizás debía hacer la empresa.' },
          kusi: ['triste', 'Con la rodilla operada…'] } },
      { id: 'c', label: 'Prestarle 300 soles de tu bolsillo mientras se resuelve.',
        res: { q: 'aceptable', fx: { personas: 3, etica: -2 },
          out: 'Don Héctor se emociona. Pero el problema de fondo sigue igual, y ahora mezclaste tu dinero con tu trabajo.',
          pro: { ok: 'Tu gesto es generoso.', risk: 'Bienestar no es tu bolsillo: existen préstamos de emergencia y procedimientos.', info: 'Pregúntale a Nelly por el fondo de emergencia de la empresa.' },
          kusi: ['pensando', 'Buen corazón… ¿y el trámite?'] } },
    ],
    rules: [[LEY, 'Ley 26790: los primeros 20 días de incapacidad los paga el empleador; desde el día 21, EsSalud otorga el subsidio.']],
    mirada: {
      ve: 'Cuando un pago no llega, la persona suele imaginar lo peor. Una profesional de bienestar traduce la norma a palabras simples y busca el punto exacto donde el trámite se detuvo.',
      visual: { tipo: 'linea', titulo: 'El descanso médico de Don Héctor', hitos: [['Días 1 a 20', 'Paga la empresa'], ['Día 21 en adelante', 'Subsidio de EsSalud'], ['Para cobrarlo', 'Hay que presentar la solicitud'], ['Hoy', 'Nadie la había presentado']] },
      normas: [{ ley: 'Ley 26790, de Modernización de la Seguridad Social en Salud', dice: 'Durante los primeros 20 días de incapacidad, el empleador paga la remuneración; desde el día 21, se otorga el subsidio por incapacidad temporal.', practica: 'Don Héctor no estaba despedido: estaba en el día 40 sin solicitud de subsidio.' }],
    },
  },
  {
    id: 'w4', t: '13:50', ch: 'presencial', who: 'maribel', titulo: 'La hora de Maribel', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Laboratorio de calidad', show: ['personas', 'cumplimiento', 'etica'],
    body: () => `<p>Maribel volvió de su licencia de maternidad hace una semana. Su bebé tiene tres meses y se queda con su mamá en Monsefú.</p><p>«Mi jefe dice que tome mi hora de lactancia al final del día, para que no afecte los análisis. Pero <mark class="clave">yo necesito extraerme leche a media mañana</mark> y no hay dónde. Lo hago en el baño.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que la hora es su derecho, que el horario se acuerda considerando su necesidad, y que le plantearás a la gerencia el tema del lactario.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 5, confianza: -1 }, rel: { maribel: 1 }, flags: ['maribel_hora'],
          out: 'Maribel respira. Acuerdan dividir la hora: media hora a las 10:30 y media al salir. Su jefe acepta cuando le explicas que la norma está para la necesidad de la madre y el bebé.',
          pro: { ok: 'Aplicas el derecho pensando en la necesidad real, no en la comodidad del área.', risk: 'Abriste el tema del lactario: ahora tienes que sostenerlo.', info: 'Revisa cuántas trabajadoras en edad fértil tiene la planta.' },
          kusi: ['celebra', 'Ni un día más en el baño. ¡Qué divino!'] } },
      { id: 'b', label: 'Decirle que siga la indicación de su jefe: él conoce el laboratorio, ella acaba de volver y no conviene empezar con un conflicto.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -3 }, flags: ['maribel_fin'],
          out: 'Maribel asiente en silencio. Mañana volverá a extraerse leche en el baño, a escondidas.',
          pro: { ok: 'Evitas un roce con su jefe.', risk: 'La hora de lactancia existe para la necesidad de la madre y el bebé, no para la comodidad del área.' },
          kusi: ['triste', 'En el baño no…'] } },
    ],
    rules: [[LEY, 'Una hora diaria de permiso por lactancia hasta que el hijo cumpla un año (Ley 27240 y modificatorias).'], [LEY, 'Lactario obligatorio en centros con 20 o más mujeres en edad fértil (Ley 29896).']],
    mirada: {
      ve: 'Muchos derechos se pierden no porque se nieguen, sino porque se aplican «como le conviene al área». En bienestar, aplicar bien la norma es pensar en para qué existe.',
      visual: { tipo: 'cambio', titulo: 'Lo que cambia para Maribel', pares: [['Hora de lactancia al final del día', 'Hora acordada según su necesidad'], ['Extraerse leche en el baño', 'Un lactario digno'], ['«No conviene un conflicto»', 'Un derecho explicado con calma']] },
      normas: [{ ley: 'Ley 29896, sobre lactarios', dice: 'Los centros de trabajo con 20 o más mujeres en edad fértil deben implementar un lactario.', practica: 'Una planta con 1,500 personas casi con seguridad supera ese número.' }],
    },
  },
  {
    id: 'w5', t: '16:20', ch: 'whatsapp', who: null, titulo: 'Escribirle a Augusto', banner: 'assets/foto/oficina-abierta.webp', show: ['confianza', 'cumplimiento', 'personas'],
    body: () => `<p>Augusto, el gerente de campo, decide sobre los espacios de la planta. Es práctico y desconfía de «los gastos de Bienestar». Le escribes sobre el lactario.</p>`,
    type: 'compose', enviaA: 'augusto', para: 'Para: Augusto Bravo · Gerente de campo', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'abre', t: 'Cómo abres', ops: [
        { id: 'a1', t: 'Ing. Bravo, buenas tardes. Le escribe la asistente de Bienestar.', ok: true, por: 'Formal y claro: aún no te conoce.' },
        { id: 'a2', t: 'Ingeniero, tenemos un problema grave.', ok: false, por: 'Alarmar no ayuda a que te escuche.' },
      ] },
      { id: 'dato', t: 'El dato', ops: [
        { id: 'd1', t: 'La Ley 29896 exige un lactario en centros con 20 o más mujeres en edad fértil, y nosotros superamos ese número.', ok: true, por: 'Le das el porqué en una línea.' },
        { id: 'd2', t: 'Las mamás se están quejando mucho.', ok: false, por: 'Vago: no dice por qué es una obligación.' },
      ] },
      { id: 'propuesta', t: 'La propuesta', ops: [
        { id: 'p1', t: 'Encontré un espacio que podría servir: la sala pequeña junto al tópico, que hoy es depósito.', ok: true, por: 'Llevas una solución concreta y barata.' },
        { id: 'p2', t: 'Necesitamos que construyan un lactario.', ok: null, por: 'Correcto, pero suena a gasto grande.' },
      ] },
      { id: 'cierre', t: 'Cierre', ops: [
        { id: 'c1', t: '¿Podría darme diez minutos esta semana para verlo juntos?', ok: true, por: 'Pides una acción concreta.' },
        { id: 'c2', t: 'Quedo atenta.', ok: null, por: 'Le deja toda la iniciativa a él.' },
      ] },
    ],
    res: sel => {
      const buenas = ['a1', 'd1', 'p1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas >= 4 ? 'buena' : buenas >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, cumplimiento: sel.dato === 'd1' ? 3 : 0 }, rel: { augusto: q === 'buena' ? 1 : 0 },
        flags: ['lactario_pedido'], cartera: { lactario: q === 'buena' ? 'Propuesta enviada: sala junto al tópico' : 'Pedido enviado sin propuesta' },
        out: q === 'buena' ? 'Augusto responde a la hora: «Recibido. Lo vemos con Administración». No es un sí, pero tampoco un no.' : 'Augusto responde: «¿Y eso cuánto cuesta?». Te toca otra ronda.',
        pro: { ok: 'Norma en una línea, solución barata y un pedido concreto: así se convence a un gerente práctico.', info: 'Lleva fotos del espacio y una lista corta: refrigeradora, silla, lavadero y privacidad.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Con solución en la mano es más fácil.' : 'Faltó la propuesta concreta.'],
      };
    },
    rules: [[LEY, 'Ley 29896: lactario en centros con 20 o más mujeres en edad fértil.'], [BP, 'Con un gerente práctico, lleva la norma, una solución y un pedido concreto.']],
    mirada: {
      ve: 'Bienestar convence más cuando llega con soluciones que con quejas. Un depósito que se vuelve lactario cuesta poco y cambia la vida de muchas madres.',
      visual: { tipo: 'mensaje', titulo: 'Un pedido que se puede aprobar', txt: 'Ing. Bravo, buenas tardes. La Ley 29896 exige un lactario en centros con 20 o más mujeres en edad fértil, y nosotros superamos ese número. Encontré un espacio que podría servir: la sala pequeña junto al tópico, que hoy es depósito. ¿Podría darme diez minutos esta semana para verlo juntos?' },
    },
  },
  {
    id: 'w6', t: '18:00', ch: 'correo', who: null, titulo: 'Para Nelly', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Nelly Ramírez', to: 'Asistente de Bienestar Social', asunto: '¿Cómo te fue?' },
    body: () => `<p>Perdón por dejarte sola en tu primer día. ¿Cómo te fue? <mark class="clave">¿Hay algo que deba saber hoy?</mark></p><p>Nelly</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Lo que encontraste y lo que necesitas de ella.',
        res: { q: 'buena', fx: { confianza: 5 }, rel: { nelly: 1 }, responde: 'Nelly: 1) A Don Héctor nadie le presentó la solicitud de subsidio: lo vemos mañana con Planillas. 2) El Excel de casos tenía diagnósticos visibles para 40 supervisores; ya lo restringimos con TI. 3) Le propuse a Augusto un lactario. Necesito saber cómo funciona el fondo de emergencia.',
          out: 'Nelly responde: «Lo de Don Héctor me lo voy a reprochar toda la semana. Gracias. Mañana te explico el fondo».', kusi: ['feliz', 'Primer día y ya cambiaste tres cosas.'] } },
      { id: 'b', label: 'Que todo bien y que mañana sigues con las carpetas.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Nelly: todo bien, mañana sigo con las carpetas 😊',
          out: 'Nelly se queda tranquila, sin saber lo del Excel ni lo de Don Héctor.', kusi: ['pensando', 'Había cosas que Nelly debía saber.'] } },
    ],
    mirada: { ve: 'Un buen reporte en bienestar cuenta lo que se destrabó y lo que todavía necesita una decisión.' },
  },
];
