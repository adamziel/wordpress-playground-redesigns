# 50 v5 Design Directions

Each direction takes a winning v1 lesson and pushes one specific axis further. Two designers given the same direction must still produce visibly different IA. Read your assigned line carefully — it tells you what to refine and *why* the user liked the parent.

## Mobile-first refinements (1–8) — extending #06

1. **Mobile-first, iframe ≥ 65%.** Strict rule: iframe never shrinks below 65% of screen height even when sheets are open. Sheets overlay the bottom 35%. No "iframe disappears behind a panel."
2. **Single drag-sheet, three detents.** One bottom sheet. Drag to peek (40px), half (45%), or full. Every panel (Settings, Files, Blueprint, DB, Logs, Launcher) is a tab inside that sheet.
3. **Control-Center tiles.** iOS Control Center metaphor: a grid of frosted tiles in a top-right quadrant overlay. Each tile is one feature; long-press for detail.
4. **iPad Stage Manager lite.** One focused playground at full screen, two recessed thumbnails on the left, frosted dock of saved sites at the bottom.
5. **Translucent bottom tab bar.** Glass tab bar floats over iframe; fades to 0.15 opacity when scrolling iframe content; returns on touch.
6. **Pull-down for chrome.** Safari-style. The iframe is the entire screen by default; pull down from the top to expose URL, save, menu. Release to retract.
7. **Quarter-pie FAB.** A single floating action ball, bottom-right. Press-and-hold expands into a quarter-circle of 6 spokes (Refresh, Save, Sites, Files, Blueprint, Logs).
8. **Vertical reels feed.** Swipe vertically through three full-screen "pages": current site → blueprints feed → saved sites. Like TikTok navigation.

## Iframe-dominant refinements (9–16) — extending #38, #15, #64

9. **32px micro-toolbar only.** That's the entire chrome at idle. A 32px-tall top bar holds URL + name + save + menu. Click menu → contextual sheets fly in.
10. **Ambient side rails.** Two 24px gradient strips on the iframe's left/right that glow the WordPress theme colors. Hover reveals hidden chevrons → side panels.
11. **Auto-hide HUD.** Video-player style. The iframe is full-bleed. Mouse to any edge reveals chrome for that edge (top = URL, bottom = sites, left = files, right = settings). Idle 2s → hidden.
12. **Corner FAB pie.** Iframe fullscreen. Bottom-right has a single small dot. Click → 8-slice pie menu radiates.
13. **One floating capsule.** A single horizontal capsule near the top contains: URL field, name pill, save, menu. Everything else is summoned from menu.
14. **Single word in a corner.** Only the playground name appears at idle (top-right corner, monospace). All chrome appears on hover. Period.
15. **Cmd+K is the UI.** No visible chrome at all except a "Press ⌘K" hint. Every action lives in the palette.
16. **Museum frame.** The iframe sits inside a thin gilded chrome (5px border, real micro-typography of "WORDPRESS PLAYGROUND" at the bottom of the frame). All action via top menu.

## One-secondary-pane variants (17–24) — extending #55, #14

17. **Pull-tab from the right.** Iframe left, 24px tab on the right edge. Pull left → 25% pane slides in. Pull further → 50%. Snaps at 25/50/75. One pane, swappable content.
18. **Quiet-rail-to-loud.** A 56px icon rail on the left, always visible. Click an icon → pane expands to 320px next to it. Iframe shrinks. Click X → returns to rail.
19. **Bottom dock + mini-panel.** Saved playgrounds live as 48px favicons in a bottom dock. Click an icon → small Site-Manager mini-panel hovers above that icon. Switches sites and shows their controls in one move.
20. **One segmented secondary.** Iframe at top, single bottom pane occupying 30%. Pane content controlled by a segmented control (Settings/Files/Blueprint/DB/Logs). Resizable divider.
21. **Stage Manager v2.** Focused site at 80% center. Two recessed thumbnails on the left (smaller saved sites). Bottom dock has tools. Click a thumbnail → swaps focus with a smooth zoom.
22. **Chip windows.** Top bar carries 5 small "window" chips (one per section). Click chip → that section opens as a small floating, draggable card over the iframe. Multiple cards allowed but rare.
23. **Smart resize.** Two panes (iframe + secondary). The one you interact with grows; the other shrinks. No manual divider — momentum-based.
24. **Snap-to-iframe.** Secondary pane is always present at 30%; double-tap the iframe → it grows to 100% with chrome auto-hidden. Esc returns.

## Top-bar-first refinements (25–32) — extending #64

25. **Browser tabs across the top.** Each saved playground = a real browser tab. New-tab = launcher. URL bar acts on the active tab. DevTools-style dock below remains.
26. **Omnibox.** A single combobox top-center that handles URLs, blueprint search, command palette, and quick actions. No other top-bar elements.
27. **Status-only top bar.** Slim 24px bar with just PHP / WP / saved status. No buttons. Everything else via Cmd+K.
28. **Fade-on-focus.** Top bar is solid normally. When mouse enters iframe → fades to 20% opacity capsule.
29. **Breadcrumbs nav.** Site › Settings › PHP. Every navigation is breadcrumb-driven.
30. **Two-row top bar.** Row 1: site identity + URL. Row 2: contextual actions for the active panel. Row 2 changes content.
31. **Left gutter.** 48px vertical icon gutter on the left. No top bar at all. The gutter holds Refresh, Save, Sites, Site-Manager-tabs, Settings.
32. **Top bar with embedded Apple-style traffic lights.** Three colored dots on the left double as Refresh/Save/Settings. Familiar shape, unfamiliar use.

## Glass/ambient refinements (33–37) — extending #38

33. **Three glass surfaces, max.** Pick three glass panels (e.g., top pill, bottom dock, right capsule). Everything else is solid or hidden. Quantified restraint.
34. **Content-aware tint.** Detect the iframe's dominant color (sampled JS); tint all glass surfaces to complement. Demonstrate with two boots: a dark theme and a warm theme — different chrome tint.
35. **Three-layer depth.** Three z-levels: primary (least blur, closest), secondary (medium blur), backdrop (heaviest blur). Information hierarchy is *depth*.
36. **Corner-widget Control Center.** Frosted square widgets in each of the four corners (Sites · Settings · Logs · Sites-Manager). Always-visible at 64×64. Click → expands toward center.
37. **HUD glass.** All chrome is glass that materializes on mouse-move and dissolves 2s after idle. The iframe is the only solid thing.

## Composite refinements (38–45) — synthesizing multiple winners

38. **Mobile-first × DevTools dock.** Mobile-style bottom tab bar but each tab opens a DevTools-style bottom-docked panel (not a full-screen sheet). The iframe stays visible.
39. **Tabs-only × auto-hide.** Top tab strip is always there; clicking the iframe enters fullscreen mode that auto-hides the strip. Esc to exit.
40. **Cmd+K × Glass.** All panels summoned via Cmd+K, rendered as frosted overlays. No persistent chrome except a status capsule.
41. **Ventura sidebar × Win11 generous whitespace × fullscreen toggle.** 5 categories only. Live Preview category has a giant "↗ Open fullscreen" button.
42. **Notion-page × inline blocks.** Each playground is a Notion-style document. The iframe is one block. Settings, Files, Blueprint, etc. are other inline blocks beneath it. Scroll to navigate.
43. **Finder rail × Pull-tab.** Finder-style left rail of saved playgrounds + a single iPad-style pull-tab on the right edge for the active site's Site Manager.
44. **Epic launcher × Recede.** Epic cinematic launcher *only* when no site is running. Once a site boots, the launcher recedes to a quiet 56px sidebar. Two distinct modes, smooth transition.
45. **Spatial × Restraint.** Take Figma's spatial-memory but show ≤ 6 affordances at idle. Pan/zoom is the only navigation. Sites are positioned in 2D space, each a small thumbnail. Zoom in → that site fills screen with chrome.

## Single-axis bold refinements (46–50)

46. **Address-bar-driven.** Everything goes through the URL bar. Type `blueprints` → palette of blueprints. Type `pr:12345` → boot that PR. Type `/wp-admin` → navigate. Like Chrome's omnibox done right.
47. **Save-state as primary visual cue.** The single biggest UI element is the *saved-state indicator* — a large badge that changes color/shape/text based on whether the site is unsaved, saving, saved, or stale. Everything orbits this badge.
48. **Time-machine refined.** Just the iframe + a single thin scrubber strip across the top. Scrub left → see how the site looked at an earlier save. Settings panel reachable by tapping the scrubber knob.
49. **Conversational composer.** A single text input at the bottom: "Start a coffee shop on WP 6.7 with PHP 8.3." Visual fields auto-populate the launcher. Plain-English first; clickable UI second.
50. **Sentence-driven settings.** Settings are presented as English sentences with inline-editable fragments: "This site runs **WordPress 6.7** on **PHP 8.3** in **English**, with network access **enabled**." Click any bold word to change it. No forms.
