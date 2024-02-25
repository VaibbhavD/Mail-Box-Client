import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers } from "./AuthSlice";

const Store = configureStore({
  reducer: AuthReducers,
});

export default Store;
