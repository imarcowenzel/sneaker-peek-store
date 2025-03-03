import { Metadata } from "next";

import Banner from "@/components/banner";
import BenefitsAndHistory from "./components/benefits-and-history";
import BottomBanner from "./components/bottom-banner";
import Hero from "./components/hero";

export const metadata: Metadata = {
  title: "About - Sneaker Peek",
  description: "A sneaker shop",
};

const AboutPage = () => {
  return (
    <section className="w-full">
      <Banner title="About Us" subtitle="know us more" />
      <Hero />
      <BenefitsAndHistory />
      <BottomBanner />
    </section>
  );
};

export default AboutPage;
