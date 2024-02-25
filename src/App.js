import "./App.css";
import Signup from "./component/Signup/SignUp";
import Login from "./component/Login/Login";
import { AuthActions } from "./Store/AuthSlice";
import { useSelector } from "react-redux";
import { Route, Router, Routes } from "react-router";
import Layout from "./component/Pages/Layout";
import Home from "./component/Pages/Home";
import Mail from "./component/Mail Editer/Mail";

function App() {
  const IsLoggedin = useSelector((state) => state.IsLoggedin);

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
            <Route path="/mailediter" element={<Mail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
