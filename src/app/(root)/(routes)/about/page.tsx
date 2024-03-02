import { Metadata } from "next";

import Banner from "@/components/banner";
import Benefits from "@/components/benefits";
import ButtonLink from "@/components/button-link";
import { aboutData } from "@/utils/data";

export const metadata: Metadata = {
  title: "About - Sneaker Peek",
  description: "A sneaker shop",
};

const About = () => {

  return (

    <section className="min-w-[375px]">

      <Banner title="About Us" subtitle="know us more" />

      <article className="px-5 py-8 md:p-12">
        <div className="mx-auto flex w-full max-w-3xl md:max-w-5xl lg:max-w-6xl 2xl:max-w-7xl">
          <div
            className="item-start flex w-full flex-col rounded-xl bg-cover bg-no-repeat px-9 pb-11 pt-40 font-black text-white md:p-12 md:pt-52 lg:px-20 lg:pb-28 lg:pt-72"
            style={{ backgroundImage: "url('/sport-shoes-blue.jpg')" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              Helping you keep fit
            </h2>
            <h2 className="text-xl lg:text-3xl">Since 1978</h2>
          </div>
        </div>
      </article>

      <article className="w-full bg-cover bg-fixed bg-center px-8 py-14 lg:px-40 xl:py-36 2xl:p-14">

        <Benefits />
        <div className="mx-auto flex max-w-3xl flex-col gap-y-9 md:max-w-5xl md:items-center md:text-center lg:max-w-7xl">
          <h3 className="text-2xl font-black text-gray-800">History</h3>
          <h1 className="text-4xl font-black text-gray-800 md:text-5xl lg:text-6xl">
            Lorem ipsum dolor sit amet consectetur
          </h1>
          <p className="text-justify text-sm leading-7 md:px-12 md:text-center lg:text-base 2xl:px-64">
            There are many variations of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text.
          </p>
          <ButtonLink href="/about">KNOW MORE</ButtonLink>
        </div>
        
      </article>

      <article className="grid grid-cols-1 md:grid-cols-3">
        {aboutData.map(({ key, title, photo }) => (
          <div
            key={key}
            className="flex bg-cover bg-bottom bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(47,158,226,0) 75%, rgba(0,0,0) 100%), url("${photo}")`,
            }}
          >
            <div className="mx-auto flex pb-[10%] pt-[100%]">
              <h2 className="text-3xl font-black italic text-white md:text-4xl lg:text-5xl">
                {title}
              </h2>
            </div>
          </div>
        ))}

      </article>
    </section>
  );
};

export default About;
