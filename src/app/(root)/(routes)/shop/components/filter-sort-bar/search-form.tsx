"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const searchSchema = z.object({
  query: z.string().min(2),
});

type SearchSchema = z.infer<typeof searchSchema>;

const SearchForm = () => {

  const form = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
  });

  function onSubmit(data: SearchSchema) {
    console.log(data);
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.set("query", data.query);
    url.search = searchParams.toString();
    window.location.href = url.toString();
  }

  return (
    <Form {...form}>
      <form className="flex gap-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Search a product..."
                  className="placeholder:text-xs lg:placeholder:text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="text-white">Search</Button>
      </form>
    </Form>
  );
};

export default SearchForm;
