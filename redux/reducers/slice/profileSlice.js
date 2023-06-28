import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
  },
  reducers: {
    profileSet: (state, action) => {
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        state.email = action.payload.email
    },
    profileReSet: (state) => {
        state.firstName = ''
        state.lastName = ''
        state.email = ''
    },
  },
});

export const { profileSet, profileReSet } = profileSlice.actions;
export default profileSlice.reducer;
