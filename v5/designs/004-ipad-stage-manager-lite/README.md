# v5 #004 — iPad Stage Manager lite

## Thesis

WordPress Playground is a Stage Manager workspace. The active playground is the one "app on stage" — a centered iframe window with macOS-style window chrome — and two peer playgrounds sit recessed on the left, scaled down and slightly dimmed so you remember they exist without competing for focus. Every saved site lives in a frosted dock at the bottom, beside the single primary verb tile (`+ New`). The entire Site Manager is collapsed into one right-edge pull-tab that swaps content across five tabs; quick settings live in a single Control Center popover; destructive resets are gated by a typed-phrase confirm sheet. Press `F` (or the chevron in the window chrome) to fullscreen the iframe; `Esc` exits. The iPad metaphor isn't decoration — it carries the IA by name, so first-time users already know what "stage", "dock", "pull-tab" and "Control Center" mean.

## What I merged / removed and why

The three settings doors of the current product (toolbar popover + Site-Manager Settings tab + inline "save site locally" notice) collapse to two complementary doors: **Control Center** for the eight quick-toggle settings (versions, network, multisite, export & share, copy link), and the **Site Manager pull-tab's Settings tab** for the destructive Apply-and-Reset flow only. The "Saved Playgrounds dropdown" trigger and the "Start a new playground" sources merge into one Launcher overlay summoned by the dock's `+ New` tile — that overlay is also the home for the 43-blueprint gallery and the saved-playgrounds list, with a 230-pt left rail of source types (Vanilla / WordPress PR / Gutenberg PR / From GitHub / Blueprint URL / Import .zip). Every Site-Manager tab (Settings, Files, Blueprint, DB, Logs) lives inside the *same* 440-pt pull-tab sheet — one secondary surface, swappable content, never duplicated elsewhere. Apply-and-Reset stops being a small red banner; it becomes a typed-phrase confirm sheet that lists every changed setting and every destroyed object. Nothing is dropped: WP Admin, Homepage, Export to GitHub PR, Download .zip, Refresh, save-state pill, Address bar, new file/folder, Run Blueprint, Copy link to blueprint, Download bundle, search/filter for the gallery, all six new sources, and the database-early-access notice are all reachable.

## Trade-offs

Stage Manager works gorgeously at 1440×900, but you can only see one focused playground at a time — multi-window enthusiasts who want Files and Logs simultaneously must tab-swap inside the pull-tab. The dock is bounded at ~10 saved sites before it cramps; past that I'd add overflow chevrons (sketched but not drawn in this submission). The recessed-thumbnail metaphor requires three or more saved playgrounds to feel "Stage Manager-y" — for a brand-new user with just an unsaved playground it visually degrades (this is handled gracefully: the recessed column simply hides). On mobile the recessed peers shrink to an 8-pt-wide sliver because there's no room for full thumbnails — that's a hard concession, but the dock and the SM pull-tab (as a bottom sheet) carry the metaphor. The iframe-≥-65% rule from the parent direction (mobile-first) is honored on phones by docking the SM sheet so the iframe still peeks ~90 pt; it's not honored on iPad when the pull-tab is open at 440 pt + 480 pt of inner spacing, but the iframe never goes below ~500 pt wide there either.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5
    (name pill, URL bar, Save, Refresh, Control Center, recessed peers as one element,
     SM pull-tab, dock = exactly 8. Counted inline under State 1.)

[x] iframe primary + fullscreen toggle?     Score: 5/5
    (iframe is the visible hero in every state; State 5 demonstrates true full-bleed
     fullscreen with Esc-to-exit banner; F-key + chevron in iframe chrome both shown.)

[x] One door per feature (no duplicates)?   Score: 4/5
    (Settings split intentionally: Control Center = non-destructive tweaks;
     SM Settings tab = destructive Apply&Reset. Different doors, different purposes.
     Quick versions show in *both* places but read-only in CC — borderline; minus one
     for not making that distinction visually crisper.)

[x] One secondary surface (not many)?       Score: 5/5
    (One sheet, the right-edge pull-tab, swaps across all 5 SM tabs. No competing
     sidebars, no left rail. Control Center is a popover not a panel — distinct role.)

[x] Direction expressed strongly?           Score: 5/5
    (Stage + recessed peers + dock = all three Stage-Manager primitives present,
     visually unmistakable. Not "iPadOS-flavored Mac chrome" — committed to the metaphor.)

[x] Mobile feels like wider-mobile desktop? Score: 3/5
    (Same dock + same pull-tab + same Launcher overlay. The recessed peers compress
     hard — they're a sliver on phone. That's an honest concession, not a redesign,
     but it weakens the "single design at all widths" lesson from #06.)

[x] Critique pass on glass/ambient use?     Score: 4/5
    (Glass earns its keep on three surfaces only: top bar, pull-tab, dock — each
     because depth communicates "chrome floats over the WordPress site". Stage iframe
     window is solid white. Launcher overlay is glass to recede the workspace behind
     it. No purely decorative blur. Minus one for the confirm-sheet scrim being a
     simple darken-only; could earn its glass.)
```

Overall: 31/35. Honest middle-high score. Mobile concession is real; one-door-per-feature has a soft seam in Settings. The metaphor is the strongest carrier.
