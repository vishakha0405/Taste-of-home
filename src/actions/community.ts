import { supabase } from "@/lib/supabase";

export async function getCommunityRecipes() {
  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .order("created_at", { ascending: false });

  console.log("Community Data:", data);
  console.log("Community Error:", error);

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}