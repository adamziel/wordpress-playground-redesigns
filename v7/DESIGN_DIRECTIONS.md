# 40 v7 Synthesis Directions

Every direction composes 2-3 winning primitives from v1+v5. Your README must explicitly name them. Two designers given the same direction must still produce visibly different IA.

Notation: `[A]+[B]` = compose primitive A with primitive B. Primitives are: **QR** (quiet-rail-to-loud IA), **SR** (smart-resize), **3LD** (three-layer-depth visual), **CWS** (corner-widget-Sites interaction), **MOB** (mobile-first), **SPT** (Figma spatial), **EPC** (Epic launcher cinematic hero), **VEN** (Ventura sidebar), **W11** (Win11 mica restraint), **GLS** (glassmorphism), **TAB** (tabs-only), **iPAD** (iPad pull-tab), **DEV** (DevTools top bar).

## Smart-resize as backbone (1–8)

1. **SR + 3LD visual.** Two-pane smart resize as the IA; the receding pane gets +blur and -opacity to literally show its z-depth. Visible momentum gauge across the seam.
2. **SR + QR rail.** Smart-resize between iframe and a single secondary pane; the secondary pane has a quiet-rail of 5 icons on its own left edge that swap its content. Two layers of "one door" — pane shows what content, rail picks which.
3. **SR + GLS.** Smart-resize panes are glass surfaces tinted from iframe color; the iframe is the only solid surface. Gauge is etched into the glass.
4. **SR + CWS.** Smart resize + a corner Sites widget that's also a launcher; clicking the widget pushes the secondary pane into Sites mode and grows it to 60%.
5. **SR + DEV.** Slim DevTools-style top bar (status-pill saved-state); below it, smart-resize between iframe (left) and DevTools-like dock (right) that swaps Files/Blueprint/DB/Logs/Settings.
6. **SR + EPC.** When no site is running, the secondary pane is a cinematic Epic launcher at 50/50. Once booted, the launcher recedes to 25% automatically.
7. **SR + TAB.** Iframe + secondary; the secondary's content swap is driven by a tab strip *at the seam* between panes (tabs straddle the divider).
8. **SR + 3LD + CWS.** All three primitives at once. SR is the layout, 3LD is the visual depth, CWS is the persistent live status.

## Quiet-rail-to-loud variations (9–16) — same IA, new clothes

9. **QR + GLS.** Same 56px rail IA as v5 #018 but the rail is frosted glass with chevron pip + content-aware tint. Expanded pane is also glass.
10. **QR + 3LD.** Rail floats at z-level 1 (8px blur), expanded pane at z-level 2 (18px blur), Library overlay at z-level 3 (36px blur). Depth = state.
11. **QR + CWS.** The 56px rail is composed of 4 corner-widget cells in a vertical stack; each cell shows live status AND opens the pane to that section.
12. **QR + VEN.** The rail uses Ventura icon-and-label pills (not bare icons); expanded pane has Ventura whitespace and grouped sections.
13. **QR + W11 Mica.** Win11 Mica gradient backdrop; rail is a vertical Fluent nav; expanded pane is a Mica card with breadcrumbs.
14. **QR + EPC hero swap.** Idle: rail collapsed + cinematic Epic hero filling the iframe area. Once a site boots, hero recedes and rail becomes the only chrome.
15. **QR + MOB.** Same QR IA on desktop. On mobile, the rail rotates 90° to a bottom tab bar; expanded pane becomes a bottom sheet at three detents.
16. **QR rail on the RIGHT.** Mirror the v5 #018 design but rail is on the right edge. Different ergonomics for right-handers / right-attention cultures.

## Corner-widget Sites interaction generalized (17–22)

17. **Four corner widgets, sharp roles.** Top-left: Sites. Top-right: Settings + fullscreen. Bottom-left: Logs (tiny live error count). Bottom-right: Site Manager (Files/Blueprint/DB). Each widget shows live status + is its sole door.
18. **CWS + SR.** Widgets are corner pills at idle; clicking one expands its panel from that corner using a smart-resize-like growth that shrinks the iframe smoothly. The corner panel ratio snaps to 30/50/70.
19. **CWS + QR underlying.** Widgets are visible at idle. Clicking one summons a quiet-rail-to-loud pane on the same side, with that section pre-selected.
20. **One Sites widget + slim top bar.** Only one corner widget (Sites, top-left). Everything else lives in the top bar. The widget is rich; the bar is minimal.
21. **CWS + GLS.** Corner widgets are heavily blurred glass capsules that bloom into smaller-blur glass panels on click.
22. **CWS as edge swipes on mobile.** Same corner-pill IA on desktop. On mobile, each corner widget becomes a swipe-from-that-corner gesture.

## Spatial / Figma refinement (23–26)

23. **SPT minimum-chrome.** Saved playgrounds positioned in 2D space. ≤ 5 affordances at idle. Pan/zoom is the only navigation. Zoom in on a tile → that site fills screen with chrome materializing.
24. **SPT + CWS.** Spatial canvas of saved sites at idle. Once a site is focused, a corner widget appears as the door back to the spatial overview.
25. **SPT + SR.** Pan around the canvas to discover sites. Click one → smart-resize splits the screen between the spatial overview and the focused iframe; momentum-grow pushes overview down as you interact.
26. **SPT + 3LD.** Sites further from the active focus are more blurred, smaller, lower opacity. Depth = spatial distance from focus.

## Visual-style strong commits with restraint (27–32)

27. **W11 Mica + CWS Sites widget.** Win11 Settings.app generous-whitespace category sidebar (5 categories only). One canonical Sites widget in a corner. Big visible "Open fullscreen" button on the Live Preview category. Fixes v1 #15's missing affordance.
28. **VEN + SR.** Ventura sidebar of 5 categories on the left, smart-resize between sidebar and content pane on the right. Sidebar grows to 30% when interacted; content shrinks to 30% on its focus.
29. **GLS + 3LD strict.** Only 3 glass surfaces ever visible (top capsule, bottom dock, right pill). Each at a different quantified blur level. Everything else solid or hidden.
30. **TAB + 3LD.** Tabs across the top; the active tab is sharp, inactive tabs progressively blurred. The browser-browser metaphor with z-depth telling you where you are.
31. **DEV + GLS.** DevTools top bar + dock, but every surface is glass. Iframe is the only solid surface.
32. **VEN sidebar + EPC hero.** Ventura sidebar with Live Preview as first row. Live Preview holds an Epic cinematic hero for the active blueprint when not yet booted; switches to iframe when running.

## Mobile-first composites (33–36)

33. **MOB + CWS.** Mobile-first single design with four corner widgets that adapt: on desktop they are corners; on mobile they tile horizontally as a top status bar.
34. **MOB + SR.** Mobile-first; on mobile, smart resize between iframe and a bottom sheet (vertical instead of horizontal). On desktop, horizontal SR.
35. **MOB + QR.** Mobile-first; on mobile, the quiet rail is a bottom tab bar. Same loud-pane IA on both.
36. **MOB + DEV.** Mobile-first DevTools layout — top URL pill, bottom drawer that swaps. Identical on desktop just wider.

## Bold single-axis commits (37–40)

37. **Persistent Sites widget + smart-resize everywhere else.** The Sites widget is the only "chrome chrome" you ever see. Everything else is smart-resize tilesets. The iframe sits in the largest tile.
38. **One floating glass capsule + smart-resize secondary.** A single floating capsule replaces the top bar. Below it the iframe smart-resizes with one secondary pane. No other persistent chrome.
39. **Notion-style document + CWS.** Each playground is a Notion-style document with inline blocks (iframe is one block, blueprint is another). A corner widget Sites picker is the only persistent chrome.
40. **Save-state-pill as primary visual + corner widgets for everything else.** The single biggest UI element is the save-state pill (badge that changes shape/color through unsaved → saving → saved → stale). Everything else is in corner widgets.
