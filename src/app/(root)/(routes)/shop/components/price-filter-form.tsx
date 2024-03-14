"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

export const priceFilterSchema = z.object({
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
});

type PriceFilterSchema = z.infer<typeof priceFilterSchema>;

const PriceFilterForm = () => {
  const searchParams = useSearchParams();

  const form = useForm<PriceFilterSchema>({
    resolver: zodResolver(priceFilterSchema),
  });

  function onSubmit(data: PriceFilterSchema) {
    console.log(data);
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
    // TODO
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-3">
        <FormField
          name="minPrice"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} type="number" placeholder="Min" />
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
                <Input {...field} type="number" placeholder="Max" />
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
  );
};
0;
export default PriceFilterForm;
