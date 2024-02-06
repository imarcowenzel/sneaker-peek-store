import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ButtonLink from "../button-link";

const LimitedStockBanner = () => {
  return (
    <div
      className="w-full bg-cover bg-center px-8 py-14 lg:bg-fixed lg:px-40 xl:py-36 2xl:p-14"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/stock.jpg')",
      }}
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-y-9 text-white md:max-w-5xl md:items-center md:text-center lg:max-w-7xl">
        <h3 className="text-2xl font-black">Limited Stock Available!</h3>
        <h1 className="text-4xl font-black md:text-5xl lg:text-6xl">
          AirPro X3. Turbocharged.
        </h1>
        <p className="text-justify text-sm leading-7 md:px-12 md:text-center lg:text-base 2xl:px-64">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo.
        </p>

        <ButtonLink href="/shop" className="text-black hover:bg-cyan-600">
          SHOP NOW
        </ButtonLink>
      </div>
    </div>
  );
};

export default LimitedStockBanner;
