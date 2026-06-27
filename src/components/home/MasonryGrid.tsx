import RecipeCard from "./RecipeCard";
import MemoryCard from "./MemoryCard";
import PhotoCard from "./PhotoCard";

export default function MasonryGrid() {
  return (
    <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">

      <RecipeCard
        image="/recipes/apple-pie.jpg"
        title="Grandma Rose's Apple Tart"
        story="Every Sunday afternoon, Grandma Rose would roll out the dough while I sat watching. Every bite reminds me of home."
        author="Priya Mehta"
        avatar="PM"
        tags={["Dessert", "Italian"]}
        generation="3RD GENERATION"
        likes="1.2k"
        comments="128"
        time="45 mins"
      />

      <MemoryCard />

      <RecipeCard
        image="/recipes/chai.jpg"
        title="Morning Chai"
        story="No morning ever started without grandma's chai and conversations around the kitchen."
        author="Ananya"
        avatar="A"
        tags={["Tea", "Indian"]}
        generation="2ND GENERATION"
        likes="856"
        comments="61"
        time="20 mins"
      />

      <PhotoCard />

      <RecipeCard
        image="/recipes/paratha.jpg"
        title="Stuffed Aloo Paratha"
        story="Weekend breakfasts always meant hot parathas with butter melting on top."
        author="Riya"
        avatar="R"
        tags={["Breakfast", "Indian"]}
        generation="4TH GENERATION"
        likes="2.3k"
        comments="215"
        time="35 mins"
      />

      <RecipeCard
        image="/recipes/dal.jpg"
        title="Grandma's Dal"
        story="Simple ingredients, slow cooking, and lots of love made this the comfort food everyone wanted."
        author="Neha"
        avatar="N"
        tags={["Dinner", "Indian"]}
        generation="5TH GENERATION"
        likes="932"
        comments="74"
        time="50 mins"
      />

      <RecipeCard
        image="/recipes/pickle.jpg"
        title="Mango Pickle"
        story="Every summer our terrace was filled with jars drying in the sun."
        author="Kiran"
        avatar="K"
        tags={["Pickle", "Traditional"]}
        generation="6TH GENERATION"
        likes="1.5k"
        comments="119"
        time="3 Days"
      />

    </div>
  );
}