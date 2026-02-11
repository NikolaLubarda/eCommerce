import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existing = state.items.find((item) => item.id === newItem.id);

      if (existing) {
        existing.quantity += 1;
        existing.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;

      if (state.totalQuantity < 0) state.totalQuantity = 0;
      if (state.totalPrice < 0) state.totalPrice = 0;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);

      if (!existing) return;

      if (existing.quantity <= 0) return;

      state.totalQuantity -= 1;
      state.totalPrice -= existing.price;

      existing.quantity -= 1;
      existing.totalPrice -= existing.price;

      if (existing.quantity <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      }

      if (state.totalQuantity < 0) state.totalQuantity = 0;
      if (state.totalPrice < 0) state.totalPrice = 0;
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
