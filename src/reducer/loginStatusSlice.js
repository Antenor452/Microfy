import { createSlice } from "@reduxjs/toolkit";

const logInStatus = JSON.parse(localStorage.getItem("logInStatus"));
export const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState: {
    isLoggedIn: logInStatus,
  },
  reducers: {
    updateLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { updateLoginStatus } = loginStatusSlice.actions;

export default loginStatusSlice.reducer;
