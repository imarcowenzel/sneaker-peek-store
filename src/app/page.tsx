import CarouselSection from "@/components/carousel";
import Hero from "@/components/hero-section";

export default function Home() {
  return (
    <section className="flex min-h-[100dvh] flex-col items-center bg-white">
      <Hero />
      <CarouselSection />
    </section>
  );
}
