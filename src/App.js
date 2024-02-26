import "./App.css";
import Signup from "./component/Signup/SignUp";
import Login from "./component/Login/Login";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Layout from "./component/Pages/Layout";
import Home from "./component/Pages/Home";
import Mail from "./component/Mail Editer/Mail";
import Sent from "./component/Sent/Sent";
import SentPage from "./component/Pages/SentPage";
import InboxPage from "./component/Pages/InboxPage";

function App() {
  const IsLoggedin = useSelector((state) => state.Auth.IsLoggedin);

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
