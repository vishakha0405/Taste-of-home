"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          Taste of Home
        </h1>

        <div className="hidden md:flex gap-8 text-white font-medium">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Memories</a>
          <a href="#">About</a>
        </div>
      </div>
    </nav>
  );
}