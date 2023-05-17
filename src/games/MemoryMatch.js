import React, { useState, useEffect } from "react";
import "../styles/MemoryMatch.css";

export default function Game2() {
  const [gameBoard, setGameBoard] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [totalFlips, setTotalFlips] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const shuffle = (array) => {
    const clonedArray = [...array];

    for (let index = clonedArray.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      const original = clonedArray[index];

      clonedArray[index] = clonedArray[randomIndex];
      clonedArray[randomIndex] = original;
    }

    return clonedArray;
  };

  const pickRandom = (array, items) => {
    const clonedArray = [...array];
    const randomPicks = [];

    for (let index = 0; index < items; index++) {
      const randomIndex = Math.floor(Math.random() * clonedArray.length);

      randomPicks.push(clonedArray[randomIndex]);
      clonedArray.splice(randomIndex, 1);
    }

    return randomPicks;
  };

  const generateGame = () => {
    const dimensions = 4; // Set the desired dimensions of the board

    if (dimensions % 2 !== 0) {
      throw new Error("The dimension of the board must be an even number.");
    }

    const emojis = ["🥔", "🍒", "🥑", "🌽", "🥕", "🍇", "🍉", "🍌", "🥭", "🍍"];
    const picks = pickRandom(emojis, (dimensions * dimensions) / 2);
    const items = shuffle([...picks, ...picks]);

    const gameBoard = items.map((item, index) => ({
      id: index,
      emoji: item,
      isFlipped: false,
      isMatched: false,
    }));

    setGameBoard(gameBoard);
  };

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        setTotalTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  const flipCard = (card) => {
    setTotalFlips((prevFlips) => prevFlips + 1);

    if (!gameStarted) {
      setGameStarted(true);
    }

    // Flip the clicked card
    setGameBoard((prevBoard) =>
      prevBoard.map((prevCard) =>
        prevCard.id === card.id ? { ...prevCard, isFlipped: true } : prevCard
      )
    );

    const flippedCards = gameBoard.filter(
      (prevCard) => prevCard.isFlipped && !prevCard.isMatched
    );

    if (flippedCards.length === 2) {
      if (flippedCards[0].emoji === flippedCards[1].emoji) {
        // Matched cards
        setGameBoard((prevBoard) =>
          prevBoard.map((prevCard) =>
            prevCard.id === flippedCards[0].id ||
            prevCard.id === flippedCards[1].id
              ? { ...prevCard, isMatched: true }
              : prevCard
          )
        );
      } else {
        // Unflip cards
        setGameBoard((prevBoard) =>
          prevBoard.map((prevCard) =>
            prevCard.isFlipped && !prevCard.isMatched
              ? { ...prevCard, isFlipped: false }
              : prevCard
          )
        );
      }
    }
    // If there are no more cards that can be flipped, the game is won
    if (
      gameBoard.filter((prevCard) => !prevCard.isFlipped && !prevCard.isMatched)
        .length === 0
    ) {
      setTimeout(() => {
        // Game won
        console.log("You won!");
      }, 1000);
    }
  };

  return (
    <div className="contain">
      <div className="game">
        <div className="controls">
          <button onClick={generateGame}>Start</button>
          <div className="stats">
            <div className="moves">{totalFlips} moves</div>
            <div className="timer">time: {totalTime} sec</div>
          </div>
        </div>
        <div className="board-container">
          <div className="board" data-dimension="4">
            {gameBoard.map((card) => (
              <div
                key={card.id}
                className={`card ${card.isFlipped ? "flipped" : ""}`}
                onClick={() => flipCard(card)}
              >
                <div className="card-front"></div>
                <div className="card-back">
                  {card.isFlipped ? card.emoji : ""}
                </div>
              </div>
            ))}
          </div>
          <div className="win">You won!</div>
        </div>
      </div>
    </div>
  );
}
