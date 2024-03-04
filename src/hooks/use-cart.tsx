import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

interface Item {
  product: Product;
  quantity: number;
  selectedSize: string | null;
}
[];

interface CartProps {
  items: Item[];
  addItem: (data: Item) => void;
  removeItem: (id: string, selectedSize: string | null) => void;
  removeAll: () => void;
}

// TODO: routine to increase and decrease quantity

const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],

      addItem: (data: Item) => {
        const currentItems = get().items;

        const existingItem = currentItems.find(
          (item) =>
            item?.product?.id === data.product.id &&
            item?.selectedSize === data.selectedSize,
        );

        if (existingItem) {
          return toast("Item already in cart.");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      // TODO: fix
      removeItem: (id: string, selectedSize: string | null) => {
        set({
          items: [...get().items.filter((item) => item?.product?.id !== id && item?.selectedSize !== selectedSize)],
        });
        toast.success("Item removed from the cart.");
      },

      removeAll: () => set({ items: [] }),
    }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
