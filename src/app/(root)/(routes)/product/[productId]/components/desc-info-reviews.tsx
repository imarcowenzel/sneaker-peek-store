"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const DescInfoReview = () => {
  const [selected, setSelected] = useState<string>("description");

  function handleSelected(id: string) {
    setSelected(id);
  }

  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-end">
        <h3
          onClick={() => handleSelected("description")}
          className={cn(
            "cursor-pointer text-sm font-semibold lg:text-base pt-1",
            selected === "description" && "border-t-[3px] border-cyan-600",
          )}
        >
          Description
        </h3>
        <h3
          onClick={() => handleSelected("info")}
          className={cn(
            "cursor-pointer text-sm font-semibold lg:text-base pt-1",
            selected === "info" && "border-t-[3px] border-cyan-600 ",
          )}
        >
          Additional information
        </h3>
        <h3
          onClick={() => handleSelected("reviews")}
          className={cn(
            "cursor-pointer text-sm font-semibold lg:text-base pt-1",
            selected === "reviews" && "border-t-[3px] border-cyan-600 ",
          )}
        >
          Reviews (0)
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
          <p className="text-justify text-sm lg:text-base">Sizes</p>
        )}
        {selected === "reviews" && (
          <p className="text-justify text-sm lg:text-base">Reviews</p>
        )}
      </div>
    </section>
  );
};

export default DescInfoReview;
