"use client";

import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";

export default function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, addItem, total } = useCartStore();

  // Find upsell — show the upsellOffer from whichever item is in cart (if other isn't)
  const upsell = (() => {
    const slugs = items.map((i) => i.slug);
    if (slugs.includes("workout") && !slugs.includes("nutrition"))
      return items.find((i) => i.slug === "workout")?.upsellOffer ?? null;
    if (slugs.includes("nutrition") && !slugs.includes("workout"))
      return items.find((i) => i.slug === "nutrition")?.upsellOffer ?? null;
    return null;
  })();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={closeCart}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white border-l-4 border-black z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ boxShadow: isOpen ? "-8px 0px 0px #000000" : "none" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b-4 border-black bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} />
            <span
              className="font-black uppercase text-base tracking-widest"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Cart
            </span>
            {items.length > 0 && (
              <span className="bg-[#CC0000] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="hover:text-[#CC0000] transition-colors"
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingBag size={48} className="text-black/10" />
              <p
                className="text-black/30 font-black uppercase tracking-widest text-sm"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Your cart is empty
              </p>
              <button
                onClick={closeCart}
                className="text-xs font-black uppercase tracking-widest text-[#CC0000] underline underline-offset-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="flex gap-3 border-[2px] border-black p-3 rounded-xl"
                >
                  <div className="relative w-16 h-20 shrink-0 bg-[#f5f5f5] border-2 border-black rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p
                        className="text-[10px] text-[#CC0000] font-black uppercase tracking-widest"
                        style={{ fontFamily: "var(--font-montserrat)" }}
                      >
                        {item.subtitle}
                      </p>
                      <p
                        className="text-sm font-black uppercase leading-tight"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {item.name}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-lg font-black"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        ${item.price}
                      </span>
                      <button
                        onClick={() => removeItem(item.slug)}
                        className="text-black/30 hover:text-[#CC0000] transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Upsell */}
              {upsell && (
                <div className="border-[2px] border-dashed border-[#CC0000] rounded-xl p-3 bg-red-50">
                  <p
                    className="text-[10px] text-[#CC0000] font-black uppercase tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    ✦ Complete The System — Limited Offer
                  </p>
                  <div className="flex gap-3 items-center">
                    <div className="relative w-14 h-18 shrink-0 bg-[#f5f5f5] border-2 border-black rounded-lg overflow-hidden">
                      <Image
                        src={upsell.image}
                        alt={upsell.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-sm font-black uppercase leading-tight"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {upsell.name}
                      </p>
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-[#CC0000] font-black text-base" style={{ fontFamily: "var(--font-poppins)" }}>
                          ${upsell.price}
                        </span>
                        <span className="text-black/30 text-xs line-through" style={{ fontFamily: "var(--font-montserrat)" }}>
                          ${upsell.originalPrice}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        addItem({
                          slug: upsell.slug,
                          name: upsell.name,
                          subtitle: upsell.subtitle,
                          price: upsell.price,
                          image: upsell.image,
                        })
                      }
                      className="bg-[#CC0000] text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 border-2 border-black shrink-0 hover:bg-black transition-colors"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t-4 border-black px-5 py-4 flex flex-col gap-3 bg-white">
            <div className="flex items-center justify-between">
              <span
                className="text-sm font-black uppercase tracking-widest text-black/50"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Total
              </span>
              <span
                className="text-2xl font-black"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                ${total().toFixed(2)}
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full bg-black text-white font-black uppercase tracking-widest text-sm py-4 text-center border-[3px] border-black hover:bg-[#CC0000] transition-colors"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Checkout · ${total().toFixed(2)} →
            </Link>
            <p
              className="text-center text-[10px] text-black/30 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Secure checkout · Instant download
            </p>
          </div>
        )}
      </div>
    </>
  );
}
