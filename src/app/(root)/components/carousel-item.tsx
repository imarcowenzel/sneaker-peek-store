import Image from "next/image";
import Link from "next/link";

import { CarouselItem } from "@/components/ui/carousel";
import { Product } from "@/types";
import { formatter } from "@/lib/utils";

const ProductItem = async ({ product }: { product: Product }) => {

  const price = formatter.format(product.price);
  const discount = formatter.format(product.discount);

  return (
    <CarouselItem
      key={product.id}
      className="flex flex-col md:basis-1/3 lg:basis-1/4"
    >
      <Link href={`/product/${product.id}/`} className="relative w-full">
        <Image
          src={product.photo}
          alt={product.name}
          height={400}
          width={400}
        />
        {product.discount > 0 && (
          <div className="absolute left-0 top-0 flex items-center justify-center border bg-gray-500 p-3">
            <span className="text-sm text-white">Sale!</span>
          </div>
        )}
      </Link>

      <div className="flex flex-col items-center gap-y-2 bg-gray-200 py-12">
        <p className="text-xs">{product.category}</p>
        <Link href={`/product/${product.id}/`}>
          <h2 className="text-sm font-bold">{product.name}</h2>
        </Link>

        {product.discount == 0 ? (
          <span className="text-xs font-medium text-green-700">
            {price}
          </span>
        ) : (
          <div className="flex gap-2">
            <span className="text-xs font-medium text-muted-foreground line-through">
              {discount}
            </span>
            <span className="text-xs font-medium text-green-700">
              {price}
            </span>
          </div>
        )}
      </div>
    </CarouselItem>
  );
};

export default ProductItem;
