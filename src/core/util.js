/* Utilidades compartidas: DOM, formato y helpers puros (sin estado). */
export const $ = (s, r) => (r || document).querySelector(s);
export const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
export const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
export const byId = (arr, id) => (arr || []).find(x => x.id === id);
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const round2 = n => Math.round((n + Number.EPSILON) * 100) / 100;
export const money = n => "S/ " + Number(n).toLocaleString("es-PE", {minimumFractionDigits:2, maximumFractionDigits:2});
export const fmtDate = t => { try { return new Date(t).toLocaleDateString("es-PE", {day:"numeric", month:"short", year:"numeric"}); } catch (e) { return ""; } };
export const strip = html => String(html || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
export const words = text => (String(text || "").trim().match(/\S+/g) || []).length;

/* Hash estable (FNV-1a) para derivar rasgos visuales de un nombre. */
export function hash(str){
  let h = 2166136261;
  for (const c of String(str)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619) >>> 0; }
  return h >>> 0;
}

/* Barajado determinista (mismo orden para la misma semilla). */
export function shuffle(arr, seed){
  const a = arr.slice(); let s = hash(seed);
  for (let i = a.length - 1; i > 0; i--) { s = (Math.imul(s, 1103515245) + 12345) >>> 0; const j = s % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  if (a.join() === arr.join() && a.length > 1) [a[0], a[1]] = [a[1], a[0]];
  return a;
}

export const reducedMotion = () => typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;

let toastT = null;
export function toast(msg){
  let el = $(".toast");
  if (!el) { el = document.createElement("div"); el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
  el.textContent = msg; el.hidden = false; el.classList.remove("show"); void el.offsetWidth; el.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => { el.classList.remove("show"); el.hidden = true; }, 2800);
}
