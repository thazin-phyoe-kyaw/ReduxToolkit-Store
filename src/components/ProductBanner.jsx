import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { useEffect } from "react";
import { fetchProducts } from "../features/product/productSlice";
import Pagination from "./Pagination";

export default function ProductBanner() {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="text-gray-800 flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (status === "failed") {
    return (
      <p className="text-red-700 flex justify-center items-center">
        Error: {error}
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10 px-4">
        {products?.map((product) => (
          <Product key={product?.id} product={product} />
        ))}
      </div>
      <Pagination />
    </>
  );
}
