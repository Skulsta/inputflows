import React from "react";
import MemoryBoard from "./MemoryBoard";

export default function MemoryGame() {
  return (
    <div className="max-w-screen-xl mx-auto py-20 min-h-screen">
      <div className="px-4 max-w-xl mx-auto">
        <h2 className="text-2xl font-light text-gray-800">Memory Game</h2>
        <MemoryBoard />
      </div>
    </div>
  );
}
