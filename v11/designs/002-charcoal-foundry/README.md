# 002 · Charcoal Foundry

## Thesis

A heavy iron foundry at dusk. The entire chrome reads as one matte slab of charcoal metal — rail `#0E0E0E`, pane `#141413`, iframe area `#0A0A0A` — separated only by a single 1 px hairline `#222` between rail and pane. Mona Sans (Wide cut at 115–125% stretch) carries the foundry's industrial voice; the same face thinned to Regular drives the body. One amber filament (`#E08A2C`) sits on the saving pill and the active dock's 2 px left bar. **Nowhere else.** The corner site widget is a soft-edged charcoal lozenge with one tiny ember-amber dot, the only glow at the bottom of the screen.

## Why is the iframe the loudest object on the screen?

Because the chrome is dim matte black metal with a single warm filament — when the iframe renders content, it's the only place light actually escapes.

## What is locked vs. what is explored

**Locked**: the v7 #010 IA (quiet rail · single swap pane · slim capsule · corner widget · library overlay · mobile mirror), five dock buttons, top-capsule affordance count, 5-dock pane arrangement, mobile flip to bottom bar at 390 × 844.

**Explored**: the small-caps two-letter ligature treatment for the rail (Si / Mn / Bp / Db / Lg) extended into the pane (the six start-route rows use the same two-letter vocabulary — VW PR GB GH BP IZ). Library blueprint cards drop their thumbnails entirely; each card carries only number, title, description, tag. Buttons are flat slabs, not shaped — colour is not used to disambiguate hierarchy.

## Round-2 revisions

Five concrete fixes applied after critique:

1. **Mona Sans Wide is now actually loading wide.** The Google Fonts URL now requests the `wdth` axis (`Mona+Sans:ital,wdth,wght@0,75..125,400..700;…`). The previous request omitted `wdth`, so every `font-stretch:115%` / `125%` rule was silently ignored. The rail roundels and headlines now genuinely carry the foundry's industrial proportions.
2. **Rail silhouettes are now distinct.** Each dock is a stamped roundel with ONE dominant first-letter — **S** · **M** · **B** · **D** · **L** — and a tiny subscript partner glyph. The five capital silhouettes diverge fundamentally (S curl, M zigzag, B double-bowl, D single-bowl, L right-angle), solving the Forest-Botanical squint test (lead's Solution C). The active amber bar is now 3 px (was 2 px) for peripheral readability.
3. **Identity mark `P` reads as a header.** It is now italic Mona Sans 700 at 19 px, set distinctly in kind from the dock roundels so the eye reads "logo · five marks" not "six marks".
4. **`font-stretch:125%` is now scoped to rail + identity + h1/h3/h4 only.** Removed from body, pgtitle, save-pill, eyebrow, toolbar buttons, tags, db tables, blueprint card marks, etc. — fifteen sprayed declarations stripped. Body sits at 100% as the critic requested.
5. **Removed explainer chrome.** The `Esc to close · ⌘K · switch dock` shortcut floater in the Sites pane-foot is gone (constraint #10 forbids shortcut floaters). The `Five tools on the rail · settings is one of them` explainer is gone. The `F` keycap chip next to Fullscreen is gone (the button is its own affordance). Pane width was narrowed: `wide` is now 440 px (was 520), `wider` is 500 px (was 600), so the iframe stays the largest object in panels B–H.

Also: the explainer chip overlays (`panel-label` / `panel-note`) inside the desktop frame are gone — they now sit *above* the panel as a clean caption row, never covering the topstrip or rail. A new Panel Ks renders all four save-pill states side-by-side so the tonal vocabulary is provable.

## Trade-offs

The discipline of a single amber means the saving-pill cycle (Unsaved → Saving → Saved → Stale) leans on muted ink-tinted indicator dots rather than four distinct hues. We accept this — the user already knows which cycle state is which from the word; the dot is confirmation, not identification. The roundel rail trades visual recognition speed for the foundry idiom — a user accustomed to icons may need one beat longer to learn S/M/B/D/L, but the five silhouettes are now genuinely distinguishable in peripheral vision, which the previous two-letter pairs failed to deliver. The other trade-off: removing thumbnails from blueprint cards costs first-glance discoverability for a user browsing by visual; we bet that title + tag gives a faster scan once the user knows the catalogue.
