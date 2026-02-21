-- Add email, user_id, and score_breakdown to survey_responses
-- so responses can be linked to app users.

alter table public.survey_responses
  add column if not exists email           text,
  add column if not exists user_id         uuid references auth.users(id),
  add column if not exists score_breakdown jsonb;

create index if not exists idx_survey_responses_email
  on public.survey_responses(email) where email is not null;

create index if not exists idx_survey_responses_user_id
  on public.survey_responses(user_id) where user_id is not null;

-- RLS ------------------------------------------------------------------

alter table public.survey_responses enable row level security;

create policy "Anyone can insert survey responses"
  on public.survey_responses for insert
  with check (true);

create policy "Authenticated users can read own responses"
  on public.survey_responses for select
  using (auth.uid() = user_id);
