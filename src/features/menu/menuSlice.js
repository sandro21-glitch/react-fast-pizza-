import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://react-fast-pizza-api.onrender.com/api";

const initialState = {
  menuItems: [],
  isLoading: false,
  error: false,
};

export const getMenuItems = createAsyncThunk("menu/getMenuItems", async () => {
  try {
    const res = await axios(`${API_URL}/menu`);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    menuItems: (state, action) => {
      state.menuItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMenuItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMenuItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menuItems = action.payload;
      })
      .addCase(getMenuItems.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { getCartItems } = menuSlice.actions;
export default menuSlice.reducer;
