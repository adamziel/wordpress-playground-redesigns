# Mono Slot Resize

## Thesis

This design uses the assigned TypeUI **Mono** skill from `v6/style-skills/typeui-mono.md`: Space Mono and JetBrains Mono, compact spacing, hard 4px/8px radii, high-contrast stone surfaces, neon green/cyan state accents, and terminal-like density applied to a product shell rather than a terminal. The core idea is a compact saved-site widget that expands into one ratio-changing work surface. Choosing a saved site, a launch route, a blueprint, or a manager tool changes the work ratio instead of opening unrelated drawers.

## Remix / Merge / Remove Choices

I kept the quiet-to-loud reveal from `018` but changed the skin to a mono stone/ink system. I used `023` smart resize as the interaction: quiet, site focus, work focus, and full preview are explicit ratio states with a labeled gauge. I borrowed only styling depth from `035` through shadows, tint, and blur on the single work surface, not a depth navigation model. I used the `036` Sites widget lesson as the canonical door for saved identity, resume, all six launch routes, import, and blueprint discovery. I avoided the disliked `030` persistent two-row top bar; the top controls are a single compact runtime capsule plus the Sites widget.

## Trade-offs

The mono style is intentionally dense, which works well for route inputs, logs, code, and ratio labels, but it can feel more technical than the current Playground launcher. The quiet state favors iframe primacy, so the full launcher only appears after the Sites widget is opened; that is a conscious one-door trade-off. On mobile the same ratio system becomes a bottom work sheet, preserving the product logic while keeping a visible iframe floor and a full preview button.

## Self-Critique / Revision Note

After checking `v6/INSIGHTS.md`, `v6/STYLE_VARIATION_SYSTEM.md`, and the V6 audit, I revised toward a real iframe, fewer primary doors, stronger route input states, and clearer reset consequences. The final file shows active session, Sites/blueprint launcher, Manager tools, loading, save/resume toast, destructive reset confirmation, and fullscreen/focus. Remaining risk: the full 43-blueprint list is compact on `390x844`, so it relies on scrolling inside the same sheet.
