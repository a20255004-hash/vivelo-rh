/* El viaje guiado: una invitación, no un tutorial obligatorio. Cada estación se puede saltar. */
export const journey = {
  stations: [
    { id: "familias", n: "Las cinco familias de RR.HH.", d: "Recursos Humanos no es un solo trabajo. Elige la familia que hoy te despierta más curiosidad.", coco: "curioso",
      say: "Antes de entrar a una oficina, miremos el mapa. ¿Qué te llama más: atraer personas, administrar y cumplir, desarrollarlas, cuidarlas o pensar con datos y estrategia?" },
    { id: "puesto", n: "Pruébate un fotocheck", d: "Mira tres puestos reales de esa familia, de la entrada a la jefatura, y quédate con uno.", coco: "feliz",
      say: "Cada puesto tiene su lado bonito y su lado B. Elige uno para conocerlo de cerca." },
    { id: "primera", n: "Tu primera mañana", d: "Una experiencia corta (≈ 14 minutos) como practicante: tareas, un legajo con errores y un «favorcito» que no deberías hacer.", coco: "animo", sim: "practicante",
      say: "Ahora sí: a trabajar. Te prometo que equivocarse aquí no cuesta nada… y enseña muchísimo." },
    { id: "camino", n: "Elige tu camino", d: "Explora áreas, vive una jornada completa, resuelve un caso urgente, practica en el taller o descubre otra especialidad.", coco: "pensando",
      say: "Desde aquí el viaje es tuyo. Te sugiero algo según lo que elegiste, pero puedes ir a donde quieras." },
    { id: "brujula", n: "Tu primera brújula", d: "Registra qué te atrae hoy y mira cómo se compara con lo que vas experimentando.", coco: "celebra",
      say: "¡Llegaste! Tu brújula no decide por ti: te muestra lo que viviste, lo que dices que te gusta y lo que aún no conoces." }
  ],
  paths: [
    { id: "explorar", n: "Explorar áreas", d: "El mapa interactivo de especialidades y sus conexiones.", h: "#mapa", ic: "mapa", scene: "viaje" },
    { id: "jornada", n: "Vivir una jornada", d: "Un día completo en un puesto de tu familia elegida.", h: "jornada", ic: "sims", scene: "oficina" },
    { id: "urgente", n: "Resolver un caso urgente", d: "Algo que no puede esperar: un video de maltrato o un error en un concurso público.", h: "#sim.discriminacion", ic: "warn", scene: "agro" },
    { id: "taller", n: "Hacer un taller", d: "Calcular una boleta, auditar un legajo, leer una encuesta de clima.", h: "#taller", ic: "taller", scene: "taller" },
    { id: "otra", n: "Descubrir otra especialidad", d: "Una familia distinta a la que elegiste, por si te sorprende.", h: "otra", ic: "sparkle", scene: "reunion" }
  ],
  famSim: { atraer: "seleccion", admin: "planillas", desarrollar: "capacitacion", cuidar: "semana", estrategia: "hrbp" }
};
