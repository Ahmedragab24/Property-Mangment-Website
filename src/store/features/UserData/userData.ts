import { ILandlord, UserData } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface UserState {
  user: UserData | null;
  landlord: ILandlord | null;
}

const initialState: UserState = {
  user:
    typeof window !== "undefined" && Cookies.get("user")
      ? JSON.parse(Cookies.get("user") || "{}")
      : null,
  landlord:
    typeof window !== "undefined" && Cookies.get("landlord")
      ? JSON.parse(Cookies.get("landlord") || "{}")
      : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToUserData: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
      if (typeof window !== "undefined") {
        Cookies.set("user", JSON.stringify(state.user), {
          expires: 4,
          secure: true,
        });
      }
    },

    removeUserData: (state) => {
      state.user = null;
      if (typeof window !== "undefined") {
        Cookies.remove("user");
      }
    },

    addToLandlordData: (state, action: PayloadAction<ILandlord>) => {
      state.landlord = action.payload;
      if (typeof window !== "undefined") {
        Cookies.set("landlord", JSON.stringify(state.landlord), {
          expires: 1,
          secure: true,
        });
      }
    },
  },
});

export const { addToUserData, removeUserData, addToLandlordData } =
  userSlice.actions;
export default userSlice.reducer;
