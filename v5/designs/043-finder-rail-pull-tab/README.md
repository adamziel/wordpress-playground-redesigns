# 043 — Finder rail × Pull-tab

## Thesis
Two edges, two purposes. A **Finder-style left rail** lists every saved playground as a literal item — Active / Favorites / Recent, each with a favicon-thumb, name, and a runtime meta line — so the user navigates *between* sites the same way they navigate between folders in macOS Finder. A single **iPad-style pull-tab on the right edge** is the only door to the active site's Site Manager; pulling it left snaps the pane to 30 / 50 / 70 % and one segmented control inside swaps the five Site-Manager modes (Settings · Files · Blueprint · Database · Logs). The iframe is the document between the rail and the tab. Your sites are a *place*; your tools are a *drawer*. The top bar carries five tiny chrome elements (refresh, URL, save-state pill, fullscreen, kebab) — that's it. Idle affordance count is **7 of 8**.

## What I merged / removed and why
The three settings doors (top-bar popover, Site-Manager Settings tab, "Save site locally" info-notice) collapse to **one**: the pull-tab → Settings mode. The info-notice is replaced by two cleaner cues — the amber pip in the name pill (status) and a pinned *Unsaved Playground* card at the top of the Finder rail in State E (action + context). The "Saved Playgrounds" launcher and the six "Start a new Playground" sources collapse to **one launcher** that *replaces the iframe stage* when the user clicks the rail's footer `+ New Playground` button (State E) — there is exactly one door to creating a new site, and it sits at the bottom of the surface that holds existing ones (so creating and navigating are co-located). The 43-blueprint gallery is *inside* that same launcher: search input, all 10 category chips, 18 cards visible. **Export to GitHub PR** and **Download .zip** live in the top-bar kebab (shown open in State D so the affordance is verifiable); **Import .zip** is also there, plus Copy blueprint URL. Apply &amp; Reset is no longer a small red banner — it's a confirm sheet with a versions-diff and a typed-phrase ("type `coffee-shop` to confirm"), demonstrated in State B. The Save verb and the save-state indicator are merged into one element: the name pill. Click it = Save; its color = its state (amber unsaved / green saved). Fullscreen iframe is `F` (or the maximize button, or the kebab); Esc exits via a pill in the top-right corner (State I).

## Trade-offs
The Finder rail costs 224 px of horizontal real-estate at idle — a real budget item. I spend it because the direction *demands* spatial-list navigation between saved playgrounds; collapsing the rail to abstract icons (like sibling #018) erases the whole metaphor. The iframe still gets 1192 px wide at idle on desktop (83 %), and the rail can be hidden via `⌘B` (or the kebab) for users who want max iframe width — that toggle is documented in the menu. On mobile the rail becomes a 28-px peek strip on the left edge with eight favicon tiles, and is summoned in full as a bottom sheet via the hamburger pattern (or by tapping the strip); the right pull-tab becomes a bottom-edge pull-tab — the *gesture* is preserved across breakpoints (perpendicular to the long axis), so it feels like a wider mobile, not a different design. Database management's "early access" surface is genuinely an oddity inside the otherwise-stable Site Manager, but I keep the notice prominent in the pane head — the feature is in §2 of the v1 brief and can't be hidden. The biggest honest cost: the pull-tab at 70 % leaves only 224 px of iframe visible on desktop (a sliver), so I default Files / Blueprint / Logs to the 50 % detent and let users opt into 70 % when they want pane-dominant work. The bet: a literal place for sites + a literal drawer for tools is easier to teach than any verb-rail abstraction.

## Lessons applied from earlier v5 reviews
- **Review #001 — "make the morph a first-class state."** The pull-tab is annotated in State A with the visible "Drag left · click · ⌘\\" hint chip; snap dots are always-on at 30/50/70; the grip is real and labelled "Site Manager" vertically. No hidden gesture.
- **Review #002 — "no stacked sections inside one drawer."** The Launcher (State E) uses sectioned content with explicit labels (Sources · Browse blueprints); the Site Manager pane uses a single 5-way mode bar — never two drawers nested.
- **Review #006 — "don't import clever ideas from a different direction that undermine restraint."** I did not bolt on glass, a command palette, a spatial canvas, or a Stage Manager dock. The design is literally one rail + one pull-tab + one top bar.
- **Review #007 — "destructive actions should be more discoverable, not less."** Apply &amp; Reset opens a typed-phrase confirm sheet (State B) — the most prominent confirmation in the design.
- **Review #017 sibling distinction** — That design uses a single right-side pane that also hosts a "Sites" mode (saved playgrounds inside the pane). Mine separates them: saved sites get their own persistent left rail (their *place*); the right pane hosts only Site-Manager tools. Two edges, two purposes — no soft overlap.
- **Review #018 sibling distinction** — That design uses a 56-px monochrome rail of three abstract icons (Sites / Manager / Blueprints). Mine uses a 224-px rail of literal *items* (your saved playgrounds), so the rail's role is content, not navigation-by-verb.
- **Review #031 sibling distinction** — That design's left gutter is a strip of verbs (Refresh, Save, Sites, Settings). Mine has zero verbs on the left edge; verbs live in the slim top bar and the right pull-tab. The rail is purely sites.

## Hard-requirement checklist
- [x] All five Site-Manager modes rendered at high fidelity: Settings (B), Files (C), Blueprint (D), Database (F), Logs (G).
- [x] All six "Start a new Playground" sources visible in the launcher (E): Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip.
- [x] 43-blueprint gallery with search input, 10 category chips, and **18** cards rendered (≥ 16).
- [x] Overflow menu (shown open in State D, and on mobile in D) surfaces **Export to GitHub PR**, **Download .zip**, **Import .zip**, plus Copy blueprint URL.
- [x] Unsaved → Saved visible: State E shows the amber name pill + Unsaved card pinned in the rail; States A/B/C/D/F/G show the green saved pip; a toast in State G shows the moment of save.
- [x] ≥ 3 demonstrated states. Mine: A (idle working), B (Settings + Apply&Reset confirm), C (Files), D (Blueprint + overflow), E (Launcher), F (Database), G (Logs + saved toast), H (Booting, mobile), I (Fullscreen, mobile). **Nine** states.
- [x] **9** saved playgrounds in the Finder rail across States A–G; real blueprint JSON with 7 steps (login, installTheme, installPlugin, importWxr, runSql, setSiteOptions, updateUserMeta); 14 realistic PHP log lines incl. PHP Notice, PHP Deprecated, PHP Warning, PHP Fatal, WASM-GD shim retries, WP_Error responses.
- [x] 1440 × 900 desktop + 390 × 844 mobile rendered.
- [x] Explicit fullscreen iframe mode (State I) with Esc-to-exit pill; reachable from the top-bar maximize button, the kebab's `Fullscreen iframe — F`, and the `F` keybinding.
- [x] Single self-contained `index.html` with CDN Inter, JetBrains Mono, and Lucide icons.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5
    7 visible — counted in the banner. Top bar: refresh, URL, save-pill, fullscreen, kebab (5).
    Left rail and right pull-tab (2). Rail items + pane modes are content, not chrome.

[x] iframe primary + fullscreen toggle?     Score: 4/5
    iframe occupies 83% of width at idle (1192 of 1440); pull-tab is 24px.
    True fullscreen demonstrated in State I (mobile) — every chrome element hidden,
    Esc pill in the corner. Triggered by F key, the maximize button, or the kebab item.
    -1 because at 70% pane detent the iframe shrinks to a 224px sliver — necessary for
    pane-dominant work but a genuine trade.

[x] One door per feature (no duplicates)?   Score: 5/5
    Settings: only via pull-tab → Settings mode (no popover, no info-notice button).
    New Playground: only via the rail's footer button (no top-bar dropdown).
    Save: only via the name pill (no separate Save button anywhere).
    Site Manager: only via the right pull-tab.
    Exports: only via the kebab.

[x] One secondary surface (not many)?       Score: 5/5
    Exactly one swappable surface — the right pane — hosting all five Site-Manager modes.
    The Finder rail is not a secondary "panel"; it's a persistent sites-list (content),
    much like Finder's sidebar is not a "panel" — it's the catalog of your filesystem.

[x] Direction expressed strongly?           Score: 5/5
    The direction is the literal sum of two metaphors and the design ships both
    unmistakably: a Finder-style left rail of named items + a single iPad-style
    pull-tab on the right edge with snap detents. Neither is decorative; each is
    structural and exclusive of the other's role.

[x] Mobile feels like wider-mobile desktop? Score: 4/5
    Same metaphor rotated 90°: rail collapses to a 28-px left peek strip (still showing
    site favicons in order), pull-tab moves to the bottom edge (one-handed reach), pane
    rises as a bottom sheet with the same 5-mode segmented control. Top bar is the same
    chrome at smaller scale. -1 because mobile loses the rail's text names by default;
    the bottom-sheet expansion (mobile State B) shows them in full, but the always-on
    state shows favicons only — a real concession to 390-px width.

[x] Critique pass on glass/ambient use?     Score: 5/5
    Zero decorative glass. The only translucent surface is the confirm-sheet backdrop
    in State B — and it earns its keep: the blur+dim communicates "the running site is
    paused behind this irreversible decision." The fullscreen Esc pill uses a subtle
    backdrop-blur to remain legible over any iframe background. No frosted top bar, no
    glass rail, no ambient-color tint. The design's restraint is opaque-by-default.
```

Weakest area: the 70%-detent iframe-sliver trade-off (an intentional cost for pane-dominant work). Strongest area: the one-door-per-feature discipline + the literal two-edge metaphor expression. All rows ≥ 4.
