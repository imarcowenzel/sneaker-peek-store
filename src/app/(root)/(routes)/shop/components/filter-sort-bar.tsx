"use client";

import { Settings2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import ActiveFilter from "./active-filter";
import PriceFilterForm from "./price-filter-form";
import SortForm from "./sort-form";

const FilterSortBar = ({ products }: { products: Product[] }) => {
  const [showFilterSortBar, setShowFilterSortBar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Filter products by running shoes category
  const runningCategory = products?.filter(
    (product) => product.category.toLowerCase() === "running shoes",
  );

  // Handle scroll event to show/hide the filter bar
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScrollY =
      document.documentElement.scrollHeight - window.innerHeight;

    if (scrollPosition >= maxScrollY) {
      setShowFilterSortBar(false);
    } else {
      setShowFilterSortBar(true);
    }

    setPrevScrollPos(scrollPosition);
  };



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
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
                  handePriceDelete
                  <h1 className="text-left text-xl font-bold">
                    Product categories
                  </h1>
                  <div className="flex w-full items-center justify-between text-sm">
                    <p className="text-secondary">Running shoes</p>
                    <p>({runningCategory?.length})</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <h1 className="text-left text-xl font-bold">
                    Filter by price
                  </h1>
                  <PriceFilterForm />
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <SortForm />
        </div>
      </div>
      <ActiveFilter />
    </>
  );
};

export default FilterSortBar;
