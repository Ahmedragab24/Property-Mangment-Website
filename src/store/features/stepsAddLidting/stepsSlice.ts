import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Steps {
  stepOne: boolean;
  stepTwo: boolean;
  stepThree: boolean;
}

const initialState: Steps = {
  stepOne: true,
  stepTwo: false,
  stepThree: false,
};

export const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    setSteps: (state, action: PayloadAction<Steps>) => {
      state.stepOne = action.payload.stepOne;
      state.stepTwo = action.payload.stepTwo;
      state.stepThree = action.payload.stepThree;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSteps } = stepsSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.steps;

export default stepsSlice.reducer;
