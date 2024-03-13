import { X, Plus, Minus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  return (
    <div className="flex">
      <div className="w-full flex min-h-[150px] items-center gap-x-4 ">
        <Link>
          <img src={item.image} className="max-w-[50px]" />
        </Link>
        <div className="flex flex-col justify-between w-full mb-2 t">
          <div className="flex">
            <div>
              <Link>
                <p className="text-sm text-gray-500">{item.title}</p>
              </Link>
            </div>
            <div>
              <X size="16" />
            </div>
          </div>
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
            <div className="text-slate-500">QTY(3)</div>
            <div className="text-red-700 font-bold text-lg">${item.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
