"use client";

import { X } from "lucide-react";
import Image from "next/image";

import useCart from "@/hooks/use-cart";
import { formatter } from "../../lib/utils";
import QuantityControl from "../ui/quantity-control";

const CartItem = () => {

  const cart = useCart();

  return (

    <div className="flex flex-col items-center justify-center gap-5 py-2">

      {/* TODO: customize and style the cart sheet if items are in the cart*/}

      {cart.items.map((item) => {

        const price = formatter.format(item.product.totalPrice * item.quantity)
          
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
                priority
                className="flex-[1]"
              />

              <div className="flex flex-[2] flex-col justify-between gap-1">

                <p className="text-xs font-medium md:text-sm lg:text-base">
                  {item?.product?.name}
                </p>

                <p className="text-xs font-medium md:text-sm lg:text-base">
                  Size: {item?.selectedSize}
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
