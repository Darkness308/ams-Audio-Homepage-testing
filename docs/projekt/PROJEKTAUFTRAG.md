# Projektauftrag AMS Audio

| Feld | Wert |
|------|------|
| **Stand** | 2026-11-01 |
| **Auftraggeber** | Inhaber AMS Audio / MSH Audio |
| **Projektleitung und Fachverantwortung** | Claude (Multi-Agent-Lead) |
| **Status** | Entwurf, wird mit jedem Arbeitsschritt fortgeschrieben |

Dieses Dokument hält fest, was der Auftraggeber am 2026-11-01 als Ziel und Rahmen genannt hat. Punkte mit „bestätigen“ sind noch nicht geprüft.

## Ziel

Eine moderne Website für AMS Audio, die 2026 in allen relevanten Geschäftsbereichen dem Stand der Technik entspricht. Gesteuert wird über einen Score: Reifegradmatrix und Scorecard messen den Fortschritt, die Roadmap ordnet die Meilensteine.

## Unternehmen und Marken

- **AMS Audio**: Startup, wird als Marke nach vorne gestellt.
- **MSH Audio**: Einzelunternehmen von Marc Schneider-Handrup (Schreibweise bestätigen), Am Berkenstück 1, Nachrodt-Wiblingwerde (Postleitzahl bestätigen). Vorerst Betreiber der Website, Rechnungssteller und Zahlungsempfänger. Bleibt Motor und Kern; Idee: MSH Audio als Label oder Qualitätssicherung.
- **Netzwerk**: über 25 Jahre aufgebautes globales Netzwerk von Marc Schneider-Handrup.
- **AcoustiScan**: iPad-App in Entwicklung.

## Vorgehen (Reihenfolge laut Auftraggeber)

1. **Stylebook** (Design-System) auf Stand 2026 bringen.
2. **Einfache Website** über Git entwickeln.
3. **Eigenen Ubuntu-Server** vorbereiten (installiert, noch nicht eingerichtet).
4. **Umzug** der Website vom Windows-11-Rechner auf den Server. Dieser Ablauf wird zum Muster für alle Standardprozesse.
5. **Datenhaltung**: SQLite und DuckDB.
6. **Vektorspeicher** mit RAG und semantischer Suche.
7. **Eigenes ERP und CRM** als Meilensteine in der Roadmap, verknüpft mit Reifegradmatrix und Scorecard.
8. **Cloud** zum Skalieren erst, wenn die AcoustiScan-App fertig ist.

## Arbeitsregeln

- Aussagen zu Technik, Recht und Sicherheit werden mit aktuellen Quellen belegt. Was nicht belegt ist, wird als offen markiert.
- Keine erfundenen Daten. Beispiel- oder Schätzwerte werden ausdrücklich gekennzeichnet.
- Kommunikation auf Deutsch.
- Entscheidungen mit Tragweite werden als ADR in `docs/adr/` festgehalten.

## Offene Punkte

- Schreibweise des Namens und Postleitzahl für Impressum bestätigen.
- `docs/roadmap/ROADMAP.md` (Version 1.0.0) richtet sich noch auf Drohnenlogistik aus und muss an diesen Auftrag angepasst werden.
- Reifegradmatrix und Scorecard definieren.
- Markenarchitektur AMS Audio / MSH Audio / AcoustiScan entscheiden.
