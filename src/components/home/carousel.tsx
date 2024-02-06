"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { shoesData } from "@/config";

const HomeCarousel = () => {

  return (

    <div className="flex w-full flex-col items-center gap-y-10 px-8 pb-14 pt-5 md:p-14 xl:px-0 xl:pb-32 xl:pt-24">

      <div className="flex flex-col items-center font-black italic text-gray-700">
        <h1 className="text-5xl md:text-7xl lg:text-9xl">UNBELIEVABLE</h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl">SPEED. COMFORT.</h2>
      </div>

      <Carousel
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
        <CarouselContent className="w-full max-w-[275px] md:max-w-2xl xl:max-w-6xl 2xl:max-w-7xl">
          {shoesData.map((shoe) => (
            <CarouselItem
              key={shoe.key}
              className="flex flex-col md:basis-1/3 lg:basis-1/4"
            >
              {/* TODO: dynamic link to shoes */}
              <Link href={"/"} className="relative w-full">
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
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
