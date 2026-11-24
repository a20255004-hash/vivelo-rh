// Supervisor/a de SST · Capítulo 6 · «El incidente» · Semana 2, lunes.
// Hilo de las dos semanas: una planta de pota y conservas en Paita, un año después del accidente de Hugo en la cortadora.
// Normas citadas (texto oficial en docs/normas/txt, publicado en El Peruano):
// - D.S. 005-2012-TR, glosario: incidente (sin lesión o solo primeros auxilios), accidente leve (descanso breve con retorno
//   al día siguiente). Art. 33 a): registro de accidentes con investigación y medidas. Art. 34: registro de tercerizados.
//   Art. 42 l): el comité investiga las causas de incidentes y accidentes. Art. 88: la investigación se documenta y cuenta con
//   participación de los trabajadores. Art. 110: los accidentes no mortales los notifica el centro médico asistencial; el
//   empleador colabora con la información. Art. 73: protección de los miembros trabajadores del comité.
// - D.S. 019-2006-TR, art. 27.1: la falta de orden y limpieza que implique riesgos es infracción grave.

export const CAP = {
  n: 6, titulo: 'El incidente', dia: 'Semana 2, lunes', foto: 'assets/esc/alarma.webp',
  lugar: 'Productos Mar de Piura · Eviscerado',
  inicio: '06:10', fin: '18:20', cierreHora: '18:00',
  apertura: 'Lunes, 6:12 de la mañana. Todavía estás en la combi cuando suena el celular. Es Yesenia: «Inge, Teresa se cayó en eviscerado».', boton: 'Correr a la planta',
  kusi: 'Cuando pasa algo, los primeros minutos deciden si se aprende o se olvida. ¡Respira y ordena!',
  lead: 'Respondiste en orden, cuidaste las evidencias, escuchaste a Teresa, decidiste cómo registrar su caída, llamaste a los testigos y pusiste medidas inmediatas en eviscerado.',
  reflexion: '¿Por qué un «casi accidente» es una oportunidad y no un alivio?',
  siguiente: { n: 7, titulo: 'Las causas', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'teresa', p: 'Caída de Teresa Panta', j: 'SST', d: 0, e: 'Hoy 06:05 · mesa 7 de eviscerado' },
  { id: 'drenaje', p: 'Drenaje de eviscerado', j: 'Carlos Ruiz · Producción', d: 0, e: 'Acuerdo del comité: vence la próxima semana' },
  { id: 'botas', p: 'Botas antideslizantes', j: 'Logística', d: 0, e: 'Reposición pendiente' },
  { id: 'comite', p: 'Comité de SST', j: 'Flor Chunga', d: 0, e: 'Debe participar en la investigación' },
];

export const FUTURO = {
  escena_preservada: ['Cuidaste el lugar de la caída antes de que lo limpiaran.', 'Tus fotos serán la base del análisis. Capítulo 7.'],
  teresa_escuchada: ['Teresa te contó lo del turno del sábado, las alfombras y sus botas.', 'Su relato guía la investigación. Capítulo 7.'],
  accidente_registrado: ['Registraste la caída de Teresa como accidente leve, como indicó la médica.', 'La pizarra vuelve a cero. Capítulo 7.'],
  accidente_oculto: ['Aceptaste registrar la caída de Teresa como incidente aunque tuvo descanso.', 'La inspectora lo encontrará. Capítulo 9.'],
  alfombras_calidad: ['Descubriste que Calidad retiró las alfombras antideslizantes por la auditoría sanitaria.', 'Habrá que conciliar inocuidad y seguridad. Capítulo 7.'],
  medidas_inmediatas: ['Eviscerado tuvo medidas inmediatas el mismo día: drenaje limpio, alfombras sanitizables y botas.', 'El comité las revisará. Capítulo 7.'],
  comite_investiga: ['Pediste que el comité participe en la investigación desde mañana.', 'Capítulo 7.'],
};

export const CHATS = {
  julio: { n: 'Ing. Julio Zapata', sub: 'Gerente de Operaciones', who: 'julio-sst' },
  carlos: { n: 'Carlos Ruiz', sub: 'Jefe de producción', who: 'produccion' },
  flor: { n: 'Flor Chunga', sub: 'Representante en el comité', who: 'delegada' },
  yesenia: { n: 'Yesenia Távara', sub: 'Asistente de SST', c: '#2E7D6B' },
  milagros: { n: 'Dra. Milagros Seminario', sub: 'Médica ocupacional', c: '#B5446E' },
};

export const WSP = [
  { chat: 'yesenia', t: '06:12', de: 'Yesenia', txt: 'Inge, Teresa se cayó en eviscerado, mesa 7. Está consciente, la llevan al tópico. Se golpeó la muñeca 😟' },
  { chat: 'carlos', t: '06:40', de: 'Carlos', txt: 'Ya mandé a limpiar la zona para que siga el turno.' },
  { chat: 'flor', t: '07:15', de: 'Flor', txt: 'Inge, Teresa está asustada. Recién entró al comité y se cae. Dice que la van a botar.' },
  { chat: 'milagros', t: '09:20', de: 'Milagros', txt: 'Contusión de muñeca, sin fractura según la placa. Le doy descanso hoy; mañana puede volver con la muñeca vendada a una tarea liviana.' },
  { chat: 'julio', t: '12:00', de: 'Julio', txt: '¿Cómo está la señora? Avísame qué necesitas.', si: 'julio_respalda' },
];

export const CORREOS = [
  { t: '07:30', de: 'Ing. Marta Chero · Calidad', para: 'Supervisor/a de SST', asunto: 'Alfombras de eviscerado', html: '<p>Hola. Me enteré de la caída. Para que lo sepas: las alfombras de goma de eviscerado las retiramos hace tres semanas porque la auditoría sanitaria del cliente las observó (acumulan restos y no se pueden desinfectar bien).</p><p>No quiero que se piense que Calidad está en contra de la seguridad. Busquemos juntas una opción.</p><p>Marta</p>' },
];

export const QUIZ = [
  { q: 'Teresa recibe descanso hoy y vuelve mañana a trabajar. ¿Cómo se clasifica?', ops: ['Incidente', 'Accidente leve', 'Accidente incapacitante permanente', 'Incidente peligroso'], ok: 1, por: 'Según el glosario del reglamento, el accidente leve genera un descanso breve con retorno máximo al día siguiente.' },
  { q: '¿Qué va primero cuando alguien se lastima?', ops: ['Tomar fotos', 'Atender a la persona', 'Llenar el registro', 'Avisar al cliente'], ok: 1, por: 'Primero la persona; luego asegurar la zona y preservar las evidencias.' },
  { q: 'Producción manda limpiar el piso de inmediato para seguir trabajando. ¿Qué haces?', ops: ['Nada, es lo normal', 'Pides fotos y medidas antes de limpiar, y después se limpia', 'Prohíbes limpiar por una semana', 'Lo limpias tú'], ok: 1, por: 'Las evidencias del lugar son la base de la investigación; se registran rápido y luego se restablece el área.' },
  { q: '¿Quiénes participan en la investigación de un accidente según el reglamento?', ops: ['Solo SST', 'El empleador, el comité y la participación de los trabajadores', 'Solo el jefe del área', 'La aseguradora'], ok: 1, por: 'Art. 88 y art. 42 l) del D.S. 005-2012-TR.' },
  { q: 'Calidad retiró las alfombras por inocuidad; Seguridad las necesita contra caídas. La mejor salida…', ops: ['Gana Calidad', 'Gana Seguridad', 'Buscar juntas una solución que cumpla ambas cosas', 'Que decida el cliente'], ok: 2, por: 'Existen pisos y alfombras sanitizables antideslizantes: la solución suele estar en conversar.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '06:25', ch: 'documento', who: null, titulo: 'Los primeros minutos', banner: 'assets/esc/alarma.webp', lugar: 'Eviscerado, mesa 7', show: ['personas', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>Llegas corriendo, con las botas a medio poner. En la mesa 7 hay agua hasta los tobillos: el drenaje está tapado con tinta y restos de pota. ${F.has('turno_sabado') ? 'Muchas de las mujeres trabajaron el turno extra del sábado en la noche y tienen ojeras.' : ''} Un operario de limpieza ya trae el jalador para «dejar todo bonito».</p><p><mark class="clave">Ordena lo que haces en los próximos quince minutos</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena tus primeras acciones.', boton: 'Actuar en este orden',
    items: [
      { id: 'persona', t: 'Confirmar que Teresa está atendida en el tópico y acompañada', por: 'La persona, primero.' },
      { id: 'zona', t: 'Mover a las operarias de la mesa 7 a otras mesas y señalizar la zona', por: 'Evitar que otra persona se caiga.' },
      { id: 'evidencias', t: 'Tomar fotos y medidas del agua, el drenaje y el piso antes de que limpien', por: 'Las evidencias se pierden con el jalador.' },
      { id: 'limpiar', t: 'Recién entonces autorizar la limpieza y el destape del drenaje', por: 'El área se restablece cuando ya está documentada.' },
      { id: 'avisar', t: 'Avisar a Julio, a Carlos y a Flor como representante del comité', por: 'Quien decide y quien vigila deben saberlo pronto.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 4 : 1, calidad: q === 'buena' ? 4 : 0, personas: 2 }, flags: q === 'riesgosa' ? [] : ['escena_preservada'],
        cartera: { teresa: q === 'riesgosa' ? 'Zona limpiada antes de documentar' : 'Teresa en tópico · zona documentada con 14 fotos' },
        out: q === 'buena' ? 'Detienes el jalador a tiempo. Tus fotos muestran el agua hasta el tobillo, el drenaje tapado y la marca del resbalón junto a la mesa 7. Después, limpieza destapa el drenaje en veinte minutos.' : q === 'aceptable' ? 'Llegas a tomar algunas fotos, pero el agua ya bajó. Queda la marca del resbalón.' : 'Cuando sacas el celular, el piso ya está seco y brillante. Como si nada hubiera pasado.',
        pro: { ok: 'Atender, asegurar, documentar y recién limpiar: el orden protege a la persona y a la investigación.', risk: 'Limpiar rápido parece responsable, pero borra la prueba de por qué ocurrió.' },
        kusi: [q === 'buena' ? 'feliz' : 'preocupado', q === 'buena' ? '¡Orden en el caos!' : 'El jalador se llevó las pistas…'],
      };
    },
    rules: [[BP, 'Primero la persona, luego la zona, luego las evidencias; el área se restablece cuando está documentada.']],
    mirada: {
      ve: 'En los primeros minutos después de una caída, todos quieren volver a la normalidad. Esa prisa, comprensible, es la que borra las causas. Un/a supervisor/a de SST cuida a la persona y, al mismo tiempo, cuida lo que el lugar tiene para contar.',
      visual: { tipo: 'flujo', titulo: 'Quince minutos', pasos: ['Teresa atendida', 'Zona segura', 'Fotos y medidas', 'Limpieza', 'Avisos'] },
    },
  },
  {
    id: 'f2', t: '07:40', ch: 'documento', who: null, titulo: 'Las evidencias', banner: 'assets/esc/lupa.webp', lugar: 'Eviscerado y almacén', show: ['calidad', 'cumplimiento'],
    body: () => `<p>Yesenia te acompaña con una libreta. Hay muchas cosas que mirar y Carlos ya preguntó dos veces cuándo se libera la mesa 7.</p><p><mark class="clave">Elige las dos evidencias que revisas primero</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos evidencias que revisarás primero.', boton: 'Revisar estas dos', resumen: 'Revisaste',
    cols: ['Evidencia', 'Qué puede mostrar'],
    rows: [
      { id: 'botas', cells: ['Las botas de Teresa', 'Desgaste de la suela'] },
      { id: 'drenaje', cells: ['El drenaje de la mesa 7 y el cuaderno de limpieza', 'Cada cuánto se destapa'] },
      { id: 'cuaderno', cells: ['El cuaderno del turno extra del sábado noche', 'Quién trabajó, cuántas horas'] },
      { id: 'camara', cells: ['El video de la cámara de seguridad', 'Solo enfoca la puerta de salida'] },
      { id: 'lista', cells: ['La lista de asistencia a la última charla', 'Si Teresa firmó'] },
    ],
    score: { botas: 3, drenaje: 3, cuaderno: 2, camara: 0, lista: 0 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1 },
        cartera: { botas: picks.includes('botas') ? 'Suela lisa: reposición pedida hace 3 meses' : 'Reposición pendiente', drenaje: picks.includes('drenaje') ? 'Cuaderno: destape solo al final de cada turno' : 'Acuerdo del comité: vence la próxima semana' },
        out: q === 'buena' ? 'Las botas de Teresa tienen la suela lisa como una plancha. El cuaderno de limpieza dice que el drenaje se destapa solo al terminar cada turno: ocho horas de tinta acumulándose.' : 'Revisas lo que tienes a mano. La lista de asistencia muestra la firma de Teresa en la charla de «pisos mojados». Eso no explica nada.',
        pro: { ok: 'Las evidencias útiles son las que explican por qué, no las que demuestran que alguien «estaba informado».', info: 'Que Teresa haya firmado una charla no la protegía de un piso con agua hasta el tobillo.' },
        kusi: [q === 'buena' ? 'curioso' : 'pensando', q === 'buena' ? '¡Suela lisa y ocho horas de tinta!' : 'Una firma no explica una caída.'],
      };
    },
    rules: [[BP, 'Busca evidencias de las condiciones, no solo de si la persona estaba capacitada.']],
    mirada: {
      ve: 'Muchas investigaciones empiezan por la lista de asistencia a una charla para concluir que «el trabajador sabía». Es la evidencia más cómoda y la menos útil.',
      visual: { tipo: 'cambio', titulo: 'Qué evidencias explican la caída', pares: [['Firmó la charla de pisos mojados', 'Suela lisa desde hace meses'], ['Video de la puerta', 'Drenaje destapado una vez por turno'], ['«Estaba informada»', 'Trabajó el sábado en la noche']] },
    },
  },
  {
    id: 'f3', t: '08:30', ch: 'presencial', who: null, titulo: 'Teresa', banner: 'assets/foto/cafe.webp', lugar: 'Tópico', show: ['personas', 'calidad'],
    body: (n, F) => `<p>Teresa Panta tiene 47 años, tres hijos y viene de Sechura. Está sentada en la camilla del tópico con la muñeca en hielo y el mandil todavía mojado. ${F.has('teresa_en_comite') ? 'Hace cinco días entró al comité.' : 'Es suplente del comité.'} Cuando te ve, se pone de pie: «Ya estoy bien, inge, ya puedo volver».</p><p>Le pides que se siente. <mark class="clave">Tienes tiempo para dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Teresa.',
    opts: [
      { id: 'como', label: '¿Cómo pasó?', info: '«Me di la vuelta para dejar una bandeja y el pie se me fue. Me agarré de la mesa y me doblé la muñeca. Al lado estaba el cuchillo de Rocío. Si caigo un poquito más a la izquierda…» No termina la frase.' },
      { id: 'alfombra', label: '¿Desde cuándo no hay alfombras en tu mesa?', info: '«Hace tres semanas las sacaron. Dijeron que por el cliente. Desde ahí nos resbalamos todas, pero nadie se había caído feo. Yo lo dije en el comité, lo del drenaje.»' },
      { id: 'sabado', label: '¿Trabajaste el turno del sábado en la noche?', info: '«Sí, hasta las seis de la mañana del domingo. Dormí el domingo en la tarde nomás, porque tengo a mis hijos. Hoy entré a las seis.» Se frota los ojos. «Estaba cansada, pa qué le voy a mentir.»' },
      { id: 'botas', label: '¿Pediste botas nuevas?', info: '«Tres veces. En julio, en agosto y en setiembre. Me dijeron que no hay de mi talla, 36. Las mías ya no tienen dibujo abajo.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 4, calidad: 3 }, rel: { delegada: 1 }, flags: ['teresa_escuchada'],
      cartera: { teresa: picks.includes('alfombra') ? 'Alfombras retiradas hace 3 semanas; Teresa lo había advertido en el comité' : picks.includes('sabado') ? 'Trabajó el turno extra del sábado hasta las 6 a. m.' : 'Relato tomado' },
      out: picks.includes('alfombra') ? 'Teresa lo dijo en el comité y se cayó igual. Te das cuenta de que, si esto termina en «descuido de la trabajadora», ella no volverá a hablar en una reunión.' : 'Anotas cada palabra. Teresa se queda mirando su muñeca: «¿Me van a descontar el día?».',
      kusi: ['pensando', 'Escucharla es parte de cuidarla.'],
    }),
    mirada: {
      ve: 'La persona accidentada suele minimizar lo que pasó por miedo a perder el trabajo o a quedar como torpe. Preguntar por las condiciones, y no por lo que hizo mal, cambia lo que cuenta.',
      visual: { tipo: 'mensaje', titulo: 'Lo que dijo Teresa', txt: 'El pie se me fue. Al lado estaba el cuchillo de Rocío. Las alfombras las sacaron hace tres semanas. Pedí botas tres veces. Estaba cansada.' },
    },
  },
  {
    id: 'f4', t: '09:40', ch: 'presencial', who: null, titulo: '«No me registre»', banner: 'assets/foto2/tension.webp', lugar: 'Pasillo del tópico', show: ['etica', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>La Dra. Milagros confirma: contusión de muñeca, descanso hoy y retorno mañana a tarea liviana. Es un accidente leve. ${F.has('tablero_honesto') ? 'La pizarra de la entrada, que iba en 40 días, volverá a cero.' : 'La pizarra de la entrada sigue diciendo 218.'}</p><p>En el pasillo, Teresa te agarra del brazo con la mano sana: «Inge, no me ponga en el registro. Recién entré al comité y ya me caigo. <mark class="clave">Van a decir que soy torpe y me van a sacar</mark>. Póngalo como que no pasó nada».</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Registrarlo como accidente leve, como indicó la médica, y explicarle a Teresa que el registro protege su derecho y que, como miembro del comité, tiene protección contra represalias. Pedirle a Flor que la acompañe.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, personas: 2 }, rel: { delegada: 1 }, flags: ['accidente_registrado'], cartera: { teresa: 'Accidente leve registrado · descanso hoy, tarea liviana mañana' },
          out: 'Teresa llora un poco, de nervios. Flor llega, le pasa el brazo por los hombros y le dice algo en voz baja que no alcanzas a oír. Teresa asiente. «Ya, inge. Pero que no digan que fue culpa mía.»',
          pro: { ok: 'El registro dice lo que pasó y la trabajadora sabe que no está sola.', risk: 'La pizarra vuelve a cero y Julio va a preguntar.', info: 'Los miembros trabajadores del comité tienen protección contra el despido incausado (art. 73 del reglamento). Es un dato que tranquiliza, pero la confianza la da el trato.' },
          kusi: ['animo', 'Registrar es cuidar, no acusar.'] } },
      { id: 'b', label: 'Respetar lo que ella pide: anotarlo como incidente con primeros auxilios. Al fin y al cabo, es su decisión.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -5, personas: 1 }, flags: ['accidente_oculto'], cartera: { teresa: 'Registrado como incidente pese al descanso médico' },
          out: 'Teresa te aprieta la mano, aliviada. En el registro queda una línea que no coincide con el certificado de la Dra. Milagros. La médica lo nota esa misma tarde.',
          pro: { ok: 'Respetas el miedo de Teresa.', risk: 'La clasificación no la decide la trabajadora ni SST: la decide la evaluación médica. Y es lo mismo que pasó con Rosa.' },
          kusi: ['triste', 'Otra vez como lo de Rosa…'] } },
    ],
    rules: [[LEY, 'D.S. 005-2012-TR, glosario: accidente leve, descanso breve con retorno al día siguiente.'], [LEY, 'Art. 73: protección de los miembros trabajadores del comité contra el despido incausado.']],
    mirada: {
      ve: 'A veces quien pide que no se registre un accidente es la propia persona accidentada. Ese miedo dice mucho de la cultura de la empresa. Respetarla no es callar: es registrar la verdad y protegerla de las consecuencias que teme.',
      visual: { tipo: 'balanza', a: { t: 'No registrar', items: ['Teresa tranquila hoy', 'Registro falso', 'La causa sigue ahí'] }, b: { t: 'Registrar y acompañar', items: ['Registro verdadero', 'Teresa protegida', 'Se investiga la causa'] } },
    },
  },
  {
    id: 'f5', t: '11:20', ch: 'llamada', who: null, titulo: 'Tres voces más', banner: 'assets/foto/llamada.webp', lugar: 'Oficina de SST', show: ['calidad', 'personas', 'cumplimiento'],
    body: () => `<p>Carlos te ha mandado tres mensajes preguntando si puede reabrir la mesa 7. El celular con la batería hinchada vuelve a estar enchufado.</p><p><mark class="clave">Te faltan tres voces</mark> para entender la caída completa.</p>`,
    type: 'calls',
    calls: [['Rocío Querevalú · fileteadora de la mesa 7', 'Contesta desde el comedor', '«Yo vi que se resbaló. El agua estaba hasta aquí, inge. El drenaje se tapa a las dos horas y hasta el final del turno nadie lo destapa. Y desde que sacaron las alfombras, todas caminamos como pingüinos.»'], ['Ing. Marta Chero · Calidad', 'Contesta en su oficina', '«Las alfombras de goma acumulaban restos y la auditoría las observó. Las saqué yo. Hay alfombras de material sanitizable que no resbalan, pero cuestan y nadie las pidió. Me siento fatal.»'], ['Almacén de EPP', 'Contesta un practicante', '«Botas talla 36 no hay desde junio. El pedido lo hicimos, pero lo cambiaron por tallas grandes porque «hay más hombres». Hay doce pedidos de mujeres pendientes.»']],
    prompt: '¿Cómo sigues?',
    choices: [
      { id: 'a', label: 'Incluir en la investigación a Calidad y a Logística, sin buscar culpables: el drenaje, las alfombras retiradas y las botas sin talla son parte de la misma caída.',
        res: { q: 'buena', fx: { calidad: 5, personas: 2, cumplimiento: 2 }, flags: ['alfombras_calidad'], cartera: { botas: '12 pedidos de botas de mujer pendientes desde junio', drenaje: 'Se tapa a las dos horas; destape solo al final del turno' },
          out: 'Marta te propone almorzar juntas para buscar las alfombras sanitizables. Logística te manda el pedido de junio, con las tallas tachadas a mano.',
          pro: { ok: 'La caída de Teresa tiene tres áreas involucradas. Una investigación que solo mira a Producción se queda corta.', info: 'Que las botas de mujer se cambien por «tallas de hombre» es un problema de seguridad y también de equidad.' },
          kusi: ['celebra', '¡La historia completa tiene tres áreas!'] } },
      { id: 'b', label: 'Centrar la investigación en eviscerado: Calidad y Logística tienen sus propias razones.',
        res: { q: 'aceptable', fx: { calidad: 1, cumplimiento: 1 }, cartera: { drenaje: 'Problema de limpieza del drenaje' },
          out: 'La investigación queda más corta. Las alfombras siguen fuera y las botas talla 36 siguen sin llegar.',
          pro: { ok: 'Te concentras en lo más visible.', risk: 'Sin alfombras ni botas, el próximo resbalón ya tiene fecha.' },
          kusi: ['pensando', '¿Y las botas de las chicas?'] } },
    ],
    rules: [[LEY, 'D.S. 019-2006-TR, art. 27.1: la falta de orden y limpieza que implique riesgo es infracción grave.'], [BP, 'Una investigación sigue las causas por todas las áreas que tocan, no solo por donde ocurrió el hecho.']],
    mirada: {
      ve: 'Casi ningún accidente tiene una sola causa ni una sola área responsable. Calidad quitó las alfombras por buenas razones; Logística cambió las tallas por buenas razones. La suma de buenas razones produjo una caída.',
      visual: { tipo: 'embudo', titulo: 'Botas en eviscerado', niveles: [['Operarias en eviscerado', 40], ['Con botas en buen estado', 22], ['Con pedido de talla pendiente', 12]] },
    },
  },
  {
    id: 'f6', t: '14:30', ch: 'documento', who: null, titulo: 'Medidas de hoy', banner: 'assets/esc/idea.webp', lugar: 'Eviscerado', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: () => `<p>La investigación tomará más tiempo, pero el turno de la tarde entra a las 14:00 y el drenaje se volverá a tapar a las 16:00.</p><p><mark class="clave">Elige las medidas que se aplican hoy mismo</mark>, mientras se investiga.</p>`,
    type: 'builder', prompt: 'Elige las medidas inmediatas para eviscerado.', boton: 'Aplicar las medidas',
    bloques: [
      { id: 'drenaje', t: 'Agua en el piso', n: 1, ops: [
        { id: 'd1', t: 'Destape del drenaje cada dos horas, con un responsable de limpieza asignado y registro en el cuaderno.', ok: true, por: 'Ataca la condición de inmediato.' },
        { id: 'd2', t: 'Cartel de «piso mojado» en la mesa 7.', ok: false, por: 'Avisar que el piso está mojado no lo seca.' },
      ] },
      { id: 'piso', t: 'Piso resbaloso', n: 1, ops: [
        { id: 'p1', t: 'Préstamo hoy de las alfombras sanitizables de la sala de conservas, que se pueden desinfectar, aprobado por Marta.', ok: true, por: 'Cumple inocuidad y seguridad.' },
        { id: 'p2', t: 'Volver a poner las alfombras de goma viejas.', ok: false, por: 'Calidad tiene razón: no se desinfectan.' },
      ] },
      { id: 'botas', t: 'Botas', n: 1, ops: [
        { id: 'b1', t: 'Compra local urgente de las 12 botas de mujer pendientes, en una tienda de Piura, con reposición formal después.', ok: true, por: 'Resuelve hoy lo que se pidió hace meses.' },
        { id: 'b2', t: 'Esperar el pedido de Lima.', ok: false, por: 'Lleva cinco meses esperando.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 3 : 0, tiempo: -1 }, rel: { produccion: q === 'buena' ? 1 : 0 }, flags: q === 'buena' ? ['medidas_inmediatas'] : [],
        cartera: { drenaje: q === 'buena' ? 'Destape cada 2 horas con responsable' : 'Cartel de piso mojado', botas: q === 'buena' ? '12 botas de mujer compradas hoy en Piura' : 'Pendientes' },
        out: q === 'buena' ? 'A las 17:00 llega la camioneta de Logística con doce cajas de botas. Las mujeres de eviscerado se las prueban en el comedor. Rocío camina dos pasos y dice: «Ya no soy pingüino». Carlos, que pasaba, se ríe.' : 'Algo mejora, pero el turno de la tarde trabaja casi igual que el de la mañana.',
        pro: { ok: 'Las medidas inmediatas no reemplazan a la investigación, pero evitan que el mismo hecho se repita mientras se investiga.', info: 'Carlos aceptó la medida del drenaje porque viene con responsable y no le para la línea.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Ya no son pingüinos!' : 'Un cartel no seca el piso.'],
      };
    },
    rules: [[BP, 'Mientras se investiga, se aplican medidas inmediatas que eviten la repetición.']],
    mirada: {
      ve: 'Investigar bien toma tiempo; el piso mojado no espera. Separar medidas inmediatas de medidas de fondo permite actuar hoy sin cerrar la investigación antes de tiempo.',
      visual: { tipo: 'cambio', titulo: 'Eviscerado, mañana y tarde', pares: [['Drenaje destapado al final del turno', 'Cada dos horas, con responsable'], ['Sin alfombras', 'Alfombras sanitizables'], ['Suela lisa', 'Botas talla 36 nuevas']] },
    },
  },
  {
    id: 'f7', t: '17:30', ch: 'whatsapp', who: null, titulo: 'Para Flor', banner: 'assets/esc/meta.webp', lugar: 'Oficina de SST', show: ['personas', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Teresa se fue a su casa en mototaxi, con la muñeca vendada y un táper de arroz con pollo que le mandó Flor. ${F.has('comite_reconvocado') ? 'Mañana, además, es la nueva cita del comité que no tuvo quórum la semana pasada.' : ''}</p><p>El comité debe participar en la investigación. <mark class="clave">Le escribes a Flor</mark>.</p>`,
    type: 'compose', enviaA: 'flor', para: 'Para: Flor Chunga · Representante en el comité', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'invita', t: 'Lo que le pides', ops: [
        { id: 'i1', t: 'Flor, quiero que el comité participe en la investigación de la caída de Teresa desde mañana.', ok: true, por: 'El comité investiga las causas de los accidentes (art. 42).' },
        { id: 'i2', t: 'Flor, mañana te paso el informe de lo de Teresa.', ok: false, por: 'Así el comité solo lee lo que otros decidieron.' },
      ] },
      { id: 'comparte', t: 'Lo que compartes', ops: [
        { id: 'c1', t: 'Te mando las fotos, lo que dijeron Teresa, Rocío, Marta y almacén, y las medidas de hoy.', ok: true, por: 'Con la información completa, el comité puede opinar.' },
        { id: 'c2', t: 'Ya tengo claro qué pasó, no te preocupes.', ok: false, por: 'Cierras la investigación antes de empezarla.' },
      ] },
      { id: 'cuida', t: 'Sobre Teresa', ops: [
        { id: 't1', t: 'Y que Teresa sepa que nadie la va a culpar: lo que buscamos son causas.', ok: true, por: 'La protección también se dice.' },
        { id: 't2', t: 'Dile a Teresa que tenga más cuidado.', ok: false, por: 'Justo lo que ella temía oír.' },
      ] },
    ],
    res: sel => {
      const buenas = ['i1', 'c1', 't1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, cumplimiento: q === 'buena' ? 3 : 0, confianza: q === 'buena' ? 2 : 0 }, rel: { delegada: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? [] : ['comite_investiga'],
        out: q === 'buena' ? 'Flor responde: «Mañana a las 9 estoy en su oficina. Y le aviso algo: Carlos ya está escribiendo su informe. Lo vi en su computadora. Dice «descuido de la trabajadora»».' : q === 'aceptable' ? 'Flor responde: «Ya, inge. Avíseme».' : 'Flor responde con un «ok» seco.',
        pro: { ok: 'El comité participa en la investigación cuando recibe la información y puede opinar antes de que haya conclusiones.', info: 'Si Carlos escribe su propia versión, mañana tendrás dos informes sobre la misma caída.' },
        kusi: [q === 'buena' ? 'sorpresa' : 'pensando', q === 'buena' ? '¿Carlos ya escribió la conclusión?' : 'Que el comité investigue, no solo lea.'],
      };
    },
    rules: [[LEY, 'D.S. 005-2012-TR, art. 42 l): el comité investiga las causas de los incidentes y accidentes; art. 88: con participación de los trabajadores.']],
    mirada: { ve: 'Que el comité investigue no es un gesto democrático: es la forma de que la investigación vea lo que SST sola no ve, y de que las conclusiones tengan respaldo de los trabajadores.' },
  },
];
