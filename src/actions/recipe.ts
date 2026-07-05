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

// ============================
// Upload Recipe
// ============================

export async function uploadRecipe(formData: RecipeForm) {
  const supabase = await createClient();

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

  const { error } = await supabase.from("recipes").insert({
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
    ingredients: formData.ingredients.filter(
      (item) => item.trim() !== ""
    ),
    steps: formData.steps.filter(
      (item) => item.trim() !== ""
    ),
    image_url,
    user_id: user.id,
  });

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

// ============================
// Get Recipe By ID
// ============================

export async function getRecipeById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

// ============================
// More Recipes
// ============================

export async function getMoreRecipes(currentRecipeId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .neq("id", currentRecipeId)
    .order("created_at", { ascending: false })
    .limit(4);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

// ============================
// Update Recipe
// ============================

export async function updateRecipe(
  id: string,
  formData: RecipeForm
) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      message: "Please login first.",
    };
  }

  // Get existing recipe
  const { data: currentRecipe, error: recipeError } =
    await supabase
      .from("recipes")
      .select("image_url, user_id")
      .eq("id", id)
      .single();

  if (recipeError || !currentRecipe) {
    return {
      success: false,
      message: "Recipe not found.",
    };
  }

  // Only owner can edit
  if (currentRecipe.user_id !== user.id) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  let image_url = currentRecipe.image_url;

  // Upload new image if selected
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

  const { error } = await supabase
    .from("recipes")
    .update({
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
      ingredients: formData.ingredients.filter(
        (item) => item.trim() !== ""
      ),
      steps: formData.steps.filter(
        (item) => item.trim() !== ""
      ),
      image_url,
    })
    .eq("id", id);

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Recipe updated successfully ❤️",
  };
}