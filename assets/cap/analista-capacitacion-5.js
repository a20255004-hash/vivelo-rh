// Analista de Capacitación y Desarrollo · Capítulo 5 · «El taller» · Semana 1, viernes.
// Hilo de las dos semanas: demostrar que la capacitación cambia resultados en una financiera con la mora en alza.
// Normas citadas:
// - Ley 29571, Código de Protección y Defensa del Consumidor, art. 62: métodos abusivos de cobranza
//   (personas ajenas a la deuda; llamadas o visitas entre las 20:00 y las 07:00; documentos que aparenten ser judiciales).
//   https://www.leyes.congreso.gob.pe/Documentos/Leyes/29571.pdf
// - Los niveles de evaluación (reacción, aprendizaje, aplicación, resultados) se presentan como buena práctica, sin cifras.

export const CAP = {
  n: 5, titulo: 'El taller', dia: 'Semana 1, viernes', foto: 'assets/foto/capacitacion.webp',
  lugar: 'Financiera Chimú · Agencia El Porvenir',
  inicio: '06:30', fin: '18:30', cierreHora: '18:10',
  apertura: 'Viernes, 6:30 a. m. Tu primer taller empieza a las 8:00 en El Porvenir. Todavía estás en casa, con el café en la mano.', boton: 'Revisar el diseño',
  kusi: 'Hoy facilitas, no dictas. ¡Que hablen ellos!',
  lead: 'Cerraste el diseño a las seis de la mañana, sobreviviste a un proyector muerto, diste retroalimentación en plena práctica, negociaste con Víctor delante de todos y mediste lo que aprendieron.',
  reflexion: '¿En qué momento del taller sentiste que aprendían de verdad?',
  siguiente: { n: 6, titulo: 'No los suelto', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'diseno', p: 'Diseño del taller de 90 minutos', j: 'Tú · Desarrollo', d: 0, e: 'Casi listo' },
  { id: 'sala', p: 'Sala y equipos de la agencia', j: 'Nando · Agencia', d: 0, e: 'Proyector «operativo»' },
  { id: 'practica', p: 'Práctica de cobranza en parejas', j: 'Sandra · Facilitadora', d: 0, e: 'Casos de El Porvenir' },
  { id: 'prueba', p: 'Prueba de entrada y salida', j: 'Tú · Desarrollo', d: 0, e: '10 preguntas' },
  { id: 'piloto', p: 'Piloto ante Víctor', j: 'Víctor · Negocios', d: 0, e: 'Hoy, 8:00' },
];

export const FUTURO = {
  taller_practico: ['Diseñaste un taller donde la mayor parte del tiempo se practica con casos reales.', 'Se notará en campo. Capítulo 8.'],
  taller_expositivo: ['Tu taller fue sobre todo exposición.', 'En campo se notará poco. Capítulo 8.'],
  victor_participo: ['Víctor hizo de «cliente difícil» en la práctica y se quedó hasta el final.', 'Lo recordará cuando quiera quitarte horas. Capítulo 6.'],
  victor_se_llevo: ['Víctor se llevó a cinco asesores a mitad del taller.', 'El piloto quedó incompleto. Capítulo 6.'],
  feedback_privado: ['Corregiste en la práctica sin exponer a nadie.', 'Los asesores te buscarán en campo. Capítulo 6.'],
  prueba_honesta: ['Reportaste los resultados completos, incluidos quienes no aprobaron.', 'Te dará credibilidad con Finanzas. Capítulo 8.'],
  prueba_maquillada: ['Reportaste solo a quienes aprobaron.', 'Mario lo descubrirá. Capítulo 8.'],
  refuerzo_campo: ['Programaste acompañamiento en campo para quienes no aprobaron.', 'Víctor tendrá que soltar horas otra vez. Capítulo 6.'],
  compromisos_asesores: ['Cada asesor dijo qué aplicará mañana en la calle.', 'Lo revisarás en el capítulo 8.'],
  sandra_reconocida: ['Le diste a Sandra un reconocimiento concreto, con copia a Víctor.', 'Capítulo 9.'],
};

export const CHATS = {
  grupo: { n: 'Desarrollo · Chimú', sub: 'Lorena y tú', c: '#2F6B3F' },
  lorena: { n: 'Lorena Villanueva', sub: 'Jefa de Desarrollo', who: 'lorena' },
  victor: { n: 'Víctor Alvarado', sub: 'Gerente regional', who: 'victor' },
  sandra: { n: 'Sandra Rojas', sub: 'Asesora de negocios', who: 'sandra' },
  ronald: { n: 'Ronald Mejía', sub: 'Proveedor', who: 'ronald' },
  nando: { n: 'Nando Cruz', sub: 'Administrador · Agencia El Porvenir', c: '#8A5A2B' },
  kevin: { n: 'Kevin Paredes', sub: 'Asesor · El Porvenir', c: '#3D6E8F' },
};

export const WSP = [
  { chat: 'sandra', t: '06:35', de: 'Sandra', txt: 'No dormí casi nada 😅 Ya tengo mis tres casos impresos. Si me quedo en blanco, me salvas, ¿ya?' },
  { chat: 'nando', t: '07:10', de: 'Nando', txt: 'Buenos días. Víctor mandó a 9 asesores más de La Esperanza y Florencia de Mora. Son 20. Sillas hay, mesas no tanto.' },
  { chat: 'nando', t: '07:12', de: 'Nando', txt: 'Ah, y no le pidan nada al proveedor, ¿ya? Con tanto lío del otro día…', si: 'presion_confrontada' },
  { chat: 'grupo', t: '07:30', de: 'Lorena', txt: '¡Hoy es tu día! Mándame una foto cuando estén practicando, no cuando estén mirando el proyector 😉' },
  { chat: 'victor', t: '08:05', de: 'Víctor', txt: 'Llego 8:30, se me cruzó una reunión con el banco.', no: 'victor_noche' },
  { chat: 'victor', t: '08:05', de: 'Víctor', txt: 'Llego 8:30. No sé para qué otro taller si ya hicieron el virtual, pero ya.', si: 'victor_noche' },
  { chat: 'kevin', t: '12:15', de: 'Kevin', txt: 'Señorita, hoy en la tarde voy a donde don Julio con el acuerdo por escrito. Ya no lo llamo de noche 😅', si: 'kevin_llamo_noche' },
  { chat: 'kevin', t: '12:15', de: 'Kevin', txt: 'Gracias por lo de hoy. Es la primera vez que practico antes de hacerlo de verdad 🙏', si: 'kevin_confia' },
  { chat: 'sandra', t: '18:00', de: 'Sandra', txt: 'Me leí tu mensaje tres veces. Mi mamá también 🥲', si: 'sandra_reconocida' },
];

export const CORREOS = [
  { t: '06:20', de: 'TI · Mesa de ayuda', para: 'Analista de Capacitación y Desarrollo', asunto: 'RE: Proyector agencia El Porvenir', html: '<p>Buenos días. El proyector de la agencia figura como «operativo» en el inventario. Si presenta fallas, por favor registre un ticket. Tiempo de atención: 48 horas hábiles.</p><p>Mesa de ayuda</p>' },
  { t: '11:50', de: 'Lorena Villanueva', para: 'Analista de Capacitación y Desarrollo', asunto: 'Resultados del piloto', html: '<p>¡Vi las fotos! Cuando tengas la prueba de salida, mándame los resultados completos. Mario me preguntó a las 9:15 si «ya bajó la mora» 🙄. Le dije que hoy medimos aprendizaje, no mora.</p><p>Lorena</p>' },
];

export const QUIZ = [
  { q: 'En un taller para adultos que ya trabajan, ¿qué parte suele producir más aprendizaje aplicable?', ops: ['La exposición con diapositivas', 'La práctica con casos de su propio trabajo y retroalimentación', 'El video motivacional', 'El coffee break'], ok: 1, por: 'Los adultos aprenden mejor cuando practican con situaciones reales y reciben retroalimentación inmediata.' },
  { q: 'En un juego de roles, un asesor deja el recado de la deuda con un vecino. ¿Qué haces?', ops: ['Lo corriges frente a todos como ejemplo de lo que no se hace', 'Detienes la práctica, preguntas al grupo qué cambiaría y lo vuelve a intentar', 'Lo dejas pasar', 'Lo sacas del taller'], ok: 1, por: 'La práctica es el lugar seguro para equivocarse; la corrección funciona mejor si el grupo la construye y la persona vuelve a intentarlo.' },
  { q: 'La prueba de salida muestra que 14 de 20 aprobaron. ¿Qué informas?', ops: ['Solo los 14', 'Los 20, con quiénes necesitan refuerzo y qué harás con ellos', 'Que todos aprobaron', 'Nada hasta ver la mora'], ok: 1, por: 'Reportar todo, con un plan para quienes no llegaron, construye credibilidad.' },
  { q: 'Al final del taller, ¿qué mide la encuesta de satisfacción?', ops: ['El aprendizaje', 'La reacción de los participantes', 'La mora', 'La aplicación en campo'], ok: 1, por: 'Es el primer nivel de evaluación. El aprendizaje se mide con la prueba; la aplicación, en campo.' },
  { q: 'Según la Ley 29571, ¿a qué hora no se puede llamar a un cliente para cobrarle?', ops: ['A las 9:00', 'A las 21:00', 'A las 15:00', 'A las 19:00'], ok: 1, por: 'El artículo 62 prohíbe las llamadas y visitas de cobranza entre las 20:00 y las 07:00.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 't1', t: '06:40', ch: 'documento', who: null, titulo: 'El diseño, a las seis', banner: 'assets/esc/idea.webp', lugar: 'Tu casa, en la mesa de la cocina', show: ['calidad', 'tiempo', 'personas'],
    body: (n, F) => `<p>Tu mamá ya puso el agua para el quaker. Tú tienes la laptop abierta entre el pan y la mantequilla. Noventa minutos, y cada minuto tiene que ganarse su lugar.${F.has('guion_corregido') ? ' El guion corregido que aprobó Legal está impreso a tu lado.' : F.has('guion_viejo') ? ' El guion de 2019 todavía tiene una línea que Legal marcó en rojo.' : ''}</p><p>Sandra trae sus casos. <mark class="clave">La tentación es llenarlo de diapositivas</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del taller.', boton: 'Guardar el diseño',
    bloques: [
      { id: 'inicio', t: 'Apertura (15 minutos)', n: 2, ops: [
        { id: 'i1', t: 'Prueba de entrada de 10 preguntas, cinco minutos.', ok: true, por: 'Sin línea de base no sabrás qué aprendieron.' },
        { id: 'i2', t: 'Sandra cuenta el caso de la señora del mercado que se atrasó por su hijo.', ok: true, por: 'Un caso real engancha más que cualquier frase.' },
        { id: 'i3', t: 'Presentación institucional de Chimú y sus valores, 15 diapositivas.', ok: false, por: 'Ya la vieron en la inducción y no ataca ninguna brecha.' },
      ] },
      { id: 'centro', t: 'Práctica (60 minutos)', n: 2, ops: [
        { id: 'c1', t: 'Evaluar un negocio de El Porvenir: pedir el cuaderno, ver el inventario y ajustar la cuota a las temporadas.', ok: true, por: 'Responde a la primera brecha del diagnóstico.' },
        { id: 'c2', t: 'Juego de roles en parejas: llamada de cobranza que termina en un acuerdo con monto y fecha, dentro de lo que la ley permite.', ok: true, por: 'Responde a la segunda brecha.' },
        { id: 'c3', t: 'Exposición sobre técnicas de negociación de Harvard, 40 minutos.', ok: false, por: 'Contenido valioso, pero sin práctica no se lleva a la calle.' },
      ] },
      { id: 'cierre', t: 'Cierre (15 minutos)', n: 2, ops: [
        { id: 'f1', t: 'Prueba de salida con las mismas 10 preguntas.', ok: true, por: 'Compara antes y después.' },
        { id: 'f2', t: 'Cada asesor dice qué hará distinto mañana en la calle.', ok: true, por: 'Un compromiso concreto que podrás revisar en campo.' },
        { id: 'f3', t: 'Foto grupal y certificado de participación.', ok: false, por: 'Está bien tenerlos, pero no miden nada.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, personas: q === 'buena' ? 2 : 0 },
        flags: [q === 'riesgosa' ? 'taller_expositivo' : 'taller_practico'],
        cartera: { diseno: q === 'riesgosa' ? 'Mucha exposición, poca práctica' : '15 · 60 · 15: prueba, práctica y compromiso' },
        out: q === 'buena' ? 'Tu diseño cabe en una hoja: quince minutos para empezar, sesenta para practicar, quince para medir. Cierras la laptop con el quaker todavía tibio.' : q === 'aceptable' ? 'El diseño tiene práctica, pero algo del cierre no te dirá si aprendieron.' : 'Tu taller quedó como una clase: mucho que escuchar y poco que hacer.',
        pro: { ok: 'Dos tercios del tiempo practicando lo que el diagnóstico encontró.', risk: 'Lo que no se practica rara vez llega a la calle.', info: 'Imprime los casos: los proyectores fallan más de lo que crees.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Un taller para hacer, no para mirar!' : '¿Cuánto tiempo practican de verdad?'],
      };
    },
    rules: [[BP, 'En adultos que ya trabajan, la mayor parte del tiempo debe ser práctica con casos de su propio trabajo.']],
    mirada: {
      ve: 'Diseñar un taller es decidir en qué se va el tiempo. Cada bloque responde a una pregunta: ¿qué saben al entrar?, ¿practican lo que el diagnóstico encontró?, ¿cómo sabremos qué aprendieron y qué harán mañana?',
      visual: { tipo: 'flujo', titulo: 'Taller de 90 minutos', pasos: ['Prueba de entrada', 'Caso de Sandra', 'Evaluar un negocio', 'Cobrar con acuerdo', 'Prueba de salida', 'Compromiso para mañana'] },
    },
  },
  {
    id: 't2', t: '07:40', ch: 'presencial', who: null, titulo: 'El proyector «operativo»', banner: 'assets/foto/oficina-abierta.webp', lugar: 'Sala de la agencia El Porvenir', show: ['tiempo', 'calidad', 'personas'],
    body: () => `<p>Llegas a las 7:40 con una bolsa de panes con chicharrón para todos. El proyector prende, parpadea y muestra «Sin señal»: tu laptop tiene HDMI y el cable de la agencia es VGA. TI atiende en 48 horas.</p><p>Nando te avisa que no son 11 sino 20: Víctor mandó nueve más. <mark class="clave">Tienes veinte minutos</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos cosas que haces en los veinte minutos.', boton: 'Hacer estas dos', resumen: 'Hiciste',
    cols: ['Acción', 'Qué resuelve'],
    rows: [
      { id: 'imprimir', cells: ['Correr a la librería de la esquina a sacar 20 copias de los casos y de la prueba', 'Que nadie dependa del proyector'] },
      { id: 'grupos', cells: ['Mover las sillas en grupos de cuatro, con un papelógrafo por grupo', 'Que la práctica funcione con 20'] },
      { id: 'ti', cells: ['Llamar a TI hasta que alguien conteste', 'Quizá el proyector'] },
      { id: 'esperar', cells: ['Esperar a Víctor para empezar, ya que él mandó a los nueve', 'Cortesía con el gerente'] },
      { id: 'filas', cells: ['Poner las 20 sillas en filas frente a la pizarra', 'Que todos quepan'] },
    ],
    score: { imprimir: 3, grupos: 3, ti: 0, esperar: -2, filas: -1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, calidad: q === 'buena' ? 3 : 0 },
        cartera: { sala: q === 'buena' ? 'Sin proyector: copias y grupos de cuatro' : 'Sala a medio armar' },
        out: q === 'buena' ? 'A las 8:02 hay cinco mesas, cinco papelógrafos y veinte copias que todavía huelen a tóner. Nadie extraña el proyector.' : q === 'aceptable' ? 'Empiezas a las 8:10, con algo improvisado. Algunos ya miran el celular.' : 'A las 8:15 sigues esperando. Tres asesores salen «un ratito» a atender clientes.',
        pro: { ok: 'Un buen facilitador tiene siempre un plan sin tecnología.', risk: 'Esperar al gerente le enseña al grupo que el taller no empieza sin él.', info: 'Los grupos de cuatro también resuelven que lleguen nueve personas que no estaban en tu diagnóstico.' },
        kusi: [q === 'buena' ? 'celebra' : 'preocupado', q === 'buena' ? '¡Papel, plumón y a practicar!' : 'El reloj corre…'],
      };
    },
    rules: [[BP, 'Prepara siempre una versión del taller que funcione sin proyector.']],
    mirada: {
      ve: 'En la vida real, los talleres empiezan con imprevistos: equipos que fallan, más gente de la esperada, el jefe que no llega. Lo que salva la sesión es un diseño que no depende de la tecnología y una facilitadora que decide rápido.',
    },
  },
  {
    id: 't3', t: '08:25', ch: 'presencial', who: 'sandra', titulo: 'La práctica en parejas', banner: 'assets/foto2/tablet-equipo.webp', lugar: 'Sala de la agencia, en grupos', show: ['personas', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('sandra_dudosa') ? 'Sandra empieza nerviosa, con ojeras: anoche salió tarde por su meta. Pero cuando cuenta el caso de la señora del mercado, la sala se queda en silencio.' : 'Sandra cuenta el caso de la señora del mercado y la sala se queda en silencio. Luego reparte los roles: uno cobra, otro es el cliente.'}</p><p>Caminas entre los grupos escuchando. <mark class="clave">En tres parejas pasa algo que tienes que atender</mark>.</p>`,
    type: 'calls',
    calls: [['Kevin y Milagros', 'Kevin cobra, Milagros es la clienta', 'Kevin: «¿Cuánto podría pagar el sábado, señora? Lo dejamos por escrito y el resto lo vemos el 15». Milagros, que hace de clienta, se ríe: «Así sí te pago».'], ['Dos asesores de La Esperanza', 'Uno cobra, el otro hace de cliente', 'El que cobra: «Si no contesta, le dejo el recado a su vecina, como dice el guion». El otro asiente. Ninguno de los dos estuvo en la inducción corregida.'], ['Don Aurelio y un asesor nuevo', 'Don Aurelio hace de cliente difícil', 'Don Aurelio grita, se hace el ofendido, cuelga. El asesor nuevo se queda mudo, rojo, y mira el suelo.']],
    prompt: 'Escuchaste a tres parejas. ¿Cómo das la retroalimentación?',
    choices: [
      { id: 'a', label: 'Parar un minuto a todo el grupo: pedirle a Kevin que repita su cierre como ejemplo, preguntar a todos «¿con quién sí se puede hablar de la deuda?» y que la pareja de La Esperanza vuelva a intentarlo. Luego ir a ver al asesor que se quedó mudo.',
        res: { q: 'buena', fx: { personas: 4, calidad: 4, cumplimiento: 3 }, flags: ['feedback_privado'], cartera: { practica: 'Errores corregidos por el grupo; acuerdo de Kevin como modelo' },
          out: 'El grupo responde a coro: «Con el cliente o su garante». La pareja de La Esperanza repite la llamada sin vecina. Al asesor mudo le dices bajito: «Don Aurelio es el cliente más difícil de El Porvenir. Probemos de nuevo, yo a tu lado».',
          pro: { ok: 'Usas el acierto como modelo, corriges sin señalar y das una segunda oportunidad a quien se bloqueó.', info: 'Apunta quién no estuvo en la inducción corregida: necesitan el guion nuevo.' },
          kusi: ['celebra', '¡Así se aprende: equivocándose donde no duele!'] } },
      { id: 'b', label: 'Corregir en voz alta a la pareja de La Esperanza para que todos escuchen: dejar recados con vecinos está prohibido por ley.',
        res: { q: 'aceptable', fx: { cumplimiento: 3, personas: -2 }, cartera: { practica: 'Corregido en público' },
          out: 'Todos escuchan la regla. Los dos de La Esperanza no vuelven a hablar en toda la práctica. El asesor que se quedó mudo con Don Aurelio tampoco lo intenta de nuevo.',
          pro: { ok: 'La regla queda clara para todos.', risk: 'Corregir señalando enseña la regla, pero apaga a quien se equivocó. En un taller, el error es material de aprendizaje, no una falta.' },
          kusi: ['pensando', 'La regla quedó clara… y dos asesores, callados.'] } },
      { id: 'c', label: 'No interrumpir: es una práctica, y al final, en el cierre, das un resumen general.',
        res: { q: 'riesgosa', fx: { calidad: -3, cumplimiento: -2 }, cartera: { practica: 'Sin retroalimentación durante la práctica' },
          out: 'Los de La Esperanza practican diez minutos más el recado a la vecina. Lo que se ensaya, se aprende: lo harán igual mañana.',
          pro: { ok: 'No cortas el ritmo de la práctica.', risk: 'Una práctica sin retroalimentación también enseña, pero puede enseñar el error.' },
          kusi: ['preocupado', 'Practicaron el error… diez minutos.'] } },
    ],
    rules: [[LEY, 'Ley 29571, art. 62: no se gestiona la cobranza con personas ajenas a la deuda.'], [BP, 'Retroalimentación durante la práctica: usa el acierto como modelo y da otra oportunidad a quien falló.']],
    mirada: {
      ve: 'El juego de roles funciona porque permite equivocarse sin un cliente real del otro lado. Pero solo enseña si alguien observa y devuelve lo que vio a tiempo. Facilitar es eso: caminar entre los grupos y decidir cuándo intervenir.',
      visual: { tipo: 'cambio', titulo: 'Lo que pasó en la práctica', pares: [['Kevin: amenazas', 'Kevin: «¿Cuánto puede el sábado?»'], ['Recado a la vecina', 'Hablar solo con el cliente o su garante'], ['El asesor mudo', 'Otro intento, con apoyo']] },
    },
  },
  {
    id: 't4', t: '08:45', ch: 'presencial', who: 'victor', titulo: 'Víctor llega tarde', banner: 'assets/foto2/grito.webp', lugar: 'Puerta de la sala', show: ['confianza', 'personas', 'calidad'],
    body: (n, F) => `<p>Víctor entra a las 8:45 con el celular en la oreja. Mira los papelógrafos, mira a Don Aurelio haciendo de cliente gritón, y te hace una seña hacia el pasillo.</p><p>«Hay una campaña en el mercado La Hermelinda y necesito a cinco. ${F.has('meta_ajustada') ? 'Ya sé que les bajé la meta de hoy, pero esto es plata.' : 'La meta no espera.'} <mark class="clave">¿Me los presto ahorita?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedirle diez minutos antes de decidir: que entre y haga de «cliente difícil» en la última ronda. Si después todavía los necesita, que se los lleve.',
        res: { q: 'buena', fx: { confianza: 4, personas: 3 }, rel: { victor: 1 }, flags: ['victor_participo'], cartera: { piloto: 'Víctor participó y se quedó' },
          out: 'Víctor duda, guarda el celular y entra. Hace de comerciante que no quiere pagar. Kevin le saca un acuerdo de S/ 200 para el sábado. Víctor se ríe: «Ya, ya. Que terminen. La campaña la mando a la tarde».',
          pro: { ok: 'Lo invitas a ver el resultado en lugar de discutir el tiempo.', risk: 'Podía salir mal si la práctica se veía floja justo en ese momento.', info: 'Un gerente que ve a su gente mejorar en vivo es tu mejor argumento.' },
          kusi: ['celebra', '¡Víctor jugó de cliente! Qué bacán.'] } },
      { id: 'b', label: 'Dejar que se lleve a cinco: es su gente y su meta. Terminas con los quince que quedan.',
        res: { q: 'riesgosa', fx: { confianza: 1, calidad: -4, personas: -2 }, rel: { victor: 1 }, flags: ['victor_se_llevo'], cartera: { piloto: 'Cinco asesores salieron a mitad del taller' },
          out: 'Víctor elige a cinco, entre ellos dos de los que se habían equivocado en la práctica. Se van sin prueba de salida. Tu piloto tiene ahora un hueco que nadie podrá medir.',
          pro: { ok: 'Evitas un choque con el gerente.', risk: 'Un piloto que se interrumpe pierde su valor como prueba, y le enseña a todos que la capacitación cede ante cualquier urgencia.' },
          kusi: ['triste', 'Se fueron justo los que más lo necesitaban…'] } },
      { id: 'c', label: 'Decirle que no: el acuerdo era hora y media completa, y el piloto se mide entero.',
        res: { q: 'aceptable', fx: { calidad: 2, confianza: -3 }, rel: { victor: -1 }, cartera: { piloto: 'Completo, con Víctor molesto' },
          out: 'Víctor aprieta los labios: «Ok. Pero que esto valga la pena». Se va sin entrar. El taller termina completo; la relación, un poco más fría.',
          pro: { ok: 'Proteges el piloto y el acuerdo.', risk: 'Tener razón con un gerente comercial, en el pasillo y delante de su gente, tiene costo.' },
          kusi: ['pensando', 'Piloto entero… Víctor, no tanto.'] } },
    ],
    rules: [[BP, 'Ante un jefe que quiere retirar a su gente, ofrécele ver el aprendizaje antes de decidir.']],
    mirada: {
      ve: 'Víctor no está en contra del taller: está bajo presión por una campaña. La facilitadora tiene que proteger el piloto sin convertirlo en una pelea. Invitar al jefe a participar suele ser más poderoso que cualquier argumento.',
      visual: { tipo: 'balanza', a: { t: 'Lo que quiere Víctor', items: ['Cinco asesores para la campaña', 'No perder ventas hoy'] }, b: { t: 'Lo que está en juego', items: ['Un piloto que se pueda medir', 'Los que más necesitan la práctica', 'Que la capacitación no ceda siempre'] } },
    },
  },
  {
    id: 't5', t: '09:25', ch: 'presencial', who: null, titulo: '¿Qué harás mañana?', banner: 'assets/foto2/aplausos-verde.webp', lugar: 'Sala de la agencia, en círculo', show: ['personas', 'calidad', 'confianza'],
    body: (n, F) => `<p>Quedan cinco minutos. ${F.has('victor_se_llevo') ? 'Quince sillas en círculo; cinco vacías.' : 'Veinte sillas en círculo.'} Los asesores ya llenaron la prueba de salida y Sandra recoge las hojas.</p><p>Antes de soltarlos a la calle, quieres escuchar a algunos. <mark class="clave">Solo alcanzas a hacer dos preguntas</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para el cierre.',
    opts: [
      { id: 'manana', label: '¿Qué vas a hacer distinto mañana con un cliente atrasado?', info: 'Milagros: «Voy a pedir el cuaderno antes de anotar las ventas, aunque me demore». Kevin: «Dejar el acuerdo por escrito, con fecha».' },
      { id: 'dificil', label: '¿Qué te va a costar más aplicar?', info: 'Un asesor de Florencia de Mora: «Pedir el cuaderno cuando falta poco para la meta. El cliente se apura y uno también».' },
      { id: 'gusto', label: '¿Les gustó el taller?', info: 'Todos dicen que sí. Uno agrega: «Más corto que el virtual, y con pan con chicharrón». Risas.' },
      { id: 'ayuda', label: '¿Qué necesitarían para hacerlo en la calle?', info: 'Don Aurelio: «Que alguien los acompañe una mañana. Lo que se aprende aquí se olvida en la primera señora que llora».' },
    ],
    res: picks => ({
      q: null, fx: { calidad: picks.includes('gusto') ? 0 : 3, personas: 2 },
      flags: picks.includes('manana') ? ['compromisos_asesores'] : [],
      cartera: { practica: picks.includes('manana') ? 'Compromisos concretos anotados' : 'Cierre sin compromisos' },
      out: picks.includes('ayuda') || picks.includes('dificil') ? 'Anotas lo que dijo Don Aurelio y el asesor de Florencia de Mora: lo difícil no es saber, es aplicarlo con la meta encima.' : 'Anotas lo que dicen. Los asesores salen a la calle con el sol ya fuerte.',
      kusi: ['curioso', 'Lo difícil empieza mañana, en la calle.'],
    }),
    mirada: {
      ve: 'El cierre de un taller no es para preguntar si gustó: es para convertir lo aprendido en un compromiso concreto y descubrir qué obstáculos encontrarán en la calle. Esa información decide qué pasa después del taller.',
      visual: { tipo: 'embudo', titulo: 'Los cuatro niveles de evaluación', niveles: [['Reacción: ¿les gustó?', 4], ['Aprendizaje: prueba de salida', 3], ['Aplicación: en la calle', 2], ['Resultado: la mora', 1]] },
    },
  },
  {
    id: 't6', t: '11:30', ch: 'sistema', who: null, titulo: 'La prueba de salida', banner: 'assets/esc/planilla.webp', lugar: 'Escritorio prestado en la agencia', show: ['calidad', 'etica', 'confianza'],
    body: (n, F) => `<p>Pasas las hojas al Excel. La prueba de entrada dio un promedio de 4,8 sobre 10. La de salida, 7,6. ${F.has('victor_se_llevo') ? 'Cinco no tienen prueba de salida.' : 'Tienes las veinte.'}</p><p>Pero <mark class="clave">seis no llegaron al 7</mark>, y cinco de ellos son de los nueve que Víctor agregó a última hora, que no estaban en tu diagnóstico.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Reportar todo: entrada, salida, quiénes no llegaron al 7 y por qué puede ser. Proponer acompañarlos una mañana en campo, con Sandra y Don Aurelio.',
        res: { q: 'buena', fx: { etica: 4, calidad: 4, confianza: 2 }, rel: { lorena: 1 }, flags: ['prueba_honesta', 'refuerzo_campo'], cartera: { prueba: 'Entrada 4,8 · salida 7,6 · 6 con refuerzo en campo' },
          out: 'Lorena responde en cinco minutos: «Esto es lo que le voy a mostrar a Mario. Que vea que medimos de verdad, incluso lo que no salió». El refuerzo en campo necesitará horas de Víctor otra vez.',
          pro: { ok: 'Mostrar lo que no funcionó, con un plan, vale más que un promedio bonito.', risk: 'Pedir más horas de campo a Víctor no será fácil.', info: 'Separa a los nueve que no estaban en el diagnóstico: su punto de partida era otro.' },
          kusi: ['celebra', 'Los números completos, y un plan. ¡Así!'] } },
      { id: 'b', label: 'Reportar el promedio de salida de los que aprobaron: es el piloto, y lo que importa ahora es mantener el apoyo de Finanzas.',
        res: { q: 'riesgosa', fx: { etica: -5, calidad: -2, confianza: 2 }, flags: ['prueba_maquillada'], cartera: { prueba: 'Reportado: promedio 8,4 (solo aprobados)' },
          out: 'El correo luce bien: «Promedio de salida: 8,4». Lorena lo reenvía a Mario. En el Excel, seis filas quedan en otra pestaña que nadie abre.',
          pro: { ok: 'Proteges el apoyo al área por ahora.', risk: 'Si alguien revisa el Excel, tu credibilidad cae con todos los números de estas semanas.' },
          kusi: ['preocupado', '¿Y las seis filas de la otra pestaña?'] } },
      { id: 'c', label: 'Reportar todo, pero recomendar que los nueve agregados no cuenten para el piloto.',
        res: { q: 'aceptable', fx: { etica: 2, calidad: 2 }, flags: ['prueba_honesta'], cartera: { prueba: 'Entrada 4,8 · salida 7,6 · se excluyen 9 agregados' },
          out: 'Lorena acepta el criterio, pero pregunta: «¿Y qué hacemos con esos seis que no llegaron?». No tienes respuesta todavía.',
          pro: { ok: 'Reportas todo y ordenas el análisis.', risk: 'Excluir no resuelve que seis personas salgan a la calle sin dominar lo que se enseñó.' },
          kusi: ['pensando', 'Bien medido… ¿y los seis?'] } },
    ],
    rules: [[BP, 'Reporta los resultados completos del aprendizaje, con un plan para quienes no alcanzaron el nivel esperado.']],
    mirada: {
      ve: 'Medir el aprendizaje sirve para decidir qué hacer después, no para lucirse. Un resultado completo, con sus huecos y un plan, construye la credibilidad que necesitarás cuando lleguen los números de la mora.',
      visual: { tipo: 'rango', titulo: 'Prueba de salida (sobre 10)', min: 0, max: 10, banda: [7, 10], marcas: [['Entrada', 4.8], ['Salida', 7.6]] },
    },
  },
  {
    id: 't7', t: '17:30', ch: 'whatsapp', who: null, titulo: 'Gracias, Sandra', banner: 'assets/foto2/celebra-papel.webp', lugar: 'Combi de regreso al centro', show: ['personas', 'confianza'],
    body: () => `<p>En la combi de regreso tienes los pies hinchados y la garganta seca. En tu celular, la foto de Lorena: Kevin cerrando un acuerdo con Don Aurelio de cliente gritón.</p><p>Sandra salió a las diez del taller y se fue directo a campo. <mark class="clave">Le debes un gracias de verdad</mark>.</p>`,
    type: 'compose', enviaA: 'sandra', para: 'Para: Sandra Rojas · Asesora de negocios', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'que', t: 'Qué reconoces', ops: [
        { id: 'q1', t: 'Sandra, cuando contaste el caso de la señora del mercado, la sala se quedó en silencio. Ese fue el momento en que empezaron a aprender.', ok: true, por: 'Reconoces algo concreto que hizo.' },
        { id: 'q2', t: 'Sandra, gracias por todo, estuviste genial.', ok: false, por: 'Amable, pero genérico.' },
      ] },
      { id: 'efecto', t: 'Qué logró', ops: [
        { id: 'e1', t: 'Kevin cerró su primer acuerdo por escrito usando tu forma de preguntar.', ok: true, por: 'Le muestras el efecto de su trabajo.' },
        { id: 'e2', t: 'El taller salió muy bonito.', ok: false, por: 'No dice qué cambió.' },
      ] },
      { id: 'copia', t: 'Cómo cierras', ops: [
        { id: 'c1', t: 'Se lo voy a contar a Víctor y a Lorena por correo, con tu nombre, para que quede escrito.', ok: true, por: 'El reconocimiento llega a quien decide.' },
        { id: 'c2', t: 'Te debo un almuerzo 😄', ok: false, por: 'Cariñoso, pero queda entre ustedes.' },
      ] },
    ],
    res: sel => {
      const buenas = ['q1', 'e1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = buenas === 3 ? 'buena' : buenas === 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : q === 'aceptable' ? 2 : 0, confianza: q === 'buena' ? 2 : 0 }, rel: { sandra: q === 'riesgosa' ? 0 : 1 },
        flags: q === 'buena' ? ['sandra_reconocida'] : [],
        out: q === 'buena' ? 'Sandra responde con un audio. Se le quiebra la voz a la mitad: «Cuatro años y es la primera vez que alguien me dice eso con mi nombre». Esa noche mandas el correo a Víctor y Lorena.' : q === 'aceptable' ? 'Sandra responde: «Gracias 💛 Fue bonito». El reconocimiento queda, pero entre ustedes dos.' : 'Sandra responde con un pulgar. Mañana vuelve a su meta, como siempre.',
        pro: { ok: 'Un reconocimiento concreto, con efecto y con testigos, es lo que mantiene vivos a los facilitadores internos.', risk: 'Un gracias genérico se agradece, pero no cambia nada.', info: 'Pregunta a Lorena si existe alguna forma de reconocer a los facilitadores internos en su evaluación de desempeño.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Qué divino! Sandra se lo merecía.' : 'Un gracias concreto vale el doble.'],
      };
    },
    rules: [[BP, 'Reconoce a los facilitadores internos de forma concreta y ante quien decide.']],
    mirada: {
      ve: 'Los facilitadores internos enseñan por algo más que dinero: por orgullo, por reconocimiento, por ver crecer a otros. Si nadie lo nota, la próxima vez dirán que no. El reconocimiento concreto y visible es parte del diseño del programa.',
      visual: { tipo: 'mensaje', titulo: 'Un gracias que se recuerda', txt: 'Cuando contaste el caso de la señora del mercado, la sala se quedó en silencio. Kevin cerró su primer acuerdo usando tu forma de preguntar. Se lo voy a contar a Víctor y a Lorena, con tu nombre.' },
    },
  },
];
