import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import { apiSlice } from "./slices/apiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddlewre) =>
    getDefaultMiddlewre().concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
