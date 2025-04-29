create table public.leads (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  company text not null,
  project_type text not null,
  description text not null,
  status text not null default 'new',
  contacted_at timestamp with time zone,
  notes text
);

-- Create indexes
create index leads_email_idx on public.leads(email);
create index leads_status_idx on public.leads(status);

-- Set up RLS (Row Level Security)
alter table public.leads enable row level security;

-- Create policies
create policy "Enable read access for authenticated users only"
  on public.leads for select
  to authenticated
  using (true);

create policy "Enable insert access for all users"
  on public.leads for insert
  to anon
  with check (true); 