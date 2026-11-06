// HR Business Partner · Capítulo 7 · «La comunicación» · Semana 2, martes.
// Hilo de las dos semanas: acompañar a Mauricio, gerente comercial nuevo, que quiere pasar de 12 zonas a 8.
// Normas citadas:
// - TUO del D.Leg. 728 (D.S. 003-97-TR), art. 9: el empleador puede introducir cambios en turnos, días u horas y en la
//   forma y modalidad de la prestación, dentro de criterios de razonabilidad y según las necesidades del centro de trabajo.
//   Los cambios no deben configurar actos de hostilidad (art. 30).
//   https://lpderecho.pe/ius-variandi-modificaciones-condiciones-trabajo/
//   https://iuslatin.pe/empleador-debe-justificar-cambios-en-vinculo-laboral-para-evitar-hostilidad/
// - Ley 29733 (datos personales), ya citada en el capítulo 2.

export const CAP = {
  n: 7, titulo: 'La comunicación', dia: 'Semana 2, martes', foto: 'assets/foto2/presentacion.webp',
  lugar: 'Nutrimás · Ate, Lima',
  inicio: '08:00', fin: '19:30', cierreHora: '19:15',
  apertura: 'Martes. Mañana se anuncia todo. Hoy es el día en que se decide cómo: quién habla primero, qué se dice, qué no se promete y a qué hora. Mauricio llega con ojeras: dice que durmió poco.', boton: 'Empezar el plan',
  kusi: 'Un cambio bien decidido y mal comunicado es un cambio mal hecho. ¡Dale!',
  lead: 'Ordenaste el día del anuncio, ensayaste con Mauricio las conversaciones difíciles, limpiaste un comunicado lleno de promesas, decidiste cómo avisar a los jefes y reasignaste rutas con criterios.',
  reflexion: '¿Qué frase de mañana te da más miedo que salga mal?',
  siguiente: { n: 8, titulo: 'El día del anuncio', dia: 'Semana 2, miércoles' },
};

export const CARTERA = [
  { id: 'anuncio', p: 'Plan del anuncio', j: 'Mauricio · Comercial', d: 6, e: 'Mañana' },
  { id: 'comunicado', p: 'Comunicado y preguntas frecuentes', j: 'Valeria · Comunicación Interna', d: 6, e: 'Borrador' },
  { id: 'jefes', p: 'Aviso a los 8 jefes de zona', j: 'Mauricio · Comercial', d: 6, e: 'Por definir' },
  { id: 'rutas', p: 'Reasignación de vendedores', j: 'Mauricio · Comercial', d: 6, e: '240 vendedores, 8 zonas' },
];

export const FUTURO = {
  orden_anuncio: ['El día del anuncio tiene un orden: primero los afectados, luego los jefes y después el equipo.', 'Capítulo 8.'],
  mauricio_ensayado: ['Mauricio ensayó contigo las conversaciones difíciles.', 'Lo hará mejor mañana. Capítulo 8.'],
  faq_limpio: ['El comunicado dice solo lo que es verdad hoy.', 'Capítulo 8.'],
  faq_promesas: ['El comunicado salió con promesas que no se pueden cumplir.', 'Te las cobrarán en el capítulo 9.'],
  grupo_jefes: ['Mauricio creó hoy un grupo de WhatsApp con los 8 jefes de zona.', 'Alguien hará una captura. Capítulo 8.'],
  jefes_en_persona: ['Los jefes de zona sabrán mañana, en persona y antes del anuncio.', 'Capítulo 8.'],
  rutas_justas: ['Las rutas se reasignaron con criterios: cercanía, clientes y carga parecida.', 'Kenji lo notará. Capítulo 9.'],
  rutas_jhon: ['Dejaste que los jefes elijan a «sus» vendedores.', 'Kenji lo notará. Capítulo 9.'],
  discurso_claro: ['Mauricio tiene un mensaje corto y verdadero para mañana a las 11.', 'Capítulo 8.'],
};

export const CHATS = {
  andrea: { n: 'Andrea Salazar', sub: 'Gerenta de Gestión Humana', who: 'andrea' },
  mauricio: { n: 'Mauricio Lerner', sub: 'Gerente Comercial', who: 'mauricio' },
  kenji: { n: 'Kenji Tamashiro', sub: 'Vendedor de ruta', who: 'kenji' },
  valeria: { n: 'Valeria Chang', sub: 'Comunicación Interna', c: '#16A085' },
  fiorella: { n: 'Fiorella Campos', sub: 'Relaciones Laborales', c: '#8E44AD' },
};

export const WSP = [
  { chat: 'mauricio', t: '07:20', de: 'Mauricio', txt: 'No mandé el correo anoche. Casi. Andrea me llamó a las 9 de la noche 😅', si: 'anuncio_apurado' },
  { chat: 'mauricio', t: '07:20', de: 'Mauricio', txt: '¿A las 9:30 ensayamos? En serio no sé cómo decirle a alguien con nueve años que su puesto ya no existe.', si: 'anuncio_ordenado' },
  { chat: 'valeria', t: '10:50', de: 'Valeria', txt: 'Te mandé el borrador del comunicado. Lo hice bonito, con muchos emojis 🎉🚀' },
  { chat: 'fiorella', t: '13:00', de: 'Fiorella', txt: 'Convenios impresos: seis sobres, uno por persona. Los tengo yo bajo llave.', si: 'convenio_limpio' },
  { chat: 'kenji', t: '16:20', de: 'Kenji', txt: '¿Es cierto que nos van a mover de zona? Yo vivo en Huaycán, si me mandan a Villa El Salvador renuncio 😩' },
  { chat: 'andrea', t: '19:10', de: 'Andrea', txt: 'Mañana estoy contigo desde las 8. Lleva pañuelos. En serio.' },
];

export const CORREOS = [
  { t: '07:40', de: 'Andrea Salazar', para: 'HR Business Partner · Comercial', asunto: 'Mañana', html: '<p>Hoy dejamos listo el día de mañana: orden, mensajes, preguntas frecuentes y rutas. Mauricio da la cara; tú lo acompañas en cada conversación. Yo estaré en la sala de al lado.</p><p>Andrea</p>' },
];

export const QUIZ = [
  { q: 'En el día de un anuncio de reorganización, ¿quién se entera primero?', ops: ['Todo el equipo a la vez', 'Las personas directamente afectadas, en persona', 'Los clientes', 'El grupo de WhatsApp'], ok: 1, por: 'De adentro hacia afuera: afectados, jefes, equipo y resto de la empresa.' },
  { q: 'Un comunicado que dice «nadie perderá su trabajo» cuando hay seis salidas…', ops: ['Calma a la gente', 'Destruye la confianza cuando se descubre que no es verdad', 'Es lo que pide la ley', 'Es neutral'], ok: 1, por: 'Se dice solo lo que es verdad hoy.' },
  { q: 'Cambiar de zona a un vendedor (ius variandi)…', ops: ['Se puede siempre, sin límites', 'Se puede dentro de criterios de razonabilidad y sin perjudicarlo sin motivo', 'Nunca se puede', 'Requiere notario'], ok: 1, por: 'TUO del D.Leg. 728, art. 9: el cambio debe ser razonable y responder a necesidades del negocio.' },
  { q: 'Ensayar con el gerente una conversación de salida sirve para…', ops: ['Que suene leída', 'Que encuentre sus palabras y aguante las reacciones sin desviarse', 'Que RR.HH. la dé por él', 'Nada'], ok: 1, por: 'Quien decide da la noticia; el ensayo lo prepara para hacerlo con respeto.' },
  { q: 'Avisar a los nuevos jefes por un grupo de WhatsApp la víspera…', ops: ['Es lo más rápido y seguro', 'Arriesga que la noticia se filtre antes de hablar con los afectados', 'Es obligatorio', 'No tiene ningún riesgo'], ok: 1, por: 'Una captura de pantalla viaja más rápido que cualquier plan.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '08:10', ch: 'documento', who: null, titulo: 'El orden de mañana', banner: 'assets/esc/reloj.webp', lugar: 'Sala de Gestión Humana, con Andrea', show: ['calidad', 'personas', 'tiempo'],
    body: (n, F) => `<p>Andrea dibuja una línea de tiempo en la pizarra con un plumón que casi no pinta. ${F.has('anuncio_apurado') ? '«Anoche casi se nos va un correo. Hoy lo dejamos amarrado.»' : '«Mauricio ya aceptó el miércoles. Ahora hay que ordenarlo.»'}</p><p><mark class="clave">Ordena el día del anuncio</mark>, de la primera conversación al último mensaje.</p>`,
    type: 'secuencia', prompt: 'Ordena los momentos del día del anuncio. Usa las flechas.', boton: 'Fijar el orden',
    items: [
      { id: 'seis', t: '8:30 · Conversaciones en persona con las seis personas que no entran', por: 'Los afectados se enteran primero, por quien decide.' },
      { id: 'jefes', t: '10:15 · Reunión con los 8 jefes de zona: su rol y qué responder', por: 'Necesitan saberlo antes que su equipo para poder acompañarlo.' },
      { id: 'equipo', t: '11:00 · Mauricio anuncia la nueva estructura a todo Comercial, presencial y en línea', por: 'El mensaje general, con la cara de quien decide.' },
      { id: 'zonas', t: '14:00 · Cada jefe se reúne con su equipo: rutas y dudas', por: 'Lo concreto, en grupos pequeños.' },
      { id: 'faq', t: '16:00 · Se publica el comunicado con preguntas frecuentes', por: 'Por escrito, para que todos lean lo mismo.' },
      { id: 'seguir', t: 'Jueves · Llamada de seguimiento a cada una de las seis personas', por: 'Nadie se queda solo después de la noticia.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['orden_anuncio'], cartera: { anuncio: q === 'riesgosa' ? 'Orden confuso' : 'Orden fijado: 8:30 → 10:15 → 11:00 → 14:00 → 16:00' },
        out: q === 'buena' ? 'Andrea toma foto de la pizarra. «Esto se imprime y se pega en la puerta de la sala. Nadie improvisa.»' : 'Andrea mueve dos tarjetas: «Si el comunicado sale antes que las conversaciones, alguien se entera por escrito de que se va».',
        pro: { ok: 'De adentro hacia afuera: nadie se entera por otro de lo que le toca a sí mismo.', risk: 'Si el anuncio general va antes que las conversaciones, los seis se enteran en público.', info: 'Deja holgura entre conversaciones: algunas durarán más de lo previsto.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡De adentro hacia afuera!' : '¿Quién se entera primero?'],
      };
    },
    rules: [[BP, 'Comunica de adentro hacia afuera: afectados, jefes, equipo y resto de la empresa.']],
    mirada: {
      ve: 'El orden de un anuncio no es un detalle logístico: es una forma de respeto. Quien pierde su puesto merece saberlo antes que el resto, en persona y por quien tomó la decisión.',
      visual: { tipo: 'flujo', titulo: 'El miércoles', pasos: ['Los seis', 'Los 8 jefes', 'Todo Comercial', 'Cada zona', 'Comunicado', 'Seguimiento'], aqui: 0 },
    },
  },
  {
    id: 'c2', t: '09:30', ch: 'presencial', who: 'mauricio', titulo: 'El ensayo', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala pequeña sin ventanas', show: ['confianza', 'personas', 'calidad'],
    body: () => `<p>Mauricio se sienta frente a ti con el plan de Patricia en la mano. Tú haces de Patricia. Él respira hondo.</p><p>«Nunca he hecho esto en el Perú. En mi otra empresa lo hacía un abogado por videollamada.» <mark class="clave">Ensayan tres reacciones</mark>.</p>`,
    type: 'calls',
    calls: [['Patricia llora', 'Tú te quedas callada y te tapas la cara', 'Mauricio se pone nervioso y empieza a hablar del directorio, de los números y de la estrategia. Habla dos minutos seguidos.'], ['Patricia se enoja', '«¡Yo abrí el Callao cuando nadie quería ir!»', 'Mauricio responde: «Bueno, pero tu zona vende bajo la meta». Se arrepiente apenas lo dice.'], ['Patricia pregunta por la plata', '«¿Y cuánto me van a dar?»', 'Mauricio busca el papel, no encuentra el monto y dice: «Eso lo ve RR.HH.».']],
    prompt: 'Terminó el ensayo. ¿Qué le dices a Mauricio?',
    choices: [
      { id: 'a', label: 'Tres consejos concretos: si llora, callarse y esperar; si se enoja, reconocer lo que hizo sin discutir su desempeño; tener el paquete escrito en la mano.',
        res: { q: 'buena', fx: { confianza: 4, personas: 4, calidad: 2 }, rel: { mauricio: 1 }, flags: ['mauricio_ensayado'],
          out: 'Repiten la conversación. La segunda vez, cuando «Patricia» se enoja, Mauricio dice: «Tienes razón, tú abriste el Callao. Esto no es por lo que hiciste». Se queda callado cuando tiene que callarse. Al terminar, se seca las manos en el pantalón.',
          pro: { ok: 'Le diste herramientas concretas sin quitarle el lugar de quien decide.', info: 'El silencio es la herramienta más difícil y la más útil en una conversación así.' },
          kusi: ['celebra', '¡Mauricio aprendió a callarse a tiempo!'] } },
      { id: 'b', label: 'Proponerle que mañana tú des las noticias y él solo esté presente.',
        res: { q: 'aceptable', fx: { confianza: 2, personas: -1 }, rel: { mauricio: 1 },
          out: 'Mauricio acepta aliviado. Pero ahora, para los seis, la decisión será «de RR.HH.».',
          pro: { ok: 'Mauricio se libera de un momento que le cuesta.', risk: 'Quien decide debe dar la cara. Si no, la decisión queda sin dueño.' },
          kusi: ['pensando', '¿Y de quién es la decisión?'] } },
    ],
    rules: [[BP, 'Quien decide da la noticia. RR.HH. acompaña, explica el paquete y cuida que la conversación no se desvíe.']],
    mirada: {
      ve: 'Mauricio no es frío: está asustado. Hablar de estrategia cuando alguien llora o discutir números cuando alguien se defiende son formas de escapar de un momento incómodo. El ensayo le da otra salida: estar presente.',
      visual: { tipo: 'cambio', titulo: 'Lo que Mauricio cambió en el segundo ensayo', pares: [['Hablar del directorio', 'Callarse y esperar'], ['«Tu zona vende bajo la meta»', '«Esto no es por lo que hiciste»'], ['«Eso lo ve RR.HH.»', 'El paquete escrito, en la mano']] },
    },
  },
  {
    id: 'c3', t: '11:00', ch: 'documento', who: null, titulo: 'El comunicado con emojis', banner: 'assets/foto2/celebra-laptop.webp', lugar: 'Tu escritorio', show: ['calidad', 'confianza', 'cumplimiento'],
    body: () => `<p>Valeria, de Comunicación Interna, te manda el borrador con un cohete en el asunto. Es entusiasta y bien escrito. Demasiado entusiasta.</p><p>Este texto lo van a leer 300 personas, y seis de ellas acaban de perder su puesto. <mark class="clave">Marca lo que no puede salir así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas del comunicado que prometen de más, que exponen a alguien o que no cuadran con la ley.',
    doc: { t: '🚀 ¡Nace el nuevo Comercial! 🎉', sub: 'Borrador de Comunicación Interna · para publicar el miércoles' },
    lines: [
      { id: 'estructura', t: 'Desde el lunes, Comercial se organiza en 8 zonas, con jefes de zona y un analista de abastecimiento y crédito.' },
      { id: 'nadie', t: '¡Tranquilos! En este cambio nadie pierde su trabajo. 💪', bad: BP, why: 'No es verdad: hay seis puestos que desaparecen. Una frase así destruye la confianza en todo lo demás.' },
      { id: 'nombres', t: 'Agradecemos a Patricia, Marco, Wilfredo, Gisela, Milagros y Hugo, que nos dejan. 🙏', bad: LEY, why: 'Todavía no han decidido si aceptan el acuerdo o la reubicación. Publicar sus nombres expone su situación sin su consentimiento y para una finalidad que no corresponde (Ley 29733).' },
      { id: 'rutas', t: 'Todos los vendedores cambian de zona el lunes, sin excepción, según la asignación de su nuevo jefe.', bad: LEY, why: 'El cambio de zona se puede hacer, pero dentro de criterios de razonabilidad (TUO del D.Leg. 728, art. 9). Mandar a alguien de Huaycán a Villa El Salvador sin motivo puede ser un perjuicio injustificado.' },
      { id: 'metas', t: 'Y la mejor noticia: ¡las metas suben 30 % para crecer juntos! 📈', bad: BP, why: 'Las metas nuevas aún no están definidas ni validadas. Anunciarlas hoy agrega miedo y compromete una decisión que se toma el jueves.' },
      { id: 'dudas', t: 'Si tienes dudas, conversa con tu jefe de zona o escribe a Gestión Humana: hrbp.comercial@nutrimas.pe.' },
      { id: 'grupo', t: 'También puedes dejar tus preguntas en el grupo de WhatsApp de tu zona. 😉', bad: BP, why: 'Un grupo de WhatsApp no es el lugar para dudas sobre el puesto o el sueldo de cada uno. Las preguntas personales se responden en privado.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Le devuelves el texto a Valeria sin emojis, pero con una frase que no puede salir. Ella te agradece y lo programa para mañana a las 16:00.' : `Le devuelves el comunicado con ${hitsLey} problemas legales marcados y tres frases tachadas. Valeria te llama: «Ok, entendí. Menos fiesta y más verdad». La nueva versión cabe en media página.`,
      flags: [missLey ? 'faq_promesas' : 'faq_limpio'], cartera: { comunicado: missLey ? 'Comunicado con promesas y nombres' : 'Comunicado verdadero, sin nombres ni metas' },
      pro: { ok: 'Un comunicado verdadero y sobrio protege la confianza en la empresa.', risk: 'Las promesas que no se cumplen y los nombres expuestos se recuerdan durante años.', info: 'El tono también comunica: los emojis de fiesta duelen a quien acaba de perder su puesto.' },
      kusi: missLey ? ['preocupado', 'Alguna promesa se coló…'] : ['celebra', '¡Menos fiesta, más verdad!'],
    }),
    rules: [[LEY, 'TUO del D.Leg. 728, art. 9: los cambios de zona o modalidad deben ser razonables.'], [LEY, 'Ley 29733: no se publican datos de una persona para una finalidad distinta sin su consentimiento.'], [BP, 'Se comunica solo lo que es verdad hoy.']],
    mirada: {
      ve: 'Comunicación Interna quiere que la gente se entusiasme; RR.HH. quiere que la gente confíe. Las dos cosas son posibles, pero en ese orden: primero la verdad, después el entusiasmo.',
      visual: { tipo: 'mensaje', titulo: 'Lo que sí dice el comunicado', txt: 'Desde el lunes, Comercial se organiza en 8 zonas. Algunos puestos cambian y algunas personas no continúan en Comercial: ya conversamos con cada una. Tu jefe de zona te explicará tu ruta. Las metas se definirán con ustedes. Dudas personales: hrbp.comercial@nutrimas.pe.' },
      normas: [{ ley: 'TUO del D.Leg. 728, art. 9', dice: 'El empleador puede introducir cambios en turnos, días u horas y en la forma y modalidad de la prestación, dentro de criterios de razonabilidad y teniendo en cuenta las necesidades del centro de trabajo.', practica: 'Reasignar zonas es posible, pero cada cambio tiene que tener un motivo y no perjudicar sin razón al vendedor.' }],
    },
  },
  {
    id: 'c4', t: '13:20', ch: 'presencial', who: 'mauricio', titulo: '«Les aviso hoy»', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Oficina de Mauricio', show: ['confianza', 'etica', 'personas'],
    body: (n, F) => `<p>Mauricio tiene el celular en la mano. «Los ocho jefes tienen que llegar mañana sabiendo su rol. <mark class="clave">Les armo hoy un grupo de WhatsApp</mark> y les mando la estructura. Así llegan preparados.»</p><p>${F.has('jhon_condicionado') ? 'Ayer le explicó a Jhon sus condiciones. Jhon las aceptó «sin problema», con una sonrisa que no te convenció.' : F.has('jhon_libre') ? 'Jhon ya sabe que es jefe: lo celebró anoche en Facebook con una foto de un tigre.' : 'Jhon no estará en ese grupo.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle reunirlos mañana a las 10:15, en persona, después de las conversaciones con los seis; y hoy solo llamarlos para citarlos, sin contarles nada.',
        res: { q: 'buena', fx: { confianza: 2, etica: 3, personas: 3 }, rel: { mauricio: 0 }, flags: ['jefes_en_persona'], cartera: { jefes: 'Citados a las 10:15 del miércoles, en persona' },
          out: 'Mauricio duda. «¿Y si no llegan preparados?» Le propones darles en la reunión una hoja con su rol y las preguntas frecuentes. «Ok. Pero que la hoja sea buena.»',
          pro: { ok: 'Reduces al mínimo el riesgo de que alguien se entere por una captura de pantalla.', risk: 'Los jefes tendrán menos tiempo para prepararse.', info: 'Aun así, algo puede filtrarse: prepara qué hacer si pasa.' },
          kusi: ['animo', 'Lo que no se escribe no se reenvía.'] } },
      { id: 'b', label: 'Aceptar el grupo, pero pidiéndoles por escrito total reserva hasta mañana.',
        res: { q: 'riesgosa', fx: { etica: -2, personas: -3, confianza: 2 }, rel: { mauricio: 1 }, flags: ['grupo_jefes'], cartera: { jefes: 'Grupo de WhatsApp con la estructura completa' },
          out: 'Mauricio crea el grupo «Nuevo Comercial 🚀» a las 13:40 y sube la lámina con los ocho nombres. Ocho personas, ocho celulares, ocho familias que preguntan esta noche «¿y qué te dijeron?».',
          pro: { ok: 'Los jefes llegan mañana con información.', risk: 'La reserva por escrito no detiene una captura de pantalla.' },
          kusi: ['preocupado', 'Ocho celulares… y una lámina con nombres.'] } },
      { id: 'c', label: 'Que les escriba uno por uno, por WhatsApp privado, contándole a cada uno solo su rol.',
        res: { q: 'aceptable', fx: { etica: 1, personas: -1 }, flags: ['grupo_jefes'], cartera: { jefes: 'Avisados uno por uno por WhatsApp' },
          out: 'Mauricio escribe ocho mensajes. Es más prudente que un grupo, pero sigue siendo texto que se puede reenviar.',
          pro: { ok: 'Reduces la información que circula.', risk: 'Un mensaje escrito sigue siendo una captura posible.' },
          kusi: ['pensando', 'Menos riesgo… no cero riesgo.'] } },
    ],
    rules: [[BP, 'La víspera de un anuncio, lo que se escribe se reenvía. Cita en persona y cuenta en persona.']],
    mirada: {
      ve: 'Mauricio quiere que sus jefes lleguen preparados, y eso es razonable. El problema no es su intención: es el canal. En una reorganización, una captura de pantalla llega más rápido que cualquier plan cuidadosamente ordenado.',
      visual: { tipo: 'balanza', a: { t: 'Avisar hoy por WhatsApp', items: ['Jefes preparados', 'Riesgo de captura', 'Los seis podrían enterarse por otros'] }, b: { t: 'Reunirlos mañana en persona', items: ['Menos tiempo para prepararse', 'Control del orden', 'Una hoja con preguntas frecuentes'] } },
    },
  },
  {
    id: 'c5', t: '15:30', ch: 'documento', who: null, titulo: 'Las rutas', banner: 'assets/foto/plano-equipo.webp', lugar: 'Sala de la Gerencia Comercial, con el mapa de Lima', show: ['personas', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>Doce zonas pasan a ocho. 240 vendedores tienen que repartirse. El mapa de Lima está lleno de pósits. ${F.has('ruta_vista') ? 'Te acuerdas de las 48 bodegas de Kenji y de la cola del almacén.' : ''}</p><p>Kenji te escribió hace un rato: vive en Huaycán. <mark class="clave">Elige tres criterios</mark> para reasignar las rutas.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres criterios para reasignar a los vendedores.', boton: 'Usar estos criterios', resumen: 'Elegiste',
    cols: ['Criterio', 'Qué cuida'],
    rows: [
      { id: 'casa', cells: ['Cercanía entre la casa del vendedor y su nueva zona', 'Tiempo de traslado y razonabilidad del cambio'] },
      { id: 'clientes', cells: ['Mantener, en lo posible, los clientes que ya conoce', 'La relación con la bodega, que es lo que vende'] },
      { id: 'carga', cells: ['Carga parecida: número de bodegas y distancias', 'Que nadie reciba una ruta imposible'] },
      { id: 'jefe', cells: ['Que cada jefe elija a «sus» vendedores', 'La química del equipo'] },
      { id: 'nuevos', cells: ['Dar las rutas más lejanas a los más nuevos o a los extranjeros', '«Que se ganen su lugar»'] },
    ],
    score: { casa: 3, clientes: 3, carga: 3, jefe: -2, nuevos: -4 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, cumplimiento: q === 'buena' ? 3 : picks.includes('nuevos') ? -4 : 0 },
        flags: [q === 'buena' ? 'rutas_justas' : 'rutas_jhon'], cartera: { rutas: q === 'buena' ? 'Rutas por cercanía, clientes y carga' : 'Rutas a criterio de los jefes' },
        envia: q === 'buena' ? ['kenji', 'Kenji: «¿Me quedo en el este? 🙏 Ya, gracias, de verdad.»'] : undefined,
        out: q === 'buena' ? 'Con esos criterios, 190 de los 240 vendedores conservan la mayoría de sus clientes. Kenji se queda en el este, aunque cambia de jefe.' : picks.includes('nuevos') ? 'Fiorella ve la regla de «los extranjeros a las rutas lejanas» y la tacha en rojo: «Eso es discriminación».' : 'Las rutas se reparten, pero cada jefe arma su equipo «a su gusto».',
        pro: { ok: 'Criterios que se pueden explicar a cada vendedor y que respetan lo que sostiene la venta.', risk: 'Dejar la asignación al gusto de cada jefe repite lo que viste en SJL: las peores rutas para quien el jefe quiera.', info: 'Publica los criterios: un vendedor acepta mejor un cambio que entiende.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Rutas que se pueden explicar!' : '¿Quién se queda con las rutas feas?'],
      };
    },
    rules: [[LEY, 'TUO del D.Leg. 728, art. 9: el cambio de zona debe ser razonable y no perjudicar sin motivo.'], [LEY, 'Asignar rutas peores por la nacionalidad es discriminación.']],
    mirada: {
      ve: 'Para el vendedor, la reorganización no es un organigrama: es a qué hora sale de su casa y si sus bodegueras lo conocen. Unas rutas bien asignadas son la parte más visible, y la más concreta, de que el cambio fue justo.',
      visual: { tipo: 'embudo', titulo: 'Reasignación con criterios', niveles: [['Vendedores', 240], ['Conservan la mayoría de sus clientes', 190], ['Cambian a una zona más lejos de su casa', 18]] },
    },
  },
  {
    id: 'c6', t: '17:30', ch: 'whatsapp', who: null, titulo: 'Las palabras de las 11', banner: 'assets/esc/idea.webp', lugar: 'Tu escritorio, con el café frío', show: ['confianza', 'calidad', 'personas'],
    body: () => `<p>Mauricio te pide ayuda con lo que dirá mañana a las 11:00 frente a 300 personas, la mitad conectadas desde la ruta. «Tres minutos. No quiero leer.»</p><p><mark class="clave">Arma su mensaje</mark>.</p>`,
    type: 'compose', enviaA: 'mauricio', para: 'Para: Mauricio Lerner · Gerente Comercial', boton: 'Enviar la propuesta',
    prompt: 'Elige una frase para cada parte del mensaje.',
    slots: [
      { id: 'que', t: 'Qué cambia', ops: [
        { id: 'q1', t: 'Desde el lunes trabajaremos en 8 zonas, con jefes que acompañan en la calle y un analista que resolverá el stock y el crédito.', ok: true, por: 'Concreto y conectado con lo que viste en la ruta.' },
        { id: 'q2', t: 'Iniciamos una transformación disruptiva para llevar a Comercial al siguiente nivel.', ok: false, por: 'Nadie en la ruta entiende qué significa eso.' },
      ] },
      { id: 'dolor', t: 'Lo difícil', ops: [
        { id: 'd1', t: 'Algunos compañeros no continúan en Comercial. Hoy conversé con cada uno en persona, y les agradezco.', ok: true, por: 'Reconoce lo que duele, sin nombres.' },
        { id: 'd2', t: 'Todos los que están aquí siguen. Eso es lo importante.', ok: false, por: 'Ignora a quienes se van, y todos lo notarán.' },
      ] },
      { id: 'siguiente', t: 'Lo que viene', ops: [
        { id: 's1', t: 'Las metas nuevas las vamos a definir con ustedes. Su jefe de zona les explicará su ruta esta tarde.', ok: true, por: 'Promete solo lo que se va a cumplir.' },
        { id: 's2', t: 'Les aseguro que con esto todos van a ganar más.', ok: false, por: 'Una promesa que nadie puede garantizar.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'd1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : 0, personas: q === 'buena' ? 2 : -1 }, rel: { mauricio: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['discurso_claro'] : [],
        envia: ['mauricio', q === 'buena' ? 'Mauricio: «Lo voy a decir con mis palabras, pero esto es. Gracias.»' : 'Mauricio: «Ok, lo reviso.»'],
        out: q === 'buena' ? 'Mauricio lo ensaya en voz alta en su oficina, con la puerta abierta. Lo escuchas desde el pasillo: suena a él.' : 'Mauricio guarda tu propuesta. No sabes cuánto usará.',
        pro: { ok: 'Un mensaje corto, verdadero y en lenguaje de la calle.', info: 'Lo que Mauricio diga mañana tendrá que sostenerse el jueves, cuando se hablen las metas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Tres minutos que suenan a verdad.' : '¿Lo entendería Kenji desde la moto?'],
      };
    },
    rules: [[BP, 'Un anuncio dice qué cambia, reconoce lo que duele y promete solo lo que se cumplirá.']],
    mirada: { ve: 'Las palabras de un gerente en un anuncio se recuerdan durante años. No necesitan ser brillantes: necesitan ser verdaderas, concretas y decir en voz alta lo que todos ya saben que duele.' },
  },
  {
    id: 'c7', t: '19:00', ch: 'correo', who: null, titulo: 'La víspera', banner: 'assets/esc/pendulo.webp', show: ['confianza', 'personas'],
    mail: { from: 'Andrea Salazar', to: 'HR Business Partner · Comercial', asunto: '¿Cómo estás tú?' },
    body: () => `<p>Antes de que te vayas: ¿cómo estás tú? Mañana es un día duro y no quiero que lo vivas sola. <mark class="clave">Dime la verdad</mark>.</p><p>Andrea</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle la verdad: que estás cansada, que te pesa Patricia y que te ayudaría que esté en la sala de al lado.',
        res: { q: 'buena', fx: { confianza: 3, personas: 2 }, rel: { andrea: 1 }, responde: 'Andrea: estoy cansada y la conversación con Patricia me pesa. Me ayudaría mucho saber que estás en la sala de al lado.',
          out: 'Andrea responde: «Ahí estaré. Y el viernes almorzamos fuera, invito yo».', kusi: ['animo', 'Pedir apoyo también es parte del trabajo.'] } },
      { id: 'b', label: 'Responder que estás bien y que todo está bajo control.',
        res: { q: 'aceptable', fx: { confianza: 1, personas: -1 }, responde: 'Andrea: estoy bien, todo bajo control 💪',
          out: 'Andrea responde con un «ok». Esa noche duermes mal.', kusi: ['pensando', '¿De verdad estás bien?'] } },
    ],
    mirada: { ve: 'Quien acompaña los cambios difíciles también necesita ser acompañado. Un HRBP que se hace el fuerte todo el tiempo termina quemado o duro. Decir «me pesa» a tiempo es cuidar tu criterio para mañana.' },
  },
];
