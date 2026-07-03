export default function Sidebar() {
  return (
    <aside className="sticky top-24 w-72 rounded-3xl border border-[#E8DDD3] bg-white p-8 shadow-sm">
    <div className="flex flex-col items-center">
  <div className="h-28 w-28 rounded-full bg-gray-200"></div>

  <h2 className="mt-5 text-2xl font-semibold text-[#3D2B1F]">
    Vishakha Batham
  </h2>

  <p className="mt-1 text-sm text-[#7B6A58]">
    vishakha@gmail.com
  </p>
</div>
      <div className="my-6 border-t"></div>

      <nav className="space-y-2">
        <button className="w-full rounded-lg bg-[#C17F5F] px-4 py-3 text-left text-white">
          My Recipes
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left hover:bg-[#F8F2EC]">
          Saved Recipes
        </button>
      </nav>
    </aside>
  );
}