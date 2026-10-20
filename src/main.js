/* VÍVELO RH · punto de entrada. */
import { init } from "./core/store.js";
import { start } from "./core/router.js";
import { mountShell } from "./views/shell.js";
import { mountGuide } from "./views/guide.js";
import { C } from "./content/index.js";
import { registerFile } from "./core/narrator.js";
import { initMotion, scan } from "./core/motion.js";
import { on } from "./core/bus.js";
import "./views/home.js";
import "./views/journey.js";
import "./views/sims.js";
import "./views/map.js";
import "./views/roles.js";
import "./views/academy.js";
import "./views/workshop.js";
import "./views/sectors.js";
import "./views/compass.js";
import "./views/challenges.js";
import "./views/media.js";
import "./views/info.js";

init();
// Grabaciones humanas: si existen, el narrador las usa en lugar de la voz sintética.
C.media.audio.filter(a => a.status === "grabado" && a.file).forEach(a => registerFile(a.id, a.file));
mountShell();
initMotion();
on("route", () => scan(document.getElementById("view")));
mountGuide();
start();
document.documentElement.classList.add("ready");
