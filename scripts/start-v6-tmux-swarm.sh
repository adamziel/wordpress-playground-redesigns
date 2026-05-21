#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOCKET="${TMUX_SOCKET:-playground-v6-redesign}"
SESSION="${TMUX_SESSION:-wp-playground-v6-redesign}"

tmux -L "$SOCKET" has-session -t "$SESSION" 2>/dev/null && {
  echo "V6 tmux swarm already running."
  echo "Attach with: tmux -L $SOCKET attach -t $SESSION"
  exit 0
}

mkdir -p "$ROOT/.orchestrator-v6/logs" "$ROOT/.orchestrator-v6/tmp" "$ROOT/.orchestrator-v6/locks" "$ROOT/.orchestrator-v6/claims"

tmux -L "$SOCKET" new-session -d -s "$SESSION" -n supervisor -c "$ROOT" "watch -n 5 'printf \"WordPress Playground V6 redesign swarm\\n\\n\"; git status --short --branch; printf \"\\nV6 completed designs: \"; find v6/designs -maxdepth 2 -name meta.json 2>/dev/null | wc -l; printf \"\\nActive claims:\\n\"; ls .orchestrator-v6/claims 2>/dev/null | sort | sed -n \"1,20p\"; printf \"\\nLast completions:\\n\"; tail -n 20 .orchestrator-v6/logs/completed.log 2>/dev/null || true; printf \"\\nFailures:\\n\"; tail -n 20 .orchestrator-v6/logs/failed.log 2>/dev/null || true'"

for i in $(seq 1 10); do
  worker_id="v6-worker-$(printf "%02d" "$i")"
  tmux -L "$SOCKET" new-window -t "$SESSION" -n "$worker_id" -c "$ROOT" "bash scripts/v6-supervised-worker.sh $worker_id; exec bash"
done

tmux -L "$SOCKET" new-window -t "$SESSION" -n critic -c "$ROOT" "bash scripts/v6-critic-loop.sh; exec bash"
tmux -L "$SOCKET" select-window -t "$SESSION:supervisor"

echo "Started V6 tmux swarm."
echo "Attach with: tmux -L $SOCKET attach -t $SESSION"
