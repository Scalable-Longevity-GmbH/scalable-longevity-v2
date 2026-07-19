"use client";

import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-5xl px-4 pt-28 pb-20">
        <h1 className="text-3xl font-semibold text-font-primary">{t("title")}</h1>
        <p className="mt-1 text-font-secondary">{t("lead")}</p>

        <form className="mt-8 rounded-2xl border border-card-border bg-card p-6 shadow-sm grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium text-font-primary">
              {t("name")}
            </label>
            <input
              type="text"
              placeholder={t("namePlaceholder")}
              className="rounded-xl border border-card-border bg-white px-3 py-2 text-sm text-font-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-font-primary">
              {t("email")}
            </label>
            <input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="rounded-xl border border-card-border bg-white px-3 py-2 text-sm text-font-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-font-primary">
              {t("message")}
            </label>
            <textarea
              placeholder={t("messagePlaceholder")}
              rows={6}
              className="rounded-xl border border-card-border bg-white px-3 py-2 text-sm text-font-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              {t("submit")}
            </button>
            <p className="text-xs text-font-secondary">
              {t("preferEmail")}{" "}
              <a
                href="mailto:kontakt@scalable-longevity.com"
                className="underline"
              >
                kontakt@scalable-longevity.com
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
