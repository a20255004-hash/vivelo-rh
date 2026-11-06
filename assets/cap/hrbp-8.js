// HR Business Partner · Capítulo 8 · «El día del anuncio» · Semana 2, miércoles.
// Hilo de las dos semanas: acompañar a Mauricio, gerente comercial nuevo, que quiere pasar de 12 zonas a 8.
// Normas citadas:
// - TUO del D.Leg. 728 (D.S. 003-97-TR), art. 30: actos de hostilidad equiparables al despido; entre ellos, la reducción
//   inmotivada de la remuneración o de la categoría (inc. b). Antes de accionar, el trabajador emplaza por escrito al
//   empleador y le otorga un plazo razonable no menor de seis días naturales.
//   https://lpderecho.pe/hostilidad-laboral-como-denunciarla/
//   https://lpderecho.pe/modelo-carta-cese-actos-hostilidad/
// - TUO del D.Leg. 728, art. 9 (razonabilidad de los cambios) y Ley 29733 (datos personales), ya citados.

export const CAP = {
  n: 8, titulo: 'El día del anuncio', dia: 'Semana 2, miércoles', foto: 'assets/foto2/tension.webp',
  lugar: 'Nutrimás · Ate, Lima',
  inicio: '08:00', fin: '19:30', cierreHora: '19:15',
  apertura: 'Miércoles. Llegas a las 7:40 con pañuelos en la cartera, como te dijo Andrea. En la puerta de la sala pequeña está pegada la hoja con el orden del día. A las 8:30 entra la primera persona.', boton: 'Entrar a la sala',
  kusi: 'Hoy no vas a resolverlo todo. Vas a estar. Y eso, hoy, es el trabajo. ¡Dale!',
  lead: 'Acompañaste las conversaciones más difíciles, reaccionaste cuando Susana se enteró por un chat, preparaste a los jefes, leíste el ánimo del equipo y frenaste una reubicación impuesta.',
  reflexion: '¿Qué momento de hoy te vas a llevar a tu casa esta noche?',
  siguiente: { n: 9, titulo: 'Las metas nuevas', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'seis', p: 'Conversaciones con los seis', j: 'Mauricio · Comercial', d: 7, e: 'Desde las 8:30' },
  { id: 'susana', p: 'Susana Vargas', j: 'Mauricio · Comercial', d: 7, e: 'Por informar a las 10:15' },
  { id: 'jefes', p: 'Reunión con los 8 jefes de zona', j: 'Mauricio · Comercial', d: 7, e: '10:15' },
  { id: 'marco', p: 'Reubicación de Marco Tello', j: 'Gonzalo · Compensaciones', d: 7, e: 'Sin vacante equivalente' },
];

export const FUTURO = {
  conversaciones_cuidadas: ['Las conversaciones con los seis fueron en persona, con la razón real y el paquete en la mano.', 'Capítulo 10.'],
  susana_atendida: ['Saliste del plan para hablar con Susana apenas supiste de la filtración.', 'Susana te lo dirá en el capítulo 10.'],
  susana_sin_respuesta: ['Susana pasó la mañana sola con una captura de pantalla.', 'Capítulo 10.'],
  jefes_listos: ['Los jefes de zona salieron de la reunión sabiendo qué responder.', 'Kenji lo notará con su nuevo jefe. Capítulo 9.'],
  marco_voluntario: ['A Marco se le ofreció la reubicación como opción, por escrito y con tiempo.', 'Capítulo 10.'],
  marco_impuesto: ['A Marco le bajaron de categoría sin su aceptación.', 'Llegará una carta de su abogado en el capítulo 10.'],
  filtracion_reportada: ['Le explicaste a Andrea cómo se filtró la lista y qué cambiar.', 'Capítulo 10.'],
  patricia_digna: ['Patricia se fue a su casa con su credencial y una carta.', 'Capítulo 10.'],
};

export const CHATS = {
  andrea: { n: 'Andrea Salazar', sub: 'Gerenta de Gestión Humana', who: 'andrea' },
  mauricio: { n: 'Mauricio Lerner', sub: 'Gerente Comercial', who: 'mauricio' },
  susana: { n: 'Susana Vargas', sub: 'Supervisora de ventas', who: 'susana' },
  kenji: { n: 'Kenji Tamashiro', sub: 'Vendedor de ruta', who: 'kenji' },
  fiorella: { n: 'Fiorella Campos', sub: 'Relaciones Laborales', c: '#8E44AD' },
};

export const WSP = [
  { chat: 'andrea', t: '07:55', de: 'Andrea', txt: 'Estoy en la sala de al lado. Si necesitas cinco minutos, toca la puerta.' },
  { chat: 'susana', t: '09:40', de: 'Susana', txt: '(captura de pantalla) ¿Esto es verdad? ¿Así me tenía que enterar?' },
  { chat: 'kenji', t: '11:25', de: 'Kenji', txt: 'Mauricio habló bien. Corto. Nadie lloró en la ruta, solo don Teo se emocionó 🥲', si: 'discurso_claro' },
  { chat: 'kenji', t: '11:25', de: 'Kenji', txt: 'No entendí nada del discurso. «Disruptivo». En la moto nadie sabe qué es eso 😂', no: 'discurso_claro' },
  { chat: 'kenji', t: '15:10', de: 'Kenji', txt: 'Jhon puso un tigre de foto de perfil del grupo. Ya sabemos qué significa 🙃', si: 'jhon_libre' },
  { chat: 'fiorella', t: '17:00', de: 'Fiorella', txt: 'Wilfredo pidió el convenio para leerlo con su hija, que es abogada. Perfecto: para eso son los cinco días.', si: 'convenio_limpio' },
  { chat: 'fiorella', t: '17:00', de: 'Fiorella', txt: 'Wilfredo grabó la conversación de la mañana. En el audio se oye «si no firmas hoy, pierdes el incentivo». Tenemos un problema.', si: 'convenio_trampa' },
];

export const CORREOS = [
  { t: '16:05', de: 'Valeria Chang · Comunicación Interna', para: 'Todo Comercial', asunto: 'El nuevo Comercial', html: '<p>Desde el lunes, Comercial se organiza en 8 zonas. Algunos puestos cambian y algunas personas no continúan en el área: ya conversamos con cada una. Tu jefe de zona te explicará tu ruta. Las metas se definirán con ustedes.</p><p>Dudas personales: hrbp.comercial@nutrimas.pe</p>', si: 'faq_limpio' },
  { t: '16:05', de: 'Valeria Chang · Comunicación Interna', para: 'Todo Comercial', asunto: '🚀 ¡Nace el nuevo Comercial! 🎉', html: '<p>¡Tranquilos! En este cambio nadie pierde su trabajo 💪 Y la mejor noticia: ¡las metas suben 30 %! 📈</p>', si: 'faq_promesas' },
];

export const QUIZ = [
  { q: 'En una conversación de salida, si la persona llora, lo mejor es…', ops: ['Hablar de la estrategia para distraerla', 'Callarse, esperar y ofrecer agua', 'Terminar rápido', 'Pedirle que se calme'], ok: 1, por: 'El silencio respeta el momento.' },
  { q: 'Una persona se entera de su situación por una captura de pantalla. Lo primero es…', ops: ['Averiguar quién la filtró', 'Hablar con ella en persona cuanto antes', 'Esperar a la hora prevista', 'Negar la captura'], ok: 1, por: 'Primero la persona; después, el origen de la filtración.' },
  { q: 'Bajar a alguien de supervisor a vendedor sin su aceptación y sin motivo…', ops: ['Es una reubicación normal', 'Puede ser un acto de hostilidad: reducción inmotivada de categoría', 'Es obligatorio en una reorganización', 'Es legal si se mantiene el sueldo un mes'], ok: 1, por: 'TUO del D.Leg. 728, art. 30 b).' },
  { q: 'Ante un acto de hostilidad, el trabajador primero…', ops: ['Renuncia', 'Emplaza por escrito al empleador y le da un plazo razonable', 'Va directo a juicio', 'Publica en redes'], ok: 1, por: 'El art. 30 exige emplazar por escrito con un plazo no menor de seis días naturales.' },
  { q: 'El día del anuncio, el rol del HRBP es sobre todo…', ops: ['Dar todas las noticias', 'Acompañar a quien decide, cuidar a las personas y corregir lo que se sale del plan', 'Quedarse en su escritorio', 'Calcular las liquidaciones'], ok: 1, por: 'Estar presente y ajustar en tiempo real.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '08:30', ch: 'presencial', who: 'mauricio', titulo: 'Las conversaciones', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala pequeña sin ventanas', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Una mesa, tres sillas, una jarra de agua y una caja de pañuelos. ${F.has('mauricio_ensayado') ? 'Mauricio tiene el paquete escrito en la mano y respira como ensayaron.' : 'Mauricio revisa su celular hasta el último segundo.'}</p><p>Entran, una por una, las personas cuyo puesto desaparece. <mark class="clave">Tú acompañas</mark>. Estas son tres de las seis conversaciones.</p>`,
    type: 'calls',
    calls: [['Patricia Odría · 9 años · Callao', 'Entra con su credencial en la mano, como si ya supiera', 'Llora. Mauricio se calla y le alcanza un pañuelo. Cuando ella dice «yo abrí el Callao», él responde: «Lo sé. Esto no es por lo que hiciste». Patricia pregunta por su liquidación y tú le explicas el paquete.'], ['Milagros Ccori · 8 años · asistente comercial', 'Entra seria, con un cuaderno', 'Escucha sin interrumpir. Cuando Mauricio le menciona la vacante de Trade Marketing en Lurín, pregunta: «¿Hay movilidad? Mi papá usa silla de ruedas y yo lo llevo a la terapia los martes». Nadie lo sabía.'], ['Marco Tello · 3 años · Villa El Salvador', 'Entra a la defensiva', '«¿Y por qué Jhon sí y yo no, si los dos tenemos rotación alta?» Mauricio duda. Tú explicas: la ficha, la venta, la revisión en curso. Marco no queda convencido, pero escucha.']],
    prompt: 'Terminan las seis conversaciones a las 9:35. ¿Qué haces con lo que salió en ellas?',
    choices: [
      { id: 'a', label: 'Anotar lo que cada persona pidió (la movilidad de Milagros, la explicación para Marco) y coordinar respuestas concretas para la llamada de seguimiento de mañana.',
        res: { q: 'buena', fx: { personas: 5, calidad: 3, confianza: 2 }, rel: { mauricio: 1 }, flags: ['conversaciones_cuidadas'], cartera: { seis: '6 conversaciones hechas · pedidos anotados para el seguimiento' },
          out: 'Gonzalo confirma en diez minutos que la planta de Lurín tiene un bus de personal que pasa cerca de la casa de Milagros. Mauricio sale de la sala con los ojos rojos y dice, bajito: «Esto es lo más difícil que he hecho aquí».',
          pro: { ok: 'Cada pedido tiene una respuesta concreta al día siguiente.', info: 'Lo que la persona pide en el momento de la noticia es lo que más recordará si se cumple.' },
          kusi: ['animo', 'Estuviste. Y anotaste lo importante.'] } },
      { id: 'b', label: 'Pasar al siguiente punto del día: lo de Milagros y Marco se verá cuando firmen.',
        res: { q: 'aceptable', fx: { personas: -2, tiempo: 2 }, cartera: { seis: '6 conversaciones hechas' },
          out: 'Cumples el horario. Milagros se va sin saber si podrá llevar a su papá a la terapia si acepta Lurín.',
          pro: { ok: 'Respetas el orden del día.', risk: 'Un pedido concreto sin respuesta se vuelve una razón para no aceptar.' },
          kusi: ['pensando', 'Ella te dio una pista. ¿La usas?'] } },
    ],
    rules: [[BP, 'Después de una mala noticia, lo que la persona pide en ese momento merece una respuesta concreta y pronta.']],
    mirada: {
      ve: 'Las conversaciones de salida revelan cosas que ningún Excel tenía: un papá en silla de ruedas, una comparación que duele, una zona abierta a pulso. Escucharlas es la mitad del trabajo; responderlas, la otra mitad.',
      visual: { tipo: 'linea', titulo: 'La mañana de las conversaciones', hitos: [['08:30', 'Patricia'], ['08:45', 'Milagros'], ['09:00', 'Marco'], ['09:15', 'Wilfredo'], ['09:25', 'Gisela y Hugo'], ['09:35', 'Fin']] },
    },
  },
  {
    id: 'a2', t: '09:45', ch: 'whatsapp', who: 'susana', titulo: 'La captura', banner: 'assets/foto2/grito.webp', lugar: 'Pasillo, saliendo de la sala', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Susana te manda una captura. ${F.has('grupo_jefes') ? 'Es la lámina del grupo «Nuevo Comercial 🚀» que Mauricio creó ayer, con los ocho nombres.' : 'Es una foto, tomada desde otro escritorio, de la pantalla de alguien de Sistemas mientras creaba los nuevos perfiles en la app.'} ${F.has('susana_jefa') ? 'Su nombre está ahí, como jefa de zona. Nadie se lo había dicho.' : 'Su nombre no está en ninguna caja.'}</p><p>«¿Esto es verdad? <mark class="clave">¿Así me tenía que enterar?</mark>» Su conversación con Mauricio estaba prevista para las 10:00.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Llamarla de inmediato, decirle que vas a buscarla con Mauricio ahora mismo y adelantar su conversación, aunque se corra el resto del plan.',
        res: { q: 'buena', fx: { personas: 5, confianza: 3, tiempo: -3 }, rel: { susana: 1 }, flags: ['susana_atendida'], cartera: { susana: 'Conversación adelantada a las 9:55' },
          out: 'Susana contesta llorando. A las 9:55 está sentada frente a Mauricio. Él empieza pidiendo disculpas por cómo se enteró. Después le explica su situación con calma. Susana no sonríe, pero al salir te aprieta el brazo: «Gracias por venir a buscarme».',
          pro: { ok: 'Pones a la persona antes que el horario.', risk: 'La reunión con los jefes empieza tarde.', info: 'Después, averigua cómo se filtró para que no vuelva a pasar.' },
          kusi: ['animo', 'Primero Susana. El plan, después.'] } },
      { id: 'b', label: 'Responderle por WhatsApp que a las 10:00 conversará con Mauricio y que ahí le explicarán todo.',
        res: { q: 'aceptable', fx: { personas: -1, tiempo: 1 }, rel: { susana: 0 }, cartera: { susana: 'Conversación a las 10:00, como estaba' },
          out: 'Susana responde con un «ok». Los quince minutos hasta las 10:00 los pasa sola en su carro, en el estacionamiento.',
          pro: { ok: 'Mantienes el orden del día.', risk: 'Quince minutos con una captura en la mano son muy largos.' },
          kusi: ['pensando', 'Quince minutos sola…'] } },
      { id: 'c', label: 'No responder hasta averiguar quién filtró la captura.',
        res: { q: 'riesgosa', fx: { personas: -5, confianza: -4 }, rel: { susana: -1 }, flags: ['susana_sin_respuesta'], cartera: { susana: 'Sin respuesta' },
          out: 'Pasas cuarenta minutos buscando el origen. Susana no se presenta a su reunión de las 10:00. Te escribe a las 11: «Ya entendí cómo funciona esto».',
          pro: { ok: 'Encuentras el origen de la filtración.', risk: 'La persona afectada quedó sola mientras investigabas.' },
          kusi: ['triste', 'Ella necesitaba a alguien, no a una detective.'] } },
    ],
    rules: [[BP, 'Si alguien se entera de su situación por una filtración, lo primero es hablar con esa persona, en persona y cuanto antes.']],
    mirada: {
      ve: 'Ningún plan sobrevive intacto a un día de anuncio. Lo que dice cuánto le importan las personas a una empresa no es el plan, sino qué hace cuando el plan falla. Hoy falló con Susana.',
      visual: { tipo: 'cambio', titulo: 'Cuando el plan falla', pares: [['Seguir el horario', 'Ir a buscarla'], ['Buscar al culpable primero', 'Atender a la persona primero'], ['«A las 10:00 te explican»', '«Voy ahora con Mauricio»']] },
    },
  },
  {
    id: 'a3', t: '10:20', ch: 'presencial', who: null, titulo: 'Los ocho jefes', banner: 'assets/foto2/reunion-circulos.webp', lugar: 'Sala de la Gerencia Comercial', show: ['calidad', 'confianza', 'personas'],
    body: (n, F) => `<p>Los ocho jefes de zona están sentados alrededor de la mesa. ${F.has('jhon_condicionado') ? 'Jhon está en una esquina, más callado que nunca.' : F.has('jhon_libre') ? 'Jhon llega último, con su celular en la mano, sonriendo.' : 'Jhon no está.'} ${F.has('teo_jefe') ? 'Don Teo te guiña un ojo.' : ''}</p><p>En media hora, sus equipos les van a preguntar de todo. <mark class="clave">Haz dos preguntas</mark> para saber si están listos.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces al grupo de jefes.',
    opts: [
      { id: 'metas', label: '«Si un vendedor les pregunta por las metas nuevas, ¿qué le dicen?»', info: 'Óscar: «Que suben 30 %». Lucía lo corrige: «No, que se van a definir con ellos el jueves». Hay un silencio. Era necesario que alguien lo dijera.' },
      { id: 'seis', label: '«Si alguien pregunta por qué se fue Patricia, ¿qué responden?»', info: 'Raúl: «Que su puesto ya no existe en la nueva estructura y que la empresa la está acompañando». Jhon, entre dientes: «Que no vendía». Mauricio lo mira y Jhon se calla.' },
      { id: 'ruta', label: '«¿Saben explicar con qué criterios se asignaron las rutas?»', info: 'Nelly: «Cercanía, clientes y carga parecida, ¿no?». Varios asienten. Es la primera vez que lo escuchan dicho así.' },
      { id: 'feliz', label: '«¿Están contentos con su nuevo puesto?»', info: 'Todos dicen que sí. Es amable, pero no te dice si están listos.' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('feliz') ? 0 : 4, confianza: 2 }, rel: { mauricio: 1 },
      flags: picks.includes('feliz') ? [] : ['jefes_listos'],
      out: picks.includes('feliz') ? 'La reunión termina cordial. Los jefes salen sin haber ensayado ninguna respuesta difícil.' : 'Les dejas una hoja con tres respuestas: por qué se fueron, qué pasa con las metas y cómo se asignaron las rutas. Mauricio añade: «Y nadie habla mal de quien se fue».',
      kusi: picks.includes('feliz') ? ['pensando', 'Contentos no es lo mismo que listos.'] : ['celebra', '¡Jefes con respuestas, no con rumores!'],
    }),
    rules: [[BP, 'Los jefes tienen que poder explicar el cambio con las mismas palabras: si no, cada uno cuenta su versión.']],
    mirada: {
      ve: 'Después del anuncio, la gente no le pregunta al gerente: le pregunta a su jefe directo. Si los ocho jefes responden distinto, nacen ocho rumores. Preparar sus respuestas es la última pieza del plan.',
      visual: { tipo: 'mensaje', titulo: 'La hoja para los jefes', txt: '¿Por qué se fue alguien? Su puesto ya no existe y la empresa lo acompaña. ¿Las metas? Se definen con ustedes el jueves. ¿Las rutas? Cercanía, clientes y carga parecida. Nadie habla mal de quien se fue.' },
    },
  },
  {
    id: 'a4', t: '11:20', ch: 'sistema', who: null, titulo: 'El chat de la transmisión', banner: 'assets/foto2/callcenter.webp', lugar: 'Transmisión en línea del anuncio', show: ['personas', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Mauricio habla tres minutos. ${F.has('discurso_claro') ? 'Dice lo que ensayaron y no lee. Cuando menciona a «los compañeros que no continúan», se le quiebra un poco la voz.' : 'Lee un texto con palabras como «disruptivo» y «siguiente nivel».'} Mientras habla, el chat de la transmisión se llena.</p><p>Tú moderas. <mark class="clave">Marca los comentarios que necesitan una acción</mark>.</p>`,
    type: 'flag', prompt: 'Marca los comentarios que requieren una respuesta, una corrección o un seguimiento privado.',
    doc: { t: 'Chat de la transmisión · Comercial', sub: '286 personas conectadas' },
    lines: [
      { id: 'gracias', t: 'Lucía Paz: Gracias, Mauricio. Vamos con todo, equipo 💪' },
      { id: 'vieja', t: 'Anónimo: ¿Y a Patricia la botaron por vieja? 👀', bad: BP, why: 'Es un rumor sobre una persona concreta. Se responde en general («nadie salió por su edad») y nunca discutiendo su caso en público.' },
      { id: 'tigre', t: 'Vendedor SJL: @Jhon ahora sí, jefe tigre 🐯🐯 a temblar todos', bad: BP, why: 'Reproduce la cultura de miedo que la nueva ficha quiere cambiar. Conviene que Mauricio o el jefe de zona lo reencaucen hoy.' },
      { id: 'metas', t: 'Kenji Tamashiro: ¿Las metas suben? ¿Cuánto?', bad: BP, why: 'Pregunta legítima que todos tienen. Se responde en el chat con lo que es verdad: se definen con ellos el jueves.' },
      { id: 'grabacion', t: 'Alexis (exvendedor, sigue en el grupo): Grabé todo, ya lo subo a TikTok 😂', bad: LEY, why: 'Un exvendedor sigue en el canal interno con acceso a información de trabajadores. Hay que retirar su acceso hoy (Ley 29733: medidas de seguridad sobre datos personales).' },
      { id: 'zona', t: 'Vendedora Comas: ¿Puedo pedir quedarme con mis clientes?', bad: BP, why: 'Pide algo concreto y personal. Se le responde en privado y con los criterios de rutas.' },
      { id: 'aplauso', t: 'Don Teo: 👏👏 Allinmi. Bien dicho.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Respondes las preguntas de metas y rutas, pero un acceso que no debía estar abierto sigue abierto toda la tarde.' : `Respondes en el chat lo que es general, mandas mensajes privados a quienes preguntaron por su caso, pides a Sistemas retirar el acceso de exempleados (${hitsLey} riesgo legal cerrado) y le escribes a Mauricio sobre el comentario del tigre.`,
      flags: missLey ? [] : ['chat_atendido'], cartera: { jefes: missLey ? 'Chat con temas abiertos' : 'Chat moderado · seguimientos privados enviados' },
      pro: { ok: 'Separaste lo público de lo privado y respondiste solo con lo que es verdad.', risk: 'Un rumor sin respuesta o un acceso abierto se vuelven el titular del día.', info: 'Revisa cada cierto tiempo quién sigue en los grupos y canales internos.' },
      kusi: missLey ? ['preocupado', 'Alguien que no debía seguía mirando…'] : ['celebra', '¡Moderadora nivel experta!'],
    }),
    rules: [[LEY, 'Ley 29733: la empresa debe adoptar medidas de seguridad para la información de sus trabajadores, como retirar accesos a quien ya no trabaja.'], [BP, 'En público se responde lo general; lo personal, siempre en privado.']],
    mirada: {
      ve: 'El chat de una transmisión es el termómetro del día: ahí aparecen el miedo, la burla, la duda y el apoyo. Moderar no es censurar: es responder lo que todos se preguntan y llevar a privado lo que es de cada uno.',
      visual: { tipo: 'embudo', titulo: 'Los comentarios del chat', niveles: [['Comentarios', 143], ['Preguntas', 37], ['Respondidas en privado', 12]] },
    },
  },
  {
    id: 'a5', t: '13:40', ch: 'presencial', who: 'mauricio', titulo: '«Que sea vendedor»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Mauricio', show: ['cumplimiento', 'etica', 'personas'],
    body: () => `<p>Marco Tello no tiene una vacante equivalente. Mauricio, con el almuerzo sin tocar: «Que pase a vendedor desde el lunes, con sueldo de vendedor. <mark class="clave">Si no le gusta, que firme el convenio</mark>. Es simple».</p><p>Fiorella está en la puerta, con su termo de mate de coca, esperando tu respuesta.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Ofrecerle a Marco el puesto de vendedor como una opción más, explicada por escrito, que él puede aceptar o no, junto con el convenio y cinco días para decidir.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 3, personas: 2 }, rel: { mauricio: 0 }, flags: ['marco_voluntario'], cartera: { marco: 'Opciones por escrito: vendedor o convenio, 5 días' },
          out: 'Fiorella asiente. Mauricio pregunta: «¿Y si no acepta ninguna?». Le respondes: «Entonces se queda como está mientras buscamos». Mauricio suspira: «Ok. Pero búsquenle algo».',
          pro: { ok: 'Una reubicación con menos categoría solo es válida si la persona la acepta libremente.', risk: 'Si Marco no acepta nada, habrá que seguir buscando.', info: 'Que la propuesta quede por escrito, con la nueva categoría y el sueldo claros.' },
          kusi: ['feliz', 'Opción, no imposición.'] } },
      { id: 'b', label: 'Aceptar: así Marco sigue en la empresa y no pierde su trabajo.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -3 }, rel: { mauricio: 1 }, flags: ['marco_impuesto'], cartera: { marco: 'Bajado a vendedor sin su aceptación' },
          out: 'Mauricio firma el cambio. A las 16:00, Marco recibe un correo con su nueva categoría. Fiorella se va sin despedirse.',
          pro: { ok: 'Marco conserva un empleo.', risk: 'Bajar la categoría y el sueldo sin motivo ni aceptación puede ser un acto de hostilidad (art. 30 b).' },
          kusi: ['indignado', '¿«Conserva el empleo» o lo empujan a irse?'] } },
    ],
    rules: [[LEY, 'TUO del D.Leg. 728, art. 30 b): la reducción inmotivada de la remuneración o de la categoría es un acto de hostilidad.'], [LEY, 'El trabajador emplaza por escrito al empleador con un plazo no menor de seis días naturales antes de accionar.']],
    mirada: {
      ve: 'Para Mauricio, ofrecer a Marco un puesto de vendedor es generoso: no lo está despidiendo. Para la ley, bajar a alguien de categoría sin su aceptación puede ser una forma de empujarlo a irse. La diferencia está en una sola palabra: «acepta».',
      visual: { tipo: 'balanza', a: { t: 'Imponerle el puesto', items: ['Rápido', 'Menos categoría y sueldo sin acuerdo', 'Riesgo de hostilidad'] }, b: { t: 'Ofrecérselo como opción', items: ['Por escrito', 'Cinco días para decidir', 'Si no acepta, se queda y se busca'] } },
      normas: [{ ley: 'TUO del D.Leg. 728, art. 30', dice: 'Son actos de hostilidad equiparables al despido, entre otros, la reducción inmotivada de la remuneración o de la categoría. El trabajador, antes de accionar, emplaza por escrito al empleador y le da un plazo razonable no menor de seis días naturales.', practica: 'Pasar a Marco a vendedor con sueldo de vendedor solo es válido si él lo acepta. Si se le impone, puede reclamar.' }],
    },
  },
  {
    id: 'a6', t: '17:15', ch: 'correo', who: null, titulo: 'Cómo se filtró', banner: 'assets/esc/lupa.webp', show: ['calidad', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Ya sabes cómo llegó la captura a Susana: ${F.has('grupo_jefes') ? 'uno de los jefes se la mostró a su esposa anoche, y la esposa es amiga de la hermana de un vendedor de Los Olivos.' : 'alguien de Sistemas creó los perfiles en la app un día antes, con la pantalla a la vista de todo el piso.'}</p><p>Andrea te pide un correo corto: <mark class="clave">qué pasó y qué cambiamos</mark>.</p>`,
    type: 'compose', enviaA: 'andrea', para: 'Para: Andrea Salazar · Gerenta de Gestión Humana', boton: 'Enviar el correo',
    prompt: 'Arma el correo eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Qué pasó', ops: [
        { id: 'h1', t: 'La lista de jefes de zona llegó a Susana antes de su conversación, por una captura de pantalla.', ok: true, por: 'El hecho, sin culpables.' },
        { id: 'h2', t: 'Alguien irresponsable filtró la lista y hay que encontrarlo.', ok: false, por: 'Busca un culpable antes de entender la falla.' },
      ] },
      { id: 'causa', t: 'Por qué', ops: [
        { id: 'c1', t: 'La información estuvo en un canal que no controlábamos antes de las conversaciones.', ok: true, por: 'La causa es el proceso, no la persona.' },
        { id: 'c2', t: 'La gente no sabe guardar secretos.', ok: false, por: 'No dice qué cambiar.' },
      ] },
      { id: 'cambio', t: 'Qué cambiamos', ops: [
        { id: 'm1', t: 'Para las próximas: nada se escribe ni se carga en sistemas antes de hablar con las personas afectadas.', ok: true, por: 'Una regla simple que se puede cumplir.' },
        { id: 'm2', t: 'Sancionar a quien lo haya filtrado.', ok: false, por: 'No evita que vuelva a pasar.' },
      ] },
    ],
    res: sel => {
      const buenas = ['h1', 'c1', 'm1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : 0 }, rel: { andrea: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['filtracion_reportada'] : [],
        envia: ['andrea', q === 'buena' ? 'Andrea: «Perfecto. Esto va al procedimiento de reorganizaciones. Y gracias por ir a buscar a Susana, si es que fuiste.»' : 'Andrea: «Ok. Mañana lo conversamos.»'],
        out: q === 'buena' ? 'Andrea lo reenvía a Sistemas y a Comunicación Interna con una línea: «Regla nueva desde hoy».' : 'El correo queda en la bandeja de Andrea, sin mucho que hacer con él.',
        pro: { ok: 'Mirar la falla del proceso, y no solo al culpable, evita que se repita.', info: 'Las filtraciones casi nunca son malintencionadas: son información en el lugar equivocado.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Una regla nueva que protege a la próxima Susana.' : '¿Qué cambia para la próxima vez?'],
      };
    },
    rules: [[BP, 'Después de una filtración, busca la falla del proceso antes que al culpable.']],
    mirada: { ve: 'Cuando algo sale mal en un día así, la tentación es encontrar a quién culpar. Pero quien filtró no quería hacer daño: la información estaba donde no debía. Cambiar el proceso protege a la próxima persona.' },
  },
  {
    id: 'a7', t: '18:40', ch: 'presencial', who: null, titulo: 'Patricia vuelve', banner: 'assets/foto2/pasillo.webp', lugar: 'Puerta de Gestión Humana', show: ['personas', 'etica'],
    body: (n, F) => `<p>Cuando ya te ibas, Patricia toca la puerta. Tiene los ojos hinchados pero la voz firme. ${F.has('salida_forzada') ? '«Me dijeron que si no firmaba esta semana me iban a evaluar el desempeño. ¿Eso es verdad?»' : '«Leí el convenio con mi hermano. Está claro. Todavía no decido.»'}</p><p>«Solo quiero pedirte algo: <mark class="clave">una carta que diga lo que hice aquí</mark>. Para buscar trabajo.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que sí, que la carta la firma Mauricio y que mañana se la tienes. Y recordarle que tiene cinco días y que, si no acepta, se queda.',
        res: { q: 'buena', fx: { personas: 4, etica: 3 }, flags: ['patricia_digna'],
          out: 'Patricia asiente. «Abrí el Callao. Que lo diga.» Le prometes que lo dirá con esas palabras. Se va por el pasillo con su credencial todavía colgada.',
          pro: { ok: 'Le das algo concreto que la ayuda a seguir y le recuerdas que la decisión es suya.', info: 'Una carta que reconoce lo que alguien hizo no cuesta nada y vale mucho.' },
          kusi: ['animo', '«Abrí el Callao.» Que lo diga la carta.'] } },
      { id: 'b', label: 'Decirle que la empresa no da cartas de recomendación, que solo puede darle su certificado de trabajo.',
        res: { q: 'aceptable', fx: { personas: -2, cumplimiento: 1 },
          out: 'Patricia se queda callada. «Ya.» Se va sin despedirse.',
          pro: { ok: 'Cumples con lo mínimo.', risk: 'A veces lo mínimo no basta para que alguien se vaya con dignidad.' },
          kusi: ['triste', 'Lo mínimo no siempre alcanza.'] } },
    ],
    mirada: { ve: 'Patricia no pidió más dinero ni otro puesto. Pidió que alguien dijera en voz alta lo que hizo. En las salidas, el reconocimiento es casi siempre lo que más se agradece y lo que menos se ofrece.' },
  },
];
