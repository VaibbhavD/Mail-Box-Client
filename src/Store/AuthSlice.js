import { createSlice } from "@reduxjs/toolkit";

const Token = localStorage.getItem("token");
const LocalEmail = localStorage.getItem("Email");
const InitialAuth = { IsLoggedin: !!Token, token: Token, Email: LocalEmail };

const AuthSlice = createSlice({
  name: "Auth",
  initialState: InitialAuth,
  reducers: {
    Login: (state, action) => {
      localStorage.setItem("token", action.payload.idToken);
      state.token = action.payload;
      let email = action.payload.email;
      email = email.replaceAll(".", "");
      email = email.replaceAll("@", "");
      state.Email = email;
      localStorage.setItem("Email", email);
      state.IsLoggedin = true;
    },
    Logout: (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("Email");
      state.token = null;
      state.Email = null;
      state.IsLoggedin = false;
    },
  },
});

export const AuthActions = AuthSlice.actions;
export const AuthReducers = AuthSlice.reducer;
