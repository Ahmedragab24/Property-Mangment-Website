import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface filteringState {
  room: string;
  city: string;
  guests: string;
}

const initialState: filteringState = {
  room: "",
  city: "",
  guests: "",
};

export const filteringSlice = createSlice({
  name: "filteringProperties",
  initialState,
  reducers: {
    setFilteringRoom: (state, action: PayloadAction<string>) => {
      state.room = action.payload;
    },
    setFilteringCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setFilteringGuests: (state, action: PayloadAction<string>) => {
      state.guests = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilteringRoom, setFilteringCity, setFilteringGuests } =
  filteringSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const filtering = (state: RootState) => state.heroNav.value;

export default filteringSlice.reducer;
