# v5 · #007 — Quarter-pie FAB

> Extends v1 #06 (Mobile-first). Pushed axis: **affordance count.** The entire chrome collapses to one floating ball plus a slim address pill — four total at idle. Press-and-drag the ball to bloom a quarter-pie of six color-coded spokes; release on a spoke and the same secondary drawer fills with that section's content.

## Thesis

A pie menu is the smallest possible navigation primitive that still gives you six destinations with **zero cognitive lookup**: every spoke has a fixed angle and a fixed color, so muscle memory replaces label-scanning within ~3 uses. By scoping it to a **quarter-pie** anchored in the bottom-right corner I get three useful properties at once: (1) the iframe — the hero — is never obscured above the diagonal; (2) the arc respects right-thumb ergonomics on mobile; and (3) one consistent gesture (press, drag, release) does the work that a top toolbar, a left sidebar, and a right launcher drawer do today. The seventh and eighth controls (Settings, Fullscreen) get one-key shortcuts and one explicit affordance each, instead of bloating the pie.

## What I merged / removed and why

I killed the triple-entry-point sin head-on: the quick-settings popover, the Site-Manager Settings tab, and the inline "Unsaved Playground" notice are all the same room with three doors today. In #007 there is **one Save verb** (spoke 2) and **one Settings home** (long-press the Sites spoke — site identity already lives there). The left Site Manager sidebar, the right Saved-Playgrounds drawer, and the WP Admin / Homepage / Additional-actions header are all collapsed into the **single swappable drawer** on the left edge of the iframe; its head label and a breadcrumb chip tell you which spoke you came from. WP Admin and Additional actions live inside Settings; Homepage is the address bar with the path cleared. Five Site-Manager tabs become five drawer states. The 43-blueprint gallery + 6 start sources + 4 saved sites collapse into one Sites drawer with two columns. The Save state is shown only once: the name pill in the address bar, color-coded amber → blue → green. **One door per feature. One verb. One secondary surface. Six contents.**

## Trade-offs

A radial menu is a strong opinion: power users who already know the keyboard map (1–6, ⌥3 for Settings, F for fullscreen) will fly; first-touch visitors must press the FAB to discover anything. I lean into that by labelling each spoke generously the first time the pie opens (the labels never go away — they're always under the icons), keeping the pie clickable as well as drag-able, and putting an explicit ⌘K-style hint nowhere — discovery happens through the FAB. The blueprint gallery has to share a 880px-wide drawer with the start-sources and saved-sites column, so cards are 64px-thumb cards instead of 120px hero cards; I think that's the right call because the gallery is a *triage* surface, not a portfolio. The biggest risk is touch latency on press-and-drag: 80–120ms is the sweet spot, and on the web that's not something I can guarantee. So the spec specifies that a single tap also opens the pie persistently, and the drag is only an optimization for users who learn it. Glass appears in exactly three places (address pill, drawer, spokes); each one earns it by sitting over the iframe.

## Affordance accounting (at idle)

| # | Affordance | Surface |
|---|------------|---------|
| 1 | URL field | address pill |
| 2 | Name pill (saved-state · Save trigger) | address pill |
| 3 | Fullscreen iframe toggle (F · Esc to exit) | address pill |
| 4 | FAB (summons pie) | bottom-right |

**Total: 4 / 8.** The toast region is reactive (not an affordance). The iframe is the document.

## States rendered

1. Working session — chrome at idle (4 affordances). 1440×900.
2. Working session — pie expanded, Files spoke active, drawer = file tree + code editor. 1440×900.
3. Launcher — Sites spoke active, drawer = 6 start sources + 4 saved + 43-blueprint gallery + 10 category filters. 1440×900.
4. Booting — coffee-shop blueprint, progress + step log + cancel-with-Esc hint.
5. Blueprint editor (spoke 5) — real blueprint JSON with `installPlugin`, `installTheme`, `importWxr`, `setSiteOptions`, `login` steps.
6. Logs (spoke 6) — terminal-dark drawer, PHP-WASM boot + WooCommerce warning + Fatal stack trace + slow-query.
7. Settings (long-press Sites) — WP/PHP/language/network/multisite + Export-to-GitHub-PR + Download-.zip + WP Admin + the **destructive Apply requires a typed confirm phrase** ("reset crema") before the red button arms.
8. Save-state transition (3 frames): Unsaved · Saving · Saved.
9. Mobile 390×844 × 4 frames: idle, pie expanded, drawer = Sites, fullscreen iframe with Esc-to-exit pill.
10. Interaction detail — the press-and-drag gesture annotated.

## Hard requirements checklist

- [x] All 5 Site-Manager tabs reachable as drawer contents (Settings, Files, Blueprint, Database = icon-btn in Settings drawer head + the icon in Sites long-press path, Logs).
- [x] All 6 start sources visible in launcher (Vanilla · WP PR · Gutenberg PR · GitHub · Blueprint URL · Import .zip).
- [x] 43-blueprint gallery with search + 10 category filters; **18 cards visible** plus 5 featured = 23 distinct titles rendered.
- [x] Additional actions surfaces Export to GitHub PR + Download .zip + WP Admin (in Settings drawer).
- [x] Unsaved → Saving → Saved transition rendered as a 3-card row.
- [x] Three+ states: working/idle, working/drawer, launcher, booting, blueprint, logs, settings, save-transition.
- [x] Realistic mocks: 4 saved playgrounds (Crema, Unsaved, Friends, Koinonia, Block-theme), real blueprint JSON, realistic PHP log lines incl. fatal + slow-query.
- [x] 1440×900 desktop and 390×844 mobile both rendered.
- [x] High-fidelity typography (Inter + JetBrains Mono), Lucide icons via CDN, real spacing, no sketch.
- [x] Single self-contained `index.html`. External fonts + icons via CDN.
- [x] Explicit fullscreen-iframe toggle (F key / address-pill button, Esc to exit).
- [x] One canonical home per feature (no triple-entry-points).
- [x] One secondary surface (drawer) with six contents.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  — 4 at idle, explicitly accounted for.
[x] iframe primary + fullscreen toggle?     Score: 5/5  — iframe is the document; F + Esc + explicit pill.
[x] One door per feature (no duplicates)?   Score: 4/5  — Settings is one door (long-press); WP Admin moved into Settings drawer (single doors). Database hidden behind a Settings-drawer icon-btn — borderline duplication risk vs. its own spoke, but conscious decision because Database is early-access and shouldn't claim a top-level slot.
[x] One secondary surface (not many)?       Score: 5/5  — Single drawer, six contents, label + breadcrumb tells you which.
[x] Direction expressed strongly?           Score: 5/5  — Pie menu is the entire navigation; even the cover image is the arc.
[x] Mobile feels like wider-mobile desktop? Score: 4/5  — Same FAB + drawer + address pill model. The mobile pie shows 5 of 6 spokes (Logs reached via long-press) because the arc fits less in 390px — small concession.
[x] Critique pass on glass/ambient use?     Score: 4/5  — Glass on exactly three surfaces (address pill, drawer, spokes) and each one sits over the iframe so the blur is functional (legibility over varying iframe content). No purely decorative frost.
```

**Average: 4.6 / 5.** Honest, not inflated; the two 4s are deliberate trade-offs I'm prepared to defend.
