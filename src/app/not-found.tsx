const NotFound = () => {
  return (
    <section className="mx-4 flex min-h-[calc(100dvh-497px)] items-center justify-center md:mx-24 md:min-h-[calc(100dvh-395.25px)] lg:mx-56 lg:h-[calc(100dvh-402px)]">
      <div className="flex flex-col gap-y-4 bg-white px-3 py-5 text-center">
        <h1 className="text-2xl font-bold text-cyan-600 md:text-3xl lg:text-5xl">
          This page doesn't seem to exist.
        </h1>
        <h3 className="text-xs font-bold text-gray-600 md:text-xl">
          It looks like the link pointing here was faulty.
        </h3>
      </div>
    </section>
  );
};

export default NotFound;
