import { create } from "zustand";

export interface CartItem {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
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
    set((s) => ({ items: s.items.filter((i) => i.slug !== slug) })),

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  total: () => get().items.reduce((sum, i) => sum + i.price, 0),
}));

// Upsell config
export const UPSELL = {
  workout: {
    slug: "nutrition",
    name: "Reset Your Plate",
    subtitle: "Nutrition Guide",
    price: 19,
    originalPrice: 24.99,
    image: "/ebooks-cover/reset-your-body-nutriton-guide.png",
  },
  nutrition: {
    slug: "workout",
    name: "Reset Your Body",
    subtitle: "Workout Program",
    price: 19,
    originalPrice: 27,
    image: "/ebooks-cover/reset-your-body-workout-guide.png",
  },
};
