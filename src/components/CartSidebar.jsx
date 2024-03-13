import { Trash, X } from "lucide-react";
import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../features/sidebar/sidebarSlice";
import { clearCart, getTotals } from "../features/cart/cartSlice";

const CartSidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  return isOpen ? (
    <div className="right-0 h-full w-full overflow-y-auto bg-white fixed top-0 md:w-[30vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg-px-[5px]">
      <div className="flex items-center justify-between border-b py-3 ">
        <div className="font-semibold uppercase text-sm">
          YOUR CART {cart.cartItems.length}
        </div>
        <div
          onClick={() => dispatch(closeSidebar())}
          className="cursor-pointer"
        >
          <X />
        </div>
      </div>
      <div>
        {cart.cartItems.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          Total:
          <span className="text-red-700 font-bold">
            ${cart.cartTotalAmount}
          </span>
        </div>
        <div className="cursor-pointer">
          <Trash onClick={() => handleClearCart()} />
        </div>
      </div>
    </div>
  ) : null;
};

export default CartSidebar;
