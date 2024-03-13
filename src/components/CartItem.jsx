import { X, Plus, Minus } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeSidebar } from "../features/sidebar/sidebarSlice";
import {
  addToCart,
  clearCart,
  decreaseCart,
  removeFromCart,
} from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveItem = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="flex">
      <div className="w-full flex min-h-[150px] items-center gap-x-4 ">
        <Link>
          <img src={item.image} className="max-w-[50px]" alt={item.title} />
        </Link>
        <div className="flex flex-col justify-between w-full mb-2 t">
          <div className="flex justify-between items-center">
            <div>
              <Link>
                <p className="text-sm text-gray-500">{item.title}</p>
              </Link>
            </div>
            <div
              onClick={() => dispatch(() => handleRemoveItem(item))}
              className="cursor:pointer"
            >
              <button className="bg-red-200 text-sm p-1 text-gray-600 cursor-pointer border-r-2">
                Remove
              </button>
            </div>
          </div>
          <div className="flex  text-sm justify-between">
            <div className="flex items-center space-x-4">
              <button
                className="bg-slate-300 p-1 cursor-pointer"
                onClick={() => handleAddToCart(item)}
              >
                <Plus size="16" />
              </button>
              <div>{item.cartQuantity}</div>
              <button
                className="bg-slate-300 p-1 cursor-pointer "
                onClick={() => handleRemoveFromCart(item)}
              >
                <Minus size="16" />
              </button>
            </div>

            <div className="text-red-700 font-bold text-lg">
              `${(item.price * item.cartQuantity).toFixed(2)}`
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
