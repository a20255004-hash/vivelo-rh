// Analista de Clima y Cultura · Capítulo 9 · «Comunicar» · Semana 2, jueves.
// Hilo de las dos semanas: la encuesta de clima de AseguraPlus y el área de Siniestros, que saca 42 % de favorabilidad.
// Normas citadas:
// - Ley 27942 y su Reglamento (D.S. 014-2019-MIMP), ya citados en los capítulos 5 y 6: confidencialidad de los hechos y
//   de la identidad de la presunta víctima; el procedimiento no se comenta en espacios del área.
//   https://elperuano.pe/noticia/302759-hostigamiento-sexual-que-deben-hacer-las-empresas-para-prevenir-y-atender-estos-casos-en-el-trabajo
// - Ley 29733 (datos personales), arts. 6 y 7, ya citada en el capítulo 1: en la devolución no se muestran grupos
//   identificables.
//   https://diariooficial.elperuano.pe/Normas/obtenerDocumento?idNorma=23

export const CAP = {
  n: 9, titulo: 'Comunicar', dia: 'Semana 2, jueves', foto: 'assets/foto2/aplausos-verde.webp',
  lugar: 'AseguraPlus · Auditorio del piso 2',
  inicio: '08:20', fin: '19:00', cierreHora: '18:50',
  apertura: 'Jueves. A las cuatro, 120 personas de Siniestros van a bajar al auditorio del piso 2 a escuchar qué se hizo con lo que respondieron. El año pasado esta reunión no existió. Este año la conduces tú, con Gonzalo.', boton: 'Bajar al auditorio',
  kusi: 'Hoy le devuelves al equipo su propia voz. Si lo haces bien, el próximo año vuelven a responder.',
  lead: 'Ordenaste una devolución que empieza por agradecer y termina en compromisos, convocaste sin generar miedo, ayudaste a Gonzalo a abrir reconociendo el resultado, limpiaste las diapositivas y respondiste preguntas difíciles sin cruzar la línea de lo reservado.',
  reflexion: '¿Qué necesita escuchar un equipo para volver a confiar en una encuesta?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'devolucion', p: 'Devolución al área de Siniestros', j: 'Cultura · Gonzalo', d: 0, e: 'Hoy, 4 p. m.' },
  { id: 'plan', p: 'Plan de acción de Siniestros', j: 'Gonzalo', d: 0, e: 'Comité mañana' },
  { id: 'lunes', p: 'Reunión de los lunes', j: 'Gonzalo · supervisores', d: 0, e: 'Cambia el lunes' },
  { id: 'caso', p: 'Caso reservado', j: 'Dra. Villavicencio', d: 0, e: 'En curso' },
];

export const FUTURO = {
  devolucion_ordenada: ['Tu devolución tuvo un orden que el equipo pudo seguir: escuchar, entender, comprometerse.', 'Sofía la quiere replicar en otras áreas.'],
  convocatoria_clara: ['La convocatoria dijo para qué era la reunión y que nadie sería señalado.', 'Llegaron 108 de 120.'],
  gonzalo_reconoce: ['Gonzalo abrió la devolución diciendo «los escuché» y reconociendo el 42 %.', 'El equipo lo notó.'],
  gonzalo_excusa: ['Gonzalo abrió la devolución hablando de lo mucho que se cerró este año.', 'El equipo lo escuchó como una excusa.'],
  diapos_limpias: ['Las diapositivas de la devolución no tenían grupos pequeños ni pistas del caso.', 'Nadie salió sintiéndose señalado.'],
  diapos_riesgo: ['Una diapositiva de la devolución dejó una pista del caso reservado.', 'En el pasillo ya se especula.'],
  preguntas_bien: ['Respondiste las preguntas de la gente sin evadir y sin cruzar lo reservado.', 'La gente se fue con compromisos claros.'],
  represalias_compromiso: ['El gerente se comprometió en público a que no habrá represalias por lo que se dijo.', 'Ahora tiene que cumplirlo.'],
};

export const CHATS = {
  equipo: { n: 'Cultura AseguraPlus', sub: 'Sofía, Renzo y tú', c: '#2F6B3F' },
  sofia: { n: 'Sofía Ledesma', sub: 'Jefa de Cultura', who: 'sofia' },
  gonzalo: { n: 'Gonzalo Ferreyra', sub: 'Gerente de Siniestros', who: 'gerente' },
  lucia: { n: 'Lucía Ramos', sub: 'Analista de Siniestros', who: 'colaboradora' },
  comunicados: { n: 'Siniestros · Comunicados', sub: 'Grupo oficial del área (120)', c: '#1F4E79' },
  renzo: { n: 'Renzo Quispe', sub: 'Practicante de Psicología', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'equipo', t: '08:25', de: 'Sofía', txt: 'Hoy hablas tú. Yo estaré al fondo, por si algo se complica. Respira.' },
  { chat: 'gonzalo', t: '09:30', de: 'Gonzalo', txt: 'Anoche no dormí pensando qué decir hoy. ¿Me ayudas a preparar los primeros dos minutos?', si: 'lunes_cambia' },
  { chat: 'gonzalo', t: '09:30', de: 'Gonzalo', txt: 'Hoy hablo yo primero. Ya sé lo que voy a decir.', no: 'lunes_cambia' },
  { chat: 'lucia', t: '15:40', de: 'Lucía', txt: 'Ya estamos bajando. Traje mi pregunta escrita en un papelito, sin nombre 😅', si: 'convocatoria_clara' },
  { chat: 'lucia', t: '17:30', de: 'Lucía', txt: 'Milagros lloró cuando Gonzalo dijo «los escuché». Yo también un poquito.', si: 'gonzalo_reconoce' },
  { chat: 'renzo', t: '18:00', de: 'Renzo', txt: 'Conté las tarjetas: 41 preguntas. Nunca habían preguntado tanto.' },
];

export const CORREOS = [
  { t: '08:30', de: 'Comunicaciones Internas', para: 'Analista de Clima y Cultura', asunto: 'Diapositivas para la devolución de Siniestros', html: '<p>¡Hola! Les armamos una propuesta de diapositivas con el branding de la empresa para la reunión de hoy. La pueden ajustar. Va con mucha energía positiva 💚</p>' },
  { t: '18:20', de: 'Sofía Ledesma', para: 'Analista de Clima y Cultura', asunto: 'Hoy', html: '<p>Cuarenta y una preguntas en tarjetas. En ocho años, nunca había visto eso. Mañana es tu último día de estas dos semanas: tómate la mañana para cerrar pendientes y a las 4 nos sentamos a ver cómo te fue.</p><p>Sofía</p>' },
];

export const QUIZ = [
  { q: '¿Con qué empieza una buena devolución de resultados?', ops: ['Con el plan de acción', 'Agradeciendo y mostrando lo que dijeron', 'Con el ranking de áreas', 'Con las excusas del gerente'], ok: 1, por: 'Primero se demuestra que se escuchó; después se cuenta qué se hará.' },
  { q: 'En la devolución, el gerente debería…', ops: ['Justificar el resultado', 'Reconocer lo que dijo el equipo y comprometerse con acciones', 'No hablar', 'Pedir que respondan mejor el próximo año'], ok: 1, por: 'El equipo necesita ver que el líder recibió el mensaje.' },
  { q: 'Alguien pregunta en la devolución por qué un supervisor ya no ve a las practicantes. Respondes…', ops: ['Contando el caso', 'Que hay temas de personas que no se tratan en esta reunión, y vuelves al plan', 'Que es un rumor falso', 'Que pregunten al supervisor'], ok: 1, por: 'Lo reservado no se trata en una reunión de área, ni se niega con una mentira.' },
  { q: 'Una devolución debe incluir también…', ops: ['Solo lo bueno', 'Lo que no se puede cambiar ahora y por qué', 'Los nombres de quienes más se quejaron', 'Las metas de ventas'], ok: 1, por: 'Decir qué no se puede cambiar evita falsas expectativas.' },
  { q: '¿Para qué sirve recoger preguntas en tarjetas anónimas?', ops: ['Para saber quién pregunta', 'Para que pregunten quienes no se atreven en voz alta', 'Para ahorrar tiempo', 'Para no responder'], ok: 1, por: 'En un equipo con miedo a hablar, el anonimato de la pregunta abre la conversación.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'm1', t: '08:40', ch: 'documento', who: null, titulo: 'El orden de la devolución', banner: 'assets/esc/carrera.webp', lugar: 'Tu escritorio', show: ['calidad', 'personas'],
    body: (n, F) => `<p>Tienes 45 minutos con 120 personas. ${F.has('plan_final') ? 'El plan está cerrado y Gonzalo lo siente suyo.' : 'El plan tiene puntos débiles, y la gente lo va a notar.'} La devolución no es una presentación del plan: <mark class="clave">es contarles qué hicimos con lo que nos dijeron</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena las partes de la devolución. Usa las flechas.', boton: 'Guardar el orden',
    items: [
      { id: 'grac', t: 'Agradecer: respondió el 81 % y 7 personas fueron al focus group', por: 'Lo primero es reconocer que hablaron.' },
      { id: 'dijeron', t: 'Lo que dijeron: los números y los temas, sin nombres', por: 'Que se reconozcan en lo que escuchan.' },
      { id: 'lider', t: 'Gonzalo: qué escuchó y qué le tocó a él', por: 'El líder recibe el mensaje en público.' },
      { id: 'hara', t: 'Qué se hará: tres acciones con fecha y responsable', por: 'Compromisos concretos.' },
      { id: 'nopuede', t: 'Qué no se puede cambiar ahora y por qué', por: 'Evita falsas expectativas.' },
      { id: 'medir', t: 'Cómo sabremos si funciona: el pulso a las 8 semanas', por: 'Cierra el círculo.' },
      { id: 'preg', t: 'Preguntas en tarjetas anónimas', por: 'Para quienes no se atreven en voz alta.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, personas: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['devolucion_ordenada'], cartera: { devolucion: q === 'riesgosa' ? 'Guion desordenado' : 'Guion de devolución listo' },
        out: q === 'buena' ? 'Sofía lee el guion: «Esto lo vamos a usar en todas las áreas. Lo de “qué no se puede cambiar” nadie lo dice nunca, y es lo que más confianza da».' : 'El guion empieza por el plan o pone a Gonzalo antes que las voces del equipo. Sofía mueve un par de piezas.',
        pro: { ok: 'Agradecer, devolver, comprometerse y decir cómo se medirá es lo que convierte una encuesta en una conversación.', risk: 'Si la devolución empieza por el plan, el equipo siente que se decidió sin ellos.', info: 'Lo que no se puede cambiar (por ejemplo, el sistema nuevo en sí) dicho a tiempo evita decepciones.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una devolución con orden y alma!' : 'Primero sus voces, luego el plan.'],
      };
    },
    mirada: {
      ve: 'La devolución es el paso que más se omite y el que más pesa en la próxima encuesta. Un equipo que escucha «esto dijeron, esto haremos, esto no podemos» aprende que responder sirve.',
      visual: { tipo: 'flujo', titulo: 'La devolución', pasos: ['Gracias', 'Lo que dijeron', 'Lo que escuchó Gonzalo', 'Lo que se hará', 'Lo que no se puede', 'Cómo mediremos', 'Preguntas'] },
    },
  },
  {
    id: 'm2', t: '09:50', ch: 'whatsapp', who: null, titulo: 'La convocatoria', banner: 'assets/foto2/tablet-equipo.webp', show: ['personas', 'confianza'],
    body: () => `<p>Gonzalo te pidió que redactes el mensaje para el grupo oficial del área. Lo leerán 120 personas que hace dos semanas escribían «¿para qué respondemos?». <mark class="clave">Cada palabra cuenta</mark>.</p>`,
    type: 'compose', enviaA: 'comunicados', para: 'Para: Siniestros · Comunicados (120)', boton: 'Enviar al grupo',
    prompt: 'Arma la convocatoria eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Para qué es', ops: [
        { id: 'q1', t: 'Hoy a las 4, en el auditorio del piso 2, les contaremos qué dijeron en la encuesta de clima y qué haremos con eso.', ok: true, por: 'Claro y con lugar y hora.' },
        { id: 'q2', t: 'Hoy a las 4 hay reunión obligatoria por los resultados de clima.', ok: false, por: '«Obligatoria» y «resultados» suenan a regaño.' },
      ] },
      { id: 'tranq', t: 'Qué aclaras', ops: [
        { id: 't1', t: 'No se mostrarán nombres ni respuestas de nadie, y será en horario de trabajo.', ok: true, por: 'Responde las dos dudas de siempre.' },
        { id: 't2', t: 'Esperamos su participación y compromiso.', ok: false, por: 'Frase hueca.' },
      ] },
      { id: 'inv', t: 'Cómo invitas', ops: [
        { id: 'i1', t: 'Habrá tarjetas para que dejen sus preguntas sin nombre.', ok: true, por: 'Abre la puerta a los que no hablan en público.' },
        { id: 'i2', t: 'Quien no pueda asistir, que avise a su supervisor.', ok: null, por: 'Útil, pero devuelve el control al supervisor.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 't1', 'i1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['convocatoria_clara'] : [], cartera: { devolucion: q === 'buena' ? 'Convocatoria enviada: hora, lugar, sin nombres' : 'Convocatoria enviada' },
        out: q === 'buena' ? 'En diez minutos, el mensaje tiene 87 vistos y tres reacciones de pulgar. Alguien responde: «Por fin».' : q === 'aceptable' ? 'El mensaje llega. Algunos preguntan en privado si es obligatorio.' : 'En el grupo nadie reacciona. En los chats privados, sí: «¿Nos van a regañar?».',
        pro: { ok: 'Una convocatoria que dice para qué es, qué no pasará y cómo participar baja el miedo antes de la reunión.', risk: 'Palabras como «obligatoria» o «resultados» confirman el temor de que viene un regaño.', info: 'Las tarjetas anónimas son el puente para quienes escribieron en la encuesta lo que no dirían en voz alta.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡«Por fin»! Esa palabra vale oro.' : 'Cada palabra pesa más de lo que parece.'],
      };
    },
    mirada: {
      ve: 'La convocatoria es la primera parte de la devolución: ahí el equipo decide si baja al auditorio con curiosidad o con miedo.',
      visual: { tipo: 'cambio', titulo: 'Dos convocatorias', pares: [['«Reunión obligatoria por resultados»', '«Les contaremos qué dijeron y qué haremos»'], ['«Esperamos su compromiso»', '«No se mostrarán nombres»'], ['«Avisen a su supervisor»', '«Habrá tarjetas para preguntas sin nombre»']] },
    },
  },
  {
    id: 'm3', t: '11:00', ch: 'presencial', who: 'gerente', titulo: 'Los primeros dos minutos', banner: 'assets/foto/mentora.webp', lugar: 'Oficina de Gonzalo, piso 6', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Gonzalo tiene un borrador escrito a mano. Lo lee en voz alta: «Este año hemos cerrado 18 % más de siniestros, y eso demuestra el compromiso de todos. Los resultados de clima no reflejan ese esfuerzo, pero…». Se detiene. ${F.has('lunes_cambia') ? '«No suena bien, ¿no?»' : '«Así está bien, ¿no?»'}</p><p><mark class="clave">Lo que diga en los primeros dos minutos es lo que el equipo va a recordar</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle empezar por «Los escuché»: reconocer el 42 %, nombrar lo que más le dolió leer, y recién después hablar del esfuerzo del año como algo que también les costó a ellos.',
        res: { q: 'buena', fx: { confianza: 5, personas: 5 }, rel: { gerente: 1 }, flags: ['gonzalo_reconoce'],
          out: 'Gonzalo tacha su primera línea y escribe despacio: «Los escuché». Lo ensaya tres veces. A la tercera, le tiembla un poco la voz. Lo deja así.',
          pro: { ok: 'Un líder que empieza reconociendo, sin excusas, cambia la temperatura de la sala.', risk: 'Puede sentirse expuesto; necesita que lo acompañes.', info: 'Que nombre una cosa concreta («la pantalla de los lunes») vale más que diez frases generales.' },
          kusi: ['celebra', '«Los escuché». Dos palabras que cambian todo.'] } },
      { id: 'b', label: 'Dejar su borrador: es el gerente, es su estilo, y lo importante es el plan.',
        res: { q: 'riesgosa', fx: { confianza: -3, personas: -4 }, flags: ['gonzalo_excusa'],
          out: 'Gonzalo guarda su papel. En la tarde, cuando dice «no reflejan ese esfuerzo», la mitad del auditorio mira el piso.',
          pro: { ok: 'Respetas su voz.', risk: 'Empezar justificando le dice al equipo que el mensaje no llegó.' },
          kusi: ['triste', 'Un «pero» puede borrar todo lo que sigue.'] } },
      { id: 'c', label: 'Ofrecerte a abrir tú la reunión, para que él solo presente el plan.',
        res: { q: 'aceptable', fx: { confianza: 1, personas: 0 }, rel: { gerente: 1 },
          out: 'Gonzalo acepta aliviado. La reunión sale correcta, pero el equipo no escucha nada de él sobre lo que dijeron. Solo el plan.',
          pro: { ok: 'Evitas que diga algo mal.', risk: 'El mensaje más importante, que el líder recibió lo que dijeron, no lo dice el líder.' },
          kusi: ['pensando', 'Hay palabras que solo él puede decir.'] } },
    ],
    rules: [[BP, 'En la devolución, el líder del área reconoce el resultado antes de hablar del plan.']],
    mirada: {
      ve: 'Muchos gerentes empiezan la devolución con sus logros, por miedo a quedar mal. Pero el equipo no necesita un gerente perfecto: necesita uno que diga «los escuché». Ayudarlo a decirlo es parte del trabajo de Cultura.',
      visual: { tipo: 'balanza', a: { t: 'Empezar por los logros', items: ['«18 % más casos»', '«No reflejan el esfuerzo»'] }, b: { t: 'Empezar por escuchar', items: ['«Los escuché»', '«Me dolió leer lo de los lunes»', '«Esto cambia el lunes»'] } },
    },
  },
  {
    id: 'm4', t: '13:30', ch: 'documento', who: null, titulo: 'Las diapositivas de Comunicaciones', banner: 'assets/foto2/presentacion.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Comunicaciones Internas mandó doce diapositivas con mucho verde, fotos de gente sonriendo y la palabra «oportunidad» en letras grandes. Tienen buena intención y poco tiempo. <mark class="clave">Revisa qué no puede proyectarse frente a 120 personas</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que incumple la ley o lo que no debería proyectarse.',
    doc: { t: 'Devolución de clima · Siniestros', sub: 'Propuesta de Comunicaciones Internas · 12 diapositivas' },
    lines: [
      { id: 'portada', t: 'Portada: «¡Siniestros: 42 % de oportunidad para crecer!»', bad: BP, why: 'Maquilla el resultado. El equipo lo leerá como que no se tomó en serio lo que dijo.' },
      { id: 'tasa', t: 'Respondió el 81 % del área. ¡Gracias!' },
      { id: 'sub', t: 'Resultados por subárea: Atención 44 %, Reembolsos 0 % (3 respuestas), Peritaje 47 %.', bad: BP, why: 'Un grupo de 3 personas es identificable. Ya se sumó a Atención en el informe.' },
      { id: 'temas', t: 'Lo que dijeron: exposición de errores, carga del sistema, falta de reconocimiento.' },
      { id: 'caso', t: 'Agradecemos a quienes se atrevieron a denunciar situaciones graves; ya se están tomando medidas.', bad: LEY, why: 'Alude al procedimiento reservado frente a toda el área. Rompe la confidencialidad de los hechos y expone a la víctima y a quien informó (Ley 27942 y su Reglamento).' },
      { id: 'plan', t: 'Tres acciones con responsable, fecha e indicador.' },
      { id: 'foto', t: 'Cierre: foto del desayuno del año pasado con el lema «¡Seguimos juntos!».', bad: BP, why: 'Recuerda justo lo que el equipo vivió como «no pasó nada».' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? `Corriges ${hitsBp} diapositivas, pero la frase de «quienes se atrevieron a denunciar» se queda. En el auditorio, varias cabezas girarán hacia el mismo lado.` : 'Dejas seis diapositivas, sobrias, en blanco y verde. Comunicaciones responde: «Ah, ok. No sabíamos lo del caso». No tenían por qué saberlo: por eso revisas tú.',
      flags: [missLey ? 'diapos_riesgo' : 'diapos_limpias'],
      cartera: { devolucion: missLey ? 'Diapositivas con una alusión al caso' : 'Seis diapositivas sobrias y limpias' },
      pro: { ok: 'La devolución muestra lo que dijo el área y lo que se hará; nada que identifique a nadie ni aluda a un procedimiento reservado.', risk: 'Una frase bienintencionada sobre «denuncias» frente a 120 personas desata la búsqueda de quién fue.', info: 'Las diapositivas sobrias comunican seriedad; el verde con fotos sonrientes, campaña.' },
      kusi: missLey ? ['preocupado', 'Esa frase iba a señalar a alguien…'] : ['celebra', 'Seis diapositivas que respetan a todos.'],
    }),
    rules: [[LEY, 'Ley 27942 y su Reglamento: confidencialidad de los hechos y de la identidad de la presunta víctima.'], [LEY, 'Ley 29733, art. 7: no se muestran datos que permitan identificar a personas.'], [BP, 'No se maquilla un resultado malo con palabras como «oportunidad».']],
    mirada: {
      ve: 'Las áreas de comunicación saben hacer campañas; una devolución de clima no es una campaña. Quien conoce el proceso completo es quien puede ver que una frase amable como «gracias a quienes denunciaron» es, en realidad, una pista.',
      visual: { tipo: 'cambio', titulo: 'De la campaña a la devolución', pares: [['«42 % de oportunidad»', '«42 %: esto nos dijeron»'], ['Reembolsos con 3 respuestas', 'Atención y Reembolsos juntos'], ['«Gracias a quienes denunciaron»', 'Fuera']] },
    },
  },
  {
    id: 'm5', t: '16:35', ch: 'presencial', who: null, titulo: 'Las tarjetas', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Auditorio del piso 2', show: ['personas', 'confianza', 'calidad'],
    body: (n, F) => `<p>${F.has('gonzalo_reconoce') ? 'Gonzalo abrió con «los escuché», y el auditorio hizo un silencio distinto, de esos que escuchan.' : 'Gonzalo abrió hablando de los logros del año. El auditorio escuchó con los brazos cruzados.'} Ahora Renzo te trae una caja de zapatos llena de tarjetas. Quedan quince minutos. <mark class="clave">Puedes responder tres en voz alta</mark>; el resto se responderá por escrito la próxima semana.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres tarjetas que responderás en público.', boton: 'Leer estas tarjetas', resumen: 'Respondiste',
    cols: ['Tarjeta', 'Lo que sabes'],
    rows: [
      { id: 'repres', cells: ['«¿Habrá represalias contra los que hablaron?»', 'Está en la mente de todos'] },
      { id: 'lunes', cells: ['«¿Desde cuándo cambia la reunión de los lunes?»', 'Desde este lunes: es la acción 1'] },
      { id: 'medir', cells: ['«¿Cómo vamos a saber si esto funciona?»', 'Pulso de cuatro preguntas a las 8 semanas'] },
      { id: 'hernan', cells: ['«¿Por qué Hernán ya no ve a las practicantes?»', 'Es parte del procedimiento reservado'] },
      { id: 'sueldo', cells: ['«¿Y el aumento para cuándo?»', 'El sueldo no salió como problema del área'] },
      { id: 'sistema', cells: ['«¿El sistema ya no se va a colgar a las 5?»', 'TI movió el proceso a las 8 p. m.'] },
    ],
    score: { repres: 3, lunes: 2, medir: 2, sistema: 2, sueldo: 0, hernan: -4 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: picks.includes('repres') ? 4 : 0, etica: picks.includes('hernan') ? -5 : 1 },
        flags: [...(picks.includes('repres') ? ['represalias_compromiso'] : []), ...(q === 'buena' ? ['preguntas_bien'] : [])],
        out: q === 'buena' ? `Lees la tarjeta de las represalias en voz alta y le pasas el micro a Gonzalo. Él dice: «No habrá ninguna. Y si alguien la siente, tiene a Cultura y a la Dra. Villavicencio». Alguien aplaude, solo, al fondo. Luego otros.` : picks.includes('hernan') ? 'Lees la tarjeta sobre Hernán y te das cuenta tarde: ya está en el aire. Tienes que decir «de temas de personas no hablamos aquí», pero 108 personas ya escucharon la pregunta.' : 'Respondes preguntas útiles, pero la que más pesaba se queda en la caja.',
        pro: { ok: 'Responder en público la pregunta que más miedo da, con un compromiso del líder, es lo que más confianza genera.', risk: 'Leer en voz alta una pregunta sobre un caso reservado lo convierte en tema del auditorio.', info: 'Las preguntas que no se respondan hoy deben responderse por escrito, a todos, con fecha.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Ese aplauso al fondo era para todos!' : 'Algunas tarjetas no se leen en voz alta.'],
      };
    },
    rules: [[BP, 'Las preguntas sobre personas o casos reservados no se leen en público.']],
    mirada: {
      ve: 'En un equipo con miedo, la pregunta sobre represalias es la que define si la devolución sirvió. Que el gerente se comprometa en público es mucho más fuerte que cualquier política escrita.',
      visual: { tipo: 'embudo', titulo: 'Las tarjetas', niveles: [['Tarjetas recibidas', 41], ['Responden temas del plan', 30], ['Respondidas hoy en voz alta', 3]] },
    },
  },
  {
    id: 'm6', t: '17:05', ch: 'presencial', who: 'colaboradora', titulo: 'A la salida', banner: 'assets/foto2/caminan.webp', lugar: 'Puerta del auditorio', show: ['personas', 'etica'],
    body: (n, F) => `<p>La gente sale en grupos, conversando. Lucía se acerca con Milagros. ${F.has('represalias_compromiso') ? 'Milagros dice: «Lo de las represalias, ¿lo dijo en serio?».' : 'Milagros pregunta: «¿Y lo de las represalias? Nadie lo respondió».'} Lucía baja la voz: «<mark class="clave">Y Daniela, ¿va a volver al área?</mark>».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'A Milagros, confirmarle el compromiso y cómo reportar si siente alguna represalia. A Lucía, decirle con suavidad que de eso no puedes hablar, y que si quiere, la responsable del canal la puede escuchar.',
        res: { q: 'buena', fx: { personas: 3, etica: 4 }, rel: { colaboradora: 1 },
          out: 'Milagros asiente y se va. Lucía se queda un segundo más: «Ya sé que no me puede decir. Igual tenía que preguntar». Te da un abrazo rápido, de esos que no se dan en la oficina.',
          pro: { ok: 'Respondes lo que es del clima y cuidas lo que es del procedimiento, aunque te pregunte alguien de confianza.', info: 'Que Lucía pregunte delante de Milagros es una pista: el tema ya se comenta. Avísale a la Dra. Villavicencio.' },
          kusi: ['feliz', 'Cariño y reserva a la vez. ¡Qué divino!'] } },
      { id: 'b', label: 'Decirle a Lucía, en voz baja, que «Daniela está bien y que todo va por buen camino».',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3 },
          out: 'Milagros escucha. A la mañana siguiente, en el grupo de amigas del área, alguien escribe: «Parece que lo de Daniela va en serio».',
          pro: { ok: 'Quieres tranquilizar a Lucía.', risk: 'Delante de otra persona, cualquier dato del caso se vuelve rumor.' },
          kusi: ['preocupado', 'Milagros escuchó todo…'] } },
    ],
    rules: [[LEY, 'Ley 27942 y su Reglamento: confidencialidad de los hechos del procedimiento.']],
    mirada: { ve: 'Las conversaciones más delicadas no ocurren en el auditorio, sino a la salida, en la puerta. La reserva no tiene horario: se cuida igual con una persona de confianza que delante de cien.' },
  },
  {
    id: 'm7', t: '18:30', ch: 'correo', who: null, titulo: 'Las 38 tarjetas que quedan', banner: 'assets/esc/logro.webp', show: ['confianza', 'calidad'],
    mail: { from: 'Sofía Ledesma', to: 'Analista de Clima y Cultura', asunto: 'Las tarjetas que quedaron' },
    body: () => `<p>Quedaron 38 tarjetas sin responder. ¿Qué propones hacer con ellas? <mark class="clave">La gente va a mirar qué pasa con su pregunta</mark>.</p><p>Sofía</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Agruparlas por tema, responderlas por escrito a toda el área antes del miércoles, y derivar en reserva las que tocan temas de personas.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3 }, rel: { sofia: 1 },
          responde: 'Sofía: propongo agrupar las 38 tarjetas por tema (casi todas son del plan, del sistema y del pulso), responderlas por escrito a toda el área antes del miércoles y derivar en reserva las tres que mencionan a personas. Así nadie siente que su pregunta se perdió en una caja.',
          out: 'Sofía responde: «Hecho. Y mañana a las 4 hablamos de ti. Prepárate, porque te voy a preguntar algo».', kusi: ['celebra', 'Ninguna pregunta se queda en la caja.'] } },
      { id: 'b', label: 'Guardarlas para el próximo año, para mejorar la encuesta.',
        res: { q: 'riesgosa', fx: { confianza: -4 },
          responde: 'Sofía: las guardaría como insumo para la encuesta del próximo año.',
          out: 'Sofía responde: «Si no las respondemos, en un año van a escribir “¿para qué preguntamos?”. Pensémoslo mañana».', kusi: ['triste', 'Preguntar y no recibir respuesta duele.'] } },
    ],
    mirada: { ve: 'Las preguntas sin respuesta son el último examen de una devolución. Responderlas por escrito, a todos y con fecha, cierra el círculo que empezó con la encuesta.' },
  },
];
