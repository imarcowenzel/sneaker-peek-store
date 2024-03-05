import { aboutData } from "@/utils/data";

const BottomBanner = () => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3">
      {aboutData.map(({ key, title, photo }) => (
        <div
          key={key}
          className="flex bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(47,158,226,0) 75%, rgba(0,0,0) 100%), url("${photo}")`,
          }}
        >
          <div className="mx-auto flex pb-[10%] pt-[100%]">
            <h2 className="text-3xl font-bold italic text-white md:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
        </div>
      ))}
    </article>
  );
};

export default BottomBanner;
