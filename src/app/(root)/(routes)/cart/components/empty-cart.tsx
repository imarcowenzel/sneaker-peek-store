"use client";

import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

const EmptyCart = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex w-full items-center gap-x-2 border-[1px] border-cyan-600 bg-[#f4f8ff] p-4">
        <AlertCircle className="text-secondary" />
        <p className="text-xs lg:text-sm">Your cart is current empty.</p>
      </div>

      <Button
        onClick={() => router.push("/shop")}
        className="w-fit rounded-full bg-gray-100 px-8 py-3 text-xs font-normal uppercase text-primary hover:text-white lg:text-sm"
      >
        Return to shop
      </Button>
    </>
  );
};

export default EmptyCart;
