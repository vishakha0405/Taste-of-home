"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  uploadRecipe,
  updateRecipe,
} from "@/actions/recipe";

import BasicInfo from "./BasicInfo";
import Story from "./Story";
import RecipeInfo from "./RecipeInfo";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import ImageUpload from "./ImageUpload";

type UploadFormProps = {
  recipe?: any;
  recipeId?: string;
};

export default function UploadForm({
  recipe,
  recipeId,
}: UploadFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
  recipe_name: recipe?.recipe_name ?? "",
  author_name: recipe?.author_name ?? "",
  recipe_owner: recipe?.recipe_owner ?? "",
  generation: recipe?.generation ?? "",
  city: recipe?.city ?? "",
  story: recipe?.story ?? "",
  prep_time: recipe?.prep_time ?? "",
  cook_time: recipe?.cook_time ?? "",
  servings: recipe?.servings ?? "",
  difficulty: recipe?.difficulty ?? "",
  category: recipe?.category ?? "",
  diet: recipe?.diet ?? "",
  ingredients: recipe?.ingredients ?? [""],
  steps: recipe?.steps ?? [""],
  image: null as File | null,
});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Image is required
    if (!recipe && !formData.image) {
  toast.error("Please upload a recipe cover image.");
  return;
}

    setLoading(true);

    try {
      let result;

if (recipeId) {
  console.log("Updating recipe:", recipeId);
  result = await updateRecipe(recipeId, formData);
} else {
  console.log("Uploading new recipe");
  result = await uploadRecipe(formData);
}

console.log("Result:", result);

      if (result.success) {
        toast.success(result.message);
        if (recipeId) {
  router.push(`/recipe/${recipeId}`);
} else {
  router.push("/community");
}
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      <BasicInfo
        formData={formData}
        setFormData={setFormData}
      />

      <Story
        formData={formData}
        setFormData={setFormData}
      />

      <RecipeInfo
        formData={formData}
        setFormData={setFormData}
      />

      <Ingredients
        formData={formData}
        setFormData={setFormData}
      />

      <Steps
        formData={formData}
        setFormData={setFormData}
      />

      <ImageUpload
  formData={formData}
  setFormData={setFormData}
  currentImage={recipe?.image_url}
/>

      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#D97757] py-4 font-semibold text-white transition hover:bg-[#c76648] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
  ? recipe
    ? "Updating..."
    : "Sharing Recipe..."
  : recipe
  ? "Update Recipe ❤️"
  : "Share Recipe ❤️"}
        </button>
      </div>
    </form>
  );
}