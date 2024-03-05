"use client";

import { MinusIcon, PlusIcon } from "lucide-react";

import useCart, { Item } from "@/hooks/use-cart";

interface QuantityControlprops {
  value: number;
  item: Item;
}

const QuantityControl: React.FC<QuantityControlprops> = ({ value, item }) => {
  const cart = useCart();

  return (
    <div className="flex items-center">
      <span
        onClick={() =>
          cart.decreaseQuantity(item.product.id, item.selectedSize)
        }
        className="flex h-6 w-6  cursor-pointer items-center justify-center border text-lg md:h-9 md:w-9"
      >
        <MinusIcon className="h-3 w-3 md:h-4 md:w-4" />
      </span>
      <input
        type="number"
        pattern="^[0-9]+$"
        className="flex h-6 w-6 items-center justify-center border text-center text-xs outline-none md:h-9 md:w-9 md:text-sm lg:text-base"
        value={item.quantity}
        max={100}
      />
      <span
        onClick={() =>
          cart.increaseQuantity(item.product.id, item.selectedSize)
        }
        className="flex h-6 w-6  cursor-pointer items-center justify-center border text-lg md:h-9 md:w-9"
      >
        <PlusIcon className="h-3 w-3 md:h-4 md:w-4" />
      </span>
    </div>
  );
};

export default QuantityControl;
