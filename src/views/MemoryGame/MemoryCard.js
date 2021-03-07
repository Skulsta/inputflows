import React, { useState, useEffect } from "react";

const MemoryCard = ({
  id,
  color,
  game,
  flippedCount,
  setFlippedCount,
  flippedIndexes,
  setFlippedIndexes,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (flippedIndexes[2] === true && flippedIndexes.indexOf(id) > -1) {
      setTimeout(() => {
        setIsFlipped(!isFlipped);
        setFlippedCount(flippedCount + 1);
        setFlippedIndexes([]);
      }, 1000);
    } else if (flippedIndexes[2] === false && id === 0) {
      setFlippedCount(flippedCount + 1);
      setFlippedIndexes([]);
    }
  }, [flippedIndexes]);

  const onCardClick = () => {
    console.log(game);
    if (!game[id].flipped && flippedCount % 3 === 0) {
      setIsFlipped(!isFlipped);
      setFlippedCount(flippedCount + 1);
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
    } else if (
      flippedCount % 3 === 1 &&
      !game[id].flipped &&
      flippedIndexes.indexOf(id) < 0
    ) {
      setIsFlipped(!isFlipped);
      setFlippedCount(flippedCount + 1);
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
    }
  };

  return (
    <div
      onClick={onCardClick}
      className={`${
        !isFlipped ? "bg-green-800 bg-opacity-25" : "bg-gray-300"
      } flex justify-center items-center border cursor-pointer h-56`}
      style={{ background: isFlipped && color }}
    >
      {!isFlipped && <div className="text-2xl cursive">Inputflows</div>}
    </div>
  );
};

export default MemoryCard;
