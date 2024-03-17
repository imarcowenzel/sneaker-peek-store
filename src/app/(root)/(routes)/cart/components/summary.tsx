"use client";

import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { formatter } from "@/lib/utils";

const Summary = () => {

  const user = useAuth();
  const router = useRouter();
  const seachParams = useSearchParams();

  const cart = useCart();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const totalPrice = formatter.format(cart.totalPrice);

  async function onCheckout() {
    try {
      if (!user.isSignedIn) {
        localStorage.setItem("returnTo", window.location.pathname);
        router.push("/sign-in");
      }

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        { items },
      );

      window.location = response.data.url;
    } catch (error: any) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log("Effect triggered. Search params:", seachParams);
    if (seachParams.get("success")) {
      removeAll();
      toast.success("Payment completed.");
    } else if (seachParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [seachParams]);

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
          className="w-full rounded-full bg-gray-100 px-8 py-3 text-xs font-normal uppercase text-black hover:text-white lg:text-sm"
        >
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default Summary;
