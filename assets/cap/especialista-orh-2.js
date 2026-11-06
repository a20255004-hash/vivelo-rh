// Especialista en RR.HH. de entidad pública · Capítulo 2 · «Las bases» · Semana 1, martes.
// Hilo de las dos semanas: el concurso CAS de 12 plazas de una municipalidad provincial de Cajamarca, hasta su publicación.
// Normas citadas:
// - Ley 26772, modificada por la Ley 27270: las ofertas de empleo no pueden contener requisitos que constituyan
//   discriminación, anulación o alteración de la igualdad de oportunidades o de trato. Reglamento: D.S. 002-98-TR.
//   https://faolex.fao.org/docs/pdf/per201903.pdf  ·  https://natlex.ilo.org/dyn/natlex2/r/natlex/fe/details?p3_isn=46908
// - D.Leg. 1057 (acceso al CAS por concurso público de méritos), ya citado en el capítulo 1.
// - Ley 29973 (bonificación del 15 % a personas con discapacidad), ya citada en el capítulo 1.

export const CAP = {
  n: 2, titulo: 'Las bases', dia: 'Semana 1, martes', foto: 'assets/foto/revisa.webp',
  lugar: 'Municipalidad Provincial · Cajamarca',
  inicio: '08:00', fin: '17:30', cierreHora: '17:20',
  apertura: 'Martes. Amaneció con neblina sobre el cerro Santa Apolonia y en la ORH todavía nadie se saca la chompa. Don Segundo ya puso el agua para el café en el hervidor que está prohibido.', boton: 'Abrir las bases',
  kusi: 'Unas bases son las reglas del juego. Si una regla deja fuera a alguien sin razón, el juego ya está torcido.',
  lead: 'Revisaste las bases del concurso anterior, separaste los requisitos que discriminan de los que el puesto sí necesita, conversaste con un jefe de área sobre lo que de verdad pide su trabajo y perseguiste los perfiles que faltaban.',
  reflexion: '¿Qué requisito de un aviso de empleo te ha parecido injusto alguna vez? ¿Tenía que ver con el trabajo?',
  siguiente: { n: 3, titulo: 'La certificación', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'concurso', p: 'Concurso CAS: 12 plazas', j: 'Marisol · ORH', d: 0, e: 'Publicación el jueves de la próxima semana' },
  { id: 'bases', p: 'Bases del concurso', j: 'ORH · Asesoría Legal', d: 0, e: 'Borrador copiado del año pasado' },
  { id: 'perfiles', p: 'Perfiles de puesto de las áreas', j: 'Gerencias municipales', d: 0, e: 'Faltan perfiles' },
  { id: 'presupuesto', p: 'Certificación presupuestal', j: 'Planeamiento y Presupuesto', d: 0, e: 'En trámite' },
];

export const FUTURO = {
  bases_limpias: ['Quitaste de las bases la edad, el sexo y la «buena presencia».', 'Asesoría Legal las aprobará sin observaciones en el capítulo 9.'],
  bases_a_medias: ['Dejaste pasar un requisito discriminatorio en las bases.', 'Un postulante lo notará el día de la publicación, en el capítulo 9.'],
  residencia_conocimiento: ['Cambiaste «residir en el distrito» por conocimiento de la zona, evaluado en la entrevista.', 'El regidor lo usará como argumento en el capítulo 4.'],
  residencia_quitada: ['Quitaste el requisito de residencia sin reemplazo.', 'El gerente municipal te lo reclamará en el capítulo 3.'],
  residencia_mantenida: ['Dejaste «residir en el distrito» como requisito para postular.', 'La auditora lo verá en el capítulo 7.'],
  serenazgo_funcional: ['El comandante Cabanillas aceptó un perfil de serenazgo basado en funciones, no en sexo ni en talla.', 'Te apoyará en el comité evaluador en el capítulo 6.'],
  perfil_urbano_memo: ['Pediste el perfil de ingeniero por memorando con plazo y copia al gerente municipal.', 'El gerente de Desarrollo Urbano lo enviará en el capítulo 3, de mala gana.'],
  perfil_urbano_propio: ['Redactaste tú el perfil del ingeniero a partir del manual antiguo.', 'El gerente de Desarrollo Urbano dirá que «ese no es su perfil» en el capítulo 6.'],
};

export const CHATS = {
  grupo: { n: 'ORH Municipalidad', sub: 'Marisol y el equipo', c: '#2F6B3F' },
  marisol: { n: 'Marisol Chávez', sub: 'Jefa de la ORH', who: 'marisol' },
  cabanillas: { n: 'Cmdte. (r) Wílber Cabanillas', sub: 'Subgerente de Serenazgo', c: '#1F4E79' },
  eder: { n: 'Eder Rojas', sub: 'Postulante', who: 'eder' },
};

export const WSP = [
  { chat: 'grupo', t: '07:55', de: 'Don Segundo', txt: 'Buenos días colegas. La impresora del segundo piso otra vez atasca, imprimo en Logística nomás 🙏' },
  { chat: 'eder', t: '09:10', de: 'Eder', txt: 'Buenos días señorita. Ya pedí en la empresa mi constancia con fecha de inicio y de fin. ¿Cuándo sale el concurso nuevo?', si: 'eder_atendido' },
  { chat: 'marisol', t: '12:45', de: 'Marisol', txt: 'Estoy en reunión con el gerente municipal hasta las 2. Avanza las bases y no me esperes para almorzar.' },
  { chat: 'cabanillas', t: '14:20', de: 'Cmdte. Cabanillas', txt: 'Recibido. Lo converso con mi gente. Pero conste que yo quiero personal que aguante la noche.', si: 'serenazgo_funcional' },
  { chat: 'grupo', t: '16:30', de: 'Don Segundo', txt: 'Ya llegaron los perfiles de Rentas y de Fiscalización. Están en la bandeja, con sello y todo.' },
];

export const CORREOS = [
  { t: '08:05', de: 'Marisol Chávez', para: 'Especialista de la ORH', asunto: 'Bases del CAS 005-2026', html: '<p>Te dejo en la carpeta compartida las bases del CAS 004-2026. Úsalas como punto de partida, pero no las copies tal cual: el año pasado nadie las revisó con calma.</p><p>Quiero un borrador limpio para mandarlo a Asesoría Legal antes del viernes.</p><p>Marisol</p>' },
  { t: '15:10', de: 'Subgerencia de Serenazgo', para: 'ORH', asunto: 'Perfil del puesto: sereno (4 plazas)', html: '<p>Se remite el perfil del puesto de sereno. Requisitos: varón, talla mínima 1.70 m, edad entre 20 y 35 años, licenciado de las FF.AA. de preferencia.</p><p>Atentamente, Cmdte. (r) Wílber Cabanillas.</p>', no: 'serenazgo_funcional' },
];

export const QUIZ = [
  { q: '¿Qué dice la Ley 26772 sobre las ofertas de empleo?', ops: ['Que pueden pedir lo que el empleador quiera', 'Que no pueden contener requisitos que discriminen o alteren la igualdad de oportunidades', 'Que solo se aplica a empresas privadas', 'Que la edad máxima es 35 años'], ok: 1, por: 'La Ley 26772, modificada por la Ley 27270, prohíbe requisitos discriminatorios en las ofertas de empleo.' },
  { q: 'Las bases de un puesto de sereno piden «varón de 1.70 m». ¿Qué haces?', ops: ['Lo dejas: es tradición', 'Lo cambias por las funciones y por una evaluación de aptitud ligada al trabajo', 'Pides 1.75 m', 'Lo quitas y no pones nada'], ok: 1, por: 'El requisito debe venir de lo que el puesto exige hacer, no del sexo ni de la talla.' },
  { q: '¿Qué requisito sí es objetivo para un ingeniero civil?', ops: ['Buena presencia', 'Título profesional y colegiatura habilitada', 'Tener menos de 40 años', 'Ser del distrito'], ok: 1, por: 'La formación y la habilitación profesional se pueden verificar con documentos.' },
  { q: 'Una constancia de trabajo no dice cuándo terminó. ¿Qué deben decir las bases?', ops: ['Nada', 'Que la experiencia se acredita con documentos que indiquen fecha de inicio y de fin', 'Que se acepta igual', 'Que se llama al empleador anterior'], ok: 1, por: 'Si las bases lo dicen claro, nadie se cae por un detalle que no conocía.' },
  { q: 'El alcalde quiere «trabajo para los cajamarquinos». ¿Qué es lo más defendible?', ops: ['Exigir residir en el distrito para postular', 'Evaluar el conocimiento de la zona cuando el puesto lo necesita, sin excluir a nadie de entrada', 'Dar 20 % extra a los vecinos', 'No publicar fuera de Cajamarca'], ok: 1, por: 'Un concurso público está abierto a todos. Lo que el puesto necesita se evalúa, no se usa como filtro de entrada.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '08:20', ch: 'documento', who: null, titulo: 'Las bases del año pasado', banner: 'assets/esc/lupa.webp', lugar: 'Tu escritorio, junto a la ventana empañada', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>Abres el archivo «BASES CAS 004-2026 FINAL (2) corregido.docx». Tiene el logo viejo de la municipalidad y comentarios de alguien que firmaba «JR».</p><p>${F.has('eder_atendido') ? 'Piensas en Eder: se cayó por una constancia sin fecha de término. Buscas si las bases lo decían. ' : ''}<mark class="clave">Marca lo que no puede volver a salir así</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que incumplen la ley o que no se pueden defender frente a un postulante.',
    doc: { t: 'Bases del Concurso CAS 004-2026', sub: 'Municipalidad Provincial · Oficina de Recursos Humanos' },
    lines: [
      { id: 'edad', t: 'Requisito general: tener entre 18 y 35 años de edad.', bad: LEY, why: 'Un límite de edad que el puesto no justifica deja fuera a personas por una condición que no tiene que ver con el trabajo (Ley 26772).' },
      { id: 'presencia', t: 'Requisito para asistentes administrativos: buena presencia.', bad: LEY, why: '«Buena presencia» no se puede medir de forma objetiva y suele esconder discriminación por apariencia.' },
      { id: 'varon', t: 'Puesto de sereno: sexo masculino.', bad: LEY, why: 'Excluir a las mujeres de una plaza sin que el trabajo lo exija altera la igualdad de oportunidades (Ley 26772).' },
      { id: 'ing', t: 'Ingeniero civil: título profesional, colegiatura y habilitación vigente.' },
      { id: 'publico', t: 'Experiencia mínima de dos años, solo en el sector público.', bad: BP, why: 'Si el trabajo es el mismo, excluir la experiencia en el sector privado deja fuera a buenos candidatos sin explicar por qué.' },
      { id: 'constancia', t: 'La experiencia se acredita con documentos que indiquen fecha de inicio y de término.' },
      { id: 'bonif', t: 'Bonificación del 15 % a personas con discapacidad acreditada, sobre el puntaje final.' },
      { id: 'entrev', t: 'Peso de la entrevista personal: 70 % del puntaje total.', duda: 'No es ilegal, pero una entrevista que pesa tanto deja mucho espacio a la subjetividad. Conviene que el puntaje curricular pese más o que la entrevista tenga criterios escritos.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? `Marcas ${hitsLey} de los tres requisitos discriminatorios. Uno se te pasó y seguirá en el borrador que va a Asesoría Legal.` : `Encuentras los tres requisitos discriminatorios${hitsBp ? ' y la experiencia solo pública' : ''}. Don Segundo se asoma a tu pantalla: «Eso de la buena presencia lo puso un gerente de hace años. Nadie lo sacó nunca».`,
      flags: [missLey ? 'bases_a_medias' : 'bases_limpias'],
      cartera: { bases: missLey ? 'Borrador con un requisito discriminatorio' : 'Borrador limpio de requisitos discriminatorios' },
      pro: { ok: 'Cada requisito debe poder explicarse con lo que el puesto hace.', risk: 'Un requisito discriminatorio expone a la entidad a una denuncia y deja fuera a quien merecía la plaza.', info: 'Fíjate que la regla de las constancias sí estaba. Lo que faltó en el caso de Eder fue explicarla.' },
      kusi: missLey ? ['preocupado', 'Uno se escapó… y va a salir publicado.'] : ['celebra', '¡Ojo de auditora! Bases más justas.'],
    }),
    rules: [[LEY, 'Ley 26772, modificada por la Ley 27270: las ofertas de empleo no pueden tener requisitos que discriminen o alteren la igualdad de oportunidades.'], [LEY, 'Ley 29973: bonificación del 15 % a personas con discapacidad en concursos públicos.']],
    mirada: {
      ve: 'Las bases viejas se copian año tras año y nadie se pregunta de dónde salió cada requisito. Leerlas con ojos nuevos es una de las cosas más útiles que puede hacer alguien recién llegado.',
      visual: { tipo: 'cambio', titulo: 'De la costumbre a la función', pares: [['Entre 18 y 35 años', 'Sin límite de edad'], ['Buena presencia', 'Atención al público, evaluada en la entrevista'], ['Sexo masculino', 'Aptitud para turnos de patrullaje'], ['Solo experiencia pública', 'Experiencia en funciones similares']] },
      normas: [{ ley: 'Ley 26772, modificada por la Ley 27270 (Reglamento: D.S. 002-98-TR)', dice: 'Las ofertas de empleo no pueden contener requisitos que constituyan discriminación o alteren la igualdad de oportunidades o de trato.', practica: 'Las bases de un concurso público son una oferta de empleo: lo que piden debe tener que ver con el trabajo.' }],
    },
  },
  {
    id: 'b2', t: '09:45', ch: 'presencial', who: null, titulo: 'El comandante de serenazgo', banner: 'assets/foto/entrevista.webp', lugar: 'Tu escritorio en la ORH', show: ['personas', 'calidad', 'confianza'],
    body: () => `<p>El comandante (r) Wílber Cabanillas entra sin tocar, con su casaca azul de serenazgo y el walkie-talkie prendido. Tiene 61 años, treinta en el Ejército y seis cuidando las calles de Cajamarca.</p><p>«Me dicen que usted quiere sacar lo de varones. Señorita, <mark class="clave">mis serenos salen a las dos de la mañana a separar borrachos en la Vía de Evitamiento</mark>.» Tienes tiempo para dos preguntas.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces al comandante.',
    opts: [
      { id: 'turno', label: '«¿Qué hace un sereno en un turno de noche, paso a paso?»', info: '«Patrulla a pie y en camioneta, llama a la comisaría, reporta por radio, hace primeros auxilios hasta que llega la ambulancia y, a veces, contiene a alguien hasta que llega la policía. Y escribe el parte, que eso nadie quiere hacer.»' },
      { id: 'serenas', label: '«¿Ha trabajado con serenas antes?»', info: 'Se rasca la cabeza. «Tuve dos, con otra modalidad. Rosa, de Baños del Inca, era la mejor para calmar a la gente en la feria del domingo. Se fue porque le ofrecieron algo fijo.»' },
      { id: 'prueba', label: '«¿Cómo sabe hoy si alguien aguanta el trabajo?»', info: '«Por el físico, pues. Pero la verdad, el que más aguanta no siempre es el más grande. Lo que quiero es que corra, que no se asuste y que sepa hablar.»' },
      { id: 'mande', label: '«¿Y si mejor me dice a quiénes quiere y vemos cómo los ponemos?»', info: 'El comandante te mira serio. «No, señorita. Yo pido personal, no nombres. Si eso se sabe, me sacan a mí también.» Se va algo incómodo.' },
    ],
    res: picks => {
      const mal = picks.includes('mande');
      return {
        q: null, fx: { personas: mal ? -2 : 3, calidad: mal ? -3 : 4, etica: mal ? -4 : 1 }, flags: mal ? [] : ['serenazgo_funcional'],
        cartera: { perfiles: mal ? 'Perfil de sereno sin cambios' : 'Perfil de sereno: funciones y prueba de aptitud' },
        out: mal ? 'El comandante se va sin cambiar el perfil y con una idea rara de la ORH. Tu propia pregunta abrió una puerta que tú misma tendrías que cerrar.' : 'Acuerdan reescribir el perfil: funciones del turno, una prueba de aptitud física igual para todas las personas y capacidad para redactar un parte. «Eso sí me sirve», dice al salir.',
        kusi: mal ? ['sorpresa', '¡Hasta él supo decir que no!'] : ['feliz', 'Preguntaste por el trabajo, no por la persona.'],
      };
    },
    rules: [[BP, 'Antes de quitar o poner un requisito, pregunta qué hace realmente la persona en ese puesto.']],
    mirada: {
      ve: 'El comandante no es machista por maldad: repite lo que siempre funcionó en su mundo. Cuando le preguntas por el trabajo en lugar de discutir, él mismo descubre que lo que necesita es aptitud, no un sexo ni una talla.',
      visual: { tipo: 'flujo', titulo: 'Del prejuicio al perfil', pasos: ['¿Qué hace en el turno?', '¿Qué debe saber hacer?', '¿Cómo se comprueba?', 'Prueba igual para todos'] },
    },
  },
  {
    id: 'b3', t: '11:10', ch: 'presencial', who: 'marisol', titulo: '«Trabajo para los cajamarquinos»', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Oficina de Marisol', show: ['cumplimiento', 'etica', 'confianza'],
    body: () => `<p>Marisol vuelve de la gerencia con cara de pocos amigos. «El alcalde prometió en campaña trabajo para los cajamarquinos. Las bases viejas decían "residir en el distrito" y el gerente quiere que se quede.»</p><p>Te muestra la lista: fiscalizadores, serenos, asistentes, el ingeniero. <mark class="clave">«¿Qué hacemos con eso? Dame una propuesta que yo pueda defender.»</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Quitar la residencia como requisito. Un concurso público es para todos.',
        res: { q: 'aceptable', fx: { cumplimiento: 4, etica: 3, confianza: -2 }, rel: { marisol: 0 }, flags: ['residencia_quitada'], cartera: { bases: 'Sin requisito de residencia' },
          out: 'Marisol asiente, pero suspira: «Tienes razón en el fondo. Ahora yo tengo que explicarle al gerente por qué ya no está y no le estoy dando nada a cambio».',
          pro: { ok: 'Nadie queda excluido por el lugar donde vive.', risk: 'Hay puestos donde conocer la ciudad sí importa, y esa necesidad queda sin respuesta.' },
          kusi: ['pensando', 'Legal, sí. ¿Y la necesidad real?'] } },
      { id: 'b', label: 'Para fiscalizadores y serenos, evaluar el conocimiento de la ciudad en la entrevista, sin excluir a nadie al postular.',
        res: { q: 'buena', fx: { cumplimiento: 3, calidad: 4, confianza: 2 }, rel: { marisol: 1 }, flags: ['residencia_conocimiento'], cartera: { bases: 'Residencia reemplazada por conocimiento de la zona' },
          out: 'Marisol lo anota: «Eso sí lo puedo defender. Un fiscalizador tiene que saber dónde queda el mercado Central y cómo llegar a la Colmena. Pero ojo: la pregunta de la entrevista tiene que ser igual para todos».',
          pro: { ok: 'Conviertes una exclusión en algo que el puesto sí necesita y que se puede evaluar.', risk: 'Si la pregunta queda abierta, puede volverse una puerta para favorecer a los «conocidos».', info: 'Escribe la pregunta y lo que se espera de la respuesta en las bases.' },
          kusi: ['animo', 'Lo que importa se evalúa, no se usa para cerrar la puerta.'] } },
      { id: 'c', label: 'Dejar «residir en la provincia» solo para serenos y fiscalizadores, que trabajan en la calle.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, etica: -2, confianza: 2 }, flags: ['residencia_mantenida'], cartera: { bases: 'Residencia como requisito en dos puestos' },
          out: 'Marisol lo duda, pero lo acepta: el gerente quedará contento. Una enfermera de Jaén que vive en Cajamarca hace dos meses quedaría fuera por su DNI.',
          pro: { ok: 'Parece un punto medio.', risk: 'Sigue siendo un filtro de entrada que no mide si la persona puede hacer el trabajo.' },
          kusi: ['preocupado', 'Un DNI no dice si alguien conoce la ciudad.'] } },
    ],
    rules: [[LEY, 'El acceso al CAS es por concurso público de méritos (D.Leg. 1057).'], [BP, 'Lo que el puesto necesita se evalúa con criterios escritos; no se usa como filtro para dejar a gente fuera.']],
    mirada: {
      ve: 'Detrás de la promesa del alcalde hay algo legítimo: que el servidor conozca la ciudad que sirve. El trabajo de ORH es traducir esa necesidad a algo que se pueda medir igual para todos.',
      visual: { tipo: 'matriz', x: 'Riesgo legal', y: 'Responde a la necesidad del área', cuadrantes: ['Defendible y útil', 'Útil pero riesgoso', 'Seguro pero corto', 'Riesgoso y poco útil'], items: [['Conocimiento evaluado', .2, .8], ['Quitarlo sin más', .1, .3], ['Residencia en la provincia', .75, .55]] },
    },
  },
  {
    id: 'b4', t: '13:40', ch: 'whatsapp', who: null, titulo: 'El mensaje al comandante', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio, con un caldo verde en táper', show: ['personas', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>Almuerzas en tu escritorio el caldo verde que te mandó tu mamá en el táper. ${F.has('serenazgo_funcional') ? 'Quedaste en mandarle al comandante el nuevo perfil por escrito.' : 'El comandante no cambió el perfil, pero tú tienes que decirle qué va a salir en las bases.'}</p><p>Él lee todo en el celular, con letra grande. <mark class="clave">Claro, corto y sin tecnicismos</mark>.</p>`,
    type: 'compose', enviaA: 'cabanillas', para: 'Para: Cmdte. (r) Wílber Cabanillas · Subgerente de Serenazgo', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'cambio', t: 'Lo que cambia', ops: [
        { id: 'c1', t: 'Comandante, el perfil de sereno ya no pedirá sexo, talla ni edad máxima.', ok: true, por: 'Directo y sin rodeos.' },
        { id: 'c2', t: 'Comandante, por temas legales hay que sacar algunas cositas del perfil.', ok: false, por: '«Cositas» y «temas legales» no le dicen qué cambia ni por qué.' },
      ] },
      { id: 'pide', t: 'Lo que sí se pedirá', ops: [
        { id: 'p1', t: 'Sí se pedirá una prueba de aptitud física igual para todos y redactar un parte de ocurrencia.', ok: true, por: 'Le muestras que su necesidad sigue cubierta.' },
        { id: 'p2', t: 'Usted después en la entrevista puede ver si le sirven o no.', ok: false, por: 'Le sugiere que puede decidir a su gusto en la entrevista.' },
      ] },
      { id: 'ayuda', t: 'Lo que le pides', ops: [
        { id: 'a1', t: '¿Me ayuda a definir la prueba física? Usted conoce el trabajo mejor que nadie.', ok: true, por: 'Lo haces parte de la solución.' },
        { id: 'a2', t: 'Cualquier duda, que le explique Asesoría Legal.', ok: null, por: 'Correcto, pero lo deja fuera.' },
      ] },
    ],
    res: sel => {
      const mal = sel.cambio === 'c2' || sel.pide === 'p2', buenas = ['c1', 'p1', 'a1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, calidad: mal ? -3 : 3, cumplimiento: mal ? -2 : 2 },
        flags: q === 'buena' ? ['cabanillas_aliado'] : [],
        out: q === 'buena' ? 'El comandante responde con un audio de dos minutos: propone correr 1,200 metros, una prueba de reacción y redactar un parte. «Para todos igual, ¿ya?».' : mal ? 'El comandante responde «ya, conforme». Entendió que en la entrevista él decide. Eso traerá problemas.' : 'El comandante responde «recibido». No se siente parte de nada.',
        pro: { ok: 'Explicas el cambio y le das un rol para que la prueba tenga sentido.', risk: 'Un mensaje vago deja espacio para que cada quien lo entienda a su manera.', info: 'La prueba física debe estar escrita en las bases, con el mismo estándar para todas las personas.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'preocupado' : 'pensando', q === 'buena' ? '¡Lo sumaste al equipo!' : mal ? 'Esa frase le dio una llave que no es suya.' : 'Le faltó sentirse parte.'],
      };
    },
    rules: [[BP, 'Las pruebas de un concurso se escriben antes, con el mismo estándar para todas las personas.']],
    mirada: {
      ve: 'Al jefe de área no le interesa la ley: le interesa que su gente pueda hacer el trabajo. Cuando ve que el nuevo perfil cuida eso, deja de pelear y empieza a ayudar.',
      visual: { tipo: 'mensaje', titulo: 'Qué cambia, qué se mantiene', txt: 'El perfil ya no pedirá sexo, talla ni edad máxima. Sí se pedirá una prueba de aptitud física igual para todos y redactar un parte. ¿Me ayuda a definir la prueba?' },
    },
  },
  {
    id: 'b5', t: '15:20', ch: 'llamada', who: null, titulo: 'Los perfiles que faltan', banner: 'assets/foto2/callcenter.webp', lugar: 'Teléfono fijo de la ORH', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: () => `<p>El teléfono fijo de la ORH tiene el cable enredado y suena como radio vieja. Llamas a las gerencias que no mandaron su perfil de puesto.</p><p><mark class="clave">Sin perfil, no hay bases</mark>. Y sin bases, no hay publicación el jueves de la próxima semana.</p>`,
    type: 'calls',
    calls: [['Rentas · asistente de la gerencia', 'Contesta al tercer timbre', '«Ya lo mandamos con el practicante esta mañana. ¿No le llegó? Debe estar en mesa de partes, ahí todo demora.»'], ['Fiscalización · subgerenta Karen Díaz', 'Contesta desde un operativo', '«Ay, perdón, se me pasó. Le mando el del año pasado, es el mismo. Bueno, ahora fiscalizamos también los mototaxis, póngale eso.»'], ['Desarrollo Urbano · secretaria del Ing. Lucio Terrones', 'Contesta y te deja en espera', '«El ingeniero dice que el perfil lo hace él personalmente, que necesita alguien con experiencia en obras por administración directa. Que no le apuren, que está en una obra en Mollepampa.»']],
    prompt: 'Terminaste las llamadas. El perfil del ingeniero es el más atrasado. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Pedirle a Marisol un memorando a Desarrollo Urbano con plazo hasta el jueves y copia al gerente municipal.',
        res: { q: 'buena', fx: { cumplimiento: 4, tiempo: 2, confianza: 1 }, rel: { marisol: 1 }, flags: ['perfil_urbano_memo'], cartera: { perfiles: 'Memorando a Desarrollo Urbano con plazo' },
          out: 'Marisol firma el memorando a las 4:40. «El ingeniero se va a picar, pero el perfil tiene que ser suyo. Si lo hacemos nosotras, después dice que no es lo que pidió.»',
          pro: { ok: 'El área es responsable de su perfil; tú pones el plazo por escrito.', risk: 'El gerente puede tomarlo como una presión.', info: 'Revisa lo que mande: un perfil «hecho personalmente» a veces está hecho a la medida de alguien.' },
          kusi: ['animo', 'Por escrito y con plazo. ¡Así se hace!'] } },
      { id: 'b', label: 'Redactar tú el perfil a partir del manual de funciones antiguo y mandárselo para que lo firme.',
        res: { q: 'aceptable', fx: { tiempo: 3, calidad: -1, cumplimiento: -1 }, flags: ['perfil_urbano_propio'], cartera: { perfiles: 'Perfil del ingeniero redactado por la ORH' },
          out: 'Lo tienes listo a las 5. El manual es de 2014 y no dice nada de obras por administración directa. Lo mandas igual, con un «para su validación».',
          pro: { ok: 'Ganas tiempo.', risk: 'Un perfil escrito por la ORH sin el área puede no reflejar lo que la plaza necesita, y el área puede desconocerlo.' },
          kusi: ['pensando', 'Rápido… pero ¿es el perfil que el área necesita?'] } },
    ],
    mirada: { ve: 'En el Estado, una buena parte del trabajo de ORH es perseguir a otras áreas. Lo que no está escrito y con plazo, se queda en la bandeja de alguien.' },
  },
  {
    id: 'b6', t: '17:05', ch: 'correo', who: null, titulo: 'El borrador para Asesoría Legal', banner: 'assets/esc/escritorio.webp', show: ['cumplimiento', 'calidad', 'confianza'],
    mail: { from: 'Marisol Chávez · Jefa de la ORH', to: 'Especialista de la ORH', asunto: 'RE: Bases del CAS 005-2026' },
    body: (n, F) => `<p>¿Cómo vamos? ${F.has('bases_limpias') ? 'Vi tus comentarios en el borrador. Bien.' : 'Vi que avanzaste el borrador.'} Asesoría Legal pide que le mandemos las bases con un cuadro de cambios frente a las del año pasado.</p><p>¿Lo mandamos hoy o lo revisas otra vez mañana? <mark class="clave">Tú decides</mark>.</p><p>Marisol</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Mandarlo hoy, con el cuadro de cambios y una nota: «faltan los perfiles de Desarrollo Urbano y Fiscalización».',
        res: { q: 'buena', fx: { tiempo: 3, cumplimiento: 3, confianza: 2 }, rel: { marisol: 1 }, cartera: { bases: 'Enviadas a Asesoría Legal con cuadro de cambios' },
          responde: 'Marisol: te adjunto el borrador de las bases del CAS 005-2026 con el cuadro de cambios frente a las del CAS 004. Retiramos los requisitos de edad, sexo y buena presencia, y cambiamos el perfil de sereno a funciones con prueba de aptitud. Faltan los perfiles de Desarrollo Urbano y Fiscalización.',
          out: 'El doctor Chilón, de Asesoría Legal, contesta a las 5:25: «Recibido. Lo reviso el jueves». Al menos ya está en su bandeja.', kusi: ['feliz', 'Avanzar con lo que falta dicho. ¡Bien!'] } },
      { id: 'b', label: 'Revisarlo otra vez mañana temprano: prefieres que llegue completo.',
        res: { q: 'aceptable', fx: { calidad: 2, tiempo: -3 }, cartera: { bases: 'Borrador por revisar' },
          responde: 'Marisol: prefiero revisarlo mañana temprano y mandarlo completo.',
          out: 'Marisol responde «ok». Asesoría Legal tiene tres expedientes antes que el tuyo. Cada día cuenta.', kusi: ['pensando', 'Perfecto mañana… o bueno hoy.'] } },
    ],
    mirada: { ve: 'En el Estado, el expediente avanza por bandejas. Mandar a tiempo lo que tienes, diciendo con claridad lo que falta, suele ser mejor que esperar a tenerlo todo.' },
  },
];
