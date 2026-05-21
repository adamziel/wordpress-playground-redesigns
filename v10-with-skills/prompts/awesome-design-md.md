You are working in `/home/claude/redesign/site`.

Task: create five WordPress Playground v10 prototypes using the external reference skill `awesome-design-md`. Do not install any skill or package. Use the cloned reference at `/home/claude/redesign/external-skills/awesome-design-md` only as reading material.

Read first:

- `v10-with-skills/BRIEF.md`
- `v10-with-skills/DIRECTIONS.md`
- `README.md`
- `DESIGN_BRIEF.md`
- `v7/DESIGN_BRIEF.md`
- `/home/claude/redesign/external-skills/awesome-design-md/README.md`

The skill lens: Awesome DESIGN.md is a collection of explicit design-system documents inspired by public product sites. For this task, embody that approach by making each design feel like it was generated from a concise design-system spec: named tokens, consistent surfaces, deliberate typography, and a recognizable product-style reference from the README collection. You may use the collection descriptions in the README, but do not copy brand assets or install anything.

Own only these folders:

- `v10-with-skills/designs/001-design-md-console-atlas`
- `v10-with-skills/designs/002-vercel-precision-runner`
- `v10-with-skills/designs/003-linear-issue-board-recast`
- `v10-with-skills/designs/004-miro-canvas-for-sites`
- `v10-with-skills/designs/005-ibm-carbon-lab-bench`

For each folder, create exactly:

- `index.html`
- `README.md`
- `meta.json`

Use the matching direction from `v10-with-skills/DIRECTIONS.md`. Set `meta.skill` to `awesome-design-md`. In `meta.skillSource`, name the collection entry or entries that shaped the visual system, for example "awesome-design-md README: Vercel, Linear, IBM descriptions". In the visible UI, include a small source annotation saying the design came from Awesome DESIGN.md.

Implementation requirements:

- Single self-contained HTML file per design with inline CSS and inline JS.
- Include a real `<iframe>` with `srcdoc` that renders a plausible WordPress site preview.
- Each design must visibly cover every hard requirement in `v10-with-skills/BRIEF.md`.
- Avoid a two-row persistent top bar. Keep the iframe dominant.
- Keep each design visually distinct, not five skins of the same layout.
- Use ASCII text only. No emoji.
- Use realistic mock content: saved playgrounds, at least 16 blueprint cards, settings, files, blueprint JSON, database, logs, exports, typed reset or snapshot confirmation.
- Include responsive CSS for about 390x844 mobile.
- You may use external Google Fonts or icon CDNs, but do not add build tooling or packages.

After creating the files, run validation for all five:

```bash
node v10-with-skills/scripts/validate-design.mjs 001-design-md-console-atlas
node v10-with-skills/scripts/validate-design.mjs 002-vercel-precision-runner
node v10-with-skills/scripts/validate-design.mjs 003-linear-issue-board-recast
node v10-with-skills/scripts/validate-design.mjs 004-miro-canvas-for-sites
node v10-with-skills/scripts/validate-design.mjs 005-ibm-carbon-lab-bench
```

Fix any validation failures before finishing. Do not edit `v10-with-skills/index.html`, `v10-with-skills/designs.json`, root files, or another worker's folders.

