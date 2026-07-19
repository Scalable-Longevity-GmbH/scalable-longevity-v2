"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-black/80 px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col gap-12">
        <div className="grid grid-cols-1 gap-8 text-sm text-font-secondary sm:grid-cols-3">
          <div>
            <h4 className="mb-2 font-semibold text-white">{t("contact")}</h4>
            <p>Knowledge House GmbH</p>
            <p>Breite Str. 22</p>
            <p>40213 Düsseldorf</p>
            <p>Germany</p>
            <p>
              {t("phone")}: +49 201 1540 7473 22
            </p>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-white">{t("company")}</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="hover:underline">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:underline">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="hover:underline">
                  {t("disclaimer")}
                </Link>
              </li>
              <li>
                <Link href="/legal/impressum" className="hover:underline">
                  {t("impressum")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold text-white">{t("follow")}</h4>
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

        <div className="border-t border-card-border pt-6 text-center text-xs text-font-secondary">
          © {new Date().getFullYear()} Scalably-Longevity. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
