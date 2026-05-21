#!/usr/bin/env bash
# Commit and push a finished v5 design or critic update.
# Usage: commit_and_push.sh "<commit subject>" path1 [path2...]
set -euo pipefail
ROOT="${ROOT:-/home/claude/playground-redesign}"
cd "$ROOT"

subj="$1"
shift

exec 9>v7/.locks/push.lock
flock 9

for p in "$@"; do
  git add -- "$p" || true
done

if git diff --cached --quiet; then
  echo "Nothing to commit"
  exit 0
fi

bash v7/scripts/rebuild_index.sh >/dev/null 2>&1 || true
git add v7/designs.json || true

git commit -m "$subj" >/dev/null

attempt=0
while [ $attempt -lt 5 ]; do
  if git push origin main 2>/tmp/v7-push-err; then
    echo "Pushed: $subj"
    exit 0
  fi
  if grep -qE "non-fast-forward|rejected" /tmp/v7-push-err; then
    git pull --rebase origin main >/dev/null 2>&1 || git rebase --abort 2>/dev/null || true
    attempt=$((attempt + 1))
    sleep 1
    continue
  fi
  cat /tmp/v7-push-err >&2
  exit 1
done
echo "Push failed after retries" >&2
exit 1
