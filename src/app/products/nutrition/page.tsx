import ProductDetail, { ProductData } from "@/components/product-detail";

const nutritionProduct: ProductData = {
  slug: "nutrition",
  name: "Reset Your Plate",
  subtitle: "Nutrition Guide",
  tag: "NEW",
  tagColor: "bg-[#CC0000] text-white",
  price: 24.99,
  originalPrice: 39.99,
  image: "/ebooks-cover/reset-your-body-nutriton-guide.png",
  headline:
    "You don't need to count every calorie or give up the food you love. You just need a simple system that works with your life — not against it. Reset Your Plate gives you exactly that.",
  bullets: [
    "🥗 Eat real food and still hit your goals — no starving required.",
    "⚡ Fuel your workouts and recover faster with the right meals.",
    "📋 Know exactly what to buy and what to cook every week.",
    "🔥 Lose fat while keeping your muscle — the sustainable way.",
    "🧠 Finally understand what your body actually needs to thrive.",
  ],
  whatYouGet: [
    {
      title: "The Deep Green Nutrition System",
      description:
        "A complete framework to build your meals around whole, nutrient-dense foods that support fat loss and muscle building — without obsessing over macros.",
    },
    {
      title: "Done-For-You Meal Plans",
      description:
        "Weekly meal plans that take the guesswork out. Know exactly what to eat for breakfast, lunch, dinner, and snacks — every single day.",
    },
    {
      title: "Shopping Lists Included",
      description:
        "Print-ready grocery lists for each week so you spend less time thinking and more time cooking simple, effective meals.",
    },
    {
      title: "Macro Tracking Guide",
      description:
        "A simple approach to tracking protein, carbs, and fats — so you can stay on track without becoming a calorie-counting robot.",
    },
  ],
  faqs: [
    {
      q: "Do I need to count calories?",
      a: "No. The system is built around food quality and portion awareness — not obsessive tracking.",
    },
    {
      q: "Is this for weight loss or muscle gain?",
      a: "Both. The framework is flexible enough to support fat loss, muscle building, or maintenance — depending on your goal.",
    },
    {
      q: "How complex are the recipes?",
      a: "Very simple. These are real meals for real people with real schedules. Most take under 20 minutes.",
    },
    {
      q: "Do I need to buy expensive supplements?",
      a: "No. This guide is built around whole foods. Supplements are optional and not required to see results.",
    },
    {
      q: "Can I combine this with the Workout Program?",
      a: "Absolutely — it's designed to pair with Reset Your Body. Nutrition + movement = the complete system.",
    },
  ],
  reviews: [
    { name: "Emma L.", stars: 5, text: "Lost 8 lbs in the first month without feeling deprived once. This guide is incredible." },
    { name: "Carlos M.", stars: 5, text: "The shopping lists alone are worth it. No more wasted groceries or guessing." },
    { name: "Priya S.", stars: 5, text: "Simple, clean, effective. Finally a nutrition guide that doesn't make me feel overwhelmed." },
    { name: "Tom H.", stars: 5, text: "Combined this with the workout program and the results have been crazy." },
    { name: "Jessica F.", stars: 5, text: "I've tried every diet. This is the first thing that actually stuck." },
    { name: "Ryan B.", stars: 5, text: "Meal plans are so easy to follow. My whole family is eating better now." },
  ],
  recommended: {
    slug: "workout",
    name: "Reset Your Body",
    subtitle: "Workout Program",
    price: 27,
    originalPrice: 47,
    image: "/ebooks-cover/reset-your-body-workout-guide.png",
  },
};

export default function NutritionPage() {
  return <ProductDetail product={nutritionProduct} />;
}
