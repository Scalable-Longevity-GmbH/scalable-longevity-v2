"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "../Logo";
import { PillCTA } from "@/components/ui/PillCTA";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function HeaderNav() {
  const t = useTranslations("Nav");
  const navLinkBase =
    "px-5 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-colors";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center p-3">
      <div className="mx-auto max-w-6xl w-full flex items-center gap-3 p-2 bg-black/20 backdrop-blur-3xl rounded-full">
        <div className="flex items-center">
          <Logo />
        </div>

        <div
          className="hidden md:flex flex-1 items-center justify-center"
          aria-label={t("mainAria")}
        >
          <nav className="flex items-center gap-2">
            <Link href="/#principles" className={navLinkBase}>
              {t("principles")}
            </Link>
            <Link href="/#how-it-works" className={navLinkBase}>
              {t("howItWorks")}
            </Link>
            <Link href="/#fiveparts" className={navLinkBase}>
              {t("fiveParts")}
            </Link>
            <Link href="/#bookinfo" className={navLinkBase}>
              {t("bookInfo")}
            </Link>
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <LanguageSwitcher />
          <div className="hidden md:block">
            <PillCTA
              as="link"
              href="/survey"
              label={t("startTest")}
              size="sm"
              bgClass="bg-primary"
              textClass="text-white"
              noIcon
            />
          </div>
          <div className="md:hidden">
            <PillCTA
              as="link"
              href="/survey"
              label={t("startTest")}
              size="sm"
              bgClass="bg-primary"
              textClass="text-white"
              noIcon
            />
          </div>
        </div>
      </div>
    </header>
  );
}
