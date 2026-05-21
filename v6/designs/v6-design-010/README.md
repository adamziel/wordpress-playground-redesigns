# Resize Gauge Playground

## Thesis

This design uses the assigned TypeUI **Mono** style skill as a functional shell for smart resize: compact monospace typography, hard 4px/8px geometry, high-contrast stone surfaces, and green/blue state color all support the interaction instead of just dressing it. The iframe and the secondary surface are always present, and the seam between them is the teaching layer. It labels the snap ratios directly: pane focus `38/62`, rest `50/50`, site focus `76/24`, and preview `90/10`. The first viewport is a usable Playground session with the live WordPress iframe dominant, a visible Sites widget, and a one-shot pulse on the gauge so the focus behavior is discoverable without reading documentation.

## Remix / Merge / Remove

I kept `023-smart-resize` as the core interaction, added `018-quiet-rail-to-loud` restraint by using one swappable secondary pane, borrowed only the polish of `035-three-layer-depth` through shadow, tint, and edge emphasis, and used the `036` Sites widget idea as the canonical door into saved sites, start routes, imports, and blueprint discovery. I deliberately did not use `030-two-row-top-bar`: identity and context live in one compact runtime capsule plus the pane header, not two persistent horizontal rows. Settings, Files, Blueprint, Database, and Logs are tabs inside the single secondary surface. The launcher keeps all six current start routes with route-specific inputs, the full 43-blueprint gallery with search and category filters, and saved playground state. Export to GitHub PR and Download `.zip` live in one additional-actions menu in the pane header.

## Trade-offs

The pane is never fully gone unless the user enters fullscreen, because the design treats Playground chrome as a persistent instrument panel around the iframe. To compensate, there is a `90/10` preview detent and a true fullscreen mode with an Esc exit pill. The mono visual system is intentionally dense; this helps logs, code, ratios, and state labels feel native, but it can feel more technical than the current Playground launcher. On mobile, the same ratio system rotates into a vertical split with the gauge becoming horizontal; the surface remains the same rather than becoming a separate mobile fallback.

## Self-Critique / Revision Note

After checking the V6 insights, I revised the design toward fewer global doors and a more visible teaching layer: the seam is labeled, snap states are clickable, and the Sites widget expands into the same pane rather than opening a second drawer. Feature coverage is visible in the HTML: top toolbar controls, Save/resume consequence, all six launch routes, 43 blueprints, Site Manager tabs, WP Admin/Homepage, export/download, destructive reset confirmation, loading overlay, toast, and fullscreen. The remaining risk is density at `390x844`; the mobile CSS collapses labels and stacks the split, but the full blueprint gallery still asks for scrolling.
