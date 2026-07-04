"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type ProfileFormProps = {
  user: any;
  profile: any;
};

export default function ProfileForm({
  user,
  profile,
}: ProfileFormProps) {
  const supabase = createClient();

  const [fullName, setFullName] = useState(profile?.full_name ?? "");
  const [username, setUsername] = useState(profile?.username ?? "");
  const [bio, setBio] = useState(profile?.bio ?? "");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

 async function handleSave() {
  try {
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase
      .from("profiles")
      .upsert(
        {
          id: user.id,
          full_name: fullName,
          username,
          bio,
        },
        {
          onConflict: "id",
        }
      )
      .select();

    console.log("User ID:", user.id);
    console.log("Updated rows:", data);
    console.log("Error:", error);

    if (error) throw error;

    setMessage("✅ Profile updated successfully!");
  } catch (error: any) {
    console.error(error);
    setMessage(error.message);
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="mb-8 text-3xl font-bold text-[#3D2B1F]">
        My Profile
      </h1>

      <div className="space-y-6 rounded-xl bg-white p-6 shadow-md">
        <div>
          <label className="text-sm text-gray-500">Email</label>
          <p className="font-semibold">{user.email}</p>
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Full Name
          </label>

          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-[#C17F5F] focus:outline-none"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Username
          </label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-[#C17F5F] focus:outline-none"
            placeholder="Choose a username"
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Bio
          </label>

          <textarea
            rows={5}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="mt-2 w-full rounded-lg border border-gray-300 p-3 focus:border-[#C17F5F] focus:outline-none"
            placeholder="Tell everyone about yourself..."
          />
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          className="rounded-lg bg-[#C17F5F] px-6 py-3 font-medium text-white transition hover:bg-[#A96746] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>

        {message && (
          <p
            className={`font-medium ${
              message.includes("success")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}