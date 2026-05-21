## Thesis

Playground is reframed as a version-controlled timeline. Every Save is a commit node on a vertical graph, every "Start from blueprint" or PR-boot is a fresh branch, and forking the current state from any past node creates a side branch you can return to. "Reset Playground" stops being a scary red destroy-button and becomes a calm `checkout main`. The chrome around the iframe is therefore a Git-style three-pane app: branch graph on the left, working tree (file/blueprint/db/logs tabs) in the middle, and inspector for the currently selected commit on the right.

## What I remixed / merged / removed

The "Saved Playgrounds" launcher and the Site Manager are merged into one continuous timeline view: the launcher becomes "New branch from..." (Vanilla, Blueprint, WordPress PR, Gutenberg PR, From GitHub, Blueprint URL, Import .zip), and Your Playgrounds is just the list of branches. The three settings entry points collapse into one — settings live in a popover that, when applied, creates a commit labeled `chore: bumped to PHP 8.3` on the active branch instead of silently mutating state. The 43 blueprints live in a "Clone a repository" modal with search + category chips. The destructive Apply+Reset interaction becomes a labeled commit so it's recoverable by checking out the prior node. Files, Blueprint JSON, Database and Logs are tabs of the working-tree pane; the address bar and WP-admin/Homepage jumps sit in a slim iframe header.

## Trade-offs

The git metaphor is opinionated: users unfamiliar with version control may need the inline glossary tooltips ("commit = save", "branch = fork", "checkout = switch") to land. Showing the graph at all times costs horizontal real estate on desktop — mobile collapses it into a "History" sheet. Saves aren't actually diff-based content-addressable commits under the hood (it's still OPFS), so the metaphor is a UI fiction; the trade-off is enormous narrative clarity at the cost of being technically loose. Finally, treating every settings-apply as a commit will make the graph long for power users — mitigated by a "squash trivial commits" toggle in the inspector.
