"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener();
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

const ITEMS = [
  {
    key: "wissen",
    img: "/knowledge.jpg",
    position: "col-start-1 col-span-2 row-start-1 row-span-2",
  },
  {
    key: "bewegung",
    img: "/sport.jpg",
    position: "col-start-3 col-span-2 row-start-1 row-span-1",
  },
  {
    key: "ernaehrung",
    img: "/food.jpg",
    position: "col-start-3 col-span-1 row-start-2 row-span-1",
  },
  {
    key: "schlaf",
    img: "/sleep.jpg",
    position: "col-start-4 col-span-1 row-start-2 row-span-1",
  },
  {
    key: "mindset",
    img: "/social.jpg",
    position: "col-start-1 col-span-4 row-start-3 row-span-2",
  },
] as const;

export default function FiveParts() {
  const t = useTranslations("FiveParts");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const renderCard = (it: (typeof ITEMS)[number]) => (
    <article
      key={it.key}
      className={`relative overflow-hidden rounded-[30px] group cursor-pointer ${
        isDesktop ? it.position : "min-h-[320px]"
      }`}
    >
      <Image
        src={it.img}
        alt={t(`items.${it.key}.title`)}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority={it.key === "wissen"}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.9) 100%)",
        }}
      />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex justify-end -m-3">
          <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-white/95 backdrop-blur-sm flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <ArrowUpRight
              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
              color="#2E4A3F"
            />
          </div>
        </div>
        <div className="text-white">
          <h3 className="text-xl leading-tight">
            {t(`items.${it.key}.title`)}
          </h3>
          <p className="text-base opacity-90">{t(`items.${it.key}.text`)}</p>
        </div>
      </div>
    </article>
  );

  return (
    <section
      id="fiveparts"
      className="scroll-mt-[15vh] flex flex-col gap-10 text-black w-full px-6 md:px-20 min-h-[60vh]"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-medium">
          {t("title")}
          <br /> {t("titleLine2")}
        </h2>
        <p className="font-medium text-xl max-w-4xl mt-4">{t("lead")}</p>
      </div>

      {isDesktop ? (
        <div className="grid gap-4 grid-cols-4 auto-rows-[240px] xl:auto-rows-[260px]">
          {ITEMS.map(renderCard)}
        </div>
      ) : (
        <div className="flex flex-col gap-4">{ITEMS.map(renderCard)}</div>
      )}
    </section>
  );
}
