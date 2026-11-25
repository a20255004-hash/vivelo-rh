// Gerente/a de Gestión Humana · Capítulo 10 · «Dos semanas» · Semana 2, viernes. Final abierto: continúa en la Semana 3.
// Hilo de las dos semanas: el 10 % del directorio de Grupo Vida, el acuerdo con enfermería y la denuncia contra el
// director médico. El lunes llega una carta notarial.
// Normas citadas (textos oficiales en docs/normas/txt):
// - Ley 30709, art. 2: las empresas mantienen o elaboran cuadros de categorías y funciones acordes con la ley.
// - D.S. 007-2002-TR, art. 10-A: registro del sobretiempo (ya citado en el cap. 3).
// - Ley 29733, art. 17: confidencialidad (ya citada).
// - Ley 27942 y su Reglamento (D.S. 014-2019-MIMP): el procedimiento protege a la víctima y garantiza la defensa del
//   denunciado (principio, sin plazos; ver cap. 6).
//   https://lpderecho.pe/reglamento-ley-prevencion-sancion-hostigamiento-sexual-decreto-supremo-014-2019-mimp/

export const CAP = {
  n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-papel.webp',
  lugar: 'Grupo Vida · Oficina corporativa de San Isidro',
  inicio: '08:00', fin: '19:30', cierreHora: '19:15',
  apertura: 'Viernes. Hace diez días hábiles abriste un correo en un taxi, bajo la garúa. Hoy, por primera vez en dos semanas, sale el sol sobre San Isidro. El comunicado salió a las 8. En las cinco clínicas, el cambio de turno fue normal.', boton: 'Subir al piso 9',
  kusi: 'Hoy toca mirar atrás. Y prepararte, porque en la gerencia siempre viene algo más.',
  lead: 'Miraste tus dos semanas con Fernando, elegiste qué sigue, cerraste el ciclo con quienes lo hicieron posible, despediste la semana con tu equipo y te preparaste para una carta que llega el lunes.',
  reflexion: '¿Te ves en este puesto?',
  siguiente: { n: 11, titulo: 'La carta notarial', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'recorte', p: 'Plan de costos 2027', j: 'Directorio', d: 0, e: 'Fases 1 y 2 aprobadas' },
  { id: 'acta', p: 'Acuerdo con enfermería', j: 'Relaciones Laborales', d: 0, e: 'Mesa de enero' },
  { id: 'denuncia', p: 'Denuncia de Kiara Saavedra', j: 'Instancia investigadora', d: 0, e: 'Descargos del denunciado' },
  { id: 'seguimiento', p: 'Indicadores de junio', j: 'Compensaciones', d: 0, e: 'Primer reporte en enero' },
  { id: 'semana3', p: 'Semana 3', j: 'Gestión Humana', d: 0, e: 'Por planificar' },
];

export const FUTURO = {
  pendientes_bien: ['Tu Semana 3 empieza por lo que sostiene los acuerdos.', 'Nadie te tomará por sorpresa.'],
  pendientes_flojos: ['Tu Semana 3 empieza por lo urgente, no por lo importante.', 'Algo de lo firmado puede quedar sin cumplirse.'],
  cierre_personas: ['Cerraste el ciclo con quienes hicieron posible las dos semanas.', 'Te lo devolverán cuando vengan días difíciles.'],
  carta_preparada: ['Ante la carta notarial, ordenaste el expediente y mantuviste las medidas.', 'El lunes a las 8 te reúnes con Legal.'],
  carta_cede: ['Ante la carta notarial, pensaste en levantar las medidas.', 'Kiara volvería a quedar expuesta.'],
  te_ves_si: ['Te ves en este puesto.', 'La Semana 3 te espera.'],
  te_ves_otro: ['Te ves en Gestión Humana, pero en otro rol.', 'Igual, el lunes hay una carta que responder.'],
  te_ves_duda: ['Todavía no sabes si te ves en este puesto.', 'Lo seguirás descubriendo.'],
};

export const CHATS = {
  jefaturas: { n: 'GH · Jefaturas', sub: 'Jorge, Silvia, Mariela y tú', c: '#0F2A3D' },
  gg: { n: 'Fernando Prado', sub: 'Gerente General · tu jefe', c: '#2F6B3F' },
  nora: { n: 'Lic. Nora Huamán', sub: 'Sindicato de enfermería', who: 'sindicato' },
  kiara: { n: 'Kiara Saavedra', sub: 'Enfermera · Clínica Miraflores', c: '#B83B5E' },
  jorge: { n: 'Jorge Lazo', sub: 'Jefe de Compensaciones', who: 'equipo' },
  carmen: { n: 'Dra. Carmen Rossi', sub: 'Presidenta del directorio', who: 'directorio' },
  doris: { n: 'Doris Ccahuana', sub: 'Asistente de gerencia', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'jefaturas', t: '08:05', de: 'Silvia', txt: 'Comunicado salió. Las jefas de enfermería lo recibieron diez minutos antes, como pidió. Ni un rumor hasta ahora 🙏', si: 'comunicado_limpio' },
  { chat: 'jorge', t: '09:15', de: 'Jorge', txt: 'Primer dato: esta semana, las horas extra de la UCI de Los Olivos bajaron 18 %. Una semana no es tendencia, pero 😏', si: 'horas_frenadas' },
  { chat: 'doris', t: '12:00', de: 'Doris', txt: 'Mateo hoy dijo su primera frase completa en terapia. Gracias por dejarme ir esos lunes 😭', si: 'doris_cuidada' },
  { chat: 'kiara', t: '15:30', de: 'Kiara', txt: 'Me renovaron el contrato. Lo firmó mi jefa con Gestión Humana. Gracias por todo, licenciada.', si: 'medidas_proteccion' },
  { chat: 'nora', t: '16:10', de: 'Nora', txt: 'Licenciada, ¿es cierto que el abogado del Dr. Ugaz anda diciendo que esto es «una campaña del sindicato»? Nosotras no tenemos nada que ver con lo de Kiara.' },
  { chat: 'gg', t: '18:55', de: 'Fernando', txt: 'Me avisan de Legal: la carta del estudio de Ugaz la notifican el lunes a primera hora. Y el directorio nombró a un director médico interino: el Dr. Hugo Valcárcel, de Arequipa. Llega el lunes también.' },
];

export const CORREOS = [
  { t: '08:00', de: 'Comunicaciones · Grupo Vida', para: 'Todo el personal', asunto: 'Acuerdos del directorio sobre el plan 2027', html: '<p>El directorio aprobó un plan para cubrir vacantes de enfermería en fases, empezando por los servicios críticos. Las horas extra se ofrecen y se registran. La capacitación en seguridad y la inducción se mantienen. Agradecemos al sindicato de enfermería su participación en la mesa técnica.</p>' },
  { t: '17:40', de: 'Estudio Benavides & Lira · Abogados', para: 'Gerencia de Gestión Humana; Gerencia General', asunto: 'Aviso de carta notarial', html: '<p>Les informamos que el lunes se les notificará carta notarial en la que nuestro patrocinado, el Dr. Alfredo Ugaz, cuestiona la conformación de la instancia investigadora y las medidas dispuestas en su contra, y se reserva las acciones legales que correspondan contra quienes resulten responsables.</p>' },
];

export const QUIZ = [
  { q: 'Al cerrar un periodo intenso, ¿qué pendiente va primero?', ops: ['El que se ve mejor', 'El que sostiene los acuerdos firmados y la protección de las personas', 'El más rápido', 'El que pidió el directorio por chat'], ok: 1, por: 'Lo que ya prometiste (al sindicato, a una denunciante, al directorio) es lo primero que se vigila.' },
  { q: 'La Ley 30709 (art. 2) pide a las empresas…', ops: ['Publicar los sueldos de todos', 'Mantener o elaborar cuadros de categorías y funciones acordes con la ley', 'Igualar todos los sueldos', 'Eliminar los bonos'], ok: 1, por: 'El art. 2 pide cuadros de categorías y funciones que guarden correspondencia con la prohibición de discriminación remunerativa.' },
  { q: 'Llega una carta notarial del abogado del denunciado que cuestiona las medidas. ¿Qué haces?', ops: ['Levantar las medidas para evitar un juicio', 'Revisar con Legal que el procedimiento esté bien sustentado y mantener las medidas mientras lo estén', 'Responder con otra carta agresiva', 'Ignorarla'], ok: 1, por: 'Una carta notarial no cambia los hechos. Si las medidas están bien sustentadas, se mantienen; si algo falló, se corrige.' },
  { q: '¿Qué distingue a una gerencia de Gestión Humana de una jefatura?', ops: ['Firma más documentos', 'Decide con el directorio, lidera líderes y responde por costos, clima, cumplimiento y reputación a la vez', 'Tiene más vacaciones', 'No trata con personas'], ok: 1, por: 'La gerencia rinde cuentas por todo a la vez y sus decisiones se convierten en ejemplo para la organización.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '08:30', ch: 'presencial', who: null, titulo: 'Diez días con Fernando', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Piso 9 · Gerencia General', show: ['confianza', 'personas', 'calidad'],
    body: (n, F) => {
      const bien = [], mejor = [];
      (F.has('plazo_datos') ? bien : mejor).push(F.has('plazo_datos') ? 'le pediste datos al directorio en vez de prometer una cifra' : 'el primer «sí» o «no» que le diste a la doctora');
      (F.has('agencia_rechazada') ? bien : mejor).push(F.has('agencia_rechazada') ? 'me frenaste lo de la agencia' : 'lo de la agencia de enfermeras');
      (F.has('acta_firmada') ? bien : mejor).push(F.has('acta_firmada') ? 'firmaste con el sindicato solo lo que podíamos cumplir' : 'el acuerdo con enfermería');
      (F.has('carmen_limite') ? bien : mejor).push(F.has('carmen_limite') ? 'le pusiste un límite a la doctora con lo de Ugaz' : 'cuando cediste con lo de Ugaz');
      (F.has('propuesta_honesta') ? bien : mejor).push(F.has('propuesta_honesta') ? 'mostraste la brecha en vez de esconderla' : 'cómo llegaste al número del directorio');
      return `<p>Fernando tiene dos cafés y el acta del directorio sobre la mesa. «Diez días. Un directorio, un sindicato, una denuncia y 3,000 personas que hoy fueron a trabajar tranquilas.»</p><p>«Lo que hiciste bien: ${bien.length ? bien.join('; ') : 'llegaste hasta aquí'}. ${mejor.length ? 'Lo que tienes que revisar: ' + mejor.join('; ') + '.' : 'No tengo mucho que corregirte.'}» Se recuesta: <mark class="clave">«Pregúntame lo que quieras»</mark>.</p>`;
    },
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces a Fernando.',
    opts: [
      { id: 'como', label: '«¿Cómo me vio el directorio?»', info: '«Mendoza dice que eres la primera gerente de RR.HH. que no le vende nada. La doctora no te quiere, pero te respeta. Y Carrión me pidió tu número.»' },
      { id: 'aprender', label: '«¿Qué debería aprender ahora?»', info: '«Finanzas. Que Rodrigo te enseñe a leer un flujo de caja como él lee tu tablero. Y a delegar: Jorge y Silvia pueden más de lo que les pides.»' },
      { id: 'dificil', label: '«¿Qué fue lo más difícil para usted?»', info: 'Fernando se ríe sin ganas. «Contestarle el teléfono a la doctora el lunes de la denuncia. Me preguntó si confiaba en ti. Le dije que sí antes de pensarlo. Después lo pensé, y seguía siendo sí.»' },
      { id: 'sigue', label: '«¿Qué viene ahora?»', info: '«Junio. Si los indicadores no se mueven, perdemos las fases 3 y 4 y la confianza del sindicato. Y antes de junio, lo de Ugaz. Eso no ha terminado.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 4, personas: 1 },
      out: 'Fernando termina su café. «Una última cosa. Te la digo en la tarde, que ahora tengo al banco.»',
      kusi: ['curioso', 'Diez días caben en dos cafés.'],
    }),
    mirada: {
      ve: 'El balance de un periodo corto en la gerencia no es una nota: es una conversación sobre cómo decidiste. Preguntar qué deberías aprender ahora es lo que separa a quien terminó una crisis de quien creció con ella.',
      visual: { tipo: 'flujo', titulo: 'Tus diez días', pasos: ['El 10 %', 'Tu equipo', 'Los números', 'El sindicato', 'Lo que no se recorta', 'La denuncia', 'La mesa', 'La propuesta', 'El directorio', 'Balance'], aqui: 9 },
    },
  },
  {
    id: 'j2', t: '10:30', ch: 'documento', who: null, titulo: 'Lo que sigue', banner: 'assets/esc/camino.webp', lugar: 'Tu oficina · piso 7', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>En la pizarra todavía están los tres criterios del martes de la semana pasada. Al lado, Doris pegó una lista de pendientes en post-its de colores.</p><p>La próxima semana empieza con <mark class="clave">tres</mark> de ellos.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres pendientes con los que empieza la Semana 3.', boton: 'Ponerlos en la agenda', resumen: 'Elegiste',
    cols: ['Pendiente', 'Lo que sabes'],
    rows: [
      { id: 'aus', cells: ['Arrancar con el sindicato el plan de ausentismo de noche', 'Es parte de la condición de junio.'] },
      { id: 'kiara', cells: ['Revisar con la instancia investigadora que las medidas de protección se estén cumpliendo', 'El denunciado tiene abogado y está molesto.'] },
      { id: 'reg', cells: ['Regularizar las horas extra pagadas «por planilla aparte» en la UCI', 'Sin registro, es una contingencia.'] },
      { id: 'cuadro', cells: ['Revisar el cuadro de categorías después de lo de la pestaña 3', 'Ley 30709.'] },
      { id: 'fiesta', cells: ['Organizar la fiesta de fin de año de Gestión Humana', 'Doris ya pidió cotizaciones.'] },
      { id: 'logo', cells: ['Rediseñar el logo del área para la intranet', 'Comunicaciones insiste.'] },
    ],
    score: { aus: 3, kiara: 3, reg: 3, cuadro: 2, fiesta: 0, logo: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : -1 },
        flags: [q === 'buena' ? 'pendientes_bien' : 'pendientes_flojos'], cartera: { semana3: q === 'buena' ? 'Semana 3: ausentismo, protección y registro de horas extra' : 'Semana 3 con prioridades discutibles' },
        out: q === 'buena' ? 'Tres post-its pasan a la columna «Lunes». El de la fiesta lo dejas para Doris, que de todas formas ya tiene tres cotizaciones.' : 'La agenda del lunes se llena, aunque algo de lo que ya prometiste queda para después.',
        pro: { ok: 'Lo primero es lo que sostiene lo que ya firmaste y a quien ya protegiste.', info: 'El cuadro de categorías puede ir en la semana 4, pero que tenga fecha.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Lo firmado, primero. ¡Así!' : '¿Y lo que ya prometiste?'],
      };
    },
    rules: [[LEY, 'Las empresas mantienen o elaboran cuadros de categorías y funciones acordes con la Ley 30709 (art. 2).'], [LEY, 'El sobretiempo se registra (D.S. 007-2002-TR, art. 10-A).']],
    mirada: {
      ve: 'Después de una crisis, lo más fácil es volver a lo cotidiano. Pero los acuerdos firmados, las medidas de protección y las contingencias que descubriste son los que, si se descuidan, convierten un buen cierre en el próximo problema.',
      visual: { tipo: 'matriz', x: 'Urgencia', y: 'Lo que ya comprometiste', cuadrantes: ['Lunes', 'Esta semana', 'Delegar', 'Después'], items: [['Plan de ausentismo', .7, .9], ['Medidas de protección', .8, .95], ['Horas extra sin registro', .6, .8], ['Cuadro de categorías', .4, .6], ['Fiesta', .5, .1], ['Logo', .3, .05]] },
    },
  },
  {
    id: 'j3', t: '13:00', ch: 'llamada', who: null, titulo: 'Cerrar el ciclo', banner: 'assets/foto/llamada.webp', show: ['personas', 'confianza'],
    body: () => `<p>Almuerzas un menú de la esquina en tu escritorio: ají de gallina y chicha morada. Entre bocado y bocado, haces cuatro llamadas que no están en ninguna agenda.</p>`,
    type: 'calls',
    calls: [['Lic. Gladys Tello', 'Contesta: UCI de Los Olivos', 'Dos chicas aceptaron horas extra esta semana porque se las ofrecieron. Ofrecidas, no puestas. Nunca pensé que eso cambiara tanto el ambiente.'], ['Mariela Tang', 'Contesta: Desarrollo', 'Las formadoras senior empiezan en enero. Una de ellas lloró cuando le conté. Treinta años y nadie le había pedido enseñar.'], ['Lic. Nora Huamán', 'Contesta: Sindicato', 'Licenciada, una cosa: si el abogado de Ugaz dice que esto es del sindicato, nosotras lo vamos a desmentir. Kiara vino a mí como compañera, no como afiliada.'], ['Kiara Saavedra', 'No contesta: está en turno']],
    prompt: 'Antes de colgar con la última, ¿qué haces con lo que escuchaste?',
    choices: [
      { id: 'a', label: 'Mandar a Kiara un mensaje corto para cuando salga del turno, y agradecer a Gladys por escrito, con copia a la gerente de su clínica.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, flags: ['cierre_personas'],
          envia: ['kiara', 'Kiara, solo para decirte que sigo pendiente. Las medidas siguen vigentes. Si algo cambia o recibes cualquier mensaje, escríbeme. Que descanses este fin de semana.'],
          out: 'Gladys te responde con un emoji de brazo fuerte. Su gerente de clínica lo reenvía a todo el equipo de la UCI. Kiara, a las 7, solo pone un corazón.',
          pro: { ok: 'Reconocer a quien cambió y acompañar a quien sigue en un proceso difícil también es gerencia.', info: 'Lo que dijo Nora sobre Kiara anótalo en el expediente: es relevante si el abogado insiste.' },
          kusi: ['feliz', 'Lo pequeño también sostiene lo grande.'] } },
      { id: 'b', label: 'Anotar todo para el informe mensual y seguir con lo urgente.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: 0 },
          out: 'Las notas quedan en tu libreta. Gladys no se entera de que su cambio llegó hasta la gerencia.',
          pro: { ok: 'Ganas tiempo.', risk: 'Un cambio que nadie reconoce tiende a desaparecer.' },
          kusi: ['pensando', 'Un gracias a tiempo vale mucho.'] } },
    ],
    mirada: {
      ve: 'Las crisis se cierran con documentos, pero se recuerdan por las personas. Llamar a quienes cambiaron algo, y a quien todavía está en medio de un proceso, es lo que convierte dos semanas difíciles en una cultura distinta.',
    },
  },
  {
    id: 'j4', t: '16:30', ch: 'whatsapp', who: null, titulo: 'Para el equipo', banner: 'assets/foto2/aplausos-verde.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>${F.has('equipo_en_escena') ? 'Ayer tu equipo presentó al directorio por primera vez.' : 'Ayer tu equipo esperó afuera de la sala.'} Hoy es viernes y nadie se ha ido a casa antes de las 7 en dos semanas.</p><p>Escribes en el grupo. <mark class="clave">Es el último mensaje de estas dos semanas</mark>.</p>`,
    type: 'compose', enviaA: 'jefaturas', para: 'Para: GH · Jefaturas', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Lo que lograron', ops: [
        { id: 'q1', t: 'En dos semanas: cero despidos, una huelga evitada, un acuerdo firmado y un plan aprobado. Lo hicimos los cuatro.', ok: true },
        { id: 'q2', t: 'Gracias por el apoyo a mi propuesta.', ok: false, por: '«Mi propuesta» borra el trabajo de tu equipo.' },
      ] },
      { id: 'hoy', t: 'Hoy', ops: [
        { id: 'h1', t: 'Hoy se van a las 4. Es una orden, la única de la semana 😄', ok: true },
        { id: 'h2', t: 'Descansen el fin de semana, pero tengan el celular a mano.', ok: null, por: 'Realista, pero no es descanso.' },
      ] },
      { id: 'lunes', t: 'El lunes', ops: [
        { id: 'l1', t: 'El lunes a las 8:30, reunión de pie como siempre. Viene una carta y un director médico nuevo: lo vemos juntos.', ok: true, por: 'Anticipas sin alarmar.' },
        { id: 'l2', t: 'El lunes viene algo grave. No les cuento ahora para que descansen.', ok: false, por: 'Así nadie descansa.' },
      ] },
    ],
    res: sel => {
      const malas = ['q2', 'l2'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas ? (malas === 2 ? 'riesgosa' : 'aceptable') : sel.hoy === 'h1' ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'riesgosa' ? -3 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { equipo: q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'A las 4:05, el piso 7 está vacío. Jorge manda una foto desde el colegio de sus hijos. Silvia, desde la combi a Villa El Salvador. Mariela, con su gato.' : 'El grupo responde con pulgares. Alguien se queda hasta las 8 por si acaso.',
        pro: { ok: 'Reconocer como logro de todos, cuidar el descanso y anticipar el lunes sin alarmar.', info: 'Lo que tu equipo aprendió de ti en estas dos semanas lo repetirá con sus propios equipos.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡A casa a las 4! ¡Qué bacán!' : 'El descanso también se lidera.'],
      };
    },
    mirada: {
      ve: 'Liderar líderes también es enseñarles a cerrar un ciclo: nombrar lo logrado como de todos, cuidar el descanso después de la presión y anticipar lo que viene sin cargarlo de miedo.',
    },
  },
  {
    id: 'j5', t: '17:45', ch: 'correo', who: null, titulo: 'El aviso de las seis menos cuarto', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'etica', 'confianza'],
    mail: { from: 'Estudio Benavides & Lira · Abogados', to: 'Gerencia de Gestión Humana; Gerencia General', asunto: 'Aviso de carta notarial' },
    body: (n, F) => `<p>El lunes se les notificará <mark class="clave">carta notarial</mark>: el Dr. Ugaz cuestiona la conformación de la instancia investigadora y las medidas dispuestas en su contra, y se reserva acciones legales «contra quienes resulten responsables».</p><p>${F.has('acta_limpia') ? 'Piensas en el acta que corregiste el lunes: hechos, medidas, reserva.' : 'Piensas en el acta del lunes y en lo que quedó escrito.'} ${F.has('testigos_expuestos') ? 'Y en las identidades que ya entregaste.' : ''}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Citar a Legal el lunes a las 8, ordenar hoy el expediente (acta, medidas, intercambio con el abogado), mantener las medidas y avisarle a Kiara solo que el procedimiento sigue y que estás pendiente.',
        res: { q: 'buena', fx: { cumplimiento: 4, etica: 4, confianza: 2 }, flags: ['carta_preparada'], responde: 'Fernando: cito a Legal el lunes a las 8. Hoy dejo el expediente ordenado. Las medidas se mantienen mientras estén sustentadas. A Kiara solo le diré que el procedimiento sigue.',
          out: 'Te quedas hasta las 6:40 ordenando una carpeta sin rótulo. Cuando la cierras, todo lo que hiciste en la semana está ahí, con fecha y con su razón. Respiras.',
          pro: { ok: 'Una carta notarial no cambia los hechos: se responde con un expediente en orden.', risk: 'Viene una semana de presión legal.', info: 'No le cargues a Kiara el detalle de la carta: no le corresponde.' },
          kusi: ['animo', 'Expediente en orden, conciencia tranquila.'] } },
      { id: 'b', label: 'Proponer a Fernando levantar las medidas mientras se aclara, para no darle argumentos al abogado.',
        res: { q: 'riesgosa', fx: { etica: -5, personas: -4 }, flags: ['carta_cede'], responde: 'Fernando: propongo levantar las medidas mientras se aclara lo de la carta.',
          out: 'Fernando responde: «¿Y Kiara?». Te quedas mirando la pantalla. No tienes respuesta.',
          pro: { ok: 'Reduces la tensión con el abogado.', risk: 'Una carta notarial no es una razón para dejar expuesta a la denunciante.' },
          kusi: ['preocupado', '¿Una carta y ya cedemos?'] } },
      { id: 'c', label: 'Responder hoy mismo al estudio con una carta firme, defendiendo todo lo actuado.',
        res: { q: 'aceptable', fx: { confianza: 1, cumplimiento: -1 }, responde: 'Fernando: voy a responderle hoy al estudio con una carta firme.',
          out: 'Fernando te frena: «Ni una palabra sin Legal. El lunes». Tiene razón: una respuesta en caliente es un regalo para el abogado.',
          pro: { ok: 'Defiendes lo actuado.', risk: 'Responder sin asesoría y sin ver la carta es actuar a ciegas.' },
          kusi: ['pensando', 'Primero la carta, después la respuesta.'] } },
    ],
    rules: [[LEY, 'El procedimiento de la Ley 27942 y su Reglamento garantiza el derecho de defensa del denunciado y la protección de la víctima.'], [BP, 'Ante una carta notarial: expediente en orden, asesoría legal y ninguna respuesta en caliente.']],
    mirada: {
      ve: 'Cuando el denunciado es poderoso, el procedimiento será atacado. Lo que lo protege no es la firmeza del discurso, sino la calidad de lo que se hizo: un acta limpia, medidas sustentadas y una instancia imparcial. Esta historia no termina hoy.',
      visual: { tipo: 'linea', titulo: 'Lo que viene', hitos: [['Lunes 8:00', 'Llega la carta notarial'], ['Lunes 8:00', 'Llega el Dr. Valcárcel, director médico interino'], ['Lunes', 'Reunión con Legal'], ['Enero', 'Mesa con enfermería'], ['Junio', 'Indicadores']] },
    },
  },
  {
    id: 'j6', t: '18:45', ch: 'presencial', who: null, titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/caminan.webp', lugar: 'Ascensor del piso 9', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Fernando te alcanza en el ascensor con el saco en el brazo. Es la «última cosa» que te iba a decir en la mañana. ${F.has('doris_cuidada') ? 'Abajo, Doris se despide con una bolsa de pan para Mateo.' : ''}</p><p>«Diez días decidiendo cosas que tienen nombre y apellido. Recortes, un sindicato, una denuncia, un directorio, y el lunes una carta. <mark class="clave">¿Te ves en este puesto?</mark>»</p>`,
    type: 'choice',
    choices: [
      { id: 'si', label: 'Sí. Me gusta estar en la mesa donde se decide, y que las personas no sean una línea de Excel.',
        res: { q: null, fx: { confianza: 2 }, flags: ['te_ves_si'],
          out: 'Fernando sonríe. «Entonces el lunes a las 8 con Legal. Y trae tus tres criterios: los vamos a necesitar.»',
          kusi: ['celebra', '¡Qué bacán! La Semana 3 te espera.'] } },
      { id: 'otro', label: 'Me gusta Gestión Humana, pero me veo más en un rol como el de Silvia o el de Jorge, más cerca de un tema.',
        res: { q: null, fx: { confianza: 1 }, flags: ['te_ves_otro'],
          out: 'Fernando asiente: «La gerencia no es para todos, y está bien saberlo. Pero el lunes te necesito aquí: hay una carta que responder».',
          kusi: ['curioso', 'Saber dónde quieres estar también es un logro.'] } },
      { id: 'duda', label: 'Todavía no lo sé. Fueron diez días que pesaron mucho.',
        res: { q: null, fx: { personas: 1 }, flags: ['te_ves_duda'],
          out: 'Fernando se ríe. «Es lo más honesto que me han dicho en un ascensor. Nadie sabe en diez días. Ven el lunes y lo seguimos viendo.»',
          kusi: ['pensando', 'Dudar también es una respuesta.'] } },
    ],
    mirada: {
      ve: 'La gerencia de Gestión Humana es uno de los puestos más exigentes del área: te sientas con finanzas y con el directorio, lideras a líderes y respondes a la vez por costos, clima, cumplimiento y reputación. Algunas personas descubren aquí que quieren esa mesa; otras, que prefieren un rol más cerca de un tema. Las dos respuestas están bien. Y esta historia sigue: el lunes llega una carta notarial y un director médico nuevo.',
      visual: { tipo: 'balanza', a: { t: 'Lo que cuesta', items: ['Decisiones con nombre y apellido', 'Presión desde arriba y desde abajo', 'Rendir cuentas por todo'] }, b: { t: 'Lo que da', items: ['Estar donde se decide', 'Proteger a 3,000 personas', 'Un equipo que crece contigo'] } },
    },
  },
];
