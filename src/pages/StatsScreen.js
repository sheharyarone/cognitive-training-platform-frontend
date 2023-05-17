import "../styles/StatsScreen.css";
import React, { useEffect, useState } from "react";
import Matchchart from "../components/Matchchart";
import Molechart from "../components/Molechart";
import Navbar from "../components/Navbar";

export default function StatsScreen() {
  const [render, setRender] = useState(true);
  const [scoresMole, setMole] = useState([]);
  const [flips, setFlips] = useState([]);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    function handlewhackamoledata(data) {
      // Sort the array based on the date attribute in ascending order
      const sortedData = data.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      // Create a new array containing the scores in the sorted order
      const scores = sortedData.map((item) => item.score);
      setMole(scores);
      // return scores;
    }
    function handlememoryData(data) {
      // Sort the array based on the date attribute in ascending order
      const sortedData = data.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );

      // Create separate arrays for flips and totalTime
      const flipsArray = sortedData.map((item) => item.flips);
      const totalTimeArray = sortedData.map((item) => item.totalTime);

      setFlips(flipsArray);
      setTimes(totalTimeArray);
    }

    const fetchWhackaMoleData = async () => {
      try {
        const email = localStorage.getItem("email");
        const response = await fetch(
          `http://localhost:5000/whackaMoleGetData?email=${email}`
        );
        if (!response.ok) {
          throw new Error("Error retrieving game data");
        }
        const data = await response.json();
        handlewhackamoledata(data);
        console.log(data);
      } catch (error) {
        console.error("Error retrieving game data:", error);
      }
    };

    const fetchmemoryGameData = async () => {
      try {
        const email = localStorage.getItem("email");
        const response = await fetch(
          `http://localhost:5000/memoryGameGetData?email=${email}`
        );
        if (!response.ok) {
          throw new Error("Error retrieving game data");
        }
        const data = await response.json();
        handlememoryData(data);
        console.log(data);
      } catch (error) {
        console.error("Error retrieving game data:", error);
      }
    };
    fetchmemoryGameData(); //
    fetchWhackaMoleData(); //
  }, []);

  const labelarray = ["Category 1", "Category 2"];
  if (render) {
    return (
      <div className="bg-stats">
        <Navbar />
        <div className="headingfont row d-flex align-items-center justify-content-center text-center text-white mx-3 pt-2">
          Your Stats
        </div>
        <div className="row justify-content-around h-75 mx-3">
          <div className="col-2 px-5">
            <div className="row h-75 d-flex align-items-center justify-content-center">
              <button
                className="col-12 btn btn-primary align-items-center justify-content-center h-auto"
                onClick={() => setRender(true)}
              >
                Mole
              </button>
              <button
                className="col-12 btn btn-primary align-items-center justify-content-center h-auto"
                onClick={() => setRender(false)}
              >
                Match
              </button>
            </div>
          </div>
          <div className="col-7 d-flex align-items-center justify-content-center px-5">
            <Molechart scoresMole={scoresMole} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-stats">
      <Navbar />
      <div className="headingfont row d-flex align-items-center justify-content-center text-center text-white mx-3 pt-2">
        Your Stats
      </div>
      <div className="row justify-content-around h-75 mx-3">
        <div className="col-2 px-5">
          <div className="row h-75 d-flex align-items-center justify-content-center">
            <button
              className="col-12 btn btn-primary align-items-center justify-content-center h-auto"
              onClick={() => setRender(true)}
            >
              Mole
            </button>
            <button
              className="col-12 btn btn-primary align-items-center justify-content-center h-auto"
              onClick={() => setRender(false)}
            >
              Match
            </button>
          </div>
        </div>
        <div className="col-7 d-flex align-items-center justify-content-center px-5">
          <Matchchart times={times} flips={flips} />
        </div>
      </div>
    </div>
  );
}
