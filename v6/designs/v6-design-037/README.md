# V6 Design 037 - Consequence Rail Resize

## Thesis
This design combines quiet rail IA with smart resize through a professional consequence model. The idle state is a usable WordPress iframe with a single command capsule and a 56px black rail; the rail chooses the only secondary surface, while the seam teaches preview/work ratios. `Sites` owns saved playgrounds, new starts, import, and the blueprint gallery. `Manager` owns settings, files, blueprint editing, database, logs, WP Admin/Homepage jumps, and export/download. Full preview hides the chrome entirely and exits with Esc.

## Remix / Merge / Remove
I kept the useful V5 #018 quiet-to-loud reveal, but limited persistent rail destinations to Sites, Manager, Logs as a Manager deep link, and Focus. I kept V5 #023's gauge/detent idea, but made the detents explicit buttons labeled Preview, Balanced, and Work so the resize behavior is self-teaching. I borrowed V5 #035 depth only as surface polish: the pane, menus, toast, and boot overlay use measured elevation, not a z-stack navigation model. I kept the V5 #036 Sites-widget lesson by making saved identity, launch routes, ZIP import, and blueprint discovery a single canonical Sites surface. I avoided V5 #030's persistent two-row top bar; identity, path, save, launcher, manager, settings, and focus stay in one compact row.

## TypeUI Professional Application
The assigned TypeUI skill was `professional` (`v6/style-skills/typeui-professional.md`). I applied it beyond colors: Poppins is used for the compact product hierarchy, IBM Plex Mono is used for uppercase labels and ratio/state data, the palette centers on black/white with `#FECE14` as the precise action accent, radii stay at 4-8px, and the spacing rhythm follows 4/8/12/16/24 increments. The UI tone is operational and consequence-oriented: save/reset/import/export copy states what will happen, and the reset flow shows before/after identity.

## Trade-Offs
The top command row includes deep links to Sites, Manager tools, and Manager settings because the current Playground top bar requires those access points. To preserve one-door discipline, those buttons all open the same rail-governed pane rather than creating separate drawers. The default state is quiet, so some feature coverage requires opening Sites or Manager; that is intentional because the first viewport should be a real usable Playground, not the gallery. On mobile, the same pane becomes a bottom sheet with the iframe kept above it, which is less spacious for the 43-card gallery but preserves the same product logic.

## Self-Critique / Revision Note
After checking `v6/INSIGHTS.md` and both V6 audits, I revised toward a quiet default instead of leaving the Sites pane open, used an actual `<iframe>` with `srcdoc`, kept primary destinations consolidated, made ZIP import a drop/browse state, and completed the destructive reset flow with warning, cancel, gated confirmation, progress, result, toast, and changed active identity. Remaining risk: the command row has several controls at desktop width, but it collapses aggressively on mobile and avoids becoming a persistent two-row bar.

## Coverage Notes
- Top bar: refresh, path input, name/status, Save, saved playground launcher, Manager/tools access, Settings deep link, full preview.
- Sites: Vanilla WordPress, WordPress PR, Gutenberg PR/branch, From GitHub, Blueprint URL, Import `.zip`, saved playgrounds, featured/full 43 blueprint gallery with search and category filters.
- Manager: Settings, Files, Blueprint editor, Database, Logs, WP Admin, Homepage, Export to GitHub PR, Download `.zip`.
- States: quiet active iframe, pane-open launcher/gallery, booting overlay, save/resume toast, full preview, and destructive Apply & Reset with final changed state.
