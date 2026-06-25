export default function UploadPage() {
  return (
    <main className="min-h-screen bg-[#FFF8F0] py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-bold text-center text-[#4A3428] mb-3">
          Share Your Family Recipe ❤️
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Upload your mom's or grandma's special recipe and preserve it forever.
        </p>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Recipe Name"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-xl p-4"
          />

          <textarea
            placeholder="Share the memory behind this recipe..."
            rows={5}
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Ingredients (comma separated)"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="text"
            placeholder="Tags (Festival, Breakfast, Punjabi...)"
            className="w-full border rounded-xl p-4"
          />

          <input
            type="file"
            className="w-full border rounded-xl p-4"
          />

          <button
            className="w-full bg-[#D97757] text-white py-4 rounded-xl font-semibold hover:bg-[#c76648] transition"
          >
            Share Recipe
          </button>
        </form>
      </div>
    </main>
  );
}