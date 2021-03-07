import React, { useState, useEffect } from "react";
import MemoryCard from "./MemoryCard";

export default function MemoryBoard() {
  const [game, setGame] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);
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
        colorId: i,
        color: colors[i],
        flipped: false,
      };
      const secondCard = {
        colorId: i,
        color: colors[i],
        flipped: false,
      };

      newGame.push(firstCard);
      newGame.push(secondCard);
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5);
    setGame(shuffledGame);
  }, []);

  if (flippedIndexes.length === 2) {
    console.log(flippedIndexes);
    const match =
      game[flippedIndexes[0]].colorId === game[flippedIndexes[1]].colorId;

    if (match) {
      const newGame = [...game];
      newGame[flippedIndexes[0]].flipped = true;
      newGame[flippedIndexes[1]].flipped = true;
      setGame(newGame);

      const newIndexes = [...flippedIndexes];
      newIndexes.push(false);
      setFlippedIndexes(newIndexes);
    } else {
      const newIndexes = [...flippedIndexes];
      newIndexes.push(true);
      setFlippedIndexes(newIndexes);
    }
  }

  if (game.length === 0) return <div>Loading...</div>;
  else {
    return (
      <div className="mt-8 grid grid-cols-3 gap-4">
        {game.map((card, index) => (
          <div key={index}>
            <MemoryCard
              id={index}
              color={card.color}
              game={game}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
              setFlippedIndexes={setFlippedIndexes}
            />
          </div>
        ))}
      </div>
    );
  }
}
