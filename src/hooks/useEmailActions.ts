import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useEmailActions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subscribeToNewsletter = async (email: string, name?: string, source?: string) => {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('newsletter-signup', {
        body: { email, name, source }
      });

      if (error) throw error;

      // Send welcome email automatically
      await supabase.functions.invoke('welcome-email', {
        body: { email, name, source }
      });
      
      console.log('Newsletter subscription successful');
      return { success: true };
    } catch (error: any) {
      console.error('Newsletter signup error:', error);
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

      console.log('Contact form submitted successfully');
      return { success: true };
    } catch (error: any) {
      console.error('Contact form error:', error);
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

      console.log('Free resource requested successfully');
      return { success: true };
    } catch (error: any) {
      console.error('Free resource error:', error);
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