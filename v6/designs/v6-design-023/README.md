# V6 Design 023 - Premium Depth Surface

## Thesis
This design uses the assigned **TypeUI Premium** skill as a product surface system: Inter and JetBrains Mono, tight 4/8/12/16/24/32 spacing, 8px radius, white titanium surfaces, restrained blue/violet accents, and quantified elevation/blur. The interaction model is conventional: one compact rail, one secondary pane, one Sites launcher, one Site Manager, and one destructive confirmation. The WordPress site remains a real iframe and owns the quiet state; the chrome only gets loud when Sites or Manager is summoned.

## Remix / Merge / Remove
I kept V5 #018's quiet-to-loud reveal, V5 #023's focus shift and ratio readout, V5 #035's depth as visual polish only, and V5 #036's Sites-as-canonical-launcher idea. I removed the disliked V5 #030 persistent two-row structure entirely. Sites owns saved playgrounds, all six launch routes, ZIP import, and the 43-blueprint gallery. Manager owns Settings, Files, Blueprint editor, Database, Logs, WP Admin/Homepage jumps, Export to GitHub PR, and Download .zip. Settings deep links open the Manager Settings tab rather than creating a separate surface.

## Trade-offs
The pane can become dense because this variation emphasizes real route input states instead of generic launch tiles. I accepted that density because it makes WordPress PR, Gutenberg PR/branch, GitHub import, Blueprint URL, and ZIP import immediately inspectable. The iframe has a true quiet/full-size state and a focus mode; when the pane is open the ratio readout makes the trade visible. On mobile the same pane becomes a bottom sheet over the iframe, preserving the same Sites/Manager ownership without wrapping into a persistent two-row toolbar.

## Self-Critique / Revision Note
Critical pass against `v6/INSIGHTS.md`: primary doors are limited to Sites and Manager plus a focus control; the design uses a real iframe; route forms are concrete; destructive reset has cancel, typed gate, and final state; export stays inside Manager/top overflow; no z-stack navigation is required. Critical pass against `v6/STYLE_VARIATION_SYSTEM.md`: Premium is applied beyond colors through typography, radius, density, elevation, capsule/button shape, icon weight, and state language. I revised once after mobile screenshot review: the 390px layout now compresses the session capsule and gives the iframe document a mobile viewport/wrapping rule so text does not clip. Remaining risk: the launcher is information-heavy at 390px, so the bottom sheet prioritizes scrollable task completion over showing many cards at once.
