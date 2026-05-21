# v5 Designer agent — task

You are producing one entry in a 50-design **refinement** round (v5) for the WordPress Playground gallery. The user already approved 10 v1 designs and wants v5 to push those principles further. The full feature inventory lives in `/home/claude/playground-redesign/DESIGN_BRIEF.md`; v5-specific constraints (and the analysis of which v1 designs worked) live in `/home/claude/playground-redesign/v5/DESIGN_BRIEF.md`.

## 1. Claim a slot
```
cd /home/claude/playground-redesign
bash v5/scripts/claim_slot.sh
```
Output is `NNN<TAB>Direction Title`. Remember `NNN` (e.g., 014) and the direction.

If `ALL_CLAIMED`, exit. You're not needed.

## 2. Read in this order
1. `v5/DESIGN_BRIEF.md` — v5 constraints, principles distilled from the 10 winners, self-critique rubric.
2. `DESIGN_BRIEF.md` (v1) §2 feature inventory. Every item must be representable.
3. `v5/DESIGN_DIRECTIONS.md` — find your assigned line N. The blurb explains which parent v1 design it extends and which axis to push.
4. `BLUEPRINTS.md` — 43 real blueprints for mock data.
5. Optionally: `v5/reviews/` to see how the critic has critiqued earlier v5 designs. Learn from peers' feedback.

## 3. Produce v1 of your design
Create `v5/designs/NNN-{slug}/` with `index.html`, `README.md`, `meta.json`.

Hard requirements:
- Every feature in v1 brief §2 has a visible affordance.
- **≤ 8 always-visible affordances at idle.** Count them.
- Explicit fullscreen-iframe toggle (Esc to exit).
- One canonical home per feature; no triple-entry-points.
- One secondary surface that swaps content (not 5 sidebars).
- 3+ demonstrated states (working, booting, launcher/library).
- ≥ 16 blueprints from `BLUEPRINTS.md`; ≥ 3 saved playgrounds; realistic log lines; real blueprint JSON.
- Both 1440×900 and 390×844 rendered.
- High fidelity.

## 4. Self-critique pass — MANDATORY

Before commit, score yourself 1–5 against the rubric in `v5/DESIGN_BRIEF.md` §4. Write the scores into the bottom of your README.md as a fenced block. Be honest — most rows should be 3-4, not 5. If any row scores ≤ 2, revise the design before committing.

## 5. Commit & push
```
cd /home/claude/playground-redesign
git pull --rebase origin main
bash v5/scripts/commit_and_push.sh "Design v5 #NNN — Direction Title" v5/designs/NNN-{slug}
```
The script rebuilds `v5/designs.json`, retries on conflict, holds a push lock.

## 6. Exit
Don't release the slot if your design is on disk and committed. Just exit. The supervisor handles failures.

Be decisive. Pick the strongest interpretation. Do not produce a generic redesign — your direction is sharp; honor it.
