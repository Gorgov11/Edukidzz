import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.1";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ResourceRequest {
  email: string;
  resourceName: string;
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

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    const { email, resourceName }: ResourceRequest = await req.json();

    if (!email || !resourceName) {
      return new Response(JSON.stringify({ error: 'Email and resource name are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Store download request
    const { error: dbError } = await supabase
      .from('resource_downloads')
      .insert([
        {
          email: email.toLowerCase(),
          resource_name: resourceName,
          email_sent: true
        }
      ]);

    if (dbError) {
      console.error('Database error:', dbError);
    }

    // Also add to newsletter if not already subscribed
    await supabase
      .from('email_subscriptions')
      .insert([
        {
          email: email.toLowerCase(),
          source: 'free_resources',
        }
      ]);

    // Map resource names to download links (you'll need to upload these PDFs)
    const resourceLinks: Record<string, string> = {
      'Early Phonics Fun Pack': 'https://your-domain.com/resources/phonics-pack.pdf',
      'STEAM Learning Activities': 'https://your-domain.com/resources/steam-activities.pdf',
      'Sensory Play Ideas': 'https://your-domain.com/resources/sensory-play.pdf',
      'Creative Writing Prompts': 'https://your-domain.com/resources/writing-prompts.pdf',
      'Storytelling Activities': 'https://your-domain.com/resources/storytelling.pdf',
    };

    const downloadLink = resourceLinks[resourceName] || '';

    // Send email with resource
    const emailResponse = await resend.emails.send({
      from: "Dina O. Nasr <noreply@resend.dev>",
      to: [email],
      subject: `Your Free Resource: ${resourceName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Your Free Resource is Here! 🎉</h2>
          <p>Thank you for downloading: <strong>${resourceName}</strong></p>
          
          ${downloadLink ? `
            <div style="text-align: center; margin: 30px 0;">
              <a href="${downloadLink}" 
                 style="background: #4F46E5; color: white; padding: 15px 30px; 
                        text-decoration: none; border-radius: 8px; display: inline-block;">
                Download Your Resource
              </a>
            </div>
          ` : `
            <p>Your resource will be attached to this email or available for download shortly.</p>
          `}
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>More Free Resources Available:</h3>
            <ul>
              <li>Early Phonics Fun Pack</li>
              <li>STEAM Learning Activities</li>
              <li>Sensory Play Ideas</li>
              <li>Creative Writing Prompts</li>
              <li>Storytelling Activities</li>
            </ul>
            <p><a href="https://your-website.com">Visit our website</a> to download more!</p>
          </div>
          
          <p>Follow me for more educational content:</p>
          <p>
            📸 <a href="https://instagram.com/dinaauthor">Instagram</a> | 
            📘 <a href="https://facebook.com/dinaauthor">Facebook</a> | 
            🎵 <a href="https://tiktok.com/@dinaauthor">TikTok</a>
          </p>
          
          <p>Happy learning!<br><strong>Dina O. Nasr</strong></p>
        </div>
      `,
    });

    console.log('Free resource email sent:', { email, resourceName, emailResponse });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Resource sent! Check your email for the download link.' 
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Free resources error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send resource' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
};

serve(handler);