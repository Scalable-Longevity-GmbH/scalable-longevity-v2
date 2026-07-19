"use client";

import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");
  const whyItems = t.raw("whyItems") as string[];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-5xl px-4 pt-28 pb-20">
        <h1 className="text-4xl font-bold text-font-primary mb-4">
          {t("title")}
        </h1>
        <p className="text-lg max-w-2xl">{t("lead")}</p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            {t("whyTitle")}
          </h2>
          <ul className="space-y-3">
            {whyItems.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            {t("forYouTitle")}
          </h2>
          <p className="max-w-2xl">{t("forYouText")}</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            {t("nextStepTitle")}
          </h2>
          <p className="max-w-2xl">{t("nextStepText")}</p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            {t("missionTitle")}
          </h2>
          <p className="max-w-2xl">{t("missionText")}</p>
        </section>
      </div>
    </div>
  );
}
