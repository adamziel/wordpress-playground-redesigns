#!/usr/bin/env bash
# Rebuilds v5/designs.json by scanning v5/designs/.
set -euo pipefail
ROOT="${ROOT:-/home/claude/playground-redesign}"
cd "$ROOT/v5"

OUT="designs.json"
TMP="$(mktemp)"
echo '[' > "$TMP"
first=1
for dir in designs/*/; do
  [ -d "$dir" ] || continue
  meta="${dir}meta.json"
  [ -f "$meta" ] || continue
  slug="$(basename "$dir")"
  num="$(jq -r '.num' "$meta")"
  reviewed="false"
  [ -f "reviews/$(printf '%03d' "$num").md" ] && reviewed="true"
  if [ $first -eq 0 ]; then echo "," >> "$TMP"; fi
  first=0
  jq -n --arg slug "$slug" --argjson reviewed "$reviewed" --slurpfile m "$meta" \
    '{num: $m[0].num, title: $m[0].title, summary: $m[0].summary, slug: $slug, reviewed: $reviewed}' >> "$TMP"
done
echo ']' >> "$TMP"
jq -s '.[0] | sort_by(.num)' "$TMP" > "$OUT"
rm -f "$TMP"
echo "Wrote $OUT with $(jq 'length' "$OUT") entries"
