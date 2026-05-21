# v7 #035 — Bottom-rail everywhere · MOB + QR

## 1. Thesis

A mobile-first quiet-rail composition that **refuses to rotate**. The QR primitive's swap-by-dock semantics survive verbatim from v5 #018, but the rail's *anchor* is changed from the left edge to the bottom edge — and it stays there at every width. At 1440 × 900 the rail is a 5-dock bottom tab bar. At 390 × 844 the rail is a 5-dock bottom tab bar. Same docks, same icons, same labels, same shortcuts, same `peek / mid / full` detent vocabulary on the single sheet that rises from the rail. The desktop is literally a "wider phone laid sideways" — same gesture (swipe-up-from-rail to summon the sheet), same anchor, same active highlight. This composition reads the MOB principle ("desktop = wider phone") as a structural constraint, not a stylistic one: the desktop borrows the mobile's anchor, not the other way around. Sibling design #015 rotates QR to a bottom tab bar on mobile (mobile inherits a desktop primitive); this design holds the bottom anchor at every width (desktop inherits a mobile primitive). That is the visible IA difference between the two #15 / #35 entries in the QR + MOB family.

## 2. Primitives composed (KEEP list, by notation)

- **MOB (mobile-first, "desktop = wider phone")** — the load-bearing primitive. The bottom-anchor rail is the **mobile** convention preserved on desktop. The rail's vertical position is *invariant across widths*; only the sheet's pixel height varies because the parent does. Same gesture vocabulary at every width: swipe up = expand sheet, swipe down = dismiss, swipe sideways on the seg control = switch sub-segment. The mobile is the source of truth: the desktop is described by "the mobile, but with the iframe wider".
- **QR (quiet-rail-to-loud IA)** — composed verbatim from v5 #018. Five docks: Sites · Files · Blueprint · Database · Logs. Silent at idle (icons + labels, badge on Logs only when `errors > 0`). Click any dock → the single secondary surface (the "loud" sheet) opens or swaps its content. *One secondary surface*. The Sites dock's sheet has a 3-segment sub-control (Yours / New / Library) — that is the only sub-IA in the design and it lives inside the same sheet, not as a second pane.
- **CWS (corner-widget Sites)** — used in a small, persistent form. A frosted dark widget anchored to the **bottom-right corner of the iframe** shows live status (`☕ Coffee Shop · WP 6.7 · PHP 8.2 · 11.4 MB`) and is wired as a *second door* to the Sites pane (same destination as rail dock 1). The widget is visible at idle (Frame A) and at the peek detent (where it doesn't compete with the sheet); it fades to half-opacity when the sheet covers it (Frames B / M). On mobile (Frame N) it sits above the rail at the same iframe-corner position. The pulse pip carries state: green = saved, blue = booting, red = unsaved.
- **DEV (slim DevTools-style top capsule)** — a single 44 px capsule above the iframe holds Refresh · address bar (with `https://...` and a `◉` SSL lock) · playground title chip · save-state pill that morphs Saved → Saving → Booting → Unsaved (the v1 red banner is *replaced* by this pill — no banner ever) · ⋮ More menu · explicit `⛶ Fullscreen F` button. One row. No second row. Mobile compresses the same elements into a 42 px capsule (Frame N).
- **VEN (Ventura · ≤ 5 items per pane)** — the rail has exactly **5 docks**. The Site Manager sub-segment row has exactly **5 tabs** (Settings · Files · Blueprint · Database · Logs). The Sites sheet has exactly **3 sub-segments** (Yours · New · Library). The Library category column has exactly the **10 brief-specified categories**. Each surface stays at ≤ 5 items per pane (or ≤ 10 for the explicit-list category column).

The synthesis point — what makes this design "compose, don't invent" — is the **shared CSS class system between the desktop sheet and the mobile sheet**. `.sheet.peek / .sheet.mid / .sheet.full` use the same percentages as `.m-sheet.peek / .m-sheet.mid / .m-sheet.full`. The desktop seam dots (`.det-gauge .det`) and the mobile grab-handle dots (`.det-dots .d`) share the active-state token. The rail's 5 docks are the same `.dock` element at every width. Frame R makes this CSS-shared-classes proof explicit. Per the v7 #015 review's "Lesson for the next v7 designer," parity proven by CSS class names is the way.

## 3. What I remixed / removed and why

The original v1 chrome has three settings entry points, three save entry points, a launcher drawer and a Site Manager sidebar that are different surfaces. I collapse all of that into **one secondary sheet**, swappable by 5 rail docks, plus one 3-segment control for the Sites dock (Yours / New / Library) and one 5-tab strip for the Site Manager-ish docks (Settings sub-tab of Files, plus Files, Blueprint, Database, Logs are *themselves* the docks — there is no separate Site Manager surface). The "Open Site Manager" toolbar button is removed entirely; the rail *is* the Site Manager. The 43-blueprint library is the Sites sheet at FULL detent in Library sub-segment, with the 10 categories as a left column — not a separate modal overlay, not a separate screen. The settings-popover-in-the-topbar is removed; Settings lives only as the first tab of the Files dock's segmented strip (one door). Apply + Reset escalates three ways at once (Frame I): a **diff** (WP 6.7 → 6.8-RC1, PHP 8.2 → 8.3, listing what changes verbatim), an **auto-snapshot** named `coffee-shop-2026-05-21T18-42.snap`, and a **typed-phrase confirm** requiring the user to type the playground name exactly. No small red banner, no terminal, no command echo, no dual-channel duplication. The "Save" affordance is the save-state pill in the top capsule plus one inline `Save locally` button on the Unsaved row in the Yours list (same action, two doors — the only intentional duplicate).

## 4. Trade-offs

The big trade-off is **vertical real estate**. With the rail anchored at the bottom at 1440 × 900, the iframe loses about 90 px of vertical room compared to a left-edge rail (which only loses 64 px horizontally on a much wider canvas). I'm spending vertical pixels to buy a single anchor convention across widths. The mitigation is that desktop browsers typically have *more* vertical room than horizontal in their content area (1440 × 900 still leaves ~830 px of iframe height after the top capsule and rail), and the iframe-primary thesis is preserved at every detent. The second trade-off: a bottom rail on desktop is unusual; users coming from VS Code / Slack / Notion will expect a left rail. I mitigate that with explicit labels under each icon (no bare icons), an active-state with a top-edge bar (so it reads as "tabs from below" rather than "Dock"), and the same persistent CWS widget the desktop user already knows from Frame A. The third trade-off: the peek-strip above the rail (showing live status of the focused dock) is a fifth always-visible affordance — it could be read as "a second persistent surface". I argue it's part of the rail (visually attached, same backdrop, same anchor), not a separate surface; the Frame R parity diagram treats it as a rail accessory, not a sibling. The fourth trade-off: this design deliberately does *not* compose SR (smart-resize), even though SR is the v7 brief's "this primitive is gold" winner — composing SR's momentum gauge on top of QR's snap detents would dilute the parity thesis (SR encodes momentum and interaction history; QR encodes one of three discrete positions). I'm trading "gold-plate the primitive bag" for "the composition has a single, clear synthesis point." The bottom rail's three detents are *snaps*, not gauges.

## 5. Self-critique rubric — mandatory

```
[x] Affordance count at idle ≤ 8?              Score: 4/5
[x] iframe primacy + fullscreen toggle?        Score: 5/5
[x] One door per feature?                      Score: 4/5
[x] One secondary surface?                     Score: 5/5
[x] Direction strongly expressed?              Score: 5/5
[x] Mobile = wider-mobile desktop?             Score: 5/5
[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
[x] No banned patterns (§1 DROP)?              Score: 5/5
```

No row ≤ 2. Cleared for commit.

Per-row honest notes:

- **Affordance count (4/5)** — counted in Frame A's legend strip: Refresh, URL bar, Save pill, ⋮ More, ⛶ Fullscreen, Bottom rail (one surface · 5 docks), CWS widget, Peek-strip live status = **8/8**. Right at the limit. The peek-strip is the marginal item — a strict critic could argue 9 if they count it separately from the rail; I count it as a rail accessory because it shares the rail's bottom-anchor backdrop and the rail/peek-strip pair acts as one unit. The WP mark and AZ avatar in the rail are identity, not affordances. The playground-title chip is a passive label, not a control.
- **Iframe primacy + fullscreen (5/5)** — iframe is the sharp wallpaper at z 0 in every frame. Explicit `⛶ Fullscreen F` button in the top capsule everywhere. Frame L shows fullscreen mode with all chrome retracted, only a floating Esc/F banner + ghost CWS widget surviving.
- **One door per feature (4/5)** — Settings → only Files dock's Settings sub-tab. URL bar → only the address bar. Library → only Sites dock's Library sub-segment. Export PR / Download .zip → only the ⋮ More menu (Frame M). Apply+Reset → only the Settings tab's Danger block (Frame I). The intentional duplicate: Sites = rail dock 1 + CWS widget, same destination. The acknowledged duplicate: Save = save-pill in topbar + inline "Save locally" button on the Unsaved row in the Yours list (same action, different anchor). 4 not 5 because of this Save duplicate.
- **One secondary surface (5/5)** — exactly one sheet. Content swapped by rail docks; sub-content swapped by 3-segment (Sites) or 5-tab (Files / Blueprint / Database / Logs share a Site Manager strip) controls *inside* the sheet. No second persistent surface. The ⋮ More menu (Frame M) is a transient popover, not a secondary surface. Library is the Sites dock at FULL detent, not a modal overlay.
- **Direction strongly expressed (5/5)** — the bottom-anchor-everywhere thesis is *the* visual claim. Frames A / B / C / D / E / F / G / H / I / J / K / M all show the rail anchored at the bottom of the 1440 desktop. Frames N / O / P / Q all show the same rail at the bottom of the 390 mobile. Frame R proves the parity by listing the shared CSS class names. The peek-strip and the detent gauge appear at both widths in the same vocabulary.
- **Mobile = wider-mobile desktop (5/5)** — four mobile states (N working, O Yours @ mid, P Library @ full, Q booting) cover the same primary flows the desktop covers; the rail is in the same position, the sheet rises from the same anchor, the seg-control is in the same position inside the sheet head. The detent dots under the grab-handle on mobile share the same class system as the desktop seam gauge.
- **Primitive(s) KEEP named & used (5/5)** — five primitives composed (MOB · QR · CWS · DEV · VEN), each named in §2 with how it's used. The synthesis point (shared CSS classes between sheet and m-sheet) is documented in Frame R.
- **No banned patterns (5/5)** — single 44 px top capsule only; no two-row top bar. Depth (blur) is used only on iframe wallpaper when the sheet covers it (decorative, not interactive); no depth-as-interactive-control. No terminal, no command echo, no dual-channel duplication; the PHP log viewer is one channel, the only place log output lives.

## 6. Hard-requirements checklist (cross-check)

- [x] Five Site-Manager tabs reachable with visible content: Settings (Frame I), Files (Frame E shared tree + editor), Blueprint (Frame F shared tree + JSON editor), Database (Frame H — 14 tables, wp_options open), Logs (Frame G + mobile Q).
- [x] All six "Start a new Playground" sources visible (Frame C): Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip.
- [x] Full 43-blueprint browser with search + 10 category filters (Frame D: 18 cards rendered on desktop; mobile Frame P shows 8 cards + all 10 category chips in a scroll strip; Frame C shows 5 featured).
- [x] Additional actions menu surfaces both **Export to GitHub PR** and **Download .zip** (Frame M).
- [x] Unsaved → save state transition visible: Frame A `Saved`, Frame C `Unsaved` (with red pill), Frame G `Saving…`, Frame J `Booting · 4 / 9`, Frame K `—` (no playground). Save-pill in top capsule morphs through all states.
- [x] Three demonstrated states minimum: working session (A), booting (J + mobile Q), launcher/library open (C + D + mobile P), first-touch (K), fullscreen (L).
- [x] Realistic mock data: **5 saved playgrounds** (Coffee Shop running, Gaming News booting, Skincare Blog stopped, Art Gallery stopped, Unsaved Playground), real blueprint JSON (Frame F with 6 blueprint steps including `installPlugin`, `installTheme`, `runPHP`, `importWxr`, `setSiteOptions`, `login`), realistic PHP log lines (Frame G: `strftime` deprecation, `include()` failed for woo-cache vendor, SAVEPOINT, REST 504/200, cron tick, heartbeat 200 OK, cache:HIT options).
- [x] Both 1440 × 900 desktop (13 frames: A B C D E F G H I J K L M) and 390 × 844 mobile (4 frames: N O P Q).
- [x] Destructive Apply+Reset escalated via diff + auto-snapshot + typed-phrase confirm (Frame I).
- [x] Single self-contained `index.html`. Google Fonts (Inter + JetBrains Mono) via CDN. Inline SVG icon `<symbol>` defs — no external icon scripts.

## 7. Affordance count at idle (Frame A, counted)

1. **Refresh** button (top capsule)
2. **Address bar** input (top capsule)
3. **Save-state pill** (top capsule — single morphing affordance)
4. **⋮ More** menu (top capsule)
5. **⛶ Fullscreen F** button (top capsule)
6. **Bottom rail** (one surface containing 5 docks + identity + avatar; Dock-equivalent per the established v7 convention)
7. **CWS Sites widget** (bottom-right of iframe)
8. **Peek-strip live status** (above the rail — counted because it carries the press-↑-to-open-sheet shortcut)

Total = **8** affordances. Right at the v7 cap.

## 8. Why this design is different from sibling #015 (same direction MOB + QR)

Sibling #015 reads "QR + MOB" as: take the desktop QR rail (v5 #018, left edge) and rotate it 90° on mobile to a bottom tab bar. The mobile inherits a desktop primitive's bottom-rotated form.

This design (#035) reads "QR + MOB" as: the mobile bottom tab bar is the source of truth. The desktop also gets a bottom tab bar — same anchor, same gesture, same shortcut, same active-state highlight. The desktop inherits a mobile primitive's form. The thesis is the *literal* reading of "desktop = wider phone": the desktop borrows the mobile anchor, not the other way around.

| design | rail anchor desktop | rail anchor mobile | who inherits whom |
|---|---|---|---|
| #015 | **left edge** (64 px wide) | bottom (rotated 90°) | mobile inherits desktop |
| **#035 (this)** | **bottom edge** (70 px tall) | bottom edge (74 px tall) | desktop inherits mobile |

Both are legitimate. The cohort needs both reads of "MOB + QR" — this one is the strong literalist read.

## 9. Lessons applied from prior v7 critiques

- **From the #015 review:** "If your composition is mobile/desktop parity, prove it by giving both viewports the *same CSS class names* on the corresponding elements." → Done in Frame R. `.sheet.peek/.mid/.full` share class names with `.m-sheet.peek/.mid/.full`; `.det/.det.on` is the active-state token in both `.det-gauge` (desktop seam) and `.det-dots` (mobile grab-handle); `.dock` is the same element class at both widths.
- **From the #030 review:** "If your single-row chrome thesis requires a URL bar, embed it inside the active focus element instead of allocating a separate slim capsule." → Not applicable here (this design uses DEV's slim capsule pattern, not a tab-strip-as-chrome metaphor) — but the lesson informed *not* splitting the URL bar across two rows. The top capsule fits everything in one 44 px row.
- **From the #020 review's cited duplication critique** (Export PR / Download .zip surfaced twice): Export-to-GitHub-PR and Download-.zip live *only* in the ⋮ More menu (Frame M). They do not also appear as buttons in the Site Manager pane head — the Site Manager pane head (Frame E / F) shows only WP Admin / Homepage / ⋮ Actions, and the ⋮ Actions chip there opens the same More menu.
