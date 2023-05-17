import React, { useState } from "react";
import "../styles/LoginScreen.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/default-monochrome-white.svg";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your code to handle login submission
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: "true",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLoggedIn");
        if (data.status === "ok") {
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("isLoggedIn", "true");
          window.localStorage.setItem("email", email);
          window.location.href = "./home";
        } else {
          alert("can't login! check your credentials and network connection !");
        }
      });
  };

  return (
    <div className="bg-login">
      <div className="row h-100">
        <div className="pt-5 ps-5 pe-5 col-md-5 col-sm-12 d-flex align-items-center justify-content-center">
          <Logo />
        </div>
        <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center">
          <div className="row justify-content-center">
            <div className="col-12">
              <h2 className="text-center mb-4">LOGIN</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group pt-md-2 pt-lg-4">
                  <label htmlFor="email">Email address</label>
                  <input
                    placeholder="someone@example.com"
                    type="email"
                    className="form-control mt-3"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group pt-4">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    className="form-control mt-3"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
              <div className="d-flex justify-content-end">
                <Link to="/signup">
                  <p className="link-color">Don't have an account? Sign up!</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
