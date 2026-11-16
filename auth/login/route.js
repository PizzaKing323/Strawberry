
import { NextResponse } from "next/server";
import { createClient } from "../../../server";

export async function GET(request) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `${new URL(request.url).origin}/auth/callback`,
    },
  });

  if (error || !data?.url) {
    return NextResponse.redirect(
      new URL("/?error=discord_login_failed", request.url)
    );
  }

  return NextResponse.redirect(data.url);
}
