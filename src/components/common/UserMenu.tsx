"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { User, BookOpen, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import AuthButton from "./AuthButton";

type AppUser = {
  email?: string;
};

export default function UserMenu() {
  const [user, setUser] = useState<AppUser | null>(null);
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

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const supabase = createClient();

    await supabase.auth.signOut();

    window.location.href = "/";
  };

  if (!user) {
    return <AuthButton />;
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C17F5F] font-semibold text-white transition hover:bg-[#B36E4C]"
      >
        {user.email?.charAt(0).toUpperCase()}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-[#E8DDD3] bg-white shadow-xl">
          <div className="border-b border-[#F1E6DB] p-4">
            <p className="text-sm font-semibold text-[#3D2B1F]">
              {user.email}
            </p>
          </div>

          <div className="p-3 space-y-2">
            <Link
              href="/profile"
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-[#3D2B1F] transition hover:bg-[#F8F2EC]"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-5 w-5 text-[#5B3A29]" />
              <span>Profile</span>
            </Link>

            <Link
  href="/profile#my-recipes"
  className="flex items-center gap-3 rounded-lg px-4 py-3 text-[#3D2B1F] transition hover:bg-[#F8F2EC]"
  onClick={() => setIsOpen(false)}
>
  <BookOpen className="h-5 w-5 text-[#5B3A29]" />
  <span>My Recipes</span>
</Link>

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-red-600 transition hover:bg-red-50"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}