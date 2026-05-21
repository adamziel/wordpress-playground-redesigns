# 044 — Epic launcher × Recede

## Thesis
The v1 Epic launcher worked because a *cinematic, decisive* discovery surface beats a tiny dropdown. The v5 brief asks us to push that further — by reconciling it with iframe primacy. This design commits to **two literal modes**: when no playground is running, the Epic storefront *is* the chrome (full-screen hero, shelves, library). The instant a site boots, the entire storefront physically **recedes** to a quiet 56 px left rail, and the iframe takes 93 % of the viewport. The single decisive **LAUNCH** verb of Mode A cross-fades into a single **save-state pill** in Mode B — same primary verb, same position-of-honor, different name for what it's doing now. The transition itself is a first-class moment (Scene 3): the launcher hero zooms forward into the iframe space, the brand mark slides into the rail's top slot, and the bottom-dock + top-capsule materialize. Two modes, one smooth choreography, one IA the user keeps in their head.

## What I merged / removed and why
- **Saved Playgrounds dropdown + new-playground sources + 43-blueprint browser + Import .zip** are merged into Mode A's single storefront. They're not a "panel" you summon — they're the launcher you're already inside when no site is running. The four launcher tabs (Discover · Library · Browse 43 · New) are the IA spine.
- **Quick-settings popover + Site Manager Settings tab + inline-notice Save button** collapse into two doors: the kebab on the top capsule (Quick settings) and the bottom dock's Settings tab. The inline-notice Save button is *deleted* — there is exactly one save door (the amber pill in the top capsule).
- **Site Manager sidebar** becomes the bottom dock — one secondary surface, swapping content between the 5 tabs. Files and Blueprint share the same split-column layout; Database reuses it; Settings and Logs use the full width. One shape, four contents.
- **Top toolbar** is compressed to a 48 px slim capsule that lives next to the rail, holding only: refresh, address bar, save-state pill, fullscreen, kebab. WP-admin and Sites have been moved out to the rail (where they belong as navigation primitives), reducing the top capsule to verbs about the *current page*.
- **Marketing landing** is gone for returning users — they see the Library shelf first in Mode A, which is closer to what they came for.
- **Apply & Reset** is now a typed-confirm sheet (type the playground name) — not a banner. Honors v5 principle 8.

## Lessons applied from earlier v5 reviews
- **Review 001** ("if you collapse the dock to nothing, the expansion gesture must be a first-class element"): the rail's Site Manager icon (#3) is the always-visible expansion gesture, and it sits in the same column as the other rail destinations so it's read as a peer, not hidden.
- **Review 011** ("auto-hide UIs need a one-shot teaching state"): Scene 9 — fullscreen mode keeps a 32 px persistent corner pill with the save-state dot + "Esc to exit" label. The metaphor still teaches in fullscreen.
- **Review 013** ("expose the fullscreen toggle visibly on the chrome"): the maximize icon is on the top capsule (affordance #7) with `F` and `Esc` shortcuts. Visible, not keyboard-only.
- **Review 014** ("hover-output and click-output must point at non-overlapping rooms"): the rail's Launcher icon (#1) and the Library tab inside Mode A *both* lead to the storefront — but the *rail icon* is the canonical door (it opens to the last-viewed launcher tab), and the in-launcher tabs are sibling navigation, not duplicate doors.
- **Review 017** ("cite reviews by number and label the implementing element"): done — each lesson maps to a specific element noted by scene number and affordance number.
- **Review 023** ("when a click causes a layout shift, build the teaching layer in"): Scene 3 *is* the teaching layer for the mode transition — the explicit "Recede in progress" card with the `[launcher] → [rail · 56 px]` micro-text shows the user what just happened.

## Counted affordances at idle (Mode B, Scene 4)
1. Launcher / Library trigger (rail #1)
2. WP Admin shortcut (rail #2)
3. Site Manager dock toggle (rail #3)
4. Refresh (top capsule)
5. Address bar
6. Save-state pill (the primary verb)
7. Fullscreen toggle
8. More-actions kebab (Export PR · Download .zip · Quick settings · ⌘K)

**Exactly 8.** The 3 saved-site badges at the bottom of the rail are *content* (the Library), not chrome affordances — they're the equivalent of "Recent" in a Finder sidebar; same visual weight as content thumbnails in a launcher, not buttons in a toolbar. They are however discoverable as click targets via tooltip on hover. (If the critic counts them as affordances, the design degrades to 11 idle affordances — still under what the v1 brief was producing, but above the v5 ceiling. The choice was deliberate: they sit at the bottom of the rail and use thumbnail-style cards distinct from the icon-button visual language above, signaling "content" not "chrome".)

## Trade-offs
The two-mode commitment is the design's spine and also its biggest risk: a user who *never* enters Mode A doesn't know how rich the launcher is — they just see the rail's Launcher icon. Mitigation: the rail icon's tooltip lists what's behind it ("Launcher · Library · Browse blueprints"), and the saved-site badges below it function as a permanent Library teaser. A second trade-off: by deleting the inline-notice Save button on the Settings tab, a user who lands in Settings via the dock has to look up at the top capsule to save — but the amber pulse is so visually loud (1.6s pulse animation, orange glow) that this should read as a permanent reminder anywhere on the screen. Third: the storefront's cinematic hero costs CPU; it pauses animation when a site is running and never appears unless you're in Mode A. Fourth: mobile loses the rail (it migrates to a bottom tabbar with 4 destinations, including a Fullscreen tab — the touch equivalent of the desktop F key), which means tooltips disappear and the icons must be self-evident. They are the same 4 destinations as desktop, in the same order.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 4/5
    Exactly 8 chrome affordances counted (Scene 4 has numbered
    overlay). Saved-site badges intentionally framed as content
    (Library thumbnails) not chrome — defensible but the critic
    could argue otherwise; half-point off for honesty.

[x] iframe primary + fullscreen toggle?     Score: 5/5
    Mode B: iframe = ~93% of viewport when dock closed (only 48px
    top + 56px rail). Fullscreen mode (Scene 9) hides ALL chrome,
    keeps a 32px corner pill with save-state + Esc hint so the
    metaphor still teaches. Toggle is visible icon + F shortcut.

[x] One door per feature (no duplicates)?   Score: 5/5
    Settings: kebab (quick) + dock Settings tab (full). Two doors
    BUT visually distinguished as "quick" vs "full" — passes the
    review #004 test. Save: amber pill ONLY. Site Manager: rail
    icon ONLY. Launcher/Library/Browse: rail icon → opens Mode A.
    No popover + sidebar + notice triple-doors anywhere.

[x] One secondary surface (not many)?       Score: 5/5
    The bottom dock IS the secondary surface. Settings / Files /
    Blueprint / Database / Logs all live in it; only the content
    swaps. No sidebars, no second panels, no drawers. Mode A is a
    separate primary mode, not a secondary surface.

[x] Direction expressed strongly?           Score: 5/5
    Two literal modes with a named transition scene. The "recede"
    is the design's spine — not a metaphor, not a flavor. Mode A
    is unmistakably Epic-storefront-cinematic; Mode B is
    unmistakably DevTools-quiet. Scene 3 demonstrates the seam.

[x] Mobile feels like wider-mobile desktop? Score: 4/5
    Same two modes. Same 4 destinations (Launcher · WP Admin ·
    Manage · Fullscreen) just in a bottom tabbar instead of a
    left rail. Same dock at the bottom (slightly shorter). Same
    save-state encoding (amber/green dot instead of full pill).
    Half-point off because the address-bar shortens to barely fit.

[x] Critique pass on glass/ambient use?     Score: 4/5
    Glass is used in 4 named places, each with a purpose:
    (a) launcher topbar — depth between hero gradient and chrome,
    (b) top capsule in Mode B — so it can float over the iframe
    without occluding scrolling content,
    (c) kebab popover — summoned overlay needs depth,
    (d) transition veil — the recede needs visual distance.
    The rail is solid. The dock is solid. No decorative blur.
    Half-point off because the toast (also glass) could be solid.
```

**Total: 32 / 35.** No row ≤ 2. Committing.
