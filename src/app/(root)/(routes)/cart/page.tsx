"use client";

import { AlertCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const Cart = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const seachParams = useSearchParams();
  const cart = useCart();
  const router = useRouter();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (seachParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (seachParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [seachParams, removeAll]);

  if (!isMounted) {
    return null;
  }

  const totalPrice = items.reduce((total, item) => {
    return total + parseFloat(item.product.price);
  }, 0);

  async function onCheckout() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        { productsIds: items.map((item) => item.product.id) },
      );
      console.log(response);
      // window.location = response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="flex items-center justify-center px-4 py-5 md:px-8 lg:px-9 lg:py-12 xl:px-24 xl:py-20">
      <div className="flex h-fit w-full max-w-7xl flex-col gap-y-6 bg-white px-3 py-12 xl:px-28 xl:py-20">
        <h1 className="text-3xl font-semibold">Cart</h1>

        {cart.items.length === 0 ? (
          <>
            <div className="flex w-full items-center gap-x-2 border-[1px] border-cyan-600 bg-[#f4f8ff] p-4">
              <AlertCircle className="text-primary" />
              <p className="text-xs lg:text-sm">Your cart is current empty.</p>
            </div>

            <Button
              onClick={() => router.push("/shop")}
              className="rounded-full bg-gray-100 px-8 py-3 text-xs font-normal uppercase text-black lg:text-sm"
            >
              Return to shop
            </Button>
          </>
        ) : (
          <>
            {cart.items.map((item) => (
              <div className="border">
                <div className="flex justify-end border-b p-4">
                  <button onClick={() => cart.removeItem(item.product.id, item.selectedSize)}>
                    <X width={14} height={14} />
                  </button>
                </div>
                <div className="flex items-center justify-center border-b py-2">
                  <Image src={item.product.photo} alt="" height={70} width={70} />
                </div>
                <div className="flex items-center justify-between border-b  p-4 text-sm">
                  <p className="font-bold">Product:</p>
                  <p className="text-primary">{item.product.name}</p>
                </div>
                <div className="flex items-center justify-between border-b  p-4 text-sm">
                  <p className="font-bold">Price:</p>
                  <p>${item.product.price}.00</p>
                </div>
                <div className="flex items-center justify-between border-b  p-4 text-sm">
                  <p className="font-bold">Quantity:</p>
                  {/* TODO: dynamic */}
                  <p>1</p>
                </div>
                <div className="flex items-center justify-between p-4 text-sm">
                  <p className="font-bold">Subtotal:</p>
                  {/* TODO: dynamic */}
                  <p>${item.product.price}.00</p>
                </div>
              </div>
            ))}

            <div className="border">
              <div className="flex justify-start border-b bg-gray-200 p-4">
                <h1 className="font-bold ">Cart total</h1>
              </div>

              <div className="flex items-center justify-between border-b  p-4 text-sm">
                <p className="font-bold">Total:</p>
                {/* TODO: dynamic */}
                <p>$50.00</p>
              </div>
              <div className="flex items-center justify-center border-b  p-4 text-sm">
                <Button
                  onClick={onCheckout}
                  className="rounded-full bg-gray-100 px-8 py-3 text-xs font-normal uppercase text-black lg:text-sm"
                >
                  Proceed to checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
