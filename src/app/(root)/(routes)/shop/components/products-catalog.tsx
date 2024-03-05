import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types";
import { formatter } from "@/lib/utils";
import { PanelRightClose } from "lucide-react";

const ProductsCatalog = ({ products }: { products: Product[] }) => {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product: Product) => {
        const price = formatter.format(product.price);
        const discount = formatter.format(product.discount);

        return (
          <li
            key={product.id}
            className="mb-9 flex w-full flex-col gap-y-3 pb-4"
          >
            <Link
              href={`/product/${product.id}`}
              className="inline-block overflow-hidden"
            >
              <Image
                src={product.photo}
                alt={product.name}
                height={500}
                width={500}
                className="duration-500 hover:scale-110"
              />
            </Link>

            <div className="flex flex-col gap-y-1 px-4">
              <span className="text-xs text-gray-500">{product.category}</span>

              <Link
                href={`/product/${product.id}`}
                className="text-sm font-semibold text-gray-700 md:text-base"
              >
                {product.name}
              </Link>

              {product.discount == 0 ? (
                <p className="text-xs font-bold lg:text-sm">{price}</p>
              ) : (
                <div className="flex w-full justify-center gap-x-2">
                  <p className="text-xs font-bold text-muted-foreground line-through lg:text-sm">
                    {price}
                  </p>
                  <p className="text-xs font-bold text-gray-700 lg:text-sm">
                    {discount}
                  </p>
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsCatalog;
