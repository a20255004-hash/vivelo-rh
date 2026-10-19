/* Contenido migrado desde la versión original (legacy/index-original.html) y ampliado. */
export default {
 id:"relaciones", kind:"dia", scene:"planta", orgType:"gra", level:"intermedio", title:"Un día como Analista de Relaciones Laborales", role:"analista-relaciones",
 areas:["relaciones","laboral","sst","nomina"], sector:"privado", size:"Gran empresa · 620 trabajadores", place:"Ilo, Moquegua", mins:26,
 hook:"Un operario llega con aliento a alcohol a la línea de cocción, 30 trabajadores reclaman horas extras y el sindicato amenaza con paralizar.",
 org:"<b>Conservas Litoral Sur S.A.</b> (ficticia) procesa y enlata pescado en una planta en Ilo. 620 trabajadores en tres turnos; 240 afiliados al sindicato de trabajadores, con convenio colectivo vigente. Tiene Comité de SST y Reglamento Interno de Trabajo.",
 you:"Eres analista de relaciones laborales. Investigas faltas, preparas cartas, atiendes reclamos, acompañas negociaciones y respondes ante SUNAFIL. Reportas a la jefa de relaciones laborales.",
 goal:"Resolver los conflictos del día con apego a la ley y sin quemar la relación con el sindicato.",
 limits:["Toda medida disciplinaria debe seguir el procedimiento del TUO del D.Leg. 728 y del Reglamento Interno.","El convenio colectivo vigente establece reuniones de la comisión paritaria con 48 horas de aviso.","La planta no puede detenerse: hay 40 toneladas de materia prima en cámara."],
 people:[{av:{g:"f",s:2,h:"melena",hc:2,c:8},n:"Lic. Andrea Salinas",r:"Jefa de Relaciones Laborales",d:"Pragmática; odia las sorpresas."},{av:{g:"m",s:3,h:"calvo",hc:1,c:"#5E6B7A",acc:"casco"},n:"Ing. Óscar Benítez",r:"Gerente de Planta",d:"Quiere soluciones inmediatas."},{av:{g:"m",s:5,h:"corto",hc:0,c:6,b:true,age:"mayor"},n:"Sr. Félix Choque",r:"Secretario General del Sindicato",d:"Duro pero de palabra."},{av:{g:"m",s:4,h:"corto",hc:0,c:4,acc:"casco"},n:"Supervisores de línea",r:"Primera línea",d:"Datos ficticios."}],
 nodes:[
 {id:"r1", t:"07:20", ch:"llamada", guide:{mood:"sorpresa", say:"7:20 a.m. y ya hay un caso disciplinario. Seguridad primero, pruebas después, decisiones al final."}, from:"Supervisor del turno noche", title:"«Huamán llegó mareado»",
  body:"<blockquote>Huamán, de la línea de cocción, llegó a las 6:50 con olor a trago, caminando raro. Lo saqué de la línea. Está en el comedor. ¿Qué hago? El gerente dice que lo bote ya.</blockquote>",
  ask:{prompt:"¿Qué revisas?", max:2, opts:[
   {id:"h1", label:"La causal en el TUO del D.Leg. 728", info:"El art. 25 considera falta grave la concurrencia reiterada en estado de embriaguez o bajo influencia de drogas, y también una sola vez si, por la naturaleza de la función, reviste excepcional gravedad. La negativa a someterse a la prueba se considera reconocimiento del estado. La autoridad policial presta su concurso para la verificación."},
   {id:"h2", label:"Antecedentes de Huamán", info:"8 años en la empresa. Una amonestación escrita hace dos años por llegar en ese estado. Ninguna otra sanción."},
   {id:"h3", label:"El Reglamento Interno", info:"El RIT prohíbe ingresar a la planta bajo efectos del alcohol y establece la prueba de alcoholemia con participación policial o de un laboratorio autorizado."}
  ]},
  choices:[
   {id:"a", label:"Ordenar que se vaya a su casa y avisarle que está despedido.", fx:{cumplimiento:-16,personas:-6,confianza:4}, sig:{pre:1}, q:"riesgosa", set:["despidoverbal"], tags:[],
    out:"Huamán se va. El sindicato tiene el caso a las 9:00: «despido verbal sin procedimiento». Ahora la empresa no tiene prueba del estado y sí tiene un problema.",
    pro:"Un despido sin carta de preaviso ni oportunidad de descargo puede ser declarado arbitrario o incluso dar lugar a reposición. Sin prueba, la causa justa no se puede demostrar."},
   {id:"b", label:"Mantenerlo fuera de la línea por seguridad, solicitar la prueba de alcoholemia según el RIT (con apoyo policial), registrar testigos y redactar un acta de los hechos con hora y lugar.", fx:{cumplimiento:14,calidad:10,agenda:-8}, sig:{nor:3,pro:2,res:2}, set:["pruebas"], q:"buena", tags:["investigar","documentos","normativa"],
    out:"La prueba confirma alcohol en sangre. Hay acta firmada por el supervisor y dos testigos. Huamán, ya más tranquilo, firma la constancia de la prueba.",
    pro:"Lo primero es la seguridad (una persona ebria en una línea de cocción es un riesgo). Lo segundo es la prueba: la causal exige acreditar el estado, y la negativa a la prueba tiene efectos. Sin acta ni prueba no hay caso."},
   {id:"c", label:"Dejar que se quede en el comedor hasta que se le pase y que regrese a la línea a media mañana.", fx:{cumplimiento:-10,calidad:-6}, sig:{per:1}, q:"riesgosa", tags:[],
    out:"Huamán vuelve a la línea a las 10:30. Se quema el antebrazo con una válvula de vapor. Ahora hay además un accidente de trabajo que investigar.",
    pro:"La tolerancia mal entendida traslada el riesgo a la integridad física. La obligación de prevención de la Ley 29783 está por encima de la comodidad del momento."}
  ]},
 {id:"r2", t:"09:00", ch:"presencial", from:"Delegación de 6 trabajadores del turno noche", title:"«No nos pagaron las horas extras»",
  body:"<p>Treinta trabajadores del turno noche reclaman que en setiembre hicieron turnos de 10 horas durante la temporada de anchoveta y la boleta no muestra sobretiempo. El supervisor dice que «se les va a compensar con días libres».</p>",
  ask:{prompt:"Antes de responder puedes revisar:", max:3, opts:[
   {id:"o1", label:"Registro de control de asistencia", info:"El registro confirma: en promedio 12 días con 2 horas adicionales por trabajador en setiembre."},
   {id:"o2", label:"Acuerdos de compensación con descanso", info:"No hay acuerdos firmados. El supervisor lo «conversó» con algunos."},
   {id:"o3", label:"La norma de sobretiempo", info:"D.S. 007-2002-TR: el sobretiempo es voluntario y se paga con sobretasa mínima de 25% sobre el valor hora en las dos primeras horas y 35% en las siguientes. Puede compensarse con descanso solo si hay acuerdo entre las partes."}
  ]},
  choices:[
   {id:"a", label:"Reconocer el pago de las horas registradas con su sobretasa en la planilla de octubre, explicar el cálculo a la delegación y corregir el procedimiento con los supervisores.", fx:{cumplimiento:14,personas:12,confianza:4,agenda:-6}, sig:{nor:2,per:2,res:2}, set:["heok"], q:"buena", tags:["normativa","calcular","mediar"],
    out:"La delegación se va satisfecha. Andrea te pide un memo para supervisores: «nadie compensa con descanso sin acuerdo escrito»."},
   {id:"b", label:"Sostener que se compensará con días libres, como dijo el supervisor.", fx:{cumplimiento:-12,personas:-12}, sig:{}, q:"riesgosa", set:["heno"], tags:[],
    out:"Sin acuerdo escrito, la compensación no tiene sustento. El caso llega al sindicato y luego a SUNAFIL."},
   {id:"c", label:"Decirles que lo vas a revisar y responder en dos semanas.", fx:{personas:-6,cumplimiento:-2}, sig:{pro:1}, q:"aceptable", tags:["planificar"],
    out:"La delegación se va molesta. Con los registros a la mano, la respuesta pudo ser hoy."}
  ],
  pro:"El sobretiempo es voluntario y se paga con sobretasa; la compensación con descanso requiere acuerdo. Cuando el registro confirma el reclamo, alargar la respuesta solo eleva el conflicto."},
 {id:"r3", t:"10:30", ch:"sistema", from:"Calculadora de planilla", title:"¿Cuánto le corresponde a uno?",
  body:"<p>Para el memo, calcula el sobretiempo de un trabajador con remuneración mensual de <b>S/ 1,800</b> que hizo <b>2 horas extra en 12 días</b> (24 horas en total, nunca más de 2 al día). Valor hora = remuneración ÷ 30 ÷ 8.</p>",
  choices:[
   {id:"a", label:"S/ 180.00", fx:{calidad:-6}, sig:{dat:1}, q:"riesgosa", tags:["calcular"], out:"Ese es el valor de 24 horas simples (7.50 × 24) sin sobretasa.", pro:"La sobretasa se suma al valor hora: 7.50 × 1.25 = 9.375 por hora."},
   {id:"b", label:"S/ 225.00", fx:{calidad:10,cumplimiento:4}, sig:{dat:2}, q:"buena", tags:["calcular"], out:"Correcto: 1,800 ÷ 30 ÷ 8 = 7.50; con 25% = 9.375; × 24 horas = 225.00.", pro:"Como cada día fueron solo 2 horas, todas llevan la sobretasa del 25%. Si algún día hubiera hecho 3 horas, la tercera iría con 35%."},
   {id:"c", label:"S/ 243.00", fx:{calidad:-4}, sig:{dat:1}, q:"aceptable", tags:["calcular"], out:"Aplicaste 35% a todas las horas. Esa tasa corresponde desde la tercera hora del día.", pro:"25% en las dos primeras horas diarias y 35% en las siguientes."},
   {id:"d", label:"S/ 60.00", fx:{calidad:-8}, sig:{}, q:"riesgosa", tags:["calcular"], out:"Calculaste solo la sobretasa, sin el valor de la hora.", pro:"El pago es la hora completa más la sobretasa."}
  ]},
 {id:"r4", t:"11:30", ch:"presencial", mood:"triste", guide:{mood:"indignado", say:"«Inútil» delante de todos no es «carácter fuerte». Escucha, investiga y protege."}, from:"Operaria de envasado", title:"«El supervisor me grita delante de todos»",
  body:"<p>Una operaria de envasado se presenta llorando: su supervisor la insultó delante del equipo por un error de etiquetado («inútil, por eso estás donde estás»). Dice que no es la primera vez. Dos compañeras estaban presentes.</p>",
  choices:[
   {id:"a", label:"Escucharla, registrar su relato, entrevistar por separado a las testigos y al supervisor, y proponer medidas según lo que resulte (desde una amonestación hasta un plan de liderazgo).", fx:{personas:12,cumplimiento:8,agenda:-8}, sig:{per:3,res:2,pro:1}, q:"buena", tags:["investigar","mediar","entrevistar"],
    out:"Las testigos confirman el insulto. El supervisor reconoce que «se le fue la mano». Se le amonesta por escrito y se le inscribe en el programa de supervisores. La operaria vuelve a la línea más tranquila.",
    pro:"Una investigación interna justa escucha a todas las partes por separado, documenta y decide con evidencia. La medida debe ser proporcional y también formativa: muchos supervisores ascendieron por técnica, no por manejo de personas."},
   {id:"b", label:"Juntarlos a los dos en una reunión para que «se arreglen».", fx:{personas:-8,cumplimiento:-2}, sig:{per:1}, q:"riesgosa", tags:["mediar"],
    out:"Frente a su supervisor, la operaria no se atreve a repetir lo que contó. Él sale reforzado.",
    pro:"Cuando hay una relación de poder desigual, el careo inmediato silencia a la parte más débil. La mediación tiene su lugar, pero después de investigar."},
   {id:"c", label:"Decirle que lo hable con su supervisor directamente.", fx:{personas:-12}, sig:{}, q:"riesgosa", tags:[],
    out:"La operaria no vuelve a quejarse. Un mes después renuncia.",
    pro:"Mandar a la persona a resolverlo con quien la agrede es abandonar la función de relaciones laborales."}
  ]},
 {id:"r5", t:"12:40", ch:"whatsapp", from:"Sr. Félix Choque · Secretario General del Sindicato", title:"«Hoy o paralizamos»",
  body:"<blockquote>Señorita, nos enteramos del caso Huamán y de lo de las horas extras. Queremos reunión HOY con la gerencia. Si no, a las 6 de la tarde las bases deciden paralizar.</blockquote>",
  choices:[
   {id:"a", label:"Coordinar con Andrea una reunión hoy a las 16:00 con agenda escrita (horas extras y garantías del debido procedimiento en el caso Huamán), y levantar acta de acuerdos.", fx:{confianza:8,personas:6,agenda:-8,cumplimiento:4}, sig:{per:2,est:2,res:2}, q:"buena", tags:["negociar","coordinar","redactar"],
    out:"En la reunión, el sindicato acepta el pago de horas extras como solución y pide que Huamán tenga derecho a descargos con asesoría sindical. Se firma un acta. No hay paralización.",
    pro:"Con un sindicato, la palabra cumplida y el acta son el capital de relaciones laborales. Acordar el procedimiento en el caso disciplinario no es ceder: es garantizar lo que la ley ya exige."},
   {id:"b", label:"Responder que el convenio exige 48 horas de aviso y que no habrá reunión hoy.", fx:{confianza:-6,personas:-8}, sig:{nor:2}, q:"aceptable", tags:["normativa"],
    out:"Técnicamente tienes razón. Las bases se reúnen a las 18:00 y acuerdan un plantón en la puerta de la planta mañana.",
    pro:"Tener razón formal no siempre resuelve. Cuando el conflicto escala, una reunión informativa urgente puede evitar costos mayores sin renunciar a ningún derecho."},
   {id:"c", label:"Prometerle que Huamán no será despedido para calmar las aguas.", fx:{confianza:-10,calidad:-6}, sig:{per:1}, q:"riesgosa", tags:["negociar"],
    out:"No tienes autoridad para prometer eso. Cuando la empresa decida, el sindicato dirá que le mentiste.",
    pro:"En una negociación nunca se compromete algo que no se puede cumplir ni que no se tiene autoridad para decidir."}
  ]},
 {id:"r6", t:"14:00", ch:"correo", from:"Para: expediente disciplinario", title:"Redacta la carta de preaviso",
  body:"<p>Andrea te pide el borrador de la carta de imputación de cargos (preaviso de despido) para Huamán, para revisarla con el abogado.</p>",
  type:"write",
  write:{prompt:"Redacta la carta (100 a 300 palabras).", minWords:70,
   rubric:[
    {id:"c1",label:"Describe hechos concretos: fecha, hora, lugar",kw:["\\d{1,2}:\\d{2}|horas|a\\.m\\.|am","de octubre|de 2026|fecha","línea|linea|planta|cocción|coccion"]},
    {id:"c2",label:"Menciona las pruebas (prueba de alcoholemia, acta, testigos)",kw:["alcohol|prueba|acta|testigo"]},
    {id:"c3",label:"Cita la causal legal (art. 25 del TUO del D.Leg. 728)",kw:["art[íi]culo 25|art\\. ?25|728|003-97-TR"]},
    {id:"c4",label:"Otorga plazo no menor de 6 días naturales para descargos",kw:["seis|6"]},
    {id:"c5",label:"Indica que puede presentar descargos por escrito",kw:["descargo"]},
    {id:"c6",label:"Menciona el antecedente (si lo usa) de forma objetiva",kw:["reiterad|anterior|amonestaci"]}],
   model:"<p><b>Ilo, __ de octubre de 2026</b></p><p>Señor ___ Huamán ___<br>Presente.-</p><p><b>Asunto: Imputación de cargos</b></p><p>Por medio de la presente le comunicamos que el día __ de octubre de 2026, a las 06:50 horas, usted se presentó a laborar en la línea de cocción de la planta en estado de ebriedad, conforme consta en el acta suscrita por el supervisor de turno y dos testigos, y en el resultado de la prueba de alcoholemia practicada a las 08:10 horas.</p><p>Dichos hechos configurarían la falta grave prevista en el inciso e) del artículo 25 del TUO del D.Leg. 728, aprobado por D.S. 003-97-TR, considerando además que en ___ de 2024 se le amonestó por escrito por un hecho similar, y la especial peligrosidad de la línea de cocción. Asimismo, contravienen el artículo __ del Reglamento Interno de Trabajo.</p><p>En aplicación del artículo 31 de la misma norma, le otorgamos un plazo de <b>seis (6) días naturales</b> desde la recepción de esta carta para que presente sus descargos por escrito. Durante dicho plazo la empresa podrá exonerarlo de asistir al centro de trabajo, sin afectar su remuneración.</p><p>Atentamente,<br>Recursos Humanos</p>"},
  fxBy:{buena:{cumplimiento:12,calidad:8},aceptable:{cumplimiento:3},riesgosa:{cumplimiento:-10}},
  sig:{nor:2,pro:2}, tags:["redactar","normativa"],
  outBy:{buena:"El abogado solo cambia dos palabras. «Hechos concretos, pruebas, causal y plazo: así no se cae en el juzgado.»",aceptable:"El abogado te devuelve la carta con observaciones: le faltan elementos para que resista una impugnación.",riesgosa:"El abogado es claro: con esta carta el despido se caería por vulnerar el derecho de defensa."},
  pro:"La jurisprudencia ha señalado que las imputaciones genéricas en la carta de preaviso afectan el derecho de defensa del trabajador. Hechos precisos, pruebas, causal, plazo de seis días naturales y derecho a descargo son el mínimo."},
 {id:"r7", t:"15:30", ch:"correo", from:"SUNAFIL · Intendencia Regional", title:"Orden de inspección: jornada y sobretiempo",
  body:"<p>Llega la notificación de una orden de inspección sobre jornada de trabajo y pago de sobretiempo del turno noche. El inspector vendrá el jueves.</p>",
  type:"pick",
  pick:{prompt:"Elige los documentos que debes preparar (marca todos los pertinentes).", min:1, max:8,
   items:[{id:"reg",label:"Registro de control de asistencia de los trabajadores del turno"},{id:"bol",label:"Boletas de pago de setiembre y octubre"},{id:"acu",label:"Acuerdos escritos de compensación con descanso (si existen)"},{id:"rit",label:"Reglamento Interno de Trabajo"},{id:"hor",label:"Horario de trabajo y su difusión"},{id:"cv",label:"CV de los trabajadores"},{id:"eval",label:"Evaluaciones de desempeño del turno"},{id:"acta",label:"Acta de acuerdos con el sindicato sobre el pago"}],
   ideal:["reg","bol","acu","rit","hor","acta"], bad:["cv","eval"],
   explain:{reg:"Prueba central de la jornada real.",bol:"Prueban si se pagó el sobretiempo.",acu:"Si no existen, hay que reconocerlo, no fabricarlos.",rit:"Muestra las reglas internas.",hor:"El horario debe estar establecido y difundido.",cv:"No tienen relación con la materia inspeccionada; entregarlos expone datos personales sin necesidad.",eval:"Irrelevantes para jornada y sobretiempo.",acta:"Muestra la voluntad de subsanar."}},
  fxBy:{buena:{cumplimiento:10,agenda:-4},aceptable:{cumplimiento:3,agenda:-4},riesgosa:{cumplimiento:-6,agenda:-4}},
  sig:{pro:2,nor:2}, tags:["documentos","normativa"],
  outBy:{buena:"Preparas un expediente ordenado y limitado a la materia. Si la empresa ya pagó o programó el pago, puede acreditar la subsanación.",aceptable:"Te falta algún documento clave o incluiste cosas que no se pidieron.",riesgosa:"Preparaste documentos irrelevantes y olvidaste los centrales."},
  pro:"Ante SUNAFIL se entrega lo pertinente, ordenado y verdadero. Nunca se fabrican documentos: eso convierte una infracción subsanable en un problema mucho mayor."},
 {id:"r8", t:"17:00", ch:"presencial", from:"Ing. Óscar Benítez · Gerente de Planta", title:"«Que se vaya hoy mismo»",
  body:"<blockquote>¿Por qué Huamán sigue en planilla? Fue flagrante, todos lo vieron. Despídanlo hoy y punto.</blockquote>",
  choices:[
   {id:"a", label:"Explicarle que la excepción de «falta flagrante» se interpreta de forma restrictiva, que ya se le imputaron cargos y que en seis días la empresa podrá decidir con un despido sólido, mientras Huamán está exonerado de asistir.", fx:{cumplimiento:10,confianza:4}, sig:{nor:2,per:2,est:1}, q:"buena", tags:["normativa","negociar"],
    out:"El gerente acepta: «Que no vuelva a la línea mientras tanto». Es justo lo que prevé el procedimiento.",
    pro:"La ley permite omitir el plazo de descargo solo ante falta grave flagrante en que no resulte razonable esa posibilidad, y los tribunales la aplican de forma estricta. Seguir el procedimiento cuesta seis días; saltárselo puede costar una reposición."},
   {id:"b", label:"Despedirlo hoy por falta flagrante, como pide el gerente.", fx:{cumplimiento:-14,confianza:6}, sig:{pre:1}, q:"riesgosa", tags:[],
    out:"El caso se judicializa. El sindicato tiene el acta de la reunión donde la empresa se comprometió a respetar los descargos.",
    pro:"Un compromiso en acta más un procedimiento omitido es la combinación perfecta para perder un juicio laboral."}
  ]}
 ]
};
