"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { MouseEventHandler, useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { cn } from "@/lib/utils";

const AddProductForm = ({ product }: { product: Product }) => {
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
      productId: product.id,
      quantity,
      selectedSize,
    };
    console.log(selectedProduct);
    // cart.addItem(product);
  };

  return (
    <div className="space-y-8">
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
      </div>
    </div>
  );
};

export default AddProductForm;
