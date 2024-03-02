"use client";

import { ZoomIn } from "lucide-react";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Product } from "@/types";

const ModalProduct = ({ product }: { product: Product }) => {
  return (
    <Dialog>
      <DialogTrigger className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white">
        <ZoomIn className="h-5 w-5 text-black" />
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader>
          <DialogDescription>
            <Image
              src={product.photo}
              alt={product.name}
              height={1200}
              width={1200}
              className="h-full w-full"
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalProduct;
