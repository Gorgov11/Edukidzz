-- Create email subscriptions table
CREATE TABLE public.email_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  source TEXT DEFAULT 'website',
  is_active BOOLEAN DEFAULT true,
  preferences JSONB DEFAULT '{}'::jsonb
);

-- Create contact form submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  submitted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  admin_notes TEXT
);

-- Create resource downloads table
CREATE TABLE public.resource_downloads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  resource_name TEXT NOT NULL,
  download_url TEXT,
  downloaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  email_sent BOOLEAN DEFAULT false
);

-- Enable RLS on all tables
ALTER TABLE public.email_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resource_downloads ENABLE ROW LEVEL SECURITY;

-- Create policies for email subscriptions (public read/insert for newsletter signup)
CREATE POLICY "Anyone can subscribe to newsletter"
ON public.email_subscriptions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Subscribers can view their own subscription"
ON public.email_subscriptions
FOR SELECT
TO anon, authenticated
USING (true);

-- Create policies for contact submissions (public insert)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policies for resource downloads (public insert)
CREATE POLICY "Anyone can request resource downloads"
ON public.resource_downloads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_email_subscriptions_email ON public.email_subscriptions(email);
CREATE INDEX idx_contact_submissions_submitted_at ON public.contact_submissions(submitted_at DESC);
CREATE INDEX idx_resource_downloads_email ON public.resource_downloads(email);