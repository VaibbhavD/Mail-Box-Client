import { createSlice } from "@reduxjs/toolkit";

const InitialState = { Inbox: [], Sent: [], Draft: [], Star: [], Trash: [] };

const EmailSlice = createSlice({
  name: "EmailSlice",
  initialState: InitialState,
  reducers: {
    AddSent: (state, action) => {
      state.Sent.push(action.payload);
      state.Inbox.push(action.payload);
      console.log(action.payload);
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
    SeeEmails: (state, action) => {
      const newemail = state.Inbox.find((e) => e.id === action.payload);
      newemail.db = true;
    },
    ReplaceSentEmails: (state, action) => {
      state.Inbox = action.payload.Sent;
      state.Sent = action.payload.Sent;
      state.Draft = action.payload.Draft;
      state.Star = action.payload.Star;
      state.Trash = action.payload.Trash;
    },
  },
});
export const EmailActions = EmailSlice.actions;
export const Emailreducer = EmailSlice.reducer;
