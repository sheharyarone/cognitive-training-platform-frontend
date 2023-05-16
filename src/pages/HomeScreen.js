import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const [userData, setUserData] = useState("");
  useEffect(() => {
    // Define an async function to fetch data from the URL
    const fetchData = async () => {
      // Send a POST request to the URL using fetch
      const response = await fetch("http://localhost:5000/auth/userDetails", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        // Pass the token as the body of the request, converted to JSON
        body: JSON.stringify({
          token: window.localStorage.getItem("token"),
        }),
      });
      // Parse the response as JSON and store it in a variable called data
      const fetchedData = await response.json();
      // Log the data to the console for debugging purposes
      console.log("FETCHED DATA", fetchedData);
      // UPDATING THE STATE OF USER DATA
      setUserData(fetchedData.data);
    };
    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  const navigate = useNavigate();
  const logOut = () => {
    // Remove the token from local storage
    window.localStorage.removeItem("token");
    window.localStorage.setItem("isLoggedIn", "false");
    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <div className="mt-5 ">
      <div>
        <button className="btn btn-secondary float-end me-5" onClick={logOut}>
          LOGOUT
        </button>
      </div>
      <h1 className="text-center">WELCOME TO HOME SCREEN</h1>
      <h4 id="firstName">FIRST NAME : {userData.firstName}</h4>
      <h4 id="lastName">LAST NAME : {userData.lastName}</h4>
      <h4 id="email">EMAIL : {userData.email}</h4>
    </div>
  );
}
