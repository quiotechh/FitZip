import { create } from "zustand";

export interface UpsellOffer {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  image: string;
}

export interface CartItem {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  upsellOffer?: UpsellOffer;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (slug: string) => void;
  openCart: () => void;
  closeCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  addItem: (item) => {
    const exists = get().items.find((i) => i.slug === item.slug);
    if (!exists) {
      set((s) => ({ items: [...s.items, item], isOpen: true }));
    } else {
      set({ isOpen: true });
    }
  },

  removeItem: (slug) =>
    set((s) => {
      const removed = s.items.find((i) => i.slug === slug);
      const upsellSlug = removed?.upsellOffer?.slug;
      return {
        items: s.items.filter(
          (i) => i.slug !== slug && i.slug !== upsellSlug
        ),
      };
    }),

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  total: () => get().items.reduce((sum, i) => sum + i.price, 0),
}));

