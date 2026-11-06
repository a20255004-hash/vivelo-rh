// Generalista de RR.HH. · Capítulo 8 · «Lleno total» · Semana 2, miércoles.
// Hilo de las dos semanas: preparar el Hotel Inti Wasi (Cusco) para la temporada alta, siendo la única persona de RR.HH.
// Normas citadas:
// - Ley 26790 (Modernización de la Seguridad Social en Salud) y su reglamento (D.S. 009-97-SA): los primeros 20 días
//   de incapacidad temporal en el año los asume el empleador; desde el día 21, EsSalud paga el subsidio.
//   https://lpderecho.pe/como-obtener-pago-subsidio-incapacidad-temporal/
//   https://www.buk.pe/blog/subsidio-por-incapacidad-temporal
//   https://web.talana.com/es-pe/blog/descanso-medico-en-planilla-gestion-de-rr.hh
// - Alta en el T-Registro el día de ingreso y horas extra voluntarias (citados en los capítulos 1 y 4).

export const CAP = {
  n: 8, titulo: 'Lleno total', dia: 'Semana 2, miércoles', foto: 'assets/foto2/collage.webp',
  lugar: 'Hotel Inti Wasi, Cusco · 100 % de ocupación',
  inicio: '06:30', fin: '19:00', cierreHora: '18:50',
  apertura: 'Cusco, miércoles, 6:30 de la mañana. Hoy el hotel llega al 100 %: a las 14:00 entra un grupo de 40 turistas de una agencia de Lima. Todavía no amanece del todo cuando suena tu celular.', boton: 'Contestar',
  kusi: 'Hoy se prueba todo lo que armaste en estas dos semanas. ¡Respira y prioriza!',
  lead: 'Decidiste qué hacer con dos personas enfermas, ordenaste el día crítico, cubriste los puestos sin informalidad, mantuviste informadas a las jefaturas, protegiste a una camarera de un huésped y dejaste un protocolo para los próximos días críticos.',
  reflexion: '¿Qué harías si alguien enfermo te dice «puedo ir igual»?',
  siguiente: { n: 9, titulo: 'El periodo de prueba', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'enfermos', p: 'Dos personas enfermas', j: 'Housekeeping y salón', d: 0, e: 'Ahora' },
  { id: 'grupo40', p: 'Check-in de 40 turistas', j: 'Recepción', d: 0, e: '14:00' },
  { id: 'cobertura', p: 'Cubrir los puestos que faltan', j: 'Verónica · Gerencia', d: 0, e: 'Antes de las 13:00' },
  { id: 'protocolo', p: 'Protocolo para días críticos', j: 'RR.HH.', d: 0, e: 'Hoy' },
];

export const FUTURO = {
  enfermos_en_casa: ['Rocío y Rubén se quedaron en casa con descanso médico.', 'Vuelven la próxima semana.'],
  enfermo_trabajando: ['Rubén sirvió el desayuno enfermo.', 'Dos compañeros se contagiaron.'],
  dia_ordenado: ['Ordenaste el día crítico en el orden correcto.', 'El check-in salió a tiempo.'],
  reserva_contratada: ['Cubriste los puestos con candidatos de la reserva, con contrato y alta desde hoy.', 'Dos personas más para la temporada.'],
  efectivo_por_dia: ['Aceptaste traer gente por el día, pagada en efectivo y sin alta.', 'La informalidad volvió a entrar por la urgencia.'],
  checkin_negociado: ['Negociaste con la agencia un check-in escalonado.', 'La agencia lo recordará.'],
  jefaturas_informadas: ['Las jefaturas recibieron el plan del día a tiempo.', 'Nadie improvisó.'],
  fortunata_protegida: ['Protegiste a Fortunata de un huésped que la maltrató.', 'El equipo de housekeeping lo supo.'],
  cliente_primero: ['Le pediste a Fortunata que se disculpara con el huésped.', 'Haydée no lo olvidará.'],
  protocolo_critico: ['Dejaste un protocolo para días críticos.', 'Servirá en la temporada.'],
};

export const CHATS = {
  grupo: { n: 'Inti Wasi · Jefaturas', sub: 'Verónica, el chef, recepción, housekeeping y tú', c: '#F2A900' },
  veronica: { n: 'Verónica Quispe', sub: 'Gerenta general', who: 'veronica' },
  chef: { n: 'Chef Rolando Huamán', sub: 'Jefe de cocina', who: 'chef' },
  wendy: { n: 'Wendy Condori', sub: 'Recepcionista bilingüe', who: 'wendy' },
  contador: { n: 'CPC Iván Mendoza', sub: 'Contador externo', who: 'contador' },
  haydee: { n: 'Haydée Mamani', sub: 'Gobernanta de housekeeping', c: '#9C2F5B' },
  milagros: { n: 'Milagros Torres', sub: 'Recepcionista de la temporada', c: '#0E7C86' },
};

export const WSP = [
  { chat: 'haydee', t: '06:35', de: 'Haydée', txt: 'Hija, Rocío amaneció con fiebre y Rubén con el estómago mal. Hoy que llegan los 40… 😩' },
  { chat: 'wendy', t: '07:40', de: 'Wendy', txt: 'Vi el grupo. ¿Necesitan que vuelva hoy? Puedo tomar el bus de las 9.', si: 'wendy_descansa' },
  { chat: 'wendy', t: '07:40', de: 'Wendy', txt: 'Ya estoy en recepción desde las 6. No se preocupe, yo puedo 💪', no: 'wendy_descansa' },
  { chat: 'chef', t: '10:20', de: 'Chef Rolando', txt: 'Marleny se quedó dos horas más para el almuerzo del grupo. Firmó la autorización, como usted dijo.', si: 'mediacion_acuerdo' },
  { chat: 'milagros', t: '14:55', de: 'Milagros', txt: '¡40 check-ins en 50 minutos! Sonia me ayudó con las llaves 🙌', si: 'dia_ordenado' },
  { chat: 'haydee', t: '16:20', de: 'Haydée', txt: 'Fortunata está bien. Me dijo que es la primera vez que alguien de la oficina la defiende. Gracias.', si: 'fortunata_protegida' },
];

export const CORREOS = [
  { t: '07:00', de: 'Agencia Ruta Inca Tours · Lima', para: 'Reservas Inti Wasi', asunto: 'Grupo 40 pax · llegada 13:30', html: '<p>Confirmamos la llegada del grupo a las 13:30 desde el aeropuerto. Solicitamos 20 habitaciones dobles listas y almuerzo a las 14:30.</p>' },
  { t: '09:15', de: 'Clínica San Juan de Dios', para: 'RR.HH. Hotel Inti Wasi', asunto: 'Exámenes de ingreso', html: '<p>Los seis trabajadores de la lista fueron atendidos esta mañana. Enviaremos las constancias de aptitud en 48 horas.</p>', si: 'evidencias_completas' },
];

export const QUIZ = [
  { q: '¿Quién paga los primeros días de un descanso médico?', ops: ['Nadie', 'El trabajador', 'El empleador asume los primeros 20 días del año; desde el día 21 subsidia EsSalud', 'EsSalud desde el primer día'], ok: 2, por: 'Según la Ley 26790 y su reglamento, el empleador asume los primeros 20 días de incapacidad en el año y EsSalud paga el subsidio desde el día 21.' },
  { q: 'Un mozo con gastroenteritis dice «puedo ir igual». ¿Qué haces?', ops: ['Que venga', 'Que venga medio día', 'Que se quede en casa y se atienda', 'Que trabaje en cocina'], ok: 2, por: 'Quien manipula alimentos o atiende mesas enfermo pone en riesgo a compañeros y huéspedes.' },
  { q: 'Faltan tres personas para un día crítico. ¿Qué no corresponde?', ops: ['Llamar a candidatos ya evaluados y contratarlos con alta', 'Horas extra voluntarias y registradas', 'Traer gente por el día en efectivo y sin alta', 'Mover personal de otras áreas con acuerdo'], ok: 2, por: 'Sin alta no hay seguro: la urgencia no cambia la regla.' },
  { q: 'Un huésped insulta a una camarera. ¿Qué es lo correcto?', ops: ['Pedirle a ella que se disculpe', 'Protegerla y hablar con el huésped o su guía', 'No hacer nada: el cliente manda', 'Despedirla'], ok: 1, por: 'El hotel debe proteger a su personal también frente a terceros.' },
  { q: '¿Qué debe tener un protocolo para días críticos?', ops: ['Un número de emergencia', 'Lista de reemplazos, criterios de salud, límites de horas extra y comunicación', 'Solo el teléfono de la gerenta', 'Nada: se improvisa'], ok: 1, por: 'Un buen protocolo decide de antemano lo que en el día no da tiempo a pensar.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '06:40', ch: 'llamada', who: null, titulo: 'Las llamadas de las 6:40', banner: 'assets/foto/llamada.webp', lugar: 'En la combi, camino al hotel', show: ['personas', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Vas en la combi desde Wanchaq, con la ventana empañada y una señora que lleva un balde de chicha morada. ${F.has('siete_dias') ? 'Rocío lleva doce días seguidos sin descanso.' : ''}</p><p>Haydée te pasó los números. <mark class="clave">Llamas a los dos enfermos antes de llegar</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Rocío Quispe · camarera', 'Contesta con la voz ronca', '«Tengo 38 y medio, señorita. Pero si no voy me descuentan el día, ¿no? Y hoy es el grupo…»'],
      ['Rubén Ccori · mozo', 'Contesta desde el baño', '«Comí un anticucho anoche en la calle y… bueno. Pero puedo ir igual, me tomo una pastilla. No quiero quedar mal en mi primera semana.»'],
    ],
    prompt: 'Escuchaste a los dos. ¿Qué les dices?',
    choices: [
      { id: 'a', label: 'A los dos: que se queden en casa, que vayan al médico y te manden el certificado. A Rocío, que un descanso médico no se descuenta.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 3, tiempo: -2 }, flags: ['enfermos_en_casa'], cartera: { enfermos: 'Los dos en casa, con certificado' },
          out: 'Rocío se queda callada y luego dice: «¿De verdad no me descuentan?». Rubén suspira aliviado. Ahora tienes dos huecos más en el día más lleno.',
          pro: { ok: 'Cuidas su salud y la de los demás, y le quitas a Rocío el miedo al descuento.', risk: 'Te faltan dos personas: tendrás que cubrirlas bien.', info: 'Los primeros 20 días de incapacidad del año los asume el empleador; desde el día 21 subsidia EsSalud.' },
          kusi: ['animo', 'Enfermos a casa. ¡Bien!'] } },
      { id: 'b', label: 'Que Rocío se quede, pero que Rubén venga si se siente capaz: él mismo lo ofrece.',
        res: { q: 'riesgosa', fx: { personas: -3, cumplimiento: -2, tiempo: 2 }, flags: ['enfermo_trabajando'], cartera: { enfermos: 'Rocío en casa; Rubén trabajando enfermo' },
          out: 'Rubén llega pálido y sirve el desayuno a 80 huéspedes. A las 10 corre al baño por tercera vez.',
          pro: { ok: 'Tienes un mozo más en el salón.', risk: 'Un mozo enfermo del estómago sirviendo comida es un riesgo para huéspedes y compañeros.' },
          kusi: ['preocupado', '¡Enfermo y sirviendo comida!'] } },
      { id: 'c', label: 'Que vengan los dos medio día y luego se vayan.',
        res: { q: 'riesgosa', fx: { personas: -3, cumplimiento: -2, tiempo: 1 }, flags: ['enfermo_trabajando'], cartera: { enfermos: 'Medio día enfermos' },
          out: 'Rocío limpia seis habitaciones con fiebre. Rubén no llega a la mitad de su turno.',
          pro: { ok: 'Cubres parte de la mañana.', risk: 'Medio día enfermo sigue siendo trabajar enfermo.' },
          kusi: ['triste', 'Con fiebre, ni medio día.'] } },
    ],
    rules: [[LEY, 'Los primeros 20 días de incapacidad temporal en el año los asume el empleador; desde el día 21, EsSalud paga el subsidio (Ley 26790 y su reglamento).']],
    mirada: {
      ve: 'En temporada, la gente nueva y la gente cansada tiene miedo de «quedar mal» o de perder el día. La generalista les quita ese miedo y asume el problema operativo, que es suyo.',
      normas: [{ ley: 'Ley 26790 y su reglamento, D.S. 009-97-SA', dice: 'Durante los primeros 20 días de incapacidad temporal en el año, el empleador sigue pagando la remuneración. A partir del día 21, EsSalud otorga el subsidio, con el certificado de incapacidad correspondiente.', practica: 'Un descanso médico sustentado no es un día descontado. Pide el certificado y explícaselo al trabajador.' }],
    },
  },
  {
    id: 'e2', t: '07:30', ch: 'documento', who: null, titulo: 'El día en orden', banner: 'assets/esc/reloj.webp', lugar: 'Oficina de RR.HH.', show: ['tiempo', 'calidad'],
    body: () => `<p>Llegas, te sirves un mate de coca y abres el cuadro de turnos. El grupo llega a las 13:30. Faltan dos personas y todo el hotel está lleno.</p><p><mark class="clave">Ordenas el día antes de que el día te ordene a ti</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos para cubrir el día crítico. Usa las flechas.', boton: 'Guardar el plan del día',
    items: [
      { id: 'cuenta', t: 'Contar qué puestos faltan y a qué hora hacen falta', por: 'No todos los huecos son iguales.' },
      { id: 'prioriza', t: 'Priorizar: 20 habitaciones listas a las 13:30 y el almuerzo de las 14:30', por: 'Es lo que el cliente pidió.' },
      { id: 'internos', t: 'Preguntar quién quiere hacer horas extra voluntarias, con un tope de dos', por: 'Primero la gente que ya conoce el hotel.' },
      { id: 'reserva', t: 'Llamar a los candidatos de la reserva del instituto', por: 'Gente ya evaluada.' },
      { id: 'comunica', t: 'Mandar el plan a las jefaturas antes de las 12:30', por: 'Para que nadie improvise.' },
      { id: 'cierra', t: 'Al cierre, registrar las horas extra y pasárselas a Iván', por: 'Para que se paguen bien.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, tiempo: q === 'riesgosa' ? -3 : 3 },
        flags: q === 'riesgosa' ? [] : ['dia_ordenado'], cartera: { grupo40: q === 'riesgosa' ? 'Sin plan claro' : 'Plan del día listo' },
        out: q === 'buena' ? 'El plan cabe en un post-it amarillo que pegas en el monitor.' : 'Tienes un plan, aunque te tocará correr más de la cuenta.',
        pro: { ok: 'En un día crítico, el orden de las decisiones es tan importante como las decisiones.', info: 'Prioriza lo que el cliente va a ver primero.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡El día en un post-it!' : 'Ordena antes de correr.'],
      };
    },
    rules: [[BP, 'En un día crítico, cuenta los huecos, prioriza lo que ve el cliente y avisa a las jefaturas antes de que empiece el pico.']],
    mirada: { ve: 'Los días de 100 % de ocupación son los que muestran si el hotel tiene un sistema o depende del heroísmo de unos pocos.', visual: { tipo: 'linea', titulo: 'El día crítico', hitos: [['07:30', 'Plan'], ['12:30', 'Jefaturas informadas'], ['13:30', 'Llega el grupo'], ['14:30', 'Almuerzo de 40']] } },
  },
  {
    id: 'e3', t: '09:00', ch: 'presencial', who: 'veronica', titulo: '«Tres chicas por el día»', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Recepción, entre maletas', show: ['cumplimiento', 'tiempo', 'etica'],
    body: (n, F) => `<p>Verónica está en recepción, con el teléfono en la oreja. Cuelga y te dice: «Mi prima tiene tres chicas que trabajan por día en hostales de San Blas. <mark class="clave">Las traemos hoy, les pago en efectivo y listo</mark>. Es un solo día.»${F.has('efectivo_por_dia') ? '' : ''}</p>${F.has('chef_informal') ? '<p>Te acuerdas de Kevin, «a prueba» y sin alta, en tu primer día.</p>' : ''}`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Llamar a la agencia para pedir un check-in escalonado: la mitad del grupo a las 13:30 y la otra a las 15:30.',
        res: { q: 'aceptable', fx: { tiempo: 3, confianza: -1 }, rel: { veronica: 0 }, flags: ['checkin_negociado'], cartera: { cobertura: 'Check-in escalonado; sigue faltando gente' },
          out: 'La agencia acepta a regañadientes: «Que sea la última vez». Ganas dos horas, pero sigues con dos personas menos.',
          pro: { ok: 'Bajas el pico sin informalidad.', risk: 'Le trasladas el problema al cliente, y no resuelves la falta de personal.' },
          kusi: ['pensando', 'Dos horas más… y el mismo hueco.'] } },
      { id: 'b', label: 'Traer a las tres por el día, en efectivo: es una emergencia.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -3, tiempo: 4 }, rel: { veronica: 1 }, flags: ['efectivo_por_dia'], cartera: { cobertura: 'Tres personas sin alta por el día' },
          out: 'A las 10 llegan tres chicas que no conocen el hotel. Limpian rápido. Nadie sabe sus apellidos.',
          pro: { ok: 'Las habitaciones estarán listas.', risk: 'Tres personas sin alta, sin seguro y sin inducción, en el mismo hotel donde ayer una auditora revisó tus registros.' },
          kusi: ['indignado', '¿Otra vez «solo un día»?'] } },
      { id: 'c', label: 'Llamar a dos candidatas de la reserva del instituto, ya evaluadas, y contratarlas hoy por la temporada, con alta. Y pedir horas extra voluntarias con tope.',
        res: { q: 'buena', fx: { cumplimiento: 5, tiempo: -1, calidad: 2 }, rel: { veronica: 0 }, flags: ['reserva_contratada'], cartera: { cobertura: 'Dos ingresos de la reserva con alta, y horas extra voluntarias' },
          out: 'Verónica frunce el ceño: «¿Y van a llegar a tiempo?». Una de las candidatas vive en Santiago, a veinte minutos. A las 10:30 firman contrato en tu oficina; Iván registra el alta antes del mediodía.',
          pro: { ok: 'Resuelves el día y sumas dos personas para la temporada, con la misma regla que aplicaste desde el lunes pasado.', risk: 'Hoy tendrán una inducción corta: acompáñalas.', info: 'Una lista de reserva de candidatos evaluados es tu mejor seguro para los días críticos.' },
          kusi: ['celebra', '¡Rápido y con seguro!'] } },
    ],
    rules: [[LEY, 'El alta en el T-Registro se registra el día de ingreso, aunque el trabajo sea urgente.']],
    mirada: {
      ve: 'La informalidad casi siempre entra por la puerta de la urgencia, y casi siempre con un argumento razonable: «es solo un día». Por eso la generalista prepara alternativas antes de que llegue la emergencia.',
      visual: { tipo: 'balanza', a: { t: '«Solo por hoy»', items: ['Rápido', 'Efectivo', 'Sin seguro ni inducción'] }, b: { t: 'Reserva del instituto', items: ['Contrato y alta hoy', 'Gente ya evaluada', 'Dos personas más para la temporada'] } },
    },
  },
  {
    id: 'e4', t: '12:15', ch: 'whatsapp', who: null, titulo: 'El plan para las jefaturas', banner: 'assets/esc/meta.webp', show: ['calidad', 'confianza'],
    body: () => `<p>Antes de que llegue el grupo, mandas el plan al grupo de jefaturas. Lo leerán de pie, con el celular en una mano.</p>`,
    chat: ['Haydée: ¿Cómo quedamos para las 13:30? 🙏'],
    type: 'compose', enviaA: 'grupo', para: 'Para: Inti Wasi · Jefaturas', boton: 'Enviar al grupo',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'quien', t: 'Quién cubre qué', ops: [
        { id: 'q1', t: 'Housekeeping: las 20 dobles a cargo de Haydée con las dos nuevas y Fortunata (2 horas extra voluntarias, ya firmó). Salón: Edwin cubre a Rubén.', ok: true, por: 'Nombres, puestos y horas.' },
        { id: 'q2', t: 'Todos a apoyar donde se pueda 💪', ok: false, por: 'Motiva, pero nadie sabe qué hacer.' },
      ] },
      { id: 'hora', t: 'Horas clave', ops: [
        { id: 'h1', t: '13:30 habitaciones listas · 14:30 almuerzo para 40 · 15:00 revisión rápida aquí.', ok: true, por: 'Tres horas que todos pueden recordar.' },
        { id: 'h2', t: 'Lo antes posible, por favor.', ok: null, por: 'Sin horas, cada uno entiende algo distinto.' },
      ] },
      { id: 'limite', t: 'Lo que no se hace', ops: [
        { id: 'l1', t: 'Nadie trabaja enfermo ni pasa de dos horas extra. Si falta alguien, me avisan a mí.', ok: true, por: 'Los límites protegen al equipo en el pico.' },
        { id: 'l2', t: 'Hoy no hay límites, es el día.', ok: false, por: 'Así empiezan los accidentes.' },
      ] },
    ],
    res: sel => {
      const mal = sel.limite === 'l2' || sel.quien === 'q2', buenas = ['q1', 'h1', 'l1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : mal ? -2 : 1, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['jefaturas_informadas'],
        out: q === 'buena' ? 'Haydée responde con un pulgar. El chef: «Ok». Verónica: «Así sí». Tres respuestas en un minuto.' : mal ? 'El grupo se llena de preguntas: «¿Quién va a la 204?», «¿Puedo quedarme hasta las 10?».' : 'Responden, aunque a las 13:40 alguien pregunta a qué hora era el almuerzo.',
        pro: { ok: 'Un mensaje operativo dice quién, cuándo y qué no se hace.', risk: 'En un pico, «todos apoyan» significa que nadie sabe qué le toca.', info: 'En los grupos de WhatsApp, lo más importante va en la primera línea.' },
        kusi: [q === 'buena' ? 'feliz' : mal ? 'preocupado' : 'pensando', q === 'buena' ? '¡Clarito para todos!' : mal ? '¡Cuántas preguntas!' : 'Casi.'],
      };
    },
    mirada: { ve: 'En días críticos, la comunicación de RR.HH. tiene que ser operativa: nombres, horas y límites. Lo demás puede esperar.' },
  },
  {
    id: 'e5', t: '15:20', ch: 'presencial', who: null, titulo: 'La huésped de la 207', banner: 'assets/foto2/grito.webp', lugar: 'Pasillo del segundo piso', show: ['personas', 'etica', 'confianza'],
    body: () => `<p>Haydée te llama, agitada. Una huésped del grupo le gritó a Fortunata porque su habitación «no estaba lista»: «¡India ignorante, ni castellano sabes hablar!». Fortunata está parada junto al carrito, con la cara roja, sin decir nada.</p><p>El guía del grupo llega detrás. <mark class="clave">Verónica no quiere problemas con la agencia</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Sacar a Fortunata del pasillo, que otra camarera termine la 207, y hablar con el guía: el hotel no acepta insultos a su personal.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, confianza: 1 }, rel: { veronica: 0 }, flags: ['fortunata_protegida'],
          out: 'El guía se disculpa en nombre del grupo. La huésped no dice nada más. Fortunata toma agua en tu oficina y te dice, en voz bajita: «En mi pueblo me enseñaron a callar».',
          pro: { ok: 'Proteges a la trabajadora sin escalar el conflicto con el cliente.', risk: 'Verónica puede preocuparse por la agencia: explícale que el guía lo entendió.', info: 'Registra el incidente: fecha, hora, qué se dijo y qué se hizo.' },
          kusi: ['celebra', '¡Así se cuida a la gente!'] } },
      { id: 'b', label: 'Pedirle a Fortunata que se disculpe con la huésped para calmarla: el grupo es importante.',
        res: { q: 'riesgosa', fx: { personas: -5, etica: -5, confianza: -1 }, rel: { veronica: 1 }, flags: ['cliente_primero'],
          out: 'Fortunata pide perdón sin saber de qué. Haydée te mira y no dice nada. Esa noche, en el comedor del personal, todos saben lo que pasó.',
          pro: { ok: 'La huésped se calma.', risk: 'Pedirle disculpas a la persona insultada le dice a todo el equipo que el hotel no los va a proteger.' },
          kusi: ['indignado', '¿Ella se disculpa?'] } },
      { id: 'c', label: 'Dejar que Haydée lo maneje: es su área.',
        res: { q: 'aceptable', fx: { personas: -1, tiempo: 1 },
          out: 'Haydée cambia a Fortunata de piso y no dice nada más. El guía nunca se entera.',
          pro: { ok: 'Respetas la autoridad de Haydée.', risk: 'Un insulto discriminatorio de un huésped no es solo un tema de housekeeping: el hotel debe responder.' },
          kusi: ['pensando', 'Haydée no debería cargarlo sola.'] } },
    ],
    rules: [[BP, 'El empleador protege a su personal también frente a clientes y terceros: separa a la persona, interviene y registra.']],
    mirada: {
      ve: 'En el turismo del Cusco, muchas trabajadoras son quechuahablantes o aimarahablantes de provincias, y a veces reciben de los huéspedes un trato que nunca le darían a otra persona. Defenderlas no es un gesto: es parte de cuidar al equipo.',
      visual: { tipo: 'flujo', titulo: 'Cuando un huésped maltrata al personal', pasos: ['Separar a la persona', 'Cubrir la tarea', 'Hablar con el huésped o su guía', 'Registrar', 'Acompañar después'] },
    },
  },
  {
    id: 'e6', t: '17:00', ch: 'documento', who: null, titulo: 'El protocolo de días críticos', banner: 'assets/esc/escritorio.webp', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>El grupo ya almorzó. ${F.has('reserva_contratada') ? 'Las dos nuevas terminaron su primer día cansadas pero contentas.' : F.has('efectivo_por_dia') ? 'Las tres chicas de San Blas se fueron con su efectivo y nadie anotó sus apellidos.' : ''}</p><p>En la temporada habrá más días como hoy. <mark class="clave">Lo que hoy improvisaste, mañana tiene que estar escrito</mark>.</p>`,
    type: 'builder', prompt: 'Arma el protocolo para días críticos.', boton: 'Guardar el protocolo',
    bloques: [
      { id: 'reemplazos', t: 'Reemplazos', n: 1, ops: [
        { id: 'r1', t: 'Una lista de reserva de candidatos evaluados por puesto, con teléfono y disponibilidad, actualizada cada semana.', ok: true, por: 'Gente formal, lista para entrar.' },
        { id: 'r2', t: 'Contactos de personas que trabajan por día en efectivo.', ok: false, por: 'Es institucionalizar la informalidad.' },
      ] },
      { id: 'salud', t: 'Salud', n: 1, ops: [
        { id: 's1', t: 'Nadie con fiebre o malestar digestivo trabaja, en especial en cocina o salón. El descanso médico no se descuenta.', ok: true, por: 'Protege a todos.' },
        { id: 's2', t: 'Cada uno decide si viene enfermo.', ok: false, por: 'En temporada, nadie quiere «quedar mal».' },
      ] },
      { id: 'extras', t: 'Horas extra', n: 1, ops: [
        { id: 'e1', t: 'Voluntarias, firmadas antes, con un tope de dos horas por persona en el día.', ok: true, por: 'Límite claro y registro.' },
        { id: 'e2', t: 'Las necesarias hasta terminar.', ok: false, por: 'Sin tope, se repiten las jornadas de 16 horas.' },
      ] },
      { id: 'trato', t: 'Trato de huéspedes', n: 1, ops: [
        { id: 't1', t: 'Ante un insulto o maltrato: separar a la persona, intervenir con el huésped o su guía y registrar.', ok: true, por: 'Lo que hiciste hoy, escrito.' },
        { id: 't2', t: 'El cliente siempre tiene la razón.', ok: false, por: 'No cuando insulta.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -2 : 3 },
        flags: q === 'riesgosa' ? [] : ['protocolo_critico'], cartera: { protocolo: q === 'riesgosa' ? 'Protocolo débil' : 'Protocolo de días críticos en una hoja' },
        out: q === 'buena' ? 'El protocolo cabe en una hoja. Lo pegas al lado del cuadro de turnos y lo mandas al grupo.' : q === 'aceptable' ? 'El protocolo ayuda, aunque una parte deja la puerta abierta a improvisar.' : 'El protocolo repite lo que hoy salió mal.',
        pro: { ok: 'Un protocolo decide de antemano lo que en el día no da tiempo de pensar.', risk: 'Si no se comunica, nadie lo usará el próximo día crítico.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Lo de hoy, escrito para siempre!' : '¿Qué harán el próximo día crítico?'],
      };
    },
    rules: [[BP, 'Un protocolo de días críticos define reemplazos, criterios de salud, límites de horas y trato de huéspedes.']],
    mirada: { ve: 'Los días críticos van a repetirse en toda la temporada. Un protocolo simple convierte lo aprendido hoy en un sistema que no depende de quién esté de turno.' },
  },
  {
    id: 'e7', t: '18:40', ch: 'whatsapp', who: 'veronica', titulo: 'El día más lleno', banner: 'assets/foto2/celebra-brazos.webp', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Bajas a recepción. El grupo ya salió a cenar a la plaza; Milagros y Sonia se ríen detrás del counter. ${F.has('fortunata_protegida') ? 'Fortunata te saluda desde el pasillo con la mano.' : ''}</p><p>Verónica te escribe.</p>`,
    chat: ['Sobrevivimos al 100 %. ¿Qué aprendimos hoy? 🏔️'],
    type: 'choice',
    choices: [
      { id: 'a', label: 'Lo que funcionó, lo que no y una propuesta para el próximo día crítico.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 2 }, rel: { veronica: 1 }, envia: ['veronica', 'Funcionó: el plan temprano y la reserva del instituto. No funcionó: dependemos demasiado de pocas personas. Propuesta: aprobar el protocolo de días críticos y tener siempre 4 candidatos de reserva. Y mañana evalúo a los primeros ingresos de la temporada.'],
          out: 'Verónica responde: «Aprobado. Y mañana veamos lo de los nuevos, el chef tiene dudas con uno». Sales del hotel. En la plaza, el grupo de 40 canta un huaino desafinado.', kusi: ['feliz', '¡Día crítico superado!'] } },
      { id: 'b', label: 'Que fue un día agotador pero que salió.',
        res: { q: 'aceptable', fx: { confianza: 1 }, envia: ['veronica', 'Agotador, pero salió 😅'],
          out: 'Verónica responde con un emoji. Lo aprendido se queda contigo.', kusi: ['pensando', 'Había mucho que contar.'] } },
    ],
    mirada: { ve: 'Después de un día crítico, la generalista no solo descansa: convierte lo aprendido en una decisión para la gerencia.' },
  },
];
