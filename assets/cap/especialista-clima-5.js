// Analista de Clima y Cultura · Capítulo 5 · «Lo que nadie dijo» · Semana 1, viernes.
// Hilo de las dos semanas: la encuesta de clima de AseguraPlus y el área de Siniestros, que saca 42 % de favorabilidad.
// Normas citadas:
// - Ley 27942, Ley de Prevención y Sanción del Hostigamiento Sexual, y su Reglamento (D.S. 014-2019-MIMP, modificado por
//   el D.S. 021-2021-MIMP): RR.HH. dicta medidas de protección en un plazo no mayor de tres días hábiles desde la queja y
//   el empleador informa al MTPE en un plazo no mayor de seis días hábiles; los canales de queja garantizan la
//   confidencialidad de los hechos y de la identidad de la presunta víctima; principio de no revictimización.
//   https://andina.pe/AGENCIA/noticia-acoso-sexual-laboral-rotaran-o-suspenderan-su-puestos-a-hostigadores-770524.aspx
//   https://elperuano.pe/noticia/302759-hostigamiento-sexual-que-deben-hacer-las-empresas-para-prevenir-y-atender-estos-casos-en-el-trabajo
//   https://lpderecho.pe/reglamento-ley-prevencion-sancion-hostigamiento-sexual-decreto-supremo-014-2019-mimp/
// - Ley 29733 (datos personales), ya citada: lo que se registra se guarda con acceso restringido.

export const CAP = {
  n: 5, titulo: 'Lo que nadie dijo', dia: 'Semana 1, viernes', foto: 'assets/foto2/tension.webp',
  lugar: 'AseguraPlus · Sala pequeña del piso 9',
  inicio: '08:20', fin: '19:30', cierreHora: '19:00',
  apertura: 'Viernes. Llegas antes que todos. La sala pequeña del piso 9 no tiene ventana y huele a alfombra nueva. Pones dos vasos de agua, una caja de pañuelos que esperas no usar, y esperas a Lucía.', boton: 'Abrir la puerta',
  kusi: 'Hoy alguien te va a confiar algo pesado. Escuchar bien es la mitad; saber qué hacer después es la otra.',
  lead: 'Escuchaste a Lucía sin interrumpirla, le dijiste la verdad sobre lo que no podías callar, ordenaste la ruta del caso, no le diste nada a Hernán cuando vino a preguntar y llevaste todo a Sofía por el canal correcto.',
  reflexion: '¿Dónde termina la confidencialidad y dónde empieza la obligación de proteger a alguien?',
  siguiente: { n: 6, titulo: 'El canal', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'focus', p: 'Focus group de Siniestros', j: 'Cultura', d: 0, e: 'Resumen pendiente' },
  { id: 'caso', p: 'Relato de Lucía (reservado)', j: 'Sofía · RR.HH.', d: 0, e: 'Recién escuchado' },
  { id: 'alerta', p: 'Comentario sobre posible hostigamiento', j: 'Sofía · Cultura', d: 0, e: 'Coincide con el relato' },
  { id: 'supervisores', p: 'Conversación con supervisores', j: 'Sofía · Cultura', d: 0, e: 'Lunes' },
];

export const FUTURO = {
  lucia_escuchada: ['Lucía sintió que la escuchaste sin juzgarla ni presionarla.', 'Confiará en ti cuando el canal la busque.'],
  lucia_presionada: ['Le pediste a Lucía capturas y nombres de testigos ahí mismo.', 'Salió de la sala sintiéndose interrogada.'],
  limites_claros: ['Le dijiste a Lucía que lo que contó irá al canal de hostigamiento, cuidando su identidad.', 'Está asustada, pero sabe qué va a pasar.'],
  silencio_prometido: ['Le prometiste a Lucía no contarle a nadie.', 'Tienes un caso grave guardado en tu cuaderno.'],
  gonzalo_avisado: ['Le contaste a Gonzalo lo de Hernán antes de pasar por el canal.', 'Gonzalo habló con Hernán esa misma tarde.'],
  ruta_clara: ['Sabes qué pasos siguen y en qué plazos.', 'El lunes no se perderá ni un día.'],
  hernan_sin_nada: ['Hernán te preguntó por Lucía y no le confirmaste nada.', 'Lucía no queda expuesta.'],
  hernan_sospecha: ['Hernán salió de la conversación sabiendo que Lucía habló contigo.', 'Lucía necesitará protección.'],
  caso_en_canal: ['El relato llegó a Sofía y a la responsable del canal de hostigamiento antes del fin de semana.', 'El lunes empieza el procedimiento.'],
};

export const CHATS = {
  equipo: { n: 'Cultura AseguraPlus', sub: 'Sofía, Renzo y tú', c: '#2F6B3F' },
  sofia: { n: 'Sofía Ledesma', sub: 'Jefa de Cultura', who: 'sofia' },
  gonzalo: { n: 'Gonzalo Ferreyra', sub: 'Gerente de Siniestros', who: 'gerente' },
  lucia: { n: 'Lucía Ramos', sub: 'Analista de Siniestros', who: 'colaboradora' },
  hernan: { n: 'Hernán Díaz', sub: 'Supervisor de Siniestros', who: 'supervisor' },
  renzo: { n: 'Renzo Quispe', sub: 'Practicante de Psicología', c: '#7A4E9C' },
};

export const WSP = [
  { chat: 'lucia', t: '08:22', de: 'Lucía', txt: 'Ya estoy en el ascensor. Si me arrepiento, no me juzgue.' },
  { chat: 'renzo', t: '10:05', de: 'Renzo', txt: '¿Avanzo con el resumen del focus? Ya tengo los temas sin nombres 💪', si: 'notas_limpias' },
  { chat: 'gonzalo', t: '11:30', de: 'Gonzalo', txt: '¿Cómo salió el focus group? Hernán dice que su equipo está «muy manipulado».' },
  { chat: 'sofia', t: '14:50', de: 'Sofía', txt: 'Estoy en la reunión de presupuesto hasta las 4. ¿Es urgente?' },
  { chat: 'lucia', t: '18:45', de: 'Lucía', txt: 'Hernán me preguntó a la salida si fui a «chismear» al piso 9. Le dije que fui a ver lo de mi CTS.', si: 'hernan_sospecha' },
];

export const CORREOS = [
  { t: '08:00', de: 'Comunicaciones Internas', para: 'Todos los colaboradores', asunto: 'Recuerda: nuestro canal de prevención del hostigamiento sexual', html: '<p>En AseguraPlus contamos con un canal para presentar quejas por hostigamiento sexual, de manera confidencial, ante la Gerencia de Gestión Humana. La responsable del canal es la Dra. Carmen Villavicencio. También puedes acudir a cualquier persona de RR.HH.</p>' },
  { t: '16:40', de: 'Carmen Villavicencio', para: 'Sofía Ledesma; Analista de Clima y Cultura', asunto: 'Reunión reservada · lunes 8:00', html: '<p>Gracias por traerlo hoy. Nos vemos el lunes a las 8:00 en mi oficina para definir cómo nos acercamos a la practicante sin exponerla ni a ella ni a quien informó. Por favor, no comenten el tema con nadie más, incluidas las jefaturas del área.</p><p>Carmen</p>', si: 'caso_en_canal' },
];

export const QUIZ = [
  { q: 'Alguien te cuenta en privado que un supervisor envía mensajes sexuales a una practicante. Lo primero es…', ops: ['Pedirle las capturas en ese momento', 'Escuchar sin interrumpir ni juzgar', 'Llamar al supervisor', 'Decirle que exagera'], ok: 1, por: 'Lo primero es escuchar. Las pruebas las verá quien investigue, con cuidado.' },
  { q: 'La persona te pide que no le cuentes a nadie. Tú…', ops: ['Prometes silencio total', 'Le explicas que debes llevarlo al canal de la empresa, cuidando su identidad', 'Le dices que ya no es tu problema', 'Lo publicas en el informe de clima'], ok: 1, por: 'Ante un posible hostigamiento sexual, la empresa debe actuar; el canal protege la identidad de quienes hablan.' },
  { q: 'Recibida una queja de hostigamiento sexual, ¿en qué plazo dicta RR.HH. las medidas de protección?', ops: ['Treinta días', 'No mayor de tres días hábiles', 'Cuando termine la investigación', 'No hay plazo'], ok: 1, por: 'El Reglamento de la Ley 27942 fija un plazo no mayor de tres días hábiles.' },
  { q: 'El supervisor te pregunta si una analista estuvo contigo hoy. Lo mejor es…', ops: ['Confirmarlo, porque es verdad', 'No confirmar ni negar con quién hablas, y no dar explicaciones', 'Inventar una excusa elaborada', 'Contarle de qué hablaron para calmarlo'], ok: 1, por: 'Con quién habla RR.HH. también es información reservada.' },
  { q: '¿Por qué no se le cuenta primero al gerente del área?', ops: ['Porque no le importa', 'Porque puede alertar al denunciado y afectar la investigación', 'Porque no tiene permiso para saber nada nunca', 'Porque es un tema de clima'], ok: 1, por: 'El procedimiento tiene un canal propio, para proteger a la víctima y la investigación.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'l1', t: '08:30', ch: 'presencial', who: 'colaboradora', titulo: 'Lo que Lucía no dijo en el grupo', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Sala pequeña del piso 9', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Lucía se sienta sin quitarse la casaca. ${F.has('lucia_cita') ? '«Ya sé que puede que esto no quede solo entre las dos. Lo pensé toda la noche. Igual vine.»' : '«Usted me dijo que esto queda aquí, ¿no?»'}</p><p>Habla rápido, mirando el vaso: «Hay una practicante nueva, Daniela, de Pucallpa. Tiene 21 años. Hernán le escribe pasada la medianoche. Me enseñó los mensajes llorando. <mark class="clave">No son cosas de trabajo</mark>. Y le dijo que si cuenta, no le firma su constancia de prácticas».</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Lucía está nerviosa: cada pregunta cuenta.',
    opts: [
      { id: 'dani', label: '¿Cómo está Daniela ahora?', info: '«Mal. Ya no almuerza con nosotras. Viene con los ojos hinchados. Me pidió que no le diga a nadie porque necesita la constancia para titularse.»' },
      { id: 'tu', label: '¿Y tú cómo estás con todo esto?', info: 'Lucía se queda callada. Luego: «Con miedo. Hernán es mi jefe también. Si sabe que hablé, me va a hacer la vida imposible. Ya lo hace con las que le contestan».' },
      { id: 'capturas', label: '¿Me puedes mandar ahora las capturas de los mensajes?', info: '«¿Ahora? No las tengo, son del celular de Daniela… ¿me está pidiendo pruebas?» Lucía se echa para atrás en la silla.' },
      { id: 'otros', label: '¿Sabes si le ha pasado a alguien más?', info: '«Dicen que con la practicante del año pasado fue igual. Ella se fue antes de terminar.» Coincide con el comentario 187 de la encuesta.' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('capturas') ? -3 : 4, confianza: picks.includes('tu') ? 3 : 1 }, rel: { colaboradora: picks.includes('capturas') ? -1 : 1 },
      flags: [picks.includes('capturas') ? 'lucia_presionada' : 'lucia_escuchada'], cartera: { caso: 'Relato escuchado: practicante, mensajes de madrugada, amenaza con la constancia' },
      out: picks.includes('capturas') ? 'Lucía termina el relato con monosílabos. Pedir pruebas en ese momento la hizo sentir acusada.' : 'Cuando Lucía termina, se suena la nariz con un pañuelo de la caja. «Ya está. Ya lo dije.» Tú tienes un nudo en el estómago.',
      kusi: ['pensando', 'Escuchar no es investigar. Eso viene después, y no te toca a ti.'],
    }),
    mirada: {
      ve: 'Quien escucha primero no investiga: recibe. Preguntar por cómo está la persona y por quien sufre el daño abre más que pedir pruebas. Las pruebas las buscará el procedimiento, con garantías para todos.',
      visual: { tipo: 'balanza', a: { t: 'Escuchar', items: ['¿Cómo está ella?', '¿Cómo estás tú?', 'Silencio para que siga'] }, b: { t: 'Interrogar', items: ['¿Tienes pruebas?', '¿Estás segura?', '¿Por qué no lo dijiste antes?'] } },
    },
  },
  {
    id: 'l2', t: '09:00', ch: 'presencial', who: 'colaboradora', titulo: '«No le cuente a nadie»', banner: 'assets/foto2/grito.webp', lugar: 'Sala pequeña del piso 9', show: ['etica', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Lucía se pone de pie para irse y se detiene en la puerta. «Por favor, no le cuente a nadie. Daniela me mata. Y Hernán…» ${F.has('silencio_prometido') || F.has('lucia_cita_sin_limites') ? 'Te recuerda: «Usted me prometió ayer que no saldría de aquí».' : ''}</p><p><mark class="clave">Lo que respondas ahora define el resto del caso</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle con calma que no puedes callarlo, que lo llevarás hoy al canal de hostigamiento de la empresa, que su nombre y el de Daniela estarán reservados, y que nadie se acercará a Daniela sin cuidado.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, personas: 1 }, rel: { colaboradora: 0 }, flags: ['limites_claros'],
          out: 'Lucía llora un poco. «¿Y si Daniela no quiere denunciar?» Le dices que eso lo conversará con ella la persona del canal, que sabe cómo hacerlo. Al salir, te aprieta la mano.',
          pro: { ok: 'Le dices la verdad y le explicas qué la protege.', risk: 'Puede sentir que la traicionaste, sobre todo si le prometiste otra cosa antes.', info: 'Dile qué pasará y en qué orden: el miedo crece con la incertidumbre.' },
          kusi: ['animo', 'Difícil, pero honesto. Y la cuida.'] } },
      { id: 'b', label: 'Prometerle que no dirás nada hasta que Daniela decida denunciar por su cuenta.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -5 }, rel: { colaboradora: 1 }, flags: ['silencio_prometido'],
          out: 'Lucía se va aliviada. Tú te quedas con un relato grave en tu cuaderno, y con una practicante que esta noche puede recibir otro mensaje.',
          pro: { ok: 'Respetas el pedido de Lucía.', risk: 'Saber de un posible hostigamiento y no llevarlo al canal deja a la víctima sin protección y a la empresa sin actuar.' },
          kusi: ['triste', '¿Y Daniela, esta noche?'] } },
      { id: 'c', label: 'Decirle que se queda tranquila, y llamar a Gonzalo para que hable con Hernán hoy mismo.',
        res: { q: 'riesgosa', fx: { etica: -2, cumplimiento: -4, personas: -3 }, rel: { gerente: 1 }, flags: ['gonzalo_avisado'],
          out: 'Gonzalo te escucha y a las doce baja a hablar con Hernán. A las dos, Hernán sabe que alguien habló. A las tres, Daniela no vino a trabajar.',
          pro: { ok: 'Actúas rápido.', risk: 'Avisar al jefe del denunciado antes que al canal alerta al presunto hostigador y expone a la víctima.' },
          kusi: ['indignado', '¡Así no se protege a nadie!'] } },
    ],
    rules: [[LEY, 'Ley 27942 y su Reglamento: los canales de queja garantizan la confidencialidad de los hechos y de la identidad de la presunta víctima.'], [BP, 'Lo grave no se calla ni se cuenta a cualquiera: va al canal que corresponde.']],
    mirada: {
      ve: 'Confidencialidad no es silencio. En un posible caso de hostigamiento sexual, lo confidencial es quién habló y qué se dijo, pero la empresa sí debe saberlo por el canal correcto para proteger a la víctima.',
      visual: { tipo: 'cambio', titulo: 'Confidencial no es secreto', pares: [['«No le digo a nadie»', '«Va al canal, con tu nombre reservado»'], ['«Que hable el gerente con él»', '«Que actúe quien está a cargo del procedimiento»'], ['«Cuando ella quiera»', '«Hoy, y con cuidado de ella»']] },
      normas: [{ ley: 'Ley 27942 y su Reglamento (D.S. 014-2019-MIMP)', dice: 'Los canales de queja deben garantizar la confidencialidad de los hechos, de los medios probatorios y de la identidad de la presunta víctima.', practica: 'Llevar el caso al canal no expone a Lucía ni a Daniela: es justamente lo que las protege.' }],
    },
  },
  {
    id: 'l3', t: '10:15', ch: 'documento', who: null, titulo: 'La ruta del caso', banner: 'assets/esc/camino.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>Abres la política interna contra el hostigamiento sexual de AseguraPlus: 14 páginas en PDF que, sospechas, nadie del piso 6 ha leído. ${F.has('alerta_sofia') ? 'Sofía ya sabe del comentario 187; ahora tienes un relato que coincide.' : 'El comentario 187 de la encuesta ahora tiene sentido.'}</p><p>Antes de ir donde Sofía, <mark class="clave">ordena qué pasa y en qué orden</mark>, para no prometer nada que no corresponda.</p>`,
    type: 'secuencia', prompt: 'Ordena la ruta que seguirá el caso. Usa las flechas.', boton: 'Guardar la ruta',
    items: [
      { id: 'reg', t: 'Registrar hoy lo escuchado, solo hechos, en un documento reservado', por: 'Sin opiniones y con acceso restringido.' },
      { id: 'canal', t: 'Entregarlo a la responsable del canal de hostigamiento, con Sofía', por: 'Quien está a cargo del procedimiento.' },
      { id: 'acerc', t: 'Que el canal se acerque a Daniela con cuidado y le explique sus opciones', por: 'Sin revictimizarla ni obligarla a contar todo varias veces.' },
      { id: 'prot', t: 'Dictar medidas de protección en un plazo no mayor de tres días hábiles desde la queja', por: 'Por ejemplo, que Hernán deje de supervisarla.' },
      { id: 'mtpe', t: 'Informar al MTPE en un plazo no mayor de seis días hábiles', por: 'Es una obligación del empleador.' },
      { id: 'inv', t: 'Investigar escuchando a ambas partes y decidir', por: 'Con garantías también para el denunciado.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, calidad: q === 'buena' ? 3 : 0 },
        flags: q === 'riesgosa' ? [] : ['ruta_clara'], cartera: { caso: q === 'riesgosa' ? 'Ruta confusa' : 'Registro reservado y ruta clara' },
        out: q === 'buena' ? 'Escribes una hoja de hechos: fechas aproximadas, qué vio Lucía, qué dijo Daniela según Lucía. Sin adjetivos. La guardas en la carpeta restringida de RR.HH.' : 'Mezclas pasos: investigar antes de proteger, o informar antes de registrar. Sofía tendrá que ordenarlo contigo.',
        pro: { ok: 'Conocer la ruta y sus plazos evita promesas falsas y días perdidos.', risk: 'Saltarse la protección para «investigar primero» deja a la víctima expuesta.', info: 'Tú no investigas ni decides: registras, derivas y acompañas.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Ruta clara, nadie se pierde.' : 'Primero se protege, luego se investiga.'],
      };
    },
    rules: [[LEY, 'Reglamento de la Ley 27942: medidas de protección en un plazo no mayor de tres días hábiles desde la queja.'], [LEY, 'Reglamento de la Ley 27942: el empleador informa al MTPE en un plazo no mayor de seis días hábiles.'], [LEY, 'Principio de no revictimización: la víctima no debe ser obligada a repetir su relato innecesariamente.']],
    mirada: {
      ve: 'Un caso de hostigamiento sexual tiene plazos cortos y un orden claro. Quien analiza clima no investiga ni decide, pero sí puede hacer que el caso llegue al canal el mismo día y con un registro limpio.',
      visual: { tipo: 'linea', titulo: 'Los plazos del procedimiento', hitos: [['Día 0', 'Queja en el canal'], ['Hasta 3 días hábiles', 'Medidas de protección'], ['Hasta 6 días hábiles', 'Aviso al MTPE'], ['Después', 'Investigación y decisión']] },
    },
  },
  {
    id: 'l4', t: '13:10', ch: 'presencial', who: 'supervisor', titulo: 'Hernán en el comedor', banner: 'assets/foto/cafe.webp', lugar: 'Comedor del piso 3', show: ['etica', 'confianza'],
    body: () => `<p>Estás calentando tu táper de arroz con pollo en el microondas cuando Hernán se pone a tu lado. Sonríe. «Oye, me dijeron que Lucía estuvo temprano en el piso 9. <mark class="clave">¿Fue a verte a ti? ¿Pasó algo?</mark>»</p><p>El microondas marca 40 segundos.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder que en Cultura hablas con muchas personas y que no comentas con quién ni de qué, igual que no comentarías con otros si él te buscara.',
        res: { q: 'buena', fx: { etica: 5, confianza: 1 }, rel: { supervisor: 0 }, flags: ['hernan_sin_nada'],
          out: '«Ya, ya, tranquila. Era por saber.» Se va con su café. No le diste nada: ni un sí, ni un no, ni una excusa que luego no cuadre.',
          pro: { ok: 'No confirmas ni niegas, y aplicas la regla a todos, incluido él.', risk: 'Puede que sospeche igual, pero no por algo que tú dijiste.', info: 'Avísale a Sofía y al canal que Hernán preguntó por Lucía: es un dato para las medidas de protección.' },
          kusi: ['animo', 'Ni un dato. ¡Así!'] } },
      { id: 'b', label: 'Decirle que Lucía vino por un tema de su CTS, para que no sospeche.',
        res: { q: 'aceptable', fx: { etica: -1 }, flags: ['hernan_sospecha'],
          out: 'Hernán asiente. Esa tarde le pregunta a Lucía por «su tema de CTS», y ella no sabe de qué le habla. Ahora sí sospecha.',
          pro: { ok: 'Intentas protegerla.', risk: 'Una mentira que la otra persona no conoce se cae en la primera pregunta.' },
          kusi: ['preocupado', 'Las coartadas se cruzan…'] } },
      { id: 'c', label: 'Decirle que sí, que vino a contarte cosas del focus group, pero que no puedes decir qué.',
        res: { q: 'riesgosa', fx: { etica: -4, personas: -3 }, rel: { colaboradora: -1 }, flags: ['hernan_sospecha'],
          out: 'Hernán deja de sonreír. «Ah, ya.» Esa tarde, Lucía recibe tres casos extra con plazo para el lunes.',
          pro: { ok: 'No das detalles.', risk: 'Confirmar que alguien habló contigo ya la expone.' },
          kusi: ['triste', 'Con un «sí» bastó para señalarla.'] } },
    ],
    rules: [[BP, 'En RR.HH. no se confirma ni se niega con quién se habla.']],
    mirada: {
      ve: 'Las preguntas peligrosas llegan en los lugares más comunes: el comedor, el ascensor, la cola del microondas. La regla de no confirmar con quién hablas solo funciona si la aplicas con todos, siempre, con la misma frase tranquila.',
      visual: { tipo: 'mensaje', titulo: 'La frase que sirve para todos', txt: '«En Cultura hablo con mucha gente y no comento con quién ni de qué. Lo mismo haría si me buscaras tú.»' },
    },
  },
  {
    id: 'l5', t: '14:55', ch: 'whatsapp', who: 'sofia', titulo: '¿Es urgente?', banner: 'assets/foto2/tablet-equipo.webp', show: ['cumplimiento', 'etica', 'tiempo'],
    body: () => `<p>Sofía está en la reunión de presupuesto y te pregunta por WhatsApp si es urgente. Es viernes: si no lo mueves hoy, el lunes ya habrán pasado tres noches. <mark class="clave">Pero un caso así no se cuenta por WhatsApp</mark>.</p>`,
    type: 'compose', enviaA: 'sofia', para: 'Para: Sofía Ledesma · Jefa de Cultura', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'urg', t: 'La urgencia', ops: [
        { id: 'u1', t: 'Sí, es urgente y no puede esperar al lunes.', ok: true, por: 'Claro y sin dramatismo.' },
        { id: 'u2', t: 'Más o menos, cuando puedas.', ok: false, por: 'Le restas importancia a algo que tiene plazos.' },
      ] },
      { id: 'que', t: 'Qué cuentas', ops: [
        { id: 'q1', t: 'Es un posible caso de hostigamiento sexual que coincide con el comentario 187. Prefiero contártelo en persona.', ok: true, por: 'Dices el tipo de caso para que dimensione, sin nombres ni detalles.' },
        { id: 'q2', t: 'Lucía me contó que Hernán le escribe cosas sexuales a Daniela, la practicante.', ok: false, por: 'Nombres y hechos por WhatsApp: el mensaje puede quedar en muchos lugares.' },
      ] },
      { id: 'pide', t: 'Qué pides', ops: [
        { id: 'p1', t: '¿Podemos vernos a las 4 en tu oficina, y que esté la Dra. Villavicencio del canal?', ok: true, por: 'Propones lugar, hora y a quien corresponde.' },
        { id: 'p2', t: 'Llámame cuando salgas.', ok: null, por: 'Sirve, pero no asegura que llegue hoy al canal.' },
      ] },
    ],
    res: sel => {
      const fuga = sel.que === 'q2', buenas = ['u1', 'q1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = fuga ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : fuga ? -4 : 2, etica: fuga ? -3 : 2, tiempo: q === 'buena' ? 2 : 0 }, rel: { sofia: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['caso_en_canal'],
        out: q === 'buena' ? 'Sofía sale de su reunión a las 3:50. A las 4:05 están las tres en su oficina con la puerta cerrada. A las 4:40 llega el correo de la Dra. Villavicencio.' : fuga ? 'Sofía te llama al toque: «Borra eso. Ahora». Lo borras, pero ya estuvo en dos celulares y en una copia de seguridad.' : 'Sofía te llama a las 5:30. Alcanzan a llevarlo al canal, por los pelos.',
        pro: { ok: 'Un mensaje que dimensiona sin detallar mueve el caso sin exponer a nadie.', risk: 'Los nombres y hechos de un caso de hostigamiento no viajan por chat.', info: 'Si la responsable del canal está ese mismo día, el plazo empieza a correr a favor de la víctima.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? 'Urgente, reservado y bien dirigido.' : 'El canal importa tanto como el mensaje.'],
      };
    },
    rules: [[LEY, 'Ley 29733: la información reservada se comparte por canales controlados y solo con quien debe conocerla.']],
    mirada: {
      ve: 'Pedir una reunión urgente sin contar el caso por escrito es una habilidad: dices lo suficiente para que la otra persona entienda la gravedad, y nada que pueda dañar a alguien si el mensaje se reenvía.',
      visual: { tipo: 'flujo', titulo: 'Del relato al canal', pasos: ['Escuchar', 'Registrar reservado', 'Pedir reunión sin detalles', 'Entregar al canal'], aqui: 2 },
    },
  },
  {
    id: 'l6', t: '17:15', ch: 'presencial', who: 'sofia', titulo: 'Antes del fin de semana', banner: 'assets/foto/reunion-jefa.webp', lugar: 'La oficina de Sofía', show: ['tiempo', 'calidad', 'personas'],
    body: (n, F) => `<p>${F.has('caso_en_canal') ? 'El caso ya está en manos de la Dra. Villavicencio.' : 'El caso llegó tarde, pero llegó.'} Sofía se frota los ojos. «Quedan casi dos horas. Hay cosas del clima que siguen corriendo y cosas del caso que no nos tocan.» <mark class="clave">Elige en qué usan lo que queda del viernes</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas en las que trabajan antes de irse.', boton: 'Trabajar en estas', resumen: 'Trabajaron en',
    cols: ['Tarea', 'Lo que sabes'],
    rows: [
      { id: 'resumen', cells: ['Revisar el resumen del focus group que armó Renzo', 'Sin nombres, por temas, listo para el lunes'] },
      { id: 'protege', cells: ['Contarle al canal que Hernán preguntó por Lucía', 'Es información para proteger también a quien informó'] },
      { id: 'super', cells: ['Preparar la conversación del lunes con los supervisores', 'Hernán estará ahí, con los demás'] },
      { id: 'hablar', cells: ['Llamar a Hernán para escuchar «su versión»', 'Él aún no sabe nada del caso'] },
      { id: 'gonz', cells: ['Contarle a Gonzalo «por encima» lo del caso, para que no lo sorprenda', 'Es el gerente del área'] },
      { id: 'dani', cells: ['Buscar a Daniela en su piso para preguntarle cómo está', 'Tiene 21 años y está sola'] },
    ],
    score: { protege: 3, resumen: 2, super: 2, hablar: -4, gonz: -3, dani: -3 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, etica: picks.some(p => ['hablar', 'gonz', 'dani'].includes(p)) ? -4 : 3, personas: picks.includes('protege') ? 3 : 0 },
        cartera: { focus: picks.includes('resumen') ? 'Resumen listo para el lunes' : 'Resumen pendiente', supervisores: picks.includes('super') ? 'Guía de conversación lista' : 'Sin preparar' },
        out: q === 'buena' ? 'A las 6:50 apagan las luces. El caso está donde debe estar, el resumen del focus group está limpio y la reunión del lunes tiene guía. Bajas por las escaleras para despejarte.' : picks.includes('dani') ? 'Vas al piso 5 a buscar a Daniela. Ella te ve llegar, se pone pálida y se va al baño. Ahora alguien más en su piso se pregunta por qué la busca RR.HH.' : 'Avanzas, pero algo de lo que hiciste no te tocaba a ti.',
        pro: { ok: 'Separar lo que es tuyo (el clima) de lo que es del canal (el caso) protege a todos.', risk: 'Buscar a la víctima, al denunciado o al gerente por tu cuenta contamina el procedimiento y puede exponer a Daniela y a Lucía.', info: 'Tu única tarea con el caso, desde ahora, es estar disponible si el canal te necesita.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? 'Cada cosa en su carril. Qué semana…' : 'Con buena intención también se expone a alguien.'],
      };
    },
    rules: [[LEY, 'Ley 27942 y su Reglamento: principio de no revictimización.'], [BP, 'Quien deriva un caso no investiga por su cuenta.']],
    mirada: {
      ve: 'La primera semana termina con dos carriles abiertos: el clima de Siniestros, que es tu trabajo, y un posible caso de hostigamiento, que está en manos del canal. Mantenerlos separados es lo que permite que ninguno arruine al otro.',
      visual: { tipo: 'matriz', x: 'Me toca a mí', y: 'Urgencia', cuadrantes: ['Del canal', 'Hazlo hoy', 'No lo hagas', 'El lunes'], items: [['Avisar que Hernán preguntó', .7, .9], ['Resumen del focus', .85, .5], ['Guía de supervisores', .8, .45], ['Llamar a Hernán', .1, .3], ['Avisar a Gonzalo', .15, .25], ['Buscar a Daniela', .1, .2]] },
    },
  },
  {
    id: 'l7', t: '19:05', ch: 'whatsapp', who: 'colaboradora', titulo: 'En el paradero', banner: 'assets/foto2/caminan.webp', lugar: 'Paradero de la avenida Javier Prado', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Esperas el bus en el paradero, con la garúa pegada a la casaca y los audífonos sin música. ${F.has('limites_claros') ? 'Has pensado en Lucía todo el día.' : 'No dejas de pensar en lo que prometiste.'}</p><p>Te escribe Lucía: «¿Ya? ¿Qué va a pasar? <mark class="clave">¿Daniela va a saber que fui yo?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Responderle que el caso ya está en manos de la responsable del canal, que su nombre está reservado, que nadie se acercará a Daniela sin cuidado, y que el lunes puede buscarte si algo pasa.',
        res: { q: 'buena', fx: { personas: 4, confianza: 3 }, rel: { colaboradora: 1 },
          envia: [['lucia', 'Lucía, ya está en manos de la responsable del canal. Tu nombre está reservado y nadie se acercará a Daniela sin cuidado. Si Hernán o alguien te pregunta algo, no tienes que responder. El lunes estoy aquí. Gracias por tu valentía.']],
          out: 'Lucía responde con un corazón y un «gracias». Sube tu bus. Por primera vez en el día, te sientas.',
          kusi: ['feliz', 'Le dijiste qué pasa y qué no. Eso calma.'] } },
      { id: 'b', label: 'Responderle «Todo va a estar bien, no te preocupes».',
        res: { q: 'aceptable', fx: { personas: 1 },
          envia: [['lucia', 'Todo va a estar bien, no te preocupes 🙏']],
          out: 'Lucía responde «ojalá». No le dijiste nada que la ayude a pasar el fin de semana.',
          kusi: ['pensando', 'Cariño sí, pero también información.'] } },
    ],
    mirada: { ve: 'Quien informó un caso grave queda con miedo al fin de semana. Un mensaje breve que diga qué está pasando, qué está protegido y a quién acudir vale más que diez «tranquila».' },
  },
];
