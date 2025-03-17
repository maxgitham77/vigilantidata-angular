import { configureStore } from "@reduxjs/toolkit";
import {injectDispatch, injectSelector} from "@reduxjs/angular-redux";

export interface RootState {}

const rootReducer = (state: RootState | undefined, action: any): RootState => {
  if (action.type === "logout/updateLogout") {

  }
  return {};
}

export const store = configureStore({
  reducer: rootReducer,
});

export type  AppDispatch = typeof store.dispatch;

// If I want to dispatch some data to the store, I will be using this injectAooDispatch method
export const injectAppDispatch = injectDispatch.withTypes<AppDispatch>();
// If I want to get data from the store, I will be using injectAppSelector.
export const injectAppSelector = injectSelector.withTypes<RootState>();
