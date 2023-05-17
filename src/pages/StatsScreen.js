import "../styles/StatsScreen.css";
import React, { useEffect } from "react";
import Graph from "../components/Matchchart";
import Navbar from "../components/Navbar";

export default function StatsScreen() {
  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await fetch("http://localhost:5000/whackaMoleGetData");
        if (!response.ok) {
          throw new Error("Error retrieving game data");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error retrieving game data:", error);
      }
    };

    fetchGameData();
  }, []);

  const labelarray = ["Category 1", "Category 2"];
  return (
    <div className="bg-stats">
      <Navbar />
      <div className="headingfont row d-flex align-items-center justify-content-center text-center text-white mx-3 pt-2">
        Your Stats
      </div>
      <div className="row justify-content-around h-75 mx-3">
        <div className="col-2 px-5">
          <div className="row h-75 d-flex align-items-center justify-content-center">
            <div className="col-12 btn btn-primary align-items-center justify-content-center h-auto">
              Mole
            </div>
            <div className="col-12 btn btn-primary align-items-center justify-content-center h-auto">
              Match
            </div>
          </div>
        </div>
        <div className="col-7 d-flex align-items-center justify-content-center px-5">
          <Graph labels={labelarray} />
        </div>
      </div>
    </div>
  );
}
