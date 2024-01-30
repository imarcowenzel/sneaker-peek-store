import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="flex w-full flex-col items-center bg-cover bg-center bg-no-repeat bg-origin-content px-8 py-12 md:w-[1100px] md:p-12"
      style={{ backgroundImage: 'url("/homepage-bg-free-img-1.jpg")' }}
    >
      <h1
        className="text-5xl font-bold text-white"
        style={{ textShadow: "0 0 25px rgba(47, 158, 226, 0.3)" }}
      >
        AirPro X3
      </h1>
      <Image
        src="/sports-shoe4.png"
        alt="Hero Image"
        width={900}
        height={900}
        className="aspect-auto w-3/4"
      />
      <Button
        variant={"ghost"}
        className="w-fit rounded-full text-xs shadow-lg"
      >
        <Link href="/shop" className="flex justify-between gap-x-2 rounded-full">
          <ArrowRightIcon size={13} />
          SHOP COLLECTION
        </Link>
      </Button>
    </div>
  );
};

export default Hero;
