import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import RecipePage from "@/components/recipe/RecipePage";
import { getRecipeById } from "@/actions/recipe";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const recipe = await getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <RecipePage recipe={recipe} />
      <Footer />
    </>
  );
}