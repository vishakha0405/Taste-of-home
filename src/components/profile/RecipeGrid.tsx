import EmptyState from "./EmptyState";

type RecipeGridProps = {
  activeTab: "recipes" | "saved";
};

export default function RecipeGrid({
  activeTab,
}: RecipeGridProps) {
  return <EmptyState activeTab={activeTab} />;
}