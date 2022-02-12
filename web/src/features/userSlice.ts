import { RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "./types";

const initialState: User = {
  firstName: "",
  userName: "",
  lastName: "",
  photoUrl: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    init: (_, { payload }) => {
      console.log(payload);
    },
  },
});

export const { init } = userSlice.actions;
export const selectUser = (store: RootState) => store.user;
export const userReducer = userSlice.reducer;
