# Compone el render (PNG con alfa) sobre fondo lino degradado, reduce 2x y exporta WebP bajo un límite de KB.
import sys, io
from PIL import Image, ImageDraw, ImageFilter
src, dst, size, kb = sys.argv[1], sys.argv[2], sys.argv[3], int(sys.argv[4])
W, H = map(int, size.split("x"))
im = Image.open(src).convert("RGBA")
w, h = im.size
# fondo: degradado radial suave marfil -> lino -> arena clara
bg = Image.new("RGB", (w, h), (239, 232, 221))
mask = Image.new("L", (w, h), 0)
d = ImageDraw.Draw(mask)
cx, cy = w * 0.5, h * 0.42
for i in range(60, 0, -1):
    r = i / 60
    d.ellipse([cx - r * w * 0.85, cy - r * h * 0.95, cx + r * w * 0.85, cy + r * h * 0.95], fill=int(255 * (1 - r) ** 0.9))
mask = mask.filter(ImageFilter.GaussianBlur(w / 40))
bg = Image.composite(Image.new("RGB", (w, h), (251, 248, 243)), bg, mask)
bg.paste(im, (0, 0), im)
out = bg.resize((W, H), Image.LANCZOS)
q = 84
while True:
    buf = io.BytesIO(); out.save(buf, "WEBP", quality=q, method=6)
    if buf.tell() <= kb * 1024 or q <= 50: break
    q -= 4
open(dst, "wb").write(buf.getvalue())
print(f"{W}x{H} q{q} {buf.tell()//1024}KB")
