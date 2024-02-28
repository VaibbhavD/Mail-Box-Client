import { useSelector } from "react-redux";
import { EmailActions } from "./EmailSlice";

export const SentEmail = (SentEmails, email) => {
  console.log("Action");
  return async (dispatch) => {
    const FetchSentEmail = async () => {
      const response = await fetch(
        `https://authentication-1db8c-default-rtdb.firebaseio.com/${email}.json`,
        {
          method: "PUT",
          body: JSON.stringify(SentEmails),
        }
      );
      if (!response.ok) {
        throw new Error("Seding Cart Data Failed !");
      }
    };
    try {
      const data = await FetchSentEmail();
      console.log(data);
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const GetSentEmails = (email) => {
  return async (dispatch) => {
    const GetSetEmails = async () => {
      const response = await fetch(
        `https://authentication-1db8c-default-rtdb.firebaseio.com/${email}.json`
      );
      const data = await response.json();
      return data;
    };
    try {
      const SentEmails = await GetSetEmails();
      console.log(SentEmails);
      dispatch(EmailActions.ReplaceSentEmails(SentEmails));
    } catch (error) {
      // throw new Error(error);
    }
  };
};