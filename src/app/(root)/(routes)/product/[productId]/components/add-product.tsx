"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { MouseEventHandler, useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/use-cart";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import Link from "next/link";

const AddProduct = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSize] = useState<string | null>(null);

  function increase() {
    setQuantity((prev) => Math.min(prev + 1, 100));
  }

  function decrease() {
    setQuantity((prev) => Math.max(prev - 1, 0));
  }

  const cart = useCart();
  const sizes = product.sizes.split(",");

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    const selectedProduct = {
      product,
      quantity,
      selectedSize,
    };

    cart.addItem(selectedProduct);
  };

  return (
    <div className="flex flex-col gap-4">

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 pt-2">
          {sizes.map((size, i) => (
            <div
              key={i}
              className={cn(
                "flex cursor-pointer items-center justify-center space-x-2 border-[1px] px-[10px] py-[5px] text-xs transition duration-500 ease-in-out hover:border-black",
                size === selectedSize && "border-black",
              )}
              onClick={() => setSize(size)}
            >
              {size}
            </div>
          ))}
        </div>
        {selectedSize !== null && (
          <p
            onClick={() => setSize(null)}
            className="cursor-pointer text-xs uppercase"
          >
            Clear
          </p>
        )}
      </div>

      <Separator />

      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <span
            onClick={decrease}
            className="flex h-9 w-9 cursor-pointer items-center justify-center border text-lg"
          >
            <MinusIcon className="h-4 w-4" />
          </span>

          <input
            type="number"
            pattern="^[0-9]+$"
            className="flex h-9 w-9 items-center justify-center border text-center text-sm outline-none"
            value={quantity}
            max={100}
            readOnly
            onChange={(e) => setQuantity(parseFloat(e.target.value))}
          />

          <span
            onClick={increase}
            className="flex h-9 w-9 cursor-pointer items-center justify-center border text-lg"
          >
            <PlusIcon className="h-4 w-4" />
          </span>
        </div>

        <Button
          onClick={onAddToCart}
          disabled={selectedSize === null}
          className="w-full uppercase"
          variant="secondary"
        >
          Add to cart
        </Button>

        {cart.items.length > 0 && (
          <Link
            href="/cart"
            className="text-sm text-secondary hover:text-primary md:text-base"
          >
            <p className="w-fit whitespace-nowrap">View cart</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
