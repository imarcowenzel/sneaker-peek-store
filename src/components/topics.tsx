import { topics } from "@/config";

const Topics = () => {
  return (
    <div className="grid w-full gap-y-24 bg-[#efefef] p-3 py-14 md:grid-cols-2 md:p-8 md:py-14 lg:grid-cols-4 lg:gap-x-8 lg:px-24 lg:py-24">
      {topics.map((topic) => (
        <div key={topic.key} className="relative flex flex-col gap-y-10 px-5">
          <h1 className="max-w-3xl text-2xl font-bold text-gray-800 md:text-center lg:max-w-5xl xl:max-w-7xl">
            {topic.title}
          </h1>
          <h2 className="absolute -top-8 text-8xl font-bold tracking-tighter opacity-5 lg:-top-12 lg:text-9xl">
            0{topic.key}.
          </h2>
          <p className="text-sm text-gray-600 md:text-center">
            {topic.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Topics;
