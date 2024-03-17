"use client";

import { v4 as uuidv4 } from "uuid";

import useCart from "@/hooks/use-cart";
import CartItem from "./cart-item";
import Summary from "./summary";

const CartContents = () => {
  const cart = useCart();

  return (
    <div className="flex w-full flex-col gap-5 lg:flex-row">
      <div className="w-full border">
        {cart.items.map((item) => (
          <CartItem key={uuidv4()} item={item} />
        ))}
      </div>
      <Summary />
    </div>
  );
};

export default CartContents;
