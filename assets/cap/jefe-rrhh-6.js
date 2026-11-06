// Jefe/a de RR.HH. · Capítulo 6 · «Tu equipo» · Semana 2, lunes.
// Hilo de las dos semanas: crear desde cero el área de RR.HH. de una empresa familiar de transporte interprovincial.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 28806, arts. 9 y 14 (colaboración con la inspección, medida de requerimiento), citada en el capítulo 5.
//   https://lpderecho.pe/ley-28806-ley-general-de-inspeccion-del-trabajo-actualizada/
// - D.S. 019-2006-TR: entregar información falsa al inspector es una infracción a la labor inspectiva (capítulo 5).
// - TUO del D.Leg. 728: el despido exige causa justa; la sanción disciplinaria debe ser razonable y proporcional
//   a la falta (principio, sin citar artículos ni plazos).
// No se citan cifras nuevas.

export const CAP = {
  n: 6, titulo: 'Tu equipo', dia: 'Semana 2, lunes', foto: 'assets/foto2/mesa-mujeres.webp',
  lugar: 'Transportes Mantaro · Oficina de RR.HH.',
  inicio: '07:15', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lunes, 7:15. La comparecencia ante SUNAFIL es a las 9. Abres la oficina y Patty ya está ahí, sentada en la oscuridad, con el celular en la mano y los ojos rojos.', boton: 'Prender la luz',
  kusi: 'Hoy se ve qué clase de jefa eres. Respira antes de hablar.',
  lead: 'Escuchaste a Patty antes de juzgarla, corregiste el error ante la inspectora, pusiste un límite al hijo del dueño y convertiste una falta grave en una lección para todo el equipo.',
  reflexion: '¿Qué hace una jefa cuando alguien de su equipo se equivoca gravemente por cumplir lo que otro le pidió?',
  siguiente: { n: 7, titulo: 'El reglamento', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'error', p: 'El Excel enviado a SUNAFIL', j: 'Patty · RR.HH.', d: 0, e: 'Versión equivocada' },
  { id: 'comparecencia', p: 'Comparecencia ante SUNAFIL', j: 'Tú', d: 0, e: 'Hoy 9:00' },
  { id: 'gonzalo', p: 'Gonzalo y los registros', j: 'Gonzalo · Operaciones', d: 0, e: 'Editó el Excel' },
  { id: 'equipo', p: 'Patty', j: 'Tú', d: 0, e: 'Espera ser despedida' },
  { id: 'carga', p: 'Carga de trabajo del área', j: 'Tú', d: 0, e: 'Desbordada' },
];

export const FUTURO = {
  error_rectificado: ['Le contaste a la inspectora el error antes de que ella lo descubriera.', 'Pesará cuando se decida la sanción.'],
  error_oculto: ['El Excel con horas recortadas quedó en el expediente.', 'Si la inspectora lo cruza con el cuadro real, será grave.'],
  patty_respaldada: ['Patty se quedó, con una consecuencia clara y tu respaldo.', 'Será otra en los capítulos que vienen.'],
  patty_renuncia: ['Aceptaste la renuncia de Patty.', 'Estás sola en el área.'],
  gonzalo_limite: ['Le dijiste a Gonzalo que nadie toca un registro de RR.HH.', 'En el directorio del miércoles lo recordará.'],
  carga_reducida: ['El área dejó de hacer tareas que no le tocaban.', 'Patty tendrá aire.'],
};

export const CHATS = {
  grupo: { n: 'Jefaturas Mantaro', sub: 'Don Alberto, Gonzalo y tú', c: '#1F6F9E' },
  familia: { n: 'Directorio Rojas', sub: 'Don Alberto, Gonzalo, Mariela, Rubén y tú', c: '#8A5A2B' },
  'don-alberto': { n: 'Don Alberto Rojas', sub: 'Fundador y gerente general', who: 'don-alberto' },
  gonzalo: { n: 'Gonzalo Rojas', sub: 'Gerente de Operaciones', who: 'gonzalo' },
  patty: { n: 'Patty Ñaupari', sub: 'Asistente de RR.HH.', who: 'patty' },
  nestor: { n: 'Néstor Poma', sub: 'Conductor', who: 'nestor' },
  ruben: { n: 'Rubén Rojas', sub: 'Jefe Comercial · hijo menor', c: '#C0392B' },
};

export const WSP = [
  { chat: 'patty', t: '23:40', de: 'Patty', txt: 'Jefa, perdón por la hora. Creo que hice algo muy malo. Mañana le explico. No pude dormir.' },
  { chat: 'grupo', t: '08:30', de: 'Don Alberto', txt: '¿Cómo vamos para las 9?' },
  { chat: 'gonzalo', t: '12:30', de: 'Gonzalo', txt: 'Ok. No vuelvo a tocar nada de RR.HH. Pero que conste que lo hice para ayudar.', si: 'gonzalo_limite' },
  { chat: 'ruben', t: '15:20', de: 'Rubén', txt: 'Oye, si les sirve, la practicante de Comercial puede ayudarles con constancias dos tardes por semana 🙌' },
  { chat: 'nestor', t: '17:45', de: 'Néstor', txt: 'Señora, dicen que la señorita Patty lloraba en el baño. Ella siempre nos atiende bien. Ojalá no la boten.' },
];

export const CORREOS = [
  { t: '00:12', de: 'RR.HH. Transportes Mantaro (enviado)', para: 'Inspectora C. Villanueva · SUNAFIL', asunto: 'Excel de horas de conductores', html: '<p>Buenas noches, doctora. Le adjunto el archivo digital de horas de conductores que solicitó.</p><p>Atentamente, Patty Ñaupari · RR.HH.</p><p><em>Adjunto: Horas_conductores_FINAL_v2.xlsx</em></p>' },
  { t: '13:10', de: 'Inspectora Carmen Villanueva', para: 'Jefa de RR.HH.', asunto: 'Comparecencia de hoy', html: '<p>Dejo constancia de que la empresa informó por iniciativa propia la remisión de un archivo con datos no fidedignos y lo reemplazó por el cuadro original.</p><p>Se le recuerda el plazo de la medida de requerimiento.</p>', si: 'error_rectificado' },
];

export const QUIZ = [
  { q: 'Alguien de tu equipo comete un error grave. Lo primero es…', ops: ['Despedirlo', 'Escuchar qué pasó y por qué, antes de decidir', 'Contarlo a la gerencia', 'Hacer como si no pasó'], ok: 1, por: 'Sin entender las causas no se puede decidir una consecuencia justa.' },
  { q: 'Se envió por error a SUNAFIL un archivo con datos no fidedignos. ¿Qué conviene?', ops: ['Esperar a que no lo note', 'Informarlo por iniciativa propia y reemplazarlo por el documento real', 'Borrar el correo enviado', 'Negar haberlo enviado'], ok: 1, por: 'Rectificar a tiempo demuestra buena fe; ocultarlo convierte un error en una falta mayor.' },
  { q: 'Una sanción disciplinaria debe ser…', ops: ['La más dura posible', 'Proporcional a la falta, considerando intención, antecedentes y contexto', 'Igual para todos sin importar el caso', 'Secreta'], ok: 1, por: 'La razonabilidad y la proporcionalidad son la base de toda sanción.' },
  { q: 'Un dueño pide la clave del correo de RR.HH. Tu asistente debe…', ops: ['Dársela porque es el dueño', 'No compartirla y avisar a su jefa', 'Cambiarla y no decir nada', 'Renunciar'], ok: 1, por: 'Las credenciales de un área no se comparten, ni siquiera con un dueño.' },
  { q: 'Tu asistente está sobrecargada y cometió un error por cansancio. Además de la consecuencia, debes…', ops: ['Darle más tareas para que aprenda', 'Revisar su carga y quitar lo que no le corresponde', 'Nada', 'Cambiarla de área'], ok: 1, por: 'Si la causa es el sistema, corregir solo a la persona no evita el próximo error.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '07:20', ch: 'presencial', who: 'patty', titulo: '«Ya sé que me va a botar»', banner: 'assets/foto2/grito.webp', lugar: 'Oficina de RR.HH.', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Patty habla sin parar. El sábado, Gonzalo entró a la oficina ${F.has('patty_reunion') ? 'aunque ella le dijo que tú habías pedido que nadie tocara nada' : 'y ella le abrió'}. Trabajó en el Excel de horas. El domingo en la noche, la inspectora escribió pidiendo el archivo digital, y Patty mandó el que decía «FINAL».</p><p>Hoy en la mañana lo abrió: <mark class="clave">todas las jornadas de 13 y 14 horas decían 10</mark>. «Ya sé que me va a botar, jefa.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Patty.',
    opts: [
      { id: 'sabia', label: '¿Sabías que el archivo tenía cambios?', info: '«No, jefa. Juro que no. Vi que decía FINAL y pensé que el ingeniero lo había ordenado, no cambiado. Estaba tan cansada que ni lo abrí.»' },
      { id: 'quien', label: '¿Quién te pidió mandarlo esa misma noche?', info: '«Nadie. La doctora lo pidió y yo quise responder rápido para que viera que somos ordenados. No quise molestarla un domingo.»' },
      { id: 'como', label: '¿Cómo estás tú?', info: '«Mal. No duermo bien desde hace semanas. Mi mamá está enferma en Concepción y yo voy y vengo. Pensé que si hacía todo perfecto, nadie se iba a dar cuenta de que no puedo con todo.»' },
      { id: 'original', label: '¿Tenemos el archivo original?', info: '«Sí. El cuadro que armamos el martes está en el USB y en papel, con las firmas de las hojas de ruta.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, confianza: 2 }, rel: { patty: 1 },
      out: picks.includes('original') ? 'Patty saca el USB del bolsillo con la mano temblando. El original está intacto. Tienes una hora y media.' : 'Patty se seca las lágrimas con la manga de la chompa. Tienes una hora y media para decidir.',
      kusi: ['pensando', 'Primero entender. Después decidir.'],
    }),
    mirada: {
      ve: 'Un error grave casi nunca tiene una sola causa. Aquí hay cansancio, miedo a fallar, ganas de quedar bien y un dueño que se metió donde no debía. Escuchar antes de juzgar no es ser blanda: es tener la información para decidir bien.',
      visual: { tipo: 'embudo', titulo: 'Las causas del error', niveles: [['Lo que se ve: un archivo equivocado', 1], ['Lo inmediato: cansancio, apuro', 2], ['Lo de fondo: sobrecarga, un dueño que cambió el archivo', 2]] },
    },
  },
  {
    id: 'p2', t: '08:15', ch: 'presencial', who: 'don-alberto', titulo: 'Antes de las nueve', banner: 'assets/foto/frente-a-frente.webp', lugar: 'Oficina de la gerencia', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Le cuentas a Don Alberto. Se quita los lentes y se frota los ojos. «¿Y si no decimos nada? Ella tiene el cuadro real del viernes; ${F.has('expediente_maquillado') ? 'aunque el viernes también entregamos papeles hechos esa misma mañana.' : 'quizás ni lo compare.'}»</p><p>«Si lo decimos, <mark class="clave">quedamos como mentirosos</mark>. Si no lo decimos y lo descubre, peor. Usted decide, señora.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Informar a la inspectora al inicio de la comparecencia, explicar qué pasó sin culpar a nadie y entregar el archivo original con sus respaldos.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: 2 }, rel: { 'don-alberto': 1 }, flags: ['error_rectificado'], cartera: { comparecencia: 'Rectificación por iniciativa propia' },
          out: 'Don Alberto se pone los lentes de nuevo: «Mi papá decía que la verdad tarde es mentira. Vamos a decirla temprano».',
          pro: { ok: 'Rectificar por iniciativa propia demuestra buena fe.', risk: 'La inspectora puede anotarlo, y la familia lo sentirá como una vergüenza.', info: 'Lleva el archivo original impreso, en USB y con las hojas de ruta firmadas.' },
          kusi: ['celebra', '¡Verdad temprano!'] } },
      { id: 'b', label: 'No decir nada: la inspectora tiene el cuadro real del viernes, y el Excel puede pasar desapercibido.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5 }, flags: ['error_oculto'], cartera: { comparecencia: 'Error sin corregir' },
          out: 'Don Alberto asiente aliviado. Patty, al escucharlo desde el pasillo, se tapa la boca.',
          pro: { ok: 'Evitas un momento incómodo hoy.', risk: 'Dos versiones distintas en el mismo expediente: si la inspectora las cruza, parecerá un intento de engaño.' },
          kusi: ['indignado', 'Dos versiones… y una es falsa.'] } },
    ],
    rules: [[LEY, 'Entregar información falsa a la inspección es una infracción (D.S. 019-2006-TR); rectificar a tiempo demuestra buena fe.']],
    mirada: {
      ve: 'La tentación de callar es humana: nadie quiere admitir un error ante una autoridad. Pero un error que se corrige es un error; uno que se esconde se convierte en otra cosa. En una inspección, la credibilidad es lo único que no se recupera.',
      visual: { tipo: 'balanza', a: { t: 'Callar', items: ['Sin vergüenza hoy', 'Dos versiones en el expediente', 'Riesgo de parecer engaño'] }, b: { t: 'Rectificar', items: ['Un momento incómodo', 'Buena fe acreditada', 'Credibilidad intacta'] } },
    },
  },
  {
    id: 'p3', t: '09:00', ch: 'presencial', who: null, titulo: 'La comparecencia', banner: 'assets/foto/entrevista.webp', lugar: 'Intendencia Regional de Junín · SUNAFIL', show: ['cumplimiento', 'calidad'],
    body: (n, F) => `<p>La oficina de SUNAFIL está en el centro de Huancayo. Hay una fila de trabajadores esperando en el pasillo. La inspectora Villanueva te recibe con el expediente abierto.</p><p>${F.has('error_rectificado') ? 'Vas a empezar contando lo del Excel.' : 'Llevas los tres compromisos del viernes.'} <mark class="clave">Ordena cómo presentarás tu avance</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena tu presentación ante la inspectora. Usa las flechas.', boton: 'Presentar',
    items: [
      { id: 'rect', t: 'Informar primero cualquier corrección al expediente', por: 'Lo que corrige, va antes que lo que luce.' },
      { id: 'relevo', t: 'Mostrar la evidencia del relevo nocturno: hojas de ruta con dos conductores', por: 'El riesgo más grave, con prueba.' },
      { id: 'registro', t: 'Mostrar el registro de horas en toda la flota desde hoy', por: 'Lo que permite probar que se cumple.' },
      { id: 'comite', t: 'Presentar la convocatoria a elegir el comité de SST este jueves', por: 'Fecha concreta.' },
      { id: 'pend', t: 'Reconocer lo pendiente y su fecha: el Reglamento Interno', por: 'Sin prometer lo imposible.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 2, calidad: q === 'buena' ? 3 : 0 },
        cartera: { comparecencia: q === 'riesgosa' ? 'Presentación desordenada' : 'Avance presentado con evidencia' },
        out: q === 'buena' ? 'La inspectora anota cada punto. Al final cierra el fólder: «Hay incumplimientos y los voy a consignar. Pero también hay una empresa que está corrigiendo. Eso también lo consigno».' : 'La inspectora te pide que vuelvas a lo importante dos veces. Tus avances llegan, pero desordenados.',
        pro: { ok: 'Lo que se corrige primero, lo que protege vidas después, lo pendiente con fecha.', info: 'Pide copia del acta de comparecencia.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Avance con evidencia!' : 'El orden también comunica.'],
      };
    },
    rules: [[LEY, 'La medida de requerimiento se cumple con evidencia dentro del plazo (Ley 28806, art. 14).']],
    mirada: {
      ve: 'En una comparecencia, el inspector no espera perfección: espera evidencia. Presentar primero lo que corriges y lo que protege vidas muestra que entiendes qué importa.',
      visual: { tipo: 'flujo', titulo: 'Tu presentación', pasos: ['Corrección', 'Relevo nocturno', 'Registro de horas', 'Comité de SST', 'Pendientes con fecha'] },
    },
  },
  {
    id: 'p4', t: '11:30', ch: 'presencial', who: 'gonzalo', titulo: '«Lo hice para ayudar»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de Operaciones', show: ['etica', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>Gonzalo está de pie junto a la pizarra de salidas. ${F.has('gonzalo_puente') ? 'Esta mañana le llegaron tres candidatos a conductor que filtró RR.HH.' : 'No te ha dirigido la palabra desde el viernes.'}</p><p>«Sí, cambié el Excel. Puse lo que deberían manejar, no lo que manejaron. <mark class="clave">Lo hice para ayudar a mi papá</mark>. ¿Ahora me vas a acusar?»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle, a solas y con calma, que entiendes por qué lo hizo, pero que nadie, ni él, vuelve a tocar un registro de RR.HH. ni a pedirle claves a Patty. Y que lo informarás a Don Alberto contigo presente.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 4, confianza: 1 }, rel: { gonzalo: 0 }, flags: ['gonzalo_limite'], cartera: { gonzalo: 'Límite puesto, sin humillar' },
          out: 'Gonzalo aprieta la mandíbula. Luego se sienta. «Mi papá me va a matar.» Le respondes que su papá prefiere un hijo que corrige a uno que esconde. Media hora después, te manda un mensaje.',
          pro: { ok: 'Pones un límite claro sin humillarlo ni actuar a sus espaldas.', info: 'Pide que el acceso al correo y a la carpeta de RR.HH. se cambie hoy.' },
          kusi: ['animo', 'Firme y respetuosa, incluso con el hijo del dueño.'] } },
      { id: 'b', label: 'Dejarlo pasar: ya se corrigió y enfrentarlo empeoraría tu relación con la familia.',
        res: { q: 'aceptable', fx: { confianza: 1, cumplimiento: -3, etica: -2 }, rel: { gonzalo: 1 }, cartera: { gonzalo: 'Sin límite' },
          out: 'Gonzalo se relaja: «Bien. Tú y yo nos entendemos». Patty sigue siendo la única que pagó por lo que pasó.',
          pro: { ok: 'Evitas un conflicto familiar.', risk: 'Él aprende que puede volver a hacerlo; ella, que la culpa siempre cae abajo.' },
          kusi: ['pensando', '¿Y Patty carga sola con esto?'] } },
      { id: 'c', label: 'Escribir al grupo «Directorio Rojas» contando lo que hizo Gonzalo, para que toda la familia lo sepa.',
        res: { q: 'riesgosa', fx: { confianza: -4, etica: 1 }, rel: { gonzalo: -1, 'don-alberto': -1 },
          out: 'Mariela responde con un «lo sabía». Don Alberto te llama: «Esto se hablaba en privado». Gonzalo no vuelve a hablarte en toda la semana.',
          pro: { ok: 'Nadie podrá decir que lo ocultaste.', risk: 'Exponer a un hijo frente a sus hermanos convierte un límite en una humillación.' },
          kusi: ['preocupado', 'Justo lo que no necesitaba la familia…'] } },
    ],
    rules: [[BP, 'Los registros de RR.HH. solo los modifica RR.HH., con observación fechada y firmada.']],
    mirada: {
      ve: 'Gonzalo no quería engañar a nadie por maldad: quería proteger a su padre. Pero su «ayuda» puso en riesgo a la empresa y casi le cuesta el trabajo a Patty. Un límite firme y en privado le permite corregir sin perder la cara.',
    },
  },
  {
    id: 'p5', t: '14:30', ch: 'presencial', who: 'patty', titulo: 'La conversación con Patty', banner: 'assets/foto/acuerdo.webp', lugar: 'Oficina de RR.HH., con la puerta cerrada', show: ['personas', 'etica', 'calidad'],
    body: (n, F) => `<p>Patty trae una hoja escrita a mano: es su carta de renuncia. «Para que no tenga que botarme, jefa.» ${F.has('error_rectificado') ? 'La inspectora dejó constancia de que la empresa corrigió por iniciativa propia.' : 'El Excel equivocado sigue en el expediente.'}</p><p>Pones la carta a un lado. <mark class="clave">Armas la conversación que tendrán ahora</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la conversación.', boton: 'Tener la conversación',
    bloques: [
      { id: 'hechos', t: 'Los hechos', n: 2, ops: [
        { id: 'h1', t: 'Nombrar el error sin adornos: se envió a SUNAFIL un archivo sin revisarlo, fuera de horario y sin consultar.', ok: true, por: 'Claridad sobre la conducta, no sobre la persona.' },
        { id: 'h2', t: 'Reconocer que el archivo lo cambió otra persona y que ella no lo sabía.', ok: true, por: 'La responsabilidad se reparte según lo que cada uno hizo.' },
        { id: 'h3', t: '«Esto es lo más grave que ha pasado en el área.»', ok: false, por: 'Juzga y aplasta; no ayuda a corregir.' },
      ] },
      { id: 'conse', t: 'La consecuencia', n: 1, ops: [
        { id: 'c1', t: 'Una llamada de atención por escrito, proporcional a lo que hizo, y no aceptar la renuncia.', ok: true, por: 'Hay consecuencia, pero no desproporcionada.' },
        { id: 'c2', t: 'Aceptar la renuncia para cerrar el tema.', ok: false, por: 'Pierdes a quien más sabe del área por un error con causas compartidas.' },
        { id: 'c3', t: 'Ninguna consecuencia: no fue su culpa.', ok: false, por: 'Sin consecuencia, la regla de revisar antes de enviar no existe.' },
      ] },
      { id: 'apoyo', t: 'Lo que cambia', n: 2, ops: [
        { id: 'a1', t: 'Nueva regla: nada sale a una autoridad sin que tú lo revises.', ok: true },
        { id: 'a2', t: 'Revisar su carga y darle un día libre esta semana para ver a su mamá en Concepción.', ok: true, por: 'La causa de fondo también se atiende.' },
        { id: 'a3', t: 'Que te mande cada noche un reporte de todo lo que hizo.', ok: false, por: 'Control, no apoyo: más carga para alguien que ya no puede.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -4, etica: q === 'riesgosa' ? -2 : 3, calidad: q === 'buena' ? 3 : 0 }, rel: { patty: q === 'riesgosa' ? -1 : 1 },
        flags: q === 'riesgosa' ? ['patty_renuncia'] : ['patty_respaldada'], cartera: { equipo: q === 'riesgosa' ? 'Patty se va' : 'Patty se queda, con una regla nueva' },
        out: q === 'riesgosa' ? 'La conversación no la sostiene. Patty dobla su carta y la deja en tu escritorio: «Gracias por todo, jefa». El viernes será su último día.' : 'Patty rompe la carta en cuatro pedazos. Firma la llamada de atención y la lee dos veces. «Es justo», dice. Pide el jueves libre para ir a Concepción.',
        pro: { ok: 'Hechos claros, consecuencia proporcional y cambios en lo que causó el error.', risk: 'Un error con varias causas no se resuelve sacando a una persona.', info: 'Deja registro escrito de la conversación y de los acuerdos.' },
        kusi: [q === 'riesgosa' ? 'triste' : 'celebra', q === 'riesgosa' ? 'Se fue la memoria del área…' : '¡Una jefa que corrige y sostiene!'],
      };
    },
    rules: [[LEY, 'Una sanción disciplinaria debe ser razonable y proporcional a la falta (TUO del D.Leg. 728).'], [BP, 'Feedback difícil: hechos, impacto, consecuencia y lo que cambia.']],
    mirada: {
      ve: 'Patty esperaba que la despidieras porque así lo vio pasar con otros. Mostrarle que un error tiene consecuencia, pero no destruye a la persona, es lo que construye un equipo que te dirá la verdad la próxima vez.',
      visual: { tipo: 'flujo', titulo: 'Una conversación difícil', pasos: ['Hechos', 'Responsabilidades', 'Consecuencia proporcional', 'Qué cambia', 'Registro'] },
    },
  },
  {
    id: 'p6', t: '16:30', ch: 'documento', who: null, titulo: 'Lo que el área deja de hacer', banner: 'assets/esc/escritorio.webp', lugar: 'Tu escritorio', show: ['personas', 'tiempo', 'calidad'],
    body: (n, F) => `<p>${F.has('patty_sola') ? 'Patty vuelve del tópico con una hoja de EsSalud: tres días de descanso médico por estrés. La enfermera te dice que llegó con la presión por los suelos.' : 'Patty vuelve a su escritorio un poco más tranquila.'} Rubén ofrece a la practicante de Comercial dos tardes por semana.</p><p>Sacas la lista de 27 tareas del área. <mark class="clave">Elige dos que dejarán de estar en manos de Patty</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos tareas que salen de la carga de Patty.', boton: 'Quitar estas dos', resumen: 'Quitaste',
    cols: ['Tarea', 'Qué pasa si sale'],
    rows: [
      { id: 'imprimir', cells: ['Imprimir y firmar a mano 280 boletas cada mes', 'Se pasa a boleta digital con constancia de recepción'] },
      { id: 'encomiendas', cells: ['Atender reclamos de encomiendas que llegan a RR.HH.', 'Vuelven a Comercial, donde corresponden'] },
      { id: 'constancias', cells: ['Hacer constancias de trabajo', 'La practicante puede hacerlas con una plantilla'] },
      { id: 'contratos', cells: ['Regularizar los contratos vencidos', 'Es una prioridad legal: no debería salir'] },
      { id: 'registro', cells: ['Revisar cada lunes el registro de horas', 'Es la tarea más importante de la semana'] },
    ],
    score: { imprimir: 2, encomiendas: 3, constancias: 2, contratos: -2, registro: -3 },
    res: (picks, sc) => {
      const q = sc >= 4 ? 'buena' : sc >= 1 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 4 : 0, tiempo: q === 'buena' ? 3 : 0, calidad: q === 'riesgosa' ? -3 : 1 },
        flags: q === 'buena' ? ['carga_reducida'] : [], cartera: { carga: q === 'buena' ? 'Dos tareas fuera de RR.HH.' : 'Carga casi igual' },
        out: picks.includes('encomiendas') ? 'Le escribes a Rubén: «Los reclamos de encomiendas vuelven a Comercial desde mañana». Responde con un sticker de un perrito asustado y un «ya, justo».' : 'Reacomodas la lista. Patty mira las dos tareas tachadas como si fueran un regalo.',
        pro: { ok: 'Quitar lo que no corresponde es la forma más rápida de dar aire a un equipo.', risk: 'Si quitas lo prioritario, el área deja de proteger a la empresa.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Menos ruido, más foco!' : '¿Eso era lo que sobraba?'],
      };
    },
    mirada: {
      ve: 'Un área nueva en una empresa sin RR.HH. hereda todo lo que nadie quería: reclamos ajenos, papeles inútiles, favores. Decir «esto no nos toca» es parte de liderar, y protege a tu gente del próximo error por cansancio.',
      visual: { tipo: 'embudo', titulo: 'La carga de Patty', niveles: [['Las 27 tareas', 27], ['Lo que de verdad es de RR.HH.', 15], ['Lo prioritario', 3]] },
    },
  },
  {
    id: 'p7', t: '18:30', ch: 'whatsapp', who: 'patty', titulo: 'El último mensaje del día', banner: 'assets/esc/camino.webp', lugar: 'Combi a El Tambo', show: ['personas', 'confianza'],
    body: (n, F) => `<p>La combi avanza lenta por la calle Real, entre ambulantes de choclo con queso. ${F.has('patty_renuncia') ? 'Patty ya se fue. Mañana empezará a entregarte sus pendientes.' : F.has('patty_sola') ? 'Patty está en su casa con descanso médico; volverá el viernes.' : 'Patty salió hace media hora.'}</p><p>Le escribes. <mark class="clave">Lo que digas hoy lo recordará mucho tiempo</mark>.</p>`,
    type: 'compose', enviaA: 'patty', para: 'Para: Patty Ñaupari', boton: 'Enviar',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'hoy', t: 'Sobre hoy', ops: [
        { id: 'h1', t: 'Patty, hoy fue un día difícil y lo enfrentaste con honestidad. Eso es lo que más valoro.', ok: true, por: 'Reconoces lo que sí hizo bien: decir la verdad.' },
        { id: 'h2', t: 'Patty, ya pasó, olvídalo.', ok: null, por: 'Bien intencionado, pero no reconoce nada.' },
      ] },
      { id: 'aprendo', t: 'Lo que tú aprendiste', ops: [
        { id: 'a1', t: 'Yo también aprendí: no te dejé reglas claras para un fin de semana así. Eso es mío.', ok: true, por: 'Una jefa que asume su parte enseña con el ejemplo.' },
        { id: 'a2', t: 'Espero que no vuelva a pasar.', ok: false, por: 'Hoy suena a amenaza.' },
      ] },
      { id: 'man', t: 'Para mañana', ops: [
        { id: 'm1', t: 'Empezamos el reglamento y quiero que tu mirada esté ahí. Te necesito en el equipo.', ok: true, por: 'Le dices que sigue siendo parte.' },
        { id: 'm2', t: 'Descansa.', ok: null, por: 'Amable, pero corto.' },
      ] },
    ],
    res: sel => {
      const mal = sel.aprendo === 'a2', buenas = ['h1', 'a1', 'm1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : mal ? -3 : 1, confianza: q === 'buena' ? 2 : 0 }, rel: { patty: q === 'buena' ? 1 : mal ? -1 : 0 },
        out: q === 'buena' ? 'Patty responde con un audio corto. Se escucha a su mamá de fondo, en quechua, preguntando con quién habla. «Con mi jefa, mamá. Con mi jefa.»' : mal ? 'Patty responde «sí, jefa». Nada más.' : 'Patty responde con un corazón.',
        pro: { ok: 'Reconocer, asumir tu parte y mirar adelante.', risk: 'Un mensaje frío después de un día así se siente como una sentencia.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '«Con mi jefa, mamá.» ¡Qué divino!' : 'Podía decir un poco más…'],
      };
    },
    mirada: {
      ve: 'Al final de un día así, tu asistente no recordará el procedimiento: recordará cómo la hiciste sentir. Asumir tu parte del error es lo que convierte a una jefa en líder.',
      visual: { tipo: 'mensaje', titulo: 'Reconocer, asumir, seguir', txt: 'Hoy enfrentaste el error con honestidad. Yo también aprendí: no te dejé reglas claras para un fin de semana así. Mañana empezamos el reglamento juntas.' },
    },
  },
];
