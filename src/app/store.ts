import { configureStore, ConfigureStoreOptions,ThunkAction, Action } from "@reduxjs/toolkit";
import cartSlice from "../features/Carthook";
import productSlice from "../features/productshook";


export const store =    configureStore({
  reducer: {
    cart: cartSlice,
    Allproducts : productSlice,
  }
})

// import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


