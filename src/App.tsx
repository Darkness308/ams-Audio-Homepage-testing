import { ErrorBoundary } from './components/ui/ErrorBoundary'
import Startseite from './site/Startseite'
import site from './content/site.json'

// Fällt die Startseite aus, bleiben Kontakt und die Rechtsseiten erreichbar.
function Notfall() {
  const base = import.meta.env.BASE_URL
  return (
    <main className="site-legal">
      <div className="site-container site-legal__body">
        <h1>{site.marke}</h1>
        <p>Die Seite konnte nicht vollständig geladen werden.</p>
        <p>
          Kontakt: <a href={`mailto:${site.anbieter.email}`}>{site.anbieter.email}</a> ·{' '}
          <a href={`tel:${site.anbieter.telefonLink}`}>{site.anbieter.telefon}</a>
        </p>
        <p>
          <a href={`${base}impressum/`}>Impressum</a> · <a href={`${base}datenschutz/`}>Datenschutz</a>
        </p>
      </div>
    </main>
  )
}

export default function App() {
  return (
    <ErrorBoundary fallback={<Notfall />}>
      <Startseite />
    </ErrorBoundary>
  )
}
