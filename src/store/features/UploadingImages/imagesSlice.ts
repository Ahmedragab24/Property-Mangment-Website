import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImagesState {
  singleImage: string | null;
  imageGroup: string[];
  singleImageID: number | null;
  imageGroupIDs: number[];
}

const initialState: ImagesState = {
  singleImage: null,
  imageGroup: [],
  singleImageID: null,
  imageGroupIDs: [],
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setSingleImage(state, action: PayloadAction<string>) {
      state.singleImage = action.payload;
    },
    setImageGroup(state, action: PayloadAction<string[]>) {
      state.imageGroup = action.payload;
    },
    setSingleImageID(state, action: PayloadAction<number>) {
      state.singleImageID = action.payload;
    },
    setImageGroupIDs(state, action: PayloadAction<number[]>) {
      state.imageGroupIDs = action.payload;
    },
    clearSingleImage(state) {
      state.singleImage = null;
      state.singleImageID = null;
    },
    clearImageGroup(state) {
      state.imageGroup = [];
      state.imageGroupIDs = [];
    },
  },
});

export const {
  setSingleImage,
  setImageGroup,
  setSingleImageID,
  setImageGroupIDs,
  clearSingleImage,
  clearImageGroup,
} = imagesSlice.actions;

export default imagesSlice.reducer;