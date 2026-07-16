import { createClient } from "@/lib/supabase/server";

// Homepage
export async function getFeaturedRecipes() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("recipes")
    .select("id, recipe_name, image_url")
    .order("created_at", { ascending: false })
    .limit(8);

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}

// Community Page
export async function getCommunityRecipes() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("recipes")
    .select(`
      id,
      recipe_name,
      image_url,
      story,
      category,
      difficulty,
      author_name
    `)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data ?? [];
}