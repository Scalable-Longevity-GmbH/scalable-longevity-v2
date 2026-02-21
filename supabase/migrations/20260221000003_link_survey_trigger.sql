-- Auto-link anonymous survey responses to a user when they sign up
-- with the same email address.

create or replace function public.link_survey_to_user()
returns trigger as $$
begin
  update public.survey_responses
  set user_id = new.id
  where lower(email) = lower(new.email)
    and user_id is null;
  return new;
end;
$$ language plpgsql security definer;

create trigger trg_link_survey_on_signup
  after insert on auth.users
  for each row execute function public.link_survey_to_user();
