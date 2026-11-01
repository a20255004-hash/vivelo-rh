// Practicante de RR.HH. · Capítulo 3 · «Cien CV» · Semana 1, viernes.
// Hilo del mes: el pedido de Hamburgo obliga a contratar e inducir a 40 operarias.
// Normas citadas:
// - Ley 26772, modificada por la Ley 27270: las ofertas de empleo no pueden contener requisitos discriminatorios
//   (raza, color, sexo, religión, opinión, ascendencia nacional u origen social, condición económica, política, estado civil, edad o de cualquier otra índole).
//   https://faolex.fao.org/docs/pdf/per201903.pdf
// - D.S. 002-98-TR, reglamento de la Ley 26772 (aplica a empleadores, agencias de empleo e intermediarios).
//   https://leap.unep.org/en/countries/pe/national-legislation/decreto-supremo-no-002-98-tr-reglamenta-la-ley-no-26772-que
// - Ley 29973, General de la Persona con Discapacidad (ajustes razonables en los procesos de selección). Texto en SPIJ: https://spij.minjus.gob.pe/
// - RMV: S/ 1,230 desde el 1 de octubre de 2026 (D.S. 015-2026-TR), según la guía del proyecto.

export const CAP = {
  n: 3, titulo: 'Cien CV', dia: 'Semana 1, viernes', foto: 'assets/foto/cv-mano.webp',
  lugar: 'Hilandería Andina · Oficina de RR.HH.',
  inicio: '07:40', fin: '19:30', cierreHora: '18:50',
  apertura: 'Viernes. Llegaron cien CV para la segunda convocatoria y Producción necesita quince operarias más.', boton: 'Abrir la bandeja',
  kusi: 'Hoy filtras personas, no papeles. ¡Con criterio y sin prejuicios!',
  lead: 'Corregiste un aviso que excluía a medio Arequipa, tradujiste los temores de Don Teófilo en criterios y elegiste a quién citar sin mirar la edad ni la foto.',
  reflexion: '¿Qué prejuicio tuyo apareció hoy mientras leías los CV?',
  siguiente: { n: 4, titulo: 'Tu primera charla', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'seleccion', p: 'Segunda convocatoria', j: 'Carla · Don Teófilo', d: 0, e: '100 CV, 15 vacantes' },
  { id: 'aviso', p: 'Aviso de empleo', j: 'Carla · RR.HH.', d: 0, e: 'Se republica el lunes' },
  { id: 'prueba', p: 'Prueba práctica de tejido', j: 'Don Teófilo · Producción', d: 0, e: 'Sábado, 9:00' },
  { id: 'legajos', p: 'Archivo de legajos', j: 'Carla · RR.HH.', d: 0, e: 'Plan de archivo en revisión' },
  { id: 'induccion', p: 'Inducción de operarias', j: 'Carla · RR.HH.', d: 0, e: 'Martes 2: primer grupo de 12' },
];

export const FUTURO = {
  aviso_corregido: ['Corregiste el aviso: sin edad, sin sexo, sin «buena presencia» y con los turnos claros.', 'Las nuevas sabrán desde el inicio que hay turno de noche. Capítulo 6.'],
  aviso_sesgado: ['El aviso se republicó con requisitos discriminatorios.', 'La auditoría del capítulo 7 revisará los avisos.'],
  criterios_objetivos: ['Convertiste los temores de Don Teófilo en criterios que se pueden medir.', 'Don Teófilo empieza a confiar en «la practicante». Capítulo 4.'],
  filtro_edad: ['Aceptaste filtrar por edad y por hijos.', 'Una postulante descartada reclamará. Capítulo 7.'],
  teofilo_choque: ['Le dijiste a Don Teófilo que lo que pedía era ilegal, sin más.', 'Te esquivará en la planta. Capítulo 4.'],
  matriz_buena: ['Tu matriz de filtro mide destreza, experiencia y disponibilidad.', 'Te servirá como evidencia en la auditoría del capítulo 7.'],
  preseleccion_diversa: ['Citaste a la prueba a Edith (47), a Yolanda (sorda) y a Javier.', 'Los verás en la planta en el capítulo 4.'],
  preseleccion_sesgo: ['Citaste a las más jóvenes y a la recomendada.', 'Producción tendrá menos experiencia en las líneas. Capítulo 5.'],
  yolanda_accesible: ['Citaste a Yolanda por escrito, como ella prefiere.', 'Yolanda pedirá un ajuste en la inducción del capítulo 4.'],
  correo_datos: ['Respondiste a Don Teófilo, con copia a Gerencia, con criterios y datos.', 'Gerencia sabe quién eres. Capítulo 8.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Hilandería', sub: 'Carla, Diego y tú', c: '#2F6B3F' },
  carla: { n: 'Carla Zegarra', sub: 'Jefa de RR.HH.', who: 'carla' },
  diego: { n: 'Diego Paredes', sub: 'Practicante de Contabilidad', who: 'diego' },
  teofilo: { n: 'Don Teófilo', sub: 'Jefe de producción', who: 'teofilo' },
  rosa: { n: 'Rosa Huamaní', sub: 'Operaria nueva', who: 'rosa' },
  yolanda: { n: 'Yolanda Ticona', sub: 'Postulante · remalladora', c: '#8E5BA8' },
};

export const WSP = [
  { chat: 'grupo', t: '07:42', de: 'Carla', txt: 'Hoy filtramos CV. Necesito a las 15 citadas para la prueba del sábado. ¡Vamos que se puede! 💪' },
  { chat: 'carla', t: '07:44', de: 'Carla', txt: 'Legal confirmó: la prueba de embarazo ya no está en ningún formato. Gracias por encontrarla.', si: 'prueba_reportada' },
  { chat: 'diego', t: '07:50', de: 'Diego', txt: 'Viernes de chupe 🦐 Si no bajas a la una, te guardo sitio.' },
  { chat: 'teofilo', t: '08:40', de: 'Don Teófilo', txt: 'Señorita, ya me arreglaron el credencial de la Huamaní. Gracias.', si: 'dni_carpeta' },
  { chat: 'rosa', t: '12:15', de: 'Rosa', txt: 'Señorita, me dijeron que el martes es la charla. ¿Tengo que llevar algo? No quiero quedar mal 🙏' },
  { chat: 'yolanda', t: '15:40', de: 'Yolanda', txt: 'Gracias por escribirme. Sí puedo el sábado. Soy sorda, ¿la prueba tiene instrucciones escritas? 🙂', si: 'yolanda_accesible' },
  { chat: 'diego', t: '19:05', de: 'Diego', txt: '¿Sobreviviste a los cien CV? Yo sigo con mi conciliación 🥲' },
];

export const CORREOS = [
  { t: '07:45', de: 'Carla Zegarra', para: 'Practicante de RR.HH.', asunto: 'Segunda convocatoria', html: '<p>Llegaron 100 CV con el aviso que publicó Producción la semana pasada. Antes de republicarlo el lunes, revísalo, por favor. Luego filtra con Don Teófilo.</p><p>Carla</p>' },
  { t: '17:20', de: 'Don Teófilo Ccama', para: 'RR.HH.', asunto: '¿Y esta lista?', html: '<p>Con copia a la Gerencia de Planta. Necesito saber con qué criterio se escogió a las citadas para la prueba de mañana.</p><p>T. Ccama</p>' },
];

export const QUIZ = [
  { q: 'Un aviso dice «operarias de 18 a 30 años, sin hijos». ¿Qué problema tiene?', ops: ['Ninguno: lo decide la empresa', 'Pone requisitos discriminatorios por edad y situación familiar', 'Solo que es muy largo', 'Que no dice el sueldo'], ok: 1, por: 'La Ley 26772 prohíbe requisitos que discriminen, entre otros, por sexo, edad o estado civil.' },
  { q: 'Don Teófilo dice que las que tienen hijos «faltan mucho». ¿Qué haces con eso?', ops: ['Filtras a las que tienen hijos', 'Lo traduces en un criterio medible y legal, como disponibilidad para los turnos', 'Lo ignoras sin hablar con él', 'Le pides a cada postulante que demuestre que no tiene hijos'], ok: 1, por: 'Detrás de un prejuicio suele haber una necesidad real. Se mide la necesidad, no el prejuicio.' },
  { q: 'Una postulante es sorda. ¿Qué corresponde en la selección?', ops: ['Descartarla por seguridad', 'Ofrecer ajustes razonables, como instrucciones escritas', 'Hacerle la misma llamada que a todas', 'Pedirle un certificado antes de citarla'], ok: 1, por: 'La Ley 29973 pide ajustes razonables para que una persona con discapacidad compita en igualdad.' },
  { q: '¿Por qué pedir «CV con foto» y «buena presencia» es un riesgo?', ops: ['Porque las fotos pesan mucho', 'Porque abre la puerta a filtrar por apariencia, origen o edad', 'No es ningún riesgo', 'Porque la foto sale borrosa'], ok: 1, por: 'Esos requisitos no miden la capacidad para el puesto y favorecen la discriminación.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'c1', t: '07:55', ch: 'documento', who: null, titulo: 'El aviso de Producción', banner: 'assets/esc/lupa.webp', show: ['cumplimiento', 'etica', 'calidad'],
    body: (n, F) => `<p>Abres el aviso que Producción publicó la semana pasada en un portal de empleos y en la radio de la Avenida Parra. Con ese texto llegaron los cien CV.</p>${F.has('prueba_reportada') ? '<p>Después de lo de la caja 14, ya sabes que los formatos viejos esconden cosas.</p>' : ''}<p>Carla lo quiere republicar el lunes. <mark class="clave">Antes, lo tienes que revisar tú</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que es discriminatorio o lo que debería corregirse antes de republicar el aviso.',
    doc: { t: 'Se buscan operarias de tejido', sub: 'Hilandería Andina S.A.C. · Parque Industrial de Arequipa' },
    lines: [
      { id: 'sexo', t: 'Requisito: sexo femenino.', bad: LEY, why: 'El puesto no exige ser mujer. Excluir por sexo es discriminatorio, aunque la mayoría de quienes postulan sean mujeres.' },
      { id: 'edad', t: 'Edad: de 18 a 30 años.', bad: LEY, why: 'La edad es un motivo de discriminación prohibido. Una tejedora de 47 años puede ser la más hábil de la línea.' },
      { id: 'hijos', t: 'Sin hijos ni carga familiar.', bad: LEY, why: 'Filtrar por situación familiar discrimina, sobre todo a las madres.' },
      { id: 'presencia', t: 'Buena presencia. Enviar CV con foto.', bad: BP, why: '«Buena presencia» no se puede medir y la foto invita a filtrar por apariencia, origen o edad.' },
      { id: 'exp', t: 'Deseable: experiencia en tejido de punto, remallado o costura.' },
      { id: 'turnos', t: 'Turnos rotativos de día y de noche.', duda: 'Está bien decirlo claro desde el aviso: quien postula sabe a qué se compromete.' },
      { id: 'sueldo', t: 'Remuneración: S/ 1,230 más beneficios de ley.', duda: 'Coincide con la remuneración mínima vital vigente. Ponerla en el aviso es transparente.' },
      { id: 'radio', t: 'Informes: en la radio, de lunes a viernes.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'El aviso se republica casi igual. El lunes llegarán otros cien CV filtrados por un prejuicio.' : 'Le mandas a Carla el aviso corregido: sin sexo, sin edad, sin hijos ni foto, y con los turnos y el sueldo bien claros. Ella lo aprueba con un «👌 esto debió ser así desde el inicio».',
      flags: [missLey ? 'aviso_sesgado' : 'aviso_corregido'], cartera: { aviso: missLey ? 'Se republica sin cambios' : 'Aviso corregido y aprobado' },
      rel: { carla: missLey ? 0 : 1 },
      pro: { ok: 'Un aviso limpio atrae más postulantes y reduce reclamos.', risk: 'Un aviso discriminatorio puede ser sancionado aunque «siempre se haya publicado así».', info: 'Decir los turnos y el sueldo desde el aviso evita renuncias en el primer mes.' },
      kusi: missLey ? ['preocupado', 'Ese aviso deja fuera a mucha gente buena…'] : ['celebra', '¡Aviso limpio! Más gente puede postular.'],
    }),
    rules: [[LEY, 'Las ofertas de empleo no pueden tener requisitos discriminatorios por sexo, edad, estado civil u otros (Ley 26772).'], [BP, 'Pide solo lo que el puesto necesita y di con claridad las condiciones.']],
    mirada: {
      ve: 'El aviso es el primer filtro, y muchas veces el más injusto: decide quién ni siquiera postula. Una practicante que lo revisa protege a la empresa de una sanción y a cientos de personas de quedar fuera sin razón.',
      visual: { tipo: 'cambio', titulo: 'Del aviso viejo al aviso nuevo', pares: [['Sexo femenino', 'Sin requisito de sexo'], ['De 18 a 30 años', 'Sin requisito de edad'], ['Sin hijos', 'Disponibilidad para turnos rotativos'], ['Buena presencia, CV con foto', 'Experiencia en tejido o costura, deseable']] },
      normas: [{ ley: 'Ley 26772, modificada por la Ley 27270', dice: 'Las ofertas de empleo no pueden contener requisitos discriminatorios por raza, color, sexo, religión, opinión, origen social, condición económica, estado civil, edad o de cualquier otra índole.', practica: 'La prohibición alcanza también a las agencias e intermediarios que publican el aviso por la empresa.' }],
    },
  },
  {
    id: 'c2', t: '09:10', ch: 'presencial', who: 'teofilo', titulo: '«Chicas jóvenes»', banner: 'assets/foto/supervisa.webp', lugar: 'Oficina de RR.HH.', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>Don Teófilo llega con la pila de CV impresos y el ceño fruncido.${F.has('teofilo_molesto') ? ' Todavía no te perdona lo de los DNI.' : ''}</p><p>«Señorita, le hago fácil: <mark class="clave">chicas jóvenes, sin hijos</mark>. La campaña pasada contraté señoras con tres wawas y en un mes se me fueron ocho. Faltaban, se cansaban, y yo con el pedido encima.»</p><p>Lo dice sin maldad. Está cansado de verdad.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Preguntarle qué necesita de verdad la línea y proponerle medir eso: destreza, experiencia y disponibilidad para los turnos.',
        res: { q: 'buena', fx: { etica: 5, personas: 4, confianza: 2, tiempo: -2 }, rel: { teofilo: 1 }, flags: ['criterios_objetivos'], cartera: { prueba: 'Prueba práctica con criterios de destreza' },
          out: 'Don Teófilo se rasca la cabeza: «Necesito que no se me vayan y que sepan remallar». Le propones una prueba práctica de 20 minutos y una pregunta clara sobre los turnos. «Ya. Pruebe, pues», dice.',
          pro: { ok: 'Escuchas el miedo detrás del prejuicio y lo conviertes en algo medible.', risk: 'Si los criterios no funcionan en la práctica, volverá a pedir «chicas jóvenes». Hay que probar y medir.', info: 'Pregúntale por qué se fueron las ocho de la campaña pasada: quizá no fueron los hijos, sino los turnos sin aviso.' },
          kusi: ['celebra', '¡Del prejuicio al criterio! Así se trabaja con Producción.'] } },
      { id: 'b', label: 'Aplicar su filtro: él conoce su línea, lleva años en la planta y tú eres practicante desde el lunes.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5, tiempo: 3 }, rel: { teofilo: 1 }, flags: ['filtro_edad'],
          out: 'Separas los CV de mayores de 30 y los que mencionan hijos. Quedan 38. Entre los descartados hay tejedoras con quince años de experiencia.',
          pro: { ok: 'Terminas rápido y Don Teófilo queda contento.', risk: 'Filtrar por edad y por hijos es discriminatorio, y quien lo aplica también responde. Ser practicante no te exime.' },
          kusi: ['triste', 'Esos CV eran de personas que sabían tejer…'] } },
      { id: 'c', label: 'Decirle que eso es ilegal y que no lo vas a hacer.',
        res: { q: 'aceptable', fx: { etica: 3, cumplimiento: 3, personas: -3 }, rel: { teofilo: -1 }, flags: ['teofilo_choque'],
          out: '«¿Ilegal? ¿Ahora la practicante me va a enseñar?», dice, y se va con los CV debajo del brazo. Tienes que pedírselos a Carla para seguir trabajando.',
          pro: { ok: 'No te prestas a discriminar.', risk: 'Un «no» sin alternativa deja a Don Teófilo con su problema, y con más bronca hacia RR.HH.', info: 'Su necesidad era real: personal que no renuncie. Eso sí se podía trabajar.' },
          kusi: ['pensando', 'Bien el fondo, pero faltó el puente.'] } },
    ],
    rules: [[LEY, 'El reglamento de la Ley 26772 alcanza a quien selecciona por la empresa (D.S. 002-98-TR).'], [BP, 'Pregunta qué necesidad hay detrás de un requisito antes de aceptarlo o rechazarlo.']],
    mirada: {
      ve: 'Muchos prejuicios en la selección nacen de una mala experiencia real. Don Teófilo no odia a las madres: tiene miedo de perder gente a mitad del pedido. Una profesional le quita el prejuicio sin quitarle la razón de fondo, y la mide con criterios justos.',
      visual: { tipo: 'cambio', titulo: 'De lo que pide a lo que necesita', pares: [['Chicas jóvenes', 'Destreza manual, comprobada en una prueba'], ['Sin hijos', 'Disponibilidad para turnos, explicada antes de firmar'], ['Que no falten', 'Condiciones claras y seguimiento el primer mes']] },
    },
  },
  {
    id: 'c3', t: '10:20', ch: 'documento', who: null, titulo: 'La matriz de filtro', banner: 'assets/esc/planilla.webp', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>Abres un Excel nuevo. La pestaña se llama «Hoja1» y la renombras «Filtro_2da_conv». Necesitas una matriz que cualquiera pueda aplicar igual a los cien CV.</p><p>Carla pasa y te deja un consejo: <mark class="clave">«Si no lo puedes medir, no lo pongas»</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de tu matriz de filtro.', boton: 'Guardar la matriz',
    bloques: [
      { id: 'mide', t: 'Lo que mides', n: 3, ops: [
        { id: 'm1', t: 'Experiencia en tejido, remallado o costura (años y dónde).', ok: true, por: 'Se puede comprobar con preguntas y con la prueba.' },
        { id: 'm2', t: 'Resultado de la prueba práctica de 20 minutos.', ok: true, por: 'Mide la destreza real, no la que dice el papel.' },
        { id: 'm3', t: 'Disponibilidad declarada para turnos rotativos, después de explicarlos.', ok: true, por: 'Es el riesgo que preocupa a Don Teófilo, medido de forma justa.' },
        { id: 'm4', t: 'Distancia de la casa a la planta, para descartar a quienes viven lejos.', ok: false, por: 'Puede excluir por condición económica. Si importa el transporte, se conversa, no se descarta.' },
      ] },
      { id: 'nunca', t: 'Lo que nunca entra a la matriz', n: 2, ops: [
        { id: 'n1', t: 'Edad, sexo, estado civil, hijos o apariencia.', ok: true, por: 'Son motivos prohibidos de discriminación.' },
        { id: 'n2', t: 'Lugar de origen o lengua materna.', ok: true, por: 'Hablar quechua o venir de Puno no dice nada sobre cómo teje alguien.' },
        { id: 'n3', t: 'Nada: todo dato ayuda a decidir.', ok: false, por: 'Hay datos que no deben influir en la decisión.' },
      ] },
      { id: 'ajuste', t: 'Ajustes', n: 2, ops: [
        { id: 'j1', t: 'Ajustes razonables para postulantes con discapacidad (instrucciones escritas, intérprete, más tiempo).', ok: true, por: 'Así compiten en igualdad.' },
        { id: 'j2', t: 'Misma escala de puntaje para todos, anotada en la hoja.', ok: true, por: 'Si alguien reclama, puedes mostrar cómo decidiste.' },
        { id: 'j3', t: 'Un punto extra a quien venga recomendada por un supervisor.', ok: false, por: 'La recomendación no mide la capacidad y abre la puerta al favoritismo.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : -2, etica: q === 'buena' ? 2 : -1 },
        flags: q === 'buena' ? ['matriz_buena'] : [], cartera: { seleccion: q === 'buena' ? 'Matriz de filtro lista' : 'Matriz con criterios dudosos' },
        out: q === 'buena' ? 'Tu matriz cabe en una pantalla: tres criterios, una escala y una fila de ajustes. Carla la copia para la tercera convocatoria.' : 'La matriz funciona, pero tiene criterios que dejan fuera a gente por razones que no tienen que ver con tejer.',
        pro: { ok: 'Una matriz con criterios medibles se puede explicar y defender.', risk: 'Un solo criterio injusto, repetido cien veces, es una discriminación en masa.', info: 'Guarda la matriz con los puntajes: es tu evidencia si alguien pregunta por qué no la citaron.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Matriz lista! Medible y justa.' : 'Algún criterio no mide lo que importa…'],
      };
    },
    rules: [[LEY, 'Las personas con discapacidad tienen derecho a ajustes razonables en los procesos de selección (Ley 29973).'], [BP, 'Si no lo puedes medir, no lo pongas en la matriz.']],
    mirada: {
      ve: 'Una matriz de filtro es una promesa: a todas se las mide con la misma regla. Lo que se deja fuera de la matriz importa tanto como lo que entra. Ahí se decide si la selección es justa o solo rápida.',
      visual: { tipo: 'embudo', titulo: 'De cien CV a la prueba práctica', niveles: [['CV recibidos', 100], ['Con experiencia en tejido o costura', 52], ['Disponibles para turnos', 31], ['Citadas a la prueba', 20]] },
      normas: [{ ley: 'Ley 29973, General de la Persona con Discapacidad', dice: 'Reconoce el derecho de las personas con discapacidad a trabajar en igualdad de condiciones y a recibir ajustes razonables.', practica: 'Unas instrucciones escritas para una postulante sorda cuestan poco y le permiten competir.' }],
    },
  },
  {
    id: 'c4', t: '11:45', ch: 'sistema', who: null, titulo: 'Los últimos cupos', banner: 'assets/foto/entrevista-cv.webp', show: ['calidad', 'etica', 'personas'],
    body: () => `<p>Con la matriz aplicada, quedan 17 citadas y seis CV empatados para <mark class="clave">los tres últimos cupos</mark> de la prueba del sábado.</p><p>El ventilador de la oficina gira, pero el sol de mediodía entra igual por la ventana.</p>`,
    type: 'pick', n: 3, prompt: 'Elige a las tres personas que citarás a la prueba práctica.', boton: 'Citar a estas tres', resumen: 'Citaste a',
    cols: ['Postulante', 'Lo que dice su CV'],
    rows: [
      { id: 'edith', cells: ['Edith Coaquira, 47 años', '15 años tejiendo chompas en un taller de Juliaca. Dos hijos adolescentes. Disponible para turnos.'] },
      { id: 'yolanda', cells: ['Yolanda Ticona, 34 años', 'Remalladora en Gamarra durante 6 años. Persona sorda. Disponible para turnos.'] },
      { id: 'javier', cells: ['Javier Mamani, 28 años', 'Tejedor en máquina rectilínea, 4 años. Postuló aunque el aviso decía «operarias».'] },
      { id: 'mariela', cells: ['Mariela Rondón, 25 años', 'Costurera en Lima, 2 años. Venezolana con carné de extranjería. Solo turno de día.'] },
      { id: 'kiara', cells: ['Kiara Apaza, 19 años', 'Sin experiencia. Vive a diez minutos de la planta. Disponible para turnos.'] },
      { id: 'sheyla', cells: ['Sheyla Valdivia, 22 años', 'Sin experiencia. CV con foto de estudio. Recomendada por un supervisor de acabados.'] },
    ],
    score: { edith: 3, yolanda: 3, javier: 3, mariela: 1, kiara: 1, sheyla: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, etica: picks.includes('sheyla') ? -4 : 3 },
        flags: [q === 'buena' ? 'preseleccion_diversa' : 'preseleccion_sesgo'], cartera: { seleccion: '20 citadas a la prueba del sábado' },
        out: q === 'buena' ? 'Citas a quienes más puntaje tienen en tu matriz. Ninguna se parece a «chicas jóvenes», y las tres saben tejer.' : picks.includes('sheyla') ? 'Sheyla queda citada. El supervisor que la recomendó te agradece en el pasillo. Edith, con quince años de oficio, queda en lista de espera.' : 'Citas a gente con buena disposición, pero dejas fuera a algunas de las que más saben.',
        pro: { ok: 'Aplicas la matriz aunque el resultado incomode.', risk: 'Saltarte tu propia matriz por una recomendación la vuelve inútil.', info: 'Mariela no puede de noche: anótala para la tercera convocatoria, que tiene un turno fijo de día.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Experiencia primero. ¡Buen ojo!' : '¿Qué decía tu matriz?'],
      };
    },
    rules: [[BP, 'Aplica la misma matriz a todos, aunque haya recomendaciones.']],
    mirada: {
      ve: 'Al final del filtro aparecen los empates y las presiones. Es justo ahí donde la matriz demuestra si sirve: una persona de 47 años, una mujer sorda y un hombre que postuló a «operarias» pueden ser las mejores tejedoras de la convocatoria.',
      visual: { tipo: 'matriz', x: 'Disponibilidad para turnos', y: 'Experiencia comprobable', cuadrantes: ['Experiencia, solo de día', 'Citar', 'Para otra convocatoria', 'Formar si sobra cupo'], items: [['Edith', .85, .95], ['Yolanda', .8, .85], ['Javier', .75, .7], ['Mariela', .2, .5], ['Kiara', .85, .1], ['Sheyla', .6, .05]] },
    },
  },
  {
    id: 'c5', t: '13:10', ch: 'presencial', who: null, titulo: 'Chupe de viernes', banner: 'assets/foto/cafe.webp', lugar: 'Comedor de la planta', show: ['personas', 'confianza'],
    body: (n, F) => `<p>En el comedor huele a camarón y a huacatay. La señora Justina Mamani te hace espacio en su mesa${F.has('vecina_protegida') ? ': «Marleni me contó que le tuviste sus papeles listos. Eres derechita, hijita»' : ''}.</p><p>Te ve con los CV debajo del brazo. «¿Don Teófilo te está pidiendo chicas jóvenes? <mark class="clave">Ay, ese hombre</mark>… Desde que enviudó vive en la planta. Nadie lo reemplaza ni en vacaciones.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Preguntarle cómo era la planta cuando ella entró, hace 22 años.',
        res: { q: null, fx: { personas: 3, confianza: 1 }, out: 'Justina se ríe: «Entramos cuarentonas varias, ¿ah? Y aquí seguimos». Te cuenta que ella misma enseñó a remallar a la mitad de la línea de acabados.', kusi: ['feliz', 'Justina tiene la historia de la planta en la cabeza.'] } },
      { id: 'b', label: 'Comer rápido y volver a los CV.',
        res: { q: null, fx: { tiempo: 2, personas: -1 }, out: 'Te tomas el chupe en diez minutos y subes con la lengua quemada. Los CV siguen ahí, igual que antes.', kusi: ['pensando', 'El chupe se disfruta despacio…'] } },
    ],
    mirada: { ve: 'Las veteranas de una planta saben cosas que no están en ningún informe: por qué alguien es como es, quién enseña a quién, qué se intentó antes. Escucharlas en el almuerzo también es trabajo de RR.HH.' },
  },
  {
    id: 'c6', t: '15:20', ch: 'llamada', who: null, titulo: 'Citar a la prueba', banner: 'assets/foto2/callcenter.webp', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>Toca llamar a las últimas citadas para la prueba de mañana sábado, a las 9:00, en la línea de tejido.</p><p>El anexo de RR.HH. tiene eco y <mark class="clave">la lista de Carla dice solo «llamar»</mark>.</p>`,
    type: 'calls',
    calls: [['Edith Coaquira', 'Contesta desde el terminal terrestre', 'Sí, señorita, estoy llegando de Juliaca. Mañana a las nueve ahí estoy. ¿Llevo mis tijeras?'], ['Javier Mamani', 'Contesta, sorprendido', '¿En serio me llaman? El aviso decía operarias… pensé que no me iban a ver ni el CV.'], ['Yolanda Ticona', 'Contesta su hermana', 'Señorita, Yolanda es sorda. Ella prefiere mensajes escritos. ¿Le paso su número de WhatsApp?']],
    prompt: 'Edith y Javier confirmaron. La hermana de Yolanda te ofrece su WhatsApp. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Escribirle a Yolanda directamente, con la dirección, la hora y qué llevar, y preguntarle si necesita algún ajuste para la prueba.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 3, tiempo: -1 }, flags: ['yolanda_accesible'],
          envia: ['yolanda', 'Hola, Yolanda. Soy la practicante de RR.HH. de Hilandería Andina. Estás citada a la prueba práctica de tejido mañana sábado a las 9:00, en el Parque Industrial (entrada por la calle 2). Trae tu DNI. La prueba dura 20 minutos. ¿Necesitas algún ajuste para hacerla cómoda? Puedes responderme por aquí.'],
          out: 'Yolanda responde con un pulgar y una pregunta: si las instrucciones estarán escritas. Le pides a Don Teófilo que las imprima. Él gruñe, pero las imprime.',
          pro: { ok: 'Le hablas a ella, no a través de su hermana, y le preguntas qué necesita.', info: 'Pregunta siempre a la persona cómo prefiere comunicarse. No supongas.' },
          kusi: ['celebra', 'Le hablaste a Yolanda, no de Yolanda. ¡Qué divino!'] } },
      { id: 'b', label: 'Pedirle a la hermana que le avise, porque así es más rápido y ella sabe cómo explicarle mejor.',
        res: { q: 'aceptable', fx: { personas: 1, tiempo: 2 },
          out: 'La hermana le avisa, pero olvida decirle que lleve el DNI. Yolanda llega mañana sin él y espera media hora en portería.',
          pro: { ok: 'Ella queda avisada.', risk: 'Usar a un familiar como intermediario le quita a Yolanda la información completa y su autonomía.' },
          kusi: ['pensando', 'Avisada, sí. Pero no por ti.'] } },
      { id: 'c', label: 'Pasarla a la lista de espera: en una planta con tanto ruido, una persona sorda podría no escuchar una alarma.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5 },
          out: 'Yolanda se queda sin prueba. Lo que no sabes es que la planta tiene alarmas con luz estroboscópica desde 2022.',
          pro: { ok: 'Piensas en la seguridad.', risk: 'Descartar por una suposición, sin evaluar ajustes, es discriminar por discapacidad.' },
          kusi: ['indignado', '¿Y si le preguntabas a ella?'] } },
    ],
    rules: [[LEY, 'Descartar a una persona por su discapacidad sin evaluar ajustes razonables es discriminatorio (Ley 29973).'], [BP, 'Pregunta a cada persona cómo prefiere que la contactes.']],
    mirada: {
      ve: 'La accesibilidad empieza en lo pequeño: un mensaje escrito en lugar de una llamada. Una profesional le habla directamente a la persona con discapacidad, le pregunta qué necesita y no decide por ella qué puede o no puede hacer.',
      visual: { tipo: 'flujo', titulo: 'Una citación accesible', pasos: ['Preguntar el canal preferido', 'Mensaje escrito y completo', 'Ofrecer ajustes', 'Avisar a Producción', 'Confirmar el día anterior'] },
    },
  },
  {
    id: 'c7', t: '17:30', ch: 'correo', who: null, titulo: '«¿Y esta lista?»', banner: 'assets/foto2/tension.webp', show: ['confianza', 'cumplimiento', 'personas'],
    mail: { from: 'Don Teófilo Ccama · Jefe de producción', to: 'RR.HH.', asunto: '¿Y esta lista?' },
    body: (n, F) => `<p>Con copia a la Gerencia de Planta. Necesito saber con qué criterio se escogió a las citadas para la prueba de mañana. Veo una señora de 47, un varón y una persona sorda.${F.has('criterios_objetivos') ? ' Acordamos una prueba, pero esto no es lo que yo esperaba.' : ''}</p><p><mark class="clave">Producción no está para experimentos</mark>.</p><p>T. Ccama</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Responder a todos con la matriz adjunta: los tres criterios, el puntaje de cada citada y que mañana la prueba lo confirmará.',
        res: { q: 'buena', fx: { confianza: 5, cumplimiento: 4, personas: 1 }, rel: { teofilo: 0, carla: 1 }, flags: ['correo_datos'],
          responde: 'Don Teófilo: las citadas tienen el mayor puntaje en la matriz de filtro (adjunta): experiencia en tejido, disponibilidad para turnos y, mañana, la prueba práctica de 20 minutos. Edith tiene 15 años de oficio; Yolanda, 6 de remallado; Javier, 4 en máquina rectilínea. Si en la prueba no rinden, no pasan. Quedo atenta.',
          out: 'La gerente de planta responde solo a ti y a Carla: «Claro y bien sustentado». Don Teófilo no contesta. Pero imprime la matriz.',
          pro: { ok: 'Respondes a una duda pública con criterios públicos, sin atacar a nadie.', risk: 'Don Teófilo puede sentirse expuesto. Habla con él en persona el lunes.', info: 'La prueba de mañana es tu mejor argumento: deja que los resultados hablen.' },
          kusi: ['celebra', 'Datos contra dudas. ¡Bacán!'] } },
      { id: 'b', label: 'Pedirle disculpas a todos y ofrecer cambiar a las tres citadas por postulantes más jóvenes.',
        res: { q: 'riesgosa', fx: { confianza: -3, etica: -6, cumplimiento: -4 }, rel: { teofilo: 1 }, flags: ['filtro_edad'],
          responde: 'Don Teófilo: disculpe, tiene razón. Cambiaré a las tres citadas por postulantes más jóvenes y sin observaciones.',
          out: 'Don Teófilo responde: «Así me gusta». La gerente de planta no responde nada. Carla te llama: «¿Por qué cambiaste a las de mejor puntaje?».',
          pro: { ok: 'Evitas el conflicto hoy.', risk: 'Cambiar a las mejores por su edad o su discapacidad, por escrito y con copia a Gerencia, es dejar evidencia de discriminación.' },
          kusi: ['triste', 'Edith ya había llegado de Juliaca…'] } },
      { id: 'c', label: 'No responder al correo y reenviárselo a Carla para que ella lo maneje.',
        res: { q: 'aceptable', fx: { confianza: -1, tiempo: 1 },
          out: 'Carla responde a las 19:40 desde su casa. Al día siguiente te dice: «Lo hiciste bien con la matriz. La próxima, defiéndela tú: es tu trabajo».',
          pro: { ok: 'Escalas una discusión con copia a Gerencia.', risk: 'Tenías los datos para responder y dejaste que tu jefa lo hiciera por ti.' },
          kusi: ['pensando', 'Tenías la matriz… ¿por qué no la mostraste?'] } },
    ],
    rules: [[BP, 'Responde a una duda pública con criterios verificables, no con disculpas ni con silencio.']],
    mirada: {
      ve: 'Cuando alguien cuestiona una selección con copia a la gerencia, la tentación es ceder o esconderse. La matriz existe justamente para este momento: permite explicar cada decisión con datos, sin pelear y sin retroceder en lo justo.',
      visual: { tipo: 'balanza', a: { t: 'Ceder a la presión', items: ['Don Teófilo satisfecho hoy', 'Sin conflicto con copia a Gerencia'] }, b: { t: 'Sostener la matriz', items: ['Las mejores tejedoras en la prueba', 'Una decisión que se puede explicar', 'Gerencia ve criterio'] } },
    },
  },
];
