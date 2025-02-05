import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const { setProducts } = productSlice.actions;
export default cartSlice.reducer;
