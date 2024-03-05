"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useCart from "@/hooks/use-cart";
import { Button } from "../ui/button";
import CartItem from "./cart-item";
import EmptyCart from "./empty-cart";

const ShoppingCartIcon = () => {
  
  const cart = useCart();
  const router = useRouter();

  return (
    <Sheet>
      {/* TRIGGER */}
      <SheetTrigger className="relative flex items-center gap-x-2 font-bold text-primary">
        <ShoppingBag />
        <p className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-600 p-1 text-[10px] text-white">
          {cart.items.length}
        </p>
      </SheetTrigger>

      {/* CONTENT */}
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="text-left text-base font-normal">
            Shopping cart
          </SheetTitle>
          <Separator className="h-[2px]" />
        </SheetHeader>

        <div className="flex flex-1 flex-col justify-between">
          {cart.items.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <CartItem />
              <div className="flex flex-col gap-2">
                <SheetClose asChild>
                  <Button
                    onClick={() => router.push("/cart")}
                    className="w-full uppercase text-white"
                  >
                    View cart
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    onClick={() => router.push("/checkout")}
                    className="w-full uppercase text-white"
                  >
                    Checkout
                  </Button>
                </SheetClose>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartIcon;
