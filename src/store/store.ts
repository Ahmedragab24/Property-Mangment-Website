import { configureStore } from "@reduxjs/toolkit";
import heroNavReducer from "./features/heroNav/heroNavSlice";
import { apiSlice } from "./apis/apis";
import favoritesReducer from "./features/FavoritesProperties/favoritesProperties";
import filteringReducer from "./features/FilteringProperties/filtering";
import UserDataReducer from "./features/UserData/userData";

export const store = configureStore({
  reducer: {
    heroNav: heroNavReducer,
    favorites: favoritesReducer,
    filteringProperties: filteringReducer,
    UserData: UserDataReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
