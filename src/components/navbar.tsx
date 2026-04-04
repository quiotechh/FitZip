"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#CC0000] border-b-4 border-black">
      {/* Desktop Navbar */}
      <div className="hidden md:grid grid-cols-3 items-center px-10 h-28 max-w-screen-2xl mx-auto w-full">
        {/* Left — Nav Links */}
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-normal uppercase tracking-normal text-white hover:text-black transition-colors duration-200 "
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Center — Logo */}
        <div className="flex justify-center">
          <Link
            href="/"
            className="text-5xl font-black text-white hover:text-black transition-colors duration-200 tracking-normal scale-125 "
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            FitZip
          </Link>
        </div>

        {/* Right — Icons */}
        <div className="flex items-center justify-end gap-6">
          <button
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
            className="text-white hover:text-black transition-colors duration-200"
          >
            <Search size={24} />
          </button>
          <Link
            href="/cart"
            aria-label="Cart"
            className="text-white hover:text-black transition-colors duration-200"
          >
            <ShoppingCart size={24} />
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-5 h-24">
        {/* Left — Hamburger */}
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open menu" className="text-white hover:text-black transition-colors">
              <Menu size={26} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            showCloseButton={false}
            className="bg-[#CC0000] border-r border-black/10 p-0 w-72"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex items-center px-6 py-5 border-b border-black/10">
              <SheetClose asChild>
                <button aria-label="Close menu" className="text-white/80 hover:text-black transition-colors">
                  <X size={22} />
                </button>
              </SheetClose>
            </div>
            <nav className="flex flex-col px-6 py-4 gap-0">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base font-normal uppercase tracking-normal text-white hover:text-black transition-colors py-4 border-b border-black/10 last:border-0"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="px-6 pt-2 pb-6">
              <div className="flex items-center bg-white rounded-full overflow-hidden border border-black/10">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 bg-transparent text-black placeholder-black/50 text-base outline-none px-2 py-3"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                />
                <button className="pr-4 pl-2 flex items-center justify-center text-black/50">
                  <Search size={18} />
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Center — Logo */}
        <Link
          href="/"
          className="text-3xl font-black text-white hover:text-black transition-colors"
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          FitZip
        </Link>

        {/* Right — Cart */}
        <Link
          href="/cart"
          aria-label="Cart"
          className="text-white hover:text-black transition-colors"
        >
          <ShoppingCart size={24} />
        </Link>
      </div>

      {/* Search Bar — slides down */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/10 hidden md:block"
          >
            <div className="max-w-screen-2xl mx-auto px-10 py-4 flex items-center gap-3">
              <Search size={18} className="text-white/60 shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Search products..."
                className="w-full bg-transparent text-white placeholder-white/60 text-base font-medium outline-none"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-white/60 hover:text-white transition-colors shrink-0"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
