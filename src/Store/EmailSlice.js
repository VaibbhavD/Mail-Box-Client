import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  Inbox: [],
  Sent: [],
  Draft: [],
  Star: [],
  Trash: [],
  UnreadEmails: [],
};

const EmailSlice = createSlice({
  name: "EmailSlice",
  initialState: InitialState,
  reducers: {
    AddSent: (state, action) => {
      state.Sent.unshift(action.payload);
      state.Inbox.push(action.payload);
      state.UnreadEmails.push(action.payload);
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
      const temp = state.UnreadEmails.filter((e) => e.id !== action.payload);
      state.UnreadEmails = temp;
    },
    DeleteInbox: (state, action) => {
      const temp = state.Inbox.filter((e) => e.id !== action.payload.id);
      state.Inbox = temp;
      console.log(action.payload);
      state.Trash.unshift(action.payload);
    },
    DeleteSent: (state, action) => {
      const temp = state.Sent.filter((e) => e.id !== action.payload.id);
      state.Sent = temp;
    },

    MakeImported: (state, action) => {
      const NewEmail = state.Inbox.find((e) => e.id === action.payload.id);
      NewEmail.important = true;
      state.Star.unshift(NewEmail);
    },
    UndoImported: (state, action) => {
      const NewEmail = state.Inbox.find((e) => e.id === action.payload.id);
      NewEmail.important = false;
      const temp = state.Star.filter((e) => e.id !== action.payload.id);
      state.Star = temp;
    },
    Checkupdates: (state) => {
      const UnreadEmails = state.Inbox.filter((e) => e.db === false);
      state.UnreadEmails = UnreadEmails;
    },
    AddDraft: (state, action) => {
      state.Draft.unshift(action.payload);
    },
    DeleteDraft: (state, action) => {
      const temp = state.Draft.filter((e) => e.id !== action.payload.id);
      state.Draft = temp;
    },
    ReplaceSentEmails: (state, action) => {
      if (action.payload.Inbox) {
        state.Inbox = action.payload.Inbox;
      }
      if (action.payload.Sent) {
        state.Sent = action.payload.Sent;
      }
      if (action.payload.Draft) {
        state.Draft = action.payload.Draft;
      }
      if (action.payload.Star) {
        state.Star = action.payload.Star;
      }
      if (action.payload.Trash) {
        state.Trash = action.payload.Trash;
      }
      // if (action.payload.UnreadEmails) {
      //   state.UnreadEmails = action.payload.UnreadEmails;
      // }

      // state.UnreadEmails = action.payload.UnreadEmails;
    },
  },
});
export const EmailActions = EmailSlice.actions;
export const Emailreducer = EmailSlice.reducer;
