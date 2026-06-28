import BasicInfo from "./BasicInfo";
import Story from "./Story";
import RecipeInfo from "./RecipeInfo";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import ImageUpload from "./ImageUpload";

export default function UploadForm() {
  return (
    <form className="space-y-12">
      <BasicInfo />
      <Story />
      <RecipeInfo />
     <Ingredients />
        <Steps />
        <ImageUpload />

      <button
        type="submit"
        className="w-full rounded-xl bg-[#D97757] py-4 font-semibold text-white transition hover:bg-[#c76648]"
      >
        Continue
      </button>
    </form>
  );
}