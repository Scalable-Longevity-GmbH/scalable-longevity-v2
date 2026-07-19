"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ITEM_KEYS = ["insightHub", "lifePathAnalyzer", "habitEngine"] as const;

export default function Principles() {
  const t = useTranslations("Principles");

  return (
    <section
      id="principles"
      className="scroll-mt-[5vh] flex flex-col gap-10 text-black w-full px-6 md:px-20 justify-center min-h-screen"
    >
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="flex text-4xl text-center md:text-5xl font-medium">
          {t("title")}
          <br /> {t("titleLine2")}
        </h2>
        <p className="flex font-medium text-center text-xl max-w-3xl mt-4">
          {t("lead")}
        </p>
      </div>

      <div className="flex w-full gap-10 flex-col md:flex-row">
        {ITEM_KEYS.map((key, i) => (
          <article
            key={key}
            className={`flex-1 ${i === 1 ? "relative md:-top-12" : ""}`}
          >
            <div className="relative w-full aspect-square overflow-hidden rounded-[30px]">
              <Image
                src={`/columns/${key}.jpg`}
                alt={t(`items.${key}.title`)}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="mt-4 flex items-start gap-4">
              <div className="min-w-0">
                <h3 className="text-xl font-semibold leading-tight">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-base text-black/70 mt-1">
                  {t(`items.${key}.text`)}
                </p>
              </div>
              <div className="flex justify-center items-center w-[55px] h-[55px] rounded-full bg-card flex-shrink-0 group cursor-pointer">
                <ArrowUpRight
                  color="#2E4A3F"
                  className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
