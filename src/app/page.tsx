import { Benefits, Hero, HomeCarousel, LimitedStockBanner } from "@/components";

export default function Home() {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center">
      <Hero />
      <HomeCarousel />
      <Benefits className="px-3 md:px-8 xl:px-24" />
      <LimitedStockBanner />
    </section>
  );
}
