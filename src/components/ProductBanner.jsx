// import { products } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
// import { products } from "../data/data";
import Product from "./Product";
import { useEffect } from "react";
import { fetchProducts } from "../features/product/productSlice";

export default function ProductBanner() {
  const dispatch = useDispatch();
  const {
    items: products,
    status,
    error,
  } = useSelector((state) => state.product);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10 px-4">
      {products?.map((product) => (
        <Product key={product?.id} product={product} />
      ))}
    </div>
  );
}
