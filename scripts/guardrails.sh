#!/usr/bin/env bash
# Leitplanken-Prüfung (ADR-0006). Läuft lokal mit `npm run guardrails` und in der CI.
# Bricht mit Exit-Code 1 ab, sobald eine Regel verletzt ist.
set -uo pipefail

fail=0
check() {
  local name="$1" pattern="$2"; shift 2
  local hits
  hits=$(grep -rnE --exclude-dir=node_modules --exclude-dir=dist --exclude-dir=.git -e "$pattern" "$@" 2>/dev/null || true)
  if [ -n "$hits" ]; then
    echo "✗ $name"
    echo "$hits" | sed 's/^/    /'
    fail=1
  else
    echo "✓ $name"
  fi
}

# 1. Keine Schriften oder Skripte von Google-Servern (LG München I, 3 O 17493/20).
check "Keine Google-Fonts-Einbindung im ausgelieferten Code" \
  'fonts\.(googleapis|gstatic)\.com' src index.html public vite.config.ts docs/design-system

# 2. Fokus nie per CSS abschalten (WCAG 2.4.7).
check "Kein 'outline: none' oder 'outline: 0' in eigenem CSS" \
  'outline:[[:space:]]*(none|0)([;[:space:]"}]|$)' src index.html

# 3. Kein automatisch startender Ton (WCAG 1.4.2).
check "Kein autoplay bei Audio oder Video" \
  '<(audio|video)[^>]*[[:space:]]autoPlay|<(audio|video)[^>]*[[:space:]]autoplay' src index.html

# 4. Keine privaten Schlüssel oder typischen Zugangsdaten im Repo.
check "Keine privaten Schlüssel im Repo" \
  '-----BEGIN ([A-Z]+ )?PRIVATE KEY-----' --exclude=guardrails.sh .

# 5. Erzeugte Token-Dateien entsprechen der Quelle tokens/ams.tokens.json.
if node scripts/build-tokens.mjs --check; then :; else fail=1; fi

# 6. Alle Farbpaare erfüllen WCAG 2.2 (Text 4,5:1, Fließtext 7:1, Bedienelemente 3:1).
if node scripts/check-contrast.mjs > /tmp/ams-contrast.log 2>&1; then
  echo "✓ Kontrast aller Farbpaare (Details: npm run contrast)"
else
  cat /tmp/ams-contrast.log; fail=1
fi

if [ "$fail" -ne 0 ]; then
  echo
  echo "Leitplanken verletzt. Siehe docs/adr/ADR-0006-freigabe-und-leitplanken.md"
  exit 1
fi
echo
echo "Alle Leitplanken eingehalten."
