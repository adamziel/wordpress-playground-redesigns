# WordPress Playground v10 With Skills

This round explores whether three external design-skill systems can push the WordPress Playground redesign beyond v7 while keeping the interaction lessons that already worked.

Use these local references only. Do not install them:

- `../external-skills/awesome-design-md`
- `../external-skills/taste-skill`
- `../external-skills/ui-ux-pro-max-skill`

The shipped URL target is:

`https://adamziel.github.io/wordpress-playground-redesigns/v10-with-skills/`

## Product Job

WordPress Playground lets developers, contributors, educators, and curious site builders run a disposable WordPress site in the browser, change runtime settings, launch from known recipes or external sources, inspect the site, edit internals, and export the result.

Top tasks:

1. Open, resume, save, and fullscreen a live Playground site.
2. Start a new Playground from Vanilla, WordPress PR, Gutenberg PR, GitHub repo, Blueprint URL, Import .zip, or the Blueprint gallery.
3. Manage the running site through Settings, Files, Blueprint JSON, Database, Logs, exports, and destructive Apply+Reset.

## Hard Requirements

Each design must be a self-contained static prototype under:

`v10-with-skills/designs/NNN-kebab-slug/`

Required files:

- `index.html`
- `README.md`
- `meta.json`

`meta.json` must include:

```json
{
  "num": 1,
  "slug": "001-example",
  "title": "Example",
  "summary": "One sentence under 180 characters.",
  "skill": "awesome-design-md | taste-skill | ui-ux-pro-max-skill",
  "skillSource": "Short note about the exact local skill material used.",
  "flow": "Short note about the interaction model."
}
```

Every `index.html` must visibly represent:

- A real `<iframe>` for the WordPress site surface.
- Refresh, URL/address/path field, WP Admin, Homepage, fullscreen/focus.
- Save state transition: unsaved, saving, saved, or stale.
- Saved Playgrounds with at least 3 entries.
- Start routes: Vanilla WordPress, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip.
- Blueprint gallery with search, category filters, and at least 16 visible blueprint cards.
- Site Manager tabs: Settings, Files, Blueprint, Database, Logs.
- Settings: PHP, WordPress version, language, network access, multisite.
- Additional actions: Export to GitHub PR and Download .zip.
- Import .zip, export .zip, GitHub PR language somewhere visible.
- Destructive Apply+Reset with a real confirmation model: typed phrase, diff sheet, auto-snapshot, or undo.
- At least three states in one screen or through local controls: running session, booting/starting, launcher/library/manager.
- Realistic mock data: saved sites, blueprint names, PHP log lines, blueprint JSON, file list, SQLite/database table names.
- Mobile behavior for about 390x844. Desktop behavior for about 1440x900.

## v7 Lessons To Preserve

- Iframe primacy: the running WordPress site is the product, not a thumbnail.
- One secondary surface that swaps content, not several equally loud sidebars.
- One canonical door per feature.
- Low idle affordance count. Aim for 8 or fewer persistent controls.
- Explicit fullscreen or focus mode.
- Avoid two persistent top rows of chrome.
- Use depth, glass, and motion as hierarchy or feedback only. They are not substitutes for information architecture.

## Quality Bar

Each design should look like a real product prototype, not a checklist. Make the interaction model obvious from the first viewport. Use realistic labels and content. Use icons or compact labels where useful, but keep text legible and controls accessible.

Do not use emojis. Do not use generic AI-purple gradient wallpaper. Do not create nested cards. Do not hide required features only in README prose.

## README Requirements

Each README must include:

1. Thesis.
2. Skill material used and how it shaped the design.
3. Flow model and why it differs from or extends v7.
4. Trade-offs.
5. Self-critique scores from 1 to 5 for:
   - iframe primacy
   - one-door feature ownership
   - secondary-surface discipline
   - visual craft
   - mobile parity
   - skill expression

