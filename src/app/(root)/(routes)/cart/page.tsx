"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import EmptyCart from "./components/empty-cart";
import Summary from "./components/summary";

const Cart = () => {

  const seachParams = useSearchParams();
  const cart = useCart();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (seachParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (seachParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [seachParams, removeAll]);

  async function onCheckout() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        { productsIds: items.map((item) => item.product.id) },
      );
      console.log(response);
      window.location = response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="flex items-center justify-center px-4 py-5 md:px-8 lg:px-9 lg:py-12 xl:px-24 xl:py-20">
      <div className="flex h-fit w-full max-w-7xl flex-col gap-y-6 bg-white px-3 py-12 xl:px-28 xl:py-20">
        <h1 className="text-3xl font-semibold">Cart</h1>

        {cart.items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex w-full flex-col gap-5 lg:flex-row">
            <div className="w-full border">
              {cart.items.map((item) => (
                <CartItem item={item} />
              ))}
            </div>

            <Summary items={items} onCheckout={onCheckout} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
