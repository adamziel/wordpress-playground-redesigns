# 013 — One Floating Capsule

## Thesis
All persistent chrome of WordPress Playground collapses into a single rounded capsule that floats above the iframe like a HUD: refresh, URL, save-state name pill, and a menu kebab. **Five affordances. That's the entire chrome.** Everything else — Site Manager (Settings/Files/Blueprint/Database/Logs), Launcher with six start sources, the 43-blueprint gallery, Apply+Reset, export, fullscreen — is summoned from the menu and renders into **one swappable Stage** (a centered sheet on desktop, a bottom sheet on mobile). The iframe is never reflowed; the Stage overlays it. The capsule shape itself is the design's literal expression of the direction — one floating capsule, nothing else.

## What I merged / removed and why
The three settings entry points (popover, sidebar tab, info-notice) become a **single canonical home**: the Settings tab inside the Site Manager view of the Stage. The three sites-related surfaces (Saved Playgrounds dropdown, Start-a-new section, Browse-43-blueprints sub-screen) become the **three tabs of the Stage's segmented control** — Launcher, Site Manager, Blueprints — so the same Stage element with the same X/Esc behavior serves every secondary surface. The "Apply Settings & Reset" destructive action is promoted from a red banner to a **typed-phrase confirm dialog** that requires typing the playground's name; an auto-snapshot is captured first so the action is irreversible-but-recoverable. The save-state pill is the single canonical save indicator — green (saved) / blue (saving) / amber (unsaved, with inline SAVE CTA) — collapsing the v1 "small text Save button" failure into a deliberate, color-coded element that is *also* the save action. WP Admin and Homepage jumps remain reachable from both the Stage header (real buttons) and the menu (keyboard shortcuts A and H).

## Trade-offs
Cutting persistent chrome to five affordances means **every secondary action costs one click** to summon — power users who keep Site Manager open all day pay an open-cost once per session. The kebab carries a lot, but it's sectioned (This playground / Sites & blueprints / Export / App) rather than a flat junk drawer. The capsule's glass earns its keep: it's the only frosted surface in the design and it serves a real purpose — letting the WordPress theme color tint the chrome so the capsule reads as overlaying the document, not chrome around it. Every other surface (Stage sheets, dialogs) is solid white with strong borders, because frosted decoration without purpose is forbidden in v5. The capsule's 720px max-width on a 1440 viewport leaves the iframe genuinely dominant; combined with the explicit fullscreen toggle (F/Esc), this closes the v1 #15 Settings gap. Mobile is "wider mobile for desktop" — identical capsule, identical Stage, the name pill folds into the Stage header at 390px to free up touch space. Resisting the temptation to import other v1 winners (no Figma spatial dock, no DevTools status row, no Stage Manager thumbnails) — the direction is "one capsule," and one capsule is what shipped.

## Self-critique

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  (5 affordances on desktop; 4 on mobile)
[x] iframe primary + fullscreen toggle?     Score: 5/5  (F to enter, Esc to exit; FS pill visible; Stage overlays, never reflows)
[x] One door per feature (no duplicates)?   Score: 4/5  (settings unified in Settings tab; save state unified in name pill; WP Admin/Homepage in Stage header and menu — same surface, one door but two affordances by shortcut)
[x] One secondary surface (not many)?       Score: 5/5  (single Stage element; segmented control swaps Launcher / Site-Manager / Blueprints; Site-Manager sub-tabs are a rail inside the same Stage)
[x] Direction expressed strongly?           Score: 5/5  (the capsule is literal — one rounded pill is the *entire* persistent chrome; no compromises like a status bar or peek dock)
[x] Mobile feels like wider-mobile desktop? Score: 4/5  (same capsule, same Stage, same Site-Manager rail rotated horizontal; name pill is the one component that drops on 390px)
[x] Critique pass on glass/ambient use?     Score: 4/5  (only the capsule and the menu dropdown are glass; all Stage sheets are solid white; glass earns its keep by letting theme color tint the floating chrome)
```
