import Link from "next/link";

type Props = {
  user: any;
  profile: any;
};

export default function UserCard({
  user,
  profile,
}: Props) {
  return (
    <div className="rounded-3xl border border-[#E8DDD2] bg-white p-8 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C17F5F] text-3xl font-bold text-white">
          {(profile?.full_name || user.email)
            ?.charAt(0)
            .toUpperCase()}
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#3D2B1F]">
            {profile?.full_name || "Anonymous"}
          </h2>

          <p className="mt-1 text-[#7A6A5A]">
            @{profile?.username || "username"}
          </p>

          <p className="mt-4 text-[#5B4B3F]">
            {profile?.bio || "No bio yet."}
          </p>

          <p className="mt-4 text-sm text-[#9A8B7A]">
            {user.email}
          </p>
        </div>

        <Link
          href="/profile/edit"
          className="rounded-full bg-[#C17F5F] px-6 py-3 font-medium text-white transition hover:bg-[#A96746]"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
}