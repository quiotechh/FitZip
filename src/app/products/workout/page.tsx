import ProductDetail, { ProductData } from "@/components/product-detail";

export default async function WorkoutPage() {
  const res = await fetch("http://localhost:3000/api/products?category=workout", {
    cache: "no-store",
  });
  const { data } = await res.json();
  const dbProduct = data[0];

  const upsell = dbProduct?.upsellProducts;
  const upsellOffer = upsell && dbProduct?.upsellPrice != null
    ? {
        slug: upsell.category as string,
        name: upsell.name as string,
        subtitle: "Nutrition Guide",
        price: dbProduct.upsellPrice as number,
        originalPrice: upsell.price as number,
        image: upsell.image as string,
      }
    : undefined;

  const product: ProductData = {
    slug: "workout",
    name: dbProduct?.name ?? "Reset Your Body",
    subtitle: "Workout Program",
    tag: "BEST SELLER",
    tagColor: "bg-black text-white",
    price: dbProduct?.price ?? 27,
    originalPrice: 47,
    image: dbProduct?.image ?? "/ebooks-cover/reset-your-body-workout-guide.png",
    upsellOffer,
    headline:
      "Weakness and daily aches aren't \"just aging.\" They're often the result of under-trained stabilizers and ignored mobility. This guide helps you fix what hurts now while building a body designed to feel strong and capable for the long run.",
    bullets: [
      "💪 Move heavy stuff without that \"one wrong move\" fear.",
      "🌅 Wake up feeling loose, solid, and ready to go.",
      "🔋 Work out better and recover faster because your body finally feels supported.",
      "🎯 Keep up with your kids or grandkids for years — not minutes.",
      "⛰️ Walk farther, climb stairs easier, and move smoother.",
    ],
    whatYouGet: [
      {
        title: "The 4-Week Foundation Plan (Your Reset Phase)",
        description:
          "A step-by-step weekly plan that rebuilds your base: mobility + stability + control. You'll know exactly what to do each day, even if you're busy.",
      },
      {
        title: "Pain-Specific Quick Fix Routines (Your \"When This Hurts\" Toolkit)",
        description:
          "Short routines for common problem areas like low back, hips, shoulders, knees, neck, and more — so you're not guessing or Googling random drills.",
      },
      {
        title: "Ongoing Routines (Your Keep-It-For-Life Plan)",
        description:
          "Simple maintenance options you can repeat after the 4 weeks so your results don't disappear the moment life gets chaotic.",
      },
      {
        title: "Printable Charts + Step-by-Step Visuals",
        description:
          "Clear instructions, quick references, and visuals that make it easy to execute — follow along without overthinking.",
      },
    ],
    faqs: [
      { q: "How long are the workouts?", a: "Sessions are 10–20 minutes. The goal is consistency and quality — not crushing yourself." },
      { q: "Do I need equipment?", a: "95% is bodyweight. Minimal equipment is helpful (like a band or pull-up bar), but the plan doesn't depend on a full gym." },
      { q: "Is this for beginners?", a: "Yes. This is built for regular people — especially if you feel stiff, weak, or \"off\" and want a clear plan." },
      { q: "What if I already lift or work out?", a: "Even better. This improves your foundation so lifting feels smoother, safer, and more effective." },
      { q: "How fast will I feel a difference?", a: "Many people notice changes in the first 1–2 weeks. Bigger changes come from finishing the full 4 weeks and then maintaining." },
      { q: "What if I'm dealing with real pain or an injury?", a: "This is not medical advice. If you have a serious injury, talk to a qualified professional first." },
    ],
    reviews: [
      { name: "Mark R.", stars: 5, text: "First week in and my back pain is already 70% gone. This is the real deal." },
      { name: "Sarah T.", stars: 5, text: "Finally a program that actually fits into my day. 15 minutes and I feel incredible." },
      { name: "James W.", stars: 5, text: "I'm 52 and I feel better than I did at 40. Wish I found this sooner." },
      { name: "Linda K.", stars: 5, text: "The visuals make it so easy to follow. No confusion, just results." },
      { name: "David M.", stars: 5, text: "Bought this for my dad. He's moving better than he has in years." },
      { name: "Amy S.", stars: 5, text: "Week 2 update — knees feel amazing. The quick fix routines are gold." },
    ],
    recommended: {
      slug: "nutrition",
      name: "Reset Your Plate",
      subtitle: "Nutrition Guide",
      price: 24.99,
      originalPrice: 39.99,
      image: "/ebooks-cover/reset-your-body-nutriton-guide.png",
    },
  };

  return <ProductDetail product={product} />;
}
