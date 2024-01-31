const NotFound = () => {
  return (
    <section className="flex min-h-[100dvh] items-center justify-center">
      <div className="mx-6 flex flex-col items-center gap-y-2 bg-white px-3 py-5 text-center md:px-12 md:py-7 lg:gap-y-6">
        <h1 className="text-2xl font-bold text-cyan-600 md:text-3xl lg:text-5xl">
          This page doesn't seem to exist.
        </h1>
        <h3 className="text-xs font-bold md:text-xl">
          It looks like the link pointing here was faulty.
        </h3>
      </div>
    </section>
  );
};

export default NotFound;
