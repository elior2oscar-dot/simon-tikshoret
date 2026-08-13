from PIL import Image
from collections import deque
from pathlib import Path

src = Path(r"C:\Users\elior\OneDrive\Desktop\SIMON\public\images\simon-hero-logo-src.png")
out = Path(r"C:\Users\elior\OneDrive\Desktop\SIMON\public\images\simon-hero-logo.png")

img = Image.open(src).convert("RGBA")
w, h = img.size
pix = img.load()

# Sample background from corners
corners = [pix[2, 2], pix[w - 3, 2], pix[2, h - 3], pix[w - 3, h - 3]]
br = sum(c[0] for c in corners) // 4
bg = sum(c[1] for c in corners) // 4
bb = sum(c[2] for c in corners) // 4


def dist(c):
    return abs(c[0] - br) + abs(c[1] - bg) + abs(c[2] - bb)


# Flood-fill from edges: remove pixels similar to background
THRESHOLD = 48
visited = [[False] * w for _ in range(h)]
q = deque()

for x in range(w):
    q.append((x, 0))
    q.append((x, h - 1))
for y in range(h):
    q.append((0, y))
    q.append((w - 1, y))

while q:
    x, y = q.popleft()
    if x < 0 or y < 0 or x >= w or y >= h or visited[y][x]:
        continue
    visited[y][x] = True
    r, g, b, a = pix[x, y]
    d = dist((r, g, b))
    if d > THRESHOLD:
        continue
    # Soft alpha near threshold
    if d < 28:
        pix[x, y] = (r, g, b, 0)
    else:
        fade = (THRESHOLD - d) / (THRESHOLD - 28)
        pix[x, y] = (r, g, b, int(a * (1 - fade)))
    for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
        if 0 <= nx < w and 0 <= ny < h and not visited[ny][nx]:
            q.append((nx, ny))

# Second pass: clear remaining near-bg islands that are mostly background-like
for y in range(h):
    for x in range(w):
        r, g, b, a = pix[x, y]
        if a == 0:
            continue
        d = dist((r, g, b))
        # only kill very bg-like AND not too black-cable (cable is darker, low blue)
        if d < 22 and max(r, g, b) < 45:
            # ambiguous; leave cable alone if nearly pure black
            if b > r + 8 and b > g + 5:
                pix[x, y] = (r, g, b, 0)

bbox = img.getbbox()
if bbox:
    pad = 12
    l, t, rgt, btm = bbox
    img = img.crop(
        (
            max(0, l - pad),
            max(0, t - pad),
            min(w, rgt + pad),
            min(h, btm + pad),
        )
    )

img.save(out, "PNG", optimize=True)
print(f"bg≈({br},{bg},{bb}) saved {out} size={img.size}")
