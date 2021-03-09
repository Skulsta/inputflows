import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";

export default function MemoryBoard() {
  const [game, setGame] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const numberOfCards = 12;

  const colors = [
    "#ecdb54",
    "#e34132",
    "#6ca0dc",
    "#944743",
    "#dbb2d1",
    "#ec9787",
    "#00a68c",
    "#645394",
    "#6c4f3d",
    "#ebe1df",
    "#bc6ca7",
    "#bfd833",
  ];

  useEffect(() => {
    const newGame = [];
    for (let i = 0; i < numberOfCards / 2; i++) {
      const firstCard = {
        pairId: i,
        color: colors[i],
        flipped: false,
      };
      const secondCard = {
        pairId: i,
        color: colors[i],
        flipped: false,
      };

      newGame.push(firstCard);
      newGame.push(secondCard);
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5);
    setGame(newGame);
  }, []);

  if (flippedIndexes.length === 2) {
    const isMatch =
      game[flippedIndexes[0]].pairId === game[flippedIndexes[1]].pairId;

    if (isMatch) {
      const newGame = [...game];
      newGame[flippedIndexes[0]].flipped = true;
      newGame[flippedIndexes[1]].flipped = true;
      game.some((card) => card.flipped === false)
        ? setGame(newGame)
        : console.log("Done!");

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
    );
  }
}
