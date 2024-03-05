import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

export interface Item {
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
  increaseQuantity: (id: string, selectedSize: string | null) => void;
  decreaseQuantity: (id: string, selectedSize: string | null) => void;
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
      increaseQuantity: (id: string, selectedSize: string | null) => {
        set((state) => {
          const updatedItems = state.items.map((item) => {
            if (
              item?.product?.id === id &&
              item?.selectedSize === selectedSize
            ) {
              // Increment the quantity by 1
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });

          return { items: updatedItems };
        });
      },
      decreaseQuantity: (id: string, selectedSize: string | null) => {
        set((state) => {
          const updatedItems = state.items.map((item) => {
            if (
              item?.product?.id === id &&
              item?.selectedSize === selectedSize
            ) {
              // Decrease the quantity by 1, but ensure it doesn't go below 1
              const newQuantity = Math.max(1, item.quantity - 1);
              return { ...item, quantity: newQuantity };
            }
            return item;
          });

          return { items: updatedItems };
        });
      },
      // TODO: fix
      removeItem: (id: string, selectedSize: string | null) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item?.product?.id === id && item?.selectedSize === selectedSize
              ),
          ),
        }));
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
