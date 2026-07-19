// components/survey/steps/DataSharingStep.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import type { FormState } from "@/lib/surveyTypes";

export default function DataSharingStep({
  form,
  set,
  onStart,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  onStart: () => void;
}) {
  const t = useTranslations("Survey");
  const choice = form.share_data;

  useEffect(() => {
    if (choice === null) set("share_data", true);
  }, [choice, set]);

  const share = choice ?? true;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-5">
        {/* LEFT */}
        <div className="flex-1 h-[460px] rounded-[30px] border border-card-border bg-card p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              {t("dataSharing.title")}
            </h1>
            <p className="text-sm text-font-secondary">
              {t("dataSharing.hint")}
            </p>
          </div>

          <div>
            <div className="bg-background p-1 rounded-full flex items-center gap-1 relative">
              {/* Sliding indicator */}
              <div
                className={[
                  "absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-secondary transition-transform duration-300 ease-in-out",
                  share ? "translate-x-[calc(100%+8px)]" : "translate-x-0",
                ].join(" ")}
              />

              <button
                type="button"
                onClick={() => set("share_data", false)}
                className={[
                  "relative z-10 cursor-pointer w-full rounded-full py-3 text-sm transition-colors duration-300",
                  !share ? "text-white" : "text-font-secondary",
                ].join(" ")}
              >
                {t("dataSharing.dontShare")}
              </button>

              <button
                type="button"
                onClick={() => set("share_data", true)}
                className={[
                  "relative z-10 cursor-pointer w-full rounded-full py-3 text-sm transition-colors duration-300",
                  share ? "text-white" : "text-font-secondary",
                ].join(" ")}
              >
                {t("dataSharing.share")}
              </button>
            </div>

            <p className="mt-4 text-xs text-font-secondary text-center">
              {t("dataSharing.footer")}
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 h-[460px] relative overflow-hidden rounded-[30px]">
          <Image
            src="/survey-images/start.jpg"
            alt="Data Sharing Illustration"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="flex mt-5 justify-end">
        <button
          type="button"
          onClick={onStart}
          className="py-3 px-6 bg-primary text-white rounded-full cursor-pointer"
        >
          {t("dataSharing.start")}
        </button>
      </div>
    </div>
  );
}
