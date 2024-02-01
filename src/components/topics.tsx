import { topics } from "@/config";

const Topics = () => {
  return (
    <div className="grid w-full bg-[#efefef] p-3 md:grid-cols-2 lg:grid-cols-4">
      {topics.map((topic) => (
        <div key={topic.key} className="flex flex-col gap-y-10 px-4 py-14">
          <h1 className="relative md:text-center text-2xl font-bold text-gray-800">
            {topic.title}

            <h2 className="absolute -top-8 font-bold text-8xl opacity-10 tracking-tighter">0{topic.key}.</h2>
          </h1>
          <p className="text-sm md:text-center text-gray-600">{topic.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Topics;
