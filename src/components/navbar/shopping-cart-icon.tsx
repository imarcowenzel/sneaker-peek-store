"use client";

import { MinusIcon, PlusIcon, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
import Link from "next/link";

const ShoppingCartIcon = () => {
  const cart = useCart();

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
            <>
              <SheetDescription className="flex h-full items-center justify-center">
                <p>No products in the cart.</p>
              </SheetDescription>
              <Button className="uppercase text-white">
                <Link href="/shop">Continue shopping</Link>
              </Button>
            </>
          ) : (
            <>
              <SheetDescription className="flex flex-col items-center justify-center gap-5 py-2">
                {/* TODO: customize and style the cart sheet if items are in the cart*/}

                {cart.items.map((item) => (
                  <div className="flex w-full justify-between gap-3">
                    <div className="flex w-full flex-nowrap justify-start gap-3">

                      <Image
                        src={item?.product?.photo}
                        alt=""
                        width={60}
                        height={60}
                        className="flex-[1]"
                      />

                      <div className="flex flex-col justify-between gap-1 flex-[2]">
                        <span className="text-xs md:text-sm font-medium lg:text-base">
                          {item?.product?.name}
                        </span>
                        <span className="text-xs md:text-sm font-medium lg:text-base">
                          Size: {item?.selectedSize}
                        </span>
                        {/* QUANTITY INPUT */}
                        <div className="flex items-center">
                          <span className="flex h-6 w-6  md:h-9 md:w-9 cursor-pointer items-center justify-center border text-lg">
                            <MinusIcon className="h-3 w-3 md:h-4 md:w-4" />
                          </span>

                          <input
                            type="number"
                            pattern="^[0-9]+$"
                            className="flex h-6 md:h-9 md:w-9 w-6 items-center justify-center border text-center text-xs md:text-sm lg:text-base outline-none"
                            value={item.quantity}
                            max={100}
                          />

                          <span className="flex h-6 w-6  md:h-9 md:w-9 cursor-pointer items-center justify-center border text-lg">
                            <PlusIcon className="h-3 w-3 md:h-4 md:w-4" />
                          </span>
                        </div>
                      </div>

                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() =>
                          cart.removeItem(item?.product?.id, item?.selectedSize)
                        }
                        className="cursor-pointer"
                      >
                        <X className="w-3 h-3 md:w-4 md:h-4" />
                      </button>
                      <span className="text-xs md:text-sm lg:text-base">
                        ${parseFloat(item?.product?.price) * item.quantity}.00
                      </span>
                    </div>
                  </div>
                ))}
              </SheetDescription>

              <div className="flex flex-col gap-2">
                <Button className="w-full uppercase text-white">
                  <Link href="/checkout">View cart</Link>
                </Button>
                <Button
                  className="w-full uppercase text-white"
                >
                  <Link href="/checkout">Checkout</Link>
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
