"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const SearchForm = () => {
  const form = useForm();

  function onSubmit(data: any) {
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
                <Input {...field} placeholder="Search a product..." />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="text-white">Search</Button>
      </form>
    </Form>
  );
};

export default SearchForm;
