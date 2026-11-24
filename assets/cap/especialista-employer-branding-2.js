// Analista de Comunicación Interna y Employer Branding · Capítulo 2 · «El boletín» · Semana 1, martes.
// Hilo de las dos semanas: las reseñas dicen que en las agencias nadie sale a su hora; tú descubres por qué y decides cómo se cuenta.
// Normas citadas (texto oficial en docs/normas/txt):
// - Ley 29733: art. 5 (consentimiento), art. 6 (finalidad). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - Constitución Política del Perú, art. 2 inc. 7 (derecho a la voz y a la imagen propias). Archivo: Constitucion-Politica-del-Peru-1993.txt

export const CAP = {
  n: 2, titulo: 'El boletín', dia: 'Semana 1, martes', foto: 'assets/foto2/celebra-laptop.webp',
  lugar: 'Banco Andino · Sede central de San Isidro, piso 9',
  inicio: '08:20', fin: '19:00', cierreHora: '18:40',
  apertura: 'Martes. El boletín «Andino Contigo» sale hoy a las 4 y, según el sistema de correo, solo lo abre el 9 % del banco. En las agencias, casi nadie.', boton: 'Abrir el boletín',
  kusi: 'Escribir para todos es escribir para la cajera que lo lee en el bus. ¡Dale!',
  lead: 'Encontraste por qué nadie leía el boletín, lo rehiciste para el celular, lo llevaste a las agencias por WhatsApp, negociaste el titular con Gerencia General y cuidaste los datos de quienes aparecen.',
  reflexion: '¿Cuándo fue la última vez que leíste completo un correo de tu empresa? ¿Qué lo hizo distinto?',
  siguiente: { n: 3, titulo: 'La agencia', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'boletin', p: 'Boletín «Andino Contigo»', j: 'Tú · Kiara', d: 1, e: 'Sale hoy a las 4' },
  { id: 'diagnostico', p: 'Diagnóstico de reputación', j: 'Fiorella', d: 1, e: 'Para el viernes' },
  { id: 'comas', p: 'Visita a la agencia Comas', j: 'Don Abel', d: 1, e: 'Mañana desde las 8' },
  { id: 'campana', p: 'Campaña de marca empleadora', j: 'Marco · Marketing', d: 1, e: 'Brief el jueves' },
];

export const FUTURO = {
  boletin_movil: ['Tu boletín se lee en el celular, en tres minutos.', 'Lo usarás para comunicar algo difícil el viernes.'],
  boletin_largo: ['El boletín sigue siendo un PDF largo.', 'El viernes, el comunicado importante también se perderá.'],
  wsp_agencias: ['Ahora llegas a las agencias por un canal de difusión de WhatsApp.', 'Ese canal será clave cuando aparezca un rumor. Capítulo 6.'],
  titular_honesto: ['El titular del boletín no promete lo que todavía no es verdad.', 'Las agencias lo notan. Jhoselyn lo menciona mañana.'],
  titular_marca: ['El boletín abrió con «Somos un gran lugar para trabajar».', 'En Comas lo leerán con ironía.'],
  cumple_consentimiento: ['Pediste permiso antes de publicar fotos y saludos.', 'Kiara aplicará la misma regla en la campaña.'],
};

export const CHATS = {
  equipo: { n: 'Experiencia del Colaborador', sub: 'Fiorella, Kiara y tú', c: '#B7791F' },
  fiorella: { n: 'Fiorella Chávez', sub: 'Jefa de Experiencia del Colaborador', who: 'fiorella' },
  marco: { n: 'Marco Delgado', sub: 'Gerente de Marketing', who: 'gerente' },
  difusion: { n: 'Andino Contigo · Agencias', sub: 'Canal de difusión · 46 supervisores', c: '#2F6B3F' },
  abel: { n: 'Abel Huamán', sub: 'Supervisor de la agencia Comas', c: '#2F6B3F' },
};

export const WSP = [
  { chat: 'equipo', t: '08:22', de: 'Kiara', txt: 'Buenos días ☀️ El boletín de hoy ya está maquetado: 14 páginas en PDF. ¿Lo mando así?' },
  { chat: 'fiorella', t: '08:40', de: 'Fiorella', txt: 'Gracias por lo de ayer. Hoy enfócate en el boletín, que sale a las 4. Si nadie lo lee, nada de lo que digamos después va a llegar.', si: 'diag_honesto' },
  { chat: 'fiorella', t: '08:40', de: 'Fiorella', txt: 'Hoy enfócate en el boletín. Y lo de la campaña positiva… pensémoslo bien, ¿ya?', si: 'diag_maquillado' },
  { chat: 'marco', t: '09:15', de: 'Marco', txt: 'Oye, el correo de las reseñas ya dio frutos: 23 de cinco estrellas en un día 🚀', si: 'resenas_compradas' },
  { chat: 'abel', t: '12:40', de: 'Abel', txt: 'Mañana la espero a las 7:45. Aquí el boletín no lo lee nadie, para que sepa. No hay tiempo ni computadora libre.', si: 'visita_comas' },
  { chat: 'difusion', t: '16:20', de: 'Abel', txt: '👍 Llegó. Se lo paso a mi gente.', si: 'wsp_agencias' },
];

export const CORREOS = [
  { t: '08:30', de: 'Sistema de correo masivo', para: 'Comunicación Interna', asunto: 'Reporte · boletín de octubre', html: '<p>Enviados: 2,013. Abiertos: 181 (9 %). Clics: 22. Abiertos desde agencias: 14. Tiempo promedio de lectura: 11 segundos.</p>' },
  { t: '13:10', de: 'Gabriela Soto · Asistente de Gerencia General', para: 'Comunicación Interna', asunto: 'Editorial del Gerente General', html: '<p>Hola. Te adjunto el editorial del Sr. Ernesto Bellido para el boletín de hoy (1,100 palabras). Él pide que vaya primero y con el titular «Somos un gran lugar para trabajar». Gracias.</p>' },
];

export const QUIZ = [
  { q: 'El boletín lo abre el 9 % y en agencias casi nadie. La causa más probable es…', ops: ['Que a la gente no le interesa la empresa', 'El formato y el canal: un PDF largo por correo para gente que no tiene computadora libre', 'Que falta un sorteo', 'Que sale los martes'], ok: 1, por: 'Antes de culpar al lector, revisa el canal: muchas personas de agencia no leen el correo en horario.' },
  { q: 'Un buen titular de comunicación interna…', ops: ['Promete algo que todavía no es verdad', 'Dice algo útil y verdadero para quien lo lee', 'Usa muchas mayúsculas', 'Repite el lema de la marca'], ok: 1, por: 'Un titular que no se corresponde con lo que vive la gente se lee con ironía.' },
  { q: 'Quieres publicar los cumpleaños con la fecha de nacimiento que figura en Planillas. ¿Qué haces?', ops: ['Publicarlos: ya están en el sistema', 'Pedir consentimiento: esos datos se recopilaron para la planilla, no para el boletín', 'Publicar solo los de la sede', 'Publicar la edad también'], ok: 1, por: 'Los datos no se usan para otra finalidad distinta a la de su recopilación (Ley 29733, art. 6) y se necesita consentimiento (art. 5).' },
  { q: 'La Constitución reconoce el derecho de toda persona…', ops: ['A que la empresa use su foto libremente', 'A la voz y a la imagen propias', 'A salir en el boletín', 'A no recibir correos'], ok: 1, por: 'El art. 2 inc. 7 reconoce el derecho al honor, a la intimidad y a la voz y a la imagen propias.' },
  { q: '¿Qué mide mejor si el boletín sirvió?', ops: ['Cuántos lo recibieron', 'Si la gente leyó, entendió y usó lo que decía', 'Cuántas páginas tiene', 'Cuántos likes tiene el post del Gerente'], ok: 1, por: 'Recibir no es leer; leer no es entender. Mide lo más cercano a la acción.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '08:45', ch: 'documento', who: null, titulo: 'Catorce páginas que nadie lee', banner: 'assets/foto/revisa.webp', show: ['calidad', 'tiempo'],
    body: () => `<p>Abres el PDF de «Andino Contigo». La portada es una foto del directorio en un evento. Después vienen 14 páginas de texto en dos columnas.</p><p>Con el reporte de 11 segundos de lectura al lado, lo revisas con lápiz rojo: <mark class="clave">¿por qué nadie llega a la página 2?</mark></p>`,
    type: 'flag', prompt: 'Marca lo que hace que nadie lea el boletín, o que sea un riesgo.',
    doc: { t: 'Andino Contigo · Edición de noviembre', sub: 'PDF de 14 páginas · se envía por correo a las 4 p. m.' },
    lines: [
      { id: 'pdf', t: 'Formato PDF de 14 páginas, a dos columnas, que en el celular hay que ampliar con los dedos.', bad: BP, why: 'Casi nadie en agencia lo abre en una computadora. En el celular es ilegible.' },
      { id: 'hora', t: 'Se envía a las 4 p. m., en plena atención al público.', bad: BP, why: 'En agencia, a esa hora nadie puede mirar el correo.' },
      { id: 'cumple', t: 'Sección «Cumpleañeros del mes» con nombre, DNI parcial y fecha de nacimiento sacados de Planillas.', bad: LEY, why: 'Datos recopilados para la planilla usados para otra finalidad, sin consentimiento (Ley 29733, arts. 5 y 6).' },
      { id: 'jerga', t: 'Texto lleno de siglas internas: «KPI de NPS del Q3 en el BU de Banca Personas».', bad: BP, why: 'Una cajera nueva no sabe qué es un BU. Escribir para todos es escribir sin jerga.' },
      { id: 'util', t: 'Recordatorio del cronograma de pago de la gratificación de diciembre.' },
      { id: 'reco', t: 'Reconocimiento al equipo de la agencia Huancayo por su atención en quechua.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Se te pasa la sección de cumpleaños. Kiara la deja tal cual, con fechas de nacimiento de 140 personas.' : `Marcas ${hitsLey} riesgo legal y tres razones de fondo por las que nadie lo lee. Rescatas lo útil: el cronograma de la gratificación y el reconocimiento a Huancayo.`,
      flags: missLey ? [] : ['cumple_consentimiento'],
      fx: { calidad: missLey ? -1 : 4, cumplimiento: missLey ? -3 : 3 },
      cartera: { boletin: missLey ? 'Boletín con cumpleaños sin permiso' : 'Boletín revisado: qué sobra y qué sirve' },
      pro: { ok: 'Lo útil y lo humano se quedan; lo que estorba se va.', risk: 'Que un dato esté en el sistema no significa que se pueda publicar.' },
      kusi: missLey ? ['preocupado', '¿Fechas de nacimiento para todo el banco?'] : ['feliz', 'La gratificación y Huancayo: eso sí se lee.'],
    }),
    rules: [[LEY, 'Los datos se usan solo para la finalidad con la que se recopilaron (Ley 29733, art. 6).'], [LEY, 'Para tratar datos personales debe mediar el consentimiento del titular (Ley 29733, art. 5).']],
    mirada: {
      ve: 'El boletín no fracasa porque a la gente no le importe el banco: fracasa porque fue pensado para quien está sentado frente a una computadora en San Isidro. La mayoría del banco trabaja de pie, detrás de una ventanilla.',
      visual: { tipo: 'embudo', titulo: 'El viaje del boletín de octubre', niveles: [['Enviados', 2013], ['Abiertos', 181], ['Abiertos desde agencias', 14], ['Con un clic', 22]] },
    },
  },
  {
    id: 'b2', t: '10:00', ch: 'presencial', who: null, titulo: 'El boletín nuevo', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Sala de Experiencia del Colaborador', show: ['calidad', 'personas'],
    body: () => `<p>Kiara se sienta a tu lado con su tablet y un chifle de la máquina. «Tenemos hasta las 3 para rehacerlo. ¿Qué cambiamos?»</p><p>Deciden armarlo por piezas: <mark class="clave">formato, contenido y canal</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del nuevo boletín.', boton: 'Mandar a Kiara',
    bloques: [
      { id: 'formato', t: 'Formato', n: 2, ops: [
        { id: 'f1', t: 'Una sola columna que se lee en el celular, en menos de tres minutos.', ok: true, por: 'Se lee en el bus o en el refrigerio.' },
        { id: 'f2', t: 'Titulares que dicen la noticia, no el tema: «La gratificación se paga el 15», no «Beneficios».', ok: true },
        { id: 'f3', t: 'Más fotos del directorio, para que se vea institucional.', ok: false, por: 'Nadie se reconoce en esas fotos.' },
      ] },
      { id: 'contenido', t: 'Contenido', n: 2, ops: [
        { id: 'c1', t: 'Lo útil primero: pagos, horarios, trámites.', ok: true, por: 'Lo que resuelve una duda se lee siempre.' },
        { id: 'c2', t: 'Una historia de una agencia, contada por su gente y con su permiso.', ok: true },
        { id: 'c3', t: 'Un concurso de selfies con el logo para subir la tasa de apertura.', ok: false, por: 'Sube la apertura una semana; no resuelve por qué no leen.' },
      ] },
      { id: 'canal', t: 'Canal', n: 2, ops: [
        { id: 'k1', t: 'Un canal de difusión de WhatsApp para los 46 supervisores, que lo pasan a sus equipos.', ok: true, por: 'Llega a donde está la gente.' },
        { id: 'k2', t: 'Enviarlo a las 8:15, antes de que abran las agencias.', ok: true },
        { id: 'k3', t: 'Pedir a los supervisores que confirmen que todo su equipo lo leyó.', ok: false, por: 'Convierte un boletín en una tarea controlada. Y nadie lee lo que lee por obligación.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? ['boletin_largo'] : ['boletin_movil', 'wsp_agencias'],
        cartera: { boletin: q === 'riesgosa' ? 'Boletín con cambios cosméticos' : 'Boletín móvil + canal de WhatsApp para agencias' },
        out: q === 'buena' ? 'Kiara arma un prototipo en el celular: se lee de un dedo, de arriba abajo. «Por fin algo que yo misma leería», dice.' : q === 'aceptable' ? 'El boletín mejora, aunque algunas piezas van a estorbar.' : 'Queda un boletín más bonito, pero igual de difícil de leer donde importa.',
        pro: { ok: 'Diseñas para quien lee, no para quien aprueba.', risk: 'Medir apertura con concursos o controles infla el número y no el interés.', info: 'Pregunta a dos cajeras qué quieren leer. Mañana tienes la oportunidad.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un boletín que cabe en el bolsillo!' : 'Algunas piezas sobran.'],
      };
    },
    rules: [[BP, 'Escribe para quien lee de pie y en el celular: corto, útil y en una columna.']],
    mirada: {
      ve: 'Escribir para todos no es escribir más simple: es escribir para la persona con menos tiempo y menos contexto. Si una cajera de Comas entiende el boletín en el bus, el gerente de la sede también lo va a entender.',
      visual: { tipo: 'cambio', titulo: 'Del PDF al bolsillo', pares: [['14 páginas en PDF', 'Una columna, tres minutos'], ['Correo a las 4 p. m.', 'WhatsApp a las 8:15'], ['Foto del directorio', 'Historia de una agencia']] },
    },
  },
  {
    id: 'b3', t: '11:40', ch: 'whatsapp', who: null, titulo: 'El primer mensaje del canal', banner: 'assets/foto2/callcenter.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Fiorella aprueba el canal de difusión para los 46 supervisores. El primer mensaje marca el tono de todo lo que vendrá.</p><p>Si suena a «comunicado de la sede», <mark class="clave">lo silencian en una hora</mark>.</p>`,
    type: 'compose', enviaA: 'difusion', para: 'Para: Andino Contigo · Agencias (46 supervisores)', boton: 'Programar para mañana 8:15',
    prompt: 'Arma el primer mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Para qué es el canal', ops: [
        { id: 'q1', t: 'Hola, equipo de agencias 👋 Este canal es para que les llegue lo importante, corto y a tiempo.', ok: true, por: 'Dice para qué sirve, en una línea.' },
        { id: 'q2', t: 'Estimados colaboradores: por disposición de la Gerencia, se crea el presente canal oficial de comunicación.', ok: false, por: 'Suena a memorándum. Lo silencian.' },
      ] },
      { id: 'promesa', t: 'Qué les prometes', ops: [
        { id: 'p1', t: 'Máximo dos mensajes por semana, antes de la apertura, y nunca para pedirles algo fuera de horario.', ok: true, por: 'Una promesa concreta y que puedes cumplir.' },
        { id: 'p2', t: 'Aquí les llegará todo lo que necesiten saber, las 24 horas.', ok: false, por: 'Promete demasiado y suena a carga.' },
      ] },
      { id: 'pide', t: 'Qué les pides', ops: [
        { id: 'k1', t: 'Si algo no se entiende o falta, respóndanme a mí por privado.', ok: true, por: 'Abres una puerta de ida y vuelta.' },
        { id: 'k2', t: 'Confirmen con un 👍 que lo leyeron.', ok: null, por: 'No es grave, pero empieza como control.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'p1', 'k1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.que === 'q2' ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : q === 'riesgosa' ? -2 : 1 },
        flags: q === 'riesgosa' ? [] : ['wsp_agencias'],
        out: q === 'buena' ? 'Don Abel es el primero en responderte por privado: «Esto sí. Y gracias por lo de "nunca fuera de horario"».' : q === 'riesgosa' ? 'Tres supervisores silencian el canal antes del almuerzo.' : 'El canal arranca. Algunos supervisores reaccionan con un pulgar, sin más.',
        pro: { ok: 'Un canal vive de que cumplas tu promesa: pocos mensajes, útiles y a tiempo.', risk: 'El tono de memorándum mata un canal antes de que exista.', info: 'Prometer «nunca fuera de horario» también es coherencia con lo que dicen las reseñas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Corto, útil y con promesa. ¡Bacán!' : 'Ese tono no invita a leer.'],
      };
    },
    rules: [[BP, 'En un canal de difusión, la promesa de frecuencia es tan importante como el contenido.']],
    mirada: {
      ve: 'Los canales internos de WhatsApp se llenan rápido de mensajes y se silencian igual de rápido. El primer mensaje es un contrato: si cumples lo que prometes, cuando un día tengas que contar algo difícil, la gente todavía estará escuchando.',
      visual: { tipo: 'mensaje', titulo: 'El primer mensaje', txt: 'Hola, equipo de agencias 👋 Este canal es para que les llegue lo importante, corto y a tiempo. Máximo dos mensajes por semana, antes de la apertura, y nunca fuera de horario. Si algo no se entiende, respóndanme por privado.' },
    },
  },
  {
    id: 'b4', t: '13:30', ch: 'correo', who: null, titulo: 'El editorial del Gerente General', banner: 'assets/foto/reunion-jefa.webp', show: ['etica', 'confianza', 'calidad'],
    mail: { from: 'Gabriela Soto · Gerencia General', to: 'Comunicación Interna', asunto: 'Editorial del Gerente General' },
    body: (n, F) => `<p>El editorial del Sr. Bellido tiene 1,100 palabras y abre con «Somos un gran lugar para trabajar». Pide ir primero, con ese titular.</p><p>${F.has('diag_honesto') ? 'Ayer le escribiste a Fiorella que en 31 agencias la gente sale 50 minutos tarde.' : 'Tienes en la cabeza las 214 reseñas.'} <mark class="clave">Ese titular, en Comas, se va a leer con ironía</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponer a Gabriela un titular verdadero con el mensaje del Gerente: «Queremos ser un gran lugar para trabajar: esto es lo que vamos a cambiar», y un resumen de 150 palabras con enlace al texto completo.',
        res: { q: 'buena', fx: { etica: 4, calidad: 3, confianza: 1 }, flags: ['titular_honesto'], cartera: { boletin: 'Editorial con titular verdadero y resumen corto' },
          responde: 'Gabriela, gracias. Propongo mantener la idea del Sr. Bellido con un titular que la gente de agencias sienta verdadero: «Queremos ser un gran lugar para trabajar: esto es lo que vamos a cambiar». Para que se lea en el celular, iría un resumen de 150 palabras y el texto completo en un enlace. ¿Lo consultas con él?',
          out: 'A las 2:40 Gabriela responde: «Al señor Bellido le gustó el "queremos". Dice que es más honesto». Respiras.',
          pro: { ok: 'Respetas al Gerente y a quien lo va a leer.', risk: 'Proponer cambios a Gerencia General el segundo día tiene su riesgo. Esta vez salió bien.' },
          kusi: ['celebra', '«Queremos ser». Dos palabras que cambian todo.'] } },
      { id: 'b', label: 'Publicarlo tal cual, primero y completo: es el Gerente General y no se le corrige un editorial.',
        res: { q: 'aceptable', fx: { confianza: 1, calidad: -2, etica: -1 }, flags: ['titular_marca'],
          out: 'El editorial ocupa toda la pantalla del celular y un poco más. En el grupo de WhatsApp de cajeros de Lima Norte, alguien comparte el titular con un emoji de risa.',
          pro: { ok: 'Evitas un roce con Gerencia General.', risk: 'Un titular que no coincide con lo que vive la gente se convierte en meme.' },
          kusi: ['pensando', 'El jefe queda contento. ¿Y los lectores?'] } },
      { id: 'c', label: 'Mover el editorial al final del boletín, sin avisar, para que no espante a los lectores.',
        res: { q: 'riesgosa', fx: { confianza: -4, calidad: 1 }, rel: { fiorella: -1 },
          out: 'A las 4:20 te llama Gabriela, molesta: «El señor Bellido pidió ir primero». Fiorella tiene que dar explicaciones por ti.',
          pro: { ok: 'El boletín se lee mejor.', risk: 'Cambiar un pedido de Gerencia sin consultarlo quema tu confianza en tu primera semana.' },
          kusi: ['preocupado', 'Sin avisar, nunca.'] } },
    ],
    rules: [[BP, 'Propón, no impongas: un buen titular respeta a quien firma y a quien lee.']],
    mirada: {
      ve: 'La comunicación interna vive entre dos lealtades: a la gerencia que firma y a la gente que lee. No se trata de elegir una, sino de encontrar la frase en que ambas se reconozcan. «Queremos ser» es aspiración; «somos» es una afirmación que cualquiera puede desmentir.',
      visual: { tipo: 'balanza', a: { t: '«Somos un gran lugar»', items: ['Le gusta a la sede', 'Se desmiente en una reseña', 'Se vuelve meme'] }, b: { t: '«Queremos ser… y esto cambia»', items: ['Es verdad hoy', 'Compromete a la gerencia', 'Se puede medir después'] } },
    },
  },
  {
    id: 'b5', t: '15:00', ch: 'documento', who: null, titulo: 'Antes de publicar la historia', banner: 'assets/esc/meta.webp', show: ['cumplimiento', 'calidad'],
    body: () => `<p>La historia de la agencia Huancayo es lo mejor del boletín: una asesora atiende en quechua a los clientes de Chupaca y Concepción. Kiara tiene la foto y una frase de ella.</p><p>Falta una hora para enviarlo. <mark class="clave">Ordena lo que hay que hacer antes de publicar</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos antes de publicar la historia. Usa las flechas.', boton: 'Listo para enviar',
    items: [
      { id: 'perm', t: 'Pedirle a la asesora su permiso para usar su foto, su nombre y su frase en el boletín', por: 'Su voz y su imagen son suyas.' },
      { id: 'lee', t: 'Mandarle el texto final para que lo lea y lo apruebe', por: 'Que se reconozca en lo que dice.' },
      { id: 'jefe', t: 'Avisar a su supervisora que la historia va a salir', por: 'Que nadie se entere por el boletín.' },
      { id: 'mov', t: 'Probar el boletín en un celular de gama baja', por: 'Así lo leen en muchas agencias.' },
      { id: 'env', t: 'Programar el envío para mañana a las 8:15', por: 'Antes de que abran las agencias.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['cumple_consentimiento'],
        cartera: { boletin: q === 'riesgosa' ? 'Boletín listo, permisos dudosos' : 'Boletín listo para mañana 8:15' },
        out: q === 'buena' ? 'La asesora responde con un audio: «Sí, publíquelo nomás. Mi mamá se va a poner contenta». Corrige una palabra en quechua que Kiara había escrito mal.' : 'El boletín sale, pero un paso quedó fuera de lugar. Mejor revisarlo para la próxima.',
        pro: { ok: 'Primero el permiso, luego todo lo demás.', risk: 'Publicar la foto de alguien sin su permiso es usar su imagen sin que la controle.', info: 'Guarda el permiso por escrito, aunque sea un WhatsApp.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Hasta corrigió el quechua! ¡Qué divino!' : 'El permiso va primero.'],
      };
    },
    rules: [[LEY, 'Toda persona tiene derecho a la voz y a la imagen propias (Constitución, art. 2 inc. 7).'], [LEY, 'Para usar datos personales, como el nombre y la foto, debe mediar consentimiento (Ley 29733, art. 5).']],
    mirada: {
      ve: 'Las historias de colaboradores son el corazón de una marca empleadora creíble, pero también son de ellos. Pedir permiso y dejar que lean el texto no es un trámite: es lo que hace que la próxima persona quiera contar su historia.',
      visual: { tipo: 'flujo', titulo: 'Una historia con permiso', pasos: ['Permiso', 'Ella lo lee', 'Avisar a la supervisora', 'Prueba en celular', 'Envío 8:15'] },
      normas: [{ ley: 'Constitución Política del Perú, art. 2 inc. 7', dice: 'Toda persona tiene derecho al honor y a la buena reputación, a la intimidad personal y familiar, así como a la voz y a la imagen propias.', practica: 'La foto de la asesora de Huancayo no es del banco: es de ella. Por eso se pide.' }],
    },
  },
  {
    id: 'b6', t: '18:00', ch: 'sistema', who: 'fiorella', titulo: '¿Cómo sabremos si funcionó?', banner: 'assets/esc/reloj.webp', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Fiorella pasa por tu sitio con la cartera al hombro. ${F.has('boletin_movil') ? '«El prototipo está precioso.' : '«Bueno, salió.'} Pero el lunes Gerencia me va a preguntar si funcionó. <mark class="clave">¿Qué vamos a medir?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Tres cosas: cuántos lo abren desde agencias, cuántos responden por privado y si baja la pregunta más repetida de la semana (la fecha de la gratificación).',
        res: { q: 'buena', fx: { calidad: 4, confianza: 3 }, rel: { fiorella: 1 },
          out: 'Fiorella sonríe: «Medir si dejan de preguntar. Me gusta». Anota las tres en un post-it y lo pega en tu monitor.',
          pro: { ok: 'Mides lectura, conversación y efecto real.', info: 'La métrica más honesta de un mensaje útil es que la duda deje de repetirse.' },
          kusi: ['celebra', '¡Medir que dejen de preguntar! Genial.'] } },
      { id: 'b', label: 'La tasa de apertura: es el número que Gerencia ya conoce y se compara fácil con el 9 % de octubre.',
        res: { q: 'aceptable', fx: { calidad: 1 },
          out: 'Es un buen número para empezar, aunque no te dirá si alguien entendió algo.',
          pro: { ok: 'Es comparable.', risk: 'Abrir no es leer, y leer no es entender.' },
          kusi: ['pensando', '¿Y si lo abren y no lo entienden?'] } },
      { id: 'c', label: 'Pedirles a los supervisores una lista con los nombres de quienes lo leyeron.',
        res: { q: 'riesgosa', fx: { confianza: -3, personas: -3 },
          out: 'Fiorella frunce el ceño: «Eso es control, no comunicación. Nadie va a leer por gusto algo que le piden reportar».',
          pro: { ok: 'Tendrías un dato exacto.', risk: 'Convertir la lectura en un reporte nominal mata el interés.' },
          kusi: ['preocupado', 'Leer por obligación no es leer.'] } },
    ],
    rules: [[BP, 'Mide lo más cercano a la acción: que se entienda y se use, no solo que llegue.']],
    mirada: {
      ve: 'Mañana vas a Comas. Ahí sabrás si tu boletín cabe en la vida de una cajera… y si lo que dice es verdad para ella.',
      visual: { tipo: 'embudo', titulo: 'Lo que vale la pena medir', niveles: [['Recibieron', 2013], ['Abrieron', 600], ['Respondieron o preguntaron', 40], ['Dejaron de preguntar lo mismo', 1]] },
    },
  },
];
