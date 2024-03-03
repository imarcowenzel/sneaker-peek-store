"use client";

import { Settings2 } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Product } from "@/types";
import PriceFilterForm from "./price-filter-form";

const FilterSortBar = ({ products }: { products: Product[] }) => {
  
  const runningCategory = products.filter(
    (product) => product.category.toLowerCase() === "running shoes",
  );

  return (
    // TODO
    <div className="fixed bottom-0 left-0 right-0 z-40 w-full md:static ">
      <div className="flex w-full items-center justify-between border-[1px] border-black border-opacity-10 bg-[#f8f8f8] px-5 py-3 md:border-none md:bg-transparent md:p-0">
        <Sheet>
          <SheetTrigger className="flex items-center justify-between gap-x-2 rounded-full px-4 py-2 text-sm font-medium uppercase text-gray-700 hover:bg-gray-700 hover:text-[#f2f4f6]">
            <Settings2 size={14} />
            Filter
          </SheetTrigger>

          <SheetContent side={"left"}>
            {/* TODO: customize */}
            <div className="flex flex-col gap-9 pt-5">
              <div className="flex flex-col gap-5">
                <h1 className="text-left text-xl font-bold">
                  Product categories
                </h1>
                <div className="flex w-full items-center justify-between text-sm">
                  <p className="text-primary">Running shoes</p>
                  <p>({runningCategory.length})</p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-left text-xl font-bold">Filter by price</h1>
                <PriceFilterForm />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-x-5">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Default sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Sort by popularity</SelectItem>
              <SelectItem value="latest">Sort by latest</SelectItem>
              <SelectItem value="low">Sort by price: low to high</SelectItem>
              <SelectItem value="high">Sort by price: high to low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterSortBar;
