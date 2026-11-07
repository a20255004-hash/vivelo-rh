// Asistente de Capacitación · Capítulo 9 · «El último grupo» · Semana 2, jueves.
// Hilo de las dos semanas: la «escuela de cajeros» de Boticas del Norte, 120 personas nuevas en seis grupos, en Trujillo.
// Normas citadas (ya verificadas en capítulos anteriores):
// - Reglamento de la Ley 29783 (D.S. 005-2012-TR), art. 28: la capacitación se realiza dentro de la jornada.
//   https://lpderecho.pe/capacitaciones-seguridad-salud-trabajo-deben-realizarse-durante-jornada-laboral-informe-82-2015-mtpe/
// - Ley 29973, art. 50: ajustes razonables (capítulo 2).
//   https://cdn.www.gob.pe/uploads/document/file/5843154/5182571-rd-129-2024-munoz-loayza-henry-otorgamiento-y-aplicacion-de-ajustes-razonables.pdf
// - Ley 29733, Ley de Protección de Datos Personales: notas y constancias, a cada titular (capítulos 5 y 7).
// La política de arqueo (toda diferencia se anota) es interna y ficticia. Personas y cifras son ficticias.

export const CAP = {
  n: 9, titulo: 'El último grupo', dia: 'Semana 2, jueves', foto: 'assets/foto2/aplausos-verde.webp',
  lugar: 'Boticas del Norte · Sede de capacitación, Av. España',
  inicio: '07:20', fin: '19:30', cierreHora: '19:15',
  apertura: 'Jueves. El día más cargado de la escuela: el grupo 6 rinde su examen, los que desaprobaron vuelven al refuerzo de arqueo y llegan los últimos rezagados. Karen está en Operaciones toda la mañana con Benites. El aula es tuya.', boton: 'Abrir el aula',
  kusi: 'Último grupo, más gente que sillas y tú al mando. ¡Dale, que ya sabes cómo!',
  lead: 'Confirmaste quién venía, armaste el día con un aula y dos cajas, cuidaste a Yanet y a su bebé, revisaste el reexamen, cerraste lo urgente y le contaste a Mario cómo le fue a Elvira.',
  reflexion: 'Cuando todo pasa el mismo día, ¿qué no puede fallar y qué puede esperar a mañana?',
  siguiente: { n: 10, titulo: 'Dos semanas', dia: 'Semana 2, viernes' },
};

export const CARTERA = [
  { id: 'grupo6', p: 'Grupo 6: caja simulada y examen', j: 'Jorge y tú', d: 0, e: 'Hoy' },
  { id: 'reexamen', p: 'Refuerzo de arqueo y reexamen', j: 'Jorge y tú', d: 0, e: 'Hoy' },
  { id: 'rezagados', p: 'Rezagados y cajeros antiguos', j: 'Tú', d: 0, e: 'Por confirmar' },
  { id: 'constancias', p: 'Constancias del grupo 6 y del reexamen', j: 'Tú y Karen', d: 0, e: 'Hoy' },
  { id: 'respaldo', p: 'Devolver el almacén de Húsares de Junín', j: 'Tú', d: 0, e: 'Hoy' },
];

export const FUTURO = {
  convocatoria_ok: ['Confirmaste a todos por su nombre y reprogramaste a quien no podía.', 'Nadie llegó sin saber a qué.'],
  plan_dia_ok: ['El día cupo en un aula y dos cajas sin que nadie esperara de brazos cruzados.', 'Karen lo usará como modelo.'],
  yanet_reprogramada: ['Yanet rendirá su reexamen el lunes, en las mismas condiciones.', 'Su historia entra en el balance de mañana.'],
  yanet_bebe_aula: ['Yanet rindió con su bebé en brazos en el aula.', 'Aprobó, pero con las justas y muy nerviosa.'],
  reexamen_nuevo: ['El reexamen tuvo preguntas nuevas y una sobre qué hacer con una diferencia.', 'Las notas dirán lo que de verdad aprendieron.'],
  reexamen_repetido: ['El reexamen repitió preguntas del viernes.', 'Algunas notas medirán memoria, no arqueo.'],
  cierre_ordenado: ['Cerraste el día con notas en privado, constancias y el almacén devuelto.', 'Mañana empiezas el balance sin pendientes.'],
  elvira_cuidada: ['Elvira terminó su primer día de escuela y Mario lo supo por ti.', 'Mario será tu aliado en la Semana 3.'],
};

export const CHATS = {
  area: { n: 'Capacitación · Boticas del Norte', sub: 'Karen, Fiorella y tú', c: '#C05621' },
  karen: { n: 'Karen Vásquez', sub: 'Analista de Capacitación', who: 'karen' },
  jorge: { n: 'Q. F. Jorge Lázaro', sub: 'Facilitador', who: 'facilitador' },
  mario: { n: 'Mario Infante', sub: 'Jefe del local de La Esperanza', who: 'local' },
  yanet: { n: 'Yanet Chávez', sub: 'Participante · Grupo 1', c: '#B83280' },
  tito: { n: 'Sr. Tito Alayo', sub: 'Mantenimiento', c: '#6B4F2F' },
};

export const WSP = [
  { chat: 'karen', t: '07:15', de: 'Karen', txt: 'Benites me citó a las 8 con el informe de visita en la mano 😬 Confío en ti con el aula. Cualquier cosa grave, llámame.' },
  { chat: 'mario', t: '07:40', de: 'Mario', txt: 'Ahí le mando a Elvira. Está nerviosa como si fuera su primer día. Trátemela bien, porfa.', si: 'mario_aliado' },
  { chat: 'yanet', t: '08:05', de: 'Yanet', txt: 'Señorita, la cuna de mi bebé cerró hoy por fumigación. No tengo con quién dejarla. ¿Qué hago? 😭' },
  { chat: 'jorge', t: '09:00', de: 'Jorge', txt: 'Tengo mi cronómetro. Historias: 10 minutos, ni uno más. Arqueo: lo que haga falta ⏱️', si: 'anonimato_jorge' },
  { chat: 'tito', t: '16:30', de: 'Sr. Tito', txt: 'Señorita, ya dejé limpio el almacén de Húsares. El jefe dice que cuando quiera, vuelva 👍', si: 'aula_respaldo' },
  { chat: 'karen', t: '18:10', de: 'Karen', txt: 'Benites aprobó seguir con la escuela. Y me pidió algo para el lunes… mañana te cuento 😳' },
];

export const CORREOS = [
  { t: '07:00', de: 'Karen Vásquez', para: 'Asistente de Capacitación', asunto: 'Hoy', html: '<p>Hoy: grupo 6 con caja simulada y examen; refuerzo de arqueo y reexamen para los desaprobados; y los últimos rezagados. Jorge está contigo. Yo vuelvo a las 2.</p><p>Una sola aula, dos cajas. Haz magia.</p><p>Karen</p>' },
  { t: '14:20', de: 'AulaNorte · Notificaciones', para: 'capacitacion@boticasnorte.pe', asunto: 'Grupo 6 · módulo virtual', html: '<p>Usuarios activos: 21 de 22. Módulos completados: 100 % en 20 usuarios. Ingreso con carné de extranjería: 3.</p>' },
];

export const QUIZ = [
  { q: 'Una participante no tiene con quién dejar a su bebé el día del reexamen. Lo mejor es…', ops: ['Que pierda su oportunidad', 'Reprogramarla en las mismas condiciones', 'Que rinda con el bebé en brazos sí o sí', 'Aprobarla sin examen'], ok: 1, por: 'Reprogramar mantiene la justicia del examen y respeta su situación.' },
  { q: 'Un reexamen con las mismas preguntas del primer examen mide…', ops: ['Mejor el aprendizaje', 'Memoria de las respuestas más que aprendizaje', 'Lo mismo', 'Nada'], ok: 1, por: 'Las preguntas nuevas sobre el mismo tema miden si se aprendió.' },
  { q: 'Hay un aula, dos cajas de práctica y dos grupos el mismo día. ¿Qué haces?', ops: ['Que esperen afuera por turnos', 'Rotar estaciones: mientras unos practican en caja, otros hacen ejercicios en papel', 'Mandar a la mitad a su casa', 'Postergar todo'], ok: 1, por: 'Rotar estaciones aprovecha el espacio sin dejar a nadie sin hacer nada.' },
  { q: 'Una cajera con doce años llega a la escuela. ¿Qué la ayuda más?', ops: ['Tratarla igual que a un chico de 18 sin experiencia', 'Reconocer lo que sabe y enfocarse en lo que nadie le enseñó', 'Ponerla de ejemplo de lo que no se hace', 'Exonerarla de todo'], ok: 1, por: 'Un adulto aprende mejor cuando su experiencia se reconoce.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'u1', t: '07:30', ch: 'llamada', who: null, titulo: 'Quién viene hoy', banner: 'assets/foto/llamada.webp', show: ['personas', 'tiempo', 'calidad'],
    body: (n, F) => `<p>${F.has('reexamen') ? 'Hoy es el reexamen que propusiste el viernes.' : 'Después de tu informe de visita, Karen convocó un refuerzo de arqueo y un reexamen para todos los desaprobados, aunque algunos ya estén en caja.'} Antes de abrir, llamas a los casos dudosos.</p><p><mark class="clave">Cinco llamadas, cinco realidades</mark>.</p>`,
    type: 'calls',
    calls: [['Yanet Chávez', 'Contesta llorando', 'La cuna cerró por fumigación, señorita. Tengo a la bebé conmigo.'], ['Jhon Cueva', 'Contesta: ya está en la puerta', '¡Esta vez sí era hoy, ya llegué!'], ['Elvira Gutiérrez', 'Contesta, seria', 'Voy, señorita. Pero no me ponga a rendir examen delante de los chiquillos.'], ['Iván Ríos', 'No contesta'], ['Kevin Rodríguez', 'Contesta por mensaje', 'Aprobé el viernes, pero ¿puedo venir al refuerzo de arqueo? Quiero practicar.']],
    prompt: 'Ya sabes quién viene. ¿Qué haces?',
    choices: [
      { id: 'a', label: 'Decirle a Yanet que no la pierdes, que primero vea a su bebé y que hablan a las 10; confirmar a Jhon, a Elvira y a Kevin, y dejarle un mensaje a Iván con Mario.',
        res: { q: 'buena', fx: { personas: 4, calidad: 2, tiempo: -1 }, flags: ['convocatoria_ok'], cartera: { rezagados: 'Jhon, Elvira y Kevin confirmados; Yanet por decidir; Iván con Mario' },
          out: 'Yanet manda un «gracias» con un corazón roto y uno entero. Mario contesta: «Iván se fue a Lima, señorita. Renunció ayer». Lo anotas sin sorpresa.',
          pro: { ok: 'Cada caso con su respuesta, sin dejar a nadie en el aire.', info: 'Avísale a Jorge que Kevin se suma al refuerzo.' },
          kusi: ['feliz', 'Nadie llega a ciegas.'] } },
      { id: 'b', label: 'Confirmar solo a quienes ya están seguros y empezar: no hay tiempo para casos especiales.',
        res: { q: 'riesgosa', fx: { personas: -3, tiempo: 1 }, cartera: { rezagados: 'Solo confirmados' },
          out: 'Yanet se queda esperando una respuesta que no llega. Elvira llega y nadie sabe qué hacer con ella.',
          pro: { ok: 'Empiezas a tiempo.', risk: 'Los «casos especiales» son justo los que la escuela necesita rescatar.' },
          kusi: ['preocupado', '¿Y Yanet?'] } },
    ],
    rules: [[BP, 'El día del cierre, confirma a cada persona por su nombre.']],
    mirada: {
      ve: 'El último día de una capacitación es el día de los casos difíciles: los que faltaron, los que desaprobaron, los que nunca fueron capacitados. Cerrar bien es no dejar a ninguno en el aire.',
      visual: { tipo: 'embudo', titulo: 'El jueves', niveles: [['Grupo 6', 22], ['Reexamen', 21], ['Rezagados y antiguos', 3]] },
    },
  },
  {
    id: 'u2', t: '08:15', ch: 'documento', who: null, titulo: 'Un aula, dos cajas, cuarenta personas', banner: 'assets/foto/plano-equipo.webp', show: ['calidad', 'tiempo', 'cumplimiento'],
    body: () => `<p>El aula tiene treinta sillas. Hoy vienen más de cuarenta personas, y hay solo dos cajas de práctica. Jorge te mira: «Tú mandas hoy». <mark class="clave">Arma el día en la pizarra</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del plan del día.', boton: 'Escribir el plan',
    bloques: [
      { id: 'esp', t: 'Espacio', n: 2, ops: [
        { id: 'e1', t: 'Estaciones que rotan cada 40 minutos: caja 1, caja 2, ejercicios de vuelto en papel y casos de derivación con Jorge.', ok: true, por: 'Nadie espera parado.' },
        { id: 'e2', t: 'El refuerzo en la sala de reuniones del primer piso, que Tito puede abrir.', ok: true },
        { id: 'e3', t: 'Que el grupo 6 espere en el pasillo mientras el reexamen usa las cajas.', ok: false, por: 'Veinte personas paradas dos horas en su jornada.' },
      ] },
      { id: 'hor', t: 'Horario', n: 2, ops: [
        { id: 'h1', t: 'Examen del grupo 6 a las 2 p. m.; reexamen a las 3; todo termina a las 4:30.', ok: true, por: 'Dentro de la jornada.' },
        { id: 'h2', t: 'Refuerzo de arqueo de 9 a 12, con la práctica de diferencias que viste en La Esperanza.', ok: true },
        { id: 'h3', t: 'Si falta tiempo, el reexamen sigue hasta las 7.', ok: false, por: 'Saca la capacitación de la jornada.' },
      ] },
      { id: 'per', t: 'Personas', n: 1, ops: [
        { id: 'p1', t: 'Elvira hace las estaciones con todos, pero su evaluación es una conversación aparte con Jorge.', ok: true, por: 'Reconoce su experiencia sin exponerla.' },
        { id: 'p2', t: 'Elvira rinde el examen escrito delante del grupo, como todos.', ok: false, por: 'Pidió no ser expuesta frente a los jóvenes.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, tiempo: q === 'buena' ? 2 : -1, cumplimiento: q === 'riesgosa' ? -3 : 2 },
        flags: q === 'buena' ? ['plan_dia_ok'] : [], cartera: { grupo6: q === 'buena' ? 'Estaciones que rotan; todo termina 4:30' : 'Plan del día ajustado sobre la marcha' },
        out: q === 'buena' ? 'A las 9:05 el aula suena como un mercado ordenado: pitidos de caja, monedas, Jorge contando una historia de diez minutos exactos. Elvira, en la caja 2, le explica a un chico cómo contar más rápido.' : 'El día arranca, pero hay gente esperando y el reloj ya aprieta.',
        pro: { ok: 'Rotar estaciones multiplica dos cajas por cuatro.', risk: 'Alargar el día o dejar gente esperando sale caro en cansancio y en jornada.', info: 'Pega el horario de rotación en la puerta.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Magia con dos cajas!' : 'Le falta orden…'],
      };
    },
    rules: [[LEY, 'La capacitación se realiza dentro de la jornada (Reglamento de la Ley 29783, art. 28).']],
    mirada: {
      ve: 'La logística no es un detalle del día de cierre: es el día de cierre. Cuando el espacio y el tiempo no alcanzan, organizar estaciones convierte la escasez en práctica para todos.',
      visual: { tipo: 'linea', titulo: 'El jueves en la pizarra', hitos: [['8:30', 'Bienvenida'], ['9:00', 'Estaciones y refuerzo'], ['12:00', 'Almuerzo'], ['14:00', 'Examen grupo 6'], ['15:00', 'Reexamen'], ['16:30', 'Cierre']] },
    },
  },
  {
    id: 'u3', t: '10:00', ch: 'presencial', who: null, titulo: 'Yanet en la puerta', banner: 'assets/foto2/mesa-mujeres.webp', lugar: 'Puerta del aula', show: ['personas', 'etica', 'cumplimiento'],
    body: () => `<p>Yanet aparece en la puerta con la bebé en un aguayo y la mochila del cuaderno. «Vine igual, señorita. Ya estudié el arqueo con su pizarra, no quiero perder esto.» La bebé tiene ocho meses y una tos leve. <mark class="clave">Todos en el aula la están mirando</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Agradecerle que vino, decirle que su reexamen queda para el lunes a las 9 con las mismas preguntas nuevas y el mismo tiempo, y darle la hoja de práctica para llevar.',
        res: { q: 'buena', fx: { personas: 5, etica: 3, cumplimiento: 2 }, flags: ['yanet_reprogramada'], cartera: { reexamen: 'Yanet: reexamen el lunes, mismas condiciones' },
          out: 'Yanet suelta el aire. «¿El lunes? ¿Seguro?» Le escribes la hora en su cuaderno. Se va despacio, meciendo a la bebé, y antes de salir te muestra la hoja: «Esta la hago esta noche».',
          pro: { ok: 'Mantienes la justicia del examen y cuidas a la persona.', risk: 'El lunes tendrás un pendiente más.', info: 'Avísale a su jefe de local que el lunes en la mañana está en la escuela.' },
          kusi: ['feliz', 'Justo y humano a la vez.'] } },
      { id: 'b', label: 'Dejarla rendir con la bebé en brazos, en la última fila: ya vino hasta aquí.',
        res: { q: 'aceptable', fx: { personas: 2, calidad: -1 }, flags: ['yanet_bebe_aula'], cartera: { reexamen: 'Yanet rinde con la bebé' },
          out: 'Yanet rinde meciendo a la bebé con una mano. Saca 14, con las justas. Sale sudando y con la cara roja.',
          pro: { ok: 'No pierde su oportunidad hoy.', risk: 'Rendir con una bebé con tos en brazos no son las mismas condiciones que los demás.' },
          kusi: ['pensando', 'Aprobó… ¿pero así?'] } },
      { id: 'c', label: 'Decirle que con la bebé no puede entrar, y que el reexamen era hoy.',
        res: { q: 'riesgosa', fx: { personas: -5, etica: -3 },
          out: 'Yanet baja la mirada y se va. En el pasillo, Elvira la alcanza y la abraza.',
          pro: { ok: 'Mantienes la regla del día.', risk: 'Castigas una emergencia de cuidado con la pérdida de una oportunidad.' },
          kusi: ['triste', 'Vino con todo… y se fue sin nada.'] } },
    ],
    rules: [[BP, 'Ante una emergencia de cuidado, reprograma en las mismas condiciones: ni castigo ni regalo.']],
    mirada: {
      ve: 'Muchas personas en un primer empleo son madres o padres que cuidan solos. Una escuela que reprograma con justicia, sin regalar la nota ni castigar la emergencia, les dice que pueden crecer ahí.',
      visual: { tipo: 'balanza', a: { t: 'Rendir hoy con la bebé', items: ['No pierde la fecha', 'Condiciones distintas', 'Nervios'] }, b: { t: 'Reexamen el lunes', items: ['Mismas preguntas y tiempo', 'Estudia tranquila', 'Un pendiente más para ti'] } },
    },
  },
  {
    id: 'u4', t: '12:40', ch: 'documento', who: 'facilitador', titulo: 'El reexamen de Jorge', banner: 'assets/esc/lupa.webp', show: ['calidad', 'cumplimiento', 'etica'],
    body: () => `<p>Jorge armó el reexamen anoche y te lo pasa con el sánguche de pollo en la otra mano. «Revísalo rápido, que a las 3 se imprime.» <mark class="clave">Es la segunda oportunidad de 21 personas</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que conviene cambiar antes de imprimir.',
    doc: { t: 'Reexamen de caja · Escuela de cajeros', sub: 'Q. F. Jorge Lázaro · 12 preguntas · 30 minutos' },
    lines: [
      { id: 'rep', t: '1 a 4. Mismas preguntas de vuelto del examen del viernes, con los mismos montos.', bad: BP, why: 'Mide si recuerdan las respuestas, no si saben calcular. Cambia los montos.' },
      { id: 'dif', t: '5. En el arqueo faltan S/ 4. Como es poco, ¿lo cubres para no hacer problema?', bad: POL, why: 'La pregunta sugiere que cubrir faltantes chicos está bien. La política es anotar toda diferencia.' },
      { id: 'acta', t: '6. ¿Quiénes firman el acta de arqueo?' },
      { id: 'deriv', t: '7. Un señor pide algo para la gastritis y está tomando otro medicamento. ¿Qué haces?' },
      { id: 'tiempo', t: 'Tiempo: 30 minutos.' },
      { id: 'kev', t: 'Indicación: «Kevin rinde aparte, por su discapacidad».', bad: LEY, why: 'Kevin ya aprobó y viene solo al refuerzo. Además, mencionar su condición en un documento del grupo expone un dato sensible.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      out: missLey ? 'Corriges las preguntas de vuelto, pero la indicación sobre Kevin queda impresa en la hoja que reciben todos.' : `Corriges ${hitsLey + hitsBp} cosas. Jorge cambia los montos con un plumón: «Claro, si no, aprueban de memoria». Y tacha la línea de Kevin con cara de vergüenza.`,
      flags: [(hitsBp || 0) >= 1 && !missLey ? 'reexamen_nuevo' : 'reexamen_repetido'],
      cartera: { reexamen: missLey ? 'Reexamen con fallas' : 'Reexamen con preguntas nuevas y la política de diferencias' },
      pro: { ok: 'Una segunda oportunidad vale si mide lo mismo con preguntas nuevas.', risk: 'Repetir preguntas infla notas; sugerir que se tapan faltantes enseña lo contrario.', info: 'Guarda este banco de preguntas para futuras escuelas.' },
      kusi: missLey ? ['preocupado', 'Ese dato de Kevin no va ahí.'] : ['celebra', '¡Segunda oportunidad de verdad!'],
    }),
    rules: [[LEY, 'La condición de discapacidad es un dato sensible: no va en documentos que ve todo el grupo (Ley 29733).'], [POL, 'Toda diferencia de caja se anota en el acta, sin importar el monto.']],
    mirada: {
      ve: 'Lo que viste ayer en La Esperanza cambió el examen: ahora pregunta por la diferencia que nadie anota. Así se cierra el ciclo: lo que se observa en el local vuelve al aula.',
      visual: { tipo: 'cambio', titulo: 'Del examen del viernes al reexamen', pares: [['Mismos montos', 'Montos nuevos'], ['«¿La cubres?»', '«¿Qué anotas en el acta?»'], ['Dato de Kevin', 'Sin datos sensibles']] },
    },
  },
  {
    id: 'u5', t: '16:35', ch: 'sistema', who: null, titulo: 'Lo que cierra hoy', banner: 'assets/esc/reloj.webp', show: ['tiempo', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>${F.has('reexamen_nuevo') ? 'Aprobaron el reexamen 18 de 20.' : 'Aprobaron el reexamen 19 de 20, varios con las mismas notas que memorizaron.'} El grupo 6: 19 de 22. Son las 4:35. Te queda una hora útil y <mark class="clave">cuatro cosas que querían ser hoy</mark>. Solo caben tres.</p>`,
    type: 'pick', n: 3, prompt: 'Elige las tres cosas que cierras hoy.', boton: 'Cerrar estas', resumen: 'Cerraste',
    cols: ['Pendiente', 'Lo que sabes'],
    rows: [
      { id: 'notas', cells: ['Notas en privado a los 42 que rindieron hoy', 'Están esperando con el celular en la mano'] },
      { id: 'const', cells: ['Constancias del grupo 6 y de los que aprobaron el reexamen', 'Con el procedimiento del martes, en media hora'] },
      { id: 'alm', cells: ['Avisar al almacén de Húsares que ya no lo usarán', 'El jefe del almacén lo necesita el lunes'] },
      { id: 'fotos', cells: ['Elegir fotos del cierre para el Facebook de la empresa', 'Comunicaciones las pidió «hoy de ser posible»'] },
      { id: 'pres', cells: ['Hacer una presentación bonita para el balance de mañana', 'Karen dijo que mañana la arman juntas'] },
    ],
    score: { notas: 3, const: 3, alm: 2, fotos: -1, pres: -1 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { tiempo: q === 'buena' ? 3 : 0, cumplimiento: picks.includes('notas') ? 3 : -2, personas: picks.includes('notas') ? 3 : -2 },
        flags: q === 'buena' ? ['cierre_ordenado'] : [], cartera: { constancias: picks.includes('const') ? 'Grupo 6 y reexamen: constancias enviadas' : 'Constancias para mañana', respaldo: picks.includes('alm') ? 'Almacén devuelto con agradecimiento' : 'Almacén sin avisar' },
        out: q === 'buena' ? 'A las 5:40 llega la última constancia. En el grupo, Jhon escribe: «Primera vez que termino algo en el tiempo que era» y le llueven aplausos de emoji.' : 'Avanzas, pero algo que tenía fecha de hoy se queda. Mañana empieza con un pendiente.',
        pro: { ok: 'Lo que la gente espera hoy, va hoy: notas y constancias.', risk: 'Las fotos y la presentación pueden esperar a mañana.', info: 'Las fotos necesitan autorización de cada persona que salga.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Día cerrado sin deudas!' : '¿Qué esperaba la gente hoy?'],
      };
    },
    mirada: {
      ve: 'Un día de cierre se gana en la última hora. Las notas y las constancias son lo que las personas esperan; lo demás, lo que espera la empresa. Cuando no alcanza para todo, primero las personas.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Quién espera', cuadrantes: ['Personas, ya', 'Personas, hoy', 'Empresa, mañana', 'Puede esperar'], items: [['Notas', .3, .95], ['Constancias', .4, .9], ['Almacén', .15, .6], ['Fotos', .3, .2], ['Presentación', .7, .15]] },
    },
  },
  {
    id: 'u6', t: '18:00', ch: 'whatsapp', who: null, titulo: 'Lo que le cuentas a Mario', banner: 'assets/foto2/acuerdo-manos.webp', show: ['confianza', 'personas'],
    body: () => `<p>Elvira se fue a las 4:30 con su constancia de participación en la cartera y los ojos brillantes: «Doce años, y es la primera vez que alguien me pregunta qué sé». Mario te escribió dos veces. <mark class="clave">Quiere saber cómo le fue</mark>.</p>`,
    type: 'compose', enviaA: 'mario', para: 'Para: Mario Infante · Jefe del local de La Esperanza', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'como', t: 'Cómo le fue', ops: [
        { id: 'c1', t: 'Mario, Elvira terminó su día. Le enseñó a contar más rápido a dos chicos y practicó la derivación con Jorge.', ok: true, por: 'Empieza por lo que ella aporta.' },
        { id: 'c2', t: 'Mario, Elvira tiene muchos malos hábitos, pero ya se los corregimos.', ok: false, por: 'La expone frente a su jefe.' },
      ] },
      { id: 'que', t: 'Lo que cambia en el local', ops: [
        { id: 'q1', t: 'Acordamos dos cosas para el local: toda diferencia se anota en el acta, aunque sea un sol, y ante cualquier consulta de salud llaman a la doctora Ríos.', ok: true, por: 'Concreto y aplicable mañana.' },
        { id: 'q2', t: 'Ya sabe todo, no hace falta que la supervise.', ok: null, por: 'Optimista de más.' },
      ] },
      { id: 'gra', t: 'Cierre', ops: [
        { id: 'g1', t: 'Gracias por mandarla en plena campaña. Sé que no fue fácil.', ok: true, por: 'Reconoces su esfuerzo.' },
        { id: 'g2', t: 'Ojalá ahora sí colabore más con la escuela.', ok: false, por: 'Un reproche que borra lo que ya hizo.' },
      ] },
    ],
    res: sel => {
      const mal = sel.como === 'c2' || sel.gra === 'g2', buenas = ['c1', 'q1', 'g1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : mal ? -3 : 1, personas: q === 'buena' ? 2 : 0 }, rel: { local: q === 'buena' ? 1 : mal ? -1 : 0 },
        flags: q === 'buena' ? ['elvira_cuidada'] : [],
        out: q === 'buena' ? 'Mario responde con un audio: «Señorita, Elvira llegó contándole a todo el local. Ya le compré un lapicero para el acta». Te ríes sola en la combi.' : mal ? 'Mario responde seco: «Ya». Elvira se enterará de lo que dijiste.' : 'Mario agradece. No queda claro qué cambia en su local.',
        pro: { ok: 'Lo que la persona aporta, lo que cambia en el local y un gracias: así se cierra con un jefe.', risk: 'Hablar mal de alguien con su jefe destruye en un mensaje lo que costó un día construir.', info: 'Pídele a Mario que te avise en una semana cómo van las actas.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Mario, de «hoy no puedo» a aliado!' : 'Ese tono…'],
      };
    },
    mirada: {
      ve: 'Hace nueve días, Mario decía «hoy no puedo, señorita». Hoy pregunta cómo le fue a su cajera. No cambió por una norma: cambió porque la escuela le resolvió algo a él.',
      visual: { tipo: 'cambio', titulo: 'Mario en dos semanas', pares: [['«Hoy no puedo, señorita»', '«¿Cómo le fue a Elvira?»'], ['Aprender mirando', 'Acta con lapicero'], ['Obstáculo', 'Aliado']] },
    },
  },
];
