// Practicante profesional en una ORH del Estado · Capítulo 4 · «El concurso» · Semana 1, jueves.
// Hilo: el concurso CAS 012-2026 (dos plazas de Asistente Administrativo) recibe 41 expedientes; los revisas con las bases en la mano.
// Normas citadas:
// - D.Leg. 1057, régimen especial de Contratación Administrativa de Servicios: el acceso es por concurso público de méritos.
//   Su reglamento (D.S. 075-2008-PCM) y las bases de cada entidad fijan las etapas: la evaluación curricular y la entrevista son obligatorias.
//   Ejemplos de bases publicadas: https://hegb.gob.pe/creacion/docs/convocatorias/002_2023_CONCURSO_CAS_001_2023.pdf
//   https://cdn.www.gob.pe/uploads/document/file/6532302/5693975-bases-proceso-cas-n-012-2024.pdf
//   (la verificación de requisitos mínimos no da puntaje y es eliminatoria; el puntaje mínimo y los formatos los fijan las bases).
// - Ley 27815, Código de Ética de la Función Pública, se verifica en el capítulo 6; aquí solo se habla de conflicto de interés como buena práctica.
// Entidad, personas y casos son ficticios.

export const CAP = {
  n: 4, titulo: 'El concurso', dia: 'Semana 1, jueves', foto: 'assets/foto/cv-mano.webp',
  lugar: 'Sala de reuniones de la ORH · Wanchaq, Cusco',
  inicio: '08:00', fin: '17:00', cierreHora: '16:50',
  apertura: 'Jueves. Sobre la mesa de la sala de reuniones hay 41 expedientes del concurso CAS 012-2026, cada uno con una carátula y un número. Afuera, un grupo de escolares ensaya su danza para el aniversario del colegio con una banda de quenas.', boton: 'Abrir el primer expediente',
  kusi: 'Las bases son el reglamento del partido: se aplican igual a todos los jugadores.',
  lead: 'Verificaste requisitos con las bases en la mano, aplicaste la misma regla a una postulante que pudo ser la excepción, corregiste la matriz, le hablaste a Rubén de su conflicto de interés y encontraste una nota que no debía estar ahí.',
  reflexion: '¿Por qué en un concurso público importa tanto aplicar la misma regla a todos, aunque una excepción parezca justa?',
  siguiente: { n: 5, titulo: 'La tabla de puntajes', dia: 'Semana 1, viernes' },
};

export const CARTERA = [
  { id: 'concurso', p: 'Concurso CAS 012-2026 · 2 plazas', j: 'Comité de selección', d: 0, e: '41 expedientes por revisar' },
  { id: 'matriz', p: 'Matriz de verificación de requisitos', j: 'Gladys · ORH', d: 0, e: 'Rubén llenó 12' },
  { id: 'victor', p: 'Constancia del Prof. Víctor Quispe', j: 'Gladys · ORH', d: 0, e: 'Copias de la UGEL llegan el lunes' },
  { id: 'cronograma', p: 'Cronograma del concurso', j: 'Comité de selección', d: 0, e: 'Resultados de evaluación curricular el lunes' },
];

export const FUTURO = {
  lizbeth_bases: ['Aplicaste las bases a Lizbeth Condori: su declaración jurada sin firma se elevó al comité con el motivo escrito.', 'Su madre pedirá explicaciones en el capítulo 8.'],
  lizbeth_llamada: ['Llamaste a Lizbeth Condori para que viniera a firmar su declaración jurada fuera de plazo.', 'Otro postulante se enterará de la excepción.'],
  lizbeth_apta: ['Marcaste apta a Lizbeth Condori aunque su declaración jurada no estaba firmada.', 'La tabla de puntajes cargará ese error.'],
  conflicto_ruben: ['Rubén se apartó de revisar el expediente de su primo.', 'El comité valorará que se haya dicho a tiempo.'],
  ruben_sigue: ['Rubén siguió revisando expedientes, incluido el de su primo.', 'Alguien lo notará cuando se publiquen los resultados.'],
  matriz_corregida: ['Corregiste la matriz de verificación antes de entregarla.', 'El viernes la tabla de puntajes parte de datos limpios.'],
  postit_reportado: ['Le contaste a Gladys de la nota «recomendado de Gerencia» en el expediente 14.', 'El lunes alguien insistirá por ese postulante.'],
  postit_ignorado: ['Dejaste pasar la nota «recomendado de Gerencia» del expediente 14.', 'El lunes alguien insistirá por ese postulante.'],
};

export const CHATS = {
  grupo: { n: 'ORH · Equipo', sub: 'Gladys, Rubén y el equipo', c: '#2F6B3F' },
  gladys: { n: 'Gladys Huamán', sub: 'Especialista de la ORH · tu supervisora', who: 'gladys-orh' },
  ruben: { n: 'Rubén Ccahua', sub: 'Practicante', who: 'colega' },
  comite: { n: 'Comité CAS 012-2026', sub: 'Lic. Valer, Gladys y el área usuaria', c: '#5B3A8C' },
};

export const WSP = [
  { chat: 'comite', t: '08:00', de: 'Lic. Valer', txt: 'Hoy se verifican requisitos mínimos de los 41. Lo que no está en las bases no se pide ni se dispensa. Gladys coordina con las practicantes.' },
  { chat: 'ruben', t: '08:12', de: 'Rubén', txt: 'Te separé los 20 últimos, yo ya hice 12 ayer en la tarde 💪' },
  { chat: 'gladys', t: '09:00', de: 'Gladys', txt: 'La Lic. Valer está revisando las constancias vencidas que propusiste. Ya van siete.', si: 'jefa_informada' },
  { chat: 'ruben', t: '14:20', de: 'Rubén', txt: 'Ya le dije a Gladys lo de mi primo. Me pasó a foliar. Gracias por decírmelo de buena forma.', si: 'conflicto_ruben' },
  { chat: 'gladys', t: '16:55', de: 'Gladys', txt: 'La nota del expediente 14 ya está en un acta. No la toques más. Mañana hablamos.', si: 'postit_reportado' },
];

export const CORREOS = [
  { t: '08:05', de: 'Gladys Huamán', para: 'Practicante de la ORH', asunto: 'Verificación de requisitos · CAS 012-2026', html: '<p>Adjunto las bases y el perfil del puesto. La verificación de requisitos mínimos no da puntaje: es apto o no apto, y si es no apto se anota el motivo exacto según las bases.</p><p>Si un postulante te genera duda o lo conoces, me avisas antes de revisar.</p><p>Gladys</p>' },
];

export const QUIZ = [
  { q: '¿Cómo se accede a un puesto CAS?', ops: ['Por invitación', 'Por concurso público de méritos', 'Por orden de llegada', 'Por recomendación'], ok: 1, por: 'El D.Leg. 1057 establece el acceso al CAS mediante concurso público.' },
  { q: '¿Qué etapas son obligatorias en un concurso CAS?', ops: ['Solo la entrevista', 'La evaluación curricular y la entrevista', 'La prueba psicológica', 'Ninguna, la entidad decide'], ok: 1, por: 'Según el reglamento del D.Leg. 1057 y las bases, la evaluación curricular y la entrevista son obligatorias.' },
  { q: 'Una postulante no firmó su declaración jurada y las bases dicen que eso la vuelve no apta. ¿Qué haces?', ops: ['La llamas para que venga a firmar', 'Aplicas las bases, anotas el motivo y lo elevas al comité', 'La marcas apta porque es un descuido', 'Firmas por ella'], ok: 1, por: 'Las bases se aplican igual a todos. Quien decide es el comité, con el motivo por escrito.' },
  { q: 'Te toca revisar el expediente de tu primo. ¿Qué haces?', ops: ['Lo revisas con más cuidado', 'Avisas y te apartas de ese expediente', 'Lo revisas pero no le cuentas', 'Le pides a tu primo que retire su postulación'], ok: 1, por: 'Ante un conflicto de interés, se avisa y se aparta quien lo tiene.' },
  { q: '¿Puede un concurso descartar a alguien por tener 52 años si el perfil no pide edad?', ops: ['Sí, si el puesto es para jóvenes', 'No: solo se verifican los requisitos del perfil y las bases', 'Sí, si el comité lo decide', 'Solo en plazas de asistentes'], ok: 1, por: 'La verificación se hace con lo que piden el perfil y las bases. La edad no es un requisito de este perfil.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'k1', t: '08:20', ch: 'presencial', who: 'gladys-orh', titulo: 'Qué se verifica', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Sala de reuniones de la ORH', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Gladys pone las bases impresas encima de la pila. Tienen 18 páginas y el perfil del puesto está subrayado en amarillo. «Hoy no damos puntaje. Hoy solo vemos si cumple o no cumple lo mínimo.»</p><p>«A ver: <mark class="clave">¿qué se verifica en esta etapa?</mark>».</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que se verifican en los requisitos mínimos.', boton: 'Confirmar con Gladys', resumen: 'Elegiste verificar',
    cols: ['Qué revisar', 'En el expediente'],
    rows: [
      { id: 'form', cells: ['La formación que pide el perfil', 'Título técnico o grado de bachiller en Administración o afines'] },
      { id: 'exp', cells: ['La experiencia general y específica acreditada', 'Con constancias o certificados con fecha de inicio y fin'] },
      { id: 'dj', cells: ['Las declaraciones juradas que exigen las bases, firmadas', 'Sin antecedentes, sin impedimentos, sin nepotismo'] },
      { id: 'edad', cells: ['La edad del postulante', 'Para ver si «se adapta» al equipo'] },
      { id: 'foto', cells: ['La foto del CV', 'Para ver la presencia'] },
      { id: 'recom', cells: ['Si trae una carta de recomendación de alguna autoridad', 'Algunos la adjuntan'] },
    ],
    score: { form: 3, exp: 3, dj: 3, edad: -3, foto: -2, recom: -3 },
    res: (picks, sc) => {
      const q = sc >= 9 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -4, calidad: q === 'buena' ? 3 : 0, etica: picks.some(p => ['edad', 'foto', 'recom'].includes(p)) ? -3 : 1 }, rel: { 'gladys-orh': q === 'buena' ? 1 : 0 },
        out: q === 'buena' ? 'Gladys asiente: «Formación, experiencia y declaraciones. Nada más y nada menos. Lo que no está en las bases, no existe».' : 'Gladys tacha una línea con fuerza: «Eso no está en las bases. Si lo usas para descartar a alguien, el concurso se cae».',
        pro: { ok: 'Solo se verifica lo que el perfil y las bases piden.', risk: 'Usar la edad, la foto o una recomendación es discriminar o favorecer.', info: 'Las cartas de recomendación de autoridades no suman: se archivan sin efecto.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Con las bases en la mano!' : 'Eso no está en las bases…'],
      };
    },
    rules: [[LEY, 'D.Leg. 1057: el acceso al CAS es por concurso público de méritos, con las etapas que fijan su reglamento y las bases.']],
    mirada: {
      ve: 'La verificación de requisitos parece la parte aburrida del concurso. Pero es donde más se cuela la discriminación: «es muy mayor», «no tiene buena presencia», «lo recomienda el gerente». La regla de oro: si no está en las bases, no se usa.',
      visual: { tipo: 'embudo', titulo: 'CAS 012-2026', niveles: [['Expedientes recibidos', 41], ['Cumplen requisitos mínimos', 26], ['Pasan a entrevista', 8], ['Plazas', 2]] },
    },
  },
  {
    id: 'k2', t: '09:40', ch: 'documento', who: 'colega', titulo: 'La firma que falta', banner: 'assets/esc/dudas.webp', lugar: 'Expediente 22', show: ['etica', 'cumplimiento', 'personas'],
    body: () => `<p>Expediente 22: Lizbeth Condori Huillca, 24 años, técnica en Administración del instituto de Sicuani, dos años de experiencia en una cooperativa. Un expediente impecable… salvo que <mark class="clave">la declaración jurada no tiene firma</mark>. Las bases dicen, en la página 9: «sin firma, no apto».</p><p>Rubén se asoma: «Uy, qué pena. Es buenaza. ¿Y si la llamamos para que venga a firmar? Vive en el Cusco nomás».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Aplicar las bases: anotar «no apta: declaración jurada sin firma (bases, p. 9)» y elevarlo al comité, que es quien decide.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4, personas: -2 }, rel: { 'gladys-orh': 1 }, flags: ['lizbeth_bases'], cartera: { matriz: 'Exp. 22: no apta, motivo escrito y elevado al comité' },
          out: 'Te pesa la mano al escribirlo. Gladys lee tu nota: «Así. Duele, pero si la llamamos a ella, tendríamos que llamar a los otros cinco que se olvidaron algo».',
          pro: { ok: 'La misma regla para todos, con el motivo exacto por escrito.', risk: 'Una buena postulante queda fuera por un descuido.', info: 'Si las bases lo permiten, la postulante podrá pedir explicaciones o reclamar en el plazo que fijen.' },
          kusi: ['pensando', 'Justo no siempre se siente bien.'] } },
      { id: 'b', label: 'Hacerle caso a Rubén: llamarla para que venga hoy a firmar, antes de que se cierre la verificación.',
        res: { q: 'riesgosa', fx: { personas: 3, cumplimiento: -5, etica: -4 }, flags: ['lizbeth_llamada'], cartera: { matriz: 'Exp. 22: firma agregada fuera de plazo' },
          out: 'Lizbeth llega en media hora, agradecida y nerviosa, y firma en la mesa. Al salir, se cruza con otro postulante que vino a dejar un documento que olvidó: «¿A ti también te llamaron?».',
          pro: { ok: 'Le das una oportunidad a una buena postulante.', risk: 'Darle a una persona lo que no se dio a las demás rompe la igualdad del concurso y lo expone a un reclamo.' },
          kusi: ['preocupado', '¿Y a los otros cinco quién los llama?'] } },
      { id: 'c', label: 'Marcarla apta: la firma es una formalidad y todo lo demás está perfecto.',
        res: { q: 'riesgosa', fx: { personas: 2, cumplimiento: -6 }, flags: ['lizbeth_apta'], cartera: { matriz: 'Exp. 22: apta sin firma' },
          out: 'Pasas al expediente 23. La declaración sin firma sigue ahí, esperando a que alguien la mire con más cuidado que tú.',
          pro: { ok: 'No dejas fuera a alguien por un detalle.', risk: 'Una declaración jurada sin firma no declara nada. Y si otros quedaron fuera por lo mismo, es trato desigual.' },
          kusi: ['indignado', '¡Las bases no son sugerencias!'] } },
    ],
    rules: [[BP, 'Las bases se aplican igual a todos. El no apto se anota con el motivo exacto y el comité decide.']],
    mirada: {
      ve: 'Rubén tiene buen corazón y un argumento: «es buenaza». Pero en un concurso público, la bondad hacia una persona es injusticia hacia las que cumplieron, o hacia las que también se olvidaron algo y nadie llamó.',
      visual: { tipo: 'balanza', a: { t: 'La excepción', items: ['Lizbeth sigue', 'Los otros cinco no', 'Riesgo de reclamo'] }, b: { t: 'La regla para todos', items: ['Lizbeth queda fuera', 'Igualdad', 'El concurso se sostiene'] } },
    },
  },
  {
    id: 'k3', t: '11:20', ch: 'documento', who: null, titulo: 'La matriz de Rubén', banner: 'assets/esc/planilla.webp', lugar: 'Excel «Verificacion_CAS012_v2.xlsx»', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Abres la matriz que Rubén llenó ayer en la tarde, ya cansado. Doce filas, doce postulantes. Antes de sumar las tuyas, revisas las suyas.</p><p><mark class="clave">Marca las filas que no pueden quedar así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las filas con problemas.',
    doc: { t: 'Matriz de verificación de requisitos mínimos', sub: 'CAS 012-2026 · filas 1 a 12 · revisó: R. Ccahua' },
    lines: [
      { id: 'edad', t: 'Exp. 03 · Hilda Mayta, 52 años · «No apta: edad avanzada para el puesto».', bad: BP, why: 'La edad no es requisito del perfil. Descartar por edad es discriminar.' },
      { id: 'exp', t: 'Exp. 05 · Apto · Experiencia: «2 años según CV» (sin constancias adjuntas).', bad: BP, why: 'La experiencia se acredita con documentos, no con lo que dice el CV.' },
      { id: 'ok1', t: 'Exp. 06 · Apto · Bachiller en Administración · 3 constancias con fechas · DJ firmadas.' },
      { id: 'primo', t: 'Exp. 07 · Jhon Ccahua Quispe · Apto · revisó: R. Ccahua.', bad: BP, why: 'Rubén revisó el expediente de alguien con su mismo apellido. Hay que preguntar si es familiar y, si lo es, que otra persona lo revise.' },
      { id: 'ok2', t: 'Exp. 09 · No apta · Sin título técnico ni bachiller (bases, p. 5).' },
      { id: 'recom', t: 'Exp. 11 · Apto · «Adjunta carta del consejero regional: considerar».', bad: BP, why: 'Una recomendación de una autoridad no es requisito ni mérito. Se archiva sin efecto.' },
      { id: 'disc', t: 'Exp. 12 · Apto · Adjunta certificado de discapacidad.', duda: 'No es un problema: se anota para aplicar la bonificación que corresponda por ley en el puntaje final.' },
    ],
    res: ({ hitsBp, falsos }) => {
      const bien = (hitsBp || 0) >= 3 && !falsos;
      return {
        out: bien ? 'Corriges la matriz y dejas una nota en cada fila cambiada. La fila 7 la marcas en amarillo: «consultar parentesco».' : 'Corriges algunas filas. Otras pasan tal cual a la suma, con errores que alguien encontrará después.',
        flags: bien ? ['matriz_corregida'] : [], rel: { 'gladys-orh': bien ? 1 : 0 },
        cartera: { matriz: bien ? 'Filas 1 a 12 corregidas; fila 7 por consultar' : 'Filas 1 a 12 con errores' },
        pro: { ok: 'Revisar el trabajo de otro antes de sumarlo evita que un error se vuelva resultado.', risk: 'Descartar por edad o aceptar experiencia sin documentos expone el concurso a reclamos.', info: 'El certificado de discapacidad se anota ahora para no olvidarlo en la tabla de puntajes.' },
        kusi: bien ? ['celebra', '¡Matriz limpia!'] : ['pensando', 'Algo se coló…'],
      };
    },
    rules: [[BP, 'La experiencia se acredita con documentos; la edad y las recomendaciones no se evalúan; quien tiene un vínculo con un postulante no revisa su expediente.']],
    mirada: {
      ve: 'Rubén no quiso perjudicar a nadie: llenó doce filas a las seis de la tarde, cansado, con sus propias ideas sobre «quién se adapta». Por eso los concursos tienen formatos y revisiones dobles: para que el sesgo de una persona cansada no decida.',
      visual: { tipo: 'cambio', titulo: 'De la matriz de Rubén a la corregida', pares: [['«Edad avanzada»', 'Apta: cumple el perfil'], ['«2 años según CV»', 'No apto: sin constancias'], ['Revisó: R. Ccahua', 'Revisa otra persona'], ['«Considerar carta»', 'Carta sin efecto']] },
    },
  },
  {
    id: 'k4', t: '13:50', ch: 'whatsapp', who: 'colega', titulo: 'El primo de Rubén', banner: 'assets/foto2/caminan.webp', lugar: 'Patio de la sede, después del almuerzo', show: ['etica', 'confianza', 'personas'],
    body: () => `<p>Almuerzan juntos un lomo saltado en la cafetería del sótano. Rubén te cuenta que su primo Jhon también postuló, «pero solo como práctica, para ver cómo es». No parece haber notado el problema.</p><p>Prefieres escribírselo con calma. <mark class="clave">Que no suene a acusación</mark>.</p>`,
    type: 'compose', enviaA: 'ruben', para: 'Para: Rubén Ccahua · Practicante', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hecho', t: 'Lo que viste', ops: [
        { id: 'h1', t: 'Rubén, vi que revisaste el expediente 7, de Jhon Ccahua. ¿Es tu primo?', ok: true, por: 'Preguntas por el hecho, sin acusar.' },
        { id: 'h2', t: 'Rubén, eso de tu primo está feo, ¿ah?', ok: false, por: 'Juzgas antes de preguntar.' },
      ] },
      { id: 'por', t: 'Por qué importa', ops: [
        { id: 'p1', t: 'No digo que lo hayas favorecido; es que si alguien lo nota, puede dudar de todo el concurso, y de ti.', ok: true, por: 'Explicas el riesgo para él y para el proceso.' },
        { id: 'p2', t: 'Si se enteran, te botan.', ok: false, por: 'Asustar no ayuda a decidir bien.' },
      ] },
      { id: 'que', t: 'Qué propones', ops: [
        { id: 'q1', t: 'Mejor avísale a Gladys y que otra persona revise ese expediente. Yo te acompaño si quieres.', ok: true, por: 'Le das una salida digna.' },
        { id: 'q2', t: 'Yo no digo nada, pero ya no lo toques.', ok: null, por: 'Evita el problema, pero no lo resuelve: el expediente ya lo revisó él.' },
      ] },
    ],
    res: sel => {
      const mal = sel.hecho === 'h2' || sel.por === 'p2', buenas = ['h1', 'p1', 'q1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { etica: q === 'buena' ? 5 : mal ? -1 : 1, confianza: q === 'buena' ? 3 : mal ? -2 : 0, personas: q === 'buena' ? 2 : -1 }, rel: { colega: mal ? -1 : 1 },
        flags: q === 'buena' ? ['conflicto_ruben'] : ['ruben_sigue'],
        out: q === 'buena' ? 'Rubén tarda en responder. «Uf. No lo había pensado así. Ya, le digo a Gladys ahorita.»' : mal ? 'Rubén responde: «¿Me estás acusando?». No vuelve a hablarte en toda la tarde, y sigue con su pila de expedientes.' : 'Rubén responde «ok 👍». El expediente 7 queda revisado por él.',
        pro: { ok: 'Señalar un conflicto de interés con respeto ayuda a la persona y al proceso.', risk: 'Callar protege a Rubén hoy y lo expone mañana.', info: 'Tener un conflicto de interés no es una falta; ocultarlo sí puede serlo.' },
        kusi: [q === 'buena' ? 'animo' : mal ? 'triste' : 'pensando', q === 'buena' ? 'Lo cuidaste a él y al concurso.' : mal ? 'Se sintió acusado…' : 'Le faltó la salida.'],
      };
    },
    rules: [[BP, 'Quien tiene un vínculo familiar o personal con un postulante lo informa y se aparta de su evaluación.']],
    mirada: {
      ve: 'Rubén quiere pasar al CAS algún día. Si se descubre que revisó a su primo, eso lo perseguirá. Señalarlo a tiempo, como compañera y no como fiscal, es lo más leal que puedes hacer por él.',
      visual: { tipo: 'mensaje', titulo: 'Preguntar, explicar, proponer', txt: '¿Es tu primo? No digo que lo hayas favorecido, pero si alguien lo nota puede dudar de todo. Avísale a Gladys y que otra persona lo revise. Te acompaño.' },
    },
  },
  {
    id: 'k5', t: '15:00', ch: 'documento', who: 'gladys-orh', titulo: 'El cronograma', banner: 'assets/esc/reloj.webp', lugar: 'Pizarra de la sala de reuniones', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: () => `<p>Gladys borra la pizarra y te da el plumón. «El comité quiere el cronograma del concurso a la vista, para que nadie diga que no sabía. <mark class="clave">Ponlo en orden</mark>.»</p>`,
    type: 'secuencia', prompt: 'Ordena las etapas del concurso CAS 012-2026. Usa las flechas.', boton: 'Pegarlo en la pizarra',
    items: [
      { id: 'pub', t: 'Publicación de la convocatoria en Talento Perú y en el portal institucional', por: 'Para que cualquiera pueda postular.' },
      { id: 'post', t: 'Recepción de expedientes', por: 'Cerró ayer a las 16:00.' },
      { id: 'req', t: 'Verificación de requisitos mínimos: apto o no apto', por: 'Lo que hacemos hoy.' },
      { id: 'cur', t: 'Evaluación curricular con puntaje y publicación de sus resultados', por: 'Mañana y el lunes.' },
      { id: 'ent', t: 'Entrevista personal', por: 'Solo para quienes pasan la evaluación curricular.' },
      { id: 'fin', t: 'Resultados finales con bonificaciones de ley y suscripción del contrato', por: 'Al cierre.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 2 : 0 },
        cartera: { cronograma: q === 'riesgosa' ? 'Cronograma por corregir' : 'Cronograma en la pizarra: resultados curriculares el lunes' },
        out: q === 'buena' ? 'Gladys toma una foto de la pizarra para el comité. «Y cada etapa publica sus resultados. Nada se adelanta.»' : 'Gladys mueve una tarjeta: «La entrevista va después de la curricular. Si no, ¿a quién entrevistas?».',
        pro: { ok: 'Cada etapa se cierra y se publica antes de la siguiente.', info: 'Anota la fecha y hora de cada publicación: alguien preguntará por ella.' },
        kusi: [q === 'buena' ? 'feliz' : 'animo', q === 'buena' ? '¡Cronograma a la vista!' : 'Cada etapa en su turno.'],
      };
    },
    rules: [[LEY, 'D.Leg. 1057 y su reglamento (D.S. 075-2008-PCM): la evaluación curricular y la entrevista son etapas obligatorias del concurso CAS.']],
    mirada: {
      ve: 'El cronograma es una promesa pública: dice a todos los postulantes cuándo sabrán qué. Romperlo, o adelantar un resultado a uno solo, es romper esa promesa con todos los demás.',
      visual: { tipo: 'flujo', titulo: 'CAS 012-2026', pasos: ['Publicación', 'Postulación', 'Requisitos mínimos', 'Evaluación curricular', 'Entrevista', 'Resultados y contrato'], aqui: 2 },
    },
  },
  {
    id: 'k6', t: '16:30', ch: 'presencial', who: 'gladys-orh', titulo: 'La nota del expediente 14', banner: 'assets/foto/revisa.webp', lugar: 'Sala de reuniones, al guardar los expedientes', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Mientras guardas los expedientes en el armario, del 14 se cae un pósit amarillo que estaba pegado por dentro de la carátula. Dice, con letra apurada: «<mark class="clave">Recomendado de Gerencia. Ojo. F.M.</mark>».</p><p>El expediente es de Kevin Mendoza. Gladys está a dos metros, cerrando su laptop.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Mostrarle el pósit a Gladys tal como lo encontraste, sin despegarlo del todo, para que quede registrado.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 2 }, rel: { 'gladys-orh': 1 }, flags: ['postit_reportado'],
          out: 'Gladys mira el pósit un largo rato. «F.M. es Fredy Mamani, el asesor del gerente.» Lo fotografía con la cámara de la oficina, lo guarda en un sobre y escribe un acta. «Esto no cambia nada del puntaje de nadie. Pero ahora sabemos.»',
          pro: { ok: 'Lo reportas sin juzgar ni esconder, y queda constancia.', risk: 'Puede incomodar a alguien de la Gerencia.', info: 'Que una nota así quede en un acta protege al comité si luego hay presiones.' },
          kusi: ['animo', 'Lo que se ve, se registra.'] } },
      { id: 'b', label: 'Despegar el pósit y botarlo: no tiene efecto en el puntaje y así nadie se confunde.',
        res: { q: 'riesgosa', fx: { etica: -3, cumplimiento: -3 }, flags: ['postit_ignorado'],
          out: 'El pósit termina en el tacho bajo una cáscara de mandarina. Nadie sabe que existió, salvo tú y quien lo escribió.',
          pro: { ok: 'Quieres que nada influya en el puntaje.', risk: 'Desaparecer la evidencia de una presión deja al comité sin defensa si la presión vuelve.' },
          kusi: ['preocupado', 'Esa nota era una pista…'] } },
      { id: 'c', label: 'Dejarlo donde estaba y no decir nada: no te corresponde meterte con la Gerencia.',
        res: { q: 'aceptable', fx: { etica: -1 }, flags: ['postit_ignorado'],
          out: 'Vuelves a pegar el pósit en la carátula y cierras el armario. El lunes, quien abra el expediente 14 lo verá primero que el CV.',
          pro: { ok: 'Evitas un problema que no es tuyo.', risk: 'La nota queda ahí, influyendo en quien la lea.' },
          kusi: ['pensando', '¿Y quién lo verá el lunes?'] } },
    ],
    rules: [[BP, 'Toda presión o recomendación externa sobre un postulante se registra y se informa a quien conduce el concurso.']],
    mirada: {
      ve: 'La presión en el Estado rara vez llega con una orden firmada. Llega en un pósit amarillo, con iniciales. Registrarla no es denunciar a nadie: es que el comité pueda decir, el día que alguien pregunte, «esto lo vimos y no influyó».',
      visual: { tipo: 'balanza', a: { t: 'Botarlo o callar', items: ['Sin conflicto hoy', 'Sin evidencia mañana'] }, b: { t: 'Registrarlo', items: ['Un acta incómoda', 'El comité protegido', 'Transparencia'] } },
    },
  },
];
