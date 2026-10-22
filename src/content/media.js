/* Recursos audiovisuales y su estado real.
   - status "listo": el recurso existe en el proyecto y funciona.
   - status "sintetica": se escucha con la voz sintética del navegador (Web Speech API). NO es una
     grabación humana y la interfaz lo indica siempre.
   - status "pendiente": guion listo para grabar con una voz humana autorizada. Cuando exista el
     archivo, basta con colocarlo en assets/audio/<id>.mp3 y cambiar status a "grabado"; el
     reproductor lo usará en lugar de la voz sintética. */
export const media = {
  /* Videos animados generados con `npm run video` (scripts/video/): sin voz ni música, con texto en
     pantalla y subtítulos WebVTT (guardados como .txt). Los guiones viven en scripts/video/videos/. */
  video: [
    { id: "bienvenida", n: "Bienvenida a VÍVELO RH", mins: "0:40", status: "listo", related: ["#viaje", "#mapa"],
      d: "Kusi presenta la plataforma: jornadas, razonamiento profesional, especialidades y el enfoque peruano." },
    { id: "familias", n: "Las cinco familias de Recursos Humanos", mins: "0:46", status: "listo", related: ["#mapa", "#cargos"],
      d: "Atraer, administrar, desarrollar, cuidar y decidir con datos: las 26 especialidades agrupadas por propósito." },
    { id: "boleta", n: "Cómo se arma una boleta", mins: "0:46", status: "listo", related: ["#concepto.planilla", "#tool.boleta", "#sim.planillas"],
      d: "Del básico de S/ 1,500 al neto de S/ 1,456.14: asignación familiar, valor hora, horas extras, ONP y EsSalud." },
    { id: "feriados", n: "Trabajar un feriado: cuánto se paga", mins: "0:36", status: "listo", related: ["#concepto.feriados", "#sim.feriados"],
      d: "Los 16 feriados de 2026, el descanso sustitutorio y por qué se dice que se paga «triple», con la RMV de S/ 1,230." },
    { id: "concurso", n: "Un concurso CAS, paso a paso", mins: "0:41", status: "listo", related: ["#concepto.concurso", "#sim.concursocas", "#sectores"],
      d: "Del requerimiento al contrato, con las bonificaciones de ley de 15% y 10% sobre el puntaje final." },
    { id: "hostigamiento", n: "Ante una queja de hostigamiento sexual", mins: "0:41", status: "listo", related: ["#concepto.hostigamiento", "#sim.municipal"],
      d: "Escuchar, proteger, derivar e investigar con reserva y sin revictimizar (Ley 27942 y D.S. 014-2019-MIMP)." }
  ].map(v => ({ ...v, src: `assets/video/${v.id}.mp4`, webm: `assets/video/${v.id}.webm`, poster: `assets/video/${v.id}-poster.jpg`, posterWebp: `assets/video/${v.id}-poster.webp`, vtt: `assets/video/${v.id}-subtitulos.txt` })),
  capsules: [
    { id: "boleta", n: "Cómo se arma una boleta", d: "De la remuneración básica al neto, paso a paso.", steps: [
      { k: "Ingresos", t: "Primero se suman todos los ingresos remunerativos: básico, asignación familiar (10% de la RMV) y horas extras.", big: "S/ 1,500 + 123 + 50.72" },
      { k: "Valor hora", t: "Las horas extras se calculan sobre el valor hora de la remuneración ordinaria: (básico + asignación familiar) ÷ 30 ÷ 8.", big: "1,623 ÷ 240 = 6.7625" },
      { k: "Sobretasa", t: "Las dos primeras horas diarias llevan 25% y las siguientes 35%. Seis horas en tres días, todas al 25%.", big: "6.7625 × 1.25 × 6 = 50.72" },
      { k: "Descuentos", t: "Del total de ingresos se descuenta el sistema pensionario del trabajador: ONP 13%.", big: "1,673.72 × 13% = 217.58" },
      { k: "Neto", t: "Lo que recibe el trabajador es el total menos sus descuentos.", big: "S/ 1,456.14" },
      { k: "Aporte", t: "Aparte, el empleador paga EsSalud (9%). No sale del bolsillo del trabajador.", big: "EsSalud: S/ 150.63" }] },
    { id: "hostigamiento", n: "Queja de hostigamiento: las primeras 72 horas", d: "Lo que RR.HH. debe hacer y lo que nunca debe hacer.", steps: [
      { k: "Día 0", t: "Recibir la queja, escuchar sin juzgar e informar derechos. No se exigen formalidades excesivas.", big: "Escuchar" },
      { k: "≤ 3 días hábiles", t: "Dictar medidas de protección: alejar al presunto hostigador, impedir la comunicación. A la víctima solo se la rota si lo pide.", big: "Proteger" },
      { k: "Derivar", t: "En el privado, al Comité de intervención; en el público, a la Secretaría Técnica del PAD.", big: "Derivar" },
      { k: "Reserva", t: "El expediente es reservado. Nada de «hablar informalmente» con el denunciado ni de mediar.", big: "Reserva" }] },
    { id: "concurso", n: "La ruta de un concurso CAS", d: "Por qué en el Estado no se puede contratar «rápido».", steps: [
      { k: "Perfil", t: "El área usuaria presenta el requerimiento con el perfil del puesto.", big: "1" },
      { k: "Presupuesto", t: "Sin certificación presupuestal y registro en el AIRHSP no se convoca.", big: "2" },
      { k: "Bases", t: "Se aprueban bases y cronograma: requisitos, puntajes, bonificaciones de ley.", big: "3" },
      { k: "Publicidad", t: "Convocatoria pública en Talento Perú y el portal institucional.", big: "4" },
      { k: "Evaluación", t: "Evaluación curricular y entrevista; bonificaciones (15% discapacidad, 10% licenciados FF.AA.).", big: "5" },
      { k: "Resultados", t: "Resultados publicados y suscripción del contrato.", big: "6" }] }
  ],
  audio: [
    { id: "intro", n: "Bienvenida de Kusi", status: "sintetica", file: null },
    { id: "tour", n: "Recorrido por la plataforma", status: "sintetica", file: null },
    { id: "capsulas", n: "Narración de las cápsulas animadas", status: "sintetica", file: null },
    { id: "razonamiento", n: "«Cómo lo razona una profesional» (todas las simulaciones)", status: "sintetica", file: null },
    { id: "voz-humana", n: "Grabación con voz humana de los guiones anteriores", status: "pendiente", file: null,
      d: "Los guiones están en src/content/media.js y en las propias simulaciones. Falta una locutora o locutor que los grabe con autorización de uso." }
  ],
  scripts: {
    intro: "¡Hola! Soy Kusi, una alpaca bebé. En quechua, «kusi» quiere decir alegre. Las alpacas vivimos en grupo, nos cuidamos entre todas y nos comunicamos con calma: por eso me gusta Recursos Humanos. En VÍVELO RH vas a vivir el trabajo antes de elegirlo: vas a recibir correos, mensajes y urgencias de puestos reales, vas a decidir, a equivocarte sin riesgo, y vas a ver cómo lo razonaría una profesional con experiencia. Mientras tanto, tu brújula irá registrando qué te entusiasma y qué te desgasta.",
    tour: "Te cuento rápido dónde está cada cosa. En Jornadas vives un día, una semana o un caso urgente en un puesto. En el Mapa exploras las especialidades y cómo se conectan. En Cargos ves qué hace cada puesto, de practicante a jefatura. La Academia explica cada concepto en dos niveles, sencillo y profesional. En el Taller haces tareas reales con datos ficticios. Retos tiene cuestionarios para practicar. Público y privado compara dos mundos que no funcionan igual. Y en tu Brújula ves lo que has descubierto. Yo voy a estar por aquí, pero puedes silenciarme cuando quieras."
  }
};
