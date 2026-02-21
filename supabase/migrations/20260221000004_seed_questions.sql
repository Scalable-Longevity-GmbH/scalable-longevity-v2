-- Seed all survey questions and answer options.
-- Derived from the hardcoded website config in surveyConfig.ts and step components.

-- =====================================================================
-- QUESTIONS
-- =====================================================================

-- Step 0 — dataSharing
insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('share_data', 'dataSharing', 0, 0, 'boolean_toggle', 'Daten teilen');

-- Step 1 — profile
insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('gender', 'profile', 1, 0, 'single_select', 'Geschlecht');

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de, unit, min_value, max_value)
values ('age', 'profile', 1, 1, 'numeric_input', 'Alter', 'Jahre', 18, 100);

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de, unit, min_value, max_value)
values ('height_cm', 'profile', 1, 2, 'numeric_input', 'Größe', 'cm', 100, 200);

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de, unit, min_value, max_value)
values ('weight_kg', 'profile', 1, 3, 'numeric_input', 'Gewicht', 'kg', 30, 200);

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de, unit, min_value, max_value)
values ('waist_cm', 'profile', 1, 4, 'numeric_input', 'Taillenumfang', 'cm', 50, 200);

-- Step 2 — activity
insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('daily_movement', 'activity', 2, 0, 'single_select', 'Tägliche Bewegung > 30 Min.');

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('sport', 'activity', 2, 1, 'single_select', 'Sport > 30 Min.');

-- Step 3 — cardio
insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('mi_stroke_personal', 'cardio', 3, 0, 'single_select', 'Eigene Vorgeschichte: Herzinfarkt / Schlaganfall');

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('family_mi_stroke', 'cardio', 3, 1, 'single_select', 'Familienanamnese: Herzinfarkt / Schlaganfall');

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de, depends_on, depends_on_value)
values ('family_mi_stroke_onset', 'cardio', 3, 2, 'single_select', 'Erkrankungsalter (jüngstes Familienmitglied)', 'family_mi_stroke', 'yes');

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de, unit, min_value, max_value)
values ('systolic_bp', 'cardio', 3, 3, 'numeric_input', 'Systolischer Blutdruck', 'mmHg', 80, 250);

-- Step 4 — lifestyleMindset
insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('stress', 'lifestyleMindset', 4, 0, 'single_select', 'Wie hoch empfindest du dein aktuelles Stressniveau?');

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('smoking', 'lifestyleMindset', 4, 1, 'single_select', 'Rauchst du aktuell?');

-- Step 5 — lifestyleNutrition
insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('fastfood', 'lifestyleNutrition', 5, 0, 'single_select', 'Fastfood - wie häufig pro Woche?');

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('fruits_veg', 'lifestyleNutrition', 5, 1, 'single_select', 'Obst & Gemüse - Portionen pro Tag');

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('fish', 'lifestyleNutrition', 5, 2, 'single_select', 'Fisch - pro Woche');

-- Step 6 — metabolicDiabetes
insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de)
values ('diabetes_dx', 'metabolicDiabetes', 6, 0, 'single_select', 'Diabetes-Diagnose');

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de, unit, min_value, max_value, default_value, depends_on, depends_on_value)
values ('hba1c', 'metabolicDiabetes', 6, 1, 'numeric_input', 'HbA1c', '%', 4, 14, 5.6, 'diabetes_dx', 'no');

-- Step 7 — metabolicLipids (shown when diabetes_dx = "no"; when "yes", app shows these on step 6)
insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de, unit, min_value, max_value, default_value)
values ('ldl', 'metabolicLipids', 7, 0, 'numeric_input', 'LDL', 'mg/dL', 40, 400, 110);

insert into public.survey_questions (field_key, step_key, step_order, field_order, question_type, label_de, unit, min_value, max_value, default_value)
values ('hdl', 'metabolicLipids', 7, 1, 'numeric_input', 'HDL', 'mg/dL', 10, 120, 50);


-- =====================================================================
-- ANSWER OPTIONS  (only for single_select and boolean_toggle questions)
-- =====================================================================

-- share_data (boolean_toggle)
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('false', 'Nicht Teilen', 0),
  ('true',  'Teilen',       1)
) as v(value, label_de, sort_order)
where field_key = 'share_data';

-- gender
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('female', 'Weiblich',  0),
  ('male',   'Männlich',  1)
) as v(value, label_de, sort_order)
where field_key = 'gender';

-- daily_movement
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('0/Wo.',   '0/Wo.',   0),
  ('1-2/Wo.', '1-2/Wo.', 1),
  ('3-4/Wo.', '3-4/Wo.', 2),
  ('5-7/Wo.', '5-7/Wo.', 3)
) as v(value, label_de, sort_order)
where field_key = 'daily_movement';

-- sport
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('0/Wo.',   '0/Wo.',   0),
  ('1-2/Wo.', '1-2/Wo.', 1),
  ('3-4/Wo.', '3-4/Wo.', 2),
  ('5-7/Wo.', '5-7/Wo.', 3)
) as v(value, label_de, sort_order)
where field_key = 'sport';

-- mi_stroke_personal
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('no',  'Nein', 0),
  ('yes', 'Ja',   1)
) as v(value, label_de, sort_order)
where field_key = 'mi_stroke_personal';

-- family_mi_stroke
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('no',  'Nein', 0),
  ('yes', 'Ja',   1)
) as v(value, label_de, sort_order)
where field_key = 'family_mi_stroke';

-- family_mi_stroke_onset
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('<55',     '<55',       0),
  ('55-64',   '55–64',     1),
  ('>=65',    '≥65',       2),
  ('unknown', 'Unbekannt', 3)
) as v(value, label_de, sort_order)
where field_key = 'family_mi_stroke_onset';

-- stress
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('low',    'Niedrig', 0),
  ('medium', 'Mittel',  1),
  ('high',   'Hoch',    2)
) as v(value, label_de, sort_order)
where field_key = 'stress';

-- smoking
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('never',        'Nie',       0),
  ('former',       'Früher',    1),
  ('current_<10',  '<10/Tag',   2),
  ('current_10_20','10-20/Tag', 3),
  ('current_>20',  '>20/Tag',   4)
) as v(value, label_de, sort_order)
where field_key = 'smoking';

-- fastfood
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('never',  'Nie',     0),
  ('1-2/Wo.','1-2/Wo.', 1),
  ('3-4/Wo.','3-4/Wo.', 2),
  ('5+/Wo.', '5+/Wo.',  3)
) as v(value, label_de, sort_order)
where field_key = 'fastfood';

-- fruits_veg
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('0-1/Tag', '0-1/Tag', 0),
  ('2-3/Tag', '2-3/Tag', 1),
  ('4-5/Tag', '4-5/Tag', 2),
  ('6+/Tag',  '6+/Tag',  3)
) as v(value, label_de, sort_order)
where field_key = 'fruits_veg';

-- fish
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('0/Wo.',  '0/Wo.',  0),
  ('1/Wo.',  '1/Wo.',  1),
  ('2/Wo.',  '2/Wo.',  2),
  ('3+/Wo.', '3+/Wo.', 3)
) as v(value, label_de, sort_order)
where field_key = 'fish';

-- diabetes_dx
insert into public.survey_answer_options (question_id, value, label_de, sort_order)
select id, v.value, v.label_de, v.sort_order
from public.survey_questions, (values
  ('no',  'Nein', 0),
  ('yes', 'Ja',   1)
) as v(value, label_de, sort_order)
where field_key = 'diabetes_dx';
