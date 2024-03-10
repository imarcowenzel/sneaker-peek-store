"use client";

import { Button } from "@/components/ui/button";
import useCart, { Item } from "@/hooks/use-cart";
import { formatter } from "@/lib/utils";

interface SummaryProps {
  items: Item[];
  onCheckout: () => Promise<void>;
}

const Summary: React.FC<SummaryProps> = ({ items, onCheckout }) => {
  
  const cart = useCart()

  const totalPrice = formatter.format(cart.totalPrice)

  return (
    <div className="border">
      <div className="flex justify-start border-b bg-gray-200 p-4">
        <h1 className="font-bold ">Cart totals</h1>
      </div>

      <div className="flex items-center justify-between border-b  p-4 text-sm">
        <p className="font-bold">Total:</p>
        <p>{totalPrice}</p>
      </div>

      <div className="flex items-center justify-center border-b  p-4 text-sm">
        <Button
          onClick={onCheckout}
          className="rounded-full bg-gray-100 px-8 py-3 text-xs font-normal uppercase text-black lg:text-sm"
        >
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default Summary;