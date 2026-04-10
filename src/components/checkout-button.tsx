"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";

interface CheckoutButtonProps {
  items: Array<{
    productId: string;
    isUpsell?: boolean;
    upsellProductId?: string;
  }>;
  total: number;
  disabled?: boolean;
}

export default function CheckoutButton({
  items,
  total,
  disabled = false,
}: CheckoutButtonProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          items,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Checkout failed");
        return;
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setError("An error occurred during checkout");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border-2 border-black rounded-lg font-medium"
        disabled={isLoading}
      />
      <button
        onClick={handleCheckout}
        disabled={disabled || isLoading || !email}
        className="w-full flex items-center justify-center gap-2 bg-[#CC0000] hover:bg-red-700 disabled:bg-gray-400 text-white font-black uppercase tracking-widest px-6 py-3 rounded-lg transition-colors duration-200"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <ShoppingBag size={18} />
        {isLoading ? "Processing..." : `Checkout • $${total.toFixed(2)}`}
      </button>
      {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
    </div>
  );
}
