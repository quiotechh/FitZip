"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const SLIDES = [
  {
    id: 1,
    label: "PROGRAM 01",
    headline: "WORKOUT\nPROGRAM",
    productName: "FitZip Workout Program",
    tag: "BUILD STRENGTH",
    cta: "Get the Program",
    href: "/products/workout",
    accent: "#CC0000",
  },
  {
    id: 2,
    label: "PROGRAM 02",
    headline: "NUTRITION\nGUIDE",
    productName: "FitZip Nutrition Guide",
    tag: "EAT SMARTER",
    cta: "Get the Guide",
    href: "/products/nutrition",
    accent: "#CC0000",
  },
];

// Doubled for marquee loop
const TICKER = [
  "TRAIN ANYWHERE",
  "228K SUBSCRIBERS",
  "PROVEN RESULTS",
  "NO GYM NEEDED",
  "BUILD REAL STRENGTH",
  "JOINT HEALTH FOCUS",
  "FEEL STRONGER",
  "TRAIN ANYWHERE",
  "228K SUBSCRIBERS",
  "PROVEN RESULTS",
  "NO GYM NEEDED",
  "BUILD REAL STRENGTH",
  "JOINT HEALTH FOCUS",
  "FEEL STRONGER",
];

const TICKER_ICONS = [
  { icon: "✓", label: "TRAIN ANYWHERE" },
  { icon: "♥", label: "228K SUBSCRIBERS" },
  { icon: "★", label: "PROVEN RESULTS" },
  { icon: "⬤", label: "NO GYM NEEDED" },
];

// Double for seamless loop
const TICKER_DOUBLED = [...TICKER_ICONS, ...TICKER_ICONS, ...TICKER_ICONS, ...TICKER_ICONS];

export default function OurStorySection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [isPaused, next]);

  const slide = SLIDES[current];

  return (
    <>
      {/* ── Red banner ── */}
      <section className="w-full bg-[#CC0000] py-14 md:py-20 px-4 border-t-4 border-black text-center">
        <h2
          className="text-3xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-tight tracking-tight max-w-4xl mx-auto"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          We Make Fitness Easy,<br />Not Complicated.
        </h2>
        <div className="mt-8">
          <Link
            href="/about"
            className="inline-block px-7 py-3 md:px-10 md:py-4 rounded-full bg-white text-black font-black uppercase tracking-widest text-sm md:text-base border-[3px] border-black transition-all duration-200"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              boxShadow: "5px 5px 0px #000000",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "5px 5px 0px #000000";
            }}
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* ── Carousel ── */}
      <section className="w-full bg-[#0a0a0a] relative overflow-hidden" style={{ minHeight: "480px" }}>
        {/* Slide background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <p
            className="text-white/5 font-black uppercase leading-none text-center whitespace-pre-line"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: "clamp(80px, 18vw, 220px)",
              lineHeight: 0.9,
            }}
          >
            {slide.headline}
          </p>
        </div>

        {/* Slide label */}
        <div className="absolute top-6 left-6 md:top-8 md:left-8">
          <span
            className="text-white/40 text-xs md:text-sm font-black uppercase tracking-widest"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {slide.label}
          </span>
        </div>

        {/* Slide indicator dots */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2.5 h-2.5 rounded-full border-2 border-white transition-all duration-200"
              style={{ background: i === current ? "#CC0000" : "transparent" }}
            />
          ))}
        </div>

        {/* Product card — raised on mobile to avoid button collision */}
        <div className="absolute bottom-20 right-3 md:bottom-10 md:right-10">
          <div
            className="bg-white border-[3px] border-black rounded-xl md:rounded-2xl px-3 py-3 md:px-7 md:py-5
                       min-w-35 max-w-45 md:min-w-70 md:max-w-80"
            style={{ boxShadow: "4px 4px 0px #CC0000" }}
          >
            <p
              className="text-[8px] md:text-xs font-black uppercase tracking-widest text-[#CC0000] mb-0.5 md:mb-1 whitespace-nowrap"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {slide.tag}
            </p>
            <p
              className="text-black font-black uppercase text-[10px] md:text-lg leading-tight mb-2 md:mb-4 md:whitespace-nowrap"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              {slide.productName}
            </p>
            <Link
              href={slide.href}
              className="block text-center px-2 py-1.5 md:px-4 md:py-2 rounded-full bg-black text-white font-black uppercase tracking-widest text-[8px] md:text-sm border-2 border-black transition-all duration-200"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                boxShadow: "3px 3px 0px #CC0000",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "3px 3px 0px #CC0000";
              }}
            >
              {slide.cta}
            </Link>
          </div>
        </div>

        {/* Nav buttons — bottom left */}
        <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 flex items-center gap-2 md:gap-3">
          <button
            onClick={prev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-white/30 flex items-center justify-center text-white hover:border-white transition-colors duration-150"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setIsPaused((p) => !p)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-white/30 flex items-center justify-center text-white hover:border-white transition-colors duration-150"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? (
              <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            )}
          </button>
          <button
            onClick={next}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[3px] border-white/30 flex items-center justify-center text-white hover:border-white transition-colors duration-150"
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Spacer for height */}
        <div className="w-full" style={{ height: "480px" }} />
      </section>

      {/* ── Ticker bar ── */}
      <div className="bg-black border-t-4 border-[#CC0000] overflow-hidden py-3 md:py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {TICKER_DOUBLED.map((item, i) => (
            <span
              key={i}
              className="text-white font-black uppercase text-[10px] md:text-sm tracking-widest mx-6 md:mx-10 flex items-center gap-2"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              <span className="text-[#CC0000]">{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
