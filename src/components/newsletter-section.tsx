"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    // Opens beehiiv subscribe page with email pre-filled
    window.open(
      `https://fitzip-newsletter-069955.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`,
      "_blank"
    );
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section
      className="w-full py-10 md:py-16 px-4 md:px-8 border-t-4 border-black"
      style={{
        background:
          "radial-gradient(ellipse at center, #3a3a3a 0%, #1f1f1f 50%, #0a0a0a 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <span
          className="inline-block text-[#CC0000] text-xs md:text-sm font-black uppercase tracking-widest mb-4"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Free Weekly Newsletter
        </span>

        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight mb-4"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          Join the Movement.
          <br />
          <span className="text-[#CC0000]">Train Smarter.</span>
        </h2>

        {/* Subtext */}
        <p
          className="text-white/50 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Get free weekly tips on bodyweight training, joint health, and nutrition — straight to your inbox. No spam. Unsubscribe anytime.
        </p>

        {/* Form */}
        {submitted ? (
          <div
            className="inline-block px-8 py-4 rounded-2xl border-[3px] border-[#CC0000] text-white font-black uppercase tracking-widest text-sm md:text-base"
            style={{
              fontFamily: "var(--font-montserrat), sans-serif",
              boxShadow: "5px 5px 0px #CC0000",
            }}
          >
            ✓ Check your inbox — you&apos;re in!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 md:py-4 rounded-full bg-white/10 text-white placeholder-white/30 border-[3px] border-white/20 focus:border-white/60 outline-none text-sm md:text-base transition-colors duration-200"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            />
            <button
              type="submit"
              className="px-7 py-3.5 md:py-4 rounded-full bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm md:text-base border-[3px] border-black transition-all duration-200 whitespace-nowrap"
              style={{
                fontFamily: "var(--font-montserrat), sans-serif",
                boxShadow: "5px 5px 0px #000000",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "5px 5px 0px #000000";
              }}
            >
              Subscribe Free
            </button>
          </form>
        )}

        {/* Social proof */}
        <p
          className="text-white/30 text-xs md:text-sm mt-6"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Join 228K+ readers training smarter every week
        </p>
      </div>
    </section>
  );
}
