import { Benefits, Hero, HomeCarousel, BannerWithBg } from "@/components";

export default function Home() {
  return (
    <section className="flex min-w-[375px] flex-col items-center bg-white">
      <Hero />
      <HomeCarousel />
      <Benefits className="px-3 md:px-8 xl:px-24" />
      <BannerWithBg />
    </section>
  );
}
