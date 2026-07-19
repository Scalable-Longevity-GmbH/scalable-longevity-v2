import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { routing } from "@/i18n/routing";
import CookieBanner from "@/components/ui/CookieBanner";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const satoshi = localFont({
  src: "../../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "100 900",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(", "),
    authors: [{ name: "AgePilot Team", url: "https://scalable-longevity.com" }],
    metadataBase: new URL("https://scalable-longevity.com"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://scalable-longevity.com",
      siteName: "AgePilot",
      images: [
        {
          url: "/background.jpg",
          width: 1200,
          height: 630,
          alt: t("ogAlt"),
        },
      ],
      locale: locale === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("twitterDescription"),
      images: ["/background.jpg"],
      creator: "@deinTwitterHandle",
    },
    icons: {
      icon: "/logo.svg",
      shortcut: "/logo.svg",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AgePilot",
              url: "https://scalable-longevity.com",
              logo: "https://scalable-longevity.com/logo.svg",
            }),
          }}
        />
      </head>
      <body className={`${satoshi.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          <CookieBanner />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
