import { signInWithGoogle } from "@/actions/auth";

export default function LoginButton() {
  return (
    <form action={signInWithGoogle}>
      <button
        type="submit"
        className="rounded-full bg-[#C17F5F] px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-[#B36E4C]"
      >
        Continue with Google
      </button>
    </form>
  );
}