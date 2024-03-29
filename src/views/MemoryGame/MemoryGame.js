import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import MemoryBoard from "./MemoryBoard";

const MemoryGame = () => {
  useEffect(() => {
    mixpanel.track("MemoryGame view");
  }, []);
  return (
    <div className="dark:bg-black">
      <div className="max-w-screen-xl mx-auto pb-8 min-h-screen">
        <div className="px-4 max-w-xl mx-auto">
          <div className="items-center space-y-4 mb-4">
            <h2 className="text-2xl dark:text-white pt-8">
              Let's test your short-term memory
            </h2>
          </div>
          <MemoryBoard />
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
