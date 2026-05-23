# 017 — Bottom Inspector Dock · DevTools

## Thesis

WordPress Playground is, fundamentally, a developer's sandbox. So the chrome borrows the
mental model people already have for the most-used developer sandbox of all: Chrome
DevTools. The WordPress iframe takes the top ~65% of the viewport, and a full-width
inspector dock sits below it taking the bottom ~35%. A 4px slate gripper between the two
lets you resize the split exactly like the DevTools panel. Inside the dock, the v7 #010
quiet rail is rotated 90 degrees into a horizontal tab strip — Sites · Settings · Files ·
Blueprint · DB · Logs — and the active tab is marked with a 2px Chrome-blue underline.

The visual idiom is the same one every web developer breathes: a white base, slate ink,
light-gray dock chrome, a single Chrome-blue accent, Inter for UI, JetBrains Mono for
code/paths. Hairlines are 1px at 10% opacity. 4px radius only on inputs and primary
buttons.

## What's locked vs. explored

Locked from the v7 #010 model: iframe-primacy, exactly one secondary surface (the dock),
a slim top capsule (refresh · address · name · save-pill · more · fullscreen), a corner
site widget in the iframe's bottom-left, a modal Library at z3, and a mobile mirror.

Explored — the structural shift: the secondary surface migrates from a left-side pane to
a bottom inspector dock. The dock is full-width and resizable. The "rail" becomes a top
tab strip inside the dock. Each tab also has its own sub-tab toolbar (e.g. Files has
New File / New Folder / Upload; Sites has Yours / New / Library; Logs has level filter
chips). The destructive Apply+Reset is gated by a typed-phrase confirmation modal that
also shows a diff and announces an auto-snapshot.

## Trade-offs

Pros: instant familiarity for any developer; the iframe gets the full horizontal width
which is closer to a real browsing surface; resizing the split between viewport and
inspector is a habit people already have.

Cons: the dock eats vertical space on short laptop screens; on mobile the dock has to
collapse into a bottom sheet (handled in panel K); a horizontal tab strip with six tabs
plus sub-tabs is denser than a 5-icon vertical rail, so we lean on the underline + ink
weight to keep the active state quiet but unambiguous.
