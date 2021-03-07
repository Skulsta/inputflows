import React, { useState, useEffect } from "react";

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
        id: 2 * i,
        pairId: i,
        cardFace: colors[i],
        flipped: false,
      };
      const secondCard = {
        id: 2 * i + 1,
        pairId: i,
        cardFace: colors[i],
        flipped: false,
      };

      newGame.push(firstCard);
      newGame.push(secondCard);
    }

    setGame(newGame.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    // Loads when the game variable changes
  }, [game]);

  if (flippedIndexes.length === 2) {
    // Runs if two cards have been flipped
  }

  function Card(props) {
    return <div>Card here</div>;
  }
  return (
    <div className="mt-8 grid grid-cols-3 gap-4">
      <div className="p-12 border"></div>
      <div className="p-12 border"></div>
      <div className="p-12 border"></div>
      {game.map((card, index) => (
        <div className="card" key={index}>
          <Card
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
