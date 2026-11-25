// Gerente/a de Gestión Humana · Capítulo 5 · «Lo que no se recorta» · Semana 1, viernes.
// Hilo de las dos semanas: el 10 % del directorio de Grupo Vida. Finanzas quiere eliminar la capacitación.
// Normas citadas (textos oficiales en docs/normas/txt):
// - Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 27 (modificado por D.S. 006-2014-TR): el empleador garantiza
//   que los trabajadores sean capacitados en materia de prevención.
// - Reglamento de la Ley 29783, art. 28 (modificado por D.S. 006-2014-TR): la capacitación se realiza dentro de la
//   jornada de trabajo y en ningún caso su costo recae sobre los trabajadores.
// - Reglamento de la Ley 29783, art. 29: los programas de capacitación se hacen extensivos a todos los trabajadores.
// - Ley 30709, art. 4: los planes de formación y desarrollo de capacidades garantizan la igualdad entre mujeres y hombres.
// - TUO de la LRCT (D.S. 010-2003-TR), arts. 82 y 83, ya citados en el capítulo 4.

export const CAP = {
  n: 5, titulo: 'Lo que no se recorta', dia: 'Semana 1, viernes', foto: 'assets/foto/capacitacion.webp',
  lugar: 'Grupo Vida · Oficina corporativa de San Isidro',
  inicio: '07:30', fin: '20:30', cierreHora: '20:15',
  apertura: 'Viernes. Llegas con la voz ronca de tanto hablar esta semana. En la mesa hay un sobre de Finanzas con un post-it: «Capacitación 2027: propuesta. Hablemos a las 9:30. R.». Y un tamal de Doris, «porque usted no desayuna».', boton: 'Abrir el sobre',
  kusi: 'Defender una prioridad no es defenderlo todo: es elegir qué no se toca y explicarlo con números.',
  lead: 'Le explicaste a la doctora qué es legal en una huelga, desarmaste la propuesta de cortar toda la capacitación, cuidaste el dato de Mariela, elegiste qué no se recorta, armaste un plan de formación más barato y cerraste la semana con un mensaje que no esperabas.',
  reflexion: '¿Qué se recorta primero en una crisis y qué cuesta más recuperar después?',
  siguiente: { n: 6, titulo: 'La denuncia', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'recorte', p: 'Reducción de costos del 10 %', j: 'Directorio', d: 0, e: 'Faltan 6 días' },
  { id: 'capacitacion', p: 'Presupuesto de capacitación 2027', j: 'Mariela Tang · Desarrollo', d: 0, e: 'Finanzas propone S/ 0' },
  { id: 'sindicato', p: 'Mesa técnica de dotación', j: 'Silvia Quispe', d: 0, e: 'Martes 9:00' },
  { id: 'servicios', p: 'Servicios mínimos', j: 'Relaciones Laborales', d: 0, e: 'Lista actualizada en revisión' },
  { id: 'semana2', p: 'Plan de la Semana 2', j: 'Gestión Humana', d: 0, e: 'Por armar' },
];

export const FUTURO = {
  rossi_informada: ['La doctora recibió una página clara sobre lo que es legal en una huelga.', 'Sabe que Gestión Humana no le esconde los límites.'],
  capacitacion_defendida: ['Defendiste la capacitación en SST y la inducción de enfermería.', 'Será una línea que no se toca en tu propuesta.'],
  capacitacion_recortada: ['Aceptaste recortar casi toda la capacitación.', 'Mariela empezó a actualizar su CV.'],
  dato_honesto: ['Mariela presentará su dato con su margen de error.', 'Nadie lo podrá desarmar el jueves.'],
  dato_inflado: ['El dato de la inducción sale más bonito de lo que es.', 'Rodrigo lo va a revisar.'],
  plan_formacion: ['Tienes un plan de formación más barato que no toca lo esencial.', 'Ahorra sin dejar a nadie sin capacitarse.'],
  semana2_ordenada: ['Tu Semana 2 tiene orden: revisión, mesa, propuesta, directorio.', 'Fernando lo tiene en su calendario.'],
  kiara_cita: ['Aceptaste recibir con reserva a una enfermera que quiere denunciar a un gerente.', 'El lunes a las 8, en tu oficina.'],
  kiara_buzon: ['Mandaste a la enfermera al buzón de denuncias.', 'El buzón lo revisa la secretaria del director médico.'],
};

export const CHATS = {
  carmen: { n: 'Dra. Carmen Rossi', sub: 'Presidenta del directorio', who: 'directorio' },
  nora: { n: 'Lic. Nora Huamán', sub: 'Sindicato de enfermería', who: 'sindicato' },
  jorge: { n: 'Jorge Lazo', sub: 'Jefe de Compensaciones', who: 'equipo' },
  mariela: { n: 'Mariela Tang', sub: 'Jefa de Desarrollo y Capacitación', c: '#2E7D7A' },
  rodrigo: { n: 'Rodrigo Benavides', sub: 'Gerente de Finanzas', c: '#C05621' },
  gg: { n: 'Fernando Prado', sub: 'Gerente General · tu jefe', c: '#2F6B3F' },
  jefaturas: { n: 'GH · Jefaturas', sub: 'Jorge, Silvia, Mariela y tú', c: '#0F2A3D' },
};

export const WSP = [
  { chat: 'jefaturas', t: '08:31', de: 'Silvia', txt: 'Lista de servicios mínimos actualizada por clínica. Falta que la revise usted y la comuniquemos.' },
  { chat: 'mariela', t: '09:10', de: 'Mariela', txt: 'Vi el sobre de Finanzas en tu mesa 😰 ¿Puedo pasar a las 11 con mis datos?' },
  { chat: 'carmen', t: '10:15', de: 'Carmen Rossi', txt: 'Leído. No me gusta, pero lo entiendo. Martes a las 6.', si: 'rossi_informada' },
  { chat: 'rodrigo', t: '15:40', de: 'Rodrigo', txt: 'Ok, la SST y la inducción no se tocan. Pero el resto lo bajamos de verdad, ¿eh?', si: 'capacitacion_defendida' },
  { chat: 'mariela', t: '16:00', de: 'Mariela', txt: 'Gracias por pelearla. De verdad.', si: 'capacitacion_defendida' },
  { chat: 'jorge', t: '18:00', de: 'Jorge', txt: 'Buen fin de semana, jefa. El lunes te tengo la versión 3 del modelo con Rodrigo. Descansa algo 🙏' },
  { chat: 'nora', t: '20:05', de: 'Nora', txt: 'Licenciada, disculpe la hora. Esto no es sindical. Una enfermera de Miraflores necesita hablar con alguien de confianza. Es sobre un gerente. Tiene miedo.' },
];

export const CORREOS = [
  { t: '07:30', de: 'Rodrigo Benavides · Finanzas', para: 'Gerencia de Gestión Humana; Gerencia General', asunto: 'Capacitación 2027 · propuesta', html: '<p>La capacitación suma S/ 1.4 millones al año y no tiene retorno medible. Propongo llevarla a cero en 2027, salvo lo que sea estrictamente obligatorio y que se pueda hacer en línea y fuera de horario. Adjunto el detalle.</p><p>Rodrigo</p>' },
  { t: '12:05', de: 'Mariela Tang · Desarrollo', para: 'Gerencia de Gestión Humana', asunto: 'Inducción de enfermería · datos', html: '<p>Este año, 96 enfermeras nuevas pasaron por la inducción de tres semanas y 51 no (por falta de cupos). De las que pasaron, se fueron 18 antes del año; de las que no, 26. Es una muestra chica, pero la diferencia es grande.</p><p>Mariela</p>' },
];

export const QUIZ = [
  { q: 'Según el Reglamento de la Ley 29783 (art. 28), la capacitación en SST…', ops: ['Puede hacerse fuera de horario sin pago', 'Se realiza dentro de la jornada y su costo nunca recae sobre los trabajadores', 'Es opcional en crisis', 'La paga el trabajador si cambia de puesto'], ok: 1, por: 'El art. 28 del Reglamento dice que la capacitación se realiza dentro de la jornada y su costo no recae sobre los trabajadores.' },
  { q: 'La Ley 30709, art. 4, pide que los planes de formación…', ops: ['Prioricen a los jefes', 'Garanticen la igualdad entre mujeres y hombres', 'Sean solo virtuales', 'Se paguen a medias'], ok: 1, por: 'El art. 4 exige que los planes de formación y desarrollo garanticen la igualdad entre mujeres y hombres.' },
  { q: 'Mariela tiene un dato prometedor con una muestra pequeña. Lo correcto es…', ops: ['Redondearlo para que impresione', 'Presentarlo con su tamaño de muestra y como resultado preliminar', 'No presentarlo', 'Decir que es un estudio internacional'], ok: 1, por: 'Un dato honesto con sus límites resiste las preguntas; uno inflado se desarma.' },
  { q: '¿Qué conviene recortar primero en capacitación?', ops: ['La capacitación en SST', 'La inducción que baja la rotación', 'Becas y congresos de gerencia, o pasar cursos a formatos más baratos', 'Todo por igual'], ok: 2, por: 'Lo obligatorio y lo que reduce costos se protege; lo que es beneficio para pocos se recorta o se rediseña.' },
  { q: 'Un viernes a las 8 p. m. te piden recibir a una persona que quiere denunciar a un gerente. ¿Qué haces?', ops: ['Mandarla al buzón general', 'Ofrecer una conversación con reserva y lo antes posible, informándole el canal formal', 'Esperar a que llegue la denuncia escrita', 'Avisarle al gerente'], ok: 1, por: 'Quien denuncia necesita reserva, rapidez y conocer el procedimiento; nunca que se informe al denunciado antes de tiempo.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '07:50', ch: 'whatsapp', who: null, titulo: 'Una página para la doctora', banner: 'assets/esc/escritorio.webp', show: ['confianza', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('rossi_ilegal') ? 'Anoche le dijiste a la doctora que la empresa no declara ilegal una huelga.' : 'Anoche le dijiste a la doctora que lo verías con Legal.'} Hoy le debes una explicación corta, antes de que alguien le cuente otra versión.</p><p>Le escribes directo. <mark class="clave">Ella lee en diagonal: cada línea cuenta</mark>.</p>`,
    type: 'compose', enviaA: 'carmen', para: 'Para: Dra. Carmen Rossi', boton: 'Enviar',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'ley', t: 'Lo que dice la ley', ops: [
        { id: 'l1', t: 'Doctora: la legalidad de una huelga la evalúa la Autoridad de Trabajo, no la empresa. Y reemplazar a quienes la acaten es una infracción muy grave.', ok: true, por: 'Claro y sin tecnicismos.' },
        { id: 'l2', t: 'Doctora: lo de anoche no se puede, es complicado legalmente.', ok: false, por: '«Es complicado» no le dice nada y suena a excusa.' },
      ] },
      { id: 'hago', t: 'Lo que estás haciendo', ops: [
        { id: 'h1', t: 'Ya actualizamos la lista de servicios mínimos por clínica: si hay huelga, ningún servicio crítico queda sin personal.', ok: true, por: 'Responde a su preocupación real: los pacientes.' },
        { id: 'h2', t: 'Estamos viendo opciones.', ok: false, por: 'Vago. La doctora pidió claridad.' },
      ] },
      { id: 'cuando', t: 'Cuándo sabrá más', ops: [
        { id: 'c1', t: 'El martes a las 6 le informo el resultado de la mesa con el sindicato.', ok: true, por: 'Le das una fecha que ella misma pidió.' },
        { id: 'c2', t: 'Le aviso cualquier novedad.', ok: null, por: 'Correcto, pero sin compromiso.' },
      ] },
    ],
    res: sel => {
      const malas = ['l2', 'h2'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas ? (malas === 2 ? 'riesgosa' : 'aceptable') : 'buena';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'aceptable' ? 0 : -3, cumplimiento: 2 }, rel: { directorio: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['rossi_informada'] : [], cartera: { servicios: 'Servicios mínimos actualizados y comunicados a la doctora' },
        out: q === 'buena' ? 'La doctora responde a las 10:15, en dos líneas. No le gusta, pero lo entiende. En su idioma, eso es casi un elogio.' : 'La doctora no responde. Fernando te escribe: «¿Qué le mandaste? Me llamó para preguntarme qué significa».',
        pro: { ok: 'La ley, lo que haces y una fecha: tres líneas que dan tranquilidad sin mentir.', info: 'Con la alta dirección, lo breve no es lo superficial: es lo que se lee.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Tres líneas, cero excusas.' : 'Ella necesita claridad.'],
      };
    },
    mirada: {
      ve: 'A la alta dirección no se le explica la ley con artículos: se le explica con consecuencias y con lo que estás haciendo para protegerla. Un mensaje así convierte un «no se puede» en «así lo cuidamos».',
    },
  },
  {
    id: 'e2', t: '09:30', ch: 'documento', who: null, titulo: 'Capacitación: S/ 0', banner: 'assets/esc/lupa.webp', lugar: 'Oficina de Finanzas · piso 8', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Rodrigo te recibe con su Excel proyectado en la pared. La columna «2027» de capacitación tiene casi todo en cero.</p><p>«Lo obligatorio lo dejamos, pero virtual y los sábados, para que no se pierdan horas de atención. Lo demás, fuera.» <mark class="clave">Lees el detalle</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no cumple la ley o lo que debería corregirse en la propuesta de Finanzas.',
    doc: { t: 'Capacitación 2027 · propuesta de Finanzas', sub: 'Detalle por programa' },
    lines: [
      { id: 'sab', t: 'Capacitación obligatoria de SST: virtual, los sábados, fuera de turno y sin pago adicional.', bad: LEY, why: 'La capacitación se realiza dentro de la jornada de trabajo (Reglamento de la Ley 29783, art. 28). Los sábados fuera de turno y sin pago, no.' },
      { id: 'cobro', t: 'Curso de reanimación cardiopulmonar: que lo pague cada enfermera, porque «le sirve para su CV».', bad: LEY, why: 'Si es capacitación exigida para su puesto, su costo no recae sobre los trabajadores (Reglamento de la Ley 29783, art. 28).' },
      { id: 'ind', t: 'Inducción de enfermería de tres semanas: eliminada.', bad: BP, why: 'Es el programa que mejor se relaciona con menos renuncias en el primer año. Eliminarlo puede costar más de lo que ahorra.' },
      { id: 'lid', t: 'Mantener solo el programa de liderazgo, en el que este año participaron únicamente jefes médicos varones «por disponibilidad».', bad: LEY, why: 'Los planes de formación deben garantizar la igualdad entre mujeres y hombres (Ley 30709, art. 4). En un grupo donde la mayoría son mujeres, eso tiene que revisarse.' },
      { id: 'mba', t: 'Suspender las becas de maestría para gerentes en 2027.' },
      { id: 'cong', t: 'Suspender los congresos internacionales.' },
      { id: 'tec', t: 'Pasar a formato virtual los cursos de ofimática y del sistema de historias clínicas.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      q: missLey ? 'riesgosa' : hitsLey >= 2 ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 5, calidad: missLey ? -2 : 3, etica: missLey ? -1 : 2 },
      flags: missLey ? [] : ['propuesta_finanzas_revisada'], cartera: { capacitacion: missLey ? 'Propuesta de Finanzas con riesgos legales' : 'Propuesta revisada: 3 ahorros sí, 4 no' },
      out: missLey ? 'Asientes ante el Excel. Lo de los sábados sin pago pasa como «ahorro». El sindicato lo tendrá en su próxima lista.' : 'Le muestras a Rodrigo las cuatro líneas con su norma o su costo al costado. Él aprieta la mandíbula, pero guarda el archivo como «v2_con_GH».',
      pro: { ok: 'Separas lo que se puede recortar de lo que la ley o el negocio necesitan.', risk: 'Capacitar fuera de jornada sin pago o cobrar cursos obligatorios es trasladar el costo a quien menos gana.', info: 'Tres ahorros sí son reales: becas, congresos y formatos virtuales.' },
      kusi: missLey ? ['preocupado', 'Sábados sin pago… eso no.'] : ['celebra', '¡Cuatro trampas a la vista!'],
    }),
    rules: [[LEY, 'La capacitación se realiza dentro de la jornada y su costo no recae sobre los trabajadores (Reglamento de la Ley 29783, art. 28).'], [LEY, 'Los planes de formación garantizan la igualdad entre mujeres y hombres (Ley 30709, art. 4).']],
    mirada: {
      ve: 'Cuando la capacitación se corta «salvo lo obligatorio», lo obligatorio suele terminar mal hecho: los sábados, sin pago o cobrado al trabajador. Defender la capacitación no es defender todos los cursos: es defender que se haga bien lo que importa.',
      normas: [{ ley: 'Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 28', dice: 'La capacitación, cualquiera que sea su modalidad, se realiza dentro de la jornada de trabajo. En ningún caso su costo recae sobre los trabajadores.', practica: 'Virtual sí; los sábados, fuera de turno y sin pago, no.' }],
    },
  },
  {
    id: 'e3', t: '11:10', ch: 'presencial', who: null, titulo: 'El dato de Mariela', banner: 'assets/foto/mentora.webp', lugar: 'Tu oficina · piso 7', show: ['calidad', 'personas', 'etica'],
    body: () => `<p>Mariela entra con su laptop abrazada como un escudo. Su dato es bueno: de las 96 que pasaron la inducción, se fueron 18 antes del año; de las 51 que no, 26.</p><p>«Si lo presento como "la inducción reduce la rotación a la mitad", Rodrigo no la toca. <mark class="clave">¿Lo pongo así?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«Ponlo con los números reales: 19 % contra 51 %, con el tamaño de muestra y como resultado preliminar. Y propón medirlo bien en 2027.»',
        res: { q: 'buena', fx: { calidad: 4, etica: 3, personas: 2 }, flags: ['dato_honesto'],
          out: 'Mariela rehace la lámina: «Preliminar: 96 vs. 51 enfermeras». Se ve menos espectacular. Pero cuando Jorge la revisa, no le encuentra ni un hueco.',
          pro: { ok: 'Un dato honesto con sus límites resiste a Finanzas y al directorio.', info: 'Que también diga por qué 51 no pasaron la inducción: falta de cupos. Eso refuerza el argumento.' },
          kusi: ['celebra', 'Honesto y fuerte. ¡Así se defiende un programa!'] } },
      { id: 'b', label: '«Sí, ponlo así. Es básicamente cierto y necesitamos que impacte.»',
        res: { q: 'riesgosa', fx: { calidad: -2, etica: -3 }, flags: ['dato_inflado'],
          out: 'La lámina queda impactante. Rodrigo la ve en el correo de la tarde y responde con una sola pregunta: «¿Cuál es la muestra?».',
          pro: { ok: 'El mensaje impacta.', risk: 'Un dato inflado, cuando se descubre, arrastra a los demás datos de tu propuesta.' },
          kusi: ['preocupado', 'Rodrigo siempre pregunta por la muestra.'] } },
    ],
    rules: [[BP, 'Presenta los datos con su tamaño de muestra y sus límites.']],
    mirada: {
      ve: 'En una crisis, la tentación de exagerar un buen dato es enorme. Pero la credibilidad de Gestión Humana ante Finanzas se construye con datos que no se caen. Un 19 % contra un 51 % ya es contundente: no necesita adornos.',
      visual: { tipo: 'embudo', titulo: 'Enfermeras nuevas en 2026', niveles: [['Ingresaron', 147], ['Pasaron la inducción', 96], ['De ellas, se quedaron el primer año', 78]] },
    },
  },
  {
    id: 'e4', t: '14:00', ch: 'presencial', who: null, titulo: 'La mesa de tres', banner: 'assets/foto2/revisan.webp', lugar: 'Piso 9 · Gerencia General', show: ['confianza', 'calidad', 'personas'],
    body: (n, F) => `<p>Fernando, Rodrigo y tú. El café de la máquina está quemado. ${F.has('modelo_conjunto') ? 'Rodrigo trae el modelo que hicieron juntos el miércoles.' : 'Rodrigo trae su propio modelo.'}</p><p>Fernando corta: «No podemos proteger todo. <mark class="clave">Dime qué no se recorta y por qué</mark>, y el resto se lo dejo a Rodrigo».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'No se tocan la capacitación en SST ni la inducción de enfermería; se recortan becas, congresos y se rediseña el resto con instructores internos. Ahorro: cerca de la mitad del presupuesto.',
        res: { q: 'buena', fx: { calidad: 4, confianza: 3, cumplimiento: 3 }, rel: { equipo: 1 }, flags: ['capacitacion_defendida'], cartera: { capacitacion: 'SST e inducción protegidas; ahorro cercano al 50 %' },
          out: 'Rodrigo hace la cuenta en su calculadora. «Medio millón largo. No es cero, pero es real.» Fernando cierra la carpeta: «Hecho».',
          pro: { ok: 'Defiendes una prioridad con argumentos de ley y de costo, y cedes en lo demás.', risk: 'Mariela perderá parte de su equipo de instructores externos.', info: 'Escribe la frase para el directorio: «No recortamos lo que nos ahorra plata».' },
          kusi: ['celebra', 'Elegiste qué defender. ¡Eso es gerencia!'] } },
      { id: 'b', label: 'Defender todo el presupuesto de capacitación: es lo último que se recorta en una empresa de salud.',
        res: { q: 'aceptable', fx: { personas: 2, confianza: -3 }, rel: { equipo: 1 },
          out: 'Fernando te mira cansado. «Entonces Rodrigo lo decide.» Rodrigo decide recortar la mitad, incluida parte de la inducción.',
          pro: { ok: 'Eres coherente con tu convicción.', risk: 'Al no priorizar, otro prioriza por ti.' },
          kusi: ['pensando', 'Defenderlo todo es no defender nada.'] } },
      { id: 'c', label: 'Aceptar la propuesta de Finanzas, solo con lo legal corregido: hay que mostrar al directorio que Gestión Humana también recorta.',
        res: { q: 'riesgosa', fx: { calidad: -3, personas: -3 }, rel: { equipo: -1 }, flags: ['capacitacion_recortada'], cartera: { capacitacion: 'Casi toda la capacitación recortada, inducción incluida' },
          out: 'Rodrigo sonríe. A las 4, Mariela se entera por el correo de Finanzas. No viene a tu oficina.',
          pro: { ok: 'Muestras disposición a recortar.', risk: 'Eliminar la inducción puede subir la rotación, y con ella las horas extra que intentas bajar.' },
          kusi: ['triste', 'Ese recorte sale caro después.'] } },
    ],
    rules: [[LEY, 'El empleador garantiza la capacitación en prevención (Reglamento de la Ley 29783, art. 27).'], [BP, 'No recortes lo que reduce otros costos.']],
    mirada: {
      ve: 'Defender una prioridad exige renunciar a otras. Una gerente que lo protege todo pierde la mesa; una que no protege nada pierde a su equipo. La línea correcta es la que puedes justificar con la ley y con los números.',
      visual: { tipo: 'balanza', a: { t: 'Se recorta', items: ['Becas de maestría', 'Congresos', 'Cursos presenciales que pueden ser virtuales'] }, b: { t: 'No se recorta', items: ['Capacitación en SST, en jornada', 'Inducción de enfermería'] } },
    },
  },
  {
    id: 'e5', t: '16:30', ch: 'documento', who: null, titulo: 'El plan de formación 2027', banner: 'assets/foto/taller.webp', lugar: 'Sala de reuniones del piso 7', show: ['calidad', 'tiempo', 'personas'],
    body: () => `<p>Con Mariela, rehacen el plan de formación con menos plata. ${'Ella todavía tiene los ojos rojos, pero trae tres ideas.'}</p><p><mark class="clave">Elige qué entra en el plan</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del plan de formación.', boton: 'Guardar el plan',
    bloques: [
      { id: 'man', t: 'Se mantiene', n: 2, ops: [
        { id: 'm1', t: 'Capacitación en SST para todos, en jornada, según los riesgos de cada servicio.', ok: true },
        { id: 'm2', t: 'Inducción de tres semanas para toda enfermera nueva, sin excepción por cupos.', ok: true, por: 'Las 51 que no la tuvieron fueron las que más se fueron.' },
        { id: 'm3', t: 'El programa de liderazgo tal como está.', ok: false, por: 'Sin revisar quiénes acceden, repites la desigualdad de este año.' },
      ] },
      { id: 'cam', t: 'Se rediseña', n: 2, ops: [
        { id: 'c1', t: 'Instructores internos: enfermeras senior certificadas como formadoras, con horas protegidas.', ok: true, por: 'Más barato y reconoce a las veteranas.' },
        { id: 'c2', t: 'Programa de liderazgo abierto por convocatoria, con criterios públicos y paridad en la selección.', ok: true },
        { id: 'c3', t: 'Cursos obligatorios en videos que cada uno ve en su casa.', ok: false, por: 'Si son obligatorios, son en jornada.' },
      ] },
      { id: 'mide', t: 'Se mide', n: 1, ops: [
        { id: 'd1', t: 'Rotación del primer año de quienes pasan la inducción vs. quienes no, cada trimestre.', ok: true },
        { id: 'd2', t: 'Número de cursos dictados.', ok: false, por: 'Mide actividad, no resultado.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['plan_formacion'], cartera: { capacitacion: q === 'riesgosa' ? 'Plan de formación con huecos' : 'Plan de formación 2027 rediseñado' },
        out: q === 'buena' ? 'El plan cabe en una página. Mariela la lee dos veces: «Con esto, la inducción llega a todas y cuesta menos». Te pide permiso para contárselo a las formadoras senior el lunes.' : 'El plan ahorra, aunque deja algo que el próximo año será un problema.',
        pro: { ok: 'Menos plata no tiene que ser menos formación: puede ser formación mejor elegida.', info: 'Las enfermeras senior como formadoras son también una forma de retenerlas.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Menos plata, mejor plan!' : 'Algo quedó cojo.'],
      };
    },
    rules: [[LEY, 'Los programas de capacitación se hacen extensivos a todos los trabajadores (Reglamento de la Ley 29783, art. 29).'], [LEY, 'Igualdad entre mujeres y hombres en los planes de formación (Ley 30709, art. 4).']],
    mirada: {
      ve: 'Una crisis también es una oportunidad para rediseñar. Formadoras internas, convocatorias abiertas y medir resultados en lugar de cursos pueden dar un plan más barato y más justo que el anterior.',
      visual: { tipo: 'cambio', titulo: 'Formación 2026 → 2027', pares: [['Inducción solo si hay cupo', 'Inducción para todas'], ['Instructores externos', 'Enfermeras senior formadoras'], ['Liderazgo por invitación', 'Liderazgo por convocatoria y con paridad']] },
    },
  },
  {
    id: 'e6', t: '18:30', ch: 'documento', who: null, titulo: 'La Semana 2', banner: 'assets/esc/camino.webp', lugar: 'Tu oficina · piso 7', show: ['tiempo', 'calidad'],
    body: () => `<p>El piso 7 se vacía. Doris te dejó la agenda de la próxima semana impresa y un plumón. La garúa empaña las ventanas.</p><p>Faltan cinco días hábiles para el directorio. <mark class="clave">Ordena la semana</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los hitos de la Semana 2. Usa las flechas.', boton: 'Mandárselo a Fernando',
    items: [
      { id: 'rev', t: 'Lunes: revisar con Fernando y Rodrigo la versión 3 del modelo', por: 'Base para todo lo demás.' },
      { id: 'mesa', t: 'Martes: mesa técnica de dotación con el sindicato', por: 'Antes de la propuesta, para incluir lo que se acuerde.' },
      { id: 'prop', t: 'Miércoles: propuesta final con escenarios, riesgos y brecha', por: 'Con lo acordado en la mesa.' },
      { id: 'dir', t: 'Jueves: sesión del directorio', por: 'El día.' },
      { id: 'com', t: 'Viernes: comunicar a jefaturas, jefas de enfermería y sindicato lo decidido', por: 'Lo que se decide se comunica rápido y por los canales acordados.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['semana2_ordenada'], cartera: { semana2: q === 'riesgosa' ? 'Semana 2 sin orden' : 'Semana 2 planificada' },
        out: q === 'buena' ? 'Fernando responde desde su auto: «Así. La mesa antes de la propuesta, bien pensado». Apagas la luz a las 7:50.' : 'Fernando corrige: «La mesa tiene que ir antes de cerrar la propuesta, ¿no?».',
        pro: { ok: 'La mesa con el sindicato va antes de cerrar la propuesta: lo que se acuerde ahí cambia los números.', info: 'Deja el viernes reservado para comunicar.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Semana con mapa. ¡A descansar un poco!' : 'El orden cambia el resultado.'],
      };
    },
    mirada: {
      ve: 'En la gerencia, el orden de las conversaciones es parte de la estrategia. Ir al directorio antes de hablar con el sindicato es decidir sin escuchar; hablar con el sindicato después de cerrar la propuesta es negociar con las manos atadas.',
      visual: { tipo: 'linea', titulo: 'Semana 2', hitos: [['Lunes', 'Modelo v3'], ['Martes', 'Mesa con enfermería'], ['Miércoles', 'Propuesta final'], ['Jueves', 'Directorio'], ['Viernes', 'Comunicar']] },
    },
  },
  {
    id: 'e7', t: '20:10', ch: 'whatsapp', who: 'sindicato', titulo: 'Un mensaje a las ocho', banner: 'assets/esc/dudas.webp', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>Ya estás en la combi, con la mochila en las piernas, cuando llega el mensaje de Nora.</p><p>«Esto no es sindical. Una enfermera de Miraflores necesita hablar con alguien de confianza. <mark class="clave">Es sobre un gerente. Tiene miedo</mark>.» Un minuto después: «No me dijo quién. Solo que es "de arriba"».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder que puede verte el lunes a las 8 en tu oficina, con total reserva, que puede venir acompañada y que le explicarás el procedimiento formal y sus derechos.',
        res: { q: 'buena', fx: { etica: 4, personas: 4, confianza: 2 }, rel: { sindicato: 1 }, flags: ['kiara_cita'], cartera: { semana2: 'Lunes 8:00: reunión reservada con una enfermera' },
          envia: ['nora', 'Nora, gracias por la confianza. Que me escriba o venga el lunes a las 8 a mi oficina, piso 7. Puede venir acompañada de quien quiera. Todo con reserva, y le explicaré el procedimiento y sus derechos antes de que decida nada.'],
          out: 'Nora responde: «Se llama Kiara. Le paso su número». A las 20:40, un mensaje de un número desconocido: «Gracias, licenciada. Ahí estaré».',
          pro: { ok: 'Ofreces rapidez, reserva, acompañamiento y el canal formal.', risk: 'Un gerente «de arriba» en plena semana del directorio. Prepárate.', info: 'El lunes, antes de escucharla, ten a mano el procedimiento de hostigamiento del grupo.' },
          kusi: ['animo', 'Puerta abierta, con reserva. ¡Bien!'] } },
      { id: 'b', label: 'Responder que use el buzón de denuncias de la intranet: es el canal oficial y así queda registro.',
        res: { q: 'riesgosa', fx: { etica: -2, personas: -3 }, rel: { sindicato: -1 }, flags: ['kiara_buzon'],
          envia: ['nora', 'Nora, que use el buzón de denuncias de la intranet, por favor. Es el canal oficial.'],
          out: 'Nora responde una hora después: «Ese buzón lo revisa la secretaria del director médico, licenciada. Por eso tiene miedo».',
          pro: { ok: 'Respetas el canal formal.', risk: 'Un canal que el denunciado puede ver no es un canal seguro.' },
          kusi: ['preocupado', '¿Y si el buzón llega a quien no debe?'] } },
      { id: 'c', label: 'Llamar ahora a Nora para que te diga quién es el gerente.',
        res: { q: 'aceptable', fx: { etica: 0, personas: -1 }, rel: { sindicato: 0 }, flags: ['kiara_cita'],
          out: 'Nora no lo sabe o no lo dice. «Hable con ella, licenciada. Se llama Kiara.» Quedan el lunes a las 8. Te quedas con la curiosidad toda la noche.',
          pro: { ok: 'Te mueves rápido.', risk: 'Saber el nombre antes de escuchar a la denunciante no la ayuda y puede sesgarte.' },
          kusi: ['pensando', 'Primero ella, después el nombre.'] } },
    ],
    rules: [[BP, 'Quien quiere denunciar necesita un canal seguro, rápido y con reserva, donde el denunciado no tenga acceso.']],
    mirada: {
      ve: 'Las denuncias más graves casi nunca llegan por el canal oficial: llegan un viernes a las ocho, por alguien de confianza. La primera respuesta decide si la persona se anima a contar o se calla. Y esta semana, quien cuenta lo hará en medio del recorte.',
    },
  },
];
