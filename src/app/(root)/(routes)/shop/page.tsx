import { Metadata } from "next";

import getProducts from "@/actions/get-products";
import { Product } from "@/types";
import FilterSortBar from "./components/filter-sort-bar";
import ProductsCatalog from "./components/products-catalog";

export const metadata: Metadata = {
  title: "Shop - Sneaker Peek",
  description: "A sneaker shop",
};

export const revalidate = 0;

const Shop = async () => {
  
  const products: Product[] = await getProducts({ isArchived: false });

  return (
    <section className="mx-auto flex max-w-full justify-center text-center">
      <div className="my-0 w-full p-5 lg:max-w-[1360px] lg:p-8">
        <FilterSortBar />
        <ProductsCatalog products={products} />
      </div>
    </section>
  );
};

export default Shop;
