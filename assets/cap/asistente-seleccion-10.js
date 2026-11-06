// Asistente de Selección · Capítulo 10 · «Diez días» · Semana 2, viernes · Clínica del Misti, Arequipa.
// Final abierto: balance de las dos semanas, «¿te ves en este puesto?» y gancho para la Semana 3.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Ley 26772 y D.S. 002-98-TR: no discriminación en el acceso al empleo (capítulo 2).
// - Ley 29733: datos personales; los informes no llevan datos sensibles (capítulo 1).
// - Ley 29783, art. 49 d): exámenes médicos ocupacionales a cargo del empleador (capítulo 9).

export const CAP = {
  n: 10, titulo: 'Diez días', dia: 'Semana 2, viernes', foto: 'assets/foto2/celebra-brazos.webp', lugar: 'Clínica del Misti · Arequipa',
  inicio: '07:30', fin: '19:00', cierreHora: '18:45',
  apertura: 'Viernes. Diez días hábiles después de aquel café en Emergencia, hay 60 nombres en una lista. Hoy toca contar lo que pasó, escuchar a Sor Elena y mirar hacia el lunes, cuando entra el primer grupo.', boton: 'Subir por última vez esta semana',
  kusi: 'Mirar atrás también es trabajo. Y el lunes empieza otra historia. ¡Dale!',
  lead: 'Contaste las dos semanas con números honestos, escuchaste lo que Sor Elena vio, cerraste con las personas que te importaron y dejaste listo lo que viene.',
  reflexion: '¿Te ves en este puesto?',
  siguiente: { n: 11, titulo: 'El primer día', dia: 'Semana 3, lunes' },
};

export const CARTERA = [
  { id: 'tecnicas', p: '60 técnicas de enfermería', j: 'Milena · Selección', d: 0, e: 'Lista completa' },
  { id: 'informe', p: 'Informe de las dos semanas', j: 'Tú', d: 0, e: 'Para Linares y Sor Elena' },
  { id: 'lunes', p: 'Ingreso del primer grupo', j: 'Milena · RR.HH.', d: 0, e: 'Lunes, 25 personas' },
  { id: 'uci', p: 'Pedido nuevo', j: 'Linares', d: 0, e: 'Por llegar' },
];

export const FUTURO = {
  informe_honesto: ['Tu informe cuenta lo que funcionó y lo que no, sin datos sensibles.', 'Linares lo llevará a la junta.'],
  informe_maquillado: ['Tu informe dice que todo salió perfecto.', 'La semana 3 lo va a desmentir.'],
  lecciones: ['Dejaste tres lecciones escritas para la próxima convocatoria.', 'Las vas a necesitar antes de lo que crees.'],
  uci_preparada: ['Ante el pedido de la UCI, propusiste empezar por el perfil con la jefa de UCI.', 'El lunes empieza esa conversación.'],
  uci_apurada: ['Ante el pedido de la UCI, prometiste reusar el aviso del piso 4 tal cual.', 'La UCI no es el piso 4.'],
  me_veo: ['Te ves en este puesto.', 'La semana 3 te espera.'],
};

export const CHATS = {
  milena: { n: 'Milena Cáceres', sub: 'Analista de Selección', who: 'milena' },
  sor: { n: 'Sor Elena Paz', sub: 'Jefa de Enfermería', who: 'sor' },
  angel: { n: 'Ángel Mamani', sub: 'Ingresa el lunes', who: 'angel' },
  ruth: { n: 'Ruth Calderón', sub: 'Seleccionada', who: 'ruth' },
  linares: { n: 'Dr. Fernando Linares', sub: 'Gerente de Operaciones', c: '#8C5A3C' },
  so: { n: 'Mabel Zúñiga', sub: 'Salud Ocupacional', c: '#4A7FB5' },
};

export const WSP = [
  { chat: 'milena', t: '07:30', de: 'Milena', txt: 'Último día de la quincena 🥹 Hoy informe, Sor Elena a las 10 y queque en la tarde. Yo invito.' },
  { chat: 'angel', t: '08:15', de: 'Ángel', txt: 'Mañana sábado es mi examen médico. Estoy repasando signos vitales con mi hermana.', si: 'oferta_clara' },
  { chat: 'so', t: '12:40', de: 'Mabel', txt: 'Dos del grupo del lunes tienen resultado «pendiente de evaluación complementaria». Te aviso el lunes temprano si pueden entrar.' },
  { chat: 'ruth', t: '15:00', de: 'Ruth', txt: 'Mi jefa me exoneró de 15 días. Entro antes 🙂', si: 'preaviso_respetado' },
  { chat: 'linares', t: '16:20', de: 'Dr. Linares', txt: 'Buen trabajo. Ahora lo difícil. Lean su correo.' },
];

export const CORREOS = [
  { t: '07:45', de: 'Milena Cáceres', para: 'Asistente de Selección', asunto: 'Los números', html: '<p>Postulaciones: 412 en el portal + 214 del lunes. Preseleccionadas: 96. Evaluadas: 42. Entrevistadas: 64. Seleccionadas: 60, incluidas 3 de la reserva. Arma el informe con esto.</p><p>Milena</p>' },
  { t: '16:25', de: 'Dr. Fernando Linares', para: 'Selección', asunto: 'UCI', html: '<p>La junta aprobó ampliar la UCI. Necesitamos 12 técnicas con experiencia en cuidados críticos y 4 enfermeras para el mes que viene. El lunes a las 8 nos reunimos con la jefa de UCI. Y el lunes también entran las 25. Buen fin de semana.</p><p>F. Linares</p>' },
];

export const QUIZ = [
  { q: '¿Qué debe tener un informe de cierre de una convocatoria?', ops: ['Solo el número final', 'Números, lo que funcionó, lo que falló y lo pendiente', 'Las notas de cada entrevista', 'Fotos de las seleccionadas'], ok: 1, por: 'Un informe útil enseña para la próxima vez.' },
  { q: 'En un informe para la junta, ¿qué no va?', ops: ['Cuántas postulaciones hubo', 'Cuánto tardó cada etapa', 'Qué seleccionadas tienen hijos o enfermedades', 'Qué canal funcionó mejor'], ok: 2, por: 'Datos personales y sensibles no van en un informe de gestión (Ley 29733).' },
  { q: 'Llega un pedido de 12 técnicas para UCI. Lo primero es…', ops: ['Copiar el aviso del piso 4', 'Entender con la jefa de UCI qué exige el puesto', 'Llamar a la reserva del piso 4 sin mirar', 'Esperar'], ok: 1, por: 'Cada puesto tiene su perfil: se empieza por entender el pedido.' },
  { q: 'Dos personas del primer grupo tienen el examen médico pendiente. ¿Pueden entrar el lunes al piso?', ops: ['Sí, ya firmaron', 'No hasta que Salud Ocupacional confirme', 'Sí, si Linares lo autoriza', 'Sí, sin pacientes'], ok: 1, por: 'Sin examen de ingreso concluido no se empieza.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'j1', t: '08:00', ch: 'documento', who: null, titulo: 'El borrador del informe', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Oficina de Selección', show: ['calidad', 'cumplimiento', 'confianza'],
    body: () => `<p>El practicante te dejó un borrador del informe para Linares, «para ayudarte». Tiene buena intención y frases que salieron de algún lado.</p><p><mark class="clave">Marca lo que tiene que cambiar</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas que son falsas, sensibles o engañosas.',
    doc: { t: 'Informe de cierre · Selección piso 4', sub: 'Borrador para Gerencia de Operaciones' },
    lines: [
      { id: 'n', t: '626 postulaciones, 96 preseleccionadas, 64 entrevistadas, 60 seleccionadas en 10 días hábiles.' },
      { id: 'perf', t: 'El proceso fue 100 % exitoso, sin ningún problema.', bad: BP, why: 'No es verdad: hubo cupos de examen justos, ausencias, una lista casi publicada con DNI. Contarlo es lo útil.' },
      { id: 'edad', t: 'Las seleccionadas mayores de 45 rinden menos en la prueba de cálculo.', bad: LEY, why: 'Además de usar la edad como criterio, la prueba de cálculo se dejó de pesar porque no medía el trabajo.' },
      { id: 'salud', t: 'Anexo: lista de seleccionadas con observaciones de salud del examen médico.', bad: LEY, why: 'Los resultados del examen médico son datos sensibles: no van a un informe de gestión.' },
      { id: 'canal', t: 'Los referidos de técnicas actuales y las bolsas de institutos trajeron más candidatas finales que el portal.' },
      { id: 'ajuste', t: 'Se hicieron ajustes en la prueba para una postulante, sin costo y sin cambiar la exigencia.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : hitsBp ? 'buena' : 'aceptable',
      fx: { calidad: hitsBp ? 4 : 0, cumplimiento: missLey ? -5 : 4, confianza: hitsBp ? 3 : -1 },
      flags: [missLey || !hitsBp ? 'informe_maquillado' : 'informe_honesto'], cartera: { informe: missLey ? 'Informe con datos sensibles' : hitsBp ? 'Informe honesto y sin datos sensibles' : 'Informe sin datos sensibles, pero maquillado' },
      out: missLey ? 'Corriges frases, pero un dato sensible sigue en el anexo que irá a la junta.' : hitsBp ? 'Reescribes el informe: lo que funcionó, lo que no y por qué. Milena lo lee y dice: «Esto lo firmo».' : 'El informe queda limpio, aunque dice que todo salió perfecto.',
      pro: { ok: 'Contar lo que falló es lo que permite mejorar.', risk: 'Un informe maquillado hace que la próxima convocatoria repita los mismos errores.', info: 'Por cada problema, escribe qué harías distinto.' },
      kusi: missLey ? ['preocupado', 'Ese anexo no puede salir.'] : ['celebra', '¡Honesto y cuidadoso!'],
    }),
    rules: [[LEY, 'Ley 29733: los resultados médicos son datos sensibles.'], [LEY, 'Ley 26772: la edad no es criterio.']],
    mirada: { ve: 'Un informe de cierre es lo que queda cuando todos se olvidan de los detalles. Si dice «100 % exitoso», la próxima asistente no sabrá dónde tropezaste. Si dice la verdad, empieza un paso adelante.', visual: { tipo: 'embudo', titulo: 'Dos semanas en números', niveles: [['Postulaciones', 626], ['Preseleccionadas', 96], ['Entrevistadas', 64], ['Seleccionadas', 60]] } },
  },
  {
    id: 'j2', t: '10:00', ch: 'presencial', who: 'sor', titulo: 'Lo que vio Sor Elena', banner: 'assets/foto/mentora.webp', lugar: 'Estación de Enfermería, piso 3', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Sor Elena te recibe sentada, por primera vez en dos semanas. Tiene un café en la mano. ${F.has('sor_escuchada') ? '«La que pregunta», dice, y casi sonríe.' : '«Siéntate, hija.»'}</p><p><mark class="clave">Tienes tiempo para dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas.',
    opts: [
      { id: 'bien', label: '¿Qué hicimos bien?', info: '«Me trajeron gente que sabe avisar. Y no me hicieron perder el tiempo con quienes no tenían título. La señora Ofelia y la muchacha Yesenia: esas dos me van a sostener el piso.»' },
      { id: 'mal', label: '¿Qué tendríamos que hacer distinto la próxima vez?', info: '«Empezar antes. Diez días es muy poco para mirar bien. Y las preguntas de la entrevista: la del turno noche hay que mejorarla, todas dicen que sí.»' },
      { id: 'angel', label: '¿Qué piensa de Ángel?', info: '«Que es un muchacho con miedo y buena mano. El miedo se le pasa con una buena técnica al lado. Lo voy a cuidar.»' },
      { id: 'yo', label: '¿Qué vio en mí?', info: 'Se toma su tiempo. «Que preguntas antes de decidir. En salud, eso vale oro. No lo pierdas cuando te apuren.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 3, confianza: 3 }, rel: { sor: 1 }, flags: picks.includes('mal') ? ['lecciones'] : [],
      out: 'Sor Elena se levanta: empieza la visita médica. Antes de irse, te da un golpecito en el hombro. Es lo más parecido a un abrazo que le has visto.',
      kusi: ['feliz', 'Sor Elena confía en ti. ¡Qué divino!'],
    }),
    mirada: { ve: 'Quien dirige el trabajo es la mejor evaluadora del proceso de selección. Preguntarle qué se hizo mal es la forma más rápida de mejorar.' },
  },
  {
    id: 'j3', t: '12:00', ch: 'llamada', who: null, titulo: 'Tres llamadas antes del almuerzo', banner: 'assets/foto/llamada.webp', show: ['personas', 'cumplimiento', 'tiempo'],
    body: () => `<p>Antes del almuerzo, haces tres llamadas que te quedaron pendientes de la semana. En la ventana, el sol de mediodía blanquea el sillar de las casonas.</p><p><mark class="clave">Decide cómo cierras cada una</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Mabel · Salud Ocupacional', 'Habla bajito', '«Dos del grupo del lunes tienen evaluación complementaria pendiente. No te puedo decir qué es, pero el lunes a las 7 te confirmo si pueden entrar.»'],
      ['Jhon Ccori', 'Contesta desde una combi en Juliaca', '«¿Entonces entro el miércoles? Ya conseguí un cuarto en Cerro Colorado. Mi esposa se queda con los chicos hasta fin de mes.»'],
      ['Yesenia Apaza', 'Te escribe por SMS', '«¿En la inducción alguien podría hablar de frente cuando expliquen los protocolos? Así no me pierdo nada.»'],
    ],
    prompt: '¿Cómo cierras las tres?',
    choices: [
      { id: 'a', label: 'A Mabel, que no te diga qué es y que confirme el lunes a las 7; a Jhon, su fecha y grupo por escrito; a Yesenia, que lo coordinas con quien dicta la inducción.',
        res: { q: 'buena', fx: { cumplimiento: 4, personas: 4 },
          out: 'Mabel agradece que no le preguntes más. Jhon confirma su cuarto. Yesenia manda un pulgar y un «gracias por acordarte».',
          pro: { ok: 'Respetas la reserva médica, das certeza y extiendes el ajuste al primer día.', info: 'Avisa a Milena de las dos pendientes: puede haber que mover a alguien del miércoles.' },
          kusi: ['celebra', '¡Todo amarrado para el lunes!'] } },
      { id: 'b', label: 'A Mabel, preguntarle qué tienen las dos «para saber cómo organizarte»; a los demás, que el lunes se ve.',
        res: { q: 'riesgosa', fx: { cumplimiento: -5, personas: -2 },
          out: 'Mabel se pone seria: «Eso no te lo puedo decir». Jhon y Yesenia se quedan sin respuesta todo el fin de semana.',
          pro: { ok: 'Quieres organizarte.', risk: 'El detalle médico no es tuyo; lo tuyo es saber si pueden empezar o no.' },
          kusi: ['preocupado', 'Eso es reservado.'] } },
    ],
    rules: [[LEY, 'Ley 29733: el detalle del examen médico es dato sensible; Selección solo necesita saber si la persona está apta.']],
    mirada: { ve: 'Selección necesita saber «apta o no apta», no el diagnóstico. Y las personas que entran necesitan certeza: fecha, grupo, y que lo que pidieron en la selección siga valiendo en el primer día.' },
  },
  {
    id: 'j4', t: '14:30', ch: 'documento', who: null, titulo: 'Tres lecciones', banner: 'assets/esc/idea.webp', lugar: 'Oficina de Selección', show: ['calidad', 'confianza'],
    body: (n, F) => `<p>Milena te pide tres lecciones para la carpeta de la próxima convocatoria. ${F.has('lecciones') ? 'Tienes fresco lo que dijo Sor Elena.' : ''} Solo tres: «Si son diez, nadie las lee».</p><p><mark class="clave">Elige las tres que más servirían</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige tres lecciones.', boton: 'Guardar en la carpeta', resumen: 'Tus lecciones',
    cols: ['Lección', 'De dónde sale'],
    rows: [
      { id: 'aviso', cells: ['Decir el turno noche de frente en el aviso', 'Menos renuncias en el primer mes'] },
      { id: 'filtros', cells: ['Revisar los filtros automáticos y las pruebas antes de cada convocatoria', 'Lo que nadie había leído en años'] },
      { id: 'tiempo', cells: ['Pedir más de diez días para mirar bien', 'Lo que dijo Sor Elena'] },
      { id: 'notas', cells: ['Notas de entrevista con hechos, en la carpeta de Selección', 'Las fotos en el celular de Rosario'] },
      { id: 'rapido', cells: ['Saltarse pasos si gerencia aprieta', 'Para llegar a la meta'] },
      { id: 'jovenes', cells: ['Preferir postulantes jóvenes para las noches', 'Un comentario del grupo'] },
    ],
    score: { aviso: 3, filtros: 3, tiempo: 2, notas: 3, rapido: -4, jovenes: -5 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 0, etica: picks.includes('jovenes') ? -5 : 1 }, flags: q === 'riesgosa' ? [] : ['lecciones'],
        cartera: { informe: q === 'riesgosa' ? 'Lecciones que repiten errores' : 'Informe con tres lecciones' },
        out: q === 'buena' ? 'Milena imprime tus tres lecciones y las pone en la primera página de la carpeta. «Esto vale más que el informe entero.»' : 'Las lecciones sirven a medias: alguna repite justo lo que costó corregir.',
        pro: { ok: 'Lecciones concretas, que salen de lo que pasó.', info: 'Una lección útil empieza con un verbo: «revisar», «decir», «pedir».' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Lecciones que se usan!' : 'Esa lección no ayuda.'],
      };
    },
    mirada: { ve: 'Lo que aprendiste en dos semanas se pierde si no se escribe. Tres lecciones bien elegidas cambian la próxima convocatoria; diez, nadie las lee.' },
  },
  {
    id: 'j5', t: '16:30', ch: 'correo', who: null, titulo: 'La UCI', banner: 'assets/3d/scenes/hospital.webp', show: ['calidad', 'tiempo', 'confianza'],
    mail: { from: 'Dr. Fernando Linares', to: 'Selección', asunto: 'UCI' },
    body: () => `<p>La junta aprobó ampliar la UCI: <mark class="clave">12 técnicas con experiencia en cuidados críticos y 4 enfermeras</mark>, para el mes que viene. Reunión el lunes a las 8 con la jefa de UCI. Y el lunes también entran las 25.</p><p>Milena, a tu lado, suelta una risa cansada: «Bienvenida a Selección».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder que el lunes llevas preguntas para la jefa de UCI sobre el perfil, y que el aviso se escribirá después de esa reunión, no antes.',
        res: { q: 'buena', fx: { calidad: 4, confianza: 3, tiempo: -1 }, flags: ['uci_preparada'],
          responde: 'Doctor, el lunes a las 8 llevo preguntas para la jefa de UCI sobre lo que exige el puesto. El aviso lo escribimos después de esa reunión: la UCI no es el piso 4.',
          out: 'Linares responde: «De acuerdo. Pero rápido». Milena te pasa el plumón para que empieces la lista de preguntas.',
          pro: { ok: 'Empiezas por entender el pedido, como el primer día.', risk: 'Habrá presión por correr.', info: 'Las enfermeras tienen colegiatura en el Colegio de Enfermeros: será otra verificación.' },
          kusi: ['animo', 'Como el lunes del café: primero entender.'] } },
      { id: 'b', label: 'Responder que el lunes mismo publicas el aviso del piso 4 cambiando «hospitalización» por «UCI».',
        res: { q: 'aceptable', fx: { tiempo: 3, calidad: -3 }, flags: ['uci_apurada'],
          responde: 'Doctor, el lunes publicamos con el aviso del piso 4 adaptado.',
          out: 'Linares responde con un pulgar. Milena te mira de reojo: «¿Sabes qué hace una técnica en UCI que no hace en hospitalización?».',
          pro: { ok: 'Rápido.', risk: 'Un aviso copiado atrae al público equivocado, como el año pasado.' },
          kusi: ['pensando', '¿UCI es igual al piso 4?'] } },
    ],
    mirada: { ve: 'Un pedido nuevo siempre llega cuando todavía no terminaste el anterior. Lo que aprendiste en diez días se prueba aquí: empezar entendiendo el puesto, no copiando lo que funcionó para otro.' },
  },
  {
    id: 'j6', t: '18:20', ch: 'presencial', who: 'milena', titulo: '¿Te ves en este puesto?', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Cafetería de la clínica, junto al ventanal', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Hay queque de naranja, un termo de café y tres supervisoras que bajaron cinco minutos. ${F.has('rosario_aliada') ? 'La Lic. Rosario levanta su taza hacia ti.' : ''} Afuera, el Misti se pone naranja y luego morado.</p><p>${F.has('informe_honesto') ? 'Tu informe ya está en la bandeja de Linares.' : 'El informe salió.'} ${F.has('oferta_clara') ? 'Ángel te mandó una foto con su uniforme nuevo.' : ''} Milena te pregunta, sin rodeos: <mark class="clave">«¿Te ves en este puesto?»</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«Sí. Me gusta que lo que hago se note en el piso, aunque nadie lo vea.»',
        res: { q: null, fx: { confianza: 3, personas: 2 }, rel: { milena: 1 }, flags: ['me_veo'],
          out: 'Milena brinda con su taza. «Entonces el lunes a las 7, en la puerta de Emergencia. Entran las 25, dos tienen el examen pendiente y a las 8 nos espera la UCI.»',
          kusi: ['celebra', '¡Dos semanas y ya eres de Selección!'] } },
      { id: 'b', label: '«Todavía no sé. Me gusta, pero cansa mucho.»',
        res: { q: null, fx: { confianza: 2 }, rel: { milena: 1 },
          out: 'Milena asiente. «Es la respuesta más honesta. A mí me tomó un año saberlo. El lunes a las 7, ¿ya? Entran las 25 y la UCI no espera.»',
          kusi: ['animo', 'No saber todavía también vale.'] } },
      { id: 'c', label: '«Me veo más en la parte de verificar y analizar que en la de coordinar.»',
        res: { q: null, fx: { confianza: 2, calidad: 1 }, rel: { milena: 1 },
          out: '«Entonces vas a disfrutar la UCI: hay colegiaturas, certificaciones de cuidados críticos y referencias de clínicas de Lima. El lunes, a las 7.»',
          kusi: ['curioso', 'Ya sabes qué te gusta más.'] } },
    ],
    mirada: {
      ve: 'En diez días hábiles escribiste un aviso honesto, limpiaste filtros y pruebas, verificaste títulos, coordinaste a evaluadoras sin tiempo, hiciste un ajuste, tomaste notas con hechos, cruzaste referencias, dijiste que no a cientos y dejaste listo el ingreso. La historia no termina aquí: el lunes entran las primeras 25, dos tienen un examen pendiente, y la UCI ya está pidiendo gente.',
      visual: { tipo: 'linea', titulo: 'Tus dos semanas', hitos: [['S1 lunes', 'Sesenta técnicas'], ['S1 martes', 'El aviso'], ['S1 miércoles', 'El título'], ['S1 jueves', 'La agenda'], ['S1 viernes', 'La prueba'], ['S2 lunes', 'La entrevista'], ['S2 martes', 'Las referencias'], ['S2 miércoles', 'El rechazo'], ['S2 jueves', 'Los papeles'], ['S2 viernes', 'Diez días'], ['S3 lunes', 'El primer día…']] },
    },
  },
];
