"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { PillCTA } from "./ui/PillCTA";

type Step = {
  id: number;
  tailwindHeightClass: string;
};

const STEPS: Step[] = [
  { id: 1, tailwindHeightClass: "h-30" },
  { id: 2, tailwindHeightClass: "h-30" },
  { id: 3, tailwindHeightClass: "h-30" },
];

const CONNECTOR_COUNT = STEPS.length - 1;

export default function CTA() {
  const t = useTranslations("CTA");
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [targetHeights, setTargetHeights] = useState<number[]>(
    Array(CONNECTOR_COUNT).fill(0)
  );
  const [lineHeights, setLineHeights] = useState<number[]>(
    Array(CONNECTOR_COUNT).fill(0)
  );
  const [step1Active, setStep1Active] = useState(false);

  const [offset, setOffset] = useState<number>(5);
  useEffect(() => {
    const computeOffset = () => {
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      setOffset(isMobile ? -200 : 5);
    };
    computeOffset();
    window.addEventListener("resize", computeOffset);
    return () => window.removeEventListener("resize", computeOffset);
  }, []);

  useEffect(() => {
    const temps = Array.from({ length: CONNECTOR_COUNT }, (_, i) => {
      const el = document.createElement("div");
      el.className = `invisible pointer-events-none ${STEPS[i].tailwindHeightClass}`;
      document.body.appendChild(el);
      return el;
    });
    const measured = temps.map((el) => el.getBoundingClientRect().height);
    temps.forEach((el) => el.remove());
    setTargetHeights(measured);
  }, []);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const viewportCenter = window.innerHeight / 2;

      const step1Node = contentRefs.current[0];
      if (step1Node) {
        const r = step1Node.getBoundingClientRect();
        const center = r.top + r.height / 2;
        setStep1Active(center <= viewportCenter - offset);
      }

      setLineHeights((prev) => {
        const next = [...prev];

        if (contentRefs.current[0]) {
          const rect = contentRefs.current[0]!.getBoundingClientRect();
          const elemCenter = rect.top + rect.height / 2;

          if (elemCenter <= viewportCenter - offset) {
            const raw = viewportCenter - offset - elemCenter;
            next[0] = Math.max(0, Math.min(raw, targetHeights[0] || 0));
          } else {
            next[0] = 0;
          }
        }

        if (CONNECTOR_COUNT > 1) {
          if (
            targetHeights[0] > 0 &&
            lineHeights[0] >= targetHeights[0] - 0.5
          ) {
            const rect = contentRefs.current[1]?.getBoundingClientRect();
            if (rect) {
              const elemCenter = rect.top + rect.height / 2;
              const raw = viewportCenter - offset - elemCenter;
              const clamped = Math.max(0, Math.min(raw, targetHeights[1] || 0));
              next[1] = clamped;
            }
          } else {
            next[1] = 0;
          }
        }

        return next;
      });

      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    onScrollOrResize();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [targetHeights, lineHeights, offset]);

  const connectorComplete = (i: number) =>
    targetHeights[i] > 0 && lineHeights[i] >= targetHeights[i] - 0.5;

  const numberIsActive = (idx: number) => {
    if (idx === 0) return step1Active;
    if (idx === 1) return connectorComplete(0);
    if (idx === 2) return connectorComplete(1);
    return false;
  };

  const textIsVisible = (idx: number) => numberIsActive(idx);

  return (
    <div
      id="how-it-works"
      className="scroll-mt-[5vh] flex flex-col justify-center items-center gap-10 p-6 sm:p-30"
    >
      <p className="text-3xl text-font-secondary">{t("eyebrow")}</p>
      <h2 className="text-[clamp(1.75rem,6vw,3.75rem)] font-semibold">
        {t("title")}
      </h2>
      <div className="w-full flex flex-row">
        <div className="flex flex-col justify-center items-center">
          {STEPS.map((step, i) => {
            const numberActive = numberIsActive(i);
            const numberColor = numberActive ? "text-black" : "text-gray-300";

            return (
              <React.Fragment key={step.id}>
                <p
                  className={`text-[clamp(2.5rem,15vw,6.25rem)] font-black h-40 flex items-center justify-center leading-none ${numberColor}`}
                >
                  {String(step.id).padStart(2, "0")}
                </p>

                {i < CONNECTOR_COUNT && (
                  <div
                    className="relative w-0.5"
                    style={{ height: targetHeights[i] || 0 }}
                  >
                    <div
                      className="absolute left-0 top-0 w-0.5 bg-black rounded-full"
                      style={{ height: lineHeights[i] || 0 }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="flex flex-col w-full h-full justify-center items-center ml-10 gap-30">
          {STEPS.map((step, i) => {
            const show = textIsVisible(i);
            const stepKey = String(step.id) as "1" | "2" | "3";
            return (
              <div
                key={step.id}
                ref={(el) => {
                  if (i < CONNECTOR_COUNT) contentRefs.current[i] = el;
                }}
                className="w-full h-40 flex flex-col justify-center items-start"
              >
                <h4
                  className={`font-semibold text-[clamp(1rem,4vw,1.25rem)] transition-all duration-300 ${
                    show
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  {t(`steps.${stepKey}.title`)}
                </h4>
                <p
                  className={`text-[clamp(0.9rem,3.5vw,1rem)] transition-all duration-300 delay-75 text-font-primary ${
                    show
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  {t(`steps.${stepKey}.text`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <PillCTA
        as="link"
        href="/survey"
        label={t("cta")}
        size="md"
        bgClass="bg-primary hover:bg-primary/60"
        textClass="text-white"
        iconBgClass="bg-white"
        iconColorClass="text-primary"
        track={{
          event: "survey_start_click",
          from: "home_hero",
          variant: "primary",
        }}
      />
    </div>
  );
}
