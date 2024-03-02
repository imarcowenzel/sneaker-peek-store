"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/types";

const Carousel = ({ products }: { products: Product[] }) => {
  
  return (
    <article className="flex w-full flex-col items-center px-8 pb-14 pt-5 md:p-14 lg:px-0 lg:pb-32 lg:pt-24">

      <div className="flex w-full max-w-3xl flex-col items-center gap-y-5 md:max-w-5xl md:gap-y-8 lg:max-w-7xl lg:gap-y-14">

        <div className="flex flex-col items-center font-black uppercase italic text-gray-700">
          <h1 className="text-5xl md:text-8xl lg:text-9xl">unbelievable</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">speed. comfort.</h2>
        </div>

        <CarouselContainer
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="w-full max-w-[285px] md:max-w-xl md:gap-y-5 lg:max-w-3xl xl:max-w-6xl">
            {products &&
              products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="flex flex-col md:basis-1/3 lg:basis-1/4"
                >
                  {/* TODO: dynamic link to shoes */}
                  <Link href={"/"} className="w-full">
                    <Image
                      src={product.photo}
                      alt={product.name}
                      height={400}
                      width={400}
                    />

                    <div className="flex flex-col items-center gap-y-2 bg-gray-100 py-12">
                      <p className="text-xs">{product.category}</p>
                      <h2 className="text-sm font-bold">{product.name}</h2>
                      <p className="text-xs font-bold text-green-600">
                        ${product.price}.00
                      </p>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </CarouselContainer>
      </div>
    </article>
  );
};

export default Carousel;
