import Image from "next/image";
import Link from "next/link";

import getProduct from "@/actions/get-product";
import { Separator } from "@/components/ui/separator";
import AddProductForm from "./components/add-product-form";
import DescInfoReview from "./components/desc-info-reviews";
import ModalProduct from "./components/modal-product";

const Product = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct(params.productId);

  return (
    <main className="mx-auto flex max-w-full items-center justify-center border lg:max-w-7xl">
      <div className="w-full lg:my-16">
        <div className="flex  flex-col gap-y-14 bg-white px-6 py-5 md:px-8 lg:px-9 lg:py-14 xl:px-24 xl:py-20">
          <section className="flex w-full flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
            <div className="relative flex-1">
              {/* TODO: zoom effect */}
              <ModalProduct product={product} />

              <Image
                src={product.photo}
                alt={product.name}
                height={1200}
                width={1200}
                className="h-full"
              />
            </div>

            <div className="flex flex-1 flex-col gap-y-3 lg:gap-y-4">
              <p className="text-sm text-primary lg:text-base">
                {product.category}
              </p>
              <h1 className="text-3xl font-bold text-gray-800">
                {product.name}
              </h1>
              {product.discount !== "0" ? (
                <div className="flex items-center gap-x-2">
                  <h3 className="font-semiboldtext-muted-foreground text-xl line-through lg:text-2xl">
                    ${product.price}.00
                  </h3>
                  <h3 className="text-xl font-semibold text-gray-800 lg:text-2xl">
                    ${product.discount}.00
                  </h3>
                  <p className="text-sm">+ Free Shipping</p>
                </div>
              ) : (
                <div className="flex items-center gap-x-2">
                  <h3 className="text-xl font-semibold text-gray-800  lg:text-2xl  ">
                    ${product.price}.00{" "}
                  </h3>
                  <p className="text-sm">+ Free Shipping</p>
                </div>
              )}

              <p className="text-justify text-sm leading-7 lg:text-base">
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non
                mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit
                sed.
              </p>

              <Separator />

              <div className="flex items-center gap-x-6 text-xs lg:text-sm">
                <p className="uppercase">sku: n/a</p>
                <div className="flex gap-x-1 text-xs">
                  <p>Category:</p>
                  <Link href="/" className="text-primary">
                    Running Shoes
                  </Link>
                </div>
              </div>

              <AddProductForm product={product} />
            </div>
          </section>

          <DescInfoReview />
        </div>
      </div>
    </main>
  );
};

export default Product;
