// Generalista de RR.HH. en operación minera · Capítulo 6 · «El rumor» · Semana 2, lunes.
// Hilo de las dos semanas: RR.HH. dentro de una mina de altura, entre trabajadores propios, contratistas y una comunidad.
// Normas citadas:
// - D.S. 003-97-TR (TUO del D. Leg. 728), art. 46: causas objetivas para el cese colectivo (entre ellas, motivos
//   económicos, tecnológicos, estructurales o análogos); art. 48: procedimiento ante la Autoridad Administrativa de Trabajo,
//   con información a los trabajadores y negociación. No se citan porcentajes ni plazos.
//   https://lpderecho.pe/jurisprudencia-articulo-46-tuo-decreto-legislativo-728-cese-colectivo/
//   https://lpderecho.pe/procedimiento-despido-colectivo-motivos-economicos-expediente-01048-2011-pa-tc/
// - Ley 26790 y D.S. 003-98-SA (SCTR), y Ley 29245 (tercerización), ya citadas en el capítulo 1.

export const CAP = {
  n: 6, titulo: 'El rumor', dia: 'Semana 2, lunes', foto: 'assets/3d/scenes/corporativo.webp',
  lugar: 'Minera Puquio · Apurímac, 4,100 m s. n. m.',
  inicio: '06:00', fin: '20:00', cierreHora: '19:45',
  apertura: 'Tu día 8 de 14. El fin de semana pasó entre papeles y una caminata hasta la laguna. A las 6:05, antes de que suene la alarma, vibra el celular: Doña Juana.', boton: 'Contestar',
  kusi: 'Un rumor corre más rápido que un volquete. Hoy toca llegar antes que él.',
  lead: 'Respondiste a la comunidad sin mentir ni inventar, corregiste un comunicado peligroso, atendiste un accidente en el frente, informaste primero a quienes debían saberlo y escribiste un comunicado claro.',
  reflexion: '¿Qué es peor para la confianza: una mala noticia o el silencio?',
  siguiente: { n: 7, titulo: 'El bloqueo', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'rumor', p: 'Rumor de despidos', j: 'Percy · RR.HH.', d: 0, e: 'Corre en el comedor' },
  { id: 'comunidad', p: 'Relación con la comunidad', j: 'Doña Juana · Comunidad', d: 0, e: 'Alarmada' },
  { id: 'contratistas', p: 'Contratistas', j: 'Ing. Mario Salas', d: 0, e: 'Frente de Movitierra' },
  { id: 'comunicado', p: 'Comunicado interno', j: 'Percy · Lima', d: 0, e: 'Borrador de Lima' },
];

export const FUTURO = {
  rumor_honesto: ['Le dijiste a Doña Juana lo que sabías y lo que no.', 'Ella te llamará primero cuando la asamblea decida.'],
  rumor_negado: ['Le aseguraste a Doña Juana que «no hay nada».', 'Cuando lea el plan de Lima, sentirá que le mentiste.'],
  comunicado_corregido: ['Frenaste un comunicado de Lima que amenazaba y confundía.', 'Lima te escuchará en la mesa de diálogo.'],
  comunicado_claro: ['Publicaste un comunicado claro: qué es verdad, qué no y qué viene.', 'Los trabajadores propios no se sumarán al bloqueo.'],
  accidente_atendido: ['Evacuaste a Wálter, de Movitierra, y aseguraste su atención.', 'Su familia sabrá que la minera respondió.'],
  delegados_primero: ['Informaste primero a delegados y a la comunidad.', 'Nadie se enteró por el comedor.'],
};

export const CHATS = {
  grupo: { n: 'RR.HH. Puquio', sub: 'Percy y el equipo de campo', c: '#7A5200' },
  percy: { n: 'Percy Huillca', sub: 'Superintendente de RR.HH.', who: 'percy' },
  presidenta: { n: 'Doña Juana Huamán', sub: 'Presidenta de la comunidad', who: 'presidenta' },
  contratista: { n: 'Ing. Mario Salas', sub: 'Administrador de Movitierra', who: 'contratista' },
  delegado: { n: 'Wilber Mamani', sub: 'Delegado de los operadores de mina', c: '#2F6B3F' },
  yuri: { n: 'Yuri Ccorahua', sub: 'Operador de volquete', who: 'yuri' },
  lima: { n: 'Carla Rentería', sub: 'Comunicaciones Corporativas · Lima', c: '#4A5A8A' },
};

export const WSP = [
  { chat: 'grupo', t: '05:58', de: 'Percy', txt: 'Llegó el correo de Lima. No es lo que dicen en el comedor, pero tampoco es nada. Te lo reenvío. Reunión a las 7:15.' },
  { chat: 'yuri', t: '06:30', de: 'Yuri', txt: 'Ingeniera, en el bus dicen que van a botar a cien y a los comuneros primero. ¿Es verdad? Mi mamá ya me llamó llorando.' },
  { chat: 'lima', t: '07:40', de: 'Carla', txt: 'Hola, te paso el comunicado para el mural. Gerencia quiere que salga hoy sin cambios 🙏' },
  { chat: 'contratista', t: '09:35', de: 'Ing. Salas', txt: 'INGENIERA URGENTE. Wálter, de mi frente, se aplastó la mano con una plancha. Lo están bajando al tópico.' },
  { chat: 'contratista', t: '10:20', de: 'Ing. Salas', txt: 'Ingeniera… la póliza de Wálter todavía no estaba activa. ¿Qué hago?', si: 'sctr_cede' },
  { chat: 'delegado', t: '17:10', de: 'Wilber', txt: 'Leímos el comunicado. Los muchachos más tranquilos. Pero la comunidad está convocando asamblea para hoy en la noche.', si: 'comunicado_claro' },
  { chat: 'presidenta', t: '19:05', de: 'Doña Juana', txt: 'Señorita, usted me dijo que no había nada. El plan dice que van a «revisar dotación de contratistas». Ahí están la mitad de mis comuneros.', si: 'rumor_negado' },
];

export const CORREOS = [
  { t: '05:50', de: 'Gerencia General · Lima', para: 'Superintendentes de unidad', asunto: 'Plan de eficiencias 2027', html: '<p>Por la caída del precio del cobre, se aplicará un plan de eficiencias: reducción de costos operativos, revisión de tarifas con proveedores y <b>revisión de la dotación de contratistas</b> en la próxima licitación. No se contempla, por ahora, reducción de personal propio.</p><p>Comunicar con prudencia.</p>' },
  { t: '12:10', de: 'Seguridad · Puquio', para: 'RR.HH. · Operaciones · Movitierra', asunto: 'Incidente · Frente 4 · trabajador de contratista', html: '<p>Trabajador de Movitierra con lesión en mano derecha por aplastamiento con plancha metálica. Evacuado a Abancay. Se inicia investigación del incidente.</p>' },
];

export const QUIZ = [
  { q: 'Un cese colectivo por motivos económicos en el Perú…', ops: ['Se decide por correo desde Lima', 'Sigue un procedimiento ante la Autoridad Administrativa de Trabajo, con información a los trabajadores', 'No existe', 'Solo requiere avisar al sindicato'], ok: 1, por: 'El D.S. 003-97-TR (arts. 46 y 48) fija las causas objetivas y el procedimiento ante la Autoridad Administrativa de Trabajo.' },
  { q: 'Te preguntan por un rumor y no tienes toda la información. ¿Qué dices?', ops: ['Que no hay nada', 'Lo que sabes, lo que no sabes y cuándo sabrás más', 'Que no puedes hablar', 'Lo que te parece que pasará'], ok: 1, por: 'La honestidad sobre lo que no se sabe genera más confianza que una tranquilidad falsa.' },
  { q: 'Un comunicado que dice «quien difunda rumores será sancionado»…', ops: ['Detiene los rumores', 'Suele aumentar el miedo y la desconfianza', 'Es obligatorio', 'Es neutral'], ok: 1, por: 'Amenazar a quien pregunta confirma, para muchos, que el rumor es cierto.' },
  { q: 'Un trabajador de contratista se accidenta en la mina. Lo primero es…', ops: ['Averiguar de quién es la culpa', 'Atenderlo y evacuarlo; después, verificar cobertura e investigar', 'Esperar a que la contratista decida', 'No informar a nadie'], ok: 1, por: 'Primero la persona. El SCTR, la investigación y las responsabilidades vienen después, pero vienen.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'g1', t: '06:05', ch: 'llamada', who: 'presidenta', titulo: '«Dicen que van a botar»', banner: 'assets/esc/alarma.webp', lugar: 'Tu habitación del campamento', show: ['confianza', 'etica'],
    body: (n, F) => `<p>Doña Juana habla rápido, mitad en quechua. ${F.has('resultados_expuestos') ? '«Primero lo de Teodoro, que todo el pueblo sabe. Ahora esto.»' : F.has('conteo_transparente') ? '«Usted me mostró los números. Ahora dígame la verdad.»' : '«Dígame la verdad, señorita.»'}</p><p>«En la comunidad dicen que <mark class="clave">van a botar a cien y a los comuneros primero</mark>. ¿Es cierto?» Todavía no has leído el correo de Lima con calma.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Decirle que llegó un correo de Lima sobre ahorro de costos, que aún lo estás leyendo, que no habla de despedir a los comuneros, y que la llamarás a las 10 con la información completa.',
        res: { q: 'buena', fx: { confianza: 5, etica: 3, tiempo: -1 }, rel: { presidenta: 1 }, flags: ['rumor_honesto'], cartera: { comunidad: 'Llamada comprometida a las 10' },
          out: 'Doña Juana respira. «A las diez, señorita. Ni un minuto más.» Cuelgas y abres el correo con las manos frías.',
          pro: { ok: 'No niegas ni confirmas lo que no sabes, y te comprometes con una hora.', risk: 'Tienes que cumplir a las 10.', info: 'Cuando no sabes todo, di qué sabes, qué no y cuándo sabrás más.' },
          kusi: ['animo', 'Verdad a medias, no: verdad con hora.'] } },
      { id: 'b', label: 'Tranquilizarla: no hay ningún despido, es un chisme del comedor.',
        res: { q: 'riesgosa', fx: { confianza: 2, etica: -4 }, rel: { presidenta: 1 }, flags: ['rumor_negado'], cartera: { comunidad: 'Le dijiste que no había nada' },
          out: 'Doña Juana se despide más calmada. Luego lees el correo: «revisión de la dotación de contratistas». Se te seca la boca.',
          pro: { ok: 'Calmas a la presidenta.', risk: 'Negar algo que no conoces se convierte en mentira apenas aparece el documento.' },
          kusi: ['preocupado', '¿Y si el correo dice otra cosa?'] } },
      { id: 'c', label: 'Decirle que no puedes hablar de temas de Lima y que espere el comunicado oficial.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, confianza: -3 }, rel: { presidenta: -1 },
          out: '«Entonces es cierto», dice Doña Juana, y cuelga. Para ella, el silencio confirmó el rumor.',
          pro: { ok: 'No dices nada que no esté aprobado.', risk: 'En una comunidad, «no puedo hablar» suena a «es verdad».' },
          kusi: ['pensando', 'El silencio también comunica.'] } },
    ],
    rules: [[BP, 'Ante un rumor: lo que sabes, lo que no y cuándo sabrás más.']],
    mirada: {
      ve: 'Doña Juana no llamó para pelear: llamó porque tiene miedo, igual que la mamá de Yuri. La primera respuesta a un rumor define si te vuelven a llamar o si se organizan sin ti.',
      visual: { tipo: 'balanza', a: { t: '«No hay nada»', items: ['Calma hoy', 'Mentira mañana'] }, b: { t: '«Esto sé, esto no, a las 10»', items: ['Calma con condiciones', 'Te creen cuando llames'] } },
    },
  },
  {
    id: 'g2', t: '07:50', ch: 'documento', who: null, titulo: 'El comunicado de Lima', banner: 'assets/foto/revisa.webp', lugar: 'Contenedor de RR.HH.', show: ['cumplimiento', 'calidad', 'etica'],
    body: () => `<p>Carla, de Comunicaciones en Lima, te manda el comunicado para el mural «sin cambios». Percy lo lee por encima de tu hombro y te dice: «Revísalo tú. Tú estás aquí arriba».</p><p>Lo lees como lo leería un operador a las seis de la mañana, <mark class="clave">con miedo</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no puede salir así o hay que corregir.',
    doc: { t: 'Comunicado interno · Plan de eficiencias', sub: 'Borrador de Comunicaciones Corporativas · Lima' },
    lines: [
      { id: 'prescindir', t: '«Por razones de eficiencia, la empresa podrá prescindir de personal sin más trámite.»', bad: LEY, why: 'Un cese colectivo por motivos económicos tiene causas objetivas y un procedimiento ante la Autoridad Administrativa de Trabajo (D.S. 003-97-TR, arts. 46 y 48). «Sin más trámite» es falso y alarmante.' },
      { id: 'sancion', t: '«Quien difunda rumores será sancionado.»', bad: BP, why: 'Amenazar a quien pregunta confirma el miedo y empuja la conversación al comedor.' },
      { id: 'cobre', t: '«La caída del precio del cobre nos obliga a reducir costos operativos.»' },
      { id: 'dotacion', t: '«Se optimizará la dotación.»', bad: BP, why: 'Así, sin decir de quién ni cuándo, cualquiera entiende «despidos». El plan habla de contratistas y de la próxima licitación.' },
      { id: 'propios', t: '«No se contempla reducción de personal propio.»' },
      { id: 'consultas', t: '«No se atenderán consultas individuales sobre este tema.»', bad: BP, why: 'Cerrar las preguntas es dejar que las responda el rumor.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: !missLey && hitsBp >= 2 ? 'buena' : !missLey ? 'aceptable' : 'riesgosa',
      flags: missLey ? [] : ['comunicado_corregido'],
      out: missLey ? 'El comunicado sale casi igual. A las 11, una foto del mural con «sin más trámite» ya está en el grupo de la comunidad.' : `Le devuelves a Carla ${hitsLey + (hitsBp || 0)} observaciones con una frase: «Así, mañana tenemos un bloqueo». Carla responde: «Uf. Ok. ¿Me ayudas a reescribirlo?».`,
      cartera: { comunicado: missLey ? 'Comunicado de Lima publicado' : 'Comunicado de Lima frenado' },
      pro: { ok: 'Quien está en campo sabe cómo se lee un comunicado aquí arriba. Decirlo a tiempo es parte del trabajo.', risk: 'Un comunicado que afirma algo ilegal y amenaza a quien pregunta puede encender la unidad.', info: 'Propón siempre una versión alternativa, no solo observaciones.' },
      kusi: missLey ? ['indignado', '¿«Sin más trámite»? ¡No!'] : ['celebra', '¡Comunicado frenado a tiempo!'],
    }),
    rules: [[LEY, 'El cese colectivo tiene causas objetivas y un procedimiento ante la Autoridad Administrativa de Trabajo (D.S. 003-97-TR, arts. 46 y 48).']],
    mirada: {
      ve: 'Carla escribió desde Lima, sin pensar en un bus a oscuras lleno de gente con miedo. No es mala fe: es distancia. La generalista de campo traduce la decisión de Lima al idioma de la unidad.',
      visual: { tipo: 'cambio', titulo: 'De Lima al mural', pares: [['Prescindir sin más trámite', 'No hay reducción de personal propio'], ['Se optimizará la dotación', 'Las contratistas se revisarán en la próxima licitación'], ['No se atenderán consultas', 'Pregunta a RR.HH. en el contenedor']] },
      normas: [{ ley: 'D.S. 003-97-TR (TUO del D. Leg. 728), arts. 46 y 48', dice: 'El cese colectivo procede por causas objetivas, como motivos económicos, y sigue un procedimiento ante la Autoridad Administrativa de Trabajo, con información a los trabajadores.', practica: 'Nadie puede anunciar despidos «sin más trámite».' }],
    },
  },
  {
    id: 'g3', t: '09:40', ch: 'llamada', who: 'contratista', titulo: 'Wálter, en el frente 4', banner: 'assets/3d/scenes/mineria.webp', lugar: 'Camino al tópico', show: ['personas', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Wálter Ccahua, 26 años, de Chalhuanca, se aplastó la mano derecha con una plancha metálica. Lo traen al tópico en la camioneta de Movitierra. Grita cada vez que la camioneta salta.</p><p>${F.has('sctr_cede') ? 'Sabes, antes de que nadie te lo diga, que Wálter es uno de los ocho que dejaste subir el lunes «mientras se tramitaba». <mark class="clave">Su póliza no estaba activa</mark>.' : 'Es uno de los ocho de Movitierra. Su póliza está vigente desde el miércoles. <mark class="clave">Ahora hay que actuar rápido</mark>.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Que el doctor Ayala lo estabilice y que la ambulancia lo baje ya a Abancay. Mientras tanto, verificar su cobertura y, si falla, que la minera garantice su atención; avisar a Percy, a Seguridad y a su familia.',
        res: { q: 'buena', fx: { personas: 6, etica: 4, cumplimiento: 3, tiempo: -2 }, rel: { contratista: 1, percy: 1 }, flags: ['accidente_atendido'], cartera: { contratistas: 'Wálter evacuado · atención garantizada' },
          out: 'A las 10:40 la ambulancia sale con Wálter. Tú llamas a su mamá a Chalhuanca. Ella solo dice «gracias, mamita, gracias» y llora. Seguridad abre la investigación.',
          pro: { ok: 'Primero la persona; luego la cobertura, la familia y la investigación, en ese orden y sin soltar ninguna.', risk: 'Si no tenía seguro, la empresa principal puede tener que responder.', info: 'Llama tú a la familia: que no se entere por el grupo de WhatsApp.' },
          kusi: ['animo', 'Primero Wálter. Todo lo demás, después.'] } },
      { id: 'b', label: 'Que Movitierra se encargue: es su trabajador, su frente y su responsabilidad. Tú tienes el comunicado y el rumor encima.',
        res: { q: 'riesgosa', fx: { personas: -5, etica: -5 }, rel: { contratista: -1 }, cartera: { contratistas: 'Accidente en manos de Movitierra' },
          out: 'Movitierra tarda una hora en conseguir movilidad. Wálter llega a Abancay a las 3 de la tarde. En el comedor ya se dice que «a los de contratista los dejan botados».',
          pro: { ok: 'Respetas que el empleador es Movitierra.', risk: 'En tercerización, la minera puede responder; y un trabajador herido en tu unidad también es tu gente.' },
          kusi: ['triste', 'Wálter está en tu mina, no en otra.'] } },
    ],
    rules: [[LEY, 'SCTR obligatorio en actividades de riesgo (Ley 26790 y D.S. 003-98-SA).'], [LEY, 'Tercerización: responsabilidad solidaria de la empresa principal en ciertos supuestos (Ley 29245).']],
    mirada: {
      ve: 'Un accidente en mina no espera a que se resuelvan los rumores. Y cuando el herido es de una contratista, lo que haga la minera en la primera hora lo verán todos: los propios, los terceros y la comunidad de Wálter.',
      visual: { tipo: 'flujo', titulo: 'La primera hora de un accidente', pasos: ['Estabilizar', 'Evacuar', 'Verificar cobertura', 'Avisar a la familia', 'Investigar'], aqui: 0 },
    },
  },
  {
    id: 'g4', t: '11:30', ch: 'documento', who: null, titulo: '¿Quién se entera primero?', banner: 'assets/foto/plano-equipo.webp', lugar: 'Contenedor de RR.HH.', show: ['confianza', 'tiempo', 'calidad'],
    body: (n, F) => `<p>${F.has('rumor_honesto') ? 'A las 10 llamaste a Doña Juana, como prometiste.' : 'Doña Juana no ha vuelto a llamar.'} Percy aprobó contar el plan hoy mismo. Tienes la tarde y poca gente.</p><p>Antes de publicar nada, decides <mark class="clave">a quiénes informas primero, en persona</mark>.</p>`,
    type: 'pick', n: 3, prompt: 'Elige a los tres grupos que informas primero.', boton: 'Ir a hablar con ellos', resumen: 'Informaste primero a',
    cols: ['Grupo', 'Por qué'],
    rows: [
      { id: 'delegados', cells: ['Delegados de los operadores propios', 'Wilber y los demás llevan la voz de 400 personas'] },
      { id: 'comunidad', cells: ['Doña Juana y la directiva comunal', 'El plan toca a las contratistas, donde trabajan sus comuneros'] },
      { id: 'contratistas', cells: ['Administradores de las 14 contratistas', 'Sus trabajadores preguntarán a ellos'] },
      { id: 'supervisores', cells: ['Supervisores de turno', 'Responden preguntas en cada guardia'] },
      { id: 'mural', cells: ['Publicar en el mural del comedor', 'Lo ven todos, pero sin poder preguntar'] },
      { id: 'radio', cells: ['Radio de la provincia', 'La comunidad la escucha'] },
    ],
    score: { delegados: 3, comunidad: 3, contratistas: 3, supervisores: 2, mural: 0, radio: -3 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { confianza: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, calidad: 2 }, rel: { presidenta: picks.includes('comunidad') ? 1 : -1 },
        flags: q === 'buena' ? ['delegados_primero'] : [], cartera: { rumor: q === 'buena' ? 'Delegados, comunidad y contratistas informados' : 'Información a medias' },
        out: q === 'buena' ? 'A las 3 de la tarde, quienes tienen que responder preguntas ya saben qué responder. El rumor empieza a perder fuerza en la unidad.' : picks.includes('radio') ? 'La radio de la provincia anuncia «recortes en Minera Puquio». Doña Juana se entera por la radio.' : 'Algunos se enteran por ti; otros, por el comedor.',
        pro: { ok: 'Quien lleva la voz de otros debe enterarse antes que todos y en persona.', risk: 'Lo que se publica sin explicar se interpreta en el comedor.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Primero los que responden preguntas. ¡Bien!' : '¿Quién llevará las preguntas?'],
      };
    },
    rules: [[BP, 'Informa en persona, primero, a quienes deberán responder preguntas.']],
    mirada: {
      ve: 'Un mismo mensaje puede calmar o incendiar según quién lo cuente primero. Los delegados, la comunidad y los administradores de contratistas son los que recibirán las preguntas: si ellos no saben, inventarán.',
      visual: { tipo: 'embudo', titulo: 'Cómo baja la información', niveles: [['Gerencia en Lima', 1], ['RR.HH. en la unidad', 3], ['Delegados, comunidad y contratistas', 20], ['Toda la unidad', 900]] },
    },
  },
  {
    id: 'g5', t: '14:30', ch: 'documento', who: null, titulo: 'El comunicado de la unidad', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Contenedor de RR.HH.', show: ['calidad', 'confianza', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('comunicado_corregido') ? 'Carla te pidió que lo reescribieras tú.' : 'El comunicado de Lima ya está en el mural, pero Percy quiere uno propio de la unidad.'} Escribes con un pan con palta al lado que se te olvida comer.</p><p>Tu cuarto entregable: <mark class="clave">el comunicado interno</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del comunicado.', boton: 'Pasar a Percy para firma',
    bloques: [
      { id: 'ver', t: 'Lo que es verdad', n: 2, ops: [
        { id: 'v1', t: 'La caída del precio del cobre obliga a reducir costos.', ok: true },
        { id: 'v2', t: 'No hay reducción de personal propio en el plan.', ok: true },
        { id: 'v3', t: 'Nadie va a perder su trabajo nunca.', ok: false, por: 'No puedes prometer eso.' },
      ] },
      { id: 'cont', t: 'Lo que pasa con las contratistas', n: 2, ops: [
        { id: 'c1', t: 'Sus contratos se revisarán en la próxima licitación; hoy no cambia nada.', ok: true },
        { id: 'c2', t: 'El compromiso de empleo local se mantiene y se revisará con la comunidad.', ok: true, por: 'Es lo que más preocupa a los comuneros.' },
        { id: 'c3', t: 'Las contratistas que no sean eficientes saldrán.', ok: false, por: 'Ambiguo y amenazante.' },
      ] },
      { id: 'preg', t: 'Dónde preguntar', n: 2, ops: [
        { id: 'p1', t: 'RR.HH. atiende preguntas en el contenedor de 7 a 9 y de 18 a 20.', ok: true },
        { id: 'p2', t: 'Cada jueves, un resumen del avance en el mural y con los delegados.', ok: true },
        { id: 'p3', t: 'Las dudas se dirigen por escrito a Lima.', ok: false, por: 'Nadie aquí arriba escribirá a Lima.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : q === 'aceptable' ? 2 : -3, confianza: q === 'buena' ? 4 : 0 }, rel: { percy: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['comunicado_claro'], cartera: { comunicado: q === 'riesgosa' ? 'Comunicado confuso' : 'Comunicado de la unidad publicado' },
        out: q === 'buena' ? 'Percy firma sin cambiar una coma. A las 5, el comunicado está en el mural, en el grupo de delegados y leído en voz alta en el cambio de guardia.' : 'El comunicado sale, pero en el comedor lo leen con lupa buscando lo que no dice.',
        pro: { ok: 'Un comunicado claro dice qué es verdad, qué no y dónde preguntar.', risk: 'Prometer de más o amenazar a medias alimenta el rumor.', info: 'Léelo en voz alta en el cambio de guardia: no todos leen el mural.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Claro como el agua de la laguna!' : 'Revisa lo que prometes.'],
      };
    },
    rules: [[BP, 'Un comunicado sobre un tema sensible dice qué es verdad, qué no y dónde preguntar.']],
    mirada: {
      ve: 'El comunicado no tiene que ser bonito: tiene que ser verdad y tiene que dejar una puerta para preguntar. Aquí arriba, eso vale más que cualquier diseño.',
      visual: { tipo: 'mensaje', titulo: 'El comunicado de la unidad', txt: 'No hay reducción de personal propio. Las contratistas se revisarán en la próxima licitación; hoy no cambia nada. El compromiso de empleo local se mantiene. Pregunta en el contenedor de RR.HH., de 7 a 9 y de 18 a 20.' },
    },
  },
  {
    id: 'g6', t: '18:10', ch: 'presencial', who: 'yuri', titulo: 'Antes de la asamblea', banner: 'assets/foto2/caminan.webp', lugar: 'Camino del campamento al comedor', show: ['personas', 'confianza'],
    body: () => `<p>Yuri te alcanza en el camino. Viene de hablar por teléfono con su comunidad. Atrás, el cerro está naranja con el último sol.</p><p>«Ingeniera, esta noche hay asamblea en la comunidad. <mark class="clave">Algunos quieren cerrar la carretera</mark>.»</p>`,
    type: 'ask', max: 2, prompt: 'Elige dos preguntas para Yuri.',
    opts: [
      { id: 'por', label: '«¿Qué les preocupa más, si el plan no toca a los propios?»', info: '«Que la mitad de los comuneros trabajan en contratistas. Si en la licitación entra otra empresa, ¿los contrata? Nadie lo garantiza.»' },
      { id: 'quien', label: '«¿Quiénes quieren cerrar la carretera?»', info: '«Los jóvenes, sobre todo. Los que no pasaron el examen y los que volvieron de Lima. Doña Juana quiere dialogar, pero no los puede parar sola.»' },
      { id: 'pide', label: '«¿Qué tendría que pasar para que no la cierren?»', info: '«Que alguien de la minera firme que el empleo local se respeta en la licitación. Por escrito. Ya no creen en palabras.»' },
      { id: 'tu', label: '«¿Y tú qué vas a hacer?»', info: 'Yuri se queda callado. «Yo soy comunero y soy operador. Si cierran, no sé de qué lado me van a poner.»' },
    ],
    res: picks => ({
      q: null, fx: { personas: 2, confianza: picks.includes('tu') ? 3 : 2 }, rel: { yuri: 1 },
      out: picks.includes('pide') ? 'Anotas en tu libreta, subrayado dos veces: «compromiso escrito: empleo local en la licitación». Se lo mandas a Percy antes de entrar al comedor.' : 'Le das las gracias a Yuri. Esta noche no vas a dormir mucho.',
      kusi: ['pensando', 'La carretera depende de un papel…'],
    }),
    rules: [[BP, 'Antes de una crisis, pregunta qué la evitaría.']],
    mirada: {
      ve: 'Yuri vive en las dos orillas: es comunero y es trabajador. Él no te debe nada, pero te cuenta lo que pasa porque confía en ti. Esa confianza se construyó con un cambio de turno, un comedor y un examen médico.',
      visual: { tipo: 'balanza', a: { t: 'Lo que dice el plan', items: ['Sin despidos de propios', 'Contratistas en licitación'] }, b: { t: 'Lo que teme la comunidad', items: ['Comuneros en contratistas', 'Nada por escrito', 'Jóvenes sin trabajo'] } },
    },
  },
  {
    id: 'g7', t: '19:40', ch: 'whatsapp', who: 'presidenta', titulo: 'La noche de la asamblea', banner: 'assets/esc/pendulo.webp', lugar: 'Contenedor de RR.HH.', show: ['confianza', 'etica'],
    body: (n, F) => `<p>${F.has('rumor_honesto') ? 'Doña Juana te escribe desde la asamblea: «Usted me habló claro, señorita. Pero los jóvenes no me escuchan».' : 'Doña Juana te escribe, seca: «La asamblea está brava».'}</p><p>«<mark class="clave">Mañana a las 5 cierran la carretera</mark>. Yo voy a estar ahí. Si quiere hablar, venga usted, no mande a otro.»</p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: 'Responderle que irás con Percy a primera hora, y avisar ya a Percy, a Seguridad y a Operaciones para preparar la unidad.',
        res: { q: 'buena', fx: { confianza: 3, tiempo: -1 }, rel: { presidenta: 1, percy: 1 },
          envia: [['presidenta', 'Doña Juana, gracias por avisarme. Mañana a las 6 estoy en la carretera con Percy. Vamos a escuchar.']],
          out: 'Percy convoca a las 9 de la noche a Seguridad y Operaciones. Valdivia llega en pantuflas. Esa noche se arma la lista de quién sube, quién baja y cuántos víveres hay.',
          pro: { ok: 'Respondes a la invitación al diálogo y preparas la operación.', info: 'Antes de un bloqueo, cuenta los víveres, el combustible y los medicamentos.' },
          kusi: ['animo', 'Mañana, a la carretera. Con calma.'] } },
      { id: 'b', label: 'No responderle hasta consultar con Lima qué se puede ofrecer.',
        res: { q: 'aceptable', fx: { cumplimiento: 1, confianza: -3 }, rel: { presidenta: -1 },
          out: 'Lima no responde a esa hora. Doña Juana ve el doble check azul y nada más. A las 5 de la mañana ya hay piedras en la carretera.',
          pro: { ok: 'No prometes nada sin respaldo.', risk: 'Dejar sin respuesta a quien te invita a dialogar es cerrar la única puerta abierta.' },
          kusi: ['preocupado', 'Ella pidió que fueras tú…'] } },
    ],
    mirada: { ve: 'El rumor se apagó dentro de la unidad, pero creció afuera, donde la minera no tiene mural ni cambio de guardia. Mañana empieza otra cosa: una crisis donde lo que hiciste la primera semana será tu único capital.' },
  },
];
