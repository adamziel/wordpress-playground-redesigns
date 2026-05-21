#!/usr/bin/env bash
# Atomically claims the next free slot (1..100). Echoes "NNN<TAB>direction-title" on success.
# Returns nonzero if all 100 are claimed.
set -euo pipefail
REPO="${REPO:-/home/claude/playground-redesign}"
cd "$REPO"
mkdir -p .locks

# Use flock on a single file to serialize claims.
exec 9>.locks/claim.lock
flock 9

for n in $(seq 1 100); do
  pad=$(printf '%03d' "$n")
  # Already claimed (folder exists) or already done (any designs/NNN-* folder)?
  if compgen -G "designs/${pad}-*" > /dev/null; then continue; fi
  if [ -d ".locks/slot-${pad}" ]; then continue; fi
  mkdir ".locks/slot-${pad}"
  # Pull the direction title from DESIGN_DIRECTIONS.md (line "N. **Name**: ...")
  title=$(grep -E "^${n}\. \*\*" DESIGN_DIRECTIONS.md | head -1 | sed -E "s/^${n}\. \*\*([^*]+)\*\*.*$/\1/")
  printf '%s\t%s\n' "$pad" "$title"
  exit 0
done

echo "ALL_CLAIMED" >&2
exit 1
