import { city, Filtering } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface filteringState {
  room: number;
  city: city | "";
  guests: number;
  bathroom: number;
  kitchen: number;
  amenities: string[];
  type: Filtering;
}

const initialState: filteringState = {
  room: 2,
  city: "",
  guests: 1,
  bathroom: 1,
  kitchen: 1,
  amenities: [],
  type: "initial",
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
    
    setFilteringType: (state, action: PayloadAction<Filtering>) => {
      state.type = action.payload;
    },
  },
});

// Actions and selectors
export const {
  setFilteringRoom,
  setFilteringCity,
  setFilteringType,
  setFilteringGuests,
  setFilteringBathroom,
  setFilteringKitchen,
  setFilteringAmenities,
} = filteringSlice.actions;

export default filteringSlice.reducer;
