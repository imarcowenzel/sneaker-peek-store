"use client";

import { MinusIcon, PlusIcon } from "lucide-react";

import useCart, { Item } from "@/hooks/use-cart";

interface QuantityControlProps {
  value: number;
  item: Item;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ value, item }) => {
  const cart = useCart();

  return (
    <div className="flex items-center">
      <div
        onClick={() =>
          cart.decreaseQuantity(item.product.id, item.selectedSize)
        }
        className="flex h-6 w-6 cursor-pointer items-center justify-center border text-lg md:h-9 md:w-9"
      >
        <MinusIcon className="h-2 w-2 md:h-3 md:w-3" />
      </div>

      <div className="flex h-6 w-6 items-center justify-center border text-center text-xs outline-none md:h-9 md:w-9 md:text-sm">
        {value}
      </div>

      <div
        onClick={() =>
          cart.increaseQuantity(item.product.id, item.selectedSize)
        }
        className="flex h-6 w-6 cursor-pointer items-center justify-center border text-lg md:h-9 md:w-9"
      >
        <PlusIcon className="h-2 w-2 md:h-3 md:w-3" />
      </div>
    </div>
  );
};

export default QuantityControl;
