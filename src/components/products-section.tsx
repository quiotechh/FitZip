"use client";

import Image from "next/image";
import Link from "next/link";

const PRODUCTS = [
  {
    id: 1,
    name: "FitZip Workout Program",
    subtitle: "Build Strength. No Gym Needed.",
    price: "$29.99",
    rating: 4.8,
    reviews: 124,
    image: "/ebooks-cover/reset-your-body-workout-guide.png",
    href: "/products/workout",
  },
  {
    id: 2,
    name: "FitZip Nutrition Guide",
    subtitle: "Eat Right. Feel Stronger Every Day.",
    price: "$24.99",
    rating: 4.7,
    reviews: 89,
    image: "/ebooks-cover/reset-your-body-nutriton-guide.png",
    href: "/products/nutrition",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-3.5 h-3.5 md:w-4 md:h-4"
          fill={star <= Math.round(rating) ? "#CC0000" : "#e5e7eb"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section
      className="w-full py-16 md:py-24 border-b-4 border-black"
      style={{
        background:
          "radial-gradient(ellipse at center, #e6e6e6 0%, #c2c2c2 40%, #8f8f8f 100%)",
      }}
    >
      {/* Section Heading */}
      <h2
        className="text-3xl md:text-5xl font-black uppercase text-center text-black mb-8 md:mb-14 tracking-tight px-4"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        Programs
      </h2>

      {/* Cards — horizontal scroll on mobile, side by side on desktop */}
      <div
        className="flex md:grid md:grid-cols-2 gap-5 md:gap-20 w-full max-w-7xl md:mx-auto
                   overflow-x-auto md:overflow-x-visible
                   px-4 md:px-8 pb-3 md:pb-0
                   snap-x snap-mandatory md:snap-none
                   scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {PRODUCTS.map((product) => (
          <Link
            key={product.id}
            href={product.href}
            className="group flex flex-col bg-white rounded-2xl overflow-hidden border-[3px] border-black transition-all duration-300
                       snap-center shrink-0
                       w-[72vw] min-w-65 max-w-[320px]
                       md:w-auto md:min-w-0 md:max-w-none md:flex-1 md:min-h-[75vh]"
            style={{ boxShadow: "8px 8px 0px #000000" }}
          >
            {/* Image Area */}
            <div className="relative h-72 md:h-96 bg-[#f5f5f5] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 72vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Product Info */}
            <div className="px-4 py-4 md:px-6 md:py-6 border-t-2 border-black bg-white">
              <p
                className="text-black font-black uppercase text-sm md:text-xl leading-tight tracking-tight"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {product.name}
              </p>
              <p
                className="text-black/50 text-xs md:text-sm mt-1 mb-2 md:mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {product.subtitle}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-4">
                <Stars rating={product.rating} />
                <span
                  className="text-xs md:text-sm text-black/60"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <p
                className="text-black font-black text-xl md:text-3xl"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Learn More Button */}
      <div className="flex justify-center mt-10 md:mt-14 px-4">
        <Link
          href="/products"
          className="inline-block px-6 py-2.5 md:px-10 md:py-4 rounded-full bg-red-500 text-white font-black uppercase tracking-widest text-sm md:text-lg transition-all duration-200 border-[3px] border-black"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            boxShadow: "5px 5px 0px #000000",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.boxShadow =
              "5px 5px 0px #000000";
          }}
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
