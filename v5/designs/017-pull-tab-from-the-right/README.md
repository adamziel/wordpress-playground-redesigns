# 017 — Pull-tab from the right

## Thesis
A literal **24px pull-tab** clings to the right edge of the iframe at idle — the only door to Site Manager. Drag it (or click; or press `⌘\`) and **one** pane slides in. It snaps at **25 / 50 / 75 %**. Inside the pane is a single 56px icon rail that swaps the pane's content between six modes — **Sites · Settings · Files · Blueprint · Database · Logs** — and nothing else. No left sidebar, no right drawer, no popovers, no info-notice mini-buttons. One pane, one rail, three detents. The iframe is the document at all times; the rail moves with the pane so the snap-indicator dots on its track also serve as a "where am I" gauge. The same gesture and the same pane exist at 1440×900 and 390×844 — desktop is a wider phone.

## What was merged, removed, and why
The three settings doors (top-bar popover, Site-Manager Settings tab, "Save site locally" info notice) collapse into **one mode** (Settings) inside the pane. The five Site-Manager tabs become five of six rail icons; the sixth (Sites) absorbs the entire Saved-Playgrounds launcher — six new-playground sources, your saved sites, and the 43-blueprint gallery — *all formerly a separate sub-screen*. To prevent the launcher from becoming a long stacked drawer (the v5 critic flagged this in review #002), the Sites mode uses **sticky sub-tabs** (Start · Yours · Gallery) so any section is one click away even at the 25% peek detent. The top bar shrinks to 44px and six chips: WP mark · refresh · address bar · save-state name-pill · fullscreen-iframe · overflow-`⋯`. **Export to GitHub PR** and **Download .zip** live in the overflow menu (shown open in State A so the affordance is verifiable). The destructive "Apply Settings & Reset" is no longer a small red banner — it's a confirm sheet with a diff and a typed-phrase ("reset coffee-shop"). The save-state lives **in** the name pill (amber pip = unsaved, green pip = saved); clicking the pill is also the Save verb — eliminating the parallel "Save" button. Fullscreen iframe is `F` (chrome hides; Esc exits).

## Trade-offs
A literal physical pull-tab requires that users notice a 24px rail. We over-correct: the rail has a visible grip, three permanent snap dots on its track, and a contextual hint chip ("Drag left or click · ⌘\\") in the idle state. The hint chip is the **expansion-gesture-as-first-class-element** lesson the v5 critic taught us in review #001 — the morph is not hidden, it's labelled. The 25% peek detent is genuinely tight for Files and Blueprint modes — those default to the 50% detent on first open and remember per-mode. Database fits comfortably at 50% because its two columns are narrow. The other genuine cost: at 75%, the iframe is reduced to ~360px (a 25%-wide sliver) — fine for blueprint authoring (you're not interacting with the site) but cramped for any mode where you'd want to *see* the site while working. Mitigation: the snap dots are always-visible reminders, and pressing the active dot toggles back to the previous detent in one click. The bet: one disciplined gesture beats five competing surfaces.

## Affordance count at idle
**6 of 8.** Refresh · address-bar · name-pill (= save-state + Save) · fullscreen-iframe · overflow-`⋯` · pull-tab rail. Everything else — the five Site-Manager modes, the six new-playground sources, the 43-blueprint gallery, exports, the file tree, the database — lives behind the pull-tab.

## Hard-requirement checklist
- [x] All five Site-Manager modes shown with real content (Settings · Files · Blueprint · Database · Logs).
- [x] All six "Start a new Playground" sources visible (Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip).
- [x] 43-blueprint gallery with search-input, 10-chip filter row, and 18 rendered cards (≥ 16).
- [x] Overflow menu surfaces both **Export to GitHub PR** and **Download .zip** (and Import .zip).
- [x] Unsaved → Saved name-pill transition visible (amber pip in States A/D · green pip in States B/C/E).
- [x] Three+ states: working session (A), booting (D), launcher/library (C), plus Files (E), Blueprint (E), Database (E), confirm sheet (B).
- [x] 4 saved playgrounds in mobile Sites/Yours view; real blueprint JSON (7 steps including `installTheme`, `installPlugin`, `importWxr`, `runSql`, `setSiteOptions`, `updateUserMeta`); 11 realistic PHP log lines including PHP Notice + PHP Deprecated + PHP Fatal + WASM-GD shim retry.
- [x] 1440×900 desktop and 390×844 mobile both rendered.
- [x] Fullscreen iframe toggle present in the top bar AND in the overflow menu (with `F` keybinding shown); Esc exits.
- [x] Single self-contained `index.html` with CDN Inter, JetBrains Mono, and Lucide icons.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5  (6 visible — counted in the banner at the top of the design. Overflow menu shown open to verify Export/Download are *inside* it, not in the count.)
[x] iframe primary + fullscreen toggle?     Score: 5/5  (iframe is full-bleed at idle; pull-tab only takes 24px. Fullscreen via F key, button in top bar, and overflow menu — Esc exits.)
[x] One door per feature (no duplicates)?   Score: 5/5  (Settings: one rail icon. Files: one. Launcher: one (Sites). Save: one (the name pill). Exports: one (overflow). Triple-entry-point obliterated.)
[x] One secondary surface (not many)?       Score: 5/5  (Literally one pane. Six modes swap inside it. No sidebars, no drawers, no popovers besides the overflow.)
[x] Direction expressed strongly?           Score: 5/5  (The pull-tab is the design — visible at every state, snap dots track the detent, the gesture is annotated in State A, all three detents (25/50/75) demonstrated across States D/B/C respectively.)
[x] Mobile feels like wider-mobile desktop? Score: 4/5  (Same pane, same icon rail, same sub-tabs, same snap-dot track at 390. Mobile detents are 35/70/92 instead of 25/50/75 — a necessary scale, not a different design. -1 because the mobile overflow doesn't show the menu open the way desktop A does — only the rail is shown.)
[x] Critique pass on glass/ambient use?     Score: 4/5  (Only one frosted surface: the confirm-sheet backdrop. It earns its keep — the blur+dim communicates "the running site is paused behind this decision." No decorative glass. -1 because the top bar uses a `backdrop-filter: blur(12px)` over a 0.96-opaque white — barely noticeable and could be flat without loss.)
```

All rows ≥ 4. Weakest area: the mobile overflow menu isn't shown open the way desktop State A is — a future iteration would add a mobile equivalent. Strongest area: the single-pane / single-door discipline.
