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
      className="relative whitespace-normal bg-center bg-no-repeat px-8 py-12 md:p-12"
      style={{ backgroundImage: 'url("/hero-bg.jpg")', backgroundSize }}
    >
      <div className="mx-auto flex max-w-[767px] flex-wrap md:max-w-[1024px] lg:max-w-[1200px]">
        <div className=" flex min-h-[1px] w-full">
          <div className="m-0 flex w-full flex-wrap content-start p-0 transition duration-300 md:p-3">
            <div className="my-5 w-full text-center duration-700">
              <h1
                className="w-full whitespace-nowrap text-5xl font-bold text-white md:top-10 md:text-8xl lg:top-40 lg:text-[135px]"
                style={{ textShadow: "0 0 25px rgba(47, 158, 226, 0.6)"}}
              >
                AirPro X3
              </h1>
            </div>

            <div className="mb-5 w-full  text-center transition duration-700">
              <div className="-my-14 lg:-my-24 xl:-my-80">
                <Image
                  src="/hero-shoe.png"
                  alt="Hero Image"
                  width={3000}
                  height={3000}
                  className="inline-block h-full w-3/4 max-w-full align-middle lg:w-4/5 "
                />
              </div>
            </div>

            <div
              className="lg:mt-16 w-full text-center
            "
            >
              <div className="transition">
                <Button
                  variant={"ghost"}
                  className="z-10 w-fit py-5 px-8 rounded-full bg-white text-xs shadow-lg lg:text-sm"
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
