export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import UserCard from "@/components/profile/UserCard";
import RecipeGrid from "@/components/profile/RecipeGrid";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const { data: recipes } = await supabase
    .from("recipes")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
  <>
    <Navbar />

    <main className="mx-auto max-w-7xl px-6 py-12 space-y-10">
      <UserCard
        user={user}
        profile={profile}
      />

      <RecipeGrid
        recipes={recipes ?? []}
      />
    </main>
  </>
);
}