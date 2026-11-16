
import { NextResponse } from "next/server";
import { createClient } from "../../../server";

export async function GET(request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(
      new URL("/?error=missing_code", url.origin)
    );
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(
      new URL("/?error=auth_callback_failed", url.origin)
    );
  }

  return NextResponse.redirect(new URL("/", url.origin));
}
