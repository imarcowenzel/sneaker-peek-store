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
  };
}) => {
  
  const { sortBy, order, minPrice, maxPrice } = searchParams;

  const products = await getProducts({
    isArchived: false,
    sortBy,
    order,
    minPrice,
    maxPrice,
  });

  if (!products) return <NotFoundPage />;

  return (
    <>
      <section className="mx-auto flex max-w-full justify-center text-center">
        <div className="my-0 w-full p-5 lg:max-w-[1360px] lg:p-8">
          <FilterSortBar products={products} />
          <ProductsCatalog products={products} />
        </div>
      </section>
    </>
  );
};

export default ShopPage;
