// Asistente de Capacitación · Capítulo 2 · «La plataforma» · Semana 1, martes.
// Hilo de las dos semanas: la «escuela de cajeros» de Boticas del Norte, 120 personas nuevas en seis grupos, en Trujillo.
// Normas citadas:
// - Ley 29973, Ley General de la Persona con Discapacidad, art. 50: derecho a ajustes razonables en el lugar de trabajo;
//   el empleador los realiza salvo que demuestre una carga desproporcionada o indebida (modificado por el D. Leg. 1417).
//   https://cdn.www.gob.pe/uploads/document/file/5843154/5182571-rd-129-2024-munoz-loayza-henry-otorgamiento-y-aplicacion-de-ajustes-razonables.pdf
//   https://lpderecho.pe/modifican-reglamento-de-la-ley-29973-ley-general-de-la-persona-con-discapacidad/
// - Ley 29733, Ley de Protección de Datos Personales (ya citada en el proyecto): solo se recogen los datos necesarios y se
//   comparten por canales controlados.
// - Reglamento de la Ley 29783, art. 27-A: la capacitación al ingreso es presencial (capítulo 1).
// Empresa, plataforma, personas y cifras son ficticias.

export const CAP = {
  n: 2, titulo: 'La plataforma', dia: 'Semana 1, martes', foto: 'assets/foto2/tablet-equipo.webp',
  lugar: 'Boticas del Norte · Aula de respaldo y oficina de Sistemas, Trujillo',
  inicio: '07:45', fin: '19:00', cierreHora: '18:45',
  apertura: 'Martes. Primer día de los grupos 1 y 2. A las 7:45 ya hay gente esperando en la vereda, con su DNI en la mano y cara de primer día. Esta noche tienen que entrar a AulaNorte para el módulo virtual de mañana.', boton: 'Abrir la puerta',
  kusi: 'Hoy conoces a tus primeros 40. Y a la plataforma… que no siempre es tan amable.',
  lead: 'Rescataste a los que no llegaron, encontraste por qué la mitad no podía entrar, corregiste la guía de acceso, pediste un ajuste para Kevin y le contaste a Karen la verdad en números.',
  reflexion: 'Cuando una persona no puede entrar a una plataforma, ¿de quién es el problema: suyo, de Sistemas o tuyo?',
  siguiente: { n: 3, titulo: 'El facilitador', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'cronograma', p: 'Cronograma de los seis grupos', j: 'Karen · Capacitación', d: 0, e: 'Publicado' },
  { id: 'asistencia', p: 'Asistencia de los grupos 1 y 2', j: 'Tú', d: 0, e: 'Por registrar' },
  { id: 'plataforma', p: 'AulaNorte (plataforma virtual)', j: 'Fiorella · Sistemas', d: 0, e: '40 usuarios creados anoche' },
  { id: 'guia', p: 'Guía de acceso a AulaNorte', j: 'Fiorella y tú', d: 0, e: 'Borrador' },
  { id: 'ajustes', p: 'Ajustes para participantes', j: 'Karen · Capacitación', d: 0, e: 'Sin casos' },
];

export const FUTURO = {
  rescate_ok: ['Recuperaste a los que no llegaron sin amenazarlos.', 'Yanet no olvidará que la esperaste.'],
  causas_claras: ['Sabes por qué fallan los accesos: carné de extranjería, correos mal escritos y claves que vencen.', 'Fiorella te tomará en serio.'],
  guia_clara: ['La guía de acceso es clara y no pide datos de más.', 'Los grupos 3 a 6 entrarán más fácil.'],
  datos_grupo: ['La guía pidió fotos del DNI por el grupo de WhatsApp.', 'Karen lo verá en el capítulo 3.'],
  ajuste_kevin: ['Pediste subtítulos y transcripción para Kevin.', 'Su voz pesará en la encuesta del capítulo 6.'],
  kevin_exonerado: ['Exoneraste a Kevin del módulo virtual.', 'Le faltará una parte del examen del viernes.'],
  ce_resuelto: ['Fiorella habilitó el ingreso con carné de extranjería.', 'Daniela y otros cuatro podrán entrar.'],
  reporte_numeros: ['Karen recibió el avance en números y un riesgo.', 'Confiará más en tus reportes.'],
};

export const CHATS = {
  area: { n: 'Capacitación · Boticas del Norte', sub: 'Karen, Fiorella y tú', c: '#C05621' },
  karen: { n: 'Karen Vásquez', sub: 'Analista de Capacitación', who: 'karen' },
  jorge: { n: 'Q. F. Jorge Lázaro', sub: 'Facilitador', who: 'facilitador' },
  fiorella: { n: 'Fiorella Paredes', sub: 'Sistemas · AulaNorte', c: '#2B6CB0' },
  grupo1: { n: 'Escuela de cajeros · Grupos 1 y 2', sub: '40 participantes', c: '#2F6B3F' },
  yanet: { n: 'Yanet Chávez', sub: 'Participante · Grupo 1', c: '#B83280' },
};

export const WSP = [
  { chat: 'area', t: '07:50', de: 'Fiorella', txt: 'Buen día. Usuarios creados: usuario = DNI, clave temporal = Boticas2026. Vence en 24 horas ⏳' },
  { chat: 'grupo1', t: '07:52', de: 'Kevin', txt: 'Buenos días. Ya estoy afuera. Soy Kevin, uso audífono, por si acaso 👂' },
  { chat: 'yanet', t: '08:35', de: 'Yanet', txt: 'Señorita, perdón, mi mamá llegó tarde para quedarse con la bebé. Estoy en la combi, llego 9:10 😔', si: 'mensaje_claro' },
  { chat: 'yanet', t: '08:35', de: 'Yanet', txt: 'Señorita, no sabía que era en otro sitio. Fui a la Av. España y estaba cerrado 😔 Ya voy para allá.', no: 'mensaje_claro' },
  { chat: 'jorge', t: '09:15', de: 'Jorge', txt: 'La inducción de seguridad va muy bien. ¡Preguntan muchísimo! Me voy a extender un poquito 😄' },
  { chat: 'grupo1', t: '13:05', de: 'Daniela', txt: 'Disculpen, mi usuario no entra. Tengo carné de extranjería y la plataforma dice «documento inválido» 🇻🇪' },
  { chat: 'fiorella', t: '17:10', de: 'Fiorella', txt: 'Listo, ya acepta 9 dígitos. Gracias por el detalle, nadie me había dicho que había CE 🙌', si: 'ce_resuelto' },
];

export const CORREOS = [
  { t: '07:55', de: 'Karen Vásquez', para: 'Asistente de Capacitación', asunto: 'Hoy empezamos', html: '<p>Hoy estoy en Operaciones toda la mañana. Jorge dicta la inducción de seguridad y la parte de caja. Tú eres la dueña del aula: asistencia, refrigerios y plataforma.</p><p>Esta noche todos deben entrar a AulaNorte. Mañana es el módulo virtual. Avísame a las 6 cómo vamos.</p><p>Karen</p>' },
  { t: '11:30', de: 'AulaNorte · Notificaciones', para: 'capacitacion@boticasnorte.pe', asunto: 'Reporte de accesos · Grupos 1 y 2', html: '<p>Usuarios activos: 19 de 40. Intentos fallidos: 37. Correos rebotados: 6.</p>' },
];

export const QUIZ = [
  { q: 'Kevin tiene hipoacusia y los videos del módulo no tienen subtítulos. ¿Qué corresponde?', ops: ['Exonerarlo del módulo', 'Hacer un ajuste razonable: subtítulos, transcripción o apoyo', 'Que pida ayuda a un compañero', 'Nada: es igual para todos'], ok: 1, por: 'La Ley 29973 (art. 50) reconoce el derecho a ajustes razonables en el lugar de trabajo, salvo carga desproporcionada que el empleador debe demostrar.' },
  { q: 'Para que alguien recupere su clave, la guía de acceso debería pedir…', ops: ['Una foto del DNI por el grupo de WhatsApp', 'Que escriba a Sistemas por el canal de la empresa, solo con su nombre y local', 'Su clave de correo personal', 'Su dirección de casa'], ok: 1, por: 'Se piden solo los datos necesarios y por canales controlados (Ley 29733).' },
  { q: 'La mitad no puede entrar. ¿Qué haces primero?', ops: ['Culpar a los participantes', 'Agrupar los errores para encontrar las causas', 'Pedir otra plataforma', 'Esperar a mañana'], ok: 1, por: 'Diez errores distintos suelen ser tres causas repetidas.' },
  { q: 'Una participante llega tarde porque no tenía con quién dejar a su bebé. Lo mejor es…', ops: ['Mandarla de regreso', 'Recibirla, ponerla al día y registrar la hora real de llegada', 'Marcarla como falta', 'Ignorar el retraso'], ok: 1, por: 'Registrar con verdad y ayudarla a ponerse al día sostiene la asistencia sin humillar.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '08:40', ch: 'llamada', who: null, titulo: 'Los que no llegaron', banner: 'assets/foto/llamada.webp', lugar: 'Puerta del aula', show: ['personas', 'tiempo', 'calidad'],
    body: (n, F) => `<p>${F.has('aula_hotel') ? 'El salón del hotel huele a alfombra nueva.' : 'El almacén de Húsares de Junín huele a cartón y a desinfectante.'} Pasas lista: 34 de 40. Jorge ya empezó la inducción de seguridad con la ruta de evacuación.</p><p>Faltan seis. <mark class="clave">Llamas a los primeros cinco</mark>.</p>`,
    type: 'calls',
    calls: [['Yanet Chávez', 'Contesta: en la combi', 'Ay, señorita, ya llego, perdóneme, la bebé…'], ['Luis Alfaro', 'No contesta'], ['Rosa Gamboa', 'Contesta: está en el local', 'Mi jefa me dijo que primero abra la caja y luego vaya…'], ['Jhon Cueva', 'Contesta: se equivocó de día', '¿Era hoy? Pensé que era el jueves.'], ['Milagros Sánchez', 'Número equivocado']],
    prompt: 'Tienes cinco casos distintos. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Esperar a Yanet y ponerla al día en el refrigerio, llamar a la jefa de Rosa para que la libere ya, pasar a Jhon al grupo 3 y dejarle un WhatsApp a Luis.',
        res: { q: 'buena', fx: { personas: 4, calidad: 2, tiempo: -1 }, flags: ['rescate_ok'], cartera: { asistencia: 'Grupo 1: 36 · 2 reprogramados · 2 por ubicar' },
          envia: [['yanet', 'Tranquila, Yanet. Te esperamos. Al llegar anótate con tu hora real y en el refrigerio te pongo al día con lo de seguridad.']],
          out: 'Rosa llega a las 9:20, todavía con el mandil del local. Yanet entra sin aire y se sienta adelante. Jhon queda para el jueves.',
          pro: { ok: 'Cada caso con su solución, y la inducción sigue.', info: 'Corrige en el Excel el número de Milagros con su jefe de local.' },
          kusi: ['feliz', 'Nadie se perdió en el primer día.'] } },
      { id: 'b', label: 'Marcar las seis faltas y seguir: la puntualidad también se aprende desde el primer día.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -1 }, cartera: { asistencia: 'Grupo 1: 34 · 6 faltas' },
          out: 'Yanet llega a las 9:10 y la encuentras sentada afuera, sin saber si puede entrar. Rosa nunca llega: su jefa la necesitaba.',
          pro: { ok: 'Registro estricto.', risk: 'Seis personas sin la inducción de seguridad de ingreso son seis personas que no pueden empezar en caja.' },
          kusi: ['triste', 'La falta queda… y la persona también, sin capacitar.'] } },
    ],
    rules: [[LEY, 'Sin la inducción de seguridad presencial de ingreso, la persona no debería empezar en su puesto (Reglamento de la Ley 29783, art. 27-A).'], [BP, 'Registra la hora real de llegada; no la maquilles ni castigues de entrada.']],
    mirada: {
      ve: 'Detrás de cada falta del primer día hay una razón concreta: una bebé, una jefa, un día confundido. Rescatar a cada persona no es ser blanda: es cuidar que nadie empiece en caja sin la capacitación que necesita.',
      visual: { tipo: 'embudo', titulo: 'El primer día del grupo 1', niveles: [['Convocados', 40], ['Llegaron a las 8:40', 34], ['Rescatados en la mañana', 36]] },
    },
  },
  {
    id: 'p2', t: '11:40', ch: 'sistema', who: null, titulo: '19 de 40', banner: 'assets/esc/lupa.webp', lugar: 'Laptop de Karen, en el refrigerio', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>En el refrigerio pides que cada uno pruebe entrar a AulaNorte desde su celular. El reporte llega solo: <mark class="clave">19 de 40 entraron; 37 intentos fallidos</mark>. Te quedan veinte minutos antes de que vuelva Jorge.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres pistas que revisas primero.', boton: 'Revisar estas pistas', resumen: 'Revisaste',
    cols: ['Pista', 'Lo que podría explicar'],
    rows: [
      { id: 'ce', cells: ['Quiénes tienen carné de extranjería', 'La plataforma solo acepta 8 dígitos'] },
      { id: 'correo', cells: ['Los 6 correos que rebotaron', 'Alguien escribió «gmial» o «hotmial»'] },
      { id: 'clave', cells: ['A qué hora se creó la clave temporal', 'Si vence antes de esta noche'] },
      { id: 'marca', cells: ['La marca del celular de cada uno', 'Si los Android baratos fallan'] },
      { id: 'edad', cells: ['La edad de los que no entran', 'Si «los mayores no saben»'] },
    ],
    score: { ce: 3, correo: 3, clave: 3, marca: 0, edad: -3 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, confianza: q === 'buena' ? 2 : 0, etica: picks.includes('edad') ? -2 : 0 },
        flags: q === 'buena' ? ['causas_claras'] : [], cartera: { plataforma: q === 'buena' ? 'Tres causas: CE, correos y clave que vence' : 'Accesos fallan, causa incierta' },
        out: q === 'buena' ? 'En quince minutos lo ves: cinco carnés de extranjería rechazados, seis correos mal escritos y una clave que vence a las 7:50 de la noche, justo cuando todos llegan a casa.' : picks.includes('edad') ? 'Los mayores no fallan más que los jóvenes. Perdiste diez minutos en un prejuicio.' : 'Encuentras algo, pero no el patrón completo.',
        pro: { ok: 'Agrupar errores convierte 37 fallos en tres causas que se pueden arreglar.', risk: 'Buscar la culpa en la edad o en el celular de la gente desvía de lo que sí falla: la configuración.', info: 'Lleva el patrón a Sistemas con ejemplos concretos.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Detective de plataformas!' : 'El patrón está en otro lado.'],
      };
    },
    mirada: {
      ve: 'Cuando la mitad no entra a una plataforma, casi nunca es «la gente no sabe». Suelen ser pocas causas repetidas: un campo mal configurado, datos mal digitados, una clave que vence a mala hora. Encontrarlas es parte del trabajo de quien administra lo virtual.',
      visual: { tipo: 'embudo', titulo: 'De 37 fallos a 3 causas', niveles: [['Intentos fallidos', 37], ['Personas sin entrar', 21], ['Causas', 3]] },
    },
  },
  {
    id: 'p3', t: '12:30', ch: 'documento', who: null, titulo: 'La guía de acceso', banner: 'assets/esc/escritorio.webp', show: ['cumplimiento', 'calidad', 'personas'],
    body: () => `<p>Fiorella te manda un borrador de «Guía de acceso a AulaNorte» para repartir hoy. Lo hizo rápido, entre otros cinco pedidos. <mark class="clave">Revísala antes de que llegue a 120 celulares</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que incumplen la ley o que conviene cambiar.',
    doc: { t: 'Guía de acceso a AulaNorte', sub: 'Borrador · Sistemas · Boticas del Norte' },
    lines: [
      { id: 'url', t: '1. Entra a aulanorte.boticasnorte.pe desde Chrome.' },
      { id: 'user', t: '2. Usuario: tu DNI (8 dígitos).', bad: BP, why: 'Deja fuera a quienes tienen carné de extranjería. Debe decir: «tu DNI o tu carné de extranjería».' },
      { id: 'foto', t: '3. Si no puedes entrar, manda una foto de tu DNI por ambos lados al grupo de WhatsApp.', bad: LEY, why: 'Expone el documento de identidad a 40 personas. Solo se piden los datos necesarios, por un canal controlado (Ley 29733).' },
      { id: 'clave', t: '4. Tu clave temporal vence en 24 horas. Cámbiala la primera vez que entres.' },
      { id: 'publica', t: '5. Te recomendamos usar como nueva clave tu fecha de nacimiento, para no olvidarla.', bad: BP, why: 'Es una clave fácil de adivinar para cualquiera que conozca a la persona.' },
      { id: 'datos', t: '6. Si no tienes datos, avísanos: el día virtual puedes conectarte desde el aula de respaldo.' },
      { id: 'noche', t: '7. Los módulos deben verse en tu casa, de noche, después de tu turno.', bad: LEY, why: 'El módulo virtual es parte de la capacitación: va dentro de la jornada, no después del turno (Reglamento de la Ley 29783, art. 28).' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Corriges el usuario y la clave, pero algo más grave sigue en la guía. Fiorella la publica a las 2.' : `Marcas ${hitsLey} problemas legales. Fiorella responde: «Uf, lo de la foto del DNI ni lo pensé. Lo cambio ya».`,
      flags: [missLey ? 'datos_grupo' : 'guia_clara'], rel: { karen: missLey ? 0 : 1 },
      cartera: { guia: missLey ? 'Guía publicada con fallas' : 'Guía corregida: DNI o CE, sin fotos, dentro de la jornada' },
      pro: { ok: 'Una guía de acceso también es un documento con efectos legales: pide datos y fija horarios.', risk: 'Pedir fotos del DNI por un grupo y mandar a estudiar de noche son dos reclamos esperando.', info: 'Prueba la guía con alguien que no sepa nada de la plataforma.' },
      kusi: missLey ? ['preocupado', 'Se te pasó algo serio…'] : ['celebra', '¡Guía a prueba de errores!'],
    }),
    rules: [[LEY, 'Solo se piden los datos necesarios, por canales controlados por la empresa (Ley 29733).'], [LEY, 'La capacitación, en cualquier modalidad, se realiza dentro de la jornada (Reglamento de la Ley 29783, art. 28).']],
    mirada: {
      ve: 'Lo virtual no es «tiempo libre con internet». Si la empresa manda a ver un módulo, ese tiempo es parte de la capacitación. Y la manera más rápida de recuperar una clave no puede ser exponer el DNI de alguien frente a 40 personas.',
      visual: { tipo: 'cambio', titulo: 'De la guía rápida a la guía segura', pares: [['Usuario: DNI', 'Usuario: DNI o carné de extranjería'], ['Foto del DNI al grupo', 'Escribir a Sistemas con nombre y local'], ['Módulos de noche', 'Módulo virtual en la jornada']] },
    },
  },
  {
    id: 'p4', t: '14:10', ch: 'presencial', who: null, titulo: 'Kevin y los videos', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Última fila del aula', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>Kevin, 22 años, de Alto Trujillo, usa audífono y lee los labios. En la mañana se sentó adelante y siguió a Jorge sin problema. Ahora, en la prueba de AulaNorte, mira el video del módulo de caja con el volumen al máximo.</p><p>«Señorita, el video no tiene subtítulos y la voz suena como en lata. <mark class="clave">Mañana voy a estar solo con esto, ¿no?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedir a Karen y a Fiorella subtítulos o la transcripción de los videos para mañana, y que Kevin haga el día virtual en el aula de respaldo, con apoyo.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, cumplimiento: 3, tiempo: -2 }, flags: ['ajuste_kevin'], cartera: { ajustes: 'Kevin: transcripción y día virtual con apoyo' },
          out: 'Fiorella no puede subtitular los ocho videos para mañana, pero sí exportar la transcripción automática. La revisas en la noche y corriges «boleta» donde decía «bola». Kevin te hace un pulgar.',
          pro: { ok: 'Un ajuste sencillo y barato que le permite aprender igual que los demás.', risk: 'Te costará una hora de la noche.', info: 'Pide que los videos nuevos vengan con subtítulos desde el proveedor.' },
          kusi: ['feliz', '¡Un ajuste pequeño, un mundo de diferencia!'] } },
      { id: 'b', label: 'Exonerarlo del módulo virtual: ya demostró en la mañana que entiende.',
        res: { q: 'aceptable', fx: { personas: 1, calidad: -2, cumplimiento: -1 }, flags: ['kevin_exonerado'], cartera: { ajustes: 'Kevin exonerado del día virtual' },
          out: 'Kevin dice «ya, gracias», pero se queda mirando la pantalla. El módulo de boletas electrónicas no lo vio en la mañana.',
          pro: { ok: 'Lo liberas de una dificultad.', risk: 'Exonerar no es ajustar: le quitas contenido que el examen sí pedirá.' },
          kusi: ['pensando', '¿Y lo que no va a aprender?'] } },
      { id: 'c', label: 'Decirle que suba el volumen y pida ayuda a un compañero: no se puede cambiar la plataforma por una sola persona.',
        res: { q: 'riesgosa', fx: { personas: -4, etica: -4, cumplimiento: -3 },
          out: 'Kevin asiente sin mirarte. Al día siguiente no se conecta.',
          pro: { ok: 'No cambias nada.', risk: 'Negar un ajuste razonable sin demostrar que es una carga desproporcionada incumple la Ley 29973.' },
          kusi: ['indignado', '¡«Una sola persona» también cuenta!'] } },
    ],
    rules: [[LEY, 'La persona con discapacidad tiene derecho a ajustes razonables en el lugar de trabajo, salvo carga desproporcionada que el empleador debe demostrar (Ley 29973, art. 50).']],
    mirada: {
      ve: 'Un ajuste razonable no es un trato especial: es quitar la barrera que impide aprender igual que los demás. Una transcripción cuesta una hora; exonerar a alguien le cuesta lo que no aprendió.',
      normas: [{ ley: 'Ley 29973, Ley General de la Persona con Discapacidad, art. 50', dice: 'La persona con discapacidad tiene derecho a ajustes razonables en el lugar de trabajo; el empleador los realiza salvo que demuestre una carga desproporcionada o indebida.', practica: 'Subtítulos o transcripción para un módulo de capacitación es un ajuste sencillo.' }],
      visual: { tipo: 'balanza', a: { t: 'Exonerar', items: ['Rápido', 'Kevin no aprende boletas', 'Desaprobará esa parte'] }, b: { t: 'Ajustar', items: ['Transcripción', 'Día virtual con apoyo', 'Aprende como todos'] } },
    },
  },
  {
    id: 'p5', t: '16:20', ch: 'whatsapp', who: null, titulo: 'El pedido a Fiorella', banner: 'assets/foto2/callcenter.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: (n, F) => `<p>Daniela, de Maracaibo, lleva tres años en Trujillo y fue cajera en su país. Su carné de extranjería tiene 9 dígitos y AulaNorte lo rechaza. Hay cuatro casos más.</p><p>Fiorella está tapada de pedidos. ${F.has('causas_claras') ? 'Tú ya tienes el patrón completo.' : 'Tú sabes que algo pasa con los carnés.'} <mark class="clave">Escríbele de modo que lo resuelva hoy</mark>.</p>`,
    type: 'compose', enviaA: 'fiorella', para: 'Para: Fiorella Paredes · Sistemas', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'El problema', ops: [
        { id: 'q1', t: 'Fiorella, encontré tres causas: 5 carnés de extranjería que el campo usuario rechaza, 6 correos mal escritos y la clave que vence a las 7:50 p. m.', ok: true, por: 'Concreto y con números.' },
        { id: 'q2', t: 'Fiorella, la plataforma no funciona, la gente no puede entrar 😩', ok: false, por: 'No le dice qué arreglar.' },
      ] },
      { id: 'pide', t: 'Lo que le pides', ops: [
        { id: 'p1', t: '¿Puedes habilitar 9 dígitos y ampliar la clave a 48 horas? Los correos los corrijo yo en el Excel y te lo devuelvo a las 5.', ok: true, por: 'Divides el trabajo.' },
        { id: 'p2', t: 'Cuando puedas lo ves, ¿ya?', ok: null, por: 'Amable, pero sin plazo.' },
      ] },
      { id: 'dato', t: 'Cómo le pasas los casos', ops: [
        { id: 'd1', t: 'Te dejé la lista de los cinco en la carpeta de Capacitación, con nombre y local.', ok: true, por: 'Por el canal de la empresa.' },
        { id: 'd2', t: 'Te mando las fotos de sus carnés por aquí 📎', ok: false, por: 'Los documentos de identidad no viajan por WhatsApp.' },
      ] },
    ],
    res: sel => {
      const mal = sel.que === 'q2' || sel.dato === 'd2', buenas = ['q1', 'p1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.dato === 'd2' ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : 0, cumplimiento: sel.dato === 'd2' ? -4 : 1 },
        flags: q === 'buena' ? ['ce_resuelto'] : [], cartera: { plataforma: q === 'buena' ? 'CE habilitado, clave a 48 horas' : 'Accesos en revisión' },
        out: q === 'buena' ? 'A las 5:10 Fiorella responde: «Listo, ya acepta 9 dígitos». Daniela entra a la primera y manda un sticker de una arepa bailando.' : mal ? 'Fiorella responde tarde y pide que no le manden documentos por WhatsApp. Daniela sigue sin entrar.' : 'Fiorella dice que lo ve mañana. Daniela tendrá que esperar.',
        pro: { ok: 'Un pedido con causa, solución propuesta y reparto de tareas se atiende primero.', risk: 'Un «no funciona» se queda al fondo de la cola.', info: 'Agradece en público, en el grupo del área, cuando lo resuelva.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Arepa bailando, misión cumplida!' : 'Un pedido así cuesta atenderlo.'],
      };
    },
    rules: [[LEY, 'Los documentos de identidad se comparten por canales controlados (Ley 29733).']],
    mirada: {
      ve: 'Sistemas tiene diez pedidos al día que dicen «no funciona». El que llega con la causa, una solución y la mitad del trabajo hecho se resuelve hoy. Así se gana a un aliado técnico.',
      visual: { tipo: 'flujo', titulo: 'Un buen pedido a Sistemas', pasos: ['Causa concreta', 'Número de casos', 'Qué pides', 'Qué haces tú', 'Plazo'] },
    },
  },
  {
    id: 'p6', t: '18:05', ch: 'correo', who: null, titulo: 'El reporte para Karen', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Karen Vásquez', to: 'Asistente de Capacitación', asunto: '¿Cómo vamos con la plataforma?' },
    body: () => `<p>Recién salgo de Operaciones. Dime en corto cómo terminó el día y <mark class="clave">si mañana el módulo virtual corre</mark>.</p><p>Karen</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Asistencia, accesos, causas, lo que ya se arregló y lo que sigue en riesgo.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { karen: 1 }, flags: ['reporte_numeros'], responde: 'Karen: asistieron 36 de 40 (2 al grupo 3, 2 por ubicar). En AulaNorte entraron 19; el problema eran carnés de extranjería, correos mal escritos y la clave que vencía hoy. Lo de carnés y clave ya está. Riesgo: Kevin necesita transcripción y hay 4 personas sin datos móviles; propongo que hagan el día virtual en el aula de respaldo.',
          out: 'Karen responde a los diez minutos: «Esto es oro. Mañana lo cuento en Operaciones tal cual». Te vas en la B con la ventana abierta y el viento de Huanchaco en la cara.', kusi: ['celebra', 'Números, causas y riesgos. ¡Qué bacán!'] } },
      { id: 'b', label: 'Que hubo problemas con la plataforma, pero que ya está todo bien.',
        res: { q: 'aceptable', fx: { confianza: -1 }, responde: 'Karen: hubo algunos problemas con la plataforma, pero ya está todo bien 👍',
          out: 'Karen se queda tranquila. Mañana, cuando cuatro personas no puedan conectarse, se enterará en el pasillo.', kusi: ['pensando', '¿«Todo bien» de verdad?'] } },
    ],
    mirada: { ve: 'Un reporte útil dice qué pasó, por qué y qué falta, en números. Cuando tu jefa tiene que defender la escuela ante Operaciones, tu reporte es su argumento.' },
  },
];
