export interface Recipe {
  id: string;

  recipe_name: string;
  author_name: string;
  recipe_owner: string;
  generation: string;
  city: string;

  story: string;

  prep_time: number;
  cook_time: number;
  serving: number;

  difficulty: string;
  category: string;
  diet: string;

  ingredients: string;
  steps: string;

  image_url: string;

  created_at?: string;
}