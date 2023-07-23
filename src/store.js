import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import menuReducer from "./features/menu/menuSlice";
import cartReducer from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    menu: menuReducer,
    cart: cartReducer,
  },
});
