# V3 Design 033 - Play Deck Reset Rigor

## Thesis

This direction treats WordPress Playground like a game launcher that deliberately disappears once play begins. The Library is strong at discovery: saved Playgrounds, route starts, featured blueprints, and the full 43-item gallery have a decisive launch surface. The active state then returns to a full-size WordPress iframe with only the browser-like top bar, unsaved warning, Save, Library, Tools, Settings, and Focus controls visible.

## Remix, Merge, Remove

I remixed the Epic-style launcher into a transient Library overlay rather than a permanent storefront, because the live WordPress site has to remain the product. The six start routes expand into explicit inputs for vanilla settings, WordPress PR, Gutenberg PR or branch, GitHub repository, Blueprint URL, and a real ZIP file input. The Site Manager stays as one collapsible tools deck with Settings, Files, Blueprint, Database, and Logs; the toolbar gear routes to that same Settings tab instead of opening a second settings surface. WP Admin, Homepage, Export to GitHub PR, and Download .zip sit in the tools header where the current Site Manager exposes them.

## Trade-offs

Launcher discovery gets a large, confident surface, but it is intentionally modal: power users do not see the library and tools at the same time unless they open them. The tools deck is dense once expanded, but the first viewport stays calm and usable for browsing WordPress. The visual language leans dark and console-adjacent to fit the Epic family, so I used amber unsaved/destructive treatments, green saved state, blue primary actions, and solid panel backgrounds to avoid low-contrast glass on white WordPress pages.

## Self-Critique and Revision Note

After checking against `v3/INSIGHTS.md`, I revised the concept away from a permanent launcher rail and made play mode the default central surface. I also made route tiles reveal inputs in place, kept Database and Logs as named tool tabs rather than a generic "More", and finished the destructive Apply & Reset flow with cancel, typed confirmation, progress, completion, and a changed active Playground identity. The remaining risk is that the Library overlay is still visually dominant when opened; that is acceptable for this family as long as it reliably exits back to full-size play mode.
