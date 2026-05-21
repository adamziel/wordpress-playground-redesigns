# V3 Design 032 - Calm Canvas Reset Rigor

## Thesis

This direction treats WordPress Playground like a focused design canvas without turning it into an infinite-board toy. There is one selected live WordPress frame, a small Layers/Assets rail for orientation, a sparse top toolbar, and a contextual inspector for the current Playground. The live iframe remains the main object, with fit/minimap/focus controls and a focus mode that keeps Save, path navigation, WP Admin, Homepage, and Exit-equivalent chrome reachable.

## Remix, Merge, Remove

I remixed the liked Figma-like, inspector-first, iPad split, and launcher feedback into a calmer single-frame model. Saved Playgrounds and start routes live in one launcher, but every route has its own visible form: WordPress PR, Gutenberg PR/branch, GitHub repo, Blueprint URL, and real ZIP upload. The Site Manager becomes the right inspector with Settings, Files, Blueprint, Database, and Logs tabs; the toolbar gear routes to that same Settings tab instead of creating a second destructive path. WP Admin, Homepage, Export to GitHub PR, and Download .zip stay in the inspector header/action area, while Save is promoted in the top bar and the unsaved canvas note.

## Trade-offs

The canvas metaphor is intentionally restrained, so it gives up the novelty of many draggable saved-site frames in favor of a clearer running-site-first product. The left rail is useful context, but it is secondary and collapses on mobile into a bottom-sheet pattern. The inspector is dense once opened; the mitigation is that it is contextual, collapsible, and absent in focus mode. The launcher is a workflow rather than a catalog wall, so the featured gallery is less cinematic than the Epic-like designs but better at preserving route inputs.

## Self-Critique And Revision Note

After checking the V3 insights, I revised the concept around the reset flow instead of leaving it as warning copy. Apply & Reset now has a native-feeling confirmation sheet with cancel, save-first, required acknowledgement, progress, result, and a changed active Playground state. I also kept the database surface within the current brief and avoided adding Adminer/phpMyAdmin-style extras that appeared in some prior designs.
