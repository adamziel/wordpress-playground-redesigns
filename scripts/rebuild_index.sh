#!/usr/bin/env bash
# Rebuilds designs.json by scanning the designs/ folder.
# Each design is at designs/NNN-slug/ with a meta.json containing { num, title, summary }.
set -euo pipefail
REPO="${REPO:-/home/claude/playground-redesign}"
cd "$REPO"

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
