// Asistente de Bienestar Social · Capítulo 4 · «El lactario» · Semana 2, martes.
// Hilo del mes: Maribel volvió de su licencia y el «lactario» que habilitó Administración es un depósito.
// Normas citadas:
// - Ley 29896, que establece la implementación de lactarios: obligatorio en centros con 20 o más mujeres en edad fértil.
// - D.S. 023-2021-MIMP, Reglamento de la Ley 29896 (deroga el D.S. 001-2016-MIMP):
//   art. 13 (ubicación alejada de áreas peligrosas o contaminadas; la evalúa el comité de SST con RR.HH. y medicina
//   ocupacional); art. 14 (área mínima de 7,50 m², uso exclusivo y privacidad, dos sillas con brazos, dos mesas o
//   repisas, papel toalla, jabón, depósitos con tapa, refrigeradora o frigobar de uso exclusivo, lavabo dentro del
//   ambiente, fácil acceso); art. 21 (tiempo de uso mínimo de una hora diaria dentro del horario, fraccionable en
//   2 x 30 o 3 x 20 minutos, considerado tiempo efectivamente laborado, sin contar el desplazamiento; la madre decide
//   la distribución previa coordinación); art. 22 (el tiempo de uso del lactario es independiente del permiso por
//   lactancia de la Ley 27240; ambos son irrenunciables).
//   https://busquedas.elperuano.pe/dispositivo/NL/1976374-4
// - Ley 27240 y modificatorias: una hora diaria de permiso por lactancia hasta que el hijo cumpla un año.

export const CAP = {
  n: 4, titulo: 'El lactario', dia: 'Semana 2, martes', foto: 'assets/3d/scenes/planta.webp',
  lugar: 'Agroindustrial Sipán · Lambayeque',
  inicio: '07:20', fin: '18:30', cierreHora: '18:15',
  apertura: 'Martes de la segunda semana. Administración «ya habilitó el lactario»: te mandaron una foto de una puerta con un letrero impreso.', boton: 'Ir a ver el lactario',
  kusi: 'Un letrero no hace un lactario. ¡Vamos a ver qué hay detrás de la puerta!',
  lead: 'Revisaste el «lactario» con el reglamento en la mano, le explicaste a Maribel todos sus derechos, escuchaste a las madres de otros turnos y armaste una propuesta que se puede aprobar.',
  reflexion: '¿Qué pensaste al ver dónde se extraía leche Maribel antes de hoy?',
  siguiente: { n: 5, titulo: 'La campaña de salud', dia: 'Semana 2, jueves' },
};

export const CARTERA = [
  { id: 'lactario', p: 'Lactario de la planta', j: 'Augusto · Administración', d: 0, e: 'Un depósito con letrero' },
  { id: 'maribel', p: 'Derechos de Maribel', j: 'Maribel · Laboratorio', d: 0, e: 'Por explicar' },
  { id: 'madres', p: 'Madres de otros turnos', j: 'Bienestar', d: 0, e: 'Sin escuchar' },
  { id: 'propuesta', p: 'Propuesta de lactario', j: 'Bienestar', d: 0, e: 'Por redactar' },
  { id: 'hector', p: 'Caso Llontop', j: 'Bienestar', d: 0, e: 'En seguimiento' },
];

export const FUTURO = {
  maribel_informada: ['Maribel sabe que su hora de lactancia y su tiempo de lactario son derechos distintos.', 'Te dirá cómo le va con su jefe.'],
  maribel_callada: ['No le contaste a Maribel que el tiempo de lactario es independiente de su hora de lactancia.', 'Se enterará por otra persona.'],
  lactario_propuesta: ['Enviaste una propuesta completa de lactario, con espacio, equipamiento y acceso por turnos.', 'Augusto responderá en la campaña de salud.'],
  lactario_noche: ['Tu propuesta incluye el acceso al lactario en el turno noche.', 'El turno noche volverá a ser un problema el jueves.'],
  csst_lactario: ['El comité de SST evaluará la ubicación del lactario.', 'Su secretario te buscará en el capítulo 5.'],
  gonzalo_acuerdo: ['Acordaste con el jefe del laboratorio cómo cubrir los tiempos de Maribel sin recortar sus derechos.', 'Gonzalo será menos duro la próxima vez.'],
  derecho_negociado: ['Aceptaste que el lactario se use dentro de la hora de lactancia.', 'Maribel perdió media jornada de derechos a la semana.'],
};

export const CHATS = {
  grupo: { n: 'Bienestar Sipán', sub: 'Nelly y tú', c: '#E4572E' },
  nelly: { n: 'Nelly Ramírez', sub: 'Jefa de Bienestar', who: 'nelly' },
  hector: { n: 'Don Héctor Llontop', sub: 'Operario de molienda', who: 'hector' },
  maribel: { n: 'Maribel Chapoñán', sub: 'Analista de laboratorio', who: 'maribel' },
  augusto: { n: 'Augusto Bravo', sub: 'Gerente de campo', who: 'augusto' },
  rosa: { n: 'Rosa Ñiquén', sub: 'Esposa de Don Héctor', c: '#B5651D' },
  gonzalo: { n: 'Gonzalo Vílchez', sub: 'Jefe del laboratorio de calidad', c: '#3F7F7F' },
  yesenia: { n: 'Yesenia Huamán', sub: 'Operaria de envasado · turno noche', c: '#9B4F96' },
};

export const WSP = [
  { chat: 'grupo', t: '07:15', de: 'Nelly', txt: 'Administración dice que «ya está el lactario». Revísalo tú antes de que lo anuncien, por fa 🙏' },
  { chat: 'rosa', t: '08:10', de: 'Rosa', txt: 'Señorita ya fuimos a la cooperativa. Le pagamos al de la moto y ya no viene 🙏 Héctor empezó la terapia.', si: 'deuda_alternativa' },
  { chat: 'hector', t: '09:30', de: 'Don Héctor', txt: 'Señorita, ya no agarro motores. Ahora hago los ejercicios que me dejó la terapista.', si: 'hector_orientado' },
  { chat: 'maribel', t: '07:25', de: 'Maribel', txt: 'Buenos días 😊 ¿Ya vio el lactario? Yo pasé ayer y… mejor véalo usted.', si: 'maribel_hora' },
  { chat: 'maribel', t: '07:25', de: 'Maribel', txt: 'Buenos días. Me dijeron que ya hay lactario. ¿Igual tengo que tomar mi hora al final?', si: 'maribel_fin' },
  { chat: 'yesenia', t: '12:10', de: 'Yesenia', txt: 'Señorita soy Yesenia de envasado, me pasó su número Maribel. ¿El lactario va a estar abierto de noche? Yo entro a las 7 de la noche.' },
  { chat: 'gonzalo', t: '17:05', de: 'Gonzalo', txt: 'Lo conversamos mañana con Maribel. Pero necesito que alguien me cubra los análisis de las 11.', si: 'gonzalo_acuerdo' },
  { chat: 'augusto', t: '17:50', de: 'Augusto', txt: 'Recibí la propuesta. El jueves en la campaña lo vemos, que voy a estar ahí.', si: 'lactario_propuesta' },
];

export const CORREOS = [
  { t: '07:30', de: 'Administración Sipán', para: 'Bienestar Social', asunto: 'Lactario habilitado', html: '<p>Se informa que se ha habilitado el ambiente de lactario en el depósito contiguo al tópico, según lo solicitado.</p><p>Se colocó el letrero respectivo. Cualquier consulta, a Administración.</p>' },
];

export const QUIZ = [
  { q: '¿Cuál es el área mínima de un lactario según el reglamento vigente?', ops: ['3 m²', '7,50 m²', '15 m²', 'No hay mínimo'], ok: 1, por: 'El D.S. 023-2021-MIMP, art. 14, fija un área mínima de 7,50 m².' },
  { q: 'El tiempo de uso del lactario…', ops: ['Es parte de la hora de lactancia', 'Es independiente del permiso por lactancia y se considera tiempo laborado', 'Se descuenta del sueldo', 'Lo decide el jefe del área'], ok: 1, por: 'El reglamento (arts. 21 y 22) lo considera tiempo efectivamente laborado e independiente de la hora de lactancia de la Ley 27240.' },
  { q: '¿Quién evalúa que la ubicación del lactario esté lejos de áreas peligrosas?', ops: ['El gerente de campo', 'El comité de SST, con RR.HH. y medicina ocupacional', 'La madre que lo usará', 'Nadie'], ok: 1, por: 'El art. 13 del reglamento encarga esa evaluación al comité de SST, con RR.HH. y medicina ocupacional.' },
  { q: 'Un frigobar del lactario puede compartirse con…', ops: ['Las vacunas del tópico', 'Los almuerzos del personal', 'Nada: es de uso exclusivo para la leche materna', 'Los reactivos del laboratorio'], ok: 2, por: 'La refrigeradora o frigobar del lactario es de uso exclusivo para conservar la leche.' },
  { q: 'En una planta que trabaja 24 horas, un buen lactario…', ops: ['Abre solo en horario de oficina', 'Es accesible en todos los turnos', 'Se usa con cita', 'Abre los fines de semana'], ok: 1, por: 'Si hay madres de noche, el lactario tiene que estar disponible de noche: el reglamento pide fácil y rápido acceso.' },
];

const LEY = 'ley', POL = 'politica', BP = 'bp';

export const ESCENAS = [
  {
    id: 'l1', t: '07:40', ch: 'presencial', who: null, titulo: 'Detrás del letrero', banner: 'assets/3d/scenes/almacen.webp', lugar: 'Depósito junto al tópico', show: ['cumplimiento', 'calidad', 'personas'],
    body: (n, F) => `<p>El letrero dice «LACTARIO» en Arial 72, pegado con cinta de embalaje. Adentro hace calor: el techo es de calamina. ${F.has('maribel_hora') ? 'Ves el banquito donde Maribel se sentó ayer, entre cajas.' : 'Maribel todavía no lo ha usado.'}</p><p>Abres en el celular el reglamento de lactarios y vas punto por punto. <mark class="clave">Que exista no significa que cumpla</mark>.</p>`,
    type: 'flag', prompt: 'Marca lo que no cumple con el reglamento de lactarios.',
    doc: { t: '«Lactario» · Depósito contiguo al tópico', sub: 'Lo que ves con el D.S. 023-2021-MIMP abierto en el celular' },
    lines: [
      { id: 'area', t: 'Unos 6 m² libres; el resto ocupado por cajas de archivo de Contabilidad.', bad: LEY, why: 'El área mínima es de 7,50 m² y el ambiente debe ser de uso exclusivo para la lactancia.' },
      { id: 'puerta', t: 'Puerta con vidrio transparente y sin seguro por dentro.', bad: LEY, why: 'El lactario debe garantizar privacidad.' },
      { id: 'frigo', t: 'Frigobar compartido con las vacunas y medicamentos del tópico.', bad: LEY, why: 'La refrigeradora o frigobar debe ser de uso exclusivo para la leche materna.' },
      { id: 'lavabo', t: 'Para lavarse las manos, el baño del pasillo.', bad: LEY, why: 'El lavabo debe estar dentro del ambiente del lactario.' },
      { id: 'silla', t: 'Una silla de plástico sin brazos.', bad: LEY, why: 'El reglamento pide dos sillas o sillones estables con brazos, y mesas o repisas.' },
      { id: 'quimicos', t: 'Pared con pared con el almacén de soda cáustica y cal.', bad: LEY, why: 'El lactario debe estar alejado de áreas peligrosas o contaminadas.' },
      { id: 'piso', t: 'Primer piso, a dos minutos del laboratorio de calidad.' },
      { id: 'luz', t: 'Tomacorriente en buen estado y una ventana alta para ventilar.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Sales del depósito pensando que «algo es algo». Administración anunciará el lactario esta tarde a todas las trabajadoras.' : 'Le tomas fotos a cada punto y le escribes a Nelly: «Esto no es un lactario. Pide que no lo anuncien todavía». Nelly lo frena a tiempo.',
      flags: missLey ? [] : ['lactario_revisado'], rel: { nelly: missLey ? 0 : 1 },
      cartera: { lactario: missLey ? 'Depósito anunciado como lactario' : 'Seis incumplimientos documentados con fotos' },
      pro: { ok: 'Revisas con la norma en la mano y documentas con fotos: así nadie discute impresiones.', risk: 'Un lactario mal hecho y anunciado es peor que ninguno: la empresa cree que ya cumplió.', info: 'Lo de la soda cáustica es lo más urgente: es un riesgo para la madre y para la leche.' },
      kusi: missLey ? ['preocupado', '¿Con soda cáustica al lado?'] : ['indignado', '¡Seis cosas mal y un letrero bonito!'],
    }),
    rules: [[LEY, 'D.S. 023-2021-MIMP, art. 14: área mínima de 7,50 m², privacidad, uso exclusivo, frigobar exclusivo, lavabo dentro y mobiliario adecuado.'], [LEY, 'Art. 13: el lactario debe estar alejado de áreas peligrosas o contaminadas.']],
    mirada: {
      ve: 'Es común que una empresa «cumpla» poniendo un letrero en el primer espacio libre. Bienestar tiene que mirar con la norma en la mano: lo que está en juego es la salud de una madre y la leche de un bebé.',
      visual: { tipo: 'cambio', titulo: 'Del depósito al lactario', pares: [['6 m² con cajas', '7,50 m² de uso exclusivo'], ['Puerta de vidrio', 'Privacidad y seguro'], ['Frigobar con vacunas', 'Frigobar solo para leche'], ['Junto a la soda cáustica', 'Lejos de áreas peligrosas']] },
      normas: [{ ley: 'D.S. 023-2021-MIMP, Reglamento de la Ley 29896, arts. 13 y 14', dice: 'El lactario debe tener al menos 7,50 m², ser de uso exclusivo, garantizar privacidad, contar con frigobar exclusivo, lavabo y mobiliario, y estar alejado de áreas peligrosas.', practica: 'El depósito no cumple casi ninguno de esos puntos.' }],
    },
  },
  {
    id: 'l2', t: '09:00', ch: 'presencial', who: 'maribel', titulo: 'Dos derechos, no uno', banner: 'assets/foto/acuerdo.webp', lugar: 'Pasillo del laboratorio de calidad', show: ['personas', 'cumplimiento', 'etica'],
    body: (n, F) => `<p>Maribel sale del laboratorio con la bata manchada de jugo de caña: está midiendo brix desde las seis. ${F.has('maribel_fin') ? 'Sigue tomando su hora al final del día y extrayéndose en el baño.' : 'Usa media hora de su hora de lactancia para extraerse a media mañana.'}</p><p>Leyendo el reglamento descubriste algo: el tiempo de uso del lactario, mínimo una hora al día, <mark class="clave">es independiente de su hora de lactancia y cuenta como tiempo trabajado</mark>. Maribel no lo sabe. Su jefe tampoco.</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Explicarle a Maribel sus dos derechos, que ella decida cómo usarlos y ofrecerle acompañarla a coordinar con su jefe.',
        res: { q: 'buena', fx: { personas: 5, cumplimiento: 4, confianza: -1 }, rel: { maribel: 1 }, flags: ['maribel_informada'], cartera: { maribel: 'Conoce sus dos derechos; coordinará con su jefe' },
          out: 'Maribel se queda callada. «¿Entonces todo este tiempo…?» Luego sonríe, pero enseguida se preocupa: «Gonzalo va a decir que paso más tiempo fuera que dentro». Quedan en hablar con él juntas.',
          pro: { ok: 'La información es de ella: decide ella, y no la dejas sola frente a su jefe.', risk: 'Maribel teme que la vean como problema. Tendrás que ayudar a que el laboratorio se organice.', info: 'La madre decide cómo distribuir la hora de lactario, previa coordinación con el empleador (art. 21).' },
          kusi: ['celebra', '¡Ahora sí sabe todo lo que le corresponde!'] } },
      { id: 'b', label: 'Esperar a que el lactario esté listo para contarle: si se lo dices ahora, el conflicto con su jefe estalla antes de tiempo.',
        res: { q: 'aceptable', fx: { personas: -1, cumplimiento: -2 }, flags: ['maribel_callada'], cartera: { maribel: 'Sin saber del tiempo de lactario' },
          out: 'Maribel vuelve a sus análisis. Esta semana seguirá partiendo su hora de lactancia para extraerse. Y es un derecho que ya tenía hoy, aunque el lactario no estuviera listo.',
          pro: { ok: 'Buscas el momento oportuno.', risk: 'Esconder un derecho para evitar un conflicto es decidir por ella.' },
          kusi: ['pensando', '¿Y si fuera tu derecho?'] } },
      { id: 'c', label: 'Ir directo donde su jefe y explicarle la norma, para que sea él quien le ofrezca el tiempo a Maribel.',
        res: { q: 'riesgosa', fx: { cumplimiento: 2, personas: -3, confianza: -2 }, rel: { maribel: -1 }, cartera: { maribel: 'Su jefe se enteró antes que ella' },
          out: 'Gonzalo escucha, frunce el ceño y llama a Maribel delante de todo el laboratorio: «Dice Bienestar que ahora tienes dos horas». Maribel se pone roja. Justo lo que temía.',
          pro: { ok: 'Quieres que el jefe asuma la norma.', risk: 'Le quitaste a Maribel la decisión y la expusiste delante de su equipo.' },
          kusi: ['triste', 'Era de ella contarlo…'] } },
    ],
    rules: [[LEY, 'D.S. 023-2021-MIMP, art. 22: el tiempo de uso del lactario es independiente del permiso por lactancia; ambos son irrenunciables.'], [LEY, 'Art. 21: mínimo una hora diaria, fraccionable, considerada tiempo efectivamente laborado, sin contar el desplazamiento.']],
    mirada: {
      ve: 'Muchas madres no reclaman derechos que desconocen, y cuando los conocen temen ser vistas como un problema. Informar bien es dar la información a la persona, dejar que decida y acompañarla cuando le toca negociar.',
      visual: { tipo: 'balanza', a: { t: 'Hora de lactancia (Ley 27240)', items: ['Una hora diaria', 'Hasta que el bebé cumpla un año', 'Para dar de lactar o salir antes'] }, b: { t: 'Tiempo de lactario (D.S. 023-2021-MIMP)', items: ['Mínimo una hora diaria', 'Para extraer y conservar leche', 'Cuenta como tiempo laborado'] } },
      normas: [{ ley: 'D.S. 023-2021-MIMP, arts. 21 y 22', dice: 'El tiempo de uso del lactario es de al menos una hora diaria, se considera laborado y es independiente del permiso por lactancia.', practica: 'Maribel estaba pagando con su hora de lactancia un tiempo que ya era suyo.' }],
    },
  },
  {
    id: 'l3', t: '10:40', ch: 'llamada', who: null, titulo: 'Los números y el lugar', banner: 'assets/foto2/revisan.webp', lugar: 'Oficina de Bienestar', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Para que la propuesta no se discuta, necesitas tres cosas: cuántas mujeres podrían usarlo, dónde ponerlo y quién lo aprueba. ${F.has('planillas_dolida') ? 'Wilmer todavía te saluda seco desde lo del correo a Gerencia.' : 'Wilmer te dijo el viernes: «Para lo que necesite, me escribe».'}</p><p><mark class="clave">Tres llamadas antes del almuerzo</mark>.</p>`,
    type: 'calls',
    calls: [
      ['Wilmer Sandoval · Planillas', 'Contesta al tercer timbre', 'Saca el reporte del T-Registro: «Doscientas doce mujeres en planilla, ciento sesenta y ocho entre 15 y 49 años. Y en el turno noche de envasado hay treinta y tantas».'],
      ['Secretario del comité de SST · Ing. Pisfil', 'Contesta desde el campo, con viento', '«El reglamento dice que la ubicación la evaluamos nosotros con RR.HH. y el médico ocupacional. Nadie nos consultó lo del depósito. Al lado de la soda cáustica, ni hablar.»'],
      ['Logística · almacén general', 'Contesta un practicante', '«Hay una oficina vacía en el segundo piso del laboratorio, la del antiguo jefe de turno. Tiene lavadero porque era sala de muestras. Y en el almacén hay un frigobar nuevo que nunca se instaló.»'],
    ],
    prompt: 'Con lo que averiguaste, ¿qué espacio propones?',
    choices: [
      { id: 'a', label: 'Proponer la antigua oficina del segundo piso del laboratorio, con el frigobar del almacén, y pedir que el comité de SST la evalúe antes de adecuarla.',
        res: { q: 'buena', fx: { cumplimiento: 5, calidad: 4 }, flags: ['csst_lactario'], cartera: { lactario: 'Oficina del 2.º piso del laboratorio, con lavadero; evaluación del comité de SST', propuesta: '168 mujeres en edad fértil; espacio identificado' },
          out: 'El Ing. Pisfil agenda la evaluación para la próxima reunión del comité. Logística te manda fotos de la oficina: tiene ventana, lavadero y tomacorriente. Solo hay que sacar dos escritorios viejos.',
          pro: { ok: 'Un espacio que ya tiene lavadero, un frigobar que ya se compró y la evaluación de quien debe hacerla.', risk: 'Es un segundo piso: revisa que el acceso sea rápido y que no haya escaleras peligrosas.', info: 'El reglamento prefiere el primer o segundo piso.' },
          kusi: ['celebra', '¡El lactario ya existía, solo había que encontrarlo!'] } },
      { id: 'b', label: 'Mantener el depósito y pedir que lo arreglen: sacar las cajas, poner otra silla y cambiar la puerta. Es lo más rápido.',
        res: { q: 'riesgosa', fx: { tiempo: 2, cumplimiento: -3 }, cartera: { lactario: 'Depósito con arreglos', propuesta: '168 mujeres; depósito mejorado' },
          out: 'Administración acepta encantada. Pero la soda cáustica sigue al otro lado de la pared, el lavabo sigue en el baño y el comité de SST no sabe nada.',
          pro: { ok: 'Avanzas rápido.', risk: 'Hay incumplimientos que no se arreglan con una silla: la ubicación junto a químicos y la falta de lavabo.' },
          kusi: ['preocupado', 'Rápido… pero junto a la soda cáustica.'] } },
    ],
    rules: [[LEY, 'D.S. 023-2021-MIMP, art. 13: la ubicación la evalúa el comité de SST con RR.HH. y medicina ocupacional.'], [LEY, 'Ley 29896: lactario obligatorio en centros con 20 o más mujeres en edad fértil.']],
    mirada: {
      ve: 'Una propuesta bien armada responde antes de que pregunten: cuántas personas lo usarán, por qué ese lugar y quién lo evaluó. Muchas veces la solución ya está en la empresa: un espacio olvidado, un equipo sin instalar.',
      visual: { tipo: 'embudo', titulo: 'Quiénes podrían usarlo', niveles: [['Mujeres en planilla', 212], ['Mujeres de 15 a 49 años', 168], ['En el turno noche de envasado', 34]] },
    },
  },
  {
    id: 'l4', t: '12:45', ch: 'presencial', who: null, titulo: 'Las madres del comedor', banner: 'assets/foto/cafe.webp', lugar: 'Comedor de la planta', show: ['personas', 'calidad', 'tiempo'],
    body: () => `<p>Te sientas con un ceviche de caballa en una mesa de mujeres de envasado y de campo. Yesenia, de Chota, 24 años, entra a las siete de la noche y tiene un bebé de cinco meses. Doña Teodora, 41, de la cuadrilla de semillero, ya es abuela, pero cría a la bebé de su hija, que trabaja en Lima.</p><p>Todas hablan a la vez. <mark class="clave">Solo puedes llevar dos cosas a la propuesta</mark>.</p>`,
    type: 'pick', n: 2, prompt: 'Elige las dos necesidades que no pueden faltar en la propuesta.', boton: 'Llevar estas dos', resumen: 'Llevaste',
    cols: ['Lo que dicen', 'Qué implica'],
    rows: [
      { id: 'noche', cells: ['Yesenia: «De noche Administración está cerrada. ¿Quién me abre la puerta a las dos de la mañana?»', 'Acceso en todos los turnos'] },
      { id: 'distancia', cells: ['«Envasado está a diez minutos caminando. Si me dan una hora y se me va media en ir y volver…»', 'El desplazamiento no se descuenta del tiempo de uso'] },
      { id: 'cooler', cells: ['«¿Y cómo llevo la leche a mi casa en la combi, con este calor?»', 'Conservación hasta el hogar'] },
      { id: 'globos', cells: ['«Que lo inauguren bonito, con globos y una torta.»', 'Celebración'] },
      { id: 'babyshower', cells: ['«Mejor hagan un baby shower para las embarazadas cada año.»', 'Actividad de integración'] },
    ],
    score: { noche: 3, distancia: 3, cooler: 2, globos: -1, babyshower: -1 },
    res: (picks, sc) => {
      const q = sc >= 6 ? 'buena' : sc >= 3 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { personas: q === 'buena' ? 5 : 1, calidad: q === 'buena' ? 3 : 0 },
        flags: picks.includes('noche') ? ['lactario_noche'] : [],
        cartera: { madres: q === 'buena' ? 'Acceso nocturno y tiempo de desplazamiento' : 'Escuchadas, necesidades a medias' },
        out: picks.includes('noche') ? 'Yesenia te da su número: «Avíseme, señorita. Hasta ahora me saco la leche en el carro del bus de personal».' : 'Doña Teodora se ríe: «Con globos no se guarda la leche, hijita». Yesenia ya se fue a dormir antes de su turno.',
        pro: { ok: 'Un lactario sirve si lo pueden usar las que más lo necesitan, incluidas las de la noche y las que trabajan lejos.', info: 'El reglamento no cuenta el desplazamiento dentro del tiempo de uso.' },
        kusi: [q === 'buena' ? 'feliz' : 'pensando', q === 'buena' ? '¡El lactario también es de la noche!' : '¿Y las de la noche?'],
      };
    },
    rules: [[LEY, 'D.S. 023-2021-MIMP, art. 21: el tiempo de desplazamiento no se incluye en el tiempo de uso.'], [BP, 'Escucha a usuarias de distintos turnos y áreas antes de diseñar un servicio.']],
    mirada: {
      ve: 'Las normas se diseñan pensando en una oficina de 8 a 5, pero una planta azucarera trabaja día y noche. Escuchar a las madres de otros turnos evita un lactario que solo funciona para quien está cerca y de día.',
      visual: { tipo: 'matriz', x: 'Esfuerzo para resolverlo', y: 'Impacto en las madres', cuadrantes: ['Imprescindible', 'Imprescindible y planifica', 'Si alcanza', 'No ahora'], items: [['Acceso de noche', .35, .9], ['Desplazamiento', .3, .8], ['Cooler para la combi', .2, .55], ['Globos', .2, .05], ['Baby shower', .5, .1]] },
    },
  },
  {
    id: 'l5', t: '14:30', ch: 'documento', who: null, titulo: 'La propuesta', banner: 'assets/foto/plano-equipo.webp', lugar: 'Oficina de Bienestar', show: ['calidad', 'cumplimiento', 'confianza'],
    body: (n, F) => `<p>Nelly te deja su laptop porque la tuya se apagó con el calor. ${F.has('csst_lactario') ? 'Tienes el espacio, el frigobar y la evaluación del comité agendada.' : 'Tienes el número de mujeres y las fotos del depósito.'}</p><p>Augusto lee rápido y aprueba lo que entiende. <mark class="clave">Una página, con lo que la norma pide y lo que cuesta poco</mark>.</p>`,
    type: 'builder', prompt: 'Elige las piezas de cada bloque de la propuesta.', boton: 'Enviar la propuesta a Nelly y Augusto',
    bloques: [
      { id: 'porque', t: 'Por qué', n: 1, ops: [
        { id: 'p1', t: 'Sipán tiene 168 mujeres de 15 a 49 años: la Ley 29896 nos obliga a tener un lactario que cumpla su reglamento.', ok: true, por: 'Dato propio y norma en una línea.' },
        { id: 'p2', t: 'Las trabajadoras se están quejando mucho.', ok: false, por: 'No dice por qué es una obligación.' },
      ] },
      { id: 'espacio', t: 'Dónde y con qué', n: 2, ops: [
        { id: 'e1', t: 'Antigua oficina del 2.º piso del laboratorio: tiene lavadero y ventana; ubicación evaluada por el comité de SST.', ok: true, por: 'Responde a la norma y a la seguridad.' },
        { id: 'e2', t: 'Frigobar exclusivo (ya está en el almacén), dos sillas con brazos, mesa, jabón, papel toalla y cortina.', ok: true, por: 'Equipamiento mínimo, casi sin costo.' },
        { id: 'e3', t: 'El depósito junto al tópico, con una silla más.', ok: false, por: 'Sigue junto a químicos y sin lavabo.' },
      ] },
      { id: 'uso', t: 'Cómo se usa', n: 2, ops: [
        { id: 'u1', t: 'Abierto en los tres turnos: la llave queda en el tópico, que atiende 24 horas.', ok: true, por: 'Resuelve lo de Yesenia.' },
        { id: 'u2', t: 'Mínimo una hora diaria, aparte de la hora de lactancia, sin contar el camino.', ok: true, por: 'Lo que dicen los arts. 21 y 22.' },
        { id: 'u3', t: 'Uso con reserva previa a Administración, de 8 a 5.', ok: false, por: 'Deja fuera al turno noche y agrega una traba.' },
      ] },
      { id: 'pide', t: 'Qué se pide', n: 1, ops: [
        { id: 'k1', t: 'Aprobar el traslado de dos escritorios y la instalación del frigobar esta semana.', ok: true, por: 'Un pedido pequeño y concreto.' },
        { id: 'k2', t: 'Un presupuesto para construir un lactario nuevo.', ok: false, por: 'Suena a gasto grande y retrasa todo.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'buena' ? 4 : 0, confianza: q === 'buena' ? 2 : 0 }, rel: { nelly: q === 'buena' ? 1 : 0 },
        flags: q === 'riesgosa' ? [] : ['lactario_propuesta'],
        cartera: { propuesta: q === 'riesgosa' ? 'Propuesta con huecos' : 'Una página: norma, espacio, uso en tres turnos y un pedido' },
        out: q === 'buena' ? 'Nelly la lee en silencio y la manda a Augusto sin cambiar ni una coma: «Esta no la puede rechazar».' : q === 'aceptable' ? 'Nelly la envía, pero comenta: «Le falta cerrar lo de la noche o lo del espacio. Augusto va a encontrar el hueco».' : 'Nelly te la devuelve: «Así nos va a decir que el depósito ya está bien».',
        pro: { ok: 'Norma, dato propio, espacio que ya existe y un pedido barato: así se aprueba rápido.', risk: 'Un pedido grande o vago se queda en la bandeja de un gerente en plena zafra.', info: 'Adjunta las fotos del depósito: muestran por qué no basta un letrero.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una página que se aprueba sola!' : '¿Dónde está el hueco?'],
      };
    },
    rules: [[LEY, 'Ley 29896 y D.S. 023-2021-MIMP: espacio, equipamiento, acceso y tiempo de uso.'], [BP, 'Una propuesta para gerencia: el porqué, la solución, el costo y un pedido concreto.']],
    mirada: {
      ve: 'Bienestar convence con propuestas que un gerente puede firmar el mismo día. Un lactario bien hecho puede costar casi nada si se usan los recursos que la empresa ya tiene.',
      visual: { tipo: 'flujo', titulo: 'La propuesta en una página', pasos: ['168 mujeres', 'Ley 29896', 'Oficina con lavadero', 'Frigobar del almacén', 'Tres turnos', 'Un pedido pequeño'] },
    },
  },
  {
    id: 'l6', t: '16:00', ch: 'documento', who: null, titulo: 'Cómo se implementa', banner: 'assets/esc/escalera.webp', lugar: 'Pizarra de Bienestar', show: ['calidad', 'tiempo'],
    body: () => `<p>Nelly toma un plumón: «Ahora, ¿cómo lo hacemos realidad sin que se quede en una propuesta bonita?». Te pasa el plumón.</p><p><mark class="clave">Un lactario empieza con números y termina con un registro</mark>.</p>`,
    type: 'secuencia', prompt: 'Ordena la implementación del lactario.', boton: 'Dejarlo en la pizarra',
    items: [
      { id: 'contar', t: 'Contar a las mujeres de 15 a 49 años en planilla', por: 'Confirma la obligación y el tamaño.' },
      { id: 'espacio', t: 'Elegir el espacio y que el comité de SST evalúe la ubicación', por: 'Antes de gastar en adecuarlo.' },
      { id: 'aprobar', t: 'Lograr la aprobación de gerencia', por: 'Con la propuesta de una página.' },
      { id: 'equipar', t: 'Adecuar y equipar el ambiente', por: 'Frigobar, sillas, lavadero, privacidad.' },
      { id: 'difundir', t: 'Informar a trabajadoras y jefes de todos los turnos', por: 'Incluidos los jefes, para que no lo traben.' },
      { id: 'registro', t: 'Llevar un registro de uso y revisar el mantenimiento', por: 'Para saber si se usa y mejorarlo.' },
    ],
    res: (bien, total) => {
      const q = bien === total ? 'buena' : bien >= total - 2 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 5 : 1, tiempo: q === 'buena' ? 1 : -1 },
        out: q === 'buena' ? 'Nelly toma foto a la pizarra: «Esta es la ruta. La próxima vez que alguien cuelgue un letrero, le mandamos esto».' : 'Nelly mueve dos pasos: «Si equipas antes de que el comité evalúe, puedes terminar equipando otro depósito junto a químicos».',
        pro: { ok: 'Evaluar antes de equipar y difundir también a los jefes evita los dos errores más comunes.', info: 'El registro de uso te servirá para demostrar que el lactario hacía falta.' },
        kusi: [q === 'buena' ? 'celebra' : 'animo', q === 'buena' ? '¡Ruta completa!' : 'Primero se evalúa, después se equipa.'],
      };
    },
    rules: [[BP, 'Evalúa la ubicación antes de equipar y comunica a todos los turnos, incluidas las jefaturas.']],
    mirada: {
      ve: 'Muchos lactarios existen en el papel y nadie los usa: porque nadie supo que existían, porque el jefe no dejaba ir o porque cerraba a las cinco. La implementación termina cuando las madres lo usan.',
      visual: { tipo: 'flujo', titulo: 'Del número al uso', pasos: ['Contar', 'Evaluar el espacio', 'Aprobar', 'Equipar', 'Difundir', 'Registrar el uso'] },
    },
  },
  {
    id: 'l7', t: '17:20', ch: 'correo', who: null, titulo: 'El correo de Gonzalo', banner: 'assets/esc/decide.webp', show: ['cumplimiento', 'confianza', 'personas'],
    mail: { from: 'Gonzalo Vílchez · Jefe de laboratorio', to: 'Asistente de Bienestar Social', asunto: 'Horarios de Maribel Chapoñán' },
    body: (n, F) => `<p>${F.has('maribel_informada') ? 'Maribel me comentó lo de los tiempos.' : 'Me enteré de que el lactario tendría un tiempo aparte.'} Con todo respeto: estamos en plena zafra, somos tres analistas para tres turnos y los análisis de pol y brix no esperan. <mark class="clave">Propongo que use el lactario dentro de su hora de lactancia</mark>, como venimos haciendo. Así no se afecta el laboratorio.</p><p>Gonzalo</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Responder con la norma y una solución para el laboratorio: que Maribel elija los horarios y que tú coordines con Planillas un analista de apoyo en las horas más críticas.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 2, tiempo: -2 }, flags: ['gonzalo_acuerdo'], rel: { maribel: 1 }, cartera: { maribel: 'Dos derechos; apoyo en el laboratorio a las 11' },
          responde: 'Gonzalo, entiendo la carga de la zafra. El reglamento de lactarios dice que el tiempo de uso del lactario es independiente de la hora de lactancia y que ambos son irrenunciables, así que no podemos juntarlos. Te propongo que Maribel nos diga en qué horarios lo necesita y que veamos con Planillas un apoyo en las horas críticas. ¿Lo conversamos mañana los tres?',
          out: 'Gonzalo tarda en responder. Luego escribe: «Ya. Pero que alguien me cubra los análisis de las 11». Es un sí, a su manera.',
          pro: { ok: 'No negocias el derecho: negocias cómo se organiza el laboratorio para respetarlo.', risk: 'Te comprometiste a conseguir un apoyo: tendrás que cumplir.', info: 'Los dos derechos son irrenunciables: ni Maribel puede cederlos aunque quiera.' },
          kusi: ['celebra', 'Firme con el derecho, flexible con la solución.'] } },
      { id: 'b', label: 'Aceptar su propuesta como un acuerdo: si Maribel está de acuerdo, el laboratorio no se afecta y no hay conflicto.',
        res: { q: 'riesgosa', fx: { confianza: 2, cumplimiento: -5, personas: -3 }, flags: ['derecho_negociado'], cartera: { maribel: 'Lactario dentro de la hora de lactancia' },
          responde: 'Gonzalo, de acuerdo. Si Maribel está conforme, puede usar el lactario dentro de su hora de lactancia.',
          out: 'Gonzalo responde con un «perfecto». Maribel acepta en silencio, porque no quiere ser «la que da problemas». Acaba de perder un derecho que no podía ceder.',
          pro: { ok: 'Evitas el conflicto con la jefatura.', risk: 'Los derechos de lactancia son irrenunciables: un «acuerdo» que los recorta no vale.' },
          kusi: ['triste', 'Un derecho irrenunciable no se negocia…'] } },
      { id: 'c', label: 'Reenviar su correo a la gerente de Recursos Humanos para que ella le explique la norma.',
        res: { q: 'aceptable', fx: { cumplimiento: 2, confianza: -3 }, cartera: { maribel: 'Escalado a la gerente de RR.HH.' },
          responde: 'Estimada gerente: le reenvío el correo del Ing. Vílchez para su conocimiento y fines.',
          out: 'La gerente le responde a Gonzalo con la norma. Él cumple, pero de mala gana, y a Maribel le cambia el tono por semanas. Nadie resolvió quién cubre los análisis de las 11.',
          pro: { ok: 'La norma se respeta.', risk: 'Escalar sin intentar resolver deja al jefe a la defensiva y a la trabajadora en medio.' },
          kusi: ['pensando', 'Se cumplió… ¿y el laboratorio?'] } },
    ],
    rules: [[LEY, 'D.S. 023-2021-MIMP, art. 22: el tiempo de lactario es independiente del permiso por lactancia; ambos derechos son irrenunciables e indisponibles.']],
    mirada: {
      ve: 'El jefe de Maribel no es un villano: tiene tres analistas para tres turnos en plena zafra. Bienestar no le quita la razón en su problema; le ayuda a resolverlo sin que lo pague la madre.',
      visual: { tipo: 'mensaje', titulo: 'Firme con el derecho, flexible con la solución', txt: 'Gonzalo, entiendo la carga de la zafra. El tiempo de lactario es independiente de la hora de lactancia y ambos son irrenunciables. Te propongo que Maribel nos diga en qué horarios lo necesita y que veamos con Planillas un apoyo en las horas críticas.' },
    },
  },
];
