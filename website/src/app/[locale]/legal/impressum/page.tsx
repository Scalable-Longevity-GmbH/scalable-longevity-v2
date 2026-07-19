"use client";

import { useLocale, useTranslations } from "next-intl";

export default function ImpressumPage() {
  const locale = useLocale();
  const t = useTranslations("Legal");

  return (
    <main className="relative min-h-screen bg-background">
      <section className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-24">
        {locale !== "de" && (
          <p className="mb-6 rounded-xl border border-card-border bg-card px-4 py-3 text-sm text-font-secondary">
            {t("germanOnlyNote")}
          </p>
        )}
        <h1 className="text-4xl font-semibold text-font-primary mb-8">
          Impressum
        </h1>

        <div className="prose prose-gray max-w-none text-font-primary">
          <p>
            <strong>Knowledge House GmbH</strong>
            <br />
            Breite Strasse 22
            <br />
            40213 Düsseldorf
          </p>

          <p>
            Handelsregister: HRB 32589
            <br />
            Registergericht: Amtsgericht Wuppertal
          </p>

          <h2>Vertreten durch</h2>
          <p>Prof. Dr. med. Hubert Trübel</p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 201 1540 7000
            <br />
            Telefax: +49 211 540 74 7140
            <br />
            E-Mail: info@knowldge-house.com
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:{" "}
            <br />
            DE354511300
          </p>

          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Humanmediziner
            <br />
            Zuständige Kammer: Ärztekammer Nordrhein, Tersteegenstr. 9, 40474
            Düsseldorf
            <br />
            Verliehen in: NRW
          </p>
          <p>
            Es gelten folgende berufsrechtliche Regelungen: <br />
            <a
              href="https://www.aekno.de/aerzte/berufsordnung"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Ärztliche Berufsordnung
            </a>
          </p>

          <h2>Redaktionell verantwortlich</h2>
          <p>
            Prof. Dr. med. Hubert Trübel
            <br />
            The Knowledge House GmbH
            <br />
            Breitestrasse 22
            <br />
            40213 Düsseldorf
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </section>
    </main>
  );
}
