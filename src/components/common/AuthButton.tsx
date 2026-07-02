"use client";

import { createClient } from "@/lib/supabase/client";

export default function AuthButton() {
  const handleLogin = async () => {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    console.log("OAuth Data:", data);
    console.log("OAuth Error:", error);

    if (error) {
      console.error("Login Error:", error);
      return;
    }

    if (data?.url) {
      console.log("Redirecting to:", data.url);
      window.location.href = data.url;
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="rounded-full border border-[#E8DDD3] bg-white px-6 py-2 text-sm font-medium text-[#5A4737] transition hover:bg-[#F8F3EE]"
    >
      Login
    </button>
  );
}