import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { productsFetch } from "./productsSlice";
import { productsApi } from "./productsApi";
import cartReducer from "./cartSlice";

const store = configureStore({
 reducer: {
  products: productsReducer,
  cart: cartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
 },
 middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

export default store;