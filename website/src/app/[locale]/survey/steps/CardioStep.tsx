"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Segment from "../components/Segment";
import NumberInput from "../components/NumberInput";
import { LIMITS } from "@/lib/surveyConfig";
import type { FormState, YesNo, AgeOfOnset } from "@/lib/surveyTypes";

export default function CardioStep({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  const t = useTranslations("Survey");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-5">
        {/* LEFT */}
        <div className="flex-1 h-[460px] rounded-[30px] border border-card-border bg-card p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-medium text-font-primary mb-4">
              {t("cardio.title")}
            </h2>

            {/* Personal history */}
            <div className="flex flex-col gap-2">
              <p className="text-sm text-font-secondary">
                {t("cardio.personalHistory")}
              </p>
              <Segment<YesNo>
                value={form.mi_stroke_personal}
                onChange={(v) => set("mi_stroke_personal", v)}
                options={[
                  { label: t("cardio.no"), value: "no" },
                  { label: t("cardio.yes"), value: "yes" },
                ]}
              />
            </div>

            {/* Family history */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-font-secondary">
                {t("cardio.familyHistory")}
              </p>
              <Segment<YesNo>
                value={form.family_mi_stroke}
                onChange={(v) => set("family_mi_stroke", v)}
                options={[
                  { label: t("cardio.no"), value: "no" },
                  { label: t("cardio.yes"), value: "yes" },
                ]}
              />
            </div>

            {/* Age of onset (conditional) */}
            {form.family_mi_stroke === "yes" && (
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-sm text-font-secondary">
                  {t("cardio.onset")}
                </p>
                <Segment<AgeOfOnset>
                  value={form.family_mi_stroke_onset}
                  onChange={(v) => set("family_mi_stroke_onset", v)}
                  options={[
                    { label: t("cardio.onset55"), value: "<55" },
                    { label: t("cardio.onset5564"), value: "55-64" },
                    { label: t("cardio.onset65"), value: ">=65" },
                    { label: t("cardio.unknown"), value: "unknown" },
                  ]}
                />
              </div>
            )}

            {/* Blood pressure */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-font-secondary">
                {t("cardio.systolic")}
              </p>
              <NumberInput
                value={form.systolic_bp}
                onChange={(v) => set("systolic_bp", v)}
                placeholder={t("cardio.systolicPlaceholder")}
                min={LIMITS.systolic_bp.min}
                max={LIMITS.systolic_bp.max}
                unit={t("cardio.bpUnit")}
              />
            </div>
          </div>

          {/* Bottom helper line (keeps vertical rhythm consistent) */}
          <p className="text-xs text-font-secondary mt-4">
            {t("cardio.hint")}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1 h-[460px] relative overflow-hidden rounded-[30px]">
          <Image
            src="/survey-images/cardio.jpg"
            alt="cardio Illustration"
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
