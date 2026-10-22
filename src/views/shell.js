/* Armazón: menú flotante (escritorio), dock inferior (móvil), pie y preferencias de tema. */
import { $, $$, esc } from "../core/util.js";
import { S, save } from "../core/store.js";
import { playBrand } from "../core/sound.js";
import { onBeforeRender } from "../core/router.js";
import { lockup, SLOGAN, DESCRIPTOR } from "../brand/logo.js";
import { icon } from "../brand/icons.js";
import { VERIFIED } from "../content/index.js";

export const NAV = [
  { id: "inicio", n: "Inicio", ic: "inicio" },
  { id: "viaje", n: "Viaje", ic: "viaje" },
  { id: "sims", n: "Jornadas", ic: "sims" },
  { id: "mapa", n: "Mapa", ic: "mapa" },
  { id: "cargos", n: "Cargos", ic: "cargos" },
  { id: "academia", n: "Academia", ic: "academia" },
  { id: "taller", n: "Taller", ic: "taller" },
  { id: "retos", n: "Retos", ic: "retos" },
  { id: "sectores", n: "Sectores", ic: "sectores" },
  { id: "brujula", n: "Brújula", ic: "brujula" }
];
const PARENT = { area: "mapa", cargo: "cargos", sim: "sims", concepto: "academia", tool: "taller", reto: "retos", medios: "inicio", fuentes: "inicio", perfil: "brujula" };
const DOCK = ["inicio", "viaje", "sims", "brujula"];

export function applyTheme(){
  const t = S.state.prefs.theme;
  if (t === "light" || t === "dark") document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme;
}

export function mountShell(){
  applyTheme();
  const root = $("#root");
  root.innerHTML = `<a class="skip" href="#view">Saltar al contenido</a>
  <header class="topnav"><div class="topnav-in">
    <a class="lockup" href="#inicio" aria-label="VÍVELO RH, ir al inicio">${lockup("", true).replace(/^<span class="lockup ">|<\/span>$/g, "")}</a>
    <nav class="navpill" aria-label="Secciones">${NAV.map(n => `<a href="#${n.id}" data-nav="${n.id}">${icon(n.ic)}<span>${n.n}</span></a>`).join("")}</nav>
    <div class="nav-tools">
      <button type="button" class="iconbtn" data-theme-toggle aria-label="Cambiar tema claro u oscuro">${icon("moon")}</button>
      <a class="userchip" href="#perfil" data-userchip><span class="initial">?</span><span>Invitado</span></a>
      <button type="button" class="iconbtn more-btn" data-more aria-expanded="false" aria-label="Todas las secciones">${icon("menu")}</button>
    </div>
  </div></header>
  <main class="view" id="view" tabindex="-1"></main>
  <footer class="foot"><div class="stack" style="gap:4px"><b style="font-family:var(--f-display);color:var(--ink)">VÍVELO RH</b><span>${DESCRIPTOR} · ${SLOGAN}</span><span>Casos, personas y organizaciones: ficticios. Normativa peruana verificada al ${VERIFIED}. No es asesoría legal.</span></div><nav class="row" aria-label="Pie de página"><button type="button" class="textlink" data-brand-sound style="background:none;border:0;cursor:pointer">♪ Sonido de VÍVELO RH</button><a href="#fuentes">Fuentes y método</a><a href="#medios">Audio y video</a><a href="#perfil">Mis datos y respaldo</a></nav></footer>
  <nav class="dock" aria-label="Secciones principales">${DOCK.map(id => { const n = NAV.find(x => x.id === id); return `<a href="#${id}" data-nav="${id}">${icon(n.ic)}<span>${n.n.replace("Mi brújula", "Brújula")}</span></a>`; }).join("")}<button type="button" data-more aria-expanded="false">${icon("mas")}<span>Más</span></button></nav>
  <div class="scrim" data-scrim hidden></div><div class="sheet" data-sheet role="dialog" aria-label="Todas las secciones" hidden>${NAV.concat([{ id: "fuentes", n: "Fuentes", ic: "fuentes" }, { id: "medios", n: "Audio y video", ic: "film" }, { id: "perfil", n: "Mis datos", ic: "user" }]).map(n => `<a href="#${n.id}">${icon(n.ic)}${n.n}</a>`).join("")}</div>`;
  const sheet = $("[data-sheet]"), scrim = $("[data-scrim]");
  const bs = $("[data-brand-sound]"); if (bs) bs.addEventListener("click", () => playBrand(true));
  const close = () => { sheet.hidden = true; scrim.hidden = true; $$("[data-more]").forEach(b => b.setAttribute("aria-expanded", "false")); };
  $$("[data-more]").forEach(b => b.addEventListener("click", () => { const open = sheet.hidden; sheet.hidden = !open; scrim.hidden = !open; $$("[data-more]").forEach(x => x.setAttribute("aria-expanded", String(open))); if (open) sheet.querySelector("a").focus(); }));
  scrim.addEventListener("click", close);
  sheet.addEventListener("click", e => { if (e.target.closest("a")) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !sheet.hidden) close(); });
  $("[data-theme-toggle]").addEventListener("click", () => {
    const dark = document.documentElement.dataset.theme === "dark" || (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
    S.state.prefs.theme = dark ? "light" : "dark"; save(); applyTheme(); syncTools();
  });
  onBeforeRender(r => {
    const id = PARENT[r.name] || r.name;
    $$("[data-nav]").forEach(a => { if (a.dataset.nav === id) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    syncTools(); close();
  });
}

export function syncTools(){
  const n = S.state.profile.name;
  const chip = $("[data-userchip]");
  if (chip) chip.innerHTML = `<span class="initial" aria-hidden="true">${esc((n || "?").trim().charAt(0).toUpperCase() || "?")}</span><span>${esc(n || "Invitado")}</span>`;
  const tb = $("[data-theme-toggle]");
  if (tb) { const dark = document.documentElement.dataset.theme === "dark" || (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches); tb.innerHTML = icon(dark ? "sun" : "moon"); tb.setAttribute("aria-label", dark ? "Usar tema claro" : "Usar tema oscuro"); }
}
