# SOP-003: Content-Änderungen (SSOT-Pflicht)

| Feld         | Wert                        |
|--------------|-----------------------------|
| **Version**  | 1.0.0                       |
| **Datum**    | 2026-08-04                  |
| **Autor**    | AMS Audio Engineering Team  |
| **Status**   | Active                      |
| **Erzwungen durch** | PR-Checklist + Code Review |

---

## Zweck

Sicherstellen, dass alle publizierten Inhalte (Zahlen, Claims, Regulierungsreferenzen, Produktbeschreibungen)
validiert, quellenbelegt und ausschließlich aus der SSOT (`docs/content/`) stammen.
Dies ist Voraussetzung für EU AI Act-Konformität und rechtssichere B2B-Kommunikation.

## Geltungsbereich

Alle Inhalte, die auf `www.ams-audio.com` erscheinen:
- Produktspezifikationen und Messgenauigkeiten
- Marktdaten und Statistiken
- Regulatorische Referenzen (EASA, TA Lärm, DSGVO, EU UAS-Verordnung)
- Finanzprojektionen und ROI-Angaben
- Zertifizierungsstatus und Akkreditierungen

## Prozess bei Content-Änderungen

### Schritt 1: Kategorisierung
Jede Inhaltsänderung gehört einer der folgenden Kategorien an:

| Kategorie      | Typ-Wert       | Anforderung                                    |
|----------------|----------------|------------------------------------------------|
| Gemessener Wert | `measured`    | Messprotokoll + Datum + Prüfer                |
| Prognose       | `projection`   | Modell-Beschreibung + Annahmen + Datum         |
| Ziel/Roadmap   | `target`       | Sprint/Milestone-Referenz + Datum              |
| Regulatorisch  | `regulatory`   | Offizielle Quelle + Paragraf + Datum           |

### Schritt 2: Quellenvalidierung (Web-Recherche)
Vor jeder Änderung eines Claims:
1. Aktuelle offizielle Quelle konsultieren:
   - EASA: https://www.easa.europa.eu/en/domains/drones
   - LBA: https://www.lba.de/DE/Drohnen/drohnen_node.html
   - EU-Recht: https://eur-lex.europa.eu
   - TA Lärm: Technische Anleitung zum Schutz gegen Lärm (BAnz AT 26.08.1998)
2. Datum der Quelle notieren
3. Falls Quelle neuer als der bestehende Wert: ADR erstellen (Konflikt-Auflösungsprotokoll)

### Schritt 3: SSOT-Datei aktualisieren
```typescript
// docs/content/example.ts
export const exampleClaim: ContentClaim = {
  value: '>99%',
  type: 'target',           // Noch nicht gemessen!
  source: 'Internes Entwicklungsziel, AMS Audio 2026',
  sourceUrl: undefined,
  validatedAt: '2026-08-04',
  validatedBy: 'Engineering Team'
}
```

### Schritt 4: PR-Checklist
Jeder PR mit Content-Änderungen muss die Checklist im PR-Template erfüllen:
- [ ] Alle geänderten Claims haben `type`, `source`, `validatedAt` Felder
- [ ] Web-Validierung durchgeführt (Quellenlink im PR-Kommentar)
- [ ] Keine inline-Inhalte in `.tsx`/`.ts` Komponenten-Dateien
- [ ] `docs/content/` ist aktualisiert

## Verbotene Praktiken

❌ Zahlen direkt in `.tsx` oder `src/data/*.ts` Dateien eintragen ohne SSOT-Referenz
❌ Claims ohne Quelle (`source: ''` oder fehlendes Feld)
❌ `type: 'measured'` setzen ohne Messprotokoll
❌ Regulatorische Referenzen ohne Paragraf-Angabe

## Konflikt-Auflösung

Wenn zwei Quellen denselben Datenpunkt widersprüchlich angeben:
1. **Sofort-Stopp**: Kein Deployment mit widersprüchlichen Daten
2. ADR erstellen: Beide Quellen dokumentieren
3. Offizielle Behördenquelle hat Vorrang vor Sekundärliteratur
4. Bei gleichrangigen Quellen: konservativerer Wert + Hinweis "konservative Schätzung"
5. ADR auf `Accepted` setzen → SSOT aktualisieren

## Verweise
- ADR-0003 (SSOT)
- `docs/content/schema.ts`
- SOP-001 (Commit-Konventionen: `content(scope): beschreibung`)
