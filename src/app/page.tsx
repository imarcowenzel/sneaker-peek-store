import { Benefits, Hero, HomeCarousel, LimitedStockBanner } from "@/components";

export default function Home() {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center">
      <Hero />
      <HomeCarousel />
      <Benefits />
      <LimitedStockBanner />
    </section>
  );
}
