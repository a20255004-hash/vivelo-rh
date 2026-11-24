// Analista de Comunicación Interna y Employer Branding · Capítulo 3 · «La agencia» · Semana 1, miércoles.
// Hilo de las dos semanas: las reseñas dicen que en las agencias nadie sale a su hora; hoy lo ves con tus ojos en Comas.
// Normas citadas (texto oficial en docs/normas/txt/DS-007-2002_LP.txt):
// - D.S. 007-2002-TR (TUO de la Ley de Jornada de Trabajo, Horario y Trabajo en Sobretiempo): art. 9 (el sobretiempo es voluntario;
//   si se acredita la prestación aun sin disposición expresa, se entiende otorgado tácitamente y procede el pago), art. 10-A (registro).
// - Ley 29733: art. 6 (finalidad). https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf

export const CAP = {
  n: 3, titulo: 'La agencia', dia: 'Semana 1, miércoles', foto: 'assets/3d/scenes/retail.webp',
  lugar: 'Banco Andino · Agencia Comas, avenida Túpac Amaru',
  inicio: '07:45', fin: '20:30', cierreHora: '20:15',
  apertura: 'Miércoles, 7:40 de la mañana. La avenida Túpac Amaru ya ruge de combis y mototaxis. Frente a la agencia Comas del Banco Andino hay una cola de jubilados con sus sillas plegables.', boton: 'Tocar la puerta de servicio',
  kusi: 'Hoy no escribes: hoy miras y escuchas. ¡Zapatillas puestas!',
  lead: 'Te ganaste la confianza de una agencia que esperaba a «la de auditoría», escuchaste a Jhoselyn, viste el cuadre de caja minuto a minuto y decidiste qué contar, y cómo, sin exponer a nadie.',
  reflexion: '¿Qué viste hoy que ningún Excel de la sede te habría mostrado?',
  siguiente: { n: 4, titulo: 'La campaña', dia: 'Semana 1, jueves' },
};

export const CARTERA = [
  { id: 'comas', p: 'Día en la agencia Comas', j: 'Don Abel · Jhoselyn', d: 2, e: 'Hoy, de 7:45 al cuadre' },
  { id: 'diagnostico', p: 'Diagnóstico de reputación', j: 'Fiorella', d: 2, e: 'Para el viernes' },
  { id: 'boletin', p: 'Boletín «Andino Contigo»', j: 'Tú · Kiara', d: 2, e: 'Enviado a las 8:15' },
  { id: 'campana', p: 'Campaña de marca empleadora', j: 'Marco · Marketing', d: 2, e: 'Brief mañana' },
];

export const FUTURO = {
  jhoselyn_confia: ['Jhoselyn te contó lo del instituto y el cuadre sin miedo.', 'Será tu voz de las agencias cuando lleguen los cambios.'],
  jhoselyn_recelosa: ['Jhoselyn te ve como «la de la sede».', 'Le costará creerte el viernes.'],
  cuadre_mapeado: ['Mapeaste el cuadre paso a paso y encontraste el cuello de botella.', 'Relaciones Laborales usará tu mapa.'],
  sobretiempo_derivado: ['Derivaste el sobretiempo sin pagar a Relaciones Laborales, sin nombres.', 'La campaña tendrá que esperar a que se corrija algo real.'],
  sobretiempo_expuesto: ['Tu informe menciona a Jhoselyn y a don Abel por su nombre.', 'En Comas se sabrá quién habló.'],
  sobretiempo_callado: ['No reportaste lo del sobretiempo para cuidar a la agencia.', 'Volverá. Capítulo 9.'],
};

export const CHATS = {
  equipo: { n: 'Experiencia del Colaborador', sub: 'Fiorella, Kiara y tú', c: '#B7791F' },
  fiorella: { n: 'Fiorella Chávez', sub: 'Jefa de Experiencia del Colaborador', who: 'fiorella' },
  jhoselyn: { n: 'Jhoselyn Ccori', sub: 'Cajera · agencia Comas', who: 'cajera' },
  abel: { n: 'Abel Huamán', sub: 'Supervisor de la agencia Comas', c: '#2F6B3F' },
  difusion: { n: 'Andino Contigo · Agencias', sub: 'Canal de difusión · 46 supervisores', c: '#2F6B3F' },
};

export const WSP = [
  { chat: 'difusion', t: '08:15', de: 'Tú', txt: 'Hola, equipo de agencias 👋 Salió «Andino Contigo»: la gratificación se paga el 15, y Huancayo atiende en quechua 💛', si: 'wsp_agencias' },
  { chat: 'equipo', t: '09:40', de: 'Kiara', txt: '¡El boletín lo abrieron 640 personas en una hora! Desde agencias, 410 😱', si: 'boletin_movil' },
  { chat: 'equipo', t: '09:40', de: 'Kiara', txt: 'El PDF lo abrieron 190. Más o menos lo de siempre 😕', si: 'boletin_largo' },
  { chat: 'abel', t: '12:10', de: 'Abel', txt: 'La Ccori le invita su refrigerio. Acepte, que si no se ofende 😄' },
  { chat: 'fiorella', t: '15:30', de: 'Fiorella', txt: '¿Cómo va Comas? Mañana a las 10 es el brief con Marco. Llega con tu mejor argumento.' },
  { chat: 'jhoselyn', t: '20:25', de: 'Jhoselyn', txt: 'Gracias por quedarse hasta el final, señorita. Nadie de la sede se había quedado.', si: 'jhoselyn_confia' },
];

export const CORREOS = [
  { t: '07:55', de: 'Gabriela Soto · Gerencia General', para: 'Comunicación Interna', asunto: 'RE: Editorial', html: '<p>El Sr. Bellido leyó el boletín en su celular camino a la oficina. Dice que es la primera vez que lo termina. Gracias.</p>', si: 'titular_honesto' },
  { t: '14:00', de: 'Renzo Salas · Relaciones Laborales', para: 'Analista de Comunicación Interna y Employer Branding', asunto: 'Consulta sobre horarios en agencias', html: '<p>Hola. Fiorella me comentó que estás viendo el tema de las salidas en agencias. Si encuentras algo concreto, mándamelo sin nombres: nosotros vemos cómo se corrige. Saludos, Renzo.</p>' },
];

export const QUIZ = [
  { q: 'Según el D.S. 007-2002-TR, el trabajo en sobretiempo es…', ops: ['Obligatorio si lo pide el supervisor', 'Voluntario, tanto en su otorgamiento como en su prestación', 'Parte de la jornada de los cajeros', 'Solo para el personal de confianza'], ok: 1, por: 'El art. 9 dice que el sobretiempo es voluntario y nadie puede ser obligado, salvo casos excepcionales que la norma describe.' },
  { q: 'El cuadre se hace después de la jornada, sin orden expresa, todos los días. ¿Corresponde pagarlo?', ops: ['No: nadie lo autorizó', 'Sí: si se acredita la prestación, se entiende otorgado tácitamente y procede el pago', 'Solo si dura más de dos horas', 'Solo a los supervisores'], ok: 1, por: 'El art. 9 del D.S. 007-2002-TR dice que, si se acredita la prestación aun sin disposición expresa, se entiende otorgada tácitamente.' },
  { q: 'Una cajera te cuenta su caso y te pide que no la nombres. En tu informe…', ops: ['La citas con nombre para dar credibilidad', 'Describes el patrón sin nombres y lo derivas a quien puede corregirlo', 'No pones nada', 'Le pides que escriba ella el informe'], ok: 1, por: 'Para corregir un patrón no se necesita exponer a quien lo contó.' },
  { q: 'Llegas a una agencia y todos creen que eres de auditoría. Lo mejor es…', ops: ['Aprovechar el miedo para que trabajen mejor', 'Decir quién eres, a qué vienes y qué no vas a hacer', 'No decir nada', 'Revisar los cuadres de cada uno'], ok: 1, por: 'La gente solo muestra cómo trabaja de verdad cuando sabe que no la están evaluando.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'a1', t: '07:50', ch: 'presencial', who: 'cajera', titulo: '«¿Usted es de auditoría?»', banner: 'assets/foto2/pasillo.webp', lugar: 'Puerta de servicio de la agencia Comas', show: ['confianza', 'personas'],
    body: (n, F) => `<p>${F.has('visita_comas') ? 'Don Abel te abre la puerta de servicio con una sonrisa cansada.' : 'Fiorella insistió en que vinieras igual. Don Abel te abre la puerta de servicio, sorprendido.'} Adentro huele a café de máquina y a billetes. Una cajera joven, de trenza larga y chaleco azul, te mira de arriba abajo mientras prende su computadora.</p><p>«Buenos días. ¿Usted es de auditoría? <mark class="clave">Porque si es de auditoría, yo ayer cuadré bien</mark>.» Es Jhoselyn Ccori.</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«No, soy de Comunicación Interna. Vengo a ver cómo es un día de verdad acá, para que lo que digamos desde la sede sea cierto. No voy a evaluar a nadie.»',
        res: { q: 'buena', fx: { confianza: 4, personas: 3 }, rel: { cajera: 1 },
          out: 'Jhoselyn suelta el aire. «Ah, ya. Entonces quédese hasta el cuadre, ahí va a ver lo bueno.» Te alcanza un vaso de café.',
          pro: { ok: 'Dices quién eres, a qué vienes y qué no harás.', info: 'Repite lo mismo a cada persona que te mire raro. Hoy lo harás diez veces.' },
          kusi: ['feliz', 'Café de máquina y una invitación. ¡Vamos bien!'] } },
      { id: 'b', label: '«Vengo de la sede, de Gestión Humana. Hagan todo como siempre, como si no estuviera.»',
        res: { q: 'aceptable', fx: { confianza: 0, personas: 1 },
          out: '«De Gestión Humana…», repite Jhoselyn, y se pone a trabajar callada. Toda la mañana, nadie se ríe cerca de ti.',
          pro: { ok: 'No mientes.', risk: '«Gestión Humana de la sede» suena a evaluación. La gente se cuida.' },
          kusi: ['pensando', 'Nadie actúa normal si cree que lo miran.'] } },
      { id: 'c', label: 'No aclarar nada: si creen que eres de auditoría, por lo menos hoy trabajarán ordenados y verás el proceso ideal.',
        res: { q: 'riesgosa', fx: { confianza: -4, calidad: -2 }, rel: { cajera: -1 }, flags: ['jhoselyn_recelosa'],
          out: 'La agencia funciona como un reloj… para ti. Hoy el cuadre termina a las 6:35. Don Abel te mira de lejos, incómodo.',
          pro: { ok: 'Ves el proceso «perfecto».', risk: 'Viniste a ver la verdad y te muestran una función de teatro.' },
          kusi: ['triste', 'Viste el ensayo, no la obra.'] } },
    ],
    rules: [[BP, 'En una visita de diagnóstico, di quién eres y qué no vas a hacer. Si no, verás un ensayo.']],
    mirada: {
      ve: 'En una agencia bancaria, cualquiera que venga de la sede es sospechoso: auditoría, riesgos, cumplimiento. Para ver la realidad tienes que desactivar esa sospecha en el primer minuto.',
      visual: { tipo: 'balanza', a: { t: 'Dejar que crean que auditas', items: ['Todo se ve ordenado', 'Nadie te cuenta nada', 'Diagnóstico falso'] }, b: { t: 'Decir a qué vienes', items: ['Te muestran el día real', 'Te cuentan el porqué', 'Diagnóstico útil'] } },
    },
  },
  {
    id: 'a2', t: '10:30', ch: 'presencial', who: null, titulo: 'Lo que miras en la mañana', banner: 'assets/foto/supervisa.webp', lugar: 'Zona de ventanillas', show: ['calidad', 'tiempo'],
    body: () => `<p>La cola no baja de quince personas: jubilados cobrando su pensión, una señora que viene a pagar el préstamo de su bodega, un joven que no entiende por qué le bloquearon la tarjeta. Cuatro ventanillas, tres abiertas.</p><p>No puedes mirar todo. <mark class="clave">Elige tres cosas para observar con atención</mark> hasta el refrigerio.</p>`,
    type: 'pick', n: 3, prompt: 'Elige tres cosas para observar en la mañana.', boton: 'Observar esto', resumen: 'Observaste',
    cols: ['Qué observar', 'Por qué'],
    rows: [
      { id: 'vent', cells: ['Por qué hay una ventanilla cerrada', 'Puede explicar la cola y el cuadre tardío'] },
      { id: 'clientes', cells: ['Cuántos clientes siguen dentro a las 6, al cerrar la puerta', 'Se atienden antes del cuadre'] },
      { id: 'sist', cells: ['Cuánto demora el sistema en cada operación', 'Si el sistema es lento, todo se alarga'] },
      { id: 'celus', cells: ['Quién usa el celular en horario', 'Para saber quién «pierde el tiempo»'] },
      { id: 'uniforme', cells: ['Si todos llevan bien el chaleco y la credencial', 'Para las fotos de la campaña'] },
      { id: 'refri', cells: ['Si toman su refrigerio completo', 'Señal de carga de trabajo'] },
    ],
    score: { vent: 3, clientes: 3, sist: 2, refri: 2, celus: -3, uniforme: -1 },
    res: (picks, sc) => {
      const q = sc >= 7 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, personas: picks.includes('celus') ? -3 : 1 },
        cartera: { comas: q === 'buena' ? 'Mañana: ventanilla vacante, clientes al cierre, sistema lento' : 'Mañana observada a medias' },
        out: q === 'buena' ? 'Descubres que la cuarta ventanilla está vacía hace tres meses porque la cajera renunció y no la reponen. Y que el sistema se congela casi un minuto con cada pago de pensión.' : picks.includes('celus') ? 'Anotas quién mira el celular. Jhoselyn lo nota y deja de hablarte por un rato.' : 'Observas cosas reales, pero te falta la pieza que explica la tarde.',
        pro: { ok: 'Buscas causas, no culpables.', risk: 'Vigilar celulares te convierte en lo que dijiste que no eras: auditoría.' },
        kusi: [q === 'buena' ? 'sorpresa' : 'pensando', q === 'buena' ? '¡Una ventanilla vacía hace tres meses!' : '¿Eso explica por qué salen tarde?'],
      };
    },
    rules: [[BP, 'En una observación de diagnóstico, mira el proceso y sus causas; no a las personas.']],
    mirada: {
      ve: 'Las causas de un problema de clima rara vez están en las personas: están en una vacante que nadie repone, un sistema que se congela, una cola que no baja. Si observas eso, tu diagnóstico podrá cambiar algo.',
      visual: { tipo: 'matriz', x: 'Facilidad de corregir', y: 'Impacto en la hora de salida', cuadrantes: ['Corregir ya', 'Prioridad', 'Menor', 'Proyecto largo'], items: [['Ventanilla vacante', .7, .85], ['Clientes al cierre', .4, .7], ['Sistema lento', .2, .6], ['Celulares', .8, .05]] },
    },
  },
  {
    id: 'a3', t: '13:10', ch: 'presencial', who: 'cajera', titulo: 'El refrigerio de Jhoselyn', banner: 'assets/foto/cafe.webp', lugar: 'Cocinita de la agencia', show: ['personas', 'confianza'],
    body: () => `<p>Jhoselyn abre su táper: arroz con pollo y una papa a la huancaína que le mandó su mamá. Te invita la mitad. Tiene veinte minutos de los cuarenta y cinco que le tocan.</p><p>«Pregúnteme nomás, señorita. <mark class="clave">Pero rápido, que la cola no espera</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Tienes tiempo para dos preguntas. Elige.',
    opts: [
      { id: 'dia', label: '¿A qué hora sales normalmente?', info: '«Cerramos a las seis. Si cuadra a la primera, a las siete y cuarto. Si hay diferencia de un sol, a las ocho. Marco la salida al final, eso sí; don Abel nunca nos dice que marquemos antes. Pero en la boleta no aparece nada de horas extras.»' },
      { id: 'vida', label: '¿Qué te cuesta más de salir tarde?', info: '«Estudio Contabilidad de noche en un instituto en Independencia. Entro a las 7. Este ciclo he faltado tanto que me van a jalar en Costos. Y mi hijito de cuatro años se queda con mi mamá; ella vino de Sicuani para ayudarme.»' },
      { id: 'gusta', label: '¿Qué te gusta de trabajar aquí?', info: '«Los clientes. Los abuelitos me traen caramelos. Y que el banco me dio mi primer trabajo con planilla y seguro. Por eso me da cólera: me gusta, pero no puedo con este horario.»' },
      { id: 'quien', label: '¿Quién escribió las reseñas de esta agencia?', info: 'Jhoselyn deja el tenedor. «¿Para eso vino?» Cierra el táper y vuelve a su ventanilla con diez minutos de refrigerio sin usar.' },
    ],
    res: picks => {
      const mala = picks.includes('quien');
      return {
        q: null, fx: { personas: mala ? -5 : 4, confianza: mala ? -4 : 3 }, rel: { cajera: mala ? -1 : 1 },
        flags: [mala ? 'jhoselyn_recelosa' : 'jhoselyn_confia'],
        out: mala ? 'Pierdes la conversación y algo más: la confianza de la persona que mejor conoce el problema.' : 'Jhoselyn se ríe por primera vez: «Nadie de la sede me había preguntado eso». Te pide que la próxima campaña no tenga «modelos que nunca han cuadrado una caja».',
        kusi: mala ? ['triste', 'Esa pregunta te convirtió en auditoría.'] : ['feliz', 'Una papa a la huancaína y una historia verdadera.'],
      };
    },
    rules: [[BP, 'Pregunta por la experiencia, no por quién se quejó.']],
    mirada: {
      ve: 'Jhoselyn no es una «resentida»: le gusta su trabajo y está a punto de perder un curso por el horario. Esa mezcla, agradecimiento y frustración, es la verdad de muchas marcas empleadoras. Si solo cuentas la mitad, la otra mitad aparece en las reseñas.',
      visual: { tipo: 'balanza', a: { t: 'Lo que le gusta', items: ['Los clientes', 'Primer trabajo con planilla', 'Su seguro'] }, b: { t: 'Lo que le pesa', items: ['Salir a las 7:15 o las 8', 'Faltar al instituto', 'Horas extra que no aparecen en la boleta'] } },
    },
  },
  {
    id: 'a4', t: '18:00', ch: 'presencial', who: null, titulo: 'El cuadre, minuto a minuto', banner: 'assets/esc/reloj.webp', lugar: 'Agencia Comas, puerta cerrada', show: ['calidad', 'cumplimiento'],
    body: () => `<p>A las 6 en punto, el vigilante baja la reja. Adentro quedan nueve clientes. Te sientas detrás de don Abel con tu libreta y anotas cada paso con la hora.</p><p>A las 7:20, Jhoselyn marca su salida. Te toca <mark class="clave">ordenar lo que viste</mark> para entender dónde se va el tiempo.</p>`,
    type: 'secuencia', prompt: 'Ordena los pasos del cierre tal como ocurrieron. Usa las flechas.', boton: 'Guardar el mapa',
    items: [
      { id: 'reja', t: '6:00 · Se baja la reja con nueve clientes adentro', por: 'Se atienden todos los que ya entraron.' },
      { id: 'atiende', t: '6:00 a 6:35 · Atender a los clientes que quedaron dentro', por: 'Con tres ventanillas, se va media hora.' },
      { id: 'cuenta', t: '6:35 a 6:55 · Contar el efectivo de cada caja', por: 'Billete por billete, moneda por moneda.' },
      { id: 'sist', t: '6:55 a 7:10 · Cuadrar en el sistema, que se congela dos veces', por: 'El mismo sistema lento de la mañana.' },
      { id: 'firma', t: '7:10 a 7:15 · Firma del supervisor y traslado a bóveda', por: 'Don Abel revisa caja por caja.' },
      { id: 'marca', t: '7:20 · Marcar la salida', por: 'Una hora y veinte después del cierre.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -2, cumplimiento: 2 },
        flags: q === 'riesgosa' ? [] : ['cuadre_mapeado'],
        cartera: { comas: q === 'riesgosa' ? 'Cierre observado sin mapa claro' : 'Cierre mapeado: 80 minutos después de la reja' },
        out: q === 'buena' ? 'Tu mapa tiene dos cuellos de botella claros: la ventanilla vacante, que alarga la atención final, y el sistema, que se congela. Ninguno de los dos se arregla con un post en LinkedIn.' : 'El mapa queda con algún paso fuera de lugar, pero la conclusión es la misma: 80 minutos después del cierre.',
        pro: { ok: 'Un mapa con horas convierte una queja en un problema medible.', info: 'Mándaselo a Renzo, de Relaciones Laborales, sin nombres.' },
        kusi: [q === 'buena' ? 'sorpresa' : 'pensando', q === 'buena' ? '¡Ochenta minutos! Cada día.' : 'Casi. El orden importa.'],
      };
    },
    rules: [[LEY, 'El empleador debe registrar el trabajo en sobretiempo (D.S. 007-2002-TR, art. 10-A).']],
    mirada: {
      ve: 'Ochenta minutos al día, cinco días a la semana, son más de seis horas semanales que hoy nadie llama por su nombre. Tu mapa no acusa a nadie: muestra dónde se va el tiempo y, por eso, qué se puede cambiar.',
      visual: { tipo: 'linea', titulo: 'Del cierre a la salida', hitos: [['6:00', 'Reja abajo'], ['6:35', 'Último cliente'], ['6:55', 'Efectivo contado'], ['7:10', 'Sistema cuadrado'], ['7:20', 'Salida marcada']] },
    },
  },
  {
    id: 'a5', t: '19:40', ch: 'llamada', who: 'fiorella', titulo: 'Lo que llevas de vuelta', banner: 'assets/foto2/tension.webp', lugar: 'Paradero de la Túpac Amaru', show: ['etica', 'cumplimiento', 'personas'],
    body: (n, F) => `<p>Esperas el bus en la Túpac Amaru, con el ruido de los mototaxis. Llamas a Fiorella. ${F.has('jhoselyn_confia') ? 'Jhoselyn te dijo al despedirse: «No ponga mi nombre, por favor. Ni el de don Abel, que él no tiene la culpa».' : 'Tienes tu mapa del cuadre y una agencia que te miró con desconfianza.'}</p><p>Fiorella: «Mañana es el brief con Marco. <mark class="clave">¿Qué hacemos con lo que viste?</mark>»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Mandar hoy a Renzo, de Relaciones Laborales, el mapa del cuadre y el patrón de las 31 agencias, sin nombres, y proponer que la campaña no hable de horarios hasta que se corrija algo concreto.',
        res: { q: 'buena', fx: { cumplimiento: 5, etica: 4, personas: 3 }, rel: { fiorella: 1 }, flags: ['sobretiempo_derivado'],
          out: 'Fiorella se queda callada un segundo. «Marco se va a molestar: quería "salimos a tiempo" como lema. Pero tienes razón.» Renzo te responde a las 9 de la noche: «Recibido. Esto hay que verlo con Operaciones».',
          pro: { ok: 'Lo que es un posible incumplimiento va a quien puede corregirlo, y nadie queda expuesto.', risk: 'La campaña pierde su mensaje más vistoso. Tendrás que defenderlo mañana.', info: 'El sobretiempo que se acredita, aunque nadie lo haya ordenado, se paga (D.S. 007-2002-TR, art. 9).' },
          kusi: ['celebra', 'Primero se corrige, después se cuenta. ¡Así!'] } },
      { id: 'b', label: 'Escribir un informe completo con el caso de Jhoselyn y don Abel con nombre: con una historia real, Gerencia lo va a tomar en serio.',
        res: { q: 'riesgosa', fx: { cumplimiento: 2, etica: -4, personas: -4 }, rel: { cajera: -1 }, flags: ['sobretiempo_expuesto'],
          out: 'El informe es contundente. Pero circula por tres gerencias y llega al gerente de zona de Lima Norte, que llama a don Abel esa misma noche.',
          pro: { ok: 'El problema se toma en serio.', risk: 'Usar el testimonio de alguien con nombre, sin su permiso, para otra cosa que lo que te contó, la expone.' },
          kusi: ['triste', 'Ella te pidió una sola cosa.'] } },
      { id: 'c', label: 'No mencionar el sobretiempo por ahora: es tu primera semana, don Abel fue sincero contigo y no quieres meter a la agencia en problemas.',
        res: { q: 'aceptable', fx: { personas: 1, cumplimiento: -4, etica: -2 }, flags: ['sobretiempo_callado'],
          out: 'Fiorella acepta, pero suena decepcionada: «Entonces, ¿qué contamos en la campaña?». Esa noche, en Comas, alguien vuelve a salir a las ocho.',
          pro: { ok: 'Proteges a la agencia hoy.', risk: 'Callar un posible incumplimiento no protege a nadie: solo lo deja crecer.' },
          kusi: ['preocupado', 'Callar no es cuidar.'] } },
    ],
    rules: [[LEY, 'El sobretiempo es voluntario y, si se acredita la prestación aun sin orden expresa, procede su pago (D.S. 007-2002-TR, art. 9).'], [LEY, 'Lo que una persona te cuenta para un diagnóstico no se usa para otra finalidad sin su permiso (Ley 29733, art. 6).']],
    mirada: {
      ve: 'Comunicación Interna no investiga ni sanciona, pero tampoco puede mirar a otro lado. Su papel es que el problema llegue completo a quien puede corregirlo y que nadie pague por haberlo contado. Y, sobre todo, no prometer afuera lo que todavía no es verdad adentro.',
      visual: { tipo: 'flujo', titulo: 'Lo que viste, a dónde va', pasos: ['Observar', 'Mapear sin nombres', 'Derivar a Relaciones Laborales', 'Corregir', 'Recién entonces, contarlo'], aqui: 2 },
      normas: [{ ley: 'D.S. 007-2002-TR, art. 9', dice: 'El trabajo en sobretiempo es voluntario. Si se acredita su prestación aun sin disposición expresa del empleador, se entiende otorgado tácitamente y procede su pago.', practica: 'El cuadre después del cierre, todos los días y con salida marcada, no deja de ser sobretiempo porque nadie lo haya «autorizado».' }],
    },
  },
  {
    id: 'a6', t: '20:15', ch: 'whatsapp', who: 'cajera', titulo: 'Un mensaje para Jhoselyn', banner: 'assets/esc/camino.webp', lugar: 'Bus de regreso por la Panamericana Norte', show: ['personas', 'confianza'],
    body: () => `<p>El bus avanza a paso de tortuga por la Panamericana Norte. Piensas en Jhoselyn, que a esta hora ya perdió su clase de Costos.</p><p>Quieres escribirle antes de que piense que <mark class="clave">«la de la sede» vino, miró y se fue</mark>.</p>`,
    type: 'compose', enviaA: 'jhoselyn', para: 'Para: Jhoselyn Ccori · Cajera, agencia Comas', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'gracias', t: 'Agradecer', ops: [
        { id: 'g1', t: 'Jhoselyn, gracias por el día y por la papa a la huancaína. Aprendí más hoy que en una semana de Excel.', ok: true, por: 'Cercano y específico.' },
        { id: 'g2', t: 'Estimada colaboradora: agradecemos su participación en la visita de diagnóstico.', ok: false, por: 'Suena a la sede que ella teme.' },
      ] },
      { id: 'que', t: 'Qué harás con lo que viste', ops: [
        { id: 'q1', t: 'Lo que vi del cierre lo voy a pasar a quien puede cambiarlo, sin tu nombre ni el de don Abel.', ok: true, por: 'Le dices qué harás y le cumples lo que pidió.' },
        { id: 'q2', t: 'Te prometo que en un mes ya van a salir a las seis.', ok: false, por: 'No depende de ti. Una promesa rota pesa más que el silencio.' },
      ] },
      { id: 'puerta', t: 'Dejar la puerta abierta', ops: [
        { id: 'p1', t: 'Si algo cambia, para bien o para mal, escríbeme. Te voy a contar cómo avanza.', ok: true, por: 'Ida y vuelta.' },
        { id: 'p2', t: 'Cualquier cosa, habla con tu supervisor.', ok: null, por: 'Correcto, pero cierra la puerta que abriste hoy.' },
      ] },
    ],
    res: sel => {
      const mal = sel.que === 'q2' || sel.gracias === 'g2', buenas = ['g1', 'q1', 'p1'].filter(x => Object.values(sel).includes(x)).length;
      const q = sel.que === 'q2' ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 4 : mal ? -2 : 1, confianza: q === 'buena' ? 3 : 0 }, rel: { cajera: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['jhoselyn_confia'] : [],
        out: q === 'buena' ? 'Jhoselyn responde con un audio de diez segundos: se escucha a su hijo de fondo gritando «¡mamá!». «Gracias, señorita. Ojalá.»' : q === 'riesgosa' ? 'Jhoselyn responde: «Ya, señorita, ojalá». Tu promesa tiene fecha y no depende de ti.' : 'Jhoselyn responde con un «ok, gracias». La puerta quedó a medio abrir.',
        pro: { ok: 'Agradeces, dices qué harás y no prometes lo que no controlas.', risk: 'Prometer un resultado que depende de Operaciones te quita credibilidad cuando no llegue.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Ese «mamá» de fondo… por eso haces esto.' : 'Cuidado con lo que prometes.'],
      };
    },
    rules: [[BP, 'A quien te dio su tiempo, cuéntale qué harás con lo que te dio.']],
    mirada: {
      ve: 'Hoy aprendiste algo que define este puesto: la marca empleadora se construye en una agencia de Comas, no en el piso 9. Y la gente que te abre la puerta necesita saber que su verdad no se usará en su contra.',
      visual: { tipo: 'mensaje', titulo: 'Lo que le escribes', txt: 'Jhoselyn, gracias por el día y por la papa a la huancaína. Lo que vi del cierre lo voy a pasar a quien puede cambiarlo, sin tu nombre ni el de don Abel. Si algo cambia, escríbeme.' },
    },
  },
];
