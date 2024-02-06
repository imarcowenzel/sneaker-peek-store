import { benefitsData } from "@/config";
import { cn } from "@/lib/utils";

const Benefits = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "grid w-full gap-y-14 bg-[#efefef] py-14 md:grid-cols-2 md:gap-y-24 md:py-20 lg:grid-cols-4 xl:gap-x-8 xl:py-28 2xl:px-80 2xl:py-40",
        className,
      )}
    >
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
  );
};

export default Benefits;
