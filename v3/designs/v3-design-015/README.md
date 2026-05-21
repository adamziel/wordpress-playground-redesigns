# V3 Design 015 - Fluent Focus Playground

## Thesis
This redesign keeps the Windows 11 Settings calmness but changes the hierarchy: WordPress is still the main app, while settings and tools feel like edge-docked system surfaces around it. The default desktop view is a split workbench with a large live iframe, a lightweight category rail, and a Mica-style Site Manager panel. The key V3 move is Focus mode: the iframe becomes full-size and the chrome collapses into a translucent route bar that still keeps Save, URL, WP Admin, Homepage, and Exit focus reachable.

## Remix, Merge, Remove
I merged the quick settings gear and Site Manager Settings tab into one settings surface; the gear simply opens the same panel instead of duplicating the form. The launcher keeps all current Playground starts, but each route tile exposes its real input before booting: WordPress PR, Gutenberg PR or branch, GitHub repo, Blueprint URL, and ZIP import. The Saved Playgrounds launcher, featured blueprints, full 43-card gallery with search and category filters, and Your Playgrounds list stay together in one Windows-style overlay. Files, Blueprint, Database, and Logs remain Site Manager tabs, with WP Admin, Homepage, Export to GitHub PR, and Download .zip kept as management actions.

## Trade-offs
The split layout gives tools more context than a modal, but it still consumes width on smaller laptops, so Focus mode is the escape hatch rather than a secondary flourish. The launcher is intentionally roomier than the current drawer because route inputs and gallery filtering need space; that means the iframe is temporarily covered during discovery. On mobile, the rail disappears and tools become a bottom-sheet-like panel behind the bottom navigation, which keeps the site usable but makes deep inspection a two-step action.

## Self-Critique And Revision Note
The first pass was too close to the earlier Windows Settings direction: calm, but still letting settings compete with the live site. I revised it by making the mode switch prominent, adding the focus overlay controls, removing duplicated settings forms, rendering a destructive reset confirmation, and filling the launcher with visible route inputs. The remaining weakness is that the prototype uses a mocked iframe document instead of a live WordPress instance, which is appropriate for a static GitHub Pages artifact but still less faithful than the real Playground runtime.
