import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.1";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SecureDownloadRequest {
  token: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const url = new URL(req.url);
    const token = url.searchParams.get('token');

    if (!token) {
      return new Response(JSON.stringify({ error: 'Download token required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Verify download link
    const { data: downloadLink, error: linkError } = await supabase
      .from('download_links')
      .select(`
        *,
        digital_products (
          name,
          file_path,
          file_size
        )
      `)
      .eq('secure_token', token)
      .eq('is_active', true)
      .single();

    if (linkError || !downloadLink) {
      return new Response(JSON.stringify({ error: 'Invalid or expired download link' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check if link has expired
    const now = new Date();
    const expiresAt = new Date(downloadLink.expires_at);
    if (now > expiresAt) {
      return new Response(JSON.stringify({ error: 'Download link has expired' }), {
        status: 410,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check download limit
    if (downloadLink.download_count >= downloadLink.max_downloads) {
      return new Response(JSON.stringify({ error: 'Download limit exceeded' }), {
        status: 429,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Update download count
    await supabase
      .from('download_links')
      .update({ download_count: downloadLink.download_count + 1 })
      .eq('id', downloadLink.id);

    // In a real implementation, you would:
    // 1. Fetch the file from Supabase Storage or external storage
    // 2. Return the file content with proper headers
    
    // For now, return a success response with download info
    return new Response(JSON.stringify({
      success: true,
      product_name: downloadLink.digital_products.name,
      file_path: downloadLink.digital_products.file_path,
      message: 'File ready for download',
      downloads_remaining: downloadLink.max_downloads - downloadLink.download_count - 1
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Secure download error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process download' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
};

serve(handler);