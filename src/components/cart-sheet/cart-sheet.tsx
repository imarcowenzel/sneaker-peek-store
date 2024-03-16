"use client";

import axios from "axios";
import { ShoppingBag } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

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
import { useAuth } from "@clerk/nextjs";

const ShoppingCartIcon = () => {

  const user = useAuth()
  const router = useRouter();
  const seachParams = useSearchParams();

  const cart = useCart();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const total = formatter.format(cart.totalPrice);

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
        router.push("/sign-in");
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
                <SheetClose asChild>
                  <Button
                    onClick={onCheckout}
                    className="w-full uppercase text-white"
                  >
                    Checkout
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
