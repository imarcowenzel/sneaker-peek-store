import { ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const ShoppingCartIcon = () => {
  return (
    <Sheet>
      <SheetTrigger className="relative flex items-center gap-x-2 font-bold text-cyan-600">
        <ShoppingBag />
        <p className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-600 p-1 text-[10px] text-white">
          0
        </p>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping cart</SheetTitle>
        </SheetHeader>
        <SheetDescription>No products in the cart.</SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartIcon;
