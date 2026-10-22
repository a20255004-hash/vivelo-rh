"""Sonido de marca de VÍVELO RH (≈3 s), sintetizado desde cero: 100 % original, sin licencias.
Arpegio pulsado tipo charango (Karplus-Strong) + frase tipo quena (soplo, armónicos y vibrato)
en escala pentatónica menor de La (La-Do-Re-Mi-Sol), con un brillo final de campana.
Uso: python3 scripts/audio/make-sonic-logo.py  → assets/audio/vivelo-sonido.{wav,mp3,ogg}"""
import numpy as np, wave, subprocess, os
SR = 44100
rng = np.random.default_rng(7)
def note(n):  # MIDI → Hz
    return 440.0 * 2 ** ((n - 69) / 12)
def pluck(f, dur, amp=.5, decay=.996):
    """Karplus-Strong clásico: ruido en un retardo de un periodo, promediado y amortiguado."""
    N = max(2, int(round(SR / f))); n = int(SR * dur)
    y = np.zeros(n + N + 1); y[:N] = (rng.random(N) * 2 - 1) * amp; y[:N] -= y[:N].mean()
    for i in range(N, n + N):
        y[i] = decay * .5 * (y[i - N] + y[i - N - 1])
    return y[N:n + N]
def quena(f, dur, amp=.32, vib=5.2):
    t = np.arange(int(SR * dur)) / SR
    v = 1 + .006 * np.sin(2 * np.pi * vib * t) * np.clip(t / .25, 0, 1)
    ph = 2 * np.pi * f * np.cumsum(v) / SR
    tone = np.sin(ph) + .28 * np.sin(2 * ph) + .12 * np.sin(3 * ph) + .05 * np.sin(4 * ph)
    breath = np.convolve(rng.standard_normal(len(t)), np.ones(30) / 30, "same") * .06
    env = np.clip(t / .05, 0, 1) * np.clip((dur - t) / .12, 0, 1)
    return (tone + breath) * env * amp
def bell(f, dur, amp=.12):
    t = np.arange(int(SR * dur)) / SR
    return (np.sin(2 * np.pi * f * t) + .5 * np.sin(2 * np.pi * f * 2.76 * t) + .25 * np.sin(2 * np.pi * f * 5.4 * t)) * np.exp(-t * 3.2) * amp
total = np.zeros(int(SR * 3.4))
def add(sig, at):
    i = int(SR * at); total[i:i + len(sig)] += sig[:max(0, len(total) - i)]
# charango: La2 Mi3 La3 Do4 Mi4 rasgueo rápido
for k, n in enumerate([57, 64, 69, 72, 76]):
    add(pluck(note(n), 2.2, .42), .02 + k * .055)
# quena: Mi5 – Re5 – Mi5 – (Sol5) – La5 sostenida
for at, n, d in [(.42, 76, .26), (.68, 74, .16), (.84, 76, .2), (1.04, 79, .18), (1.22, 81, 1.35)]:
    add(quena(note(n), d), at)
add(bell(note(93), 1.6), 1.25); add(bell(note(88), 1.4, .07), 1.32)
# reverberación sencilla (eco difuso) y normalización
rev = np.zeros_like(total)
for d, g in [(.031, .35), (.047, .3), (.071, .24), (.113, .18), (.173, .12), (.251, .08)]:
    s = int(SR * d); rev[s:] += total[:-s] * g
mix = total + rev * .55
# filtro pasa-altos (≈90 Hz) para quitar retumbe y componente continua
alpha = 1 / (1 + 2 * np.pi * 90 / SR); hp = np.zeros_like(mix); prev_x = 0.0; prev_y = 0.0
for i, x in enumerate(mix):
    prev_y = alpha * (prev_y + x - prev_x); prev_x = x; hp[i] = prev_y
mix = hp
mix *= np.clip((len(mix) / SR - np.arange(len(mix)) / SR) / .35, 0, 1)
mix = mix / np.max(np.abs(mix)) * .82
root = os.path.join(os.path.dirname(__file__), "..", "..", "assets", "audio")
wav = os.path.join(root, "vivelo-sonido.wav")
with wave.open(wav, "wb") as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR); w.writeframes((mix * 32767).astype("<i2").tobytes())
subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", wav, "-b:a", "128k", os.path.join(root, "vivelo-sonido.mp3")], check=True)
subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", wav, "-c:a", "libvorbis", "-q:a", "5", os.path.join(root, "vivelo-sonido.ogg")], check=True)
os.remove(wav)
print("listo")
