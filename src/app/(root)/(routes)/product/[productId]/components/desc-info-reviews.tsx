"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Product } from "@/types";

const DescInfoReview = ({ product }: { product: Product }) => {
  
  const [selected, setSelected] = useState<string>("description");

  function handleSelected(id: string) {
    setSelected(id);
  }

  return (
    <article className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <h3
          onClick={() => handleSelected("description")}
          className={cn(
            "cursor-pointer pt-2 text-sm font-semibold lg:text-base",
            selected === "description" && "border-t-[3px] border-cyan-600",
          )}
        >
          Description
        </h3>
        <h3
          onClick={() => handleSelected("info")}
          className={cn(
            "cursor-pointer pt-2 text-sm font-semibold lg:text-base",
            selected === "info" && "border-t-[3px] border-cyan-600 ",
          )}
        >
          Additional information
        </h3>
      </div>
      <div>
        {selected === "description" && (
          <p className="text-justify text-sm lg:text-base">
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
            sit amet a augue. Sed non neque elit sed.
          </p>
        )}
        {selected === "info" && (
          <div className="flex items-center justify-between border text-sm lg:text-base">
            <p className="w-full border-r p-2">Size</p>
            <p className="w-full p-2 tracking-widest">{product?.sizes}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default DescInfoReview;
