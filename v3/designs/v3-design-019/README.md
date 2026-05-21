# V3 Design 019 - Inspector Focus

## Thesis
This direction treats WordPress Playground like a browser tab with DevTools attached. The live WordPress iframe is the primary surface, the top bar behaves like browser chrome, and the yellow unsaved warning sits inside the address area where users already expect trust and state warnings. The inspector is available but not dominant: it can collapse to a thin dock, switch through Settings, Files, Blueprint, Database, and Logs, and the first-class "Full-size site" mode keeps Save, URL entry, WP Admin, Homepage, and Exit controls reachable while WordPress takes the whole viewport.

## Remix, Merge, Remove
The current Site Manager becomes a docked inspector rather than a separate left sidebar. Settings, Files, Blueprint, Database, and Logs stay intact as DevTools-style tabs, with WP Admin, Homepage, Export to GitHub PR, and Download .zip in the inspector header. The Saved Playgrounds drawer becomes a launcher overlay with three explicit sections: Start New, Blueprint Gallery, and Your Playgrounds. The route tiles do not stay generic; WordPress PR, Gutenberg PR/branch, GitHub, Blueprint URL, and Import .zip each reveal the input field they need. The settings popover still exists because the current product has it, but it points at the same settings model and uses the same destructive reset confirmation.

## Trade-offs
The DevTools metaphor favors builders and testers more than first-time casual users, so the inspector is visually secondary and collapsible. A bottom or right dock necessarily competes with iframe pixels; the full-size site mode is the release valve for real WordPress work. The launcher overlay hides the site while open, but it earns enough room for route forms, featured blueprints, a fuller searchable gallery, and saved Playground rows. On mobile the inspector becomes a bottom sheet with a short rail rather than a cramped permanent sidebar.

## Self-Critique and Revision Note
The first pass risk was exposing too much chrome at once, which was a recurring weakness in earlier Figma-like and inspector-first designs. I revised the hierarchy around three states: site first, launcher when choosing a route, and inspector only when inspecting. The remaining weakness is that the static gallery renders a representative subset rather than all 43 cards, though the UI explicitly labels the complete gallery and preserves the required search and category filters.
