# V6 Design 029 - Rail Ratio Console

## Thesis
Rail Ratio Console combines quiet-rail IA with smart resize. The first viewport is an active Playground session with the WordPress preview in a real iframe; the left rail has only two durable rooms, Sites and Site Manager, plus a near-full preview detent. Opening either room reveals the same single secondary surface and changes the iframe/pane ratio: Sites starts in site focus, Manager work tabs expand to work focus, and preview collapses the surface to a 94/6 route before true fullscreen hides all chrome with Esc return.

## TypeUI Style
I used `corporate` from `v6/style-skills/typeui-corporate.md`. It is applied beyond colors: Poppins carries headings, Open Sans carries the UI/body layer, IBM Plex Mono labels paths, tags, ratio state, code, and logs, spacing follows an 8px rhythm, radii stay at 4px and 8px, surfaces use crisp enterprise borders and shallow measured elevation, and blue/violet/success/warning/danger are reserved for action/state semantics. The component language leans into corporate ledgers, metrics, form rows, and controlled tables rather than decorative cards alone.

## Remix, Merge, Remove
From `018-quiet-rail-to-loud`, I kept the restrained rail and one secondary surface but removed the separate Blueprints door; blueprint discovery lives under Sites, while active `blueprint.json` authoring lives under Manager. From `023-smart-resize`, I kept ratio detents, the visible seam gauge, and a fullscreen escape, but made the rail the chooser for which content occupies the pane. From `036-corner-widget-control-center`, I kept the Sites interaction as the canonical saved/launch/discovery door without copying four corner widgets. From `035-three-layer-depth`, I borrowed depth only for polish: blur, tint, and elevation clarify hierarchy but do not become navigation. I avoided `030-two-row-top-bar`; there is one compact toolbar, with deep links into the same rail-owned surfaces.

## Trade-offs
The toolbar still exposes direct buttons for Sites, Manager, and Settings because the current product requires those capabilities at the top level; they all deep-link to the same two rail-owned rooms to avoid separate destinations. The preview detent leaves a narrow rail/pane trace instead of instantly entering fullscreen, which makes the smart-resize model teachable but costs a little chrome. On mobile, the rail becomes a bottom control strip and the pane becomes one bottom sheet, preserving the same product logic while giving the iframe a floor; the gallery is dense but still searchable and filtered.

## Critical Pass
After checking `v6/INSIGHTS.md`, I revised the IA around two primary rooms and ensured the quiet default is real: the page loads with the pane collapsed and the iframe dominant. I also made route-specific input states concrete, added a visible `.zip` dropzone, gave reset a gated typed confirmation with cancel/final boot state, and kept WP Admin/Homepage/export/download inside Manager/top More rather than adding extra rail doors. After checking `v6/STYLE_VARIATION_SYSTEM.md`, I pushed the corporate style at the component level with ledger panels, metrics, tables, controlled form density, mono labels, and restrained elevation rather than only changing the palette.

## Self-critique
```
[x] TypeUI corporate applied beyond color?          5/5
[x] Quiet rail plus one secondary surface?          5/5
[x] Smart resize is visible and useful?             4/5
[x] Full-size iframe / fullscreen route?            5/5
[x] One door per feature ownership?                 4/5
[x] Mobile feels like the same product?             4/5
[x] Product feature coverage preserved?             5/5
```
