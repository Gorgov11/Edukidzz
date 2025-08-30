import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.1";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
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

    const { name, email, subject, message }: ContactFormRequest = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Store submission in database
    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          subject,
          message,
        }
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(JSON.stringify({ error: 'Failed to store submission' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Send notification email to Dina
    const emailToOwner = await resend.emails.send({
      from: "Contact Form <noreply@resend.dev>",
      to: ["dina@yourauthordomain.com"], // Replace with actual email
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    });

    // Send confirmation email to user
    const confirmationEmail = await resend.emails.send({
      from: "Dina O. Nasr <noreply@resend.dev>",
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank you for your message, ${name}!</h2>
          <p>I've received your message about: <strong>${subject}</strong></p>
          <p>I'll get back to you as soon as possible, usually within 24-48 hours.</p>
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Explore my books and activities on the website</li>
            <li>Follow me on social media for updates</li>
            <li>Download free resources for your little ones</li>
          </ul>
          <p>Best regards,<br><strong>Dina O. Nasr</strong><br>Children's Author & Educator</p>
          <hr>
          <p><small>This is an automated response. Please do not reply to this email.</small></p>
        </div>
      `,
    });

    console.log('Contact form processed:', { submission: submission.id, emailToOwner, confirmationEmail });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Message sent successfully! You should receive a confirmation email shortly.' 
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process contact form' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
};

serve(handler);