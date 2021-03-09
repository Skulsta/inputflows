import React, { useState, useEffect } from "react";

const MemoryCard = ({
  id,
  color,
  game,
  flippedIndexes,
  setFlippedIndexes,
  gameCompleted,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (flippedIndexes[2] === true && flippedIndexes.indexOf(id) > -1) {
      setTimeout(() => {
        setIsFlipped(!isFlipped);
        setFlippedIndexes([]);
      }, 700);
    } else if (flippedIndexes[0] === true) {
      setIsFlipped(false);
      setFlippedIndexes([]);
    }
  }, [flippedIndexes]);

  const onCardClick = () => {
    if (!game[id].flipped && flippedIndexes.length < 2) {
      if (!game[id].flipped && flippedIndexes.length === 0) {
        setIsFlipped(!isFlipped);
        const newIndexes = [...flippedIndexes];
        newIndexes.push(id);
        setFlippedIndexes(newIndexes);
      } else if (!game[id].flipped && flippedIndexes.indexOf(id) < 0) {
        setIsFlipped(!isFlipped);
        const newIndexes = [...flippedIndexes];
        newIndexes.push(id);
        setFlippedIndexes(newIndexes);
      }
    }
  };

  return (
    <div
      onClick={onCardClick}
      className={`${
        !isFlipped ? "bg-green-800 bg-opacity-25" : "bg-gray-300"
      } flex justify-center items-center border cursor-pointer h-40 duration-200 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105`}
      style={{ background: isFlipped && color }}
    >
      {!isFlipped && <div className="text-2xl cursive">Inputflows</div>}
    </div>
  );
};

export default MemoryCard;
