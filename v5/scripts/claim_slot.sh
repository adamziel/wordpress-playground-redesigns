#!/usr/bin/env bash
# Atomically claims the next free slot (1..50) for v5. Echoes "NNN<TAB>direction-title".
set -euo pipefail
ROOT="${ROOT:-/home/claude/playground-redesign}"
V5="$ROOT/v5"
cd "$V5"
mkdir -p .locks

exec 9>.locks/claim.lock
flock 9

for n in $(seq 1 50); do
  pad=$(printf '%03d' "$n")
  if compgen -G "designs/${pad}-*" > /dev/null; then continue; fi
  if [ -d ".locks/slot-${pad}" ]; then continue; fi
  mkdir ".locks/slot-${pad}"
  title=$(grep -E "^${n}\. \*\*" DESIGN_DIRECTIONS.md | head -1 | sed -E "s/^${n}\. \*\*([^*]+)\*\*.*$/\1/" | sed 's/\.*$//')
  printf '%s\t%s\n' "$pad" "$title"
  exit 0
done
echo "ALL_CLAIMED" >&2
exit 1
