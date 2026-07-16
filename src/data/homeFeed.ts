type HomeFeedItem =
  | {
      id: number;
      type: "recipe";
      title: string;
      image: string;
    }
  | {
      id: number;
      type: "photo";
      image: string;
    }
  | {
      id: number;
      type: "quote";
      quote: string;
    }
  | {
      id: number;
      type: "sticky";
      text: string;
    }
  | {
      id: number;
      type: "recipe-note";
      text: string;
    }
  | {
      id: number;
      type: "handwritten";
      text: string;
    };

export const homeFeed: HomeFeedItem[] = [
  {
    id: 1,
    type: "recipe",
    title: "Grandma Rose's Apple Tart",
    image: "/recipes/apple-pie.jpg",
  },
  {
    id: 2,
    type: "quote",
    quote: "Some recipes are remembered by smell.",
  },
  {
    id: 3,
    type: "recipe",
    title: "Stuffed Aloo Paratha",
    image: "/recipes/paratha.jpg",
  },
  {
    id: 4,
    type: "sticky",
    text: "Toast cumin before adding it to the dal.",
  },
  
  {
    id: 6,
    type: "recipe-note",
    text: "Always finish with one spoon of homemade ghee.",
  },
  {
    id: 7,
    type: "recipe",
    title: "Grandma's Dal",
    image: "/recipes/dal.jpg",
  },
  {
    id: 8,
    type: "handwritten",
    text: "Every festival began in her kitchen.",
  },
  {
    id: 9,
    type: "recipe",
    title: "Morning Chai",
    image: "/recipes/chai.jpg",
  },
  {
    id: 10,
    type: "recipe",
    title: "Mango Pickle",
    image: "/recipes/pickle.jpg",
  },
];