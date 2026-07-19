"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Segment from "../components/Segment";
import type { FormState, Freq } from "@/lib/surveyTypes";

export default function ActivityStep({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  const t = useTranslations("Survey");

  const freqOptions: { label: string; value: Freq }[] = [
    { label: t("activity.freq0"), value: "0/Wo." },
    { label: t("activity.freq12"), value: "1-2/Wo." },
    { label: t("activity.freq34"), value: "3-4/Wo." },
    { label: t("activity.freq57"), value: "5-7/Wo." },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-5">
        {/* LEFT */}
        <div className="flex-1 h-[460px] rounded-[30px] border border-card-border bg-card p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-medium text-font-primary mb-4">
              {t("activity.title")}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-font-secondary">
                {t("activity.dailyMovement")}
              </p>
              <Segment<Freq>
                value={form.daily_movement}
                onChange={(v) => set("daily_movement", v)}
                options={freqOptions}
              />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-font-secondary">{t("activity.sport")}</p>
              <Segment<Freq>
                value={form.sport}
                onChange={(v) => set("sport", v)}
                options={freqOptions}
              />
            </div>
          </div>

          {/* optional helper line at bottom (keeps spacing consistent) */}
          <p className="text-xs text-font-secondary mt-4">
            {t("activity.hint")}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1 h-[460px] relative overflow-hidden rounded-[30px]">
          <Image
            src="/survey-images/activity.jpg"
            alt="activity Illustration"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
