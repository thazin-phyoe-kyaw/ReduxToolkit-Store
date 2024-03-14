import FilterProduct from "./FilterProduct";
import ProductBanner from "./ProductBanner";
import ShopSideNav from "./ShopSidebar";
const Shop = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lg:w-[25%] hidden md:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10 px-4 md:p-0">
          <FilterProduct />
          <ProductBanner />
        </div>
      </div>
    </div>
  );
};

export default Shop;
