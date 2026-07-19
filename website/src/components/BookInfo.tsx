"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BookInfo() {
  const t = useTranslations("BookInfo");

  return (
    <section
      id="bookinfo"
      className="scroll-mt-[15vh] flex flex-col md:flex-row gap-8 md:gap-12 text-black w-full px-6 md:px-20 justify-center items-center mb-10"
    >
      <div className="flex-shrink-0 w-full md:w-auto mb-20 md:mb-0">
        <div className="relative w-full md:w-[200px] lg:w-[300px] aspect-[3/4] overflow-hidden rounded-[30px]">
          <Image
            src="/book/book-mockup.jpeg"
            alt={t("bookAlt")}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 flex-1 max-w-2xl md:h-[266px] lg:h-[400px] md:justify-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">{t("title")}</h2>
          <p className="text-base md:text-lg text-black/70 leading-relaxed">
            {t("lead")}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">{t("sourcesTitle")}</h3>
          <p className="text-base text-black/70">{t("sourcesLead")}</p>

          <a
            href="/book/Literaturquellen_Longevity.pdf"
            download
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-primary text-white hover:opacity-95 transition cursor-pointer font-medium text-base w-fit"
            aria-label={t("downloadAria")}
          >
            <Download className="w-5 h-5" />
            {t("download")}
          </a>
        </div>
      </div>
    </section>
  );
}
