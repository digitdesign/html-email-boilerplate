#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail
trap 'echo; echo "Aborting due to errexit on line $LINENO. Exit code: $?" >&2' ERR

git status -s
git add .
echo -n "→ "
read COMMITMSG
git commit -am "$COMMITMSG" -s
git push origin master -q
clear
exit