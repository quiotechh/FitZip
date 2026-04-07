"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

// UI-only fields not stored in DB
const PRODUCT_UI: Record<string, { tag: string; tagColor: string; originalPrice: number; rating: number; reviews: number; features: string[] }> = {
  workout: {
    tag: "BEST SELLER",
    tagColor: "bg-black text-white",
    originalPrice: 47,
    rating: 4.8,
    reviews: 124,
    features: ["30-Day Plan", "No Equipment", "Joint-Friendly", "PDF Instant Download"],
  },
  nutrition: {
    tag: "NEW",
    tagColor: "bg-[#CC0000] text-white",
    originalPrice: 39.99,
    rating: 4.7,
    reviews: 89,
    features: ["Meal Plans Included", "Shopping Lists", "Macro Tracking", "PDF Instant Download"],
  },
};

const FILTERS = ["ALL", "WORKOUT", "NUTRITION"] as const;
type Filter = (typeof FILTERS)[number];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className="w-3.5 h-3.5" fill={s <= Math.round(rating) ? "#CC0000" : "#e5e7eb"} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductsClient({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Filter>("ALL");

  const filtered = products.filter(
    (p) => active === "ALL" || p.category.toUpperCase() === active
  );

  return (
    <>
      {/* ── FILTER TABS ── */}
      <section className="w-full bg-white border-b-4 border-black sticky top-0 md:top-28 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 py-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 md:px-6 py-2 text-[11px] md:text-xs font-black uppercase tracking-widest rounded-full border-2 transition-all duration-200 ${
                  active === f
                    ? "bg-[#CC0000] text-white border-[#CC0000]"
                    : "bg-white text-black border-black/20 hover:border-black"
                }`}
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {f}
              </button>
            ))}
          </div>
          <p
            className="text-black/30 text-[11px] font-black uppercase tracking-widest hidden md:block"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            {filtered.length} Product{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section className="w-full bg-white py-8 md:py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:h-[calc(100vh-200px)]">
          {filtered.map((product) => {
            const ui = PRODUCT_UI[product.category] ?? PRODUCT_UI.workout;
            return (
              <Link
                key={product._id}
                href={`/products/${product.category}`}
                className="group flex flex-col bg-white border-[3px] border-black rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 md:h-full"
                style={{ boxShadow: "8px 8px 0px #000000" }}
              >
                {/* Image */}
                <div className="relative h-52 md:flex-1 bg-[#f5f5f5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute top-3 left-3 ${ui.tagColor} text-[10px] font-black uppercase tracking-widest px-2.5 py-1 border-2 border-black`}
                    style={{ fontFamily: "var(--font-montserrat)", boxShadow: "2px 2px 0px #000000" }}
                  >
                    {ui.tag}
                  </span>
                  <span
                    className="absolute top-3 right-3 bg-[#CC0000] text-white text-[10px] font-black uppercase tracking-wide px-2.5 py-1 border-2 border-black"
                    style={{ fontFamily: "var(--font-montserrat)", boxShadow: "2px 2px 0px #000000" }}
                  >
                    {Math.round((1 - product.price / ui.originalPrice) * 100)}% OFF
                  </span>
                </div>

                {/* Info */}
                <div className="p-4 md:p-5 border-t-[3px] border-black flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className="text-[10px] font-black uppercase tracking-widest text-[#CC0000] mb-0.5"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {product.category} Program
                      </p>
                      <h2
                        className="text-lg md:text-xl font-black uppercase leading-tight text-black"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {product.name}
                      </h2>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      <Stars rating={ui.rating} />
                      <span className="text-[10px] text-black/50 mt-0.5" style={{ fontFamily: "var(--font-montserrat)" }}>
                        ({ui.reviews})
                      </span>
                    </div>
                  </div>

                  <p className="text-black/60 text-xs leading-relaxed" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {ui.features.map((f) => (
                      <span
                        key={f}
                        className="text-[9px] font-black uppercase tracking-wider bg-black/5 border border-black/10 px-2 py-0.5 text-black/50"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t-2 border-black/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-black" style={{ fontFamily: "var(--font-poppins)" }}>
                        ${product.price}
                      </span>
                      <span className="text-xs text-black/40 line-through" style={{ fontFamily: "var(--font-montserrat)" }}>
                        ${ui.originalPrice}
                      </span>
                    </div>
                    <span
                      className="bg-[#CC0000] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 border-2 border-black transition-all duration-200 group-hover:bg-black"
                      style={{ fontFamily: "var(--font-montserrat)", boxShadow: "3px 3px 0px #000000" }}
                    >
                      View Program →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
