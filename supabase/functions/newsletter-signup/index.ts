import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsletterSignupRequest {
  email: string;
  name?: string;
  source?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { email, name, source }: NewsletterSignupRequest = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Insert email subscription
    const { data, error } = await supabase
      .from('email_subscriptions')
      .insert([
        {
          email: email.toLowerCase(),
          name,
          source: source || 'website',
        }
      ])
      .select()
      .single();

    if (error) {
      // If duplicate email, return success anyway (don't expose if email exists)
      if (error.code === '23505') {
        console.log('Duplicate email signup attempt:', email);
        return new Response(JSON.stringify({ 
          success: true, 
          message: 'Thank you for subscribing!' 
        }), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      console.error('Newsletter signup error:', error);
      return new Response(JSON.stringify({ error: 'Failed to subscribe' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('New newsletter subscription:', data);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Newsletter signup error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
};

serve(handler);