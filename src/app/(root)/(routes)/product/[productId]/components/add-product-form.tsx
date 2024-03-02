"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { MouseEventHandler, useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

const AddProductForm = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState<number>(0);

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
    cart.addItem(product);
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-x-2 pt-2">
        <RadioGroup className="flex">
          {sizes.map((size, i) => (
            <div
              key={i}
              className="flex cursor-pointer items-center justify-center space-x-2 border-[1px] px-[10px] py-[5px] text-xs transition duration-500 ease-in-out hover:border-black"
            >
              <Label htmlFor={size} className="relative text-xs">
                <RadioGroupItem
                  value={size}
                  id={size}
                  className="absolute left-0 top-0 opacity-0"
                />
                {size}
              </Label>
            </div>
          ))}
        </RadioGroup>
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
          />

          <span
            onClick={increase}
            className="flex h-9 w-9 cursor-pointer items-center justify-center border text-lg"
          >
            <PlusIcon className="h-4 w-4" />
          </span>
        </div>

        <Button onClick={onAddToCart} className="w-full uppercase">
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default AddProductForm;
