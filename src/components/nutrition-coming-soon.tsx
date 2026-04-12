import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";

const TEASER_POINTS = [
  { icon: "🥗", title: "Eat Real Food", body: "No starving, no weird diets. Just whole foods that actually work." },
  { icon: "⚡", title: "Fuel Your Training", body: "Eat to perform and recover — not just to survive the day." },
  { icon: "📋", title: "Done-For-You Plans", body: "Weekly meal plans + shopping lists so you never have to guess." },
  { icon: "🔥", title: "Lose Fat, Keep Muscle", body: "The sustainable way — backed by movement science." },
];

export default function NutritionComingSoon() {
  return (
    <>
      {/* ── HERO — two col on desktop ── */}
      <section className="w-full bg-white border-b-4 border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT — Book cover */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative w-64 sm:w-80 md:w-[380px] aspect-3/4 border-[3px] border-black rounded-2xl overflow-hidden"
              style={{ boxShadow: "8px 8px 0px #000000" }}
            >
              <Image
                src="/ebooks-cover/reset-your-body-nutriton-guide.png"
                alt="Reset Your Plate — Coming Soon"
                fill
                className="object-cover"
                priority
              />
              <span
                className="absolute top-4 left-4 bg-[#CC0000] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border-2 border-black"
                style={{ fontFamily: "var(--font-montserrat)", boxShadow: "3px 3px 0px #000000" }}
              >
                Coming Soon
              </span>
            </div>
          </div>

          {/* RIGHT — Copy */}
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex items-center gap-3">
              <span
                className="inline-block bg-[#CC0000] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 border-2 border-black"
                style={{ fontFamily: "var(--font-montserrat)", boxShadow: "3px 3px 0px #000000" }}
              >
                ✦ Coming Soon ✦
              </span>
              <span
                className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 border-2 border-black"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Nutrition Guide
              </span>
            </div>

            <div>
              <h1
                className="font-black uppercase text-black leading-none"
                style={{ fontFamily: "var(--font-poppins)", fontSize: "clamp(48px, 7vw, 88px)" }}
              >
                RESET YOUR
                <br />
                <span className="bg-[#CC0000] text-white px-3 inline-block mt-1">PLATE</span>
              </h1>
            </div>

            <p
              className="text-black/60 text-sm md:text-base leading-relaxed border-l-4 border-[#CC0000] pl-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              A simple, science-backed nutrition system to eat real food, fuel your training, and finally get results — no calorie counting, no starving.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2">
              {["Meal Plans", "Shopping Lists", "Macro Guide", "Instant PDF"].map((f) => (
                <span
                  key={f}
                  className="text-[10px] font-black uppercase tracking-wider bg-black/5 border-2 border-black/15 px-3 py-1 text-black/50"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  ✓ {f}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-2 pt-1">
              <a
                href="https://fitzip-newsletter-069955.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-[#CC0000] text-white font-black uppercase tracking-widest text-sm md:text-base py-4 px-8 border-[3px] border-black transition-all duration-200 hover:bg-black"
                style={{ fontFamily: "var(--font-montserrat)", boxShadow: "5px 5px 0px #000000" }}
              >
                Notify Me When It Drops →
              </a>
              <p
                className="text-black/30 text-[10px] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Join the list — be first to know. No spam, ever.
              </p>
            </div>

            <Link
              href="/products"
              className="self-start text-xs font-black uppercase tracking-widest text-black/40 hover:text-black underline underline-offset-4 transition-colors duration-150"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ← Back to all programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE TEASER ── */}
      <section className="w-full bg-black border-b-4 border-black py-14 md:py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-[#CC0000] text-[10px] font-black uppercase tracking-widest mb-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ✦ Sneak Peek ✦
            </p>
            <h2
              className="text-3xl md:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              What&apos;s{" "}
              <span className="bg-[#CC0000] text-white px-2 inline-block">Inside</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {TEASER_POINTS.map((p) => (
              <div
                key={p.title}
                className="flex gap-4 p-5 md:p-6 border-[3px] border-white/10 rounded-xl bg-white/5"
              >
                <div className="shrink-0 w-10 h-10 bg-[#CC0000] border-2 border-white/20 flex items-center justify-center text-lg">
                  {p.icon}
                </div>
                <div>
                  <p
                    className="font-black uppercase text-sm md:text-base text-white mb-1"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {p.title}
                  </p>
                  <p
                    className="text-xs md:text-sm text-white/50 leading-relaxed"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA STRIP ── */}
      <section className="w-full bg-[#CC0000] border-b-4 border-black py-12 md:py-16 px-4 text-center">
        <p
          className="text-white/60 text-xs font-black uppercase tracking-widest mb-3"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Don&apos;t miss the launch
        </p>
        <h2
          className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          Be First.
          <br />
          Get Notified.
        </h2>
        <a
          href="https://fitzip-newsletter-069955.beehiiv.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-black uppercase tracking-widest text-sm md:text-base px-10 py-4 border-[3px] border-black transition-all duration-200 hover:bg-black hover:text-white"
          style={{ fontFamily: "var(--font-montserrat)", boxShadow: "5px 5px 0px #000000" }}
        >
          Join The List →
        </a>
      </section>

      <Footer />
    </>
  );
}
