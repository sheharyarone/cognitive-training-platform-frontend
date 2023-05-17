import React, { useState, useEffect, useRef } from "react";
import "../styles/WhackAMole.css";
import Navbar from "../components/Navbar";

export default function WhackAMole() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [isRendering, setIsRendering] = useState(false);
  const [molePosition, setMolePosition] = useState(null);

  const timerRef = useRef(null);

  const handleClick = (event) => {
    const classNames = event.target.className;
    if (classNames === "place bg-image") {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 1);
    }
    setMolePosition(getRandomPosition());
  };

  useEffect(() => {
    if (isRendering) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isRendering]);

  useEffect(() => {
    if (time === 0) {
      clearInterval(timerRef.current);
      setIsRendering(false);
      setMolePosition(null);
      // Make API request here
      fetch("http://localhost:5000/whackaMoleData", {
        method: "POST",
        // Add your request headers and body here
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: window.localStorage.getItem("email"),
          score: score,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          console.log("API response:", data);
        })
        .catch((error) => {
          // Handle any errors
          console.error("API error:", error);
        });
      alert("Congratulations! TO VIEW SCORE VISIT PROGRESS SECTION !");
    }
  }, [time]);

  const startGame = () => {
    setIsRendering(true);
    setTime(30);
    setScore(0);
    setMolePosition(getRandomPosition());
  };

  const getRandomPosition = () => {
    const randomIndex = Math.floor(Math.random() * 16);
    return randomIndex;
  };

  const createBoard = () => {
    const board = [];
    for (let i = 0; i < 16; i++) {
      const isMole = i === molePosition;
      const className = isMole ? "place bg-image" : "place";
      board.push(
        <div key={i} onClick={handleClick} className={className}></div>
      );
    }
    return board;
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <main>
          <div id="header" className="flex">
            <h1>Whack A Mole!</h1>
            <p id="left">
              Score: <span id="score">{score}</span>
            </p>
            <p id="right">
              Time: <span id="time">{time}</span>s
            </p>
          </div>
          {isRendering ? (
            <div id="ground" className="grid">
              {createBoard()}
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center h-100">
              <button onClick={startGame} className="px-5 py-2 btn btn-warning">
                Start
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
