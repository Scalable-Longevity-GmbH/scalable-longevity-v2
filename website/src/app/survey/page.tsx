// app/survey/page.tsx
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { scoreSurvey } from "@/lib/score";
import { STEPS, visibleFieldsForStep } from "@/lib/surveyConfig";
import { ArrowLeft } from "lucide-react";

import type {
  FormState,
  ScoreResult,
  Gender,
  YesNo,
  Freq,
  Stress,
  Smoking,
  Fastfood,
  FruitsVeg,
  Fish,
  AgeOfOnset,
} from "@/lib/surveyTypes";

import ProfileBodyStep from "@/app/survey/steps/ProfileBodyStep";
import ActivityStep from "@/app/survey/steps/ActivityStep";
import CardioStep from "@/app/survey/steps/CardioStep";
import MetabolicDiabetesStep from "@/app/survey/steps/MetabolicDiabetesStep";
import MetabolicLipidsStep from "@/app/survey/steps/MetabolicLipidsStep";
import ResultsPreview from "../survey/components/ResultsPreview";
import DataSharingStep from "@/app/survey/steps/DataSharingStep";
import LifestyleMindsetStep from "@/app/survey/steps/LifestyleMindsetStep";
import LifestyleNutritionStep from "@/app/survey/steps/LifestyleNutritionStep";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SurveyEntryTracker from "../survey/components/SurveyEntryTracker";

const EDGE_FN_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/score-survey`;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const req = <T,>(v: T | ""): T => v as T;

type ScoreInput = {
  age: number;
  gender: Gender;
  height_cm: number;
  weight_kg: number;
  waist_cm: number;
  daily_movement: Freq;
  sport: Freq;
  mi_stroke_personal: YesNo;
  family_mi_stroke: YesNo;
  family_mi_stroke_onset: AgeOfOnset;
  stress: Stress;
  smoking: Smoking;
  fastfood: Fastfood;
  systolic_bp: number;
  fruits_veg: FruitsVeg;
  fish: Fish;
  diabetes_dx: YesNo;
  hba1c?: number;
  ldl: number;
  hdl: number;
  bp_treated?: boolean;
  ldl_treated?: boolean;
};

export default function SurveyPage() {
  const [step, setStep] = useState(0);
  const [preview, setPreview] = useState<ScoreResult | null>(null);
  const pendingPayloadRef = useRef<Record<string, unknown> | null>(null);
  const savedRef = useRef(false);

  const [form, setForm] = useState<FormState>({
    age: "",
    gender: "",
    height_cm: "",
    weight_kg: "",
    waist_cm: "",
    daily_movement: "",
    sport: "",
    mi_stroke_personal: "",
    family_mi_stroke: "",
    family_mi_stroke_onset: "",
    stress: "",
    smoking: "",
    fastfood: "",
    systolic_bp: "",
    fruits_veg: "",
    fish: "",
    diabetes_dx: "",
    hba1c: "",
    ldl: "",
    hdl: "",
    share_data: null,
  });

  useEffect(() => {
    track("survey_view_start");
  }, []);

  const stepKey = STEPS[step]?.key;
  const isIntro = stepKey === "dataSharing";
  const isLastStep = step === STEPS.length - 1;

  const progress = useMemo(() => {
    // progress like screenshot, but hide on intro step anyway
    return Math.round(((step + 1) / STEPS.length) * 100);
  }, [step]);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function canContinue(currStep = step) {
    const fields = visibleFieldsForStep(currStep, form);
    return fields.every((k) => {
      const v = form[k];
      return v !== "" && v !== null;
    });
  }

  function isStepVisible(stepIndex: number) {
    const k = STEPS[stepIndex]?.key;
    if (!k) return false;

    // hide lipids step unless diabetes_dx === "no"
    if (k === "metabolicLipids" && form.diabetes_dx !== "no") return false;

    return true;
  }

  function next() {
    track("survey_next", { step: STEPS[step].key });

    setStep((s) => {
      let i = Math.min(s + 1, STEPS.length - 1);
      while (i < STEPS.length - 1 && !isStepVisible(i)) i += 1;
      return i;
    });
  }

  function back() {
    track("survey_prev", { step: STEPS[step].key });

    setStep((s) => {
      let i = Math.max(s - 1, 0);
      while (i > 0 && !isStepVisible(i)) i -= 1;
      return i;
    });
  }

  const saveSurvey = useCallback(async (email?: string) => {
    if (savedRef.current || !pendingPayloadRef.current) return;
    savedRef.current = true;

    const payload = pendingPayloadRef.current;
    const body = { ...payload, email: email || null };

    try {
      const res = await fetch(EDGE_FN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ANON_KEY}`,
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        console.error("Survey save failed:", json);
      }
    } catch (err) {
      console.error("Error sending survey to edge function:", err);
    }
  }, []);

  function submit() {

    const payload: ScoreInput = {
      age: Number(form.age),
      gender: req<Gender>(form.gender),
      height_cm: Number(form.height_cm),
      weight_kg: Number(form.weight_kg),
      waist_cm: Number(form.waist_cm),
      daily_movement: req<Freq>(form.daily_movement),
      sport: req<Freq>(form.sport),
      mi_stroke_personal: req<YesNo>(form.mi_stroke_personal),
      family_mi_stroke: req<YesNo>(form.family_mi_stroke),
      family_mi_stroke_onset: req<AgeOfOnset>(form.family_mi_stroke_onset),
      stress: req<Stress>(form.stress),
      smoking: req<Smoking>(form.smoking),
      fastfood: req<Fastfood>(form.fastfood),
      systolic_bp: Number(form.systolic_bp),
      fruits_veg: req<FruitsVeg>(form.fruits_veg),
      fish: req<Fish>(form.fish),
      diabetes_dx: req<YesNo>(form.diabetes_dx),
      hba1c:
        form.diabetes_dx === "yes" && form.hba1c !== ""
          ? Number(form.hba1c)
          : undefined,
      ldl: Number(form.ldl),
      hdl: Number(form.hdl),
    };

    const result = scoreSurvey(payload);
    setPreview(result);

    const fixedPayload = {
      ...payload,
      family_mi_stroke_onset:
        form.family_mi_stroke === "yes" && form.family_mi_stroke_onset !== ""
          ? form.family_mi_stroke_onset
          : null,
      hba1c:
        form.diabetes_dx === "no" && form.hba1c !== ""
          ? Number(form.hba1c)
          : null,
      share_data: form.share_data ?? true,
    };

    pendingPayloadRef.current = fixedPayload;
    savedRef.current = false;
  }

  function handleNext() {
    if (isIntro) return; // intro uses its own start button
    if (!canContinue()) return;

    if (isLastStep) {
      submit();
    } else {
      next();
    }
  }

  const StepComponent = useMemo(() => {
    switch (stepKey) {
      case "dataSharing":
        return <DataSharingStep form={form} set={set} onStart={next} />;
      case "profile":
        return <ProfileBodyStep form={form} set={set} />;
      case "activity":
        return <ActivityStep form={form} set={set} />;
      case "cardio":
        return <CardioStep form={form} set={set} />;
      case "lifestyleMindset":
        return <LifestyleMindsetStep form={form} set={set} />;
      case "lifestyleNutrition":
        return <LifestyleNutritionStep form={form} set={set} />;
      case "metabolicDiabetes":
        return <MetabolicDiabetesStep form={form} set={set} />;
      case "metabolicLipids":
        return <MetabolicLipidsStep form={form} set={set} />;

      default:
        return null;
    }
  }, [stepKey, form]); // set & next are stable enough here

  return (
    <section id="survey" className="h-screen w-full flex flex-col items-center">
      <Suspense fallback={null}>
        <SurveyEntryTracker />
      </Suspense>

      <Link
        href="/"
        className="absolute top-6 left-6 md:top-8 md:left-8 text-primary"
        aria-label="Zur Startseite"
      >
        {/* Mobile: icon */}
        <span className="md:hidden">
          <ArrowLeft className="h-6 w-6" />
        </span>

        {/* Desktop: text */}
        <span className="hidden md:inline underline cursor-pointer">
          Zurück zur Startseite
        </span>
      </Link>

      {/* Header + Progress */}
      {!preview && (
        <div className="flex flex-col w-full items-center text-center mt-14">
          <h1 className="text-4xl md:text-5xl font-medium text-font-primary">
            Selbsttest
          </h1>
          <p className="mt-4 mb-3 text-xl text-font-primary/80 max-w-3xl px-2">
            Finde heraus was wirklich hilft deine Healthspan zu optimieren
          </p>

          {/* Progress (hide on intro) */}
          {!isIntro && (
            <div className="mt-8 mb-4 w-full max-w-4xl px-4 md:px-0">
              <div className="flex items-center gap-4">
                <span className="text-font-primary/80 text-base w-10 text-left">
                  0%
                </span>

                <div className="relative flex-1">
                  <div className="h-3 w-full rounded-full bg-black/20 overflow-hidden" />
                  <div
                    className="absolute left-0 top-0 h-3 rounded-full bg-primary"
                    style={{ width: `${progress}%` }}
                  />
                  {/* pill */}
                  <div
                    className="absolute -top-10"
                    style={{
                      left: `${progress}%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    <div className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium shadow-sm">
                      {progress}%
                    </div>
                  </div>
                </div>

                <span className="text-font-primary/80 text-base w-14 text-right">
                  100%
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Steps content */}
      {!preview && (
        <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col justify-center pb-10">
          {StepComponent}

          {/* Bottom navigation (hide on intro) */}
          {!isIntro && (
            <div className="mt-6 flex items-center justify-between px-4">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className={[
                  "py-3 px-8 rounded-full transition",
                  step === 0
                    ? "bg-black/20 text-white cursor-not-allowed"
                    : "bg-black/20 text-white hover:bg-black/30 cursor-pointer",
                ].join(" ")}
              >
                Zurück
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!canContinue()}
                className={[
                  "py-3 px-8 rounded-full transition",
                  !canContinue()
                    ? "bg-primary/50 text-white cursor-not-allowed"
                    : "bg-primary text-white hover:opacity-95 cursor-pointer",
                ].join(" ")}
              >
                {isLastStep ? "Fertig" : "Weiter"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Preview */}
      {preview && (
        <div className="flex-1 w-full flex justify-center items-center px-4 py-10">
          <ResultsPreview
            preview={preview}
            chronoAge={Number(form.age)}
            form={form}
            onSave={saveSurvey}
          />
        </div>
      )}
    </section>
  );
}
