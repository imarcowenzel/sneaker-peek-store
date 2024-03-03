"use client";

import { AlertCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const Cart = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const seachParams = useSearchParams();
  const cart = useCart();
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
    return total + parseFloat(item.price);
  }, 0);

  async function onCheckout() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        { productsIds: items.map((item) => item.id) },
      );
      console.log(response);
      // window.location = response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="flex h-full min-w-[375px] justify-center bg-[#f2f4f6] px-4 py-5 md:px-8 lg:px-9 lg:py-12 xl:px-24 xl:py-20">
      <div className="flex w-full max-w-7xl flex-col gap-y-6 bg-white px-9 py-12 xl:px-28 xl:py-20">
        <h1 className="text-3xl font-semibold">Cart</h1>

        {cart.items.length === 0 ? (
          <>
            <div className="flex w-full items-center gap-x-2 border-[1px] border-cyan-600 bg-[#f4f8ff] p-4">
              <AlertCircle className="text-primary" />
              <p className="text-xs lg:text-sm">Your cart is current empty.</p>
            </div>

            <Link href="/shop">
              <Button className="rounded-full bg-gray-100 px-8 py-3 text-xs font-normal uppercase text-black lg:text-sm">
                Return to shop
              </Button>
            </Link>
          </>
        ) : (
          <>
            <table className="flex flex-col border">
              <tr className="border">
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              <tr>
                {cart.items.map((item) => (
                  <>
                    <td className="flex items-center gap-3">
                      <Image src={item.photo} alt="" width={60} height={60} />
                      {item.name}
                    </td>
                    <td>{item.price}</td>
                    <td>1</td>
                    <td>{item.price}</td>
                    <td>
                      <X />
                    </td>
                  </>
                ))}
              </tr>
            </table>

            <Link href="/shop">
              <Button
                onClick={onCheckout}
                className="rounded-full bg-gray-100 px-8 py-3 text-xs font-normal uppercase text-black lg:text-sm"
              >
                Proceed to checkout
              </Button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
