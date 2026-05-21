# v7 · 012 — Quiet Rail, Ventura Pane

> Direction #12 from `v7/DESIGN_DIRECTIONS.md`: **QR + VEN.** "The rail uses Ventura icon-and-label pills (not bare icons); expanded pane has Ventura whitespace and grouped sections."

## 1. Thesis

A 76-pixel quiet rail of **Ventura icon-and-label pills** sits on the left edge as the only navigation primitive. Until you tap one, the rail is monochrome and silent — each pill carries a tinted SF-Symbols-style glyph (blue Sites, purple Manager, orange Blueprints, graphite Settings) above a 10.5px label. Tap a pill and a single 380px Ventura-style pane opens beside it: 22px gutters, grouped sections with uppercase 10.5px tracking-wide titles, card-wrapped rows with hairline dividers, system-blue accent. Same IA as v5 #018, new clothes: where v018 was monochrome and severe, this is **macOS Ventura calm** — generous whitespace, soft tints, rounded rows. The slim 44px top bar (DevTools-style) carries the URL pill, the save-state pill and the fullscreen toggle in one horizontal row — never two. The iframe gets ~960 of the 1440 horizontal pixels when the pane is open, and 100% when fullscreen.

## 2. Primitives composed (from §1 KEEP)

- **QR — Quiet-rail-to-loud IA (v5 #018).** Reused as the IA backbone. Rail picks *which* (Sites / Manager / Blueprints / Settings); pane shows *what*. One pane in one place at one width (380px, widening to 420px only for Files where the tree needs room). Five Manager tabs ride a segmented control inside the pane, not on the rail — same "one door per feature" promise as v018.
- **VEN — Ventura Settings sidebar (v1 #14).** Reused as the visual style for the rail and pane. The rail pills are 64×56 with a Ventura icon-and-label form (tinted glyph + label) instead of v018's bare 24×24 icons. The pane uses Ventura's generous 22px gutters, 18px section spacing, grouped cards with hairline row dividers, uppercase tracking-wide section titles, and the iOS toggle. The Manager → Settings tab looks like macOS `Settings.app > Network` — recognizable on sight.
- **DEV — DevTools slim top bar (v1 #64).** Reused for the chrome strip. 44px, single row, with traffic lights at left; URL pill embeds Back + Refresh + scheme + path + Go (no separate Refresh button); save-state pill embeds the name, status dot and inline Save button (no separate Save button); fullscreen button + kebab on the right. **Save-state is a status pill, not a red banner.**

Optional touches consistent with KEEP but not the primary composition:
- **3LD (visual only)** — when the Settings pane is opened with a destructive Apply+Reset in progress, the iframe gets a soft 2px blur to signal "paused, you're editing config." Decoration only; the iframe is never the interaction surface for the pane.

## 3. What I remixed / removed and why

The three legacy settings entry points (popover, sidebar tab, info-notice button) collapse into **one** canonical door: rail · Settings opens the quick popover *in the pane*, and Manager → Settings tab opens the long form *in the same pane shape*. Same furniture, two depths — not three separate dialogs. The six "Start a new Playground" sources stop being a vertical list and become a 2×3 Ventura tile grid inside the Sites pane (so the launcher's three stacked sections from v018-review #002 become two grouped cards: *Your Playgrounds* + *Start new* + a single "Browse all 43 blueprints" row). The 43-blueprint gallery has two doors with one canonical shape: the rail · Blueprints pane shows a compact list of 16 rows + chips for quick picking; tap "Browse all" and the same content escalates to a focused launcher overlay (panel D) with a category sidebar — so breadth is opt-in, not constant. Export-to-GitHub-PR and Download-.zip both live in **one place**: the kebab in the top bar (panel C). Apply+Reset is no longer a small red banner; it's a Ventura-styled destructive confirm sheet that uses **all three escalations at once** — auto-snapshot timestamped before reset, a visible JSON diff, and a typed-phrase confirmation matching the playground name. Logs become a separate Manager tab with a level-filter strip and a counted pill set (3 errors / 7 warnings / 29 info). No terminal echoes; no dual-channel UI.

## 4. Trade-offs

Ventura pills are bigger than bare icons (64×56 vs 24×24), so the rail is 76px instead of v018's 56px. I traded 20 pixels of iframe width for legibility — the rail-as-Ventura-sidebar reads at a glance, and the labeled pills are accessible without hover tooltips. This is a deliberate Ventura tax. I also accept that two Manager tabs (Database + Logs) get tiled into the canvas area in panel C when Files is the active pane content, because Files legitimately needs a wider pane — that's a small compromise vs strict "pane = one fixed surface", but it preserves the iframe whenever the user is *just* navigating; only authoring widens. The composition does **not** use Smart-Resize or Corner-Widget-Sites — I refused to bolt those on because the direction names QR+VEN, and v7's thesis is "compose, don't invent." Two designers given this direction will both reach for Ventura pills + grouped rows; my differentiator is the *card-wrapped row groups* (not Ventura's looser stacks) and the **typed-phrase + diff + auto-snapshot triple-guard** on Apply+Reset.

## 5. Counted idle affordances (≤ 8)

1. URL pill (Refresh + Address + Go in one capsule)
2. Save-state pill (name + Save in one capsule)
3. Fullscreen toggle
4. More menu (kebab — Export PR / Download .zip / Help)
5. Rail · Sites pill
6. Rail · Manager pill
7. Rail · Blueprints pill
8. Rail · Settings pill

= **8.** The Help pill in the rail-bottom is shown at 0.45 opacity / pointer-events:none — it's a visual hint that the rail can carry more, not an idle affordance. Traffic lights and rail logo are decorative.

## 6. Hard-requirement evidence (where to look)

| Req | Where |
|---|---|
| 5 Site-Manager tabs visible | Panel B (Settings active), Panel C (Files active, Blueprint + Database + Logs tiled below) |
| 6 "Start a new Playground" sources | Panel A · Sites pane group "Start a new Playground" |
| 43-blueprint browser w/ search + 10 categories + ≥ 16 cards | Panel D launcher overlay |
| Export PR + Download .zip both surfaced | Panel C top-bar More menu |
| Unsaved → save transition | Panel A (unsaved pill, orange dot) → Panel B (saved, green dot, "saved to OPFS") |
| Three demonstrated states | Panel A (working), Panel D (booting + launcher), Panel E (fullscreen) |
| Realistic mock data | 3 saved playgrounds in Panel A, real blueprint JSON for Koinonia in Panel C, 7 realistic PHP log lines |
| 1440×900 + 390×844 | Panels A–E (1440), Panel F (390 ×3) |
| Destructive Apply+Reset escalated | Panel B confirm sheet — typed-phrase + diff + auto-snapshot (all three) |
| Single self-contained HTML | Yes; Google Fonts via CDN |

## 7. Self-critique rubric — mandatory

```
[x] Affordance count at idle ≤ 8?              Score: 5/5  (exactly 8; counted in §5 and tagged below panel A)
[x] iframe primacy + fullscreen toggle?        Score: 5/5  (iframe at ~67% of width with pane open, 100% fullscreen; Panel E renders fullscreen with Esc/F exit pill)
[x] One door per feature?                      Score: 4/5  (settings: one canonical pane; export: only in More menu; blueprints: one rail pill + opt-in launcher overlay — minor "two doors" but escalated, not duplicated)
[x] One secondary surface?                     Score: 5/5  (a single 380px pane in one place; widens to 420 only for Files; segmented controls swap content)
[x] Direction strongly expressed?              Score: 5/5  (Ventura tinted icon-pill rail + Ventura grouped-card pane — visually unmistakable as QR + VEN; not just a re-skin of v018)
[x] Mobile = wider-mobile desktop?             Score: 4/5  (same 4 pills as a bottom tab bar; pane becomes a sheet with 3 detents; iframe never drops below 38%; same 44px top bar)
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5  (QR + VEN + DEV named in §2, each with how-used; 3LD used in restraint only)
[x] No banned patterns (§1 DROP)?              Score: 5/5  (single-row 44px top bar; depth is visual only; no terminal-echo dual channel)
```

No row ≤ 2 → ship.
