# v3-design-050 - Saved Identity Ledger

## Thesis

Saved Identity Ledger treats Playground as a live browser-local WordPress site first and a save/resume system second. The central surface is a real `iframe` with path navigation, Refresh, Save, WP Admin, Homepage, export, download, and full-size focus controls. The left identity rail makes the risky part explicit: unsaved sessions are temporary, saving changes the active name, saved rows become resumable, deleting a saved row does not close the running session, and reset/reload consequences are visible before the user touches a destructive button.

## Remix / Merge / Remove Choices

I remixed the console-hybrid direction by reducing the console to a quiet read-only event ledger at the bottom. It records the command-shaped consequence for Save, reset, import, export, files, logs, and blueprint actions, but the visual controls remain primary. The launcher, featured blueprints, full gallery, route forms, ZIP import, and Your Playgrounds live in one Saved & Start panel with real route-specific inputs. The Site Manager remains one tools panel with the required Settings, Files, Blueprint, Database, and Logs tabs; the gear routes into that same Settings tab instead of creating a second reset path.

## Trade-offs

The identity rail spends desktop width on save/resume rigor, so power users may collapse quickly into full-size focus mode when they only want to browse WordPress. The event ledger is intentionally small and not a full terminal; developers who want command input would find it limited, but the assigned direction asked for console support rather than console dominance. On mobile, the rail disappears and the same capabilities move into named Start, Files, Debug, and Settings sheets so Database and Logs are not buried in a vague More bucket.

## Self-Critique / Revision Note

After checking `v3/INSIGHTS.md` and the V3 audits, I revised the design around the known failure points: the WordPress surface is a real `iframe`, Import `.zip` uses a real file input, PR/GitHub/Blueprint starts expose concrete fields, and full-size mode preserves Save, path entry, Refresh, WP Admin, Homepage, and Exit. The reset flow uses a destructive confirmation with `RESET`, Save-first, and event feedback. The remaining risk is the first opened state: the launcher and tools panels are complete enough to be dense, so the default view keeps them closed and leaves the live site usable.
