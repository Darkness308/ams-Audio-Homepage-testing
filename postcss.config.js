// Tailwind wird nicht mehr genutzt: Die Website liest Tokens und Stylebook-Komponenten direkt
// (src/styles/seiten.css, ADR-0009). Übrig bleibt nur das Ergänzen von Herstellerpräfixen.
export default {
  plugins: {
    autoprefixer: {},
  },
}
