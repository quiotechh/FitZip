"use client";

import { useState } from "react";

const YOUTUBE_REVIEWS = [
  {
    name: "Marcus T.",
    handle: "@marcust_fit",
    rating: 5,
    text: "Been following FitZip for 6 months. My posture completely changed from just watching and applying what he teaches. No gym, no excuses.",
    tag: "228K Community",
  },
  {
    name: "Priya S.",
    handle: "@priyastrong",
    rating: 5,
    text: "The horse stance video alone fixed my knee pain I had for 3 years. Doctors couldn't help, this guy did it in 8 weeks.",
    tag: "228K Community",
  },
  {
    name: "Jake R.",
    handle: "@jakeruns",
    rating: 5,
    text: "Every video is under 10 minutes and packed. No fluff, no ads every 30 seconds. Just real movement knowledge.",
    tag: "228K Community",
  },
  {
    name: "Anya K.",
    handle: "@anyak_health",
    rating: 5,
    text: "I share his farmer's walk video with every single person who complains about back pain. It works. Period.",
    tag: "228K Community",
  },
  {
    name: "David L.",
    handle: "@davidlfit",
    rating: 5,
    text: "Finally a fitness channel that isn't trying to sell me supplements every 2 minutes. Just solid, science-backed content.",
    tag: "228K Community",
  },
  {
    name: "Sofia M.",
    handle: "@sofiamoves",
    rating: 5,
    text: "Did the 30-day bodyweight challenge and lost 6kg without stepping into a gym once. The programming is genius.",
    tag: "228K Community",
  },
];

const PRODUCT_REVIEWS = [
  {
    name: "Tom B.",
    handle: "@tombfit",
    rating: 5,
    text: "The Workout Program is the most structured calisthenics guide I've ever followed. Week 4 and I'm already doing things I thought were impossible.",
    tag: "Workout Program",
  },
  {
    name: "Rachel W.",
    handle: "@rachelwellness",
    rating: 5,
    text: "Worth every cent. The Nutrition Guide finally explained macros in a way that actually made sense for someone training at home.",
    tag: "Nutrition Guide",
  },
  {
    name: "Chris M.",
    handle: "@chrism_strong",
    rating: 5,
    text: "Bought both programs. The way they complement each other is insane — training + nutrition finally working together.",
    tag: "Workout Program",
  },
  {
    name: "Lena P.",
    handle: "@lenapmoves",
    rating: 5,
    text: "I've bought 4 fitness ebooks in the past. This Workout Program is the only one I actually finished and re-read.",
    tag: "Workout Program",
  },
  {
    name: "Nico F.",
    handle: "@nicofstrong",
    rating: 5,
    text: "The meal plans in the Nutrition Guide are realistic — not rabbit food. I'm eating well and building muscle simultaneously.",
    tag: "Nutrition Guide",
  },
  {
    name: "Hana J.",
    handle: "@hanaj_fit",
    rating: 5,
    text: "Bought the Workout Program skeptically. Three weeks in and my whole family noticed the change. Nothing else to say.",
    tag: "Workout Program",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className="w-3 h-3 md:w-4 md:h-4"
          fill={s <= rating ? "#CC0000" : "#e5e7eb"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState<"youtube" | "products">("youtube");

  const reviews = active === "youtube" ? YOUTUBE_REVIEWS : PRODUCT_REVIEWS;

  return (
    <section className="w-full bg-white pt-6 pb-16 md:pt-8 md:pb-24">
      {/* Heading */}
      <div className="text-center px-4 mb-10 md:mb-14">
        <h2
          className="text-3xl md:text-5xl font-black uppercase text-black tracking-tight"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          What People Say
        </h2>
        <p
          className="text-black/50 text-sm md:text-base mt-2"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Real results. Real people.
        </p>

        {/* Toggle */}
        <div className="inline-flex mt-8 border-[3px] border-black rounded-full overflow-hidden"
          style={{ boxShadow: "4px 4px 0px #000000" }}
        >
          <button
            onClick={() => setActive("youtube")}
            className="px-4 py-2 md:px-8 md:py-3 text-[10px] md:text-sm font-black uppercase tracking-wider md:tracking-widest transition-colors duration-150 whitespace-nowrap"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              background: active === "youtube" ? "#0A0A0A" : "#ffffff",
              color: active === "youtube" ? "#ffffff" : "#0A0A0A",
            }}
          >
            ⭐ YouTube Reviews
          </button>
          <button
            onClick={() => setActive("products")}
            className="px-4 py-2 md:px-8 md:py-3 text-[10px] md:text-sm font-black uppercase tracking-wider md:tracking-widest transition-colors duration-150 border-l-[3px] border-black whitespace-nowrap"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              background: active === "products" ? "#0A0A0A" : "#ffffff",
              color: active === "products" ? "#ffffff" : "#0A0A0A",
            }}
          >
            ⭐ Product Reviews
          </button>
        </div>
      </div>

      {/* Cards grid — 2 cols on mobile, 3 on desktop */}
      <div className="px-3 md:px-8 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {reviews.map((r, i) => (
          <div
            key={`${active}-${i}`}
            className="flex flex-col bg-white border-[3px] border-black rounded-xl md:rounded-2xl p-3 md:p-6"
            style={{ boxShadow: "4px 4px 0px #000000" }}
          >
            {/* Stars + tag */}
            <div className="flex flex-wrap items-start justify-between gap-1.5 mb-2 md:mb-3">
              <Stars rating={r.rating} />
              <span
                className="text-[8px] md:text-xs font-black uppercase tracking-wider text-white bg-black rounded-full px-2 py-0.5 md:px-2.5 md:py-1 leading-tight"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {r.tag}
              </span>
            </div>

            {/* Review text */}
            <p
              className="text-black/80 text-[11px] md:text-base leading-snug md:leading-relaxed flex-1 line-clamp-4 md:line-clamp-none"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              &ldquo;{r.text}&rdquo;
            </p>

            {/* Reviewer */}
            <div className="mt-3 pt-3 border-t-2 border-black/10 flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-black flex items-center justify-center shrink-0">
                <span
                  className="text-white text-[10px] md:text-xs font-black"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {r.name[0]}
                </span>
              </div>
              <div>
                <p
                  className="text-black font-black text-[11px] md:text-sm leading-tight"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {r.name}
                </p>
                <p
                  className="text-black/40 text-[10px] md:text-xs"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {r.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
