"use server";

import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/`;

interface Query {
  isArchived?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isArchived: query.isArchived,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
