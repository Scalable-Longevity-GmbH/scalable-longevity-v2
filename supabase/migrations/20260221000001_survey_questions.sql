-- Survey questions & answer options tables
-- These tables allow the native app to dynamically fetch and render the survey.

create table public.survey_questions (
  id              uuid primary key default gen_random_uuid(),
  field_key       text unique not null,
  step_key        text not null,
  step_order      smallint not null,
  field_order     smallint not null,
  question_type   text not null check (question_type in ('numeric_input', 'single_select', 'boolean_toggle')),
  label_de        text not null,
  unit            text,
  min_value       numeric,
  max_value       numeric,
  default_value   numeric,
  depends_on      text,
  depends_on_value text,
  created_at      timestamptz not null default now()
);

create table public.survey_answer_options (
  id           uuid primary key default gen_random_uuid(),
  question_id  uuid not null references public.survey_questions(id) on delete cascade,
  value        text not null,
  label_de     text not null,
  sort_order   smallint not null default 0
);

create index idx_answer_options_question on public.survey_answer_options(question_id);

-- RLS ------------------------------------------------------------------

alter table public.survey_questions enable row level security;
alter table public.survey_answer_options enable row level security;

create policy "Anyone can read survey questions"
  on public.survey_questions for select
  using (true);

create policy "Anyone can read answer options"
  on public.survey_answer_options for select
  using (true);
