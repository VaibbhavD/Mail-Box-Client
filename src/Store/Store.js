import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers } from "./AuthSlice";
import { Emailreducer } from "./EmailSlice";

const Store = configureStore({
  reducer: { Auth: AuthReducers, Email: Emailreducer },
});

export default Store;
