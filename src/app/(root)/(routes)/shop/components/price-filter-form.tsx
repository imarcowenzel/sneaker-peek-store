"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Product } from "@/types";

export const priceFilterSchema = z.object({
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
});

type PriceFilterSchema = z.infer<typeof priceFilterSchema>;

const PriceFilterForm = ({ products }: { products: Product[] }) => {
  
  const maxPrice = Math.max(...products.map((product) => product.totalPrice));
  const minPrice = Math.min(...products.map((product) => product.totalPrice));

  const [minValue, setMinValue] = useState<number>(minPrice);
  const [maxValue, setMaxValue] = useState<number>(maxPrice);

  const form = useForm<PriceFilterSchema>({
    resolver: zodResolver(priceFilterSchema),
  });

  function handleMinInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setMinValue(value);
    form.setValue("minPrice", value);
  }

  function handleMaxInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setMaxValue(value);
    form.setValue("maxPrice", value);
  }

  function onSubmit(data: PriceFilterSchema) {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.delete("minPrice");
    searchParams.delete("maxPrice");
    if (data.minPrice) {
      searchParams.set("minPrice", data.minPrice.toString());
    }
    if (data.maxPrice) {
      searchParams.set("maxPrice", data.maxPrice.toString());
    }
    url.search = searchParams.toString();
    window.location.href = url.toString();
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
    >
      <div className="relative h-1 rounded bg-gray-300">
        <div
          className={cn(`absolute h-1 rounded bg-cyan-600`)}
          style={{
            left: `${((minValue - minPrice) / (maxPrice - minPrice)) * 100}%`,
            right: `${((maxPrice - maxValue) / (maxPrice - minPrice)) * 100}%`,
          }}
        />
      </div>
      <div className="relative">
        <input
          {...form.register("minPrice")}
          type="range"
          name="minPrice"
          min={minPrice}
          max={maxPrice}
          value={minValue}
          onChange={handleMinInputChange}
          className="range-input"
        />

        <input
          {...form.register("maxPrice")}
          type="range"
          name="maxPrice"
          min={minPrice}
          max={maxPrice}
          value={maxValue}
          onChange={handleMaxInputChange}
          className="range-input"
        />

        <div className="flex w-full items-center justify-between">
          <Button variant="default" className="text-white">
            Filter
          </Button>
          <span className="flex items-center gap-1">
            <p>Price:</p>
            <p className="font-bold">${minValue}</p>-
            <p className="font-bold">${maxValue}</p>
          </span>
        </div>
      </div>
    </form>
  );
};

export default PriceFilterForm;
