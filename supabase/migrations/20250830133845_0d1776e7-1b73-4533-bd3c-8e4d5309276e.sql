-- Create the update_updated_at_column function first
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Enhance existing tables and add new ones for comprehensive functionality

-- Add newsletter automation table
CREATE TABLE public.newsletter_campaigns (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  scheduled_date TIMESTAMP WITH TIME ZONE,
  sent_date TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'sent', 'cancelled')),
  recipient_count INTEGER DEFAULT 0,
  open_rate DECIMAL(5,2) DEFAULT 0,
  click_rate DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add digital products table
CREATE TABLE public.digital_products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  file_path TEXT NOT NULL,
  file_size BIGINT,
  is_free BOOLEAN DEFAULT true,
  price DECIMAL(10,2) DEFAULT 0,
  download_limit INTEGER DEFAULT 3,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add secure download links table
CREATE TABLE public.download_links (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  resource_download_id UUID REFERENCES public.resource_downloads(id) ON DELETE CASCADE,
  digital_product_id UUID REFERENCES public.digital_products(id) ON DELETE CASCADE,
  secure_token TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  download_count INTEGER DEFAULT 0,
  max_downloads INTEGER DEFAULT 3,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add booking services table
CREATE TABLE public.booking_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  duration_minutes INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  max_participants INTEGER,
  is_active BOOLEAN DEFAULT true,
  settings JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add bookings table
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_id UUID REFERENCES public.booking_services(id) ON DELETE CASCADE,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  scheduled_date DATE NOT NULL,
  scheduled_time TIME NOT NULL,
  participant_count INTEGER DEFAULT 1,
  total_amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
  stripe_session_id TEXT,
  special_requests TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default booking services
INSERT INTO public.booking_services (name, description, duration_minutes, price, max_participants) VALUES
('School Author Visit', 'Interactive storytelling session for schools with reading activities and Q&A', 60, 150.00, 30),
('Nursery Story Session', 'Age-appropriate storytelling for nursery children with props and activities', 45, 100.00, 20),
('Library Event', 'Public library storytelling event with craft activities', 90, 200.00, 25),
('Morning Play Hub Session', 'Educational play session for ages 2-5 with parent participation', 120, 75.00, 8),
('Private Group Session', 'Customized storytelling session for private groups', 60, 125.00, 15);

-- Insert default digital products
INSERT INTO public.digital_products (name, description, file_path, is_free) VALUES
('Early Phonics Fun Pack', 'Comprehensive phonics activities for early learners', 'resources/phonics-fun-pack.pdf', true),
('STEAM Learning Activities', 'Science, Technology, Engineering, Arts & Math activities', 'resources/steam-activities.pdf', true),
('Sensory Play Ideas', 'Creative sensory play activities for different age groups', 'resources/sensory-play.pdf', true),
('Creative Writing Prompts', 'Story starters and writing activities for young writers', 'resources/writing-prompts.pdf', true),
('Storytelling Activity Kit', 'Props and activities for interactive storytelling', 'resources/storytelling-kit.pdf', true),
('Billy Bear Activity Pack', 'Activities based on Billy Bear''s Brown Hair book', 'resources/billy-bear-activities.pdf', false),
('Spark Dragon Learning Pack', 'Educational activities inspired by Spark the Sparkly Dragon', 'resources/spark-dragon-activities.pdf', false);

-- Enable RLS on new tables
ALTER TABLE public.newsletter_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.digital_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.download_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booking_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access where appropriate
CREATE POLICY "Anyone can view active booking services"
ON public.booking_services
FOR SELECT
TO anon, authenticated
USING (is_active = true);

CREATE POLICY "Anyone can view active digital products"
ON public.digital_products
FOR SELECT
TO anon, authenticated
USING (is_active = true);

CREATE POLICY "Anyone can create bookings"
ON public.bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Anyone can create download links"
ON public.download_links
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Add updated_at trigger for bookings
CREATE TRIGGER update_bookings_updated_at
BEFORE UPDATE ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_download_links_token ON public.download_links(secure_token);
CREATE INDEX idx_download_links_expires ON public.download_links(expires_at);
CREATE INDEX idx_bookings_date ON public.bookings(scheduled_date);
CREATE INDEX idx_bookings_email ON public.bookings(customer_email);
CREATE INDEX idx_bookings_status ON public.bookings(status);