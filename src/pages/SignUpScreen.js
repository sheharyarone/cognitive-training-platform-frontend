import React, { useState } from "react";
import "../styles/SignUpScreen.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/default-monochrome-white.svg";

export default function SignUpScreen() {
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };
  const handleLNameChange = (e) => {
    setLName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation checks
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }
    // Submit form data to server
    console.log(firstName, lastName, email, password);
    fetch("http://localhost:5000/signup", {
      method: "POST",
      crossDomain: "true",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          alert("USER REGISTERD!");
          window.location.href = "./login";
        } else {
          alert("user already registered!");
          console.log(data, "user Not Registered");
        }
      });
  };

  return (
    <div className="bg-signup">
      <div className="row h-100">
        <div className="p-5 col-md-5 col-sm-12 d-flex align-items-center justify-content-center">
          <Logo />
        </div>
        <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center">
          <div className="row justify-content-center pt-lg-5 pt-md-2">
            <div className="col-12">
              <h2 className="text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                  <label htmlFor="fname">First Name</label>
                  <input
                    placeholder="John"
                    className="form-control"
                    value={firstName}
                    onChange={handleFNameChange}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="lname">Last Name</label>
                  <input
                    placeholder="Wick"
                    className="form-control"
                    value={lastName}
                    onChange={handleLNameChange}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className={`form-control ${emailError ? "is-invalid" : ""}`}
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && (
                    <div className="invalid-feedback">{emailError}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      passwordError ? "is-invalid" : ""
                    }`}
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      confirmPasswordError ? "is-invalid" : ""
                    }`}
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  {confirmPasswordError && (
                    <div className="invalid-feedback">
                      {confirmPasswordError}
                    </div>
                  )}
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary mt-4">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="d-flex justify-content-end">
                <Link to="/login">
                  <p className="link-color">Already have an account? Log in!</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
