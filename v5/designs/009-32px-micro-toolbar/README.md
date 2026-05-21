# 009 — 32px Micro-toolbar Only

## Thesis
The entire persistent chrome of WordPress Playground is one 32-pixel strip across the top — WP mark, refresh, URL pill, name/save chip, Sites chip, Site Manager toggle, fullscreen, menu kebab. Nothing else lives on screen at idle. Every other surface (Settings, Files, Blueprint, Database, Logs, the launcher, the 43-blueprint gallery) is summoned as a contextual sheet that flies in over the iframe and dismisses with Esc. The iframe gets ~96% of the frame height when idle and 100% in fullscreen. This refines v1 #64 (DevTools) and #15 (Win11 Settings) by halving the chrome budget and giving the WordPress site the primary status it deserves.

## What I merged / removed and why
I collapsed the three settings entry points (popover, sidebar tab, info notice) into a **single canonical home**: the Settings tab inside the Site Manager sheet. The info-notice "Save site locally" still appears, but it now lives only at the top of that one tab — not duplicated in three places. The Saved Playgrounds drawer and the "Start a new Playground" section and the "Browse all 43 blueprints" sub-screen all consolidate into **one Sites sheet** with three tabs (Saved, Start new, Blueprints) and a footer shortcut into the full gallery overlay. The Site Manager itself uses a **segmented control** rather than five sidebars — that's the v5 "one secondary surface, swaps content" rule, taken from #55. I also promoted the Apply+Reset destructive action from a small red banner to a **typed-phrase confirm modal** (you must type the playground name to proceed). The address bar accepts URL schemes (`playground:`, `blueprint:`, `pr:`, `gh:`, `sqlite:`, `log:`), folding navigation, PR boot, GitHub boot, and Blueprint URL boot into one input — a single combobox door, not four.

## Trade-offs
Cutting chrome to 32px means *every* secondary action requires one click to summon. Power users who keep the Site Manager open all day get a slimmer 24px iconbtn cluster inside the sheet — but they still pay the open-cost once per session. The kebab menu carries a lot (rename, duplicate, export GitHub PR, download .zip, copy blueprint URL, command palette, docs, delete) which risks being a "junk drawer", so it's sectioned with labels (Quick / This playground / Export / App) rather than a flat list. The 32px height pushes typography to 11–12px in the toolbar, which is tight but readable in Inter — and matches how Chrome's omnibox handles density. The glass on the toolbar earns its keep: it lets the WordPress theme color tint the chrome (ambient color), which is the only glass surface in the design — every sheet is solid white with strong borders, because frosted decoration without purpose is forbidden in v5.

## Self-critique

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  (7 of 8 budget used; WP mark decorative)
[x] iframe primary + fullscreen toggle?     Score: 5/5  (scene 8 hides chrome entirely; F + Esc)
[x] One door per feature (no duplicates)?   Score: 4/5  (settings unified; menu kebab is a junk drawer but sectioned)
[x] One secondary surface (not many)?       Score: 5/5  (Site Manager sheet with segmented control swaps Settings/Files/BP/DB/Logs)
[x] Direction expressed strongly?           Score: 5/5  (32px is literal — the whole concept lives there)
[x] Mobile feels like wider-mobile desktop? Score: 4/5  (same toolbar, same sheets — URL scheme drops at 390 to gain pixels)
[x] Critique pass on glass/ambient use?     Score: 4/5  (glass only on the topbar where it serves ambient tint; sheets are solid)
```
