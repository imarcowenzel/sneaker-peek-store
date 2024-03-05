"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";

const EmptyCart = () => {
  const router = useRouter();
  return (
    <>
      <SheetDescription className="flex h-full items-center justify-center">
        <p>No products in the cart.</p>
      </SheetDescription>
      <SheetFooter>
        <SheetClose asChild>
          <Button
            onClick={() => router.push("/shop")}
            className="w-full uppercase text-white"
          >
            Continue shopping
          </Button>
        </SheetClose>
      </SheetFooter>
    </>
  );
};

export default EmptyCart;
