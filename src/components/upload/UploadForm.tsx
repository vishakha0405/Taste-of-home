"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { uploadRecipe } from "@/actions/recipe";

import BasicInfo from "./BasicInfo";
import Story from "./Story";
import RecipeInfo from "./RecipeInfo";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import ImageUpload from "./ImageUpload";

export default function UploadForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    recipe_name: "",
    author_name: "",
    recipe_owner: "",
    generation: "",
    city: "",
    story: "",
    prep_time: "",
    cook_time: "",
    servings: "",
    difficulty: "",
    category: "",
    diet: "",
    ingredients: [""],
    steps: [""],
    image: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await uploadRecipe(formData);

      if (result.success) {
        toast.success(result.message);

        router.push("/community");
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
      />

      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#D97757] py-4 font-semibold text-white transition hover:bg-[#c76648] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sharing Recipe..." : "Share Recipe ❤️"}
        </button>
      </div>
    </form>
  );
}