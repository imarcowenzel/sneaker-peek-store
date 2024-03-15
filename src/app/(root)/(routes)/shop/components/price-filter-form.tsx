"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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

  const progressStyle = {
    left: `${((minValue - minPrice) / (maxPrice - minPrice)) * 100}%`,
    right: `${((maxPrice - maxValue) / (maxPrice - minPrice)) * 100}%`,
  };

  const form = useForm<PriceFilterSchema>({
    resolver: zodResolver(priceFilterSchema),
  });

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
    // window.location.href = url.toString();
  }

  return (
    // TODO
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3">
          <FormField
            name="minPrice"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    value={minValue}
                    placeholder="Min"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="maxPrice"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    value={maxValue}
                    placeholder="Max"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="default" className="text-white">
            Filter
          </Button>
        </form>
      </Form>
      <div className="relative h-1 rounded bg-gray-300">
        <div
          className={cn(`absolute h-1 rounded bg-cyan-600`)}
          style={progressStyle}
        />
      </div>
      <div className="relative">
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          defaultValue={minPrice}
          onChange={(e) => setMinValue(parseInt(e.target.value))}
          className="range-input"
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          defaultValue={maxPrice}
          onChange={(e) => setMaxValue(parseInt(e.target.value))}
          className="range-input"
        />
      </div>
    </>
  );
};
0;
export default PriceFilterForm;
