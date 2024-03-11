import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const PriceFilterForm = () => {
  const form = useForm();

  return (
    // TODO
    <Form {...form}>
      <form className="flex gap-3">
        <FormField
          name="minPrice"
          render={({ field }) => (
            <Input {...field} type="number" placeholder="Min" />
          )}
        />
        <FormField
          name="maxPrice"
          render={({ field }) => (
            <Input {...field} type="number" placeholder="Max" />
          )}
        />
        <Button variant="default" className="text-white">
          Filter
        </Button>
      </form>
    </Form>
  );
};

export default PriceFilterForm;
