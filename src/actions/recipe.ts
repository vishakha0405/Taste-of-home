import { supabase } from "@/lib/supabase";
import { Recipe } from "@/types/recipe";

export async function uploadRecipe(formData: any) {
  try {
    // Upload image
    const file = formData.image;

    console.log("File:", file);
    console.log("File name:", file?.name);

    if (!file) {
      throw new Error("No image selected");
    }

    const fileName = `${Date.now()}-${file.name}`;

    const { data, error: uploadError } = await supabase.storage
      .from("recipes")
      .upload(fileName, file);

    console.log("UPLOAD DATA:", data);
    console.log("UPLOAD ERROR:", uploadError);

    if (uploadError) {
      throw uploadError;
    }

    // Get image URL
    const { data: imageData } = supabase.storage
      .from("recipes")
      .getPublicUrl(fileName);

    const image_url = imageData.publicUrl;

    // Save recipe
    const { error } = await supabase.from("recipes").insert({
      recipe_name: formData.recipe_name,
      author_name: formData.author_name,
      recipe_owner: formData.recipe_owner,
      generation: formData.generation,
      city: formData.city,
      story: formData.story,
      prep_time: formData.prep_time,
      cook_time: formData.cook_time,
      serving: formData.servings,
      difficulty: formData.difficulty,
      category: formData.category,
      diet: formData.diet,
      ingredients: formData.ingredients.join("\n"),
      steps: formData.steps.join("\n"),
      image_url,
    });

    if (error) {
      throw error;
    }

    console.log("Recipe uploaded successfully!");

    return {
      success: true,
      message: "Recipe shared successfully ❤️",
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message: "Something went wrong!",
      
    };
  }
}

export async function getRecipeById(
  id: string
): Promise<Recipe | null> {
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

export async function getMoreRecipes(currentRecipeId: string) {
  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .neq("id", currentRecipeId)
    .limit(4);

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}