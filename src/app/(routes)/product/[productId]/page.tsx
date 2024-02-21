"use client";

import { ZoomIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import NotFound from "@/app/not-found";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { shoesData } from "@/config";

const Product = ({ params }: { params: { productId: number } }) => {

  const selectedShoe = shoesData.find((shoe) => shoe.key == params.productId);

  if (!selectedShoe) {
    return <NotFound />;
  }

  return (
    <main className="mx-auto flex max-w-full items-center justify-center lg:max-w-7xl">
      <div className="w-full lg:my-16">
        <div className="flex flex-col gap-y-14 bg-white px-6 py-5 md:px-8 lg:px-9 lg:py-14 xl:px-24 xl:py-20">
          <section className="flex w-full flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
            <div className="relative flex-1">
              {/* TODO: zoom effect */}

              <Dialog>
                <DialogTrigger className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white">
                  <ZoomIn className="h-5 w-5 text-black" />
                </DialogTrigger>
                <DialogContent className="p-0">
                  <DialogHeader>
                    <DialogDescription>
                      <Image
                        src={selectedShoe.photo}
                        alt={selectedShoe.title}
                        height={1200}
                        width={1200}
                        className="h-full w-full"
                      />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <Image
                src={selectedShoe.photo}
                alt={selectedShoe.title}
                height={1200}
                width={1200}
                className="h-full"
              />
            </div>

            <div className="flex flex-1 flex-col gap-y-3 lg:gap-y-4">
              <p className="text-sm text-cyan-600 lg:text-base">
                {selectedShoe.category}
              </p>
              <h1 className="text-3xl font-bold text-gray-800">
                {selectedShoe.title}
              </h1>
              <div className="flex items-center gap-x-2">
                <h3 className="text-xl font-semibold text-gray-800 lg:text-2xl">
                  ${selectedShoe.price}.00{" "}
                </h3>
                <p className="text-sm">+ Free Shipping</p>
              </div>
              <p className="text-justify text-sm leading-7 lg:text-base">
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit
                sed.
              </p>

              <form className="space-y-8">
                <div className="flex gap-x-2 pt-2">
                  <RadioGroup className="flex">
                    {selectedShoe.sizes.map((size, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center space-x-2 border-[1px] px-3 py-2 transition duration-500 ease-in-out hover:border-black"
                      >
                        <Label
                          htmlFor={JSON.stringify(size)}
                          className="relative "
                        >
                          <RadioGroupItem
                            value={JSON.stringify(size)}
                            id={JSON.stringify(size)}
                            className="absolute left-0 top-0 opacity-0"
                          />
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <Separator />
             
                <Button type="submit" className="w-full uppercase">
                  Add to cart
                </Button>
              </form>

              <Separator />
              <div className="flex items-center gap-x-6 text-xs lg:text-sm">
                <p className="uppercase">sku: n/a</p>
                <div className="flex gap-x-1 text-xs">
                  <p>Category:</p>
                  <Link href="/" className="text-cyan-600">
                    Running Shoes
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section></section>
        </div>
      </div>
    </main>
  );
};

export default Product;
