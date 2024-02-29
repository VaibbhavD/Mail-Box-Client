import React from "react";
import { Link } from "react-router-dom";
import { AuthActions } from "../../Store/AuthSlice";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
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
      </div>
    </nav>
  );
};
export default NavBar;
