import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    console.log("Session:", data.session);
    console.log("User:", data.user);
    console.log("Error:", error);
  }

  return NextResponse.redirect(requestUrl.origin);
}