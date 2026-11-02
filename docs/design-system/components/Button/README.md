Der pillenförmige Call-to-Action-Button: `primary` (gefüllt) für die eine Hauptaktion, `outline` für die zweite Aktion daneben.

Von Hand nachgebaut aus `src/components/AMSAudioHomepage.tsx` (Inline-Markup mit `<button>`; auf der Live-Seite gibt es keine Button-Komponente).

- **Primary:** Fläche `color-action-primary-bg`, Text `color-action-primary-fg` (16,4:1), `radius-full`, Innenabstand `space-4` × `space-10`, Schriftstil `button` (16px, Gewicht 500). Bei Hover wechselt die Fläche zu `color-action-primary-bg-hover`. Einmal pro Ansicht verwenden.
- **Outline:** 1px Rand `color-action-secondary-border`, Text `color-action-secondary-fg`. Bei Hover wird der Rand zu `color-border-control` und der Text zu `color-action-secondary-fg-hover`.
- **Klein (Navigation):** Innenabstand 10px × `space-6`, 14px Text, nur Label („Anfrage“).
- Die Anwendung liefert das Label (Satzschreibung, ein Verb: „Beratung anfragen“) und optional ein führendes 16px-Lucide-Icon sowie einen nachgestellten ArrowRight, der bei Hover um `space-1` nach rechts rückt.
- Primary und Outline nebeneinander mit `space-5` Abstand; unter 640px in voller Breite untereinander stapeln.
- Übergänge 300ms. Den orangefarbenen `rounded-lg`-Button der Sections-Bibliothek nicht auf der Stone-Seite verwenden.
- Bedienbarkeit: Mindesthöhe `size-target-min`; der Tastaturfokus zeigt einen Rahmen in `color-focus-ring` (`size-focus-width`, Abstand `size-focus-offset`). Unter `prefers-reduced-motion` rückt der Pfeil nicht.
- Kontrast: Alle Textfarben erfüllen in beiden Themes mindestens WCAG AA (4,5:1).
