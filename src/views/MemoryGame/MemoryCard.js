import React, { useState, useEffect } from "react";
import { useSpring, animated as ani } from "react-spring";

export default function MemoryGame(
  id,
  color,
  game,
  flippedCount,
  setFlippedCount,
  flippedIndexes,
  setFlippedIndexes
) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  useEffect(() => {
    console.log("Flipped Indexes Changed");
  }, [flippedIndexes]);

  const onCardClick = () => {
    console.log("Card Clicked");
    setIsFlipped((state) => !state);
  };

  return (
    <div
      onClick={onCardClick}
      className={`${isFlipped && "border-red-800"} border px-8 py-24`}
    ></div>
  );
}
