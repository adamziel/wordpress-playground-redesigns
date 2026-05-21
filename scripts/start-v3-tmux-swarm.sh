#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOCKET="${TMUX_SOCKET:-playground-v3-redesign}"
SESSION="${TMUX_SESSION:-wp-playground-v3-redesign}"

tmux -L "$SOCKET" has-session -t "$SESSION" 2>/dev/null && {
  echo "V3 tmux swarm already running."
  echo "Attach with: tmux -L $SOCKET attach -t $SESSION"
  exit 0
}

mkdir -p "$ROOT/.orchestrator-v3/logs" "$ROOT/.orchestrator-v3/tmp" "$ROOT/.orchestrator-v3/locks" "$ROOT/.orchestrator-v3/claims"

tmux -L "$SOCKET" new-session -d -s "$SESSION" -n supervisor -c "$ROOT" "watch -n 5 'printf \"WordPress Playground V3 redesign swarm\\n\\n\"; git status --short --branch; printf \"\\nV3 completed designs: \"; find v3/designs -maxdepth 2 -name meta.json 2>/dev/null | wc -l; printf \"\\nActive claims:\\n\"; ls .orchestrator-v3/claims 2>/dev/null | sort | sed -n \"1,20p\"; printf \"\\nLast completions:\\n\"; tail -n 20 .orchestrator-v3/logs/completed.log 2>/dev/null || true; printf \"\\nFailures:\\n\"; tail -n 20 .orchestrator-v3/logs/failed.log 2>/dev/null || true'"

for i in $(seq 1 10); do
  worker_id="v3-worker-$(printf "%02d" "$i")"
  tmux -L "$SOCKET" new-window -t "$SESSION" -n "$worker_id" -c "$ROOT" "bash scripts/v3-supervised-worker.sh $worker_id; exec bash"
done

tmux -L "$SOCKET" new-window -t "$SESSION" -n critic -c "$ROOT" "bash scripts/v3-critic-loop.sh; exec bash"
tmux -L "$SOCKET" select-window -t "$SESSION:supervisor"

echo "Started V3 tmux swarm."
echo "Attach with: tmux -L $SOCKET attach -t $SESSION"
