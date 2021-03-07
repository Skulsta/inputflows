import React from "react";
import MemoryBoard from "./MemoryBoard";

export default function MemoryGame() {
  return (
    <div className="max-w-screen-xl mx-auto pb-8 min-h-screen">
      <div className="px-4 max-w-xl mx-auto">
        <div className="items-center my-8 space-y-4">
          <h2 className="text-2xl text-gray-800">
            Let's test your short-term memory
          </h2>
          <p className="text-gray-800">Flip a card to get started</p>
        </div>
        <MemoryBoard />
      </div>
    </div>
  );
}
