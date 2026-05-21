# 035 — Three-layer depth

## Thesis
Information hierarchy is rendered as literal z-depth. Three glass layers, each with a different blur strength and elevation, encode the IA: **L0** is the iframe (sharp, always-on); **L1** is a single slim capsule with the seven persistent affordances (8 px blur, the lightest); **L2** is the Inspector — the Site Manager pane with its five tabs (18 px blur, materializes on demand and pushes L0 back); **L3** is the Library — the launcher with all six sources, three saved sites, and the 43-blueprint gallery (36 px blur, the deepest at rest, but rises to the foreground when summoned). The right-edge depth gauge — four pips — is a passive status indicator that shows you which layers are currently stacked. This is the direction's whole answer: glass is not decoration here, it is the navigation primitive. Heavier blur = further away = where you came from. Sharper layer = closer = what you're doing now.

## What I merged / removed and why
The three settings entry points (popover, sidebar tab, info notice) collapse into **one door**: the L2 Inspector's Settings tab. The info notice still exists, but only inside that tab. WP Admin and Homepage move from the capsule into the Inspector header — they're contextual to the *current* site, not global housekeeping (review #002 lesson). Export-to-GitHub and Download-.zip both live in the kebab menu on the capsule, sorted Frequent → Export → Help → Danger per review #013. The 43-blueprint gallery isn't a separate sub-screen — it's a section *inside* the L3 Library, with the full 10-category chip row + a categories nav rail (one door for "find a site"). The destructive Apply+Reset is no longer a small red banner — it raises a confirm sheet at L4 (modal shade) that shows the version diff and requires the user to type the playground name back. The "Save" verb is collapsed to the name pill, visible only when the state is unsaved; when saved the verb hides entirely, leaving only the green dot + name (one primary verb, never duplicated). The Library section uses a real nav rail (Library / Categories) instead of stacking three vertical sections in one drawer — review #002's exact warning.

## Trade-offs
Heavy backdrop blur costs GPU; in production a CSS feature query would fall back to a flat tinted surface where `backdrop-filter` is unsupported. The depth gauge is decorative-status, not interactive — counted as the 8th idle element but it doesn't add a door, only a label; without it the design's signature is invisible (review #010's exact warning about passive status indicators). The capsule's seven affordances are a tight budget: I considered folding Fullscreen into the kebab to reach 6, but the brief is explicit that fullscreen must be one-key/one-click — so it stays on the capsule (review #013's exact lesson). The Inspector pane is fixed-width (1100 px on desktop) and not resizable; a power-user who wants Files at full width gets one click of friction. Glass-on-glass legibility was a real risk — I countered it by making L1 the *least* blurred and tinting it whitest, so it stays sharp on top of L2 and L3 without competing visually. Mobile rotates the metaphor 90° (capsule bottom, inspector top sheet, library overlay) but keeps the same seven affordances and the same depth gauge in the top-right corner — wider-mobile-desktop, not a fallback.

## Lessons applied from earlier v5 reviews
- **Review #001** — "show the morph as a first-class state." Panels A → B → C demonstrate L0's recede explicitly: scale 1 → 0.97 → 0.92, blur 0 → 2px → 6px. The depth transition is annotated, not hidden.
- **Review #002** — "don't stack three sections in one drawer." The Library has a real nav rail (Library / Categories) and clearly delineated sections with separators.
- **Review #006** — "don't smuggle in a clever idea from another direction." No Cmd+K palette, no spatial dock, no traffic-light dots. The design is *only* three depth layers + one stage + a confirm shade.
- **Review #010** — "give passive status indicators an icon at idle." The depth gauge has typographic labels (L0/L1/L2/L3) at idle, not just abstract pips — readable even before hover.
- **Review #013** — "expose fullscreen visibly on the capsule." Fullscreen is its own icon (`maximize`), not buried in the kebab. The kebab is frequency-sorted (Frequent → Export → Help → Danger).
- **Review #018** — "cite reviews by number." Done here and in the anatomy diagram (Panel I).

## Self-critique

```
[x] Affordance count at idle ≤ 8?           Score: 4/5  (7 chrome + 1 ambient depth gauge = 8; gauge is status-only, not a door)
[x] iframe primary + fullscreen toggle?     Score: 5/5  (L0 is 96% of canvas at idle; F or capsule icon → 100%; Esc pill visible in panel G)
[x] One door per feature (no duplicates)?   Score: 5/5  (Settings only via L2/Settings tab; export only via kebab; URL only on capsule; info-notice only inside Settings)
[x] One secondary surface (not many)?       Score: 5/5  (L2 is the only secondary surface; its 5 tabs swap content inside the same pane)
[x] Direction expressed strongly?           Score: 5/5  (depth is literally the IA — three quantified blur strengths, three z-indexes, a visible gauge for it)
[x] Mobile feels like wider-mobile desktop? Score: 4/5  (same 7 affordances, same depth model, same gauge; rotated 90° because thumb position differs — not a different IA)
[x] Critique pass on glass/ambient use?     Score: 5/5  (each blur strength has a quantified purpose: encodes z-order; no decorative frost anywhere; named in Panel I anatomy)
```
