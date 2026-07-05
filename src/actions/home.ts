"use server";

import { createClient } from "@/lib/supabase/server";

export async function getFeaturedRecipes() {
  const supabase = await createClient();

  const { data } = await supabase
    .from("recipes")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  return data ?? [];
}