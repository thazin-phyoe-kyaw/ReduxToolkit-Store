import React from "react";
import { Plus, Minus } from "lucide-react";
const ProductDetail = () => {
  let product = {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelry",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  };

  return (
    <div className="flex px-10 flex-col md:flex-row items-center pt-20 gap-10 container mx-auto">
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="max-w-[200px] md:max-w-[400px]"
        />
      </div>
      <div className="w-[300px] md:w-[500px]">
        <h1 className="font-extrabold text-3xl mb-5">{product.title}</h1>
        <p className="mb-3">Price: ${product.price}</p>
        <p className="mb-3 text-gray-600 text-sm">
          Description: {product.description}
        </p>
        <p className="mb-3 text-gray-600 text-sm">
          Category: {product.category}
        </p>
        <div className="flex  text-sm justify-between">
          <div className="flex items-center space-x-4">
            <button className="bg-slate-300 p-1 cursor-pointer">
              <Plus size="16" />
            </button>
            <div>1</div>
            <button className="bg-slate-300 p-1 cursor-pointer">
              <Minus size="16" />
            </button>
          </div>
          <div className="text-red-700 font-bold text-lg">$100</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
