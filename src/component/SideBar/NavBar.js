import React from "react";
import { Link } from "react-router-dom";
import { AuthActions } from "../../Store/AuthSlice";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Client MailBox
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <Link
                to={"/"}
                class="nav-link mx-2 active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/mailediter"} class="nav-link mx-2" href="#">
                Send Mail
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#">
                Mail Box
              </a>
            </li>
            <li class="nav-item">
              <Link
                to={"/logout"}
                class="nav-link mx-2"
                onClick={() => dispatch(AuthActions.Logout())}
              >
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
