// Asistente de Selección · Capítulo 8 · «El rechazo» · Semana 2, miércoles · Clínica del Misti, Arequipa.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 29733 (datos personales): los datos se usan para la finalidad para la que se recogieron; para guardarlos en un banco
//   de candidatos con otra finalidad se pide consentimiento; no se publican listas con DNI. Capítulo 1.
// - Ley 26772: no discriminación en el acceso al empleo. Capítulo 2.

export const CAP = {
  n: 8, titulo: 'El rechazo', dia: 'Semana 2, miércoles', foto: 'assets/foto2/acuerdo-manos.webp', lugar: 'Clínica del Misti · Arequipa',
  inicio: '07:30', fin: '18:40', cierreHora: '18:25',
  apertura: 'Miércoles. Las últimas entrevistas terminan a las 4. Hay 58 recomendadas para 60 puestos, y más de 300 personas que no siguen. Hoy hay que decírselo a todas, sin que ninguna se entere por un silencio.', boton: 'Abrir el correo',
  kusi: 'Un «no» bien dicho también es parte de un buen proceso. ¡Dale!',
  lead: 'Escribiste un «no» claro y humano, ordenaste el cierre para que nadie se enterara mal, cuidaste los datos de quienes siguen y de quienes no, y explicaste un rechazo sin dar falsas esperanzas.',
  reflexion: '¿Cómo te gustaría que te dijeran que no?',
  siguiente: { n: 9, titulo: 'Los papeles del ingreso', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'tecnicas', p: '60 técnicas de enfermería', j: 'Milena · Selección', d: 0, e: '58 recomendadas' },
  { id: 'rechazos', p: 'Mensajes a no seleccionadas', j: 'Tú', d: 0, e: 'Más de 300' },
  { id: 'banco', p: 'Banco de candidatas', j: 'Tú', d: 0, e: 'Por definir' },
  { id: 'lista', p: 'Lista de seleccionadas', j: 'Linares', d: 0, e: 'Pide publicarla' },
];

export const FUTURO = {
  rechazo_respetuoso: ['El mensaje de cierre fue claro, a tiempo y con un agradecimiento real.', 'Algunas volverán a postular.'],
  rechazo_frio: ['El mensaje de cierre fue seco o confuso.', 'Las redes de la clínica lo van a notar.'],
  cierre_ordenado: ['Primero se confirmó a las seleccionadas y luego se avisó al resto.', 'Nadie se enteró por otra persona.'],
  banco_consentido: ['Solo guardas en el banco a quienes aceptaron.', 'Tienes 46 reservas con permiso.'],
  lista_protegida: ['La lista de seleccionadas no se publicó con DNI.', 'Linares recibió otra forma de anunciarlo.'],
  lista_publica: ['La lista con nombres y DNI quedó pegada en el mural.', 'Alguien le tomó foto.'],
  explicacion_honesta: ['Le explicaste a una postulante por qué no siguió, sin ofender ni prometer.', 'Sabrá qué mejorar.'],
};

export const CHATS = {
  milena: { n: 'Milena Cáceres', sub: 'Analista de Selección', who: 'milena' },
  sor: { n: 'Sor Elena Paz', sub: 'Jefa de Enfermería', who: 'sor' },
  difusion: { n: 'No seleccionadas · lista de difusión', sub: '312 contactos', c: '#B5651D' },
  linares: { n: 'Dr. Fernando Linares', sub: 'Gerente de Operaciones', c: '#8C5A3C' },
  angel: { n: 'Ángel Mamani', sub: 'Postulante', who: 'angel' },
  ruth: { n: 'Ruth Calderón', sub: 'Candidata', who: 'ruth' },
};

export const WSP = [
  { chat: 'milena', t: '07:30', de: 'Milena', txt: 'Hoy es día de decir que no 💛 Regla: nadie se entera por un silencio, ni por el chisme de otra.' },
  { chat: 'sor', t: '08:10', de: 'Sor Elena', txt: 'El muchacho Mamani: la Lic. Rosario dice que contó un caso de fiebre muy bien. Que venga mañana al piso a conocer a su equipo.', si: 'angel_pregunta' },
  { chat: 'sor', t: '08:10', de: 'Sor Elena', txt: 'El muchacho Mamani no respondió en la entrevista. Lo dejamos en reserva, hija.', si: 'angel_cortado' },
  { chat: 'ruth', t: '16:15', de: 'Ruth', txt: 'Me llegó el correo. Sigo en el proceso. No sé ni qué decir. Gracias.', si: 'ruth_escuchada' },
  { chat: 'linares', t: '17:00', de: 'Dr. Linares', txt: 'Está bien. Que el anuncio sea en la inducción entonces. Pero que se vea 🎉', si: 'lista_protegida' },
];

export const CORREOS = [
  { t: '07:40', de: 'Milena Cáceres', para: 'Asistente de Selección', asunto: 'Números del cierre', html: '<p>Recomendadas por Enfermería: 58. Reserva: 46. No siguen: 312, de las cuales 40 llegaron a entrevista. Primero confirmamos a las 58; después avisamos al resto, hoy mismo.</p><p>Milena</p>' },
  { t: '11:20', de: 'Dr. Fernando Linares', para: 'Selección', asunto: 'Lista', html: '<p>Peguen la lista de seleccionadas con nombre y DNI en el mural de la entrada y súbanla al Facebook de la clínica. Que la gente vea que estamos creciendo.</p><p>F. Linares</p>' },
];

export const QUIZ = [
  { q: '¿Qué debe tener un buen mensaje de «no»?', ops: ['Solo «gracias por participar»', 'Que no sigue, un agradecimiento real, y si se guarda o no su CV, con su permiso', 'Las notas de su entrevista', 'Un «quizás más adelante» para todas'], ok: 1, por: 'Claridad, respeto y transparencia sobre sus datos.' },
  { q: '¿En qué orden se cierra una convocatoria?', ops: ['Primero las no seleccionadas', 'Primero confirmar a las seleccionadas, luego avisar al resto el mismo día', 'Todas a la vez sin confirmar', 'No avisar a las no seleccionadas'], ok: 1, por: 'Si avisas antes de confirmar, puedes quedarte sin reemplazos o dar información equivocada.' },
  { q: 'Para guardar el CV de alguien en un banco de candidatos para futuras convocatorias…', ops: ['No hace falta nada', 'Se le pide su consentimiento', 'Se guarda para siempre', 'Se publica'], ok: 1, por: 'Ley 29733: usar los datos para otra finalidad requiere consentimiento.' },
  { q: 'Gerencia pide publicar la lista de seleccionadas con DNI. ¿Qué propones?', ops: ['Hacerlo', 'Anunciar el crecimiento sin datos personales, o con nombres solo si ellas aceptan', 'Publicar solo los DNI', 'Mandarla al grupo de WhatsApp'], ok: 1, por: 'Publicar DNI no tiene que ver con la finalidad para la que se recogieron (Ley 29733).' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'h1', t: '07:50', ch: 'documento', who: null, titulo: 'Cómo se dice que no', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de Selección', show: ['personas', 'calidad', 'cumplimiento'],
    body: () => `<p>Milena te pide el mensaje para las que no siguen. Irá por correo y por lista de difusión. El del año pasado decía: «Su perfil no se ajusta a nuestros requerimientos. Atte. RR.HH.».</p><p><mark class="clave">Arma el mensaje nuevo</mark>.</p>`,
    type: 'compose', enviaA: 'difusion', para: 'Para: No seleccionadas (312)', boton: 'Guardar el mensaje',
    prompt: 'Arma el mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'noticia', t: 'La noticia', ops: [
        { id: 'n1', t: 'Hola, [nombre]. Gracias por postular a técnica(o) de enfermería en la Clínica del Misti. Esta vez no continúas en el proceso.', ok: true, por: 'Claro desde la primera línea.' },
        { id: 'n2', t: 'Hola. Tras un exhaustivo análisis de su perfil, lamentamos informarle que en esta oportunidad…', ok: false, por: 'Frío y largo: la noticia llega al final.' },
      ] },
      { id: 'porque', t: 'Lo que puedes decir', ops: [
        { id: 'p1', t: 'Recibimos más de 400 postulaciones para 60 puestos y elegimos según título, experiencia en hospitalización y los resultados de las evaluaciones.', ok: true, por: 'Explicas el criterio general sin exponer a nadie.' },
        { id: 'p2', t: 'No te preocupes, seguro a la próxima sí 😊', ok: false, por: 'Promesa que no puedes cumplir.' },
      ] },
      { id: 'datos', t: 'Tus datos', ops: [
        { id: 'd1', t: 'Si quieres que guardemos tu CV para futuras convocatorias, responde «SÍ». Si no respondes, lo eliminaremos al cierre del proceso.', ok: true, por: 'Pides consentimiento y dices qué pasa si no responde.' },
        { id: 'd2', t: 'Tu CV queda en nuestra base de datos.', ok: false, por: 'Sin pedir permiso para otra finalidad.' },
      ] },
    ],
    res: sel => {
      const malas = ['n2', 'p2', 'd2'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas === 0 ? 'buena' : malas === 1 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, cumplimiento: sel.datos === 'd1' ? 4 : -3 },
        flags: [q === 'riesgosa' ? 'rechazo_frio' : 'rechazo_respetuoso'].concat(sel.datos === 'd1' ? ['banco_consentido'] : []),
        cartera: { rechazos: q === 'riesgosa' ? 'Mensaje frío o confuso' : 'Mensaje claro y humano', banco: sel.datos === 'd1' ? 'Con consentimiento' : 'Sin consentimiento' },
        out: q === 'buena' ? 'Milena lo lee en voz alta y no le cambia nada. «Así me hubiera gustado que me dijeran que no a mí.»' : q === 'aceptable' ? 'El mensaje sirve, aunque una parte va a generar preguntas.' : 'Milena suspira: «Esto nos va a traer comentarios en Facebook».',
        pro: { ok: 'Noticia primero, criterio general y transparencia con sus datos.', risk: 'Las promesas vagas generan llamadas y frustración.', info: 'Personaliza al menos el nombre. Un «Estimado postulante» se siente como un número.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un no que respeta!' : 'Revisa esa frase.'],
      };
    },
    rules: [[LEY, 'Ley 29733: para guardar un CV con otra finalidad, se pide consentimiento.']],
    mirada: { ve: 'Las postulantes de hoy son las pacientes, las vecinas y las postulantes de mañana. Un «no» claro y a tiempo cuida la reputación de la clínica más que cualquier campaña.', visual: { tipo: 'cambio', titulo: 'El «no» de antes y el de ahora', pares: [['«Su perfil no se ajusta…»', 'Esta vez no continúas'], ['Sin explicación', 'Criterio general'], ['Su CV queda en la base', '¿Quieres que lo guardemos?']] } },
  },
  {
    id: 'h2', t: '09:30', ch: 'documento', who: null, titulo: 'El orden del cierre', banner: 'assets/esc/reloj.webp', show: ['calidad', 'tiempo', 'personas'],
    body: () => `<p>Si avisas mal, una postulante en reserva se entera de que no pasó antes de que sepas si la necesitas. O una seleccionada se entera por el chisme de otra.</p><p><mark class="clave">Ordena el cierre</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del cierre. Usa las flechas.', boton: 'Guardar el orden',
    items: [
      { id: 'conf', t: 'Confirmar con Sor Elena la lista final de 58 recomendadas', por: 'La decisión es de Enfermería.' },
      { id: 'sel', t: 'Llamar a las seleccionadas y pedirles que confirmen su interés hoy', por: 'Así sabes si alguien se cae.' },
      { id: 'res', t: 'Avisar a las de reserva que están en espera, con fecha', por: 'Que no se queden adivinando.' },
      { id: 'no', t: 'Enviar el mensaje a las que no siguen, ese mismo día', por: 'Nadie se entera por un silencio.' },
      { id: 'datos', t: 'Guardar solo los CV con consentimiento y eliminar el resto al cierre', por: 'Datos para su finalidad.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'riesgosa' ? -2 : 2 }, flags: q === 'riesgosa' ? [] : ['cierre_ordenado'],
        out: q === 'buena' ? 'A las 11, 56 de las 58 ya confirmaron. Dos no contestan todavía. El mensaje de «no» sale a las 5.' : 'Milena corrige: «Si avisas a las de reserva antes de confirmar, te quedas sin a quién llamar».',
        pro: { ok: 'El orden evita que alguien se entere mal o que te quedes sin reemplazos.', info: 'Pon una hora de envío para el «no» y cúmplela.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Cierre sin sorpresas!' : 'El orden protege.'],
      };
    },
    mirada: { ve: 'Un cierre ordenado protege a tres grupos a la vez: a las seleccionadas, a las de reserva y a las que no siguen. El desorden siempre lo paga alguien que se entera por WhatsApp.', visual: { tipo: 'flujo', titulo: 'El cierre', pasos: ['Lista final', 'Seleccionadas', 'Reserva', 'No siguen', 'Datos'] } },
  },
  {
    id: 'h3', t: '11:30', ch: 'correo', who: null, titulo: 'La lista en el mural', banner: 'assets/foto2/aplausos-verde.webp', show: ['cumplimiento', 'etica', 'confianza'],
    mail: { from: 'Dr. Fernando Linares', to: 'Selección', asunto: 'Lista' },
    body: () => `<p>Linares quiere la lista de seleccionadas <mark class="clave">con nombre y DNI</mark> en el mural de la entrada y en el Facebook de la clínica. Es un gerente con presión de la junta de accionistas: quiere que se vea que el piso nuevo es real.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle otra forma: una publicación de bienvenida sin datos personales («60 nuevas técnicas se suman al piso 4») y una foto grupal en la inducción, solo de quienes acepten salir.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 2 }, flags: ['lista_protegida'], cartera: { lista: 'Bienvenida sin DNI; foto con permiso' },
          responde: 'Doctor, el DNI no se puede publicar: se recogió para la selección. Le propongo una bienvenida en Facebook sin datos personales y una foto grupal en la inducción, solo con quienes acepten. Se ve igual de grande, y sin riesgo.',
          out: 'Linares tarda una hora. Al final responde por WhatsApp que está bien, «pero que se vea».',
          pro: { ok: 'Le das lo que de verdad quiere, mostrar crecimiento, sin exponer a nadie.', info: 'Pide el permiso de la foto por escrito.' },
          kusi: ['animo', 'Lo que quiere, sin el riesgo.'] } },
      { id: 'b', label: 'Pegar la lista con nombre y DNI: es una buena noticia y el gerente lo pidió.',
        res: { q: 'riesgosa', fx: { cumplimiento: -6, etica: -3 }, flags: ['lista_publica'], cartera: { lista: 'Pegada con DNI en el mural' },
          responde: 'Listo, doctor. Ya está en el mural.',
          out: 'A las 3, una de las seleccionadas te escribe: «Mi expareja vio mi nombre en la lista. No quería que supiera dónde trabajo».',
          pro: { ok: 'Cumples rápido.', risk: 'Un DNI y un lugar de trabajo publicados pueden poner en riesgo a alguien.' },
          kusi: ['preocupado', 'Una buena noticia también puede exponer.'] } },
    ],
    rules: [[LEY, 'Ley 29733: los datos de la selección se usan para la selección; no se publican.']],
    mirada: { ve: 'Para Linares, una lista es una buena noticia. Para alguien que se escapa de una pareja violenta, es una dirección. Por eso los datos personales se usan solo para lo que se recogieron.', visual: { tipo: 'balanza', a: { t: 'Lista con DNI', items: ['Se ve el crecimiento', 'Expone a 58 personas', 'Ilegal'] }, b: { t: 'Bienvenida sin datos', items: ['Se ve el crecimiento', 'Foto con permiso', 'Nadie expuesto'] } } },
  },
  {
    id: 'h4', t: '13:40', ch: 'llamada', who: null, titulo: '«¿Por qué no?»', banner: 'assets/foto/llamada.webp', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Doris Quispe llegó a la entrevista y no quedó. Llama a Selección antes de que salga el mensaje: una amiga suya ya fue confirmada. ${F.has('cierre_ordenado') ? '' : 'Se enteró por el grupo de su promoción.'}</p><p>«Señorita, solo quiero saber por qué. <mark class="clave">¿Fue porque tengo dos hijos?</mark>» En su nota de entrevista dice que en el caso clínico no mencionó avisar a la enfermera.</p>`,
    type: 'calls',
    calls: [
      ['Doris Quispe', 'Voz tensa, un niño de fondo', '«En la entrevista me preguntaron si podía hacer noches y dije que sí. Mi mamá me cuida a los chicos. ¿Entonces por qué no?»'],
    ],
    prompt: '¿Qué le respondes?',
    choices: [
      { id: 'a', label: 'Decirle que sus hijos no fueron parte de la decisión, explicarle el criterio en que no alcanzó (en el caso clínico se esperaba avisar a la enfermera) y preguntarle si quiere estar en el banco para la próxima.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3, etica: 2 }, flags: ['explicacion_honesta'],
          out: 'Doris se queda callada. «Ah… es cierto, no dije lo de la enfermera. Pensé que era obvio.» Dice que sí al banco y te agradece que le digas algo concreto.',
          pro: { ok: 'Un motivo concreto, ligado al puesto, sin leerle sus notas.', risk: 'Puede no estar de acuerdo, y está bien.', info: 'No leas las notas textuales: resume el criterio.' },
          kusi: ['animo', 'Verdad útil, sin herir.'] } },
      { id: 'b', label: 'Decirle que fue una decisión de Enfermería y que no puedes dar detalles.',
        res: { q: 'aceptable', fx: { personas: -2, confianza: -1 },
          out: 'Doris cuelga convencida de que fue por sus hijos. Esa noche lo comenta en el grupo de su promoción.',
          pro: { ok: 'No te expones.', risk: 'El silencio deja crecer la peor explicación.' },
          kusi: ['pensando', 'Sin explicación, ella pone la suya.'] } },
      { id: 'c', label: 'Decirle que no se preocupe, que seguramente la llamarán cuando alguna renuncie.',
        res: { q: 'riesgosa', fx: { personas: 1, confianza: -3 },
          out: 'Doris se queda esperando una llamada que quizá no llegue. Llamará cada semana.',
          pro: { ok: 'La calmas.', risk: 'Una falsa esperanza duele más que un no claro.' },
          kusi: ['preocupado', 'Eso no lo puedes prometer.'] } },
    ],
    rules: [[BP, 'Explica el motivo ligado al puesto, en general, sin leer las notas ni prometer.']],
    mirada: { ve: 'Doris pregunta por sus hijos porque es lo que siempre teme. Responder con el criterio real, ligado al puesto, la saca de esa duda y le da algo que puede mejorar. Eso solo es posible porque las notas tienen hechos.' },
  },
  {
    id: 'h5', t: '15:30', ch: 'sistema', who: null, titulo: 'El Excel del banco', banner: 'assets/esc/planilla.webp', lugar: 'Carpeta de Selección', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Abres el Excel «BANCO_TECNICAS_final_final2.xlsx» que heredó Selección del año pasado. Ahí van a ir las reservas de hoy.</p><p>La columna «Observaciones» tiene comentarios de hace un año. <mark class="clave">Marca lo que no debería estar</mark>.</p>`,
    type: 'flag', prompt: 'Marca las observaciones que no deberían estar en el banco.',
    doc: { t: 'BANCO_TECNICAS_final_final2.xlsx', sub: 'Pestaña «Hoja1 (2)» · columna Observaciones' },
    lines: [
      { id: 'o1', t: 'Gladys Torres · 18 años en hospitalización · disponible para noches.' },
      { id: 'o2', t: 'Rosmery Huamán · «vieja, no creo que aguante».', bad: LEY, why: 'Juicio por edad. Discriminatorio.' },
      { id: 'o3', t: 'Liz Pari · «problemática, reclamó por su CTS en su anterior trabajo».', bad: BP, why: 'Reclamar un derecho no es un antecedente negativo.' },
      { id: 'o4', t: 'Mario Condori · «tiene VIH, ojo».', bad: LEY, why: 'Dato de salud sensible. No debe estar en un banco ni usarse para decidir.' },
      { id: 'o5', t: 'Sandra Vilca · en reserva 2025, aceptó que guardemos su CV.' },
      { id: 'o6', t: 'Sin fecha de consentimiento en 140 filas.', duda: 'Sin consentimiento registrado, esos CV no deberían seguir en el banco.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : hitsBp ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -5 : 5, etica: missLey ? -3 : 4 },
      flags: missLey ? [] : ['banco_consentido'], cartera: { banco: missLey ? 'Banco con datos sensibles' : 'Banco limpio: solo con consentimiento' },
      out: missLey ? 'Limpias algunas filas, pero un dato de salud sigue en un Excel que abre medio departamento.' : `Borras ${hitsLey + (hitsBp || 0)} observaciones y propones a Milena eliminar las 140 filas sin consentimiento. Ella dice: «Por fin alguien se atreve».`,
      pro: { ok: 'Un banco de candidatas es útil solo si es justo y legal.', risk: 'Un comentario viejo sigue decidiendo por ti años después.', info: 'Pon fecha de consentimiento y fecha de eliminación en cada fila.' },
      kusi: missLey ? ['preocupado', 'Ese dato no puede quedarse ahí.'] : ['celebra', '¡Banco limpio!'],
    }),
    rules: [[LEY, 'Ley 29733: los datos de salud son sensibles; los CV se guardan con consentimiento.'], [LEY, 'Ley 26772: no se discrimina por edad.']],
    mirada: { ve: 'Los Excel heredados son el lugar donde más prejuicios sobreviven: nadie los escribió hoy, pero se usan hoy. Limpiarlos es tan importante como hacer bien una entrevista.' },
  },
  {
    id: 'h6', t: '17:40', ch: 'presencial', who: 'milena', titulo: 'Las cinco de la tarde', banner: 'assets/foto2/celebra-papel.webp', lugar: 'Oficina de Selección', show: ['confianza', 'personas'],
    body: (n, F) => `<p>A las 5 en punto sale el mensaje a las 312. ${F.has('rechazo_respetuoso') ? 'En media hora llegan once respuestas: «gracias por avisar», «es la primera vez que me responden».' : 'En media hora llegan preguntas y un par de quejas.'}</p><p>Milena se estira en su silla. «Mañana empieza lo que nadie ve: <mark class="clave">los papeles del ingreso</mark>. Las seleccionadas todavía no son trabajadoras.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Leer en voz alta las respuestas de «gracias por avisar».',
        res: { q: null, fx: { personas: 2, confianza: 2 }, rel: { milena: 1 }, out: 'Milena sonríe. «Guárdalas. En los días malos, sirven.» Copia una en un post-it y la pega en tu monitor.', kusi: ['feliz', 'Gracias por un «no». ¡Eso es raro!'] } },
      { id: 'b', label: 'Preguntarle qué es lo más difícil del ingreso.',
        res: { q: null, fx: { confianza: 2 }, rel: { milena: 1 }, out: '«Los exámenes médicos. Siempre hay alguien sin cita, y sin examen no entra.» Anotas «exámenes» en tu libreta y lo subrayas dos veces.', kusi: ['curioso', 'Mañana: exámenes médicos.'] } },
    ],
    mirada: { ve: 'Cerrar bien una convocatoria es la última impresión que la clínica deja en cientos de personas. Hoy fue buena, o al menos honesta.' },
  },
];
