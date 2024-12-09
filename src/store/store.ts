import { configureStore } from "@reduxjs/toolkit";
import heroNavReducer from "./features/heroNav/heroNavSlice";
import { apiSlice } from "./apis/apis";
import favoritesReducer from "./features/FavoritesProperties/favoritesProperties";
import filteringReducer from "./features/FilteringProperties/filtering";
import UserDataReducer from "./features/UserData/userData";
import StepsReducer from "./features/stepsAddLidting/stepsSlice";
import imageReducer from "./features/UploadingImages/imagesSlice";

export const store = configureStore({
  reducer: {
    heroNav: heroNavReducer,
    favorites: favoritesReducer,
    filteringProperties: filteringReducer,
    UserData: UserDataReducer,
    steps: StepsReducer,
    images: imageReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
