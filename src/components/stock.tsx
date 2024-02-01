import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Stock = () => {
  return (
    <div
      className="w-full bg-cover bg-center px-8 py-14 lg:p-14 lg:px-40 xl:py-36 "
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/stock.jpg')",
      }}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-y-9 text-white md:max-w-5xl md:items-center md:text-center lg:max-w-7xl">
        <h3 className="text-2xl font-bold">Limited Stock Available!</h3>
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          AirPro X3. Turbocharged.
        </h1>

        <p className="text-sm lg:text-base">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo.
        </p>

        <Button
          variant={"ghost"}
          className="flex w-fit gap-x-2 lg:gap-x-4 rounded-full bg-white px-8 py-4 text-xs text-black lg:text-sm"
        >
          <ArrowRight size={14} />
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default Stock;
