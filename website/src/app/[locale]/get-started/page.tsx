"use client";

import { useTranslations } from "next-intl";
import { PillCTA } from "@/components/ui/PillCTA";
import { PillInput } from "@/components/ui/PillInput";

export default function GetStartedPage() {
  const t = useTranslations("GetStarted");

  return (
    <main className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 h-screen">
        <h1 className="text-4xl text-white md:text-5xl font-medium max-w-3xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-xl max-w-2xl text-primary">{t("lead")}</p>

        <div className="mt-10 w-full max-w-xl flex flex-col sm:flex-row gap-3">
          <PillInput
            type="email"
            placeholder={t("placeholder")}
            pillSize="md"
            bgClass="bg-black/10"
            textClass="text-font-primary placeholder-font-secondary"
            autoComplete="email"
            aria-label={t("ariaLabel")}
            className="text-white"
          />
          <PillCTA
            as="button"
            label={t("cta")}
            size="md"
            bgClass="bg-primary hover:bg-primary/80"
            textClass="text-white"
            noIcon
            track={{
              event: "newsletter_subscribe_click",
              from: "get_started_page",
              variant: "primary",
            }}
            className="sm:w-auto w-full"
          />
        </div>

        <p className="mt-4 text-base text-font-secondary">{t("disclaimer")}</p>
      </section>
    </main>
  );
}
