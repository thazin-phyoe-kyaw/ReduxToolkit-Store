import { Expand, Maximize, ShoppingBasket } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

const Product = (product) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-col">
      <div className="w-full min-h-[300px] mb-4 overflow-hidden group relative transition border border-slate-100  ">
        <div className="w-full h-full flex justify-center items-center">
          <img
            className="max-w-[140px] group-hover:scale-110 transition duration-300"
            src={product?.product?.image}
            alt={product?.product?.title}
          />
        </div>
        <div className="absolute top-2 left-0 bg-lime-400 px-2 ">
          <button className="text-white text-sm">New</button>
        </div>

        <div className="absolute top-2 right-0 rounded-full w-8 flex justify-center items-center h-8 bg-gray-700 px-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:right-6 ">
          <button
            className="text-white text-sm"
            onClick={() => handleAddToCart(product.product)}
          >
            <ShoppingBasket size="16" />
          </button>
        </div>
      </div>
      <div>
        <Link>
          <h2 className="font-semibold text-center mb-2 ">
            {product.product.title}
          </h2>
        </Link>
        <div className="text-center text-red-600 font-semibold text-base">
          ${product.product.price}
        </div>
      </div>
    </div>
  );
};

export default Product;
