export default function CategoryTabs() {
  const tabs = [
    "All",
    "Recipes",
    "Memories",
    "Photos",
    "Festive",
    "Comfort Food",
  ];

  return (
    <div className="bg-[#FAF6F0]">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-6 py-3">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            className={`whitespace-nowrap rounded-full px-6 py-2.5 text-[16px] font-medium transition ${
              index === 0
                ? "bg-[#C17F5F] text-white"
                : "bg-[#EFE5D8] text-[#6B5A4A] hover:bg-[#E5D8C8]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}