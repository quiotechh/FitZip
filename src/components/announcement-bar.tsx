export default function AnnouncementBar() {
  return (
    <div className="bg-black px-4 py-2 md:py-2.5 flex items-center justify-center">
      <p
        className="text-[10px] md:text-base text-center text-white"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        Workout &amp; Nutrition Ebooks live —{" "}
        <a
          href="/products"
          className="underline underline-offset-2 font-bold text-white hover:text-white/80 transition-colors"
        >
          Get yours →
        </a>
      </p>
    </div>
  );
}
