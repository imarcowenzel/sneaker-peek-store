"use client";

import { Grid2X2, Settings2, TableProperties } from "lucide-react";

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
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const FilterSortBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 w-full md:static ">
      <div className="flex w-full items-center justify-between border-[1px] border-black border-opacity-10 bg-[#f8f8f8] px-5 py-3 md:border-none md:bg-transparent md:p-0">
        <Sheet>
          <SheetTrigger className="flex items-center justify-between gap-x-2 rounded-full px-4 py-2 text-sm font-bold text-gray-800 hover:bg-gray-800 hover:text-[#f2f4f6]">
            <Settings2 size={14} /> FILTER
          </SheetTrigger>

          <SheetContent side={"left"}>
            {/* TODO: customize */}
            <SheetHeader>
              <SheetTitle>Product categories</SheetTitle>
              <SheetDescription>Running shoes</SheetDescription>
              <SheetTitle>Filter by price</SheetTitle>
              <SheetDescription>Running shoes</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-x-5">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Default sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Sort by popularity</SelectItem>
              <SelectItem value="rating">Sort by average rating</SelectItem>
              <SelectItem value="latest">Sort by latest</SelectItem>
              <SelectItem value="low">Sort by price: low to high</SelectItem>
              <SelectItem value="high">Sort by price: high to low</SelectItem>
            </SelectContent>
          </Select>

          {/* TODO: MAKE DYNAMIC */}
          <div className="flex gap-x-1">
            <Grid2X2 size={20} className="cursor-pointer text-gray-700" />
            <TableProperties
              size={20}
              className="cursor-pointer text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSortBar;
