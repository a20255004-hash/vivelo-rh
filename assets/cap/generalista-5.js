// Generalista de RR.HH. · Capítulo 5 · «La planilla externa» · Semana 1, viernes.
// Hilo de las dos semanas: preparar el Hotel Inti Wasi (Cusco) para la temporada alta, siendo la única persona de RR.HH.
// Normas citadas:
// - TUO de la Ley de Jornada de Trabajo, D.S. 007-2002-TR, art. 8: el horario nocturno va de 22:00 a 06:00, y quien
//   trabaja en ese horario no puede percibir menos que la remuneración mínima vigente con una sobretasa del 35 %.
//   https://perugestiona.pe/derechos-laborales/trabajo-nocturno/
//   https://lpderecho.pe/cas-lab-14239-2015-lima-sobretasa-trabajo-nocturno-aplica-perciban-remuneracion-minima-vital
//   https://larepublica.pe/economia/2025/04/18/cuanto-se-paga-por-trabajar-en-horario-nocturno-en-peru-este-2025-y-cual-es-el-horario-establecido-conoce-lo-que-senala-la-ley-atmp-755676
//   Cálculo con la RMV de S/ 1,230 (D.S. 015-2026-TR): 1,230 × 1.35 = S/ 1,660.50.
// - D.Leg. 713: día de descanso trabajado sin sustitución, labor más sobretasa del 100 % (citado en el capítulo 4).
// - Las horas extra se pagan con sobretasa (se explica el principio, sin tasas).

export const CAP = {
  n: 5, titulo: 'La planilla externa', dia: 'Semana 1, viernes', foto: 'assets/3d/scenes/boleta.webp',
  lugar: 'Oficina de RR.HH. · Hotel Inti Wasi, Cusco',
  inicio: '07:00', fin: '19:00', cierreHora: '18:45',
  apertura: 'Cusco, viernes. A las 6:40, Iván te mandó la pre-planilla del mes: un Excel de 150 filas y un mensaje: «Necesito su conformidad antes de las 12 para mandar los pagos al banco».', boton: 'Abrir la pre-planilla',
  kusi: 'Tercerizar la planilla no es tercerizar la responsabilidad. ¡Ojo de águila!',
  lead: 'Elegiste qué revisar con poco tiempo, encontraste los errores en los pagos nocturnos y en los descansos trabajados, controlaste al contador sin romper la relación, atendiste un accidente en la cocina y armaste un control de planilla para los próximos meses.',
  reflexion: '¿Quién responde ante un trabajador cuando el contador externo se equivoca?',
  siguiente: { n: 6, titulo: 'Wendy', dia: 'Semana 2, lunes' },
};

export const CARTERA = [
  { id: 'preplanilla', p: 'Conformidad de la pre-planilla', j: 'CPC Iván Mendoza', d: 0, e: 'Hoy, 12:00' },
  { id: 'nocturnos', p: 'Pagos del turno de noche', j: 'Recepción y auditoría nocturna', d: 0, e: 'Este mes' },
  { id: 'control', p: 'Control de planilla para los próximos meses', j: 'Verónica · Gerencia', d: 0, e: 'Esta semana' },
  { id: 'cocina', p: 'Seguridad en la cocina', j: 'Chef Rolando', d: 0, e: 'Hoy' },
];

export const FUTURO = {
  controles_clave: ['Revisaste lo que más riesgo tenía: nocturnos, horas extra y altas nuevas.', 'Repetirás esos controles cada mes.'],
  errores_detectados: ['Detectaste los pagos nocturnos bajo el mínimo y los descansos trabajados mal pagados.', 'Teófilo y Sonia cobrarán lo que les corresponde.'],
  errores_pasaron: ['Diste conformidad a una planilla con pagos nocturnos bajo el mínimo.', 'Alguien lo notará en su boleta.'],
  planilla_corregida: ['Iván reprocesó la planilla antes del pago.', 'Los pagos salieron correctos.'],
  calendario_cierre: ['Acordaste con Iván un calendario de cierre y una lista de control.', 'La certificadora lo verá en el capítulo 7.'],
  ivan_amenazado: ['Le dijiste a Iván que la gerencia evaluaría cambiarlo.', 'Ahora trabaja a la defensiva y solo por correo.'],
  reintegro_postergado: ['Se pagó con errores y la diferencia quedó para el próximo mes.', 'Teófilo pregunta por qué cobró menos.'],
  accidente_atendido: ['Kevin fue atendido de inmediato y el accidente quedó registrado tal como pasó.', 'La cocina revisará la estación de corte.'],
  accidente_minimizado: ['Kevin volvió a la cocina con un vendaje del botiquín.', 'El corte se infectará.'],
  accidente_ocultado: ['Le pediste a Kevin que dijera que se cortó en su casa.', 'Kevin lo contará más adelante.'],
  control_planilla: ['Dejaste un control de planilla con fechas, insumos, controles fijos y un reemplazo.', 'Es tu entregable de la semana.'],
  teofilo_informado: ['Le explicaste a Teófilo el error, su reintegro y la fecha de pago.', 'Confía en RR.HH.'],
  teofilo_confundido: ['Teófilo no entendió qué le pasó a su pago.', 'Le preguntará a Wendy.'],
};

export const CHATS = {
  grupo: { n: 'Inti Wasi · Jefaturas', sub: 'Verónica, el chef, recepción, housekeeping y tú', c: '#F2A900' },
  veronica: { n: 'Verónica Quispe', sub: 'Gerenta general', who: 'veronica' },
  chef: { n: 'Chef Rolando Huamán', sub: 'Jefe de cocina', who: 'chef' },
  wendy: { n: 'Wendy Condori', sub: 'Recepcionista bilingüe', who: 'wendy' },
  contador: { n: 'CPC Iván Mendoza', sub: 'Contador externo', who: 'contador' },
  yaneth: { n: 'Yaneth Huallpa', sub: 'Recepcionista nocturna', c: '#6B5BA8' },
  teofilo: { n: 'Teófilo Ayma', sub: 'Auditor nocturno · 9 años en el hotel', c: '#4B6B2E' },
};

export const WSP = [
  { chat: 'contador', t: '06:40', de: 'Iván', txt: 'Buenos días. Le envié la pre-planilla. Necesito su conformidad antes de las 12 para mandar los pagos al banco.' },
  { chat: 'yaneth', t: '07:05', de: 'Yaneth', txt: 'Anoche ya estuvo Sonia conmigo en la madrugada. Dormí 7 horas, ¡no me acordaba lo que era eso! 😅', si: 'cuadro_legal' },
  { chat: 'yaneth', t: '07:05', de: 'Yaneth', txt: 'Otra noche sola con los grupos del aeropuerto. ¿Ya hay alguien para la madrugada?', no: 'cuadro_legal' },
  { chat: 'yaneth', t: '08:10', de: 'Yaneth', txt: 'Una pregunta: en mi primera boleta, ¿la noche se paga igual que el día?', si: 'honorarios_planilla' },
  { chat: 'chef', t: '11:52', de: 'Chef Rolando', txt: 'Kevin se cortó. Venga a la cocina, rápido.' },
  { chat: 'contador', t: '12:35', de: 'Iván', txt: 'Reprocesado. Teófilo y Sonia ya figuran con lo que corresponde. Le mando el calendario de cierre.', si: 'planilla_corregida' },
  { chat: 'teofilo', t: '16:40', de: 'Teófilo', txt: 'Nueve años trabajando de noche y nadie me había explicado eso, señorita. Gracias.', si: 'teofilo_informado' },
];

export const CORREOS = [
  { t: '06:42', de: 'CPC Iván Mendoza', para: 'Generalista de RR.HH.', asunto: 'Pre-planilla del mes · conformidad', html: '<p>Estimada:</p><p>Adjunto la pre-planilla del mes (150 trabajadores). Por favor, confirme antes de las 12:00 para enviar los pagos al banco y preparar la PLAME.</p><p>Atentamente,<br>CPC Iván Mendoza</p>' },
  { t: '13:30', de: 'Verónica Quispe', para: 'Generalista de RR.HH.', asunto: 'Kevin', html: '<p>Me contó el chef lo de Kevin. Quiero saber exactamente qué pasó y qué vamos a cambiar en la cocina. Hoy, por favor.</p><p>V.</p>' },
];

export const QUIZ = [
  { q: '¿En qué horario se considera trabajo nocturno?', ops: ['De 18:00 a 06:00', 'De 22:00 a 06:00', 'De 20:00 a 08:00', 'Solo de madrugada'], ok: 1, por: 'El D.S. 007-2002-TR, art. 8, fija el horario nocturno entre las 22:00 y las 06:00.' },
  { q: 'Con una RMV de S/ 1,230, ¿cuánto es lo mínimo que puede ganar al mes quien trabaja en horario nocturno?', ops: ['S/ 1,230', 'S/ 1,476', 'S/ 1,660.50', 'S/ 2,460'], ok: 2, por: 'La RMV más una sobretasa del 35 %: 1,230 × 1.35 = S/ 1,660.50.' },
  { q: 'El contador externo pagó mal a dos trabajadores. ¿Quién responde ante ellos?', ops: ['El contador', 'El hotel, que es su empleador', 'Nadie', 'Los trabajadores, por no revisar'], ok: 1, por: 'La planilla se puede tercerizar; la responsabilidad del empleador, no.' },
  { q: 'Una camarera trabajó dos domingos que eran su día libre, sin otro descanso en la semana. ¿Cómo se pagan?', ops: ['Como días simples', 'La labor más una sobretasa del 100 %', 'No se pagan', 'Con un día de vacaciones'], ok: 1, por: 'El D.Leg. 713 dispone la sobretasa del 100 % cuando el descanso se trabaja sin sustituirlo.' },
  { q: 'Un ayudante de cocina se corta trabajando. ¿Qué no debes hacer nunca?', ops: ['Llevarlo a atención médica', 'Registrar el accidente', 'Pedirle que diga que se cortó en su casa', 'Revisar la estación de corte'], ok: 2, por: 'Ocultar un accidente de trabajo deja al trabajador sin protección y expone al hotel.' },
];

const LEY = 'ley', BP = 'bp';

export const ESCENAS = [
  {
    id: 'p1', t: '07:20', ch: 'documento', who: null, titulo: 'Cinco horas para 150 filas', banner: 'assets/esc/planilla.webp', lugar: 'Oficina de RR.HH., con el termo de café', show: ['tiempo', 'calidad', 'cumplimiento'],
    body: (n, F) => `<p>El Excel se llama «PREPLANILLA_INTIWASI_v3_final.xlsx» y tiene siete pestañas; una se llama «Hoja1 (2)». ${F.has('horas_a_ivan') ? 'Iván usó la pestaña de horas que le mandaste ayer.' : 'Iván no recibió de ti las horas extra ni los descansos trabajados.'}</p><p>No puedes revisar 150 filas a mano antes de las 12. <mark class="clave">Eliges tres controles</mark>, los de más riesgo.</p>`,
    type: 'pick', n: 3, prompt: 'Elige los tres controles que harás antes de dar conformidad.', boton: 'Hacer estos controles', resumen: 'Revisaste',
    cols: ['Control', 'Qué detecta'],
    rows: [
      { id: 'nocturno', cells: ['Comparar a quienes trabajan entre 22:00 y 06:00 con la RMV más 35 %', 'Pagos de noche bajo el mínimo'] },
      { id: 'extras', cells: ['Cruzar horas extra y días libres trabajados con el cuadro y el registro', 'Sobretasas mal calculadas'] },
      { id: 'altas', cells: ['Verificar que los ingresos de la temporada estén en el T-Registro y en la planilla', 'Personas trabajando sin estar en planilla'] },
      { id: 'renta', cells: ['Recalcular la retención de renta de quinta categoría de los 150', 'Errores tributarios'] },
      { id: 'nombres', cells: ['Revisar que los nombres estén bien escritos', 'Tildes y apellidos'] },
      { id: 'formato', cells: ['Pedirle a Iván un reporte con otro formato', 'Nada: solo se ve mejor'] },
    ],
    score: { nocturno: 3, extras: 3, altas: 3, renta: 1, nombres: 0, formato: 0 },
    res: (picks, sc) => {
      const q = sc >= 8 ? 'buena' : sc >= 5 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 4 : q === 'aceptable' ? 1 : -3, tiempo: q === 'riesgosa' ? -2 : 2 },
        flags: q === 'buena' ? ['controles_clave'] : [], cartera: { preplanilla: q === 'buena' ? 'Tres controles de riesgo en marcha' : 'Revisión parcial' },
        out: q === 'buena' ? 'Filtras por turno, por horas y por fecha de ingreso. En veinte minutos ya ves cosas raras.' : q === 'aceptable' ? 'Encuentras algo, aunque pasaste tiempo en un control que no era tuyo.' : 'Pasas la mañana corrigiendo tildes. Los montos los miras de reojo.',
        pro: { ok: 'Con poco tiempo, revisa donde un error le cuesta más a una persona.', risk: 'Recalcular la renta de todos es trabajo del contador; tu valor está en los datos que solo RR.HH. conoce.', info: 'RR.HH. conoce los turnos, los ingresos y las horas: eso es lo que el contador no puede adivinar.' },
        kusi: [q === 'buena' ? 'curioso' : 'pensando', q === 'buena' ? '¡Directo a lo que duele!' : '¿Eso era lo más urgente?'],
      };
    },
    rules: [[BP, 'Controla al proveedor de planilla en lo que solo RR.HH. sabe: turnos, horas, ingresos y ceses.']],
    mirada: {
      ve: 'Tercerizar la planilla no significa dejar de mirarla. La generalista no rehace el trabajo del contador: revisa los puntos donde los datos de RR.HH. y los cálculos del contador se cruzan.',
      visual: { tipo: 'matriz', x: 'Esfuerzo', y: 'Riesgo para el trabajador', cuadrantes: ['Hazlo ya', 'Hazlo hoy', 'Si sobra tiempo', 'No es tuyo'], items: [['Nocturnos', .3, .9], ['Horas extra', .5, .8], ['Altas nuevas', .35, .85], ['Renta de quinta', .9, .3], ['Nombres', .4, .1]] },
    },
  },
  {
    id: 'p2', t: '08:30', ch: 'documento', who: null, titulo: 'Lo que dice la pre-planilla', banner: 'assets/3d/scenes/boleta.webp', show: ['cumplimiento', 'calidad', 'etica'],
    body: (n, F) => `<p>Filtras las filas que importan. ${F.has('honorarios_planilla') ? 'Yaneth aparece por primera vez en planilla; Iván ya le reconoció su fecha real de ingreso.' : F.has('honorarios_espera') ? 'Yaneth no aparece: sigue con recibos por honorarios.' : 'Yaneth aparece en planilla, con fecha de ingreso de esta semana.'}</p><p>Te sirves otro café. <mark class="clave">Algunos montos no cuadran con lo que sabes de los turnos</mark>.</p>`,
    type: 'flag', prompt: 'Marca las filas que no se pueden pagar así.',
    doc: { t: 'PRE-PLANILLA · extracto', sub: 'Hotel Inti Wasi · preparada por CPC Iván Mendoza' },
    lines: [
      { id: 'teofilo', t: 'Teófilo Ayma · auditor nocturno · 23:00 a 07:00 · remuneración S/ 1,450.', bad: LEY, why: 'Trabaja casi toda su jornada entre las 22:00 y las 06:00. No puede ganar menos que la RMV más 35 %: S/ 1,660.50.' },
      { id: 'sonia', t: 'Sonia Quispe · recepcionista nocturna (entró anoche) · 23:00 a 07:00 · remuneración S/ 1,230.', bad: LEY, why: 'La RMV es el mínimo para el día. De noche, el mínimo es S/ 1,660.50.' },
      { id: 'fortunata', t: 'Fortunata Mamani · camarera · 2 domingos trabajados (eran su día libre) · pagados como días simples.', bad: LEY, why: 'Si el día de descanso se trabaja sin sustituirlo, se paga la labor más una sobretasa del 100 %.' },
      { id: 'extras', t: 'Cocina · 14 horas extra autorizadas · pagadas al valor de la hora simple.', bad: LEY, why: 'Las horas extra se pagan con sobretasa, no al valor simple.' },
      { id: 'ruben', t: 'Rubén Ccori · mozo · turno partido diurno · S/ 1,400.' },
      { id: 'wendy', t: 'Wendy Condori · recepcionista bilingüe · S/ 1,800 más asignación por idiomas.' },
      { id: 'lavanderia', t: 'Lavandería · 4 personas · sin horas extra en el mes.' },
    ],
    res: ({ missLey, hitsLey }) => ({
      out: missLey ? 'Te parece todo razonable y le escribes a Iván: «Conforme». Teófilo y Sonia cobrarán por debajo del mínimo nocturno.' : `Marcas ${hitsLey} filas. No es un error de una persona: es un patrón en cómo se pagan la noche y los descansos.`,
      flags: missLey ? ['errores_pasaron'] : ['errores_detectados'], cartera: { nocturnos: missLey ? 'Pagos bajo el mínimo nocturno' : `${hitsLey} errores para corregir antes del pago` },
      pro: { ok: 'Encontrar el error antes del pago cuesta un correo; después, cuesta un reintegro, una explicación y confianza.', risk: 'Un pago nocturno bajo el mínimo es una infracción aunque lo haya calculado un tercero.', info: 'Marca en el maestro de personal quién trabaja de noche: así el control sale con un filtro.' },
      kusi: missLey ? ['preocupado', '¿Y la noche no vale más?'] : ['sorpresa', '¡Nueve años de Teófilo con el mínimo equivocado!'],
    }),
    rules: [[LEY, 'Quien trabaja en horario nocturno (22:00 a 06:00) no puede percibir menos que la RMV más una sobretasa del 35 % (D.S. 007-2002-TR, art. 8).'], [LEY, 'Día de descanso trabajado sin sustitución: labor más sobretasa del 100 % (D.Leg. 713).']],
    mirada: {
      ve: 'Los errores de planilla casi nunca son de cálculo: son de información. El contador no sabía quién trabaja de noche ni qué domingos eran días libres. Esa información vive en RR.HH.',
      visual: { tipo: 'rango', titulo: 'Remuneración mensual en el turno de noche (S/)', min: 1000, max: 2000, banda: [1660.5, 2000], marcas: [['Sonia', 1230], ['Teófilo', 1450], ['Mínimo nocturno', 1660.5]] },
      normas: [{ ley: 'D.S. 007-2002-TR, TUO de la Ley de Jornada de Trabajo, art. 8', dice: 'Se considera horario nocturno el comprendido entre las 22:00 y las 06:00. El trabajador que labora en ese horario no puede percibir una remuneración inferior a la mínima vigente con una sobretasa del 35 %.', practica: 'Con la RMV de S/ 1,230, el piso para el turno de noche es S/ 1,660.50 al mes.' }],
    },
  },
  {
    id: 'p3', t: '10:00', ch: 'llamada', who: 'contador', titulo: 'La llamada con Iván', banner: 'assets/foto/llamada.webp', show: ['confianza', 'cumplimiento', 'calidad'],
    body: (n, F) => `<p>Llamas a Iván. Escucha en silencio y luego responde, tenso: ${F.has('horas_a_ivan') ? '«Tiene razón en lo de la noche: puse el mínimo general. Lo de las horas… usted sí me las mandó, debí cruzarlas».' : '«Con todo respeto: yo pago con lo que me dan. Usted nunca me mandó quién trabaja de noche ni qué domingos eran libres».'}</p><p>«Si quiere que reprocese, <mark class="clave">los pagos salen el lunes y no hoy</mark>. Verónica se va a molestar.»</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Exigirle que lo corrija hoy mismo y avisarle que Verónica evaluará si sigue con el hotel.',
        res: { q: 'aceptable', fx: { cumplimiento: 4, confianza: -2 }, rel: { contador: -1 }, flags: ['planilla_corregida', 'ivan_amenazado'], cartera: { preplanilla: 'Reprocesada bajo presión' },
          out: 'Iván reprocesa en dos horas, sin decir una palabra más. A partir de hoy, todo lo que te escriba vendrá con copia a Verónica.',
          pro: { ok: 'La planilla sale corregida.', risk: 'Si parte del error vino de la información que no le diste, la amenaza es injusta, y un proveedor a la defensiva esconde los errores en vez de avisarlos.' },
          kusi: ['pensando', 'Corregido… pero ¿a qué costo?'] } },
      { id: 'b', label: 'Asumir la parte que te toca, pedirle que reprocese aunque el pago salga el lunes, y acordar un calendario de cierre con fecha de corte y lista de control.',
        res: { q: 'buena', fx: { cumplimiento: 5, confianza: 3, calidad: 3, tiempo: -2 }, rel: { contador: 1 }, flags: ['planilla_corregida', 'calendario_cierre'], cartera: { preplanilla: 'Reprocesada; pago el lunes', control: 'Calendario de cierre acordado' },
          out: 'Iván suelta el aire: «Gracias por no echarme toda la culpa». Le avisas tú misma a Verónica que el pago sale el lunes y por qué. Ella responde: «Mejor tarde que mal».',
          pro: { ok: 'Corriges el error, reconoces tu parte y conviertes el problema en un sistema.', risk: 'Pagar el lunes y no hoy incomoda: avisa al personal antes de que pregunte.', info: 'Un proveedor que se siente tratado con justicia te avisa de los errores antes de que los encuentres.' },
          kusi: ['celebra', '¡Controlar no es pelear!'] } },
      { id: 'c', label: 'Pagar así hoy para no retrasar a nadie, y regularizar la diferencia el próximo mes.',
        res: { q: 'riesgosa', fx: { cumplimiento: -4, personas: -3, tiempo: 2 }, flags: ['reintegro_postergado'], cartera: { preplanilla: 'Pagada con errores' },
          out: 'Los pagos salen a tiempo. Teófilo y Sonia cobrarán este mes por debajo del mínimo nocturno, y Fortunata, sus domingos como días comunes.',
          pro: { ok: 'Nadie cobra tarde.', risk: 'Pagar a sabiendas por debajo del mínimo no es un retraso administrativo: es un incumplimiento.' },
          kusi: ['triste', 'A tiempo… pero mal.'] } },
    ],
    rules: [[BP, 'Con un proveedor de planilla, acuerda una fecha de corte, los insumos que entrega RR.HH. y una revisión antes de cada pago.']],
    mirada: {
      ve: 'Iván no es «el malo»: es un proveedor que trabaja con la información que recibe. Controlarlo bien es corregir el error, separar lo que fue suyo de lo que fue tuyo y dejar un sistema para que no se repita.',
      visual: { tipo: 'flujo', titulo: 'Cómo controlar a un proveedor de planilla', pasos: ['Datos de RR.HH. a tiempo', 'Pre-planilla', 'Revisión de riesgos', 'Corrección', 'Pago y PLAME'], aqui: 2 },
    },
  },
  {
    id: 'p4', t: '11:55', ch: 'presencial', who: 'chef', titulo: 'El corte', banner: 'assets/foto2/tension.webp', lugar: 'Cocina, en pleno almuerzo', show: ['personas', 'etica', 'cumplimiento'],
    body: (n, F) => `<p>Kevin está sentado en un balde volteado, con la mano envuelta en un mandil manchado. Se cortó picando cebolla con un cuchillo que resbaló en la tabla mojada. El chef está pálido.${F.has('kevin_doble') ? ' «Ayer se quedó hasta tarde preparando lo del sábado», murmura.' : ''}</p><p>${F.has('chef_informal') && !F.has('kevin_regularizado') ? '<mark class="clave">Kevin sigue sin contrato, sin alta y sin seguro</mark>. Te mira asustado: «No quiero causar problemas».' : '<mark class="clave">Kevin tiene alta y seguro</mark>, pero el corte es profundo y sangra a través de la tela.'}</p>`,
    type: 'choice', dilema: true,
    choices: [
      { id: 'a', label: 'Curarlo con el botiquín y que vuelva a su puesto: es un corte y hay almuerzo para 80.',
        res: { q: 'riesgosa', fx: { personas: -4, cumplimiento: -3, tiempo: 2 }, rel: { chef: 0 }, flags: ['accidente_minimizado'], cartera: { cocina: 'Corte vendado; Kevin sigue trabajando' },
          out: 'Le pones gasa y esparadrapo. Kevin vuelve a la tabla con la mano rígida. A las dos, la gasa ya está roja.',
          pro: { ok: 'El almuerzo sale.', risk: 'Un corte profundo sin atención médica puede infectarse o necesitar puntos. Y un accidente sin registrar no existe para nadie.' },
          kusi: ['preocupado', '¡Esa gasa no va a aguantar!'] } },
      { id: 'b', label: 'Llevarlo de inmediato a emergencias, que el hotel asuma lo que haga falta, y registrar el accidente tal como pasó.',
        res: { q: 'buena', fx: { personas: 5, etica: 4, cumplimiento: 4, tiempo: -3 }, rel: { chef: 1 }, flags: ['accidente_atendido'], cartera: { cocina: 'Kevin atendido; accidente registrado; revisar estación de corte' },
          out: 'Tomas un taxi con Kevin a emergencias. Le ponen cinco puntos. En la sala de espera, Kevin te dice: «Gracias por no dejarme solo». El chef manda un audio: «Ya pedí tablas antideslizantes».',
          pro: { ok: 'Primero la persona, después el papeleo, y el papeleo con la verdad.', risk: 'Si Kevin no tenía alta, el hotel asumirá los gastos y una posible infracción. Ocultarlo sería peor.', info: 'Después del susto, investiga la causa: la tabla mojada, el cuchillo sin filo o el cansancio.' },
          kusi: ['animo', 'Cinco puntos y nadie solo.'] } },
      { id: 'c', label: 'Mandarlo en taxi a una posta y pedirle que diga que se cortó en su casa, para no complicar al hotel.',
        res: { q: 'riesgosa', fx: { etica: -7, cumplimiento: -5, personas: -3 }, rel: { chef: 0 }, flags: ['accidente_ocultado'], cartera: { cocina: 'Accidente ocultado' },
          out: 'Kevin asiente sin mirarte. En el taxi, le escribe a su mamá: «Me corté en el trabajo, pero dicen que diga que fue en la casa».',
          pro: { ok: 'Ninguno.', risk: 'Ocultar un accidente de trabajo deja a Kevin sin protección y convierte un accidente en una falta ética que alguien recordará.' },
          kusi: ['indignado', '¡Eso no, nunca!'] } },
    ],
    rules: [[BP, 'Ante un accidente: primero la atención médica, luego el registro con los hechos reales y la investigación de la causa.']],
    mirada: {
      ve: 'Un accidente pone a prueba todo lo que se decidió antes: si la persona tiene alta, si el turno era razonable, si las herramientas estaban bien. Lo que haces en los primeros diez minutos dice más del hotel que cualquier política.',
      visual: { tipo: 'linea', titulo: 'Los primeros minutos', hitos: [['Minuto 0', 'Detener el sangrado'], ['Minuto 5', 'Atención médica'], ['Mismo día', 'Registrar el accidente'], ['Esta semana', 'Investigar la causa']] },
    },
  },
  {
    id: 'p5', t: '15:00', ch: 'documento', who: null, titulo: 'El control de planilla', banner: 'assets/esc/escritorio.webp', lugar: 'Oficina de RR.HH., de vuelta de emergencias', show: ['calidad', 'cumplimiento', 'tiempo'],
    body: (n, F) => `<p>Vuelves al hotel con la ropa todavía oliendo a hospital. ${F.has('calendario_cierre') ? 'Iván te mandó un borrador de calendario de cierre.' : F.has('ivan_amenazado') ? 'Iván te escribió con copia a Verónica: «Quedo a la espera de sus indicaciones por escrito».' : 'Iván no ha vuelto a escribir.'}</p><p>Hoy funcionó porque revisaste. <mark class="clave">El mes que viene tiene que funcionar aunque estés de vacaciones</mark>.</p>`,
    type: 'builder', prompt: 'Arma el control de planilla para los próximos meses.', boton: 'Guardar el control',
    bloques: [
      { id: 'calendario', t: 'Calendario', n: 1, ops: [
        { id: 'c1', t: 'Día 20: RR.HH. envía novedades. Día 24: Iván envía la pre-planilla. Día 25: RR.HH. da conformidad. Día 27: pago.', ok: true, por: 'Fechas fijas para cada uno.' },
        { id: 'c2', t: 'Iván envía la planilla cuando pueda y RR.HH. la revisa si tiene tiempo.', ok: false, por: 'Sin fechas, se repite lo de hoy.' },
      ] },
      { id: 'insumos', t: 'Lo que RR.HH. envía cada mes', n: 2, ops: [
        { id: 'i1', t: 'Ingresos y ceses del mes, con fecha y modalidad de contrato.', ok: true, por: 'Altas y bajas al día.' },
        { id: 'i2', t: 'Horas extra autorizadas, días libres trabajados y quién trabaja de noche.', ok: true, por: 'Justo lo que faltó hoy.' },
        { id: 'i3', t: 'Las fotos del cuadro de turnos del corcho.', ok: false, por: 'Una foto no se cruza con la planilla.' },
      ] },
      { id: 'revision', t: 'Revisión antes del pago', n: 1, ops: [
        { id: 'r1', t: 'Controles fijos: nocturnos contra el mínimo, sobretasas y altas nuevas.', ok: true, por: 'Los de más riesgo, siempre.' },
        { id: 'r2', t: 'Revisar al azar diez filas.', ok: false, por: 'El azar no busca donde está el riesgo.' },
      ] },
      { id: 'responsable', t: 'Si RR.HH. no está', n: 1, ops: [
        { id: 'q1', t: 'Verónica da la conformidad con la misma lista de control.', ok: true, por: 'El control no depende de una sola persona.' },
        { id: 'q2', t: 'Iván paga sin conformidad.', ok: false, por: 'Vuelve a quedar solo con su información.' },
      ] },
    ],
    res: (buenos, total) => {
      const k = buenos / total, q = k >= .85 ? 'buena' : k >= .6 ? 'aceptable' : 'riesgosa';
      return {
        q, fx: { calidad: q === 'buena' ? 6 : q === 'aceptable' ? 2 : -3, cumplimiento: q === 'riesgosa' ? -2 : 3 },
        flags: q === 'riesgosa' ? [] : ['control_planilla'], cartera: { control: q === 'riesgosa' ? 'Control con huecos' : 'Control de planilla en una hoja' },
        out: q === 'buena' ? 'El control cabe en una hoja: fechas, insumos, controles y un reemplazo. Se lo mandas a Iván y a Verónica.' : q === 'aceptable' ? 'El control ayuda, aunque deja un hueco que alguien encontrará el próximo mes.' : 'El control se ve bien, pero depende demasiado de la suerte.',
        pro: { ok: 'Un buen control convierte la revisión de hoy en un hábito que no depende de ti.', risk: 'Si el control vive solo en tu cabeza, se va contigo de vacaciones.', info: 'Revisa el control con Iván: él sabe qué datos le faltan cada mes.' },
        kusi: [q === 'buena' ? 'celebra' : 'pensando', q === 'buena' ? '¡Una hoja que protege a 150 personas!' : '¿Y si no estás tú?'],
      };
    },
    rules: [[BP, 'El control de planilla define fechas, insumos, controles fijos y un responsable alterno.']],
    mirada: {
      ve: 'El control de planilla es uno de los entregables de las dos semanas. Sirve para algo simple: que un error de información no llegue a la cuenta de un trabajador.',
      visual: { tipo: 'linea', titulo: 'El ciclo mensual', hitos: [['Día 20', 'Novedades de RR.HH.'], ['Día 24', 'Pre-planilla'], ['Día 25', 'Conformidad'], ['Día 27', 'Pago y boletas']] },
    },
  },
  {
    id: 'p6', t: '16:20', ch: 'whatsapp', who: null, titulo: 'Teófilo', banner: 'assets/foto2/pasillo.webp', show: ['personas', 'confianza'],
    body: (n, F) => `<p>Teófilo Ayma tiene 61 años, es de Paucartambo y lleva nueve años cuadrando la caja del hotel de madrugada. Te escribe antes de entrar a su turno; alguien en recepción ya le contó «que hubo un problema con su sueldo».${F.has('honorarios_planilla') ? ' Yaneth también te preguntó lo mismo esta mañana.' : ''}</p><p>Le respondes por WhatsApp. <mark class="clave">Es la primera vez que alguien le habla de su pago nocturno</mark>.</p>`,
    chat: ['Señorita, buenas tardes. Me dicen que hay un problema con mi sueldo. ¿Me van a descontar algo? 😟'],
    type: 'compose', enviaA: 'teofilo', para: 'Para: Teófilo Ayma · Auditor nocturno', boton: 'Enviar el WhatsApp',
    prompt: 'Arma tu respuesta eligiendo una frase de cada parte.',
    slots: [
      { id: 'tranquilo', t: 'Lo primero', ops: [
        { id: 't1', t: 'Don Teófilo, no le vamos a descontar nada. Al contrario: encontramos que le estábamos pagando menos de lo que le corresponde.', ok: true, por: 'Responde primero a su miedo.' },
        { id: 't2', t: 'Don Teófilo, hubo un error en la planilla del contador.', ok: null, por: 'Cierto, pero lo deja igual de asustado y le echa la culpa a otro.' },
      ] },
      { id: 'por', t: 'El porqué', ops: [
        { id: 'p1', t: 'Quien trabaja de 22:00 a 06:00 debe ganar al menos S/ 1,660.50 al mes: el mínimo más 35 %.', ok: true, por: 'Una regla clara y un número que puede verificar.' },
        { id: 'p2', t: 'Es un tema legal complicado, mejor se lo explico otro día.', ok: false, por: 'Él tiene derecho a entender su propio pago.' },
      ] },
      { id: 'cuando', t: 'Qué pasa ahora', ops: [
        { id: 'c1', t: 'Su pago de este mes ya sale corregido, y revisaremos con el contador los meses anteriores. El lunes a las 22:00 paso por recepción y lo vemos juntos.', ok: true, por: 'Fecha, compromiso y presencia.' },
        { id: 'c2', t: 'Más adelante le avisamos.', ok: null, por: 'Sin fecha, la duda sigue.' },
      ] },
    ],
    res: sel => {
      const mal = sel.por === 'p2', buenas = ['t1', 'p1', 'c1'].filter(x => Object.values(sel).includes(x)).length;
      const q = mal ? 'riesgosa' : buenas >= 3 ? 'buena' : 'aceptable';
      return {
        q, fx: { personas: q === 'buena' ? 5 : mal ? -2 : 2, confianza: q === 'buena' ? 3 : 0 },
        flags: q === 'buena' ? ['teofilo_informado'] : ['teofilo_confundido'],
        out: q === 'buena' ? 'Teófilo responde con un audio de un minuto: primero en quechua, para su esposa, y luego en castellano: «Nueve años, señorita. Gracias».' : mal ? 'Teófilo responde: «Ya, señorita». Esa noche le pregunta a Wendy si lo van a despedir.' : 'Teófilo responde: «¿Y entonces cuándo?». Sigue sin saber bien qué pasó.',
        pro: { ok: 'Explicas el error con un número claro y un compromiso con fecha.', risk: 'Un trabajador que no entiende su pago imagina lo peor.', info: 'Los meses anteriores pueden generar un reintegro: confírmalo con Iván antes de prometer un monto.' },
        kusi: [q === 'buena' ? 'celebra' : mal ? 'triste' : 'pensando', q === 'buena' ? '¡Nueve años y por fin alguien le explicó!' : mal ? 'Su pago no es complicado para él.' : 'Le faltó saber cuándo.'],
      };
    },
    rules: [[BP, 'Cuando el error es del empleador, dilo claro, explica la regla y da una fecha.']],
    mirada: { ve: 'Detrás de cada fila de la planilla hay alguien que hace cuentas en su casa. Explicarle a Teófilo su pago con un número y una fecha vale tanto como corregir el Excel.' },
  },
  {
    id: 'p7', t: '18:30', ch: 'correo', who: 'veronica', titulo: 'El viernes, para Verónica', banner: 'assets/foto/revisa.webp', show: ['confianza', 'calidad', 'etica'],
    body: (n, F) => `<p>${F.has('accidente_atendido') ? 'Kevin te escribió desde su casa: le duele, pero está bien.' : F.has('accidente_ocultado') ? 'Kevin no ha vuelto a escribir.' : 'Kevin terminó el turno con la mano hinchada.'} Afuera, la garúa moja las piedras de la calle Plateros.</p><p>Verónica pidió saber qué pasó con Kevin y con la planilla. <mark class="clave">Hoy tienes dos noticias difíciles</mark>.</p>`,
    type: 'choice',
    choices: [
      { id: 'a', label: 'Lo de Kevin tal como fue, los errores de la planilla, lo que ya se corrigió y lo que necesitas que ella decida.',
        res: { q: 'buena', fx: { confianza: 4, etica: 2 }, rel: { veronica: 1 }, responde: 'Verónica: Kevin se cortó con un cuchillo en una tabla mojada; lo atendieron y quedó registrado. El chef ya pidió tablas antideslizantes. En la planilla había pagos nocturnos bajo el mínimo y descansos trabajados mal pagados; se corrigieron antes del pago. Necesito su aprobación para revisar con Iván los meses anteriores del turno de noche.',
          out: 'Verónica responde a las 19:10: «Aprobado. Y gracias por contarme todo, aunque no me guste». Apagas la luz de la oficina; la secadora de la lavandería sigue girando.', kusi: ['feliz', 'Dos malas noticias, contadas bien.'] } },
      { id: 'b', label: 'Solo lo de la planilla: lo de Kevin ya lo sabe por el chef.',
        res: { q: 'aceptable', fx: { confianza: 0 }, responde: 'Verónica: se corrigieron errores en los pagos del turno de noche antes del pago. Mañana le cuento el detalle.',
          out: 'Verónica responde: «¿Y Kevin? Te pregunté por Kevin». Tienes que escribirle otra vez.', kusi: ['pensando', 'Te preguntó por las dos cosas.'] } },
    ],
    mirada: { ve: 'En un día con un accidente y un error de planilla, la gerencia necesita saber qué pasó, qué ya se corrigió y qué tiene que decidir. Las malas noticias, contadas a tiempo y con una salida, construyen confianza.' },
  },
];
