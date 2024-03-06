import getProduct from "@/actions/get-product";
import NotFoundPage from "@/app/not-found";
import DescInfoReview from "./components/desc-info-reviews";
import Product from "./components/product";

export const revalidate = 0;

const ProductPage = async ({ params }: { params: { productId: string } }) => {

  const product = await getProduct(params.productId);

  if (!product) return <NotFoundPage />

  return (
    <section className="mx-auto flex max-w-full items-center justify-center lg:max-w-7xl">

      <div className="flex flex-col  gap-y-14 bg-white px-6 py-5 md:px-8 lg:my-16 lg:px-9 lg:py-14 xl:px-24 xl:py-20">
        <Product product={product} />
        <DescInfoReview product={product} />
      </div>

    </section>
  );
};

export default ProductPage;
