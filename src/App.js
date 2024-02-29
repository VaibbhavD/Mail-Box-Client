import "./App.css";
import Signup from "./component/Signup/SignUp";
import Login from "./component/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Layout from "./component/Pages/Layout";
import Home from "./component/Pages/Home";
import Mail from "./component/Mail Editer/Mail";
import SentPage from "./component/Pages/SentPage";
import InboxPage from "./component/Pages/InboxPage";
import { GetSentEmails, SentEmail } from "./Store/Emailaction";
import { useEffect } from "react";
import EmailSummury from "./component/Inbox/EmailSummury";
import TrashPage from "./component/Pages/TrashPage";
import StarPage from "./component/Pages/StarPage";
import SentEmailSummury from "./component/Sent/SentEmailSummury";
import { EmailActions } from "./Store/EmailSlice";

let Initial = true;

function App() {
  const IsLoggedin = useSelector((state) => state.Auth.IsLoggedin);
  const Emails = useSelector((state) => state.Email);
  const email = useSelector((state) => state.Auth.Email);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSentEmails(email));
  }, []);

  useEffect(() => {
    if (Initial) {
      Initial = false;
      return;
    }

    dispatch(SentEmail(Emails, email));
  }, [Emails]);

  // function CheckemailUpdates() {
  //   // Code to fetch updates from the API and update the application
  //   dispatch(EmailActions.Checkupdates());
  // }

  // // Set interval to check for updates every 24 hours (86,400,000 ms)
  // setInterval(CheckemailUpdates, 5000);

  return (
    <>
      <Routes>
        {!IsLoggedin && <Route path="/" element={<Login />} />}
        {!IsLoggedin && <Route path="/Signup" element={<Signup />} />}
        {!IsLoggedin && <Route path="*" element={<Login />} />}
      </Routes>
      {IsLoggedin && (
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inbox" element={<InboxPage />} />
            <Route path="/inbox/:id" element={<EmailSummury />} />
            <Route path="/mailediter" element={<Mail />} />
            <Route path="/sent" element={<SentPage />} />
            <Route path="/sent/:id" element={<SentEmailSummury />} />
            <Route path="/trash" element={<TrashPage />} />
            <Route path="/star" element={<StarPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
