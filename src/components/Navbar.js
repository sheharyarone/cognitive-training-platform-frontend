import React from "react";
import { ReactComponent as Logo } from "../assets/isolated-monochrome-white.svg";
import Profile from "../assets/profile.png";

export default function Navbar() {
  const logOut = () => {
    // Remove the token from local storage
    localStorage.clear();
    window.location.href = "./login";
  };
  return (
    <nav className="navbar navbar-expand-lg shadow-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-nav me-auto">
          <a
            className="nav-link"
            onClick={() => (window.location.href = "./home")}
          >
            <Logo className="ms-5" style={{ width: "200px" }} />
          </a>
        </div>
        <div className="navbar-nav dropdown me-5">
          <a
            className="nav-link dropdown-toggle me-5"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={Profile} width={"50px"} />
          </a>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                onClick={() => (window.location.href = "./statsscreen")}
              >
                Progress
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={logOut}>
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
