import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseAmount: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseAmount: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const totalCartQuantity = (state) => {
  return state.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

export const totalCartPrice = (state) => {
  return state.cart.cart.reduce((acc, cur) => acc + cur.totalPrice, 0);
};

export const getCurrentQuantityById = (id) => (state) => {
  const itemQuantity = state.cart.cart.find((item) => item.pizzaId === id);
  if (itemQuantity) {
    return itemQuantity.quantity;
  } else {
    return 0;
  }
};
