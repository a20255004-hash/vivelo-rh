// Asistente de SST · Capítulo 3 · «El arnés» · Semana 1, viernes.
// Hilo del mes: el vaciado del piso 12 de un edificio en obra en Chiclayo.
// Normas citadas:
// - Norma G.050, Seguridad durante la construcción (D.S. 010-2009-VIVIENDA), punto 20.1 «Sistema de detención de caídas»:
//   arnés de cuerpo entero y línea de enganche con amortiguador cuando la caída libre supera 1.80 m o a menos de 1.80 m de
//   bordes sin baranda; anclaje que resista como mínimo 2,265 kg-f; verificación periódica por persona competente con registro;
//   equipo con cortes, abrasiones, quemaduras o cualquier daño se pone fuera de servicio de inmediato; el arnés que soportó una
//   caída se descarta; almacenamiento colgado, en lugar seco, lejos de aceites y objetos cortantes.
//   Punto sobre EPI: inspección visual previa a cada uso; quien recibe un EPI en mal estado lo informa y se gestiona su reemplazo;
//   el EPI debe estar certificado. Texto de la norma: https://buenaventura.com/wp-content/uploads/2024/10/NORMA-G.050-Seguridad-durante-la-construccion-DS-N°-010-2009.pdf
// - Ley 29783: el empleador proporciona equipos de protección personal adecuados (ya citada en el capítulo 1).

export const CAP = {
  n: 3, titulo: 'El arnés', dia: 'Semana 1, miércoles', foto: 'assets/3d/scenes/almacen.webp',
  lugar: 'Constructora Lambayeque · Obra en Chiclayo',
  inicio: '06:40', fin: '18:30', cierreHora: '18:10',
  apertura: 'Miércoles. Wilmer abre el almacén a las 6:40. Hay catorce arneses colgados y tú vas a revisarlos uno por uno.', boton: 'Entrar al almacén',
  kusi: 'Un arnés es la última barrera entre una persona y el suelo. ¡Hoy la revisamos!',
  lead: 'Armaste un checklist, inspeccionaste los arneses, recibiste a la auditora del cliente, enfrentaste el «aguantan» de Don Segundo, conseguiste reemplazos y escuchaste a Jhonatan.',
  reflexion: '¿Qué cuesta más: tres arneses nuevos o una cuadrilla trabajando con miedo?',
  siguiente: { n: 4, titulo: 'El permiso de altura', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'epp', p: 'Arneses y líneas de vida', j: 'Wilmer · Almacén', d: 0, e: 'Inspección hoy' },
  { id: 'iperc', p: 'Matriz IPERC', j: 'Ingrid · SSOMA', d: 0, e: 'Auditoría del cliente a las 9:00' },
  { id: 'piso12', p: 'Vaciado del piso 12', j: 'Don Segundo · Obra', d: 0, e: 'Encofrado desde mañana' },
  { id: 'registro', p: 'Registro de inspecciones', j: 'Ingrid · SSOMA', d: 0, e: 'No existe todavía' },
  { id: 'comite', p: 'Comité de SST', j: 'Marleny · Trabajadores', d: 0, e: 'Sin reunión desde junio' },
];

export const FUTURO = {
  arneses_retirados: ['Pusiste fuera de servicio los arneses dañados, aunque Don Segundo dijo que «aguantan».', 'Tuvo que reorganizar su cuadrilla. Lo recordará en el capítulo 4.'],
  arneses_aguantan: ['Dejaste que usaran arneses dañados «solo por hoy».', 'Uno de ellos volverá a subir al piso 12 en el capítulo 4.'],
  arneses_certificados: ['Conseguiste arneses certificados prestados de la otra obra y los inspeccionaste.', 'La cuadrilla del 12 empezará mañana completa.'],
  arneses_ferreteria: ['Compraste arneses sin certificación en una ferretería.', 'Ingrid los encontrará en el capítulo 4.'],
  jhonatan_habla: ['Jhonatan se animó a contarte que su arnés estaba mal.', 'Te avisará cuando vea algo raro. Capítulo 5.'],
  auditoria_honesta: ['Le mostraste a la auditora del cliente los arneses dañados y el plan para cambiarlos.', 'El cliente confiará en tus reportes el día del vaciado. Capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'SSOMA Obra Chiclayo', sub: 'Ingrid y tú', c: '#F2A900' },
  ingrid: { n: 'Ing. Ingrid Delgado', sub: 'Supervisora SSOMA', who: 'ingrid' },
  segundo: { n: 'Don Segundo Vílchez', sub: 'Maestro de obra', who: 'segundo' },
  renzo: { n: 'Ing. Renzo Cáceres', sub: 'Residente de obra', c: '#3B6EA8' },
  wilmer: { n: 'Wilmer Tantaleán', sub: 'Almacén de obra', c: '#7A5C3E' },
};

export const WSP = [
  { chat: 'wilmer', t: '06:20', de: 'Wilmer', txt: 'Ingeniera, ya estoy abriendo. Los arneses están en el fondo, al lado de los bidones 🙏' },
  { chat: 'grupo', t: '06:30', de: 'Ingrid', txt: 'La matriz actualizada quedó bien anoche. Renzo la firma a las 7:30, refunfuñando 😅', si: 'matriz_real' },
  { chat: 'grupo', t: '06:30', de: 'Ingrid', txt: 'Hoy viene la auditora del cliente. Ojo con la matriz que firmaron ayer. Hablamos.', si: 'matriz_fecha' },
  { chat: 'renzo', t: '10:55', de: 'Renzo', txt: '¿Es cierto que bajaste a tres de encofrado? Mañana empezamos el 12, ¿ya sabes eso?' },
  { chat: 'grupo', t: '13:40', de: 'Ingrid', txt: 'Las dos líneas de vida certificadas llegan mañana temprano de Trujillo ✅', si: 'lineas_pedidas' },
];

export const CORREOS = [
  { t: '07:10', de: 'Ing. Patricia Salazar', para: 'SSOMA Obra Chiclayo', asunto: 'Auditoría documentaria · miércoles 9:00', html: '<p>Buenos días. Hoy a las 9:00 revisaré la matriz IPERC, el registro de inspecciones de equipos de protección contra caídas y los registros de capacitación.</p><p>Les pido tener los documentos impresos y a una persona del área que pueda explicarlos.</p><p>Patricia Salazar · Supervisión del cliente</p>' },
];

export const QUIZ = [
  { q: 'Según la Norma G.050, ¿desde qué altura de caída libre se exige un sistema de detención de caídas?', ops: ['Desde 0.50 m', 'Más de 1.80 m', 'Desde 5 m', 'Solo sobre el piso 10'], ok: 1, por: 'La G.050 lo exige cuando la caída libre supera 1.80 m, y también cerca de bordes sin baranda.' },
  { q: 'Un arnés tiene una cinta con abrasión y un corte pequeño. ¿Qué dice la G.050?', ops: ['Se usa con cuidado', 'Se pone fuera de servicio de inmediato', 'Se cose y se sigue usando', 'Se usa solo en pisos bajos'], ok: 1, por: 'Ante cortes, abrasiones, quemaduras o cualquier daño, el equipo se pone fuera de servicio de inmediato.' },
  { q: '¿Qué se hace con un arnés que detuvo la caída de un trabajador?', ops: ['Se revisa y se reutiliza', 'Se descarta', 'Se guarda como repuesto', 'Se presta a otra obra'], ok: 1, por: 'La G.050 pide descartar de inmediato todo arnés o línea de vida que haya soportado una caída.' },
  { q: '¿Quién debe revisar el arnés antes de cada uso?', ops: ['Solo el almacenero', 'El propio trabajador, con una inspección visual', 'Nadie, si es nuevo', 'El cliente'], ok: 1, por: 'La G.050 pide al trabajador una inspección visual previa a cada uso, además de las verificaciones periódicas.' },
  { q: '¿Dónde deben guardarse los arneses?', ops: ['En una caja junto a los bidones de petróleo', 'Colgados, en un lugar seco y aireado, lejos de aceites', 'En la mochila de cada trabajador', 'En el piso del almacén'], ok: 1, por: 'Aceites, grasas, humedad y objetos cortantes dañan las cintas.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '06:45', ch: 'documento', who: null, titulo: 'Tu checklist', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Almacén de obra', show: ['calidad', 'cumplimiento'],
    body: (n, F) => `<p>El almacén huele a petróleo y a cartón mojado. Wilmer, 52 años, de Cutervo, prende el foco y te señala el fondo: los arneses cuelgan de un fierro, al lado de dos bidones.${F.has('arneses_alerta') ? ' «Ya le dije, ingeniera: unos están viejitos.»' : ' «¿Los va a revisar todos? Nadie los revisa desde que llegaron.»'}</p><p>Antes de tocar el primero, armas tu checklist. <mark class="clave">Lo que no está en la lista, no se revisa</mark>.</p>`,
    type: 'builder', prompt: 'Elige qué revisarás en cada parte del equipo.', boton: 'Empezar la inspección',
    bloques: [
      { id: 'cintas', t: 'En las cintas', n: 2, ops: [
        { id: 'c1', t: 'Cortes, abrasiones, hilos sueltos o quemaduras, doblando la cinta en U para ver las fibras.', ok: true, por: 'Así se ven los daños que una cinta estirada esconde.' },
        { id: 'c2', t: 'Manchas de aceite, pintura o químicos y costuras abiertas.', ok: true, por: 'Los químicos debilitan la fibra aunque no se vea un corte.' },
        { id: 'c3', t: 'Que el color siga vistoso.', ok: false, por: 'El color no dice nada de la resistencia.' },
      ] },
      { id: 'herrajes', t: 'En los herrajes', n: 1, ops: [
        { id: 'h1', t: 'Hebillas, argolla dorsal y mosquetones: deformaciones, óxido y que el doble seguro cierre solo.', ok: true, por: 'Un mosquetón que no cierra solo puede abrirse en una caída.' },
        { id: 'h2', t: 'Que no hagan ruido al moverlos.', ok: false, por: 'El ruido no es un criterio de seguridad.' },
      ] },
      { id: 'registro', t: 'En el registro', n: 2, ops: [
        { id: 'r1', t: 'Código del arnés, fecha, resultado y quién lo revisó.', ok: true, por: 'La G.050 pide un registro de las inspecciones hasta el final de la obra.' },
        { id: 'r2', t: 'Si sostuvo una caída alguna vez, y su etiqueta del fabricante.', ok: true, por: 'Un arnés que detuvo una caída se descarta.' },
        { id: 'r3', t: 'El nombre del obrero que lo pierda, para descontárselo.', ok: false, por: 'El EPP lo provee el empleador. Un registro para castigar hace que la gente esconda los daños.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .8 ? 'buena' : k >= .5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -2, cumplimiento: q === 'buena' ? 3 : 0 },
        flags: [q === 'riesgosa' ? 'checklist_flojo' : 'checklist_listo'], cartera: { registro: q === 'riesgosa' ? 'Checklist incompleto' : 'Checklist de arneses listo' },
        out: q === 'buena' ? 'Tu checklist cabe en una hoja: cintas, herrajes y registro. Wilmer lo lee por encima de tu hombro: «Así sí sabe uno qué mirar».' : 'Tu checklist mira el equipo por fuera, pero no por dentro.',
        pro: { ok: 'Un checklist convierte la inspección en algo que cualquiera puede repetir igual.', info: 'Deja una copia en el almacén: la inspección periódica no puede depender de que tú estés.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Lista para revisar como profesional!' : 'Dobla la cinta: ahí se esconde el daño.'],
      };
    },
    rules: [[LEY, 'Norma G.050, 20.1: los equipos de detención de caídas se verifican periódicamente por una persona competente, que mantiene un registro de las inspecciones hasta el final de la obra.']],
    mirada: {
      ve: 'Inspeccionar no es mirar por encima. Es revisar siempre lo mismo, en el mismo orden, y dejarlo escrito. El registro permite saber qué equipo está sano, cuál se retiró y por qué.',
      visual: { tipo: 'flujo', titulo: 'Inspección de un arnés', pasos: ['Etiqueta y código', 'Cintas en U', 'Costuras', 'Herrajes y mosquetones', 'Resultado en el registro'] },
    },
  },
  {
    id: 'a2', t: '07:30', ch: 'documento', who: null, titulo: 'Catorce arneses', banner: 'assets/foto2/revisan.webp', lugar: 'Almacén de obra', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: () => `<p>Descuelgas los arneses uno por uno y los extiendes sobre una parihuela. La charla de las 7:00 la dio Ingrid hoy, para que tú pudieras terminar. Tienes las manos negras de grasa.</p><p>Anotas lo que ves en tu hoja de inspección. <mark class="clave">Ahora decide qué equipos no pueden subir</mark>.</p>`,
    type: 'flag', prompt: 'Marca los arneses o condiciones que deben ponerse fuera de servicio o corregirse.',
    doc: { t: 'Hoja de inspección de arneses', sub: 'Almacén de obra · Edificio Los Algarrobos · miércoles' },
    lines: [
      { id: 'a03', t: 'Arnés A-03: cinta pectoral con abrasión y dos hilos cortados.', bad: LEY, why: 'La G.050 manda poner fuera de servicio de inmediato todo equipo con cortes o abrasiones.' },
      { id: 'a07', t: 'Arnés A-07: mancha de aceite en la cinta de la pierna, fibra endurecida.', bad: LEY, why: 'El daño por químicos debilita la fibra: es deterioro y el equipo sale de servicio.' },
      { id: 'a09', t: 'Arnés A-09: buen estado. Wilmer dice que «paró a un muchacho» en la obra de Lambayeque.', bad: LEY, why: 'Un arnés que soportó una caída se descarta, aunque se vea bien.' },
      { id: 'a01', t: 'Arneses A-01, A-02, A-04 a A-06, A-08, A-10 a A-14: sin daños visibles, etiqueta legible.' },
      { id: 'guardado', t: 'Los arneses se guardan colgados junto a dos bidones de petróleo.', bad: BP, why: 'La G.050 pide guardarlos en un lugar seco y aireado, lejos de aceites y grasas.' },
      { id: 'lineas', t: 'Líneas de enganche: catorce, con amortiguador y doble mosquetón.' },
      { id: 'sinreg', t: 'No existe registro de inspecciones anteriores.', bad: LEY, why: 'La G.050 pide verificar periódicamente y llevar un registro hasta el final de la obra.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Separas dos arneses con cinta roja. Wilmer duda: «¿Y el 09? Ese está nuevecito». Lo dejas colgado con los demás.' : `Separas ${hitsLey >= 3 ? 'tres arneses' : 'los arneses dañados'} con cinta roja y escribes «FUERA DE SERVICIO» con plumón. Wilmer los mira: «Entonces quedan once. Y Segundo necesita catorce».`,
      flags: missLey ? ['a09_en_uso'] : ['tres_fuera'], rel: {},
      cartera: { epp: missLey ? 'Dos retirados; el A-09 sigue en uso' : '3 arneses fuera de servicio: quedan 11', registro: 'Primera inspección registrada' },
      pro: { ok: 'Un arnés con daño o que ya sostuvo una caída no se negocia: sale de servicio.', risk: 'Lo que no se ve también cuenta: el A-09 parece nuevo y ya hizo su trabajo una vez.', info: 'Mueve los arneses lejos de los bidones hoy mismo: es la causa del A-07.' },
      kusi: missLey ? ['preocupado', '¿Y el que ya paró una caída?'] : ['celebra', '¡Ojo fino! Hasta el que parecía nuevo.'],
    }),
    rules: [[LEY, 'Norma G.050, 20.1: equipo con cortes, abrasiones, quemaduras o cualquier daño se pone fuera de servicio de inmediato; el arnés que soportó una caída se descarta.']],
    mirada: {
      ve: 'Retirar un equipo tiene costo: menos gente puede subir. Por eso la inspección es la parte más incómoda del trabajo. Si el criterio cambia según la prisa del día, deja de ser un criterio.',
      visual: { tipo: 'embudo', titulo: 'Los catorce arneses', niveles: [['Arneses en el almacén', 14], ['Sin daños visibles', 12], ['Aptos para subir', 11]] },
      normas: [{ ley: 'Norma G.050, punto 20.1', dice: 'Si se observan cortes, abrasiones, quemaduras o cualquier daño o deterioro, el equipo se pone fuera de servicio de inmediato. Todo arnés que haya soportado una caída se descarta.', practica: 'El A-03, el A-07 y el A-09 no suben al piso 12, aunque falten tres.' }],
    },
  },
  {
    id: 'a3', t: '09:05', ch: 'presencial', who: null, titulo: 'La auditora', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Oficina de obra', show: ['confianza', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>La ingeniera Patricia Salazar, de la supervisión del cliente, llega puntual con un termo de café y una tablet. Tiene unos 50 años y fama de leer todo.${F.has('matriz_fecha') ? ' Pasa las hojas de la matriz y se detiene en la primera: «Dice octubre, pero solo llega al piso 8. ¿Me explican?». Renzo mira al techo.' : F.has('matriz_real') ? ' Pasa las hojas de la matriz y se detiene en las filas del piso 12: «Esto se nota hecho en obra. Bien».' : ''}</p><p>Luego te mira a ti: «¿Y el registro de inspección de arneses?». <mark class="clave">Lo tienes desde hace una hora, con tres equipos en rojo</mark>.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Mostrarle la hoja tal como está: tres arneses fuera de servicio, la causa del aceite y el plan para reponerlos antes de mañana.',
        res: { q: null, fx: { confianza: 4, etica: 3, cumplimiento: 2 }, flags: ['auditoria_honesta'], cartera: { registro: 'Presentado al cliente con hallazgos y plan' },
          out: 'Patricia escribe un buen rato. «Observación menor: no había registro hasta hoy. Pero el hallazgo de hoy está bien hecho y con plan. Eso es lo que quiero ver.» Renzo suelta el aire.', kusi: ['celebra', 'Mostrar el problema con su plan genera confianza.'] } },
      { id: 'b', label: 'Decirle que el registro está en elaboración y que se lo envías el viernes, cuando ya estén repuestos los arneses.',
        res: { q: null, fx: { confianza: -2, cumplimiento: -2 }, cartera: { registro: 'No presentado al cliente' },
          out: 'Patricia anota: «Sin registro de inspección de equipos contra caídas». Es una observación mayor. Renzo te mira como diciendo «¿para eso tanto lío?».', kusi: ['pensando', 'Lo tenías… y no lo mostraste.'] } },
    ],
    rules: [[BP, 'Un hallazgo con su plan de acción es una fortaleza en una auditoría, no una debilidad.']],
    mirada: { ve: 'Las auditorías del cliente son frecuentes en construcción. Quien audita sabe que en una obra siempre hay problemas; lo que busca es si el área los encuentra y los corrige. Esconder un hallazgo suele costar más que mostrarlo.' },
  },
  {
    id: 'a4', t: '10:20', ch: 'presencial', who: 'segundo', titulo: '«Aguantan, ingeniera»', banner: 'assets/foto2/tension.webp', lugar: 'Puerta del almacén', show: ['etica', 'cumplimiento', 'personas', 'tiempo'],
    body: (n, F) => `<p>Don Segundo llega con el capataz de encofrado. Hoy toca armar el encofrado del borde del piso 11 para preparar el 12, y necesita a sus catorce arriba. Ve la cinta roja y levanta el A-03 con una mano.</p><p>«¿Esto? Son dos hilitos, ingeniera. <mark class="clave">Aguantan</mark>. Yo he subido con peores. ${F.has('tarea_parada') ? 'El lunes me paró a Jhonatan quince minutos, ahora me para a tres hombres un día entero.' : 'No me venga a parar la obra por dos hilitos.'}»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mantener los tres fuera de servicio y proponerle a Don Segundo un cambio: once suben a encofrar y tres se quedan armando paneles en el piso 10, sobre losa y lejos del borde, hasta que lleguen los reemplazos.',
        res: { q: 'buena', fx: { etica: 5, cumplimiento: 5, tiempo: -2, personas: 2 }, rel: { segundo: 0 }, flags: ['arneses_retirados'], cartera: { epp: '3 fuera de servicio · cuadrilla reorganizada', piso12: 'Encofrado del 11 con 11 personas hoy' },
          out: 'Don Segundo se queda mirando el arnés un rato largo. «Paneles en el 10… ya pues. Pero mañana quiero mis catorce.» No te da la razón, pero tampoco te la quita. El capataz ya está repartiendo a la gente.',
          pro: { ok: 'Sostienes el criterio y le das al maestro de obra una forma de no perder el día.', risk: 'Si no consigues reemplazos para mañana, el argumento de Segundo crecerá.', info: 'Que los arneses retirados no vuelvan al almacén: córtalos o guárdalos bajo llave.' },
          kusi: ['animo', 'Firme con el arnés, flexible con el plan.'] } },
      { id: 'b', label: 'Dejar que usen los tres solo hoy, en el piso 11, con la condición de que mañana ya no suban.',
        res: { q: 'riesgosa', fx: { etica: -6, cumplimiento: -5, tiempo: 2 }, rel: { segundo: 1 }, flags: ['arneses_aguantan'], cartera: { epp: '3 arneses dañados en uso «solo hoy»' },
          out: 'Don Segundo te da una palmada: «Así me gusta». Los tres arneses suben al piso 11. La cinta roja queda tirada en el piso del almacén.',
          pro: { ok: 'Evitas el conflicto y la obra avanza.', risk: 'Un arnés dañado no aguanta menos «solo hoy». Si alguien cae, nadie preguntará quién cedió.' },
          kusi: ['preocupado', '¿Solo hoy? Una caída tarda un segundo.'] } },
      { id: 'c', label: 'Prohibir que suba cualquiera hasta tener los catorce arneses en buen estado.',
        res: { q: 'aceptable', fx: { etica: 3, cumplimiento: 3, tiempo: -5, personas: -2 }, rel: { segundo: -1 }, flags: ['arneses_retirados'], cartera: { epp: 'Trabajo en altura detenido todo el día' },
          out: 'Don Segundo se va sin decir nada y llama a Renzo. Media hora después, Renzo te escribe. La cuadrilla pasa el día ordenando el patio. Nadie se cayó, pero perdiste a un aliado para mañana.',
          pro: { ok: 'Nadie usa un equipo dañado.', risk: 'Paraste más de lo necesario: once arneses estaban sanos. La próxima vez Segundo dudará antes de llamarte.' },
          kusi: ['pensando', 'Seguro… pero ¿proporcional?'] } },
    ],
    rules: [[LEY, 'Norma G.050, 20.1: el equipo dañado se pone fuera de servicio de inmediato.'], [BP, 'Detén lo que es peligroso y busca la forma de que lo demás siga. Parar todo sin necesidad desgasta tu autoridad.']],
    mirada: {
      ve: 'El «aguantan» es una de las frases más peligrosas en una obra. Viene de alguien con experiencia que nunca ha visto romperse un arnés, porque cuando se rompe, el que lo usaba ya no lo cuenta. Tu trabajo es sostener el criterio sin humillar esa experiencia.',
      visual: { tipo: 'balanza', a: { t: '«Aguantan»', items: ['Treinta años de oficio', 'Catorce hombres arriba', 'Cero retraso hoy'] }, b: { t: 'Fuera de servicio', items: ['La norma no deja dudas', 'Nadie cae con un arnés roto', 'Tres hombres en otra tarea'] } },
    },
  },
  {
    id: 'a5', t: '12:10', ch: 'llamada', who: null, titulo: 'Tres arneses para mañana', banner: 'assets/foto/llamada.webp', lugar: 'Caseta de SSOMA', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>El almuerzo es un sánguche de chicharrón comido de pie. ${F.has('arneses_aguantan') ? 'Aunque hoy subieron con los arneses dañados, ' : ''}Necesitas tres arneses para mañana, cuando empieza el encofrado del 12.</p><p>Haces tres llamadas. <mark class="clave">Barato, rápido o certificado: elige bien</mark>.</p>`,
    type: 'calls',
    calls: [['Ferretería en la avenida Balta', 'Contesta el dueño', '«Tengo arneses a ochenta soles, ingeniera, se los mando hoy en mototaxi. ¿Certificado? Bueno, tienen su etiqueta en chino, pero aguantan bien.»'], ['Proveedor de EPP en Lima', 'Contesta una vendedora', '«Arneses certificados con su ficha técnica, sí. Por Olva le llegan a Chiclayo en tres o cuatro días hábiles. Para mañana no llego, ingeniera.»'], ['Obra de la constructora en Lambayeque', 'Contesta el prevencionista, Carlos', '«Tengo cuatro arneses certificados de reserva, con su registro de inspección. Te los presto si alguien viene a recogerlos hoy. Revísalos igual, ¿ya?»']],
    prompt: '¿Cómo consigues los tres arneses?',
    choices: [
      { id: 'a', label: 'Pedir prestados los de Lambayeque, mandar a recogerlos en la camioneta de la obra, inspeccionarlos con tu checklist y comprar los certificados de Lima para devolverlos.',
        res: { q: 'buena', fx: { cumplimiento: 4, tiempo: -1, calidad: 3 }, flags: ['arneses_certificados'], cartera: { epp: '3 arneses prestados e inspeccionados; compra en camino' },
          out: 'A las 4:30 llega la camioneta con polvo de la carretera a Lambayeque. Revisas los cuatro: uno tiene un mosquetón que no cierra solo. Te quedas con tres. Mañana la cuadrilla estará completa.',
          pro: { ok: 'Rápido y certificado, sin saltarte la inspección.', info: 'Revisar los equipos prestados te ahorró un mosquetón defectuoso.' },
          kusi: ['celebra', '¡Rápido, seguro y revisado!'] } },
      { id: 'b', label: 'Comprar tres en la ferretería: llegan hoy y son baratos.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, tiempo: 3, calidad: -3 }, flags: ['arneses_ferreteria'], cartera: { epp: '3 arneses sin certificación comprados' },
          out: 'El mototaxi los deja a las 2. Tienen las costuras disparejas y ninguna ficha técnica. Wilmer los cuelga, lejos de los bidones esta vez.',
          pro: { ok: 'Resuelves el problema hoy.', risk: 'La G.050 pide que el EPP esté certificado. Un arnés barato sin certificación es una incógnita colgada a 30 metros.' },
          kusi: ['preocupado', '¿Etiqueta en chino y «aguantan»? Otra vez esa palabra.'] } },
      { id: 'c', label: 'Pedir los certificados a Lima y esperar, aunque no lleguen para mañana.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, tiempo: -3 }, cartera: { epp: 'Compra certificada en camino: 3-4 días' },
          out: 'Los equipos serán buenos, pero mañana Segundo tendrá once arneses para catorce personas. Ya sabes cómo va a empezar esa conversación.',
          pro: { ok: 'Compras lo correcto.', risk: 'No exploraste una salida para mañana, y la presión caerá sobre ti.' },
          kusi: ['pensando', 'Bien comprado… pero ¿y mañana?'] } },
    ],
    rules: [[LEY, 'Norma G.050: el equipo de protección personal debe cumplir las Normas Técnicas Peruanas o normas internacionales y estar certificado.']],
    mirada: {
      ve: 'Conseguir un equipo es parte del trabajo de Seguridad. Entre lo barato, lo rápido y lo certificado, casi siempre hay una cuarta opción: pedir ayuda a otra obra, a otra área o a otra empresa. Y aun así, lo que llega se inspecciona.',
      visual: { tipo: 'matriz', x: 'Rapidez', y: 'Seguridad', cuadrantes: ['Seguro y lento', 'Seguro y rápido', 'Inseguro y lento', 'Inseguro y rápido'], items: [['Prestados de Lambayeque', .8, .85], ['Certificados de Lima', .2, .9], ['Ferretería sin certificación', .9, .2]] },
    },
  },
  {
    id: 'a6', t: '15:30', ch: 'presencial', who: 'jhonatan', titulo: 'Lo que no se atrevía a decir', banner: 'assets/foto/taller.webp', lugar: 'Detrás de la mezcladora', show: ['personas', 'confianza', 'etica'],
    body: (n, F) => `<p>Jhonatan te alcanza detrás de la mezcladora, mirando a los lados. ${F.has('tarea_parada') ? 'Desde el lunes te saluda distinto.' : 'Desde el lunes casi no te mira.'}</p><p>«Ingeniera… el arnés que me dieron el mes pasado tiene la hebilla de la pierna floja. Se suelta sola. No dije nada porque <mark class="clave">si digo, me bajan a cargar bolsas y gano menos</mark>. Y yo quiero aprender a encofrar.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Agradecerle, cambiarle el arnés ahí mismo y enseñarle en cinco minutos a revisarlo antes de cada uso. Decirle que avisar no lo va a bajar de puesto.',
        res: { q: null, fx: { personas: 4, confianza: 3, cumplimiento: 2 }, rel: { jhonatan: 1 }, flags: ['jhonatan_habla'], cartera: { registro: 'Arnés de Jhonatan: hebilla defectuosa, reemplazado' },
          out: 'Jhonatan dobla la cinta en U como le enseñas y prueba la hebilla nueva dos veces. Se ríe por primera vez. «¿Y si veo algo raro en otro, le digo?» «Me dices.»', kusi: ['feliz', '¡Un par de ojos más en la obra!'] } },
      { id: 'b', label: 'Cambiarle el arnés y recordarle que debió avisar el primer día: es su obligación.',
        res: { q: null, fx: { cumplimiento: 2, personas: -1 }, cartera: { registro: 'Arnés de Jhonatan reemplazado' },
          out: 'Jhonatan asiente con la cabeza gacha: «Sí, ingeniera, disculpe». Tiene arnés nuevo. La próxima vez que vea algo, lo pensará dos veces.', kusi: ['pensando', 'Tenías razón… pero él escuchó un reproche.'] } },
    ],
    rules: [[LEY, 'Norma G.050: el trabajador que recibe un EPP en mal estado debe informarlo, y su superior debe gestionar el reemplazo.'], [BP, 'Si avisar tiene castigo, la gente calla. Agradece cada reporte.']],
    mirada: { ve: 'El miedo a perder ingresos es una de las razones más comunes por las que un trabajador no reporta un peligro. Un sistema de seguridad funciona cuando avisar es fácil y no cuesta nada al que avisa.' },
  },
  {
    id: 'a7', t: '17:40', ch: 'whatsapp', who: null, titulo: 'Para Don Segundo', banner: 'assets/esc/meta.webp', lugar: 'Portón de la obra', show: ['personas', 'confianza'],
    body: (n, F) => `<p>La obra se vacía. Los obreros salen con sus mochilas hacia los paraderos de la avenida, algunos en bicicleta hacia José Leonardo Ortiz. ${F.has('arneses_retirados') ? 'Don Segundo se fue sin despedirse.' : 'Don Segundo se fue contento.'}</p><p>Mañana empieza el encofrado del 12 y vas a necesitarlo de tu lado. <mark class="clave">Le escribes antes de que termine el día</mark>.</p>`,
    type: 'compose', enviaA: 'segundo', para: 'Para: Don Segundo Vílchez · Maestro de obra', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'reconoce', t: 'Cómo empiezas', ops: [
        { id: 'r1', t: 'Don Segundo, gracias por reorganizar a su gente hoy. Sé que le complicó el día.', ok: true, por: 'Reconoces su esfuerzo sin retroceder en la decisión.' },
        { id: 'r2', t: 'Don Segundo, le recuerdo que los arneses dañados no se usan.', ok: false, por: 'Repetir la orden por WhatsApp suena a reproche.' },
      ] },
      { id: 'dato', t: 'Lo que le cuentas', ops: [
        { id: 'd1', t: 'Mañana tendremos los catorce arneses revisados, y temprano llegan dos líneas de vida certificadas para el 12.', ok: true, por: 'Le das lo que más le importa: su cuadrilla completa.' },
        { id: 'd2', t: 'Ya veremos qué arneses tenemos mañana.', ok: false, por: 'Le confirmas su peor miedo.' },
      ] },
      { id: 'invita', t: 'Lo que le pides', ops: [
        { id: 'i1', t: '¿Revisamos juntos mañana a las 6:30 los anclajes del 12, antes de que suba la cuadrilla? Usted sabe dónde va cada cosa.', ok: true, por: 'Lo invitas como experto, no como vigilado.' },
        { id: 'i2', t: 'Mañana paso a supervisar a su cuadrilla.', ok: false, por: '«Supervisar» suena a desconfianza.' },
      ] },
    ],
    res: sel => {
      const buenas = ['r1', 'd1', 'i1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 1 : -3, confianza: q === 'buena' ? 3 : 0 }, rel: { segundo: q === 'buena' ? 1 : q === 'riesgosa' ? -1 : 0 },
        flags: q === 'riesgosa' ? [] : ['segundo_anclajes'], cartera: { piso12: q === 'riesgosa' ? 'Sin coordinar con Segundo' : 'Revisión de anclajes con Segundo: jueves 6:30' },
        out: q === 'buena' ? 'A las 8 de la noche llega la respuesta: «Ya, ingeniera. 6:30. Y traiga su checklist ese». Es lo más parecido a un «bien hecho» que vas a recibir de él.' : q === 'aceptable' ? 'Don Segundo responde con un audio corto: «Ya. El martes vemos».' : 'Don Segundo deja el mensaje en visto.',
        pro: { ok: 'Reconocer el costo de tu decisión y pedirle su experiencia lo vuelve parte de la solución.', risk: 'Si el mensaje suena a orden, mañana empezarán en guerra.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Don Segundo te pidió el checklist!' : 'Reconoce, informa e invita.'],
      };
    },
    rules: [[BP, 'Después de una decisión difícil, reconoce el esfuerzo del otro y ofrece un camino conjunto.']],
    mirada: {
      ve: 'La prevención en obra depende de la relación con el maestro de obra. Una decisión firme seguida de un gesto de respeto suele ganar más que una discusión ganada a gritos.',
      visual: { tipo: 'mensaje', titulo: 'Tu mensaje', txt: 'Gracias por reorganizar a su gente hoy. Mañana tendremos los catorce arneses revisados y dos líneas de vida certificadas. ¿Revisamos juntos los anclajes del 12 a las 6:30? Usted sabe dónde va cada cosa.' },
    },
  },
];
