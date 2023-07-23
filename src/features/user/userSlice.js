import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
