"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import NumberInput from "../components/NumberInput";
import { LIMITS, DEFAULTS } from "@/lib/surveyConfig";
import type { FormState } from "@/lib/surveyTypes";

export default function MetabolicLipidsStep({
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
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium text-font-primary mb-2">
                {t("metabolicLipids.title")}
              </h2>

              <button
                type="button"
                onClick={() => {
                  set("ldl", DEFAULTS.ldl);
                  set("hdl", DEFAULTS.hdl);
                }}
                className="text-xs text-primary underline cursor-pointer"
              >
                {t("metabolicLipids.useDefaults")}
              </button>
            </div>

            <p className="text-xs text-font-secondary">
              {t("metabolicLipids.defaultsHint")}
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
          </div>

          <p className="text-xs text-font-secondary mt-4">
            {t("metabolicLipids.hint")}
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1 h-[460px] relative overflow-hidden rounded-[30px]">
          <Image
            src="/survey-images/metabolic-2.jpg"
            alt="metabolic-2 Illustration"
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
