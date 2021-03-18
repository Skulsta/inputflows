import React, { useState, useEffect } from "react";

const MemoryCard = ({ id, color, game, flippedIndexes, setFlippedIndexes }) => {
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
    if (
      !game[id].flipped &&
      flippedIndexes.indexOf(id) < 0 &&
      flippedIndexes.length < 2
    ) {
      setIsFlipped(!isFlipped);
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
    }
  };

  return (
    <div
      onClick={onCardClick}
      className={`${
        !isFlipped && "bg-blue-800 bg-opacity-25"
      } flex justify-center items-center border cursor-pointer h-40 duration-200 ease-in-out transform hover:shadow-lg sm:hover:-translate-y-1 sm:hover:scale-105`}
      style={{ background: isFlipped && color }}
    >
      {!isFlipped && (
        <div className="text-xl cursive text-gray-700">Inputflows</div>
      )}
    </div>
  );
};

export default MemoryCard;
