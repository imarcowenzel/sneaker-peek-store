import Image from "next/image";

import ButtonLink from "@/components/button-link";

const Hero = () => {
  return (
    <section className="flex w-full justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat px-8 py-12 md:p-12 lg:bg-scroll lg:p-24">
      <div className="flex w-full max-w-3xl flex-col items-center md:max-w-5xl lg:max-w-7xl">
        <h1
          className="text-6xl font-bold text-white md:text-[110px] lg:text-[150px]"
          style={{ textShadow: "0 0 25px rgba(47, 158, 226, 0.6)" }}
        >
          AirPro X3
        </h1>
        <Image
          src="/hero-shoe.png"
          alt="Hero Image"
          width={1200}
          height={1200}
          priority
          aria-label="Hero Image of AirPro X3 Shoe"
          className="-mt-10 w-3/4 md:-mt-20 lg:-mt-72 lg:w-full "
        />
        <ButtonLink href="/shop" className="lg:-mt-36">
          Shop collection
        </ButtonLink>
      </div>
    </section>
  );
};

export default Hero;
