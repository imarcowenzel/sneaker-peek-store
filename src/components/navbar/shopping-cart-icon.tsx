"use client";

import { ShoppingBag, X } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useCart from "@/hooks/use-cart";

const ShoppingCartIcon = () => {
  const cart = useCart();

  return (
    <Sheet>
      
      <SheetTrigger className="relative flex items-center gap-x-2 font-bold text-primary">
        <ShoppingBag />
        <p className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-600 p-1 text-[10px] text-white">
          {cart.items.length}
        </p>
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="font-normal">Shopping cart</SheetTitle>
          <Separator className="h-[2px]" />
        </SheetHeader>

        <div className="flex flex-1 flex-col justify-between">
          {cart.items.length === 0 ? (
            <>
              <SheetDescription className="flex items-center justify-center h-full">
                {/* TODO: customize and style the cart sheet if no item is in the cart*/}
                <span>No products in the cart.</span>
              </SheetDescription>
              <Button
                variant={"ghost"}
                className="w-full hover:bg-gray-600 hover:text-white"
              >
                {/* TODO: customize and style the cart sheet if no item is in the cart*/}
                CONTINUE SHOPPING
              </Button>
            </>
          ) : (
            <>
              <SheetDescription className="flex items-center justify-center p-2">
                {/* TODO: customize and style the cart sheet if items are in the cart*/}
                {cart.items.map((item) => (
                  <div className="flex w-full justify-between gap-3">
                    <div className="flex w-full justify-start gap-3">
                      <Image src={item.photo} alt="" width={60} height={60} />
                      <span className="font-semibold">{item.name}</span>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => cart.removeItem(item.id)}
                        className="cursor-pointer"
                      >
                        <X width={16} height={16} />
                      </button>
                      <span>${item.price}.00</span>
                    </div>
                  </div>
                ))}
              </SheetDescription>

              <div>
                <Button
                  variant={"ghost"}
                  className="w-full hover:bg-gray-600 hover:text-white"
                >
                  {/* TODO: customize and style the cart sheet if items are in the cart*/}
                  VIEW CART
                </Button>
                <Button
                  variant={"ghost"}
                  className="w-full hover:bg-gray-600 hover:text-white"
                >
                  {/* TODO: customize and style the cart sheet if items are in the cart*/}
                  CHECKOUT
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartIcon;
