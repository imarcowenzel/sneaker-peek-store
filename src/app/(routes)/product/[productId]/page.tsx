import NotFound from "@/app/not-found";
import { shoesData } from "@/config";
import Image from "next/image";
import React from "react";

const Product = ({ params }: { params: { productId: number } }) => {
  const selectedShoe = shoesData.find((shoe) => shoe.key == params.productId);

  if (!selectedShoe) {
    return <NotFound />;
  }

  return (
    <main className="flex items-center justify-center bg-[#f2f4f6] h-full min-w-[375px]">

      <div className="flex flex-col gap-y-7 bg-white px-5 py-5 md:px-8 lg:flex-row lg:gap-x-7 lg:px-9 lg:py-12 xl:px-24 xl:py-20">

        <div>
          {/* TODO: lupa */}
          <Image
            src={selectedShoe.photo}
            alt={selectedShoe.title}
            height={1200}
            width={1200}
            className="h-full"
          />
        </div>
        <div className="flex flex-col gap-y-3 lg:gap-y-4">
          <p className="text-sm text-cyan-600 lg:text-base">
            {selectedShoe.category}
          </p>
          <h1 className="text-3xl font-black">{selectedShoe.title}</h1>
          <h3 className="text-xl lg:text-2xl">${selectedShoe.price}.00 </h3>
          <p className="text-justify text-sm lg:text-base">
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
            sit amet a augue. Sed non neque elit sed.
          </p>
          <form action="">
            <div className="flex gap-x-2 pt-2">
              {selectedShoe.sizes.map((size) => (
                <div className="flex min-h-[24px] min-w-[24px] cursor-pointer items-center justify-center border-[1px] border-[#00000020] bg-white">
                  <p className="text-xs">{size}</p>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Product;
