"use client";

import { Settings2 } from "lucide-react";
import { useEffect, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import PriceFilterForm from "./price-filter-form";
import SearchForm from "./search-form";
import SortForm from "./sort-form";

const FilterSortBar = ({ products }: { products: Product[] }) => {
  
  const [showFilterSortBar, setShowFilterSortBar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const runningCategory = products?.filter(
    (product) => product.category.toLowerCase() === "running shoes",
  );

  // Function to handle scroll event
  function handleScroll() {
    const currentScrollYPosition = window.scrollY;

    const maxScrollYPosition =
      document.documentElement.scrollHeight - window.innerHeight;

    // Hide the filter and sort bar when scrolled to the bottom
    if (currentScrollYPosition >= maxScrollYPosition) {
      setShowFilterSortBar(false);
    } else {
      setShowFilterSortBar(true);
    }

    // Update previous scroll position
    setPrevScrollPos(currentScrollYPosition);
  }

  // Effect to add and remove scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 w-full md:static",
        showFilterSortBar ? "block" : "hidden",
      )}
    >

      <div className="flex w-full items-center justify-between border-[1px] border-black border-opacity-10 bg-[#f8f8f8] px-5 py-3 md:border-none md:bg-transparent md:p-0">

        <Sheet>

          <SheetTrigger className="flex items-center justify-between gap-x-2 rounded-full px-4 py-2 text-sm font-medium uppercase hover:bg-gray-700 hover:text-[#f2f4f6]">
            <Settings2 size={14} />
            Filter
          </SheetTrigger>

          <SheetContent side={"left"}>
            <div className="flex flex-col gap-9 pt-5">
              <div className="flex flex-col gap-5">
                <h1 className="text-left text-xl font-bold">Search products</h1>
                <SearchForm />
              </div>
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
                <PriceFilterForm products={products} />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <SortForm />
      </div>
    </div>
  );
};

export default FilterSortBar;
