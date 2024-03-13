"use client"

import { Metadata } from "next";

import getProducts, { Query } from "@/actions/get-products";
import NotFoundPage from "@/app/not-found";
import { Product } from "@/types";
import FilterSortBar from "./components/filter-sort-bar";
import ProductsCatalog from "./components/products-catalog";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Shop - Sneaker Peek",
//   description: "A sneaker shop",
// };

const ShopPage = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [field, setField] = useState<Query["sortField"]>("createdAt")
  const [order, setOrder] = useState<Query["sortOrder"]>("asc")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts({
          isArchived: false,
          sortField: field,
          sortOrder: order,
        });
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [field, order]);

  if (!products) return <NotFoundPage />;

  return (
    <section className="mx-auto flex max-w-full justify-center text-center">
      <div className="my-0 w-full p-5 lg:max-w-[1360px] lg:p-8">
        <FilterSortBar products={products} setField={setField} setOrder={setOrder} />
        <ProductsCatalog products={products} />
      </div>
    </section>
  );
};

export default ShopPage;
