"use client";

import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import useCart from "@/hooks/use-cart";
import CartItem from "./cart-item";
import Summary from "./summary";

const CartContents = () => {
    
  const user = useAuth();
  const router = useRouter();

  const cart = useCart();
  const items = useCart((state) => state.items);

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
    <div className="flex w-full flex-col gap-5 lg:flex-row">
      <div className="w-full border">
        {cart.items.map((item) => (
          <CartItem key={uuidv4()} item={item} />
        ))}
      </div>
      <Summary onCheckout={onCheckout} />
    </div>
  );
};

export default CartContents;
