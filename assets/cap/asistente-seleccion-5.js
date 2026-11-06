// Asistente de Selección · Capítulo 5 · «La prueba» · Semana 1, viernes · Clínica del Misti, Arequipa.
// Normas citadas:
// - Ley 29973, Ley General de la Persona con Discapacidad, art. 50 (modificado por el D. Leg. 1417): derecho a ajustes razonables
//   en el proceso de selección, que incluyen adaptar metodologías, procedimientos, instrumentos de evaluación y métodos de entrevista;
//   el empleador los realiza salvo carga desproporcionada o indebida. Reglamento (D.S. 002-2014-MIMP, modificado por D.S. 013-2019-MIMP).
//   https://blog.prcp.com.pe/wp-content/uploads/2018/11/13.9.18-Modifican-disposiciones-asociadas-a-los-ajustes-razonablesr.pdf
//   https://lpderecho.pe/modifican-reglamento-de-la-ley-29973-ley-general-de-la-persona-con-discapacidad/
// - Ley 26772 (no discriminación en el acceso al empleo), ya citada en el capítulo 2.
// - Ley 29733 (datos personales), ya citada en el capítulo 1.

export const CAP = {
  n: 5, titulo: 'La prueba', dia: 'Semana 1, viernes', foto: 'assets/3d/scenes/academia.webp', lugar: 'Auditorio de la Clínica del Misti · Arequipa',
  inicio: '07:15', fin: '18:45', cierreHora: '18:30',
  apertura: 'Viernes. Cuarenta postulantes en el auditorio del primer piso, con lapiceros prestados y el estómago vacío de nervios. Hoy son las pruebas, y la batería de evaluación tiene cinco años sin que nadie la lea.', boton: 'Abrir el auditorio',
  kusi: 'Evaluar igual no siempre es evaluar justo. Hoy lo vas a ver. ¡Dale!',
  lead: 'Limpiaste la prueba de preguntas que no debían estar, hiciste el ajuste que Yesenia necesitaba, pusiste el peso donde está el trabajo y usaste el informe del proveedor como un dato, no como un veredicto.',
  reflexion: '¿Qué mide de verdad una prueba que se toma con miedo?',
  siguiente: { n: 6, titulo: 'La entrevista', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'tecnicas', p: '60 técnicas de enfermería', j: 'Milena · Selección', d: 0, e: 'Selección en 6 días hábiles' },
  { id: 'prueba', p: 'Batería de evaluación', j: 'Psicomet Sur', d: 0, e: 'Por revisar antes de las 8' },
  { id: 'ajustes', p: 'Ajustes para postulantes', j: 'Tú', d: 0, e: 'Yesenia: hipoacusia' },
  { id: 'faltan', p: 'Postulantes que no llegaron', j: 'Tú', d: 0, e: 'Por llamar' },
];

export const FUTURO = {
  prueba_limpia: ['Sacaste de la prueba las preguntas sobre hijos, religión y salud.', 'Psicomet usará la versión corregida en adelante.'],
  prueba_sucia: ['La prueba se tomó con preguntas discriminatorias.', 'Alguna postulante lo va a contar.'],
  yesenia_ajuste: ['Yesenia dio la prueba con instrucciones escritas y de frente a la evaluadora.', 'La verás en la entrevista del lunes.'],
  yesenia_sin_ajuste: ['Yesenia dio la prueba sin ajustes.', 'Su resultado no dice lo que sabe.'],
  peso_trabajo: ['El puntaje pesa lo que el trabajo exige: práctica y criterio clínico.', 'Las entrevistas del lunes partirán de ahí.'],
  faltantes_reprogramados: ['Reprogramaste a quienes faltaron por causas reales.', 'El lunes tendrás dos evaluaciones más.'],
  angel_segunda_mirada: ['No descartaste a Ángel por el informe de estrés.', 'Lo verá Enfermería el lunes.'],
  angel_fuera: ['Ángel quedó fuera por el informe de Psicomet.', 'Él todavía no lo sabe.'],
};

export const CHATS = {
  milena: { n: 'Milena Cáceres', sub: 'Analista de Selección', who: 'milena' },
  sor: { n: 'Sor Elena Paz', sub: 'Jefa de Enfermería', who: 'sor' },
  psico: { n: 'Karen Valdivia', sub: 'Psicomet Sur · evaluaciones', c: '#9B6FB0' },
  yesenia: { n: 'Yesenia Apaza', sub: 'Postulante', c: '#3C8D7A' },
  angel: { n: 'Ángel Mamani', sub: 'Postulante', who: 'angel' },
};

export const WSP = [
  { chat: 'psico', t: '07:10', de: 'Karen', txt: 'Ya estamos en el auditorio 📋 Traje la batería de siempre, la que usamos con todas las clínicas.' },
  { chat: 'psico', t: '07:12', de: 'Karen', txt: 'Gracias por avisarnos lo de Yesenia ayer. Le preparé las instrucciones impresas.', si: 'confirmadas' },
  { chat: 'yesenia', t: '12:50', de: 'Yesenia', txt: 'Gracias por las instrucciones escritas. Es la primera prueba donde entiendo todo desde el inicio.', si: 'yesenia_ajuste' },
  { chat: 'angel', t: '13:05', de: 'Ángel', txt: 'Señorita, en la práctica me temblaron las manos con el tensiómetro 😔 ¿Ya me descartaron?' },
  { chat: 'sor', t: '17:30', de: 'Sor Elena', txt: 'Miré los resultados de la práctica. Hay una muchacha, Yesenia, que tomó la presión mejor que mis técnicas antiguas.', si: 'yesenia_ajuste' },
];

export const CORREOS = [
  { t: '07:20', de: 'Milena Cáceres', para: 'Asistente de Selección', asunto: 'Lee la batería antes de las 8', html: '<p>Estoy atrapada en el tráfico de la Variante de Uchumayo. Lee la batería de Psicomet antes de que empiecen. Si algo no te cuadra, sácalo. Te respaldo.</p><p>Milena</p>' },
  { t: '15:30', de: 'Karen Valdivia · Psicomet Sur', para: 'Selección', asunto: 'Resultados preliminares', html: '<p>Adjunto resultados. Observación: Ángel Mamani presenta baja tolerancia a la presión en la prueba situacional. Lo calificamos como «no recomendable».</p><p>Karen</p>' },
];

export const QUIZ = [
  { q: '¿Qué pregunta no debe estar en una prueba de selección?', ops: ['¿Qué haría si un paciente se descompensa?', '¿Planea tener hijos en los próximos años?', '¿Cómo registra los signos vitales?', '¿Qué hace si se equivoca de medicamento?'], ok: 1, por: 'Preguntar por planes de maternidad o paternidad discrimina y no tiene relación con el trabajo.' },
  { q: 'Una postulante con hipoacusia pide instrucciones escritas. Según la Ley 29973, el empleador…', ops: ['No tiene que hacer nada', 'Debe hacer ajustes razonables en la selección, salvo carga desproporcionada', 'Puede descartarla', 'Debe darle más puntaje'], ok: 1, por: 'El art. 50 de la Ley 29973 reconoce ajustes razonables en la selección, incluidos los instrumentos de evaluación.' },
  { q: 'El proveedor califica a un postulante como «no recomendable» por estrés. ¿Qué haces?', ops: ['Lo descartas', 'Lo tomas como un dato y lo contrastas con la práctica y la entrevista', 'Lo ignoras', 'Se lo cuentas al postulante'], ok: 1, por: 'Una prueba es una fuente de información, no una sentencia.' },
  { q: 'Un ajuste razonable…', ops: ['Baja la exigencia del puesto', 'Permite que la persona muestre lo que sabe, sin bajar la exigencia', 'Es un favor', 'Solo existe en el Estado'], ok: 1, por: 'El ajuste cambia la forma de evaluar, no lo que se exige.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'e1', t: '07:30', ch: 'documento', who: null, titulo: 'La batería de siempre', banner: 'assets/foto/mesa-papeles.webp', lugar: 'Auditorio, primera fila', show: ['cumplimiento', 'etica', 'calidad'],
    body: () => `<p>Karen te pasa la batería impresa mientras su asistente reparte lapiceros. Tienes media hora antes de que empiecen. Milena viene atrapada en el tráfico.</p><p><mark class="clave">Marca lo que tiene que salir</mark> antes de las 8.</p>`,
    type: 'flag', prompt: 'Marca las preguntas que discriminan o que no miden el trabajo.',
    doc: { t: 'Batería de evaluación · Técnico(a) de enfermería', sub: 'Psicomet Sur · versión 2021' },
    lines: [
      { id: 'caso', t: '1. Un paciente postoperado tiene la presión muy baja y está sudoroso. ¿Qué hace primero?' },
      { id: 'hijos', t: '2. ¿Tiene hijos o planea tenerlos en los próximos dos años?', bad: LEY, why: 'Pregunta discriminatoria: no tiene relación con el trabajo.' },
      { id: 'relig', t: '3. ¿Qué religión practica? (para turnos de domingo)', bad: LEY, why: 'La religión no se pregunta. La disponibilidad para domingos se pregunta directamente.' },
      { id: 'enferm', t: '4. ¿Padece o ha padecido alguna enfermedad crónica?', bad: LEY, why: 'Dato sensible de salud. La aptitud se ve en el examen médico de ingreso, no en una prueba de selección.' },
      { id: 'error', t: '5. Se da cuenta de que su compañera administró un medicamento equivocado. ¿Qué hace?' },
      { id: 'dibujo', t: '6. Dibuje una persona bajo la lluvia.', duda: 'Prueba proyectiva antigua. Puede aportar algo, pero no es lo que más dice de una técnica.' },
      { id: 'velocidad', t: '7. Resuelva 60 operaciones de cálculo en 5 minutos.', bad: BP, why: 'Mide rapidez de cálculo, no lo que se necesita en el piso: el cálculo de dosis no lo hace la técnica bajo cronómetro.' },
    ],
    res: ({ missLey, hitsLey, hitsBp }) => ({
      q: missLey ? 'riesgosa' : hitsBp ? 'buena' : 'aceptable',
      fx: { cumplimiento: missLey ? -6 : 6, etica: missLey ? -3 : 3, calidad: hitsBp ? 3 : 0 },
      flags: [missLey ? 'prueba_sucia' : 'prueba_limpia'], cartera: { prueba: missLey ? 'Se tomó con preguntas discriminatorias' : 'Batería corregida: 3 preguntas fuera' },
      out: missLey ? 'Tachas algunas preguntas, pero otra discriminatoria llega impresa a 40 postulantes. Una levanta la mano: «¿Esto es obligatorio?».' : `Tachas ${hitsLey + (hitsBp || 0)} preguntas con plumón. Karen frunce el ceño… y luego asiente: «Tienes razón. La armamos para otra empresa hace años».`,
      pro: { ok: 'Lees antes de que se tome: después ya no se puede deshacer.', risk: 'Lo que pregunta el proveedor lo pregunta la clínica.', info: 'Pide a Psicomet que actualice la batería por escrito.' },
      kusi: missLey ? ['indignado', '¡Esa pregunta no tenía que llegar!'] : ['celebra', '¡Prueba limpia a tiempo!'],
    }),
    rules: [[LEY, 'Ley 26772: nada de preguntas sobre hijos, religión o estado civil en la selección.'], [LEY, 'Ley 29733: los datos de salud son sensibles.']],
    mirada: { ve: 'Las pruebas viejas se copian de empresa en empresa sin que nadie las lea. La asistente que las lee antes protege a 40 postulantes y a la clínica en media hora.', visual: { tipo: 'balanza', a: { t: 'Fuera', items: ['¿Planea tener hijos?', '¿Qué religión practica?', '¿Enfermedades crónicas?'] }, b: { t: 'Se queda', items: ['Paciente con presión baja', 'Error de medicamento de una compañera'] } } },
  },
  {
    id: 'e2', t: '08:10', ch: 'presencial', who: null, titulo: 'Yesenia', banner: 'assets/foto2/presentacion.webp', lugar: 'Auditorio, fila del medio', show: ['personas', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Yesenia Apaza, 27 años, de Chivay, se sienta en la tercera fila. Lleva audífonos en ambos oídos. ${F.has('confirmadas') ? 'Karen ya tiene sus instrucciones impresas.' : 'Nadie sabe todavía que tiene hipoacusia.'}</p><p>La asistente de Psicomet empieza a dar las instrucciones de espaldas, escribiendo en la pizarra. <mark class="clave">Yesenia te mira</mark>.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pedir que las instrucciones se den también por escrito y de frente, y que Yesenia se siente adelante. La prueba es la misma; cambia la forma.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 4 }, flags: ['yesenia_ajuste'], cartera: { ajustes: 'Yesenia: instrucciones escritas y de frente' },
          out: 'La asistente se voltea y habla mirando al auditorio. Yesenia baja los hombros y empieza a escribir. Nadie más nota el cambio, salvo que todos entienden mejor.',
          pro: { ok: 'Un ajuste pequeño, sin costo, que deja ver lo que la persona sabe.', info: 'Muchos ajustes benefician a todos: hablar de frente ayuda a todo el auditorio.' },
          kusi: ['celebra', 'Mismo examen, misma puerta abierta.'] } },
      { id: 'b', label: 'No cambiar nada: la prueba tiene que ser igual para todas o no es justa.',
        res: { q: 'riesgosa', fx: { personas: -5, cumplimiento: -5 }, flags: ['yesenia_sin_ajuste'], cartera: { ajustes: 'Sin ajuste para Yesenia' },
          out: 'Yesenia pierde las instrucciones de la segunda parte y la entrega casi en blanco. Al salir, no te mira.',
          pro: { ok: 'Cuidas que sea igual.', risk: 'Tratar igual a quien está en una situación distinta la deja fuera. La ley pide ajustes razonables.' },
          kusi: ['triste', 'Igual no fue justo para ella.'] } },
      { id: 'c', label: 'Decirle a Yesenia que no se preocupe, que la evaluarán aparte el lunes, sola.',
        res: { q: 'aceptable', fx: { personas: 1, tiempo: -2 }, cartera: { ajustes: 'Yesenia: evaluación aparte el lunes' },
          out: 'Yesenia recoge sus cosas y se va. El lunes dará la prueba sola, en una sala. Funciona, pero se sintió separada.',
          pro: { ok: 'Le das una oportunidad.', risk: 'Separar cuando bastaba un ajuste pequeño también excluye.' },
          kusi: ['pensando', '¿Hacía falta separarla?'] } },
    ],
    rules: [[LEY, 'Ley 29973, art. 50: ajustes razonables en la selección, incluidos los instrumentos de evaluación y los métodos de entrevista.']],
    mirada: {
      ve: 'Un ajuste razonable no le regala nada a nadie: le permite mostrar lo que sabe. Yesenia no necesita una prueba más fácil; necesita entender la pregunta. Una técnica con hipoacusia puede tomar la presión, registrar y cuidar igual que cualquiera.',
      visual: { tipo: 'cambio', titulo: 'El ajuste', pares: [['Instrucciones de espaldas', 'De frente y por escrito'], ['Fila del fondo', 'Fila de adelante'], ['«Igual para todas»', 'Misma prueba, otra forma']] },
      normas: [{ ley: 'Ley 29973, Ley General de la Persona con Discapacidad, art. 50', dice: 'La persona con discapacidad tiene derecho a ajustes razonables en el proceso de selección: adaptación de metodologías, procedimientos, instrumentos de evaluación y métodos de entrevista. El empleador los realiza salvo que supongan una carga desproporcionada o indebida.', practica: 'Instrucciones escritas y hablar de frente no cuestan nada y permiten evaluar a Yesenia por lo que sabe.' }],
    },
  },
  {
    id: 'e3', t: '10:30', ch: 'sistema', who: null, titulo: 'Cuánto pesa cada cosa', banner: 'assets/3d/scenes/balanza.webp', show: ['calidad', 'personas'],
    body: (n, F) => `<p>Mientras corrigen, Karen te pide decidir cómo se pondera el puntaje final. ${F.has('sor_escuchada') ? 'Recuerdas a Sor Elena: «que avise cuando algo no está bien».' : ''}</p><p>Elige <mark class="clave">las tres cosas</mark> que más deben pesar.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres componentes con más peso.', boton: 'Ponderar', resumen: 'Le diste más peso a',
    cols: ['Componente', 'Qué mide'],
    rows: [
      { id: 'prac', cells: ['Práctica de signos vitales', 'Lo que hará todos los días'] },
      { id: 'caso', cells: ['Casos clínicos situacionales', 'Si sabe qué hacer y a quién avisar'] },
      { id: 'error', cells: ['Pregunta del error de una compañera', 'Si avisa cuando algo no está bien'] },
      { id: 'calculo', cells: ['Cálculo rápido', 'Velocidad con números'] },
      { id: 'dibujo', cells: ['Prueba proyectiva del dibujo', 'Interpretación del evaluador'] },
      { id: 'cv', cells: ['Años de experiencia del CV', 'Tiempo trabajado'] },
    ],
    score: { prac: 3, caso: 3, error: 3, cv: 1, calculo: -1, dibujo: -2 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 4 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 0, personas: picks.includes('cv') ? -1 : 2 }, flags: q === 'buena' ? ['peso_trabajo'] : [],
        out: q === 'buena' ? 'El ranking cambia: suben dos recién egresadas que hicieron una práctica impecable y avisaron del error de la compañera sin dudar.' : 'El ranking premia cosas que no se hacen en el piso.',
        pro: { ok: 'El peso va donde está el trabajo real.', info: 'Muestra la ponderación a Sor Elena: si no la reconoce, algo está mal.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡Medir lo que importa!' : '¿Eso hará en el piso?'],
      };
    },
    mirada: { ve: 'Lo que pesa más en el puntaje es lo que la clínica dice que valora. Si pesa el dibujo, valoras el dibujo. Si pesa avisar a tiempo, valoras lo que salva pacientes.', visual: { tipo: 'rango', titulo: 'Peso en el puntaje final', min: 0, max: 100, banda: [60, 100], marcas: [['Práctica + casos + aviso', 75], ['Experiencia', 15], ['Otros', 10]] } },
  },
  {
    id: 'e4', t: '12:40', ch: 'llamada', who: null, titulo: 'Las que no llegaron', banner: 'assets/foto/llamada.webp', show: ['tiempo', 'personas', 'calidad'],
    body: () => `<p>Seis sillas vacías. Almuerzas un chupe de camarones de la cafetería, que se enfría mientras llamas.</p><p>Tres llamadas. <mark class="clave">¿A quién reprogramas?</mark></p>`,
    type: 'calls',
    calls: [
      ['Marleny Ccama · Camaná', 'Contesta desde una carretera, con viento', '«Señorita, el bus se malogró en la Pampa de Majes a las 5 de la mañana. Recién estamos saliendo. Le mandé foto.»'],
      ['Kevin Arce', 'Contesta medio dormido', '«Ah… me olvidé, disculpe. ¿Hay otra fecha?»'],
      ['Rocío Neyra', 'Contesta en voz baja, en un pasillo', '«Me salió un trabajo en otra clínica y ya empecé. Gracias igual.»'],
    ],
    prompt: '¿Qué haces con las ausencias?',
    choices: [
      { id: 'a', label: 'Reprogramar a Marleny el lunes a las 3, con un criterio que valga para todos: causa ajena y aviso el mismo día. A Kevin, decirle que no hay nueva fecha. A Rocío, agradecer y cerrar.',
        res: { q: 'buena', fx: { tiempo: -1, calidad: 3, personas: 3 }, flags: ['faltantes_reprogramados'], cartera: { faltan: 'Marleny reprogramada; Kevin y Rocío cerrados' },
          out: 'Marleny responde con un audio emocionado. Anotas el criterio en la matriz para que no dependa de tu humor.',
          pro: { ok: 'Un criterio único hace justa la excepción.', info: 'Escribe el criterio antes de aplicarlo.' },
          kusi: ['animo', 'Excepción con regla.'] } },
      { id: 'b', label: 'Reprogramar a las tres: necesitamos 60 y no podemos perder a nadie.',
        res: { q: 'aceptable', fx: { tiempo: -3, calidad: -1 },
          out: 'El lunes tienes tres pruebas extra. Rocío no aparece: ya trabaja en otra clínica.',
          pro: { ok: 'No pierdes postulantes.', risk: 'Reprogramar sin criterio es injusto con quienes llegaron a las 7 de la mañana.' },
          kusi: ['pensando', 'Todas no es lo mismo que justo.'] } },
      { id: 'c', label: 'No reprogramar a nadie: quien no vino, perdió su oportunidad.',
        res: { q: 'riesgosa', fx: { personas: -3, calidad: -2, tiempo: 2 },
          out: 'Marleny se queda en la carretera con su foto del bus malogrado. Era una de las pocas con experiencia en postoperados.',
          pro: { ok: 'Regla simple.', risk: 'Una regla que no mira las causas castiga a quien vive más lejos.' },
          kusi: ['triste', 'El bus no era su culpa…'] } },
    ],
    mirada: { ve: 'Las excepciones no son el problema; el problema es hacerlas sin criterio. Escribir la regla («causa ajena y aviso el mismo día») convierte un favor en una decisión justa.' },
  },
  {
    id: 'e5', t: '15:40', ch: 'correo', who: null, titulo: '«No recomendable»', banner: 'assets/foto2/tension.webp', show: ['calidad', 'etica', 'personas'],
    mail: { from: 'Karen Valdivia · Psicomet Sur', to: 'Selección', asunto: 'Resultados preliminares' },
    body: (n, F) => `<p>Ángel Mamani: «baja tolerancia a la presión, no recomendable». Pero en la práctica tomó bien todos los signos vitales, aunque le temblaron las manos. ${F.has('peso_trabajo') ? 'Con tu ponderación, queda en el puesto 31 de 40.' : 'Queda en la mitad de la tabla.'}</p><p>${F.has('angel_atendido') ? 'Te acuerdas de él en el pasillo, con su fólder.' : ''} <mark class="clave">¿Qué haces con el informe?</mark></p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Pasarlo a entrevista con una nota: «Psicomet observa tolerancia a la presión; en la práctica, técnica correcta. Explorar en la entrevista con el caso real».',
        res: { q: 'buena', fx: { calidad: 4, etica: 3 }, rel: { angel: 1 }, flags: ['angel_segunda_mirada'],
          responde: 'Gracias, Karen. Ángel pasa a entrevista: su práctica fue correcta. Vamos a explorar con Enfermería cómo maneja la presión en un caso real.',
          out: 'Karen responde: «Me parece bien. Nuestra prueba es un dato, no una sentencia». Ángel tendrá su oportunidad el lunes.',
          pro: { ok: 'Usas el informe como una fuente más y lo contrastas.', risk: 'Si Enfermería ve lo mismo, tendrás que decir que no.', info: 'Escribe la nota con hechos, para que la entrevistadora no llegue con prejuicio.' },
          kusi: ['animo', 'Un dato no es un veredicto.'] } },
      { id: 'b', label: 'Descartarlo: para eso pagamos al proveedor y el piso es de mucha presión.',
        res: { q: 'aceptable', fx: { tiempo: 2, personas: -3 }, flags: ['angel_fuera'],
          responde: 'Gracias, Karen. Retiramos a Ángel Mamani del proceso.',
          out: 'Ángel sale de la lista. En tu celular, su mensaje de las 13:05 sigue sin respuesta.',
          pro: { ok: 'Respetas la opinión experta.', risk: 'Una sola fuente decidió por ti, y contradice lo que viste en la práctica.' },
          kusi: ['pensando', '¿Y lo que viste en la práctica?'] } },
      { id: 'c', label: 'Ignorar el informe: el chico es bueno y tú lo conoces.',
        res: { q: 'riesgosa', fx: { calidad: -3, etica: -2 }, flags: ['angel_segunda_mirada'],
          out: 'Ángel pasa. Pero si en el piso se paraliza con un paciente, la pregunta será por qué nadie miró el informe.',
          pro: { ok: 'Le das una oportunidad.', risk: 'Tu simpatía tampoco es un criterio.' },
          kusi: ['preocupado', 'Simpatía no es evidencia.'] } },
    ],
    rules: [[BP, 'Una prueba psicológica es una fuente de información: se contrasta con la práctica y la entrevista.']],
    mirada: { ve: 'Ni el informe del proveedor ni tu simpatía deciden solos. Lo que decide es la evidencia junta: la práctica, la prueba y lo que Enfermería vea en la entrevista. Así se cuida al paciente y al postulante.', visual: { tipo: 'flujo', titulo: 'Fuentes sobre Ángel', pasos: ['Prueba: presión', 'Práctica: correcta', 'Entrevista: caso real', 'Decisión de Enfermería'], aqui: 2 } },
  },
  {
    id: 'e6', t: '18:05', ch: 'presencial', who: 'milena', titulo: 'Primera semana', banner: 'assets/foto2/caminan.webp', lugar: 'Plaza de Armas de Arequipa', show: ['confianza', 'personas'],
    body: (n, F) => `<p>Milena te invita a caminar hasta la Plaza de Armas. Los portales están llenos de turistas y de oficinistas que salen de la semana. ${F.has('prueba_limpia') ? '«Lo de la batería… eso no lo hace cualquiera en su primera semana.»' : '«Fue una semana dura, ¿no?»'}</p><p>Se sientan en una banca frente a la Catedral. <mark class="clave">«¿Qué te llevas de esta semana?»</mark></p>`,
    type: 'choice', cotidiano: true,
    choices: [
      { id: 'a', label: '«Que verificar y ajustar no frena el proceso: lo hace más justo.»',
        res: { q: null, fx: { confianza: 3 }, rel: { milena: 1 }, out: 'Milena asiente. «El lunes empiezan las entrevistas con Sor Elena a las 6. Ahí vas a aprender a mirar.»', kusi: ['feliz', '¡Una semana bien vivida!'] } },
      { id: 'b', label: '«Que en salud no se puede suponer nada.»',
        res: { q: null, fx: { confianza: 2 }, rel: { milena: 1 }, out: '«Exacto. Ni lo bueno ni lo malo.» Milena compra dos cafés en un portal. «El lunes, a las 6, en el piso 3.»', kusi: ['animo', 'Nada se supone.'] } },
      { id: 'c', label: '«Que estoy cansada, pero quiero seguir.»',
        res: { q: null, fx: { confianza: 1, personas: 1 }, out: 'Milena se ríe: «Eso es lo más honesto que he escuchado hoy. Descansa. El lunes hay entrevistas a las 6».', kusi: ['feliz', 'Cansancio con ganas: buena señal.'] } },
    ],
    mirada: { ve: 'Cerrar la semana mirando lo que aprendiste ayuda a no repetir lo difícil y a reconocer lo que hiciste bien. La semana 2 empieza con lo más delicado: mirar a las personas.' },
  },
];
