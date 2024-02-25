import "./App.css";
import Signup from "./component/Signup/SignUp";
import Login from "./component/Login/Login";
import { useState } from "react";

function App() {
  const [login, setlogin] = useState(true);

  const ChangeAuth = () => {
    setlogin((prev) => !prev);
  };

  return (
    <>
      {login && <Login ChangeAuth={ChangeAuth} />};
      {!login && <Signup ChangeAuth={ChangeAuth} />}
    </>
  );
}

export default App;
