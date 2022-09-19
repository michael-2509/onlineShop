import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
    },

    addToCart(state, action) {
      const newItem = action.payload;
      const existingItems = state.items.find((item) => newItem.id === item.id);
      state.totalAmount++;
      state.changed = true;

      if (!existingItems) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItems.totalPrice = existingItems.totalPrice + newItem.price;
        existingItems.quantity++;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItems = state.items.find((item) => id === item.id);
      state.totalAmount--;
      state.changed = true;

      if (existingItems.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItems.quantity--;
        existingItems.totalPrice =
          existingItems.totalPrice - existingItems.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
