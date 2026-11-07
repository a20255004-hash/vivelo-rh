// Practicante profesional en una ORH del Estado · Capítulo 5 · «La tabla de puntajes» · Semana 1, viernes.
// Hilo: la evaluación curricular del CAS 012-2026 se arma en un Excel compartido; un error de fórmula y una celda editada a mano cambian el orden de mérito.
// Normas citadas:
// - Ley 29973, Ley General de la Persona con Discapacidad, art. 48, y su Reglamento (D.S. 002-2014-MIMP), num. 51.1:
//   bonificación del 15 % sobre el puntaje final aprobatorio en concursos públicos de méritos.
//   https://cdn.www.gob.pe/uploads/document/file/8090935/6784703-informe-tecnico-n-121-2025-servir-gpgsc.pdf
//   https://cdn.www.gob.pe/uploads/document/file/5675778/5037898-informe-tecnico-0214-2021-servir-gpgsc.pdf
// - D.Leg. 1057 y su reglamento (D.S. 075-2008-PCM), ya citados en el capítulo 4.
// Entidad, personas y casos son ficticios.

export const CAP = {
  n: 5, titulo: 'La tabla de puntajes', dia: 'Semana 1, viernes', foto: 'assets/esc/planilla.webp',
  lugar: 'Oficina de Recursos Humanos · Wanchaq, Cusco',
  inicio: '08:00', fin: '17:00', cierreHora: '16:50',
  apertura: 'Viernes. Llegas con un termo de mate de muña que te mandó tu mamá. Hoy se califica la evaluación curricular del CAS 012-2026, y la tabla vive en un Excel compartido que abren cinco personas a la vez.', boton: 'Abrir la tabla',
  kusi: 'Una fórmula mal puesta también puede ser injusta. ¡Revisa celda por celda!',
  lead: 'Encontraste el error de fórmula y la celda editada a mano, decidiste qué hacer con esa evidencia, rehiciste la tabla para que no se pueda tocar, respondiste a quienes llamaron antes de tiempo y dejaste todo por escrito para el comité.',
  reflexion: 'Si un error de Excel cambia quién gana un concurso, ¿de quién es la responsabilidad?',
  siguiente: { n: 6, titulo: 'La presión', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'tabla', p: 'Tabla de evaluación curricular · CAS 012-2026', j: 'Comité de selección', d: 0, e: 'Por calificar hoy' },
  { id: 'nota', p: 'Nota informativa al comité', j: 'Gladys · ORH', d: 0, e: 'Por redactar' },
  { id: 'victor', p: 'Constancia del Prof. Víctor Quispe', j: 'Gladys · ORH', d: 0, e: 'Copias de la UGEL llegan el lunes' },
  { id: 'publicacion', p: 'Publicación de resultados curriculares', j: 'Comité de selección', d: 0, e: 'Lunes, 17:00' },
];

export const FUTURO = {
  tabla_revisada: ['Encontraste el error de fórmula y la celda de Kevin Mendoza editada a mano.', 'El orden de mérito cambió antes de publicarse.'],
  edicion_reportada: ['Le mostraste a Gladys el historial del Excel con la edición del usuario «asesor.gerencia».', 'El lunes, el asesor del gerente vendrá a buscarte.'],
  edicion_silencio: ['Corregiste la celda de Kevin Mendoza sin contarle a nadie quién la había cambiado.', 'Nadie sabrá que alguien tocó la tabla.'],
  tabla_protegida: ['La tabla quedó protegida, con una versión en PDF firmada por el comité.', 'Nadie podrá cambiarla sin dejar rastro.'],
  nota_comite: ['Escribiste una nota informativa al comité sobre las correcciones.', 'Será la base de tu informe técnico del martes.'],
  reserva_fuera: ['En la chicharronería no contaste nada del concurso.', 'Rubén aprendió algo de ti.'],
  reserva_rota: ['En la chicharronería contaste quién iba primero en el concurso.', 'El lunes ya lo sabrá medio Cusco.'],
};

export const CHATS = {
  grupo: { n: 'ORH · Equipo', sub: 'Gladys, Rubén y el equipo', c: '#2F6B3F' },
  gladys: { n: 'Gladys Huamán', sub: 'Especialista de la ORH · tu supervisora', who: 'gladys-orh' },
  ruben: { n: 'Rubén Ccahua', sub: 'Practicante', who: 'colega' },
  comite: { n: 'Comité CAS 012-2026', sub: 'Lic. Valer, Gladys y el área usuaria', c: '#5B3A8C' },
};

export const WSP = [
  { chat: 'comite', t: '08:05', de: 'Lic. Valer', txt: 'Tabla curricular lista hoy a las 4. Publicación el lunes a las 5 p. m., como dice el cronograma.' },
  { chat: 'ruben', t: '08:30', de: 'Rubén', txt: 'Hoy no toco nada del concurso, ya sabes 😅 Estoy foliando los legajos de la caja 32.', si: 'conflicto_ruben' },
  { chat: 'ruben', t: '08:30', de: 'Rubén', txt: 'Yo te ayudo con la tabla, ya me sé los expedientes de memoria 💪', si: 'ruben_sigue' },
  { chat: 'gladys', t: '10:40', de: 'Gladys', txt: 'Mándame captura del historial. No cierres el archivo.', si: 'edicion_reportada' },
  { chat: 'grupo', t: '16:45', de: 'Rubén', txt: '¿Chicharrón en Saylla? Invita la Gladys 🐷 (mentira, cada uno paga)' },
];

export const CORREOS = [
  { t: '08:10', de: 'Gladys Huamán', para: 'Practicante de la ORH', asunto: 'Tabla de evaluación curricular', html: '<p>Te dejo el Excel con los 26 aptos. Revisa las fórmulas antes de que el comité valide: la plantilla es del año pasado. La bonificación por discapacidad se aplica sobre el puntaje final aprobatorio, no en esta etapa.</p><p>Gladys</p>' },
];

export const QUIZ = [
  { q: '¿Sobre qué puntaje se aplica la bonificación del 15 % a una persona con discapacidad en un concurso público?', ops: ['Sobre el puntaje de la evaluación curricular', 'Sobre el puntaje final aprobatorio', 'Sobre el puntaje de la entrevista', 'Se suma 15 puntos fijos'], ok: 1, por: 'Ley 29973, art. 48, y su reglamento (num. 51.1): 15 % sobre el puntaje final aprobatorio.' },
  { q: 'Encuentras una celda editada a mano por un usuario ajeno a la ORH. ¿Qué haces?', ops: ['La corriges y no dices nada', 'Guardas evidencia del historial y se lo informas a tu supervisora', 'La dejas como está', 'Borras el historial'], ok: 1, por: 'La evidencia de una manipulación se guarda y se informa a quien conduce el concurso.' },
  { q: 'Un postulante llama el viernes para saber su puntaje antes de la publicación del lunes. ¿Qué respondes?', ops: ['Le das su puntaje, es solo el suyo', 'Le dices que los resultados se publican el lunes a las 17:00 en el portal, igual para todos', 'Le dices que va bien', 'No contestas'], ok: 1, por: 'Adelantar resultados a uno solo rompe la igualdad del concurso.' },
  { q: '¿Qué protege mejor una tabla de puntajes?', ops: ['Que la tenga una sola persona en su USB', 'Fórmulas revisadas, hoja protegida y una versión en PDF firmada por el comité', 'Imprimirla en color', 'Mandarla por WhatsApp al comité'], ok: 1, por: 'La tabla validada debe quedar en una versión que nadie pueda cambiar sin dejar rastro.' },
  { q: 'Un error de fórmula ponía 0 en la experiencia de un postulante. ¿Qué debe quedar escrito?', ops: ['Nada, ya se corrigió', 'Qué se corrigió, por qué, cómo cambió el orden y quién lo validó', 'Solo el nuevo puntaje', 'El nombre de quien se equivocó, para sancionarlo'], ok: 1, por: 'Una corrección sin registro parece una manipulación. Con registro, es transparencia.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 't1', t: '08:30', ch: 'sistema', who: null, titulo: 'Celda por celda', banner: 'assets/esc/planilla.webp', lugar: 'Excel «Eval_curricular_CAS012.xlsx» · compartido', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>La tabla tiene 26 filas, cinco columnas de puntaje y una de total. Ordenas de mayor a menor y aparece el orden de mérito. Algo no cuadra: Edwin Huamaní tiene cero en experiencia y en su expediente hay cinco años de constancias.</p><p>${F.has('lizbeth_apta') ? 'Lizbeth Condori aparece en la fila 17, con su declaración jurada sin firma. ' : ''}<mark class="clave">Revisa las filas antes de que el comité las valide</mark>.</p>`,
    type: 'flag', prompt: 'Marca las filas de la tabla con problemas.',
    doc: { t: 'Evaluación curricular · CAS 012-2026 · Asistente Administrativo', sub: 'Puntaje máximo: formación 30 · experiencia 40 · capacitación 30' },
    lines: [
      { id: 'edwin', t: 'Edwin Huamaní · Formación 25 · Experiencia 0 (fórmula: =SUMA(K9:K9), columna K vacía) · Total 45.', bad: BP, why: 'La fórmula suma una columna vacía. Con sus cinco años acreditados, su experiencia es 35 y su total, 80.' },
      { id: 'kevin', t: 'Kevin Mendoza · Experiencia 40 (valor escrito, sin fórmula; historial: «asesor.gerencia», jueves 21:14) · Total 82.', bad: BP, why: 'La celda fue sobrescrita a mano de noche por un usuario ajeno a la ORH. Con su fórmula, su experiencia es 30 y su total, 72.' },
      { id: 'bonif', t: 'Ana Lucía Mayhua · Total 66 + 15 % por discapacidad = 75,9.', bad: LEY, why: 'La bonificación del 15 % se aplica sobre el puntaje final aprobatorio, no en la evaluación curricular.' },
      { id: 'ok1', t: 'Jhon Ccahua · Formación 20 · Experiencia 25 · Capacitación 15 · Total 60.' },
      { id: 'max', t: 'Hilda Mayta · Capacitación 35.', bad: BP, why: 'El máximo de capacitación es 30. Un puntaje sobre el máximo indica un error de digitación.' },
      { id: 'ok2', t: 'Marleni Puma · Formación 30 · Experiencia 30 · Capacitación 18 · Total 78.' },
    ],
    res: ({ missLey, hitsLey, hitsBp, falsos }) => {
      const bien = (hitsBp || 0) >= 2 && !missLey && !falsos;
      return {
        out: bien ? 'Corriges las fórmulas en una copia. El orden cambia: Edwin sube del puesto 20 al 1, Marleni queda segunda y Kevin baja al cuarto. Te quedas mirando la fila de Kevin y la hora del historial: jueves, 21:14.' : 'Corriges algunas filas, pero el orden de mérito sigue torcido. Si se publica así, alguien que debía pasar a entrevista se queda fuera.',
        flags: ['tabla_revisada'], rel: { 'gladys-orh': bien ? 1 : 0 },
        cartera: { tabla: bien ? 'Errores corregidos en copia; orden de mérito cambió' : 'Corregida a medias' },
        pro: { ok: 'Revisar fórmulas, máximos e historial evita que un error decida un concurso.', risk: 'Una bonificación aplicada antes de tiempo o una celda sobrescrita cambian quién pasa a entrevista.', info: 'Trabaja en una copia y guarda la original tal como la encontraste: es evidencia.' },
        kusi: bien ? ['sorpresa', '¡El orden cambió por completo!'] : ['preocupado', 'Hay filas que siguen mal.'],
      };
    },
    rules: [[LEY, 'Ley 29973, art. 48, y su reglamento (num. 51.1): la bonificación del 15 % se aplica sobre el puntaje final aprobatorio.'], [BP, 'Los puntajes se calculan con fórmulas revisadas y dentro de los máximos de las bases.']],
    mirada: {
      ve: 'Una celda con cero o un número escrito a mano no parecen gran cosa. Pero en una tabla de mérito, cada punto decide quién entra a entrevista. La transparencia empieza mucho antes de publicar: empieza en la fórmula.',
      visual: { tipo: 'cambio', titulo: 'El orden de mérito', pares: [['1. Kevin Mendoza · 82', '1. Edwin Huamaní · 80'], ['2. Marleni Puma · 78', '2. Marleni Puma · 78'], ['3. Ana Lucía Mayhua · 75,9', '3. Kevin Mendoza · 72'], ['20. Edwin Huamaní · 45', '4. Ana Lucía Mayhua · 66']] },
      normas: [{ ley: 'Ley 29973, art. 48, y D.S. 002-2014-MIMP, num. 51.1', dice: 'En los concursos públicos de méritos, la persona con discapacidad que cumpla los requisitos y alcance un puntaje aprobatorio recibe una bonificación del 15 % sobre el puntaje final.', practica: 'Ana Lucía conserva su derecho: se le aplicará el 15 % al final, no en esta etapa.' }],
    },
  },
  {
    id: 't2', t: '10:20', ch: 'presencial', who: 'gladys-orh', titulo: 'El historial', banner: 'assets/foto2/tension.webp', lugar: 'Tu escritorio, con la pantalla girada hacia la pared', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>El historial del Excel es claro: el usuario «asesor.gerencia» abrió el archivo el jueves a las 21:14 y cambió una sola celda, la de Kevin Mendoza. ${F.has('postit_reportado') ? 'Recuerdas el pósit del expediente 14: «Recomendado de Gerencia. F.M.».' : F.has('postit_ignorado') ? 'Recuerdas el pósit amarillo del expediente 14, el que no reportaste.' : ''}</p><p>Corregir la celda toma dos segundos. <mark class="clave">Decidir qué hacer con lo que sabes, no</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Guardar una captura del historial y una copia del archivo tal como estaba, y mostrárselo a Gladys antes de corregir nada.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 4, confianza: 2 }, rel: { 'gladys-orh': 1 }, flags: ['edicion_reportada'], cartera: { tabla: 'Evidencia guardada; Gladys informada' },
          out: 'Gladys mira la pantalla y se quita los lentes. «¿Quién le dio acceso a la Gerencia a este archivo?» Llama a Informática y le pide que quite todos los permisos externos. Luego te dice, bajito: «Hiciste bien. El lunes alguien va a venir a preguntar».',
          pro: { ok: 'Conservas la evidencia y la pones en manos de quien conduce el proceso.', risk: 'Te expones ante alguien con poder en la Gerencia.', info: 'Nunca corrijas sobre el archivo original: trabaja en una copia.' },
          kusi: ['animo', 'Valiente y ordenada. ¡Así!'] } },
      { id: 'b', label: 'Corregir la celda con su fórmula y no decir quién la cambió: el resultado queda bien y no te metes con la Gerencia.',
        res: { q: 'aceptable', fx: { calidad: 3, etica: -3, confianza: -1 }, flags: ['edicion_silencio'], cartera: { tabla: 'Celda corregida; edición sin reportar' },
          out: 'La celda vuelve a decir 30. Nadie sabe que alguien la cambió de noche. Y ese alguien todavía tiene permiso para abrir el archivo.',
          pro: { ok: 'El puntaje queda correcto.', risk: 'Si no se informa, quien manipuló la tabla puede volver a hacerlo, y el comité no sabrá que debe protegerla.' },
          kusi: ['pensando', 'Arreglaste la celda… no el problema.'] } },
      { id: 'c', label: 'Preguntarle a Rubén si sabe quién es «asesor.gerencia», antes de decirle algo a Gladys.',
        res: { q: 'riesgosa', fx: { etica: -2, confianza: -3 },
          out: 'Rubén abre los ojos: «¡Es el Fredy Mamani! ¿Le cambió el puntaje a alguien?». A la hora del almuerzo, dos personas de Logística te preguntan si es cierto que «la Gerencia metió mano al CAS».',
          pro: { ok: 'Quieres estar segura antes de informar.', risk: 'Lo que debía llegar con cuidado a la supervisora termina como rumor en el comedor.' },
          kusi: ['preocupado', 'Ahora lo sabe medio piso…'] } },
    ],
    rules: [[BP, 'Ante una posible manipulación, se guarda la evidencia y se informa a quien conduce el proceso. No se corrige en silencio ni se comenta.']],
    mirada: {
      ve: 'Tú no sabes por qué alguien de la Gerencia cambió esa celda: quizás tenía un dato que tú no. Tu tarea no es acusar a nadie, es que la evidencia llegue intacta a quien puede preguntarlo con autoridad.',
      visual: { tipo: 'flujo', titulo: 'Ante una posible manipulación', pasos: ['Ver', 'Guardar evidencia', 'No tocar el original', 'Informar a tu supervisora', 'Proteger el archivo'], aqui: 1 },
    },
  },
  {
    id: 't3', t: '12:00', ch: 'sistema', who: null, titulo: 'Una tabla que no se pueda tocar', banner: 'assets/3d/scenes/balanza.webp', lugar: 'Excel, versión nueva', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Gladys te pide rehacer la tabla para que lo de anoche no pueda repetirse. El comité valida a las cuatro.</p><p><mark class="clave">Arma la nueva tabla</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la nueva tabla.', boton: 'Entregar la tabla a Gladys',
    bloques: [
      { id: 'calc', t: 'Cálculo', n: 2, ops: [
        { id: 'c1', t: 'Fórmulas revisadas fila por fila y bloqueadas.', ok: true },
        { id: 'c2', t: 'Una validación que no deja poner puntajes por encima del máximo de las bases.', ok: true, por: 'Evita el 35 sobre 30.' },
        { id: 'c3', t: 'Escribir los totales a mano, para controlarlos mejor.', ok: false, por: 'Un número escrito a mano es justo lo que permitió el problema.' },
      ] },
      { id: 'acceso', t: 'Acceso', n: 2, ops: [
        { id: 'a1', t: 'Solo el comité y la ORH pueden editar; los demás, nada.', ok: true },
        { id: 'a2', t: 'Una versión en PDF firmada por el comité al validar.', ok: true, por: 'Lo que se publica es esa versión, no el Excel vivo.' },
        { id: 'a3', t: 'Compartir el enlace con la Gerencia «para que estén informados».', ok: false, por: 'La Gerencia no evalúa: no necesita acceso.' },
      ] },
      { id: 'bonif', t: 'Bonificaciones', n: 1, ops: [
        { id: 'b1', t: 'Una columna aparte, que se llena solo en el puntaje final aprobatorio.', ok: true, por: 'Como dice el reglamento de la Ley 29973.' },
        { id: 'b2', t: 'Sumar el 15 % desde ahora para no olvidarlo.', ok: false, por: 'Se aplica sobre el puntaje final aprobatorio, no antes.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : 0 },
        flags: q === 'riesgosa' ? [] : ['tabla_protegida'], cartera: { tabla: q === 'riesgosa' ? 'Tabla nueva con vacíos' : 'Tabla protegida; PDF para firma del comité' },
        out: q === 'buena' ? 'A las 15:40 la tabla está bloqueada y el PDF listo para firmas. Gladys lo revisa: «Esto ya aguanta una auditoría».' : 'La tabla mejora, pero alguna puerta queda abierta.',
        pro: { ok: 'Fórmulas bloqueadas, acceso restringido y una versión firmada.', info: 'Guarda en el expediente del concurso la versión original, la corregida y el PDF firmado.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Tabla blindada!' : 'Todavía hay una puerta abierta.'],
      };
    },
    rules: [[BP, 'Lo que se publica es la versión validada y firmada por el comité, no un archivo que cualquiera puede editar.']],
    mirada: {
      ve: 'Un Excel compartido es cómodo y peligroso. En un concurso público, la comodidad de muchos editores se convierte en la duda de todos los postulantes. Proteger la tabla es proteger el resultado.',
      visual: { tipo: 'cambio', titulo: 'De la tabla vieja a la nueva', pares: [['Cinco editores', 'Solo comité y ORH'], ['Totales a mano', 'Fórmulas bloqueadas'], ['15 % desde el inicio', '15 % sobre el puntaje final'], ['Excel vivo', 'PDF firmado']] },
    },
  },
  {
    id: 't4', t: '14:00', ch: 'llamada', who: null, titulo: 'Los que no pueden esperar', banner: 'assets/foto/llamada.webp', lugar: 'Teléfono fijo de la ORH', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>El teléfono no para desde que volviste del almuerzo. Todos quieren lo mismo: <mark class="clave">saber antes del lunes</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Edwin Huamaní · postulante', 'Voz joven, nerviosa', '«Señorita, disculpe. Solo quiero saber si pasé. Trabajo en una obra en Quillabamba y si paso tengo que pedir permiso para la entrevista.»'],
      ['Un señor que no da su nombre', 'Tono amable, con autoridad', '«Llamo de parte de un amigo de la Gerencia. Solo para confirmar que lo de Kevin Mendoza está bien encaminado, ¿no?»'],
      ['Hilda Mayta · postulante', 'Habla pausado', '«Hija, me dijeron que me iban a descartar por la edad. ¿Es cierto? Tengo 52 años y veinte de experiencia.»'],
    ],
    prompt: 'Recibiste tres llamadas. ¿Cómo respondes a todas?',
    choices: [
      { id: 'a', label: 'A los tres lo mismo: los resultados se publican el lunes a las 17:00 en el portal, igual para todos. A Hilda le aclaras que la edad no es requisito. Anotas la llamada del señor sin nombre para Gladys.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, personas: 2 }, rel: { 'gladys-orh': 1 },
          out: 'Edwin suspira: «Ya, señorita, el lunes entonces». Hilda te agradece. El señor sin nombre cuelga sin despedirse. Gladys lee tu nota: «Otra más para el acta».',
          pro: { ok: 'La misma respuesta para todos, sin adelantar nada a nadie.', info: 'A Edwin puedes contarle cuándo serían las entrevistas según el cronograma: eso es público.' },
          kusi: ['animo', 'Igual para todos. ¡Bien!'] } },
      { id: 'b', label: 'A Edwin, que te da pena, decirle «tranquilo, te fue bien». A los demás, que esperen al lunes.',
        res: { q: 'riesgosa', fx: { personas: 3, etica: -5, cumplimiento: -4 },
          out: 'Edwin grita de alegría y te da las gracias tres veces. Le cuenta a su jefe de obra, que conoce a otro postulante. El lunes, ese otro postulante pregunta por qué a Edwin le avisaron antes.',
          pro: { ok: 'Le das tranquilidad a alguien que la necesita.', risk: 'Adelantar un resultado a uno solo rompe la igualdad, aunque sea por compasión.' },
          kusi: ['preocupado', 'Compasión con uno, desigualdad con todos.'] } },
      { id: 'c', label: 'No contestar más el teléfono hasta el lunes: así no te equivocas.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -3 },
          out: 'El teléfono suena doce veces más. Hilda pasa el fin de semana creyendo que la descartaron por su edad.',
          pro: { ok: 'No adelantas nada.', risk: 'Dejar sin respuesta a la gente aumenta la desconfianza. Podías informar lo público.' },
          kusi: ['pensando', 'Lo público sí se podía decir.'] } },
    ],
    rules: [[BP, 'Antes de la publicación, a todos se les da la misma información: cuándo y dónde se publican los resultados.']],
    mirada: {
      ve: 'Edwin trabaja en una obra a cinco horas; Hilda teme que su edad la descalifique; el señor sin nombre quiere confirmar un favor. Las tres llamadas merecen la misma respuesta, y cada una, un trato distinto en el tono.',
      visual: { tipo: 'mensaje', titulo: 'La misma respuesta para todos', txt: 'Los resultados de la evaluación curricular se publican el lunes a las 17:00 en el portal institucional, igual para todos los postulantes.' },
    },
  },
  {
    id: 't5', t: '15:50', ch: 'documento', who: 'gladys-orh', titulo: 'La nota al comité', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio', show: ['calidad', 'confianza', 'cumplimiento'],
    body: () => `<p>El comité valida en diez minutos. Gladys te pide una nota corta para explicar por qué la tabla cambió. «Que se entienda en un minuto. <mark class="clave">Hechos, no adjetivos</mark>.»</p>`,
    type: 'compose', enviaA: 'comite', para: 'Para: Comité CAS 012-2026 · copia a Gladys Huamán', boton: 'Enviar la nota',
    prompt: 'Elige una frase para cada parte de la nota.',
    slots: [
      { id: 'que', t: 'Qué se corrigió', ops: [
        { id: 'q1', t: 'Se corrigieron tres errores: una fórmula que sumaba una columna vacía, un puntaje sobre el máximo y una bonificación aplicada antes del puntaje final.', ok: true, por: 'Concreto y verificable.' },
        { id: 'q2', t: 'La tabla tenía varios errores graves por descuido del equipo.', ok: false, por: 'Adjetivos y culpas, sin datos.' },
      ] },
      { id: 'celda', t: 'Sobre la celda editada', ops: [
        { id: 'c1', t: 'Además, una celda de experiencia fue sobrescrita a mano el jueves a las 21:14 por un usuario externo a la ORH; se adjunta la captura del historial.', ok: true, por: 'El hecho, con evidencia, sin acusar.' },
        { id: 'c2', t: 'Además, alguien de la Gerencia quiso favorecer a un postulante.', ok: false, por: 'Afirmas una intención que no puedes probar.' },
        { id: 'c3', t: 'No mencionarlo: ya está corregido.', ok: null, por: 'El comité debe saberlo para proteger el proceso.' },
      ] },
      { id: 'efecto', t: 'El efecto', ops: [
        { id: 'e1', t: 'Con las correcciones, cambió el orden de mérito; se adjuntan la versión original y la corregida.', ok: true, por: 'Transparencia completa.' },
        { id: 'e2', t: 'El orden casi no cambió.', ok: false, por: 'No es cierto: cambió el primer lugar.' },
      ] },
    ],
    res: sel => {
      const malas = ['q2', 'c2', 'e2'].filter(x => Object.values(sel).includes(x)).length, buenas = ['q1', 'c1', 'e1'].filter(x => Object.values(sel).includes(x)).length;
      const q = malas ? 'riesgosa' : buenas === 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 3 : 0 }, rel: { 'gladys-orh': q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['nota_comite'], cartera: { nota: q === 'riesgosa' ? 'Nota por rehacer' : 'Nota enviada al comité' },
        out: q === 'buena' ? 'El comité firma el PDF a las 16:20. La Lic. Valer escribe al grupo: «Gracias por la nota. Así se trabaja». Y pide que el martes la conviertas en informe técnico.' : q === 'aceptable' ? 'El comité firma, pero pregunta por lo que no dijiste.' : 'La Lic. Valer te devuelve la nota: «Esto no lo puedo firmar. Solo hechos».',
        pro: { ok: 'Lo que se corrigió, la evidencia y el efecto: el comité puede decidir con todo a la vista.', risk: 'Afirmar intenciones que no puedes probar te expone a ti y debilita el caso.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Hechos, no adjetivos!' : 'Revisa lo que no puedes probar.'],
      };
    },
    mirada: {
      ve: 'Una corrección sin explicación parece una manipulación. La misma corrección, con una nota clara y la evidencia adjunta, es transparencia. La diferencia está en lo que dejas escrito.',
      visual: { tipo: 'balanza', a: { t: 'Corregir y callar', items: ['Rápido', 'Parece manipulación', 'El comité no sabe'] }, b: { t: 'Corregir y explicar', items: ['Una nota más', 'Evidencia adjunta', 'El comité decide informado'] } },
    },
  },
  {
    id: 't6', t: '16:55', ch: 'presencial', who: 'colega', titulo: 'Chicharrón en Saylla', banner: 'assets/foto2/chocan-manos.webp', lugar: 'Chicharronería en Saylla, al caer la tarde', show: ['etica', 'personas', 'confianza'],
    body: () => `<p>Rubén consiguió que medio equipo vaya a Saylla. El chicharrón llega con mote, papa dorada y su sarsa de cebolla. Por fin te ríes después de una semana larga.</p><p>Un amigo de Rubén, que trabaja en otra oficina del gobierno regional, te pregunta con la boca llena: «Oye, ¿y <mark class="clave">quién va ganando el CAS</mark>?».</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Sonreír y decirle que los resultados salen el lunes a las cinco en el portal, y cambiar de tema hacia el partido del Cienciano.',
        res: { q: 'buena', fx: { etica: 4, personas: 2 }, rel: { colega: 1 }, flags: ['reserva_fuera'],
          out: 'El amigo se ríe: «Ya, ya, la señorita reserva». Rubén te mira y asiente. Más tarde te dice, ya en la combi: «Yo le hubiera contado. Gracias por no hacerlo».',
          pro: { ok: 'La reserva no se apaga a las cinco de la tarde.', info: 'Puedes cambiar de tema sin ser antipática.' },
          kusi: ['feliz', 'Reserva y buen humor. ¡Qué bacán!'] } },
      { id: 'b', label: 'Contarle, en confianza, que el primero cambió por un error de Excel. Total, es del mismo gobierno regional.',
        res: { q: 'riesgosa', fx: { etica: -5, confianza: -3 }, flags: ['reserva_rota'],
          out: 'El amigo silba. «¿O sea que el de la Gerencia bajó?» Para el domingo, la historia del «Excel de la Gerencia» circula en tres grupos de WhatsApp.',
          pro: { ok: 'Te desahogas de una semana tensa.', risk: 'Lo que pasa en un concurso antes de publicarse es reservado, también fuera de la oficina.' },
          kusi: ['indignado', '¡Era información reservada!'] } },
      { id: 'c', label: 'Decirle seria que eso no se pregunta y que es una falta de respeto.',
        res: { q: 'aceptable', fx: { etica: 2, personas: -2 }, rel: { colega: -1 },
          out: 'Se hace un silencio incómodo. El amigo de Rubén levanta las manos: «Perdón, era broma». La sobremesa se acaba rápido.',
          pro: { ok: 'Cuidas la reserva.', risk: 'Podías cuidarla sin cortar la conversación.' },
          kusi: ['pensando', 'Reserva sí, pero con más calma.'] } },
    ],
    rules: [[BP, 'La información de un concurso antes de su publicación es reservada, dentro y fuera de la oficina.']],
    mirada: {
      ve: 'En una ciudad como Cusco, todos conocen a alguien que conoce a alguien. Por eso la reserva de un concurso no se cuida solo en la oficina: se cuida también en la chicharronería, entre risas y mote.',
      visual: { tipo: 'linea', titulo: 'Cómo viaja un dato', hitos: [['Viernes 18:00', 'Una frase en Saylla'], ['Sábado', 'Un grupo de WhatsApp'], ['Domingo', 'Tres grupos más'], ['Lunes', 'Todos lo saben antes de publicar']] },
    },
  },
];
