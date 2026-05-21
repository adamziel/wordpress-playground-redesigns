# V3 Design 039 - Reset-Rigorous Inspector

## Thesis
This redesign treats Playground as a browser tab with a product-grade inspector attached. The first screen is the running WordPress iframe, a crisp address bar, refresh, Save, launcher access, tools access, settings access, and an unmissable amber unsaved warning. The DevTools influence is intentionally restrained: the Site Manager ships collapsed and expands into dockable Settings, Files, Blueprint, Database, and Logs only when the user asks for depth.

## Remix, Merge, Remove Choices
I remixed the strongest inspector/devtools prior work by keeping the browser top bar and yellow warning, but moved the product away from an always-open developer console. The gear opens the same Settings tab rather than a second settings form, so Apply & Reset has one canonical flow. The Saved Playgrounds launcher includes Start New, featured blueprints, all 43 gallery entries, and Your Playgrounds, with concrete route forms for WordPress PR, Gutenberg PR/branch, GitHub repo, Blueprint URL, and a real ZIP file input. WP Admin, Homepage, Export to GitHub PR, and Download .zip live in the inspector header and focus controls instead of being buried in a generic actions drawer.

## Trade-offs
The opened inspector is dense because it preserves the current Site Manager feature surface, but the default state keeps that weight out of the way. The launcher covers the iframe while browsing or importing so route forms and the blueprint gallery have room to be legible. Mobile uses named bottom navigation for Site, Launch, Files, Debug, and Settings rather than a catch-all More bucket, but still serializes power-user work into one sheet at a time.

## Self-Critique / Revision Note
After checking `v3/INSIGHTS.md` and the V3 audits, I revised the concept around the known failure points: the WordPress surface is a real `iframe`, ZIP import is a real upload control, Database and Logs are first-class inspector tabs, and full-site focus mode keeps URL, Save, WP Admin, Homepage, refresh, and exit controls reachable. The destructive-state variation is finished as a visible flow: warning, cancel, Save first, typed `RESET`, progress, result, and changed active state. The remaining risk is button count inside the expanded inspector, but that cost is contained behind an explicit Tools action.
