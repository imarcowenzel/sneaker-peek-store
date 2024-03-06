// "use client" is not needed in the code snippet

import useCart, { Item } from "@/hooks/use-cart";
import { MinusIcon, PlusIcon } from "lucide-react";

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
        <MinusIcon className="h-3 w-3 md:h-4 md:w-4" />
      </div>

      <div className="flex h-6 w-6 items-center justify-center border text-center text-xs outline-none md:h-9 md:w-9 md:text-sm lg:text-base">
        {value}
      </div>

      <div
        onClick={() =>
          cart.increaseQuantity(item.product.id, item.selectedSize)
        }
        className="flex h-6 w-6 cursor-pointer items-center justify-center border text-lg md:h-9 md:w-9"
      >
        <PlusIcon className="h-3 w-3 md:h-4 md:w-4" />
      </div>
      
    </div>
  );
};

export default QuantityControl;
