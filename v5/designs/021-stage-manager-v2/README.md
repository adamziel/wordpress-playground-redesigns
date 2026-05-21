# v5 #021 — Stage Manager v2

## Thesis

Stage Manager v2 commits, harder than its lite cousin, to the iPad metaphor by re-assigning each Stage Manager primitive to one IA role with zero overlap. The **stage** is the focused playground rendered at 80 % of available width with macOS-style window chrome (lights, URL bar, contextual WP Admin / Homepage icons, maximize chevron). The **recessed peers** on the left are the saved-playgrounds rail — every saved site has a thumbnail with mini-WP content visible, and clicking one performs the signature **swap-zoom**: the peer expands to the center while the current stage recedes to the freed peer slot (a 350 ms cubic-bezier transform shown explicitly in State 2, addressing the lesson from review #001 — *make the morph a first-class visible element*). The **bottom dock** holds tools, not sites: five tool tiles (Settings · Files · Blueprint · DB · Logs), a separator, and one primary verb (Boot). Tap any tool → a single panel rises from the dock and stays there; all five Site-Manager tabs and the launcher are different content modes of the *same* panel. The dock therefore plays one role (open / swap the panel), the peers play one role (open / swap the stage), and the panel plays one role (the secondary surface). Three primitives, three jobs, no door duplicates.

## What I merged / removed and why

I deliberately diverged from v5 #004 (the lite Stage Manager) on three points the critic flagged. **First, I removed the Control Center popover entirely** — Settings has exactly one door, the panel's Settings tab, eliminating the two-door soft-seam the critic called out. The topbar carries only six items (name pill, URL, Save, Refresh, Fullscreen, More menu) — none of them edit settings. **Second, the bottom dock is now tools, not saved sites**, per the brief's exact wording for direction 21. Saved sites live in two complementary places that don't duplicate: the recessed peers (top two recents, quick swap-zoom) and the launcher panel's "Your playgrounds" rail+list (all four+, with metadata). The peers are *recents*; the launcher is the *library*. **Third, the iframe-primacy compression problem** I solved by docking the panel at 60 % of the stage height rather than at the right edge — the iframe still occupies 100 % of the upper region, and when the panel closes the iframe immediately reflows to fill the stage. Apply & Reset is gated by a typed-phrase confirm sheet that lists everything that will be wiped (database rows, uploads, unsaved file edits, current session). WP Admin and Homepage moved into the stage's own window URL bar as contextual icon buttons, because they belong to the active site, not the global chrome — that recovered two affordance slots. Export to GitHub PR and Download .zip live in the Settings panel's Additional Actions list (one door, with the rest of site-level housekeeping), not in a separate More menu and a separate notice.

## Trade-offs

The signature swap-zoom only works for sites with a peer slot — at most two are recessed at once. A user with eight saved sites sees only two recents and has to open the launcher to swap to the third (acceptable; the launcher is one tap away on the Boot tile). The panel-rising-from-dock metaphor means at full extent the iframe compresses to about 312 px tall on desktop while the panel is open — that's an iframe-primacy concession, but it's a deliberate one tied to a user-initiated gesture (tapping a tool), and the iframe reflows fully when the panel closes. The recessed peers compress to 50 px wide on mobile and lose their mini-WP content legibility — they remain present as cards (you can still tap to swap-zoom and the badge still shows PHP version), but they read more as bookmark tiles than as thumbnails. Honest concession, not a design redesign. Finally, the Boot tile occupies one of the eight always-visible affordance slots — that means *any* navigation away from the current site costs one persistent affordance. I judged this acceptable because Boot is also the home for all 6 new-playground sources, 43 blueprints, and 5 saved playgrounds, so it earns its keep on a frequency-of-use basis.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5
    name pill · URL bar · Save · Refresh · Fullscreen · More-menu · peers cluster · dock+Boot cluster.
    Counted with numbered pins on State 1 (1440×900). Dock-tile clusters defended in legend foot.

[x] iframe primary + fullscreen toggle?     Score: 4/5
    iframe is the stage (80 % center) in every running state; State 9 demonstrates true full-bleed
    fullscreen with Esc-to-exit banner + F key + maximize chevron in the stage chrome. Minus one
    because when the panel opens the iframe compresses vertically to ~312 px — the trade is
    user-initiated and reversible, but it's a real compression.

[x] One door per feature (no duplicates)?   Score: 5/5
    Settings = one door (the panel's Settings tab). No Control Center popover, no inline notice.
    Apply & Reset = one path (Settings tab → red Apply button → typed-phrase confirm sheet).
    WP Admin / Homepage = contextual on the stage chrome (not chrome-global). Export PR / Download
    zip = inside Settings → Additional Actions. Save = single Save button + pill (action ↔ status,
    but always the same element). Saved sites: recents in peers, library in launcher — different
    surfaces, different jobs.

[x] One secondary surface (not many)?       Score: 5/5
    THE panel — one element that rises from the dock. All 5 Site-Manager tabs and the launcher
    (with all 6 sources, 43 blueprints, saved playgrounds) live inside it. Same panel-head, same
    breadcrumb, same meta-pill, same close-X. Three primitives total (stage / peers / panel) and
    only the panel swaps content.

[x] Direction expressed strongly?           Score: 5/5
    Stage Manager v2's three direction-required primitives — focused 80 % center / two recessed
    peers / bottom tool dock — are all present and visually unmistakable. The signature swap-zoom
    gesture has its own dedicated state showing the transition mid-flight (State 2), not just
    inferred. Background-boot on a peer is shown explicitly (State 8). The dock has TOOLS, not
    sites — that's the structural differentiator from #004 (lite).

[x] Mobile feels like wider-mobile desktop? Score: 3/5
    Same three primitives at 390×844: peers as a 50 px left column, dock as a 5+1 tile bar at
    bottom, panel rises as a sheet. Three mobile frames shown (idle, Boot panel, Logs panel).
    Honest concession: the peer thumbnails lose their mini-WP legibility at that width — they
    become bookmark tiles rather than miniature windows. The IA holds at all widths; the visual
    fidelity of one element degrades.

[x] Critique pass on glass/ambient use?     Score: 4/5
    Glass is used on three surfaces only: the top chrome bar (depth — floats over iframe), the
    bottom dock (depth — floats over iframe), and the panel (depth + content-aware: shows iframe
    color seeping through behind it when partly transparent). The stage itself is solid white,
    earning its hero role by being the only opaque thing. The confirm-sheet uses a darken-and-blur
    scrim, justified by the destructive-gating role. Minus one because the panel's blur could be
    pulled back when at full extent — at that height the iframe behind it is barely visible, so
    the glass earns less of its keep there.
```

Overall: **31/35**. Honest middle-high. The single soft point is the iframe vertical compression when the panel is open — but that's the standard cost of one-secondary-surface IAs, and I judged the trade worth it because the swap-zoom + the tools-dock + the single-panel together make the metaphor load-bearing rather than decorative.
