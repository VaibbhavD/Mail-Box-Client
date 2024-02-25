import { createSlice } from "@reduxjs/toolkit";

const Token = localStorage.getItem("toke");
const InitialAuth = { IsLoggedin: !Token, token: Token };

const AuthSlice = createSlice({
  name: "Auth",
  initialState: InitialAuth,
  reducers: {
    Login: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
      state.IsLoggedin = true;
    },
    Logout: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.IsLoggedin = false;
    },
  },
});

export const AuthActions = AuthSlice.actions;
export const AuthReducers = AuthSlice.reducer;
