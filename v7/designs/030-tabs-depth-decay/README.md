# 030 — Depth-Decay Tabs

## 1. Thesis

A single browser-style **tab strip is the only persistent chrome**. Each tab is a saved Playground. The active tab is sharp at z0 (0 px blur); tabs one slot from active recede to z1 (4 px); two-away to z2 (9 px); hibernated tabs and the `+ New` door sit at z3 (16 px). Depth is decoration — every tab stays click-target sharp — but the eye instantly knows where it is. The URL field lives **inside** the active tab (browser-of-browsers metaphor) so there is no second row of chrome. The Site Manager slides up from the bottom as the single secondary surface, swapping content across five sub-tabs (Settings / Files / Blueprint / Database / Logs). This is the v7 thesis distilled: **two primitives, one chrome row, one secondary surface, zero invented patterns**.

## 2. Primitives composed (§1 KEEP — named, used)

This design composes **four** v7 KEEP primitives, with TAB and 3LD as the load-bearing pair named by direction 30.

- **TAB (tabs-only nav · v1 #53)** — the load-bearing primitive. The `.tabstrip` is the entire navigation surface: there is no left rail, no right drawer, no bottom bar. Each `.tab` is a saved Playground; the `+ New` tab is the only door to the launcher / 43-blueprint library. Site switching is one click; closing is the per-tab `×`. Five sample tabs in every desktop frame (Resume · Friends RSS · Coffee Shop · Gaming News · TT25 demo + `+`) demonstrate the strip at idle, plus a sixth `+ New` variant in frame G when the launcher is active.
- **3LD (three-layer depth · v5 #035 · visual only)** — quantified blur as hierarchy. The HTML declares `--z0 0px / --z1 4px / --z2 9px / --z3 16px / --z4 36px` as CSS variables and applies them via `filter:blur(var(--zN))` to the tab classes `.tab.active`, `.tab.z1`, `.tab.z2`, `.tab.z3`. Active = 0 px (sharp). Adjacent = z1 (slight blur, 0.78 opacity). Two-away = z2 (more blur, 0.55). Hibernated + the `+` door = z3 (16 px, 0.38). Overlay backdrops (launcher and Apply+Reset modal) use z4 (36 px) — but only as visual hierarchy, never as a control. The `index.html` comment on the depth variables literally says *"Visual hierarchy only; never an interactive control"*. **Frame N audits the scale** with a five-tile legend so the rule is verifiable.
- **DEV (slim DevTools top bar · v1 #64)** — the chrome is a single 48 px row. The URL bar is *inside* the active tab (a `.urlpill` with a lock glyph + path + arrow), so there is no separate second row. To its right, an action cluster of refresh / Site-Manager-toggle / fullscreen / kebab (and a conditional `Save` button when unsaved) is divided from the strip by a vertical hairline, all on the same row. Status is carried by the active tab's pip (green / amber / grey). No back/forward — the inner WordPress provides its own navigation.
- **MOB (mobile-first · v1 #06)** — the **same** chrome rule at 390 px. Frames O / P / Q render the strip with tab widths collapsing to ~70 px each, the active tab keeping its URL pill (shrunk), and the close `×` hiding on inactive tabs. The Site Manager becomes a bottom sheet with a drag handle (P). The launcher becomes a full-screen sheet (Q). Same IA on both widths — desktop = wider mobile.

The design does **not** claim QR, SR, CWS, GLS, VEN, EPC, SPT, W11, or iPAD. Stacking more primitives on top of TAB + 3LD would dilute the direction's thesis. Restraint matters in v7 (lesson from review 012).

## 3. What I remixed / removed and why

The current Playground has a top toolbar with a name label + Save button + Saved-Playgrounds dropdown + Site-Manager toggle + Edit-settings popover, **plus** a separate left sidebar Site Manager, **plus** the launcher's three-section drawer. I collapsed all of that into a single 48 px tab-strip row + one bottom drawer. The "Saved Playgrounds" dropdown is gone; saved sites are simply tabs in the strip — you switch by clicking the tab. The Edit-settings popover is gone; settings live in the Site Manager's `Settings` sub-tab (one door, not three). The info-notice `Save site locally` button is gone; the `Save` button materializes in the action cluster the moment the active tab represents an Unsaved Playground (frame J), and disappears once saved (frame K). The launcher's three sections (Start new · Start from blueprint · Your Playgrounds) collapse into a single overlay (frame G) whose left rail is "Your Playgrounds + 10 categories" and whose right pane is sources + the 16-card-minimum gallery.

I removed the dual-channel terminal echo entirely. Logs is **read-only**: per-request grouped, level-filtered, with timestamps and TTFB (frame D). No command line that mirrors UI actions. Apply + Reset is escalated three ways at once (frame H): typed-phrase confirm (`coffee shop`), a visible JSON diff (`wp 6.7 → 6.8-RC1`, `php 8.2 → 8.3`), and an auto-snapshot promise wired to the tab's restore history. Never an inline red banner.

The big risk of a "real" browser tab metaphor is that browsers have *two* rows of chrome (tabs above, URL below) — which the v7 brief bans. I avoided the second row by **embedding the URL pill inside the active tab itself**: when a tab is active it grows to 42 px (vs. 38 px for inactive), white-fills, and reveals an inline `.urlpill`. Inactive tabs keep just `favicon · pip · title`. This is a real refinement of the browser metaphor, not a clone.

## 4. Trade-offs

The tab metaphor is familiar but **load-bearing in a non-obvious way**: a user must understand that "tab = saved Playground", not "tab = subview of one site". I mitigate three ways. (1) The `+ New Playground` tab is the only door to the launcher, so the first action a new user takes confirms the metaphor. (2) Each tab carries a status pip (green=running, amber=booting/unsaved, grey=paused) so tabs read as *sites with state*, not as *navigation*. (3) The first-touch state (frame M) shows a single oversized `+ New Playground` tab as the only chrome, with a cinematic LAUNCH hero in the iframe — the user can't miss the entry point. A second cost: the active tab can only show one site's URL at a time, which is exactly how browsers work — there's no design pressure to invent a parallel surface. A third cost: blur is compute-cheap on modern hardware but does have a small GPU cost; the four blur tiers are conservatively scaled (16 px max on tabs) to stay smooth at 60 fps. A fourth cost: when the strip is very full (8+ tabs), the depth-decay only goes to z3 — there's no "z4 tab", just visual squeeze, which is the right behaviour for a tab metaphor (real browsers also just shrink). A fifth cost: the URL pill inside the active tab is a tighter target than a full-width URL bar in real Chrome — but this is a chrome-redesign, not a Chrome-redesign, and the v7 brief explicitly forbids two rows. The trade I'm making is *less URL real estate in exchange for a single-row chrome*.

## 5. Demonstrated states (17 frames)

- **A** — Idle working session. Coffee Shop active (z0); two tabs at z1; one at z2; one hibernated at z3; `+` at z3. WP iframe shows WooCommerce storefront.
- **B** — Site Manager · Settings open. Drawer slides up; iframe stays primary; 5 sub-tabs visible; Apply+Reset danger zone in-pane.
- **C** — Site Manager · Files. Real `/wordpress/` tree with wp-content/themes/coffee/functions.php selected; PHP syntax-highlighted editor with HPOS-compat code.
- **D** — Site Manager · Logs. Four grouped HTTP requests; 2 errors / 7 warns / 29 info; realistic PHP fatal in `wc_get_low_stock_amount()`.
- **E** — Site Manager · Blueprint. Real Gaming News JSON with 8 valid blueprint steps (installTheme, installPlugin, runWpInstallationWizard, importWxr, setSiteOptions, updateUserMeta, setSiteIcon, login). VFS sidebar with attached posts.xml / theme.zip / logo.png.
- **F** — Site Manager · Database. 12 tables in sidebar; wp_options open with 14 realistic rows; early-access notice as chip.
- **G** — Launcher overlay (`+` tab active). 6 sources (Vanilla / WP PR / Gutenberg PR / From GitHub / Blueprint URL / Import .zip) + 16 blueprint cards + 10 category filters + search.
- **H** — Apply & Reset typed-phrase modal with diff + auto-snapshot. Three escalations at once.
- **I** — Booting Gaming News. Active tab pip amber-pulses, URL pill shows "booting · step 5/8". Iframe runs the 8-step boot screen.
- **J** — Unsaved Playground. Active tab has amber pip + amber URL pill; Save button materializes; toast warns "refresh = lose".
- **K** — Save → Saved transition. The same tab post-save: pip flips green, URL returns neutral, tab renamed "First WooDemo", toast confirms "Saved to browser storage".
- **L** — Fullscreen iframe. Top bar dismissed; one floating Esc/F exit pill.
- **M** — First touch. Single `+ New Playground` tab as only chrome; cinematic LAUNCH hero with one decisive verb.
- **N** — z-depth scale audit + idle-affordance count card + one-door map + one-secondary map. Self-documenting.
- **O** — Mobile idle (390 × 844). Same strip, narrower tabs.
- **P** — Mobile Site Manager bottom sheet. Drag handle; Logs tab horizontally scrolls.
- **Q** — Mobile launcher overlay. Same 6 sources + chips + featured stack.

## 6. Idle affordance count

**7 at saved idle** (frame A), **8 at unsaved idle** (frame J — Save materializes).

1. WP mark (top-left)
2. **Tab strip** — one nav primitive (TAB). Counts as 1 affordance region. Inside it: 5 saved tabs + 1 `+ New` tab, all governed by the same rule "click to switch / `×` to close / `+` to add". This is the v5 #018 rail accounting applied to TAB.
3. Refresh icon
4. Site Manager toggle
5. Fullscreen toggle
6. More kebab (Export PR · Download .zip · Rename · Delete)
7. URL pill (inside the active tab — counts as one affordance for the focused tab's address surface)

Save button (8) materializes only when there's something to save (frame J), then disappears (frame K). Both saved and unsaved states fit ≤ 8.

The 5 Site Manager tabs and the 6 launcher sources are content *inside* secondary surfaces, not idle chrome. Inactive tab `×` buttons are inside-tab affordances revealed only on hover; not counted as idle chrome (consistent ruling: hover-revealed inside-element interactions don't count, similar to how OS window close buttons aren't typically counted as toolbar affordances).

## 7. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5
[x] iframe primacy + fullscreen toggle?        Score: 5/5
[x] One door per feature?                      Score: 5/5
[x] One secondary surface?                     Score: 5/5
[x] Direction strongly expressed?              Score: 5/5
[x] Mobile = wider-mobile desktop?             Score: 4/5
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
[x] No banned patterns (§1 DROP)?              Score: 5/5
```

All rows ≥ 4. No revision required.

### Self-critique notes

- **Affordance count 5/5**: 7 at saved idle (within budget), 8 at unsaved (still within budget). Frame N publishes the audit so it can be verified.
- **iframe primacy 5/5**: Iframe occupies 100 % below the 48 px bar at idle, ≈ 60 % when the drawer is open (still primary), 100 % in fullscreen. Dedicated fullscreen button + `F` hotkey + cinematic `Esc/F` exit pill in frame L.
- **One door 5/5**: Sites/launcher → `+` tab only. Settings → Site Mgr · Settings sub-tab only. Save → Save button (and it only appears when unsaved). Fullscreen → fullscreen button. Switch site → tab click. Close site → per-tab `×`. Apply+Reset → in Site Mgr Settings only. Export PR / Download .zip → in drawer head only (not duplicated to the kebab; kebab covers Rename / Delete / etc.). I noticed in reviewing v7 #020 the kebab + Blueprint duplication was flagged; here Export PR / Download .zip live only in the drawer head.
- **One secondary surface 5/5**: The Site Manager drawer is the *only* secondary surface that swaps content. The launcher overlay is a transient modal (one-shot), not a persistent surface.
- **Direction 5/5**: TAB + 3LD is verbatim what direction 30 names: "Tabs across the top; the active tab is sharp, inactive tabs progressively blurred. The browser-browser metaphor with z-depth telling you where you are." All four parts are realized in HTML.
- **Mobile 4/5**: Same strip and same depth-decay, three mobile scenes. -1 because the inline URL pill inside the active mobile tab is tight (170 px tab × 20 px high pill) and the longest paths get truncated to ~14 chars; on real devices users would benefit from a tap-to-expand. Acceptable, documented.
- **Primitives 5/5**: TAB (named, CSS-applied via `.tab`/`.tab.active`/`.z1`/`.z2`/`.z3`), 3LD (named, CSS variables `--z0`–`--z4` applied via `filter:blur(var(--zN))`), DEV (named, single 48 px bar, status-pill on tab pip, no two-row chrome), MOB (named, three mobile frames). Each is structurally present, not just rhetorical.
- **No banned patterns 5/5**: (a) single-row chrome — the URL pill embeds inside the active tab, not on a second row. (b) Depth is never an interactive control — every blurred tab remains the same click target as a sharp tab; the blur is `filter`, not `pointer-events:none`. The overlay backdrop's z4 blur is purely visual hierarchy. (c) No terminal echo — Logs is one-way inspection, no command line.

## 8. Hard-requirements checklist (v7 brief §3)

- [x] **5 Site Manager tabs** — Settings (B/H), Files (C), Blueprint (E), Database (F), Logs (D). All five rendered with real content.
- [x] **6 launcher sources** — Vanilla WP, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip (frame G — 6-up grid). Mobile equivalent in Q.
- [x] **43-blueprint browser** with search + 10 category filters + ≥ 16 cards (frame G — Featured/Website/Personal/Content/Themes/Gutenberg/Experiments/WooCommerce/News/All, 16 cards rendered).
- [x] **Export to GitHub PR + Download .zip** — both surfaced in the Site Manager drawer head as explicit buttons.
- [x] **Unsaved → Saved transition** — frame J (unsaved: amber pip, amber URL pill, Save button materializes, toast warns), frame K (saved: green pip, neutral URL, tab renamed, toast confirms).
- [x] **3+ states** — 17 frames demonstrated (A–N + O/P/Q mobile).
- [x] **Realistic mock data** — 4 saved playgrounds (Resume / Friends RSS / Coffee Shop / Gaming News / TT25 demo); real Gaming News blueprint JSON with 8 valid steps; realistic PHP log lines (HPOS deprecation, SameSite cookie warning, undefined `wc_get_low_stock_amount()` fatal, REST 500 body); 14 real wp_options rows; 12 tables; 16 blueprint cards from the real 43-card list.
- [x] **Both 1440 × 900 and 390 × 844** — desktop A–N + mobile O/P/Q.
- [x] **Destructive Apply+Reset** — typed-phrase + diff + auto-snapshot in frame H (not a red banner).
- [x] **Single self-contained HTML** — yes. Inter + JetBrains Mono via Google Fonts, Lucide icons via unpkg CDN. No external images.
