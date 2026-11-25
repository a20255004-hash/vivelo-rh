// Coordinador/a de Gestión Humana · Capítulo 9 · «La entrega de cargo» · Semana 2, jueves.
// Hilo de las dos semanas: Lácteos del Altiplano (ficticia), plantas de Juliaca y Ayaviri, 350 trabajadores.
// Normas citadas (texto oficial en docs/normas/txt):
// - D.S. 003-97-TR (TUO del D. Leg. 728), art. 72: los contratos sujetos a modalidad deben constar por escrito y por
//   triplicado, con su duración y causa objetiva. https://www.gob.pe/institucion/mtpe/normas-legales/
// - D.S. 005-2012-TR (Reglamento de la Ley 29783), art. 101 a): el certificado del examen médico ocupacional tiene validez
//   de dos años; su costo es de cargo del empleador.
// - Ley 29733, art. 2 num. 4 (dato personal) y art. 17 (confidencialidad, que subsiste después de terminada la relación).
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf
// - Constitución Política del Perú, art. 28 inc. 1: el Estado garantiza la libertad sindical.

export const CAP = {
  n: 9, titulo: 'La entrega de cargo', dia: 'Semana 2, jueves', foto: 'assets/3d/scenes/agro.webp',
  lugar: 'Planta de Ayaviri · Provincia de Melgar, Puno',
  inicio: '05:50', fin: '19:30', cierreHora: '19:15',
  apertura: 'Jueves, seis de la mañana. Sales de Juliaca en la camioneta de la empresa, detrás de la cisterna de leche. La pampa está blanca de escarcha y en el horizonte se ven las alpacas. Ayaviri está a casi dos horas.', boton: 'Subir a la camioneta',
  kusi: 'Hoy una planta cambia de jefe. Lo que la gente recuerde de este día depende de cómo se lo cuentes. ¡Dale!',
  lead: 'Preparaste el acta en el camino, revisaste con Freddy lo que nadie había revisado, anunciaste el cambio en persona, respondiste las preguntas difíciles, delegaste en Yesenia y cuidaste los datos que se querían ir con Freddy.',
  reflexion: '¿Qué te dijo la planta de Ayaviri hoy que no te habían dicho los números del martes?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'entrega', p: 'Entrega de cargo de Freddy', j: 'Freddy · nueva jefatura · tú', d: 8, e: 'Hoy' },
  { id: 'anuncio', p: 'Anuncio a la planta de Ayaviri', j: 'Tú · Yesenia', d: 8, e: 'Hoy 10:30' },
  { id: 'pendientes', p: 'Pendientes legales de Ayaviri', j: 'Tú · Yesenia', d: 8, e: 'Por descubrir' },
  { id: 'convocatoria', p: 'Convocatoria de 6 operarios', j: 'Yesenia', d: 8, e: 'Desde el lunes' },
];

export const FUTURO = {
  acta_completa: ['El acta de entrega de cargo tiene accesos, acuerdos, personas y pendientes.', 'Nadie tendrá que llamar a Freddy a Arequipa.'],
  contratos_regularizados: ['Los tres contratos verbales de quesería se regularizarán por escrito.', 'Yesenia lo tendrá listo la próxima semana.'],
  examenes_programados: ['Los 22 exámenes médicos vencidos quedaron programados.', 'La clínica de Juliaca vendrá a Ayaviri.'],
  anuncio_presencial: ['Anunciaste el cambio en persona, con Freddy y la nueva jefatura, y en quechua.', 'La planta escuchó a la empresa antes que al rumor.'],
  anuncio_frio: ['El cambio se anunció con un memo en la pared.', 'En la garita ya se cuenta otra versión.'],
  sindicato_respetado: ['Respondiste en la asamblea que organizarse en un sindicato es un derecho.', 'Alguien tomó nota.'],
  sindicato_esquivado: ['Esquivaste la pregunta sobre el sindicato.', 'Alguien también tomó nota.'],
  yesenia_lidera: ['Yesenia lidera la convocatoria y la nueva inducción de Ayaviri.', 'Desde el lunes.'],
  datos_ganaderos_protegidos: ['Los datos de los ganaderos se quedaron en la empresa.', 'Freddy se fue con sus recuerdos, no con la base.'],
  datos_ganaderos_fuera: ['Freddy se llevó la lista de ganaderos y precios en un USB.', 'Arequipa compra leche en Melgar…'],
};

export const CHATS = {
  equipo: { n: 'Gestión Humana LDA', sub: 'Nely, Yesenia y tú', c: '#2F6B3F' },
  mariela: { n: 'Mariela Quispe', sub: 'Gerenta de Administración', who: 'mariela' },
  nely: { n: 'Nely Mamani', sub: 'Asistente de RR.HH. · Juliaca', who: 'asistente' },
  yesenia: { n: 'Yesenia Condori', sub: 'Asistente de RR.HH. · Ayaviri', c: '#8A4B2A' },
  freddy: { n: 'Ing. Freddy Choque', sub: 'Jefe de la planta de Ayaviri', who: 'jefe' },
  edwin: { n: 'Edwin Calsín', sub: 'Planta de Ayaviri', c: '#9C6B1E' },
};

export const WSP = [
  { chat: 'yesenia', t: '05:40', de: 'Yesenia', txt: 'Ya está el chairo 🍲 y la sala lista. Traiga chompa gruesa, aquí amaneció a menos seis.' },
  { chat: 'mariela', t: '09:10', de: 'Mariela', txt: 'Entro al directorio. Deséame suerte. Llevo tu resumen impreso.' },
  { chat: 'nely', t: '12:30', de: 'Nely', txt: 'Lidia me pidió el certificado de un operario. Le mandé el procedimiento y le dije «justificada». No se molestó 🙌', si: 'procedimiento_salud' },
  { chat: 'mariela', t: '15:45', de: 'Mariela', txt: 'Directorio terminado. Preguntaron mucho por Ayaviri. Aprobaron la jefatura de calidad. Te cuento en la noche.', si: 'reemplazo_edwin' },
  { chat: 'mariela', t: '15:45', de: 'Mariela', txt: 'Directorio terminado. Preguntaron por Ayaviri. Les gustó lo de los 90 días. Te cuento en la noche.', no: 'reemplazo_edwin' },
  { chat: 'edwin', t: '17:20', de: 'Edwin', txt: 'Gracias por venir. Hace años que nadie de Juliaca se quedaba a almorzar con nosotros.' },
];

export const CORREOS = [
  { t: '07:30', de: 'Mariela Quispe', para: 'Coordinación de Gestión Humana', asunto: 'Para hoy', html: '<p>Hoy no estoy en Ayaviri porque tengo directorio. Tú representas a la empresa. Lo que digas en la asamblea es lo que diría yo. Confío en ti.</p><p>Mariela</p>' },
];

export const QUIZ = [
  { q: 'Tres operarios trabajan con «contrato de temporada» solo de palabra. ¿Qué dice la norma?', ops: ['Está bien si ellos aceptan', 'Los contratos sujetos a modalidad deben constar por escrito, con su duración y causa objetiva', 'Solo se escribe si duran más de un año', 'Basta con la boleta'], ok: 1, por: 'D.S. 003-97-TR, art. 72.' },
  { q: '¿Cuánto tiempo es válido el certificado de un examen médico ocupacional?', ops: ['Seis meses', 'Un año', 'Dos años, si se mantiene la misma actividad', 'Para siempre'], ok: 2, por: 'D.S. 005-2012-TR, art. 101 a).' },
  { q: 'En una asamblea, un operario pregunta si los despiden por formar un sindicato. ¿Qué respondes?', ops: ['Que mejor no lo hagan', 'Que organizarse es un derecho que la Constitución garantiza', 'Que lo consultarás con la gerencia', 'Que no es momento'], ok: 1, por: 'La Constitución, art. 28, garantiza la libertad sindical.' },
  { q: 'Un jefe que se va quiere copiar la lista de proveedores con sus datos personales. ¿Qué haces?', ops: ['Lo dejas, son doce años', 'Le explicas que esos datos son de la empresa y que la confidencialidad sigue después de irse', 'Le pides que borre solo los teléfonos', 'Lo denuncias de inmediato'], ok: 1, por: 'La Ley 29733, art. 17, obliga a guardar confidencialidad, incluso después de terminada la relación.' },
  { q: 'La mejor forma de anunciar un cambio de jefe en una planta es…', ops: ['Un memo en la pared', 'En persona, con quien se va y quien llega, dejando espacio para preguntas', 'Un correo a los supervisores', 'Esperar a que se enteren'], ok: 1, por: 'Las personas necesitan escuchar el porqué y poder preguntar.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'i1', t: '06:20', ch: 'documento', who: null, titulo: 'El acta, en la camioneta', banner: 'assets/esc/camino.webp', lugar: 'Carretera Juliaca–Ayaviri', show: ['calidad', 'tiempo'],
    body: () => `<p>Con la laptop sobre las rodillas y un termo de café entre los pies, preparas el acta de entrega de cargo. El chofer pone huaynos de Melgar a bajo volumen.</p><p>Una buena acta responde una pregunta: <mark class="clave">¿qué necesita saber la persona que se queda, para no tener que llamar a la que se va?</mark></p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del acta.', boton: 'Guardar el acta',
    bloques: [
      { id: 'acc', t: 'Accesos y bienes', n: 2, ops: [
        { id: 'a1', t: 'Claves del sistema de acopio y de la cámara, cambiadas y entregadas.', ok: true },
        { id: 'a2', t: 'Laptop, celular de la empresa y llaves, con firma de recepción.', ok: true },
        { id: 'a3', t: 'Foto de Freddy con el equipo para el recuerdo.', ok: false, por: 'Bonito, pero no va en el acta.' },
      ] },
      { id: 'acu', t: 'Acuerdos y relaciones', n: 2, ops: [
        { id: 'r1', t: 'Acuerdos con los 60 ganaderos: precios, horarios y forma de pago.', ok: true },
        { id: 'r2', t: 'Contactos clave: municipio, proveedores, veterinario, transporte.', ok: true },
        { id: 'r3', t: 'Opiniones de Freddy sobre cada ganadero.', ok: false, por: 'Es información subjetiva sobre personas; no es un acuerdo ni un dato necesario.' },
      ] },
      { id: 'pen', t: 'Personas y pendientes', n: 2, ops: [
        { id: 'p1', t: 'Pendientes con fecha: contratos, exámenes, mantenimiento, compras.', ok: true },
        { id: 'p2', t: 'Lo que Freddy cambiaría de la planta, en sus palabras.', ok: true, por: 'Lo que le pediste el jueves pasado.' },
        { id: 'p3', t: 'Los trabajadores «problemáticos», según Freddy.', ok: false, por: 'Etiquetar personas en un acta condiciona a la nueva jefatura antes de conocerlas.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: 1 },
        flags: q === 'buena' ? ['acta_completa'] : [], cartera: { entrega: q === 'buena' ? 'Acta lista para firmar' : 'Acta con huecos' },
        out: q === 'buena' ? 'Llegas a Ayaviri con el acta impresa en la oficina de la carretera. En la puerta, Yesenia te espera con una chalina y una sonrisa.' : 'El acta tiene secciones, pero mezcla datos con opiniones sobre personas.',
        pro: { ok: 'Accesos, acuerdos, contactos y pendientes con fecha: lo que necesita quien se queda.', risk: 'Las opiniones sobre personas en un acta se convierten en etiquetas que duran años.', info: 'Que la firmen quien entrega, quien recibe y Gestión Humana.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Acta lista antes de llegar!' : 'Algo de eso no va en un acta.'],
      };
    },
    rules: [[BP, 'Un acta de entrega guarda hechos, accesos y pendientes; no opiniones sobre personas.']],
    mirada: {
      ve: 'La entrega de cargo es el momento en que el conocimiento de una persona se vuelve de la empresa. Si se hace mal, la nueva jefatura pasará meses llamando a Arequipa. Si se hace bien, Freddy se va y la planta no lo nota… salvo porque lo extrañan.',
      visual: { tipo: 'flujo', titulo: 'La entrega de cargo', pasos: ['Accesos', 'Acuerdos', 'Contactos', 'Pendientes', 'Firmas'] },
    },
  },
  {
    id: 'i2', t: '08:40', ch: 'presencial', who: 'jefe', titulo: 'Lo que Freddy deja', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de la jefatura · Ayaviri', show: ['cumplimiento', 'calidad'],
    body: () => `<p>Freddy te recibe en su oficina, que ya tiene tres cajas de cartón en una esquina. Te entrega su lista de pendientes en dos hojas escritas a mano, con letra apretada.</p><p>«Le escribí todo. <mark class="clave">Hasta lo que no me gusta que se sepa.</mark>»</p>`,
    type: 'flag', prompt: 'Marca los pendientes con un problema legal o de gestión.',
    doc: { t: 'Pendientes de la planta de Ayaviri', sub: 'Escrito por el Ing. Freddy Choque · dos hojas' },
    lines: [
      { id: 'contr', t: '«Tres operarios de quesería, de temporada, desde agosto: el contrato se los iba a hacer y nunca se hizo. Todo de palabra.»', bad: 'ley', why: 'Los contratos sujetos a modalidad deben constar por escrito, con su duración y causa objetiva. Hay que regularizarlo ya.' },
      { id: 'emo', t: '«Exámenes médicos ocupacionales: 22 trabajadores con certificado de más de dos años.»', bad: 'ley', why: 'El certificado del examen médico ocupacional vale dos años. Hay que programarlos, a cargo de la empresa.' },
      { id: 'efec', t: '«A ocho ganaderos se les paga en efectivo, sin recibo, porque no tienen cuenta.»', bad: 'bp', why: 'Sin recibo no hay control ni respaldo para nadie. Se puede pagar en efectivo, pero con constancia firmada.' },
      { id: 'calidad', t: '«Pedí tres veces un supervisor de calidad. Nunca llegó.»', duda: 'No es un error: es una necesidad que la decisión de ayer puede resolver.' },
      { id: 'temp', t: '«Registro de temperatura de la cámara de quesos, cada cuatro horas, al día.»' },
      { id: 'cald', t: '«Mantenimiento del caldero programado para enero.»' },
    ],
    res: ({ missLey }) => ({
      out: missLey ? 'Marcas lo de los pagos en efectivo, pero los contratos verbales o los exámenes vencidos se quedan en la hoja.' : 'Le pides a Yesenia que prepare hoy los tres contratos por escrito y que coordine con la clínica de Juliaca una visita para los 22 exámenes. Freddy suspira: «Eso me pesaba».',
      flags: missLey ? [] : ['contratos_regularizados', 'examenes_programados'],
      cartera: { pendientes: missLey ? 'Pendientes legales a medias' : 'Contratos y exámenes en regularización' },
      pro: { ok: 'Una entrega de cargo es también una auditoría silenciosa: aparece lo que nadie revisaba.', risk: 'Un contrato de temporada solo de palabra deja a la empresa sin poder probar que era temporal.', info: 'Lo de los ganaderos sin recibo, llévalo a Administración: no es tema de personal, pero es un riesgo.' },
      kusi: missLey ? ['preocupado', 'Hay pendientes con la ley en esa hoja…'] : ['celebra', '¡Lo que pesaba, ya tiene dueña!'],
    }),
    rules: [[LEY, 'Los contratos sujetos a modalidad deben constar por escrito y por triplicado, con su duración y causa objetiva (D.S. 003-97-TR, art. 72).'], [LEY, 'El certificado del examen médico ocupacional tiene validez de dos años; su costo es del empleador (D.S. 005-2012-TR, art. 101).']],
    mirada: {
      ve: 'Lo que Freddy no pudo resolver en años aparece en dos hojas. No por mala fe: por falta de alguien en Gestión Humana que viniera a Ayaviri. Ahora esas hojas son tu lista de trabajo.',
      visual: { tipo: 'matriz', x: 'Facilidad para resolver', y: 'Riesgo legal', cuadrantes: ['Hazlo ya', 'Planifícalo', 'Ordénalo', 'Sigue así'], items: [['Contratos verbales', .7, .9], ['Exámenes vencidos', .5, .85], ['Pagos sin recibo', .6, .5], ['Supervisor de calidad', .3, .4], ['Registro de temperatura', .9, .1]] },
      normas: [{ ley: 'D.S. 003-97-TR, art. 72', dice: 'Los contratos de trabajo sujetos a modalidad necesariamente deberán constar por escrito y por triplicado, consignando su duración y las causas objetivas de la contratación.', practica: 'Un contrato de temporada de palabra no puede probar que era temporal. Se regulariza por escrito.' }],
    },
  },
  {
    id: 'i3', t: '10:20', ch: 'presencial', who: null, titulo: 'Cómo anunciarlo', banner: 'assets/3d/scenes/planta.webp', lugar: 'Patio de la planta de Ayaviri', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Son las diez y veinte. En el patio, junto a los tanques de acero, esperan los dos turnos de quesería, los de acopio y los choferes. ${F.has('rumor_suelto') ? 'Algunos todavía creen que hoy anuncian el cierre.' : 'Ya saben que Freddy se va; quieren saber quién sigue.'}</p><p>Freddy está a tu lado. <mark class="clave">¿Cómo lo haces?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Hablar tú primero, luego Freddy para despedirse y después la nueva jefatura; Yesenia traduce al quechua lo importante y al final se abren preguntas.',
        res: { q: 'buena', fx: { personas: 5, confianza: 4 }, flags: ['anuncio_presencial'], cartera: { anuncio: 'Anuncio en persona, en castellano y quechua' },
          out: 'Freddy habla dos minutos y se le quiebra la voz. La gente aplaude con las manos frías. Cuando Yesenia traduce «la planta sigue», un señor mayor se quita el chullo y asiente.',
          pro: { ok: 'Quien se va se despide, quien llega se presenta, la empresa explica y todos pueden preguntar.', info: 'Que Yesenia traduzca no es un detalle: la mitad de quesería piensa en quechua.' },
          kusi: ['feliz', '¡Las manos frías y el corazón caliente!'] } },
      { id: 'b', label: 'Leer un comunicado formal de la gerencia y pegarlo en la pared, para que todos tengan la misma versión.',
        res: { q: 'aceptable', fx: { personas: -1, cumplimiento: 1 }, flags: ['anuncio_frio'], cartera: { anuncio: 'Comunicado leído y pegado' },
          out: 'Lees tres párrafos. Nadie pregunta nada. Media hora después, en la garita, ya circula otra versión de lo que «de verdad» pasó.',
          pro: { ok: 'Todos reciben la misma información.', risk: 'Sin espacio para preguntas, las preguntas se van a la garita, donde las responde el rumor.' },
          kusi: ['pensando', 'Mismo papel… distintas versiones en la garita.'] } },
      { id: 'c', label: 'Dejar que Freddy lo anuncie solo: es su gente y lo van a escuchar a él.',
        res: { q: 'riesgosa', fx: { personas: 1, confianza: -3 },
          out: 'Freddy anuncia, emocionado. Cuando alguien pregunta «¿y qué va a pasar con nosotros?», él dice «eso pregúntenle a Juliaca». Juliaca eres tú, y estás callada/o en una esquina.',
          pro: { ok: 'La gente escucha a alguien que conoce.', risk: 'Quien se va no puede responder por la empresa. La empresa tiene que dar la cara.' },
          kusi: ['preocupado', 'Juliaca tiene que hablar…'] } },
    ],
    rules: [[BP, 'Un cambio de jefatura se anuncia en persona, con quien se va, quien llega y espacio para preguntas.']],
    mirada: {
      ve: 'En una planta lejana, «Juliaca» es una palabra que significa «la empresa que no viene». Que Gestión Humana esté en el patio, a menos seis grados, dando la cara, comunica más que cualquier comunicado.',
      visual: { tipo: 'flujo', titulo: 'El anuncio', pasos: ['La empresa explica', 'Freddy se despide', 'La nueva jefatura se presenta', 'Yesenia traduce', 'Preguntas'] },
    },
  },
  {
    id: 'i4', t: '11:00', ch: 'presencial', who: null, titulo: 'Las preguntas', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Patio de la planta de Ayaviri', show: ['personas', 'confianza', 'etica'],
    body: () => `<p>Se levantan varias manos a la vez. Yesenia te susurra: «Responda primero las que más miedo dan». <mark class="clave">Hay tiempo para dos respuestas largas</mark>; el resto, en corto.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que respondes primero.',
    opts: [
      { id: 'cierre', label: 'Una operaria: «¿Van a cerrar la planta?».', info: 'Respondes que no: la planta sigue, el acopio sigue, y el directorio de hoy está hablando de cómo hacer que la gente se quede, no de cómo irse. La operaria se sienta más tranquila.' },
      { id: 'bono', label: 'Un chofer: «¿Nos van a bajar el bono de producción?».', info: 'Respondes que no hay ningún cambio en los bonos y que, si lo hubiera, se conversaría antes. El chofer dice «eso quería escuchar».' },
      { id: 'sindicato', label: 'Un operario joven del turno noche de quesería: «Y si nos organizamos en sindicato, ¿nos botan?».', info: 'Hay un silencio. Respondes que organizarse en un sindicato es un derecho que la Constitución garantiza, y que nadie puede ser despedido ni tratado distinto por eso. El joven se queda mirándote. Alguien detrás de él anota algo en un cuaderno.' },
      { id: 'freddy', label: 'Don Celestino, ganadero: «¿Por qué no le subieron el sueldo al inge para que se quede?».', info: 'Respondes con honestidad que la empresa llegó tarde a esa conversación y que el cuadro de sueldos de las jefaturas se está revisando. Don Celestino dice algo en quechua; Yesenia traduce: «Más vale tarde».' },
    ],
    res: picks => ({
      q: null, fx: { personas: picks.includes('cierre') ? 3 : 1, confianza: 2, etica: picks.includes('sindicato') ? 3 : 0 },
      flags: picks.includes('sindicato') ? ['sindicato_respetado'] : ['sindicato_esquivado'],
      out: picks.includes('sindicato') ? 'Terminas la asamblea con la sensación de que la última pregunta no era solo una pregunta.' : 'La pregunta del sindicato queda flotando. Cuando sales, ves al joven conversando con otros cinco al lado de la garita.',
      kusi: ['pensando', 'Hay preguntas que son anuncios…'],
    }),
    rules: [[LEY, 'El Estado garantiza la libertad sindical (Constitución, art. 28 inc. 1).']],
    mirada: {
      ve: 'En una asamblea, la gente pregunta lo que teme. Las preguntas sobre cierre, bonos y sindicato no son preguntas sueltas: son el termómetro de una planta que se sintió lejos durante años. Responderlas con verdad es lo único que construye confianza.',
      visual: { tipo: 'mensaje', titulo: 'Lo que la empresa dijo hoy', txt: 'La planta sigue. Los bonos no cambian. Organizarse es un derecho. Llegamos tarde con Freddy y estamos revisando por qué.' },
    },
  },
  {
    id: 'i5', t: '14:00', ch: 'whatsapp', who: null, titulo: 'Lo que queda en manos de Yesenia', banner: 'assets/foto2/chocan-manos.webp', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Después del chairo, que estaba buenísimo, te sientas con Yesenia en la oficina de la planta. Desde el lunes ella va a sostener mucho de lo que se habló hoy. ${F.has('yesenia_ignorada') ? 'Todavía recuerdas que la semana pasada empezaste con ella con el pie izquierdo.' : 'En dos semanas pasó de contestarte con monosílabos a guardarte chairo.'}</p><p>Le escribes lo acordado para que <mark class="clave">quede por escrito y con su nombre</mark>.</p>`,
    type: 'compose', enviaA: 'yesenia', para: 'Para: Yesenia Condori', boton: 'Enviar a Yesenia',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Lo que lidera', ops: [
        { id: 'q1', t: 'Yesenia, desde el lunes lideras la convocatoria de los seis operarios y la nueva inducción de Ayaviri, con la nueva jefatura.', ok: true, por: 'Un encargo completo, con su nombre.' },
        { id: 'q2', t: 'Yesenia, desde el lunes me ayudas con lo de Ayaviri.', ok: false, por: '«Ayudar» no dice qué es suyo.' },
      ] },
      { id: 'urg', t: 'Lo urgente', ops: [
        { id: 'u1', t: 'Esta semana: los tres contratos por escrito y la fecha de la clínica para los 22 exámenes.', ok: true, por: 'Lo legal primero, con plazo.' },
        { id: 'u2', t: 'Y cuando puedas, lo de los contratos.', ok: false, por: 'Un contrato verbal de temporada no puede esperar a «cuando puedas».' },
      ] },
      { id: 'apoyo', t: 'Tu apoyo', ops: [
        { id: 'a1', t: 'Los martes conversamos media hora por videollamada. Lo que sabes de esta planta no lo sabe nadie más.', ok: true, por: 'Acompañamiento y reconocimiento.' },
        { id: 'a2', t: 'Mándame todo para revisarlo antes.', ok: false, por: 'Te vuelve cuello de botella y le quita autoridad frente a la planta.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'u1', 'a1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, calidad: q === 'buena' ? 3 : 0 },
        flags: q !== 'riesgosa' ? ['yesenia_lidera'] : [], cartera: { convocatoria: q === 'buena' ? 'Yesenia lidera convocatoria e inducción' : 'Encargo poco claro' },
        out: q === 'buena' ? 'Yesenia lee el mensaje en su celular, lo lee otra vez y lo copia a mano en la primera página de un cuaderno nuevo.' : 'Yesenia responde «ya». No le queda claro qué es suyo y qué sigue siendo de Juliaca.',
        pro: { ok: 'Le das un encargo completo, lo urgente con plazo y un espacio fijo de apoyo.', risk: 'Revisar todo antes la convierte otra vez en «la que espera a Juliaca».', info: 'Nadie conoce mejor que ella a las familias que podrían postular.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Un cuaderno nuevo para una etapa nueva!' : 'Falta claridad en el encargo.'],
      };
    },
    rules: [[LEY, 'Los contratos sujetos a modalidad deben constar por escrito (D.S. 003-97-TR, art. 72).']],
    mirada: { ve: 'Coordinar dos plantas desde una de ellas solo funciona si en la otra hay alguien con autoridad real. Darle a Yesenia un encargo completo, con su nombre, es la forma de que Ayaviri deje de depender de que Juliaca venga.' },
  },
  {
    id: 'i6', t: '16:10', ch: 'presencial', who: 'jefe', titulo: 'El USB', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de la jefatura · Ayaviri', show: ['etica', 'cumplimiento', 'personas'],
    body: () => `<p>Mientras firman el acta, ves que Freddy conecta un USB a la laptop de la empresa. Está copiando la carpeta «Ganaderos»: nombres, DNI, celulares, litros por día y precios pactados de los 60 proveedores.</p><p>«Es por si acaso. <mark class="clave">Son doce años de contactos míos.</mark>» La láctea de Arequipa también compra leche en Melgar.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle con calma que esos datos son de la empresa y de los ganaderos, que la confidencialidad sigue después de irse, y pedirle que borre la copia delante de ti; sus contactos personales en su celular son suyos.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 1 }, rel: { jefe: -1 }, flags: ['datos_ganaderos_protegidos'],
          out: 'Freddy se pone rojo. Por un segundo crees que va a discutir. Luego borra la carpeta del USB y te lo muestra vacío. «Tiene razón. No me quiero ir así.»',
          pro: { ok: 'Proteges a los ganaderos y a la empresa sin humillar a Freddy.', info: 'Distingue lo que es suyo (su experiencia, su red personal) de lo que es de la empresa (la base, los precios).' },
          kusi: ['pensando', 'Difícil… y bien hecho.'] } },
      { id: 'b', label: 'Hacer como que no viste nada: es su último día y no quieres arruinar la despedida.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4 }, flags: ['datos_ganaderos_fuera'],
          out: 'Freddy guarda el USB en su casaca. La despedida sale bonita. En marzo, tres ganaderos de Umachiri empiezan a venderle a una láctea de Arequipa.',
          pro: { ok: 'Cuidas el momento.', risk: 'Datos personales de 60 ganaderos y precios de la empresa salen hacia un competidor.' },
          kusi: ['preocupado', 'Ese USB va a viajar a Arequipa…'] } },
      { id: 'c', label: 'Llamar a Mariela en ese momento y pedirle que suspenda la firma del acta hasta que Freddy entregue el USB.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: -3 }, rel: { jefe: -1 }, flags: ['datos_ganaderos_protegidos'],
          out: 'Mariela sale del directorio para atenderte. Freddy entrega el USB, ofendido. La firma se hace en silencio y la despedida de mañana ya no será la misma.',
          pro: { ok: 'Los datos se quedan.', risk: 'Escalar sin conversar primero convierte un error en una humillación, el último día de doce años.' },
          kusi: ['pensando', 'Se resolvió… pero así no.'] } },
    ],
    rules: [[LEY, 'Quienes intervienen en el tratamiento de datos deben guardar confidencialidad, incluso después de terminada su relación (Ley 29733, art. 17).']],
    mirada: {
      ve: 'Las salidas, incluso las más queridas, son el momento de mayor riesgo para la información. No hace falta desconfiar de todos: hace falta mirar, y cuando ves algo, decirlo con firmeza y con respeto. Freddy no es un ladrón; es alguien que se va con miedo.',
      visual: { tipo: 'balanza', a: { t: 'Lo que es de Freddy', items: ['Su experiencia', 'Su red personal', 'Su prestigio con los ganaderos'] }, b: { t: 'Lo que es de la empresa', items: ['La base con DNI y celulares', 'Los precios pactados', 'Los litros de cada ganadero'] } },
    },
  },
  {
    id: 'i7', t: '18:40', ch: 'whatsapp', who: 'asistente', titulo: 'De regreso', banner: 'assets/esc/camino.webp', lugar: 'Carretera Ayaviri–Juliaca', show: ['personas', 'confianza'],
    body: () => `<p>Vuelves de noche, con la pampa negra a los lados y el cielo lleno de estrellas. Estás molida/o. Vibra el celular: es Nely.</p><p>«Hoy estuve sola en Juliaca. Resolví lo de Lidia, firmé tres constancias para revisión y atendí a un señor que vino sin cita. <mark class="clave">¿Hice bien?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Felicitarla por algo concreto y decirle que mañana revisan juntas/os las constancias, diez minutos.',
        res: { q: 'buena', fx: { personas: 4, confianza: 2 }, rel: { asistente: 1 },
          envia: [['nely', 'Hiciste muy bien, Nely. Lo de Lidia fue exactamente el procedimiento. Mañana a las 8:30 vemos las constancias, diez minutos. Hoy fuiste Gestión Humana en Juliaca.']],
          out: 'Nely responde con tres corazones verdes. Cierras los ojos el resto del camino.',
          pro: { ok: 'Un reconocimiento concreto y el siguiente paso claro.', info: '«Hoy fuiste Gestión Humana» es una frase que Nely va a recordar.' },
          kusi: ['feliz', '¡Nely sola y bien! ¡Qué bacán!'] } },
      { id: 'b', label: 'Responder «ok, mañana vemos» y descansar.',
        res: { q: 'aceptable', fx: { personas: -1 },
          out: 'Nely ve el «ok». No sabe si eso es bueno o malo. Tú duermes hasta Pucará.',
          pro: { ok: 'Descansas.', risk: 'Después de un día sola, un «ok» suena a nada.' },
          kusi: ['pensando', 'Una línea más y su día cambiaba…'] } },
    ],
    mirada: { ve: 'El día que la coordinación viaja es el día en que se ve si el equipo funciona sin ella. Nely funcionó. Decírselo esa misma noche es parte de enseñarle que puede.' },
  },
];
