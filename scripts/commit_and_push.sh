#!/usr/bin/env bash
# Commit and push a finished design (or critic update). Retries on conflict via rebase.
# Usage: commit_and_push.sh "<commit subject>" path1 [path2...]
set -euo pipefail
REPO="${REPO:-/home/claude/playground-redesign}"
cd "$REPO"

subj="$1"
shift

# Serialize all pushes
exec 9>.locks/push.lock
flock 9

for p in "$@"; do
  git add -- "$p" || true
done

if git diff --cached --quiet; then
  echo "Nothing to commit"
  exit 0
fi

# Rebuild the index since designs/ changed
bash scripts/rebuild_index.sh >/dev/null 2>&1 || true
git add designs.json || true

git commit -m "$subj" >/dev/null

attempt=0
while [ $attempt -lt 5 ]; do
  if git push origin main 2>/tmp/push-err; then
    echo "Pushed: $subj"
    exit 0
  fi
  if grep -qE "non-fast-forward|rejected" /tmp/push-err; then
    echo "Push rejected, pulling and retrying..." >&2
    git pull --rebase origin main >/dev/null 2>&1 || git rebase --abort 2>/dev/null || true
    attempt=$((attempt + 1))
    sleep 1
    continue
  fi
  cat /tmp/push-err >&2
  exit 1
done
echo "Push failed after retries" >&2
exit 1
