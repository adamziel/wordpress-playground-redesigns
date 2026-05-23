# 019 — Split-Rail Twin Pane (Mondrian)

## Thesis

Piet Mondrian's neoplastic grids are an extreme version of the v7 #010 IA: black rules carving a canvas into a few flat blocks of pure colour, each block doing exactly one job. That maps onto Playground perfectly. The WordPress iframe is the loud, sharp object on a white field. Around it, the chrome is reduced to a single yellow vertical strip with two coloured square buttons — a **red Launch** square on top and a **blue Inspect** square on the bottom — and one wide swap-pane whose footprint never changes. Thick 4–6px black borders separate every region, never overlapping, never rounded. The save-state pill, the address bar, and the corner site widget are all small ink-on-colour rectangles. The Mondrian visual idiom forces the design to commit to a flat hierarchy: there are exactly two destinations, two pane modes, and one live iframe — nothing else.

## Locked vs explored

What stays from the v7 #010 model: iframe-primacy (the WordPress site is the only un-bordered, full-colour surface that bleeds to edges); one slim top capsule across the iframe top; one corner site widget; one z3 modal Library; mobile mirror with a bottom bar. What this design explores: the **rail itself** — instead of five icons it is just two large coloured squares. Sites/Start/Library collapse into the **Launch** pane mode; Settings/Files/Blueprint/Database/Logs all live as 5 tabs inside the **Inspect** pane mode. The pane occupies a fixed rectangle to the right of the yellow rail; only its contents reflow as you toggle Launch ↔ Inspect.

## Trade-offs

The two-button rail is the most legible IA imaginable, at the cost of one extra tab-click to reach Database or Logs (you click Inspect, then the Database tab). The Mondrian palette is loud — the saturated red and blue squares attract more attention than the WordPress iframe at first glance, so the rail strip is kept narrow (84px), the iframe is allowed to flood a large white field, and the corner widget is a small red flag rather than a coloured block. Thick black borders are non-negotiable for the idiom; they cost a few pixels of working area but they create the unmistakable Mondrian grid that the user learns in one second. Apply+Reset uses a typed-phrase confirmation rendered in the same primary-block language so destruction is visually distinct from navigation but consistent with the idiom.
