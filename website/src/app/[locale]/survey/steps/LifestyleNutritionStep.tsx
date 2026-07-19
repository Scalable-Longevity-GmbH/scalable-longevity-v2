"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import Segment from "../components/Segment";
import type { FormState, Fastfood, FruitsVeg, Fish } from "@/lib/surveyTypes";

export default function LifestyleNutritionStep({
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
        <div className="flex-1 h-[460px] max-h-[600px] rounded-[30px] border border-card-border bg-card p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-medium text-font-primary mb-4">
              {t("lifestyleNutrition.title")}
            </h2>

            {/* Fastfood */}
            <div className="flex flex-col gap-2">
              <p className="text-sm text-font-secondary">
                {t("lifestyleNutrition.fastfood")}
              </p>
              <Segment<Fastfood>
                value={form.fastfood}
                onChange={(v) => set("fastfood", v)}
                options={[
                  { label: t("lifestyleNutrition.never"), value: "never" },
                  { label: t("activity.freq12"), value: "1-2/Wo." },
                  { label: t("activity.freq34"), value: "3-4/Wo." },
                  { label: t("lifestyleNutrition.freq5plus"), value: "5+/Wo." },
                ]}
              />
            </div>

            {/* Fruits & Veg */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-font-secondary">
                {t("lifestyleNutrition.fruitsVeg")}
              </p>
              <Segment<FruitsVeg>
                value={form.fruits_veg}
                onChange={(v) => set("fruits_veg", v)}
                options={[
                  { label: t("lifestyleNutrition.serv01"), value: "0-1/Tag" },
                  { label: t("lifestyleNutrition.serv23"), value: "2-3/Tag" },
                  { label: t("lifestyleNutrition.serv45"), value: "4-5/Tag" },
                  { label: t("lifestyleNutrition.serv6plus"), value: "6+/Tag" },
                ]}
              />
            </div>

            {/* Fish */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-font-secondary">
                {t("lifestyleNutrition.fish")}
              </p>
              <Segment<Fish>
                value={form.fish}
                onChange={(v) => set("fish", v)}
                options={[
                  { label: t("lifestyleNutrition.fish0"), value: "0/Wo." },
                  { label: t("lifestyleNutrition.fish1"), value: "1/Wo." },
                  { label: t("lifestyleNutrition.fish2"), value: "2/Wo." },
                  { label: t("lifestyleNutrition.fish3plus"), value: "3+/Wo." },
                ]}
              />
            </div>
          </div>

          <p className="text-xs text-font-secondary mt-4">
            {t("lifestyleNutrition.hint")}
          </p>
        </div>

        {/* RIGHT (hide on mobile) */}
        <div className="hidden lg:block flex-1 h-[460px] relative overflow-hidden rounded-[30px]">
          <Image
            src="/survey-images/food.jpg"
            alt="food Illustration"
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
