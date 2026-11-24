// Analista de Comunicación Interna y Employer Branding · Capítulo 5 · «El comunicado» · Semana 1, viernes.
// Hilo de las dos semanas: lo que dices afuera debe ser verdad adentro. Hoy el banco cierra 8 agencias y tú lo cuentas.
// Normas citadas (texto oficial en docs/normas/txt):
// - D.S. 003-97-TR (TUO del D. Leg. 728): art. 9 (el empleador puede modificar turnos, días u horas y la forma y modalidad de la
//   prestación dentro de criterios de razonabilidad); art. 30 c) (es acto de hostilidad el traslado a lugar distinto con el
//   propósito de ocasionar perjuicio). Archivo: 1_DECRETO_SUPREMO_003_27_03_1997.txt
// - Ley 29571 (Código de Protección y Defensa del Consumidor), art. 2: la información al consumidor debe ser veraz, suficiente,
//   de fácil comprensión, apropiada y oportuna. Archivo: 1244218-ley-29571_spij.txt

export const CAP = {
  n: 5, titulo: 'El comunicado', dia: 'Semana 1, viernes', foto: 'assets/foto2/mesa-mujeres.webp',
  lugar: 'Banco Andino · Sede central de San Isidro, piso 9',
  inicio: '08:00', fin: '19:30', cierreHora: '19:10',
  apertura: 'Viernes, 8 de la mañana. Fiorella te espera con la puerta cerrada y cara de no haber dormido: el lunes, el banco cierra 8 agencias en Lima. Hoy se le cuenta a la gente.', boton: 'Cerrar la puerta',
  kusi: 'Comunicar algo difícil es cuidar a la gente con las palabras. ¡Respira y vamos!',
  lead: 'Ordenaste quién se entera primero, limpiaste un comunicado lleno de eufemismos, respondiste las preguntas que de verdad importan, frenaste un post para clientes que llegaba antes que la gente y cuidaste una confidencia.',
  reflexion: '¿Cómo te gustaría enterarte tú de que tu lugar de trabajo cierra?',
  siguiente: { n: 6, titulo: 'El audio', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'cierre', p: 'Comunicado de cierre de 8 agencias', j: 'Fiorella · Operaciones · Legal', d: 4, e: 'Hoy, antes de las 5' },
  { id: 'faq', p: 'Preguntas frecuentes para los 64 trasladados', j: 'Tú · Renzo', d: 4, e: 'Hoy' },
  { id: 'campana', p: 'Campaña «Tu primer gran trabajo»', j: 'Marco', d: 4, e: 'Sesión de fotos mañana' },
  { id: 'diagnostico', p: 'Diagnóstico de reputación', j: 'Fiorella', d: 4, e: 'Entregado' },
];

export const FUTURO = {
  orden_bien: ['Los 64 trasladados se enteraron en persona, por sus jefes, antes que nadie.', 'Habrá menos espacio para rumores el lunes.'],
  orden_mal: ['El orden de la comunicación quedó al revés.', 'El rumor llegará antes que la verdad. Capítulo 6.'],
  comunicado_claro: ['El comunicado dice qué pasa, a quién, desde cuándo y qué no cambia.', 'Te servirá para frenar el audio del lunes.'],
  comunicado_vago: ['El comunicado habla de «optimizar la red de canales».', 'Nadie entendió si había despidos. Capítulo 6.'],
  faq_util: ['Las preguntas frecuentes responden lo que la gente teme.', 'Renzo las usará con cada trasladado.'],
  empleados_primero: ['Pediste que el post para clientes saliera después de hablar con la gente.', 'Marco te lo cobrará… o te lo agradecerá.'],
  clientes_primero: ['El post para clientes salió antes que el comunicado interno.', 'Varios cajeros se enteraron por Facebook.'],
  jhoselyn_reserva: ['No le adelantaste a Jhoselyn lo de Collique antes de la hora.', 'Ella entendió por qué. Su prima se enteró por su jefa.'],
  jhoselyn_filtro: ['Le contaste a Jhoselyn lo de Collique antes del anuncio.', 'Su prima lo contó en un grupo. Capítulo 6.'],
};

export const CHATS = {
  equipo: { n: 'Experiencia del Colaborador', sub: 'Fiorella, Kiara y tú', c: '#B7791F' },
  fiorella: { n: 'Fiorella Chávez', sub: 'Jefa de Experiencia del Colaborador', who: 'fiorella' },
  marco: { n: 'Marco Delgado', sub: 'Gerente de Marketing', who: 'gerente' },
  jhoselyn: { n: 'Jhoselyn Ccori', sub: 'Cajera · agencia Comas', who: 'cajera' },
  renzo: { n: 'Renzo Salas', sub: 'Relaciones Laborales', c: '#4A5568' },
  difusion: { n: 'Andino Contigo · Agencias', sub: 'Canal de difusión · 46 supervisores', c: '#2F6B3F' },
};

export const WSP = [
  { chat: 'equipo', t: '08:05', de: 'Fiorella', txt: '🔒 Hoy todo lo del cierre es confidencial hasta las 5 p. m. Nada por WhatsApp, por favor, ni en el grupo.' },
  { chat: 'renzo', t: '09:20', de: 'Renzo', txt: 'Te confirmo: 64 personas trasladadas, ningún despido. Mismo sueldo, mismo puesto. Comas recibe a 9 de Collique (y ahí se llena la ventanilla vacía 👀).' },
  { chat: 'marco', t: '10:45', de: 'Marco', txt: 'El post para clientes está listo: «Nos modernizamos para estar más cerca de ti» 🚀 Sale a las 12.' },
  { chat: 'jhoselyn', t: '14:10', de: 'Jhoselyn', txt: 'Señorita, ¿es verdad que cierran Collique? Mi prima Yeni trabaja ahí y está llorando, dicen que los botan a todos 😢' },
  { chat: 'difusion', t: '17:30', de: 'Abel', txt: 'Recibido. Mis 9 nuevos de Collique llegan el lunes. Los vamos a recibir bien.', si: 'comunicado_claro' },
  { chat: 'fiorella', t: '19:05', de: 'Fiorella', txt: 'Semana uno, superada. Te ganaste el fin de semana. El lunes va a estar movido 🫂' },
];

export const CORREOS = [
  { t: '08:10', de: 'Operaciones · Red de Agencias', para: 'Fiorella Chávez; Comunicación Interna; Relaciones Laborales', asunto: 'CONFIDENCIAL · Cierre de agencias', html: '<p>A partir del lunes cierran 8 agencias en Lima (Collique, Puente Piedra, Breña, Rímac, Surquillo, Chorrillos, San Juan de Lurigancho Este y Ate Vitarte). Las 64 personas que trabajan ahí serán trasladadas a agencias cercanas, en el mismo puesto y con la misma remuneración. Las reuniones presenciales con cada equipo son hoy a las 3 p. m.</p>' },
  { t: '11:00', de: 'Legal', para: 'Comunicación Interna', asunto: 'Borrador del comunicado', html: '<p>Adjuntamos el borrador validado legalmente. Por favor, no cambiar el sentido. Saludos.</p>' },
];

export const QUIZ = [
  { q: 'Cierran 8 agencias. ¿Quién debe enterarse primero?', ops: ['Los clientes, por redes', 'Las personas afectadas, en persona y por su jefe', 'Toda la red por correo', 'La prensa'], ok: 1, por: 'Quien vive el cambio tiene que saberlo antes que nadie, y de una persona, no de una pantalla.' },
  { q: 'Según el art. 9 del D.S. 003-97-TR, el empleador puede modificar la forma y modalidad del trabajo…', ops: ['Sin ningún límite', 'Dentro de criterios de razonabilidad y según las necesidades del centro de trabajo', 'Solo con orden judicial', 'Solo si el trabajador firma'], ok: 1, por: 'El art. 9 permite introducir cambios dentro de criterios de razonabilidad.' },
  { q: 'Un traslado se vuelve acto de hostilidad cuando…', ops: ['El trabajador no lo quiere', 'Se hace con el propósito de ocasionarle perjuicio', 'La agencia nueva es más grande', 'Se comunica por correo'], ok: 1, por: 'El art. 30 c) del D.S. 003-97-TR considera hostilidad el traslado a lugar distinto con el propósito de ocasionar perjuicio.' },
  { q: '«Se optimizará la red de canales físicos con impacto mínimo en el talento». ¿Qué tiene de malo?', ops: ['Nada, es elegante', 'No dice qué pasa, a quién ni desde cuándo, y deja espacio al miedo', 'Es muy corto', 'Usa palabras en castellano'], ok: 1, por: 'Los eufemismos no suavizan una mala noticia: la vuelven sospechosa.' },
  { q: 'Para los clientes de las agencias que cierran, la Ley 29571 pide que la información sea…', ops: ['Solo publicitaria', 'Veraz, suficiente, de fácil comprensión, apropiada y oportuna', 'Enviada por carta notarial', 'Opcional'], ok: 1, por: 'El art. 2 de la Ley 29571 describe así la información que el proveedor debe dar al consumidor.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '08:30', ch: 'documento', who: 'fiorella', titulo: '¿Quién se entera primero?', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de Experiencia del Colaborador, puerta cerrada', show: ['personas', 'calidad'],
    body: () => `<p>Fiorella dibuja en la pizarra ocho círculos rojos sobre un mapa de Lima. «Ningún despido, eso es lo bueno. Pero 64 personas cambian de agencia el lunes. <mark class="clave">Si el orden falla, se enteran por Facebook</mark>.»</p><p>Te pide el orden de la comunicación de hoy.</p>`,
    type: 'secuencia', prompt: 'Ordena quién se entera y cuándo. Usa las flechas.', boton: 'Fijar el orden',
    items: [
      { id: 'zona', t: '9:00 · Gerentes de zona y supervisores de las 8 agencias, en reunión privada', por: 'Ellos darán la noticia: tienen que entenderla primero.' },
      { id: 'recep', t: '11:00 · Supervisores de las agencias que reciben gente', por: 'Para que preparen la bienvenida.' },
      { id: 'equipos', t: '3:00 p. m. · Cada uno de los 64, en persona, por su supervisor y con alguien de Gestión Humana', por: 'Cara a cara, con tiempo para preguntas.' },
      { id: 'red', t: '5:00 p. m. · Comunicado a toda la red y al canal de agencias', por: 'Recién cuando los afectados ya lo saben.' },
      { id: 'clientes', t: '5:30 p. m. · Aviso a los clientes, en agencias y redes', por: 'Con información útil: a dónde ir desde el lunes.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, calidad: q === 'buena' ? 3 : 0 }, rel: { fiorella: q === 'buena' ? 1 : 0 },
        flags: [q === 'riesgosa' ? 'orden_mal' : 'orden_bien'],
        cartera: { cierre: q === 'riesgosa' ? 'Orden de comunicación al revés' : 'Orden: jefes, receptores, afectados, red, clientes' },
        out: q === 'buena' ? 'Fiorella copia tu orden en la pizarra y le toma foto. «Esto va a Gerencia ahora. Nadie se entera por Facebook.»' : 'Fiorella corrige un par de pasos: «Primero, siempre, los que viven el cambio».',
        pro: { ok: 'Quien vive el cambio lo sabe primero, y de una persona.', risk: 'Si alguien de afuera se entera antes que los afectados, el rumor gana.', info: 'A la reunión de las 3, que vaya alguien de Gestión Humana con las respuestas por escrito.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Cara a cara antes que la pantalla!' : 'El orden también comunica.'],
      };
    },
    rules: [[BP, 'En un cambio difícil, primero los afectados, en persona; luego el resto; al final, afuera.']],
    mirada: {
      ve: 'En comunicación de cambios, el orden es el mensaje. Si un cajero de Breña se entera por un post de Facebook de que su agencia cierra, ya no importa lo bien escrito que esté el comunicado: el banco le dijo que él era el último en importar.',
      visual: { tipo: 'flujo', titulo: 'El orden de hoy', pasos: ['Jefes de las 8', 'Agencias receptoras', 'Los 64, en persona', 'Toda la red', 'Clientes'], aqui: 0 },
    },
  },
  {
    id: 'd2', t: '11:15', ch: 'documento', who: null, titulo: 'El borrador de Legal', banner: 'assets/foto/mesa-papeles.webp', show: ['calidad', 'cumplimiento', 'personas'],
    body: () => `<p>Llega el borrador «validado legalmente». Tiene un párrafo largo, cero nombres de agencias y muchas palabras que terminan en «-ción».</p><p>Lo lees pensando en Yeni, de Collique, que lo va a leer en su celular a las 5. <mark class="clave">¿Qué entendería?</mark></p>`,
    type: 'flag', prompt: 'Marca las líneas que confunden, asustan o pueden ser un riesgo.',
    doc: { t: 'Comunicado interno · Transformación de la red', sub: 'Borrador de Legal · validado' },
    lines: [
      { id: 'opt', t: '«En el marco de la optimización de nuestra red de canales físicos…»', bad: BP, why: 'Nadie sabe qué significa. Di «cerramos 8 agencias».' },
      { id: 'min', t: '«…con un impacto mínimo en nuestro talento.»', bad: BP, why: '«Impacto mínimo» suena a despidos pequeños. Lo que hay que decir es: «nadie pierde su trabajo».' },
      { id: 'disp', t: '«Los colaboradores serán reubicados según la disponibilidad operativa, pudiendo asignárseles cualquier sede de Lima y provincias.»', bad: LEY, why: 'Además de asustar, un traslado lejano y sin razón puede ser acto de hostilidad si busca perjudicar (D.S. 003-97-TR, art. 30 c). Y no es lo que Operaciones decidió: son agencias cercanas.' },
      { id: 'sueldo', t: '«Las 64 personas mantienen su puesto y su remuneración.»' },
      { id: 'fecha', t: '«El cambio rige desde el lunes.»' },
      { id: 'reserva', t: '«Se solicita no comentar la información con clientes ni terceros bajo responsabilidad.»', bad: BP, why: 'Amenazante y tarde: a las 5 la noticia ya es pública. Mejor: «los clientes recibirán un aviso con su nueva agencia».' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Se te pasa la línea de «cualquier sede de Lima y provincias». A las 5, alguien la va a leer como una amenaza.' : `Marcas ${hitsLey} riesgo legal y varias frases que asustan. Legal acepta tu versión: «Cerramos 8 agencias. Nadie pierde su trabajo. Las 64 personas pasan a una agencia cercana, en el mismo puesto y con el mismo sueldo, desde el lunes».`,
      flags: missLey ? ['comunicado_vago'] : ['comunicado_claro'],
      fx: { calidad: missLey ? -2 : 5, cumplimiento: missLey ? -3 : 3, personas: missLey ? -2 : 3 },
      cartera: { cierre: missLey ? 'Comunicado con frases que asustan' : 'Comunicado claro: qué, quiénes, desde cuándo y qué no cambia' },
      pro: { ok: 'Un comunicado difícil dice qué pasa, a quién, desde cuándo y, sobre todo, qué no cambia.', risk: 'Lo que el comunicado no aclara, lo completa el miedo.' },
      kusi: missLey ? ['preocupado', '¿«Lima y provincias»? Eso va a asustar a todos.'] : ['feliz', '«Nadie pierde su trabajo». ¡Eso primero!'],
    }),
    rules: [[LEY, 'El empleador puede cambiar la forma y modalidad del trabajo dentro de criterios de razonabilidad (D.S. 003-97-TR, art. 9).'], [LEY, 'Es acto de hostilidad el traslado a lugar distinto con el propósito de ocasionar perjuicio (D.S. 003-97-TR, art. 30 c).']],
    mirada: {
      ve: 'Los comunicados «validados» suelen proteger a la empresa de un riesgo legal y crear otro: el de que nadie entienda. Tu trabajo es mantener lo que Legal necesita y traducir el resto a lo que una cajera necesita saber.',
      visual: { tipo: 'cambio', titulo: 'De Legal a la gente', pares: [['«Optimización de la red de canales»', 'Cerramos 8 agencias'], ['«Impacto mínimo en el talento»', 'Nadie pierde su trabajo'], ['«Cualquier sede de Lima y provincias»', 'Una agencia cercana, desde el lunes']] },
      normas: [{ ley: 'D.S. 003-97-TR, art. 30 c)', dice: 'Es acto de hostilidad equiparable al despido el traslado del trabajador a lugar distinto de aquel en el que presta habitualmente servicios, con el propósito de ocasionarle perjuicio.', practica: 'Por eso los traslados se deciden por cercanía y se comunican con la razón: cierre de la agencia, no castigo.' }],
    },
  },
  {
    id: 'd3', t: '12:30', ch: 'documento', who: null, titulo: 'Las preguntas que importan', banner: 'assets/esc/dudas.webp', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>Renzo te pide una hoja de preguntas frecuentes para las reuniones de las 3. Solo cabe una hoja: <mark class="clave">tres preguntas grandes</mark>, con su respuesta.</p><p>Te comes un triple de pollo frente a la pantalla.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres preguntas que van en la hoja.', boton: 'Mandar a Renzo', resumen: 'Respondiste',
    cols: ['Pregunta', 'Respuesta que tienes'],
    rows: [
      { id: 'despido', cells: ['¿Me van a despedir?', 'No. Nadie pierde su trabajo.'] },
      { id: 'donde', cells: ['¿A qué agencia voy y desde cuándo?', 'A una agencia cercana, el lunes. Tu supervisor te dice cuál hoy.'] },
      { id: 'sueldo', cells: ['¿Cambia mi sueldo, mi puesto o mi horario?', 'Sueldo y puesto, no. Horario: el de tu nueva agencia; si te complica, conversamos.'] },
      { id: 'por', cells: ['¿Por qué cierran?', 'Menos clientes presenciales en esas zonas.'] },
      { id: 'ahorro', cells: ['¿Cuánto ahorra el banco?', 'Es información de Finanzas.'] },
      { id: 'quien', cells: ['¿Quién decidió esto?', 'El directorio.'] },
    ],
    score: { despido: 3, donde: 3, sueldo: 3, por: 1, ahorro: -2, quien: -1 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['faq_util'] : [],
        cartera: { faq: q === 'buena' ? 'Hoja de preguntas: despido, destino, sueldo y horario' : 'Hoja de preguntas incompleta' },
        out: q === 'buena' ? 'Renzo imprime 70 copias. «Esto es exactamente lo que van a preguntar, y en ese orden.»' : 'La hoja responde cosas reales, pero no la que todos tienen en la garganta.',
        pro: { ok: 'Respondes primero el miedo, luego lo práctico.', risk: 'Si la hoja no dice «nadie pierde su trabajo» arriba, nadie leerá lo demás.', info: 'Agrega a quién llamar si el nuevo horario no le cuadra a alguien.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Miedo, lugar y sueldo. ¡Justo eso!' : '¿Qué es lo primero que preguntarías tú?'],
      };
    },
    rules: [[BP, 'En las preguntas frecuentes, primero lo que la gente teme; después, lo práctico.']],
    mirada: {
      ve: 'Cuando alguien recibe una noticia así, escucha muy poco hasta que le responden la pregunta del miedo. Después pregunta lo práctico: dónde, cuándo, cuánto. El porqué del negocio casi nunca es lo primero.',
      visual: { tipo: 'embudo', titulo: 'Lo que la gente pregunta, en orden', niveles: [['¿Me despiden?', 64], ['¿A dónde voy?', 64], ['¿Cambia mi sueldo u horario?', 60], ['¿Por qué?', 20]] },
    },
  },
  {
    id: 'd4', t: '13:40', ch: 'llamada', who: 'gerente', titulo: 'El post de las 12', banner: 'assets/foto/reunion-jefa.webp', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>Ves en el calendario de redes que Marco programó el post para clientes. Lo llamas: lo movieron a las 2. Faltan veinte minutos.</p><p>«Los clientes tienen que saber dónde ir el lunes, la ley de consumo nos obliga a informar. <mark class="clave">Y la gente ya se va a enterar a las 3</mark>, ¿cuál es el drama?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedirle que lo mueva a las 5:30: la información a clientes tiene que ser oportuna, y lo será igual, porque el cambio rige el lunes. Pero 64 personas no pueden leer en Facebook que su agencia cierra antes de que su jefe se lo diga.',
        res: { q: 'buena', fx: { etica: 4, personas: 4 }, rel: { gerente: -1 }, flags: ['empleados_primero'],
          out: 'Marco suspira. «Ya, a las 5:30. Pero me ayudas a que el post diga a qué agencia va cada cliente.» Trato hecho.',
          pro: { ok: 'Los clientes reciben información veraz y a tiempo; la gente se entera primero.', risk: 'Marco tuvo que mover su calendario por ti otra vez.', info: 'Ayúdalo con lo que pidió: es tu forma de pagar el favor.' },
          kusi: ['animo', 'Clientes informados, gente respetada. ¡Las dos!'] } },
      { id: 'b', label: 'Dejarlo a las 2: el banco tiene que informar a los clientes y una hora de diferencia no cambia mucho.',
        res: { q: 'riesgosa', fx: { personas: -5, confianza: -2 }, flags: ['clientes_primero'],
          out: 'A las 2:10, una cajera de Breña ve el post en su celular, detrás de la ventanilla. Cuando su supervisor la llama a las 3, ya lloró en el baño.',
          pro: { ok: 'Los clientes se enteran temprano.', risk: 'Una hora basta para que un equipo se entere por la pantalla de lo que debía escuchar de su jefe.' },
          kusi: ['triste', 'Se enteró por Facebook…'] } },
      { id: 'c', label: 'Pedirle que lo suspenda hasta el lunes: los clientes lo verán en la puerta de la agencia cuando lleguen.',
        res: { q: 'aceptable', fx: { personas: 2, cumplimiento: -3 }, rel: { gerente: -1 },
          out: 'Marco se niega: «El lunes llega un jubilado a cobrar su pensión y se encuentra la reja cerrada. ¿Eso quieres?». Tiene razón. Lo pasan a las 5:30.',
          pro: { ok: 'Proteges a la gente.', risk: 'Avisar a los clientes recién en la puerta no es información oportuna (Ley 29571, art. 2).' },
          kusi: ['pensando', 'Los clientes también merecen saberlo a tiempo.'] } },
    ],
    rules: [[LEY, 'La información al consumidor debe ser veraz, suficiente, de fácil comprensión, apropiada y oportuna (Ley 29571, art. 2).'], [BP, 'Lo externo nunca antes de lo interno, sobre todo cuando cambia la vida de alguien.']],
    mirada: {
      ve: 'Marco no está equivocado: los clientes tienen derecho a saber a dónde ir. Lo que está en juego no es si se informa, sino cuándo. Unas horas de diferencia separan a un banco que respeta a su gente de uno que la trata como público.',
      visual: { tipo: 'linea', titulo: 'El viernes del cierre', hitos: [['9:00', 'Jefes de zona'], ['11:00', 'Agencias receptoras'], ['15:00', 'Los 64, en persona'], ['17:00', 'Toda la red'], ['17:30', 'Clientes']] },
      normas: [{ ley: 'Ley 29571, art. 2', dice: 'La información que el proveedor brinda al consumidor debe ser veraz, suficiente, de fácil comprensión, apropiada, oportuna y fácilmente accesible.', practica: 'Oportuna no significa «antes que los propios trabajadores»: el aviso de las 5:30 llega a tiempo para el lunes.' }],
    },
  },
  {
    id: 'd5', t: '14:15', ch: 'whatsapp', who: 'cajera', titulo: 'La prima de Jhoselyn', banner: 'assets/foto2/tension.webp', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>Jhoselyn te escribe: «Señorita, ¿es verdad que cierran Collique? Mi prima Yeni trabaja ahí y está llorando, dicen que <mark class="clave">los botan a todos</mark> 😢».</p><p>Faltan 45 minutos para que Yeni lo escuche de su supervisora. Sabes que nadie será despedido.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responderle que no puedes adelantar nada, pero que a las 3 su prima tendrá una reunión con toda la información, y que no crea lo que circula antes.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 3 }, rel: { cajera: 0 }, flags: ['jhoselyn_reserva'],
          envia: [['jhoselyn', 'Jhoselyn, no puedo adelantarte nada, y no es por desconfianza. Lo que sí te digo: a las 3 tu prima va a tener una reunión con toda la información, en persona. No le hagan caso a lo que circula antes, ¿ya?']],
          out: 'Jhoselyn responde a las 3:40: «Ya habló con su jefa. Gracias por no decirme nada, en serio: así no me metí en problemas».',
          pro: { ok: 'Mantienes la reserva sin mentir y le das algo útil: cuándo sabrá la verdad.', risk: 'Esos 45 minutos de angustia de Yeni no los puedes evitar.' },
          kusi: ['animo', 'Ni mentiste ni filtraste. ¡Difícil y bien!'] } },
      { id: 'b', label: 'Decirle por privado que nadie será despedido: es una buena noticia y quitarle el miedo a Yeni no le hace daño a nadie.',
        res: { q: 'aceptable', fx: { personas: 2, cumplimiento: -3, etica: -1 }, rel: { cajera: 1 }, flags: ['jhoselyn_filtro'],
          envia: [['jhoselyn', 'Tranquila: nadie va a ser despedido. Pero no le digas a nadie que te lo dije 🙏']],
          out: 'Yeni se calma. Y lo comenta en el grupo de cajeros de Lima Norte: «Me dijeron de la sede que nadie se va». A las 3, tres supervisores llaman a Renzo preguntando quién filtró.',
          pro: { ok: 'Le quitas el miedo a una persona.', risk: 'Una información adelantada por privado nunca se queda privada.' },
          kusi: ['pensando', 'Buena intención… y un mensaje que viajó.'] } },
      { id: 'c', label: 'No responderle hasta después de las 5: así no te comprometes.',
        res: { q: 'riesgosa', fx: { personas: -3, confianza: -2 }, rel: { cajera: -1 },
          out: 'Jhoselyn ve el doble check azul. A las 5:30 te escribe: «Ya sabía que la sede no responde».',
          pro: { ok: 'No filtras nada.', risk: 'El silencio, para alguien asustado, se lee como confirmación de lo peor.' },
          kusi: ['triste', 'Ni una línea… y ella confiaba en ti.'] } },
    ],
    rules: [[BP, 'Ante una información reservada: no mientas, no filtres y di cuándo y cómo se sabrá.']],
    mirada: {
      ve: 'La reserva no es indiferencia. Hay una frase que sirve en estos casos: «no puedo adelantarte nada, pero hoy a tal hora lo sabrás de forma oficial». No miente, no filtra y le da a la persona algo a qué agarrarse.',
      visual: { tipo: 'balanza', a: { t: 'Adelantar la buena noticia', items: ['Calma a Yeni', 'Viaja por grupos', 'Rompe la reserva'] }, b: { t: '«A las 3 lo sabrá»', items: ['No mientes', 'No filtras', 'Le das una hora'] } },
    },
  },
  {
    id: 'd6', t: '17:00', ch: 'whatsapp', who: null, titulo: 'El mensaje para toda la red', banner: 'assets/foto2/callcenter.webp', show: ['calidad', 'personas', 'confianza'],
    body: (n, F) => `<p>Las 64 reuniones terminaron. ${F.has('orden_bien') ? 'Renzo te escribe: «Nadie se enteró antes. Hubo lágrimas, pero también preguntas buenas».' : 'Renzo te escribe: «Algunos ya sabían. Fue más difícil».'}</p><p>Ahora toca el canal de las 46 agencias. Recuerda tu promesa: <mark class="clave">corto, útil y a tiempo</mark>.</p>`,
    type: 'compose', enviaA: 'difusion', para: 'Para: Andino Contigo · Agencias (46 supervisores)', boton: 'Enviar a las 5:00',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué pasa', ops: [
        { id: 'q1', t: 'Equipo: desde el lunes cerramos 8 agencias en Lima. Nadie pierde su trabajo.', ok: true, por: 'La noticia y el miedo, resueltos en dos líneas.' },
        { id: 'q2', t: 'Equipo: como parte de nuestra transformación, la red se reorganiza.', ok: false, por: 'Suena a eufemismo. Abre la puerta a los rumores.' },
      ] },
      { id: 'quien', t: 'A quiénes afecta', ops: [
        { id: 'w1', t: 'Las 64 personas de esas agencias ya conversaron con sus jefes y pasan a una agencia cercana, en el mismo puesto y con el mismo sueldo.', ok: true, por: 'Concreto y verificable.' },
        { id: 'w2', t: 'Las personas involucradas serán reubicadas oportunamente.', ok: false, por: '¿Quiénes? ¿Cuándo? ¿Dónde?' },
      ] },
      { id: 'pide', t: 'Qué pides', ops: [
        { id: 'p1', t: 'Si tu agencia recibe compañeros el lunes, recibámoslos bien. Cualquier duda, escríbanme por privado.', ok: true, por: 'Una acción concreta y una puerta abierta.' },
        { id: 'p2', t: 'Por favor, eviten comentarios y especulaciones.', ok: null, por: 'Entendible, pero suena a mordaza.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'w1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : (sel.que === 'q2' && sel.quien === 'w2') ? 'riesgosa' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'riesgosa' ? -3 : 1, personas: q === 'buena' ? 3 : 0, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['comunicado_claro'] : q === 'riesgosa' ? ['comunicado_vago'] : [],
        cartera: { cierre: q === 'buena' ? 'Comunicado enviado a toda la red' : 'Comunicado enviado con dudas abiertas' },
        out: q === 'buena' ? 'Don Abel responde primero: «Recibido. Mis 9 nuevos de Collique llegan el lunes. Los vamos a recibir bien». Lo siguen otros supervisores, con corazones y pulgares.' : q === 'riesgosa' ? 'Nadie responde en el canal. Pero en los grupos privados empiezan las preguntas: «¿Reorganiza? ¿Eso es despido?».' : 'El mensaje llega. Algunos supervisores preguntan por privado lo que el mensaje no dijo.',
        pro: { ok: 'Qué pasa, a quién, qué no cambia y qué hacer.', risk: 'Cada palabra vaga es un espacio que llenará el rumor.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '«Los vamos a recibir bien». ¡Qué divino, don Abel!' : 'Lo vago lo llena el rumor.'],
      };
    },
    rules: [[BP, 'Un mensaje de cambio responde: qué pasa, a quién, desde cuándo, qué no cambia y qué hago yo.']],
    mirada: {
      ve: 'Termina tu primera semana. Lo que hoy escribiste es lo que el lunes la gente va a citar cuando aparezcan los rumores. Un comunicado claro no impide que haya rumores; te da con qué responderlos.',
      visual: { tipo: 'mensaje', titulo: 'Para toda la red', txt: 'Equipo: desde el lunes cerramos 8 agencias en Lima. Nadie pierde su trabajo. Las 64 personas ya conversaron con sus jefes y pasan a una agencia cercana, en el mismo puesto y con el mismo sueldo. Si tu agencia recibe compañeros, recibámoslos bien.' },
    },
  },
];
