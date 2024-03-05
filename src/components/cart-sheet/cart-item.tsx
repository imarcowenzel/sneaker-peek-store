"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { SheetDescription } from "@/components/ui/sheet";
import useCart from "@/hooks/use-cart";
import QuantityControl from "../ui/quantity-control";
import { formatter } from "../../lib/utils";

const CartItem = () => {

  const cart = useCart();

  return (
    <SheetDescription className="flex flex-col items-center justify-center gap-5 py-2">
      {/* TODO: customize and style the cart sheet if items are in the cart*/}

      {cart.items.map((item) => {

        const price =
          item.product.discount > 0
            ? formatter.format(item.product.discount * item.quantity)
            : formatter.format(item.product.price * item.quantity);

        return (
          <div
            key={item.product.id}
            className="flex w-full justify-between gap-3"
          >
            <div className="flex w-full flex-nowrap justify-start gap-3">
              <Image
                src={item?.product?.photo}
                alt=""
                width={60}
                height={60}
                className="flex-[1]"
              />

              <div className="flex flex-[2] flex-col justify-between gap-1">
                <span className="text-xs font-medium md:text-sm lg:text-base">
                  {item?.product?.name}
                </span>
                <span className="text-xs font-medium md:text-sm lg:text-base">
                  Size: {item?.selectedSize}
                </span>
                {/* QUANTITY INPUT */}
                <QuantityControl value={item.quantity} item={item} />
              </div>
            </div>

            <div className="flex flex-col items-end justify-between">
              <button
                onClick={() =>
                  cart.removeItem(item?.product?.id, item?.selectedSize)
                }
                className="cursor-pointer"
              >
                <X className="h-3 w-3 md:h-4 md:w-4" />
              </button>
              <span className="text-xs md:text-sm lg:text-base">{price}</span>
            </div>
          </div>
        );
      })}
    </SheetDescription>
  );
};

export default CartItem;
