"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const [backgroundSize, setBackgroundSize] = useState("cover");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && window.innerWidth < 1024) {
        setBackgroundSize("1100px auto");
      } else {
        setBackgroundSize("cover");
      }
    };

    // Adiciona o event listener quando o componente é montado
    handleResize();

    window.addEventListener("resize", handleResize);

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="bg-center bg-no-repeat px-8 py-12 md:p-12 lg:bg-scroll"
      style={{ backgroundImage: 'url("/hero-bg.jpg")', backgroundSize }}
    >

      <div className="m-0 flex min-h-[1px] w-full max-w-[767px] flex-wrap content-start p-0 transition duration-300 md:max-w-[1024px] md:p-3 lg:max-w-[1200px]">

        {/* TITLE */}
        <div className="mb-5 w-full text-center duration-700">
          <h1
            className="w-full whitespace-nowrap text-6xl font-bold text-white md:top-36 md:text-8xl lg:top-40 lg:text-[135px]"
            style={{ textShadow: "0 0 25px rgba(47, 158, 226, 0.6)" }}
          >
            AirPro X3
          </h1>
        </div>

        {/* IMAGE */}
        <div className="-my-14 mb-5 w-full text-center transition duration-700 lg:-my-24 xl:-my-80">
          <Image
            src="/hero-shoe.png"
            alt="Hero Image"
            width={2000}
            height={2000}
            className="inline-block h-auto w-3/4 max-w-full align-middle lg:w-4/5 "
          />
        </div>

        {/* BUTTON */}
        <div className="w-full text-center transition lg:mt-16">
          <Button
            variant={"ghost"}
            className="z-10 w-fit rounded-full bg-white px-8 py-5 text-xs shadow-lg lg:text-sm"
          >
            <Link
              href="/shop"
              className="flex justify-between gap-x-4 rounded-full"
            >
              <ArrowRightIcon size={13} />
              SHOP COLLECTION
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
