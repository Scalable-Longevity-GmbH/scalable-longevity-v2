# Survey API Integration Guide (for the native app)

This document describes the Supabase-backed survey system shared between the website and the native app. Use this as context when building the survey flow in the app.

## Supabase project

- **URL**: `https://rnygurhkxsixrmsrmoev.supabase.co`
- **Auth**: Magic-link / email auth is already configured. The app uses the `agepilot://` deep-link scheme.

---

## 1. Fetch survey questions

The app renders the survey dynamically by fetching questions + answer options from the database.

```
GET /rest/v1/survey_questions?select=*,survey_answer_options(*)&order=step_order,field_order
Authorization: Bearer <ANON_KEY>
apikey: <ANON_KEY>
```

### `survey_questions` schema

| Column           | Type     | Description |
|------------------|----------|-------------|
| id               | uuid     | PK |
| field_key        | text     | Unique key used in the answers payload: `"age"`, `"gender"`, `"daily_movement"`, etc. |
| step_key         | text     | Groups questions into screens: `"dataSharing"`, `"profile"`, `"activity"`, `"cardio"`, `"lifestyleMindset"`, `"lifestyleNutrition"`, `"metabolicDiabetes"`, `"metabolicLipids"` |
| step_order       | smallint | 0-based ordering of steps |
| field_order      | smallint | Ordering within a step |
| question_type    | text     | `"numeric_input"` / `"single_select"` / `"boolean_toggle"` |
| label_de         | text     | German display label |
| unit             | text     | For numeric inputs: `"Jahre"`, `"cm"`, `"kg"`, `"mmHg"`, `"%"`, `"mg/dL"` |
| min_value        | numeric  | Validation min (numeric inputs only) |
| max_value        | numeric  | Validation max |
| default_value    | numeric  | Pre-fill value (e.g. 5.6 for HbA1c, 110 for LDL, 50 for HDL) |
| depends_on       | text     | field_key of a parent question (nullable). Only show this question when parent has the expected value. |
| depends_on_value | text     | The parent's value that makes this question visible |

### `survey_answer_options` schema

| Column      | Type     | Description |
|-------------|----------|-------------|
| id          | uuid     | PK |
| question_id | uuid     | FK to survey_questions |
| value       | text     | Stored value sent in the answers payload |
| label_de    | text     | German display label |
| sort_order  | smallint | Display ordering |

### Conditional visibility rules

- `family_mi_stroke_onset`: only shown when `family_mi_stroke = "yes"`
- `hba1c`: only shown when `diabetes_dx = "no"`
- The entire `metabolicLipids` step (ldl, hdl): only shown when `diabetes_dx = "no"`. When `diabetes_dx = "yes"`, collect ldl/hdl directly on the `metabolicDiabetes` step instead.

---

## 2. Submit answers (score-survey edge function)

```
POST /functions/v1/score-survey
Authorization: Bearer <ANON_KEY>
Content-Type: application/json
```

### Request body

```json
{
  "age": 35,
  "gender": "male",
  "height_cm": 180,
  "weight_kg": 82,
  "waist_cm": 88,
  "daily_movement": "3-4/Wo.",
  "sport": "1-2/Wo.",
  "mi_stroke_personal": "no",
  "family_mi_stroke": "no",
  "family_mi_stroke_onset": "unknown",
  "stress": "medium",
  "smoking": "never",
  "fastfood": "1-2/Wo.",
  "systolic_bp": 125,
  "fruits_veg": "2-3/Tag",
  "fish": "1/Wo.",
  "diabetes_dx": "no",
  "hba1c": 5.6,
  "ldl": 110,
  "hdl": 55,
  "share_data": true,
  "email": "user@example.com",
  "user_id": "uuid-from-auth-session-or-null"
}
```

**Key fields:**

| Field    | Required | Notes |
|----------|----------|-------|
| email    | optional | Used to link the response to a future app account |
| user_id  | optional | Set this to `auth.user.id` when the user is authenticated in the app |
| share_data | optional | Defaults to `true`. When `false` AND no `user_id` AND no `email`, the response is NOT saved |

**Validation rules (the edge function enforces these):**

| Field | Range / Values |
|-------|---------------|
| age | 18–100 |
| gender | `"female"`, `"male"`, `"diverse"` |
| height_cm | 100–200 |
| weight_kg | 30–200 |
| waist_cm | 50–200 |
| daily_movement, sport | `"0/Wo."`, `"1-2/Wo."`, `"3-4/Wo."`, `"5-7/Wo."` |
| mi_stroke_personal, family_mi_stroke, diabetes_dx | `"yes"`, `"no"` |
| family_mi_stroke_onset | `"<55"`, `"55-64"`, `">=65"`, `"unknown"` (only when family_mi_stroke = yes) |
| stress | `"low"`, `"medium"`, `"high"` |
| smoking | `"never"`, `"former"`, `"current_<10"`, `"current_10_20"`, `"current_>20"` |
| fastfood | `"never"`, `"1-2/Wo."`, `"3-4/Wo."`, `"5+/Wo."` |
| systolic_bp | 80–250 |
| fruits_veg | `"0-1/Tag"`, `"2-3/Tag"`, `"4-5/Tag"`, `"6+/Tag"` |
| fish | `"0/Wo."`, `"1/Wo."`, `"2/Wo."`, `"3+/Wo."` |
| hba1c | 4–14 (only when diabetes_dx = no) |
| ldl | 40–400 |
| hdl | 10–120 |

### Response (200 OK)

```json
{
  "id": "uuid-of-saved-response",
  "totalDelta": 5,
  "biologicalAge": 40,
  "paceOfAging": 5,
  "bmi": 25.3,
  "breakdown": [
    { "rule": "REGEL 2 (BMI)", "label": "25-<30 (BMI 25.3)", "delta": 0 },
    { "rule": "REGEL 3 (Waist)", "label": "<94 cm", "delta": -2 },
    ...
  ]
}
```

`breakdown` contains every scoring rule applied. Positive `delta` = ages faster, negative = ages slower.

---

## 3. Check if user already has a survey response

Before showing the survey, check if the authenticated user already has a response:

```
GET /rest/v1/survey_responses?user_id=eq.<USER_UUID>&select=id,biological_age,pace_of_aging,score_breakdown&order=created_at.desc&limit=1
Authorization: Bearer <USER_JWT>
apikey: <ANON_KEY>
```

If a row is returned, skip the survey and show cached results.

---

## 4. Email-linking flow

The system automatically links anonymous survey responses to user accounts:

1. User takes survey on the website and enters their email on the results page.
2. The response is saved to `survey_responses` with `email` set, `user_id` = null.
3. Later, the user creates an account in the app with the same email.
4. A database trigger (`trg_link_survey_on_signup`) fires on `auth.users` INSERT and sets `user_id` on all matching `survey_responses` rows where `email` matches and `user_id` is null.
5. When the app checks for existing responses (step 3 above), it finds the linked response.

For authenticated app users taking the survey directly, just pass `user_id` in the edge function request. No email linking needed.

---

## 5. Scoring rules summary (17 rules, REGEL 2–18)

The edge function applies these rules. The app does NOT need to implement scoring -- it just submits answers and receives the result. But for reference:

| Rule | Factor | Positive delta (ages faster) | Negative delta (ages slower) |
|------|--------|------------------------------|------------------------------|
| REGEL 2 | BMI | >30: +2 | <25: -1 |
| REGEL 3 | Waist | F >88cm: +4, M >102cm: +4 | F <80cm: -2, M <94cm: -2 |
| REGEL 4 | Daily movement | 0/Wo: +4 | 5-7/Wo: -3 |
| REGEL 5 | Sport | 0/Wo: +2 | 5-7/Wo: -5 |
| REGEL 6 | Personal MI/Stroke | yes: +12 | — |
| REGEL 7 | Family MI/Stroke | yes: +2 | — |
| REGEL 8 | Family onset | <55: +4 | — |
| REGEL 9 | Stress | high: +3 | — |
| REGEL 10 | Smoking | >20/day: +8 | — |
| REGEL 11 | Fastfood | 5+/Wo: +2 | never: -1 |
| REGEL 12 | Systolic BP | >160: +6 | — |
| REGEL 13 | Fruits & Veg | 0-1/Tag: +3 | 6+/Tag: -4 |
| REGEL 14 | Fish | 0/Wo: +2 | 3+/Wo: -2 |
| REGEL 15 | Diabetes Dx | yes: +6 | — |
| REGEL 16 | HbA1c (no Dx) | >5.7: +4 | — |
| REGEL 17 | LDL | >190: +8 | — |
| REGEL 18 | HDL | <40: +4 | >60: -4 |

**Biological age** = chronological age + sum of all deltas.
