const memories = [
  {
    text: "Mom made khichdi whenever I was sick.",
  },
  {
    text: "Grandma's kheer was the highlight of every Diwali.",
  },
  {
    text: "Sunday meant rajma chawal and family time.",
  },
];

export default function MemoryWall() {
  return (
    <section className="bg-[#F8F0E7] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#4A3428] mb-4">
          Memory Wall ❤️
        </h2>

        <p className="text-center text-gray-600 mb-16">
          Every recipe carries a memory.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
           <div
  key={index}
  className={`bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 hover:rotate-0 hover:scale-105 ${
    index === 0
      ? "-rotate-2"
      : index === 1
      ? "rotate-2"
      : "-rotate-1"
  }`}
>
  <div className="text-4xl mb-4">📌</div>

  <p className="text-lg text-[#4A3428] leading-relaxed">
    {memory.text}
  </p>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}