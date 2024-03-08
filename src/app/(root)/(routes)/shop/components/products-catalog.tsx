import Image from "next/image";
import Link from "next/link";

import { cn, formatter } from "@/lib/utils";
import { Product } from "@/types";

const ProductsCatalog = ({ products }: { products: Product[] }) => {

  return (

    <ul className="mt-8 grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4">

      {products.map((product: Product) => {
        
        const price = formatter.format(product.price);
        const total = formatter.format(product.totalPrice);

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
                src={product.photo[0].url}
                alt={product.name}
                height={500}
                width={500}
                className="duration-500 hover:scale-110"
              />
            </Link>

            <div className="flex flex-col gap-y-1 px-4">

              <p className="text-xs">{product.category}</p>

              <Link
                href={`/product/${product.id}`}
                className="text-sm font-semibold md:text-base"
              >
                {product.name}
              </Link>

              <div className="flex w-full justify-center gap-x-2">
                <p
                  className={cn(
                    "hidden text-xs font-bold text-muted-foreground line-through lg:text-sm",
                    product.discount > 0 && "inline",
                  )}
                >
                  {price}
                </p>
                <p className="text-xs font-bold lg:text-sm">{total}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsCatalog;
