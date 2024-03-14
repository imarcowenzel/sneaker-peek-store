"use server";

import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/`;

export interface Query {
  isArchived?: true | false;
  totalPrice?: number;
  sortBy?: string;
  order?: string;
  minPrice?: number;
  maxPrice?: number;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isArchived: query.isArchived,
      totalPrice: query.totalPrice,
      sortBy: query.sortBy,
      order: query.order,
      minPrice: query.minPrice,
      maxPrice: query.maxPrice,
    },
  });

  const res = await fetch(url);
  return res.json();
};

export default getProducts;
