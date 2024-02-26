import { createSlice } from "@reduxjs/toolkit";

const InitialState = { Inbox: [], Sent: [], Draft: [], Star: [], Trash: [] };

const EmailSlice = createSlice({
  name: "EmailSlice",
  initialState: InitialState,
  reducers: {
    AddSent: (state, action) => {
      state.Sent.push(action.payload);
    },
    AddDraft: (state, action) => {
      state.Draft.push(action.payload);
    },
    AddStar: (state, action) => {
      state.Star.push(action.payload);
    },
    AddTrash: (state, action) => {
      state.Trash.push(action.payload);
    },
  },
});
export const EmailActions = EmailSlice.actions;
export const Emailreducer = EmailSlice.reducer;
