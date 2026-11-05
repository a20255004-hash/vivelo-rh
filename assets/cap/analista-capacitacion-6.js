// Analista de Capacitación y Desarrollo · Capítulo 6 · «No los suelto» · Semana 2, lunes.
// Hilo de las dos semanas: demostrar que la capacitación cambia resultados en una financiera con la mora en alza.
// Normas citadas:
// - Constitución Política del Perú, art. 25: jornada ordinaria de ocho horas diarias o cuarenta y ocho semanales, como máximo.
// - TUO de la Ley de Jornada de Trabajo, Horario y Trabajo en Sobretiempo (D.S. 007-2002-TR), art. 9: el trabajo en
//   sobretiempo es voluntario, en su otorgamiento y en su prestación; art. 10: el sobretiempo se paga con recargo o se compensa con descanso.
//   Texto: https://lpderecho.pe/tuo-ley-jornada-trabajo-horario-trabajo-sobretiempo-decreto-supremo-007-2002-tr
//   Aplicación (SUNAFIL, Res. 613-2020): https://lpderecho.pe/no-firmar-formato-de-autorizacion-de-horas-extra-no-impide-reconocer-autorizacion-tacita-resolucion-613-2020-sunafil/
// Las políticas internas de Chimú (canal de ética, metas) son ficticias.

export const CAP = {
  n: 6, titulo: 'No los suelto', dia: 'Semana 2, lunes', foto: 'assets/foto/reunion-jefa.webp',
  lugar: 'Financiera Chimú · Sede central de Trujillo',
  inicio: '07:45', fin: '19:00', cierreHora: '18:45',
  apertura: 'Lunes de la segunda semana. El taller ya pasó; ahora toca ver si sirve en la calle. Y para eso necesitas a la gente de Víctor.', boton: 'Empezar el día',
  kusi: 'Un taller sin seguimiento es una fiesta sin fotos. ¡Vamos por el campo!',
  lead: 'Llamaste a los asesores del taller, armaste el acompañamiento en campo, negociaste con un Víctor que no soltaba a nadie, respondiste a Milagros y frenaste un curso nocturno para 40 agencias.',
  reflexion: '¿Qué le ofreciste hoy a Víctor que no fuera solo tu argumento?',
  siguiente: { n: 7, titulo: 'La obligatoria', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'aplicacion', p: 'Qué aplicaron tras el taller', j: 'Tú · Desarrollo', d: 0, e: 'Sin datos' },
  { id: 'acompanamiento', p: 'Acompañamiento en campo', j: 'Sandra y Don Aurelio', d: 0, e: 'Por negociar' },
  { id: 'victor', p: 'Acuerdo con Víctor', j: 'Víctor · Negocios', d: 0, e: '«No los suelto»' },
  { id: 'metas', p: 'Presión por la meta en El Porvenir', j: 'Riesgos · Chimú', d: 0, e: 'Abierto' },
  { id: 'replica', p: 'Réplica en 40 agencias', j: 'Víctor · Negocios', d: 0, e: 'Propuesta de Víctor' },
];

export const FUTURO = {
  aplicacion_vista: ['Viste que lo aprendido se aplica a medias y que hace falta acompañar en la calle.', 'Saldrás a campo el miércoles. Capítulo 8.'],
  acompanamiento_listo: ['Armaste un acompañamiento en campo con una lista de observación de cinco conductas.', 'Lo usarás en el capítulo 8.'],
  victor_trato: ['Víctor aceptó el acompañamiento a cambio de que las colocaciones cuenten para Sandra y Don Aurelio.', 'Lo verás en el comité. Capítulo 9.'],
  victor_escalado: ['Escalaste a Víctor con la Gerencia General y te ordenaron el acompañamiento desde arriba.', 'Víctor no lo olvidará en el comité. Capítulo 9.'],
  sin_acompanamiento: ['Te quedaste sin acompañamiento en campo.', 'Medirás a ciegas el miércoles. Capítulo 8.'],
  milagros_acompanada: ['Le respondiste a Milagros con cuidado y le diste un camino seguro.', 'Capítulo 9.'],
  presion_reportada_tarde: ['Al final llevaste a Lorena, sin nombres, lo de «redondear» ventas.', 'Riesgos lo verá tarde. Capítulo 9.'],
  replica_frenada: ['Frenaste el curso nocturno obligatorio para 40 agencias y propusiste escalar por etapas.', 'El lunes de la Semana 3 vuelve el tema. Capítulo 10.'],
  replica_nocturna: ['Dejaste pasar el curso nocturno obligatorio para 40 agencias.', 'Te alcanzará en el capítulo 10.'],
  sunafil_preparada: ['Antes de irte pediste el registro de capacitaciones de SST.', 'Mañana llega SUNAFIL. Capítulo 7.'],
};

export const CHATS = {
  grupo: { n: 'Desarrollo · Chimú', sub: 'Lorena y tú', c: '#2F6B3F' },
  lorena: { n: 'Lorena Villanueva', sub: 'Jefa de Desarrollo', who: 'lorena' },
  victor: { n: 'Víctor Alvarado', sub: 'Gerente regional', who: 'victor' },
  sandra: { n: 'Sandra Rojas', sub: 'Asesora de negocios', who: 'sandra' },
  ronald: { n: 'Ronald Mejía', sub: 'Proveedor', who: 'ronald' },
  milagros: { n: 'Milagros Chávez', sub: 'Asesora · El Porvenir', c: '#A0522D' },
  kevin: { n: 'Kevin Paredes', sub: 'Asesor · El Porvenir', c: '#3D6E8F' },
};

export const WSP = [
  { chat: 'grupo', t: '07:40', de: 'Lorena', txt: 'Buen lunes ☀️ Hoy Víctor viene a la sede. Viene con el ceño fruncido, te aviso desde ya.' },
  { chat: 'kevin', t: '07:55', de: 'Kevin', txt: '¡Señorita! La señora Rosa pagó los S/ 150 el sábado, como acordamos 🙌' },
  { chat: 'victor', t: '09:30', de: 'Víctor', txt: 'Riesgos me mandó un memo para revisar la meta de los nuevos. Justo ahora. ¿Tú sabes algo de eso?', si: 'presion_reportada' },
  { chat: 'victor', t: '09:30', de: 'Víctor', txt: 'Nando me contó que fuiste a cuestionarlo por cómo maneja su agencia. Hablamos a las 10:30.', si: 'presion_confrontada' },
  { chat: 'victor', t: '09:30', de: 'Víctor', txt: 'A las 10:30 en tu oficina. Tema: lo que me pediste para esta semana.', si: 'presion_callada' },
  { chat: 'sandra', t: '12:00', de: 'Sandra', txt: 'Don Aurelio y yo ya tenemos la lista de los asesores que vamos a acompañar 😊', si: 'victor_trato' },
  { chat: 'lorena', t: '14:10', de: 'Lorena', txt: 'Gracias por contarme lo de El Porvenir. Lo llevo a Riesgos esta semana, sin nombres 🙏', si: 'presion_reportada_tarde' },
  { chat: 'victor', t: '16:40', de: 'Víctor', txt: 'Ya, por etapas. Cinco agencias, en horario. Pero el viernes quiero un calendario.', si: 'replica_frenada' },
];

export const CORREOS = [
  { t: '08:20', de: 'Víctor Alvarado', para: 'Analista de Capacitación y Desarrollo; Lorena Villanueva', asunto: 'Réplica del taller en las 40 agencias', html: '<p>El viernes me gustó lo que vi. Lo quiero en las 40 agencias, pero sin quitar horas de calle. Adjunto mi propuesta. Necesito que me la aprueben hoy.</p><p>Víctor Alvarado · Gerente regional</p>' },
  { t: '18:15', de: 'Comité de SST · Chimú', para: 'Lorena Villanueva; Analista de Capacitación y Desarrollo', asunto: 'URGENTE · Requerimiento de SUNAFIL para mañana', html: '<p>Recibimos un requerimiento de información de SUNAFIL. Mañana debemos presentar, entre otros documentos, el registro de capacitaciones en SST de este año.</p><p>Secretaría del Comité de SST</p>' },
];

export const QUIZ = [
  { q: '¿Cuál es la jornada ordinaria máxima según la Constitución?', ops: ['Diez horas diarias', 'Ocho horas diarias o cuarenta y ocho semanales', 'Seis horas diarias', 'La que fije el gerente'], ok: 1, por: 'El artículo 25 de la Constitución fija la jornada ordinaria en ocho horas diarias o cuarenta y ocho semanales, como máximo.' },
  { q: 'Un curso obligatorio de 7 a 10 p. m., después de una jornada completa, ¿qué es?', ops: ['Tiempo libre del trabajador', 'Trabajo en sobretiempo, que es voluntario y se paga o se compensa', 'Una actividad social', 'Algo que el trabajador debe por su bono'], ok: 1, por: 'El D.S. 007-2002-TR dispone que el sobretiempo es voluntario (art. 9) y se paga con recargo o se compensa con descanso (art. 10).' },
  { q: 'Después de un taller, ¿qué ayuda más a que lo aprendido se aplique?', ops: ['Otro taller igual', 'Acompañamiento en el trabajo real, con observación y retroalimentación', 'Un certificado', 'Un correo de recordatorio'], ok: 1, por: 'Lo que se aprende en la sala se consolida cuando alguien acompaña y corrige en la situación real.' },
  { q: 'Un gerente no suelta a sus mejores asesores para acompañar a los nuevos. ¿Qué propones?', ops: ['Que la Gerencia General lo obligue', 'Un acuerdo que proteja su indicador: acompañar dentro de las visitas y que las colocaciones cuenten para todos', 'Olvidar el acompañamiento', 'Hacerlo sin avisarle'], ok: 1, por: 'Cuando el acuerdo protege lo que le importa al jefe, deja de ser un obstáculo.' },
  { q: 'Una asesora te cuenta en confianza que la presionan para inflar ventas. ¿Qué haces?', ops: ['Publicarlo para que se sepa', 'Darle un canal seguro y llevarlo a quien corresponde, sin su nombre', 'Decirle que es normal', 'Confrontar a su jefe con su nombre'], ok: 1, por: 'Proteger a quien habla y llevar el problema a quien puede resolverlo son dos obligaciones a la vez.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'u1', t: '07:50', ch: 'llamada', who: null, titulo: 'Lunes, después del taller', banner: 'assets/foto/llamada.webp', lugar: 'Tu escritorio, con el primer café', show: ['calidad', 'personas', 'tiempo'],
    body: (n, F) => `<p>Antes de que llegue Víctor, quieres saber qué pasó el sábado en la calle. Llamas a tres asesores del taller${F.has('compromisos_asesores') ? ' y tienes a mano lo que cada uno prometió el viernes' : ''}.</p><p>El café de la máquina sale tibio, como siempre. <mark class="clave">Lo que te cuenten decidirá qué haces esta semana</mark>.</p>`,
    type: 'calls',
    calls: [['Kevin Paredes · El Porvenir', 'Contesta en la combi', '«La señora Rosa pagó los S/ 150 el sábado, como quedamos por escrito. ¡Primera vez que un acuerdo mío se cumple!» Luego baja la voz: «Don Julio no. Ese ni me abre».'], ['Milagros Chávez · El Porvenir', 'Contesta mientras deja a su hija en el jardín', '«Le pedí el cuaderno de ventas a una clienta nueva, como en el taller. Se ofendió, dijo que la estaba tratando de mentirosa, y se fue a la caja de enfrente. Perdí un crédito, señorita.»'], ['Asesor · Florencia de Mora', 'Contesta apurado', '«La verdad, no apliqué nada. El sábado tenía que cerrar cinco créditos para la meta. Ya será esta semana.»']],
    prompt: 'Escuchaste a tres asesores. ¿Qué concluyes?',
    choices: [
      { id: 'a', label: 'Lo aprendido se aplica a medias: funciona, pero en la calle aparecen situaciones que el taller no cubrió. Hace falta acompañarlos en sus visitas reales esta semana.',
        res: { q: 'buena', fx: { calidad: 5, personas: 2 }, flags: ['aplicacion_vista'], cartera: { aplicacion: '1 aplicó con éxito, 1 con tropiezo, 1 no aplicó' },
          out: 'Anotas en tu libreta: «Kevin: sí. Milagros: sí, pero no sabe pedir el cuaderno sin ofender. Florencia de Mora: la meta pudo más». Tres casos, tres necesidades distintas.',
          pro: { ok: 'Lees la aplicación como un proceso, no como aprobado o desaprobado.', info: 'Lo de Milagros es oro: pedir el cuaderno tiene una forma de decirse que se aprende mirando a alguien que lo hace bien.' },
          kusi: ['curioso', 'Del taller a la calle hay un trecho…'] } },
      { id: 'b', label: 'Lo de Milagros muestra que pedir el cuaderno espanta clientes. Mejor quitar esa parte del método.',
        res: { q: 'riesgosa', fx: { calidad: -4 }, cartera: { aplicacion: 'Se descarta verificar ventas' },
          out: 'Tachas «pedir el cuaderno» de tu guía. Era justo lo que explicaba buena parte de la mora del diagnóstico.',
          pro: { ok: 'Escuchas lo que pasó en la calle.', risk: 'Un tropiezo en la aplicación no invalida la práctica: dice que falta aprender cómo hacerla.' },
          kusi: ['preocupado', '¿Y la mora de los créditos sin verificar?'] } },
      { id: 'c', label: 'Lo de Kevin prueba que el taller funciona. Mandárselo a Víctor como evidencia.',
        res: { q: 'aceptable', fx: { confianza: 2, calidad: -1 }, envia: ['victor', 'Víctor, Kevin cerró un acuerdo por escrito y la clienta pagó el sábado. ¡El taller funciona! 💪'], cartera: { aplicacion: 'Un caso de éxito enviado a Víctor' },
          out: 'Víctor responde con un pulgar. Un caso alegra, pero no prueba nada: los otros dos no te los contó nadie.',
          pro: { ok: 'Celebrar un logro real motiva.', risk: 'Un caso escogido no es evidencia. Víctor lo sabe y lo usará cuando le convenga.' },
          kusi: ['pensando', 'Uno de tres no es un resultado.'] } },
    ],
    rules: [[BP, 'Después de una capacitación, revisa la aplicación en el trabajo real: qué se usó, qué se trabó y por qué.']],
    mirada: {
      ve: 'El tercer nivel de evaluación, la aplicación, es el más olvidado. Entre la sala y la calle aparecen la meta, el cliente que se ofende y el miedo a perder un crédito. Ahí se decide si la capacitación sirvió.',
      visual: { tipo: 'embudo', titulo: 'Del taller a la calle', niveles: [['Aprobaron la prueba', 14], ['Dicen que lo intentaron', 9], ['Lo aplicaron bien', 4]] },
    },
  },
  {
    id: 'u2', t: '09:00', ch: 'documento', who: null, titulo: 'El acompañamiento', banner: 'assets/foto2/caminan.webp', lugar: 'Tu escritorio', show: ['calidad', 'tiempo', 'personas'],
    body: () => `<p>Abres un documento nuevo: «Acompañamiento en campo · El Porvenir». Tienes hasta el miércoles para salir a la calle con los asesores y ver qué aplican.</p><p>Sandra y Don Aurelio podrían acompañar. Pero <mark class="clave">cada mañana que ellos dejan de colocar, Víctor lo siente</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos piezas de tu plan de acompañamiento.', boton: 'Armar el plan', resumen: 'Tu plan',
    cols: ['Pieza', 'Qué resuelve'],
    rows: [
      { id: 'dentro', cells: ['Sandra y Don Aurelio acompañan a cada asesor en sus propias visitas, sin dejar su ruta', 'No se pierde calle: se aprende mirando'] },
      { id: 'lista', cells: ['Una lista de observación de cinco conductas: pide el cuaderno, revisa temporadas, pregunta cuánto puede pagar, deja el acuerdo por escrito, llama en horario', 'Saber qué mirar y poder comparar'] },
      { id: 'repetir', cells: ['Repetir el taller completo el sábado', 'Repasar todo'] },
      { id: 'video', cells: ['Mandarles un video con el resumen del taller', 'Recordar'] },
      { id: 'nando', cells: ['Que Nando califique a cada asesor del 1 al 10', 'Tener una nota'] },
    ],
    score: { dentro: 3, lista: 3, repetir: 0, video: -1, nando: -2 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, tiempo: picks.includes('repetir') ? -2 : 1 },
        flags: q === 'buena' ? ['acompanamiento_listo'] : [],
        cartera: { acompanamiento: q === 'buena' ? 'En sus visitas, con lista de 5 conductas' : 'Plan sin forma clara de observar' },
        out: q === 'buena' ? 'Tu plan cabe en media hoja: acompañar dentro de las visitas y observar cinco conductas. Si Víctor acepta, el miércoles sabrás qué se aplica de verdad.' : q === 'aceptable' ? 'Tu plan ayuda a recordar, pero no te dirá qué hacen en la calle.' : 'Tu plan termina en una nota de Nando. Con lo que pasó en El Porvenir, eso puede salir muy mal.',
        pro: { ok: 'Acompañar dentro del trabajo real no quita horas y deja ver la conducta.', risk: 'Una nota del jefe mezcla aprendizaje con evaluación de desempeño, y con presión.', info: 'Lleva la lista impresa: en la calle no hay tiempo para abrir el celular.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Aprender mirando, sin perder calle!' : '¿Qué vas a mirar exactamente?'],
      };
    },
    rules: [[BP, 'Para medir la aplicación, define antes qué conductas observarás.']],
    mirada: {
      ve: 'El acompañamiento en campo es la forma más barata de convertir un taller en hábito. Su clave es doble: que no le cueste la meta al asesor y que el observador sepa exactamente qué mirar.',
      visual: { tipo: 'flujo', titulo: 'Acompañar sin perder calle', pasos: ['El asesor hace su ruta', 'Sandra o Don Aurelio a su lado', 'Observan 5 conductas', 'Retroalimentación al salir', 'Anotan en la lista'] },
    },
  },
  {
    id: 'u3', t: '10:30', ch: 'presencial', who: 'victor', titulo: '«No los suelto»', banner: 'assets/foto2/tension.webp', lugar: 'Tu oficina', show: ['confianza', 'personas', 'etica'],
    body: (n, F) => `<p>Víctor no se sienta. ${F.has('presion_reportada') ? '«Riesgos me quiere bajar la meta de los nuevos justo cuando estoy atrasado. No sé quién les metió la idea.»' : F.has('presion_confrontada') ? '«Nando dice que fuiste a decirle cómo manejar su agencia. Él responde a mí, no a Desarrollo.»' : '«Vengo rápido, tengo comité de colocaciones.»'}${F.has('victor_participo') ? ' Aun así reconoce: «Lo del viernes me gustó, el chico me sacó un acuerdo».' : ''}</p><p>«Me pides a Sandra y a Aurelio tres mañanas. Son mis dos mejores colocadores. <mark class="clave">No los suelto</mark>. Primero las metas.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Proponerle un trato: que acompañen dentro de sus propias visitas, solo dos mañanas, y que los créditos que coloque el asesor acompañado también cuenten para la meta de Sandra y de Don Aurelio.',
        res: { q: 'buena', fx: { confianza: 4, personas: 3, calidad: 2 }, rel: { victor: 1, sandra: 1 }, flags: ['victor_trato'], cartera: { victor: 'Trato: 2 mañanas, colocaciones compartidas', acompanamiento: 'Aprobado por Víctor' },
          out: 'Víctor saca la calculadora del celular. «Si el nuevo coloca acompañado, Sandra no pierde. Ya. Dos mañanas. Pero si la colocación baja, se acaba.»',
          pro: { ok: 'Diseñas un acuerdo que protege su indicador y premia a quien enseña.', risk: 'Te comprometes a que la colocación no baje, y eso no depende solo de ti.', info: 'Pide que el trato quede por correo, con copia a Lorena.' },
          kusi: ['celebra', 'Ganaron todos. ¡Qué bacán!'] } },
      { id: 'b', label: 'Decirle que lo vas a escalar: Lorena hablará con la Gerencia General para que lo ordene.',
        res: { q: 'riesgosa', fx: { confianza: -4, personas: -1, cumplimiento: 1 }, rel: { victor: -1 }, flags: ['victor_escalado'], cartera: { victor: 'Escalado a la Gerencia General' },
          out: 'Por la tarde llega un correo de la Gerencia General: «Víctor, por favor facilita el acompañamiento». Víctor lo cumple al pie de la letra: dos mañanas, ni un minuto más, y sin saludarte en el pasillo.',
          pro: { ok: 'Consigues el acompañamiento.', risk: 'Una orden desde arriba consigue horas, pero no aliados. Y Víctor estará en el comité del jueves.' },
          kusi: ['preocupado', 'Ganaste la batalla… ¿y la guerra?'] } },
      { id: 'c', label: 'Aceptar: que los asesores apliquen solos y el miércoles mides igual con lo que puedas observar tú.',
        res: { q: 'aceptable', fx: { confianza: 2, calidad: -3 }, rel: { victor: 1 }, flags: ['sin_acompanamiento'], cartera: { victor: 'Sin acompañamiento', acompanamiento: 'Descartado' },
          out: 'Víctor se va aliviado. Tú te quedas con un problema: el miércoles verás a pocos asesores, y nadie les habrá ayudado con lo que se les trabó.',
          pro: { ok: 'Cuidas la relación con Víctor.', risk: 'Sin acompañamiento, la aplicación depende de cada uno, y la meta suele ganar.' },
          kusi: ['pensando', 'Víctor contento… ¿y Milagros, con su cuaderno?'] } },
    ],
    rules: [[BP, 'Negocia con los jefes desde su indicador: un acuerdo que proteja su meta tiene más futuro que una orden desde arriba.']],
    mirada: {
      ve: '«No los suelto» casi nunca es desprecio por la capacitación: es miedo a perder resultados. La negociación cambia cuando el jefe ve que el acuerdo protege su indicador y, de paso, premia a quienes enseñan.',
      visual: { tipo: 'balanza', a: { t: 'Lo que teme Víctor', items: ['Perder a sus dos mejores colocadores', 'Atrasarse más en la meta', 'Que Riesgos le baje la meta'] }, b: { t: 'El trato', items: ['Acompañan dentro de su ruta', 'Solo dos mañanas', 'Las colocaciones cuentan para ambos'] } },
    },
  },
  {
    id: 'u4', t: '12:40', ch: 'whatsapp', who: null, titulo: 'El mensaje de Milagros', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Comedor de la sede, con un táper de arroz con pollo', show: ['etica', 'personas', 'confianza'],
    body: (n, F) => `<p>Abres el táper en el comedor cuando vibra el celular. Es Milagros.</p><p>${F.has('presion_callada') ? '«Señorita, Nando volvió a pedirnos que redondeemos las ventas para cerrar el mes. Yo no quiero. Estoy pensando en renunciar.»' : F.has('presion_confrontada') ? '«Señorita, desde que usted habló con Nando, me tiene en las rutas más lejos. Nadie me dice nada, pero yo sé por qué.»' : '«Señorita, gracias. Vino alguien de Riesgos a revisar evaluaciones. Nando está más tranquilo, pero dice que la meta este mes no cambia.»'} <mark class="clave">Tienes que contestarle algo</mark>.</p>`,
    type: 'compose', enviaA: 'milagros', para: 'Para: Milagros Chávez · Asesora', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'escucha', t: 'Cómo empiezas', ops: [
        { id: 'e1', t: 'Milagros, gracias por contarme. Hiciste bien en escribirme, y lo que me dices queda entre nosotras.', ok: true, por: 'Reconoces su confianza y la tranquilizas.' },
        { id: 'e2', t: 'Milagros, tranquila, eso pasa en todas las agencias.', ok: false, por: 'Normaliza algo que no está bien.' },
      ] },
      { id: 'camino', t: 'Qué haces', ops: [
        { id: 'c1', t: 'Voy a hablar hoy con Lorena para que llegue a Riesgos sin tu nombre. Y si quieres, el canal de ética de Chimú recibe reportes confidenciales.', ok: true, por: 'Le das un camino seguro, con opciones.' },
        { id: 'c2', t: 'Voy a hablar ahora mismo con Nando para que pare.', ok: false, por: 'Expone a Milagros otra vez.' },
      ] },
      { id: 'limite', t: 'Cómo cierras', ops: [
        { id: 'l1', t: 'No puedo prometerte que cambie la meta esta semana, pero no vas a estar sola con esto. Y no tienes que poner en una evaluación algo que no es cierto.', ok: true, por: 'Honesta con lo que puedes y firme con lo que no debe hacer.' },
        { id: 'l2', t: 'Te prometo que esto se arregla esta semana.', ok: false, por: 'Prometes algo que no controlas.' },
      ] },
    ],
    res: sel => {
      const v = Object.values(sel), buenas = ['e1', 'c1', 'l1'].filter(x => v.includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      const fl = q === 'riesgosa' ? [] : ['milagros_acompanada'];
      if (v.includes('c1')) fl.push('presion_reportada_tarde');
      return {
        q, fx: { etica: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 3 : 0 },
        flags: fl, cartera: { metas: v.includes('c1') ? 'Llevado a Lorena y Riesgos, sin nombres' : 'Sin un camino claro' },
        envia: v.includes('c1') ? ['lorena', 'Lorena, ¿tienes cinco minutos hoy? Hay algo de El Porvenir que tiene que llegar a Riesgos, sin nombres.'] : undefined,
        out: q === 'buena' ? 'Milagros responde con un audio corto: «Gracias, señorita. No voy a redondear nada». Luego escribe: «Igual voy a seguir pidiendo el cuaderno, pero con más cariño».' : q === 'aceptable' ? 'Milagros responde: «Ya, gracias». No sabes si se quedó más tranquila o más preocupada.' : 'Milagros deja tu mensaje en visto.',
        pro: { ok: 'Escuchar, proteger y dar un camino es lo que una persona necesita cuando denuncia una presión indebida.', risk: 'Prometer lo que no controlas, o actuar sin cuidar a quien habló, rompe la confianza.', info: 'No necesitas ser de Relaciones Laborales para saber a quién derivar: tu trabajo es no dejarlo pasar.' },
        kusi: [q === 'buena' ? 'animo' : 'pensando', q === 'buena' ? 'Milagros no está sola. Bien.' : '¿Qué necesita ella de verdad?'],
      };
    },
    rules: [[POL, 'Chimú tiene un canal de ética que recibe reportes confidenciales.'], [BP, 'Ante una presión indebida contada en confianza: escucha, protege a la persona y lleva el problema a quien puede resolverlo.']],
    mirada: {
      ve: 'La capacitación toca temas que no son de capacitación. Una analista de desarrollo no resuelve la presión de una meta, pero tampoco puede mirar a otro lado: escucha, protege y deriva. Lo que haga hoy decide si Milagros se queda en Chimú.',
      visual: { tipo: 'mensaje', titulo: 'Una respuesta que acompaña', txt: 'Gracias por contarme; queda entre nosotras. Lo llevo a Lorena y a Riesgos sin tu nombre, y existe el canal de ética. No puedo prometerte que cambie la meta esta semana, pero no vas a estar sola.' },
    },
  },
  {
    id: 'u5', t: '15:00', ch: 'documento', who: null, titulo: 'La propuesta de Víctor', banner: 'assets/foto/revisa.webp', lugar: 'Tu escritorio', show: ['cumplimiento', 'calidad', 'personas'],
    body: () => `<p>Abres el adjunto de Víctor: «Réplica del taller · 40 agencias». Le gustó tanto el viernes que lo quiere en todas partes, ya. Lo escribió él mismo, entre dos reuniones.</p><p>Tiene buenas intenciones y <mark class="clave">algunas ideas que no pueden salir así</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que la ley no permite o lo que conviene cambiar.',
    doc: { t: 'Réplica del taller «Evaluar y cobrar» · 40 agencias', sub: 'Propuesta de Víctor Alvarado · Gerencia regional' },
    lines: [
      { id: 'noche', t: 'Curso virtual obligatorio de 7 a 10 p. m., después de la jornada, para no perder horas de calle.', bad: LEY, why: 'Tras una jornada completa, esas tres horas son sobretiempo: el D.S. 007-2002-TR (art. 9) dice que es voluntario, y si se trabaja se paga o se compensa (art. 10).' },
      { id: 'bono', t: 'Quien no apruebe la prueba pierde el bono de ese mes.', bad: BP, why: 'Convierte la prueba en un castigo: la gente aprende a pasar la prueba, no a cobrar mejor.' },
      { id: 'todos', t: 'El mismo taller para asesores, cajeros y administradores.', bad: BP, why: 'El diagnóstico se hizo con asesores nuevos. Cajeros y administradores tienen otras necesidades.' },
      { id: 'zoom', t: 'Sandra lo dicta por Zoom para las 40 agencias, en su tiempo libre.', bad: BP, why: 'Sin horas protegidas, la facilitadora interna se quema. Y su tiempo libre no es de la empresa.' },
      { id: 'prueba', t: 'Usar la misma prueba de entrada y salida del piloto.' },
      { id: 'cinco', t: 'Empezar por las cinco agencias con más asesores nuevos.' },
      { id: 'grab', t: 'Grabar la práctica de Kevin para usarla como ejemplo.', duda: 'Puede servir, pero solo si Kevin está de acuerdo y sabe para qué se usará.' },
    ],
    res: ({ missLey, hitsBp }) => ({
      out: missLey ? `Le devuelves ${hitsBp} observaciones, pero el horario nocturno pasa. Tres horas obligatorias después de la jornada no son un detalle.` : 'Le devuelves la propuesta con una contrapropuesta: cinco agencias primero, en horario, con la misma prueba y con facilitadores que tengan horas protegidas.',
      flags: [missLey ? 'replica_nocturna' : 'replica_frenada'],
      cartera: { replica: missLey ? 'Curso nocturno en camino' : 'Por etapas: 5 agencias, en horario' },
      pro: { ok: 'Escalar por etapas y en horario cuida a las personas y te deja aprender de cada etapa.', risk: 'Un curso obligatorio fuera de la jornada es sobretiempo, aunque se llame «capacitación».', info: 'Antes de escalar, espera los datos del acompañamiento del miércoles.' },
      kusi: missLey ? ['preocupado', '¿Otra vez de noche…?'] : ['celebra', '¡Crecer sí, pero en horario y por etapas!'],
    }),
    rules: [[LEY, 'Constitución, art. 25: jornada ordinaria máxima de ocho horas diarias o cuarenta y ocho semanales.'], [LEY, 'D.S. 007-2002-TR, art. 9: el sobretiempo es voluntario; art. 10: se paga con recargo o se compensa con descanso.']],
    mirada: {
      ve: 'El éxito de un piloto trae una tentación: replicarlo en todas partes, rápido y barato. Pero lo que funcionó con 20 asesores, en horario y con Sandra descansada, no funciona igual con 600 de noche y por Zoom.',
      visual: { tipo: 'cambio', titulo: 'De la propuesta de Víctor a la contrapropuesta', pares: [['40 agencias de golpe', '5 agencias primero'], ['De 7 a 10 p. m.', 'Dentro de la jornada'], ['Sin bono si no apruebas', 'Refuerzo para quien no apruebe'], ['Sandra en su tiempo libre', 'Facilitadores con horas protegidas']] },
      normas: [{ ley: 'TUO de la Ley de Jornada de Trabajo (D.S. 007-2002-TR), arts. 9 y 10', dice: 'El trabajo en sobretiempo es voluntario, tanto en su otorgamiento como en su prestación. Se paga con un recargo o se compensa con descanso.', practica: 'Un curso obligatorio después de una jornada completa es tiempo de trabajo: no se puede imponer como si fuera tiempo libre.' }],
    },
  },
  {
    id: 'u6', t: '18:20', ch: 'correo', who: null, titulo: 'El correo de las 6:15', banner: 'assets/esc/alarma.webp', show: ['cumplimiento', 'tiempo', 'personas'],
    mail: { from: 'Comité de SST · Chimú', to: 'Lorena Villanueva; Analista de Capacitación y Desarrollo', asunto: 'URGENTE · Requerimiento de SUNAFIL para mañana' },
    body: (n, F) => `<p>Ya tenías la mochila puesta. El correo dice que mañana hay que presentar a SUNAFIL el registro de capacitaciones de SST del año.${F.has('plan_leido') ? ' Recuerdas tu primer día: el plan decía «una charla anual en el aniversario».' : ''}</p><p>La última combi directa a tu casa pasa a las 7:10. <mark class="clave">¿Qué haces antes de irte?</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Quedarte media hora: pedirle a Lorena acceso a la carpeta de SST y revisar qué registros existen.',
        res: { q: null, fx: { cumplimiento: 3, tiempo: -2 }, flags: ['sunafil_preparada'],
          responde: 'Recibido. Esta noche reviso qué registros de capacitación en SST tenemos y mañana a primera hora le paso un resumen al comité.',
          out: 'La carpeta «SST 2026» tiene una sola lista de asistencia, de la charla del aniversario, firmada por 42 personas de 600. Tomas la combi de las 7:10 con un nudo en el estómago, pero sabes con qué empiezas mañana.', kusi: ['preocupado', 'Mejor saberlo hoy que en plena visita.'] } },
      { id: 'b', label: 'Responder que mañana a primera hora lo ves con el comité, e irte a descansar.',
        res: { q: null, fx: { personas: 2, tiempo: 1 },
          responde: 'Recibido. Mañana a primera hora lo vemos con el comité.',
          out: 'Llegas a casa a tiempo para cenar. Esa noche, el correo se te viene a la cabeza dos veces antes de dormir.', kusi: ['pensando', 'Descansar también cuenta… mañana será intenso.'] } },
    ],
    mirada: { ve: 'Las urgencias legales llegan sin aviso y casi siempre a última hora. Saber qué documentos existen antes de que te los pidan es la diferencia entre responder con calma y descubrir el problema delante de un inspector.' },
  },
];
