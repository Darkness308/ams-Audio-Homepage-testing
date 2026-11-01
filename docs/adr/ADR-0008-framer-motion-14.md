# ADR-0008: Framer Motion auf Version 14 aktualisieren

| Feld        | Wert                        |
|-------------|-----------------------------|
| **Status**  | Accepted                    |
| **Datum**   | 2026-11-01                  |
| **Autor**   | AMS Audio Engineering Team  |
| **Ersetzt** | ADR-0001                    |

---

## Kontext

ADR-0001 dokumentiert Framer Motion 11 als Teil des Tech Stacks. Die Dependency wurde auf
Version 14.7.1 aktualisiert, sodass der bisherige Versionsstand nicht mehr dem ausgelieferten
Paket entspricht.

## Entscheidung

Framer Motion bleibt die Animations-Library des Projekts und wird mit `^14.7.1` verwendet.
Alle übrigen Stack-Entscheidungen aus ADR-0001 bleiben unverändert.

## Konsequenzen

**Positiv:**
- Die dokumentierte Dependency entspricht der im Lockfile installierten Version.

**Negativ / Risiko:**
- Major-Version-Updates erfordern weiterhin eine Prüfung auf Kompatibilität.

## Verweise
- ADR-0001 (Tech Stack)
- SOP-004 (Dependency Management)
