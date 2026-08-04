# ADR-0004: ChromaDB-Pipeline — Dev-only, Production-Fallback definiert

| Feld        | Wert                        |
|-------------|-----------------------------|
| **Status**  | Accepted                    |
| **Datum**   | 2026-08-04                  |
| **Autor**   | AMS Audio Engineering Team  |
| **Ersetzt** | —                           |

---

## Kontext

Die Code-Review stellte fest:
- `src/lib/chromaApi.ts` ruft `POST /api/chroma/query` auf
- In Production (GitHub Pages, statisch) existiert kein Backend-Server
- Der Vite Dev-Proxy (`/api → http://127.0.0.1:8000`) funktioniert **nur lokal**
- Auf der Live-Site schlägt jede KI-Anfrage mit einem Netzwerkfehler fehl — sichtbar für alle Nutzer
- Es gibt kein Backend im Repository (kein Python, kein Docker, kein RAG-Code)

**EU AI Act Relevanz** (Art. 52, Transparenz-Pflicht):
- Das System ist kein Hochrisiko-System (Art. 6), aber Nutzer müssen wissen, dass sie mit KI interagieren
- Jede Anfrage + Antwort muss serverseitig geloggt werden (nicht im Browser)
- Input-Validation: Keine personenbezogenen Daten in die Pipeline

## Entscheidung

### Sofortmaßnahme (Sprint 1, bereits umgesetzt)
Der KI-Fragen-Bereich in `Contact.tsx` zeigt einen klaren Hinweis:
> "Diese Funktion ist in der aktuellen Version nicht verfügbar. Demo-Modus verfügbar auf Anfrage."

### Mittelfristig (Meilenstein M3–M5)
1. **Feature Flag** via Environment Variable: `VITE_CHROMA_ENABLED=false` deaktiviert den Endpoint-Aufruf
2. **Graceful Degradation**: Bei `VITE_CHROMA_ENABLED=false` zeigt die UI einen informativen
   Platzhalter statt eines Fehlers
3. **Production-Backend**: Wenn die Pipeline live geht, wird sie auf einem dedizierten Server
   deployed (nicht auf GitHub Pages)
4. **EU AI Act Logging**: Server-seitiges Logging aller Anfragen/Antworten mit Timestamp,
   Session-ID (anonym), Frage-Hash (nicht Klartext)
5. **Zero Trust**: API-Key-Auth für den Chroma-Endpoint (kein offener Zugriff)

### Was das Backend leisten muss (bevor es live geht)
- `POST /chroma/query` mit `{ query: string }` → `{ answer: string, sources?: string[] }`
- Rate Limiting (max. 10 Anfragen/Minute pro IP)
- Input-Sanitization (kein PII in Embeddings)
- Antwort-Logging mit Audit-Trail

## Konsequenzen

**Positiv:**
- Keine kaputte UX mehr in Production
- EU AI Act-konforme Basis für spätere Aktivierung
- Klare Trennung Dev / Production

**Negativ / Risiko:**
- Feature ist bis Backend-Deployment nicht verfügbar
- Backend-Entwicklung ist Out-of-Scope für dieses Repository (separates Repo nötig)

## Verweise
- `src/lib/chromaApi.ts`
- `.env.local.example`
- EU AI Act Art. 52 (Transparenzpflichten)
- Meilenstein M5 in `docs/roadmap/ROADMAP.md`
