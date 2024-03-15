"use client";

import { Settings2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Product } from "@/types";
import PriceFilterForm from "./price-filter-form";

enum SortBy {
  Latest = "createdAt",
  Low = "totalPrice",
  High = "totalPrice",
}

interface FilterSortBarProps {
  products: Product[];
}

const FilterSortBar: React.FC<FilterSortBarProps> = ({ products }) => {

  const [defaultOption, setDefaultOption] = useState<string>("Sort by");
  const searchParams = useSearchParams();

  useEffect(() => {

    const sortBy = searchParams.get("sortBy");

    switch (sortBy) {
      case SortBy.Latest:
        setDefaultOption("Sort by latest");
        break;
      case SortBy.Low:
        setDefaultOption("Sort by price: low to high");
        break;
      case SortBy.High:
        setDefaultOption("Sort by price: high to low");
        break;
      default:
        break;
    }

  }, [searchParams]);

  const runningCategory = products?.filter(
    (product) => product.category.toLowerCase() === "running shoes",
  );

  const updateSearchParams = (sortBy: SortBy, order: string) => {
    const url = new URL(window.location.href);
    const searchParams = new URLSearchParams(url.search);
    searchParams.delete("sortBy");
    searchParams.delete("order");
    searchParams.set("sortBy", sortBy);
    searchParams.set("order", order);
    url.search = searchParams.toString();
    window.location.href = url.toString();
  };

  const handleSortChange = (option: string) => {
    switch (option) {
      case "latest":
        updateSearchParams(SortBy.Latest, "asc");
        break;
      case "low":
        updateSearchParams(SortBy.Low, "asc");
        break;
      case "high":
        updateSearchParams(SortBy.High, "desc");
        break;
      default:
        break;
    }
  };

  return (
    
    <div className="fixed bottom-0 left-0 right-0 z-40 w-full md:static ">
      <div className="flex w-full items-center justify-between border-[1px] border-black border-opacity-10 bg-[#f8f8f8] px-5 py-3 md:border-none md:bg-transparent md:p-0">
        <Sheet>
          <SheetTrigger className="flex items-center justify-between gap-x-2 rounded-full px-4 py-2 text-sm font-medium uppercase hover:bg-gray-700 hover:text-[#f2f4f6]">
            <Settings2 size={14} />
            Filter
          </SheetTrigger>

          <SheetContent side={"left"}>
            <div className="flex flex-col gap-9 pt-5">
              <div className="flex flex-col gap-5">
                <h1 className="text-left text-xl font-bold">
                  Product categories
                </h1>
                <div className="flex w-full items-center justify-between text-sm">
                  <p className="text-secondary">Running shoes</p>
                  <p>({runningCategory?.length})</p>
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
          <Select onValueChange={(e) => handleSortChange(e)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={defaultOption} />
            </SelectTrigger>
            <SelectContent>
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
