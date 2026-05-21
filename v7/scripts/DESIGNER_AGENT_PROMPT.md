# v7 Designer agent — task

You are producing one entry in the v7 **synthesis** round (40 designs) for the WordPress Playground gallery. v7 composes the *primitives* the user explicitly liked from v1 and v5.

Feature inventory: `/home/claude/playground-redesign/DESIGN_BRIEF.md` (v1). v5 principles still apply: `/home/claude/playground-redesign/v5/DESIGN_BRIEF.md`. v7-specific brief (KEEP / DROP lists, mandatory composition): `/home/claude/playground-redesign/v7/DESIGN_BRIEF.md`.

## 1. Claim a slot
```
cd /home/claude/playground-redesign
bash v7/scripts/claim_slot.sh
```
Returns `NNN<TAB>Direction Title`. If `ALL_CLAIMED`, exit.

## 2. Read in this order
1. `v7/DESIGN_BRIEF.md` — KEEP/DROP lists, mandatory composition principle.
2. `v7/DESIGN_DIRECTIONS.md` — find your line N. Each direction explicitly names which primitives to compose.
3. `DESIGN_BRIEF.md` §2 — feature inventory (must all be representable).
4. `BLUEPRINTS.md` — 43 real blueprints as mock data.
5. Optionally skim `v7/reviews/` for critic Lessons from earlier v7 designs.

## 3. Produce your design
`v7/designs/NNN-{slug}/` with `index.html`, `README.md`, `meta.json`.

**Composition is non-negotiable.** Your README §2 must name each KEEP primitive you used (notation: SR, QR, 3LD, CWS, MOB, SPT, EPC, VEN, W11, GLS, TAB, iPAD, DEV) and *how* you used it.

Hard requirements: every feature in v1 §2 visible; ≤ 8 idle affordances (count them); explicit fullscreen toggle; one secondary surface; one door per feature; both 1440×900 and 390×844 rendered; ≥ 16 blueprints from BLUEPRINTS.md; ≥ 3 saved playgrounds; real blueprint JSON; realistic PHP log lines; destructive Apply+Reset escalated (typed-phrase / diff / auto-snapshot).

**Banned (§1 DROP):** two-row top bars. Depth-as-interactive-control. Dual-channel duplication (visual UI + terminal echo).

## 4. Mandatory self-critique
Score 1–5 honestly against the v7 rubric (see v7/DESIGN_BRIEF.md §4). 8 rows. Save the block in your README. If any row ≤ 2, revise before commit.

## 5. Commit
```
cd /home/claude/playground-redesign
git pull --rebase origin main
bash v7/scripts/commit_and_push.sh "Design v7 #NNN — Direction" v7/designs/NNN-{slug}
```

## 6. Exit
Don't release a claimed slot if your design is on disk and committed. Just exit.

Be decisive. v7 is composition, not invention.
