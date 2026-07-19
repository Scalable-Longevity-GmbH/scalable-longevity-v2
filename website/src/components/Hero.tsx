"use client";

import { useTranslations } from "next-intl";
import { PillCTA } from "@/components/ui/PillCTA";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-screen bg-cover bg-center flex justify-center items-center text-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 flex flex-col items-center text-center">
        <h1
          className="
    text-white font-semibold tracking-tight
    text-4xl sm:text-5xl md:text-7xl
    leading-tight md:leading-[1.05]
    max-w-3xl md:max-w-5xl mx-auto
    [text-wrap:balance]
  "
        >
          {t("title")}
        </h1>

        <p className="mt-4 text-white/90 text-base sm:text-lg md:text-xl max-w-xl md:max-w-3xl mx-auto [text-wrap:balance]">
          {t("lead")}
        </p>

        <div className="mt-8">
          <PillCTA
            as="link"
            href="/survey"
            label={t("cta")}
            bgClass="bg-black/40 hover:bg-black/30"
            textClass="text-white"
            iconBgClass="bg-primary"
            iconColorClass="text-white"
            size="md"
            track={{
              event: "start_test_click",
              from: "home_hero",
              variant: "primary",
            }}
          />
        </div>
      </div>
    </section>
  );
}
