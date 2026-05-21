# v7 / 004 — Smart resize · Sites corner

## 1. Thesis

Smart-resize is the layout (two panes that re-weight to whichever you touch). The single piece of persistent chrome above the iframe is a small frosted **Sites widget in the top-left corner** that *simultaneously* shows live status — current site name, running/booting/unsaved, WP & PHP version — *and* is the canonical door to the launcher. Clicking the widget swaps the secondary pane into Sites mode and snaps the smart-resize gauge from 50/50 → 40/60 in the pane's favor, opening the rail-anchored saved-sites list at the widget's corner while the wide blueprint browser fills the right pane. Everything else (Settings, Files, Blueprint, DB, Logs) lives behind quiet tabs at the pane's head. One door per feature, one secondary surface, one slim bar, one widget — and SR is what makes the IA feel alive rather than static.

## 2. Primitives composed (v7 KEEP, named)

- **SR** (smart-resize, v5 #023) — the *backbone*. Two panes that always coexist; whichever you touch grows. Five snap ratios: 50/50 (rest, State A), 75/25 (iframe focus, State C), 35/65 and 40/60 (pane focus, States D–G), 60/40 (booting, State H), 100/0 (fullscreen, State J). A small white **gauge pill** straddles the seam at every state — explicit IA legibility, no hidden ratio. No drag handle — the seam itself is informational, never a control. (Matches v7 brief §2.10: "Visible smart-resize gauges encouraged.")
- **CWS** (corner-widget Sites, v5 #036) — the persistent **Sites widget at top-left** is the *headline composition*. It floats over the iframe (frosted glass, ambient-tinted by content beneath). At idle it shows the live status (site name + state pip + WP/PHP versions + ⌘K hotkey). Clicking it (or pressing ⌘K) expands the widget *in place* into a saved-sites rail anchored to its corner, AND swaps the right pane to Sites mode so the wide blueprint browser appears — two affordances synchronized through one door. This is exactly the direction prompt ("clicking the widget pushes the secondary pane into Sites mode and grows it to 60%").
- **DEV** (DevTools slim top bar, v1 #64) — supporting role. 44 px single row, never two-row (DROP). Status-pill (saved/saving/unsaved) instead of red banner. Refresh, URL, name pill, optional Save button, Fullscreen, More — seven items max.
- **3LD** (three-layer depth, v5 #035) — *visual only, never interactive control* (per v7 brief §2.8). The receding pane gets a subtle 2 px blur + slight desaturation in States B, C, D, F, G — it tells you which pane is in focus without becoming the interaction surface. The booting iframe gets a 0.5 px blur + 50% opacity under the boot overlay. Quantified blur scale: 0 → 0.6 → 2 → 8 px (boot ring).
- **TAB** (tabs-only, v1 #53) — six pane-internal tabs (Sites · Settings · Files · Blueprint · Database · Logs). Inside the pane they are not chrome; chrome is the bar. This delivers all five Site-Manager tabs through a single segmented control, no nested sidebars.

## 3. What I remixed / removed and why

The classic Playground has *three* doors to settings (popover, Site Manager Settings tab, info-notice "Save site locally" button) and *two* doors to the launcher (the dropdown trigger in the bar plus the right drawer it opens). I collapsed both. **Settings** lives in exactly one place — the Settings tab inside the secondary pane — and the info-notice now lives *in that tab* with a "Save site locally" button beside it (State I). The **launcher** is the Sites widget alone: it shows your current site at idle, and when you click it, the saved-sites list expands at the corner while the right pane swaps to a wide blueprint browser (search + 10 category chips + 18 cards visible from BLUEPRINTS.md, scrolling to all 43). All six new-Playground sources (Vanilla, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip) live as buttons in the widget's body — *visible at the same time* as your saved sites and the blueprint catalogue. The "Additional actions" menu (Export to GitHub PR + Download .zip) appears as buttons on the Blueprint tab's toolbar AND in the top-bar More kebab; same destination, two contextual entries — I chose this over hiding exports entirely behind the kebab because exporting is contextually a blueprint operation. **Apply & reset** uses an auto-snapshot + typed-phrase confirm (`reset coffee-shop`) inside the Settings tab's Danger Zone — never a red banner (v5 brief §2.8 + v7 hard req).

## 4. Trade-offs

The biggest risk is **the gesture of "click pane → it grows"** — smart-resize's known discoverability tax. I mitigate three ways: (1) the gauge straddles the seam with a directional arrow (`→ pane`, `← iframe`) so cause-effect is visible at every focus shift; (2) the focused pane is *sharp* and the other carries a quantified subtle blur — the focus signal is visual (3LD as decoration); (3) the Sites widget's `⌘K` hotkey, the Save button's `⌘S`, and the Fullscreen `F` train power users without adding more buttons. A second trade-off: **the widget is 248 px wide** at idle — bigger than v5 #036's purist 64×64 because it carries name + state + version line legibly without truncation; an iconic 40 px widget would lose the dashboard value of the live status. Disclosed honestly. Third: on mobile, the widget becomes a horizontal pill spanning the top of the iframe area, and the secondary pane is a bottom sheet at four detents (18 % / 38 % / 65 % / 92 %) — same SR primitive, rotated 90 °, same tabs. The seam gauge sits at the top of the sheet. The desktop iframe never reaches 100 % at idle (the smallest pane state is 75/25); the explicit Fullscreen button is the escape hatch and is a top-bar affordance, demonstrated in State J.

## 5. Three demonstrated states (actually nine: A · B · C · D · E · F · G · H · I · J)

- **A** Idle 50/50 (Coffee Shop running, Settings tab parked)
- **B** Sites widget clicked → 40/60 (the headline interaction — widget expands as rail, pane shows blueprint catalogue)
- **C** Iframe focus 75/25 (user clicks the wp-admin posts list inside iframe)
- **D** Pane focus 35/65 (Files tab — full file tree, functions.php in editor)
- **E** Blueprint tab 40/60 (real blueprint JSON, all toolbar buttons including Export GitHub PR + Download .zip + Import .zip)
- **F** Database tab 40/60 (early-access notice, 13 table list, wp_posts data preview)
- **G** Logs tab 40/60 (mobile-rendered, search + level filters, realistic PHP log stream)
- **H** Booting 60/40 (boot ring + 8-step progress, blueprint visible in pane so you can edit while it boots)
- **I** Save transition (unsaved → saving → saved timeline; Save button appears only when unsaved, toast confirms)
- **J** Fullscreen 100/0 (mobile, chrome auto-hidden, Esc / F exit pill)

## 6. Mock data inventory

- **4 saved playgrounds**: Coffee Shop (running · 142 MB), Art Gallery — Vueo (paused · 78 MB), Feed Reader (Friends) (paused · 56 MB), Non-profit — Koinonia (paused · 64 MB)
- **1 unsaved playground** demonstrated in State I
- **18 blueprint cards visible** in State B's grid (Art Gallery, Coffee Shop, Feed Reader, Gaming News, Non-profit Org, Personal Blog, Personal Resume, Photography Portfolio, Skincare Blog, University Site, Custom Post Type Books, Twenty Twenty-Five, Latest Gutenberg, Minimal WooCommerce, wp-cli add posts, WordPress Beta, Fancy Dashboard, WPGraphQL); search + 10 category chips above (All 43 / Featured 5 / Website 10 / Personal 7 / Content 6 / Themes 6 / Gutenberg 4 / Experiments 3 / WooCommerce 4 / News 2)
- **Real blueprint JSON** in States E and H (`$schema`, `landingPage`, `preferredVersions`, `phpExtensionBundles`, `siteOptions`, `steps[]` including installTheme, installPlugin, importWxr, setSiteOptions, runPHP)
- **Realistic PHP log lines** in State G (info / notice / warn / error levels, with file paths, line numbers, request timing, cron events, sanitization warnings)
- **Real wp_posts table** in State F with mixed types (page, post, product) and statuses (publish, draft, trash)
- **Real functions.php** in State D (theme setup, register_nav_menus, wp_enqueue_style, WooCommerce class_exists guard)

## 7. Idle affordance count: 8

At rest (State A) the user sees:
1. **Sites widget** (CWS, top-left — live status + canonical launcher door)
2. **WP-mark** (refreshes iframe + brand)
3. **Refresh** button (explicit, also `R` hotkey)
4. **URL bar** (address + lock + Submit on Enter)
5. **Name pill** (status-only — saved / saving / unsaved; click to rename)
6. **Fullscreen** button (explicit toggle, `F` hotkey)
7. **More** kebab (Export to GitHub PR · Download .zip · Rename · Delete · Docs)
8. **Pane seam gauge** (informational, not a drag handle — counts as one affordance because it's a visible IA element)

The pane tabs (Sites · Settings · Files · Blueprint · DB · Logs) sit *inside* the secondary surface; the spec is explicit that this is "one secondary surface that swaps content," so the tabs are pane-internal, not idle chrome. The **Save button** appears only when the playground is unsaved (State I) — at the most common idle state, it is zero. The two pane-head contextual buttons (WP Admin · Home) are pane-internal and only present on relevant tabs.

## 8. Self-critique rubric

```
[x] Affordance count at idle ≤ 8?              Score: 5/5
    — Exactly 8, enumerated above. Save button hides itself when saved,
      reducing to 7 in the steady state.

[x] iframe primacy + fullscreen toggle?        Score: 5/5
    — iframe is always visible (never < 35 %). Explicit Fullscreen button
      in top bar + F hotkey + Esc exit + dedicated State J on mobile.

[x] One door per feature?                       Score: 4/5
    — Settings: one (pane tab). Launcher: one (Sites widget, expands to
      both widget-rail AND pane). Save: one (name pill = state, dark button
      = action when unsaved). −1 because Export to GitHub PR / .zip appear
      both in the Blueprint tab toolbar AND in the top-bar More kebab —
      contextually justified (blueprint export is a blueprint operation
      AND a session-wide export), but a strict reading flags duplication.

[x] One secondary surface?                      Score: 5/5
    — A single pane on the right with six swap-tabs. The widget's expanded
      rail is anchored to the same widget that's always there; it's an
      expansion of one corner widget, not a separate sidebar.

[x] Direction strongly expressed?               Score: 5/5
    — SR is the layout (every state captioned with its ratio + gauge);
      CWS is the headline interaction (State B). Every state shows BOTH
      primitives composed (widget lives across all 10 frames). The
      direction's literal phrasing ("clicking the widget pushes the
      secondary pane into Sites mode and grows it to 60 %") is realised
      verbatim in State B.

[x] Mobile = wider-mobile desktop?              Score: 4/5
    — Same single bar, same widget (rotated to top pill), same six pane
      tabs (rotated to a bottom sheet at four detents), same gauge.
      −1 because the widget-rail on desktop doesn't appear on mobile —
      mobile substitutes a full-width sheet for the Sites tab, which is
      different geometry though same IA.

[x] Primitive(s) from §1 KEEP named & used?    Score: 5/5
    — Five named in §2 (SR, CWS, DEV, 3LD, TAB) and visibly composed.
      The direction asked for SR + CWS specifically; both are present and
      coherently interlocked (the widget click drives the SR ratio change).

[x] No banned patterns (§1 DROP)?               Score: 5/5
    — Single 44 px top bar (NOT two-row). 3LD used as visual decoration
      only (the dimmed pane is not the interactive control surface; you
      still click the pane *content* to focus it, not the blur). No
      terminal/console echoing visual UI (Logs is a one-way viewer, not
      a duplicate command channel).
```

All rows ≥ 4. No revision needed.
