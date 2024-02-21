import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: boolean): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isArchived: query,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;