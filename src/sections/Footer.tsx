import { footerContent, navItems } from '../data'

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-orange-500 mb-4">AMS Audio</div>
            <p className="text-slate-400 text-sm mb-4 max-w-md">
              {footerContent.tagline}
            </p>
            <p className="text-slate-500 text-sm">
              Acoustic-as-a-Service für die Smart City der Zukunft.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-orange-500 transition text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-orange-500 transition text-sm">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-orange-500 transition text-sm">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-orange-500 transition text-sm">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">{footerContent.copyright}</p>
          <div className="flex gap-6">
            <span className="text-slate-600 text-sm">Made with precision in Germany</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
