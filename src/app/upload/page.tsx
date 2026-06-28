import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import UploadForm from "@/components/upload/UploadForm";

export default function UploadPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFF8F0] py-20 px-6">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="mb-3 text-center text-4xl font-bold text-[#4A3428]">
            Share Your Family Recipe ❤️
          </h1>

          <p className="mb-10 text-center text-gray-600">
            Upload your mom's or grandma's special recipe and preserve it forever.
          </p>

          <UploadForm />
        </div>
      </main>

      <Footer />
    </>
  );
}