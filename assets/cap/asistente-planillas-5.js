// Asistente de Planillas · Capítulo 5 · «Los ceses» · Semana 1, viernes.
// Hilo de las dos semanas: la gratificación de diciembre de 700 trabajadores de Sabor del Perú, el cierre de un local y la PLAME.
// Normas citadas:
// - Liquidación de beneficios sociales (CTS, vacaciones y gratificación truncas): se paga dentro de las 48 horas de producido
//   el cese; la gratificación trunca se paga con los demás beneficios en ese plazo (D.S. 005-2002-TR). El empleador entrega
//   la carta que acredita el cese para que el trabajador retire su CTS.
//   https://elperuano.pe/noticia/194086-liquidacion-de-beneficios-seis-datos-que-se-deben-saber-si-renuncias-o-si-te-cesan-del-trabajo
//   https://lpderecho.pe/pago-liquidacion-beneficios-sociales-seria-48-horas-producido-cese-laboral/
//   https://proactivo.com.pe/sunafil-explica-que-pagos-beneficios-y-documentos-debes-recibir-al-finalizar-tu-relacion-laboral/
// - El vencimiento de un contrato a plazo fijo no es un despido arbitrario: no genera indemnización por despido. Principio
//   general; no se citan cifras.
// Empresas, personas y montos son ficticios.

export const CAP = {
  n: 5, titulo: 'Los ceses', dia: 'Semana 1, viernes', foto: 'assets/3d/scenes/retail.webp',
  lugar: 'Sabor del Perú · Oficina central y local de Miraflores',
  inicio: '07:30', fin: '19:30', cierreHora: '19:15',
  apertura: 'Viernes. Hoy vencen los contratos de 18 personas del local de Miraflores, que cierra por remodelación. Llegas temprano: Hugo ya está, con un café de máquina y el correo de Fiorella abierto.', boton: 'Sentarte con Hugo',
  kusi: 'Hoy hay gente que se va. Que se vaya con todo lo suyo… ¡y a tiempo!',
  lead: 'Armaste lo que lleva una liquidación, revisaste una con lupa, defendiste el plazo frente a Operaciones, le escribiste a doña Nelly con claridad y llevaste los papeles a Miraflores.',
  reflexion: '¿Qué diferencia hay, para quien se va, entre recibir su liquidación en dos días o en una semana?',
  siguiente: { n: 6, titulo: 'El sistema', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'ceses', p: '18 liquidaciones de Miraflores', j: 'Hugo · Planillas', d: 0, e: 'Contratos vencen hoy' },
  { id: 'docs', p: 'Documentos de cese', j: 'Tú', d: 0, e: 'Por preparar' },
  { id: 'tesoreria', p: 'Fondos para las liquidaciones', j: 'Operaciones · Tesorería', d: 0, e: 'Sin confirmar' },
  { id: 'grati', p: 'Gratificación de diciembre', j: 'Hugo · Planillas', d: 0, e: 'Corrida 2 el lunes' },
];

export const FUTURO = {
  liq_ok: ['Sabes qué lleva una liquidación por vencimiento de contrato.', 'Lo usarás en la PLAME. Capítulo 8.'],
  liq_48h: ['Las 18 liquidaciones se pagarán dentro de las 48 horas del cese.', 'Tesorería lo recordará cuando llegue la gratificación. Capítulo 9.'],
  liq_jueves: ['Las liquidaciones se pagarán el jueves, con la gratificación.', 'Fuera del plazo de 48 horas. Alguien reclamará. Capítulo 8.'],
  liq_mitad: ['Se pagará la mitad de cada liquidación hoy y el resto el jueves.', 'El saldo queda fuera de plazo. Capítulo 8.'],
  nelly_clara: ['Doña Nelly recibió por escrito cuánto, cuándo y qué papeles le tocan.', 'Te escribirá cuando cobre. Capítulo 9.'],
  docs_cese: ['Llevaste a Miraflores las cartas de cese para la CTS y los certificados de trabajo.', 'Nadie tendrá que volver a pedirlos.'],
  docs_incompletos: ['A Miraflores le faltaron documentos de cese.', 'Te los pedirán por WhatsApp toda la semana.'],
  sin_promesa: ['No prometiste recontrataciones que no dependen de Planillas.', 'Fiorella lo agradecerá cuando sepa la fecha real.'],
  promesa_marzo: ['Prometiste que los recontratarían en marzo.', 'Operaciones no ha decidido nada.'],
};

export const CHATS = {
  grupo: { n: 'Planillas Sabor del Perú', sub: 'Hugo y tú', c: '#2F6B3F' },
  hugo: { n: 'Hugo Salazar', sub: 'Analista de Planillas', who: 'hugo' },
  gaby: { n: 'Gaby Ríos', sub: 'Administradora · local San Miguel', who: 'gaby' },
  fiorella: { n: 'Fiorella Ugarte', sub: 'Administradora · local Miraflores', c: '#2B6CB0' },
  nelly: { n: 'Nelly Ccahuana', sub: 'Lavaplatos · local Miraflores', c: '#975A16' },
  admins: { n: 'Administradores Sabor del Perú', sub: '14 locales', c: '#C05621' },
};

export const WSP = [
  { chat: 'fiorella', t: '07:40', de: 'Fiorella', txt: 'Buenos días. Ya les dije a todos que se paga el jueves con la grati… ¿confirmado, no? 😬', si: 'fiorella_grati' },
  { chat: 'fiorella', t: '07:40', de: 'Fiorella', txt: 'Buenos días. Mi gente está tranquila con lo que me dijiste ayer. ¿Ya hay fecha? 🙏', si: 'fiorella_plazo' },
  { chat: 'nelly', t: '10:15', de: 'Nelly', txt: 'Buenos días señorita soy Nelly de lavado Miraflores. No escucho bien por eso escribo. Cuánto me van a pagar y cuándo. Gracias' },
  { chat: 'gaby', t: '12:30', de: 'Gaby', txt: 'Amiga, Yesenia dice que le escribiste bonito. Gracias. Las tres mamás ya están en el reloj 💛', si: 'reloj_corregido' },
  { chat: 'nelly', t: '17:45', de: 'Nelly', txt: 'Gracias señorita. Ya guardé mi carta. Mi hija dice que con eso saco mi CTS. Dios le pague', si: 'nelly_clara' },
  { chat: 'grupo', t: '19:10', de: 'Hugo', txt: 'Semana uno, cerrada. El lunes, corrida 2 de la grati. Que PlanMax nos acompañe 🙏 Buen fin de semana.' },
];

export const CORREOS = [
  { t: '07:35', de: 'Hugo Salazar', para: 'Asistente de Planillas', asunto: 'Miraflores: 18 liquidaciones', html: '<p>Hoy es el último día de 18 personas en Miraflores, todas con contrato a plazo fijo que vence hoy. Su liquidación no puede esperar a la gratificación: tiene plazo propio. Vamos a calcularlas juntos y luego vas al local con los papeles.</p><p>Hugo</p>' },
  { t: '11:10', de: 'Gerencia de Operaciones', para: 'Planillas; Tesorería', asunto: 'Pagos de la semana', html: '<p>Por favor, concentrar los pagos de diciembre en un solo día (jueves) para ordenar el flujo de caja. Cualquier excepción, sustentarla.</p><p>Operaciones</p>' },
];

export const QUIZ = [
  { q: '¿En qué plazo se paga la liquidación de beneficios sociales?', ops: ['Dentro de las 48 horas de producido el cese', 'Con la siguiente planilla', 'En 30 días', 'Cuando el trabajador lo pida'], ok: 0, por: 'La liquidación (CTS, vacaciones y gratificación truncas) se paga dentro de las 48 horas de producido el cese.' },
  { q: 'Un contrato a plazo fijo vence y no se renueva. ¿Corresponde indemnización por despido arbitrario?', ops: ['Sí, siempre', 'No: el vencimiento del plazo no es un despido', 'Solo si el trabajador lo pide', 'Solo en Lima'], ok: 1, por: 'El contrato termina por vencimiento del plazo; no es un despido arbitrario.' },
  { q: '¿Qué documento necesita el trabajador para retirar su CTS del banco?', ops: ['Su boleta de noviembre', 'La carta del empleador que acredita el cese', 'Su DNI y nada más', 'Una carta notarial'], ok: 1, por: 'El empleador entrega una carta que acredita el cese para que el trabajador pueda retirar su CTS.' },
  { q: 'La gratificación trunca se paga…', ops: ['En diciembre, con todos', 'Junto con los demás beneficios del cese, en el mismo plazo', 'Nunca', 'Solo si trabajó seis meses'], ok: 1, por: 'La gratificación trunca se paga con los demás beneficios sociales dentro de las 48 horas del cese.' },
  { q: 'Para una trabajadora con discapacidad auditiva, la mejor forma de explicarle su liquidación es…', ops: ['Por teléfono, hablando fuerte', 'Por escrito, con montos, fechas y documentos claros', 'Que le explique un compañero', 'No explicarle: ya le llega'], ok: 1, por: 'Un mensaje escrito, claro y completo respeta su forma de comunicarse y le deja constancia.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '07:45', ch: 'presencial', who: 'hugo', titulo: '¿Qué lleva una liquidación?', banner: 'assets/esc/mesa.webp', lugar: 'Escritorio de Hugo', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('fiorella_grati') ? 'Hugo lee tu respuesta de ayer a Fiorella y suspira: «No, no, no. Eso hay que arreglarlo hoy mismo». ' : 'Hugo lee tu respuesta de ayer a Fiorella: «Bien. No había que prometer nada». '}Te pasa la lista de los 18: mozos, cocineros, una cajera, dos lavaplatos.</p><p>«Antes de calcular, dime <mark class="clave">qué lleva una liquidación por vencimiento de contrato</mark>.»</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la liquidación.', boton: 'Guardar el modelo',
    bloques: [
      { id: 'pagos', t: 'Lo que se paga', n: 3, ops: [
        { id: 'p1', t: 'Remuneración de los días trabajados en diciembre y horas extra pendientes', ok: true },
        { id: 'p2', t: 'CTS trunca desde el último depósito, vacaciones truncas y gratificación trunca', ok: true, por: 'Son los beneficios que se cortan con el cese.' },
        { id: 'p3', t: 'Bonificación extraordinaria sobre la gratificación trunca', ok: true, por: 'Acompaña a la gratificación, también a la trunca.' },
        { id: 'p4', t: 'Indemnización por despido arbitrario', ok: false, por: 'El vencimiento de un contrato a plazo fijo no es un despido.' },
      ] },
      { id: 'desc', t: 'Lo que se descuenta', n: 1, ops: [
        { id: 'd1', t: 'Solo lo que manda la ley o lo que el trabajador autorizó por escrito', ok: true },
        { id: 'd2', t: 'El uniforme y el mandil que no devuelvan', ok: false, por: 'Sin autorización ni sustento, es un descuento indebido.' },
      ] },
      { id: 'plazo', t: 'Plazo y papeles', n: 2, ops: [
        { id: 'z1', t: 'Pago dentro de las 48 horas de producido el cese', ok: true },
        { id: 'z2', t: 'Carta de cese para retirar la CTS y certificado de trabajo', ok: true },
        { id: 'z3', t: 'Pago con la gratificación del jueves, para ordenar la caja', ok: false, por: 'El orden de la caja no cambia el plazo.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, cumplimiento: q === 'buena' ? 4 : -2 }, rel: { hugo: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['liq_ok'], cartera: { ceses: q === 'buena' ? 'Modelo de liquidación listo' : 'Modelo con dudas' },
        out: q === 'buena' ? 'Hugo carga tu modelo en PlanMax y corre las 18. «Ahora revisa una a mano. La de doña Nelly, que lleva dos años con nosotros.»' : 'Hugo tacha la indemnización: «Esto no es un despido: el contrato venció. Si pagas lo que no corresponde, también es un error».',
        pro: { ok: 'Saber qué se paga y qué no evita pagos de más y de menos.', risk: 'Confundir vencimiento con despido infla la liquidación; olvidar lo trunco la achica.', info: 'Revisa cuándo fue el último depósito de CTS de cada persona.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Liquidación armada pieza por pieza!' : 'Vencer no es lo mismo que despedir.'],
      };
    },
    rules: [[LEY, 'La liquidación se paga dentro de las 48 horas de producido el cese.'], [LEY, 'La gratificación trunca se paga con los demás beneficios del cese (D.S. 005-2002-TR).']],
    mirada: {
      ve: 'Una liquidación es la última boleta de una persona en la empresa. Es la que más se lee, la que más se guarda y la que más se reclama. Por eso se arma con la misma calma que la primera.',
      visual: { tipo: 'flujo', titulo: 'La liquidación por vencimiento', pasos: ['Días de diciembre', 'CTS trunca', 'Vacaciones truncas', 'Gratificación trunca + bonificación', 'Pago en 48 horas'] },
    },
  },
  {
    id: 'e2', t: '09:30', ch: 'documento', who: null, titulo: 'La liquidación de doña Nelly', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Nelly Ccahuana tiene 58 años, nació en Andahuaylas y lava platos en Miraflores desde hace dos años. Tiene hipoacusia: se comunica mejor por escrito. Su contrato actual era a plazo fijo por la temporada de la remodelación.</p><p>PlanMax ya calculó su liquidación. <mark class="clave">Revísala antes de que salga</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que está mal en la liquidación de doña Nelly.',
    doc: { t: 'Liquidación de beneficios sociales', sub: 'Nelly Ccahuana · Lavaplatos · local Miraflores' },
    lines: [
      { id: 'dias', t: 'Remuneración de los días trabajados de diciembre.' },
      { id: 'vac', t: 'Vacaciones truncas: S/ 0 («ya gozó vacaciones en febrero»).', bad: LEY, why: 'Gozar vacaciones de un periodo anterior no borra las truncas del periodo en curso.' },
      { id: 'cts', t: 'CTS trunca: suma otra vez el periodo que ya se depositó en noviembre.', bad: BP, why: 'Es un doble pago: lo depositado en noviembre ya está en su cuenta CTS. Se liquida desde el último depósito.' },
      { id: 'mandil', t: 'Descuento: S/ 45 por «mandil y gorro no devueltos».', bad: BP, why: 'No hay autorización ni sustento. Y doña Nelly devolvió su uniforme ayer, según Fiorella.' },
      { id: 'grati', t: 'Gratificación trunca de julio a noviembre, con bonificación extraordinaria.' },
      { id: 'fecha', t: 'Fecha de pago programada: jueves de la próxima semana, con la gratificación.', bad: LEY, why: 'El plazo es de 48 horas desde el cese.' },
      { id: 'cert', t: 'Adjuntos: certificado de trabajo y carta de cese para la CTS.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : 'buena',
      fx: { calidad: missLey ? -3 : 5, cumplimiento: missLey ? -3 : 4 },
      cartera: { ceses: missLey ? 'Liquidación de Nelly con errores' : `Liquidación de Nelly corregida · ${hitsLey} errores de ley` },
      out: missLey ? 'La liquidación sale con un error de ley. Hugo la devuelve: «Mira las vacaciones y la fecha».' : 'Corriges las vacaciones, el doble pago de CTS, el descuento y la fecha. Hugo revisa las otras 17 con tu misma lista.',
      pro: { ok: 'Un error en una liquidación suele repetirse en todas las del mismo local.', risk: 'Pagar de más tampoco es correcto: un doble pago se recupera con dificultad.', info: 'Pide a Fiorella el acta de devolución de uniformes.' },
      kusi: missLey ? ['preocupado', 'Las vacaciones de doña Nelly…'] : ['celebra', 'Dos años de trabajo, bien liquidados.'],
    }),
    rules: [[LEY, 'La liquidación se paga dentro de las 48 horas del cese.'], [BP, 'La CTS trunca se calcula desde el último depósito; lo ya depositado no se vuelve a pagar.']],
    mirada: {
      ve: 'Revisar la liquidación de una persona que se va no es un trámite: es la última oportunidad de tratarla bien. Un error de 45 soles en un mandil puede borrar, en su memoria, dos años de buen trato.',
      visual: { tipo: 'balanza', a: { t: 'Pagar de menos', items: ['Vacaciones truncas en cero', 'Descuento sin sustento'] }, b: { t: 'Pagar de más', items: ['CTS ya depositada', 'Indemnización que no corresponde'] } },
      normas: [{ ley: 'Plazo de pago de beneficios sociales', dice: 'La liquidación de beneficios sociales se paga dentro de las 48 horas de producido el cese.', practica: 'Si el contrato vence el viernes, el pago no puede quedar para el jueves siguiente.' }],
    },
  },
  {
    id: 'e3', t: '11:30', ch: 'llamada', who: null, titulo: 'Operaciones quiere un solo pago', banner: 'assets/foto2/tension.webp', lugar: 'Por teléfono', show: ['cumplimiento', 'confianza', 'etica'],
    body: () => `<p>Llama el señor Bustamante, gerente de Operaciones. Habla rápido, con ruido de tráfico de la Javier Prado. «He visto que quieren pagar a Miraflores mañana sábado. Yo pedí un solo pago el jueves. Son 18 personas, ¿qué cambia en tres días? <mark class="clave">La caja está apretada</mark> con la gratificación de 700.»</p><p>Hugo está en otra llamada y te hace una seña: «Respóndele tú».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle que la ley da 48 horas desde el cese y proponerle el monto exacto de las 18 liquidaciones para que Tesorería lo separe hoy.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 2 }, flags: ['liq_48h'], cartera: { tesoreria: 'Fondos de 18 liquidaciones separados hoy' },
          out: 'Bustamante se queda en silencio. «¿Cuánto es?» Le das la cifra. «Ya. Que Tesorería lo transfiera mañana a primera hora. Pero el resto, todo el jueves.»',
          pro: { ok: 'Le das la regla y la cifra: con eso puede decidir.', risk: 'Bustamante siente que Planillas le cambió el plan.', info: 'Pide a Tesorería la constancia de la transferencia de cada liquidación.' },
          kusi: ['celebra', 'Plazo defendido con números.'] } },
      { id: 'b', label: 'Aceptar el jueves: él es gerente, tú eres asistente y la caja es su responsabilidad.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, etica: -2 }, flags: ['liq_jueves'], cartera: { tesoreria: 'Liquidaciones al jueves, fuera de plazo' },
          out: 'Bustamante cuelga satisfecho. Hugo termina su llamada y te mira: «¿Le dijiste lo de las 48 horas?».',
          pro: { ok: 'No contradices a un gerente.', risk: 'Callar el plazo legal no es obediencia: es dejar a la empresa expuesta y a 18 personas esperando.' },
          kusi: ['triste', 'El plazo no depende del cargo.'] } },
      { id: 'c', label: 'Proponerle pagar hoy la mitad de cada liquidación y el resto el jueves.',
        res: { q: 'aceptable', fx: { cumplimiento: -1, confianza: 1 }, flags: ['liq_mitad'], cartera: { tesoreria: 'Mitad hoy, mitad el jueves' },
          out: 'Bustamante acepta: «Eso sí me sirve». Pero el saldo igual queda fuera de plazo, y ahora hay que explicar dos pagos a 18 personas.',
          pro: { ok: 'Buscas un punto medio.', risk: 'Pagar en partes no cumple el plazo por el saldo, y confunde a quien se va.' },
          kusi: ['pensando', 'La mitad a tiempo sigue siendo la mitad.'] } },
    ],
    rules: [[LEY, 'La liquidación de beneficios sociales se paga dentro de las 48 horas de producido el cese.']],
    mirada: {
      ve: 'Bustamante no quiere incumplir la ley: quiere ordenar la caja. La asistente que le da el plazo y el monto exacto le permite hacer las dos cosas. La que calla para no incomodar le hereda un problema mayor.',
      visual: { tipo: 'linea', titulo: 'Las 18 liquidaciones', hitos: [['Viernes', 'Vencen los contratos'], ['48 horas', 'Plazo de pago'], ['Jueves', 'Pago de la gratificación']] },
    },
  },
  {
    id: 'e4', t: '13:20', ch: 'whatsapp', who: null, titulo: 'Doña Nelly pregunta', banner: 'assets/foto/cv-mano.webp', lugar: 'Tu escritorio', show: ['personas', 'calidad'],
    body: () => `<p>Doña Nelly escribió temprano: «No escucho bien por eso escribo. Cuánto me van a pagar y cuándo». Ya tienes su liquidación corregida.</p><p><mark class="clave">Respóndele por escrito, claro y completo</mark>.</p>`,
    type: 'compose', enviaA: 'nelly', para: 'Para: Nelly Ccahuana', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'cuanto', t: 'Cuánto', ops: [
        { id: 'c1', t: 'Señora Nelly, buenas tardes. Su liquidación suma S/ 2,184.60: días de diciembre, vacaciones, gratificación con bonificación y CTS desde noviembre.', ok: true, por: 'Monto y conceptos, en una línea.' },
        { id: 'c2', t: 'Señora Nelly, su liquidación está lista, le va a llegar lo que le toca.', ok: false, por: 'Le escribió para saber cuánto.' },
      ] },
      { id: 'cuando', t: 'Cuándo', ops: [
        { id: 'w1', t: 'Se deposita en su cuenta sueldo dentro de las 48 horas de su cese.', ok: true, por: 'El plazo de ley.' },
        { id: 'w2', t: 'Se deposita pronto.', ok: false, por: '«Pronto» no le sirve para organizarse.' },
      ] },
      { id: 'papeles', t: 'Qué papeles', ops: [
        { id: 'p1', t: 'Hoy le entregamos en el local su carta de cese (con ella retira su CTS del banco) y su certificado de trabajo. Cualquier duda, escríbame aquí.', ok: true, por: 'Le dices qué recibe y para qué sirve.' },
        { id: 'p2', t: 'Si quiere, llámeme para explicarle.', ok: false, por: 'Ella te dijo que no escucha bien.' },
      ] },
    ],
    res: sel => {
      const buenas = ['c1', 'w1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, calidad: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['nelly_clara'] : [], cartera: { docs: q === 'buena' ? 'Nelly informada por escrito' : 'Nelly con dudas' },
        out: q === 'buena' ? 'Doña Nelly responde con un pulgar y un «gracias señorita». Al rato manda una foto de tu mensaje: se lo envió a su hija.' : sel.papeles === 'p2' ? 'Doña Nelly responde: «Disculpe no escucho por teléfono. Puede escribir por favor».' : 'Doña Nelly vuelve a preguntar: «Cuánto es señorita».',
        pro: { ok: 'Montos, fechas y papeles por escrito respetan su forma de comunicarse.', risk: 'Ofrecer una llamada a quien te dijo que no escucha bien es no haber leído su mensaje.', info: 'Guarda este mensaje como modelo para los otros 17.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Claro, completo y por escrito. ¡Así!' : 'Léela otra vez: ¿qué te pidió?'],
      };
    },
    mirada: {
      ve: 'Hacer accesible una comunicación no es un gesto especial: es elegir el canal que la persona necesita. Para doña Nelly, un mensaje escrito con montos y fechas vale más que cualquier llamada amable.',
      visual: { tipo: 'mensaje', titulo: 'Cuánto, cuándo y qué papeles', txt: 'Su liquidación suma S/ 2,184.60. Se deposita dentro de las 48 horas de su cese. Hoy recibe su carta de cese para retirar su CTS y su certificado de trabajo.' },
    },
  },
  {
    id: 'e5', t: '15:30', ch: 'presencial', who: null, titulo: 'Último día en Miraflores', banner: 'assets/foto2/caminan.webp', lugar: 'Local de Miraflores, a una cuadra del parque Kennedy', show: ['tiempo', 'personas', 'cumplimiento'],
    body: () => `<p>Llegas a Miraflores en una combi que se demora media hora en la Arequipa. El local ya tiene las sillas sobre las mesas y olor a pintura. Dieciocho personas esperan en el comedor del personal; algunas lloran, otras bromean.</p><p>Tienes dos horas antes de que cierren el local. <mark class="clave">Elige tres cosas que no pueden faltar hoy</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que haces en Miraflores.', boton: 'Hacerlas', resumen: 'Hiciste',
    cols: ['Tarea', 'Para qué'],
    rows: [
      { id: 'carta', cells: ['Entregar a cada persona su carta de cese para retirar la CTS', 'Sin ella no pueden sacar su CTS del banco'] },
      { id: 'cert', cells: ['Entregar los certificados de trabajo', 'Lo piden para su próximo empleo'] },
      { id: 'cargo', cells: ['Hacer firmar el cargo de recepción de cada documento', 'Constancia de que se entregó'] },
      { id: 'foto', cells: ['Tomar una foto grupal para el Facebook de la empresa', 'Marketing la pidió'] },
      { id: 'encuesta', cells: ['Pasar una encuesta de clima', 'Recursos Humanos la quiere desde hace meses'] },
      { id: 'firma', cells: ['Hacer firmar la liquidación «en blanco», para llenarla luego', 'Para no volver el lunes'] },
    ],
    score: { carta: 3, cert: 3, cargo: 2, foto: -1, encuesta: -1, firma: -4 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: picks.includes('carta') ? 4 : -3, personas: q === 'buena' ? 4 : 0, etica: picks.includes('firma') ? -5 : 1 },
        flags: [picks.includes('carta') && picks.includes('cert') ? 'docs_cese' : 'docs_incompletos'], cartera: { docs: picks.includes('carta') && picks.includes('cert') ? 'Cartas de cese y certificados entregados' : 'Faltan documentos' },
        out: picks.includes('firma') ? 'Un mozo se niega: «¿Firmar en blanco? Ni loco». Fiorella te mira incómoda. Los demás tampoco firman.' : q === 'buena' ? 'A las 5:20, cada persona tiene su carta y su certificado, con su cargo firmado. Doña Nelly te da la mano dos veces.' : 'Avanzas, pero alguien se va sin un papel que necesitará el lunes.',
        pro: { ok: 'Los papeles del cese son tan importantes como el pago.', risk: 'Una firma en blanco no es una constancia: es un riesgo para el trabajador y una mala práctica para la empresa.', info: 'Lleva siempre copias de más: alguien perderá la suya.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Se fueron con todo lo suyo.' : 'Algo importante se quedó en la mochila.'],
      };
    },
    mirada: {
      ve: 'El último día de alguien en una empresa se recuerda por años. Lo que esa persona necesita no es una foto ni una encuesta: es irse con los papeles que le permiten cobrar lo suyo y buscar otro trabajo.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Importancia para quien se va', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'Puede esperar', 'No lo hagas'], items: [['Carta de cese', .3, .95], ['Certificado', .3, .9], ['Cargos firmados', .5, .7], ['Foto', .2, .2], ['Encuesta', .5, .3], ['Firma en blanco', .2, .02]] },
    },
  },
  {
    id: 'e6', t: '18:10', ch: 'whatsapp', who: null, titulo: '«Diles que vuelven en marzo»', banner: 'assets/esc/camino.webp', lugar: 'Paradero de la avenida Larco', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>Esperas el bus de regreso. El mar se ve gris al final de la calle y te duelen los pies. Fiorella te escribe: «Amiga, ¿les puedes decir en el grupo de Miraflores que en marzo los recontratan cuando reabra? <mark class="clave">Para que se vayan contentos</mark>. Yo creo que sí va a ser así».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Decirle que no puedes prometerlo porque no depende de Planillas, y proponerle que pida a Operaciones una respuesta escrita sobre la reapertura.',
        res: { q: 'buena', fx: { etica: 4, confianza: 2 }, flags: ['sin_promesa'],
          envia: [['fiorella', 'Fiorella, entiendo que quieras darles una buena noticia, pero la recontratación no depende de Planillas y no quiero prometer algo que no sé. ¿Le pedimos a Operaciones que confirme por escrito qué pasará con la reapertura? Así les dices algo seguro.']],
          out: 'Fiorella responde: «Tienes razón. Mejor no les meto cuentos». Llega tu bus, lleno hasta la puerta.',
          pro: { ok: 'No prometes lo que no decides.', info: 'Una mala noticia clara duele menos que una promesa que no se cumple.' },
          kusi: ['animo', 'La esperanza no se reparte sin respaldo.'] } },
      { id: 'b', label: 'Escribir en el grupo que «lo más probable» es que los llamen en marzo.',
        res: { q: 'riesgosa', fx: { etica: -3, personas: 1 }, flags: ['promesa_marzo'],
          out: 'El grupo se llena de corazones. Doña Nelly escribe: «Entonces no busco otro trabajo, espero marzo». Se te aprieta el estómago.',
          pro: { ok: 'Esta noche están contentos.', risk: 'Alguien dejará de buscar trabajo por una promesa que nadie decidió.' },
          kusi: ['preocupado', 'Doña Nelly va a esperar marzo…'] } },
    ],
    mirada: {
      ve: 'Las promesas que no dependen de ti son las más tentadoras al final de un día triste. Pero para quien se queda sin trabajo, una promesa vacía puede significar dejar de buscar otro.',
    },
  },
];
