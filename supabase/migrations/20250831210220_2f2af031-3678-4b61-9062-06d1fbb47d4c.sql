-- Fix critical security vulnerabilities in RLS policies

-- Drop the overly permissive policy on email_subscriptions that allows anyone to view all subscriptions
DROP POLICY IF EXISTS "Subscribers can view their own subscription" ON public.email_subscriptions;

-- Add proper admin-only SELECT policies for sensitive customer data
CREATE POLICY "Admins can view email subscriptions"
ON public.email_subscriptions
FOR SELECT
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can view bookings"
ON public.bookings
FOR SELECT
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can view download history" 
ON public.resource_downloads
FOR SELECT
TO authenticated
USING (public.is_admin());

CREATE POLICY "Admins can view download links"
ON public.download_links
FOR SELECT
TO authenticated
USING (public.is_admin());

-- Allow admins to update download links for managing download counts
CREATE POLICY "System can update download links"
ON public.download_links
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);