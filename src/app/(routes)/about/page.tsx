import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { benefitsData } from "@/config";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/button-link";

const About = () => {
  const data = [
    {
      title: "SPEED",
      photo: "/speed.jpg",
    },
    {
      title: "QUALITY",
      photo: "/quality.jpg",
    },
    {
      title: "COMFORT",
      photo: "/comfort.jpg",
    },
  ];

  return (
    <section className="min-h-[100dvh]">
      {/* BANNER */}
      <article className="px-5 pb-12 pt-20 md:p-12 md:pt-24 lg:px-0 lg:py-36">
        <div className="mx-auto w-full max-w-3xl md:max-w-5xl lg:max-w-7xl">
          <div className="flex w-full flex-col items-start">
            <h1 className="text-4xl font-black text-gray-200 md:text-7xl xl:text-[150px]">
              know us more
            </h1>
            <h1 className="text-4xl font-black text-gray-800 md:-mt-3 md:text-5xl lg:-mt-6 lg:text-6xl">
              About Us
            </h1>
          </div>
        </div>
      </article>

      <article className="px-5 py-8 lg:p-12">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap md:max-w-5xl lg:max-w-7xl">
          <div
            className="flex w-full flex-wrap content-start rounded-xl bg-cover bg-no-repeat px-9 pb-11 pt-40 font-black text-white md:p-12 md:pt-52 lg:px-20 lg:pb-28 lg:pt-72"
            style={{ backgroundImage: "url('/sport-shoes-blue.jpg')" }}
          >
            <div className="w-full text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl">
                Helping you keep fit
              </h2>
            </div>
            <div className="w-full text-left">
              <h2 className="text-xl lg:text-3xl">Since 1978</h2>
            </div>
          </div>
        </div>
      </article>

      <article className="w-full bg-[#efefef] bg-cover bg-fixed bg-center px-8 py-14 lg:px-40 xl:py-36 2xl:p-14">
        <div className="grid w-full gap-y-14 bg-[#efefef] py-14 md:grid-cols-2 md:gap-y-24 md:py-20 lg:grid-cols-4 xl:gap-x-8 xl:py-28 2xl:px-80 2xl:py-40">
          {benefitsData.map((topic) => (
            <div key={topic.key} className="relative flex flex-col gap-y-7 p-5">
              <h1 className="max-w-3xl text-2xl font-black text-gray-800 md:text-center lg:max-w-5xl xl:max-w-7xl">
                {topic.title}
              </h1>
              <h2 className="absolute -top-4 text-8xl font-black tracking-tighter opacity-5 md:-top-4 lg:text-9xl xl:-top-10">
                0{topic.key}.
              </h2>
              <p className="text-sm leading-7 text-gray-600 md:text-center">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-y-9 md:max-w-5xl md:items-center md:text-center lg:max-w-7xl">
          <h3 className="text-2xl font-black">History</h3>
          <h1 className="text-4xl font-black md:text-5xl lg:text-6xl">
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

      <article className="flex flex-wrap">
        {data.map(({ title, photo }) => (
          <div
            className="flex h-full w-full flex-wrap content-start bg-cover bg-no-repeat transition duration-300 md:w-1/3"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(47,158,226,0) 75%, rgba(0,0,0) 100%), url("${photo}")`,
              backgroundPosition: "bottom center",
            }}
          >
            <div className="mx-auto flex flex-wrap pb-[10%] pt-[100%] ">
              <div className="w-full text-center md:w-1/3">
                <h2 className="text-3xl font-black italic text-white md:text-4xl lg:text-5xl">
                  {title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default About;
