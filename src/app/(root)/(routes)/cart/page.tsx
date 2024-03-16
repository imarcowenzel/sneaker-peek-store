"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

import useCart from "@/hooks/use-cart";
import FullCart from "./components/cart-contents";
import CartContents from "./components/empty-cart";

const CartPage = () => {

  const seachParams = useSearchParams();

  const cart = useCart();
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (seachParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    } else if (seachParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [seachParams, removeAll]);

  return (
    <section className="flex w-full items-center justify-center px-4 py-5 md:px-8 lg:px-9 lg:py-12 xl:px-24 xl:py-20">
      <div className="flex h-fit w-full max-w-7xl flex-col gap-y-6 bg-white px-3 py-12 xl:px-28 xl:py-20">
        <h1 className="text-3xl font-semibold">Cart</h1>
        {cart.items.length > 0 ? <FullCart /> : <CartContents />}
      </div>
    </section>
  );
};

export default CartPage;
