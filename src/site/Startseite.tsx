import type { ComponentType, SVGProps } from 'react'
import { Activity, ArrowRight, BookAudio, Building2, Mail, MapPin, Mic, Phone, Waves, AudioLines } from 'lucide-react'
import site from '../content/site.json'

// Startseite der einfachen Website (Phase 2). Alle Inhalte kommen aus src/content/site.json;
// hier steht nur Struktur. Komponenten-Klassen (ams-*) stammen aus dem Stylebook.

type Icon = ComponentType<SVGProps<SVGSVGElement>>

const leistungsIcons: Record<string, Icon> = {
  veranstaltungston: Mic,
  raumakustik: AudioLines,
  'bau-industrieakustik': Building2,
  laermprognosen: Activity,
  sprecher: BookAudio,
}

const base = import.meta.env.BASE_URL
const a = site.anbieter

export function Kopfzeile() {
  return (
    <header className="site-header">
      <div className="site-container site-header__inner">
        <a className="site-brand" href={base} aria-label={`${site.marke}, zur Startseite`}>
          <span className="site-brand__mark" aria-hidden="true"><Waves /></span>
          <span className="site-brand__text">
            <span className="site-brand__name">{site.marke.toUpperCase()}</span>
            <span className="site-brand__sub">ein Angebot von {a.geschaeftsbezeichnung}</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Hauptnavigation">
          <a className="site-nav__optional" href={`${base}#leistungen`}>Leistungen</a>
          <a className="site-nav__optional" href={`${base}#ueber-uns`}>Über uns</a>
          <a href={`${base}#kontakt`}>Kontakt</a>
        </nav>
      </div>
    </header>
  )
}

export function Fusszeile() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__inner">
        <p className="site-footer__copy">
          © {new Date().getFullYear()} {site.marke} – ein Angebot von {a.geschaeftsbezeichnung}, {a.name}
        </p>
        <nav className="site-footer__links" aria-label="Rechtliches">
          <a href={`${base}impressum/`}>Impressum</a>
          <a href={`${base}datenschutz/`}>Datenschutz</a>
        </nav>
      </div>
    </footer>
  )
}

export default function Startseite() {
  return (
    <>
      <a className="site-skip" href="#inhalt">Zum Inhalt springen</a>
      <Kopfzeile />
      <main id="inhalt">
        <section className="site-hero" aria-labelledby="hero-titel">
          <div className="site-container site-hero__inner">
            <p className="ams-eyebrow ams-eyebrow--glass">
              <span className="ams-eyebrow__dot" aria-hidden="true" />
              {a.ort} · {a.region}
            </p>
            <h1 className="site-hero__title" id="hero-titel">
              <span>Klang.</span>
              <span className="ams-gradient-text">Präzision.</span>
              <span>Harmonie.</span>
            </h1>
            <p className="site-lead">
              Ton, Akustik und Sprache von {a.name}, {site.person.beruf} mit {site.person.erfahrungJahre} Jahren Erfahrung.
            </p>
            <div className="site-actions">
              <a className="ams-btn ams-btn--primary" href={`mailto:${a.email}`}>
                <Mail aria-hidden="true" />
                <span>Anfrage per E-Mail</span>
              </a>
              <a className="ams-btn ams-btn--outline" href="#leistungen">
                <span>Leistungen ansehen</span>
                <span className="ams-btn__arrow" aria-hidden="true"><ArrowRight /></span>
              </a>
            </div>
          </div>
        </section>

        <section className="site-section" id="leistungen" aria-labelledby="leistungen-titel">
          <div className="site-container">
            <div className="site-section__head">
              <p className="ams-eyebrow">Leistungen</p>
              <h2 className="site-section__title" id="leistungen-titel">Was wir anbieten</h2>
            </div>
            <ul className="site-grid site-grid--3 site-list" role="list">
              {site.leistungen.map((l) => {
                const Symbol = leistungsIcons[l.id] ?? Waves
                return (
                  <li key={l.id} className="ams-service">
                    <div className="ams-service__well" aria-hidden="true"><Symbol /></div>
                    <h3 className="ams-service__title">{l.titel}</h3>
                    <p className="ams-service__desc">{l.text}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="site-section" id="ueber-uns" aria-labelledby="ueber-uns-titel">
          <div className="site-container">
            <div className="site-section__head">
              <p className="ams-eyebrow">Über uns</p>
              <h2 className="site-section__title" id="ueber-uns-titel">Wer dahintersteht</h2>
            </div>
            <div className="ams-stat site-stat">
              <div className="ams-stat__value">{site.person.erfahrungJahre}</div>
              <div className="ams-stat__label">Jahre Erfahrung</div>
            </div>
            <div className="site-grid">
              <div className="ams-service site-person">
                <h3 className="site-person__name">{a.name}</h3>
                <p className="site-person__role">{site.person.beruf} · Inhaber von {a.geschaeftsbezeichnung}</p>
              </div>
              <div className="ams-service site-person">
                <h3 className="site-person__name">{site.berater.name}</h3>
                <p className="site-person__role">{site.berater.rolle}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section" id="kontakt" aria-labelledby="kontakt-titel">
          <div className="site-container">
            <div className="site-section__head">
              <p className="ams-eyebrow">Kontakt</p>
              <h2 className="site-section__title" id="kontakt-titel">Sprechen Sie uns an</h2>
            </div>
            <div className="site-contact site-measure">
              <a className="ams-tile" href={`mailto:${a.email}`}>
                <span className="ams-tile__well" aria-hidden="true"><Mail /></span>
                <span className="ams-tile__text">{a.email}</span>
              </a>
              <a className="ams-tile" href={`tel:${a.telefonLink}`}>
                <span className="ams-tile__well" aria-hidden="true"><Phone /></span>
                <span className="ams-tile__text">{a.telefon}</span>
              </a>
              <div className="ams-tile">
                <span className="ams-tile__well" aria-hidden="true"><MapPin /></span>
                <address className="ams-tile__text">
                  {a.geschaeftsbezeichnung} · {a.name}<br />
                  {a.strasse}, {a.plz} {a.ort}
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Fusszeile />
    </>
  )
}
