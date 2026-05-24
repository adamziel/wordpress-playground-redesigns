#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${PORT:-8765}"
DESIGNS_DIR="$ROOT/designs"
OUT="$ROOT/screenshots"
mkdir -p "$OUT"

if ! curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT/v12/designs/" | grep -q 200; then
  echo "ERROR: local server not reachable on http://localhost:$PORT" >&2
  exit 1
fi

CHROMIUM=(chromium --headless --disable-gpu --no-sandbox --hide-scrollbars --enable-features=PreciseMemoryInfo --virtual-time-budget=8000)

for slug in $(ls "$DESIGNS_DIR" | sort); do
  if [ ! -f "$DESIGNS_DIR/$slug/index.html" ]; then continue; fi
  url="http://localhost:$PORT/v12/designs/$slug/"
  echo "→ $slug"
  "${CHROMIUM[@]}" --window-size=1440,1000 --screenshot="$OUT/$slug-desktop.png" "$url" 2>/dev/null || echo "  desktop failed"
  "${CHROMIUM[@]}" --window-size=1440,2400 --screenshot="$OUT/$slug-desktop-tall.png" "$url" 2>/dev/null || echo "  tall failed"
  "${CHROMIUM[@]}" --window-size=390,1200 --screenshot="$OUT/$slug-mobile.png" "$url" 2>/dev/null || echo "  mobile failed"
done

if curl -s -o /dev/null -w "%{http_code}" "http://localhost:$PORT/v12/" | grep -q 200; then
  "${CHROMIUM[@]}" --window-size=1440,2400 --screenshot="$OUT/_gallery.png" "http://localhost:$PORT/v12/" 2>/dev/null || true
fi

echo "Done. PNGs in $OUT"
