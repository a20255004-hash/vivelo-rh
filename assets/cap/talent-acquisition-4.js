// Talent Acquisition Partner · Capítulo 4 · «La prueba técnica» · Semana 1, jueves.
// Hilo de las dos semanas: 12 ofertas de desarrolladores para el proyecto Cóndor Pay en Código Andino (Lima).
// Normas citadas:
// - Ley 29973, Ley General de la Persona con Discapacidad, art. 50 (modificado por el D. Leg. 1417): la persona con
//   discapacidad tiene derecho a ajustes razonables en el proceso de selección; los empleadores públicos y privados
//   deben realizarlos, salvo que demuestren una carga desproporcionada. Reglamento, art. 52 (modificado por el
//   D.S. 013-2019-MIMP): los ajustes se aplican a todos los procesos de selección, sin importar el régimen.
//   https://lpderecho.pe/modifican-reglamento-de-la-ley-29973-ley-general-de-la-persona-con-discapacidad/
//   https://img.lpderecho.pe/wp-content/uploads/2016/07/Descarga-en-PDF-la-norma-técnica-para-el-diseño-implementación-y-ejecución-de-los-ajustes-razonables-para-el-empleo-con-discapacidad-en-el-sector-privado.pdf
// - Ley 29733 (datos personales), ya citada en el capítulo 3: la información de salud del candidato se trata con reserva.

export const CAP = {
  n: 4, titulo: 'La prueba técnica', dia: 'Semana 1, jueves', foto: 'assets/esc/reloj.webp',
  lugar: 'Código Andino · Piso 9, San Isidro',
  inicio: '08:45', fin: '21:30', cierreHora: '21:15',
  apertura: 'Jueves. Renzo llega a las 8:55 con una laptop y una cara de «te lo advertí». En la pantalla, un número: de 25 personas que empezaron la prueba técnica de backend en los últimos seis meses, la terminaron 3.', boton: 'Sentarte con Renzo',
  kusi: 'Evaluar con justicia no es hacerlo fácil. Es medir lo que importa, igual para todos.',
  lead: 'Revisaste la prueba de 8 horas con Renzo, la convertiste en algo que mide lo que importa, aseguraste un ajuste razonable, armaste una rúbrica y fuiste al meetup de backend.',
  reflexion: '¿Qué mide de verdad una prueba que solo puede terminar quien tiene todo un sábado libre?',
  siguiente: { n: 5, titulo: 'La contraoferta', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'vacantes', p: '12 desarrolladores · Cóndor Pay', j: 'Valeria · Talent', d: 0, e: '0 de 12 ofertas' },
  { id: 'prueba', p: 'Prueba técnica de backend', j: 'Renzo · Talent', d: 0, e: '8 horas · 3 de 25 la terminan' },
  { id: 'ajustes', p: 'Ajustes razonables', j: 'Talent', d: 0, e: 'Una solicitud' },
  { id: 'rubrica', p: 'Rúbrica de evaluación', j: 'Renzo · Talent', d: 0, e: 'No existe' },
  { id: 'pipeline', p: 'Pipeline en el ATS', j: 'Talent', d: 0, e: '11 en proceso' },
];

export const FUTURO = {
  prueba_justa: ['La prueba técnica dura 3 horas, mide lo que el trabajo pide y da retroalimentación.', 'Los candidatos la terminarán. Capítulo 6.'],
  prueba_eterna: ['La prueba técnica sigue siendo de 8 horas.', 'Seguirás perdiendo candidatos senior.'],
  trabajo_gratis: ['La prueba ya no pide construir un módulo que se usará en producción.', 'Renzo lo agradeció.'],
  ajuste_hecho: ['Martín Ccori tendrá su ajuste razonable: más tiempo y una plataforma compatible con su magnificador.', 'Hará la prueba el lunes.'],
  ajuste_negado: ['Le negaste el ajuste razonable a Martín Ccori.', 'Martín no se quedará callado.'],
  rubrica_clara: ['Tienes una rúbrica con criterios y puntajes antes de corregir.', 'Dos evaluadores la usarán por separado.'],
  rubrica_sesgada: ['La rúbrica premia velocidad y parecido al equipo.', 'El lunes los finalistas se parecerán mucho entre sí.'],
  meetup_aporte: ['En el meetup hablaste de un problema técnico y no de vacantes.', 'Te escribirán dos desarrolladoras. Capítulo 6.'],
  meetup_aviso: ['En el meetup leíste el aviso de empleo.', 'La comunidad no te volverá a dar la palabra tan fácil.'],
};

export const CHATS = {
  talent: { n: 'Talent · Código Andino', sub: 'Valeria, Rocío y tú', c: '#2F6B3F' },
  valeria: { n: 'Valeria Núñez', sub: 'Head of Talent', who: 'valeria-ta' },
  leonardo: { n: 'Leonardo Vega', sub: 'CTO', who: 'cto' },
  camila: { n: 'Camila Torres', sub: 'Backend · candidata', who: 'dev' },
  renzo: { n: 'Renzo Huanca', sub: 'Tech Lead Backend', c: '#0F2A3D' },
  diego: { n: 'Diego Mamani', sub: 'Backend senior · candidato', c: '#6B3FA0' },
  martin: { n: 'Martín Ccori', sub: 'Backend · candidato', c: '#2E7D6B' },
};

export const WSP = [
  { chat: 'diego', t: '08:30', de: 'Diego', txt: 'Buenos días. Antes de hacer la prueba quiero saber cuánto dura. La otra empresa me pidió una de 1 hora.', si: 'diego_interesado' },
  { chat: 'leonardo', t: '11:15', de: 'Leonardo', txt: 'Me dijo Renzo que quieren acortar la prueba. Si baja la calidad, me lo cobro con ustedes.' },
  { chat: 'talent', t: '12:45', de: 'Rocío', txt: 'Mañana a las 10 les paso la banda nueva de backend. Agárrense 😅' },
  { chat: 'martin', t: '13:40', de: 'Martín', txt: 'Muchas gracias. Es la primera vez que una empresa me responde eso sin que tenga que insistir.', si: 'ajuste_hecho' },
  { chat: 'camila', t: '17:20', de: 'Camila', txt: 'Perfecto, la hago el sábado en la mañana. Gracias por explicarme qué van a mirar 🙌' },
  { chat: 'renzo', t: '21:20', de: 'Renzo', txt: 'Buena charla. Nadie de RR.HH. había subido a ese escenario sin leer un aviso 😂', si: 'meetup_aporte' },
];

export const CORREOS = [
  { t: '11:50', de: 'Martín Ccori', para: 'Talent · Código Andino', asunto: 'Consulta sobre la prueba técnica', html: '<p>Buenos días. Gracias por la invitación a la prueba. Les cuento que tengo baja visión y uso un magnificador de pantalla. Para hacer la prueba en igualdad de condiciones, necesitaría que la plataforma funcione con el magnificador y algo más de tiempo, porque leer código ampliado me toma más. ¿Es posible?</p><p>Saludos,<br>Martín Ccori</p>' },
  { t: '18:00', de: 'Comunidad Backend Lima', para: 'Talent Acquisition Partner', asunto: 'Tu charla de hoy: 7:45 p. m.', html: '<p>Te toca después de la charla sobre bases de datos. Recuerda: cinco minutos, un problema técnico real, nada de avisos. La mesa de empleos está al fondo.</p>', si: 'fuentes_comunidad' },
];

export const QUIZ = [
  { q: 'Una prueba técnica de 8 horas que casi nadie termina…', ops: ['Filtra a los mejores', 'Filtra a quien tiene más tiempo libre, no necesariamente a quien programa mejor', 'Es la norma en la industria', 'Garantiza calidad'], ok: 1, por: 'Una prueba demasiado larga mide disponibilidad, y los senior con trabajo son los primeros en abandonarla.' },
  { q: 'Un candidato con baja visión pide más tiempo para la prueba. Según la Ley 29973…', ops: ['Es un favor que la empresa decide', 'Tiene derecho a ajustes razonables en el proceso de selección, salvo carga desproporcionada', 'Solo aplica al sector público', 'Debe hacer la prueba como todos'], ok: 1, por: 'El art. 50 de la Ley 29973 reconoce ajustes razonables en la selección, también para empleadores privados.' },
  { q: 'Una rúbrica de evaluación se define…', ops: ['Después de corregir, según lo que salió', 'Antes de corregir, con criterios y puntajes claros', 'Solo si el CTO lo pide', 'Nunca: cada evaluador decide'], ok: 1, por: 'Definirla antes evita ajustar los criterios al candidato que nos cae mejor.' },
  { q: '¿Qué NO debería pedir una prueba técnica?', ops: ['Resolver un problema parecido al trabajo real', 'Explicar sus decisiones', 'Construir un módulo que la empresa usará en producción', 'Escribir pruebas del código'], ok: 2, por: 'Eso es trabajo sin pagar, no una evaluación.' },
  { q: 'En una comunidad técnica, la mejor forma de atraer talento es…', ops: ['Leer el aviso de empleo en cada charla', 'Aportar algo útil y estar disponible después', 'Repartir volantes', 'Pedir todos los correos de los asistentes'], ok: 1, por: 'En las comunidades se gana la palabra aportando.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'd1', t: '09:00', ch: 'documento', who: null, titulo: 'La prueba de Renzo', banner: 'assets/foto/revisa.webp', lugar: 'Sala Misti · piso 9', show: ['calidad', 'etica', 'tiempo'],
    body: (n, F) => `<p>Renzo proyecta el enunciado. ${F.has('renzo_aliado') ? '«Ya, revisémosla juntos. Yo la escribí hace dos años, cuando éramos 30.»' : 'Está a la defensiva: «La hice yo y funciona. Los que la terminan son buenos».'}</p><p>Lo lees en voz alta. <mark class="clave">Hay partes que no miden lo que dicen medir</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que es injusto o lo que conviene corregir en la prueba.',
    doc: { t: 'Prueba técnica · Backend Senior', sub: 'Código Andino · versión 2024' },
    lines: [
      { id: 'tiempo', t: 'Duración estimada: 8 horas. Entrega en 48 horas.', bad: BP, why: 'Pide un sábado completo a gente que ya trabaja. Los mejores, que tienen otras ofertas, la abandonan.' },
      { id: 'prod', t: 'Construye el módulo de conciliación de pagos que usaremos en el proyecto del cliente.', bad: BP, why: 'Es trabajo real sin pagar. Además, el candidato lo nota.' },
      { id: 'api', t: 'Diseña una API para registrar pagos y consultar su estado.' },
      { id: 'internet', t: 'No se permite consultar internet ni documentación.', bad: BP, why: 'Nadie trabaja así. Mide memoria, no criterio.' },
      { id: 'tests', t: 'Incluye pruebas automatizadas de tu código.' },
      { id: 'decisiones', t: 'Explica en un archivo corto por qué tomaste tus decisiones de diseño.' },
      { id: 'sinfeedback', t: 'No se dará retroalimentación sobre la prueba.', bad: BP, why: 'Después de varias horas de trabajo, un candidato merece saber cómo le fue.' },
    ],
    res: ({ missLey, hitsBp, falsos }) => {
      const q = hitsBp >= 3 && !falsos ? 'buena' : hitsBp >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, etica: hitsBp >= 2 ? 2 : -1 },
        flags: hitsBp >= 2 ? ['trabajo_gratis'] : [], cartera: { prueba: q === 'riesgosa' ? 'Sin cambios' : 'Problemas identificados con Renzo' },
        out: q === 'buena' ? 'Renzo se rasca la cabeza. «Lo del módulo de conciliación… sí, lo puse porque nos faltaba gente para hacerlo. Qué roche.» Lo tacha él mismo.' : q === 'aceptable' ? 'Encuentras algunos problemas. Renzo defiende los otros.' : 'Te quedas con la sensación de que algo está mal, pero no sabes qué decir. Renzo cierra la laptop.',
        pro: { ok: 'Revisar una prueba con su autor la mejora sin humillarlo.', risk: 'Una prueba que pide trabajo de producción o no da retroalimentación daña la marca de la empresa en la comunidad.', info: 'Pregunta a los 22 que no la terminaron por qué la dejaron.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Renzo la tachó solito!' : '¿Qué mide cada parte?'],
      };
    },
    rules: [[BP, 'Una prueba técnica mide cómo resuelve la persona un problema parecido al trabajo, en un tiempo razonable, y da retroalimentación.']],
    mirada: {
      ve: 'La prueba técnica es la parte del proceso que más tiempo le cuesta al candidato. Si es eterna, pide trabajo real o no da retroalimentación, el mercado lo sabe en una semana: los desarrolladores se cuentan todo.',
      visual: { tipo: 'embudo', titulo: 'La prueba de 8 horas', niveles: [['La recibieron', 25], ['La empezaron', 19], ['La terminaron', 3]] },
    },
  },
  {
    id: 'd2', t: '10:20', ch: 'documento', who: null, titulo: 'La prueba nueva', banner: 'assets/esc/idea.webp', show: ['calidad', 'tiempo', 'confianza'],
    body: () => `<p>Renzo acepta rediseñarla, pero pone una condición: <mark class="clave">«Que siga siendo difícil. No quiero contratar a alguien que no sepa»</mark>. Leonardo, por WhatsApp, piensa igual.</p><p>Arman la nueva versión en la pizarra.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la prueba nueva.', boton: 'Guardar la prueba',
    bloques: [
      { id: 'formato', t: 'Formato', n: 2, ops: [
        { id: 'f1', t: 'Un problema acotado, parecido al trabajo real, para resolver en unas 3 horas.', ok: true, por: 'Exigente pero posible.' },
        { id: 'f2', t: 'Con acceso a documentación, como en el trabajo de verdad.', ok: true },
        { id: 'f3', t: 'Que se haga en vivo, con Leonardo mirando la pantalla.', ok: false, por: 'Mide nervios, no criterio.' },
      ] },
      { id: 'despues', t: 'Después de la entrega', n: 2, ops: [
        { id: 'd1', t: 'Una conversación de 30 minutos donde el candidato explica su solución.', ok: true, por: 'Ahí se ve quién entiende lo que hizo.' },
        { id: 'd2', t: 'Retroalimentación escrita a todos los que la entreguen.', ok: true },
        { id: 'd3', t: 'Guardar el código del candidato para usarlo en un proyecto.', ok: false, por: 'Es su trabajo, no el tuyo.' },
      ] },
      { id: 'tiempos', t: 'Tiempos', n: 1, ops: [
        { id: 't1', t: 'Plazo de entrega de 5 días, para que cada uno elija cuándo hacerla.', ok: true, por: 'Respeta a quien trabaja o cuida a alguien.' },
        { id: 't2', t: 'Entrega en 24 horas para ver quién tiene más ganas.', ok: false, por: 'Premia a quien tiene más tiempo libre.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: q === 'buena' ? 3 : 0, confianza: q === 'buena' ? 2 : 0 },
        flags: [q === 'riesgosa' ? 'prueba_eterna' : 'prueba_justa'], cartera: { prueba: q === 'riesgosa' ? 'Sigue larga y sin retroalimentación' : 'Prueba de 3 horas, con conversación y retroalimentación' },
        envia: q === 'riesgosa' ? undefined : ['diego', 'Diego, la prueba toma unas 3 horas y tienes 5 días para hacerla cuando te acomode. Después conversamos 30 minutos sobre tu solución y te damos retroalimentación por escrito.'],
        out: q === 'buena' ? 'Renzo la prueba él mismo en el almuerzo: 2 horas y 40 minutos. «Está difícil, pero se puede.» Leonardo la aprueba con un «ok, a ver».' : q === 'aceptable' ? 'La prueba mejora, aunque algo queda cojo. Renzo dice que la ajustarán con los primeros resultados.' : 'La prueba nueva se parece demasiado a la vieja.',
        pro: { ok: 'Difícil y justa no son opuestos: la valla queda alta y el formato es razonable.', risk: 'Una prueba en vivo con el jefe mirando castiga a los nerviosos, no a los que no saben.', info: 'Mide en un mes cuántos la terminan con el formato nuevo.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Difícil y justa! Qué divino.' : 'Algo sigue sin medir lo que importa.'],
      };
    },
    mirada: {
      ve: 'Una buena prueba técnica tiene tres rasgos: se parece al trabajo, cabe en un tiempo razonable y termina en una conversación. La conversación es clave: ahí se ve si la persona entiende lo que hizo y cómo explica sus decisiones a un equipo.',
      visual: { tipo: 'cambio', titulo: 'La prueba, antes y después', pares: [['8 horas', 'Unas 3 horas'], ['Módulo para producción', 'Problema acotado parecido al trabajo'], ['Sin internet', 'Con documentación'], ['Sin retroalimentación', 'Conversación y retroalimentación escrita']] },
    },
  },
  {
    id: 'd3', t: '12:10', ch: 'correo', who: null, titulo: 'El correo de Martín', banner: 'assets/foto/mesa-papeles.webp', show: ['cumplimiento', 'etica', 'personas'],
    mail: { from: 'Martín Ccori', to: 'Talent · Código Andino', asunto: 'Consulta sobre la prueba técnica' },
    body: () => `<p>Martín Ccori, backend con seis años de experiencia, tiene baja visión y usa un magnificador. Pide que la plataforma de la prueba funcione con su herramienta y algo más de tiempo.</p><p>Le reenvías el correo a Leonardo. Responde en dos minutos: <mark class="clave">«Si necesita más tiempo, ¿va a rendir igual en el trabajo? Que la haga como todos»</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Darle el ajuste: plataforma compatible y tiempo adicional. Y explicarle a Leonardo que la prueba mide cómo resuelve, no qué tan rápido lee.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 5, confianza: -1 }, rel: { cto: -1 }, flags: ['ajuste_hecho'], cartera: { ajustes: 'Martín: plataforma compatible y tiempo adicional' },
          responde: 'Martín: claro que sí. Vamos a usar una plataforma compatible con tu magnificador y tendrás tiempo adicional. ¿Te parece si coordinamos una prueba de la herramienta el lunes antes de empezar? Esta información la manejaremos con reserva.',
          out: 'Leonardo responde: «Ok. Pero si no es bueno, no entra». Le contestas que eso aplica a todos. Martín te escribe a la media hora.',
          pro: { ok: 'Cumples la ley y evalúas a Martín por lo que sabe hacer.', risk: 'Leonardo puede ver el ajuste como un privilegio si no le explicas para qué sirve.', info: 'Comparte el dato de su discapacidad solo con quien necesita saberlo para hacer el ajuste.' },
          kusi: ['celebra', 'Igualdad de condiciones, no trato igual. ¡Así!'] } },
      { id: 'b', label: 'Responderle que lo evaluarán después de las entrevistas de los demás, cuando haya más tiempo para preparar algo especial.',
        res: { q: 'aceptable', fx: { cumplimiento: -1, etica: -1, tiempo: 1 },
          out: 'Martín responde con cortesía, pero la siguiente semana ya habrá ofertas firmadas. Llega tarde a un proceso en el que no tuvo culpa de nada.',
          pro: { ok: 'No niegas el ajuste.', risk: 'Postergar a alguien por pedir un ajuste lo pone en desventaja: el ajuste debe estar listo a tiempo.' },
          kusi: ['pensando', 'Postergar también es una forma de dejar afuera.'] } },
      { id: 'c', label: 'Hacerle caso a Leonardo: es el hiring manager y la prueba tiene que ser igual para todos.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -5 }, rel: { cto: 1 }, flags: ['ajuste_negado'],
          responde: 'Martín: lamentablemente la prueba debe realizarse en las mismas condiciones para todos los postulantes.',
          out: 'Martín responde con una sola línea: «Entiendo. Les recuerdo que la Ley 29973 reconoce ajustes razonables en los procesos de selección». Copia a la dirección general de talento.',
          pro: { ok: 'Leonardo queda tranquilo.', risk: 'Negar un ajuste razonable en un proceso de selección va contra la Ley 29973.' },
          kusi: ['indignado', 'Igual para todos no siempre es justo para todos.'] } },
    ],
    rules: [[LEY, 'La persona con discapacidad tiene derecho a ajustes razonables en el proceso de selección; el empleador privado debe realizarlos, salvo carga desproporcionada (Ley 29973, art. 50).'], [LEY, 'Los ajustes se aplican a todos los procesos de selección, sin importar el régimen (Reglamento de la Ley 29973, art. 52).']],
    mirada: {
      ve: 'Un ajuste razonable no es una ventaja: es lo que permite que la prueba mida lo mismo en todos. Si la prueba mide criterio técnico, el tiempo para leer código ampliado no es parte de lo que se evalúa. Y debe estar listo a tiempo, no al final del proceso.',
      visual: { tipo: 'balanza', a: { t: '«Que la haga como todos»', items: ['Mide su velocidad de lectura', 'Lo deja fuera antes de empezar', 'Va contra la ley'] }, b: { t: 'Con ajuste razonable', items: ['Mide su criterio técnico', 'Compite en igualdad', 'Costo: una plataforma y más tiempo'] } },
      normas: [{ ley: 'Ley 29973, Ley General de la Persona con Discapacidad, art. 50 · Reglamento, art. 52', dice: 'La persona con discapacidad tiene derecho a ajustes razonables en el proceso de selección y en el lugar de trabajo. Los empleadores públicos y privados deben realizarlos, salvo que demuestren una carga desproporcionada.', practica: 'Plataforma compatible con el magnificador y tiempo adicional, listos antes de la prueba.' }],
    },
  },
  {
    id: 'd4', t: '14:40', ch: 'documento', who: null, titulo: 'La rúbrica', banner: 'assets/3d/scenes/balanza.webp', lugar: 'Sala Misti · piso 9', show: ['calidad', 'etica'],
    body: (n, F) => `<p>Antes de que llegue la primera entrega, Renzo y tú arman la rúbrica: qué se mira y cuánto vale. ${F.has('titulo_obligatorio') ? 'Renzo comenta, medio en broma: «Al menos aquí no piden título».' : 'Renzo propone que la usen dos personas por separado y luego comparen.'}</p><p>Hay muchas cosas que se podrían mirar. <mark class="clave">Solo tres pesan de verdad</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres criterios principales de la rúbrica.', boton: 'Guardar la rúbrica', resumen: 'Elegiste',
    cols: ['Criterio', 'Lo que mide'],
    rows: [
      { id: 'funciona', cells: ['La solución funciona y maneja los errores', 'Si el pago falla, no se pierde plata'] },
      { id: 'pruebas', cells: ['Hay pruebas automatizadas útiles', 'Cómo trabaja en equipo con código ajeno'] },
      { id: 'explica', cells: ['Explica sus decisiones en la conversación', 'Criterio y comunicación'] },
      { id: 'rapido', cells: ['Entregó en menos de 24 horas', 'Cuánto tiempo libre tiene'] },
      { id: 'estilo', cells: ['Escribe el código «como lo haríamos nosotros»', 'Qué tanto se parece al equipo actual'] },
      { id: 'hora', cells: ['Mandó la entrega de madrugada', 'Nada que importe'] },
    ],
    score: { funciona: 3, pruebas: 3, explica: 3, rapido: -2, estilo: -2, hora: -3 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: q === 'riesgosa' ? -3 : 2 },
        flags: [q === 'riesgosa' ? 'rubrica_sesgada' : 'rubrica_clara'], cartera: { rubrica: q === 'riesgosa' ? 'Premia velocidad y parecido al equipo' : 'Tres criterios, dos evaluadores por separado' },
        out: q === 'buena' ? 'Renzo escribe los tres criterios con plumón y un puntaje del 1 al 4 para cada uno. «Así, si a mí me cae bien alguien, igual tengo que justificar el número.»' : q === 'aceptable' ? 'La rúbrica tiene buenos criterios, pero se coló uno que no mide lo que importa.' : 'La rúbrica premia a quien entrega rápido y escribe igual que el equipo. Los finalistas se van a parecer mucho entre sí.',
        pro: { ok: 'Criterios definidos antes de corregir protegen contra el «me cayó bien».', risk: 'Premiar el parecido con el equipo actual es una forma silenciosa de que nada cambie.', info: 'Que dos personas califiquen por separado y luego comparen.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Rúbrica antes de corregir!' : '¿Eso mide el trabajo o a la persona?'],
      };
    },
    mirada: {
      ve: 'Una rúbrica convierte una impresión en un criterio. Definirla antes de ver las entregas, con pocos criterios ligados al trabajo, y usarla con dos evaluadores independientes es una de las formas más eficaces de reducir sesgos en una evaluación técnica.',
      visual: { tipo: 'matriz', x: 'Relación con el trabajo', y: 'Facilidad para medirlo', cuadrantes: ['Úsalo', 'Úsalo con cuidado', 'Descártalo', 'Ruido'], items: [['Funciona', .9, .8], ['Pruebas', .8, .75], ['Explica', .85, .55], ['Rapidez', .2, .9], ['Parecido al equipo', .15, .5], ['Hora de envío', .05, .95]] },
    },
  },
  {
    id: 'd5', t: '16:30', ch: 'whatsapp', who: 'dev', titulo: 'Camila pregunta', banner: 'assets/foto2/celebra-tablet.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Camila te escribe: «¿Qué van a mirar en la prueba? En mi última postulación me rechazaron sin decirme nada y nunca supe por qué». ${F.has('camila_honestidad') ? 'Desde lo del miércoles, te habla con confianza.' : 'Todavía te habla con cierta distancia.'}</p><p>Le respondes con lo que <mark class="clave">cualquier candidato debería saber antes de empezar</mark>.</p>`,
    type: 'compose', enviaA: 'camila', para: 'Para: Camila Torres · candidata', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué van a mirar', ops: [
        { id: 'q1', t: 'Vamos a mirar tres cosas: que funcione y maneje errores, que tenga pruebas y cómo explicas tus decisiones.', ok: true, por: 'Transparencia sobre los criterios.' },
        { id: 'q2', t: 'No te puedo contar los criterios, es confidencial.', ok: false, por: 'Los criterios no son secreto; las respuestas sí.' },
      ] },
      { id: 'tiempo', t: 'Tiempo', ops: [
        { id: 't1', t: 'Toma unas 3 horas y tienes 5 días para hacerla cuando te acomode.', ok: true },
        { id: 't2', t: 'Mientras antes la mandes, mejor te va a ir.', ok: false, por: 'Falso, y genera presión innecesaria.' },
      ] },
      { id: 'despues', t: 'Después', ops: [
        { id: 'd1', t: 'Pase lo que pase, te mandamos retroalimentación por escrito.', ok: true, por: 'Responde a su mala experiencia anterior.' },
        { id: 'd2', t: 'Si no pasas, te avisamos.', ok: null, por: 'Correcto, pero no responde lo que preguntó.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 't1', 'd1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 3 : q === 'riesgosa' ? -2 : 1 }, rel: { dev: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Camila responde con un sticker de un gato aplaudiendo y la hora en que la hará: el sábado temprano, antes de llevar a su abuela al mercado.' : q === 'riesgosa' ? 'Camila responde «ok». Te queda la sensación de que repetiste lo que ella ya vivió.' : 'Camila agradece. Le quedan algunas dudas.',
        pro: { ok: 'Decir los criterios antes no regala la prueba: hace que mida lo que debe.', risk: 'El silencio después de una prueba es una de las peores experiencias de candidato.', info: 'Lo que le dices a Camila, díselo a todos: misma información para todos.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Transparencia que se agradece!' : '¿Le respondiste lo que preguntó?'],
      };
    },
    mirada: { ve: 'La experiencia del candidato también es parte de la evaluación justa: saber qué se mira, cuánto tiempo toma y qué pasará después. Lo que se le explica a una persona, se le explica a todas.' },
  },
  {
    id: 'd6', t: '19:45', ch: 'presencial', who: null, titulo: 'Cinco minutos en el meetup', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Coworking en Miraflores · Comunidad Backend Lima', show: ['confianza', 'calidad', 'personas'],
    body: (n, F) => `<p>${F.has('fuentes_comunidad') ? 'Te toca después de la charla de bases de datos. Hay unas 70 personas, pizza fría y cerveza artesanal.' : 'No te inscribiste para hablar, pero la organizadora te ofrece un espacio que quedó libre.'} Renzo está en la tercera fila, con los brazos cruzados.</p><p>Te dan el micrófono. <mark class="clave">Tienes cinco minutos</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Contar, con las láminas de Renzo, por qué los pagos con QR se caen en las quincenas, y al final decir que estás en la mesa del fondo si alguien quiere conversar.',
        res: { q: 'buena', fx: { confianza: 4, calidad: 3, personas: 2 }, flags: ['meetup_aporte'], cartera: { pipeline: '11 en proceso · 4 contactos del meetup' },
          out: 'Te hacen dos preguntas que contesta Renzo. En la mesa del fondo se acercan cuatro personas, dos de ellas desarrolladoras que nunca habían respondido un mensaje de LinkedIn.',
          pro: { ok: 'Aportas antes de pedir, y respetas las reglas de la comunidad.', info: 'Escríbeles mañana mencionando lo que conversaron.' },
          kusi: ['celebra', '¡La comunidad te dio la palabra y la cuidaste!'] } },
      { id: 'b', label: 'Aprovechar los cinco minutos para leer las 12 vacantes y el rango salarial: es lo que la gente quiere saber.',
        res: { q: 'riesgosa', fx: { confianza: -3, calidad: -1 }, flags: ['meetup_aviso'],
          out: 'A los dos minutos la gente mira el celular. La organizadora te agradece «la energía», pero te recuerda las reglas. Renzo se tapa la cara.',
          pro: { ok: 'Todos saben que hay vacantes.', risk: 'Romper las reglas de una comunidad cierra una fuente que cuesta mucho abrir.' },
          kusi: ['preocupado', 'Las reglas de la casa se respetan…'] } },
    ],
    mirada: { ve: 'Las comunidades técnicas son una de las mejores fuentes para perfiles escasos, pero funcionan con reglas propias: se gana la palabra aportando. Un Talent Acquisition Partner que entiende eso consigue lo que un aviso no logra.' },
  },
];
