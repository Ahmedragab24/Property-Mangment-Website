import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  isBackgroundImg: boolean;
  value: boolean;
}

const initialState: CounterState = {
  isBackgroundImg: false,
  value: true,
};

export const heroNavSlice = createSlice({
  name: "heroNav",
  initialState,
  reducers: {
    setColorNavLink: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    setIsBackgroundImg: (state, action: PayloadAction<boolean>) => {
      state.isBackgroundImg = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setColorNavLink, setIsBackgroundImg } = heroNavSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.heroNav.value;

export default heroNavSlice.reducer;
