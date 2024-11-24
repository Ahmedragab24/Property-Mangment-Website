import { configureStore } from "@reduxjs/toolkit";
import heroNavReducer from "./features/heroNav/heroNavSlice";
import { apiSlice } from "./apis/apis";
import favoritesReducer from "./features/FavoritesProperties/favoritesProperties";
import filteringReducer from "./features/FilteringProperties/filtering";

export const store = configureStore({
  reducer: {
    heroNav: heroNavReducer,
    favorites: favoritesReducer,
    filteringProperties: filteringReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
