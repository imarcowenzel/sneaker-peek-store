const NotFound = () => {
  return (
    <div className="mx-8 flex items-center justify-center md:mx-24 md:h-[100dvh]">
      <div className="px-2 my-8 flex w-full flex-col items-center justify-center gap-y-4 bg-white py-20 text-center">
        <h1 className="text-2xl font-bold text-cyan-500 md:text-3xl lg:text-5xl">
          This page doesn't seem to exist.
        </h1>
        <h3 className="text-xs font-bold text-gray-500 md:text-xl">
          It looks like the link pointing here was faulty.
        </h3>
      </div>
    </div>
  );
};

export default NotFound;
