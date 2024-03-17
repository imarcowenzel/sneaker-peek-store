"use client";

import useCart from "@/hooks/use-cart";
import CartContents from "./components/cart-contents";
import EmptyCart from "./components/empty-cart";

const CartPage = () => {

  const cart = useCart();

  return (
    <section className="flex w-full items-center justify-center px-4 py-5 md:px-8 lg:px-9 lg:py-12 xl:px-24 xl:py-20">
      <div className="flex h-fit w-full max-w-7xl flex-col gap-y-6 bg-white px-3 py-12 xl:px-28 xl:py-20">
        <h1 className="text-3xl font-semibold">Cart</h1>
        {cart.items.length > 0 ? <CartContents /> : <EmptyCart />}
      </div>
    </section>
  );
};

export default CartPage;
