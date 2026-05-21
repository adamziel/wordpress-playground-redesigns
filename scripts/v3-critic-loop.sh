#!/usr/bin/env bash
set -u -o pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STATE_DIR="$ROOT/.orchestrator-v3"
LOG_DIR="$STATE_DIR/logs"
LOCK_DIR="$STATE_DIR/locks"
MODEL="${MODEL:-gpt-5.5}"
EFFORT="${EFFORT:-high}"
TOTAL_DESIGNS="${TOTAL_DESIGNS:-50}"

mkdir -p "$LOG_DIR" "$LOCK_DIR" "$ROOT/v3/audits"

completed_count() {
  find "$ROOT/v3/designs" -maxdepth 2 -name meta.json 2>/dev/null | wc -l | tr -d ' '
}

run_critic() {
  local count="$1"
  local audit_file="$ROOT/v3/audits/critic-round-$(printf "%03d" "$count").md"
  local log_file="$LOG_DIR/critic-round-$(printf "%03d" "$count").log"
  local prompt
  prompt="$(cat <<PROMPT
You are the critic for the WordPress Playground V3 redesign swarm.

Read:
- DESIGN_BRIEF.md
- v3/INSIGHTS.md
- designs/reviews for the liked prior directions: reviews/006.md, reviews/010.md, reviews/013.md, reviews/014.md, reviews/015.md, reviews/029.md, reviews/038.md, reviews/053.md, reviews/055.md, reviews/064.md
- v3/data/designs.json
- all completed V3 designs under v3/designs/
- existing V3 audits under v3/audits/

Write a rigorous audit to ${audit_file}. Do not edit designs. Do not add new product requirements.

Evaluate whether completed V3 designs:
- apply the user feedback instead of making another broad console/dashboard clone
- preserve every current Playground feature from DESIGN_BRIEF.md
- make the live WordPress site usable at full size or in a strong focus mode
- avoid too many visible buttons at first glance
- include route-specific input states for PR/GitHub/Blueprint URL/ZIP
- include save consequences, destructive confirm/cancel, and final states
- handle mobile and desktop credibly
- use glass/tabs/settings/launcher/iPad/inspector patterns only where they improve usability

Name concrete benchmark designs, concrete weak designs or patterns, and specific guidance future workers should incorporate. Keep the bar high and the feedback useful for the next batch.
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

echo "v3 critic loop online"
while true; do
  count="$(completed_count)"
  last="$(cat "$last_count_file")"

  if (( count >= TOTAL_DESIGNS && count == last )); then
    echo "v3 critic loop complete"
    exit 0
  fi

  if (( count > last && ( count - last >= 10 || count == TOTAL_DESIGNS ) )); then
    echo "v3 critic: reviewing $count completed designs"
    if run_critic "$count"; then
      flock "$LOCK_DIR/integrate.lock" bash -c '
        set -euo pipefail
        root="$1"
        count="$2"
        cd "$root"
        git checkout main >/dev/null 2>&1 || true
        git pull --ff-only origin main
        printf "%s" "$count" > .orchestrator-v3/critic_last_count.txt
        git add v3/audits
        if ! git diff --cached --quiet; then
          git commit -m "Add V3 critic audit for ${count} designs"
          git push origin main
        fi
      ' _ "$ROOT" "$count"
    else
      echo "v3 critic: session failed; it will retry"
    fi
  fi

  sleep 45
done
