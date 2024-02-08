import { Benefits, Hero, HomeCarousel, BannerWithBg } from "@/components";

export default function Home() {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center">
      <Hero />
      <HomeCarousel />
      <Benefits className="px-3 md:px-8 xl:px-24" />
      <BannerWithBg />
    </section>
  );
}
