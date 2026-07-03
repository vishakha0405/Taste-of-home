import Sidebar from "@/components/profile/Sidebar";
import RecipeGrid from "@/components/profile/RecipeGrid";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Page Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#3D2B1F]">
            My Kitchen
          </h1>
          <p className="mt-2 text-[#7B6A58]">
            Manage your recipes and saved collections.
          </p>
        </div>

        <div className="flex items-start gap-8">
          <Sidebar />

          <div className="flex-1">
            <RecipeGrid />
          </div>
        </div>
      </div>
    </main>
  );
}