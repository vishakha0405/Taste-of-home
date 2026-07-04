type EmptyStateProps = {
  activeTab: "recipes" | "saved";
};

export default function EmptyState({
  activeTab,
}: EmptyStateProps) {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center rounded-3xl border border-dashed border-[#DCCDBF] bg-white p-10 text-center">
      <div className="mb-6 text-6xl">
        {activeTab === "recipes" ? "🍲" : "❤️"}
      </div>

      <h2 className="font-[var(--font-playfair)] text-3xl text-[#3D2B1F]">
        {activeTab === "recipes"
          ? "Your kitchen is empty"
          : "No saved recipes yet"}
      </h2>

      <p className="mt-4 max-w-md text-[#7B6A58]">
        {activeTab === "recipes"
          ? "Share your first family recipe using the 'Share Recipe' button in the navigation bar."
          : "Recipes you save from the community will appear here."}
      </p>
    </div>
  );
}