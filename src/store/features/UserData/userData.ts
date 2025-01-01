import { ILandlord, UserData } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface UserState {
  user: UserData | null;
  landlord: ILandlord | null;
}

const isClient = typeof window !== "undefined";

const initialState: UserState = {
  user:
    isClient && Cookies.get("user")
      ? JSON.parse(Cookies.get("user") || "{}")
      : null,
  landlord:
    isClient && Cookies.get("landlord")
      ? JSON.parse(Cookies.get("landlord") || "{}")
      : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToUserData: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
      if (isClient) {
        const isSecure = window.location.protocol === "https:";
        Cookies.set("user", JSON.stringify(state.user), {
          expires: 4,
          secure: isSecure,
        });
      }
    },

    removeUserData: (state) => {
      state.user = null;
      if (isClient) {
        Cookies.remove("user");
      }
    },

    addToLandlordData: (state, action: PayloadAction<ILandlord>) => {
      state.landlord = action.payload;
      if (isClient) {
        const isSecure = window.location.protocol === "https:";
        Cookies.set("landlord", JSON.stringify(state.landlord), {
          expires: 1,
          secure: isSecure,
        });
      }
    },
  },
});

export const { addToUserData, removeUserData, addToLandlordData } =
  userSlice.actions;
export default userSlice.reducer;
