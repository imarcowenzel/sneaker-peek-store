"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselShoes } from "@/config";

const CarouselSection = () => {
  return (
    <div className="px-30 xl:py-100 xl:pb-120 flex w-full flex-col items-center gap-y-10 py-14 md:pt-20 lg:p-12 xl:py-24">

      <div className="flex flex-col items-center font-bold italic">
        <h1 className="text-5xl lg:text-8xl">UNBELIEVABLE</h1>
        <h2 className="text-3xl lg:text-4xl">SPEED. COMFORT.</h2>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="w-full max-w-[275px] md:max-w-2xl xl:max-w-6xl 2xl:max-w-7xl">
          {carouselShoes.map((shoe) => (
            <CarouselItem
              key={shoe.key}
              className="flex flex-col md:basis-1/3 lg:basis-1/4"
            >
              <div className="relative w-full">
                <Image
                  src={shoe.photo}
                  alt={shoe.title}
                  height={1000}
                  width={1000}
                />

                <div className="flex flex-col items-center gap-y-2 bg-gray-100 py-12">
                  <p className="text-xs">{shoe.category}</p>

                  <h2 className="text-sm font-bold">{shoe.title}</h2>

                  <p className="text-xs font-bold text-green-600">
                    ${shoe.price}.00
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
