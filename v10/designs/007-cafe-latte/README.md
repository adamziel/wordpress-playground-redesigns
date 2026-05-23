# 007 — Cafe Latte

## Thesis

The chrome around the WordPress iframe is dressed as a quiet neighbourhood cafe: warm cream paper (#F2E8D5), espresso brown ink (#3D2817), a caramel accent (#C68B59), and an almost-invisible paper grain. Editorial serif headlines in Fraunces sit against Inter body copy. Hairlines are 1px brown, corners are softened to 6px, and a tiny inner highlight gives every chrome surface the feeling of pressed paper. The result is hospitable rather than industrial — and because the chrome is so calm, the WordPress iframe inside it is the loudest object on screen, exactly the iframe-primacy promise of the v7 #010 model.

## What is locked

The v7 #010 interaction model is preserved in full: one quiet left rail, one swap-content pane, one slim top capsule, a corner site widget shaped here as a coffee-stain ring, a z3 modal Library overlay, and a mobile mirror where the rail rotates to a bottom tab bar and the pane becomes a bottom sheet. The save-pill in caramel is the single source of truth for save state — `Unsaved → Saving → Saved → Stale`. The slim capsule carries refresh, address, name, save-pill, More, and Fullscreen on a single 38px row. The Library is z3 and reaches via Sites pane Library and ⌘K. All 10 category filters and 16+ blueprint cards are exposed.

## What this skin explores

The rail uses only **two docks** — Sites and Manage — closer to v7 but with a twist: the Manage pane always pins a compact **Settings** summary card at the very top (all five fields visible at a glance), and below it a tabbed **Inspect** section groups **Files / Blueprint / Database / Logs** as four tabs. That way the most-edited surface (Settings) never hides behind a tab, while the four read-mostly inspection surfaces share one swap region.

## Trade-offs

- Pinning Settings on top costs vertical space in the pane: Inspect content scrolls inside a slightly shorter region.
- Warm cream limits state colour runway. Save states use caramel (Unsaved), soft moss (Saved), espresso wash (Saving), and oxblood (Stale) — no neon.
- The coffee-stain corner widget is decorative; it must still be reachable by keyboard like any other chip.
- Serif headlines look beautiful but can feel slow; we kept body type in Inter to keep scanability in long lists (logs, file trees, blueprint JSON).
