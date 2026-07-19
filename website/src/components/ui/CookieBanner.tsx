"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { PillCTA } from "@/components/ui/PillCTA";
import { Link } from "@/i18n/navigation";

export default function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function handleConsent(choice: "all" | "necessary") {
    localStorage.setItem("cookie-consent", choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-4xl rounded-2xl bg-card shadow-lg border border-card-border p-5 md:flex md:items-center md:justify-between gap-4">
        <p className="text-sm text-font-secondary">
          {t("text")}{" "}
          <Link
            href="/legal/privacy"
            className="underline text-primary hover:text-primary/80"
          >
            {t("privacyLink")}
          </Link>
          .
        </p>

        <div className="mt-4 md:mt-0 flex gap-3 shrink-0">
          <PillCTA
            label={t("necessary")}
            size="sm"
            noIcon
            bgClass="bg-gray-200 hover:bg-gray-300"
            textClass="text-font-primary"
            className="px-4"
            onClick={() => handleConsent("necessary")}
          />
          <PillCTA
            label={t("acceptAll")}
            size="sm"
            noIcon
            bgClass="bg-primary hover:bg-primary/80"
            textClass="text-white"
            className="px-4"
            onClick={() => handleConsent("all")}
          />
        </div>
      </div>
    </div>
  );
}
