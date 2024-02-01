import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Stock = () => {
  return (
    <div
      className="w-full bg-cover bg-center px-8 py-14 lg:p-14 xl:py-36"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/stock.jpg')",
      }}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-y-10 text-white md:max-w-5xl md:items-center md:text-center lg:max-w-7xl">
        <h3 className="text-xl font-bold">Limited Stock Available!</h3>
        <h1 className="text-4xl md:text-5xl font-bold">AirPro X3. Turbocharged.</h1>

        <p className="text-sm">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo.
        </p>

        <Button
          variant={"ghost"}
          className="flex w-fit gap-x-2 rounded-full bg-white text-black text-xs"
        >
          <ArrowRight size={14} />
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default Stock;
