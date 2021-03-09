import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";

const MemoryBoard = () => {
  const [game, setGame] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const numberOfCards = 12;

  const colors = [
    "#8CC084",
    "#AC92A6",
    "#F87666",
    "#90C2E7",
    "#EAE26B",
    "#484D6D",
  ];

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newGame = [];
    for (let i = 0; i < numberOfCards / 2; i++) {
      const firstCard = {
        color: colors[i],
        flipped: false,
      };
      const secondCard = {
        color: colors[i],
        flipped: false,
      };

      newGame.push(firstCard);
      newGame.push(secondCard);
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5);
    setGame(shuffledGame);
  };

  const resetGame = () => {
    const newIndexes = [];
    newIndexes.push(true);
    setFlippedIndexes(newIndexes);

    startNewGame();
  };

  if (flippedIndexes.length === 2) {
    const isMatch =
      game[flippedIndexes[0]].color === game[flippedIndexes[1]].color;

    if (isMatch) {
      const newGame = [...game];
      newGame[flippedIndexes[0]].flipped = true;
      newGame[flippedIndexes[1]].flipped = true;
      setGame(newGame);

      setFlippedIndexes([]);
    } else {
      const newIndexes = [...flippedIndexes];
      newIndexes.push(true);
      setFlippedIndexes(newIndexes);
    }
  }

  if (game.length === 0) return <div>Loading...</div>;
  else {
    return (
      <div>
        <div className="flex mb-8 justify-between">
          {game.some((card) => card.flipped === false) ? (
            <p className="text-gray-800">Flip a card to get started</p>
          ) : (
            <p className="text-gray-800">You made it! 🚀</p>
          )}
          <p
            onClick={resetGame}
            className="text-green-800 hover:text-green-600 cursor-pointer"
          >
            Reset Game
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {game.map((card, index) => (
            <div key={index}>
              <MemoryCard
                id={index}
                color={card.color}
                game={game}
                flippedIndexes={flippedIndexes}
                setFlippedIndexes={setFlippedIndexes}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default MemoryBoard;
