// features/favoritesSlice.js
import { IProperty } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("favorites") || "[]")
      : [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.favorites.some(
        (item: IProperty) => item.$id === action.payload.$id
      );
      if (!exists) {
        state.favorites.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item: IProperty) => item.$id !== action.payload.$id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
