import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found - Sneaker Peek",
  description: "A sneaker shop",
};

const NotFound = async () => {

  return (

    <section className="flex min-h-dvh items-center justify-center">

      <div className="mx-6 flex flex-col items-center gap-3 bg-white px-3 py-5 text-center md:px-12 md:py-7 lg:gap-y-6 lg:py-16">

        <h1 className="text-3xl font-bold text-primary md:text-3xl lg:text-5xl">
          This page doesn't seem to exist.
        </h1>
        
        <h3 className="text-sm font-bold md:text-xl lg:text-2xl">
          It looks like the link pointing here was faulty.
        </h3>

      </div>

    </section>

  );

};

export default NotFound;
