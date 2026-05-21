# v5 · 001 — Iframe Supreme

**Direction:** Mobile-first, iframe ≥ 65% (refines v1 #06 Mobile-first).

## Thesis

The WordPress iframe is the document. The chrome is wallpaper. We enforce a single strict law: **the visible iframe never drops below 65% of the viewport**, on any screen, in any state. The chrome consists of (a) a 44 px glass top bar that carries name + path + save state in one URL pill, (b) a single floating Workbench pill that expands into a 6-tab dock when used, and (c) one swappable bottom sheet capped at 30% of viewport height. That is the entire system. The Site Manager's five tabs, the Saved Playgrounds launcher, the 43-blueprint browser, and the destructive Apply-and-Reset confirm all live inside that one sheet — they swap content; they never compete for shelf space. Desktop is not a different layout: it is the mobile composition with more width, so a designer working in either viewport never has to think about which layout they're in.

## What was merged, removed, and why

The triple-entry-point sin (settings popover + Site Manager Settings tab + inline Save info-notice all overlapping) collapses to one home: the Workbench's Settings tab, where Apply & Reset is the only destructive verb and it requires a typed phrase plus a diff preview, not a small red banner. The Site Manager's "Additional actions" menu and the top-bar kebab merge into one canonical "More" popover that holds Export to GitHub PR, Download .zip, Import .zip, Rename, Delete, and address-bar editing. The Blueprint tab and File tab still both expose the file tree column (this is by design — a blueprint bundle is multiple files), but they don't duplicate it elsewhere. The Save chip is co-located in the URL pill so the "Unsaved Playground" → "Saved" transition is visible without occupying a separate slot. Saved playgrounds, "Start new" sources, and the 43-blueprint gallery share one sheet tab (Sites) divided into three columns on desktop and three pill-switched segments on mobile — same affordance count either way. The dock is collapsed to a single "Workbench" pill when idle (one visible thing); tapping it expands the six tabs only when the user actually wants a panel.

## Trade-offs

Capping the sheet at 30% means dense panels — the File editor, the Database grid, the Logs viewport — have less vertical room than they would in a left-sidebar IA. A designer staring at a 500-line wp-config.php on mobile will scroll a lot. This is the deliberate price of iframe primacy: the WordPress site never disappears behind chrome. The drag-handle implies the sheet could grow taller; in the strict reading of this direction, it cannot (it would violate the 65% law). Pulling the sheet past 30% is therefore a fullscreen-the-panel gesture, not a "make it bigger" gesture — when a user really needs editor space, they should commit to the Files tab in fullscreen (a state we left visible as an Esc-able mode). The other trade-off: collapsing the dock to one pill at idle saves affordance budget but adds one tap before users see the six panels. We bet that's the right trade for first-touch clarity, given the launcher panel was already the main "find your stuff" surface.

## Self-critique rubric

```
[x] Affordance count at idle ≤ 8?           Score: 5/5
    Desktop idle (state A): 5 affordances — Refresh, URL pill,
    Fullscreen, More (kebab), Workbench pill. Mobile idle: 4
    (Fullscreen lives inside the More menu).

[x] iframe primary + fullscreen toggle?     Score: 5/5
    Iframe is ≥ 65% of viewport in every rendered state. Dedicated
    Fullscreen icon in topbar (desktop) and More menu (mobile);
    Esc to exit; state F shown.

[x] One door per feature (no duplicates)?   Score: 4/5
    Save chip lives only in URL pill. Apply & Reset only in the
    Settings sheet. Site Manager Settings is the same surface as
    the quick-settings popover (merged). One small caveat: Files
    tab and Blueprint tab both render the file tree column —
    intentional (blueprint bundles are multi-file), but a strict
    reading might call it a duplicate.

[x] One secondary surface (not many)?       Score: 5/5
    Exactly one sheet, capped at 30% viewport. Six tabs inside swap
    content. No second drawer, no second sidebar, no third popover.

[x] Direction expressed strongly?           Score: 5/5
    The 65% iframe floor is not a hint — it is the design's
    organizing constraint, visible in every rendered state. The
    direction's identity is unmistakable.

[x] Mobile feels like wider-mobile desktop? Score: 5/5
    Desktop is literally the mobile composition stretched: same
    top bar, same Workbench pill, same sheet, same dock. The
    launcher sheet uses three columns on desktop and three pill-
    switched segments on mobile — identical IA.

[x] Critique pass on glass/ambient use?     Score: 4/5
    Glass is used in the topbar, dock, and sheet — each justified:
    topbar glass lets the iframe color bleed through (we render
    an ambient-bleed gradient that picks up the WP theme's hue);
    dock glass keeps the floating affordance from occluding the
    iframe; sheet glass softens the boundary between iframe and
    panel. Glass is not decorative anywhere. The ambient-bleed
    strip is the one slightly indulgent touch — but it has a
    purpose (depth + theme echo) so it earns its keep.
```
