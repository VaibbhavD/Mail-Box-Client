import React from "react";
import { Link } from "react-router-dom";
import { AuthActions } from "../../Store/AuthSlice";
import { useDispatch } from "react-redux";
import MailLogo from "../UI/MailLogo";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
      <div class="container-fluid">
        <MailLogo>
          <a class="navbar-brand fs-4 fw-bolder mx-2"> MailBox</a>
        </MailLogo>
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
      </div>
    </nav>
  );
};
export default NavBar;
