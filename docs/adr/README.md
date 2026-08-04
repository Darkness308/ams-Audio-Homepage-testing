# ADR-Index — Architecture Decision Records

Dieses Verzeichnis dokumentiert alle architektonischen Entscheidungen des AMS Audio Projekts.
Kein ADR wird gelöscht — veraltete Entscheidungen erhalten den Status `Deprecated`.

## Status-Definitionen

| Status       | Bedeutung                                                      |
|--------------|----------------------------------------------------------------|
| `Proposed`   | In Diskussion, noch nicht entschieden                          |
| `Accepted`   | Entschieden und in Kraft                                       |
| `Deprecated` | Überholt durch neuere Entscheidung (Nachfolger-ADR verlinkt)  |
| `Superseded` | Explizit ersetzt durch anderen ADR                             |

## Register

| Nr.      | Titel                                          | Status   | Datum      |
|----------|------------------------------------------------|----------|------------|
| ADR-0001 | Tech Stack — React / Vite / TypeScript         | Accepted | 2026-08-04 |
| ADR-0002 | Monolith → Modulare Sections-Architektur       | Accepted | 2026-08-04 |
| ADR-0003 | SSOT — Alle Inhalte aus `/docs/content/`       | Accepted | 2026-08-04 |
| ADR-0004 | ChromaDB-Pipeline — Dev-only, Fallback         | Accepted | 2026-08-04 |
| ADR-0005 | Primäre Produktionsdomäne — www.ams-audio.com  | Accepted | 2026-08-04 |

## Neue ADRs erstellen

```bash
# Vorlage kopieren
cp docs/adr/_TEMPLATE.md docs/adr/ADR-NNNN-kurztitel.md
# Inhalt ausfüllen, Status auf "Proposed" setzen
# Nach Team-Review: Status auf "Accepted" ändern + diesen Index aktualisieren
```

## Pflicht-Regeln

- Jede architektonische Entscheidung, die mehr als 1 Entwickler oder 1 Sprint betrifft, **muss** einen ADR haben
- ADRs werden **nie rückwirkend verändert** — nur Status-Update + Deprecated-Verweis erlaubt
- Jeder PR, der einen Accepted-ADR verletzt, wird **abgelehnt**
