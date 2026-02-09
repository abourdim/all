#!/usr/bin/env bash
# ============================================================
# Workshop-Diy — gen_thumbs.sh
# Quick pipeline: install deps + generate thumbnails
# ============================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

echo "📦 Installing dependencies..."
npm install puppeteer --save 2>/dev/null

echo ""
echo "📸 Generating thumbnails..."
node screenshot.js

echo ""
echo "✅ Thumbnails ready in ./thumbs/"
echo ""
echo "📁 Files generated:"
ls -la thumbs/ 2>/dev/null || echo "  (no thumbnails yet)"
