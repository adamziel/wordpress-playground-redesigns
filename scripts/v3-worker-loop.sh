#!/usr/bin/env bash
set -u -o pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORKER_ID="${1:?worker id required}"
TOTAL_DESIGNS="${TOTAL_DESIGNS:-50}"
MAX_ATTEMPTS="${MAX_ATTEMPTS:-3}"
MODEL="${MODEL:-gpt-5.5}"
EFFORT="${EFFORT:-high}"
AGENT_TIMEOUT_SECONDS="${AGENT_TIMEOUT_SECONDS:-7200}"
STATE_DIR="$ROOT/.orchestrator-v3"
TMP_DIR="$STATE_DIR/tmp"
LOG_DIR="$STATE_DIR/logs"
LOCK_DIR="$STATE_DIR/locks"
CLAIM_DIR="$STATE_DIR/claims"
WORKTREES_DIR="$ROOT/.worktrees-v3"
MAIN_BRANCH="${MAIN_BRANCH:-main}"
LEASE_SECONDS="${LEASE_SECONDS:-21600}"
CURRENT_DESIGN_ID=""

mkdir -p "$TMP_DIR" "$LOG_DIR" "$LOCK_DIR" "$CLAIM_DIR" "$WORKTREES_DIR" "$ROOT/v3/designs"

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
    completed="$(find "$root/v3/designs" -maxdepth 2 -name meta.json 2>/dev/null | wc -l | tr -d " ")"

    if (( completed >= total )); then
      exit 10
    fi

    for num in $(seq 1 "$total"); do
      design_id="v3-design-$(printf "%03d" "$num")"
      if [[ -f "$root/v3/designs/$design_id/meta.json" ]]; then
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
  brief="$(node "$ROOT/scripts/v3-design-brief.mjs" "$design_num")"
  cat > "$prompt_file" <<PROMPT
You are designer ${WORKER_ID} producing ${design_id}, one of 50 V3 WordPress Playground UI redesigns.

Read these first:
- DESIGN_BRIEF.md
- BLUEPRINTS.md
- v3/INSIGHTS.md
- Reviews for the liked or relevant prior designs: reviews/006.md, reviews/010.md, reviews/013.md, reviews/014.md, reviews/015.md, reviews/029.md, reviews/038.md, reviews/053.md, reviews/055.md, reviews/064.md
- Existing prior designs only as references: designs/006-mobile-first, designs/010-figma-canvas, designs/013-epic-launcher, designs/014-macos-settings, designs/015-windows-11-settings, designs/029-console-hybrid, designs/038-frosted-glass-canvas, designs/053-tabs-only, designs/055-ipad-multitasking, designs/064-inspector-devtools
- Existing V3 audits under v3/audits/ if any
- Screenshot references in assets/screenshots/

Hard constraints:
- Write only inside v3/designs/${design_id}/.
- Do not edit root files, v3/index.html, v3/data, scripts, audits, existing designs, reviews, screenshots, or package/config files.
- Do not commit, branch, push, start servers, or use network tunnels.
- Produce a high-fidelity static redesign that works from GitHub Pages at v3/designs/${design_id}/index.html.
- Prefer one self-contained index.html with inline CSS/JS. Also create v3/designs/${design_id}/meta.json and README.md.
- Preserve every current feature in DESIGN_BRIEF.md. Do not add product features that are not in the current Playground.
- The iframe/live WordPress site must remain a central, credible surface, including a full-size/focus/play/preview mode when the layout otherwise favors settings, launcher, tabs, or inspector patterns.
- Make the first viewport an actual usable Playground app screen, not a marketing page.
- Keep it responsive for 390x844 and 1440x900. Avoid overlapping text, clipped controls, and horizontal overflow.

V3 feedback you must apply:
- Mobile-first worked because of bottom navigation, sheets, and progressive disclosure; avoid dumping everything into "More".
- Figma-like had a good spirit but too many visible buttons; use calm selected-object inspection instead of exposing every tool immediately.
- Epic-style launcher worked for discovery; route tiles must reveal inputs, and the running site needs a full-size playing mode.
- macOS Settings and Windows 11 Settings worked because they were legible; do not let settings pages trap the live site in a small card.
- Console + visual hybrid is only okay; command/history should support the visual UI, not dominate it.
- Glass is surprisingly nice; add contrast safeguards.
- Tabs-only can work; handle overflow and restore a full-size site.
- iPad multitasking is nice; make split/slide-over affordances discoverable.
- Inspector-first was strongest in top-bar interactions and docked tools; keep the top bar crisp and the inspector collapsible.

Required current Playground capability coverage:
- Top bar: Refresh, address/path input, Playground name, Save, Saved Playgrounds launcher, Site Manager/tools access, settings access.
- Launcher: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import .zip, featured blueprints, full gallery with search/category filters, Your Playgrounds.
- Site Manager/tools: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download .zip.
- States/flows: loading, active session, launcher or blueprint gallery open, save/resume, destructive Apply & Reset confirmation, route input form for PR/GitHub/Blueprint URL/ZIP, toast/notification.

Required files:
- v3/designs/${design_id}/index.html
- v3/designs/${design_id}/meta.json with:
  {
    "num": ${design_num},
    "title": "...",
    "summary": "..."
  }
- v3/designs/${design_id}/README.md with thesis, remix/merge/remove choices, trade-offs, and a short self-critique/revision note.

Assigned V3 direction:
${brief}

Before finishing, do a critical pass on your own design against v3/INSIGHTS.md and revise once. The final design should feel like a considered product direction, not just a style skin.
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
    target="v3/designs/$design_id"

    cd "$root" || exit 1
    git checkout "$main_branch" >> "$log_file" 2>&1 || true
    git pull --ff-only origin "$main_branch" >> "$log_file" 2>&1 || exit 1

    if [[ ! -d "$worktree/$target" ]]; then
      echo "Missing $target in worktree" >> "$log_file"
      exit 1
    fi

    rm -rf "$target"
    mkdir -p v3/designs
    if ! rsync -a --delete "$worktree/$target/" "$target/" >> "$log_file" 2>&1; then
      rm -rf "$target"
      node scripts/build-v3-gallery.mjs >> "$log_file" 2>&1 || true
      exit 1
    fi

    if ! node scripts/validate-v3-design.mjs "$design_id" >> "$log_file" 2>&1; then
      rm -rf "$target"
      node scripts/build-v3-gallery.mjs >> "$log_file" 2>&1 || true
      exit 1
    fi

    if ! node scripts/build-v3-gallery.mjs >> "$log_file" 2>&1; then
      rm -rf "$target"
      node scripts/build-v3-gallery.mjs >> "$log_file" 2>&1 || true
      exit 1
    fi

    git add "$target" v3/data/designs.json v3/index.html
    if git diff --cached --quiet; then
      echo "No staged changes for $design_id" >> "$log_file"
      git push origin "$main_branch" >> "$log_file" 2>&1
      exit 0
    fi

    git commit -m "Add $design_id" >> "$log_file" 2>&1 || exit 1
    git push origin "$main_branch" >> "$log_file" 2>&1 || exit 1
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

echo "v3 worker $WORKER_ID online"
while true; do
  design_num="$(allocate_design)"
  status=$?
  if (( status != 0 )); then
    if (( status == 10 )); then
      echo "v3 worker $WORKER_ID: all V3 designs are complete"
      exit 0
    fi
    echo "v3 worker $WORKER_ID: all unfinished designs are currently claimed; waiting"
    sleep 60
    continue
  fi

  design_id="v3-design-$(printf "%03d" "$design_num")"
  CURRENT_DESIGN_ID="$design_id"
  attempt=1

  while true; do
    stamp="$(date +%s)"
    branch="worker/${design_id}-${WORKER_ID}-attempt-${attempt}-${stamp}"
    worktree="$WORKTREES_DIR/${design_id}-${WORKER_ID}-attempt-${attempt}-${stamp}"
    prompt_file="$TMP_DIR/${design_id}-${WORKER_ID}-attempt-${attempt}.md"
    log_file="$LOG_DIR/${design_id}-${WORKER_ID}-attempt-${attempt}.log"
    echo "v3 worker $WORKER_ID: starting $design_id attempt $attempt"
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
        echo "$design_id completed by v3 worker $WORKER_ID" | tee -a "$LOG_DIR/completed.log"
        cleanup_worktree "$branch" "$worktree"
        rm -f "$CLAIM_DIR/$design_id.claim"
        CURRENT_DESIGN_ID=""
        break
      fi
      echo "v3 worker $WORKER_ID: integration failed for $design_id attempt $attempt, see $log_file"
    else
      echo "v3 worker $WORKER_ID: agent failed or timed out for $design_id attempt $attempt, see $log_file"
    fi

    cleanup_worktree "$branch" "$worktree"
    attempt=$((attempt + 1))
    if (( attempt > MAX_ATTEMPTS )); then
      echo "$design_id failed after $MAX_ATTEMPTS attempts by v3 worker $WORKER_ID; releasing claim for reassignment" | tee -a "$LOG_DIR/failed.log"
      rm -f "$CLAIM_DIR/$design_id.claim"
      CURRENT_DESIGN_ID=""
      sleep 60
      break
    fi
  done
done
