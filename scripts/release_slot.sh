#!/usr/bin/env bash
# Release a slot if the agent failed (so it can be retried).
set -euo pipefail
REPO="${REPO:-/home/claude/playground-redesign}"
cd "$REPO"
pad="$1"
rm -rf ".locks/slot-${pad}"
echo "Released slot ${pad}"
