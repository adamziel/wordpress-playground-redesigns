# v6 Design 007 - Material Depth Console

## Thesis
This redesign uses the assigned TypeUI style skill, **Material** (`v6/style-skills/typeui-material.md`), as more than a color pass: Roboto display headings, Inter body text, Fira Code labels, an 8px control radius, 4/8/12/16/24 spacing, layered elevation, tinted surfaces, and explicit state feedback all come from that source. The product direction is a restrained professional surface: the live WordPress iframe remains the center, a quiet rail carries the canonical doors, and one Material pane swaps content without becoming a dashboard.

## Remix, Merge, Remove
I kept the V5 quiet-to-loud reveal from `018`, but changed the skin from dark monochrome to light Material surfaces with crisp ownership. I kept `023`'s focus-shift idea as a visible preview-priority gauge with a 68/32 to 91/9 detent and a fullscreen escape. I borrowed `035` only for elevation, blur, and surface hierarchy, not for abstract z-stack navigation. I used the Sites-widget idea from `036` by making the top rail tile the saved identity plus launcher door. I removed the persistent two-row top bar pattern from `030`; identity and address live in one compact capsule, while routes and tools live in the rail and pane.

## One-Door Map
Sites, saved identity, start routes, imports, featured blueprints, full blueprint gallery, and saved playgrounds all live behind the Sites tile. Site Manager is one pane with Settings, Files, Blueprint, Database, and Logs tabs. Settings quick access opens that same Manager settings destination. Exports live only in the Export rail door, with GitHub PR export and `.zip` download side by side. WP Admin and Homepage are contextual actions inside Manager settings and update the iframe path. Save is the top capsule action plus the matching in-pane notice action for the same local-save flow.

## Trade-offs
The rail plus top capsule means the idle surface has more visible structure than a pure iframe-first design, but it makes the one-door map legible without a second row or scattered widgets. The pane uses fixed Material detents rather than a draggable splitter, which keeps the layout predictable but gives power users less arbitrary resizing. The settings destination is reachable as a deep link into the Site Manager settings tab; that is intentional because the current product requires top-level settings access, but the actual settings UI is not duplicated.

## Self-Critique and Revision Note
After checking against `v6/INSIGHTS.md`, I tightened the design around a single pane, folded blueprints into Sites instead of giving them a separate rail door, removed the duplicate top-capsule Sites trigger, and made exports their own one-door destination to avoid hiding them in a junk menu. Against `v6/STYLE_VARIATION_SYSTEM.md`, the design applies Material typography, radii, spacing, layered surfaces, button shapes, icon weight, and state language. Remaining risk: Settings can be opened directly from the rail into the Site Manager Settings tab, so the implementation depends on users reading that as a deep link into the same destination rather than a separate settings product.
