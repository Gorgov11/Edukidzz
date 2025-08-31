-- Add admin-only policies to newsletter_campaigns table to fix RLS issue
CREATE POLICY "Admins can manage newsletter campaigns"
ON public.newsletter_campaigns
FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());