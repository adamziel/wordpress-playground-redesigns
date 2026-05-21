# v5 / 040 — Cmd+K × Glass

**Parent winners:** v1 #38 (Glassmorphism) + v1 #14/#15 (settings restraint) + v1 #64 (DevTools-slim chrome).
**Axis pushed:** every panel, menu, and editor in WordPress Playground is *the same content-aware frosted glass surface* summoned by ⌘K. The iframe is the only opaque object in the entire UI.

## Thesis

Where v5 #015 made Cmd+K the UI on a solid dark palette, #040 makes the palette itself **glass over the iframe** — and the glass earns its keep through three named functions: (1) **three-layer depth** as information hierarchy (iframe = layer 0 unblurred, scrim = layer 1 at 8px blur, palette = layer 2 at 40px blur), (2) **content-aware tint** sampling the iframe's dominant color so warm sites get warm glass and cool sites get cool glass, and (3) **trust signal** — you can still see the cafe / news / theme through the blur, so opening a sheet does not feel like navigating away. At idle: two glass capsules over the iframe. A status capsule (top-center) embedding name + saved-state LED + ⌘K hint + chevron, and a fullscreen pill (top-right). Two surfaces, five readable cues, zero buttons-as-jewelry. ⌘K (or tap the capsule) opens the palette — every other feature lives one keystroke or one mode-chip tap inside.

## What I merged / removed / why

- **Three settings doors → one `/settings` mode** rendered as a sentence editor ("This playground runs **WordPress 6.7** on **PHP 8.3** in **English (US)**…"). The popover, the Site-Manager Settings tab, and the inline info notice all collapse to a single English sentence. The "Save site locally" notice becomes the always-on amber LED on the status capsule.
- **Site Manager sidebar → five palette modes** (`/settings`, `/files`, `/blueprint`, `/db`, `/logs`). WP Admin / Homepage / Refresh / Save / Rename become first-class palette commands with `G A` / `G H` / `R` / `⌘ S` / `⌘ ⇧ R` shortcuts. Export to GitHub PR and Download .zip live as palette commands.
- **Saved-Playgrounds drawer → `/sites`** (sources + featured + saved) and **`/blueprints`** (the full 43-card gallery). This applies the **lesson from review #015**: /new and /blueprints had soft overlap; here `/sites` is for *starting* (6 sources + 5 featured + 4 saved) and `/blueprints` is the *catalog* with all 10 category chips and 18 of 43 cards visible.
- **Mode-chip strip under the palette input** (lesson from review #015): always-visible tappable chips `[root] [/sites] [/blueprints] [/settings] [/files] [/blueprint] [/db] [/logs]` so mobile users (who can't ⌘K) and new desktop users see all the modes without typing slashes. Slash-typing still works for power users — same input field.
- **Apply & Reset escalation** beyond the brief's "red banner is not enough": typed-phrase confirm requiring the user to type the playground name, an explicit diff showing what changes, and an *auto-downloaded zip* before wiping. Irreversible-but-recoverable.
- **Fullscreen** is `F` key or the right-corner pill. Even the two idle capsules disappear; only a faint "Esc exit fullscreen" hint at top-right. Closes v1 #15's "needs a good way to handle full-sized Playground" gap.
- **Refresh shortcut clarity** (lesson from review #015): refresh is bare `R` (no Cmd) — browser-level ⌘R is left intact so users still have an escape hatch. Documented inline in the palette row.

## Trade-offs

- **Discoverability tax.** The status capsule is the only loud thing at idle; a returning user sees their playground name, a saved-state cue, and a literal "press ⌘K for anything" string. But a brand-new visitor must still cross one ⌘K threshold. Mitigation: the capsule is centered top, tappable, and the chevron disclosure makes it obviously interactive. The mode-chip strip inside the palette removes the second discoverability cliff (no need to know slash-commands).
- **Glass on warm content.** Backdrop blur with low base opacity can hurt contrast over busy or photographic iframes. The content-aware tint compensates by darkening the base RGB to ~0.42 alpha + saturating to 170% — the palette is still readable on the cream cafe, the dark Gaming News, and the sage TT5 demo (see panels A, K3). For accessibility, a user-pref-respecting `prefers-reduced-transparency` would flatten to a solid surface in production.
- **One-door vs convenience.** /sites contains 5 featured blueprints AND a link to /blueprints. Some users may want to jump from /sites direct to /blueprints/gutenberg — that's a chip tap. The seam is real but mitigated; the alternative (one giant /sites mode with sub-tabs for Sources / Featured / All 43 / Saved) would have made each tab too thin. /sites = start, /blueprints = catalog. Two doors at most.
- **Lucide is the icon set.** WordPress and GitHub aren't in the free Lucide build; I substituted a hand-drawn globe for "vanilla WP" and `git-branch` for "Export to GitHub PR". A production build would use brand SVGs.

## Lessons applied from earlier v5 reviews

- **Review #015:** mode-chip strip directly under the palette input (mobile parity), and the soft /new ↔ /blueprints overlap is split into /sites (start) vs /blueprints (catalog) with a clear "tap /blueprints for all" link. Cmd+R conflict resolved by binding refresh to bare `R`.
- **Review #016:** every glass element that is *touchable* has a chevron, hover state, or `title` tooltip; the status capsule is unambiguously interactive. Decorative elements (the LED, the separator, the "press ⌘K" hint text) are not styled like buttons.
- **Review #017:** lessons cited explicitly here, and the implementing elements labeled in the design.
- **Review #030:** the Apply & Reset typed-phrase confirm is rendered as a dedicated state (panel F), not merely promised in prose.

## States rendered (12)

A. Idle (Coffee Shop, warm-tint glass)
B. Palette / root — 15 commands across 3 sections + danger row, mode-chip strip
C. /sites — 6 sources, 5 featured blueprints, 4 saved playgrounds
D. /blueprints — 18 of 43 cards, all 10 category chips, search input
E. /settings — sentence editor with 5 inline-editable fragments
F. Apply & Reset confirm — diff + typed-phrase + auto-zip safety net
G. /files — tree (3 levels deep) + 22-line functions.php editor
H. /blueprint — real Coffee Shop bundle (7 steps) + assets sidebar
I. /db — 12 SQLite tables + wp_posts 6 rows + early-access notice
J. /logs — 3 requests, 1 fatal stack, level filters, search
K1. Booting — only the amber state pill, full boot log
K2. Fullscreen — zero chrome except faint Esc hint
K3. Cool-tint demo — Gaming News iframe with adapted glass
L1–L3. Mobile (390×844): idle, palette bottom-dock, /blueprints

## Self-critique scores

```
[x] Affordance count at idle ≤ 8?           Score: 5/5   (2 surfaces / 5 cues counted; both surfaces are glass capsules — see annotation in panel A)
[x] iframe primary + fullscreen toggle?     Score: 5/5   (iframe is the only opaque thing; F key + corner pill; panel K2 shows zero-chrome fullscreen)
[x] One door per feature (no duplicates)?   Score: 4/5   (settings/files/blueprint/db/logs each have exactly one home — /sites and /blueprints share blueprints content but are deliberately split into start-vs-catalog with explicit cross-link)
[x] One secondary surface (not many)?       Score: 5/5   (one palette container; only the body swaps; same React-component-style architecture across all 7 modes)
[x] Direction expressed strongly?           Score: 5/5   (Cmd+K IS the UI AND every visible chrome is glass — the direction's two halves are inseparable in this implementation)
[x] Mobile feels like wider-mobile desktop? Score: 5/5   (same palette React component; bottom-dock vs centered card is the only delta; mode chips are the primary nav on mobile since ⌘ is unavailable)
[x] Critique pass on glass/ambient use?     Score: 5/5   (glass earns its keep through 3 named functions: depth hierarchy / content-aware tint / trust signal — demonstrated with warm + cool boots in K3; not decorative)
```

No row scored ≤ 2; no revision needed.

## Affordance count audit (idle, state A)

Counting *every visible interactive thing* the user can touch with the iframe loaded and no panel open:

1. Status capsule (whole capsule is tappable to open palette) — 1
2. Status-capsule chevron (visual disclosure cue, same target as #1, doesn't count separately)
3. Fullscreen pill (tap to enter fullscreen) — 1

**Total: 2 always-visible affordances.** The capsule contains 4 readable *cues* (name, LED, ⌘K hint, chevron) but only 1 tap target. Well under the ≤ 8 ceiling.
