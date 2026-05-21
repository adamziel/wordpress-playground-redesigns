#!/usr/bin/env bash
set -u -o pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORKER_ID="${1:?worker id required}"
TOTAL_DESIGNS="${TOTAL_DESIGNS:-40}"
MAX_ATTEMPTS="${MAX_ATTEMPTS:-3}"
MODEL="${MODEL:-gpt-5.5}"
EFFORT="${EFFORT:-high}"
AGENT_TIMEOUT_SECONDS="${AGENT_TIMEOUT_SECONDS:-7200}"
STATE_DIR="$ROOT/.orchestrator-v6"
TMP_DIR="$STATE_DIR/tmp"
LOG_DIR="$STATE_DIR/logs"
LOCK_DIR="$STATE_DIR/locks"
CLAIM_DIR="$STATE_DIR/claims"
WORKTREES_DIR="$ROOT/.worktrees-v6"
MAIN_BRANCH="${MAIN_BRANCH:-main}"
LEASE_SECONDS="${LEASE_SECONDS:-21600}"
CURRENT_DESIGN_ID=""

mkdir -p "$TMP_DIR" "$LOG_DIR" "$LOCK_DIR" "$CLAIM_DIR" "$WORKTREES_DIR" "$ROOT/v6/designs"

release_current_claim() {
  if [[ -n "$CURRENT_DESIGN_ID" ]]; then
    rm -f "$CLAIM_DIR/$CURRENT_DESIGN_ID.claim"
  fi
}

trap release_current_claim EXIT INT TERM

allocate_design() {
  flock "$LOCK_DIR/queue.lock" bash -c '
    set -u -o pipefail
    total="$1"
    root="$2"
    claim_dir="$3"
    worker_id="$4"
    lease_seconds="$5"
    now="$(date +%s)"
    completed="$(find "$root/v6/designs" -maxdepth 2 -name meta.json 2>/dev/null | wc -l | tr -d " ")"

    if (( completed >= total )); then
      exit 10
    fi

    for num in $(seq 1 "$total"); do
      design_id="v6-design-$(printf "%03d" "$num")"
      if [[ -f "$root/v6/designs/$design_id/meta.json" ]]; then
        continue
      fi

      claim="$claim_dir/$design_id.claim"
      if [[ -f "$claim" ]]; then
        claimed_at="$(awk "NR==2 {print}" "$claim" 2>/dev/null || true)"
        if [[ "$claimed_at" =~ ^[0-9]+$ ]] && (( now - claimed_at < lease_seconds )); then
          continue
        fi
        rm -f "$claim"
      fi

      {
        printf "%s\n" "$worker_id"
        printf "%s\n" "$now"
      } > "$claim"
      printf "%s\n" "$num"
      exit 0
    done

    exit 11
  ' _ "$TOTAL_DESIGNS" "$ROOT" "$CLAIM_DIR" "$WORKER_ID" "$LEASE_SECONDS"
}

write_prompt() {
  local design_num="$1"
  local design_id="$2"
  local prompt_file="$3"
  local brief
  brief="$(node "$ROOT/scripts/v6-design-brief.mjs" "$design_num")"
  cat > "$prompt_file" <<PROMPT
You are designer ${WORKER_ID} producing ${design_id}, one of 40 V6 WordPress Playground UI redesigns.

Read these first:
- DESIGN_BRIEF.md
- BLUEPRINTS.md
- v6/INSIGHTS.md
- v6/STYLE_VARIATION_SYSTEM.md
- The assigned TypeUI style skill file named in the JSON brief below.
- V5 brief and source designs: v5/DESIGN_BRIEF.md, v5/designs/018-quiet-rail-to-loud, v5/designs/023-smart-resize, v5/designs/035-three-layer-depth, v5/designs/036-corner-widget-control-center, and v5/designs/030-two-row-top-bar.
- V5 reviews for those designs: v5/reviews/018.md, v5/reviews/023.md, v5/reviews/035.md, v5/reviews/036.md, v5/reviews/030.md.
- Existing V6 audits under v6/audits/ if any.
- Screenshot references in assets/screenshots/

Hard constraints:
- Write only inside v6/designs/${design_id}/.
- Do not edit root files, v6/index.html, v6/data, scripts, audits, existing designs, reviews, screenshots, or package/config files.
- Do not commit, branch, push, start servers, or use network tunnels.
- Produce a high-fidelity static redesign that works from GitHub Pages at v6/designs/${design_id}/index.html.
- Prefer one self-contained index.html with inline CSS/JS. Also create v6/designs/${design_id}/meta.json and README.md.
- Preserve every current feature in DESIGN_BRIEF.md. Do not add product features that are not in the current Playground.
- The iframe/live WordPress site must remain a central, credible surface, including a full-size/focus/play/preview mode when the layout otherwise favors settings, launcher, tabs, or inspector patterns.
- Make the first viewport an actual usable Playground app screen, not a marketing page.
- Keep it responsive for 390x844 and 1440x900. Avoid overlapping text, clipped controls, and horizontal overflow.

V6 feedback you must apply:
- The user likes quiet-rail-to-loud for information architecture and interactions, but not its visual design. Preserve the quiet-to-loud reveal, one secondary surface, and restraint; change the skin.
- The user likes smart resize for both design and interactions. Use ratio/gauge/focus-shift ideas where appropriate and make them self-teaching.
- The user expected to like two-row top bar but does not. Do not use a persistent two-row top bar. If identity/context separation is needed, solve it through a rail, widget, one capsule, or resize surface.
- The user somewhat likes the visual style of three-layer depth, but not the interactions. Borrow depth/elevation/blur as styling only; do not make depth the navigation model.
- The user likes the Sites widget from Corner-widget Control Center for interaction. A compact status widget that expands into saved sites / launch / blueprint discovery is encouraged, but avoid copying all four corner widgets unless your assigned direction explicitly justifies it.
- Designs must be more visually varied than prior rounds. Use the assigned TypeUI skill file for typography, palette, surface, radius, spacing, and tone, while staying professional and product-ready.
- Keep all previous Playground feature-preservation requirements: iframe primacy, fullscreen/focus mode, one door per feature, one secondary surface, route-specific inputs, save/resume consequences, destructive confirm/cancel/final state, mobile parity.

Required current Playground capability coverage:
- Top bar: Refresh, address/path input, Playground name, Save, Saved Playgrounds launcher, Site Manager/tools access, settings access.
- Launcher: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import .zip, featured blueprints, full gallery with search/category filters, Your Playgrounds.
- Site Manager/tools: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download .zip.
- States/flows: loading, active session, launcher or blueprint gallery open, save/resume, destructive Apply & Reset confirmation, route input form for PR/GitHub/Blueprint URL/ZIP, toast/notification.

Required files:
- v6/designs/${design_id}/index.html
- v6/designs/${design_id}/meta.json with:
  {
    "num": ${design_num},
    "title": "...",
    "summary": "..."
  }
- v6/designs/${design_id}/README.md with thesis, remix/merge/remove choices, trade-offs, and a short self-critique/revision note.

Assigned V6 direction:
${brief}

Before finishing:
- Verify your design names the TypeUI skill you used and applies it beyond colors.
- Do a critical pass against v6/INSIGHTS.md and v6/STYLE_VARIATION_SYSTEM.md, then revise once.
- Render or otherwise sanity-check 1440x900 and 390x844 behavior if possible.
- The final design should feel like a considered product direction, not just a style skin.
PROMPT
}

run_codex() {
  local worktree="$1"
  local prompt_file="$2"
  local log_file="$3"
  timeout "$AGENT_TIMEOUT_SECONDS" \
    codex exec \
      -m "$MODEL" \
      -c "model_reasoning_effort=\"$EFFORT\"" \
      -s danger-full-access \
      -C "$worktree" \
      -i "$worktree/assets/screenshots/01-main-loaded.png" \
      -i "$worktree/assets/screenshots/03-saved-playgrounds-panel.png" \
      -i "$worktree/assets/screenshots/04b-blueprints-gallery-full.png" \
      -i "$worktree/assets/screenshots/05-site-manager-settings.png" \
      -i "$worktree/assets/screenshots/06-site-manager-files.png" \
      -i "$worktree/assets/screenshots/07-site-manager-blueprint.png" \
      -i "$worktree/assets/screenshots/08-site-manager-database.png" \
      -i "$worktree/assets/screenshots/09-site-manager-logs.png" \
      -i "$worktree/assets/screenshots/11-mobile-view.png" \
      -- \
      "$(cat "$prompt_file")" \
      >"$log_file" 2>&1
}

integrate_design() {
  local design_id="$1"
  local worktree="$2"
  local log_file="$3"
  flock "$LOCK_DIR/integrate.lock" bash -c '
    set -u -o pipefail
    root="$1"
    design_id="$2"
    worktree="$3"
    log_file="$4"
    main_branch="$5"
    target="v6/designs/$design_id"

    cd "$root" || exit 1
    git checkout "$main_branch" >> "$log_file" 2>&1 || true
    git pull --ff-only origin "$main_branch" >> "$log_file" 2>&1 || exit 1

    if [[ ! -d "$worktree/$target" ]]; then
      echo "Missing $target in worktree" >> "$log_file"
      exit 1
    fi

    rm -rf "$target"
    mkdir -p v6/designs
    if ! rsync -a --delete "$worktree/$target/" "$target/" >> "$log_file" 2>&1; then
      rm -rf "$target"
      node scripts/build-v6-gallery.mjs >> "$log_file" 2>&1 || true
      exit 1
    fi

    if ! node scripts/validate-v6-design.mjs "$design_id" >> "$log_file" 2>&1; then
      rm -rf "$target"
      node scripts/build-v6-gallery.mjs >> "$log_file" 2>&1 || true
      exit 1
    fi

    if ! node scripts/build-v6-gallery.mjs >> "$log_file" 2>&1; then
      rm -rf "$target"
      node scripts/build-v6-gallery.mjs >> "$log_file" 2>&1 || true
      exit 1
    fi

    git add "$target" v6/data/designs.json v6/index.html
    if git diff --cached --quiet; then
      echo "No staged changes for $design_id" >> "$log_file"
      git push origin "$main_branch" >> "$log_file" 2>&1
      exit 0
    fi

    git commit -m "Add $design_id" >> "$log_file" 2>&1 || exit 1
    for push_attempt in 1 2 3 4 5; do
      if git push origin "$main_branch" >> "$log_file" 2>&1; then
        exit 0
      fi
      echo "Push failed for $design_id attempt $push_attempt; rebasing and retrying" >> "$log_file"
      git pull --rebase origin "$main_branch" >> "$log_file" 2>&1 || exit 1
      node scripts/build-v6-gallery.mjs >> "$log_file" 2>&1 || exit 1
      git add v6/data/designs.json v6/index.html >> "$log_file" 2>&1 || true
      if ! git diff --cached --quiet; then
        git commit -m "Rebuild V6 gallery after sync" >> "$log_file" 2>&1 || exit 1
      fi
    done
    exit 1
  ' _ "$ROOT" "$design_id" "$worktree" "$log_file" "$MAIN_BRANCH"
}

cleanup_worktree() {
  local branch="$1"
  local worktree="$2"
  flock "$LOCK_DIR/worktree.lock" bash -c '
    set +e
    root="$1"
    branch="$2"
    worktree="$3"
    cd "$root" || exit 0
    git worktree remove --force "$worktree" >/dev/null 2>&1
    git branch -D "$branch" >/dev/null 2>&1
    git worktree prune >/dev/null 2>&1
  ' _ "$ROOT" "$branch" "$worktree"
}

echo "v6 worker $WORKER_ID online"
while true; do
  design_num="$(allocate_design)"
  status=$?
  if (( status != 0 )); then
    if (( status == 10 )); then
      echo "v6 worker $WORKER_ID: all V6 designs are complete"
      exit 0
    fi
    echo "v6 worker $WORKER_ID: all unfinished designs are currently claimed; waiting"
    sleep 60
    continue
  fi

  design_id="v6-design-$(printf "%03d" "$design_num")"
  CURRENT_DESIGN_ID="$design_id"
  attempt=1

  while true; do
    stamp="$(date +%s)"
    branch="worker/${design_id}-${WORKER_ID}-attempt-${attempt}-${stamp}"
    worktree="$WORKTREES_DIR/${design_id}-${WORKER_ID}-attempt-${attempt}-${stamp}"
    prompt_file="$TMP_DIR/${design_id}-${WORKER_ID}-attempt-${attempt}.md"
    log_file="$LOG_DIR/${design_id}-${WORKER_ID}-attempt-${attempt}.log"
    echo "v6 worker $WORKER_ID: starting $design_id attempt $attempt"
    write_prompt "$design_num" "$design_id" "$prompt_file"

    flock "$LOCK_DIR/worktree.lock" bash -c '
      set -euo pipefail
      root="$1"
      branch="$2"
      worktree="$3"
      main_branch="$4"
      cd "$root"
      rm -rf "$worktree"
      git worktree prune >/dev/null 2>&1 || true
      git worktree add -B "$branch" "$worktree" "$main_branch"
    ' _ "$ROOT" "$branch" "$worktree" "$MAIN_BRANCH" >"$log_file" 2>&1

    if run_codex "$worktree" "$prompt_file" "$log_file"; then
      if integrate_design "$design_id" "$worktree" "$log_file"; then
        echo "$design_id completed by v6 worker $WORKER_ID" | tee -a "$LOG_DIR/completed.log"
        cleanup_worktree "$branch" "$worktree"
        rm -f "$CLAIM_DIR/$design_id.claim"
        CURRENT_DESIGN_ID=""
        break
      fi
      echo "v6 worker $WORKER_ID: integration failed for $design_id attempt $attempt, see $log_file"
    else
      echo "v6 worker $WORKER_ID: agent failed or timed out for $design_id attempt $attempt, see $log_file"
    fi

    cleanup_worktree "$branch" "$worktree"
    attempt=$((attempt + 1))
    if (( attempt > MAX_ATTEMPTS )); then
      echo "$design_id failed after $MAX_ATTEMPTS attempts by v6 worker $WORKER_ID; releasing claim for reassignment" | tee -a "$LOG_DIR/failed.log"
      rm -f "$CLAIM_DIR/$design_id.claim"
      CURRENT_DESIGN_ID=""
      sleep 60
      break
    fi
  done
done
