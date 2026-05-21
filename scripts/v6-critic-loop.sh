#!/usr/bin/env bash
set -u -o pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STATE_DIR="$ROOT/.orchestrator-v6"
LOG_DIR="$STATE_DIR/logs"
LOCK_DIR="$STATE_DIR/locks"
MODEL="${MODEL:-gpt-5.5}"
EFFORT="${EFFORT:-high}"
TOTAL_DESIGNS="${TOTAL_DESIGNS:-40}"

mkdir -p "$LOG_DIR" "$LOCK_DIR" "$ROOT/v6/audits"

completed_count() {
  find "$ROOT/v6/designs" -maxdepth 2 -name meta.json 2>/dev/null | wc -l | tr -d ' '
}

run_critic() {
  local count="$1"
  local audit_file="$ROOT/v6/audits/critic-round-$(printf "%03d" "$count").md"
  local log_file="$LOG_DIR/critic-round-$(printf "%03d" "$count").log"
  local prompt
  prompt="$(cat <<PROMPT
You are the critic for the WordPress Playground V6 redesign swarm.

Read:
- DESIGN_BRIEF.md
- v6/INSIGHTS.md
- v6/STYLE_VARIATION_SYSTEM.md
- v5/DESIGN_BRIEF.md
- User-feedback source V5 designs and reviews: v5/designs/018-quiet-rail-to-loud + v5/reviews/018.md, v5/designs/023-smart-resize + v5/reviews/023.md, v5/designs/035-three-layer-depth + v5/reviews/035.md, v5/designs/036-corner-widget-control-center + v5/reviews/036.md, and disliked v5/designs/030-two-row-top-bar + v5/reviews/030.md.
- v6/style-skills/*.md
- v6/data/designs.json
- all completed V6 designs under v6/designs/
- existing V6 audits under v6/audits/

Write a rigorous audit to ${audit_file}. Do not edit designs. Do not add new product requirements.

Evaluate whether completed V6 designs:
- apply the user's V5 feedback: quiet-rail IA/interactions yes, quiet-rail visual no; smart-resize interaction and design yes; two-row top bar no; three-layer depth visual yes but depth interactions no; Sites widget interaction yes
- preserve every current Playground feature from DESIGN_BRIEF.md
- make the live WordPress site usable at full size or in a strong focus mode
- avoid too many visible buttons at first glance
- include route-specific input states for PR/GitHub/Blueprint URL/ZIP
- include save consequences, destructive confirm/cancel, and final states
- handle mobile and desktop credibly
- create varied, nuanced, professional visual systems using the TypeUI style skills without becoming outlandish or samey
- avoid persistent two-row top-bar solutions

Name concrete benchmark designs, concrete weak designs or patterns, repeated visual sameness, and specific guidance future workers should incorporate. Keep the bar high and the feedback useful for the next batch.
PROMPT
)"

  codex exec \
    -m "$MODEL" \
    -c "model_reasoning_effort=\"$EFFORT\"" \
    -s danger-full-access \
    -C "$ROOT" \
    -- \
    "$prompt" \
    >"$log_file" 2>&1 &&
    [[ -f "$audit_file" ]]
}

last_count_file="$STATE_DIR/critic_last_count.txt"
[[ -f "$last_count_file" ]] || printf "0" > "$last_count_file"

echo "v6 critic loop online"
while true; do
  count="$(completed_count)"
  last="$(cat "$last_count_file")"

  if (( count >= TOTAL_DESIGNS && count == last )); then
    echo "v6 critic loop complete"
    exit 0
  fi

  if (( count > last && ( count - last >= 10 || count == TOTAL_DESIGNS ) )); then
    echo "v6 critic: reviewing $count completed designs"
    if run_critic "$count"; then
      flock "$LOCK_DIR/integrate.lock" bash -c '
        set -euo pipefail
        root="$1"
        count="$2"
        cd "$root"
        git checkout main >/dev/null 2>&1 || true
        git pull --ff-only origin main
        printf "%s" "$count" > .orchestrator-v6/critic_last_count.txt
        git add v6/audits
        if ! git diff --cached --quiet; then
          git commit -m "Add V6 critic audit for ${count} designs"
          for attempt in 1 2 3 4 5; do
            if git push origin main; then
              exit 0
            fi
            git pull --rebase origin main
          done
          exit 1
        fi
      ' _ "$ROOT" "$count"
    else
      echo "v6 critic: session failed; it will retry"
    fi
  fi

  sleep 45
done
