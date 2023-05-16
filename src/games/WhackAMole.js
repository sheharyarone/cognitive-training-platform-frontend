import React, { useState, useEffect } from "react";
import "../styles/WhackAMole.css";

const WhackAMole = (props) => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [isRendering, setIsRendering] = useState(true);

  const handleClick = (event) => {
    const classNames = event.target.className;
    console.log(classNames);
    if (classNames === "place bg-image") {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    if (time == 0) {
      clearInterval(timer);
      setIsRendering(false);
    }
  }, []);

  const createBoard = () => {
    const places = [];
    const id = Math.floor(Math.random() * 16);
    for (let i = 0; i < 16; i++) {
      const className = i === id ? "place bg-image" : "place";
      places.push(
        <div key={i} onClick={handleClick} className={className}></div>
      );
    }
    return places;
  };

  if (!isRendering) {
    return null;
  }

  return (
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
        <div id="ground">{createBoard()}</div>
      </main>
    </div>
  );
};

export default WhackAMole;
