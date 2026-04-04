"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="bg-black px-4 py-2 md:py-2.5 flex items-center justify-center relative">
            <p className="text-[10px] md:text-base text-center text-white whitespace-nowrap overflow-hidden text-ellipsis pr-6 md:pr-0" style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Workout &amp; Nutrition Ebooks live —{" "}
              <a
                href="/products"
                className="underline underline-offset-2 font-bold text-white hover:text-white/80 transition-colors"
              >
                Get yours →
              </a>
            </p>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss announcement"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
