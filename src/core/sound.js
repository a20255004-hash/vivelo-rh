/* Sonido de marca de VÍVELO RH (≈3 s, sintetizado en scripts/audio/make-sonic-logo.py).
   Suena solo tras un gesto de la persona (entrar, pulsar un botón) y se puede desactivar en
   «Mis datos» (S.state.prefs.sound = false). Nunca se reproduce en bucle ni de forma automática. */
import { S } from "./store.js";
let el = null;
export const soundOn = () => S.state.prefs.sound !== false;
export function playBrand(force = false){
  if (!force && !soundOn()) return;
  try {
    if (!el) {
      el = new Audio();
      el.src = el.canPlayType("audio/ogg; codecs=vorbis") ? "assets/audio/vivelo-sonido.ogg" : "assets/audio/vivelo-sonido.mp3";
      el.volume = .7; el.preload = "auto";
    }
    el.currentTime = 0;
    const p = el.play(); if (p && p.catch) p.catch(() => {});
  } catch (e) {}
}
