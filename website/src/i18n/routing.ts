import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  localePrefix: "always",
  localeDetection: false,
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
});

export type Locale = (typeof routing.locales)[number];

/** DACH countries → German; everywhere else → English */
export const DACH_COUNTRIES = new Set(["DE", "AT", "CH"]);

export function localeFromCountry(country: string | null): Locale {
  if (country && DACH_COUNTRIES.has(country.toUpperCase())) {
    return "de";
  }
  return "en";
}
