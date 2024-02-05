import { shoesData } from "@/config";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter, Grid2X2, Settings2, TableProperties } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Shop = () => {
  return (
    <div className="mx-auto max-w-full bg-[#f2f4f6] px-5 text-center">
      <div className="my-0 w-full py-5">
        <div className="fixed bottom-0 left-0 right-0 z-50 w-full md:static ">
          <div className="md:border-none flex w-full items-center justify-between border-[1px] border-black border-opacity-10 bg-[#f8f8f8] px-5 py-3 md:bg-transparent">
            <div>
              <Sheet>
                <SheetTrigger className="flex items-center justify-between gap-x-2 text-sm">
                  <Settings2 size={14} /> FILTER
                </SheetTrigger>
                <SheetContent side={"left"}>
                  <SheetHeader>
                    <SheetTitle>Product categories</SheetTitle>
                    <SheetDescription>Running shoes</SheetDescription>
                    <SheetTitle>Filter by price</SheetTitle>
                    <SheetDescription>Running shoes</SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div className="flex items-center gap-x-5">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Default sorting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Sort by popularity</SelectItem>
                  <SelectItem value="rating">Sort by average rating</SelectItem>
                  <SelectItem value="latest">Sort by latest</SelectItem>
                  <SelectItem value="low">
                    Sort by price: low to high
                  </SelectItem>
                  <SelectItem value="high">
                    Sort by price: high to low
                  </SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-x-1">
                <Grid2X2 size={20} className="text-gray-700 cursor-pointer"/>
                <TableProperties size={20} className="text-gray-700 cursor-pointer"/>
              </div>
            </div>
          </div>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-x-5 sm:grid-cols-3 md:grid-cols-4">
          {shoesData.map((shoe) => (
            <li
              key={shoe.key}
              className="mb-9 flex w-full flex-col gap-y-3 pb-4"
            >
              <Link href="/">
                <Image
                  src={shoe.photo}
                  alt={shoe.title}
                  height={500}
                  width={500}
                />
              </Link>
              <div className="flex flex-col gap-y-1 px-4">
                <p className="text-xs text-gray-400">{shoe.category}</p>
                <Link href="/" className="text-sm font-black">
                  {shoe.title}
                </Link>
                <p className="text-xs font-bold">${shoe.price}.00</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
