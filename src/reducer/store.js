import { configureStore } from "@reduxjs/toolkit";
import logInStatusReducer from "./loginStatusSlice";

export default configureStore({
  reducer: {
    logInStatus: logInStatusReducer,
  },
});
