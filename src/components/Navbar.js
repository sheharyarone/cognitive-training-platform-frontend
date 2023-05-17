import React from "react";
import { ReactComponent as Logo } from "../assets/isolated-monochrome-white.svg";
import "../components/Navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark custom">
      <div class="container-fluid">
        <div class="navbar-nav me-auto">
          <a class="nav-link" href="#">
            <Logo style={{ width: "300px" }} />
          </a>
        </div>
        <div class="navbar-nav dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
