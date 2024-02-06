"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import ButtonLink from "../button-link";

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

    // Add the event listener when the components is mounted
    handleResize();

    window.addEventListener("resize", handleResize);

    // Remove the event listener when components is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <article
      className="flex w-full justify-center bg-center bg-no-repeat px-8 py-12 md:p-12"
      style={{ backgroundImage: 'url("/hero-bg.jpg")', backgroundSize }}
    >
      <div className="flex w-full max-w-[767px] flex-col items-center md:max-w-[1024px] lg:max-w-[1200px]">
        <h1
          className="text-6xl font-black text-white md:text-[110px] lg:text-[150px]"
          style={{ textShadow: "0 0 25px rgba(47, 158, 226, 0.6)" }}
        >
          AirPro X3
        </h1>

        <Image
          src="/hero-shoe.png"
          alt="Hero Image"
          width={2000}
          height={2000}
          className="-mt-10 w-3/4 max-w-full md:-mt-20 lg:-mt-64 lg:w-4/5 "
        />

        <ButtonLink href="/shop" className="lg:-mt-40"> 
          SHOP COLLECTION
        </ButtonLink>
      </div>
    </article>
  );
};

export default Hero;
