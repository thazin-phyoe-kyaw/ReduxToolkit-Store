// import { useState } from "react";
// import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
// import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "./ProductBanner";
import ShopSideNav from "./ShopSidebar";
const Shop = () => {
  // const [itemsPerPage, setItemsPerPage] = useState(48);
  // const itemsPerPageFromBanner = (itemsPerPage) => {
  //   setItemsPerPage(itemsPerPage);
  // };

  return (
    <div className="container mx-auto py-4">
      <div className="w-full h-full flex pb-20 gap-10">
        {/* <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full"> */}
        <div className="w-[20%] lg:w-[25%] hidden md:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner />
        </div>
      </div>
    </div>
  );
};

export default Shop;
