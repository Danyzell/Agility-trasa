#!/bin/sh
# Sestaví v3d.js (three.js + scény) z v3d/src esbuildem. Závislosti se stáhnou jednou do ~/.cache/agility-v3d.
set -e
cd "$(dirname "$0")"
D="${V3D_DEPS:-$HOME/.cache/agility-v3d}"
if [ ! -x "$D/node_modules/.bin/esbuild" ] || [ ! -d "$D/node_modules/three" ]; then
  mkdir -p "$D" && (cd "$D" && [ -f package.json ] || npm init -y >/dev/null; npm install --no-save three@0.186.1 esbuild >/dev/null)
fi
NODE_PATH="$D/node_modules" "$D/node_modules/.bin/esbuild" src/index.js --bundle --minify --format=esm --target=es2019 \
  --legal-comments=none --outfile=v3d.js --log-level=warning
echo "v3d.js: $(wc -c < v3d.js) B, gzip $(gzip -9c v3d.js | wc -c) B"
