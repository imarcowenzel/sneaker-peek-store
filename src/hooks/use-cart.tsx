import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

export interface Item {
  product: Product;
  quantity: number;
  selectedSize: string | null;
}

interface CartProps {
  items: Item[];
  totalPrice: number;
  addItem: (data: Item) => void;
  removeItem: (id: string, selectedSize: string | null) => void;
  removeAll: () => void;
  increaseQuantity: (id: string, selectedSize: string | null) => void;
  decreaseQuantity: (id: string, selectedSize: string | null) => void;
}

const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],
      totalPrice: 0,

      // Add an item to the cart
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

        // Add the new item and update the totalPrice
        set((state) => ({
          items: [...state.items, data],
          totalPrice:
            state.totalPrice + data.product.totalPrice * data.quantity,
        }));

        toast.success("Item added to cart.");
      },
      increaseQuantity: (id: string, selectedSize: string | null) => {
        set((state) => {
          let totalPriceDelta = 0;

          // Update the quantity of the item and calculate the change in total price
          const updatedItems = state.items.map((item) => {
            if (
              item?.product?.id === id &&
              item?.selectedSize === selectedSize
            ) {
              const newQuantity = item.quantity + 1;

              totalPriceDelta +=
                item.product.totalPrice * (newQuantity - item.quantity);

              return { ...item, quantity: newQuantity };
            }
            return item;
          });

          // Update the state including the updated items and the new totalPrice
          return {
            items: updatedItems,
            totalPrice: state.totalPrice + totalPriceDelta,
          };
        });
      },
      // Decrease the quantity of an item in the cart
      decreaseQuantity: (id: string, selectedSize: string | null) => {
        set((state) => {
          let totalPriceDelta = 0;

          // Update the quantity of the item and calculate the change in total price
          const updatedItems = state.items.map((item) => {
            if (
              item?.product?.id === id &&
              item?.selectedSize === selectedSize
            ) {
              const newQuantity = Math.max(1, item.quantity - 1);
              totalPriceDelta +=
                item.product.totalPrice * (newQuantity - item.quantity);
              return { ...item, quantity: newQuantity };
            }
            return item;
          });
          // Update the state including the updated items and the new totalPrice
          return {
            items: updatedItems,
            totalPrice: state.totalPrice + totalPriceDelta,
          };
        });
      },
      // Remove an item from the cart
      removeItem: (id: string, selectedSize: string | null) => {
        set((state) => {
          let totalPriceDelta = 0;
          // Filter the items, calculate the change in total price when removing the item
          const updatedItems = state.items.filter((item) => {
            if (
              item?.product?.id === id &&
              item?.selectedSize === selectedSize
            ) {
              totalPriceDelta -= item.product.totalPrice * item.quantity;
              return false; // Do not include the removed item in the updated list
            }
            return true;
          });
          // Update the state including the updated items and the new totalPrice
          return {
            items: updatedItems,
            totalPrice: state.totalPrice + totalPriceDelta,
          };
        });

        toast.success("Item removed from the cart.");
      },
      // Remove all items from the cart
      removeAll: () => {
        set((state) => {
          // Calculate the change in total price when removing all items
          const totalPriceDelta = state.items.reduce((delta, item) => {
            return delta - item.product.price * item.quantity;
          }, 0);

          // Update the state to remove all items and adjust the totalPrice
          return { items: [], totalPrice: state.totalPrice + totalPriceDelta };
        });

        toast.success("All items removed from the cart.");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
