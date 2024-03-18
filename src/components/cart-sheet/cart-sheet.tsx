"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useCart from "@/hooks/use-cart";
import { formatter } from "@/lib/utils";
import CartItem from "./cart-item";
import EmptyCart from "./empty-cart";

const ShoppingCartIcon = () => {
  const router = useRouter();

  const cart = useCart();
  const total = formatter.format(cart.totalPrice);

  return (
    <Sheet>
      {/* TRIGGER */}
      <SheetTrigger className="relative flex items-center gap-x-2 font-bold text-secondary">
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
              <SheetFooter className="flex-col gap-2 sm:flex-col sm:justify-center sm:space-x-0">
                <div className="py-2">
                  <Separator className="h-[2px]" />
                  <div className="flex justify-between py-3 text-sm md:text-base">
                    <p>Subtotal:</p>
                    {total}
                  </div>
                  <Separator className="h-[2px]" />
                </div>
                <SheetClose asChild>
                  <Button
                    onClick={() => router.push("/cart")}
                    className="w-full uppercase text-white"
                  >
                    View cart
                  </Button>
                </SheetClose>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartIcon;
