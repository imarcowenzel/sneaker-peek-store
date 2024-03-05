const Hero = () => {
  return (
    <article className="px-5 py-8 md:p-12">
      <div className="mx-auto flex w-full max-w-3xl md:max-w-5xl lg:max-w-6xl 2xl:max-w-7xl">
        <div
          className="item-start flex w-full flex-col rounded-xl bg-cover bg-no-repeat px-9 pb-11 pt-40 font-bold text-white md:p-12 md:pt-52 lg:px-20 lg:pb-28 lg:pt-72"
          style={{ backgroundImage: "url('/sport-shoes-blue.jpg')" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            Helping you keep fit
          </h2>
          <h2 className="text-xl lg:text-3xl">Since 1978</h2>
        </div>
      </div>
    </article>
  );
};

export default Hero;
