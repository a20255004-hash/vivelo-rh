// Asistente de Capacitación · Capítulo 8 · «En el local» · Semana 2, miércoles.
// Hilo de las dos semanas: la «escuela de cajeros» de Boticas del Norte, 120 personas nuevas en seis grupos, en Trujillo.
// Normas citadas (ya verificadas en el capítulo 3):
// - Reglamento de Establecimientos Farmacéuticos (D.S. 014-2011-SA): la botica funciona bajo la dirección técnica de un
//   químico farmacéutico que permanece durante el horario de funcionamiento (art. 41); la dispensación, incluida la
//   orientación sobre el medicamento, le corresponde a él; el personal técnico no dispensa productos de venta bajo receta
//   ni ofrece alternativas (art. 43, modificado por el D.S. 015-2025-SA).
//   https://cdn.www.gob.pe/uploads/document/file/5300941/4754645-comunicado-n-03-para-directores-tecnicos.pdf
//   https://busquedas.elperuano.pe/dispositivo/NL/2429720-3
// Los niveles de evaluación (aplicación en el puesto) se presentan como buena práctica.
// La política de arqueo (diferencias en acta, sin cubrir con dinero propio) es interna y ficticia.
// Personas, local y cifras son ficticios.

export const CAP = {
  n: 8, titulo: 'En el local', dia: 'Semana 2, miércoles', foto: 'assets/3d/scenes/retail.webp',
  lugar: 'Boticas del Norte · Local de La Esperanza, Trujillo',
  inicio: '07:20', fin: '19:00', cierreHora: '18:45',
  apertura: 'Miércoles. Karen se queda con el grupo 5 y Jorge con el 6. A ti te toca lo que nadie mide: ir a un local a ver si la escuela cambió algo. Tomas la combi a La Esperanza a las 7:20, con el sol ya fuerte sobre los cerros y olor a pan de la panadería de la esquina.', boton: 'Subir a la combi',
  kusi: 'Hoy no hay examen ni encuesta. Hoy se ve la verdad: la caja.',
  lead: 'Planificaste la visita, observaste lo que importa, cuidaste a un cliente sin humillar a nadie, conociste el local de Mario por dentro, leíste el acta de arqueo y le contaste a Karen qué cambió de verdad.',
  reflexion: '¿Qué viste hoy en el local que ningún examen podía mostrarte?',
  siguiente: { n: 9, titulo: 'El último grupo', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'visita', p: 'Visita al local de La Esperanza', j: 'Tú', d: 0, e: 'Hoy' },
  { id: 'obs', p: 'Guía de observación', j: 'Karen · Capacitación', d: 0, e: 'Por armar' },
  { id: 'reexamen', p: 'Refuerzo y reexamen', j: 'Jorge y tú', d: 0, e: 'Mañana' },
  { id: 'grupo6', p: 'Grupo 6 (último día)', j: 'Jorge y tú', d: 0, e: 'Mañana' },
  { id: 'informe', p: 'Informe de visita', j: 'Tú', d: 0, e: 'Hoy, 6 p. m.' },
];

export const FUTURO = {
  visita_planificada: ['Llegaste al local con una guía de observación y sin asustar a nadie.', 'Mario te recibirá mejor la próxima vez.'],
  observo_bien: ['Observaste caja, arqueo, colas y derivación.', 'Tu informe tendrá datos que nadie más tiene.'],
  correccion_privada: ['Cuidaste al cliente y hablaste en privado con la cajera y el químico farmacéutico.', 'Doña Elvira pedirá entrar a la escuela.'],
  correccion_publica: ['Corregiste a la cajera delante del cliente.', 'En el local te verán como «la que viene a fiscalizar».'],
  sin_intervenir: ['Viste a una cajera recomendar un jarabe y no hiciste nada.', 'Te quedará dando vueltas.'],
  mario_aliado: ['Entendiste el local de Mario por dentro.', 'Mario te pedirá que su veterana entre al grupo 6.'],
  faltante_reportado: ['Viste que un faltante se «cuadró» con plata de la cajera y lo reportaste.', 'Karen lo llevará al balance del viernes.'],
  informe_visita: ['Karen tiene un informe de lo que cambió en caja y lo que no.', 'Será la base del balance del viernes.'],
};

export const CHATS = {
  area: { n: 'Capacitación · Boticas del Norte', sub: 'Karen, Fiorella y tú', c: '#C05621' },
  karen: { n: 'Karen Vásquez', sub: 'Analista de Capacitación', who: 'karen' },
  mario: { n: 'Mario Infante', sub: 'Jefe del local de La Esperanza', who: 'local' },
  jorge: { n: 'Q. F. Jorge Lázaro', sub: 'Facilitador', who: 'facilitador' },
  jhonatan: { n: 'Jhonatan Luján', sub: 'Cajero nuevo · Grupo 1', c: '#2B6CB0' },
};

export const WSP = [
  { chat: 'mario', t: '07:05', de: 'Mario', txt: 'La espero, señorita. No me venga a botar a nadie, ah 😅', si: 'constancia_real' },
  { chat: 'mario', t: '07:05', de: 'Mario', txt: 'La espero. Ya sé que viene por lo del zonal 🙄', si: 'mario_escalado' },
  { chat: 'karen', t: '07:30', de: 'Karen', txt: 'Mira, no juzgues. Si algo te preocupa, me llamas. Mañana es el día más pesado de la escuela 💪' },
  { chat: 'jorge', t: '11:20', de: 'Jorge', txt: '¿Cómo va La Esperanza? La Q. F. de ahí, la doctora Ríos, fue mi alumna. Salúdamela 😊' },
  { chat: 'jhonatan', t: '15:10', de: 'Jhonatan', txt: 'Gracias por no regañarme delante del cliente. Mañana practico el arqueo otra vez 🙏', si: 'correccion_privada' },
  { chat: 'mario', t: '18:30', de: 'Mario', txt: 'Señorita, ¿doña Elvira puede entrar mañana al grupo 6? Doce años aquí y nadie le enseñó nada.', si: 'mario_aliado' },
];

export const CORREOS = [
  { t: '07:10', de: 'Karen Vásquez', para: 'Asistente de Capacitación', asunto: 'Visita a La Esperanza', html: '<p>Hoy quiero saber una sola cosa: ¿la escuela cambió algo en la caja? No es una inspección. Mario ya está nervioso. Jhonatan, del grupo 1, está ahí desde el lunes cubriendo las renuncias.</p><p>Karen</p>' },
  { t: '13:00', de: 'Ing. Raúl Benites', para: 'Karen Vásquez; Capacitación', asunto: 'Faltantes de caja · noviembre', html: '<p>Comparto el reporte de faltantes de la primera quincena. Los locales con cajeros de la escuela muestran menos diferencias, pero aún es poco tiempo para concluir. Quiero escuchar lo que vieron en el local.</p>' },
];

export const QUIZ = [
  { q: 'Ver si un cajero aplica en caja lo que aprendió mide…', ops: ['La reacción', 'El aprendizaje', 'La aplicación en el puesto', 'La asistencia'], ok: 2, por: 'Es el nivel que ni la encuesta ni el examen pueden mostrar.' },
  { q: 'Ves a una cajera recomendar un jarabe a una señora. ¿Qué haces primero?', ops: ['Corregirla delante de la clienta', 'Cuidar a la clienta: pedir que la atienda el químico farmacéutico, y luego hablar en privado con la cajera', 'Nada', 'Llamar al zonal'], ok: 1, por: 'Primero el paciente; después, la conversación en privado. La orientación sobre medicamentos le toca al químico farmacéutico.' },
  { q: 'En una botica, ¿quién debe estar presente durante el horario de atención?', ops: ['El jefe de local', 'El químico farmacéutico director técnico', 'El cajero más antiguo', 'Nadie en especial'], ok: 1, por: 'D.S. 014-2011-SA, art. 41.' },
  { q: 'Un faltante de S/ 20 en el arqueo se cubrió con dinero de la cajera. ¿Qué problema tiene?', ops: ['Ninguno', 'El error se esconde y no se sabe por qué pasó', 'Que la cajera pierde S/ 20 nada más', 'Que el acta queda más bonita'], ok: 1, por: 'Lo que se tapa se repite. La diferencia se anota y se analiza.' },
  { q: 'Una visita de observación funciona mejor si…', ops: ['Llegas sin avisar y anotas errores', 'Tienes una guía, avisas para qué vas y observas sin interrumpir', 'Le preguntas al jefe qué tal sus cajeros', 'Revisas solo el arqueo'], ok: 1, por: 'La gente actúa más natural cuando entiende que no la vienes a sancionar.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'l1', t: '07:35', ch: 'documento', who: null, titulo: 'La guía en la combi', banner: 'assets/esc/camino.webp', lugar: 'Combi por la avenida Perú', show: ['calidad', 'tiempo'],
    body: () => `<p>La combi se mueve a saltos por la avenida Perú y el cobrador grita «¡Esperanza, Esperanza!». Tienes veinticinco minutos para <mark class="clave">ordenar cómo vas a hacer la visita</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos de la visita. Usa las flechas.', boton: 'Guardar la guía',
    items: [
      { id: 'jefe', t: 'Saludar a Mario y decirle para qué vienes (y para qué no)', por: 'Quita el miedo a la «inspección».' },
      { id: 'qf', t: 'Presentarte con la química farmacéutica del local', por: 'Ella responde por lo que pasa en el mostrador.' },
      { id: 'obs', t: 'Observar la caja una hora sin interrumpir', por: 'Lo que ves sin intervenir es lo real.' },
      { id: 'conv', t: 'Conversar con los cajeros en su descanso', por: 'Lo que les sirvió y lo que no.' },
      { id: 'arq', t: 'Mirar con Mario el acta de arqueo de la semana', por: 'El dato duro.' },
      { id: 'cie', t: 'Contarle a Mario lo que viste antes de irte', por: 'Que no se entere por el informe.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 2 : -2, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'buena' ? ['visita_planificada'] : [], cartera: { obs: q === 'riesgosa' ? 'Visita sin orden' : 'Guía de visita en seis pasos' },
        out: q === 'buena' ? 'Bajas en el paradero de la iglesia con la guía en el celular. El local tiene dos cajas, una cola de seis personas y un ventilador que gira cansado.' : 'Bajas con una idea general. Ya verás sobre la marcha.',
        pro: { ok: 'Avisar para qué vienes, observar antes de hablar y cerrar con el jefe: así una visita no se siente como castigo.', risk: 'Llegar directo a revisar papeles pone a todos a la defensiva.', info: 'Lleva papel: sacar el celular frente a la caja parece que grabas.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Visita con método!' : 'El orden también cuida.'],
      };
    },
    mirada: {
      ve: 'Ir al local es medir el nivel que más importa: ¿lo aprendido se usa en el trabajo? Pero una visita mal planteada cambia lo que observas: si todos creen que es una inspección, hacen teatro.',
      visual: { tipo: 'flujo', titulo: 'Una visita que no asusta', pasos: ['Para qué vengo', 'Química farmacéutica', 'Observar', 'Conversar', 'Arqueo', 'Cerrar con el jefe'] },
    },
  },
  {
    id: 'l2', t: '08:30', ch: 'presencial', who: null, titulo: 'Una hora junto a la caja', banner: 'assets/foto/supervisa.webp', lugar: 'Local de La Esperanza', show: ['calidad', 'tiempo', 'personas'],
    body: () => `<p>Te sientas en una silla de plástico junto a la vitrina de bloqueadores. En la caja 1 está Jhonatan, del grupo 1. En la caja 2, doña Elvira, cajera desde hace doce años, que nunca pasó por la escuela. <mark class="clave">Solo puedes fijarte bien en tres cosas</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que observas con atención.', boton: 'Observar estas', resumen: 'Observaste',
    cols: ['Qué observar', 'Por qué'],
    rows: [
      { id: 'deriv', cells: ['Qué hacen ante una consulta de salud', 'Es lo que la escuela más quiso cambiar'] },
      { id: 'vuelto', cells: ['Cómo dan el vuelto y la boleta', 'Lo central del puesto'] },
      { id: 'cola', cells: ['Cuánto tarda cada cobro', 'Mario se queja de las colas'] },
      { id: 'unif', cells: ['Si llevan bien el uniforme', 'Lo pidió el zonal'] },
      { id: 'cel', cells: ['Si usan el celular en caja', 'Es una falta frecuente'] },
    ],
    score: { deriv: 3, vuelto: 3, cola: 2, unif: -1, cel: 0 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, personas: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['observo_bien'] : [], cartera: { visita: q === 'buena' ? 'Observación: derivación, vuelto y tiempos' : 'Observación dispersa' },
        out: q === 'buena' ? 'En una hora anotas: Jhonatan cuenta el vuelto en la mano del cliente, sin error; tarda un poco más que Elvira, pero no se equivoca. Y entonces entra una señora con tos.' : 'Anotas cosas, pero las que importan pasan sin que las mires bien. Entonces entra una señora con tos.',
        pro: { ok: 'Observar lo que la escuela enseñó te dice si funcionó.', risk: 'Fijarte en el uniforme convierte la visita en una inspección.', info: 'Cronometra cinco cobros de cada caja.' },
        kusi: [q === 'buena' ? 'curioso' : 'pensando', q === 'buena' ? 'Ojo de evaluadora…' : 'Mira lo que se enseñó.'],
      };
    },
    mirada: {
      ve: 'Observar no es vigilar: es mirar lo que la capacitación quería cambiar. Lo que ves en una hora de caja dice más sobre la escuela que todas las encuestas juntas.',
      visual: { tipo: 'balanza', a: { t: 'Jhonatan (escuela)', items: ['Vuelto contado en la mano', 'Un poco más lento', 'Sin errores'] }, b: { t: 'Doña Elvira (12 años)', items: ['Muy rápida', 'Conoce a todos los clientes', 'Nunca capacitada'] } },
    },
  },
  {
    id: 'l3', t: '09:40', ch: 'presencial', who: null, titulo: 'La señora con tos', banner: 'assets/foto2/tension.webp', lugar: 'Mostrador del local', show: ['etica', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>Una señora mayor, con una bolsa de mercado, pide «algo fuerte para la tos». La química farmacéutica está en el almacén recibiendo un pedido. Doña Elvira ya está sacando un jarabe. ${F.has('recomendar_quedo') ? 'Jhonatan, en la otra caja, asiente: «Ese es bueno, señora, así nos enseñaron».' : 'Jhonatan la mira y dice bajito: «Doña Elvira, ¿no la llamamos a la doctora?».'}</p><p>La señora comenta que <mark class="clave">toma pastillas para la presión</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Acercarte con calma y decir: «Señora, mejor que la doctora le vea eso por lo de la presión, ya viene», ir por la química farmacéutica y, más tarde, conversar en privado con Elvira y Jhonatan.',
        res: { q: 'buena', fx: { etica: 5, personas: 3, cumplimiento: 4 }, flags: ['correccion_privada'],
          out: 'La doctora Ríos sale del almacén secándose las manos y atiende a la señora: ese jarabe no le convenía. En el descanso, Elvira te dice, sin mirarte: «Siempre lo he hecho así… nadie me enseñó otra cosa».',
          pro: { ok: 'Cuidas a la paciente sin humillar a nadie frente a ella.', risk: 'Interviniste en un local que no es tuyo; explícaselo a Mario.', info: 'Pregunta a la química farmacéutica cómo pueden llamarla rápido cuando está en el almacén.' },
          kusi: ['animo', 'Primero la señora, luego la charla.'] } },
      { id: 'b', label: 'Decirle a Elvira, delante de la señora, que los cajeros no pueden recomendar medicamentos.',
        res: { q: 'aceptable', fx: { etica: 2, personas: -3, cumplimiento: 2 }, rel: { local: -1 }, flags: ['correccion_publica'],
          out: 'La señora se queda confundida; Elvira se pone roja y se va al baño. La química farmacéutica llega y atiende. En el local, nadie te vuelve a sonreír.',
          pro: { ok: 'La señora no se lleva el jarabe.', risk: 'Corregir delante del cliente humilla y cierra la puerta a aprender.' },
          kusi: ['pensando', 'Lo correcto, pero no así.'] } },
      { id: 'c', label: 'No intervenir: vienes a observar, no a supervisar el local.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -3 }, flags: ['sin_intervenir'],
          out: 'La señora se lleva el jarabe. Lo anotas en tu cuaderno con la letra temblando.',
          pro: { ok: 'No alteras la observación.', risk: 'Cuando hay un riesgo para la salud de alguien, observar sin actuar no es neutral.' },
          kusi: ['triste', 'Ese jarabe con su pastilla de la presión…'] } },
    ],
    rules: [[LEY, 'La orientación sobre medicamentos es parte de la dispensación, a cargo del químico farmacéutico, que debe estar presente en el horario de atención (D.S. 014-2011-SA, arts. 41 y 56).']],
    mirada: {
      ve: 'Lo que viste es el motivo de la escuela: una cajera con buena intención y ninguna capacitación. Elvira no es «la mala»: es el sistema anterior. Y Jhonatan muestra si la escuela enseñó a derivar… o a recomendar.',
      normas: [{ ley: 'Reglamento de Establecimientos Farmacéuticos (D.S. 014-2011-SA)', dice: 'La botica funciona bajo la dirección técnica de un químico farmacéutico presente en el horario de atención; la dispensación le corresponde, y el personal técnico no ofrece alternativas al medicamento.', practica: 'Si una señora que toma pastillas para la presión pide algo para la tos, la atiende la química farmacéutica.' }],
      visual: { tipo: 'cambio', titulo: 'Lo que la escuela quiere cambiar', pares: [['«Llévese este, es bueno»', '«La doctora la atiende, ya viene»'], ['Química farmacéutica en el almacén', 'Un timbre para llamarla'], ['Doce años sin capacitación', 'Elvira en la escuela']] },
    },
  },
  {
    id: 'l4', t: '12:30', ch: 'presencial', who: 'local', titulo: 'Mario por dentro', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Trastienda del local', show: ['confianza', 'personas'],
    body: () => `<p>Mario te invita a la trastienda: un escritorio entre cajas de pañales, una foto de su hija con toga y un táper de cabrito con frejoles. «Siéntese, señorita. Coma algo.» Por primera vez lo ves sin el celular en la mano. <mark class="clave">Es tu momento para entenderlo</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Mario.',
    opts: [
      { id: 'por', label: '¿Por qué se le van los cajeros?', info: '«Porque La Esperanza es lejos para muchos y pagan lo mismo en el centro. Y porque llegan sin saber nada, se equivocan en caja, se asustan y se van. El que se queda, aprende a golpes.»' },
      { id: 'escuela', label: '¿Qué le ha servido de la escuela, si algo?', info: '«Jhonatan no se equivoca en el vuelto. Eso nunca me había pasado con un nuevo. Es lento, sí. Pero no me descuadra.»' },
      { id: 'elvira', label: '¿Doña Elvira podría ir a la escuela?', info: '«¿Elvira? Ella me enseñó a mí. Pero… sí, lo de hoy con la señora me asustó. Si hay cupo, que vaya. Le va a dar vergüenza, eso sí.»' },
      { id: 'zonal', label: '¿Qué le reclama el zonal?', info: '«Ventas y faltantes. Nada más. Nadie me pregunta cuántos nuevos se me van ni por qué.»' },
    ],
    res: picks => ({
      q: null, fx: { confianza: 3, personas: 2 }, rel: { local: 1 },
      flags: picks.includes('elvira') || picks.includes('escuela') ? ['mario_aliado'] : [],
      out: picks.includes('elvira') ? 'Mario se rasca la nuca. «Mañana le digo a Elvira. Pero usted la recibe, ¿ya? Con cariño.»' : 'Mario te pasa el táper. El cabrito está buenazo. Por primera vez se ríen juntos de algo.',
      kusi: ['curioso', 'El «hoy no puedo» tenía historia.'],
    }),
    mirada: {
      ve: 'El jefe que «no colabora» suele ser el que más sufre la falta de capacitación: rotación, faltantes, gente asustada. Escucharlo en su terreno convierte a un obstáculo en el mejor argumento a favor de la escuela.',
      visual: { tipo: 'flujo', titulo: 'El ciclo que Mario vive', pasos: ['Llega un nuevo sin saber', 'Se equivoca en caja', 'Se asusta', 'Renuncia', 'Mario no libera a nadie'] },
    },
  },
  {
    id: 'l5', t: '15:30', ch: 'documento', who: null, titulo: 'El acta de arqueo', banner: 'assets/esc/planilla.webp', lugar: 'Trastienda del local', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>Mario te muestra el cuaderno de arqueos de la semana. ${F.has('nota_bajada') || F.has('pase_directo') ? 'Una de las hojas es de una cajera del grupo 2 que desaprobó y empezó igual.' : 'Hay hojas de Jhonatan y de Elvira.'} <mark class="clave">Los números cuentan lo que nadie dice</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que incumple la política o lo que conviene cambiar.',
    doc: { t: 'Cuaderno de arqueos · Local La Esperanza', sub: 'Semana del lunes al miércoles' },
    lines: [
      { id: 'lun', t: 'Lunes · Caja 1 (Jhonatan) · Diferencia: S/ 0.00 · Firma cajero y jefe.' },
      { id: 'mar', t: 'Martes · Caja 2 (Elvira) · Faltan S/ 20.00 · «Lo puso Elvira de su bolsillo». Diferencia: S/ 0.00.', bad: POL, why: 'Cubrir un faltante con dinero propio esconde el error y no deja saber por qué pasó. La diferencia se anota en el acta.' },
      { id: 'sinf', t: 'Martes · Caja 1 · Diferencia S/ 0.00 · Sin firma del jefe.', bad: POL, why: 'El acta se firma entre cajero y jefe: los dos responden por lo contado.' },
      { id: 'mie', t: 'Miércoles · Caja 1 (Jhonatan) · Sobran S/ 1.50 · Anotado y reportado.' },
      { id: 'lapiz', t: 'Todas las actas están escritas a lápiz.', bad: BP, why: 'Un acta a lápiz se puede borrar. Debe ir con lapicero.' },
      { id: 'hora', t: 'Arqueo de cierre a las 10:15 p. m., después de cerrar la puerta.', duda: 'Puede ser razonable si es dentro del turno; si no, es tiempo de trabajo que debe contarse.' },
    ],
    res: ({ missLey, hitsLey, hitsBp, falsos }) => {
      const bien = (hitsLey || 0) + (hitsBp || 0) >= 2;
      return {
        out: bien ? 'Le muestras a Mario lo del faltante cubierto. Se queda callado: «Elvira siempre lo hace. No quiere problemas». Acuerdan que desde hoy se anota todo, aunque sea un sol.' : 'Revisas el cuaderno por encima. El faltante cubierto pasa desapercibido.',
        flags: bien ? ['faltante_reportado'] : [], rel: { local: bien ? 1 : 0 },
        cartera: { visita: bien ? 'Acta: faltantes tapados con dinero propio' : 'Actas revisadas por encima' },
        pro: { ok: 'El acta de arqueo dice si la caja funciona y si alguien está pagando errores de su bolsillo.', risk: 'Un faltante tapado no aparece en ningún reporte, y la cajera pierde plata en silencio.', info: 'Pide que el refuerzo de arqueo de mañana incluya «qué hacer con una diferencia».' },
        kusi: bien ? ['celebra', '¡Encontraste lo que no se veía!'] : ['pensando', 'Esos S/ 20 decían algo…'],
      };
    },
    rules: [[POL, 'En Boticas del Norte, toda diferencia de caja se anota en el acta, a lapicero, y la firman el cajero y el jefe.']],
    mirada: {
      ve: 'El reporte de Benites dice «menos faltantes». El cuaderno dice algo más: que algunos faltantes no aparecen porque la cajera los paga. Mirar el papel de cerca es lo que hace que un dato sea confiable.',
      visual: { tipo: 'rango', titulo: 'Diferencias de caja de la semana (S/)', min: -20, max: 5, banda: [-2, 2], marcas: [['Jhonatan lunes', 0], ['Elvira martes, real', -20], ['Jhonatan miércoles', 1.5]] },
    },
  },
  {
    id: 'l6', t: '17:40', ch: 'whatsapp', who: null, titulo: 'El informe de visita', banner: 'assets/foto2/caminan.webp', lugar: 'Paradero de La Esperanza', show: ['calidad', 'confianza'],
    body: () => `<p>Esperas la combi de regreso con el polo pegado a la espalda. Karen necesita tu informe para hablar con Benites. <mark class="clave">Cuéntale lo que viste, no lo que esperabas ver</mark>.</p>`,
    type: 'compose', enviaA: 'karen', para: 'Para: Karen Vásquez · Capacitación', boton: 'Enviar el informe',
    prompt: 'Arma el informe eligiendo una frase de cada parte.',
    slots: [
      { id: 'bien', t: 'Lo que funcionó', ops: [
        { id: 'b1', t: 'Jhonatan cobra sin errores y da el vuelto contado; es más lento que Elvira, pero no descuadra.', ok: true, por: 'Un dato observado, con matiz.' },
        { id: 'b2', t: '¡La escuela es un éxito total! 🎉', ok: false, por: 'Un entusiasmo que no ayuda a decidir.' },
      ] },
      { id: 'mal', t: 'Lo que falta', ops: [
        { id: 'm1', t: 'Una cajera antigua recomendó un jarabe a una señora con presión alta; la química farmacéutica estaba en el almacén. Y hay faltantes cubiertos con dinero propio.', ok: true, por: 'Dos hallazgos que la escuela no ve desde el aula.' },
        { id: 'm2', t: 'Elvira es un peligro y debería salir del local.', ok: false, por: 'Juzga a una persona que nadie capacitó.' },
      ] },
      { id: 'pro', t: 'Lo que propones', ops: [
        { id: 'p1', t: 'Que los cajeros antiguos también pasen por la escuela, empezando por Elvira, y que el refuerzo de mañana incluya qué hacer con una diferencia.', ok: true },
        { id: 'p2', t: 'Que el zonal visite más seguido La Esperanza.', ok: null, por: 'Más control no resuelve la falta de capacitación.' },
      ] },
    ],
    res: sel => {
      const mal = sel.bien === 'b2' || sel.mal === 'm2', buenas = ['b1', 'm1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, confianza: q === 'buena' ? 4 : mal ? -2 : 1, etica: sel.mal === 'm2' ? -3 : 1 }, rel: { karen: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['informe_visita'] : [], cartera: { informe: q === 'buena' ? 'Informe de visita: lo que cambió y lo que falta' : 'Informe de visita enviado' },
        out: q === 'buena' ? 'Karen responde desde el aula: «Esto le voy a leer a Benites tal cual. Y Elvira entra mañana al grupo 6, yo la recibo».' : mal ? 'Karen te llama: «¿Que Elvira salga? Ella no tiene la culpa de que nadie la capacitara».' : 'Karen agradece. El informe dice cosas ciertas, pero no le da algo para decidir.',
        pro: { ok: 'Un informe de visita con lo que funcionó, lo que falta y una propuesta es la mejor evidencia de una capacitación.', risk: 'Culpar a una persona desvía del problema real: la escuela llegó tarde para ella.', info: 'Agrega los tiempos de cobro que cronometraste.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Evidencia de la buena!' : 'Le falta matiz.'],
      };
    },
    mirada: {
      ve: 'La capacitación no termina en el aula. Lo que viste hoy — un cajero nuevo que no descuadra, una veterana que nunca fue capacitada, faltantes escondidos — es lo que permite decidir qué sigue. Eso es medir el efecto real.',
      visual: { tipo: 'embudo', titulo: 'Niveles de evaluación de la escuela', niveles: [['Reacción: encuesta', 4], ['Aprendizaje: examen', 3], ['Aplicación: lo que viste hoy', 2], ['Resultados: faltantes de diciembre', 1]] },
    },
  },
];
