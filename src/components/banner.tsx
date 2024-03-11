const Banner = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <article className="px-5 pb-12 pt-20 md:p-12 md:pt-24 lg:px-0 lg:py-36 bg-white">
      <div className="mx-auto w-full max-w-3xl md:max-w-5xl lg:max-w-6xl 2xl:max-w-7xl">
        <div className="flex w-full flex-col items-start">
          <h1 className="text-4xl font-bold text-gray-200 md:text-7xl xl:text-[150px]">
            {subtitle}
          </h1>
          <h1 className="text-4xl font-bold md:-mt-3 md:text-5xl lg:-mt-6 lg:text-6xl">
            {title}
          </h1>
        </div>
      </div>
    </article>
  );
};

export default Banner;
