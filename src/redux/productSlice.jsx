import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  query: "", // dodajemo search query
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setProducts, setQuery } = productSlice.actions;
export default productSlice.reducer;
