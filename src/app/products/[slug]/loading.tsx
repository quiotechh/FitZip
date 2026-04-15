export default function ProductLoading() {
  return (
    <div className="w-full min-h-screen bg-white animate-pulse">
      {/* ── Hero: Image + Buy Box ── */}
      <section className="w-full border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

          {/* Left — Image skeleton */}
          <div className="flex flex-col gap-3">
            <div className="w-full aspect-3/4 bg-black/10 border-[3px] border-black/10 rounded-2xl" />
            {/* Thumbnails */}
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-16 h-20 bg-black/10 border-2 border-black/10 rounded-lg shrink-0" />
              ))}
            </div>
          </div>

          {/* Right — Buy box skeleton */}
          <div className="flex flex-col gap-5">
            {/* Tag */}
            <div className="h-5 w-24 bg-black/10 rounded" />
            {/* Title */}
            <div className="flex flex-col gap-2">
              <div className="h-10 w-3/4 bg-black/10 rounded" />
              <div className="h-10 w-1/2 bg-black/10 rounded" />
            </div>
            {/* Stars */}
            <div className="flex gap-1.5 items-center">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-black/10 rounded-sm" />
              ))}
              <div className="h-4 w-20 bg-black/10 rounded ml-1" />
            </div>
            {/* Price */}
            <div className="flex items-baseline gap-3">
              <div className="h-10 w-20 bg-black/10 rounded" />
              <div className="h-6 w-14 bg-black/10 rounded" />
              <div className="h-6 w-16 bg-black/10 rounded" />
            </div>
            {/* Bullets */}
            <div className="flex flex-col gap-2 border-t-2 border-black/10 pt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-black/10 rounded-full shrink-0" />
                  <div className="h-4 bg-black/10 rounded" style={{ width: `${60 + i * 8}%` }} />
                </div>
              ))}
            </div>
            {/* CTA button */}
            <div className="h-14 w-full bg-black/10 border-[3px] border-black/10 rounded" />
            {/* Guarantee line */}
            <div className="h-4 w-48 bg-black/10 rounded mx-auto" />
          </div>
        </div>
      </section>

      {/* ── What You Get section ── */}
      <section className="w-full bg-black/5 border-b-4 border-black/10 py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="h-8 w-48 bg-black/10 rounded mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-black/10 border-2 border-black/10 rounded-xl" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews row ── */}
      <section className="w-full py-12 px-4 md:px-8 border-b-4 border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="h-8 w-40 bg-black/10 rounded mb-8" />
          <div className="flex gap-4 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-40 min-w-72 bg-black/10 border-2 border-black/10 rounded-xl shrink-0" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
