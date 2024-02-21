import getProducts from "@/actions/get-products";
import { Benefits, Hero, HomeCarousel, BannerWithBg } from "@/components";

const Home = async () => {

  const products = await getProducts(false);

  return (
    <section className="flex min-w-[375px] flex-col items-center bg-white">
      <Hero />
      <HomeCarousel products={products} />
      <Benefits className="px-3 md:px-8 xl:px-24" />
      <BannerWithBg />
    </section>
  );
}

export default Home;