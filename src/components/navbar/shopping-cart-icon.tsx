import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ShoppingCartIcon = () => {
  return (
    <Sheet>
      <SheetTrigger className="relative flex items-center gap-x-2 font-bold text-cyan-600">
        <ShoppingBag />
        <p className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-600 p-1 text-[10px] text-white">
          {/* TODO: dynamic number o cart */}0
        </p>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <SheetHeader>
          <SheetTitle className="font-normal">Shopping cart</SheetTitle>
          <Separator className="h-[2px]" />
        </SheetHeader>
        <SheetDescription className="p-2 flex justify-center items-center">
        {/* TODO: customize and style the cart sheet if a item is at the cart*/}
          No products in the cart.
        </SheetDescription>
        <Button variant={"ghost"} className="hover:bg-gray-600 hover:text-white w-full">
          {/* TODO: customize and style the cart sheet if a item is at the cart*/}
          CONTINUE SHOPPING
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartIcon;
