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

  console.log(email);

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
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
