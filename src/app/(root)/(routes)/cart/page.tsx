"use client";

import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "@clerk/nextjs";

import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import EmptyCart from "./components/empty-cart";
import Summary from "./components/summary";

const CartPage = () => {

  const user = useAuth();
  const seachParams = useSearchParams();
  const router = useRouter();
  
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
      if (!user.isSignedIn) {
        localStorage.setItem("returnTo", window.location.pathname);
        router.push("/sign-in")
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        { productIds: items.map((item) => item.product.id) },
      );

      window.location = response.data.url;
    } catch (error: any) {
      console.error(error);
    }
  }

  return (
    <section className="flex w-full items-center justify-center px-4 py-5 md:px-8 lg:px-9 lg:py-12 xl:px-24 xl:py-20">
      <div className="flex h-fit w-full max-w-7xl flex-col gap-y-6 bg-white px-3 py-12 xl:px-28 xl:py-20">
        <h1 className="text-3xl font-semibold">Cart</h1>

        {cart.items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex w-full flex-col gap-5 lg:flex-row">
            <div className="w-full border">
              {cart.items.map((item) => (
                <CartItem key={uuidv4()} item={item} />
              ))}
            </div>

            <Summary onCheckout={onCheckout} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
