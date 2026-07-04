"use server";

import { createClient } from "@/lib/supabase/server";

type RecipeForm = {
  recipe_name: string;
  author_name: string;
  recipe_owner: string;
  generation: string;
  city: string;
  story: string;
  prep_time: string;
  cook_time: string;
  servings: string;
  difficulty: string;
  category: string;
  diet: string;
  ingredients: string[];
  steps: string[];
  image: File | null;
};

export async function uploadRecipe(formData: RecipeForm) {
  const supabase = await createClient();

  // Get logged in user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  let image_url = "";

  // Upload image
  if (formData.image) {
    const fileName = `${Date.now()}-${formData.image.name}`;

    const { error: uploadError } = await supabase.storage
      .from("recipes")
      .upload(fileName, formData.image);

    if (uploadError) {
      return {
        success: false,
        message: uploadError.message,
      };
    }

    const { data } = supabase.storage
      .from("recipes")
      .getPublicUrl(fileName);

    image_url = data.publicUrl;
  }

  // Save recipe
  const { data, error } = await supabase
  .from("recipes")
  .insert({
    recipe_name: formData.recipe_name,
    author_name: formData.author_name,
    recipe_owner: formData.recipe_owner,
    generation: formData.generation,
    city: formData.city,
    story: formData.story,
    prep_time: formData.prep_time,
    cook_time: formData.cook_time,
    servings: formData.servings,
    difficulty: formData.difficulty,
    category: formData.category,
    diet: formData.diet,
    ingredients: formData.ingredients.filter((item) => item.trim() !== ""),
    steps: formData.steps.filter((item) => item.trim() !== ""),
    image_url,
    user_id: user.id,
  })
  .select();

console.log("Inserted:", JSON.stringify(data, null, 2));
console.log("Insert Error:", JSON.stringify(error, null, 2));

if (error) {
  return {
    success: false,
    message: error.message,
  };
}

  return {
    success: true,
    message: "Recipe shared successfully ❤️",
  };
}