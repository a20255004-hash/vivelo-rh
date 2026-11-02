// Practicante de RR.HH. · Capítulo 2 · «Los legajos» · Semana 1, martes.
// Hilo de la quincena: el pedido de Hamburgo obliga a contratar e inducir a 40 operarias.
// Normas citadas:
// - Ley 29733, de Protección de Datos Personales (datos sensibles, finalidad, derecho de acceso del titular). Texto en SPIJ: https://spij.minjus.gob.pe/
// - Decreto Legislativo 1310, numeral 3.4: conservar documentos y constancias de pago de obligaciones laborales hasta cinco años después del pago.
//   https://lpderecho.pe/documentos-laborales-plazo-conservacion-aplicable/
//   https://www.elperuano.pe/noticia/253967-empresas-corte-suprema-aclara-la-obligacion-de-conservar-los-documentos-laborales-por-cinco-anos
//   https://elperuano.pe/noticia/303272-documentos-laborales-por-mas-de-5-anos-dos-salas-de-la-corte-suprema-fijan-criterios-contradictorios
// - Ley 26772, que prohíbe requisitos discriminatorios en las ofertas de empleo y el acceso a la formación. Texto en SPIJ: https://spij.minjus.gob.pe/

export const CAP = {
  n: 2, titulo: 'Los legajos', dia: 'Semana 1, martes', foto: 'assets/foto/mesa-papeles.webp',
  lugar: 'Hilandería Andina · Archivo de RR.HH.',
  inicio: '07:35', fin: '19:30', cierreHora: '18:55',
  apertura: 'Martes en el Parque Industrial. El sol de Arequipa ya quema a las ocho y tú tienes una cita con 300 legajos.', boton: 'Abrir el archivo',
  kusi: 'Hoy toca papel, folios y datos que no son tuyos. ¡Con cuidado y con ganas!',
  lead: 'Supiste cuánto se guarda un legajo, encontraste lo que no debía estar en uno, cuidaste el legajo de una vecina y armaste tu primer plan de archivo.',
  reflexion: '¿Qué documento de hoy te hizo pensar en la persona que está detrás del papel?',
  siguiente: { n: 3, titulo: 'Cien CV', dia: 'Semana 1, miércoles' },
};

export const CARTERA = [
  { id: 'legajos', p: 'Archivo de legajos', j: 'Carla · RR.HH.', d: 0, e: '300 legajos, 40 nuevos en preparación' },
  { id: 'ingresos', p: 'Ingreso de 40 operarias', j: 'Carla · Producción', d: 0, e: 'Empiezan el lunes 2' },
  { id: 'credenciales', p: 'Credenciales', j: 'Don Teófilo · Producción', d: 0, e: 'El proveedor entrega hoy' },
  { id: 'dni', p: 'DNI vencidos', j: 'Carla · RR.HH.', d: 0, e: '12 trabajadores por contactar' },
  { id: 'induccion', p: 'Inducción de operarias', j: 'Carla · RR.HH.', d: 0, e: 'Semana 2' },
];

export const FUTURO = {
  prueba_reportada: ['Encontraste en un legajo una prueba de embarazo que nunca debió pedirse y lo reportaste.', 'Carla revisará los formatos de ingreso antes de la selección del capítulo 3.'],
  prueba_ignorada: ['Pasaste por alto una prueba de embarazo archivada en un legajo.', 'La auditoría del capítulo 7 revisará legajos al azar.'],
  vecina_protegida: ['No entregaste el legajo de Marleni a su vecina y le explicaste cómo pedirlo ella misma.', 'Justina volverá a cruzarse contigo en planta.'],
  vecina_copia: ['Le diste a Justina copias del legajo de su vecina.', 'Marleni se enterará. Capítulo 7.'],
  plan_legajos: ['Armaste un plan de legajos con secciones, accesos y plazos.', 'Será tu evidencia en la auditoría del capítulo 7.'],
  plan_flojo: ['Tu plan de legajos quedó con huecos.', 'La auditoría del capítulo 7 los encontrará.'],
  dni_seguimiento: ['Contactaste a quienes tenían el DNI vencido, con calma y por escrito.', 'Los legajos nuevos estarán al día para el alta.'],
  reporte_cifras: ['Tu reporte a Carla tenía cifras y pendientes claros.', 'Carla te dará más responsabilidad mañana, en la selección del capítulo 3.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Hilandería', sub: 'Carla, Diego y tú', c: '#2F6B3F' },
  carla: { n: 'Carla Zegarra', sub: 'Jefa de RR.HH.', who: 'carla' },
  diego: { n: 'Diego Paredes', sub: 'Practicante de Contabilidad', who: 'diego' },
  teofilo: { n: 'Don Teófilo', sub: 'Jefe de producción', who: 'teofilo' },
  rosa: { n: 'Rosa Huamaní', sub: 'Operaria nueva', who: 'rosa' },
  hugo: { n: 'Hugo Llerena', sub: 'Mantenimiento · turno noche', c: '#7A4A2E' },
};

export const WSP = [
  { chat: 'grupo', t: '07:38', de: 'Carla', txt: 'Hoy toca archivo. Yo estoy en reunión con Gerencia hasta las 10. Cualquier cosa urgente, me escriben 🙏' },
  { chat: 'diego', t: '07:41', de: 'Diego', txt: 'Hoy es martes de chairo en el comedor. Te aviso para que no te asustes 😂' },
  { chat: 'diego', t: '08:05', de: 'Diego', txt: 'Oye, ya le pasé el Excel a mi jefa. Me dijo que «muy completo» 😅 ¿Eso es bueno o malo?', si: 'asistencia_diego' },
  { chat: 'teofilo', t: '09:15', de: 'Don Teófilo', txt: 'Señorita, ya llegaron los credenciales. Hay uno que dice «Rosa Huamán». Arréglelo usted.', si: 'dni_carpeta' },
  { chat: 'teofilo', t: '09:15', de: 'Don Teófilo', txt: 'El proveedor dice que no le llegó nada. Sin datos no hay credenciales, señorita.', si: 'teofilo_molesto' },
  { chat: 'rosa', t: '12:40', de: 'Rosa', txt: 'Señorita, ¿el jueves entro a las 7 o a las 6? Es que el carro de Cerro Colorado sale tempranito 🙏' },
  { chat: 'hugo', t: '16:20', de: 'Hugo', txt: 'Señorita, ya saqué mi DNI nuevo. Mañana se lo dejo en portería, ¿ya? Disculpe la demora.', si: 'dni_seguimiento' },
  { chat: 'carla', t: '18:40', de: 'Carla', txt: 'Gracias por el reporte. Mañana vemos lo de la prueba con Legal. Bien hecho en avisarme.', si: 'prueba_reportada' },
];

export const CORREOS = [
  { t: '07:36', de: 'Carla Zegarra', para: 'Practicante de RR.HH.', asunto: 'Re: Antes de irte', html: '<p>Sobre tu pregunta de los legajos de cesados: conversemos hoy temprano, es más complicado de lo que parece.</p><p>Carla</p>' },
  { t: '10:05', de: 'Mesa de ayuda', para: 'Practicante de RR.HH.', asunto: 'Escáner del segundo piso', html: '<p>El escáner del segundo piso está en mantenimiento hasta las 14:00. Usen el de Contabilidad, previa coordinación.</p>' },
  { t: '15:30', de: 'Proveedor de credenciales', para: 'RR.HH. Hilandería Andina', asunto: 'Corrección de credencial', html: '<p>Recibimos la corrección del nombre de la Sra. Rosa Huamaní. Reimpresión lista el viernes.</p>', si: 'dni_carpeta' },
];

export const QUIZ = [
  { q: 'Según el Decreto Legislativo 1310, ¿hasta cuándo debe la empresa conservar las constancias de pago laborales?', ops: ['Un año después del cese', 'Hasta cinco años después de efectuado el pago', 'Para siempre', 'Solo mientras la persona trabaja'], ok: 1, por: 'La norma fija cinco años después del pago, aunque la Corte Suprema no siempre lo ha interpretado igual. Por eso nada se destruye sin consultar.' },
  { q: 'Una trabajadora pide copia del legajo de su vecina, «porque ella la mandó». ¿Qué corresponde?', ops: ['Entregarlo si muestra el DNI de la vecina', 'Explicarle que el legajo lo pide su titular, o alguien con una autorización formal', 'Darle solo las páginas que pida', 'Mandárselo por WhatsApp a la vecina'], ok: 1, por: 'El derecho de acceso a los datos personales es del titular. Un tercero necesita una representación formal.' },
  { q: 'Encuentras en un legajo una prueba de embarazo pedida al contratar. ¿Qué haces?', ops: ['La dejas: ya está archivada', 'La reportas a tu jefa: ese requisito es discriminatorio y la prueba es un dato de salud', 'La rompes sin avisar', 'La llevas a Producción'], ok: 1, por: 'Pedir una prueba de embarazo para contratar es discriminatorio. Y destruir documentos sin procedimiento también es un problema.' },
  { q: '¿Para qué sirve foliar un legajo?', ops: ['Para que se vea ordenado', 'Para saber si falta o sobra una hoja', 'Para cobrar por página', 'No sirve para nada'], ok: 1, por: 'El folio numera cada hoja: si hay un salto, sabes que algo se perdió.' },
  { q: 'Un trabajador tiene el DNI vencido. Lo más útil es…', ops: ['Suspenderlo hasta que lo renueve', 'Avisarle con calma, por escrito, y darle un plazo razonable', 'Ignorarlo', 'Publicar la lista en el periódico mural'], ok: 1, por: 'Se le avisa en privado y se le acompaña. Exponerlo o sancionarlo no resuelve nada.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'b1', t: '07:45', ch: 'presencial', who: 'carla', titulo: 'Diez minutos con Carla', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de RR.HH.', show: ['confianza', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Carla tiene el termo de mate de coca en una mano y el celular en la otra: en diez minutos entra a reunión con Gerencia.</p>${F.has('dni_wsp') ? '<p>«Antes de todo: lo de los DNI por WhatsApp. No te voy a gritar. Pero esos documentos ya no los controlamos nosotras. Hoy vas a entender por qué el archivo es lo más serio de esta oficina.»</p>' : ''}${F.has('convenio_firmado') ? '<p>«Y otra cosa: revisé tu convenio. Tenía errores que yo debí ver. Legal prepara una adenda; la firmamos el viernes.»</p>' : ''}<p>«Ayer preguntaste cuánto se guardan los legajos. Buena pregunta. <mark class="clave">Tienes tiempo para dos más</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas. Decide qué te sirve más para el día de hoy.',
    opts: [
      { id: 'cesados', label: '¿Cuánto tiempo se guardan los legajos de cesados?', info: '«El Decreto Legislativo 1310 dice que las constancias de pago se guardan hasta cinco años después del pago. Pero hay salas de la Corte Suprema que lo han leído distinto. Por eso aquí no se destruye nada sin un acta y sin que Legal lo vea.»' },
      { id: 'contenido', label: '¿Qué debe tener cada legajo?', info: '«Contrato, DNI vigente, constancias de alta, elección de pensiones, certificados de estudios, capacitaciones y sanciones si las hay. Lo médico va aparte, en sobre cerrado. Y nada que no sirva para la relación laboral.»' },
      { id: 'acceso', label: '¿Quién puede ver un legajo?', info: '«RR.HH., la persona dueña de su legajo y, si hay inspección, la autoridad. Ni jefes de área, ni compañeros, ni familiares. Aunque se molesten.»' },
      { id: 'error', label: '¿Qué fue lo peor que encontraste en este archivo?', info: 'Carla baja la voz: «Hace dos años una operaria reclamó horas extra y no encontramos sus boletas. Perdimos. No por mala fe, por desorden». Se va a su reunión sin decir más.' },
    ],
    res: picks => ({
      q: null, fx: { confianza: picks.includes('error') ? 2 : 1, cumplimiento: picks.includes('acceso') ? 2 : 0, tiempo: -1 }, rel: { carla: picks.includes('cesados') ? 1 : 0 },
      out: 'Carla se va a su reunión. Te quedas con las llaves del archivo, una caja de sobres manila y un sello de foliar que mancha los dedos.',
      kusi: ['curioso', 'Ahora sabes qué buscar. ¡A abrir cajas!'],
    }),
    rules: [[LEY, 'Las constancias de pago laborales se conservan hasta cinco años después del pago (D. Leg. 1310, num. 3.4).'], [BP, 'No destruyas documentos sin un acta y sin consultar a Legal.']],
    mirada: {
      ve: 'El archivo es la memoria de la empresa ante un reclamo. Una practicante que pregunta qué se guarda, quién lo ve y qué falló antes entiende que ordenar papeles es, en realidad, proteger derechos: los de la trabajadora y los de la empresa.',
      visual: { tipo: 'linea', titulo: 'La vida de un legajo', hitos: [['Ingreso', 'Se abre con contrato, DNI y alta'], ['Mientras trabaja', 'Se suman capacitaciones, boletas, vacaciones'], ['Cese', 'Se cierra con la liquidación'], ['Cinco años después del pago', 'Se evalúa, con Legal, qué conservar']] },
      normas: [{ ley: 'Decreto Legislativo 1310, numeral 3.4', dice: 'Los empleadores están obligados a conservar los documentos y constancias de pago de obligaciones laborales hasta cinco años después de efectuado el pago.', practica: 'La Corte Suprema ha tenido criterios distintos sobre este plazo. Por eso muchas empresas conservan más tiempo y destruyen solo con acta.' }],
    },
  },
  {
    id: 'b2', t: '08:30', ch: 'documento', who: null, titulo: 'Un legajo de 2021', banner: 'assets/esc/lupa.webp', lugar: 'Archivo de RR.HH.', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Abres el primer legajo de la caja 14: Yesenia Condori, tejedora desde 2021. La carátula está amarilla y el índice lo escribió alguien a mano.</p><p>Te manchas los dedos con el sello mientras revisas hoja por hoja. <mark class="clave">Algo no cuadra en este legajo</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que está mal o lo que debería corregirse en el índice del legajo.',
    doc: { t: 'Índice del legajo · Yesenia Condori Apaza', sub: 'Tejedora · Ingreso: marzo de 2021 · Caja 14' },
    lines: [
      { id: 'contrato', t: 'Folios 1 al 4: contrato de trabajo firmado.' },
      { id: 'dni', t: 'Folio 5: copia de DNI, vencido en agosto de 2025.', bad: BP, why: 'Un DNI vencido no invalida el contrato, pero el legajo debe tener el documento vigente. Hay que pedirle la copia nueva.' },
      { id: 'salto', t: 'Folios 6, 7 y 9: constancia de alta, elección de AFP y certificado de estudios.', bad: BP, why: 'Falta el folio 8. O se perdió una hoja o se folió mal. Hay que averiguar cuál.' },
      { id: 'embarazo', t: 'Folio 10: resultado de prueba de embarazo, «requisito de ingreso».', bad: LEY, why: 'Exigir una prueba de embarazo para contratar es discriminatorio. Además, es un dato de salud archivado a la vista.' },
      { id: 'medico', t: 'Folio 11: certificado médico de un descanso de 2023, suelto en el legajo.', bad: LEY, why: 'Es un dato sensible de salud: debe ir en sobre cerrado, con acceso restringido.' },
      { id: 'capac', t: 'Folios 12 al 14: constancias de capacitación en seguridad.' },
      { id: 'boletas', t: 'Folios 15 al 30: boletas de pago de 2021 a 2024.', duda: 'Está bien guardarlas. Y son justo las que faltaban en el reclamo que te contó Carla.' },
      { id: 'hijo', t: 'Folio 31: partida de nacimiento de su hijo, para asignación familiar.', duda: 'Es correcta: sustenta un beneficio que ella pidió.' },
    ],
    res: ({ missLey, hitsLey }) => {
      const vioEmb = missLey === 0 || hitsLey >= 2;
      return {
        out: vioEmb ? 'Separas la prueba de embarazo y el certificado médico en un sobre cerrado, y anotas el folio 8 como faltante. Le escribes a Carla: «Encontré algo que creo que debes ver».' : 'Refoliaste el legajo y quedó bonito. Pero la prueba de embarazo sigue ahí, en el folio 10, para quien abra la caja.',
        flags: [vioEmb ? 'prueba_reportada' : 'prueba_ignorada'], cartera: { legajos: vioEmb ? 'Caja 14 revisada · 1 caso para Legal' : 'Caja 14 refoliada' },
        rel: { carla: vioEmb ? 1 : 0 },
        pro: { ok: 'Revisar hoja por hoja es lento, pero así se encuentra lo que nadie quiere ver.', risk: 'Un documento que no debió pedirse sigue siendo un problema mientras esté archivado sin control.', info: 'Pregunta si los formatos de ingreso de hoy todavía piden esa prueba. Si sí, la selección del viernes repetirá el error.' },
        kusi: vioEmb ? ['indignado', '¡Esa prueba nunca debió pedirse! Bien que lo viste.'] : ['preocupado', 'Hay algo en ese legajo que no debería estar…'],
      };
    },
    rules: [[LEY, 'Exigir requisitos discriminatorios para acceder a un empleo está prohibido (Ley 26772).'], [LEY, 'Los datos de salud son datos sensibles (Ley 29733).'], [BP, 'Folia cada hoja: un salto en la numeración es una alerta.']],
    mirada: {
      ve: 'Un legajo viejo cuenta cómo trabajaba la empresa. Si hace cuatro años se pedía una prueba de embarazo, quizá alguien lo sigue pidiendo. Una practicante atenta no solo ordena: detecta prácticas que hay que cortar y las lleva a quien puede corregirlas.',
      visual: { tipo: 'cambio', titulo: 'El legajo de Yesenia, antes y después', pares: [['DNI vencido', 'Pedido de copia vigente'], ['Folio 8 perdido', 'Faltante anotado y buscado'], ['Prueba de embarazo archivada', 'Separada y reportada a la jefa'], ['Certificado médico suelto', 'En sobre cerrado, acceso restringido']] },
      normas: [{ ley: 'Ley 26772', dice: 'Las ofertas de empleo y el acceso a la formación no pueden tener requisitos que anulen o alteren la igualdad de oportunidades o de trato.', practica: 'Pedir una prueba de embarazo para contratar excluye a las mujeres por una condición que no tiene relación con el puesto.' }],
    },
  },
  {
    id: 'b3', t: '10:15', ch: 'llamada', who: null, titulo: 'Doce DNI vencidos', banner: 'assets/foto/llamada.webp', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>De la lista que hiciste el lunes, doce trabajadores tienen el DNI vencido. Con el escáner en mantenimiento, aprovechas para llamar desde el anexo de RR.HH.</p><p>Afuera, una combi toca la bocina en la avenida. <mark class="clave">Cuatro llamadas antes del almuerzo</mark>.</p>`,
    type: 'calls',
    calls: [['Hugo Llerena · mantenimiento', 'Contesta con voz de recién despertado: trabaja de noche', '¿Aló? Señorita… salí del turno a las seis. ¿Qué pasó? ¿Me van a botar?'], ['Yesenia Condori · tejido', 'Contesta desde la línea, con ruido de máquinas', 'Sí, ya sé que está vencido, pero en el RENIEC de la avenida hay mucha cola. ¿Puedo ir el sábado?'], ['Don Faustino Quispe · almacén', 'Contesta su nieta: él no tiene celular propio', 'Mi abuelito habla más en quechua, señorita. ¿Le digo algo?'], ['Mirian Choque · acabados', 'No contesta']],
    prompt: 'Hugo se asustó, Yesenia puede el sábado, Don Faustino no tiene celular y Mirian no contestó. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Calmar a Hugo, aceptar el sábado de Yesenia, dejarle a la nieta un mensaje simple y escribirle a Mirian por WhatsApp.',
        res: { q: 'buena', fx: { personas: 5, calidad: 2, tiempo: -2 }, flags: ['dni_seguimiento'], cartera: { dni: '4 contactados · plazo: fin de quincena' },
          envia: ['hugo', 'Hugo, tranquilo, nadie te va a botar. Solo necesitamos la copia de tu DNI nuevo para tu legajo. Puedes dejarla en portería cuando renueves. Gracias 🙌'],
          out: 'Hugo se ríe del susto. La nieta de Don Faustino promete explicarle «en su idioma». Mirian responde a la media hora: estaba en su refrigerio.',
          pro: { ok: 'Explicas para qué llamas antes de que la persona imagine lo peor.', risk: 'Llamar a alguien del turno noche a las diez de la mañana es despertarlo. La próxima vez, escríbele primero.', info: 'Anota el canal y la hora que le acomoda a cada persona: te servirá todo el mes.' },
          kusi: ['feliz', 'Nadie se asustó de más. ¡Así se llama!'] } },
      { id: 'b', label: 'Mandarles a todos el mismo correo formal con plazo de 48 horas, con copia a sus jefes, para que quede constancia escrita y se apuren.',
        res: { q: 'riesgosa', fx: { personas: -5, cumplimiento: 1 }, rel: { teofilo: -1 },
          out: 'Don Faustino no tiene correo. Hugo lo lee a las once de la noche y no duerme. Don Teófilo te reenvía el correo: «¿Por qué me copian esto?».',
          pro: { ok: 'Queda constancia escrita.', risk: 'Copiar a los jefes convierte un trámite en una sanción pública. Y 48 horas no alcanzan para una cola en el RENIEC.' },
          kusi: ['preocupado', 'Un DNI vencido no es una falta grave…'] } },
    ],
    rules: [[BP, 'Antes de pedir algo por teléfono, di quién eres y para qué llamas.'], [BP, 'Un trámite personal no se copia a los jefes.']],
    mirada: {
      ve: 'Para muchos trabajadores, una llamada de RR.HH. suena a problema. La forma en que pides un documento dice cuánto respetas a la persona: su turno, su idioma, su tiempo. Un DNI vencido se resuelve con un plazo amable, no con una amenaza.',
      visual: { tipo: 'embudo', titulo: 'Tus llamadas de hoy', niveles: [['DNI vencidos', 12], ['Llamadas', 4], ['Contestaron', 3], ['Con fecha para renovar', 2]] },
    },
  },
  {
    id: 'b4', t: '11:40', ch: 'presencial', who: null, titulo: '«Es para mi vecina»', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Ventanilla de RR.HH.', show: ['etica', 'cumplimiento', 'personas'],
    body: () => `<p>La señora Justina Mamani, urdidora con 22 años en la planta, se apoya en la ventanilla. Trae su credencial colgada y un táper de queso helado para Carla.</p><p>«Hijita, mi vecina Marleni trabaja en acabados y está en su turno. El banco le pide su contrato y sus boletas para un préstamo. <mark class="clave">Ella me mandó a recogerlos</mark>, mira, aquí tengo foto de su DNI en mi celular.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle con cariño que Marleni debe pedirlos ella misma, y ofrecer tenérselos listos para su salida del turno.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, personas: 1, tiempo: -1 }, flags: ['vecina_protegida'],
          out: 'Justina frunce el ceño: «¿Ni a mí, que la conozco desde wawa?». Pero acepta. A las 15:10 Marleni llega con su DNI, firma el cargo y se lleva sus documentos. Te da las gracias por tenerlos listos.',
          pro: { ok: 'Respetas el derecho de Marleni y le ahorras tiempo.', risk: 'Justina puede sentir que desconfías de ella. Aclárale que es la regla para todos, también para ti.', info: 'Si Marleni no pudiera venir, una carta poder con firma legalizada o una autorización formal permitiría que alguien la represente.' },
          kusi: ['animo', 'Cuidaste a Marleni sin pelearte con Justina. ¡Bacán!'] } },
      { id: 'b', label: 'Entregarle las copias: tiene la foto del DNI, la conoces de la planta y es solo un trámite del banco.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5, personas: 2 }, flags: ['vecina_copia'],
          out: 'Justina se va contenta. En las boletas de Marleni figuran su sueldo, sus descuentos y un embargo judicial por alimentos que nadie en su barrio conocía.',
          pro: { ok: 'Resuelves rápido un pedido amable.', risk: 'Una foto de un DNI no es una autorización. Y en un legajo hay datos que la titular quizá no quiere que nadie vea.' },
          kusi: ['triste', 'Marleni no sabe que su vecina vio su embargo…'] } },
      { id: 'c', label: 'Darle solo la constancia de trabajo, que no tiene montos.',
        res: { q: 'aceptable', fx: { etica: 1, cumplimiento: -1, personas: 2 },
          out: 'Justina se lleva la constancia. Al banco no le sirve: pedía boletas. Marleni tiene que venir igual, y ahora sabe que su vecina pidió sus papeles.',
          pro: { ok: 'Entregas menos información.', risk: 'Sigues entregando un documento de otra persona sin su autorización.', info: 'La regla no depende de cuántos datos tenga el papel, sino de quién lo pide.' },
          kusi: ['pensando', 'Menos datos, pero el mismo problema.'] } },
    ],
    rules: [[LEY, 'El acceso a los datos personales es un derecho del titular; un tercero necesita representación (Ley 29733).'], [POL, 'En Hilandería Andina, los documentos del legajo se entregan al titular, con firma de cargo.']],
    mirada: {
      ve: 'Los pedidos más difíciles vienen de gente buena. Justina no quiere hacer daño, pero un legajo tiene sueldos, descuentos, embargos y salud. Una profesional protege a quien no está presente, sin humillar a quien sí está.',
      visual: { tipo: 'balanza', a: { t: 'Entregárselo a Justina', items: ['Justina contenta', 'Trámite rápido'] }, b: { t: 'Que lo pida Marleni', items: ['Su información sigue siendo suya', 'Hay firma de cargo', 'Nadie ve su embargo'] } },
      normas: [{ ley: 'Ley 29733, de Protección de Datos Personales', dice: 'El titular tiene derecho a acceder a sus datos. Quien los trata debe impedir accesos no autorizados.', practica: 'Una foto del DNI en un celular ajeno no prueba que la titular haya autorizado nada.' }],
    },
  },
  {
    id: 'b5', t: '14:30', ch: 'documento', who: null, titulo: 'Tu plan de archivo', banner: 'assets/esc/escritorio.webp', lugar: 'Archivo de RR.HH.', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>El chairo del comedor te dio fuerzas. El escáner volvió a funcionar y Carla te escribió: «Arma una propuesta de cómo debería quedar el archivo. <mark class="clave">Una hoja, no un tratado</mark>».</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de tu plan de legajos.', boton: 'Guardar el plan',
    bloques: [
      { id: 'estructura', t: 'Cómo se arma cada legajo', n: 3, ops: [
        { id: 'e1', t: 'Secciones fijas: ingreso, contrato, pagos, capacitación y cese.', ok: true, por: 'Todos los legajos se leen igual.' },
        { id: 'e2', t: 'Folios numerados y un índice actualizado en la carátula.', ok: true, por: 'El salto de un folio se detecta en segundos.' },
        { id: 'e3', t: 'Documentos médicos en sobre cerrado, en un archivo aparte.', ok: true, por: 'Los datos de salud tienen acceso restringido.' },
        { id: 'e4', t: 'Una foto de cada trabajador en la carátula, para reconocerlo.', ok: false, por: 'No aporta a la relación laboral y suma un dato innecesario.' },
      ] },
      { id: 'acceso', t: 'Quién entra y cómo', n: 2, ops: [
        { id: 'a1', t: 'Cuaderno de préstamo: quién sacó qué legajo, cuándo y para qué.', ok: true, por: 'Sabes dónde está cada legajo.' },
        { id: 'a2', t: 'Llave del archivo solo en RR.HH.', ok: true },
        { id: 'a3', t: 'Copia de la llave para los jefes de área, para que no esperen.', ok: false, por: 'Los jefes no necesitan ver legajos completos de su equipo.' },
      ] },
      { id: 'plazos', t: 'Cesados y plazos', n: 2, ops: [
        { id: 'p1', t: 'Cajas de cesados con fecha de cese y fecha del último pago.', ok: true, por: 'El plazo se cuenta desde el pago.' },
        { id: 'p2', t: 'Ninguna destrucción sin acta y sin visto bueno de Legal.', ok: true },
        { id: 'p3', t: 'Botar los legajos de cesados de 2019 para liberar espacio.', ok: false, por: 'Sin revisar fechas de pago ni consultar, puedes destruir la única prueba ante un reclamo.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : -2, tiempo: -1 },
        flags: [q === 'buena' ? 'plan_legajos' : 'plan_flojo'], cartera: { legajos: q === 'buena' ? 'Plan de archivo en una hoja' : 'Plan de archivo con huecos' },
        out: q === 'buena' ? 'Imprimes tu plan y lo pegas en la puerta del archivo. Diego pasa, lo lee y dice: «Oye, esto lo quiero para Contabilidad».' : 'Tu plan cabe en una hoja, pero deja puertas abiertas: llaves de más o cajas que se podrían botar sin revisar.',
        pro: { ok: 'Un plan simple que todos entienden vale más que un manual que nadie lee.', risk: 'Una sola regla floja, como una copia de llave, deshace todas las demás.', info: 'Pídele a Carla que lo revise Legal: así tu plan se vuelve política.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tu primer entregable! Qué divino.' : 'Casi. Revisa quién entra y qué se bota.'],
      };
    },
    rules: [[LEY, 'Quien trata datos personales debe adoptar medidas de seguridad (Ley 29733).'], [BP, 'Cuenta el plazo de conservación desde la fecha del último pago, no desde el cese.']],
    mirada: {
      ve: 'El orden del archivo no es estética: es control. Saber quién sacó un legajo, dónde está lo médico y qué no se puede botar convierte un cuarto sin ventanas en una defensa ante reclamos e inspecciones.',
      visual: { tipo: 'flujo', titulo: 'Tu plan en una hoja', pasos: ['Secciones fijas', 'Folios e índice', 'Médico aparte', 'Cuaderno de préstamo', 'Cesados con fecha', 'Destrucción solo con acta'] },
    },
  },
  {
    id: 'b6', t: '16:00', ch: 'presencial', who: 'diego', titulo: 'El escáner de Contabilidad', banner: 'assets/foto2/revisan.webp', lugar: 'Oficina de Contabilidad', show: ['personas', 'tiempo', 'confianza'],
    body: (n, F) => `<p>Vas a Contabilidad a escanear los 40 legajos nuevos. Diego está atrapado en una conciliación y tiene ojeras.</p>${F.has('asistencia_diego') ? '<p>«Oye… mi jefa quiere que le pase el Excel de asistencia todos los meses. ¿Está bien eso?», pregunta sin mirarte.</p>' : '<p>«Mi jefa me tiene con una conciliación desde las siete. ¿Me esperas cinco minutos y te ayudo con el escáner?»</p>'}<p>El escáner se traba en la hoja 12. <mark class="clave">Tienes 40 legajos y la planta cierra a las seis</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Esperarlo, escanear juntos y conversar mientras tanto.',
        res: { q: null, fx: { personas: 3, tiempo: -2 }, rel: { diego: 1 }, out: 'Diego te enseña el truco del escáner: abrir la tapa, contar hasta tres y empujar la hoja. Terminan a las 17:40, entre risas y papel atascado.', kusi: ['feliz', 'Los trucos del escáner no salen en ningún manual.'] } },
      { id: 'b', label: 'Escanear sola para no atrasarte.',
        res: { q: null, fx: { tiempo: 2, personas: -1 }, out: 'Terminas a las 17:20, sola y con dos hojas arrugadas. Diego te despide con la mano desde su conciliación.', kusi: ['pensando', 'Más rápido… y más solo.'] } },
    ],
    mirada: { ve: 'Los practicantes de distintas áreas se sostienen entre ellos: comparten trucos, dudas y cansancio. Esa red informal también es parte de aprender un oficio. Y a veces es el lugar donde se hacen las preguntas difíciles.' },
  },
  {
    id: 'b7', t: '18:20', ch: 'whatsapp', who: null, titulo: 'El reporte del martes', banner: 'assets/esc/meta.webp', show: ['confianza', 'calidad', 'cumplimiento'],
    body: () => `<p>Antes de tomar la combi de regreso, le escribes a Carla cómo quedó el archivo. Ella sigue en la planta, cuadrando el presupuesto del pedido.</p>`,
    type: 'compose', enviaA: 'carla', para: 'Para: Carla Zegarra · Jefa de RR.HH.', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'avance', t: 'Avance', ops: [
        { id: 'v1', t: 'Carla, los 40 legajos nuevos están escaneados: 31 completos y 9 con algún pendiente.', ok: true, por: 'Cifras claras: Carla sabe dónde estás.' },
        { id: 'v2', t: 'Carla, avancé bastante con los legajos, ya casi están.', ok: false, por: '«Bastante» y «casi» no le dicen nada.' },
      ] },
      { id: 'hallazgo', t: 'Lo que encontraste', ops: [
        { id: 'h1', t: 'En la caja 14 encontré documentos médicos sueltos y un folio perdido. Los separé y anoté.', ok: true, por: 'Cuentas el hallazgo y lo que ya hiciste.' },
        { id: 'h2', t: 'Todo lo demás normal.', ok: false, por: 'Si encontraste algo, este es el lugar para decirlo.' },
      ] },
      { id: 'pide', t: 'Qué necesitas', ops: [
        { id: 'n1', t: '¿Mañana puedes revisar mi plan de archivo con Legal?', ok: true, por: 'Terminas con una acción concreta.' },
        { id: 'n2', t: 'Cualquier cosa me avisas 😊', ok: null, por: 'Amable, pero no pide nada.' },
      ] },
    ],
    res: sel => {
      const buenas = ['v1', 'h1', 'n1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -2, calidad: q === 'buena' ? 3 : 0 }, rel: { carla: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['reporte_cifras'] : [], cartera: { ingresos: '31 de 40 legajos completos' },
        out: q === 'buena' ? 'Carla responde con un audio de 20 segundos: «Perfecto. Mañana te voy a necesitar para filtrar CV. Ya veo que puedo confiar en tus números».' : q === 'aceptable' ? 'Carla responde: «Ok. Mañana me cuentas mejor qué falta».' : 'Carla responde: «¿Cuántos son “casi”?». Te toca escribir otra vez desde la combi.',
        pro: { ok: 'Cifras, hallazgos y un pedido: tres líneas que permiten decidir.', risk: 'Un hallazgo que no se cuenta hoy se vuelve sorpresa en una auditoría.', info: 'Guarda tus reportes: al final de la quincena muestran todo lo que hiciste.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Números claros, confianza ganada!' : 'Con cifras se entiende mejor.'],
      };
    },
    rules: [[BP, 'Reporta con cifras: cuántos, cuáles y qué falta.']],
    mirada: {
      ve: 'Un reporte con números le permite a tu jefa planificar sin preguntarte nada más. Con cada reporte claro, la practicante deja de ser «la que archiva» y se vuelve alguien a quien se le puede encargar más.',
      visual: { tipo: 'mensaje', titulo: 'Tres líneas que generan confianza', txt: 'Carla, los 40 legajos nuevos están escaneados: 31 completos y 9 con algún pendiente. En la caja 14 encontré documentos médicos sueltos y un folio perdido; los separé y anoté. ¿Mañana puedes revisar mi plan de archivo con Legal?' },
    },
  },
];
