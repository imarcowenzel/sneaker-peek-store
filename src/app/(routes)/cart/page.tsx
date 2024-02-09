import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Cart = () => {
  return (
    <section className="flex min-h-[calc(100dvh-945,25px)] justify-center bg-[#f2f4f6] px-4 py-5 md:min-h-[calc(100dvh-927,25px)] md:px-8 lg:px-9 lg:py-12 xl:px-24 xl:py-20">
      <div className="flex w-full max-w-7xl flex-col gap-y-4 bg-white px-9 py-12 xl:px-28 xl:py-20">
        <h1 className="text-3xl font-black">Cart</h1>
        <div className="flex w-full items-center gap-x-2 border-[1px] border-cyan-600 bg-[#f4f8ff] p-4">
          <AlertCircle className="text-cyan-600" />
          <p className="text-xs lg:text-sm">Your cart is current empty.</p>
        </div>
        <Link href="/shop">
          <Button className="rounded-full bg-gray-300 px-8 py-3 text-xs font-normal uppercase text-black lg:text-sm">
            Return to shop
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Cart;
