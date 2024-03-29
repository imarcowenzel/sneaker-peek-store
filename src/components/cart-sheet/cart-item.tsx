"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

import QuantityControl from "@/components/ui/quantity-control";
import useCart from "@/hooks/use-cart";
import { formatter } from "@/lib/utils";

const CartItem = () => {
  const cart = useCart();

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-2">
      {/* TODO: customize and style the cart sheet if items are in the cart*/}

      {cart.items.map((item) => {
        const price = formatter.format(item.product.totalPrice * item.quantity);

        return (
          <div key={uuidv4()} className="flex w-full justify-between gap-3">
            <div className="flex w-full flex-nowrap justify-start gap-3">
              <Image
                src={item?.product?.photo[0].url}
                alt=""
                width={100}
                height={100}
                priority
                className="aspect-square h-16 w-16"
              />

              <div className="flex flex-col justify-between gap-1">
                <p className="text-xs font-medium md:text-sm lg:text-base">
                  {item?.product?.name} - {item?.selectedSize}
                </p>

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
              <p className="text-xs md:text-sm lg:text-base">{price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
