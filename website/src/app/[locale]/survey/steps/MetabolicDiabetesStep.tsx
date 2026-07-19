"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Segment from "../components/Segment";
import NumberInput from "../components/NumberInput";
import HoverCard from "../components/HoverCard";
import { Info } from "lucide-react";
import { LIMITS, DEFAULTS } from "@/lib/surveyConfig";
import type { FormState, YesNo } from "@/lib/surveyTypes";

export default function MetabolicDiabetesStep({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  const t = useTranslations("Survey");
  const showHba1c = form.diabetes_dx === "no";
  const showLipidsHere = form.diabetes_dx === "yes";

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-5">
        {/* LEFT */}
        <div className="flex-1 h-[460px] rounded-[30px] border border-card-border bg-card p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-medium text-font-primary mb-4">
              {t("metabolicDiabetes.title")}
            </h2>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-font-secondary">
                {t("metabolicDiabetes.diabetes")}
              </p>
              <Segment<YesNo>
                value={form.diabetes_dx}
                onChange={(v) => set("diabetes_dx", v)}
                options={[
                  { label: t("metabolicDiabetes.no"), value: "no" },
                  { label: t("metabolicDiabetes.yes"), value: "yes" },
                ]}
              />
            </div>

            {showHba1c && (
              <div className="mt-2 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-font-secondary">
                      {t("metabolicDiabetes.hba1c")}
                    </p>
                    <HoverCard
                      trigger={<Info className="h-4 w-4 text-font-secondary" />}
                      placement="top"
                    >
                      <div className="font-semibold mb-1">
                        {t("metabolicDiabetes.hba1cWhat")}
                      </div>
                      <p className="text-font-secondary">
                        {t("metabolicDiabetes.hba1cExplain")}
                      </p>
                    </HoverCard>
                  </div>

                  <button
                    type="button"
                    onClick={() => set("hba1c", DEFAULTS.hba1c)}
                    className="text-xs text-primary underline cursor-pointer"
                  >
                    {t("metabolicDiabetes.useDefaults")}
                  </button>
                </div>

                <p className="text-xs text-font-secondary">
                  {t("metabolicDiabetes.defaultsHint")}
                </p>

                <NumberInput
                  value={form.hba1c}
                  onChange={(v) => set("hba1c", v)}
                  placeholder={t("metabolicDiabetes.hba1cPlaceholder")}
                  min={LIMITS.hba1c.min}
                  max={LIMITS.hba1c.max}
                  unit="%"
                />
              </div>
            )}

            {/* If diabetes = yes, collect lipids here (so we don't need next step) */}
            {showLipidsHere && (
              <>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-sm text-font-secondary">
                    {t("metabolicDiabetes.lipidsLabel")}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      set("ldl", DEFAULTS.ldl);
                      set("hdl", DEFAULTS.hdl);
                    }}
                    className="text-xs text-primary underline"
                  >
                    {t("metabolicDiabetes.useDefaults")}
                  </button>
                </div>

                <p className="text-xs text-font-secondary">
                  {t("metabolicDiabetes.lipidsHint")}
                </p>

                <NumberInput
                  value={form.ldl}
                  onChange={(v) => set("ldl", v)}
                  placeholder="LDL"
                  min={LIMITS.ldl.min}
                  max={LIMITS.ldl.max}
                  unit="mg/dL"
                />

                <NumberInput
                  value={form.hdl}
                  onChange={(v) => set("hdl", v)}
                  placeholder="HDL"
                  min={LIMITS.hdl.min}
                  max={LIMITS.hdl.max}
                  unit="mg/dL"
                />
              </>
            )}
          </div>

          <p className="text-xs text-font-secondary mt-4">
            {t("metabolicDiabetes.hint")}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1 h-[460px] relative overflow-hidden rounded-[30px]">
          <Image
            src="/survey-images/metabolic.jpg"
            alt="metabolic Illustration"
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
