#!/usr/bin/env bash

GITHUB_USER="abourdim"
DEST_DIR="./repos"

mkdir -p "$DEST_DIR"
cd "$DEST_DIR" || exit 1

page=1

while :; do
  repos=$(curl -s "https://api.github.com/users/$GITHUB_USER/repos?per_page=100&page=$page" \
    | grep -o '"clone_url": *"[^"]*"' \
    | sed 's/"clone_url": "//;s/"//')

  [ -z "$repos" ] && break

  for repo in $repos; do
    echo "Cloning $repo"
    git clone "$repo"
  done

  page=$((page + 1))
done
