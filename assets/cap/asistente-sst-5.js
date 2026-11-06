// Asistente de SST · Capítulo 5 · «El accidente» · Semana 2, jueves.
// Hilo del mes: el vaciado del piso 12 de un edificio en obra en Chiclayo.
// Normas citadas:
// - D.S. 005-2012-TR, art. 110, modificado por el D.S. 006-2022-TR: el empleador notifica los accidentes de trabajo mortales y
//   los incidentes peligrosos dentro de las 24 horas; el centro médico asistencial notifica los accidentes de trabajo hasta el
//   último día hábil del mes siguiente de ocurridos.
//   https://www.congreso.gob.pe/Docs/DGP/DIDP/files/ds_006-2022-tr.pdf
//   https://busquedas.elperuano.pe/dispositivo/NL/2061692-1
// - D.S. 005-2012-TR: el registro de accidentes de trabajo es uno de los registros obligatorios del sistema de gestión de SST
//   (citado desde el capítulo 1).
// - Ley 29783: principio de prevención y EPP a cargo del empleador (capítulo 1); art. 63, interrupción ante peligro inminente (capítulo 4).
// - Norma G.050: herramientas con sus protecciones; EPI en buen estado (capítulo 3).
//   https://buenaventura.com/wp-content/uploads/2024/10/NORMA-G.050-Seguridad-durante-la-construccion-DS-N°-010-2009.pdf

export const CAP = {
  n: 5, titulo: 'El accidente', dia: 'Semana 1, viernes', foto: 'assets/esc/alarma.webp',
  lugar: 'Constructora Lambayeque · Obra en Chiclayo',
  inicio: '07:00', fin: '18:45', cierreHora: '18:25',
  apertura: 'Viernes. A las diez y veinte, un grito en el piso 3 corta el ruido de la obra.', boton: 'Empezar el día',
  kusi: 'Hoy toca lo más difícil: responder rápido y decir la verdad. ¡Respira, que tú puedes!',
  lead: 'Revisaste la amoladora temprano, atendiste el accidente de Jhonatan, enfrentaste la presión para no registrarlo, acompañaste a su familia, corregiste el registro y preparaste una alerta sin culpables.',
  reflexion: '¿Qué le debe la empresa a alguien que se lastima trabajando para ella?',
  siguiente: { n: 6, titulo: 'La investigación', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'accidente', p: 'Accidente de Jhonatan', j: 'Ingrid · SSOMA', d: 0, e: 'Hoy, 10:20' },
  { id: 'registro', p: 'Registro de accidentes', j: 'Ingrid · SSOMA', d: 0, e: 'Sin registros este año' },
  { id: 'capacitacion', p: 'Capacitación en altura', j: 'Ingrid · SSOMA', d: 0, e: 'Hoy a las 7:00' },
  { id: 'piso12', p: 'Encofrado del piso 12', j: 'Don Segundo · Obra', d: 0, e: 'Día 2 de 4' },
  { id: 'comite', p: 'Comité de SST', j: 'Marleny · Trabajadores', d: 0, e: 'Fecha tentativa: martes de la semana 2' },
];

export const FUTURO = {
  accidente_registrado: ['Registraste el corte de Jhonatan como accidente de trabajo y lo atendieron con el seguro de la obra.', 'En el capítulo 6 investigarás sobre datos reales.'],
  accidente_oculto: ['Aceptaste que el corte no quedara como accidente de trabajo.', 'La investigación del capítulo 6 empezará con un papel que no dice la verdad.'],
  escena_preservada: ['Guardaste la amoladora y el disco tal como quedaron.', 'Serán la evidencia clave en el capítulo 6.'],
  guarda_retirada: ['Sabes que alguien sacó la guarda de la amoladora y puso un disco más grande.', 'Capítulo 6: ¿quién lo hizo y por qué?'],
  registro_corregido: ['Corregiste el registro: ya no dice «descuido del trabajador».', 'Renzo y Segundo esperan otra cosa de la investigación. Capítulo 6.'],
  registro_culpa: ['El registro quedó con «descuido del trabajador» como causa.', 'Tendrás que desmontarlo en el capítulo 6.'],
  alerta_sin_culpa: ['Preparaste una alerta de seguridad que explica qué falló sin señalar a Jhonatan.', 'El lunes la obra entera hablará de la guarda, no de él.'],
  jhonatan_tranquilo: ['Le escribiste a Jhonatan que su trabajo no está en riesgo y que querías escuchar su versión.', 'Te la contará en el capítulo 6.'],
};

export const CHATS = {
  grupo: { n: 'SSOMA Obra Chiclayo', sub: 'Ingrid y tú', c: '#F2A900' },
  ingrid: { n: 'Ing. Ingrid Delgado', sub: 'Supervisora SSOMA', who: 'ingrid' },
  segundo: { n: 'Don Segundo Vílchez', sub: 'Maestro de obra', who: 'segundo' },
  jhonatan: { n: 'Jhonatan Ñique', sub: 'Ayudante de obra', who: 'jhonatan' },
  marleny: { n: 'Marleny Flores', sub: 'Representante en el comité', who: 'marleny' },
  renzo: { n: 'Ing. Renzo Cáceres', sub: 'Residente de obra', c: '#3B6EA8' },
};

export const WSP = [
  { chat: 'grupo', t: '06:45', de: 'Ingrid', txt: 'Capacitación de altura a las 7:00 en el comedor. Que vengan Wilson y Brayan 💪', si: 'dos_reasignados' },
  { chat: 'grupo', t: '06:45', de: 'Ingrid', txt: 'Capacitación de altura a las 7:00 en el comedor, para toda la subcontrata.', no: 'dos_reasignados' },
  { chat: 'segundo', t: '09:40', de: 'Don Segundo', txt: 'Ingeniera, necesito las platinas para el mediodía. Que el muchacho apure.' },
  { chat: 'renzo', t: '10:45', de: 'Renzo', txt: 'Me acaban de contar. ¿Es grave? Antes de registrar nada, hablemos.' },
  { chat: 'marleny', t: '13:15', de: 'Marleny', txt: 'Ingeniera, la gente está preguntando por Jhonatan. ¿Qué les digo?' },
  { chat: 'ingrid', t: '15:50', de: 'Ingrid', txt: 'Gracias por no dejar que lo maquillen. Esto es lo que diferencia a una prevencionista.', si: 'accidente_registrado' },
];

export const CORREOS = [
  { t: '12:05', de: 'Ing. Renzo Cáceres', para: 'SSOMA Obra Chiclayo', asunto: 'Evento piso 3', html: '<p>Equipo: el evento de hoy en el piso 3 fue un corte menor por un descuido personal. Les pido manejarlo con discreción: el cliente está muy atento a los indicadores antes del vaciado del 12.</p><p>Renzo Cáceres · Residente de obra</p>' },
];

export const QUIZ = [
  { q: 'Ante un trabajador herido con una herramienta eléctrica, ¿qué se hace primero?', ops: ['Buscar al culpable', 'Asegurar la zona: apagar y desconectar la herramienta', 'Tomar fotos para el informe', 'Llamar al cliente'], ok: 1, por: 'Antes de atender, la escena debe ser segura para quien ayuda y para el herido.' },
  { q: 'En un accidente de trabajo no mortal, ¿quién lo notifica al Ministerio de Trabajo?', ops: ['Nadie', 'El centro médico asistencial que atiende al trabajador', 'El propio trabajador', 'El cliente de la obra'], ok: 1, por: 'Según el art. 110 del D.S. 005-2012-TR, modificado en 2022, el centro médico notifica los accidentes de trabajo; el empleador notifica en 24 horas los mortales y los incidentes peligrosos.' },
  { q: '¿Qué plazo tiene el empleador para notificar un accidente mortal o un incidente peligroso?', ops: ['24 horas', 'Un mes', 'Fin de año', 'No hay plazo'], ok: 0, por: 'El art. 110 del reglamento, modificado por el D.S. 006-2022-TR, fija un plazo máximo de 24 horas.' },
  { q: '¿Por qué es un problema escribir «descuido del trabajador» como causa?', ops: ['Porque es muy largo', 'Porque cierra la investigación antes de buscar qué falló en el sistema', 'Porque no rima', 'No es un problema'], ok: 1, por: 'El «descuido» describe un acto, no explica por qué ocurrió ni qué condiciones lo permitieron.' },
  { q: 'Después de un accidente, la herramienta y el lugar…', ops: ['Se limpian de inmediato', 'Se preservan tal como quedaron para la investigación', 'Se regalan', 'Se usan otra vez para terminar la tarea'], ok: 1, por: 'La evidencia del estado de la herramienta y del lugar es clave para encontrar las causas reales.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '07:15', ch: 'presencial', who: 'jhonatan', titulo: 'Piso 3, temprano', banner: 'assets/foto/plano-equipo.webp', lugar: 'Piso 3', show: ['calidad', 'personas', 'tiempo'],
    body: (n, F) => `<p>${F.has('amoladora_aviso') ? 'Subrayaste dos veces en tu libreta: «Viernes, piso 3, Jhonatan, amoladora». ' : ''}Antes de ir a la capacitación de altura pasas por el piso 3. Jhonatan corta platinas sobre un caballete, con lentes, careta y guantes. A su lado, una pila de platinas marcadas con tiza.${F.has('tarea_sigue') ? ' Esta vez sí tiene su equipo completo, aunque todavía le falta práctica.' : ''}</p><p>«Don Segundo quiere sesenta para el mediodía, ingeniera.» Sesenta platinas en cinco horas. <mark class="clave">Tienes diez minutos antes de que empiece la capacitación</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Revisar la amoladora con él: guarda puesta, disco de corte de 4½ pulgadas como dice la herramienta, y anotarlo con la hora en tu libreta.',
        res: { q: null, fx: { calidad: 3, personas: 2, tiempo: -1 }, flags: ['revisaste_amoladora'], cartera: { accidente: '07:15: amoladora con guarda y disco correcto' },
          out: 'Todo está bien. Anotas: «7:15 · amoladora con guarda, disco de 4½”, EPP completo». Jhonatan te muestra cómo apoya la platina para que no vibre. Bajas tranquila a la capacitación.', kusi: ['feliz', 'Lo que anotaste a las 7:15 valdrá mucho más tarde.'] } },
      { id: 'b', label: 'Saludarlo, ver que tiene su EPP y bajar rápido: la capacitación no puede empezar tarde.',
        res: { q: null, fx: { tiempo: 2, calidad: 0 }, cartera: { accidente: '07:15: EPP visto, herramienta no revisada' },
          out: 'Jhonatan te saluda con la mano enguantada. No miras la amoladora: se ve normal desde lejos. Bajas al comedor justo a la hora.', kusi: ['pensando', 'Lo viste por fuera… ¿y la herramienta?'] } },
    ],
    rules: [[BP, 'Una inspección anotada con hora sirve después para saber qué cambió.']],
    mirada: { ve: 'La prevención diaria es repetitiva: pasar, mirar, anotar. Muchas veces no pasa nada. Pero esas notas, con hora y detalle, son las que permiten entender qué cambió cuando algo sí pasa.' },
  },
  {
    id: 'e2', t: '10:20', ch: 'presencial', who: null, titulo: 'El grito', banner: 'assets/esc/alarma.webp', lugar: 'Piso 3', show: ['personas', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Un grito corta la obra. Subes corriendo las escaleras del piso 3. Jhonatan está sentado en el suelo, apretándose la mano izquierda contra el pecho, pálido. ${F.has('tarea_sigue') ? 'No tiene guantes: se los quitó para cortar más rápido. El corte en la palma es profundo.' : 'El guante está rasgado y hay sangre en la palma.'} La amoladora sigue en el piso, todavía girando, enchufada.</p><p>${F.has('teodoro_aliado') ? 'Teodoro, que es brigadista de primeros auxilios, ya viene con el botiquín. ' : ''}Tres obreros miran sin saber qué hacer. <mark class="clave">Todos esperan que tú digas qué sigue</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena lo que haces en los primeros minutos.', boton: 'Actuar',
    items: [
      { id: 'zona', t: 'Desenchufar la amoladora y alejar a los curiosos', por: 'La escena tiene que ser segura antes de atender.' },
      { id: 'auxilio', t: 'Presión directa en la herida con gasa limpia y la mano en alto', por: 'Controlar el sangrado es lo urgente.' },
      { id: 'brigada', t: 'Llamar al tópico y pedir la camioneta para el traslado', por: 'Un corte profundo en la mano necesita atención médica.' },
      { id: 'traslado', t: 'Trasladarlo a la clínica con alguien que lo acompañe', por: 'Que no vaya solo ni en mototaxi.' },
      { id: 'escena', t: 'Dejar la amoladora y el disco tal como quedaron, sin limpiar ni guardar', por: 'Es la evidencia de lo que pasó.' },
      { id: 'aviso', t: 'Avisar a Ingrid y al residente', por: 'Con los hechos, sin conclusiones todavía.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 3 : 0, tiempo: -2 }, rel: { jhonatan: q === 'riesgosa' ? 0 : 1 },
        flags: q === 'riesgosa' ? [] : q === 'buena' ? ['escena_preservada', 'guarda_retirada'] : ['escena_preservada'], cartera: { accidente: q === 'riesgosa' ? 'Atendido; escena alterada' : 'Atendido en 4 minutos; escena preservada' },
        out: q === 'buena' ? 'En cuatro minutos el sangrado está controlado y la camioneta en marcha. Antes de bajar, ves la amoladora en el piso: no tiene guarda y el disco es más grande que el de la mañana. No tocas nada. Le pides a Teodoro que nadie se acerque.' : q === 'aceptable' ? 'Jhonatan va camino a la clínica. Cuando vuelves al piso 3, alguien ya recogió la amoladora y la dejó en el almacén.' : 'En el apuro, un obrero levanta la amoladora para apagarla y casi se corta él también.',
        pro: { ok: 'Escena segura, sangrado controlado, traslado y evidencia preservada: en ese orden.', risk: 'Si la herramienta se limpia o se guarda, se pierde la pista de lo que falló.', info: 'Anota la hora exacta de cada paso: la necesitarás para el registro.' },
        kusi: [q === 'buena' ? 'animo' : 'preocupado', q === 'buena' ? 'Lo hiciste con calma. Así se responde.' : 'Primero la escena segura, luego todo lo demás.'],
      };
    },
    rules: [[BP, 'Ante un accidente: asegurar la zona, atender, trasladar, preservar la escena y avisar.']],
    mirada: {
      ve: 'Los primeros minutos después de un accidente definen dos cosas: cómo queda la persona y si después se podrá saber qué pasó. Una prevencionista no improvisa: sigue un orden aprendido.',
      visual: { tipo: 'linea', titulo: 'Los primeros minutos', hitos: [['10:20', 'Desenchufar y despejar'], ['10:21', 'Presión y mano en alto'], ['10:23', 'Camioneta en camino'], ['10:24', 'Escena intacta'], ['10:26', 'Aviso a Ingrid y Renzo']] },
    },
  },
  {
    id: 'e3', t: '10:55', ch: 'presencial', who: null, titulo: '«Solo fue un corte»', banner: 'assets/foto2/tension.webp', lugar: 'Oficina de obra', show: ['etica', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Renzo cierra la puerta de la oficina. Don Segundo está de pie, con los brazos cruzados y la mirada en el piso.</p><p>Renzo: «Escúchame. El cliente cuenta los accidentes antes del vaciado. Si registramos esto, el lunes tenemos auditoría y quizá nos paran. Que lo atiendan como particular, nosotros pagamos todo y le damos sus días. <mark class="clave">Que quede como primeros auxilios</mark>. Nadie sale perjudicado».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Registrarlo como accidente de trabajo y que lo atiendan con el seguro de la obra en la clínica afiliada. Decirle a Renzo que puedes ayudarle a explicar al cliente el plan de acción.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 6, confianza: -1 }, flags: ['accidente_registrado'], cartera: { accidente: 'Registrado como accidente de trabajo; atención por el seguro', registro: 'Primer registro de accidente del año' },
          out: 'Renzo golpea el escritorio con la palma, sin fuerza. «Tú no tienes que explicarle nada al cliente, yo sí.» Don Segundo, todavía mirando el piso, dice bajito: «La ingeniera tiene razón». Renzo se queda callado y sale.',
          pro: { ok: 'Jhonatan queda protegido por su seguro y el registro dice la verdad.', risk: 'Renzo se siente traicionado justo antes del vaciado.', info: 'Si se oculta un accidente y luego hay complicaciones, el trabajador puede quedar sin cobertura.' },
          kusi: ['animo', 'Decir la verdad hoy protege a Jhonatan mañana.'] } },
      { id: 'b', label: 'Aceptar: la empresa paga todo, Jhonatan no pierde nada y la obra no se para.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -6, confianza: 2 }, flags: ['accidente_oculto'], cartera: { accidente: 'Atendido como particular · sin registro' },
          out: 'Renzo te da la mano: «Gracias por entender». Jhonatan entra a la clínica como particular. En la ficha, donde dice «lugar del accidente», alguien escribe «domicilio».',
          pro: { ok: 'Evitas el conflicto y la empresa cubre los gastos de hoy.', risk: 'Si la herida se complica, Jhonatan no tendrá cobertura de su seguro. Y el accidente no existirá para nadie que quiera prevenir el próximo.' },
          kusi: ['triste', 'Desapareció del papel… pero no de su mano.'] } },
      { id: 'c', label: 'Decir que no te corresponde decidirlo y llamar a Ingrid para que lo resuelva ella.',
        res: { q: 'aceptable', fx: { etica: 2, confianza: -2 }, flags: ['accidente_registrado'], cartera: { accidente: 'Registrado tras la llamada de Ingrid' },
          out: 'Ingrid contesta en el segundo timbre y habla con Renzo en altavoz: «Se registra. Punto». Jhonatan va a la clínica afiliada. Renzo sale sin mirarte.',
          pro: { ok: 'El accidente se registra y Jhonatan queda cubierto.', risk: 'Tenías claro lo correcto y no lo dijiste tú. Renzo lo notó.' },
          kusi: ['pensando', 'Bien resuelto… con la voz de otra.'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR: el registro de accidentes de trabajo es obligatorio. El centro médico notifica los accidentes de trabajo al MTPE (art. 110, modificado por el D.S. 006-2022-TR).'], [BP, 'Ocultar un accidente deja al trabajador sin protección y a la empresa sin aprendizaje.']],
    mirada: {
      ve: 'La presión para ocultar un accidente leve es muy común en obras con plazos ajustados y clientes que miran los indicadores. Pero un accidente oculto no desaparece: se queda en la mano del trabajador y en las condiciones que lo causaron.',
      visual: { tipo: 'balanza', a: { t: '«Primeros auxilios»', items: ['Indicadores limpios', 'Sin auditoría el lunes', 'Renzo tranquilo'] }, b: { t: 'Accidente registrado', items: ['Jhonatan con su seguro', 'El papel dice la verdad', 'Se puede investigar'] } },
    },
  },
  {
    id: 'e4', t: '12:40', ch: 'llamada', who: null, titulo: 'Desde la clínica', banner: 'assets/foto/llamada.webp', lugar: 'Sala de espera de la clínica', show: ['personas', 'confianza'],
    body: (n, F) => `<p>La sala de espera huele a alcohol y el televisor pasa un noticiero sin volumen. ${F.has('accidente_oculto') ? 'Jhonatan está registrado como particular.' : 'Jhonatan entra con su seguro.'} El médico dice que el corte no tocó tendones${F.has('tarea_sigue') ? ', pero necesita ocho puntos' : ': cuatro puntos'} y descanso médico de varios días.</p><p>Jhonatan, con la mano vendada: «Ingeniera, ¿me van a botar?». <mark class="clave">Antes de responderle, haces tres llamadas</mark>.</p>`,
    type: 'calls',
    calls: [['Doña Nelly · mamá de Jhonatan', 'Contesta desde Monsefú, con ruido de mercado', '«¿Qué le pasó a mi hijo? ¿Está bien?» Le explicas. Silencio. «Él es el que trae la plata a la casa, señorita. Su papá ya no trabaja. ¿Le van a pagar esos días?»'], ['Ing. Ingrid Delgado', 'Contesta en la camioneta', '«Los días de descanso médico no se pierden y nadie lo va a despedir por esto. Díselo así. Y pídele que, cuando esté tranquilo, nos cuente qué pasó con la amoladora.»'], ['Don Segundo Vílchez', 'Contesta en voz baja', '«¿Cómo está el muchacho?» Pausa larga. «Dígale que se recupere. Su puesto lo espera.» Cuelga antes de que puedas preguntarle por el disco.']],
    prompt: '¿Qué le dices a Jhonatan?',
    choices: [
      { id: 'a', label: 'Que no lo van a despedir, que su descanso médico está cubierto, que su mamá ya sabe, y que cuando se sienta bien te gustaría escuchar cómo pasó, sin apuro.',
        res: { q: 'buena', fx: { personas: 6, confianza: 4 }, rel: { jhonatan: 1 }, flags: ['guarda_retirada'], cartera: { accidente: 'Jhonatan informado; descanso médico' },
          out: 'Jhonatan cierra los ojos y respira. «Ingeniera… el disco no era el mío. A las nueve y media me cambiaron la amoladora por otra más grande, para ir más rápido.» No le preguntas más. Ya tienes una pista.',
          pro: { ok: 'Primero la persona: tranquilidad, información clara y respeto por su tiempo.', info: 'Lo que contó Jhonatan va a tu libreta, con la hora y sus palabras exactas.' },
          kusi: ['feliz', 'Lo cuidaste a él antes que al informe.'] } },
      { id: 'b', label: 'Que se quede tranquilo y que ahora te cuente exactamente qué hizo mal, para el registro.',
        res: { q: 'riesgosa', fx: { personas: -4, confianza: -3 }, rel: { jhonatan: -1 },
          out: 'Jhonatan baja la mirada: «Fue mi culpa, ingeniera. Me descuidé». Es lo único que dice. Anotas «descuido» y sientes que algo no cuadra.',
          pro: { ok: 'Necesitas información para el registro.', risk: 'Preguntarle «qué hizo mal» en una sala de espera, con la mano cosida, solo trae culpa. La verdad llegará después, si confía en ti.' },
          kusi: ['triste', 'Le preguntaste por su culpa, no por lo que pasó.'] } },
    ],
    rules: [[BP, 'Después de un accidente, primero la persona y su familia; la entrevista para la investigación viene después, en un lugar tranquilo.']],
    mirada: { ve: 'Para un ayudante de obra que mantiene a su familia, un accidente significa miedo a perder el trabajo y el ingreso. Si siente que la conversación busca un culpable, va a decir «fue mi culpa» y callará lo que sabe. Si se siente protegido, contará lo que pasó.' },
  },
  {
    id: 'e5', t: '14:40', ch: 'documento', who: null, titulo: 'El registro que trajo Renzo', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Caseta de SSOMA', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>Vuelves a la obra con hambre: el menú de la esquina ya cerró y comes un pan con camote del quiosco. En tu escritorio hay un formato de registro de accidente ya llenado, con la letra de Renzo.${F.has('accidente_oculto') ? ' Aunque quedó como «primeros auxilios», Ingrid pidió que igual se llenara para el archivo interno.' : ''}</p><p>Te pide que lo firmes «para cerrar el tema». <mark class="clave">Antes de firmar, lo lees con lo que viste esta mañana</mark>.</p>`,
    type: 'flag', prompt: 'Marca las líneas del registro que son falsas, incompletas o que conviene corregir.',
    doc: { t: 'Registro de accidente de trabajo', sub: 'Constructora Lambayeque S.A.C. · Edificio Los Algarrobos · borrador' },
    lines: [
      { id: 'datos', t: 'Trabajador: Jhonatan Ñique · Ayudante · Piso 3 · 10:20 a. m.' },
      { id: 'tipo', t: 'Tipo de evento: «incidente sin lesión».', bad: LEY, why: 'Hubo una lesión con puntos y descanso médico: es un accidente de trabajo y así debe registrarse.' },
      { id: 'causa', t: 'Causa: «descuido del trabajador».', bad: BP, why: 'El «descuido» describe un acto, no explica qué falló. La amoladora no tenía guarda y el disco era más grande que a las 7:15.' },
      { id: 'testigos', t: 'Testigos: ninguno.', bad: BP, why: 'Había tres obreros en el piso 3, además de Teodoro. Sus nombres deben quedar en el registro.' },
      { id: 'descanso', t: 'Días de descanso médico: 0.', bad: LEY, why: 'La clínica le dio descanso médico. Un registro con datos falsos no sirve como registro.' },
      { id: 'notif', t: 'Notificación al MTPE: la realiza el centro médico que lo atendió, por ser un accidente no mortal.' },
      { id: 'medida', t: 'Medida correctiva: amonestación escrita al trabajador.', bad: BP, why: 'Castigar al herido no corrige la guarda retirada ni el disco equivocado, y enseña a la obra a esconder los próximos accidentes.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Corriges la causa, pero dejas pasar algún dato falso. El registro tiene tu firma.' : `Corriges ${hitsLey} datos falsos y reescribes la causa: «En investigación. Herramienta sin guarda y con disco distinto al de las 7:15». Renzo lee tu versión y no dice nada. Tampoco la rompe.`,
      flags: missLey ? ['registro_culpa'] : ['registro_corregido'], rel: {},
      cartera: { registro: missLey ? 'Registro con datos incompletos' : 'Registro corregido: accidente, testigos y descanso médico' },
      pro: { ok: 'El registro de un accidente debe decir qué pasó, no lo que conviene que haya pasado.', risk: 'Con tu firma, un registro falso es también tu responsabilidad.', info: 'La línea de la notificación era correcta: en un accidente no mortal notifica el centro médico; en uno mortal o en un incidente peligroso, el empleador en 24 horas.' },
      kusi: missLey ? ['preocupado', 'Firmaste un papel que todavía no dice la verdad.'] : ['celebra', '¡Un registro que se puede investigar!'],
    }),
    rules: [[LEY, 'D.S. 005-2012-TR, art. 110 (modificado por el D.S. 006-2022-TR): el empleador notifica en 24 horas los accidentes mortales y los incidentes peligrosos; el centro médico notifica los accidentes de trabajo hasta el último día hábil del mes siguiente.']],
    mirada: {
      ve: 'El registro de accidentes es la memoria de la obra. Si dice «descuido» y «cero días», la próxima persona que use esa amoladora sin guarda no tendrá a nadie que la cuide. Corregirlo es el primer paso de la investigación.',
      visual: { tipo: 'cambio', titulo: 'Del registro que convenía al que sirve', pares: [['Incidente sin lesión', 'Accidente con descanso médico'], ['Descuido del trabajador', 'En investigación: guarda retirada, disco distinto'], ['Testigos: ninguno', 'Teodoro y tres obreros'], ['Amonestación', 'Medidas después de investigar']] },
      normas: [{ ley: 'D.S. 005-2012-TR, art. 110, modificado por el D.S. 006-2022-TR', dice: 'El empleador notifica los accidentes de trabajo mortales y los incidentes peligrosos dentro de las 24 horas. El centro médico asistencial notifica los accidentes de trabajo hasta el último día hábil del mes siguiente.', practica: 'El corte de Jhonatan lo notifica la clínica, pero la empresa igual debe registrarlo e investigarlo.' }],
    },
  },
  {
    id: 'e6', t: '16:30', ch: 'documento', who: null, titulo: 'La alerta del lunes', banner: 'assets/esc/idea.webp', lugar: 'Caseta de SSOMA', show: ['calidad', 'personas', 'confianza'],
    body: (n, F) => `<p>En el grupo de la obra ya circulan versiones: que Jhonatan «estaba jugando», que «era nuevo», que «se le cayó la amoladora». Ingrid te pide preparar la alerta de seguridad para la charla del lunes a las 7:00.</p><p>${F.has('guarda_retirada') || F.has('escena_preservada') ? 'Tú viste la amoladora sin guarda. ' : ''}<mark class="clave">Lo que digas el lunes va a definir qué recuerda la obra de este día</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de la alerta de seguridad.', boton: 'Enviar la alerta a Ingrid',
    bloques: [
      { id: 'que', t: 'Qué pasó', n: 1, ops: [
        { id: 'q1', t: 'El viernes a las 10:20, un compañero se cortó la mano con una amoladora en el piso 3. Está bien y se está recuperando.', ok: true, por: 'Hechos, sin nombre y con lo que todos quieren saber: que está bien.' },
        { id: 'q2', t: 'Jhonatan se descuidó y se cortó la mano.', ok: false, por: 'Nombre y culpa en la misma frase: nadie volverá a reportar nada.' },
      ] },
      { id: 'falla', t: 'Qué falló', n: 2, ops: [
        { id: 'f1', t: 'La amoladora no tenía la guarda puesta.', ok: true, por: 'Un hecho verificado en la escena.' },
        { id: 'f2', t: 'El disco era más grande que el que corresponde a esa herramienta.', ok: true, por: 'Otro hecho que la escena preservada mostró.' },
        { id: 'f3', t: 'El trabajador no tenía experiencia.', ok: false, por: 'Es una conclusión apresurada, antes de investigar.' },
      ] },
      { id: 'hoy', t: 'Qué hacemos desde hoy', n: 2, ops: [
        { id: 'h1', t: 'Ninguna amoladora se usa sin guarda ni con un disco que no corresponde. Si la ves así, la paras y avisas.', ok: true, por: 'Una regla clara y una invitación a actuar.' },
        { id: 'h2', t: 'Wilmer revisa hoy todas las amoladoras del almacén y retira las que no tengan guarda.', ok: true, por: 'Una acción concreta, con responsable.' },
        { id: 'h3', t: 'El que se accidente por descuido será amonestado.', ok: false, por: 'Las amenazas hacen que los accidentes se escondan.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, personas: q === 'buena' ? 4 : -2, confianza: q === 'buena' ? 2 : 0 },
        flags: q === 'riesgosa' ? [] : ['alerta_sin_culpa'], cartera: { accidente: q === 'riesgosa' ? 'Alerta con culpables' : 'Alerta lista: guarda y disco; revisión de amoladoras' },
        out: q === 'buena' ? 'Ingrid responde: «Así. El lunes la doy contigo». A las 5:40, Wilmer te manda una foto: dos amoladoras más sin guarda, separadas con cinta roja.' : q === 'aceptable' ? 'Ingrid te pide ajustar una frase: «Nada que suene a culpa antes de investigar».' : 'Ingrid te llama: «Si mañana decimos esto, el próximo accidente no nos lo cuenta nadie».',
        pro: { ok: 'Una alerta cuenta lo que pasó, lo que falló y lo que cambia, sin señalar a nadie.', risk: 'Si la alerta culpa al herido, la obra aprende a esconder y no a prevenir.', info: 'Las causas de fondo, como por qué alguien cambió la amoladora, se buscan en la investigación.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una alerta que enseña, no que culpa!' : 'Hechos, fallas y acciones. Sin nombres.'],
      };
    },
    rules: [[BP, 'Una alerta de seguridad comparte hechos y medidas en 24 horas, sin nombres ni culpables.']],
    mirada: {
      ve: 'Después de un accidente, la obra necesita saber qué pasó antes de que el rumor lo cuente por ella. Una alerta breve, sin culpas y con una acción concreta convierte el miedo en atención.',
      visual: { tipo: 'flujo', titulo: 'Alerta de seguridad', pasos: ['Qué pasó', 'Cómo está', 'Qué falló', 'Qué cambia hoy', 'A quién avisar'] },
    },
  },
  {
    id: 'e7', t: '18:05', ch: 'whatsapp', who: null, titulo: 'Para Jhonatan', banner: 'assets/esc/meta.webp', lugar: 'Combi de regreso', show: ['personas', 'confianza'],
    body: (n, F) => `<p>La combi va por la avenida Sáenz Peña, llena y con la radio a todo volumen. Tienes las manos todavía con olor a alcohol de la clínica.${F.has('accidente_oculto') ? ' En su ficha dice «domicilio». Eso no te deja tranquila.' : ''}</p><p>Jhonatan debe estar en Monsefú, con su mamá. <mark class="clave">Le escribes antes de que termine el día</mark>.</p>`,
    type: 'compose', enviaA: 'jhonatan', para: 'Para: Jhonatan Ñique · Ayudante de obra', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'saludo', t: 'Cómo empiezas', ops: [
        { id: 's1', t: 'Jhonatan, ¿cómo sigue tu mano? ¿Pudiste descansar?', ok: true, por: 'Primero él.' },
        { id: 's2', t: 'Jhonatan, necesito tu versión para el informe.', ok: false, por: 'Suena a interrogatorio el día del accidente.' },
      ] },
      { id: 'tranquilo', t: 'Lo que le aseguras', ops: [
        { id: 't1', t: 'Tu puesto está seguro y tus días de descanso están cubiertos. Don Segundo también preguntó por ti.', ok: true, por: 'Responde a su miedo y le da un gesto de su jefe.' },
        { id: 't2', t: 'No te preocupes, todo se va a arreglar.', ok: false, por: 'Es amable, pero no responde lo que le preocupa.' },
      ] },
      { id: 'pide', t: 'Lo que le pides', ops: [
        { id: 'p1', t: 'Cuando te sientas bien, me gustaría escuchar cómo fue lo de la amoladora. Nadie te está buscando culpa: queremos que no le pase a otro.', ok: true, por: 'Invita a contar, explica para qué y quita el miedo.' },
        { id: 'p2', t: 'El lunes te espero en la oficina para tu descargo.', ok: false, por: '«Descargo» suena a proceso disciplinario.' },
      ] },
    ],
    res: sel => {
      const buenas = ['s1', 't1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, confianza: q === 'buena' ? 3 : 0 }, rel: { jhonatan: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? [] : ['jhonatan_tranquilo'], cartera: { accidente: q === 'riesgosa' ? 'Jhonatan sin responder' : 'Jhonatan dispuesto a contar su versión' },
        out: q === 'buena' ? 'A los veinte minutos llega un audio. Se escucha a su mamá de fondo: «Gracias, ingeniera. Ya me duele menos. El lunes le cuento todo, hay cosas que usted tiene que saber».' : q === 'aceptable' ? 'Jhonatan responde con un «ok, gracias ingeniera 🙏».' : 'Jhonatan lee el mensaje y no contesta.',
        pro: { ok: 'Un mensaje que cuida a la persona abre la puerta a la verdad que la investigación necesita.', risk: 'Si suena a proceso disciplinario, la versión de Jhonatan será «fue mi culpa».' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '«Hay cosas que usted tiene que saber.» ¡Uy!' : 'Primero la persona, después el informe.'],
      };
    },
    rules: [[BP, 'La versión del trabajador accidentado es clave para la investigación; pídela cuidándolo y sin culpar.']],
    mirada: {
      ve: 'La investigación de un accidente empieza mucho antes de la primera entrevista: empieza en cómo se trata a la persona el mismo día. Quien se siente cuidado cuenta lo que vio; quien se siente acusado, se defiende.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje', txt: '¿Cómo sigue tu mano? Tu puesto está seguro y tus días de descanso están cubiertos. Cuando te sientas bien, me gustaría escuchar cómo fue. Nadie te busca culpa: queremos que no le pase a otro.' },
    },
  },
];
