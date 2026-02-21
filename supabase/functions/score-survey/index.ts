import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

// ── Types ────────────────────────────────────────────────────────────

type Gender = "female" | "male" | "diverse";
type YesNo = "yes" | "no";
type Freq = "0/Wo." | "1-2/Wo." | "3-4/Wo." | "5-7/Wo.";
type Stress = "low" | "medium" | "high";
type Smoking =
  | "never"
  | "former"
  | "current_<10"
  | "current_10_20"
  | "current_>20";
type Fastfood = "never" | "1-2/Wo." | "3-4/Wo." | "5+/Wo.";
type FruitsVeg = "0-1/Tag" | "2-3/Tag" | "4-5/Tag" | "6+/Tag";
type Fish = "0/Wo." | "1/Wo." | "2/Wo." | "3+/Wo.";
type AgeOfOnset = "<55" | "55-64" | ">=65" | "unknown";

interface SurveyPayload {
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
  hba1c?: number | null;
  ldl: number;
  hdl: number;
  share_data?: boolean;
  email?: string | null;
  user_id?: string | null;
}

interface RuleDelta {
  rule: string;
  label: string;
  delta: number;
}

// ── Validation ───────────────────────────────────────────────────────

const VALID = {
  gender: ["female", "male", "diverse"],
  yesNo: ["yes", "no"],
  freq: ["0/Wo.", "1-2/Wo.", "3-4/Wo.", "5-7/Wo."],
  stress: ["low", "medium", "high"],
  smoking: ["never", "former", "current_<10", "current_10_20", "current_>20"],
  fastfood: ["never", "1-2/Wo.", "3-4/Wo.", "5+/Wo."],
  fruitsVeg: ["0-1/Tag", "2-3/Tag", "4-5/Tag", "6+/Tag"],
  fish: ["0/Wo.", "1/Wo.", "2/Wo.", "3+/Wo."],
  onset: ["<55", "55-64", ">=65", "unknown"],
};

function validate(p: SurveyPayload): string | null {
  if (typeof p.age !== "number" || p.age < 18 || p.age > 100)
    return "age must be 18-100";
  if (!VALID.gender.includes(p.gender)) return "invalid gender";
  if (typeof p.height_cm !== "number" || p.height_cm < 100 || p.height_cm > 200)
    return "height_cm must be 100-200";
  if (typeof p.weight_kg !== "number" || p.weight_kg < 30 || p.weight_kg > 200)
    return "weight_kg must be 30-200";
  if (typeof p.waist_cm !== "number" || p.waist_cm < 50 || p.waist_cm > 200)
    return "waist_cm must be 50-200";
  if (!VALID.freq.includes(p.daily_movement)) return "invalid daily_movement";
  if (!VALID.freq.includes(p.sport)) return "invalid sport";
  if (!VALID.yesNo.includes(p.mi_stroke_personal))
    return "invalid mi_stroke_personal";
  if (!VALID.yesNo.includes(p.family_mi_stroke))
    return "invalid family_mi_stroke";
  if (
    p.family_mi_stroke === "yes" &&
    !VALID.onset.includes(p.family_mi_stroke_onset)
  )
    return "invalid family_mi_stroke_onset";
  if (!VALID.stress.includes(p.stress)) return "invalid stress";
  if (!VALID.smoking.includes(p.smoking)) return "invalid smoking";
  if (!VALID.fastfood.includes(p.fastfood)) return "invalid fastfood";
  if (
    typeof p.systolic_bp !== "number" ||
    p.systolic_bp < 80 ||
    p.systolic_bp > 250
  )
    return "systolic_bp must be 80-250";
  if (!VALID.fruitsVeg.includes(p.fruits_veg)) return "invalid fruits_veg";
  if (!VALID.fish.includes(p.fish)) return "invalid fish";
  if (!VALID.yesNo.includes(p.diabetes_dx)) return "invalid diabetes_dx";
  if (
    p.diabetes_dx === "no" &&
    p.hba1c != null &&
    (typeof p.hba1c !== "number" || p.hba1c < 4 || p.hba1c > 14)
  )
    return "hba1c must be 4-14";
  if (typeof p.ldl !== "number" || p.ldl < 40 || p.ldl > 400)
    return "ldl must be 40-400";
  if (typeof p.hdl !== "number" || p.hdl < 10 || p.hdl > 120)
    return "hdl must be 10-120";
  return null;
}

// ── Scoring rules (REGEL 2–18) ──────────────────────────────────────

const bmiOf = (h: number, w: number) =>
  +(w / Math.pow(h / 100, 2)).toFixed(1);

function rBMI(h: number, w: number): RuleDelta {
  const bmi = bmiOf(h, w);
  if (bmi < 25) return { rule: "REGEL 2 (BMI)", label: `<25 (BMI ${bmi})`, delta: -1 };
  if (bmi < 30) return { rule: "REGEL 2 (BMI)", label: `25-<30 (BMI ${bmi})`, delta: 0 };
  return { rule: "REGEL 2 (BMI)", label: `>30 (BMI ${bmi})`, delta: 2 };
}

function rWaist(waist: number, gender: Gender): RuleDelta {
  if (gender === "female") {
    if (waist < 80) return { rule: "REGEL 3 (Waist)", label: "<80 cm", delta: -2 };
    if (waist < 88) return { rule: "REGEL 3 (Waist)", label: ">80-<88 cm", delta: 2 };
    return { rule: "REGEL 3 (Waist)", label: ">88 cm", delta: 4 };
  }
  if (waist < 94) return { rule: "REGEL 3 (Waist)", label: "<94 cm", delta: -2 };
  if (waist <= 102) return { rule: "REGEL 3 (Waist)", label: "94-102 cm", delta: 2 };
  return { rule: "REGEL 3 (Waist)", label: ">102 cm", delta: 4 };
}

function rDailyMove(val: Freq): RuleDelta {
  const map: Record<Freq, number> = { "0/Wo.": 4, "1-2/Wo.": 2, "3-4/Wo.": 0, "5-7/Wo.": -3 };
  return { rule: "REGEL 4 (Alltag >30min)", label: val, delta: map[val] };
}

function rSport(val: Freq): RuleDelta {
  const map: Record<Freq, number> = { "0/Wo.": 2, "1-2/Wo.": 0, "3-4/Wo.": -3, "5-7/Wo.": -5 };
  return { rule: "REGEL 5 (Sport >30min)", label: val, delta: map[val] };
}

function rMIPersonal(val: YesNo): RuleDelta {
  return { rule: "REGEL 6 (MI/Stroke personal)", label: val, delta: val === "yes" ? 12 : 0 };
}

function rFamily(val: YesNo, onset: AgeOfOnset): RuleDelta[] {
  const base: RuleDelta = { rule: "REGEL 7 (Family MI/Stroke)", label: val, delta: val === "yes" ? 2 : 0 };
  if (val !== "yes") return [base];
  const onsetDelta = onset === "<55" ? 4 : 0;
  return [
    base,
    { rule: "REGEL 8 (Family onset)", label: onset === "<55" ? "<55 Jahre" : "55 oder älter/unknown", delta: onsetDelta },
  ];
}

function rStress(val: Stress): RuleDelta {
  const map: Record<Stress, number> = { low: 0, medium: 1, high: 3 };
  return { rule: "REGEL 9 (Stress)", label: val, delta: map[val] };
}

function rSmoking(val: Smoking): RuleDelta {
  const mapping: Record<Smoking, { label: string; delta: number }> = {
    never: { label: "Nie", delta: 0 },
    former: { label: "Vergangenheit >10 Jahre", delta: 4 },
    "current_<10": { label: "Aktueller Raucher <1Sch./Tag", delta: 6 },
    current_10_20: { label: "Aktueller Raucher >1Sch./Tag", delta: 8 },
    "current_>20": { label: "Aktueller Raucher >1Sch./Tag", delta: 8 },
  };
  const m = mapping[val];
  return { rule: "REGEL 10 (Rauchen)", label: m.label, delta: m.delta };
}

function rFastfood(val: Fastfood): RuleDelta {
  const mapping: Record<Fastfood, { label: string; delta: number }> = {
    never: { label: "nie", delta: -1 },
    "1-2/Wo.": { label: "selten", delta: 0 },
    "3-4/Wo.": { label: "1/Wo.", delta: 1 },
    "5+/Wo.": { label: "mehrmals/Wo.", delta: 2 },
  };
  const m = mapping[val];
  return { rule: "REGEL 11 (Fastfood)", label: m.label, delta: m.delta };
}

function rSystolicBP(sys: number): RuleDelta[] {
  let band: string, delta: number;
  if (sys > 160) { band = ">160"; delta = 6; }
  else if (sys >= 140) { band = "140-160"; delta = 4; }
  else if (sys >= 130) { band = "130-139"; delta = 2; }
  else { band = "<129"; delta = 0; }
  return [{ rule: "REGEL 12 (Systolic BP)", label: band, delta }];
}

function rFruitsVeg(val: FruitsVeg): RuleDelta {
  const mapping: Record<FruitsVeg, { label: string; delta: number }> = {
    "0-1/Tag": { label: "1x/Wo.", delta: 3 },
    "2-3/Tag": { label: "3x/Wo.", delta: 1 },
    "4-5/Tag": { label: "täglich", delta: -2 },
    "6+/Tag": { label: "mehrmals tägl.", delta: -4 },
  };
  const m = mapping[val];
  return { rule: "REGEL 13 (Obst & Gemüse)", label: m.label, delta: m.delta };
}

function rFish(val: Fish): RuleDelta {
  const mapping: Record<Fish, { label: string; delta: number }> = {
    "0/Wo.": { label: "selten", delta: 2 },
    "1/Wo.": { label: "1x/Wo.", delta: 0 },
    "2/Wo.": { label: "2-3x/wo.", delta: -1 },
    "3+/Wo.": { label: "4x/Wo.", delta: -2 },
  };
  const m = mapping[val];
  return { rule: "REGEL 14 (Fisch)", label: m.label, delta: m.delta };
}

function rDiabetes(dx: YesNo, hba1c?: number | null): RuleDelta[] {
  const out: RuleDelta[] = [
    { rule: "REGEL 15 (Diabetes Dx)", label: dx, delta: dx === "yes" ? 6 : 0 },
  ];
  if (dx === "no" && typeof hba1c === "number") {
    let label: string, delta: number;
    if (hba1c < 4.0) { label = "<4,0%"; delta = 3; }
    else if (hba1c < 4.5) { label = "4,0-4,4%"; delta = 1; }
    else if (hba1c < 5.5) { label = "4,5-5,4"; delta = 0; }
    else if (hba1c < 5.7) { label = "5,5-5,6%"; delta = 1; }
    else { label = "5,7-6,4"; delta = 4; }
    out.push({ rule: "REGEL 16 (HbA1c falls keine Dx)", label, delta });
  }
  return out;
}

function rLDL(ldl: number): RuleDelta {
  if (ldl >= 190) return { rule: "REGEL 17 (LDL)", label: "<190 (mg/dL)", delta: 8 };
  if (ldl >= 160) return { rule: "REGEL 17 (LDL)", label: "160-190 (mg/dL)", delta: 6 };
  if (ldl >= 130) return { rule: "REGEL 17 (LDL)", label: "130-159 (mg/dL)", delta: 4 };
  return { rule: "REGEL 17 (LDL)", label: "<130 (mg/dL)", delta: 0 };
}

function rHDL(hdl: number): RuleDelta {
  if (hdl > 60) return { rule: "REGEL 18 (HDL)", label: ">60 (mg/dL)", delta: -4 };
  if (hdl >= 50) return { rule: "REGEL 18 (HDL)", label: "50-60 (mg/dL)", delta: -2 };
  if (hdl >= 40) return { rule: "REGEL 18 (HDL)", label: "40-59 (mg/dL)", delta: 0 };
  return { rule: "REGEL 18 (HDL)", label: "<40 (mg/dL)", delta: 4 };
}

function scoreSurvey(p: SurveyPayload) {
  const breakdown: RuleDelta[] = [];

  breakdown.push(rBMI(p.height_cm, p.weight_kg));
  breakdown.push(rWaist(p.waist_cm, p.gender));
  breakdown.push(rDailyMove(p.daily_movement));
  breakdown.push(rSport(p.sport));
  breakdown.push(rMIPersonal(p.mi_stroke_personal));
  breakdown.push(...rFamily(p.family_mi_stroke, p.family_mi_stroke_onset));
  breakdown.push(rStress(p.stress));
  breakdown.push(rSmoking(p.smoking));
  breakdown.push(rFastfood(p.fastfood));
  breakdown.push(...rSystolicBP(p.systolic_bp));
  breakdown.push(rFruitsVeg(p.fruits_veg));
  breakdown.push(rFish(p.fish));
  breakdown.push(...rDiabetes(p.diabetes_dx, p.hba1c));
  breakdown.push(rLDL(p.ldl));
  breakdown.push(rHDL(p.hdl));

  const totalDelta = breakdown.reduce((s, b) => s + b.delta, 0);
  return { totalDelta, breakdown, bmi: bmiOf(p.height_cm, p.weight_kg) };
}

// ── Handler ──────────────────────────────────────────────────────────

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const payload: SurveyPayload = await req.json();

    const validationError = validate(payload);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const result = scoreSurvey(payload);
    const biologicalAge = payload.age + result.totalDelta;
    const paceOfAging = result.totalDelta;

    const shouldSave =
      payload.share_data !== false ||
      payload.user_id != null ||
      (payload.email != null && payload.email !== "");

    let insertedId: string | null = null;

    if (shouldSave) {
      const supabase = createClient(
        Deno.env.get("SUPABASE_URL")!,
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
      );

      const row = {
        age: payload.age,
        gender: payload.gender,
        height_cm: payload.height_cm,
        weight_kg: payload.weight_kg,
        waist_cm: payload.waist_cm,
        daily_movement: payload.daily_movement,
        sport: payload.sport,
        mi_stroke_personal: payload.mi_stroke_personal,
        family_mi_stroke: payload.family_mi_stroke,
        family_mi_stroke_onset:
          payload.family_mi_stroke === "yes"
            ? payload.family_mi_stroke_onset
            : null,
        stress: payload.stress,
        smoking: payload.smoking,
        fastfood: payload.fastfood,
        systolic_bp: payload.systolic_bp,
        fruits_veg: payload.fruits_veg,
        fish: payload.fish,
        diabetes_dx: payload.diabetes_dx,
        hba1c:
          payload.diabetes_dx === "no" && payload.hba1c != null
            ? payload.hba1c
            : null,
        ldl: payload.ldl,
        hdl: payload.hdl,
        share_data: payload.share_data ?? true,
        biological_age: biologicalAge,
        pace_of_aging: paceOfAging,
        score_breakdown: result.breakdown,
        email: payload.email ?? null,
        user_id: payload.user_id ?? null,
      };

      const { data, error } = await supabase
        .from("survey_responses")
        .insert([row])
        .select("id")
        .single();

      if (error) {
        console.error("DB insert failed:", error);
        return new Response(
          JSON.stringify({ error: "DB insert failed", details: error.message }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }
      insertedId = data.id;
    }

    return new Response(
      JSON.stringify({
        id: insertedId,
        totalDelta: result.totalDelta,
        biologicalAge,
        paceOfAging,
        bmi: result.bmi,
        breakdown: result.breakdown,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error("Edge function error:", err);
    const message = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({ error: "Server error", details: message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
