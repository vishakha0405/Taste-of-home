export interface RecipeFormData {
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
}