import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/80 px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        {/* Links */}
        <div className="grid grid-cols-1 gap-8 text-sm text-font-secondary sm:grid-cols-3">
          <div>
            <h4 className="mb-2 font-semibold text-white">Kontakt</h4>
            <p>Knowledge House GmbH</p>
            <p>Breite Str. 22</p>
            <p>40213 Düsseldorf</p>
            <p>Germany</p>
            <p>Telefon: +49 201 1540 7473 22</p>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-white">Unternehmen</h4>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:underline">
                  Über Uns
                </a>
              </li>
              <li>
                <a href="/legal/privacy" className="hover:underline">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/legal/disclaimer" className="hover:underline">
                  Haftungsausschluss
                </a>
              </li>
              <li>
                <a href="/legal/impressum" className="hover:underline">
                  Impressum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-white">Folgen Sie Uns</h4>
            <ul className="space-y-1">
              <li>
                <a href="https://twitter.com" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/scalable-longevity-solutions-gmbh"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom note */}
        <div className="border-t border-card-border pt-6 text-center text-xs text-font-secondary">
          © {new Date().getFullYear()} Scalably-Longevity. Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  );
}
