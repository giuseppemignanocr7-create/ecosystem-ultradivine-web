-- ECOSYSTEM ULTRADIVINE WEBSITE -- INITIAL SCHEMA

create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

-- demo_requests
CREATE TABLE public.demo_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  full_name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  suite_interest TEXT,
  company_size TEXT,
  message TEXT,
  source TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  assigned_to UUID,
  notes TEXT
);
CREATE INDEX idx_demo_requests_created ON public.demo_requests(created_at DESC);
CREATE INDEX idx_demo_requests_status ON public.demo_requests(status);
CREATE INDEX idx_demo_requests_email ON public.demo_requests(email);

-- newsletter_subscribers
CREATE TABLE public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  email TEXT NOT NULL UNIQUE,
  confirmed BOOLEAN NOT NULL DEFAULT FALSE,
  confirmed_at TIMESTAMPTZ,
  source TEXT,
  unsubscribed_at TIMESTAMPTZ
);
CREATE INDEX idx_newsletter_email ON public.newsletter_subscribers(email);

-- contact_messages
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  topic TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  replied_at TIMESTAMPTZ
);

-- demo_sessions
CREATE TABLE public.demo_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  session_id TEXT NOT NULL,
  suite_tried TEXT NOT NULL,
  actions_count INT NOT NULL DEFAULT 0,
  duration_seconds INT,
  completed_tour BOOLEAN NOT NULL DEFAULT FALSE,
  converted_to_request BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE INDEX idx_demo_sessions_session ON public.demo_sessions(session_id);

-- coremind_playground_logs
CREATE TABLE public.coremind_playground_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  session_id TEXT NOT NULL,
  prompt_preview TEXT,
  response_length INT,
  tokens_used INT,
  ip_hash TEXT,
  user_agent_hash TEXT
);
CREATE INDEX idx_coremind_session ON public.coremind_playground_logs(session_id);
CREATE INDEX idx_coremind_ip ON public.coremind_playground_logs(ip_hash, created_at);

-- RLS
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.demo_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coremind_playground_logs ENABLE ROW LEVEL SECURITY;
