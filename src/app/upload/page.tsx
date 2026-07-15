import { redirect } from "next/navigation";

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import UploadForm from "@/components/upload/UploadForm";
import { createClient } from "@/lib/supabase/server";

export default async function UploadPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFF8F0] py-20 px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="mb-3 text-center text-4xl font-bold text-[#4A3428]">
            Share Your Family Recipe ❤️
          </h1>

          <p className="mb-10 text-center text-gray-600">
            Upload your mom&apos;s or grandma&apos;s special recipe and preserve it forever.
          </p>

          <UploadForm />
        </div>
      </main>

      <Footer />
    </>
  );
}