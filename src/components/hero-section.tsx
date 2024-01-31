import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  const divStyle = {
    backgroundImage: 'url("/hero-bg.jpg")',
    backgroundSize: "cover", // valor padrão
  };

  return (
    <div
      className="h-full bg-cover bg-center bg-no-repeat"
      style={divStyle}
    >
      <div className="relative flex w-full max-w-[767px] items-center justify-center md:w-auto md:max-w-[1023px]">
        <h1
          className="absolute top-4 w-full whitespace-nowrap text-center text-5xl font-bold text-white duration-700 md:top-10 md:text-8xl lg:top-40 lg:text-[135px]"
          style={{ textShadow: "0 0 25px rgba(47, 158, 226, 0.3)" }}
        >
          AirPro X3
        </h1>
        <Image
          src="/hero-shoe.png"
          alt="Hero Image"
          width={3000}
          height={3000}
          className="z-10 h-auto max-w-full"
        />
        <Button
          variant={"ghost"}
          className="absolute bottom-16 w-fit rounded-full text-xs shadow-lg"
        >
          <Link
            href="/shop"
            className="flex justify-between gap-x-2 rounded-full"
          >
            <ArrowRightIcon size={13} />
            SHOP COLLECTION
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
