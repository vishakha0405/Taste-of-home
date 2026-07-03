"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import AuthButton from "./AuthButton";
import Link from "next/link";
import { User } from "lucide-react";

type User = {
  email?: string;
};

export default function UserMenu() {
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

   const handleLogout = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    window.location.reload();
  };

  // Not logged in
  if (!user) {
    return <AuthButton />;
  }

  // Logged in
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C17F5F] font-semibold text-white transition hover:bg-[#B36E4C]"
      >
        {user.email?.charAt(0).toUpperCase()}
      </button>

      {isOpen && (
  <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-[#E8DDD3] bg-white shadow-xl">
    <div className="border-b border-[#F1E6DB] p-4">
      <div className="text-sm font-semibold text-[#3D2B1F]">
        {user.email}
      </div>
    </div>

    <div className="p-3 space-y-2">
      <Link
        href="/profile"
        className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-[#F8F2EC]"
      >
        <User className="h-5 w-5 text-[#5B3A29]" />
        <span>Profile</span>
      </Link>

      <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 hover:bg-[#FAF6F0]">
        🍲 My Recipes
      </button>

      <button
        onClick={handleLogout}
        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-600 hover:bg-red-50"
      >
        🚪 Logout
      </button>
    </div>
  </div>
)}
  
    </div>
  );
}