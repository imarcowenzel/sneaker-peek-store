import getProducts from "@/actions/get-products";
import NotFoundPage from "@/app/not-found";
import ActiveFilter from "./components/active-filter";
import FilterSortBar from "./components/filter-sort-bar/filter-sort-bar";
import ProductsCatalog from "./components/products-catalog";

interface ShopPageProps {
  searchParams: {
    sortBy: string;
    order: string;
    minPrice: number;
    maxPrice: number;
    query: string;
  };
}

const ShopPage = async ({ searchParams }: ShopPageProps) => {

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
    <section className="mx-auto flex min-h-svh w-full max-w-full justify-center">
      <div className="my-0 flex w-full flex-col justify-start p-5 lg:max-w-[1360px] lg:p-8">
        <FilterSortBar products={products} />
        <ActiveFilter />
        <ProductsCatalog products={products} />
        {products.length === 0 && (
          <div className="flex h-1/2 w-full items-center justify-center text-center">
            <h1 className="text-4xl font-bold">No products found.</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopPage;