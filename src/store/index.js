import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import uiSlice from "./UI-slice";

const store = configureStore({
  reducer: { cartReducer: cartSlice.reducer, uiReducer: uiSlice.reducer },
});

export default store;
