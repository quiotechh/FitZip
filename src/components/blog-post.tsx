"use client";

import Link from "next/link";
import Footer from "@/components/footer";
import type { BlogPost } from "@/lib/blog-data";

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostLayout({ post }: BlogPostPageProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="w-full bg-black">
        <div className="relative w-full flex items-center justify-center px-6 py-12 md:py-20 overflow-hidden">
          {/* Ghost watermark */}
          <p
            className="absolute inset-0 flex items-center justify-center text-white/[0.06] font-black uppercase select-none pointer-events-none leading-none text-center"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(48px, 12vw, 160px)",
              fontWeight: 900,
              whiteSpace: "nowrap",
            }}
          >
            {post.tag}
          </p>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* Tag */}
            <span
              className="inline-block bg-[#CC0000] text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ✦ {post.tag} ✦
            </span>

            {/* Title */}
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <span
                className="text-white/40 text-xs font-black uppercase tracking-widest"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {post.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span
                className="text-white/40 text-xs font-black uppercase tracking-widest"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Red bar */}
        <div className="w-full h-1.5 bg-[#CC0000]" />
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="w-full bg-white py-14 md:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-black/40 hover:text-[#CC0000] transition-colors duration-150 mb-10"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>

          {/* Paragraphs */}
          <div className="flex flex-col gap-5">
            {post.paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-black/75 text-base md:text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Product CTA block */}
          {post.productCta && (
            <div
              className="mt-14 p-7 md:p-10 border-[3px] border-black rounded-2xl bg-[#f5f5f5]"
              style={{ boxShadow: "6px 6px 0px #CC0000" }}
            >
              <span
                className="inline-block bg-[#CC0000] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                ✦ From FitZip ✦
              </span>
              <p
                className="text-black/70 text-sm md:text-base leading-relaxed mb-6 border-l-4 border-[#CC0000] pl-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {post.productCta.intro}
              </p>
              <Link
                href={`/products/${post.productCta.productSlug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm border-[3px] border-black transition-all duration-200"
                style={{
                  fontFamily: "var(--font-montserrat)",
                  boxShadow: "4px 4px 0px #000000",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "4px 4px 0px #000000";
                }}
              >
                {post.productCta.buttonLabel}
              </Link>
            </div>
          )}

          {/* Divider */}
          <div className="mt-14 border-t-[3px] border-black pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p
                className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Written by
              </p>
              <p
                className="text-base font-black uppercase text-black"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                FitZip
              </p>
              <p
                className="text-xs text-black/40 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Bodyweight Coach
              </p>
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-black text-white font-black uppercase tracking-widest text-xs border-[3px] border-black transition-all duration-200"
              style={{
                fontFamily: "var(--font-montserrat)",
                boxShadow: "4px 4px 0px #CC0000",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "4px 4px 0px #CC0000";
              }}
            >
              More Articles
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
