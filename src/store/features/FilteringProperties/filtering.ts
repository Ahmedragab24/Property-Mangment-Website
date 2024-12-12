import { city } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface filteringState {
  room: number;
  city: city | undefined;
  guests: number;
  bathroom: number;
  kitchen: number;
  amenities: string[];
}

const initialState: filteringState = {
  room: 2,
  city: undefined,
  guests: 1,
  bathroom: 1,
  kitchen: 1,
  amenities: [],
};

export const filteringSlice = createSlice({
  name: "filteringProperties",
  initialState,
  reducers: {
    setFilteringRoom: (state, action: PayloadAction<number>) => {
      state.room = action.payload;
    },
    setFilteringCity: (state, action: PayloadAction<city>) => {
      state.city = action.payload;
    },
    setFilteringGuests: (state, action: PayloadAction<number>) => {
      state.guests = action.payload;
    },
    setFilteringBathroom: (state, action: PayloadAction<number>) => {
      state.bathroom = action.payload;
    },
    setFilteringKitchen: (state, action: PayloadAction<number>) => {
      state.kitchen = action.payload;
    },
    setFilteringAmenities: (state, action: PayloadAction<string>) => {
      state.amenities.push(action.payload);
    },
  },
});

// Actions and selectors
export const {
  setFilteringRoom,
  setFilteringCity,
  setFilteringGuests,
  setFilteringBathroom,
  setFilteringKitchen,
  setFilteringAmenities,
} = filteringSlice.actions;

export default filteringSlice.reducer;
