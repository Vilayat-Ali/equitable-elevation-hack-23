// lib
import { configureStore } from "@reduxjs/toolkit";

import {RootReducers} from "./slices";

export const store = configureStore({
  reducer: RootReducers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
