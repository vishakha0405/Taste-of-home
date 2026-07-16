import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import UploadForm from "@/components/upload/UploadForm";

export default async function EditRecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  const { data: recipe } = await supabase
    .from("recipes")
    .select("*")
    .eq("id", id)
    .single();

  if (!recipe) {
    redirect("/profile");
  }

  if (recipe.user_id !== user.id) {
    redirect("/profile");
  }

  return (
    <div className="mx-auto max-w-5xl py-16">
      <h1 className="mb-8 text-4xl font-bold">
        Edit Recipe
      </h1>

      <UploadForm
  recipe={recipe}
  recipeId={recipe.id}
/>
    </div>
  );
}