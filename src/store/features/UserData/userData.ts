import { IUser } from "@/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface UserState {
  user: IUser | null;
}

const initialState: UserState = {
  user:
    typeof window !== "undefined" && Cookies.get("user")
      ? JSON.parse(Cookies.get("user") || "{}")
      : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToUserData: (state, action: PayloadAction<IUser>) => {
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
  },
});

export const { addToUserData, removeUserData } = userSlice.actions;
export default userSlice.reducer;
