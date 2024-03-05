import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { formatter } from "@/lib/utils";
import { Product as ProductType } from "@/types";
import AddProduct from "./add-product-form";
import ProductModal from "./product-modal";

const Product = ({ product }: { product: ProductType }) => {
  
  const price = formatter.format(product.price);
  const discount = formatter.format(product.discount);

  return (
    <article className="flex w-full flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
      <div className="relative flex-1">
        {/* TODO: zoom effect */}
        <ProductModal product={product} />

        <Image
          src={product.photo}
          alt={product.name}
          height={1200}
          width={1200}
          priority
          className="h-full"
        />
      </div>

      <div className="flex flex-1 flex-col gap-y-3 lg:gap-y-4">
        <p className="text-sm text-secondary lg:text-base">
          {product.category}
        </p>

        <h1 className="text-3xl font-bold">{product.name}</h1>

        {product.discount == 0 ? (
          <div className="flex items-center gap-x-2">
            <h3 className="text-xl font-semibold  lg:text-2xl  ">{price}</h3>
            <p className="text-sm">+ Free Shipping</p>
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <h3 className="text-xl font-semibold text-muted-foreground line-through lg:text-2xl">
              {price}
            </h3>
            <h3 className="text-xl font-semibold lg:text-2xl">{discount}</h3>
            <p className="text-sm">+ Free Shipping</p>
          </div>
        )}

        <p className="text-justify text-sm leading-7 lg:text-base">
          Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
          vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris
          in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
          augue. Sed non neque elit sed.
        </p>

        <Separator />

        <div className="flex items-center gap-x-6 text-xs lg:text-sm">
          <p className="uppercase">sku: {product.sku}</p>

          <div className="flex gap-x-1 text-xs">
            <p>Category:</p>
            <p className="text-secondary">{product.category}</p>
          </div>
        </div>

        <AddProduct product={product} />
      </div>
    </article>
  );
};

export default Product;
