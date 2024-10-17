import { configureStore } from "@reduxjs/toolkit";
import heroNavReducer from "./features/heroNav/heroNavSlice";

export const store = configureStore({
  reducer: {
    heroNav: heroNavReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
