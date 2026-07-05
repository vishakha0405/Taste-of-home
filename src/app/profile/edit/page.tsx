import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

import ProfileForm from "@/components/profile/ProfileForm";

export default async function EditProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <ProfileForm
      user={user}
      profile={profile}
    />
  );
}