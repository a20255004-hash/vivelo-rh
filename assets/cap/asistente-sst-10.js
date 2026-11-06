// Asistente de SST · Capítulo 10 · «El piso 13» · Semana 2, viernes. Final abierto: sigue en la Semana 3.
// Hilo de las dos semanas: el vaciado del piso 12 de un edificio en obra en Chiclayo.
// Normas citadas:
// - Ley 28806, Ley General de Inspección del Trabajo, art. 10: la inspección actúa de oficio por orden superior, que puede
//   derivar, entre otros casos, de una denuncia. https://busquedas.elperuano.pe/dispositivo/NL/1905250-1
//   y https://lpderecho.pe/aspectos-elementales-actuaciones-inspectivas-sunafil/
// - D.S. 005-2012-TR: registros obligatorios del sistema de gestión (accidentes, incidentes peligrosos, inspecciones,
//   capacitaciones) y art. 110, modificado por el D.S. 006-2022-TR (notificación de accidentes e incidentes peligrosos):
//   https://www.congreso.gob.pe/Docs/DGP/DIDP/files/ds_006-2022-tr.pdf
// - Ley 29783 y su reglamento: comité de SST y libro de actas (capítulo 7).

export const CAP = {
  n: 10, titulo: 'El piso 13', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-brazos.webp',
  lugar: 'Constructora Lambayeque · Obra en Chiclayo',
  inicio: '05:45', fin: '18:30', cierreHora: '18:10',
  apertura: 'Viernes. Diez días después de tu primera charla, el piso 12 está terminado y la obra ya mira al 13.', boton: 'Entrar por última vez esta semana',
  kusi: 'Dos semanas, un piso y mucha gente que volvió a su casa. ¡Mira todo lo que hiciste!',
  lead: 'Cerraste el vaciado, elegiste qué indicadores contar, escuchaste el balance de la cuadrilla, defendiste un reporte honesto, hiciste tu propia evaluación, respondiste si te ves en este puesto y recibiste un correo que cambia el lunes.',
  reflexion: '¿Te ves en este puesto? ¿Qué parte te pesó más y cuál disfrutaste?',
  siguiente: { n: 11, titulo: 'La orden de inspección', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'piso12', p: 'Piso 12', j: 'Don Segundo · Obra', d: 0, e: 'Último paño hoy a las 6:00' },
  { id: 'indicadores', p: 'Informe de las dos semanas', j: 'Ingrid · SSOMA', d: 0, e: 'Para la gerencia, hoy' },
  { id: 'comite', p: 'Comité de SST', j: 'Marleny · Trabajadores', d: 0, e: 'Acuerdos en seguimiento' },
  { id: 'piso13', p: 'Encofrado del piso 13', j: 'Don Segundo · Obra', d: 0, e: 'Desde el lunes' },
  { id: 'sunafil', p: 'Inspección de SUNAFIL', j: 'Ingrid · SSOMA', d: 0, e: '—' },
];

export const FUTURO = {
  indicadores_honestos: ['Reportaste a la gerencia el accidente de Jhonatan y el incidente del tablón, con lo aprendido.', 'El inspector encontrará registros que cuadran. Semana 3.'],
  indicadores_maquillados: ['Aceptaste reportar «cero accidentes» a la gerencia.', 'El inspector comparará el reporte con lo que notificó la clínica. Semana 3.'],
  segundo_charla: ['Don Segundo dio su primera charla de seguridad.', 'La cuadrilla del 13 lo escuchará a él. Semana 3.'],
  sunafil_preparada: ['El viernes en la tarde pediste reunir todos los registros para la visita del lunes.', 'Llegarás a la inspección con los papeles en orden. Semana 3.'],
  quiere_seguir: ['Le dijiste a Ingrid que te ves en este puesto.', 'Ella te dejará a cargo de los permisos del piso 13. Semana 3.'],
};

export const CHATS = {
  grupo: { n: 'SSOMA Obra Chiclayo', sub: 'Ingrid y tú', c: '#F2A900' },
  comite: { n: 'Comité SST · Los Algarrobos', sub: '6 miembros y tú', c: '#2F6B3F' },
  ingrid: { n: 'Ing. Ingrid Delgado', sub: 'Supervisora SSOMA', who: 'ingrid' },
  segundo: { n: 'Don Segundo Vílchez', sub: 'Maestro de obra', who: 'segundo' },
  jhonatan: { n: 'Jhonatan Ñique', sub: 'Ayudante de obra', who: 'jhonatan' },
  marleny: { n: 'Marleny Flores', sub: 'Representante en el comité', who: 'marleny' },
  renzo: { n: 'Ing. Renzo Cáceres', sub: 'Residente de obra', c: '#3B6EA8' },
};

export const WSP = [
  { chat: 'comite', t: '05:30', de: 'Teodoro', txt: 'Ya estamos en el patio. Viento en calma. Hoy sí terminamos el 12 💪' },
  { chat: 'comite', t: '09:10', de: 'Elmer', txt: 'Llegaron las tres guardas. Ya están puestas. Les mando foto 📸', si: 'elmer_preparado' },
  { chat: 'jhonatan', t: '11:40', de: 'Jhonatan', txt: 'Ingeniera, el doctor me dio de alta. El lunes vuelvo. ¿Me puede enseñar a revisar las amoladoras? 🙏' },
  { chat: 'renzo', t: '12:20', de: 'Renzo', txt: 'Antes de mandar el informe a la gerencia, pásamelo. Hablemos de los números.' },
  { chat: 'grupo', t: '17:02', de: 'Ingrid', txt: '¿Viste el correo de SUNAFIL? Llámame.' },
];

export const CORREOS = [
  { t: '17:00', de: 'SUNAFIL · Intendencia Regional', para: 'Constructora Lambayeque S.A.C.', asunto: 'Orden de inspección · obra Edificio Los Algarrobos', html: '<p>Se comunica que, en el marco de una orden de inspección, el inspector asignado realizará una visita a la obra el lunes a partir de las 8:00 horas.</p><p>Se solicita tener disponibles los registros obligatorios del sistema de gestión de seguridad y salud en el trabajo, las actas del comité y la relación del personal propio y de las empresas contratistas.</p><p>Atentamente, Inspección del Trabajo</p>' },
];

export const QUIZ = [
  { q: '¿De dónde puede salir una orden de inspección de SUNAFIL?', ops: ['Solo de un accidente mortal', 'De una orden superior que puede derivar, entre otros casos, de una denuncia', 'Solo de un pedido del empleador', 'De las redes sociales'], ok: 1, por: 'El art. 10 de la Ley 28806 indica que la inspección actúa de oficio por orden superior, que puede derivar de una denuncia, entre otros casos.' },
  { q: 'Un indicador como «número de inspecciones de herramientas hechas» es…', ops: ['Inútil', 'Un indicador preventivo: mide lo que haces antes del accidente', 'Lo mismo que el número de accidentes', 'Un requisito del cliente'], ok: 1, por: 'Los indicadores preventivos miden la prevención; los de accidentes miden lo que ya pasó.' },
  { q: 'Reportar «cero accidentes» cuando hubo uno con descanso médico…', ops: ['Mejora el clima laboral', 'Es falso y se descubre al cruzar datos con la clínica y los registros', 'Es una práctica aceptada', 'No tiene consecuencias'], ok: 1, por: 'El centro médico notifica los accidentes de trabajo; un reporte interno distinto no cuadra con los registros.' },
  { q: 'Lo que más cambió en el comité en estas dos semanas fue…', ops: ['El color de las sillas', 'Que sesionó con quórum, con temas de los trabajadores y acuerdos con responsable y fecha', 'Que se suspendió', 'Que solo firmó'], ok: 1, por: 'Un comité vivo se nota en sus acuerdos y en su seguimiento.' },
  { q: '¿Qué se necesita tener listo para una inspección de SST en obra?', ops: ['Solo la credencial', 'Los registros obligatorios, las actas del comité y la relación del personal propio y de contratistas', 'Fotos de la obra', 'Nada: se improvisa'], ok: 1, por: 'La inspección revisa que lo que dice el papel coincida con lo que pasa en la obra.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '05:50', ch: 'presencial', who: 'segundo', titulo: 'El último paño', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Patio de la obra', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Amanece sin viento. ${F.has('vaciado_parado') ? 'Hoy se vacía el paño que quedó pendiente ayer, desde la junta del eje 5.' : F.has('vaciado_abandonado') ? 'Hoy toca picar y reparar el sector que quedó sin vibrar, antes de vaciar lo que falta.' : 'El 12 está completo. Hoy toca curar la losa y revisar el borde donde golpeó la manguera.'} Doce cascos en el patio, esta vez sin reflectores.</p><p>Don Segundo se acerca con su termo: «Ingeniera, ¿la charla la da usted?». <mark class="clave">Lo dice mirando al suelo, como quien quiere decir otra cosa</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Preguntarle si quiere darla él: «Usted ayer dijo cómo se para mejor que yo».',
        res: { q: null, fx: { personas: 5, confianza: 4 }, rel: { segundo: 1 }, flags: ['segundo_charla'], cartera: { piso12: 'Charla de Don Segundo: último paño' },
          out: 'Don Segundo carraspea. Habla tres minutos, sin papel: del tablón de ayer, de Jhonatan, de que «treinta años sin accidentes es suerte si nadie revisa nada». Termina con: «La ingeniera mide, yo paro». Alguien aplaude, y luego todos.', kusi: ['celebra', '¡El maestro de obra dio la charla! Qué divino.'] } },
      { id: 'b', label: 'Darla tú, como todos los días: ya sabes cómo hacerlo.',
        res: { q: null, fx: { confianza: 2 },
          out: 'Tu charla sale bien: corta, con una pregunta y un mensaje claro. Don Segundo escucha desde el fondo con los brazos cruzados, como el primer lunes.', kusi: ['pensando', 'Bien hecha… ¿y si la daba él?'] } },
    ],
    rules: [[BP, 'La prevención se vuelve cultura cuando la dicen los jefes de la obra, no solo el área de Seguridad.']],
    mirada: { ve: 'Diez días atrás, Don Segundo miraba el reloj durante tu charla. Que hoy él quiera hablar de seguridad no es un detalle: es el resultado de decisiones firmes y de gestos de respeto acumulados.' },
  },
  {
    id: 'f2', t: '08:40', ch: 'documento', who: null, titulo: 'Los números', banner: 'assets/esc/planilla.webp', lugar: 'Caseta de SSOMA', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>Ingrid te pide el informe de las dos semanas para la gerencia en Lima. El Excel del área tiene pestañas llamadas «Hoja1», «Hoja1 (2)» y «NO BORRAR». Solo caben dos indicadores en la portada.</p><p><mark class="clave">Lo que pongas en la portada es lo que la gerencia va a mirar</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige los dos indicadores de la portada.', boton: 'Poner estos dos', resumen: 'Pusiste',
    cols: ['Indicador', 'Qué muestra'],
    rows: [
      { id: 'acc', cells: ['Accidentes con descanso médico: 1. Incidentes peligrosos: 1, notificado', 'Lo que pasó, con su investigación'] },
      { id: 'prev', cells: ['Permisos firmados antes de empezar, inspecciones de arneses y herramientas, simulacros hechos', 'Lo que se hizo para prevenir'] },
      { id: 'comite', cells: ['Acuerdos del comité cumplidos en fecha', 'Si la obra hace lo que decide'] },
      { id: 'charlas', cells: ['Asistentes a charlas: 640 firmas', 'Cuánta gente firmó la lista'] },
      { id: 'dias', cells: ['Días sin accidentes desde el viernes: 7', 'Un número que se ve bien'] },
    ],
    score: { acc: 3, prev: 3, comite: 2, charlas: 0, dias: -1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: picks.includes('acc') ? 3 : -2 },
        flags: picks.includes('acc') ? ['portada_honesta'] : [], cartera: { indicadores: q === 'buena' ? 'Portada: lo que pasó y lo que se previno' : 'Portada con números cómodos' },
        out: q === 'buena' ? 'La portada dice lo que pasó y lo que se hizo para evitar el próximo. Ingrid la lee y agrega solo una frase: «Lo que más se previno no se puede contar».' : picks.includes('dias') ? 'Ingrid frunce el ceño: «“Días sin accidentes” desde el viernes… o sea, desde el accidente. Eso no dice nada».' : 'Ingrid te pide cambiar uno: «A la gerencia le tiene que doler un poco lo que pasó y alegrar lo que se previno».',
        pro: { ok: 'Un buen informe junta lo que pasó (accidentes) con lo que se hizo para prevenir (inspecciones, permisos, simulacros).', risk: 'Las firmas en una lista y los «días sin accidentes» se ven bien y explican poco.', info: 'Los indicadores preventivos son los que muestran el trabajo de estas dos semanas.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Números que cuentan la verdad!' : '¿Qué muestra de verdad ese número?'],
      };
    },
    rules: [[BP, 'Reporta indicadores de resultado (accidentes, incidentes) y preventivos (inspecciones, permisos, simulacros, acuerdos cumplidos).']],
    mirada: {
      ve: 'En seguridad, lo que funciona es invisible: los accidentes que no pasaron no aparecen en ningún Excel. Por eso un buen informe cuenta también lo que se hizo para prevenir, y no solo cuántos días pasaron sin que alguien se lastime.',
      visual: { tipo: 'balanza', a: { t: 'Lo que pasó', items: ['1 accidente con descanso', '1 incidente peligroso', 'Ambos investigados'] }, b: { t: 'Lo que se previno', items: ['Permisos antes de subir', 'Arneses y herramientas revisados', 'Simulacro de rescate', 'Una parada a tiempo'] } },
    },
  },
  {
    id: 'f3', t: '10:15', ch: 'presencial', who: 'marleny', titulo: 'El balance de la cuadrilla', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Zona de habilitación de fierro', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Marleny amarra fierro para las columnas del 13. Ruth le alcanza los alambres. ${F.has('comite_vivo') ? 'Desde el martes las dos te saludan de otra manera.' : 'Te miran con curiosidad, como esperando algo.'}</p><p>«¿Quiere saber qué dice la gente de estas dos semanas, ingeniera?» <mark class="clave">Puedes hacerles dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Marleny y Ruth.',
    opts: [
      { id: 'cambio', label: '¿Qué cambió para ustedes?', info: 'Ruth: «Que ayer comimos sentadas. Parece poco, pero en catorce años de obra nunca». Marleny: «Que el comité votó y la obra paró cuando lo decía el acta».' },
      { id: 'falta', label: '¿Qué sigue faltando?', info: 'Marleny: «La escalera del 6 sigue igual. Y la gente de Elmer todavía tiene miedo de hablar: alguien de su cuadrilla dijo que iba a ir “a otro lado” a quejarse».' },
      { id: 'jhonatan', label: '¿Qué dicen de lo de Jhonatan?', info: 'Ruth: «Al principio decían que fue su culpa. Después de la alerta, ya nadie usa amoladora sin guarda. Eso es lo que dicen».' },
      { id: 'yo', label: '¿Qué tendría que hacer distinto yo?', info: 'Marleny se ríe: «Subir más al piso, ingeniera. Usted vive en la caseta escribiendo. La gente le cuenta cosas cuando la ve arriba».' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, confianza: 2, calidad: picks.includes('falta') || picks.includes('yo') ? 3 : 1 }, rel: { marleny: 1 },
      flags: picks.includes('falta') ? ['queja_externa'] : [], cartera: { comite: picks.includes('falta') ? 'Pendiente: escalera del 6; miedo en la subcontrata' : 'Balance de la cuadrilla escuchado' },
      out: picks.includes('falta') ? 'Anotas la frase de Marleny: «a otro lado a quejarse». Te queda dando vueltas el resto de la mañana.' : 'Te vas con las manos en los bolsillos del chaleco y una sensación rara: la de haber hecho algo que se nota.',
      kusi: ['curioso', 'El balance de la gente vale más que cualquier Excel…'],
    }),
    mirada: {
      ve: 'El mejor indicador de una prevencionista no está en el informe: está en lo que dice la cuadrilla cuando nadie la obliga. Preguntar qué falta, y qué deberías hacer distinto, es la parte del balance que más enseña.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo la obra', txt: 'Comimos sentadas. El comité votó y la obra paró. Ya nadie usa amoladora sin guarda. Falta la escalera del 6. La gente de Elmer todavía tiene miedo. Suba más al piso.' },
    },
  },
  {
    id: 'f4', t: '12:30', ch: 'presencial', who: null, titulo: '«Hablemos de los números»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de obra', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Renzo tiene tu informe impreso, con dos líneas marcadas en amarillo.${F.has('accidente_oculto') ? ' Una de ellas dice «accidente con descanso médico: 1». «Eso quedó como primeros auxilios, ¿te acuerdas?»' : ''}</p><p>«La gerencia compara obras. Con un accidente y un incidente, nos ponen en rojo y se cae el bono de todo el equipo, Segundo incluido. <mark class="clave">Pon “cero accidentes incapacitantes” y el incidente en un anexo</mark>. Es lo mismo, dicho de otra forma.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mantener el informe como está y ofrecerle agregar, junto a cada número, qué se investigó y qué cambió, para que la gerencia vea una obra que aprende y no solo una obra en rojo.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: 2 }, flags: ['indicadores_honestos'], cartera: { indicadores: 'Informe honesto, con causas y medidas' },
          out: 'Renzo se queda mirando el papel mucho rato. «Si me preguntan, digo que tú lo escribiste.» «Está bien.» Lo firma. Al salir, te dice sin mirarte: «Lo del viento… estuvo bien. No lo voy a decir dos veces».',
          pro: { ok: 'El número no cambia, pero se lee distinto con su contexto.', risk: 'El bono del equipo puede verse afectado y algunos te lo van a cobrar.', info: 'El centro médico ya notificó el accidente: un informe interno distinto no cuadraría con ningún registro.' },
          kusi: ['animo', 'La verdad, con contexto. Así.'] } },
      { id: 'b', label: 'Aceptar: «cero accidentes incapacitantes» y el incidente en un anexo. Al fin y al cabo, el bono es de todos.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5, confianza: 2 }, flags: ['indicadores_maquillados'], cartera: { indicadores: '«Cero accidentes» en la portada' },
          out: 'Renzo sonríe por primera vez en dos semanas. El informe sale a Lima con una portada verde. En la caseta, el certificado médico de Jhonatan sigue archivado en el registro de accidentes.',
          pro: { ok: 'Proteges el bono del equipo y la relación con Renzo.', risk: 'Un accidente con descanso médico es incapacitante. El informe ya no dice la verdad, y los registros dicen otra cosa.' },
          kusi: ['triste', 'Verde por fuera… y Jhonatan con su venda.'] } },
      { id: 'c', label: 'Decirle que lo decida Ingrid, que es quien firma el informe.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -2 }, flags: ['indicadores_honestos'], cartera: { indicadores: 'Ingrid mantiene los números' },
          out: 'Ingrid llama a Renzo y le dice que el informe sale tal cual. Renzo cuelga y te mira: «Pensé que con dos semanas ya decidías sola».',
          pro: { ok: 'El informe sale con la verdad.', risk: 'Después de dos semanas, tenías criterio para sostenerlo tú.' },
          kusi: ['pensando', 'Bien resuelto… otra vez con la voz de otra.'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR: el registro de accidentes de trabajo e incidentes peligrosos es obligatorio, y los accidentes los notifica el centro médico (art. 110, modificado por el D.S. 006-2022-TR).'], [BP, 'Un indicador maquillado esconde lo que hay que corregir y no resiste un cruce con los registros.']],
    mirada: {
      ve: 'Los bonos y las comparaciones entre obras empujan a «ajustar» los números. Es una de las presiones más comunes en el trabajo de Seguridad. La salida no es esconder el número, sino contarlo junto con lo que se aprendió.',
      visual: { tipo: 'cambio', titulo: 'El mismo número, otra lectura', pares: [['1 accidente: obra en rojo', '1 accidente investigado: amoladoras nuevas e inspección semanal'], ['1 incidente: en un anexo', '1 incidente notificado: material asegurado'], ['«Cero» en la portada', 'La verdad con su contexto']] },
    },
  },
  {
    id: 'f5', t: '15:00', ch: 'documento', who: 'ingrid', titulo: 'Tu evaluación', banner: 'assets/foto/mentora.webp', lugar: 'Caseta de SSOMA', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Ingrid te sirve un café de la máquina nueva, la que compró con su plata. «Antes de que me cuentes cómo te sientes, quiero que te evalúes tú. Sin modestia y sin exagerar.»</p><p>En la pared de la caseta está la foto de la pizarra de los cinco porqués. <mark class="clave">Arma tu balance de las dos semanas</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de tu autoevaluación.', boton: 'Mostrársela a Ingrid',
    bloques: [
      { id: 'fuerte', t: 'Lo que hiciste bien', n: 2, ops: [
        { id: 'f1', t: 'Sostuve criterios cuando había presión: arneses dañados, permiso sin firmar, viento sobre el límite.', ok: true, por: 'Con ejemplos concretos.' },
        { id: 'f2', t: 'Hice que el comité y la cuadrilla participaran en las decisiones.', ok: true, por: 'La prevención no fue solo tuya.' },
        { id: 'f3', t: 'No tuve ningún problema con nadie.', ok: false, por: 'Tuviste varios, y algunos eran necesarios.' },
      ] },
      { id: 'mejora', t: 'Lo que tienes que mejorar', n: 1, ops: [
        { id: 'm1', t: 'Subir más al piso y pasar menos tiempo en la caseta escribiendo.', ok: true, por: 'Lo dijo Marleny, y tiene razón.' },
        { id: 'm2', t: 'Nada importante.', ok: false, por: 'Nadie termina dos semanas así sin algo que mejorar.' },
      ] },
      { id: 'lleva', t: 'Lo que te llevas', n: 1, ops: [
        { id: 'l1', t: 'Que un papel sirve si dice la verdad, y que para parar hay que preparar cómo parar.', ok: true, por: 'Es la idea que atraviesa la matriz, el permiso, el informe y el vaciado.' },
        { id: 'l2', t: 'Que lo importante es que los registros estén completos para la auditoría.', ok: false, por: 'Los registros importan por lo que protegen, no por la auditoría.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, confianza: q === 'buena' ? 4 : 0 }, rel: { ingrid: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['autoevaluacion'], cartera: { indicadores: 'Autoevaluación conversada con Ingrid' },
        out: q === 'buena' ? 'Ingrid asiente despacio. «Yo habría escrito lo mismo. Agrego una: aprendiste a decir que no ofreciendo otra salida. Eso no se enseña en ningún curso.»' : 'Ingrid te devuelve la hoja: «Sé más honesta contigo. Lo bueno, con ejemplos; lo que falta, sin miedo».',
        pro: { ok: 'Una buena autoevaluación tiene ejemplos concretos, una mejora real y una idea que te llevas.', info: 'Guarda esta hoja: en tres meses te va a servir para ver cuánto creciste.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Te miraste con honestidad!' : 'Ejemplos, mejora y aprendizaje.'],
      };
    },
    rules: [[BP, 'Evalúa tu desempeño con hechos: qué decidiste, qué pasó y qué harías distinto.']],
    mirada: {
      ve: 'El trabajo de Seguridad rara vez recibe aplausos: cuando sale bien, no pasa nada. Por eso aprender a evaluarse, con ejemplos y sin esperar reconocimiento, es parte del oficio.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['Lunes 1', 'La primera charla'], ['Miércoles 1', 'Los arneses'], ['Viernes 1', 'El accidente'], ['Martes 2', 'El comité'], ['Jueves 2', 'El viento']] },
    },
  },
  {
    id: 'f6', t: '16:20', ch: 'presencial', who: 'ingrid', titulo: '¿Te ves en este puesto?', banner: 'assets/esc/camino.webp', lugar: 'Piso 12, mirando la ciudad', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Suben juntas al 12. La losa ya está dura, gris clara. Desde arriba se ve todo Chiclayo: la catedral, el humo del mercado Modelo, la carretera a Lambayeque. El viento de la tarde empieza a soplar, y esta vez nadie está en el borde.</p><p>Ingrid: «Te lo pregunto en serio, sin apuro. <mark class="clave">¿Te ves en este puesto?</mark>»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«Sí. Me cansa, me enfrenta con gente que aprecio, pero cuando ayer recogieron la pluma supe que esto es lo mío.»',
        res: { q: null, fx: { confianza: 3, personas: 2 }, rel: { ingrid: 1 }, flags: ['quiere_seguir'],
          out: 'Ingrid sonríe. «Entonces el lunes los permisos del 13 son tuyos. Yo reviso, tú firmas.» Te da una palmada en el casco.', kusi: ['celebra', '¡Te ves! Y la obra también te ve a ti.'] } },
      { id: 'b', label: '«Todavía no sé. Me gusta lo que logramos, pero no sé si aguanto esta presión todos los días.»',
        res: { q: null, fx: { confianza: 2 },
          out: 'Ingrid asiente. «Es la respuesta más honesta que me han dado. A mí me tomó dos años saberlo. Quédate un mes más y lo vuelves a pensar.»', kusi: ['pensando', 'Dudar también es saber algo de ti.'] } },
      { id: 'c', label: '«Creo que no. Prefiero algo con menos conflicto, aunque aprendí muchísimo.»',
        res: { q: null, fx: { confianza: 1 },
          out: 'Ingrid no se sorprende. «Saber dónde no quieres estar también es importante. Lo que aprendiste aquí sirve en cualquier lado donde haya personas trabajando.»', kusi: ['animo', 'Conocerte vale tanto como el puesto.'] } },
    ],
    rules: [[BP, 'Elegir un puesto también es saber qué presiones estás dispuesta a sostener.']],
    mirada: { ve: 'Ser asistente de SST en una obra es trabajar temprano, al sol y con el viento, y sostener decisiones incómodas frente a gente con más cargo y más años. También es saber que alguien volvió a su casa porque tú dijiste «paramos». No hay una respuesta correcta a esta pregunta: solo la tuya.' },
  },
  {
    id: 'f7', t: '17:05', ch: 'correo', who: null, titulo: 'El correo de las cinco', banner: 'assets/foto/revisa.webp', lugar: 'Caseta de SSOMA', show: ['cumplimiento', 'tiempo', 'calidad'],
    body: (n, F) => `<p>Ya tenías la mochila puesta cuando sonó la notificación. Es de SUNAFIL: un inspector visitará la obra el lunes a las 8:00 y pide los registros de SST, las actas del comité y la relación del personal propio y de contratistas.${F.has('queja_externa') ? ' Te acuerdas de la frase de Marleny: alguien de la cuadrilla de Elmer iba a ir «a otro lado» a quejarse.' : ''}${F.has('indicadores_maquillados') ? ' Y del informe verde que salió a Lima hace tres horas.' : ''}</p><p>Ingrid te escribe: «¿Viste? Llámame». <mark class="clave">Antes de llamarla, le mandas al grupo lo que hay que tener listo</mark>.</p>`,
    type: 'compose', enviaA: 'grupo', para: 'Para: SSOMA Obra Chiclayo', boton: 'Enviar al grupo',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'registros', t: 'Los registros', ops: [
        { id: 'r1', t: 'Para el lunes: registro de accidentes e incidentes, inspecciones de arneses y herramientas, permisos de altura y capacitaciones, todos al día.', ok: true, por: 'Lo que pide la inspección, concreto.' },
        { id: 'r2', t: 'Para el lunes hay que ordenar los papeles.', ok: false, por: '¿Cuáles?' },
      ] },
      { id: 'comite', t: 'El comité y los contratistas', ops: [
        { id: 'c1', t: 'El libro de actas con la sesión del martes y la lista del personal de Encofrados del Norte, que le pido a Elmer hoy mismo.', ok: true, por: 'Incluye a la subcontrata, que es lo que más se revisa.' },
        { id: 'c2', t: 'Lo de la subcontrata es problema de Elmer.', ok: false, por: 'En tu obra, también es tu problema.' },
      ] },
      { id: 'tono', t: 'Cómo cierras', ops: [
        { id: 't1', t: 'Lo que tenemos dice la verdad. Si algo falta, mejor encontrarlo nosotros este fin de semana.', ok: true, por: 'Calma y responsabilidad.' },
        { id: 't2', t: 'Tranquilos, seguro es una inspección de rutina.', ok: false, por: 'No sabes por qué viene. Prepararse no es alarmarse.' },
      ] },
    ],
    res: sel => {
      const buenas = ['r1', 'c1', 't1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { ingrid: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['sunafil_preparada'], cartera: { sunafil: q === 'riesgosa' ? 'Visita el lunes 8:00 · sin preparar' : 'Visita el lunes 8:00 · registros en revisión' },
        out: q === 'buena' ? 'Ingrid te llama al minuto: «Perfecto. Mañana sábado nos vemos aquí a las 9 y revisamos todo. Y pregúntale a Elmer, con cuidado, si sabe algo de una denuncia».' : q === 'aceptable' ? 'Ingrid te llama: «Bien, pero falta lo de la subcontrata. El inspector va a pedir todo».' : 'Ingrid te llama: «Esto no es de rutina. Necesito que lo tomes en serio».',
        pro: { ok: 'Ante una inspección, lo primero es tener los registros completos y que digan la verdad.', risk: 'No sabes qué originó la orden: puede ser una denuncia.', info: 'La inspección actúa por orden superior, que puede venir de una denuncia (Ley 28806, art. 10).' },
        kusi: [q === 'buena' ? 'sorpresa' : 'preocupado', q === 'buena' ? '¡Uy! El lunes se pone interesante…' : '¿Y si la denuncia es de la subcontrata?'],
      };
    },
    rules: [[LEY, 'Ley 28806, art. 10: la inspección del trabajo actúa de oficio por orden superior, que puede derivar, entre otros casos, de una denuncia.'], [LEY, 'D.S. 005-2012-TR: los registros obligatorios del sistema de gestión de SST deben estar disponibles.']],
    mirada: {
      ve: 'Una inspección de SUNAFIL revisa si lo que dicen los papeles coincide con lo que pasa en la obra. Después de estas dos semanas, tus registros cuentan una historia. El lunes sabrás quién más la está contando, y por qué.',
      visual: { tipo: 'flujo', titulo: 'Lo que llega el lunes', pasos: ['Orden de inspección', 'Visita a la obra', 'Registros y actas', 'Personal de contratistas', '¿Una denuncia?'], aqui: 0 },
    },
  },
];
