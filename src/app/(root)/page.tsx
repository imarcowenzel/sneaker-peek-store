import getProducts from "@/actions/get-products";
import Benefits from "@/components/benefits";
import Banner from "./components/banner";
import Carousel from "./components/carousel";
import Hero from "./components/hero";

export const revalidate = 0;

const HomePage = async () => {
  
  const products = await getProducts({ isArchived: false });

  return (
    <>
      <Hero />
      <Carousel products={products} />
      <Benefits className="px-3 md:px-8 xl:px-24" />
      <Banner />
    </>
  );
};

export default HomePage;
