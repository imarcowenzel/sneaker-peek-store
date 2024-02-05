const About = () => {
  return (
    <div>
      <div className="px-5 pb-12 pt-20 transition duration-300 md:p-12 md:pt-24 lg:px-0 lg:py-36">
        <div className="mx-auto flex max-w-3xl flex-wrap md:max-w-5xl lg:max-w-7xl">
          <div className="w-full">
            <div className="flex w-full flex-wrap content-center items-center">
              <div className="w-full transition duration-300">
                <h1 className="text-4xl font-black text-gray-200 md:text-7xl xl:text-[150px]">
                  know us more
                </h1>
              </div>

              <div className="w-full text-left">
                <div className="transition duration-300 md:-mt-3 lg:-mt-6">
                  <h1 className="text-4xl font-black text-gray-800 md:text-5xl lg:text-6xl">
                    About Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-8 transition duration-300 lg:p-12">
        <div className="mx-auto flex max-w-3xl flex-wrap md:max-w-5xl lg:max-w-7xl">
          <div className="w-full">
            <div
              className="flex w-full flex-wrap content-start rounded-xl bg-cover bg-no-repeat px-9 pb-11 pt-40 font-black text-white transition duration-300 md:p-12 md:pt-52 lg:px-20 lg:pb-28 lg:pt-72"
              style={{ backgroundImage: "url('/sport-shoes-blue.jpg')" }}
            >
              <div className="w-full text-left transition duration-300">
                <h2 className="text-4xl md:text-5xl lg:text-6xl">
                  Helping you keep fit
                </h2>
              </div>
              <div className="w-full text-left transition duration-300">
                <h2 className="text-xl lg:text-3xl">Since 1978</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
