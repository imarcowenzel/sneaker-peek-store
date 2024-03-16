import getProducts from "@/actions/get-products";
import NotFoundPage from "@/app/not-found";
import FilterSortBar from "./components/filter-sort-bar";
import ProductsCatalog from "./components/products-catalog";

const ShopPage = async ({
  searchParams,
}: {
  searchParams: {
    sortBy: string;
    order: string;
    minPrice: number;
    maxPrice: number;
    query: string;
  };
}) => {
  const { sortBy, order, minPrice, maxPrice, query } = searchParams;

  const products = await getProducts({
    isArchived: false,
    sortBy,
    order,
    minPrice,
    maxPrice,
    query,
  });

  if (!products) return <NotFoundPage />;

  return (
    <>
      <section className="mx-auto flex max-w-full min-h-svh w-full justify-center">
        <div className="my-0 w-full p-5 lg:max-w-[1360px] lg:p-8 flex flex-col justify-start">
          <FilterSortBar products={products} />
          <ProductsCatalog products={products} />
          {products.length === 0 && (
            <div className="w-full h-1/2 flex items-center justify-center text-center">
              <h1 className="font-bold text-4xl">No products found.</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ShopPage;
