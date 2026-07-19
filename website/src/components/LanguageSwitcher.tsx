"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export default function LanguageSwitcher({
  className = "",
  variant = "header",
}: {
  className?: string;
  variant?: "header" | "survey";
}) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(next: Locale) {
    if (next === locale) return;
    document.cookie = `NEXT_LOCALE=${next};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
    router.replace(pathname, { locale: next });
  }

  const base =
    variant === "survey"
      ? "flex items-center gap-1 rounded-full bg-black/10 p-1"
      : "flex items-center gap-1 rounded-full bg-white/10 p-1";

  const btnBase =
    "px-2.5 py-1 rounded-full text-xs font-semibold transition-colors";

  return (
    <div
      className={`${base} ${className}`}
      role="group"
      aria-label={t("label")}
    >
      {routing.locales.map((code) => {
        const active = code === locale;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchLocale(code)}
            className={[
              btnBase,
              active
                ? variant === "survey"
                  ? "bg-primary text-white"
                  : "bg-white text-black"
                : variant === "survey"
                  ? "text-font-secondary hover:text-font-primary"
                  : "text-white/80 hover:text-white",
            ].join(" ")}
            aria-pressed={active}
          >
            {t(code)}
          </button>
        );
      })}
    </div>
  );
}
