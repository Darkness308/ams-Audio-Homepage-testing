Eine kompakte umrandete Kachel, die ein 20px-Icon in einer Icon-Fläche mit einer kurzen Textzeile verbindet.

Von Hand nachgebaut aus dem AcoustiScan-Feature-Raster in `src/components/AMSAudioHomepage.tsx`.

- Fläche `color-surface`, 1px `color-border-subtle` (bei Hover `color-border`, 500ms, Tailwind-Standardkurve), `radius-xl`, Innenabstand `space-5`, Abstand `space-4`.
- Icon-Fläche 40px, `radius-lg`, `color-surface-well`; Icon in `color-text-muted`.
- Text im Stil `body` (16px, Gewicht 400; Gewicht 300 erst ab 24px) in `color-text-body`, zwei bis drei Wörter („LiDAR 3D-Scan“, „RT60 Analyse“, „Material-DB“).
- In einem zweispaltigen Raster mit `space-4` Abständen neben einer Feature-Überschrift verwenden.
- Kontrast: `color-text-body` und `color-text-muted` erfüllen in beiden Themes mindestens WCAG AA (4,5:1).
