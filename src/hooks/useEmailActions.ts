import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/components/GoogleAnalytics';

export const useEmailActions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const subscribeToNewsletter = async (email: string, name?: string, source?: string) => {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('newsletter-signup', {
        body: { email, name, source }
      });

      if (error) throw error;

      trackEvent('newsletter_signup', 'engagement', source);
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      return { success: true };
    } catch (error: any) {
      console.error('Newsletter signup error:', error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitContactForm = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('contact-form', {
        body: formData
      });

      if (error) throw error;

      trackEvent('contact_form_submit', 'engagement', formData.subject);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      return { success: true };
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  const requestFreeResource = async (email: string, resourceName: string) => {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('free-resources', {
        body: { email, resourceName }
      });

      if (error) throw error;

      trackEvent('resource_download', 'engagement', resourceName);
      toast({
        title: "Resource Sent!",
        description: "Check your email for the download link.",
      });
      return { success: true };
    } catch (error: any) {
      console.error('Free resource error:', error);
      toast({
        title: "Error",
        description: "Failed to send resource. Please try again.",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    subscribeToNewsletter,
    submitContactForm,
    requestFreeResource,
    isSubmitting
  };
};