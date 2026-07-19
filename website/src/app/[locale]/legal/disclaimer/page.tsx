"use client";

import { useLocale, useTranslations } from "next-intl";

export default function HaftungsausschlussPage() {
  const locale = useLocale();
  const t = useTranslations("Legal");

  return (
    <main className="relative min-h-screen w-full bg-background">
      <section className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-24">
        {locale !== "de" && (
          <p className="mb-6 rounded-xl border border-card-border bg-card px-4 py-3 text-sm text-font-secondary">
            {t("germanOnlyNote")}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl font-medium text-center mb-10">
          Haftungsausschluss
        </h1>

        <div className="prose prose-lg max-w-none text-font-primary">
          <h2>Legal Disclaimer / Haftungsausschluss</h2>
          <p>
            Die Informationen dieser Healthspan-Extender-Webseite dienen
            ausschließlich der Verdeutlichung gesundheitsrelevanter
            Verhaltensentscheidungen und ersetzen keine individuelle ärztliche
            Beratung und/oder Untersuchung. Sie sind nicht dazu bestimmt,
            medizinische Diagnosen und/oder Behandlungen zu ersetzen und dürfen
            nicht als Grundlage hierfür herangezogen werden. Bei Verdacht auf
            gesundheitliche Beschwerden oder bei bekannten Erkrankungen wende
            dich bitte stets an eine Ärztin oder einen Arzt.
          </p>
          <p>
            Auch ein niedrig geschätztes Gesundheitsrisiko ist keine Garantie
            dafür, dass eine Erkrankung nicht eintreten kann. Die Anwendungen
            dieser Website sind ihrer Zweckbestimmung nach <strong>kein</strong>{" "}
            Medizinprodukt.
          </p>
          <p>
            Der Anbieter übernimmt keine Haftung für direkte oder indirekte
            Folgen, die sich aus der Verwendung der bereitgestellten
            Informationen ergeben können. Die Behandlung bestehender
            Risikofaktoren sollte grundsätzlich unter ärztlicher Beratung
            erfolgen.
          </p>
          <p>
            Bitte beachte zudem unsere{" "}
            <a href="/privacy" className="text-primary underline">
              Datenschutzerklärung
            </a>{" "}
            sowie diesen Haftungsausschluss.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Dienstanbieter ist die Knowledge-House GmbH gemäß § 7 Abs. 1 TMG
            für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich.
            Nach §§ 8 bis 10 TMG ist die Knowledge-House GmbH als Dienstanbieter
            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen. Verpflichtungen zur Entfernung oder
            Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unberührt.
          </p>
          <p>
            Unsere Website enthält Links zu externen Websites, die sich unserer
            Kontrolle entziehen. Für diese fremden Inhalte übernehmen wir keine
            Gewähr; verantwortlich ist stets der jeweilige Anbieter bzw.
            Betreiber. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung
            auf mögliche Rechtsverstöße überprüft, rechtswidrige Inhalte waren
            zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche
            Kontrolle ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen entfernen wir derartige Links umgehend.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Knowledge-House GmbH bereitgestellten Inhalte und
            Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung der
            jeweiligen Urheber:innen. Downloads und Kopien sind nur für den
            privaten, nicht-kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit Inhalte nicht von der Knowledge-House GmbH erstellt wurden,
            werden die Urheberrechte Dritter beachtet und entsprechende Inhalte
            als solche gekennzeichnet. Solltest du dennoch auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            Hinweis. Bei Bekanntwerden von Rechtsverletzungen entfernen wir
            derartige Inhalte umgehend.
          </p>
        </div>
      </section>
    </main>
  );
}
