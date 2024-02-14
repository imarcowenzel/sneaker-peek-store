import NotFound from "@/app/not-found";
import { shoesData } from "@/config";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";

const Product = ({ params }: { params: { productId: number } }) => {
  const selectedShoe = shoesData.find((shoe) => shoe.key == params.productId);

  if (!selectedShoe) {
    return <NotFound />;
  }

  return (
    <main className="mx-auto flex max-w-full items-center justify-center lg:max-w-7xl">
      <div className="w-full lg:my-16">
        <div className="flex flex-col bg-white px-6 py-5 md:px-8 lg:px-9 lg:py-14 xl:px-24 xl:py-20">
          <section className="flex w-full flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
            <div className="relative flex-1">
              {/* TODO: zoom effect */}

              <Dialog>
                <DialogTrigger className="absolute right-4 top-4 h-9 w-9 flex items-center justify-center rounded-full bg-white">
                  <ZoomIn className="w-5 h-5 text-black" />
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
              <form action="">
                <div className="flex gap-x-2 pt-2">
                  {selectedShoe.sizes.map((size, i) => (
                    <div
                      key={i}
                      className="flex min-h-[24px] min-w-[24px] cursor-pointer items-center justify-center border-[1px] border-[#00000020] bg-white"
                    >
                      <p className="text-xs">{size}</p>
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Product;
