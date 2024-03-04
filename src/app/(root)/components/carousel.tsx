"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Product } from "@/types";
import ProductItem from "./carousel-item";

const Carousel = ({ products }: { products: Product[] }) => {

  

  return (
    <article className="flex w-full flex-col items-center px-8 pb-14 pt-5 md:p-14 lg:px-0 lg:pb-32 lg:pt-24 bg-white">

      <div className="flex w-full max-w-3xl flex-col items-center gap-y-5 md:max-w-5xl md:gap-y-8 lg:max-w-7xl lg:gap-y-14">

        <div className="flex flex-col items-center font-bold uppercase italic text-gray-700">
          <h1 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl">Unbelievable</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Speed. Comfort.</h2>
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
              products.map((product) => <ProductItem key={product.id} product={product} />)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />

        </CarouselContainer>
      </div>
    </article>
  );
};

export default Carousel;
