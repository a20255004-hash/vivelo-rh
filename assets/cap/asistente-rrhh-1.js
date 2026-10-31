// Asistente de RR.HH. · Capítulo 1 · «Faltan 28 días» · Semana 1, lunes.
// Hilo del mes: la apertura de la tienda 13 de Supermercados Norte con 45 ingresos.
// Normas citadas: T-Registro (alta dentro del día de ingreso, SUNAT); Ley 29783 (exámenes médicos ocupacionales a
// cargo del empleador); Ley 29733 (datos personales).

export const CAP = {
  n: 1, titulo: 'Faltan 28 días', dia: 'Semana 1, lunes', foto: 'assets/foto2/pasillo.webp',
  lugar: 'Supermercados Norte · Oficina central de Piura',
  inicio: '08:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Piura, oficina central de Supermercados Norte. La tienda 13 abre en 28 días y tú eres la nueva asistente de RR.HH.', boton: 'Entrar a la oficina',
  kusi: 'Nadie ve tu trabajo… hasta que algo falla. ¡Hoy que no falle nada!',
  lead: 'Armaste el checklist de un ingreso completo, llamaste a la gente nueva, frenaste un «ingreso por recomendación» y ordenaste lo que César necesita para pagar bien.',
  reflexion: '¿Qué detalle pequeño de hoy podría haber arruinado el primer día de alguien?',
  siguiente: { n: 2, titulo: 'Los exámenes médicos', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'ingresos', p: '45 ingresos de la tienda 13', j: 'Betty · RR.HH.', d: 0, e: 'Apertura en 28 días' },
  { id: 'examenes', p: 'Exámenes médicos de ingreso', j: 'Clínica San Miguel', d: 0, e: 'Sin agenda' },
  { id: 'contratos', p: 'Contratos', j: 'Betty · Legal', d: 0, e: 'Plantillas por revisar' },
  { id: 'uniformes', p: 'Uniformes y credenciales', j: 'Logística', d: 0, e: 'Tallas sin pedir' },
  { id: 'induccion', p: 'Inducción', j: 'Betty · RR.HH.', d: 0, e: 'Semana 2' },
];

export const FUTURO = {
  checklist_bueno: ['Tu checklist de ingreso tiene lo que de verdad hace falta.', 'Te ahorrará devoluciones de César en el capítulo 3.'],
  checklist_flojo: ['Tu checklist se quedó corto.', 'César te devolverá 12 fichas en el capítulo 3.'],
  llamadas_wsp: ['Avisaste a todos por llamada y por WhatsApp.', 'La clínica tendrá agenda llena el miércoles.'],
  sobrino_proceso: ['El sobrino de Wilmer irá al proceso como cualquier postulante.', 'Wilmer no lo olvidará. Capítulo 8.'],
  sobrino_dentro: ['Metiste al sobrino de Wilmer sin proceso.', 'Karina lo notará en el capítulo 6.'],
  cesar_ok: ['César recibirá los datos en el formato que necesita.', 'Te lo agradecerá el capítulo 3.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Supermercados Norte', sub: 'Betty, César y tú', c: '#2F6B3F' },
  betty: { n: 'Betty Seminario', sub: 'Jefa de RR.HH.', who: 'betty' },
  cesar: { n: 'César Chunga', sub: 'Analista de Planillas', who: 'cesar' },
  wilmer: { n: 'Wilmer Sosa', sub: 'Jefe de la tienda 13', who: 'wilmer' },
  karina: { n: 'Karina Zapata', sub: 'Cajera nueva', who: 'karina' },
};

export const WSP = [
  { chat: 'grupo', t: '08:02', de: 'Betty', txt: '¡Bienvenida! 🛒 Te dejé el cronograma en la pared. Faltan 28 días.' },
  { chat: 'grupo', t: '08:10', de: 'César', txt: 'Bienvenida. Una sola regla conmigo: DNI bien escrito o no hay pago 😅' },
  { chat: 'wilmer', t: '11:48', de: 'Wilmer', txt: 'Oe, ¿tú eres la nueva de RR.HH.? Te llamo en 5.' },
  { chat: 'karina', t: '15:20', de: 'Karina', txt: 'Buenas tardes, señorita. Sí puedo ir a la clínica el miércoles a las 8. Gracias por avisarme 😊', si: 'llamadas_wsp' },
  { chat: 'cesar', t: '17:30', de: 'César', txt: 'Ese formato es justo lo que necesitaba. Te debo un café ☕', si: 'cesar_ok' },
  { chat: 'wilmer', t: '18:05', de: 'Wilmer', txt: 'Ya, que postule mi sobrino nomás. Pero que no se demoren.', si: 'sobrino_proceso' },
];

export const CORREOS = [
  { t: '08:05', de: 'Betty Seminario', para: 'Asistente de RR.HH.', asunto: 'Tienda 13 · lo que viene', html: '<p>¡Hola y bienvenida! Este mes es la apertura de la tienda 13 en Castilla: 45 personas nuevas, entre cajeras, reponedores, panaderos y seguridad.</p><p>Tu misión: que el día 28 cada una tenga contrato, examen médico, alta, uniforme, credencial e inducción. Nada de eso se ve… hasta que falta.</p><p>Betty</p>' },
  { t: '10:30', de: 'Clínica San Miguel · Salud Ocupacional', para: 'RR.HH. Supermercados Norte', asunto: 'Disponibilidad para exámenes de ingreso', html: '<p>Podemos atender hasta 10 evaluaciones por día, de lunes a viernes, de 7:30 a 11:00. Se requiere la lista con nombres, DNI y puesto con 24 horas de anticipación.</p>' },
];

export const QUIZ = [
  { q: '¿Quién paga el examen médico de ingreso?', ops: ['El postulante', 'La empresa', 'EsSalud', 'Se divide entre ambos'], ok: 1, por: 'Los exámenes médicos ocupacionales son a cargo del empleador (Ley 29783).' },
  { q: '¿Cuándo debe registrarse el alta en el T-Registro?', ops: ['Dentro del día de ingreso', 'A fin de mes', 'Cuando firma el contrato', 'Cuando cobra'], ok: 0, por: 'SUNAT indica que el alta se registra dentro del día de ingreso del trabajador.' },
  { q: 'El jefe de tienda quiere contratar a su sobrino sin proceso. ¿Qué haces?', ops: ['Lo contratas: es su tienda', 'Le explicas que puede postular como cualquier otra persona', 'Lo rechazas por ser familiar', 'Le pides que no se entere nadie'], ok: 1, por: 'Ser familiar no lo excluye, pero sí debe pasar por el mismo proceso y no ser evaluado por su tío.' },
  { q: 'Un DNI mal digitado en la ficha de ingreso puede…', ops: ['No importar', 'Bloquear el alta y el pago', 'Corregirse solo', 'Afectar solo el uniforme'], ok: 1, por: 'El DNI es la llave del alta, el abono en cuenta y los aportes.' },
  { q: 'Llamas a una persona nueva y no contesta. Lo mejor es…', ops: ['Descartarla', 'Dejarle un WhatsApp claro con quién eres, para qué y cómo confirmar', 'Llamar 20 veces seguidas', 'Esperar a que ella llame'], ok: 1, por: 'Combinar canales con un mensaje claro funciona mejor que insistir.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '08:15', ch: 'presencial', who: 'betty', titulo: 'El cronograma en la pared', banner: 'assets/foto2/reunion-circulos.webp', show: ['confianza', 'tiempo'],
    body: (n) => `<p>En la pared hay un cronograma de cuatro semanas pegado con cinta: cada casilla es una tarea y cada tarea tiene un color. Betty te recibe con una sonrisa y un termo de café.</p><p>«Bienvenida${n ? ', ' + n : ''}. Tengo diez minutos antes de la reunión con gerencia. <mark class="clave">Pregúntame lo que necesites</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Decide qué información te sirve más hoy.',
    opts: [
      { id: 'fallo', label: '¿Qué falló en la última apertura?', info: '«En la tienda 12 abrimos con cinco personas sin examen médico y dos sin alta. Una cajera se desmayó el tercer día y no sabíamos si tenía seguro. No quiero repetir eso.»' },
      { id: 'quien', label: '¿Con quién me tengo que coordinar?', info: '«Con César, de Planillas: sin datos completos no paga. Con la clínica, que tiene cupos limitados. Y con Wilmer, el jefe de la tienda 13… que es buena gente, pero acelerado.»' },
      { id: 'exito', label: '¿Cómo sé si lo estoy haciendo bien?', info: '«Si el día 28 cada persona tiene sus seis cosas: contrato, examen, alta, uniforme, credencial e inducción. Y si nadie viene a mi oficina a quejarse de ti.»' },
      { id: 'herram', label: '¿Qué herramientas uso?', info: '«Un Excel compartido de ingresos, el correo y el WhatsApp de la empresa. El sistema de planillas lo maneja César.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('exito') ? 2 : 0, tiempo: -1 }, rel: { betty: picks.includes('fallo') ? 1 : 0 },
      out: 'Betty se va a su reunión. Te deja el Excel de ingresos abierto: 45 filas y muchas celdas vacías.',
      kusi: ['curioso', 'Ya sabes qué falló antes. Eso vale oro.'],
    }),
    mirada: {
      ve: 'Preguntar qué falló la última vez es una de las mejores preguntas de un primer día: los errores de los procesos suelen repetirse. Quien los conoce, los previene.',
      visual: { tipo: 'flujo', titulo: 'Las seis cosas de cada ingreso', pasos: ['Contrato', 'Examen médico', 'Alta', 'Uniforme', 'Credencial', 'Inducción'] },
    },
  },
  {
    id: 'h2', t: '09:00', ch: 'documento', who: null, titulo: 'El checklist de ingreso', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Para no repetir lo de la tienda 12, decides armar un checklist que cada persona nueva tendrá que completar <mark class="clave">antes de su primer día</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del checklist.', boton: 'Guardar el checklist',
    bloques: [
      { id: 'datos', t: 'Datos para Planillas', n: 3, ops: [
        { id: 'd1', t: 'DNI vigente, verificado contra el documento físico.', ok: true, por: 'Un dígito mal y no hay alta ni pago.' },
        { id: 'd2', t: 'Sistema de pensiones elegido o boletín informativo entregado.', ok: true },
        { id: 'd3', t: 'Número de cuenta o autorización para abrir cuenta sueldo.', ok: true },
        { id: 'd4', t: 'Foto de cuerpo entero.', ok: false, por: 'No sirve para ningún trámite y puede leerse como criterio de apariencia.' },
        { id: 'd5', t: 'Estado civil y número de hijos, para «conocer a la persona».', ok: false, por: 'Solo se pide lo necesario (por ejemplo, hijos para asignación familiar, si la persona la solicita).' },
      ] },
      { id: 'salud', t: 'Salud y seguridad', n: 2, ops: [
        { id: 's1', t: 'Examen médico ocupacional de ingreso, programado y pagado por la empresa.', ok: true, por: 'Es obligación del empleador.' },
        { id: 's2', t: 'Inducción de seguridad antes de su primer turno.', ok: true },
        { id: 's3', t: 'Prueba de embarazo para las cajeras.', ok: false, por: 'Es discriminatorio exigirla para contratar.' },
      ] },
      { id: 'dia1', t: 'Primer día', n: 2, ops: [
        { id: 'p1', t: 'Alta en T-Registro el mismo día de ingreso.', ok: true },
        { id: 'p2', t: 'Uniforme y credencial entregados con firma de recepción.', ok: true },
        { id: 'p3', t: 'Que firme el contrato «cuando pueda», durante el primer mes.', ok: false, por: 'El contrato debe estar firmado al ingresar: es la base de todo lo demás.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : -2 },
        flags: [q === 'buena' ? 'checklist_bueno' : 'checklist_flojo'], cartera: { ingresos: q === 'buena' ? 'Checklist de ingreso listo' : 'Checklist con huecos' },
        out: q === 'buena' ? 'Imprimes el checklist en una sola hoja. Betty lo ve al pasar: «Esto lo vamos a usar en todas las aperturas».' : 'El checklist se ve completo, pero pide cosas que no debe y olvida otras que sí.',
        pro: { ok: 'Un buen checklist pide lo necesario y nada más.', risk: 'Pedir datos o pruebas que no corresponden expone a la empresa a denuncias por discriminación o mal uso de datos.', info: 'Pregunta a César qué campos rechaza más seguido.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una hoja que salva aperturas!' : 'Algunas piezas sobraban…'],
      };
    },
    rules: [[LEY, 'Los exámenes médicos ocupacionales son a cargo del empleador (Ley 29783).'], [LEY, 'Solo se recolectan los datos necesarios para la finalidad (Ley 29733).'], [LEY, 'Exigir una prueba de embarazo para contratar es discriminatorio.']],
    mirada: {
      ve: 'El checklist de ingreso es una herramienta humilde que define si alguien empieza con seguro, con sueldo y con información, o si empieza mal. También es un filtro: lo que no se debe pedir, no se pide.',
      visual: { tipo: 'cambio', titulo: 'De la ficha vieja al checklist nuevo', pares: [['Foto de cuerpo entero', 'DNI verificado'], ['Estado civil «para conocerla»', 'Sistema de pensiones y cuenta sueldo'], ['Contrato «cuando pueda»', 'Contrato firmado antes del primer turno']] },
    },
  },
  {
    id: 'h3', t: '10:45', ch: 'llamada', who: null, titulo: 'Agenda de la clínica', banner: 'assets/foto/llamada.webp', show: ['personas', 'tiempo', 'calidad'],
    body: () => `<p>La clínica atiende 10 exámenes por día y necesita la lista con 24 horas de anticipación. Empiezas a llamar a las primeras cinco personas de la lista para el miércoles a las 8:00.</p>`,
    type: 'calls',
    calls: [['Karina Zapata', 'Contesta: puede el miércoles', 'Sí, señorita, el miércoles a las ocho puedo. ¿Tengo que ir en ayunas?'], ['Luis Yarlequé', 'No contesta'], ['Rosa Chiroque', 'Contesta: trabaja de mañana hasta el viernes', 'Ay, es que hasta el viernes trabajo en una pollería de mañana. ¿No hay otro día?'], ['Jorge Ramos', 'El número está apagado'], ['Milagros Peña', 'Contesta: puede el miércoles', 'Ya, perfecto, ahí estaré.']],
    prompt: 'Luis y Jorge no contestaron, y Rosa no puede el miércoles. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Mandar un WhatsApp claro a Luis y Jorge, y pasar a Rosa al lunes.',
        res: { q: 'buena', fx: { personas: 4, calidad: 2, tiempo: -1 }, flags: ['llamadas_wsp'], cartera: { examenes: 'Miércoles: 4 confirmados · Lunes: Rosa' },
          envia: [['karina', 'Hola, Karina. Te confirmo tu examen médico de ingreso el miércoles a las 8:00 en Clínica San Miguel (Av. Grau 1020). Ve en ayunas y lleva tu DNI. Es gratuito para ti. Cualquier duda, escríbeme aquí.']],
          out: 'Luis responde a la media hora: estaba en el colegio de su hija. Jorge sigue sin aparecer. Rosa respira aliviada con el cambio de fecha.',
          pro: { ok: 'Ajustas la agenda a la vida de las personas y usas varios canales.', info: 'Escribe dirección, hora, ayuno y que es gratuito: son las cuatro dudas de siempre.' },
          kusi: ['feliz', 'Agenda llena y nadie se quedó atrás.'] } },
      { id: 'b', label: 'Reemplazarlos por los siguientes de la lista: hay 45 personas y la clínica no espera a nadie.',
        res: { q: 'riesgosa', fx: { personas: -4, tiempo: 2 },
          out: 'La agenda del miércoles se llena. Rosa, Luis y Jorge quedan para «después», sin que nadie les avise.',
          pro: { ok: 'Llenas la agenda rápido.', risk: 'Tres personas contratadas no saben cuándo es su examen. Alguna llegará al día 28 sin él.' },
          kusi: ['preocupado', 'Rápido sí… ¿y ellos?'] } },
    ],
    rules: [[BP, 'Confirma por escrito hora, lugar, requisitos y costo (cero) del examen médico.']],
    mirada: {
      ve: 'Coordinar ingresos es coordinar vidas: gente que trabaja en otro lugar, que cuida a sus hijos o que no tiene saldo. Una buena asistente de RR.HH. no solo llena cupos: se asegura de que nadie quede sin fecha.',
      visual: { tipo: 'embudo', titulo: 'Tu agenda de hoy', niveles: [['Llamadas', 5], ['Contestaron', 3], ['Confirmaron el miércoles', 2]] },
    },
  },
  {
    id: 'h4', t: '11:55', ch: 'llamada', who: 'wilmer', titulo: 'El sobrino de Wilmer', banner: 'assets/foto/frente-a-frente.webp', show: ['etica', 'confianza', 'cumplimiento'],
    body: () => `<p>Wilmer te llama desde la tienda en obra, con ruido de taladros de fondo.</p><p>«Oye, necesito un reponedor de confianza. Mi sobrino Brayan es bien trabajador. <mark class="clave">Mételo en la lista de los 45 y ya</mark>, sin tanto trámite. Total, el jefe soy yo.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que Brayan puede postular como cualquier persona, y que otra persona hará su entrevista para evitar conflictos.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: -1 }, rel: { wilmer: -1 }, flags: ['sobrino_proceso'],
          out: '«Puro trámite», gruñe Wilmer. Pero acepta. Brayan postula esa tarde.',
          pro: { ok: 'No excluyes a nadie por ser familiar, pero tampoco le das un atajo.', risk: 'Wilmer te puede ver como un obstáculo.', info: 'Revisa si la empresa tiene una política de contratación de familiares.' },
          kusi: ['animo', 'Las mismas reglas para todos. ¡Así!'] } },
      { id: 'b', label: 'Incluirlo: es el jefe de la tienda, necesita gente de confianza y una persona más no cambia mucho entre 45.',
        res: { q: 'riesgosa', fx: { etica: -5, cumplimiento: -3 }, rel: { wilmer: 1 }, flags: ['sobrino_dentro'],
          out: 'Brayan entra a la lista sin entrevista. Dentro de dos semanas, su jefe directo será su tío. Y todos en la tienda lo sabrán.',
          pro: { ok: 'Wilmer queda contento.', risk: 'Un ingreso sin proceso, supervisado por un familiar, abre la puerta a favoritismos y quejas del equipo.' },
          kusi: ['preocupado', '¿Y los que sí pasaron el proceso?'] } },
      { id: 'c', label: 'Decirle que los familiares no pueden trabajar en la empresa.',
        res: { q: 'aceptable', fx: { etica: 1, confianza: -3 }, rel: { wilmer: -1 },
          out: 'Wilmer te corta. Después descubres que la política de la empresa no prohíbe contratar familiares: solo pide que no haya relación de supervisión directa.',
          pro: { ok: 'Evitas el atajo.', risk: 'Inventar una regla para salir del paso te quita credibilidad cuando se descubre.' },
          kusi: ['pensando', '¿Esa regla existe de verdad?'] } },
    ],
    rules: [[POL, 'En Supermercados Norte, los familiares pueden postular, pero no ser evaluados ni supervisados directamente por su pariente.'], [BP, 'No inventes reglas: conoce las políticas reales antes de responder.']],
    mirada: {
      ve: 'En el sector privado no hay una ley que prohíba contratar familiares, pero sí riesgos: favoritismo, conflictos y quejas del equipo. Por eso muchas empresas tienen políticas propias. Tu trabajo es aplicarlas igual para todos.',
      visual: { tipo: 'balanza', a: { t: 'Atajo para el sobrino', items: ['Wilmer contento', 'Un reponedor rápido'] }, b: { t: 'Mismo proceso para todos', items: ['Equipo que confía en RR.HH.', 'Nadie supervisa a su pariente', 'Política aplicada igual'] } },
    },
  },
  {
    id: 'h5', t: '15:40', ch: 'whatsapp', who: null, titulo: 'Lo que César necesita', banner: 'assets/esc/planilla.webp', show: ['calidad', 'confianza', 'tiempo'],
    body: () => `<p>César te pidió los datos de los primeros 20 ingresos para preparar las altas. Antes de mandarle el Excel, le escribes.</p>`,
    type: 'compose', enviaA: 'cesar', para: 'Para: César Chunga · Planillas', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué le envías', ops: [
        { id: 'q1', t: 'César, te dejé en la carpeta de Planillas los datos de los 20 primeros ingresos.', ok: true, por: 'Por la carpeta de la empresa, no por WhatsApp.' },
        { id: 'q2', t: 'César, te paso por aquí el Excel con los DNI de los 20 primeros 📎', ok: false, por: 'Enviar DNI por WhatsApp saca los datos del control de la empresa.' },
      ] },
      { id: 'como', t: 'Cómo los revisaste', ops: [
        { id: 'c1', t: 'Verifiqué cada DNI contra el documento físico y marqué en amarillo los 3 que faltan.', ok: true, por: 'Le dices qué está listo y qué no.' },
        { id: 'c2', t: 'Creo que están completos.', ok: false, por: '«Creo» obliga a César a revisar todo de nuevo.' },
      ] },
      { id: 'pregunta', t: 'Pregunta', ops: [
        { id: 'p1', t: '¿Hay algún campo que te suelan mandar mal y quieras que revise?', ok: true, por: 'Aprendes cómo trabaja el siguiente eslabón.' },
        { id: 'p2', t: '¿Me avisas si algo está mal?', ok: null, por: 'Correcto, pero reactivo.' },
      ] },
    ],
    res: sel => {
      const wsp = sel.que === 'q2', buenas = ['q1', 'c1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = wsp ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, cumplimiento: wsp ? -5 : 2, confianza: q === 'buena' ? 3 : 0 }, rel: { cesar: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['cesar_ok'] : [],
        out: q === 'buena' ? 'César responde: «Siempre me mandan mal la fecha de nacimiento: día y mes al revés». Lo agregas al checklist.' : wsp ? 'César responde: «Mejor súbelo a la carpeta, que Betty nos va a jalar las orejas».' : 'César responde con un «ok, reviso». Mañana te devolverá dos fichas.',
        pro: { ok: 'Entregar datos verificados, por el canal correcto, ahorra el trabajo de dos personas.', risk: 'Los datos del personal no viajan por WhatsApp.', info: 'Pregunta siempre al siguiente eslabón qué error recibe más.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Dato verificado, canal correcto. ¡Bacán!' : 'Algo se puede mejorar ahí.'],
      };
    },
    rules: [[LEY, 'Los datos personales se comparten por canales controlados por la empresa (Ley 29733).'], [BP, 'Antes de entregar, verifica; y di qué falta.']],
    mirada: {
      ve: 'RR.HH. es una cadena: lo que tú entregas mal, otra persona lo sufre después. Una asistente que pregunta qué error recibe más el siguiente eslabón deja de ser un pasamanos y se vuelve un filtro de calidad.',
      visual: { tipo: 'flujo', titulo: 'La cadena de un ingreso', pasos: ['Asistente: datos', 'Planillas: alta', 'Banco: cuenta', 'Persona: primer pago'], aqui: 0 },
    },
  },
  {
    id: 'h6', t: '18:20', ch: 'correo', who: null, titulo: 'El reporte para Betty', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Betty Seminario', to: 'Asistente de RR.HH.', asunto: '¿Cómo vamos?' },
    body: () => `<p>Cuéntame en corto cómo vamos con la tienda 13 y <mark class="clave">qué te preocupa</mark>.</p><p>Betty</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Avance en números, un riesgo y un pedido.',
        res: { q: 'buena', fx: { confianza: 5, calidad: 2 }, rel: { betty: 1 }, responde: 'Betty: checklist de ingreso listo; 20 fichas enviadas a César; 4 exámenes confirmados para el miércoles. Riesgo: con 10 cupos por día, la clínica no llega a los 45 antes de la semana 3. ¿Podemos pedir un segundo proveedor?',
          out: 'Betty responde: «Buenísimo. Mañana llamo a otra clínica». El riesgo que viste hoy no será un problema en la semana 3.', kusi: ['celebra', 'Viste el cuello de botella antes que nadie.'] } },
      { id: 'b', label: 'Que todo va bien y que la tienda abre a tiempo.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Betty: todo bien, vamos a tiempo 💪',
          out: 'Betty se queda tranquila. En la semana 3 descubrirá que la clínica no da abasto.', kusi: ['pensando', 'Hiciste la cuenta de los cupos?'] } },
    ],
    mirada: { ve: 'Con 10 cupos al día, 45 exámenes toman más de una semana hábil. Hacer esa cuenta el primer día es lo que distingue a quien ejecuta tareas de quien cuida un proceso.' },
  },
];
