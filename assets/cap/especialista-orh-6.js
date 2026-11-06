// Especialista en RR.HH. de entidad pública · Capítulo 6 · «El pariente» · Semana 2, lunes.
// Hilo de las dos semanas: el concurso CAS de 12 plazas de una municipalidad provincial de Cajamarca, hasta su publicación.
// Normas citadas:
// - TUO de la Ley 27444 (D.S. 004-2019-JUS), art. 99, numeral 1: debe abstenerse la autoridad con facultad resolutiva, o cuyas
//   opiniones sobre el fondo puedan influir en la decisión, si es cónyuge, conviviente o pariente dentro del cuarto grado de
//   consanguinidad o segundo de afinidad de alguno de los interesados; art. 101.2: quien dispone la abstención designa en el
//   mismo acto a quien sigue conociendo el asunto.
//   https://mef.gob.pe/contenidos/tribu_fisc/jurisprude/acuer_sala/2022/informe/Informe06-22.pdf
//   https://cdn.www.gob.pe/uploads/document/file/2239027/Archivo%20PDF%20de%20formatos%20declaraci%C3%B3n%20jurada%20sobre%20causales%20de%20abstenci%C3%B3n.pdf
//   https://cdn.www.gob.pe/uploads/document/file/8141227/6818388-resolucion-n-000015-2025-jus-ttaip-pps.pdf
// - Ley 26771, modificada por la Ley 31299 (nepotismo), ya citada en el capítulo 1.
// - Ley 27815, Código de Ética de la Función Pública, art. 8 (intereses en conflicto), ya citada en el capítulo 4.

export const CAP = {
  n: 6, titulo: 'El pariente', dia: 'Semana 2, lunes', foto: 'assets/foto2/reunion-circulos.webp',
  lugar: 'Municipalidad Provincial · Cajamarca',
  inicio: '08:00', fin: '17:30', cierreHora: '17:15',
  apertura: 'Lunes de la segunda semana. Garúa fina sobre la plaza y el cerro tapado de nubes. En la ORH huele a café pasado y a cera de piso: alguien enceró el pasillo para la comisión de Contraloría que llega mañana.', boton: 'Instalar el comité',
  kusi: 'Tener un pariente que postula no es delito. Callarlo y evaluarlo, sí es un problema.',
  lead: 'Armaste el comité evaluador, descubriste que un gerente tiene un sobrino que va a postular, pediste su abstención con la norma en la mano y conseguiste que todos declararan sus vínculos antes de evaluar.',
  reflexion: 'Si tu familiar postulara a un puesto que tú evalúas, ¿qué sentirías al apartarte? ¿Y qué pensarían los demás si no lo hicieras?',
  siguiente: { n: 7, titulo: 'La Contraloría', dia: 'Semana 2, martes' },
};

export const CARTERA = [
  { id: 'comite', p: 'Comité evaluador del CAS 005-2026', j: 'Marisol · ORH', d: 0, e: 'Se instala hoy' },
  { id: 'dj', p: 'Declaraciones juradas de vínculos', j: 'Miembros del comité', d: 0, e: 'Sin firmar' },
  { id: 'concurso', p: 'Concurso CAS: 12 plazas', j: 'Marisol · ORH', d: 0, e: 'Publicación el jueves' },
  { id: 'oci', p: 'Comisión de control', j: 'Contraloría', d: 0, e: 'Llega mañana' },
];

export const FUTURO = {
  terrones_abstencion: ['El ingeniero Terrones se abstuvo de evaluar la plaza de ingeniero y se designó un reemplazo.', 'La auditora lo pondrá como buena práctica en el capítulo 8.'],
  terrones_queda: ['El ingeniero Terrones siguió en el comité de la plaza de su sobrino.', 'La auditora lo observará en el capítulo 8.'],
  sobrino_excluido: ['Decidiste por tu cuenta que el sobrino no podía postular.', 'El sobrino presentará un reclamo el día de la publicación, en el capítulo 9.'],
  consulta_legal: ['Pediste a Asesoría Legal que opine sobre la injerencia si el sobrino llegara a ganar.', 'El informe llegará en el capítulo 9.'],
  dj_completas: ['Todo el comité firmó su declaración jurada de vínculos.', 'La auditora la pedirá en el capítulo 7 y estará.'],
  ahijado_declarado: ['El comandante Cabanillas declaró que su ahijado postula y no lo entrevistará.', 'Será un ejemplo para el comité en la Semana 3.'],
};

export const CHATS = {
  grupo: { n: 'ORH Municipalidad', sub: 'Marisol y el equipo', c: '#2F6B3F' },
  marisol: { n: 'Marisol Chávez', sub: 'Jefa de la ORH', who: 'marisol' },
  terrones: { n: 'Ing. Lucio Terrones', sub: 'Gerente de Desarrollo Urbano', c: '#8C5A16' },
  cabanillas: { n: 'Cmdte. (r) Wílber Cabanillas', sub: 'Subgerente de Serenazgo', c: '#1F4E79' },
  eder: { n: 'Eder Rojas', sub: 'Postulante', who: 'eder' },
};

export const WSP = [
  { chat: 'grupo', t: '07:58', de: 'Don Segundo', txt: 'Buenos días. Ya llegó la sala para la Contraloría: la de reuniones del 3er piso. Sin wifi, como siempre 🙄' },
  { chat: 'cabanillas', t: '08:30', de: 'Cmdte. Cabanillas', txt: 'Señorita, ya tengo la prueba física escrita: 1,200 metros, reacción y parte. Se la paso para el comité.', si: 'cabanillas_aliado' },
  { chat: 'eder', t: '10:15', de: 'Eder', txt: 'Buenos días. ¿Ya revisaron lo de la bonificación del ganador? Solo pregunto.', si: 'acceso_parcial' },
  { chat: 'terrones', t: '13:05', de: 'Ing. Terrones', txt: 'Conforme. Firmo la abstención. Pero que conste que mi sobrino es buen ingeniero y no necesita favores de nadie.', si: 'terrones_abstencion' },
  { chat: 'marisol', t: '17:00', de: 'Marisol', txt: 'Mañana a las 8 llega la comisión. Ven temprano. Y gracias por lo de hoy, no era fácil.' },
];

export const CORREOS = [
  { t: '08:10', de: 'Marisol Chávez', para: 'Especialista de la ORH', asunto: 'Instalación del comité evaluador', html: '<p>A las 10 instalamos el comité del CAS 005-2026: yo por la ORH y un representante de cada área usuaria. Prepara el acta de instalación y las declaraciones juradas.</p><p>Marisol</p>' },
  { t: '09:20', de: 'Mesa de partes', para: 'ORH', asunto: 'Consulta de postulante: Brayan Terrones Paredes', html: '<p>Se deriva la consulta del Ing. Brayan Terrones Paredes, quien pregunta si la experiencia ganada en esta municipalidad hasta 2025 se considera para la plaza de ingeniero civil del próximo concurso.</p>' },
];

export const QUIZ = [
  { q: 'Un miembro del comité tiene un sobrino que postula. Según el art. 99 del TUO de la Ley 27444…', ops: ['Puede evaluarlo si es objetivo', 'Debe abstenerse, porque el sobrino es pariente dentro del cuarto grado de consanguinidad', 'Debe renunciar a la municipalidad', 'No pasa nada si no es su hijo'], ok: 1, por: 'La causal de parentesco alcanza hasta el cuarto grado de consanguinidad; el sobrino está en tercer grado.' },
  { q: 'Cuando una autoridad se abstiene, ¿qué debe pasar en el mismo acto?', ops: ['Nada', 'Se designa a quien sigue conociendo el asunto', 'Se anula el concurso', 'Se suspende un mes'], ok: 1, por: 'El art. 101.2 del TUO de la Ley 27444 dispone designar en el mismo acto a quien continúa.' },
  { q: '¿Puedes decidir tú que el sobrino de un gerente no puede postular?', ops: ['Sí, para evitar problemas', 'No: postular es su derecho; lo que se evalúa es la injerencia, y eso lo opina Asesoría Legal', 'Sí, si lo dice el alcalde', 'Sí, si el regidor lo pide'], ok: 1, por: 'Excluir a alguien de antemano, sin base legal, también es un trato desigual.' },
  { q: '¿Para qué sirve la declaración jurada de vínculos del comité?', ops: ['Para llenar el expediente', 'Para que cada miembro declare antes de evaluar si tiene parientes o vínculos con postulantes', 'Para el seguro', 'No sirve'], ok: 1, por: 'Lo que se declara a tiempo se puede manejar; lo que se descubre después anula la confianza.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'f1', t: '08:30', ch: 'documento', who: null, titulo: 'Quién evalúa', banner: 'assets/esc/mesa.webp', lugar: 'Tu escritorio', show: ['calidad', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>${F.has('viernes_tarde') ? 'Llegas con ojeras: el viernes saliste a las 8:30 y el fin de semana no descansaste. ' : ''}Tienes que proponer cómo se arma el comité evaluador. Marisol quiere algo que la Contraloría pueda leer sin preguntar.</p><p><mark class="clave">Elige las reglas del comité</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque del comité.', boton: 'Proponer el comité',
    bloques: [
      { id: 'quien', t: 'Quiénes lo integran', n: 2, ops: [
        { id: 'q1', t: 'La jefa de la ORH y un representante del área usuaria de cada plaza.', ok: true, por: 'Quien conoce el proceso y quien conoce el trabajo.' },
        { id: 'q2', t: 'Un suplente por cada miembro, designado desde el inicio.', ok: true, por: 'Si alguien se abstiene, el comité no se cae.' },
        { id: 'q3', t: 'Un regidor como observador con voz en las entrevistas.', ok: false, por: 'Los regidores no tienen funciones administrativas en un concurso; su voz en la entrevista es presión.' },
      ] },
      { id: 'como', t: 'Cómo evalúa', n: 2, ops: [
        { id: 'c1', t: 'Criterios y preguntas de la entrevista escritos antes, iguales para todos.', ok: true },
        { id: 'c2', t: 'Cada miembro puntúa por separado y el acta registra cada puntaje.', ok: true, por: 'Así se ve si alguien puntuó muy distinto.' },
        { id: 'c3', t: 'El puntaje se decide «por consenso» al final del día.', ok: false, por: 'El consenso sin registro borra quién pensó qué.' },
      ] },
      { id: 'vinc', t: 'Vínculos', n: 2, ops: [
        { id: 'v1', t: 'Cada miembro firma una declaración jurada de vínculos con los postulantes antes de evaluar.', ok: true },
        { id: 'v2', t: 'Si hay un pariente que postula, el miembro se abstiene y entra su suplente.', ok: true },
        { id: 'v3', t: 'Los vínculos se revisan solo si alguien reclama.', ok: false, por: 'Para entonces, el daño ya está hecho.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : 1, cumplimiento: q === 'buena' ? 4 : q === 'riesgosa' ? -3 : 1, etica: q === 'riesgosa' ? -2 : 2 },
        flags: q === 'riesgosa' ? [] : ['comite_reglas'], cartera: { comite: q === 'riesgosa' ? 'Propuesta de comité con huecos' : 'Comité con suplentes, criterios y declaración de vínculos' },
        out: q === 'buena' ? 'Marisol lee tu propuesta en el celular mientras sube la escalera. «Los suplentes, bien pensado. Hoy los vamos a necesitar.»' : 'Marisol aprueba la propuesta, pero corrige una regla con lapicero.',
        pro: { ok: 'Un comité con suplentes y declaraciones previas puede manejar un conflicto sin detenerse.', info: 'Las preguntas de la entrevista se guardan en sobre cerrado hasta el día de la entrevista.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Comité a prueba de sorpresas!' : '¿Y si alguien tiene que salir?'],
      };
    },
    mirada: {
      ve: 'Un comité evaluador es el corazón del concurso. Si se arma con reglas claras desde el inicio, un conflicto de interés se resuelve con un cambio de silla; si no, puede anular todo.',
      visual: { tipo: 'flujo', titulo: 'Un comité que se sostiene', pasos: ['Titulares y suplentes', 'Declaración de vínculos', 'Criterios escritos', 'Puntaje individual en acta'] },
    },
  },
  {
    id: 'f2', t: '10:10', ch: 'presencial', who: null, titulo: 'El ingeniero Terrones', banner: 'assets/foto/reunion-jefa.webp', lugar: 'Sala de reuniones del tercer piso', show: ['etica', 'confianza', 'personas'],
    body: (n, F) => `<p>El comité se sienta alrededor de una mesa con mantel de plástico. El ingeniero Terrones llega con casco en la mano, directo de una obra. ${F.has('perfil_urbano_propio') ? 'Lo primero que dice: «Ese perfil que hicieron ustedes no es el mío, pero bueno».' : F.has('terrones_explicado') ? 'Te saluda con un gesto: «La del perfil».' : ''}</p><p>Le pasas la consulta que llegó por mesa de partes: Brayan Terrones Paredes. ${F.has('perfil_medida_visto') ? 'El nombre encaja con lo que dijo Don Segundo.' : ''} <mark class="clave">Tienes dos preguntas antes de que empiece la sesión</mark>.</p>`,
    type: 'ask', max: 2, prompt: 'Elige las dos preguntas que le haces al ingeniero, aparte.',
    opts: [
      { id: 'quien', label: '«Ingeniero, ¿Brayan Terrones es familiar suyo?»', info: 'Se queda serio. «Es mi sobrino, hijo de mi hermano. Sí, va a postular. Trabajó aquí hasta el año pasado con un contrato por locación. Es buen ingeniero, mejor que muchos.»' },
      { id: 'evaluar', label: '«¿Usted pensaba evaluar la plaza de ingeniero?»', info: '«Claro, es mi área. ¿Quién más sabe de obras? Si yo no evalúo, entran a evaluar los de Rentas.» Golpea la mesa con los dedos.' },
      { id: 'jefe', label: '«Si su sobrino ganara, ¿trabajaría bajo su mando?»', info: 'Duda. «Sería supervisor de obras de mi gerencia. Pero yo no lo contrato, lo contrata la municipalidad.» Mira la ventana.' },
      { id: 'tranquilo', label: '«No se preocupe, ingeniero, nadie tiene por qué enterarse.»', info: 'Él te mira raro. «¿Enterarse de qué? Yo no estoy escondiendo nada.» La frase queda flotando en el pasillo.' },
    ],
    res: picks => {
      const mal = picks.includes('tranquilo');
      return {
        q: null, fx: { etica: mal ? -4 : 3, confianza: mal ? -2 : 1, personas: 1 },
        flags: picks.includes('quien') ? ['sobrino_confirmado'] : [],
        out: mal ? 'Tu frase sonó a complicidad. El ingeniero entra a la sesión molesto y tú sin saber cuánto sabe él de lo que piensas.' : picks.includes('quien') ? 'Ya lo sabes con certeza: tercer grado de consanguinidad, en la plaza de su propia gerencia. No es un rumor: es una causal de abstención.' : 'El ingeniero no te dice si es su pariente. Tendrás que preguntarlo en la sesión, delante de todos.',
        kusi: mal ? ['indignado', '¡Eso sonó a tapar!'] : ['curioso', 'Ahora lo sabes de su boca.'],
      };
    },
    mirada: {
      ve: 'El ingeniero no cree estar haciendo nada malo: para él, su sobrino es bueno y él es quien más sabe de obras. Las dos cosas pueden ser ciertas, y aun así no puede evaluarlo.',
      visual: { tipo: 'flujo', titulo: 'Grados de consanguinidad', pasos: ['1.º Padres e hijos', '2.º Hermanos, abuelos, nietos', '3.º Tíos y sobrinos', '4.º Primos hermanos'], aqui: 2 },
    },
  },
  {
    id: 'f3', t: '10:50', ch: 'presencial', who: 'marisol', titulo: 'La sesión', banner: 'assets/foto2/presentacion.webp', lugar: 'Sala de reuniones del tercer piso', show: ['etica', 'cumplimiento', 'confianza'],
    body: () => `<p>Marisol abre la sesión y te da la palabra para las declaraciones juradas. Todos miran al ingeniero. El comandante Cabanillas carraspea. La subgerenta Karen Díaz finge revisar su celular.</p><p>Marisol te mira: <mark class="clave">«¿Qué propones?»</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Que el ingeniero se abstenga de la plaza de ingeniero civil, que entre su suplente de la gerencia y que Asesoría Legal opine si habría injerencia si el sobrino ganara.',
        res: { q: 'buena', fx: { etica: 6, cumplimiento: 5, confianza: -1 }, rel: { marisol: 1 }, flags: ['terrones_abstencion', 'consulta_legal'], cartera: { comite: 'Abstención de Terrones; entra la Ing. Hilda Rabanal como suplente', dj: 'Terrones declaró el vínculo' },
          out: 'El ingeniero respira hondo. «Si es la ley, me abstengo. Pero que el reemplazo sepa de obras.» Propone a la ingeniera Hilda Rabanal, de su gerencia. Queda en el acta.',
          pro: { ok: 'Aplicas la causal sin acusar, cuidas el derecho del sobrino a postular y dejas la pregunta difícil a quien debe responderla.', risk: 'El ingeniero puede sentirse expuesto delante del comité.', info: 'Que la abstención y la designación del suplente queden en el mismo acta.' },
          kusi: ['celebra', '¡Así se maneja un conflicto de interés!'] } },
      { id: 'b', label: 'Que el ingeniero siga en el comité, pero que no puntúe al sobrino: los otros dos miembros lo evalúan.',
        res: { q: 'riesgosa', fx: { etica: -4, cumplimiento: -4, confianza: 2 }, flags: ['terrones_queda'], cartera: { comite: 'Terrones sigue en la plaza de ingeniero', dj: 'Vínculo declarado, sin abstención' },
          out: 'Parece una salida elegante. Pero el ingeniero seguirá opinando de los otros candidatos de la misma plaza, y su opinión sobre ellos pesa sobre su sobrino.',
          pro: { ok: 'Evitas el roce con un gerente.', risk: 'La causal alcanza a quien puede influir en la decisión. Opinar sobre los rivales del sobrino ya es influir.' },
          kusi: ['preocupado', 'No puntuar a uno no es apartarse del todo.'] } },
      { id: 'c', label: 'Pedirle al ingeniero que su sobrino no postule. Así nadie tiene que apartarse.',
        res: { q: 'riesgosa', fx: { etica: -2, cumplimiento: -3, personas: -2 }, flags: ['sobrino_excluido', 'terrones_queda'], cartera: { comite: 'Terrones sigue; se pidió que el sobrino no postule' },
          out: 'El ingeniero se pone rojo: «¿Ahora mi sobrino no puede trabajar en su propia ciudad?». Marisol interviene para calmar las cosas, pero la frase ya quedó en la sala.',
          pro: { ok: 'Quieres evitar el conflicto de raíz.', risk: 'Postular es un derecho. Quien tiene que apartarse es el evaluador, no el postulante.' },
          kusi: ['sorpresa', '¡Le quitaste la silla al que no era!'] } },
    ],
    rules: [[LEY, 'TUO de la Ley 27444, art. 99, num. 1: abstención por parentesco hasta el cuarto grado de consanguinidad o segundo de afinidad.'], [LEY, 'TUO de la Ley 27444, art. 101.2: se designa en el mismo acto a quien continúa.'], [LEY, 'Ley 26771, modificada por la Ley 31299: prohibición de nepotismo cuando hay injerencia.']],
    mirada: {
      ve: 'La abstención no castiga a nadie: protege la decisión. El sobrino puede postular y quizás ganar con mérito propio; lo que no puede pasar es que su tío esté en la mesa cuando se decida.',
      visual: { tipo: 'balanza', a: { t: 'Que siga, sin puntuar al sobrino', items: ['Nadie se incomoda hoy', 'Su opinión sobre los rivales pesa igual'] }, b: { t: 'Abstención con suplente', items: ['La decisión queda limpia', 'El sobrino conserva su derecho', 'Legal opina sobre la injerencia'] } },
      normas: [{ ley: 'TUO de la Ley 27444 (D.S. 004-2019-JUS), art. 99, numeral 1', dice: 'La autoridad que tenga facultad resolutiva o cuyas opiniones sobre el fondo puedan influir en la decisión debe abstenerse si es pariente dentro del cuarto grado de consanguinidad o segundo de afinidad de algún interesado.', practica: 'Un tío está en tercer grado de consanguinidad respecto de su sobrino.' }],
    },
  },
  {
    id: 'f4', t: '12:20', ch: 'whatsapp', who: null, titulo: 'Para que quede claro', banner: 'assets/foto/llamada.webp', lugar: 'Pasillo, junto a la ventana', show: ['confianza', 'personas', 'cumplimiento'],
    body: (n, F) => `<p>${F.has('terrones_abstencion') ? 'El ingeniero salió de la sesión sin despedirse. Marisol te pide que le escribas para que firme hoy el documento de abstención.' : 'El ingeniero salió de la sesión molesto. Marisol te pide que le escribas para cerrar el tema en buenos términos, por escrito.'}</p><p>Él lee los mensajes en la obra, con polvo en la pantalla. <mark class="clave">Respeto y norma, en pocas líneas</mark>.</p>`,
    type: 'compose', enviaA: 'terrones', para: 'Para: Ing. Lucio Terrones · Gerente de Desarrollo Urbano', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu mensaje eligiendo una frase de cada parte.',
    slots: [
      { id: 'rec', t: 'El reconocimiento', ops: [
        { id: 'r1', t: 'Ingeniero, gracias por decir en la sesión lo de su sobrino. No era fácil y habla bien de usted.', ok: true, por: 'Reconoces lo que hizo bien.' },
        { id: 'r2', t: 'Ingeniero, disculpe el mal momento de hace un rato.', ok: null, por: 'Amable, pero suena a que hubo algo de qué disculparse.' },
      ] },
      { id: 'norma', t: 'La norma', ops: [
        { id: 'n1', t: 'Como el art. 99 del TUO de la Ley 27444 pide abstenerse cuando postula un pariente hasta el cuarto grado, le enviamos el documento para su firma.', ok: true, por: 'La regla vale para cualquiera, no es personal.' },
        { id: 'n2', t: 'Es lo que pide Contraloría, que llega mañana.', ok: false, por: 'La razón no es la auditoría: es la ley. Y sugiere que si no viniera nadie, daría igual.' },
      ] },
      { id: 'sobrino', t: 'Sobre su sobrino', ops: [
        { id: 's1', t: 'Su sobrino puede postular como cualquier otra persona; la plaza la evaluará la ingeniera Rabanal con el resto del comité.', ok: true, por: 'Dejas claro que nadie le quita un derecho.' },
        { id: 's2', t: 'Mejor que su sobrino espere el próximo concurso.', ok: false, por: 'No te toca decidir quién postula.' },
      ] },
    ],
    res: sel => {
      const mal = sel.norma === 'n2' || sel.sobrino === 's2', buenas = ['r1', 'n1', 's1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { confianza: q === 'buena' ? 3 : mal ? -2 : 1, personas: q === 'buena' ? 3 : 0, cumplimiento: mal ? -2 : 3 },
        flags: q === 'buena' ? ['terrones_respeta'] : [],
        out: q === 'buena' ? 'El ingeniero responde a la hora: «Conforme. Firmo en la tarde. Y dígale a la ingeniera Rabanal que pregunte por obras de verdad». Viniendo de él, es casi un abrazo.' : mal ? 'El ingeniero responde seco: «Entendido». Reenvía tu mensaje a su sobrino.' : 'El ingeniero responde «ok». El tema queda cerrado, aunque frío.',
        pro: { ok: 'La norma explicada como regla general no ofende a nadie en particular.', risk: 'Usar la auditoría como motivo o decidir quién postula debilita la abstención.', info: 'Archiva el documento firmado junto al acta de la sesión.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? 'Firme y con respeto. ¡Bacán!' : 'Cada palabra le llega a alguien más.'],
      };
    },
    mirada: {
      ve: 'Las abstenciones dejan heridas de orgullo. Reconocer que declarar un vínculo es un acto de integridad ayuda a que la persona no lo viva como una humillación.',
      visual: { tipo: 'mensaje', titulo: 'Abstención con respeto', txt: 'Gracias por decir lo de su sobrino. La ley pide abstenerse cuando postula un pariente hasta el cuarto grado. Su sobrino puede postular como cualquiera; la plaza la evaluará la ingeniera Rabanal.' },
    },
  },
  {
    id: 'f5', t: '14:40', ch: 'llamada', who: null, titulo: 'Las declaraciones que faltan', banner: 'assets/foto2/callcenter.webp', lugar: 'Teléfono fijo de la ORH', show: ['cumplimiento', 'tiempo', 'etica'],
    body: () => `<p>Dos miembros del comité se fueron sin firmar la declaración jurada de vínculos. La comisión de control llega mañana y <mark class="clave">la pedirá</mark>. Llamas.</p>`,
    type: 'calls',
    calls: [['Karen Díaz · Fiscalización', 'Contesta en un operativo de mototaxis', '«Ay, perdón, me olvidé. No tengo ningún pariente postulando, que yo sepa. Paso a firmar a las 4, ¿ya? Si no, me la mandas y la firmo escaneada.»'], ['Cmdte. Cabanillas · Serenazgo', 'Contesta con la radio de fondo', '«Firmo, pero una cosa: mi ahijado de bautizo va a postular a sereno. No es mi pariente de sangre, pero lo quiero como hijo. ¿Eso cuenta?»'], ['Marisol Chávez · ORH', 'Contesta desde la oficina del gerente', '«La mía ya está firmada, en mi escritorio. Ponla con las demás.»']],
    prompt: 'Terminaste las llamadas. ¿Qué haces con lo que dijo el comandante?',
    choices: [
      { id: 'a', label: 'Pedirle que declare el vínculo en su declaración jurada y que no entreviste a su ahijado. Que lo haga su suplente para esa entrevista.',
        res: { q: 'buena', fx: { etica: 4, cumplimiento: 3 }, flags: ['ahijado_declarado', 'dj_completas'], cartera: { dj: 'Declaraciones completas; Cabanillas declaró a su ahijado' },
          out: 'El comandante lo piensa. «Tiene razón. Si mi ahijado gana, que nadie diga que fue por mí.» Firma a las 4:20, con la nota a mano.',
          pro: { ok: 'El compadrazgo no es parentesco legal, pero sí un vínculo que puede pesar. Declararlo es lo honesto.', info: 'Aunque no sea parentesco, un vínculo cercano puede afectar la imparcialidad: declararlo no cuesta nada.' },
          kusi: ['animo', 'Lo que se declara a tiempo no se vuelve sospecha.'] } },
      { id: 'b', label: 'Decirle que no cuenta: un ahijado no es pariente por consanguinidad ni por afinidad.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, etica: -1 }, flags: ['dj_completas'], cartera: { dj: 'Declaraciones completas, sin mención al ahijado' },
          out: 'El comandante firma tranquilo. Técnicamente tienes razón sobre el parentesco. Pero si el ahijado gana, alguien en la cola sabrá quién es su padrino.',
          pro: { ok: 'Es cierto que no es parentesco.', risk: 'Un vínculo afectivo cercano también puede afectar la imparcialidad, y en una ciudad mediana todo se sabe.' },
          kusi: ['pensando', 'Legal no siempre es suficiente.'] } },
    ],
    mirada: { ve: 'En Cajamarca, como en muchas ciudades del Perú, el compadrazgo pesa tanto como la sangre. La ley mira el parentesco; la confianza pública mira todo lo demás.' },
  },
  {
    id: 'f6', t: '16:20', ch: 'documento', who: 'marisol', titulo: 'El acta de instalación', banner: 'assets/foto2/revisan.webp', lugar: 'Oficina de Marisol', show: ['cumplimiento', 'calidad', 'tiempo'],
    body: () => `<p>Marisol dicta y tú escribes. El acta de instalación tiene que contar lo que pasó hoy <mark class="clave">en el orden en que pasó</mark>. Mañana la leerá alguien que no estuvo.</p>`,
    type: 'secuencia', prompt: 'Ordena los puntos del acta de instalación.', boton: 'Cerrar el acta',
    items: [
      { id: 'asist', t: 'Lugar, fecha, hora y miembros presentes', por: 'Quién estuvo y cuándo.' },
      { id: 'bases', t: 'Lectura de las bases y del cronograma', por: 'Todos evalúan con las mismas reglas.' },
      { id: 'dj', t: 'Presentación de las declaraciones juradas de vínculos', por: 'Antes de cualquier decisión.' },
      { id: 'abst', t: 'Abstención del Ing. Terrones en la plaza de ingeniero civil', por: 'La causal y quién la declara.' },
      { id: 'supl', t: 'Designación de la Ing. Rabanal como reemplazo', por: 'En el mismo acto, para que el comité siga completo.' },
      { id: 'firma', t: 'Firma de todos los miembros', por: 'El acta vale cuando está firmada.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { cumplimiento: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0 }, rel: { marisol: q === 'buena' ? 1 : 0 },
        flags: q === 'buena' ? ['acta_instalacion'] : [],
        out: q === 'buena' ? 'El acta queda en dos páginas. Marisol la firma y la pone encima de todo: «Esto es lo primero que va a ver la auditora».' : 'Marisol mueve dos puntos: «La designación del reemplazo va justo después de la abstención. Si no, parece que el comité quedó cojo».',
        pro: { ok: 'Un acta en orden cuenta la historia de la sesión sin necesidad de explicarla.', info: 'Escanea el acta firmada hoy mismo y guárdala en la carpeta del concurso.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Lista para la Contraloría!' : 'Abstención y reemplazo, juntos.'],
      };
    },
    mirada: {
      ve: 'Las actas parecen burocracia hasta el día en que alguien pregunta «¿quién decidió esto?». Entonces son lo único que habla por ti.',
      visual: { tipo: 'linea', titulo: 'Instalación del comité', hitos: [['10:00', 'Instalación'], ['10:50', 'Declaraciones de vínculos'], ['11:10', 'Abstención y reemplazo'], ['16:30', 'Acta firmada']] },
    },
  },
];
