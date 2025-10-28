import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type ChatMessage = { role: "user" | "assistant" | "system"; content: string };

serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST")
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const { messages = [] }: { messages: ChatMessage[] } = await req.json();
    const system: ChatMessage = {
      role: "system",
      content:
        "You are Dina's website assistant. Be concise, friendly, and helpful. You can guide users to sections: Books, About, Author Visits, Free Resources, and Contact. If asked how to buy, provide the 'Where to Buy' details and links when available.",
    };

    const apiKey = Deno.env.get("OPENAI_API_KEY");
    if (!apiKey) {
      // Fallback echo if key not set
      const last = messages[messages.length - 1]?.content || "";
      return new Response(
        JSON.stringify({ message: `Thanks for your message: "${last}". I currently can't reach AI, but I can still help: try the Books, Author Visits, or Contact sections.` }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [system, ...messages],
        temperature: 0.4,
      }),
    });

    const json = await response.json();
    const message = json?.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";

    return new Response(JSON.stringify({ message }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("ai-assistant error", e);
    return new Response(JSON.stringify({ error: "Failed" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});








