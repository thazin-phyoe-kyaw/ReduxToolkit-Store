// import { products } from "../../data/data";
import { products } from "../data/data";
import Product from "./Product";
console.log(products);
export default function ProductBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
