import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "../features/sidebar/sidebarSlice";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
