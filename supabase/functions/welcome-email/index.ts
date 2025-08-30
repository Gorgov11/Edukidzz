import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.1";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WelcomeEmailRequest {
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

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    const { email, name, source }: WelcomeEmailRequest = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Generate secure download links for free resources
    const { data: freeProducts, error: productsError } = await supabase
      .from('digital_products')
      .select('*')
      .eq('is_free', true)
      .eq('is_active', true);

    if (productsError) {
      console.error('Error fetching free products:', productsError);
    }

    const downloadLinks: string[] = [];

    // Create secure download links for each free product
    if (freeProducts && freeProducts.length > 0) {
      for (const product of freeProducts) {
        const token = crypto.randomUUID();
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 30); // 30 days expiry

        const { error: linkError } = await supabase
          .from('download_links')
          .insert({
            digital_product_id: product.id,
            secure_token: token,
            expires_at: expiresAt.toISOString(),
            max_downloads: 5
          });

        if (!linkError) {
          downloadLinks.push(`${Deno.env.get('SUPABASE_URL')}/functions/v1/secure-download?token=${token}`);
        }
      }
    }

    // Send welcome email with free resources
    const emailResponse = await resend.emails.send({
      from: "Dina O. Nasr <noreply@resend.dev>",
      to: [email],
      subject: "Welcome to the Edukidzz Community! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Welcome to Edukidzz! 🌟</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">Where Stories Come to Life</p>
          </div>
          
          <div style="padding: 30px;">
            <h2 style="color: #333; margin-bottom: 20px;">Hello${name ? ` ${name}` : ''}! 👋</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 25px;">
              Thank you for joining our community of parents, teachers, and little learners! I'm so excited to share this journey of wonder, creativity, and learning with you.
            </p>
            
            <div style="background: #f8f9ff; padding: 25px; border-radius: 10px; border-left: 4px solid #667eea; margin-bottom: 25px;">
              <h3 style="color: #333; margin-top: 0;">🎁 Your Free Welcome Gift!</h3>
              <p style="color: #666; margin-bottom: 15px;">As a warm welcome, here are some fantastic free resources to get you started:</p>
              <ul style="color: #666; line-height: 1.8;">
                <li>📚 Early Phonics Fun Pack</li>
                <li>🔬 STEAM Learning Activities</li>
                <li>🎨 Sensory Play Ideas</li>
                <li>✏️ Creative Writing Prompts</li>
                <li>📖 Storytelling Activity Kit</li>
              </ul>
              ${downloadLinks.length > 0 ? `
                <div style="margin-top: 20px;">
                  <a href="${downloadLinks[0]}" style="background: #667eea; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                    Download Your Free Resources
                  </a>
                </div>
              ` : ''}
            </div>
            
            <h3 style="color: #333;">What's Next? 🚀</h3>
            <div style="background: #fff7ed; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-bottom: 25px;">
              <ul style="color: #666; line-height: 1.8; margin: 0; padding-left: 20px;">
                <li><strong>Explore my books:</strong> Billy Bear's Brown Hair & Spark the Sparkly Dragon</li>
                <li><strong>Book an author visit:</strong> Perfect for schools and nurseries</li>
                <li><strong>Join Morning Play Hub:</strong> Weekly sessions for ages 2-5</li>
                <li><strong>Follow along:</strong> Get tips and activities on social media</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <h3 style="color: #333; margin-bottom: 15px;">Connect With Me 💫</h3>
              <div style="margin-bottom: 20px;">
                <a href="https://instagram.com/edukidzz" style="display: inline-block; margin: 0 10px; padding: 8px 16px; background: #E4405F; color: white; text-decoration: none; border-radius: 20px; font-size: 14px;">📸 Instagram</a>
                <a href="https://facebook.com/edukidzz" style="display: inline-block; margin: 0 10px; padding: 8px 16px; background: #1877F2; color: white; text-decoration: none; border-radius: 20px; font-size: 14px;">📘 Facebook</a>
                <a href="https://tiktok.com/@mrsdinao" style="display: inline-block; margin: 0 10px; padding: 8px 16px; background: #000000; color: white; text-decoration: none; border-radius: 20px; font-size: 14px;">🎵 TikTok</a>
              </div>
            </div>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; text-align: center; margin-top: 30px;">
              <p style="color: #0369a1; font-weight: bold; margin: 0 0 10px 0;">💌 Monthly Newsletter</p>
              <p style="color: #0284c7; margin: 0; font-size: 14px;">Expect monthly updates with new activities, reading tips, and exclusive content just for our community!</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <div style="text-align: center;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                Thank you for being part of the Edukidzz family!<br>
                <strong style="color: #333;">Dina O. Nasr</strong><br>
                <em style="color: #667eea;">Children's Author & Educator</em>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log('Welcome email sent:', { email, emailResponse });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Welcome email sent successfully!',
      download_links_created: downloadLinks.length
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Welcome email error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send welcome email' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
};

serve(handler);